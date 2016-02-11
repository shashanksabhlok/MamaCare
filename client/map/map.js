if (Meteor.isClient) {
  var MAP_ZOOM = 9;
  var myLatLng = (-0.10778, 37.78084)

  Meteor.startup(function() {
    GoogleMaps.load();
  });


  Template.map.onCreated(function() {
    var self = this;


  GoogleMaps.ready('map', function(map) {

        var marker = new google.maps.Marker({
          position: map.options.center,
          map: map.instance
        });
         var marker = new google.maps.Marker({
          position: map.myLatLng,
          map: map.instance
        });

        });
      });


  Template.map.helpers({
    // geolocationError: function() {
    //   var error = Geolocation.error();
    //   return error && error.message;
    // },
    mapOptions: function() {
      // var latLng = latLng();
      // Initialize the map once we have the latLng.
      if (GoogleMaps.loaded() ) {
        return {
          center: new google.maps.LatLng(0.132391, 37.626217),
          zoom: MAP_ZOOM
        };


      }
    }
  });
}