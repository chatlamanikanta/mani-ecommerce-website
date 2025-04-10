export let bookedOrders= JSON.parse(localStorage.getItem('orders')) || [];
export function addOrder(order) {
    bookedOrders.unshift(order);
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('orders', JSON.stringify(bookedOrders));
}

