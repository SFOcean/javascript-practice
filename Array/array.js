
var fruits = ["Banana", "Apple", "Jackfruit", "Orange"];

function loadFruits(){
    document.getElementById("fruits").innerHTML = fruits;
}

function myFunction(){
    var fruit = prompt("Enter a fruit name: ");
    document.getElementById("len").innerHTML = fruits.length;
    fruits[fruits.length] = fruit;
    document.getElementById("fruits").innerHTML = fruits;
}