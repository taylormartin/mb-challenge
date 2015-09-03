// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap.min
//= require_tree .

$(document).ready(function(){
  var pagebody = $("#pagebody");
  var menubtn = $("#menu-btn");

  function openme() { 
      $(function () {
        menubtn.removeClass('glyphicon-menu-hamburger');
        menubtn.addClass('glyphicon-remove');
        pagebody.animate({
          left: "235px"
        }, { duration: 300, queue: false });
      });
  }
   
  function closeme() {
      var closeme = $(function() {
        menubtn.addClass('glyphicon-menu-hamburger');
        menubtn.removeClass('glyphicon-remove');
        pagebody.animate({
          left: "0px"
        }, { duration: 180, queue: false });
      });
  }
  
  $(".menu-category").on("click", function(e){
    var num = $(this).attr('data-sub-menu');
    $("#sub-menu-" + num).toggle();
    $("#glyph-" + num).toggleClass("glyphicon-menu-down glyphicon-menu-up");
  });

  $(".tab-div").on("click", function(e){
    var show = $(this).attr('data-show-tab');
    var hide = $(this).attr('data-hide-tab');
    $(this).addClass('tab-selected');
    $(this).removeClass('tab-unselected');
    $('#tab-' + hide).addClass('tab-unselected');
    $('#tab-' + hide).removeClass('tab-selected');
    $("#sub-tab-" + show).removeClass('unselected');
    $("#sub-tab-" + hide).addClass('unselected');
  });

	$(menubtn).on("click", function(e){
		e.preventDefault();
		var leftval = pagebody.css('left');
		
		if(leftval == "0px") {
			openme();
		}
		else { 
			closeme(); 
		}
	});

});

