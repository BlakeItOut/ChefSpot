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

app.controller('mainCookCTRL', function ($scope, $sce, $location) {
  $scope.go = function (path) {
    $location.path(path);
  }
 $scope.tabcs = [
  {title: "Your Menu", goHere: '/MenuSet'},
  {title: "Your Availability", goHere: '/Availability'},
  {title: "User Profile", goHere: '/CookProf'}
  ]
})
// app.factory('createCookMenuF', function(){

//   var fullMenuOpts = [
//   {MealName: null , MaxServings: 0 , PricePerServ: 00.00 , MealImage: null , Ingredients: [] , Cuisines: [], reated: false},
//   {MealName: null , MaxServings: 0 , PricePerServ: 00.00 , MealImage: null , Ingredients: [] , Cuisines: [], reated: false},
//   {MealName: null , MaxServings: 0 , PricePerServ: 00.00 , MealImage: null , Ingredients: [] , Cuisines: [], reated: false}
//   ];

//   fullMenuOpts.setData = function(input1, input2, input3, input4, input5){
//     this.input1 = fullMenuOpts[i].MealName;
//     this.input2 = fullMenuOpts[i].MaxServings;
//     this.input3 = fullMenuOpts[i].PricePerServ;
//     this.input4 = fullMenuOpts[i].MealImage;
//     this.input5 = fullMenuOpts[i].Ingredients;
//     this.input6 = fullMenuOpts[i].Cuisines;
//   }

// }return fullMenuOpts;

// });

app.controller('cookMenuSetCTRL', function(createCookMenuF){

  function setToDishFill(){
    $("select")
      .change(function(){
        $("select option: selected").each(function(){
          
        });
        $("div").text(str);
      })
      .trigger("change");
  }

  function setDish() {
    $scope.createCookMenuF= createCookMenuF;
    $scope.input1= createCookMenuF.input1;
    $scope.input2= createCookMenuF.input2;
    $scope.input3= createCookMenuF.input3;
    $scope.input4= createCookMenuF.input4;
    $scope.input5= createCookMenuF.input5;
    $scope.input6= createCookMenuF.input6;
  }

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


})

app.controller('cookAvailabilityCTRL', function(){

  self = this;
  self.someProp = 'Check This value displays.. confirms controller initalised'
  self.opened = {};
  self.open = function($event) {

    $event.preventDefault();
    $event.stopPropagation();

    self.opened = {};
    self.opened[$event.target.id] = true;

    // log this to check if its setting the log    
    console.log(self.opened);
    
  };

  self.format = 'dd-MM-yyyy'

})

app.controller('cookCookProfCTRL', function(){

})

app.controller('mainCTRL', function ($scope, $sce, $location) {
  $scope.go = function (path) {
    $location.path(path);
  }
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
    } 
var cooks = [
    {
        name : 'Sheharyar Khushnood',
        cuisine : 'Pakistani',
        lat : 42.7000,
        long : -83.4000
    },
    // {
    //     name : 'Blake Shawn',
    //     cuisine : 'Thai',
    //     lat : 42.6700,
    //     long : -83.9400
    // },
    {
        name : 'Fernando Alonso',
        cuisine : 'Thai',
        lat : 42.8819,
        long : -83.6278
    },
    {
        name : 'Scarlett Johansson',
        cuisine : 'Mexican',
        lat : 42.0500,
        long : -83.2500
    },
    {
        name : 'Mickey Mouse',
        cuisine : 'Italian',
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
    zoom: 6
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
            infoWindow.setContent("<a href='#/menu#eatServices' ng-click='cookget()'>" + cookTitle + '</a>' + marker.content);
            infoWindow.open($scope.map, marker);

            // console.log(google.maps.event.marker)
        });
          //var cookget = men();
  
        // console.log(createMarker.title);
        
        // $scope.experiment = function(){
        //   console.log("anything working whatever");
        //   chooseCook.setData($marker.title);
        // };
        $scope.markers.push(marker);
        
    }

    
    
    for (i = 0; i < cooks.length; i++){
        createMarker(cooks[i]);
    }

    $scope.openInfoWindow = function(e, selectedMarker){
        e.preventDefault();
        google.maps.event.trigger(selectedMarker, 'click');
    }
    // $geolocation.watchPosition({
    //   // timeout: 60000,
    //   maximumAge: 2,
    //   enableHighAccuracy: true
    // });

    });
       
       // $scope.lat = Math.round($geolocation.position.coords.latitude);
       // $scope.lng = Math.round($geolocation.position.coords.longitude);

    
  
    // regular updates
    
    //console.log(cookget);
  });

app.controller('eatMenuCTRL', function ($scope, $sce, checkoutFCTRL, chooseCook) {
  $scope.tabs[1].active = true;
  $scope.chef = chooseCook.chef;
  $scope.submitter= function(){
      $scope.input4 = $scope.chef;
      if ($scope.radioModel === "Option 1") {
        $scope.input1 = $scope.chef.menu.dish1;
        $scope.input2 = $scope.Servings1;
        $scope.input3 = $scope.chef.menu.dish1.costPerServing*$scope.Servings1;   
      } else if ($scope.radioModel === "Option 2") {
        $scope.input1 = $scope.chef.menu.dish2;
        $scope.input2 = $scope.Servings2;
        $scope.input3 = $scope.chef.menu.dish2.costPerServing*$scope.Servings2;  
      } else if ($scope.radioModel === "Option 3") {
        $scope.input1 = $scope.chef.menu.dish3;
        $scope.input2 = $scope.Servings3;
        $scope.input3 = $scope.chef.menu.dish3.costPerServing*$scope.Servings3;
      }
      checkoutFCTRL.setData($scope.input1, $scope.input2, $scope.input3, $scope.input4);
  }
});

app.controller('eatCheckoutCTRL', function ($scope, $sce, checkoutFCTRL, passUser, reservationMaker) {
    $scope.tabs[2].active = true;
    $scope.dish = checkoutFCTRL.input1 || ""; //Dish object
    $scope.input1=  $scope.dish.displayName || "Food Stuff"; //Dish Name
    $scope.input2= checkoutFCTRL.input2 || "100";  //Servings
    $scope.input3= checkoutFCTRL.input3 || "10000";  //Total in pennies
    $scope.chef = checkoutFCTRL.input4 || ""; //Chef object
    $scope.chefLastName = $scope.chef.lastName || "Khushnood" 
    $scope.dishPic = $scope.dish.picture || "img/chickenBriyani.png";
    $scope.chefPic = $scope.chef.cookPic || "img/chefShay.png";
    $scope.total = ($scope.input3 / 100) || "";
    $scope.user = passUser.user || ""
    $scope.eatFirstName = $scope.user.firstName || "John";
    $scope.eatLastName = $scope.user.lastName || "Doe";
    $scope.date = new Date();
    $scope.datePlusOne = $scope.date.setDate($scope.date.getDate() + 1);
    $scope.dishDescription = $scope.input2 + " Servings of Delicious";
    $scope.reservation = new Object();
    $scope.reservation.chef = $scope.chef;
    $scope.reservation.date = $scope.datePlusOne;
    $scope.reservation.dish = $scope.dish;
    $scope.payment = $scope.input3*1.01
    $scope.confirm = function(){
      console.log($scope.reservations)
      reservationMaker.addReservation($scope.reservation);
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
        name: $scope.input1,
        description: $scope.dishDescription,
        zipCode: true,
        amount: $scope.payment
      });
  }
});

app.controller('eatReservationsCTRL', function ($scope, $sce, reservationMaker) {
  $scope.tabs[3].active = true;
  $scope.reservations = reservationMaker.reservations;
  $scope.date = new Date();

  $scope.pastReservations = [
  {displayName: "Fennel Risotto", date:$scope.date.setDate($scope.date.getDate() - 2), lastName: "Batelli"},
  {displayName: "Lobster Bisque", date:$scope.date.setDate($scope.date.getDate() - 10), lastName: "Wolfgang"},
  {displayName: "BBQ Ribs", date:$scope.date.setDate($scope.date.getDate() - 15), lastName: "Crockett"}
  ]
});

app.factory('reservationMaker', function(){
  var reservationMaker = {};
  reservationMaker.reservations = [];
  reservationMaker.addReservation = function(newReservation){
    reservationMaker.reservations.push(newReservation);
    console.log(reservationMaker.reservations);          
  }
  return reservationMaker;
});

app.controller('eatUserProfileCTRL', function ($scope, $sce, passUser) {
  $scope.tabs[4].active = true;
  $scope.user = passUser.user || ""
  $scope.eatFirstName = $scope.user.firstName || "";
  $scope.eatLastName = $scope.user.lastName || "";
  $scope.eatEmail = $scope.user.email || "";
  $scope.eatStreetAddress = $scope.user.streetAddress || "";
  $scope.eatCity = $scope.user.city || "";
  $scope.eatState = $scope.user.state || "";
  $scope.eatZipCode = $scope.user.zipCode || "";
  $scope.cuisines = $scope.user.cuisines || [
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

var chickenBriyani = new dish("Chicken Briyani", 800, ["Chicken", "Rice", "Curry"], 4, "Pakistani", "img/chickenBriyani.png");
var spinichPaneer = new dish("Spinich Paneer", 600, ["Spinich", "Crepe"], 6, "Indian", "img/spinachPaneer.png");
var chanaMasala = new dish("Chana Masala", 700, ["Curry", "Meat", "Chickpeas"], 8, "Indian", "img/chanaMasala.png");

var shayMenu = new menu(chickenBriyani, spinichPaneer, chanaMasala);

var shay = new cook(1000000001, "img/chefShay.png", "Sheharyar", "Khushnood", "sherryBaby@gmail.com", "3133118008", 42.3314, 83.0458, shayMenu, "Pakistani");

var pasta = new dish("Simple Spinach Pasta", 800, ["Chicken", "Rice", "Curry"], 4, "Italian", "img/pasta.jpeg");
var chickenScallopini = new dish("Chicken Scallopini", 600, ["Spinich", "Crepe"], 6, "Italian", "img/chickenscal.jpg");
var venetoChicken = new dish("Veneto Chicken", 700, ["Curry", "Meat", "Chickpeas"], 8, "Italian", "img/veneto.jpg");

var mickeyMenu = new menu(pasta, chickenScallopini, venetoChicken);
var mickey = new cook(1000000005, "img/mickeyMouse.png", "Mickey", "Mouse", "sherryBaby@gmail.com", "3133118008", 42.3314, 83.0458, mickeyMenu, "Italian");

var chimi = new dish("Chicken Chimi in the Oven", 800, ["Chicken", "Rice", "Curry"], 4, "Mexican", "img/chimi.jpg");
var Carnitas = new dish("Slow Cooker Carnitas", 600, ["Spinich", "Crepe"], 6, "Mexican", "img/fishtacos.jpg");
var fishTacos = new dish("Fish Tacos", 700, ["Curry", "Meat", "Chickpeas"], 8, "Mexican", "img/carni.jpg");

var scarlettMenu = new menu(chimi, Carnitas, fishTacos);

var scarlett = new cook(1000000003, "img/scarlett.jpg", "Scarlett", "Johansson", "sherryBaby@gmail.com", "3133118008", 42.3314, 83.0458, scarlettMenu, "Mexican");

var padThai = new dish("Pad Thai With Chicken and Shrimp", 800, ["Chicken", "Rice", "Curry"], 4, "Mexican", "img/padthai.jpg");
var slowCooker = new dish("Slow Cooker Chicken ", 600, ["Spinich", "Crepe"], 6, "Mexican", "img/slowcook.jpg");
var peanutSauce = new dish("Thai Noodles With Spicy Peanut Sauce", 700, ["Curry", "Meat", "Chickpeas"], 8, "Thai", "img/thainod.jpg");

var fernandoMenu = new menu(padThai, slowCooker, peanutSauce);

var fernando = new cook(1000000004, "img/fernando.jpg", "Fernando", "Alonso", "sherryBaby@gmail.com", "3133118008", 42.3314, 83.0458, fernandoMenu, "Mexican");

var chefArray = [shay, mickey, fernando, scarlett];

  var cookName= {};
  cookName.setData = function(cook1){
        for(i=0; i<chefArray.length; i++) {
          if(cook1 === (chefArray[i].firstName + " " + chefArray[i].lastName)) {
            this.chef = chefArray[i];
          }
        } 
  }
  return cookName;
});

app.controller('ModalDemoCtrl', function ($scope, $uibModal, $log) {

  $scope.items = ['item1', 'item2', 'item3'];

  $scope.animationsEnabled = true;

  $scope.openE = function (size) {

    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'modals/myModalContent.html',
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


  $scope.openC = function (size) {
    console.log("fcerfcwfczwf");
    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'modals/myModalContentC.html',
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
    window.location.href ="#/#eatServices";
  };
  $scope.okC = function () {
    $scope.userInfo = new user();
    passUser.setData($scope.userInfo);
    $uibModalInstance.close($scope.selected.item);
    $( "#eatSide" ).addClass("ng-hide");
    $( "#cookSide" ).removeClass("ng-hide");
    window.location.href ="#/MenuSet#cookServices";
  };
  $scope.existingE = function () {
    $uibModalInstance.close($scope.selected.item);
    $( "#eatSide" ).removeClass("ng-hide");
    $( "#cookSide" ).addClass("ng-hide");
    window.location.href ="#/#eatServices";
  };
  $scope.existingC = function () {
    $uibModalInstance.close($scope.selected.item);
    $( "#eatSide" ).addClass("ng-hide");
    $( "#cookSide" ).removeClass("ng-hide");
    window.location.href ="#/MenuSet#cookServices";
  };
});

app.factory('passUser', function(){
  var userInfo= {};
  userInfo.setData = function(user){
    this.user = user;
  }
  return userInfo;
});