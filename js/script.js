(function($) {

$(window).resize(function() {
        location.reload();
});

$(".js-added").css("display", "block");
$(".pad-top ").css("padding-top", "8%");
$(".pad-bottom ").css("padding-bottom", "8%");
$("section .container").css("padding", "0");


var controller = new ScrollMagic.Controller();
TweenLite.defaultEase =  Power2.easeInOut;


if (window.innerWidth > 767) {
var tween = new TimelineMax();
tween.to('#intro .row', 0, {minHeight:'90vh'},0)
.to('#intro .cover', 0, {maxHeight:'70%'},0)
.to('#intro .cover', 1.2, {width:'200%'},0)
.to('#intro .cover', 1, {xPercent:'-=50'},0)
.to('#intro .cover', 1.5, {yPercent:'+=140'},0)


var scene = new ScrollMagic.Scene({
triggerElement: '.intro',
// offset:'100',
duration:'125%',
triggerHook: 0,
reverse: true
})

// .addIndicators({name:'intro'})
.setTween(tween)
.addTo(controller);
};


if (window.innerWidth > 1025) {
var tween = new TimelineMax();
tween.to('#graph h2', 1, { color: '#fff'},0)
.to('#graph p', 1, { color: '#fff'},0)



var scene = new ScrollMagic.Scene({
	triggerElement: '#graph',
	offset:'-100',
	duration:'90%',
	triggerHook: 0,
	reverse: true
})

.addIndicators({name:'graph'})
.setPin('#graph .row', {pushFollowers: false})
// .setPin('#graph .row')
.setTween(tween)
.addTo(controller)
};



if (window.innerWidth > 767) {
	var tween = new TimelineMax();
	tween.to(' .content-down', 0, { opacity:0},0)
		.to('.left .circle', 7, { xPercent:'+=100%', yPercent:'+=200'},0)		
		.to('.right .circle', 7, { xPercent:'-=100%', yPercent:'+=200'},0)
		.to('.middle .circle', 7, {yPercent:'+=200'},0)
		.to('.content ', 1.5, {opacity:0, scale:'0.5', y:'-100'}, 1)
	
		.to('.left .circle', 3, { scale:'.5'},1)
		.to('.right .circle', 3, { scale:'.75'},1)

		.to('.left .content-down', 3, {  y:'450vh', textAlign:'center'},2)
		.to('.middle .content-down', 3, {  y:'250vh', textAlign:'center'},2)	
		.to('.right .content-down', 3, {  y:'500vh', textAlign:'center'},2)


	var scene = new ScrollMagic.Scene({
	triggerElement: '#circles',
	// offset:'150',
	duration:'120%',
	triggerHook:'10%',
	reverse: true
	})
	
	.addIndicators({name:'circles'})
	.setTween(tween)
	.addTo(controller);
	};

	


	if (window.innerWidth > 767) {
		var tween = new TimelineMax();


		tween.to('.left .content-down ', 2, { opacity:'1',color:'#fff', fill:'#fff' },1)
		.from('.left .content-down svg', 5,{width:0},2)	

		.to('.right .content-down ', 2, { opacity:'1',color:'#fff', fill:'#fff' },3)
		.to('.right .content-down svg', 0,{marginLeft:'-20%'},0)
		.from('.right .content-down svg', 5,{width:0},3)



		var scene = new ScrollMagic.Scene({
		triggerElement: '#black',
		duration:'60%',
		triggerHook:.5,
		reverse: true
		})
		
		// .addIndicators({name:'black'})
		.setTween(tween)
		.addTo(controller);
		};



	if (window.innerWidth > 768) {
		var tween = new TimelineMax();
		tween.from('#other h3', 0.5, { yPercent:'100' },0)

	
		var scene = new ScrollMagic.Scene({
		triggerElement: '#other',
		duration:'40%',
		triggerHook:1,
		reverse: true
		})
		
		.addIndicators({name:'other'})
		.setTween(tween)
		.addTo(controller);
		};


})(jQuery);


