//Tuliskan program konversi suhu antara Celcius dan Fahrenheit dengan menggunakan javascript!
// Fahrenheit ke Celsius     rumus (x -32) * 5/9
//celcius ke farenhesit      rumus (x * 9/5) + 32

const suhu = 50;

const toCelcius = (x) => {
  return ((x - 32) * 5) / 9;
};
console.log('Farenheit to Celcius', toCelcius(suhu));

const toFarenheit = (x) => {
  return (x * 9) / 5 + 32;
};
console.log('Celcius to Farenheit', toFarenheit(suhu));
