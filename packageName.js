(function(root, factory) {
  if (typeof exports === "object") {
    // CommonJS
    module.exports = factory()
  }
  else if (typeof define === "function" && define.amd) {
    // AMD
    define([], factory)
  }
  else {
    // Global Variables
    root.PackageName = factory()
  }
}(this, function() {
  var PackageName = function(options) {
    this.options = options

    this.options.opt1 = this.options.opt1 || "default"
  }

  PackageName.prototype = {
    fn: function() {

    }
  }

  return PackageName
}))
