angular.module('starter.controllers')

    .controller('BarButtonsCtrl', function($scope, $timeout) {
        $scope.items = [];

        $scope.status = {
            'button1': true,
            'button2': false,
            'button3': false
        };

        function clearStatus() {
            $scope.status.button1 = false;
            $scope.status.button2 = false;
            $scope.status.button3 = false;
        }

        $scope.chooseItem = function(index) {
            clearStatus();
            $scope.status["button" + index] = true;


            switch (index) {
                case 1:
                    $scope.getDraftList();
                    break;
                case 2:
                    $scope.getTodoList();
                    break;
                case 3:
                    $scope.getToReadList();
                    break;
                default:
                    $scope.getDraftList();
            }
            //e.target.classList.add('button-light')
        }

        $scope.getDraftList = function() {
            var list = [
                { name: "草稿1" },
                { name: "草稿2" },
                { name: "草稿3" },
                { name: "草稿4" },
                { name: "草稿5" },
                { name: "草稿6" }
            ];

            $scope.items = list;
        };

        $scope.getTodoList = function() {
            var list = [
                { name: "待办1" },
                { name: "待办2" },
                { name: "待办3" },
                { name: "待办4" },
                { name: "待办5" },
                { name: "待办6" }
            ];

            $scope.items = list;
        };

        $scope.getToReadList = function() {
            var list = [
                { name: "待阅1" },
                { name: "待阅2" },
                { name: "待阅3" },
                { name: "待阅4" },
                { name: "待阅5" },
                { name: "待阅6" }
            ];

            $scope.items = list;
        };

        $scope.refresh = function () {
            $timeout(function() {
                $scope.$broadcast('scroll.refreshComplete');
            }, 1000);
        }

        $scope.chooseItem(1);

    });

