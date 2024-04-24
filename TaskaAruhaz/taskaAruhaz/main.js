import { TASKALISTA } from "./termekek.js";
import { termekOsszeallit } from "./termekMegjelenit.js";
import { nevRendez, arRendez } from "/rendezes.js";
const termelElem = $("#termekek")
termelElem.html(termekOsszeallit(TASKALISTA))
nevRendez(TASKALISTA)
arRendez(TASKALISTA)

let irany = 1;
init(TASKALISTA)

function init(lista) {
    rendezEsemeny()
}
nevRendez()
arRendez()


function rendezEsemeny() {
    const nevElem = $("#termek")
    nevElem.on("click", function () {
        console.log(irany)
        const rLista = (nevRendez(TASKALISTA, irany));
        console.log(rLista);
        init(rLista)
        irany *= (-1)
    });


}
