// Generated by CoffeeScript 1.3.3
var Canvas, Human, Particle, Rectangle, Shape,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

Canvas = (function() {

  function Canvas(id, options) {
    this.id = id;
    this.options = options;
    this.w = this.options.width ? this.options.width : 400;
    this.h = this.options.height ? this.options.height : 400;
    this.color = this.options.color ? this.options.color : 'black';
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

  Canvas.prototype.draw = function() {
    this.ctx.fillStyle = this.color;
    return this.ctx.fillRect(0, 0, this.w, this.h);
  };

  Canvas.prototype.render = function(map) {
    var l, obj, _i, _len, _results;
    this.draw();
    l = map.length;
    _results = [];
    for (_i = 0, _len = map.length; _i < _len; _i++) {
      obj = map[_i];
      _results.push(obj.draw());
    }
    return _results;
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
    this.move(this.loc);
    return this.context.fillRect(this.loc.x, this.loc.y, this.loc.x + this.w, this.loc.y + this.h);
  };

  Rectangle.prototype.destroy = function() {
    this.color = 'black';
    draw;

    return Rectangle.__super__.destroy.apply(this, arguments);
  };

  return Rectangle;

})(Shape);

Human = (function() {

  function Human(body, options) {
    var me;
    this.body = body;
    this.options = options;
    this.speed = this.options.speed ? this.options.speed : 50;
    this.actions = {
      "default": true
    };
    me = this;
    $(document).on('keydown', function(e) {
      console.log(e.keyCode);
      me.actions[e.keyCode] = true;
      return console.log(me.actions);
    });
    $(document).on('keyup', function(e) {});
  }

  Human.prototype.update = function(modifier) {
    if (__indexOf.call(this.actions, '38') >= 0) {
      console.log("help");
      return this.body.move(new Particle(this.body.loc.x, this.body.loc.y - this.speed * modifier));
    } else if (__indexOf.call(this.actions, 40) >= 0) {
      return this.body.move(new Particle(this.body.loc.x, this.body.loc.y + this.speed * modifier));
    } else if (__indexOf.call(this.actions, 37) >= 0) {
      return this.body.move(new Particle(this.body.loc.x - this.speed * modifier, this.body.loc.y));
    } else if (__indexOf.call(this.actions, 39) >= 0) {
      return this.body.move(new Particle(this.body.loc.x + this.speed * modifier, this.body.loc.y));
    } else {

    }
  };

  return Human;

})();

$(document).ready(function() {
  var c, h, main, map, options, past, r, roptions, s;
  options = {
    width: document.width - 40,
    height: document.height - 40
  };
  c = new Canvas('test', options);
  c.attach();
  roptions = {
    loc: new Particle(30, 30),
    color: 'red'
  };
  r = new Rectangle(c.ctx, roptions);
  roptions.loc = new Particle(300, 150);
  roptions.color = 'blue';
  s = new Rectangle(c.ctx, roptions);
  map = [r, s];
  h = new Human(r, {});
  past = Date.now();
  main = function() {
    var delta, now;
    now = Date.now();
    delta = now - past;
    h.update(delta / 1000);
    c.render(map);
    return past = now;
  };
  return setInterval(main, 1);
});
