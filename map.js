
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


var app = angular.module('geolocationDemo', ['ngGeolocation'])
  app.controller('AppController', function($scope, $geolocation){

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
         marker.content = '<div class="infoWindowContent">' + info.contact + '</div>';

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


  