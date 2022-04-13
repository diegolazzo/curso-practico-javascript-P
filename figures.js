console.log("This script is working :)");

// Código para el cuadrado

// console.group("Cuadrado");
// const ladoCuadrado = 4;
// console.log(`El lado del cuadrado mide: ${ladoCuadrado}`);

// const perimetroCuadrado = ladoCuadrado * 4;
// console.log(`El perímetro del cuadrado es de: ${perimetroCuadrado}`);

// const areaCuadrado = ladoCuadrado * ladoCuadrado;
// console.log(`El área del cuadrado mide: ${areaCuadrado}`);
// console.groupEnd();

// Código para el triángulo

// console.group("Triángulo");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 8;

// console.log(`Los lados del triángulo miden:
// Lado A: ${ladoTriangulo1}
// Lado B: ${ladoTriangulo2}
// Base: ${baseTriangulo}`);

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// console.log(`El perímetro del triángulo es de: ${perimetroTriangulo}`);

// //Area del triangulo
// const semiperimetroTriangulo = perimetroTriangulo / 2;
// console.log(`El semiperímetro del triángulo es: ${semiperimetroTriangulo}`);

// const alturaTriangulo =
//   (2 / baseTriangulo) *
//   Math.sqrt(
//     semiperimetroTriangulo *
//       (semiperimetroTriangulo - ladoTriangulo2) *
//       (semiperimetroTriangulo - baseTriangulo) *
//       (semiperimetroTriangulo - ladoTriangulo1)
//   );

// console.log(`La altura del triángulo es de: ${alturaTriangulo}`);

// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
// console.log(`El área del triángulo es: ${areaTriangulo}`);
// console.groupEnd();

// Vamos a transformar las variables de areas en funciones
// Tomo la variable, la pego y comienzo a transformar

console.group("CUADRADO");

//Cuando definimos una función (parámetros)
//Cuando llamamos la función (argumento)
function perimetroCuadrado(lado) {
  return lado * 4;
}
// console.log(`El perímetro del cuadrado es de: ${perimetroCuadrado}`);

function areaCuadrado(lado) {
  return lado * lado;
}

console.groupEnd();

console.group("TRIANGULO");

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

function semiperimetroTriangulo(lado1, lado2, base) {
  const semiperimetroTriangulo = perimetroTriangulo(lado1, lado2, base) / 2;
  return semiperimetroTriangulo;
}

function alturaTriangulo(lado1, lado2, base) {
  const semiperimetroTriangulo = perimetroTriangulo(lado1, lado2, base) / 2;
  const alturaTriangulo =
    (2 / base) *
    Math.sqrt(
      semiperimetroTriangulo *
        (semiperimetroTriangulo - lado2) *
        (semiperimetroTriangulo - base) *
        (semiperimetroTriangulo - lado1)
    );
  return alturaTriangulo;
}

function areaTriangulo(lado1, lado2, base) {
  const semiperimetroTriangulo = perimetroTriangulo(lado1, lado2, base) / 2;
  const alturaTriangulo =
    (2 / base) *
    Math.sqrt(
      semiperimetroTriangulo *
        (semiperimetroTriangulo - lado2) *
        (semiperimetroTriangulo - base) *
        (semiperimetroTriangulo - lado1)
    );

  const areaTriangulo = (base * alturaTriangulo) / 2;
  return areaTriangulo;
}

//Otra forma de hacer console.log con objeto
console.log({
  perimetroTriangulo,
  semiperimetroTriangulo,
  alturaTriangulo,
  areaTriangulo,
});

//AQUI interactuamos con el HTML
//En la consola del navegador escribo:
//document.getElementById("InputCuadrado") y puedo identificar el input que necesito
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value; //así ya estoy leyendo lo que escribe el usuario

  const perimetro = perimetroCuadrado(value);

  const resultadoPerimetro = document.getElementById("ResultadoPerimetro");
  resultadoPerimetro.innerText = `Perímetro = ${perimetro} cm`;
}
//

function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value; //así ya estoy leyendo lo que escribe el usuario

  const area = areaCuadrado(value);

  const resultadoArea = document.getElementById("ResultadoArea");
  resultadoArea.innerText = `Área = ${area} cm2`;
}
