!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){"use strict";var i,r=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),s=[];function l(e){for(var t=-1,n=0;n<s.length;n++)if(s[n].identifier===e){t=n;break}return t}function a(e,t){for(var n={},i=[],r=0;r<e.length;r++){var o=e[r],a=t.base?o[0]+t.base:o[0],u=n[a]||0,c="".concat(a," ").concat(u);n[a]=u+1;var d=l(c),f={css:o[1],media:o[2],sourceMap:o[3]};-1!==d?(s[d].references++,s[d].updater(f)):s.push({identifier:c,updater:v(f,t),references:1}),i.push(c)}return i}function u(e){var t=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var r=n.nc;r&&(i.nonce=r)}if(Object.keys(i).forEach((function(e){t.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(t);else{var s=o(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(t)}return t}var c,d=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function f(e,t,n,i){var r=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=d(t,r);else{var o=document.createTextNode(r),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}function p(e,t,n){var i=n.css,r=n.media,o=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),o&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var h=null,y=0;function v(e,t){var n,i,r;if(t.singleton){var o=y++;n=h||(h=u(t)),i=f.bind(null,n,o,!1),r=f.bind(null,n,o,!0)}else n=u(t),i=p.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var n=a(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<n.length;i++){var r=l(n[i]);s[r].references--}for(var o=a(e,t),u=0;u<n.length;u++){var c=l(n[u]);0===s[c].references&&(s[c].updater(),s.splice(c,1))}n=o}}}},function(e,t,n){"use strict";var i;function r(e,t,n){if(!n||typeof n.value!==i.typeOfFunction)throw new TypeError("Only methods can be decorated with @bind. <"+t+"> is not a method!");return{configurable:i.boolTrue,get:function(){var e=n.value.bind(this);return Object.defineProperty(this,t,{value:e,configurable:i.boolTrue,writable:i.boolTrue}),e}}}Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.typeOfFunction="function",e.boolTrue=!0}(i||(i={})),t.bind=r,t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(){this.listeners=[]}return e.prototype.attach=function(e){this.listeners.push(e)},e.prototype.notify=function(e){this.listeners.forEach((function(t){return t(e)}))},e.prototype.unsubscribe=function(e){this.listeners=this.listeners.filter((function(t){return t!==e}))},e}();t.default=i},,function(e,t,n){"use strict";var i;Object.defineProperty(t,"__esModule",{value:!0}),n(5),(i=n(11)).keys().forEach(i)},function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(6));$((function(){$(".js-demo__item").each((function(e,t){var n=$(t);new r.default(n)}))}))},function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(7)),o=i(n(8)),s=function(){function e(e,t){this.settings=t,this.findHTMLElement(e),this.initSlider()}return e.prototype.findHTMLElement=function(e){this.$sample=e.find(".js-sample")},e.prototype.initSlider=function(){this.slider=new r.default(this.$sample,this.settings),this.controlPanel=new o.default(this.$sample,this.slider)},e}();t.default=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){this.findHTMLElement(e),this.init(t)}return e.prototype.getPropertyValue=function(e){return this.$slider.perfectSlider("getOptions").get(0)[e]},e.prototype.setPropertyValue=function(e,t){var n;this.$slider.perfectSlider("setOptions",((n={})[e]=t,n))},e.prototype.findHTMLElement=function(e){this.$slider=e.find(".js-slider")},e.prototype.init=function(e){this.$slider.perfectSlider(e)},e}();t.default=i},function(e,t,n){"use strict";var i=this&&this.__decorate||function(e,t,n,i){var r,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(s=(o<3?r(s):o>3?r(t,n,s):r(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(1)),s=r(n(9)),l=r(n(10)),a=function(){function e(e,t){this.checkboxes=[],this.textFields={},this.slider=t,this.init(e),this.bindEventListeners()}return e.prototype.init=function(e){this.$controlPanel=e.find(".js-control-panel"),this.initCheckboxes(),this.initTextFields()},e.prototype.bindEventListeners=function(){this.slider.$slider.on("changeHandle",this.handleSliderChangeHandle)},e.prototype.handleSliderChangeHandle=function(){this.textFields.from&&this.textFields.to&&(this.textFields.from.updateValue(),this.textFields.to.updateValue())},e.prototype.initCheckboxes=function(){var e=this;this.$checkboxes=this.$controlPanel.find(".js-control-panel__checkbox"),this.$checkboxes.each((function(t,n){e.checkboxes.push(new s.default($(n),e.slider))}))},e.prototype.initTextFields=function(){var e=this;this.$textFields=this.$controlPanel.find(".js-control-panel__text-field"),this.$textFields.each((function(t,n){var i=new l.default($(n),e.slider);e.textFields[i.name]=i,e.textFields[i.name].updateValue(),e.textFields[i.name].textFieldChanged.attach((function(t){(!e.slider.getPropertyValue("isRange")||e.textFields.from.getValue()!==e.textFields.to.getValue())&&e.slider.setPropertyValue(t.name,t.getValue()),e.updateFields()}))}))},e.prototype.updateFields=function(){Object.values(this.textFields).forEach((function(e){return e.updateValue()}))},i([o.default],e.prototype,"handleSliderChangeHandle",null),e}();t.default=a},function(e,t,n){"use strict";var i=this&&this.__decorate||function(e,t,n,i){var r,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(s=(o<3?r(s):o>3?r(t,n,s):r(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(1)),s=function(){function e(e,t){this.slider=t,this.init(e),this.bindEventListeners()}return e.prototype.isChecked=function(){return this.$checkbox.prop("checked")},e.prototype.init=function(e){this.$checkbox=e.find(".js-checkbox__input"),this.name=this.$checkbox.prop("name"),this.updateValue()},e.prototype.updateValue=function(){var e=this.slider.getPropertyValue(this.name);this.$checkbox.prop("checked",e)},e.prototype.bindEventListeners=function(){this.$checkbox.on("change",this.handleCheckboxChange)},e.prototype.handleCheckboxChange=function(){this.slider.setPropertyValue(this.name,this.isChecked())},i([o.default],e.prototype,"handleCheckboxChange",null),e}();t.default=s},function(e,t,n){"use strict";var i=this&&this.__decorate||function(e,t,n,i){var r,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(s=(o<3?r(s):o>3?r(t,n,s):r(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(1)),s=r(n(2)),l=function(){function e(e,t){this.textFieldChanged=new s.default,this.slider=t,this.init(e),this.bindEventListeners()}return e.prototype.getValue=function(){var e=this.$textField.attr("type"),t=this.$textField.val();return{number:Number(t),text:t,textarea:t.toString().split(",").filter((function(e){return e.length>0}))}[e]},e.prototype.updateValue=function(){"from"!==this.name&&"to"!==this.name||this.updateType();var e="from"===this.name&&!this.slider.getPropertyValue("isRange");this.$textField[0].disabled=e;var t=this.slider.getPropertyValue(this.name);this.$textField.val(t),this.updateStyle(t)},e.prototype.updateType=function(){this.slider.getPropertyValue("values")?(this.$textField.attr("type","text"),this.$textField.removeAttr("step")):(this.$textField.attr("type","number"),this.$textField.attr("step",this.slider.getPropertyValue("step")),this.$textField.attr("min",this.slider.getPropertyValue("start")))},e.prototype.updateStyle=function(e){void 0===e?this.$textField.addClass("text-field__input_disabled"):this.$textField.removeClass("text-field__input_disabled")},e.prototype.init=function(e){this.$textField=e.find(".js-text-field__input"),this.name=this.$textField.prop("name")},e.prototype.bindEventListeners=function(){this.$textField.on("change",this.handleInputChange)},e.prototype.handleInputChange=function(){this.textFieldChanged.notify(this)},i([o.default],e.prototype,"handleInputChange",null),e}();t.default=l},function(e,t,n){var i={"./components/checkbox/checkbox.scss":12,"./components/control-panel/control-panel.scss":14,"./components/sample/sample.scss":16,"./components/text-field/text-field.scss":18,"./demo.scss":20};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}r.keys=function(){return Object.keys(i)},r.resolve=o,e.exports=r,r.id=11},function(e,t,n){var i=n(0),r=n(13);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1},s=(i(r,o),r.locals?r.locals:{});e.exports=s},function(e,t,n){},function(e,t,n){var i=n(0),r=n(15);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1},s=(i(r,o),r.locals?r.locals:{});e.exports=s},function(e,t,n){},function(e,t,n){var i=n(0),r=n(17);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1},s=(i(r,o),r.locals?r.locals:{});e.exports=s},function(e,t,n){},function(e,t,n){var i=n(0),r=n(19);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1},s=(i(r,o),r.locals?r.locals:{});e.exports=s},function(e,t,n){},function(e,t,n){var i=n(0),r=n(21);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1},s=(i(r,o),r.locals?r.locals:{});e.exports=s},function(e,t,n){}]);