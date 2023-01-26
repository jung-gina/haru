$("form").hide();
$("#luanch_img").hide();
$(".media").hide();


$("#siin_id").one("click", function(e) {
    $("#siin_id").val('');
});
$("#siin_pw").one("click", function(e) {
    $("#siin_pw").val('');
    $("#siin_pw").attr("type", "password");
});

$("#siup_id").one("click", function(e) {
    $("#siup_id").val('');
});
$("#siup_mail").one("click", function(e) {
    $("#siup_mail").val('');
});
$("#siup_pw").one("click", function(e) {
    $("#siup_pw").val('');
    $("#siup_pw").attr("type", "password");
});
$("#siup_pw_c").one("click", function(e) {
    $("#siup_pw_c").val('');
    $("#siup_pw_c").attr("type", "password");
});


$("#log_btn1").on("click", function(e) {
    location.href = "https://accounts.google.com/";
});
$("#log_btn2").on("click", function(e) {
    location.href = "https://accounts.kakao.com/";   
});
$("#log_btn3").on("click", function(e) {
    location.href = "https://www.apple.com/kr/";  
});
//________________________________________________
$("#btn_signin").on("click", function (e) {
    $("button").hide();
    $("#form_signin").show();
    $("#signin_pw").hide();
    $("#media").hide();
});

$("#btn_signup").on("click", function (e) {
    $("button").hide();
    $("#form_signup").show();
    $("#signup_mail").hide();
    $("#signup_go").hide();
    $("#signup_pw").hide();
    $("#media").hide();
});
//________________________________________________
function luanch_Start() {
    var msg1 = "Daily Theme에 오신걸 환영합니다.♥"
    var msg2 = "저희 어플은 일일 글쓰기를 장려하기 위해 제작되었습니다.♥"
    var msg3 = "인사치레는 이쯤 해두고 본격적으로 어플을 구경해보죠. 따라오세요!♥"

        $("#text_p").text(msg1);
        $("#luanch2").hide();
        $("#luanch3").hide();
        $("#luanch1").one("click", function (e) {
            $("#text_p").text(msg2);
            $("#luanch2").show();
            $("#luanch1").hide();
        });
        $("#luanch2").one("click", function (e) {
            $("#text_p").text(msg3);
            $("#luanch3").show();
            $("#luanch2").hide();
        });
        $("#luanch3").one("click", function (e) {
            location.href = "../main/main.html";
        });
}
//________________________________________________
$("#signin_next").on("click", function (e) {
    $("#signin_id").hide();
    $("#signin_pw").show();
});

$("#signin_go").on("click", function (e) {
    location.href = "../main/main.html";
});
//________________________________________________
$("#signup_next").on("click", function (e) {
    $("#signup_id").hide();
    $("#signup_mail").show();
});
$("#signup_em").on("click", function (e) {
    $("#signup_pw").show();
    $("#signup_mail").hide();
});
$("#signup_conf").on("click", function (e) {
    $("#signup_pw").hide();
    $("#signup_go").show();
});
$("#signup_bgo").on("click", function (e) {
    $("#luanch_img").show();
    luanch_Start();
});
$("#media").on("click", function (e) {
    $("button").hide();
    $("#media").hide();
    $(".media").show();
});
//________________________________________________