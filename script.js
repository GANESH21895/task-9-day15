var div5 = document.createElement("div");
div5.setAttribute("class","calculator");

div5.innerHTML=`<input type="text" placeholder="0" id="result">`;

var button1 = document.createElement("button");
button1.setAttribute("id","clear");
button1.setAttribute("onclick","Clear()");
button1.innerHTML='C';
div5.append(button1);
var button2 = document.createElement("button");
button2.setAttribute("id","delete");
button2.setAttribute("onclick","del()");
button2.innerHTML="-";
div5.append(button2);
var button3 = document.createElement("button");
button3.setAttribute("id","modu");
button3.setAttribute("onclick","display('%')");
button3.innerHTML="%";
div5.append(button3);
var button4 = document.createElement("button");
button4.setAttribute("id","divi");
button4.setAttribute("onclick","display('/')");
button4.innerHTML="/";
div5.append(button4);
var button5 = document.createElement("button");
button5.setAttribute("id","7");
button5.setAttribute("onclick","display('7')");
button5.innerHTML="7";
div5.append(button5);
var button6 = document.createElement("button");
button6.setAttribute("id","8");
button6.setAttribute("onclick","display('8')");
button6.innerHTML="8";
div5.append(button6);
var button7 = document.createElement("button");
button7.setAttribute("id","9");
button7.setAttribute("onclick","display('9')");
button7.innerHTML="9";
div5.append(button7);
var button8 = document.createElement("button");
button8.setAttribute("id","multiple");
button8.setAttribute("onclick","display('*')");
button8.innerHTML="*";
div5.append(button8);
var button9 = document.createElement("button");
button9.setAttribute("id","4");
button9.setAttribute("onclick","display('4')");
button9.innerHTML="4";
div5.append(button9);
var button10 = document.createElement("button");
button10.setAttribute("id","5");
button10.setAttribute("onclick","display('5')");
button10.innerHTML="5";
div5.append(button10);
var button11 = document.createElement("button");
button11.setAttribute("id","6");
button11.setAttribute("onclick","display('6')");
button11.innerHTML="6";
div5.append(button11);
var button12 = document.createElement("button");
button12.setAttribute("id","subtract");
button12.setAttribute("onclick","display('-')");
button12.innerHTML="-";
div5.append(button12);
var button13 = document.createElement("button");
button13.setAttribute("id","1");
button13.setAttribute("onclick","display('1')");
button13.innerHTML="1";
div5.append(button13);
var button14 = document.createElement("button");
button14.setAttribute("id","2");
button14.setAttribute("onclick","display('2')");
button14.innerHTML="2";
div5.append(button14);
var button15 = document.createElement("button");
button15.setAttribute("id","3");
button15.setAttribute("onclick","display('3')");
button15.innerHTML="3";
div5.append(button15);
var button16 = document.createElement("button");
button16.setAttribute("id","add");
button16.setAttribute("onclick","display('+')");
button16.innerHTML="+";
div5.append(button16);
var button17 = document.createElement("button");
button17.setAttribute("id","0");
button17.setAttribute("onclick","display('.')");
button17.innerHTML=".";
div5.append(button17);
var button18 = document.createElement("button");
button18.setAttribute("id","a");
button18.setAttribute("onclick","display('0')");
button18.innerHTML="0";
div5.append(button18);
var button19 = document.createElement("button");
button19.setAttribute("id","equal");
button19.setAttribute("onclick","Calculate()");
button19.setAttribute("class","equal")
button19.innerHTML="=";
div5.append(button19);

document.getElementById("div3").append(div5);

let output= document.getElementById("result");

function display(num){

    output.value += num;
}
function Calculate(){
    try{
        output.value =eval (output.value);
    }
    catch(err){
        alert("Only numbers are allowed");
    }
}
function Clear(){
    output.value="";
}
function del(){
    output.value=output.value.slice(0,-1);
}