import { css, html, LitElement } from 'lit'
import { customElement, property, query } from 'lit/decorators.js'
import { when } from 'lit/directives/when.js'
import './preview.js'

type ImageState = 'init' | 'loading' | 'error' | 'success'

@customElement('tern-image')
export class TernImage extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    .image {
      width: 100%;
      height: 100%;
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }
      .placeholder {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }
    }
  `

  @query('.image')
  contentEl: HTMLDivElement
  @query('.image .default-image')
  imgEl: HTMLImageElement

  @property({ type: String })
  alt: string = ''
  @property({ type: String })
  src: string = ''
  @property({ type: String })
  placeholder?: string = ''
  @property({ type: String })
  errorSrc?: string = ''
  @property({ type: Boolean })
  lazy: boolean = true
  @property({ type: String })
  fit: string = 'cover'
  @property({ type: Number })
  throttle: number = 500
  @property({ type: Number })
  delay: number = 0
  @property({ type: Function })
  httpError: (evt: ErrorEvent) => void
  @property({ type: String })
  private imageState: ImageState = 'init'
  @property({ type: Boolean })
  private isHover: boolean = false
  private timeout: number
  private observer: IntersectionObserver

  onImageLoad() {
    setTimeout(() => {
      this.imageState = 'success'
      this.observer?.disconnect()
    }, this.delay)
  }

  onImageError(ev) {
    this.imageState = 'error'
    this.httpError && this.httpError(ev)
  }

  onMouseenter() {
    this.isHover = true
  }

  onMouseleave(ev) {
    this.isHover = false
  }

  showPreview() {
    const preview = document.createElement('tern-preview')
    preview.src = this.src
    document.body.appendChild(preview)
  }

  firstUpdated() {
    if (this.lazy) {
      this.observer = new IntersectionObserver((entries) => {
        const isIntersecting = entries[0].isIntersecting
        if (isIntersecting)
          this.timeout = setTimeout(
            () => (this.imgEl.src = this.src),
            this.throttle
          )
        else clearTimeout(this.timeout)
      })

      this.observer.observe(this.contentEl)
    } else {
      this.imgEl.src = this.src
    }
  }

  render() {
    return html`<div
      class="image"
      @mouseenter="${this.onMouseenter}"
      @mouseleave="${this.onMouseleave}"
      @click="${this.showPreview}"
    >
      ${this.imageState !== 'error'
        ? html`<img
            class="default-image"
            alt="${this.alt}"
            style="object-fit: ${this.fit}"
            @load="${this.onImageLoad}"
            @error="${this.onImageError}"
          />`
        : null}
      ${this.imageState === 'init' || this.imageState === 'loading'
        ? when(
            this.placeholder,
            () => html` <img
              class="placeholder placeholder-loading"
              src="${this.placeholder}"
              alt="${this.alt}"
              style="object-fit: ${this.fit}"
            />`,
            () => html` <div class="placeholder placeholder-loading">
              <slot></slot>
            </div>`
          )
        : null}
      ${this.imageState === 'error'
        ? when(
            this.errorSrc,
            () => html` <img
              class="placeholder placeholder-error"
              src="${this.errorSrc}"
              alt="${this.alt}"
              style="object-fit: ${this.fit}"
            />`,
            () => html`<div class="placeholder placeholder-error">
              <slot name="error"></slot>
            </div>`
          )
        : null}
      ${this.isHover && this.imageState === 'success'
        ? html` <div class="placeholder placeholder-preview">
            <slot name="preview"></slot>
          </div>`
        : null}
    </div>`
  }
}
