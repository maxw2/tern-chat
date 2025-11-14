import { css, html, LitElement, PropertyValues } from 'lit'
import { customElement, property, query, state } from 'lit/decorators.js'
import { repeat } from 'lit/directives/repeat.js'
import { unsafeHTML } from 'lit/directives/unsafe-html.js'
import { when } from 'lit/directives/when.js'
import { debounce, isScrollDown } from '../../utils/index.js'

interface Position {
  id: number
  index: number
  width: number
  height: number
  top: number
  bottom: number
}

@customElement('tern-virtual-list')
export class TernVirtualList extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    .virtual-list {
      width: 100%;
      height: 100%;
      overflow-y: auto;
      position: relative;
    }
    .list-items {
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      will-change: transform;
    }

    .list-item {
      width: 100%;
      box-sizing: border-box;
    }
  `

  @query('.virtual-list')
  listEl!: HTMLDivElement
  @query('.list-items')
  itemEl!: HTMLDivElement
  @query('.list-item')
  itemEls!: HTMLDivElement
  @query('slot')
  slotElement!: HTMLSlotElement

  @property({ type: Array })
  list: Array<unknown> = []
  @property({ type: Number })
  itemMax: number = 10
  @property({ type: Number })
  estimate: number = 50
  @property({ type: Number })
  buffer: number = 5
  @property({ type: Boolean })
  autoHeight: boolean = false
  @property({ attribute: false })
  renderItem: (item: unknown, index: number) => string
  @property({ type: Array })
  private itemsList: unknown[] = []

  @state()
  private top: number = 0
  @state()
  private maxHeight = '0px'
  startIdx = 0
  startBuffer = 0
  posMap: Map<number, Position> = new Map()
  observer: Array<ResizeObserver> = []
  cacheScrollTop: number = 0

  connectedCallback() {
    super.connectedCallback()
    this.getItemsList()
    this.initPositions()
    this.getMaxHeight()
  }

  firstUpdated(_changedProperties: PropertyValues): void {
    if (this.autoHeight) {
      this.resizeObserver()
      this.getMaxHeight()
    }
  }

  findStartIndex(scrollTop: number): number {
    const positions = Array.from(this.posMap.values())
    let low = 0
    let high = positions.length - 1

    while (low <= high) {
      const mid = Math.floor((low + high) / 2)
      const pos = positions[mid]

      if (pos.top <= scrollTop && pos.bottom > scrollTop) {
        return pos.index
      } else if (pos.bottom <= scrollTop) {
        low = mid + 1
      } else {
        high = mid - 1
      }
    }

    return 0
  }

  getItemsList() {
    this.startBuffer =
      this.startIdx - this.buffer >= 0 ? this.startIdx - this.buffer : 0
    const lastBuffer = this.startIdx + this.itemMax + this.buffer
    const list = this.list.slice(this.startBuffer, lastBuffer)
    this.itemsList = list
    this.dispatchEvent(
      new CustomEvent('change', {
        detail: {
          list,
          startIdx: this.startIdx,
        },
      })
    )
    return list
  }

  getMaxHeight() {
    const len = this.list.length - 1 || 0
    const lastPos = this.posMap.get(len)
    this.maxHeight = lastPos?.bottom + 'px' || '0px'
    return lastPos?.bottom + 'px' || '0px'
  }

  initPositions() {
    this.list.forEach((_item, index) => {
      this.posMap.set(index, {
        id: index,
        index: index,
        width: this.estimate,
        height: this.estimate,
        top: index * this.estimate,
        bottom: (index + 1) * this.estimate,
      })
    })
  }

  resizeObserver(isObserver: boolean = true) {
    const children = this.renderItem
      ? this.itemEl.children
      : this.slotElement.assignedElements()
    if (this.observer.length) this.observer.forEach((obs) => obs.disconnect())
    this.observer = []
    if (!isObserver) return
    Array.from(children).forEach((el, index) => {
      const resizeObserver = new ResizeObserver((entries) => {
        const idx = this.startIdx + index
        const entrie = entries[0]
        const rootNode = entrie.target.getRootNode()
        const stillInDOM =
          (rootNode instanceof Document && document.contains(entrie.target)) ||
          (rootNode instanceof ShadowRoot && rootNode.host.isConnected)

        if (stillInDOM) {
          const prev = this.posMap.get(idx - 1)
          const top = prev ? prev.bottom : 0
          const styles = getComputedStyle(entrie.target)
          const marginBottom = parseFloat(styles.marginBottom)

          this.posMap.set(idx, {
            id: idx,
            index: idx,
            width: entrie.borderBoxSize[0].inlineSize,
            height: entrie.borderBoxSize[0].blockSize,
            top: top,
            bottom: top + entrie.borderBoxSize[0].blockSize + marginBottom,
          })
        }

        // 修正其余数据
        if (index >= children.length - 1) {
          const size = this.posMap.size
          let top = this.posMap.get(idx).top

          for (let i = idx + 1; i < size; i++) {
            const tarPos = this.posMap.get(i)
            this.posMap.set(i, {
              ...tarPos,
              top: top,
              bottom: top + tarPos.height,
            })
            top = top + tarPos.height
          }
        }
      })
      resizeObserver.observe(el)
      this.observer.push(resizeObserver)
    })
  }

  fn = debounce(this.resizeObserver, 100)

  // Event
  onScroll(ev: Event) {
    const target = ev.target as HTMLElement
    const scrollTop = target.scrollTop
    const isDown = isScrollDown(this.cacheScrollTop, scrollTop)
    if (this.autoHeight) {
      window.requestAnimationFrame(() => {
        // this.resizeObserver(isDown)
        this.fn(isDown)
        this.startIdx = this.findStartIndex(scrollTop)
        this.getItemsList()

        const curPos = this.posMap.get(this.startIdx)
        const bufferTop =
          this.startIdx >= this.buffer
            ? this.posMap.get(this.buffer).top
            : curPos.top

        this.top = scrollTop - (scrollTop % curPos.top) - bufferTop
      })
    } else {
      this.startIdx = this.findStartIndex(scrollTop)
      this.getItemsList()

      const curPos = this.posMap.get(this.startIdx)
      const bufferTop =
        this.startIdx >= this.buffer
          ? this.posMap.get(this.buffer).top
          : curPos.top

      this.top = scrollTop - (scrollTop % curPos.top) - bufferTop
    }

    this.getMaxHeight()
    this.cacheScrollTop = scrollTop
  }

  render() {
    return html`<div class="virtual-list" @scroll=${this.onScroll}>
      <div class="list-container" style="height:${this.maxHeight}"></div>
      <div class="list-items" style="transform: translateY(${this.top}px)">
        ${when(
          this.renderItem,
          () =>
            repeat(
              this.itemsList,
              (_item, index) => this.startBuffer + index,
              (item, index) => html`<div
                class="list-item"
                data-key="${this.startIdx + index}"
              >
                ${unsafeHTML(this.renderItem(item, this.startBuffer + index))}
              </div>`
            ),
          () => html`<slot></slot>`
        )}
      </div>
    </div>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'tern-virtual-list': TernVirtualList
  }
}
