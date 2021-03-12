//rocorrido de array con for
// break
// continue
let animales = ['gato','perro','conejo'];
animales.edad = 20;


//recorre la posicion del array -- tambien muestra el nombre de las propiedades(objeto)
for(animal in animales){
    // console.log(animal);
}

//recorre el valor de la posicion
for (animal of animales){
    // console.log(animal);
}



for (let i = 0; i<10;i++){
    console.log(typeof(i));
}
var i = 20;
// console.log(i);


let array1 = ['papanoel','gordo','otaku'];
let array2 = ['jalapenos','tequila', array1,'nino polla'];

console.log(array2);
//recorriendo 2 arrays
forRancio: //label para todo el bloque 
for(a in array2){   
    if(a == 2){
        for (const iterator of array1) {
            continue forRancio;
            console.log(iterator);
        }
    }else {
        console.log(array2[a]);
    }
}


