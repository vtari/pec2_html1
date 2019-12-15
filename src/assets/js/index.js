


$(document).ready(function () {
    /*$("img").hide(3000);
    $("img").show("slow");*/

    $('.icon').click(function(element) {
       
        if ($('#menu').is(":visible")) {
            $('#menu').hide()
        } else {
            $('#menu').show()
        }
    });

});

