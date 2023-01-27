$("form").hide();
$("#luanch_img").hide();
$(".media").hide();

$("#reset_btn").on("click", function(e){
    location.reload();
});

$("#siin_id").one("click", function (e) {
    $("#siin_id").val('');
});
$("#siin_pw").one("click", function (e) {
    $("#siin_pw").val('');
    $("#siin_pw").attr("type", "password");
});

$("#siup_id").one("click", function (e) {
    $("#siup_id").val('');
});
$("#siup_mail").one("click", function (e) {
    $("#siup_mail").val('');
});
$("#siup_pw").one("click", function (e) {
    $("#siup_pw").val('');
    $("#siup_pw").attr("type", "password");
});
$("#siup_pw_c").one("click", function (e) {
    $("#siup_pw_c").val('');
    $("#siup_pw_c").attr("type", "password");
});
//________________________________________________
$("#log_btn1").on("click", function (e) {
    location.href = "https://accounts.google.com/";
});
$("#log_btn2").on("click", function (e) {
    location.href = "https://accounts.kakao.com/";
});
$("#log_btn3").on("click", function (e) {
    location.href = "https://appleid.apple.com/sign-in";
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
        location.href = "./main/main.html";
    });
}
//________________________________________________
$("#signin_next").on("click", function (e) {
    if ($("#siin_id").val()) {
        $("#signin_id").hide();
        $("#signin_pw").show();
    } else alert("ID를 입력하세요.");
});

$("#signin_go").on("click", function (e) {
    if ($("#siin_pw").val()) {
        location.href = "./main/main.html";
    } else alert("비밀번호를 입력하세요.");
});
//________________________________________________
$("#signup_next").on("click", function (e) {
    if($("#siup_id").val()) {
    $("#signup_id").hide();
    $("#signup_mail").show();
    } else alert("ID를 입력하세요.");
});
$("#signup_em").on("click", function (e) {
    if($("#siup_mail").val()) {
    $("#signup_pw").show();
    $("#signup_mail").hide();
    } else alert("메일을 입력하세요.");
});
$("#signup_conf").on("click", function (e) {
    if($("#siup_pw").val()) {
    $("#signup_pw").hide();
    $("#signup_go").show();
    } else alert("비밀번호를 입력하세요.");
});
$("#signup_bgo").on("click", function (e) {
    if($("#siup_pw_c").val()) {
    $("#luanch_img").show();
    luanch_Start();
    } else alert("비밀번호를 확인하세요.");
});
$("#media").on("click", function (e) {
    $("button").hide();
    $("#media").hide();
    $(".media").show();
});
//________________________________________________

function Mobile() { return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent); }
if (!Mobile()) {
    $('body').hide();
    alert("모바일로 접속해주세요.");
}