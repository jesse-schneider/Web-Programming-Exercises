$(document).ready(function(){
    $("#loginform").submit(function(event){
        event.preventDefault();
        ajaxPost();
    });
});

function ajaxPost(){
    //grab form data
    var formData = {
        email : $("#email").val(),
        pwd : $("#pwd").val()
    }
    $.ajax({
        type : "POST",
        contentType : "application/json",
        url : window.location + "login/attempt",
        data : JSON.stringify(formData),
        dataType : 'json',
        success : function(status){
            if(status.ok == true){
                $("#loginform").removeClass("fail");
                $("#loginform").addClass("success");
                $("#postResultDiv").html("<div id=”postResultDiv”>Logged in Successfully!</div>");
                $("#submitbutton").addClass("invisible");
            }else{
                $("#loginform").removeClass("success");
                $("#loginform").addClass("fail");
                $("#postResultDiv").html("<div id=”errormsg” class=”hidemessage”> User credentials do not match </div>");
            } 
        },
        error : function(e) {
            alert("Error!")
            console.log("Error: ", e);
        }
    });
    resetData();
}

function resetData() {
    $("#email").val("");
    $("#pwd").val("");
}