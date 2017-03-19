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

$(document).on({
    mouseenter: function() {
        $('.price-starter').css('transform', 'scale(1.08, 1.08)');
        $('.price-starter > article').css('box-shadow', '0 0 1em gold');
    },
    mouseleave: function() {
        $('.price-starter').css('transform', 'scale(1, 1)');
        $('.price-starter > article').css('box-shadow', 'none');
    },
    click: function() {
        console.log('click');
    }
}, ".price-starter");

$(document).on({
    mouseenter: function() {
        $('.price-basic').css('transform', 'scale(1.08, 1.08)');
        $('.price-basic > article').css('box-shadow', '0 0 1em gold');
    },
    mouseleave: function() {
        $('.price-basic').css('transform', 'scale(1, 1)');
        $('.price-basic > article').css('box-shadow', 'none');
    },
    click: function() {
        console.log('click');
    }
}, ".price-basic");

$(document).on({
    mouseenter: function() {
        $('.price-pro').css('transform', 'scale(1.08, 1.08)');
        $('.price-pro > article').css('box-shadow', '0 0 1em gold');
    },
    mouseleave: function() {
        $('.price-pro').css('transform', 'scale(1, 1)');
        $('.price-pro > article').css('box-shadow', 'none');
    },
    click: function() {
        console.log('click');
    }
}, ".price-pro");

// Template.main.onCreated(function siteOnCreated() {
// });
//
// Template.main.helpers({
// });
//
// Template.main.events({
// });
