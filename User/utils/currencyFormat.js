module.exports.formatCurrency = (item) =>{
    return item.map((newItem) => {
        return {
            _id: newItem._id,
            name: newItem.name,
            price: new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(newItem.price),
            available: newItem.available,
            description: newItem.description,
            type: newItem.type,
            img: newItem.img,
            updatedAt: newItem.updatedAt
        };
    });
}

module.exports.formatNumber = (number) =>{
    return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(number);
}