(function() {
  "use strict";
  var img1 = '1.gif';
  var img2 = '2.jpeg';

  module("Walter", {
    setup: function() {
      Walter.config({
        path: 'assets/images'
      });
    }
  });

  test("Preload one image", function(assert) {
    console.log(window.Promise);
    ok(1 == 1, true)
  });

  test("Preload one image", function(assert) {
    var done1 = assert.async();
    var done2 = assert.async();

    Walter(img1).then(function(images) {
      assert.ok(images.length === 1, true, 'Passing image as string');
      done1();
    });

    Walter([img1]).then(function(images) {
      assert.ok(images.length === 1, true, 'Passing image as array of strings');
      done2();
    });
  });

  test("Preload multiple images", function(assert) {
    var done = assert.async();
    console.log(Promise);
    Walter([img1, img2]).then(function(images) {
      assert.ok(images.length === 2, true);
      done();
    });
  });
})();