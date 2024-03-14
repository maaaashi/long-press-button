import { LitElement, css, html } from 'lit'
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

  static styles = css`
    :host {
      --padding: 5px 10px;
      --border-radius: 5px;
      --background-color: #f5f5f5;
      --color: #333;
      --border: 1px solid #111;
      --font-family: Arial, sans-serif;
    }

    button {
      padding: var(--padding);
      border-radius: var(--border-radius);
      background-color: var(--background-color);
      color: var(--color);
      border: var(--border);
      font-family: var(--font-family);
      cursor: pointer;
    }
  `
  
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
