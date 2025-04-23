console.log('jQuery versión:', $.fn.jquery);
console.log('Bootstrap Modal existe?', typeof bootstrap.Modal);





//variables en js
let edad = 30
let edad2 = 35
var nombre = "juan"
let numeroGrande = 987654321234567890876543
let nombre2 = "asdasdasdasdasdasdasdasd"
const rut = 123112312412

//tipos de datos
let texto = "este es un texto"
let numero = 2
let estudiante = false
let nulo = null
let indefinido;
let numeroGrande2 = 987654321234567890876543


//Operadores
let a = 10 + 5

let numero1 = 10
let numero2 = 5
let resultado = numero1 + numero2


console.log(resultado)

//estructura de control
//if else

let nota = 60
if (nota >= 90) {
    console.log("muy buena nota")
} else if (nota >= 50) {
    console.log("nota normal")
} else {
    console.log("reprobado")
}

//bucles

for (let indice = 0; indice < 10; indice++ ){
    console.log("indice =", indice)
    //alert("dando vueltas")
}

//manipulación del DOM

const div_test = document.getElementById("div_test")
div_test.innerHTML = "<p>hola desde js</p>"

const div = document.getElementById("div")
const btn = document.getElementById("btn")

btn.addEventListener("clkic" , () => {
    div.style.backgroundColor = "red"
})