class AppFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        .footer-container {
          background-color: #000;
          color: white;
          padding: 2rem;
        }

        .footer-content {
          display: flex;
          justify-content: center;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }

        .footer-left, .footer-right {
          display: flex;
          align-items: center;
        }

        .footer-links {
          display: flex;
          gap: 2rem;
          align-items: center;
        }

        .social-icon {
          width: 30px;
          height: 30px;
          fill: white;
          transition: fill 0.3s;
        }

        .social-icon:hover {
          fill: gray;
        }

        .separator {
          width: 2px;
          height: 30px;
          background-color: red;
          margin: 0 1rem;
        }

        .footer-text {
          font-size: 1rem;
        }

      </style>
      <footer class="footer-container">
        <div class="footer-content">
          <div class="footer-left">
            <div class="footer-links">
              <a href="https://www.instagram.com" class="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22.5C6.294 22.5 1.5 17.706 1.5 12S6.294 1.5 12 1.5 22.5 6.294 22.5 12 17.706 22.5 12 22.5zm3.15-12.105c-.234-.024-.478-.037-.73-.037-.52 0-.918.194-1.213.501-.477-.704-1.285-1.182-2.25-1.182-1.686 0-3.056 1.371-3.056 3.056s1.37 3.056 3.056 3.056c.987 0 1.872-.462 2.463-1.167.296.307.695.496 1.13.496.833 0 1.516-.683 1.516-1.516 0-.375-.122-.717-.327-.988-.053-.168-.114-.331-.173-.491z"/></svg>
              </a>
              <a href="https://www.facebook.com" class="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22.7 0H1.3C.58 0 0 .58 0 1.3v21.4c0 .72.58 1.3 1.3 1.3h11.57v-9.29H9.56v-3.62h3.31V7.41c0-3.3 1.98-5.15 5.02-5.15 1.45 0 2.92.27 3.23.27v3.55h-2.01c-1.98 0-2.58.98-2.58 2.49v3.33h4.09l-.65 3.62h-3.44V24h6.25c.72 0 1.3-.58 1.3-1.3V1.3c0-.72-.58-1.3-1.3-1.3z"/></svg>
              </a>
            </div>
          </div>
          <div class="separator"></div>
          <div class="footer-right">
            <p class="footer-text">&copy; 2025 ARCE LIBERTY LLC. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('app-footer', AppFooter);
