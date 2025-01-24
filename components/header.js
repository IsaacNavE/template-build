import './AppLanguageSelector.js';

class AppHeader extends HTMLElement {
  connectedCallback() {
    const borderRadius = this.getAttribute('border-radius') || 'rounded-lg';
    const marginTop = this.getAttribute('margin-top') || 'mt-4';
    const marginBottom = this.getAttribute('margin-bottom') || 'mb-16';
    const navbarWidth = this.getAttribute('navbar-width') || 'w-full';
    const navbarAlign = this.getAttribute('navbar-align') || 'justify-between';
    const navbarBgColor = this.getAttribute('navbar-bg-color') || 'bg-white';
    const navbarTextColor = this.getAttribute('navbar-text-color') || 'text-primary';
    const hoverLineColor = this.getAttribute('hover-line-color') || 'border-b-2 border-primary';
    const shadow = this.getAttribute('shadow') || 'shadow-md';

    this.innerHTML = `
      <header class="${navbarBgColor} ${shadow} ${borderRadius} ${marginTop} ${marginBottom} ${navbarWidth} fixed top-0 left-0 z-10">
        <div class="container mx-auto flex ${navbarAlign} items-center py-4 px-6">
          <a href="#" class="text-2xl font-bold ${navbarTextColor}" data-translate="logoText">BuildPro</a>
          
          <nav id="navbar" class="hidden md:flex space-x-4">
            <a href="#services" class="hover:text-primary " data-translate="services">Services</a>
            <a href="#projects" class="hover:text-primary " data-translate="projects">Projects</a>
            <a href="#about" class="hover:text-primary " data-translate="about">About</a>
            <a href="#contact" class="hover:text-primary " data-translate="contact">Contact</a>
          </nav>

          <!-- Selector de idioma para pantallas grandes -->
          <div class="hidden md:block">
            <app-language-selector></app-language-selector>
          </div>

          <button id="menu-btn" class="block md:hidden text-2xl text-primary ml-4">
            &#9776;
          </button>
        </div>

        <!-- Menú móvil -->
        <div id="mobile-menu" class="hidden md:hidden bg-white border-t shadow-lg">
          <a href="#services" class="block py-2 px-4 hover:bg-gray-100" data-translate="services">Services</a>
          <a href="#projects" class="block py-2 px-4 hover:bg-gray-100" data-translate="projects">Projects</a>
          <a href="#about" class="block py-2 px-4 hover:bg-gray-100" data-translate="about">About</a>
          <a href="#contact" class="block py-2 px-4 hover:bg-gray-100" data-translate="contact">Contact</a>
          
          <!-- Selector de idioma para pantallas pequeñas -->
          <div class="block md:hidden py-2 px-4">
            <app-language-selector></app-language-selector>
          </div>
        </div>
      </header>
    `;

    const menuBtn = this.querySelector('#menu-btn');
    const mobileMenu = this.querySelector('#mobile-menu');

    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth >= 768) {
        mobileMenu.classList.add('hidden');
      }
    });
  }
}

customElements.define('app-header', AppHeader);
