angular.module("JuegoBingo", [])
    .controller("ControladorJuegoBingo",
        function ($scope) {

            $scope.cantor = new Cantor();
            $scope.tablas = [];

            $scope.iniciarJuego = function () {
                const totalJugadores = 7;
                for (let i = 0; i < totalJugadores; i++) {
                    $scope.tablas.push({
                        nombre: "Jugador " + (i + 1),
                        tabla: new Tabla(),
                        ganador: false
                    });
                }
            }

            $scope.sacarBalota = function () {
                $scope.cantor.sacarBalota();
            }
        }
    );