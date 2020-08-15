function welcomemsg(msg){
    alert(msg);
    var name = prompt("Type your name: ");
    return name;
}

function massage(){
    document.write("Hello");
    alert("Hi");
}

<!--var x="Hello";-->
<!--welcomemsg(x);-->
<!--x = "Goodbye";-->
<!--welcomemsg(x);-->

var firstname = welcomemsg("Hello");
document.write(firstname);