
Router.route('/createImage', function() {
  this.render('imageEdit');
});

Router.route('/comics/new', function(){
  var newId = App.Comics.insert({
    title: "My New Comic",
    panels: [],
    user: Meteor.userId()
  });

  this.redirect('/comics/'+ newId);
});

Router.route('/comics/:id', function() {
  this.render('editComic', {
    data: function(){
      return App.Comics.findOne(this.params.id);
    }
  });
});

Router.route('/showImages', function() {
  this.render('imagesView', {
    data: function(){
      var images = App.Images.find();
      console.log("rendering previews for:");
      console.log(images);
      return {images: images};
    }
  });
})

Router.route('/', function() {
  this.render('welcome');
});
