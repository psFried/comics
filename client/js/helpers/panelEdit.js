Template.panelEdit.onRendered(function(){
  var image = App.Images.findOne(this.data.msgId);
  var previewCanvas = new fabric.StaticCanvas(this.data.msgId);
  previewCanvas.loadFromJSON(image.canvas);
  previewCanvas.renderAll();
});
