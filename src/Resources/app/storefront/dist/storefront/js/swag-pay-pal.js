/*! For license information please see swag-pay-pal.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([["swag-pay-pal"],{"5eYc":function(t,e,r){"use strict";(function(t){r.d(e,"a",(function(){return p}));var n=r("gHbT");function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function c(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var u,d,f,p=function(e){function r(){return i(this,r),c(this,s(r).apply(this,arguments))}var o,u,d;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(r,e),o=r,(u=[{key:"init",value:function(){var e=this;if(!1!=(!0===n.a.getDataAttribute(this.el,this.options.isConfirmPageKey,!1))){var r=n.a.querySelector(document,"body");t(r).on("shown.bs.modal",(function(t){t.target.classList.contains("confirm-payment-modal")&&e.createInstallmentBanner()}))}else this.createInstallmentBanner()}},{key:"createInstallmentBanner",value:function(){var t=this;this.createScript((function(e){e.Messages(t.getBannerConfig()).render(t.el)}))}},{key:"getBannerConfig",value:function(){return{amount:this.options.amount,currency:this.options.currency,style:{layout:this.options.layout,color:this.options.color,ratio:this.options.ratio,logo:{type:this.options.logoType},text:{color:this.options.textColor}}}}}])&&a(o.prototype,u),d&&a(o,d),r}(r("LkB+").a);f={clientId:"",amount:0,currency:"EUR",layout:"text",color:"blue",ratio:"8x1",logoType:"primary",textColor:"black",isConfirmPageKey:"swag-paypal-installment-banner-is-confirm"},(d="options")in(u=p)?Object.defineProperty(u,d,{value:f,enumerable:!0,configurable:!0,writable:!0}):u[d]=f}).call(this,r("UoTJ"))},CiWO:function(t,e,r){"use strict";function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.d(e,"a",(function(){return o}));var o=function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),n(this,"loadingScript",!1),n(this,"paypal",null),n(this,"callbacks",[])}},"LkB+":function(t,e,r){"use strict";var n=r("FGIj"),o=r("gHbT");function i(t){var e="https://www.paypal.com/sdk/js";t.sdkBaseURL&&(e=t.sdkBaseURL,delete t.sdkBaseURL);var r=function(t,e){var r="",n="";Array.isArray(t)?t.length>1?(r="*",n=t.toString()):r=t.toString():"string"==typeof t&&t.length>0?r=t:"string"==typeof e&&e.length>0&&(r="*",n=e);return{"merchant-id":r,"data-merchant-id":n}}(t["merchant-id"],t["data-merchant-id"]),n=Object.assign({},t,r),o=Object.keys(n).filter((function(t){return void 0!==n[t]&&null!==n[t]&&""!==n[t]})).reduce((function(t,e){var r=n[e].toString();return"data-"===e.substring(0,5)?t.dataAttributes[e]=r:t.queryParams[e]=r,t}),{queryParams:{},dataAttributes:{}}),i=o.queryParams,c=o.dataAttributes;return{url:e+"?"+a(i),dataAttributes:c}}function a(t){var e="";return Object.keys(t).forEach((function(r){0!==e.length&&(e+="&"),e+=r+"="+t[r]})),e}function c(t,e){void 0===e&&(e={});var r=document.createElement("script");return r.src=t,Object.keys(e).forEach((function(t){r.setAttribute(t,e[t]),"data-csp-nonce"===t&&r.setAttribute("nonce",e["data-csp-nonce"])})),r}function s(t,e){if(void 0===e&&(e=l()),d(t,e),"undefined"==typeof window)return e.resolve(null);var r=i(t),n=r.url,o=r.dataAttributes,a=o["data-namespace"]||"paypal",s=u(a);return function(t,e){var r=document.querySelector('script[src="'+t+'"]');if(null===r)return null;var n=c(t,e),o=Object.assign({},r.dataset);if(delete o.uidAuto,Object.keys(o).length!==Object.keys(n.dataset).length)return null;var i=!0;return Object.keys(o).forEach((function(t){o[t]!==n.dataset[t]&&(i=!1)})),i?r:null}(n,o)&&s?e.resolve(s):function(t,e){void 0===e&&(e=l());d(t,e);var r=t.url,n=t.attributes;if("string"!=typeof r||0===r.length)throw new Error("Invalid url.");if(void 0!==n&&"object"!=typeof n)throw new Error("Expected attributes to be an object.");return new e((function(t,e){if("undefined"==typeof window)return t();!function(t){var e=t.url,r=t.attributes,n=t.onSuccess,o=t.onError,i=c(e,r);i.onerror=o,i.onload=n,document.head.insertBefore(i,document.head.firstElementChild)}({url:r,attributes:n,onSuccess:function(){return t()},onError:function(){return e(new Error('The script "'+r+'" failed to load.'))}})}))}({url:n,attributes:o},e).then((function(){var t=u(a);if(t)return t;throw new Error("The window."+a+" global variable is not available.")}))}function l(){if("undefined"==typeof Promise)throw new Error("Promise is undefined. To resolve the issue, use a Promise polyfill.");return Promise}function u(t){return window[t]}function d(t,e){if("object"!=typeof t||null===t)throw new Error("Expected an options object.");if(void 0!==e&&"function"!=typeof e)throw new Error("Expected PromisePonyfill to be a function.")}var f=r("CiWO");function p(t){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function y(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function h(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function b(t,e){return!e||"object"!==p(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function m(t){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function v(t,e){return(v=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}r.d(e,"a",(function(){return P}));var g,O,w,S=["card","credit","bancontact","blik","eps","giropay","ideal","mybank","p24","sepa","sofort","venmo"],P=function(t){function e(){return y(this,e),b(this,m(e).apply(this,arguments))}var r,n,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&v(t,e)}(e,t),r=e,(n=[{key:"createScript",value:function(t){null===this.constructor.scriptLoading.paypal?(this.constructor.scriptLoading.callbacks.push(t),this.constructor.scriptLoading.loadingScript||(this.constructor.scriptLoading.loadingScript=!0,s(this.getScriptOptions()).then(this.callCallbacks.bind(this)))):t.call(this,this.constructor.scriptLoading.paypal)}},{key:"callCallbacks",value:function(){var t=this;null===this.constructor.scriptLoading.paypal&&(this.constructor.scriptLoading.paypal=window.paypal,delete window.paypal),this.constructor.scriptLoading.callbacks.forEach((function(e){e.call(t,t.constructor.scriptLoading.paypal)}))}},{key:"getScriptOptions",value:function(){var t={components:"buttons,marks,messages,hosted-fields","client-id":this.options.clientId,commit:!!this.options.commit,locale:this.options.languageIso,currency:this.options.currency,intent:this.options.intent};return!1===this.options.useAlternativePaymentMethods?t["disable-funding"]=S.join(","):Array.isArray(this.options.disabledAlternativePaymentMethods)&&(t["disable-funding"]=this.options.disabledAlternativePaymentMethods.join(",")),!0===this.options.showPayLater&&(t["enable-funding"]="paylater"),this.options.clientToken&&(t["data-client-token"]=this.options.clientToken),t}},{key:"createError",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=this.options.addErrorUrl,i={_csrf_token:o.a.getDataAttribute(this.el,"data-swag-pay-pal-add-error-token"),error:t,cancel:e};this._client.post(n,JSON.stringify(i),(function(){r?window.location=r:(window.onbeforeunload=function(){window.scrollTo(0,0)},window.location.reload())}))}}])&&h(r.prototype,n),i&&h(r,i),e}(n.a);g=P,O="scriptLoading",w=new f.a,O in g?Object.defineProperty(g,O,{value:w,enumerable:!0,configurable:!0,writable:!0}):g[O]=w},dkCy:function(t,e,r){"use strict";r.r(e);var n=r("p4AR"),o=r("gHbT"),i=r("u0Tz"),a=r("LkB+"),c=r("CiWO");function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function d(t,e){return!e||"object"!==s(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function y(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var h=function(t){function e(){return l(this,e),d(this,f(e).apply(this,arguments))}var r,a,c;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}(e,t),r=e,(a=[{key:"init",value:function(){this._client=new n.a,this.createButton()}},{key:"createButton",value:function(){var t=this;this.createScript((function(e){t.renderButton(e)}))}},{key:"renderButton",value:function(t){return t.Buttons(this.getButtonConfig()).render(this.el)}},{key:"getBuyButtonState",value:function(){if(!this.options.addProductToCart)return{element:null,disabled:!1};var t=o.a.querySelector(this.el.closest("form"),this.options.buyButtonSelector);return{element:t,disabled:t.disabled}}},{key:"observeBuyButton",value:function(t,e,r){var n=this,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{attributes:!0},i=function(t){var o=!0,i=!1,a=void 0;try{for(var c,s=t[Symbol.iterator]();!(o=(c=s.next()).done);o=!0)if("disabled"===c.value.attributeName){if(n.getBuyButtonState().disabled)return void r();e()}}catch(t){i=!0,a=t}finally{try{o||null==s.return||s.return()}finally{if(i)throw a}}},a=new MutationObserver(i);return a.observe(t,o),a}},{key:"getButtonConfig",value:function(){var t=this,e=this.el,r=this.getBuyButtonState(),n=r.element,o=r.disabled;return{onInit:function(r,i){if(t.options.addProductToCart){var a=function(){i.enable(),e.classList.remove(t.options.disabledClass)},c=function(){i.disable(),e.classList.add(t.options.disabledClass)};t.observeBuyButton(n,a,c),o?c():a()}},style:{size:this.options.buttonSize,shape:this.options.buttonShape,color:this.options.buttonColor,tagline:this.options.tagline,layout:"horizontal",label:"checkout",height:40},createOrder:this.createOrder.bind(this),onApprove:this.onApprove.bind(this),onCancel:this.onCancel.bind(this),onError:this.onError.bind(this)}}},{key:"createOrder",value:function(){var t=this,e={paymentMethodId:this.options.payPalPaymentMethodId};return new Promise((function(r,n){t._client.patch(t.options.contextSwitchUrl,JSON.stringify(e),(function(e,o){return o.status>=400&&n(e),Promise.resolve().then((function(){return t.options.addProductToCart?t.addProductToCart():Promise.resolve()})).then((function(){return t._createOrder()})).then((function(t){r(t)})).catch((function(t){n(t)}))}))}))}},{key:"_createOrder",value:function(){var t=this;return new Promise((function(e,r){t._client.post(t.options.createOrderUrl,new FormData,(function(t,n){n.status>=400&&r(t);try{var o=JSON.parse(t);e(o.token)}catch(t){r(t)}}))}))}},{key:"addProductToCart",value:function(){var t=this,e=this.el.closest("form"),r=o.a.querySelector(e,this.options.buyButtonSelector),n=window.PluginManager.getPluginInstanceFromElement(e,"AddToCart");return new Promise((function(e){t._client.delete(t.options.deleteCartUrl,null,(function(){n.$emitter.subscribe("openOffCanvasCart",(function(){e()})),r.click()}))}))}},{key:"onApprove",value:function(t,e){var r=this,n={token:t.orderID};i.a.create(document.body),this._client.post(this.options.prepareCheckoutUrl,JSON.stringify(n),(function(t,n){return n.status<400?e.redirect(r.options.checkoutConfirmUrl):r.createError(t,!1,r.options.cancelRedirectUrl)}))}},{key:"onError",value:function(t){this.createError(t)}},{key:"onCancel",value:function(t){this.createError(t,!0,this.options.cancelRedirectUrl)}}])&&u(r.prototype,a),c&&u(r,c),e}(a.a);y(h,"scriptLoading",new c.a),y(h,"options",{disabledClass:"is-disabled",buyButtonSelector:".btn-buy",buttonColor:"gold",buttonShape:"rect",buttonSize:"small",languageIso:"en_GB",clientId:"",currency:"EUR",intent:"capture",commit:!1,tagline:!1,addProductToCart:!1,contextSwitchUrl:"",payPalPaymentMethodId:"",createOrderUrl:"",deleteCartUrl:"",prepareCheckoutUrl:"",checkoutConfirmUrl:"",addErrorUrl:"",cancelRedirectUrl:""});var b=r("2Y4b"),m=r("3xtq");function v(t){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function g(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function O(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function w(t,e){return!e||"object"!==v(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function S(t){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function P(t,e){return(P=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var k,C,j,E=function(t){function e(){return g(this,e),w(this,S(e).apply(this,arguments))}var r,i,a;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&P(t,e)}(e,t),r=e,(i=[{key:"init",value:function(){this._client=new n.a,this.createButton()}},{key:"createButton",value:function(){var t=this;this.createScript((function(e){t.renderButton(e)}))}},{key:"renderButton",value:function(t){return this.confirmOrderForm=o.a.querySelector(document,this.options.confirmOrderFormSelector),o.a.querySelector(this.confirmOrderForm,this.options.confirmOrderButtonSelector).classList.add("d-none"),t.Buttons(this.getButtonConfig()).render(this.el)}},{key:"getButtonConfig",value:function(){return{style:{size:this.options.buttonSize,shape:this.options.buttonShape,color:this.options.buttonColor,label:"checkout"},createOrder:this.createOrder.bind(this),onApprove:this.onApprove.bind(this),onCancel:this.onCancel.bind(this),onClick:this.onClick.bind(this),onError:this.onError.bind(this)}}},{key:"createOrder",value:function(){var t=this;if(!this.confirmOrderForm.checkValidity())throw new Error("Checkout form not valid");var e=b.a.serialize(this.confirmOrderForm);e.set("product","spb");var r=this.options.orderId;return null!==r&&e.set("orderId",r),new Promise((function(r,n){t._client.post(t.options.createOrderUrl,e,(function(t,e){e.status>=400&&n(t);try{var o=JSON.parse(t);r(o.token)}catch(t){n(t)}}))}))}},{key:"onApprove",value:function(t){m.a.create();var e=document.createElement("input");e.setAttribute("type","hidden"),e.setAttribute("name","paypalOrderId"),e.setAttribute("value",t.orderID),this.confirmOrderForm.appendChild(e),this.confirmOrderForm.submit()}},{key:"onCancel",value:function(){this.createError(null,!0)}},{key:"onClick",value:function(t,e){return this.confirmOrderForm.checkValidity()?e.resolve():e.reject()}},{key:"onError",value:function(t){this.createError(t)}}])&&O(r.prototype,i),a&&O(r,a),e}(a.a);function F(t){return(F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function B(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function I(t,e){return!e||"object"!==F(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function A(t){return(A=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function L(t,e){return(L=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function U(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}j={buttonColor:"gold",buttonShape:"rect",buttonSize:"small",languageIso:"en_GB",clientId:"",currency:"EUR",intent:"capture",commit:!0,useAlternativePaymentMethods:!0,disabledAlternativePaymentMethods:[],showPayLater:!0,createOrderUrl:"",checkoutConfirmUrl:"",orderId:null,accountOrderEditUrl:"",checkedPaymentMethodSelector:"input.payment-method-input[checked=checked]",confirmOrderFormSelector:"#confirmOrderForm",confirmOrderButtonSelector:'button[type="submit"]',addErrorUrl:""},(C="options")in(k=E)?Object.defineProperty(k,C,{value:j,enumerable:!0,configurable:!0,writable:!0}):k[C]=j;var T=function(t){function e(){return _(this,e),I(this,A(e).apply(this,arguments))}var r,n,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&L(t,e)}(e,t),r=e,(n=[{key:"init",value:function(){this.createMarks()}},{key:"createMarks",value:function(){var t=this;this.createScript((function(e){e.Marks().render(t.el)}))}}])&&B(r.prototype,n),o&&B(r,o),e}(a.a);function x(t){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function R(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function N(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function q(t,e){return!e||"object"!==x(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function z(t){return(z=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function D(t,e){return(D=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}U(T,"loadingScript",!1),U(T,"options",{clientId:"",languageIso:"en_GB",currency:"EUR",intent:"capture",commit:!0,useAlternativePaymentMethods:!0,disabledAlternativePaymentMethods:[],showPayLater:!0});var M=function(t){function e(){return R(this,e),q(this,z(e).apply(this,arguments))}var r,a,c;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&D(t,e)}(e,t),r=e,(a=[{key:"init",value:function(){o.a.querySelector(document,"#confirmOrderForm").addEventListener("submit",this.onConfirmCheckout.bind(this)),this.createPaymentWall()}},{key:"createPaymentWall",value:function(){this.paypal=window.PAYPAL,this.paypal.apps.PPP({placeholder:this.options.placeholder,approvalUrl:this.options.approvalUrl,mode:this.options.mode,country:this.options.customerCountryIso,buttonLocation:this.options.buttonLocation,language:this.options.customerSelectedLanguage,useraction:this.options.userAction,surcharging:this.options.surcharging,showLoadingIndicator:this.options.showLoadingIndicator,showPuiOnSandbox:this.options.showPuiOnSandbox,onLoad:this.onPaymentSelectionLoad})}},{key:"onConfirmCheckout",value:function(t){var e=this;t.preventDefault();var r=t.target;if(r.checkValidity()){this._client=new n.a;var o=b.a.serialize(r);i.a.create(document.body);var a=this.options.orderId;this._client.patch(this.options.contextSwitchUrl,JSON.stringify({languageId:this.options.languageId}),(function(){if(null!==a)return o.set("orderId",a),void e._client.post(e.options.setPaymentRouteUrl,o,e.afterSetPayment.bind(e));e._client.post(e.options.checkoutOrderUrl,o,e.afterCreateOrder.bind(e))}))}}},{key:"afterCreateOrder",value:function(t){var e={orderId:JSON.parse(t).id,paypalPaymentId:this.options.paypalPaymentId,paypalToken:this.options.paypalToken};e[this.options.isEnabledParameterName]=!0,this._client.post(this.options.handlePaymentUrl,JSON.stringify(e),this.afterPayOrder.bind(this))}},{key:"afterSetPayment",value:function(t){!0===JSON.parse(t).success&&this.afterCreateOrder(JSON.stringify({id:this.options.orderId}))}},{key:"afterPayOrder",value:function(t){"plusPatched"===JSON.parse(t).redirectUrl&&this.paypal.apps.PPP.doCheckout()}},{key:"onPaymentSelectionLoad",value:function(){document.$emitter.publish("paypalPlusSelectionLoaded")}}])&&N(r.prototype,a),c&&N(r,c),e}(r("FGIj").a);!function(t,e,r){e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r}(M,"options",{placeholder:"ppplus",approvalUrl:"",paypalPaymentId:"",paypalToken:"",customerCountryIso:"",mode:"live",buttonLocation:"outside",preSelection:"paypal",userAction:"commit",customerSelectedLanguage:"en_GB",surcharging:!1,showLoadingIndicator:!0,showPuiOnSandbox:!0,checkoutOrderUrl:"",handlePaymentUrl:"",setPaymentRouteUrl:"",contextSwitchUrl:"",isEnabledParameterName:"isPayPalPlusCheckout",languageId:null,orderId:null});var J=r("5eYc"),V=r("ERap"),G=r("477Q");function H(t){return(H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function W(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function Y(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function K(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function $(t,e){return!e||"object"!==H(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function Q(t){return(Q=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function X(t,e){return(X=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function Z(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var tt=function(t){function e(){return Y(this,e),$(this,Q(e).apply(this,arguments))}var r,i,a;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&X(t,e)}(e,t),r=e,(i=[{key:"init",value:function(){var t=this;this._client=new n.a,this.createScript((function(e){t.render(e)}))}},{key:"render",value:function(t){if(this.confirmOrderForm=o.a.querySelector(document,this.options.confirmOrderFormSelector),this.cardFieldForm=o.a.querySelector(document,this.options.cardFieldFormSelector),t.HostedFields.isEligible())this.cardFieldForm.classList.remove("d-none"),t.HostedFields.render(this.getFieldConfig()).then(this.bindFieldActions.bind(this));else{o.a.querySelector(this.confirmOrderForm,this.options.confirmOrderButtonSelector).classList.add("d-none");var e=t.Buttons(this.getButtonConfig(t.FUNDING.CARD));e.isEligible()||this.createError("Neither hosted fields nor standalone buttons are eligible"),e.render(this.el)}}},{key:"getFieldConfig",value:function(){return{createOrder:this.createOrder.bind(this,"acdc"),styles:this.options.cardFieldStyleConfig,fields:{number:{selector:this.options.cardNumberFieldSelector,placeholder:o.a.querySelector(this.cardFieldForm,this.options.cardNumberFieldSelector).dataset.placeholder},cvv:{selector:this.options.cvvFieldSelector,placeholder:o.a.querySelector(this.cardFieldForm,this.options.cvvFieldSelector).dataset.placeholder},expirationDate:{selector:this.options.expirationFieldSelector,placeholder:o.a.querySelector(this.cardFieldForm,this.options.expirationFieldSelector).dataset.placeholder}}}}},{key:"getButtonConfig",value:function(t){return{fundingSource:t,style:{size:this.options.buttonSize,shape:this.options.buttonShape,color:this.options.buttonColor,label:"checkout"},createOrder:this.createOrder.bind(this,"spb"),onApprove:this.onApprove.bind(this),onCancel:this.onCancel.bind(this),onClick:this.onClick.bind(this),onError:this.onError.bind(this)}}},{key:"bindFieldActions",value:function(t){var e=this;t.on("validityChange",(function(t){e.setFieldValidity(t.fields[t.emittedBy])}));var r=o.a.querySelectorAll(this.cardFieldForm,"input");V.a.iterate(r,(function(r){r.addEventListener("invalid",e.onFormFieldInvalid.bind(e,t))})),this.confirmOrderForm.addEventListener("submit",this.onFieldSubmit.bind(this,t))}},{key:"createOrder",value:function(t){var e=this,r=b.a.serialize(this.confirmOrderForm);r.set("product",t);var n=this.options.orderId;return null!==n&&r.set("orderId",n),new Promise((function(t,n){e._client.post(e.options.createOrderUrl,r,(function(e,r){r.status>=400&&n(e);try{var o=JSON.parse(e);t(o.token)}catch(t){n(t)}}))}))}},{key:"onFieldSubmit",value:function(t,e){var r=this;if(!b.a.serialize(this.confirmOrderForm).has("paypalOrderId")&&this.confirmOrderForm.checkValidity()){e.preventDefault(),e.stopPropagation();var n=t.getState(),i=Object.keys(n.fields).find((function(t){return!n.fields[t].isValid}));i||t.submit(this.buildCardholderData()).then(this.onApprove.bind(this)).catch(this.onError.bind(this)),new G.a(o.a.querySelector(this.confirmOrderForm,this.options.confirmOrderButtonSelector)).remove(),t.focus(i),window.scrollTo({top:this.getScrollOffset(n.fields[i].container),behavior:"smooth"}),Object.keys(n.fields).forEach((function(t){r.setFieldValidity(n.fields[t],!1)}))}}},{key:"onApprove",value:function(t){m.a.create();var e=document.createElement("input");e.setAttribute("type","hidden"),e.setAttribute("name","paypalOrderId"),e.setAttribute("value",t.hasOwnProperty("orderId")?t.orderId:t.orderID),this.confirmOrderForm.appendChild(e),this.confirmOrderForm.submit()}},{key:"onCancel",value:function(){this.createError(null,!0)}},{key:"onClick",value:function(t,e){return this.confirmOrderForm.checkValidity()?e.resolve():e.reject()}},{key:"onError",value:function(t){this.createError(t)}},{key:"getScrollOffset",value:function(t){var e=t.getBoundingClientRect().top+window.scrollY-this.options.scrollOffset,r=o.a.querySelector(document,this.options.fixedHeaderSelector,!1);return r&&(e-=r.getBoundingClientRect().height),e}},{key:"setFieldValidity",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t.container.classList.remove("is-valid","is-invalid"),t.isValid?t.container.classList.add("is-valid"):t.isPotentiallyValid&&e||t.container.classList.add("is-invalid")}},{key:"onFormFieldInvalid",value:function(t){var e=this;this.cardFieldForm.classList.add(this.options.validatedStyleClass);var r=t.getState();Object.keys(r.fields).forEach((function(t){e.setFieldValidity(r.fields[t],!1)}))}},{key:"buildCardholderData",value:function(){var t=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?W(Object(r),!0).forEach((function(e){Z(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):W(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},this.options.cardholderData),e=o.a.querySelector(this.cardFieldForm,this.options.cardholderFieldSelector).value,r=o.a.querySelector(this.cardFieldForm,this.options.zipFieldSelector).value;return e&&(t.cardholderName=e),r&&(t.billingAddress.postalCode=r),t}}])&&K(r.prototype,i),a&&K(r,a),e}(a.a);Z(tt,"options",{clientId:"",clientToken:"",currency:"EUR",intent:"capture",commit:!0,languageIso:"en_GB",buttonColor:"black",buttonShape:"rect",buttonSize:"small",createOrderUrl:"",confirmOrderFormSelector:"#confirmOrderForm",cardFieldFormSelector:"#swag-paypal-acdc-form",cardNumberFieldSelector:"#swag-paypal-acdc-form-cardnumber",expirationFieldSelector:"#swag-paypal-acdc-form-expiration",cvvFieldSelector:"#swag-paypal-acdc-form-cvv",cardholderFieldSelector:"#swag-paypal-acdc-form-cardholder",zipFieldSelector:"#swag-paypal-acdc-form-zip",confirmOrderButtonSelector:'button[type="submit"]',scrollOffset:15,fixedHeaderSelector:"header.fixed-top",validatedStyleClass:"was-validated",cardFieldStyleConfig:{input:{"font-family":'"Inter", sans-serif',"font-size":"0.875rem","font-weight":300,"letter-spacing":"0.02rem"},"input::placeholder":{color:"#c3c3c3",opacity:1}},cardholderData:{cardholderName:"",billingAddress:{streetAddress:"",extendedAddress:"",region:"",locality:"",postalCode:"",countryCodeAlpha2:""}}});var et=window.PluginManager;et.register("SwagPayPalExpressButton",h,"[data-swag-paypal-express-button]"),et.register("SwagPayPalSmartPaymentButtons",E,"[data-swag-paypal-smart-payment-buttons]"),et.register("SwagPaypalAcdcFields",tt,"[data-swag-paypal-acdc-fields]"),et.register("SwagPayPalMarks",T,"[data-swag-paypal-marks]"),et.register("SwagPayPalPlusPaymentWall",M,"[data-swag-paypal-payment-wall]"),et.register("SwagPayPalInstallmentBanner",J.a,"[data-swag-paypal-installment-banner]")}},[["dkCy","runtime","vendor-node","vendor-shared"]]]);