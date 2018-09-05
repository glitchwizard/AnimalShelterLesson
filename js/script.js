$(document).ready(function() {
    $(".clickable").click(function() {
        $("#LightTheme").toggle();
        $("#DarkTheme").toggle();
    )}

    $("button#DarkTheme").click(fucntion() {
        $("body").removeClass();
        $("body").addClass("DarkTheme");
    })

    $("button#LightTheme").click(function() {
        $("body").removeClass();
    })
});