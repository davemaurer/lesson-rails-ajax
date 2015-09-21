$(document).ready(function(){
  $.ajax({
    type: "GET",
    url: "https://turing-birdie.herokuapp.com/api/v1/posts.json",
    success: function(posts) {
      // use this to see output on dev tools with chrome
      //console.table(posts)
      // below $.each is a function the accepts two args first arg is the method, second is what to return
      $.each(posts, function(index, post){
        // .each(posts) is for the function(posts) above, so for each of these do the code below
        // #latest-posts is the identifier in the view file
        $("#latest-posts").append(
          "<div class='post' data-id='"
        + post.id
        + "'><h6>Published on "
        + post.created_at
        + "</h6><p>"
        + post.description
        + "</p></div>"
        )
      })
    }
  })
// need to capture create post button event, so inspect element on it for it's id

  // THE CODE BELOW WILL POST WHAT YOU TYPE INTO THE INPUT BOX WHEN YOU CLICK CREATE POST
  $("#create-post").on("click", function(){
    //**.on("click") listens for button click
    //console.log("clicking")
    //var post=$("#post-description").val()
    var postParams= {
      post: {
        description: $("#post-description").val()
      }
    };
    //**this console.log will show what you type into the box in the dev tools console
  $.ajax({
    type: "POST",
    url: "https://turing-birdie.herokuapp.com/api/v1/posts.json",
    data: postParams,
    success: function(post) {
      $("#latest-posts").append(
        "<div class='post' data-id='"
        + post.id
        + "'><h6>Published on "
        + post.created_at
        + "</h6><p>"
        + post.description
        + "</p></div>"
      )}
    })
  })
});
