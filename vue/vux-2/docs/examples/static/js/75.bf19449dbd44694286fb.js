webpackJsonp([75],{1422:function(n,t,e){var o=e(1423);"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);e(266)("08f6d9ee",o,!0)},1423:function(n,t,e){t=n.exports=e(86)(),t.push([n.i,"\n.demo3-slot[data-v-25d38a16] {\n  text-align: center;\n  padding: 8px 0;\n  color: #888;\n}\n",""])},1424:function(n,t,e){"use strict";var o=e(15),i=e(847);o.a,i.a},1425:function(n,t,e){var o=e(1426);"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);e(266)("1ba4296d",o,!0)},1426:function(n,t,e){t=n.exports=e(86)(),t.push([n.i,"\n.vux-popup-radio-popup {\n  background-color: #fff;\n}\n",""])},1427:function(n,t,e){"use strict";var o=e(2),i=e.n(o),a=e(49),r=e.n(a),s=e(32),l=e(461),p=e(57),u=e(67),h=e(68),c=e(52),d=e(524),f=e.n(d),v=Object(h.a)();delete v.value;l.a,p.a,s.a,c.a,r()({placeholder:String,readonly:Boolean},v,Object(u.a)())},1428:function(n,t,e){"use strict";var o=e(2),i=e.n(o),a=e(49),r=e.n(a),s=e(32),l=e(461),p=e(57),u=e(67),h=e(68),c=e(52),d=e(524),f=e.n(d),v=Object(h.a)();delete v.value,t.a={name:"popup-radio",components:{Popup:l.a,Radio:p.a,Cell:s.a},directives:{TransferDom:c.a},props:r()({placeholder:String,readonly:Boolean},v,Object(u.a)()),computed:{displayValue:function(){var n=this;if(!this.options.length)return"";if("object"===i()(this.options[0])){var t=f()(this.options,function(t){return t.key===n.currentValue});if(t)return t.value}return this.currentValue}},methods:{onValueChange:function(n){this.hide()},show:function(){this.readonly||(this.showPopup=!0)},hide:function(){this.showPopup=!1}},watch:{value:function(n){this.currentValue=n},currentValue:function(n){this.$emit("input",n),this.$emit("on-change",n)}},data:function(){return{showPopup:!1,currentValue:this.value}}}},1429:function(n,t,e){"use strict";e.d(t,"a",function(){return o}),e.d(t,"b",function(){return i});var o=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("cell",{attrs:{title:n.title,value:n.currentValue,"is-link":!n.readonly,"value-align":n.valueAlign,"border-intent":n.borderIntent},nativeOn:{click:function(t){return n.show(t)}}},[!n.displayValue&&n.placeholder?e("span",{staticClass:"vux-cell-placeholder"},[n._v(n._s(n.placeholder))]):n._e(),n._v(" "),n.displayValue?e("span",{staticClass:"vux-cell-value"},[n._v(n._s(n.displayValue))]):n._e(),n._v(" "),e("span",{attrs:{slot:"icon"},slot:"icon"},[n._t("icon")],2),n._v(" "),e("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[e("popup",{staticStyle:{"background-color":"#fff"},on:{"on-hide":function(t){n.$emit("on-hide")},"on-show":function(t){n.$emit("on-show")}},model:{value:n.showPopup,callback:function(t){n.showPopup=t},expression:"showPopup"}},[n._t("popup-header",null,{options:n.options,value:n.currentValue}),n._v(" "),e("radio",{attrs:{options:n.options,"fill-mode":!1},on:{"on-change":n.onValueChange},scopedSlots:n._u([{key:"each-item",fn:function(t){return[n._t("each-item",[e("p",[e("img",{directives:[{name:"show",rawName:"v-show",value:t.icon,expression:"props.icon"}],staticClass:"vux-radio-icon",attrs:{src:t.icon}}),n._v(" "),e("span",{staticClass:"vux-radio-label"},[n._v(n._s(t.label))])])],{icon:t.icon,label:t.label,index:t.index})]}}]),model:{value:n.currentValue,callback:function(t){n.currentValue=t},expression:"currentValue"}})],2)],1)])},i=[]},1430:function(n,t,e){"use strict";var o=e(15),i=e(847);t.a={components:{Group:o.a,PopupRadio:i.a},data:function(){return{option1:"A",options1:["A","B","C"],option2:"",options2:[{key:"A",value:"label A"},{key:"B",value:"label B"}],option3:"C",options3:["A","B","C"],option4:"B",option5:"B"}}}},1431:function(n,t,e){"use strict";e.d(t,"a",function(){return o}),e.d(t,"b",function(){return i});var o=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("group",[e("popup-radio",{attrs:{title:"options",options:n.options1},model:{value:n.option1,callback:function(t){n.option1=t},expression:"option1"}})],1),n._v(" "),e("group",[e("popup-radio",{attrs:{title:"options",options:n.options2,placeholder:"placeholder"},model:{value:n.option2,callback:function(t){n.option2=t},expression:"option2"}})],1),n._v(" "),e("group",[e("popup-radio",{attrs:{title:"options",options:n.options3},model:{value:n.option3,callback:function(t){n.option3=t},expression:"option3"}},[e("p",{staticClass:"vux-1px-b demo3-slot",attrs:{slot:"popup-header"},slot:"popup-header"},[n._v("Please select")])])],1),n._v(" "),e("group",[e("popup-radio",{attrs:{title:"readonly",readonly:"",options:n.options3},model:{value:n.option4,callback:function(t){n.option4=t},expression:"option4"}},[e("p",{staticClass:"vux-1px-b demo3-slot",attrs:{slot:"popup-header"},slot:"popup-header"},[n._v("Please select")])])],1),n._v(" "),e("group",[e("popup-radio",{attrs:{title:"slot:each-item",options:n.options3},scopedSlots:n._u([{key:"each-item",fn:function(t){return[e("p",[n._v("\n          custom item "),e("img",{staticClass:"vux-radio-icon",attrs:{src:"http://dn-placeholder.qbox.me/110x110/FF2D55/000"}}),n._v(" "+n._s(t.label)+"\n          "),e("br"),n._v(" "),e("span",{staticStyle:{color:"#666"}},[n._v(n._s(t.index+1)+" another line")])])]}}]),model:{value:n.option5,callback:function(t){n.option5=t},expression:"option5"}})],1)],1)},i=[]},366:function(n,t,e){"use strict";function o(n){e(1422)}Object.defineProperty(t,"__esModule",{value:!0});var i=(e(1424),e(1430)),a=e(1431),r=e(0),s=o,l=Object(r.a)(i.a,a.a,a.b,!1,s,"data-v-25d38a16",null);t.default=l.exports},461:function(n,t,e){"use strict";function o(n){e(529)}var i=(e(531),e(532)),a=e(533),r=e(0),s=o,l=Object(r.a)(i.a,a.a,a.b,!1,s,null,null);t.a=l.exports},463:function(n,t,e){"use strict";var o=e(2),i=e.n(o),a=e(99),r="object"===("undefined"==typeof window?"undefined":i()(window));r&&(window.__$vuxPopups=window.__$vuxPopups||{});var s=function(n){var t=this;if(r){this.uuid=Math.random().toString(36).substring(3,8),this.params={},"[object Object]"===Object.prototype.toString.call(n)&&(this.params={hideOnBlur:n.hideOnBlur,onOpen:n.onOpen||function(){},onClose:n.onClose||function(){},showMask:n.showMask}),!!document.querySelectorAll(".vux-popup-mask").length<=0&&(this.divMask=document.createElement("a"),this.divMask.className="vux-popup-mask",this.divMask.dataset.uuid="",this.divMask.href="javascript:void(0)",document.body.appendChild(this.divMask));var e=void 0;e=n.container?n.container:document.createElement("div"),e.className+=" vux-popup-dialog vux-popup-dialog-"+this.uuid,this.params.hideOnBlur||(e.className+=" vux-popup-mask-disabled"),this.div=e,n.container||document.body.appendChild(e),this.container=document.querySelector(".vux-popup-dialog-"+this.uuid),this.mask=document.querySelector(".vux-popup-mask"),this.mask.dataset.uuid+=","+this.uuid,this._bindEvents(),n=null,this.containerHandler=function(){t.mask&&!/show/.test(t.mask.className)&&setTimeout(function(){!/show/.test(t.mask.className)&&(t.mask.style.zIndex=-1)},200)},this.container&&this.container.addEventListener("webkitTransitionEnd",this.containerHandler),this.container&&this.container.addEventListener("transitionend",this.containerHandler)}};s.prototype.onClickMask=function(){this.params.hideOnBlur&&this.params.onClose()},s.prototype._bindEvents=function(){this.params.hideOnBlur&&(this.mask.addEventListener("click",this.onClickMask.bind(this),!1),this.mask.addEventListener("touchmove",function(n){return n.preventDefault()},!!a.a&&{passive:!1}))},s.prototype.show=function(){this.params.showMask&&(this.mask.classList.add("vux-popup-show"),this.mask.style.zIndex=500),this.container.classList.add("vux-popup-show"),this.params.onOpen&&this.params.onOpen(this),r&&(window.__$vuxPopups[this.uuid]=1)},s.prototype.hide=function(){var n=this,t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.container.classList.remove("vux-popup-show"),document.querySelector(".vux-popup-dialog.vux-popup-show")||(this.mask.classList.remove("vux-popup-show"),setTimeout(function(){n.mask&&!/show/.test(n.mask.className)&&(n.mask.style.zIndex=-1)},400)),!1===t&&this.params.onClose&&this.params.hideOnBlur&&this.params.onClose(this),this.isShow=!1,r&&delete window.__$vuxPopups[this.uuid]},s.prototype.destroy=function(){this.mask.dataset.uuid=this.mask.dataset.uuid.replace(new RegExp(","+this.uuid,"g"),""),this.mask.dataset.uuid?this.hide():(this.mask.removeEventListener("click",this.onClickMask.bind(this),!1),this.mask&&this.mask.parentNode&&this.mask.parentNode.removeChild(this.mask)),this.container.removeEventListener("webkitTransitionEnd",this.containerHandler),this.container.removeEventListener("transitionend",this.containerHandler),r&&delete window.__$vuxPopups[this.uuid]},t.a=s},524:function(n,t,e){"use strict";function o(n,t,e){if("function"==typeof Array.prototype.find)return n.find(t,e);e=e||this;var o,i=n.length;if("function"!=typeof t)throw new TypeError(t+" is not a function");for(o=0;o<i;o++)if(t.call(e,n[o],o,n))return n[o]}n.exports=o},529:function(n,t,e){var o=e(530);"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);e(266)("019b9070",o,!0)},530:function(n,t,e){t=n.exports=e(86)(),t.i(e(267),""),t.push([n.i,"/**\n* actionsheet\n*/\n/**\n* en: primary type text color of menu item\n* zh-CN: 菜单项primary类型的文本颜色\n*/\n/**\n* en: warn type text color of menu item\n* zh-CN: 菜单项warn类型的文本颜色\n*/\n/**\n* en: default type text color of menu item\n* zh-CN: 菜单项default类型的文本颜色\n*/\n/**\n* en: disabled type text color of menu item\n* zh-CN: 菜单项disabled类型的文本颜色\n*/\n/**\n* datetime\n*/\n/**\n* tabbar\n*/\n/**\n* tab\n*/\n/**\n* dialog\n*/\n/**\n* en: title and content's padding-left and padding-right\n* zh-CN: 标题及内容区域的 padding-left 和 padding-right\n*/\n/**\n* x-number\n*/\n/**\n* checkbox\n*/\n/**\n* check-icon\n*/\n/**\n* Cell\n*/\n/**\n* Mask\n*/\n/**\n* Range\n*/\n/**\n* Tabbar\n*/\n/**\n* Header\n*/\n/**\n* Timeline\n*/\n/**\n* Switch\n*/\n/**\n* Button\n*/\n/**\n* en: border radius\n* zh-CN: 圆角边框\n*/\n/**\n* en: font color\n* zh-CN: 字体颜色\n*/\n/**\n* en: margin-top value between previous button, not works when there is only one button\n* zh-CN: 与相邻按钮的 margin-top 间隙，只有一个按钮时不生效\n*/\n/**\n* en: button height\n* zh-CN: 按钮高度\n*/\n/**\n* en: the font color in disabled\n* zh-CN: disabled状态下的字体颜色\n*/\n/**\n* en: the font color in disabled\n* zh-CN: disabled状态下的字体颜色\n*/\n/**\n* en: font size\n* zh-CN: 字体大小\n*/\n/**\n* en: the font size of the mini type\n* zh-CN: mini类型的字体大小\n*/\n/**\n* en: the line height of the mini type\n* zh-CN: mini类型的行高\n*/\n/**\n* en: the background color of the warn type\n* zh-CN: warn类型的背景颜色\n*/\n/**\n* en: the background color of the warn type in active\n* zh-CN: active状态下，warn类型的背景颜色\n*/\n/**\n* en: the background color of the warn type in disabled\n* zh-CN: disabled状态下，warn类型的背景颜色\n*/\n/**\n* en: the background color of the default type\n* zh-CN: default类型的背景颜色\n*/\n/**\n* en: the font color of the default type\n* zh-CN: default类型的字体颜色\n*/\n/**\n* en: the background color of the default type in active\n* zh-CN: active状态下，default类型的背景颜色\n*/\n/**\n* en: the font color of the default type in disabled\n* zh-CN: disabled状态下，default类型的字体颜色\n*/\n/**\n* en: the background color of the default type in disabled\n* zh-CN: disabled状态下，default类型的背景颜色\n*/\n/**\n* en: the font color of the default type in active\n* zh-CN: active状态下，default类型的字体颜色\n*/\n/**\n* en: the background color of the primary type\n* zh-CN: primary类型的背景颜色\n*/\n/**\n* en: the background color of the primary type in active\n* zh-CN: active状态下，primary类型的背景颜色\n*/\n/**\n* en: the background color of the primary type in disabled\n* zh-CN: disabled状态下，primary类型的背景颜色\n*/\n/**\n* en: the font color of the plain primary type\n* zh-CN: plain的primary类型的字体颜色\n*/\n/**\n* en: the border color of the plain primary type\n* zh-CN: plain的primary类型的边框颜色\n*/\n/**\n* en: the font color of the plain primary type in active\n* zh-CN: active状态下，plain的primary类型的字体颜色\n*/\n/**\n* en: the border color of the plain primary type in active\n* zh-CN: active状态下，plain的primary类型的边框颜色\n*/\n/**\n* en: the font color of the plain default type\n* zh-CN: plain的default类型的字体颜色\n*/\n/**\n* en: the border color of the plain default type\n* zh-CN: plain的default类型的边框颜色\n*/\n/**\n* en: the font color of the plain default type in active\n* zh-CN: active状态下，plain的default类型的字体颜色\n*/\n/**\n* en: the border color of the plain default type in active\n* zh-CN: active状态下，plain的default类型的边框颜色\n*/\n/**\n* en: the font color of the plain warn type\n* zh-CN: plain的warn类型的字体颜色\n*/\n/**\n* en: the border color of the plain warn type\n* zh-CN: plain的warn类型的边框颜色\n*/\n/**\n* en: the font color of the plain warn type in active\n* zh-CN: active状态下，plain的warn类型的字体颜色\n*/\n/**\n* en: the border color of the plain warn type in active\n* zh-CN: active状态下，plain的warn类型的边框颜色\n*/\n/**\n* swipeout\n*/\n/**\n* Cell\n*/\n/**\n* Badge\n*/\n/**\n* en: badge background color\n* zh-CN: badge的背景颜色\n*/\n/**\n* Popover\n*/\n/**\n* Button tab\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* en: border radius color\n* zh-CN: 圆角边框的半径\n*/\n/**\n* en: border color\n* zh-CN: 边框的颜色\n*/\n/**\n* en: not used\n* zh-CN: 默认状态下圆角边框的颜色\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* en: default background color\n* zh-CN: 默认状态下的背景颜色\n*/\n/**\n* en: selected background color\n* zh-CN: 选中状态下的背景颜色\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/* alias */\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* en: default text color\n* zh-CN: 默认状态下的文本颜色\n*/\n/**\n* en: height\n* zh-CN: 元素高度\n*/\n/**\n* en: line height\n* zh-CN: 元素行高\n*/\n/**\n* Swiper\n*/\n/**\n* checklist\n*/\n/**\n* popup-picker\n*/\n/**\n* popup\n*/\n/**\n* popup-header\n*/\n/**\n* form-preview\n*/\n/**\n* sticky\n*/\n/**\n* group\n*/\n/**\n* en: margin-top of title\n* zh-CN: 标题的margin-top\n*/\n/**\n* en: margin-bottom of title\n* zh-CN: 标题的margin-bottom\n*/\n/**\n* en: margin-top of footer title\n* zh-CN: 底部标题的margin-top\n*/\n/**\n* en: margin-bottom of footer title\n* zh-CN: 底部标题的margin-bottom\n*/\n/**\n* toast\n*/\n/**\n* en: text size of content\n* zh-CN: 内容文本大小\n*/\n/**\n* en: default top\n* zh-CN: 默认状态下距离顶部的高度\n*/\n/**\n* en: position top\n* zh-CN: 顶部显示的高度\n*/\n/**\n* en: position bottom\n* zh-CN: 底部显示的高度\n*/\n/**\n* en: z-index\n* zh-CN: z-index\n*/\n/**\n* icon\n*/\n/**\n* calendar\n*/\n/**\n* en: forward and backward arrows color\n* zh-CN: 前进后退的箭头颜色\n*/\n/**\n* en: text color of week highlight\n* zh-CN: 周末高亮的文本颜色\n*/\n/**\n* en: background color when selected\n* zh-CN: 选中时的背景颜色\n*/\n/**\n* en: text color when disabled\n* zh-CN: 禁用时的文本颜色\n*/\n/**\n* en: text color of today\n* zh-CN: 今天的文本颜色\n*/\n/**\n* en: font size of cell\n* zh-CN: 单元格的字号\n*/\n/**\n* en: background color\n* zh-CN: 背景颜色\n*/\n/**\n* en: size of date cell\n* zh-CN: 日期单元格尺寸大小\n*/\n/**\n* en: line height of date cell\n* zh-CN: 日期单元格的行高\n*/\n/**\n* en: text color of header\n* zh-CN: 头部的文本颜色\n*/\n/**\n* week-calendar\n*/\n/**\n* search\n*/\n/**\n* en: text color of cancel button\n* zh-CN: 取消按钮文本颜色\n*/\n/**\n* en: background color\n* zh-CN: 背景颜色\n*/\n/**\n* en: text color of placeholder\n* zh-CN: placeholder文本颜色\n*/\n/**\n* radio\n*/\n/**\n* en: checked icon color\n* zh-CN: 选中状态的图标颜色\n*/\n/**\n* loadmore\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* loading\n*/\n/**\n* en: z-index\n* zh-CN: z-index\n*/\n.vux-popup-dialog {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background: #eee;\n  z-index: 501;\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  -webkit-transition-duration: 300ms;\n          transition-duration: 300ms;\n  max-height: 100%;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.vux-popup-dialog.vux-popup-left {\n  width: auto;\n  height: 100%;\n  top: 0;\n  right: auto;\n  bottom: auto;\n  left: 0;\n}\n.vux-popup-dialog.vux-popup-right {\n  width: auto;\n  height: 100%;\n  top: 0;\n  right: 0;\n  bottom: auto;\n  left: auto;\n}\n.vux-popup-dialog.vux-popup-top {\n  width: 100%;\n  top: 0;\n  right: auto;\n  bottom: auto;\n  left: 0;\n}\n.vux-popup-mask {\n  display: block;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  opacity: 0;\n  tap-highlight-color: rgba(0, 0, 0, 0);\n  z-index: -1;\n  -webkit-transition: opacity 400ms;\n  transition: opacity 400ms;\n}\n.vux-popup-mask.vux-popup-show {\n  opacity: 1;\n}\n.vux-popup-animate-bottom-enter,\n.vux-popup-animate-bottom-leave-active {\n  -webkit-transform: translate3d(0, 100%, 0);\n          transform: translate3d(0, 100%, 0);\n}\n.vux-popup-animate-left-enter,\n.vux-popup-animate-left-leave-active {\n  -webkit-transform: translate3d(-100%, 0, 0);\n          transform: translate3d(-100%, 0, 0);\n}\n.vux-popup-animate-right-enter,\n.vux-popup-animate-right-leave-active {\n  -webkit-transform: translate3d(100%, 0, 0);\n          transform: translate3d(100%, 0, 0);\n}\n.vux-popup-animate-top-enter,\n.vux-popup-animate-top-leave-active {\n  -webkit-transform: translate3d(0, -100%, 0);\n          transform: translate3d(0, -100%, 0);\n}\n",""])},531:function(n,t,e){"use strict";var o=e(50),i=e.n(o),a=e(463),r=e(89);Boolean,String,String,Boolean,Boolean,Boolean,String,String,Object,Boolean,Boolean,Boolean},532:function(n,t,e){"use strict";var o=e(50),i=e.n(o),a=e(463),r=e(89);t.a={name:"popup",props:{value:Boolean,height:{type:String,default:"auto"},width:{type:String,default:"auto"},showMask:{type:Boolean,default:!0},isTransparent:Boolean,hideOnBlur:{type:Boolean,default:!0},position:{type:String,default:"bottom"},maxHeight:String,popupStyle:Object,hideOnDeactivated:{type:Boolean,default:!0},shouldRerenderOnShow:{type:Boolean,default:!1},shouldScrollTopOnShow:{type:Boolean,default:!1}},created:function(){this.$vux&&this.$vux.config&&"VIEW_BOX"===this.$vux.config.$layout&&(this.layout="VIEW_BOX")},mounted:function(){var n=this;this.$overflowScrollingList=document.querySelectorAll(".vux-fix-safari-overflow-scrolling"),this.$nextTick(function(){var t=n;n.popup=new a.a({showMask:t.showMask,container:t.$el,hideOnBlur:t.hideOnBlur,onOpen:function(){t.fixSafariOverflowScrolling("auto"),t.show=!0},onClose:function(){t.show=!1,window.__$vuxPopups&&i()(window.__$vuxPopups).length>1||document.querySelector(".vux-popup-dialog.vux-popup-mask-disabled")||setTimeout(function(){t.fixSafariOverflowScrolling("touch")},300)}}),n.value&&n.popup.show(),n.initialShow=!1})},deactivated:function(){this.hideOnDeactivated&&(this.show=!1),this.removeModalClassName()},methods:{fixSafariOverflowScrolling:function(n){if(this.$overflowScrollingList.length)for(var t=0;t<this.$overflowScrollingList.length;t++)this.$overflowScrollingList[t].style.webkitOverflowScrolling=n},removeModalClassName:function(){"VIEW_BOX"===this.layout&&r.a.removeClass(document.body,"vux-modal-open")},doShow:function(){this.popup&&this.popup.show(),this.$emit("on-show"),this.fixSafariOverflowScrolling("auto"),"VIEW_BOX"===this.layout&&r.a.addClass(document.body,"vux-modal-open"),this.hasFirstShow||(this.$emit("on-first-show"),this.hasFirstShow=!0)},scrollTop:function(){var n=this;this.$nextTick(function(){n.$el.scrollTop=0;var t=n.$el.querySelectorAll(".vux-scrollable");if(t.length)for(var e=0;e<t.length;e++)t[e].scrollTop=0})}},data:function(){return{layout:"",initialShow:!0,hasFirstShow:!1,shouldRenderBody:!0,show:this.value}},computed:{styles:function(){var n={};if(this.position&&"bottom"!==this.position&&"top"!==this.position?n.width=this.width:n.height=this.height,this.maxHeight&&(n["max-height"]=this.maxHeight),this.isTransparent&&(n.background="transparent"),this.popupStyle)for(var t in this.popupStyle)n[t]=this.popupStyle[t];return n}},watch:{value:function(n){this.show=n},show:function(n){var t=this;this.$emit("input",n),n?this.shouldRerenderOnShow?(this.shouldRenderBody=!1,this.$nextTick(function(){t.scrollTop(),t.shouldRenderBody=!0,t.doShow()})):(this.shouldScrollTopOnShow&&this.scrollTop(),this.doShow()):(this.$emit("on-hide"),this.show=!1,this.popup.hide(!1),setTimeout(function(){document.querySelector(".vux-popup-dialog.vux-popup-show")||t.fixSafariOverflowScrolling("touch"),t.removeModalClassName()},200))}},beforeDestroy:function(){this.popup&&this.popup.destroy(),this.fixSafariOverflowScrolling("touch"),this.removeModalClassName()}}},533:function(n,t,e){"use strict";e.d(t,"a",function(){return o}),e.d(t,"b",function(){return i});var o=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("transition",{attrs:{name:"vux-popup-animate-"+n.position}},[e("div",{directives:[{name:"show",rawName:"v-show",value:n.show&&!n.initialShow,expression:"show && !initialShow"}],staticClass:"vux-popup-dialog",class:["vux-popup-"+n.position,n.show?"vux-popup-show":""],style:n.styles},[n.shouldRenderBody?n._t("default"):n._e()],2)])},i=[]},847:function(n,t,e){"use strict";function o(n){e(1425)}var i=(e(1427),e(1428)),a=e(1429),r=e(0),s=o,l=Object(r.a)(i.a,a.a,a.b,!1,s,null,null);t.a=l.exports}});