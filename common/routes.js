
Router.route('/createImage', function() {
  this.render('imageEdit');
});

Router.route('/comics', function() {
  this.render('comicsList', {
    data: function() {
      var comics = App.Comics.find();
      return {
        comics: comics
      };
    }
  });
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
      var comic = App.Comics.findOne(this.params.id);
      App.currentEditComic = comic;
      return {
        comic: comic,
        images: App.Images.find()
      }
    }
  });
});

Router.route('/view/:id', function() {
  this.render('comicView', {
    data: function(){
      return App.Comics.findOne(this.params.id);
    }
  });
});

Router.route('/showImages', function() {
  this.render('imagesView', {
    data: function(){
      var images = App.Images.find();
      return {images: images};
    }
  });
})

Router.route('/', function() {
  this.render('welcome');
});
