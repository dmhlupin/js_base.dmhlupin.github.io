
// ==================================
// Task 1 Dynamic cart
// ==================================


const productSection = document.getElementById("productSection");
const product = {
    items: {
        "0001": {
            item: {
                id: "0001",
                name: "Phone",
                price: 1000
            },
            quantity: 2
        },
        "0002": {
            item: {
                id: "0002",
                name: "Laptop",
                price: 3000
            },
            quantity: 3
        },
        "0003": {
            item: {
                id: "0003",
                name: "PC",
                price: 4000
            },
            quantity: 1
        }
    },
    showProduct() {
        for (let id in this.items) {
            const currentItem = this.items[id];
            const element = document.createElement('div');
            const addButton = document.createElement('button');
            addButton.innerHTML = "Добавить";
            addButton.onclick = () => {
                cart.addToCart(this.items[id].item);
            }
            element.innerHTML = `Товар: ${currentItem.item.name}, стоимость: ${currentItem.item.price}, количество: ${currentItem.quantity} <br>`;
            element.appendChild(addButton);
            productSection.appendChild(element);
        }
    },
    addToProduct(item) {

    },
    createID() {

    }
};

const cart = {
    fullPrice: 0,
    quantity: 0,
    items: {},
    addToCart(item) {
        const quantityOfItems = product.items[item.id].quantity;
        if (item.id in this.items) {
            if(this.items[item.id].quantity < quantityOfItems) {
                this.items[item.id].quantity += 1;
            }
        } else  {
            this.items[item.id] = {
                item: item,
                quantity: 1,
            }
        }
        this.calcCart();
        this.showCart();
    },
    removeFromCart(item) {

    },
    showCart() {
        
        const cartSection = document.getElementById("cartSection");
        const resetButton = document.createElement("button");
        resetButton.id = "resetButton";
        resetButton.innerHTML = "Удалить все!";
        resetButton.onclick = () => {
            this.resetCart();
        };
        const infoStr = document.createElement("div");
        infoStr.innerHTML = "Корзина пуста!";
        cartSection.innerHTML = "";
        if (this.fullPrice === 0) {
            cartSection.appendChild(infoStr);
        } else {
            
            infoStr.innerHTML = `В корзине ${this.quantity} товаров на ${this.fullPrice} рублей:`; 
            cartSection.appendChild(infoStr);
            for(let good in this.items) {
                const currentItem = this.items[good];
                const strOfItem = document.createElement("div");
                strOfItem.innerHTML = `Товар: ${currentItem.item.name} Цена: ${currentItem.item.price} Количество: ${currentItem.quantity}`;
                cartSection.appendChild(strOfItem);
            }
            cartSection.appendChild(resetButton);
        }
    },
    calcCart() {

        this.fullPrice = 0;
        this.quantity = 0;
        for (let good in this.items) {
            const thisGood = this.items[good];
            this.fullPrice += thisGood.item.price * thisGood.quantity;
            this.quantity += thisGood.quantity;
        }
        
    },
    resetCart() {
        this.items = {};
        this.fullPrice = 0;
        this.showCart();
    }

};


product.showProduct();
cart.showCart();
