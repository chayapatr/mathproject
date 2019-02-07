import footerDate from '../../script/ui';
import nav from '../../script/subpage';
import isPrime from './checker';
import primeFactorization from './factor';

footerDate();
nav();

document.getElementById('button').addEventListener('click', () => {
  let input = document.getElementById('input').value || 0;
  let result = document.getElementById('result');
  let prime, text;
  document.getElementById('input').value = input;
  prime = isPrime(input);
  result.classList.remove('shas-text-success', 'has-text-danger');
  if (prime) {
    result.classList.add('has-text-success');
    text = `${input} is a prime number`;
  } else {
    result.classList.add('has-text-danger');
    if (input % 1 === 0 && input !== 0 && input !== 1 && input >= 0) {
      text = `${input} is not a prime number (`;
      primeFactorization(input).forEach(el => {
        text = text + `${el}*`;
      });
      text = text.substring(0, text.length - 1) + `)`;
    } else {
      text = `${input} is not a prime number`;
    }
  }
  document.getElementById('result').innerText = text;
});
