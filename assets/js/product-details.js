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
        
        <div class="product-image">
            <img src="${product.image}" alt="${product.title}">
            </div>
            <div class="product-details">
            <p>${product.name}</p>
            
            <p>${product.description}</p>
            <p class="price">$${product.price}</p>
            <button class="product-add-to-cart" data-product-id="${product.id}" >Add to cart</button>
            </div>
        `;
        // Add event listener to add to cart button after it's been created
  const addToCartButton = productDetailsContainer.querySelector('.product-add-to-cart');
  addToCartButton.addEventListener('click', () => {
    addToCart(productId);
});
    } else {
        productDetailsContainer.innerHTML = '<p>Product not found.</p>';
    }

    document.querySelector('.product-add-to-cart').addEventListener('click', () => {
        addToCart(productId);
    });

    // Add to cart Header function
    function addToCart(productId) {
        const product = products.find(p => p.id == productId);
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const cartItem = cart.find(item => item.id == productId);

        if (cartItem) {
            cartItem.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        updateCart();
    }

    function updateCart() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const cartCount = document.querySelectorAll('#counter, #counter2');
        const cartItems = document.getElementById('cart-items');
        cartCount.forEach(counter => {
            counter.textContent = cart.reduce((total, item) => total + item.quantity, 0);
          });

        if (cartItems) {
            cartItems.innerHTML = '';

            cart.forEach(product => {
                console.log('Product:', product); // Log the product to see all attributes
                const price = typeof product.price === 'number' ? product.price.toFixed(2) : '0.00';
                const li = document.createElement('li');
                li.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                ${product.name} - $${price} x ${product.quantity}
                <button class="remove-from-cart" data-product-id="${product.id}">Remove</button>
            `;
                cartItems.appendChild(li);
            });
        }

        document.querySelectorAll('.remove-from-cart').forEach(button => {
            button.addEventListener('click', () => {
                const productId = button.getAttribute('data-product-id');
                removeFromCart(productId);
            });
        });
    }

    function removeFromCart(productId) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart = cart.filter(item => item.id != productId);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCart();
    }

    updateCart();



    updateCart();
});
    