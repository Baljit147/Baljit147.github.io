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
            <img src="images/github-mark-white.png" id="github">
          </a>
        </div>
        <div class="scroll-menu">
          <a href="#Linux">Linux</a>
          <a href="#Algorithms">Algoritms</a>
          <a href="#Cyber Security">Cyber Security</a>
          <a href="#Digital Forensics">Digital Forensics</a>
          <a href="#Scripting">Scripting</a>
          <a href="#IT Books">IT Book Reviews</a>
          <a href="#Travel">Travel</a>
        </div>
    </div>
`;
  }
}

customElements.define('my-header', MyHeader);

class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="footer">
    <p>Connect with me on Linkedin or checkout my github:</p>
    <div class="href_container">
          <a href="https://www.linkedin.com/in/baljit-sanghera-30216426b/" target="_blank">
              <img src="images/LI-Logo.png" alt="LinkedIn Logo" id="linkedin">
          </a>
          <br>
          <a href="https://github.com/Baljit147" target="_blank">
            <img src="images/github-mark-white.png" id="github">
          </a>
        </div>
      </div>
    `;
  }
}

customElements.define('my-footer', MyFooter);
