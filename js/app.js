$(function(){

   //header, footer nav
   let nav = $("#nav");
   let top = $(".header__burger-top");
   let middle = $(".header__burger-middle");
   let bottom = $(".header__burger-bottom");
   
   $("[data-scroll]").on('click', function (event) {
      event.preventDefault();

      let elementID = $(this).data('scroll');
      let elementOffset = $(elementID).offset().top;

      nav.removeClass("header__nav-active");
      top.removeClass("header__burger-top-active");
      middle.removeClass("header__burger-middle-active");
      bottom.removeClass("header__burger-bottom-active");


      $("html,body").animate({
         scrollTop: elementOffset -50
      }, 700);
   });

   //burger menu
   $(".header__burger").click(function() {
      nav.toggleClass("header__nav-active");
      top.toggleClass("header__burger-top-active");
      middle.toggleClass("header__burger-middle-active");
      bottom.toggleClass("header__burger-bottom-active");
   });

   // product nav
   let winter = $("#winter");
   let summer = $("#summer");
   let winterBtn = $(".winter-btn");
   let summerBtn = $(".summer-btn");

   /* winter */
   winterBtn.click(function() {
      event.preventDefault();

      summerBtn.removeClass("product__btn-active-right");
      summerBtn.addClass("product__btn-right");
      winterBtn.addClass("product__btn-active-left");

      summer.css({height: '0', overflow: 'hidden'});
      winter.css({opacity: 0, height: 'auto', overflow: 'visible'}).animate({
         opacity: 1
      }, 600);

      summer.hide();
      winter.css({opacity: 0, display: 'block', width: 'auto'}).animate({
         opacity: 1
      }, 600);
   });

   /* summer */
   summerBtn.click(function() {
      event.preventDefault();

      winterBtn.removeClass("product__btn-active-left");
      winterBtn.addClass("product__btn-left");
      summerBtn.addClass("product__btn-active-right");

      winter.css({height: '0', overflow: 'hidden'});
      summer.css({opacity: 0, height: 'auto', overflow: 'visible'}).animate({
         opacity: 1
      }, 600);

      winter.hide();
      summer.css({opacity: 0, display: 'block', width: 'auto'}).animate({
         opacity: 1
      }, 600);
   });

   // question nav
   $('.question__btn').click(function(){

      let accordionBtn = $('.question__btn');
      let accordionContent = $('.question__content');
      let accordionItem = $('.question__item');
      let accordionLast = $('#question-last');

      accordionBtn.children().attr('src', 'img/question/btn.svg');
      accordionContent.css("display", "none");
      accordionLast.removeClass('question__content-active-last');

      $(this).children().attr('src', 'img/question/btn-active.svg');
      $(this).parent(accordionItem).next(accordionContent).fadeIn(500);
      if (accordionLast.find("display", "block")) {
         accordionLast.addClass("question__content-active-last");
      }
   });

   //scrpit label
   $(document).ready( function() {
      $(".inputfile").change(function(){
         var filename = $(this).val().replace(/.*\\/, "");
         $("#field-text").html(filename);
      });
   });

   //slider
   $('.slider').slick( {
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
   });

      //test-slider
      $('.test__slider').slick( {
         infinite: false,
         slidesToShow: 1,
         slidesToScroll: 1,
         arrows: true,
         dots: false,
         prevArrow: $(".404"),
         nextArrow: $(".test__btn"),
         swipe: false,
      });

   //product btn
   let foto = $(".product__foto");
   let productItem = $(".product__item");
   let productWrap = $(".product__item-hidden");
   let productBtn = $(".product__close");

   foto.click(function() {
      if ($(window).width() <= '576') {
         $(this).parent(productItem).parent().addClass('product__item-active');
         $(this).parent(productItem).children(productWrap).addClass('product__wrap-active');
         $(this).parent().parent(productItem).children().addClass('product__close-active');
         $(".product__foto").removeClass('product__foto-height');
      }
   });

   productBtn.click(function() {
      productItem.removeClass('product__item-active');
      productWrap.removeClass('product__wrap-active');
      $(this).removeClass('product__close-active');
      $(".product__foto").addClass('product__foto-height');
   });

   // info text-hidden
   let infoNav = $('.info__nav');
   let infoText = $('.info__text-hidden');
   let infoBtn = $('#infoPopup');

   infoNav.click(function() {
      if ($(window).width() <= '576') {
         event.preventDefault();

         infoText.addClass("info__hidden-active");
         infoText.css("display" , "flex");
      }
      
   });

   infoBtn.click(function() {
      event.preventDefault();

      infoText.fadeOut();
   });

   //popup-promo close
   $('.popup-promo__close').click(function() {
      $(".popup-promo").removeClass("popup-active");
   });
   $('.popup-error__close').click(function() {
      $(".popup-error").removeClass("popup-active");
   });

   //popup send
   $(".gift__form").submit(function(){
      let giftCheck = $( "input:first" ).val();

      if ( giftCheck == "000000000") {
         event.preventDefault();
         $("#popupPromo").addClass('popup-active');
      } else {
         event.preventDefault();
         $("#error").addClass('popup-active');
      }
   });

   //test btn
   $('.test__btn').click(function() {
      event.preventDefault();
   });
});