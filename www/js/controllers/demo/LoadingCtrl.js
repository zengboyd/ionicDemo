angular.module('starter.controllers')

    .controller('LoadingCtrl', function($scope, $ionicLoading) {

        $scope.loadingOptions = {
            duration: 1000,
            delay: 0,
            template: '<ion-spinner class="spinner-light"></ion-spinner>\n<br/>\nLoading...',
            noBackdrop: false
        };
        $scope.showLoading = function() {
            $ionicLoading.show($scope.loadingOptions);
        };
    })

