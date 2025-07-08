// Array
// - secara umum yaitu susuan sistematis dari objek objek yang serupa
// - dalam programming yaitu tipe data yang digunakan untuk mendeskripsikan kumpulan elemen(nilai atau variabel), yang tiap-tiap elemennya memiliki indeks
// - array adalah variabel yang lebih sakti(bisa menampung lebih dari satu nilai bisa berupa string, boolean, integer)

// contoh
var hari = ["Senin","Selasa","Rabu"];
var mahasiswa = ['Felix','Edna','Santosa'];

// kenapa butuh array?
// - untuk mempermudah pengelolaan nilai / value / data => (penelusuran dan pencarian)
// - manajemen memori (tidak butuh banyak variabel)

// karakteristik array
// - variabel jamak, yang mempunyai banyak elemen dan diacu dengan nama yang sama
// - kumpulan pasangan key dan nilai / key and value pair
// - key adalah index pada array dengan tipe integer yang dimulai dari 0
// - array pada javascript bertipe object
// - array pada javascript memiliki fungsi / method lenght untuk menghitung jumlah elemen di dalamnya
// - elemen pada array boleh memiliki tipe data yang berbeda

// key value pair
var binatang = ['kucing','kelinci','monyet','panda','koala','sapi'];

console.log(binatang[4]); // menampilkan koala karena kucing index ke-0
console.log(typeof(binatang)); // menampilkan object
console.log(binatang.length); // ada 6 elemen beda dengan index yang dimulai dari 0

// array beda tipe data
var myArr = ['Felix',1,true];
var myFunc = function() {
    alert('Hello World!');
}
var myArr2 = ['Edna',2,false,myFunc];
var myArr3 = ['Santosa',3,true,myFunc,[4,5,6]];
console.log(myArr3[4][1]); // menampilkan angka 5