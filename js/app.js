let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'CASING HP',
        image: 'img/products/casing.jpeg',
        price: 30000
    },
    {
        id: 2,
        name: 'CHARGER',
        image: 'img/products/charger.jpg',
        price: 125000
    },
    {
        id: 3,
        name: 'EARPHONE',
        image: 'img/products/earphone.jpg',
        price: 80000
    },
    {
        id: 4,
        name: 'HEADPHONE',
        image: 'img/products/headphone.jpg',
        price: 10000
    },
    {
        id: 5,
        name: 'MOUSE',
        image: 'img/products/mouse.jpeg',
        price: 50000
    },
    {
        id: 6,
        name: 'POPSOCKET',
        image: 'img/products/popsocket.png',
        price: 20000
    },
    {
        id: 7,
        name: 'POWERBANK',
        image: 'img/products/powerbank.jpg',
        price: 120000
    },
    {
        id: 8,
        name: 'SPEAKER LAMP',
        image: 'img/products/speakerlamp.jpg',
        price: 150000
    },
    {
        id: 9,
        name: 'USB',
        image: 'img/products/usb.jpg',
        price: 50000
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}

document.addEventListener('DOMContentLoaded', function() {

    function buyNow() {
        if (listCards.length === 0) {
            alert('Pilih barang terlebih dahulu.');
        } else {
            const confirmation = confirm('Pesanan anda segera dikirim. Lanjutkan pembayaran?');
            if (confirmation) {
                listCards = [];
                reloadCard();
                body.classList.remove('active');
                alert('Terima kasih atas pembeliannya!');
            }
        }
    }

    let totalButton = document.querySelector('.total');

    function updateTotalAmount() {
        totalButton.querySelector('.total-amount').textContent = total.innerText;
    }

    totalButton.addEventListener('click', buyNow);
    updateTotalAmount();
});