const pintarProductos = (productos) => {
    const contenedor = document.getElementById("producto-contenedor");

    productos.forEach(producto => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML += `<div class="card-image">
                        <img src=${producto.imagen}>
                        <span class="card-title">${producto.nombre}</span>
                        <a class="btn-floating halfway-fab wabes-effect waves-light red"><i id=${producto.id} class="material-icons agregar">add_shopping_cart</i></a>
                        </div>
                        <div class="card-content">
                            <p>${producto.descripcion}</p>
                            <p>${producto.precio}</p>
                        </div>
                        `
    contenedor.appendChild(div);
    });
};

document.addEventListener('DOMContentLoaded', () => {
    getProducts();
    pintarCarrito(carrito);
    actualizarTotalCarrito(carrito);
});

const modalContenedor = document.querySelector('.modal-contenedor');
const abrirCarrito = document.getElementById('cesta-carrito');
const cerrarCarrito = document.getElementById('btn-cerrar-carrito');
const modalCarrito = document.querySelector('.modal-carrito');
const finalizarCompra = document.querySelector('btn-finalizar-compra');
const carritoContenedor = document.querySelector('carrito-contenedor');
const contadorCarrito = document.querySelector('contador-carrito');
const precioTotal = document.querySelector('precioTotal');

abrirCarrito.addEventListener('click', () => {
    modalContenedor.classList.toggle('modal-active')
});

cerrarCarrito.addEventListener('click', () => {
    modalContenedor.classList.toggle('modal-active')
});

modalCarrito.addEventListener('click', (event) => {
    event.stopPropagation();
    if (event.target.classList.contains('boton-eliminar')) {
        eliminarProductoCarrito(event.target.value);
    };
});

const btnCompra = document.getElementById("btn-finalizar-compra");

btnCompra.addEventListener("click", () => {
    Swal.fire({
        title: "Compra realizada con éxito!",
        text: "Estamos preparando su pedido!",
        icon: "success",
    });

    carrito = [];
    localStorage.removeItem('carrito');

    const contadorCarrito = document.getElementById('contador-carrito');
    contadorCarrito.innerHTML = '';

    const carritoContenedor = document.getElementById('carrito-contenedor');
    carritoContenedor.innerHTML = '';

    const precioTotal = document.getElementById('precioTotal');
    precioTotal.innerHTML = '';
});





