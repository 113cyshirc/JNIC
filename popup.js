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



window.onclick = function(event) {
    if (event.target == $("#map.map")[0]) {
        $("#map.map").fadeOut('fast')
    }
  }