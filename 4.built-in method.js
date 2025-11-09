// Jelaskan 5 buah built-in method (selain map, filter, push, some, max, min dan concat) dan berikan contoh penggunaannya! Yang dijelaskan (dengan komentar):
// Input dan Output
// Kegunaan

//satu
//.reduce()
const cart = [
  { name: 'Nasi Goreng', price: 15000 },
  { name: 'Teh Manis', price: 5000 },
  { name: 'Ayam Geprek', price: 20000 },
];
// Input  : array of object (cart)
// Output : angka total harga
// Kegunaan : Menjumlahkan semua price dari setiap item di array
const total2 = cart.reduce((acc, item) => {
  // acc = nilai yang menampung total (mulai dari 0)
  // item = item yang sedang diproses pada array
  return acc + item.price; // tambahkan harga ke total
}, 0); // nilai awal acc adalah 0

console.log(total2); // Output: 40000

//cara manual .reduce() pakai forloop
// totalHarga()
// Input  : array of object (cart)
// Output : angka total harga
// Kegunaan : Menjumlahkan price secara manual tanpa reduce

const totalHarga = (masuk) => {
  let harga = 0; // tempat menampung total
  for (let i = 0; i < masuk.length; i++) {
    harga = harga + masuk[i].price; // tambahkan harga item ke total
  }
  console.log(harga); // Output: 40000
};

totalHarga(cart);

///////////////////////////
//dua
// forEach()
const nama = ['Ali', 'Budi', 'Citra', 'Deni'];
// Input  : array berisi string nama
// Output : tidak mengembalikan nilai (undefined), hanya menjalankan kode
// Kegunaan : Menjalankan sebuah aksi untuk setiap item di dalam array
nama.forEach((item) => {
  // item = masing-masing nama di array, akan berubah setiap iterasi
  let k = `halo ${item}`; // membuat kalimat sapaan
  console.log(k); // menampilkan sapaan
});

//verti yang pakai loop
for (let i = 0; i < nama.length; i++) {
  // i = index array, mulai dari 0 sampai nama.length - 1
  let k = nama[i]; // ambil nama berdasarkan index
  console.log(`halo ${k}`); // tampilkan sapaan
}

////////////////
//tiga
// .find()
const products = [
  { id: 1, name: 'Keyboard' },
  { id: 2, name: 'Mouse' },
  { id: 3, name: 'Monitor' },
];
// Input  : array of object (products)
// Output : object pertama yang memenuhi kondisi
// Kegunaan: Mencari **SATU** data yang cocok dengan syarat
const mencari = products.find((item) => {
  // item = setiap object dalam array products
  return item.id === 3; // kondisi pencarian: id harus 3
});
console.log(mencari); // Output: { id: 3, name: 'Monitor' }

//versi pakai for loop
let g = null; // tempat menampung hasil
for (let i = 0; i < products.length; i++) {
  if (products[i].id === 3) {
    // cek kondisi
    g = products[i]; // simpan object yang cocok
    console.log(g); // tampilkan hasil
    break; // stop loop karena sudah ketemu
  }
}

//////
//empat
// .filter()

const productz = [
  { name: 'Keyboard', price: 10000 },
  { name: 'Mouse', price: 5000 },
  { name: 'Monitor', price: 30000 },
  { name: 'Speaker', price: 8000 },
];

// Input  : array of object (products)
// Output : array baru berisi item yang memenuhi kondisi
// Kegunaan: Mengambil **banyak data** yang cocok dengan syarat

const delapan = productz.filter((item) => {
  return item.price > 8000; // ambil produk yang harganya lebih dari 8000
});
console.log(delapan); //menampilkan hasil cetak di terminal

//pakai forloop
let koko = []; // array untuk menampung hasil

for (let i = 0; i < productz.length; i++) {
  if (productz[i].price > 8000) {
    // cek syarat
    koko.push(productz[i]); // masukkan ke array hasil
  }
}

console.log(koko); //menampilkan hasil cetak di terminal

///////
///lima
// .every()
const campuran = [2, 3, 6];
// Input  : array (campuran)
// Output : true / false
// Kegunaan: Mengecek apakah **SEMUA** item dalam array memenuhi kondisi
const semuaGenap2 = campuran.every((item) => {
  return item % 2 === 0; // cek apakah angka genap semua?
});
console.log(semuaGenap2); // false, karena ada 1 yang tidak genap

//versi yang for loop
let yuhu = true; // asumsi awal: semua genap

for (let i = 0; i < campuran.length; i++) {
  if (campuran[i] % 2 !== 0) {
    // cek jika ada yang TIDAK genap
    yuhu = false; // tandai gagal
    break; // hentikan loop
  }
}

console.log(yuhu); // hasilnya false
