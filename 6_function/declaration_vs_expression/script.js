// Function Declaration
// function identifier (ParameterList opt) {FunctionBody}

// Function Expression
// function identifier opt (ParameterList opt) {FunctionBody}

// perbedaan hanya di identifier (boleh tidak punya nama)

// contoh function declaration
function tampilPesan(nama) {
    alert('halo' + nama);
}

tampilPesan('Felix');

// function expression
var tampilPesan = function(nama) {
    alert('halo' + nama);
}

tampilPesan('Edna');

// function declaration
// - lebih fleksibel (dapat ditulis dimanapun) => (karena konsep hoisting)
// - mudah dipahami oleh pemula

// function expression
// - harus didefinisikan terlebih dahulu sebelum dipanggil
// - lebih powerfull => (sebagai closure, argumen untuk function lain, iife(immediately invoked function expression))
