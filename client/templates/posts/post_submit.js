Template.postSubmit.events({
  "submit form": function(event){
     event.preventDefault();

     var post - {
       url: $(event.target).find('[name=url]').val();
       title: $(event.target).find('[name=title]').val();
     };

     post._id = Posts.inset(post);
     Router.go('postPage', post);
  }
});