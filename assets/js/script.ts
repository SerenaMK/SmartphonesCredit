// VARIABLES
let btnConsole = document.getElementById("btnConsole") as HTMLButtonElement;

let spanCredito1 = document.getElementById("credito1") as HTMLElement;
let spanCredito2 = document.getElementById("credito2") as HTMLElement;
let spanCredito3 = document.getElementById("credito3") as HTMLElement;
let spanChiamate1 = document.getElementById("chiamate1") as HTMLElement;
let spanChiamate2 = document.getElementById("chiamate2") as HTMLElement;
let spanChiamate3 = document.getElementById("chiamate3") as HTMLElement;

let btnAzzera1 = document.getElementById("azzera1") as HTMLButtonElement;
let btnAzzera2 = document.getElementById("azzera2") as HTMLButtonElement;
let btnAzzera3 = document.getElementById("azzera3") as HTMLButtonElement;
let azzerato1 = document.getElementById("azzerato1") as HTMLElement;
let azzerato2 = document.getElementById("azzerato2") as HTMLElement;
let azzerato3 = document.getElementById("azzerato3") as HTMLElement;

let btnInvia1 = document.getElementById("invia1") as HTMLButtonElement;
let btnInvia2 = document.getElementById("invia2") as HTMLButtonElement;
let btnInvia3 = document.getElementById("invia3") as HTMLButtonElement;
let fieldAggiungi1 = document.getElementById("aggiungi1") as HTMLInputElement;
let fieldAggiungi2 = document.getElementById("aggiungi2") as HTMLInputElement;
let fieldAggiungi3 = document.getElementById("aggiungi3") as HTMLInputElement;
let add1 = document.getElementById("add1") as HTMLElement;
let add2 = document.getElementById("add2") as HTMLElement;
let add3 = document.getElementById("add3") as HTMLElement;
let btnChiama1 = document.getElementById("chiama1") as HTMLButtonElement;
let btnChiama2 = document.getElementById("chiama2") as HTMLButtonElement;
let btnChiama3 = document.getElementById("chiama3") as HTMLButtonElement;
let fieldChiamata1 = document.getElementById("chiamata1") as HTMLInputElement;
let fieldChiamata2 = document.getElementById("chiamata2") as HTMLInputElement;
let fieldChiamata3 = document.getElementById("chiamata3") as HTMLInputElement;
let calling1 = document.getElementById("calling1") as HTMLElement;
let calling2 = document.getElementById("calling2") as HTMLElement;
let calling3 = document.getElementById("calling3") as HTMLElement;
let loading1 = document.getElementById("loading1") as HTMLElement;
let loading2 = document.getElementById("loading2") as HTMLElement;
let loading3 = document.getElementById("loading3") as HTMLElement;

// INTERFACES
interface MyInterface {
    credito: number;
    numeroChiamate: number;

    ricarica(num: number): void; //ricarica del credito con un parametro per indicare di quanto è la ricarica
    chiamata(num: number): void; //simula una chiamata con un parametro che indica quanti minuti dura la chiamata
    numero404(): number; //restituisce il credito disponibile
    getNumeroChiamate(): number; //restituisce quante chiamate sono state fatte
    azzeraChiamate(): void; // azzera le chiamate
}

// CLASSES
class Users implements MyInterface {
    public credito: number;
    public numeroChiamate: number;

    constructor(_credito: number, _numeroChiamate: number) {
        this.credito = _credito;
        this.numeroChiamate = _numeroChiamate;
    }

    public ricarica(num: number): void {
        this.credito = this.credito + num;
    }

    public chiamata(num: number): void {
        let minutiChiamata = num;
        let costoPerMinuto = 0.20;
        let costoChiamata = minutiChiamata * costoPerMinuto;
        this.credito = this.credito - costoChiamata;
        this.numeroChiamate = this.numeroChiamate + 1;
    }

    public numero404(): number {
        return this.credito;
    }

    public getNumeroChiamate(): number {
        return this.numeroChiamate;
    }

    public azzeraChiamate(): void {
        this.numeroChiamate = 0;
    }
}

// INSTANCES OF CLASSES
let userFirst = new Users(50, 0);

userFirst.ricarica(50);
userFirst.chiamata(20);
userFirst.ricarica(30);
userFirst.chiamata(10);

spanCredito1.innerHTML = `${userFirst.numero404()}`;
spanChiamate1.innerHTML = `${userFirst.getNumeroChiamate()}`;


let userSecond = new Users(5, 0);
userSecond.ricarica(10);
userSecond.chiamata(15);
userSecond.ricarica(50);
userSecond.chiamata(24);

spanCredito2.innerHTML = `${userSecond.numero404()}`;
spanChiamate2.innerHTML = `${userSecond.getNumeroChiamate()}`;


let userThird = new Users(20, 0);
userThird.ricarica(10);
userThird.chiamata(30);
userThird.ricarica(5);
userThird.chiamata(20);

spanCredito3.innerHTML = `${userThird.numero404()}`;
spanChiamate3.innerHTML = `${userThird.getNumeroChiamate()}`;


// BUTTONS
btnConsole.addEventListener("click", () => {
    location.href = "console.html";
})

btnAzzera1.addEventListener("click", () => {
    userFirst.azzeraChiamate();
    spanChiamate1.innerHTML = `${userFirst.getNumeroChiamate()}`;

    azzerato1.classList.remove("d-none");
    azzerato1.classList.add("d-block");
    setTimeout(() => {
        azzerato1.classList.remove("d-block");
        azzerato1.classList.add("d-none");
    }, 2000)
})

btnAzzera2.addEventListener("click", () => {
    userSecond.azzeraChiamate();
    spanChiamate2.innerHTML = `${userSecond.getNumeroChiamate()}`;

    azzerato2.classList.remove("d-none");
    azzerato2.classList.add("d-block");
    setTimeout(() => {
        azzerato2.classList.remove("d-block");
        azzerato2.classList.add("d-none");
    }, 2000)
})

btnAzzera3.addEventListener("click", () => {
    userThird.azzeraChiamate();
    spanChiamate3.innerHTML = `${userThird.getNumeroChiamate()}`;

    azzerato3.classList.remove("d-none");
    azzerato3.classList.add("d-block");
    setTimeout(() => {
        azzerato3.classList.remove("d-block");
        azzerato3.classList.add("d-none");
    }, 2000)
})

btnInvia1.addEventListener("click", () => {
    if(!fieldAggiungi1.value || Number(fieldAggiungi1.value) <= 0){
        return;
    }
    userFirst.ricarica(Number(fieldAggiungi1.value));
    spanCredito1.innerHTML = `${userFirst.numero404()}`;

    add1.classList.remove("d-none");
    add1.classList.add("d-block");
    setTimeout(() => {
        add1.classList.remove("d-block");
        add1.classList.add("d-none");
        fieldAggiungi1.value = "";
    }, 2000)
})
btnInvia2.addEventListener("click", () => {
    if(!fieldAggiungi2.value || Number(fieldAggiungi2.value) <= 0){
        return;
    }
    userSecond.ricarica(Number(fieldAggiungi2.value));
    spanCredito2.innerHTML = `${userSecond.numero404()}`;

    add2.classList.remove("d-none");
    add2.classList.add("d-block");
    setTimeout(() => {
        add2.classList.remove("d-block");
        add2.classList.add("d-none");
        fieldAggiungi2.value = "";
    }, 2000)
})
btnInvia3.addEventListener("click", () => {
    if(!fieldAggiungi3.value || Number(fieldAggiungi2.value) <= 0){
        return;
    }
    userThird.ricarica(Number(fieldAggiungi3.value));
    spanCredito3.innerHTML = `${userThird.numero404()}`;

    add3.classList.remove("d-none");
    add3.classList.add("d-block");
    setTimeout(() => {
        add3.classList.remove("d-block");
        add3.classList.add("d-none");
        fieldAggiungi3.value = "";
    }, 2000)
})

btnChiama1.addEventListener("click", () => {
    if(!fieldChiamata1.value || Number(fieldChiamata1.value) <= 0){
        return;
    }
    userFirst.chiamata(Number(fieldChiamata1.value));
    spanChiamate1.innerHTML = `${userFirst.getNumeroChiamate()}`;

    calling1.classList.remove("d-none");
    calling1.classList.add("d-block");
    loading1.classList.remove("d-none");
    loading1.classList.add("d-block");
    setTimeout(() => {
        calling1.classList.remove("d-block");
        calling1.classList.add("d-none");
        loading1.classList.remove("d-block");
        loading1.classList.add("d-none");
        fieldChiamata1.value = "";
        spanCredito1.innerHTML = `${Math.round(userFirst.numero404() * 100) / 100}`;
    }, 2000)
})
btnChiama2.addEventListener("click", () => {
    if(!fieldChiamata2.value || Number(fieldChiamata2.value) <= 0){
        return;
    }
    userSecond.chiamata(Number(fieldChiamata2.value));
    spanChiamate1.innerHTML = `${userSecond.getNumeroChiamate()}`;

    calling2.classList.remove("d-none");
    calling2.classList.add("d-block");
    loading2.classList.remove("d-none");
    loading2.classList.add("d-block");
    setTimeout(() => {
        calling2.classList.remove("d-block");
        calling2.classList.add("d-none");
        loading2.classList.remove("d-block");
        loading2.classList.add("d-none");
        fieldChiamata2.value = "";
        spanCredito2.innerHTML = `${Math.round(userSecond.numero404() * 100) / 100}`;
    }, 2000)
})
btnChiama3.addEventListener("click", () => {
    if(!fieldChiamata3.value || Number(fieldChiamata3.value) <= 0){
        return;
    }
    userThird.chiamata(Number(fieldChiamata3.value));
    spanChiamate3.innerHTML = `${userThird.getNumeroChiamate()}`;

    calling3.classList.remove("d-none");
    calling3.classList.add("d-block");
    loading3.classList.remove("d-none");
    loading3.classList.add("d-block");
    setTimeout(() => {
        calling3.classList.remove("d-block");
        calling3.classList.add("d-none");
        loading3.classList.remove("d-block");
        loading3.classList.add("d-none");
        fieldChiamata3.value = "";
        spanCredito3.innerHTML = `${Math.round(userThird.numero404() * 100) / 100}`;
    }, 2000)
})