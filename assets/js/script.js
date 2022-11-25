// VARIABLES
var btnConsole = document.getElementById("btnConsole");
var spanCredito1 = document.getElementById("credito1");
var spanCredito2 = document.getElementById("credito2");
var spanCredito3 = document.getElementById("credito3");
var spanChiamate1 = document.getElementById("chiamate1");
var spanChiamate2 = document.getElementById("chiamate2");
var spanChiamate3 = document.getElementById("chiamate3");
var btnAzzera1 = document.getElementById("azzera1");
var btnAzzera2 = document.getElementById("azzera2");
var btnAzzera3 = document.getElementById("azzera3");
var azzerato1 = document.getElementById("azzerato1");
var azzerato2 = document.getElementById("azzerato2");
var azzerato3 = document.getElementById("azzerato3");
// BUTTONS
btnConsole.addEventListener("click", function () {
    location.href = "console.html";
});
btnAzzera1.addEventListener("click", function () {
    userFirst.azzeraChiamate();
    spanChiamate1.innerHTML = "".concat(userFirst.getNumeroChiamate());
    azzerato1.classList.remove("d-none");
    azzerato1.classList.add("d-block");
    setTimeout(function () {
        azzerato1.classList.remove("d-block");
        azzerato1.classList.add("d-none");
    }, 2000);
});
btnAzzera2.addEventListener("click", function () {
    userSecond.azzeraChiamate();
    spanChiamate2.innerHTML = "".concat(userSecond.getNumeroChiamate());
    azzerato2.classList.remove("d-none");
    azzerato2.classList.add("d-block");
    setTimeout(function () {
        azzerato2.classList.remove("d-block");
        azzerato2.classList.add("d-none");
    }, 2000);
});
btnAzzera3.addEventListener("click", function () {
    userThird.azzeraChiamate();
    spanChiamate3.innerHTML = "".concat(userThird.getNumeroChiamate());
    azzerato3.classList.remove("d-none");
    azzerato3.classList.add("d-block");
    setTimeout(function () {
        azzerato3.classList.remove("d-block");
        azzerato3.classList.add("d-none");
    }, 2000);
});
// CLASSES
var Users = /** @class */ (function () {
    function Users(_credito, _numeroChiamate) {
        this.credito = _credito;
        this.numeroChiamate = _numeroChiamate;
    }
    Users.prototype.ricarica = function (num) {
        this.credito = this.credito + num;
    };
    Users.prototype.chiamata = function (num) {
        var minutiChiamata = num;
        var costoPerMinuto = 0.20;
        var costoChiamata = minutiChiamata * costoPerMinuto;
        this.credito = this.credito - costoChiamata;
        this.numeroChiamate = this.numeroChiamate + 1;
    };
    Users.prototype.numero404 = function () {
        return this.credito;
    };
    Users.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    Users.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return Users;
}());
// INSTANCES OF CLASSES
var userFirst = new Users(50, 0);
userFirst.ricarica(50);
userFirst.chiamata(20);
userFirst.ricarica(30);
userFirst.chiamata(10);
spanCredito1.innerHTML = "".concat(userFirst.numero404());
spanChiamate1.innerHTML = "".concat(userFirst.getNumeroChiamate());
var userSecond = new Users(5, 0);
userSecond.ricarica(10);
userSecond.chiamata(15);
userSecond.ricarica(50);
userSecond.chiamata(24);
spanCredito2.innerHTML = "".concat(userSecond.numero404());
spanChiamate2.innerHTML = "".concat(userSecond.getNumeroChiamate());
var userThird = new Users(20, 0);
userThird.ricarica(10);
userThird.chiamata(30);
userThird.ricarica(5);
userThird.chiamata(20);
spanCredito3.innerHTML = "".concat(userThird.numero404());
spanChiamate3.innerHTML = "".concat(userThird.getNumeroChiamate());
// CONSOLE LOGS
console.log("Primo utente:");
console.log("-------------");
console.log("Credito residuo: ", userFirst.numero404());
console.log("Numero chiamate: ", userFirst.getNumeroChiamate());
userFirst.azzeraChiamate();
console.log("Chiamate azzerate. Nuovo numero chiamate: ", userFirst.getNumeroChiamate());
console.log("");
console.log("Secondo utente:");
console.log("-------------");
console.log("Credito residuo: ", userSecond.numero404());
console.log("Numero chiamate: ", userSecond.getNumeroChiamate());
userSecond.azzeraChiamate();
console.log("Chiamate azzerate. Nuovo numero chiamate: ", userSecond.getNumeroChiamate());
console.log("");
console.log("Terzo utente:");
console.log("-------------");
console.log("Credito residuo: ", userThird.numero404());
console.log("Numero chiamate: ", userThird.getNumeroChiamate());
userThird.azzeraChiamate();
console.log("Chiamate azzerate. Nuovo numero chiamate: ", userThird.getNumeroChiamate());