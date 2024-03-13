import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('long-press-button')
export class LongPressButton extends LitElement {
  render() {
    return html`
      <div>
        test
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'long-press-button': LongPressButton
  }
}
