function closeMe() {
    // Find the element
    x = document.getElementById("demo");
    // Option 1: Change the style attribute directly
    x.style.display="none";

    //option 2: Change the clss
    //x.classname = "closed"';
}

function openMe() {
    // Find the element
    x = document.getElementById("demo");
    // Option 1: Change the style attribute directly
    x.style.display="block";

    //option 2: Change the clss
    //x.classname = "open"';
}