class AppLanguageSelector extends HTMLElement {
    connectedCallback() {
      // Recuperar las imágenes de las banderas
      const langFlags = {
        en: 'assets/images/english.png',
        es: 'assets/images/spanish.png',
        fr: 'assets/images/french.png',
      };
  
      // Bandera por defecto: Estados Unidos (Inglés)
      let currentLang = 'en';
  
      // Insertar el HTML inicial con la bandera por defecto
      this.innerHTML = `
        <div class="relative">
          <button id="language-btn" class="flex items-center space-x-2 text-gray-700 hover:text-primary focus:outline-none">
            <img src="${langFlags[currentLang]}" alt="Flag" id="current-flag" class="w-6 h-6 transition-opacity duration-300" />
            <span data-translate="language">Language</span>
            <i class="fas fa-chevron-down"></i>
          </button>
          <div id="language-dropdown" class="hidden absolute right-0 mt-2 bg-white border rounded shadow-lg w-32 opacity-0 transform translate-y-4 transition-all duration-300">
            <a href="#" onclick="changeLanguage('en')" class="block px-4 py-2 text-sm hover:bg-gray-100">
              <img src="${langFlags.en}" alt="English Flag" class="w-6 h-6 inline mr-2" /> English
            </a>
            <a href="#" onclick="changeLanguage('es')" class="block px-4 py-2 text-sm hover:bg-gray-100">
              <img src="${langFlags.es}" alt="Spanish Flag" class="w-6 h-6 inline mr-2" /> Español
            </a>
            <a href="#" onclick="changeLanguage('fr')" class="block px-4 py-2 text-sm hover:bg-gray-100">
              <img src="${langFlags.fr}" alt="French Flag" class="w-6 h-6 inline mr-2" /> Français
            </a>
          </div>
        </div>
      `;
  
      // Lógica para mostrar el dropdown de idiomas
      const languageBtn = this.querySelector('#language-btn');
      const languageDropdown = this.querySelector('#language-dropdown');
      const currentFlagImg = this.querySelector('#current-flag');
  
      // Cambiar bandera cuando se selecciona un idioma
      const changeLanguage = (lang) => {
        currentLang = lang;
        currentFlagImg.src = langFlags[lang]; // Cambiar la bandera
      };
  
      // Añadir evento para abrir/cerrar el dropdown con animación
      languageBtn.addEventListener('click', () => {
        languageDropdown.classList.toggle('hidden');
        languageDropdown.classList.toggle('opacity-0'); // Aplicar la animación de opacidad
        languageDropdown.classList.toggle('translate-y-4'); // Desplazar hacia abajo
        languageDropdown.classList.toggle('opacity-100'); // Mostrar con opacidad al abrir
        languageDropdown.classList.toggle('translate-y-0'); // Quitar el desplazamiento al abrir
      });
  
      // Cerrar el dropdown si se hace click fuera de él
      window.addEventListener('click', (e) => {
        if (!languageBtn.contains(e.target) && !languageDropdown.contains(e.target)) {
          languageDropdown.classList.add('hidden');
          languageDropdown.classList.remove('opacity-100');
          languageDropdown.classList.add('opacity-0');
          languageDropdown.classList.remove('translate-y-0');
          languageDropdown.classList.add('translate-y-4');
        }
      });
  
      // Asignar eventos para cambiar el idioma y la bandera
      this.querySelectorAll('#language-dropdown a').forEach((langLink) => {
        langLink.addEventListener('click', (e) => {
          const lang = e.target.getAttribute('onclick').match(/'(.*?)'/)[1]; // Extraer el idioma del evento
          changeLanguage(lang);
        });
      });
    }
  }
  
  customElements.define('app-language-selector', AppLanguageSelector);
