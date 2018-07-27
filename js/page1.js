const message = "Вы уже использовали confirm в коде js?"
const messageP = "Вы уже использовали prompt в коде js?"
const messageA = "Раньше alert был единственным средством отладки кода JS"

const conf = document.getElementById('confirm')
const prom = document.getElementById('prompt')
const aler = document.getElementById('alert')
const open = document.getElementById('open')
const clos = document.getElementById('close')
const time = document.getElementById('timeout')
const inte = document.getElementById('interval')
const resu = document.getElementById('resume')
const result = document.querySelector('.result')
const text = document.querySelector('.text')
let num = 0;

conf.addEventListener('click', getConfirm)
prom.addEventListener('click', getPrompt)
aler.addEventListener('click', () => alert(messageA))
open.addEventListener('click', () => window.open('https://www.goit.ua/'))
clos.addEventListener('click', () => window.close())
time.addEventListener('click', setMessageTimeout)
inte.addEventListener('click', setMessageInterval)
resu.addEventListener('click', show)


function getConfirm () {
//    return window.confirm(message)
   result.innerHTML = `<p>${message} </p>
   <p>${window.confirm(message) === true ? "Да, использовал, но вряд ли повтрю, т.к. это блокирует работу веб-страницы.": "Нет, не использовал, т.к. говорят что это блокирует работу веб-страницы."}</p>
   `;
}
function getPrompt () {
//    return window.confirm(message)
   result.innerHTML = `<p>${messageP} </p>
   <p>${window.prompt(messageP, "Может быть")}</p>
   `;
}

function setMessageTimeout () {
    window.setTimeout(
        () => result.innerHTML = `Мы ждали 1 секунду этого сообщения и дождались!!!`,
        1000)
    }
function setMessageInterval () {
    window.setInterval(
        () => result.innerHTML = `Каждую секунду браузер добавляет единицу  ${++num}`,
        1000)
    }

    function show () {
        text.style.display = "block";
    }