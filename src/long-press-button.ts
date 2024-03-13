import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'



@customElement('long-press-button')
export class LongPressButton extends LitElement {
  #timeId: number = 0;

  @property({ attribute: false }) onLongPress = () => {};

  @property({ type: Number }) duration = 3000;

  render() {
    return html`
      <button
        @mousedown="${this.#handleMouseDown}"
        @mouseup="${this.#handleMouseUp}"
        @mouseleave="${this.#handleMouseLeave}"
      >
        <slot></slot>
      </button>
    `
  }
  
  #handleMouseDown() {
    this.#timeId = setTimeout(() => {
      this.onLongPress();
    }, this.duration);
  }

  #handleMouseUp() {
    clearTimeout(this.#timeId);
  }

  #handleMouseLeave() {
    clearTimeout(this.#timeId);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'long-press-button': LongPressButton
  }
}
