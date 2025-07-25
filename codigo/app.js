angular.module("JuegoBingo", [])
    .controller("ControladorJuegoBingo",
        function ($scope) {

            $scope.cantor = new Cantor();
            $scope.jugadores = [];

            $scope.iniciarJuego = function () {
                const totalJugadores = 7;
                for (let i = 0; i < totalJugadores; i++) {
                    $scope.jugadores.push({
                        nombre: "Jugador " + (i + 1),
                        tablaJugador: new Tabla(),
                        ganador: false
                    });
                }
            }

            $scope.sacarBalota = function () {
                $scope.cantor.sacarBalota();
            }
        }
    );