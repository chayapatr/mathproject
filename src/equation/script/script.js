import footerDate from '../../script/ui';
import nav from '../../script/subpage';
import algebra from 'algebra.js';

footerDate();
nav();

document.getElementById('button').addEventListener('click', () => {
  let input = document.getElementById('input').value || 'x=0';
  document.getElementById('input').value = input;
  let split = input.split('=');
  let alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];
  let variable = [];
  alphabet.forEach(el => {
    if (input.search(el) !== -1) variable.push(el);
  });
  let expr = split.map(el => algebra.parse(el));
  let eq =
    expr.length === 1
      ? new algebra.Equation(...expr, 0)
      : new algebra.Equation(...expr);

  let answer = variable.map(el => [el, eq.solveFor(el)]);
  let outputArr = answer.map(el => `${el[0]} = ${el[1].toString()}`);
  let text = `answer for ${eq.toString()}<br />----------------------<br />`;
  outputArr.forEach(el => (text = text + el + '<br />'));
  document.getElementById('reshero').style.display = 'block';
  document.getElementById('result').innerHTML = text;
});
