(function(){const f=document.createElement("link").relList;if(f&&f.supports&&f.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))s(h);new MutationObserver(h=>{for(const p of h)if(p.type==="childList")for(const b of p.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&s(b)}).observe(document,{childList:!0,subtree:!0});function d(h){const p={};return h.integrity&&(p.integrity=h.integrity),h.referrerPolicy&&(p.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?p.credentials="include":h.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function s(h){if(h.ep)return;h.ep=!0;const p=d(h);fetch(h.href,p)}})();function Xh(u){return u&&u.__esModule&&Object.prototype.hasOwnProperty.call(u,"default")?u.default:u}var zc={exports:{}},On={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _d;function Qh(){if(_d)return On;_d=1;var u=Symbol.for("react.transitional.element"),f=Symbol.for("react.fragment");function d(s,h,p){var b=null;if(p!==void 0&&(b=""+p),h.key!==void 0&&(b=""+h.key),"key"in h){p={};for(var C in h)C!=="key"&&(p[C]=h[C])}else p=h;return h=p.ref,{$$typeof:u,type:s,key:b,ref:h!==void 0?h:null,props:p}}return On.Fragment=f,On.jsx=d,On.jsxs=d,On}var Ud;function Vh(){return Ud||(Ud=1,zc.exports=Qh()),zc.exports}var c=Vh(),Tc={exports:{}},at={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hd;function Zh(){if(Hd)return at;Hd=1;var u=Symbol.for("react.transitional.element"),f=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),h=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),b=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),U=Symbol.iterator;function L(g){return g===null||typeof g!="object"?null:(g=U&&g[U]||g["@@iterator"],typeof g=="function"?g:null)}var V={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Z=Object.assign,P={};function k(g,B,q){this.props=g,this.context=B,this.refs=P,this.updater=q||V}k.prototype.isReactComponent={},k.prototype.setState=function(g,B){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,B,"setState")},k.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function W(){}W.prototype=k.prototype;function X(g,B,q){this.props=g,this.context=B,this.refs=P,this.updater=q||V}var lt=X.prototype=new W;lt.constructor=X,Z(lt,k.prototype),lt.isPureReactComponent=!0;var jt=Array.isArray,tt={H:null,A:null,T:null,S:null,V:null},Ht=Object.prototype.hasOwnProperty;function Ot(g,B,q,H,K,ot){return q=ot.ref,{$$typeof:u,type:g,key:B,ref:q!==void 0?q:null,props:ot}}function Yt(g,B){return Ot(g.type,B,void 0,void 0,void 0,g.props)}function Tt(g){return typeof g=="object"&&g!==null&&g.$$typeof===u}function ae(g){var B={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(q){return B[q]})}var he=/\/+/g;function Zt(g,B){return typeof g=="object"&&g!==null&&g.key!=null?ae(""+g.key):B.toString(36)}function El(){}function Al(g){switch(g.status){case"fulfilled":return g.value;case"rejected":throw g.reason;default:switch(typeof g.status=="string"?g.then(El,El):(g.status="pending",g.then(function(B){g.status==="pending"&&(g.status="fulfilled",g.value=B)},function(B){g.status==="pending"&&(g.status="rejected",g.reason=B)})),g.status){case"fulfilled":return g.value;case"rejected":throw g.reason}}throw g}function Kt(g,B,q,H,K){var ot=typeof g;(ot==="undefined"||ot==="boolean")&&(g=null);var et=!1;if(g===null)et=!0;else switch(ot){case"bigint":case"string":case"number":et=!0;break;case"object":switch(g.$$typeof){case u:case f:et=!0;break;case A:return et=g._init,Kt(et(g._payload),B,q,H,K)}}if(et)return K=K(g),et=H===""?"."+Zt(g,0):H,jt(K)?(q="",et!=null&&(q=et.replace(he,"$&/")+"/"),Kt(K,B,q,"",function(tl){return tl})):K!=null&&(Tt(K)&&(K=Yt(K,q+(K.key==null||g&&g.key===K.key?"":(""+K.key).replace(he,"$&/")+"/")+et)),B.push(K)),1;et=0;var ne=H===""?".":H+":";if(jt(g))for(var bt=0;bt<g.length;bt++)H=g[bt],ot=ne+Zt(H,bt),et+=Kt(H,B,q,ot,K);else if(bt=L(g),typeof bt=="function")for(g=bt.call(g),bt=0;!(H=g.next()).done;)H=H.value,ot=ne+Zt(H,bt++),et+=Kt(H,B,q,ot,K);else if(ot==="object"){if(typeof g.then=="function")return Kt(Al(g),B,q,H,K);throw B=String(g),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.")}return et}function M(g,B,q){if(g==null)return g;var H=[],K=0;return Kt(g,H,"","",function(ot){return B.call(q,ot,K++)}),H}function Y(g){if(g._status===-1){var B=g._result;B=B(),B.then(function(q){(g._status===0||g._status===-1)&&(g._status=1,g._result=q)},function(q){(g._status===0||g._status===-1)&&(g._status=2,g._result=q)}),g._status===-1&&(g._status=0,g._result=B)}if(g._status===1)return g._result.default;throw g._result}var F=typeof reportError=="function"?reportError:function(g){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var B=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof g=="object"&&g!==null&&typeof g.message=="string"?String(g.message):String(g),error:g});if(!window.dispatchEvent(B))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",g);return}console.error(g)};function vt(){}return at.Children={map:M,forEach:function(g,B,q){M(g,function(){B.apply(this,arguments)},q)},count:function(g){var B=0;return M(g,function(){B++}),B},toArray:function(g){return M(g,function(B){return B})||[]},only:function(g){if(!Tt(g))throw Error("React.Children.only expected to receive a single React element child.");return g}},at.Component=k,at.Fragment=d,at.Profiler=h,at.PureComponent=X,at.StrictMode=s,at.Suspense=S,at.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=tt,at.__COMPILER_RUNTIME={__proto__:null,c:function(g){return tt.H.useMemoCache(g)}},at.cache=function(g){return function(){return g.apply(null,arguments)}},at.cloneElement=function(g,B,q){if(g==null)throw Error("The argument must be a React element, but you passed "+g+".");var H=Z({},g.props),K=g.key,ot=void 0;if(B!=null)for(et in B.ref!==void 0&&(ot=void 0),B.key!==void 0&&(K=""+B.key),B)!Ht.call(B,et)||et==="key"||et==="__self"||et==="__source"||et==="ref"&&B.ref===void 0||(H[et]=B[et]);var et=arguments.length-2;if(et===1)H.children=q;else if(1<et){for(var ne=Array(et),bt=0;bt<et;bt++)ne[bt]=arguments[bt+2];H.children=ne}return Ot(g.type,K,void 0,void 0,ot,H)},at.createContext=function(g){return g={$$typeof:b,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null},g.Provider=g,g.Consumer={$$typeof:p,_context:g},g},at.createElement=function(g,B,q){var H,K={},ot=null;if(B!=null)for(H in B.key!==void 0&&(ot=""+B.key),B)Ht.call(B,H)&&H!=="key"&&H!=="__self"&&H!=="__source"&&(K[H]=B[H]);var et=arguments.length-2;if(et===1)K.children=q;else if(1<et){for(var ne=Array(et),bt=0;bt<et;bt++)ne[bt]=arguments[bt+2];K.children=ne}if(g&&g.defaultProps)for(H in et=g.defaultProps,et)K[H]===void 0&&(K[H]=et[H]);return Ot(g,ot,void 0,void 0,null,K)},at.createRef=function(){return{current:null}},at.forwardRef=function(g){return{$$typeof:C,render:g}},at.isValidElement=Tt,at.lazy=function(g){return{$$typeof:A,_payload:{_status:-1,_result:g},_init:Y}},at.memo=function(g,B){return{$$typeof:v,type:g,compare:B===void 0?null:B}},at.startTransition=function(g){var B=tt.T,q={};tt.T=q;try{var H=g(),K=tt.S;K!==null&&K(q,H),typeof H=="object"&&H!==null&&typeof H.then=="function"&&H.then(vt,F)}catch(ot){F(ot)}finally{tt.T=B}},at.unstable_useCacheRefresh=function(){return tt.H.useCacheRefresh()},at.use=function(g){return tt.H.use(g)},at.useActionState=function(g,B,q){return tt.H.useActionState(g,B,q)},at.useCallback=function(g,B){return tt.H.useCallback(g,B)},at.useContext=function(g){return tt.H.useContext(g)},at.useDebugValue=function(){},at.useDeferredValue=function(g,B){return tt.H.useDeferredValue(g,B)},at.useEffect=function(g,B,q){var H=tt.H;if(typeof q=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return H.useEffect(g,B)},at.useId=function(){return tt.H.useId()},at.useImperativeHandle=function(g,B,q){return tt.H.useImperativeHandle(g,B,q)},at.useInsertionEffect=function(g,B){return tt.H.useInsertionEffect(g,B)},at.useLayoutEffect=function(g,B){return tt.H.useLayoutEffect(g,B)},at.useMemo=function(g,B){return tt.H.useMemo(g,B)},at.useOptimistic=function(g,B){return tt.H.useOptimistic(g,B)},at.useReducer=function(g,B,q){return tt.H.useReducer(g,B,q)},at.useRef=function(g){return tt.H.useRef(g)},at.useState=function(g){return tt.H.useState(g)},at.useSyncExternalStore=function(g,B,q){return tt.H.useSyncExternalStore(g,B,q)},at.useTransition=function(){return tt.H.useTransition()},at.version="19.1.1",at}var Yd;function _c(){return Yd||(Yd=1,Tc.exports=Zh()),Tc.exports}var w=_c();const Vl=Xh(w);var Ec={exports:{}},Nn={},Ac={exports:{}},Cc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ld;function Kh(){return Ld||(Ld=1,(function(u){function f(M,Y){var F=M.length;M.push(Y);t:for(;0<F;){var vt=F-1>>>1,g=M[vt];if(0<h(g,Y))M[vt]=Y,M[F]=g,F=vt;else break t}}function d(M){return M.length===0?null:M[0]}function s(M){if(M.length===0)return null;var Y=M[0],F=M.pop();if(F!==Y){M[0]=F;t:for(var vt=0,g=M.length,B=g>>>1;vt<B;){var q=2*(vt+1)-1,H=M[q],K=q+1,ot=M[K];if(0>h(H,F))K<g&&0>h(ot,H)?(M[vt]=ot,M[K]=F,vt=K):(M[vt]=H,M[q]=F,vt=q);else if(K<g&&0>h(ot,F))M[vt]=ot,M[K]=F,vt=K;else break t}}return Y}function h(M,Y){var F=M.sortIndex-Y.sortIndex;return F!==0?F:M.id-Y.id}if(u.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;u.unstable_now=function(){return p.now()}}else{var b=Date,C=b.now();u.unstable_now=function(){return b.now()-C}}var S=[],v=[],A=1,U=null,L=3,V=!1,Z=!1,P=!1,k=!1,W=typeof setTimeout=="function"?setTimeout:null,X=typeof clearTimeout=="function"?clearTimeout:null,lt=typeof setImmediate<"u"?setImmediate:null;function jt(M){for(var Y=d(v);Y!==null;){if(Y.callback===null)s(v);else if(Y.startTime<=M)s(v),Y.sortIndex=Y.expirationTime,f(S,Y);else break;Y=d(v)}}function tt(M){if(P=!1,jt(M),!Z)if(d(S)!==null)Z=!0,Ht||(Ht=!0,Zt());else{var Y=d(v);Y!==null&&Kt(tt,Y.startTime-M)}}var Ht=!1,Ot=-1,Yt=5,Tt=-1;function ae(){return k?!0:!(u.unstable_now()-Tt<Yt)}function he(){if(k=!1,Ht){var M=u.unstable_now();Tt=M;var Y=!0;try{t:{Z=!1,P&&(P=!1,X(Ot),Ot=-1),V=!0;var F=L;try{e:{for(jt(M),U=d(S);U!==null&&!(U.expirationTime>M&&ae());){var vt=U.callback;if(typeof vt=="function"){U.callback=null,L=U.priorityLevel;var g=vt(U.expirationTime<=M);if(M=u.unstable_now(),typeof g=="function"){U.callback=g,jt(M),Y=!0;break e}U===d(S)&&s(S),jt(M)}else s(S);U=d(S)}if(U!==null)Y=!0;else{var B=d(v);B!==null&&Kt(tt,B.startTime-M),Y=!1}}break t}finally{U=null,L=F,V=!1}Y=void 0}}finally{Y?Zt():Ht=!1}}}var Zt;if(typeof lt=="function")Zt=function(){lt(he)};else if(typeof MessageChannel<"u"){var El=new MessageChannel,Al=El.port2;El.port1.onmessage=he,Zt=function(){Al.postMessage(null)}}else Zt=function(){W(he,0)};function Kt(M,Y){Ot=W(function(){M(u.unstable_now())},Y)}u.unstable_IdlePriority=5,u.unstable_ImmediatePriority=1,u.unstable_LowPriority=4,u.unstable_NormalPriority=3,u.unstable_Profiling=null,u.unstable_UserBlockingPriority=2,u.unstable_cancelCallback=function(M){M.callback=null},u.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Yt=0<M?Math.floor(1e3/M):5},u.unstable_getCurrentPriorityLevel=function(){return L},u.unstable_next=function(M){switch(L){case 1:case 2:case 3:var Y=3;break;default:Y=L}var F=L;L=Y;try{return M()}finally{L=F}},u.unstable_requestPaint=function(){k=!0},u.unstable_runWithPriority=function(M,Y){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var F=L;L=M;try{return Y()}finally{L=F}},u.unstable_scheduleCallback=function(M,Y,F){var vt=u.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?vt+F:vt):F=vt,M){case 1:var g=-1;break;case 2:g=250;break;case 5:g=1073741823;break;case 4:g=1e4;break;default:g=5e3}return g=F+g,M={id:A++,callback:Y,priorityLevel:M,startTime:F,expirationTime:g,sortIndex:-1},F>vt?(M.sortIndex=F,f(v,M),d(S)===null&&M===d(v)&&(P?(X(Ot),Ot=-1):P=!0,Kt(tt,F-vt))):(M.sortIndex=g,f(S,M),Z||V||(Z=!0,Ht||(Ht=!0,Zt()))),M},u.unstable_shouldYield=ae,u.unstable_wrapCallback=function(M){var Y=L;return function(){var F=L;L=Y;try{return M.apply(this,arguments)}finally{L=F}}}})(Cc)),Cc}var qd;function Jh(){return qd||(qd=1,Ac.exports=Kh()),Ac.exports}var Rc={exports:{}},$t={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kd;function Wh(){if(kd)return $t;kd=1;var u=_c();function f(S){var v="https://react.dev/errors/"+S;if(1<arguments.length){v+="?args[]="+encodeURIComponent(arguments[1]);for(var A=2;A<arguments.length;A++)v+="&args[]="+encodeURIComponent(arguments[A])}return"Minified React error #"+S+"; visit "+v+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(){}var s={d:{f:d,r:function(){throw Error(f(522))},D:d,C:d,L:d,m:d,X:d,S:d,M:d},p:0,findDOMNode:null},h=Symbol.for("react.portal");function p(S,v,A){var U=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:h,key:U==null?null:""+U,children:S,containerInfo:v,implementation:A}}var b=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function C(S,v){if(S==="font")return"";if(typeof v=="string")return v==="use-credentials"?v:""}return $t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,$t.createPortal=function(S,v){var A=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v||v.nodeType!==1&&v.nodeType!==9&&v.nodeType!==11)throw Error(f(299));return p(S,v,null,A)},$t.flushSync=function(S){var v=b.T,A=s.p;try{if(b.T=null,s.p=2,S)return S()}finally{b.T=v,s.p=A,s.d.f()}},$t.preconnect=function(S,v){typeof S=="string"&&(v?(v=v.crossOrigin,v=typeof v=="string"?v==="use-credentials"?v:"":void 0):v=null,s.d.C(S,v))},$t.prefetchDNS=function(S){typeof S=="string"&&s.d.D(S)},$t.preinit=function(S,v){if(typeof S=="string"&&v&&typeof v.as=="string"){var A=v.as,U=C(A,v.crossOrigin),L=typeof v.integrity=="string"?v.integrity:void 0,V=typeof v.fetchPriority=="string"?v.fetchPriority:void 0;A==="style"?s.d.S(S,typeof v.precedence=="string"?v.precedence:void 0,{crossOrigin:U,integrity:L,fetchPriority:V}):A==="script"&&s.d.X(S,{crossOrigin:U,integrity:L,fetchPriority:V,nonce:typeof v.nonce=="string"?v.nonce:void 0})}},$t.preinitModule=function(S,v){if(typeof S=="string")if(typeof v=="object"&&v!==null){if(v.as==null||v.as==="script"){var A=C(v.as,v.crossOrigin);s.d.M(S,{crossOrigin:A,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0})}}else v==null&&s.d.M(S)},$t.preload=function(S,v){if(typeof S=="string"&&typeof v=="object"&&v!==null&&typeof v.as=="string"){var A=v.as,U=C(A,v.crossOrigin);s.d.L(S,A,{crossOrigin:U,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,type:typeof v.type=="string"?v.type:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0,referrerPolicy:typeof v.referrerPolicy=="string"?v.referrerPolicy:void 0,imageSrcSet:typeof v.imageSrcSet=="string"?v.imageSrcSet:void 0,imageSizes:typeof v.imageSizes=="string"?v.imageSizes:void 0,media:typeof v.media=="string"?v.media:void 0})}},$t.preloadModule=function(S,v){if(typeof S=="string")if(v){var A=C(v.as,v.crossOrigin);s.d.m(S,{as:typeof v.as=="string"&&v.as!=="script"?v.as:void 0,crossOrigin:A,integrity:typeof v.integrity=="string"?v.integrity:void 0})}else s.d.m(S)},$t.requestFormReset=function(S){s.d.r(S)},$t.unstable_batchedUpdates=function(S,v){return S(v)},$t.useFormState=function(S,v,A){return b.H.useFormState(S,v,A)},$t.useFormStatus=function(){return b.H.useHostTransitionStatus()},$t.version="19.1.1",$t}var Gd;function $h(){if(Gd)return Rc.exports;Gd=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(f){console.error(f)}}return u(),Rc.exports=Wh(),Rc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xd;function Fh(){if(Xd)return Nn;Xd=1;var u=Jh(),f=_c(),d=$h();function s(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)e+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function h(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function p(t){var e=t,l=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(l=e.return),t=e.return;while(t)}return e.tag===3?l:null}function b(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function C(t){if(p(t)!==t)throw Error(s(188))}function S(t){var e=t.alternate;if(!e){if(e=p(t),e===null)throw Error(s(188));return e!==t?null:t}for(var l=t,a=e;;){var n=l.return;if(n===null)break;var i=n.alternate;if(i===null){if(a=n.return,a!==null){l=a;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===l)return C(n),t;if(i===a)return C(n),e;i=i.sibling}throw Error(s(188))}if(l.return!==a.return)l=n,a=i;else{for(var r=!1,o=n.child;o;){if(o===l){r=!0,l=n,a=i;break}if(o===a){r=!0,a=n,l=i;break}o=o.sibling}if(!r){for(o=i.child;o;){if(o===l){r=!0,l=i,a=n;break}if(o===a){r=!0,a=i,l=n;break}o=o.sibling}if(!r)throw Error(s(189))}}if(l.alternate!==a)throw Error(s(190))}if(l.tag!==3)throw Error(s(188));return l.stateNode.current===l?t:e}function v(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=v(t),e!==null)return e;t=t.sibling}return null}var A=Object.assign,U=Symbol.for("react.element"),L=Symbol.for("react.transitional.element"),V=Symbol.for("react.portal"),Z=Symbol.for("react.fragment"),P=Symbol.for("react.strict_mode"),k=Symbol.for("react.profiler"),W=Symbol.for("react.provider"),X=Symbol.for("react.consumer"),lt=Symbol.for("react.context"),jt=Symbol.for("react.forward_ref"),tt=Symbol.for("react.suspense"),Ht=Symbol.for("react.suspense_list"),Ot=Symbol.for("react.memo"),Yt=Symbol.for("react.lazy"),Tt=Symbol.for("react.activity"),ae=Symbol.for("react.memo_cache_sentinel"),he=Symbol.iterator;function Zt(t){return t===null||typeof t!="object"?null:(t=he&&t[he]||t["@@iterator"],typeof t=="function"?t:null)}var El=Symbol.for("react.client.reference");function Al(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===El?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Z:return"Fragment";case k:return"Profiler";case P:return"StrictMode";case tt:return"Suspense";case Ht:return"SuspenseList";case Tt:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case V:return"Portal";case lt:return(t.displayName||"Context")+".Provider";case X:return(t._context.displayName||"Context")+".Consumer";case jt:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ot:return e=t.displayName||null,e!==null?e:Al(t.type)||"Memo";case Yt:e=t._payload,t=t._init;try{return Al(t(e))}catch{}}return null}var Kt=Array.isArray,M=f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F={pending:!1,data:null,method:null,action:null},vt=[],g=-1;function B(t){return{current:t}}function q(t){0>g||(t.current=vt[g],vt[g]=null,g--)}function H(t,e){g++,vt[g]=t.current,t.current=e}var K=B(null),ot=B(null),et=B(null),ne=B(null);function bt(t,e){switch(H(et,e),H(ot,t),H(K,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?od(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=od(e),t=sd(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}q(K),H(K,t)}function tl(){q(K),q(ot),q(et)}function cu(t){t.memoizedState!==null&&H(ne,t);var e=K.current,l=sd(e,t.type);e!==l&&(H(ot,t),H(K,l))}function Yn(t){ot.current===t&&(q(K),q(ot)),ne.current===t&&(q(ne),Cn._currentValue=F)}var ou=Object.prototype.hasOwnProperty,su=u.unstable_scheduleCallback,fu=u.unstable_cancelCallback,S0=u.unstable_shouldYield,j0=u.unstable_requestPaint,we=u.unstable_now,z0=u.unstable_getCurrentPriorityLevel,kc=u.unstable_ImmediatePriority,Gc=u.unstable_UserBlockingPriority,Ln=u.unstable_NormalPriority,T0=u.unstable_LowPriority,Xc=u.unstable_IdlePriority,E0=u.log,A0=u.unstable_setDisableYieldValue,Ba=null,ie=null;function el(t){if(typeof E0=="function"&&A0(t),ie&&typeof ie.setStrictMode=="function")try{ie.setStrictMode(Ba,t)}catch{}}var ue=Math.clz32?Math.clz32:w0,C0=Math.log,R0=Math.LN2;function w0(t){return t>>>=0,t===0?32:31-(C0(t)/R0|0)|0}var qn=256,kn=4194304;function Cl(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Gn(t,e,l){var a=t.pendingLanes;if(a===0)return 0;var n=0,i=t.suspendedLanes,r=t.pingedLanes;t=t.warmLanes;var o=a&134217727;return o!==0?(a=o&~i,a!==0?n=Cl(a):(r&=o,r!==0?n=Cl(r):l||(l=o&~t,l!==0&&(n=Cl(l))))):(o=a&~i,o!==0?n=Cl(o):r!==0?n=Cl(r):l||(l=a&~t,l!==0&&(n=Cl(l)))),n===0?0:e!==0&&e!==n&&(e&i)===0&&(i=n&-n,l=e&-e,i>=l||i===32&&(l&4194048)!==0)?e:n}function _a(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function D0(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qc(){var t=qn;return qn<<=1,(qn&4194048)===0&&(qn=256),t}function Vc(){var t=kn;return kn<<=1,(kn&62914560)===0&&(kn=4194304),t}function du(t){for(var e=[],l=0;31>l;l++)e.push(t);return e}function Ua(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function M0(t,e,l,a,n,i){var r=t.pendingLanes;t.pendingLanes=l,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=l,t.entangledLanes&=l,t.errorRecoveryDisabledLanes&=l,t.shellSuspendCounter=0;var o=t.entanglements,m=t.expirationTimes,z=t.hiddenUpdates;for(l=r&~l;0<l;){var D=31-ue(l),N=1<<D;o[D]=0,m[D]=-1;var T=z[D];if(T!==null)for(z[D]=null,D=0;D<T.length;D++){var E=T[D];E!==null&&(E.lane&=-536870913)}l&=~N}a!==0&&Zc(t,a,0),i!==0&&n===0&&t.tag!==0&&(t.suspendedLanes|=i&~(r&~e))}function Zc(t,e,l){t.pendingLanes|=e,t.suspendedLanes&=~e;var a=31-ue(e);t.entangledLanes|=e,t.entanglements[a]=t.entanglements[a]|1073741824|l&4194090}function Kc(t,e){var l=t.entangledLanes|=e;for(t=t.entanglements;l;){var a=31-ue(l),n=1<<a;n&e|t[a]&e&&(t[a]|=e),l&=~n}}function mu(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function hu(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Jc(){var t=Y.p;return t!==0?t:(t=window.event,t===void 0?32:wd(t.type))}function O0(t,e){var l=Y.p;try{return Y.p=t,e()}finally{Y.p=l}}var ll=Math.random().toString(36).slice(2),Jt="__reactFiber$"+ll,It="__reactProps$"+ll,Kl="__reactContainer$"+ll,pu="__reactEvents$"+ll,N0="__reactListeners$"+ll,B0="__reactHandles$"+ll,Wc="__reactResources$"+ll,Ha="__reactMarker$"+ll;function gu(t){delete t[Jt],delete t[It],delete t[pu],delete t[N0],delete t[B0]}function Jl(t){var e=t[Jt];if(e)return e;for(var l=t.parentNode;l;){if(e=l[Kl]||l[Jt]){if(l=e.alternate,e.child!==null||l!==null&&l.child!==null)for(t=hd(t);t!==null;){if(l=t[Jt])return l;t=hd(t)}return e}t=l,l=t.parentNode}return null}function Wl(t){if(t=t[Jt]||t[Kl]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function Ya(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(s(33))}function $l(t){var e=t[Wc];return e||(e=t[Wc]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Lt(t){t[Ha]=!0}var $c=new Set,Fc={};function Rl(t,e){Fl(t,e),Fl(t+"Capture",e)}function Fl(t,e){for(Fc[t]=e,t=0;t<e.length;t++)$c.add(e[t])}var _0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ic={},Pc={};function U0(t){return ou.call(Pc,t)?!0:ou.call(Ic,t)?!1:_0.test(t)?Pc[t]=!0:(Ic[t]=!0,!1)}function Xn(t,e,l){if(U0(e))if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var a=e.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+l)}}function Qn(t,e,l){if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+l)}}function Ue(t,e,l,a){if(a===null)t.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(l);return}t.setAttributeNS(e,l,""+a)}}var vu,to;function Il(t){if(vu===void 0)try{throw Error()}catch(l){var e=l.stack.trim().match(/\n( *(at )?)/);vu=e&&e[1]||"",to=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+vu+t+to}var yu=!1;function xu(t,e){if(!t||yu)return"";yu=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(e){var N=function(){throw Error()};if(Object.defineProperty(N.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(N,[])}catch(E){var T=E}Reflect.construct(t,[],N)}else{try{N.call()}catch(E){T=E}t.call(N.prototype)}}else{try{throw Error()}catch(E){T=E}(N=t())&&typeof N.catch=="function"&&N.catch(function(){})}}catch(E){if(E&&T&&typeof E.stack=="string")return[E.stack,T.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),r=i[0],o=i[1];if(r&&o){var m=r.split(`
`),z=o.split(`
`);for(n=a=0;a<m.length&&!m[a].includes("DetermineComponentFrameRoot");)a++;for(;n<z.length&&!z[n].includes("DetermineComponentFrameRoot");)n++;if(a===m.length||n===z.length)for(a=m.length-1,n=z.length-1;1<=a&&0<=n&&m[a]!==z[n];)n--;for(;1<=a&&0<=n;a--,n--)if(m[a]!==z[n]){if(a!==1||n!==1)do if(a--,n--,0>n||m[a]!==z[n]){var D=`
`+m[a].replace(" at new "," at ");return t.displayName&&D.includes("<anonymous>")&&(D=D.replace("<anonymous>",t.displayName)),D}while(1<=a&&0<=n);break}}}finally{yu=!1,Error.prepareStackTrace=l}return(l=t?t.displayName||t.name:"")?Il(l):""}function H0(t){switch(t.tag){case 26:case 27:case 5:return Il(t.type);case 16:return Il("Lazy");case 13:return Il("Suspense");case 19:return Il("SuspenseList");case 0:case 15:return xu(t.type,!1);case 11:return xu(t.type.render,!1);case 1:return xu(t.type,!0);case 31:return Il("Activity");default:return""}}function eo(t){try{var e="";do e+=H0(t),t=t.return;while(t);return e}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}function pe(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function lo(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Y0(t){var e=lo(t)?"checked":"value",l=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),a=""+t[e];if(!t.hasOwnProperty(e)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return n.call(this)},set:function(r){a=""+r,i.call(this,r)}}),Object.defineProperty(t,e,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(r){a=""+r},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Vn(t){t._valueTracker||(t._valueTracker=Y0(t))}function ao(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var l=e.getValue(),a="";return t&&(a=lo(t)?t.checked?"true":"false":t.value),t=a,t!==l?(e.setValue(t),!0):!1}function Zn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var L0=/[\n"\\]/g;function ge(t){return t.replace(L0,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function bu(t,e,l,a,n,i,r,o){t.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?t.type=r:t.removeAttribute("type"),e!=null?r==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+pe(e)):t.value!==""+pe(e)&&(t.value=""+pe(e)):r!=="submit"&&r!=="reset"||t.removeAttribute("value"),e!=null?Su(t,r,pe(e)):l!=null?Su(t,r,pe(l)):a!=null&&t.removeAttribute("value"),n==null&&i!=null&&(t.defaultChecked=!!i),n!=null&&(t.checked=n&&typeof n!="function"&&typeof n!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?t.name=""+pe(o):t.removeAttribute("name")}function no(t,e,l,a,n,i,r,o){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.type=i),e!=null||l!=null){if(!(i!=="submit"&&i!=="reset"||e!=null))return;l=l!=null?""+pe(l):"",e=e!=null?""+pe(e):l,o||e===t.value||(t.value=e),t.defaultValue=e}a=a??n,a=typeof a!="function"&&typeof a!="symbol"&&!!a,t.checked=o?t.checked:!!a,t.defaultChecked=!!a,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(t.name=r)}function Su(t,e,l){e==="number"&&Zn(t.ownerDocument)===t||t.defaultValue===""+l||(t.defaultValue=""+l)}function Pl(t,e,l,a){if(t=t.options,e){e={};for(var n=0;n<l.length;n++)e["$"+l[n]]=!0;for(l=0;l<t.length;l++)n=e.hasOwnProperty("$"+t[l].value),t[l].selected!==n&&(t[l].selected=n),n&&a&&(t[l].defaultSelected=!0)}else{for(l=""+pe(l),e=null,n=0;n<t.length;n++){if(t[n].value===l){t[n].selected=!0,a&&(t[n].defaultSelected=!0);return}e!==null||t[n].disabled||(e=t[n])}e!==null&&(e.selected=!0)}}function io(t,e,l){if(e!=null&&(e=""+pe(e),e!==t.value&&(t.value=e),l==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=l!=null?""+pe(l):""}function uo(t,e,l,a){if(e==null){if(a!=null){if(l!=null)throw Error(s(92));if(Kt(a)){if(1<a.length)throw Error(s(93));a=a[0]}l=a}l==null&&(l=""),e=l}l=pe(e),t.defaultValue=l,a=t.textContent,a===l&&a!==""&&a!==null&&(t.value=a)}function ta(t,e){if(e){var l=t.firstChild;if(l&&l===t.lastChild&&l.nodeType===3){l.nodeValue=e;return}}t.textContent=e}var q0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ro(t,e,l){var a=e.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":a?t.setProperty(e,l):typeof l!="number"||l===0||q0.has(e)?e==="float"?t.cssFloat=l:t[e]=(""+l).trim():t[e]=l+"px"}function co(t,e,l){if(e!=null&&typeof e!="object")throw Error(s(62));if(t=t.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||e!=null&&e.hasOwnProperty(a)||(a.indexOf("--")===0?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="");for(var n in e)a=e[n],e.hasOwnProperty(n)&&l[n]!==a&&ro(t,n,a)}else for(var i in e)e.hasOwnProperty(i)&&ro(t,i,e[i])}function ju(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var k0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),G0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Kn(t){return G0.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var zu=null;function Tu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ea=null,la=null;function oo(t){var e=Wl(t);if(e&&(t=e.stateNode)){var l=t[It]||null;t:switch(t=e.stateNode,e.type){case"input":if(bu(t,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),e=l.name,l.type==="radio"&&e!=null){for(l=t;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+ge(""+e)+'"][type="radio"]'),e=0;e<l.length;e++){var a=l[e];if(a!==t&&a.form===t.form){var n=a[It]||null;if(!n)throw Error(s(90));bu(a,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(e=0;e<l.length;e++)a=l[e],a.form===t.form&&ao(a)}break t;case"textarea":io(t,l.value,l.defaultValue);break t;case"select":e=l.value,e!=null&&Pl(t,!!l.multiple,e,!1)}}}var Eu=!1;function so(t,e,l){if(Eu)return t(e,l);Eu=!0;try{var a=t(e);return a}finally{if(Eu=!1,(ea!==null||la!==null)&&(Oi(),ea&&(e=ea,t=la,la=ea=null,oo(e),t)))for(e=0;e<t.length;e++)oo(t[e])}}function La(t,e){var l=t.stateNode;if(l===null)return null;var a=l[It]||null;if(a===null)return null;l=a[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break t;default:t=!1}if(t)return null;if(l&&typeof l!="function")throw Error(s(231,e,typeof l));return l}var He=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Au=!1;if(He)try{var qa={};Object.defineProperty(qa,"passive",{get:function(){Au=!0}}),window.addEventListener("test",qa,qa),window.removeEventListener("test",qa,qa)}catch{Au=!1}var al=null,Cu=null,Jn=null;function fo(){if(Jn)return Jn;var t,e=Cu,l=e.length,a,n="value"in al?al.value:al.textContent,i=n.length;for(t=0;t<l&&e[t]===n[t];t++);var r=l-t;for(a=1;a<=r&&e[l-a]===n[i-a];a++);return Jn=n.slice(t,1<a?1-a:void 0)}function Wn(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function $n(){return!0}function mo(){return!1}function Pt(t){function e(l,a,n,i,r){this._reactName=l,this._targetInst=n,this.type=a,this.nativeEvent=i,this.target=r,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(l=t[o],this[o]=l?l(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?$n:mo,this.isPropagationStopped=mo,this}return A(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=$n)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=$n)},persist:function(){},isPersistent:$n}),e}var wl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fn=Pt(wl),ka=A({},wl,{view:0,detail:0}),X0=Pt(ka),Ru,wu,Ga,In=A({},ka,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ga&&(Ga&&t.type==="mousemove"?(Ru=t.screenX-Ga.screenX,wu=t.screenY-Ga.screenY):wu=Ru=0,Ga=t),Ru)},movementY:function(t){return"movementY"in t?t.movementY:wu}}),ho=Pt(In),Q0=A({},In,{dataTransfer:0}),V0=Pt(Q0),Z0=A({},ka,{relatedTarget:0}),Du=Pt(Z0),K0=A({},wl,{animationName:0,elapsedTime:0,pseudoElement:0}),J0=Pt(K0),W0=A({},wl,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),$0=Pt(W0),F0=A({},wl,{data:0}),po=Pt(F0),I0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},P0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function em(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=tm[t])?!!e[t]:!1}function Mu(){return em}var lm=A({},ka,{key:function(t){if(t.key){var e=I0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Wn(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?P0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mu,charCode:function(t){return t.type==="keypress"?Wn(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Wn(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),am=Pt(lm),nm=A({},In,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),go=Pt(nm),im=A({},ka,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mu}),um=Pt(im),rm=A({},wl,{propertyName:0,elapsedTime:0,pseudoElement:0}),cm=Pt(rm),om=A({},In,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),sm=Pt(om),fm=A({},wl,{newState:0,oldState:0}),dm=Pt(fm),mm=[9,13,27,32],Ou=He&&"CompositionEvent"in window,Xa=null;He&&"documentMode"in document&&(Xa=document.documentMode);var hm=He&&"TextEvent"in window&&!Xa,vo=He&&(!Ou||Xa&&8<Xa&&11>=Xa),yo=" ",xo=!1;function bo(t,e){switch(t){case"keyup":return mm.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function So(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var aa=!1;function pm(t,e){switch(t){case"compositionend":return So(e);case"keypress":return e.which!==32?null:(xo=!0,yo);case"textInput":return t=e.data,t===yo&&xo?null:t;default:return null}}function gm(t,e){if(aa)return t==="compositionend"||!Ou&&bo(t,e)?(t=fo(),Jn=Cu=al=null,aa=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return vo&&e.locale!=="ko"?null:e.data;default:return null}}var vm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jo(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!vm[t.type]:e==="textarea"}function zo(t,e,l,a){ea?la?la.push(a):la=[a]:ea=a,e=Yi(e,"onChange"),0<e.length&&(l=new Fn("onChange","change",null,l,a),t.push({event:l,listeners:e}))}var Qa=null,Va=null;function ym(t){nd(t,0)}function Pn(t){var e=Ya(t);if(ao(e))return t}function To(t,e){if(t==="change")return e}var Eo=!1;if(He){var Nu;if(He){var Bu="oninput"in document;if(!Bu){var Ao=document.createElement("div");Ao.setAttribute("oninput","return;"),Bu=typeof Ao.oninput=="function"}Nu=Bu}else Nu=!1;Eo=Nu&&(!document.documentMode||9<document.documentMode)}function Co(){Qa&&(Qa.detachEvent("onpropertychange",Ro),Va=Qa=null)}function Ro(t){if(t.propertyName==="value"&&Pn(Va)){var e=[];zo(e,Va,t,Tu(t)),so(ym,e)}}function xm(t,e,l){t==="focusin"?(Co(),Qa=e,Va=l,Qa.attachEvent("onpropertychange",Ro)):t==="focusout"&&Co()}function bm(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Pn(Va)}function Sm(t,e){if(t==="click")return Pn(e)}function jm(t,e){if(t==="input"||t==="change")return Pn(e)}function zm(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var re=typeof Object.is=="function"?Object.is:zm;function Za(t,e){if(re(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var l=Object.keys(t),a=Object.keys(e);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var n=l[a];if(!ou.call(e,n)||!re(t[n],e[n]))return!1}return!0}function wo(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Do(t,e){var l=wo(t);t=0;for(var a;l;){if(l.nodeType===3){if(a=t+l.textContent.length,t<=e&&a>=e)return{node:l,offset:e-t};t=a}t:{for(;l;){if(l.nextSibling){l=l.nextSibling;break t}l=l.parentNode}l=void 0}l=wo(l)}}function Mo(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Mo(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Oo(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Zn(t.document);e instanceof t.HTMLIFrameElement;){try{var l=typeof e.contentWindow.location.href=="string"}catch{l=!1}if(l)t=e.contentWindow;else break;e=Zn(t.document)}return e}function _u(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var Tm=He&&"documentMode"in document&&11>=document.documentMode,na=null,Uu=null,Ka=null,Hu=!1;function No(t,e,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Hu||na==null||na!==Zn(a)||(a=na,"selectionStart"in a&&_u(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Ka&&Za(Ka,a)||(Ka=a,a=Yi(Uu,"onSelect"),0<a.length&&(e=new Fn("onSelect","select",null,e,l),t.push({event:e,listeners:a}),e.target=na)))}function Dl(t,e){var l={};return l[t.toLowerCase()]=e.toLowerCase(),l["Webkit"+t]="webkit"+e,l["Moz"+t]="moz"+e,l}var ia={animationend:Dl("Animation","AnimationEnd"),animationiteration:Dl("Animation","AnimationIteration"),animationstart:Dl("Animation","AnimationStart"),transitionrun:Dl("Transition","TransitionRun"),transitionstart:Dl("Transition","TransitionStart"),transitioncancel:Dl("Transition","TransitionCancel"),transitionend:Dl("Transition","TransitionEnd")},Yu={},Bo={};He&&(Bo=document.createElement("div").style,"AnimationEvent"in window||(delete ia.animationend.animation,delete ia.animationiteration.animation,delete ia.animationstart.animation),"TransitionEvent"in window||delete ia.transitionend.transition);function Ml(t){if(Yu[t])return Yu[t];if(!ia[t])return t;var e=ia[t],l;for(l in e)if(e.hasOwnProperty(l)&&l in Bo)return Yu[t]=e[l];return t}var _o=Ml("animationend"),Uo=Ml("animationiteration"),Ho=Ml("animationstart"),Em=Ml("transitionrun"),Am=Ml("transitionstart"),Cm=Ml("transitioncancel"),Yo=Ml("transitionend"),Lo=new Map,Lu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Lu.push("scrollEnd");function Te(t,e){Lo.set(t,e),Rl(e,[t])}var qo=new WeakMap;function ve(t,e){if(typeof t=="object"&&t!==null){var l=qo.get(t);return l!==void 0?l:(e={value:t,source:e,stack:eo(e)},qo.set(t,e),e)}return{value:t,source:e,stack:eo(e)}}var ye=[],ua=0,qu=0;function ti(){for(var t=ua,e=qu=ua=0;e<t;){var l=ye[e];ye[e++]=null;var a=ye[e];ye[e++]=null;var n=ye[e];ye[e++]=null;var i=ye[e];if(ye[e++]=null,a!==null&&n!==null){var r=a.pending;r===null?n.next=n:(n.next=r.next,r.next=n),a.pending=n}i!==0&&ko(l,n,i)}}function ei(t,e,l,a){ye[ua++]=t,ye[ua++]=e,ye[ua++]=l,ye[ua++]=a,qu|=a,t.lanes|=a,t=t.alternate,t!==null&&(t.lanes|=a)}function ku(t,e,l,a){return ei(t,e,l,a),li(t)}function ra(t,e){return ei(t,null,null,e),li(t)}function ko(t,e,l){t.lanes|=l;var a=t.alternate;a!==null&&(a.lanes|=l);for(var n=!1,i=t.return;i!==null;)i.childLanes|=l,a=i.alternate,a!==null&&(a.childLanes|=l),i.tag===22&&(t=i.stateNode,t===null||t._visibility&1||(n=!0)),t=i,i=i.return;return t.tag===3?(i=t.stateNode,n&&e!==null&&(n=31-ue(l),t=i.hiddenUpdates,a=t[n],a===null?t[n]=[e]:a.push(e),e.lane=l|536870912),i):null}function li(t){if(50<xn)throw xn=0,Kr=null,Error(s(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var ca={};function Rm(t,e,l,a){this.tag=t,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ce(t,e,l,a){return new Rm(t,e,l,a)}function Gu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ye(t,e){var l=t.alternate;return l===null?(l=ce(t.tag,e,t.key,t.mode),l.elementType=t.elementType,l.type=t.type,l.stateNode=t.stateNode,l.alternate=t,t.alternate=l):(l.pendingProps=e,l.type=t.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=t.flags&65011712,l.childLanes=t.childLanes,l.lanes=t.lanes,l.child=t.child,l.memoizedProps=t.memoizedProps,l.memoizedState=t.memoizedState,l.updateQueue=t.updateQueue,e=t.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},l.sibling=t.sibling,l.index=t.index,l.ref=t.ref,l.refCleanup=t.refCleanup,l}function Go(t,e){t.flags&=65011714;var l=t.alternate;return l===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=l.childLanes,t.lanes=l.lanes,t.child=l.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=l.memoizedProps,t.memoizedState=l.memoizedState,t.updateQueue=l.updateQueue,t.type=l.type,e=l.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function ai(t,e,l,a,n,i){var r=0;if(a=t,typeof t=="function")Gu(t)&&(r=1);else if(typeof t=="string")r=Dh(t,l,K.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case Tt:return t=ce(31,l,e,n),t.elementType=Tt,t.lanes=i,t;case Z:return Ol(l.children,n,i,e);case P:r=8,n|=24;break;case k:return t=ce(12,l,e,n|2),t.elementType=k,t.lanes=i,t;case tt:return t=ce(13,l,e,n),t.elementType=tt,t.lanes=i,t;case Ht:return t=ce(19,l,e,n),t.elementType=Ht,t.lanes=i,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case W:case lt:r=10;break t;case X:r=9;break t;case jt:r=11;break t;case Ot:r=14;break t;case Yt:r=16,a=null;break t}r=29,l=Error(s(130,t===null?"null":typeof t,"")),a=null}return e=ce(r,l,e,n),e.elementType=t,e.type=a,e.lanes=i,e}function Ol(t,e,l,a){return t=ce(7,t,a,e),t.lanes=l,t}function Xu(t,e,l){return t=ce(6,t,null,e),t.lanes=l,t}function Qu(t,e,l){return e=ce(4,t.children!==null?t.children:[],t.key,e),e.lanes=l,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var oa=[],sa=0,ni=null,ii=0,xe=[],be=0,Nl=null,Le=1,qe="";function Bl(t,e){oa[sa++]=ii,oa[sa++]=ni,ni=t,ii=e}function Xo(t,e,l){xe[be++]=Le,xe[be++]=qe,xe[be++]=Nl,Nl=t;var a=Le;t=qe;var n=32-ue(a)-1;a&=~(1<<n),l+=1;var i=32-ue(e)+n;if(30<i){var r=n-n%5;i=(a&(1<<r)-1).toString(32),a>>=r,n-=r,Le=1<<32-ue(e)+n|l<<n|a,qe=i+t}else Le=1<<i|l<<n|a,qe=t}function Vu(t){t.return!==null&&(Bl(t,1),Xo(t,1,0))}function Zu(t){for(;t===ni;)ni=oa[--sa],oa[sa]=null,ii=oa[--sa],oa[sa]=null;for(;t===Nl;)Nl=xe[--be],xe[be]=null,qe=xe[--be],xe[be]=null,Le=xe[--be],xe[be]=null}var Ft=null,Et=null,ft=!1,_l=null,De=!1,Ku=Error(s(519));function Ul(t){var e=Error(s(418,""));throw $a(ve(e,t)),Ku}function Qo(t){var e=t.stateNode,l=t.type,a=t.memoizedProps;switch(e[Jt]=t,e[It]=a,l){case"dialog":rt("cancel",e),rt("close",e);break;case"iframe":case"object":case"embed":rt("load",e);break;case"video":case"audio":for(l=0;l<Sn.length;l++)rt(Sn[l],e);break;case"source":rt("error",e);break;case"img":case"image":case"link":rt("error",e),rt("load",e);break;case"details":rt("toggle",e);break;case"input":rt("invalid",e),no(e,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),Vn(e);break;case"select":rt("invalid",e);break;case"textarea":rt("invalid",e),uo(e,a.value,a.defaultValue,a.children),Vn(e)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||e.textContent===""+l||a.suppressHydrationWarning===!0||cd(e.textContent,l)?(a.popover!=null&&(rt("beforetoggle",e),rt("toggle",e)),a.onScroll!=null&&rt("scroll",e),a.onScrollEnd!=null&&rt("scrollend",e),a.onClick!=null&&(e.onclick=Li),e=!0):e=!1,e||Ul(t)}function Vo(t){for(Ft=t.return;Ft;)switch(Ft.tag){case 5:case 13:De=!1;return;case 27:case 3:De=!0;return;default:Ft=Ft.return}}function Ja(t){if(t!==Ft)return!1;if(!ft)return Vo(t),ft=!0,!1;var e=t.tag,l;if((l=e!==3&&e!==27)&&((l=e===5)&&(l=t.type,l=!(l!=="form"&&l!=="button")||oc(t.type,t.memoizedProps)),l=!l),l&&Et&&Ul(t),Vo(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(l=t.data,l==="/$"){if(e===0){Et=Ae(t.nextSibling);break t}e--}else l!=="$"&&l!=="$!"&&l!=="$?"||e++;t=t.nextSibling}Et=null}}else e===27?(e=Et,xl(t.type)?(t=mc,mc=null,Et=t):Et=e):Et=Ft?Ae(t.stateNode.nextSibling):null;return!0}function Wa(){Et=Ft=null,ft=!1}function Zo(){var t=_l;return t!==null&&(le===null?le=t:le.push.apply(le,t),_l=null),t}function $a(t){_l===null?_l=[t]:_l.push(t)}var Ju=B(null),Hl=null,ke=null;function nl(t,e,l){H(Ju,e._currentValue),e._currentValue=l}function Ge(t){t._currentValue=Ju.current,q(Ju)}function Wu(t,e,l){for(;t!==null;){var a=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),t===l)break;t=t.return}}function $u(t,e,l,a){var n=t.child;for(n!==null&&(n.return=t);n!==null;){var i=n.dependencies;if(i!==null){var r=n.child;i=i.firstContext;t:for(;i!==null;){var o=i;i=n;for(var m=0;m<e.length;m++)if(o.context===e[m]){i.lanes|=l,o=i.alternate,o!==null&&(o.lanes|=l),Wu(i.return,l,t),a||(r=null);break t}i=o.next}}else if(n.tag===18){if(r=n.return,r===null)throw Error(s(341));r.lanes|=l,i=r.alternate,i!==null&&(i.lanes|=l),Wu(r,l,t),r=null}else r=n.child;if(r!==null)r.return=n;else for(r=n;r!==null;){if(r===t){r=null;break}if(n=r.sibling,n!==null){n.return=r.return,r=n;break}r=r.return}n=r}}function Fa(t,e,l,a){t=null;for(var n=e,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var r=n.alternate;if(r===null)throw Error(s(387));if(r=r.memoizedProps,r!==null){var o=n.type;re(n.pendingProps.value,r.value)||(t!==null?t.push(o):t=[o])}}else if(n===ne.current){if(r=n.alternate,r===null)throw Error(s(387));r.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(t!==null?t.push(Cn):t=[Cn])}n=n.return}t!==null&&$u(e,t,l,a),e.flags|=262144}function ui(t){for(t=t.firstContext;t!==null;){if(!re(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Yl(t){Hl=t,ke=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Wt(t){return Ko(Hl,t)}function ri(t,e){return Hl===null&&Yl(t),Ko(t,e)}function Ko(t,e){var l=e._currentValue;if(e={context:e,memoizedValue:l,next:null},ke===null){if(t===null)throw Error(s(308));ke=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else ke=ke.next=e;return l}var wm=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(l,a){t.push(a)}};this.abort=function(){e.aborted=!0,t.forEach(function(l){return l()})}},Dm=u.unstable_scheduleCallback,Mm=u.unstable_NormalPriority,Nt={$$typeof:lt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Fu(){return{controller:new wm,data:new Map,refCount:0}}function Ia(t){t.refCount--,t.refCount===0&&Dm(Mm,function(){t.controller.abort()})}var Pa=null,Iu=0,fa=0,da=null;function Om(t,e){if(Pa===null){var l=Pa=[];Iu=0,fa=tc(),da={status:"pending",value:void 0,then:function(a){l.push(a)}}}return Iu++,e.then(Jo,Jo),e}function Jo(){if(--Iu===0&&Pa!==null){da!==null&&(da.status="fulfilled");var t=Pa;Pa=null,fa=0,da=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function Nm(t,e){var l=[],a={status:"pending",value:null,reason:null,then:function(n){l.push(n)}};return t.then(function(){a.status="fulfilled",a.value=e;for(var n=0;n<l.length;n++)(0,l[n])(e)},function(n){for(a.status="rejected",a.reason=n,n=0;n<l.length;n++)(0,l[n])(void 0)}),a}var Wo=M.S;M.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&Om(t,e),Wo!==null&&Wo(t,e)};var Ll=B(null);function Pu(){var t=Ll.current;return t!==null?t:xt.pooledCache}function ci(t,e){e===null?H(Ll,Ll.current):H(Ll,e.pool)}function $o(){var t=Pu();return t===null?null:{parent:Nt._currentValue,pool:t}}var tn=Error(s(460)),Fo=Error(s(474)),oi=Error(s(542)),tr={then:function(){}};function Io(t){return t=t.status,t==="fulfilled"||t==="rejected"}function si(){}function Po(t,e,l){switch(l=t[l],l===void 0?t.push(e):l!==e&&(e.then(si,si),e=l),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,es(t),t;default:if(typeof e.status=="string")e.then(si,si);else{if(t=xt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=e,t.status="pending",t.then(function(a){if(e.status==="pending"){var n=e;n.status="fulfilled",n.value=a}},function(a){if(e.status==="pending"){var n=e;n.status="rejected",n.reason=a}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,es(t),t}throw en=e,tn}}var en=null;function ts(){if(en===null)throw Error(s(459));var t=en;return en=null,t}function es(t){if(t===tn||t===oi)throw Error(s(483))}var il=!1;function er(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function lr(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ul(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function rl(t,e,l){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(dt&2)!==0){var n=a.pending;return n===null?e.next=e:(e.next=n.next,n.next=e),a.pending=e,e=li(t),ko(t,null,l),e}return ei(t,a,e,l),li(t)}function ln(t,e,l){if(e=e.updateQueue,e!==null&&(e=e.shared,(l&4194048)!==0)){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,Kc(t,l)}}function ar(t,e){var l=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var n=null,i=null;if(l=l.firstBaseUpdate,l!==null){do{var r={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};i===null?n=i=r:i=i.next=r,l=l.next}while(l!==null);i===null?n=i=e:i=i.next=e}else n=i=e;l={baseState:a.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},t.updateQueue=l;return}t=l.lastBaseUpdate,t===null?l.firstBaseUpdate=e:t.next=e,l.lastBaseUpdate=e}var nr=!1;function an(){if(nr){var t=da;if(t!==null)throw t}}function nn(t,e,l,a){nr=!1;var n=t.updateQueue;il=!1;var i=n.firstBaseUpdate,r=n.lastBaseUpdate,o=n.shared.pending;if(o!==null){n.shared.pending=null;var m=o,z=m.next;m.next=null,r===null?i=z:r.next=z,r=m;var D=t.alternate;D!==null&&(D=D.updateQueue,o=D.lastBaseUpdate,o!==r&&(o===null?D.firstBaseUpdate=z:o.next=z,D.lastBaseUpdate=m))}if(i!==null){var N=n.baseState;r=0,D=z=m=null,o=i;do{var T=o.lane&-536870913,E=T!==o.lane;if(E?(ct&T)===T:(a&T)===T){T!==0&&T===fa&&(nr=!0),D!==null&&(D=D.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var I=t,J=o;T=e;var gt=l;switch(J.tag){case 1:if(I=J.payload,typeof I=="function"){N=I.call(gt,N,T);break t}N=I;break t;case 3:I.flags=I.flags&-65537|128;case 0:if(I=J.payload,T=typeof I=="function"?I.call(gt,N,T):I,T==null)break t;N=A({},N,T);break t;case 2:il=!0}}T=o.callback,T!==null&&(t.flags|=64,E&&(t.flags|=8192),E=n.callbacks,E===null?n.callbacks=[T]:E.push(T))}else E={lane:T,tag:o.tag,payload:o.payload,callback:o.callback,next:null},D===null?(z=D=E,m=N):D=D.next=E,r|=T;if(o=o.next,o===null){if(o=n.shared.pending,o===null)break;E=o,o=E.next,E.next=null,n.lastBaseUpdate=E,n.shared.pending=null}}while(!0);D===null&&(m=N),n.baseState=m,n.firstBaseUpdate=z,n.lastBaseUpdate=D,i===null&&(n.shared.lanes=0),pl|=r,t.lanes=r,t.memoizedState=N}}function ls(t,e){if(typeof t!="function")throw Error(s(191,t));t.call(e)}function as(t,e){var l=t.callbacks;if(l!==null)for(t.callbacks=null,t=0;t<l.length;t++)ls(l[t],e)}var ma=B(null),fi=B(0);function ns(t,e){t=We,H(fi,t),H(ma,e),We=t|e.baseLanes}function ir(){H(fi,We),H(ma,ma.current)}function ur(){We=fi.current,q(ma),q(fi)}var cl=0,nt=null,ht=null,Dt=null,di=!1,ha=!1,ql=!1,mi=0,un=0,pa=null,Bm=0;function Rt(){throw Error(s(321))}function rr(t,e){if(e===null)return!1;for(var l=0;l<e.length&&l<t.length;l++)if(!re(t[l],e[l]))return!1;return!0}function cr(t,e,l,a,n,i){return cl=i,nt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,M.H=t===null||t.memoizedState===null?ks:Gs,ql=!1,i=l(a,n),ql=!1,ha&&(i=us(e,l,a,n)),is(t),i}function is(t){M.H=xi;var e=ht!==null&&ht.next!==null;if(cl=0,Dt=ht=nt=null,di=!1,un=0,pa=null,e)throw Error(s(300));t===null||qt||(t=t.dependencies,t!==null&&ui(t)&&(qt=!0))}function us(t,e,l,a){nt=t;var n=0;do{if(ha&&(pa=null),un=0,ha=!1,25<=n)throw Error(s(301));if(n+=1,Dt=ht=null,t.updateQueue!=null){var i=t.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}M.H=km,i=e(l,a)}while(ha);return i}function _m(){var t=M.H,e=t.useState()[0];return e=typeof e.then=="function"?rn(e):e,t=t.useState()[0],(ht!==null?ht.memoizedState:null)!==t&&(nt.flags|=1024),e}function or(){var t=mi!==0;return mi=0,t}function sr(t,e,l){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~l}function fr(t){if(di){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}di=!1}cl=0,Dt=ht=nt=null,ha=!1,un=mi=0,pa=null}function te(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dt===null?nt.memoizedState=Dt=t:Dt=Dt.next=t,Dt}function Mt(){if(ht===null){var t=nt.alternate;t=t!==null?t.memoizedState:null}else t=ht.next;var e=Dt===null?nt.memoizedState:Dt.next;if(e!==null)Dt=e,ht=t;else{if(t===null)throw nt.alternate===null?Error(s(467)):Error(s(310));ht=t,t={memoizedState:ht.memoizedState,baseState:ht.baseState,baseQueue:ht.baseQueue,queue:ht.queue,next:null},Dt===null?nt.memoizedState=Dt=t:Dt=Dt.next=t}return Dt}function dr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function rn(t){var e=un;return un+=1,pa===null&&(pa=[]),t=Po(pa,t,e),e=nt,(Dt===null?e.memoizedState:Dt.next)===null&&(e=e.alternate,M.H=e===null||e.memoizedState===null?ks:Gs),t}function hi(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return rn(t);if(t.$$typeof===lt)return Wt(t)}throw Error(s(438,String(t)))}function mr(t){var e=null,l=nt.updateQueue;if(l!==null&&(e=l.memoCache),e==null){var a=nt.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(e={data:a.data.map(function(n){return n.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),l===null&&(l=dr(),nt.updateQueue=l),l.memoCache=e,l=e.data[e.index],l===void 0)for(l=e.data[e.index]=Array(t),a=0;a<t;a++)l[a]=ae;return e.index++,l}function Xe(t,e){return typeof e=="function"?e(t):e}function pi(t){var e=Mt();return hr(e,ht,t)}function hr(t,e,l){var a=t.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=l;var n=t.baseQueue,i=a.pending;if(i!==null){if(n!==null){var r=n.next;n.next=i.next,i.next=r}e.baseQueue=n=i,a.pending=null}if(i=t.baseState,n===null)t.memoizedState=i;else{e=n.next;var o=r=null,m=null,z=e,D=!1;do{var N=z.lane&-536870913;if(N!==z.lane?(ct&N)===N:(cl&N)===N){var T=z.revertLane;if(T===0)m!==null&&(m=m.next={lane:0,revertLane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),N===fa&&(D=!0);else if((cl&T)===T){z=z.next,T===fa&&(D=!0);continue}else N={lane:0,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},m===null?(o=m=N,r=i):m=m.next=N,nt.lanes|=T,pl|=T;N=z.action,ql&&l(i,N),i=z.hasEagerState?z.eagerState:l(i,N)}else T={lane:N,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},m===null?(o=m=T,r=i):m=m.next=T,nt.lanes|=N,pl|=N;z=z.next}while(z!==null&&z!==e);if(m===null?r=i:m.next=o,!re(i,t.memoizedState)&&(qt=!0,D&&(l=da,l!==null)))throw l;t.memoizedState=i,t.baseState=r,t.baseQueue=m,a.lastRenderedState=i}return n===null&&(a.lanes=0),[t.memoizedState,a.dispatch]}function pr(t){var e=Mt(),l=e.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=t;var a=l.dispatch,n=l.pending,i=e.memoizedState;if(n!==null){l.pending=null;var r=n=n.next;do i=t(i,r.action),r=r.next;while(r!==n);re(i,e.memoizedState)||(qt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),l.lastRenderedState=i}return[i,a]}function rs(t,e,l){var a=nt,n=Mt(),i=ft;if(i){if(l===void 0)throw Error(s(407));l=l()}else l=e();var r=!re((ht||n).memoizedState,l);r&&(n.memoizedState=l,qt=!0),n=n.queue;var o=ss.bind(null,a,n,t);if(cn(2048,8,o,[t]),n.getSnapshot!==e||r||Dt!==null&&Dt.memoizedState.tag&1){if(a.flags|=2048,ga(9,gi(),os.bind(null,a,n,l,e),null),xt===null)throw Error(s(349));i||(cl&124)!==0||cs(a,e,l)}return l}function cs(t,e,l){t.flags|=16384,t={getSnapshot:e,value:l},e=nt.updateQueue,e===null?(e=dr(),nt.updateQueue=e,e.stores=[t]):(l=e.stores,l===null?e.stores=[t]:l.push(t))}function os(t,e,l,a){e.value=l,e.getSnapshot=a,fs(e)&&ds(t)}function ss(t,e,l){return l(function(){fs(e)&&ds(t)})}function fs(t){var e=t.getSnapshot;t=t.value;try{var l=e();return!re(t,l)}catch{return!0}}function ds(t){var e=ra(t,2);e!==null&&me(e,t,2)}function gr(t){var e=te();if(typeof t=="function"){var l=t;if(t=l(),ql){el(!0);try{l()}finally{el(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xe,lastRenderedState:t},e}function ms(t,e,l,a){return t.baseState=l,hr(t,ht,typeof a=="function"?a:Xe)}function Um(t,e,l,a,n){if(yi(t))throw Error(s(485));if(t=e.action,t!==null){var i={payload:n,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){i.listeners.push(r)}};M.T!==null?l(!0):i.isTransition=!1,a(i),l=e.pending,l===null?(i.next=e.pending=i,hs(e,i)):(i.next=l.next,e.pending=l.next=i)}}function hs(t,e){var l=e.action,a=e.payload,n=t.state;if(e.isTransition){var i=M.T,r={};M.T=r;try{var o=l(n,a),m=M.S;m!==null&&m(r,o),ps(t,e,o)}catch(z){vr(t,e,z)}finally{M.T=i}}else try{i=l(n,a),ps(t,e,i)}catch(z){vr(t,e,z)}}function ps(t,e,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){gs(t,e,a)},function(a){return vr(t,e,a)}):gs(t,e,l)}function gs(t,e,l){e.status="fulfilled",e.value=l,vs(e),t.state=l,e=t.pending,e!==null&&(l=e.next,l===e?t.pending=null:(l=l.next,e.next=l,hs(t,l)))}function vr(t,e,l){var a=t.pending;if(t.pending=null,a!==null){a=a.next;do e.status="rejected",e.reason=l,vs(e),e=e.next;while(e!==a)}t.action=null}function vs(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function ys(t,e){return e}function xs(t,e){if(ft){var l=xt.formState;if(l!==null){t:{var a=nt;if(ft){if(Et){e:{for(var n=Et,i=De;n.nodeType!==8;){if(!i){n=null;break e}if(n=Ae(n.nextSibling),n===null){n=null;break e}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){Et=Ae(n.nextSibling),a=n.data==="F!";break t}}Ul(a)}a=!1}a&&(e=l[0])}}return l=te(),l.memoizedState=l.baseState=e,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ys,lastRenderedState:e},l.queue=a,l=Ys.bind(null,nt,a),a.dispatch=l,a=gr(!1),i=jr.bind(null,nt,!1,a.queue),a=te(),n={state:e,dispatch:null,action:t,pending:null},a.queue=n,l=Um.bind(null,nt,n,i,l),n.dispatch=l,a.memoizedState=t,[e,l,!1]}function bs(t){var e=Mt();return Ss(e,ht,t)}function Ss(t,e,l){if(e=hr(t,e,ys)[0],t=pi(Xe)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var a=rn(e)}catch(r){throw r===tn?oi:r}else a=e;e=Mt();var n=e.queue,i=n.dispatch;return l!==e.memoizedState&&(nt.flags|=2048,ga(9,gi(),Hm.bind(null,n,l),null)),[a,i,t]}function Hm(t,e){t.action=e}function js(t){var e=Mt(),l=ht;if(l!==null)return Ss(e,l,t);Mt(),e=e.memoizedState,l=Mt();var a=l.queue.dispatch;return l.memoizedState=t,[e,a,!1]}function ga(t,e,l,a){return t={tag:t,create:l,deps:a,inst:e,next:null},e=nt.updateQueue,e===null&&(e=dr(),nt.updateQueue=e),l=e.lastEffect,l===null?e.lastEffect=t.next=t:(a=l.next,l.next=t,t.next=a,e.lastEffect=t),t}function gi(){return{destroy:void 0,resource:void 0}}function zs(){return Mt().memoizedState}function vi(t,e,l,a){var n=te();a=a===void 0?null:a,nt.flags|=t,n.memoizedState=ga(1|e,gi(),l,a)}function cn(t,e,l,a){var n=Mt();a=a===void 0?null:a;var i=n.memoizedState.inst;ht!==null&&a!==null&&rr(a,ht.memoizedState.deps)?n.memoizedState=ga(e,i,l,a):(nt.flags|=t,n.memoizedState=ga(1|e,i,l,a))}function Ts(t,e){vi(8390656,8,t,e)}function Es(t,e){cn(2048,8,t,e)}function As(t,e){return cn(4,2,t,e)}function Cs(t,e){return cn(4,4,t,e)}function Rs(t,e){if(typeof e=="function"){t=t();var l=e(t);return function(){typeof l=="function"?l():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ws(t,e,l){l=l!=null?l.concat([t]):null,cn(4,4,Rs.bind(null,e,t),l)}function yr(){}function Ds(t,e){var l=Mt();e=e===void 0?null:e;var a=l.memoizedState;return e!==null&&rr(e,a[1])?a[0]:(l.memoizedState=[t,e],t)}function Ms(t,e){var l=Mt();e=e===void 0?null:e;var a=l.memoizedState;if(e!==null&&rr(e,a[1]))return a[0];if(a=t(),ql){el(!0);try{t()}finally{el(!1)}}return l.memoizedState=[a,e],a}function xr(t,e,l){return l===void 0||(cl&1073741824)!==0?t.memoizedState=e:(t.memoizedState=l,t=_f(),nt.lanes|=t,pl|=t,l)}function Os(t,e,l,a){return re(l,e)?l:ma.current!==null?(t=xr(t,l,a),re(t,e)||(qt=!0),t):(cl&42)===0?(qt=!0,t.memoizedState=l):(t=_f(),nt.lanes|=t,pl|=t,e)}function Ns(t,e,l,a,n){var i=Y.p;Y.p=i!==0&&8>i?i:8;var r=M.T,o={};M.T=o,jr(t,!1,e,l);try{var m=n(),z=M.S;if(z!==null&&z(o,m),m!==null&&typeof m=="object"&&typeof m.then=="function"){var D=Nm(m,a);on(t,e,D,de(t))}else on(t,e,a,de(t))}catch(N){on(t,e,{then:function(){},status:"rejected",reason:N},de())}finally{Y.p=i,M.T=r}}function Ym(){}function br(t,e,l,a){if(t.tag!==5)throw Error(s(476));var n=Bs(t).queue;Ns(t,n,e,F,l===null?Ym:function(){return _s(t),l(a)})}function Bs(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:F,baseState:F,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xe,lastRenderedState:F},next:null};var l={};return e.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xe,lastRenderedState:l},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function _s(t){var e=Bs(t).next.queue;on(t,e,{},de())}function Sr(){return Wt(Cn)}function Us(){return Mt().memoizedState}function Hs(){return Mt().memoizedState}function Lm(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var l=de();t=ul(l);var a=rl(e,t,l);a!==null&&(me(a,e,l),ln(a,e,l)),e={cache:Fu()},t.payload=e;return}e=e.return}}function qm(t,e,l){var a=de();l={lane:a,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null},yi(t)?Ls(e,l):(l=ku(t,e,l,a),l!==null&&(me(l,t,a),qs(l,e,a)))}function Ys(t,e,l){var a=de();on(t,e,l,a)}function on(t,e,l,a){var n={lane:a,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null};if(yi(t))Ls(e,n);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var r=e.lastRenderedState,o=i(r,l);if(n.hasEagerState=!0,n.eagerState=o,re(o,r))return ei(t,e,n,0),xt===null&&ti(),!1}catch{}finally{}if(l=ku(t,e,n,a),l!==null)return me(l,t,a),qs(l,e,a),!0}return!1}function jr(t,e,l,a){if(a={lane:2,revertLane:tc(),action:a,hasEagerState:!1,eagerState:null,next:null},yi(t)){if(e)throw Error(s(479))}else e=ku(t,l,a,2),e!==null&&me(e,t,2)}function yi(t){var e=t.alternate;return t===nt||e!==null&&e===nt}function Ls(t,e){ha=di=!0;var l=t.pending;l===null?e.next=e:(e.next=l.next,l.next=e),t.pending=e}function qs(t,e,l){if((l&4194048)!==0){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,Kc(t,l)}}var xi={readContext:Wt,use:hi,useCallback:Rt,useContext:Rt,useEffect:Rt,useImperativeHandle:Rt,useLayoutEffect:Rt,useInsertionEffect:Rt,useMemo:Rt,useReducer:Rt,useRef:Rt,useState:Rt,useDebugValue:Rt,useDeferredValue:Rt,useTransition:Rt,useSyncExternalStore:Rt,useId:Rt,useHostTransitionStatus:Rt,useFormState:Rt,useActionState:Rt,useOptimistic:Rt,useMemoCache:Rt,useCacheRefresh:Rt},ks={readContext:Wt,use:hi,useCallback:function(t,e){return te().memoizedState=[t,e===void 0?null:e],t},useContext:Wt,useEffect:Ts,useImperativeHandle:function(t,e,l){l=l!=null?l.concat([t]):null,vi(4194308,4,Rs.bind(null,e,t),l)},useLayoutEffect:function(t,e){return vi(4194308,4,t,e)},useInsertionEffect:function(t,e){vi(4,2,t,e)},useMemo:function(t,e){var l=te();e=e===void 0?null:e;var a=t();if(ql){el(!0);try{t()}finally{el(!1)}}return l.memoizedState=[a,e],a},useReducer:function(t,e,l){var a=te();if(l!==void 0){var n=l(e);if(ql){el(!0);try{l(e)}finally{el(!1)}}}else n=e;return a.memoizedState=a.baseState=n,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},a.queue=t,t=t.dispatch=qm.bind(null,nt,t),[a.memoizedState,t]},useRef:function(t){var e=te();return t={current:t},e.memoizedState=t},useState:function(t){t=gr(t);var e=t.queue,l=Ys.bind(null,nt,e);return e.dispatch=l,[t.memoizedState,l]},useDebugValue:yr,useDeferredValue:function(t,e){var l=te();return xr(l,t,e)},useTransition:function(){var t=gr(!1);return t=Ns.bind(null,nt,t.queue,!0,!1),te().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,l){var a=nt,n=te();if(ft){if(l===void 0)throw Error(s(407));l=l()}else{if(l=e(),xt===null)throw Error(s(349));(ct&124)!==0||cs(a,e,l)}n.memoizedState=l;var i={value:l,getSnapshot:e};return n.queue=i,Ts(ss.bind(null,a,i,t),[t]),a.flags|=2048,ga(9,gi(),os.bind(null,a,i,l,e),null),l},useId:function(){var t=te(),e=xt.identifierPrefix;if(ft){var l=qe,a=Le;l=(a&~(1<<32-ue(a)-1)).toString(32)+l,e="«"+e+"R"+l,l=mi++,0<l&&(e+="H"+l.toString(32)),e+="»"}else l=Bm++,e="«"+e+"r"+l.toString(32)+"»";return t.memoizedState=e},useHostTransitionStatus:Sr,useFormState:xs,useActionState:xs,useOptimistic:function(t){var e=te();e.memoizedState=e.baseState=t;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=l,e=jr.bind(null,nt,!0,l),l.dispatch=e,[t,e]},useMemoCache:mr,useCacheRefresh:function(){return te().memoizedState=Lm.bind(null,nt)}},Gs={readContext:Wt,use:hi,useCallback:Ds,useContext:Wt,useEffect:Es,useImperativeHandle:ws,useInsertionEffect:As,useLayoutEffect:Cs,useMemo:Ms,useReducer:pi,useRef:zs,useState:function(){return pi(Xe)},useDebugValue:yr,useDeferredValue:function(t,e){var l=Mt();return Os(l,ht.memoizedState,t,e)},useTransition:function(){var t=pi(Xe)[0],e=Mt().memoizedState;return[typeof t=="boolean"?t:rn(t),e]},useSyncExternalStore:rs,useId:Us,useHostTransitionStatus:Sr,useFormState:bs,useActionState:bs,useOptimistic:function(t,e){var l=Mt();return ms(l,ht,t,e)},useMemoCache:mr,useCacheRefresh:Hs},km={readContext:Wt,use:hi,useCallback:Ds,useContext:Wt,useEffect:Es,useImperativeHandle:ws,useInsertionEffect:As,useLayoutEffect:Cs,useMemo:Ms,useReducer:pr,useRef:zs,useState:function(){return pr(Xe)},useDebugValue:yr,useDeferredValue:function(t,e){var l=Mt();return ht===null?xr(l,t,e):Os(l,ht.memoizedState,t,e)},useTransition:function(){var t=pr(Xe)[0],e=Mt().memoizedState;return[typeof t=="boolean"?t:rn(t),e]},useSyncExternalStore:rs,useId:Us,useHostTransitionStatus:Sr,useFormState:js,useActionState:js,useOptimistic:function(t,e){var l=Mt();return ht!==null?ms(l,ht,t,e):(l.baseState=t,[t,l.queue.dispatch])},useMemoCache:mr,useCacheRefresh:Hs},va=null,sn=0;function bi(t){var e=sn;return sn+=1,va===null&&(va=[]),Po(va,t,e)}function fn(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Si(t,e){throw e.$$typeof===U?Error(s(525)):(t=Object.prototype.toString.call(e),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Xs(t){var e=t._init;return e(t._payload)}function Qs(t){function e(x,y){if(t){var j=x.deletions;j===null?(x.deletions=[y],x.flags|=16):j.push(y)}}function l(x,y){if(!t)return null;for(;y!==null;)e(x,y),y=y.sibling;return null}function a(x){for(var y=new Map;x!==null;)x.key!==null?y.set(x.key,x):y.set(x.index,x),x=x.sibling;return y}function n(x,y){return x=Ye(x,y),x.index=0,x.sibling=null,x}function i(x,y,j){return x.index=j,t?(j=x.alternate,j!==null?(j=j.index,j<y?(x.flags|=67108866,y):j):(x.flags|=67108866,y)):(x.flags|=1048576,y)}function r(x){return t&&x.alternate===null&&(x.flags|=67108866),x}function o(x,y,j,O){return y===null||y.tag!==6?(y=Xu(j,x.mode,O),y.return=x,y):(y=n(y,j),y.return=x,y)}function m(x,y,j,O){var G=j.type;return G===Z?D(x,y,j.props.children,O,j.key):y!==null&&(y.elementType===G||typeof G=="object"&&G!==null&&G.$$typeof===Yt&&Xs(G)===y.type)?(y=n(y,j.props),fn(y,j),y.return=x,y):(y=ai(j.type,j.key,j.props,null,x.mode,O),fn(y,j),y.return=x,y)}function z(x,y,j,O){return y===null||y.tag!==4||y.stateNode.containerInfo!==j.containerInfo||y.stateNode.implementation!==j.implementation?(y=Qu(j,x.mode,O),y.return=x,y):(y=n(y,j.children||[]),y.return=x,y)}function D(x,y,j,O,G){return y===null||y.tag!==7?(y=Ol(j,x.mode,O,G),y.return=x,y):(y=n(y,j),y.return=x,y)}function N(x,y,j){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return y=Xu(""+y,x.mode,j),y.return=x,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case L:return j=ai(y.type,y.key,y.props,null,x.mode,j),fn(j,y),j.return=x,j;case V:return y=Qu(y,x.mode,j),y.return=x,y;case Yt:var O=y._init;return y=O(y._payload),N(x,y,j)}if(Kt(y)||Zt(y))return y=Ol(y,x.mode,j,null),y.return=x,y;if(typeof y.then=="function")return N(x,bi(y),j);if(y.$$typeof===lt)return N(x,ri(x,y),j);Si(x,y)}return null}function T(x,y,j,O){var G=y!==null?y.key:null;if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return G!==null?null:o(x,y,""+j,O);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case L:return j.key===G?m(x,y,j,O):null;case V:return j.key===G?z(x,y,j,O):null;case Yt:return G=j._init,j=G(j._payload),T(x,y,j,O)}if(Kt(j)||Zt(j))return G!==null?null:D(x,y,j,O,null);if(typeof j.then=="function")return T(x,y,bi(j),O);if(j.$$typeof===lt)return T(x,y,ri(x,j),O);Si(x,j)}return null}function E(x,y,j,O,G){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return x=x.get(j)||null,o(y,x,""+O,G);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case L:return x=x.get(O.key===null?j:O.key)||null,m(y,x,O,G);case V:return x=x.get(O.key===null?j:O.key)||null,z(y,x,O,G);case Yt:var it=O._init;return O=it(O._payload),E(x,y,j,O,G)}if(Kt(O)||Zt(O))return x=x.get(j)||null,D(y,x,O,G,null);if(typeof O.then=="function")return E(x,y,j,bi(O),G);if(O.$$typeof===lt)return E(x,y,j,ri(y,O),G);Si(y,O)}return null}function I(x,y,j,O){for(var G=null,it=null,Q=y,$=y=0,Gt=null;Q!==null&&$<j.length;$++){Q.index>$?(Gt=Q,Q=null):Gt=Q.sibling;var st=T(x,Q,j[$],O);if(st===null){Q===null&&(Q=Gt);break}t&&Q&&st.alternate===null&&e(x,Q),y=i(st,y,$),it===null?G=st:it.sibling=st,it=st,Q=Gt}if($===j.length)return l(x,Q),ft&&Bl(x,$),G;if(Q===null){for(;$<j.length;$++)Q=N(x,j[$],O),Q!==null&&(y=i(Q,y,$),it===null?G=Q:it.sibling=Q,it=Q);return ft&&Bl(x,$),G}for(Q=a(Q);$<j.length;$++)Gt=E(Q,x,$,j[$],O),Gt!==null&&(t&&Gt.alternate!==null&&Q.delete(Gt.key===null?$:Gt.key),y=i(Gt,y,$),it===null?G=Gt:it.sibling=Gt,it=Gt);return t&&Q.forEach(function(Tl){return e(x,Tl)}),ft&&Bl(x,$),G}function J(x,y,j,O){if(j==null)throw Error(s(151));for(var G=null,it=null,Q=y,$=y=0,Gt=null,st=j.next();Q!==null&&!st.done;$++,st=j.next()){Q.index>$?(Gt=Q,Q=null):Gt=Q.sibling;var Tl=T(x,Q,st.value,O);if(Tl===null){Q===null&&(Q=Gt);break}t&&Q&&Tl.alternate===null&&e(x,Q),y=i(Tl,y,$),it===null?G=Tl:it.sibling=Tl,it=Tl,Q=Gt}if(st.done)return l(x,Q),ft&&Bl(x,$),G;if(Q===null){for(;!st.done;$++,st=j.next())st=N(x,st.value,O),st!==null&&(y=i(st,y,$),it===null?G=st:it.sibling=st,it=st);return ft&&Bl(x,$),G}for(Q=a(Q);!st.done;$++,st=j.next())st=E(Q,x,$,st.value,O),st!==null&&(t&&st.alternate!==null&&Q.delete(st.key===null?$:st.key),y=i(st,y,$),it===null?G=st:it.sibling=st,it=st);return t&&Q.forEach(function(Gh){return e(x,Gh)}),ft&&Bl(x,$),G}function gt(x,y,j,O){if(typeof j=="object"&&j!==null&&j.type===Z&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case L:t:{for(var G=j.key;y!==null;){if(y.key===G){if(G=j.type,G===Z){if(y.tag===7){l(x,y.sibling),O=n(y,j.props.children),O.return=x,x=O;break t}}else if(y.elementType===G||typeof G=="object"&&G!==null&&G.$$typeof===Yt&&Xs(G)===y.type){l(x,y.sibling),O=n(y,j.props),fn(O,j),O.return=x,x=O;break t}l(x,y);break}else e(x,y);y=y.sibling}j.type===Z?(O=Ol(j.props.children,x.mode,O,j.key),O.return=x,x=O):(O=ai(j.type,j.key,j.props,null,x.mode,O),fn(O,j),O.return=x,x=O)}return r(x);case V:t:{for(G=j.key;y!==null;){if(y.key===G)if(y.tag===4&&y.stateNode.containerInfo===j.containerInfo&&y.stateNode.implementation===j.implementation){l(x,y.sibling),O=n(y,j.children||[]),O.return=x,x=O;break t}else{l(x,y);break}else e(x,y);y=y.sibling}O=Qu(j,x.mode,O),O.return=x,x=O}return r(x);case Yt:return G=j._init,j=G(j._payload),gt(x,y,j,O)}if(Kt(j))return I(x,y,j,O);if(Zt(j)){if(G=Zt(j),typeof G!="function")throw Error(s(150));return j=G.call(j),J(x,y,j,O)}if(typeof j.then=="function")return gt(x,y,bi(j),O);if(j.$$typeof===lt)return gt(x,y,ri(x,j),O);Si(x,j)}return typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint"?(j=""+j,y!==null&&y.tag===6?(l(x,y.sibling),O=n(y,j),O.return=x,x=O):(l(x,y),O=Xu(j,x.mode,O),O.return=x,x=O),r(x)):l(x,y)}return function(x,y,j,O){try{sn=0;var G=gt(x,y,j,O);return va=null,G}catch(Q){if(Q===tn||Q===oi)throw Q;var it=ce(29,Q,null,x.mode);return it.lanes=O,it.return=x,it}finally{}}}var ya=Qs(!0),Vs=Qs(!1),Se=B(null),Me=null;function ol(t){var e=t.alternate;H(Bt,Bt.current&1),H(Se,t),Me===null&&(e===null||ma.current!==null||e.memoizedState!==null)&&(Me=t)}function Zs(t){if(t.tag===22){if(H(Bt,Bt.current),H(Se,t),Me===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(Me=t)}}else sl()}function sl(){H(Bt,Bt.current),H(Se,Se.current)}function Qe(t){q(Se),Me===t&&(Me=null),q(Bt)}var Bt=B(0);function ji(t){for(var e=t;e!==null;){if(e.tag===13){var l=e.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||dc(l)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function zr(t,e,l,a){e=t.memoizedState,l=l(a,e),l=l==null?e:A({},e,l),t.memoizedState=l,t.lanes===0&&(t.updateQueue.baseState=l)}var Tr={enqueueSetState:function(t,e,l){t=t._reactInternals;var a=de(),n=ul(a);n.payload=e,l!=null&&(n.callback=l),e=rl(t,n,a),e!==null&&(me(e,t,a),ln(e,t,a))},enqueueReplaceState:function(t,e,l){t=t._reactInternals;var a=de(),n=ul(a);n.tag=1,n.payload=e,l!=null&&(n.callback=l),e=rl(t,n,a),e!==null&&(me(e,t,a),ln(e,t,a))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var l=de(),a=ul(l);a.tag=2,e!=null&&(a.callback=e),e=rl(t,a,l),e!==null&&(me(e,t,l),ln(e,t,l))}};function Ks(t,e,l,a,n,i,r){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,i,r):e.prototype&&e.prototype.isPureReactComponent?!Za(l,a)||!Za(n,i):!0}function Js(t,e,l,a){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(l,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(l,a),e.state!==t&&Tr.enqueueReplaceState(e,e.state,null)}function kl(t,e){var l=e;if("ref"in e){l={};for(var a in e)a!=="ref"&&(l[a]=e[a])}if(t=t.defaultProps){l===e&&(l=A({},l));for(var n in t)l[n]===void 0&&(l[n]=t[n])}return l}var zi=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Ws(t){zi(t)}function $s(t){console.error(t)}function Fs(t){zi(t)}function Ti(t,e){try{var l=t.onUncaughtError;l(e.value,{componentStack:e.stack})}catch(a){setTimeout(function(){throw a})}}function Is(t,e,l){try{var a=t.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Er(t,e,l){return l=ul(l),l.tag=3,l.payload={element:null},l.callback=function(){Ti(t,e)},l}function Ps(t){return t=ul(t),t.tag=3,t}function tf(t,e,l,a){var n=l.type.getDerivedStateFromError;if(typeof n=="function"){var i=a.value;t.payload=function(){return n(i)},t.callback=function(){Is(e,l,a)}}var r=l.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(t.callback=function(){Is(e,l,a),typeof n!="function"&&(gl===null?gl=new Set([this]):gl.add(this));var o=a.stack;this.componentDidCatch(a.value,{componentStack:o!==null?o:""})})}function Gm(t,e,l,a,n){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(e=l.alternate,e!==null&&Fa(e,l,n,!0),l=Se.current,l!==null){switch(l.tag){case 13:return Me===null?Wr():l.alternate===null&&At===0&&(At=3),l.flags&=-257,l.flags|=65536,l.lanes=n,a===tr?l.flags|=16384:(e=l.updateQueue,e===null?l.updateQueue=new Set([a]):e.add(a),Fr(t,a,n)),!1;case 22:return l.flags|=65536,a===tr?l.flags|=16384:(e=l.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=e):(l=e.retryQueue,l===null?e.retryQueue=new Set([a]):l.add(a)),Fr(t,a,n)),!1}throw Error(s(435,l.tag))}return Fr(t,a,n),Wr(),!1}if(ft)return e=Se.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=n,a!==Ku&&(t=Error(s(422),{cause:a}),$a(ve(t,l)))):(a!==Ku&&(e=Error(s(423),{cause:a}),$a(ve(e,l))),t=t.current.alternate,t.flags|=65536,n&=-n,t.lanes|=n,a=ve(a,l),n=Er(t.stateNode,a,n),ar(t,n),At!==4&&(At=2)),!1;var i=Error(s(520),{cause:a});if(i=ve(i,l),yn===null?yn=[i]:yn.push(i),At!==4&&(At=2),e===null)return!0;a=ve(a,l),l=e;do{switch(l.tag){case 3:return l.flags|=65536,t=n&-n,l.lanes|=t,t=Er(l.stateNode,a,t),ar(l,t),!1;case 1:if(e=l.type,i=l.stateNode,(l.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(gl===null||!gl.has(i))))return l.flags|=65536,n&=-n,l.lanes|=n,n=Ps(n),tf(n,t,l,a),ar(l,n),!1}l=l.return}while(l!==null);return!1}var ef=Error(s(461)),qt=!1;function Xt(t,e,l,a){e.child=t===null?Vs(e,null,l,a):ya(e,t.child,l,a)}function lf(t,e,l,a,n){l=l.render;var i=e.ref;if("ref"in a){var r={};for(var o in a)o!=="ref"&&(r[o]=a[o])}else r=a;return Yl(e),a=cr(t,e,l,r,i,n),o=or(),t!==null&&!qt?(sr(t,e,n),Ve(t,e,n)):(ft&&o&&Vu(e),e.flags|=1,Xt(t,e,a,n),e.child)}function af(t,e,l,a,n){if(t===null){var i=l.type;return typeof i=="function"&&!Gu(i)&&i.defaultProps===void 0&&l.compare===null?(e.tag=15,e.type=i,nf(t,e,i,a,n)):(t=ai(l.type,null,a,e,e.mode,n),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!Nr(t,n)){var r=i.memoizedProps;if(l=l.compare,l=l!==null?l:Za,l(r,a)&&t.ref===e.ref)return Ve(t,e,n)}return e.flags|=1,t=Ye(i,a),t.ref=e.ref,t.return=e,e.child=t}function nf(t,e,l,a,n){if(t!==null){var i=t.memoizedProps;if(Za(i,a)&&t.ref===e.ref)if(qt=!1,e.pendingProps=a=i,Nr(t,n))(t.flags&131072)!==0&&(qt=!0);else return e.lanes=t.lanes,Ve(t,e,n)}return Ar(t,e,l,a,n)}function uf(t,e,l){var a=e.pendingProps,n=a.children,i=t!==null?t.memoizedState:null;if(a.mode==="hidden"){if((e.flags&128)!==0){if(a=i!==null?i.baseLanes|l:l,t!==null){for(n=e.child=t.child,i=0;n!==null;)i=i|n.lanes|n.childLanes,n=n.sibling;e.childLanes=i&~a}else e.childLanes=0,e.child=null;return rf(t,e,a,l)}if((l&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&ci(e,i!==null?i.cachePool:null),i!==null?ns(e,i):ir(),Zs(e);else return e.lanes=e.childLanes=536870912,rf(t,e,i!==null?i.baseLanes|l:l,l)}else i!==null?(ci(e,i.cachePool),ns(e,i),sl(),e.memoizedState=null):(t!==null&&ci(e,null),ir(),sl());return Xt(t,e,n,l),e.child}function rf(t,e,l,a){var n=Pu();return n=n===null?null:{parent:Nt._currentValue,pool:n},e.memoizedState={baseLanes:l,cachePool:n},t!==null&&ci(e,null),ir(),Zs(e),t!==null&&Fa(t,e,a,!0),null}function Ei(t,e){var l=e.ref;if(l===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(s(284));(t===null||t.ref!==l)&&(e.flags|=4194816)}}function Ar(t,e,l,a,n){return Yl(e),l=cr(t,e,l,a,void 0,n),a=or(),t!==null&&!qt?(sr(t,e,n),Ve(t,e,n)):(ft&&a&&Vu(e),e.flags|=1,Xt(t,e,l,n),e.child)}function cf(t,e,l,a,n,i){return Yl(e),e.updateQueue=null,l=us(e,a,l,n),is(t),a=or(),t!==null&&!qt?(sr(t,e,i),Ve(t,e,i)):(ft&&a&&Vu(e),e.flags|=1,Xt(t,e,l,i),e.child)}function of(t,e,l,a,n){if(Yl(e),e.stateNode===null){var i=ca,r=l.contextType;typeof r=="object"&&r!==null&&(i=Wt(r)),i=new l(a,i),e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Tr,e.stateNode=i,i._reactInternals=e,i=e.stateNode,i.props=a,i.state=e.memoizedState,i.refs={},er(e),r=l.contextType,i.context=typeof r=="object"&&r!==null?Wt(r):ca,i.state=e.memoizedState,r=l.getDerivedStateFromProps,typeof r=="function"&&(zr(e,l,r,a),i.state=e.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(r=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),r!==i.state&&Tr.enqueueReplaceState(i,i.state,null),nn(e,a,i,n),an(),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308),a=!0}else if(t===null){i=e.stateNode;var o=e.memoizedProps,m=kl(l,o);i.props=m;var z=i.context,D=l.contextType;r=ca,typeof D=="object"&&D!==null&&(r=Wt(D));var N=l.getDerivedStateFromProps;D=typeof N=="function"||typeof i.getSnapshotBeforeUpdate=="function",o=e.pendingProps!==o,D||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o||z!==r)&&Js(e,i,a,r),il=!1;var T=e.memoizedState;i.state=T,nn(e,a,i,n),an(),z=e.memoizedState,o||T!==z||il?(typeof N=="function"&&(zr(e,l,N,a),z=e.memoizedState),(m=il||Ks(e,l,m,a,T,z,r))?(D||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(e.flags|=4194308)):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=z),i.props=a,i.state=z,i.context=r,a=m):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{i=e.stateNode,lr(t,e),r=e.memoizedProps,D=kl(l,r),i.props=D,N=e.pendingProps,T=i.context,z=l.contextType,m=ca,typeof z=="object"&&z!==null&&(m=Wt(z)),o=l.getDerivedStateFromProps,(z=typeof o=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(r!==N||T!==m)&&Js(e,i,a,m),il=!1,T=e.memoizedState,i.state=T,nn(e,a,i,n),an();var E=e.memoizedState;r!==N||T!==E||il||t!==null&&t.dependencies!==null&&ui(t.dependencies)?(typeof o=="function"&&(zr(e,l,o,a),E=e.memoizedState),(D=il||Ks(e,l,D,a,T,E,m)||t!==null&&t.dependencies!==null&&ui(t.dependencies))?(z||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,E,m),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,E,m)),typeof i.componentDidUpdate=="function"&&(e.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof i.componentDidUpdate!="function"||r===t.memoizedProps&&T===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||r===t.memoizedProps&&T===t.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=E),i.props=a,i.state=E,i.context=m,a=D):(typeof i.componentDidUpdate!="function"||r===t.memoizedProps&&T===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||r===t.memoizedProps&&T===t.memoizedState||(e.flags|=1024),a=!1)}return i=a,Ei(t,e),a=(e.flags&128)!==0,i||a?(i=e.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:i.render(),e.flags|=1,t!==null&&a?(e.child=ya(e,t.child,null,n),e.child=ya(e,null,l,n)):Xt(t,e,l,n),e.memoizedState=i.state,t=e.child):t=Ve(t,e,n),t}function sf(t,e,l,a){return Wa(),e.flags|=256,Xt(t,e,l,a),e.child}var Cr={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Rr(t){return{baseLanes:t,cachePool:$o()}}function wr(t,e,l){return t=t!==null?t.childLanes&~l:0,e&&(t|=je),t}function ff(t,e,l){var a=e.pendingProps,n=!1,i=(e.flags&128)!==0,r;if((r=i)||(r=t!==null&&t.memoizedState===null?!1:(Bt.current&2)!==0),r&&(n=!0,e.flags&=-129),r=(e.flags&32)!==0,e.flags&=-33,t===null){if(ft){if(n?ol(e):sl(),ft){var o=Et,m;if(m=o){t:{for(m=o,o=De;m.nodeType!==8;){if(!o){o=null;break t}if(m=Ae(m.nextSibling),m===null){o=null;break t}}o=m}o!==null?(e.memoizedState={dehydrated:o,treeContext:Nl!==null?{id:Le,overflow:qe}:null,retryLane:536870912,hydrationErrors:null},m=ce(18,null,null,0),m.stateNode=o,m.return=e,e.child=m,Ft=e,Et=null,m=!0):m=!1}m||Ul(e)}if(o=e.memoizedState,o!==null&&(o=o.dehydrated,o!==null))return dc(o)?e.lanes=32:e.lanes=536870912,null;Qe(e)}return o=a.children,a=a.fallback,n?(sl(),n=e.mode,o=Ai({mode:"hidden",children:o},n),a=Ol(a,n,l,null),o.return=e,a.return=e,o.sibling=a,e.child=o,n=e.child,n.memoizedState=Rr(l),n.childLanes=wr(t,r,l),e.memoizedState=Cr,a):(ol(e),Dr(e,o))}if(m=t.memoizedState,m!==null&&(o=m.dehydrated,o!==null)){if(i)e.flags&256?(ol(e),e.flags&=-257,e=Mr(t,e,l)):e.memoizedState!==null?(sl(),e.child=t.child,e.flags|=128,e=null):(sl(),n=a.fallback,o=e.mode,a=Ai({mode:"visible",children:a.children},o),n=Ol(n,o,l,null),n.flags|=2,a.return=e,n.return=e,a.sibling=n,e.child=a,ya(e,t.child,null,l),a=e.child,a.memoizedState=Rr(l),a.childLanes=wr(t,r,l),e.memoizedState=Cr,e=n);else if(ol(e),dc(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var z=r.dgst;r=z,a=Error(s(419)),a.stack="",a.digest=r,$a({value:a,source:null,stack:null}),e=Mr(t,e,l)}else if(qt||Fa(t,e,l,!1),r=(l&t.childLanes)!==0,qt||r){if(r=xt,r!==null&&(a=l&-l,a=(a&42)!==0?1:mu(a),a=(a&(r.suspendedLanes|l))!==0?0:a,a!==0&&a!==m.retryLane))throw m.retryLane=a,ra(t,a),me(r,t,a),ef;o.data==="$?"||Wr(),e=Mr(t,e,l)}else o.data==="$?"?(e.flags|=192,e.child=t.child,e=null):(t=m.treeContext,Et=Ae(o.nextSibling),Ft=e,ft=!0,_l=null,De=!1,t!==null&&(xe[be++]=Le,xe[be++]=qe,xe[be++]=Nl,Le=t.id,qe=t.overflow,Nl=e),e=Dr(e,a.children),e.flags|=4096);return e}return n?(sl(),n=a.fallback,o=e.mode,m=t.child,z=m.sibling,a=Ye(m,{mode:"hidden",children:a.children}),a.subtreeFlags=m.subtreeFlags&65011712,z!==null?n=Ye(z,n):(n=Ol(n,o,l,null),n.flags|=2),n.return=e,a.return=e,a.sibling=n,e.child=a,a=n,n=e.child,o=t.child.memoizedState,o===null?o=Rr(l):(m=o.cachePool,m!==null?(z=Nt._currentValue,m=m.parent!==z?{parent:z,pool:z}:m):m=$o(),o={baseLanes:o.baseLanes|l,cachePool:m}),n.memoizedState=o,n.childLanes=wr(t,r,l),e.memoizedState=Cr,a):(ol(e),l=t.child,t=l.sibling,l=Ye(l,{mode:"visible",children:a.children}),l.return=e,l.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=l,e.memoizedState=null,l)}function Dr(t,e){return e=Ai({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Ai(t,e){return t=ce(22,t,null,e),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Mr(t,e,l){return ya(e,t.child,null,l),t=Dr(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function df(t,e,l){t.lanes|=e;var a=t.alternate;a!==null&&(a.lanes|=e),Wu(t.return,e,l)}function Or(t,e,l,a,n){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:n}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=a,i.tail=l,i.tailMode=n)}function mf(t,e,l){var a=e.pendingProps,n=a.revealOrder,i=a.tail;if(Xt(t,e,a.children,l),a=Bt.current,(a&2)!==0)a=a&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&df(t,l,e);else if(t.tag===19)df(t,l,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}a&=1}switch(H(Bt,a),n){case"forwards":for(l=e.child,n=null;l!==null;)t=l.alternate,t!==null&&ji(t)===null&&(n=l),l=l.sibling;l=n,l===null?(n=e.child,e.child=null):(n=l.sibling,l.sibling=null),Or(e,!1,n,l,i);break;case"backwards":for(l=null,n=e.child,e.child=null;n!==null;){if(t=n.alternate,t!==null&&ji(t)===null){e.child=n;break}t=n.sibling,n.sibling=l,l=n,n=t}Or(e,!0,l,null,i);break;case"together":Or(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ve(t,e,l){if(t!==null&&(e.dependencies=t.dependencies),pl|=e.lanes,(l&e.childLanes)===0)if(t!==null){if(Fa(t,e,l,!1),(l&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(s(153));if(e.child!==null){for(t=e.child,l=Ye(t,t.pendingProps),e.child=l,l.return=e;t.sibling!==null;)t=t.sibling,l=l.sibling=Ye(t,t.pendingProps),l.return=e;l.sibling=null}return e.child}function Nr(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&ui(t)))}function Xm(t,e,l){switch(e.tag){case 3:bt(e,e.stateNode.containerInfo),nl(e,Nt,t.memoizedState.cache),Wa();break;case 27:case 5:cu(e);break;case 4:bt(e,e.stateNode.containerInfo);break;case 10:nl(e,e.type,e.memoizedProps.value);break;case 13:var a=e.memoizedState;if(a!==null)return a.dehydrated!==null?(ol(e),e.flags|=128,null):(l&e.child.childLanes)!==0?ff(t,e,l):(ol(e),t=Ve(t,e,l),t!==null?t.sibling:null);ol(e);break;case 19:var n=(t.flags&128)!==0;if(a=(l&e.childLanes)!==0,a||(Fa(t,e,l,!1),a=(l&e.childLanes)!==0),n){if(a)return mf(t,e,l);e.flags|=128}if(n=e.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),H(Bt,Bt.current),a)break;return null;case 22:case 23:return e.lanes=0,uf(t,e,l);case 24:nl(e,Nt,t.memoizedState.cache)}return Ve(t,e,l)}function hf(t,e,l){if(t!==null)if(t.memoizedProps!==e.pendingProps)qt=!0;else{if(!Nr(t,l)&&(e.flags&128)===0)return qt=!1,Xm(t,e,l);qt=(t.flags&131072)!==0}else qt=!1,ft&&(e.flags&1048576)!==0&&Xo(e,ii,e.index);switch(e.lanes=0,e.tag){case 16:t:{t=e.pendingProps;var a=e.elementType,n=a._init;if(a=n(a._payload),e.type=a,typeof a=="function")Gu(a)?(t=kl(a,t),e.tag=1,e=of(null,e,a,t,l)):(e.tag=0,e=Ar(null,e,a,t,l));else{if(a!=null){if(n=a.$$typeof,n===jt){e.tag=11,e=lf(null,e,a,t,l);break t}else if(n===Ot){e.tag=14,e=af(null,e,a,t,l);break t}}throw e=Al(a)||a,Error(s(306,e,""))}}return e;case 0:return Ar(t,e,e.type,e.pendingProps,l);case 1:return a=e.type,n=kl(a,e.pendingProps),of(t,e,a,n,l);case 3:t:{if(bt(e,e.stateNode.containerInfo),t===null)throw Error(s(387));a=e.pendingProps;var i=e.memoizedState;n=i.element,lr(t,e),nn(e,a,null,l);var r=e.memoizedState;if(a=r.cache,nl(e,Nt,a),a!==i.cache&&$u(e,[Nt],l,!0),an(),a=r.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:r.cache},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){e=sf(t,e,a,l);break t}else if(a!==n){n=ve(Error(s(424)),e),$a(n),e=sf(t,e,a,l);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Et=Ae(t.firstChild),Ft=e,ft=!0,_l=null,De=!0,l=Vs(e,null,a,l),e.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(Wa(),a===n){e=Ve(t,e,l);break t}Xt(t,e,a,l)}e=e.child}return e;case 26:return Ei(t,e),t===null?(l=yd(e.type,null,e.pendingProps,null))?e.memoizedState=l:ft||(l=e.type,t=e.pendingProps,a=qi(et.current).createElement(l),a[Jt]=e,a[It]=t,Vt(a,l,t),Lt(a),e.stateNode=a):e.memoizedState=yd(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return cu(e),t===null&&ft&&(a=e.stateNode=pd(e.type,e.pendingProps,et.current),Ft=e,De=!0,n=Et,xl(e.type)?(mc=n,Et=Ae(a.firstChild)):Et=n),Xt(t,e,e.pendingProps.children,l),Ei(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&ft&&((n=a=Et)&&(a=vh(a,e.type,e.pendingProps,De),a!==null?(e.stateNode=a,Ft=e,Et=Ae(a.firstChild),De=!1,n=!0):n=!1),n||Ul(e)),cu(e),n=e.type,i=e.pendingProps,r=t!==null?t.memoizedProps:null,a=i.children,oc(n,i)?a=null:r!==null&&oc(n,r)&&(e.flags|=32),e.memoizedState!==null&&(n=cr(t,e,_m,null,null,l),Cn._currentValue=n),Ei(t,e),Xt(t,e,a,l),e.child;case 6:return t===null&&ft&&((t=l=Et)&&(l=yh(l,e.pendingProps,De),l!==null?(e.stateNode=l,Ft=e,Et=null,t=!0):t=!1),t||Ul(e)),null;case 13:return ff(t,e,l);case 4:return bt(e,e.stateNode.containerInfo),a=e.pendingProps,t===null?e.child=ya(e,null,a,l):Xt(t,e,a,l),e.child;case 11:return lf(t,e,e.type,e.pendingProps,l);case 7:return Xt(t,e,e.pendingProps,l),e.child;case 8:return Xt(t,e,e.pendingProps.children,l),e.child;case 12:return Xt(t,e,e.pendingProps.children,l),e.child;case 10:return a=e.pendingProps,nl(e,e.type,a.value),Xt(t,e,a.children,l),e.child;case 9:return n=e.type._context,a=e.pendingProps.children,Yl(e),n=Wt(n),a=a(n),e.flags|=1,Xt(t,e,a,l),e.child;case 14:return af(t,e,e.type,e.pendingProps,l);case 15:return nf(t,e,e.type,e.pendingProps,l);case 19:return mf(t,e,l);case 31:return a=e.pendingProps,l=e.mode,a={mode:a.mode,children:a.children},t===null?(l=Ai(a,l),l.ref=e.ref,e.child=l,l.return=e,e=l):(l=Ye(t.child,a),l.ref=e.ref,e.child=l,l.return=e,e=l),e;case 22:return uf(t,e,l);case 24:return Yl(e),a=Wt(Nt),t===null?(n=Pu(),n===null&&(n=xt,i=Fu(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=l),n=i),e.memoizedState={parent:a,cache:n},er(e),nl(e,Nt,n)):((t.lanes&l)!==0&&(lr(t,e),nn(e,null,null,l),an()),n=t.memoizedState,i=e.memoizedState,n.parent!==a?(n={parent:a,cache:a},e.memoizedState=n,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=n),nl(e,Nt,a)):(a=i.cache,nl(e,Nt,a),a!==n.cache&&$u(e,[Nt],l,!0))),Xt(t,e,e.pendingProps.children,l),e.child;case 29:throw e.pendingProps}throw Error(s(156,e.tag))}function Ze(t){t.flags|=4}function pf(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!zd(e)){if(e=Se.current,e!==null&&((ct&4194048)===ct?Me!==null:(ct&62914560)!==ct&&(ct&536870912)===0||e!==Me))throw en=tr,Fo;t.flags|=8192}}function Ci(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Vc():536870912,t.lanes|=e,ja|=e)}function dn(t,e){if(!ft)switch(t.tailMode){case"hidden":e=t.tail;for(var l=null;e!==null;)e.alternate!==null&&(l=e),e=e.sibling;l===null?t.tail=null:l.sibling=null;break;case"collapsed":l=t.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function zt(t){var e=t.alternate!==null&&t.alternate.child===t.child,l=0,a=0;if(e)for(var n=t.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags&65011712,a|=n.flags&65011712,n.return=t,n=n.sibling;else for(n=t.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags,a|=n.flags,n.return=t,n=n.sibling;return t.subtreeFlags|=a,t.childLanes=l,e}function Qm(t,e,l){var a=e.pendingProps;switch(Zu(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return zt(e),null;case 1:return zt(e),null;case 3:return l=e.stateNode,a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),Ge(Nt),tl(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(Ja(e)?Ze(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Zo())),zt(e),null;case 26:return l=e.memoizedState,t===null?(Ze(e),l!==null?(zt(e),pf(e,l)):(zt(e),e.flags&=-16777217)):l?l!==t.memoizedState?(Ze(e),zt(e),pf(e,l)):(zt(e),e.flags&=-16777217):(t.memoizedProps!==a&&Ze(e),zt(e),e.flags&=-16777217),null;case 27:Yn(e),l=et.current;var n=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==a&&Ze(e);else{if(!a){if(e.stateNode===null)throw Error(s(166));return zt(e),null}t=K.current,Ja(e)?Qo(e):(t=pd(n,a,l),e.stateNode=t,Ze(e))}return zt(e),null;case 5:if(Yn(e),l=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&Ze(e);else{if(!a){if(e.stateNode===null)throw Error(s(166));return zt(e),null}if(t=K.current,Ja(e))Qo(e);else{switch(n=qi(et.current),t){case 1:t=n.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:t=n.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":t=n.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":t=n.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":t=n.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof a.is=="string"?n.createElement("select",{is:a.is}):n.createElement("select"),a.multiple?t.multiple=!0:a.size&&(t.size=a.size);break;default:t=typeof a.is=="string"?n.createElement(l,{is:a.is}):n.createElement(l)}}t[Jt]=e,t[It]=a;t:for(n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.tag!==27&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;n=n.return}n.sibling.return=n.return,n=n.sibling}e.stateNode=t;t:switch(Vt(t,l,a),l){case"button":case"input":case"select":case"textarea":t=!!a.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&Ze(e)}}return zt(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==a&&Ze(e);else{if(typeof a!="string"&&e.stateNode===null)throw Error(s(166));if(t=et.current,Ja(e)){if(t=e.stateNode,l=e.memoizedProps,a=null,n=Ft,n!==null)switch(n.tag){case 27:case 5:a=n.memoizedProps}t[Jt]=e,t=!!(t.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||cd(t.nodeValue,l)),t||Ul(e)}else t=qi(t).createTextNode(a),t[Jt]=e,e.stateNode=t}return zt(e),null;case 13:if(a=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(n=Ja(e),a!==null&&a.dehydrated!==null){if(t===null){if(!n)throw Error(s(318));if(n=e.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(s(317));n[Jt]=e}else Wa(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;zt(e),n=!1}else n=Zo(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),n=!0;if(!n)return e.flags&256?(Qe(e),e):(Qe(e),null)}if(Qe(e),(e.flags&128)!==0)return e.lanes=l,e;if(l=a!==null,t=t!==null&&t.memoizedState!==null,l){a=e.child,n=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(n=a.alternate.memoizedState.cachePool.pool);var i=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==n&&(a.flags|=2048)}return l!==t&&l&&(e.child.flags|=8192),Ci(e,e.updateQueue),zt(e),null;case 4:return tl(),t===null&&nc(e.stateNode.containerInfo),zt(e),null;case 10:return Ge(e.type),zt(e),null;case 19:if(q(Bt),n=e.memoizedState,n===null)return zt(e),null;if(a=(e.flags&128)!==0,i=n.rendering,i===null)if(a)dn(n,!1);else{if(At!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(i=ji(t),i!==null){for(e.flags|=128,dn(n,!1),t=i.updateQueue,e.updateQueue=t,Ci(e,t),e.subtreeFlags=0,t=l,l=e.child;l!==null;)Go(l,t),l=l.sibling;return H(Bt,Bt.current&1|2),e.child}t=t.sibling}n.tail!==null&&we()>Di&&(e.flags|=128,a=!0,dn(n,!1),e.lanes=4194304)}else{if(!a)if(t=ji(i),t!==null){if(e.flags|=128,a=!0,t=t.updateQueue,e.updateQueue=t,Ci(e,t),dn(n,!0),n.tail===null&&n.tailMode==="hidden"&&!i.alternate&&!ft)return zt(e),null}else 2*we()-n.renderingStartTime>Di&&l!==536870912&&(e.flags|=128,a=!0,dn(n,!1),e.lanes=4194304);n.isBackwards?(i.sibling=e.child,e.child=i):(t=n.last,t!==null?t.sibling=i:e.child=i,n.last=i)}return n.tail!==null?(e=n.tail,n.rendering=e,n.tail=e.sibling,n.renderingStartTime=we(),e.sibling=null,t=Bt.current,H(Bt,a?t&1|2:t&1),e):(zt(e),null);case 22:case 23:return Qe(e),ur(),a=e.memoizedState!==null,t!==null?t.memoizedState!==null!==a&&(e.flags|=8192):a&&(e.flags|=8192),a?(l&536870912)!==0&&(e.flags&128)===0&&(zt(e),e.subtreeFlags&6&&(e.flags|=8192)):zt(e),l=e.updateQueue,l!==null&&Ci(e,l.retryQueue),l=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==l&&(e.flags|=2048),t!==null&&q(Ll),null;case 24:return l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),Ge(Nt),zt(e),null;case 25:return null;case 30:return null}throw Error(s(156,e.tag))}function Vm(t,e){switch(Zu(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ge(Nt),tl(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Yn(e),null;case 13:if(Qe(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(s(340));Wa()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return q(Bt),null;case 4:return tl(),null;case 10:return Ge(e.type),null;case 22:case 23:return Qe(e),ur(),t!==null&&q(Ll),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Ge(Nt),null;case 25:return null;default:return null}}function gf(t,e){switch(Zu(e),e.tag){case 3:Ge(Nt),tl();break;case 26:case 27:case 5:Yn(e);break;case 4:tl();break;case 13:Qe(e);break;case 19:q(Bt);break;case 10:Ge(e.type);break;case 22:case 23:Qe(e),ur(),t!==null&&q(Ll);break;case 24:Ge(Nt)}}function mn(t,e){try{var l=e.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var n=a.next;l=n;do{if((l.tag&t)===t){a=void 0;var i=l.create,r=l.inst;a=i(),r.destroy=a}l=l.next}while(l!==n)}}catch(o){yt(e,e.return,o)}}function fl(t,e,l){try{var a=e.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&t)===t){var r=a.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,n=e;var m=l,z=o;try{z()}catch(D){yt(n,m,D)}}}a=a.next}while(a!==i)}}catch(D){yt(e,e.return,D)}}function vf(t){var e=t.updateQueue;if(e!==null){var l=t.stateNode;try{as(e,l)}catch(a){yt(t,t.return,a)}}}function yf(t,e,l){l.props=kl(t.type,t.memoizedProps),l.state=t.memoizedState;try{l.componentWillUnmount()}catch(a){yt(t,e,a)}}function hn(t,e){try{var l=t.ref;if(l!==null){switch(t.tag){case 26:case 27:case 5:var a=t.stateNode;break;case 30:a=t.stateNode;break;default:a=t.stateNode}typeof l=="function"?t.refCleanup=l(a):l.current=a}}catch(n){yt(t,e,n)}}function Oe(t,e){var l=t.ref,a=t.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(n){yt(t,e,n)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(n){yt(t,e,n)}else l.current=null}function xf(t){var e=t.type,l=t.memoizedProps,a=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break t;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(n){yt(t,t.return,n)}}function Br(t,e,l){try{var a=t.stateNode;dh(a,t.type,l,e),a[It]=e}catch(n){yt(t,t.return,n)}}function bf(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&xl(t.type)||t.tag===4}function _r(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||bf(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&xl(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ur(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(t,e):(e=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,e.appendChild(t),l=l._reactRootContainer,l!=null||e.onclick!==null||(e.onclick=Li));else if(a!==4&&(a===27&&xl(t.type)&&(l=t.stateNode,e=null),t=t.child,t!==null))for(Ur(t,e,l),t=t.sibling;t!==null;)Ur(t,e,l),t=t.sibling}function Ri(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?l.insertBefore(t,e):l.appendChild(t);else if(a!==4&&(a===27&&xl(t.type)&&(l=t.stateNode),t=t.child,t!==null))for(Ri(t,e,l),t=t.sibling;t!==null;)Ri(t,e,l),t=t.sibling}function Sf(t){var e=t.stateNode,l=t.memoizedProps;try{for(var a=t.type,n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Vt(e,a,l),e[Jt]=t,e[It]=l}catch(i){yt(t,t.return,i)}}var Ke=!1,wt=!1,Hr=!1,jf=typeof WeakSet=="function"?WeakSet:Set,kt=null;function Zm(t,e){if(t=t.containerInfo,rc=Zi,t=Oo(t),_u(t)){if("selectionStart"in t)var l={start:t.selectionStart,end:t.selectionEnd};else t:{l=(l=t.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var n=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{l.nodeType,i.nodeType}catch{l=null;break t}var r=0,o=-1,m=-1,z=0,D=0,N=t,T=null;e:for(;;){for(var E;N!==l||n!==0&&N.nodeType!==3||(o=r+n),N!==i||a!==0&&N.nodeType!==3||(m=r+a),N.nodeType===3&&(r+=N.nodeValue.length),(E=N.firstChild)!==null;)T=N,N=E;for(;;){if(N===t)break e;if(T===l&&++z===n&&(o=r),T===i&&++D===a&&(m=r),(E=N.nextSibling)!==null)break;N=T,T=N.parentNode}N=E}l=o===-1||m===-1?null:{start:o,end:m}}else l=null}l=l||{start:0,end:0}}else l=null;for(cc={focusedElem:t,selectionRange:l},Zi=!1,kt=e;kt!==null;)if(e=kt,t=e.child,(e.subtreeFlags&1024)!==0&&t!==null)t.return=e,kt=t;else for(;kt!==null;){switch(e=kt,i=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&i!==null){t=void 0,l=e,n=i.memoizedProps,i=i.memoizedState,a=l.stateNode;try{var I=kl(l.type,n,l.elementType===l.type);t=a.getSnapshotBeforeUpdate(I,i),a.__reactInternalSnapshotBeforeUpdate=t}catch(J){yt(l,l.return,J)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,l=t.nodeType,l===9)fc(t);else if(l===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":fc(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=e.sibling,t!==null){t.return=e.return,kt=t;break}kt=e.return}}function zf(t,e,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:dl(t,l),a&4&&mn(5,l);break;case 1:if(dl(t,l),a&4)if(t=l.stateNode,e===null)try{t.componentDidMount()}catch(r){yt(l,l.return,r)}else{var n=kl(l.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(n,e,t.__reactInternalSnapshotBeforeUpdate)}catch(r){yt(l,l.return,r)}}a&64&&vf(l),a&512&&hn(l,l.return);break;case 3:if(dl(t,l),a&64&&(t=l.updateQueue,t!==null)){if(e=null,l.child!==null)switch(l.child.tag){case 27:case 5:e=l.child.stateNode;break;case 1:e=l.child.stateNode}try{as(t,e)}catch(r){yt(l,l.return,r)}}break;case 27:e===null&&a&4&&Sf(l);case 26:case 5:dl(t,l),e===null&&a&4&&xf(l),a&512&&hn(l,l.return);break;case 12:dl(t,l);break;case 13:dl(t,l),a&4&&Af(t,l),a&64&&(t=l.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(l=eh.bind(null,l),xh(t,l))));break;case 22:if(a=l.memoizedState!==null||Ke,!a){e=e!==null&&e.memoizedState!==null||wt,n=Ke;var i=wt;Ke=a,(wt=e)&&!i?ml(t,l,(l.subtreeFlags&8772)!==0):dl(t,l),Ke=n,wt=i}break;case 30:break;default:dl(t,l)}}function Tf(t){var e=t.alternate;e!==null&&(t.alternate=null,Tf(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&gu(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var St=null,ee=!1;function Je(t,e,l){for(l=l.child;l!==null;)Ef(t,e,l),l=l.sibling}function Ef(t,e,l){if(ie&&typeof ie.onCommitFiberUnmount=="function")try{ie.onCommitFiberUnmount(Ba,l)}catch{}switch(l.tag){case 26:wt||Oe(l,e),Je(t,e,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:wt||Oe(l,e);var a=St,n=ee;xl(l.type)&&(St=l.stateNode,ee=!1),Je(t,e,l),zn(l.stateNode),St=a,ee=n;break;case 5:wt||Oe(l,e);case 6:if(a=St,n=ee,St=null,Je(t,e,l),St=a,ee=n,St!==null)if(ee)try{(St.nodeType===9?St.body:St.nodeName==="HTML"?St.ownerDocument.body:St).removeChild(l.stateNode)}catch(i){yt(l,e,i)}else try{St.removeChild(l.stateNode)}catch(i){yt(l,e,i)}break;case 18:St!==null&&(ee?(t=St,md(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,l.stateNode),Mn(t)):md(St,l.stateNode));break;case 4:a=St,n=ee,St=l.stateNode.containerInfo,ee=!0,Je(t,e,l),St=a,ee=n;break;case 0:case 11:case 14:case 15:wt||fl(2,l,e),wt||fl(4,l,e),Je(t,e,l);break;case 1:wt||(Oe(l,e),a=l.stateNode,typeof a.componentWillUnmount=="function"&&yf(l,e,a)),Je(t,e,l);break;case 21:Je(t,e,l);break;case 22:wt=(a=wt)||l.memoizedState!==null,Je(t,e,l),wt=a;break;default:Je(t,e,l)}}function Af(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Mn(t)}catch(l){yt(e,e.return,l)}}function Km(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new jf),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new jf),e;default:throw Error(s(435,t.tag))}}function Yr(t,e){var l=Km(t);e.forEach(function(a){var n=lh.bind(null,t,a);l.has(a)||(l.add(a),a.then(n,n))})}function oe(t,e){var l=e.deletions;if(l!==null)for(var a=0;a<l.length;a++){var n=l[a],i=t,r=e,o=r;t:for(;o!==null;){switch(o.tag){case 27:if(xl(o.type)){St=o.stateNode,ee=!1;break t}break;case 5:St=o.stateNode,ee=!1;break t;case 3:case 4:St=o.stateNode.containerInfo,ee=!0;break t}o=o.return}if(St===null)throw Error(s(160));Ef(i,r,n),St=null,ee=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)Cf(e,t),e=e.sibling}var Ee=null;function Cf(t,e){var l=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:oe(e,t),se(t),a&4&&(fl(3,t,t.return),mn(3,t),fl(5,t,t.return));break;case 1:oe(e,t),se(t),a&512&&(wt||l===null||Oe(l,l.return)),a&64&&Ke&&(t=t.updateQueue,t!==null&&(a=t.callbacks,a!==null&&(l=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var n=Ee;if(oe(e,t),se(t),a&512&&(wt||l===null||Oe(l,l.return)),a&4){var i=l!==null?l.memoizedState:null;if(a=t.memoizedState,l===null)if(a===null)if(t.stateNode===null){t:{a=t.type,l=t.memoizedProps,n=n.ownerDocument||n;e:switch(a){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Ha]||i[Jt]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(a),n.head.insertBefore(i,n.querySelector("head > title"))),Vt(i,a,l),i[Jt]=t,Lt(i),a=i;break t;case"link":var r=Sd("link","href",n).get(a+(l.href||""));if(r){for(var o=0;o<r.length;o++)if(i=r[o],i.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&i.getAttribute("rel")===(l.rel==null?null:l.rel)&&i.getAttribute("title")===(l.title==null?null:l.title)&&i.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){r.splice(o,1);break e}}i=n.createElement(a),Vt(i,a,l),n.head.appendChild(i);break;case"meta":if(r=Sd("meta","content",n).get(a+(l.content||""))){for(o=0;o<r.length;o++)if(i=r[o],i.getAttribute("content")===(l.content==null?null:""+l.content)&&i.getAttribute("name")===(l.name==null?null:l.name)&&i.getAttribute("property")===(l.property==null?null:l.property)&&i.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&i.getAttribute("charset")===(l.charSet==null?null:l.charSet)){r.splice(o,1);break e}}i=n.createElement(a),Vt(i,a,l),n.head.appendChild(i);break;default:throw Error(s(468,a))}i[Jt]=t,Lt(i),a=i}t.stateNode=a}else jd(n,t.type,t.stateNode);else t.stateNode=bd(n,a,t.memoizedProps);else i!==a?(i===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):i.count--,a===null?jd(n,t.type,t.stateNode):bd(n,a,t.memoizedProps)):a===null&&t.stateNode!==null&&Br(t,t.memoizedProps,l.memoizedProps)}break;case 27:oe(e,t),se(t),a&512&&(wt||l===null||Oe(l,l.return)),l!==null&&a&4&&Br(t,t.memoizedProps,l.memoizedProps);break;case 5:if(oe(e,t),se(t),a&512&&(wt||l===null||Oe(l,l.return)),t.flags&32){n=t.stateNode;try{ta(n,"")}catch(E){yt(t,t.return,E)}}a&4&&t.stateNode!=null&&(n=t.memoizedProps,Br(t,n,l!==null?l.memoizedProps:n)),a&1024&&(Hr=!0);break;case 6:if(oe(e,t),se(t),a&4){if(t.stateNode===null)throw Error(s(162));a=t.memoizedProps,l=t.stateNode;try{l.nodeValue=a}catch(E){yt(t,t.return,E)}}break;case 3:if(Xi=null,n=Ee,Ee=ki(e.containerInfo),oe(e,t),Ee=n,se(t),a&4&&l!==null&&l.memoizedState.isDehydrated)try{Mn(e.containerInfo)}catch(E){yt(t,t.return,E)}Hr&&(Hr=!1,Rf(t));break;case 4:a=Ee,Ee=ki(t.stateNode.containerInfo),oe(e,t),se(t),Ee=a;break;case 12:oe(e,t),se(t);break;case 13:oe(e,t),se(t),t.child.flags&8192&&t.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Qr=we()),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,Yr(t,a)));break;case 22:n=t.memoizedState!==null;var m=l!==null&&l.memoizedState!==null,z=Ke,D=wt;if(Ke=z||n,wt=D||m,oe(e,t),wt=D,Ke=z,se(t),a&8192)t:for(e=t.stateNode,e._visibility=n?e._visibility&-2:e._visibility|1,n&&(l===null||m||Ke||wt||Gl(t)),l=null,e=t;;){if(e.tag===5||e.tag===26){if(l===null){m=l=e;try{if(i=m.stateNode,n)r=i.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{o=m.stateNode;var N=m.memoizedProps.style,T=N!=null&&N.hasOwnProperty("display")?N.display:null;o.style.display=T==null||typeof T=="boolean"?"":(""+T).trim()}}catch(E){yt(m,m.return,E)}}}else if(e.tag===6){if(l===null){m=e;try{m.stateNode.nodeValue=n?"":m.memoizedProps}catch(E){yt(m,m.return,E)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;l===e&&(l=null),e=e.return}l===e&&(l=null),e.sibling.return=e.return,e=e.sibling}a&4&&(a=t.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,Yr(t,l))));break;case 19:oe(e,t),se(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,Yr(t,a)));break;case 30:break;case 21:break;default:oe(e,t),se(t)}}function se(t){var e=t.flags;if(e&2){try{for(var l,a=t.return;a!==null;){if(bf(a)){l=a;break}a=a.return}if(l==null)throw Error(s(160));switch(l.tag){case 27:var n=l.stateNode,i=_r(t);Ri(t,i,n);break;case 5:var r=l.stateNode;l.flags&32&&(ta(r,""),l.flags&=-33);var o=_r(t);Ri(t,o,r);break;case 3:case 4:var m=l.stateNode.containerInfo,z=_r(t);Ur(t,z,m);break;default:throw Error(s(161))}}catch(D){yt(t,t.return,D)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Rf(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;Rf(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function dl(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)zf(t,e.alternate,e),e=e.sibling}function Gl(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:fl(4,e,e.return),Gl(e);break;case 1:Oe(e,e.return);var l=e.stateNode;typeof l.componentWillUnmount=="function"&&yf(e,e.return,l),Gl(e);break;case 27:zn(e.stateNode);case 26:case 5:Oe(e,e.return),Gl(e);break;case 22:e.memoizedState===null&&Gl(e);break;case 30:Gl(e);break;default:Gl(e)}t=t.sibling}}function ml(t,e,l){for(l=l&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var a=e.alternate,n=t,i=e,r=i.flags;switch(i.tag){case 0:case 11:case 15:ml(n,i,l),mn(4,i);break;case 1:if(ml(n,i,l),a=i,n=a.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(z){yt(a,a.return,z)}if(a=i,n=a.updateQueue,n!==null){var o=a.stateNode;try{var m=n.shared.hiddenCallbacks;if(m!==null)for(n.shared.hiddenCallbacks=null,n=0;n<m.length;n++)ls(m[n],o)}catch(z){yt(a,a.return,z)}}l&&r&64&&vf(i),hn(i,i.return);break;case 27:Sf(i);case 26:case 5:ml(n,i,l),l&&a===null&&r&4&&xf(i),hn(i,i.return);break;case 12:ml(n,i,l);break;case 13:ml(n,i,l),l&&r&4&&Af(n,i);break;case 22:i.memoizedState===null&&ml(n,i,l),hn(i,i.return);break;case 30:break;default:ml(n,i,l)}e=e.sibling}}function Lr(t,e){var l=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==l&&(t!=null&&t.refCount++,l!=null&&Ia(l))}function qr(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Ia(t))}function Ne(t,e,l,a){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)wf(t,e,l,a),e=e.sibling}function wf(t,e,l,a){var n=e.flags;switch(e.tag){case 0:case 11:case 15:Ne(t,e,l,a),n&2048&&mn(9,e);break;case 1:Ne(t,e,l,a);break;case 3:Ne(t,e,l,a),n&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Ia(t)));break;case 12:if(n&2048){Ne(t,e,l,a),t=e.stateNode;try{var i=e.memoizedProps,r=i.id,o=i.onPostCommit;typeof o=="function"&&o(r,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(m){yt(e,e.return,m)}}else Ne(t,e,l,a);break;case 13:Ne(t,e,l,a);break;case 23:break;case 22:i=e.stateNode,r=e.alternate,e.memoizedState!==null?i._visibility&2?Ne(t,e,l,a):pn(t,e):i._visibility&2?Ne(t,e,l,a):(i._visibility|=2,xa(t,e,l,a,(e.subtreeFlags&10256)!==0)),n&2048&&Lr(r,e);break;case 24:Ne(t,e,l,a),n&2048&&qr(e.alternate,e);break;default:Ne(t,e,l,a)}}function xa(t,e,l,a,n){for(n=n&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var i=t,r=e,o=l,m=a,z=r.flags;switch(r.tag){case 0:case 11:case 15:xa(i,r,o,m,n),mn(8,r);break;case 23:break;case 22:var D=r.stateNode;r.memoizedState!==null?D._visibility&2?xa(i,r,o,m,n):pn(i,r):(D._visibility|=2,xa(i,r,o,m,n)),n&&z&2048&&Lr(r.alternate,r);break;case 24:xa(i,r,o,m,n),n&&z&2048&&qr(r.alternate,r);break;default:xa(i,r,o,m,n)}e=e.sibling}}function pn(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var l=t,a=e,n=a.flags;switch(a.tag){case 22:pn(l,a),n&2048&&Lr(a.alternate,a);break;case 24:pn(l,a),n&2048&&qr(a.alternate,a);break;default:pn(l,a)}e=e.sibling}}var gn=8192;function ba(t){if(t.subtreeFlags&gn)for(t=t.child;t!==null;)Df(t),t=t.sibling}function Df(t){switch(t.tag){case 26:ba(t),t.flags&gn&&t.memoizedState!==null&&Oh(Ee,t.memoizedState,t.memoizedProps);break;case 5:ba(t);break;case 3:case 4:var e=Ee;Ee=ki(t.stateNode.containerInfo),ba(t),Ee=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=gn,gn=16777216,ba(t),gn=e):ba(t));break;default:ba(t)}}function Mf(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function vn(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];kt=a,Nf(a,t)}Mf(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Of(t),t=t.sibling}function Of(t){switch(t.tag){case 0:case 11:case 15:vn(t),t.flags&2048&&fl(9,t,t.return);break;case 3:vn(t);break;case 12:vn(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,wi(t)):vn(t);break;default:vn(t)}}function wi(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];kt=a,Nf(a,t)}Mf(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:fl(8,e,e.return),wi(e);break;case 22:l=e.stateNode,l._visibility&2&&(l._visibility&=-3,wi(e));break;default:wi(e)}t=t.sibling}}function Nf(t,e){for(;kt!==null;){var l=kt;switch(l.tag){case 0:case 11:case 15:fl(8,l,e);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Ia(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,kt=a;else t:for(l=t;kt!==null;){a=kt;var n=a.sibling,i=a.return;if(Tf(a),a===l){kt=null;break t}if(n!==null){n.return=i,kt=n;break t}kt=i}}}var Jm={getCacheForType:function(t){var e=Wt(Nt),l=e.data.get(t);return l===void 0&&(l=t(),e.data.set(t,l)),l}},Wm=typeof WeakMap=="function"?WeakMap:Map,dt=0,xt=null,ut=null,ct=0,mt=0,fe=null,hl=!1,Sa=!1,kr=!1,We=0,At=0,pl=0,Xl=0,Gr=0,je=0,ja=0,yn=null,le=null,Xr=!1,Qr=0,Di=1/0,Mi=null,gl=null,Qt=0,vl=null,za=null,Ta=0,Vr=0,Zr=null,Bf=null,xn=0,Kr=null;function de(){if((dt&2)!==0&&ct!==0)return ct&-ct;if(M.T!==null){var t=fa;return t!==0?t:tc()}return Jc()}function _f(){je===0&&(je=(ct&536870912)===0||ft?Qc():536870912);var t=Se.current;return t!==null&&(t.flags|=32),je}function me(t,e,l){(t===xt&&(mt===2||mt===9)||t.cancelPendingCommit!==null)&&(Ea(t,0),yl(t,ct,je,!1)),Ua(t,l),((dt&2)===0||t!==xt)&&(t===xt&&((dt&2)===0&&(Xl|=l),At===4&&yl(t,ct,je,!1)),Be(t))}function Uf(t,e,l){if((dt&6)!==0)throw Error(s(327));var a=!l&&(e&124)===0&&(e&t.expiredLanes)===0||_a(t,e),n=a?Im(t,e):$r(t,e,!0),i=a;do{if(n===0){Sa&&!a&&yl(t,e,0,!1);break}else{if(l=t.current.alternate,i&&!$m(l)){n=$r(t,e,!1),i=!1;continue}if(n===2){if(i=e,t.errorRecoveryDisabledLanes&i)var r=0;else r=t.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){e=r;t:{var o=t;n=yn;var m=o.current.memoizedState.isDehydrated;if(m&&(Ea(o,r).flags|=256),r=$r(o,r,!1),r!==2){if(kr&&!m){o.errorRecoveryDisabledLanes|=i,Xl|=i,n=4;break t}i=le,le=n,i!==null&&(le===null?le=i:le.push.apply(le,i))}n=r}if(i=!1,n!==2)continue}}if(n===1){Ea(t,0),yl(t,e,0,!0);break}t:{switch(a=t,i=n,i){case 0:case 1:throw Error(s(345));case 4:if((e&4194048)!==e)break;case 6:yl(a,e,je,!hl);break t;case 2:le=null;break;case 3:case 5:break;default:throw Error(s(329))}if((e&62914560)===e&&(n=Qr+300-we(),10<n)){if(yl(a,e,je,!hl),Gn(a,0,!0)!==0)break t;a.timeoutHandle=fd(Hf.bind(null,a,l,le,Mi,Xr,e,je,Xl,ja,hl,i,2,-0,0),n);break t}Hf(a,l,le,Mi,Xr,e,je,Xl,ja,hl,i,0,-0,0)}}break}while(!0);Be(t)}function Hf(t,e,l,a,n,i,r,o,m,z,D,N,T,E){if(t.timeoutHandle=-1,N=e.subtreeFlags,(N&8192||(N&16785408)===16785408)&&(An={stylesheets:null,count:0,unsuspend:Mh},Df(e),N=Nh(),N!==null)){t.cancelPendingCommit=N(Qf.bind(null,t,e,i,l,a,n,r,o,m,D,1,T,E)),yl(t,i,r,!z);return}Qf(t,e,i,l,a,n,r,o,m)}function $m(t){for(var e=t;;){var l=e.tag;if((l===0||l===11||l===15)&&e.flags&16384&&(l=e.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var n=l[a],i=n.getSnapshot;n=n.value;try{if(!re(i(),n))return!1}catch{return!1}}if(l=e.child,e.subtreeFlags&16384&&l!==null)l.return=e,e=l;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function yl(t,e,l,a){e&=~Gr,e&=~Xl,t.suspendedLanes|=e,t.pingedLanes&=~e,a&&(t.warmLanes|=e),a=t.expirationTimes;for(var n=e;0<n;){var i=31-ue(n),r=1<<i;a[i]=-1,n&=~r}l!==0&&Zc(t,l,e)}function Oi(){return(dt&6)===0?(bn(0),!1):!0}function Jr(){if(ut!==null){if(mt===0)var t=ut.return;else t=ut,ke=Hl=null,fr(t),va=null,sn=0,t=ut;for(;t!==null;)gf(t.alternate,t),t=t.return;ut=null}}function Ea(t,e){var l=t.timeoutHandle;l!==-1&&(t.timeoutHandle=-1,hh(l)),l=t.cancelPendingCommit,l!==null&&(t.cancelPendingCommit=null,l()),Jr(),xt=t,ut=l=Ye(t.current,null),ct=e,mt=0,fe=null,hl=!1,Sa=_a(t,e),kr=!1,ja=je=Gr=Xl=pl=At=0,le=yn=null,Xr=!1,(e&8)!==0&&(e|=e&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=e;0<a;){var n=31-ue(a),i=1<<n;e|=t[n],a&=~i}return We=e,ti(),l}function Yf(t,e){nt=null,M.H=xi,e===tn||e===oi?(e=ts(),mt=3):e===Fo?(e=ts(),mt=4):mt=e===ef?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,fe=e,ut===null&&(At=1,Ti(t,ve(e,t.current)))}function Lf(){var t=M.H;return M.H=xi,t===null?xi:t}function qf(){var t=M.A;return M.A=Jm,t}function Wr(){At=4,hl||(ct&4194048)!==ct&&Se.current!==null||(Sa=!0),(pl&134217727)===0&&(Xl&134217727)===0||xt===null||yl(xt,ct,je,!1)}function $r(t,e,l){var a=dt;dt|=2;var n=Lf(),i=qf();(xt!==t||ct!==e)&&(Mi=null,Ea(t,e)),e=!1;var r=At;t:do try{if(mt!==0&&ut!==null){var o=ut,m=fe;switch(mt){case 8:Jr(),r=6;break t;case 3:case 2:case 9:case 6:Se.current===null&&(e=!0);var z=mt;if(mt=0,fe=null,Aa(t,o,m,z),l&&Sa){r=0;break t}break;default:z=mt,mt=0,fe=null,Aa(t,o,m,z)}}Fm(),r=At;break}catch(D){Yf(t,D)}while(!0);return e&&t.shellSuspendCounter++,ke=Hl=null,dt=a,M.H=n,M.A=i,ut===null&&(xt=null,ct=0,ti()),r}function Fm(){for(;ut!==null;)kf(ut)}function Im(t,e){var l=dt;dt|=2;var a=Lf(),n=qf();xt!==t||ct!==e?(Mi=null,Di=we()+500,Ea(t,e)):Sa=_a(t,e);t:do try{if(mt!==0&&ut!==null){e=ut;var i=fe;e:switch(mt){case 1:mt=0,fe=null,Aa(t,e,i,1);break;case 2:case 9:if(Io(i)){mt=0,fe=null,Gf(e);break}e=function(){mt!==2&&mt!==9||xt!==t||(mt=7),Be(t)},i.then(e,e);break t;case 3:mt=7;break t;case 4:mt=5;break t;case 7:Io(i)?(mt=0,fe=null,Gf(e)):(mt=0,fe=null,Aa(t,e,i,7));break;case 5:var r=null;switch(ut.tag){case 26:r=ut.memoizedState;case 5:case 27:var o=ut;if(!r||zd(r)){mt=0,fe=null;var m=o.sibling;if(m!==null)ut=m;else{var z=o.return;z!==null?(ut=z,Ni(z)):ut=null}break e}}mt=0,fe=null,Aa(t,e,i,5);break;case 6:mt=0,fe=null,Aa(t,e,i,6);break;case 8:Jr(),At=6;break t;default:throw Error(s(462))}}Pm();break}catch(D){Yf(t,D)}while(!0);return ke=Hl=null,M.H=a,M.A=n,dt=l,ut!==null?0:(xt=null,ct=0,ti(),At)}function Pm(){for(;ut!==null&&!S0();)kf(ut)}function kf(t){var e=hf(t.alternate,t,We);t.memoizedProps=t.pendingProps,e===null?Ni(t):ut=e}function Gf(t){var e=t,l=e.alternate;switch(e.tag){case 15:case 0:e=cf(l,e,e.pendingProps,e.type,void 0,ct);break;case 11:e=cf(l,e,e.pendingProps,e.type.render,e.ref,ct);break;case 5:fr(e);default:gf(l,e),e=ut=Go(e,We),e=hf(l,e,We)}t.memoizedProps=t.pendingProps,e===null?Ni(t):ut=e}function Aa(t,e,l,a){ke=Hl=null,fr(e),va=null,sn=0;var n=e.return;try{if(Gm(t,n,e,l,ct)){At=1,Ti(t,ve(l,t.current)),ut=null;return}}catch(i){if(n!==null)throw ut=n,i;At=1,Ti(t,ve(l,t.current)),ut=null;return}e.flags&32768?(ft||a===1?t=!0:Sa||(ct&536870912)!==0?t=!1:(hl=t=!0,(a===2||a===9||a===3||a===6)&&(a=Se.current,a!==null&&a.tag===13&&(a.flags|=16384))),Xf(e,t)):Ni(e)}function Ni(t){var e=t;do{if((e.flags&32768)!==0){Xf(e,hl);return}t=e.return;var l=Qm(e.alternate,e,We);if(l!==null){ut=l;return}if(e=e.sibling,e!==null){ut=e;return}ut=e=t}while(e!==null);At===0&&(At=5)}function Xf(t,e){do{var l=Vm(t.alternate,t);if(l!==null){l.flags&=32767,ut=l;return}if(l=t.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!e&&(t=t.sibling,t!==null)){ut=t;return}ut=t=l}while(t!==null);At=6,ut=null}function Qf(t,e,l,a,n,i,r,o,m){t.cancelPendingCommit=null;do Bi();while(Qt!==0);if((dt&6)!==0)throw Error(s(327));if(e!==null){if(e===t.current)throw Error(s(177));if(i=e.lanes|e.childLanes,i|=qu,M0(t,l,i,r,o,m),t===xt&&(ut=xt=null,ct=0),za=e,vl=t,Ta=l,Vr=i,Zr=n,Bf=a,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,ah(Ln,function(){return Wf(),null})):(t.callbackNode=null,t.callbackPriority=0),a=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||a){a=M.T,M.T=null,n=Y.p,Y.p=2,r=dt,dt|=4;try{Zm(t,e,l)}finally{dt=r,Y.p=n,M.T=a}}Qt=1,Vf(),Zf(),Kf()}}function Vf(){if(Qt===1){Qt=0;var t=vl,e=za,l=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||l){l=M.T,M.T=null;var a=Y.p;Y.p=2;var n=dt;dt|=4;try{Cf(e,t);var i=cc,r=Oo(t.containerInfo),o=i.focusedElem,m=i.selectionRange;if(r!==o&&o&&o.ownerDocument&&Mo(o.ownerDocument.documentElement,o)){if(m!==null&&_u(o)){var z=m.start,D=m.end;if(D===void 0&&(D=z),"selectionStart"in o)o.selectionStart=z,o.selectionEnd=Math.min(D,o.value.length);else{var N=o.ownerDocument||document,T=N&&N.defaultView||window;if(T.getSelection){var E=T.getSelection(),I=o.textContent.length,J=Math.min(m.start,I),gt=m.end===void 0?J:Math.min(m.end,I);!E.extend&&J>gt&&(r=gt,gt=J,J=r);var x=Do(o,J),y=Do(o,gt);if(x&&y&&(E.rangeCount!==1||E.anchorNode!==x.node||E.anchorOffset!==x.offset||E.focusNode!==y.node||E.focusOffset!==y.offset)){var j=N.createRange();j.setStart(x.node,x.offset),E.removeAllRanges(),J>gt?(E.addRange(j),E.extend(y.node,y.offset)):(j.setEnd(y.node,y.offset),E.addRange(j))}}}}for(N=[],E=o;E=E.parentNode;)E.nodeType===1&&N.push({element:E,left:E.scrollLeft,top:E.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<N.length;o++){var O=N[o];O.element.scrollLeft=O.left,O.element.scrollTop=O.top}}Zi=!!rc,cc=rc=null}finally{dt=n,Y.p=a,M.T=l}}t.current=e,Qt=2}}function Zf(){if(Qt===2){Qt=0;var t=vl,e=za,l=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||l){l=M.T,M.T=null;var a=Y.p;Y.p=2;var n=dt;dt|=4;try{zf(t,e.alternate,e)}finally{dt=n,Y.p=a,M.T=l}}Qt=3}}function Kf(){if(Qt===4||Qt===3){Qt=0,j0();var t=vl,e=za,l=Ta,a=Bf;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Qt=5:(Qt=0,za=vl=null,Jf(t,t.pendingLanes));var n=t.pendingLanes;if(n===0&&(gl=null),hu(l),e=e.stateNode,ie&&typeof ie.onCommitFiberRoot=="function")try{ie.onCommitFiberRoot(Ba,e,void 0,(e.current.flags&128)===128)}catch{}if(a!==null){e=M.T,n=Y.p,Y.p=2,M.T=null;try{for(var i=t.onRecoverableError,r=0;r<a.length;r++){var o=a[r];i(o.value,{componentStack:o.stack})}}finally{M.T=e,Y.p=n}}(Ta&3)!==0&&Bi(),Be(t),n=t.pendingLanes,(l&4194090)!==0&&(n&42)!==0?t===Kr?xn++:(xn=0,Kr=t):xn=0,bn(0)}}function Jf(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Ia(e)))}function Bi(t){return Vf(),Zf(),Kf(),Wf()}function Wf(){if(Qt!==5)return!1;var t=vl,e=Vr;Vr=0;var l=hu(Ta),a=M.T,n=Y.p;try{Y.p=32>l?32:l,M.T=null,l=Zr,Zr=null;var i=vl,r=Ta;if(Qt=0,za=vl=null,Ta=0,(dt&6)!==0)throw Error(s(331));var o=dt;if(dt|=4,Of(i.current),wf(i,i.current,r,l),dt=o,bn(0,!1),ie&&typeof ie.onPostCommitFiberRoot=="function")try{ie.onPostCommitFiberRoot(Ba,i)}catch{}return!0}finally{Y.p=n,M.T=a,Jf(t,e)}}function $f(t,e,l){e=ve(l,e),e=Er(t.stateNode,e,2),t=rl(t,e,2),t!==null&&(Ua(t,2),Be(t))}function yt(t,e,l){if(t.tag===3)$f(t,t,l);else for(;e!==null;){if(e.tag===3){$f(e,t,l);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(gl===null||!gl.has(a))){t=ve(l,t),l=Ps(2),a=rl(e,l,2),a!==null&&(tf(l,a,e,t),Ua(a,2),Be(a));break}}e=e.return}}function Fr(t,e,l){var a=t.pingCache;if(a===null){a=t.pingCache=new Wm;var n=new Set;a.set(e,n)}else n=a.get(e),n===void 0&&(n=new Set,a.set(e,n));n.has(l)||(kr=!0,n.add(l),t=th.bind(null,t,e,l),e.then(t,t))}function th(t,e,l){var a=t.pingCache;a!==null&&a.delete(e),t.pingedLanes|=t.suspendedLanes&l,t.warmLanes&=~l,xt===t&&(ct&l)===l&&(At===4||At===3&&(ct&62914560)===ct&&300>we()-Qr?(dt&2)===0&&Ea(t,0):Gr|=l,ja===ct&&(ja=0)),Be(t)}function Ff(t,e){e===0&&(e=Vc()),t=ra(t,e),t!==null&&(Ua(t,e),Be(t))}function eh(t){var e=t.memoizedState,l=0;e!==null&&(l=e.retryLane),Ff(t,l)}function lh(t,e){var l=0;switch(t.tag){case 13:var a=t.stateNode,n=t.memoizedState;n!==null&&(l=n.retryLane);break;case 19:a=t.stateNode;break;case 22:a=t.stateNode._retryCache;break;default:throw Error(s(314))}a!==null&&a.delete(e),Ff(t,l)}function ah(t,e){return su(t,e)}var _i=null,Ca=null,Ir=!1,Ui=!1,Pr=!1,Ql=0;function Be(t){t!==Ca&&t.next===null&&(Ca===null?_i=Ca=t:Ca=Ca.next=t),Ui=!0,Ir||(Ir=!0,ih())}function bn(t,e){if(!Pr&&Ui){Pr=!0;do for(var l=!1,a=_i;a!==null;){if(t!==0){var n=a.pendingLanes;if(n===0)var i=0;else{var r=a.suspendedLanes,o=a.pingedLanes;i=(1<<31-ue(42|t)+1)-1,i&=n&~(r&~o),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(l=!0,ed(a,i))}else i=ct,i=Gn(a,a===xt?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||_a(a,i)||(l=!0,ed(a,i));a=a.next}while(l);Pr=!1}}function nh(){If()}function If(){Ui=Ir=!1;var t=0;Ql!==0&&(mh()&&(t=Ql),Ql=0);for(var e=we(),l=null,a=_i;a!==null;){var n=a.next,i=Pf(a,e);i===0?(a.next=null,l===null?_i=n:l.next=n,n===null&&(Ca=l)):(l=a,(t!==0||(i&3)!==0)&&(Ui=!0)),a=n}bn(t)}function Pf(t,e){for(var l=t.suspendedLanes,a=t.pingedLanes,n=t.expirationTimes,i=t.pendingLanes&-62914561;0<i;){var r=31-ue(i),o=1<<r,m=n[r];m===-1?((o&l)===0||(o&a)!==0)&&(n[r]=D0(o,e)):m<=e&&(t.expiredLanes|=o),i&=~o}if(e=xt,l=ct,l=Gn(t,t===e?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a=t.callbackNode,l===0||t===e&&(mt===2||mt===9)||t.cancelPendingCommit!==null)return a!==null&&a!==null&&fu(a),t.callbackNode=null,t.callbackPriority=0;if((l&3)===0||_a(t,l)){if(e=l&-l,e===t.callbackPriority)return e;switch(a!==null&&fu(a),hu(l)){case 2:case 8:l=Gc;break;case 32:l=Ln;break;case 268435456:l=Xc;break;default:l=Ln}return a=td.bind(null,t),l=su(l,a),t.callbackPriority=e,t.callbackNode=l,e}return a!==null&&a!==null&&fu(a),t.callbackPriority=2,t.callbackNode=null,2}function td(t,e){if(Qt!==0&&Qt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var l=t.callbackNode;if(Bi()&&t.callbackNode!==l)return null;var a=ct;return a=Gn(t,t===xt?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a===0?null:(Uf(t,a,e),Pf(t,we()),t.callbackNode!=null&&t.callbackNode===l?td.bind(null,t):null)}function ed(t,e){if(Bi())return null;Uf(t,e,!0)}function ih(){ph(function(){(dt&6)!==0?su(kc,nh):If()})}function tc(){return Ql===0&&(Ql=Qc()),Ql}function ld(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Kn(""+t)}function ad(t,e){var l=e.ownerDocument.createElement("input");return l.name=e.name,l.value=e.value,t.id&&l.setAttribute("form",t.id),e.parentNode.insertBefore(l,e),t=new FormData(t),l.parentNode.removeChild(l),t}function uh(t,e,l,a,n){if(e==="submit"&&l&&l.stateNode===n){var i=ld((n[It]||null).action),r=a.submitter;r&&(e=(e=r[It]||null)?ld(e.formAction):r.getAttribute("formAction"),e!==null&&(i=e,r=null));var o=new Fn("action","action",null,a,n);t.push({event:o,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Ql!==0){var m=r?ad(n,r):new FormData(n);br(l,{pending:!0,data:m,method:n.method,action:i},null,m)}}else typeof i=="function"&&(o.preventDefault(),m=r?ad(n,r):new FormData(n),br(l,{pending:!0,data:m,method:n.method,action:i},i,m))},currentTarget:n}]})}}for(var ec=0;ec<Lu.length;ec++){var lc=Lu[ec],rh=lc.toLowerCase(),ch=lc[0].toUpperCase()+lc.slice(1);Te(rh,"on"+ch)}Te(_o,"onAnimationEnd"),Te(Uo,"onAnimationIteration"),Te(Ho,"onAnimationStart"),Te("dblclick","onDoubleClick"),Te("focusin","onFocus"),Te("focusout","onBlur"),Te(Em,"onTransitionRun"),Te(Am,"onTransitionStart"),Te(Cm,"onTransitionCancel"),Te(Yo,"onTransitionEnd"),Fl("onMouseEnter",["mouseout","mouseover"]),Fl("onMouseLeave",["mouseout","mouseover"]),Fl("onPointerEnter",["pointerout","pointerover"]),Fl("onPointerLeave",["pointerout","pointerover"]),Rl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Rl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Rl("onBeforeInput",["compositionend","keypress","textInput","paste"]),Rl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Rl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Rl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Sn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),oh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Sn));function nd(t,e){e=(e&4)!==0;for(var l=0;l<t.length;l++){var a=t[l],n=a.event;a=a.listeners;t:{var i=void 0;if(e)for(var r=a.length-1;0<=r;r--){var o=a[r],m=o.instance,z=o.currentTarget;if(o=o.listener,m!==i&&n.isPropagationStopped())break t;i=o,n.currentTarget=z;try{i(n)}catch(D){zi(D)}n.currentTarget=null,i=m}else for(r=0;r<a.length;r++){if(o=a[r],m=o.instance,z=o.currentTarget,o=o.listener,m!==i&&n.isPropagationStopped())break t;i=o,n.currentTarget=z;try{i(n)}catch(D){zi(D)}n.currentTarget=null,i=m}}}}function rt(t,e){var l=e[pu];l===void 0&&(l=e[pu]=new Set);var a=t+"__bubble";l.has(a)||(id(e,t,2,!1),l.add(a))}function ac(t,e,l){var a=0;e&&(a|=4),id(l,t,a,e)}var Hi="_reactListening"+Math.random().toString(36).slice(2);function nc(t){if(!t[Hi]){t[Hi]=!0,$c.forEach(function(l){l!=="selectionchange"&&(oh.has(l)||ac(l,!1,t),ac(l,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Hi]||(e[Hi]=!0,ac("selectionchange",!1,e))}}function id(t,e,l,a){switch(wd(e)){case 2:var n=Uh;break;case 8:n=Hh;break;default:n=yc}l=n.bind(null,e,l,t),n=void 0,!Au||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(n=!0),a?n!==void 0?t.addEventListener(e,l,{capture:!0,passive:n}):t.addEventListener(e,l,!0):n!==void 0?t.addEventListener(e,l,{passive:n}):t.addEventListener(e,l,!1)}function ic(t,e,l,a,n){var i=a;if((e&1)===0&&(e&2)===0&&a!==null)t:for(;;){if(a===null)return;var r=a.tag;if(r===3||r===4){var o=a.stateNode.containerInfo;if(o===n)break;if(r===4)for(r=a.return;r!==null;){var m=r.tag;if((m===3||m===4)&&r.stateNode.containerInfo===n)return;r=r.return}for(;o!==null;){if(r=Jl(o),r===null)return;if(m=r.tag,m===5||m===6||m===26||m===27){a=i=r;continue t}o=o.parentNode}}a=a.return}so(function(){var z=i,D=Tu(l),N=[];t:{var T=Lo.get(t);if(T!==void 0){var E=Fn,I=t;switch(t){case"keypress":if(Wn(l)===0)break t;case"keydown":case"keyup":E=am;break;case"focusin":I="focus",E=Du;break;case"focusout":I="blur",E=Du;break;case"beforeblur":case"afterblur":E=Du;break;case"click":if(l.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=ho;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=V0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=um;break;case _o:case Uo:case Ho:E=J0;break;case Yo:E=cm;break;case"scroll":case"scrollend":E=X0;break;case"wheel":E=sm;break;case"copy":case"cut":case"paste":E=$0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=go;break;case"toggle":case"beforetoggle":E=dm}var J=(e&4)!==0,gt=!J&&(t==="scroll"||t==="scrollend"),x=J?T!==null?T+"Capture":null:T;J=[];for(var y=z,j;y!==null;){var O=y;if(j=O.stateNode,O=O.tag,O!==5&&O!==26&&O!==27||j===null||x===null||(O=La(y,x),O!=null&&J.push(jn(y,O,j))),gt)break;y=y.return}0<J.length&&(T=new E(T,I,null,l,D),N.push({event:T,listeners:J}))}}if((e&7)===0){t:{if(T=t==="mouseover"||t==="pointerover",E=t==="mouseout"||t==="pointerout",T&&l!==zu&&(I=l.relatedTarget||l.fromElement)&&(Jl(I)||I[Kl]))break t;if((E||T)&&(T=D.window===D?D:(T=D.ownerDocument)?T.defaultView||T.parentWindow:window,E?(I=l.relatedTarget||l.toElement,E=z,I=I?Jl(I):null,I!==null&&(gt=p(I),J=I.tag,I!==gt||J!==5&&J!==27&&J!==6)&&(I=null)):(E=null,I=z),E!==I)){if(J=ho,O="onMouseLeave",x="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(J=go,O="onPointerLeave",x="onPointerEnter",y="pointer"),gt=E==null?T:Ya(E),j=I==null?T:Ya(I),T=new J(O,y+"leave",E,l,D),T.target=gt,T.relatedTarget=j,O=null,Jl(D)===z&&(J=new J(x,y+"enter",I,l,D),J.target=j,J.relatedTarget=gt,O=J),gt=O,E&&I)e:{for(J=E,x=I,y=0,j=J;j;j=Ra(j))y++;for(j=0,O=x;O;O=Ra(O))j++;for(;0<y-j;)J=Ra(J),y--;for(;0<j-y;)x=Ra(x),j--;for(;y--;){if(J===x||x!==null&&J===x.alternate)break e;J=Ra(J),x=Ra(x)}J=null}else J=null;E!==null&&ud(N,T,E,J,!1),I!==null&&gt!==null&&ud(N,gt,I,J,!0)}}t:{if(T=z?Ya(z):window,E=T.nodeName&&T.nodeName.toLowerCase(),E==="select"||E==="input"&&T.type==="file")var G=To;else if(jo(T))if(Eo)G=jm;else{G=bm;var it=xm}else E=T.nodeName,!E||E.toLowerCase()!=="input"||T.type!=="checkbox"&&T.type!=="radio"?z&&ju(z.elementType)&&(G=To):G=Sm;if(G&&(G=G(t,z))){zo(N,G,l,D);break t}it&&it(t,T,z),t==="focusout"&&z&&T.type==="number"&&z.memoizedProps.value!=null&&Su(T,"number",T.value)}switch(it=z?Ya(z):window,t){case"focusin":(jo(it)||it.contentEditable==="true")&&(na=it,Uu=z,Ka=null);break;case"focusout":Ka=Uu=na=null;break;case"mousedown":Hu=!0;break;case"contextmenu":case"mouseup":case"dragend":Hu=!1,No(N,l,D);break;case"selectionchange":if(Tm)break;case"keydown":case"keyup":No(N,l,D)}var Q;if(Ou)t:{switch(t){case"compositionstart":var $="onCompositionStart";break t;case"compositionend":$="onCompositionEnd";break t;case"compositionupdate":$="onCompositionUpdate";break t}$=void 0}else aa?bo(t,l)&&($="onCompositionEnd"):t==="keydown"&&l.keyCode===229&&($="onCompositionStart");$&&(vo&&l.locale!=="ko"&&(aa||$!=="onCompositionStart"?$==="onCompositionEnd"&&aa&&(Q=fo()):(al=D,Cu="value"in al?al.value:al.textContent,aa=!0)),it=Yi(z,$),0<it.length&&($=new po($,t,null,l,D),N.push({event:$,listeners:it}),Q?$.data=Q:(Q=So(l),Q!==null&&($.data=Q)))),(Q=hm?pm(t,l):gm(t,l))&&($=Yi(z,"onBeforeInput"),0<$.length&&(it=new po("onBeforeInput","beforeinput",null,l,D),N.push({event:it,listeners:$}),it.data=Q)),uh(N,t,z,l,D)}nd(N,e)})}function jn(t,e,l){return{instance:t,listener:e,currentTarget:l}}function Yi(t,e){for(var l=e+"Capture",a=[];t!==null;){var n=t,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=La(t,l),n!=null&&a.unshift(jn(t,n,i)),n=La(t,e),n!=null&&a.push(jn(t,n,i))),t.tag===3)return a;t=t.return}return[]}function Ra(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function ud(t,e,l,a,n){for(var i=e._reactName,r=[];l!==null&&l!==a;){var o=l,m=o.alternate,z=o.stateNode;if(o=o.tag,m!==null&&m===a)break;o!==5&&o!==26&&o!==27||z===null||(m=z,n?(z=La(l,i),z!=null&&r.unshift(jn(l,z,m))):n||(z=La(l,i),z!=null&&r.push(jn(l,z,m)))),l=l.return}r.length!==0&&t.push({event:e,listeners:r})}var sh=/\r\n?/g,fh=/\u0000|\uFFFD/g;function rd(t){return(typeof t=="string"?t:""+t).replace(sh,`
`).replace(fh,"")}function cd(t,e){return e=rd(e),rd(t)===e}function Li(){}function pt(t,e,l,a,n,i){switch(l){case"children":typeof a=="string"?e==="body"||e==="textarea"&&a===""||ta(t,a):(typeof a=="number"||typeof a=="bigint")&&e!=="body"&&ta(t,""+a);break;case"className":Qn(t,"class",a);break;case"tabIndex":Qn(t,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Qn(t,l,a);break;case"style":co(t,a,i);break;case"data":if(e!=="object"){Qn(t,"data",a);break}case"src":case"href":if(a===""&&(e!=="a"||l!=="href")){t.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=Kn(""+a),t.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){t.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(l==="formAction"?(e!=="input"&&pt(t,e,"name",n.name,n,null),pt(t,e,"formEncType",n.formEncType,n,null),pt(t,e,"formMethod",n.formMethod,n,null),pt(t,e,"formTarget",n.formTarget,n,null)):(pt(t,e,"encType",n.encType,n,null),pt(t,e,"method",n.method,n,null),pt(t,e,"target",n.target,n,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=Kn(""+a),t.setAttribute(l,a);break;case"onClick":a!=null&&(t.onclick=Li);break;case"onScroll":a!=null&&rt("scroll",t);break;case"onScrollEnd":a!=null&&rt("scrollend",t);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(s(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(s(60));t.innerHTML=l}}break;case"multiple":t.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":t.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){t.removeAttribute("xlink:href");break}l=Kn(""+a),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""+a):t.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""):t.removeAttribute(l);break;case"capture":case"download":a===!0?t.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,a):t.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?t.setAttribute(l,a):t.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?t.removeAttribute(l):t.setAttribute(l,a);break;case"popover":rt("beforetoggle",t),rt("toggle",t),Xn(t,"popover",a);break;case"xlinkActuate":Ue(t,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Ue(t,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Ue(t,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Ue(t,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Ue(t,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Ue(t,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Ue(t,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Ue(t,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Ue(t,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Xn(t,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=k0.get(l)||l,Xn(t,l,a))}}function uc(t,e,l,a,n,i){switch(l){case"style":co(t,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(s(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(s(60));t.innerHTML=l}}break;case"children":typeof a=="string"?ta(t,a):(typeof a=="number"||typeof a=="bigint")&&ta(t,""+a);break;case"onScroll":a!=null&&rt("scroll",t);break;case"onScrollEnd":a!=null&&rt("scrollend",t);break;case"onClick":a!=null&&(t.onclick=Li);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Fc.hasOwnProperty(l))t:{if(l[0]==="o"&&l[1]==="n"&&(n=l.endsWith("Capture"),e=l.slice(2,n?l.length-7:void 0),i=t[It]||null,i=i!=null?i[l]:null,typeof i=="function"&&t.removeEventListener(e,i,n),typeof a=="function")){typeof i!="function"&&i!==null&&(l in t?t[l]=null:t.hasAttribute(l)&&t.removeAttribute(l)),t.addEventListener(e,a,n);break t}l in t?t[l]=a:a===!0?t.setAttribute(l,""):Xn(t,l,a)}}}function Vt(t,e,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":rt("error",t),rt("load",t);var a=!1,n=!1,i;for(i in l)if(l.hasOwnProperty(i)){var r=l[i];if(r!=null)switch(i){case"src":a=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:pt(t,e,i,r,l,null)}}n&&pt(t,e,"srcSet",l.srcSet,l,null),a&&pt(t,e,"src",l.src,l,null);return;case"input":rt("invalid",t);var o=i=r=n=null,m=null,z=null;for(a in l)if(l.hasOwnProperty(a)){var D=l[a];if(D!=null)switch(a){case"name":n=D;break;case"type":r=D;break;case"checked":m=D;break;case"defaultChecked":z=D;break;case"value":i=D;break;case"defaultValue":o=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(s(137,e));break;default:pt(t,e,a,D,l,null)}}no(t,i,o,m,z,r,n,!1),Vn(t);return;case"select":rt("invalid",t),a=r=i=null;for(n in l)if(l.hasOwnProperty(n)&&(o=l[n],o!=null))switch(n){case"value":i=o;break;case"defaultValue":r=o;break;case"multiple":a=o;default:pt(t,e,n,o,l,null)}e=i,l=r,t.multiple=!!a,e!=null?Pl(t,!!a,e,!1):l!=null&&Pl(t,!!a,l,!0);return;case"textarea":rt("invalid",t),i=n=a=null;for(r in l)if(l.hasOwnProperty(r)&&(o=l[r],o!=null))switch(r){case"value":a=o;break;case"defaultValue":n=o;break;case"children":i=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(s(91));break;default:pt(t,e,r,o,l,null)}uo(t,a,n,i),Vn(t);return;case"option":for(m in l)if(l.hasOwnProperty(m)&&(a=l[m],a!=null))switch(m){case"selected":t.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:pt(t,e,m,a,l,null)}return;case"dialog":rt("beforetoggle",t),rt("toggle",t),rt("cancel",t),rt("close",t);break;case"iframe":case"object":rt("load",t);break;case"video":case"audio":for(a=0;a<Sn.length;a++)rt(Sn[a],t);break;case"image":rt("error",t),rt("load",t);break;case"details":rt("toggle",t);break;case"embed":case"source":case"link":rt("error",t),rt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(z in l)if(l.hasOwnProperty(z)&&(a=l[z],a!=null))switch(z){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:pt(t,e,z,a,l,null)}return;default:if(ju(e)){for(D in l)l.hasOwnProperty(D)&&(a=l[D],a!==void 0&&uc(t,e,D,a,l,void 0));return}}for(o in l)l.hasOwnProperty(o)&&(a=l[o],a!=null&&pt(t,e,o,a,l,null))}function dh(t,e,l,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,r=null,o=null,m=null,z=null,D=null;for(E in l){var N=l[E];if(l.hasOwnProperty(E)&&N!=null)switch(E){case"checked":break;case"value":break;case"defaultValue":m=N;default:a.hasOwnProperty(E)||pt(t,e,E,null,a,N)}}for(var T in a){var E=a[T];if(N=l[T],a.hasOwnProperty(T)&&(E!=null||N!=null))switch(T){case"type":i=E;break;case"name":n=E;break;case"checked":z=E;break;case"defaultChecked":D=E;break;case"value":r=E;break;case"defaultValue":o=E;break;case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(137,e));break;default:E!==N&&pt(t,e,T,E,a,N)}}bu(t,r,o,m,z,D,i,n);return;case"select":E=r=o=T=null;for(i in l)if(m=l[i],l.hasOwnProperty(i)&&m!=null)switch(i){case"value":break;case"multiple":E=m;default:a.hasOwnProperty(i)||pt(t,e,i,null,a,m)}for(n in a)if(i=a[n],m=l[n],a.hasOwnProperty(n)&&(i!=null||m!=null))switch(n){case"value":T=i;break;case"defaultValue":o=i;break;case"multiple":r=i;default:i!==m&&pt(t,e,n,i,a,m)}e=o,l=r,a=E,T!=null?Pl(t,!!l,T,!1):!!a!=!!l&&(e!=null?Pl(t,!!l,e,!0):Pl(t,!!l,l?[]:"",!1));return;case"textarea":E=T=null;for(o in l)if(n=l[o],l.hasOwnProperty(o)&&n!=null&&!a.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:pt(t,e,o,null,a,n)}for(r in a)if(n=a[r],i=l[r],a.hasOwnProperty(r)&&(n!=null||i!=null))switch(r){case"value":T=n;break;case"defaultValue":E=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(s(91));break;default:n!==i&&pt(t,e,r,n,a,i)}io(t,T,E);return;case"option":for(var I in l)if(T=l[I],l.hasOwnProperty(I)&&T!=null&&!a.hasOwnProperty(I))switch(I){case"selected":t.selected=!1;break;default:pt(t,e,I,null,a,T)}for(m in a)if(T=a[m],E=l[m],a.hasOwnProperty(m)&&T!==E&&(T!=null||E!=null))switch(m){case"selected":t.selected=T&&typeof T!="function"&&typeof T!="symbol";break;default:pt(t,e,m,T,a,E)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var J in l)T=l[J],l.hasOwnProperty(J)&&T!=null&&!a.hasOwnProperty(J)&&pt(t,e,J,null,a,T);for(z in a)if(T=a[z],E=l[z],a.hasOwnProperty(z)&&T!==E&&(T!=null||E!=null))switch(z){case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(137,e));break;default:pt(t,e,z,T,a,E)}return;default:if(ju(e)){for(var gt in l)T=l[gt],l.hasOwnProperty(gt)&&T!==void 0&&!a.hasOwnProperty(gt)&&uc(t,e,gt,void 0,a,T);for(D in a)T=a[D],E=l[D],!a.hasOwnProperty(D)||T===E||T===void 0&&E===void 0||uc(t,e,D,T,a,E);return}}for(var x in l)T=l[x],l.hasOwnProperty(x)&&T!=null&&!a.hasOwnProperty(x)&&pt(t,e,x,null,a,T);for(N in a)T=a[N],E=l[N],!a.hasOwnProperty(N)||T===E||T==null&&E==null||pt(t,e,N,T,a,E)}var rc=null,cc=null;function qi(t){return t.nodeType===9?t:t.ownerDocument}function od(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function sd(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function oc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var sc=null;function mh(){var t=window.event;return t&&t.type==="popstate"?t===sc?!1:(sc=t,!0):(sc=null,!1)}var fd=typeof setTimeout=="function"?setTimeout:void 0,hh=typeof clearTimeout=="function"?clearTimeout:void 0,dd=typeof Promise=="function"?Promise:void 0,ph=typeof queueMicrotask=="function"?queueMicrotask:typeof dd<"u"?function(t){return dd.resolve(null).then(t).catch(gh)}:fd;function gh(t){setTimeout(function(){throw t})}function xl(t){return t==="head"}function md(t,e){var l=e,a=0,n=0;do{var i=l.nextSibling;if(t.removeChild(l),i&&i.nodeType===8)if(l=i.data,l==="/$"){if(0<a&&8>a){l=a;var r=t.ownerDocument;if(l&1&&zn(r.documentElement),l&2&&zn(r.body),l&4)for(l=r.head,zn(l),r=l.firstChild;r;){var o=r.nextSibling,m=r.nodeName;r[Ha]||m==="SCRIPT"||m==="STYLE"||m==="LINK"&&r.rel.toLowerCase()==="stylesheet"||l.removeChild(r),r=o}}if(n===0){t.removeChild(i),Mn(e);return}n--}else l==="$"||l==="$?"||l==="$!"?n++:a=l.charCodeAt(0)-48;else a=0;l=i}while(l);Mn(e)}function fc(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var l=e;switch(e=e.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":fc(l),gu(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}t.removeChild(l)}}function vh(t,e,l,a){for(;t.nodeType===1;){var n=l;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!a&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(a){if(!t[Ha])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(i=t.getAttribute("rel"),i==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(i!==n.rel||t.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||t.getAttribute("title")!==(n.title==null?null:n.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(i=t.getAttribute("src"),(i!==(n.src==null?null:n.src)||t.getAttribute("type")!==(n.type==null?null:n.type)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&t.getAttribute("name")===i)return t}else return t;if(t=Ae(t.nextSibling),t===null)break}return null}function yh(t,e,l){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!l||(t=Ae(t.nextSibling),t===null))return null;return t}function dc(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function xh(t,e){var l=t.ownerDocument;if(t.data!=="$?"||l.readyState==="complete")e();else{var a=function(){e(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),t._reactRetry=a}}function Ae(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}var mc=null;function hd(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="$"||l==="$!"||l==="$?"){if(e===0)return t;e--}else l==="/$"&&e++}t=t.previousSibling}return null}function pd(t,e,l){switch(e=qi(l),t){case"html":if(t=e.documentElement,!t)throw Error(s(452));return t;case"head":if(t=e.head,!t)throw Error(s(453));return t;case"body":if(t=e.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function zn(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);gu(t)}var ze=new Map,gd=new Set;function ki(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var $e=Y.d;Y.d={f:bh,r:Sh,D:jh,C:zh,L:Th,m:Eh,X:Ch,S:Ah,M:Rh};function bh(){var t=$e.f(),e=Oi();return t||e}function Sh(t){var e=Wl(t);e!==null&&e.tag===5&&e.type==="form"?_s(e):$e.r(t)}var wa=typeof document>"u"?null:document;function vd(t,e,l){var a=wa;if(a&&typeof e=="string"&&e){var n=ge(e);n='link[rel="'+t+'"][href="'+n+'"]',typeof l=="string"&&(n+='[crossorigin="'+l+'"]'),gd.has(n)||(gd.add(n),t={rel:t,crossOrigin:l,href:e},a.querySelector(n)===null&&(e=a.createElement("link"),Vt(e,"link",t),Lt(e),a.head.appendChild(e)))}}function jh(t){$e.D(t),vd("dns-prefetch",t,null)}function zh(t,e){$e.C(t,e),vd("preconnect",t,e)}function Th(t,e,l){$e.L(t,e,l);var a=wa;if(a&&t&&e){var n='link[rel="preload"][as="'+ge(e)+'"]';e==="image"&&l&&l.imageSrcSet?(n+='[imagesrcset="'+ge(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(n+='[imagesizes="'+ge(l.imageSizes)+'"]')):n+='[href="'+ge(t)+'"]';var i=n;switch(e){case"style":i=Da(t);break;case"script":i=Ma(t)}ze.has(i)||(t=A({rel:"preload",href:e==="image"&&l&&l.imageSrcSet?void 0:t,as:e},l),ze.set(i,t),a.querySelector(n)!==null||e==="style"&&a.querySelector(Tn(i))||e==="script"&&a.querySelector(En(i))||(e=a.createElement("link"),Vt(e,"link",t),Lt(e),a.head.appendChild(e)))}}function Eh(t,e){$e.m(t,e);var l=wa;if(l&&t){var a=e&&typeof e.as=="string"?e.as:"script",n='link[rel="modulepreload"][as="'+ge(a)+'"][href="'+ge(t)+'"]',i=n;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Ma(t)}if(!ze.has(i)&&(t=A({rel:"modulepreload",href:t},e),ze.set(i,t),l.querySelector(n)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(En(i)))return}a=l.createElement("link"),Vt(a,"link",t),Lt(a),l.head.appendChild(a)}}}function Ah(t,e,l){$e.S(t,e,l);var a=wa;if(a&&t){var n=$l(a).hoistableStyles,i=Da(t);e=e||"default";var r=n.get(i);if(!r){var o={loading:0,preload:null};if(r=a.querySelector(Tn(i)))o.loading=5;else{t=A({rel:"stylesheet",href:t,"data-precedence":e},l),(l=ze.get(i))&&hc(t,l);var m=r=a.createElement("link");Lt(m),Vt(m,"link",t),m._p=new Promise(function(z,D){m.onload=z,m.onerror=D}),m.addEventListener("load",function(){o.loading|=1}),m.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Gi(r,e,a)}r={type:"stylesheet",instance:r,count:1,state:o},n.set(i,r)}}}function Ch(t,e){$e.X(t,e);var l=wa;if(l&&t){var a=$l(l).hoistableScripts,n=Ma(t),i=a.get(n);i||(i=l.querySelector(En(n)),i||(t=A({src:t,async:!0},e),(e=ze.get(n))&&pc(t,e),i=l.createElement("script"),Lt(i),Vt(i,"link",t),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function Rh(t,e){$e.M(t,e);var l=wa;if(l&&t){var a=$l(l).hoistableScripts,n=Ma(t),i=a.get(n);i||(i=l.querySelector(En(n)),i||(t=A({src:t,async:!0,type:"module"},e),(e=ze.get(n))&&pc(t,e),i=l.createElement("script"),Lt(i),Vt(i,"link",t),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function yd(t,e,l,a){var n=(n=et.current)?ki(n):null;if(!n)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(e=Da(l.href),l=$l(n).hoistableStyles,a=l.get(e),a||(a={type:"style",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){t=Da(l.href);var i=$l(n).hoistableStyles,r=i.get(t);if(r||(n=n.ownerDocument||n,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(t,r),(i=n.querySelector(Tn(t)))&&!i._p&&(r.instance=i,r.state.loading=5),ze.has(t)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},ze.set(t,l),i||wh(n,t,l,r.state))),e&&a===null)throw Error(s(528,""));return r}if(e&&a!==null)throw Error(s(529,""));return null;case"script":return e=l.async,l=l.src,typeof l=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Ma(l),l=$l(n).hoistableScripts,a=l.get(e),a||(a={type:"script",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Da(t){return'href="'+ge(t)+'"'}function Tn(t){return'link[rel="stylesheet"]['+t+"]"}function xd(t){return A({},t,{"data-precedence":t.precedence,precedence:null})}function wh(t,e,l,a){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?a.loading=1:(e=t.createElement("link"),a.preload=e,e.addEventListener("load",function(){return a.loading|=1}),e.addEventListener("error",function(){return a.loading|=2}),Vt(e,"link",l),Lt(e),t.head.appendChild(e))}function Ma(t){return'[src="'+ge(t)+'"]'}function En(t){return"script[async]"+t}function bd(t,e,l){if(e.count++,e.instance===null)switch(e.type){case"style":var a=t.querySelector('style[data-href~="'+ge(l.href)+'"]');if(a)return e.instance=a,Lt(a),a;var n=A({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(t.ownerDocument||t).createElement("style"),Lt(a),Vt(a,"style",n),Gi(a,l.precedence,t),e.instance=a;case"stylesheet":n=Da(l.href);var i=t.querySelector(Tn(n));if(i)return e.state.loading|=4,e.instance=i,Lt(i),i;a=xd(l),(n=ze.get(n))&&hc(a,n),i=(t.ownerDocument||t).createElement("link"),Lt(i);var r=i;return r._p=new Promise(function(o,m){r.onload=o,r.onerror=m}),Vt(i,"link",a),e.state.loading|=4,Gi(i,l.precedence,t),e.instance=i;case"script":return i=Ma(l.src),(n=t.querySelector(En(i)))?(e.instance=n,Lt(n),n):(a=l,(n=ze.get(i))&&(a=A({},l),pc(a,n)),t=t.ownerDocument||t,n=t.createElement("script"),Lt(n),Vt(n,"link",a),t.head.appendChild(n),e.instance=n);case"void":return null;default:throw Error(s(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(a=e.instance,e.state.loading|=4,Gi(a,l.precedence,t));return e.instance}function Gi(t,e,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=a.length?a[a.length-1]:null,i=n,r=0;r<a.length;r++){var o=a[r];if(o.dataset.precedence===e)i=o;else if(i!==n)break}i?i.parentNode.insertBefore(t,i.nextSibling):(e=l.nodeType===9?l.head:l,e.insertBefore(t,e.firstChild))}function hc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function pc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Xi=null;function Sd(t,e,l){if(Xi===null){var a=new Map,n=Xi=new Map;n.set(l,a)}else n=Xi,a=n.get(l),a||(a=new Map,n.set(l,a));if(a.has(t))return a;for(a.set(t,null),l=l.getElementsByTagName(t),n=0;n<l.length;n++){var i=l[n];if(!(i[Ha]||i[Jt]||t==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var r=i.getAttribute(e)||"";r=t+r;var o=a.get(r);o?o.push(i):a.set(r,[i])}}return a}function jd(t,e,l){t=t.ownerDocument||t,t.head.insertBefore(l,e==="title"?t.querySelector("head > title"):null)}function Dh(t,e,l){if(l===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function zd(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var An=null;function Mh(){}function Oh(t,e,l){if(An===null)throw Error(s(475));var a=An;if(e.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var n=Da(l.href),i=t.querySelector(Tn(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(a.count++,a=Qi.bind(a),t.then(a,a)),e.state.loading|=4,e.instance=i,Lt(i);return}i=t.ownerDocument||t,l=xd(l),(n=ze.get(n))&&hc(l,n),i=i.createElement("link"),Lt(i);var r=i;r._p=new Promise(function(o,m){r.onload=o,r.onerror=m}),Vt(i,"link",l),e.instance=i}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(a.count++,e=Qi.bind(a),t.addEventListener("load",e),t.addEventListener("error",e))}}function Nh(){if(An===null)throw Error(s(475));var t=An;return t.stylesheets&&t.count===0&&gc(t,t.stylesheets),0<t.count?function(e){var l=setTimeout(function(){if(t.stylesheets&&gc(t,t.stylesheets),t.unsuspend){var a=t.unsuspend;t.unsuspend=null,a()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(l)}}:null}function Qi(){if(this.count--,this.count===0){if(this.stylesheets)gc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Vi=null;function gc(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Vi=new Map,e.forEach(Bh,t),Vi=null,Qi.call(t))}function Bh(t,e){if(!(e.state.loading&4)){var l=Vi.get(t);if(l)var a=l.get(null);else{l=new Map,Vi.set(t,l);for(var n=t.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var r=n[i];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(l.set(r.dataset.precedence,r),a=r)}a&&l.set(null,a)}n=e.instance,r=n.getAttribute("data-precedence"),i=l.get(r)||a,i===a&&l.set(null,n),l.set(r,n),this.count++,a=Qi.bind(this),n.addEventListener("load",a),n.addEventListener("error",a),i?i.parentNode.insertBefore(n,i.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(n,t.firstChild)),e.state.loading|=4}}var Cn={$$typeof:lt,Provider:null,Consumer:null,_currentValue:F,_currentValue2:F,_threadCount:0};function _h(t,e,l,a,n,i,r,o){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=du(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=du(0),this.hiddenUpdates=du(null),this.identifierPrefix=a,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function Td(t,e,l,a,n,i,r,o,m,z,D,N){return t=new _h(t,e,l,r,o,m,z,N),e=1,i===!0&&(e|=24),i=ce(3,null,null,e),t.current=i,i.stateNode=t,e=Fu(),e.refCount++,t.pooledCache=e,e.refCount++,i.memoizedState={element:a,isDehydrated:l,cache:e},er(i),t}function Ed(t){return t?(t=ca,t):ca}function Ad(t,e,l,a,n,i){n=Ed(n),a.context===null?a.context=n:a.pendingContext=n,a=ul(e),a.payload={element:l},i=i===void 0?null:i,i!==null&&(a.callback=i),l=rl(t,a,e),l!==null&&(me(l,t,e),ln(l,t,e))}function Cd(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var l=t.retryLane;t.retryLane=l!==0&&l<e?l:e}}function vc(t,e){Cd(t,e),(t=t.alternate)&&Cd(t,e)}function Rd(t){if(t.tag===13){var e=ra(t,67108864);e!==null&&me(e,t,67108864),vc(t,67108864)}}var Zi=!0;function Uh(t,e,l,a){var n=M.T;M.T=null;var i=Y.p;try{Y.p=2,yc(t,e,l,a)}finally{Y.p=i,M.T=n}}function Hh(t,e,l,a){var n=M.T;M.T=null;var i=Y.p;try{Y.p=8,yc(t,e,l,a)}finally{Y.p=i,M.T=n}}function yc(t,e,l,a){if(Zi){var n=xc(a);if(n===null)ic(t,e,a,Ki,l),Dd(t,a);else if(Lh(n,t,e,l,a))a.stopPropagation();else if(Dd(t,a),e&4&&-1<Yh.indexOf(t)){for(;n!==null;){var i=Wl(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var r=Cl(i.pendingLanes);if(r!==0){var o=i;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var m=1<<31-ue(r);o.entanglements[1]|=m,r&=~m}Be(i),(dt&6)===0&&(Di=we()+500,bn(0))}}break;case 13:o=ra(i,2),o!==null&&me(o,i,2),Oi(),vc(i,2)}if(i=xc(a),i===null&&ic(t,e,a,Ki,l),i===n)break;n=i}n!==null&&a.stopPropagation()}else ic(t,e,a,null,l)}}function xc(t){return t=Tu(t),bc(t)}var Ki=null;function bc(t){if(Ki=null,t=Jl(t),t!==null){var e=p(t);if(e===null)t=null;else{var l=e.tag;if(l===13){if(t=b(e),t!==null)return t;t=null}else if(l===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Ki=t,null}function wd(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(z0()){case kc:return 2;case Gc:return 8;case Ln:case T0:return 32;case Xc:return 268435456;default:return 32}default:return 32}}var Sc=!1,bl=null,Sl=null,jl=null,Rn=new Map,wn=new Map,zl=[],Yh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Dd(t,e){switch(t){case"focusin":case"focusout":bl=null;break;case"dragenter":case"dragleave":Sl=null;break;case"mouseover":case"mouseout":jl=null;break;case"pointerover":case"pointerout":Rn.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":wn.delete(e.pointerId)}}function Dn(t,e,l,a,n,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:l,eventSystemFlags:a,nativeEvent:i,targetContainers:[n]},e!==null&&(e=Wl(e),e!==null&&Rd(e)),t):(t.eventSystemFlags|=a,e=t.targetContainers,n!==null&&e.indexOf(n)===-1&&e.push(n),t)}function Lh(t,e,l,a,n){switch(e){case"focusin":return bl=Dn(bl,t,e,l,a,n),!0;case"dragenter":return Sl=Dn(Sl,t,e,l,a,n),!0;case"mouseover":return jl=Dn(jl,t,e,l,a,n),!0;case"pointerover":var i=n.pointerId;return Rn.set(i,Dn(Rn.get(i)||null,t,e,l,a,n)),!0;case"gotpointercapture":return i=n.pointerId,wn.set(i,Dn(wn.get(i)||null,t,e,l,a,n)),!0}return!1}function Md(t){var e=Jl(t.target);if(e!==null){var l=p(e);if(l!==null){if(e=l.tag,e===13){if(e=b(l),e!==null){t.blockedOn=e,O0(t.priority,function(){if(l.tag===13){var a=de();a=mu(a);var n=ra(l,a);n!==null&&me(n,l,a),vc(l,a)}});return}}else if(e===3&&l.stateNode.current.memoizedState.isDehydrated){t.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ji(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var l=xc(t.nativeEvent);if(l===null){l=t.nativeEvent;var a=new l.constructor(l.type,l);zu=a,l.target.dispatchEvent(a),zu=null}else return e=Wl(l),e!==null&&Rd(e),t.blockedOn=l,!1;e.shift()}return!0}function Od(t,e,l){Ji(t)&&l.delete(e)}function qh(){Sc=!1,bl!==null&&Ji(bl)&&(bl=null),Sl!==null&&Ji(Sl)&&(Sl=null),jl!==null&&Ji(jl)&&(jl=null),Rn.forEach(Od),wn.forEach(Od)}function Wi(t,e){t.blockedOn===e&&(t.blockedOn=null,Sc||(Sc=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,qh)))}var $i=null;function Nd(t){$i!==t&&($i=t,u.unstable_scheduleCallback(u.unstable_NormalPriority,function(){$i===t&&($i=null);for(var e=0;e<t.length;e+=3){var l=t[e],a=t[e+1],n=t[e+2];if(typeof a!="function"){if(bc(a||l)===null)continue;break}var i=Wl(l);i!==null&&(t.splice(e,3),e-=3,br(i,{pending:!0,data:n,method:l.method,action:a},a,n))}}))}function Mn(t){function e(m){return Wi(m,t)}bl!==null&&Wi(bl,t),Sl!==null&&Wi(Sl,t),jl!==null&&Wi(jl,t),Rn.forEach(e),wn.forEach(e);for(var l=0;l<zl.length;l++){var a=zl[l];a.blockedOn===t&&(a.blockedOn=null)}for(;0<zl.length&&(l=zl[0],l.blockedOn===null);)Md(l),l.blockedOn===null&&zl.shift();if(l=(t.ownerDocument||t).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var n=l[a],i=l[a+1],r=n[It]||null;if(typeof i=="function")r||Nd(l);else if(r){var o=null;if(i&&i.hasAttribute("formAction")){if(n=i,r=i[It]||null)o=r.formAction;else if(bc(n)!==null)continue}else o=r.action;typeof o=="function"?l[a+1]=o:(l.splice(a,3),a-=3),Nd(l)}}}function jc(t){this._internalRoot=t}Fi.prototype.render=jc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(s(409));var l=e.current,a=de();Ad(l,a,t,e,null,null)},Fi.prototype.unmount=jc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ad(t.current,2,null,t,null,null),Oi(),e[Kl]=null}};function Fi(t){this._internalRoot=t}Fi.prototype.unstable_scheduleHydration=function(t){if(t){var e=Jc();t={blockedOn:null,target:t,priority:e};for(var l=0;l<zl.length&&e!==0&&e<zl[l].priority;l++);zl.splice(l,0,t),l===0&&Md(t)}};var Bd=f.version;if(Bd!=="19.1.1")throw Error(s(527,Bd,"19.1.1"));Y.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=S(e),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var kh={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:M,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ii=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ii.isDisabled&&Ii.supportsFiber)try{Ba=Ii.inject(kh),ie=Ii}catch{}}return Nn.createRoot=function(t,e){if(!h(t))throw Error(s(299));var l=!1,a="",n=Ws,i=$s,r=Fs,o=null;return e!=null&&(e.unstable_strictMode===!0&&(l=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(n=e.onUncaughtError),e.onCaughtError!==void 0&&(i=e.onCaughtError),e.onRecoverableError!==void 0&&(r=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(o=e.unstable_transitionCallbacks)),e=Td(t,1,!1,null,null,l,a,n,i,r,o,null),t[Kl]=e.current,nc(t),new jc(e)},Nn.hydrateRoot=function(t,e,l){if(!h(t))throw Error(s(299));var a=!1,n="",i=Ws,r=$s,o=Fs,m=null,z=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(n=l.identifierPrefix),l.onUncaughtError!==void 0&&(i=l.onUncaughtError),l.onCaughtError!==void 0&&(r=l.onCaughtError),l.onRecoverableError!==void 0&&(o=l.onRecoverableError),l.unstable_transitionCallbacks!==void 0&&(m=l.unstable_transitionCallbacks),l.formState!==void 0&&(z=l.formState)),e=Td(t,1,!0,e,l??null,a,n,i,r,o,m,z),e.context=Ed(null),l=e.current,a=de(),a=mu(a),n=ul(a),n.callback=null,rl(l,n,a),l=a,e.current.lanes=l,Ua(e,l),Be(e),t[Kl]=e.current,nc(t),new Fi(e)},Nn.version="19.1.1",Nn}var Qd;function Ih(){if(Qd)return Ec.exports;Qd=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(f){console.error(f)}}return u(),Ec.exports=Fh(),Ec.exports}var Ph=Ih();/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tp=u=>u.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ep=u=>u.replace(/^([A-Z])|[\s-_]+(\w)/g,(f,d,s)=>s?s.toUpperCase():d.toLowerCase()),Vd=u=>{const f=ep(u);return f.charAt(0).toUpperCase()+f.slice(1)},e0=(...u)=>u.filter((f,d,s)=>!!f&&f.trim()!==""&&s.indexOf(f)===d).join(" ").trim(),lp=u=>{for(const f in u)if(f.startsWith("aria-")||f==="role"||f==="title")return!0};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ap={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const np=w.forwardRef(({color:u="currentColor",size:f=24,strokeWidth:d=2,absoluteStrokeWidth:s,className:h="",children:p,iconNode:b,...C},S)=>w.createElement("svg",{ref:S,...ap,width:f,height:f,stroke:u,strokeWidth:s?Number(d)*24/Number(f):d,className:e0("lucide",h),...!p&&!lp(C)&&{"aria-hidden":"true"},...C},[...b.map(([v,A])=>w.createElement(v,A)),...Array.isArray(p)?p:[p]]));/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l0=(u,f)=>{const d=w.forwardRef(({className:s,...h},p)=>w.createElement(np,{ref:p,iconNode:f,className:e0(`lucide-${tp(Vd(u))}`,`lucide-${u}`,s),...h}));return d.displayName=Vd(u),d};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ip=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],up=l0("menu",ip);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rp=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],cp=l0("x",rp);function op(){const[u,f]=w.useState(!1),[d,s]=w.useState(!1);w.useEffect(()=>{const b=()=>{f(window.scrollY>80)};return window.addEventListener("scroll",b),()=>window.removeEventListener("scroll",b)},[]);const h=[{id:"home",label:"Home"},{id:"about",label:"About"},{id:"services",label:"Services"},{id:"projects",label:"Projects"},{id:"footer",label:"Contact"}],p=b=>{const C=document.getElementById(b);C&&C.scrollIntoView({behavior:"smooth"}),s(!1)};return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:`
        .brand-text {
          font-weight: 800;
          font-size: 1.75rem;
          background: linear-gradient(90deg, red, green, blue, red);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: colorRotate 8s infinite;
        }

        @keyframes colorRotate {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .nav-link {
          cursor: pointer;
          position: relative;
          font-size: 1.05rem;
          font-weight: 500;
          color: ${u?"#1a1a1a":"#ffffff"};
          transition: color 0.3s ease;
        }

        .nav-link::after {
          content: "";
          position: absolute;
          bottom: -6px;
          left: 0;
          height: 3px;
          width: 0;
          background: linear-gradient(135deg, #00BCD4, #0097A7);
          transition: width 0.3s ease;
          border-radius: 4px;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .mobile-menu-btn {
          display: none;
          cursor: pointer;
          color: ${u?"#1a1a1a":"#ffffff"};
          transition: color 0.3s ease;
        }

        .desktop-menu {
          display: flex;
          gap: 2.5rem;
        }

        .mobile-menu {
          display: none;
        }

        @media (max-width: 768px) {
          .brand-text {
            font-size: 1.5rem;
          }

          .desktop-menu {
            display: none;
          }

          .mobile-menu-btn {
            display: block;
          }

          .mobile-menu {
            display: flex;
            flex-direction: column;
            position: fixed;
            top: 0;
            right: 0;
            width: 70%;
            max-width: 300px;
            height: 100vh;
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(20px);
            box-shadow: -5px 0 30px rgba(0, 0, 0, 0.2);
            padding: 5rem 2rem 2rem;
            gap: 2rem;
            transform: translateX(${d?"0":"100%"});
            transition: transform 0.3s ease;
            z-index: 999;
          }

          .mobile-nav-link {
            cursor: pointer;
            font-size: 1.25rem;
            font-weight: 600;
            color: #1a1a1a;
            padding: 0.75rem 0;
            border-bottom: 2px solid #f0f0f0;
            transition: all 0.3s ease;
          }

          .mobile-nav-link:hover {
            color: #00BCD4;
            padding-left: 1rem;
          }

          .mobile-overlay {
            display: ${d?"block":"none"};
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background: rgba(0, 0, 0, 0.5);
            z-index: 998;
          }
        }
      `}),c.jsx("div",{className:"mobile-overlay",onClick:()=>s(!1)}),c.jsx("nav",{style:{position:"fixed",top:0,width:"100%",zIndex:1e3,padding:u?"0.8rem 0":"1.3rem 0",background:u?"rgba(255,255,255,0.95)":"transparent",backdropFilter:u?"blur(12px)":"none",boxShadow:u?"0 10px 30px rgba(0,0,0,0.12)":"none",transition:"all 0.3s ease"},children:c.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto",padding:"0 1.5rem",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[c.jsx("span",{className:"brand-text",onClick:()=>p("home"),style:{cursor:"pointer"},children:"AAVRC"}),c.jsx("div",{className:"desktop-menu",children:h.map(b=>c.jsx("span",{className:"nav-link",onClick:()=>p(b.id),children:b.label},b.id))}),c.jsx("div",{className:"mobile-menu-btn",onClick:()=>s(!d),children:d?c.jsx(cp,{size:28}):c.jsx(up,{size:28})})]})}),c.jsx("div",{className:"mobile-menu",children:h.map(b=>c.jsx("div",{className:"mobile-nav-link",onClick:()=>p(b.id),children:b.label},b.id))})]})}const sp="/assets/hero-DgiGUaTL.mp4",Zd="/assets/hero-DXEkLzQ3.jpg";function fp(){const u=w.useRef(null);w.useEffect(()=>{u.current?.play().catch(()=>{})},[]);const[f,d]=w.useState(""),s="Web Development, AI Solutions & Software Services";w.useEffect(()=>{let p=0;const b=setInterval(()=>{p<=s.length?(d(s.slice(0,p)),p++):clearInterval(b)},50);return()=>clearInterval(b)},[]);const h=p=>{const b=document.getElementById(p);b&&b.scrollIntoView({behavior:"smooth"})};return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html, body {
          overflow-x: hidden;
          width: 100%;
          max-width: 100vw;
        }

        .video-hero {
          height: 100vh;
          width: 100%;
          max-width: 100vw;
          position: relative;
          overflow: hidden;
        }

        .video-hero video {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          height: 100%;
          min-width: 100%;
          min-height: 100%;
          transform: translate(-50%, -50%);
          object-fit: cover;
        }

        .hero-section {
          background: #ffffff;
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow-x: hidden;
          width: 100%;
          max-width: 100vw;
          padding: 100px 20px 60px;
        }

        .hero-container {
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
          position: relative;
          z-index: 2;
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .hero-left {
          animation: slideInLeft 1s ease;
          position: relative;
        }

        .image-wrapper {
          position: relative;
          padding: 30px;
          width: 100%;
          max-width: 100%;
        }

        .main-image-container {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
          border: 5px solid #fff;
          cursor: pointer;
          width: 100%;
          max-width: 100%;
        }

        .main-image {
          width: 100%;
          max-width: 100%;
          height: 500px;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(0, 188, 212, 0.15) 0%, transparent 60%);
          pointer-events: none;
        }

        .image-zoom-container:hover .zoom-image {
          transform: scale(1.1);
        }

        .floating-card {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 18px;
          background: #ffffff;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
          border: 1px solid rgba(0, 188, 212, 0.2);
          animation: float 3s ease-in-out infinite;
          z-index: 3;
        }

        .floating-card-1 {
          top: 50px;
          right: 0;
        }

        .floating-card-2 {
          top: 45%;
          left: 0;
          animation-delay: 1s;
        }

        .floating-card-3 {
          bottom: 60px;
          right: 20px;
          animation-delay: 2s;
        }

        .floating-icon {
          font-size: 1.3rem;
        }

        .floating-text {
          font-size: 0.85rem;
          font-weight: 600;
          color: #1a1a1a;
          white-space: nowrap;
        }

        .hero-right {
          animation: slideInRight 1s ease;
          text-align: left;
        }

        .badge {
          display: inline-block;
          padding: 10px 20px;
          background: linear-gradient(135deg, rgba(0, 188, 212, 0.15) 0%, rgba(0, 188, 212, 0.05) 100%);
          border: 1px solid rgba(0, 188, 212, 0.3);
          border-radius: 50px;
          margin-bottom: 25px;
        }

        .badge-text {
          color: #0097A7;
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 1px;
        }

        .hero-title {
          font-size: 4.5rem;
          font-weight: 800;
          color: #1a1a1a;
          margin-bottom: 15px;
          letter-spacing: 3px;
          line-height: 1.1;
          margin-top: 0;
        }

        .cursor {
          color: #00BCD4;
          animation: blink 1s infinite;
          font-weight: 300;
        }

        .hero-subtitle {
          font-size: 1.4rem;
          color: #00BCD4;
          margin-bottom: 25px;
          font-weight: 500;
          min-height: 35px;
          border-left: 3px solid #00BCD4;
          padding-left: 15px;
        }

        .hero-description {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #666;
          margin-bottom: 35px;
          max-width: 500px;
          word-wrap: break-word;
          overflow-wrap: break-word;
        }

        .cta-buttons {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
          margin-bottom: 40px;
        }

        .btn-primary,
        .btn-secondary {
          padding: 16px 32px;
          border-radius: 50px;
          font-size: 1rem;
          font-weight: 600;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .btn-primary {
          background: linear-gradient(135deg, #00BCD4 0%, #0097A7 100%);
          color: #ffffff;
          border: none;
          box-shadow: 0 8px 25px rgba(0, 188, 212, 0.35);
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(0, 188, 212, 0.45);
        }

        .btn-secondary {
          background: transparent;
          color: #1a1a1a;
          border: 2px solid #1a1a1a;
        }

        .btn-secondary:hover {
          background: #1a1a1a;
          color: #ffffff;
          transform: translateY(-3px);
        }

        .stats-container {
          display: flex;
          align-items: center;
          gap: 25px;
          padding: 25px 30px;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border-radius: 15px;
          border: 1px solid rgba(0, 188, 212, 0.2);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
          max-width: 100%;
          overflow: hidden;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .stat-number {
          font-size: 1.8rem;
          font-weight: 700;
          color: #00BCD4;
          line-height: 1;
        }

        .stat-label {
          font-size: 0.85rem;
          color: #888;
          margin-top: 5px;
        }

        .stat-divider {
          width: 1px;
          height: 40px;
          background: rgba(0, 188, 212, 0.3);
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes blink {
          0%, 50% {
            opacity: 1;
          }
          51%, 100% {
            opacity: 0;
          }
        }

        /* Tablet */
        @media (max-width: 992px) {
          .hero-section {
            padding: 100px 15px 50px;
          }
          
          .hero-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          
          .hero-left {
            order: 2;
          }
          
          .hero-right {
            order: 1;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          
          .hero-title {
            font-size: 3rem;
            text-align: center;
          }
          
          .hero-subtitle {
            text-align: center;
            border-left: none;
            padding-left: 0;
            border-bottom: 3px solid #00BCD4;
            padding-bottom: 10px;
            display: inline-block;
          }
          
          .hero-description {
            max-width: 100%;
            text-align: center;
          }
          
          .cta-buttons {
            justify-content: center;
          }
          
          .main-image {
            height: 350px;
          }
        }

        /* Mobile */
        @media (max-width: 768px) {
          .video-hero {
            height: 60vh;
          }

          .hero-section {
            padding: 90px 10px 40px;
            min-height: auto;
          }

          .hero-container {
            padding: 0 5px;
          }
          
          .hero-content {
            gap: 30px;
          }
          
          .image-wrapper {
            padding: 10px 5px;
          }
          
          .main-image {
            height: 280px;
          }
          
          .main-image-container {
            border-radius: 15px;
            border-width: 3px;
          }
          
          .badge {
            padding: 8px 16px;
          }
          
          .badge-text {
            font-size: 0.8rem;
          }
          
          .hero-title {
            font-size: 2.5rem;
            letter-spacing: 2px;
            margin-bottom: 10px;
            word-wrap: break-word;
          }
          
          .hero-subtitle {
            font-size: 1rem;
            min-height: auto;
            margin-bottom: 20px;
            word-wrap: break-word;
          }
          
          .hero-description {
            font-size: 0.95rem;
            line-height: 1.7;
            margin-bottom: 25px;
            padding: 0 5px;
            max-width: 100%;
          }
          
          .cta-buttons {
            flex-direction: column;
            gap: 12px;
            margin-bottom: 30px;
            width: 100%;
            padding: 0 10px;
          }
          
          .btn-primary,
          .btn-secondary {
            justify-content: center;
            padding: 14px 28px;
            font-size: 0.9rem;
            width: 100%;
            max-width: 100%;
          }
          
          .stats-container {
            padding: 20px 10px;
            gap: 15px;
            border-radius: 12px;
            width: 100%;
            max-width: 100%;
          }
          
          .stat-number {
            font-size: 1.5rem;
          }
          
          .stat-label {
            font-size: 0.75rem;
          }
          
          .stat-divider {
            height: 30px;
          }
          
          .floating-card {
            padding: 8px 12px;
          }
          
          .floating-icon {
            font-size: 1rem;
          }
          
          .floating-text {
            font-size: 0.7rem;
          }
          
          .floating-card-1 {
            top: 20px;
            right: 5px;
          }
          
          .floating-card-2 {
            left: 5px;
          }
          
          .floating-card-3 {
            bottom: 20px;
            right: 5px;
          }
        }

        /* Small Mobile */
        @media (max-width: 480px) {
          .video-hero {
            height: 50vh;
          }

          .hero-section {
            padding: 80px 8px 30px;
          }

          .hero-container {
            padding: 0 3px;
          }
          
          .hero-content {
            gap: 25px;
          }
          
          .image-wrapper {
            padding: 5px 3px;
          }
          
          .main-image {
            height: 220px;
          }
          
          .hero-title {
            font-size: 2rem;
            letter-spacing: 1px;
          }
          
          .hero-subtitle {
            font-size: 0.85rem;
          }
          
          .hero-description {
            font-size: 0.85rem;
            padding: 0 3px;
          }
          
          .cta-buttons {
            padding: 0 5px;
          }
          
          .btn-primary,
          .btn-secondary {
            padding: 12px 24px;
            font-size: 0.85rem;
          }
          
          .stats-container {
            padding: 15px 8px;
            gap: 10px;
          }
          
          .stat-number {
            font-size: 1.3rem;
          }
          
          .stat-label {
            font-size: 0.7rem;
          }
          
          .stat-divider {
            height: 25px;
          }
          
          .floating-card {
            padding: 5px 8px;
          }
          
          .floating-icon {
            font-size: 0.85rem;
          }
          
          .floating-text {
            font-size: 0.6rem;
          }
        }

        /* Extra Small Mobile */
        @media (max-width: 375px) {
          .video-hero {
            height: 45vh;
          }

          .hero-section {
            padding: 70px 5px 25px;
          }

          .hero-container {
            padding: 0 2px;
          }

          .hero-title {
            font-size: 1.8rem;
          }

          .hero-subtitle {
            font-size: 0.8rem;
          }

          .hero-description {
            font-size: 0.8rem;
          }

          .main-image {
            height: 200px;
          }

          .btn-primary,
          .btn-secondary {
            padding: 10px 20px;
            font-size: 0.8rem;
          }

          .stats-container {
            padding: 12px 5px;
            gap: 8px;
          }

          .stat-number {
            font-size: 1.1rem;
          }

          .stat-label {
            font-size: 0.65rem;
          }
        }
      `}),c.jsx("section",{id:"home",className:"video-hero",children:c.jsx("video",{ref:u,muted:!0,playsInline:!0,autoPlay:!0,loop:!0,preload:"auto",poster:Zd,children:c.jsx("source",{src:sp,type:"video/mp4"})})}),c.jsx("section",{className:"hero-section",children:c.jsx("div",{className:"hero-container",children:c.jsxs("div",{className:"hero-content",children:[c.jsx("div",{className:"hero-left",children:c.jsxs("div",{className:"image-wrapper",children:[c.jsxs("div",{className:"main-image-container image-zoom-container",children:[c.jsx("img",{src:Zd,alt:"AAVRC - Web Development & AI Solutions",className:"main-image zoom-image"}),c.jsx("div",{className:"image-overlay"})]}),c.jsxs("div",{className:"floating-card floating-card-1",children:[c.jsx("span",{className:"floating-icon",children:"⚡"}),c.jsx("span",{className:"floating-text",children:"Fast Delivery"})]}),c.jsxs("div",{className:"floating-card floating-card-2",children:[c.jsx("span",{className:"floating-icon",children:"🔒"}),c.jsx("span",{className:"floating-text",children:"Secure Code"})]}),c.jsxs("div",{className:"floating-card floating-card-3",children:[c.jsx("span",{className:"floating-icon",children:"🎯"}),c.jsx("span",{className:"floating-text",children:"100% Quality"})]})]})}),c.jsxs("div",{className:"hero-right",children:[c.jsx("div",{className:"badge",children:c.jsx("span",{className:"badge-text",children:"🚀 Innovation & Technology"})}),c.jsxs("h1",{className:"hero-title",children:["AAVRC",c.jsx("span",{className:"cursor",children:"|"})]}),c.jsx("div",{className:"hero-subtitle",children:f}),c.jsx("p",{className:"hero-description",children:"We develop comprehensive web applications, websites, employee management systems, digital flipbooks, e-commerce platforms, AI-powered chatbots, machine learning models, intelligent automation systems, and many more innovative solutions to grow your business with cutting-edge technology."}),c.jsxs("div",{className:"cta-buttons",children:[c.jsxs("button",{className:"btn-primary",onClick:()=>h("projects"),children:[c.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:c.jsx("path",{d:"M12 2v20M2 12h20"})}),"View Projects"]}),c.jsxs("button",{className:"btn-secondary",onClick:()=>h("footer"),children:[c.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[c.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),c.jsx("polyline",{points:"22,6 12,13 2,6"})]}),"Get Quote"]})]}),c.jsxs("div",{className:"stats-container",children:[c.jsxs("div",{className:"stat-item",children:[c.jsx("span",{className:"stat-number",children:"50+"}),c.jsx("span",{className:"stat-label",children:"Projects"})]}),c.jsx("div",{className:"stat-divider"}),c.jsxs("div",{className:"stat-item",children:[c.jsx("span",{className:"stat-number",children:"30+"}),c.jsx("span",{className:"stat-label",children:"Happy Clients"})]}),c.jsx("div",{className:"stat-divider"}),c.jsxs("div",{className:"stat-item",children:[c.jsx("span",{className:"stat-number",children:"5+"}),c.jsx("span",{className:"stat-label",children:"Years Exp"})]})]})]})]})})})]})}const dp="/assets/about1-jRjZFVG4.jpg",mp="/assets/about2-B6T6-41Q.jpg",hp="/assets/about3-Co1SnorY.jpg";function pp(){return c.jsx("section",{style:R.aboutSection,id:"about",children:c.jsxs("div",{style:R.container,children:[c.jsxs("div",{style:R.aboutGrid,children:[c.jsxs("div",{style:R.contentSection,children:[c.jsx("div",{style:R.badge,children:c.jsx("span",{style:R.badgeText,children:"About Us"})}),c.jsx("h2",{style:R.mainTitle,children:"YOUR VISION. OUR TECHNOLOGY"}),c.jsx("div",{style:R.divider}),c.jsx("p",{style:R.subtitle,children:"We Engineer Solutions That Transform Businesses"}),c.jsx("p",{style:R.description,children:"AAVRC specializes in comprehensive web development solutions including custom web applications, professional websites, employee management systems with attendance and salary handling, digital flipbook applications, e-commerce platforms, AI-powered chatbots, machine learning models, computer vision systems, natural language processing solutions, predictive analytics, and intelligent automation systems."}),c.jsx("p",{style:R.description,children:"We are committed to delivering high-quality, scalable, and innovative solutions that help businesses grow and succeed in the digital world. Our team combines creativity with technical expertise to build products that make a difference."}),c.jsxs("div",{style:R.featuresGrid,children:[c.jsxs("div",{style:R.featureItem,children:[c.jsx("div",{style:R.checkIcon,children:"✓"}),c.jsx("span",{children:"Complete web application development"})]}),c.jsxs("div",{style:R.featureItem,children:[c.jsx("div",{style:R.checkIcon,children:"✓"}),c.jsx("span",{children:"AI-powered chatbots and virtual assistants"})]}),c.jsxs("div",{style:R.featureItem,children:[c.jsx("div",{style:R.checkIcon,children:"✓"}),c.jsx("span",{children:"Employee management systems"})]}),c.jsxs("div",{style:R.featureItem,children:[c.jsx("div",{style:R.checkIcon,children:"✓"}),c.jsx("span",{children:"Machine learning models"})]}),c.jsxs("div",{style:R.featureItem,children:[c.jsx("div",{style:R.checkIcon,children:"✓"}),c.jsx("span",{children:"E-commerce platforms"})]}),c.jsxs("div",{style:R.featureItem,children:[c.jsx("div",{style:R.checkIcon,children:"✓"}),c.jsx("span",{children:"24/7 Support & Maintenance"})]})]}),c.jsxs("div",{style:R.ctaButtons,children:[c.jsx("a",{href:"#footer",className:"btn-primary",children:"Get Started"}),c.jsx("a",{href:"#projects",className:"btn-secondary",children:"View Projects"})]})]}),c.jsx("div",{style:R.imageSection,children:c.jsxs("div",{style:R.imagesWrapper,children:[c.jsx("div",{style:R.mainImageContainer,className:"about-image-container",children:c.jsx("img",{src:dp,alt:"About AAVRC",style:R.mainImage,className:"about-zoom-image"})}),c.jsx("div",{style:R.secondaryImageContainer,className:"about-image-container",children:c.jsx("img",{src:mp,alt:"Our Team",style:R.secondaryImage,className:"about-zoom-image"})}),c.jsx("div",{style:R.thirdImageContainer,className:"about-image-container",children:c.jsx("img",{src:hp,alt:"Our Work",style:R.thirdImage,className:"about-zoom-image"})}),c.jsxs("div",{style:R.experienceBadge,children:[c.jsx("span",{style:R.expNumber,children:"5+"}),c.jsx("span",{style:R.expText,children:"Years Experience"})]}),c.jsxs("div",{style:R.floatingCard,children:[c.jsx("span",{style:R.floatingIcon,children:"🚀"}),c.jsx("span",{style:R.floatingText,children:"50+ Projects"})]})]})})]}),c.jsx("div",{style:R.profileSection,children:c.jsxs("div",{style:R.profileCard,children:[c.jsx("div",{style:R.profileImg,children:c.jsxs("svg",{width:"80",height:"80",viewBox:"0 0 24 24",fill:"none",stroke:"#ffffff",strokeWidth:"1.5",children:[c.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),c.jsx("circle",{cx:"12",cy:"7",r:"4"})]})}),c.jsxs("div",{style:R.profileInfo,children:[c.jsx("h3",{style:R.profileName,children:"Rajender Chauhan"}),c.jsx("p",{style:R.designation,children:"Company Owner & Lead Developer"})]})]})}),c.jsxs("div",{style:R.skillsSection,children:[c.jsx("h3",{style:R.sectionTitle,children:"Technical Skills & Expertise"}),c.jsxs("div",{style:R.skillsGrid,children:[c.jsxs("div",{style:R.skillCard,className:"skill-card",children:[c.jsxs("div",{style:R.skillHeader,children:[c.jsxs("svg",{style:R.skillIcon,width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",stroke:"#00BCD4",strokeWidth:"2",children:[c.jsx("rect",{x:"2",y:"3",width:"20",height:"14",rx:"2"}),c.jsx("line",{x1:"8",y1:"21",x2:"16",y2:"21"}),c.jsx("line",{x1:"12",y1:"17",x2:"12",y2:"21"})]}),c.jsx("h4",{style:R.skillTitle,children:"Frontend Development"})]}),c.jsxs("ul",{style:R.skillList,children:[c.jsx("li",{style:R.skillItem,children:"React.js & Redux"}),c.jsx("li",{style:R.skillItem,children:"HTML5 & CSS3"}),c.jsx("li",{style:R.skillItem,children:"JavaScript (ES6+)"}),c.jsx("li",{style:R.skillItem,children:"Bootstrap 5"})]})]}),c.jsxs("div",{style:R.skillCard,className:"skill-card",children:[c.jsxs("div",{style:R.skillHeader,children:[c.jsxs("svg",{style:R.skillIcon,width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",stroke:"#00BCD4",strokeWidth:"2",children:[c.jsx("rect",{x:"2",y:"2",width:"20",height:"8",rx:"2"}),c.jsx("rect",{x:"2",y:"14",width:"20",height:"8",rx:"2"}),c.jsx("line",{x1:"6",y1:"6",x2:"6",y2:"6"}),c.jsx("line",{x1:"6",y1:"18",x2:"6",y2:"18"})]}),c.jsx("h4",{style:R.skillTitle,children:"Backend Development"})]}),c.jsxs("ul",{style:R.skillList,children:[c.jsx("li",{style:R.skillItem,children:"Node.js & Express.js"}),c.jsx("li",{style:R.skillItem,children:"MongoDB & Mongoose"}),c.jsx("li",{style:R.skillItem,children:"RESTful APIs"}),c.jsx("li",{style:R.skillItem,children:"QR Code Generation"})]})]}),c.jsxs("div",{style:R.skillCard,className:"skill-card",children:[c.jsxs("div",{style:R.skillHeader,children:[c.jsxs("svg",{style:R.skillIcon,width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",stroke:"#00BCD4",strokeWidth:"2",children:[c.jsx("path",{d:"M12 2a3 3 0 0 0-3 3v4a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"}),c.jsx("path",{d:"M12 22a3 3 0 0 0 3-3v-4a3 3 0 0 0-6 0v4a3 3 0 0 0 3 3z"}),c.jsx("path",{d:"M2 12a3 3 0 0 1 3-3h4a3 3 0 0 1 0 6H5a3 3 0 0 1-3-3z"}),c.jsx("path",{d:"M22 12a3 3 0 0 0-3-3h-4a3 3 0 0 0 0 6h4a3 3 0 0 0 3-3z"})]}),c.jsx("h4",{style:R.skillTitle,children:"AI & Machine Learning"})]}),c.jsxs("ul",{style:R.skillList,children:[c.jsx("li",{style:R.skillItem,children:"OpenAI GPT Integration"}),c.jsx("li",{style:R.skillItem,children:"AI Chatbots"}),c.jsx("li",{style:R.skillItem,children:"Computer Vision"}),c.jsx("li",{style:R.skillItem,children:"NLP Solutions"})]})]}),c.jsxs("div",{style:R.skillCard,className:"skill-card",children:[c.jsxs("div",{style:R.skillHeader,children:[c.jsx("svg",{style:R.skillIcon,width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",stroke:"#00BCD4",strokeWidth:"2",children:c.jsx("path",{d:"M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"})}),c.jsx("h4",{style:R.skillTitle,children:"Cloud & AI Services"})]}),c.jsxs("ul",{style:R.skillList,children:[c.jsx("li",{style:R.skillItem,children:"AWS AI/ML Services"}),c.jsx("li",{style:R.skillItem,children:"TensorFlow & PyTorch"}),c.jsx("li",{style:R.skillItem,children:"Git & GitHub"}),c.jsx("li",{style:R.skillItem,children:"Predictive Analytics"})]})]})]})]}),c.jsxs("div",{style:R.servicesSection,children:[c.jsx("h3",{style:R.sectionTitle,children:"AI-Powered Solutions We Offer"}),c.jsx("p",{style:R.servicesSubtitle,children:"Transform your business with cutting-edge artificial intelligence"}),c.jsxs("div",{style:R.servicesGrid,children:[c.jsxs("div",{style:R.serviceCard,className:"service-card",children:[c.jsx("div",{style:R.serviceIconCircle,children:c.jsxs("svg",{width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",stroke:"#00BCD4",strokeWidth:"2",children:[c.jsx("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2"}),c.jsx("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]})}),c.jsx("h4",{style:R.serviceTitle,children:"Intelligent Chatbots"}),c.jsx("p",{style:R.serviceDesc,children:"Custom AI chatbots for customer support and lead generation using OpenAI GPT."})]}),c.jsxs("div",{style:R.serviceCard,className:"service-card",children:[c.jsx("div",{style:R.serviceIconCircle,children:c.jsxs("svg",{width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",stroke:"#00BCD4",strokeWidth:"2",children:[c.jsx("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),c.jsx("circle",{cx:"12",cy:"12",r:"3"})]})}),c.jsx("h4",{style:R.serviceTitle,children:"Computer Vision"}),c.jsx("p",{style:R.serviceDesc,children:"Image recognition, object detection, and automated visual inspection systems."})]}),c.jsxs("div",{style:R.serviceCard,className:"service-card",children:[c.jsx("div",{style:R.serviceIconCircle,children:c.jsx("svg",{width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",stroke:"#00BCD4",strokeWidth:"2",children:c.jsx("polyline",{points:"22 12 18 12 15 21 9 3 6 12 2 12"})})}),c.jsx("h4",{style:R.serviceTitle,children:"Predictive Analytics"}),c.jsx("p",{style:R.serviceDesc,children:"Machine learning models for sales forecasting and business intelligence."})]}),c.jsxs("div",{style:R.serviceCard,className:"service-card",children:[c.jsx("div",{style:R.serviceIconCircle,children:c.jsx("svg",{width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",stroke:"#00BCD4",strokeWidth:"2",children:c.jsx("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})})}),c.jsx("h4",{style:R.serviceTitle,children:"NLP Solutions"}),c.jsx("p",{style:R.serviceDesc,children:"Text analysis, sentiment analysis, and language translation systems."})]}),c.jsxs("div",{style:R.serviceCard,className:"service-card",children:[c.jsx("div",{style:R.serviceIconCircle,children:c.jsxs("svg",{width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",stroke:"#00BCD4",strokeWidth:"2",children:[c.jsx("circle",{cx:"12",cy:"12",r:"3"}),c.jsx("path",{d:"M12 1v6m0 6v6m9-9h-6m-6 0H3"})]})}),c.jsx("h4",{style:R.serviceTitle,children:"Process Automation"}),c.jsx("p",{style:R.serviceDesc,children:"Intelligent workflow automation and repetitive task optimization using AI."})]}),c.jsxs("div",{style:R.serviceCard,className:"service-card",children:[c.jsx("div",{style:R.serviceIconCircle,children:c.jsxs("svg",{width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",stroke:"#00BCD4",strokeWidth:"2",children:[c.jsx("path",{d:"M12 2a3 3 0 0 0-3 3v4a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"}),c.jsx("path",{d:"M12 22a3 3 0 0 0 3-3v-4a3 3 0 0 0-6 0v4a3 3 0 0 0 3 3z"})]})}),c.jsx("h4",{style:R.serviceTitle,children:"Custom AI Models"}),c.jsx("p",{style:R.serviceDesc,children:"Tailored machine learning models trained on your data for optimal performance."})]})]})]}),c.jsx("div",{style:R.statsSection,children:c.jsxs("div",{style:R.statsGrid,children:[c.jsxs("div",{style:R.statCard,children:[c.jsx("div",{style:R.statNumber,children:"50+"}),c.jsx("p",{style:R.statLabel,children:"Projects Completed"})]}),c.jsxs("div",{style:R.statCard,children:[c.jsx("div",{style:R.statNumber,children:"30+"}),c.jsx("p",{style:R.statLabel,children:"Happy Clients"})]}),c.jsxs("div",{style:R.statCard,children:[c.jsx("div",{style:R.statNumber,children:"5+"}),c.jsx("p",{style:R.statLabel,children:"Years Experience"})]}),c.jsxs("div",{style:R.statCard,children:[c.jsx("div",{style:R.statNumber,children:"24/7"}),c.jsx("p",{style:R.statLabel,children:"Support Available"})]})]})})]})})}const R={aboutSection:{padding:"80px 20px",background:"#ffffff"},container:{maxWidth:"1200px",margin:"0 auto",width:"100%"},aboutGrid:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"60px",alignItems:"center",marginBottom:"80px"},contentSection:{padding:"20px 0",textAlign:"left"},imageSection:{position:"relative"},imagesWrapper:{position:"relative",height:"550px",width:"100%"},mainImageContainer:{position:"absolute",top:"0",right:"0",width:"75%",height:"350px",borderRadius:"20px",overflow:"hidden",boxShadow:"0 25px 50px rgba(0, 0, 0, 0.15)",border:"4px solid #fff",cursor:"pointer",zIndex:1},mainImage:{width:"100%",height:"100%",objectFit:"cover",display:"block",transition:"transform 0.5s ease"},secondaryImageContainer:{position:"absolute",top:"40px",left:"0",width:"45%",height:"200px",borderRadius:"15px",overflow:"hidden",boxShadow:"0 20px 40px rgba(0, 0, 0, 0.15)",border:"4px solid #fff",cursor:"pointer",zIndex:2},secondaryImage:{width:"100%",height:"100%",objectFit:"cover",display:"block",transition:"transform 0.5s ease"},thirdImageContainer:{position:"absolute",bottom:"0",left:"10%",width:"55%",height:"220px",borderRadius:"15px",overflow:"hidden",boxShadow:"0 20px 40px rgba(0, 0, 0, 0.15)",border:"4px solid #fff",cursor:"pointer",zIndex:3},thirdImage:{width:"100%",height:"100%",objectFit:"cover",display:"block",transition:"transform 0.5s ease"},experienceBadge:{position:"absolute",bottom:"80px",right:"0",background:"linear-gradient(135deg, #00BCD4 0%, #0097A7 100%)",padding:"20px 25px",borderRadius:"15px",boxShadow:"0 15px 40px rgba(0, 188, 212, 0.4)",textAlign:"center",zIndex:4},expNumber:{display:"block",fontSize:"2.2rem",fontWeight:"800",color:"#ffffff",lineHeight:"1"},expText:{display:"block",fontSize:"0.85rem",color:"#ffffff",marginTop:"5px"},floatingCard:{position:"absolute",top:"280px",right:"60%",display:"flex",alignItems:"center",gap:"10px",padding:"12px 18px",background:"#ffffff",borderRadius:"12px",boxShadow:"0 10px 30px rgba(0, 0, 0, 0.12)",border:"1px solid rgba(0, 188, 212, 0.2)",zIndex:5},floatingIcon:{fontSize:"1.3rem"},floatingText:{fontSize:"0.9rem",fontWeight:"600",color:"#1a1a1a"},badge:{display:"inline-block",padding:"10px 20px",background:"linear-gradient(135deg, rgba(0, 188, 212, 0.15) 0%, rgba(0, 188, 212, 0.05) 100%)",border:"1px solid rgba(0, 188, 212, 0.3)",borderRadius:"50px",marginBottom:"20px"},badgeText:{color:"#0097A7",fontSize:"0.9rem",fontWeight:"600",letterSpacing:"1px"},mainTitle:{fontSize:"2.5rem",fontWeight:"800",color:"#1a1a1a",letterSpacing:"1px",marginBottom:"15px",lineHeight:"1.2"},divider:{width:"80px",height:"4px",background:"linear-gradient(90deg, #00BCD4, #0097A7)",marginBottom:"15px",borderRadius:"2px"},subtitle:{fontSize:"1.2rem",color:"#00BCD4",fontWeight:"500",marginBottom:"25px"},description:{fontSize:"1rem",lineHeight:"1.8",color:"#666",marginBottom:"30px"},featuresGrid:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"15px",marginBottom:"30px"},featureItem:{display:"flex",alignItems:"center",gap:"12px",fontSize:"0.95rem",color:"#555"},checkIcon:{width:"24px",height:"24px",borderRadius:"50%",background:"linear-gradient(135deg, #00BCD4 0%, #0097A7 100%)",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,fontWeight:"700",fontSize:"0.8rem"},ctaButtons:{display:"flex",gap:"15px",flexWrap:"wrap"},profileSection:{marginBottom:"80px"},profileCard:{display:"flex",alignItems:"center",gap:"25px",background:"linear-gradient(135deg, #00BCD4 0%, #0097A7 100%)",borderRadius:"20px",padding:"30px 40px",boxShadow:"0 15px 40px rgba(0, 188, 212, 0.3)"},profileImg:{width:"100px",height:"100px",borderRadius:"50%",background:"rgba(255, 255, 255, 0.2)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},profileInfo:{flex:1},profileName:{fontSize:"1.5rem",fontWeight:"700",color:"#ffffff",marginBottom:"5px"},designation:{fontSize:"1rem",color:"rgba(255, 255, 255, 0.9)",margin:0},skillsSection:{marginBottom:"80px"},sectionTitle:{fontSize:"2rem",fontWeight:"700",color:"#1a1a1a",textAlign:"center",marginBottom:"40px"},skillsGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"25px"},skillCard:{background:"#ffffff",borderRadius:"15px",padding:"30px",boxShadow:"0 5px 30px rgba(0,0,0,0.08)",borderLeft:"4px solid #00BCD4",transition:"transform 0.3s ease, box-shadow 0.3s ease"},skillHeader:{display:"flex",alignItems:"center",gap:"15px",marginBottom:"20px"},skillIcon:{flexShrink:0},skillTitle:{fontSize:"1.1rem",fontWeight:"700",color:"#1a1a1a",margin:0},skillList:{listStyle:"none",padding:0,margin:0},skillItem:{padding:"10px 0",borderBottom:"1px solid #f0f0f0",fontSize:"0.95rem",color:"#666"},servicesSection:{marginBottom:"80px"},servicesSubtitle:{fontSize:"1.1rem",color:"#666",textAlign:"center",marginBottom:"40px",marginTop:"-25px"},servicesGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"30px"},serviceCard:{background:"#ffffff",borderRadius:"15px",padding:"35px",textAlign:"center",boxShadow:"0 5px 30px rgba(0,0,0,0.08)",transition:"transform 0.3s ease, box-shadow 0.3s ease",border:"1px solid #f0f0f0"},serviceIconCircle:{width:"80px",height:"80px",borderRadius:"50%",background:"linear-gradient(135deg, rgba(0, 188, 212, 0.15) 0%, rgba(0, 188, 212, 0.05) 100%)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 20px"},serviceTitle:{fontSize:"1.2rem",fontWeight:"700",color:"#1a1a1a",marginBottom:"15px"},serviceDesc:{fontSize:"0.95rem",lineHeight:"1.7",color:"#666",margin:0},statsSection:{padding:"40px 0"},statsGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"30px"},statCard:{background:"linear-gradient(135deg, #00BCD4 0%, #0097A7 100%)",borderRadius:"15px",padding:"40px 20px",textAlign:"center",boxShadow:"0 15px 40px rgba(0,188,212,0.3)"},statNumber:{fontSize:"3rem",fontWeight:"800",color:"#ffffff",marginBottom:"10px"},statLabel:{fontSize:"1rem",color:"#ffffff",margin:0,fontWeight:"500"}},Mc=document.createElement("style");Mc.textContent=`
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }

  /* Floating animation */
  #about .floatingCard {
    animation: float 3s ease-in-out infinite;
  }

  /* Button Styles */
  .btn-primary {
    display: inline-block;
    padding: 14px 30px;
    border-radius: 50px;
    font-size: 1rem;
    font-weight: 600;
    background: linear-gradient(135deg, #00BCD4 0%, #0097A7 100%);
    color: #ffffff !important;
    border: none;
    box-shadow: 0 8px 25px rgba(0, 188, 212, 0.35);
    text-decoration: none;
    transition: all 0.3s ease;
    cursor: pointer;
    text-align: center;
  }
  
  .btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 35px rgba(0, 188, 212, 0.45);
  }
  
  .btn-primary:active {
    transform: translateY(-1px);
  }
  
  .btn-secondary {
    display: inline-block;
    padding: 14px 30px;
    border-radius: 50px;
    font-size: 1rem;
    font-weight: 600;
    background: transparent;
    color: #1a1a1a !important;
    border: 2px solid #1a1a1a;
    text-decoration: none;
    transition: all 0.3s ease;
    cursor: pointer;
    text-align: center;
  }
  
  .btn-secondary:hover {
    background: #1a1a1a;
    color: #ffffff !important;
    transform: translateY(-3px);
  }
  
  .btn-secondary:active {
    transform: translateY(-1px);
  }

  /* Image Hover Effects */
  .about-image-container:hover .about-zoom-image {
    transform: scale(1.1);
  }
  
  /* Card Hover Effects */
  .skill-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0,0,0,0.12);
  }
  
  .service-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0,0,0,0.12);
  }
  
  /* Tablet Styles (768px - 992px) */
  @media (max-width: 992px) {
    #about {
      padding: 60px 15px !important;
    }
    
    #about > div > div:first-child {
      grid-template-columns: 1fr !important;
      gap: 40px !important;
    }
    
    #about h2 {
      font-size: 2rem !important;
    }
    
    #about > div > div:first-child > div:first-child > div:nth-child(6) {
      grid-template-columns: 1fr !important;
    }
    
    #about > div > div:first-child > div:nth-child(2) > div {
      height: 450px !important;
      margin: 0 auto !important;
      max-width: 500px !important;
    }
  }
  
  /* Mobile Styles (481px - 768px) */
  @media (max-width: 768px) {
    #about {
      padding: 50px 15px !important;
    }
    
    #about h2 {
      font-size: 1.75rem !important;
      line-height: 1.3 !important;
    }
    
    #about h3 {
      font-size: 1.5rem !important;
    }
    
    /* Image Section Mobile */
    #about > div > div:first-child > div:nth-child(2) > div {
      height: 400px !important;
    }
    
    #about > div > div:first-child > div:nth-child(2) > div > div:nth-child(1) {
      width: 80% !important;
      height: 250px !important;
    }
    
    #about > div > div:first-child > div:nth-child(2) > div > div:nth-child(2) {
      width: 50% !important;
      height: 140px !important;
      top: 25px !important;
    }
    
    #about > div > div:first-child > div:nth-child(2) > div > div:nth-child(3) {
      width: 60% !important;
      height: 150px !important;
      left: 0 !important;
    }
    
    #about > div > div:first-child > div:nth-child(2) > div > div:nth-child(4) {
      padding: 15px 20px !important;
      bottom: 60px !important;
    }
    
    #about > div > div:first-child > div:nth-child(2) > div > div:nth-child(4) > span:first-child {
      font-size: 1.8rem !important;
    }
    
    #about > div > div:first-child > div:nth-child(2) > div > div:nth-child(5) {
      display: none !important;
    }
    
    /* Profile Card Mobile */
    #about > div > div:nth-child(2) > div {
      flex-direction: column !important;
      text-align: center !important;
      padding: 25px 20px !important;
    }
    
    #about > div > div:nth-child(2) > div > div:first-child {
      width: 80px !important;
      height: 80px !important;
    }
    
    #about > div > div:nth-child(2) > div > div:first-child svg {
      width: 60px !important;
      height: 60px !important;
    }
    
    #about > div > div:nth-child(2) > div > div:nth-child(2) h3 {
      font-size: 1.3rem !important;
    }
    
    #about > div > div:nth-child(2) > div > div:nth-child(2) p {
      font-size: 0.95rem !important;
    }
    
    /* Buttons Mobile */
    .btn-primary, .btn-secondary {
      width: 100%;
      padding: 12px 25px !important;
      font-size: 0.95rem !important;
    }
    
    /* Stats Mobile - 2 columns */
    #about > div > div:last-child > div {
      grid-template-columns: repeat(2, 1fr) !important;
      gap: 20px !important;
    }
    
    #about > div > div:last-child > div > div {
      padding: 30px 15px !important;
    }
    
    #about > div > div:last-child > div > div > div {
      font-size: 2.2rem !important;
    }
    
    #about > div > div:last-child > div > div > p {
      font-size: 0.9rem !important;
    }
    
    /* Services Grid Mobile */
    #about > div > div:nth-child(4) > div {
      grid-template-columns: 1fr !important;
      gap: 20px !important;
    }
    
    #about > div > div:nth-child(4) > div > div {
      padding: 25px !important;
    }
    
    /* Skills Grid Mobile */
    #about > div > div:nth-child(3) > div {
      grid-template-columns: 1fr !important;
      gap: 20px !important;
    }
  }
  
  /* Small Mobile (320px - 480px) */
  @media (max-width: 480px) {
    #about {
      padding: 40px 10px !important;
    }
    
    #about h2 {
      font-size: 1.5rem !important;
    }
    
    #about h3 {
      font-size: 1.3rem !important;
    }
    
    #about p {
      font-size: 0.9rem !important;
    }
    
    .btn-primary, .btn-secondary {
      padding: 10px 20px !important;
      font-size: 0.9rem !important;
    }
    
    /* Smaller image section */
    #about > div > div:first-child > div:nth-child(2) > div {
      height: 350px !important;
    }
    
    #about > div > div:first-child > div:nth-child(2) > div > div:nth-child(1) {
      width: 85% !important;
      height: 220px !important;
    }
    
    #about > div > div:first-child > div:nth-child(2) > div > div:nth-child(2) {
      width: 55% !important;
      height: 120px !important;
      top: 20px !important;
    }
    
    #about > div > div:first-child > div:nth-child(2) > div > div:nth-child(3) {
      width: 65% !important;
      height: 130px !important;
      bottom: 0 !important;
    }
    
    #about > div > div:first-child > div:nth-child(2) > div > div:nth-child(4) {
      padding: 12px 18px !important;
      bottom: 50px !important;
    }
    
    #about > div > div:first-child > div:nth-child(2) > div > div:nth-child(4) > span:first-child {
      font-size: 1.6rem !important;
    }
    
    #about > div > div:first-child > div:nth-child(2) > div > div:nth-child(4) > span:last-child {
      font-size: 0.75rem !important;
    }
    
    /* Stats full width on small mobile */
    #about > div > div:last-child > div {
      grid-template-columns: 1fr !important;
      gap: 15px !important;
    }
    
    #about > div > div:last-child > div > div {
      padding: 25px 15px !important;
    }
    
    #about > div > div:last-child > div > div > div {
      font-size: 2rem !important;
    }
    
    /* Profile card smaller */
    #about > div > div:nth-child(2) > div {
      padding: 20px 15px !important;
    }
    
    #about > div > div:nth-child(2) > div > div:first-child {
      width: 70px !important;
      height: 70px !important;
    }
    
    #about > div > div:nth-child(2) > div > div:first-child svg {
      width: 50px !important;
      height: 50px !important;
    }
    
    #about > div > div:nth-child(2) > div > div:nth-child(2) h3 {
      font-size: 1.2rem !important;
    }
    
    #about > div > div:nth-child(2) > div > div:nth-child(2) p {
      font-size: 0.85rem !important;
    }
    
    /* Service cards smaller padding */
    #about > div > div:nth-child(4) > div > div {
      padding: 20px !important;
    }
    
    #about > div > div:nth-child(4) > div > div > div:first-child {
      width: 70px !important;
      height: 70px !important;
      margin-bottom: 15px !important;
    }
    
    #about > div > div:nth-child(4) > div > div > div:first-child svg {
      width: 35px !important;
      height: 35px !important;
    }
    
    #about > div > div:nth-child(4) > div > div > h4 {
      font-size: 1.1rem !important;
    }
    
    /* Skill cards smaller */
    #about > div > div:nth-child(3) > div > div {
      padding: 20px !important;
    }
    
    #about > div > div:nth-child(3) > div > div > div:first-child svg {
      width: 35px !important;
      height: 35px !important;
    }
    
    #about > div > div:nth-child(3) > div > div > div:first-child h4 {
      font-size: 1rem !important;
    }
    
    /* Feature items smaller text */
    #about > div > div:first-child > div:first-child > div:nth-child(6) > div {
      font-size: 0.85rem !important;
    }
    
    #about > div > div:first-child > div:first-child > div:nth-child(6) > div > div {
      width: 20px !important;
      height: 20px !important;
      font-size: 0.7rem !important;
    }
  }
  
  /* Extra Small Mobile (below 360px) */
  @media (max-width: 360px) {
    #about {
      padding: 30px 8px !important;
    }
    
    #about h2 {
      font-size: 1.3rem !important;
    }
    
    #about h3 {
      font-size: 1.2rem !important;
    }
    
    #about > div > div:first-child > div:nth-child(2) > div {
      height: 320px !important;
    }
    
    #about > div > div:first-child > div:nth-child(2) > div > div:nth-child(1) {
      height: 200px !important;
    }
    
    #about > div > div:first-child > div:nth-child(2) > div > div:nth-child(2) {
      height: 110px !important;
    }
    
    #about > div > div:first-child > div:nth-child(2) > div > div:nth-child(3) {
      height: 120px !important;
    }
  }
`;document.getElementById("about-styles")||(Mc.id="about-styles",document.head.appendChild(Mc));const gp="/assets/webapp-CPewV4kh.jpg",vp="/assets/web-n_XsrTUY.jpg",yp="/assets/soft-B3ojDYKk.jpg",xp="/assets/employee-BDQcxS8U.jpg",bp="/assets/flipbook-D7p_pFC8.jpg",Sp="/assets/ecom-C3vJ5kr-.jpg",jp="/assets/customapp-CkwBAnCv.jpg",zp="/assets/solution-Bx85Xb4r.jpg",Tp="/assets/aws-BF7wDGR9.jpg",Ep="/assets/hosting-Ca9gOdw0.jpg";function Ap(){const u=[{image:gp,title:"Web Applications",description:"Custom web applications tailored to your business needs with modern technologies and user-friendly interfaces.",features:["Custom business applications","Real-time data processing","User authentication systems","Mobile-responsive design"]},{image:vp,title:"Professional Websites",description:"Modern, responsive websites that represent your brand professionally and engage your audience effectively.",features:["Custom website design","SEO optimization","Content management systems","Performance optimization"]},{image:yp,title:"Web Software Solutions",description:"Comprehensive web-based software solutions designed to streamline your business operations and increase efficiency.",features:["Custom software development","Database management","API integrations","Cloud-based solutions"]},{image:xp,title:"Employee Management System",description:"Complete employee management solutions with attendance tracking, salary management, and HR functionalities.",features:["Attendance tracking system","Salary calculation & payroll","Employee profiles & records","Leave management system"]},{image:bp,title:"Digital Flipbook Applications",description:"Interactive flipbook applications that simulate real book page-turning experience with stunning visual effects.",features:["Realistic page-turning effects","Image & PDF support","Mobile-friendly interface","Customizable designs"]},{image:Sp,title:"E-Commerce Platforms",description:"Full-featured e-commerce websites with payment integration, inventory management, and customer management systems.",features:["Online store development","Payment gateway integration","Inventory management","Order tracking system"]},{image:jp,title:"Custom Web Applications",description:"Build any type of web application with fully customized features tailored to your specific business requirements.",features:["100% customized solutions","Industry-specific applications","Scalable architecture","Integration capabilities"]},{image:zp,title:"Complete Software Solutions",description:"End-to-end software solutions from consultation to deployment, including maintenance and ongoing support.",features:["Consultation & planning","Custom development","Testing & deployment","Maintenance & support"]},{image:Tp,title:"AWS & Cloud Services",description:"Professional cloud deployment and management using Amazon Web Services with scalable infrastructure.",features:["AWS EC2 server setup","Amazon S3 storage solutions","Cloud migration services","Load balancing & scaling"]},{image:Ep,title:"Web Hosting & Management",description:"Reliable web hosting services with complete server management, monitoring, and maintenance.",features:["Shared & dedicated hosting","Server configuration & setup","24/7 monitoring & support","Backup & security management"]}];return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html, body {
          overflow-x: hidden;
          width: 100%;
          max-width: 100vw;
        }

        .service-card {
          background: #ffffff;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0,0,0,0.08);
          transition: all 0.3s ease;
          border: 1px solid #f0f0f0;
        }

        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.15);
        }

        .service-image-container {
          position: relative;
          height: 220px;
          overflow: hidden;
        }

        .service-zoom-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .service-card:hover .service-zoom-image {
          transform: scale(1.1);
        }

        .cta-button-link {
          display: inline-block;
          padding: 16px 40px;
          font-size: 1rem;
          font-weight: 600;
          color: #00BCD4;
          background: #ffffff;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          text-decoration: none;
        }

        .cta-button-link:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(0,0,0,0.3);
        }

        /* Tablet */
        @media (max-width: 992px) {
          .services-section-main {
            padding: 80px 15px !important;
          }

          .main-title-services {
            font-size: 2.2rem !important;
          }

          .services-grid-main {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)) !important;
            gap: 25px !important;
          }
        }

        /* Mobile */
        @media (max-width: 768px) {
          .services-section-main {
            padding: 70px 10px !important;
          }

          .main-title-services {
            font-size: 2rem !important;
          }

          .subtitle-services {
            font-size: 1rem !important;
            padding: 0 10px;
          }

          .services-grid-main {
            grid-template-columns: 1fr !important;
            gap: 25px !important;
            margin-bottom: 60px !important;
          }

          .card-content-services {
            padding: 25px !important;
          }

          .service-title-main {
            font-size: 1.3rem !important;
          }

          .service-description-main {
            font-size: 0.9rem !important;
          }

          .cta-section-main {
            padding: 50px 25px !important;
            border-radius: 20px !important;
          }

          .cta-title-main {
            font-size: 1.6rem !important;
          }

          .cta-text-main {
            font-size: 1rem !important;
          }

          .service-image-container {
            height: 200px;
          }
        }

        /* Small Mobile */
        @media (max-width: 480px) {
          .services-section-main {
            padding: 50px 5px !important;
          }

          .main-title-services {
            font-size: 1.6rem !important;
          }

          .subtitle-services {
            font-size: 0.9rem !important;
            padding: 0 5px;
          }

          .services-grid-main {
            gap: 18px !important;
            margin-bottom: 40px !important;
          }

          .service-image-container {
            height: 180px;
          }

          .card-content-services {
            padding: 18px !important;
          }

          .service-title-main {
            font-size: 1.1rem !important;
            margin-bottom: 10px !important;
          }

          .service-description-main {
            font-size: 0.85rem !important;
            margin-bottom: 15px !important;
          }

          .feature-item-services {
            font-size: 0.82rem !important;
            padding: 6px 0 !important;
          }

          .check-icon-services {
            width: 18px !important;
            height: 18px !important;
            font-size: 0.65rem !important;
          }

          .cta-section-main {
            padding: 35px 15px !important;
            border-radius: 15px !important;
          }

          .cta-title-main {
            font-size: 1.3rem !important;
            margin-bottom: 12px !important;
          }

          .cta-text-main {
            font-size: 0.9rem !important;
            margin-bottom: 20px !important;
          }

          .cta-button-link {
            padding: 13px 30px;
            font-size: 0.9rem;
            width: 100%;
            max-width: 280px;
          }
        }

        /* Extra Small */
        @media (max-width: 375px) {
          .services-section-main {
            padding: 45px 3px !important;
          }

          .main-title-services {
            font-size: 1.5rem !important;
          }

          .subtitle-services {
            font-size: 0.85rem !important;
          }

          .service-image-container {
            height: 160px;
          }

          .card-content-services {
            padding: 15px !important;
          }

          .service-title-main {
            font-size: 1rem !important;
          }

          .service-description-main {
            font-size: 0.8rem !important;
          }

          .cta-title-main {
            font-size: 1.2rem !important;
          }

          .cta-text-main {
            font-size: 0.85rem !important;
          }

          .cta-button-link {
            padding: 12px 25px;
            font-size: 0.85rem;
            max-width: 260px;
          }
        }
      `}),c.jsx("section",{style:_t.servicesSection,id:"services",className:"services-section-main",children:c.jsxs("div",{style:_t.container,children:[c.jsxs("div",{style:_t.headerSection,children:[c.jsx("div",{style:_t.badge,children:c.jsx("span",{style:_t.badgeText,children:"What We Offer"})}),c.jsx("h2",{style:_t.mainTitle,className:"main-title-services",children:"OUR SERVICES"}),c.jsx("div",{style:_t.divider}),c.jsx("p",{style:_t.subtitle,className:"subtitle-services",children:"Comprehensive Solutions for Your Digital Transformation"})]}),c.jsx("div",{style:_t.servicesGrid,className:"services-grid-main",children:u.map((f,d)=>c.jsxs("div",{className:"service-card",children:[c.jsxs("div",{className:"service-image-container",children:[c.jsx("img",{src:f.image,alt:f.title,className:"service-zoom-image"}),c.jsx("div",{style:_t.imageOverlay})]}),c.jsxs("div",{style:_t.cardContent,className:"card-content-services",children:[c.jsx("h3",{style:_t.serviceTitle,className:"service-title-main",children:f.title}),c.jsx("p",{style:_t.serviceDescription,className:"service-description-main",children:f.description}),c.jsx("ul",{style:_t.featuresList,children:f.features.map((s,h)=>c.jsxs("li",{style:_t.featureItem,className:"feature-item-services",children:[c.jsx("div",{style:_t.checkIcon,className:"check-icon-services",children:"✓"}),c.jsx("span",{children:s})]},h))})]})]},d))}),c.jsxs("div",{style:_t.ctaSection,className:"cta-section-main",children:[c.jsx("h3",{style:_t.ctaTitle,className:"cta-title-main",children:"Ready to Transform Your Business?"}),c.jsx("p",{style:_t.ctaText,className:"cta-text-main",children:"Let's discuss how our services can help you achieve your goals"}),c.jsx("a",{href:"#footer",className:"cta-button-link",children:"Get Started Today"})]})]})})]})}const _t={servicesSection:{padding:"100px 20px",background:"#ffffff",width:"100%",maxWidth:"100vw",overflowX:"hidden"},container:{maxWidth:"1200px",margin:"0 auto",width:"100%"},headerSection:{textAlign:"center",marginBottom:"60px"},badge:{display:"inline-block",padding:"10px 20px",background:"linear-gradient(135deg, rgba(0, 188, 212, 0.15) 0%, rgba(0, 188, 212, 0.05) 100%)",border:"1px solid rgba(0, 188, 212, 0.3)",borderRadius:"50px",marginBottom:"20px"},badgeText:{color:"#0097A7",fontSize:"0.9rem",fontWeight:"600",letterSpacing:"1px"},mainTitle:{fontSize:"2.5rem",fontWeight:"800",color:"#1a1a1a",letterSpacing:"1px",marginBottom:"15px"},divider:{width:"80px",height:"4px",background:"linear-gradient(90deg, #00BCD4, #0097A7)",margin:"0 auto 20px",borderRadius:"2px"},subtitle:{fontSize:"1.1rem",color:"#666",fontWeight:"400",maxWidth:"600px",margin:"0 auto",lineHeight:"1.6"},servicesGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:"30px",marginBottom:"80px",width:"100%"},imageOverlay:{position:"absolute",top:0,left:0,right:0,bottom:0,background:"linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.1) 100%)",pointerEvents:"none"},cardContent:{padding:"30px"},serviceTitle:{fontSize:"1.4rem",fontWeight:"700",color:"#1a1a1a",marginBottom:"12px",wordWrap:"break-word"},serviceDescription:{fontSize:"0.95rem",lineHeight:"1.7",color:"#666",marginBottom:"20px",wordWrap:"break-word"},featuresList:{listStyle:"none",padding:0,margin:"0 0 20px 0"},featureItem:{display:"flex",alignItems:"center",gap:"10px",padding:"8px 0",fontSize:"0.9rem",color:"#555",borderBottom:"1px solid #f5f5f5"},checkIcon:{width:"20px",height:"20px",borderRadius:"50%",background:"linear-gradient(135deg, #00BCD4 0%, #0097A7 100%)",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,fontSize:"0.7rem",fontWeight:"700"},ctaSection:{textAlign:"center",padding:"60px 40px",background:"linear-gradient(135deg, #00BCD4 0%, #0097A7 100%)",borderRadius:"25px",boxShadow:"0 20px 60px rgba(0,188,212,0.3)",width:"100%"},ctaTitle:{fontSize:"2rem",fontWeight:"700",color:"#ffffff",marginBottom:"15px",wordWrap:"break-word"},ctaText:{fontSize:"1.1rem",color:"#ffffff",marginBottom:"30px",opacity:.95,wordWrap:"break-word"}},Cp="/assets/emp-Dqf30CG0.jpg",Rp="/assets/ecommerce-LxiGhoKc.jpg",wp="/assets/flip-BFD6tCjW.jpg",Dp="/assets/app-BwpD_5kE.jpg",Mp="/assets/website-DKkS8miJ.jpg",Op="/assets/cloud-Bf11_GX0.jpg";function Np(){const u=[{title:"Employee Management System",description:"Complete HR solution with attendance tracking, salary management, and employee records.",technologies:["React","Node.js","MongoDB","Express"],image:Cp},{title:"E-Commerce Platform",description:"Full-featured online store with payment integration and inventory management.",technologies:["React","Node.js","Stripe","AWS S3"],image:Rp},{title:"Digital Flipbook App",description:"Interactive flipbook application with realistic page-turning effects.",technologies:["React","CSS3","JavaScript","PDF.js"],image:wp},{title:"Business Web Application",description:"Custom web application tailored for specific business requirements.",technologies:["MERN Stack","JWT","Bootstrap","API"],image:Dp},{title:"Professional Website",description:"Modern responsive website with SEO optimization and CMS integration.",technologies:["React","Bootstrap","SEO","CMS"],image:Mp},{title:"Cloud-Based Software",description:"Scalable cloud solution deployed on AWS with robust infrastructure.",technologies:["AWS","EC2","S3","MongoDB"],image:Op}];return c.jsx("section",{style:Ct.projectsSection,id:"projects",children:c.jsxs("div",{style:Ct.container,children:[c.jsxs("div",{style:Ct.headerSection,children:[c.jsx("div",{style:Ct.badge,children:c.jsx("span",{style:Ct.badgeText,children:"Our Work"})}),c.jsx("h2",{style:Ct.mainTitle,children:"OUR PROJECTS"}),c.jsx("div",{style:Ct.divider}),c.jsx("p",{style:Ct.subtitle,children:"Showcasing Excellence in Web Development & AI Solutions"})]}),c.jsx("div",{style:Ct.projectsGrid,children:u.map((f,d)=>c.jsxs("div",{style:Ct.projectCard,className:"project-card",children:[c.jsxs("div",{style:Ct.projectImageWrapper,className:"project-image-wrapper",children:[c.jsx("img",{src:f.image,alt:f.title,style:Ct.projectImage,className:"project-zoom-image"}),c.jsx("div",{style:Ct.imageOverlay})]}),c.jsxs("div",{style:Ct.projectContent,children:[c.jsx("h3",{style:Ct.projectTitle,children:f.title}),c.jsx("p",{style:Ct.projectDescription,children:f.description}),c.jsx("div",{style:Ct.techStack,children:f.technologies.map((s,h)=>c.jsx("span",{style:Ct.techTag,className:"tech-tag",children:s},h))})]})]},d))}),c.jsxs("div",{style:Ct.ctaSection,children:[c.jsx("h3",{style:Ct.ctaTitle,children:"Have a Project in Mind?"}),c.jsx("p",{style:Ct.ctaText,children:"Let's bring your vision to life with our expertise"}),c.jsx("a",{href:"#footer",style:Ct.ctaButton,className:"cta-button",children:"Start Your Project"})]})]})})}const Ct={projectsSection:{padding:"100px 20px",background:"#ffffff"},container:{maxWidth:"1200px",margin:"0 auto"},headerSection:{textAlign:"center",marginBottom:"60px"},badge:{display:"inline-block",padding:"10px 20px",background:"linear-gradient(135deg, rgba(0, 188, 212, 0.15) 0%, rgba(0, 188, 212, 0.05) 100%)",border:"1px solid rgba(0, 188, 212, 0.3)",borderRadius:"50px",marginBottom:"20px"},badgeText:{color:"#0097A7",fontSize:"0.9rem",fontWeight:"600",letterSpacing:"1px"},mainTitle:{fontSize:"2.5rem",fontWeight:"800",color:"#1a1a1a",letterSpacing:"1px",marginBottom:"15px"},divider:{width:"80px",height:"4px",background:"linear-gradient(90deg, #00BCD4, #0097A7)",margin:"0 auto 20px",borderRadius:"2px"},subtitle:{fontSize:"1.1rem",color:"#666",fontWeight:"400",maxWidth:"600px",margin:"0 auto"},projectsGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"30px",marginBottom:"80px"},projectCard:{background:"#ffffff",borderRadius:"20px",overflow:"hidden",boxShadow:"0 10px 40px rgba(0,0,0,0.08)",transition:"all 0.4s ease",cursor:"pointer",border:"1px solid #f0f0f0"},projectImageWrapper:{height:"240px",overflow:"hidden",position:"relative"},projectImage:{width:"100%",height:"100%",objectFit:"cover",transition:"transform 0.5s ease"},imageOverlay:{position:"absolute",top:0,left:0,right:0,bottom:0,background:"linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.1) 100%)",pointerEvents:"none",transition:"all 0.3s ease"},projectContent:{padding:"30px"},projectTitle:{fontSize:"1.4rem",fontWeight:"700",color:"#1a1a1a",marginBottom:"12px",transition:"color 0.3s ease"},projectDescription:{fontSize:"0.95rem",lineHeight:"1.7",color:"#666",marginBottom:"20px"},techStack:{display:"flex",flexWrap:"wrap",gap:"10px"},techTag:{background:"linear-gradient(135deg, rgba(0, 188, 212, 0.1) 0%, rgba(0, 188, 212, 0.05) 100%)",color:"#00BCD4",padding:"8px 16px",borderRadius:"25px",fontSize:"0.85rem",fontWeight:"600",border:"1px solid rgba(0, 188, 212, 0.2)",transition:"all 0.3s ease"},ctaSection:{textAlign:"center",padding:"60px 40px",background:"linear-gradient(135deg, #00BCD4 0%, #0097A7 100%)",borderRadius:"25px",boxShadow:"0 20px 60px rgba(0, 188, 212, 0.3)"},ctaTitle:{fontSize:"2rem",fontWeight:"700",color:"#ffffff",marginBottom:"15px"},ctaText:{fontSize:"1.1rem",color:"#ffffff",marginBottom:"30px",opacity:.95},ctaButton:{display:"inline-block",padding:"16px 45px",fontSize:"1rem",fontWeight:"600",color:"#00BCD4",background:"#ffffff",border:"none",borderRadius:"50px",cursor:"pointer",transition:"all 0.3s ease",boxShadow:"0 10px 30px rgba(0,0,0,0.2)",textDecoration:"none"}},Oc=document.createElement("style");Oc.textContent=`
  /* Image Zoom on Hover */
  .project-image-wrapper:hover .project-zoom-image {
    transform: scale(1.15);
  }
  
  /* Tech Tag Hover */
  .tech-tag:hover {
    background: linear-gradient(135deg, #00BCD4 0%, #0097A7 100%) !important;
    color: #ffffff !important;
    border-color: #00BCD4 !important;
  }
  
  /* CTA Button Hover */
  .cta-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(0,0,0,0.3) !important;
  }
  
  @media (max-width: 992px) {
    [style*="projectsGrid"] {
      grid-template-columns: repeat(2, 1fr) !important;
      gap: 20px !important;
    }
  }
  
  @media (max-width: 768px) {
    [style*="projectsSection"] {
      padding: 60px 15px !important;
    }
    
    [style*="projectsGrid"] {
      grid-template-columns: 1fr !important;
      gap: 20px !important;
    }
    
    [style*="mainTitle"] {
      font-size: 1.8rem !important;
    }
    
    [style*="subtitle"] {
      font-size: 0.95rem !important;
      padding: 0 10px !important;
    }
    
    [style*="badge"] {
      padding: 8px 16px !important;
    }
    
    [style*="badgeText"] {
      font-size: 0.8rem !important;
    }
    
    [style*="projectCard"] {
      border-radius: 15px !important;
    }
    
    [style*="projectImageWrapper"] {
      height: 180px !important;
    }
    
    [style*="projectContent"] {
      padding: 20px !important;
    }
    
    [style*="projectTitle"] {
      font-size: 1.2rem !important;
      margin-bottom: 8px !important;
    }
    
    [style*="projectDescription"] {
      font-size: 0.9rem !important;
      margin-bottom: 15px !important;
    }
    
    [style*="techStack"] {
      gap: 8px !important;
    }
    
    [style*="techTag"] {
      padding: 6px 12px !important;
      font-size: 0.75rem !important;
    }
    
    [style*="ctaSection"] {
      padding: 40px 20px !important;
      border-radius: 20px !important;
      margin: 0 5px !important;
    }
    
    [style*="ctaTitle"] {
      font-size: 1.4rem !important;
    }
    
    [style*="ctaText"] {
      font-size: 0.95rem !important;
      margin-bottom: 20px !important;
    }
    
    [style*="ctaButton"] {
      padding: 14px 35px !important;
      font-size: 0.9rem !important;
    }
    
    [style*="headerSection"] {
      margin-bottom: 40px !important;
    }
  }
  
  @media (max-width: 480px) {
    [style*="projectsSection"] {
      padding: 50px 10px !important;
    }
    
    [style*="mainTitle"] {
      font-size: 1.5rem !important;
    }
    
    [style*="projectImageWrapper"] {
      height: 160px !important;
    }
    
    [style*="projectContent"] {
      padding: 15px !important;
    }
    
    [style*="projectTitle"] {
      font-size: 1.1rem !important;
    }
    
    [style*="projectDescription"] {
      font-size: 0.85rem !important;
      line-height: 1.6 !important;
    }
    
    [style*="techTag"] {
      padding: 5px 10px !important;
      font-size: 0.7rem !important;
    }
    
    [style*="ctaSection"] {
      padding: 30px 15px !important;
    }
    
    [style*="ctaTitle"] {
      font-size: 1.2rem !important;
    }
    
    [style*="ctaText"] {
      font-size: 0.85rem !important;
    }
    
    [style*="ctaButton"] {
      padding: 12px 30px !important;
      font-size: 0.85rem !important;
    }
  }
`;document.getElementById("projects-styles")||(Oc.id="projects-styles",document.head.appendChild(Oc));var a0={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Kd=Vl.createContext&&Vl.createContext(a0),Bp=["attr","size","title"];function _p(u,f){if(u==null)return{};var d=Up(u,f),s,h;if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(u);for(h=0;h<p.length;h++)s=p[h],!(f.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(u,s)&&(d[s]=u[s])}return d}function Up(u,f){if(u==null)return{};var d={};for(var s in u)if(Object.prototype.hasOwnProperty.call(u,s)){if(f.indexOf(s)>=0)continue;d[s]=u[s]}return d}function lu(){return lu=Object.assign?Object.assign.bind():function(u){for(var f=1;f<arguments.length;f++){var d=arguments[f];for(var s in d)Object.prototype.hasOwnProperty.call(d,s)&&(u[s]=d[s])}return u},lu.apply(this,arguments)}function Jd(u,f){var d=Object.keys(u);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(u);f&&(s=s.filter(function(h){return Object.getOwnPropertyDescriptor(u,h).enumerable})),d.push.apply(d,s)}return d}function au(u){for(var f=1;f<arguments.length;f++){var d=arguments[f]!=null?arguments[f]:{};f%2?Jd(Object(d),!0).forEach(function(s){Hp(u,s,d[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(u,Object.getOwnPropertyDescriptors(d)):Jd(Object(d)).forEach(function(s){Object.defineProperty(u,s,Object.getOwnPropertyDescriptor(d,s))})}return u}function Hp(u,f,d){return f=Yp(f),f in u?Object.defineProperty(u,f,{value:d,enumerable:!0,configurable:!0,writable:!0}):u[f]=d,u}function Yp(u){var f=Lp(u,"string");return typeof f=="symbol"?f:f+""}function Lp(u,f){if(typeof u!="object"||!u)return u;var d=u[Symbol.toPrimitive];if(d!==void 0){var s=d.call(u,f);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(f==="string"?String:Number)(u)}function n0(u){return u&&u.map((f,d)=>Vl.createElement(f.tag,au({key:d},f.attr),n0(f.child)))}function Re(u){return f=>Vl.createElement(qp,lu({attr:au({},u.attr)},f),n0(u.child))}function qp(u){var f=d=>{var{attr:s,size:h,title:p}=u,b=_p(u,Bp),C=h||d.size||"1em",S;return d.className&&(S=d.className),u.className&&(S=(S?S+" ":"")+u.className),Vl.createElement("svg",lu({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},d.attr,s,b,{className:S,style:au(au({color:u.color||d.color},d.style),u.style),height:C,width:C,xmlns:"http://www.w3.org/2000/svg"}),p&&Vl.createElement("title",null,p),u.children)};return Kd!==void 0?Vl.createElement(Kd.Consumer,null,d=>f(d)):f(a0)}function kp(u){return Re({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"},child:[]}]})(u)}function Gp(u){return Re({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(u)}function Xp(u){return Re({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"},child:[]}]})(u)}function Qp(u){return Re({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"},child:[]}]})(u)}function Vp(u){return Re({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"},child:[]}]})(u)}function Zp(u){return Re({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"},child:[]}]})(u)}function Kp(u){return Re({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M208 0c-29.9 0-54.7 20.5-61.8 48.2-.8 0-1.4-.2-2.2-.2-35.3 0-64 28.7-64 64 0 4.8.6 9.5 1.7 14C52.5 138 32 166.6 32 200c0 12.6 3.2 24.3 8.3 34.9C16.3 248.7 0 274.3 0 304c0 33.3 20.4 61.9 49.4 73.9-.9 4.6-1.4 9.3-1.4 14.1 0 39.8 32.2 72 72 72 4.1 0 8.1-.5 12-1.2 9.6 28.5 36.2 49.2 68 49.2 39.8 0 72-32.2 72-72V64c0-35.3-28.7-64-64-64zm368 304c0-29.7-16.3-55.3-40.3-69.1 5.2-10.6 8.3-22.3 8.3-34.9 0-33.4-20.5-62-49.7-74 1-4.5 1.7-9.2 1.7-14 0-35.3-28.7-64-64-64-.8 0-1.5.2-2.2.2C422.7 20.5 397.9 0 368 0c-35.3 0-64 28.6-64 64v376c0 39.8 32.2 72 72 72 31.8 0 58.4-20.7 68-49.2 3.9.7 7.9 1.2 12 1.2 39.8 0 72-32.2 72-72 0-4.8-.5-9.5-1.4-14.1 29-12 49.4-40.6 49.4-73.9z"},child:[]}]})(u)}function Wd(u){return Re({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(u)}function Jp(u){return Re({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"},child:[]}]})(u)}function Wp(u){return Re({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"},child:[]}]})(u)}function $p(u){return Re({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z"},child:[]}]})(u)}function Fp(){const[u,f]=w.useState(!1),[d,s]=w.useState(!1),[h,p]=w.useState(!1);w.useEffect(()=>{const C=()=>f(window.scrollY>300);return window.addEventListener("scroll",C),()=>window.removeEventListener("scroll",C)},[]);const b=()=>window.scrollTo({top:0,behavior:"smooth"});return c.jsxs(c.Fragment,{children:[c.jsxs("footer",{style:_.footer,children:[u&&c.jsx("button",{style:_.scrollToTop,onClick:b,"aria-label":"Scroll to top",className:"scroll-top-btn",children:c.jsx(Vp,{})}),c.jsx("a",{href:"https://wa.me/919412004537",target:"_blank",rel:"noreferrer",style:_.whatsappFloat,"aria-label":"WhatsApp",className:"whatsapp-float",children:c.jsx(Xp,{})}),c.jsxs("div",{style:_.container,children:[c.jsxs("div",{style:_.visionSection,children:[c.jsx("h2",{style:_.visionTitle,children:"YOUR VISION. OUR TECHNOLOGY"}),c.jsx("div",{style:_.divider}),c.jsx("h3",{style:_.visionSubtitle,children:"We Engineer Solutions That Are:"})]}),c.jsxs("div",{style:_.featuresGrid,children:[c.jsxs("div",{style:_.featureCard,className:"feature-card",children:[c.jsx("div",{style:_.featureIconWrapper,className:"feature-icon-wrapper",children:c.jsx(Kp,{style:_.featureIcon})}),c.jsx("h4",{style:_.featureTitle,children:"SMART"}),c.jsx("p",{style:_.featureDesc,children:"Powered by cutting-edge AI, built for growth and future demands"})]}),c.jsxs("div",{style:_.featureCard,className:"feature-card",children:[c.jsx("div",{style:_.featureIconWrapper,className:"feature-icon-wrapper",children:c.jsx(Zp,{style:_.featureIcon})}),c.jsx("h4",{style:_.featureTitle,children:"SCALABLE & FAST"}),c.jsx("p",{style:_.featureDesc,children:"Optimized for lightning-quick performance and long-term scalability"})]}),c.jsxs("div",{style:_.featureCard,className:"feature-card",children:[c.jsx("div",{style:_.featureIconWrapper,className:"feature-icon-wrapper",children:c.jsx($p,{style:_.featureIcon})}),c.jsx("h4",{style:_.featureTitle,children:"SECURE & ROBUST"}),c.jsx("p",{style:_.featureDesc,children:"Enterprise-grade security, reliable and resilient systems"})]})]}),c.jsxs("div",{style:_.servicesSection,children:[c.jsx("h3",{style:_.servicesSectionTitle,children:"CORE SERVICES"}),c.jsxs("div",{style:_.servicesGrid,children:[c.jsxs("div",{style:_.serviceColumn,children:[c.jsx("h4",{style:_.serviceColumnTitle,children:"AI"}),c.jsxs("ul",{style:_.serviceList,children:[c.jsx("li",{style:_.serviceItem,className:"service-item",children:"Custom Models"}),c.jsx("li",{style:_.serviceItem,className:"service-item",children:"Machine Learning"}),c.jsx("li",{style:_.serviceItem,className:"service-item",children:"Predictive & Intelligent Systems"})]})]}),c.jsxs("div",{style:{..._.serviceColumn,..._.serviceColumnMiddle},children:[c.jsx("h4",{style:_.serviceColumnTitle,children:"WEB APPS"}),c.jsxs("ul",{style:_.serviceList,children:[c.jsx("li",{style:_.serviceItem,className:"service-item",children:"High-Performance Web Applications"}),c.jsx("li",{style:_.serviceItem,className:"service-item",children:"Scalable SASS Platforms"}),c.jsx("li",{style:_.serviceItem,className:"service-item",children:"Cloud-Ready Architecture"})]})]}),c.jsxs("div",{style:_.serviceColumn,children:[c.jsx("h4",{style:_.serviceColumnTitle,children:"SOFTWARE"}),c.jsxs("ul",{style:_.serviceList,children:[c.jsx("li",{style:_.serviceItem,className:"service-item",children:"Easy to-Use Backend Systems"}),c.jsx("li",{style:_.serviceItem,className:"service-item",children:"Secure Integrations"}),c.jsx("li",{style:_.serviceItem,className:"service-item",children:"Custom Business Software"})]})]})]})]}),c.jsxs("div",{style:_.infoGrid,children:[c.jsxs("div",{style:_.infoSection,children:[c.jsx("h3",{style:_.logo,children:"AAVRC"}),c.jsx("p",{style:_.tagline,children:"We Build It."}),c.jsx("p",{style:_.description,children:"Leading provider of AI-powered web development solutions, intelligent automation systems, and cutting-edge software services for businesses worldwide."}),c.jsxs("div",{style:_.socialContainer,children:[c.jsx("h4",{style:_.sectionTitle,children:"Follow Us"}),c.jsxs("div",{style:_.socialIcons,children:[c.jsx("a",{href:"https://www.youtube.com/@Aavrcalex",target:"_blank",rel:"noreferrer",style:_.socialLink,className:"social-link social-youtube",children:c.jsx(Qp,{})}),c.jsx("a",{href:"https://www.facebook.com/profile.php?id=61581382928986",target:"_blank",rel:"noreferrer",style:_.socialLink,className:"social-link social-facebook",children:c.jsx(kp,{})}),c.jsx("a",{href:"https://www.instagram.com/aavrcaavrc/?igsh=MWdtN3ZvZHlrZHRiNA%3D%3D#",target:"_blank",rel:"noreferrer",style:_.socialLink,className:"social-link social-instagram",children:c.jsx(Gp,{})}),c.jsx("a",{href:"mailto:aavrcworld@gmail.com",target:"_blank",rel:"noreferrer",style:_.socialLink,className:"social-link social-email",children:c.jsx(Wd,{})})]})]})]}),c.jsxs("div",{style:_.infoSection,children:[c.jsx("h4",{style:_.sectionTitle,children:"Contact Us"}),c.jsxs("div",{style:_.contactList,children:[c.jsxs("a",{href:"mailto:aavrcworld@gmail.com",style:_.contactLink,className:"contact-link",children:[c.jsx("div",{style:_.contactIconWrapper,className:"contact-icon-wrapper",children:c.jsx(Wd,{style:_.contactIcon})}),c.jsx("span",{children:"aavrcworld@gmail.com"})]}),c.jsxs("a",{href:"tel:+919412004537",style:_.contactLink,className:"contact-link",children:[c.jsx("div",{style:_.contactIconWrapper,className:"contact-icon-wrapper",children:c.jsx(Wp,{style:_.contactIcon})}),c.jsx("span",{children:"+91 94120 04537"})]}),c.jsxs("div",{style:_.contactLink,className:"contact-link",children:[c.jsx("div",{style:_.contactIconWrapper,className:"contact-icon-wrapper",children:c.jsx(Jp,{style:_.contactIcon})}),c.jsx("span",{children:"Agra, Uttar Pradesh, India"})]})]}),c.jsxs("div",{style:_.supportBox,className:"support-box",children:[c.jsx("h5",{style:_.supportTitle,children:"24/7 IT Support"}),c.jsx("p",{style:_.supportText,children:"Our technical team is available around the clock for assistance."})]})]})]}),c.jsxs("div",{style:_.footerBottom,children:[c.jsx("p",{style:_.copyright,children:"© 2025 AAVRC.COM - We Build It. | All rights reserved."}),c.jsxs("div",{style:_.footerLinks,children:[c.jsx("button",{style:_.linkButton,onClick:()=>s(!0),className:"footer-link-btn",children:"Privacy Policy"}),c.jsx("span",{style:_.separator,children:"|"}),c.jsx("button",{style:_.linkButton,onClick:()=>p(!0),className:"footer-link-btn",children:"Terms of Service"})]})]})]})]}),d&&c.jsx("div",{style:_.popupOverlay,onClick:()=>s(!1),children:c.jsxs("div",{style:_.popupContent,onClick:C=>C.stopPropagation(),children:[c.jsx("button",{style:_.closeButton,onClick:()=>s(!1),className:"popup-close-btn",children:"✖"}),c.jsx("h2",{style:_.popupTitle,children:"Privacy Policy"}),c.jsxs("div",{style:_.popupBody,children:[c.jsx("p",{style:_.popupText,children:"At AAVRC, we value your privacy. We collect minimal data to provide and improve our AI-powered web services. Your personal information is never sold or shared with third parties except as required for essential operations or legal compliance."}),c.jsx("p",{style:_.popupText,children:"We use encrypted communication, secure databases, and role-based access to ensure your data remains protected at all times."})]})]})}),h&&c.jsx("div",{style:_.popupOverlay,onClick:()=>p(!1),children:c.jsxs("div",{style:_.popupContent,onClick:C=>C.stopPropagation(),children:[c.jsx("button",{style:_.closeButton,onClick:()=>p(!1),className:"popup-close-btn",children:"✖"}),c.jsx("h2",{style:_.popupTitle,children:"Terms of Service"}),c.jsxs("div",{style:_.popupBody,children:[c.jsx("p",{style:_.popupText,children:"By using AAVRC's services, you agree to our standard usage policies, including proper use of AI tools, respect for copyright, and adherence to applicable laws."}),c.jsx("p",{style:_.popupText,children:"We reserve the right to update, modify, or terminate services with prior notice. Continued use of our services constitutes acceptance of any changes made to these terms."})]})]})})]})}const _={footer:{background:"#ffffff",padding:"80px 20px 30px",fontFamily:'"Segoe UI", Arial, sans-serif',position:"relative"},container:{maxWidth:"1200px",margin:"0 auto"},visionSection:{textAlign:"center",marginBottom:"60px"},visionTitle:{fontSize:"2.5rem",fontWeight:"800",color:"#1a1a1a",letterSpacing:"1px",marginBottom:"20px"},divider:{width:"80px",height:"4px",background:"linear-gradient(90deg, #00BCD4, #0097A7)",margin:"0 auto 25px",borderRadius:"2px"},visionSubtitle:{fontSize:"1.5rem",fontWeight:"400",color:"#555"},featuresGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"30px",marginBottom:"70px"},featureCard:{textAlign:"center",padding:"40px 30px",background:"#ffffff",borderRadius:"20px",boxShadow:"0 10px 40px rgba(0, 0, 0, 0.06)",border:"1px solid #f0f0f0",transition:"all 0.3s ease"},featureIconWrapper:{width:"100px",height:"100px",borderRadius:"50%",background:"linear-gradient(135deg, rgba(0, 188, 212, 0.1) 0%, rgba(0, 188, 212, 0.05) 100%)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 25px",transition:"all 0.3s ease"},featureIcon:{fontSize:"45px",color:"#00BCD4",transition:"all 0.3s ease"},featureTitle:{fontSize:"1.3rem",fontWeight:"700",color:"#1a1a1a",marginBottom:"12px"},featureDesc:{fontSize:"0.95rem",color:"#666",lineHeight:"1.7"},servicesSection:{marginBottom:"70px",padding:"50px 0",borderTop:"1px solid #f0f0f0",borderBottom:"1px solid #f0f0f0"},servicesSectionTitle:{fontSize:"2rem",fontWeight:"700",color:"#1a1a1a",textAlign:"center",marginBottom:"50px"},servicesGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"0"},serviceColumn:{padding:"25px 35px",textAlign:"center"},serviceColumnMiddle:{borderLeft:"1px solid rgba(0, 188, 212, 0.3)",borderRight:"1px solid rgba(0, 188, 212, 0.3)"},serviceColumnTitle:{fontSize:"1.4rem",fontWeight:"700",color:"#00BCD4",marginBottom:"25px"},serviceList:{listStyle:"none",padding:0,margin:0},serviceItem:{fontSize:"0.95rem",color:"#666",marginBottom:"15px",lineHeight:"1.5",padding:"8px 15px",borderRadius:"8px",transition:"all 0.3s ease",cursor:"default"},infoGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"50px",marginBottom:"50px"},infoSection:{display:"flex",flexDirection:"column"},logo:{fontSize:"2.5rem",fontWeight:"800",color:"#1a1a1a",marginBottom:"8px"},tagline:{fontSize:"1rem",color:"#00BCD4",fontWeight:"600",marginBottom:"20px",paddingBottom:"12px",borderBottom:"2px solid #1a1a1a",display:"inline-block"},description:{fontSize:"0.95rem",color:"#666",lineHeight:"1.8",marginBottom:"30px"},socialContainer:{marginTop:"auto"},sectionTitle:{fontSize:"1.1rem",fontWeight:"700",color:"#1a1a1a",marginBottom:"20px"},socialIcons:{display:"flex",gap:"15px",flexWrap:"wrap"},socialLink:{width:"50px",height:"50px",borderRadius:"50%",background:"#f5f5f5",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"24px",color:"#666",textDecoration:"none",transition:"all 0.3s ease",border:"2px solid transparent"},contactList:{display:"flex",flexDirection:"column",gap:"15px",marginBottom:"30px"},contactLink:{display:"flex",alignItems:"center",gap:"15px",color:"#555",textDecoration:"none",fontSize:"0.95rem",transition:"all 0.3s ease",padding:"12px 15px",borderRadius:"12px",background:"#f8f9fa",border:"1px solid transparent"},contactIconWrapper:{width:"40px",height:"40px",borderRadius:"50%",background:"linear-gradient(135deg, #00BCD4 0%, #0097A7 100%)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,transition:"all 0.3s ease"},contactIcon:{fontSize:"16px",color:"#ffffff"},supportBox:{background:"linear-gradient(135deg, rgba(0, 188, 212, 0.1) 0%, rgba(0, 188, 212, 0.05) 100%)",padding:"25px",borderRadius:"15px",border:"1px solid rgba(0, 188, 212, 0.2)",transition:"all 0.3s ease"},supportTitle:{fontSize:"1.1rem",fontWeight:"700",color:"#1a1a1a",marginBottom:"10px"},supportText:{fontSize:"0.9rem",color:"#666",lineHeight:"1.7",margin:0},footerBottom:{borderTop:"1px solid #e0e0e0",paddingTop:"30px",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"20px"},copyright:{fontSize:"0.9rem",color:"#888",margin:0,fontWeight:"500"},footerLinks:{display:"flex",alignItems:"center",gap:"15px"},linkButton:{background:"none",border:"none",color:"#666",fontSize:"0.9rem",cursor:"pointer",transition:"all 0.3s ease",padding:"5px 10px",fontWeight:"500",borderRadius:"5px"},separator:{color:"#ddd"},scrollToTop:{position:"fixed",bottom:"100px",right:"25px",background:"linear-gradient(135deg, #00BCD4 0%, #0097A7 100%)",color:"#fff",border:"none",padding:"0",borderRadius:"50%",fontSize:"20px",cursor:"pointer",boxShadow:"0 8px 25px rgba(0, 188, 212, 0.4)",zIndex:999,transition:"all 0.3s ease",display:"flex",alignItems:"center",justifyContent:"center",width:"55px",height:"55px"},whatsappFloat:{position:"fixed",bottom:"25px",right:"25px",zIndex:998,fontSize:"60px",color:"#25D366",transition:"all 0.3s ease",filter:"drop-shadow(0 5px 15px rgba(37, 211, 102, 0.4))"},popupOverlay:{position:"fixed",top:0,left:0,width:"100%",height:"100%",background:"rgba(0, 0, 0, 0.7)",display:"flex",justifyContent:"center",alignItems:"center",zIndex:9999,backdropFilter:"blur(5px)"},popupContent:{background:"#ffffff",width:"90%",maxWidth:"600px",padding:"50px",borderRadius:"25px",boxShadow:"0 30px 80px rgba(0, 0, 0, 0.3)",position:"relative",maxHeight:"80vh",overflowY:"auto"},closeButton:{position:"absolute",top:"25px",right:"25px",background:"#f5f5f5",border:"none",fontSize:"18px",cursor:"pointer",color:"#666",transition:"all 0.3s ease",width:"45px",height:"45px",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"50%"},popupTitle:{fontSize:"1.8rem",fontWeight:"700",color:"#1a1a1a",marginBottom:"25px"},popupBody:{fontSize:"1rem",lineHeight:"1.8"},popupText:{color:"#666",marginBottom:"20px"}},Nc=document.createElement("style");Nc.textContent=`
  /* Feature Card Hover */
  .feature-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 50px rgba(0, 188, 212, 0.15) !important;
    border-color: rgba(0, 188, 212, 0.3) !important;
  }
  
  .feature-card:hover .feature-icon-wrapper {
    background: linear-gradient(135deg, #00BCD4 0%, #0097A7 100%) !important;
    transform: scale(1.1) rotate(5deg);
  }
  
  .feature-card:hover .feature-icon-wrapper svg {
    color: #ffffff !important;
  }

  /* Social Links Hover */
  .social-link:hover {
    transform: translateY(-5px) scale(1.15);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }
  
  .social-youtube:hover {
    background: #FF0000 !important;
    color: #ffffff !important;
    border-color: #FF0000 !important;
  }
  
  .social-facebook:hover {
    background: #1877F2 !important;
    color: #ffffff !important;
    border-color: #1877F2 !important;
  }
  
  .social-instagram:hover {
    background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888) !important;
    color: #ffffff !important;
    border-color: #dc2743 !important;
  }
  
  .social-email:hover {
    background: linear-gradient(135deg, #00BCD4 0%, #0097A7 100%) !important;
    color: #ffffff !important;
    border-color: #00BCD4 !important;
  }

  /* Contact Link Hover */
  .contact-link:hover {
    background: #ffffff !important;
    border-color: rgba(0, 188, 212, 0.3) !important;
    box-shadow: 0 10px 30px rgba(0, 188, 212, 0.15);
    transform: translateX(10px);
  }
  
  .contact-link:hover .contact-icon-wrapper {
    transform: scale(1.1) rotate(10deg);
    box-shadow: 0 5px 15px rgba(0, 188, 212, 0.4);
  }
  
  .contact-link:hover span {
    color: #00BCD4;
  }

  /* Service Item Hover */
  .service-item:hover {
    background: rgba(0, 188, 212, 0.08);
    color: #00BCD4 !important;
    transform: scale(1.02);
  }

  /* Support Box Hover */
  .support-box:hover {
    background: linear-gradient(135deg, rgba(0, 188, 212, 0.15) 0%, rgba(0, 188, 212, 0.08) 100%) !important;
    border-color: rgba(0, 188, 212, 0.4) !important;
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(0, 188, 212, 0.15);
  }

  /* Footer Link Button Hover */
  .footer-link-btn:hover {
    color: #00BCD4 !important;
    background: rgba(0, 188, 212, 0.1);
  }

  /* Scroll To Top Button Hover */
  .scroll-top-btn:hover {
    transform: translateY(-5px) scale(1.1);
    box-shadow: 0 12px 35px rgba(0, 188, 212, 0.5) !important;
  }

  /* WhatsApp Float Hover */
  .whatsapp-float:hover {
    transform: scale(1.15) rotate(10deg);
    filter: drop-shadow(0 8px 20px rgba(37, 211, 102, 0.5)) !important;
  }

  /* Popup Close Button Hover */
  .popup-close-btn:hover {
    background: #00BCD4 !important;
    color: #ffffff !important;
    transform: rotate(90deg);
  }

  /* Responsive */
  @media (max-width: 768px) {
    [style*="visionTitle"] {
      font-size: 1.8rem !important;
    }
    
    [style*="visionSubtitle"] {
      font-size: 1.2rem !important;
    }
    
    [style*="serviceColumnMiddle"] {
      border-left: none !important;
      border-right: none !important;
      border-top: 1px solid rgba(0, 188, 212, 0.3) !important;
      border-bottom: 1px solid rgba(0, 188, 212, 0.3) !important;
    }
    
    [style*="footerBottom"] {
      flex-direction: column !important;
      text-align: center !important;
    }
  }
`;document.getElementById("footer-styles")||(Nc.id="footer-styles",document.head.appendChild(Nc));function Ip(){return c.jsxs(c.Fragment,{children:[c.jsx("section",{id:"home",children:c.jsx(fp,{})}),c.jsx("section",{id:"about",children:c.jsx(pp,{})}),c.jsx("section",{id:"services",children:c.jsx(Ap,{})}),c.jsx("section",{id:"projects",children:c.jsx(Np,{})}),c.jsx("section",{id:"footer",children:c.jsx(Fp,{})})]})}function Pp(){return c.jsxs(c.Fragment,{children:[c.jsx(op,{}),c.jsx(Ip,{})]})}/**
 * react-router v7.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var $d="popstate";function t1(u={}){function f(h,p){let{pathname:b="/",search:C="",hash:S=""}=Oa(h.location.hash.substring(1));return!b.startsWith("/")&&!b.startsWith(".")&&(b="/"+b),Bc("",{pathname:b,search:C,hash:S},p.state&&p.state.usr||null,p.state&&p.state.key||"default")}function d(h,p){let b=h.document.querySelector("base"),C="";if(b&&b.getAttribute("href")){let S=h.location.href,v=S.indexOf("#");C=v===-1?S:S.slice(0,v)}return C+"#"+(typeof p=="string"?p:_n(p))}function s(h,p){Ce(h.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(p)})`)}return l1(f,d,s,u)}function Ut(u,f){if(u===!1||u===null||typeof u>"u")throw new Error(f)}function Ce(u,f){if(!u){typeof console<"u"&&console.warn(f);try{throw new Error(f)}catch{}}}function e1(){return Math.random().toString(36).substring(2,10)}function Fd(u,f){return{usr:u.state,key:u.key,idx:f}}function Bc(u,f,d=null,s){return{pathname:typeof u=="string"?u:u.pathname,search:"",hash:"",...typeof f=="string"?Oa(f):f,state:d,key:f&&f.key||s||e1()}}function _n({pathname:u="/",search:f="",hash:d=""}){return f&&f!=="?"&&(u+=f.charAt(0)==="?"?f:"?"+f),d&&d!=="#"&&(u+=d.charAt(0)==="#"?d:"#"+d),u}function Oa(u){let f={};if(u){let d=u.indexOf("#");d>=0&&(f.hash=u.substring(d),u=u.substring(0,d));let s=u.indexOf("?");s>=0&&(f.search=u.substring(s),u=u.substring(0,s)),u&&(f.pathname=u)}return f}function l1(u,f,d,s={}){let{window:h=document.defaultView,v5Compat:p=!1}=s,b=h.history,C="POP",S=null,v=A();v==null&&(v=0,b.replaceState({...b.state,idx:v},""));function A(){return(b.state||{idx:null}).idx}function U(){C="POP";let k=A(),W=k==null?null:k-v;v=k,S&&S({action:C,location:P.location,delta:W})}function L(k,W){C="PUSH";let X=Bc(P.location,k,W);d&&d(X,k),v=A()+1;let lt=Fd(X,v),jt=P.createHref(X);try{b.pushState(lt,"",jt)}catch(tt){if(tt instanceof DOMException&&tt.name==="DataCloneError")throw tt;h.location.assign(jt)}p&&S&&S({action:C,location:P.location,delta:1})}function V(k,W){C="REPLACE";let X=Bc(P.location,k,W);d&&d(X,k),v=A();let lt=Fd(X,v),jt=P.createHref(X);b.replaceState(lt,"",jt),p&&S&&S({action:C,location:P.location,delta:0})}function Z(k){return a1(k)}let P={get action(){return C},get location(){return u(h,b)},listen(k){if(S)throw new Error("A history only accepts one active listener");return h.addEventListener($d,U),S=k,()=>{h.removeEventListener($d,U),S=null}},createHref(k){return f(h,k)},createURL:Z,encodeLocation(k){let W=Z(k);return{pathname:W.pathname,search:W.search,hash:W.hash}},push:L,replace:V,go(k){return b.go(k)}};return P}function a1(u,f=!1){let d="http://localhost";typeof window<"u"&&(d=window.location.origin!=="null"?window.location.origin:window.location.href),Ut(d,"No window.location.(origin|href) available to create URL");let s=typeof u=="string"?u:_n(u);return s=s.replace(/ $/,"%20"),!f&&s.startsWith("//")&&(s=d+s),new URL(s,d)}function i0(u,f,d="/"){return n1(u,f,d,!1)}function n1(u,f,d,s){let h=typeof f=="string"?Oa(f):f,p=Ie(h.pathname||"/",d);if(p==null)return null;let b=u0(u);i1(b);let C=null;for(let S=0;C==null&&S<b.length;++S){let v=g1(p);C=h1(b[S],v,s)}return C}function u0(u,f=[],d=[],s="",h=!1){let p=(b,C,S=h,v)=>{let A={relativePath:v===void 0?b.path||"":v,caseSensitive:b.caseSensitive===!0,childrenIndex:C,route:b};if(A.relativePath.startsWith("/")){if(!A.relativePath.startsWith(s)&&S)return;Ut(A.relativePath.startsWith(s),`Absolute route path "${A.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),A.relativePath=A.relativePath.slice(s.length)}let U=Fe([s,A.relativePath]),L=d.concat(A);b.children&&b.children.length>0&&(Ut(b.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${U}".`),u0(b.children,f,L,U,S)),!(b.path==null&&!b.index)&&f.push({path:U,score:d1(U,b.index),routesMeta:L})};return u.forEach((b,C)=>{if(b.path===""||!b.path?.includes("?"))p(b,C);else for(let S of r0(b.path))p(b,C,!0,S)}),f}function r0(u){let f=u.split("/");if(f.length===0)return[];let[d,...s]=f,h=d.endsWith("?"),p=d.replace(/\?$/,"");if(s.length===0)return h?[p,""]:[p];let b=r0(s.join("/")),C=[];return C.push(...b.map(S=>S===""?p:[p,S].join("/"))),h&&C.push(...b),C.map(S=>u.startsWith("/")&&S===""?"/":S)}function i1(u){u.sort((f,d)=>f.score!==d.score?d.score-f.score:m1(f.routesMeta.map(s=>s.childrenIndex),d.routesMeta.map(s=>s.childrenIndex)))}var u1=/^:[\w-]+$/,r1=3,c1=2,o1=1,s1=10,f1=-2,Id=u=>u==="*";function d1(u,f){let d=u.split("/"),s=d.length;return d.some(Id)&&(s+=f1),f&&(s+=c1),d.filter(h=>!Id(h)).reduce((h,p)=>h+(u1.test(p)?r1:p===""?o1:s1),s)}function m1(u,f){return u.length===f.length&&u.slice(0,-1).every((s,h)=>s===f[h])?u[u.length-1]-f[f.length-1]:0}function h1(u,f,d=!1){let{routesMeta:s}=u,h={},p="/",b=[];for(let C=0;C<s.length;++C){let S=s[C],v=C===s.length-1,A=p==="/"?f:f.slice(p.length)||"/",U=nu({path:S.relativePath,caseSensitive:S.caseSensitive,end:v},A),L=S.route;if(!U&&v&&d&&!s[s.length-1].route.index&&(U=nu({path:S.relativePath,caseSensitive:S.caseSensitive,end:!1},A)),!U)return null;Object.assign(h,U.params),b.push({params:h,pathname:Fe([p,U.pathname]),pathnameBase:b1(Fe([p,U.pathnameBase])),route:L}),U.pathnameBase!=="/"&&(p=Fe([p,U.pathnameBase]))}return b}function nu(u,f){typeof u=="string"&&(u={path:u,caseSensitive:!1,end:!0});let[d,s]=p1(u.path,u.caseSensitive,u.end),h=f.match(d);if(!h)return null;let p=h[0],b=p.replace(/(.)\/+$/,"$1"),C=h.slice(1);return{params:s.reduce((v,{paramName:A,isOptional:U},L)=>{if(A==="*"){let Z=C[L]||"";b=p.slice(0,p.length-Z.length).replace(/(.)\/+$/,"$1")}const V=C[L];return U&&!V?v[A]=void 0:v[A]=(V||"").replace(/%2F/g,"/"),v},{}),pathname:p,pathnameBase:b,pattern:u}}function p1(u,f=!1,d=!0){Ce(u==="*"||!u.endsWith("*")||u.endsWith("/*"),`Route path "${u}" will be treated as if it were "${u.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${u.replace(/\*$/,"/*")}".`);let s=[],h="^"+u.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(b,C,S)=>(s.push({paramName:C,isOptional:S!=null}),S?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return u.endsWith("*")?(s.push({paramName:"*"}),h+=u==="*"||u==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):d?h+="\\/*$":u!==""&&u!=="/"&&(h+="(?:(?=\\/|$))"),[new RegExp(h,f?void 0:"i"),s]}function g1(u){try{return u.split("/").map(f=>decodeURIComponent(f).replace(/\//g,"%2F")).join("/")}catch(f){return Ce(!1,`The URL path "${u}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${f}).`),u}}function Ie(u,f){if(f==="/")return u;if(!u.toLowerCase().startsWith(f.toLowerCase()))return null;let d=f.endsWith("/")?f.length-1:f.length,s=u.charAt(d);return s&&s!=="/"?null:u.slice(d)||"/"}function v1(u,f="/"){let{pathname:d,search:s="",hash:h=""}=typeof u=="string"?Oa(u):u;return{pathname:d?d.startsWith("/")?d:y1(d,f):f,search:S1(s),hash:j1(h)}}function y1(u,f){let d=f.replace(/\/+$/,"").split("/");return u.split("/").forEach(h=>{h===".."?d.length>1&&d.pop():h!=="."&&d.push(h)}),d.length>1?d.join("/"):"/"}function wc(u,f,d,s){return`Cannot include a '${u}' character in a manually specified \`to.${f}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${d}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function x1(u){return u.filter((f,d)=>d===0||f.route.path&&f.route.path.length>0)}function c0(u){let f=x1(u);return f.map((d,s)=>s===f.length-1?d.pathname:d.pathnameBase)}function o0(u,f,d,s=!1){let h;typeof u=="string"?h=Oa(u):(h={...u},Ut(!h.pathname||!h.pathname.includes("?"),wc("?","pathname","search",h)),Ut(!h.pathname||!h.pathname.includes("#"),wc("#","pathname","hash",h)),Ut(!h.search||!h.search.includes("#"),wc("#","search","hash",h)));let p=u===""||h.pathname==="",b=p?"/":h.pathname,C;if(b==null)C=d;else{let U=f.length-1;if(!s&&b.startsWith("..")){let L=b.split("/");for(;L[0]==="..";)L.shift(),U-=1;h.pathname=L.join("/")}C=U>=0?f[U]:"/"}let S=v1(h,C),v=b&&b!=="/"&&b.endsWith("/"),A=(p||b===".")&&d.endsWith("/");return!S.pathname.endsWith("/")&&(v||A)&&(S.pathname+="/"),S}var Fe=u=>u.join("/").replace(/\/\/+/g,"/"),b1=u=>u.replace(/\/+$/,"").replace(/^\/*/,"/"),S1=u=>!u||u==="?"?"":u.startsWith("?")?u:"?"+u,j1=u=>!u||u==="#"?"":u.startsWith("#")?u:"#"+u;function z1(u){return u!=null&&typeof u.status=="number"&&typeof u.statusText=="string"&&typeof u.internal=="boolean"&&"data"in u}var s0=["POST","PUT","PATCH","DELETE"];new Set(s0);var T1=["GET",...s0];new Set(T1);var Na=w.createContext(null);Na.displayName="DataRouter";var iu=w.createContext(null);iu.displayName="DataRouterState";w.createContext(!1);var f0=w.createContext({isTransitioning:!1});f0.displayName="ViewTransition";var E1=w.createContext(new Map);E1.displayName="Fetchers";var A1=w.createContext(null);A1.displayName="Await";var _e=w.createContext(null);_e.displayName="Navigation";var uu=w.createContext(null);uu.displayName="Location";var Pe=w.createContext({outlet:null,matches:[],isDataRoute:!1});Pe.displayName="Route";var Uc=w.createContext(null);Uc.displayName="RouteError";function C1(u,{relative:f}={}){Ut(Un(),"useHref() may be used only in the context of a <Router> component.");let{basename:d,navigator:s}=w.useContext(_e),{hash:h,pathname:p,search:b}=Hn(u,{relative:f}),C=p;return d!=="/"&&(C=p==="/"?d:Fe([d,p])),s.createHref({pathname:C,search:b,hash:h})}function Un(){return w.useContext(uu)!=null}function Zl(){return Ut(Un(),"useLocation() may be used only in the context of a <Router> component."),w.useContext(uu).location}var d0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function m0(u){w.useContext(_e).static||w.useLayoutEffect(u)}function R1(){let{isDataRoute:u}=w.useContext(Pe);return u?k1():w1()}function w1(){Ut(Un(),"useNavigate() may be used only in the context of a <Router> component.");let u=w.useContext(Na),{basename:f,navigator:d}=w.useContext(_e),{matches:s}=w.useContext(Pe),{pathname:h}=Zl(),p=JSON.stringify(c0(s)),b=w.useRef(!1);return m0(()=>{b.current=!0}),w.useCallback((S,v={})=>{if(Ce(b.current,d0),!b.current)return;if(typeof S=="number"){d.go(S);return}let A=o0(S,JSON.parse(p),h,v.relative==="path");u==null&&f!=="/"&&(A.pathname=A.pathname==="/"?f:Fe([f,A.pathname])),(v.replace?d.replace:d.push)(A,v.state,v)},[f,d,p,h,u])}w.createContext(null);function Hn(u,{relative:f}={}){let{matches:d}=w.useContext(Pe),{pathname:s}=Zl(),h=JSON.stringify(c0(d));return w.useMemo(()=>o0(u,JSON.parse(h),s,f==="path"),[u,h,s,f])}function D1(u,f,d,s,h){Ut(Un(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:p}=w.useContext(_e),{matches:b}=w.useContext(Pe),C=b[b.length-1],S=C?C.params:{},v=C?C.pathname:"/",A=C?C.pathnameBase:"/",U=C&&C.route;{let X=U&&U.path||"";h0(v,!U||X.endsWith("*")||X.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${v}" (under <Route path="${X}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${X}"> to <Route path="${X==="/"?"*":`${X}/*`}">.`)}let L=Zl(),V;V=L;let Z=V.pathname||"/",P=Z;if(A!=="/"){let X=A.replace(/^\//,"").split("/");P="/"+Z.replace(/^\//,"").split("/").slice(X.length).join("/")}let k=i0(u,{pathname:P});return Ce(U||k!=null,`No routes matched location "${V.pathname}${V.search}${V.hash}" `),Ce(k==null||k[k.length-1].route.element!==void 0||k[k.length-1].route.Component!==void 0||k[k.length-1].route.lazy!==void 0,`Matched leaf route at location "${V.pathname}${V.search}${V.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),_1(k&&k.map(X=>Object.assign({},X,{params:Object.assign({},S,X.params),pathname:Fe([A,p.encodeLocation?p.encodeLocation(X.pathname).pathname:X.pathname]),pathnameBase:X.pathnameBase==="/"?A:Fe([A,p.encodeLocation?p.encodeLocation(X.pathnameBase).pathname:X.pathnameBase])})),b,d,s,h)}function M1(){let u=q1(),f=z1(u)?`${u.status} ${u.statusText}`:u instanceof Error?u.message:JSON.stringify(u),d=u instanceof Error?u.stack:null,s="rgba(200,200,200, 0.5)",h={padding:"0.5rem",backgroundColor:s},p={padding:"2px 4px",backgroundColor:s},b=null;return console.error("Error handled by React Router default ErrorBoundary:",u),b=w.createElement(w.Fragment,null,w.createElement("p",null,"💿 Hey developer 👋"),w.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",w.createElement("code",{style:p},"ErrorBoundary")," or"," ",w.createElement("code",{style:p},"errorElement")," prop on your route.")),w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},f),d?w.createElement("pre",{style:h},d):null,b)}var O1=w.createElement(M1,null),N1=class extends w.Component{constructor(u){super(u),this.state={location:u.location,revalidation:u.revalidation,error:u.error}}static getDerivedStateFromError(u){return{error:u}}static getDerivedStateFromProps(u,f){return f.location!==u.location||f.revalidation!=="idle"&&u.revalidation==="idle"?{error:u.error,location:u.location,revalidation:u.revalidation}:{error:u.error!==void 0?u.error:f.error,location:f.location,revalidation:u.revalidation||f.revalidation}}componentDidCatch(u,f){this.props.unstable_onError?this.props.unstable_onError(u,f):console.error("React Router caught the following error during render",u)}render(){return this.state.error!==void 0?w.createElement(Pe.Provider,{value:this.props.routeContext},w.createElement(Uc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function B1({routeContext:u,match:f,children:d}){let s=w.useContext(Na);return s&&s.static&&s.staticContext&&(f.route.errorElement||f.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=f.route.id),w.createElement(Pe.Provider,{value:u},d)}function _1(u,f=[],d=null,s=null,h=null){if(u==null){if(!d)return null;if(d.errors)u=d.matches;else if(f.length===0&&!d.initialized&&d.matches.length>0)u=d.matches;else return null}let p=u,b=d?.errors;if(b!=null){let v=p.findIndex(A=>A.route.id&&b?.[A.route.id]!==void 0);Ut(v>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(b).join(",")}`),p=p.slice(0,Math.min(p.length,v+1))}let C=!1,S=-1;if(d)for(let v=0;v<p.length;v++){let A=p[v];if((A.route.HydrateFallback||A.route.hydrateFallbackElement)&&(S=v),A.route.id){let{loaderData:U,errors:L}=d,V=A.route.loader&&!U.hasOwnProperty(A.route.id)&&(!L||L[A.route.id]===void 0);if(A.route.lazy||V){C=!0,S>=0?p=p.slice(0,S+1):p=[p[0]];break}}}return p.reduceRight((v,A,U)=>{let L,V=!1,Z=null,P=null;d&&(L=b&&A.route.id?b[A.route.id]:void 0,Z=A.route.errorElement||O1,C&&(S<0&&U===0?(h0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),V=!0,P=null):S===U&&(V=!0,P=A.route.hydrateFallbackElement||null)));let k=f.concat(p.slice(0,U+1)),W=()=>{let X;return L?X=Z:V?X=P:A.route.Component?X=w.createElement(A.route.Component,null):A.route.element?X=A.route.element:X=v,w.createElement(B1,{match:A,routeContext:{outlet:v,matches:k,isDataRoute:d!=null},children:X})};return d&&(A.route.ErrorBoundary||A.route.errorElement||U===0)?w.createElement(N1,{location:d.location,revalidation:d.revalidation,component:Z,error:L,children:W(),routeContext:{outlet:null,matches:k,isDataRoute:!0},unstable_onError:s}):W()},null)}function Hc(u){return`${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function U1(u){let f=w.useContext(Na);return Ut(f,Hc(u)),f}function H1(u){let f=w.useContext(iu);return Ut(f,Hc(u)),f}function Y1(u){let f=w.useContext(Pe);return Ut(f,Hc(u)),f}function Yc(u){let f=Y1(u),d=f.matches[f.matches.length-1];return Ut(d.route.id,`${u} can only be used on routes that contain a unique "id"`),d.route.id}function L1(){return Yc("useRouteId")}function q1(){let u=w.useContext(Uc),f=H1("useRouteError"),d=Yc("useRouteError");return u!==void 0?u:f.errors?.[d]}function k1(){let{router:u}=U1("useNavigate"),f=Yc("useNavigate"),d=w.useRef(!1);return m0(()=>{d.current=!0}),w.useCallback(async(h,p={})=>{Ce(d.current,d0),d.current&&(typeof h=="number"?u.navigate(h):await u.navigate(h,{fromRouteId:f,...p}))},[u,f])}var Pd={};function h0(u,f,d){!f&&!Pd[u]&&(Pd[u]=!0,Ce(!1,d))}w.memo(G1);function G1({routes:u,future:f,state:d,unstable_onError:s}){return D1(u,void 0,d,s,f)}function X1({basename:u="/",children:f=null,location:d,navigationType:s="POP",navigator:h,static:p=!1}){Ut(!Un(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let b=u.replace(/^\/*/,"/"),C=w.useMemo(()=>({basename:b,navigator:h,static:p,future:{}}),[b,h,p]);typeof d=="string"&&(d=Oa(d));let{pathname:S="/",search:v="",hash:A="",state:U=null,key:L="default"}=d,V=w.useMemo(()=>{let Z=Ie(S,b);return Z==null?null:{location:{pathname:Z,search:v,hash:A,state:U,key:L},navigationType:s}},[b,S,v,A,U,L,s]);return Ce(V!=null,`<Router basename="${b}"> is not able to match the URL "${S}${v}${A}" because it does not start with the basename, so the <Router> won't render anything.`),V==null?null:w.createElement(_e.Provider,{value:C},w.createElement(uu.Provider,{children:f,value:V}))}var tu="get",eu="application/x-www-form-urlencoded";function ru(u){return u!=null&&typeof u.tagName=="string"}function Q1(u){return ru(u)&&u.tagName.toLowerCase()==="button"}function V1(u){return ru(u)&&u.tagName.toLowerCase()==="form"}function Z1(u){return ru(u)&&u.tagName.toLowerCase()==="input"}function K1(u){return!!(u.metaKey||u.altKey||u.ctrlKey||u.shiftKey)}function J1(u,f){return u.button===0&&(!f||f==="_self")&&!K1(u)}var Pi=null;function W1(){if(Pi===null)try{new FormData(document.createElement("form"),0),Pi=!1}catch{Pi=!0}return Pi}var $1=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Dc(u){return u!=null&&!$1.has(u)?(Ce(!1,`"${u}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${eu}"`),null):u}function F1(u,f){let d,s,h,p,b;if(V1(u)){let C=u.getAttribute("action");s=C?Ie(C,f):null,d=u.getAttribute("method")||tu,h=Dc(u.getAttribute("enctype"))||eu,p=new FormData(u)}else if(Q1(u)||Z1(u)&&(u.type==="submit"||u.type==="image")){let C=u.form;if(C==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let S=u.getAttribute("formaction")||C.getAttribute("action");if(s=S?Ie(S,f):null,d=u.getAttribute("formmethod")||C.getAttribute("method")||tu,h=Dc(u.getAttribute("formenctype"))||Dc(C.getAttribute("enctype"))||eu,p=new FormData(C,u),!W1()){let{name:v,type:A,value:U}=u;if(A==="image"){let L=v?`${v}.`:"";p.append(`${L}x`,"0"),p.append(`${L}y`,"0")}else v&&p.append(v,U)}}else{if(ru(u))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');d=tu,s=null,h=eu,b=u}return p&&h==="text/plain"&&(b=p,p=void 0),{action:s,method:d.toLowerCase(),encType:h,formData:p,body:b}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Lc(u,f){if(u===!1||u===null||typeof u>"u")throw new Error(f)}function I1(u,f,d){let s=typeof u=="string"?new URL(u,typeof window>"u"?"server://singlefetch/":window.location.origin):u;return s.pathname==="/"?s.pathname=`_root.${d}`:f&&Ie(s.pathname,f)==="/"?s.pathname=`${f.replace(/\/$/,"")}/_root.${d}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${d}`,s}async function P1(u,f){if(u.id in f)return f[u.id];try{let d=await import(u.module);return f[u.id]=d,d}catch(d){return console.error(`Error loading route module \`${u.module}\`, reloading page...`),console.error(d),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function tg(u){return u==null?!1:u.href==null?u.rel==="preload"&&typeof u.imageSrcSet=="string"&&typeof u.imageSizes=="string":typeof u.rel=="string"&&typeof u.href=="string"}async function eg(u,f,d){let s=await Promise.all(u.map(async h=>{let p=f.routes[h.route.id];if(p){let b=await P1(p,d);return b.links?b.links():[]}return[]}));return ig(s.flat(1).filter(tg).filter(h=>h.rel==="stylesheet"||h.rel==="preload").map(h=>h.rel==="stylesheet"?{...h,rel:"prefetch",as:"style"}:{...h,rel:"prefetch"}))}function t0(u,f,d,s,h,p){let b=(S,v)=>d[v]?S.route.id!==d[v].route.id:!0,C=(S,v)=>d[v].pathname!==S.pathname||d[v].route.path?.endsWith("*")&&d[v].params["*"]!==S.params["*"];return p==="assets"?f.filter((S,v)=>b(S,v)||C(S,v)):p==="data"?f.filter((S,v)=>{let A=s.routes[S.route.id];if(!A||!A.hasLoader)return!1;if(b(S,v)||C(S,v))return!0;if(S.route.shouldRevalidate){let U=S.route.shouldRevalidate({currentUrl:new URL(h.pathname+h.search+h.hash,window.origin),currentParams:d[0]?.params||{},nextUrl:new URL(u,window.origin),nextParams:S.params,defaultShouldRevalidate:!0});if(typeof U=="boolean")return U}return!0}):[]}function lg(u,f,{includeHydrateFallback:d}={}){return ag(u.map(s=>{let h=f.routes[s.route.id];if(!h)return[];let p=[h.module];return h.clientActionModule&&(p=p.concat(h.clientActionModule)),h.clientLoaderModule&&(p=p.concat(h.clientLoaderModule)),d&&h.hydrateFallbackModule&&(p=p.concat(h.hydrateFallbackModule)),h.imports&&(p=p.concat(h.imports)),p}).flat(1))}function ag(u){return[...new Set(u)]}function ng(u){let f={},d=Object.keys(u).sort();for(let s of d)f[s]=u[s];return f}function ig(u,f){let d=new Set;return new Set(f),u.reduce((s,h)=>{let p=JSON.stringify(ng(h));return d.has(p)||(d.add(p),s.push({key:p,link:h})),s},[])}function p0(){let u=w.useContext(Na);return Lc(u,"You must render this element inside a <DataRouterContext.Provider> element"),u}function ug(){let u=w.useContext(iu);return Lc(u,"You must render this element inside a <DataRouterStateContext.Provider> element"),u}var qc=w.createContext(void 0);qc.displayName="FrameworkContext";function g0(){let u=w.useContext(qc);return Lc(u,"You must render this element inside a <HydratedRouter> element"),u}function rg(u,f){let d=w.useContext(qc),[s,h]=w.useState(!1),[p,b]=w.useState(!1),{onFocus:C,onBlur:S,onMouseEnter:v,onMouseLeave:A,onTouchStart:U}=f,L=w.useRef(null);w.useEffect(()=>{if(u==="render"&&b(!0),u==="viewport"){let P=W=>{W.forEach(X=>{b(X.isIntersecting)})},k=new IntersectionObserver(P,{threshold:.5});return L.current&&k.observe(L.current),()=>{k.disconnect()}}},[u]),w.useEffect(()=>{if(s){let P=setTimeout(()=>{b(!0)},100);return()=>{clearTimeout(P)}}},[s]);let V=()=>{h(!0)},Z=()=>{h(!1),b(!1)};return d?u!=="intent"?[p,L,{}]:[p,L,{onFocus:Bn(C,V),onBlur:Bn(S,Z),onMouseEnter:Bn(v,V),onMouseLeave:Bn(A,Z),onTouchStart:Bn(U,V)}]:[!1,L,{}]}function Bn(u,f){return d=>{u&&u(d),d.defaultPrevented||f(d)}}function cg({page:u,...f}){let{router:d}=p0(),s=w.useMemo(()=>i0(d.routes,u,d.basename),[d.routes,u,d.basename]);return s?w.createElement(sg,{page:u,matches:s,...f}):null}function og(u){let{manifest:f,routeModules:d}=g0(),[s,h]=w.useState([]);return w.useEffect(()=>{let p=!1;return eg(u,f,d).then(b=>{p||h(b)}),()=>{p=!0}},[u,f,d]),s}function sg({page:u,matches:f,...d}){let s=Zl(),{manifest:h,routeModules:p}=g0(),{basename:b}=p0(),{loaderData:C,matches:S}=ug(),v=w.useMemo(()=>t0(u,f,S,h,s,"data"),[u,f,S,h,s]),A=w.useMemo(()=>t0(u,f,S,h,s,"assets"),[u,f,S,h,s]),U=w.useMemo(()=>{if(u===s.pathname+s.search+s.hash)return[];let Z=new Set,P=!1;if(f.forEach(W=>{let X=h.routes[W.route.id];!X||!X.hasLoader||(!v.some(lt=>lt.route.id===W.route.id)&&W.route.id in C&&p[W.route.id]?.shouldRevalidate||X.hasClientLoader?P=!0:Z.add(W.route.id))}),Z.size===0)return[];let k=I1(u,b,"data");return P&&Z.size>0&&k.searchParams.set("_routes",f.filter(W=>Z.has(W.route.id)).map(W=>W.route.id).join(",")),[k.pathname+k.search]},[b,C,s,h,v,f,u,p]),L=w.useMemo(()=>lg(A,h),[A,h]),V=og(A);return w.createElement(w.Fragment,null,U.map(Z=>w.createElement("link",{key:Z,rel:"prefetch",as:"fetch",href:Z,...d})),L.map(Z=>w.createElement("link",{key:Z,rel:"modulepreload",href:Z,...d})),V.map(({key:Z,link:P})=>w.createElement("link",{key:Z,nonce:d.nonce,...P})))}function fg(...u){return f=>{u.forEach(d=>{typeof d=="function"?d(f):d!=null&&(d.current=f)})}}var v0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{v0&&(window.__reactRouterVersion="7.9.1")}catch{}function dg({basename:u,children:f,window:d}){let s=w.useRef();s.current==null&&(s.current=t1({window:d,v5Compat:!0}));let h=s.current,[p,b]=w.useState({action:h.action,location:h.location}),C=w.useCallback(S=>{w.startTransition(()=>b(S))},[b]);return w.useLayoutEffect(()=>h.listen(C),[h,C]),w.createElement(X1,{basename:u,children:f,location:p.location,navigationType:p.action,navigator:h})}var y0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,x0=w.forwardRef(function({onClick:f,discover:d="render",prefetch:s="none",relative:h,reloadDocument:p,replace:b,state:C,target:S,to:v,preventScrollReset:A,viewTransition:U,...L},V){let{basename:Z}=w.useContext(_e),P=typeof v=="string"&&y0.test(v),k,W=!1;if(typeof v=="string"&&P&&(k=v,v0))try{let Tt=new URL(window.location.href),ae=v.startsWith("//")?new URL(Tt.protocol+v):new URL(v),he=Ie(ae.pathname,Z);ae.origin===Tt.origin&&he!=null?v=he+ae.search+ae.hash:W=!0}catch{Ce(!1,`<Link to="${v}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let X=C1(v,{relative:h}),[lt,jt,tt]=rg(s,L),Ht=gg(v,{replace:b,state:C,target:S,preventScrollReset:A,relative:h,viewTransition:U});function Ot(Tt){f&&f(Tt),Tt.defaultPrevented||Ht(Tt)}let Yt=w.createElement("a",{...L,...tt,href:k||X,onClick:W||p?f:Ot,ref:fg(V,jt),target:S,"data-discover":!P&&d==="render"?"true":void 0});return lt&&!P?w.createElement(w.Fragment,null,Yt,w.createElement(cg,{page:X})):Yt});x0.displayName="Link";var mg=w.forwardRef(function({"aria-current":f="page",caseSensitive:d=!1,className:s="",end:h=!1,style:p,to:b,viewTransition:C,children:S,...v},A){let U=Hn(b,{relative:v.relative}),L=Zl(),V=w.useContext(iu),{navigator:Z,basename:P}=w.useContext(_e),k=V!=null&&Sg(U)&&C===!0,W=Z.encodeLocation?Z.encodeLocation(U).pathname:U.pathname,X=L.pathname,lt=V&&V.navigation&&V.navigation.location?V.navigation.location.pathname:null;d||(X=X.toLowerCase(),lt=lt?lt.toLowerCase():null,W=W.toLowerCase()),lt&&P&&(lt=Ie(lt,P)||lt);const jt=W!=="/"&&W.endsWith("/")?W.length-1:W.length;let tt=X===W||!h&&X.startsWith(W)&&X.charAt(jt)==="/",Ht=lt!=null&&(lt===W||!h&&lt.startsWith(W)&&lt.charAt(W.length)==="/"),Ot={isActive:tt,isPending:Ht,isTransitioning:k},Yt=tt?f:void 0,Tt;typeof s=="function"?Tt=s(Ot):Tt=[s,tt?"active":null,Ht?"pending":null,k?"transitioning":null].filter(Boolean).join(" ");let ae=typeof p=="function"?p(Ot):p;return w.createElement(x0,{...v,"aria-current":Yt,className:Tt,ref:A,style:ae,to:b,viewTransition:C},typeof S=="function"?S(Ot):S)});mg.displayName="NavLink";var hg=w.forwardRef(({discover:u="render",fetcherKey:f,navigate:d,reloadDocument:s,replace:h,state:p,method:b=tu,action:C,onSubmit:S,relative:v,preventScrollReset:A,viewTransition:U,...L},V)=>{let Z=xg(),P=bg(C,{relative:v}),k=b.toLowerCase()==="get"?"get":"post",W=typeof C=="string"&&y0.test(C),X=lt=>{if(S&&S(lt),lt.defaultPrevented)return;lt.preventDefault();let jt=lt.nativeEvent.submitter,tt=jt?.getAttribute("formmethod")||b;Z(jt||lt.currentTarget,{fetcherKey:f,method:tt,navigate:d,replace:h,state:p,relative:v,preventScrollReset:A,viewTransition:U})};return w.createElement("form",{ref:V,method:k,action:P,onSubmit:s?S:X,...L,"data-discover":!W&&u==="render"?"true":void 0})});hg.displayName="Form";function pg(u){return`${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function b0(u){let f=w.useContext(Na);return Ut(f,pg(u)),f}function gg(u,{target:f,replace:d,state:s,preventScrollReset:h,relative:p,viewTransition:b}={}){let C=R1(),S=Zl(),v=Hn(u,{relative:p});return w.useCallback(A=>{if(J1(A,f)){A.preventDefault();let U=d!==void 0?d:_n(S)===_n(v);C(u,{replace:U,state:s,preventScrollReset:h,relative:p,viewTransition:b})}},[S,C,v,d,s,f,u,h,p,b])}var vg=0,yg=()=>`__${String(++vg)}__`;function xg(){let{router:u}=b0("useSubmit"),{basename:f}=w.useContext(_e),d=L1();return w.useCallback(async(s,h={})=>{let{action:p,method:b,encType:C,formData:S,body:v}=F1(s,f);if(h.navigate===!1){let A=h.fetcherKey||yg();await u.fetch(A,d,h.action||p,{preventScrollReset:h.preventScrollReset,formData:S,body:v,formMethod:h.method||b,formEncType:h.encType||C,flushSync:h.flushSync})}else await u.navigate(h.action||p,{preventScrollReset:h.preventScrollReset,formData:S,body:v,formMethod:h.method||b,formEncType:h.encType||C,replace:h.replace,state:h.state,fromRouteId:d,flushSync:h.flushSync,viewTransition:h.viewTransition})},[u,f,d])}function bg(u,{relative:f}={}){let{basename:d}=w.useContext(_e),s=w.useContext(Pe);Ut(s,"useFormAction must be used inside a RouteContext");let[h]=s.matches.slice(-1),p={...Hn(u||".",{relative:f})},b=Zl();if(u==null){p.search=b.search;let C=new URLSearchParams(p.search),S=C.getAll("index");if(S.some(A=>A==="")){C.delete("index"),S.filter(U=>U).forEach(U=>C.append("index",U));let A=C.toString();p.search=A?`?${A}`:""}}return(!u||u===".")&&h.route.index&&(p.search=p.search?p.search.replace(/^\?/,"?index&"):"?index"),d!=="/"&&(p.pathname=p.pathname==="/"?d:Fe([d,p.pathname])),_n(p)}function Sg(u,{relative:f}={}){let d=w.useContext(f0);Ut(d!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=b0("useViewTransitionState"),h=Hn(u,{relative:f});if(!d.isTransitioning)return!1;let p=Ie(d.currentLocation.pathname,s)||d.currentLocation.pathname,b=Ie(d.nextLocation.pathname,s)||d.nextLocation.pathname;return nu(h.pathname,b)!=null||nu(h.pathname,p)!=null}Ph.createRoot(document.getElementById("root")).render(c.jsx(dg,{children:c.jsx(w.StrictMode,{children:c.jsx(Pp,{})})}));
