$( document ).ready(function(){
    let topics = [];
    let gifResponse = "";

    function gifButtons() {
        $("#gif-button-view").empty();
        for (let i = 0; i < topics.length; i++) {
          let newGif = $("<button>");
          newGif.addClass("gif");
          newGif.attr("data-name", topics[i]);
          newGif.text(topics[i]);
          $("#gif-button-view").append(newGif);
        }
      }

    $("#find-gif").on("click", function(event) {
        event.preventDefault();
        let gif = $("#gif-input").val().trim();
        let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=Z4vKSU5AoUMXiTjlS9jE7xDrLISmaqO3&limit=10";
         $.ajax({
         url: queryURL,
         method: "GET"
        }).then(function(response) {
            $("#gif-view").empty();  
            for (var i = 0; i < response.data.length; i++) {
                let stillUrl = response.data[i].images.fixed_height_still.url;      // working on pausing gifs
                console.log(stillUrl);                                               // working on pausing gifs
                let url = response.data[i].images.fixed_height.url;                 // working on pausing gifs
                $("#gif-view").append("<img src=" + url + ">");  // appends each gif
            }
            $("#gif-view").on("click", function() {   // working on pausing gifs
                let stillUrl = $(this).src;
                //$(this).append("<img src=" + stillUrl + ">");
                console.log(stillUrl);
              });
        topics.push(gif);
        gifButtons();    
    });

    function displayGif() {
        let gifButton = $(this).attr("data-name");
        let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifButton + "&api_key=Z4vKSU5AoUMXiTjlS9jE7xDrLISmaqO3&limit=10";
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {
            $("#gif-view").empty();
            for (var i = 0; i < response.data.length; i++) {
                let url = response.data[i].images.fixed_height.url;
                $("#gif-view").append("<img src=" + url + ">");
                
            }
        });

      }

    $(document).on("click", ".gif", displayGif);
    gifButtons();
    });

});


