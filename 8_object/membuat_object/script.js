// Membuat Object
// Object literal
// Function declaration
// constructor function (keyword new)
// Object.create();

// object literal
var mhs1 = {
    nama : 'Felix',
    nim : '232410101050',
    email : 'felixednasantosa@gmail.com',
    jurusan : 'Sistem Informasi'
};

var mhs2 = {
    nama : 'Tiyok',
    nim : '232410101090',
    email : 'ahimsajenar@gmail.com',
    jurusan : 'Sistem Informasi'
};

// function declaration
function buatObjectMahasiswa(nama, nim, email, jurusan) {
    var mhs = {};
    mhs.nama = nama;
    mhs.nim = nim;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}

var mhs3 = buatObjectMahasiswa('Ken', '232410101062', 'ken@gmail.com', 'Sistem Informasi');

// constructor (function khusus utuk membuat object)
function Mahasiswa(nama, nim, email, jurusan) {
    this.nama = nama;
    this.nim = nim;
    this.email = email;
    this.jurusan = jurusan;
}

var mhs4 = new Mahasiswa('Ahmad', '232410101027', 'ahmad@gmail.com', 'Sistem Informasi');