// VARIABLES
let btnBack = document.getElementById("btnBack") as HTMLButtonElement;
let consoleList = document.getElementById("console") as HTMLUListElement;

btnBack.addEventListener("click", () => {
    location.href = "index.html";
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
class User implements MyInterface {
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

//Istanziare le classi una volta a ciascuna, indicando i due valori numerici per credito e numerochiamate
// eseguire ricarica/chiamata/ricarica/chiamata

// INSTANCES OF CLASSES
let userPrimo = new User(50, 0);

userPrimo.ricarica(50);
userPrimo.chiamata(20);
userPrimo.ricarica(30);
userPrimo.chiamata(10);
let c1 = userPrimo.getNumeroChiamate();

let userSecondo = new User(5, 0);
userSecondo.ricarica(10);
userSecondo.chiamata(15);
userSecondo.ricarica(50);
userSecondo.chiamata(24);
let c2 = userSecondo.getNumeroChiamate();

let userTerzo = new User(20, 0);
userTerzo.ricarica(10);
userTerzo.chiamata(30);
userTerzo.ricarica(5);
userTerzo.chiamata(20);
let c3 = userTerzo.getNumeroChiamate();

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
consoleList.innerHTML = `
    <ul class="py-3 px-4 m-0 list-unstyled">
        <li>Primo utente:</li>
        <li>-------------</li>
        <li>Credito residuo: ${userPrimo.numero404()}</li>
        <li>Numero chiamate: ${c1}</li>
        <li>Chiamate azzerate.<br>
        Nuovo numero chiamate: ${userPrimo.getNumeroChiamate()}</li>
        <br>
        <li>Secondo utente:</li>
        <li>-------------</li>
        <li>Credito residuo: ${userSecondo.numero404()}</li>
        <li>Numero chiamate: ${c2}</li>
        <li>Chiamate azzerate.<br>
        Nuovo numero chiamate: ${userSecondo.getNumeroChiamate()}</li>
        <br>
        <li>Terzo utente:</li>
        <li>-------------</li>
        <li>Credito residuo: ${userTerzo.numero404()}</li>
        <li>Numero chiamate: ${c3}</li>
        <li>Chiamate azzerate.<br>
        Nuovo numero chiamate: ${userTerzo.getNumeroChiamate()}</li>
    </ul>
`;