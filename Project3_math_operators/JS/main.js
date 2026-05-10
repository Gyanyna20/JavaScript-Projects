//Addition
function myAddition() {
    var addition = 2 + 3;
    document.getElementById("Math").innerHTML = "2+3="+ addition; 
}
//Substraction
function mySubstraction() {
    var Substraction = 5 - 1;
    document.getElementById("Math1").innerHTML = "5-1="+ Substraction; 
}
//Multiplication
function myMultiplication() {
    var Multiplication = 3 * 6;
    document.getElementById("Math2").innerHTML = "3*6="+ Multiplication; 
}
//Division
function myDivision() {
    var Division = 50 / 2;
    document.getElementById("Math3").innerHTML = "50/2="+ Division; 
}
//Multiple math operations
function more_Math(){
    var mMath = (4+3)*4/2-4;
     document.getElementById("Math4").innerHTML = "(4+3)*4/2-4="+mMath;
}
//Modulus
function myModulus() {
    var Modulus = 27 % 6;
    document.getElementById("Math5").innerHTML = "27%6="+ Modulus; 
}
//Negation Operator
function myNegationOperator() {
    var NegOp = -5;
    document.getElementById("Math6").innerHTML = NegOp; 
}
//Incrementation
function myIncrementation() {
    var Increment = 6;
    Increment++;
    document.getElementById("Math7").innerHTML = "6++="+ Increment; 
}
//Decrementation
function myDecrementaion() {
    var Decrement = 8;
    Decrement--;
    document.getElementById("Math8").innerHTML = "8--="+ Decrement; 
}
//Random number between 0 and 1
function myRandom(){
    var random = Math.random();
    document.getElementById("Math9").innerHTML = "random="+ random; 
}