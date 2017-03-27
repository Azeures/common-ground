import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { FlowRouter } from 'meteor/kadira:flow-router';
import bootbox from 'bootbox';
import $ from 'jquery';
import { HTTP } from 'meteor/http';

import './main.html';
import './landing.html'
import './kitchen.html'



Template.kitchen.onCreated( function() {
  //Scrollspy initialisation
  $('body').scrollspy({ target: '.navbar-fixed-top' });
});

Template.kitchen.helpers({

});

Template.kitchen.events({
  'click #landing'(event) {
    FlowRouter.go('Pages.landing');
  },

  'click #kitchen-landing'(event) {
    FlowRouter.go('Pages.landing');
    setTimeout(function() {
      document.location = '#welcome';
    }, 0);
  },

  'click #kitchen-info'(event) {
    FlowRouter.go('Pages.kitchen');
  },

  'click #kitchen-features'(event) {
    FlowRouter.go('Pages.landing.overview');
    setTimeout(function() {
      document.location = '#overview';
    }, 0);
  },

  'click #kitchen-overview'(event) {
    FlowRouter.go('Pages.landing.overview');
    setTimeout(function() {
      document.location = '#overview';
    }, 0);
  },

  'click #kitchen-pricing'(event) {
    FlowRouter.go('Pages.landing.pricing');
    setTimeout(function() {
      document.location = '#pricing';
    }, 0);
  },

  'submit .kitchen-form'(event, template) {
    event.preventDefault();
    const first = $('#first-name').val();
    const last = $('#last-name').val();
    const email = $('#email').val();
    const biz = $('#biz-type').val();
    const food = $('#food-type').val();
    let contact = $('#contact-me').val();
    if (contact !== 'on') {
      contact = 'no';
    }
    let postURL = 'https://docs.google.com/forms/d/e/1FAIpQLSfzQWBuhPYtpDrKZd-FutfqPi3qB5V8Ohd013GewK-AYMO3JA/formResponse?';
    let formResponse = 'entry.542517984=' + first + '&entry.1124660972=' + last + '&entry.860225029=' + email + '&entry.1355391318=' + biz + '&entry.1537984995=' + food + '&entry.835642081=' + contact + '&entry.442779275=kitchenForm&submit=-3661640820707724262';
    postURL += formResponse;
    HTTP.call('GET', postURL, {}, function(){
      let confirmModal = bootbox.dialog({
        message: '<p class="text-center">Thank you! We will contact you shortly.</p>',
        buttons: [
          {
            label: "Awesome!",
            className: "btn btn-success pull-right",
            }
        ]
      });
    });
    console.log(postURL);
    console.log('submitted!');
  }
});
