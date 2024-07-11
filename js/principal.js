import CL_Numeros from "./CL_Numeros.js";
import CL_INumeros from "./CL_INumeros.js"; 

let inum = new CL_INumeros(),
        n = inum.leerNumero(),

    num = new CL_Numeros(n),
    salida = document.getElementById("salida");

    salida.innerHTML = inum.reporteNumero(num.numero, num.Clasificacionparimpar());

