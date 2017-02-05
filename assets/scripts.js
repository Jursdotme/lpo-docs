$(document).ready(function(){

  var $popup = $('.popup');
  var $close_button = $('.close');
  var $print_button = $('.print-button');
  var $back_button = $('.back_button');

  var toggle_popup = function() {
    $popup.toggleClass('hidden');
  };

  $close_button.click(toggle_popup);
  $print_button.click(toggle_popup);

  var goBack = function() {
      window.history.back();
  }

});
