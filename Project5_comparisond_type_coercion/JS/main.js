var x=true;
//type of operator
document.write(typeof x);
document.write("<br");

function my_coercion(){
document.write("10"+5);
}
//infinity operator
function my_infinit() {
    var infinit = 2E310;
    document.getElementById("Infinit").innerHTML = infinit; 
}
//negative infinity
function my_ninfinit() {
    var ninfinit = -2E310;
    document.getElementById("NInfinit").innerHTML = ninfinit; 
}
//greater returnig true
function greater(){
    document.write(20>3);
}
//lesser returning false
function lesser(){
    document.write(20>3);
}
//double equal returnoing false
function nequal(){
document.write(20==3);
}
//double equal returning true
function equal(){
document.write(20-5==15);
}
//Triple eqaul
function triple_equal(){
var A=5, B=5, C="5", D="six";
document.write(A===B); //mach data type and value
document.write(A===D); //diffrent data type and value
document.write(B===C);  //diffrent data type but mach value
document.write(C===D);  //mach data type but diffrent value
}
//AND operator
function and(){
    document.write(20>3 && 30<55);
    document.write(20>3 && 30>66);
}
//OR operator
function or(){
    document.write(20>3 || 30<55);
    document.write(20<3 || 30>66);
}
//NOT operator
function my_not(){
    document.getElementById("not").innerHTML = !(20>10); 
    
}
//negative not operator
function my_nnot(){
document.getElementById("nnot").innerHTML = !(5>10); 
}
//
console.log(3+1);
console.log(4>9);