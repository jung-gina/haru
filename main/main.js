$("#dot2").css("visibility", "hidden");
$("#dot3").css("visibility", "hidden");

$("#menu_btn1").on("click", function (e) {
    $("#dot1").css("visibility", "visible");
    $("#dot2").css("visibility", "hidden");
    $("#dot3").css("visibility", "hidden");
    $("#title2").show();
    $("#title3").show();
});
$("#menu_btn2").on("click", function (e) {
    $("#dot1").css("visibility", "hidden");
    $("#dot2").css("visibility", "visible");
    $("#dot3").css("visibility", "hidden");
    $("#title2").hide();
    $("#title3").hide();
});
$("#menu_btn3").on("click", function (e) {
    $("#dot1").css("visibility", "hidden");
    $("#dot2").css("visibility", "hidden");
    $("#dot3").css("visibility", "visible");
    $("#title2").hide();
    $("#title3").hide();
});