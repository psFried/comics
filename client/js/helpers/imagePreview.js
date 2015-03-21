Template.imagePreview.onRendered(function(){
  var imgId = this.data._id;
  var previewCanvas = new fabric.StaticCanvas(imgId);
  previewCanvas.loadFromJSON(this.data.canvas);
  previewCanvas.renderAll();

  this.find('.addImgPanel').onclick = function() {
    console.log("addImgToPanel called: %s", imgId);
    var newPanel = {
      imgId: imgId,
      panelText: ""
    };
    App.currentEditComic.panels.push(newPanel);
    App.Comics.update(App.currentEditComic._id, {$push: {panels: newPanel}});
  }
});
