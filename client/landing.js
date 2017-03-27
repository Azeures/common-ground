import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { FlowRouter } from 'meteor/kadira:flow-router';
import bootbox from 'bootbox';
import $ from 'jquery';
import { HTTP } from 'meteor/http';

import './main.html';
import './landing.html'
import './kitchen.html'



Template.landing.onCreated( function() {
  //Scrollspy initialisation
  $('body').scrollspy({ target: '.navbar-fixed-top' });
});

Template.landing.helpers({

});

Template.landing.events({
  'click #landing'(event) {
    FlowRouter.go('Pages.landing');
  },

  'click #kitchen-info'(event) {
    FlowRouter.go('Pages.kitchen');
  },
});
