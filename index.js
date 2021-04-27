const iPeso = document.querySelector("#peso");
const iAltura = document.querySelector("#altura");
const btnCalcular = document.querySelector("button");

(function inicio() {
    btnCalcular.addEventListener('click', btnCalcularOnClick);
})()

function btnCalcularOnClick() {
    let message = hasInvalidateData();
    if (!message) {
        const imc = calcularImc(iPeso.value, iAltura.value);
        message = `Seu IMC é : <strong>${imc} (${faixaDePeso(imc)})</strong>`;
    }
    showAlertMessage(message);
}

function showMessage(message) {
    const dAlert = document.getElementById("alert");
    // dAlert.classList.replace('alert-danger', 'alert-warning')
    dAlert.innerHTML = message;
    dAlert.style.display = "block";
}

function showAlertMessage(message) {
    document.getElementById("alert").classList.replace('alert-warning', 'alert-danger')
    showMessage(message)
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
    if (isNaN(iAltura.value) || iAltura.value.length == 0) message = `<strong>Altura Inválida...</strong>`;

    return message;
}