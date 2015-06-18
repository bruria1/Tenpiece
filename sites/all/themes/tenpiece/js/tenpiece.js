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

$("#block-views-menu-store-block").addClass("hide");

$(document).ready(function(){
    $(".menu-2084 a").hover(function(){
        $("#block-views-menu-store-block").addClass("display").removeClass("hide");
        },function(){
        $("#block-views-menu-store-block").addClass("hide").removeClass("display");
    });
    $("#block-views-menu-store-block").hover(function(){
        $("#block-views-menu-store-block").addClass("display").removeClass("hide");
        },function(){
        $("#block-views-menu-store-block").addClass("hide").removeClass("display");
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

  }
};


})(jQuery, Drupal, this, this.document);
