class AppContact extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        #contact {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 70vh;
        }

        form {
          animation: fadeIn 0.8s ease-in-out;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        form:hover {
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

        input, textarea {
          transition: all 0.2s ease;
        }

        input:focus, textarea:focus {
          border-color: #FFD700;
          box-shadow: 0 0 6px #FFD700;
        }

        button {
          transition: background-color 0.3s ease, transform 0.2s ease;
        }

        button:hover {
          background-color: #FFD700;
          transform: scale(1.05);
        }
      </style>
      <section id="contact" class="py-10 bg-primary text-white">
        <div class="container mx-auto px-6 md:px-12 lg:px-16 text-center">
          <h2 class="text-3xl font-bold mb-4" data-translate="contactTitle">Contact Us</h2>
          <p class="text-base md:text-lg mb-6 max-w-xl mx-auto" data-translate="contactDescription">
            We’d love to hear from you. Fill out the form below and we’ll get back to you shortly.
          </p>
          <form class="max-w-sm mx-auto bg-white rounded-lg shadow-md p-4 text-dark">
            <div class="mb-3">
              <label for="name" class="block text-sm font-semibold mb-1" data-translate="nameLabel">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Your Name"
                class="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
              />
            </div>
            <div class="mb-3">
              <label for="email" class="block text-sm font-semibold mb-1" data-translate="emailLabel">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Your Email"
                class="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
              />
            </div>
            <div class="mb-3">
              <label for="message" class="block text-sm font-semibold mb-1" data-translate="messageLabel">Message</label>
              <textarea
                id="message"
                placeholder="Your Message"
                rows="4"
                class="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              class="w-full bg-secondary text-white py-2 px-4 rounded-md font-semibold hover:bg-yellow-500"
              data-translate="sendButton"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    `;
  }
}

customElements.define('app-contact', AppContact);
