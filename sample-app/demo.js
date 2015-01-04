(function() {
  var img1 = '1.gif';
  var img2 = '2.jpeg';
  var arr = [img1, img2];
  var images = arr;

  Walter.config({
    path: 'assets/images'
  });

  var promise = Walter(images);

  promise.progress(function(index, img) {
    console.log(index, img);
  });
  promise.then(function(images) {
    console.log('then', images);
  });
  promise.catch(function(promise) {
    console.log('catch', promise);
  });
})();