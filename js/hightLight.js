jQuery.fn.extend({
  highLight: function(obj) {
    // var defaultObj = {
    //   color: 'red',
    //   backgroundColor: '#ccc'
    // }
    var newObj = $.extend(jQuery.fn.highLight.defaultOptions, obj)
    // var newObj = Object.assign(defaultObj, obj)   //es6方法
    //var newObj = { ...defaultObj, ...obj }       //es8方法
    // if (!obj) {
    //   obj = {
    //     color: 'red',
    //     backgroundColor: '#ccc'
    //   }
    // } else {
    //   if (!obj.color) {
    //     obj.color = 'red'
    //   }
    //   if (!obj.backgroundColor) {
    //     obj.backgroundColor = '#ccc'
    //   }
    // }
    this.css('color', newObj.color).css(
      'backgroundColor',
      newObj.backgroundColor
    )
  }
})
// var defaultOptions
jQuery.fn.highLight.defaultOptions = {
  color: 'red',
  backgroundColor: '#ccc'
}
