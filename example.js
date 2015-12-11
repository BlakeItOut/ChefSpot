var app = angular.module('eater', ['ngRoute', 'ngAnimate', 'ui.bootstrap']);

app.config(function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/eatCooksView.html',
    controller: 'eatCooksCTRL'
  });

  $routeProvider.when('/userProfile', {
    templateUrl: 'views/eatUserProfileView.html',
    controller: 'eatUserProfileCTRL'
  });

  $routeProvider.when('/menu', {
    templateUrl: 'views/eatMenuView.html',
    controller: 'eatMenuCTRL'
  });

  $routeProvider.when('/checkout', {
    templateUrl: 'views/eatCheckoutView.html',
    controller: 'eatCheckoutCTRL'
  });

  $routeProvider.when('/pastReservations', {
    templateUrl: 'views/eatPastReservationsView.html',
    controller: 'eatPastReservationsCTRL'
  });
  
  $routeProvider.otherwise({redirectTo: '/'});
}); 

app.controller('mainCTRL', function ($scope, $sce, $location) {
  $scope.go = function ( path ) {
    $location.path( path );
  }
  $scope.anything = "text";
})

app.controller('eatUserProfileCTRL', function ($scope, $sce) {
  $scope.cuisines = [
    {name: 'American', chosen: false},
    {name:'Canadian', chosen: false},
    {name: 'Cuban', chosen: false},
    {name: 'French', chosen: false},
    {name: 'Greek', chosen: false},
    {name: 'Indian', chosen: false},
    {name: 'Irish', chosen: false},
    {name: 'Italian', chosen: false},
    {name: 'Japanese', chosen: false},
    {name: 'Mexican', chosen: false},
    {name: 'Mediterranean', chosen: false},
    {name: 'Pakistani', chosen: false},
    {name: 'Seafood', chosen: false},
    {name: 'Spanish', chosen: false},
    {name: 'Sushi', chosen: false},
    {name: 'Thai', chosen: false},
    {name: 'Vegetarian', chosen: false}
  ];
  $scope.checkResults = [];

  $scope.$watch('cuisines', function () {
    $scope.checkResults = [];
    angular.forEach($scope.cuisines, function (value, key) {
      if (value.chosen) {
        $scope.checkResults.push(value.name);
      }
    });
  }, true);

});

app.controller('eatCooksCTRL', function ($scope, $sce) {
});

app.controller('eatMenuCTRL', function ($scope, $sce, checkoutFCTRL) {
  $scope.submitter= function(){
      checkoutFCTRL.setData($scope.input1, $scope.input2, $scope.input3);}
});

app.controller('eatCheckoutCTRL', function ($scope, $sce, checkoutFCTRL) {
    $scope.checkoutFCTRL= checkoutFCTRL;
    debugger
    $scope.input1= checkoutFCTRL.input1;
    $scope.input2= checkoutFCTRL.input2;
    $scope.input3= checkoutFCTRL.input3;
    
    $scope.confirm = function(){
      var handler = StripeCheckout.configure({
        key: 'pk_test_s1K2R5T90nTKpXtyZbQtg0o8',
        // image: '/img/documentation/checkout/marketplace.png',
        locale: 'auto',
        token: function(token) {
          // Use the token to create the charge with a server-side script.
          // You can access the token ID with `token.id`
          $http.post("/stripe", token).success(function(data){
            console.log(data);
          })
        }
      });
        handler.open({
          name: checkoutFCTRL.input1,
          description: checkoutFCTRL.input2,
          zipCode: true,
          amount: checkoutFCTRL.input3
        });
      }
});

app.factory('checkoutFCTRL', function(){
  var pmntInfoCont= {};
  pmntInfoCont.setData = function(input1, input2, input3){
        this.input1 = input1; 
        this.input2 = input2;
        this.input3 = input3;
      }
      return pmntInfoCont;
});

app.controller('eatPastReservationsCTRL', function ($scope, $sce) {
});