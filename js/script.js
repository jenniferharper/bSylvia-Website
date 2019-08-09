(function($) {

$(window).resize(function() {
        location.reload();
});

var controller = new ScrollMagic.Controller();
TweenLite.defaultEase =  Power2.easeInOut;

  


$(".clip-me").each(function() {
	var tl = new TimelineMax();
	var cov = $(this).find(".cover");
	var img = $(this).find(".special");
  
	tl.from(cov, 1, { scaleX: 0, transformOrigin: "right",ease:Power4.easeOut });
	tl.to(cov, 1, { scaleX: 0, transformOrigin: "left" ,ease:Power4.easeOut}, "reveal");
	tl.from(img, 1.5, { opacity: 0,ease:Power4.easeOut }, "reveal");
  
	var scene = new ScrollMagic.Scene({
	  triggerElement: this,
	  triggerHook: 'onEnter',
	  offset:200

	})
	  .setTween(tl)
	  .addIndicators()
	  .addTo(controller);
  });


//   uptext

  $("section").each(function() {
	var tl = new TimelineMax();
	var cov = $(this).find(".up-text");  
	tl.staggerFrom(cov, 1, { y: '200%', ease:Power1.easeOut },0.15);  
	var scene = new ScrollMagic.Scene({
	  triggerElement: this,
	  triggerHook: .7,
	})
	  .setTween(tl)
	  .addIndicators()
	  .addTo(controller);
  });

})(jQuery);


