function copyFunction() {
    // Get the text field
    var copyText = document.getElementById("myInput");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  }

class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <a href="../index.html">
    <div class="header">
      <h2>Baljit's Blog</h2>
    </div>
  </a>
`;
  }
}

customElements.define('my-header', MyHeader);

class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="footer">
    <p>Connect with me on Linkedin or checkout my GitHub:</p>
    <div class="href_container">
          <a href="https://www.linkedin.com/in/baljit-sanghera-30216426b/" target="_blank">
              <img src="https://baljit147.github.io/images/LI-Logo.png" alt="LinkedIn Logo" id="linkedin">
          </a>
          <br>
          <a href="https://github.com/Baljit147" target="_blank">
            <img src="https://baljit147.github.io/images/github-mark-white.png" id="github">
          </a>
        </div>
      </div>
    `;
  }
}

customElements.define('my-footer', MyFooter);

class MyRightColumn extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="rightcolumn">
    <div class="card">
      <h2>About Me</h2>
      <div class="about-me-image" style="height:215px;">
        <img src="../images/about_me/DSC_3362.jpg" height="175" class="about-me-picture">
      </div>
      <p>Welcome to my blog! Here I share some thoughts, projects and anything else I find interesting, mostly about Linux, cyber security, coding and scripting with some philosophy and travel thrown in.
        As an IT enthusiast I'm constantly working on, and troubleshooting new projects. I hope you will find some of them useful or interesting.</p>
    </div>
    <div class="card">
      <h3>Popular Posts</h3>
      <div class="fakeimg"><a href="https://baljit147.github.io/posts/spell_check.html">How to troubleshoot common Linux and Libre Office spell check errors</a></div><br>
      <div class="fakeimg">Image</div><br>
      <div class="fakeimg">Image</div>
    </div>
    <div class="card">
      <h3>Follow Me</h3>
      <p>Feel free to connect with me on Linkedin or check out my GitHub.</p>
      <div class="href_container">
        <a href="https://www.linkedin.com/in/baljit-sanghera-30216426b/" target="_blank">
            <img src="https://baljit147.github.io/images/LI-Logo.png" alt="LinkedIn Logo" id="linkedin">
        </a>
        <br>
        <a href="https://github.com/Baljit147" target="_blank">
          <img src="https://baljit147.github.io/images/github-mark-white.png" id="github">
        </a>
      </div>
    </div>
  </div>
  `
  }
}

customElements.define('my-right-column', MyRightColumn);