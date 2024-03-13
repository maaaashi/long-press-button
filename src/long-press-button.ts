import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'



@customElement('long-press-button')
export class LongPressButton extends LitElement {
  render() {
    return html`
      <button><slot></slot></button>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'long-press-button': LongPressButton
  }
}
