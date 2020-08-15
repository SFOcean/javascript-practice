function billingFunction(){

    var name = document.getElementById("shippingName");
    var zip = document.getElementById("shippingZip");

    //Fills the name and zip if checked
    if (document.getElementById("same").checked){
        document.getElementById("billingName").value = name.value;
        document.getElementById("billingZip").value = zip.value;
    }

    //Clears the field if unchecked
    else{
        document.getElementById("billingName").value = "";
        document.getElementById("billingZip").value = "";
    }
}