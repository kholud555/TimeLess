document.addEventListener('DOMContentLoaded', () => {
    const shippingSelect = document.querySelector('.select-sty:nth-of-type(1)'); // First select for shipping
    const paymentSelect = document.querySelector('.select-sty:nth-of-type(2)'); // Second select for payment
    const subtotalPriceElement = document.getElementById('total-price'); // Element for subtotal price
    const totalPriceElement = document.getElementById('total-price'); // Element for total price

    // Function to calculate total price
    function calculateTotal() {
        // Parse the subtotal from the total price element
        const subtotal = parseFloat(subtotalPriceElement.textContent) || 0;

        // Get the shipping and payment costs
        const shippingCost = parseFloat(shippingSelect.value) || 0;
        const paymentCost = parseFloat(paymentSelect.value) || 0;

        // Calculate the total
        const total = subtotal + shippingCost + paymentCost;

        // Update the total price displayed
        totalPriceElement.textContent = total.toFixed(2); // Format to two decimal places
    }

    // Event listeners to recalculate total on shipping and payment changes
    shippingSelect.addEventListener('change', calculateTotal);
    paymentSelect.addEventListener('change', calculateTotal);

    // Initial calculation to set total price on page load
    calculateTotal();
});
