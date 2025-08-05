import { css, html, LitElement } from 'lit'
import { customElement, property, query, state } from 'lit/decorators.js'

interface Page {
  startX: number
  startY: number
  moveX: number
  moveY: number
  x: number
  y: number
  isTouch: boolean
}

@customElement('tern-preview')
export class TernPreview extends LitElement {
  static styles = css`
    :host {
      position: fixed;
      top: 0px;
      left: 0px;
      right: 0px;
      bottom: 0px;
      width: 100vw;
      height: 100vh;
      z-index: 3000;
    }
    .preview {
      position: fixed;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      background-color: #f5f5f5;
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgba(0, 0, 0, 0.45);
      .cancel {
        cursor: pointer;
        position: absolute;
        top: 32px;
        right: 32px;
        width: 42px;
        height: 42px;
        background: rgba(0, 0, 0, 0.1);
        border-radius: 50%;
      }
      .cancel::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
        display: block;
        width: 2px;
        height: 18px;
        background: #fff;
      }
      .cancel::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(135deg);
        display: block;
        width: 2px;
        height: 18px;
        background: #fff;
      }
      img {
        max-width: 50%;
        max-height: 50%;
        cursor: grab;
        user-select: none;
        /* user-drag: none; */
        -webkit-user-drag: none;
        pointer-events: auto;
      }
    }
  `

  @query('.preview img')
  imgEl: HTMLImageElement

  @property({ type: Number })
  private scale: number = 1
  @property({ type: String })
  src: string = ''
  @state()
  isShow: boolean = false

  page: Page = {
    isTouch: false,
    startX: 0,
    startY: 0,
    moveX: 0,
    moveY: 0,
    x: 0,
    y: 0,
  }

  firstUpdated() {
    const body = document.querySelector('body')
    body.style.overflow = 'hidden'
    setTimeout(() => (this.isShow = true))
  }

  disconnectedCallback() {
    const body = document.querySelector('body')
    body.style.overflow = ''
    this.isShow = false
  }

  onWheel(ev: WheelEvent) {
    const zoomFactor = 0.2
    if (ev.deltaY < 0) this.scale += zoomFactor
    else this.scale -= zoomFactor

    this.scale = Math.min(Math.max(this.scale, 0.1), 8) // 限制缩放范围
  }

  onMouseDown(ev) {
    this.page.isTouch = true
    this.page.startX = ev.clientX
    this.page.startY = ev.clientY
    this.page.moveX = ev.clientX
    this.page.moveY = ev.clientY
  }

  onMouseUp(ev) {
    this.page.isTouch = false
    this.page.startX = 0
    this.page.startY = 0
    this.page.moveX = 0
    this.page.moveY = 0
  }

  onMouseMove(ev) {
    if (!this.page.isTouch) return
    this.page.x += ev.clientX - this.page.moveX
    this.page.y += ev.clientY - this.page.moveY
    this.page.moveX = ev.clientX
    this.page.moveY = ev.clientY

    this.imgEl.style.transform = `scale(${this.scale}) translate(${
      this.page.x / this.scale
    }px, ${this.page.y / this.scale}px)`
  }

  close() {
    this.isShow = false
    setTimeout(() => {
      this.remove()
    }, 0)
  }

  render() {
    return html`<div
      class="preview"
      @wheel=${this.onWheel}
      @mouseup=${this.onMouseUp}
      @mousemove=${this.onMouseMove}
      @mouseleave=${this.onMouseUp}
    >
      <div class="cancel" @click="${this.close}"></div>
      <img
        src="${this.src}"
        @mousedown=${this.onMouseDown}
        style="transform: scale(${this.scale}) translate(${this.page.x / this.scale}px, ${this.page.y / this.scale}px)"
      />
    </div>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'tern-preview': TernPreview
  }
}
