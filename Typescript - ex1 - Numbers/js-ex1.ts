const button = document.querySelector("button");
const num1 = document.getElementById("val1")! as HTMLInputElement;
const num2 = document.getElementById("val2")! as HTMLInputElement;

function add (num1: number, num2: number) {
    return num1 + num2;
}

button.addEventListener("click", function () {
    console.log(add(+num1.value,+num2.value));
});