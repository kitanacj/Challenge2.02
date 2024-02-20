//resource link: https://www.w3schools.com/jquery/default.asp

$(document).ready(function(){


    $("#box-empty").hide();


    $("#toggle-text").click(function(){
        $("#box-empty").toggle();
        
    });

    $("#gif-img").click(function(){
        $("#box-empty").hide();
        $("#box-empty").css("background-color", "darkturquoise");
        
    });

    $("#box-empty").click(function(){
        $(".box").addClass("animate-img");

        setTimeout(function(){
            $(".box").removeClass("animate-img");  
        },5000);
        
    })

    $("#name").click(function(){
        $("#box-empty").css("background-color", "lightgreen");
        
    });



});

