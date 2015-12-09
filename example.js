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

app.controller('eatMenuCTRL', function ($scope, $sce) {
});

app.controller('eatCheckoutCTRL', function ($scope, $sce) {
});

app.controller('eatPastReservationsCTRL', function ($scope, $sce) {
});