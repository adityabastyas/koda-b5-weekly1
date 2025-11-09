//Buatlah fungsi yang menampilkan tabel perkalian. Fungsi tersebut menerima 1 parameter berupa besar dari tabel perkalian. Tabel perkalian berisikan hasil perkalian antara angka di awal kolom dan awal baris. Tabel perkalian ini dimulai dari angka 1.
// Contoh:
// genMultiplicationTable(5)
// 1   2   3   4   5
// 2   4   6   8   10
// 3   6   9   12  15
// 4   8   12  16  20
// 5   10  15  20  25

const genMultiplicationTable = (kali) => {
  for (let i = 1; i <= kali; i++) {
    let baris = '';
    for (let j = 1; j <= kali; j++) {
      baris = baris + i * j + ' ';
    }
    console.log(baris);
  }
};

genMultiplicationTable(5);
