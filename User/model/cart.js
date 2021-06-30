module.exports = function Cart(oldCart){
    this.items = oldCart.items || {};
    this.totalQty = oldCart.totalQty || 0;
    this.totalPrice = oldCart.totalPrice || 0;



    this.add = (item, id, quantity) =>{
        let storeItem = this.items[id];
        if(!storeItem){
            storeItem =this.items[id] = {item: item, qty:0, price:0};
            storeItem = this.items[id]
        }
        storeItem.qty += quantity;
        storeItem.price = storeItem.item.price*storeItem.qty;
        this.totalQty +=quatity;
        this.totalPrice += storeItem.item.price*quantity;
        return this;
        

        
    // this.getTotalQuantity = () => {
    //     var quantity = 0;
    //     for (var id in this.items) {
    //         quantity += this.items[id].qty;
    //     }
    //     return quantity;
    // };
        
        // const cartItem = {
        //     item: this.items,
        //     totalQty: this.totalQty,
        //     totalPrice: this.totalPrice,
        // }
        // return cartItem;
    }

    this.generateArray = ()=>{
        let arr = [];
        for(let id in this.items){
            arr.push(this.items[id]);
        }
        return arr;
    }
}