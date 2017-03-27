import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import bootbox from 'bootbox';
import $ from 'jquery';
import { HTTP } from 'meteor/http';

import './main.html';
import './landing.html'



Template.landing.onCreated( function() {

});

Template.landing.helpers({

});

Template.landing.events({

});

FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render("landing", {content: "home"});
  }
});


FlowRouter.route('/kitchen', {
  action: function() {
    BlazeLayout.render("kitchen", {content: "kitchenInfo"});
  }
});
