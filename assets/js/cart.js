document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');

    function loadCart() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cartItems.innerHTML = '';
        let total = 0;

        cart.forEach(product => {
            const li = document.createElement('li');
            li.innerHTML = `
                ${product.name} - $${product.price.toFixed(2)} 
                <input type="number" value="${product.quantity}" min="1" data-product-id="${product.id}">
                <button class="update-cart" data-product-id="${product.id}">Update</button>
            `;
            cartItems.appendChild(li);
            total += product.price * product.quantity;
        });

        totalPrice.textContent = total.toFixed(2);

        document.querySelectorAll('.update-cart').forEach(button => {
            button.addEventListener('click', () => {
                const productId = button.getAttribute('data-product-id');
                const quantityInput = document.querySelector(`input[data-product-id="${productId}"]`);
                updateCart(productId, parseInt(quantityInput.value));
            });
        });
    }

    function updateCart(productId, quantity) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const cartItem = cart.find(item => item.id == productId);

        if (cartItem) {
            cartItem.quantity = quantity;
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        loadCart();
    }

    loadCart();
});
