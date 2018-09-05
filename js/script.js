$(document).ready(function() {
    $("button#DarkTheme").click(function() {
        $("body#LightTheme").toggle();
        $("body").removeClass();
        $("body").addClass("DarkTheme");
    )}

    $("button#LightTheme").click(function() {
        $("body#LightTheme").toggle();
        $("body").removeClass();
    })
});