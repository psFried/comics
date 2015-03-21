Template.panelEdit.onRendered(function(){
  var imgId = this.data.imgId;
  console.log(this.data);
  console.log("render edit panel with img: %s", imgId);
  var image = App.Images.findOne(imgId);
  console.log(image);
  var previewCanvas = new fabric.StaticCanvas('panelEditCanvas' + imgId);
  previewCanvas.loadFromJSON(image.canvas);
  previewCanvas.renderAll();
});
