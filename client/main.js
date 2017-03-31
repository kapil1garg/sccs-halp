import { GoogleMaps } from 'meteor/dburles:google-maps';
import { Meteor } from 'meteor/meteor';

Meteor.startup(function () {
  GoogleMaps.load({ key: Meteor.settings.public.gmapsapi });
});