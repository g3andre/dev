const iPeso = document.querySelector("#peso");
const iAltura = document.querySelector("#altura");
const btnCalcular = document.querySelector("button");
const dAlert = document.getElementById("alert");
let timeToIncrement;

(function inicio() {
    btnCalcular.addEventListener('click', btnCalcularOnClick);
    counter();
})()

function btnCalcularOnClick() {
    dAlert.style.display = 'none';
    let message = hasInvalidateData();
    if (!message) {
        const imc = calcularImc(iPeso.value, iAltura.value);
        message = `Seu IMC é : <strong>${imc} (${faixaDePeso(imc)})</strong>`;
        showMessage(message);
        return;
    }
    showAlertMessage(message);
}

function showMessage(message) {
    dAlert.classList.replace('alert-danger', 'alert-warning')
    dAlert.innerHTML = message;
    dAlert.style.display = "block";
}

function showAlertMessage(message) {
    dAlert.classList.replace('alert-warning', 'alert-danger')
    dAlert.innerHTML = message;
    dAlert.style.display = "block";
}


function calcularImc(peso, altura) {
    if (!isNaN(peso) && !isNaN(altura)) {
        return (peso / (altura * altura)).toFixed(2);
    }

    return null;
}

function faixaDePeso(peso) {
    if (isNaN(peso)) return null;

    let faixa;

    faixa = peso > 40 ? "Obesidade grau 3" : faixa;
    faixa = peso < 39.9 ? "Obesidade grau 2" : faixa;
    faixa = peso < 34.9 ? "Obesidade grau 1" : faixa;
    faixa = peso < 29.9 ? "Sobrepeso" : faixa;
    faixa = peso < 24.9 ? "Peso normal" : faixa;
    faixa = peso < 18.5 ? "Abaixo do Peso" : faixa;

    return faixa;
}

function hasInvalidateData() {

    if (!isNaN(iPeso.value) && !isNaN(iAltura.value) && iPeso.value.length != 0 && iAltura.value.length != 0) return false;

    let message;

    if (isNaN(iPeso.value) || iPeso.value.length == 0) message = `<strong>Peso Inválido...</strong>`;
    else if (isNaN(iAltura.value) || iAltura.value.length == 0) message = `<strong>Altura Inválida...</strong>`;

    return message;
}

function counter() {
    const timer = document.querySelector('#timer');
    const timeUpdate = document.querySelector('#time-update');
    const hour = document.querySelector('#hr');
    const minute = document.querySelector('#min');
    const second = document.querySelector('#sec');
    const start = document.querySelector('#start');
    const stop = document.querySelector('#stop');
    const reset = document.querySelector('#reset');
    timeToIncrement = new Date(60 * 60 * 3 * 1000);

    let interval;
    updateContent(timeToIncrement, timeUpdate);

    start.addEventListener('click', () => {
        if (!interval) {
            interval = iniciaInterval(timeToIncrement, timeUpdate);
            timer.classList.remove('text-danger');
        }
    });
    stop.addEventListener('click', () => {
        if (interval) {
            interval ? clearInterval(interval) : null
            interval = null;
            updateContent(timeToIncrement, timeUpdate);
            timer.classList.toggle('text-danger');
        }
    });
    reset.addEventListener('click', () => {
        timeToIncrement = new Date(60 * 60 * 3 * 1000);
        interval ? clearInterval(interval) : null;
        interval = null;
        updateContent(timeToIncrement, timeUpdate);
        timer.classList.remove('text-danger');
        /* hour.innerText = '00';
        minute.innerText = '00';
        second.innerText = '00'; */
    });

}

function iniciaInterval(date, element) {
    return setInterval(() => {
        date.setSeconds(date.getSeconds() + 1);
        updateContent(timeToIncrement, element);
    }, 1000);
}

function updateContent(value, element) {
    element.innerText = value.toLocaleTimeString('pt-BR');
}


function initInterval(hour, minute, second) {
    return setInterval(() => {
        if (second.innerText == 59) {
            second.innerText = '00';
            minute.innerText = minute.innerText < 9 ? `0${minute.innerText*1+1}` : minute.innerText * 1 + 1;
        } else {
            second.innerText = second.innerText < 9 ? `0${second.innerText*1 + 1}` : second.innerText * 1 + 1;
        }

        if (minute.innerText == 60) {
            minute.innerText = '00';
            hour.innerText = hour.innerText < 9 ? `0${hour.innerText*1+1}` : hour.innerText * 1 + 1;
        }

    }, 1000);
}