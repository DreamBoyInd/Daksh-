class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: #1e293b;
          color: white;
          padding: 2rem 1rem;
          text-align: center;
        }
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
        }
        .social-links {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin: 1rem 0;
        }
        .social-link {
          color: white;
          transition: color 0.2s;
        }
        .social-link:hover {
          color: #3b82f6;
        }
        .copyright {
          margin-top: 1rem;
          font-size: 0.875rem;
          color: #94a3b8;
        }
      </style>
      <footer>
        <div class="footer-content">
          <div class="social-links">
            <a href="#" class="social-link" aria-label="GitHub">
              <i data-feather="github"></i>
            </a>
            <a href="#" class="social-link" aria-label="Twitter">
              <i data-feather="twitter"></i>
            </a>
            <a href="#" class="social-link" aria-label="LinkedIn">
              <i data-feather="linkedin"></i>
            </a>
          </div>
          <p class="copyright">© ${new Date().getFullYear()} Daksh Pal. All rights reserved.</p>
        </div>
      </footer>
    `;
  }
}
customElements.define('custom-footer', CustomFooter);