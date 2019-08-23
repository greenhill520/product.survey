
(function(exports) {
	
	(function() {
		var initializing = false,
			fnTest = /xyz/.test(function() {
				xyz;
			}) ? /\b_super\b/ : /.*/;
		var Class = function() {};
		Class.extend = function(prop) {
			var _super = this.prototype;
			initializing = true;
			
			var prototype = new this();
			initializing = false;
			for(var name in prop) {
				prototype[name] = typeof prop[name] == "function" &&
					typeof _super[name] == "function" && fnTest.test(prop[name]) ?
					(function(name, fn) {
						return function() {
							var tmp = this._super;
							this._super = _super[name];
							var ret = fn.apply(this, arguments);
							this._super = tmp;
							return ret;
						};
					})(name, prop[name]) :
					prop[name];
			}
	
			function Class() {
				if(!initializing && this.init) {
					this.init.apply(this, arguments);
				}
			}
			Class.prototype = prototype;
			Class.prototype.constructor = Class;
			Class.extend = this.extend;
			return Class;
		};
		exports.Class = Class;
	})();

	var flow = exports.Class.extend({
		init: function(element, options) {
			var self = this;
			if(typeof element === 'string') {
				element = document.querySelector(element);
			}
			if(!element) {
				throw "WaterfallFlow need container 'element'!";
			}
			options = options || {};
			if(!options.itemSelector || !options.gridSelector) {
				throw "WaterfallFlow need 'itemSelector' and 'gridSelector' !";
			}

			self.container = element;
			self.element = self.container.querySelector(options.gridSelector);

			options.gutter = options.gutter || 20;
			self.gutter = options.gutter;
			self.itemSelector = options.itemSelector;
			self.options = options;

			self.resize();
			self.listenResize();
			self.doExtendJob&&self.doExtendJob();
		},

		resize: function() {
			var self = this;
			self.wrapWith = self.getElW(self.container);
			self.columnWidth = (self.options.columnWidth > 0 && self.options.columnWidth < self.wrapWith) ? self.options.columnWidth : self.wrapWith - 2 * self.gutter;

			// self.column = Math.floor((self.wrapWith + self.gutter) / (self.columnWidth + self.gutter));
			self.column = 4;
			self.waitImg(self.element, function() {
				self.caculateAllItems();
			});
		},

		waitImg: function(dom, callback) {
			var self = this;
			var imgArray = dom.querySelectorAll('img');
			var len = imgArray.length;
			var count = 0;
			Array.prototype.forEach.call(imgArray, function(el) {
				if(el.complete) {
					count++;
				} else {
					var countFun = function() {
						count++
						if(count >= len) {
							callback && callback();
							return;
						}
					};
					el.onload = countFun;
					el.onerror = countFun;
				}
			});
			if(count >= len) {
				callback && callback();
			}
		},

		listenResize: function() {
			var self = this;
			window.addEventListener('resize', function() {
				var originCol = self.column;
				var newWith = self.getElW(self.container);
				var newCol = Math.floor((newWith + self.gutter) / (self.columnWidth + self.gutter));
				if(newCol !== originCol) {
					self.resize();
				}
			});
		},

		caculateAllItems: function() {
			var self = this;
			var cosHeightArray = [];
			self.cosHeightArray = cosHeightArray;
			for(var i = 0; i < self.column; i++) {
				cosHeightArray[i] = 0;
			}
			var items = self.element.querySelectorAll(self.itemSelector);
			for(var i = 0, len = items.length; i < len; i++) {
				if(i < self.column) {
					cosHeightArray[i] = self.getElH(items[i]) + self.gutter;
					self.setItem(items[i], i * self.columnWidth + i * self.gutter, 0);
				} else {
					self.appendItem(items[i]);
				}
			}
			self.resetEl();
			self.options.loadSuccess && self.options.loadSuccess(self, true);
		},

		appendItem: function(el) {
			var self = this;
			var minColHeight = self.getMinColHeight();
			var currColIndex = self.getMinColIndex(minColHeight);
			self.setItem(el, currColIndex * self.columnWidth + currColIndex * self.gutter, minColHeight);
			self.cosHeightArray[currColIndex] += self.getElH(el) + self.gutter;
		},

		setItem: function(el, left, top) {
			var self = this;
			el.style.position = 'absolute';
			el.style.left = left + 'px';
			el.style.top = top + 'px';
			el.style.width = self.columnWidth + 'px';
        },
        
		getMinColHeight: function() {
			var self = this;
			var minHeight = Math.min.apply(null, self.cosHeightArray);
			return minHeight;
		},

		getMaxColHeight: function() {
			var self = this;
			var maxHeight = Math.max.apply(null, self.cosHeightArray);
			return maxHeight;
		},

		getMinColIndex: function(minHeight) {
			var self = this;
			for(var i = 0, len = self.cosHeightArray.length; i < len; i++) {
				if(self.cosHeightArray[i] === minHeight) {
					return i;
				}
			}
		},

		getElW: function(el) {
			return el.offsetWidth;
		},

		getElH: function(el) {
			return el.offsetHeight;
		},

		pareseStringToHtml: function(strHtml) {
			if(strHtml == null || typeof(strHtml) != "string") {
				return null;
			}

			var i, a = document.createElement("div");
			var b = document.createDocumentFragment();
			a.innerHTML = strHtml;
			while(i = a.firstChild) b.appendChild(i);
			return b;
		},

		appendHtmlChild: function(targetObj, childElem) {
			var self = this;
			if(typeof targetObj === 'string') {
				targetObj = document.querySelector(targetObj);
			}
			if(targetObj == null || childElem == null || !(targetObj instanceof HTMLElement)) {
				return;
			}
			if(childElem instanceof HTMLElement) {
				targetObj.appendChild(childElem);
            } 
            else {
				var tmpDomObk = self.pareseStringToHtml(childElem);
				if(tmpDomObk != null) {
					targetObj.appendChild(tmpDomObk);
				}
			}
			return targetObj.lastChild;
		},

		resetEl: function() {
			var self = this;
			var maxHeight = self.getMaxColHeight();

			self.element.style.position = 'relative';
			self.element.style.width = self.columnWidth * self.column + (self.column - 1) * self.gutter + 'px';
			self.element.style.height = maxHeight + 'px';
			self.element.style.marginLeft = 'auto';
			self.element.style.marginRight = 'auto';
        },
        
		doExtendJob: function() {},

		load: function(html) {
			var self = this;
			var dom = self.appendHtmlChild(self.element, html);
			self.waitImg(dom, function() {
				self.appendItem(dom);
				self.resetEl();
				self.options.loadSuccess && self.options.loadSuccess(self, false);
			});
		}
	});

	WaterfallFlow.flow = flow;
})(window.WaterfallFlow = {});