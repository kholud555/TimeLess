document.addEventListener('DOMContentLoaded', () => {
    updateCart();
});


document.addEventListener('DOMContentLoaded', () => {
    const productDetailsContainer = document.getElementById('product-details');

    // Sample product data (same as in the main page)
    const products = [
        { id: 1, name: 'Product 1', price: 10, image: './assets/images/product-3.png', description: 'This is a good product'},
        { id: 2, name: 'Product 2', price: 15, image: './assets/images/product-8.png', description: 'This is a good product'},
        { id: 3, name: 'Product 3', price: 20, image: './assets/images/product-5.png', description: 'This is a good product'},
        { id: 4, name: 'Product 4', price: 50, image: './assets/images/product-6.png', description: 'This is a good product'},
        { id: 5, name: 'Product 5', price: 80, image: './assets/images/product-7.png', description: 'This is a good product'},
        { id: 6, name: 'Product 6', price: 100, image: './assets/images/product-8.png', description: 'This is a good product'},
        { id: 7, name: 'Product 7', price: 150, image: './assets/images/product-5.png', description: 'This is a good product'},
        { id: 8, name: 'Product 8', price: 200, image: './assets/images/product-6.png', description: 'This is a good product'}
    ];

    // Get product ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));

    // Find the product by ID
    const product = products.find(p => p.id === productId);

    if (product) {
        productDetailsContainer.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <p>${product.name}</p>
            
            <p>${product.description}</p>
            <p class="price">$${product.price}</p>
            <button class="product-add-to-cart" data-product-id="${product.id}" >Add to cart</button>
        `;
    } else {
        productDetailsContainer.innerHTML = '<p>Product not found.</p>';
    }

    document.querySelector('.add-to-cart').addEventListener('click', () => {
        addToCart(productId);
    });

    updateCart();
});
    





