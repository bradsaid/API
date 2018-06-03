$( document ).ready(function(){

    $("#find-movie").on("click", function(event) {
        event.preventDefault();
        var movie = $("#movie-input").val();
        var queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";
        $.ajax({
        url: queryURL,
        method: "GET"
        }).then(function(response) {
        console.log(response);
        $("#movie-view").append(response.Title);
      });

   
  });

});