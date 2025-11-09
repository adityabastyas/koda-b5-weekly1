// Palindrom adalah suatu keadaan apabila suatu string dibaca dari depan maupun belakang akan bernilai sama. Buatlah
// Flowchart untuk menentukan apakah suatu string itu palindrom atau bukan
// Kode javascript untuk menentukan apakah suatu string itu palindrom atau bukan

let hewan = 'katak'; //dipisah jadi ["k", "a", 't', "a" ,"k"] .split('')
//

const namaHewan = (neko) => {
  let k = neko.split(''); //["k", "a", "t", "a", "k"]
  k = k.reverse(); // dibalik isi urutan dalam array
  k = k.join(''); // ini merubah array jadi string

  if (neko === k) {
    console.log(k, 'adalah palindrom');
  } else {
    console.log(k, 'bukan palindrom');
  }
  return k;
};

namaHewan(hewan);
