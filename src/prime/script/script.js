import footerDate from '../../script/ui.js';
import nav from '../../script/subpage';
import sieve from 'sieve-of-eratosthenes';
import pullAll from 'lodash.pullall';

footerDate();
nav();

document.getElementById('button').addEventListener('click', () => {
  let from = document.getElementById('from').value || 1;
  let to = document.getElementById('to').value || 9999;
  let toArr = sieve(++to);
  let fromArr = sieve(from);
  let dom = ``;
  document.getElementById('from').value = from;
  document.getElementById('to').value = to;
  let resArr = pullAll(toArr, fromArr);
  dom = dom + `result (${resArr.length}) : `;
  resArr.forEach(el => {
    dom = dom + `${el} `;
  });

  document.getElementById('result').innerText = dom;
  document.getElementById('reshero').style.display = 'block';
});
