document.getElementById('searchButton').addEventListener('click', function() {
    const searchTerm = document.getElementById('searchInput').value.trim();
    const textArea = document.getElementById('textArea');
    const resultCount = document.getElementById('resultCount');

    if (searchTerm === '') {
        alert('Por favor, ingresa una palabra para buscar.');
        return;
    }

    // Limpiar resaltados anteriores
    textArea.innerHTML = textArea.innerHTML.replace(/<span class="highlight">|<\/span>/g, '');

    // Buscar y resaltar coincidencias
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    const text = textArea.innerHTML;
    const highlightedText = text.replace(regex, '<span class="highlight">$1</span>');
    textArea.innerHTML = highlightedText;

    // Contar coincidencias
    const matches = (text.match(regex) || []).length;
    resultCount.textContent = `${matches} coincidencias`;
});
  // Función para limpiar el formato
  document.getElementById('clearFormatButton').addEventListener('click', function() {
    const textArea = document.getElementById('textArea');

    // Obtener el texto sin formato
    const text = textArea.innerText || textArea.textContent;

    // Reemplazar el contenido del textArea con el texto sin formato
    textArea.innerHTML = text;
});

document.getElementById('colorPicker').addEventListener('input', function() {
    const color = this.value; // Obtener el valor del color seleccionado
    document.execCommand('foreColor', false, color); // Aplicar el color al texto seleccionado
});

document.getElementById('fontSize').addEventListener('change', function() {
    const size = this.value; // Obtener el valor seleccionado (1, 3 o 6)
    document.execCommand('fontSize', false, size); // Aplicar el tamaño de fuente
});