// Kamu akan diberikan sebuah tanggal dalam tiga variabel, 
// yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format tanggal. 
// Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. 
// Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

// Gunakan switch case untuk kasus ini!

// Contoh:

// let hari = 21; let bulan = 1; let tahun = 1945;

// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

//tips gunakan keyword ini di google "conditional switch case javascript"
//dan mulailah membaca dan mencontek di stackoverflow xixixi

let tanggal = 19; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
let bulan = 101 ; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
let tahun = 2001; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)
let txt = '';

switch (true){
    case tanggal >= 1 && tanggal <=31:
        break;
    default:
}

switch (true){
    case bulan === 1:
        txt = 'Januari';
        break;
    case bulan === 2:
        txt = 'Februari';
        break;
    case bulan === 3:
        txt = 'Maret';
        break;
    case bulan === 4:
        txt = 'April';
        break;
    case bulan === 5:
        txt = 'Mei';
        break;
    case bulan === 6:
        txt = 'Juni';
        break;
    case bulan === 7:
        txt = 'Juli';
        break;
    case bulan === 8:
        txt = 'Agustus';
        break;
    case bulan === 9:
        txt = 'September';
        break;
    case bulan === 10:
        txt = 'Oktober';
        break;
    case bulan === 11:
        txt = 'November';
        break;
    case bulan === 12:
        txt = 'Desember';
        break;
    default:
}

switch (true){
    case tahun >= 1900 && tahun <= 2200:
        break;
    default:
}

if (tanggal >= 1 && tanggal <= 31 && tahun >= 1900 && tahun <= 2200 && bulan >= 1 && bulan <= 12) {
    console.log(`${tanggal} ${txt} ${tahun}`);
} else {
    console.log('Masukkan tanggal, bulan, dan tahun (1900-2200) yang valid.');
} 

