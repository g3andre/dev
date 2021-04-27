const iPeso = document.querySelector("#peso");
const iAltura = document.querySelector("#altura");
const btnCalcular = document.querySelector("button");

(function inicio() {
    btnCalcular.addEventListener('click', btnCalcularOnClick);
})()

function btnCalcularOnClick() {    
    let message = hasInvalidateData();
    if( !message ){
        const imc = calcularImc(iPeso.value, iAltura.value);
        message = `Seu IMC é : <strong>${imc}</strong>`;
    }
    showMessage(message);
}

function showMessage(message) {
    const dAlert = document.getElementById("alert");
    dAlert.innerHTML = message;
    dAlert.style.display = "block";
}


function calcularImc(peso, altura) {
    if (!isNaN(peso) && !isNaN(altura)) {
        return peso * altura;
    }

    return null;
}

function hasInvalidateData() {
    
    if( !isNaN(iPeso.value) && !isNaN(iAltura.value) ) return false;

    let message;

    if(isNaN(iPeso.value)) message = `<strong>Peso Inválido...</strong>`;
    if(isNaN(iAltura.value)) message = `<strong>Altura Inválida...</strong>`;

    return message;
}