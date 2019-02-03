import footerDate from '../../script/ui.js'
import nav from '../../script/subpage'
import sieve from 'sieve-of-eratosthenes'
import pullAll from 'lodash.pullall'
import takeRightWhile from 'lodash.takerightwhile'

(footerDate)();
(nav)()

document.getElementById('button').addEventListener('click', () => {
    let from = document.getElementById('from').value || 2
    let to = document.getElementById('to').value || 100
    let toArr = sieve(++to)
    let fromArr = sieve(from)
    let dom = ``
    document.getElementById('from').value = document.getElementById('from').value || 2
    document.getElementById('to').value = document.getElementById('to').value || 100
    let resArr = pullAll(toArr,fromArr)
    dom = dom + `result (${resArr.length}) : `
    resArr.forEach(el => {
        dom = dom + `${el} `
    })
    document.getElementById('result').innerText = dom
    document.getElementById('reshero').style.display = 'block'
    /*document.getElementById('input').style.display = 'none'
    document.getElementById('hero-under-title').style.display = 'none'*/
})