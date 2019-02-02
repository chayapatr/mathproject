import footerDate from '../../script/ui.js'
import nav from '../../script/subpage'
import sieve from 'sieve-of-eratosthenes'
(footerDate)();
(nav)()

document.getElementById('button').addEventListener('click', () => {
    let from = document.getElementById('from').value || 3
    let to = document.getElementById('to').value || 3
    document.getElementById('from').value = document.getElementById('from').value || 2
    document.getElementById('to').value = document.getElementById('to').value || 3
    let array = sieve(++to)
    let dom = ''
    array.forEach(el => {
        dom = dom + `${el} `
    })
    document.getElementById('result').innerText = dom
    document.getElementById('reshero').style.display = 'block'
})