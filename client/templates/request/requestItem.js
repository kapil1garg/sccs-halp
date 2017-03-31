import { Template } from 'meteor/templating';
import { GoogleMaps } from 'meteor/dburles:google-maps';

Template.requestItem.helpers({
  mapOptions: function() {
    // Make sure the maps API has loaded
    if (GoogleMaps.loaded()) {
      // Map initialization options
      return {
        center: new google.maps.LatLng(this.location.latitude, this.location.longitude),
        zoom: 17,
      };
    }
  },
  mapName: function() {
    return this.id
  },
  isEasy() {
    return this.confusionLevel == 'low';
  },
  isMedium() {
    return this.confusionLevel == 'medium';
  },
  isHard() {
    return this.confusionLevel == 'high';
  }
});

Template.requestItem.onCreated(function() {
  GoogleMaps.ready(this.data.id, function(map) {
    // Add a marker to the map once it's ready
    var marker = new google.maps.Marker({
      position: map.options.center,
      map: map.instance
    });
  });
});