document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.getElementById('cart-items'); // tbody element
    const totalPrice = document.getElementById('total-price');
    const updateCartButton = document.getElementById('update-cart'); // Update Cart button

    function loadCart() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cartItems.innerHTML = ''; // Clear the previous cart items
        let total = 0;

        // Create a table row for each cart item
        cart.forEach(product => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><img src="${product.image}" alt="${product.name}" style="width: 50px; height: 50px;"></td>
                <td class="product-name">${product.name}</td>
                <td>$${product.price.toFixed(2)}</td>
                <td class="input-pro">
                    <input class="num-product" type="number" value="${product.quantity}" min="1" data-product-id="${product.id}">
                </td>
                <td class="sp-sub">$${(product.price * product.quantity).toFixed(2)}</td>
                <td class="rm-cart">
                    <button class="remove-item" data-product-id="${product.id}">Remove</button>
                </td>
            `;
            cartItems.appendChild(tr); // Append row to tbody

            // Add to the total price
            total += product.price * product.quantity;
        });

        totalPrice.textContent = total.toFixed(2); // Update total price

        // Add event listeners for all remove buttons
        document.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', () => {
                const productId = button.getAttribute('data-product-id');
                removeCartItem(productId);
            });
        });
    }

    // Update the cart when the "Update Cart" button is clicked
    updateCartButton.addEventListener('click', () => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Loop through each product in the cart and update the quantity based on input values
        cart.forEach(product => {
            const quantityInput = document.querySelector(`input[data-product-id="${product.id}"]`);
            if (quantityInput) {
                product.quantity = parseInt(quantityInput.value);
            }
        });

        // Save the updated cart to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        // Reload the cart to reflect the changes
        loadCart();
    });

    // Function to remove a cart item
    function removeCartItem(productId) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart = cart.filter(item => item.id !== parseInt(productId)); // Remove the item by its id

        localStorage.setItem('cart', JSON.stringify(cart)); // Save the updated cart to localStorage
        loadCart(); // Reload the cart
    }

    loadCart(); // Initial cart load when the page is ready
});
