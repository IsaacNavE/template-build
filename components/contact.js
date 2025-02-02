class AppContact extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        #contact {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 70vh;
          background-color: #2C2C2C; /* Fondo oscuro */
          padding: 20px;
        }

        .contact-container {
          width: 100%;
          max-width: 800px;
          padding: 20px;
          text-align: center;
        }

        .contact-title {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 20px;
          color: white;
        }

        .contact-description {
          font-size: 1rem;
          margin-bottom: 30px;
          color: white;
        }

        .contact-form {
          animation: fadeIn 0.8s ease-in-out;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          background-color: #fff; /* Fondo blanco para el formulario */
          border-radius: 8px;
          padding: 20px;
          width: 100%;
          max-width: 600px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          margin: 0 auto;
        }

        .contact-form:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .contact-input, .contact-textarea {
          width: 100%;
          padding: 12px;
          margin-bottom: 16px;
          border: 2px solid #ccc;
          border-radius: 5px;
          font-size: 16px;
          color: #333;
          transition: all 0.2s ease;
        }

        .contact-input:focus, .contact-textarea:focus {
          border-color: #ff4d4d; /* Rojo */
          box-shadow: 0 0 6px #ff4d4d; /* Rojo */
          outline: none;
        }

        .contact-button {
          width: 100%;
          padding: 12px;
          background-color: #ff4d4d; /* Rojo */
          color: white;
          border: none;
          border-radius: 5px;
          font-size: 16px;
          cursor: pointer;
          transition: background-color 0.3s ease, transform 0.2s ease;
        }

        .contact-button:hover {
          background-color: #e04343; /* Rojo más oscuro */
          transform: scale(1.05);
        }

        @media (max-width: 768px) {
          .contact-title {
            font-size: 1.5rem;
          }

          .contact-description {
            font-size: 0.9rem;
          }

          .contact-form {
            max-width: 100%;
            padding: 15px;
          }
        }
      </style>
      <section id="contact">
        <div class="contact-container">
          <h2 class="contact-title">Contact Us</h2>
          <p class="contact-description">We’d love to hear from you. Fill out the form below and we’ll get back to you shortly.</p>
          <form class="contact-form">
            <div class="mb-3">
              <label for="name" class="block text-sm font-semibold mb-1">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Your Name"
                class="contact-input"
              />
            </div>
            <div class="mb-3">
              <label for="email" class="block text-sm font-semibold mb-1">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Your Email"
                class="contact-input"
              />
            </div>
            <div class="mb-3">
              <label for="message" class="block text-sm font-semibold mb-1">Message</label>
              <textarea
                id="message"
                placeholder="Your Message"
                rows="4"
                class="contact-textarea"
              ></textarea>
            </div>
            <button type="submit" class="contact-button">Send Message</button>
          </form>
        </div>
      </section>
    `;
  }
}

customElements.define('app-contact', AppContact);
