$( document ).ready(function(){
    let topics = [];
    let gifResponse = "";
    let state = "";

    function gifButtons() {
        $("#gif-button-view").empty();
        for (let i = 0; i < topics.length; i++) {
          let newGif = $("<button>");
          newGif.addClass("gifbutton");
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
                let url = response.data[i].images.fixed_height.url;  
                let stillUrl = response.data[i].images.fixed_height_still.url;   
                let rating = response.data[i].rating;
                $("#gif-view").append("<img src=" + url + " " + "data-still=" 
                + stillUrl + " " + "data-animate=" + url + " " + "data-state=" + "still" + " " 
                + "class=" + "gif" + " " + "rating=" + rating  + "><p>Rating: " + rating + "</p>");  // appends each gif
            }
            
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
            console.log(response)
            $("#gif-view").empty();
            for (var i = 0; i < response.data.length; i++) {
                let url = response.data[i].images.fixed_height.url;
                let rating = response.data[i].rating;
                $("#gif-view").append("<img src=" + url + ">", "<p>" + rating + "</p>");
                
            }
        });

      }

      function animateGif() {
        let state = $(this).attr("data-state");
        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }
      }

    $(document).on("click", ".gifbutton", displayGif);
    $(document).on("click", ".gif", animateGif);
    gifButtons();
    });




