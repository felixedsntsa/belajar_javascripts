// FUNCTION

// method, class, constructor, module dapat dilakukan pada function di javascript
// function adalah sub-program / sub-routine yag dapat dipanggil di bagian lain pada program
// merupakan struktur dasar pembentuk dari javascript
// disebut juga prosedur(kumpulan statement untuk melakukan tugas)
// harus membuat terlebih dahulu lalu dapat memanggilnya tetapi ada bebarapa yang sudah tersedia di javascript
// termasuk kedalam first-class-object

// why function?
// reusability
// dekomposisis / abstraksi (untuk menyembunyikan kompleksitas)
// modularitas (dapat dgn mudah nanti pada saat debugging)

// kategori function
// built in function (fungsi yang sudah tersedia di javascript)
// user defined function (fungsi yang dibuat oleh kita)

// built in funtion
// cth: alert, confirm, prompt

// built in function : string
// charAt, slice, split, toString, toLowerCase, toUpperCase

// built in function : math
// sin, cos, tan, random, round, floor, ceil, log

// user defined function
// function (opsional)
// parameter() (boleh ada/tidak, boleh lebih dari 1, pisah pakai(,))
// function body dibungkus dengan {}
// dapat mengembalikan return value / tidak

// membuat user defined function
// dengan deklarasi atau ekspresi

// deklarasi
function jumlahDuaBilangan(a, b) {
    var total;
    total = a + b;

    return total;
}

// ekspresi
// var jumlahDuaBilangan = function(a, b) {
//     var total;
//     total = a + b;

//     return total
// }

alert(jumlahDuaBilangan(1,2));
alert(jumlahDuaBilangan(25,30));
alert(jumlahDuaBilangan(1500,17.5));