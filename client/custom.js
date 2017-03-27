import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { FlowRouter } from 'meteor/kadira:flow-router';
import bootbox from 'bootbox';
import $ from 'jquery';
import { HTTP } from 'meteor/http';

import './main.html';
import './landing.html'

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 150) {
    $('.nav-fixed').fadeIn('slow');
    $('.nav-fixed').css('display', 'block');
  } else {
    $('.nav-fixed').fadeOut('slow');
    $('.mobile-nav-menu').css('display', 'none');
    $('.mobile-nav-menu').fadeOut('slow');
    // $('.nav-fixed').css('display', 'none');
  }
});

$('.price-selector').hover(function() {
  $('.price-selector').css('display', 'none');
});

$(document).on({
    mouseenter: function() {
        // $('.price-starter').css('transform', 'scale(1.08, 1.08)');
        $('.price-starter > article').css('box-shadow', '0 0 1em gold');
        $('.starter-btn').css('opacity', '100');
    },
    mouseleave: function() {
        // $('.price-starter').css('transform', 'scale(1, 1)');
        $('.starter-btn').css('opacity', '0');
        $('.price-starter > article').css('box-shadow', 'none');
    },
    click: function() {
      let modal = bootbox.dialog({
      message: $('.form-content').html(),
      title: "You have selected the <strong>Starter</strong> plan",
      buttons: [
        {
          label: "Cancel",
          className: "btn btn-default pull-right",
          callback: function() {
          }
        },
        {
          label: "Submit",
          className: "btn btn-primary pull-right",
          callback: function() {
            let form = modal.find(".form");
            let items = form.serialize();
            let checkLastInput = items.substring(items.length - 2);

            if (checkLastInput !== 'on') {
              items += '&entry.835642081=no';
            }

            items += '&entry.442779275=STARTER'

            let postURL = 'https://docs.google.com/forms/d/e/1FAIpQLSfzQWBuhPYtpDrKZd-FutfqPi3qB5V8Ohd013GewK-AYMO3JA/formResponse?'
            + items + '&submit=-3661640820707724262';

            HTTP.call('GET', postURL, {}, function(){
              console.log('http success');
              let confirmModal = bootbox.dialog({
                message: '<p class="text-center">You have successfully signed up!</p>',
                buttons: [
                  {
                    label: "Awesome!",
                    className: "btn btn-success pull-right",
                    }
                ]
              });
            });

            modal.modal("hide");

            return false;
          }
        }
      ],
      show: false,
      onEscape: function() {
        modal.modal("hide");
      }
  });

  modal.modal("show");
    }
}, ".price-starter");

$(document).on({
    mouseenter: function() {
        // $('.price-basic').css('transform', 'scale(1.08, 1.08)');
        $('.basic-btn').css('opacity', '100');
        $('.price-basic > article').css('box-shadow', '0 0 1em gold');
    },
    mouseleave: function() {
        // $('.price-basic').css('transform', 'scale(1, 1)');
        $('.basic-btn').css('opacity', '0');
        $('.price-basic > article').css('box-shadow', 'none');
    },
    click: function() {
        let modal = bootbox.dialog({
        message: $('.form-content').html(),
        title: "You have selected the <strong>Basic</strong> plan",
        buttons: [
          {
            label: "Cancel",
            className: "btn btn-default pull-right",
            callback: function() {
            }
          },
          {
            label: "Submit",
            className: "btn btn-primary pull-right",
            callback: function() {
              let form = modal.find(".form");
              let items = form.serialize();
              let checkLastInput = items.substring(items.length - 2);

              if (checkLastInput !== 'on') {
                items += '&entry.835642081=no';
              }

              items += '&entry.442779275=BASIC'

              let postURL = 'https://docs.google.com/forms/d/e/1FAIpQLSfzQWBuhPYtpDrKZd-FutfqPi3qB5V8Ohd013GewK-AYMO3JA/formResponse?'
              + items + '&submit=-3661640820707724262';

              console.log(postURL);

              // $.get(postURL,function() {
              //   console.log('success!');
              // });

              HTTP.call('GET', postURL, {}, function(){
                console.log('http success');
                let confirmModal = bootbox.dialog({
                  message: '<p class="text-center">You have successfully signed up!</p>',
                  buttons: [
                    {
                      label: "Awesome!",
                      className: "btn btn-success pull-right",
                      }
                  ]
                });
              });

              modal.modal("hide");

              return false;
            }
          }
        ],
        show: false,
        onEscape: function() {
          modal.modal("hide");
        }
    });

    modal.modal("show");

    }
}, ".price-basic");

$(document).on({
    mouseenter: function() {
        // $('.price-pro').css('transform', 'scale(1.08, 1.08)');
        $('.pro-btn').css('opacity', '100');
        $('.price-pro > article').css('box-shadow', '0 0 1em gold');
    },
    mouseleave: function() {
        // $('.price-pro').css('transform', 'scale(1, 1)');
        $('.pro-btn').css('opacity', '0');
        $('.price-pro > article').css('box-shadow', 'none');
    },
    click: function() {
      let modal = bootbox.dialog({
      message: $('.form-content').html(),
      title: "You have selected the <strong>Pro</strong> plan",
      buttons: [
        {
          label: "Cancel",
          className: "btn btn-default pull-right",
          callback: function() {
          }
        },
        {
          label: "Submit",
          className: "btn btn-primary pull-right",
          callback: function() {
            let form = modal.find(".form");
            let items = form.serialize();
            let checkLastInput = items.substring(items.length - 2);

            if (checkLastInput !== 'on') {
              items += '&entry.835642081=no';
            }

            items += '&entry.442779275=PRO'

            let postURL = 'https://docs.google.com/forms/d/e/1FAIpQLSfzQWBuhPYtpDrKZd-FutfqPi3qB5V8Ohd013GewK-AYMO3JA/formResponse?'
            + items + '&submit=-3661640820707724262';

            HTTP.call('GET', postURL, {}, function(){
              let confirmModal = bootbox.dialog({
                message: '<p class="text-center">You have successfully signed up!</p>',
                buttons: [
                  {
                    label: "Awesome!",
                    className: "btn btn-success pull-right",
                    }
                ]
              });
            });

            modal.modal("hide");

            return false;
          }
        }
      ],
      show: false,
      onEscape: function() {
        modal.modal("hide");
      }
  });

  modal.modal("show");
    }
}, ".price-pro");

$(document).on({
    click: function() {
      let modal = bootbox.dialog({
      message: $('.form-content').html(),
      title: "Tell us more about yourself!",
      buttons: [
        {
          label: "Cancel",
          className: "btn btn-default pull-right",
          callback: function() {
          }
        },
        {
          label: "Submit",
          className: "btn btn-primary pull-right",
          callback: function() {
            let form = modal.find(".form");
            let items = form.serialize();
            let checkLastInput = items.substring(items.length - 2);

            if (checkLastInput !== 'on') {
              items += '&entry.835642081=no';
            }

            items += '&entry.442779275=SUBSCRIBE4UPDATES'

            let postURL = 'https://docs.google.com/forms/d/e/1FAIpQLSfzQWBuhPYtpDrKZd-FutfqPi3qB5V8Ohd013GewK-AYMO3JA/formResponse?'
            + items + '&submit=-3661640820707724262';

            HTTP.call('GET', postURL, {}, function(){
              let confirmModal = bootbox.dialog({
                message: '<p class="text-center">You have been subscribed.</p>',
                buttons: [
                  {
                    label: "Awesome!",
                    className: "btn btn-success pull-right",
                    }
                ]
              });
            });

            modal.modal("hide");

            return false;
          }
        }
      ],
      show: false,
      onEscape: function() {
        modal.modal("hide");
      }
  });

  modal.modal("show");
    }
}, "#subscribe");


$(document).on({
    click: function() {
      let modal = bootbox.dialog({
      message: $('.form-content').html(),
      title: "Tell us more about yourself!",
      buttons: [
        {
          label: "Cancel",
          className: "btn btn-default pull-right",
          callback: function() {
          }
        },
        {
          label: "Submit",
          className: "btn btn-primary pull-right",
          callback: function() {
            let form = modal.find(".form");
            let items = form.serialize();
            let checkLastInput = items.substring(items.length - 2);

            if (checkLastInput !== 'on') {
              items += '&entry.835642081=no';
            }

            items += '&entry.442779275=DEMO-PLS'

            let postURL = 'https://docs.google.com/forms/d/e/1FAIpQLSfzQWBuhPYtpDrKZd-FutfqPi3qB5V8Ohd013GewK-AYMO3JA/formResponse?'
            + items + '&submit=-3661640820707724262';

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

            modal.modal("hide");

            return false;
          }
        }
      ],
      show: false,
      onEscape: function() {
        modal.modal("hide");
      }
  });

  modal.modal("show");
    }
}, "#demo-req");


$(document).on({
    click: function() {
      const state = $('.nav-menu').css('display');

      if (state === 'block') {
        $('.nav-menu').css('display', 'none');
      } else {
        $('.nav-menu').css('display', 'block');
      }
    }
}, ".nav-toggle");

$(document).on({
    click: function() {
      const state = $('.nav-menu').css('display');

      if (state === 'block') {
        $('.nav-menu').fadeOut('slow');
        $('.nav-menu').css('display', 'none');
      }
    }
}, ".mobile-tab");

// Form Response
// https://docs.google.com/forms/d/e/1FAIpQLSfzQWBuhPYtpDrKZd-FutfqPi3qB5V8Ohd013GewK-AYMO3JA/formResponse

// First Name
// entry.542517984

// Last Name
// entry.1124660972

// Email
// entry.860225029

// Existing Business
// entry.1355391318

// What you wanna start?
// entry.1537984995

// Contact Me
// entry.835642081

// &submit
// submit=-3661640820707724262

// Final URL
// https://docs.google.com/forms/d/e/1FAIpQLSfzQWBuhPYtpDrKZd-FutfqPi3qB5V8Ohd013GewK-AYMO3JA/formResponse?entry.542517984=testFirst&entry.1124660972=testLast&entry.860225029=somethingEmail&entry.1355391318=Cafe&entry.835642081=Yes&submit=-3661640820707724262



// entry.542517984=first&entry.1124660972=last&entry.860225029=email%40asdas.asdasd&entry.1355391318=food&entry.835642081=on
