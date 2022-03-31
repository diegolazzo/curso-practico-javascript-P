console.log("This script is working :)");

// Código para el cuadrado

console.group("Cuadrado");
const ladoCuadrado = 4;
console.log(`El lado del cuadrado mide: ${ladoCuadrado}`);

const perimetroCuadrado = ladoCuadrado * 4;
console.log(`El perímetro del cuadrado es de: ${perimetroCuadrado}`);

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log(`El área del cuadrado mide: ${areaCuadrado}`);
console.groupEnd();

// Código para el triángulo

console.group("Triángulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 8;

console.log(`Los lados del triángulo miden: 
Lado A: ${ladoTriangulo1}
Lado B: ${ladoTriangulo2}
Base: ${baseTriangulo}`);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log(`El perímetro del triángulo es de: ${perimetroTriangulo}`);
console.groupEnd();

// const areaCuadrado = ladoCuadrado * ladoCuadrado;
// console.log(`El área del cuadrado mide: ${areaCuadrado}`);
