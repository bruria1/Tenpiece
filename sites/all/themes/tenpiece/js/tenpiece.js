/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {


// To understand behaviors, see https://drupal.org/node/756722#behaviors
Drupal.behaviors.my_custom_behavior = {
  attach: function(context, settings) {

/************  cart  **************/

if ($(".view-shopping-top-manu .button-cart").length != 0){
  $('.shoping-icon').addClass("not-empty");
}

$('.shoping-icon.not-empty').on('click', function() {
      $('#block-commerce-cart-cart').addClass("open");
      $('body').addClass("cart-open");
});
/*
if ( $( "body" ).hasClass( "node-type-product" ) ) {
  if ($('div.warning').length) {
        $('#block-commerce-cart-cart').addClass("open");
        $('body').addClass("cart-open");
  }
};
*/
$('#block-commerce-cart-cart .close-button').on('click', function() {
      $('#block-commerce-cart-cart').removeClass("open");
      $('body').removeClass("cart-open");
});

$('#main').on('click', function() {
      $('#block-commerce-cart-cart').removeClass("open");
      $('body').removeClass("cart-open");
});

/************  user menu  **************/

$("#open-menu").addClass("hide");

$(document).ready(function(){
    $(".menu-2084 a").hover(function(){
        $("#open-menu").addClass("display").removeClass("hide");
        },function(){
        $("#open-menu").addClass("hide").removeClass("display");
    });
    $("#open-menu").hover(function(){
        $("#open-menu").addClass("display").removeClass("hide");
        },function(){
        $("#open-menu").addClass("hide").removeClass("display");
    });
});

if ($("body").hasClass("page-node-add-product") || ($("body").hasClass("page-node-edit") && $("body").hasClass("node-type-product"))) {

  $("#edit-field-main-category-und-0-tid-select-1").change(function () {
    if ($(this).find("option:selected").val() == "7") {
           $("#edit-field-surface").css({ display: "block" });
    }
    else{
           $("#edit-field-surface").css({ display: "none" });
    }
  });

  $("#edit-field-main-category-und-0-tid-select-1").change(function () {
    if ($(this).find("option:selected").val() == "15") {
           $("#edit-field-material").css({ display: "block" });
    }
    else{
           $("#edit-field-material").css({ display: "none" });
    }
  });

  $("#edit-field-main-category-und-0-tid-select-1").change(function () {
    if ($(this).find("option:selected").val() == "10") {
           $("#edit-field-other").css({ display: "block" });
    }
    else{
           $("#edit-field-other").css({ display: "none" });
    }
  });

}

if ($("body").hasClass("front")){
  $('.arrow-bottom').click(function(){
    $("html, body").animate({ scrollTop: $("#block-views-products-block-1").offset().top -20 }, 2000);
    return false;
  });
}

$(".user-menu-icon .menu").addClass("hide");

$(".man-icon").click(function(){
  if ($(".user-menu-icon .menu").hasClass("hide")){
    $(".user-menu-icon .menu").addClass("display").removeClass("hide");
  }
  else if ($(".user-menu-icon .menu").hasClass("display")){
    $(".user-menu-icon .menu").addClass("hide").removeClass("display");
  }
});

$("#main").click(function(){
  if ($(".user-menu-icon .menu").hasClass("display")){
    $(".user-menu-icon .menu").addClass("hide").removeClass("display");
  }
});



  }
};


})(jQuery, Drupal, this, this.document);
