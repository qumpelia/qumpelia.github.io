$(document).ready(function(){var e;ymaps.ready(function(){e=new ymaps.Map("map",{center:[59.91815364,30.305578],zoom:11,controls:[]});var t=[[59.95949833,30.28703857],[59.90125635,30.34815002],[59.90229112,30.24652649],[59.83876498,30.39415527]],a=new ymaps.GeoObjectCollection({},{iconLayout:"default#image",iconImageHref:"img/icons/map-marker.svg",iconImageSize:[48,60]});t.forEach(function(e){a.add(new ymaps.Placemark(e))}),e.geoObjects.add(a),e.behaviors.disable("scrollZoom")}),$(".recalls__about-btn").fancybox({maxWidth:400,autoSize:"false",padding:30,helpers:{overlay:{locked:!1}}}),$(".maincontent").fullpage({verticalCentered:!1,scrollingSpeed:1e3,anchors:["firstPage","secondPage","thirdPage","fourthPage","fifthPage","sixthPage","seventhPage","lastPage"],menu:".right__nav-list"}),$(".arrow-scroll").on("click",function(e){e.preventDefault(),$.fn.fullpage.moveSectionDown()}),$(".right__nav-link, .top__nav-link, .order-btn").on("click",function(e){e.preventDefault();var t=$(this),a=parseInt(t.attr("href"));$.fn.fullpage.moveTo(a)}),$(".slider__controll").on("click",function(e){e.preventDefault();var t=$(this),a=t.closest(".burgers__slider"),n=a.find(".slider__list"),i=a.find(".slider__item"),s=i.filter(".active"),o=s.next(),r=s.prev(),l=i.first(),c=i.last(),m=a.offset().left,f=0;t.hasClass("slider__controll_right")?o.length?(f=o.offset().left-m,o.addClass("active").siblings().removeClass("active")):(f=l.offset().left-m,l.addClass("active").siblings().removeClass("active")):r.length?(f=r.offset().left-m,r.addClass("active").siblings().removeClass("active")):(f=c.offset().left-m,c.addClass("active").siblings().removeClass("active")),n.css("left","-="+f+"px")}),$(".team__item-name").on("click",function(e){e.preventDefault();var t=$(this),a=t.closest(".team__item"),n=t.closest(".team__list"),i=n.find(".team__item");a.hasClass("team__item_active")?a.removeClass("team__item_active"):(i.removeClass("team__item_active"),a.addClass("team__item_active"))}),$(".menu__cat").on("click",function(e){e.preventDefault();var t=$(this),a=t.closest(".menu__item"),n=t.closest(".menu__list"),i=n.find(".menu__item");a.hasClass("menu__item_active")?a.removeClass("menu__item_active"):(i.removeClass("menu__item_active"),a.addClass("menu__item_active")),$(document).on("click",function(e){var t=$(e.target);t.closest(".menu__list").length||$(".menu__item").removeClass("menu__item_active")})}),$("#phone").mask("+7 (999) 999-99-99");var t=function(){var e=function(){a()},t=function(e){var t=e.find(".validate"),a=!0;return $.each(t,function(e,t){var n=$(t),s=n.val();s.length||(a=!1,i(n))}),a},a=function(){$("form").on("keydown",".has-error",n),$("form").on("click",".has-error",n),$("form").on("reset",s)},n=function(){$(this).removeClass("has-error")},i=function(e){e.addClass("has-error")},s=function(){$(this).find(".has-error").removeClass("has-error")};return{init:e,validateForm:t}}();$("form").length&&t.init();var a=function(){var e=function(){a()},a=function(){$("form").on("submit",n)},n=function(e){e.preventDefault();var t=$(this),a="";i(t,a)},i=function(e,a){if(!t.validateForm(e))return!1};return{init:e}}();$("form").length&&a.init()});