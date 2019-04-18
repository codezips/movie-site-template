/*window.addEventListener('scroll',Scroll)
function Scroll(){
const myNav = document.getElementById('mySecDiv');
const yPos = window.pageYOffset;
if(yPos>300){
	console.log(yPos);
	myNav.style.opacity = '1';
}
else{
	myNav.style.opacity = '1';
}
}
*/

$('#topCarousel').carousel({
	interval:2000
})
$('#carouselInner .carousel-item').each(function(){
    var next = $(this).next();
    if (!next.length) {
    next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
    
    for (var i=0;i<2;i++) {
        next=next.next();
        if (!next.length) {
        	next = $(this).siblings(':first');
      	}
        
        next.children(':first-child').clone().appendTo($(this));
      }
});

$('#medCarousel').carousel({
	interval:0
})

$('#carouselMedium .carousel-item').each(function(){
    var next = $(this).next();
    if (!next.length) {
    next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
    
    for (var i=0;i<2;i++) {
        next=next.next();
        if (!next.length) {
        	next = $(this).siblings(':first');
      	}
        
        next.children(':first-child').clone().appendTo($(this));
      }
});





