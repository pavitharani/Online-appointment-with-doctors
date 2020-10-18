var myApp = angular.module('myApp', []);
     myApp.controller('TotCtrl', function($scope, $Work){
       $scope.tot = $Work.add(128,112); <!--MALE AND FEMALE>
     });

     myApp.factory('$Work',function() {
      var workers = {};
      workers.add =  function (a,b) {
        return(a+b);
      };
      return workers;
     });
	 

myApp.controller('wrkCtrl', function($scope, $Math){
       $scope.tot = $Math.add(40,28);
     });
     myApp.service('$Math',function() {

      this.add =  function (a,b) {
        return(a+b);
      };
     });
	 
myApp.controller('Appcontroller',function($scope ,$m)
{
	$scope.message="pavi";
});


myApp.directive('myDirective',function(){
       return{
         template: "Our Hospital is situated in Madurai in Tamil Nadu state of India. it is accredited from MCI and it is affiliated to Tamil Nadu Dr. ... MMHC, Madurai offers 16 courses across 4 streams namely Medical, Paramedical, Science, Management and across 8 degrees like BSc, BBA, MS (Surgery), M.It takes pride at its unflinching dedication towards delivering quality health care at an affordable cost to all. To achieve this, we have set  benchmarks for ourselves in technology, services, infrastructure and in the experienced medical fraternity we employ. We have also chosen to integrate hospital and clinical care with research and education, adding to it our unparalleled human and humane touch."
       }
    } );
	
myApp.controller('parentController', function ($scope) {
          	$scope.controllerName = "ABC Hospital"; 
            $scope.ct = "Madurai"; 
            $scope.c_no = "9234545322";
        });
 
       myApp.controller('childController', function ($scope) {
         	$scope.controllerName = "RP hospital";
            $scope.c_no = "8876567676";
        });	