Template.imagePreview.onRendered(function(){
  var previewCanvas = new fabric.StaticCanvas(this.data._id);
  previewCanvas.loadFromJSON(JSON.stringify(this.data.canvas));
  previewCanvas.renderAll();
});
