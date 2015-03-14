var myKitties = [{  // the pictures for the project portfolio
    title: "First Project",
    pic: "https://www.petfinder.com/wp-content/uploads/2012/09/Blog-Kitty-Cam-solo.jpg"
}, {
    title: "Second Project",
    pic: "http://www.animal-photography.com/thumbs/red_tabby_long_hair_kitten_~AP-0UJFTC-TH.jpg"
}, {
    title: "Third Project",
    pic: "http://www.animal-photography.com/thumbs/silver_tabby_kittens~AP-0JO6Y9-TH.jpg"
}, {
    title: "Fourth Project",
    pic: "http://www.animal-photography.com/thumbs/silver_tabby_kitten_looking_up~AP-0DLVMB-TH.jpg"
}]; // end of the "project" images loading




$(document).ready(function() {  // Doc ready space

    $(".comment-box").css("background-color", "pink"); // color background for the text box

    $("#button").on("click", function() {  // The "CV" Button

        console.log("clicked");

        var comment = $(".comment-box").val();

        console.log(comment);

        $("#visible-comment").html(comment);

        $("#visible-comment").css("color", "white");

    }); // end of the CV button

    $(".comment-box").on("keyup", function() {  // Characters count in the text box

        console.log("keyup happened");

        var charCount = $(".comment-box").val().length;

        console.log(charCount);

        $("#char-count").html(charCount);

        if (charCount > 15) {
            $("#char-count").css("color", "red");
        } else {
            $("#char-count").css("color", "white");


        };

    }); // end of Characters count in the text box

    var rows = $(".my-row");  // The projects portefolio part

    console.log(rows);

    for (var i = 0; i < rows.length; ++i) {
        if (i % 2 === 0) {
            $(rows[i]).css("background-color", "#EDFFF7");
        };

    };


    for (var i = 0; i < myKitties.length; ++i) {
        $("#" + i).html('<img class="img-responsive" src="' + myKitties[i].pic + '"/>');
    };

    $(".image").mouseenter(function() {
        console.log(myKitties[this.id].title);
        $(this).prepend("<p class='info'><span class='proj-title'>Title:</span> " + myKitties[this.id].title + "</p>");
    }).mouseleave(function() {
        $("p.info").html("");
    }); // end of The projects portefolio part



    function initialize() {   // Google maps for contact
        var mapOptions = {
            center: new google.maps.LatLng(44.840165, -0.570479, 17),
            zoom: 12

        };

        var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

        var marker = new google.maps.Marker({
            position: map.getCenter(),
            map: map,
            title: 'Click to zoom'
        });

        google.maps.event.addListener(marker, 'click', function() {
            map.setZoom(15);
            map.setCenter(marker.getPosition());
        });


    };

    google.maps.event.addDomListener(window, 'load', initialize);  // end of google maps part



}); // end of doc ready, no more code below there
