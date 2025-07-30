import { css, html, LitElement, PropertyValues } from 'lit'
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
  withCredentials: boolean
  filesList: Array<UploadFile>
}

interface Progress extends ProgressEvent<XMLHttpRequestEventTarget> {
  percent: number
}

@customElement('tern-upload-file')
export class TernUpload extends LitElement {
  static styles = css`
    :host {
      display: inline-flex;
    }
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
  @property({ type: String })
  method: string = 'POST'
  @property({ type: Boolean })
  withCredentials: boolean = false
  @property({ type: String })
  name: string = 'file'
  @property({ type: Function })
  httpRequest: (fileList: Array<UploadFile>) => any
  @property({ type: Boolean })
  autoUpload: boolean = true
  @property({ type: Number })
  limit: number = 1
  @property({ type: Function })
  httpProgress?: (evt: Progress) => void
  @property({ type: Function })
  httpSuccess?: (evt: XMLHttpRequest) => void
  @property({ type: Function })
  httpError?: (evt: XMLHttpRequest) => void
  @property({ type: Function })
  beforeUpload: (fileList: Array<UploadFile>) => Promise<Array<UploadFile>>
  @property({ type: Array })
  private fileList: Array<UploadFile> = []

  _onChange = new CustomEvent('change', {
    detail: { fileList: this.fileList },
  })
  _onError = new CustomEvent('error', {
    detail: {
      fileList: this.fileList,
      message: '超出数量限制',
      limit: this.limit,
    },
    // bubbles: true,
    // composed: true,
  })

  async changeEvent(ev: Event) {
    const files = (ev.target as HTMLInputElement).files
    if (this.fileList.length + files.length > this.limit && this.limit > 1) {
      this.dispatchEvent(this._onError)
      // ❌ 超出数量限制
      this.inputEl.value = '' // 清空选择，阻止继续
      return
    }

    if (this.limit === 1) this.fileList.pop()

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
      this.dispatchEvent(this._onChange)
      if (this.autoUpload) this.submit()
    }
  }

  submit() {
    if (this.httpRequest) {
      this.beforeUpload
        ? this.beforeUpload(this.fileList).then(this.httpRequest)
        : this.httpRequest(this.fileList)
    } else {
      this.beforeUpload
        ? this.beforeUpload(this.fileList).then((ev) =>
            fileRequest(
              {
                headers: this.headers,
                action: this.action,
                name: this.name,
                method: this.method,
                withCredentials: this.withCredentials,
                filesList: ev,
              },
              this.httpProgress,
              this.httpSuccess,
              this.httpError
            )
          )
        : fileRequest(
            {
              headers: this.headers,
              action: this.action,
              name: this.name,
              method: this.method,
              withCredentials: this.withCredentials,
              filesList: this.fileList,
            },
            this.httpProgress,
            this.httpSuccess,
            this.httpError
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
  httpProgress: (evt: Progress) => void,
  httpSuccess: (evt: XMLHttpRequest) => void,
  httpError: (evt: XMLHttpRequest) => void
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
      return httpError && httpError(xhr)
    }
    option.filesList.forEach((val) => {
      val.status = 'success'
    })
    httpSuccess && httpSuccess(xhr)
  })

  xhr.addEventListener('error', () => {
    option.filesList.forEach((val) => {
      val.status = 'error'
    })
    httpError && httpError(xhr)
  })

  xhr.addEventListener(
    'progress',
    (evt: ProgressEvent<XMLHttpRequestEventTarget>) => {
      const percent = evt.total > 0 ? (evt.loaded / evt.total) * 100 : 0
      httpProgress && httpProgress({ ...evt, percent })
    }
  )

  //
  if (option.headers) {
    for (const [key, value] of Object.entries(option.headers)) {
      xhr.setRequestHeader(key, value)
    }
  }
  xhr.withCredentials = option.withCredentials
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
