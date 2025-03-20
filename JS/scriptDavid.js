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