document.addEventListener('DOMContentLoaded', () => {
    const itemInput = document.getElementById('itemInput');
    const addButton = document.getElementById('addButton');
    const markPurchasedButton = document.getElementById('markPurchasedButton');
    const clearButton = document.getElementById('clearButton');
    const shoppingList = document.getElementById('shoppingList');

    const addItem = () => {
        const itemText = itemInput.value.trim();
        if (!itemText) return alert('Please enter an item.');

        const li = document.createElement('li');
        li.textContent = itemText;
        li.dataset.purchased = 'false';
        li.addEventListener('click', () => li.classList.toggle('selected'));
        shoppingList.appendChild(li);
        itemInput.value = '';
    };

    const markPurchased = () => {
        shoppingList.querySelectorAll('li.selected').forEach(item => {
            item.classList.toggle('purchased');
            item.classList.remove('selected');
            item.dataset.purchased = 'true';
        });
    };

    const clearList = () => shoppingList.innerHTML = '';

    addButton.addEventListener('click', addItem);
    markPurchasedButton.addEventListener('click', markPurchased);
    clearButton.addEventListener('click', clearList);
    
    itemInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') addItem();
    });
});
