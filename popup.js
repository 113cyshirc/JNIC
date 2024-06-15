/*
      ╔════╦════╗       ╔╗       ╔══╗       ╔══════
      ║    ║    ║      ╔╝╚╗      ║    ╚═╗   ║
      ║    ║    ║      ║  ║      ║       ║  ╠══════
      ║    ║    ║    ╔╝    ╚╗    ║       ║  ║
      ║    ║    ║    ╠══════╣    ║    ╔═╝   ║
      ║    ║    ║  ╔╝        ╚╗  ╚══╝       ╚══════


                      ╔═════╗   ║       ║
                      ║     ║    ╚╗   ╔╝
                      ║═════╣      ╚╦╝
                      ║     ║       ║
                      ║     ║       ║
                      ╚═════╝       ║



                ║  ╔╝  ╔╗  ╖  ╔═══╗  ╚╗  ║  ╔╝  
                ║╔╝    ║╚╗ ║  ║   ║   ║  ║  ║
                ╠╝     ║ ║ ║  ║   ║   ║  ║  ║
                ╠╗     ║ ╚╗║  ║   ║   ╚╗ ║ ╔╝
                ║╚╗    ║  ║║  ║   ║    ║ ║ ║
                ║  ╚╗  ╙  ╚╝  ╚═══╝    ╚═╩═╝


     ╔══  ╔══  ╔══╗    ╔═╗   ══╦══  ╔══  ║    ║  ╔══  ╔══╗
     ║    ║    ║  ║    ║ ║     ║    ║    ║    ║  ║    ║  ║
     ╚═╗  ║    ╠╦═╝    ╠═╣     ║    ║    ╠════╣  ╠══  ╠╦═╝
       ║  ║    ║╚═╗   ║   ║    ║    ║    ║    ║  ║    ║╚═╗
     ══╝  ╚══  ║  ╚  ║     ║   ║    ╚══  ║    ║  ╚══  ║  ╚ 





      ╔══  ║     ║  ╔══  ║    ║        ═╦═  ╔══╗  ╔═══
      ║     ║   ║   ║    ║    ║         ║   ║  ║  ║
      ║      ╚╦╝    ╚═╗  ╠════╣         ║   ╠╦═╝  ║
      ║       ║       ║  ║    ║         ║   ║╚═╗  ║
      ╚══     ║     ══╝  ║    ║        ═╩═  ║  ╚  ╚═══

                    資研社保佑   程式bug退散
*/

function show_form() {
    $("#sign-up.form").fadeIn('fast');
}

function hide_form() {
    $("#sign-up.form").fadeOut('fast');
}


function show_map() {
    $("#map.map").fadeIn('fast');
}

function hide_map() {
    $("#map.map").fadeOut('fast');
}

$(document).ready(function () {
    $("#map.map:not(.map-content)").click(function(e) {
        var container = $(".map-content");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $("#map.map").fadeOut('fast');
        }
    });
    $("#sign-up.form").click(function() {
        hide_form();
    });
    $(".s_button").click(function() {
        $(".selected").attr("class","s_button");
        $(this).attr("class","s_button selected");
        $(".show").slideUp(function() {
            $(this).attr("class","plate show");
        });
        var id = $(this).attr("id");
        switch(id){
            case "bus_r":
                $("#bus_r_plate").slideDown(function() {
                    $(this).attr("class","plate show");
                    window.location.replace("#select_route");
                });
                break;
            case "train_n":
                $("#train_n_plate").slideDown(function() {
                    $(this).attr("class","plate show");
                    window.location.replace("#select_route");
                });
                break;
            case "train_s":
                $("#train_s_plate").slideDown(function() {
                    $(this).attr("class","plate show");
                    window.location.replace("#select_route");
                });
                break;
            default:
                window.location.replace("#route");
        }
    });
});