const on = document.getElementById('on')
const off = document.getElementById('off')
const lampada = document.getElementById('lampada')

function lampBroken() {
    return lampada.src.indexOf('quebrada') > -1
}

function lampadaOn() {
    if (!lampBroken()) {
        lampada.src = './images/ligada.jpg'
    }
}

function lampadaOff() {
    if (!lampBroken()) {
        lampada.src = './images/desligada.jpg'
    }
}

function lampadaBroken() {
    lampada.src = './images/quebrada.jpg'
}

on.addEventListener('click', lampadaOn)

off.addEventListener('click', lampadaOff)

lampada.addEventListener('mouseover', lampadaOn)

lampada.addEventListener('mouseleave', lampadaOff)

lampada.addEventListener('click', lampadaBroken)
