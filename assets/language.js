let currentLanguage = 'en'; // Idioma por defecto

// Función para cambiar el idioma
function changeLanguage(lang) {
  currentLanguage = lang;
  updateTexts();
}

// Función para actualizar los textos en la página
function updateTexts() {
  const texts = dictionary[currentLanguage];
  
  // Actualizamos todos los elementos que necesitan cambiar de texto
  document.querySelectorAll('[data-translate]').forEach((element) => {
    const key = element.getAttribute('data-translate');
    if (texts[key]) {
      element.textContent = texts[key];
    }
  });
}
