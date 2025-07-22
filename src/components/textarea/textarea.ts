import { html, LitElement, PropertyValues } from "lit";
import { customElement } from "lit/decorators.js";
import { spreadAttributes } from "../../utils/index.js";

@customElement('tern-textarea')
export class TextArea extends LitElement { 
    firstUpdated(_changedProperties: PropertyValues): void {
        console.log('firstUpdated', this.attributes)    
        console.log('cloneAttributes(this)', spreadAttributes(this))
    }
    render() {
        return html`
            <div>
                <textarea id="story" name="story" rows="2"></textarea>
            </div>
        `
    }

}