// REFACTORING
// sebuah proses yang dilakukan untuk mengubah kode program yang sudah ada menjadi lebih baik, tanpa mengubah fungsionalitasnya

// kenapa melakukan refactoring?
// 1. readability = kode lebih mudah dibaca
// 2. DRY (Don't Repeat Yourself) = mengurangi duplikasi kode
// 3. Testablility = kode lebih mudah untuk di-test
// 4. Performance = kode lebih efisien, contoh: mengurangi penggunaan loop yang tidak perlu
// 5. Maintainability = kode lebih mudah untuk di-maintain, contoh: mengurangi kompleksitas kode

// refactoring sederhana
function jumlahVolumeDuaKubus(a, b) {
    return (a * a * a) + (b * b * b);
}

alert(jumlahVolumeDuaKubus(8, 3));

