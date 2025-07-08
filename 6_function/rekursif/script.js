// Rekursif
// sebuah fungsi yang memanggil dirinya sendiri

// fungsi
// diawali dari sebuah inputan yang dimasukkan kedalam function yang menghasilkan sebuah output

// fungsi rekursif
// diawali dari sebuah input yang dimasukkan kedalam function, didalam function ada function yang memanggil dirinya sendiri sampai kondisi tertentu sampai menghasilkan sebuah output

// fungsi rekursif harus berakhir dan menghasilkan sebuah nilai

function tes() {
    return tes();
}

tes(); // akan terjadi error karena kondisi tidak berhenti

function tampilAngka(n) {
    console.log(n);
    return tampilAngka(n-1);
}

tampilAngka(10); // akan terus melakukan looping sampai kondisi tidak terpenuhi

// base case
// kondisi akhir dari rekursif yang menghasilkan nilai

function cetakAngka(n) {
    if(n === 0) {
        return;
    }

    console.log(n);
    return cetakAngka(n-1);
}

cetakAngka(10); // akan mencetak sampai n = 0

// faktorial
// 5! = 5 x 4 x 3 x 2 x 1

function faktorial(n) {
    if (n===0) return 1;
    return n * faktorial(n-1);
}

faktorial(5);  // akan menghasilkan angka 120

// rekursif
// semua looping bisa dibuat rekursif, namun looping tidak bisa dibuat rekursif

// implementasi rekursif
// - menggantikan looping
// - fibonacci
// - pencarian dan penelusuran pada struktur data list dan tree
// - bahasa pemrograman yang tidak memiliki looping, contoh = haskell, erlang, prolog