angular.module('starter.controllers', [])



.controller('homeCtrl', function ($scope) {

    $scope.title = "App L'Alveare ";
    $scope.message = "l'app e' ancora in fase di sviluppo ma se ti va puoi fare un giro nelle varie sezioni per avere un'idea delle funzionalita' dell'app completa";
})

.controller('giornalinoCtrl', function($scope, Chats) {
    $scope.message = "In questa sezione verranno pubblicati periodicamente contenuti del giornalino scolastico";
})


.controller('orientamentoCtrl', function($scope) {
    $scope.message = " In questa sezione potrai leggere le esperienze di studenti universitari in modo da avere un'idea di cosa ti aspetta";

})

.controller('forumCtrl', function($scope) {
    $scope.message = "Questo e' un luogo dove si puo' parlare e discutere di argomenti riguardanti la scuola";

});
