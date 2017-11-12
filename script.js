// variables
var topics = ["sports", "movies", "funny", "drumming", "fail", "political"];
var topic;
var topicName
  

  // Calling the renderButtons function to display the intial buttons
  renderButtons();

  // Function for displaying topic buttons
  function renderButtons() {

        // delete topic search before searching for another
        $("#buttonsGoHere").empty();

        // Looping through the array of topics
        for (var i = 0; i < topics.length; i++) {

          // Then dynamicaly generating buttons for each topic in the array
          var a = $("<button>");
          // Adding a class of topic to our button
          a.addClass("topic");
          // Adding a data-attribute
          a.attr("data-name", topics[i]);
          // Providing the initial button text
          a.text(topics[i]);
          // Adding the button to the HTML
          $("#buttonsGoHere").append(a);
        }
      }


      // This function handles events where add topic button is clicked
      $("#add-topic").on("click", function(event) {
        // Preventing the buttons default behavior when clicked (which is submitting a form)
        event.preventDefault();
        // This line grabs the input from the textbox
        topic = $("#topic-input").val().trim();
        // Adding the toic from the textbox to our array
        topics.push(topic);
        // Calling renderButtons which handles the processing of our topic array
        renderButtons();
        // empty the input box
        ("#topic-input").empty();
      });


// Event listener for all button elements excluding the add button button
$(".topic").on("click", function() {
   // Adding a click event listener to all elements with a class of "movie"
     $("#gifBox").empty();
      // In this case, the "this" keyword refers to the button that was clicked
        var topicName = $(this).attr("data-name");
 

      // Constructing a URL to search Giphy for gifs regarding that topic
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    topicName + "&api_key=dc6zaTOxFJmzC&limit=10";

      // Performing our AJAX GET request
      $.ajax({
        url: queryURL,
        method: "GET"
      })
        // After the data comes back from the API
        .done(function(response) {

          // Storing an array of results in the results variable
          var results = response.data;

          // Looping over every result item
          for (var i = 0; i < results.length; i++) {

            // Only taking action if the photo has an appropriate rating
            if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
              // Creating a div with the class "item"
              var gifDiv = $("<div class='item'>");

              //store the rating here
              var rating = results[i].rating;

              // Creating a paragraph tag with the result item's rating
              var p = $("<p>").text("Rating: " + rating);

              // Creating an image tag
              var topicImage = $("<img class='gif'>");

              // give the image tag a src attribute of a proprty pulled off the
              // result item
              topicImage.attr("src", results[i].images.fixed_height.url);

              // append the paragraph and topicImage we created to the "gifDiv" div we created
              gifDiv.append(p);
              gifDiv.append(topicImage);

              // prepend the gifDiv to the "#gifBox" div in the HTML
              $("#gifBox").prepend(gifDiv);
            }

          }

        });
      });


// function for when you click on the gif to pause it

$('body').on('click', '.gif', function() {
    var src = $(this).attr("src");
  if($(this).hasClass('playing')){
     //stop
     $(this).attr('src', src.replace(/\.gif/i, "_s.gif"))
     $(this).removeClass('playing');
  } else {
    //play
    $(this).addClass('playing');
    $(this).attr('src', src.replace(/\_s.gif/i, ".gif"))
  }
});