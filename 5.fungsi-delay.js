// Buat sebuah fungsi yang digunakan untuk menampilkan angka 1 sampai n dengan delay antar print selama 1 detik!
const angka = [1, 2, 3, 4, 5];

const delay = (delaynya) => {
  for (let i = 0; i < delaynya.length; i++) {
    setTimeout(() => {
      console.log(delaynya[i]);
    }, 1000 * i);
  }
};

delay(angka);

const delay2 = (n) => {
  for (let i = 1; i <= n; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000 * (i - 1));
  }
};

delay2(5);
