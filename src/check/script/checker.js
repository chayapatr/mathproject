/* import Module from './checker.c';
const Instance = Module();

Instance.then(()=>{
    console.log(Instance._prime(2));
}); */

let isPrime = input => {
    let num = +input
    if(num % 1 !== 0 || num <= 0) return false
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false;
        console.log(num)
    return num !== 1 && num !== 0;
}

export default isPrime