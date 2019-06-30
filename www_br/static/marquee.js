
var Prototype = {
  Version: '1.5.0_rc0',
  K: function(x) {return x}
}

var Class = {
  create: function() {
    return function() {
      this.initialize.apply(this, arguments);
    }
  }
}

Object.extend = function(destination, source) {
  for (var property in source) {
    destination[property] = source[property];
  }
  return destination;
}

Function.prototype.bind = function() {
  var __method = this, args = $A(arguments), object = args.shift();
  return function() {
    return __method.apply(object, args.concat($A(arguments)));
  }
}

Function.prototype.bindAsEventListener = function(object) {
  var __method = this;
  return function(event) {
    return __method.call(object, event || window.event);
  }
}

Object.extend(Number.prototype, {
  succ: function() {
    return this + 1;
  }
});

Object.extend(String.prototype, {
  camelize: function() {
    var oStringList = this.split('-');
    if (oStringList.length == 1) return oStringList[0];

    var camelizedString = this.indexOf('-') == 0
      ? oStringList[0].charAt(0).toUpperCase() + oStringList[0].substring(1)
      : oStringList[0];

    for (var i = 1, len = oStringList.length; i < len; i++) {
      var s = oStringList[i];
      camelizedString += s.charAt(0).toUpperCase() + s.substring(1);
    }

    return camelizedString;
  }

});

var $break    = new Object();
var $continue = new Object();

var Enumerable = {
  each: function(iterator) {
    var index = 0;
    try {
      this._each(function(value) {
        try {
          iterator(value, index++);
        } catch (e) {
          if (e != $continue) throw e;
        }
      });
    } catch (e) {
      if (e != $break) throw e;
    }
  },

  all: function(iterator) {
    var result = true;
    this.each(function(value, index) {
      result = result && !!(iterator || Prototype.K)(value, index);
      if (!result) throw $break;
    });
    return result;
  },

  any: function(iterator) {
    var result = true;
    this.each(function(value, index) {
      if (result = !!(iterator || Prototype.K)(value, index))
        throw $break;
    });
    return result;
  },

  collect: function(iterator) {
    var results = [];
    this.each(function(value, index) {
      results.push(iterator(value, index));
    });
    return results;
  },

  findAll: function(iterator) {
    var results = [];
    this.each(function(value, index) {
      if (iterator(value, index))
        results.push(value);
    });
    return results;
  },

  include: function(object) {
    var found = false;
    this.each(function(value) {
      if (value == object) {
        found = true;
        throw $break;
      }
    });
    return found;
  },

  inject: function(memo, iterator) {
    this.each(function(value, index) {
      memo = iterator(memo, value, index);
    });
    return memo;
  },

  max: function(iterator) {
    var result;
    this.each(function(value, index) {
      value = (iterator || Prototype.K)(value, index);
      if (result == undefined || value >= result)
        result = value;
    });
    return result;
  },

  min: function(iterator) {
    var result;
    this.each(function(value, index) {
      value = (iterator || Prototype.K)(value, index);
      if (result == undefined || value < result)
        result = value;
    });
    return result;
  },

  pluck: function(property) {
    var results = [];
    this.each(function(value, index) {
      results.push(value[property]);
    });
    return results;
  },

  reject: function(iterator) {
    var results = [];
    this.each(function(value, index) {
      if (!iterator(value, index))
        results.push(value);
    });
    return results;
  },

  toArray: function() {
    return this.collect(Prototype.K);
  }
}

Object.extend(Enumerable, {
  map:     Enumerable.collect,
  select:  Enumerable.findAll,
  member:  Enumerable.include,
  entries: Enumerable.toArray
});
var $A = Array.from = function(iterable) {
  if (!iterable) return [];
  if (iterable.toArray) {
    return iterable.toArray();
  } else {
    var results = [];
    for (var i = 0; i < iterable.length; i++)
      results.push(iterable[i]);
    return results;
  }
}

Object.extend(Array.prototype, Enumerable);

if (!Array.prototype._reverse)
  Array.prototype._reverse = Array.prototype.reverse;

Object.extend(Array.prototype, {
  _each: function(iterator) {
    for (var i = 0; i < this.length; i++)
      iterator(this[i]);
  },

  clear: function() {
    this.length = 0;
    return this;
  },

  first: function() {
    return this[0];
  },

  last: function() {
    return this[this.length - 1];
  },

  compact: function() {
    return this.select(function(value) {
      return value != undefined || value != null;
    });
  },

  flatten: function() {
    return this.inject([], function(array, value) {
      return array.concat(value && value.constructor == Array ?
        value.flatten() : [value]);
    });
  },

  without: function() {
    var values = $A(arguments);
    return this.select(function(value) {
      return !values.include(value);
    });
  },

  indexOf: function(object) {
    for (var i = 0; i < this.length; i++)
      if (this[i] == object) return i;
    return -1;
  },

  reverse: function(inline) {
    return (inline !== false ? this : this.toArray())._reverse();
  }
});
var Hash = {
  _each: function(iterator) {
    for (var key in this) {
      var value = this[key];
      if (typeof value == 'function') continue;

      var pair = [key, value];
      pair.key = key;
      pair.value = value;
      iterator(pair);
    }
  },

  keys: function() {
    return this.pluck('key');
  },

  values: function() {
    return this.pluck('value');
  }
}

ObjectRange = Class.create();
Object.extend(ObjectRange.prototype, Enumerable);
Object.extend(ObjectRange.prototype, {
  initialize: function(start, end, exclusive) {
    this.start = start;
    this.end = end;
    this.exclusive = exclusive;
  },

  _each: function(iterator) {
    var value = this.start;
    do {
      iterator(value);
      value = value.succ();
    } while (this.include(value));
  },

  include: function(value) {
    if (value < this.start)
      return false;
    if (this.exclusive)
      return value < this.end;
    return value <= this.end;
  }
});

var $R = function(start, end, exclusive) {
  return new ObjectRange(start, end, exclusive);
}

function $() {
  var results = [], element;
  for (var i = 0; i < arguments.length; i++) {
    element = arguments[i];
    if (typeof element == 'string')
      element = document.getElementById(element);
    results.push(Element.extend(element));
  }
  return results.length < 2 ? results[0] : results;
}

if (!window.Element)
  var Element = new Object();

Element.extend = function(element) {
  if (!element) return;
  if (_nativeExtensions) return element;

  if (!element._extended && element.tagName && element != window) {
    var methods = Element.Methods, cache = Element.extend.cache;
    for (property in methods) {
      var value = methods[property];
      if (typeof value == 'function')
        element[property] = cache.findOrStore(value);
    }
  }

  element._extended = true;
  return element;
}

Element.extend.cache = {
  findOrStore: function(value) {
    return this[value] = this[value] || function() {
      return value.apply(null, [this].concat($A(arguments)));
    }
  }
}

Element.Methods = {
  hide: function() {
    for (var i = 0; i < arguments.length; i++) {
      var element = $(arguments[i]);
      element.style.display = 'none';
    }
  },

  show: function() {
    for (var i = 0; i < arguments.length; i++) {
      var element = $(arguments[i]);
      element.style.display = '';
    }
  },

  remove: function(element) {
    element = $(element);
    element.parentNode.removeChild(element);
  },

  getHeight: function(element) {
    element = $(element);
    return element.offsetHeight;
  },

  getStyle: function(element, style) {
    element = $(element);
    var value = element.style[style.camelize()];
    if (!value) {
      if (document.defaultView && document.defaultView.getComputedStyle) {
        var css = document.defaultView.getComputedStyle(element, null);
        value = css ? css.getPropertyValue(style) : null;
      } else if (element.currentStyle) {
        value = element.currentStyle[style.camelize()];
      }
    }

    if (window.opera && ['left', 'top', 'right', 'bottom'].include(style))
      if (Element.getStyle(element, 'position') == 'static') value = 'auto';

    return value == 'auto' ? null : value;
  },

  setStyle: function(element, style) {
    element = $(element);
    for (var name in style)
      element.style[name.camelize()] = style[name];
  },

  getDimensions: function(element) {
    element = $(element);
    if (Element.getStyle(element, 'display') != 'none')
      return {width: element.offsetWidth, height: element.offsetHeight};

    // All *Width and *Height properties give 0 on elements with display none,
    // so enable the element temporarily
    var els = element.style;
    var originalVisibility = els.visibility;
    var originalPosition = els.position;
    els.visibility = 'hidden';
    els.position = 'absolute';
    els.display = '';
    var originalWidth = element.clientWidth;
    var originalHeight = element.clientHeight;
    els.display = 'none';
    els.position = originalPosition;
    els.visibility = originalVisibility;
    return {width: originalWidth, height: originalHeight};
  }

}

Object.extend(Element, Element.Methods);

var _nativeExtensions = false;

if (!window.Event) {
  var Event = new Object();
}

Object.extend(Event, {
  KEY_BACKSPACE: 8,
  KEY_TAB:       9,
  KEY_RETURN:   13,
  KEY_ESC:      27,
  KEY_LEFT:     37,
  KEY_UP:       38,
  KEY_RIGHT:    39,
  KEY_DOWN:     40,
  KEY_DELETE:   46,

  element: function(event) {
    return event.target || event.srcElement;
  },

  pointerX: function(event) {
    return event.pageX || (event.clientX +
      (document.documentElement.scrollLeft || document.body.scrollLeft));
  },

  pointerY: function(event) {
    return event.pageY || (event.clientY +
      (document.documentElement.scrollTop || document.body.scrollTop));
  },

  stop: function(event) {
    if (event.preventDefault) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.returnValue = false;
      event.cancelBubble = true;
    }
  },

  observers: false,

  _observeAndCache: function(element, name, observer, useCapture) {
    if (!this.observers) this.observers = [];
    if (element.addEventListener) {
      this.observers.push([element, name, observer, useCapture]);
      element.addEventListener(name, observer, useCapture);
    } else if (element.attachEvent) {
      this.observers.push([element, name, observer, useCapture]);
      element.attachEvent('on' + name, observer);
    }
  },

  unloadCache: function() {
    if (!Event.observers) return;
    for (var i = 0; i < Event.observers.length; i++) {
      Event.stopObserving.apply(this, Event.observers[i]);
      Event.observers[i][0] = null;
    }
    Event.observers = false;
  },

  observe: function(element, name, observer, useCapture) {
    var element = $(element);
    useCapture = useCapture || false;

    if (name == 'keypress' &&
        (navigator.appVersion.match(/Konqueror|Safari|KHTML/)
        || element.attachEvent))
      name = 'keydown';

    this._observeAndCache(element, name, observer, useCapture);
  },

  stopObserving: function(element, name, observer, useCapture) {
    var element = $(element);
    useCapture = useCapture || false;

    if (name == 'keypress' &&
        (navigator.appVersion.match(/Konqueror|Safari|KHTML/)
        || element.detachEvent))
      name = 'keydown';

    if (element.removeEventListener) {
      element.removeEventListener(name, observer, useCapture);
    } else if (element.detachEvent) {
      element.detachEvent('on' + name, observer);
    }
  }
});


if (navigator.appVersion.match(/\bMSIE\b/))
  Event.observe(window, 'unload', Event.unloadCache, false);
var Position = {
  includeScrollOffsets: false,

  prepare: function() {
    this.deltaX =  window.pageXOffset
                || document.documentElement.scrollLeft
                || document.body.scrollLeft
                || 0;
    this.deltaY =  window.pageYOffset
                || document.documentElement.scrollTop
                || document.body.scrollTop
                || 0;
  },

  realOffset: function(element) {
    var valueT = 0, valueL = 0;
    do {
      valueT += element.scrollTop  || 0;
      valueL += element.scrollLeft || 0;
      element = element.parentNode;
    } while (element);
    return [valueL, valueT];
  },

  cumulativeOffset: function(element) {
    var valueT = 0, valueL = 0;
    do {
      valueT += element.offsetTop  || 0;
      valueL += element.offsetLeft || 0;
      element = element.offsetParent;
    } while (element);
    return [valueL, valueT];
  },

  positionedOffset: function(element) {
    var valueT = 0, valueL = 0;
    do {
      valueT += element.offsetTop  || 0;
      valueL += element.offsetLeft || 0;
      element = element.offsetParent;
      if (element) {
        p = Element.getStyle(element, 'position');
        if (p == 'relative' || p == 'absolute') break;
      }
    } while (element);
    return [valueL, valueT];
  }

}

if (/Konqueror|Safari|KHTML/.test(navigator.userAgent)) {
  Position.cumulativeOffset = function(element) {
    var valueT = 0, valueL = 0;
    do {
      valueT += element.offsetTop  || 0;
      valueL += element.offsetLeft || 0;
      if (element.offsetParent == document.body)
        if (Element.getStyle(element, 'position') == 'absolute') break;

      element = element.offsetParent;
    } while (element);

    return [valueL, valueT];
  }
}

var Marquee = Class.create();
Marquee.prototype = {
	BASE: 		1,
	MARQUEE: 	2,
	OPACITY: 	4,
	EDGE: 		8,
	
	items: 		[],
	options: 	{},
	maxZIndex: 	1,
	ratio:		0,
	
	initialize: function(element) {
		this.onFinishDrag = this.finishDrag.bindAsEventListener(this);
		this.onUpdateDrag = this.updateDrag.bindAsEventListener(this);
		this.onWindResize = this.render.bindAsEventListener(this);
		this.onKeyPressed = this.keyPress.bindAsEventListener(this);
		
		Event.observe(document, "mouseup", this.onFinishDrag);
		Event.observe(document, "mousemove", this.onUpdateDrag);
		Event.observe(window, 'resize', this.onWindResize);
		
		if (element) {
			this.add(element, arguments[1]);
		};
	},
	
	add: function(element) {
		element = $(element);
		if (!element) return;
		
		var options = Object.extend({
			ratio: 0,
			preview: false,
			previewWidth: 120,
			previewHeight: 120,
			onUpdate: null,
			onBeforeUpdate: null,
			color: 'black',
			opacity: 0.75,
			type:	'crop',		// window or crop, marquee or rect, other
			allowResize: true,
			allowHotKeys: true,
			hideEdges: false,
			coords: {x1: 0, y1: 0, x2: 0, y2: 0, width: 0, height: 0}
		}, arguments[1] || {});
		var id = this.items.length;
		this.activeId = id;
		
		var landing = document.createElement('DIV');
		landing.className = "marquee-landing";
		landing.mtype = this.BASE;
		landing.id = 'rmt_landing_' + id;
		landing.onselectstart = this._bibb;
		
		var pos = Position.positionedOffset(element);

		Element.setStyle(landing, {
			width: element.offsetWidth + 'px',
			height: element.offsetHeight + 'px',
			zIndex: this.getMaxZIndex(),
			left: pos[0] + 'px',
			top: pos[1] + 'px'
		});

		var marquee = document.createElement('DIV');
		marquee.className = "marquee-element";
		marquee.mtype = this.MARQUEE;
		marquee.id = 'rmt_marquee_' + id;
		marquee.onselectstart = this._bibb;
		Element.hide(marquee);
		
		var wind = document.createElement('DIV');
		wind.className = "marquee-window";
		wind.id = 'rmt_window_' + id;
		wind.mtype = this.MARQUEE;
		wind.number = 5;
		wind.onselectstart = this._bibb;
		marquee.appendChild(wind);
		
		var o1 = document.createElement('DIV');
		o1.className = "marquee-opacity";
		o1.mtype = this.OPACITY;
		o1.onselectstart = this._bibb;
		var o2 = o1.cloneNode(true);
		o2.mtype = this.OPACITY;
		o2.onselectstart = this._bibb;
		Element.setStyle(o2, {left: 0});
		
		var o3 = o1.cloneNode(true);
		o3.mtype = this.OPACITY;
		o3.onselectstart = this._bibb;
		Element.setStyle(o3, {right: 0});

		var o4 = o1.cloneNode(true);
		o4.mtype = this.OPACITY;
		o4.onselectstart = this._bibb;
		Element.setStyle(o1, {
			top: 0,
			left: 0,
			width: "100%"
		});

		Element.setStyle(o4, {
			bottom: 0,
			left: 0,
			width: "100%"
		});

		marquee.o1 = o1;
		marquee.o2 = o2;
		marquee.o3 = o3;
		marquee.o4 = o4;
		
		var listener = document.createElement('INPUT');
		listener.className = "marquee-listener";
		listener.style.zIndex = this.getMaxZIndex();
		listener.onselectstart = this._bibb;
		listener.id = 'rmt_listener_' + id;
		Event.observe(listener, "keydown", this.onKeyPressed);
		
		var edge = document.createElement('DIV');
		edge.className = "marquee-edge";
		edge.onselectstart = this._bibb;
		
		var edge1 = edge.cloneNode(true);
		edge1.number = 1;
		edge1.mtype = this.EDGE;
		marquee.appendChild(edge1);
		Element.setStyle(edge1, {left: '0%', top: '0%', cursor: 'nw-resize'});
		var edge2 = edge.cloneNode(true);
		edge2.number = 2;
		edge2.mtype = this.EDGE;
		marquee.appendChild(edge2);
		Element.setStyle(edge2, {left: '50%', top: '0%', cursor: 'n-resize'});
		var edge3 = edge.cloneNode(true);
		edge3.number = 3;
		edge3.mtype = this.EDGE;
		marquee.appendChild(edge3);
		Element.setStyle(edge3, {left: '100%', top: '0%', cursor: 'ne-resize'});
		var edge4 = edge.cloneNode(true);
		edge4.number = 4;
		edge4.mtype = this.EDGE;
		marquee.appendChild(edge4);
		Element.setStyle(edge4, {left: '0%', top: '50%', cursor: 'w-resize'});
		var edge6 = edge.cloneNode(true);
		edge6.number = 6;
		edge6.mtype = this.EDGE;
		marquee.appendChild(edge6);
		Element.setStyle(edge6, {left: '100%', top: '50%', cursor: 'w-resize'});
		var edge7 = edge.cloneNode(true);
		edge7.mtype = this.EDGE;
		edge7.number = 7;
		marquee.appendChild(edge7);
		Element.setStyle(edge7, {left: '0%', top: '100%', cursor: 'ne-resize'});
		var edge8 = edge.cloneNode(true);
		edge8.number = 8;
		edge8.mtype = this.EDGE;
		Element.setStyle(edge8, {left: '50%', top: '100%', cursor: 'n-resize'});
		marquee.appendChild(edge8);
		var edge9 = edge.cloneNode(true);
		edge9.number = 9;
		edge9.mtype = this.EDGE;
		Element.setStyle(edge9, {left: '100%', top: '100%', cursor: 'nw-resize'});

		marquee.appendChild(edge9);
		marquee.number = 5;
		
		landing.appendChild(o1);
		landing.appendChild(o2);
		landing.appendChild(o3);
		landing.appendChild(o4);
		landing.appendChild(marquee);
		landing.appendChild(listener);
		element.parentNode.insertBefore(landing, element);
		
		var preview = $(options.preview);
		if (preview) {
			var pImage = new Image();
			pImage.src = element.tagName == 'IMG' ? element.src : element.style.backgroundImage;
			pImage.className = "marquee-preview";
			preview.appendChild(pImage);
			
			Element.setStyle(preview, {
				overflow: 'hidden',
				position: preview.style.position == 'absolute' ? 'absolute' : 'relative',
				width: 0, height: 0,
				fontSize: '1px', lineHeight: '0%'
			});
		};
		
		
		options.onLandClick = onLandClick;
		this.items.push({
			id: id,
			marquee: marquee,
			element: element,
			coords: options.coords,
			wind: wind,
			options: options,
			preview: preview,
			pImage: pImage,
			listener: listener,
			zIndex: this.getMaxZIndex()
		});
		
		this.setRatio(options.ratio);
		this.maxZIndex++;
		this.setOpacity(options.opacity);
		this.setColor(options.color);
		this.setType(options.type);
		if (options.hideEdges) this.hideEdges();
		if (options.coords.width || options.coords.x2)
			this.setCoords(
				options.coords.x1, 
				options.coords.y1, 
				options.coords.width ? options.coords.width : options.coords.x2 - options.coords.x1,
				options.coords.height ? options.coords.height : options.coords.y2 - options.coords.y1
			);

		var onLandClick = this.initDrag.bind(this, id);
		var onBeforeFocus = this.setFocus.bind(this, id);
		Event.observe(landing, 'mousedown', onLandClick);
		Event.observe(landing, 'mouseup', onBeforeFocus);
	},
	
	setFocus: function(id) {
		if (!this.getOption(id, 'allowHotKeys')) return;
		var listener = this.items[id].listener;
		listener.focus();
	},
	
	setRandomColor: function() {
		var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
		var r1 = Math.round(Math.random()*15);
		var r2 = Math.round(Math.random()*15);
		var r3 = Math.round(Math.random()*15);
		this.setColor('#' + numbers[r1] + numbers[r2] + numbers[r3]);
	},
	
	enable: function(id) {
		Event.observe(this.getMarquee(id).parentNode, "mousedown", this.getOption(id, 'onLandClick'));
	},
	
	disable: function(id) {
		Event.stopObserving(this.getMarquee(id).parentNode, "mousedown",  this.getOption(id, 'onLandClick'));
	},
	
	getId: function() {
		return this.activeId;
	},
	
	accessResize: function(access, id) {
		access = (access == undefined) ? true : false;
		this.setOption(id, 'allowResize', access);
		if (access) this.showEdges(id); else this.hideEdges(id);
	},
	
	accessHotKeys: function(access, id) {
		access = (access == undefined) ? true : false;
		this.setOption(id, 'allowHotKeys', access);
	},
	
	getMaxZIndex: function() {
		return this.maxZIndex;
	},
	
	setRatio: function(ratio) {
		this.items[this.activeId].options.ratio = ratio;
		var marquee = this.items[this.activeId].marquee;
		if (!this.getOption(this.activeId, 'allowResize') || this.getOption(this.activeId, 'hideEdges')) return;
		$A(marquee.childNodes).each(function(item){
			if (item.className && item.className == 'marquee-edge') {
				item.style.display = (item.number % 2 == 0) && ratio ? 'none' : 'block';
			};
		});
	},

	getRatio: function(id) {
		return this.ratio ? this.ratio : this.items[id || this.activeId].options.ratio;
	},
		
	initDrag: function(id, event) {
		event = event || window.event;
		if (!event) return;
		var element = Event.element(event);
		var marquee = this.getMarquee(id);
		if (!marquee || !element.mtype) return;

		var image = this.getElement(id);

		this.dragging = true;
		Position.prepare();
		Element.show(marquee);
		
		this.startPosition = Position.cumulativeOffset(image);
		this.startOffset = Position.positionedOffset(marquee);
		this.startDimension = Element.getDimensions(marquee);
		this.startMovingPoint = [Event.pointerX(event) - this.startPosition[0], Event.pointerY(event) - this.startPosition[1]];
		this.activeEdge = element.number;
		this.activeId = id;
		
		if (element.mtype & (this.OPACITY | this.BASE)) {
			this.startOffset = this.startMovingPoint;
		};
		
		Event.stop(event);
	},
	
	_bibb: function(event) {
		return false;
	},
	
	updateDrag: function(event) {
		if (!this.dragging) return;

		// fix for IE - onmousemove very frequent listening
		this._currentTime = new Date();
		if ((this._currentTime - this._lastUpdate) < 32) {
			return;
		};
		this._lastUpdate = new Date();
		
		var options = this.items[this.activeId].options;
		if (typeof options.onBeforeUpdate == 'function' && !options.onBeforeUpdate()) return;
		
		var ratio = this.getRatio();
		if (event.shiftKey && !ratio) {
			this.ratio = 1;
		};

	    var pointer = [Event.pointerX(event) - this.startPosition[0], Event.pointerY(event) - this.startPosition[1]];
		var shifting = [pointer[0] - this.startMovingPoint[0], pointer[1] - this.startMovingPoint[1]];

		switch (this.activeEdge) {
			case 1:
				shifting = this.snap(shifting[0], shifting[1], 1);
				var newDimension = {
						width: this.startDimension.width - shifting[0], 
						height: this.startDimension.height - shifting[1]
				};
				
				if (newDimension.width - 2 < 0)
					shifting[0] += newDimension.width - 2;
				if (newDimension.height - 2 < 0)
					shifting[1] += newDimension.height - 2;
				break;

			case 2:
				var newDimension = {
						width: this.startDimension.width, 
						height: this.startDimension.height - shifting[1]
				};
				
				shifting[0] = 0;
				if (newDimension.height - 2 < 0)
					shifting[1] += newDimension.height - 2;
				break;
			
			case 3:
				shifting = this.snap(shifting[0], shifting[1], -1);
				var newDimension = {
						width: this.startDimension.width + shifting[0], 
						height: this.startDimension.height - shifting[1]
				};

				shifting[0] = 0;
				if (newDimension.width - 2 < 0)
					shifting[0] += newDimension.width - 2;
				if (newDimension.height - 2 < 0)
					shifting[1] += newDimension.height - 2;
				break;

			case 4:
				var newDimension = {
						width: this.startDimension.width - shifting[0], 
						height: this.startDimension.height
				};
				
				shifting[1] = 0;
				if (newDimension.width - 2 < 0)
					shifting[0] += newDimension.width - 2;
				break;
			
			case 6:
				var newDimension = {
						width: this.startDimension.width + shifting[0], 
						height: this.startDimension.height
				};
				
				shifting[0] = 0;
				shifting[1] = 0;
				if (newDimension.width - 2 < 0)
					shifting[0] += newDimension.width - 2;
				break;
			
			case 7:
				shifting = this.snap(shifting[0], shifting[1], -1);
				var newDimension = {
						width: this.startDimension.width - shifting[0], 
						height: this.startDimension.height + shifting[1]
				};
				
				shifting[1] = 0;
				if (newDimension.width - 2 < 0)
					shifting[0] += newDimension.width - 2;
				if (newDimension.height - 2 < 0)
					shifting[1] += newDimension.height - 2;
				break;

			case 8:
				var newDimension = {
						width: this.startDimension.width, 
						height: this.startDimension.height + shifting[1]
				};
				
				shifting[0] = 0;
				shifting[1] = 0;
				if (newDimension.height - 2 < 0)
					shifting[1] += newDimension.height - 2;
				break;
				
			case 9:
				shifting = this.snap(shifting[0], shifting[1], 1);
				var newDimension = {
						width: this.startDimension.width + shifting[0], 
						height: this.startDimension.height + shifting[1]
				};

				shifting[0] = 0;
				shifting[1] = 0;
				if (newDimension.width - 2 < 0)
					shifting[0] += newDimension.width - 2;
				if (newDimension.height - 2 < 0)
					shifting[1] += newDimension.height - 2;
				break;
			
			case 5:
				var newDimension = {
						width: this.startDimension.width, 
						height: this.startDimension.height
				};
				
				break;
			
			default: 
				shifting = this.snap(shifting[0], shifting[1], (shifting[1] && shifting[0]/shifting[1] < 0 ? -1 : 1));
				if (!this.getOption(this.activeId, 'allowResize')) return;
				
				var newDimension = {
						width: shifting[0], 
						height: shifting[1]
				};
				
				if (newDimension.width - 2 >= 0)
					shifting[0] = 0;
				if (newDimension.height - 2 >= 0)
					shifting[1] = 0;
					
				newDimension.width += 2;
				newDimension.height += 2;
		};
		
		newDimension.width -= 2;
		newDimension.height -= 2;
		
		if (this.activeEdge != 5) {
			var element = this.getElement(this.activeId);
			if (this.startOffset[0] + shifting[0] + 
				newDimension.width > element.offsetWidth) {
				newDimension.width = element.offsetWidth - 
				this.startOffset[0] - shifting[0];
				if (ratio) {
					newDimension.height = newDimension.width / ratio;
				};
			} else if (this.startOffset[0] + shifting[0] -
				newDimension.width > element.offsetWidth) {
				newDimension.width = element.offsetWidth - 
				this.startOffset[0] - this.startDimension.width;
				if (ratio) {
					newDimension.height = newDimension.width / ratio;
				};
			} else if (this.startOffset[0] + shifting[0] < 0 && newDimension.width > 0) {
				newDimension.width = this.startOffset[0] + this.startDimension.width - 2;
				if (ratio) {
					newDimension.height = newDimension.width / ratio;
				};
			} else if (this.startOffset[0] + shifting[0] < 0 && newDimension.width < 0) {
				newDimension.width = this.startOffset[0];
				if (ratio) {
					newDimension.height = newDimension.width / ratio;
				};
			}

			if (this.startOffset[1] + shifting[1] +
				newDimension.height > element.offsetHeight) {
				newDimension.height = element.offsetHeight - 
				this.startOffset[1];
				if (ratio) {
					newDimension.width = newDimension.height * ratio;
				};
			} else if (this.startOffset[1] + shifting[1] -
				newDimension.height > element.offsetHeight) {
				newDimension.height = element.offsetHeight - 
				this.startOffset[1] - this.startDimension.height;
				if (ratio) {
					newDimension.width = newDimension.height * ratio;
				};
			} else if (this.startOffset[1] + shifting[1] < 0 && newDimension.height > 0) {
				newDimension.height = this.startOffset[1] + this.startDimension.height - 2;
				if (ratio) {
					newDimension.width = newDimension.height * ratio;
				};
			} else if (this.startOffset[1] + shifting[1] < 0 && newDimension.height < 0) {
				newDimension.height = this.startOffset[1];
				if (ratio) {
					newDimension.width = newDimension.height * ratio;
				};
			};
		};
		
		this.setCoords(
			this.startOffset[0] + shifting[0], 
			this.startOffset[1] + shifting[1], 
			newDimension.width, 
			newDimension.height
		);
		
		if (event.shiftKey) {
			this.ratio = 0;
		};

	    Event.stop(event);
		
		if (typeof options.onUpdate == 'function')
			options.onUpdate();
	},
	
	setOpacity: function(value) {
		var item = this.items[this.activeId];
		Element.setOpacity(item.wind, value);
		Element.setOpacity(item.marquee.o1, value);
		Element.setOpacity(item.marquee.o2, value);
		Element.setOpacity(item.marquee.o3, value);
		Element.setOpacity(item.marquee.o4, value);
		this.setOption(item.id, 'opacity', value);
	},
	
	setColor: function(color) {
		var item = this.items[this.activeId];
		color = color || item.color;
		this.items[this.activeId].color = color;
		
		if (item.type == 'crop' || item.type == 'window') {
			Element.setStyle(item.marquee.o1, {backgroundColor: color});
			Element.setStyle(item.marquee.o2, {backgroundColor: color});
			Element.setStyle(item.marquee.o3, {backgroundColor: color});
			Element.setStyle(item.marquee.o4, {backgroundColor: color});
			Element.setStyle(item.wind, {backgroundColor: ''});
		} else if (item.type == 'rect' || item.type == 'marquee') {
			Element.setStyle(item.wind, {backgroundColor: color});
			Element.setStyle(item.marquee.o1, {backgroundColor: ''});
			Element.setStyle(item.marquee.o2, {backgroundColor: ''});
			Element.setStyle(item.marquee.o3, {backgroundColor: ''});
			Element.setStyle(item.marquee.o4, {backgroundColor: ''});
		} else {
			Element.setStyle(item.wind, {backgroundColor: ''});
			Element.setStyle(item.marquee.o1, {backgroundColor: ''});
			Element.setStyle(item.marquee.o2, {backgroundColor: ''});
			Element.setStyle(item.marquee.o3, {backgroundColor: ''});
			Element.setStyle(item.marquee.o4, {backgroundColor: ''});
		};
	},
	
	keyPress: function(event) {
		var key = event.keyCode || event.which || event.button;

		switch (key) {
			case 27:
				// escape
				this.unselectAll();
				break;
			case 37:
				// left arrow
				this.moveLeft(event.shiftKey ? 10 : 1, event.ctrlKey);
				break;
			case 38:
				// top arrow
				if (event.altKey) {
					var opacity = this.getOption(this.activeId, 'opacity');
					this.setOpacity(opacity < 0.95 ? opacity + 0.05 : 1);
				} else {
					this.moveTop(event.shiftKey ? 10 : 1, event.ctrlKey);
				};
				break;
			case 39:
				// right arrow
				this.moveRight(event.shiftKey ? 10 : 1, event.ctrlKey);
				break;
			case 40:
				// down arrow
				if (event.altKey) {
					var opacity = this.getOption(this.activeId, 'opacity');
					this.setOpacity(opacity > 0.05 ? opacity - 0.05 : 0);
				} else {
					this.moveBottom(event.shiftKey ? 10 : 1, event.ctrlKey);
				};
				break;
			case 65:
				// a - select all
				this.selectAll();
				break;
			case 69:
				// e - edges switching
				this.switchEdges();
				break;
			
			case 73:
				// i - inverse opacity type (selection)
				this.inverse();
				break;
			case 78:
				// n - new
				if (event.shiftKey) 
					this.add(this.getElement(), this.items[this.activeId].options);
				break;
			case 90:
				// z - zoom
				this.zoom(event.shiftKey ? 10 : 1, event.ctrlKey);
				break;
			case 82:
				// r - random color
				this.setRandomColor();
				break;
			case 83:
				// s - select next
				this.select();
				break;				
			case 49: case 50: case 51:
			case 52: case 53: case 54:
			case 55: case 56: case 57: case 48:
				// numbers
				if (event.shiftKey) {
					var colors = ['00f', '000', 'ffc', 'cfc', '0f0', '0ff', 'f00', 'f0f', 'ff0', 'fff'];
					this.setColor('#' + colors[key - 48]);
				};
				break;
		}
	},
	
	setType: function(type) {
		this.items[this.activeId].type = type;
		this.setColor();
	},
	
	getType: function(id) {
		return this.items[id || this.activeId].type;
	},
	
	snap: function(x, y, k) {
		var ratio = this.getRatio();
		return ratio ? [y * ratio * k, y] : [x, y];
	},
	
	getWindow: function(id) {
		return this.items[id || this.activeId].wind;
	},
	
	getMarquee: function(id) {
		return this.items[id || this.activeId].marquee;
	},
	
	getElement: function(id) {
		return this.items[id || this.activeId].element;
	},
	
	getCoords: function(id) {
		return this.items[id || this.activeId].coords;
	},
	
	moveRight: function(amount, ctrlKey) {
		var coords = this.getCoords();
		this.setCoords(
			ctrlKey ? coords.x1 : coords.x1 + amount, coords.y1, 
			ctrlKey ? coords.width + amount : coords.width, coords.height
		);
	},
	
	moveLeft: function(amount, ctrlKey) {
		var coords = this.getCoords();
		this.setCoords(
			ctrlKey ? coords.x1 : coords.x1 - amount, coords.y1, 
			ctrlKey ? coords.width - amount : coords.width, coords.height
		);
	},
	
	moveTop: function(amount, ctrlKey) {
		var coords = this.getCoords();
		this.setCoords(
			coords.x1, ctrlKey ? coords.y1 : coords.y1 - amount, 
			coords.width, ctrlKey ? coords.height - amount : coords.height
		);
	},
	
	moveBottom: function(amount, ctrlKey) {
		var coords = this.getCoords();
		this.setCoords(
			coords.x1, ctrlKey ? coords.y1 : coords.y1 + amount, 
			coords.width, ctrlKey ? coords.height + amount : coords.height
		);
	},
	
	zoom: function(amount, ctrlKey) {
		var coords = this.getCoords();
		var k = ctrlKey ? 1 : -1;
		this.setCoords(
			coords.x1 + k * amount, coords.y1 + k * amount, 
			coords.width - 2*k * amount, coords.height - 2*k * amount
		);
	},
	
	inverse: function() {
		var curr = this.getType();
		this.setType(curr == 'window' || curr == 'crop' ? 'rect' : 'crop');
	},
	
	unselectAll: function() {
		this.setCoords(0,0,0,0);
		this.hideEdges();
	},
	
	selectAll: function() {
		var element = this.getElement();
		this.setCoords(0,0,element.offsetWidth,element.offsetHeight);
		this.showEdges();
	},
	
	switchEdges: function() {
		var id = this.activeId;
		var edges = this.getOption(id, 'hideEdges');
		this.setOption(id, 'hideEdges', !edges);
		if (edges)
			this.showEdges();
		else
			this.hideEdges();
	},
	
	showEdges: function(id) {
		if (!this.getOption(id, 'allowResize') || this.getOption(id, 'hideEdges')) return;
		var marquee = this.getMarquee(id);
		$A(marquee.childNodes).each(function(item){
			if (item.className && item.className == 'marquee-edge') {
				Element.setStyle(item, {display: ''});
			};
		});
	},
	
	hideEdges: function(id) {
		var marquee = this.getMarquee(id);
		$A(marquee.childNodes).each(function(item){
			if (item.className && item.className == 'marquee-edge') {
				Element.setStyle(item, {display: 'none'});
			};
		});
	},
	
	select: function(id) {
		var currentObj = this.items[this.activeId];
		
		if (this.items[id]) {
			this.activeId = id;
		} else {
			var ids = [], max = 0, current = 0;
			$A(this.items).each((function(item){
				if (item.id > max) max = item.id;
				if (this.activeId == item.id) current = ids.length;
				ids.push(item.id);
			}).bind(this));

			if (ids.length > 1) {
				this.activeId = (max == this.activeId) ? ids[0] : ids[current+1];
			};
		};
		
		if (this.activeId !== id && this.items.length > 1) {
			var newObj = this.items[this.activeId];
			var maxz = currentObj.zIndex;

			this.items[currentObj.id].zIndex = newObj.zIndex;
			Element.setStyle(this.items[currentObj.id].marquee.parentNode, {zIndex: newObj.zIndex});

			var marquee = this.getMarquee();
			var wind = this.getWindow();
			this.items[this.activeId].zIndex = maxz;
			Element.setStyle(marquee.parentNode, {zIndex: maxz});
			Element.setStyle(wind, {border: '2px solid black'});
			setTimeout(function(){Element.setStyle(wind, {border: ''});}, 250);
		};
	},
	
	hide: function(id) {
		var marquee = this.getMarquee(id);
		Element.hide(marquee.parentNode);
		this.setOption(id, 'hidden', true);
	},
	
	show: function(id) {
		var marquee = this.getMarquee(id);
		Element.show(marquee.parentNode);
		this.setOption(id, 'hidden', false);
	},
	
	setOption: function(id, option, value) {
		this.items[id || this.activeId].options[option] = value;
	},
	
	getOption: function(id, option) {
		return this.items[id || this.activeId].options[option];
	},
	
	render: function(event) {
		if (this.activeId == undefined) return;
		var element = this.getElement();
		var marquee = this.getMarquee();
		
		var pos = Position.positionedOffset(element);
		Element.setStyle(marquee.parentNode, {
			width: element.offsetWidth + 'px',
			height: element.offsetHeight + 'px',
			left: pos[0] + 'px',
			top: pos[1] + 'px'
		});
	},
	
	snapRatio: function(w, h) {
		var ratio;
		if (ratio = this.getRatio()) {
			if (w < h) {
				h = Math.floor(w / ratio);
			} else {
				w = Math.floor(h * ratio);
			};
		};
		return [w, h];
	},
	
	setCoords: function(x, y, w, h) {
		w = Math.abs(w);
		h = Math.abs(h);
		if (x < 0) x = 0;
		if (y < 0) y = 0;
		
		var element = this.getElement();
		if (w > element.offsetWidth) w = element.offsetWidth;
		if (h > element.offsetHeight) h = element.offsetHeight;
		
		if (x+w > element.offsetWidth) 
			x = element.offsetWidth-w;
		if (y+h > element.offsetHeight) 
			y = element.offsetHeight-h;

		var snap = this.snapRatio(w, h);
		w = snap[0]; h = snap[1];
		
		this.items[this.activeId].coords = {
			x1: x, y1: y, 
			x2: x + w, y2: y + h,
			width: w, height: h
		};
		
		var marquee = this.getMarquee(this.activeId);
		Element.setStyle(marquee, {
			width: w + 'px',
			height: h + 'px',
			left: x + 'px',
			top: y + 'px',
			display: 'block'
		});
		
		Element.setStyle(this.getWindow(this.activeId), {
			height: h + 'px'
		});
		
		Element.setStyle(marquee.o1, {height: y + 1 + 'px'});
		Element.setStyle(marquee.o2, {height: h + 'px', width: x + 'px', top: y + 1 + 'px'});
		Element.setStyle(marquee.o3, {
			height: h + 'px', 
			width: ((tmp = element.offsetWidth - x - w - 1) > 0 ? tmp : 0) + 'px', 
			top: y + 1 + 'px'
		});
		Element.setStyle(marquee.o4, {
			top: h + y + 1 + 'px',
			height: ((tmp = element.offsetHeight - y - h - 1) > 0 ? tmp : 0) + 'px'
		});

		// preview
		if (this.items[this.activeId].options.preview) {
			var pw = this.items[this.activeId].options.previewWidth;
			var ph = this.items[this.activeId].options.previewHeight;
			var r = Math.min(w ? pw/w : 0, h ? ph/h : 0);
			if (r > 1) r = 1;
			
			Element.setStyle(this.items[this.activeId].preview, {
				width: w * r + 'px',
				height: h * r + 'px'
			});
			
			Element.setStyle(this.items[this.activeId].pImage, {
				width: this.items[this.activeId].element.offsetWidth * r + 'px',
				height: this.items[this.activeId].element.offsetHeight * r + 'px',
				left: -x * r + 'px',
				top: -y * r + 'px'
			});
		};
		
	},
	
	finishDrag: function() {
		if (!this.dragging) return;
		this.dragging = false;
		this.setRatio(this.getRatio());
	},
	
	setOnUpdateCallback: function(callback) {
		if (this.activeId == undefined) return;
		this.setOption(this.activeId, 'onUpdate', callback);
	},
	
	setOnBeforeUpdateCallback: function(callback) {
		if (this.activeId == undefined) return;
		this.setOption(this.activeId, 'onBeforeUpdate', callback);
	}
	
};

if (!Element.setOpacity) {
	Element.setOpacity = function(element, value) {
	  element= $(element);
		if (value == 1) {
			Element.setStyle(element, {
				opacity: (/Gecko/.test(navigator.userAgent) && 
						!/Konqueror|Safari|KHTML/.test(navigator.userAgent)) ? 0.999999 : null 
			});
			
			if(/MSIE/.test(navigator.userAgent))  
				Element.setStyle(element, {
					filter: Element.getStyle(element,'filter').replace(/alpha\([^\)]*\)/gi,'')
				});
			
		} else {
				if(value < 0.00001) value = 0;
				Element.setStyle(element, {opacity: value});
				if(/MSIE/.test(navigator.userAgent))  
				Element.setStyle(element, { 
					filter: Element.getStyle(element,'filter').replace(/alpha\([^\)]*\)/gi,'') + 'alpha(opacity='+value*100+')' 
				});
		};
	};
};

function onWindowLoad() {
	
	var MarqueeTool = new Marquee('photo', {
		
		coords: {x1: 20, y1: 15, width: 190, height: 190},
		preview: 'preview', 
		previewWidth: 190,
		previewHeight: 190,
		allowHotKeys: false,
		opacity: 0.35
		
	});
	
	function onMarqueeUpdate() { 
		
		var coords = MarqueeTool.getCoords();
		
		document.getElementById('coord_x').value = coords.x1;
		document.getElementById('coord_y').value = coords.y1;
		document.getElementById('coord_w').value = coords.width;
		document.getElementById('coord_h').value = coords.width;
		
		if (coords.width < 190) coords.width = 190;
		MarqueeTool.setCoords(coords.x1, coords.y1, coords.width, coords.width);
		
		return true;
		
	}

	MarqueeTool.setOnUpdateCallback(onMarqueeUpdate); 
	
}

Event.observe(window, 'load', onWindowLoad);