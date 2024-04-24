import { TASKALISTA } from "./termekek.js";
import { termekOsszeallit } from "./termekMegjelenit.js";
const termelElem=$("#termekek")
termelElem.html(termekOsszeallit(TASKALISTA))