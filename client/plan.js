import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { FlowRouter } from 'meteor/kadira:flow-router';
import fullcalendar from 'fullcalendar';
import bootbox from 'bootbox';
import $ from 'jquery';
import { HTTP } from 'meteor/http';

import './main.html';
import './landing.html'
import './kitchen.html'
import './mentors.html'
import './user.html'



Template.plan.onCreated( function() {
  //Scrollspy initialisation
  $('body').scrollspy({ target: '.navbar-fixed-top' });
});

Template.plan.helpers({

});

Template.plan.events({
  'click #landing'(event) {
    FlowRouter.go('Pages.landing');
  },

  'click #mentors-landing'(event) {
    FlowRouter.go('Pages.landing');
    setTimeout(function() {
      document.location = '#welcome';
    }, 0);
  },

  'click #mentors-info'(event) {
    FlowRouter.go('Pages.user.mentors');
  },

  'click #user-schedule'(event) {
    FlowRouter.go('Pages.user.schedule');
  },

  'click #user-mentors'(event) {
    FlowRouter.go('Pages.user.appointments');
  },

  'click #user-kitchen'(event) {
    FlowRouter.go('Pages.user.plan');
  },

  'click #users'(event) {
    FlowRouter.go('Pages.users');
  },

  'click #user-network'(event) {
    // FlowRouter.go('Pages.plan');
  },

  'mouseenter .user-kitchen-select'(event) {
    $('.user-kitchen-select').css('transform', 'scale(1.1, 1.1)');
  },
  'mouseleave .user-kitchen-select'(event) {
    $('.user-kitchen-select').css('transform', 'scale(1, 1)');
  },
  'mouseenter .user-mentor-select'(event) {
    $('.user-mentor-select').css('transform', 'scale(1.1, 1.1)');
  },
  'mouseleave .user-mentor-select'(event) {
    $('.user-mentor-select').css('transform', 'scale(1, 1)');
  },
  'mouseenter .user-schedule-select'(event) {
    $('.user-schedule-select').css('transform', 'scale(1.1, 1.1)');
  },
  'mouseleave .user-schedule-select'(event) {
    $('.user-schedule-select').css('transform', 'scale(1, 1)');
  },
  'mouseenter .user-network-select'(event) {
    $('.user-network-select').css('transform', 'scale(1.1, 1.1)');
  },
  'mouseleave .user-network-select'(event) {
    $('.user-network-select').css('transform', 'scale(1, 1)');
  },
});
