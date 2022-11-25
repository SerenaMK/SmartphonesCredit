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