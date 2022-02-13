$(document).ready(function () {

    $.get("/api", function(data){
        //console.log(data);


        var flickerAPI = "https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=" + data.apiKey + "&user_id=194257058%40N07&format=json&nojsoncallback=1";
        $.ajax({
        url: flickerAPI,
        dataType: "json", // jsonp
        //jsonpCallback: 'jsonFlickrFeed', // add this property
            success: function (result, status, xhr) {
                //console.log(result);
                $.each(result, function (i, item) {
                    //console.log(i, item);
                    $.each(item.photo, function(n, pic){
                        //console.log(n, pic);
                        var image = "<div class='col-md-4'><img class='float-left' style='width:100%' src='https://live.staticflickr.com/"+ pic.server + "/"+ pic.id + "_" + pic.secret + ".jpg' loading='lazy'><h4 class='text-white'>" + pic.title + "</h4></div>"
                        //$("<img>").attr("src", "https://live.staticflickr.com/"+ pic.server + "/"+ pic.id + "_"+ pic.secret + ".jpg").appendTo("#gallery-div");
                        $("#gallery-div").prepend(image);

                    })

                });
        },
            error: function (xhr, status, error) {
            console.log(xhr, status, error)
            $("#gallery-div").html("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText)
            }
        });


    });

    $.get("/api", function(data){
        console.log();
                                                                                                                                   
        var flickerAPI = "https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=" + data.apiKey + "&user_id=194813608%40N05&format=json&nojsoncallback=1";
        $.ajax({
        url: flickerAPI,
        dataType: "json", // jsonp
        //jsonpCallback: 'jsonFlickrFeed', // add this property
            success: function (result, status, xhr) {
                //console.log(result);
                $.each(result, function (i, item) {
                    //console.log(i, item);
                    $.each(item.photo, function(n, pic){
                        console.log(n, pic);
                        var image = "<div class='col-md-4'><h4 class='text-white text-center'>" + pic.title + "</h4><img class='float-left' style='width:100%; height:240px; padding-right:5px' src='https://live.staticflickr.com/"+ pic.server + "/"+ pic.id + "_" + pic.secret + ".jpg' loading='lazy'></div>"
                        //$("<img>").attr("src", "https://live.staticflickr.com/"+ pic.server + "/"+ pic.id + "_"+ pic.secret + ".jpg").appendTo("#gallery-div");
                        $("#special-gallery").append(image);
                    })

                });
        },
            error: function (xhr, status, error) {
            console.log(xhr, status, error)
            $("special-gallery").html("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText)
            }
        });


    });









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