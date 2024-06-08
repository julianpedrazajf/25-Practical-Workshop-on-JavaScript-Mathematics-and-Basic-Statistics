/* const inputPrice = document.querySelector('#price');
const inputDiscount = document.querySelector('#discount');
const btn = document.querySelector('#calcular');
const pResult = document.querySelector('#result');

btn.addEventListener('click', calcularPrecioConDescuento);

function calcularPrecioConDescuento() {
    // (p * (100 - D)) / 100

    const price = Number(inputPrice.value);
    const discount = Number(inputDiscount.value);

    console.log({price, discount})

    if(!price || !discount){
        pResult.innerText = 'Por favor llena el formulario';
        return
    };

    if (discount > 100){
        pResult.innerText = 'tu descuento no puede ser mayor al 100%';
        return
    };

    const newPrice = (price * (100 -  discount)) / 100;

    pResult.innerText = 'El nuevo precio con descuento es: $' + newPrice;
} */

/* const inputPrice = document.querySelector('#price');
const inputCoupon= document.querySelector('#coupon');
const btn = document.querySelector('#calcular');
const pResult = document.querySelector('#result');

btn.addEventListener('click', calcularPrecioConDescuento);

function calcularPrecioConDescuento() {
    // (p * (100 - D)) / 100

    const price = Number(inputPrice.value);
    const coupon = inputCoupon.value;

    if(!price || !coupon){
        pResult.innerText = 'Por favor llena el formulario';
        return
    };

    let discount;

    if (coupon == 'juanDC') {
        discount = 30;
    } else if (coupon == 'noDigas'){
        discount = 25;
    } else {
        pResult.innerText = 'tu cupon no es valido';
        return
    }

    const newPrice = (price * (100 -  discount)) / 100;

    pResult.innerText = 'El nuevo precio con descuento es: $' + newPrice;
} */

const inputPrice = document.querySelector('#price');
const inputCoupon= document.querySelector('#coupon');
const btn = document.querySelector('#calcular');
const pResult = document.querySelector('#result');

btn.addEventListener('click', calcularPrecioConDescuento);

//const arrayUObjecto = undefined; // ['cupones': descuento] {}?

const couponsObj = {
    'JuanDC': 15,
    'JulianAV': 25,
    '123': 35,
};

function calcularPrecioConDescuento() {
    // (p * (100 - D)) / 100

    const price = Number(inputPrice.value);
    const coupon = inputCoupon.value;

    if(!price || !coupon){
        pResult.innerText = 'Por favor llena el formulario';
        return
    };

    let discount;

    if (couponsObj[coupon]) {
        discount = couponsObj[coupon];
    } else {
        pResult.innerText = 'tu cupon no es valido';
        return;
    }

    /* if (coupon == 'juanDC') {
        discount = 30;
    } else if (coupon == 'noDigas'){
        discount = 25;
    } else {
        pResult.innerText = 'tu cupon no es valido';
        return
    } */


    const newPrice = (price * (100 -  discount)) / 100;

    pResult.innerText = 'El nuevo precio con descuento es: $' + newPrice;
}

