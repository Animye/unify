;(function($) {
  $.fn.loop = function(options) {
    this.each(function() {
      var loop = new Loop($(this))
      loop.settings = $.extend({}, loop.defaultOptions, options)
      loop.init()
    })
  }
  function Loop(element) {
    this.dom = element
    this.settings = null
    this.ind = 0
  }
  Loop.prototype.init = function() {
    this.dom.addClass('loop')
    this.setsize()
    if (this.settings.ispagination) {
      this.cerate()
    }
    if (this.settings.isChoice) {
      this.btn()
    }
  }
  Loop.prototype.page = function() {}
  Loop.prototype.cerate = function() {
    var that = this.dom
    var the = this
    var imgNum = that.find('a>img').length
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
      the.ind = ind
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
  // var num1 = 0
  Loop.prototype.btn = function() {
    var that1 = this.dom
    var the = this
    var imgNum = that1.find('a>img').length

    var left = $('<button class="left"><</btton>')
    var right = $('<button class="right">></btton>')
    that1.append(left).append(right)

    that1.find('.right').click(function() {
      the.ind++
      if (the.ind > imgNum - 1) {
        the.ind = 0
      }
      that1
        .find('a>img')
        .eq(the.ind)
        .css({ 'z-index': 1, opacity: 1 })
        .parent()
        .siblings('a')
        .children('img')
        .css({ 'z-index': 0, opacity: 0 })
      that1
        .find('.list>li>span')
        .eq(the.ind)
        .css({ 'background-color': 'hotpink' })
        .parent()
        .siblings('li')
        .children('span')
        .css({ 'background-color': '#fff' })
    })
    that1.find('.left').click(function() {
      the.ind--
      if (the.ind < 0) {
        the.ind = imgNum - 1
      }
      that1
        .find('a>img')
        .eq(the.ind)
        .css({ 'z-index': 1, opacity: 1 })
        .parent()
        .siblings('a')
        .children('img')
        .css({ 'z-index': 0, opacity: 0 })
      that1
        .find('.list>li>span')
        .eq(the.ind)
        .css({ 'background-color': 'hotpink' })
        .parent()
        .siblings('li')
        .children('span')
        .css({ 'background-color': '#fff' })
    })
  }
  Loop.prototype.setsize = function() {
    this.dom.width(this.settings.width)
    this.dom.height(this.settings.height)
  }
  Loop.prototype.defaultOptions = {
    width: 670,
    height: 329,
    ispagination: true,
    isChoice: true
  }
})($)
