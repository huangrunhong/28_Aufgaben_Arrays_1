// ===========================
//      Array-Level-1_1
// ===========================
console.log("%c=====Array-Level-1_1=====", "color:yellowgreen");
const arrayPerson1 = ["Bruce", "Wayne", "Superreich"];
const arrayPerson2 = ["Farid", "Christian", "Serio"];
const arrayPerson3 = ["Burger", "Sushi", "Mais-Käsebällchen"];
console.log(arrayPerson1);
console.log(arrayPerson2);
console.log(arrayPerson3);

// ===========================
//      Array-Level-1_2
// ===========================
console.log("%c=====Array-Level-1_2=====", "color:yellowgreen");
console.log(arrayPerson1[0]);
console.log(arrayPerson1[1]);
console.log(arrayPerson1[2]);

console.log(arrayPerson2[0]);
console.log(arrayPerson2[1]);
console.log(arrayPerson2[2]);

console.log(arrayPerson3[0]);
console.log(arrayPerson3[1]);
console.log(arrayPerson3[2]);

// ===========================
//      Array-Level-1_3
// ===========================
console.log("%c=====Array-Level-1_3=====", "color:yellowgreen");
console.log(arrayPerson1.length);
console.log(arrayPerson2.length);
console.log(arrayPerson3.length);

// ===========================
//      Array-Level-1_4
// ===========================
console.log("%c=====Array-Level-1_4=====", "color:yellowgreen");
console.log(arrayPerson1);
arrayPerson1.push("Batman", "Gotham-City");
console.log(arrayPerson1);

console.log(arrayPerson2);
arrayPerson2.push("Marzio", "Magda");
console.log(arrayPerson2);

console.log(arrayPerson3);
arrayPerson3.push("Pizza", "Currywurst");
console.log(arrayPerson3);

// ===========================
//      Array-Level-1_5
// ===========================
console.log("%c=====Array-Level-1_5=====", "color:yellowgreen");
console.log(arrayPerson1);
let lastArrayPerson1 = arrayPerson1.pop();
console.log(lastArrayPerson1);
console.log(arrayPerson1);

console.log(arrayPerson2);
let lastArrayPerson2 = arrayPerson2.pop();
console.log(lastArrayPerson2);
console.log(arrayPerson2);

console.log(arrayPerson3);
let lastArrayPerson3 = arrayPerson3.pop();
console.log(lastArrayPerson3);
console.log(arrayPerson3);

// ===========================
//      Array-Level-1_6
// ===========================
console.log("%c=====Array-Level-1_6=====", "color:yellowgreen");
console.log(arrayPerson1);
let firstArrayPerson1 = arrayPerson1.shift();
console.log(firstArrayPerson1);
console.log(arrayPerson1);

// ===========================
//      Array-Level-1_7
// ===========================
console.log("%c=====Array-Level-1_7=====", "color:yellowgreen");
console.log(arrayPerson2);
arrayPerson2.unshift("Julia", "Lea");
console.log(arrayPerson2);

console.log(arrayPerson3);
arrayPerson3.unshift("Leberkäse", "spinat");
console.log(arrayPerson3);

// ===========================
//      Array-Level-1_9
// ===========================
console.log("%c=====Array-Level-1_9=====", "color:yellowgreen");
const numArray = [23, 54, 75];
console.log(numArray);
numArray.push(11, 32, 42, 5, 71);
console.log(numArray);
numArray.unshift(1, 3, 7, 8, 14);
console.log(numArray);
numArray.pop();
numArray.pop();
console.log(numArray);
numArray.shift();
numArray.shift();
console.log(numArray);
