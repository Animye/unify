// function _$(selector) {
//   return obj.init(selector)
// }
// var obj = {
//   changeColor: function(color) {
//     this.dom.style.color = color
//   },
//   init: function(selector) {
//     this.dom = document.querySelector(selector)
//     return this
//   }
// }
function _$(selector) {
  return new Selector(selector)
}
_$.prototype = {
  changeColor: function(color) {
    var domAll = this.dom
    for (var i = 0; i < domAll.length; i++) {
      domAll[i].style.color = color
    }
    return this
  },
  attr: function(attrName, attrValue) {
    var len = arguments.length
    if (len > 1) {
      var domAll = this.dom
      for (var i = 0; i < domAll.length; i++) {
        domAll[i].setAttribute(attrName, attrValue)
      }
      return this
    } else {
      return this.dom[0].getAttribute(attrName)
    }
  },
  css: function(cssName, cssValue) {
    var len = arguments.length
    var domAll = this.dom
    if (len === 2) {
      for (var i = 0; i < domAll.length; i++) {
        domAll[i].style[cssName] = cssValue
      }
      return this
    } else if (len === 1) {
      if (Object.prototype.toString.call(cssName) === '[object Object]') {
        var cssObj = cssName
        for (var i = 0; i < domAll.length; i++) {
          for (var j in cssObj) {
            domAll[i].style[j] = cssObj[j]
          }
        }
        return this
      } else {
        return window.getComputedStyle(domAll[0], null)[cssName]
      }
    }
  }
}
function Selector(selector) {
  this.dom = document.querySelectorAll(selector)

  // return this
}
Selector.prototype = _$.prototype
