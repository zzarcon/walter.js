# Walter.js [![Build Status](https://travis-ci.org/zzarcon/walter.js.svg?branch=master)](https://travis-ci.org/zzarcon/walter.js)

Walter.js is a Javascript library that does all common things that you usually do when preload images. In this way Walter.js exports an easy Api based on **Promises** and events in wich you can subscribe for know the status of each image.

### API

###### Preload one image
```javascript
var promise = Walter('picture.jpg');
```

###### Preload multiple images
```javascript
var promise = Walter(['picture1.jpg', 'picture2.jpg']);
```

###### Events
```javascript
var promise = Walter(['picture1.jpg', 'picture2.jpg']);

//It's called when each image is loaded
promise.progress(function(index, img) {
  console.log(index, img);
});

//It's called when all images are loaded
promise.then(function(images) {
  console.log('then', images);
});

//It's called if some image has error
promise.catch(function(promise) {
  console.log('catch', promise);
});
```

###### Chaining
You can also use Walter.js with chain style
```javascript
promise.then(onComplete).catch(onError).progress(onUpdate);
```

###### Config
```javascript
Walter.config({
  path: 'assets/images'
});
```

### Dependencies
None :D

### How to Run Unit Tests

### TODO

- [ ] Add unit tests
- [ ] Add RSVP library for support old browsers
- [ ] Add comments to code