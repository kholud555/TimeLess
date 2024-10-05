//footer and header calling back
function loadContent(elementId, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Error loading content:', error));

        // updateCart();
}

window.onload = function() {
    loadContent('header', 'header.html');
    loadContent('footer', 'footer.html');
};