// alert("Hello world!");

//Chapter 35-38
//Q no 1
// var date = new Date();
// console.log(date);

// Q no 2 //with html
// function fullName(){
//     var firstName = document.getElementById("firstName").value
//     var lastName = document.getElementById("lastName").value

//     alert(firstName + " " + lastName)
// }

// Q no 3 //with html
// function add(){
//     var firstNum = +prompt("Enter first number you want to add");
//     var lastNum = +prompt("Enter last number you want to add");
//     var add = firstNum + lastNum
//     alert(add)
// }

// Q no 4 with html
// function calc(){
//     var num1 = +prompt("Enter a first number");
//     var operator = prompt("Write a operator tou want to operate");
//     var num2 = +prompt("Enter a second number");
//     var value = document.getElementById("value");
//     if(operator === "+"){
//         value.innerHTML = num1 + num2
//     }
//     else if(operator === "-"){
//         value.innerHTML = num1 - num2
//     }
//     else if(operator === "*"){
//         value.innerHTML = num1 * num2
//     }
//     else if(operator === "/"){
//         value.innerHTML = num1 / num2
//     }
//     else{
//         alert("Enter a write value")
//         value.innerHTML = "Enter a write value"
//     }
// }

// Q no 5
// function squareNum(){
//     var value1 = +prompt("Enter a value")
//     var squareValue = Math.pow(value1, 2)
//     alert(squareValue)
// }

// Q no 6
// function factorialize() {
//     var num = +prompt("Enter anumber");
//     if (num === 0 || num === 1){
//       return document.write("1");}
//     for (var i = num - 1; i >= 1; i--) {
//       num *= i;
//     }
//     document.write(num);
//   }

// Q no 7
// function counting(){
//     var input1 = document.getElementById("input1").value;
//     var input2 = document.getElementById("input2").value;
//     for(i = input1; i <= input2; i++){
//         document.write(i + "<br>")
//     }
// }

// Q no 8
// function calculateHypotenuse(){
//     var base = +prompt("Write a base");
//     var perpendicular = +prompt("Write a perpendicular");
//     function calculateSquare(){
//         var sqBase = Math.pow(base, 2);
//         var perpendBase = Math.pow(perpendicular, 2);
//         var hyptenuse = sqBase + perpendBase
//         console.log(sqBase)
//         console.log(perpendBase);
//         console.log(hyptenuse);
//         alert("Hyptenuse is " + hyptenuse)
//     }
//     calculateSquare()
// }

// Q no 9
// var widthVal = +prompt("Write a width of a rectangle");
// var heightVal = +prompt("Write a height of a rectangle");
// function areaOfRectangle(width, height) {
//     var areaRectangle = width * height
//     alert("Area of a rectangle is " + areaRectangle)
// }
// areaOfRectangle(widthVal, heightVal)

// Q no 10
// var string = prompt("Enter a string");
// function checkPalindrome(str) {
//   var length = str.length;
//   console.log(length);
//   for (i = 0; i < length / 2; i++) {
//     if (str[i] == str[length - 1 - i]) {
//       alert("It is a palindrome");
//       break;
//     }
//     alert("It is not a palindrome");
//     break;
//   }
// }
// var value = checkPalindrome(string);

// Q no 11
// var Newsentence = prompt("Write any sentence")
// function toUpperCase(sentence){
//     var words = sentence.split(" ")
//     console.log(words);
//     for(i = 0; i < words.length; i++){
//         words[i] = words[i][0].toUpperCase() + words[i].substr(1);
//     }
//     document.write(words.join(" "))
// }
// toUpperCase(Newsentence)

// Q no 12
// var sentence = prompt("Write a sentence");
// var arrsentence = sentence.split(" ");
// var checkLength = 0;
// for (var i = 0; i < arrsentence.length; i++) {
//     if (arrsentence[i].length > checkLength) {
//     var checkLength = arrsentence[i].length
//     var longest = arrsentence[i];
//   }
// }
// console.log(longest);

// Q no 13
// function charCount(str, letter) {
//   var letterCount = 0;
//   for (i = 0; i < str.length; i++) {
//     if (str.charAt(i) == letter) {
//       letterCount += 1;
//     }
// }
// alert(letterCount);
// }
// var para = prompt("Write a para or a sentence");
// var CountLetter = prompt("Write a letter to count");
// charCount(para, CountLetter);

// Q no 14
function calcCircumference(){
    var radius = +prompt("Write a radius of a circle")
    if(radius > 0){
        var Circumference = 2 * (radius * Math.PI)
        alert("The circumference of a circle is " + Circumference)
    }
    else{
        alert("Error - radius must be a whole number greater than 0.")
    }
}

function calcArea(){
    var radius = +prompt("Write a radius of a circle")
    if(radius > 0){
        var sqRadius = Math.pow(radius, 2);
        var area = Math.PI * sqRadius
        // console.log(sqRadius); 
        alert("The area of a circle is " + area)
    }
    else{
        alert("Error - radius must be a whole number greater than 0.")
    }
}