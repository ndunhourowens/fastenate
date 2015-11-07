$(function(){
  $.getJSON("/api/my_boards.json", function(response){
    console.log(response.data.children);

    for(var i =0; i < response.data.children.length;i++){
      var $title = response.data.children[i].data.title;
      var $content = $("#posting").append($title + "<br>");
      var $picture = $("<img src=" +  response.data.children[i].data.thumbnail + ">");
      $content.append($picture);

    }
  });
});
