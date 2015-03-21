Template.imagePreview.onRendered(function(){
  var previewCanvas = new fabric.Canvas(this.data._id);
  previewCanvas.loadFromJSON(JSON.stringify(this.data.canvas));
  previewCanvas.renderAll();
});
