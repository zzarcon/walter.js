/*!
 * Img preload v0.1
 * https://github.com/zzarcon/img-preload
 *
 * Copyright (c) 2014 @zzarcon <hezarco@gmail.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * Date: 2014-11-27
 */

(function(exports) {
  function ImgPreload(images, options) {
    if (!images) {
      return new Error('ImgPreload requires a image or a array of images');
    }

    images = typeof images === 'string' ? [images] : images;

    var promises = images.map(function(img) {
      return preloadImage(img);
    });

    return all(promises);
  }

  function preloadImage(path) {
    return new Promise(function(resolve, reject) {

    });
  }

  function all(promises) {
    var promisesToResolve = promises.length;
    var resolvedPromises = 0;

    return new Promise(function(resolve, reject) {
      function onFulfillement() {
        resolvedPromises++;
        resolvedPromises === promisesToResolve && resolve();
      }

      promises.forEach(function(promise) {
        promise.then(onFulfillement);
      });
    });
  }

  exports.ImgPreload = ImgPreload;
})(window);