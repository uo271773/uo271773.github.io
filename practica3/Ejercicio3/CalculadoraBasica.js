/* CalculadoraBasica.js */
// Juan Rodríguez de la Fuente - 2020 - Universidad de Oviedo
"use strict"
class CalculadoraBasica {
    _pantalla = '';
    memoria= 0;
    resultadoAhora = false;

    constructor(caja) {
        this._caja = caja;
    }

    set pantalla(valor) {
        this._pantalla = valor;
        this._caja.value = valor;
    }

    get pantalla() {
        return this._pantalla;
    }
    
    mmas() {
        const result = this.resuelve();
        if (result != undefined) {
            this.memoria += result;
        }
    }

    mmenos() {
        const result = this.resuelve();
        if (result != undefined) {
            this.memoria -= result;
        }
    }

    mrc() {
        this.resultadoAhora=true;
        this.introduce(this.memoria);
    }

    introduce(n) {
        if(this.resultadoAhora) {
            this.pantalla = '';
        }
        this.pantalla += n;
        this.resultadoAhora=false;
    }

    clear() {
        this.pantalla = '';
        this.resultadoAhora = true;
    }

    resuelve() {
        const result = this._evaluar();
        if (result != undefined) {
            this.pantalla = result;
        }
        this.resultadoAhora=true;
        return result;
    }

    _evaluar() {
        try {
            return Number(eval(this.pantalla));
        }
        catch (error) {
            this.pantalla = 'La expresion era errónea'
        }
    }

}
const calculadora = new CalculadoraBasica(document.getElementById('pantalla'));