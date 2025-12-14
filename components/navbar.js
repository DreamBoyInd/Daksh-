class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background: white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          padding: 1rem 2rem;
          position: sticky;
          top: 0;
          z-index: 50;
        }
        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          font-size: 1.5rem;
          font-weight: 700;
          color: #3b82f6;
          text-decoration: none;
        }
        .nav-links {
          display: flex;
          gap: 1.5rem;
        }
        .nav-link {
          color: #4b5563;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s;
        }
        .nav-link:hover {
          color: #3b82f6;
        }
        .nav-link.active {
          color: #3b82f6;
          font-weight: 600;
        }
      </style>
      <nav>
        <div class="nav-container">
          <a href="/" class="logo">Daksh Pal</a>
          <div class="nav-links">
            <a href="/" class="nav-link active">Home</a>
            <a href="about.html" class="nav-link">About</a>
            <a href="skills.html" class="nav-link">Skills</a>
          </div>
        </div>
      </nav>
    `;
  }
}
customElements.define('custom-navbar', CustomNavbar);