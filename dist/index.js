Object.defineProperty(exports, "__esModule", { value: true });
exports.VirtualList = void 0;
const tslib_1 = require("tslib");
const lit_1 = require("lit");
const decorators_js_1 = require("lit/decorators.js");
let VirtualList = class VirtualList extends lit_1.LitElement {
    constructor() {
        super(...arguments);
        this.list = [];
        this.itemMax = 40;
        this.estimate = 50;
        this.buffer = 5;
        this.itemsList = [];
        this.top = 0;
        this.startIdx = 0;
        this.startBuffer = 0;
        this.posMap = new Map();
        this.bufferTop = 0;
    }
    async onScroll(ev) {
        const target = ev.target;
        const scrollTop = target.scrollTop;
        this.startIdx = this.findStartIndex(scrollTop);
        const bufferTop = this.startIdx >= this.buffer
            ? this.buffer * this.estimate
            : this.startIdx * this.estimate;
        this.top = scrollTop - (scrollTop % this.estimate) - bufferTop;
        this.getItemsList();
    }
    findStartIndex(scrollTop) {
        const positions = Array.from(this.posMap.values());
        let low = 0;
        let high = positions.length - 1;
        while (low <= high) {
            const mid = Math.floor((low + high) / 2);
            const pos = positions[mid];
            if (pos.top <= scrollTop && pos.bottom > scrollTop) {
                return pos.index;
            }
            else if (pos.bottom <= scrollTop) {
                low = mid + 1;
            }
            else {
                high = mid - 1;
            }
        }
        return 0;
    }
    getItemsList() {
        this.startBuffer =
            this.startIdx - this.buffer >= 0 ? this.startIdx - this.buffer : 0;
        const lastBuffer = this.startIdx + this.itemMax + this.buffer;
        const list = this.list.slice(this.startBuffer, lastBuffer);
        this.itemsList = list;
        this.dispatchEvent(new CustomEvent('items-list-change', { detail: list }));
        return list;
    }
    getMaxHeight() {
        const len = this.list.length - 1 || 0;
        const lastPos = this.posMap.get(len);
        return lastPos.bottom + 'px';
    }
    initPositions() {
        this.list.forEach((item, index) => {
            this.posMap.set(index, {
                id: index,
                index: index,
                width: this.estimate,
                height: this.estimate,
                top: index * this.estimate,
                bottom: (index + 1) * this.estimate,
            });
        });
    }
    connectedCallback() {
        super.connectedCallback();
        this.getItemsList();
        this.initPositions();
    }
    render() {
        return (0, lit_1.html) `<div class="virtual-list" @scroll=${this.onScroll}>
      <div class="list-container" style="height:${this.getMaxHeight()}"></div>
      <div class="list-items" style="transform: translateY(${this.top}px)">
        <slot></slot>
      </div>
    </div>`;
    }
};
exports.VirtualList = VirtualList;
VirtualList.styles = (0, lit_1.css) `
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
  `;
tslib_1.__decorate([
    (0, decorators_js_1.query)('.virtual-list')
], VirtualList.prototype, "listEl", void 0);
tslib_1.__decorate([
    (0, decorators_js_1.query)('.list-items')
], VirtualList.prototype, "itemEl", void 0);
tslib_1.__decorate([
    (0, decorators_js_1.query)('.list-item')
], VirtualList.prototype, "itemEls", void 0);
tslib_1.__decorate([
    (0, decorators_js_1.property)({ type: Array })
], VirtualList.prototype, "list", void 0);
tslib_1.__decorate([
    (0, decorators_js_1.property)({ type: Number })
], VirtualList.prototype, "itemMax", void 0);
tslib_1.__decorate([
    (0, decorators_js_1.property)({ type: Number })
], VirtualList.prototype, "estimate", void 0);
tslib_1.__decorate([
    (0, decorators_js_1.property)({ type: Number })
], VirtualList.prototype, "buffer", void 0);
tslib_1.__decorate([
    (0, decorators_js_1.property)({ type: Function })
], VirtualList.prototype, "renderItem", void 0);
tslib_1.__decorate([
    (0, decorators_js_1.property)({ type: Array })
], VirtualList.prototype, "itemsList", void 0);
tslib_1.__decorate([
    (0, decorators_js_1.property)({ type: Number })
], VirtualList.prototype, "top", void 0);
exports.VirtualList = VirtualList = tslib_1.__decorate([
    (0, decorators_js_1.customElement)('virtual-list')
], VirtualList);
