import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 150) {
    $('.nav-fixed').fadeIn('slow');
    $('.nav-fixed').css('display', 'block');
  } else {
    $('.nav-fixed').fadeOut('slow');
    // $('.nav-fixed').css('display', 'none');
  }
});

$('.price-selector').hover(function() {
  $('.price-selector').css('display', 'none');
});

// Template.main.onCreated(function siteOnCreated() {
// });
//
// Template.main.helpers({
// });
//
// Template.main.events({
// });
