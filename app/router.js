import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('home', {path : '/'});
  this.resource('devices', {path : '/devices'}, function() {
    this.route('info', {path : ':id/info'});
  });
  this.route('share', {path : '/share'});
});

export default Router;
