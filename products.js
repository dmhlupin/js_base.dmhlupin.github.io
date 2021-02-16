"use strict"

// Создаем класс Products

class Products {
    constructor(block) {
        this.block = block;
    }
    items = {};
    addItem(item, quantity) {
        if (item.id in this.items) {
            this.items[item.id].quantity += quantity;
        } else {
            this.items[item.id] = {
                item: item,
                quantity: quantity
            }
        }
    }
    showItems() {
        for(let i in this.items) {
            const currentItem = this.items[i];
            const itemDiv = document.createElement("div");
            const sliderDiv = document.createElement("div");
            const descriptionDiv = document.createElement("div");

            const headItem = document.createElement("h3");
            const priceItem = document.createElement("p");
            const quantityItem = document.createElement("p");
            const toCartButton = document.createElement("div");
            toCartButton.innerHTML = "Купить";
            toCartButton.classList.add("toCartButton");
            toCartButton.addEventListener("click", () => {cart.addToCart(currentItem.item)
                    // Повесить обработчик
            });
            

            headItem.classList.add("headItem");
            priceItem.classList.add("priceItem");
            quantityItem.classList.add("quantityItem");

            headItem.innerHTML = currentItem.item.name;
            priceItem.innerHTML = `Цена: ${currentItem.item.price} рублей`;
            quantityItem.innerHTML = `Количество на складе: ${currentItem.quantity} шт.`;

            descriptionDiv.append(headItem,priceItem,quantityItem, toCartButton);
            itemDiv.classList.add("itemProductList");
            sliderDiv.classList.add("sliderDiv");
            descriptionDiv.classList.add("descDiv");
            const slider = new Slider(sliderDiv, currentItem.item.images);
            itemDiv.append(sliderDiv, descriptionDiv);
            this.block.append(itemDiv);
        }
    }
}

