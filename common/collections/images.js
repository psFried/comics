(function() {

  var Images = new Mongo.Collection("images");

  console.log("setting up Images collection");


  App.Images = Images;
})();
