
function negative() {
    document.getElementById("display").innerHTML+="-";
}
function num0() {
    document.getElementById("display").innerHTML+="0";
    value = 0;
}
function num1() {
    document.getElementById("display").innerHTML+="1";
}
function num2() {
    document.getElementById("display").innerHTML+="2";
}
function num3() {
    document.getElementById("display").innerHTML+="3";
}
function num4() {
    document.getElementById("display").innerHTML+="4";
}
function num5() {
    document.getElementById("display").innerHTML+="5";
}
function num6() {
    document.getElementById("display").innerHTML+="6";
}
function num7() {
    document.getElementById("display").innerHTML+="7";
}
function num8() {
    document.getElementById("display").innerHTML+="8";
}
function num9() {
    document.getElementById("display").innerHTML+="9";
}
function decimal() {
    document.getElementById("display").innerHTML+=".";
}
function exoponent() {
    document.getElementById("display").innerHTML+="^";
}
function leftParn() {
    document.getElementById("display").innerHTML+="(";
}
function rightParn() {
    document.getElementById("display").innerHTML+=")";
}
function mod() {
    document.getElementById("display").innerHTML+="%";
}
function add() {
    document.getElementById("display").innerHTML+="+";

}
function sub() {
    document.getElementById("display").innerHTML+="-";
}
function mult() {
    document.getElementById("display").innerHTML+="*";
}
function divide() {
    document.getElementById("display").innerHTML+="/";
}

function sqrt(){
    document.getElementById("display").innerHTML+="Math.sqrt(";
}

function display(value){
    document.getElementById("display").value+=value;
}

function calc(){
    var x = document.getElementById("display").innerHTML;
    var y = eval(x);
    document.getElementById("display").innerHTML = y;
    console.log(x)
}

function clears() {
    document.getElementById("display").innerHTML="";

}

function del() {
var x = document.getElementById("display").innerHTML;
document.getElementById("display").innerHTML = x.substring(0, x.length-1);
}

