function check(){
    var eamil1 = document.getElementById("main_email");
    var email2 = document.getElementById("check_email");

    if (email2.value != eamil1.value){
        alert("Input the same email address!");
        return false;
    }
}