function Cantor() {

    this.balotasSacadas = new Array(75).fill(false);

    this.tabla = [];
    for (var f = 0; f < 15; f++) {
        this.tabla[f] = [];
        for (var c = 0; c < 5; c++) {
            this.tabla[f][c] = c * 15 + f + 1;
        }

    }

    //metodo para iniciar
    this.iniciar = function () {
        this.balotasSacadas = new Array(75).fill(false);
    }

    //metodo para sacar balotas
    this.sacarBalota = function () {
        let balota = Math.floor(Math.random() * 75) + 1;

        this.balotasSacadas[balota - 1] = true;

        window.alert(balota);

    }
}