$("#dot2").css("visibility", "hidden");
$("#dot3").css("visibility", "hidden");
$("#write").hide();
$("#my_pg").hide();
$("#set_btn").hide();
$("#set_box").hide();
$("#sort_btn2").hide();

//btn
$(".read_btn1").on("click", function (e) {
    alert("😍😍😍😍😍");
});
$(".read_btn2").on("click", function (e) {
    alert("😀😀😀😀😀");
});
$(".read_btn3").on("click", function (e) {
    alert("😭😭😭😭😭");
});
$(".read_btn4").on("click", function (e) {
    alert("🙄🙄🙄🙄🙄");
});
$(".read_btn5").on("click", function (e) {
    alert("😤😤😤😤😤");
});
$("#search_btn").on("click", function (e) {
    var search_msg = prompt("검색어를 입력하세요.", "");
});
$("#set_box").on("click", function (e) {
    $("#set_box").show();
});

$("#sort_btn1").on("click", function (e) {
    $("#sort_btn1").hide();
    $("#sort_btn2").show();
    reload_read_list();
});
$("#sort_btn2").on("click", function (e) {
    $("#sort_btn1").show();
    $("#sort_btn2").hide();
    reload_read_list();
});
$("#pager_btn").on("click", function (e) {
    reload_read_list();
});
function date_box() {
    var date = new Date();
    var year = String(date.getFullYear());
    year = year.slice(2);
    var month = date.getMonth() + 1;
    var day = date.getDate();
    const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    var dayOf = week[date.getDay()];

    return year + ". " + month + ". " + day + "  " + dayOf;
}
$("#date_box").text(date_box);
function rand_theme() {
    var theme_list = [
        "죽음", "무인도", "당신의 인생", "딸기의 맛있음을 표현", "오늘하루 어땟나요?",
        "여름의 해변", "노래써보기", "가장즐거운 순간", "술마시고 싶은 순간", "지금 떠오르는 단어",
        "하늘", "희망 연봉과 이유", "자식이름 짓기", "최근 본 광고에 대해", "사랑이란",
        "나의 꿈", "내가 행복을 느끼는 순간", "오늘 꾼 꿈", "좋아하는 동물", "좋아하는 음식",
        "기적", "피자", "똥", "좋아하는 책", "감사합니다. 로 끝내기",
        "사랑해. 로 끝내기", "고마워. 로 끝내기", "외로움", "오늘을 5자료 표현하기", "돈",
        "구름", "우유", "당신을 응원해요", "I need,,,", "I hope,,,",
        "한양대", "애플", "킹받쥬?", "아무것도 못하쥬?", "우짤래미 저짤래미"];
    var num = Math.floor(Math.random() * 40);
    return theme_list[num];
}
function rand_msg() {
    var msg_list = ["작가란 오늘 아침에 글을 쓴 사람이다.",
        "글을 쓰고 싶다면 종이와 펜 혹은 컴퓨터,\n그리고 약간의 배짱만 있으면 된다.",
        "메롱메롱 우리가 1등이지렁~",
        "1등 우린데 어쩔티비",
        "당신이 전할 수 있는 이야기를 써라.\n당신보다 더 똑똑하고 우수한 작가들은 많다.",
        "글쓰기 재능을 연마하기 전에 뻔뻔함을 기르라고 말하고 싶다.",
        "글쓰기는 글쓰기를 통해서만 배울 수 있다.\n바깥에서 어떤 배움의 길도 없다.",
        "제대로 쓰려말고,\n무조건 써라.",
        "영감이 찾아오길 기다려서는 안된다.\n몽둥이를 들고 그것을 쫒아 가야한다.",
        "말하는 것 처럼 쓰라."];

    var msg_ment = "\n\n지금 바로 시작하세요.>"
    var num = Math.floor(Math.random() * 10);
    return msg_list[num] + msg_ment;
}
function rand_read() {
    var main_lsit = [
        "Anti-ti-ti-ti fragile, fragile", "가시밭길 위로 riding, you made me boost up", "Anti-ti-ti-ti fragile", "거짓으로 가득 찬 party 가렵지도 않아", "내 뒤에 말들이 많아, 나도 첨 듣는 내 rival",
        "모두 기도해 내 falling 그 손 위로 I'ma jump in", "걸어봐 위엄 like a lion", "눈빛엔 거대한 desire ", "더 부어 gasoline on fire", "불길 속에 다시 날아 rising ",
        "잊지 마, 내가 두고 온 toe shoes", "무슨 말이 더 필요해?", "무시 마, 내가 걸어온 커리어", "I go to ride 'til I die, die", "더 높이 가줄게",
        "내가 바랐던 세계 젤 위에 ", "떨어져도 돼", "I'm anti-fragile, anti-fragile", "난 지금 on my way", "갖다버려 줘 너의 fairy tale",
        "Now you know my name", "(Anti-fragile)", "Anti-ti-ti-ti fragile, fragile", "Anti-ti-ti-ti fragile", "I'm anti-fragile, anti-fragile"
    ];
    var num = Math.floor(Math.random() * 25);
    return main_lsit[num];
}
function reload_read_list() {
    for (var i = 1; i < 11; i++) {
        $("#read_t" + i).text(rand_theme());
        $("#read_m" + i).text(rand_read());
    }
}
reload_read_list();
//--------------------------------
const cont_high = window.innerHeight - 314;
$("#main_cont").css("height", cont_high);
$("#box").css("height", (cont_high - 200));
$("#box_input").css("height", (cont_high - 220));
$("#read_list").css("height", cont_high - 80);
$("#read_list").css("overflow", "auto");
//$("#my_list").css("height", cont_high - 250);
$("#my_list").css("overflow", "auto");
//--------------------------------
$("#menu_btn1").on("click", function (e) {
    $("#dot1").css("visibility", "visible");
    $("#dot2").css("visibility", "hidden");
    $("#dot3").css("visibility", "hidden");
    $("#title2").show();
    $("#read").show();
    $("#write").hide();
    $("#my_pg").hide();
    $("#search_btn").show();
    $("#set_btn").hide();
    reload_read_list();
});
$("#menu_btn2").on("click", function (e) {
    $("#dot1").css("visibility", "hidden");
    $("#dot2").css("visibility", "visible");
    $("#dot3").css("visibility", "hidden");
    $("#title2").hide();
    $("#read").hide();
    $("#write").show();
    $("#box_input").val(rand_msg());
    $("#theme_in").text(rand_theme());
    $("#my_pg").hide();
    $("#box_input").one("click", function (e) {
        $("#box_input").val('');
    });
    $("#search_btn").hide();
    $("#set_btn").hide();
});
$("#menu_btn3").on("click", function (e) {
    $("#dot1").css("visibility", "hidden");
    $("#dot2").css("visibility", "hidden");
    $("#dot3").css("visibility", "visible");
    $("#title2").show();
    $("#read").hide();
    $("#write").hide();
    $("#my_pg").show();
    $("#search_btn").hide();
    $("#set_btn").show();
});
//-----------------------------------------------
$("#finish_btn").on("click", function (e) {
    if (confirm("저장하시겠습니까?")) {
        alert("수고하셨습니다♥");
    }
});

function Mobile() { return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent); }
if (!Mobile()) {
    $('body').hide();
    alert("모바일로 접속해주세요.");
}