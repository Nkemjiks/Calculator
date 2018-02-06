var display = '0';
var answer;
function removeSec() {
    $('.question').children().remove();
    $('.answer').children().remove();
}
function remove(){
    if ($('.answer').children().length > 0) {
        $('.question').children().remove();
        $('.answer').children().remove();
        display = '0';
    } 
}
function updateDisplay(num) {
    if (display == '0') {
        display = num;
    } else {
        display += num;
    }
}
function bottom() {
    $('.question').children().remove();
    $('.question').append('<h3>' + display + '</h3>');
}
function updateSign(oper) {
    if (display == '0') {
        display = '0';
    } else {
        display += oper;
    }
}
function allUpdates(num) {
    if (display.length >= 26) {
        alert("Maximum number reached");
    } else {
    remove();
    updateDisplay(num);
    bottom();
    }
}
function allUpdatesOper(oper) {
    remove();
    updateSign(oper);
    bottom();
}
function clear() {
    removeSec();
    if (display.length <= 2 && (display.charAt(display.length - 1) == " ")) {
        display = '0';
    } else if (display.length < 2 && (display.charAt(display.length - 1) !== " ")) {
        display = '0';
    } else if (display.charAt(display.length - 1) == " ") {
        display = display.slice(0, -2);
    } else {
        display = display.slice(0, -1);
    }
    $('.question').append('<h3>' + display + '</h3>');  
}
function deleted() {
    removeSec();
    display = '0';
    $('.question').append('<h3>' + display + '</h3>');
}
function equal() {
    answer = eval(display);
    if (answer.toString().length >= 26) {
        answer = answer.toExponential();
    }
    $('.answer').children().remove();
    $('.answer').append('<h3>' + answer + '</h3>');
}
$(function () {
    //Default view
    $('.question').append('<h3>' + display + '</h3>');

    //When you click each number and operator buttons
    $("#one").click(function () {
        allUpdates("1");
    });
    $("#two").click(function () {
        allUpdates("2");
    });
    $("#three").click(function () {
        allUpdates("3");
    });
    $("#four").click(function () {
        allUpdates("4");
    });
    $("#five").click(function () {
        allUpdates("5");
    });
    $("#six").click(function () {
        allUpdates("6");
    });
    $("#seven").click(function (){
        allUpdates("7");
    });
    $("#eight").click(function () {
        allUpdates("8");
    });
    $("#nine").click(function () {
        allUpdates("9");
    });
    $("#zero").click(function () {
        allUpdates("0");
    });
    $("#point").click(function () {
        allUpdates(".");
    })
    $("#plus").click(function () {
        allUpdatesOper(" + ");
    })
    $("#minus").click(function () {
        allUpdatesOper(" - ");
    })
    $("#multiply").click(function () {
        allUpdatesOper(" * ");
    })
    $("#divide").click(function () {
        allUpdatesOper(" / ");
    });
    //Delete and Equal buttons
    $("#delete").click(function () {
        deleted();
    });
    $("#clear").click(function () {
        clear();
    });
    $("#equal").click(function () {
        equal();
    });
});