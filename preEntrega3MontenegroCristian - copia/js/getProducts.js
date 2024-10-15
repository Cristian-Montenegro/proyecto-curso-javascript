const getProducts = () => {
    fetch("./js/data.json")
    .then((response) => response.json())
    .then((products) => {
        pintarProductos(products);
    })
};