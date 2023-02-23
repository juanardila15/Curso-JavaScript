function bucleWhile(num) {
let i = 0;
while(i < num) {
console.log(i);
i++;
}
}

bucleWhile(11);


function doWhile(num) {
let i = 0;
do {
console.log(i);
i**;
} while(i< num);
}

doWhile();


function bucleFor(num) {
for(let i=0; i<num; i ++) {
console.log(i);
}
}

bucleFor(11);


const array = [];
array[0] = "1";
array[1] = "2";
array[0]


const obj = {
unArray: new Array(10000)
};

const unArray = obj.unArray;

for(let i=0, longitud = unArray.lemgth; i<longitud; i++) {
obj.unArray[i] = 'Hola';
}


const obj = {
unArray: new Array(10000)
}

function badperformance() {
console.time("bad");
for(let i=0; i<obj.unArray.length; i++) {
obj.unArray[i] = 'Hola';
}
console.timeEnd('bad');
}

function goodPerformance() {
console.time('good');
let unArray = obj.unArray;
for let i=0, longitud = unArray.length; i<longitud; i++) {
unArray[i] = 'Hola'
}
console.timeEnd('good');
}

badPerformance();
goodPerformance();
badPerformance();
goodPerformance();


const libro = {
titulo: "Aprendiendo JavaScript",
autor: "Ronald Alexis",
numPaginas: 100,
editorial: "Ronalalexis.es"
precio: "49.99",
}

for (let prop in libro) {
console.log(`La prop ${prop}
contiene: ${libro[prop]}`)
}
