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



Template.schedule.onCreated( function() {
  //Scrollspy initialisation
  $('body').scrollspy({ target: '.navbar-fixed-top' });
});

Template.schedule.onRendered( function() {
  // Calendar events
  $('#calendar').fullCalendar({
    events: [
        {
          title:"Weekly Goal Setting",
          start: '10:00',
          end: '14:00',
          dow: [ 1 ]
        },
        {
          title:"Founder's Lunch",
          start: '11:30',
          end: '13:00',
          dow: [ 2 ]
        },
        {
          title:"Breakout Session",
          start: '09:00',
          end: '01:00',
          dow: [ 2 ]
        },
        {
          title:"On-site Visits",
          start: '10:00',
          end: '12:30',
          dow: [ 3 ]
        },
        {
          title:"Mid-week Presentation",
          start: '16:00',
          end: '17:30',
          dow: [ 3 ]
        },
        {
          title:"Fireside Chat",
          start: '17:00',
          end: '19:00',
          dow: [ 4 ]
        },
        {
          title:"Weekly Review",
          start: '15:00',
          end: '14:30',
          dow: [ 5 ]
        },
        {
          title:"Happy Hour",
          start: '17:00',
          end: '19:00',
          dow: [ 5 ]
        },
        {
          title:"May Planning",
          start: '2017-05-01 09:00',
        },
        {
          title:"Keith Lee",
          start: '2017-05-31 15:00',
        },
        {
          title:"Tania Rahman",
          start: '2017-05-31 17:00',
        },
        {
          title:"Pending",
          start: '2017-06-01 13:00',
        },
        {
          title:"June Planning",
          start: '2017-06-01 09:00',
        },
    ],
      defaultView: 'month',
      showNonCurrentDates: true,
      fixedWeekCount: false,
      dayClick: function(date, allDay, jsEvent, view) {
        if (allDay) {
          console.log('A day has been clicked!');
        }
      }
});
});

Template.schedule.helpers({
  options: function() {
    return {
      defaultView: 'month',
      showNonCurrentDates: true,
      fixedWeekCount: false,
      dayClick: function(date, allDay, jsEvent, view) {
        if (allDay) {
          console.log('A day has been clicked!');
        }
      }
    };
  },
});

Template.schedule.events({
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
