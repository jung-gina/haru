function css_Err(tf, el) {
    if (tf) {
        $(el).css('text-decoration', 'red solid line-through');
    } else {
        $(el).css('text-decoration', 'none');
    }
    return tf;
}

function removeById(text) {
    $('#' + text.id).val($('#' + text.id).val().slice(0, -1));
}

function check_length(text) {
    if (32 < text.value.length) {
        removeById(text);
        return 1;
    } else return 0;
}

function check_Blank(text) {
    $(text).css('text-decoration', 'none');
    switch (text.id) {
        case 'key':
            var reg_blank = /\s/;
            if (reg_blank.test(text.value)) removeById(text);
            break;

        case 'id':
            if (check_length(text)) break;
            var reg_id1 = /^[^a-zA-Z]/;
            var reg_id2 = /[^\w\.\_\-]/;
            if (reg_id1.test(text.value)) removeById(text);
            if (reg_id2.test(text.value)) removeById(text);
            break;
        case 'name':
            if (check_length(text)) break;
            var reg_name = /[^\w\_\-]/;
            if (reg_name.test(text.value)) removeById(text);
            break;
        case 'pwd':
        case 'confirm':
            if (check_length(text)) break;
            var reg_pwd = /[^\w\!\@\#\$\%\^\&\*\-\=\+]/;
            if (reg_pwd.test(text.value)) removeById(text);
            break;
        case 'mail':
            var reg_mail = /[^\w\@\.]/;
            if (reg_mail.test(text.value)) removeById(text);
            break;
        case 'mobile':
            var reg_mobile = /[^\d\-]/;
            if (reg_mobile.test(text.value)) removeById(text);
            break;
    }
}

$('input').attr({ onkeyup: "check_Blank(this)", required: "true" });
/* -----------------------------------------------------------------------------*/
function check_Id(msg) {
    var reg_id = /^([a-zA-Z])([\w\.\_\-]){3,31}$/;
    if (css_Err(!reg_id.test(msg.value), msg)) {
        alert('Please check ID\n- The first character must be a letter.\n- combination of 4 to 32 letters, numbers.\n- Special characters(\'.\', \'-\', \'_\')');
        return 0;
    } else return 1;
}

function check_Name(name) {
    var reg_name = /^([\w\_\-]){1,32}$/;
    if (css_Err(!reg_name.test(name.value), name)) {
        alert('Please check Name\n- Special characters(\'-\', \'_\')\n- Maximum: 32');
        return 0;
    } else return 1;
}

function check_Pwd(pwd) {
    var reg_pwd = /^([\w\!\@\#\$\%\^\&\*\-\=\+]){9,32}$/;
    if (css_Err(!reg_pwd.test(pwd.value), pwd)) {
        alert('Please check Password\n- Combination of 9 to 32 letters, numbers, special characters.');
        return 0;
    } else return 1;
}

function match_Pwd(confirm) {
    var pwd = document.getElementById('pwd');
    if (css_Err(pwd.value != confirm.value, confirm)) {
        alert('Please check your password again.')
        return 0;
    } else return 1;
}

function check_Mail(mail) {
    var reg_mail = /^.+@.+\.[^.]+$/;
    if (css_Err(!reg_mail.test(mail.value), mail)) {
        alert('Please check E-mail\n- Only email format can be entered.\n- ~~~@~~~.~~~');
        return 0;
    } else return 1;
}

function check_Mobile(mobile) {
    var reg_mobile = /^\d{3}\-\d{4}\-\d{4}$/;
    if (css_Err(!reg_mobile.test(mobile.value), mobile)) {
        alert('Please check Mobile\n- Only mobile format can be entered.\n- 000-0000-0000');
        return 0;
    } else return 1;
}
/*------------------------------------------------------------------------------------*/
$.fn.serializeObject = function () {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function () {
        if (o[this.name]) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

function conf_submit() {
    var count = 0;
    if (check_Id($('#id')[0])) count++;
    if (check_Name($('#name')[0])) count++;
    if (check_Pwd($('#pwd')[0])) count++;
    if (match_Pwd($('#confirm')[0])) count++;
    if (check_Mail($('#mail')[0])) count++;
    if (check_Mobile($('#mobile')[0])) count++;

    if (count == 6) {
        $.ajax({
            type: 'post',
            url : '1.html',
            //url: 'https://192.168.45.175/sign-up',
            dataType: 'json',
            data: JSON.stringify($('#form').serializeObject()),
            success: function (json) {
                if (json) {
                    if (json.result == true) {
                        console.log('success');
                    }
                }
                return;
            }
        })
    }
}