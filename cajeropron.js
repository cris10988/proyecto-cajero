const accounts = [
    { nombre: "Mali", password: "5025", saldo: 200 },
    { nombre: "Sofia", password: "3026", saldo: 290 },
    { nombre: "Andres", password: "6037", saldo: 690 },
];

const MensajeError = document.querySelector("#mensaje-error");
let currentUser = null;

function Usuario() {
    const username = document.getElementById('user').value;
    const password = document.getElementById('password').value;

    const account = accounts.find(acc => acc.nombre === username && acc.password === password);
    if (account) {
        currentUser = account;
        MensajeError.textContent = "";
        console.log("Ingresar");
    } else {
        currentUser = null;
        MensajeError.textContent = "Usuario o contraseña incorrectos.";
    }
}

const buttonLogin = document.getElementById("loginbutton");
buttonLogin.addEventListener("click", Usuario);

function ver_saldo() {
    if (currentUser) {
        console.log(`Su saldo es ${currentUser.saldo}`);
    } else {
        alert("Por favor inicie sesión.");
    }
}

const buttonSaldo = document.getElementById("ver_saldo");
buttonSaldo.addEventListener("click", ver_saldo);

function extraer() {
    const withdraw = parseFloat(document.getElementById("dinero").value);
    if (isNaN(withdraw) || withdraw <= 0) {
        alert("Por favor ingrese un monto válido");
    } else if (!currentUser) {
        alert("Por favor inicie sesión.");
    } else if (withdraw > currentUser.saldo) {
        alert("No tiene saldo suficiente para realizar el retiro");
    } else if ((currentUser.saldo - withdraw) <= 10 || currentUser.saldo === withdraw) {
        alert("El retiro no cumple con la regla de negocio");
    } else {
        currentUser.saldo -= withdraw;
        console.log(`Su saldo es ${currentUser.saldo}`);
    }
}

const buttonExtraer = document.getElementById("Extraer");
buttonExtraer.addEventListener("click", extraer);

function deposito() {
    const deposit = parseFloat(document.getElementById("dinero").value);
    if (isNaN(deposit) || deposit <= 0) {
        alert("Por favor ingrese un monto válido");
    } else if (!currentUser) {
        alert("Por favor inicie sesión.");
    } else {
        currentUser.saldo += deposit;
        console.log(`Su saldo es ${currentUser.saldo}`);
    }
}

const buttonDeposito = document.getElementById("Deposito");
buttonDeposito.addEventListener("click", deposito);

