function Tabla() {

    this.tabla = [];
    this.tapada = [];
    for (var f = 0; f < 5; f++) {
        this.tabla[f] = [];
        this.tapada[f] = [];
        for (var c = 0; c < 5; c++) {
            //solo cuando no sea la posicion central
            if (!(c == 2 && f == 2)) {
                this.tabla[f][c] = c * 15 + Math.floor(Math.random() * 15) + 1;
                this.tapada[f][c] = false;
            }
            else {
                this.tabla[f][c] = "LIBRE";
                this.tapada[f][c] = true;
            }
        }
    }

    this.taparNumero = function (balotaSacada) {
        for (var f = 0; f < 5; f++) {
            for (var c = 0; c < 5; c++) {
                if (this.tabla[f][c] == balotaSacada) {
                    this.tapada[f][c] = true;
                }
            }
        }
    }

    this.verificarBingo = function () {
        // Verificar Filas
        for (let f = 0; f < 5; f++) {
            let bingoFila = true;
            for (let c = 0; c < 5; c++) {
                if (!this.tapadas[f][c]) {
                    bingoFila = false;
                    break;
                }
            }
            if (bingoFila) return true;
        }

        // Verificar Columnas
        for (let c = 0; c < 5; c++) {
            let bingoColumna = true;
            for (let f = 0; f < 5; f++) {
                if (!this.tapadas[f][c]) {
                    bingoColumna = false;
                    break;
                }
            }
            if (bingoColumna) return true;
        }

        // Verificar Diagonal Principal (arriba-izquierda a abajo-derecha)
        let bingoDiagonal1 = true;
        for (let i = 0; i < 5; i++) {
            if (!this.tapadas[i][i]) { 
                bingoDiagonal1 = false;
                break;
            }
        }
        if (bingoDiagonal1) return true;

        // Verificar Diagonal secundaria (arriba-derecha a abajo-izquierda)
        let bingoDiagonal2 = true;
        for (let i = 0; i < 5; i++) {
            if (!this.tapadas[i][4-i]) { 
                bingoDiagonal2 = false;
                break;
            }
        }
        if (bingoDiagonal2) return true;

        return false;
    }
}