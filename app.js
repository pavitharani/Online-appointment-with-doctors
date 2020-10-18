var app = angular.module('myApp', []);
    app.controller('myController', function ($scope) {
		$scope.today = new Date();
		$scope.kp1=0;
        // JSON ARRAY TO POPULATE TABLE.
        $scope.mArray =
        [
            { 'name': 'Pavi', 'age': '30' },
            { 'name': 'Thara', 'age': '40' },
            { 'name': 'Pavithra', 'age': '6' }
        ];

        // GET VALUES FROM INPUT BOXES AND ADD A NEW ROW TO THE TABLE.
        $scope.addRow = function () {
            if ($scope.name != undefined && $scope.age != undefined) {
                var m = [];
                m.name = $scope.name;
                m.age = $scope.age;

                $scope.mArray.push(m);

                // CLEAR TEXTBOX.
                $scope.name = null;
                $scope.age = null;
            }
        };

        // Remove selected rows from table.
        $scope.removeRow = function () {
            var ap = [];
            angular.forEach($scope.mArray, function (value) {
                if (!value.Remove) {
                    ap.push(value);
                }
            });
            $scope.mArray = ap;
        };

        // Finally, submit the data.
        $scope.submit = function () {
            var ap = [];
            angular.forEach($scope.mArray, function (value) {
                ap.push('Name:' + value.name + ', Age:' + value.age);
            });
            $scope.display = ap;
        };
    });