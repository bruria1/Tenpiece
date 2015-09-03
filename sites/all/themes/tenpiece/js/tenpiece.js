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

/************  menu  **************/

$('.menu-button').on('click', function() {
  if ($("body").hasClass("menu-open")) {
    $('body').removeClass("menu-open");
    $('#navigation').addClass("hide-mobile");
  } 
  else {
    $('body').addClass("menu-open");
    $('#navigation').removeClass("hide-mobile");
  }
});

/************  scroll  **************/

$(document).ready(function(){       
      $scroll_pos = 0;
      $(document).scroll(function() { 
        $scroll_pos = $(this).scrollTop();
        if($scroll_pos > 0) {
            $("body").addClass('scroll');
        }
        else {
            $("body").removeClass('scroll');
        }
      });
});

/************  cart  **************/

if ($(".view-shopping-top-manu .button-cart").length != 0){
  $('.shoping-icon').addClass("not-empty");
};

$('.shoping-icon.not-empty').on('click', function() {
      $('#block-commerce-cart-cart').addClass("open");
      $('body').addClass("cart-open");
});

$('#block-commerce-cart-cart .close-button').on('click', function() {
      $('#block-commerce-cart-cart').removeClass("open");
      $('body').removeClass("cart-open");
});

$('#page').on('click', function() {
      $('#block-commerce-cart-cart').removeClass("open");
      $('body').removeClass("cart-open");
});
/*******  product   *******/

if ($("body").hasClass("node-type-product")) {
   $i = 1;
   $("#block-views-products-block-3 .views-row").each(function(){
     $class = "place"+$i++;
     $(this).addClass($class); 
     if ($i>4) { $i=1;}
    });
  if (document.getElementById("block-block-7")) {
    $(".gray-area-wrapper").css({ display: "none" });
  } 

};

/*******  store page   *******/

if ($("body").hasClass("page-node-50")) {
   $i = 1;
   $("#block-views-amir-inner-term-eva-block .view-amir-inner-term-eva.view-display-id-block > .view-content > .views-row").each(function(){
     $class = "place"+$i++;
     $(this).addClass($class); 
     if ($i>3) { $i=1;}
    });
};

if ($("body").hasClass("page-taxonomy-term")) {
   $i = 1;
   $("#block-views-amir-inner-term-eva-block-2 .view-amir-inner-term-eva.view-display-id-block_2 > .view-content > .views-row").each(function(){
     $class = "place"+$i++;
     $(this).addClass($class); 
     if ($i>3) { $i=1;}
    });
};

if ($("body").hasClass("page-taxonomy-term")) {
  if ($(".view-header div").hasClass("tid15")){
    $("#edit-field-material-tid-wrapper").css({ display: "block" });
  }
  if ($(".view-header div").hasClass("tid7")){
    $("#edit-field-surface-tid-wrapper").css({ display: "block" });
  }
}

/********  hide control if only one image (product gallery) **********/

$image_number=$('.field-slideshow > div').length;
if ($image_number==1){
    $(".field-slideshow-controls").css({ display: "none" });
};

/************  user menu  **************/

$(".man-icon").click(function(){
  if ($(".user-menu-icon").hasClass("hide")){
    $(".user-menu-icon").addClass("display").removeClass("hide");
  }
  else if ($(".user-menu-icon").hasClass("display")){
    $(".user-menu-icon").addClass("hide").removeClass("display");
  }
});

$("#main").click(function(){
  if ($(".user-menu-icon").hasClass("display")){
    $(".user-menu-icon").addClass("hide").removeClass("display");
  }
});

$number_tender=$(".number-man-icon .view-header").html();
$( ".user-menu-icon .menu .views-field-nothing" ).append('<span class="number"></span>');
$( ".user-menu-icon .menu .views-field-nothing .number" ).append($number_tender);

$(document).ready(function(){
    $(".menu-2084 a").hover(function(){
        $("#open-menu").addClass("display").removeClass("hide");
        $(".user-menu-icon").addClass("hide").removeClass("display");
        },function(){
        $("#open-menu").addClass("hide").removeClass("display");
    });
    $("#open-menu").hover(function(){
        $("#open-menu").addClass("display").removeClass("hide");
        },function(){
        $("#open-menu").addClass("hide").removeClass("display");
    });
});

/***  add product page  ********/

if ($("body").hasClass("page-node-add-product") || ($("body").hasClass("page-node-edit") && $("body").hasClass("node-type-product"))) {

  $("#edit-field-main-category-und-0-tid-select-1").change(function () {
    if ($(this).find("option:selected").val() == "7") {
           $("#edit-field-surface").css({ height: "auto" });
    }
    else{
           $("#edit-field-surface").css({ height: "0" });
    }
  });

  $("#edit-field-main-category-und-0-tid-select-1").change(function () {
    if ($(this).find("option:selected").val() == "15") {
           $("#edit-field-material").css({ height: "auto" });
    }
    else{
           $("#edit-field-material").css({ height: "0" });
    }
  });

  if ($("#edit-field-main-category-und-0-tid-select-1").val() == "15") {
           $("#edit-field-material").css({ height: "auto" });
  }

  $("#edit-field-main-category-und-0-tid-select-1").change(function () {
    if ($(this).find("option:selected").val() == "10") {
           $("#edit-field-other").css({ height: "auto" });
    }
    else{
           $("#edit-field-other").css({ height: "0" });
    }
  });

  $('.multipage-link-next').click(function(){
    $("html, body").animate({ scrollTop: $("body").offset().top +20 }, 2000);
    return false;
  });

}



/********  arrow - front  ************/
if ($("body").hasClass("front")){
  $('.arrow-bottom img').click(function(){
    $("html, body").animate({ scrollTop: $(".region-content-bottom").offset().top -90 }, 2000);
    return false;
  });
  $height = $(window).height()-120;
  $(".arrow-bottom").css("top", $height);
}

/*************  mobile - front category  **************/
if ($("body").hasClass("front")) {
   $i = 1;
   $("#block-views-mobil-product-block .views-row").each(function(){
     $class = "place"+$i++;
     $(this).addClass($class); 
     if ($i>3) { $i=1;}
    });
};


//$(".multipage-pane-title").insertAfter(".multipage-controls-list");

  }
};


})(jQuery, Drupal, this, this.document);
