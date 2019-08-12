(function($) {

// $(window).resize(function() {
//         location.reload();
// });

// if (!Modernizr.touch) {}
var controller = new ScrollMagic.Controller();
TweenLite.defaultEase =  Power2.easeInOut;
  


$(".clip-me").each(function() {
	var tl = new TimelineMax();
	var cov = $(this).find(".cover");
	var img = $(this).find(".img-fluid");
	
	tl.to(cov, 0, {background:"#92c4b5"})
	tl.from(cov, 1, { scaleX: 0, transformOrigin: "right",ease:Power4.easeOut });
	tl.to(cov, 1, { scaleX: 0, transformOrigin: "left" ,ease:Power4.easeOut}, "reveal");
	tl.from(img, 1, { opacity: 0,ease:Power4.easeOut }, "reveal");
  
	var scene = new ScrollMagic.Scene({
	  triggerElement: this,
	  triggerHook: 'onEnter',
	  offset:200

	})
	  .setTween(tl)
	  .addTo(controller);
  });


//   uptext
if ($( window ).width() >= 768) {
  $("section").each(function() {
	var tl = new TimelineMax();
	var cov = $(this).find(".up-text"); 
	tl.from(cov,.8, { opacity:0, ease:Power1.easeOut },'0');  
	tl.from(cov, .8, { y: '200%', ease:Power1.easeOut },'0');  

	var scene = new ScrollMagic.Scene({
	  triggerElement: this,
	  triggerHook: .7,
	})
	  .setTween(tl)
	  .addTo(controller);
  });
}

// image zoom
$(".full-img-feature").each(function() {
	var tl = new TimelineMax();
	var img = $(this).find(".img-fluid");
	
	tl.from(img, 3, { width:'200%', height:'200%', transformOrigin:"50% 50%", ease:Power4.easeOut }, "reveal");


	var scene = new ScrollMagic.Scene({
	  triggerElement: this,
	  triggerHook: 'onEnter',
	  offset:200

	})
	  .setTween(tl)
	  .addTo(controller);
  });

// scroll screenLeft 

if (!Modernizr.touch){
var tween = new TimelineMax();
tween.to('.scroll-left', 1, {	x:'-150%'},0)

var scene = new ScrollMagic.Scene({
	triggerElement: '.testimonials',
	duration:'400%',
	triggerHook: 0,
	reverse: true
	})

	.setPin('.testimonials')
	.setTween(tween)
	.addTo(controller)
}



var tween = new TimelineMax();
tween.to('.navbar', 1, {backgroundColor:'#fff'},0)
.to('.nav-item', 1, {color:'#333'},0)
.to('.logo-circle', 1, {fill:'#ffa9a7'},0)
var scene = new ScrollMagic.Scene({triggerElement: ".usp", offset:'150' })
.setTween(tween)
.addTo(controller)


var tween = new TimelineMax();
tween.to('.navbar', 1, {backgroundColor:'#fff'},0)
.to('.nav-item', 1, {color:'#333'},0)
var scene = new ScrollMagic.Scene({triggerElement: ".products", offset:0,  triggerHook:0})
.setTween(tween)
.addTo(controller)


var tween = new TimelineMax();
tween.to('.navbar', 1, {backgroundColor:'#263238'},0)
.to('.nav-item', 1, {color:'#fff'},0)
.to('.logo', 1, {fill:'#fff'},0)
.to('.logo-circle', 1, {fill:'#ffa9a7'},0)

var scene = new ScrollMagic.Scene({triggerElement: ".testimonials", triggerHook:0, offset:'-150'})
.setTween(tween)
.addTo(controller)

var tween = new TimelineMax();
tween.to('.navbar', 1, {backgroundColor:'#fff'},0)
.to('.nav-item', 1, {color:'#333'},0)
.to('.logo', 1, {fill:'#000'},0)

var scene = new ScrollMagic.Scene({triggerElement: ".special-feature", offset:0})
.setTween(tween)
.addTo(controller)

})(jQuery);


