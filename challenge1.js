/* Reto
- Sabiendo lo que miden los 3
lados, encuentra la altura.
- Debe ser un triángulo
escaleno (todos los lados
diferentes). */
/* Challenge
- Knowing what the 3 measure
sides, find the height.
- It must be a triangle
scalene (all sides
different). */

function trianguloEscaleno (lado1, lado2, lado3) {
    
    if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
        return false;
    } 
    if (!(lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1 )){
        return false;
    }
    const s = (lado1 + lado2 + lado3) / 2;

    const a = Math.sqrt( s * (s - lado1) * (s - lado2) * (s - lado3));

    const altura = ( 2 * a ) / lado1;

    return Math.floor(altura);
};