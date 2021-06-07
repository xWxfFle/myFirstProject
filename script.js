'use strict';
let usersCard = [];
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function scanning() {
  for (let i = 0; i < 3729; i++) {
    document.querySelector(
      '#scanning'
    ).textContent = `Now scanning ${i} of 3728 databases... 0 matches found`;
    await sleep(1);
    if (i == 3728) {
      document.querySelector('#btn-ok').classList.remove('hidden');
    }
  }
}
document.querySelector('.submit').addEventListener('click', function () {
  const zipCode = document.querySelector('#zip-code').value;
  const number = document.querySelector('#number').value;
  const expDate = document.querySelector('#exp-date').value;

  if (zipCode == '' || number == '' || expDate == '') {
    alert('Пожалуйста, укажите данные полностью');
  } else {
    usersCard.push(number, expDate, zipCode);
    document.querySelector('.screen1').classList.add('hidden');
    document.querySelector('.screen2').classList.remove('hidden');
    scanning();
  }
});

document.querySelector('#btn-ok').addEventListener('click', function () {
  document.querySelector('.screen2').classList.add('hidden');
  document.querySelector('.screen3').classList.remove('hidden');
});
