/**
 * Componente Web: AppSocialsButton
 * Muestra un botón flotante que al presionarlo despliega botones de redes sociales en una línea recta hacia abajo.
 */

class AppSocialsButton extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        .circle-btn {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .circle-btn.pulse::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          border: 2px solid rgba(255, 0, 0, 0.5);
          animation: pulse 1.5s infinite;
          opacity: 1;
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.5);
            opacity: 0.2;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        #tooltip {
          left: -150%;
        }

        #toggle-button {
          transition: transform 0.3s;
        }

        #toggle-button.rotate {
          transform: rotate(180deg);
        }

        #social-buttons {
          flex-direction: column-reverse;
        }
      </style>
      <div class="fixed bottom-5 right-5 flex flex-col items-center gap-3">
        <div class="relative">
          <button id="toggle-button" class="circle-btn bg-red-500 text-white shadow-lg hover:bg-red-600 transition pulse">
            <i class="fas fa-plus text-2xl"></i>
          </button>
          <div id="tooltip" class="hidden absolute bottom-full mb-2 bg-gray-800 text-white text-sm py-1 px-3 rounded shadow-lg">Contactos</div>
        </div>
        <div id="social-buttons" class="hidden flex items-center gap-3">
          <a href="https://facebook.com" target="_blank" class="circle-btn bg-black text-white shadow-lg hover:bg-gray-800 transition">
            <i class="fab fa-facebook text-xl"></i>
          </a>
          <a href="https://instagram.com" target="_blank" class="circle-btn bg-black text-white shadow-lg hover:bg-gray-800 transition">
            <i class="fab fa-instagram text-xl"></i>
          </a>
          <a href="https://wa.me/1234567890" target="_blank" class="circle-btn bg-black text-white shadow-lg hover:bg-gray-800 transition">
            <i class="fab fa-whatsapp text-xl"></i>
          </a>
        </div>
      </div>
    `;

    const toggleButton = this.querySelector("#toggle-button");
    const socialButtons = this.querySelector("#social-buttons");
    const tooltip = this.querySelector("#tooltip");

    toggleButton.addEventListener("click", () => {
      socialButtons.classList.toggle("hidden");
      tooltip.classList.toggle("hidden");
      toggleButton.classList.toggle("rotate");
      toggleButton.querySelector("i").classList.toggle("fa-plus");
      toggleButton.querySelector("i").classList.toggle("fa-chevron-down");
    });

    toggleButton.addEventListener("mouseenter", () => {
      tooltip.classList.remove("hidden");
    });

    toggleButton.addEventListener("mouseleave", () => {
      tooltip.classList.add("hidden");
    });
  }
}

customElements.define("app-socials-button", AppSocialsButton);
