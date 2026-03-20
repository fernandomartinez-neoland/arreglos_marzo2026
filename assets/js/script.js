const arreglo=[];
const lista_frutas=["pera", "manzan", "fresa"];


console.log(arreglo)
console.log(lista_frutas)


arreglo[0]="hola";
arreglo[1]=5;

console.log(arreglo)
console.log(lista_frutas[2])


const colores=["yellow", "brown", "grey", "green", "blue"]
const body=document.getElementById("body");
const selectC=document.getElementById("select_color");

selectC.addEventListener("change", ()=>{
    // select.value devuelve un numero, al meterlo en el corchete,e ste funciona como la posicion del arreglo
    // la formula para ir a una posicion de un arreglo es arreglo[posicion]
    // si queremos cambiar el background-color de un elemento, sabemos que el background-color es un estilo y por ende decimos:
    // variable.style.backgroundColor=valor
    body.style.backgroundColor=colores[selectC.value]
    console.log(selectC.value)
})