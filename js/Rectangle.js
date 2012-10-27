// Generated by CoffeeScript 1.3.3
(function() {
  var Rectangle,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Rectangle = (function(_super) {

    __extends(Rectangle, _super);

    function Rectangle(context, options) {
      this.context = context;
      this.options = options;
      Rectangle.__super__.constructor.call(this, this.context, this.options);
    }

    Rectangle.prototype.move = function(point) {
      return Rectangle.__super__.move.call(this, point);
    };

    Rectangle.prototype.draw = function() {
      return this.context.fillRect(this.loc.x, this.loc.y, point.x + this.w, point.y + this.h);
    };

    Rectangle.prototype.destroy = function() {
      this.color = 'black';
      draw;

      return Rectangle.__super__.destroy.apply(this, arguments);
    };

    return Rectangle;

  })(Shape);

}).call(this);
