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
var btnInvia1 = document.getElementById("invia1");
var btnInvia2 = document.getElementById("invia2");
var btnInvia3 = document.getElementById("invia3");
var fieldAggiungi1 = document.getElementById("aggiungi1");
var fieldAggiungi2 = document.getElementById("aggiungi2");
var fieldAggiungi3 = document.getElementById("aggiungi3");
var add1 = document.getElementById("add1");
var add2 = document.getElementById("add2");
var add3 = document.getElementById("add3");
var btnChiama1 = document.getElementById("chiama1");
var btnChiama2 = document.getElementById("chiama2");
var btnChiama3 = document.getElementById("chiama3");
var fieldChiamata1 = document.getElementById("chiamata1");
var fieldChiamata2 = document.getElementById("chiamata2");
var fieldChiamata3 = document.getElementById("chiamata3");
var calling1 = document.getElementById("calling1");
var calling2 = document.getElementById("calling2");
var calling3 = document.getElementById("calling3");
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
btnInvia1.addEventListener("click", function () {
    userFirst.ricarica(Number(fieldAggiungi1.value));
    spanCredito1.innerHTML = "".concat(userFirst.numero404());
    add1.classList.remove("d-none");
    add1.classList.add("d-block");
    setTimeout(function () {
        add1.classList.remove("d-block");
        add1.classList.add("d-none");
        fieldAggiungi1.value = "";
    }, 2000);
});
btnInvia2.addEventListener("click", function () {
    userSecond.ricarica(Number(fieldAggiungi2.value));
    spanCredito2.innerHTML = "".concat(userSecond.numero404());
    add2.classList.remove("d-none");
    add2.classList.add("d-block");
    setTimeout(function () {
        add2.classList.remove("d-block");
        add2.classList.add("d-none");
        fieldAggiungi2.value = "";
    }, 2000);
});
btnInvia3.addEventListener("click", function () {
    userThird.ricarica(Number(fieldAggiungi3.value));
    spanCredito3.innerHTML = "".concat(userThird.numero404());
    add3.classList.remove("d-none");
    add3.classList.add("d-block");
    setTimeout(function () {
        add3.classList.remove("d-block");
        add3.classList.add("d-none");
        fieldAggiungi3.value = "";
    }, 2000);
});
btnChiama1.addEventListener("click", function () {
    userFirst.chiamata(Number(fieldChiamata1.value));
    spanChiamate1.innerHTML = "".concat(userFirst.getNumeroChiamate());
    calling1.classList.remove("d-none");
    calling1.classList.add("d-block");
    setTimeout(function () {
        calling1.classList.remove("d-block");
        calling1.classList.add("d-none");
        fieldChiamata1.value = "";
        spanCredito1.innerHTML = "".concat(userFirst.numero404());
    }, 2000);
});
btnChiama2.addEventListener("click", function () {
    userSecond.chiamata(Number(fieldChiamata2.value));
    spanChiamate1.innerHTML = "".concat(userSecond.getNumeroChiamate());
    calling2.classList.remove("d-none");
    calling2.classList.add("d-block");
    setTimeout(function () {
        calling2.classList.remove("d-block");
        calling2.classList.add("d-none");
        fieldChiamata2.value = "";
        spanCredito2.innerHTML = "".concat(userSecond.numero404());
    }, 2000);
});
btnChiama3.addEventListener("click", function () {
    userThird.chiamata(Number(fieldChiamata3.value));
    spanChiamate3.innerHTML = "".concat(userThird.getNumeroChiamate());
    calling3.classList.remove("d-none");
    calling3.classList.add("d-block");
    setTimeout(function () {
        calling3.classList.remove("d-block");
        calling3.classList.add("d-none");
        fieldChiamata3.value = "";
        spanCredito3.innerHTML = "".concat(userThird.numero404());
    }, 2000);
});
