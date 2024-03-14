import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('long-press-button')
export class LongPressButton extends LitElement {
  #timeId: number = 0;

  @property({ attribute: false }) onLongPress = () => {};

  @property({ type: Number }) duration = 3000;

  @property({ type: String }) text = 'Click';

  @property({ type: String, attribute: 'holding-text' }) holdingText = 'HOLDING...';

  render() {
    return html`
      <button
        @mousedown="${this.#handleMouseDown}"
        @mouseup="${this.#handleMouseUp}"
        @mouseleave="${this.#handleMouseLeave}"
      >
        ${this.text}
      </button>
    `
  }

  static styles = css`
    :host {
      --padding: 5px 10px;
      --border-radius: 5px;
      --background-color: #f5f5f5;
      --color: #333;
      --border: 1px solid #111;
      --font-family: Arial, sans-serif;
      --height: 40px;
    }

    button {
      padding: var(--padding);
      border-radius: var(--border-radius);
      background-color: var(--background-color);
      color: var(--color);
      border: var(--border);
      font-family: var(--font-family);
      height: var(--height);
      cursor: pointer;
    }
  `
  
  #handleMouseDown() {
    this.text = this.holdingText;
    this.#timeId = setTimeout(() => {
      this.onLongPress();
    }, this.duration);
  }
  
  #handleMouseUp() {
    this.#releaseButton()
  }
  
  #handleMouseLeave() {
    this.#releaseButton()
  }
  
  #releaseButton() {
    this.text = this.attributes.getNamedItem('text')?.value || '';
    clearTimeout(this.#timeId);  
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'long-press-button': LongPressButton
  }
}
