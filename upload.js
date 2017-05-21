(function (win, doc) {
  // 选择器
  function $(element) {
    return doc.querySelector(element);
  }
  console.log($('#fileUpload'))
})(window, document)
