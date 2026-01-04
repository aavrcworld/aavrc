(function(){const f=document.createElement("link").relList;if(f&&f.supports&&f.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))s(m);new MutationObserver(m=>{for(const p of m)if(p.type==="childList")for(const b of p.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&s(b)}).observe(document,{childList:!0,subtree:!0});function d(m){const p={};return m.integrity&&(p.integrity=m.integrity),m.referrerPolicy&&(p.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?p.credentials="include":m.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function s(m){if(m.ep)return;m.ep=!0;const p=d(m);fetch(m.href,p)}})();function Lm(u){return u&&u.__esModule&&Object.prototype.hasOwnProperty.call(u,"default")?u.default:u}var Sc={exports:{}},Dn={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Md;function qm(){if(Md)return Dn;Md=1;var u=Symbol.for("react.transitional.element"),f=Symbol.for("react.fragment");function d(s,m,p){var b=null;if(p!==void 0&&(b=""+p),m.key!==void 0&&(b=""+m.key),"key"in m){p={};for(var w in m)w!=="key"&&(p[w]=m[w])}else p=m;return m=p.ref,{$$typeof:u,type:s,key:b,ref:m!==void 0?m:null,props:p}}return Dn.Fragment=f,Dn.jsx=d,Dn.jsxs=d,Dn}var Od;function km(){return Od||(Od=1,Sc.exports=qm()),Sc.exports}var c=km(),jc={exports:{}},ae={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nd;function Gm(){if(Nd)return ae;Nd=1;var u=Symbol.for("react.transitional.element"),f=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),b=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),U=Symbol.iterator;function L(g){return g===null||typeof g!="object"?null:(g=U&&g[U]||g["@@iterator"],typeof g=="function"?g:null)}var V={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Z=Object.assign,P={};function k(g,B,q){this.props=g,this.context=B,this.refs=P,this.updater=q||V}k.prototype.isReactComponent={},k.prototype.setState=function(g,B){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,B,"setState")},k.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function W(){}W.prototype=k.prototype;function X(g,B,q){this.props=g,this.context=B,this.refs=P,this.updater=q||V}var le=X.prototype=new W;le.constructor=X,Z(le,k.prototype),le.isPureReactComponent=!0;var je=Array.isArray,ee={H:null,A:null,T:null,S:null,V:null},_e=Object.prototype.hasOwnProperty;function Me(g,B,q,H,K,oe){return q=oe.ref,{$$typeof:u,type:g,key:B,ref:q!==void 0?q:null,props:oe}}function Ue(g,B){return Me(g.type,B,void 0,void 0,void 0,g.props)}function Ee(g){return typeof g=="object"&&g!==null&&g.$$typeof===u}function tt(g){var B={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(q){return B[q]})}var dt=/\/+/g;function Qe(g,B){return typeof g=="object"&&g!==null&&g.key!=null?tt(""+g.key):B.toString(36)}function zl(){}function El(g){switch(g.status){case"fulfilled":return g.value;case"rejected":throw g.reason;default:switch(typeof g.status=="string"?g.then(zl,zl):(g.status="pending",g.then(function(B){g.status==="pending"&&(g.status="fulfilled",g.value=B)},function(B){g.status==="pending"&&(g.status="rejected",g.reason=B)})),g.status){case"fulfilled":return g.value;case"rejected":throw g.reason}}throw g}function Ve(g,B,q,H,K){var oe=typeof g;(oe==="undefined"||oe==="boolean")&&(g=null);var te=!1;if(g===null)te=!0;else switch(oe){case"bigint":case"string":case"number":te=!0;break;case"object":switch(g.$$typeof){case u:case f:te=!0;break;case A:return te=g._init,Ve(te(g._payload),B,q,H,K)}}if(te)return K=K(g),te=H===""?"."+Qe(g,0):H,je(K)?(q="",te!=null&&(q=te.replace(dt,"$&/")+"/"),Ve(K,B,q,"",function(It){return It})):K!=null&&(Ee(K)&&(K=Ue(K,q+(K.key==null||g&&g.key===K.key?"":(""+K.key).replace(dt,"$&/")+"/")+te)),B.push(K)),1;te=0;var lt=H===""?".":H+":";if(je(g))for(var be=0;be<g.length;be++)H=g[be],oe=lt+Qe(H,be),te+=Ve(H,B,q,oe,K);else if(be=L(g),typeof be=="function")for(g=be.call(g),be=0;!(H=g.next()).done;)H=H.value,oe=lt+Qe(H,be++),te+=Ve(H,B,q,oe,K);else if(oe==="object"){if(typeof g.then=="function")return Ve(El(g),B,q,H,K);throw B=String(g),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.")}return te}function M(g,B,q){if(g==null)return g;var H=[],K=0;return Ve(g,H,"","",function(oe){return B.call(q,oe,K++)}),H}function Y(g){if(g._status===-1){var B=g._result;B=B(),B.then(function(q){(g._status===0||g._status===-1)&&(g._status=1,g._result=q)},function(q){(g._status===0||g._status===-1)&&(g._status=2,g._result=q)}),g._status===-1&&(g._status=0,g._result=B)}if(g._status===1)return g._result.default;throw g._result}var F=typeof reportError=="function"?reportError:function(g){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var B=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof g=="object"&&g!==null&&typeof g.message=="string"?String(g.message):String(g),error:g});if(!window.dispatchEvent(B))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",g);return}console.error(g)};function ve(){}return ae.Children={map:M,forEach:function(g,B,q){M(g,function(){B.apply(this,arguments)},q)},count:function(g){var B=0;return M(g,function(){B++}),B},toArray:function(g){return M(g,function(B){return B})||[]},only:function(g){if(!Ee(g))throw Error("React.Children.only expected to receive a single React element child.");return g}},ae.Component=k,ae.Fragment=d,ae.Profiler=m,ae.PureComponent=X,ae.StrictMode=s,ae.Suspense=S,ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ee,ae.__COMPILER_RUNTIME={__proto__:null,c:function(g){return ee.H.useMemoCache(g)}},ae.cache=function(g){return function(){return g.apply(null,arguments)}},ae.cloneElement=function(g,B,q){if(g==null)throw Error("The argument must be a React element, but you passed "+g+".");var H=Z({},g.props),K=g.key,oe=void 0;if(B!=null)for(te in B.ref!==void 0&&(oe=void 0),B.key!==void 0&&(K=""+B.key),B)!_e.call(B,te)||te==="key"||te==="__self"||te==="__source"||te==="ref"&&B.ref===void 0||(H[te]=B[te]);var te=arguments.length-2;if(te===1)H.children=q;else if(1<te){for(var lt=Array(te),be=0;be<te;be++)lt[be]=arguments[be+2];H.children=lt}return Me(g.type,K,void 0,void 0,oe,H)},ae.createContext=function(g){return g={$$typeof:b,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null},g.Provider=g,g.Consumer={$$typeof:p,_context:g},g},ae.createElement=function(g,B,q){var H,K={},oe=null;if(B!=null)for(H in B.key!==void 0&&(oe=""+B.key),B)_e.call(B,H)&&H!=="key"&&H!=="__self"&&H!=="__source"&&(K[H]=B[H]);var te=arguments.length-2;if(te===1)K.children=q;else if(1<te){for(var lt=Array(te),be=0;be<te;be++)lt[be]=arguments[be+2];K.children=lt}if(g&&g.defaultProps)for(H in te=g.defaultProps,te)K[H]===void 0&&(K[H]=te[H]);return Me(g,oe,void 0,void 0,null,K)},ae.createRef=function(){return{current:null}},ae.forwardRef=function(g){return{$$typeof:w,render:g}},ae.isValidElement=Ee,ae.lazy=function(g){return{$$typeof:A,_payload:{_status:-1,_result:g},_init:Y}},ae.memo=function(g,B){return{$$typeof:v,type:g,compare:B===void 0?null:B}},ae.startTransition=function(g){var B=ee.T,q={};ee.T=q;try{var H=g(),K=ee.S;K!==null&&K(q,H),typeof H=="object"&&H!==null&&typeof H.then=="function"&&H.then(ve,F)}catch(oe){F(oe)}finally{ee.T=B}},ae.unstable_useCacheRefresh=function(){return ee.H.useCacheRefresh()},ae.use=function(g){return ee.H.use(g)},ae.useActionState=function(g,B,q){return ee.H.useActionState(g,B,q)},ae.useCallback=function(g,B){return ee.H.useCallback(g,B)},ae.useContext=function(g){return ee.H.useContext(g)},ae.useDebugValue=function(){},ae.useDeferredValue=function(g,B){return ee.H.useDeferredValue(g,B)},ae.useEffect=function(g,B,q){var H=ee.H;if(typeof q=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return H.useEffect(g,B)},ae.useId=function(){return ee.H.useId()},ae.useImperativeHandle=function(g,B,q){return ee.H.useImperativeHandle(g,B,q)},ae.useInsertionEffect=function(g,B){return ee.H.useInsertionEffect(g,B)},ae.useLayoutEffect=function(g,B){return ee.H.useLayoutEffect(g,B)},ae.useMemo=function(g,B){return ee.H.useMemo(g,B)},ae.useOptimistic=function(g,B){return ee.H.useOptimistic(g,B)},ae.useReducer=function(g,B,q){return ee.H.useReducer(g,B,q)},ae.useRef=function(g){return ee.H.useRef(g)},ae.useState=function(g){return ee.H.useState(g)},ae.useSyncExternalStore=function(g,B,q){return ee.H.useSyncExternalStore(g,B,q)},ae.useTransition=function(){return ee.H.useTransition()},ae.version="19.1.1",ae}var Bd;function Mc(){return Bd||(Bd=1,jc.exports=Gm()),jc.exports}var R=Mc();const Xl=Lm(R);var zc={exports:{}},Mn={},Ec={exports:{}},Tc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _d;function Xm(){return _d||(_d=1,(function(u){function f(M,Y){var F=M.length;M.push(Y);e:for(;0<F;){var ve=F-1>>>1,g=M[ve];if(0<m(g,Y))M[ve]=Y,M[F]=g,F=ve;else break e}}function d(M){return M.length===0?null:M[0]}function s(M){if(M.length===0)return null;var Y=M[0],F=M.pop();if(F!==Y){M[0]=F;e:for(var ve=0,g=M.length,B=g>>>1;ve<B;){var q=2*(ve+1)-1,H=M[q],K=q+1,oe=M[K];if(0>m(H,F))K<g&&0>m(oe,H)?(M[ve]=oe,M[K]=F,ve=K):(M[ve]=H,M[q]=F,ve=q);else if(K<g&&0>m(oe,F))M[ve]=oe,M[K]=F,ve=K;else break e}}return Y}function m(M,Y){var F=M.sortIndex-Y.sortIndex;return F!==0?F:M.id-Y.id}if(u.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;u.unstable_now=function(){return p.now()}}else{var b=Date,w=b.now();u.unstable_now=function(){return b.now()-w}}var S=[],v=[],A=1,U=null,L=3,V=!1,Z=!1,P=!1,k=!1,W=typeof setTimeout=="function"?setTimeout:null,X=typeof clearTimeout=="function"?clearTimeout:null,le=typeof setImmediate<"u"?setImmediate:null;function je(M){for(var Y=d(v);Y!==null;){if(Y.callback===null)s(v);else if(Y.startTime<=M)s(v),Y.sortIndex=Y.expirationTime,f(S,Y);else break;Y=d(v)}}function ee(M){if(P=!1,je(M),!Z)if(d(S)!==null)Z=!0,_e||(_e=!0,Qe());else{var Y=d(v);Y!==null&&Ve(ee,Y.startTime-M)}}var _e=!1,Me=-1,Ue=5,Ee=-1;function tt(){return k?!0:!(u.unstable_now()-Ee<Ue)}function dt(){if(k=!1,_e){var M=u.unstable_now();Ee=M;var Y=!0;try{e:{Z=!1,P&&(P=!1,X(Me),Me=-1),V=!0;var F=L;try{t:{for(je(M),U=d(S);U!==null&&!(U.expirationTime>M&&tt());){var ve=U.callback;if(typeof ve=="function"){U.callback=null,L=U.priorityLevel;var g=ve(U.expirationTime<=M);if(M=u.unstable_now(),typeof g=="function"){U.callback=g,je(M),Y=!0;break t}U===d(S)&&s(S),je(M)}else s(S);U=d(S)}if(U!==null)Y=!0;else{var B=d(v);B!==null&&Ve(ee,B.startTime-M),Y=!1}}break e}finally{U=null,L=F,V=!1}Y=void 0}}finally{Y?Qe():_e=!1}}}var Qe;if(typeof le=="function")Qe=function(){le(dt)};else if(typeof MessageChannel<"u"){var zl=new MessageChannel,El=zl.port2;zl.port1.onmessage=dt,Qe=function(){El.postMessage(null)}}else Qe=function(){W(dt,0)};function Ve(M,Y){Me=W(function(){M(u.unstable_now())},Y)}u.unstable_IdlePriority=5,u.unstable_ImmediatePriority=1,u.unstable_LowPriority=4,u.unstable_NormalPriority=3,u.unstable_Profiling=null,u.unstable_UserBlockingPriority=2,u.unstable_cancelCallback=function(M){M.callback=null},u.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ue=0<M?Math.floor(1e3/M):5},u.unstable_getCurrentPriorityLevel=function(){return L},u.unstable_next=function(M){switch(L){case 1:case 2:case 3:var Y=3;break;default:Y=L}var F=L;L=Y;try{return M()}finally{L=F}},u.unstable_requestPaint=function(){k=!0},u.unstable_runWithPriority=function(M,Y){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var F=L;L=M;try{return Y()}finally{L=F}},u.unstable_scheduleCallback=function(M,Y,F){var ve=u.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?ve+F:ve):F=ve,M){case 1:var g=-1;break;case 2:g=250;break;case 5:g=1073741823;break;case 4:g=1e4;break;default:g=5e3}return g=F+g,M={id:A++,callback:Y,priorityLevel:M,startTime:F,expirationTime:g,sortIndex:-1},F>ve?(M.sortIndex=F,f(v,M),d(S)===null&&M===d(v)&&(P?(X(Me),Me=-1):P=!0,Ve(ee,F-ve))):(M.sortIndex=g,f(S,M),Z||V||(Z=!0,_e||(_e=!0,Qe()))),M},u.unstable_shouldYield=tt,u.unstable_wrapCallback=function(M){var Y=L;return function(){var F=L;L=Y;try{return M.apply(this,arguments)}finally{L=F}}}})(Tc)),Tc}var Ud;function Qm(){return Ud||(Ud=1,Ec.exports=Xm()),Ec.exports}var Ac={exports:{}},Je={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hd;function Vm(){if(Hd)return Je;Hd=1;var u=Mc();function f(S){var v="https://react.dev/errors/"+S;if(1<arguments.length){v+="?args[]="+encodeURIComponent(arguments[1]);for(var A=2;A<arguments.length;A++)v+="&args[]="+encodeURIComponent(arguments[A])}return"Minified React error #"+S+"; visit "+v+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(){}var s={d:{f:d,r:function(){throw Error(f(522))},D:d,C:d,L:d,m:d,X:d,S:d,M:d},p:0,findDOMNode:null},m=Symbol.for("react.portal");function p(S,v,A){var U=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:m,key:U==null?null:""+U,children:S,containerInfo:v,implementation:A}}var b=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function w(S,v){if(S==="font")return"";if(typeof v=="string")return v==="use-credentials"?v:""}return Je.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Je.createPortal=function(S,v){var A=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v||v.nodeType!==1&&v.nodeType!==9&&v.nodeType!==11)throw Error(f(299));return p(S,v,null,A)},Je.flushSync=function(S){var v=b.T,A=s.p;try{if(b.T=null,s.p=2,S)return S()}finally{b.T=v,s.p=A,s.d.f()}},Je.preconnect=function(S,v){typeof S=="string"&&(v?(v=v.crossOrigin,v=typeof v=="string"?v==="use-credentials"?v:"":void 0):v=null,s.d.C(S,v))},Je.prefetchDNS=function(S){typeof S=="string"&&s.d.D(S)},Je.preinit=function(S,v){if(typeof S=="string"&&v&&typeof v.as=="string"){var A=v.as,U=w(A,v.crossOrigin),L=typeof v.integrity=="string"?v.integrity:void 0,V=typeof v.fetchPriority=="string"?v.fetchPriority:void 0;A==="style"?s.d.S(S,typeof v.precedence=="string"?v.precedence:void 0,{crossOrigin:U,integrity:L,fetchPriority:V}):A==="script"&&s.d.X(S,{crossOrigin:U,integrity:L,fetchPriority:V,nonce:typeof v.nonce=="string"?v.nonce:void 0})}},Je.preinitModule=function(S,v){if(typeof S=="string")if(typeof v=="object"&&v!==null){if(v.as==null||v.as==="script"){var A=w(v.as,v.crossOrigin);s.d.M(S,{crossOrigin:A,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0})}}else v==null&&s.d.M(S)},Je.preload=function(S,v){if(typeof S=="string"&&typeof v=="object"&&v!==null&&typeof v.as=="string"){var A=v.as,U=w(A,v.crossOrigin);s.d.L(S,A,{crossOrigin:U,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,type:typeof v.type=="string"?v.type:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0,referrerPolicy:typeof v.referrerPolicy=="string"?v.referrerPolicy:void 0,imageSrcSet:typeof v.imageSrcSet=="string"?v.imageSrcSet:void 0,imageSizes:typeof v.imageSizes=="string"?v.imageSizes:void 0,media:typeof v.media=="string"?v.media:void 0})}},Je.preloadModule=function(S,v){if(typeof S=="string")if(v){var A=w(v.as,v.crossOrigin);s.d.m(S,{as:typeof v.as=="string"&&v.as!=="script"?v.as:void 0,crossOrigin:A,integrity:typeof v.integrity=="string"?v.integrity:void 0})}else s.d.m(S)},Je.requestFormReset=function(S){s.d.r(S)},Je.unstable_batchedUpdates=function(S,v){return S(v)},Je.useFormState=function(S,v,A){return b.H.useFormState(S,v,A)},Je.useFormStatus=function(){return b.H.useHostTransitionStatus()},Je.version="19.1.1",Je}var Yd;function Zm(){if(Yd)return Ac.exports;Yd=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(f){console.error(f)}}return u(),Ac.exports=Vm(),Ac.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ld;function Km(){if(Ld)return Mn;Ld=1;var u=Qm(),f=Mc(),d=Zm();function s(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)t+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function m(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function p(e){var t=e,l=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(l=t.return),e=t.return;while(e)}return t.tag===3?l:null}function b(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function w(e){if(p(e)!==e)throw Error(s(188))}function S(e){var t=e.alternate;if(!t){if(t=p(e),t===null)throw Error(s(188));return t!==e?null:e}for(var l=e,a=t;;){var n=l.return;if(n===null)break;var i=n.alternate;if(i===null){if(a=n.return,a!==null){l=a;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===l)return w(n),e;if(i===a)return w(n),t;i=i.sibling}throw Error(s(188))}if(l.return!==a.return)l=n,a=i;else{for(var r=!1,o=n.child;o;){if(o===l){r=!0,l=n,a=i;break}if(o===a){r=!0,a=n,l=i;break}o=o.sibling}if(!r){for(o=i.child;o;){if(o===l){r=!0,l=i,a=n;break}if(o===a){r=!0,a=i,l=n;break}o=o.sibling}if(!r)throw Error(s(189))}}if(l.alternate!==a)throw Error(s(190))}if(l.tag!==3)throw Error(s(188));return l.stateNode.current===l?e:t}function v(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=v(e),t!==null)return t;e=e.sibling}return null}var A=Object.assign,U=Symbol.for("react.element"),L=Symbol.for("react.transitional.element"),V=Symbol.for("react.portal"),Z=Symbol.for("react.fragment"),P=Symbol.for("react.strict_mode"),k=Symbol.for("react.profiler"),W=Symbol.for("react.provider"),X=Symbol.for("react.consumer"),le=Symbol.for("react.context"),je=Symbol.for("react.forward_ref"),ee=Symbol.for("react.suspense"),_e=Symbol.for("react.suspense_list"),Me=Symbol.for("react.memo"),Ue=Symbol.for("react.lazy"),Ee=Symbol.for("react.activity"),tt=Symbol.for("react.memo_cache_sentinel"),dt=Symbol.iterator;function Qe(e){return e===null||typeof e!="object"?null:(e=dt&&e[dt]||e["@@iterator"],typeof e=="function"?e:null)}var zl=Symbol.for("react.client.reference");function El(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===zl?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Z:return"Fragment";case k:return"Profiler";case P:return"StrictMode";case ee:return"Suspense";case _e:return"SuspenseList";case Ee:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case V:return"Portal";case le:return(e.displayName||"Context")+".Provider";case X:return(e._context.displayName||"Context")+".Consumer";case je:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Me:return t=e.displayName||null,t!==null?t:El(e.type)||"Memo";case Ue:t=e._payload,e=e._init;try{return El(e(t))}catch{}}return null}var Ve=Array.isArray,M=f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F={pending:!1,data:null,method:null,action:null},ve=[],g=-1;function B(e){return{current:e}}function q(e){0>g||(e.current=ve[g],ve[g]=null,g--)}function H(e,t){g++,ve[g]=e.current,e.current=t}var K=B(null),oe=B(null),te=B(null),lt=B(null);function be(e,t){switch(H(te,t),H(oe,e),H(K,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?id(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=id(t),e=ud(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}q(K),H(K,e)}function It(){q(K),q(oe),q(te)}function uu(e){e.memoizedState!==null&&H(lt,e);var t=K.current,l=ud(t,e.type);t!==l&&(H(oe,e),H(K,l))}function Un(e){oe.current===e&&(q(K),q(oe)),lt.current===e&&(q(lt),Tn._currentValue=F)}var ru=Object.prototype.hasOwnProperty,cu=u.unstable_scheduleCallback,ou=u.unstable_cancelCallback,v0=u.unstable_shouldYield,x0=u.unstable_requestPaint,wt=u.unstable_now,y0=u.unstable_getCurrentPriorityLevel,Hc=u.unstable_ImmediatePriority,Yc=u.unstable_UserBlockingPriority,Hn=u.unstable_NormalPriority,b0=u.unstable_LowPriority,Lc=u.unstable_IdlePriority,S0=u.log,j0=u.unstable_setDisableYieldValue,Oa=null,at=null;function Pt(e){if(typeof S0=="function"&&j0(e),at&&typeof at.setStrictMode=="function")try{at.setStrictMode(Oa,e)}catch{}}var nt=Math.clz32?Math.clz32:T0,z0=Math.log,E0=Math.LN2;function T0(e){return e>>>=0,e===0?32:31-(z0(e)/E0|0)|0}var Yn=256,Ln=4194304;function Tl(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function qn(e,t,l){var a=e.pendingLanes;if(a===0)return 0;var n=0,i=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=a&134217727;return o!==0?(a=o&~i,a!==0?n=Tl(a):(r&=o,r!==0?n=Tl(r):l||(l=o&~e,l!==0&&(n=Tl(l))))):(o=a&~i,o!==0?n=Tl(o):r!==0?n=Tl(r):l||(l=a&~e,l!==0&&(n=Tl(l)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,l=t&-t,i>=l||i===32&&(l&4194048)!==0)?t:n}function Na(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function A0(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qc(){var e=Yn;return Yn<<=1,(Yn&4194048)===0&&(Yn=256),e}function kc(){var e=Ln;return Ln<<=1,(Ln&62914560)===0&&(Ln=4194304),e}function su(e){for(var t=[],l=0;31>l;l++)t.push(e);return t}function Ba(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function w0(e,t,l,a,n,i){var r=e.pendingLanes;e.pendingLanes=l,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=l,e.entangledLanes&=l,e.errorRecoveryDisabledLanes&=l,e.shellSuspendCounter=0;var o=e.entanglements,h=e.expirationTimes,z=e.hiddenUpdates;for(l=r&~l;0<l;){var D=31-nt(l),N=1<<D;o[D]=0,h[D]=-1;var E=z[D];if(E!==null)for(z[D]=null,D=0;D<E.length;D++){var T=E[D];T!==null&&(T.lane&=-536870913)}l&=~N}a!==0&&Gc(e,a,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(r&~t))}function Gc(e,t,l){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-nt(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|l&4194090}function Xc(e,t){var l=e.entangledLanes|=t;for(e=e.entanglements;l;){var a=31-nt(l),n=1<<a;n&t|e[a]&t&&(e[a]|=t),l&=~n}}function fu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function du(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Qc(){var e=Y.p;return e!==0?e:(e=window.event,e===void 0?32:Td(e.type))}function C0(e,t){var l=Y.p;try{return Y.p=e,t()}finally{Y.p=l}}var el=Math.random().toString(36).slice(2),Ze="__reactFiber$"+el,$e="__reactProps$"+el,Vl="__reactContainer$"+el,hu="__reactEvents$"+el,R0="__reactListeners$"+el,D0="__reactHandles$"+el,Vc="__reactResources$"+el,_a="__reactMarker$"+el;function mu(e){delete e[Ze],delete e[$e],delete e[hu],delete e[R0],delete e[D0]}function Zl(e){var t=e[Ze];if(t)return t;for(var l=e.parentNode;l;){if(t=l[Vl]||l[Ze]){if(l=t.alternate,t.child!==null||l!==null&&l.child!==null)for(e=sd(e);e!==null;){if(l=e[Ze])return l;e=sd(e)}return t}e=l,l=e.parentNode}return null}function Kl(e){if(e=e[Ze]||e[Vl]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function Ua(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function Jl(e){var t=e[Vc];return t||(t=e[Vc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function He(e){e[_a]=!0}var Zc=new Set,Kc={};function Al(e,t){Wl(e,t),Wl(e+"Capture",t)}function Wl(e,t){for(Kc[e]=t,e=0;e<t.length;e++)Zc.add(t[e])}var M0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Jc={},Wc={};function O0(e){return ru.call(Wc,e)?!0:ru.call(Jc,e)?!1:M0.test(e)?Wc[e]=!0:(Jc[e]=!0,!1)}function kn(e,t,l){if(O0(t))if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+l)}}function Gn(e,t,l){if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+l)}}function Bt(e,t,l,a){if(a===null)e.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(l);return}e.setAttributeNS(t,l,""+a)}}var pu,$c;function $l(e){if(pu===void 0)try{throw Error()}catch(l){var t=l.stack.trim().match(/\n( *(at )?)/);pu=t&&t[1]||"",$c=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+pu+e+$c}var gu=!1;function vu(e,t){if(!e||gu)return"";gu=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var N=function(){throw Error()};if(Object.defineProperty(N.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(N,[])}catch(T){var E=T}Reflect.construct(e,[],N)}else{try{N.call()}catch(T){E=T}e.call(N.prototype)}}else{try{throw Error()}catch(T){E=T}(N=e())&&typeof N.catch=="function"&&N.catch(function(){})}}catch(T){if(T&&E&&typeof T.stack=="string")return[T.stack,E.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),r=i[0],o=i[1];if(r&&o){var h=r.split(`
`),z=o.split(`
`);for(n=a=0;a<h.length&&!h[a].includes("DetermineComponentFrameRoot");)a++;for(;n<z.length&&!z[n].includes("DetermineComponentFrameRoot");)n++;if(a===h.length||n===z.length)for(a=h.length-1,n=z.length-1;1<=a&&0<=n&&h[a]!==z[n];)n--;for(;1<=a&&0<=n;a--,n--)if(h[a]!==z[n]){if(a!==1||n!==1)do if(a--,n--,0>n||h[a]!==z[n]){var D=`
`+h[a].replace(" at new "," at ");return e.displayName&&D.includes("<anonymous>")&&(D=D.replace("<anonymous>",e.displayName)),D}while(1<=a&&0<=n);break}}}finally{gu=!1,Error.prepareStackTrace=l}return(l=e?e.displayName||e.name:"")?$l(l):""}function N0(e){switch(e.tag){case 26:case 27:case 5:return $l(e.type);case 16:return $l("Lazy");case 13:return $l("Suspense");case 19:return $l("SuspenseList");case 0:case 15:return vu(e.type,!1);case 11:return vu(e.type.render,!1);case 1:return vu(e.type,!0);case 31:return $l("Activity");default:return""}}function Fc(e){try{var t="";do t+=N0(e),e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}function ht(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ic(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function B0(e){var t=Ic(e)?"checked":"value",l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(r){a=""+r,i.call(this,r)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(r){a=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Xn(e){e._valueTracker||(e._valueTracker=B0(e))}function Pc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var l=t.getValue(),a="";return e&&(a=Ic(e)?e.checked?"true":"false":e.value),e=a,e!==l?(t.setValue(e),!0):!1}function Qn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var _0=/[\n"\\]/g;function mt(e){return e.replace(_0,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function xu(e,t,l,a,n,i,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+ht(t)):e.value!==""+ht(t)&&(e.value=""+ht(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?yu(e,r,ht(t)):l!=null?yu(e,r,ht(l)):a!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+ht(o):e.removeAttribute("name")}function eo(e,t,l,a,n,i,r,o){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||l!=null){if(!(i!=="submit"&&i!=="reset"||t!=null))return;l=l!=null?""+ht(l):"",t=t!=null?""+ht(t):l,o||t===e.value||(e.value=t),e.defaultValue=t}a=a??n,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=o?e.checked:!!a,e.defaultChecked=!!a,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r)}function yu(e,t,l){t==="number"&&Qn(e.ownerDocument)===e||e.defaultValue===""+l||(e.defaultValue=""+l)}function Fl(e,t,l,a){if(e=e.options,t){t={};for(var n=0;n<l.length;n++)t["$"+l[n]]=!0;for(l=0;l<e.length;l++)n=t.hasOwnProperty("$"+e[l].value),e[l].selected!==n&&(e[l].selected=n),n&&a&&(e[l].defaultSelected=!0)}else{for(l=""+ht(l),t=null,n=0;n<e.length;n++){if(e[n].value===l){e[n].selected=!0,a&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function to(e,t,l){if(t!=null&&(t=""+ht(t),t!==e.value&&(e.value=t),l==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=l!=null?""+ht(l):""}function lo(e,t,l,a){if(t==null){if(a!=null){if(l!=null)throw Error(s(92));if(Ve(a)){if(1<a.length)throw Error(s(93));a=a[0]}l=a}l==null&&(l=""),t=l}l=ht(t),e.defaultValue=l,a=e.textContent,a===l&&a!==""&&a!==null&&(e.value=a)}function Il(e,t){if(t){var l=e.firstChild;if(l&&l===e.lastChild&&l.nodeType===3){l.nodeValue=t;return}}e.textContent=t}var U0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ao(e,t,l){var a=t.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,l):typeof l!="number"||l===0||U0.has(t)?t==="float"?e.cssFloat=l:e[t]=(""+l).trim():e[t]=l+"px"}function no(e,t,l){if(t!=null&&typeof t!="object")throw Error(s(62));if(e=e.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var n in t)a=t[n],t.hasOwnProperty(n)&&l[n]!==a&&ao(e,n,a)}else for(var i in t)t.hasOwnProperty(i)&&ao(e,i,t[i])}function bu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var H0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Y0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Vn(e){return Y0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Su=null;function ju(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Pl=null,ea=null;function io(e){var t=Kl(e);if(t&&(e=t.stateNode)){var l=e[$e]||null;e:switch(e=t.stateNode,t.type){case"input":if(xu(e,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),t=l.name,l.type==="radio"&&t!=null){for(l=e;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+mt(""+t)+'"][type="radio"]'),t=0;t<l.length;t++){var a=l[t];if(a!==e&&a.form===e.form){var n=a[$e]||null;if(!n)throw Error(s(90));xu(a,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<l.length;t++)a=l[t],a.form===e.form&&Pc(a)}break e;case"textarea":to(e,l.value,l.defaultValue);break e;case"select":t=l.value,t!=null&&Fl(e,!!l.multiple,t,!1)}}}var zu=!1;function uo(e,t,l){if(zu)return e(t,l);zu=!0;try{var a=e(t);return a}finally{if(zu=!1,(Pl!==null||ea!==null)&&(Di(),Pl&&(t=Pl,e=ea,ea=Pl=null,io(t),e)))for(t=0;t<e.length;t++)io(e[t])}}function Ha(e,t){var l=e.stateNode;if(l===null)return null;var a=l[$e]||null;if(a===null)return null;l=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(l&&typeof l!="function")throw Error(s(231,t,typeof l));return l}var _t=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Eu=!1;if(_t)try{var Ya={};Object.defineProperty(Ya,"passive",{get:function(){Eu=!0}}),window.addEventListener("test",Ya,Ya),window.removeEventListener("test",Ya,Ya)}catch{Eu=!1}var tl=null,Tu=null,Zn=null;function ro(){if(Zn)return Zn;var e,t=Tu,l=t.length,a,n="value"in tl?tl.value:tl.textContent,i=n.length;for(e=0;e<l&&t[e]===n[e];e++);var r=l-e;for(a=1;a<=r&&t[l-a]===n[i-a];a++);return Zn=n.slice(e,1<a?1-a:void 0)}function Kn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Jn(){return!0}function co(){return!1}function Fe(e){function t(l,a,n,i,r){this._reactName=l,this._targetInst=n,this.type=a,this.nativeEvent=i,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(l=e[o],this[o]=l?l(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Jn:co,this.isPropagationStopped=co,this}return A(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Jn)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Jn)},persist:function(){},isPersistent:Jn}),t}var wl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wn=Fe(wl),La=A({},wl,{view:0,detail:0}),L0=Fe(La),Au,wu,qa,$n=A({},La,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ru,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==qa&&(qa&&e.type==="mousemove"?(Au=e.screenX-qa.screenX,wu=e.screenY-qa.screenY):wu=Au=0,qa=e),Au)},movementY:function(e){return"movementY"in e?e.movementY:wu}}),oo=Fe($n),q0=A({},$n,{dataTransfer:0}),k0=Fe(q0),G0=A({},La,{relatedTarget:0}),Cu=Fe(G0),X0=A({},wl,{animationName:0,elapsedTime:0,pseudoElement:0}),Q0=Fe(X0),V0=A({},wl,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Z0=Fe(V0),K0=A({},wl,{data:0}),so=Fe(K0),J0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},W0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function F0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=$0[e])?!!t[e]:!1}function Ru(){return F0}var I0=A({},La,{key:function(e){if(e.key){var t=J0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Kn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?W0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ru,charCode:function(e){return e.type==="keypress"?Kn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Kn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),P0=Fe(I0),eh=A({},$n,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fo=Fe(eh),th=A({},La,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ru}),lh=Fe(th),ah=A({},wl,{propertyName:0,elapsedTime:0,pseudoElement:0}),nh=Fe(ah),ih=A({},$n,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),uh=Fe(ih),rh=A({},wl,{newState:0,oldState:0}),ch=Fe(rh),oh=[9,13,27,32],Du=_t&&"CompositionEvent"in window,ka=null;_t&&"documentMode"in document&&(ka=document.documentMode);var sh=_t&&"TextEvent"in window&&!ka,ho=_t&&(!Du||ka&&8<ka&&11>=ka),mo=" ",po=!1;function go(e,t){switch(e){case"keyup":return oh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vo(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ta=!1;function fh(e,t){switch(e){case"compositionend":return vo(t);case"keypress":return t.which!==32?null:(po=!0,mo);case"textInput":return e=t.data,e===mo&&po?null:e;default:return null}}function dh(e,t){if(ta)return e==="compositionend"||!Du&&go(e,t)?(e=ro(),Zn=Tu=tl=null,ta=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ho&&t.locale!=="ko"?null:t.data;default:return null}}var hh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!hh[e.type]:t==="textarea"}function yo(e,t,l,a){Pl?ea?ea.push(a):ea=[a]:Pl=a,t=Ui(t,"onChange"),0<t.length&&(l=new Wn("onChange","change",null,l,a),e.push({event:l,listeners:t}))}var Ga=null,Xa=null;function mh(e){ed(e,0)}function Fn(e){var t=Ua(e);if(Pc(t))return e}function bo(e,t){if(e==="change")return t}var So=!1;if(_t){var Mu;if(_t){var Ou="oninput"in document;if(!Ou){var jo=document.createElement("div");jo.setAttribute("oninput","return;"),Ou=typeof jo.oninput=="function"}Mu=Ou}else Mu=!1;So=Mu&&(!document.documentMode||9<document.documentMode)}function zo(){Ga&&(Ga.detachEvent("onpropertychange",Eo),Xa=Ga=null)}function Eo(e){if(e.propertyName==="value"&&Fn(Xa)){var t=[];yo(t,Xa,e,ju(e)),uo(mh,t)}}function ph(e,t,l){e==="focusin"?(zo(),Ga=t,Xa=l,Ga.attachEvent("onpropertychange",Eo)):e==="focusout"&&zo()}function gh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Fn(Xa)}function vh(e,t){if(e==="click")return Fn(t)}function xh(e,t){if(e==="input"||e==="change")return Fn(t)}function yh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var it=typeof Object.is=="function"?Object.is:yh;function Qa(e,t){if(it(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var l=Object.keys(e),a=Object.keys(t);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var n=l[a];if(!ru.call(t,n)||!it(e[n],t[n]))return!1}return!0}function To(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ao(e,t){var l=To(e);e=0;for(var a;l;){if(l.nodeType===3){if(a=e+l.textContent.length,e<=t&&a>=t)return{node:l,offset:t-e};e=a}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=To(l)}}function wo(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?wo(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Co(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Qn(e.document);t instanceof e.HTMLIFrameElement;){try{var l=typeof t.contentWindow.location.href=="string"}catch{l=!1}if(l)e=t.contentWindow;else break;t=Qn(e.document)}return t}function Nu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var bh=_t&&"documentMode"in document&&11>=document.documentMode,la=null,Bu=null,Va=null,_u=!1;function Ro(e,t,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;_u||la==null||la!==Qn(a)||(a=la,"selectionStart"in a&&Nu(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Va&&Qa(Va,a)||(Va=a,a=Ui(Bu,"onSelect"),0<a.length&&(t=new Wn("onSelect","select",null,t,l),e.push({event:t,listeners:a}),t.target=la)))}function Cl(e,t){var l={};return l[e.toLowerCase()]=t.toLowerCase(),l["Webkit"+e]="webkit"+t,l["Moz"+e]="moz"+t,l}var aa={animationend:Cl("Animation","AnimationEnd"),animationiteration:Cl("Animation","AnimationIteration"),animationstart:Cl("Animation","AnimationStart"),transitionrun:Cl("Transition","TransitionRun"),transitionstart:Cl("Transition","TransitionStart"),transitioncancel:Cl("Transition","TransitionCancel"),transitionend:Cl("Transition","TransitionEnd")},Uu={},Do={};_t&&(Do=document.createElement("div").style,"AnimationEvent"in window||(delete aa.animationend.animation,delete aa.animationiteration.animation,delete aa.animationstart.animation),"TransitionEvent"in window||delete aa.transitionend.transition);function Rl(e){if(Uu[e])return Uu[e];if(!aa[e])return e;var t=aa[e],l;for(l in t)if(t.hasOwnProperty(l)&&l in Do)return Uu[e]=t[l];return e}var Mo=Rl("animationend"),Oo=Rl("animationiteration"),No=Rl("animationstart"),Sh=Rl("transitionrun"),jh=Rl("transitionstart"),zh=Rl("transitioncancel"),Bo=Rl("transitionend"),_o=new Map,Hu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Hu.push("scrollEnd");function jt(e,t){_o.set(e,t),Al(t,[e])}var Uo=new WeakMap;function pt(e,t){if(typeof e=="object"&&e!==null){var l=Uo.get(e);return l!==void 0?l:(t={value:e,source:t,stack:Fc(t)},Uo.set(e,t),t)}return{value:e,source:t,stack:Fc(t)}}var gt=[],na=0,Yu=0;function In(){for(var e=na,t=Yu=na=0;t<e;){var l=gt[t];gt[t++]=null;var a=gt[t];gt[t++]=null;var n=gt[t];gt[t++]=null;var i=gt[t];if(gt[t++]=null,a!==null&&n!==null){var r=a.pending;r===null?n.next=n:(n.next=r.next,r.next=n),a.pending=n}i!==0&&Ho(l,n,i)}}function Pn(e,t,l,a){gt[na++]=e,gt[na++]=t,gt[na++]=l,gt[na++]=a,Yu|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Lu(e,t,l,a){return Pn(e,t,l,a),ei(e)}function ia(e,t){return Pn(e,null,null,t),ei(e)}function Ho(e,t,l){e.lanes|=l;var a=e.alternate;a!==null&&(a.lanes|=l);for(var n=!1,i=e.return;i!==null;)i.childLanes|=l,a=i.alternate,a!==null&&(a.childLanes|=l),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-nt(l),e=i.hiddenUpdates,a=e[n],a===null?e[n]=[t]:a.push(t),t.lane=l|536870912),i):null}function ei(e){if(50<vn)throw vn=0,Vr=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ua={};function Eh(e,t,l,a){this.tag=e,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ut(e,t,l,a){return new Eh(e,t,l,a)}function qu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ut(e,t){var l=e.alternate;return l===null?(l=ut(e.tag,t,e.key,e.mode),l.elementType=e.elementType,l.type=e.type,l.stateNode=e.stateNode,l.alternate=e,e.alternate=l):(l.pendingProps=t,l.type=e.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=e.flags&65011712,l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,t=e.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},l.sibling=e.sibling,l.index=e.index,l.ref=e.ref,l.refCleanup=e.refCleanup,l}function Yo(e,t){e.flags&=65011714;var l=e.alternate;return l===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=l.childLanes,e.lanes=l.lanes,e.child=l.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=l.memoizedProps,e.memoizedState=l.memoizedState,e.updateQueue=l.updateQueue,e.type=l.type,t=l.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ti(e,t,l,a,n,i){var r=0;if(a=e,typeof e=="function")qu(e)&&(r=1);else if(typeof e=="string")r=Am(e,l,K.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ee:return e=ut(31,l,t,n),e.elementType=Ee,e.lanes=i,e;case Z:return Dl(l.children,n,i,t);case P:r=8,n|=24;break;case k:return e=ut(12,l,t,n|2),e.elementType=k,e.lanes=i,e;case ee:return e=ut(13,l,t,n),e.elementType=ee,e.lanes=i,e;case _e:return e=ut(19,l,t,n),e.elementType=_e,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case W:case le:r=10;break e;case X:r=9;break e;case je:r=11;break e;case Me:r=14;break e;case Ue:r=16,a=null;break e}r=29,l=Error(s(130,e===null?"null":typeof e,"")),a=null}return t=ut(r,l,t,n),t.elementType=e,t.type=a,t.lanes=i,t}function Dl(e,t,l,a){return e=ut(7,e,a,t),e.lanes=l,e}function ku(e,t,l){return e=ut(6,e,null,t),e.lanes=l,e}function Gu(e,t,l){return t=ut(4,e.children!==null?e.children:[],e.key,t),t.lanes=l,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var ra=[],ca=0,li=null,ai=0,vt=[],xt=0,Ml=null,Ht=1,Yt="";function Ol(e,t){ra[ca++]=ai,ra[ca++]=li,li=e,ai=t}function Lo(e,t,l){vt[xt++]=Ht,vt[xt++]=Yt,vt[xt++]=Ml,Ml=e;var a=Ht;e=Yt;var n=32-nt(a)-1;a&=~(1<<n),l+=1;var i=32-nt(t)+n;if(30<i){var r=n-n%5;i=(a&(1<<r)-1).toString(32),a>>=r,n-=r,Ht=1<<32-nt(t)+n|l<<n|a,Yt=i+e}else Ht=1<<i|l<<n|a,Yt=e}function Xu(e){e.return!==null&&(Ol(e,1),Lo(e,1,0))}function Qu(e){for(;e===li;)li=ra[--ca],ra[ca]=null,ai=ra[--ca],ra[ca]=null;for(;e===Ml;)Ml=vt[--xt],vt[xt]=null,Yt=vt[--xt],vt[xt]=null,Ht=vt[--xt],vt[xt]=null}var We=null,Te=null,fe=!1,Nl=null,Ct=!1,Vu=Error(s(519));function Bl(e){var t=Error(s(418,""));throw Ja(pt(t,e)),Vu}function qo(e){var t=e.stateNode,l=e.type,a=e.memoizedProps;switch(t[Ze]=e,t[$e]=a,l){case"dialog":re("cancel",t),re("close",t);break;case"iframe":case"object":case"embed":re("load",t);break;case"video":case"audio":for(l=0;l<yn.length;l++)re(yn[l],t);break;case"source":re("error",t);break;case"img":case"image":case"link":re("error",t),re("load",t);break;case"details":re("toggle",t);break;case"input":re("invalid",t),eo(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),Xn(t);break;case"select":re("invalid",t);break;case"textarea":re("invalid",t),lo(t,a.value,a.defaultValue,a.children),Xn(t)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||t.textContent===""+l||a.suppressHydrationWarning===!0||nd(t.textContent,l)?(a.popover!=null&&(re("beforetoggle",t),re("toggle",t)),a.onScroll!=null&&re("scroll",t),a.onScrollEnd!=null&&re("scrollend",t),a.onClick!=null&&(t.onclick=Hi),t=!0):t=!1,t||Bl(e)}function ko(e){for(We=e.return;We;)switch(We.tag){case 5:case 13:Ct=!1;return;case 27:case 3:Ct=!0;return;default:We=We.return}}function Za(e){if(e!==We)return!1;if(!fe)return ko(e),fe=!0,!1;var t=e.tag,l;if((l=t!==3&&t!==27)&&((l=t===5)&&(l=e.type,l=!(l!=="form"&&l!=="button")||rc(e.type,e.memoizedProps)),l=!l),l&&Te&&Bl(e),ko(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(l=e.data,l==="/$"){if(t===0){Te=Et(e.nextSibling);break e}t--}else l!=="$"&&l!=="$!"&&l!=="$?"||t++;e=e.nextSibling}Te=null}}else t===27?(t=Te,vl(e.type)?(e=fc,fc=null,Te=e):Te=t):Te=We?Et(e.stateNode.nextSibling):null;return!0}function Ka(){Te=We=null,fe=!1}function Go(){var e=Nl;return e!==null&&(et===null?et=e:et.push.apply(et,e),Nl=null),e}function Ja(e){Nl===null?Nl=[e]:Nl.push(e)}var Zu=B(null),_l=null,Lt=null;function ll(e,t,l){H(Zu,t._currentValue),t._currentValue=l}function qt(e){e._currentValue=Zu.current,q(Zu)}function Ku(e,t,l){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===l)break;e=e.return}}function Ju(e,t,l,a){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var r=n.child;i=i.firstContext;e:for(;i!==null;){var o=i;i=n;for(var h=0;h<t.length;h++)if(o.context===t[h]){i.lanes|=l,o=i.alternate,o!==null&&(o.lanes|=l),Ku(i.return,l,e),a||(r=null);break e}i=o.next}}else if(n.tag===18){if(r=n.return,r===null)throw Error(s(341));r.lanes|=l,i=r.alternate,i!==null&&(i.lanes|=l),Ku(r,l,e),r=null}else r=n.child;if(r!==null)r.return=n;else for(r=n;r!==null;){if(r===e){r=null;break}if(n=r.sibling,n!==null){n.return=r.return,r=n;break}r=r.return}n=r}}function Wa(e,t,l,a){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var r=n.alternate;if(r===null)throw Error(s(387));if(r=r.memoizedProps,r!==null){var o=n.type;it(n.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(n===lt.current){if(r=n.alternate,r===null)throw Error(s(387));r.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(Tn):e=[Tn])}n=n.return}e!==null&&Ju(t,e,l,a),t.flags|=262144}function ni(e){for(e=e.firstContext;e!==null;){if(!it(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ul(e){_l=e,Lt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ke(e){return Xo(_l,e)}function ii(e,t){return _l===null&&Ul(e),Xo(e,t)}function Xo(e,t){var l=t._currentValue;if(t={context:t,memoizedValue:l,next:null},Lt===null){if(e===null)throw Error(s(308));Lt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Lt=Lt.next=t;return l}var Th=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(l,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(l){return l()})}},Ah=u.unstable_scheduleCallback,wh=u.unstable_NormalPriority,Oe={$$typeof:le,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Wu(){return{controller:new Th,data:new Map,refCount:0}}function $a(e){e.refCount--,e.refCount===0&&Ah(wh,function(){e.controller.abort()})}var Fa=null,$u=0,oa=0,sa=null;function Ch(e,t){if(Fa===null){var l=Fa=[];$u=0,oa=Ir(),sa={status:"pending",value:void 0,then:function(a){l.push(a)}}}return $u++,t.then(Qo,Qo),t}function Qo(){if(--$u===0&&Fa!==null){sa!==null&&(sa.status="fulfilled");var e=Fa;Fa=null,oa=0,sa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Rh(e,t){var l=[],a={status:"pending",value:null,reason:null,then:function(n){l.push(n)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var n=0;n<l.length;n++)(0,l[n])(t)},function(n){for(a.status="rejected",a.reason=n,n=0;n<l.length;n++)(0,l[n])(void 0)}),a}var Vo=M.S;M.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&Ch(e,t),Vo!==null&&Vo(e,t)};var Hl=B(null);function Fu(){var e=Hl.current;return e!==null?e:ye.pooledCache}function ui(e,t){t===null?H(Hl,Hl.current):H(Hl,t.pool)}function Zo(){var e=Fu();return e===null?null:{parent:Oe._currentValue,pool:e}}var Ia=Error(s(460)),Ko=Error(s(474)),ri=Error(s(542)),Iu={then:function(){}};function Jo(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ci(){}function Wo(e,t,l){switch(l=e[l],l===void 0?e.push(t):l!==t&&(t.then(ci,ci),t=l),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Fo(e),e;default:if(typeof t.status=="string")t.then(ci,ci);else{if(e=ye,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=a}},function(a){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Fo(e),e}throw Pa=t,Ia}}var Pa=null;function $o(){if(Pa===null)throw Error(s(459));var e=Pa;return Pa=null,e}function Fo(e){if(e===Ia||e===ri)throw Error(s(483))}var al=!1;function Pu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function er(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function nl(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function il(e,t,l){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(de&2)!==0){var n=a.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),a.pending=t,t=ei(e),Ho(e,null,l),t}return Pn(e,a,t,l),ei(e)}function en(e,t,l){if(t=t.updateQueue,t!==null&&(t=t.shared,(l&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,Xc(e,l)}}function tr(e,t){var l=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var n=null,i=null;if(l=l.firstBaseUpdate,l!==null){do{var r={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};i===null?n=i=r:i=i.next=r,l=l.next}while(l!==null);i===null?n=i=t:i=i.next=t}else n=i=t;l={baseState:a.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},e.updateQueue=l;return}e=l.lastBaseUpdate,e===null?l.firstBaseUpdate=t:e.next=t,l.lastBaseUpdate=t}var lr=!1;function tn(){if(lr){var e=sa;if(e!==null)throw e}}function ln(e,t,l,a){lr=!1;var n=e.updateQueue;al=!1;var i=n.firstBaseUpdate,r=n.lastBaseUpdate,o=n.shared.pending;if(o!==null){n.shared.pending=null;var h=o,z=h.next;h.next=null,r===null?i=z:r.next=z,r=h;var D=e.alternate;D!==null&&(D=D.updateQueue,o=D.lastBaseUpdate,o!==r&&(o===null?D.firstBaseUpdate=z:o.next=z,D.lastBaseUpdate=h))}if(i!==null){var N=n.baseState;r=0,D=z=h=null,o=i;do{var E=o.lane&-536870913,T=E!==o.lane;if(T?(ce&E)===E:(a&E)===E){E!==0&&E===oa&&(lr=!0),D!==null&&(D=D.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});e:{var I=e,J=o;E=t;var ge=l;switch(J.tag){case 1:if(I=J.payload,typeof I=="function"){N=I.call(ge,N,E);break e}N=I;break e;case 3:I.flags=I.flags&-65537|128;case 0:if(I=J.payload,E=typeof I=="function"?I.call(ge,N,E):I,E==null)break e;N=A({},N,E);break e;case 2:al=!0}}E=o.callback,E!==null&&(e.flags|=64,T&&(e.flags|=8192),T=n.callbacks,T===null?n.callbacks=[E]:T.push(E))}else T={lane:E,tag:o.tag,payload:o.payload,callback:o.callback,next:null},D===null?(z=D=T,h=N):D=D.next=T,r|=E;if(o=o.next,o===null){if(o=n.shared.pending,o===null)break;T=o,o=T.next,T.next=null,n.lastBaseUpdate=T,n.shared.pending=null}}while(!0);D===null&&(h=N),n.baseState=h,n.firstBaseUpdate=z,n.lastBaseUpdate=D,i===null&&(n.shared.lanes=0),hl|=r,e.lanes=r,e.memoizedState=N}}function Io(e,t){if(typeof e!="function")throw Error(s(191,e));e.call(t)}function Po(e,t){var l=e.callbacks;if(l!==null)for(e.callbacks=null,e=0;e<l.length;e++)Io(l[e],t)}var fa=B(null),oi=B(0);function es(e,t){e=Kt,H(oi,e),H(fa,t),Kt=e|t.baseLanes}function ar(){H(oi,Kt),H(fa,fa.current)}function nr(){Kt=oi.current,q(fa),q(oi)}var ul=0,ne=null,me=null,Re=null,si=!1,da=!1,Yl=!1,fi=0,an=0,ha=null,Dh=0;function we(){throw Error(s(321))}function ir(e,t){if(t===null)return!1;for(var l=0;l<t.length&&l<e.length;l++)if(!it(e[l],t[l]))return!1;return!0}function ur(e,t,l,a,n,i){return ul=i,ne=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,M.H=e===null||e.memoizedState===null?Hs:Ys,Yl=!1,i=l(a,n),Yl=!1,da&&(i=ls(t,l,a,n)),ts(e),i}function ts(e){M.H=vi;var t=me!==null&&me.next!==null;if(ul=0,Re=me=ne=null,si=!1,an=0,ha=null,t)throw Error(s(300));e===null||Ye||(e=e.dependencies,e!==null&&ni(e)&&(Ye=!0))}function ls(e,t,l,a){ne=e;var n=0;do{if(da&&(ha=null),an=0,da=!1,25<=n)throw Error(s(301));if(n+=1,Re=me=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}M.H=Hh,i=t(l,a)}while(da);return i}function Mh(){var e=M.H,t=e.useState()[0];return t=typeof t.then=="function"?nn(t):t,e=e.useState()[0],(me!==null?me.memoizedState:null)!==e&&(ne.flags|=1024),t}function rr(){var e=fi!==0;return fi=0,e}function cr(e,t,l){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l}function or(e){if(si){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}si=!1}ul=0,Re=me=ne=null,da=!1,an=fi=0,ha=null}function Ie(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Re===null?ne.memoizedState=Re=e:Re=Re.next=e,Re}function De(){if(me===null){var e=ne.alternate;e=e!==null?e.memoizedState:null}else e=me.next;var t=Re===null?ne.memoizedState:Re.next;if(t!==null)Re=t,me=e;else{if(e===null)throw ne.alternate===null?Error(s(467)):Error(s(310));me=e,e={memoizedState:me.memoizedState,baseState:me.baseState,baseQueue:me.baseQueue,queue:me.queue,next:null},Re===null?ne.memoizedState=Re=e:Re=Re.next=e}return Re}function sr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function nn(e){var t=an;return an+=1,ha===null&&(ha=[]),e=Wo(ha,e,t),t=ne,(Re===null?t.memoizedState:Re.next)===null&&(t=t.alternate,M.H=t===null||t.memoizedState===null?Hs:Ys),e}function di(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return nn(e);if(e.$$typeof===le)return Ke(e)}throw Error(s(438,String(e)))}function fr(e){var t=null,l=ne.updateQueue;if(l!==null&&(t=l.memoCache),t==null){var a=ne.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),l===null&&(l=sr(),ne.updateQueue=l),l.memoCache=t,l=t.data[t.index],l===void 0)for(l=t.data[t.index]=Array(e),a=0;a<e;a++)l[a]=tt;return t.index++,l}function kt(e,t){return typeof t=="function"?t(e):t}function hi(e){var t=De();return dr(t,me,e)}function dr(e,t,l){var a=e.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=l;var n=e.baseQueue,i=a.pending;if(i!==null){if(n!==null){var r=n.next;n.next=i.next,i.next=r}t.baseQueue=n=i,a.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var o=r=null,h=null,z=t,D=!1;do{var N=z.lane&-536870913;if(N!==z.lane?(ce&N)===N:(ul&N)===N){var E=z.revertLane;if(E===0)h!==null&&(h=h.next={lane:0,revertLane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),N===oa&&(D=!0);else if((ul&E)===E){z=z.next,E===oa&&(D=!0);continue}else N={lane:0,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},h===null?(o=h=N,r=i):h=h.next=N,ne.lanes|=E,hl|=E;N=z.action,Yl&&l(i,N),i=z.hasEagerState?z.eagerState:l(i,N)}else E={lane:N,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},h===null?(o=h=E,r=i):h=h.next=E,ne.lanes|=N,hl|=N;z=z.next}while(z!==null&&z!==t);if(h===null?r=i:h.next=o,!it(i,e.memoizedState)&&(Ye=!0,D&&(l=sa,l!==null)))throw l;e.memoizedState=i,e.baseState=r,e.baseQueue=h,a.lastRenderedState=i}return n===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function hr(e){var t=De(),l=t.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=e;var a=l.dispatch,n=l.pending,i=t.memoizedState;if(n!==null){l.pending=null;var r=n=n.next;do i=e(i,r.action),r=r.next;while(r!==n);it(i,t.memoizedState)||(Ye=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),l.lastRenderedState=i}return[i,a]}function as(e,t,l){var a=ne,n=De(),i=fe;if(i){if(l===void 0)throw Error(s(407));l=l()}else l=t();var r=!it((me||n).memoizedState,l);r&&(n.memoizedState=l,Ye=!0),n=n.queue;var o=us.bind(null,a,n,e);if(un(2048,8,o,[e]),n.getSnapshot!==t||r||Re!==null&&Re.memoizedState.tag&1){if(a.flags|=2048,ma(9,mi(),is.bind(null,a,n,l,t),null),ye===null)throw Error(s(349));i||(ul&124)!==0||ns(a,t,l)}return l}function ns(e,t,l){e.flags|=16384,e={getSnapshot:t,value:l},t=ne.updateQueue,t===null?(t=sr(),ne.updateQueue=t,t.stores=[e]):(l=t.stores,l===null?t.stores=[e]:l.push(e))}function is(e,t,l,a){t.value=l,t.getSnapshot=a,rs(t)&&cs(e)}function us(e,t,l){return l(function(){rs(t)&&cs(e)})}function rs(e){var t=e.getSnapshot;e=e.value;try{var l=t();return!it(e,l)}catch{return!0}}function cs(e){var t=ia(e,2);t!==null&&ft(t,e,2)}function mr(e){var t=Ie();if(typeof e=="function"){var l=e;if(e=l(),Yl){Pt(!0);try{l()}finally{Pt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:kt,lastRenderedState:e},t}function os(e,t,l,a){return e.baseState=l,dr(e,me,typeof a=="function"?a:kt)}function Oh(e,t,l,a,n){if(gi(e))throw Error(s(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){i.listeners.push(r)}};M.T!==null?l(!0):i.isTransition=!1,a(i),l=t.pending,l===null?(i.next=t.pending=i,ss(t,i)):(i.next=l.next,t.pending=l.next=i)}}function ss(e,t){var l=t.action,a=t.payload,n=e.state;if(t.isTransition){var i=M.T,r={};M.T=r;try{var o=l(n,a),h=M.S;h!==null&&h(r,o),fs(e,t,o)}catch(z){pr(e,t,z)}finally{M.T=i}}else try{i=l(n,a),fs(e,t,i)}catch(z){pr(e,t,z)}}function fs(e,t,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){ds(e,t,a)},function(a){return pr(e,t,a)}):ds(e,t,l)}function ds(e,t,l){t.status="fulfilled",t.value=l,hs(t),e.state=l,t=e.pending,t!==null&&(l=t.next,l===t?e.pending=null:(l=l.next,t.next=l,ss(e,l)))}function pr(e,t,l){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=l,hs(t),t=t.next;while(t!==a)}e.action=null}function hs(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ms(e,t){return t}function ps(e,t){if(fe){var l=ye.formState;if(l!==null){e:{var a=ne;if(fe){if(Te){t:{for(var n=Te,i=Ct;n.nodeType!==8;){if(!i){n=null;break t}if(n=Et(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){Te=Et(n.nextSibling),a=n.data==="F!";break e}}Bl(a)}a=!1}a&&(t=l[0])}}return l=Ie(),l.memoizedState=l.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ms,lastRenderedState:t},l.queue=a,l=Bs.bind(null,ne,a),a.dispatch=l,a=mr(!1),i=br.bind(null,ne,!1,a.queue),a=Ie(),n={state:t,dispatch:null,action:e,pending:null},a.queue=n,l=Oh.bind(null,ne,n,i,l),n.dispatch=l,a.memoizedState=e,[t,l,!1]}function gs(e){var t=De();return vs(t,me,e)}function vs(e,t,l){if(t=dr(e,t,ms)[0],e=hi(kt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=nn(t)}catch(r){throw r===Ia?ri:r}else a=t;t=De();var n=t.queue,i=n.dispatch;return l!==t.memoizedState&&(ne.flags|=2048,ma(9,mi(),Nh.bind(null,n,l),null)),[a,i,e]}function Nh(e,t){e.action=t}function xs(e){var t=De(),l=me;if(l!==null)return vs(t,l,e);De(),t=t.memoizedState,l=De();var a=l.queue.dispatch;return l.memoizedState=e,[t,a,!1]}function ma(e,t,l,a){return e={tag:e,create:l,deps:a,inst:t,next:null},t=ne.updateQueue,t===null&&(t=sr(),ne.updateQueue=t),l=t.lastEffect,l===null?t.lastEffect=e.next=e:(a=l.next,l.next=e,e.next=a,t.lastEffect=e),e}function mi(){return{destroy:void 0,resource:void 0}}function ys(){return De().memoizedState}function pi(e,t,l,a){var n=Ie();a=a===void 0?null:a,ne.flags|=e,n.memoizedState=ma(1|t,mi(),l,a)}function un(e,t,l,a){var n=De();a=a===void 0?null:a;var i=n.memoizedState.inst;me!==null&&a!==null&&ir(a,me.memoizedState.deps)?n.memoizedState=ma(t,i,l,a):(ne.flags|=e,n.memoizedState=ma(1|t,i,l,a))}function bs(e,t){pi(8390656,8,e,t)}function Ss(e,t){un(2048,8,e,t)}function js(e,t){return un(4,2,e,t)}function zs(e,t){return un(4,4,e,t)}function Es(e,t){if(typeof t=="function"){e=e();var l=t(e);return function(){typeof l=="function"?l():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ts(e,t,l){l=l!=null?l.concat([e]):null,un(4,4,Es.bind(null,t,e),l)}function gr(){}function As(e,t){var l=De();t=t===void 0?null:t;var a=l.memoizedState;return t!==null&&ir(t,a[1])?a[0]:(l.memoizedState=[e,t],e)}function ws(e,t){var l=De();t=t===void 0?null:t;var a=l.memoizedState;if(t!==null&&ir(t,a[1]))return a[0];if(a=e(),Yl){Pt(!0);try{e()}finally{Pt(!1)}}return l.memoizedState=[a,t],a}function vr(e,t,l){return l===void 0||(ul&1073741824)!==0?e.memoizedState=t:(e.memoizedState=l,e=Mf(),ne.lanes|=e,hl|=e,l)}function Cs(e,t,l,a){return it(l,t)?l:fa.current!==null?(e=vr(e,l,a),it(e,t)||(Ye=!0),e):(ul&42)===0?(Ye=!0,e.memoizedState=l):(e=Mf(),ne.lanes|=e,hl|=e,t)}function Rs(e,t,l,a,n){var i=Y.p;Y.p=i!==0&&8>i?i:8;var r=M.T,o={};M.T=o,br(e,!1,t,l);try{var h=n(),z=M.S;if(z!==null&&z(o,h),h!==null&&typeof h=="object"&&typeof h.then=="function"){var D=Rh(h,a);rn(e,t,D,st(e))}else rn(e,t,a,st(e))}catch(N){rn(e,t,{then:function(){},status:"rejected",reason:N},st())}finally{Y.p=i,M.T=r}}function Bh(){}function xr(e,t,l,a){if(e.tag!==5)throw Error(s(476));var n=Ds(e).queue;Rs(e,n,t,F,l===null?Bh:function(){return Ms(e),l(a)})}function Ds(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:F,baseState:F,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:kt,lastRenderedState:F},next:null};var l={};return t.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:kt,lastRenderedState:l},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ms(e){var t=Ds(e).next.queue;rn(e,t,{},st())}function yr(){return Ke(Tn)}function Os(){return De().memoizedState}function Ns(){return De().memoizedState}function _h(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var l=st();e=nl(l);var a=il(t,e,l);a!==null&&(ft(a,t,l),en(a,t,l)),t={cache:Wu()},e.payload=t;return}t=t.return}}function Uh(e,t,l){var a=st();l={lane:a,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null},gi(e)?_s(t,l):(l=Lu(e,t,l,a),l!==null&&(ft(l,e,a),Us(l,t,a)))}function Bs(e,t,l){var a=st();rn(e,t,l,a)}function rn(e,t,l,a){var n={lane:a,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null};if(gi(e))_s(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var r=t.lastRenderedState,o=i(r,l);if(n.hasEagerState=!0,n.eagerState=o,it(o,r))return Pn(e,t,n,0),ye===null&&In(),!1}catch{}finally{}if(l=Lu(e,t,n,a),l!==null)return ft(l,e,a),Us(l,t,a),!0}return!1}function br(e,t,l,a){if(a={lane:2,revertLane:Ir(),action:a,hasEagerState:!1,eagerState:null,next:null},gi(e)){if(t)throw Error(s(479))}else t=Lu(e,l,a,2),t!==null&&ft(t,e,2)}function gi(e){var t=e.alternate;return e===ne||t!==null&&t===ne}function _s(e,t){da=si=!0;var l=e.pending;l===null?t.next=t:(t.next=l.next,l.next=t),e.pending=t}function Us(e,t,l){if((l&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,Xc(e,l)}}var vi={readContext:Ke,use:di,useCallback:we,useContext:we,useEffect:we,useImperativeHandle:we,useLayoutEffect:we,useInsertionEffect:we,useMemo:we,useReducer:we,useRef:we,useState:we,useDebugValue:we,useDeferredValue:we,useTransition:we,useSyncExternalStore:we,useId:we,useHostTransitionStatus:we,useFormState:we,useActionState:we,useOptimistic:we,useMemoCache:we,useCacheRefresh:we},Hs={readContext:Ke,use:di,useCallback:function(e,t){return Ie().memoizedState=[e,t===void 0?null:t],e},useContext:Ke,useEffect:bs,useImperativeHandle:function(e,t,l){l=l!=null?l.concat([e]):null,pi(4194308,4,Es.bind(null,t,e),l)},useLayoutEffect:function(e,t){return pi(4194308,4,e,t)},useInsertionEffect:function(e,t){pi(4,2,e,t)},useMemo:function(e,t){var l=Ie();t=t===void 0?null:t;var a=e();if(Yl){Pt(!0);try{e()}finally{Pt(!1)}}return l.memoizedState=[a,t],a},useReducer:function(e,t,l){var a=Ie();if(l!==void 0){var n=l(t);if(Yl){Pt(!0);try{l(t)}finally{Pt(!1)}}}else n=t;return a.memoizedState=a.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},a.queue=e,e=e.dispatch=Uh.bind(null,ne,e),[a.memoizedState,e]},useRef:function(e){var t=Ie();return e={current:e},t.memoizedState=e},useState:function(e){e=mr(e);var t=e.queue,l=Bs.bind(null,ne,t);return t.dispatch=l,[e.memoizedState,l]},useDebugValue:gr,useDeferredValue:function(e,t){var l=Ie();return vr(l,e,t)},useTransition:function(){var e=mr(!1);return e=Rs.bind(null,ne,e.queue,!0,!1),Ie().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,l){var a=ne,n=Ie();if(fe){if(l===void 0)throw Error(s(407));l=l()}else{if(l=t(),ye===null)throw Error(s(349));(ce&124)!==0||ns(a,t,l)}n.memoizedState=l;var i={value:l,getSnapshot:t};return n.queue=i,bs(us.bind(null,a,i,e),[e]),a.flags|=2048,ma(9,mi(),is.bind(null,a,i,l,t),null),l},useId:function(){var e=Ie(),t=ye.identifierPrefix;if(fe){var l=Yt,a=Ht;l=(a&~(1<<32-nt(a)-1)).toString(32)+l,t="«"+t+"R"+l,l=fi++,0<l&&(t+="H"+l.toString(32)),t+="»"}else l=Dh++,t="«"+t+"r"+l.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:yr,useFormState:ps,useActionState:ps,useOptimistic:function(e){var t=Ie();t.memoizedState=t.baseState=e;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=l,t=br.bind(null,ne,!0,l),l.dispatch=t,[e,t]},useMemoCache:fr,useCacheRefresh:function(){return Ie().memoizedState=_h.bind(null,ne)}},Ys={readContext:Ke,use:di,useCallback:As,useContext:Ke,useEffect:Ss,useImperativeHandle:Ts,useInsertionEffect:js,useLayoutEffect:zs,useMemo:ws,useReducer:hi,useRef:ys,useState:function(){return hi(kt)},useDebugValue:gr,useDeferredValue:function(e,t){var l=De();return Cs(l,me.memoizedState,e,t)},useTransition:function(){var e=hi(kt)[0],t=De().memoizedState;return[typeof e=="boolean"?e:nn(e),t]},useSyncExternalStore:as,useId:Os,useHostTransitionStatus:yr,useFormState:gs,useActionState:gs,useOptimistic:function(e,t){var l=De();return os(l,me,e,t)},useMemoCache:fr,useCacheRefresh:Ns},Hh={readContext:Ke,use:di,useCallback:As,useContext:Ke,useEffect:Ss,useImperativeHandle:Ts,useInsertionEffect:js,useLayoutEffect:zs,useMemo:ws,useReducer:hr,useRef:ys,useState:function(){return hr(kt)},useDebugValue:gr,useDeferredValue:function(e,t){var l=De();return me===null?vr(l,e,t):Cs(l,me.memoizedState,e,t)},useTransition:function(){var e=hr(kt)[0],t=De().memoizedState;return[typeof e=="boolean"?e:nn(e),t]},useSyncExternalStore:as,useId:Os,useHostTransitionStatus:yr,useFormState:xs,useActionState:xs,useOptimistic:function(e,t){var l=De();return me!==null?os(l,me,e,t):(l.baseState=e,[e,l.queue.dispatch])},useMemoCache:fr,useCacheRefresh:Ns},pa=null,cn=0;function xi(e){var t=cn;return cn+=1,pa===null&&(pa=[]),Wo(pa,e,t)}function on(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function yi(e,t){throw t.$$typeof===U?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Ls(e){var t=e._init;return t(e._payload)}function qs(e){function t(y,x){if(e){var j=y.deletions;j===null?(y.deletions=[x],y.flags|=16):j.push(x)}}function l(y,x){if(!e)return null;for(;x!==null;)t(y,x),x=x.sibling;return null}function a(y){for(var x=new Map;y!==null;)y.key!==null?x.set(y.key,y):x.set(y.index,y),y=y.sibling;return x}function n(y,x){return y=Ut(y,x),y.index=0,y.sibling=null,y}function i(y,x,j){return y.index=j,e?(j=y.alternate,j!==null?(j=j.index,j<x?(y.flags|=67108866,x):j):(y.flags|=67108866,x)):(y.flags|=1048576,x)}function r(y){return e&&y.alternate===null&&(y.flags|=67108866),y}function o(y,x,j,O){return x===null||x.tag!==6?(x=ku(j,y.mode,O),x.return=y,x):(x=n(x,j),x.return=y,x)}function h(y,x,j,O){var G=j.type;return G===Z?D(y,x,j.props.children,O,j.key):x!==null&&(x.elementType===G||typeof G=="object"&&G!==null&&G.$$typeof===Ue&&Ls(G)===x.type)?(x=n(x,j.props),on(x,j),x.return=y,x):(x=ti(j.type,j.key,j.props,null,y.mode,O),on(x,j),x.return=y,x)}function z(y,x,j,O){return x===null||x.tag!==4||x.stateNode.containerInfo!==j.containerInfo||x.stateNode.implementation!==j.implementation?(x=Gu(j,y.mode,O),x.return=y,x):(x=n(x,j.children||[]),x.return=y,x)}function D(y,x,j,O,G){return x===null||x.tag!==7?(x=Dl(j,y.mode,O,G),x.return=y,x):(x=n(x,j),x.return=y,x)}function N(y,x,j){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return x=ku(""+x,y.mode,j),x.return=y,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case L:return j=ti(x.type,x.key,x.props,null,y.mode,j),on(j,x),j.return=y,j;case V:return x=Gu(x,y.mode,j),x.return=y,x;case Ue:var O=x._init;return x=O(x._payload),N(y,x,j)}if(Ve(x)||Qe(x))return x=Dl(x,y.mode,j,null),x.return=y,x;if(typeof x.then=="function")return N(y,xi(x),j);if(x.$$typeof===le)return N(y,ii(y,x),j);yi(y,x)}return null}function E(y,x,j,O){var G=x!==null?x.key:null;if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return G!==null?null:o(y,x,""+j,O);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case L:return j.key===G?h(y,x,j,O):null;case V:return j.key===G?z(y,x,j,O):null;case Ue:return G=j._init,j=G(j._payload),E(y,x,j,O)}if(Ve(j)||Qe(j))return G!==null?null:D(y,x,j,O,null);if(typeof j.then=="function")return E(y,x,xi(j),O);if(j.$$typeof===le)return E(y,x,ii(y,j),O);yi(y,j)}return null}function T(y,x,j,O,G){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return y=y.get(j)||null,o(x,y,""+O,G);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case L:return y=y.get(O.key===null?j:O.key)||null,h(x,y,O,G);case V:return y=y.get(O.key===null?j:O.key)||null,z(x,y,O,G);case Ue:var ie=O._init;return O=ie(O._payload),T(y,x,j,O,G)}if(Ve(O)||Qe(O))return y=y.get(j)||null,D(x,y,O,G,null);if(typeof O.then=="function")return T(y,x,j,xi(O),G);if(O.$$typeof===le)return T(y,x,j,ii(x,O),G);yi(x,O)}return null}function I(y,x,j,O){for(var G=null,ie=null,Q=x,$=x=0,qe=null;Q!==null&&$<j.length;$++){Q.index>$?(qe=Q,Q=null):qe=Q.sibling;var se=E(y,Q,j[$],O);if(se===null){Q===null&&(Q=qe);break}e&&Q&&se.alternate===null&&t(y,Q),x=i(se,x,$),ie===null?G=se:ie.sibling=se,ie=se,Q=qe}if($===j.length)return l(y,Q),fe&&Ol(y,$),G;if(Q===null){for(;$<j.length;$++)Q=N(y,j[$],O),Q!==null&&(x=i(Q,x,$),ie===null?G=Q:ie.sibling=Q,ie=Q);return fe&&Ol(y,$),G}for(Q=a(Q);$<j.length;$++)qe=T(Q,y,$,j[$],O),qe!==null&&(e&&qe.alternate!==null&&Q.delete(qe.key===null?$:qe.key),x=i(qe,x,$),ie===null?G=qe:ie.sibling=qe,ie=qe);return e&&Q.forEach(function(jl){return t(y,jl)}),fe&&Ol(y,$),G}function J(y,x,j,O){if(j==null)throw Error(s(151));for(var G=null,ie=null,Q=x,$=x=0,qe=null,se=j.next();Q!==null&&!se.done;$++,se=j.next()){Q.index>$?(qe=Q,Q=null):qe=Q.sibling;var jl=E(y,Q,se.value,O);if(jl===null){Q===null&&(Q=qe);break}e&&Q&&jl.alternate===null&&t(y,Q),x=i(jl,x,$),ie===null?G=jl:ie.sibling=jl,ie=jl,Q=qe}if(se.done)return l(y,Q),fe&&Ol(y,$),G;if(Q===null){for(;!se.done;$++,se=j.next())se=N(y,se.value,O),se!==null&&(x=i(se,x,$),ie===null?G=se:ie.sibling=se,ie=se);return fe&&Ol(y,$),G}for(Q=a(Q);!se.done;$++,se=j.next())se=T(Q,y,$,se.value,O),se!==null&&(e&&se.alternate!==null&&Q.delete(se.key===null?$:se.key),x=i(se,x,$),ie===null?G=se:ie.sibling=se,ie=se);return e&&Q.forEach(function(Ym){return t(y,Ym)}),fe&&Ol(y,$),G}function ge(y,x,j,O){if(typeof j=="object"&&j!==null&&j.type===Z&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case L:e:{for(var G=j.key;x!==null;){if(x.key===G){if(G=j.type,G===Z){if(x.tag===7){l(y,x.sibling),O=n(x,j.props.children),O.return=y,y=O;break e}}else if(x.elementType===G||typeof G=="object"&&G!==null&&G.$$typeof===Ue&&Ls(G)===x.type){l(y,x.sibling),O=n(x,j.props),on(O,j),O.return=y,y=O;break e}l(y,x);break}else t(y,x);x=x.sibling}j.type===Z?(O=Dl(j.props.children,y.mode,O,j.key),O.return=y,y=O):(O=ti(j.type,j.key,j.props,null,y.mode,O),on(O,j),O.return=y,y=O)}return r(y);case V:e:{for(G=j.key;x!==null;){if(x.key===G)if(x.tag===4&&x.stateNode.containerInfo===j.containerInfo&&x.stateNode.implementation===j.implementation){l(y,x.sibling),O=n(x,j.children||[]),O.return=y,y=O;break e}else{l(y,x);break}else t(y,x);x=x.sibling}O=Gu(j,y.mode,O),O.return=y,y=O}return r(y);case Ue:return G=j._init,j=G(j._payload),ge(y,x,j,O)}if(Ve(j))return I(y,x,j,O);if(Qe(j)){if(G=Qe(j),typeof G!="function")throw Error(s(150));return j=G.call(j),J(y,x,j,O)}if(typeof j.then=="function")return ge(y,x,xi(j),O);if(j.$$typeof===le)return ge(y,x,ii(y,j),O);yi(y,j)}return typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint"?(j=""+j,x!==null&&x.tag===6?(l(y,x.sibling),O=n(x,j),O.return=y,y=O):(l(y,x),O=ku(j,y.mode,O),O.return=y,y=O),r(y)):l(y,x)}return function(y,x,j,O){try{cn=0;var G=ge(y,x,j,O);return pa=null,G}catch(Q){if(Q===Ia||Q===ri)throw Q;var ie=ut(29,Q,null,y.mode);return ie.lanes=O,ie.return=y,ie}finally{}}}var ga=qs(!0),ks=qs(!1),yt=B(null),Rt=null;function rl(e){var t=e.alternate;H(Ne,Ne.current&1),H(yt,e),Rt===null&&(t===null||fa.current!==null||t.memoizedState!==null)&&(Rt=e)}function Gs(e){if(e.tag===22){if(H(Ne,Ne.current),H(yt,e),Rt===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Rt=e)}}else cl()}function cl(){H(Ne,Ne.current),H(yt,yt.current)}function Gt(e){q(yt),Rt===e&&(Rt=null),q(Ne)}var Ne=B(0);function bi(e){for(var t=e;t!==null;){if(t.tag===13){var l=t.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||sc(l)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function Sr(e,t,l,a){t=e.memoizedState,l=l(a,t),l=l==null?t:A({},t,l),e.memoizedState=l,e.lanes===0&&(e.updateQueue.baseState=l)}var jr={enqueueSetState:function(e,t,l){e=e._reactInternals;var a=st(),n=nl(a);n.payload=t,l!=null&&(n.callback=l),t=il(e,n,a),t!==null&&(ft(t,e,a),en(t,e,a))},enqueueReplaceState:function(e,t,l){e=e._reactInternals;var a=st(),n=nl(a);n.tag=1,n.payload=t,l!=null&&(n.callback=l),t=il(e,n,a),t!==null&&(ft(t,e,a),en(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var l=st(),a=nl(l);a.tag=2,t!=null&&(a.callback=t),t=il(e,a,l),t!==null&&(ft(t,e,l),en(t,e,l))}};function Xs(e,t,l,a,n,i,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,i,r):t.prototype&&t.prototype.isPureReactComponent?!Qa(l,a)||!Qa(n,i):!0}function Qs(e,t,l,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(l,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(l,a),t.state!==e&&jr.enqueueReplaceState(t,t.state,null)}function Ll(e,t){var l=t;if("ref"in t){l={};for(var a in t)a!=="ref"&&(l[a]=t[a])}if(e=e.defaultProps){l===t&&(l=A({},l));for(var n in e)l[n]===void 0&&(l[n]=e[n])}return l}var Si=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Vs(e){Si(e)}function Zs(e){console.error(e)}function Ks(e){Si(e)}function ji(e,t){try{var l=e.onUncaughtError;l(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Js(e,t,l){try{var a=e.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function zr(e,t,l){return l=nl(l),l.tag=3,l.payload={element:null},l.callback=function(){ji(e,t)},l}function Ws(e){return e=nl(e),e.tag=3,e}function $s(e,t,l,a){var n=l.type.getDerivedStateFromError;if(typeof n=="function"){var i=a.value;e.payload=function(){return n(i)},e.callback=function(){Js(t,l,a)}}var r=l.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){Js(t,l,a),typeof n!="function"&&(ml===null?ml=new Set([this]):ml.add(this));var o=a.stack;this.componentDidCatch(a.value,{componentStack:o!==null?o:""})})}function Yh(e,t,l,a,n){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=l.alternate,t!==null&&Wa(t,l,n,!0),l=yt.current,l!==null){switch(l.tag){case 13:return Rt===null?Kr():l.alternate===null&&Ae===0&&(Ae=3),l.flags&=-257,l.flags|=65536,l.lanes=n,a===Iu?l.flags|=16384:(t=l.updateQueue,t===null?l.updateQueue=new Set([a]):t.add(a),Wr(e,a,n)),!1;case 22:return l.flags|=65536,a===Iu?l.flags|=16384:(t=l.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=t):(l=t.retryQueue,l===null?t.retryQueue=new Set([a]):l.add(a)),Wr(e,a,n)),!1}throw Error(s(435,l.tag))}return Wr(e,a,n),Kr(),!1}if(fe)return t=yt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,a!==Vu&&(e=Error(s(422),{cause:a}),Ja(pt(e,l)))):(a!==Vu&&(t=Error(s(423),{cause:a}),Ja(pt(t,l))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,a=pt(a,l),n=zr(e.stateNode,a,n),tr(e,n),Ae!==4&&(Ae=2)),!1;var i=Error(s(520),{cause:a});if(i=pt(i,l),gn===null?gn=[i]:gn.push(i),Ae!==4&&(Ae=2),t===null)return!0;a=pt(a,l),l=t;do{switch(l.tag){case 3:return l.flags|=65536,e=n&-n,l.lanes|=e,e=zr(l.stateNode,a,e),tr(l,e),!1;case 1:if(t=l.type,i=l.stateNode,(l.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(ml===null||!ml.has(i))))return l.flags|=65536,n&=-n,l.lanes|=n,n=Ws(n),$s(n,e,l,a),tr(l,n),!1}l=l.return}while(l!==null);return!1}var Fs=Error(s(461)),Ye=!1;function ke(e,t,l,a){t.child=e===null?ks(t,null,l,a):ga(t,e.child,l,a)}function Is(e,t,l,a,n){l=l.render;var i=t.ref;if("ref"in a){var r={};for(var o in a)o!=="ref"&&(r[o]=a[o])}else r=a;return Ul(t),a=ur(e,t,l,r,i,n),o=rr(),e!==null&&!Ye?(cr(e,t,n),Xt(e,t,n)):(fe&&o&&Xu(t),t.flags|=1,ke(e,t,a,n),t.child)}function Ps(e,t,l,a,n){if(e===null){var i=l.type;return typeof i=="function"&&!qu(i)&&i.defaultProps===void 0&&l.compare===null?(t.tag=15,t.type=i,ef(e,t,i,a,n)):(e=ti(l.type,null,a,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Mr(e,n)){var r=i.memoizedProps;if(l=l.compare,l=l!==null?l:Qa,l(r,a)&&e.ref===t.ref)return Xt(e,t,n)}return t.flags|=1,e=Ut(i,a),e.ref=t.ref,e.return=t,t.child=e}function ef(e,t,l,a,n){if(e!==null){var i=e.memoizedProps;if(Qa(i,a)&&e.ref===t.ref)if(Ye=!1,t.pendingProps=a=i,Mr(e,n))(e.flags&131072)!==0&&(Ye=!0);else return t.lanes=e.lanes,Xt(e,t,n)}return Er(e,t,l,a,n)}function tf(e,t,l){var a=t.pendingProps,n=a.children,i=e!==null?e.memoizedState:null;if(a.mode==="hidden"){if((t.flags&128)!==0){if(a=i!==null?i.baseLanes|l:l,e!==null){for(n=t.child=e.child,i=0;n!==null;)i=i|n.lanes|n.childLanes,n=n.sibling;t.childLanes=i&~a}else t.childLanes=0,t.child=null;return lf(e,t,a,l)}if((l&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ui(t,i!==null?i.cachePool:null),i!==null?es(t,i):ar(),Gs(t);else return t.lanes=t.childLanes=536870912,lf(e,t,i!==null?i.baseLanes|l:l,l)}else i!==null?(ui(t,i.cachePool),es(t,i),cl(),t.memoizedState=null):(e!==null&&ui(t,null),ar(),cl());return ke(e,t,n,l),t.child}function lf(e,t,l,a){var n=Fu();return n=n===null?null:{parent:Oe._currentValue,pool:n},t.memoizedState={baseLanes:l,cachePool:n},e!==null&&ui(t,null),ar(),Gs(t),e!==null&&Wa(e,t,a,!0),null}function zi(e,t){var l=t.ref;if(l===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(s(284));(e===null||e.ref!==l)&&(t.flags|=4194816)}}function Er(e,t,l,a,n){return Ul(t),l=ur(e,t,l,a,void 0,n),a=rr(),e!==null&&!Ye?(cr(e,t,n),Xt(e,t,n)):(fe&&a&&Xu(t),t.flags|=1,ke(e,t,l,n),t.child)}function af(e,t,l,a,n,i){return Ul(t),t.updateQueue=null,l=ls(t,a,l,n),ts(e),a=rr(),e!==null&&!Ye?(cr(e,t,i),Xt(e,t,i)):(fe&&a&&Xu(t),t.flags|=1,ke(e,t,l,i),t.child)}function nf(e,t,l,a,n){if(Ul(t),t.stateNode===null){var i=ua,r=l.contextType;typeof r=="object"&&r!==null&&(i=Ke(r)),i=new l(a,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=jr,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=a,i.state=t.memoizedState,i.refs={},Pu(t),r=l.contextType,i.context=typeof r=="object"&&r!==null?Ke(r):ua,i.state=t.memoizedState,r=l.getDerivedStateFromProps,typeof r=="function"&&(Sr(t,l,r,a),i.state=t.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(r=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),r!==i.state&&jr.enqueueReplaceState(i,i.state,null),ln(t,a,i,n),tn(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){i=t.stateNode;var o=t.memoizedProps,h=Ll(l,o);i.props=h;var z=i.context,D=l.contextType;r=ua,typeof D=="object"&&D!==null&&(r=Ke(D));var N=l.getDerivedStateFromProps;D=typeof N=="function"||typeof i.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,D||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o||z!==r)&&Qs(t,i,a,r),al=!1;var E=t.memoizedState;i.state=E,ln(t,a,i,n),tn(),z=t.memoizedState,o||E!==z||al?(typeof N=="function"&&(Sr(t,l,N,a),z=t.memoizedState),(h=al||Xs(t,l,h,a,E,z,r))?(D||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=z),i.props=a,i.state=z,i.context=r,a=h):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{i=t.stateNode,er(e,t),r=t.memoizedProps,D=Ll(l,r),i.props=D,N=t.pendingProps,E=i.context,z=l.contextType,h=ua,typeof z=="object"&&z!==null&&(h=Ke(z)),o=l.getDerivedStateFromProps,(z=typeof o=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(r!==N||E!==h)&&Qs(t,i,a,h),al=!1,E=t.memoizedState,i.state=E,ln(t,a,i,n),tn();var T=t.memoizedState;r!==N||E!==T||al||e!==null&&e.dependencies!==null&&ni(e.dependencies)?(typeof o=="function"&&(Sr(t,l,o,a),T=t.memoizedState),(D=al||Xs(t,l,D,a,E,T,h)||e!==null&&e.dependencies!==null&&ni(e.dependencies))?(z||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,T,h),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,T,h)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||r===e.memoizedProps&&E===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&E===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=T),i.props=a,i.state=T,i.context=h,a=D):(typeof i.componentDidUpdate!="function"||r===e.memoizedProps&&E===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&E===e.memoizedState||(t.flags|=1024),a=!1)}return i=a,zi(e,t),a=(t.flags&128)!==0,i||a?(i=t.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&a?(t.child=ga(t,e.child,null,n),t.child=ga(t,null,l,n)):ke(e,t,l,n),t.memoizedState=i.state,e=t.child):e=Xt(e,t,n),e}function uf(e,t,l,a){return Ka(),t.flags|=256,ke(e,t,l,a),t.child}var Tr={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ar(e){return{baseLanes:e,cachePool:Zo()}}function wr(e,t,l){return e=e!==null?e.childLanes&~l:0,t&&(e|=bt),e}function rf(e,t,l){var a=t.pendingProps,n=!1,i=(t.flags&128)!==0,r;if((r=i)||(r=e!==null&&e.memoizedState===null?!1:(Ne.current&2)!==0),r&&(n=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(fe){if(n?rl(t):cl(),fe){var o=Te,h;if(h=o){e:{for(h=o,o=Ct;h.nodeType!==8;){if(!o){o=null;break e}if(h=Et(h.nextSibling),h===null){o=null;break e}}o=h}o!==null?(t.memoizedState={dehydrated:o,treeContext:Ml!==null?{id:Ht,overflow:Yt}:null,retryLane:536870912,hydrationErrors:null},h=ut(18,null,null,0),h.stateNode=o,h.return=t,t.child=h,We=t,Te=null,h=!0):h=!1}h||Bl(t)}if(o=t.memoizedState,o!==null&&(o=o.dehydrated,o!==null))return sc(o)?t.lanes=32:t.lanes=536870912,null;Gt(t)}return o=a.children,a=a.fallback,n?(cl(),n=t.mode,o=Ei({mode:"hidden",children:o},n),a=Dl(a,n,l,null),o.return=t,a.return=t,o.sibling=a,t.child=o,n=t.child,n.memoizedState=Ar(l),n.childLanes=wr(e,r,l),t.memoizedState=Tr,a):(rl(t),Cr(t,o))}if(h=e.memoizedState,h!==null&&(o=h.dehydrated,o!==null)){if(i)t.flags&256?(rl(t),t.flags&=-257,t=Rr(e,t,l)):t.memoizedState!==null?(cl(),t.child=e.child,t.flags|=128,t=null):(cl(),n=a.fallback,o=t.mode,a=Ei({mode:"visible",children:a.children},o),n=Dl(n,o,l,null),n.flags|=2,a.return=t,n.return=t,a.sibling=n,t.child=a,ga(t,e.child,null,l),a=t.child,a.memoizedState=Ar(l),a.childLanes=wr(e,r,l),t.memoizedState=Tr,t=n);else if(rl(t),sc(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var z=r.dgst;r=z,a=Error(s(419)),a.stack="",a.digest=r,Ja({value:a,source:null,stack:null}),t=Rr(e,t,l)}else if(Ye||Wa(e,t,l,!1),r=(l&e.childLanes)!==0,Ye||r){if(r=ye,r!==null&&(a=l&-l,a=(a&42)!==0?1:fu(a),a=(a&(r.suspendedLanes|l))!==0?0:a,a!==0&&a!==h.retryLane))throw h.retryLane=a,ia(e,a),ft(r,e,a),Fs;o.data==="$?"||Kr(),t=Rr(e,t,l)}else o.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=h.treeContext,Te=Et(o.nextSibling),We=t,fe=!0,Nl=null,Ct=!1,e!==null&&(vt[xt++]=Ht,vt[xt++]=Yt,vt[xt++]=Ml,Ht=e.id,Yt=e.overflow,Ml=t),t=Cr(t,a.children),t.flags|=4096);return t}return n?(cl(),n=a.fallback,o=t.mode,h=e.child,z=h.sibling,a=Ut(h,{mode:"hidden",children:a.children}),a.subtreeFlags=h.subtreeFlags&65011712,z!==null?n=Ut(z,n):(n=Dl(n,o,l,null),n.flags|=2),n.return=t,a.return=t,a.sibling=n,t.child=a,a=n,n=t.child,o=e.child.memoizedState,o===null?o=Ar(l):(h=o.cachePool,h!==null?(z=Oe._currentValue,h=h.parent!==z?{parent:z,pool:z}:h):h=Zo(),o={baseLanes:o.baseLanes|l,cachePool:h}),n.memoizedState=o,n.childLanes=wr(e,r,l),t.memoizedState=Tr,a):(rl(t),l=e.child,e=l.sibling,l=Ut(l,{mode:"visible",children:a.children}),l.return=t,l.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=l,t.memoizedState=null,l)}function Cr(e,t){return t=Ei({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ei(e,t){return e=ut(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Rr(e,t,l){return ga(t,e.child,null,l),e=Cr(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function cf(e,t,l){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Ku(e.return,t,l)}function Dr(e,t,l,a,n){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:n}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=a,i.tail=l,i.tailMode=n)}function of(e,t,l){var a=t.pendingProps,n=a.revealOrder,i=a.tail;if(ke(e,t,a.children,l),a=Ne.current,(a&2)!==0)a=a&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&cf(e,l,t);else if(e.tag===19)cf(e,l,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}switch(H(Ne,a),n){case"forwards":for(l=t.child,n=null;l!==null;)e=l.alternate,e!==null&&bi(e)===null&&(n=l),l=l.sibling;l=n,l===null?(n=t.child,t.child=null):(n=l.sibling,l.sibling=null),Dr(t,!1,n,l,i);break;case"backwards":for(l=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&bi(e)===null){t.child=n;break}e=n.sibling,n.sibling=l,l=n,n=e}Dr(t,!0,l,null,i);break;case"together":Dr(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Xt(e,t,l){if(e!==null&&(t.dependencies=e.dependencies),hl|=t.lanes,(l&t.childLanes)===0)if(e!==null){if(Wa(e,t,l,!1),(l&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,l=Ut(e,e.pendingProps),t.child=l,l.return=t;e.sibling!==null;)e=e.sibling,l=l.sibling=Ut(e,e.pendingProps),l.return=t;l.sibling=null}return t.child}function Mr(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&ni(e)))}function Lh(e,t,l){switch(t.tag){case 3:be(t,t.stateNode.containerInfo),ll(t,Oe,e.memoizedState.cache),Ka();break;case 27:case 5:uu(t);break;case 4:be(t,t.stateNode.containerInfo);break;case 10:ll(t,t.type,t.memoizedProps.value);break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(rl(t),t.flags|=128,null):(l&t.child.childLanes)!==0?rf(e,t,l):(rl(t),e=Xt(e,t,l),e!==null?e.sibling:null);rl(t);break;case 19:var n=(e.flags&128)!==0;if(a=(l&t.childLanes)!==0,a||(Wa(e,t,l,!1),a=(l&t.childLanes)!==0),n){if(a)return of(e,t,l);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),H(Ne,Ne.current),a)break;return null;case 22:case 23:return t.lanes=0,tf(e,t,l);case 24:ll(t,Oe,e.memoizedState.cache)}return Xt(e,t,l)}function sf(e,t,l){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ye=!0;else{if(!Mr(e,l)&&(t.flags&128)===0)return Ye=!1,Lh(e,t,l);Ye=(e.flags&131072)!==0}else Ye=!1,fe&&(t.flags&1048576)!==0&&Lo(t,ai,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var a=t.elementType,n=a._init;if(a=n(a._payload),t.type=a,typeof a=="function")qu(a)?(e=Ll(a,e),t.tag=1,t=nf(null,t,a,e,l)):(t.tag=0,t=Er(null,t,a,e,l));else{if(a!=null){if(n=a.$$typeof,n===je){t.tag=11,t=Is(null,t,a,e,l);break e}else if(n===Me){t.tag=14,t=Ps(null,t,a,e,l);break e}}throw t=El(a)||a,Error(s(306,t,""))}}return t;case 0:return Er(e,t,t.type,t.pendingProps,l);case 1:return a=t.type,n=Ll(a,t.pendingProps),nf(e,t,a,n,l);case 3:e:{if(be(t,t.stateNode.containerInfo),e===null)throw Error(s(387));a=t.pendingProps;var i=t.memoizedState;n=i.element,er(e,t),ln(t,a,null,l);var r=t.memoizedState;if(a=r.cache,ll(t,Oe,a),a!==i.cache&&Ju(t,[Oe],l,!0),tn(),a=r.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=uf(e,t,a,l);break e}else if(a!==n){n=pt(Error(s(424)),t),Ja(n),t=uf(e,t,a,l);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Te=Et(e.firstChild),We=t,fe=!0,Nl=null,Ct=!0,l=ks(t,null,a,l),t.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(Ka(),a===n){t=Xt(e,t,l);break e}ke(e,t,a,l)}t=t.child}return t;case 26:return zi(e,t),e===null?(l=md(t.type,null,t.pendingProps,null))?t.memoizedState=l:fe||(l=t.type,e=t.pendingProps,a=Yi(te.current).createElement(l),a[Ze]=t,a[$e]=e,Xe(a,l,e),He(a),t.stateNode=a):t.memoizedState=md(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return uu(t),e===null&&fe&&(a=t.stateNode=fd(t.type,t.pendingProps,te.current),We=t,Ct=!0,n=Te,vl(t.type)?(fc=n,Te=Et(a.firstChild)):Te=n),ke(e,t,t.pendingProps.children,l),zi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&fe&&((n=a=Te)&&(a=hm(a,t.type,t.pendingProps,Ct),a!==null?(t.stateNode=a,We=t,Te=Et(a.firstChild),Ct=!1,n=!0):n=!1),n||Bl(t)),uu(t),n=t.type,i=t.pendingProps,r=e!==null?e.memoizedProps:null,a=i.children,rc(n,i)?a=null:r!==null&&rc(n,r)&&(t.flags|=32),t.memoizedState!==null&&(n=ur(e,t,Mh,null,null,l),Tn._currentValue=n),zi(e,t),ke(e,t,a,l),t.child;case 6:return e===null&&fe&&((e=l=Te)&&(l=mm(l,t.pendingProps,Ct),l!==null?(t.stateNode=l,We=t,Te=null,e=!0):e=!1),e||Bl(t)),null;case 13:return rf(e,t,l);case 4:return be(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=ga(t,null,a,l):ke(e,t,a,l),t.child;case 11:return Is(e,t,t.type,t.pendingProps,l);case 7:return ke(e,t,t.pendingProps,l),t.child;case 8:return ke(e,t,t.pendingProps.children,l),t.child;case 12:return ke(e,t,t.pendingProps.children,l),t.child;case 10:return a=t.pendingProps,ll(t,t.type,a.value),ke(e,t,a.children,l),t.child;case 9:return n=t.type._context,a=t.pendingProps.children,Ul(t),n=Ke(n),a=a(n),t.flags|=1,ke(e,t,a,l),t.child;case 14:return Ps(e,t,t.type,t.pendingProps,l);case 15:return ef(e,t,t.type,t.pendingProps,l);case 19:return of(e,t,l);case 31:return a=t.pendingProps,l=t.mode,a={mode:a.mode,children:a.children},e===null?(l=Ei(a,l),l.ref=t.ref,t.child=l,l.return=t,t=l):(l=Ut(e.child,a),l.ref=t.ref,t.child=l,l.return=t,t=l),t;case 22:return tf(e,t,l);case 24:return Ul(t),a=Ke(Oe),e===null?(n=Fu(),n===null&&(n=ye,i=Wu(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=l),n=i),t.memoizedState={parent:a,cache:n},Pu(t),ll(t,Oe,n)):((e.lanes&l)!==0&&(er(e,t),ln(t,null,null,l),tn()),n=e.memoizedState,i=t.memoizedState,n.parent!==a?(n={parent:a,cache:a},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),ll(t,Oe,a)):(a=i.cache,ll(t,Oe,a),a!==n.cache&&Ju(t,[Oe],l,!0))),ke(e,t,t.pendingProps.children,l),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function Qt(e){e.flags|=4}function ff(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!yd(t)){if(t=yt.current,t!==null&&((ce&4194048)===ce?Rt!==null:(ce&62914560)!==ce&&(ce&536870912)===0||t!==Rt))throw Pa=Iu,Ko;e.flags|=8192}}function Ti(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?kc():536870912,e.lanes|=t,ba|=t)}function sn(e,t){if(!fe)switch(e.tailMode){case"hidden":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?e.tail=null:l.sibling=null;break;case"collapsed":l=e.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,l=0,a=0;if(t)for(var n=e.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags&65011712,a|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags,a|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=a,e.childLanes=l,t}function qh(e,t,l){var a=t.pendingProps;switch(Qu(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(t),null;case 1:return ze(t),null;case 3:return l=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),qt(Oe),It(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(Za(t)?Qt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Go())),ze(t),null;case 26:return l=t.memoizedState,e===null?(Qt(t),l!==null?(ze(t),ff(t,l)):(ze(t),t.flags&=-16777217)):l?l!==e.memoizedState?(Qt(t),ze(t),ff(t,l)):(ze(t),t.flags&=-16777217):(e.memoizedProps!==a&&Qt(t),ze(t),t.flags&=-16777217),null;case 27:Un(t),l=te.current;var n=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Qt(t);else{if(!a){if(t.stateNode===null)throw Error(s(166));return ze(t),null}e=K.current,Za(t)?qo(t):(e=fd(n,a,l),t.stateNode=e,Qt(t))}return ze(t),null;case 5:if(Un(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Qt(t);else{if(!a){if(t.stateNode===null)throw Error(s(166));return ze(t),null}if(e=K.current,Za(t))qo(t);else{switch(n=Yi(te.current),e){case 1:e=n.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:e=n.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":e=n.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":e=n.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":e=n.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof a.is=="string"?n.createElement("select",{is:a.is}):n.createElement("select"),a.multiple?e.multiple=!0:a.size&&(e.size=a.size);break;default:e=typeof a.is=="string"?n.createElement(l,{is:a.is}):n.createElement(l)}}e[Ze]=t,e[$e]=a;e:for(n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.tag!==27&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}t.stateNode=e;e:switch(Xe(e,l,a),l){case"button":case"input":case"select":case"textarea":e=!!a.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Qt(t)}}return ze(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&Qt(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(s(166));if(e=te.current,Za(t)){if(e=t.stateNode,l=t.memoizedProps,a=null,n=We,n!==null)switch(n.tag){case 27:case 5:a=n.memoizedProps}e[Ze]=t,e=!!(e.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||nd(e.nodeValue,l)),e||Bl(t)}else e=Yi(e).createTextNode(a),e[Ze]=t,t.stateNode=e}return ze(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=Za(t),a!==null&&a.dehydrated!==null){if(e===null){if(!n)throw Error(s(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(s(317));n[Ze]=t}else Ka(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ze(t),n=!1}else n=Go(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(Gt(t),t):(Gt(t),null)}if(Gt(t),(t.flags&128)!==0)return t.lanes=l,t;if(l=a!==null,e=e!==null&&e.memoizedState!==null,l){a=t.child,n=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(n=a.alternate.memoizedState.cachePool.pool);var i=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==n&&(a.flags|=2048)}return l!==e&&l&&(t.child.flags|=8192),Ti(t,t.updateQueue),ze(t),null;case 4:return It(),e===null&&lc(t.stateNode.containerInfo),ze(t),null;case 10:return qt(t.type),ze(t),null;case 19:if(q(Ne),n=t.memoizedState,n===null)return ze(t),null;if(a=(t.flags&128)!==0,i=n.rendering,i===null)if(a)sn(n,!1);else{if(Ae!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=bi(e),i!==null){for(t.flags|=128,sn(n,!1),e=i.updateQueue,t.updateQueue=e,Ti(t,e),t.subtreeFlags=0,e=l,l=t.child;l!==null;)Yo(l,e),l=l.sibling;return H(Ne,Ne.current&1|2),t.child}e=e.sibling}n.tail!==null&&wt()>Ci&&(t.flags|=128,a=!0,sn(n,!1),t.lanes=4194304)}else{if(!a)if(e=bi(i),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Ti(t,e),sn(n,!0),n.tail===null&&n.tailMode==="hidden"&&!i.alternate&&!fe)return ze(t),null}else 2*wt()-n.renderingStartTime>Ci&&l!==536870912&&(t.flags|=128,a=!0,sn(n,!1),t.lanes=4194304);n.isBackwards?(i.sibling=t.child,t.child=i):(e=n.last,e!==null?e.sibling=i:t.child=i,n.last=i)}return n.tail!==null?(t=n.tail,n.rendering=t,n.tail=t.sibling,n.renderingStartTime=wt(),t.sibling=null,e=Ne.current,H(Ne,a?e&1|2:e&1),t):(ze(t),null);case 22:case 23:return Gt(t),nr(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(l&536870912)!==0&&(t.flags&128)===0&&(ze(t),t.subtreeFlags&6&&(t.flags|=8192)):ze(t),l=t.updateQueue,l!==null&&Ti(t,l.retryQueue),l=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==l&&(t.flags|=2048),e!==null&&q(Hl),null;case 24:return l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),qt(Oe),ze(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function kh(e,t){switch(Qu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return qt(Oe),It(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Un(t),null;case 13:if(Gt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));Ka()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return q(Ne),null;case 4:return It(),null;case 10:return qt(t.type),null;case 22:case 23:return Gt(t),nr(),e!==null&&q(Hl),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return qt(Oe),null;case 25:return null;default:return null}}function df(e,t){switch(Qu(t),t.tag){case 3:qt(Oe),It();break;case 26:case 27:case 5:Un(t);break;case 4:It();break;case 13:Gt(t);break;case 19:q(Ne);break;case 10:qt(t.type);break;case 22:case 23:Gt(t),nr(),e!==null&&q(Hl);break;case 24:qt(Oe)}}function fn(e,t){try{var l=t.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var n=a.next;l=n;do{if((l.tag&e)===e){a=void 0;var i=l.create,r=l.inst;a=i(),r.destroy=a}l=l.next}while(l!==n)}}catch(o){xe(t,t.return,o)}}function ol(e,t,l){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&e)===e){var r=a.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,n=t;var h=l,z=o;try{z()}catch(D){xe(n,h,D)}}}a=a.next}while(a!==i)}}catch(D){xe(t,t.return,D)}}function hf(e){var t=e.updateQueue;if(t!==null){var l=e.stateNode;try{Po(t,l)}catch(a){xe(e,e.return,a)}}}function mf(e,t,l){l.props=Ll(e.type,e.memoizedProps),l.state=e.memoizedState;try{l.componentWillUnmount()}catch(a){xe(e,t,a)}}function dn(e,t){try{var l=e.ref;if(l!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof l=="function"?e.refCleanup=l(a):l.current=a}}catch(n){xe(e,t,n)}}function Dt(e,t){var l=e.ref,a=e.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(n){xe(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(n){xe(e,t,n)}else l.current=null}function pf(e){var t=e.type,l=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break e;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(n){xe(e,e.return,n)}}function Or(e,t,l){try{var a=e.stateNode;cm(a,e.type,l,t),a[$e]=t}catch(n){xe(e,e.return,n)}}function gf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&vl(e.type)||e.tag===4}function Nr(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||gf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&vl(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Br(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(e,t):(t=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,t.appendChild(e),l=l._reactRootContainer,l!=null||t.onclick!==null||(t.onclick=Hi));else if(a!==4&&(a===27&&vl(e.type)&&(l=e.stateNode,t=null),e=e.child,e!==null))for(Br(e,t,l),e=e.sibling;e!==null;)Br(e,t,l),e=e.sibling}function Ai(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?l.insertBefore(e,t):l.appendChild(e);else if(a!==4&&(a===27&&vl(e.type)&&(l=e.stateNode),e=e.child,e!==null))for(Ai(e,t,l),e=e.sibling;e!==null;)Ai(e,t,l),e=e.sibling}function vf(e){var t=e.stateNode,l=e.memoizedProps;try{for(var a=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Xe(t,a,l),t[Ze]=e,t[$e]=l}catch(i){xe(e,e.return,i)}}var Vt=!1,Ce=!1,_r=!1,xf=typeof WeakSet=="function"?WeakSet:Set,Le=null;function Gh(e,t){if(e=e.containerInfo,ic=Qi,e=Co(e),Nu(e)){if("selectionStart"in e)var l={start:e.selectionStart,end:e.selectionEnd};else e:{l=(l=e.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var n=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{l.nodeType,i.nodeType}catch{l=null;break e}var r=0,o=-1,h=-1,z=0,D=0,N=e,E=null;t:for(;;){for(var T;N!==l||n!==0&&N.nodeType!==3||(o=r+n),N!==i||a!==0&&N.nodeType!==3||(h=r+a),N.nodeType===3&&(r+=N.nodeValue.length),(T=N.firstChild)!==null;)E=N,N=T;for(;;){if(N===e)break t;if(E===l&&++z===n&&(o=r),E===i&&++D===a&&(h=r),(T=N.nextSibling)!==null)break;N=E,E=N.parentNode}N=T}l=o===-1||h===-1?null:{start:o,end:h}}else l=null}l=l||{start:0,end:0}}else l=null;for(uc={focusedElem:e,selectionRange:l},Qi=!1,Le=t;Le!==null;)if(t=Le,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,Le=e;else for(;Le!==null;){switch(t=Le,i=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,l=t,n=i.memoizedProps,i=i.memoizedState,a=l.stateNode;try{var I=Ll(l.type,n,l.elementType===l.type);e=a.getSnapshotBeforeUpdate(I,i),a.__reactInternalSnapshotBeforeUpdate=e}catch(J){xe(l,l.return,J)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,l=e.nodeType,l===9)oc(e);else if(l===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":oc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,Le=e;break}Le=t.return}}function yf(e,t,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:sl(e,l),a&4&&fn(5,l);break;case 1:if(sl(e,l),a&4)if(e=l.stateNode,t===null)try{e.componentDidMount()}catch(r){xe(l,l.return,r)}else{var n=Ll(l.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){xe(l,l.return,r)}}a&64&&hf(l),a&512&&dn(l,l.return);break;case 3:if(sl(e,l),a&64&&(e=l.updateQueue,e!==null)){if(t=null,l.child!==null)switch(l.child.tag){case 27:case 5:t=l.child.stateNode;break;case 1:t=l.child.stateNode}try{Po(e,t)}catch(r){xe(l,l.return,r)}}break;case 27:t===null&&a&4&&vf(l);case 26:case 5:sl(e,l),t===null&&a&4&&pf(l),a&512&&dn(l,l.return);break;case 12:sl(e,l);break;case 13:sl(e,l),a&4&&jf(e,l),a&64&&(e=l.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(l=Fh.bind(null,l),pm(e,l))));break;case 22:if(a=l.memoizedState!==null||Vt,!a){t=t!==null&&t.memoizedState!==null||Ce,n=Vt;var i=Ce;Vt=a,(Ce=t)&&!i?fl(e,l,(l.subtreeFlags&8772)!==0):sl(e,l),Vt=n,Ce=i}break;case 30:break;default:sl(e,l)}}function bf(e){var t=e.alternate;t!==null&&(e.alternate=null,bf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&mu(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Se=null,Pe=!1;function Zt(e,t,l){for(l=l.child;l!==null;)Sf(e,t,l),l=l.sibling}function Sf(e,t,l){if(at&&typeof at.onCommitFiberUnmount=="function")try{at.onCommitFiberUnmount(Oa,l)}catch{}switch(l.tag){case 26:Ce||Dt(l,t),Zt(e,t,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:Ce||Dt(l,t);var a=Se,n=Pe;vl(l.type)&&(Se=l.stateNode,Pe=!1),Zt(e,t,l),Sn(l.stateNode),Se=a,Pe=n;break;case 5:Ce||Dt(l,t);case 6:if(a=Se,n=Pe,Se=null,Zt(e,t,l),Se=a,Pe=n,Se!==null)if(Pe)try{(Se.nodeType===9?Se.body:Se.nodeName==="HTML"?Se.ownerDocument.body:Se).removeChild(l.stateNode)}catch(i){xe(l,t,i)}else try{Se.removeChild(l.stateNode)}catch(i){xe(l,t,i)}break;case 18:Se!==null&&(Pe?(e=Se,od(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,l.stateNode),Rn(e)):od(Se,l.stateNode));break;case 4:a=Se,n=Pe,Se=l.stateNode.containerInfo,Pe=!0,Zt(e,t,l),Se=a,Pe=n;break;case 0:case 11:case 14:case 15:Ce||ol(2,l,t),Ce||ol(4,l,t),Zt(e,t,l);break;case 1:Ce||(Dt(l,t),a=l.stateNode,typeof a.componentWillUnmount=="function"&&mf(l,t,a)),Zt(e,t,l);break;case 21:Zt(e,t,l);break;case 22:Ce=(a=Ce)||l.memoizedState!==null,Zt(e,t,l),Ce=a;break;default:Zt(e,t,l)}}function jf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Rn(e)}catch(l){xe(t,t.return,l)}}function Xh(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new xf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new xf),t;default:throw Error(s(435,e.tag))}}function Ur(e,t){var l=Xh(e);t.forEach(function(a){var n=Ih.bind(null,e,a);l.has(a)||(l.add(a),a.then(n,n))})}function rt(e,t){var l=t.deletions;if(l!==null)for(var a=0;a<l.length;a++){var n=l[a],i=e,r=t,o=r;e:for(;o!==null;){switch(o.tag){case 27:if(vl(o.type)){Se=o.stateNode,Pe=!1;break e}break;case 5:Se=o.stateNode,Pe=!1;break e;case 3:case 4:Se=o.stateNode.containerInfo,Pe=!0;break e}o=o.return}if(Se===null)throw Error(s(160));Sf(i,r,n),Se=null,Pe=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)zf(t,e),t=t.sibling}var zt=null;function zf(e,t){var l=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:rt(t,e),ct(e),a&4&&(ol(3,e,e.return),fn(3,e),ol(5,e,e.return));break;case 1:rt(t,e),ct(e),a&512&&(Ce||l===null||Dt(l,l.return)),a&64&&Vt&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(l=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var n=zt;if(rt(t,e),ct(e),a&512&&(Ce||l===null||Dt(l,l.return)),a&4){var i=l!==null?l.memoizedState:null;if(a=e.memoizedState,l===null)if(a===null)if(e.stateNode===null){e:{a=e.type,l=e.memoizedProps,n=n.ownerDocument||n;t:switch(a){case"title":i=n.getElementsByTagName("title")[0],(!i||i[_a]||i[Ze]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(a),n.head.insertBefore(i,n.querySelector("head > title"))),Xe(i,a,l),i[Ze]=e,He(i),a=i;break e;case"link":var r=vd("link","href",n).get(a+(l.href||""));if(r){for(var o=0;o<r.length;o++)if(i=r[o],i.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&i.getAttribute("rel")===(l.rel==null?null:l.rel)&&i.getAttribute("title")===(l.title==null?null:l.title)&&i.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){r.splice(o,1);break t}}i=n.createElement(a),Xe(i,a,l),n.head.appendChild(i);break;case"meta":if(r=vd("meta","content",n).get(a+(l.content||""))){for(o=0;o<r.length;o++)if(i=r[o],i.getAttribute("content")===(l.content==null?null:""+l.content)&&i.getAttribute("name")===(l.name==null?null:l.name)&&i.getAttribute("property")===(l.property==null?null:l.property)&&i.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&i.getAttribute("charset")===(l.charSet==null?null:l.charSet)){r.splice(o,1);break t}}i=n.createElement(a),Xe(i,a,l),n.head.appendChild(i);break;default:throw Error(s(468,a))}i[Ze]=e,He(i),a=i}e.stateNode=a}else xd(n,e.type,e.stateNode);else e.stateNode=gd(n,a,e.memoizedProps);else i!==a?(i===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):i.count--,a===null?xd(n,e.type,e.stateNode):gd(n,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Or(e,e.memoizedProps,l.memoizedProps)}break;case 27:rt(t,e),ct(e),a&512&&(Ce||l===null||Dt(l,l.return)),l!==null&&a&4&&Or(e,e.memoizedProps,l.memoizedProps);break;case 5:if(rt(t,e),ct(e),a&512&&(Ce||l===null||Dt(l,l.return)),e.flags&32){n=e.stateNode;try{Il(n,"")}catch(T){xe(e,e.return,T)}}a&4&&e.stateNode!=null&&(n=e.memoizedProps,Or(e,n,l!==null?l.memoizedProps:n)),a&1024&&(_r=!0);break;case 6:if(rt(t,e),ct(e),a&4){if(e.stateNode===null)throw Error(s(162));a=e.memoizedProps,l=e.stateNode;try{l.nodeValue=a}catch(T){xe(e,e.return,T)}}break;case 3:if(ki=null,n=zt,zt=Li(t.containerInfo),rt(t,e),zt=n,ct(e),a&4&&l!==null&&l.memoizedState.isDehydrated)try{Rn(t.containerInfo)}catch(T){xe(e,e.return,T)}_r&&(_r=!1,Ef(e));break;case 4:a=zt,zt=Li(e.stateNode.containerInfo),rt(t,e),ct(e),zt=a;break;case 12:rt(t,e),ct(e);break;case 13:rt(t,e),ct(e),e.child.flags&8192&&e.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Gr=wt()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Ur(e,a)));break;case 22:n=e.memoizedState!==null;var h=l!==null&&l.memoizedState!==null,z=Vt,D=Ce;if(Vt=z||n,Ce=D||h,rt(t,e),Ce=D,Vt=z,ct(e),a&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(l===null||h||Vt||Ce||ql(e)),l=null,t=e;;){if(t.tag===5||t.tag===26){if(l===null){h=l=t;try{if(i=h.stateNode,n)r=i.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{o=h.stateNode;var N=h.memoizedProps.style,E=N!=null&&N.hasOwnProperty("display")?N.display:null;o.style.display=E==null||typeof E=="boolean"?"":(""+E).trim()}}catch(T){xe(h,h.return,T)}}}else if(t.tag===6){if(l===null){h=t;try{h.stateNode.nodeValue=n?"":h.memoizedProps}catch(T){xe(h,h.return,T)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;l===t&&(l=null),t=t.return}l===t&&(l=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,Ur(e,l))));break;case 19:rt(t,e),ct(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Ur(e,a)));break;case 30:break;case 21:break;default:rt(t,e),ct(e)}}function ct(e){var t=e.flags;if(t&2){try{for(var l,a=e.return;a!==null;){if(gf(a)){l=a;break}a=a.return}if(l==null)throw Error(s(160));switch(l.tag){case 27:var n=l.stateNode,i=Nr(e);Ai(e,i,n);break;case 5:var r=l.stateNode;l.flags&32&&(Il(r,""),l.flags&=-33);var o=Nr(e);Ai(e,o,r);break;case 3:case 4:var h=l.stateNode.containerInfo,z=Nr(e);Br(e,z,h);break;default:throw Error(s(161))}}catch(D){xe(e,e.return,D)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ef(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Ef(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function sl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)yf(e,t.alternate,t),t=t.sibling}function ql(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ol(4,t,t.return),ql(t);break;case 1:Dt(t,t.return);var l=t.stateNode;typeof l.componentWillUnmount=="function"&&mf(t,t.return,l),ql(t);break;case 27:Sn(t.stateNode);case 26:case 5:Dt(t,t.return),ql(t);break;case 22:t.memoizedState===null&&ql(t);break;case 30:ql(t);break;default:ql(t)}e=e.sibling}}function fl(e,t,l){for(l=l&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,n=e,i=t,r=i.flags;switch(i.tag){case 0:case 11:case 15:fl(n,i,l),fn(4,i);break;case 1:if(fl(n,i,l),a=i,n=a.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(z){xe(a,a.return,z)}if(a=i,n=a.updateQueue,n!==null){var o=a.stateNode;try{var h=n.shared.hiddenCallbacks;if(h!==null)for(n.shared.hiddenCallbacks=null,n=0;n<h.length;n++)Io(h[n],o)}catch(z){xe(a,a.return,z)}}l&&r&64&&hf(i),dn(i,i.return);break;case 27:vf(i);case 26:case 5:fl(n,i,l),l&&a===null&&r&4&&pf(i),dn(i,i.return);break;case 12:fl(n,i,l);break;case 13:fl(n,i,l),l&&r&4&&jf(n,i);break;case 22:i.memoizedState===null&&fl(n,i,l),dn(i,i.return);break;case 30:break;default:fl(n,i,l)}t=t.sibling}}function Hr(e,t){var l=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==l&&(e!=null&&e.refCount++,l!=null&&$a(l))}function Yr(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&$a(e))}function Mt(e,t,l,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Tf(e,t,l,a),t=t.sibling}function Tf(e,t,l,a){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Mt(e,t,l,a),n&2048&&fn(9,t);break;case 1:Mt(e,t,l,a);break;case 3:Mt(e,t,l,a),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&$a(e)));break;case 12:if(n&2048){Mt(e,t,l,a),e=t.stateNode;try{var i=t.memoizedProps,r=i.id,o=i.onPostCommit;typeof o=="function"&&o(r,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(h){xe(t,t.return,h)}}else Mt(e,t,l,a);break;case 13:Mt(e,t,l,a);break;case 23:break;case 22:i=t.stateNode,r=t.alternate,t.memoizedState!==null?i._visibility&2?Mt(e,t,l,a):hn(e,t):i._visibility&2?Mt(e,t,l,a):(i._visibility|=2,va(e,t,l,a,(t.subtreeFlags&10256)!==0)),n&2048&&Hr(r,t);break;case 24:Mt(e,t,l,a),n&2048&&Yr(t.alternate,t);break;default:Mt(e,t,l,a)}}function va(e,t,l,a,n){for(n=n&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var i=e,r=t,o=l,h=a,z=r.flags;switch(r.tag){case 0:case 11:case 15:va(i,r,o,h,n),fn(8,r);break;case 23:break;case 22:var D=r.stateNode;r.memoizedState!==null?D._visibility&2?va(i,r,o,h,n):hn(i,r):(D._visibility|=2,va(i,r,o,h,n)),n&&z&2048&&Hr(r.alternate,r);break;case 24:va(i,r,o,h,n),n&&z&2048&&Yr(r.alternate,r);break;default:va(i,r,o,h,n)}t=t.sibling}}function hn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var l=e,a=t,n=a.flags;switch(a.tag){case 22:hn(l,a),n&2048&&Hr(a.alternate,a);break;case 24:hn(l,a),n&2048&&Yr(a.alternate,a);break;default:hn(l,a)}t=t.sibling}}var mn=8192;function xa(e){if(e.subtreeFlags&mn)for(e=e.child;e!==null;)Af(e),e=e.sibling}function Af(e){switch(e.tag){case 26:xa(e),e.flags&mn&&e.memoizedState!==null&&Cm(zt,e.memoizedState,e.memoizedProps);break;case 5:xa(e);break;case 3:case 4:var t=zt;zt=Li(e.stateNode.containerInfo),xa(e),zt=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=mn,mn=16777216,xa(e),mn=t):xa(e));break;default:xa(e)}}function wf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function pn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];Le=a,Rf(a,e)}wf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Cf(e),e=e.sibling}function Cf(e){switch(e.tag){case 0:case 11:case 15:pn(e),e.flags&2048&&ol(9,e,e.return);break;case 3:pn(e);break;case 12:pn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,wi(e)):pn(e);break;default:pn(e)}}function wi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];Le=a,Rf(a,e)}wf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ol(8,t,t.return),wi(t);break;case 22:l=t.stateNode,l._visibility&2&&(l._visibility&=-3,wi(t));break;default:wi(t)}e=e.sibling}}function Rf(e,t){for(;Le!==null;){var l=Le;switch(l.tag){case 0:case 11:case 15:ol(8,l,t);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:$a(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,Le=a;else e:for(l=e;Le!==null;){a=Le;var n=a.sibling,i=a.return;if(bf(a),a===l){Le=null;break e}if(n!==null){n.return=i,Le=n;break e}Le=i}}}var Qh={getCacheForType:function(e){var t=Ke(Oe),l=t.data.get(e);return l===void 0&&(l=e(),t.data.set(e,l)),l}},Vh=typeof WeakMap=="function"?WeakMap:Map,de=0,ye=null,ue=null,ce=0,he=0,ot=null,dl=!1,ya=!1,Lr=!1,Kt=0,Ae=0,hl=0,kl=0,qr=0,bt=0,ba=0,gn=null,et=null,kr=!1,Gr=0,Ci=1/0,Ri=null,ml=null,Ge=0,pl=null,Sa=null,ja=0,Xr=0,Qr=null,Df=null,vn=0,Vr=null;function st(){if((de&2)!==0&&ce!==0)return ce&-ce;if(M.T!==null){var e=oa;return e!==0?e:Ir()}return Qc()}function Mf(){bt===0&&(bt=(ce&536870912)===0||fe?qc():536870912);var e=yt.current;return e!==null&&(e.flags|=32),bt}function ft(e,t,l){(e===ye&&(he===2||he===9)||e.cancelPendingCommit!==null)&&(za(e,0),gl(e,ce,bt,!1)),Ba(e,l),((de&2)===0||e!==ye)&&(e===ye&&((de&2)===0&&(kl|=l),Ae===4&&gl(e,ce,bt,!1)),Ot(e))}function Of(e,t,l){if((de&6)!==0)throw Error(s(327));var a=!l&&(t&124)===0&&(t&e.expiredLanes)===0||Na(e,t),n=a?Jh(e,t):Jr(e,t,!0),i=a;do{if(n===0){ya&&!a&&gl(e,t,0,!1);break}else{if(l=e.current.alternate,i&&!Zh(l)){n=Jr(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;e:{var o=e;n=gn;var h=o.current.memoizedState.isDehydrated;if(h&&(za(o,r).flags|=256),r=Jr(o,r,!1),r!==2){if(Lr&&!h){o.errorRecoveryDisabledLanes|=i,kl|=i,n=4;break e}i=et,et=n,i!==null&&(et===null?et=i:et.push.apply(et,i))}n=r}if(i=!1,n!==2)continue}}if(n===1){za(e,0),gl(e,t,0,!0);break}e:{switch(a=e,i=n,i){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:gl(a,t,bt,!dl);break e;case 2:et=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(n=Gr+300-wt(),10<n)){if(gl(a,t,bt,!dl),qn(a,0,!0)!==0)break e;a.timeoutHandle=rd(Nf.bind(null,a,l,et,Ri,kr,t,bt,kl,ba,dl,i,2,-0,0),n);break e}Nf(a,l,et,Ri,kr,t,bt,kl,ba,dl,i,0,-0,0)}}break}while(!0);Ot(e)}function Nf(e,t,l,a,n,i,r,o,h,z,D,N,E,T){if(e.timeoutHandle=-1,N=t.subtreeFlags,(N&8192||(N&16785408)===16785408)&&(En={stylesheets:null,count:0,unsuspend:wm},Af(t),N=Rm(),N!==null)){e.cancelPendingCommit=N(qf.bind(null,e,t,i,l,a,n,r,o,h,D,1,E,T)),gl(e,i,r,!z);return}qf(e,t,i,l,a,n,r,o,h)}function Zh(e){for(var t=e;;){var l=t.tag;if((l===0||l===11||l===15)&&t.flags&16384&&(l=t.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var n=l[a],i=n.getSnapshot;n=n.value;try{if(!it(i(),n))return!1}catch{return!1}}if(l=t.child,t.subtreeFlags&16384&&l!==null)l.return=t,t=l;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function gl(e,t,l,a){t&=~qr,t&=~kl,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var n=t;0<n;){var i=31-nt(n),r=1<<i;a[i]=-1,n&=~r}l!==0&&Gc(e,l,t)}function Di(){return(de&6)===0?(xn(0),!1):!0}function Zr(){if(ue!==null){if(he===0)var e=ue.return;else e=ue,Lt=_l=null,or(e),pa=null,cn=0,e=ue;for(;e!==null;)df(e.alternate,e),e=e.return;ue=null}}function za(e,t){var l=e.timeoutHandle;l!==-1&&(e.timeoutHandle=-1,sm(l)),l=e.cancelPendingCommit,l!==null&&(e.cancelPendingCommit=null,l()),Zr(),ye=e,ue=l=Ut(e.current,null),ce=t,he=0,ot=null,dl=!1,ya=Na(e,t),Lr=!1,ba=bt=qr=kl=hl=Ae=0,et=gn=null,kr=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var n=31-nt(a),i=1<<n;t|=e[n],a&=~i}return Kt=t,In(),l}function Bf(e,t){ne=null,M.H=vi,t===Ia||t===ri?(t=$o(),he=3):t===Ko?(t=$o(),he=4):he=t===Fs?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ot=t,ue===null&&(Ae=1,ji(e,pt(t,e.current)))}function _f(){var e=M.H;return M.H=vi,e===null?vi:e}function Uf(){var e=M.A;return M.A=Qh,e}function Kr(){Ae=4,dl||(ce&4194048)!==ce&&yt.current!==null||(ya=!0),(hl&134217727)===0&&(kl&134217727)===0||ye===null||gl(ye,ce,bt,!1)}function Jr(e,t,l){var a=de;de|=2;var n=_f(),i=Uf();(ye!==e||ce!==t)&&(Ri=null,za(e,t)),t=!1;var r=Ae;e:do try{if(he!==0&&ue!==null){var o=ue,h=ot;switch(he){case 8:Zr(),r=6;break e;case 3:case 2:case 9:case 6:yt.current===null&&(t=!0);var z=he;if(he=0,ot=null,Ea(e,o,h,z),l&&ya){r=0;break e}break;default:z=he,he=0,ot=null,Ea(e,o,h,z)}}Kh(),r=Ae;break}catch(D){Bf(e,D)}while(!0);return t&&e.shellSuspendCounter++,Lt=_l=null,de=a,M.H=n,M.A=i,ue===null&&(ye=null,ce=0,In()),r}function Kh(){for(;ue!==null;)Hf(ue)}function Jh(e,t){var l=de;de|=2;var a=_f(),n=Uf();ye!==e||ce!==t?(Ri=null,Ci=wt()+500,za(e,t)):ya=Na(e,t);e:do try{if(he!==0&&ue!==null){t=ue;var i=ot;t:switch(he){case 1:he=0,ot=null,Ea(e,t,i,1);break;case 2:case 9:if(Jo(i)){he=0,ot=null,Yf(t);break}t=function(){he!==2&&he!==9||ye!==e||(he=7),Ot(e)},i.then(t,t);break e;case 3:he=7;break e;case 4:he=5;break e;case 7:Jo(i)?(he=0,ot=null,Yf(t)):(he=0,ot=null,Ea(e,t,i,7));break;case 5:var r=null;switch(ue.tag){case 26:r=ue.memoizedState;case 5:case 27:var o=ue;if(!r||yd(r)){he=0,ot=null;var h=o.sibling;if(h!==null)ue=h;else{var z=o.return;z!==null?(ue=z,Mi(z)):ue=null}break t}}he=0,ot=null,Ea(e,t,i,5);break;case 6:he=0,ot=null,Ea(e,t,i,6);break;case 8:Zr(),Ae=6;break e;default:throw Error(s(462))}}Wh();break}catch(D){Bf(e,D)}while(!0);return Lt=_l=null,M.H=a,M.A=n,de=l,ue!==null?0:(ye=null,ce=0,In(),Ae)}function Wh(){for(;ue!==null&&!v0();)Hf(ue)}function Hf(e){var t=sf(e.alternate,e,Kt);e.memoizedProps=e.pendingProps,t===null?Mi(e):ue=t}function Yf(e){var t=e,l=t.alternate;switch(t.tag){case 15:case 0:t=af(l,t,t.pendingProps,t.type,void 0,ce);break;case 11:t=af(l,t,t.pendingProps,t.type.render,t.ref,ce);break;case 5:or(t);default:df(l,t),t=ue=Yo(t,Kt),t=sf(l,t,Kt)}e.memoizedProps=e.pendingProps,t===null?Mi(e):ue=t}function Ea(e,t,l,a){Lt=_l=null,or(t),pa=null,cn=0;var n=t.return;try{if(Yh(e,n,t,l,ce)){Ae=1,ji(e,pt(l,e.current)),ue=null;return}}catch(i){if(n!==null)throw ue=n,i;Ae=1,ji(e,pt(l,e.current)),ue=null;return}t.flags&32768?(fe||a===1?e=!0:ya||(ce&536870912)!==0?e=!1:(dl=e=!0,(a===2||a===9||a===3||a===6)&&(a=yt.current,a!==null&&a.tag===13&&(a.flags|=16384))),Lf(t,e)):Mi(t)}function Mi(e){var t=e;do{if((t.flags&32768)!==0){Lf(t,dl);return}e=t.return;var l=qh(t.alternate,t,Kt);if(l!==null){ue=l;return}if(t=t.sibling,t!==null){ue=t;return}ue=t=e}while(t!==null);Ae===0&&(Ae=5)}function Lf(e,t){do{var l=kh(e.alternate,e);if(l!==null){l.flags&=32767,ue=l;return}if(l=e.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!t&&(e=e.sibling,e!==null)){ue=e;return}ue=e=l}while(e!==null);Ae=6,ue=null}function qf(e,t,l,a,n,i,r,o,h){e.cancelPendingCommit=null;do Oi();while(Ge!==0);if((de&6)!==0)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(i=t.lanes|t.childLanes,i|=Yu,w0(e,l,i,r,o,h),e===ye&&(ue=ye=null,ce=0),Sa=t,pl=e,ja=l,Xr=i,Qr=n,Df=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Ph(Hn,function(){return Vf(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=M.T,M.T=null,n=Y.p,Y.p=2,r=de,de|=4;try{Gh(e,t,l)}finally{de=r,Y.p=n,M.T=a}}Ge=1,kf(),Gf(),Xf()}}function kf(){if(Ge===1){Ge=0;var e=pl,t=Sa,l=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||l){l=M.T,M.T=null;var a=Y.p;Y.p=2;var n=de;de|=4;try{zf(t,e);var i=uc,r=Co(e.containerInfo),o=i.focusedElem,h=i.selectionRange;if(r!==o&&o&&o.ownerDocument&&wo(o.ownerDocument.documentElement,o)){if(h!==null&&Nu(o)){var z=h.start,D=h.end;if(D===void 0&&(D=z),"selectionStart"in o)o.selectionStart=z,o.selectionEnd=Math.min(D,o.value.length);else{var N=o.ownerDocument||document,E=N&&N.defaultView||window;if(E.getSelection){var T=E.getSelection(),I=o.textContent.length,J=Math.min(h.start,I),ge=h.end===void 0?J:Math.min(h.end,I);!T.extend&&J>ge&&(r=ge,ge=J,J=r);var y=Ao(o,J),x=Ao(o,ge);if(y&&x&&(T.rangeCount!==1||T.anchorNode!==y.node||T.anchorOffset!==y.offset||T.focusNode!==x.node||T.focusOffset!==x.offset)){var j=N.createRange();j.setStart(y.node,y.offset),T.removeAllRanges(),J>ge?(T.addRange(j),T.extend(x.node,x.offset)):(j.setEnd(x.node,x.offset),T.addRange(j))}}}}for(N=[],T=o;T=T.parentNode;)T.nodeType===1&&N.push({element:T,left:T.scrollLeft,top:T.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<N.length;o++){var O=N[o];O.element.scrollLeft=O.left,O.element.scrollTop=O.top}}Qi=!!ic,uc=ic=null}finally{de=n,Y.p=a,M.T=l}}e.current=t,Ge=2}}function Gf(){if(Ge===2){Ge=0;var e=pl,t=Sa,l=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||l){l=M.T,M.T=null;var a=Y.p;Y.p=2;var n=de;de|=4;try{yf(e,t.alternate,t)}finally{de=n,Y.p=a,M.T=l}}Ge=3}}function Xf(){if(Ge===4||Ge===3){Ge=0,x0();var e=pl,t=Sa,l=ja,a=Df;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ge=5:(Ge=0,Sa=pl=null,Qf(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(ml=null),du(l),t=t.stateNode,at&&typeof at.onCommitFiberRoot=="function")try{at.onCommitFiberRoot(Oa,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=M.T,n=Y.p,Y.p=2,M.T=null;try{for(var i=e.onRecoverableError,r=0;r<a.length;r++){var o=a[r];i(o.value,{componentStack:o.stack})}}finally{M.T=t,Y.p=n}}(ja&3)!==0&&Oi(),Ot(e),n=e.pendingLanes,(l&4194090)!==0&&(n&42)!==0?e===Vr?vn++:(vn=0,Vr=e):vn=0,xn(0)}}function Qf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,$a(t)))}function Oi(e){return kf(),Gf(),Xf(),Vf()}function Vf(){if(Ge!==5)return!1;var e=pl,t=Xr;Xr=0;var l=du(ja),a=M.T,n=Y.p;try{Y.p=32>l?32:l,M.T=null,l=Qr,Qr=null;var i=pl,r=ja;if(Ge=0,Sa=pl=null,ja=0,(de&6)!==0)throw Error(s(331));var o=de;if(de|=4,Cf(i.current),Tf(i,i.current,r,l),de=o,xn(0,!1),at&&typeof at.onPostCommitFiberRoot=="function")try{at.onPostCommitFiberRoot(Oa,i)}catch{}return!0}finally{Y.p=n,M.T=a,Qf(e,t)}}function Zf(e,t,l){t=pt(l,t),t=zr(e.stateNode,t,2),e=il(e,t,2),e!==null&&(Ba(e,2),Ot(e))}function xe(e,t,l){if(e.tag===3)Zf(e,e,l);else for(;t!==null;){if(t.tag===3){Zf(t,e,l);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(ml===null||!ml.has(a))){e=pt(l,e),l=Ws(2),a=il(t,l,2),a!==null&&($s(l,a,t,e),Ba(a,2),Ot(a));break}}t=t.return}}function Wr(e,t,l){var a=e.pingCache;if(a===null){a=e.pingCache=new Vh;var n=new Set;a.set(t,n)}else n=a.get(t),n===void 0&&(n=new Set,a.set(t,n));n.has(l)||(Lr=!0,n.add(l),e=$h.bind(null,e,t,l),t.then(e,e))}function $h(e,t,l){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&l,e.warmLanes&=~l,ye===e&&(ce&l)===l&&(Ae===4||Ae===3&&(ce&62914560)===ce&&300>wt()-Gr?(de&2)===0&&za(e,0):qr|=l,ba===ce&&(ba=0)),Ot(e)}function Kf(e,t){t===0&&(t=kc()),e=ia(e,t),e!==null&&(Ba(e,t),Ot(e))}function Fh(e){var t=e.memoizedState,l=0;t!==null&&(l=t.retryLane),Kf(e,l)}function Ih(e,t){var l=0;switch(e.tag){case 13:var a=e.stateNode,n=e.memoizedState;n!==null&&(l=n.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(s(314))}a!==null&&a.delete(t),Kf(e,l)}function Ph(e,t){return cu(e,t)}var Ni=null,Ta=null,$r=!1,Bi=!1,Fr=!1,Gl=0;function Ot(e){e!==Ta&&e.next===null&&(Ta===null?Ni=Ta=e:Ta=Ta.next=e),Bi=!0,$r||($r=!0,tm())}function xn(e,t){if(!Fr&&Bi){Fr=!0;do for(var l=!1,a=Ni;a!==null;){if(e!==0){var n=a.pendingLanes;if(n===0)var i=0;else{var r=a.suspendedLanes,o=a.pingedLanes;i=(1<<31-nt(42|e)+1)-1,i&=n&~(r&~o),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(l=!0,Ff(a,i))}else i=ce,i=qn(a,a===ye?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||Na(a,i)||(l=!0,Ff(a,i));a=a.next}while(l);Fr=!1}}function em(){Jf()}function Jf(){Bi=$r=!1;var e=0;Gl!==0&&(om()&&(e=Gl),Gl=0);for(var t=wt(),l=null,a=Ni;a!==null;){var n=a.next,i=Wf(a,t);i===0?(a.next=null,l===null?Ni=n:l.next=n,n===null&&(Ta=l)):(l=a,(e!==0||(i&3)!==0)&&(Bi=!0)),a=n}xn(e)}function Wf(e,t){for(var l=e.suspendedLanes,a=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var r=31-nt(i),o=1<<r,h=n[r];h===-1?((o&l)===0||(o&a)!==0)&&(n[r]=A0(o,t)):h<=t&&(e.expiredLanes|=o),i&=~o}if(t=ye,l=ce,l=qn(e,e===t?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,l===0||e===t&&(he===2||he===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&ou(a),e.callbackNode=null,e.callbackPriority=0;if((l&3)===0||Na(e,l)){if(t=l&-l,t===e.callbackPriority)return t;switch(a!==null&&ou(a),du(l)){case 2:case 8:l=Yc;break;case 32:l=Hn;break;case 268435456:l=Lc;break;default:l=Hn}return a=$f.bind(null,e),l=cu(l,a),e.callbackPriority=t,e.callbackNode=l,t}return a!==null&&a!==null&&ou(a),e.callbackPriority=2,e.callbackNode=null,2}function $f(e,t){if(Ge!==0&&Ge!==5)return e.callbackNode=null,e.callbackPriority=0,null;var l=e.callbackNode;if(Oi()&&e.callbackNode!==l)return null;var a=ce;return a=qn(e,e===ye?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(Of(e,a,t),Wf(e,wt()),e.callbackNode!=null&&e.callbackNode===l?$f.bind(null,e):null)}function Ff(e,t){if(Oi())return null;Of(e,t,!0)}function tm(){fm(function(){(de&6)!==0?cu(Hc,em):Jf()})}function Ir(){return Gl===0&&(Gl=qc()),Gl}function If(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Vn(""+e)}function Pf(e,t){var l=t.ownerDocument.createElement("input");return l.name=t.name,l.value=t.value,e.id&&l.setAttribute("form",e.id),t.parentNode.insertBefore(l,t),e=new FormData(e),l.parentNode.removeChild(l),e}function lm(e,t,l,a,n){if(t==="submit"&&l&&l.stateNode===n){var i=If((n[$e]||null).action),r=a.submitter;r&&(t=(t=r[$e]||null)?If(t.formAction):r.getAttribute("formAction"),t!==null&&(i=t,r=null));var o=new Wn("action","action",null,a,n);e.push({event:o,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Gl!==0){var h=r?Pf(n,r):new FormData(n);xr(l,{pending:!0,data:h,method:n.method,action:i},null,h)}}else typeof i=="function"&&(o.preventDefault(),h=r?Pf(n,r):new FormData(n),xr(l,{pending:!0,data:h,method:n.method,action:i},i,h))},currentTarget:n}]})}}for(var Pr=0;Pr<Hu.length;Pr++){var ec=Hu[Pr],am=ec.toLowerCase(),nm=ec[0].toUpperCase()+ec.slice(1);jt(am,"on"+nm)}jt(Mo,"onAnimationEnd"),jt(Oo,"onAnimationIteration"),jt(No,"onAnimationStart"),jt("dblclick","onDoubleClick"),jt("focusin","onFocus"),jt("focusout","onBlur"),jt(Sh,"onTransitionRun"),jt(jh,"onTransitionStart"),jt(zh,"onTransitionCancel"),jt(Bo,"onTransitionEnd"),Wl("onMouseEnter",["mouseout","mouseover"]),Wl("onMouseLeave",["mouseout","mouseover"]),Wl("onPointerEnter",["pointerout","pointerover"]),Wl("onPointerLeave",["pointerout","pointerover"]),Al("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Al("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Al("onBeforeInput",["compositionend","keypress","textInput","paste"]),Al("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Al("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Al("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),im=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(yn));function ed(e,t){t=(t&4)!==0;for(var l=0;l<e.length;l++){var a=e[l],n=a.event;a=a.listeners;e:{var i=void 0;if(t)for(var r=a.length-1;0<=r;r--){var o=a[r],h=o.instance,z=o.currentTarget;if(o=o.listener,h!==i&&n.isPropagationStopped())break e;i=o,n.currentTarget=z;try{i(n)}catch(D){Si(D)}n.currentTarget=null,i=h}else for(r=0;r<a.length;r++){if(o=a[r],h=o.instance,z=o.currentTarget,o=o.listener,h!==i&&n.isPropagationStopped())break e;i=o,n.currentTarget=z;try{i(n)}catch(D){Si(D)}n.currentTarget=null,i=h}}}}function re(e,t){var l=t[hu];l===void 0&&(l=t[hu]=new Set);var a=e+"__bubble";l.has(a)||(td(t,e,2,!1),l.add(a))}function tc(e,t,l){var a=0;t&&(a|=4),td(l,e,a,t)}var _i="_reactListening"+Math.random().toString(36).slice(2);function lc(e){if(!e[_i]){e[_i]=!0,Zc.forEach(function(l){l!=="selectionchange"&&(im.has(l)||tc(l,!1,e),tc(l,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[_i]||(t[_i]=!0,tc("selectionchange",!1,t))}}function td(e,t,l,a){switch(Td(t)){case 2:var n=Om;break;case 8:n=Nm;break;default:n=gc}l=n.bind(null,t,l,e),n=void 0,!Eu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),a?n!==void 0?e.addEventListener(t,l,{capture:!0,passive:n}):e.addEventListener(t,l,!0):n!==void 0?e.addEventListener(t,l,{passive:n}):e.addEventListener(t,l,!1)}function ac(e,t,l,a,n){var i=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var r=a.tag;if(r===3||r===4){var o=a.stateNode.containerInfo;if(o===n)break;if(r===4)for(r=a.return;r!==null;){var h=r.tag;if((h===3||h===4)&&r.stateNode.containerInfo===n)return;r=r.return}for(;o!==null;){if(r=Zl(o),r===null)return;if(h=r.tag,h===5||h===6||h===26||h===27){a=i=r;continue e}o=o.parentNode}}a=a.return}uo(function(){var z=i,D=ju(l),N=[];e:{var E=_o.get(e);if(E!==void 0){var T=Wn,I=e;switch(e){case"keypress":if(Kn(l)===0)break e;case"keydown":case"keyup":T=P0;break;case"focusin":I="focus",T=Cu;break;case"focusout":I="blur",T=Cu;break;case"beforeblur":case"afterblur":T=Cu;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=oo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=k0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=lh;break;case Mo:case Oo:case No:T=Q0;break;case Bo:T=nh;break;case"scroll":case"scrollend":T=L0;break;case"wheel":T=uh;break;case"copy":case"cut":case"paste":T=Z0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=fo;break;case"toggle":case"beforetoggle":T=ch}var J=(t&4)!==0,ge=!J&&(e==="scroll"||e==="scrollend"),y=J?E!==null?E+"Capture":null:E;J=[];for(var x=z,j;x!==null;){var O=x;if(j=O.stateNode,O=O.tag,O!==5&&O!==26&&O!==27||j===null||y===null||(O=Ha(x,y),O!=null&&J.push(bn(x,O,j))),ge)break;x=x.return}0<J.length&&(E=new T(E,I,null,l,D),N.push({event:E,listeners:J}))}}if((t&7)===0){e:{if(E=e==="mouseover"||e==="pointerover",T=e==="mouseout"||e==="pointerout",E&&l!==Su&&(I=l.relatedTarget||l.fromElement)&&(Zl(I)||I[Vl]))break e;if((T||E)&&(E=D.window===D?D:(E=D.ownerDocument)?E.defaultView||E.parentWindow:window,T?(I=l.relatedTarget||l.toElement,T=z,I=I?Zl(I):null,I!==null&&(ge=p(I),J=I.tag,I!==ge||J!==5&&J!==27&&J!==6)&&(I=null)):(T=null,I=z),T!==I)){if(J=oo,O="onMouseLeave",y="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(J=fo,O="onPointerLeave",y="onPointerEnter",x="pointer"),ge=T==null?E:Ua(T),j=I==null?E:Ua(I),E=new J(O,x+"leave",T,l,D),E.target=ge,E.relatedTarget=j,O=null,Zl(D)===z&&(J=new J(y,x+"enter",I,l,D),J.target=j,J.relatedTarget=ge,O=J),ge=O,T&&I)t:{for(J=T,y=I,x=0,j=J;j;j=Aa(j))x++;for(j=0,O=y;O;O=Aa(O))j++;for(;0<x-j;)J=Aa(J),x--;for(;0<j-x;)y=Aa(y),j--;for(;x--;){if(J===y||y!==null&&J===y.alternate)break t;J=Aa(J),y=Aa(y)}J=null}else J=null;T!==null&&ld(N,E,T,J,!1),I!==null&&ge!==null&&ld(N,ge,I,J,!0)}}e:{if(E=z?Ua(z):window,T=E.nodeName&&E.nodeName.toLowerCase(),T==="select"||T==="input"&&E.type==="file")var G=bo;else if(xo(E))if(So)G=xh;else{G=gh;var ie=ph}else T=E.nodeName,!T||T.toLowerCase()!=="input"||E.type!=="checkbox"&&E.type!=="radio"?z&&bu(z.elementType)&&(G=bo):G=vh;if(G&&(G=G(e,z))){yo(N,G,l,D);break e}ie&&ie(e,E,z),e==="focusout"&&z&&E.type==="number"&&z.memoizedProps.value!=null&&yu(E,"number",E.value)}switch(ie=z?Ua(z):window,e){case"focusin":(xo(ie)||ie.contentEditable==="true")&&(la=ie,Bu=z,Va=null);break;case"focusout":Va=Bu=la=null;break;case"mousedown":_u=!0;break;case"contextmenu":case"mouseup":case"dragend":_u=!1,Ro(N,l,D);break;case"selectionchange":if(bh)break;case"keydown":case"keyup":Ro(N,l,D)}var Q;if(Du)e:{switch(e){case"compositionstart":var $="onCompositionStart";break e;case"compositionend":$="onCompositionEnd";break e;case"compositionupdate":$="onCompositionUpdate";break e}$=void 0}else ta?go(e,l)&&($="onCompositionEnd"):e==="keydown"&&l.keyCode===229&&($="onCompositionStart");$&&(ho&&l.locale!=="ko"&&(ta||$!=="onCompositionStart"?$==="onCompositionEnd"&&ta&&(Q=ro()):(tl=D,Tu="value"in tl?tl.value:tl.textContent,ta=!0)),ie=Ui(z,$),0<ie.length&&($=new so($,e,null,l,D),N.push({event:$,listeners:ie}),Q?$.data=Q:(Q=vo(l),Q!==null&&($.data=Q)))),(Q=sh?fh(e,l):dh(e,l))&&($=Ui(z,"onBeforeInput"),0<$.length&&(ie=new so("onBeforeInput","beforeinput",null,l,D),N.push({event:ie,listeners:$}),ie.data=Q)),lm(N,e,z,l,D)}ed(N,t)})}function bn(e,t,l){return{instance:e,listener:t,currentTarget:l}}function Ui(e,t){for(var l=t+"Capture",a=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Ha(e,l),n!=null&&a.unshift(bn(e,n,i)),n=Ha(e,t),n!=null&&a.push(bn(e,n,i))),e.tag===3)return a;e=e.return}return[]}function Aa(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function ld(e,t,l,a,n){for(var i=t._reactName,r=[];l!==null&&l!==a;){var o=l,h=o.alternate,z=o.stateNode;if(o=o.tag,h!==null&&h===a)break;o!==5&&o!==26&&o!==27||z===null||(h=z,n?(z=Ha(l,i),z!=null&&r.unshift(bn(l,z,h))):n||(z=Ha(l,i),z!=null&&r.push(bn(l,z,h)))),l=l.return}r.length!==0&&e.push({event:t,listeners:r})}var um=/\r\n?/g,rm=/\u0000|\uFFFD/g;function ad(e){return(typeof e=="string"?e:""+e).replace(um,`
`).replace(rm,"")}function nd(e,t){return t=ad(t),ad(e)===t}function Hi(){}function pe(e,t,l,a,n,i){switch(l){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||Il(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&Il(e,""+a);break;case"className":Gn(e,"class",a);break;case"tabIndex":Gn(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Gn(e,l,a);break;case"style":no(e,a,i);break;case"data":if(t!=="object"){Gn(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||l!=="href")){e.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=Vn(""+a),e.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(l==="formAction"?(t!=="input"&&pe(e,t,"name",n.name,n,null),pe(e,t,"formEncType",n.formEncType,n,null),pe(e,t,"formMethod",n.formMethod,n,null),pe(e,t,"formTarget",n.formTarget,n,null)):(pe(e,t,"encType",n.encType,n,null),pe(e,t,"method",n.method,n,null),pe(e,t,"target",n.target,n,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=Vn(""+a),e.setAttribute(l,a);break;case"onClick":a!=null&&(e.onclick=Hi);break;case"onScroll":a!=null&&re("scroll",e);break;case"onScrollEnd":a!=null&&re("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(s(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(s(60));e.innerHTML=l}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}l=Vn(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""+a):e.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""):e.removeAttribute(l);break;case"capture":case"download":a===!0?e.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,a):e.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(l,a):e.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(l):e.setAttribute(l,a);break;case"popover":re("beforetoggle",e),re("toggle",e),kn(e,"popover",a);break;case"xlinkActuate":Bt(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Bt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Bt(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Bt(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Bt(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Bt(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Bt(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Bt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Bt(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":kn(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=H0.get(l)||l,kn(e,l,a))}}function nc(e,t,l,a,n,i){switch(l){case"style":no(e,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(s(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(s(60));e.innerHTML=l}}break;case"children":typeof a=="string"?Il(e,a):(typeof a=="number"||typeof a=="bigint")&&Il(e,""+a);break;case"onScroll":a!=null&&re("scroll",e);break;case"onScrollEnd":a!=null&&re("scrollend",e);break;case"onClick":a!=null&&(e.onclick=Hi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Kc.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(n=l.endsWith("Capture"),t=l.slice(2,n?l.length-7:void 0),i=e[$e]||null,i=i!=null?i[l]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof a=="function")){typeof i!="function"&&i!==null&&(l in e?e[l]=null:e.hasAttribute(l)&&e.removeAttribute(l)),e.addEventListener(t,a,n);break e}l in e?e[l]=a:a===!0?e.setAttribute(l,""):kn(e,l,a)}}}function Xe(e,t,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":re("error",e),re("load",e);var a=!1,n=!1,i;for(i in l)if(l.hasOwnProperty(i)){var r=l[i];if(r!=null)switch(i){case"src":a=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:pe(e,t,i,r,l,null)}}n&&pe(e,t,"srcSet",l.srcSet,l,null),a&&pe(e,t,"src",l.src,l,null);return;case"input":re("invalid",e);var o=i=r=n=null,h=null,z=null;for(a in l)if(l.hasOwnProperty(a)){var D=l[a];if(D!=null)switch(a){case"name":n=D;break;case"type":r=D;break;case"checked":h=D;break;case"defaultChecked":z=D;break;case"value":i=D;break;case"defaultValue":o=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(s(137,t));break;default:pe(e,t,a,D,l,null)}}eo(e,i,o,h,z,r,n,!1),Xn(e);return;case"select":re("invalid",e),a=r=i=null;for(n in l)if(l.hasOwnProperty(n)&&(o=l[n],o!=null))switch(n){case"value":i=o;break;case"defaultValue":r=o;break;case"multiple":a=o;default:pe(e,t,n,o,l,null)}t=i,l=r,e.multiple=!!a,t!=null?Fl(e,!!a,t,!1):l!=null&&Fl(e,!!a,l,!0);return;case"textarea":re("invalid",e),i=n=a=null;for(r in l)if(l.hasOwnProperty(r)&&(o=l[r],o!=null))switch(r){case"value":a=o;break;case"defaultValue":n=o;break;case"children":i=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(s(91));break;default:pe(e,t,r,o,l,null)}lo(e,a,n,i),Xn(e);return;case"option":for(h in l)if(l.hasOwnProperty(h)&&(a=l[h],a!=null))switch(h){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:pe(e,t,h,a,l,null)}return;case"dialog":re("beforetoggle",e),re("toggle",e),re("cancel",e),re("close",e);break;case"iframe":case"object":re("load",e);break;case"video":case"audio":for(a=0;a<yn.length;a++)re(yn[a],e);break;case"image":re("error",e),re("load",e);break;case"details":re("toggle",e);break;case"embed":case"source":case"link":re("error",e),re("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(z in l)if(l.hasOwnProperty(z)&&(a=l[z],a!=null))switch(z){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:pe(e,t,z,a,l,null)}return;default:if(bu(t)){for(D in l)l.hasOwnProperty(D)&&(a=l[D],a!==void 0&&nc(e,t,D,a,l,void 0));return}}for(o in l)l.hasOwnProperty(o)&&(a=l[o],a!=null&&pe(e,t,o,a,l,null))}function cm(e,t,l,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,r=null,o=null,h=null,z=null,D=null;for(T in l){var N=l[T];if(l.hasOwnProperty(T)&&N!=null)switch(T){case"checked":break;case"value":break;case"defaultValue":h=N;default:a.hasOwnProperty(T)||pe(e,t,T,null,a,N)}}for(var E in a){var T=a[E];if(N=l[E],a.hasOwnProperty(E)&&(T!=null||N!=null))switch(E){case"type":i=T;break;case"name":n=T;break;case"checked":z=T;break;case"defaultChecked":D=T;break;case"value":r=T;break;case"defaultValue":o=T;break;case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(137,t));break;default:T!==N&&pe(e,t,E,T,a,N)}}xu(e,r,o,h,z,D,i,n);return;case"select":T=r=o=E=null;for(i in l)if(h=l[i],l.hasOwnProperty(i)&&h!=null)switch(i){case"value":break;case"multiple":T=h;default:a.hasOwnProperty(i)||pe(e,t,i,null,a,h)}for(n in a)if(i=a[n],h=l[n],a.hasOwnProperty(n)&&(i!=null||h!=null))switch(n){case"value":E=i;break;case"defaultValue":o=i;break;case"multiple":r=i;default:i!==h&&pe(e,t,n,i,a,h)}t=o,l=r,a=T,E!=null?Fl(e,!!l,E,!1):!!a!=!!l&&(t!=null?Fl(e,!!l,t,!0):Fl(e,!!l,l?[]:"",!1));return;case"textarea":T=E=null;for(o in l)if(n=l[o],l.hasOwnProperty(o)&&n!=null&&!a.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:pe(e,t,o,null,a,n)}for(r in a)if(n=a[r],i=l[r],a.hasOwnProperty(r)&&(n!=null||i!=null))switch(r){case"value":E=n;break;case"defaultValue":T=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(s(91));break;default:n!==i&&pe(e,t,r,n,a,i)}to(e,E,T);return;case"option":for(var I in l)if(E=l[I],l.hasOwnProperty(I)&&E!=null&&!a.hasOwnProperty(I))switch(I){case"selected":e.selected=!1;break;default:pe(e,t,I,null,a,E)}for(h in a)if(E=a[h],T=l[h],a.hasOwnProperty(h)&&E!==T&&(E!=null||T!=null))switch(h){case"selected":e.selected=E&&typeof E!="function"&&typeof E!="symbol";break;default:pe(e,t,h,E,a,T)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var J in l)E=l[J],l.hasOwnProperty(J)&&E!=null&&!a.hasOwnProperty(J)&&pe(e,t,J,null,a,E);for(z in a)if(E=a[z],T=l[z],a.hasOwnProperty(z)&&E!==T&&(E!=null||T!=null))switch(z){case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(137,t));break;default:pe(e,t,z,E,a,T)}return;default:if(bu(t)){for(var ge in l)E=l[ge],l.hasOwnProperty(ge)&&E!==void 0&&!a.hasOwnProperty(ge)&&nc(e,t,ge,void 0,a,E);for(D in a)E=a[D],T=l[D],!a.hasOwnProperty(D)||E===T||E===void 0&&T===void 0||nc(e,t,D,E,a,T);return}}for(var y in l)E=l[y],l.hasOwnProperty(y)&&E!=null&&!a.hasOwnProperty(y)&&pe(e,t,y,null,a,E);for(N in a)E=a[N],T=l[N],!a.hasOwnProperty(N)||E===T||E==null&&T==null||pe(e,t,N,E,a,T)}var ic=null,uc=null;function Yi(e){return e.nodeType===9?e:e.ownerDocument}function id(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ud(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function rc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var cc=null;function om(){var e=window.event;return e&&e.type==="popstate"?e===cc?!1:(cc=e,!0):(cc=null,!1)}var rd=typeof setTimeout=="function"?setTimeout:void 0,sm=typeof clearTimeout=="function"?clearTimeout:void 0,cd=typeof Promise=="function"?Promise:void 0,fm=typeof queueMicrotask=="function"?queueMicrotask:typeof cd<"u"?function(e){return cd.resolve(null).then(e).catch(dm)}:rd;function dm(e){setTimeout(function(){throw e})}function vl(e){return e==="head"}function od(e,t){var l=t,a=0,n=0;do{var i=l.nextSibling;if(e.removeChild(l),i&&i.nodeType===8)if(l=i.data,l==="/$"){if(0<a&&8>a){l=a;var r=e.ownerDocument;if(l&1&&Sn(r.documentElement),l&2&&Sn(r.body),l&4)for(l=r.head,Sn(l),r=l.firstChild;r;){var o=r.nextSibling,h=r.nodeName;r[_a]||h==="SCRIPT"||h==="STYLE"||h==="LINK"&&r.rel.toLowerCase()==="stylesheet"||l.removeChild(r),r=o}}if(n===0){e.removeChild(i),Rn(t);return}n--}else l==="$"||l==="$?"||l==="$!"?n++:a=l.charCodeAt(0)-48;else a=0;l=i}while(l);Rn(t)}function oc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var l=t;switch(t=t.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":oc(l),mu(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}e.removeChild(l)}}function hm(e,t,l,a){for(;e.nodeType===1;){var n=l;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[_a])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Et(e.nextSibling),e===null)break}return null}function mm(e,t,l){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!l||(e=Et(e.nextSibling),e===null))return null;return e}function sc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function pm(e,t){var l=e.ownerDocument;if(e.data!=="$?"||l.readyState==="complete")t();else{var a=function(){t(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Et(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var fc=null;function sd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="$"||l==="$!"||l==="$?"){if(t===0)return e;t--}else l==="/$"&&t++}e=e.previousSibling}return null}function fd(e,t,l){switch(t=Yi(l),e){case"html":if(e=t.documentElement,!e)throw Error(s(452));return e;case"head":if(e=t.head,!e)throw Error(s(453));return e;case"body":if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Sn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);mu(e)}var St=new Map,dd=new Set;function Li(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Jt=Y.d;Y.d={f:gm,r:vm,D:xm,C:ym,L:bm,m:Sm,X:zm,S:jm,M:Em};function gm(){var e=Jt.f(),t=Di();return e||t}function vm(e){var t=Kl(e);t!==null&&t.tag===5&&t.type==="form"?Ms(t):Jt.r(e)}var wa=typeof document>"u"?null:document;function hd(e,t,l){var a=wa;if(a&&typeof t=="string"&&t){var n=mt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof l=="string"&&(n+='[crossorigin="'+l+'"]'),dd.has(n)||(dd.add(n),e={rel:e,crossOrigin:l,href:t},a.querySelector(n)===null&&(t=a.createElement("link"),Xe(t,"link",e),He(t),a.head.appendChild(t)))}}function xm(e){Jt.D(e),hd("dns-prefetch",e,null)}function ym(e,t){Jt.C(e,t),hd("preconnect",e,t)}function bm(e,t,l){Jt.L(e,t,l);var a=wa;if(a&&e&&t){var n='link[rel="preload"][as="'+mt(t)+'"]';t==="image"&&l&&l.imageSrcSet?(n+='[imagesrcset="'+mt(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(n+='[imagesizes="'+mt(l.imageSizes)+'"]')):n+='[href="'+mt(e)+'"]';var i=n;switch(t){case"style":i=Ca(e);break;case"script":i=Ra(e)}St.has(i)||(e=A({rel:"preload",href:t==="image"&&l&&l.imageSrcSet?void 0:e,as:t},l),St.set(i,e),a.querySelector(n)!==null||t==="style"&&a.querySelector(jn(i))||t==="script"&&a.querySelector(zn(i))||(t=a.createElement("link"),Xe(t,"link",e),He(t),a.head.appendChild(t)))}}function Sm(e,t){Jt.m(e,t);var l=wa;if(l&&e){var a=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+mt(a)+'"][href="'+mt(e)+'"]',i=n;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Ra(e)}if(!St.has(i)&&(e=A({rel:"modulepreload",href:e},t),St.set(i,e),l.querySelector(n)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(zn(i)))return}a=l.createElement("link"),Xe(a,"link",e),He(a),l.head.appendChild(a)}}}function jm(e,t,l){Jt.S(e,t,l);var a=wa;if(a&&e){var n=Jl(a).hoistableStyles,i=Ca(e);t=t||"default";var r=n.get(i);if(!r){var o={loading:0,preload:null};if(r=a.querySelector(jn(i)))o.loading=5;else{e=A({rel:"stylesheet",href:e,"data-precedence":t},l),(l=St.get(i))&&dc(e,l);var h=r=a.createElement("link");He(h),Xe(h,"link",e),h._p=new Promise(function(z,D){h.onload=z,h.onerror=D}),h.addEventListener("load",function(){o.loading|=1}),h.addEventListener("error",function(){o.loading|=2}),o.loading|=4,qi(r,t,a)}r={type:"stylesheet",instance:r,count:1,state:o},n.set(i,r)}}}function zm(e,t){Jt.X(e,t);var l=wa;if(l&&e){var a=Jl(l).hoistableScripts,n=Ra(e),i=a.get(n);i||(i=l.querySelector(zn(n)),i||(e=A({src:e,async:!0},t),(t=St.get(n))&&hc(e,t),i=l.createElement("script"),He(i),Xe(i,"link",e),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function Em(e,t){Jt.M(e,t);var l=wa;if(l&&e){var a=Jl(l).hoistableScripts,n=Ra(e),i=a.get(n);i||(i=l.querySelector(zn(n)),i||(e=A({src:e,async:!0,type:"module"},t),(t=St.get(n))&&hc(e,t),i=l.createElement("script"),He(i),Xe(i,"link",e),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function md(e,t,l,a){var n=(n=te.current)?Li(n):null;if(!n)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(t=Ca(l.href),l=Jl(n).hoistableStyles,a=l.get(t),a||(a={type:"style",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){e=Ca(l.href);var i=Jl(n).hoistableStyles,r=i.get(e);if(r||(n=n.ownerDocument||n,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,r),(i=n.querySelector(jn(e)))&&!i._p&&(r.instance=i,r.state.loading=5),St.has(e)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},St.set(e,l),i||Tm(n,e,l,r.state))),t&&a===null)throw Error(s(528,""));return r}if(t&&a!==null)throw Error(s(529,""));return null;case"script":return t=l.async,l=l.src,typeof l=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ra(l),l=Jl(n).hoistableScripts,a=l.get(t),a||(a={type:"script",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Ca(e){return'href="'+mt(e)+'"'}function jn(e){return'link[rel="stylesheet"]['+e+"]"}function pd(e){return A({},e,{"data-precedence":e.precedence,precedence:null})}function Tm(e,t,l,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),Xe(t,"link",l),He(t),e.head.appendChild(t))}function Ra(e){return'[src="'+mt(e)+'"]'}function zn(e){return"script[async]"+e}function gd(e,t,l){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+mt(l.href)+'"]');if(a)return t.instance=a,He(a),a;var n=A({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),He(a),Xe(a,"style",n),qi(a,l.precedence,e),t.instance=a;case"stylesheet":n=Ca(l.href);var i=e.querySelector(jn(n));if(i)return t.state.loading|=4,t.instance=i,He(i),i;a=pd(l),(n=St.get(n))&&dc(a,n),i=(e.ownerDocument||e).createElement("link"),He(i);var r=i;return r._p=new Promise(function(o,h){r.onload=o,r.onerror=h}),Xe(i,"link",a),t.state.loading|=4,qi(i,l.precedence,e),t.instance=i;case"script":return i=Ra(l.src),(n=e.querySelector(zn(i)))?(t.instance=n,He(n),n):(a=l,(n=St.get(i))&&(a=A({},l),hc(a,n)),e=e.ownerDocument||e,n=e.createElement("script"),He(n),Xe(n,"link",a),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,qi(a,l.precedence,e));return t.instance}function qi(e,t,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=a.length?a[a.length-1]:null,i=n,r=0;r<a.length;r++){var o=a[r];if(o.dataset.precedence===t)i=o;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=l.nodeType===9?l.head:l,t.insertBefore(e,t.firstChild))}function dc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function hc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var ki=null;function vd(e,t,l){if(ki===null){var a=new Map,n=ki=new Map;n.set(l,a)}else n=ki,a=n.get(l),a||(a=new Map,n.set(l,a));if(a.has(e))return a;for(a.set(e,null),l=l.getElementsByTagName(e),n=0;n<l.length;n++){var i=l[n];if(!(i[_a]||i[Ze]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var r=i.getAttribute(t)||"";r=e+r;var o=a.get(r);o?o.push(i):a.set(r,[i])}}return a}function xd(e,t,l){e=e.ownerDocument||e,e.head.insertBefore(l,t==="title"?e.querySelector("head > title"):null)}function Am(e,t,l){if(l===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function yd(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var En=null;function wm(){}function Cm(e,t,l){if(En===null)throw Error(s(475));var a=En;if(t.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var n=Ca(l.href),i=e.querySelector(jn(n));if(i){e=i._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(a.count++,a=Gi.bind(a),e.then(a,a)),t.state.loading|=4,t.instance=i,He(i);return}i=e.ownerDocument||e,l=pd(l),(n=St.get(n))&&dc(l,n),i=i.createElement("link"),He(i);var r=i;r._p=new Promise(function(o,h){r.onload=o,r.onerror=h}),Xe(i,"link",l),t.instance=i}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(a.count++,t=Gi.bind(a),e.addEventListener("load",t),e.addEventListener("error",t))}}function Rm(){if(En===null)throw Error(s(475));var e=En;return e.stylesheets&&e.count===0&&mc(e,e.stylesheets),0<e.count?function(t){var l=setTimeout(function(){if(e.stylesheets&&mc(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(l)}}:null}function Gi(){if(this.count--,this.count===0){if(this.stylesheets)mc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Xi=null;function mc(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Xi=new Map,t.forEach(Dm,e),Xi=null,Gi.call(e))}function Dm(e,t){if(!(t.state.loading&4)){var l=Xi.get(e);if(l)var a=l.get(null);else{l=new Map,Xi.set(e,l);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var r=n[i];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(l.set(r.dataset.precedence,r),a=r)}a&&l.set(null,a)}n=t.instance,r=n.getAttribute("data-precedence"),i=l.get(r)||a,i===a&&l.set(null,n),l.set(r,n),this.count++,a=Gi.bind(this),n.addEventListener("load",a),n.addEventListener("error",a),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var Tn={$$typeof:le,Provider:null,Consumer:null,_currentValue:F,_currentValue2:F,_threadCount:0};function Mm(e,t,l,a,n,i,r,o){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=su(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=su(0),this.hiddenUpdates=su(null),this.identifierPrefix=a,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function bd(e,t,l,a,n,i,r,o,h,z,D,N){return e=new Mm(e,t,l,r,o,h,z,N),t=1,i===!0&&(t|=24),i=ut(3,null,null,t),e.current=i,i.stateNode=e,t=Wu(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:a,isDehydrated:l,cache:t},Pu(i),e}function Sd(e){return e?(e=ua,e):ua}function jd(e,t,l,a,n,i){n=Sd(n),a.context===null?a.context=n:a.pendingContext=n,a=nl(t),a.payload={element:l},i=i===void 0?null:i,i!==null&&(a.callback=i),l=il(e,a,t),l!==null&&(ft(l,e,t),en(l,e,t))}function zd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var l=e.retryLane;e.retryLane=l!==0&&l<t?l:t}}function pc(e,t){zd(e,t),(e=e.alternate)&&zd(e,t)}function Ed(e){if(e.tag===13){var t=ia(e,67108864);t!==null&&ft(t,e,67108864),pc(e,67108864)}}var Qi=!0;function Om(e,t,l,a){var n=M.T;M.T=null;var i=Y.p;try{Y.p=2,gc(e,t,l,a)}finally{Y.p=i,M.T=n}}function Nm(e,t,l,a){var n=M.T;M.T=null;var i=Y.p;try{Y.p=8,gc(e,t,l,a)}finally{Y.p=i,M.T=n}}function gc(e,t,l,a){if(Qi){var n=vc(a);if(n===null)ac(e,t,a,Vi,l),Ad(e,a);else if(_m(n,e,t,l,a))a.stopPropagation();else if(Ad(e,a),t&4&&-1<Bm.indexOf(e)){for(;n!==null;){var i=Kl(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var r=Tl(i.pendingLanes);if(r!==0){var o=i;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var h=1<<31-nt(r);o.entanglements[1]|=h,r&=~h}Ot(i),(de&6)===0&&(Ci=wt()+500,xn(0))}}break;case 13:o=ia(i,2),o!==null&&ft(o,i,2),Di(),pc(i,2)}if(i=vc(a),i===null&&ac(e,t,a,Vi,l),i===n)break;n=i}n!==null&&a.stopPropagation()}else ac(e,t,a,null,l)}}function vc(e){return e=ju(e),xc(e)}var Vi=null;function xc(e){if(Vi=null,e=Zl(e),e!==null){var t=p(e);if(t===null)e=null;else{var l=t.tag;if(l===13){if(e=b(t),e!==null)return e;e=null}else if(l===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Vi=e,null}function Td(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(y0()){case Hc:return 2;case Yc:return 8;case Hn:case b0:return 32;case Lc:return 268435456;default:return 32}default:return 32}}var yc=!1,xl=null,yl=null,bl=null,An=new Map,wn=new Map,Sl=[],Bm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ad(e,t){switch(e){case"focusin":case"focusout":xl=null;break;case"dragenter":case"dragleave":yl=null;break;case"mouseover":case"mouseout":bl=null;break;case"pointerover":case"pointerout":An.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":wn.delete(t.pointerId)}}function Cn(e,t,l,a,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:l,eventSystemFlags:a,nativeEvent:i,targetContainers:[n]},t!==null&&(t=Kl(t),t!==null&&Ed(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function _m(e,t,l,a,n){switch(t){case"focusin":return xl=Cn(xl,e,t,l,a,n),!0;case"dragenter":return yl=Cn(yl,e,t,l,a,n),!0;case"mouseover":return bl=Cn(bl,e,t,l,a,n),!0;case"pointerover":var i=n.pointerId;return An.set(i,Cn(An.get(i)||null,e,t,l,a,n)),!0;case"gotpointercapture":return i=n.pointerId,wn.set(i,Cn(wn.get(i)||null,e,t,l,a,n)),!0}return!1}function wd(e){var t=Zl(e.target);if(t!==null){var l=p(t);if(l!==null){if(t=l.tag,t===13){if(t=b(l),t!==null){e.blockedOn=t,C0(e.priority,function(){if(l.tag===13){var a=st();a=fu(a);var n=ia(l,a);n!==null&&ft(n,l,a),pc(l,a)}});return}}else if(t===3&&l.stateNode.current.memoizedState.isDehydrated){e.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Zi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var l=vc(e.nativeEvent);if(l===null){l=e.nativeEvent;var a=new l.constructor(l.type,l);Su=a,l.target.dispatchEvent(a),Su=null}else return t=Kl(l),t!==null&&Ed(t),e.blockedOn=l,!1;t.shift()}return!0}function Cd(e,t,l){Zi(e)&&l.delete(t)}function Um(){yc=!1,xl!==null&&Zi(xl)&&(xl=null),yl!==null&&Zi(yl)&&(yl=null),bl!==null&&Zi(bl)&&(bl=null),An.forEach(Cd),wn.forEach(Cd)}function Ki(e,t){e.blockedOn===t&&(e.blockedOn=null,yc||(yc=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,Um)))}var Ji=null;function Rd(e){Ji!==e&&(Ji=e,u.unstable_scheduleCallback(u.unstable_NormalPriority,function(){Ji===e&&(Ji=null);for(var t=0;t<e.length;t+=3){var l=e[t],a=e[t+1],n=e[t+2];if(typeof a!="function"){if(xc(a||l)===null)continue;break}var i=Kl(l);i!==null&&(e.splice(t,3),t-=3,xr(i,{pending:!0,data:n,method:l.method,action:a},a,n))}}))}function Rn(e){function t(h){return Ki(h,e)}xl!==null&&Ki(xl,e),yl!==null&&Ki(yl,e),bl!==null&&Ki(bl,e),An.forEach(t),wn.forEach(t);for(var l=0;l<Sl.length;l++){var a=Sl[l];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Sl.length&&(l=Sl[0],l.blockedOn===null);)wd(l),l.blockedOn===null&&Sl.shift();if(l=(e.ownerDocument||e).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var n=l[a],i=l[a+1],r=n[$e]||null;if(typeof i=="function")r||Rd(l);else if(r){var o=null;if(i&&i.hasAttribute("formAction")){if(n=i,r=i[$e]||null)o=r.formAction;else if(xc(n)!==null)continue}else o=r.action;typeof o=="function"?l[a+1]=o:(l.splice(a,3),a-=3),Rd(l)}}}function bc(e){this._internalRoot=e}Wi.prototype.render=bc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var l=t.current,a=st();jd(l,a,e,t,null,null)},Wi.prototype.unmount=bc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;jd(e.current,2,null,e,null,null),Di(),t[Vl]=null}};function Wi(e){this._internalRoot=e}Wi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Qc();e={blockedOn:null,target:e,priority:t};for(var l=0;l<Sl.length&&t!==0&&t<Sl[l].priority;l++);Sl.splice(l,0,e),l===0&&wd(e)}};var Dd=f.version;if(Dd!=="19.1.1")throw Error(s(527,Dd,"19.1.1"));Y.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=S(t),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var Hm={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:M,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $i=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$i.isDisabled&&$i.supportsFiber)try{Oa=$i.inject(Hm),at=$i}catch{}}return Mn.createRoot=function(e,t){if(!m(e))throw Error(s(299));var l=!1,a="",n=Vs,i=Zs,r=Ks,o=null;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(o=t.unstable_transitionCallbacks)),t=bd(e,1,!1,null,null,l,a,n,i,r,o,null),e[Vl]=t.current,lc(e),new bc(t)},Mn.hydrateRoot=function(e,t,l){if(!m(e))throw Error(s(299));var a=!1,n="",i=Vs,r=Zs,o=Ks,h=null,z=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(n=l.identifierPrefix),l.onUncaughtError!==void 0&&(i=l.onUncaughtError),l.onCaughtError!==void 0&&(r=l.onCaughtError),l.onRecoverableError!==void 0&&(o=l.onRecoverableError),l.unstable_transitionCallbacks!==void 0&&(h=l.unstable_transitionCallbacks),l.formState!==void 0&&(z=l.formState)),t=bd(e,1,!0,t,l??null,a,n,i,r,o,h,z),t.context=Sd(null),l=t.current,a=st(),a=fu(a),n=nl(a),n.callback=null,il(l,n,a),l=a,t.current.lanes=l,Ba(t,l),Ot(t),e[Vl]=t.current,lc(e),new Wi(t)},Mn.version="19.1.1",Mn}var qd;function Jm(){if(qd)return zc.exports;qd=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(f){console.error(f)}}return u(),zc.exports=Km(),zc.exports}var Wm=Jm();/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $m=u=>u.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Fm=u=>u.replace(/^([A-Z])|[\s-_]+(\w)/g,(f,d,s)=>s?s.toUpperCase():d.toLowerCase()),kd=u=>{const f=Fm(u);return f.charAt(0).toUpperCase()+f.slice(1)},Fd=(...u)=>u.filter((f,d,s)=>!!f&&f.trim()!==""&&s.indexOf(f)===d).join(" ").trim(),Im=u=>{for(const f in u)if(f.startsWith("aria-")||f==="role"||f==="title")return!0};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Pm={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ep=R.forwardRef(({color:u="currentColor",size:f=24,strokeWidth:d=2,absoluteStrokeWidth:s,className:m="",children:p,iconNode:b,...w},S)=>R.createElement("svg",{ref:S,...Pm,width:f,height:f,stroke:u,strokeWidth:s?Number(d)*24/Number(f):d,className:Fd("lucide",m),...!p&&!Im(w)&&{"aria-hidden":"true"},...w},[...b.map(([v,A])=>R.createElement(v,A)),...Array.isArray(p)?p:[p]]));/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Id=(u,f)=>{const d=R.forwardRef(({className:s,...m},p)=>R.createElement(ep,{ref:p,iconNode:f,className:Fd(`lucide-${$m(kd(u))}`,`lucide-${u}`,s),...m}));return d.displayName=kd(u),d};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tp=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],lp=Id("menu",tp);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ap=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],np=Id("x",ap);function ip(){const[u,f]=R.useState(!1),[d,s]=R.useState(!1);R.useEffect(()=>{const b=()=>{f(window.scrollY>80)};return window.addEventListener("scroll",b),()=>window.removeEventListener("scroll",b)},[]);const m=[{id:"home",label:"Home"},{id:"about",label:"About"},{id:"services",label:"Services"},{id:"projects",label:"Projects"},{id:"footer",label:"Contact"}],p=b=>{const w=document.getElementById(b);w&&w.scrollIntoView({behavior:"smooth"}),s(!1)};return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:`
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
      `}),c.jsx("div",{className:"mobile-overlay",onClick:()=>s(!1)}),c.jsx("nav",{style:{position:"fixed",top:0,width:"100%",zIndex:1e3,padding:u?"0.8rem 0":"1.3rem 0",background:u?"rgba(255,255,255,0.95)":"transparent",backdropFilter:u?"blur(12px)":"none",boxShadow:u?"0 10px 30px rgba(0,0,0,0.12)":"none",transition:"all 0.3s ease"},children:c.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto",padding:"0 1.5rem",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[c.jsx("span",{className:"brand-text",onClick:()=>p("home"),style:{cursor:"pointer"},children:"AAVRC"}),c.jsx("div",{className:"desktop-menu",children:m.map(b=>c.jsx("span",{className:"nav-link",onClick:()=>p(b.id),children:b.label},b.id))}),c.jsx("div",{className:"mobile-menu-btn",onClick:()=>s(!d),children:d?c.jsx(np,{size:28}):c.jsx(lp,{size:28})})]})}),c.jsx("div",{className:"mobile-menu",children:m.map(b=>c.jsx("div",{className:"mobile-nav-link",onClick:()=>p(b.id),children:b.label},b.id))})]})}const up="/assets/hero-DgiGUaTL.mp4",Gd="/assets/hero-DXEkLzQ3.jpg";function rp(){const u=R.useRef(null);R.useEffect(()=>{u.current?.play().catch(()=>{})},[]);const[f,d]=R.useState(""),s="Web Development, AI Solutions & Software Services";R.useEffect(()=>{let p=0;const b=setInterval(()=>{p<=s.length?(d(s.slice(0,p)),p++):clearInterval(b)},50);return()=>clearInterval(b)},[]);const m=p=>{const b=document.getElementById(p);b&&b.scrollIntoView({behavior:"smooth"})};return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:`
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
      `}),c.jsx("section",{id:"home",className:"video-hero",children:c.jsx("video",{ref:u,muted:!0,playsInline:!0,autoPlay:!0,loop:!0,preload:"auto",poster:Gd,children:c.jsx("source",{src:up,type:"video/mp4"})})}),c.jsx("section",{className:"hero-section",children:c.jsx("div",{className:"hero-container",children:c.jsxs("div",{className:"hero-content",children:[c.jsx("div",{className:"hero-left",children:c.jsxs("div",{className:"image-wrapper",children:[c.jsxs("div",{className:"main-image-container image-zoom-container",children:[c.jsx("img",{src:Gd,alt:"AAVRC - Web Development & AI Solutions",className:"main-image zoom-image"}),c.jsx("div",{className:"image-overlay"})]}),c.jsxs("div",{className:"floating-card floating-card-1",children:[c.jsx("span",{className:"floating-icon",children:"⚡"}),c.jsx("span",{className:"floating-text",children:"Fast Delivery"})]}),c.jsxs("div",{className:"floating-card floating-card-2",children:[c.jsx("span",{className:"floating-icon",children:"🔒"}),c.jsx("span",{className:"floating-text",children:"Secure Code"})]}),c.jsxs("div",{className:"floating-card floating-card-3",children:[c.jsx("span",{className:"floating-icon",children:"🎯"}),c.jsx("span",{className:"floating-text",children:"100% Quality"})]})]})}),c.jsxs("div",{className:"hero-right",children:[c.jsx("div",{className:"badge",children:c.jsx("span",{className:"badge-text",children:"🚀 Innovation & Technology"})}),c.jsxs("h1",{className:"hero-title",children:["AAVRC",c.jsx("span",{className:"cursor",children:"|"})]}),c.jsx("div",{className:"hero-subtitle",children:f}),c.jsx("p",{className:"hero-description",children:"We develop comprehensive web applications, websites, employee management systems, digital flipbooks, e-commerce platforms, AI-powered chatbots, machine learning models, intelligent automation systems, and many more innovative solutions to grow your business with cutting-edge technology."}),c.jsxs("div",{className:"cta-buttons",children:[c.jsxs("button",{className:"btn-primary",onClick:()=>m("projects"),children:[c.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:c.jsx("path",{d:"M12 2v20M2 12h20"})}),"View Projects"]}),c.jsxs("button",{className:"btn-secondary",onClick:()=>m("footer"),children:[c.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[c.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),c.jsx("polyline",{points:"22,6 12,13 2,6"})]}),"Get Quote"]})]}),c.jsxs("div",{className:"stats-container",children:[c.jsxs("div",{className:"stat-item",children:[c.jsx("span",{className:"stat-number",children:"50+"}),c.jsx("span",{className:"stat-label",children:"Projects"})]}),c.jsx("div",{className:"stat-divider"}),c.jsxs("div",{className:"stat-item",children:[c.jsx("span",{className:"stat-number",children:"30+"}),c.jsx("span",{className:"stat-label",children:"Happy Clients"})]}),c.jsx("div",{className:"stat-divider"}),c.jsxs("div",{className:"stat-item",children:[c.jsx("span",{className:"stat-number",children:"5+"}),c.jsx("span",{className:"stat-label",children:"Years Exp"})]})]})]})]})})})]})}const cp="/assets/about1-jRjZFVG4.jpg",op="/assets/about2-B6T6-41Q.jpg",sp="/assets/about3-Co1SnorY.jpg";function fp(){return c.jsx("section",{style:C.aboutSection,id:"about",children:c.jsxs("div",{style:C.container,children:[c.jsxs("div",{style:C.aboutGrid,children:[c.jsxs("div",{style:C.contentSection,children:[c.jsx("div",{style:C.badge,children:c.jsx("span",{style:C.badgeText,children:"About Us"})}),c.jsx("h2",{style:C.mainTitle,children:"YOUR VISION. OUR TECHNOLOGY"}),c.jsx("div",{style:C.divider}),c.jsx("p",{style:C.subtitle,children:"We Engineer Solutions That Transform Businesses"}),c.jsx("p",{style:C.description,children:"AAVRC specializes in comprehensive web development solutions including custom web applications, professional websites, employee management systems with attendance and salary handling, digital flipbook applications, e-commerce platforms, AI-powered chatbots, machine learning models, computer vision systems, natural language processing solutions, predictive analytics, and intelligent automation systems."}),c.jsx("p",{style:C.description,children:"We are committed to delivering high-quality, scalable, and innovative solutions that help businesses grow and succeed in the digital world. Our team combines creativity with technical expertise to build products that make a difference."}),c.jsxs("div",{style:C.featuresGrid,children:[c.jsxs("div",{style:C.featureItem,children:[c.jsx("div",{style:C.checkIcon,children:"✓"}),c.jsx("span",{children:"Complete web application development"})]}),c.jsxs("div",{style:C.featureItem,children:[c.jsx("div",{style:C.checkIcon,children:"✓"}),c.jsx("span",{children:"AI-powered chatbots and virtual assistants"})]}),c.jsxs("div",{style:C.featureItem,children:[c.jsx("div",{style:C.checkIcon,children:"✓"}),c.jsx("span",{children:"Employee management systems"})]}),c.jsxs("div",{style:C.featureItem,children:[c.jsx("div",{style:C.checkIcon,children:"✓"}),c.jsx("span",{children:"Machine learning models"})]}),c.jsxs("div",{style:C.featureItem,children:[c.jsx("div",{style:C.checkIcon,children:"✓"}),c.jsx("span",{children:"E-commerce platforms"})]}),c.jsxs("div",{style:C.featureItem,children:[c.jsx("div",{style:C.checkIcon,children:"✓"}),c.jsx("span",{children:"24/7 Support & Maintenance"})]})]}),c.jsxs("div",{style:C.ctaButtons,children:[c.jsx("a",{href:"#footer",className:"btn-primary",children:"Get Started"}),c.jsx("a",{href:"#projects",className:"btn-secondary",children:"View Projects"})]})]}),c.jsx("div",{style:C.imageSection,children:c.jsxs("div",{style:C.imagesWrapper,children:[c.jsx("div",{style:C.mainImageContainer,className:"about-image-container",children:c.jsx("img",{src:cp,alt:"About AAVRC",style:C.mainImage,className:"about-zoom-image"})}),c.jsx("div",{style:C.secondaryImageContainer,className:"about-image-container",children:c.jsx("img",{src:op,alt:"Our Team",style:C.secondaryImage,className:"about-zoom-image"})}),c.jsx("div",{style:C.thirdImageContainer,className:"about-image-container",children:c.jsx("img",{src:sp,alt:"Our Work",style:C.thirdImage,className:"about-zoom-image"})}),c.jsxs("div",{style:C.experienceBadge,children:[c.jsx("span",{style:C.expNumber,children:"5+"}),c.jsx("span",{style:C.expText,children:"Years Experience"})]}),c.jsxs("div",{style:C.floatingCard,children:[c.jsx("span",{style:C.floatingIcon,children:"🚀"}),c.jsx("span",{style:C.floatingText,children:"50+ Projects"})]})]})})]}),c.jsx("div",{style:C.profileSection,children:c.jsxs("div",{style:C.profileCard,children:[c.jsx("div",{style:C.profileImg,children:c.jsxs("svg",{width:"80",height:"80",viewBox:"0 0 24 24",fill:"none",stroke:"#ffffff",strokeWidth:"1.5",children:[c.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),c.jsx("circle",{cx:"12",cy:"7",r:"4"})]})}),c.jsxs("div",{style:C.profileInfo,children:[c.jsx("h3",{style:C.profileName,children:"Rajender Chauhan"}),c.jsx("p",{style:C.designation,children:"Company Owner & Lead Developer"})]})]})}),c.jsxs("div",{style:C.skillsSection,children:[c.jsx("h3",{style:C.sectionTitle,children:"Technical Skills & Expertise"}),c.jsxs("div",{style:C.skillsGrid,children:[c.jsxs("div",{style:C.skillCard,className:"skill-card",children:[c.jsxs("div",{style:C.skillHeader,children:[c.jsxs("svg",{style:C.skillIcon,width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",stroke:"#00BCD4",strokeWidth:"2",children:[c.jsx("rect",{x:"2",y:"3",width:"20",height:"14",rx:"2"}),c.jsx("line",{x1:"8",y1:"21",x2:"16",y2:"21"}),c.jsx("line",{x1:"12",y1:"17",x2:"12",y2:"21"})]}),c.jsx("h4",{style:C.skillTitle,children:"Frontend Development"})]}),c.jsxs("ul",{style:C.skillList,children:[c.jsx("li",{style:C.skillItem,children:"React.js & Redux"}),c.jsx("li",{style:C.skillItem,children:"HTML5 & CSS3"}),c.jsx("li",{style:C.skillItem,children:"JavaScript (ES6+)"}),c.jsx("li",{style:C.skillItem,children:"Bootstrap 5"})]})]}),c.jsxs("div",{style:C.skillCard,className:"skill-card",children:[c.jsxs("div",{style:C.skillHeader,children:[c.jsxs("svg",{style:C.skillIcon,width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",stroke:"#00BCD4",strokeWidth:"2",children:[c.jsx("rect",{x:"2",y:"2",width:"20",height:"8",rx:"2"}),c.jsx("rect",{x:"2",y:"14",width:"20",height:"8",rx:"2"}),c.jsx("line",{x1:"6",y1:"6",x2:"6",y2:"6"}),c.jsx("line",{x1:"6",y1:"18",x2:"6",y2:"18"})]}),c.jsx("h4",{style:C.skillTitle,children:"Backend Development"})]}),c.jsxs("ul",{style:C.skillList,children:[c.jsx("li",{style:C.skillItem,children:"Node.js & Express.js"}),c.jsx("li",{style:C.skillItem,children:"MongoDB & Mongoose"}),c.jsx("li",{style:C.skillItem,children:"RESTful APIs"}),c.jsx("li",{style:C.skillItem,children:"QR Code Generation"})]})]}),c.jsxs("div",{style:C.skillCard,className:"skill-card",children:[c.jsxs("div",{style:C.skillHeader,children:[c.jsxs("svg",{style:C.skillIcon,width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",stroke:"#00BCD4",strokeWidth:"2",children:[c.jsx("path",{d:"M12 2a3 3 0 0 0-3 3v4a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"}),c.jsx("path",{d:"M12 22a3 3 0 0 0 3-3v-4a3 3 0 0 0-6 0v4a3 3 0 0 0 3 3z"}),c.jsx("path",{d:"M2 12a3 3 0 0 1 3-3h4a3 3 0 0 1 0 6H5a3 3 0 0 1-3-3z"}),c.jsx("path",{d:"M22 12a3 3 0 0 0-3-3h-4a3 3 0 0 0 0 6h4a3 3 0 0 0 3-3z"})]}),c.jsx("h4",{style:C.skillTitle,children:"AI & Machine Learning"})]}),c.jsxs("ul",{style:C.skillList,children:[c.jsx("li",{style:C.skillItem,children:"OpenAI GPT Integration"}),c.jsx("li",{style:C.skillItem,children:"AI Chatbots"}),c.jsx("li",{style:C.skillItem,children:"Computer Vision"}),c.jsx("li",{style:C.skillItem,children:"NLP Solutions"})]})]}),c.jsxs("div",{style:C.skillCard,className:"skill-card",children:[c.jsxs("div",{style:C.skillHeader,children:[c.jsx("svg",{style:C.skillIcon,width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",stroke:"#00BCD4",strokeWidth:"2",children:c.jsx("path",{d:"M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"})}),c.jsx("h4",{style:C.skillTitle,children:"Cloud & AI Services"})]}),c.jsxs("ul",{style:C.skillList,children:[c.jsx("li",{style:C.skillItem,children:"AWS AI/ML Services"}),c.jsx("li",{style:C.skillItem,children:"TensorFlow & PyTorch"}),c.jsx("li",{style:C.skillItem,children:"Git & GitHub"}),c.jsx("li",{style:C.skillItem,children:"Predictive Analytics"})]})]})]})]}),c.jsxs("div",{style:C.servicesSection,children:[c.jsx("h3",{style:C.sectionTitle,children:"AI-Powered Solutions We Offer"}),c.jsx("p",{style:C.servicesSubtitle,children:"Transform your business with cutting-edge artificial intelligence"}),c.jsxs("div",{style:C.servicesGrid,children:[c.jsxs("div",{style:C.serviceCard,className:"service-card",children:[c.jsx("div",{style:C.serviceIconCircle,children:c.jsxs("svg",{width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",stroke:"#00BCD4",strokeWidth:"2",children:[c.jsx("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2"}),c.jsx("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]})}),c.jsx("h4",{style:C.serviceTitle,children:"Intelligent Chatbots"}),c.jsx("p",{style:C.serviceDesc,children:"Custom AI chatbots for customer support and lead generation using OpenAI GPT."})]}),c.jsxs("div",{style:C.serviceCard,className:"service-card",children:[c.jsx("div",{style:C.serviceIconCircle,children:c.jsxs("svg",{width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",stroke:"#00BCD4",strokeWidth:"2",children:[c.jsx("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),c.jsx("circle",{cx:"12",cy:"12",r:"3"})]})}),c.jsx("h4",{style:C.serviceTitle,children:"Computer Vision"}),c.jsx("p",{style:C.serviceDesc,children:"Image recognition, object detection, and automated visual inspection systems."})]}),c.jsxs("div",{style:C.serviceCard,className:"service-card",children:[c.jsx("div",{style:C.serviceIconCircle,children:c.jsx("svg",{width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",stroke:"#00BCD4",strokeWidth:"2",children:c.jsx("polyline",{points:"22 12 18 12 15 21 9 3 6 12 2 12"})})}),c.jsx("h4",{style:C.serviceTitle,children:"Predictive Analytics"}),c.jsx("p",{style:C.serviceDesc,children:"Machine learning models for sales forecasting and business intelligence."})]}),c.jsxs("div",{style:C.serviceCard,className:"service-card",children:[c.jsx("div",{style:C.serviceIconCircle,children:c.jsx("svg",{width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",stroke:"#00BCD4",strokeWidth:"2",children:c.jsx("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})})}),c.jsx("h4",{style:C.serviceTitle,children:"NLP Solutions"}),c.jsx("p",{style:C.serviceDesc,children:"Text analysis, sentiment analysis, and language translation systems."})]}),c.jsxs("div",{style:C.serviceCard,className:"service-card",children:[c.jsx("div",{style:C.serviceIconCircle,children:c.jsxs("svg",{width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",stroke:"#00BCD4",strokeWidth:"2",children:[c.jsx("circle",{cx:"12",cy:"12",r:"3"}),c.jsx("path",{d:"M12 1v6m0 6v6m9-9h-6m-6 0H3"})]})}),c.jsx("h4",{style:C.serviceTitle,children:"Process Automation"}),c.jsx("p",{style:C.serviceDesc,children:"Intelligent workflow automation and repetitive task optimization using AI."})]}),c.jsxs("div",{style:C.serviceCard,className:"service-card",children:[c.jsx("div",{style:C.serviceIconCircle,children:c.jsxs("svg",{width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",stroke:"#00BCD4",strokeWidth:"2",children:[c.jsx("path",{d:"M12 2a3 3 0 0 0-3 3v4a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"}),c.jsx("path",{d:"M12 22a3 3 0 0 0 3-3v-4a3 3 0 0 0-6 0v4a3 3 0 0 0 3 3z"})]})}),c.jsx("h4",{style:C.serviceTitle,children:"Custom AI Models"}),c.jsx("p",{style:C.serviceDesc,children:"Tailored machine learning models trained on your data for optimal performance."})]})]})]}),c.jsx("div",{style:C.statsSection,children:c.jsxs("div",{style:C.statsGrid,children:[c.jsxs("div",{style:C.statCard,children:[c.jsx("div",{style:C.statNumber,children:"50+"}),c.jsx("p",{style:C.statLabel,children:"Projects Completed"})]}),c.jsxs("div",{style:C.statCard,children:[c.jsx("div",{style:C.statNumber,children:"30+"}),c.jsx("p",{style:C.statLabel,children:"Happy Clients"})]}),c.jsxs("div",{style:C.statCard,children:[c.jsx("div",{style:C.statNumber,children:"5+"}),c.jsx("p",{style:C.statLabel,children:"Years Experience"})]}),c.jsxs("div",{style:C.statCard,children:[c.jsx("div",{style:C.statNumber,children:"24/7"}),c.jsx("p",{style:C.statLabel,children:"Support Available"})]})]})})]})})}const C={aboutSection:{padding:"80px 20px",background:"#ffffff"},container:{maxWidth:"1200px",margin:"0 auto",width:"100%"},aboutGrid:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"60px",alignItems:"center",marginBottom:"80px"},contentSection:{padding:"20px 0",textAlign:"left"},imageSection:{position:"relative"},imagesWrapper:{position:"relative",height:"550px",width:"100%"},mainImageContainer:{position:"absolute",top:"0",right:"0",width:"75%",height:"350px",borderRadius:"20px",overflow:"hidden",boxShadow:"0 25px 50px rgba(0, 0, 0, 0.15)",border:"4px solid #fff",cursor:"pointer",zIndex:1},mainImage:{width:"100%",height:"100%",objectFit:"cover",display:"block",transition:"transform 0.5s ease"},secondaryImageContainer:{position:"absolute",top:"40px",left:"0",width:"45%",height:"200px",borderRadius:"15px",overflow:"hidden",boxShadow:"0 20px 40px rgba(0, 0, 0, 0.15)",border:"4px solid #fff",cursor:"pointer",zIndex:2},secondaryImage:{width:"100%",height:"100%",objectFit:"cover",display:"block",transition:"transform 0.5s ease"},thirdImageContainer:{position:"absolute",bottom:"0",left:"10%",width:"55%",height:"220px",borderRadius:"15px",overflow:"hidden",boxShadow:"0 20px 40px rgba(0, 0, 0, 0.15)",border:"4px solid #fff",cursor:"pointer",zIndex:3},thirdImage:{width:"100%",height:"100%",objectFit:"cover",display:"block",transition:"transform 0.5s ease"},experienceBadge:{position:"absolute",bottom:"80px",right:"0",background:"linear-gradient(135deg, #00BCD4 0%, #0097A7 100%)",padding:"20px 25px",borderRadius:"15px",boxShadow:"0 15px 40px rgba(0, 188, 212, 0.4)",textAlign:"center",zIndex:4},expNumber:{display:"block",fontSize:"2.2rem",fontWeight:"800",color:"#ffffff",lineHeight:"1"},expText:{display:"block",fontSize:"0.85rem",color:"#ffffff",marginTop:"5px"},floatingCard:{position:"absolute",top:"280px",right:"60%",display:"flex",alignItems:"center",gap:"10px",padding:"12px 18px",background:"#ffffff",borderRadius:"12px",boxShadow:"0 10px 30px rgba(0, 0, 0, 0.12)",border:"1px solid rgba(0, 188, 212, 0.2)",zIndex:5},floatingIcon:{fontSize:"1.3rem"},floatingText:{fontSize:"0.9rem",fontWeight:"600",color:"#1a1a1a"},badge:{display:"inline-block",padding:"10px 20px",background:"linear-gradient(135deg, rgba(0, 188, 212, 0.15) 0%, rgba(0, 188, 212, 0.05) 100%)",border:"1px solid rgba(0, 188, 212, 0.3)",borderRadius:"50px",marginBottom:"20px"},badgeText:{color:"#0097A7",fontSize:"0.9rem",fontWeight:"600",letterSpacing:"1px"},mainTitle:{fontSize:"2.5rem",fontWeight:"800",color:"#1a1a1a",letterSpacing:"1px",marginBottom:"15px",lineHeight:"1.2"},divider:{width:"80px",height:"4px",background:"linear-gradient(90deg, #00BCD4, #0097A7)",marginBottom:"15px",borderRadius:"2px"},subtitle:{fontSize:"1.2rem",color:"#00BCD4",fontWeight:"500",marginBottom:"25px"},description:{fontSize:"1rem",lineHeight:"1.8",color:"#666",marginBottom:"30px"},featuresGrid:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"15px",marginBottom:"30px"},featureItem:{display:"flex",alignItems:"center",gap:"12px",fontSize:"0.95rem",color:"#555"},checkIcon:{width:"24px",height:"24px",borderRadius:"50%",background:"linear-gradient(135deg, #00BCD4 0%, #0097A7 100%)",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,fontWeight:"700",fontSize:"0.8rem"},ctaButtons:{display:"flex",gap:"15px",flexWrap:"wrap"},profileSection:{marginBottom:"80px"},profileCard:{display:"flex",alignItems:"center",gap:"25px",background:"linear-gradient(135deg, #00BCD4 0%, #0097A7 100%)",borderRadius:"20px",padding:"30px 40px",boxShadow:"0 15px 40px rgba(0, 188, 212, 0.3)"},profileImg:{width:"100px",height:"100px",borderRadius:"50%",background:"rgba(255, 255, 255, 0.2)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},profileInfo:{flex:1},profileName:{fontSize:"1.5rem",fontWeight:"700",color:"#ffffff",marginBottom:"5px"},designation:{fontSize:"1rem",color:"rgba(255, 255, 255, 0.9)",margin:0},skillsSection:{marginBottom:"80px"},sectionTitle:{fontSize:"2rem",fontWeight:"700",color:"#1a1a1a",textAlign:"center",marginBottom:"40px"},skillsGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"25px"},skillCard:{background:"#ffffff",borderRadius:"15px",padding:"30px",boxShadow:"0 5px 30px rgba(0,0,0,0.08)",borderLeft:"4px solid #00BCD4",transition:"transform 0.3s ease, box-shadow 0.3s ease"},skillHeader:{display:"flex",alignItems:"center",gap:"15px",marginBottom:"20px"},skillIcon:{flexShrink:0},skillTitle:{fontSize:"1.1rem",fontWeight:"700",color:"#1a1a1a",margin:0},skillList:{listStyle:"none",padding:0,margin:0},skillItem:{padding:"10px 0",borderBottom:"1px solid #f0f0f0",fontSize:"0.95rem",color:"#666"},servicesSection:{marginBottom:"80px"},servicesSubtitle:{fontSize:"1.1rem",color:"#666",textAlign:"center",marginBottom:"40px",marginTop:"-25px"},servicesGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"30px"},serviceCard:{background:"#ffffff",borderRadius:"15px",padding:"35px",textAlign:"center",boxShadow:"0 5px 30px rgba(0,0,0,0.08)",transition:"transform 0.3s ease, box-shadow 0.3s ease",border:"1px solid #f0f0f0"},serviceIconCircle:{width:"80px",height:"80px",borderRadius:"50%",background:"linear-gradient(135deg, rgba(0, 188, 212, 0.15) 0%, rgba(0, 188, 212, 0.05) 100%)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 20px"},serviceTitle:{fontSize:"1.2rem",fontWeight:"700",color:"#1a1a1a",marginBottom:"15px"},serviceDesc:{fontSize:"0.95rem",lineHeight:"1.7",color:"#666",margin:0},statsSection:{padding:"40px 0"},statsGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"30px"},statCard:{background:"linear-gradient(135deg, #00BCD4 0%, #0097A7 100%)",borderRadius:"15px",padding:"40px 20px",textAlign:"center",boxShadow:"0 15px 40px rgba(0,188,212,0.3)"},statNumber:{fontSize:"3rem",fontWeight:"800",color:"#ffffff",marginBottom:"10px"},statLabel:{fontSize:"1rem",color:"#ffffff",margin:0,fontWeight:"500"}},Rc=document.createElement("style");Rc.textContent=`
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
`;document.getElementById("about-styles")||(Rc.id="about-styles",document.head.appendChild(Rc));const dp="/assets/webapp-CPewV4kh.jpg",hp="/assets/web-n_XsrTUY.jpg",mp="/assets/soft-B3ojDYKk.jpg",pp="/assets/employee-BDQcxS8U.jpg",gp="/assets/flipbook-D7p_pFC8.jpg",vp="/assets/ecom-C3vJ5kr-.jpg",xp="/assets/customapp-CkwBAnCv.jpg",yp="/assets/solution-Bx85Xb4r.jpg",bp="/assets/aws-BF7wDGR9.jpg",Sp="/assets/hosting-Ca9gOdw0.jpg";function jp(){const u=[{image:dp,title:"Web Applications",description:"Custom web applications tailored to your business needs with modern technologies and user-friendly interfaces.",features:["Custom business applications","Real-time data processing","User authentication systems","Mobile-responsive design"]},{image:hp,title:"Professional Websites",description:"Modern, responsive websites that represent your brand professionally and engage your audience effectively.",features:["Custom website design","SEO optimization","Content management systems","Performance optimization"]},{image:mp,title:"Web Software Solutions",description:"Comprehensive web-based software solutions designed to streamline your business operations and increase efficiency.",features:["Custom software development","Database management","API integrations","Cloud-based solutions"]},{image:pp,title:"Employee Management System",description:"Complete employee management solutions with attendance tracking, salary management, and HR functionalities.",features:["Attendance tracking system","Salary calculation & payroll","Employee profiles & records","Leave management system"]},{image:gp,title:"Digital Flipbook Applications",description:"Interactive flipbook applications that simulate real book page-turning experience with stunning visual effects.",features:["Realistic page-turning effects","Image & PDF support","Mobile-friendly interface","Customizable designs"]},{image:vp,title:"E-Commerce Platforms",description:"Full-featured e-commerce websites with payment integration, inventory management, and customer management systems.",features:["Online store development","Payment gateway integration","Inventory management","Order tracking system"]},{image:xp,title:"Custom Web Applications",description:"Build any type of web application with fully customized features tailored to your specific business requirements.",features:["100% customized solutions","Industry-specific applications","Scalable architecture","Integration capabilities"]},{image:yp,title:"Complete Software Solutions",description:"End-to-end software solutions from consultation to deployment, including maintenance and ongoing support.",features:["Consultation & planning","Custom development","Testing & deployment","Maintenance & support"]},{image:bp,title:"AWS & Cloud Services",description:"Professional cloud deployment and management using Amazon Web Services with scalable infrastructure.",features:["AWS EC2 server setup","Amazon S3 storage solutions","Cloud migration services","Load balancing & scaling"]},{image:Sp,title:"Web Hosting & Management",description:"Reliable web hosting services with complete server management, monitoring, and maintenance.",features:["Shared & dedicated hosting","Server configuration & setup","24/7 monitoring & support","Backup & security management"]}];return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:`
        * {
          box-sizing: border-box;
        }

        html, body {
          overflow-x: hidden;
          width: 100%;
          max-width: 100vw;
        }

        .services-section {
          padding: 100px 20px;
          background: #ffffff;
          width: 100%;
          overflow-x: hidden;
        }

        .services-container {
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }

        .services-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .services-badge {
          display: inline-block;
          padding: 10px 20px;
          background: linear-gradient(135deg, rgba(0, 188, 212, 0.15) 0%, rgba(0, 188, 212, 0.05) 100%);
          border: 1px solid rgba(0, 188, 212, 0.3);
          border-radius: 50px;
          margin-bottom: 20px;
        }

        .services-badge-text {
          color: #0097A7;
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 1px;
        }

        .services-main-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: #1a1a1a;
          letter-spacing: 1px;
          margin-bottom: 15px;
          margin-top: 0;
        }

        .services-divider {
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #00BCD4, #0097A7);
          margin: 0 auto 20px;
          border-radius: 2px;
        }

        .services-subtitle {
          font-size: 1.1rem;
          color: #666;
          font-weight: 400;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 30px;
          margin-bottom: 80px;
          width: 100%;
        }

        .service-card {
          background: #ffffff;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0,0,0,0.08);
          transition: all 0.4s ease;
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

        .service-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .service-card:hover .service-image {
          transform: scale(1.1);
        }

        .service-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.1) 100%);
          pointer-events: none;
        }

        .service-content {
          padding: 30px;
        }

        .service-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 12px;
          margin-top: 0;
          word-wrap: break-word;
          transition: color 0.3s ease;
        }

        .service-card:hover .service-title {
          color: #00BCD4;
        }

        .service-description {
          font-size: 0.95rem;
          line-height: 1.7;
          color: #666;
          margin-bottom: 20px;
          word-wrap: break-word;
        }

        .service-features {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 0;
          font-size: 0.9rem;
          color: #555;
          border-bottom: 1px solid #f5f5f5;
        }

        .feature-item:last-child {
          border-bottom: none;
        }

        .check-icon {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: linear-gradient(135deg, #00BCD4 0%, #0097A7 100%);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-size: 0.7rem;
          font-weight: 700;
        }

        .services-cta {
          text-align: center;
          padding: 60px 40px;
          background: linear-gradient(135deg, #00BCD4 0%, #0097A7 100%);
          border-radius: 25px;
          box-shadow: 0 20px 60px rgba(0,188,212,0.3);
        }

        .cta-title {
          font-size: 2rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 15px;
          margin-top: 0;
        }

        .cta-text {
          font-size: 1.1rem;
          color: #ffffff;
          margin-bottom: 30px;
          opacity: 0.95;
        }

        .cta-button {
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

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(0,0,0,0.3);
        }

        /* Tablet Responsive */
        @media (max-width: 992px) {
          .services-section {
            padding: 80px 15px;
          }

          .services-main-title {
            font-size: 2.2rem;
          }

          .services-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 25px;
          }
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .services-section {
            padding: 70px 15px;
          }

          .services-main-title {
            font-size: 2rem;
          }

          .services-subtitle {
            font-size: 1rem;
            padding: 0 10px;
          }

          .services-grid {
            grid-template-columns: 1fr;
            gap: 25px;
            margin-bottom: 60px;
          }

          .service-image-container {
            height: 200px;
          }

          .service-content {
            padding: 25px;
          }

          .service-title {
            font-size: 1.3rem;
          }

          .service-description {
            font-size: 0.9rem;
          }

          .services-cta {
            padding: 50px 25px;
            border-radius: 20px;
          }

          .cta-title {
            font-size: 1.6rem;
          }

          .cta-text {
            font-size: 1rem;
          }
        }

        /* Small Mobile Responsive */
        @media (max-width: 480px) {
          .services-section {
            padding: 50px 10px;
          }

          .services-main-title {
            font-size: 1.6rem;
          }

          .services-subtitle {
            font-size: 0.9rem;
            padding: 0 5px;
          }

          .services-badge {
            padding: 8px 16px;
          }

          .services-badge-text {
            font-size: 0.8rem;
          }

          .services-grid {
            gap: 20px;
            margin-bottom: 40px;
          }

          .service-image-container {
            height: 180px;
          }

          .service-content {
            padding: 20px;
          }

          .service-title {
            font-size: 1.15rem;
            margin-bottom: 10px;
          }

          .service-description {
            font-size: 0.85rem;
            margin-bottom: 15px;
          }

          .feature-item {
            font-size: 0.82rem;
            padding: 6px 0;
          }

          .check-icon {
            width: 18px;
            height: 18px;
            font-size: 0.65rem;
          }

          .services-cta {
            padding: 35px 15px;
            border-radius: 15px;
          }

          .cta-title {
            font-size: 1.3rem;
            margin-bottom: 12px;
          }

          .cta-text {
            font-size: 0.9rem;
            margin-bottom: 20px;
          }

          .cta-button {
            padding: 13px 30px;
            font-size: 0.9rem;
            width: 100%;
            max-width: 280px;
          }

          .services-header {
            margin-bottom: 40px;
          }
        }

        /* Extra Small Devices */
        @media (max-width: 375px) {
          .services-section {
            padding: 45px 8px;
          }

          .services-main-title {
            font-size: 1.5rem;
          }

          .services-subtitle {
            font-size: 0.85rem;
          }

          .service-image-container {
            height: 160px;
          }

          .service-content {
            padding: 15px;
          }

          .service-title {
            font-size: 1rem;
          }

          .service-description {
            font-size: 0.8rem;
          }

          .feature-item {
            font-size: 0.78rem;
          }

          .cta-title {
            font-size: 1.2rem;
          }

          .cta-text {
            font-size: 0.85rem;
          }

          .cta-button {
            padding: 12px 25px;
            font-size: 0.85rem;
            max-width: 260px;
          }
        }
      `}),c.jsx("section",{className:"services-section",id:"services",children:c.jsxs("div",{className:"services-container",children:[c.jsxs("div",{className:"services-header",children:[c.jsx("div",{className:"services-badge",children:c.jsx("span",{className:"services-badge-text",children:"What We Offer"})}),c.jsx("h2",{className:"services-main-title",children:"OUR SERVICES"}),c.jsx("div",{className:"services-divider"}),c.jsx("p",{className:"services-subtitle",children:"Comprehensive Solutions for Your Digital Transformation"})]}),c.jsx("div",{className:"services-grid",children:u.map((f,d)=>c.jsxs("div",{className:"service-card",children:[c.jsxs("div",{className:"service-image-container",children:[c.jsx("img",{src:f.image,alt:f.title,className:"service-image"}),c.jsx("div",{className:"service-overlay"})]}),c.jsxs("div",{className:"service-content",children:[c.jsx("h3",{className:"service-title",children:f.title}),c.jsx("p",{className:"service-description",children:f.description}),c.jsx("ul",{className:"service-features",children:f.features.map((s,m)=>c.jsxs("li",{className:"feature-item",children:[c.jsx("div",{className:"check-icon",children:"✓"}),c.jsx("span",{children:s})]},m))})]})]},d))}),c.jsxs("div",{className:"services-cta",children:[c.jsx("h3",{className:"cta-title",children:"Ready to Transform Your Business?"}),c.jsx("p",{className:"cta-text",children:"Let's discuss how our services can help you achieve your goals"}),c.jsx("a",{href:"#footer",className:"cta-button",children:"Get Started Today"})]})]})})]})}const zp="/assets/emp-Dqf30CG0.jpg",Ep="/assets/ecommerce-LxiGhoKc.jpg",Tp="/assets/flip-BFD6tCjW.jpg",Ap="/assets/app-BwpD_5kE.jpg",wp="/assets/website-DKkS8miJ.jpg",Cp="/assets/cloud-Bf11_GX0.jpg";function Rp(){const u=[{title:"Employee Management System",description:"Complete HR solution with attendance tracking, salary management, and employee records.",technologies:["React","Node.js","MongoDB","Express"],image:zp},{title:"E-Commerce Platform",description:"Full-featured online store with payment integration and inventory management.",technologies:["React","Node.js","Stripe","AWS S3"],image:Ep},{title:"Digital Flipbook App",description:"Interactive flipbook application with realistic page-turning effects.",technologies:["React","CSS3","JavaScript","PDF.js"],image:Tp},{title:"Business Web Application",description:"Custom web application tailored for specific business requirements.",technologies:["MERN Stack","JWT","Bootstrap","API"],image:Ap},{title:"Professional Website",description:"Modern responsive website with SEO optimization and CMS integration.",technologies:["React","Bootstrap","SEO","CMS"],image:wp},{title:"Cloud-Based Software",description:"Scalable cloud solution deployed on AWS with robust infrastructure.",technologies:["AWS","EC2","S3","MongoDB"],image:Cp}];return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:`
        * {
          box-sizing: border-box;
        }

        .projects-section {
          padding: 100px 20px;
          background: #ffffff;
        }

        .projects-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .header-section {
          text-align: center;
          margin-bottom: 60px;
        }

        .badge {
          display: inline-block;
          padding: 10px 20px;
          background: linear-gradient(135deg, rgba(0, 188, 212, 0.15) 0%, rgba(0, 188, 212, 0.05) 100%);
          border: 1px solid rgba(0, 188, 212, 0.3);
          border-radius: 50px;
          margin-bottom: 20px;
        }

        .badge-text {
          color: #0097A7;
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 1px;
        }

        .main-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: #1a1a1a;
          letter-spacing: 1px;
          margin-bottom: 15px;
          margin-top: 0;
        }

        .divider {
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #00BCD4, #0097A7);
          margin: 0 auto 20px;
          border-radius: 2px;
        }

        .subtitle {
          font-size: 1.1rem;
          color: #666;
          font-weight: 400;
          max-width: 600px;
          margin: 0 auto;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          margin-bottom: 80px;
        }

        .project-card {
          background: #ffffff;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0,0,0,0.08);
          transition: all 0.4s ease;
          cursor: pointer;
          border: 1px solid #f0f0f0;
        }

        .project-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.15);
        }

        .project-image-wrapper {
          height: 240px;
          overflow: hidden;
          position: relative;
        }

        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .project-card:hover .project-image {
          transform: scale(1.15);
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.1) 100%);
          pointer-events: none;
          transition: all 0.3s ease;
        }

        .project-content {
          padding: 30px;
        }

        .project-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 12px;
          margin-top: 0;
          transition: color 0.3s ease;
        }

        .project-card:hover .project-title {
          color: #00BCD4;
        }

        .project-description {
          font-size: 0.95rem;
          line-height: 1.7;
          color: #666;
          margin-bottom: 20px;
        }

        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .tech-tag {
          background: linear-gradient(135deg, rgba(0, 188, 212, 0.1) 0%, rgba(0, 188, 212, 0.05) 100%);
          color: #00BCD4;
          padding: 8px 16px;
          border-radius: 25px;
          font-size: 0.85rem;
          font-weight: 600;
          border: 1px solid rgba(0, 188, 212, 0.2);
          transition: all 0.3s ease;
        }

        .tech-tag:hover {
          background: linear-gradient(135deg, #00BCD4 0%, #0097A7 100%);
          color: #ffffff;
          border-color: #00BCD4;
          transform: translateY(-2px);
        }

        .cta-section {
          text-align: center;
          padding: 60px 40px;
          background: linear-gradient(135deg, #00BCD4 0%, #0097A7 100%);
          border-radius: 25px;
          box-shadow: 0 20px 60px rgba(0, 188, 212, 0.3);
        }

        .cta-title {
          font-size: 2rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 15px;
          margin-top: 0;
        }

        .cta-text {
          font-size: 1.1rem;
          color: #ffffff;
          margin-bottom: 30px;
          opacity: 0.95;
        }

        .cta-button {
          display: inline-block;
          padding: 16px 45px;
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

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(0,0,0,0.3);
        }

        /* Tablet Responsive */
        @media (max-width: 992px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 25px;
          }
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .projects-section {
            padding: 60px 15px;
          }

          .projects-grid {
            grid-template-columns: 1fr;
            gap: 20px;
            margin-bottom: 50px;
          }

          .main-title {
            font-size: 1.8rem;
          }

          .subtitle {
            font-size: 0.95rem;
            padding: 0 10px;
          }

          .badge {
            padding: 8px 16px;
          }

          .badge-text {
            font-size: 0.8rem;
          }

          .project-card {
            border-radius: 15px;
          }

          .project-image-wrapper {
            height: 200px;
          }

          .project-content {
            padding: 20px;
          }

          .project-title {
            font-size: 1.2rem;
            margin-bottom: 8px;
          }

          .project-description {
            font-size: 0.9rem;
            margin-bottom: 15px;
          }

          .tech-stack {
            gap: 8px;
          }

          .tech-tag {
            padding: 6px 12px;
            font-size: 0.75rem;
          }

          .cta-section {
            padding: 40px 20px;
            border-radius: 20px;
          }

          .cta-title {
            font-size: 1.5rem;
          }

          .cta-text {
            font-size: 0.95rem;
            margin-bottom: 20px;
          }

          .cta-button {
            padding: 14px 35px;
            font-size: 0.9rem;
          }

          .header-section {
            margin-bottom: 40px;
          }
        }

        /* Small Mobile Responsive */
        @media (max-width: 480px) {
          .projects-section {
            padding: 50px 10px;
          }

          .main-title {
            font-size: 1.5rem;
          }

          .subtitle {
            font-size: 0.9rem;
          }

          .project-image-wrapper {
            height: 180px;
          }

          .project-content {
            padding: 15px;
          }

          .project-title {
            font-size: 1.1rem;
          }

          .project-description {
            font-size: 0.85rem;
            line-height: 1.6;
          }

          .tech-tag {
            padding: 5px 10px;
            font-size: 0.7rem;
          }

          .cta-section {
            padding: 30px 15px;
            border-radius: 15px;
          }

          .cta-title {
            font-size: 1.2rem;
          }

          .cta-text {
            font-size: 0.85rem;
          }

          .cta-button {
            padding: 12px 30px;
            font-size: 0.85rem;
          }
        }
      `}),c.jsx("section",{className:"projects-section",id:"projects",children:c.jsxs("div",{className:"projects-container",children:[c.jsxs("div",{className:"header-section",children:[c.jsx("div",{className:"badge",children:c.jsx("span",{className:"badge-text",children:"Our Work"})}),c.jsx("h2",{className:"main-title",children:"OUR PROJECTS"}),c.jsx("div",{className:"divider"}),c.jsx("p",{className:"subtitle",children:"Showcasing Excellence in Web Development & AI Solutions"})]}),c.jsx("div",{className:"projects-grid",children:u.map((f,d)=>c.jsxs("div",{className:"project-card",children:[c.jsxs("div",{className:"project-image-wrapper",children:[c.jsx("img",{src:f.image,alt:f.title,className:"project-image"}),c.jsx("div",{className:"image-overlay"})]}),c.jsxs("div",{className:"project-content",children:[c.jsx("h3",{className:"project-title",children:f.title}),c.jsx("p",{className:"project-description",children:f.description}),c.jsx("div",{className:"tech-stack",children:f.technologies.map((s,m)=>c.jsx("span",{className:"tech-tag",children:s},m))})]})]},d))}),c.jsxs("div",{className:"cta-section",children:[c.jsx("h3",{className:"cta-title",children:"Have a Project in Mind?"}),c.jsx("p",{className:"cta-text",children:"Let's bring your vision to life with our expertise"}),c.jsx("a",{href:"#footer",className:"cta-button",children:"Start Your Project"})]})]})})]})}var Pd={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Xd=Xl.createContext&&Xl.createContext(Pd),Dp=["attr","size","title"];function Mp(u,f){if(u==null)return{};var d=Op(u,f),s,m;if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(u);for(m=0;m<p.length;m++)s=p[m],!(f.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(u,s)&&(d[s]=u[s])}return d}function Op(u,f){if(u==null)return{};var d={};for(var s in u)if(Object.prototype.hasOwnProperty.call(u,s)){if(f.indexOf(s)>=0)continue;d[s]=u[s]}return d}function eu(){return eu=Object.assign?Object.assign.bind():function(u){for(var f=1;f<arguments.length;f++){var d=arguments[f];for(var s in d)Object.prototype.hasOwnProperty.call(d,s)&&(u[s]=d[s])}return u},eu.apply(this,arguments)}function Qd(u,f){var d=Object.keys(u);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(u);f&&(s=s.filter(function(m){return Object.getOwnPropertyDescriptor(u,m).enumerable})),d.push.apply(d,s)}return d}function tu(u){for(var f=1;f<arguments.length;f++){var d=arguments[f]!=null?arguments[f]:{};f%2?Qd(Object(d),!0).forEach(function(s){Np(u,s,d[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(u,Object.getOwnPropertyDescriptors(d)):Qd(Object(d)).forEach(function(s){Object.defineProperty(u,s,Object.getOwnPropertyDescriptor(d,s))})}return u}function Np(u,f,d){return f=Bp(f),f in u?Object.defineProperty(u,f,{value:d,enumerable:!0,configurable:!0,writable:!0}):u[f]=d,u}function Bp(u){var f=_p(u,"string");return typeof f=="symbol"?f:f+""}function _p(u,f){if(typeof u!="object"||!u)return u;var d=u[Symbol.toPrimitive];if(d!==void 0){var s=d.call(u,f);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(f==="string"?String:Number)(u)}function e0(u){return u&&u.map((f,d)=>Xl.createElement(f.tag,tu({key:d},f.attr),e0(f.child)))}function At(u){return f=>Xl.createElement(Up,eu({attr:tu({},u.attr)},f),e0(u.child))}function Up(u){var f=d=>{var{attr:s,size:m,title:p}=u,b=Mp(u,Dp),w=m||d.size||"1em",S;return d.className&&(S=d.className),u.className&&(S=(S?S+" ":"")+u.className),Xl.createElement("svg",eu({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},d.attr,s,b,{className:S,style:tu(tu({color:u.color||d.color},d.style),u.style),height:w,width:w,xmlns:"http://www.w3.org/2000/svg"}),p&&Xl.createElement("title",null,p),u.children)};return Xd!==void 0?Xl.createElement(Xd.Consumer,null,d=>f(d)):f(Pd)}function Hp(u){return At({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"},child:[]}]})(u)}function Yp(u){return At({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(u)}function Lp(u){return At({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"},child:[]}]})(u)}function qp(u){return At({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"},child:[]}]})(u)}function kp(u){return At({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"},child:[]}]})(u)}function Gp(u){return At({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"},child:[]}]})(u)}function Xp(u){return At({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M208 0c-29.9 0-54.7 20.5-61.8 48.2-.8 0-1.4-.2-2.2-.2-35.3 0-64 28.7-64 64 0 4.8.6 9.5 1.7 14C52.5 138 32 166.6 32 200c0 12.6 3.2 24.3 8.3 34.9C16.3 248.7 0 274.3 0 304c0 33.3 20.4 61.9 49.4 73.9-.9 4.6-1.4 9.3-1.4 14.1 0 39.8 32.2 72 72 72 4.1 0 8.1-.5 12-1.2 9.6 28.5 36.2 49.2 68 49.2 39.8 0 72-32.2 72-72V64c0-35.3-28.7-64-64-64zm368 304c0-29.7-16.3-55.3-40.3-69.1 5.2-10.6 8.3-22.3 8.3-34.9 0-33.4-20.5-62-49.7-74 1-4.5 1.7-9.2 1.7-14 0-35.3-28.7-64-64-64-.8 0-1.5.2-2.2.2C422.7 20.5 397.9 0 368 0c-35.3 0-64 28.6-64 64v376c0 39.8 32.2 72 72 72 31.8 0 58.4-20.7 68-49.2 3.9.7 7.9 1.2 12 1.2 39.8 0 72-32.2 72-72 0-4.8-.5-9.5-1.4-14.1 29-12 49.4-40.6 49.4-73.9z"},child:[]}]})(u)}function Vd(u){return At({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(u)}function Qp(u){return At({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"},child:[]}]})(u)}function Vp(u){return At({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"},child:[]}]})(u)}function Zp(u){return At({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z"},child:[]}]})(u)}function Kp(){const[u,f]=R.useState(!1),[d,s]=R.useState(!1),[m,p]=R.useState(!1);R.useEffect(()=>{const w=()=>f(window.scrollY>300);return window.addEventListener("scroll",w),()=>window.removeEventListener("scroll",w)},[]);const b=()=>window.scrollTo({top:0,behavior:"smooth"});return c.jsxs(c.Fragment,{children:[c.jsxs("footer",{style:_.footer,children:[u&&c.jsx("button",{style:_.scrollToTop,onClick:b,"aria-label":"Scroll to top",className:"scroll-top-btn",children:c.jsx(kp,{})}),c.jsx("a",{href:"https://wa.me/919412004537",target:"_blank",rel:"noreferrer",style:_.whatsappFloat,"aria-label":"WhatsApp",className:"whatsapp-float",children:c.jsx(Lp,{})}),c.jsxs("div",{style:_.container,children:[c.jsxs("div",{style:_.visionSection,children:[c.jsx("h2",{style:_.visionTitle,children:"YOUR VISION. OUR TECHNOLOGY"}),c.jsx("div",{style:_.divider}),c.jsx("h3",{style:_.visionSubtitle,children:"We Engineer Solutions That Are:"})]}),c.jsxs("div",{style:_.featuresGrid,children:[c.jsxs("div",{style:_.featureCard,className:"feature-card",children:[c.jsx("div",{style:_.featureIconWrapper,className:"feature-icon-wrapper",children:c.jsx(Xp,{style:_.featureIcon})}),c.jsx("h4",{style:_.featureTitle,children:"SMART"}),c.jsx("p",{style:_.featureDesc,children:"Powered by cutting-edge AI, built for growth and future demands"})]}),c.jsxs("div",{style:_.featureCard,className:"feature-card",children:[c.jsx("div",{style:_.featureIconWrapper,className:"feature-icon-wrapper",children:c.jsx(Gp,{style:_.featureIcon})}),c.jsx("h4",{style:_.featureTitle,children:"SCALABLE & FAST"}),c.jsx("p",{style:_.featureDesc,children:"Optimized for lightning-quick performance and long-term scalability"})]}),c.jsxs("div",{style:_.featureCard,className:"feature-card",children:[c.jsx("div",{style:_.featureIconWrapper,className:"feature-icon-wrapper",children:c.jsx(Zp,{style:_.featureIcon})}),c.jsx("h4",{style:_.featureTitle,children:"SECURE & ROBUST"}),c.jsx("p",{style:_.featureDesc,children:"Enterprise-grade security, reliable and resilient systems"})]})]}),c.jsxs("div",{style:_.servicesSection,children:[c.jsx("h3",{style:_.servicesSectionTitle,children:"CORE SERVICES"}),c.jsxs("div",{style:_.servicesGrid,children:[c.jsxs("div",{style:_.serviceColumn,children:[c.jsx("h4",{style:_.serviceColumnTitle,children:"AI"}),c.jsxs("ul",{style:_.serviceList,children:[c.jsx("li",{style:_.serviceItem,className:"service-item",children:"Custom Models"}),c.jsx("li",{style:_.serviceItem,className:"service-item",children:"Machine Learning"}),c.jsx("li",{style:_.serviceItem,className:"service-item",children:"Predictive & Intelligent Systems"})]})]}),c.jsxs("div",{style:_.serviceColumn,className:"service-column-middle",children:[c.jsx("h4",{style:_.serviceColumnTitle,children:"WEB APPS"}),c.jsxs("ul",{style:_.serviceList,children:[c.jsx("li",{style:_.serviceItem,className:"service-item",children:"High-Performance Web Applications"}),c.jsx("li",{style:_.serviceItem,className:"service-item",children:"Scalable SASS Platforms"}),c.jsx("li",{style:_.serviceItem,className:"service-item",children:"Cloud-Ready Architecture"})]})]}),c.jsxs("div",{style:_.serviceColumn,children:[c.jsx("h4",{style:_.serviceColumnTitle,children:"SOFTWARE"}),c.jsxs("ul",{style:_.serviceList,children:[c.jsx("li",{style:_.serviceItem,className:"service-item",children:"Easy to-Use Backend Systems"}),c.jsx("li",{style:_.serviceItem,className:"service-item",children:"Secure Integrations"}),c.jsx("li",{style:_.serviceItem,className:"service-item",children:"Custom Business Software"})]})]})]})]}),c.jsxs("div",{style:_.infoGrid,children:[c.jsxs("div",{style:_.infoSection,children:[c.jsx("h3",{style:_.logo,children:"AAVRC"}),c.jsx("p",{style:_.tagline,children:"We Build It."}),c.jsx("p",{style:_.description,children:"Leading provider of AI-powered web development solutions, intelligent automation systems, and cutting-edge software services for businesses worldwide."}),c.jsxs("div",{style:_.socialContainer,children:[c.jsx("h4",{style:_.sectionTitle,children:"Follow Us"}),c.jsxs("div",{style:_.socialIcons,children:[c.jsx("a",{href:"https://www.youtube.com/@Aavrcalex",target:"_blank",rel:"noreferrer",style:_.socialLink,className:"social-link social-youtube",children:c.jsx(qp,{})}),c.jsx("a",{href:"https://www.facebook.com/profile.php?id=61581382928986",target:"_blank",rel:"noreferrer",style:_.socialLink,className:"social-link social-facebook",children:c.jsx(Hp,{})}),c.jsx("a",{href:"https://www.instagram.com/aavrcaavrc/?igsh=MWdtN3ZvZHlrZHRiNA%3D%3D#",target:"_blank",rel:"noreferrer",style:_.socialLink,className:"social-link social-instagram",children:c.jsx(Yp,{})}),c.jsx("a",{href:"mailto:aavrcworld@gmail.com",style:_.socialLink,className:"social-link social-email",children:c.jsx(Vd,{})})]})]})]}),c.jsxs("div",{style:_.infoSection,children:[c.jsx("h4",{style:_.sectionTitle,children:"Contact Us"}),c.jsxs("div",{style:_.contactList,children:[c.jsxs("a",{href:"mailto:aavrcworld@gmail.com",style:_.contactLink,className:"contact-link",children:[c.jsx("div",{style:_.contactIconWrapper,className:"contact-icon-wrapper",children:c.jsx(Vd,{style:_.contactIcon})}),c.jsx("span",{children:"aavrcworld@gmail.com"})]}),c.jsxs("a",{href:"tel:+919412004537",style:_.contactLink,className:"contact-link",children:[c.jsx("div",{style:_.contactIconWrapper,className:"contact-icon-wrapper",children:c.jsx(Vp,{style:_.contactIcon})}),c.jsx("span",{children:"+91 94120 04537"})]}),c.jsxs("div",{style:_.contactLink,className:"contact-link",children:[c.jsx("div",{style:_.contactIconWrapper,className:"contact-icon-wrapper",children:c.jsx(Qp,{style:_.contactIcon})}),c.jsx("span",{children:"India"})]})]}),c.jsxs("div",{style:_.supportBox,className:"support-box",children:[c.jsx("h5",{style:_.supportTitle,children:"24/7 IT Support"}),c.jsx("p",{style:_.supportText,children:"Our technical team is available around the clock for assistance."})]})]})]}),c.jsxs("div",{style:_.footerBottom,children:[c.jsx("p",{style:_.copyright,children:"© 2025 AAVRC.COM - We Build It. | All rights reserved."}),c.jsxs("div",{style:_.footerLinks,children:[c.jsx("button",{style:_.linkButton,onClick:()=>s(!0),className:"footer-link-btn",children:"Privacy Policy"}),c.jsx("span",{style:_.separator,children:"|"}),c.jsx("button",{style:_.linkButton,onClick:()=>p(!0),className:"footer-link-btn",children:"Terms of Service"})]})]})]})]}),d&&c.jsx("div",{style:_.popupOverlay,onClick:()=>s(!1),children:c.jsxs("div",{style:_.popupContent,onClick:w=>w.stopPropagation(),children:[c.jsx("button",{style:_.closeButton,onClick:()=>s(!1),className:"popup-close-btn",children:"✖"}),c.jsx("h2",{style:_.popupTitle,children:"Privacy Policy"}),c.jsxs("div",{style:_.popupBody,children:[c.jsx("p",{style:_.popupText,children:"At AAVRC, we value your privacy. We collect minimal data to provide and improve our AI-powered web services. Your personal information is never sold or shared with third parties except as required for essential operations or legal compliance."}),c.jsx("p",{style:_.popupText,children:"We use encrypted communication, secure databases, and role-based access to ensure your data remains protected at all times."})]})]})}),m&&c.jsx("div",{style:_.popupOverlay,onClick:()=>p(!1),children:c.jsxs("div",{style:_.popupContent,onClick:w=>w.stopPropagation(),children:[c.jsx("button",{style:_.closeButton,onClick:()=>p(!1),className:"popup-close-btn",children:"✖"}),c.jsx("h2",{style:_.popupTitle,children:"Terms of Service"}),c.jsxs("div",{style:_.popupBody,children:[c.jsx("p",{style:_.popupText,children:"By using AAVRC's services, you agree to our standard usage policies, including proper use of AI tools, respect for copyright, and adherence to applicable laws."}),c.jsx("p",{style:_.popupText,children:"We reserve the right to update, modify, or terminate services with prior notice. Continued use of our services constitutes acceptance of any changes made to these terms."})]})]})}),c.jsx("style",{children:`
        /* Feature Card Hover */
        .feature-card {
          cursor: pointer;
        }
        
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

        /* Social Links - Show Brand Colors */
        .social-youtube {
          background: #FF0000 !important;
          color: #ffffff !important;
          border: 2px solid #FF0000 !important;
        }
        
        .social-facebook {
          background: #1877F2 !important;
          color: #ffffff !important;
          border: 2px solid #1877F2 !important;
        }
        
        .social-instagram {
          background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888) !important;
          color: #ffffff !important;
          border: 2px solid #dc2743 !important;
        }
        
        .social-email {
          background: linear-gradient(135deg, #00BCD4 0%, #0097A7 100%) !important;
          color: #ffffff !important;
          border: 2px solid #00BCD4 !important;
        }

        /* Social Links Hover Effects */
        .social-link {
          cursor: pointer;
        }
        
        .social-link:hover {
          transform: translateY(-5px) scale(1.1);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25) !important;
        }
        
        .social-youtube:hover {
          box-shadow: 0 10px 25px rgba(255, 0, 0, 0.4) !important;
        }
        
        .social-facebook:hover {
          box-shadow: 0 10px 25px rgba(24, 119, 242, 0.4) !important;
        }
        
        .social-instagram:hover {
          box-shadow: 0 10px 25px rgba(220, 39, 67, 0.4) !important;
        }
        
        .social-email:hover {
          box-shadow: 0 10px 25px rgba(0, 188, 212, 0.4) !important;
        }

        /* Contact Link Hover */
        .contact-link {
          cursor: pointer;
        }
        
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
        .service-item {
          cursor: pointer;
        }
        
        .service-item:hover {
          background: rgba(0, 188, 212, 0.08);
          color: #00BCD4 !important;
          transform: scale(1.02);
        }

        /* Support Box Hover */
        .support-box {
          cursor: pointer;
        }
        
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
          filter: drop-shadow(0 8px 20px rgba(37, 211, 102, 0.6)) !important;
        }

        /* Popup Close Button Hover */
        .popup-close-btn:hover {
          background: #00BCD4 !important;
          color: #ffffff !important;
          transform: rotate(90deg);
        }

        /* Service Column Middle Border */
        .service-column-middle {
          border-left: 1px solid rgba(0, 188, 212, 0.3);
          border-right: 1px solid rgba(0, 188, 212, 0.3);
        }

        /* Tablet Responsive */
        @media (max-width: 992px) {
          .service-column-middle {
            border-left: none !important;
            border-right: none !important;
            border-top: 1px solid rgba(0, 188, 212, 0.3) !important;
            border-bottom: 1px solid rgba(0, 188, 212, 0.3) !important;
          }
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .service-column-middle {
            border: none !important;
          }
        }
      `})]})}const _={footer:{background:"#ffffff",padding:"80px 20px 30px",fontFamily:'"Segoe UI", Arial, sans-serif',position:"relative"},container:{maxWidth:"1200px",margin:"0 auto"},visionSection:{textAlign:"center",marginBottom:"60px"},visionTitle:{fontSize:"clamp(1.5rem, 5vw, 2.5rem)",fontWeight:"800",color:"#1a1a1a",letterSpacing:"1px",marginBottom:"20px"},divider:{width:"80px",height:"4px",background:"linear-gradient(90deg, #00BCD4, #0097A7)",margin:"0 auto 25px",borderRadius:"2px"},visionSubtitle:{fontSize:"clamp(1.1rem, 3vw, 1.5rem)",fontWeight:"400",color:"#555"},featuresGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"30px",marginBottom:"70px"},featureCard:{textAlign:"center",padding:"40px 30px",background:"#ffffff",borderRadius:"20px",boxShadow:"0 10px 40px rgba(0, 0, 0, 0.06)",border:"1px solid #f0f0f0",transition:"all 0.3s ease"},featureIconWrapper:{width:"100px",height:"100px",borderRadius:"50%",background:"linear-gradient(135deg, rgba(0, 188, 212, 0.1) 0%, rgba(0, 188, 212, 0.05) 100%)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 25px",transition:"all 0.3s ease"},featureIcon:{fontSize:"45px",color:"#00BCD4",transition:"all 0.3s ease"},featureTitle:{fontSize:"clamp(1.1rem, 2.5vw, 1.3rem)",fontWeight:"700",color:"#1a1a1a",marginBottom:"12px"},featureDesc:{fontSize:"clamp(0.85rem, 2vw, 0.95rem)",color:"#666",lineHeight:"1.7"},servicesSection:{marginBottom:"70px",padding:"50px 0",borderTop:"1px solid #f0f0f0",borderBottom:"1px solid #f0f0f0"},servicesSectionTitle:{fontSize:"clamp(1.5rem, 4vw, 2rem)",fontWeight:"700",color:"#1a1a1a",textAlign:"center",marginBottom:"50px"},servicesGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"0"},serviceColumn:{padding:"25px 35px",textAlign:"center"},serviceColumnTitle:{fontSize:"clamp(1.1rem, 2.5vw, 1.4rem)",fontWeight:"700",color:"#00BCD4",marginBottom:"25px"},serviceList:{listStyle:"none",padding:0,margin:0},serviceItem:{fontSize:"clamp(0.85rem, 2vw, 0.95rem)",color:"#666",marginBottom:"15px",lineHeight:"1.5",padding:"8px 15px",borderRadius:"8px",transition:"all 0.3s ease"},infoGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"50px",marginBottom:"50px"},infoSection:{display:"flex",flexDirection:"column"},logo:{fontSize:"clamp(2rem, 5vw, 2.5rem)",fontWeight:"800",color:"#1a1a1a",marginBottom:"8px"},tagline:{fontSize:"clamp(0.9rem, 2vw, 1rem)",color:"#00BCD4",fontWeight:"600",marginBottom:"20px",paddingBottom:"12px",borderBottom:"2px solid #1a1a1a",display:"inline-block"},description:{fontSize:"clamp(0.85rem, 2vw, 0.95rem)",color:"#666",lineHeight:"1.8",marginBottom:"30px"},socialContainer:{marginTop:"auto"},sectionTitle:{fontSize:"clamp(1rem, 2.5vw, 1.1rem)",fontWeight:"700",color:"#1a1a1a",marginBottom:"20px"},socialIcons:{display:"flex",gap:"15px",flexWrap:"wrap"},socialLink:{width:"50px",height:"50px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"24px",textDecoration:"none",transition:"all 0.3s ease"},contactList:{display:"flex",flexDirection:"column",gap:"15px",marginBottom:"30px"},contactLink:{display:"flex",alignItems:"center",gap:"15px",color:"#555",textDecoration:"none",fontSize:"clamp(0.85rem, 2vw, 0.95rem)",transition:"all 0.3s ease",padding:"12px 15px",borderRadius:"12px",background:"#f8f9fa",border:"1px solid transparent"},contactIconWrapper:{width:"40px",height:"40px",borderRadius:"50%",background:"linear-gradient(135deg, #00BCD4 0%, #0097A7 100%)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,transition:"all 0.3s ease"},contactIcon:{fontSize:"16px",color:"#ffffff"},supportBox:{background:"linear-gradient(135deg, rgba(0, 188, 212, 0.1) 0%, rgba(0, 188, 212, 0.05) 100%)",padding:"25px",borderRadius:"15px",border:"1px solid rgba(0, 188, 212, 0.2)",transition:"all 0.3s ease"},supportTitle:{fontSize:"clamp(1rem, 2.5vw, 1.1rem)",fontWeight:"700",color:"#1a1a1a",marginBottom:"10px"},supportText:{fontSize:"clamp(0.85rem, 2vw, 0.9rem)",color:"#666",lineHeight:"1.7",margin:0},footerBottom:{borderTop:"1px solid #e0e0e0",paddingTop:"30px",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"20px"},copyright:{fontSize:"clamp(0.8rem, 2vw, 0.9rem)",color:"#888",margin:0,fontWeight:"500"},footerLinks:{display:"flex",alignItems:"center",gap:"15px",flexWrap:"wrap"},linkButton:{background:"none",border:"none",color:"#666",fontSize:"clamp(0.8rem, 2vw, 0.9rem)",cursor:"pointer",transition:"all 0.3s ease",padding:"5px 10px",fontWeight:"500",borderRadius:"5px"},separator:{color:"#ddd"},scrollToTop:{position:"fixed",bottom:"100px",right:"25px",background:"linear-gradient(135deg, #00BCD4 0%, #0097A7 100%)",color:"#fff",border:"none",padding:"0",borderRadius:"50%",fontSize:"20px",cursor:"pointer",boxShadow:"0 8px 25px rgba(0, 188, 212, 0.4)",zIndex:999,transition:"all 0.3s ease",display:"flex",alignItems:"center",justifyContent:"center",width:"55px",height:"55px"},whatsappFloat:{position:"fixed",bottom:"25px",right:"25px",zIndex:998,fontSize:"60px",color:"#25D366",transition:"all 0.3s ease",filter:"drop-shadow(0 5px 15px rgba(37, 211, 102, 0.4))"},popupOverlay:{position:"fixed",top:0,left:0,width:"100%",height:"100%",background:"rgba(0, 0, 0, 0.7)",display:"flex",justifyContent:"center",alignItems:"center",zIndex:9999,backdropFilter:"blur(5px)",padding:"20px"},popupContent:{background:"#ffffff",width:"90%",maxWidth:"600px",padding:"clamp(30px, 5vw, 50px)",borderRadius:"25px",boxShadow:"0 30px 80px rgba(0, 0, 0, 0.3)",position:"relative",maxHeight:"80vh",overflowY:"auto"},closeButton:{position:"absolute",top:"25px",right:"25px",background:"#f5f5f5",border:"none",fontSize:"18px",cursor:"pointer",color:"#666",transition:"all 0.3s ease",width:"45px",height:"45px",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"50%"},popupTitle:{fontSize:"clamp(1.3rem, 4vw, 1.8rem)",fontWeight:"700",color:"#1a1a1a",marginBottom:"25px"},popupBody:{fontSize:"clamp(0.9rem, 2vw, 1rem)",lineHeight:"1.8"},popupText:{color:"#666",marginBottom:"20px"}};function Jp(){return c.jsxs(c.Fragment,{children:[c.jsx("section",{id:"home",children:c.jsx(rp,{})}),c.jsx("section",{id:"about",children:c.jsx(fp,{})}),c.jsx("section",{id:"services",children:c.jsx(jp,{})}),c.jsx("section",{id:"projects",children:c.jsx(Rp,{})}),c.jsx("section",{id:"footer",children:c.jsx(Kp,{})})]})}function Wp(){return c.jsxs(c.Fragment,{children:[c.jsx(ip,{}),c.jsx(Jp,{})]})}/**
 * react-router v7.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Zd="popstate";function $p(u={}){function f(m,p){let{pathname:b="/",search:w="",hash:S=""}=Da(m.location.hash.substring(1));return!b.startsWith("/")&&!b.startsWith(".")&&(b="/"+b),Dc("",{pathname:b,search:w,hash:S},p.state&&p.state.usr||null,p.state&&p.state.key||"default")}function d(m,p){let b=m.document.querySelector("base"),w="";if(b&&b.getAttribute("href")){let S=m.location.href,v=S.indexOf("#");w=v===-1?S:S.slice(0,v)}return w+"#"+(typeof p=="string"?p:Nn(p))}function s(m,p){Tt(m.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(p)})`)}return Ip(f,d,s,u)}function Be(u,f){if(u===!1||u===null||typeof u>"u")throw new Error(f)}function Tt(u,f){if(!u){typeof console<"u"&&console.warn(f);try{throw new Error(f)}catch{}}}function Fp(){return Math.random().toString(36).substring(2,10)}function Kd(u,f){return{usr:u.state,key:u.key,idx:f}}function Dc(u,f,d=null,s){return{pathname:typeof u=="string"?u:u.pathname,search:"",hash:"",...typeof f=="string"?Da(f):f,state:d,key:f&&f.key||s||Fp()}}function Nn({pathname:u="/",search:f="",hash:d=""}){return f&&f!=="?"&&(u+=f.charAt(0)==="?"?f:"?"+f),d&&d!=="#"&&(u+=d.charAt(0)==="#"?d:"#"+d),u}function Da(u){let f={};if(u){let d=u.indexOf("#");d>=0&&(f.hash=u.substring(d),u=u.substring(0,d));let s=u.indexOf("?");s>=0&&(f.search=u.substring(s),u=u.substring(0,s)),u&&(f.pathname=u)}return f}function Ip(u,f,d,s={}){let{window:m=document.defaultView,v5Compat:p=!1}=s,b=m.history,w="POP",S=null,v=A();v==null&&(v=0,b.replaceState({...b.state,idx:v},""));function A(){return(b.state||{idx:null}).idx}function U(){w="POP";let k=A(),W=k==null?null:k-v;v=k,S&&S({action:w,location:P.location,delta:W})}function L(k,W){w="PUSH";let X=Dc(P.location,k,W);d&&d(X,k),v=A()+1;let le=Kd(X,v),je=P.createHref(X);try{b.pushState(le,"",je)}catch(ee){if(ee instanceof DOMException&&ee.name==="DataCloneError")throw ee;m.location.assign(je)}p&&S&&S({action:w,location:P.location,delta:1})}function V(k,W){w="REPLACE";let X=Dc(P.location,k,W);d&&d(X,k),v=A();let le=Kd(X,v),je=P.createHref(X);b.replaceState(le,"",je),p&&S&&S({action:w,location:P.location,delta:0})}function Z(k){return Pp(k)}let P={get action(){return w},get location(){return u(m,b)},listen(k){if(S)throw new Error("A history only accepts one active listener");return m.addEventListener(Zd,U),S=k,()=>{m.removeEventListener(Zd,U),S=null}},createHref(k){return f(m,k)},createURL:Z,encodeLocation(k){let W=Z(k);return{pathname:W.pathname,search:W.search,hash:W.hash}},push:L,replace:V,go(k){return b.go(k)}};return P}function Pp(u,f=!1){let d="http://localhost";typeof window<"u"&&(d=window.location.origin!=="null"?window.location.origin:window.location.href),Be(d,"No window.location.(origin|href) available to create URL");let s=typeof u=="string"?u:Nn(u);return s=s.replace(/ $/,"%20"),!f&&s.startsWith("//")&&(s=d+s),new URL(s,d)}function t0(u,f,d="/"){return e1(u,f,d,!1)}function e1(u,f,d,s){let m=typeof f=="string"?Da(f):f,p=$t(m.pathname||"/",d);if(p==null)return null;let b=l0(u);t1(b);let w=null;for(let S=0;w==null&&S<b.length;++S){let v=d1(p);w=s1(b[S],v,s)}return w}function l0(u,f=[],d=[],s="",m=!1){let p=(b,w,S=m,v)=>{let A={relativePath:v===void 0?b.path||"":v,caseSensitive:b.caseSensitive===!0,childrenIndex:w,route:b};if(A.relativePath.startsWith("/")){if(!A.relativePath.startsWith(s)&&S)return;Be(A.relativePath.startsWith(s),`Absolute route path "${A.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),A.relativePath=A.relativePath.slice(s.length)}let U=Wt([s,A.relativePath]),L=d.concat(A);b.children&&b.children.length>0&&(Be(b.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${U}".`),l0(b.children,f,L,U,S)),!(b.path==null&&!b.index)&&f.push({path:U,score:c1(U,b.index),routesMeta:L})};return u.forEach((b,w)=>{if(b.path===""||!b.path?.includes("?"))p(b,w);else for(let S of a0(b.path))p(b,w,!0,S)}),f}function a0(u){let f=u.split("/");if(f.length===0)return[];let[d,...s]=f,m=d.endsWith("?"),p=d.replace(/\?$/,"");if(s.length===0)return m?[p,""]:[p];let b=a0(s.join("/")),w=[];return w.push(...b.map(S=>S===""?p:[p,S].join("/"))),m&&w.push(...b),w.map(S=>u.startsWith("/")&&S===""?"/":S)}function t1(u){u.sort((f,d)=>f.score!==d.score?d.score-f.score:o1(f.routesMeta.map(s=>s.childrenIndex),d.routesMeta.map(s=>s.childrenIndex)))}var l1=/^:[\w-]+$/,a1=3,n1=2,i1=1,u1=10,r1=-2,Jd=u=>u==="*";function c1(u,f){let d=u.split("/"),s=d.length;return d.some(Jd)&&(s+=r1),f&&(s+=n1),d.filter(m=>!Jd(m)).reduce((m,p)=>m+(l1.test(p)?a1:p===""?i1:u1),s)}function o1(u,f){return u.length===f.length&&u.slice(0,-1).every((s,m)=>s===f[m])?u[u.length-1]-f[f.length-1]:0}function s1(u,f,d=!1){let{routesMeta:s}=u,m={},p="/",b=[];for(let w=0;w<s.length;++w){let S=s[w],v=w===s.length-1,A=p==="/"?f:f.slice(p.length)||"/",U=lu({path:S.relativePath,caseSensitive:S.caseSensitive,end:v},A),L=S.route;if(!U&&v&&d&&!s[s.length-1].route.index&&(U=lu({path:S.relativePath,caseSensitive:S.caseSensitive,end:!1},A)),!U)return null;Object.assign(m,U.params),b.push({params:m,pathname:Wt([p,U.pathname]),pathnameBase:g1(Wt([p,U.pathnameBase])),route:L}),U.pathnameBase!=="/"&&(p=Wt([p,U.pathnameBase]))}return b}function lu(u,f){typeof u=="string"&&(u={path:u,caseSensitive:!1,end:!0});let[d,s]=f1(u.path,u.caseSensitive,u.end),m=f.match(d);if(!m)return null;let p=m[0],b=p.replace(/(.)\/+$/,"$1"),w=m.slice(1);return{params:s.reduce((v,{paramName:A,isOptional:U},L)=>{if(A==="*"){let Z=w[L]||"";b=p.slice(0,p.length-Z.length).replace(/(.)\/+$/,"$1")}const V=w[L];return U&&!V?v[A]=void 0:v[A]=(V||"").replace(/%2F/g,"/"),v},{}),pathname:p,pathnameBase:b,pattern:u}}function f1(u,f=!1,d=!0){Tt(u==="*"||!u.endsWith("*")||u.endsWith("/*"),`Route path "${u}" will be treated as if it were "${u.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${u.replace(/\*$/,"/*")}".`);let s=[],m="^"+u.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(b,w,S)=>(s.push({paramName:w,isOptional:S!=null}),S?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return u.endsWith("*")?(s.push({paramName:"*"}),m+=u==="*"||u==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):d?m+="\\/*$":u!==""&&u!=="/"&&(m+="(?:(?=\\/|$))"),[new RegExp(m,f?void 0:"i"),s]}function d1(u){try{return u.split("/").map(f=>decodeURIComponent(f).replace(/\//g,"%2F")).join("/")}catch(f){return Tt(!1,`The URL path "${u}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${f}).`),u}}function $t(u,f){if(f==="/")return u;if(!u.toLowerCase().startsWith(f.toLowerCase()))return null;let d=f.endsWith("/")?f.length-1:f.length,s=u.charAt(d);return s&&s!=="/"?null:u.slice(d)||"/"}function h1(u,f="/"){let{pathname:d,search:s="",hash:m=""}=typeof u=="string"?Da(u):u;return{pathname:d?d.startsWith("/")?d:m1(d,f):f,search:v1(s),hash:x1(m)}}function m1(u,f){let d=f.replace(/\/+$/,"").split("/");return u.split("/").forEach(m=>{m===".."?d.length>1&&d.pop():m!=="."&&d.push(m)}),d.length>1?d.join("/"):"/"}function wc(u,f,d,s){return`Cannot include a '${u}' character in a manually specified \`to.${f}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${d}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function p1(u){return u.filter((f,d)=>d===0||f.route.path&&f.route.path.length>0)}function n0(u){let f=p1(u);return f.map((d,s)=>s===f.length-1?d.pathname:d.pathnameBase)}function i0(u,f,d,s=!1){let m;typeof u=="string"?m=Da(u):(m={...u},Be(!m.pathname||!m.pathname.includes("?"),wc("?","pathname","search",m)),Be(!m.pathname||!m.pathname.includes("#"),wc("#","pathname","hash",m)),Be(!m.search||!m.search.includes("#"),wc("#","search","hash",m)));let p=u===""||m.pathname==="",b=p?"/":m.pathname,w;if(b==null)w=d;else{let U=f.length-1;if(!s&&b.startsWith("..")){let L=b.split("/");for(;L[0]==="..";)L.shift(),U-=1;m.pathname=L.join("/")}w=U>=0?f[U]:"/"}let S=h1(m,w),v=b&&b!=="/"&&b.endsWith("/"),A=(p||b===".")&&d.endsWith("/");return!S.pathname.endsWith("/")&&(v||A)&&(S.pathname+="/"),S}var Wt=u=>u.join("/").replace(/\/\/+/g,"/"),g1=u=>u.replace(/\/+$/,"").replace(/^\/*/,"/"),v1=u=>!u||u==="?"?"":u.startsWith("?")?u:"?"+u,x1=u=>!u||u==="#"?"":u.startsWith("#")?u:"#"+u;function y1(u){return u!=null&&typeof u.status=="number"&&typeof u.statusText=="string"&&typeof u.internal=="boolean"&&"data"in u}var u0=["POST","PUT","PATCH","DELETE"];new Set(u0);var b1=["GET",...u0];new Set(b1);var Ma=R.createContext(null);Ma.displayName="DataRouter";var au=R.createContext(null);au.displayName="DataRouterState";R.createContext(!1);var r0=R.createContext({isTransitioning:!1});r0.displayName="ViewTransition";var S1=R.createContext(new Map);S1.displayName="Fetchers";var j1=R.createContext(null);j1.displayName="Await";var Nt=R.createContext(null);Nt.displayName="Navigation";var nu=R.createContext(null);nu.displayName="Location";var Ft=R.createContext({outlet:null,matches:[],isDataRoute:!1});Ft.displayName="Route";var Oc=R.createContext(null);Oc.displayName="RouteError";function z1(u,{relative:f}={}){Be(Bn(),"useHref() may be used only in the context of a <Router> component.");let{basename:d,navigator:s}=R.useContext(Nt),{hash:m,pathname:p,search:b}=_n(u,{relative:f}),w=p;return d!=="/"&&(w=p==="/"?d:Wt([d,p])),s.createHref({pathname:w,search:b,hash:m})}function Bn(){return R.useContext(nu)!=null}function Ql(){return Be(Bn(),"useLocation() may be used only in the context of a <Router> component."),R.useContext(nu).location}var c0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function o0(u){R.useContext(Nt).static||R.useLayoutEffect(u)}function E1(){let{isDataRoute:u}=R.useContext(Ft);return u?H1():T1()}function T1(){Be(Bn(),"useNavigate() may be used only in the context of a <Router> component.");let u=R.useContext(Ma),{basename:f,navigator:d}=R.useContext(Nt),{matches:s}=R.useContext(Ft),{pathname:m}=Ql(),p=JSON.stringify(n0(s)),b=R.useRef(!1);return o0(()=>{b.current=!0}),R.useCallback((S,v={})=>{if(Tt(b.current,c0),!b.current)return;if(typeof S=="number"){d.go(S);return}let A=i0(S,JSON.parse(p),m,v.relative==="path");u==null&&f!=="/"&&(A.pathname=A.pathname==="/"?f:Wt([f,A.pathname])),(v.replace?d.replace:d.push)(A,v.state,v)},[f,d,p,m,u])}R.createContext(null);function _n(u,{relative:f}={}){let{matches:d}=R.useContext(Ft),{pathname:s}=Ql(),m=JSON.stringify(n0(d));return R.useMemo(()=>i0(u,JSON.parse(m),s,f==="path"),[u,m,s,f])}function A1(u,f,d,s,m){Be(Bn(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:p}=R.useContext(Nt),{matches:b}=R.useContext(Ft),w=b[b.length-1],S=w?w.params:{},v=w?w.pathname:"/",A=w?w.pathnameBase:"/",U=w&&w.route;{let X=U&&U.path||"";s0(v,!U||X.endsWith("*")||X.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${v}" (under <Route path="${X}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${X}"> to <Route path="${X==="/"?"*":`${X}/*`}">.`)}let L=Ql(),V;V=L;let Z=V.pathname||"/",P=Z;if(A!=="/"){let X=A.replace(/^\//,"").split("/");P="/"+Z.replace(/^\//,"").split("/").slice(X.length).join("/")}let k=t0(u,{pathname:P});return Tt(U||k!=null,`No routes matched location "${V.pathname}${V.search}${V.hash}" `),Tt(k==null||k[k.length-1].route.element!==void 0||k[k.length-1].route.Component!==void 0||k[k.length-1].route.lazy!==void 0,`Matched leaf route at location "${V.pathname}${V.search}${V.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),M1(k&&k.map(X=>Object.assign({},X,{params:Object.assign({},S,X.params),pathname:Wt([A,p.encodeLocation?p.encodeLocation(X.pathname).pathname:X.pathname]),pathnameBase:X.pathnameBase==="/"?A:Wt([A,p.encodeLocation?p.encodeLocation(X.pathnameBase).pathname:X.pathnameBase])})),b,d,s,m)}function w1(){let u=U1(),f=y1(u)?`${u.status} ${u.statusText}`:u instanceof Error?u.message:JSON.stringify(u),d=u instanceof Error?u.stack:null,s="rgba(200,200,200, 0.5)",m={padding:"0.5rem",backgroundColor:s},p={padding:"2px 4px",backgroundColor:s},b=null;return console.error("Error handled by React Router default ErrorBoundary:",u),b=R.createElement(R.Fragment,null,R.createElement("p",null,"💿 Hey developer 👋"),R.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",R.createElement("code",{style:p},"ErrorBoundary")," or"," ",R.createElement("code",{style:p},"errorElement")," prop on your route.")),R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},f),d?R.createElement("pre",{style:m},d):null,b)}var C1=R.createElement(w1,null),R1=class extends R.Component{constructor(u){super(u),this.state={location:u.location,revalidation:u.revalidation,error:u.error}}static getDerivedStateFromError(u){return{error:u}}static getDerivedStateFromProps(u,f){return f.location!==u.location||f.revalidation!=="idle"&&u.revalidation==="idle"?{error:u.error,location:u.location,revalidation:u.revalidation}:{error:u.error!==void 0?u.error:f.error,location:f.location,revalidation:u.revalidation||f.revalidation}}componentDidCatch(u,f){this.props.unstable_onError?this.props.unstable_onError(u,f):console.error("React Router caught the following error during render",u)}render(){return this.state.error!==void 0?R.createElement(Ft.Provider,{value:this.props.routeContext},R.createElement(Oc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function D1({routeContext:u,match:f,children:d}){let s=R.useContext(Ma);return s&&s.static&&s.staticContext&&(f.route.errorElement||f.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=f.route.id),R.createElement(Ft.Provider,{value:u},d)}function M1(u,f=[],d=null,s=null,m=null){if(u==null){if(!d)return null;if(d.errors)u=d.matches;else if(f.length===0&&!d.initialized&&d.matches.length>0)u=d.matches;else return null}let p=u,b=d?.errors;if(b!=null){let v=p.findIndex(A=>A.route.id&&b?.[A.route.id]!==void 0);Be(v>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(b).join(",")}`),p=p.slice(0,Math.min(p.length,v+1))}let w=!1,S=-1;if(d)for(let v=0;v<p.length;v++){let A=p[v];if((A.route.HydrateFallback||A.route.hydrateFallbackElement)&&(S=v),A.route.id){let{loaderData:U,errors:L}=d,V=A.route.loader&&!U.hasOwnProperty(A.route.id)&&(!L||L[A.route.id]===void 0);if(A.route.lazy||V){w=!0,S>=0?p=p.slice(0,S+1):p=[p[0]];break}}}return p.reduceRight((v,A,U)=>{let L,V=!1,Z=null,P=null;d&&(L=b&&A.route.id?b[A.route.id]:void 0,Z=A.route.errorElement||C1,w&&(S<0&&U===0?(s0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),V=!0,P=null):S===U&&(V=!0,P=A.route.hydrateFallbackElement||null)));let k=f.concat(p.slice(0,U+1)),W=()=>{let X;return L?X=Z:V?X=P:A.route.Component?X=R.createElement(A.route.Component,null):A.route.element?X=A.route.element:X=v,R.createElement(D1,{match:A,routeContext:{outlet:v,matches:k,isDataRoute:d!=null},children:X})};return d&&(A.route.ErrorBoundary||A.route.errorElement||U===0)?R.createElement(R1,{location:d.location,revalidation:d.revalidation,component:Z,error:L,children:W(),routeContext:{outlet:null,matches:k,isDataRoute:!0},unstable_onError:s}):W()},null)}function Nc(u){return`${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function O1(u){let f=R.useContext(Ma);return Be(f,Nc(u)),f}function N1(u){let f=R.useContext(au);return Be(f,Nc(u)),f}function B1(u){let f=R.useContext(Ft);return Be(f,Nc(u)),f}function Bc(u){let f=B1(u),d=f.matches[f.matches.length-1];return Be(d.route.id,`${u} can only be used on routes that contain a unique "id"`),d.route.id}function _1(){return Bc("useRouteId")}function U1(){let u=R.useContext(Oc),f=N1("useRouteError"),d=Bc("useRouteError");return u!==void 0?u:f.errors?.[d]}function H1(){let{router:u}=O1("useNavigate"),f=Bc("useNavigate"),d=R.useRef(!1);return o0(()=>{d.current=!0}),R.useCallback(async(m,p={})=>{Tt(d.current,c0),d.current&&(typeof m=="number"?u.navigate(m):await u.navigate(m,{fromRouteId:f,...p}))},[u,f])}var Wd={};function s0(u,f,d){!f&&!Wd[u]&&(Wd[u]=!0,Tt(!1,d))}R.memo(Y1);function Y1({routes:u,future:f,state:d,unstable_onError:s}){return A1(u,void 0,d,s,f)}function L1({basename:u="/",children:f=null,location:d,navigationType:s="POP",navigator:m,static:p=!1}){Be(!Bn(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let b=u.replace(/^\/*/,"/"),w=R.useMemo(()=>({basename:b,navigator:m,static:p,future:{}}),[b,m,p]);typeof d=="string"&&(d=Da(d));let{pathname:S="/",search:v="",hash:A="",state:U=null,key:L="default"}=d,V=R.useMemo(()=>{let Z=$t(S,b);return Z==null?null:{location:{pathname:Z,search:v,hash:A,state:U,key:L},navigationType:s}},[b,S,v,A,U,L,s]);return Tt(V!=null,`<Router basename="${b}"> is not able to match the URL "${S}${v}${A}" because it does not start with the basename, so the <Router> won't render anything.`),V==null?null:R.createElement(Nt.Provider,{value:w},R.createElement(nu.Provider,{children:f,value:V}))}var Ii="get",Pi="application/x-www-form-urlencoded";function iu(u){return u!=null&&typeof u.tagName=="string"}function q1(u){return iu(u)&&u.tagName.toLowerCase()==="button"}function k1(u){return iu(u)&&u.tagName.toLowerCase()==="form"}function G1(u){return iu(u)&&u.tagName.toLowerCase()==="input"}function X1(u){return!!(u.metaKey||u.altKey||u.ctrlKey||u.shiftKey)}function Q1(u,f){return u.button===0&&(!f||f==="_self")&&!X1(u)}var Fi=null;function V1(){if(Fi===null)try{new FormData(document.createElement("form"),0),Fi=!1}catch{Fi=!0}return Fi}var Z1=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Cc(u){return u!=null&&!Z1.has(u)?(Tt(!1,`"${u}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Pi}"`),null):u}function K1(u,f){let d,s,m,p,b;if(k1(u)){let w=u.getAttribute("action");s=w?$t(w,f):null,d=u.getAttribute("method")||Ii,m=Cc(u.getAttribute("enctype"))||Pi,p=new FormData(u)}else if(q1(u)||G1(u)&&(u.type==="submit"||u.type==="image")){let w=u.form;if(w==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let S=u.getAttribute("formaction")||w.getAttribute("action");if(s=S?$t(S,f):null,d=u.getAttribute("formmethod")||w.getAttribute("method")||Ii,m=Cc(u.getAttribute("formenctype"))||Cc(w.getAttribute("enctype"))||Pi,p=new FormData(w,u),!V1()){let{name:v,type:A,value:U}=u;if(A==="image"){let L=v?`${v}.`:"";p.append(`${L}x`,"0"),p.append(`${L}y`,"0")}else v&&p.append(v,U)}}else{if(iu(u))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');d=Ii,s=null,m=Pi,b=u}return p&&m==="text/plain"&&(b=p,p=void 0),{action:s,method:d.toLowerCase(),encType:m,formData:p,body:b}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function _c(u,f){if(u===!1||u===null||typeof u>"u")throw new Error(f)}function J1(u,f,d){let s=typeof u=="string"?new URL(u,typeof window>"u"?"server://singlefetch/":window.location.origin):u;return s.pathname==="/"?s.pathname=`_root.${d}`:f&&$t(s.pathname,f)==="/"?s.pathname=`${f.replace(/\/$/,"")}/_root.${d}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${d}`,s}async function W1(u,f){if(u.id in f)return f[u.id];try{let d=await import(u.module);return f[u.id]=d,d}catch(d){return console.error(`Error loading route module \`${u.module}\`, reloading page...`),console.error(d),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function $1(u){return u==null?!1:u.href==null?u.rel==="preload"&&typeof u.imageSrcSet=="string"&&typeof u.imageSizes=="string":typeof u.rel=="string"&&typeof u.href=="string"}async function F1(u,f,d){let s=await Promise.all(u.map(async m=>{let p=f.routes[m.route.id];if(p){let b=await W1(p,d);return b.links?b.links():[]}return[]}));return tg(s.flat(1).filter($1).filter(m=>m.rel==="stylesheet"||m.rel==="preload").map(m=>m.rel==="stylesheet"?{...m,rel:"prefetch",as:"style"}:{...m,rel:"prefetch"}))}function $d(u,f,d,s,m,p){let b=(S,v)=>d[v]?S.route.id!==d[v].route.id:!0,w=(S,v)=>d[v].pathname!==S.pathname||d[v].route.path?.endsWith("*")&&d[v].params["*"]!==S.params["*"];return p==="assets"?f.filter((S,v)=>b(S,v)||w(S,v)):p==="data"?f.filter((S,v)=>{let A=s.routes[S.route.id];if(!A||!A.hasLoader)return!1;if(b(S,v)||w(S,v))return!0;if(S.route.shouldRevalidate){let U=S.route.shouldRevalidate({currentUrl:new URL(m.pathname+m.search+m.hash,window.origin),currentParams:d[0]?.params||{},nextUrl:new URL(u,window.origin),nextParams:S.params,defaultShouldRevalidate:!0});if(typeof U=="boolean")return U}return!0}):[]}function I1(u,f,{includeHydrateFallback:d}={}){return P1(u.map(s=>{let m=f.routes[s.route.id];if(!m)return[];let p=[m.module];return m.clientActionModule&&(p=p.concat(m.clientActionModule)),m.clientLoaderModule&&(p=p.concat(m.clientLoaderModule)),d&&m.hydrateFallbackModule&&(p=p.concat(m.hydrateFallbackModule)),m.imports&&(p=p.concat(m.imports)),p}).flat(1))}function P1(u){return[...new Set(u)]}function eg(u){let f={},d=Object.keys(u).sort();for(let s of d)f[s]=u[s];return f}function tg(u,f){let d=new Set;return new Set(f),u.reduce((s,m)=>{let p=JSON.stringify(eg(m));return d.has(p)||(d.add(p),s.push({key:p,link:m})),s},[])}function f0(){let u=R.useContext(Ma);return _c(u,"You must render this element inside a <DataRouterContext.Provider> element"),u}function lg(){let u=R.useContext(au);return _c(u,"You must render this element inside a <DataRouterStateContext.Provider> element"),u}var Uc=R.createContext(void 0);Uc.displayName="FrameworkContext";function d0(){let u=R.useContext(Uc);return _c(u,"You must render this element inside a <HydratedRouter> element"),u}function ag(u,f){let d=R.useContext(Uc),[s,m]=R.useState(!1),[p,b]=R.useState(!1),{onFocus:w,onBlur:S,onMouseEnter:v,onMouseLeave:A,onTouchStart:U}=f,L=R.useRef(null);R.useEffect(()=>{if(u==="render"&&b(!0),u==="viewport"){let P=W=>{W.forEach(X=>{b(X.isIntersecting)})},k=new IntersectionObserver(P,{threshold:.5});return L.current&&k.observe(L.current),()=>{k.disconnect()}}},[u]),R.useEffect(()=>{if(s){let P=setTimeout(()=>{b(!0)},100);return()=>{clearTimeout(P)}}},[s]);let V=()=>{m(!0)},Z=()=>{m(!1),b(!1)};return d?u!=="intent"?[p,L,{}]:[p,L,{onFocus:On(w,V),onBlur:On(S,Z),onMouseEnter:On(v,V),onMouseLeave:On(A,Z),onTouchStart:On(U,V)}]:[!1,L,{}]}function On(u,f){return d=>{u&&u(d),d.defaultPrevented||f(d)}}function ng({page:u,...f}){let{router:d}=f0(),s=R.useMemo(()=>t0(d.routes,u,d.basename),[d.routes,u,d.basename]);return s?R.createElement(ug,{page:u,matches:s,...f}):null}function ig(u){let{manifest:f,routeModules:d}=d0(),[s,m]=R.useState([]);return R.useEffect(()=>{let p=!1;return F1(u,f,d).then(b=>{p||m(b)}),()=>{p=!0}},[u,f,d]),s}function ug({page:u,matches:f,...d}){let s=Ql(),{manifest:m,routeModules:p}=d0(),{basename:b}=f0(),{loaderData:w,matches:S}=lg(),v=R.useMemo(()=>$d(u,f,S,m,s,"data"),[u,f,S,m,s]),A=R.useMemo(()=>$d(u,f,S,m,s,"assets"),[u,f,S,m,s]),U=R.useMemo(()=>{if(u===s.pathname+s.search+s.hash)return[];let Z=new Set,P=!1;if(f.forEach(W=>{let X=m.routes[W.route.id];!X||!X.hasLoader||(!v.some(le=>le.route.id===W.route.id)&&W.route.id in w&&p[W.route.id]?.shouldRevalidate||X.hasClientLoader?P=!0:Z.add(W.route.id))}),Z.size===0)return[];let k=J1(u,b,"data");return P&&Z.size>0&&k.searchParams.set("_routes",f.filter(W=>Z.has(W.route.id)).map(W=>W.route.id).join(",")),[k.pathname+k.search]},[b,w,s,m,v,f,u,p]),L=R.useMemo(()=>I1(A,m),[A,m]),V=ig(A);return R.createElement(R.Fragment,null,U.map(Z=>R.createElement("link",{key:Z,rel:"prefetch",as:"fetch",href:Z,...d})),L.map(Z=>R.createElement("link",{key:Z,rel:"modulepreload",href:Z,...d})),V.map(({key:Z,link:P})=>R.createElement("link",{key:Z,nonce:d.nonce,...P})))}function rg(...u){return f=>{u.forEach(d=>{typeof d=="function"?d(f):d!=null&&(d.current=f)})}}var h0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{h0&&(window.__reactRouterVersion="7.9.1")}catch{}function cg({basename:u,children:f,window:d}){let s=R.useRef();s.current==null&&(s.current=$p({window:d,v5Compat:!0}));let m=s.current,[p,b]=R.useState({action:m.action,location:m.location}),w=R.useCallback(S=>{R.startTransition(()=>b(S))},[b]);return R.useLayoutEffect(()=>m.listen(w),[m,w]),R.createElement(L1,{basename:u,children:f,location:p.location,navigationType:p.action,navigator:m})}var m0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,p0=R.forwardRef(function({onClick:f,discover:d="render",prefetch:s="none",relative:m,reloadDocument:p,replace:b,state:w,target:S,to:v,preventScrollReset:A,viewTransition:U,...L},V){let{basename:Z}=R.useContext(Nt),P=typeof v=="string"&&m0.test(v),k,W=!1;if(typeof v=="string"&&P&&(k=v,h0))try{let Ee=new URL(window.location.href),tt=v.startsWith("//")?new URL(Ee.protocol+v):new URL(v),dt=$t(tt.pathname,Z);tt.origin===Ee.origin&&dt!=null?v=dt+tt.search+tt.hash:W=!0}catch{Tt(!1,`<Link to="${v}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let X=z1(v,{relative:m}),[le,je,ee]=ag(s,L),_e=dg(v,{replace:b,state:w,target:S,preventScrollReset:A,relative:m,viewTransition:U});function Me(Ee){f&&f(Ee),Ee.defaultPrevented||_e(Ee)}let Ue=R.createElement("a",{...L,...ee,href:k||X,onClick:W||p?f:Me,ref:rg(V,je),target:S,"data-discover":!P&&d==="render"?"true":void 0});return le&&!P?R.createElement(R.Fragment,null,Ue,R.createElement(ng,{page:X})):Ue});p0.displayName="Link";var og=R.forwardRef(function({"aria-current":f="page",caseSensitive:d=!1,className:s="",end:m=!1,style:p,to:b,viewTransition:w,children:S,...v},A){let U=_n(b,{relative:v.relative}),L=Ql(),V=R.useContext(au),{navigator:Z,basename:P}=R.useContext(Nt),k=V!=null&&vg(U)&&w===!0,W=Z.encodeLocation?Z.encodeLocation(U).pathname:U.pathname,X=L.pathname,le=V&&V.navigation&&V.navigation.location?V.navigation.location.pathname:null;d||(X=X.toLowerCase(),le=le?le.toLowerCase():null,W=W.toLowerCase()),le&&P&&(le=$t(le,P)||le);const je=W!=="/"&&W.endsWith("/")?W.length-1:W.length;let ee=X===W||!m&&X.startsWith(W)&&X.charAt(je)==="/",_e=le!=null&&(le===W||!m&&le.startsWith(W)&&le.charAt(W.length)==="/"),Me={isActive:ee,isPending:_e,isTransitioning:k},Ue=ee?f:void 0,Ee;typeof s=="function"?Ee=s(Me):Ee=[s,ee?"active":null,_e?"pending":null,k?"transitioning":null].filter(Boolean).join(" ");let tt=typeof p=="function"?p(Me):p;return R.createElement(p0,{...v,"aria-current":Ue,className:Ee,ref:A,style:tt,to:b,viewTransition:w},typeof S=="function"?S(Me):S)});og.displayName="NavLink";var sg=R.forwardRef(({discover:u="render",fetcherKey:f,navigate:d,reloadDocument:s,replace:m,state:p,method:b=Ii,action:w,onSubmit:S,relative:v,preventScrollReset:A,viewTransition:U,...L},V)=>{let Z=pg(),P=gg(w,{relative:v}),k=b.toLowerCase()==="get"?"get":"post",W=typeof w=="string"&&m0.test(w),X=le=>{if(S&&S(le),le.defaultPrevented)return;le.preventDefault();let je=le.nativeEvent.submitter,ee=je?.getAttribute("formmethod")||b;Z(je||le.currentTarget,{fetcherKey:f,method:ee,navigate:d,replace:m,state:p,relative:v,preventScrollReset:A,viewTransition:U})};return R.createElement("form",{ref:V,method:k,action:P,onSubmit:s?S:X,...L,"data-discover":!W&&u==="render"?"true":void 0})});sg.displayName="Form";function fg(u){return`${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function g0(u){let f=R.useContext(Ma);return Be(f,fg(u)),f}function dg(u,{target:f,replace:d,state:s,preventScrollReset:m,relative:p,viewTransition:b}={}){let w=E1(),S=Ql(),v=_n(u,{relative:p});return R.useCallback(A=>{if(Q1(A,f)){A.preventDefault();let U=d!==void 0?d:Nn(S)===Nn(v);w(u,{replace:U,state:s,preventScrollReset:m,relative:p,viewTransition:b})}},[S,w,v,d,s,f,u,m,p,b])}var hg=0,mg=()=>`__${String(++hg)}__`;function pg(){let{router:u}=g0("useSubmit"),{basename:f}=R.useContext(Nt),d=_1();return R.useCallback(async(s,m={})=>{let{action:p,method:b,encType:w,formData:S,body:v}=K1(s,f);if(m.navigate===!1){let A=m.fetcherKey||mg();await u.fetch(A,d,m.action||p,{preventScrollReset:m.preventScrollReset,formData:S,body:v,formMethod:m.method||b,formEncType:m.encType||w,flushSync:m.flushSync})}else await u.navigate(m.action||p,{preventScrollReset:m.preventScrollReset,formData:S,body:v,formMethod:m.method||b,formEncType:m.encType||w,replace:m.replace,state:m.state,fromRouteId:d,flushSync:m.flushSync,viewTransition:m.viewTransition})},[u,f,d])}function gg(u,{relative:f}={}){let{basename:d}=R.useContext(Nt),s=R.useContext(Ft);Be(s,"useFormAction must be used inside a RouteContext");let[m]=s.matches.slice(-1),p={..._n(u||".",{relative:f})},b=Ql();if(u==null){p.search=b.search;let w=new URLSearchParams(p.search),S=w.getAll("index");if(S.some(A=>A==="")){w.delete("index"),S.filter(U=>U).forEach(U=>w.append("index",U));let A=w.toString();p.search=A?`?${A}`:""}}return(!u||u===".")&&m.route.index&&(p.search=p.search?p.search.replace(/^\?/,"?index&"):"?index"),d!=="/"&&(p.pathname=p.pathname==="/"?d:Wt([d,p.pathname])),Nn(p)}function vg(u,{relative:f}={}){let d=R.useContext(r0);Be(d!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=g0("useViewTransitionState"),m=_n(u,{relative:f});if(!d.isTransitioning)return!1;let p=$t(d.currentLocation.pathname,s)||d.currentLocation.pathname,b=$t(d.nextLocation.pathname,s)||d.nextLocation.pathname;return lu(m.pathname,b)!=null||lu(m.pathname,p)!=null}Wm.createRoot(document.getElementById("root")).render(c.jsx(cg,{children:c.jsx(R.StrictMode,{children:c.jsx(Wp,{})})}));
