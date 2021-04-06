/* bootstrap min */
if("undefined"==typeof jQuery)throw new Error("Bootstrap requires jQuery");+function(t){"use strict";function e(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in e)if(void 0!==t.style[i])return{end:e[i]};return!1}t.fn.emulateTransitionEnd=function(e){var i=!1,o=this;t(this).one(t.support.transition.end,function(){i=!0});var s=function(){i||t(o).trigger(t.support.transition.end)};return setTimeout(s,e),this},t(function(){t.support.transition=e()})}(jQuery),+function(t){"use strict";var e='[data-dismiss="alert"]',i=function(i){t(i).on("click",e,this.close)};i.prototype.close=function(e){function i(){n.trigger("closed.bs.alert").remove()}var o=t(this),s=o.attr("data-target");s||(s=o.attr("href"),s=s&&s.replace(/.*(?=#[^\s]*$)/,""));var n=t(s);e&&e.preventDefault(),n.length||(n=o.hasClass("alert")?o:o.parent()),n.trigger(e=t.Event("close.bs.alert")),e.isDefaultPrevented()||(n.removeClass("in"),t.support.transition&&n.hasClass("fade")?n.one(t.support.transition.end,i).emulateTransitionEnd(150):i())};var o=t.fn.alert;t.fn.alert=function(e){return this.each(function(){var o=t(this),s=o.data("bs.alert");s||o.data("bs.alert",s=new i(this)),"string"==typeof e&&s[e].call(o)})},t.fn.alert.Constructor=i,t.fn.alert.noConflict=function(){return t.fn.alert=o,this},t(document).on("click.bs.alert.data-api",e,i.prototype.close)}(jQuery),+function(t){"use strict";var e=function(i,o){this.$element=t(i),this.options=t.extend({},e.DEFAULTS,o),this.isLoading=!1};e.DEFAULTS={loadingText:"loading..."},e.prototype.setState=function(e){var i="disabled",o=this.$element,s=o.is("input")?"val":"html",n=o.data();e+="Text",n.resetText||o.data("resetText",o[s]()),o[s](n[e]||this.options[e]),setTimeout(t.proxy(function(){"loadingText"==e?(this.isLoading=!0,o.addClass(i).attr(i,i)):this.isLoading&&(this.isLoading=!1,o.removeClass(i).removeAttr(i))},this),0)},e.prototype.toggle=function(){var t=!0,e=this.$element.closest('[data-toggle="buttons"]');if(e.length){var i=this.$element.find("input");"radio"==i.prop("type")&&(i.prop("checked")&&this.$element.hasClass("active")?t=!1:e.find(".active").removeClass("active")),t&&i.prop("checked",!this.$element.hasClass("active")).trigger("change")}t&&this.$element.toggleClass("active")};var i=t.fn.button;t.fn.button=function(i){return this.each(function(){var o=t(this),s=o.data("bs.button"),n="object"==typeof i&&i;s||o.data("bs.button",s=new e(this,n)),"toggle"==i?s.toggle():i&&s.setState(i)})},t.fn.button.Constructor=e,t.fn.button.noConflict=function(){return t.fn.button=i,this},t(document).on("click.bs.button.data-api","[data-toggle^=button]",function(e){var i=t(e.target);i.hasClass("btn")||(i=i.closest(".btn")),i.button("toggle"),e.preventDefault()})}(jQuery),+function(t){"use strict";var e=function(e,i){this.$element=t(e),this.$indicators=this.$element.find(".carousel-indicators"),this.options=i,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter",t.proxy(this.pause,this)).on("mouseleave",t.proxy(this.cycle,this))};e.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},e.prototype.cycle=function(e){return e||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(t.proxy(this.next,this),this.options.interval)),this},e.prototype.getActiveIndex=function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},e.prototype.to=function(e){var i=this,o=this.getActiveIndex();return e>this.$items.length-1||0>e?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){i.to(e)}):o==e?this.pause().cycle():this.slide(e>o?"next":"prev",t(this.$items[e]))},e.prototype.pause=function(e){return e||(this.paused=!0),this.$element.find(".next, .prev").length&&t.support.transition&&(this.$element.trigger(t.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},e.prototype.next=function(){return this.sliding?void 0:this.slide("next")},e.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},e.prototype.slide=function(e,i){var o=this.$element.find(".item.active"),s=i||o[e](),n=this.interval,a="next"==e?"left":"right",r="next"==e?"first":"last",l=this;if(!s.length){if(!this.options.wrap)return;s=this.$element.find(".item")[r]()}if(s.hasClass("active"))return this.sliding=!1;var h=t.Event("slide.bs.carousel",{relatedTarget:s[0],direction:a});return this.$element.trigger(h),h.isDefaultPrevented()?void 0:(this.sliding=!0,n&&this.pause(),this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid.bs.carousel",function(){var e=t(l.$indicators.children()[l.getActiveIndex()]);e&&e.addClass("active")})),t.support.transition&&this.$element.hasClass("slide")?(s.addClass(e),s[0].offsetWidth,o.addClass(a),s.addClass(a),o.one(t.support.transition.end,function(){s.removeClass([e,a].join(" ")).addClass("active"),o.removeClass(["active",a].join(" ")),l.sliding=!1,setTimeout(function(){l.$element.trigger("slid.bs.carousel")},0)}).emulateTransitionEnd(1e3*o.css("transition-duration").slice(0,-1))):(o.removeClass("active"),s.addClass("active"),this.sliding=!1,this.$element.trigger("slid.bs.carousel")),n&&this.cycle(),this)};var i=t.fn.carousel;t.fn.carousel=function(i){return this.each(function(){var o=t(this),s=o.data("bs.carousel"),n=t.extend({},e.DEFAULTS,o.data(),"object"==typeof i&&i),a="string"==typeof i?i:n.slide;s||o.data("bs.carousel",s=new e(this,n)),"number"==typeof i?s.to(i):a?s[a]():n.interval&&s.pause().cycle()})},t.fn.carousel.Constructor=e,t.fn.carousel.noConflict=function(){return t.fn.carousel=i,this},t(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(e){var i,o=t(this),s=t(o.attr("data-target")||(i=o.attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,"")),n=t.extend({},s.data(),o.data()),a=o.attr("data-slide-to");a&&(n.interval=!1),s.carousel(n),(a=o.attr("data-slide-to"))&&s.data("bs.carousel").to(a),e.preventDefault()}),t(window).on("load",function(){t('[data-ride="carousel"]').each(function(){var e=t(this);e.carousel(e.data())})})}(jQuery),+function(t){"use strict";var e=function(i,o){this.$element=t(i),this.options=t.extend({},e.DEFAULTS,o),this.transitioning=null,this.options.parent&&(this.$parent=t(this.options.parent)),this.options.toggle&&this.toggle()};e.DEFAULTS={toggle:!0},e.prototype.dimension=function(){var t=this.$element.hasClass("width");return t?"width":"height"},e.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var e=t.Event("show.bs.collapse");if(this.$element.trigger(e),!e.isDefaultPrevented()){var i=this.$parent&&this.$parent.find("> .panel > .in");if(i&&i.length){var o=i.data("bs.collapse");if(o&&o.transitioning)return;i.collapse("hide"),o||i.data("bs.collapse",null)}var s=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[s](0),this.transitioning=1;var n=function(){this.$element.removeClass("collapsing").addClass("collapse in")[s]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!t.support.transition)return n.call(this);var a=t.camelCase(["scroll",s].join("-"));this.$element.one(t.support.transition.end,t.proxy(n,this)).emulateTransitionEnd(350)[s](this.$element[0][a])}}},e.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var e=t.Event("hide.bs.collapse");if(this.$element.trigger(e),!e.isDefaultPrevented()){var i=this.dimension();this.$element[i](this.$element[i]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var o=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return t.support.transition?void this.$element[i](0).one(t.support.transition.end,t.proxy(o,this)).emulateTransitionEnd(350):o.call(this)}}},e.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var i=t.fn.collapse;t.fn.collapse=function(i){return this.each(function(){var o=t(this),s=o.data("bs.collapse"),n=t.extend({},e.DEFAULTS,o.data(),"object"==typeof i&&i);!s&&n.toggle&&"show"==i&&(i=!i),s||o.data("bs.collapse",s=new e(this,n)),"string"==typeof i&&s[i]()})},t.fn.collapse.Constructor=e,t.fn.collapse.noConflict=function(){return t.fn.collapse=i,this},t(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(e){var i,o=t(this),s=o.attr("data-target")||e.preventDefault()||(i=o.attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,""),n=t(s),a=n.data("bs.collapse"),r=a?"toggle":o.data(),l=o.attr("data-parent"),h=l&&t(l);a&&a.transitioning||(h&&h.find('[data-toggle=collapse][data-parent="'+l+'"]').not(o).addClass("collapsed"),o[n.hasClass("in")?"addClass":"removeClass"]("collapsed")),n.collapse(r)})}(jQuery),+function(t){"use strict";var e=function(e,i){this.options=i,this.$element=t(e),this.$backdrop=this.isShown=null,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,t.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};e.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},e.prototype.toggle=function(t){return this[this.isShown?"hide":"show"](t)},e.prototype.show=function(e){var i=this,o=t.Event("show.bs.modal",{relatedTarget:e});this.$element.trigger(o),this.isShown||o.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',t.proxy(this.hide,this)),this.backdrop(function(){var o=t.support.transition&&i.$element.hasClass("fade");i.$element.parent().length||i.$element.appendTo(document.body),i.$element.show().scrollTop(0),o&&i.$element[0].offsetWidth,i.$element.addClass("in").attr("aria-hidden",!1),i.enforceFocus();var s=t.Event("shown.bs.modal",{relatedTarget:e});o?i.$element.find(".modal-dialog").one(t.support.transition.end,function(){i.$element.focus().trigger(s)}).emulateTransitionEnd(300):i.$element.focus().trigger(s)}))},e.prototype.hide=function(e){e&&e.preventDefault(),e=t.Event("hide.bs.modal"),this.$element.trigger(e),this.isShown&&!e.isDefaultPrevented()&&(this.isShown=!1,this.escape(),t(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),t.support.transition&&this.$element.hasClass("fade")?this.$element.one(t.support.transition.end,t.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},e.prototype.enforceFocus=function(){t(document).off("focusin.bs.modal").on("focusin.bs.modal",t.proxy(function(t){this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.focus()},this))},e.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",t.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},e.prototype.hideModal=function(){var t=this;this.$element.hide(),this.backdrop(function(){t.removeBackdrop(),t.$element.trigger("hidden.bs.modal")})},e.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},e.prototype.backdrop=function(e){var i=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var o=t.support.transition&&i;if(this.$backdrop=t('<div class="modal-backdrop '+i+'" />').appendTo(document.body),this.$element.on("click.dismiss.bs.modal",t.proxy(function(t){t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),o&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!e)return;o?this.$backdrop.one(t.support.transition.end,e).emulateTransitionEnd(150):e()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),t.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(t.support.transition.end,e).emulateTransitionEnd(150):e()):e&&e()};var i=t.fn.modal;t.fn.modal=function(i,o){return this.each(function(){var s=t(this),n=s.data("bs.modal"),a=t.extend({},e.DEFAULTS,s.data(),"object"==typeof i&&i);n||s.data("bs.modal",n=new e(this,a)),"string"==typeof i?n[i](o):a.show&&n.show(o)})},t.fn.modal.Constructor=e,t.fn.modal.noConflict=function(){return t.fn.modal=i,this},t(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(e){var i=t(this),o=i.attr("href"),s=t(i.attr("data-target")||o&&o.replace(/.*(?=#[^\s]+$)/,"")),n=s.data("bs.modal")?"toggle":t.extend({remote:!/#/.test(o)&&o},s.data(),i.data());i.is("a")&&e.preventDefault(),s.modal(n,this).one("hide",function(){i.is(":visible")&&i.focus()})}),t(document).on("show.bs.modal",".modal",function(){t(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){t(document.body).removeClass("modal-open")})}(jQuery),+function(t){"use strict";var e=function(t,e){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",t,e)};e.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},e.prototype.init=function(e,i,o){this.enabled=!0,this.type=e,this.$element=t(i),this.options=this.getOptions(o);for(var s=this.options.trigger.split(" "),n=s.length;n--;){var a=s[n];if("click"==a)this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this));else if("manual"!=a){var r="hover"==a?"mouseenter":"focusin",l="hover"==a?"mouseleave":"focusout";this.$element.on(r+"."+this.type,this.options.selector,t.proxy(this.enter,this)),this.$element.on(l+"."+this.type,this.options.selector,t.proxy(this.leave,this))}}this.options.selector?this._options=t.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},e.prototype.getDefaults=function(){return e.DEFAULTS},e.prototype.getOptions=function(e){return e=t.extend({},this.getDefaults(),this.$element.data(),e),e.delay&&"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),e},e.prototype.getDelegateOptions=function(){var e={},i=this.getDefaults();return this._options&&t.each(this._options,function(t,o){i[t]!=o&&(e[t]=o)}),e},e.prototype.enter=function(e){var i=e instanceof this.constructor?e:t(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(i.timeout),i.hoverState="in",i.options.delay&&i.options.delay.show?void(i.timeout=setTimeout(function(){"in"==i.hoverState&&i.show()},i.options.delay.show)):i.show()},e.prototype.leave=function(e){var i=e instanceof this.constructor?e:t(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(i.timeout),i.hoverState="out",i.options.delay&&i.options.delay.hide?void(i.timeout=setTimeout(function(){"out"==i.hoverState&&i.hide()},i.options.delay.hide)):i.hide()},e.prototype.show=function(){var e=t.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){if(this.$element.trigger(e),e.isDefaultPrevented())return;var i=this,o=this.tip();this.setContent(),this.options.animation&&o.addClass("fade");var s="function"==typeof this.options.placement?this.options.placement.call(this,o[0],this.$element[0]):this.options.placement,n=/\s?auto?\s?/i,a=n.test(s);a&&(s=s.replace(n,"")||"top"),o.detach().css({top:0,left:0,display:"block"}).addClass(s),this.options.container?o.appendTo(this.options.container):o.insertAfter(this.$element);var r=this.getPosition(),l=o[0].offsetWidth,h=o[0].offsetHeight;if(a){var p=this.$element.parent(),c=s,f=document.documentElement.scrollTop||document.body.scrollTop,d="body"==this.options.container?window.innerWidth:p.outerWidth(),u="body"==this.options.container?window.innerHeight:p.outerHeight(),m="body"==this.options.container?0:p.offset().left;s="bottom"==s&&r.top+r.height+h-f>u?"top":"top"==s&&r.top-f-h<0?"bottom":"right"==s&&r.right+l>d?"left":"left"==s&&r.left-l<m?"right":s,o.removeClass(c).addClass(s)}var v=this.getCalculatedOffset(s,r,l,h);this.applyPlacement(v,s),this.hoverState=null;var g=function(){i.$element.trigger("shown.bs."+i.type)};t.support.transition&&this.$tip.hasClass("fade")?o.one(t.support.transition.end,g).emulateTransitionEnd(150):g()}},e.prototype.applyPlacement=function(e,i){var o,s=this.tip(),n=s[0].offsetWidth,a=s[0].offsetHeight,r=parseInt(s.css("margin-top"),10),l=parseInt(s.css("margin-left"),10);isNaN(r)&&(r=0),isNaN(l)&&(l=0),e.top=e.top+r,e.left=e.left+l,t.offset.setOffset(s[0],t.extend({using:function(t){s.css({top:Math.round(t.top),left:Math.round(t.left)})}},e),0),s.addClass("in");var h=s[0].offsetWidth,p=s[0].offsetHeight;if("top"==i&&p!=a&&(o=!0,e.top=e.top+a-p),/bottom|top/.test(i)){var c=0;e.left<0&&(c=-2*e.left,e.left=0,s.offset(e),h=s[0].offsetWidth,p=s[0].offsetHeight),this.replaceArrow(c-n+h,h,"left")}else this.replaceArrow(p-a,p,"top");o&&s.offset(e)},e.prototype.replaceArrow=function(t,e,i){this.arrow().css(i,t?50*(1-t/e)+"%":"")},e.prototype.setContent=function(){var t=this.tip(),e=this.getTitle();t.find(".tooltip-inner")[this.options.html?"html":"text"](e),t.removeClass("fade in top bottom left right")},e.prototype.hide=function(){function e(){"in"!=i.hoverState&&o.detach(),i.$element.trigger("hidden.bs."+i.type)}var i=this,o=this.tip(),s=t.Event("hide.bs."+this.type);return this.$element.trigger(s),s.isDefaultPrevented()?void 0:(o.removeClass("in"),t.support.transition&&this.$tip.hasClass("fade")?o.one(t.support.transition.end,e).emulateTransitionEnd(150):e(),this.hoverState=null,this)},e.prototype.fixTitle=function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},e.prototype.hasContent=function(){return this.getTitle()},e.prototype.getPosition=function(){var e=this.$element[0];return t.extend({},"function"==typeof e.getBoundingClientRect?e.getBoundingClientRect():{width:e.offsetWidth,height:e.offsetHeight},this.$element.offset())},e.prototype.getCalculatedOffset=function(t,e,i,o){return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-i/2}:"top"==t?{top:e.top-o,left:e.left+e.width/2-i/2}:"left"==t?{top:e.top+e.height/2-o/2,left:e.left-i}:{top:e.top+e.height/2-o/2,left:e.left+e.width}},e.prototype.getTitle=function(){var t,e=this.$element,i=this.options;return t=e.attr("data-original-title")||("function"==typeof i.title?i.title.call(e[0]):i.title)},e.prototype.tip=function(){return this.$tip=this.$tip||t(this.options.template)},e.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},e.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},e.prototype.enable=function(){this.enabled=!0},e.prototype.disable=function(){this.enabled=!1},e.prototype.toggleEnabled=function(){this.enabled=!this.enabled},e.prototype.toggle=function(e){var i=e?t(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;i.tip().hasClass("in")?i.leave(i):i.enter(i)},e.prototype.destroy=function(){clearTimeout(this.timeout),this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var i=t.fn.tooltip;t.fn.tooltip=function(i){return this.each(function(){var o=t(this),s=o.data("bs.tooltip"),n="object"==typeof i&&i;(s||"destroy"!=i)&&(s||o.data("bs.tooltip",s=new e(this,n)),"string"==typeof i&&s[i]())})},t.fn.tooltip.Constructor=e,t.fn.tooltip.noConflict=function(){return t.fn.tooltip=i,this}}(jQuery),+function(t){"use strict";var e=function(t,e){this.init("popover",t,e)};if(!t.fn.tooltip)throw new Error("Popover requires tooltip.js");e.DEFAULTS=t.extend({},t.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),e.prototype=t.extend({},t.fn.tooltip.Constructor.prototype),e.prototype.constructor=e,e.prototype.getDefaults=function(){return e.DEFAULTS},e.prototype.setContent=function(){var t=this.tip(),e=this.getTitle(),i=this.getContent();t.find(".popover-title")[this.options.html?"html":"text"](e),t.find(".popover-content")[this.options.html?"string"==typeof i?"html":"append":"text"](i),t.removeClass("fade top bottom left right in"),t.find(".popover-title").html()||t.find(".popover-title").hide()},e.prototype.hasContent=function(){return this.getTitle()||this.getContent()},e.prototype.getContent=function(){var t=this.$element,e=this.options;return t.attr("data-content")||("function"==typeof e.content?e.content.call(t[0]):e.content)},e.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},e.prototype.tip=function(){return this.$tip||(this.$tip=t(this.options.template)),this.$tip};var i=t.fn.popover;t.fn.popover=function(i){return this.each(function(){var o=t(this),s=o.data("bs.popover"),n="object"==typeof i&&i;(s||"destroy"!=i)&&(s||o.data("bs.popover",s=new e(this,n)),"string"==typeof i&&s[i]())})},t.fn.popover.Constructor=e,t.fn.popover.noConflict=function(){return t.fn.popover=i,this}}(jQuery),+function(t){"use strict";function e(i,o){var s,n=t.proxy(this.process,this);this.$element=t(t(i).is("body")?window:i),this.$body=t("body"),this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",n),this.options=t.extend({},e.DEFAULTS,o),this.selector=(this.options.target||(s=t(i).attr("href"))&&s.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.offsets=t([]),this.targets=t([]),this.activeTarget=null,this.refresh(),this.process()}e.DEFAULTS={offset:10},e.prototype.refresh=function(){var e=this.$element[0]==window?"offset":"position";this.offsets=t([]),this.targets=t([]);var i=this;this.$body.find(this.selector).map(function(){var o=t(this),s=o.data("target")||o.attr("href"),n=/^#./.test(s)&&t(s);return n&&n.length&&n.is(":visible")&&[[n[e]().top+(!t.isWindow(i.$scrollElement.get(0))&&i.$scrollElement.scrollTop()),s]]||null}).sort(function(t,e){return t[0]-e[0]}).each(function(){i.offsets.push(this[0]),i.targets.push(this[1])})},e.prototype.process=function(){var t,e=this.$scrollElement.scrollTop()+this.options.offset,i=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,o=i-this.$scrollElement.height(),s=this.offsets,n=this.targets,a=this.activeTarget;if(e>=o)return a!=(t=n.last()[0])&&this.activate(t);if(a&&e<=s[0])return a!=(t=n[0])&&this.activate(t);for(t=s.length;t--;)a!=n[t]&&e>=s[t]&&(!s[t+1]||e<=s[t+1])&&this.activate(n[t])},e.prototype.activate=function(e){this.activeTarget=e,t(this.selector).parentsUntil(this.options.target,".active").removeClass("active");var i=this.selector+'[data-target="'+e+'"],'+this.selector+'[href="'+e+'"]',o=t(i).parents("li").addClass("active");o.parent(".dropdown-menu").length&&(o=o.closest("li.dropdown").addClass("active")),o.trigger("activate.bs.scrollspy")};var i=t.fn.scrollspy;t.fn.scrollspy=function(i){return this.each(function(){var o=t(this),s=o.data("bs.scrollspy"),n="object"==typeof i&&i;s||o.data("bs.scrollspy",s=new e(this,n)),"string"==typeof i&&s[i]()})},t.fn.scrollspy.Constructor=e,t.fn.scrollspy.noConflict=function(){return t.fn.scrollspy=i,this},t(window).on("load",function(){t('[data-spy="scroll"]').each(function(){var e=t(this);e.scrollspy(e.data())})})}(jQuery),+function(t){"use strict";var e=function(e){this.element=t(e)};e.prototype.show=function(){var e=this.element,i=e.closest("ul:not(.dropdown-menu)"),o=e.data("target");if(o||(o=e.attr("href"),o=o&&o.replace(/.*(?=#[^\s]*$)/,"")),!e.parent("li").hasClass("active")){var s=i.find(".active:last a")[0],n=t.Event("show.bs.tab",{relatedTarget:s});if(e.trigger(n),!n.isDefaultPrevented()){var a=t(o);this.activate(e.parent("li"),i),this.activate(a,a.parent(),function(){e.trigger({type:"shown.bs.tab",relatedTarget:s})})}}},e.prototype.activate=function(e,i,o){function s(){n.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),e.addClass("active"),a?(e[0].offsetWidth,e.addClass("in")):e.removeClass("fade"),e.parent(".dropdown-menu")&&e.closest("li.dropdown").addClass("active"),o&&o()}var n=i.find("> .active"),a=o&&t.support.transition&&n.hasClass("fade");a?n.one(t.support.transition.end,s).emulateTransitionEnd(150):s(),n.removeClass("in")};var i=t.fn.tab;t.fn.tab=function(i){return this.each(function(){var o=t(this),s=o.data("bs.tab");s||o.data("bs.tab",s=new e(this)),"string"==typeof i&&s[i]()})},t.fn.tab.Constructor=e,t.fn.tab.noConflict=function(){return t.fn.tab=i,this},t(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(e){e.preventDefault(),t(this).tab("show")})}(jQuery),+function(t){"use strict";var e=function(i,o){this.options=t.extend({},e.DEFAULTS,o),this.$window=t(window).on("scroll.bs.affix.data-api",t.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",t.proxy(this.checkPositionWithEventLoop,this)),this.$element=t(i),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};e.RESET="affix affix-top affix-bottom",e.DEFAULTS={offset:0},e.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(e.RESET).addClass("affix");var t=this.$window.scrollTop(),i=this.$element.offset();return this.pinnedOffset=i.top-t},e.prototype.checkPositionWithEventLoop=function(){setTimeout(t.proxy(this.checkPosition,this),1)},e.prototype.checkPosition=function(){if(this.$element.is(":visible")){var i=t(document).height(),o=this.$window.scrollTop(),s=this.$element.offset(),n=this.options.offset,a=n.top,r=n.bottom;"top"==this.affixed&&(s.top+=o),"object"!=typeof n&&(r=a=n),"function"==typeof a&&(a=n.top(this.$element)),"function"==typeof r&&(r=n.bottom(this.$element));var l=null!=this.unpin&&o+this.unpin<=s.top?!1:null!=r&&s.top+this.$element.height()>=i-r?"bottom":null!=a&&a>=o?"top":!1;if(this.affixed!==l){this.unpin&&this.$element.css("top","");var h="affix"+(l?"-"+l:""),p=t.Event(h+".bs.affix");this.$element.trigger(p),p.isDefaultPrevented()||(this.affixed=l,this.unpin="bottom"==l?this.getPinnedOffset():null,this.$element.removeClass(e.RESET).addClass(h).trigger(t.Event(h.replace("affix","affixed"))),"bottom"==l&&this.$element.offset({top:i-r-this.$element.height()}))}}};var i=t.fn.affix;t.fn.affix=function(i){return this.each(function(){var o=t(this),s=o.data("bs.affix"),n="object"==typeof i&&i;s||o.data("bs.affix",s=new e(this,n)),"string"==typeof i&&s[i]()})},t.fn.affix.Constructor=e,t.fn.affix.noConflict=function(){return t.fn.affix=i,this},t(window).on("load",function(){t('[data-spy="affix"]').each(function(){var e=t(this),i=e.data();i.offset=i.offset||{},i.offsetBottom&&(i.offset.bottom=i.offsetBottom),i.offsetTop&&(i.offset.top=i.offsetTop),e.affix(i)})})}(jQuery);

/* global.js */
$(document).on('mouseenter mouseleave', '.productsGrid .product-block.home', function(e){
  if(e.type == 'mouseenter'){
    $(this).addClass('hover');
    $(this).prevAll().stop().animate({
      'opacity': 0.75
    }, 250);
    $(this).nextAll().stop().animate({
      'opacity': 0.75
    }, 250);
  } else {
    $(this).removeClass('hover');
    $(this).prevAll().stop().animate({
      'opacity': 1
    }, 250);
    $(this).nextAll().stop().animate({
      'opacity': 1
    }, 250);
  }
});

$(document).ready(function(){  

  // Header slideout
  $('.navbar-toggle').click(function(){
    $('.navbar-header').toggleClass( 'active' );
  });

  // Sidebar - Keurmerken
  $('.keurmerken-slider.flexslider').flexslider({
    animation: "fade",
    selector: ".keurmerken-slider-list > li",
    directionNav: false, // false next/prev
    controlNav: true,
    prevText: '',
    nextText: '',
    slideshowSpeed: 6500
  });
  
    // Scroll to top functie
  $(window).scroll(function(){
    if ($(this).scrollTop() > 500) {
      $('.scrollToTop').fadeIn();
    } else {
      $('.scrollToTop').fadeOut();
    }
  });
  
  // Homepage slider
  $('.flexslider').flexslider({
    animation: "slide",
    controlNav: false,
    prevText: "", 
    nextText: "",  
  });
  
  // FAQ
  $(".gui-content-wysiwyg").hide();
  
  $(".gui-content-subtitle").click(function(){
    $(this).next(".gui-content-wysiwyg").slideToggle("slow")
      .siblings(".gui-content-wysiwyg:visible").slideUp("slow");
    $(this).toggleClass("active");
    $(this).siblings(".gui-content-subtitle").removeClass("active");
  });
  
  // Tabs op homepage
  $( "#tabs" ).tabs();
  

    // Sticky header
    $('.sticky, .btn-group-vertical').scrollToFixed();
 
  
  $('.scrollToTop').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
  });
  
  // Categorieën
  $(document).on('mouseenter mouseleave', '.categories .category', function(e){
    if(e.type == 'mouseenter'){
      $(this).addClass('hover');
    } else {
      $(this).removeClass('hover');
    }
  });
  
  $(document).on('mouseenter mouseleave', '.categories .category, .side-banner, .left-banner, .right-banner', function(e){
    if(e.type == 'mouseenter'){
      $(this).addClass('hover');
      $(this).prevAll().stop().animate({
        'opacity': 0.75
      }, 250);
      $(this).nextAll().stop().animate({
        'opacity': 0.75
      }, 250);
    } else {
      $(this).removeClass('hover');
      $(this).prevAll().stop().animate({
        'opacity': 1
      }, 250);
      $(this).nextAll().stop().animate({
        'opacity': 1
      }, 250);
    }
  });
  
  // Navbar
  $('.desktop .item, .desktop .subitem').hover(function(){
    $(this).addClass('hover');
    $(this).find('.subnav:first').show();
  }, function(){
    $(this).removeClass('hover');
    $(this).find('.subnav').hide();
  });
  
  // Responsive navigation
  $('.burger').click(function() {
    if ($(this).hasClass('open')) {
      $(this).add('header').add('.wrapper').removeClass('open').addClass('close');
    } else {
      $(this).add('header').add('.wrapper').removeClass('close').addClass('open');
    }
  });
  $('.wrapper').click(function() {
    if ($('.burger').hasClass('open')) {
      $('.burger').add('header').add('.wrapper').removeClass('open').addClass('close');
    }
  });
  
  // Dropdown
  $('.tui-dropdown').hover(
    function(){
      $(this).addClass('hover');
      $(this).find('ul').stop(true, true).slideDown(100);
    },
    function(){
      $(this).removeClass('hover');
      $(this).find('ul').stop(true, true).slideUp(100);
    }
  );
  
  // Languages
  $('.language').hover(
    function () {
      $(".language ul").addClass( "hover" );
    },
    function () {
      $(".language ul").removeClass( "hover" );
    }
  );
  
  // Currency
  $('.currency').hover(
    function () {
      $(".currency ul").addClass( "hover" );
    },
    function () {
      $(".currency ul").removeClass( "hover" );
    }
  );
  
  // Cart
  $('#cart').hover(
    function () {
      $("#cart").addClass( "hover" );
    },
    function () {
      $("#cart").removeClass( "hover" );
    }
  );
  
  // Tabs
  $('.tabs a').click(function(){
    var tabs = $(this).closest('.tabs');
    var pages = $('.tabsPages');
    tabs.find('a').closest('li').removeClass('active');
    pages.find('.page').removeClass('active');
    $(this).closest('li').addClass('active');
    pages.find('.page.'+$(this).attr('rel')).addClass('active');
    return false;
  });
  $('.show-reviews').click(function(){
    var pages = $('.tabsPages');
    $('.tabs').find('li').removeClass('active');
    pages.find('.page').removeClass('active');
    $('li.reviews').addClass('active');
    $('.page.reviews').addClass('active');
  });
  
  // Categories 
  $('.categories .category').hover(function(){
    $('.categories .category').addClass('hover');
    $(this).removeClass('hover');
  }, function(){
    $('.categories .category').removeClass('hover');
  });
  
  if(navigator.appVersion.indexOf("MSIE 7.")!=-1) {
    $('body').append('<div class="wsa-demobar">Your browser is out of date. We recommend <a class="link" href="www.google.com/chrome/‎">Google Chrome</a> to download.</div>');
    $('body').css('marginTop', '42px');
  }
  
  // Live search
  $('.search-form .search a.search').click(function(){
    $(this).closest('form').submit();
    return false;
  });
  
  $('.search-form .search input').keyup(function(){
    liveSearch();
  });
  $('.search-form .search input').bind('webkitspeechchange', function(){
    liveSearch();
  });
  
  function urlencode(str){
    return encodeURIComponent(str).replace(/!/g, '%21').replace(/'/g, '%27').replace(/\(/g, '%28').
      replace(/\)/g, '%29').replace(/\*/g, '%2A').replace(/%20/g, '+');
  }
  
  function liveSearch(){
    var query = $('.search-form .search input').val();
    query = urlencode(query.replace('/', '-slash-'));
    if(query.length > 2){
      var url = searchUrl + query + '/page1.ajax?limit=10';
      $.getJSON(url, function(json){
        
        if(json.count > 0){
          
          var productsHtml = [];
          
          $.each(json.products, function(index, product){
            var productHtml = '' +
                '<div class="product">' +
                '<a href="' + product.url + '" title="' + product.fulltitle + '"><img src="' + product.image.replace('50x50x2', '36x36x2') + '" width="36" height="36" alt="' + product.fulltitle + '" />' +
                '<h4>' + product.fulltitle + '</h4>';
            
            if(product.price.price_old){
              productHtml = productHtml +
                '<p class="price price-offer"><span>'+ product.price.price_old_money +'</span> ' + product.price.price_money + '</p>';
            } else {
              productHtml = productHtml +
                '<p class="price">' + product.price.price_money + '</p>';
            }
            
            productHtml = productHtml +
              '</a></div>';
            
            productsHtml.push(productHtml);
          });
          
          productsHtml = productsHtml.join('');
          
          $('.search-form .autocomplete .products').html(productsHtml);
          $('.search-form .autocomplete .more a').attr('href', json.url);
          $('.search-form .autocomplete .more span').html('(' + json.count + ')');
          $('.search-form .autocomplete').removeClass('noresults');
        } else {
          $('.search-form .autocomplete').addClass('noresults');
        }
        $('.search-form .autocomplete').css('display', 'block');
      });
    } else {
      $('.search-form .autocomplete').css('display', 'none');
    }
  }
});

// Logo size
$(window).load(function(){
  sizing();
  //logoSize();
});
$(window).resize(function(){
  sizing();
});

// All size
function sizing() {
  if ($(window).width() > 992) {
    // Description text (product hover)
    $('.product .image-wrap').mouseenter(function() {
      var descriptionHeight = $(this).find('img').outerHeight();
      var starsHeight = $(this).find('.description .stars').outerHeight();
      var cartHeight = $(this).find('.description .cart').outerHeight();
      var textHeight = descriptionHeight - starsHeight - cartHeight;
      $(this).find('.description .text').css('height', textHeight-60 + 'px');  
    });
    
    // tabs height
    var OptionHeight = $('.product-option').outerHeight();
    var PriceHeight = $('.product-price').outerHeight();
    var tabsTitle = $('.product-tabs .tabs a').outerHeight();
    var imgHeight = $('.product-img').outerHeight();
    
    var tabsHeight =  imgHeight - PriceHeight - OptionHeight - tabsTitle;  
    $('.product-tabs .page').css('maxHeight', tabsHeight + 'px');
  }
  
  
  if ($(window).width() < 767) {
    // reponsive 
    $('nav.desktop').removeClass('desktop');
    $('nav').addClass('mobile');
    
    $('nav .item.sub').click(function() {
      $(this).addClass('view-subnav');
      $('nav .glyphicon-remove').show();  
    });
    
    $('nav .glyphicon-remove').click(function() {
      $('nav .item.sub').removeClass('view-subnav');
      $(this).hide();
    });  
  }
  else {
    $('nav.mobile').removeClass('mobile');
    $('nav').addClass('desktop');
  }
}

// Logo 
function logoSize() {
  if ($(window).width() < 767) {
    var logoWith = $('.logo img').width();
    logoWith = (logoWith * 0.8);
    $('.logo img').width(logoWith);
  }
}


/* jcarousel */

(function($) {
    $(function() {
        var jcarousel = $('.slider');
        var jcarouselHeadline = $('.headline .slider');

        jcarousel
          .on('jcarousel:reload jcarousel:create', function () {
                var width = jcarousel.innerWidth();
                jcarouselHeadline.jcarousel('items').css('width', width + 'px');
            })
            .jcarousel({
                wrap: 'circular'
            });
   

              
      var jcarouselInterval = parseInt('4000');
  
      if (jcarouselInterval > 0) {
          $('.slider').jcarouselAutoscroll({
              interval: jcarouselInterval
          });
      }

      $('.slider-prev')
        .jcarouselControl({
            target: '-=1'
        });

        $('.slider-next')
        .jcarouselControl({
            target: '+=1'
        });
      
      $(document).on('mouseenter mouseleave', '.slider', function(e) {
          if (e.type == 'mouseenter') {
              $(this).jcarouselAutoscroll('stop');
          } else {
              $(this).jcarouselAutoscroll('start');
          }
      });

        $('.slider-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .on('click', function(e) {
                e.preventDefault();
            })
            .jcarouselPagination({
                perPage: 1,
                item: function(page) {
                    return '<a href="#' + page + '">' + page + '</a>';
                }
            });
    });
})(jQuery);


/*! jCarousel - v0.3.0 - 2014-01-09
* http://sorgalla.com/jcarousel
* Copyright (c) 2014 Jan Sorgalla; Licensed MIT */
(function(t){"use strict";var i=t.jCarousel={};i.version="0.3.0";var s=/^([+\-]=)?(.+)$/;i.parseTarget=function(t){var i=!1,e="object"!=typeof t?s.exec(t):null;return e?(t=parseInt(e[2],10)||0,e[1]&&(i=!0,"-="===e[1]&&(t*=-1))):"object"!=typeof t&&(t=parseInt(t,10)||0),{target:t,relative:i}},i.detectCarousel=function(t){for(var i;t.length>0;){if(i=t.filter("[data-jcarousel]"),i.length>0)return i;if(i=t.find("[data-jcarousel]"),i.length>0)return i;t=t.parent()}return null},i.base=function(s){return{version:i.version,_options:{},_element:null,_carousel:null,_init:t.noop,_create:t.noop,_destroy:t.noop,_reload:t.noop,create:function(){return this._element.attr("data-"+s.toLowerCase(),!0).data(s,this),!1===this._trigger("create")?this:(this._create(),this._trigger("createend"),this)},destroy:function(){return!1===this._trigger("destroy")?this:(this._destroy(),this._trigger("destroyend"),this._element.removeData(s).removeAttr("data-"+s.toLowerCase()),this)},reload:function(t){return!1===this._trigger("reload")?this:(t&&this.options(t),this._reload(),this._trigger("reloadend"),this)},element:function(){return this._element},options:function(i,s){if(0===arguments.length)return t.extend({},this._options);if("string"==typeof i){if(s===void 0)return this._options[i]===void 0?null:this._options[i];this._options[i]=s}else this._options=t.extend({},this._options,i);return this},carousel:function(){return this._carousel||(this._carousel=i.detectCarousel(this.options("carousel")||this._element),this._carousel||t.error('Could not detect carousel for plugin "'+s+'"')),this._carousel},_trigger:function(i,e,r){var n,o=!1;return r=[this].concat(r||[]),(e||this._element).each(function(){n=t.Event((s+":"+i).toLowerCase()),t(this).trigger(n,r),n.isDefaultPrevented()&&(o=!0)}),!o}}},i.plugin=function(s,e){var r=t[s]=function(i,s){this._element=t(i),this.options(s),this._init(),this.create()};return r.fn=r.prototype=t.extend({},i.base(s),e),t.fn[s]=function(i){var e=Array.prototype.slice.call(arguments,1),n=this;return"string"==typeof i?this.each(function(){var r=t(this).data(s);if(!r)return t.error("Cannot call methods on "+s+" prior to initialization; "+'attempted to call method "'+i+'"');if(!t.isFunction(r[i])||"_"===i.charAt(0))return t.error('No such method "'+i+'" for '+s+" instance");var o=r[i].apply(r,e);return o!==r&&o!==void 0?(n=o,!1):void 0}):this.each(function(){var e=t(this).data(s);e instanceof r?e.reload(i):new r(this,i)}),n},r}})(jQuery),function(t,i){"use strict";var s=function(t){return parseFloat(t)||0};t.jCarousel.plugin("jcarousel",{animating:!1,tail:0,inTail:!1,resizeTimer:null,lt:null,vertical:!1,rtl:!1,circular:!1,underflow:!1,relative:!1,_options:{list:function(){return this.element().children().eq(0)},items:function(){return this.list().children()},animation:400,transitions:!1,wrap:null,vertical:null,rtl:null,center:!1},_list:null,_items:null,_target:null,_first:null,_last:null,_visible:null,_fullyvisible:null,_init:function(){var t=this;return this.onWindowResize=function(){t.resizeTimer&&clearTimeout(t.resizeTimer),t.resizeTimer=setTimeout(function(){t.reload()},100)},this},_create:function(){this._reload(),t(i).on("resize.jcarousel",this.onWindowResize)},_destroy:function(){t(i).off("resize.jcarousel",this.onWindowResize)},_reload:function(){this.vertical=this.options("vertical"),null==this.vertical&&(this.vertical=this.list().height()>this.list().width()),this.rtl=this.options("rtl"),null==this.rtl&&(this.rtl=function(i){if("rtl"===(""+i.attr("dir")).toLowerCase())return!0;var s=!1;return i.parents("[dir]").each(function(){return/rtl/i.test(t(this).attr("dir"))?(s=!0,!1):void 0}),s}(this._element)),this.lt=this.vertical?"top":"left",this.relative="relative"===this.list().css("position"),this._list=null,this._items=null;var i=this._target&&this.index(this._target)>=0?this._target:this.closest();this.circular="circular"===this.options("wrap"),this.underflow=!1;var s={left:0,top:0};return i.length>0&&(this._prepare(i),this.list().find("[data-jcarousel-clone]").remove(),this._items=null,this.underflow=this._fullyvisible.length>=this.items().length,this.circular=this.circular&&!this.underflow,s[this.lt]=this._position(i)+"px"),this.move(s),this},list:function(){if(null===this._list){var i=this.options("list");this._list=t.isFunction(i)?i.call(this):this._element.find(i)}return this._list},items:function(){if(null===this._items){var i=this.options("items");this._items=(t.isFunction(i)?i.call(this):this.list().find(i)).not("[data-jcarousel-clone]")}return this._items},index:function(t){return this.items().index(t)},closest:function(){var i,e=this,r=this.list().position()[this.lt],n=t(),o=!1,l=this.vertical?"bottom":this.rtl&&!this.relative?"left":"right";return this.rtl&&this.relative&&!this.vertical&&(r+=this.list().width()-this.clipping()),this.items().each(function(){if(n=t(this),o)return!1;var a=e.dimension(n);if(r+=a,r>=0){if(i=a-s(n.css("margin-"+l)),!(0>=Math.abs(r)-a+i/2))return!1;o=!0}}),n},target:function(){return this._target},first:function(){return this._first},last:function(){return this._last},visible:function(){return this._visible},fullyvisible:function(){return this._fullyvisible},hasNext:function(){if(!1===this._trigger("hasnext"))return!0;var t=this.options("wrap"),i=this.items().length-1;return i>=0&&!this.underflow&&(t&&"first"!==t||i>this.index(this._last)||this.tail&&!this.inTail)?!0:!1},hasPrev:function(){if(!1===this._trigger("hasprev"))return!0;var t=this.options("wrap");return this.items().length>0&&!this.underflow&&(t&&"last"!==t||this.index(this._first)>0||this.tail&&this.inTail)?!0:!1},clipping:function(){return this._element["inner"+(this.vertical?"Height":"Width")]()},dimension:function(t){return t["outer"+(this.vertical?"Height":"Width")](!0)},scroll:function(i,s,e){if(this.animating)return this;if(!1===this._trigger("scroll",null,[i,s]))return this;t.isFunction(s)&&(e=s,s=!0);var r=t.jCarousel.parseTarget(i);if(r.relative){var n,o,l,a,h,u,c,f,d=this.items().length-1,_=Math.abs(r.target),p=this.options("wrap");if(r.target>0){var v=this.index(this._last);if(v>=d&&this.tail)this.inTail?"both"===p||"last"===p?this._scroll(0,s,e):t.isFunction(e)&&e.call(this,!1):this._scrollTail(s,e);else if(n=this.index(this._target),this.underflow&&n===d&&("circular"===p||"both"===p||"last"===p)||!this.underflow&&v===d&&("both"===p||"last"===p))this._scroll(0,s,e);else if(l=n+_,this.circular&&l>d){for(f=d,h=this.items().get(-1);l>f++;)h=this.items().eq(0),u=this._visible.index(h)>=0,u&&h.after(h.clone(!0).attr("data-jcarousel-clone",!0)),this.list().append(h),u||(c={},c[this.lt]=this.dimension(h),this.moveBy(c)),this._items=null;this._scroll(h,s,e)}else this._scroll(Math.min(l,d),s,e)}else if(this.inTail)this._scroll(Math.max(this.index(this._first)-_+1,0),s,e);else if(o=this.index(this._first),n=this.index(this._target),a=this.underflow?n:o,l=a-_,0>=a&&(this.underflow&&"circular"===p||"both"===p||"first"===p))this._scroll(d,s,e);else if(this.circular&&0>l){for(f=l,h=this.items().get(0);0>f++;){h=this.items().eq(-1),u=this._visible.index(h)>=0,u&&h.after(h.clone(!0).attr("data-jcarousel-clone",!0)),this.list().prepend(h),this._items=null;var g=this.dimension(h);c={},c[this.lt]=-g,this.moveBy(c)}this._scroll(h,s,e)}else this._scroll(Math.max(l,0),s,e)}else this._scroll(r.target,s,e);return this._trigger("scrollend"),this},moveBy:function(t,i){var e=this.list().position(),r=1,n=0;return this.rtl&&!this.vertical&&(r=-1,this.relative&&(n=this.list().width()-this.clipping())),t.left&&(t.left=e.left+n+s(t.left)*r+"px"),t.top&&(t.top=e.top+n+s(t.top)*r+"px"),this.move(t,i)},move:function(i,s){s=s||{};var e=this.options("transitions"),r=!!e,n=!!e.transforms,o=!!e.transforms3d,l=s.duration||0,a=this.list();if(!r&&l>0)return a.animate(i,s),void 0;var h=s.complete||t.noop,u={};if(r){var c=a.css(["transitionDuration","transitionTimingFunction","transitionProperty"]),f=h;h=function(){t(this).css(c),f.call(this)},u={transitionDuration:(l>0?l/1e3:0)+"s",transitionTimingFunction:e.easing||s.easing,transitionProperty:l>0?function(){return n||o?"all":i.left?"left":"top"}():"none",transform:"none"}}o?u.transform="translate3d("+(i.left||0)+","+(i.top||0)+",0)":n?u.transform="translate("+(i.left||0)+","+(i.top||0)+")":t.extend(u,i),r&&l>0&&a.one("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd",h),a.css(u),0>=l&&a.each(function(){h.call(this)})},_scroll:function(i,s,e){if(this.animating)return t.isFunction(e)&&e.call(this,!1),this;if("object"!=typeof i?i=this.items().eq(i):i.jquery===void 0&&(i=t(i)),0===i.length)return t.isFunction(e)&&e.call(this,!1),this;this.inTail=!1,this._prepare(i);var r=this._position(i),n=this.list().position()[this.lt];if(r===n)return t.isFunction(e)&&e.call(this,!1),this;var o={};return o[this.lt]=r+"px",this._animate(o,s,e),this},_scrollTail:function(i,s){if(this.animating||!this.tail)return t.isFunction(s)&&s.call(this,!1),this;var e=this.list().position()[this.lt];this.rtl&&this.relative&&!this.vertical&&(e+=this.list().width()-this.clipping()),this.rtl&&!this.vertical?e+=this.tail:e-=this.tail,this.inTail=!0;var r={};return r[this.lt]=e+"px",this._update({target:this._target.next(),fullyvisible:this._fullyvisible.slice(1).add(this._visible.last())}),this._animate(r,i,s),this},_animate:function(i,s,e){if(e=e||t.noop,!1===this._trigger("animate"))return e.call(this,!1),this;this.animating=!0;var r=this.options("animation"),n=t.proxy(function(){this.animating=!1;var t=this.list().find("[data-jcarousel-clone]");t.length>0&&(t.remove(),this._reload()),this._trigger("animateend"),e.call(this,!0)},this),o="object"==typeof r?t.extend({},r):{duration:r},l=o.complete||t.noop;return s===!1?o.duration=0:t.fx.speeds[o.duration]!==void 0&&(o.duration=t.fx.speeds[o.duration]),o.complete=function(){n(),l.call(this)},this.move(i,o),this},_prepare:function(i){var e,r,n,o,l=this.index(i),a=l,h=this.dimension(i),u=this.clipping(),c=this.vertical?"bottom":this.rtl?"left":"right",f=this.options("center"),d={target:i,first:i,last:i,visible:i,fullyvisible:u>=h?i:t()};if(f&&(h/=2,u/=2),u>h)for(;;){if(e=this.items().eq(++a),0===e.length){if(!this.circular)break;if(e=this.items().eq(0),i.get(0)===e.get(0))break;if(r=this._visible.index(e)>=0,r&&e.after(e.clone(!0).attr("data-jcarousel-clone",!0)),this.list().append(e),!r){var _={};_[this.lt]=this.dimension(e),this.moveBy(_)}this._items=null}if(o=this.dimension(e),0===o)break;if(h+=o,d.last=e,d.visible=d.visible.add(e),n=s(e.css("margin-"+c)),u>=h-n&&(d.fullyvisible=d.fullyvisible.add(e)),h>=u)break}if(!this.circular&&!f&&u>h)for(a=l;;){if(0>--a)break;if(e=this.items().eq(a),0===e.length)break;if(o=this.dimension(e),0===o)break;if(h+=o,d.first=e,d.visible=d.visible.add(e),n=s(e.css("margin-"+c)),u>=h-n&&(d.fullyvisible=d.fullyvisible.add(e)),h>=u)break}return this._update(d),this.tail=0,f||"circular"===this.options("wrap")||"custom"===this.options("wrap")||this.index(d.last)!==this.items().length-1||(h-=s(d.last.css("margin-"+c)),h>u&&(this.tail=h-u)),this},_position:function(t){var i=this._first,s=i.position()[this.lt],e=this.options("center"),r=e?this.clipping()/2-this.dimension(i)/2:0;return this.rtl&&!this.vertical?(s-=this.relative?this.list().width()-this.dimension(i):this.clipping()-this.dimension(i),s+=r):s-=r,!e&&(this.index(t)>this.index(i)||this.inTail)&&this.tail?(s=this.rtl&&!this.vertical?s-this.tail:s+this.tail,this.inTail=!0):this.inTail=!1,-s},_update:function(i){var s,e=this,r={target:this._target||t(),first:this._first||t(),last:this._last||t(),visible:this._visible||t(),fullyvisible:this._fullyvisible||t()},n=this.index(i.first||r.first)<this.index(r.first),o=function(s){var o=[],l=[];i[s].each(function(){0>r[s].index(this)&&o.push(this)}),r[s].each(function(){0>i[s].index(this)&&l.push(this)}),n?o=o.reverse():l=l.reverse(),e._trigger(s+"in",t(o)),e._trigger(s+"out",t(l)),e["_"+s]=i[s]};for(s in i)o(s);return this}})}(jQuery,window),function(t){"use strict";t.jcarousel.fn.scrollIntoView=function(i,s,e){var r,n=t.jCarousel.parseTarget(i),o=this.index(this._fullyvisible.first()),l=this.index(this._fullyvisible.last());if(r=n.relative?0>n.target?Math.max(0,o+n.target):l+n.target:"object"!=typeof n.target?n.target:this.index(n.target),o>r)return this.scroll(r,s,e);if(r>=o&&l>=r)return t.isFunction(e)&&e.call(this,!1),this;for(var a,h=this.items(),u=this.clipping(),c=this.vertical?"bottom":this.rtl?"left":"right",f=0;;){if(a=h.eq(r),0===a.length)break;if(f+=this.dimension(a),f>=u){var d=parseFloat(a.css("margin-"+c))||0;f-d!==u&&r++;break}if(0>=r)break;r--}return this.scroll(r,s,e)}}(jQuery),function(t){"use strict";t.jCarousel.plugin("jcarouselControl",{_options:{target:"+=1",event:"click",method:"scroll"},_active:null,_init:function(){this.onDestroy=t.proxy(function(){this._destroy(),this.carousel().one("jcarousel:createend",t.proxy(this._create,this))},this),this.onReload=t.proxy(this._reload,this),this.onEvent=t.proxy(function(i){i.preventDefault();var s=this.options("method");t.isFunction(s)?s.call(this):this.carousel().jcarousel(this.options("method"),this.options("target"))},this)},_create:function(){this.carousel().one("jcarousel:destroy",this.onDestroy).on("jcarousel:reloadend jcarousel:scrollend",this.onReload),this._element.on(this.options("event")+".jcarouselcontrol",this.onEvent),this._reload()},_destroy:function(){this._element.off(".jcarouselcontrol",this.onEvent),this.carousel().off("jcarousel:destroy",this.onDestroy).off("jcarousel:reloadend jcarousel:scrollend",this.onReload)},_reload:function(){var i,s=t.jCarousel.parseTarget(this.options("target")),e=this.carousel();if(s.relative)i=e.jcarousel(s.target>0?"hasNext":"hasPrev");else{var r="object"!=typeof s.target?e.jcarousel("items").eq(s.target):s.target;i=e.jcarousel("target").index(r)>=0}return this._active!==i&&(this._trigger(i?"active":"inactive"),this._active=i),this}})}(jQuery),function(t){"use strict";t.jCarousel.plugin("jcarouselPagination",{_options:{perPage:null,item:function(t){return'<a href="#'+t+'">'+t+"</a>"},event:"click",method:"scroll"},_pages:{},_items:{},_currentPage:null,_init:function(){this.onDestroy=t.proxy(function(){this._destroy(),this.carousel().one("jcarousel:createend",t.proxy(this._create,this))},this),this.onReload=t.proxy(this._reload,this),this.onScroll=t.proxy(this._update,this)},_create:function(){this.carousel().one("jcarousel:destroy",this.onDestroy).on("jcarousel:reloadend",this.onReload).on("jcarousel:scrollend",this.onScroll),this._reload()},_destroy:function(){this._clear(),this.carousel().off("jcarousel:destroy",this.onDestroy).off("jcarousel:reloadend",this.onReload).off("jcarousel:scrollend",this.onScroll)},_reload:function(){var i=this.options("perPage");if(this._pages={},this._items={},t.isFunction(i)&&(i=i.call(this)),null==i)this._pages=this._calculatePages();else for(var s,e=parseInt(i,10)||0,r=this.carousel().jcarousel("items"),n=1,o=0;;){if(s=r.eq(o++),0===s.length)break;this._pages[n]=this._pages[n]?this._pages[n].add(s):s,0===o%e&&n++}this._clear();var l=this,a=this.carousel().data("jcarousel"),h=this._element,u=this.options("item");t.each(this._pages,function(i,s){var e=l._items[i]=t(u.call(l,i,s));e.on(l.options("event")+".jcarouselpagination",t.proxy(function(){var t=s.eq(0);if(a.circular){var e=a.index(a.target()),r=a.index(t);parseFloat(i)>parseFloat(l._currentPage)?e>r&&(t="+="+(a.items().length-e+r)):r>e&&(t="-="+(e+(a.items().length-r)))}a[this.options("method")](t)},l)),h.append(e)}),this._update()},_update:function(){var i,s=this.carousel().jcarousel("target");t.each(this._pages,function(t,e){return e.each(function(){return s.is(this)?(i=t,!1):void 0}),i?!1:void 0}),this._currentPage!==i&&(this._trigger("inactive",this._items[this._currentPage]),this._trigger("active",this._items[i])),this._currentPage=i},items:function(){return this._items},_clear:function(){this._element.empty(),this._currentPage=null},_calculatePages:function(){for(var t,i=this.carousel().data("jcarousel"),s=i.items(),e=i.clipping(),r=0,n=0,o=1,l={};;){if(t=s.eq(n++),0===t.length)break;l[o]=l[o]?l[o].add(t):t,r+=i.dimension(t),r>=e&&(o++,r=0)}return l}})}(jQuery),function(t){"use strict";t.jCarousel.plugin("jcarouselAutoscroll",{_options:{target:"+=1",interval:3e3,autostart:!0},_timer:null,_init:function(){this.onDestroy=t.proxy(function(){this._destroy(),this.carousel().one("jcarousel:createend",t.proxy(this._create,this))},this),this.onAnimateEnd=t.proxy(this.start,this)},_create:function(){this.carousel().one("jcarousel:destroy",this.onDestroy),this.options("autostart")&&this.start()},_destroy:function(){this.stop(),this.carousel().off("jcarousel:destroy",this.onDestroy)},start:function(){return this.stop(),this.carousel().one("jcarousel:animateend",this.onAnimateEnd),this._timer=setTimeout(t.proxy(function(){this.carousel().jcarousel("scroll",this.options("target"))},this),this.options("interval")),this},stop:function(){return this._timer&&(this._timer=clearTimeout(this._timer)),this.carousel().off("jcarousel:animateend",this.onAnimateEnd),this}})}(jQuery);



/*
Lightbox for Bootstrap 3 by @ashleydw
*/
(function(){"use strict";var t,i;t=jQuery,i=function(i,e){var o,s,a,r=this;return this.options=t.extend({title:null,footer:null,remote:null},t.fn.ekkoLightbox.defaults,e||{}),this.$element=t(i),o="",this.modal_id=this.options.modal_id?this.options.modal_id:"ekkoLightbox-"+Math.floor(1e3*Math.random()+1),a='<div class="modal-header"'+(this.options.title||this.options.always_show_close?"":' style="display:none"')+'><button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button></div>',s='<div class="modal-footer"'+(this.options.footer?"":' style="display:none"')+">"+this.options.footer+"</div>",t(document.body).append('<div id="'+this.modal_id+'" class="ekko-lightbox modal fade" tabindex="-1"><div class="modal-dialog"><div class="modal-content">'+a+'<div class="modal-body"><div class="ekko-lightbox-container"><div></div></div></div>'+s+"</div></div></div>"),this.modal=t("#"+this.modal_id),this.modal_dialog=this.modal.find(".modal-dialog").first(),this.modal_content=this.modal.find(".modal-content").first(),this.modal_body=this.modal.find(".modal-body").first(),this.lightbox_container=this.modal_body.find(".ekko-lightbox-container").first(),this.lightbox_body=this.lightbox_container.find("> div:first-child").first(),this.modal_arrows=null,this.border={top:parseFloat(this.modal_dialog.css("border-top-width"))+parseFloat(this.modal_content.css("border-top-width"))+parseFloat(this.modal_body.css("border-top-width")),right:parseFloat(this.modal_dialog.css("border-right-width"))+parseFloat(this.modal_content.css("border-right-width"))+parseFloat(this.modal_body.css("border-right-width")),bottom:parseFloat(this.modal_dialog.css("border-bottom-width"))+parseFloat(this.modal_content.css("border-bottom-width"))+parseFloat(this.modal_body.css("border-bottom-width")),left:parseFloat(this.modal_dialog.css("border-left-width"))+parseFloat(this.modal_content.css("border-left-width"))+parseFloat(this.modal_body.css("border-left-width"))},this.padding={top:parseFloat(this.modal_dialog.css("padding-top"))+parseFloat(this.modal_content.css("padding-top"))+parseFloat(this.modal_body.css("padding-top")),right:parseFloat(this.modal_dialog.css("padding-right"))+parseFloat(this.modal_content.css("padding-right"))+parseFloat(this.modal_body.css("padding-right")),bottom:parseFloat(this.modal_dialog.css("padding-bottom"))+parseFloat(this.modal_content.css("padding-bottom"))+parseFloat(this.modal_body.css("padding-bottom")),left:parseFloat(this.modal_dialog.css("padding-left"))+parseFloat(this.modal_content.css("padding-left"))+parseFloat(this.modal_body.css("padding-left"))},this.modal.on("show.bs.modal",this.options.onShow.bind(this)).on("shown.bs.modal",function(){return r.modal_shown(),r.options.onShown.call(r)}).on("hide.bs.modal",this.options.onHide.bind(this)).on("hidden.bs.modal",function(){return r.gallery&&t(document).off("keydown.ekkoLightbox"),r.modal.remove(),r.options.onHidden.call(r)}).modal("show",e),this.modal},i.prototype={modal_shown:function(){var i,e=this;return this.options.remote?(this.gallery=this.$element.data("gallery"),this.gallery&&("document.body"===this.options.gallery_parent_selector||""===this.options.gallery_parent_selector?this.gallery_items=t(document.body).find('*[data-toggle="lightbox"][data-gallery="'+this.gallery+'"]'):this.gallery_items=this.$element.parents(this.options.gallery_parent_selector).first().find('*[data-toggle="lightbox"][data-gallery="'+this.gallery+'"]'),this.gallery_index=this.gallery_items.index(this.$element),t(document).on("keydown.ekkoLightbox",this.navigate.bind(this)),this.options.directional_arrows&&this.gallery_items.length>1&&(this.lightbox_container.prepend('<div class="ekko-lightbox-nav-overlay"><a href="#" class="'+this.strip_stops(this.options.left_arrow_class)+'"></a><a href="#" class="'+this.strip_stops(this.options.right_arrow_class)+'"></a></div>'),this.modal_arrows=this.lightbox_container.find("div.ekko-lightbox-nav-overlay").first(),this.lightbox_container.find("a"+this.strip_spaces(this.options.left_arrow_class)).on("click",function(t){return t.preventDefault(),e.navigate_left()}),this.lightbox_container.find("a"+this.strip_spaces(this.options.right_arrow_class)).on("click",function(t){return t.preventDefault(),e.navigate_right()}))),this.options.type?"image"===this.options.type?this.preloadImage(this.options.remote,!0):"youtube"===this.options.type&&(i=this.getYoutubeId(this.options.remote))?this.showYoutubeVideo(i):"vimeo"===this.options.type?this.showVimeoVideo(this.options.remote):this.error('Could not detect remote target type. Force the type using data-type="image|youtube|vimeo"'):this.detectRemoteType(this.options.remote)):this.error("No remote target given")},strip_stops:function(t){return t.replace(/\./g,"")},strip_spaces:function(t){return t.replace(/\s/g,"")},isImage:function(t){return t.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)},isSwf:function(t){return t.match(/\.(swf)((\?|#).*)?$/i)},getYoutubeId:function(t){var i;return i=t.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/),i&&11===i[2].length?i[2]:!1},getVimeoId:function(t){return t.indexOf("vimeo")>0?t:!1},navigate:function(t){if(t=t||window.event,39===t.keyCode||37===t.keyCode){if(39===t.keyCode)return this.navigate_right();if(37===t.keyCode)return this.navigate_left()}},navigate_left:function(){var i;if(1!==this.gallery_items.length)return 0===this.gallery_index?this.gallery_index=this.gallery_items.length-1:this.gallery_index--,this.$element=t(this.gallery_items.get(this.gallery_index)),this.updateTitleAndFooter(),i=this.$element.attr("data-remote")||this.$element.attr("href"),this.detectRemoteType(i,this.$element.attr("data-type"))},navigate_right:function(){var i,e;if(1!==this.gallery_items.length)return this.gallery_index===this.gallery_items.length-1?this.gallery_index=0:this.gallery_index++,this.$element=t(this.gallery_items.get(this.gallery_index)),e=this.$element.attr("data-remote")||this.$element.attr("href"),this.updateTitleAndFooter(),this.detectRemoteType(e,this.$element.attr("data-type")),this.gallery_index+1<this.gallery_items.length&&(i=t(this.gallery_items.get(this.gallery_index+1),!1),e=i.attr("data-remote")||i.attr("href"),"image"===i.attr("data-type")||this.isImage(e))?this.preloadImage(e,!1):void 0},detectRemoteType:function(t,i){var e;return"image"===i||this.isImage(t)?(this.options.type="image",this.preloadImage(t,!0)):"youtube"===i||(e=this.getYoutubeId(t))?(this.options.type="youtube",this.showYoutubeVideo(e)):"vimeo"===i||(e=this.getVimeoId(t))?(this.options.type="vimeo",this.showVimeoVideo(e)):this.error('Could not detect remote target type. Force the type using data-type="image|youtube|vimeo"')},updateTitleAndFooter:function(){var t,i,e,o;return e=this.modal_content.find(".modal-header"),i=this.modal_content.find(".modal-footer"),o=this.$element.data("title")||"&nbsp;",t=this.$element.data("footer")||"",e.css("display","").find(".modal-title").html(o),o||this.options.always_show_close?e.css("display",""):e.css("display","none"),t?i.css("display","").html(t):i.css("display","none"),this},showLoading:function(){return this.lightbox_body.html('<div class="modal-loading">Loading..</div>'),this},showYoutubeVideo:function(t){var i,e,o;return i=560/315,o=this.$element.data("width")||560,o=this.checkDimensions(o),e=o/i,this.resize(o),this.lightbox_body.html('<iframe width="'+o+'" height="'+e+'" src="//www.youtube.com/embed/'+t+'?badge=0&autoplay=1&html5=1" frameborder="0" allowfullscreen></iframe>'),this.modal_arrows?this.modal_arrows.css("display","none"):void 0},showVimeoVideo:function(t){var i,e,o;return i=500/281,o=this.$element.data("width")||560,o=this.checkDimensions(o),e=o/i,this.resize(o),this.lightbox_body.html('<iframe width="'+o+'" height="'+e+'" src="'+t+'?autoplay=1" frameborder="0" allowfullscreen></iframe>'),this.modal_arrows?this.modal_arrows.css("display","none"):void 0},error:function(t){return this.lightbox_body.html(t),this},preloadImage:function(i,e){var o,s=this;return o=new Image,(null==e||e===!0)&&(o.onload=function(){var i;return i=t("<img />"),i.attr("src",o.src),i.addClass("img-responsive"),s.lightbox_body.html(i),s.modal_arrows&&s.modal_arrows.css("display","block"),s.resize(o.width)},o.onerror=function(){return s.error("Failed to load image: "+i)}),o.src=i,o},resize:function(i){var e;return e=i+this.border.left+this.padding.left+this.padding.right+this.border.right,this.modal_dialog.css("width","auto").css("max-width",e),this.lightbox_container.find("a").css("padding-top",function(){return t(this).parent().height()/2}),this},checkDimensions:function(t){var i,e;return e=t+this.border.left+this.padding.left+this.padding.right+this.border.right,i=document.body.clientWidth,e>i&&(t=this.modal_body.width()),t},close:function(){return this.modal.modal("hide")}},t.fn.ekkoLightbox=function(e){return this.each(function(){var o;return o=t(this),e=t.extend({remote:o.attr("data-remote")||o.attr("href"),gallery_parent_selector:o.attr("data-parent"),type:o.attr("data-type")},e,o.data()),new i(this,e),this})},t.fn.ekkoLightbox.defaults={gallery_parent_selector:"*:not(.row)",left_arrow_class:".glyphicon .glyphicon-chevron-left",right_arrow_class:".glyphicon .glyphicon-chevron-right",directional_arrows:!0,type:null,always_show_close:!0,onShow:function(){},onShown:function(){},onHide:function(){},onHidden:function(){}}}).call(this);


/*select 2 optionpicker */
jQuery.fn.select2OptionPicker=function(e){return this.each(function(){var t=jQuery,a=t(this),s=a.attr("multiple");a.hide();var i=t('<div class="tui-dropdown"><span>'+product.title+'<i class="caret"></i></span></div>'),d=0,l=function(s){s.attr("label")&&i.append("<strong>"+s.attr("label")+"</strong>");var l=t('<ul class="select-buttons">');s.children("option").each(function(){var s=t(this).data("img-src"),i=t(this).data("color"),c=t(this).attr("value"),n=t('<li class="boxes a'+c+'"></li>');t(this).attr("disabled")||a.attr("disabled")?(n.addClass("disabled"),n.append("<span>"+t(this).html()+"</span>")):i?n.append('<a href="#" style="background-color:'+i+'" data-select-index="'+d+'">&nbsp;</a>'):s?n.append('<a href="#" data-select-index="'+d+'"><img class="image_picker" src="'+s+'"></a>'):n.append('<a href="#" data-select-index="'+d+'">'+t(this).html()+"<b></b></a>"),e&&e.noDefault||!t(this).attr("selected")||n.children("a, span").addClass("picked"),l.append(n),d++}),i.append(l)},c=a.children("optgroup");0==c.length?l(a):c.each(function(){l(t(this))}),a.after(i),i.find("a").click(function(e){e.preventDefault();var d=t(a.find("option")[t(this).attr("data-select-index")]);s?d.attr("selected")?(t(this).removeClass("picked"),d.removeAttr("selected")):(t(this).addClass("picked"),d.attr("selected","selected")):t(this).hasClass("picked")?(t(this).removeClass("picked"),d.removeAttr("selected")):(i.find("a, span").removeClass("picked"),t(this).addClass("picked"),d.attr("selected","selected")),a.trigger("change")})})};



/* lightgallery */
/*http://sachinchoolur.github.io/lightGallery*/
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('!2(e){"4s 4p";e.4k.7=2(i){4 a,l,t,n,s,d,o,r,c,h,u,v,f,p={Z:"k",3o:!0,19:"4d",X:4a,3m:!0,1k:!1,1t:!1,3l:47,L:1,3h:!0,1g:!1,3g:{3f:"3W 3V"},1n:!1,15:!1,Y:!0,1J:!1,3e:!1,1d:!1,1p:!1,1M:!0,34:!1,1P:!1,33:3B,30:2Z,2Y:"3v",1u:!0,2X:4l,W:!1,O:[],2T:2(){},2S:2(){},2R:2(){},2a:2(){},2P:2(){},2O:2(){},2M:2(){}},m=e(3),g=!1,C=\'<6 K="7-2F"><6 K="7-2C"><6 K="7-25"></6><a K="7-1o" j="1o"></a></6></6>\',y=2y 0!==2x.4n||"4m"1T 1a||"48"1T 1a||2s.3C,b=!1,S=!1,w=!1,x=e.3x(!0,{},p,i),G={1h:2(){m.28(2(){4 i=e(3);1==x.W?(a=x.O,l=0,c=l,q.1h(l)):(a=e(3).1L(),a.11(2(t){B(1==x.1g&&i.13("1g")){4 n=i.13("1g");a=e(\'[13-1g="\'+n+\'"]\').1L()}12 a=i.1L();t.1i(),t.1x(),l=a.15(3),c=l,q.1h(l)}))})}},q={1h:2(){3.2p(),3.2n()},2p:2(){3.2l(),3.2k(),3.2i()},2n:2(){3.2h(),3.2g(),3.2f(),3.1p(),3.2d(),3.2c(),3.2b(),3.k(x.15?x.15:l),3.2K(),3.2Q(),26(2(){t.8("3u")},2Z)},2l:2(){e("1c").R(C).8("7"),n=e("#7-2F"),t=e("#7-2C"),s=t.D("#7-25");4 i="";B(1==x.W)J(4 l=0;l<x.O.9;l++)i+=\'<6 j="7-k"></6>\';12 a.28(2(){i+=\'<6 j="7-k"></6>\'});s.R(i),d=t.D(".7-k")},2i:2(){4 i=3;x.3m&&e(".7-k").10("11",2(a){4j.3t(a.2e),e(a.2e).4i(".7-k")&&i.1D()}),e("#7-1o").T("11 18",2(){i.1D()})},2k:2(){4 i=2(){v=e(1a).1C()};e(1a).T("2j.7",i())},H:2(){4 e=2(){J(4 e=["1Z","3w","3y","3z","3G","49"],i=2x.4g,a=0;a<e.9;a++)B(e[a]1T i.2m)1j!0};1j x.3o&&e()?!0:!1},2Q:2(){4 i=3;B(y){4 a={},l={};e("1c").10("2o.7",2(e){l=e.1y.1G[0],a.1e=e.1y.1G[0].1e,a.2q=e.1y.1G[0].2q}),e("1c").10("2r.7",2(e){4 i=e.1y;l=i.1G[0],e.1i()}),e("1c").10("18.7",2(){4 e=l.1e-a.1e,t=x.30;e>=t?(i.I(),Q(f)):-t>=e&&(i.F(),Q(f))})}},2K:2(){4 i,a,l=3;e(".7").T("2t",2(e){e.1x(),e.1i(),i=e.1e}),e(".7").T("2u",2(e){e.1x(),e.1i(),a=e.1e,a-i>20?l.I():i-a>20&&l.F()})},2v:2(e){4 i=e.1l(/\\/\\/(?:1s\\.)?2w(?:\\.1I|1I\\.17)\\/(?:2z\\?v=|1O\\/)?([a-2A-2B\\-]+)/i),a=e.1l(/\\/\\/(?:1s\\.)?24.17\\/([0-2D-z\\-2E]+)/i);1j i||a?!0:2y 0},23:2(e,i){4 a=e.1l(/\\/\\/(?:1s\\.)?2w(?:\\.1I|1I\\.17)\\/(?:2z\\?v=|1O\\/)?([a-2A-2B\\-]+)/i),l=e.1l(/\\/\\/(?:1s\\.)?24.17\\/([0-2D-z\\-2E]+)/i),t="",n="";1j a?(n=x.1u===!0&&g===!1?"?2G=1&1g=0&2H=2I":"?2H=2I",t=\'<1f K="1E\'+i+\'" 1C="2J" 29="2L" V="//1s.3A.17/1O/\'+a[1]+n+\'" 2N="0" 3E></1f>\'):l&&(n=x.1u===!0&&g===!1?"2G=1&1U;":"",t=\'<1f K="1E\'+i+\'" 1C="2J" 29="2L"  V="3I://3J.24.17/1E/\'+l[1]+"?"+n+"3K=0&1U;3R=0&1U;3T="+x.2Y+\'" 2N="0" 3U 3X 3Y></1f>\'),\'<6 j="3Z" 2m="43-1C:\'+x.2X+\'44 !46;"><6 j="1E">\'+t+"</6></6>"},P:2(e,i){{4 l,t=3;a.9-e}B(x.L>a.9&&(x.L=a.9),l=x.1P===!0&&v<=x.33?1==x.W?x.O[e].1P:a.5(e).U("13-4h-V"):1==x.W?x.O[e].V:a.5(e).U("13-V"),t.2v(l)){B(d.5(e).M("1B")||(i===!1&&g===!0&&0===x.L?26(2(){d.5(e).1F(t.23(l,e))},x.X):d.5(e).1F(t.23(l,e)),d.5(e).8("1B"),x.1t&&x.1u===!0&&Q(f)),i===!1){4 n=!1;B(d.5(e).D("1f")[0].2U&&(n=!0),n){J(4 s=e,o=0;o<=x.L;o++)t.P(s+o,!0);J(4 r=0;r<=x.L;r++)t.P(s-r,!0)}12 d.5(e).D("1f").10("2V 2W",2(){J(4 i=e,l=0;l<=x.L&&!(l>=a.9-e);l++)t.P(i+l,!0);J(4 n=0;n<=x.L;n++)t.P(i-n,!0)})}}12 B(d.5(e).M("1B")||(d.5(e).1F(\'<1b V="\'+l+\'" />\'),d.5(e).8("1B")),i===!1){4 n=!1;B(d.5(e).D("1b")[0].2U&&(n=!0),n){J(4 s=e,o=0;o<=x.L&&!(o>=a.9-e);o++)t.P(s+o,!0);J(4 r=0;r<=x.L&&!(0>s-r);r++)t.P(s-r,!0)}12 d.5(e).D("1b").10("2V 2W",2(){J(4 i=e,l=0;l<=x.L&&!(l>=a.9-e);l++)t.P(i+l,!0);J(4 n=0;n<=x.L&&!(0>i-n);n++)t.P(i-n,!0)})}},2g:2(){B(x.1J===!0){4 e,i=!1;J(e=0;e<a.9;e++)B(i=1==x.W?x.O[e].1J:a.5(e).U("13-1X"),("1A"==1z i||1q==i)&&(i="31 "+e),x.3e===!0){4 l=1q;l=1==x.W?x.O[e].32:a.5(e).U("13-32"),l="1A"!=1z l&&""!==l?l:"#",d.5(e).R(\'<6 j="1v 1Q"><a 3D="\'+l+\'" j="1X">\'+i+"</a></6>")}12 d.5(e).R(\'<6 j="1v 1Q"><E j="1X">\'+i+"</E></6>")}},2f:2(){B(x.1d===!0){4 e,i=!1;J(e=0;e<a.9;e++)i=1==x.W?x.O[e].1d:a.5(e).U("13-1d"),("1A"==1z i||1q==i)&&(i="31 "+e),x.1J===!1?d.5(e).R(\'<6 j="1v 1Q"><E j="1d">\'+i+"</E></6>"):d.5(e).D(".1v").R(\'<E j="1d">\'+i+"</E>")}},1p:2(){B(x.1p===!0){4 i=e("#7-25 > 6").9;t.R("<6 K=\'3F\'><E K=\'35\'></E> / <E K=\'3H\'>"+i+"</E></6>")}},2c:2(){B(x.Y===!0&&a.9>1){4 i=3;t.R(\'<6 j="36"><6 j="3a"><E j="1o 3b"><i j="3L-3M-3N-16" 3O-3P="3Q"></i></E></6><6 j="3c"></6></6>\'),h=t.D(".36"),o.3S(\'<a j="3d"></a>\'),t.D(".3d").T("11 18",2(){h.8("N"),i.H()&&"k"===x.Z&&(d.5(l).1R().A("F").8("I"),d.5(l).22().A("I").8("F"))}),t.D(".1o").T("11 18",2(){h.A("N")});4 n,s=t.D(".3a"),r=t.D(".3c"),c="";B(1==x.W)J(4 v=0;v<x.O.9;v++)n=x.O[v].1w,c+=\'<6 j="1w"><1b V="\'+n+\'" /></6>\';12 a.28(2(){n=x.1n===!1||"1A"==1z e(3).U(x.1n)||1q==e(3).U(x.1n)?e(3).D("1b").U("V"):e(3).U(x.1n),c+=\'<6 j="1w"><1b V="\'+n+\'" /></6>\'});r.R(c),u=r.D(".1w"),u.T("11 18",2(){b=!0;4 a=e(3).15();u.A("1K"),e(3).8("1K"),i.k(a),Q(f)}),s.1F(\'<E j="3b 41">\'+x.3g.3f+" ("+u.9+")</E>")}},2d:2(){4 e=3;x.1M===!0&&a.9>1&&(t.R(\'<6 K="7-42"><a K="7-3i"></a><a K="7-3j"></a></6>\'),o=t.D("#7-3i"),r=t.D("#7-3j"),o.T("11",2(){e.I(),Q(f)}),r.T("11",2(){e.F(),Q(f)}))},2h:2(){4 e=3;x.1t===!0&&(f=45(2(){l=l+1<a.9?l:-1,l++,e.k(l)},x.3l))},2b:2(){4 i=3;e(1a).T("3k.7",2(e){e.1i(),e.1x(),37===e.1m&&(i.I(),Q(f)),38===e.1m&&x.Y===!0?h.M("N")||(i.H()&&"k"===x.Z&&(d.5(l).1R().A("F").8("I"),d.5(l).22().A("I").8("F")),h.8("N")):39===e.1m&&(i.F(),Q(f)),40===e.1m&&x.Y===!0?h.M("N")&&h.A("N"):x.3h===!0&&27===e.1m&&(x.Y===!0&&h.M("N")?h.A("N"):i.1D())})},F:2(){4 e=3;l=d.15(d.5(c)),l+1<a.9?(l++,e.k(l)):x.1k?(l=0,e.k(l)):"1S"===x.Z&&x.Y===!0&&a.9>1&&h.8("N"),x.2a.14(3)},I:2(){4 e=3;l=d.15(d.5(c)),l>0?(l--,e.k(l)):x.1k?(l=a.9-1,e.k(l)):"1S"===x.Z&&x.Y===!0&&a.9>1&&h.8("N"),x.2P.14(3)},k:2(i){B(3.P(i,!1),g&&(s.M("10")||s.8("10"),3.H()&&""!==x.X&&(s.M("X")||s.8("X"),w===!1&&(s.1W("1Z-4b",x.X+"4c"),w=!0)),3.H()&&""!==x.19&&(s.M("1N")||s.8("1N"),S===!1&&(s.1W("1Z-1N-2",x.19),S=!0)),x.2S.14(3)),"k"===x.Z){4 l=1q!=2s.4e.1l(/4f/i);!3.H()||s.M("k")||l?3.H()&&!s.M("3n")&&l&&s.8("3n"):s.8("k"),3.H()||g?!3.H()&&g&&s.1Y({3p:1H*-i+"%"},x.X,x.19):s.1W({3p:1H*-i+"%"})}12"1S"===x.Z&&(3.H()&&!s.M("21")?s.8("21"):3.H()||s.M("1Y")||s.8("1Y"),3.H()||g?!3.H()&&g&&(d.5(c).3q(x.X,x.19),d.5(i).3r(x.X,x.19)):(d.3q(1H),d.5(i).3r(1H)));B(i+1>=a.9&&x.1t&&x.1k===!1&&Q(f),d.5(c).A("3s"),d.5(i).8("3s"),3.H()&&"k"===x.Z&&(b===!1?(e(".I").A("I"),e(".F").A("F"),d.5(i-1).8("I"),d.5(i+1).8("F")):(d.5(i).1R().A("F").8("I"),d.5(i).22().A("I").8("F"))),x.Y===!0&&a.9>1&&(u.A("1K"),u.5(i).8("1K")),x.1M&&x.34&&x.1k===!1&&a.9>1){4 t=a.9;t=4o(t)-1,0===i?(o.8("1r"),r.A("1r")):i===t?(o.A("1r"),r.8("1r")):o.4q(r).A("1r")}c=i,g===!1?x.2T.14(3):x.2R.14(3),g=!0,b=!1,x.1p&&e("#35").4r(i+1)},1D:2(){x.2O.14(3),g=!1,S=!1,w=!1,b=!1,Q(f),e(".7").1V("2t 2u"),e("1c").1V("2o.7 2r.7 18.7"),e(1a).1V("2j.7 3k.7"),t.8("21"),26(2(){n.4t(),e("1c").A("7")},4u),x.2M.14(3)}};1j G.1h(),3}}(4v);',62,280,'||function|this|var|eq|div|lightGallery|addClass|length||||||||||class|slide||||||||||||||||removeClass|if||find|span|nextSlide||doCss|prevSlide|for|id|preload|hasClass|open|dynamicEl|loadContent|clearInterval|append||bind|attr|src|dynamic|speed|thumbnail|mode|on|click|else|data|call|index||com|touchend|easing|window|img|body|desc|pageX|iframe|rel|init|preventDefault|return|loop|match|keyCode|exThumbImage|close|counter|null|disabled|www|auto|videoAutoplay|info|thumb|stopPropagation|originalEvent|typeof|undefined|loaded|width|destroy|video|prepend|targetTouches|100|be|caption|active|children|controls|timing|embed|mobileSrc|group|prevAll|fade|in|amp|off|css|title|animate|transition||fadeM|nextAll|loadVideo|vimeo|slider|setTimeout||each|height|onSlideNext|keyPress|buildThumbnail|slideTo|target|addDesc|addCaption|autoStart|closeSlide|resize|getWidth|structure|style|build|touchstart|start|pageY|touchmove|navigator|mousedown|mouseup|isVideo|youtu|document|void|watch|z0|9_|Gallery|9a|_|outer|autoplay|wmode|opaque|560|touch|315|onCloseAfter|frameborder|onBeforeClose|onSlidePrev|enableTouch|onSlideAfter|onSlideBefore|onOpen|complete|load|error|videoMaxWidth|vimeoColor|50|swipeThreshold|image|link|mobileSrcMaxWidth|hideControlOnEnd|lightGallery_counter_current|thumb_cont||||thumb_info|ib|thumb_inner|cLthumb|captionLink|allPhotos|lang|escKey|prev|next|keyup|pause|closable|useLeft|useCSS|left|fadeOut|fadeIn|current|log|opacity|CCCCCC|MozTransition|extend|WebkitTransition|OTransition|youtube|640|msMaxTouchPoints|href|allowfullscreen|lightGallery_counter|msTransition|lightGallery_counter_all|http|player|byline|bUi|iCn|rMv|aria|hidden|true|portrait|after|color|webkitAllowFullScreen|photos|All|mozallowfullscreen|allowFullScreen|video_cont||count|action|max|px|setInterval|important|4e3|onmsgesturechange|KhtmlTransition|1e3|duration|ms|ease|userAgent|iPad|documentElement|responsive|is|console|fn|855|ontouchstart|createTouch|parseInt|strict|add|text|use|remove|500|jQuery'.split('|'),0,{}))