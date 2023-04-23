class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="header">
        <!-- Name in header -->
        <h1 id="name-h1">Baljit Sanghera</h1>
        <!-- LinkedIn logo in header -->
        <div class="href_container">
        <a href="https://www.linkedin.com/in/baljit-sanghera-30216426b/" target="_blank">
            <img src="images/LI-Logo.png" alt="LinkedIn Logo" id="linkedin">
        </a>
        <br>
        <a href="https://github.com/Baljit147" target="_blank">
          <img src="images/github-mark.png" id="github">
        </a>
        </div>
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
