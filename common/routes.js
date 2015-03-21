
Router.route('/createImage', function() {
  this.render('imageEdit');
});

Router.route('/', function() {
  this.render('welcome');
});
