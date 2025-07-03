// ketika bekerja dengan function akan ada input(memasukkan bahan / material ke dalam function) => function(menjalankan hal / tugas) => output(menghasilkan sesuatu)
// function yang baik adalah function yang menjalankan satu hal / tugas saja (spesifik)

// cth kasus tanpa function
// var a = 8;
// var b = 3;
// var volumeA;
// var volumeB;
// var total;

// volumeA = a * a * a;
// volumeB = b * b * b;

// total = volumeA + volumeB;
// console.log(total)

// cth dengan function
function jumlahVolumeDuaKubus(a, b){
    var jumlahVolume;
    var volumeA = a ** 3;
    var volumeB = b ** 3;
    jumlahVolume = volumeA + volumeB;
    return jumlahVolume;
}

alert(jumlahVolumeDuaKubus(3,8));