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




 $("#drop").click(function() {
    $("#drop2").slideToggle();
});