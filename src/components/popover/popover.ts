import { html, LitElement } from 'lit'

export class ternPopover extends LitElement {
  render() {
    return html`<div class="popover">
      <div class="reference">
        <slot></slot>
      </div>
      <div class="default">
        <slot></slot>
      </div>
    </div>`
  }
}
