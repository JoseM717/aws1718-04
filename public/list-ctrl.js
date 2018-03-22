angular
    .module("UniversityListApp")
    .controller("ListCtrl", function($scope,$http) {

        function refresh(){
            $http.get("/api/v1/universities").then(function (response){
                $scope.universities = response.data;
            });
        }
        
        $scope.getUniversity = function(name){
            $http
                .get("/api/v1/universities/"+name, name)
                .then(function (response){
                    $scope.universityObtained = response.data;
                });

        };
        
        $scope.addUniversity = function (){
            $http
                .post("/api/v1/universities", $scope.newUniversity)
                .then(function (){
                    refresh();  
                });
<<<<<<< HEAD
        };
=======
            refresh();    
        }
>>>>>>> 8ed6af65c02831340e1557452993bc86d3f90a41
        
        $scope.deleteUniversity = function(name){
            $http
                .delete("/api/v1/universities/"+name, name)
                .then(function (){
                    refresh();
                });
        };
        
        //refresh();
        
    });