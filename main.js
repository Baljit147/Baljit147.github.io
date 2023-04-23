class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `    <div class="header">
        <!-- Name in header -->
        <h1>Baljit </h1>
        <!-- LinkedIn logo in header -->
        <a href="https://www.linkedin.com/in/baljit-sanghera-30216426b/" target="_blank">
            <img src="LI-Logo.png" alt="LinkedIn Logo">
        </a>
    </div>
`;
  }
}

customElements.define('my-header', MyHeader);

class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<p>my footer</p>`;
  }
}

customElements.define('my-footer', MyFooter);
