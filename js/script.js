const totalPriceElement = document.querySelector('.total');
const productCards = document.querySelectorAll('.card');

let totalPrice = 0;

// Function to update the total price display
function updateTotalPrice() {
    totalPriceElement.textContent = `${totalPrice} $`;
}

// Function to handle quantity change
function updateQuantity(card, change) {
    const quantityElement = card.querySelector('.quantity');
    let quantity = parseInt(quantityElement.textContent);
    const unitPrice = parseFloat(card.querySelector('.unit-price').textContent);

    // Update quantity based on the change
    if (change === 'increase') {
        quantity++;
        totalPrice += unitPrice;
    } else if (change === 'decrease' && quantity > 0) {
        quantity--;
        totalPrice -= unitPrice;
    }

    quantityElement.textContent = quantity;
    updateTotalPrice();
}

// Function to delete the item
function deleteItem(card) {
    const quantity = parseInt(card.querySelector('.quantity').textContent);
    const unitPrice = parseFloat(card.querySelector('.unit-price').textContent);

    totalPrice -= (quantity * unitPrice);
    updateTotalPrice();

    card.remove();
}

// Function to toggle the like status
function toggleLike(heartIcon) {
    heartIcon.classList.toggle('liked'); 
}

productCards.forEach(card => {
    const increaseButton = card.querySelector('.fa-plus-circle');
    const decreaseButton = card.querySelector('.fa-minus-circle');
    const deleteButton = card.querySelector('.fa-trash-alt');
    const heartButton = card.querySelector('.fa-heart');

    increaseButton.addEventListener('click', () => updateQuantity(card, 'increase'));
    decreaseButton.addEventListener('click', () => updateQuantity(card, 'decrease'));
    deleteButton.addEventListener('click', () => deleteItem(card));
    heartButton.addEventListener('click', () => toggleLike(heartButton));
});