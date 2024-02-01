document.addEventListener('DOMContentLoaded', function () {
    const totalElement = document.getElementById('total-price');
    const likeButtons = document.querySelectorAll('.btn-like');
    const quantityValues = document.querySelectorAll('.quantity-value');
    const btnMinus = document.querySelectorAll('.btn-minus');
    const btnPlus = document.querySelectorAll('.btn-plus');
    const btnDelete = document.querySelectorAll('.btn-delete');
    const prices = Array.from(document.querySelectorAll('.price')).map(price => parseFloat(price.textContent.slice(1)));

    let quantities = Array.from(quantityValues).map(() => 1);

    function updateTotalPrice() {
        const totalItemsPrice = quantities.reduce((acc, quantity, index) => acc + quantity * prices[index], 0);
        totalElement.textContent = `$${totalItemsPrice.toFixed(2)}`;
    }

    function updateQuantity(index, value) {
        quantities[index] = value;
        updateTotalPrice();
    }

    likeButtons.forEach((btn, index) => {
        btn.addEventListener('click', function () {
            btn.classList.toggle('liked');
        });
    });

    btnMinus.forEach((btn, index) => {
        btn.addEventListener('click', function () {
            if (quantities[index] > 1) {
                quantities[index]--;
                quantityValues[index].textContent = quantities[index];
                updateTotalPrice();
            }
        });
    });

    btnPlus.forEach((btn, index) => {
        btn.addEventListener('click', function () {
            quantities[index]++;
            quantityValues[index].textContent = quantities[index];
            updateTotalPrice();
        });
    });

    btnDelete.forEach((btn, index) => {
        btn.addEventListener('click', function () {
            // Implement item deletion logic here
        });
    });
});
