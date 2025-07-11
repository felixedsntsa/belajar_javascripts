// Manipulasi Array
// - menambah elemen pada array
// - menghapus elemen pada array
// - menampilkan seluruh isi pada array

// 1. Menambah isi array
// var arr = ["a", 1, true];
// console.log(arr);

// mengisi secara satu-satu
// var arr = [];
// arr[0] = "Felix";
// arr[1] = "Edna";
// arr[2] = "Santosa";
// console.log(arr);

// 2. Menghapus isi array (manual)
// var arr = ["Felix", "Edna", "Santosa"];
// arr[1] = undefined;
// console.log(arr);

// 3. Menampilkan isi array
// var arr = ["Felix", "Ken", "Tiyo", "Rahardan"];

// for(var i = 0; i < arr.length; i++) {
//     console.log('Mahasiswa ke' + i + ':' + arr[i]);
// }

// pakai arr.length agar tidak menampilkan secara manual, jadi akan otomatis ngecek ke dalam variabel arr ada berapa elemen disana

// array method
// - length
// - join = menggabungkan seluruh isi array dan mengubahnya ke bentuk string
// push, pop, shift, unshift = menambah dan menghapus isi array
// slice, splice = slice untuk mengambil beberapa bagian pada array untuk menjadi array baru kalau splice untuk menambah array bisa di indeks keberapa
// foreach, map = looping untuk array

// 1. join
// var arr = ["Felix", "Ken", "Tiyo", "Rahardan", "Yuda"];
// console.log(arr.join( ));

// 2. push dan pop
// arr.push("Almas"); // menambahkan elemen baru ke elemen terakhir, bisa menambahakan lebih dari 1 elemen
// arr.pop(); // kebalikan dari push, pop untuk menghilangkan elemen terakhir array

// 3. unshift dan shift
// bekerja untuk elemen pertama dari array
// arr.unshift("Almas");
// arr.shift();

// 4. splice
// arr.splice(2, 0, "Almas");
// arr.splice(1, 2, "Afa", "Richie");

// 5. slice
// var arr2 = arr.slice(1,3);
// console.log(arr2.join( )); // yang muncul nanti ken dan tiyo

// 6. foreach
// var angka = [1,2,3,4,5,6,7,8];
// var nama = ["Felix", "Ken", "Icang"];
// jika pakai for
// for(var i = 0; i < angka; i++) {
//     console.log(angka[i]);
// }
// pakai foreach
// angka.forEach(function(e) {
//     console.log(e);
// })

// nama.forEach(function(e) {
//     console.log('Mahasiswa ke-' + i + ':' + e)
// })

// 7. map
// var number = [1,2,3,4,5,6,7,8,9];
// var number2 = number.map(function(e) {
//     return e;
// });
// console.log(number2.join( ));

// 8. sort
// var angka = [1,4,2,6,3,7,9,8,5];
// angka.sort(); 
// urut berdasarkan angka pertama
// angka.sort(function(a,b) {
//     return a-b;
// }) 
// agar urut dengan benar
// console.log(angka.join());

// 9. filter
// - mengembalikan banyak nilai
// var angka = [1,4,2,6,3,7,9,8,5];
// var angka2 = angka.filter(function(e) {
//     return x > 5;
// })
// console.log(angka2.join( ));

// 10. find
// var angka = [1,4,2,6,3,7,9,8,5];
// var angka2 = angka.find(function(e) {
//     return x > 5;
// })
// console.log(angka2);