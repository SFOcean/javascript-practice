function upDate(element){

    /*2) Change the text  of the div with the id = "image" 
    to the alt text of the preview image */
    document.getElementById('image').innerHTML = element.alt;

    /*1) change the url for the background image of the div with the id = "image" 
    to the source file of the preview image*/
    img = element.src;
    document.getElementById('image').style.backgroundImage = "url('" +img+ "')";
}

function unDo(){

    /*2) Change the text  of the div with the id = "image" 
    back to the original text.  You can use the html code to see what that original text was
    */
    document.getElementById('image').innerHTML = 'Hover over an imgae';

    /*1) Update the url for the background image of the div with the id = "image" 
    back to the orginal-image.  You can use the css code to see what that original URL was*/
    document.getElementById('image').style.backgroundImage = "url('')";
}