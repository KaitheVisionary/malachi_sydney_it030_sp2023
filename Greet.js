script> var welcome:

var date = new Date () ;

var hour = date.getHours () ;

var minute = date.getMinutes () ;

var second = date.getSeconds () ;

if (minute < 10) {

minute = "O" + minute;

}

if (second < 10) {

second = "O" + second;

}

if (hour < 12) {

welcome = "good morning";

} else if (hour < 17) {

welcome = "good afternoon";

} else

welcome = "good evening";

document.write ("<h2>" + " «font color='red'»"+ welcome + " </font>" +"welcome to our website")

document.write ("")

<br>" + hour + "."+minute +"."+c