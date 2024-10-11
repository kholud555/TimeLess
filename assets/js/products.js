//Generate Products through loop

document.addEventListener('DOMContentLoaded', () => {

    const productContainer = document.getElementById('products');
    const sortDropdown = document.getElementById('sort-by');

    const products = [
        { id: 1, name: 'Product 1', price: 10, image: './assets/images/product-3.png' },
        { id: 2, name: 'Product 2', price: 15, image: './assets/images/product-8.png' },
        { id: 3, name: 'Product 3', price: 20, image: './assets/images/product-5.png' },
        { id: 4, name: 'Product 4', price: 50, image: './assets/images/product-6.png' },
        { id: 5, name: 'Product 5', price: 80, image: './assets/images/product-7.png' },
        { id: 6, name: 'Product 6', price: 100, image: './assets/images/product-8.png' },
        { id: 7, name: 'Product 7', price: 150, image: './assets/images/product-5.png' },
        { id: 8, name: 'Product 8', price: 200, image: './assets/images/product-6.png' }
    ];




    const cartCount = document.querySelectorAll('#counter, #counter2');
    const cartDropdown = document.getElementById('cart-dropdown');
    const cartItems = document.getElementById('cart-items');



// Load cart from localStorage on page load
function loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = document.querySelectorAll('counter, counter2');
    
    cartCount.forEach(counter => {
        counter.textContent = cart.reduce((total, item) => total + item.quantity, 0);
      });
    if (cartItems) {
        // cartItems.innerHTML = '';
        cart.forEach(product => {
            const li = document.createElement('li');
            li.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                ${product.name} - $${product.price.toFixed(2)} x ${product.quantity}
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

    

    // Loop through products and create HTML elements

    function renderProducts(productsToDisplay) {
        const productContainer = document.getElementById('products');
        if (productContainer) {
            productContainer.innerHTML = ''; // Clear existing products
    
            productsToDisplay.forEach(product => {
                const productElement = document.createElement('div');
                productElement.classList.add('product');
    
                productElement.innerHTML = `
                    <a href="product-details.html?id=${product.id}">
                    <img src="${product.image}" alt="${product.name}">
                    </a>
                    <p><a href="product-details.html?id=${product.id}">${product.name}</a></p>
                    <p class="price">$${product.price}</p>
                    <button class="add-to-cart" data-product-id="${product.id}">Add to cart</button>
                `;
    
                productContainer.appendChild(productElement);
            });
        } else {
            console.error("Product container element not found.");
        }
    }
    // start rendering of the products
    renderProducts(products);

    // Event listener for sorting
    sortDropdown.addEventListener('change', () => {
        const selectedValue = sortDropdown.value;

        if (selectedValue === 'low-to-high') {
            products.sort((a, b) => a.price - b.price);
        } else if (selectedValue === 'high-to-low') {
            products.sort((a, b) => b.price - a.price);
        }

        renderProducts(products); // Re-render after sorting
    });


    // products.forEach(product => {
    //     const productElement = document.createElement('div');
    //     productElement.classList.add('product');

    //     productElement.innerHTML = `
    //           <a href="product-details.html?id=${product.id}">
    //             <img src="${product.image}" alt="${product.name}">
    //         </a>
    //         <p><a href="product-details.html?id=${product.id}">${product.name}</a></p>
    //         <p class="price">$${product.price}</p>
    //         <button class="add-to-cart" data-product-id="${product.id}">Add to cart</button>
    //     `;

    //     productContainer.appendChild(productElement);
    // });

    // Add to cart button function
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const productId = button.getAttribute('data-product-id');

            addToCart(productId);
        });
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

    // Ensure the cart is loaded and updated on page load
    loadCart();


});


