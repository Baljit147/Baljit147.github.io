class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<h1>Hello world</h1>`;
  }
}

customElements.define('my-header', MyHeader);

class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<p>my footer</p>`;
  }
}

customElements.define('my-footer', MyFooter);
