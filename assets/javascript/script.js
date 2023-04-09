const BB = document.getElementById('weight');
const TB = document.getElementById('height');
const btn = document.getElementById('submit');
const result = document.querySelector('#result');

btn.addEventListener('click', function() {
   const hasil = BB.value / ( TB.value / 100 ) ** 2;

   if (hasil <= 18.5) {
      kategori = "Berat badan kurang";
   } else if ( (hasil <= 24.9) && (hasil > 18.5) ) {
      kategori = "Berat badan normal";
   } else if ( (hasil <= 29.9) && (hasil >= 25) ) {
      kategori = "Kegemukan";
   } else if (hasil >= 30) {
      kategori = "Obesitas";
   }
   result.textContent = `Your BMI is ${hasil} which means your are ${kategori}`;
});



