  // 选择器
  function $(element) {
    return document.querySelector(element);
  }
  // 测试
  function fileUpload(files){
    let imgStr = '';
    // console.log(files)
    let file = files[0]
    // 创建实例
    let render = new FileReader();
    // 使用FileReader 的 readAsDataURL方法
    // 会将图片进行base 64转码
    render.readAsDataURL(file);
    // 成功后
    render.onload = function (e) {
      imgStr += '<span><img src="'+ e.target.result +'" alt="" /></span>'
      $("#prevUpload").innerHTML = imgStr
    }
  }
  // $('#fileUpload').addEventLister("change", fileUpload(this.files))
