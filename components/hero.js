class AppHero extends HTMLElement {
  static get observedAttributes() {
    return ['bg-color', 'text-color', 'text-align', 'border-radius'];
  }

  constructor() {
    super();
    this.bgColor = 'bg-primary'; // Default background color
    this.textColor = 'text-white'; // Default text color
    this.textAlign = 'text-center'; // Default text alignment
    this.borderRadius = 'rounded-lg'; // Default border radius
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        @keyframes neonGlow {
          0% {
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.3),
                        0 0 30px rgba(0, 255, 255, 0.4),
                        0 0 50px rgba(0, 255, 255, 0.6);
          }
          50% {
            box-shadow: 0 0 15px rgba(255, 255, 255, 0.4),
                        0 0 45px rgba(0, 255, 255, 0.5),
                        0 0 80px rgba(0, 255, 255, 0.8);
          }
          100% {
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.3),
                        0 0 30px rgba(0, 255, 255, 0.4),
                        0 0 50px rgba(0, 255, 255, 0.6);
          }
        }

        @keyframes floatingNeon {
          0% {
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            transform: translate(-48%, -52%) scale(1.1);
          }
          100% {
            transform: translate(-50%, -50%) scale(1);
          }
        }

        .hero-bg {
          position: relative;
          overflow: hidden;
          background: radial-gradient(circle, rgba(0, 0, 50, 1) 0%, rgba(0, 0, 25, 1) 100%);
        }

        .neon-light {
          position: absolute;
          border-radius: 50%;
          width: 300px;
          height: 300px;
          background: rgba(0, 255, 255, 0.3);
          animation: neonGlow 3s infinite ease-in-out, floatingNeon 6s infinite ease-in-out;
          mix-blend-mode: screen;
        }

        .neon-light:nth-child(1) {
          top: 20%;
          left: 30%;
          background: rgba(255, 0, 150, 0.3);
          animation-delay: 0s;
        }

        .neon-light:nth-child(2) {
          top: 50%;
          left: 70%;
          background: rgba(0, 255, 200, 0.3);
          animation-delay: 1s;
        }

        .neon-light:nth-child(3) {
          top: 80%;
          left: 20%;
          background: rgba(0, 150, 255, 0.3);
          animation-delay: 2s;
        }

        .hero-content {
          position: relative;
          z-index: 1;
          text-align: center;
          color: white;
          animation: fadeIn 2s ease-in-out;
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-bg::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.4);
          z-index: 0;
        }

        .hero-bg {
          transition: background-color 1s ease-in-out;
        }
      </style>

      <section id="hero" class="${this.bgColor} ${this.textColor} ${this.borderRadius} hero-bg relative overflow-hidden mt-5">
        <!-- Luces de neón dinámicas -->
        <div class="neon-light"></div>
        <div class="neon-light"></div>
        <div class="neon-light"></div>

        <!-- Contenido del Hero -->
        <div class="container mx-auto ${this.textAlign} py-20 px-6 hero-content">
          <h1 class="text-4xl md:text-6xl font-bold mb-6" data-translate="heroText">Build Your Future with BuildPro</h1>
          <p class="text-lg md:text-xl mb-6" data-translate="heroDescription">Professional construction services tailored to your needs.</p>
          <a href="#contact" class="bg-secondary text-dark font-bold py-3 px-6 rounded-full shadow-lg hover:bg-yellow-500" data-translate="getQuoteButton">
            Get a Quote
          </a>
        </div>
      </section>
    `;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      if (name === 'bg-color') {
        this.bgColor = newValue;
      } else if (name === 'text-color') {
        this.textColor = newValue;
      } else if (name === 'text-align') {
        this.textAlign = newValue;
      } else if (name === 'border-radius') {
        this.borderRadius = newValue === 'none' ? '' : newValue || 'rounded-lg';
      }

      this.connectedCallback();
    }
  }
}

customElements.define('app-hero', AppHero);
