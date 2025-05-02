// JS Information ======================================================
// Site URL:https://www.hopebearinc.com
// File name:common.js
// Summary:各種共通スクリプト
// Created:2022-05-01
//======================================================================

//ヘッダーメニュー
jQuery(function($) {
  let $header=$('header .inner');
  // Nav Fixed
  $(window).scroll(function() {
    if ($(window).scrollTop() > 0) {
      $header.addClass('fixed');
    }
    else {
      $header.removeClass('fixed');
    }
  });
  // Nav Toggle Button
  $('#nav_toggle').click(function () {
    $header.toggleClass('open');
  });
});
