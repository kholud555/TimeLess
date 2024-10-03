document.addEventListener('DOMContentLoaded', function() {
    const productsLink = document.getElementById('productsLink');
    const productsList = document.getElementById('prodactsList');

    function toggleProductsMenu() {
        if (productsList.classList.contains('visible')) {
            // If menu is visible, hide it
            productsList.classList.remove('visible');
            productsList.classList.add('hidden');
            
            // Remove 'hidden' class and set display to 'none' after animation
            setTimeout(() => {
                productsList.classList.remove('hidden');
                productsList.style.display = 'none';
            }, 2000); // Match this to your CSS animation duration (2s)
        } else {
            // If menu is hidden, show it
            productsList.style.display = 'block';
            
            // Force a reflow before adding the 'visible' class
            void productsList.offsetWidth;
            
            productsList.classList.add('visible');
        }
    }

    productsLink.addEventListener('click', function(event) {
        event.stopPropagation();
        toggleProductsMenu();
    });

    // Close the menu if clicking outside
    document.addEventListener('click', function(event) {
        if (!productsLink.contains(event.target) && !productsList.contains(event.target)) {
            if (productsList.classList.contains('visible')) {
                toggleProductsMenu();
            }
        }
    });
});
