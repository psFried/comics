//start up client

App.saveCurrentImage = function() {
  console.log("save called");
  var img = App.currentEditingImage;
  if (img) {
    var toSave = {
      user: Meteor.userId(),
      canvas: img.toObject()
    }

    var imgId = App.Images.insert(toSave);
    console.log("saved image: %s", imgId);
  }
};
