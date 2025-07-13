// Konsep This
// var a = 10;
// console.log(this.a);

// cara 1 - function declaration
// function halo() {
//     console.log(this);
//     console.log('Halo');
// }
// this.halo();
// this mengembalikan objek global

// cara 2
// var obj = {};
// obj.halo = function() {
//     console.log(this);
//     console.log('halo');
// }
// obj.halo();
// this mengembalikan objek yang bersangkutan

// cara 3
// function Halo() {
//     console.log(this);
//     console.log('halo');
// }

// var obj1 = new Halo();
// var obj2 = new Halo();
// this mengembalikan object yang baru dibuat