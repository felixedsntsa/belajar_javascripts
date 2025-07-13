// Pengelolaan Angkot
// sopir
// trayek
// kas
// penumpang => penumpang naik dan penumpang turun (ada proses membayar)

// membuat object angkot
function Angkot(sopir, trayek, penumpang, kas) {
    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;

    // penumpang naik
    this.penumpangNaik = function(namaPenumpang) {
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    }

    // penumpang turun
    this.penumpangTurun = function(namaPenumpang, bayar) {
        // angkot kosong
        if(this.penumpang.length === 0) {
            alert('Angkot masih kosong');
            return false;
        }
        // angkot ada penumpang
        for(var i = 0; i < this.penumpang.length; i++) {
            if(this.penumpang[i] == namaPenumpang) {
                this.penumpang[i] = undefined;
                this.kas += bayar;
                return this.penumpang;
            }
        }
    }
}

var angkot1 = new Angkot('Felix', ['Mangli', 'Patrang'], [], 0);
var angkot2 = new Angkot('Ken', ['Arjasa', 'Tawangalun'], [], 0);
