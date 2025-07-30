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
  isMove: boolean
  contentWidth: number
  contentHeight: number
  scrollWidth: number
  scrollHeight: number
}

type PropsAlign = 'start' | 'center' | 'none'

@customElement('tern-scroll')
export class TernScroll extends LitElement {
  static styles = css`
    :host {
      display: block;
      user-select: none;
      position: relative;
    }
    .tern-scroll {
      width: 100%;
      height: 100%;
      overflow: hidden;
      .scroll-content {
        white-space: nowrap;
        ::slotted(*) {
          display: inline-block;
        }
      }
    }
  `
  @query('.tern-scroll')
  scrollEl: HTMLDivElement
  @query('.scroll-content')
  contentEl: HTMLDivElement
  @query('slot')
  slotEl: HTMLSlotElement

  @property({ type: String })
  align: PropsAlign = 'none'

  @state()
  private page: Page = {
    isTouch: false,
    isMove: false,
    startX: 0,
    startY: 0,
    moveX: 0,
    moveY: 0,
    x: 0,
    y: 0,
    contentWidth: 0,
    contentHeight: 0,
    scrollWidth: 0,
    scrollHeight: 0,
  }

  connectedCallback(): void {
    super.connectedCallback()
    window.addEventListener('pointermove', this.onMouseMove)
    window.addEventListener('pointerup', this.onMouseUp)
    window.addEventListener('pointerleave', this.onMouseUp)
  }

  disconnectedCallback(): void {
    super.disconnectedCallback()
    window.removeEventListener('pointermove', this.onMouseMove)
    window.removeEventListener('pointerup', this.onMouseUp)
    window.removeEventListener('pointerleave', this.onMouseUp)
  }

  private onMouseDown(ev) {
    this.page.isTouch = true
    this.page.isMove = false
    this.page.startX = ev.clientX
    this.page.startY = ev.clientY
    this.page.moveX = ev.clientX
    this.page.moveY = ev.clientY
  }

  private onMouseMove = (ev) => {
    if (!this.page.isTouch) return
    this.page.isMove = true
    this.page.x += ev.clientX - this.page.moveX
    this.page.y += ev.clientY - this.page.moveY
    this.page.moveX = ev.clientX
    this.page.moveY = ev.clientY

    this.contentEl.style.transform = `translateX(${this.page.x}px)`
  }

  private onMouseUp = () => {
    this.page.isTouch = false
    this.page.startX = 0
    this.page.startY = 0
    this.page.moveX = 0
    this.page.moveY = 0

    const content = getContentSize(this.slotEl)
    const scroll = getScrollSize(this.scrollEl)
    this.page.contentWidth = content.width
    this.page.contentHeight = content.height
    this.page.scrollWidth = scroll.width
    this.page.scrollHeight = scroll.height

    if (this.page.x > 0) {
      smoothScrollTo.call(this, this.contentEl, this.page.x, 0)
    } else if (
      this.page.x < -(this.page.contentWidth - this.page.scrollWidth)
    ) {
      smoothScrollTo.call(
        this,
        this.contentEl,
        this.page.x,
        -(this.page.contentWidth - this.page.scrollWidth)
      )
    }
  }

  private onWheel(ev: WheelEvent) {
    if (
      this.page.x >= 0 ||
      this.page.x >= -(this.page.contentWidth - this.page.scrollWidth)
    )
      return

    if (ev.deltaX < 0 || ev.deltaY < 0) this.page.x += 30
    else this.page.x -= 30
    this.contentEl.style.transform = `translateX(${this.page.x}px)`
  }

  private onClick(ev: MouseEvent) {
    const target = ev.target as HTMLElement

    if (
      !this.page.isMove &&
      -target.offsetLeft > -(this.page.contentWidth - this.page.scrollWidth)
    )
      this.smoothScrollTo(-target.offsetLeft)
  }

  smoothScrollTo(target: number) {
    smoothScrollTo.call(this, this.contentEl, this.page.x, target)
  }

  render() {
    return html`<div
      class="tern-scroll"
      @wheel=${this.onWheel}
      @pointerdown=${this.onMouseDown}
    >
      <div class="scroll-content" @click=${this.onClick}>
        <slot></slot>
      </div>
    </div>`
  }
}

function smoothScrollTo(
  this: TernScroll,
  container: HTMLElement,
  current: number,
  target: number
) {
  const duration = 300
  const start = current
  const change = target - start
  const startTime = performance.now()

  function animate(time) {
    const elapsed = time - startTime
    if (elapsed < duration) {
      this.page.x = easeOut(elapsed, start, change, duration)
      container.style.transform = `translateX(${this.page.x}px)`
      requestAnimationFrame(animate.bind(this))
    } else {
      container.style.transform = `translateX(${target}px)`
      this.page.x = target
    }
  }

  requestAnimationFrame(animate.bind(this))
}

// 缓动函数（easeOutCubic）
function easeOut(t: number, b: number, c: number, d: number): number {
  t /= d
  t--
  return c * (t * t * t + 1) + b
}

function getScrollSize(el: HTMLElement): {
  width: number
  height: number
} {
  return {
    width: el.clientWidth,
    height: el.clientHeight,
  }
}

function getContentSize(slot: HTMLSlotElement): {
  width: number
  height: number
} {
  const assignedElements = slot.assignedElements({ flatten: true })
  const len = assignedElements.length
  const lastEle = assignedElements[len - 1]

  if (lastEle instanceof HTMLElement) {
    return {
      width: lastEle.offsetLeft + lastEle.offsetWidth,
      height: lastEle.offsetTop + lastEle.offsetHeight,
    }
  } else {
    const rect = lastEle.getBoundingClientRect()
    return {
      width: rect.right,
      height: rect.bottom,
    }
  }
}
