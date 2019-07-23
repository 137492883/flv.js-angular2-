# browser-md5-file

MD5 file in browser. Base on [js-spark-md5](https://github.com/satazor/js-spark-md5).

### Demo

[demo](http://forsigner.com/browser-md5-file)


### Install

#### bower

```bash
$ bower install browser-md5-file --save
```

#### npm

```bash
$ npm install browser-md5-file --save
```

### Usage

#### Use as global variable

```html
<script src="bower_components/browser-md5-file/dist/browser-md5-file.js"></script>
```

```js
var el = document.getElementById('upload');
el.addEventListener('change', handle, false);

function handle(e) {
  var file = e.target.files[0];
  browserMD5File(file, function (err, md5) {
    console.log(md5); // 97027eb624f85892c69c4bcec8ab0f11
  });
}
```

#### Use with npm

```js
var browserMD5File = require('browser-md5-file');
var el = document.getElementById('upload');

el.addEventListener('change', handle, false);

function handle(e) {
  var file = e.target.files[0];
  browserMD5File(file, function (err, md5) {
    console.log(md5); // 97027eb624f85892c69c4bcec8ab0f11
  });
}
```

#### Use with jQuery

```js
$('#upload').bind('change', function () {
  var file = e.target.files[0];
  browserMD5File(file, function (err, md5) {
    console.log(md5); // 97027eb624f85892c69c4bcec8ab0f11
  });
});
```

### Browser compatibility

- IE10+
- Firefox
- Chrome
- Safari
- Opera


### License

  [MIT](LICENSE)
