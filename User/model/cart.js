let currencyFormat = require('../utils/currencyFormat');

module.exports = function Cart(oldCart){
    this.items = oldCart.items || {};
    this.totalQty = oldCart.totalQty || 0;
    this.totalPrice = oldCart.totalPrice || 0;

    this.add = (item, id, quantity) =>{
        let storeItem = this.items[id];
        if(!storeItem){
            storeItem =this.items[id] = {item: item, qty:0, price:0};
        }
        storeItem.qty += quantity;
        storeItem.price = storeItem.item.price*storeItem.qty;
        // this.items[id].price = currencyFormat.formatNumber(this.items[id].price);
        this.totalQty += quantity;
        this.totalPrice += storeItem.item.price*quantity;

        return this;
    }

    this.update = (item, id, quantity) =>{
        let storeItem = this.items[id];

        storeItem.qty = quantity;
        storeItem.price = storeItem.item.price*storeItem.qty;
        this.totalQty +=  (quantity - storeItem.qty);
        this.totalPrice += (storeItem.item.price*this.totalQty);

        return this;
    }

    this.generateArray = ()=>{
        let arr = [];
        for(let id in this.items){
            arr.push(this.items[id]);
        }
        return arr;
    }
}