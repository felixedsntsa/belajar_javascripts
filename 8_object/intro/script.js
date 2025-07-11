// Object
// - merupakan kumpulan nilai tetapi tidak memiliki indeks tetapi memiliki nama
// - object adalah array, tetapi lebih sakti

// konsep object dalam bahasa pemrograman lain
// - php = associative array
// - python = dictionaries
// - c = hash tables
// - java = hash maps
// - ruby dan pearl = hashes

// kenapa harus menggunakan object

// satu satu
// var namaMhs = "Felix Edna Santosa";
// var umurMhs = 20;
// var lulus = false;
// var IPSemester = [3.82,3.78,3.91,4];
// function IPKumulatif(IPSemester) {
//     var total = 0;
//     for(var i = 0; i < IPSemester.length; i++) {
//         total =+ IPSemester[i];
//     }
//     return total;
// }

// disimpan dalam array
// var mahasiswa = ['Felix Edna Santosa',20,false,[3.82,3.78,3.91,4]];
// function IPKumulatif(IPSemester) {
//     var total = 0;
//     for(var i = 0; i < IPSemester.length; i++) {
//         total =+ IPSemester[i];
//     }
//     return total;
// }
// IPKumulatif(mahasiswa[3]);

// disimpan dalam object
var mahasiswa = {
    nama : 'Felix Edna Santosa',
    lulus : false,
    IpSemester : [3.82,3.78,3.91,4],
    IPKumulatif : function() {
        var total = 0;
        var ips = this.IpSemester;
        for(var i = 0; i < ips.length; i++) {
            total += ips[i];
        }
        return total;
    }
}