$(document).ready(function(){
    $(".second-mountain").hide();
    $(".m1").click(function(){
        $(".first-mountain").show();
        $(".second-mountain").hide();
    })
    $(".m2").click(function () {
        $(".first-mountain").hide();
        $(".second-mountain").show();
    })
})