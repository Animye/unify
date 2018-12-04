jQuery.fn.extend({
  loop: function(options) {
    var that = this
    var defaultOptions = {
      width: 670,
      height: 329,
      ispagination: true,
      isChoice: true
    }
    var currentOptions = $.extend(defaultOptions, options)
    that.width(currentOptions.width)
    that.height(currentOptions.height)
    that.addClass('loop')
    var imgNum = that.find('a>img').length
    if (currentOptions.ispagination) {
      var ul = $('<ul class="list"></ul>')
      for (var i = 0; i < imgNum; i++) {
        var li = $('<li>').html(`<span></span>`)
        ul.append(li)
      }
      that.append(ul)
      that.find('.list>li>span').click(function() {
        var ind = $(this)
          .parent()
          .index()
        num1 = ind
        that
          .find('a>img')
          .eq(ind)
          .css({ 'z-index': 1, opacity: 1 })
          .parent()
          .siblings('a')
          .children('img')
          .css({ 'z-index': 0, opacity: 0 })
        $(this)
          .css({ 'background-color': 'hotpink' })
          .parent()
          .siblings('li')
          .children('span')
          .css({ 'background-color': '#fff' })
      })
    }

    var num1 = 0
    if (currentOptions.isChoice) {
      var left = $('<button class="left"><</btton>')
      var right = $('<button class="right">></btton>')
      that.append(left)
      that.append(right)

      that.find('.right').click(function() {
        num1++
        if (num1 > imgNum - 1) {
          num1 = 0
        }
        that
          .find('a>img')
          .eq(num1)
          .css({ 'z-index': 1, opacity: 1 })
          .parent()
          .siblings('a')
          .children('img')
          .css({ 'z-index': 0, opacity: 0 })
        that
          .find('.list>li>span')
          .eq(num1)
          .css({ 'background-color': 'hotpink' })
          .parent()
          .siblings('li')
          .children('span')
          .css({ 'background-color': '#fff' })
      })
      that.find('.left').click(function() {
        num1--
        if (num1 < 0) {
          num1 = imgNum - 1
        }
        that
          .find('a>img')
          .eq(num1)
          .css({ 'z-index': 1, opacity: 1 })
          .parent()
          .siblings('a')
          .children('img')
          .css({ 'z-index': 0, opacity: 0 })
        that
          .find('.list>li>span')
          .eq(num1)
          .css({ 'background-color': 'hotpink' })
          .parent()
          .siblings('li')
          .children('span')
          .css({ 'background-color': '#fff' })
      })
    }
    var fun = null
    function ran() {
      fun = setInterval(function() {
        num1++
        if (num1 > imgNum - 1) {
          num1 = 0
        }
        that
          .find('a>img')
          .eq(num1)
          .css({ 'z-index': 1, opacity: 1 })
          .parent()
          .siblings('a')
          .children('img')
          .css({ 'z-index': 0, opacity: 0 })
        that
          .find('.list>li>span')
          .eq(num1)
          .css({ 'background-color': 'hotpink' })
          .parent()
          .siblings('li')
          .children('span')
          .css({ 'background-color': '#fff' })
      }, 750)
    }
    ran()
    that.mouseenter(function() {
      clearInterval(fun)
    })
    that.mouseleave(function() {
      ran()
    })
  }
})
