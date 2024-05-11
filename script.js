// Në JavaScript, kllapat katrore përdoren për të treguar një varg literal
// Kur përdoret me një varg fjalë për fjalë, kllapat katrore përdoren për të mbyllur elementët e grupit. Mund ta inicializoni grupin me vlera, t'i ndani me presje dhe t'i mbyllni brenda kllapave katrore.

// Në JavaScript, kllapat përdoren kryesisht për grupimin e shprehjeve dhe kontrollin e renditjes së veprimeve në shprehjet matematikore. Sidoqoftë, ato përdoren gjithashtu në thirrjet dhe shprehjet e funksioneve që përfshijnë fjalë për fjalë objektesh.
// Në kontekstin e vargjeve, kllapat përdoren për thirrjet e funksioneve.
// Këtu, Array () i ri është një funksion konstruktor për krijimin e një objekti të grupit, dhe vlerat brenda kllapave janë argumente që i kalohen konstruktorit për të inicializuar grupin me vlera.
// Në përmbledhje, kllapat katrore [ ] përdoren për të treguar literale të vargjeve dhe për të mbyllur elementët e grupit, ndërsa kllapat ( ) përdoren për thirrjet e funksioneve, duke përfshirë krijimin e vargjeve duke përdorur konstruktorin Array.



// const cars = ["Audi", "BMW", "Wolsvagen"]
// document.getElementById("demo").innerHTML = cars;

// const cars = [
//     "Audi",
//     "BMW",
//     "Wolsvagen"
//   ];
//   document.getElementById("demo").innerHTML = cars;

//   const cars = new Array("Audi", "BMW", "Wolsvagen");
//   document.getElementById("demo").innerHTML = cars;
  
const cars = [];
cars [0] = "Audi";
cars [1] = "BMW";
cars [3] = "Wolsvagen";

document.getElementById("demo").innerHTML = cars;

// let fruits = ["Banana", "Apple", "Orange"];

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);


let fruits = ["Banana", "Apple", "Orange", "Cocount"];

document.getElementById("demo").innerHTML = fruits;
