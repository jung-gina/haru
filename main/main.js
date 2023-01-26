$("#dot2").css("visibility", "hidden");
$("#dot3").css("visibility", "hidden");
$("#write").hide();
$("#my_pg").hide();

const setVh = () => {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight}px`)
};
window.addEventListener('resize', setVh);
setVh();
$("#box_input").one("click", function (e) {
    $("#box_input").val('');
});
function date_box() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDay();
    const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    var dayOf = week[date.getDay()];
}
function rand_theme() {
    var theme_list = [
        "죽음", "무인도", "당신의 인생", "딸기의 맛있음을 표현", "오늘하루 어땟나요?",
        "여름의 해변", "노래써보기", "가장즐거운 순간", "술마시고 싶은 순간", "지금 떠오르는 단어",
        "하늘", "희망 연봉과 이유", "자식이름 짓기", "최근 본 광고에 대해", "사랑이란",
        "나의 꿈", "내가 행복을 느끼는 순간", "오늘 꾼 꿈", "좋아하는 동물", "좋아하는 음식",
        "기적", "피자", "똥", "좋아하는 책", "감사합니다. 로 끝내기",
        "사랑해. 로 끝내기", "고마워. 로 끝내기", "외로움", "오늘을 5자료 표현하기", "돈",
        "구름", "우유", "당신을 응원해요", "I need,,,", "I hope,,,"];
    var num = Math.floor(Math.random() * 35);
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
//--------------------------------
var cont_high = screen.height - 314;
$("#main_cont").css("height", cont_high);
$("#box").css("height", (cont_high - 200));
$("#box_input").css("height", (cont_high - 220));
//--------------------------------
$("#menu_btn1").on("click", function (e) {
    $("#dot1").css("visibility", "visible");
    $("#dot2").css("visibility", "hidden");
    $("#dot3").css("visibility", "hidden");
    $("#title2").show();
    $("#title3").show();
    $("#read").show();
    $("#write").hide();
    $("#my_pg").hide();
});
$("#menu_btn2").on("click", function (e) {
    $("#dot1").css("visibility", "hidden");
    $("#dot2").css("visibility", "visible");
    $("#dot3").css("visibility", "hidden");
    $("#title2").hide();
    $("#title3").hide();
    $("#read").hide();
    $("#write").show();
    $("#box_input").val(rand_msg());
    $("#theme_in").text(rand_theme());
    $("#my_pg").hide();
});
$("#menu_btn3").on("click", function (e) {
    $("#dot1").css("visibility", "hidden");
    $("#dot2").css("visibility", "hidden");
    $("#dot3").css("visibility", "visible");
    $("#title2").hide();
    $("#title3").hide();
    $("#read").hide();
    $("#write").hide();
    $("#my_pg").show();
});
//-----------------------------------------------
$("#finish_btn").on("click", function (e) {
    if (confirm("저장하시겠습니까?")) {
        alert("수고하셨습니다♥");
    }
}); 