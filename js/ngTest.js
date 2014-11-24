angular.module("ngTestApp", [])
    .controller('ngTestCtrl', ['$scope', function($scope) {
        $scope.dataset1 = ["dataset1", 4, 8, 15, 16, 23, 42];
        var chart = c3.generate({
            data: {
                columns: [
                    $scope.dataset1
                ]
            }
        });
        $scope.Refresh = function() {
            chart.load({
                columns: [
                    $scope.dataset1
                ]
            });
        };
        $scope.isString = function(item) {
            return typeof item === "string";
        };
    }]);
