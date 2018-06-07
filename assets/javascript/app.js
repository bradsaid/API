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
                let stillVal = response.data[i].images.fixed_height_still.url;   // respone is not yet defined 
                console.log(stillVal)      
                let url = response.data[i].images.fixed_height.url;
                $("#gif-view").append("<img src=" + url + ">");
                //console.log(response.data[i]);
            }
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

      $("#gif-view").on("click", function() {
        let stillUrl = $(this).src;
        $(this).append("<img src=" + stillUrl + ">");

        // STEP TWO: make a variable named state and then store the image's data-state into it.
        // Use the .attr() method for this.
  
        // ============== FILL IN CODE HERE FOR STEP TWO =========================
  
        // CODE GOES HERE
  
        // =============================================
  
        // STEP THREE: Check if the variable state is equal to 'still',
        // then update the src attribute of this image to it's data-animate value,
        // and update the data-state attribute to 'animate'.
  
        // If state is equal to 'animate', then update the src attribute of this
        // image to it's data-still value and update the data-state attribute to 'still'
        // ============== FILL IN CODE HERE FOR STEP THREE =========================
  
        // CODE GOES HERE
  
        // ==============================================
  
        // STEP FOUR: open the file in the browser and click on the images.
        // Then click again to pause.
      });  

    $(document).on("click", ".gif", displayGif);
    gifButtons();
    });

});


