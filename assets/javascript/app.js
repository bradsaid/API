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
        var gif = $("#gif-input").val().trim();
        topics.push(gif);
        gifButtons();
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=Z4vKSU5AoUMXiTjlS9jE7xDrLISmaqO3";
         $.ajax({
         url: queryURL,
         method: "GET"
         }).then(function(response) {
      console.log(response);
      console.log(response.data[0]);
      url = response.data[0].images.fixed_width.url
      $("#gif-view").append("<img src=" + url + ">");
    });

    });

});
