import { css, html, LitElement } from 'lit'
import { customElement, property, query } from 'lit/decorators.js'
import { repeat } from 'lit/directives/repeat.js'
import { unsafeHTML } from 'lit/directives/unsafe-html.js'
import { when } from 'lit/directives/when.js'

interface Position {
  id: number
  index: number
  width: number
  height: number
  top: number
  bottom: number
}

@customElement('tern-virtual-list')
export class VirtualList extends LitElement {
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
  @property({ type: Function })
  renderItem: (item: unknown, index: number) => string
  @property({ type: Array })
  private itemsList: unknown[] = []
  @property({ type: Number })
  private top: number = 0

  startIdx = 0
  startBuffer = 0
  posMap: Map<number, Position> = new Map()
  bufferTop: number = 0

  connectedCallback() {
    super.connectedCallback()
    this.getItemsList()
    this.initPositions()
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

  // Event
  async onScroll(ev: Event) {
    const target = ev.target as HTMLElement
    const scrollTop = target.scrollTop

    this.startIdx = this.findStartIndex(scrollTop)

    const bufferTop =
      this.startIdx >= this.buffer
        ? this.buffer * this.estimate
        : this.startIdx * this.estimate
    this.top = scrollTop - (scrollTop % this.estimate) - bufferTop
    this.getItemsList()
  }

  render() {
    return html`<div class="virtual-list" @scroll=${this.onScroll}>
      <div class="list-container" style="height:${this.getMaxHeight()}"></div>
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
    'virtual-list': VirtualList
  }
}
