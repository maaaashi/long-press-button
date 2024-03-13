import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'



@customElement('long-press-button')
export class LongPressButton extends LitElement {
  #timeId: number = 0;

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
      // ここに長押しした後に実行したい関数を記述
      alert('長押しが検出されました！');
    }, 3000); // 3000ミリ秒 = 3秒
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
