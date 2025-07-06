// parameter
// variabel yang ditulis di dalam kurung pada saat function dibuat. Digunakan untuk menampung nilai yang dikirimkan saat function dipanggil.

// argument
// nilai yang dikirmkan ke parameter saat fungsi dipanggil

function tambah(a, b) {
    return a + b;
}

var hasil = tambah(5)
alert(hasil);

// var a = parseInt(prompt('masukkan angka 1: '));
// var b = parseInt(prompt('masukkan angka 2: '));
// var hasil = tambah(a, b)

function kali(a,b) {
    return a * b;
}

var hasil = kali(tambah(1,2), tambah(3,4));
alert(hasil);

// arguments
// array yang berisi nilai yang dikirmkan saat fungsi dipanggil

function tambah(){
    var hasil = 0;
    for(var i = 0; i < arguments.length; i++) {
        hasil += arguments[i];
    }
    return hasil;
}

var coba = tambah(1,2,3);
console.log(coba);