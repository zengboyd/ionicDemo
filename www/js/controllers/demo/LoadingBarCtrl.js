angular.module('starter.controllers')

    .controller('LoadingBarCtrl', function($scope, $timeout) {

        $scope.data = {
            isLoading: true
        };

        var items = [
            {title : 'item1'},
            {title : 'item2'},
            {title : 'item3'},
            {title : 'item4'},
            {title : 'item5'},
            {title : 'item6'},
            {title : 'item7'}
        ]

        $timeout(function() {
            $scope.items = items;
            $scope.data.isLoading = false;
        }, 2000);

    })

