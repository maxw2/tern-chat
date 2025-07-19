import { css, html, LitElement } from 'lit'
import { customElement, property, query } from 'lit/decorators.js'

interface UploadFile {
  uid?: string
  progress?: number
  status?: 'waiting' | 'uploading' | 'success' | 'error'
  baseURL?: string
  file: File
}

interface XMLOptions {
  headers: object
  action: string
  method: string
  name: string
  filesList: Array<UploadFile>
}

interface Progress extends ProgressEvent<XMLHttpRequestEventTarget> {
  percent: number
}

@customElement('tern-upload-file')
export class Upload extends LitElement {
  static styles = css`
    .upload input[type='file'] {
      display: none;
    }
  `

  @query('.upload-input')
  inputEl!: HTMLInputElement

  //
  @property({ type: String })
  accept: string = 'image/*'
  @property({ type: Boolean })
  multiple: boolean = false
  @property({ type: Object })
  headers: object = {}
  @property({ type: String })
  action: string = '#'
  @property({ type: Number })
  method: string = 'POST'
  @property({ type: String })
  name: string = 'file'
  @property({ type: Function })
  httpRequest: Function | null = null
  @property({ type: Boolean })
  autoUpload: Boolean = true
  @property({ type: String })
  maxCount: number = 1
  @property({ type: Function })
  onProgress?: (evt: Progress) => void
  @property({ type: Function })
  onSuccess?: (evt: XMLHttpRequest) => void
  @property({ type: Function })
  onError?: (evt: XMLHttpRequest) => void
  @property({ type: Array })
  private fileList: Array<UploadFile> = []

  _onchange = new CustomEvent('change', {
    detail: { fileList: this.fileList },
  })

  async changeEvent(ev: Event) {
    const files = (ev.target as HTMLInputElement).files
    if (this.fileList.length + files.length > this.maxCount) {
      this.dispatchEvent(
        new CustomEvent('error', {
          detail: {
            fileList: this.fileList,
            message: '超出数量限制',
            maxCount: this.maxCount,
          },
          // bubbles: true,
          // composed: true,
        })
      )
      // ❌ 超出数量限制
      this.inputEl.value = '' // 清空选择，阻止继续
      return
    }
    if (files.length) {
      await Promise.allSettled(
        Array.from(files).map((val) => fileToBase64(val))
      ).then((res) => {
        res.forEach((item, index) => {
          if (item.status === 'fulfilled') {
            this.fileList.push({
              uid: crypto.randomUUID(),
              baseURL: item.value,
              file: files[index],
              status: 'waiting',
            })
          }
        })
      })
      this.dispatchEvent(this._onchange)
      if(this.autoUpload) this.submit()
    }
  }

  submit() {
    console.log(this.onError, 'onError')
    if (this.httpRequest) this.httpRequest()
    else {
      fileRequest(
        {
          headers: this.headers,
          action: this.action,
          name: this.name,
          method: this.method,
          filesList: this.fileList,
        },
        this.onProgress,
        this.onSuccess,
        this.onError
      )
    }
  }

  render() {
    return html`<div class="upload" @click=${() => this.inputEl.click()}>
      <input
        class="upload-input"
        type="file"
        accept=${this.accept}
        ?multiple=${this.multiple}
        @change=${this.changeEvent}
      />
      <slot></slot>
    </div> `
  }
}

function fileRequest(
  option: XMLOptions,
  onProgress: (evt: Progress) => void,
  onSuccess: (evt: XMLHttpRequest) => void,
  onError: (evt: XMLHttpRequest) => void
) {
  const xhr = new XMLHttpRequest()

  xhr.open(option.method, option.action, true)

  const formData = new FormData()
  for (const [_key, value] of Object.entries(option.filesList)) {
    formData.append(option.name, value.file)
  }

  xhr.addEventListener('load', () => {
    if (xhr.status < 200 || xhr.status >= 300) {
      option.filesList.forEach((val) => {
        val.status = 'error'
      })
      return onError && onError(xhr)
    }
    option.filesList.forEach((val) => {
      val.status = 'success'
    })
    onSuccess && onSuccess(xhr)
  })

  xhr.addEventListener('error', () => {
    option.filesList.forEach((val) => {
      val.status = 'error'
    })
    onError && onError(xhr)
  })

  xhr.addEventListener(
    'progress',
    (evt: ProgressEvent<XMLHttpRequestEventTarget>) => {
      const percent = evt.total > 0 ? (evt.loaded / evt.total) * 100 : 0
      onProgress({ ...evt, percent })
    }
  )

  //
  if (option.headers) {
    for (const [key, value] of Object.entries(option.headers)) {
      xhr.setRequestHeader(key, value)
    }
  }

  xhr.send(formData)

  return xhr
}

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file) // 转为 base64 的 data URL
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = reject
  })
}
