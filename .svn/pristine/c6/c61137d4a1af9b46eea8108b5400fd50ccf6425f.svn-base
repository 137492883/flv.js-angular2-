'use strict';

var SparkMD5 = require('spark-md5');

module.exports = function (file, callback) {
  var blobSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice;
  var chunkSize = 2097152;
  var chunks = Math.ceil(file.size / chunkSize);
  var currentChunk = 0;
  var spark = new SparkMD5.ArrayBuffer();
  var reader = new FileReader();

  loadNext();

  reader.onloadend = function (e) {
    spark.append(e.target.result); // Append array buffer
    currentChunk++;

    if (currentChunk < chunks) {
      loadNext();
    } else {
      callback(null, spark.end());
    }
  };

  reader.onerror = function () {
    callback('oops, something went wrong.');
  };

  /////////////////////////
  function loadNext() {
    var start = currentChunk * chunkSize;
    var end = ((start + chunkSize) >= file.size) ? file.size : start + chunkSize;

    reader.readAsArrayBuffer(blobSlice.call(file, start, end));
  }

};
