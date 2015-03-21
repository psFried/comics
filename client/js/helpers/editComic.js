(function() {
  Template.editComic.onRendered(function(){
    App.currentEditComic = this.data.comic;
  });
})();
