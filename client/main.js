import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import bootbox from 'bootbox';
import $ from 'jquery';

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
      let modal = bootbox.dialog({
      message: $('.form-content').html(),
      title: "You have selected the <strong>Starter</strong> plan",
      buttons: [
        {
          label: "Cancel",
          className: "btn btn-default pull-right",
          callback: function() {
            console.log("just do something on close");
          }
        },
        {
          label: "Submit",
          className: "btn btn-primary pull-right",
          callback: function() {
            var form = modal.find(".form");
            var items = form.serialize();

            console.log(items);

            /* This part you have to complete yourself :D
            if (your_form_validation(items)) {
              // Make your data save as async and then just call modal.modal("hide");
            } else {
              // Show some errors, etc on form
            }
            */
            modal.modal("hide");

            let confirmModal = bootbox.dialog({
              message: '<p class="text-center">You have successfully signed up!</p>',
              buttons: [
                {
                  label: "Awesome!",
                  className: "btn btn-success pull-right",
                  }
              ]
            });

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
        $('.price-basic').css('transform', 'scale(1.08, 1.08)');
        $('.price-basic > article').css('box-shadow', '0 0 1em gold');
    },
    mouseleave: function() {
        $('.price-basic').css('transform', 'scale(1, 1)');
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
              console.log("just do something on close");
            }
          },
          {
            label: "Submit",
            className: "btn btn-primary pull-right",
            callback: function() {
              var form = modal.find(".form");
              var items = form.serialize();

              console.log(items);

              /* This part you have to complete yourself :D
              if (your_form_validation(items)) {
                // Make your data save as async and then just call modal.modal("hide");
              } else {
                // Show some errors, etc on form
              }
              */
              modal.modal("hide");

              let confirmModal = bootbox.dialog({
                message: '<p class="text-center">You have successfully signed up!</p>',
                buttons: [
                  {
                    label: "Awesome!",
                    className: "btn btn-success pull-right",
                    }
                ]
              });

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
        $('.price-pro').css('transform', 'scale(1.08, 1.08)');
        $('.price-pro > article').css('box-shadow', '0 0 1em gold');
    },
    mouseleave: function() {
        $('.price-pro').css('transform', 'scale(1, 1)');
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
            console.log("just do something on close");
          }
        },
        {
          label: "Submit",
          className: "btn btn-primary pull-right",
          callback: function() {
            var form = modal.find(".form");
            var items = form.serialize();

            console.log(items);

            /* This part you have to complete yourself :D
            if (your_form_validation(items)) {
              // Make your data save as async and then just call modal.modal("hide");
            } else {
              // Show some errors, etc on form
            }
            */
            modal.modal("hide");

            let confirmModal = bootbox.dialog({
              message: '<p class="text-center">You have successfully signed up!</p>',
              buttons: [
                {
                  label: "Awesome!",
                  className: "btn btn-success pull-right",
                  }
              ]
            });

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

// Template.main.onCreated(function siteOnCreated() {
// });
//
// Template.main.helpers({
// });
//
// Template.main.events({
// });
