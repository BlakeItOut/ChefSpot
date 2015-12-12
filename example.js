var app = angular.module('eater', ['ngRoute', 'ngAnimate', 'ui.bootstrap', 'ngGeolocation']);

app.config(function($routeProvider) {
  //   $routeProvider.when('/', {
  //   templateUrl: 'landingpage.html',
  //   controller: 'eatCooksCTRL'
  // });
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

app.controller('eatCooksCTRL', function ($scope, $geolocation) {
    
var cities = [
    {
        city : 'Sheharyar Khushnood',
        desc : 'Chinese',
        contact : '330345989',
        lat : 42.7000,
        long : -83.4000
    },
    {
        city : 'Blake Shawn',
        desc : 'Thai',
        lat : 42.6700,
        long : -83.9400
    },
    {
        city : 'Fernando Alonso',
        desc : 'This is the second best city in the world!',
        lat : 42.8819,
        long : -83.6278
    },
    {
        city : 'Hernandez Altano',
        desc : 'This city is live!',
        lat : 42.0500,
        long : -83.2500
    },
    {
        city : 'Mickey Mouse',
        desc : 'Sin City...\'nuff said!',
        lat : 42.0800,
        long : -83.1522
    }
];


    $scope.$geolocation = $geolocation
$scope.coords = $geolocation.position.coords; // this is regularly updated
    $scope.error = $geolocation.position.error; // this becomes truthy, and has 'code' and 'message' if an error occurs
    // basic usage
    $geolocation.getCurrentPosition().then(function(location) {
      $scope.location = location
      console.log($scope.location);
          $scope.map = new google.maps.Map(document.getElementById('map'),{
    center: {lat:$scope.location.coords.latitude, lng: $scope.location.coords.longitude},
    zoom: 12
  });

          $scope.markers = [];
    
    var infoWindow = new google.maps.InfoWindow();
    
    var createMarker = function (info){
        
        var marker = new google.maps.Marker({
            map: $scope.map,
            position: new google.maps.LatLng(info.lat, info.long),
            title: info.city
        });
        marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';
         // marker.content = '<div class="infoWindowContent">' + info.contact + '</div>';

        google.maps.event.addListener(marker, 'click', function(){
            infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
            infoWindow.open($scope.map, marker);
        });
        
        $scope.markers.push(marker);
        
    }  
    
    for (i = 0; i < cities.length; i++){
        createMarker(cities[i]);
    }

    $scope.openInfoWindow = function(e, selectedMarker){
        e.preventDefault();
        google.maps.event.trigger(selectedMarker, 'click');
    }
    $geolocation.watchPosition({
      timeout: 60000,
      maximumAge: 2,
      enableHighAccuracy: true
    });

    });
       
       // $scope.lat = Math.round($geolocation.position.coords.latitude);
       // $scope.lng = Math.round($geolocation.position.coords.longitude);

    

    // regular updates
    
    
  });

app.controller('eatMenuCTRL', function ($scope, $sce, checkoutFCTRL) {
  $scope.submitter= function(){
      checkoutFCTRL.setData($scope.input1, $scope.input2, $scope.input3);
  }

// function cook(cookID, first, last, email, phoneNumber, lattitude, longitude, menu, mainCusine) {
//   this.cookID = id;
//   this.firstName = first;
//   this.lastName = last;
//   this.email = email;
//   this.phoneNumber = phoneNumber;
//   this.lattitude = lattitude;
//   this.longitude = longitude
//   this.menu = menu;
//   this.mainCuisine = mainCusine;
// }

// function menu(dish1, dish2, dish3) {
//   this.dish1 = dish1;
//   this.dish2 = dish2;
//   this.dish3 = dish3;
// }

// function dish(displayName, costPerServing, ingredients, maxServings, cusineType) {
//   this.displayName = name;
//   this.costPerServing = costPerServing;
//   this.ingredients = ingredients;
//   this.maxServings = maxServings;
//   this.cuisineType = cuisineType;
// }

// $scope.chickenBriyani = new dish("Chicken Briyani", 8, ["Chicken", "Rice", "Curry"], 4, "Pakistani");
// $scope.spinichPaneer = new dish("Spinich Paneer", 6, ["Spinich", "Crepe"], 6, "Indian");
// $scope.chanaMasala = new dish("Chana Masala", 7, ["Curry", "Meat", "Chickpeas"], 8, "Indian");

// $scope.shayMenu = new menu($scope.chickenBriyani, $scope.spinichPaneer, $scope.chanaMasala);

// $scope.shay = new cook(000000001, "Shay", "Knushnood", "sherryBaby@gmail.com", "3133118008", 42.3314, 83.0458, $scope.shayMenu, "Pakistani");

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

app.controller('ModalDemoCtrl', function ($scope, $uibModal, $log) {

  $scope.items = ['item1', 'item2', 'item3'];

  $scope.animationsEnabled = true;

  $scope.open = function (size) {

    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });
    $scope.close = function (size) {

    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'myModalContent2.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };

});

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.

app.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, items) {

  $scope.items = items;
  $scope.selected = {
    item: $scope.items[0]
  };

  $scope.ok = function () {
    $uibModalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});