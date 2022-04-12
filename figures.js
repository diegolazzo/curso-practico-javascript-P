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

//Area del triangulo
const semiperimetroTriangulo = perimetroTriangulo / 2;
console.log(`El semiperímetro del triángulo es: ${semiperimetroTriangulo}`);

const alturaTriangulo =
  (2 / baseTriangulo) *
  Math.sqrt(
    semiperimetroTriangulo *
      (semiperimetroTriangulo - ladoTriangulo2) *
      (semiperimetroTriangulo - baseTriangulo) *
      (semiperimetroTriangulo - ladoTriangulo1)
  );

console.log(`La altura del triángulo es de: ${alturaTriangulo}`);

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log(`El área del triángulo es: ${areaTriangulo}`);
console.groupEnd();
