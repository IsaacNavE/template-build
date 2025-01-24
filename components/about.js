class AppAbout extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <style>
          .hover-line::after {
            content: '';
            display: block;
            width: 0;
            height: 2px;
            background: #0ea5e9; /* Tailwind cyan-500 */
            transition: width 0.3s ease;
            margin-top: 5px;
          }
          .hover-line:hover::after {
            width: 100%;
          }
        </style>
  
        <section class="bg-gray-50 py-16">
          <div class="container mx-auto px-4">
            <div class="bg-white shadow-lg rounded-lg p-6 md:p-10 flex flex-wrap gap-8 items-center hover:shadow-2xl transition-shadow duration-300">
              <!-- Imagen -->
              <img src="./assets/images/logo.png" alt="About Us" class="w-full md:w-1/3 rounded-lg object-cover">
  
              <!-- Texto -->
              <div class="flex-1">
                <h2 class="text-3xl font-bold text-gray-800 mb-6 hover-line" data-translate="aboutTitle">
                  About Us
                </h2>
                <p class="text-gray-600 leading-relaxed mb-4 transition-transform duration-300 hover:translate-x-2" data-translate="aboutMission">
                  Our mission is to provide the best solutions tailored to your needs.
                </p>
                <p class="text-gray-600 leading-relaxed mb-4 transition-transform duration-300 hover:translate-x-2" data-translate="aboutVision">
                  Our vision is to become a leading company in the industry, known for excellence and innovation.
                </p>
                <p class="text-gray-600 leading-relaxed mb-4 transition-transform duration-300 hover:translate-x-2" data-translate="aboutHistory">
                  Since our founding, we have dedicated ourselves to delivering exceptional results and building lasting relationships.
                </p>
              </div>
            </div>
          </div>
        </section>
      `;
    }
  }
  
  customElements.define('app-about', AppAbout);
  