$(document).ready(function () {
    $("#contact-form").submit(function(event){
        event.preventDefault();
        //var formData = $("#contact-form").serializeArray();
        var email = $('#emailInput').val();
        var name = $('#name').val();
        var subject = $('#subject').val();
        var text = $('#textArea').val() + " " + name + ", " +  " Phone - " + $('#number').val();
        console.log(text);

        $.post("/form", 
        {
            userEmail: email,
            userName: name,
            userSubject: subject,
            userText: text
        },
        function (data){
            console.log(data);

        }
        );
        reload();
    });
    function reload(){
        window.location.href = "/contact"
        alert("Your Inquiry was recieved");
    };
 });