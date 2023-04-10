const BB = document.getElementById('weight');
const TB = document.getElementById('height');
const formBMI = document.querySelector('#form-bmi');
const bmi = document.getElementById('result-bmi');
const katg = document.getElementById('result-katg');

formBMI.addEventListener('submit', (event) => {
   event.preventDefault();
   const hasil = (BB.value / ( TB.value / 100 ) ** 2).toFixed(1);
   
   if (hasil <= 18.5) {
      kategori = "Berat badan kurang";
      katg.style.color = "blue";
   } else if ( (hasil <= 24.9) && (hasil > 18.5) ) {
      kategori = "Berat badan normal";
      katg.style.color = "green";
   } else if ( (hasil <= 29.9) && (hasil >= 25) ) {
      kategori = "Kegemukan";
      katg.style.color = "orangered";
   } else if (hasil >= 30) {
      kategori = "Obesitas";
      katg.style.color = "red";
   }
   bmi.textContent = `${hasil}`;
   katg.textContent = `${kategori}`;

   formBMI.reset();
});



