import footerDate from '../../script/ui'
import nav from '../../script/subpage'

(footerDate)();
(nav)()

document.getElementById('button').addEventListener('click', () => {
    document.getElementById('reshero').style.display = 'block'
})