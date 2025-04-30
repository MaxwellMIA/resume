//smooth scroll
    $("#link-1").click(function(){
        $('html, body').animate({
        scrollTop: $("#aboutme").offset().top
        }, 1000);
    });

    $("#link-2").click(function(){
        $('html, body').animate({
        scrollTop: $("#education").offset().top
        }, 1000);
    });

    $("#link-3").click(function(){
        $('html, body').animate({
        scrollTop: $("#honors").offset().top
        }, 1000);
    });

    $("#link-4").click(function(){
        $('html, body').animate({
        scrollTop: $("#extracurriculars").offset().top
        }, 1000);
    });

    $("#link-5").click(function(){
        $('html, body').animate({
        scrollTop: $("#skills").offset().top
        }, 1000);
    });

    $("#link-6").click(function(){
        $('html, body').animate({
        scrollTop: $("#references").offset().top
        }, 1000);
    });
// end

// drop down
 $("#drop").click(function() {
    $("#drop2").slideToggle();
});
// end 

$('#Me').mouseover(function(){
    //moving the div left a bit is completely optional
    //but should have the effect of growing the image from the middle.
    $(this).stop().animate({"width": "350px","height":"350px"}, 400,'swing');
  }).mouseout(function(){
    $(this).stop().animate({"width": "300px","height":"300px"}, 200,'swing');
  });
 