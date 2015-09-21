$(document).ready(function(){
  $.ajax({
    type: "GET",
    url: "https://turing-birdie.herokuapp.com/api/v1/posts.json",
    success: function(posts) {
      // use this to see output on dev tools with chrome
      //console.table(posts)
      // below $.each is a function the accepts two args first arg is the method, second is what to return
      $.each(posts, function(index, post){
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
})
