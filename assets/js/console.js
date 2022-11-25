// VARIABLES
var btnBack = document.getElementById("btnBack");
var consoleList = document.getElementById("console");
btnBack.addEventListener("click", function () {
    location.href = "index.html";
});
// CLASSES
var User = /** @class */ (function () {
    function User(_credito, _numeroChiamate) {
        this.credito = _credito;
        this.numeroChiamate = _numeroChiamate;
    }
    User.prototype.ricarica = function (num) {
        this.credito = this.credito + num;
    };
    User.prototype.chiamata = function (num) {
        var minutiChiamata = num;
        var costoPerMinuto = 0.20;
        var costoChiamata = minutiChiamata * costoPerMinuto;
        this.credito = this.credito - costoChiamata;
        this.numeroChiamate = this.numeroChiamate + 1;
    };
    User.prototype.numero404 = function () {
        return this.credito;
    };
    User.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    User.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return User;
}());
//Istanziare le classi una volta a ciascuna, indicando i due valori numerici per credito e numerochiamate
// eseguire ricarica/chiamata/ricarica/chiamata
// INSTANCES OF CLASSES
var userPrimo = new User(50, 0);
userPrimo.ricarica(50);
userPrimo.chiamata(20);
userPrimo.ricarica(30);
userPrimo.chiamata(10);
var c1 = userPrimo.getNumeroChiamate();
var userSecondo = new User(5, 0);
userSecondo.ricarica(10);
userSecondo.chiamata(15);
userSecondo.ricarica(50);
userSecondo.chiamata(24);
var c2 = userSecondo.getNumeroChiamate();
var userTerzo = new User(20, 0);
userTerzo.ricarica(10);
userTerzo.chiamata(30);
userTerzo.ricarica(5);
userTerzo.chiamata(20);
var c3 = userTerzo.getNumeroChiamate();
// CONSOLE LOGS
console.log("Primo utente:");
console.log("-------------");
console.log("Credito residuo: ", userPrimo.numero404());
console.log("Numero chiamate: ", userPrimo.getNumeroChiamate());
userPrimo.azzeraChiamate();
console.log("Chiamate azzerate. Nuovo numero chiamate: ", userPrimo.getNumeroChiamate());
console.log("");
console.log("Secondo utente:");
console.log("-------------");
console.log("Credito residuo: ", userSecondo.numero404());
console.log("Numero chiamate: ", userSecondo.getNumeroChiamate());
userSecondo.azzeraChiamate();
console.log("Chiamate azzerate. Nuovo numero chiamate: ", userSecondo.getNumeroChiamate());
console.log("");
console.log("Terzo utente:");
console.log("-------------");
console.log("Credito residuo: ", userTerzo.numero404());
console.log("Numero chiamate: ", userTerzo.getNumeroChiamate());
userTerzo.azzeraChiamate();
console.log("Chiamate azzerate. Nuovo numero chiamate: ", userTerzo.getNumeroChiamate());
// STAMPA IN HTML
consoleList.innerHTML = "\n    <ul class=\"py-3 px-4 m-0 list-unstyled\">\n        <li>Primo utente:</li>\n        <li>-------------</li>\n        <li>Credito residuo: ".concat(userPrimo.numero404(), "</li>\n        <li>Numero chiamate: ").concat(c1, "</li>\n        <li>Chiamate azzerate.<br>\n        Nuovo numero chiamate: ").concat(userPrimo.getNumeroChiamate(), "</li>\n        <br>\n        <li>Secondo utente:</li>\n        <li>-------------</li>\n        <li>Credito residuo: ").concat(userSecondo.numero404(), "</li>\n        <li>Numero chiamate: ").concat(c2, "</li>\n        <li>Chiamate azzerate.<br>\n        Nuovo numero chiamate: ").concat(userSecondo.getNumeroChiamate(), "</li>\n        <br>\n        <li>Terzo utente:</li>\n        <li>-------------</li>\n        <li>Credito residuo: ").concat(userTerzo.numero404(), "</li>\n        <li>Numero chiamate: ").concat(c3, "</li>\n        <li>Chiamate azzerate.<br>\n        Nuovo numero chiamate: ").concat(userTerzo.getNumeroChiamate(), "</li>\n    </ul>\n");
