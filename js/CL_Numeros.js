export default class CL_Numeros {
    constructor(numero){
        this.numero = numero;
    }
    set numero(n){
        this._numero = +n;
    }
    get numero(){
        return this._numero;
    }

    Clasificacionparimpar(){
        if(this._numero % 2 == 0){
            return "Par";
        }else{
            return "Impar";
        }
    }
}