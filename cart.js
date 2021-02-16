class Cart {
    constructor(block) {
        this.block = block;
    }
    items = {};
    countOfItems = 0;
    fullPrice = 0;
    cartBlocksArray = [];
    address = {
        city: "",
        street: "",
        postal: ""
    };
    comments = "";
    
    

    addToCart(item) {
        const quantityOfItems = products.items[item.id].quantity;
        if (item.id in this.items) {
            if (this.items[item.id].quantity < quantityOfItems) {
                this.items[item.id].quantity += 1;
            }
        } else {
            this.items[item.id] = {
                item: item,
                quantity: 1
            }

        }
        this.totalPrice();
        this.showCart(this.createCartBlock());
    }



    showCart(changedBlock = "Корзина пуста!") {
        this.block.innerHTML = "";
        this.block.append(changedBlock);
    };

    createCartBlock() {
        const blockTitle = document.createElement("p");
        blockTitle.innerHTML = "Корзина";
        const total = document.createElement("div");
        total.classList.add("totalCart");
        const container = document.createElement("div");
        container.classList.add("cartContainer");
        for (let i in this.items) {
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

            const cartItemSlider = new Slider(sliderDiv, currentItem.item.images);
            descriptionDiv.append(headItem, priceItem, quantityItem, removeButton);
            itemDiv.append(sliderDiv, descriptionDiv);
            container.append(itemDiv);
        }
        total.innerHTML = `В вашей корзине ${this.countOfItems} товаров на ${this.fullPrice} рублей.`;
        const nextButton = document.createElement("div");
        nextButton.innerHTML = 'Далее';
        nextButton.classList.add("nextButton");
        nextButton.addEventListener("click", () => {
            this.showCart(this.createAddressBlock());
        });
        const block = document.createElement("div");
        block.append(blockTitle, total, container, nextButton);
        console.log(block);
        return block;



    }

    createAddressBlock() {
        const addressBlock = document.createElement("div");
        const blockTitle = document.createElement("p");
        const container = document.createElement("div");
        const nextButton = document.createElement("div");
        blockTitle.innerHTML = "Заполните форму доставки:"
        nextButton.innerHTML = 'Далее';
        const cityInput = document.createElement('input');
        const streetInput = document.createElement('input');
        const postalCode = document.createElement('input');
        if (this.address.city === "") {
            cityInput.placeholder = "Введите ваш город";
        } else cityInput.value = this.address.city;
        if (this.address.street === "") {
            streetInput.placeholder = "Введите вашу улицу";
        } else streetInput.value = this.address.street;
        if (this.address.postal === "") {
            postalCode.placeholder = "Введите ваш POST code";
        } else postalCode.value = this.address.postal;
        
        container.append(cityInput, streetInput, postalCode);
        container.classList.add("addressBlock");
        nextButton.classList.add("nextButton");
        nextButton.addEventListener("click", () => {
            this.address = {
                city: cityInput.value,
                street: cityInput.value,
                postal: postalCode.value
            };
            this.showCart(this.createCommentsBlock());
        });
        const block = document.createElement("div");
        addressBlock.append(blockTitle, container, nextButton);
        console.log(block);

        return addressBlock;
    }

    createCommentsBlock() {
        const commentsBlock = document.createElement("div");
        const blockTitle = document.createElement("p");
        const container = document.createElement("div");
        const nextButton = document.createElement("div");
        blockTitle.innerHTML = "Добавьте комментарии:"
        nextButton.innerHTML = 'Готово';
        const commentInput = document.createElement('textarea');
        if (this.comments === "") {
            commentInput.placeholder = "Вводите коментарий сюда";
        } else {
            commentInput.value = this.comments
        };
        container.classList.add("commentsBlock");
        nextButton.classList.add("nextButton");
        nextButton.addEventListener("click", () => {
            this.comments = commentInput.value;
            this.showCart("Готово!")
        })
        container.append(commentInput);
        commentsBlock.append(blockTitle, container, nextButton);
        return commentsBlock;
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
        if (!this.fullPrice) this.showCart()
        else {
            this.showCart(this.createCartBlock());
        }
    }
}