//resource link: https://www.w3schools.com/jquery/default.asp

$(document).ready(function(){


    $("#cat-img").hide();

    $("#doggo-img").click(function(){
        $("#doggo-img").hide();
        $("#cat-img").show();


    });

    $("#cat-img").click(function(){
        $("#doggo-img").show();
        $("#cat-img").hide();


    });

});

