(function() {
  var img1 = '1.gif';
  var img2 = '2.jpeg';
  var arr = [img1, img2];
  var images = arr;

  ImgPreload.config({
    path: 'assets/images/'
  });

  var promise = ImgPreload(images);
  promise.then(function(images) {
    console.log('then', images);
  }).progress(function(index, img) {
    console.log('progress');
  }).catch(function() {
    console.log('catch');
  });
})();