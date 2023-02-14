
import { numberSquare } from "./math.js"
import getNumbers from "./multi.js"
import appHeader from "./header.js"

document.querySelector('button').addEventListener('click', () => {
    console.log('papsausta')
    let number = numberSquare(document.querySelector('input').value)
    alert(number)
});

appHeader(document.body)
let getNumber = getNumbers(2, 8)
console.log(getNumber)


//Sukurkite modulį (t.y. file'ą - multi.js), kuriame būtų viena eksportuota (default) funkcija - multiplikacija. Ji priims du skaičius kaip parametrus ir grąžins šiuos skaičius sudaugintus. Pagrindiniame JS file'e (script.js) importuokite ir panaudokite šį modulį.
//Sukurkite modulį pavadinimu header.js. Šiame modulyje bus funkcija, kuri paims app kaip argumentą, tačiau nieko negrąžins. Šios funkcijos tikslas - į app.innerHTML pridėti (t.y. +=) header'io kodą (pasirašykite standartinį HTML su inline CSS). Šį modulį importuokite į pagrindinį file'ą ir paduokite app, kuris bus document.body. Taip, puslapio viršuje turėtų atsivaizduoti header'is, kuris importuotas iš header.js.
//Įkelti šitą kodą į github repositoriją, sukurti github Pages ir įkelti link'ą į chat'ą