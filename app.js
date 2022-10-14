
/*let nombres = ["Jonier", "Nicolas", "Alejandra"]
let edades = [29, 27, 25]

nombres[2]= "Carlos"

for (let i = 0; i < nombres.length; i++) {
    document.write(nombres[i] + " tiene " + edades[i] + " años" + "<br>")
}

let matriz = [[1, 5,7],[6, 2, 3],[2, 8 ,4],[5, 6, 4]]
let vector = []
let n = 0;
for (let i=0; i<matriz.length; i++) {
    for(let j=0; j<matriz[0].length; j++){
        document.write(matriz[i][j] + " ");
        //if (matriz[i][j] > 3 && matriz[i][j] < 6) {
        if (matriz[i][j] > 6 || matriz[i][j] < 6) {
        vector[n] = matriz[i][j];
            n += 1;
        }
    }
    document.write("<br>");
}
document.write("<br>" + vector);
*/
/*
let nombre ="JoNiEr"
let vectorNom = nombre.split('')
let vectorNomMin =[]
let vectorNomMayus =[]

for (let i = 0; i < vectorNom.length; i++){
    vectorNomMin[i] = vectorNom[i].toLowerCase()
    vectorNomMayus[i] = vectorNom[i].toUpperCase()  
}

document.write(vectorNom)
document.write('<br>' + vectorNomMin)
document.write('<br>' + vectorNomMayus)
*/
let numeros =[1,2,3,10,8,20];
/*let numerosOrd= [1,3,2,10,8,20]
numerosOrd.sort ( (a,b) => {
    if(a==b){
        return 0;
    }
    else if(a>b){
        return 1;
    }
    else{
        return -1;
    }
})
document.write(numeros)
document.write('<br>' + numerosOrd)
*/
/*
var numeros_filtrados = numeros.filter(function(parametro){
    return (parametro >2);
})
document.write('<br>' + numeros_filtrados);
*/

const url = "https://pokeapi.co/api/v2/pokemon/5"
//for(let i = 0; i < pokemon.length; i++) {
//    const url = "https://pokeapi.co/api/v2/pokemon/70"
//    fetch(url)

fetch(url) 
.then(respuesta => respuesta.json())
.then(datos => {
    document.write(datos.name)
    document.write("<br>")
    document.write("<img src=" + datos.sprites.front_default + ">")
    console.log(datos)
})
.catch(error => document.write(error))
