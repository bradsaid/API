$( document ).ready(function(){
    let topics = [];

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
        topics.push(gif);
        gifButtons();
        let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=Z4vKSU5AoUMXiTjlS9jE7xDrLISmaqO3";
         $.ajax({
         url: queryURL,
         method: "GET"
        }).then(function(response) {
            console.log(response);
            console.log(response.data[0]);
            url = response.data[0].images.fixed_width.url;
            $("#gif-view").append("<img src=" + url + ">");
    });

    function displayGif() {
        let gifButton = $(this).attr("data-name");
        let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifButton + "&api_key=Z4vKSU5AoUMXiTjlS9jE7xDrLISmaqO3";
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {
          console.log(response);
          url = response.data[0].images.fixed_width.url;
            $("#gif-view").append("<img src=" + url + ">");
        });

      }

    $(document).on("click", ".gif", displayGif);
    gifButtons();
    });

});


