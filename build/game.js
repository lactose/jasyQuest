// Generated by CoffeeScript 1.3.3
var Canvas, Particle, Rectangle, Shape,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Canvas = (function() {

  function Canvas(id, options) {
    this.id = id;
    this.options = options;
    this.w = this.options.width ? this.options.width : 400;
    this.h = this.options.height ? this.options.height : 400;
    this.canvas = document.createElement("canvas");
    this.canvas.width = this.w;
    this.canvas.height = this.h;
    this.canvas.id = this.id;
  }

  Canvas.prototype.attach = function(ancestor) {
    this.ancestor = ancestor;
    if (this.ancestor) {
      $('body').find("#" + this.ancestor).append($(this.canvas));
    } else {
      $('body').append($(this.canvas));
    }
    return this.ctx = this.canvas.getContext("2d");
  };

  Canvas.prototype.dimensions = function() {
    return [this.w, this.h];
  };

  Canvas.prototype.destroy = function() {
    $("#" + this.id).remove();
    return delete this;
  };

  return Canvas;

})();

Particle = (function() {

  function Particle(x, y) {
    this.x = x;
    this.y = y;
  }

  Particle.prototype.move = function(x, y) {
    this.x = x;
    return this.y = y;
  };

  Particle.prototype.destroy = function() {
    return delete this;
  };

  return Particle;

})();

Shape = (function() {

  function Shape(context, options) {
    this.context = context;
    this.options = options;
    this.loc = this.options.loc ? this.options.loc : new Particle(0, 0);
    this.color = this.options.color ? this.options.color : 'white';
    this.w = this.options.width ? this.options.width : 1;
    this.h = this.options.height ? this.options.height : 1;
  }

  Shape.prototype.move = function(point) {
    this.loc = point;
    return this.context.fillStyle = this.color;
  };

  Shape.prototype.destroy = function() {
    return delete this;
  };

  return Shape;

})();

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

$(document).ready(function() {
  var c, options, r, roptions;
  options = {
    width: document.width - 40,
    height: document.height - 40
  };
  c = new Canvas('test', options);
  c.attach();
  c.ctx.fillStyle = 'black';
  c.ctx.fillRect(0, 0, c.w, c.h);
  roptions = {
    loc: new Particle(30, 30),
    color: 'red'
  };
  r = new Rectangle(c.ctx, roptions);
  r.draw;
  r.move(new Particle(200, 200));
  r.draw;
  console.log(r.loc.x);
  console.log(r.loc.y);
  return console.log(r.color);
});
