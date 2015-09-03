$(document).ready(function () {
    $("#password").keyup(function () {
        var count = $(this).val().length;
        
        if (count < 1) 
            {
            
                $(".password_strength").text("");
                $(".password_strength").removeClass("red");
                $(".password_strength").removeClass("orange");
                $(".password_strength").removeClass("green");
            }
        
        else if (count <= 7)
            
            {
                $(".password_strength").text("Character must be at least 8");
                $(".password_strength").addClass("red");
                $(".password_strength").removeClass("orange");
                $(".password_strength").removeClass("green");
                $(".password_strength").removeClass("yellow");
            }
        else if (count >= 8 && count <=11)
            
            {
                $(".password_strength").text("Password Strength is Fair");
                $(".password_strength").addClass("yellow");
                $(".password_strength").removeClass("orange");
                $(".password_strength").removeClass("green");
                $(".password_strength").removeClass("red");
            }
        
        else if (count > 11 && count <=15)
            
            {
                $(".password_strength").text("Password Strength is Good");
                $(".password_strength").addClass("orange");
                $(".password_strength").removeClass("red");
                $(".password_strength").removeClass("green");
                $(".password_strength").removeClass("yellow");
            }
        
        else 
            
            {
                $(".password_strength").text("Password Strength is Strong");
                $(".password_strength").addClass("green");
                $(".password_strength").removeClass("red");
                $(".password_strength").removeClass("orange");
                $(".password_strength").removeClass("yellow");
            }
        
    });
});