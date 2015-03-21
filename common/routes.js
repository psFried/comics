
Router.route('/createImage', function() {
  this.render('imageEdit');
});

Router.route('/showImages', function() {
  this.render('imagesView', {
    data: function(){
      var images = App.Images.find();
      console.log("rendering previews for:");
      console.log(images);
      return images;
    }
  });
})

Router.route('/', function() {
  this.render('welcome');
});
