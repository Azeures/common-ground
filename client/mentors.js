import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { FlowRouter } from 'meteor/kadira:flow-router';
import bootbox from 'bootbox';
import $ from 'jquery';
import { HTTP } from 'meteor/http';

import './main.html';
import './landing.html'
import './kitchen.html'
import './mentors.html'



Template.mentors.onCreated( function() {
  //Scrollspy initialisation
  $('body').scrollspy({ target: '.navbar-fixed-top' });
});

Template.mentors.helpers({

});

Template.mentors.events({
  'click #landing'(event) {
    FlowRouter.go('Pages.landing');
  },

  'click #mentors-landing'(event) {
    FlowRouter.go('Pages.landing');
    setTimeout(function() {
      document.location = '#welcome';
    }, 0);
  },

  'click #mentors-kitchen'(event) {
    FlowRouter.go('Pages.kitchen');
  },

  'click #mentors-features'(event) {
    FlowRouter.go('Pages.landing.overview');
    setTimeout(function() {
      document.location = '#overview';
    }, 0);
  },

  'click #mentors-overview'(event) {
    FlowRouter.go('Pages.landing.overview');
    setTimeout(function() {
      document.location = '#overview';
    }, 0);
  },

  'click #mentors-pricing'(event) {
    FlowRouter.go('Pages.landing.pricing');
    setTimeout(function() {
      document.location = '#pricing';
    }, 0);
  },

  'click #mentors-info'(event) {
    FlowRouter.go('Pages.mentors');
  },

});
