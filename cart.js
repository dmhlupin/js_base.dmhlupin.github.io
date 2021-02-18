class Cart {
    constructor (block) {
        this.block = block;
    }
    items = {};
    countOfItems = 0;
    fullPrice = 0;

    addToCart(item) {
        const quantityOfItems = products.items[item.id].quantity;
        if(item.id in this.items) {
            if(this.items[item.id].quantity < quantityOfItems) {
                this.items[item.id].quantity += 1;
            }
        }
        else {
            this.items[item.id] = {item: item, quantity: 1}
            
        }
        this.totalPrice();
        this.showCart();
    }

    showCart() {
        console.log(this.items);
        this.block.innerHTML = "Корзина";
        const total = document.createElement("div");
        total.classList.add("totalCart");
        const container = document.createElement("div");
        container.classList.add("cartContainer");
        for(let i in this.items) {
            const currentItem = this.items[i];
            const itemDiv = document.createElement("div");
            const sliderDiv = document.createElement("div");
            const descriptionDiv = document.createElement("div");
            

            const headItem = document.createElement("h3");
            const priceItem = document.createElement("p");
            const quantityItem = document.createElement("p");
            const removeButton = document.createElement("div");
            
            itemDiv.classList.add("itemCartList");
            sliderDiv.classList.add("sliderDiv");
            descriptionDiv.classList.add("cartDescDiv");
            removeButton.classList.add("removeButton");
            
            headItem.classList.add("headItem");
            priceItem.classList.add("priceItem");
            quantityItem.classList.add("quantityItem");

            removeButton.addEventListener("click", () => {
                this.removeItems(currentItem.item.id);
            })

            removeButton.innerHTML = "Удалить";
            headItem.innerHTML = currentItem.item.name;
            priceItem.innerHTML = `Цена: ${currentItem.item.price} рублей.`;
            quantityItem.innerHTML = `В корзине ${currentItem.quantity} шт.`;
            
            const cartItemSlider = new Slider(sliderDiv,currentItem.item.images);
            descriptionDiv.append(headItem, priceItem,quantityItem,removeButton);
            itemDiv.append(sliderDiv,descriptionDiv);
            container.append(itemDiv);
        }
        total.innerHTML = `В вашей корзине ${this.countOfItems} товаров на ${this.fullPrice} рублей.`
        this.block.append(total, container);
        


    }

    totalPrice() {

        this.fullPrice = 0;
        this.countOfItems = 0;
        for (let good in this.items) {
            const thisGood = this.items[good];
            this.fullPrice += thisGood.item.price * thisGood.quantity;
            this.countOfItems += thisGood.quantity;
        }
        
    }
    removeItems(itemId) {
        delete this.items[itemId];
        this.totalPrice();
        this.showCart();
    }
}

