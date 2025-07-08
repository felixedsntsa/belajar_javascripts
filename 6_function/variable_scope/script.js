// Scope
// bagaimana sebuah variabel dapat diakses dalam program

// dua jenis scope
// - block scope
// - function scope

// block scope
// var i = 2;

// if(i % 2 == 0 ) {
//     var genap = true;
// }

// if(genap) {
//     alert("Genap");
// }

// global scope / window scope

var a = 1;

function test() {
    var b = 2;
    console.log(a); // 1, a is accessible here
    console.log(b); // 2, b is accessible here
}

test();
// alert(b); // ReferenceError: b is not defined