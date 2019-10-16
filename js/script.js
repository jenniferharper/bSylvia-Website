(function($) {
var controller = new ScrollMagic.Controller();
TweenLite.defaultEase =  Power2.easeInOut;
  


// only show preloader if js is working
var elem = document.querySelector('#preloader');
elem.style.display = 'block';
var elem = document.querySelector('.is-loading');
elem.style.overflow = 'hidden';
var elem = document.querySelector('.page-wrapper');
elem.style.display = 'none';


// number of loaded images for preloader progress
var loadedCount = 0; //current number of images loaded
var imagesToLoad = $('.img-fluid').length; //number of slides with .bcg container
var loadingProgress = 0; //timeline progress - starts at 0
 


$('.img-fluid').imagesLoaded({
    background: true
}).progress( function( instance, image ) {
    loadProgress();
});
 
function loadProgress(imgLoad, image)
{
    //one more image has been loaded
    loadedCount++;
 
    loadingProgress = (loadedCount/imagesToLoad);
 
    // GSAP tween of our progress bar timeline
    TweenLite.to(progressTl, 0.7, {progress:loadingProgress, ease:Linear.easeNone});
 
}

//progress timeline
var progressTl = new TimelineMax({
    paused: true,
    onUpdate: progressUpdate,
    onComplete: loadComplete
});
 
progressTl
    //tween the progress bar width
    .to($('.progress span'), 1, {width:100, ease:Linear.easeNone});
 
//as the progress bar width updates and grows we put the percentage loaded in the screen
function progressUpdate()
{
    //the percentage loaded based on the tween's progress
    loadingProgress = Math.round(progressTl.progress() * 100);
 
    //we put the percentage in the screen
    $(".txt-perc").text(loadingProgress + '%');
 
}

function loadComplete() { 
    // preloader out
    var preloaderOutTl = new TimelineMax();
 
	preloaderOutTl
	.to($('.page-wrapper'), 0, {display:"block"})
        .set($('body.is-loading'), {css:{overflow:"visible"}})
		.to($('#preloader'), 0.7, {yPercent: -100, ease:Power4.easeInOut})
		
        .from($('.up-text'), 1,{opacity:0, ease:Power1.easeOut },'0' )
		.from($('.up-text'), 1,{y: '200%', ease:Power1.easeOut  },'0' )
		.from($('.hello'), 1, {yPercent: 100, ease:Power4.easeInOut},'0')

		
    return preloaderOutTl;
}



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
	triggerHook: '0',
	offset:'200',
	reverse: true
	})

	.setPin('.testimonials')
	.setTween(tween)
	.addTo(controller)
}


if ($( window ).width() >= 768) {
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
}


})(jQuery);


