class AppProjects extends HTMLElement {
    static get observedAttributes() {
      return ['bg-color', 'text-color', 'card-border-radius', 'animation-type', 'language'];
    }
  
    constructor() {
      super();
      this.bgColor = 'bg-gray-100';
      this.textColor = 'text-gray-800';
      this.cardBorderRadius = 'rounded-lg';
      this.animationType = 'hover-card';
      this.language = 'en';
    }
  
    connectedCallback() {
      this.innerHTML = `
        <style>
          .hover-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .hover-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
          }
        </style>
        <section id="projects" class="${this.bgColor} py-10 px-6">
          <div class="container mx-auto">
            <h2 class="text-3xl font-bold ${this.textColor} text-center mb-8" data-translate="projects">Projects</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <!-- Dynamic cards will be inserted here -->
            </div>
          </div>
        </section>
      `;
  
      this.renderProjects();
    }
  
    renderProjects() {
      const projects = [
        { titleKey: 'projectTitle1', descriptionKey: 'projectDescription1', image: './assets/images/proyecto1.png', link: '#' },
        { titleKey: 'projectTitle2', descriptionKey: 'projectDescription2', image: './assets/images/proyecto2.png', link: '#' },
        { titleKey: 'projectTitle3', descriptionKey: 'projectDescription3', image: './assets/images/proyecto3.png', link: '#' },
      ];
  
      const grid = this.querySelector('.grid');
      grid.innerHTML = '';
  
      projects.forEach((project) => {
        const cardHTML = `
          <div class="${this.animationType} bg-white shadow-md overflow-hidden ${this.cardBorderRadius} p-4 transform transition duration-300">
            <img src="${project.image}" alt="${project.titleKey}" class="w-full h-48 object-cover">
            <div class="p-4">
              <h3 class="text-lg font-bold ${this.textColor}" data-translate="${project.titleKey}">
                ${project.titleKey}
              </h3>
              <p class="text-sm text-gray-600 mt-2" data-translate="${project.descriptionKey}">
                ${project.descriptionKey}
              </p>
              <a href="${project.link}" class="mt-4 px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded hover:bg-blue-600 transition duration-200 inline-block">
                View Project
              </a>
            </div>
          </div>
        `;
  
        grid.insertAdjacentHTML('beforeend', cardHTML);
      });
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      if (oldValue !== newValue) {
        if (name === 'bg-color') this.bgColor = newValue;
        if (name === 'text-color') this.textColor = newValue;
        if (name === 'card-border-radius') this.cardBorderRadius = newValue || 'rounded-lg';
        if (name === 'animation-type') this.animationType = newValue || 'hover-card';
        if (name === 'language') this.language = newValue || 'en';
        this.renderProjects();
      }
    }
  }
  
  customElements.define('app-projects', AppProjects);
  