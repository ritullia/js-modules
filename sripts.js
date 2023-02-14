
import { numberSquare } from "./math.js"
import { getNumbers } from "./multi.js"

document.querySelector('button').addEventListener('click', () => {
    console.log('papsausta')
    let number = numberSquare(document.querySelector('input').value)
    alert(number)
});


let getNumber = getNumbers(2, 256)
console.log(getNumber)


//Sukurkite modulį (t.y. file'ą - multi.js), kuriame būtų viena eksportuota (default) funkcija - multiplikacija. Ji priims du skaičius kaip parametrus ir grąžins šiuos skaičius sudaugintus. Pagrindiniame JS file'e (script.js) importuokite ir panaudokite šį modulį.