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

  $routeProvider.when('/reservations', {
    templateUrl: 'views/eatReservationsView.html',
    controller: 'eatReservationsCTRL'
  });

  $routeProvider.when('/MenuSet', {
    templateUrl: 'views/cookMenuSetView.html',
    controller: 'cookMenuSetCTRL'
  });

  $routeProvider.when('/Availability', {
    templateUrl: 'views/cookAvailabilityView.html',
    controller: 'cookAvailabilityCTRL'
  });

  $routeProvider.when('/CookProf', {
    templateUrl: 'views/cookCookProfView.html',
    controller: 'cookCookProfCTRL'
  });
  
  $routeProvider.otherwise({redirectTo: '/'});
}); 

app.controller('/cookMenuSetCTRL', function(){

})

app.controller('/cookAvailabilityCTRL', function(){

})

app.controller('/cookCookProfCTRL', function(){

})

app.controller('mainCTRL', function ($scope, $sce, $location) {
  $scope.go = function (path) {
    $location.path(path);
  }
  $scope.anything = "text";
  $scope.tabs = [
  {title: "Cooks", goHere: "/"},
  {title: "Menu", goHere: "/menu"},
  {title: "Checkout", goHere: "/checkout"},
  {title: "Reservations", goHere: "/reservations"},
  {title: "User Profile", goHere: "/userProfile"}
  ]
})

app.controller('eatCooksCTRL', function ($scope, $geolocation, chooseCook) {
    $scope.tabs[0].active = true;
    $scope.cookget= function(){
      // displaying the object at that click
      console.log("plz");
      } 
var cooks = [
    {
        name : 'Sheharyar Khushnood',
        cuisine : 'Chinese',
        lat : 42.7000,
        long : -83.4000
    },
    {
        name : 'Blake Shawn',
        cuisine : 'Thai',
        lat : 42.6700,
        long : -83.9400
    },
    {
        name : 'Fernando Alonso',
        cuisine : 'Indian',
        lat : 42.8819,
        long : -83.6278
    },
    {
        name : 'Hernandez Altano',
        cuisine : 'Italian',
        lat : 42.0500,
        long : -83.2500
    },
    {
        name : 'Mickey Mouse',
        cuisine : 'Mexican',
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
            title: info.name
        });
        marker.content = '<div class="infoWindowContent">' + info.cuisine + '</div>';
         // marker.content = '<div class="infoWindowContent">' + info.contact + '</div>';

        google.maps.event.addListener(marker, 'click', function(){
            var cookTitle = marker.title;
            chooseCook.setData(cookTitle);
            infoWindow.setContent("<a href='#/menu' ng-click='cookget()'>" + cookTitle + '</a>' + marker.content);
            infoWindow.open($scope.map, marker);

            // console.log(google.maps.event.marker)
        });
          //var cookget = men();
  
        // console.log(createMarker.title);
        
        // $scope.experiment = function(){
        //   console.log("anything working whatever");
        //   chooseCook.setData($marker.title);
        // };
        // $scope.markers.push(marker);
        
    }

    
    
    for (i = 0; i < cooks.length; i++){
        createMarker(cooks[i]);
    }

    $scope.openInfoWindow = function(e, selectedMarker){
        e.preventDefault();
        google.maps.event.trigger(selectedMarker, 'click');
    }
    $geolocation.watchPosition({
      // timeout: 60000,
      maximumAge: 2,
      enableHighAccuracy: true
    });

    });
       
       // $scope.lat = Math.round($geolocation.position.coords.latitude);
       // $scope.lng = Math.round($geolocation.position.coords.longitude);

    
  
    // regular updates
    
    //console.log(cookget);
  });

app.controller('eatMenuCTRL', function ($scope, $sce, $location, checkoutFCTRL, chooseCook) {
  $scope.tabs[1].active = true;
  $scope.chefsName = chooseCook.cook1 || "Sheharyar Khushnood";
  $scope.submitter= function(){
      $scope.input4 = $scope.chef
      if ($scope.radioModel === "Option 1") {
        $scope.input1 = $scope.chef.menu.dish1;
        $scope.input2 = $scope.Servings1;
        $scope.input3 = $scope.chef.menu.dish1.costPerServing*$scope.Servings1;   
      } else if ($scope.radioModel === "Option 2") {
        $scope.input1 = $scope.chef.menu.dish2;
        $scope.input2 = $scope.Servings2;
        $scope.input3 = $scope.chef.menu.dish2.costPerServing*$scope.Servings2  
      } else if ($scope.radioModel === "Option 3") {
        $scope.input1 = $scope.chef.menu.dish3;
        $scope.input2 = $scope.Servings3;
        $scope.input3 = $scope.chef.menu.dish3.costPerServing*$scope.Servings3;
      }
      checkoutFCTRL.setData($scope.input1, $scope.input2, $scope.input3, $scope.input4);
      $location.path( '/checkout' );
  }
  function cook(cookID, cookPic, first, last, email, phoneNumber, lattitude, longitude, menu, mainCusine) {
    this.cookID = cookID;
    this.cookPic = cookPic;
    this.firstName = first;
    this.lastName = last;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.lattitude = lattitude;
    this.longitude = longitude
    this.menu = menu;
    this.mainCuisine = mainCusine;
  }

  function menu(dish1, dish2, dish3) {
    this.dish1 = dish1;
    this.dish2 = dish2;
    this.dish3 = dish3;
  }

  function dish(displayName, costPerServing, ingredients, maxServings, cuisineType, picture) {
    this.displayName = displayName;
    this.costPerServing = costPerServing;
    this.ingredients = ingredients;
    this.maxServings = maxServings;
    this.cuisineType = cuisineType;
    this.picture = picture;
  }

  $scope.chickenBriyani = new dish("Chicken Briyani", 800, ["Chicken", "Rice", "Curry"], 4, "Pakistani", "img/chickenBriyani.png");
  $scope.spinichPaneer = new dish("Spinich Paneer", 600, ["Spinich", "Crepe"], 6, "Indian", "img/spinachPaneer.png");
  $scope.chanaMasala = new dish("Chana Masala", 700, ["Curry", "Meat", "Chickpeas"], 8, "Indian", "img/chanaMasala.png");

  $scope.shayMenu = new menu($scope.chickenBriyani, $scope.spinichPaneer, $scope.chanaMasala);

  $scope.shay = new cook(1000000001, "img/chefShay.png", "Sheharyar", "Khushnood", "sherryBaby@gmail.com", "3133118008", 42.3314, 83.0458, $scope.shayMenu, "Pakistani");

  $scope.pasta = new dish("Simple Spinach Pasta", 800, ["Chicken", "Rice", "Curry"], 4, "Italian", "img/chickenBriyani.png");
  $scope.chickenScallopini = new dish("Chicken Scallopini", 600, ["Spinich", "Crepe"], 6, "Italian", "img/spinachPaneer.png");
  $scope.venetoChicken = new dish("Veneto Chicken", 700, ["Curry", "Meat", "Chickpeas"], 8, "Italian", "img/chanaMasala.png");

  $scope.mickeyMenu = new menu($scope.pasta, $scope.chickenScallopini, $scope.venetoChicken);

  $scope.mickey = new cook(1000000001, "img/mickeyMouse.png", "Mickey", "Mouse", "sherryBaby@gmail.com", "3133118008", 42.3314, 83.0458, $scope.mickeyMenu, "Italian");

  $scope.chefArray = [$scope.shay, $scope.mickey]

  function setChef () {
    for(i=0; i<$scope.chefArray.length; i++) {
      if($scope.chefsName === ($scope.chefArray[i].firstName + " " + $scope.chefArray[i].lastName)) {
        $scope.chef = $scope.chefArray[i];
      }
    }
  }
  setChef();
});

app.controller('eatCheckoutCTRL', function ($scope, $sce, checkoutFCTRL, passUser) {
    $scope.tabs[2].active = true;
    $scope.dish = checkoutFCTRL.input1 || ""
    $scope.input1=  $scope.dish.displayName || "Food Stuff"; //Dish Name
    $scope.input2= checkoutFCTRL.input2 || "100";  //Servings
    $scope.input3= checkoutFCTRL.input3 || "10000";  //Total in pennies
    $scope.chef = checkoutFCTRL.input4 || "";
    $scope.chefLastName = $scope.chef.lastName || "Khushnood"
    $scope.dishPic = $scope.dish.picture || "img/chickenBriyani.png";
    $scope.chefPic = $scope.chef.cookPic || "img/chefShay.png";
    $scope.total = ($scope.input3 / 100) || "";
    $scope.user = passUser.user || ""
    $scope.eatFirstName = $scope.user.firstName || "John";
    $scope.eatLastName = $scope.user.lastName || "Doe";
    $scope.date = new Date();
    $scope.datePlusOne = $scope.date.setDate($scope.date.getDate() + 1);
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

app.controller('eatUserProfileCTRL', function ($scope, $sce, passUser) {
  $scope.tabs[4].active = true;
  $scope.eatFirstName = passUser.user.firstName || "";
  $scope.eatLastName = passUser.user.lastName || "";
  $scope.eatEmail = passUser.user.email || "";
  $scope.eatStreetAddress = passUser.user.streetAddress || "";
  $scope.eatCity = passUser.user.city || "";
  $scope.eatState = passUser.user.state || "";
  $scope.eatZipCode = passUser.user.zipCode || "";
  $scope.cuisines = passUser.user.cuisines || [
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

  $scope.refresh = function () {
    console.log(passUser);
  }
});

app.controller('eatReservationsCTRL', function ($scope, $sce) {
  $scope.tabs[3].active = true;
  function cook(cookID, first, last, email, phoneNumber, lattitude, longitude, menu, mainCusine) {
    this.cookID = cookID;
    this.firstName = first;
    this.lastName = last;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.lattitude = lattitude;
    this.longitude = longitude
    this.menu = menu;
    this.mainCuisine = mainCusine;
  }

  function menu(dish1, dish2, dish3) {
    this.dish1 = dish1;
    this.dish2 = dish2;
    this.dish3 = dish3;
  }

  function dish(displayName, costPerServing, ingredients, maxServings, cuisineType, picture) {
    this.displayName = displayName;
    this.costPerServing = costPerServing;
    this.ingredients = ingredients;
    this.maxServings = maxServings;
    this.cuisineType = cuisineType;
    this.picture = picture;
  }

  $scope.chickenBriyani = new dish("Chicken Briyani", 800, ["Chicken", "Rice", "Curry"], 4, "Pakistani", "img/chickenBriyani.png");
  $scope.spinichPaneer = new dish("Spinich Paneer", 600, ["Spinich", "Crepe"], 6, "Indian", "img/spinachPaneer.png");
  $scope.chanaMasala = new dish("Chana Masala", 700, ["Curry", "Meat", "Chickpeas"], 8, "Indian", "img/chanaMasala.png");

  $scope.shayMenu = new menu($scope.chickenBriyani, $scope.spinichPaneer, $scope.chanaMasala);

  $scope.shay = new cook(1000000001, "Sheharyar", "Khushnood", "sherryBaby@gmail.com", "3133118008", 42.3314, 83.0458, $scope.shayMenu, "Pakistani");

  $scope.pasta = new dish("Simple Spinach Pasta", 800, ["Chicken", "Rice", "Curry"], 4, "Italian", "img/chickenBriyani.png");
  $scope.chickenScallopini = new dish("Chicken Scallopini", 600, ["Spinich", "Crepe"], 6, "Italian", "img/spinachPaneer.png");
  $scope.venetoChicken = new dish("Veneto Chicken", 700, ["Curry", "Meat", "Chickpeas"], 8, "Italian", "img/chanaMasala.png");

  $scope.mickeyMenu = new menu($scope.pasta, $scope.chickenScallopini, $scope.venetoChicken);

  $scope.mickey = new cook(1000000001, "Mickey", "Mouse", "sherryBaby@gmail.com", "3133118008", 42.3314, 83.0458, $scope.mickeyMenu, "Italian");

  $scope.chefArray = [$scope.shay, $scope.mickey]
});

app.factory('checkoutFCTRL', function(){
  var pmntInfoCont= {};
  pmntInfoCont.setData = function(input1, input2, input3, input4){
        this.input1 = input1; 
        this.input2 = input2;
        this.input3 = input3;
        this.input4 = input4;
      }
  return pmntInfoCont;
});

app.factory('chooseCook', function(){
  var cookName= {};
  cookName.setData = function(cook1){
        this.cook1 = cook1; 
  }
  return cookName;
});

app.controller('ModalDemoCtrl', function ($scope, $uibModal, $log) {

  $scope.items = ['item1', 'item2', 'item3'];

  $scope.animationsEnabled = true;

  $scope.openE = function (size) {

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
    $scope.closeE = function (size) {

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

  $scope.openC = function (size) {

    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'myModalContentC.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });
    $scope.closeC = function (size) {

    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'myModalContent2C.html',
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

app.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, items, passUser) {

  $scope.items = items;
  $scope.selected = {
    item: $scope.items[0]
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };

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

  function user() {
    this.firstName = $scope.eatFirstName || "";
    this.lastName = $scope.eatLastName || "";
    this.email = $scope.eatEmail || "";
    this.streetAddress = $scope.eatStreetAddress || "";
    this.city = $scope.eatCity || "",
    this.state = $scope.eatState || "",
    this.zipCode = $scope.eatZipCode || "",
    this.cuisines = $scope.cuisines || []
  }


  $scope.okE = function () {
    $scope.userInfo = new user();
    passUser.setData($scope.userInfo);
    $uibModalInstance.close($scope.selected.item);
    $( "#eatSide" ).removeClass("ng-hide");
    $( "#cookSide" ).addClass("ng-hide");
    window.location.href ="#eatServices";
  };
  $scope.okC = function () {
    $scope.userInfo = new user();
    passUser.setData($scope.userInfo);
    $uibModalInstance.close($scope.selected.item);
    console.log($( "#eatSide" ).get( 0 ));
    $( "#eatSide" ).addClass("ng-hide");
    $( "#cookSide" ).removeClass("ng-hide");
    window.location.href ="#cookServices";
  };
  $scope.existingE = function () {
    $uibModalInstance.close($scope.selected.item);
    $( "#eatSide" ).removeClass("ng-hide");
    $( "#cookSide" ).addClass("ng-hide");
    window.location.href ="#eatServices";
  };
  $scope.existingC = function () {
    $uibModalInstance.close($scope.selected.item);
    console.log($( "#eatSide" ).get( 0 ));
    $( "#eatSide" ).addClass("ng-hide");
    $( "#cookSide" ).removeClass("ng-hide");
    window.location.href ="#cookServices";
  };
});

app.factory('passUser', function(){
  var userInfo= {};
  userInfo.setData = function(user){
    this.user = user;
  }
  return userInfo;
});