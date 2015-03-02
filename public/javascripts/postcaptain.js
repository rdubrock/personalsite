
$( document ).ready(function() {
   

  $(window).scroll(function() {
    
    // console.log($(this).scrollHeight())
    // var currentHeight = this.scrollHeight - this.scrollTop
    if ($(this).scrollTop() > window.innerHeight/2) {
      $('#slider').slideDown();
    }
    if ($(this).scrollTop() < window.innerHeight/2) {
      $('#slider').slideUp();
    }
  }); 
 $('.thumbnail').hover(
        function(){
            $(this).find('.caption').slideDown(250); //.fadeIn(250)
        },
        function(){
            $(this).find('.caption').slideUp(250); //.fadeOut(205)
        }
    ); 
})