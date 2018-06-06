$( document ).ready(function(){
    let topics = [];


    $("#find-gif").on("click", function(event) {
        event.preventDefault();
        var gif = $("#gif-input").val();
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
