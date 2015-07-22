angular.module('starter.controllers')

    .controller('AnimatedListCtrl', function($scope) {

        var nextItem = 0;
        $scope.items = [];
        for (var i=0; i < 5; i++) {
            $scope.items.push('Item ' + (nextItem++));
        }

        $scope.addItem = function(atIndex) {
            $scope.items.splice(atIndex + 1, 0, 'Item ' + nextItem);
            nextItem++;
        };
    })
    .controller('RecorderListCtrl', function($scope, $ionicPopup) {
        $scope.data = {
            showReorder: true,
            showDelete: true
        };

        $scope.items = [];
        for (var i = 0; i < 20; i++) {
            $scope.items.push(i);
        }

        $scope.toggleDelete = function () {
            $scope.data.showReorder = false;
            $scope.data.showDelete = !$scope.data.showDelete;
        };
        $scope.toggleReorder = function () {
            $scope.data.showDelete = false;
            $scope.data.showReorder = !$scope.data.showReorder;
        };

        $scope.share = function (item) {
            alert('Sharing ' + item);
        };
        $scope.edit = function (item) {
            alert('Editing ' + item);
        };

        $scope.reorderItem = function (item, fromIndex, toIndex) {
            $scope.items.splice(fromIndex, 1)
            $scope.items.splice(toIndex, 0, item)
        };
    })
    .controller('ForeverCtrl', function($scope, $timeout) {
        $scope.items = [];
        for (var i = 0; i < 20; i++) {
            $scope.items.push(i);
        }

        //Load more after 1 second delay
        $scope.loadMoreItems = function() {
            $timeout(function() {
                var i = $scope.items.length;
                var j = $scope.items.length + 5;
                for (; i < j; i++) {
                    $scope.items.push('Item ' + i);
                }
                $scope.$broadcast('scroll.infiniteScrollComplete');

            }, 2000);

        };

        //$timeout($scope.loadMoreItems, 1000);
    });

