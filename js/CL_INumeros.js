export default class CL_INumeros{
    leerNumero(){
        return prompt("Dame un numero");
    }

    reporteNumero(n,c){
        return `
        <br> Numero: ${n}
        <br> Clasificacion: ${c}
        `
    }
}