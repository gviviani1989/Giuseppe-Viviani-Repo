var button = document.querySelector("button");
var num1 = document.getElementById("val1");
var num2 = document.getElementById("val2");
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(add(+num1.value, +num2.value));
});
