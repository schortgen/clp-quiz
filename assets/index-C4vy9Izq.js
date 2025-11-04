(function(){const Y=document.createElement("link").relList;if(Y&&Y.supports&&Y.supports("modulepreload"))return;for(const M of document.querySelectorAll('link[rel="modulepreload"]'))d(M);new MutationObserver(M=>{for(const C of M)if(C.type==="childList")for(const Z of C.addedNodes)Z.tagName==="LINK"&&Z.rel==="modulepreload"&&d(Z)}).observe(document,{childList:!0,subtree:!0});function N(M){const C={};return M.integrity&&(C.integrity=M.integrity),M.referrerPolicy&&(C.referrerPolicy=M.referrerPolicy),M.crossOrigin==="use-credentials"?C.credentials="include":M.crossOrigin==="anonymous"?C.credentials="omit":C.credentials="same-origin",C}function d(M){if(M.ep)return;M.ep=!0;const C=N(M);fetch(M.href,C)}})();function Ed(A){return A&&A.__esModule&&Object.prototype.hasOwnProperty.call(A,"default")?A.default:A}var is={exports:{}},On={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yd;function $g(){if(yd)return On;yd=1;var A=Symbol.for("react.transitional.element"),Y=Symbol.for("react.fragment");function N(d,M,C){var Z=null;if(C!==void 0&&(Z=""+C),M.key!==void 0&&(Z=""+M.key),"key"in M){C={};for(var L in M)L!=="key"&&(C[L]=M[L])}else C=M;return M=C.ref,{$$typeof:A,type:d,key:Z,ref:M!==void 0?M:null,props:C}}return On.Fragment=Y,On.jsx=N,On.jsxs=N,On}var pd;function Fg(){return pd||(pd=1,is.exports=$g()),is.exports}var T=Fg(),ss={exports:{}},R={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var md;function Pg(){if(md)return R;md=1;var A=Symbol.for("react.transitional.element"),Y=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),C=Symbol.for("react.consumer"),Z=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),E=Symbol.for("react.suspense"),w=Symbol.for("react.memo"),U=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),ee=Symbol.iterator;function V(h){return h===null||typeof h!="object"?null:(h=ee&&h[ee]||h["@@iterator"],typeof h=="function"?h:null)}var ve={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},K=Object.assign,pe={};function ze(h,O,Q){this.props=h,this.context=O,this.refs=pe,this.updater=Q||ve}ze.prototype.isReactComponent={},ze.prototype.setState=function(h,O){if(typeof h!="object"&&typeof h!="function"&&h!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,h,O,"setState")},ze.prototype.forceUpdate=function(h){this.updater.enqueueForceUpdate(this,h,"forceUpdate")};function _t(){}_t.prototype=ze.prototype;function De(h,O,Q){this.props=h,this.context=O,this.refs=pe,this.updater=Q||ve}var Le=De.prototype=new _t;Le.constructor=De,K(Le,ze.prototype),Le.isPureReactComponent=!0;var ct=Array.isArray;function Re(){}var H={H:null,A:null,T:null,S:null},Te=Object.prototype.hasOwnProperty;function et(h,O,Q){var z=Q.ref;return{$$typeof:A,type:h,key:O,ref:z!==void 0?z:null,props:Q}}function Xe(h,O){return et(h.type,O,h.props)}function dt(h){return typeof h=="object"&&h!==null&&h.$$typeof===A}function Ze(h){var O={"=":"=0",":":"=2"};return"$"+h.replace(/[=:]/g,function(Q){return O[Q]})}var Aa=/\/+/g;function Ct(h,O){return typeof h=="object"&&h!==null&&h.key!=null?Ze(""+h.key):O.toString(36)}function At(h){switch(h.status){case"fulfilled":return h.value;case"rejected":throw h.reason;default:switch(typeof h.status=="string"?h.then(Re,Re):(h.status="pending",h.then(function(O){h.status==="pending"&&(h.status="fulfilled",h.value=O)},function(O){h.status==="pending"&&(h.status="rejected",h.reason=O)})),h.status){case"fulfilled":return h.value;case"rejected":throw h.reason}}throw h}function v(h,O,Q,z,W){var J=typeof h;(J==="undefined"||J==="boolean")&&(h=null);var le=!1;if(h===null)le=!0;else switch(J){case"bigint":case"string":case"number":le=!0;break;case"object":switch(h.$$typeof){case A:case Y:le=!0;break;case U:return le=h._init,v(le(h._payload),O,Q,z,W)}}if(le)return W=W(h),le=z===""?"."+Ct(h,0):z,ct(W)?(Q="",le!=null&&(Q=le.replace(Aa,"$&/")+"/"),v(W,O,Q,"",function(_o){return _o})):W!=null&&(dt(W)&&(W=Xe(W,Q+(W.key==null||h&&h.key===W.key?"":(""+W.key).replace(Aa,"$&/")+"/")+le)),O.push(W)),1;le=0;var We=z===""?".":z+":";if(ct(h))for(var ke=0;ke<h.length;ke++)z=h[ke],J=We+Ct(z,ke),le+=v(z,O,Q,J,W);else if(ke=V(h),typeof ke=="function")for(h=ke.call(h),ke=0;!(z=h.next()).done;)z=z.value,J=We+Ct(z,ke++),le+=v(z,O,Q,J,W);else if(J==="object"){if(typeof h.then=="function")return v(At(h),O,Q,z,W);throw O=String(h),Error("Objects are not valid as a React child (found: "+(O==="[object Object]"?"object with keys {"+Object.keys(h).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.")}return le}function S(h,O,Q){if(h==null)return h;var z=[],W=0;return v(h,z,"","",function(J){return O.call(Q,J,W++)}),z}function q(h){if(h._status===-1){var O=h._result;O=O(),O.then(function(Q){(h._status===0||h._status===-1)&&(h._status=1,h._result=Q)},function(Q){(h._status===0||h._status===-1)&&(h._status=2,h._result=Q)}),h._status===-1&&(h._status=0,h._result=O)}if(h._status===1)return h._result.default;throw h._result}var se=typeof reportError=="function"?reportError:function(h){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var O=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof h=="object"&&h!==null&&typeof h.message=="string"?String(h.message):String(h),error:h});if(!window.dispatchEvent(O))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",h);return}console.error(h)},de={map:S,forEach:function(h,O,Q){S(h,function(){O.apply(this,arguments)},Q)},count:function(h){var O=0;return S(h,function(){O++}),O},toArray:function(h){return S(h,function(O){return O})||[]},only:function(h){if(!dt(h))throw Error("React.Children.only expected to receive a single React element child.");return h}};return R.Activity=x,R.Children=de,R.Component=ze,R.Fragment=N,R.Profiler=M,R.PureComponent=De,R.StrictMode=d,R.Suspense=E,R.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=H,R.__COMPILER_RUNTIME={__proto__:null,c:function(h){return H.H.useMemoCache(h)}},R.cache=function(h){return function(){return h.apply(null,arguments)}},R.cacheSignal=function(){return null},R.cloneElement=function(h,O,Q){if(h==null)throw Error("The argument must be a React element, but you passed "+h+".");var z=K({},h.props),W=h.key;if(O!=null)for(J in O.key!==void 0&&(W=""+O.key),O)!Te.call(O,J)||J==="key"||J==="__self"||J==="__source"||J==="ref"&&O.ref===void 0||(z[J]=O[J]);var J=arguments.length-2;if(J===1)z.children=Q;else if(1<J){for(var le=Array(J),We=0;We<J;We++)le[We]=arguments[We+2];z.children=le}return et(h.type,W,z)},R.createContext=function(h){return h={$$typeof:Z,_currentValue:h,_currentValue2:h,_threadCount:0,Provider:null,Consumer:null},h.Provider=h,h.Consumer={$$typeof:C,_context:h},h},R.createElement=function(h,O,Q){var z,W={},J=null;if(O!=null)for(z in O.key!==void 0&&(J=""+O.key),O)Te.call(O,z)&&z!=="key"&&z!=="__self"&&z!=="__source"&&(W[z]=O[z]);var le=arguments.length-2;if(le===1)W.children=Q;else if(1<le){for(var We=Array(le),ke=0;ke<le;ke++)We[ke]=arguments[ke+2];W.children=We}if(h&&h.defaultProps)for(z in le=h.defaultProps,le)W[z]===void 0&&(W[z]=le[z]);return et(h,J,W)},R.createRef=function(){return{current:null}},R.forwardRef=function(h){return{$$typeof:L,render:h}},R.isValidElement=dt,R.lazy=function(h){return{$$typeof:U,_payload:{_status:-1,_result:h},_init:q}},R.memo=function(h,O){return{$$typeof:w,type:h,compare:O===void 0?null:O}},R.startTransition=function(h){var O=H.T,Q={};H.T=Q;try{var z=h(),W=H.S;W!==null&&W(Q,z),typeof z=="object"&&z!==null&&typeof z.then=="function"&&z.then(Re,se)}catch(J){se(J)}finally{O!==null&&Q.types!==null&&(O.types=Q.types),H.T=O}},R.unstable_useCacheRefresh=function(){return H.H.useCacheRefresh()},R.use=function(h){return H.H.use(h)},R.useActionState=function(h,O,Q){return H.H.useActionState(h,O,Q)},R.useCallback=function(h,O){return H.H.useCallback(h,O)},R.useContext=function(h){return H.H.useContext(h)},R.useDebugValue=function(){},R.useDeferredValue=function(h,O){return H.H.useDeferredValue(h,O)},R.useEffect=function(h,O){return H.H.useEffect(h,O)},R.useEffectEvent=function(h){return H.H.useEffectEvent(h)},R.useId=function(){return H.H.useId()},R.useImperativeHandle=function(h,O,Q){return H.H.useImperativeHandle(h,O,Q)},R.useInsertionEffect=function(h,O){return H.H.useInsertionEffect(h,O)},R.useLayoutEffect=function(h,O){return H.H.useLayoutEffect(h,O)},R.useMemo=function(h,O){return H.H.useMemo(h,O)},R.useOptimistic=function(h,O){return H.H.useOptimistic(h,O)},R.useReducer=function(h,O,Q){return H.H.useReducer(h,O,Q)},R.useRef=function(h){return H.H.useRef(h)},R.useState=function(h){return H.H.useState(h)},R.useSyncExternalStore=function(h,O,Q){return H.H.useSyncExternalStore(h,O,Q)},R.useTransition=function(){return H.H.useTransition()},R.version="19.2.0",R}var vd;function fs(){return vd||(vd=1,ss.exports=Pg()),ss.exports}var Be=fs();const ey=Ed(Be);var us={exports:{}},An={},hs={exports:{}},cs={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bd;function ty(){return bd||(bd=1,(function(A){function Y(v,S){var q=v.length;v.push(S);e:for(;0<q;){var se=q-1>>>1,de=v[se];if(0<M(de,S))v[se]=S,v[q]=de,q=se;else break e}}function N(v){return v.length===0?null:v[0]}function d(v){if(v.length===0)return null;var S=v[0],q=v.pop();if(q!==S){v[0]=q;e:for(var se=0,de=v.length,h=de>>>1;se<h;){var O=2*(se+1)-1,Q=v[O],z=O+1,W=v[z];if(0>M(Q,q))z<de&&0>M(W,Q)?(v[se]=W,v[z]=q,se=z):(v[se]=Q,v[O]=q,se=O);else if(z<de&&0>M(W,q))v[se]=W,v[z]=q,se=z;else break e}}return S}function M(v,S){var q=v.sortIndex-S.sortIndex;return q!==0?q:v.id-S.id}if(A.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var C=performance;A.unstable_now=function(){return C.now()}}else{var Z=Date,L=Z.now();A.unstable_now=function(){return Z.now()-L}}var E=[],w=[],U=1,x=null,ee=3,V=!1,ve=!1,K=!1,pe=!1,ze=typeof setTimeout=="function"?setTimeout:null,_t=typeof clearTimeout=="function"?clearTimeout:null,De=typeof setImmediate<"u"?setImmediate:null;function Le(v){for(var S=N(w);S!==null;){if(S.callback===null)d(w);else if(S.startTime<=v)d(w),S.sortIndex=S.expirationTime,Y(E,S);else break;S=N(w)}}function ct(v){if(K=!1,Le(v),!ve)if(N(E)!==null)ve=!0,Re||(Re=!0,Ze());else{var S=N(w);S!==null&&At(ct,S.startTime-v)}}var Re=!1,H=-1,Te=5,et=-1;function Xe(){return pe?!0:!(A.unstable_now()-et<Te)}function dt(){if(pe=!1,Re){var v=A.unstable_now();et=v;var S=!0;try{e:{ve=!1,K&&(K=!1,_t(H),H=-1),V=!0;var q=ee;try{t:{for(Le(v),x=N(E);x!==null&&!(x.expirationTime>v&&Xe());){var se=x.callback;if(typeof se=="function"){x.callback=null,ee=x.priorityLevel;var de=se(x.expirationTime<=v);if(v=A.unstable_now(),typeof de=="function"){x.callback=de,Le(v),S=!0;break t}x===N(E)&&d(E),Le(v)}else d(E);x=N(E)}if(x!==null)S=!0;else{var h=N(w);h!==null&&At(ct,h.startTime-v),S=!1}}break e}finally{x=null,ee=q,V=!1}S=void 0}}finally{S?Ze():Re=!1}}}var Ze;if(typeof De=="function")Ze=function(){De(dt)};else if(typeof MessageChannel<"u"){var Aa=new MessageChannel,Ct=Aa.port2;Aa.port1.onmessage=dt,Ze=function(){Ct.postMessage(null)}}else Ze=function(){ze(dt,0)};function At(v,S){H=ze(function(){v(A.unstable_now())},S)}A.unstable_IdlePriority=5,A.unstable_ImmediatePriority=1,A.unstable_LowPriority=4,A.unstable_NormalPriority=3,A.unstable_Profiling=null,A.unstable_UserBlockingPriority=2,A.unstable_cancelCallback=function(v){v.callback=null},A.unstable_forceFrameRate=function(v){0>v||125<v?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Te=0<v?Math.floor(1e3/v):5},A.unstable_getCurrentPriorityLevel=function(){return ee},A.unstable_next=function(v){switch(ee){case 1:case 2:case 3:var S=3;break;default:S=ee}var q=ee;ee=S;try{return v()}finally{ee=q}},A.unstable_requestPaint=function(){pe=!0},A.unstable_runWithPriority=function(v,S){switch(v){case 1:case 2:case 3:case 4:case 5:break;default:v=3}var q=ee;ee=v;try{return S()}finally{ee=q}},A.unstable_scheduleCallback=function(v,S,q){var se=A.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?se+q:se):q=se,v){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=q+de,v={id:U++,callback:S,priorityLevel:v,startTime:q,expirationTime:de,sortIndex:-1},q>se?(v.sortIndex=q,Y(w,v),N(E)===null&&v===N(w)&&(K?(_t(H),H=-1):K=!0,At(ct,q-se))):(v.sortIndex=de,Y(E,v),ve||V||(ve=!0,Re||(Re=!0,Ze()))),v},A.unstable_shouldYield=Xe,A.unstable_wrapCallback=function(v){var S=ee;return function(){var q=ee;ee=S;try{return v.apply(this,arguments)}finally{ee=q}}}})(cs)),cs}var wd;function ay(){return wd||(wd=1,hs.exports=ty()),hs.exports}var ds={exports:{}},He={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kd;function oy(){if(kd)return He;kd=1;var A=fs();function Y(E){var w="https://react.dev/errors/"+E;if(1<arguments.length){w+="?args[]="+encodeURIComponent(arguments[1]);for(var U=2;U<arguments.length;U++)w+="&args[]="+encodeURIComponent(arguments[U])}return"Minified React error #"+E+"; visit "+w+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function N(){}var d={d:{f:N,r:function(){throw Error(Y(522))},D:N,C:N,L:N,m:N,X:N,S:N,M:N},p:0,findDOMNode:null},M=Symbol.for("react.portal");function C(E,w,U){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:M,key:x==null?null:""+x,children:E,containerInfo:w,implementation:U}}var Z=A.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function L(E,w){if(E==="font")return"";if(typeof w=="string")return w==="use-credentials"?w:""}return He.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=d,He.createPortal=function(E,w){var U=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!w||w.nodeType!==1&&w.nodeType!==9&&w.nodeType!==11)throw Error(Y(299));return C(E,w,null,U)},He.flushSync=function(E){var w=Z.T,U=d.p;try{if(Z.T=null,d.p=2,E)return E()}finally{Z.T=w,d.p=U,d.d.f()}},He.preconnect=function(E,w){typeof E=="string"&&(w?(w=w.crossOrigin,w=typeof w=="string"?w==="use-credentials"?w:"":void 0):w=null,d.d.C(E,w))},He.prefetchDNS=function(E){typeof E=="string"&&d.d.D(E)},He.preinit=function(E,w){if(typeof E=="string"&&w&&typeof w.as=="string"){var U=w.as,x=L(U,w.crossOrigin),ee=typeof w.integrity=="string"?w.integrity:void 0,V=typeof w.fetchPriority=="string"?w.fetchPriority:void 0;U==="style"?d.d.S(E,typeof w.precedence=="string"?w.precedence:void 0,{crossOrigin:x,integrity:ee,fetchPriority:V}):U==="script"&&d.d.X(E,{crossOrigin:x,integrity:ee,fetchPriority:V,nonce:typeof w.nonce=="string"?w.nonce:void 0})}},He.preinitModule=function(E,w){if(typeof E=="string")if(typeof w=="object"&&w!==null){if(w.as==null||w.as==="script"){var U=L(w.as,w.crossOrigin);d.d.M(E,{crossOrigin:U,integrity:typeof w.integrity=="string"?w.integrity:void 0,nonce:typeof w.nonce=="string"?w.nonce:void 0})}}else w==null&&d.d.M(E)},He.preload=function(E,w){if(typeof E=="string"&&typeof w=="object"&&w!==null&&typeof w.as=="string"){var U=w.as,x=L(U,w.crossOrigin);d.d.L(E,U,{crossOrigin:x,integrity:typeof w.integrity=="string"?w.integrity:void 0,nonce:typeof w.nonce=="string"?w.nonce:void 0,type:typeof w.type=="string"?w.type:void 0,fetchPriority:typeof w.fetchPriority=="string"?w.fetchPriority:void 0,referrerPolicy:typeof w.referrerPolicy=="string"?w.referrerPolicy:void 0,imageSrcSet:typeof w.imageSrcSet=="string"?w.imageSrcSet:void 0,imageSizes:typeof w.imageSizes=="string"?w.imageSizes:void 0,media:typeof w.media=="string"?w.media:void 0})}},He.preloadModule=function(E,w){if(typeof E=="string")if(w){var U=L(w.as,w.crossOrigin);d.d.m(E,{as:typeof w.as=="string"&&w.as!=="script"?w.as:void 0,crossOrigin:U,integrity:typeof w.integrity=="string"?w.integrity:void 0})}else d.d.m(E)},He.requestFormReset=function(E){d.d.r(E)},He.unstable_batchedUpdates=function(E,w){return E(w)},He.useFormState=function(E,w,U){return Z.H.useFormState(E,w,U)},He.useFormStatus=function(){return Z.H.useHostTransitionStatus()},He.version="19.2.0",He}var Od;function ny(){if(Od)return ds.exports;Od=1;function A(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(A)}catch(Y){console.error(Y)}}return A(),ds.exports=oy(),ds.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ad;function ly(){if(Ad)return An;Ad=1;var A=ay(),Y=fs(),N=ny();function d(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function M(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function C(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function Z(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function L(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function E(e){if(C(e)!==e)throw Error(d(188))}function w(e){var t=e.alternate;if(!t){if(t=C(e),t===null)throw Error(d(188));return t!==e?null:e}for(var a=e,o=t;;){var n=a.return;if(n===null)break;var l=n.alternate;if(l===null){if(o=n.return,o!==null){a=o;continue}break}if(n.child===l.child){for(l=n.child;l;){if(l===a)return E(n),e;if(l===o)return E(n),t;l=l.sibling}throw Error(d(188))}if(a.return!==o.return)a=n,o=l;else{for(var r=!1,i=n.child;i;){if(i===a){r=!0,a=n,o=l;break}if(i===o){r=!0,o=n,a=l;break}i=i.sibling}if(!r){for(i=l.child;i;){if(i===a){r=!0,a=l,o=n;break}if(i===o){r=!0,o=l,a=n;break}i=i.sibling}if(!r)throw Error(d(189))}}if(a.alternate!==o)throw Error(d(190))}if(a.tag!==3)throw Error(d(188));return a.stateNode.current===a?e:t}function U(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=U(e),t!==null)return t;e=e.sibling}return null}var x=Object.assign,ee=Symbol.for("react.element"),V=Symbol.for("react.transitional.element"),ve=Symbol.for("react.portal"),K=Symbol.for("react.fragment"),pe=Symbol.for("react.strict_mode"),ze=Symbol.for("react.profiler"),_t=Symbol.for("react.consumer"),De=Symbol.for("react.context"),Le=Symbol.for("react.forward_ref"),ct=Symbol.for("react.suspense"),Re=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),Te=Symbol.for("react.lazy"),et=Symbol.for("react.activity"),Xe=Symbol.for("react.memo_cache_sentinel"),dt=Symbol.iterator;function Ze(e){return e===null||typeof e!="object"?null:(e=dt&&e[dt]||e["@@iterator"],typeof e=="function"?e:null)}var Aa=Symbol.for("react.client.reference");function Ct(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Aa?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case K:return"Fragment";case ze:return"Profiler";case pe:return"StrictMode";case ct:return"Suspense";case Re:return"SuspenseList";case et:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case ve:return"Portal";case De:return e.displayName||"Context";case _t:return(e._context.displayName||"Context")+".Consumer";case Le:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case H:return t=e.displayName||null,t!==null?t:Ct(e.type)||"Memo";case Te:t=e._payload,e=e._init;try{return Ct(e(t))}catch{}}return null}var At=Array.isArray,v=Y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,S=N.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},se=[],de=-1;function h(e){return{current:e}}function O(e){0>de||(e.current=se[de],se[de]=null,de--)}function Q(e,t){de++,se[de]=e.current,e.current=t}var z=h(null),W=h(null),J=h(null),le=h(null);function We(e,t){switch(Q(J,t),Q(W,e),Q(z,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Uc(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Uc(t),e=qc(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}O(z),Q(z,e)}function ke(){O(z),O(W),O(J)}function _o(e){e.memoizedState!==null&&Q(le,e);var t=z.current,a=qc(t,e.type);t!==a&&(Q(W,e),Q(z,a))}function Tn(e){W.current===e&&(O(z),O(W)),le.current===e&&(O(le),vn._currentValue=q)}var Gl,gs;function Ta(e){if(Gl===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Gl=t&&t[1]||"",gs=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Gl+e+gs}var Ll=!1;function Xl(e,t){if(!e||Ll)return"";Ll=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(t){var k=function(){throw Error()};if(Object.defineProperty(k.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(k,[])}catch(p){var y=p}Reflect.construct(e,[],k)}else{try{k.call()}catch(p){y=p}e.call(k.prototype)}}else{try{throw Error()}catch(p){y=p}(k=e())&&typeof k.catch=="function"&&k.catch(function(){})}}catch(p){if(p&&y&&typeof p.stack=="string")return[p.stack,y.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=o.DetermineComponentFrameRoot(),r=l[0],i=l[1];if(r&&i){var s=r.split(`
`),g=i.split(`
`);for(n=o=0;o<s.length&&!s[o].includes("DetermineComponentFrameRoot");)o++;for(;n<g.length&&!g[n].includes("DetermineComponentFrameRoot");)n++;if(o===s.length||n===g.length)for(o=s.length-1,n=g.length-1;1<=o&&0<=n&&s[o]!==g[n];)n--;for(;1<=o&&0<=n;o--,n--)if(s[o]!==g[n]){if(o!==1||n!==1)do if(o--,n--,0>n||s[o]!==g[n]){var m=`
`+s[o].replace(" at new "," at ");return e.displayName&&m.includes("<anonymous>")&&(m=m.replace("<anonymous>",e.displayName)),m}while(1<=o&&0<=n);break}}}finally{Ll=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ta(a):""}function Qd(e,t){switch(e.tag){case 26:case 27:case 5:return Ta(e.type);case 16:return Ta("Lazy");case 13:return e.child!==t&&t!==null?Ta("Suspense Fallback"):Ta("Suspense");case 19:return Ta("SuspenseList");case 0:case 15:return Xl(e.type,!1);case 11:return Xl(e.type.render,!1);case 1:return Xl(e.type,!0);case 31:return Ta("Activity");default:return""}}function ys(e){try{var t="",a=null;do t+=Qd(e,a),a=e,e=e.return;while(e);return t}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Zl=Object.prototype.hasOwnProperty,Vl=A.unstable_scheduleCallback,Kl=A.unstable_cancelCallback,_d=A.unstable_shouldYield,zd=A.unstable_requestPaint,tt=A.unstable_now,xd=A.unstable_getCurrentPriorityLevel,ps=A.unstable_ImmediatePriority,ms=A.unstable_UserBlockingPriority,En=A.unstable_NormalPriority,Dd=A.unstable_LowPriority,vs=A.unstable_IdlePriority,Md=A.log,Cd=A.unstable_setDisableYieldValue,zo=null,at=null;function Ft(e){if(typeof Md=="function"&&Cd(e),at&&typeof at.setStrictMode=="function")try{at.setStrictMode(zo,e)}catch{}}var ot=Math.clz32?Math.clz32:jd,Bd=Math.log,Nd=Math.LN2;function jd(e){return e>>>=0,e===0?32:31-(Bd(e)/Nd|0)|0}var Sn=256,Qn=262144,_n=4194304;function Ea(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function zn(e,t,a){var o=e.pendingLanes;if(o===0)return 0;var n=0,l=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var i=o&134217727;return i!==0?(o=i&~l,o!==0?n=Ea(o):(r&=i,r!==0?n=Ea(r):a||(a=i&~e,a!==0&&(n=Ea(a))))):(i=o&~l,i!==0?n=Ea(i):r!==0?n=Ea(r):a||(a=o&~e,a!==0&&(n=Ea(a)))),n===0?0:t!==0&&t!==n&&(t&l)===0&&(l=n&-n,a=t&-t,l>=a||l===32&&(a&4194048)!==0)?t:n}function xo(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Yd(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bs(){var e=_n;return _n<<=1,(_n&62914560)===0&&(_n=4194304),e}function Jl(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Do(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ud(e,t,a,o,n,l){var r=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var i=e.entanglements,s=e.expirationTimes,g=e.hiddenUpdates;for(a=r&~a;0<a;){var m=31-ot(a),k=1<<m;i[m]=0,s[m]=-1;var y=g[m];if(y!==null)for(g[m]=null,m=0;m<y.length;m++){var p=y[m];p!==null&&(p.lane&=-536870913)}a&=~k}o!==0&&ws(e,o,0),l!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=l&~(r&~t))}function ws(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var o=31-ot(t);e.entangledLanes|=t,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function ks(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var o=31-ot(a),n=1<<o;n&t|e[o]&t&&(e[o]|=t),a&=~n}}function Os(e,t){var a=t&-t;return a=(a&42)!==0?1:Il(a),(a&(e.suspendedLanes|t))!==0?0:a}function Il(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function $l(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function As(){var e=S.p;return e!==0?e:(e=window.event,e===void 0?32:sd(e.type))}function Ts(e,t){var a=S.p;try{return S.p=e,t()}finally{S.p=a}}var Pt=Math.random().toString(36).slice(2),Ne="__reactFiber$"+Pt,Ve="__reactProps$"+Pt,Ga="__reactContainer$"+Pt,Fl="__reactEvents$"+Pt,qd="__reactListeners$"+Pt,Rd="__reactHandles$"+Pt,Es="__reactResources$"+Pt,Mo="__reactMarker$"+Pt;function Pl(e){delete e[Ne],delete e[Ve],delete e[Fl],delete e[qd],delete e[Rd]}function La(e){var t=e[Ne];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Ga]||a[Ne]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Zc(e);e!==null;){if(a=e[Ne])return a;e=Zc(e)}return t}e=a,a=e.parentNode}return null}function Xa(e){if(e=e[Ne]||e[Ga]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Co(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(d(33))}function Za(e){var t=e[Es];return t||(t=e[Es]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Me(e){e[Mo]=!0}var Ss=new Set,Qs={};function Sa(e,t){Va(e,t),Va(e+"Capture",t)}function Va(e,t){for(Qs[e]=t,e=0;e<t.length;e++)Ss.add(t[e])}var Hd=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),_s={},zs={};function Wd(e){return Zl.call(zs,e)?!0:Zl.call(_s,e)?!1:Hd.test(e)?zs[e]=!0:(_s[e]=!0,!1)}function xn(e,t,a){if(Wd(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var o=t.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Dn(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Bt(e,t,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+o)}}function ft(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function xs(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Gd(e,t,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var n=o.get,l=o.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(r){a=""+r,l.call(this,r)}}),Object.defineProperty(e,t,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(r){a=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function er(e){if(!e._valueTracker){var t=xs(e)?"checked":"value";e._valueTracker=Gd(e,t,""+e[t])}}function Ds(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),o="";return e&&(o=xs(e)?e.checked?"true":"false":e.value),e=o,e!==a?(t.setValue(e),!0):!1}function Mn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ld=/[\n"\\]/g;function gt(e){return e.replace(Ld,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function tr(e,t,a,o,n,l,r,i){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+ft(t)):e.value!==""+ft(t)&&(e.value=""+ft(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?ar(e,r,ft(t)):a!=null?ar(e,r,ft(a)):o!=null&&e.removeAttribute("value"),n==null&&l!=null&&(e.defaultChecked=!!l),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?e.name=""+ft(i):e.removeAttribute("name")}function Ms(e,t,a,o,n,l,r,i){if(l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(e.type=l),t!=null||a!=null){if(!(l!=="submit"&&l!=="reset"||t!=null)){er(e);return}a=a!=null?""+ft(a):"",t=t!=null?""+ft(t):a,i||t===e.value||(e.value=t),e.defaultValue=t}o=o??n,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=i?e.checked:!!o,e.defaultChecked=!!o,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),er(e)}function ar(e,t,a){t==="number"&&Mn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Ka(e,t,a,o){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&o&&(e[a].defaultSelected=!0)}else{for(a=""+ft(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,o&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function Cs(e,t,a){if(t!=null&&(t=""+ft(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+ft(a):""}function Bs(e,t,a,o){if(t==null){if(o!=null){if(a!=null)throw Error(d(92));if(At(o)){if(1<o.length)throw Error(d(93));o=o[0]}a=o}a==null&&(a=""),t=a}a=ft(t),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),er(e)}function Ja(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Xd=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ns(e,t,a){var o=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":o?e.setProperty(t,a):typeof a!="number"||a===0||Xd.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function js(e,t,a){if(t!=null&&typeof t!="object")throw Error(d(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||t!=null&&t.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var n in t)o=t[n],t.hasOwnProperty(n)&&a[n]!==o&&Ns(e,n,o)}else for(var l in t)t.hasOwnProperty(l)&&Ns(e,l,t[l])}function or(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Vd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Cn(e){return Vd.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Nt(){}var nr=null;function lr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ia=null,$a=null;function Ys(e){var t=Xa(e);if(t&&(e=t.stateNode)){var a=e[Ve]||null;e:switch(e=t.stateNode,t.type){case"input":if(tr(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+gt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var o=a[t];if(o!==e&&o.form===e.form){var n=o[Ve]||null;if(!n)throw Error(d(90));tr(o,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)o=a[t],o.form===e.form&&Ds(o)}break e;case"textarea":Cs(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Ka(e,!!a.multiple,t,!1)}}}var rr=!1;function Us(e,t,a){if(rr)return e(t,a);rr=!0;try{var o=e(t);return o}finally{if(rr=!1,(Ia!==null||$a!==null)&&(wl(),Ia&&(t=Ia,e=$a,$a=Ia=null,Ys(t),e)))for(t=0;t<e.length;t++)Ys(e[t])}}function Bo(e,t){var a=e.stateNode;if(a===null)return null;var o=a[Ve]||null;if(o===null)return null;a=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(d(231,t,typeof a));return a}var jt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ir=!1;if(jt)try{var No={};Object.defineProperty(No,"passive",{get:function(){ir=!0}}),window.addEventListener("test",No,No),window.removeEventListener("test",No,No)}catch{ir=!1}var ea=null,sr=null,Bn=null;function qs(){if(Bn)return Bn;var e,t=sr,a=t.length,o,n="value"in ea?ea.value:ea.textContent,l=n.length;for(e=0;e<a&&t[e]===n[e];e++);var r=a-e;for(o=1;o<=r&&t[a-o]===n[l-o];o++);return Bn=n.slice(e,1<o?1-o:void 0)}function Nn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function jn(){return!0}function Rs(){return!1}function Ke(e){function t(a,o,n,l,r){this._reactName=a,this._targetInst=n,this.type=o,this.nativeEvent=l,this.target=r,this.currentTarget=null;for(var i in e)e.hasOwnProperty(i)&&(a=e[i],this[i]=a?a(l):l[i]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?jn:Rs,this.isPropagationStopped=Rs,this}return x(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=jn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=jn)},persist:function(){},isPersistent:jn}),t}var Qa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yn=Ke(Qa),jo=x({},Qa,{view:0,detail:0}),Kd=Ke(jo),ur,hr,Yo,Un=x({},jo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:dr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Yo&&(Yo&&e.type==="mousemove"?(ur=e.screenX-Yo.screenX,hr=e.screenY-Yo.screenY):hr=ur=0,Yo=e),ur)},movementY:function(e){return"movementY"in e?e.movementY:hr}}),Hs=Ke(Un),Jd=x({},Un,{dataTransfer:0}),Id=Ke(Jd),$d=x({},jo,{relatedTarget:0}),cr=Ke($d),Fd=x({},Qa,{animationName:0,elapsedTime:0,pseudoElement:0}),Pd=Ke(Fd),ef=x({},Qa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),tf=Ke(ef),af=x({},Qa,{data:0}),Ws=Ke(af),of={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=lf[e])?!!t[e]:!1}function dr(){return rf}var sf=x({},jo,{key:function(e){if(e.key){var t=of[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Nn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?nf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:dr,charCode:function(e){return e.type==="keypress"?Nn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Nn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),uf=Ke(sf),hf=x({},Un,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gs=Ke(hf),cf=x({},jo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:dr}),df=Ke(cf),ff=x({},Qa,{propertyName:0,elapsedTime:0,pseudoElement:0}),gf=Ke(ff),yf=x({},Un,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),pf=Ke(yf),mf=x({},Qa,{newState:0,oldState:0}),vf=Ke(mf),bf=[9,13,27,32],fr=jt&&"CompositionEvent"in window,Uo=null;jt&&"documentMode"in document&&(Uo=document.documentMode);var wf=jt&&"TextEvent"in window&&!Uo,Ls=jt&&(!fr||Uo&&8<Uo&&11>=Uo),Xs=" ",Zs=!1;function Vs(e,t){switch(e){case"keyup":return bf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ks(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Fa=!1;function kf(e,t){switch(e){case"compositionend":return Ks(t);case"keypress":return t.which!==32?null:(Zs=!0,Xs);case"textInput":return e=t.data,e===Xs&&Zs?null:e;default:return null}}function Of(e,t){if(Fa)return e==="compositionend"||!fr&&Vs(e,t)?(e=qs(),Bn=sr=ea=null,Fa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ls&&t.locale!=="ko"?null:t.data;default:return null}}var Af={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Js(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Af[e.type]:t==="textarea"}function Is(e,t,a,o){Ia?$a?$a.push(o):$a=[o]:Ia=o,t=Ql(t,"onChange"),0<t.length&&(a=new Yn("onChange","change",null,a,o),e.push({event:a,listeners:t}))}var qo=null,Ro=null;function Tf(e){Mc(e,0)}function qn(e){var t=Co(e);if(Ds(t))return e}function $s(e,t){if(e==="change")return t}var Fs=!1;if(jt){var gr;if(jt){var yr="oninput"in document;if(!yr){var Ps=document.createElement("div");Ps.setAttribute("oninput","return;"),yr=typeof Ps.oninput=="function"}gr=yr}else gr=!1;Fs=gr&&(!document.documentMode||9<document.documentMode)}function eu(){qo&&(qo.detachEvent("onpropertychange",tu),Ro=qo=null)}function tu(e){if(e.propertyName==="value"&&qn(Ro)){var t=[];Is(t,Ro,e,lr(e)),Us(Tf,t)}}function Ef(e,t,a){e==="focusin"?(eu(),qo=t,Ro=a,qo.attachEvent("onpropertychange",tu)):e==="focusout"&&eu()}function Sf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return qn(Ro)}function Qf(e,t){if(e==="click")return qn(t)}function _f(e,t){if(e==="input"||e==="change")return qn(t)}function zf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var nt=typeof Object.is=="function"?Object.is:zf;function Ho(e,t){if(nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var n=a[o];if(!Zl.call(t,n)||!nt(e[n],t[n]))return!1}return!0}function au(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ou(e,t){var a=au(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=t&&o>=t)return{node:a,offset:t-e};e=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=au(a)}}function nu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?nu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function lu(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Mn(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Mn(e.document)}return t}function pr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var xf=jt&&"documentMode"in document&&11>=document.documentMode,Pa=null,mr=null,Wo=null,vr=!1;function ru(e,t,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;vr||Pa==null||Pa!==Mn(o)||(o=Pa,"selectionStart"in o&&pr(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Wo&&Ho(Wo,o)||(Wo=o,o=Ql(mr,"onSelect"),0<o.length&&(t=new Yn("onSelect","select",null,t,a),e.push({event:t,listeners:o}),t.target=Pa)))}function _a(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var eo={animationend:_a("Animation","AnimationEnd"),animationiteration:_a("Animation","AnimationIteration"),animationstart:_a("Animation","AnimationStart"),transitionrun:_a("Transition","TransitionRun"),transitionstart:_a("Transition","TransitionStart"),transitioncancel:_a("Transition","TransitionCancel"),transitionend:_a("Transition","TransitionEnd")},br={},iu={};jt&&(iu=document.createElement("div").style,"AnimationEvent"in window||(delete eo.animationend.animation,delete eo.animationiteration.animation,delete eo.animationstart.animation),"TransitionEvent"in window||delete eo.transitionend.transition);function za(e){if(br[e])return br[e];if(!eo[e])return e;var t=eo[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in iu)return br[e]=t[a];return e}var su=za("animationend"),uu=za("animationiteration"),hu=za("animationstart"),Df=za("transitionrun"),Mf=za("transitionstart"),Cf=za("transitioncancel"),cu=za("transitionend"),du=new Map,wr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");wr.push("scrollEnd");function Tt(e,t){du.set(e,t),Sa(t,[e])}var Rn=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},yt=[],to=0,kr=0;function Hn(){for(var e=to,t=kr=to=0;t<e;){var a=yt[t];yt[t++]=null;var o=yt[t];yt[t++]=null;var n=yt[t];yt[t++]=null;var l=yt[t];if(yt[t++]=null,o!==null&&n!==null){var r=o.pending;r===null?n.next=n:(n.next=r.next,r.next=n),o.pending=n}l!==0&&fu(a,n,l)}}function Wn(e,t,a,o){yt[to++]=e,yt[to++]=t,yt[to++]=a,yt[to++]=o,kr|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Or(e,t,a,o){return Wn(e,t,a,o),Gn(e)}function xa(e,t){return Wn(e,null,null,t),Gn(e)}function fu(e,t,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var n=!1,l=e.return;l!==null;)l.childLanes|=a,o=l.alternate,o!==null&&(o.childLanes|=a),l.tag===22&&(e=l.stateNode,e===null||e._visibility&1||(n=!0)),e=l,l=l.return;return e.tag===3?(l=e.stateNode,n&&t!==null&&(n=31-ot(a),e=l.hiddenUpdates,o=e[n],o===null?e[n]=[t]:o.push(t),t.lane=a|536870912),l):null}function Gn(e){if(50<cn)throw cn=0,Di=null,Error(d(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ao={};function Bf(e,t,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function lt(e,t,a,o){return new Bf(e,t,a,o)}function Ar(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Yt(e,t){var a=e.alternate;return a===null?(a=lt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function gu(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ln(e,t,a,o,n,l){var r=0;if(o=e,typeof e=="function")Ar(e)&&(r=1);else if(typeof e=="string")r=qg(e,a,z.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case et:return e=lt(31,a,t,n),e.elementType=et,e.lanes=l,e;case K:return Da(a.children,n,l,t);case pe:r=8,n|=24;break;case ze:return e=lt(12,a,t,n|2),e.elementType=ze,e.lanes=l,e;case ct:return e=lt(13,a,t,n),e.elementType=ct,e.lanes=l,e;case Re:return e=lt(19,a,t,n),e.elementType=Re,e.lanes=l,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case De:r=10;break e;case _t:r=9;break e;case Le:r=11;break e;case H:r=14;break e;case Te:r=16,o=null;break e}r=29,a=Error(d(130,e===null?"null":typeof e,"")),o=null}return t=lt(r,a,t,n),t.elementType=e,t.type=o,t.lanes=l,t}function Da(e,t,a,o){return e=lt(7,e,o,t),e.lanes=a,e}function Tr(e,t,a){return e=lt(6,e,null,t),e.lanes=a,e}function yu(e){var t=lt(18,null,null,0);return t.stateNode=e,t}function Er(e,t,a){return t=lt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var pu=new WeakMap;function pt(e,t){if(typeof e=="object"&&e!==null){var a=pu.get(e);return a!==void 0?a:(t={value:e,source:t,stack:ys(t)},pu.set(e,t),t)}return{value:e,source:t,stack:ys(t)}}var oo=[],no=0,Xn=null,Go=0,mt=[],vt=0,ta=null,zt=1,xt="";function Ut(e,t){oo[no++]=Go,oo[no++]=Xn,Xn=e,Go=t}function mu(e,t,a){mt[vt++]=zt,mt[vt++]=xt,mt[vt++]=ta,ta=e;var o=zt;e=xt;var n=32-ot(o)-1;o&=~(1<<n),a+=1;var l=32-ot(t)+n;if(30<l){var r=n-n%5;l=(o&(1<<r)-1).toString(32),o>>=r,n-=r,zt=1<<32-ot(t)+n|a<<n|o,xt=l+e}else zt=1<<l|a<<n|o,xt=e}function Sr(e){e.return!==null&&(Ut(e,1),mu(e,1,0))}function Qr(e){for(;e===Xn;)Xn=oo[--no],oo[no]=null,Go=oo[--no],oo[no]=null;for(;e===ta;)ta=mt[--vt],mt[vt]=null,xt=mt[--vt],mt[vt]=null,zt=mt[--vt],mt[vt]=null}function vu(e,t){mt[vt++]=zt,mt[vt++]=xt,mt[vt++]=ta,zt=t.id,xt=t.overflow,ta=e}var je=null,ge=null,te=!1,aa=null,bt=!1,_r=Error(d(519));function oa(e){var t=Error(d(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Lo(pt(t,e)),_r}function bu(e){var t=e.stateNode,a=e.type,o=e.memoizedProps;switch(t[Ne]=e,t[Ve]=o,a){case"dialog":$("cancel",t),$("close",t);break;case"iframe":case"object":case"embed":$("load",t);break;case"video":case"audio":for(a=0;a<fn.length;a++)$(fn[a],t);break;case"source":$("error",t);break;case"img":case"image":case"link":$("error",t),$("load",t);break;case"details":$("toggle",t);break;case"input":$("invalid",t),Ms(t,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":$("invalid",t);break;case"textarea":$("invalid",t),Bs(t,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||o.suppressHydrationWarning===!0||jc(t.textContent,a)?(o.popover!=null&&($("beforetoggle",t),$("toggle",t)),o.onScroll!=null&&$("scroll",t),o.onScrollEnd!=null&&$("scrollend",t),o.onClick!=null&&(t.onclick=Nt),t=!0):t=!1,t||oa(e,!0)}function wu(e){for(je=e.return;je;)switch(je.tag){case 5:case 31:case 13:bt=!1;return;case 27:case 3:bt=!0;return;default:je=je.return}}function lo(e){if(e!==je)return!1;if(!te)return wu(e),te=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Zi(e.type,e.memoizedProps)),a=!a),a&&ge&&oa(e),wu(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));ge=Xc(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));ge=Xc(e)}else t===27?(t=ge,ma(e.type)?(e=$i,$i=null,ge=e):ge=t):ge=je?kt(e.stateNode.nextSibling):null;return!0}function Ma(){ge=je=null,te=!1}function zr(){var e=aa;return e!==null&&(Fe===null?Fe=e:Fe.push.apply(Fe,e),aa=null),e}function Lo(e){aa===null?aa=[e]:aa.push(e)}var xr=h(null),Ca=null,qt=null;function na(e,t,a){Q(xr,t._currentValue),t._currentValue=a}function Rt(e){e._currentValue=xr.current,O(xr)}function Dr(e,t,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===a)break;e=e.return}}function Mr(e,t,a,o){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var l=n.dependencies;if(l!==null){var r=n.child;l=l.firstContext;e:for(;l!==null;){var i=l;l=n;for(var s=0;s<t.length;s++)if(i.context===t[s]){l.lanes|=a,i=l.alternate,i!==null&&(i.lanes|=a),Dr(l.return,a,e),o||(r=null);break e}l=i.next}}else if(n.tag===18){if(r=n.return,r===null)throw Error(d(341));r.lanes|=a,l=r.alternate,l!==null&&(l.lanes|=a),Dr(r,a,e),r=null}else r=n.child;if(r!==null)r.return=n;else for(r=n;r!==null;){if(r===e){r=null;break}if(n=r.sibling,n!==null){n.return=r.return,r=n;break}r=r.return}n=r}}function ro(e,t,a,o){e=null;for(var n=t,l=!1;n!==null;){if(!l){if((n.flags&524288)!==0)l=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var r=n.alternate;if(r===null)throw Error(d(387));if(r=r.memoizedProps,r!==null){var i=n.type;nt(n.pendingProps.value,r.value)||(e!==null?e.push(i):e=[i])}}else if(n===le.current){if(r=n.alternate,r===null)throw Error(d(387));r.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(vn):e=[vn])}n=n.return}e!==null&&Mr(t,e,a,o),t.flags|=262144}function Zn(e){for(e=e.firstContext;e!==null;){if(!nt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ba(e){Ca=e,qt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ye(e){return ku(Ca,e)}function Vn(e,t){return Ca===null&&Ba(e),ku(e,t)}function ku(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},qt===null){if(e===null)throw Error(d(308));qt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else qt=qt.next=t;return a}var Nf=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},jf=A.unstable_scheduleCallback,Yf=A.unstable_NormalPriority,Ee={$$typeof:De,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Cr(){return{controller:new Nf,data:new Map,refCount:0}}function Xo(e){e.refCount--,e.refCount===0&&jf(Yf,function(){e.controller.abort()})}var Zo=null,Br=0,io=0,so=null;function Uf(e,t){if(Zo===null){var a=Zo=[];Br=0,io=Yi(),so={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Br++,t.then(Ou,Ou),t}function Ou(){if(--Br===0&&Zo!==null){so!==null&&(so.status="fulfilled");var e=Zo;Zo=null,io=0,so=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function qf(e,t){var a=[],o={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){o.status="fulfilled",o.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(o.status="rejected",o.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),o}var Au=v.S;v.S=function(e,t){rc=tt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Uf(e,t),Au!==null&&Au(e,t)};var Na=h(null);function Nr(){var e=Na.current;return e!==null?e:fe.pooledCache}function Kn(e,t){t===null?Q(Na,Na.current):Q(Na,t.pool)}function Tu(){var e=Nr();return e===null?null:{parent:Ee._currentValue,pool:e}}var uo=Error(d(460)),jr=Error(d(474)),Jn=Error(d(542)),In={then:function(){}};function Eu(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Su(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Nt,Nt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,_u(e),e;default:if(typeof t.status=="string")t.then(Nt,Nt);else{if(e=fe,e!==null&&100<e.shellSuspendCounter)throw Error(d(482));e=t,e.status="pending",e.then(function(o){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=o}},function(o){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=o}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,_u(e),e}throw Ya=t,uo}}function ja(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ya=a,uo):a}}var Ya=null;function Qu(){if(Ya===null)throw Error(d(459));var e=Ya;return Ya=null,e}function _u(e){if(e===uo||e===Jn)throw Error(d(483))}var ho=null,Vo=0;function $n(e){var t=Vo;return Vo+=1,ho===null&&(ho=[]),Su(ho,e,t)}function Ko(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Fn(e,t){throw t.$$typeof===ee?Error(d(525)):(e=Object.prototype.toString.call(t),Error(d(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function zu(e){function t(c,u){if(e){var f=c.deletions;f===null?(c.deletions=[u],c.flags|=16):f.push(u)}}function a(c,u){if(!e)return null;for(;u!==null;)t(c,u),u=u.sibling;return null}function o(c){for(var u=new Map;c!==null;)c.key!==null?u.set(c.key,c):u.set(c.index,c),c=c.sibling;return u}function n(c,u){return c=Yt(c,u),c.index=0,c.sibling=null,c}function l(c,u,f){return c.index=f,e?(f=c.alternate,f!==null?(f=f.index,f<u?(c.flags|=67108866,u):f):(c.flags|=67108866,u)):(c.flags|=1048576,u)}function r(c){return e&&c.alternate===null&&(c.flags|=67108866),c}function i(c,u,f,b){return u===null||u.tag!==6?(u=Tr(f,c.mode,b),u.return=c,u):(u=n(u,f),u.return=c,u)}function s(c,u,f,b){var B=f.type;return B===K?m(c,u,f.props.children,b,f.key):u!==null&&(u.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===Te&&ja(B)===u.type)?(u=n(u,f.props),Ko(u,f),u.return=c,u):(u=Ln(f.type,f.key,f.props,null,c.mode,b),Ko(u,f),u.return=c,u)}function g(c,u,f,b){return u===null||u.tag!==4||u.stateNode.containerInfo!==f.containerInfo||u.stateNode.implementation!==f.implementation?(u=Er(f,c.mode,b),u.return=c,u):(u=n(u,f.children||[]),u.return=c,u)}function m(c,u,f,b,B){return u===null||u.tag!==7?(u=Da(f,c.mode,b,B),u.return=c,u):(u=n(u,f),u.return=c,u)}function k(c,u,f){if(typeof u=="string"&&u!==""||typeof u=="number"||typeof u=="bigint")return u=Tr(""+u,c.mode,f),u.return=c,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case V:return f=Ln(u.type,u.key,u.props,null,c.mode,f),Ko(f,u),f.return=c,f;case ve:return u=Er(u,c.mode,f),u.return=c,u;case Te:return u=ja(u),k(c,u,f)}if(At(u)||Ze(u))return u=Da(u,c.mode,f,null),u.return=c,u;if(typeof u.then=="function")return k(c,$n(u),f);if(u.$$typeof===De)return k(c,Vn(c,u),f);Fn(c,u)}return null}function y(c,u,f,b){var B=u!==null?u.key:null;if(typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint")return B!==null?null:i(c,u,""+f,b);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case V:return f.key===B?s(c,u,f,b):null;case ve:return f.key===B?g(c,u,f,b):null;case Te:return f=ja(f),y(c,u,f,b)}if(At(f)||Ze(f))return B!==null?null:m(c,u,f,b,null);if(typeof f.then=="function")return y(c,u,$n(f),b);if(f.$$typeof===De)return y(c,u,Vn(c,f),b);Fn(c,f)}return null}function p(c,u,f,b,B){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return c=c.get(f)||null,i(u,c,""+b,B);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case V:return c=c.get(b.key===null?f:b.key)||null,s(u,c,b,B);case ve:return c=c.get(b.key===null?f:b.key)||null,g(u,c,b,B);case Te:return b=ja(b),p(c,u,f,b,B)}if(At(b)||Ze(b))return c=c.get(f)||null,m(u,c,b,B,null);if(typeof b.then=="function")return p(c,u,f,$n(b),B);if(b.$$typeof===De)return p(c,u,f,Vn(u,b),B);Fn(u,b)}return null}function _(c,u,f,b){for(var B=null,ae=null,D=u,X=u=0,P=null;D!==null&&X<f.length;X++){D.index>X?(P=D,D=null):P=D.sibling;var oe=y(c,D,f[X],b);if(oe===null){D===null&&(D=P);break}e&&D&&oe.alternate===null&&t(c,D),u=l(oe,u,X),ae===null?B=oe:ae.sibling=oe,ae=oe,D=P}if(X===f.length)return a(c,D),te&&Ut(c,X),B;if(D===null){for(;X<f.length;X++)D=k(c,f[X],b),D!==null&&(u=l(D,u,X),ae===null?B=D:ae.sibling=D,ae=D);return te&&Ut(c,X),B}for(D=o(D);X<f.length;X++)P=p(D,c,X,f[X],b),P!==null&&(e&&P.alternate!==null&&D.delete(P.key===null?X:P.key),u=l(P,u,X),ae===null?B=P:ae.sibling=P,ae=P);return e&&D.forEach(function(Oa){return t(c,Oa)}),te&&Ut(c,X),B}function j(c,u,f,b){if(f==null)throw Error(d(151));for(var B=null,ae=null,D=u,X=u=0,P=null,oe=f.next();D!==null&&!oe.done;X++,oe=f.next()){D.index>X?(P=D,D=null):P=D.sibling;var Oa=y(c,D,oe.value,b);if(Oa===null){D===null&&(D=P);break}e&&D&&Oa.alternate===null&&t(c,D),u=l(Oa,u,X),ae===null?B=Oa:ae.sibling=Oa,ae=Oa,D=P}if(oe.done)return a(c,D),te&&Ut(c,X),B;if(D===null){for(;!oe.done;X++,oe=f.next())oe=k(c,oe.value,b),oe!==null&&(u=l(oe,u,X),ae===null?B=oe:ae.sibling=oe,ae=oe);return te&&Ut(c,X),B}for(D=o(D);!oe.done;X++,oe=f.next())oe=p(D,c,X,oe.value,b),oe!==null&&(e&&oe.alternate!==null&&D.delete(oe.key===null?X:oe.key),u=l(oe,u,X),ae===null?B=oe:ae.sibling=oe,ae=oe);return e&&D.forEach(function(Ig){return t(c,Ig)}),te&&Ut(c,X),B}function ce(c,u,f,b){if(typeof f=="object"&&f!==null&&f.type===K&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case V:e:{for(var B=f.key;u!==null;){if(u.key===B){if(B=f.type,B===K){if(u.tag===7){a(c,u.sibling),b=n(u,f.props.children),b.return=c,c=b;break e}}else if(u.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===Te&&ja(B)===u.type){a(c,u.sibling),b=n(u,f.props),Ko(b,f),b.return=c,c=b;break e}a(c,u);break}else t(c,u);u=u.sibling}f.type===K?(b=Da(f.props.children,c.mode,b,f.key),b.return=c,c=b):(b=Ln(f.type,f.key,f.props,null,c.mode,b),Ko(b,f),b.return=c,c=b)}return r(c);case ve:e:{for(B=f.key;u!==null;){if(u.key===B)if(u.tag===4&&u.stateNode.containerInfo===f.containerInfo&&u.stateNode.implementation===f.implementation){a(c,u.sibling),b=n(u,f.children||[]),b.return=c,c=b;break e}else{a(c,u);break}else t(c,u);u=u.sibling}b=Er(f,c.mode,b),b.return=c,c=b}return r(c);case Te:return f=ja(f),ce(c,u,f,b)}if(At(f))return _(c,u,f,b);if(Ze(f)){if(B=Ze(f),typeof B!="function")throw Error(d(150));return f=B.call(f),j(c,u,f,b)}if(typeof f.then=="function")return ce(c,u,$n(f),b);if(f.$$typeof===De)return ce(c,u,Vn(c,f),b);Fn(c,f)}return typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint"?(f=""+f,u!==null&&u.tag===6?(a(c,u.sibling),b=n(u,f),b.return=c,c=b):(a(c,u),b=Tr(f,c.mode,b),b.return=c,c=b),r(c)):a(c,u)}return function(c,u,f,b){try{Vo=0;var B=ce(c,u,f,b);return ho=null,B}catch(D){if(D===uo||D===Jn)throw D;var ae=lt(29,D,null,c.mode);return ae.lanes=b,ae.return=c,ae}finally{}}}var Ua=zu(!0),xu=zu(!1),la=!1;function Yr(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ur(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ra(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ia(e,t,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(ne&2)!==0){var n=o.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),o.pending=t,t=Gn(e),fu(e,null,a),t}return Wn(e,o,t,a),Gn(e)}function Jo(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var o=t.lanes;o&=e.pendingLanes,a|=o,t.lanes=a,ks(e,a)}}function qr(e,t){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var n=null,l=null;if(a=a.firstBaseUpdate,a!==null){do{var r={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};l===null?n=l=r:l=l.next=r,a=a.next}while(a!==null);l===null?n=l=t:l=l.next=t}else n=l=t;a={baseState:o.baseState,firstBaseUpdate:n,lastBaseUpdate:l,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Rr=!1;function Io(){if(Rr){var e=so;if(e!==null)throw e}}function $o(e,t,a,o){Rr=!1;var n=e.updateQueue;la=!1;var l=n.firstBaseUpdate,r=n.lastBaseUpdate,i=n.shared.pending;if(i!==null){n.shared.pending=null;var s=i,g=s.next;s.next=null,r===null?l=g:r.next=g,r=s;var m=e.alternate;m!==null&&(m=m.updateQueue,i=m.lastBaseUpdate,i!==r&&(i===null?m.firstBaseUpdate=g:i.next=g,m.lastBaseUpdate=s))}if(l!==null){var k=n.baseState;r=0,m=g=s=null,i=l;do{var y=i.lane&-536870913,p=y!==i.lane;if(p?(F&y)===y:(o&y)===y){y!==0&&y===io&&(Rr=!0),m!==null&&(m=m.next={lane:0,tag:i.tag,payload:i.payload,callback:null,next:null});e:{var _=e,j=i;y=t;var ce=a;switch(j.tag){case 1:if(_=j.payload,typeof _=="function"){k=_.call(ce,k,y);break e}k=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=j.payload,y=typeof _=="function"?_.call(ce,k,y):_,y==null)break e;k=x({},k,y);break e;case 2:la=!0}}y=i.callback,y!==null&&(e.flags|=64,p&&(e.flags|=8192),p=n.callbacks,p===null?n.callbacks=[y]:p.push(y))}else p={lane:y,tag:i.tag,payload:i.payload,callback:i.callback,next:null},m===null?(g=m=p,s=k):m=m.next=p,r|=y;if(i=i.next,i===null){if(i=n.shared.pending,i===null)break;p=i,i=p.next,p.next=null,n.lastBaseUpdate=p,n.shared.pending=null}}while(!0);m===null&&(s=k),n.baseState=s,n.firstBaseUpdate=g,n.lastBaseUpdate=m,l===null&&(n.shared.lanes=0),da|=r,e.lanes=r,e.memoizedState=k}}function Du(e,t){if(typeof e!="function")throw Error(d(191,e));e.call(t)}function Mu(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Du(a[e],t)}var co=h(null),Pn=h(0);function Cu(e,t){e=Jt,Q(Pn,e),Q(co,t),Jt=e|t.baseLanes}function Hr(){Q(Pn,Jt),Q(co,co.current)}function Wr(){Jt=Pn.current,O(co),O(Pn)}var rt=h(null),wt=null;function sa(e){var t=e.alternate;Q(Oe,Oe.current&1),Q(rt,e),wt===null&&(t===null||co.current!==null||t.memoizedState!==null)&&(wt=e)}function Gr(e){Q(Oe,Oe.current),Q(rt,e),wt===null&&(wt=e)}function Bu(e){e.tag===22?(Q(Oe,Oe.current),Q(rt,e),wt===null&&(wt=e)):ua()}function ua(){Q(Oe,Oe.current),Q(rt,rt.current)}function it(e){O(rt),wt===e&&(wt=null),O(Oe)}var Oe=h(0);function el(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Ji(a)||Ii(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ht=0,G=null,ue=null,Se=null,tl=!1,fo=!1,qa=!1,al=0,Fo=0,go=null,Rf=0;function be(){throw Error(d(321))}function Lr(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!nt(e[a],t[a]))return!1;return!0}function Xr(e,t,a,o,n,l){return Ht=l,G=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,v.H=e===null||e.memoizedState===null?mh:ri,qa=!1,l=a(o,n),qa=!1,fo&&(l=ju(t,a,o,n)),Nu(e),l}function Nu(e){v.H=tn;var t=ue!==null&&ue.next!==null;if(Ht=0,Se=ue=G=null,tl=!1,Fo=0,go=null,t)throw Error(d(300));e===null||Qe||(e=e.dependencies,e!==null&&Zn(e)&&(Qe=!0))}function ju(e,t,a,o){G=e;var n=0;do{if(fo&&(go=null),Fo=0,fo=!1,25<=n)throw Error(d(301));if(n+=1,Se=ue=null,e.updateQueue!=null){var l=e.updateQueue;l.lastEffect=null,l.events=null,l.stores=null,l.memoCache!=null&&(l.memoCache.index=0)}v.H=vh,l=t(a,o)}while(fo);return l}function Hf(){var e=v.H,t=e.useState()[0];return t=typeof t.then=="function"?Po(t):t,e=e.useState()[0],(ue!==null?ue.memoizedState:null)!==e&&(G.flags|=1024),t}function Zr(){var e=al!==0;return al=0,e}function Vr(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Kr(e){if(tl){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}tl=!1}Ht=0,Se=ue=G=null,fo=!1,Fo=al=0,go=null}function Ge(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Se===null?G.memoizedState=Se=e:Se=Se.next=e,Se}function Ae(){if(ue===null){var e=G.alternate;e=e!==null?e.memoizedState:null}else e=ue.next;var t=Se===null?G.memoizedState:Se.next;if(t!==null)Se=t,ue=e;else{if(e===null)throw G.alternate===null?Error(d(467)):Error(d(310));ue=e,e={memoizedState:ue.memoizedState,baseState:ue.baseState,baseQueue:ue.baseQueue,queue:ue.queue,next:null},Se===null?G.memoizedState=Se=e:Se=Se.next=e}return Se}function ol(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Po(e){var t=Fo;return Fo+=1,go===null&&(go=[]),e=Su(go,e,t),t=G,(Se===null?t.memoizedState:Se.next)===null&&(t=t.alternate,v.H=t===null||t.memoizedState===null?mh:ri),e}function nl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Po(e);if(e.$$typeof===De)return Ye(e)}throw Error(d(438,String(e)))}function Jr(e){var t=null,a=G.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var o=G.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(t={data:o.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=ol(),G.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),o=0;o<e;o++)a[o]=Xe;return t.index++,a}function Wt(e,t){return typeof t=="function"?t(e):t}function ll(e){var t=Ae();return Ir(t,ue,e)}function Ir(e,t,a){var o=e.queue;if(o===null)throw Error(d(311));o.lastRenderedReducer=a;var n=e.baseQueue,l=o.pending;if(l!==null){if(n!==null){var r=n.next;n.next=l.next,l.next=r}t.baseQueue=n=l,o.pending=null}if(l=e.baseState,n===null)e.memoizedState=l;else{t=n.next;var i=r=null,s=null,g=t,m=!1;do{var k=g.lane&-536870913;if(k!==g.lane?(F&k)===k:(Ht&k)===k){var y=g.revertLane;if(y===0)s!==null&&(s=s.next={lane:0,revertLane:0,gesture:null,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),k===io&&(m=!0);else if((Ht&y)===y){g=g.next,y===io&&(m=!0);continue}else k={lane:0,revertLane:g.revertLane,gesture:null,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null},s===null?(i=s=k,r=l):s=s.next=k,G.lanes|=y,da|=y;k=g.action,qa&&a(l,k),l=g.hasEagerState?g.eagerState:a(l,k)}else y={lane:k,revertLane:g.revertLane,gesture:g.gesture,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null},s===null?(i=s=y,r=l):s=s.next=y,G.lanes|=k,da|=k;g=g.next}while(g!==null&&g!==t);if(s===null?r=l:s.next=i,!nt(l,e.memoizedState)&&(Qe=!0,m&&(a=so,a!==null)))throw a;e.memoizedState=l,e.baseState=r,e.baseQueue=s,o.lastRenderedState=l}return n===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function $r(e){var t=Ae(),a=t.queue;if(a===null)throw Error(d(311));a.lastRenderedReducer=e;var o=a.dispatch,n=a.pending,l=t.memoizedState;if(n!==null){a.pending=null;var r=n=n.next;do l=e(l,r.action),r=r.next;while(r!==n);nt(l,t.memoizedState)||(Qe=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),a.lastRenderedState=l}return[l,o]}function Yu(e,t,a){var o=G,n=Ae(),l=te;if(l){if(a===void 0)throw Error(d(407));a=a()}else a=t();var r=!nt((ue||n).memoizedState,a);if(r&&(n.memoizedState=a,Qe=!0),n=n.queue,ei(Ru.bind(null,o,n,e),[e]),n.getSnapshot!==t||r||Se!==null&&Se.memoizedState.tag&1){if(o.flags|=2048,yo(9,{destroy:void 0},qu.bind(null,o,n,a,t),null),fe===null)throw Error(d(349));l||(Ht&127)!==0||Uu(o,t,a)}return a}function Uu(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=G.updateQueue,t===null?(t=ol(),G.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function qu(e,t,a,o){t.value=a,t.getSnapshot=o,Hu(t)&&Wu(e)}function Ru(e,t,a){return a(function(){Hu(t)&&Wu(e)})}function Hu(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!nt(e,a)}catch{return!0}}function Wu(e){var t=xa(e,2);t!==null&&Pe(t,e,2)}function Fr(e){var t=Ge();if(typeof e=="function"){var a=e;if(e=a(),qa){Ft(!0);try{a()}finally{Ft(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wt,lastRenderedState:e},t}function Gu(e,t,a,o){return e.baseState=a,Ir(e,ue,typeof o=="function"?o:Wt)}function Wf(e,t,a,o,n){if(sl(e))throw Error(d(485));if(e=t.action,e!==null){var l={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){l.listeners.push(r)}};v.T!==null?a(!0):l.isTransition=!1,o(l),a=t.pending,a===null?(l.next=t.pending=l,Lu(t,l)):(l.next=a.next,t.pending=a.next=l)}}function Lu(e,t){var a=t.action,o=t.payload,n=e.state;if(t.isTransition){var l=v.T,r={};v.T=r;try{var i=a(n,o),s=v.S;s!==null&&s(r,i),Xu(e,t,i)}catch(g){Pr(e,t,g)}finally{l!==null&&r.types!==null&&(l.types=r.types),v.T=l}}else try{l=a(n,o),Xu(e,t,l)}catch(g){Pr(e,t,g)}}function Xu(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Zu(e,t,o)},function(o){return Pr(e,t,o)}):Zu(e,t,a)}function Zu(e,t,a){t.status="fulfilled",t.value=a,Vu(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Lu(e,a)))}function Pr(e,t,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do t.status="rejected",t.reason=a,Vu(t),t=t.next;while(t!==o)}e.action=null}function Vu(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Ku(e,t){return t}function Ju(e,t){if(te){var a=fe.formState;if(a!==null){e:{var o=G;if(te){if(ge){t:{for(var n=ge,l=bt;n.nodeType!==8;){if(!l){n=null;break t}if(n=kt(n.nextSibling),n===null){n=null;break t}}l=n.data,n=l==="F!"||l==="F"?n:null}if(n){ge=kt(n.nextSibling),o=n.data==="F!";break e}}oa(o)}o=!1}o&&(t=a[0])}}return a=Ge(),a.memoizedState=a.baseState=t,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ku,lastRenderedState:t},a.queue=o,a=gh.bind(null,G,o),o.dispatch=a,o=Fr(!1),l=li.bind(null,G,!1,o.queue),o=Ge(),n={state:t,dispatch:null,action:e,pending:null},o.queue=n,a=Wf.bind(null,G,n,l,a),n.dispatch=a,o.memoizedState=e,[t,a,!1]}function Iu(e){var t=Ae();return $u(t,ue,e)}function $u(e,t,a){if(t=Ir(e,t,Ku)[0],e=ll(Wt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var o=Po(t)}catch(r){throw r===uo?Jn:r}else o=t;t=Ae();var n=t.queue,l=n.dispatch;return a!==t.memoizedState&&(G.flags|=2048,yo(9,{destroy:void 0},Gf.bind(null,n,a),null)),[o,l,e]}function Gf(e,t){e.action=t}function Fu(e){var t=Ae(),a=ue;if(a!==null)return $u(t,a,e);Ae(),t=t.memoizedState,a=Ae();var o=a.queue.dispatch;return a.memoizedState=e,[t,o,!1]}function yo(e,t,a,o){return e={tag:e,create:a,deps:o,inst:t,next:null},t=G.updateQueue,t===null&&(t=ol(),G.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,t.lastEffect=e),e}function Pu(){return Ae().memoizedState}function rl(e,t,a,o){var n=Ge();G.flags|=e,n.memoizedState=yo(1|t,{destroy:void 0},a,o===void 0?null:o)}function il(e,t,a,o){var n=Ae();o=o===void 0?null:o;var l=n.memoizedState.inst;ue!==null&&o!==null&&Lr(o,ue.memoizedState.deps)?n.memoizedState=yo(t,l,a,o):(G.flags|=e,n.memoizedState=yo(1|t,l,a,o))}function eh(e,t){rl(8390656,8,e,t)}function ei(e,t){il(2048,8,e,t)}function Lf(e){G.flags|=4;var t=G.updateQueue;if(t===null)t=ol(),G.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function th(e){var t=Ae().memoizedState;return Lf({ref:t,nextImpl:e}),function(){if((ne&2)!==0)throw Error(d(440));return t.impl.apply(void 0,arguments)}}function ah(e,t){return il(4,2,e,t)}function oh(e,t){return il(4,4,e,t)}function nh(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function lh(e,t,a){a=a!=null?a.concat([e]):null,il(4,4,nh.bind(null,t,e),a)}function ti(){}function rh(e,t){var a=Ae();t=t===void 0?null:t;var o=a.memoizedState;return t!==null&&Lr(t,o[1])?o[0]:(a.memoizedState=[e,t],e)}function ih(e,t){var a=Ae();t=t===void 0?null:t;var o=a.memoizedState;if(t!==null&&Lr(t,o[1]))return o[0];if(o=e(),qa){Ft(!0);try{e()}finally{Ft(!1)}}return a.memoizedState=[o,t],o}function ai(e,t,a){return a===void 0||(Ht&1073741824)!==0&&(F&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=sc(),G.lanes|=e,da|=e,a)}function sh(e,t,a,o){return nt(a,t)?a:co.current!==null?(e=ai(e,a,o),nt(e,t)||(Qe=!0),e):(Ht&42)===0||(Ht&1073741824)!==0&&(F&261930)===0?(Qe=!0,e.memoizedState=a):(e=sc(),G.lanes|=e,da|=e,t)}function uh(e,t,a,o,n){var l=S.p;S.p=l!==0&&8>l?l:8;var r=v.T,i={};v.T=i,li(e,!1,t,a);try{var s=n(),g=v.S;if(g!==null&&g(i,s),s!==null&&typeof s=="object"&&typeof s.then=="function"){var m=qf(s,o);en(e,t,m,ht(e))}else en(e,t,o,ht(e))}catch(k){en(e,t,{then:function(){},status:"rejected",reason:k},ht())}finally{S.p=l,r!==null&&i.types!==null&&(r.types=i.types),v.T=r}}function Xf(){}function oi(e,t,a,o){if(e.tag!==5)throw Error(d(476));var n=hh(e).queue;uh(e,n,t,q,a===null?Xf:function(){return ch(e),a(o)})}function hh(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wt,lastRenderedState:q},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function ch(e){var t=hh(e);t.next===null&&(t=e.alternate.memoizedState),en(e,t.next.queue,{},ht())}function ni(){return Ye(vn)}function dh(){return Ae().memoizedState}function fh(){return Ae().memoizedState}function Zf(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=ht();e=ra(a);var o=ia(t,e,a);o!==null&&(Pe(o,t,a),Jo(o,t,a)),t={cache:Cr()},e.payload=t;return}t=t.return}}function Vf(e,t,a){var o=ht();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},sl(e)?yh(t,a):(a=Or(e,t,a,o),a!==null&&(Pe(a,e,o),ph(a,t,o)))}function gh(e,t,a){var o=ht();en(e,t,a,o)}function en(e,t,a,o){var n={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(sl(e))yh(t,n);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var r=t.lastRenderedState,i=l(r,a);if(n.hasEagerState=!0,n.eagerState=i,nt(i,r))return Wn(e,t,n,0),fe===null&&Hn(),!1}catch{}finally{}if(a=Or(e,t,n,o),a!==null)return Pe(a,e,o),ph(a,t,o),!0}return!1}function li(e,t,a,o){if(o={lane:2,revertLane:Yi(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},sl(e)){if(t)throw Error(d(479))}else t=Or(e,a,o,2),t!==null&&Pe(t,e,2)}function sl(e){var t=e.alternate;return e===G||t!==null&&t===G}function yh(e,t){fo=tl=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function ph(e,t,a){if((a&4194048)!==0){var o=t.lanes;o&=e.pendingLanes,a|=o,t.lanes=a,ks(e,a)}}var tn={readContext:Ye,use:nl,useCallback:be,useContext:be,useEffect:be,useImperativeHandle:be,useLayoutEffect:be,useInsertionEffect:be,useMemo:be,useReducer:be,useRef:be,useState:be,useDebugValue:be,useDeferredValue:be,useTransition:be,useSyncExternalStore:be,useId:be,useHostTransitionStatus:be,useFormState:be,useActionState:be,useOptimistic:be,useMemoCache:be,useCacheRefresh:be};tn.useEffectEvent=be;var mh={readContext:Ye,use:nl,useCallback:function(e,t){return Ge().memoizedState=[e,t===void 0?null:t],e},useContext:Ye,useEffect:eh,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,rl(4194308,4,nh.bind(null,t,e),a)},useLayoutEffect:function(e,t){return rl(4194308,4,e,t)},useInsertionEffect:function(e,t){rl(4,2,e,t)},useMemo:function(e,t){var a=Ge();t=t===void 0?null:t;var o=e();if(qa){Ft(!0);try{e()}finally{Ft(!1)}}return a.memoizedState=[o,t],o},useReducer:function(e,t,a){var o=Ge();if(a!==void 0){var n=a(t);if(qa){Ft(!0);try{a(t)}finally{Ft(!1)}}}else n=t;return o.memoizedState=o.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},o.queue=e,e=e.dispatch=Vf.bind(null,G,e),[o.memoizedState,e]},useRef:function(e){var t=Ge();return e={current:e},t.memoizedState=e},useState:function(e){e=Fr(e);var t=e.queue,a=gh.bind(null,G,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:ti,useDeferredValue:function(e,t){var a=Ge();return ai(a,e,t)},useTransition:function(){var e=Fr(!1);return e=uh.bind(null,G,e.queue,!0,!1),Ge().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var o=G,n=Ge();if(te){if(a===void 0)throw Error(d(407));a=a()}else{if(a=t(),fe===null)throw Error(d(349));(F&127)!==0||Uu(o,t,a)}n.memoizedState=a;var l={value:a,getSnapshot:t};return n.queue=l,eh(Ru.bind(null,o,l,e),[e]),o.flags|=2048,yo(9,{destroy:void 0},qu.bind(null,o,l,a,t),null),a},useId:function(){var e=Ge(),t=fe.identifierPrefix;if(te){var a=xt,o=zt;a=(o&~(1<<32-ot(o)-1)).toString(32)+a,t="_"+t+"R_"+a,a=al++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Rf++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:ni,useFormState:Ju,useActionState:Ju,useOptimistic:function(e){var t=Ge();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=li.bind(null,G,!0,a),a.dispatch=t,[e,t]},useMemoCache:Jr,useCacheRefresh:function(){return Ge().memoizedState=Zf.bind(null,G)},useEffectEvent:function(e){var t=Ge(),a={impl:e};return t.memoizedState=a,function(){if((ne&2)!==0)throw Error(d(440));return a.impl.apply(void 0,arguments)}}},ri={readContext:Ye,use:nl,useCallback:rh,useContext:Ye,useEffect:ei,useImperativeHandle:lh,useInsertionEffect:ah,useLayoutEffect:oh,useMemo:ih,useReducer:ll,useRef:Pu,useState:function(){return ll(Wt)},useDebugValue:ti,useDeferredValue:function(e,t){var a=Ae();return sh(a,ue.memoizedState,e,t)},useTransition:function(){var e=ll(Wt)[0],t=Ae().memoizedState;return[typeof e=="boolean"?e:Po(e),t]},useSyncExternalStore:Yu,useId:dh,useHostTransitionStatus:ni,useFormState:Iu,useActionState:Iu,useOptimistic:function(e,t){var a=Ae();return Gu(a,ue,e,t)},useMemoCache:Jr,useCacheRefresh:fh};ri.useEffectEvent=th;var vh={readContext:Ye,use:nl,useCallback:rh,useContext:Ye,useEffect:ei,useImperativeHandle:lh,useInsertionEffect:ah,useLayoutEffect:oh,useMemo:ih,useReducer:$r,useRef:Pu,useState:function(){return $r(Wt)},useDebugValue:ti,useDeferredValue:function(e,t){var a=Ae();return ue===null?ai(a,e,t):sh(a,ue.memoizedState,e,t)},useTransition:function(){var e=$r(Wt)[0],t=Ae().memoizedState;return[typeof e=="boolean"?e:Po(e),t]},useSyncExternalStore:Yu,useId:dh,useHostTransitionStatus:ni,useFormState:Fu,useActionState:Fu,useOptimistic:function(e,t){var a=Ae();return ue!==null?Gu(a,ue,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Jr,useCacheRefresh:fh};vh.useEffectEvent=th;function ii(e,t,a,o){t=e.memoizedState,a=a(o,t),a=a==null?t:x({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var si={enqueueSetState:function(e,t,a){e=e._reactInternals;var o=ht(),n=ra(o);n.payload=t,a!=null&&(n.callback=a),t=ia(e,n,o),t!==null&&(Pe(t,e,o),Jo(t,e,o))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var o=ht(),n=ra(o);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=ia(e,n,o),t!==null&&(Pe(t,e,o),Jo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=ht(),o=ra(a);o.tag=2,t!=null&&(o.callback=t),t=ia(e,o,a),t!==null&&(Pe(t,e,a),Jo(t,e,a))}};function bh(e,t,a,o,n,l,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,l,r):t.prototype&&t.prototype.isPureReactComponent?!Ho(a,o)||!Ho(n,l):!0}function wh(e,t,a,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,o),t.state!==e&&si.enqueueReplaceState(t,t.state,null)}function Ra(e,t){var a=t;if("ref"in t){a={};for(var o in t)o!=="ref"&&(a[o]=t[o])}if(e=e.defaultProps){a===t&&(a=x({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function kh(e){Rn(e)}function Oh(e){console.error(e)}function Ah(e){Rn(e)}function ul(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(o){setTimeout(function(){throw o})}}function Th(e,t,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function ui(e,t,a){return a=ra(a),a.tag=3,a.payload={element:null},a.callback=function(){ul(e,t)},a}function Eh(e){return e=ra(e),e.tag=3,e}function Sh(e,t,a,o){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var l=o.value;e.payload=function(){return n(l)},e.callback=function(){Th(t,a,o)}}var r=a.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){Th(t,a,o),typeof n!="function"&&(fa===null?fa=new Set([this]):fa.add(this));var i=o.stack;this.componentDidCatch(o.value,{componentStack:i!==null?i:""})})}function Kf(e,t,a,o,n){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(t=a.alternate,t!==null&&ro(t,a,n,!0),a=rt.current,a!==null){switch(a.tag){case 31:case 13:return wt===null?kl():a.alternate===null&&we===0&&(we=3),a.flags&=-257,a.flags|=65536,a.lanes=n,o===In?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([o]):t.add(o),Bi(e,o,n)),!1;case 22:return a.flags|=65536,o===In?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([o]):a.add(o)),Bi(e,o,n)),!1}throw Error(d(435,a.tag))}return Bi(e,o,n),kl(),!1}if(te)return t=rt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,o!==_r&&(e=Error(d(422),{cause:o}),Lo(pt(e,a)))):(o!==_r&&(t=Error(d(423),{cause:o}),Lo(pt(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,o=pt(o,a),n=ui(e.stateNode,o,n),qr(e,n),we!==4&&(we=2)),!1;var l=Error(d(520),{cause:o});if(l=pt(l,a),hn===null?hn=[l]:hn.push(l),we!==4&&(we=2),t===null)return!0;o=pt(o,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=ui(a.stateNode,o,e),qr(a,e),!1;case 1:if(t=a.type,l=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||l!==null&&typeof l.componentDidCatch=="function"&&(fa===null||!fa.has(l))))return a.flags|=65536,n&=-n,a.lanes|=n,n=Eh(n),Sh(n,e,a,o),qr(a,n),!1}a=a.return}while(a!==null);return!1}var hi=Error(d(461)),Qe=!1;function Ue(e,t,a,o){t.child=e===null?xu(t,null,a,o):Ua(t,e.child,a,o)}function Qh(e,t,a,o,n){a=a.render;var l=t.ref;if("ref"in o){var r={};for(var i in o)i!=="ref"&&(r[i]=o[i])}else r=o;return Ba(t),o=Xr(e,t,a,r,l,n),i=Zr(),e!==null&&!Qe?(Vr(e,t,n),Gt(e,t,n)):(te&&i&&Sr(t),t.flags|=1,Ue(e,t,o,n),t.child)}function _h(e,t,a,o,n){if(e===null){var l=a.type;return typeof l=="function"&&!Ar(l)&&l.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=l,zh(e,t,l,o,n)):(e=Ln(a.type,null,o,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!vi(e,n)){var r=l.memoizedProps;if(a=a.compare,a=a!==null?a:Ho,a(r,o)&&e.ref===t.ref)return Gt(e,t,n)}return t.flags|=1,e=Yt(l,o),e.ref=t.ref,e.return=t,t.child=e}function zh(e,t,a,o,n){if(e!==null){var l=e.memoizedProps;if(Ho(l,o)&&e.ref===t.ref)if(Qe=!1,t.pendingProps=o=l,vi(e,n))(e.flags&131072)!==0&&(Qe=!0);else return t.lanes=e.lanes,Gt(e,t,n)}return ci(e,t,a,o,n)}function xh(e,t,a,o){var n=o.children,l=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((t.flags&128)!==0){if(l=l!==null?l.baseLanes|a:a,e!==null){for(o=t.child=e.child,n=0;o!==null;)n=n|o.lanes|o.childLanes,o=o.sibling;o=n&~l}else o=0,t.child=null;return Dh(e,t,l,a,o)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Kn(t,l!==null?l.cachePool:null),l!==null?Cu(t,l):Hr(),Bu(t);else return o=t.lanes=536870912,Dh(e,t,l!==null?l.baseLanes|a:a,a,o)}else l!==null?(Kn(t,l.cachePool),Cu(t,l),ua(),t.memoizedState=null):(e!==null&&Kn(t,null),Hr(),ua());return Ue(e,t,n,a),t.child}function an(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Dh(e,t,a,o,n){var l=Nr();return l=l===null?null:{parent:Ee._currentValue,pool:l},t.memoizedState={baseLanes:a,cachePool:l},e!==null&&Kn(t,null),Hr(),Bu(t),e!==null&&ro(e,t,o,!0),t.childLanes=n,null}function hl(e,t){return t=dl({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Mh(e,t,a){return Ua(t,e.child,null,a),e=hl(t,t.pendingProps),e.flags|=2,it(t),t.memoizedState=null,e}function Jf(e,t,a){var o=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(te){if(o.mode==="hidden")return e=hl(t,o),t.lanes=536870912,an(null,e);if(Gr(t),(e=ge)?(e=Lc(e,bt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ta!==null?{id:zt,overflow:xt}:null,retryLane:536870912,hydrationErrors:null},a=yu(e),a.return=t,t.child=a,je=t,ge=null)):e=null,e===null)throw oa(t);return t.lanes=536870912,null}return hl(t,o)}var l=e.memoizedState;if(l!==null){var r=l.dehydrated;if(Gr(t),n)if(t.flags&256)t.flags&=-257,t=Mh(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(d(558));else if(Qe||ro(e,t,a,!1),n=(a&e.childLanes)!==0,Qe||n){if(o=fe,o!==null&&(r=Os(o,a),r!==0&&r!==l.retryLane))throw l.retryLane=r,xa(e,r),Pe(o,e,r),hi;kl(),t=Mh(e,t,a)}else e=l.treeContext,ge=kt(r.nextSibling),je=t,te=!0,aa=null,bt=!1,e!==null&&vu(t,e),t=hl(t,o),t.flags|=4096;return t}return e=Yt(e.child,{mode:o.mode,children:o.children}),e.ref=t.ref,t.child=e,e.return=t,e}function cl(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(d(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function ci(e,t,a,o,n){return Ba(t),a=Xr(e,t,a,o,void 0,n),o=Zr(),e!==null&&!Qe?(Vr(e,t,n),Gt(e,t,n)):(te&&o&&Sr(t),t.flags|=1,Ue(e,t,a,n),t.child)}function Ch(e,t,a,o,n,l){return Ba(t),t.updateQueue=null,a=ju(t,o,a,n),Nu(e),o=Zr(),e!==null&&!Qe?(Vr(e,t,l),Gt(e,t,l)):(te&&o&&Sr(t),t.flags|=1,Ue(e,t,a,l),t.child)}function Bh(e,t,a,o,n){if(Ba(t),t.stateNode===null){var l=ao,r=a.contextType;typeof r=="object"&&r!==null&&(l=Ye(r)),l=new a(o,l),t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=si,t.stateNode=l,l._reactInternals=t,l=t.stateNode,l.props=o,l.state=t.memoizedState,l.refs={},Yr(t),r=a.contextType,l.context=typeof r=="object"&&r!==null?Ye(r):ao,l.state=t.memoizedState,r=a.getDerivedStateFromProps,typeof r=="function"&&(ii(t,a,r,o),l.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(r=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),r!==l.state&&si.enqueueReplaceState(l,l.state,null),$o(t,o,l,n),Io(),l.state=t.memoizedState),typeof l.componentDidMount=="function"&&(t.flags|=4194308),o=!0}else if(e===null){l=t.stateNode;var i=t.memoizedProps,s=Ra(a,i);l.props=s;var g=l.context,m=a.contextType;r=ao,typeof m=="object"&&m!==null&&(r=Ye(m));var k=a.getDerivedStateFromProps;m=typeof k=="function"||typeof l.getSnapshotBeforeUpdate=="function",i=t.pendingProps!==i,m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(i||g!==r)&&wh(t,l,o,r),la=!1;var y=t.memoizedState;l.state=y,$o(t,o,l,n),Io(),g=t.memoizedState,i||y!==g||la?(typeof k=="function"&&(ii(t,a,k,o),g=t.memoizedState),(s=la||bh(t,a,s,o,y,g,r))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=g),l.props=o,l.state=g,l.context=r,o=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{l=t.stateNode,Ur(e,t),r=t.memoizedProps,m=Ra(a,r),l.props=m,k=t.pendingProps,y=l.context,g=a.contextType,s=ao,typeof g=="object"&&g!==null&&(s=Ye(g)),i=a.getDerivedStateFromProps,(g=typeof i=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(r!==k||y!==s)&&wh(t,l,o,s),la=!1,y=t.memoizedState,l.state=y,$o(t,o,l,n),Io();var p=t.memoizedState;r!==k||y!==p||la||e!==null&&e.dependencies!==null&&Zn(e.dependencies)?(typeof i=="function"&&(ii(t,a,i,o),p=t.memoizedState),(m=la||bh(t,a,m,o,y,p,s)||e!==null&&e.dependencies!==null&&Zn(e.dependencies))?(g||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(o,p,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(o,p,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||r===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=p),l.props=o,l.state=p,l.context=s,o=m):(typeof l.componentDidUpdate!="function"||r===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),o=!1)}return l=o,cl(e,t),o=(t.flags&128)!==0,l||o?(l=t.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:l.render(),t.flags|=1,e!==null&&o?(t.child=Ua(t,e.child,null,n),t.child=Ua(t,null,a,n)):Ue(e,t,a,n),t.memoizedState=l.state,e=t.child):e=Gt(e,t,n),e}function Nh(e,t,a,o){return Ma(),t.flags|=256,Ue(e,t,a,o),t.child}var di={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function fi(e){return{baseLanes:e,cachePool:Tu()}}function gi(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=ut),e}function jh(e,t,a){var o=t.pendingProps,n=!1,l=(t.flags&128)!==0,r;if((r=l)||(r=e!==null&&e.memoizedState===null?!1:(Oe.current&2)!==0),r&&(n=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(te){if(n?sa(t):ua(),(e=ge)?(e=Lc(e,bt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ta!==null?{id:zt,overflow:xt}:null,retryLane:536870912,hydrationErrors:null},a=yu(e),a.return=t,t.child=a,je=t,ge=null)):e=null,e===null)throw oa(t);return Ii(e)?t.lanes=32:t.lanes=536870912,null}var i=o.children;return o=o.fallback,n?(ua(),n=t.mode,i=dl({mode:"hidden",children:i},n),o=Da(o,n,a,null),i.return=t,o.return=t,i.sibling=o,t.child=i,o=t.child,o.memoizedState=fi(a),o.childLanes=gi(e,r,a),t.memoizedState=di,an(null,o)):(sa(t),yi(t,i))}var s=e.memoizedState;if(s!==null&&(i=s.dehydrated,i!==null)){if(l)t.flags&256?(sa(t),t.flags&=-257,t=pi(e,t,a)):t.memoizedState!==null?(ua(),t.child=e.child,t.flags|=128,t=null):(ua(),i=o.fallback,n=t.mode,o=dl({mode:"visible",children:o.children},n),i=Da(i,n,a,null),i.flags|=2,o.return=t,i.return=t,o.sibling=i,t.child=o,Ua(t,e.child,null,a),o=t.child,o.memoizedState=fi(a),o.childLanes=gi(e,r,a),t.memoizedState=di,t=an(null,o));else if(sa(t),Ii(i)){if(r=i.nextSibling&&i.nextSibling.dataset,r)var g=r.dgst;r=g,o=Error(d(419)),o.stack="",o.digest=r,Lo({value:o,source:null,stack:null}),t=pi(e,t,a)}else if(Qe||ro(e,t,a,!1),r=(a&e.childLanes)!==0,Qe||r){if(r=fe,r!==null&&(o=Os(r,a),o!==0&&o!==s.retryLane))throw s.retryLane=o,xa(e,o),Pe(r,e,o),hi;Ji(i)||kl(),t=pi(e,t,a)}else Ji(i)?(t.flags|=192,t.child=e.child,t=null):(e=s.treeContext,ge=kt(i.nextSibling),je=t,te=!0,aa=null,bt=!1,e!==null&&vu(t,e),t=yi(t,o.children),t.flags|=4096);return t}return n?(ua(),i=o.fallback,n=t.mode,s=e.child,g=s.sibling,o=Yt(s,{mode:"hidden",children:o.children}),o.subtreeFlags=s.subtreeFlags&65011712,g!==null?i=Yt(g,i):(i=Da(i,n,a,null),i.flags|=2),i.return=t,o.return=t,o.sibling=i,t.child=o,an(null,o),o=t.child,i=e.child.memoizedState,i===null?i=fi(a):(n=i.cachePool,n!==null?(s=Ee._currentValue,n=n.parent!==s?{parent:s,pool:s}:n):n=Tu(),i={baseLanes:i.baseLanes|a,cachePool:n}),o.memoizedState=i,o.childLanes=gi(e,r,a),t.memoizedState=di,an(e.child,o)):(sa(t),a=e.child,e=a.sibling,a=Yt(a,{mode:"visible",children:o.children}),a.return=t,a.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=a,t.memoizedState=null,a)}function yi(e,t){return t=dl({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function dl(e,t){return e=lt(22,e,null,t),e.lanes=0,e}function pi(e,t,a){return Ua(t,e.child,null,a),e=yi(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Yh(e,t,a){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),Dr(e.return,t,a)}function mi(e,t,a,o,n,l){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:n,treeForkCount:l}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=o,r.tail=a,r.tailMode=n,r.treeForkCount=l)}function Uh(e,t,a){var o=t.pendingProps,n=o.revealOrder,l=o.tail;o=o.children;var r=Oe.current,i=(r&2)!==0;if(i?(r=r&1|2,t.flags|=128):r&=1,Q(Oe,r),Ue(e,t,o,a),o=te?Go:0,!i&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Yh(e,a,t);else if(e.tag===19)Yh(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&el(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),mi(t,!1,n,a,l,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&el(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}mi(t,!0,a,null,l,o);break;case"together":mi(t,!1,null,null,void 0,o);break;default:t.memoizedState=null}return t.child}function Gt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),da|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(ro(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(d(153));if(t.child!==null){for(e=t.child,a=Yt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Yt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function vi(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Zn(e)))}function If(e,t,a){switch(t.tag){case 3:We(t,t.stateNode.containerInfo),na(t,Ee,e.memoizedState.cache),Ma();break;case 27:case 5:_o(t);break;case 4:We(t,t.stateNode.containerInfo);break;case 10:na(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Gr(t),null;break;case 13:var o=t.memoizedState;if(o!==null)return o.dehydrated!==null?(sa(t),t.flags|=128,null):(a&t.child.childLanes)!==0?jh(e,t,a):(sa(t),e=Gt(e,t,a),e!==null?e.sibling:null);sa(t);break;case 19:var n=(e.flags&128)!==0;if(o=(a&t.childLanes)!==0,o||(ro(e,t,a,!1),o=(a&t.childLanes)!==0),n){if(o)return Uh(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),Q(Oe,Oe.current),o)break;return null;case 22:return t.lanes=0,xh(e,t,a,t.pendingProps);case 24:na(t,Ee,e.memoizedState.cache)}return Gt(e,t,a)}function qh(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Qe=!0;else{if(!vi(e,a)&&(t.flags&128)===0)return Qe=!1,If(e,t,a);Qe=(e.flags&131072)!==0}else Qe=!1,te&&(t.flags&1048576)!==0&&mu(t,Go,t.index);switch(t.lanes=0,t.tag){case 16:e:{var o=t.pendingProps;if(e=ja(t.elementType),t.type=e,typeof e=="function")Ar(e)?(o=Ra(e,o),t.tag=1,t=Bh(null,t,e,o,a)):(t.tag=0,t=ci(null,t,e,o,a));else{if(e!=null){var n=e.$$typeof;if(n===Le){t.tag=11,t=Qh(null,t,e,o,a);break e}else if(n===H){t.tag=14,t=_h(null,t,e,o,a);break e}}throw t=Ct(e)||e,Error(d(306,t,""))}}return t;case 0:return ci(e,t,t.type,t.pendingProps,a);case 1:return o=t.type,n=Ra(o,t.pendingProps),Bh(e,t,o,n,a);case 3:e:{if(We(t,t.stateNode.containerInfo),e===null)throw Error(d(387));o=t.pendingProps;var l=t.memoizedState;n=l.element,Ur(e,t),$o(t,o,null,a);var r=t.memoizedState;if(o=r.cache,na(t,Ee,o),o!==l.cache&&Mr(t,[Ee],a,!0),Io(),o=r.element,l.isDehydrated)if(l={element:o,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){t=Nh(e,t,o,a);break e}else if(o!==n){n=pt(Error(d(424)),t),Lo(n),t=Nh(e,t,o,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ge=kt(e.firstChild),je=t,te=!0,aa=null,bt=!0,a=xu(t,null,o,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ma(),o===n){t=Gt(e,t,a);break e}Ue(e,t,o,a)}t=t.child}return t;case 26:return cl(e,t),e===null?(a=Ic(t.type,null,t.pendingProps,null))?t.memoizedState=a:te||(a=t.type,e=t.pendingProps,o=_l(J.current).createElement(a),o[Ne]=t,o[Ve]=e,qe(o,a,e),Me(o),t.stateNode=o):t.memoizedState=Ic(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return _o(t),e===null&&te&&(o=t.stateNode=Vc(t.type,t.pendingProps,J.current),je=t,bt=!0,n=ge,ma(t.type)?($i=n,ge=kt(o.firstChild)):ge=n),Ue(e,t,t.pendingProps.children,a),cl(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&te&&((n=o=ge)&&(o=Sg(o,t.type,t.pendingProps,bt),o!==null?(t.stateNode=o,je=t,ge=kt(o.firstChild),bt=!1,n=!0):n=!1),n||oa(t)),_o(t),n=t.type,l=t.pendingProps,r=e!==null?e.memoizedProps:null,o=l.children,Zi(n,l)?o=null:r!==null&&Zi(n,r)&&(t.flags|=32),t.memoizedState!==null&&(n=Xr(e,t,Hf,null,null,a),vn._currentValue=n),cl(e,t),Ue(e,t,o,a),t.child;case 6:return e===null&&te&&((e=a=ge)&&(a=Qg(a,t.pendingProps,bt),a!==null?(t.stateNode=a,je=t,ge=null,e=!0):e=!1),e||oa(t)),null;case 13:return jh(e,t,a);case 4:return We(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=Ua(t,null,o,a):Ue(e,t,o,a),t.child;case 11:return Qh(e,t,t.type,t.pendingProps,a);case 7:return Ue(e,t,t.pendingProps,a),t.child;case 8:return Ue(e,t,t.pendingProps.children,a),t.child;case 12:return Ue(e,t,t.pendingProps.children,a),t.child;case 10:return o=t.pendingProps,na(t,t.type,o.value),Ue(e,t,o.children,a),t.child;case 9:return n=t.type._context,o=t.pendingProps.children,Ba(t),n=Ye(n),o=o(n),t.flags|=1,Ue(e,t,o,a),t.child;case 14:return _h(e,t,t.type,t.pendingProps,a);case 15:return zh(e,t,t.type,t.pendingProps,a);case 19:return Uh(e,t,a);case 31:return Jf(e,t,a);case 22:return xh(e,t,a,t.pendingProps);case 24:return Ba(t),o=Ye(Ee),e===null?(n=Nr(),n===null&&(n=fe,l=Cr(),n.pooledCache=l,l.refCount++,l!==null&&(n.pooledCacheLanes|=a),n=l),t.memoizedState={parent:o,cache:n},Yr(t),na(t,Ee,n)):((e.lanes&a)!==0&&(Ur(e,t),$o(t,null,null,a),Io()),n=e.memoizedState,l=t.memoizedState,n.parent!==o?(n={parent:o,cache:o},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),na(t,Ee,o)):(o=l.cache,na(t,Ee,o),o!==n.cache&&Mr(t,[Ee],a,!0))),Ue(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(d(156,t.tag))}function Lt(e){e.flags|=4}function bi(e,t,a,o,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(dc())e.flags|=8192;else throw Ya=In,jr}else e.flags&=-16777217}function Rh(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!td(t))if(dc())e.flags|=8192;else throw Ya=In,jr}function fl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?bs():536870912,e.lanes|=t,bo|=t)}function on(e,t){if(!te)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function ye(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,o|=n.subtreeFlags&65011712,o|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,o|=n.subtreeFlags,o|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=o,e.childLanes=a,t}function $f(e,t,a){var o=t.pendingProps;switch(Qr(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ye(t),null;case 1:return ye(t),null;case 3:return a=t.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),t.memoizedState.cache!==o&&(t.flags|=2048),Rt(Ee),ke(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(lo(t)?Lt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,zr())),ye(t),null;case 26:var n=t.type,l=t.memoizedState;return e===null?(Lt(t),l!==null?(ye(t),Rh(t,l)):(ye(t),bi(t,n,null,o,a))):l?l!==e.memoizedState?(Lt(t),ye(t),Rh(t,l)):(ye(t),t.flags&=-16777217):(e=e.memoizedProps,e!==o&&Lt(t),ye(t),bi(t,n,e,o,a)),null;case 27:if(Tn(t),a=J.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&Lt(t);else{if(!o){if(t.stateNode===null)throw Error(d(166));return ye(t),null}e=z.current,lo(t)?bu(t):(e=Vc(n,o,a),t.stateNode=e,Lt(t))}return ye(t),null;case 5:if(Tn(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&Lt(t);else{if(!o){if(t.stateNode===null)throw Error(d(166));return ye(t),null}if(l=z.current,lo(t))bu(t);else{var r=_l(J.current);switch(l){case 1:l=r.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:l=r.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":l=r.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":l=r.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":l=r.createElement("div"),l.innerHTML="<script><\/script>",l=l.removeChild(l.firstChild);break;case"select":l=typeof o.is=="string"?r.createElement("select",{is:o.is}):r.createElement("select"),o.multiple?l.multiple=!0:o.size&&(l.size=o.size);break;default:l=typeof o.is=="string"?r.createElement(n,{is:o.is}):r.createElement(n)}}l[Ne]=t,l[Ve]=o;e:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)l.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break e;for(;r.sibling===null;){if(r.return===null||r.return===t)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=l;e:switch(qe(l,n,o),n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&Lt(t)}}return ye(t),bi(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==o&&Lt(t);else{if(typeof o!="string"&&t.stateNode===null)throw Error(d(166));if(e=J.current,lo(t)){if(e=t.stateNode,a=t.memoizedProps,o=null,n=je,n!==null)switch(n.tag){case 27:case 5:o=n.memoizedProps}e[Ne]=t,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||jc(e.nodeValue,a)),e||oa(t,!0)}else e=_l(e).createTextNode(o),e[Ne]=t,t.stateNode=e}return ye(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(o=lo(t),a!==null){if(e===null){if(!o)throw Error(d(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(557));e[Ne]=t}else Ma(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ye(t),e=!1}else a=zr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(it(t),t):(it(t),null);if((t.flags&128)!==0)throw Error(d(558))}return ye(t),null;case 13:if(o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=lo(t),o!==null&&o.dehydrated!==null){if(e===null){if(!n)throw Error(d(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(d(317));n[Ne]=t}else Ma(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ye(t),n=!1}else n=zr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(it(t),t):(it(t),null)}return it(t),(t.flags&128)!==0?(t.lanes=a,t):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=t.child,n=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(n=o.alternate.memoizedState.cachePool.pool),l=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(l=o.memoizedState.cachePool.pool),l!==n&&(o.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),fl(t,t.updateQueue),ye(t),null);case 4:return ke(),e===null&&Hi(t.stateNode.containerInfo),ye(t),null;case 10:return Rt(t.type),ye(t),null;case 19:if(O(Oe),o=t.memoizedState,o===null)return ye(t),null;if(n=(t.flags&128)!==0,l=o.rendering,l===null)if(n)on(o,!1);else{if(we!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(l=el(e),l!==null){for(t.flags|=128,on(o,!1),e=l.updateQueue,t.updateQueue=e,fl(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)gu(a,e),a=a.sibling;return Q(Oe,Oe.current&1|2),te&&Ut(t,o.treeForkCount),t.child}e=e.sibling}o.tail!==null&&tt()>vl&&(t.flags|=128,n=!0,on(o,!1),t.lanes=4194304)}else{if(!n)if(e=el(l),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,fl(t,e),on(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!te)return ye(t),null}else 2*tt()-o.renderingStartTime>vl&&a!==536870912&&(t.flags|=128,n=!0,on(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(e=o.last,e!==null?e.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=tt(),e.sibling=null,a=Oe.current,Q(Oe,n?a&1|2:a&1),te&&Ut(t,o.treeForkCount),e):(ye(t),null);case 22:case 23:return it(t),Wr(),o=t.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(t.flags|=8192):o&&(t.flags|=8192),o?(a&536870912)!==0&&(t.flags&128)===0&&(ye(t),t.subtreeFlags&6&&(t.flags|=8192)):ye(t),a=t.updateQueue,a!==null&&fl(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(o=t.memoizedState.cachePool.pool),o!==a&&(t.flags|=2048),e!==null&&O(Na),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Rt(Ee),ye(t),null;case 25:return null;case 30:return null}throw Error(d(156,t.tag))}function Ff(e,t){switch(Qr(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Rt(Ee),ke(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Tn(t),null;case 31:if(t.memoizedState!==null){if(it(t),t.alternate===null)throw Error(d(340));Ma()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(it(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(d(340));Ma()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return O(Oe),null;case 4:return ke(),null;case 10:return Rt(t.type),null;case 22:case 23:return it(t),Wr(),e!==null&&O(Na),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Rt(Ee),null;case 25:return null;default:return null}}function Hh(e,t){switch(Qr(t),t.tag){case 3:Rt(Ee),ke();break;case 26:case 27:case 5:Tn(t);break;case 4:ke();break;case 31:t.memoizedState!==null&&it(t);break;case 13:it(t);break;case 19:O(Oe);break;case 10:Rt(t.type);break;case 22:case 23:it(t),Wr(),e!==null&&O(Na);break;case 24:Rt(Ee)}}function nn(e,t){try{var a=t.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var n=o.next;a=n;do{if((a.tag&e)===e){o=void 0;var l=a.create,r=a.inst;o=l(),r.destroy=o}a=a.next}while(a!==n)}}catch(i){ie(t,t.return,i)}}function ha(e,t,a){try{var o=t.updateQueue,n=o!==null?o.lastEffect:null;if(n!==null){var l=n.next;o=l;do{if((o.tag&e)===e){var r=o.inst,i=r.destroy;if(i!==void 0){r.destroy=void 0,n=t;var s=a,g=i;try{g()}catch(m){ie(n,s,m)}}}o=o.next}while(o!==l)}}catch(m){ie(t,t.return,m)}}function Wh(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Mu(t,a)}catch(o){ie(e,e.return,o)}}}function Gh(e,t,a){a.props=Ra(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){ie(e,t,o)}}function ln(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(n){ie(e,t,n)}}function Dt(e,t){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(n){ie(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){ie(e,t,n)}else a.current=null}function Lh(e){var t=e.type,a=e.memoizedProps,o=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(n){ie(e,e.return,n)}}function wi(e,t,a){try{var o=e.stateNode;wg(o,e.type,a,t),o[Ve]=t}catch(n){ie(e,e.return,n)}}function Xh(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ma(e.type)||e.tag===4}function ki(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Xh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ma(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Oi(e,t,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Nt));else if(o!==4&&(o===27&&ma(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Oi(e,t,a),e=e.sibling;e!==null;)Oi(e,t,a),e=e.sibling}function gl(e,t,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(o!==4&&(o===27&&ma(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(gl(e,t,a),e=e.sibling;e!==null;)gl(e,t,a),e=e.sibling}function Zh(e){var t=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);qe(t,o,a),t[Ne]=e,t[Ve]=a}catch(l){ie(e,e.return,l)}}var Xt=!1,_e=!1,Ai=!1,Vh=typeof WeakSet=="function"?WeakSet:Set,Ce=null;function Pf(e,t){if(e=e.containerInfo,Li=Nl,e=lu(e),pr(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var n=o.anchorOffset,l=o.focusNode;o=o.focusOffset;try{a.nodeType,l.nodeType}catch{a=null;break e}var r=0,i=-1,s=-1,g=0,m=0,k=e,y=null;t:for(;;){for(var p;k!==a||n!==0&&k.nodeType!==3||(i=r+n),k!==l||o!==0&&k.nodeType!==3||(s=r+o),k.nodeType===3&&(r+=k.nodeValue.length),(p=k.firstChild)!==null;)y=k,k=p;for(;;){if(k===e)break t;if(y===a&&++g===n&&(i=r),y===l&&++m===o&&(s=r),(p=k.nextSibling)!==null)break;k=y,y=k.parentNode}k=p}a=i===-1||s===-1?null:{start:i,end:s}}else a=null}a=a||{start:0,end:0}}else a=null;for(Xi={focusedElem:e,selectionRange:a},Nl=!1,Ce=t;Ce!==null;)if(t=Ce,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ce=e;else for(;Ce!==null;){switch(t=Ce,l=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&l!==null){e=void 0,a=t,n=l.memoizedProps,l=l.memoizedState,o=a.stateNode;try{var _=Ra(a.type,n);e=o.getSnapshotBeforeUpdate(_,l),o.__reactInternalSnapshotBeforeUpdate=e}catch(j){ie(a,a.return,j)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Ki(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ki(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(d(163))}if(e=t.sibling,e!==null){e.return=t.return,Ce=e;break}Ce=t.return}}function Kh(e,t,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Vt(e,a),o&4&&nn(5,a);break;case 1:if(Vt(e,a),o&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(r){ie(a,a.return,r)}else{var n=Ra(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){ie(a,a.return,r)}}o&64&&Wh(a),o&512&&ln(a,a.return);break;case 3:if(Vt(e,a),o&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Mu(e,t)}catch(r){ie(a,a.return,r)}}break;case 27:t===null&&o&4&&Zh(a);case 26:case 5:Vt(e,a),t===null&&o&4&&Lh(a),o&512&&ln(a,a.return);break;case 12:Vt(e,a);break;case 31:Vt(e,a),o&4&&$h(e,a);break;case 13:Vt(e,a),o&4&&Fh(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=sg.bind(null,a),_g(e,a))));break;case 22:if(o=a.memoizedState!==null||Xt,!o){t=t!==null&&t.memoizedState!==null||_e,n=Xt;var l=_e;Xt=o,(_e=t)&&!l?Kt(e,a,(a.subtreeFlags&8772)!==0):Vt(e,a),Xt=n,_e=l}break;case 30:break;default:Vt(e,a)}}function Jh(e){var t=e.alternate;t!==null&&(e.alternate=null,Jh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Pl(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var me=null,Je=!1;function Zt(e,t,a){for(a=a.child;a!==null;)Ih(e,t,a),a=a.sibling}function Ih(e,t,a){if(at&&typeof at.onCommitFiberUnmount=="function")try{at.onCommitFiberUnmount(zo,a)}catch{}switch(a.tag){case 26:_e||Dt(a,t),Zt(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:_e||Dt(a,t);var o=me,n=Je;ma(a.type)&&(me=a.stateNode,Je=!1),Zt(e,t,a),yn(a.stateNode),me=o,Je=n;break;case 5:_e||Dt(a,t);case 6:if(o=me,n=Je,me=null,Zt(e,t,a),me=o,Je=n,me!==null)if(Je)try{(me.nodeType===9?me.body:me.nodeName==="HTML"?me.ownerDocument.body:me).removeChild(a.stateNode)}catch(l){ie(a,t,l)}else try{me.removeChild(a.stateNode)}catch(l){ie(a,t,l)}break;case 18:me!==null&&(Je?(e=me,Wc(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Qo(e)):Wc(me,a.stateNode));break;case 4:o=me,n=Je,me=a.stateNode.containerInfo,Je=!0,Zt(e,t,a),me=o,Je=n;break;case 0:case 11:case 14:case 15:ha(2,a,t),_e||ha(4,a,t),Zt(e,t,a);break;case 1:_e||(Dt(a,t),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Gh(a,t,o)),Zt(e,t,a);break;case 21:Zt(e,t,a);break;case 22:_e=(o=_e)||a.memoizedState!==null,Zt(e,t,a),_e=o;break;default:Zt(e,t,a)}}function $h(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Qo(e)}catch(a){ie(t,t.return,a)}}}function Fh(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Qo(e)}catch(a){ie(t,t.return,a)}}function eg(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Vh),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Vh),t;default:throw Error(d(435,e.tag))}}function yl(e,t){var a=eg(e);t.forEach(function(o){if(!a.has(o)){a.add(o);var n=ug.bind(null,e,o);o.then(n,n)}})}function Ie(e,t){var a=t.deletions;if(a!==null)for(var o=0;o<a.length;o++){var n=a[o],l=e,r=t,i=r;e:for(;i!==null;){switch(i.tag){case 27:if(ma(i.type)){me=i.stateNode,Je=!1;break e}break;case 5:me=i.stateNode,Je=!1;break e;case 3:case 4:me=i.stateNode.containerInfo,Je=!0;break e}i=i.return}if(me===null)throw Error(d(160));Ih(l,r,n),me=null,Je=!1,l=n.alternate,l!==null&&(l.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Ph(t,e),t=t.sibling}var Et=null;function Ph(e,t){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ie(t,e),$e(e),o&4&&(ha(3,e,e.return),nn(3,e),ha(5,e,e.return));break;case 1:Ie(t,e),$e(e),o&512&&(_e||a===null||Dt(a,a.return)),o&64&&Xt&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var n=Et;if(Ie(t,e),$e(e),o&512&&(_e||a===null||Dt(a,a.return)),o&4){var l=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){e:{o=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(o){case"title":l=n.getElementsByTagName("title")[0],(!l||l[Mo]||l[Ne]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=n.createElement(o),n.head.insertBefore(l,n.querySelector("head > title"))),qe(l,o,a),l[Ne]=e,Me(l),o=l;break e;case"link":var r=Pc("link","href",n).get(o+(a.href||""));if(r){for(var i=0;i<r.length;i++)if(l=r[i],l.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&l.getAttribute("rel")===(a.rel==null?null:a.rel)&&l.getAttribute("title")===(a.title==null?null:a.title)&&l.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){r.splice(i,1);break t}}l=n.createElement(o),qe(l,o,a),n.head.appendChild(l);break;case"meta":if(r=Pc("meta","content",n).get(o+(a.content||""))){for(i=0;i<r.length;i++)if(l=r[i],l.getAttribute("content")===(a.content==null?null:""+a.content)&&l.getAttribute("name")===(a.name==null?null:a.name)&&l.getAttribute("property")===(a.property==null?null:a.property)&&l.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&l.getAttribute("charset")===(a.charSet==null?null:a.charSet)){r.splice(i,1);break t}}l=n.createElement(o),qe(l,o,a),n.head.appendChild(l);break;default:throw Error(d(468,o))}l[Ne]=e,Me(l),o=l}e.stateNode=o}else ed(n,e.type,e.stateNode);else e.stateNode=Fc(n,o,e.memoizedProps);else l!==o?(l===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):l.count--,o===null?ed(n,e.type,e.stateNode):Fc(n,o,e.memoizedProps)):o===null&&e.stateNode!==null&&wi(e,e.memoizedProps,a.memoizedProps)}break;case 27:Ie(t,e),$e(e),o&512&&(_e||a===null||Dt(a,a.return)),a!==null&&o&4&&wi(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Ie(t,e),$e(e),o&512&&(_e||a===null||Dt(a,a.return)),e.flags&32){n=e.stateNode;try{Ja(n,"")}catch(_){ie(e,e.return,_)}}o&4&&e.stateNode!=null&&(n=e.memoizedProps,wi(e,n,a!==null?a.memoizedProps:n)),o&1024&&(Ai=!0);break;case 6:if(Ie(t,e),$e(e),o&4){if(e.stateNode===null)throw Error(d(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(_){ie(e,e.return,_)}}break;case 3:if(Dl=null,n=Et,Et=zl(t.containerInfo),Ie(t,e),Et=n,$e(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Qo(t.containerInfo)}catch(_){ie(e,e.return,_)}Ai&&(Ai=!1,ec(e));break;case 4:o=Et,Et=zl(e.stateNode.containerInfo),Ie(t,e),$e(e),Et=o;break;case 12:Ie(t,e),$e(e);break;case 31:Ie(t,e),$e(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,yl(e,o)));break;case 13:Ie(t,e),$e(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(ml=tt()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,yl(e,o)));break;case 22:n=e.memoizedState!==null;var s=a!==null&&a.memoizedState!==null,g=Xt,m=_e;if(Xt=g||n,_e=m||s,Ie(t,e),_e=m,Xt=g,$e(e),o&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||s||Xt||_e||Ha(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){s=a=t;try{if(l=s.stateNode,n)r=l.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{i=s.stateNode;var k=s.memoizedProps.style,y=k!=null&&k.hasOwnProperty("display")?k.display:null;i.style.display=y==null||typeof y=="boolean"?"":(""+y).trim()}}catch(_){ie(s,s.return,_)}}}else if(t.tag===6){if(a===null){s=t;try{s.stateNode.nodeValue=n?"":s.memoizedProps}catch(_){ie(s,s.return,_)}}}else if(t.tag===18){if(a===null){s=t;try{var p=s.stateNode;n?Gc(p,!0):Gc(s.stateNode,!1)}catch(_){ie(s,s.return,_)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,yl(e,a))));break;case 19:Ie(t,e),$e(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,yl(e,o)));break;case 30:break;case 21:break;default:Ie(t,e),$e(e)}}function $e(e){var t=e.flags;if(t&2){try{for(var a,o=e.return;o!==null;){if(Xh(o)){a=o;break}o=o.return}if(a==null)throw Error(d(160));switch(a.tag){case 27:var n=a.stateNode,l=ki(e);gl(e,l,n);break;case 5:var r=a.stateNode;a.flags&32&&(Ja(r,""),a.flags&=-33);var i=ki(e);gl(e,i,r);break;case 3:case 4:var s=a.stateNode.containerInfo,g=ki(e);Oi(e,g,s);break;default:throw Error(d(161))}}catch(m){ie(e,e.return,m)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ec(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;ec(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Vt(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Kh(e,t.alternate,t),t=t.sibling}function Ha(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ha(4,t,t.return),Ha(t);break;case 1:Dt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Gh(t,t.return,a),Ha(t);break;case 27:yn(t.stateNode);case 26:case 5:Dt(t,t.return),Ha(t);break;case 22:t.memoizedState===null&&Ha(t);break;case 30:Ha(t);break;default:Ha(t)}e=e.sibling}}function Kt(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var o=t.alternate,n=e,l=t,r=l.flags;switch(l.tag){case 0:case 11:case 15:Kt(n,l,a),nn(4,l);break;case 1:if(Kt(n,l,a),o=l,n=o.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(g){ie(o,o.return,g)}if(o=l,n=o.updateQueue,n!==null){var i=o.stateNode;try{var s=n.shared.hiddenCallbacks;if(s!==null)for(n.shared.hiddenCallbacks=null,n=0;n<s.length;n++)Du(s[n],i)}catch(g){ie(o,o.return,g)}}a&&r&64&&Wh(l),ln(l,l.return);break;case 27:Zh(l);case 26:case 5:Kt(n,l,a),a&&o===null&&r&4&&Lh(l),ln(l,l.return);break;case 12:Kt(n,l,a);break;case 31:Kt(n,l,a),a&&r&4&&$h(n,l);break;case 13:Kt(n,l,a),a&&r&4&&Fh(n,l);break;case 22:l.memoizedState===null&&Kt(n,l,a),ln(l,l.return);break;case 30:break;default:Kt(n,l,a)}t=t.sibling}}function Ti(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Xo(a))}function Ei(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Xo(e))}function St(e,t,a,o){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)tc(e,t,a,o),t=t.sibling}function tc(e,t,a,o){var n=t.flags;switch(t.tag){case 0:case 11:case 15:St(e,t,a,o),n&2048&&nn(9,t);break;case 1:St(e,t,a,o);break;case 3:St(e,t,a,o),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Xo(e)));break;case 12:if(n&2048){St(e,t,a,o),e=t.stateNode;try{var l=t.memoizedProps,r=l.id,i=l.onPostCommit;typeof i=="function"&&i(r,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(s){ie(t,t.return,s)}}else St(e,t,a,o);break;case 31:St(e,t,a,o);break;case 13:St(e,t,a,o);break;case 23:break;case 22:l=t.stateNode,r=t.alternate,t.memoizedState!==null?l._visibility&2?St(e,t,a,o):rn(e,t):l._visibility&2?St(e,t,a,o):(l._visibility|=2,po(e,t,a,o,(t.subtreeFlags&10256)!==0||!1)),n&2048&&Ti(r,t);break;case 24:St(e,t,a,o),n&2048&&Ei(t.alternate,t);break;default:St(e,t,a,o)}}function po(e,t,a,o,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var l=e,r=t,i=a,s=o,g=r.flags;switch(r.tag){case 0:case 11:case 15:po(l,r,i,s,n),nn(8,r);break;case 23:break;case 22:var m=r.stateNode;r.memoizedState!==null?m._visibility&2?po(l,r,i,s,n):rn(l,r):(m._visibility|=2,po(l,r,i,s,n)),n&&g&2048&&Ti(r.alternate,r);break;case 24:po(l,r,i,s,n),n&&g&2048&&Ei(r.alternate,r);break;default:po(l,r,i,s,n)}t=t.sibling}}function rn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,o=t,n=o.flags;switch(o.tag){case 22:rn(a,o),n&2048&&Ti(o.alternate,o);break;case 24:rn(a,o),n&2048&&Ei(o.alternate,o);break;default:rn(a,o)}t=t.sibling}}var sn=8192;function mo(e,t,a){if(e.subtreeFlags&sn)for(e=e.child;e!==null;)ac(e,t,a),e=e.sibling}function ac(e,t,a){switch(e.tag){case 26:mo(e,t,a),e.flags&sn&&e.memoizedState!==null&&Rg(a,Et,e.memoizedState,e.memoizedProps);break;case 5:mo(e,t,a);break;case 3:case 4:var o=Et;Et=zl(e.stateNode.containerInfo),mo(e,t,a),Et=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=sn,sn=16777216,mo(e,t,a),sn=o):mo(e,t,a));break;default:mo(e,t,a)}}function oc(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function un(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var o=t[a];Ce=o,lc(o,e)}oc(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)nc(e),e=e.sibling}function nc(e){switch(e.tag){case 0:case 11:case 15:un(e),e.flags&2048&&ha(9,e,e.return);break;case 3:un(e);break;case 12:un(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,pl(e)):un(e);break;default:un(e)}}function pl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var o=t[a];Ce=o,lc(o,e)}oc(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ha(8,t,t.return),pl(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,pl(t));break;default:pl(t)}e=e.sibling}}function lc(e,t){for(;Ce!==null;){var a=Ce;switch(a.tag){case 0:case 11:case 15:ha(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Xo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Ce=o;else e:for(a=e;Ce!==null;){o=Ce;var n=o.sibling,l=o.return;if(Jh(o),o===a){Ce=null;break e}if(n!==null){n.return=l,Ce=n;break e}Ce=l}}}var tg={getCacheForType:function(e){var t=Ye(Ee),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return Ye(Ee).controller.signal}},ag=typeof WeakMap=="function"?WeakMap:Map,ne=0,fe=null,I=null,F=0,re=0,st=null,ca=!1,vo=!1,Si=!1,Jt=0,we=0,da=0,Wa=0,Qi=0,ut=0,bo=0,hn=null,Fe=null,_i=!1,ml=0,rc=0,vl=1/0,bl=null,fa=null,xe=0,ga=null,wo=null,It=0,zi=0,xi=null,ic=null,cn=0,Di=null;function ht(){return(ne&2)!==0&&F!==0?F&-F:v.T!==null?Yi():As()}function sc(){if(ut===0)if((F&536870912)===0||te){var e=Qn;Qn<<=1,(Qn&3932160)===0&&(Qn=262144),ut=e}else ut=536870912;return e=rt.current,e!==null&&(e.flags|=32),ut}function Pe(e,t,a){(e===fe&&(re===2||re===9)||e.cancelPendingCommit!==null)&&(ko(e,0),ya(e,F,ut,!1)),Do(e,a),((ne&2)===0||e!==fe)&&(e===fe&&((ne&2)===0&&(Wa|=a),we===4&&ya(e,F,ut,!1)),Mt(e))}function uc(e,t,a){if((ne&6)!==0)throw Error(d(327));var o=!a&&(t&127)===0&&(t&e.expiredLanes)===0||xo(e,t),n=o?lg(e,t):Ci(e,t,!0),l=o;do{if(n===0){vo&&!o&&ya(e,t,0,!1);break}else{if(a=e.current.alternate,l&&!og(a)){n=Ci(e,t,!1),l=!1;continue}if(n===2){if(l=t,e.errorRecoveryDisabledLanes&l)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;e:{var i=e;n=hn;var s=i.current.memoizedState.isDehydrated;if(s&&(ko(i,r).flags|=256),r=Ci(i,r,!1),r!==2){if(Si&&!s){i.errorRecoveryDisabledLanes|=l,Wa|=l,n=4;break e}l=Fe,Fe=n,l!==null&&(Fe===null?Fe=l:Fe.push.apply(Fe,l))}n=r}if(l=!1,n!==2)continue}}if(n===1){ko(e,0),ya(e,t,0,!0);break}e:{switch(o=e,l=n,l){case 0:case 1:throw Error(d(345));case 4:if((t&4194048)!==t)break;case 6:ya(o,t,ut,!ca);break e;case 2:Fe=null;break;case 3:case 5:break;default:throw Error(d(329))}if((t&62914560)===t&&(n=ml+300-tt(),10<n)){if(ya(o,t,ut,!ca),zn(o,0,!0)!==0)break e;It=t,o.timeoutHandle=Rc(hc.bind(null,o,a,Fe,bl,_i,t,ut,Wa,bo,ca,l,"Throttled",-0,0),n);break e}hc(o,a,Fe,bl,_i,t,ut,Wa,bo,ca,l,null,-0,0)}}break}while(!0);Mt(e)}function hc(e,t,a,o,n,l,r,i,s,g,m,k,y,p){if(e.timeoutHandle=-1,k=t.subtreeFlags,k&8192||(k&16785408)===16785408){k={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Nt},ac(t,l,k);var _=(l&62914560)===l?ml-tt():(l&4194048)===l?rc-tt():0;if(_=Hg(k,_),_!==null){It=l,e.cancelPendingCommit=_(vc.bind(null,e,t,l,a,o,n,r,i,s,m,k,null,y,p)),ya(e,l,r,!g);return}}vc(e,t,l,a,o,n,r,i,s)}function og(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var n=a[o],l=n.getSnapshot;n=n.value;try{if(!nt(l(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ya(e,t,a,o){t&=~Qi,t&=~Wa,e.suspendedLanes|=t,e.pingedLanes&=~t,o&&(e.warmLanes|=t),o=e.expirationTimes;for(var n=t;0<n;){var l=31-ot(n),r=1<<l;o[l]=-1,n&=~r}a!==0&&ws(e,a,t)}function wl(){return(ne&6)===0?(dn(0),!1):!0}function Mi(){if(I!==null){if(re===0)var e=I.return;else e=I,qt=Ca=null,Kr(e),ho=null,Vo=0,e=I;for(;e!==null;)Hh(e.alternate,e),e=e.return;I=null}}function ko(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Ag(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),It=0,Mi(),fe=e,I=a=Yt(e.current,null),F=t,re=0,st=null,ca=!1,vo=xo(e,t),Si=!1,bo=ut=Qi=Wa=da=we=0,Fe=hn=null,_i=!1,(t&8)!==0&&(t|=t&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=t;0<o;){var n=31-ot(o),l=1<<n;t|=e[n],o&=~l}return Jt=t,Hn(),a}function cc(e,t){G=null,v.H=tn,t===uo||t===Jn?(t=Qu(),re=3):t===jr?(t=Qu(),re=4):re=t===hi?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,st=t,I===null&&(we=1,ul(e,pt(t,e.current)))}function dc(){var e=rt.current;return e===null?!0:(F&4194048)===F?wt===null:(F&62914560)===F||(F&536870912)!==0?e===wt:!1}function fc(){var e=v.H;return v.H=tn,e===null?tn:e}function gc(){var e=v.A;return v.A=tg,e}function kl(){we=4,ca||(F&4194048)!==F&&rt.current!==null||(vo=!0),(da&134217727)===0&&(Wa&134217727)===0||fe===null||ya(fe,F,ut,!1)}function Ci(e,t,a){var o=ne;ne|=2;var n=fc(),l=gc();(fe!==e||F!==t)&&(bl=null,ko(e,t)),t=!1;var r=we;e:do try{if(re!==0&&I!==null){var i=I,s=st;switch(re){case 8:Mi(),r=6;break e;case 3:case 2:case 9:case 6:rt.current===null&&(t=!0);var g=re;if(re=0,st=null,Oo(e,i,s,g),a&&vo){r=0;break e}break;default:g=re,re=0,st=null,Oo(e,i,s,g)}}ng(),r=we;break}catch(m){cc(e,m)}while(!0);return t&&e.shellSuspendCounter++,qt=Ca=null,ne=o,v.H=n,v.A=l,I===null&&(fe=null,F=0,Hn()),r}function ng(){for(;I!==null;)yc(I)}function lg(e,t){var a=ne;ne|=2;var o=fc(),n=gc();fe!==e||F!==t?(bl=null,vl=tt()+500,ko(e,t)):vo=xo(e,t);e:do try{if(re!==0&&I!==null){t=I;var l=st;t:switch(re){case 1:re=0,st=null,Oo(e,t,l,1);break;case 2:case 9:if(Eu(l)){re=0,st=null,pc(t);break}t=function(){re!==2&&re!==9||fe!==e||(re=7),Mt(e)},l.then(t,t);break e;case 3:re=7;break e;case 4:re=5;break e;case 7:Eu(l)?(re=0,st=null,pc(t)):(re=0,st=null,Oo(e,t,l,7));break;case 5:var r=null;switch(I.tag){case 26:r=I.memoizedState;case 5:case 27:var i=I;if(r?td(r):i.stateNode.complete){re=0,st=null;var s=i.sibling;if(s!==null)I=s;else{var g=i.return;g!==null?(I=g,Ol(g)):I=null}break t}}re=0,st=null,Oo(e,t,l,5);break;case 6:re=0,st=null,Oo(e,t,l,6);break;case 8:Mi(),we=6;break e;default:throw Error(d(462))}}rg();break}catch(m){cc(e,m)}while(!0);return qt=Ca=null,v.H=o,v.A=n,ne=a,I!==null?0:(fe=null,F=0,Hn(),we)}function rg(){for(;I!==null&&!_d();)yc(I)}function yc(e){var t=qh(e.alternate,e,Jt);e.memoizedProps=e.pendingProps,t===null?Ol(e):I=t}function pc(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Ch(a,t,t.pendingProps,t.type,void 0,F);break;case 11:t=Ch(a,t,t.pendingProps,t.type.render,t.ref,F);break;case 5:Kr(t);default:Hh(a,t),t=I=gu(t,Jt),t=qh(a,t,Jt)}e.memoizedProps=e.pendingProps,t===null?Ol(e):I=t}function Oo(e,t,a,o){qt=Ca=null,Kr(t),ho=null,Vo=0;var n=t.return;try{if(Kf(e,n,t,a,F)){we=1,ul(e,pt(a,e.current)),I=null;return}}catch(l){if(n!==null)throw I=n,l;we=1,ul(e,pt(a,e.current)),I=null;return}t.flags&32768?(te||o===1?e=!0:vo||(F&536870912)!==0?e=!1:(ca=e=!0,(o===2||o===9||o===3||o===6)&&(o=rt.current,o!==null&&o.tag===13&&(o.flags|=16384))),mc(t,e)):Ol(t)}function Ol(e){var t=e;do{if((t.flags&32768)!==0){mc(t,ca);return}e=t.return;var a=$f(t.alternate,t,Jt);if(a!==null){I=a;return}if(t=t.sibling,t!==null){I=t;return}I=t=e}while(t!==null);we===0&&(we=5)}function mc(e,t){do{var a=Ff(e.alternate,e);if(a!==null){a.flags&=32767,I=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){I=e;return}I=e=a}while(e!==null);we=6,I=null}function vc(e,t,a,o,n,l,r,i,s){e.cancelPendingCommit=null;do Al();while(xe!==0);if((ne&6)!==0)throw Error(d(327));if(t!==null){if(t===e.current)throw Error(d(177));if(l=t.lanes|t.childLanes,l|=kr,Ud(e,a,l,r,i,s),e===fe&&(I=fe=null,F=0),wo=t,ga=e,It=a,zi=l,xi=n,ic=o,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,hg(En,function(){return Ac(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||o){o=v.T,v.T=null,n=S.p,S.p=2,r=ne,ne|=4;try{Pf(e,t,a)}finally{ne=r,S.p=n,v.T=o}}xe=1,bc(),wc(),kc()}}function bc(){if(xe===1){xe=0;var e=ga,t=wo,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=v.T,v.T=null;var o=S.p;S.p=2;var n=ne;ne|=4;try{Ph(t,e);var l=Xi,r=lu(e.containerInfo),i=l.focusedElem,s=l.selectionRange;if(r!==i&&i&&i.ownerDocument&&nu(i.ownerDocument.documentElement,i)){if(s!==null&&pr(i)){var g=s.start,m=s.end;if(m===void 0&&(m=g),"selectionStart"in i)i.selectionStart=g,i.selectionEnd=Math.min(m,i.value.length);else{var k=i.ownerDocument||document,y=k&&k.defaultView||window;if(y.getSelection){var p=y.getSelection(),_=i.textContent.length,j=Math.min(s.start,_),ce=s.end===void 0?j:Math.min(s.end,_);!p.extend&&j>ce&&(r=ce,ce=j,j=r);var c=ou(i,j),u=ou(i,ce);if(c&&u&&(p.rangeCount!==1||p.anchorNode!==c.node||p.anchorOffset!==c.offset||p.focusNode!==u.node||p.focusOffset!==u.offset)){var f=k.createRange();f.setStart(c.node,c.offset),p.removeAllRanges(),j>ce?(p.addRange(f),p.extend(u.node,u.offset)):(f.setEnd(u.node,u.offset),p.addRange(f))}}}}for(k=[],p=i;p=p.parentNode;)p.nodeType===1&&k.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<k.length;i++){var b=k[i];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}Nl=!!Li,Xi=Li=null}finally{ne=n,S.p=o,v.T=a}}e.current=t,xe=2}}function wc(){if(xe===2){xe=0;var e=ga,t=wo,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=v.T,v.T=null;var o=S.p;S.p=2;var n=ne;ne|=4;try{Kh(e,t.alternate,t)}finally{ne=n,S.p=o,v.T=a}}xe=3}}function kc(){if(xe===4||xe===3){xe=0,zd();var e=ga,t=wo,a=It,o=ic;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?xe=5:(xe=0,wo=ga=null,Oc(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(fa=null),$l(a),t=t.stateNode,at&&typeof at.onCommitFiberRoot=="function")try{at.onCommitFiberRoot(zo,t,void 0,(t.current.flags&128)===128)}catch{}if(o!==null){t=v.T,n=S.p,S.p=2,v.T=null;try{for(var l=e.onRecoverableError,r=0;r<o.length;r++){var i=o[r];l(i.value,{componentStack:i.stack})}}finally{v.T=t,S.p=n}}(It&3)!==0&&Al(),Mt(e),n=e.pendingLanes,(a&261930)!==0&&(n&42)!==0?e===Di?cn++:(cn=0,Di=e):cn=0,dn(0)}}function Oc(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Xo(t)))}function Al(){return bc(),wc(),kc(),Ac()}function Ac(){if(xe!==5)return!1;var e=ga,t=zi;zi=0;var a=$l(It),o=v.T,n=S.p;try{S.p=32>a?32:a,v.T=null,a=xi,xi=null;var l=ga,r=It;if(xe=0,wo=ga=null,It=0,(ne&6)!==0)throw Error(d(331));var i=ne;if(ne|=4,nc(l.current),tc(l,l.current,r,a),ne=i,dn(0,!1),at&&typeof at.onPostCommitFiberRoot=="function")try{at.onPostCommitFiberRoot(zo,l)}catch{}return!0}finally{S.p=n,v.T=o,Oc(e,t)}}function Tc(e,t,a){t=pt(a,t),t=ui(e.stateNode,t,2),e=ia(e,t,2),e!==null&&(Do(e,2),Mt(e))}function ie(e,t,a){if(e.tag===3)Tc(e,e,a);else for(;t!==null;){if(t.tag===3){Tc(t,e,a);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(fa===null||!fa.has(o))){e=pt(a,e),a=Eh(2),o=ia(t,a,2),o!==null&&(Sh(a,o,t,e),Do(o,2),Mt(o));break}}t=t.return}}function Bi(e,t,a){var o=e.pingCache;if(o===null){o=e.pingCache=new ag;var n=new Set;o.set(t,n)}else n=o.get(t),n===void 0&&(n=new Set,o.set(t,n));n.has(a)||(Si=!0,n.add(a),e=ig.bind(null,e,t,a),t.then(e,e))}function ig(e,t,a){var o=e.pingCache;o!==null&&o.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,fe===e&&(F&a)===a&&(we===4||we===3&&(F&62914560)===F&&300>tt()-ml?(ne&2)===0&&ko(e,0):Qi|=a,bo===F&&(bo=0)),Mt(e)}function Ec(e,t){t===0&&(t=bs()),e=xa(e,t),e!==null&&(Do(e,t),Mt(e))}function sg(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Ec(e,a)}function ug(e,t){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(d(314))}o!==null&&o.delete(t),Ec(e,a)}function hg(e,t){return Vl(e,t)}var Tl=null,Ao=null,Ni=!1,El=!1,ji=!1,pa=0;function Mt(e){e!==Ao&&e.next===null&&(Ao===null?Tl=Ao=e:Ao=Ao.next=e),El=!0,Ni||(Ni=!0,dg())}function dn(e,t){if(!ji&&El){ji=!0;do for(var a=!1,o=Tl;o!==null;){if(e!==0){var n=o.pendingLanes;if(n===0)var l=0;else{var r=o.suspendedLanes,i=o.pingedLanes;l=(1<<31-ot(42|e)+1)-1,l&=n&~(r&~i),l=l&201326741?l&201326741|1:l?l|2:0}l!==0&&(a=!0,zc(o,l))}else l=F,l=zn(o,o===fe?l:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(l&3)===0||xo(o,l)||(a=!0,zc(o,l));o=o.next}while(a);ji=!1}}function cg(){Sc()}function Sc(){El=Ni=!1;var e=0;pa!==0&&Og()&&(e=pa);for(var t=tt(),a=null,o=Tl;o!==null;){var n=o.next,l=Qc(o,t);l===0?(o.next=null,a===null?Tl=n:a.next=n,n===null&&(Ao=a)):(a=o,(e!==0||(l&3)!==0)&&(El=!0)),o=n}xe!==0&&xe!==5||dn(e),pa!==0&&(pa=0)}function Qc(e,t){for(var a=e.suspendedLanes,o=e.pingedLanes,n=e.expirationTimes,l=e.pendingLanes&-62914561;0<l;){var r=31-ot(l),i=1<<r,s=n[r];s===-1?((i&a)===0||(i&o)!==0)&&(n[r]=Yd(i,t)):s<=t&&(e.expiredLanes|=i),l&=~i}if(t=fe,a=F,a=zn(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===t&&(re===2||re===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Kl(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||xo(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(o!==null&&Kl(o),$l(a)){case 2:case 8:a=ms;break;case 32:a=En;break;case 268435456:a=vs;break;default:a=En}return o=_c.bind(null,e),a=Vl(a,o),e.callbackPriority=t,e.callbackNode=a,t}return o!==null&&o!==null&&Kl(o),e.callbackPriority=2,e.callbackNode=null,2}function _c(e,t){if(xe!==0&&xe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Al()&&e.callbackNode!==a)return null;var o=F;return o=zn(e,e===fe?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(uc(e,o,t),Qc(e,tt()),e.callbackNode!=null&&e.callbackNode===a?_c.bind(null,e):null)}function zc(e,t){if(Al())return null;uc(e,t,!0)}function dg(){Tg(function(){(ne&6)!==0?Vl(ps,cg):Sc()})}function Yi(){if(pa===0){var e=io;e===0&&(e=Sn,Sn<<=1,(Sn&261888)===0&&(Sn=256)),pa=e}return pa}function xc(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Cn(""+e)}function Dc(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function fg(e,t,a,o,n){if(t==="submit"&&a&&a.stateNode===n){var l=xc((n[Ve]||null).action),r=o.submitter;r&&(t=(t=r[Ve]||null)?xc(t.formAction):r.getAttribute("formAction"),t!==null&&(l=t,r=null));var i=new Yn("action","action",null,o,n);e.push({event:i,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(pa!==0){var s=r?Dc(n,r):new FormData(n);oi(a,{pending:!0,data:s,method:n.method,action:l},null,s)}}else typeof l=="function"&&(i.preventDefault(),s=r?Dc(n,r):new FormData(n),oi(a,{pending:!0,data:s,method:n.method,action:l},l,s))},currentTarget:n}]})}}for(var Ui=0;Ui<wr.length;Ui++){var qi=wr[Ui],gg=qi.toLowerCase(),yg=qi[0].toUpperCase()+qi.slice(1);Tt(gg,"on"+yg)}Tt(su,"onAnimationEnd"),Tt(uu,"onAnimationIteration"),Tt(hu,"onAnimationStart"),Tt("dblclick","onDoubleClick"),Tt("focusin","onFocus"),Tt("focusout","onBlur"),Tt(Df,"onTransitionRun"),Tt(Mf,"onTransitionStart"),Tt(Cf,"onTransitionCancel"),Tt(cu,"onTransitionEnd"),Va("onMouseEnter",["mouseout","mouseover"]),Va("onMouseLeave",["mouseout","mouseover"]),Va("onPointerEnter",["pointerout","pointerover"]),Va("onPointerLeave",["pointerout","pointerover"]),Sa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Sa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Sa("onBeforeInput",["compositionend","keypress","textInput","paste"]),Sa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Sa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Sa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fn));function Mc(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],n=o.event;o=o.listeners;e:{var l=void 0;if(t)for(var r=o.length-1;0<=r;r--){var i=o[r],s=i.instance,g=i.currentTarget;if(i=i.listener,s!==l&&n.isPropagationStopped())break e;l=i,n.currentTarget=g;try{l(n)}catch(m){Rn(m)}n.currentTarget=null,l=s}else for(r=0;r<o.length;r++){if(i=o[r],s=i.instance,g=i.currentTarget,i=i.listener,s!==l&&n.isPropagationStopped())break e;l=i,n.currentTarget=g;try{l(n)}catch(m){Rn(m)}n.currentTarget=null,l=s}}}}function $(e,t){var a=t[Fl];a===void 0&&(a=t[Fl]=new Set);var o=e+"__bubble";a.has(o)||(Cc(t,e,2,!1),a.add(o))}function Ri(e,t,a){var o=0;t&&(o|=4),Cc(a,e,o,t)}var Sl="_reactListening"+Math.random().toString(36).slice(2);function Hi(e){if(!e[Sl]){e[Sl]=!0,Ss.forEach(function(a){a!=="selectionchange"&&(pg.has(a)||Ri(a,!1,e),Ri(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Sl]||(t[Sl]=!0,Ri("selectionchange",!1,t))}}function Cc(e,t,a,o){switch(sd(t)){case 2:var n=Lg;break;case 8:n=Xg;break;default:n=as}a=n.bind(null,t,a,e),n=void 0,!ir||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),o?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function Wi(e,t,a,o,n){var l=o;if((t&1)===0&&(t&2)===0&&o!==null)e:for(;;){if(o===null)return;var r=o.tag;if(r===3||r===4){var i=o.stateNode.containerInfo;if(i===n)break;if(r===4)for(r=o.return;r!==null;){var s=r.tag;if((s===3||s===4)&&r.stateNode.containerInfo===n)return;r=r.return}for(;i!==null;){if(r=La(i),r===null)return;if(s=r.tag,s===5||s===6||s===26||s===27){o=l=r;continue e}i=i.parentNode}}o=o.return}Us(function(){var g=l,m=lr(a),k=[];e:{var y=du.get(e);if(y!==void 0){var p=Yn,_=e;switch(e){case"keypress":if(Nn(a)===0)break e;case"keydown":case"keyup":p=uf;break;case"focusin":_="focus",p=cr;break;case"focusout":_="blur",p=cr;break;case"beforeblur":case"afterblur":p=cr;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Hs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Id;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=df;break;case su:case uu:case hu:p=Pd;break;case cu:p=gf;break;case"scroll":case"scrollend":p=Kd;break;case"wheel":p=pf;break;case"copy":case"cut":case"paste":p=tf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Gs;break;case"toggle":case"beforetoggle":p=vf}var j=(t&4)!==0,ce=!j&&(e==="scroll"||e==="scrollend"),c=j?y!==null?y+"Capture":null:y;j=[];for(var u=g,f;u!==null;){var b=u;if(f=b.stateNode,b=b.tag,b!==5&&b!==26&&b!==27||f===null||c===null||(b=Bo(u,c),b!=null&&j.push(gn(u,b,f))),ce)break;u=u.return}0<j.length&&(y=new p(y,_,null,a,m),k.push({event:y,listeners:j}))}}if((t&7)===0){e:{if(y=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",y&&a!==nr&&(_=a.relatedTarget||a.fromElement)&&(La(_)||_[Ga]))break e;if((p||y)&&(y=m.window===m?m:(y=m.ownerDocument)?y.defaultView||y.parentWindow:window,p?(_=a.relatedTarget||a.toElement,p=g,_=_?La(_):null,_!==null&&(ce=C(_),j=_.tag,_!==ce||j!==5&&j!==27&&j!==6)&&(_=null)):(p=null,_=g),p!==_)){if(j=Hs,b="onMouseLeave",c="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(j=Gs,b="onPointerLeave",c="onPointerEnter",u="pointer"),ce=p==null?y:Co(p),f=_==null?y:Co(_),y=new j(b,u+"leave",p,a,m),y.target=ce,y.relatedTarget=f,b=null,La(m)===g&&(j=new j(c,u+"enter",_,a,m),j.target=f,j.relatedTarget=ce,b=j),ce=b,p&&_)t:{for(j=mg,c=p,u=_,f=0,b=c;b;b=j(b))f++;b=0;for(var B=u;B;B=j(B))b++;for(;0<f-b;)c=j(c),f--;for(;0<b-f;)u=j(u),b--;for(;f--;){if(c===u||u!==null&&c===u.alternate){j=c;break t}c=j(c),u=j(u)}j=null}else j=null;p!==null&&Bc(k,y,p,j,!1),_!==null&&ce!==null&&Bc(k,ce,_,j,!0)}}e:{if(y=g?Co(g):window,p=y.nodeName&&y.nodeName.toLowerCase(),p==="select"||p==="input"&&y.type==="file")var ae=$s;else if(Js(y))if(Fs)ae=_f;else{ae=Sf;var D=Ef}else p=y.nodeName,!p||p.toLowerCase()!=="input"||y.type!=="checkbox"&&y.type!=="radio"?g&&or(g.elementType)&&(ae=$s):ae=Qf;if(ae&&(ae=ae(e,g))){Is(k,ae,a,m);break e}D&&D(e,y,g),e==="focusout"&&g&&y.type==="number"&&g.memoizedProps.value!=null&&ar(y,"number",y.value)}switch(D=g?Co(g):window,e){case"focusin":(Js(D)||D.contentEditable==="true")&&(Pa=D,mr=g,Wo=null);break;case"focusout":Wo=mr=Pa=null;break;case"mousedown":vr=!0;break;case"contextmenu":case"mouseup":case"dragend":vr=!1,ru(k,a,m);break;case"selectionchange":if(xf)break;case"keydown":case"keyup":ru(k,a,m)}var X;if(fr)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Fa?Vs(e,a)&&(P="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(P="onCompositionStart");P&&(Ls&&a.locale!=="ko"&&(Fa||P!=="onCompositionStart"?P==="onCompositionEnd"&&Fa&&(X=qs()):(ea=m,sr="value"in ea?ea.value:ea.textContent,Fa=!0)),D=Ql(g,P),0<D.length&&(P=new Ws(P,e,null,a,m),k.push({event:P,listeners:D}),X?P.data=X:(X=Ks(a),X!==null&&(P.data=X)))),(X=wf?kf(e,a):Of(e,a))&&(P=Ql(g,"onBeforeInput"),0<P.length&&(D=new Ws("onBeforeInput","beforeinput",null,a,m),k.push({event:D,listeners:P}),D.data=X)),fg(k,e,g,a,m)}Mc(k,t)})}function gn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Ql(e,t){for(var a=t+"Capture",o=[];e!==null;){var n=e,l=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||l===null||(n=Bo(e,a),n!=null&&o.unshift(gn(e,n,l)),n=Bo(e,t),n!=null&&o.push(gn(e,n,l))),e.tag===3)return o;e=e.return}return[]}function mg(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Bc(e,t,a,o,n){for(var l=t._reactName,r=[];a!==null&&a!==o;){var i=a,s=i.alternate,g=i.stateNode;if(i=i.tag,s!==null&&s===o)break;i!==5&&i!==26&&i!==27||g===null||(s=g,n?(g=Bo(a,l),g!=null&&r.unshift(gn(a,g,s))):n||(g=Bo(a,l),g!=null&&r.push(gn(a,g,s)))),a=a.return}r.length!==0&&e.push({event:t,listeners:r})}var vg=/\r\n?/g,bg=/\u0000|\uFFFD/g;function Nc(e){return(typeof e=="string"?e:""+e).replace(vg,`
`).replace(bg,"")}function jc(e,t){return t=Nc(t),Nc(e)===t}function he(e,t,a,o,n,l){switch(a){case"children":typeof o=="string"?t==="body"||t==="textarea"&&o===""||Ja(e,o):(typeof o=="number"||typeof o=="bigint")&&t!=="body"&&Ja(e,""+o);break;case"className":Dn(e,"class",o);break;case"tabIndex":Dn(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Dn(e,a,o);break;case"style":js(e,o,l);break;case"data":if(t!=="object"){Dn(e,"data",o);break}case"src":case"href":if(o===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Cn(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof l=="function"&&(a==="formAction"?(t!=="input"&&he(e,t,"name",n.name,n,null),he(e,t,"formEncType",n.formEncType,n,null),he(e,t,"formMethod",n.formMethod,n,null),he(e,t,"formTarget",n.formTarget,n,null)):(he(e,t,"encType",n.encType,n,null),he(e,t,"method",n.method,n,null),he(e,t,"target",n.target,n,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Cn(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Nt);break;case"onScroll":o!=null&&$("scroll",e);break;case"onScrollEnd":o!=null&&$("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(d(61));if(a=o.__html,a!=null){if(n.children!=null)throw Error(d(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Cn(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":$("beforetoggle",e),$("toggle",e),xn(e,"popover",o);break;case"xlinkActuate":Bt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Bt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Bt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Bt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Bt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Bt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Bt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Bt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Bt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":xn(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Zd.get(a)||a,xn(e,a,o))}}function Gi(e,t,a,o,n,l){switch(a){case"style":js(e,o,l);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(d(61));if(a=o.__html,a!=null){if(n.children!=null)throw Error(d(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Ja(e,o):(typeof o=="number"||typeof o=="bigint")&&Ja(e,""+o);break;case"onScroll":o!=null&&$("scroll",e);break;case"onScrollEnd":o!=null&&$("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Nt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Qs.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),l=e[Ve]||null,l=l!=null?l[a]:null,typeof l=="function"&&e.removeEventListener(t,l,n),typeof o=="function")){typeof l!="function"&&l!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,o,n);break e}a in e?e[a]=o:o===!0?e.setAttribute(a,""):xn(e,a,o)}}}function qe(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":$("error",e),$("load",e);var o=!1,n=!1,l;for(l in a)if(a.hasOwnProperty(l)){var r=a[l];if(r!=null)switch(l){case"src":o=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(d(137,t));default:he(e,t,l,r,a,null)}}n&&he(e,t,"srcSet",a.srcSet,a,null),o&&he(e,t,"src",a.src,a,null);return;case"input":$("invalid",e);var i=l=r=n=null,s=null,g=null;for(o in a)if(a.hasOwnProperty(o)){var m=a[o];if(m!=null)switch(o){case"name":n=m;break;case"type":r=m;break;case"checked":s=m;break;case"defaultChecked":g=m;break;case"value":l=m;break;case"defaultValue":i=m;break;case"children":case"dangerouslySetInnerHTML":if(m!=null)throw Error(d(137,t));break;default:he(e,t,o,m,a,null)}}Ms(e,l,i,s,g,r,n,!1);return;case"select":$("invalid",e),o=r=l=null;for(n in a)if(a.hasOwnProperty(n)&&(i=a[n],i!=null))switch(n){case"value":l=i;break;case"defaultValue":r=i;break;case"multiple":o=i;default:he(e,t,n,i,a,null)}t=l,a=r,e.multiple=!!o,t!=null?Ka(e,!!o,t,!1):a!=null&&Ka(e,!!o,a,!0);return;case"textarea":$("invalid",e),l=n=o=null;for(r in a)if(a.hasOwnProperty(r)&&(i=a[r],i!=null))switch(r){case"value":o=i;break;case"defaultValue":n=i;break;case"children":l=i;break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(d(91));break;default:he(e,t,r,i,a,null)}Bs(e,o,n,l);return;case"option":for(s in a)if(a.hasOwnProperty(s)&&(o=a[s],o!=null))switch(s){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:he(e,t,s,o,a,null)}return;case"dialog":$("beforetoggle",e),$("toggle",e),$("cancel",e),$("close",e);break;case"iframe":case"object":$("load",e);break;case"video":case"audio":for(o=0;o<fn.length;o++)$(fn[o],e);break;case"image":$("error",e),$("load",e);break;case"details":$("toggle",e);break;case"embed":case"source":case"link":$("error",e),$("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(g in a)if(a.hasOwnProperty(g)&&(o=a[g],o!=null))switch(g){case"children":case"dangerouslySetInnerHTML":throw Error(d(137,t));default:he(e,t,g,o,a,null)}return;default:if(or(t)){for(m in a)a.hasOwnProperty(m)&&(o=a[m],o!==void 0&&Gi(e,t,m,o,a,void 0));return}}for(i in a)a.hasOwnProperty(i)&&(o=a[i],o!=null&&he(e,t,i,o,a,null))}function wg(e,t,a,o){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,l=null,r=null,i=null,s=null,g=null,m=null;for(p in a){var k=a[p];if(a.hasOwnProperty(p)&&k!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":s=k;default:o.hasOwnProperty(p)||he(e,t,p,null,o,k)}}for(var y in o){var p=o[y];if(k=a[y],o.hasOwnProperty(y)&&(p!=null||k!=null))switch(y){case"type":l=p;break;case"name":n=p;break;case"checked":g=p;break;case"defaultChecked":m=p;break;case"value":r=p;break;case"defaultValue":i=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(d(137,t));break;default:p!==k&&he(e,t,y,p,o,k)}}tr(e,r,i,s,g,m,l,n);return;case"select":p=r=i=y=null;for(l in a)if(s=a[l],a.hasOwnProperty(l)&&s!=null)switch(l){case"value":break;case"multiple":p=s;default:o.hasOwnProperty(l)||he(e,t,l,null,o,s)}for(n in o)if(l=o[n],s=a[n],o.hasOwnProperty(n)&&(l!=null||s!=null))switch(n){case"value":y=l;break;case"defaultValue":i=l;break;case"multiple":r=l;default:l!==s&&he(e,t,n,l,o,s)}t=i,a=r,o=p,y!=null?Ka(e,!!a,y,!1):!!o!=!!a&&(t!=null?Ka(e,!!a,t,!0):Ka(e,!!a,a?[]:"",!1));return;case"textarea":p=y=null;for(i in a)if(n=a[i],a.hasOwnProperty(i)&&n!=null&&!o.hasOwnProperty(i))switch(i){case"value":break;case"children":break;default:he(e,t,i,null,o,n)}for(r in o)if(n=o[r],l=a[r],o.hasOwnProperty(r)&&(n!=null||l!=null))switch(r){case"value":y=n;break;case"defaultValue":p=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(d(91));break;default:n!==l&&he(e,t,r,n,o,l)}Cs(e,y,p);return;case"option":for(var _ in a)if(y=a[_],a.hasOwnProperty(_)&&y!=null&&!o.hasOwnProperty(_))switch(_){case"selected":e.selected=!1;break;default:he(e,t,_,null,o,y)}for(s in o)if(y=o[s],p=a[s],o.hasOwnProperty(s)&&y!==p&&(y!=null||p!=null))switch(s){case"selected":e.selected=y&&typeof y!="function"&&typeof y!="symbol";break;default:he(e,t,s,y,o,p)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var j in a)y=a[j],a.hasOwnProperty(j)&&y!=null&&!o.hasOwnProperty(j)&&he(e,t,j,null,o,y);for(g in o)if(y=o[g],p=a[g],o.hasOwnProperty(g)&&y!==p&&(y!=null||p!=null))switch(g){case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(d(137,t));break;default:he(e,t,g,y,o,p)}return;default:if(or(t)){for(var ce in a)y=a[ce],a.hasOwnProperty(ce)&&y!==void 0&&!o.hasOwnProperty(ce)&&Gi(e,t,ce,void 0,o,y);for(m in o)y=o[m],p=a[m],!o.hasOwnProperty(m)||y===p||y===void 0&&p===void 0||Gi(e,t,m,y,o,p);return}}for(var c in a)y=a[c],a.hasOwnProperty(c)&&y!=null&&!o.hasOwnProperty(c)&&he(e,t,c,null,o,y);for(k in o)y=o[k],p=a[k],!o.hasOwnProperty(k)||y===p||y==null&&p==null||he(e,t,k,y,o,p)}function Yc(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function kg(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var n=a[o],l=n.transferSize,r=n.initiatorType,i=n.duration;if(l&&i&&Yc(r)){for(r=0,i=n.responseEnd,o+=1;o<a.length;o++){var s=a[o],g=s.startTime;if(g>i)break;var m=s.transferSize,k=s.initiatorType;m&&Yc(k)&&(s=s.responseEnd,r+=m*(s<i?1:(i-g)/(s-g)))}if(--o,t+=8*(l+r)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Li=null,Xi=null;function _l(e){return e.nodeType===9?e:e.ownerDocument}function Uc(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function qc(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Zi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Vi=null;function Og(){var e=window.event;return e&&e.type==="popstate"?e===Vi?!1:(Vi=e,!0):(Vi=null,!1)}var Rc=typeof setTimeout=="function"?setTimeout:void 0,Ag=typeof clearTimeout=="function"?clearTimeout:void 0,Hc=typeof Promise=="function"?Promise:void 0,Tg=typeof queueMicrotask=="function"?queueMicrotask:typeof Hc<"u"?function(e){return Hc.resolve(null).then(e).catch(Eg)}:Rc;function Eg(e){setTimeout(function(){throw e})}function ma(e){return e==="head"}function Wc(e,t){var a=t,o=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(n),Qo(t);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")yn(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,yn(a);for(var l=a.firstChild;l;){var r=l.nextSibling,i=l.nodeName;l[Mo]||i==="SCRIPT"||i==="STYLE"||i==="LINK"&&l.rel.toLowerCase()==="stylesheet"||a.removeChild(l),l=r}}else a==="body"&&yn(e.ownerDocument.body);a=n}while(a);Qo(t)}function Gc(e,t){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function Ki(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Ki(a),Pl(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Sg(e,t,a,o){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Mo])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(l=e.getAttribute("rel"),l==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(l!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(l=e.getAttribute("src"),(l!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&l&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var l=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===l)return e}else return e;if(e=kt(e.nextSibling),e===null)break}return null}function Qg(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=kt(e.nextSibling),e===null))return null;return e}function Lc(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=kt(e.nextSibling),e===null))return null;return e}function Ji(e){return e.data==="$?"||e.data==="$~"}function Ii(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function _g(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var o=function(){t(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function kt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var $i=null;function Xc(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return kt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Zc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Vc(e,t,a){switch(t=_l(a),e){case"html":if(e=t.documentElement,!e)throw Error(d(452));return e;case"head":if(e=t.head,!e)throw Error(d(453));return e;case"body":if(e=t.body,!e)throw Error(d(454));return e;default:throw Error(d(451))}}function yn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Pl(e)}var Ot=new Map,Kc=new Set;function zl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var $t=S.d;S.d={f:zg,r:xg,D:Dg,C:Mg,L:Cg,m:Bg,X:jg,S:Ng,M:Yg};function zg(){var e=$t.f(),t=wl();return e||t}function xg(e){var t=Xa(e);t!==null&&t.tag===5&&t.type==="form"?ch(t):$t.r(e)}var To=typeof document>"u"?null:document;function Jc(e,t,a){var o=To;if(o&&typeof t=="string"&&t){var n=gt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),Kc.has(n)||(Kc.add(n),e={rel:e,crossOrigin:a,href:t},o.querySelector(n)===null&&(t=o.createElement("link"),qe(t,"link",e),Me(t),o.head.appendChild(t)))}}function Dg(e){$t.D(e),Jc("dns-prefetch",e,null)}function Mg(e,t){$t.C(e,t),Jc("preconnect",e,t)}function Cg(e,t,a){$t.L(e,t,a);var o=To;if(o&&e&&t){var n='link[rel="preload"][as="'+gt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+gt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+gt(a.imageSizes)+'"]')):n+='[href="'+gt(e)+'"]';var l=n;switch(t){case"style":l=Eo(e);break;case"script":l=So(e)}Ot.has(l)||(e=x({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Ot.set(l,e),o.querySelector(n)!==null||t==="style"&&o.querySelector(pn(l))||t==="script"&&o.querySelector(mn(l))||(t=o.createElement("link"),qe(t,"link",e),Me(t),o.head.appendChild(t)))}}function Bg(e,t){$t.m(e,t);var a=To;if(a&&e){var o=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+gt(o)+'"][href="'+gt(e)+'"]',l=n;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":l=So(e)}if(!Ot.has(l)&&(e=x({rel:"modulepreload",href:e},t),Ot.set(l,e),a.querySelector(n)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(mn(l)))return}o=a.createElement("link"),qe(o,"link",e),Me(o),a.head.appendChild(o)}}}function Ng(e,t,a){$t.S(e,t,a);var o=To;if(o&&e){var n=Za(o).hoistableStyles,l=Eo(e);t=t||"default";var r=n.get(l);if(!r){var i={loading:0,preload:null};if(r=o.querySelector(pn(l)))i.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Ot.get(l))&&Fi(e,a);var s=r=o.createElement("link");Me(s),qe(s,"link",e),s._p=new Promise(function(g,m){s.onload=g,s.onerror=m}),s.addEventListener("load",function(){i.loading|=1}),s.addEventListener("error",function(){i.loading|=2}),i.loading|=4,xl(r,t,o)}r={type:"stylesheet",instance:r,count:1,state:i},n.set(l,r)}}}function jg(e,t){$t.X(e,t);var a=To;if(a&&e){var o=Za(a).hoistableScripts,n=So(e),l=o.get(n);l||(l=a.querySelector(mn(n)),l||(e=x({src:e,async:!0},t),(t=Ot.get(n))&&Pi(e,t),l=a.createElement("script"),Me(l),qe(l,"link",e),a.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},o.set(n,l))}}function Yg(e,t){$t.M(e,t);var a=To;if(a&&e){var o=Za(a).hoistableScripts,n=So(e),l=o.get(n);l||(l=a.querySelector(mn(n)),l||(e=x({src:e,async:!0,type:"module"},t),(t=Ot.get(n))&&Pi(e,t),l=a.createElement("script"),Me(l),qe(l,"link",e),a.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},o.set(n,l))}}function Ic(e,t,a,o){var n=(n=J.current)?zl(n):null;if(!n)throw Error(d(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Eo(a.href),a=Za(n).hoistableStyles,o=a.get(t),o||(o={type:"style",instance:null,count:0,state:null},a.set(t,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Eo(a.href);var l=Za(n).hoistableStyles,r=l.get(e);if(r||(n=n.ownerDocument||n,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},l.set(e,r),(l=n.querySelector(pn(e)))&&!l._p&&(r.instance=l,r.state.loading=5),Ot.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ot.set(e,a),l||Ug(n,e,a,r.state))),t&&o===null)throw Error(d(528,""));return r}if(t&&o!==null)throw Error(d(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=So(a),a=Za(n).hoistableScripts,o=a.get(t),o||(o={type:"script",instance:null,count:0,state:null},a.set(t,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(d(444,e))}}function Eo(e){return'href="'+gt(e)+'"'}function pn(e){return'link[rel="stylesheet"]['+e+"]"}function $c(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function Ug(e,t,a,o){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?o.loading=1:(t=e.createElement("link"),o.preload=t,t.addEventListener("load",function(){return o.loading|=1}),t.addEventListener("error",function(){return o.loading|=2}),qe(t,"link",a),Me(t),e.head.appendChild(t))}function So(e){return'[src="'+gt(e)+'"]'}function mn(e){return"script[async]"+e}function Fc(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var o=e.querySelector('style[data-href~="'+gt(a.href)+'"]');if(o)return t.instance=o,Me(o),o;var n=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),Me(o),qe(o,"style",n),xl(o,a.precedence,e),t.instance=o;case"stylesheet":n=Eo(a.href);var l=e.querySelector(pn(n));if(l)return t.state.loading|=4,t.instance=l,Me(l),l;o=$c(a),(n=Ot.get(n))&&Fi(o,n),l=(e.ownerDocument||e).createElement("link"),Me(l);var r=l;return r._p=new Promise(function(i,s){r.onload=i,r.onerror=s}),qe(l,"link",o),t.state.loading|=4,xl(l,a.precedence,e),t.instance=l;case"script":return l=So(a.src),(n=e.querySelector(mn(l)))?(t.instance=n,Me(n),n):(o=a,(n=Ot.get(l))&&(o=x({},a),Pi(o,n)),e=e.ownerDocument||e,n=e.createElement("script"),Me(n),qe(n,"link",o),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(d(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(o=t.instance,t.state.loading|=4,xl(o,a.precedence,e));return t.instance}function xl(e,t,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=o.length?o[o.length-1]:null,l=n,r=0;r<o.length;r++){var i=o[r];if(i.dataset.precedence===t)l=i;else if(l!==n)break}l?l.parentNode.insertBefore(e,l.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Fi(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Pi(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Dl=null;function Pc(e,t,a){if(Dl===null){var o=new Map,n=Dl=new Map;n.set(a,o)}else n=Dl,o=n.get(a),o||(o=new Map,n.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var l=a[n];if(!(l[Mo]||l[Ne]||e==="link"&&l.getAttribute("rel")==="stylesheet")&&l.namespaceURI!=="http://www.w3.org/2000/svg"){var r=l.getAttribute(t)||"";r=e+r;var i=o.get(r);i?i.push(l):o.set(r,[l])}}return o}function ed(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function qg(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function td(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Rg(e,t,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=Eo(o.href),l=t.querySelector(pn(n));if(l){t=l._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Ml.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=l,Me(l);return}l=t.ownerDocument||t,o=$c(o),(n=Ot.get(n))&&Fi(o,n),l=l.createElement("link"),Me(l);var r=l;r._p=new Promise(function(i,s){r.onload=i,r.onerror=s}),qe(l,"link",o),a.instance=l}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Ml.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var es=0;function Hg(e,t){return e.stylesheets&&e.count===0&&Bl(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&Bl(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4+t);0<e.imgBytes&&es===0&&(es=62500*kg());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Bl(e,e.stylesheets),e.unsuspend)){var l=e.unsuspend;e.unsuspend=null,l()}},(e.imgBytes>es?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(n)}}:null}function Ml(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Bl(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Cl=null;function Bl(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Cl=new Map,t.forEach(Wg,e),Cl=null,Ml.call(e))}function Wg(e,t){if(!(t.state.loading&4)){var a=Cl.get(e);if(a)var o=a.get(null);else{a=new Map,Cl.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),l=0;l<n.length;l++){var r=n[l];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(a.set(r.dataset.precedence,r),o=r)}o&&a.set(null,o)}n=t.instance,r=n.getAttribute("data-precedence"),l=a.get(r)||o,l===o&&a.set(null,n),a.set(r,n),this.count++,o=Ml.bind(this),n.addEventListener("load",o),n.addEventListener("error",o),l?l.parentNode.insertBefore(n,l.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var vn={$$typeof:De,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function Gg(e,t,a,o,n,l,r,i,s){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Jl(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jl(0),this.hiddenUpdates=Jl(null),this.identifierPrefix=o,this.onUncaughtError=n,this.onCaughtError=l,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function ad(e,t,a,o,n,l,r,i,s,g,m,k){return e=new Gg(e,t,a,r,s,g,m,k,i),t=1,l===!0&&(t|=24),l=lt(3,null,null,t),e.current=l,l.stateNode=e,t=Cr(),t.refCount++,e.pooledCache=t,t.refCount++,l.memoizedState={element:o,isDehydrated:a,cache:t},Yr(l),e}function od(e){return e?(e=ao,e):ao}function nd(e,t,a,o,n,l){n=od(n),o.context===null?o.context=n:o.pendingContext=n,o=ra(t),o.payload={element:a},l=l===void 0?null:l,l!==null&&(o.callback=l),a=ia(e,o,t),a!==null&&(Pe(a,e,t),Jo(a,e,t))}function ld(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function ts(e,t){ld(e,t),(e=e.alternate)&&ld(e,t)}function rd(e){if(e.tag===13||e.tag===31){var t=xa(e,67108864);t!==null&&Pe(t,e,67108864),ts(e,67108864)}}function id(e){if(e.tag===13||e.tag===31){var t=ht();t=Il(t);var a=xa(e,t);a!==null&&Pe(a,e,t),ts(e,t)}}var Nl=!0;function Lg(e,t,a,o){var n=v.T;v.T=null;var l=S.p;try{S.p=2,as(e,t,a,o)}finally{S.p=l,v.T=n}}function Xg(e,t,a,o){var n=v.T;v.T=null;var l=S.p;try{S.p=8,as(e,t,a,o)}finally{S.p=l,v.T=n}}function as(e,t,a,o){if(Nl){var n=os(o);if(n===null)Wi(e,t,o,jl,a),ud(e,o);else if(Vg(n,e,t,a,o))o.stopPropagation();else if(ud(e,o),t&4&&-1<Zg.indexOf(e)){for(;n!==null;){var l=Xa(n);if(l!==null)switch(l.tag){case 3:if(l=l.stateNode,l.current.memoizedState.isDehydrated){var r=Ea(l.pendingLanes);if(r!==0){var i=l;for(i.pendingLanes|=2,i.entangledLanes|=2;r;){var s=1<<31-ot(r);i.entanglements[1]|=s,r&=~s}Mt(l),(ne&6)===0&&(vl=tt()+500,dn(0))}}break;case 31:case 13:i=xa(l,2),i!==null&&Pe(i,l,2),wl(),ts(l,2)}if(l=os(o),l===null&&Wi(e,t,o,jl,a),l===n)break;n=l}n!==null&&o.stopPropagation()}else Wi(e,t,o,null,a)}}function os(e){return e=lr(e),ns(e)}var jl=null;function ns(e){if(jl=null,e=La(e),e!==null){var t=C(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=Z(t),e!==null)return e;e=null}else if(a===31){if(e=L(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return jl=e,null}function sd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(xd()){case ps:return 2;case ms:return 8;case En:case Dd:return 32;case vs:return 268435456;default:return 32}default:return 32}}var ls=!1,va=null,ba=null,wa=null,bn=new Map,wn=new Map,ka=[],Zg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ud(e,t){switch(e){case"focusin":case"focusout":va=null;break;case"dragenter":case"dragleave":ba=null;break;case"mouseover":case"mouseout":wa=null;break;case"pointerover":case"pointerout":bn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":wn.delete(t.pointerId)}}function kn(e,t,a,o,n,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:a,eventSystemFlags:o,nativeEvent:l,targetContainers:[n]},t!==null&&(t=Xa(t),t!==null&&rd(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function Vg(e,t,a,o,n){switch(t){case"focusin":return va=kn(va,e,t,a,o,n),!0;case"dragenter":return ba=kn(ba,e,t,a,o,n),!0;case"mouseover":return wa=kn(wa,e,t,a,o,n),!0;case"pointerover":var l=n.pointerId;return bn.set(l,kn(bn.get(l)||null,e,t,a,o,n)),!0;case"gotpointercapture":return l=n.pointerId,wn.set(l,kn(wn.get(l)||null,e,t,a,o,n)),!0}return!1}function hd(e){var t=La(e.target);if(t!==null){var a=C(t);if(a!==null){if(t=a.tag,t===13){if(t=Z(a),t!==null){e.blockedOn=t,Ts(e.priority,function(){id(a)});return}}else if(t===31){if(t=L(a),t!==null){e.blockedOn=t,Ts(e.priority,function(){id(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Yl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=os(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);nr=o,a.target.dispatchEvent(o),nr=null}else return t=Xa(a),t!==null&&rd(t),e.blockedOn=a,!1;t.shift()}return!0}function cd(e,t,a){Yl(e)&&a.delete(t)}function Kg(){ls=!1,va!==null&&Yl(va)&&(va=null),ba!==null&&Yl(ba)&&(ba=null),wa!==null&&Yl(wa)&&(wa=null),bn.forEach(cd),wn.forEach(cd)}function Ul(e,t){e.blockedOn===t&&(e.blockedOn=null,ls||(ls=!0,A.unstable_scheduleCallback(A.unstable_NormalPriority,Kg)))}var ql=null;function dd(e){ql!==e&&(ql=e,A.unstable_scheduleCallback(A.unstable_NormalPriority,function(){ql===e&&(ql=null);for(var t=0;t<e.length;t+=3){var a=e[t],o=e[t+1],n=e[t+2];if(typeof o!="function"){if(ns(o||a)===null)continue;break}var l=Xa(a);l!==null&&(e.splice(t,3),t-=3,oi(l,{pending:!0,data:n,method:a.method,action:o},o,n))}}))}function Qo(e){function t(s){return Ul(s,e)}va!==null&&Ul(va,e),ba!==null&&Ul(ba,e),wa!==null&&Ul(wa,e),bn.forEach(t),wn.forEach(t);for(var a=0;a<ka.length;a++){var o=ka[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<ka.length&&(a=ka[0],a.blockedOn===null);)hd(a),a.blockedOn===null&&ka.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var n=a[o],l=a[o+1],r=n[Ve]||null;if(typeof l=="function")r||dd(a);else if(r){var i=null;if(l&&l.hasAttribute("formAction")){if(n=l,r=l[Ve]||null)i=r.formAction;else if(ns(n)!==null)continue}else i=r.action;typeof i=="function"?a[o+1]=i:(a.splice(o,3),o-=3),dd(a)}}}function fd(){function e(l){l.canIntercept&&l.info==="react-transition"&&l.intercept({handler:function(){return new Promise(function(r){return n=r})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var l=navigation.currentEntry;l&&l.url!=null&&navigation.navigate(l.url,{state:l.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function rs(e){this._internalRoot=e}Rl.prototype.render=rs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(d(409));var a=t.current,o=ht();nd(a,o,e,t,null,null)},Rl.prototype.unmount=rs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;nd(e.current,2,null,e,null,null),wl(),t[Ga]=null}};function Rl(e){this._internalRoot=e}Rl.prototype.unstable_scheduleHydration=function(e){if(e){var t=As();e={blockedOn:null,target:e,priority:t};for(var a=0;a<ka.length&&t!==0&&t<ka[a].priority;a++);ka.splice(a,0,e),a===0&&hd(e)}};var gd=Y.version;if(gd!=="19.2.0")throw Error(d(527,gd,"19.2.0"));S.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(d(188)):(e=Object.keys(e).join(","),Error(d(268,e)));return e=w(t),e=e!==null?U(e):null,e=e===null?null:e.stateNode,e};var Jg={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:v,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hl.isDisabled&&Hl.supportsFiber)try{zo=Hl.inject(Jg),at=Hl}catch{}}return An.createRoot=function(e,t){if(!M(e))throw Error(d(299));var a=!1,o="",n=kh,l=Oh,r=Ah;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(l=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=ad(e,1,!1,null,null,a,o,null,n,l,r,fd),e[Ga]=t.current,Hi(e),new rs(t)},An.hydrateRoot=function(e,t,a){if(!M(e))throw Error(d(299));var o=!1,n="",l=kh,r=Oh,i=Ah,s=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(l=a.onUncaughtError),a.onCaughtError!==void 0&&(r=a.onCaughtError),a.onRecoverableError!==void 0&&(i=a.onRecoverableError),a.formState!==void 0&&(s=a.formState)),t=ad(e,1,!0,t,a??null,o,n,s,l,r,i,fd),t.context=od(null),a=t.current,o=ht(),o=Il(o),n=ra(o),n.callback=null,ia(a,n,o),a=o,t.current.lanes=a,Do(t,a),Mt(t),e[Ga]=t.current,Hi(e),new Rl(t)},An.version="19.2.0",An}var Td;function ry(){if(Td)return us.exports;Td=1;function A(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(A)}catch(Y){console.error(Y)}}return A(),us.exports=ly(),us.exports}var iy=ry();const sy=Ed(iy),Wl=[{id:"general_knowledge",name:"General Knowledge",description:"Covers a wide range of topics for all commercial drivers.",questionCount:50},{id:"air_brakes",name:"Air Brakes",description:"Required for vehicles equipped with air brakes.",questionCount:25},{id:"combination",name:"Combination",description:"For drivers of tractor-trailers and other combination vehicles.",questionCount:20},{id:"passenger",name:"Passenger",description:"For drivers who want to operate buses.",questionCount:20},{id:"school_bus",name:"School Bus",description:"For drivers who will be transporting students.",questionCount:20},{id:"double_triple_trailers",name:"Doubles/Triples",description:"For pulling double or triple trailers.",questionCount:20},{id:"tanker",name:"Tanker",description:"For operating vehicles used to transport liquids or gases.",questionCount:20},{id:"hazardous_materials",name:"Hazardous Materials",description:"For drivers who will transport hazardous materials.",questionCount:30}],uy=({onStartQuiz:A,error:Y,selectedMode:N,onModeChange:d})=>{const[M,C]=Be.useState(Wl[0].id),Z=L=>{L.preventDefault();const E=Wl.find(w=>w.id===M);E&&A(E.id,E.questionCount)};return T.jsxs("div",{className:"w-full",children:[Y&&T.jsx("p",{className:"bg-red-900 border border-red-700 text-red-300 p-3 rounded-lg mb-4 text-center",children:Y}),T.jsxs("form",{onSubmit:Z,children:[T.jsxs("div",{className:"w-4/5 mx-auto mb-8",children:[T.jsx("h3",{className:"text-lg font-medium text-center text-slate-300 mb-4",children:"Select Mode"}),T.jsxs("div",{className:"flex justify-center gap-4",children:[T.jsxs("label",{className:"flex items-center justify-center p-2 w-[35%] bg-slate-700 rounded-lg cursor-pointer hover:bg-slate-600 transition border-2 border-transparent has-[:checked]:border-cyan-500 has-[:checked]:bg-slate-600",children:[T.jsx("input",{type:"radio",name:"quiz-mode",value:"practice",checked:N==="practice",onChange:()=>d("practice"),className:"w-5 h-5 appearance-none border-2 border-slate-500 rounded-full bg-slate-800 checked:bg-cyan-500 checked:border-transparent focus:outline-none"}),T.jsx("span",{className:"ml-4 text-lg text-white",children:"Practice"})]}),T.jsxs("label",{className:"flex items-center justify-center p-2 w-[35%] bg-slate-700 rounded-lg cursor-pointer hover:bg-slate-600 transition border-2 border-transparent has-[:checked]:border-cyan-500 has-[:checked]:bg-slate-600",children:[T.jsx("input",{type:"radio",name:"quiz-mode",value:"timed",checked:N==="timed",onChange:()=>d("timed"),className:"w-5 h-5 appearance-none border-2 border-slate-500 rounded-full bg-slate-800 checked:bg-cyan-500 checked:border-transparent focus:outline-none"}),T.jsx("span",{className:"ml-4 text-lg text-white",children:"Timed"})]})]})]}),T.jsx("h2",{className:"text-2xl font-semibold text-white mb-6 text-center",children:"Choose your test..."}),T.jsx("div",{className:"space-y-4 mb-8 w-4/5 mx-auto",children:Wl.map(L=>T.jsxs("label",{className:"flex items-center px-12 py-1 bg-slate-700 rounded-lg cursor-pointer hover:bg-slate-600 transition border-2 border-transparent has-[:checked]:border-cyan-500 has-[:checked]:bg-slate-600",children:[T.jsx("input",{type:"radio",name:"quiz-topic",value:L.id,checked:M===L.id,onChange:()=>C(L.id),className:"w-5 h-5 appearance-none border-2 border-slate-500 rounded-full bg-slate-800 checked:bg-cyan-500 checked:border-transparent focus:outline-none"}),T.jsx("span",{className:"ml-4 text-lg text-white",children:L.name})]},L.id))}),T.jsx("div",{className:"w-4/5 mx-auto",children:T.jsx("button",{type:"submit",className:"w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-3 px-4 rounded-lg text-lg transition-transform transform hover:scale-105",children:"NEXT"})})]})]})},hy=({question:A,onAnswer:Y,onNext:N,questionNumber:d,totalQuestions:M,quizMode:C})=>{const[Z,L]=Be.useState(null),[E,w]=Be.useState(!1),[U,x]=Be.useState(180);Be.useEffect(()=>{L(null),w(!1),C==="timed"&&x(180)},[A,C]),Be.useEffect(()=>{if(C==="timed"&&!E&&U>0){const K=setInterval(()=>{x(pe=>pe-1)},1e3);return()=>clearInterval(K)}},[C,E,U]),Be.useEffect(()=>{if(C==="timed"&&!E&&U===0){w(!0),Y(!1);const K=setTimeout(N,2e3);return()=>clearTimeout(K)}},[C,E,U,Y,N]);const ee=K=>{if(E)return;w(!0),L(K);const pe=K===A.correctAnswerIndex;Y(pe)},V=K=>E?K===A.correctAnswerIndex?"bg-green-600 animate-pulse":K===Z&&K!==A.correctAnswerIndex?"bg-red-600":"bg-slate-700 opacity-50":"bg-slate-700 hover:bg-slate-600",ve=K=>{const pe=Math.floor(K/60).toString().padStart(2,"0"),ze=(K%60).toString().padStart(2,"0");return`${pe}:${ze}`};return T.jsxs("div",{className:"w-full flex flex-col",children:[T.jsxs("div",{className:"mb-6",children:[T.jsxs("div",{className:"flex justify-between items-center text-xl font-semibold mb-2",children:[T.jsxs("p",{className:"text-cyan-400",children:["Question ",d," of ",M]}),C==="timed"&&T.jsx("p",{className:`text-3xl font-bold ${U<=30?"text-red-500 animate-pulse":"text-cyan-400"}`,children:ve(U)})]}),T.jsx("div",{className:"w-full bg-slate-700 rounded-full h-2.5",children:T.jsx("div",{className:"bg-cyan-500 h-2.5 rounded-full",style:{width:`${d/M*100}%`}})})]}),T.jsx("h2",{className:"text-xl md:text-2xl font-semibold mb-6 text-center",children:A.questionText}),T.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:A.options.map((K,pe)=>T.jsx("button",{onClick:()=>ee(pe),disabled:E,className:`w-full p-4 rounded-lg text-left text-lg transition-all duration-300 ${V(pe)} ${E?"cursor-default":"cursor-pointer"}`,children:K},pe))}),E&&Z!==A.correctAnswerIndex&&A.explanation&&T.jsxs("div",{className:"mt-6 p-4 bg-slate-900/70 border border-slate-700 rounded-lg animate-fade-in",children:[T.jsx("h3",{className:"font-bold text-cyan-400 mb-2 text-lg",children:C==="timed"&&U===0?"Time's Up! Explanation":"Explanation"}),T.jsx("p",{className:"text-slate-300",children:A.explanation})]}),E&&T.jsx("div",{className:"mt-8 text-center animate-fade-in",children:T.jsx("button",{onClick:N,className:"bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105",children:d===M?"Calculate Score":"Next Question"})})]})},cy=({score:A,totalQuestions:Y,onRestart:N,wrongAnswers:d,currentTopicName:M})=>{const C=Y>0?Math.round(A/Y*100):0;let Z="",L="";C>=80?(Z="Excellent work! You're on the right track.",L="text-green-400"):C>=50?(Z="Good effort! A little more practice will help.",L="text-yellow-400"):(Z="Keep studying! You can do it.",L="text-red-400");const E=()=>{window.print()},w=()=>{const U=`CLP Quiz Review: Missed Questions for ${M}`,x=`Here are the questions I missed on the ${M} test:

`+d.map((V,ve)=>{const K=V.options.map((pe,ze)=>`${ze===V.correctAnswerIndex?"-> ":"   "}${pe}`).join(`
`);return`Question ${ve+1}: ${V.questionText}

Options:
${K}

Explanation: ${V.explanation||"N/A"}`}).join(`

---------------------------------

`),ee=`mailto:?subject=${encodeURIComponent(U)}&body=${encodeURIComponent(x)}`;window.location.href=ee};return T.jsxs("div",{className:"text-center w-full flex flex-col items-center",children:[T.jsxs("div",{className:"no-print w-full flex flex-col items-center justify-between min-h-[300px]",children:[T.jsxs("div",{children:[T.jsx("h2",{className:"text-3xl font-bold text-white mb-4",children:"Quiz Complete!"}),T.jsx("p",{className:"text-lg mb-8 text-slate-300",children:"You scored"})]}),T.jsxs("div",{className:"flex flex-col items-center",children:[T.jsxs("div",{className:"relative w-48 h-48 flex items-center justify-center mb-6",children:[T.jsxs("svg",{className:"w-full h-full",viewBox:"0 0 100 100",children:[T.jsx("circle",{className:"text-slate-700",strokeWidth:"10",stroke:"currentColor",fill:"transparent",r:"45",cx:"50",cy:"50"}),T.jsx("circle",{className:"text-cyan-500",strokeWidth:"10",strokeDasharray:`${2*Math.PI*45}`,strokeDashoffset:`${2*Math.PI*45*(1-C/100)}`,strokeLinecap:"round",stroke:"currentColor",fill:"transparent",r:"45",cx:"50",cy:"50",style:{transform:"rotate(-90deg)",transformOrigin:"50% 50%",transition:"stroke-dashoffset 1s ease-out"}})]}),T.jsxs("div",{className:"absolute flex flex-col items-center",children:[T.jsxs("span",{className:"text-5xl font-bold text-cyan-400",children:[C,"%"]}),T.jsxs("span",{className:"text-slate-400",children:[A," / ",Y]})]})]}),T.jsx("p",{className:`text-xl font-semibold ${L}`,children:Z})]}),T.jsx("button",{onClick:N,className:"bg-cyan-600 hover:bg-cyan-500 text-white font-bold mt-8 py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105",children:"Take Another Quiz"})]}),d.length>0&&T.jsxs("div",{className:"w-full mt-10 text-left",children:[T.jsxs("div",{className:"printable-section",children:[T.jsxs("h3",{className:"text-2xl font-bold text-white mb-4 text-center",children:["Review Your Missed Questions for ",M]}),T.jsx("div",{className:"space-y-6",children:d.map((U,x)=>T.jsxs("div",{className:"bg-slate-900/50 p-4 rounded-lg border border-slate-700",children:[T.jsxs("p",{className:"font-semibold text-lg mb-2",children:[x+1,". ",U.questionText]}),T.jsx("ul",{className:"list-disc list-inside pl-4 space-y-1",children:U.options.map((ee,V)=>T.jsx("li",{className:`${V===U.correctAnswerIndex?"text-green-400 font-bold":"text-slate-300"}`,children:ee},V))}),U.explanation&&T.jsxs("div",{className:"mt-3 pt-3 border-t border-slate-700",children:[T.jsx("p",{className:"text-cyan-400 font-bold",children:"Explanation:"}),T.jsx("p",{className:"text-slate-300",children:U.explanation})]})]},x))})]}),T.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 no-print",children:[T.jsx("button",{onClick:E,className:"w-full bg-slate-600 hover:bg-slate-500 text-white font-bold py-3 px-4 rounded-lg text-lg transition-transform transform hover:scale-105",children:"Print Missed Questions"}),T.jsx("button",{onClick:w,className:"w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-4 rounded-lg text-lg transition-transform transform hover:scale-105",children:"Email Missed Questions"})]})]})]})},dy=()=>T.jsxs("svg",{className:"animate-spin h-10 w-10 text-cyan-400 mx-auto",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[T.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),T.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),fy=`
Q\\ What is counter steering?

O\\ Turning the steering wheel counter clockwise
O\\ Steering in the opposite direction from what other drivers expect you to do
O\\ Using the steering axle brakes to prevent over steering
O\\ Turning the wheel in the opposite direction after steering to avoid a traffic emergency

A\\ Turning the wheel in the opposite direction after steering to avoid a traffic emergency

E\\ Be prepared to "counter-steer," that is, to turn the wheel back in the other direction, once you've passed whatever was in your path. You should think of emergency steering and counter-steering as two parts of one driving action.

Q\\ You are driving on a straight, level highway at 50 mph. There are no vehicles in front of you. Suddenly a tire blows out on your vehicle. What should you do first?

O\\ Stay off the brake until the vehicle slows down on its own
O\\ Quickly steer onto the shoulder
O\\ Begin light braking
O\\ Begin controlled or stab braking

A\\ Stay off the brake until the vehicle slows down on its own

E\\ It's natural to want to brake in an emergency, however, braking when a tire has failed could cause loss of control. Once the vehicle has slowed down brake very gently, pull off the road, and stop.

Q\\ What is the I.P.D.E. method of driving?

O\\ Identify, project, dedicate, execute
O\\ Idea, predicts, decide, execute
O\\ Identify, predict, decide, execute

A\\ Identify, predict, decide, execute

E\\ Identify, Predict, Decide, and Execute (IPDE) is the step-by-step process behind the principles of defensive driving and complexities of visual perception in traffic.

Q\\ Which of these statements about using mirrors is true?

O\\ You should look at a mirror for several seconds at a time
O\\ Convex mirrors make things look closer than they really are
O\\ There are blind spots that your mirror cannot show you
O\\ You should check your mirrors twice for a lane change

A\\ There are blind spots that your mirror cannot show you

E\\ Convex mirrors present a view of people and objects that does not accurately reflect their size and distance from the vehicle.

Q\\ No matter how small the cargo is, it should have at least:

O\\ One tie down
O\\ Two tie downs
O\\ Small loads do not have to have tie downs

A\\ Two tie downs

E\\ No matter how small the cargo, it should have at least two tie-downs.

Q\\ You have left the road in an emergency condition, it is impossible for you to come to a stop prior to returning to the road, which of the following is the best action to take?

O\\ Make sure the road is clear, and continue to return to the road
O\\ Stop and turn your vehicle around before entering the road
O\\ Reduce your speed to 20 mph or less before returning to the road

A\\ Reduce your speed to 20 mph or less before returning to the road

E\\ If possible, avoid using the brakes until your speed has dropped to about 20 mph, and gently return to the road.

Q\\ Tie downs must be of the proper type and strength. The combined strength of cargo tie downs must be strong enough to lift.

O\\ The weight of the cargo tied down
O\\ One and one-half times the weight of the cargo tied down
O\\ Twice the weight of the cargo tied down
O\\ Three times the weight of the cargo tied down

A\\ One and one-half times the weight of the cargo tied down

E\\ Tie-downs must be of the proper type and proper strength. Federal regulations require the aggregate working load limit of any securement system used to secure an article or group of articles against movement must be at least one and one-half times the weight of the article or group of articles.

Q\\ Your brakes can get wet when you drive through a heavy rain. What can this cause when the brakes are applied?

O\\ Wheel lockup
O\\ Trailer jackknife
O\\ Lack of braking power
O\\ All answers are correct

A\\ All answers are correct

E\\ When driving in heavy rain or deep standing water, your brakes will get wet. Water in the brakes can cause the brakes to be weak, to apply unevenly, or to grab. This can cause lack of braking power, wheel lockups, pulling to one side or the other, and jackknife if you pull a trailer.

Q\\ How far should a driver look ahead of the vehicle while driving?

O\\ 6-9 seconds
O\\ 9-12 seconds
O\\ 12-15 seconds

A\\ 12-15 seconds

E\\ Most good drivers look at least 12 to 15 seconds ahead. That means looking ahead the distance you will travel in 12 to 15 seconds.

Q\\ Which of these statements about speed management is true?

O\\ On a wet road you should reduce your speed by about 1/3
O\\ On packed snow you should reduce your speed by about 1/2
O\\ When the road is slippery it will take longer to stop, and it will be harder to turn without skidding
O\\ All answers are correct

A\\ All answers are correct

E\\ It will take longer to stop, and it will be harder to turn without skidding, when the road is slippery. Reduce speed by about one-third on a wet road. On packed snow, reduce speed by a half, or more. If the surface is icy, reduce speed to a crawl and stop driving as soon as you can safely do so.

Q\\ You are driving a new truck with a manual transmission. What gear will you probably have to use to take a long downhill grade?

O\\ The same gear you would use to climb the hill
O\\ A lower gear than you would use to climb the hill
O\\ A higher gear than you would use to climb the hill

A\\ A lower gear than you would use to climb the hill

E\\ Drivers of modern trucks may have to use lower gears going down a hill than would be required to go up the hill.

Q\\ How do you correct a rear wheel acceleration skid?

O\\ Apply more power to the wheels
O\\ Stop accelerating
O\\ Apply the brake
O\\ Downshift

A\\ Stop accelerating

E\\ Skids caused by acceleration usually happen on ice or snow. Taking your foot off the accelerator can easily stop them. If it is very slippery, push the clutch in. Otherwise, the engine can keep the wheels from rolling freely and regaining traction.

Q\\ Which of these is a good rule to follow when using a fire extinguisher?

O\\ Keep it as close to the fire as possible
O\\ Stay downwind of the fire
O\\ Aim at the base of the fire

A\\ Aim at the base of the fire

E\\ Here are some rules to follow in putting out a fire: When using the extinguisher stay as far away from the fire as possible and aim at the source or base of the fire not up in the flames.

Q\\ Too much weight on the steering axle can cause the following:

O\\ Hard steering
O\\ Damage to the steering axle
O\\ Damage to the tires
O\\ All answers are correct

A\\ All answers are correct

E\\ Poor weight balance can make vehicle handling unsafe. Too much weight on the steering axle can cause hard steering. It can damage the steering axle and tires.

Q\\ Covering the brake means?

O\\ To have your foot over the brake and ready to push it if necessary
O\\ Pushing the brake lightly and rapidly
O\\ Pushing on the brake just enough to make the brake lights to come on

A\\ To have your foot over the brake and ready to push it if necessary

E\\ Covering the brake involves taking your right foot off the accelerator and holding it over the brake pedal. Your foot should hover over the pedal and not rest on it in any way.

Q\\ Which of these statements about drugs is true?

O\\ A driver can use any prescription drug while driving
O\\ Amphetamines can be used to help the driver stay alert
O\\ Use of drugs can lead to accidents and / or arrest

A\\ Use of drugs can lead to accidents and / or arrest

E\\ Use of drugs can lead to traffic accidents resulting in death, injury, and property damage. Furthermore, it can lead to arrest, fines, and jail sentences. It can also mean the end of a person's driving career.

Q\\ To prevent shifting, there should be at least one tie down for every _____ feet of cargo.

O\\ 10
O\\ 15
O\\ 18

A\\ 10

E\\ Cargo should have at least one tie-down for each ten feet of cargo. Make sure you have enough tiedowns to meet this need.

Q\\ Where or when should you test the stopping action of your service brakes?

O\\ In a parking lot when the vehicle is not moving
O\\ When the vehicle is moving at about 5 mph
O\\ At a special brake testing center only

A\\ When the vehicle is moving at about 5 mph

E\\ Wait for normal air pressure, release the parking brake, move the vehicle forward slowly about five mph, and apply the brakes firmly using the brake pedal. Note any vehicle "pulling" to one side, unusual feel, or delayed stopping action.

Q\\ You are driving a heavy vehicle and must exit a highway using an off-ramp that curves downhill. You should:

O\\ Slow down to a safe speed before the turn
O\\ Slow to the posted speed limit for the off-ramp
O\\ Come to a full stop at the top of the ramp
O\\ Wait until you are in the curve before downshifting

A\\ Slow down to a safe speed before the turn

E\\ When exiting the expressway: Make necessary traffic checks, use proper signals, decelerate smoothly in the exit lane.

Q\\ When should you wear seat belts?

O\\ Any time you are in a moving vehicle
O\\ Only in states where it is required by law
O\\ Only when traveling on a highway

A\\ Any time you are in a moving vehicle

E\\ Use Your Seatbelt! The driver's seat should have a seat belt. Always use it for safety.

Q\\ On which fires can you use the ABC fire extinguisher?

O\\ Electrical fires
O\\ Burning fires
O\\ Burning cloth
O\\ All answers are correct

A\\ All answers are correct

E\\ Class A is for trash, wood and paper, Class B is for liquids and gases, and Class C is for energized electrical sources, so all answers are correct.

Q\\ Some traffic emergencies may require you to leave the road. Which of these is a good thing to remember?

O\\ If you must leave the road, try to get all wheels off the pavement or at least one side of vehicle's tires off the road
O\\ Brake gently to avoid skidding
O\\ Use hard braking if you are moving at a speed greater that 20-mph
O\\ Most shoulders will not support a large vehicle

A\\ If you must leave the road, try to get all wheels off the pavement or at least one side of vehicle's tires off the road

E\\ In some emergencies, you may have to drive off the road. It may be less risky than facing a collision with another vehicle. Most shoulders are strong enough to support the weight of a large vehicle and, therefore, offer an available escape route.

Q\\ Dry bulk tanks require special care because:

O\\ They have a high center of gravity
O\\ The load can shift
O\\ Both above
O\\ No answers are correct

A\\ Both above

E\\ Dry bulk tanks require special care because they have a high center of gravity, and the load can shift. Be extremely cautious (slow and careful) going around curves and making sharp turns.

Q\\ What would you use to put out a gasoline fire?

O\\ Dirt
O\\ Water
O\\ Nothing

A\\ Dirt

E\\ Gasoline fires may be extinguished by smothering with wet rags, woolen cloth, sand, earth or ashes.

Q\\ Some liquid tanks are divided into several smaller tanks by:

O\\ Bulkheads
O\\ Baffles
O\\ Containers

A\\ Bulkheads

E\\ Some liquid tanks are divided into several smaller tanks by bulkheads. When loading and unloading the smaller tanks, the driver must pay attention to weight distribution.

Q\\ When driving a commercial vehicle with a height over 13 feet you should:

O\\ Not worry about the clearance if you stay on the state or federal highways
O\\ Assume all clearances are high enough
O\\ If you aren't sure about the clearance, stop and make sure
O\\ All answers are correct

A\\ If you aren't sure about the clearance, stop and make sure

E\\ Hitting overhead objects is a danger. Make sure you always have overhead clearance.

Q\\ You must inspect your cargo:

O\\ Before starting
O\\ Every 3 hours or 150 miles
O\\ After every break
O\\ All answers are correct

A\\ All answers are correct

E\\ As part of your Vehicle inspection, make sure the truck is not overloaded and the cargo is balanced and secured properly. You need to inspect again: after you have driven for 3 hours or 150 miles, and after every break you take during driving.

Q\\ Cargo covers:

O\\ Protect people from spilled cargo
O\\ Protect cargo from weather
O\\ May be required by law
O\\ All answers are correct

A\\ All answers are correct

E\\ There are two basic reasons for covering cargo: to protect people from spilled cargo, and to protect the cargo from weather. Spill protection is a safety requirement in many states. Be familiar with the laws in the states you drive in.

Q\\ Which of these is a good rule to follow when driving at night?

O\\ Keep your speed slow enough that you can stop within the range of your headlights
O\\ Look directly at oncoming headlights only briefly
O\\ Wear sun glasses
O\\ Keep your instrument lights bright

A\\ Keep your speed slow enough that you can stop within the range of your headlights

E\\ You should always be able to stop within the distance you can see ahead. At night, you can't see as far with low beams as you can with high beams. When you must use low beams, slow down.

Q\\ Stab braking:

O\\ Should never be used
O\\ Should only be used on slick roads
O\\ Involves locking the wheels
O\\ Involves steady pressure on the brake pedal

A\\ Involves locking the wheels

E\\ With the stab braking method, you apply your brakes all the way and release brakes when wheels lock up.

Q\\ Your vehicle has hydraulic brakes. While traveling on a level road, you press the brake pedal and find that it goes to the floor. Which of these statements is true?

O\\ You should not downshift if you have an automatic transmission
O\\ Pumping the brake pedal may bring the pressure up so you can stop the vehicle
O\\ The parking brake will not work either because it is part of the same hydraulic system

A\\ Pumping the brake pedal may bring the pressure up so you can stop the vehicle

E\\ Sometimes pumping the brake pedal will generate enough hydraulic pressure to stop the vehicle.

Q\\ You are driving a heavy vehicle with a manual transmission. You must stop the vehicle on the shoulder while driving on an upgrade. Which of these is a good rule to follow when putting it back in motion?

O\\ Keep the clutch slipping while slowly accelerating
O\\ Use the parking brake to hold the vehicle until the clutch engages
O\\ Let the vehicle roll backwards a few feet before you engage the clutch
O\\ Let the vehicle roll backwards a few feet before you engage the clutch, but turn the wheel so that the back moves away from the roadway

A\\ Use the parking brake to hold the vehicle until the clutch engages

E\\ Keeping the parking brake set until you can feel the pull of the vehicle against the brakes will help you get moving on an uphill grade without rolling backwards.

Q\\ If you are being tailgated, you should:

O\\ Increase the space in front of you
O\\ Flash your brake lights
O\\ Speed up
O\\ Signal the tailgater when it is safe to pass

A\\ Increase the space in front of you

E\\ If you find yourself being tailgated, here are some things you can do to reduce the chances of a crash: avoid quick changes, increase your following distance opening up room in front of you will make it easier for the tailgater to get around you, don't speed up.

Q\\ You are checking your wheels and rims for a pre-trip inspection. Which of these statements is true?

O\\ Rust around wheel nuts may mean that they are loose
O\\ Cracked wheels or rims can be used if they have been welded
O\\ A vehicle can be safely driven with one missing lug nut on a wheel
O\\ Mismatched lock rings can be used on the same vehicle

A\\ Rust around wheel nuts may mean that they are loose

E\\ When checking the wheels and rims check for: damaged rims. rust around wheel nuts may mean the nuts are loose--check tightness, missing clamps, spacers, studs, or lugs, mismatched, bent, or cracked lock rings, and wheels or rims that have had welding repairs are not safe.

Q\\ If you are confronted by an aggressive driver, what should you do?

O\\ Avoid eye contact.
O\\ Call the police from your cell phone if you can do it safely.
O\\ Ignore rude gestures and refuse to react negatively.
O\\ Do all of the above.

A\\ Do all of the above.

E\\ First and foremost, make every attempt to get out of their way. Do not challenge them by speeding up, avoid eye contact, ignore gestures and refuse to react to them, and report aggressive drivers to the appropriate authorities.

Q\\ You don't want to be a distracted driver, so you

O\\ have all your emotionally difficult conversations in the first hour of driving.
O\\ eat, drink, and smoke only on straight portions of the road.
O\\ avoid using your cell phone until you reach your destination.
O\\ read maps or use your phone only when there are no other vehicles around you.

A\\ avoid using your cell phone until you reach your destination.

E\\ Activities inside of the vehicle that can distract your attention include: talking to passengers; adjusting the radio, CD player or climate controls; eating, drinking or smoking; reading maps or other literature; picking up something that fell; reading or sending text messages. To name a few.

Q\\ What is a common cause of tire fires?

O\\ Underinflated tires
O\\ Cold tires
O\\ Overinflated tires
O\\ All of the above

A\\ Underinflated tires

E\\ Under-inflated tires and duals that touch are the most common causes of tire fires.

Q\\ Do empty trucks have the best braking?

O\\ Yes, but only on wet surfaces.
O\\ No.
O\\ Yes, but only if the trucks are newer than 1998.
O\\ Yes.

A\\ No.

E\\ Empty trucks require greater stopping distances because an empty vehicle has less traction.

Q\\ How far ahead should you look while driving?

O\\ 7 to 12 seconds
O\\ 5 to 10 seconds
O\\ 12 to 15 seconds
O\\ 10 to 12 seconds

A\\ 12 to 15 seconds

E\\ Most good drivers look at least 12 to 15 seconds ahead. That means looking ahead the distance you will travel in 12 to 15 seconds.

Q\\ Which of the following should you NOT do if you experience a tire failure?

O\\ Brake hard and immediately.
O\\ Be aware that a tire has failed.
O\\ Stay off the brake pedal.
O\\ Hold the steering wheel firmly.

A\\ Brake hard and immediately.

E\\ To respond to tire failure: you must immediately: hold the steering wheel firmly, stay off the brake, and check the tires after you've come to a stop.

Q\\ What might happen if you swing wide to the left before you turn right?

O\\ Someone might try to pass you on your right.
O\\ You might damage your leaf springs.
O\\ Someone might try to pass you on your left.
O\\ All of the above might happen.

A\\ Someone might try to pass you on your right.

E\\ If you are driving a truck or bus that cannot make the right turn without swinging into another lane, turn wide as you complete the turn. Don't turn wide to the left as you start the turn. A following driver may think you are turning left and try to pass you on the right.

Q\\ What will help someone who is drunk sober up?

O\\ Time
O\\ Fresh air
O\\ A glass of water
O\\ Coffee

A\\ Time

E\\ The liver can only process one-third an ounce of alcohol per hour, which is considerably less than the alcohol in a standard drink. This is a fixed rate, so only time, not black coffee or a cold shower, will sober you up.

Q\\ Total stopping distance equals

O\\ perception distance + reaction distance + braking distance.
O\\ reaction distance + braking distance.
O\\ reaction distance + viewing distance + braking distance.
O\\ braking distance + stopping distance.

A\\ perception distance + reaction distance + braking distance.

E\\ Stopping distance is the sum of your Perception Distance + Reaction Distance + Braking Distance. In vehicles with air brakes you must include the brake lag distance.

Q\\ Convex curved mirrors

O\\ show a wider area than flat mirrors.
O\\ make objects appear larger than they really are.
O\\ make objects appear closer than they really are.

A\\ show a wider area than flat mirrors.

E\\ Many large vehicles have curved mirrors that show a wider area than flat mirrors. This is often helpful, but everything appears smaller in a convex mirror than it would if you were looking at it directly. Things also seem farther away than they really are.

Q\\ Containerized loads

O\\ are typically used for freight carried partway by rail or ship.
O\\ should come with their own tie-down devices.
O\\ do not need to be inspected or secured by the driver.

A\\ are typically used for freight carried partway by rail or ship.

E\\ Containerized loads generally are used when freight is carried part way by rail or ship. Delivery by truck occurs at the beginning and/or end of the journey.

Q\\ How many red reflective triangles should you carry?

O\\ 3
O\\ 1
O\\ 4

A\\ 3

E\\ Safety requirements call for three red reflective triangles.

Q\\ How does "bleeding tar" affect the road surface and driving conditions?

O\\ It does not affect the road surface or driving conditions.
O\\ It is very sticky and slows down your vehicle.
O\\ Tar rises to the road surface in very hot weather, causing the roads to become very slippery.

A\\ Tar rises to the road surface in very hot weather, causing the roads to become very slippery.

E\\ Tar in the road pavement frequently rises to the surface in very hot weather. Spots where tar "bleeds" to the surface are very slippery.

Q\\ Dry bulk tanks and hanging meat

O\\ are unstable loads.
O\\ do not require special care.
O\\ have low centers of gravity.

A\\ are unstable loads.

E\\ Hanging meat and dry bulk can be a very unstable load with a high center of gravity. Particular caution is needed on sharp curves such as off ramps and on ramps. Go slowly.

Q\\ A GPS device

O\\ should have a screen larger than 4 inches.
O\\ should be designed for truck navigation.
O\\ should be made in the USA.

A\\ should be designed for truck navigation.

E\\ Most GPS devices are made for cars or other smaller vehicles, and so not have the size or weight of large vehicles programmed in. Make sure your GPS device is designed for large commercial vehicles.

Q\\ A major cause of fatal crashes is

O\\ overinflated tires.
O\\ poorly adjusted brakes.
O\\ driving too fast for road conditions.

A\\ driving too fast for road conditions.

E\\ Driving too fast is a major cause of fatal crashes. You must adjust your speed depending on driving conditions. These include traction, curves, visibility, traffic and hills.

Q\\ While driving, ice builds up on your wipers and they no longer clean the windshield. You should:

O\\ Keep driving, and reach out the window and knock the ice off
O\\ Keep driving, and turn your defroster on
O\\ Pull over in a safe place and remove the ice

A\\ Pull over in a safe place and remove the ice

E\\ Before the ice buildup becomes dangerous you should stop in a safe location and clear off the ice. With ice on the wiper blade it might not clear the windshield enough for safe driving.

Q\\ Is it legal to drive with one-fourth of a vehicle's leaf springs broken or missing?

O\\ Yes
O\\ No
O\\ It doesn't make any difference if you drive slowly

A\\ No

E\\ Check for missing or broken leaves in any leaf spring. If one-fourth or more are missing, it will put the vehicle "out of service", but any defect could be dangerous.

Q\\ The distance that you should scan ahead in a congested area is about?

O\\ 32 feet
O\\ One block
O\\ Two Vehicle lengths ahead

A\\ One block

E\\ Most good drivers look at least 12 to 15 seconds ahead. At lower speeds, that's about one block. At highway speeds it's about a quarter of a mile.

Q\\ A vehicle is loaded with very little weight on the drive axle. What may result:

O\\ Poor traction
O\\ A need to disconnect the steering axle brakes
O\\ Damage to drive axle tires
O\\ Better handling

A\\ Poor traction

E\\ Too little weight on the driving axles can cause poor traction. The drive wheels may spin easily.

Q\\ Truck escape ramps:

O\\ Are designed to protect vehicles from damage
O\\ Should not be used unless you have first tried all other ways to save your vehicle after brake failure on a downgrade
O\\ Cannot be used by certain types of heavy vehicles

A\\ Are designed to protect vehicles from damage

E\\ Escape ramps are made to stop runaway vehicles safely without injuring drivers and passengers.

Q\\ What effects can wet brakes cause?

O\\ Brakes can grab or become weak.
O\\ Brakes can work better.
O\\ Your foot can get tired.

A\\ Brakes can grab or become weak.

E\\ Water in the brakes can cause the brakes to be weak, to apply unevenly, or to grab. This can cause lack of braking power, wheel lockups, pulling to one side or the other, and jackknife if you pull a trailer.

Q\\ When you check the condition of visible parts during your pre-trip inspection, make sure that the ___________ are secured against snagging, rubbing, or wearing.

O\\ primary and secondary safety cab locks
O\\ frame and cross members
O\\ air lines and electrical wiring

A\\ air lines and electrical wiring

E\\ Air lines and electrical wiring needs to be secured against snagging, rubbing, wearing.

Q\\ You do not have a Hazardous Materials Endorsement on your commercial driver's license. You can drive a vehicle hauling hazardous materials when

O\\ someone who has the Hazardous Materials Endorsement rides with you.
O\\ the vehicle does not require placards.
O\\ the cargo will be transported less than 100 miles.

A\\ the vehicle does not require placards.

E\\ You can drive a vehicle that carries hazardous materials if it does not require placards. If it requires placards, you cannot drive it unless your driver license has the hazardous materials endorsement

Q\\ Which of the following violations at railroad crossings can lead to loss of your CDL for at least 60 days?

O\\ Not having sufficient space to drive all the way through without stopping
O\\ Getting stuck on the tracks because of insufficient clearance
O\\ Both of the above

A\\ Both of the above

E\\ You will lose your CDL for at least 60 days for your first violation of the following six offenses: failing to stop if the tracks are not clear, failing to slow down and check that the tracks are clear of an approaching train, failing to stop before driving onto the crossing, failing to have sufficient space to drive completely through the crossing without stopping, failing to obey a traffic control device or the directions of an enforcement official at the crossing, failing to negotiate a crossing because of insufficient undercarriage clearance.

Q\\ When should you check your mirrors for a lane change?

O\\ Before and after signaling the change
O\\ After starting and after completing the lane change
O\\ Both of the above

A\\ Both of the above

E\\ You need to check your mirrors to make sure no one is alongside you or about to pass you. Check your mirrors: before you change lanes, after you have signaled, right after you start the lane change, and after you complete the lane change.

Q\\ Which of these tells you that cargo contains hazardous materials?

O\\ A hazardous materials placard is on the vehicle.
O\\ There is a four-inch, diamond-shaped hazardous materials label on the container.
O\\ Both of these answers are correct.

A\\ Both of these answers are correct.

E\\ If the cargo contains hazardous materials, you must inspect for proper papers, labeling, and placarding.

Q\\ Which of these is NOT required knowledge for drivers needing a HAZMAT endorsement?

O\\ When to use placards
O\\ Basic chemistry
O\\ Which products can be loaded together

A\\ Basic chemistry

E\\ Hazardous materials drivers must also know which products they can load together, and which they cannot, when to use placards.

Q\\ Which of these statements is true about medicines used to treat the common cold?

O\\ They should only be used when driving during the daytime.
O\\ They can be used while driving as long as you only take half the regular dose.
O\\ They often make you sleepy. Therefore, they should not be used while driving.

A\\ They often make you sleepy. Therefore, they should not be used while driving.

E\\ This includes a variety of prescription and over-the counter drugs or cold medicines, which may make the driver drowsy or otherwise affect safe driving ability.

Q\\ Which of these statements is true about other drivers?

O\\ Short-term or daily rental truck drivers are often not used to the limited vision and pose a hazard.
O\\ Mail or delivery truck drivers do not pose a hazard.
O\\ Drivers using turn signals can be trusted to turn in the direction they indicate.

A\\ Short-term or daily rental truck drivers are often not used to the limited vision and pose a hazard.

E\\ Be alert for drivers whose vision is blocked. Vans loaded station wagons, and cars with the rear window blocked are examples. Rental trucks should be watched carefully. Their drivers are often not used to the limited vision they have to the sides and rear of the truck.

Q\\ Which of these statements is NOT true about engine belts in hot weather?

O\\ Cracking is likely to occur, but it is not a safety threat.
O\\ Loose belts will not turn the water pump and/or fan on properly.
O\\ You can check the tightness of belts by pressing on them.

A\\ Cracking is likely to occur, but it is not a safety threat.

E\\ Learn how to check v-belt tightness on your vehicle by pressing on the belts. Loose belts will not turn the water pump and/or fan properly. This will result in overheating. Also, check belts for cracking or other signs of wear.

Q\\ Which of these statements is true about warning other drivers of a stopped vehicle?

O\\ Keep the vehicle's taillights on to warn other drivers.
O\\ Move the rear reflective triangle back if the driver's vision is obscured to within 500 feet.
O\\ Put out your emergency warning devices within five minutes.

A\\ Move the rear reflective triangle back if the driver's vision is obscured to within 500 feet.

E\\ If line of sight view is obstructed due to hill or curve, move the rear-most triangle to a point back down the road (up to 500 feet) so warning is provided.

Q\\ Which of these is NOT a good rule to follow when caring for the injured at an accident scene?

O\\ Move severely injured persons if there is a danger due to fire or passing traffic.
O\\ If a qualified person is helping them, stay out of the way unless asked to assist.
O\\ Allow injured persons to become chilled or overheated.

A\\ Allow injured persons to become chilled or overheated.

E\\ If a qualified person is at the accident and helping the injured, stay out of the way unless asked to assist. Otherwise, do the best you can to help any injured parties: don't move a severely injured person unless the danger of fire or passing traffic, stop heavy bleeding by applying, and keep the injured person warm.

Q\\ Which of the following statements is true?

O\\ Many heavy vehicle accidents occur between midnight and 6 a.m.
O\\ Most hazards are more easily seen at night than during the day.
O\\ Most people are more alert at night than during the day.

A\\ Many heavy vehicle accidents occur between midnight and 6 a.m.

E\\ If possible, try to schedule trips for the hours you are normally awake. Many heavy motor vehicle accidents occur between midnight and 6 a.m.

Q\\ Which of these statements is NOT true about bad weather driving conditions?

O\\ When the temperature drops, bridges will freeze before roadways.
O\\ Driving conditions become more dangerous as the temperature rises to the point where ice begins to melt.
O\\ As rain continues, the road becomes more slippery than it was when the rain began.

A\\ As rain continues, the road becomes more slippery than it was when the rain began.

E\\ Right after it starts to rain, the water mixes with oil left on the road by vehicles. This makes the road very slippery. If the rain continues, it will wash the oil away.

Q\\ What does "axle weight" mean?

O\\ The weight transmitted to the ground by one axle or one set of axles
O\\ The weight transmitted to the tires from the axle
O\\ Both of the above

A\\ The weight transmitted to the ground by one axle or one set of axles

E\\ Axle weight is the weight transmitted from one axle or a set of axles to the ground.

Q\\ With a BAC of _____, most people lose consciousness, and some die.

O\\ 0.16
O\\ 0.1
O\\ 0.4

A\\ 0.4

E\\ At a BAC of .40 most people will lose consciousness, and some will die.

Q\\ Loads that are over-length, over-width, or overweight may require

O\\ flashing lights.
O\\ driving limited to certain times.
O\\ both of the above.

A\\ both of the above.

E\\ Over-length, over-width, and/or overweight loads require special transit permits. Driving is usually limited to certain times. Special equipment may be necessary such as "wide load" signs, flashing lights, flags, etc. Such loads may require a police escort or pilot vehicles bearing warning signs and/or flashing lights. These special loads require special driving care.

Q\\ When getting in to start the engine and inspect inside the cab, you must

O\\ start the engine and listen for unusual noises.
O\\ make sure the parking brake is on and put the gearshift in neutral (or park if automatic).
O\\ Both of the above

A\\ Both of the above

E\\ To get in and start the engine, make sure: the parking brake is on, gearshift is in neutral.

Q\\ Which of these is NOT something you should do if your headlights are not working properly?

O\\ Adjust the headlights.
O\\ Leave your high beams on.
O\\ Clean the headlights.

A\\ Leave your high beams on.

E\\ Use high beams when it is safe and legal to do so. Use them when you are not within 500 feet of another vehicle.

Q\\ Name some suspension system defects.

O\\ Leaking shock absorbers
O\\ Broken leaves in a leaf spring and a cracked or broken spring hanger
O\\ Both of the above

A\\ Both of the above

E\\ Leaking shock absorbers and broken or missing leaves are two of the more common defects that may occur in a suspension system.

Q\\ What's the safest way to use turn signals when you intend to turn?

O\\ Signal well in advance of the turn.
O\\ Signal continuously up through the turn.
O\\ Do both of the above.

A\\ Do both of the above.

E\\ There are three good rules for using turn signals: signal early, signal continuously, cancel your signal after the turn is completed.

Q\\ Which of these is especially true about your tires in hot weather?

O\\ You should bleed a small amount of air to keep tire pressure steady.
O\\ You should check tire mounting and air pressure before driving.
O\\ If a tire is too hot to touch, you should hose it down with water.

A\\ You should check tire mounting and air pressure before driving.

E\\ Check the tire mounting and air pressure, inspect the tires every two hours or every 100 miles, air pressure increases with temperature, do not let air out or the pressure will be too low when the tires cool off, if a tire is too hot to touch remain stopped until the tire cools off.

Q\\ What should you do if a car coming toward you at night keeps its high beams on?

O\\ Look toward the right edge of your lane or the right edge of the road.
O\\ Flash your high beams at the other driver.
O\\ Slow down and look straight ahead in your lane.

A\\ Look toward the right edge of your lane or the right edge of the road.

E\\ Don't look directly at bright lights when driving. Look at the right side of the road. Watch the sidelines when someone coming toward you has very bright lights on.

Q\\ When you're driving in cold weather, your tires must

O\\ have at least 4/32-inch tread depth.
O\\ have at least 6/32-inch tread depth.
O\\ provide enough traction to steer and push the vehicle through snow.

A\\ provide enough traction to steer and push the vehicle through snow.

E\\ Make sure you have enough tread on your tires. The drive tires must provide traction to push the rig over wet pavement and through snow. The steering tires must have traction to steer the vehicle. Enough tread is especially important in winter conditions.

Q\\ When driving in an area with few streetlights on a clear night, if you cannot see well with your headlights, you should

O\\ find another route that is better lit.
O\\ turn your interior lights on.
O\\ use your high beams when legal and keep your interior lights off.

A\\ use your high beams when legal and keep your interior lights off.

E\\ Some drivers make the mistake of always using low beams. This seriously cuts down on their ability to see ahead. Use high beams when it is safe and legal to do so. Use them when you are not within 500 feet of another vehicle. Keep the interior light off and adjust your instrument lights as low as you can to still be able to read the gauges.

Q\\ When a doctor prescribes medication for you and you know you will be driving, you should

O\\ take the medication as well as other medications to keep you alert.
O\\ ask the doctor if the medication will affect your ability to drive.
O\\ take the medication but stop taking it if you notice it is affecting your driving.

A\\ ask the doctor if the medication will affect your ability to drive.

E\\ Possession and use of any drug given to a driver by a doctor is permitted if the doctor informs the driver that it will not affect safe driving ability.

Q\\ What does "communicating" mean in safe driving?

O\\ Using hand signals
O\\ Driving brightly colored vehicles
O\\ Letting other drivers know you're there

A\\ Letting other drivers know you're there

E\\ Other drivers can't know what you are going to do until you tell them. Signaling what you intend to do is important for safety. Also, other drivers may not notice your vehicle even when it's in plain sight. To help prevent accidents, let them know you're there.

Q\\ What is the proper way to hold the steering wheel?

O\\ With your right hand on the wheel
O\\ Firmly, with one hand at the top of the wheel and the other hand at the bottom of the wheel
O\\ Firmly, with both hands-on opposite sides of the wheel

A\\ Firmly, with both hands-on opposite sides of the wheel

E\\ Hold the steering wheel firmly with both hands. Your hands should be on opposite sides of the wheel. If you hit a curb or a pothole, the wheel could pull away from your hands unless you have a firm hold.

Q\\ When inspecting mirrors and windshields for cracks, dirt, illegal stickers, and other obstructions to your vision, you should

O\\ not worry about any of it.
O\\ look in the mirror to see if you look good.
O\\ clean and adjust as necessary.

A\\ clean and adjust as necessary.

E\\ Inspect mirrors and windshield for cracks, dirt, illegal stickers, or other obstructions to seeing clearly. Clean and adjust as necessary.

Q\\ When you are passing another vehicle, pedestrian, or bicyclist, you should assume that they

O\\ see you.
O\\ may move into your traffic lane.
O\\ will move out of your lane of traffic.

A\\ may move into your traffic lane.

E\\ Whenever you are about to pass a vehicle, pedestrian, or bicyclist, assume they don't see you, or that they could suddenly move in front of you. When it is legal, tap the horn lightly or, at night, flash your lights from low to high beam and back. Drive carefully enough to avoid a crash even if they don't see or hear you.

Q\\ What should you do before driving if you are sleepy?

O\\ Take some caffeine pills.
O\\ Drink some coffee.
O\\ Get some sleep.

A\\ Get some sleep.

E\\ The average person needs seven or eight hours of sleep every 24 hours. Leaving on a long trip when you're already tired is dangerous. If you have a long trip scheduled, make sure that you get enough sleep before you go.

Q\\ If you must stop on a road or the shoulder of any road, you must put out your emergency warning devices within

O\\ five minutes.
O\\ fifteen minutes.
O\\ ten minutes.

A\\ ten minutes.

E\\ If you must stop on a road or the shoulder of any road, you must put out your emergency warning devices within ten minutes.

Q\\ Trucks and buses are subject to certain laws, restrictions, and regulations. Which of these statements is true?

O\\ Federal regulations apply only to trucks and buses driven at least 50 miles on a trip.
O\\ Laws and restrictions can vary from place to place.
O\\ County and city laws do not apply to trucks and buses engaged in interstate commerce.

A\\ Laws and restrictions can vary from place to place.

E\\ Be familiar with the laws in the states you drive in. These laws can cover aspects such as vehicle weight, cargo, and allowed routes. The regulations can vary from one jurisdiction to another, so know which jurisdictions you'll be driving through.

Q\\ To prevent brake fade, you should

O\\ coast down hills that are not very steep inclines.
O\\ apply constant hard pressure on the brakes.
O\\ select a gear that will keep your vehicle at a safe speed on steep downgrades.

A\\ select a gear that will keep your vehicle at a safe speed on steep downgrades.

E\\ You must select an appropriate safe speed, then use a low gear, and proper braking techniques.

Q\\ Which of the following is true about a vehicle with a high center of gravity?

O\\ The cargo should be rearranged so that the heaviest parts of the cargo are under the lightest parts.
O\\ The vehicle is less likely to tip over.
O\\ The vehicle is less dangerous on curves.

A\\ The cargo should be rearranged so that the heaviest parts of the cargo are under the lightest parts.

E\\ It is very important to distribute the cargo, so it is as low as possible. Put the heaviest parts of the cargo under the lightest parts.

Q\\ One can recognize hazardous materials by looking at the container's

O\\ shape.
O\\ color.
O\\ label.

A\\ label.

E\\ Emergency personnel look for these things on the shipping paper. That is why it is vital that the proper shipping name, identification number, label, and placards are correct.

Q\\ Optional safety equipment may include emergency phone numbers, tire chains, and

O\\ warning devices.
O\\ a charged fire extinguisher.
O\\ tire changing equipment.

A\\ tire changing equipment.

E\\ Check for optional emergency items such as: chains, tire changing equipment, list of emergency phone numbers, and accident reporting kit.

Q\\ The best way to stop all skids is to

O\\ use stab or controlled braking.
O\\ counter steer and accelerate.
O\\ restore traction to the tires.

A\\ restore traction to the tires.

E\\ When any vehicle starts to skid, you must act to restore traction to the wheels.

Q\\ If your brakes get wet on a rainy day, what can result?

O\\ Reduced braking power
O\\ Excessive brake wear
O\\ Hydroplaning

A\\ Reduced braking power

E\\ Water in the brakes can cause the brakes to be weak, to apply unevenly, or to grab. This can cause lack of braking power, wheel lockups, pulling to one side or the other, and jackknife if you pull a trailer.

Q\\ Implied consent means that when you operate a CMV on public roads, you

O\\ consent to be tested for alcohol in your blood.
O\\ understand that you may now drink alcohol before driving.
O\\ consent to have your vehicle inspected for alcohol.

A\\ consent to be tested for alcohol in your blood.

E\\ If you operate a CMV, you shall be deemed to have given your consent to alcohol testing.

Q\\ It takes the body about _____ hours to get rid of the alcohol in four drinks.

O\\ 6
O\\ 2
O\\ 4

A\\ 4

E\\ —the rest builds up in your blood.

Q\\ Heavy vehicles must sometimes travel more slowly than other traffic. Which of these is NOT a good rule to follow when you are driving such a vehicle?

O\\ Turn on your flashers if it is legal to do so.
O\\ Stay to the right.
O\\ Signal other drivers when it is safe for them to pass you.

A\\ Signal other drivers when it is safe for them to pass you.

E\\ Some drivers try to help out others by signaling when it is safe to pass. You should not do this. You could cause an accident. You could be blamed, and it could cost you many thousands of dollars.

Q\\ You must park on the side of a level, straight, four lanes, divided highway. Where should you place the three reflective triangles?

O\\ One within 10 feet of the rear of the vehicle, one about 100 feet to the rear, and one about 200 feet to the rear
O\\ One within 10 feet of the rear of the vehicle, one about 100 feet to the rear, and one about 100 feet from the front of the vehicle
O\\ One about 50 feet from the rear of the vehicle, one about 100 feet to the rear, and one about 100 feet from the front of the vehicle

A\\ One within 10 feet of the rear of the vehicle, one about 100 feet to the rear, and one about 200 feet to the rear

E\\ If you must stop on or by a one-way or divided highway, place warning devices 10 feet, 100 feet, and 200 feet toward the approaching traffic.

Q\\ A stale green light means?

O\\ The light ahead just turned green
O\\ The light ahead has been green for quite a while
O\\ The light ahead has just turned red

A\\ The light ahead has been green for quite a while

E\\ A stale green light is a traffic light that is green when you first see it, thus you do not know how long it has been green - so we have to assume it will change at any moment.

Q\\ A vehicle is loaded with most of the weight on the steering axle. What may result?

O\\ Hard steering and possible breakdown
O\\ Better handling
O\\ A need to disconnect the steering axle brakes

A\\ Hard steering and possible breakdown

E\\ Too much weight on the steering axle can cause hard steering. It can damage the steering axle and tires.

Q\\ When approaching a curve, you should:

O\\ Downshift while in the curve
O\\ Downshift as you come out of the curve
O\\ Downshift before entering the curve and accelerate slightly as you go through it
O\\ Downshift at any time, it doesn't make a difference

A\\ Downshift before entering the curve and accelerate slightly as you go through it

E\\ Slow down to a safe speed, and downshift to the right gear before entering the curve. This lets you use some power through the curve to help the vehicle be more stable while turning. It also allows you to speed up as soon as you are out of the curve.

Q\\ Should the pre-trip inspection report from the last driver be reviewed during your pre-trip inspection?

O\\ Yes
O\\ No
O\\ Unsure

A\\ Yes

E\\ You must review the inspection report made by the previous driver. Only if defects reported earlier have been certified as repaired or not needed to be repaired, should you sign the previous driver's report.

Q\\ The load means the following?

O\\ The maximum safe weight a tire can carry at a specified pressure
O\\ Specified pressure an air tire can carry
O\\ Both above
O\\ No answers are correct

A\\ The maximum safe weight a tire can carry at a specified pressure

E\\ The tire load is the maximum safe weight a tire can carry at a specified pressure. This rating is stated on the side of each tire.

Q\\ On average, the total stopping distance with air brakes is?

O\\ Approximately 400 feet
O\\ Approximately 420 feet
O\\ Approximately 450 feet

A\\ Approximately 450 feet

E\\ The total stopping distance is the total minimum distance your vehicle has traveled, in ideal conditions; with everything considered, including perception distance, reaction distance and braking distance, until you can bring your vehicle to a complete stop. At 55 mph, your vehicle will travel a minimum of 450 feet.

Q\\ To correct a rear wheel or drive wheel braking skid, you should:

O\\ Apply more braking pressure to the brake pedal
O\\ Apply more pressure to the brake pedal and steer, counter steer
O\\ Release brakes and counter steer

A\\ Release brakes and counter steer

E\\ Do the following to correct a drive-wheel braking skid: stop braking letting the rear wheels roll again and keep the rear wheels from sliding; counter-steer as a vehicle turns back on course, it tends to keep on turning. Unless you turn the steering wheel quickly the other way, you may find yourself skidding in the opposite direction.

Q\\ Which of the following is NOT something you should check during a trip?

O\\ Mirrors
O\\ Cargo and cargo covers
O\\ Tires
O\\ Text messages

A\\ Text messages

E\\ Your CDL will be disqualified after two or more convictions of any state law on texting while operating a CMV. No motor carrier shall allow or require its drivers to engage in texting while driving.

Q\\ Which of these is NOT part of the basic method for shifting up?

O\\ Releasing the clutch and pressing the accelerator at the same time
O\\ Releasing the clutch
O\\ Pushing in the clutch and shifting into a higher gear at the same time
O\\ Accelerating while pressing the clutch and turning toward the driver's side

A\\ Accelerating while pressing the clutch and turning toward the driver's side

E\\ Basic method for shifting up: release accelerator, push in clutch and shift to neutral at the same time. Release clutch. Let engine and gears slow down to the rpm required for the next gear. Push in clutch and shift to the higher gear at the same time. Release clutch and press accelerator at the same time.

Q\\ You should put the starter switch key into your pocket while you perform the pre-trip inspection because

O\\ someone could start and move the truck.
O\\ someone could steal the truck.
O\\ it could damage the starting mechanism.
O\\ any of the above could occur.

A\\ someone could start and move the truck.

E\\ Shut off engine and take key with you so someone else won't move truck while you are under it.

Q\\ What is the best way to figure out how many seconds of following distance you have?

O\\ Wait until the vehicle ahead of you passes a shadow or landmark. Then count the seconds until you reach it.
O\\ Send a text message to a friend to text you back in ten seconds. See how far you have traveled in that time.
O\\ Use the stopwatch on your cell phone to determine how long it takes you to reach a mile marker after the vehicle in front of you has passed it.
O\\ Get 1/4 closer to the vehicle in front of you, then back off again. Multiply how long this took you by four to give the following distance.

A\\ Wait until the vehicle ahead of you passes a shadow or landmark. Then count the seconds until you reach it.

E\\ To know how much space you have, wait until the vehicle ahead passes a shadow on the road, a pavement marking, or some other clear landmark. Then count off the seconds like this: "one thousand-and-one, one thousand-and-two" and so on, until you reach the same spot.

Q\\ Signs of distracted drivers include

O\\ vehicles constantly traveling above the speed limit.
O\\ drivers having conversations with passengers.
O\\ vehicles exiting the roadway.
O\\ drivers listening to overly loud music.

A\\ drivers having conversations with passengers.

E\\ Watch for: vehicles that may drift over the lane divider lines or within their own lane; vehicles traveling at inconsistent speeds; drivers who are preoccupied with maps, food, cigarettes, cell phones, or other objects; drivers who appear to be involved in conversations with their passengers.

Q\\ The most important hand signal that you and a helper should agree on is

O\\ "Go."
O\\ "Stop."
O\\ "Faster."
O\\ "Turn up the music."

A\\ "Stop."

E\\ Before you begin backing, work out a set of hand signals that you both understand. Agree on a signal for "stop."

Q\\ If you have been drinking alcohol, before you drive, you should

O\\ take a cold shower.
O\\ wait for it to wear off.
O\\ drink coffee.

A\\ wait for it to wear off.

E\\ The liver can only process one-third an ounce of alcohol per hour, which is considerably less than the alcohol in a standard drink. This is a fixed rate, so only time, not black coffee or a cold shower, will sober you up.

Q\\ Blocking the cargo to keep it from shifting must be done

O\\ at the front, back, and/or sides of a piece of cargo.
O\\ only at the front of a piece of cargo.
O\\ at the cargo deck.

A\\ at the front, back, and/or sides of a piece of cargo.

E\\ Blocking is used in the front, back, and/or sides of a piece of cargo to keep it from sliding. Blocking is shaped to fit snugly against cargo. It is secured to the cargo deck to prevent cargo movement.

Q\\ Every time you park your vehicle and shut the engine off, you should

O\\ turn the steering wheel as far to the left as you can.
O\\ leave it in gear (if it has a manual transmission).
O\\ apply the parking brake.

A\\ apply the parking brake.

E\\ Never leave your vehicle unattended without applying the parking brakes or chocking the wheels. Your vehicle might roll away and cause injury and damage.

Q\\ How long does it take a typical tractor-trailer to clear a single railroad track? A double railroad track?

O\\ It takes 14 seconds to clear a single track and more than 15 seconds to clear a double track.
O\\ It takes 10 seconds to clear a single track and more than 12 seconds to clear a double track.
O\\ It takes 7 seconds to clear a single track and more than 10 seconds to clear a double track.

A\\ It takes 14 seconds to clear a single track and more than 15 seconds to clear a double track.

E\\ It takes a typical tractor trailer unit at least 14 seconds to clear a single track and more than 15 seconds to clear a double track.

Q\\ How can you test the parking brake?

O\\ Set the parking brake and pull forward gently.
O\\ Move back slowly and set the parking brake.
O\\ Set the parking brake at highway speeds.

A\\ Set the parking brake and pull forward gently.

E\\ To test the parking brake: fasten safety belt, set parking brake, place vehicle into a low gear, and gently pull forward against parking brake to make sure the parking brake holds.

Q\\ To safely adjust your speed to current driving conditions, what should you look for ahead?

O\\ Traffic and road conditions
O\\ Road signs and traffic
O\\ Police and weigh stations

A\\ Traffic and road conditions

E\\ Driving too fast is a major cause of fatal crashes. You must adjust your speed depending on driving conditions. These include traction, curves, visibility, traffic and hills.

Q\\ What are some advantages of going right instead of left around an obstacle?

O\\ You can avoid a head-on collision.
O\\ Someone may be passing to the left.
O\\ Both of these answers are correct.

A\\ Both of these answers are correct.

E\\ If an oncoming driver has drifted into your lane, a move to your right is best. If that driver realizes what has happened, the natural response will be to return to their own lane. No one is likely to be driving on the shoulder, but someone may be passing you on the left.

Q\\ The best drivers are those who watch and prepare for hazards. This is called being

O\\ offensive.
O\\ defensive.
O\\ objective.

A\\ defensive.

E\\ Always be prepared to act based on your plans. In this way, you will be a prepared, defensive driver who will improve your own safety as well as the safety of all road users.

Q\\ Is it safe to add coolant to a coolant recovery tank or coolant overflow tank while the engine is at operating temperature?

O\\ Yes, but only if the coolant recovery container is part of the pressurized system.
O\\ No, never.
O\\ Yes, as long as the engine isn't overheated.

A\\ Yes, as long as the engine isn't overheated.

E\\ Some vehicles have sight glasses, see-through coolant overflow containers, or coolant recovery containers. These permit you to check the coolant level while the engine is hot. If the container is not part of the pressurized system, the cap can be safely removed, and coolant added even when the engine is at operating temperature

Q\\ Name some important steering system parts.

O\\ Tie rod, spindle, and pitman arm
O\\ Main spring, axle, and spring shackle
O\\ Leaf spring, vehicle frame, and torque rod

A\\ Tie rod, spindle, and pitman arm

E\\ The pitman arm, spindle, tie rod, and steering gear box are all parts of the steering system.

Q\\ If you need to leave the road in a traffic emergency, you should

O\\ avoid braking until your speed has decreased to about 20 mph.
O\\ tap repeatedly on the brakes.
O\\ try to get all the wheels off the pavement.

A\\ avoid braking until your speed has decreased to about 20 mph.

E\\ If possible, avoid using the brakes until your speed has dropped to about 20 mph, and gently return to the road.

Q\\ Under federal regulations, if a vehicle is carrying a load that is more than two feet wide and extends more than four feet beyond the rear of the vehicle, _________ must be placed at the extreme end of the load.

O\\ two red flags
O\\ two red lightS
O\\ one red flag

A\\ two red flags

E\\ If the load is more than two feet wide and extends more than four feet behind the rear of the vehicle, two square red flags must be placed at the end of the load.

Q\\ When driving on grades, which of these is the best choice for a safe speed?

O\\ Based on your vehicle and its cargo, select a speed that is safe within the posted limit.
O\\ Follow the vehicle in front of you.
O\\ If you have a light load, go faster than you would with a heavy load.

A\\ Based on your vehicle and its cargo, select a speed that is safe within the posted limit.

E\\ Your most important consideration is to select a speed that is not too fast for the: total weight of the vehicle and cargo, length of the grade, steepness of the grade, road conditions, and weather.

Q\\ When approaching a traffic light that has been green for a long time, you should

O\\ start to slow down so you will be ready to stop.
O\\ continue at your current speed.
O\\ accelerate so you get through the light.

A\\ start to slow down so you will be ready to stop.

E\\ If a traffic light has been green for a long time it will probably change before you get there. Start slowing down and be ready to stop.

Q\\ What is the first thing you should try to do if your brakes fail while driving downhill?

O\\ Shut off the engine.
O\\ Get off the road as soon as possible.
O\\ Call or radio for help.

A\\ Get off the road as soon as possible.

E\\ Escape ramps have been built on many steep mountain downgrades. Escape ramps are made to stop runaway vehicles safely without injuring drivers and passengers. Escape ramps use a long bed of loose, soft material to slow a runaway vehicle, sometimes in combination with an upgrade.

Q\\ What is the definition of "sleep debt?"

O\\ The cumulative effect of not getting enough sleep
O\\ The money you owe hotels after resting there
O\\ The amount of sleep you get each day

A\\ The cumulative effect of not getting enough sleep

E\\ If you don't sleep enough, you "owe" more sleep to yourself. This debt can only be paid off by sleeping. You can't overcome it with willpower, and it won't go away by itself. The average person needs seven or eight hours of sleep every 24 hours.

Q\\ Which of these items is NOT checked on a pre-trip inspection?

O\\ Cargo securement
O\\ Amount of fuel in the vehicle
O\\ Whether all vehicle lights are working and clean

A\\ Amount of fuel in the vehicle

E\\ During your pre-trip inspection you will need to check cargo securement, and vehicle lights to make sure the vehicle is safe to go on the road. Fuel is a responsibility of the driver to transport the cargo and is not checked on the pre-trip inspection.

Q\\ You should check the following for looseness, sticking, damage, or improper settings

O\\ accelerator, brakes, and clutch pedals.
O\\ steering wheel and transmission controls.
O\\ both of the above.

A\\ both of the above.

E\\ Check all of the following for looseness, sticking, damage, or improper setting: steering wheel, clutch, and accelerator.

Q\\ Which of these statements is NOT true?

O\\ Your blood alcohol level (BAC) is determined by how fast you drink, how much you drink, and how much you weigh.
O\\ Alcohol goes directly from the stomach to the blood stream.
O\\ A drinker can control how fast his or her body absorbs and gets rid of alcohol.

A\\ A drinker can control how fast his or her body absorbs and gets rid of alcohol.

E\\ BAC is determined by the amount of alcohol you drink, how fast you drink, and your weight. Alcohol goes directly into the blood stream from the stomach. The liver can only process one-third an ounce of alcohol per hour.

Q\\ What is/are the important reason(-s) for doing a vehicle inspection?

O\\ A vehicle defect that is found during inspection and corrected can prevent problems later.
O\\ Federal and state regulations require you to inspect your vehicle.
O\\ Both of the above

A\\ Both of the above

E\\ A vehicle defect found during an inspection could save you problems later. You could have a breakdown on the road that will cost time and dollars, or even worse, a crash caused by the defect. Also, Federal and state laws require that drivers inspect their vehicles.

Q\\ You should schedule your driving

O\\ for the hours you are normally awake.
O\\ between the hours of 10 a.m. and midnight.
O\\ between the hours of 4 a.m. and 6 p.m.

A\\ for the hours you are normally awake.

E\\ If possible, try to schedule trips for the hours you are normally awake. Many heavy motor vehicle accidents occur between midnight and 6 a.m.

Q\\ Which of these is NOT a proper use of vehicle lights?

O\\ Flashing your brake lights to stop someone from tailgating
O\\ Turning on your headlights during times when visibility is reduced
O\\ Flashing your brake lights to warn someone behind you that you are slowing down

A\\ Flashing your brake lights to stop someone from tailgating

E\\ If you find yourself being tailgated, here are some things you can do to reduce the chances of a crash: avoid quick changes, increase your following distance, don't speed up, and don't turn on your taillights or flash your brake lights.

Q\\ Which of these statements about drinking alcohol is true?

O\\ Some people aren't affected by drinking
O\\ A few beers have the same effect on driving as a few shots of whisky
O\\ Coffee and fresh air can sober a person up

A\\ A few beers have the same effect on driving as a few shots of whisky

E\\ All of the following drinks contain the same amount of alcohol: A 12-ounce glass of 5% beer. A 5-ounce glass of 12% wine. A 1 1/2-ounce shot of 80 proof whiskey.

Q\\ Which of these statements about using turn signals is true?

O\\ When turning, you should cancel the signal just before you make the turn
O\\ You do not need to use your signal when changing lanes on a four-lane highway
O\\ When turning, you should signal early
O\\ You should use your turn signal to mark your vehicle when it is pulled off the side of the road

A\\ When turning, you should signal early

E\\ Signal early and leave the signal on until the maneuver is complete. Signal well before you turn. It is the best way to keep others from trying to pass you.

Q\\ If an automatic transmission is forced into a lower gear while driving, what is not affected on a downgrade?

O\\ Brakes
O\\ Steering
O\\ Clutch

A\\ Steering

E\\ Forcing an automatic transmission into a lower gear at high speed could damage the transmission and also lead to loss of all engine braking effect.

Q\\ Over length, over width, and overweight loads require:

O\\ Special transit permits
O\\ Driving limited to certain times
O\\ Flashing lights
O\\ All answers are correct

A\\ All answers are correct

E\\ Over-length, over-width, and/or overweight loads require special transit permits. Driving is usually limited to certain times. Special equipment may be necessary such as "wide load" signs, flashing lights, flags, etc.

Q\\ When roads are slippery, you should:

O\\ Drive alongside other drivers
O\\ Make turns as gently as possible
O\\ Decrease the distance that you look ahead of your vehicle

A\\ Make turns as gently as possible

E\\ It will take longer to stop, and it will be harder to turn without skidding, when the road is slippery. So, making gentle turns is key when the roads are slippery.

Q\\ Which of these is not a danger when an automatic transmission is forced into a lower gear at a high speed?

O\\ Loss of engine braking effect
O\\ Loss of steering control
O\\ Damage to the transmission

A\\ Loss of steering control

E\\ Forcing an automatic transmission into a lower gear at high speed could damage the transmission and also lead to loss of all engine braking effect.

Q\\ What are the proper collision procedures that are required for any collision in which you are involved but not seriously injured?

O\\ Care for the injured and collect required information.
O\\ Protect the area and notify the authorities.
O\\ Both of the above are required procedures

A\\ Both of the above are required procedures

E\\ When you're in an accident and not seriously hurt, you need to act to prevent further damage or injury. The basic steps to be taken at any accident are to: protect the area, notify authorities, and care for the injured.

Q\\ The Commercial Driver's Handbook suggests several things to do when you pass a vehicle. Which of these is NOT one of them?

O\\ Constantly blow your horn while passing the vehicle.
O\\ Assume the other driver does not see you.
O\\ At night, flash your lights from low to high beam and back while you pass the vehicle.

A\\ Constantly blow your horn while passing the vehicle.

E\\ Whenever you are about to pass a vehicle, pedestrian, or bicyclist, assume they don't see you. They could suddenly move in front of you. When it is legal, tap the horn lightly or, at night, flash your lights from low to high beam and back. And, drive carefully enough to avoid a crash even if they don't see or hear you.

Q\\ Which of these statements about managing space to the sides is true?

O\\ Strong winds make it easy to stay in your lane.
O\\ You should avoid traveling next to others whenever possible.
O\\ Always keep your vehicle to the right side of your lane.

A\\ You should avoid traveling next to others whenever possible.

E\\ Commercial vehicles are often wide and take up most of a lane. Safe drivers will manage what little space they have. You can do this by keeping your vehicle centered in your lane and avoid driving alongside others.

Q\\ Which of the following statements about backing is true?

O\\ You should back and turn toward the driver's side whenever possible.
O\\ Backing is always dangerous.
O\\ Both of the above are true.

A\\ Both of the above are true.

E\\ Because you cannot see everything behind your vehicle, backing is always dangerous. Avoid backing whenever you can. When you have to back, here are a few simple safety rules: start in the proper position, look at your path, use mirrors on both sides, back slowly, back and turn toward the driver's side if possible, use a helper whenever possible.

Q\\ What is black ice?

O\\ A thin layer of ice clear enough that you can see the road underneath it
O\\ Dirty snow
O\\ Rain and snow mixed

A\\ A thin layer of ice clear enough that you can see the road underneath it

E\\ Black ice is a thin layer that is clear enough that you can see the road underneath it. It makes the road look wet. Any time the temperature is below freezing, and the road looks wet, watch out for black ice.

Q\\ You should try to park your vehicle so that

O\\ there is at least one curb next to your vehicle.
O\\ you can pull forward when you leave.
O\\ your vehicle is protected by trees or some overhang.

A\\ you can pull forward when you leave.

E\\ Avoid backing whenever you can. When you park, try to park so you will be able to pull forward when you leave.

Q\\ What checks should you perform on the steering gear box?

O\\ The steering box should not have mismatched, bent, or cracked lug nuts.
O\\ Up to 1/4 of the steering parts may be broken.
O\\ The steering box should not be missing any nuts, bolts, or cotter keys.

A\\ The steering box should not be missing any nuts, bolts, or cotter keys.

E\\ Check for missing nuts, bolts, cotter keys, or other parts.

Q\\ What should you do if you get stuck on the railroad tracks?

O\\ Stay in your vehicle.
O\\ Scream for help.
O\\ Get out of your vehicle and away from the tracks.

A\\ Get out of your vehicle and away from the tracks.

E\\ If for any reason you get stuck on the tracks, get out of the vehicle and away from the tracks. Check signposts or signal housing at the crossing for emergency notification information. Call 911 and give the location of the crossing using all identifiable landmarks, especially the DOT number, if posted.

Q\\ What is the minimum tread depth for tires other than front tires?

O\\ 4/32 inch
O\\ 2/32 inch
O\\ 3/32 inch

A\\ 2/32 inch

E\\ You must have at least 4/32-inch tread depth in every major groove on front tires and at least 2/32-inch on other tires

Q\\ The distance that you should look ahead of your vehicle while driving is about _______ at highway speed.

O\\ 25 feet
O\\ 1 mile
O\\ 1/4 mile

A\\ 1/4 mile

E\\ Most good drivers look at least 12 to 15 seconds ahead. That means looking ahead the distance you will travel in 12 to 15 seconds. At lower speeds, that's about one block. At highway speeds it's about a quarter of a mile.

Q\\ The total weight of the powered unit, the trailer, and the cargo is called

O\\ gross vehicle weight.
O\\ gross combination weight.
O\\ gross axle weight.

A\\ gross combination weight.

E\\ Gross Combination Weight (GCW) is the total weight of a powered unit, plus trailer(s), plus the cargo.

Q\\ The reaction distance is the distance traveled from the time

O\\ the eyes see a hazard to the time the brain knows that it is a hazard.
O\\ the eyes see a hazard to the time the foot pushes the brake pedal.
O\\ the brain tells the foot to push the brake pedal to the time the foot actually pushes the pedal.
A\\ the brain tells the foot to push the brake pedal to the time the foot actually pushes the pedal.

E\\ 3/4 second to 1 second.

Q\\ In your mirror, you see a car approaching from the rear. The next time you check your mirror, you don't see the car. To change lanes, you should

O\\ assume the car left the roadway and change lanes as usual.
O\\ ease into the other lane slowly so the other car can get out of the way.
O\\ wait until you are sure the car isn't in your blind spot.

A\\ wait until you are sure the car isn't in your blind spot.

E\\ Before you change lanes, you must first make sure that no vehicles are hiding in your blind spots.

Q\\ Can federal inspectors inspect your truck or bus?

O\\ No.
O\\ Yes, and they might place it out of service.
O\\ Yes, but they will not place it out of service.

A\\ Yes, and they might place it out of service.

E\\ Federal and state inspectors also may inspect your vehicles. If they judge the vehicle to be unsafe, they will put it "out of service" until it is fixed.

Q\\ If you are driving a long distance, you should

O\\ stop often and take short breaks before you feel really drowsy or tired.
O\\ take a short break once or twice during the trip when you are feeling tired or drowsy.
O\\ avoid short breaks but keep the window open.

A\\ stop often and take short breaks before you feel really drowsy or tired.

E\\ Short breaks can keep you alert. But the time to take them is before you feel really drowsy or tired. Stop often. Walk around and inspect your vehicle. It may help to do some physical exercises.

Q\\ If you have a heavy load that is slowing you down on an upgrade, you should

O\\ shift into a lower gear.
O\\ drive on the shoulder so that others can pass you easily.
O\\ exit the roadway until traffic is lighter.

A\\ shift into a lower gear.

E\\ Heavy vehicles are often tailgated when they can't keep up with the speed of traffic. This often happens when you're going uphill. If a heavy load is slowing you down, stay in the right lane if you can. Going uphill, you should not pass another slow vehicle unless you can get around quickly and safely.

Q\\ Cargo that can shift should have at least __ tie-down(s).

O\\ 2
O\\ 3
O\\ 1

A\\ 2

E\\ No matter how small the cargo, it should have at least two tie-downs.

Q\\ Converter dollies built on or after March 1, 1998 are required to have anti-lock brakes. These dollies will have

O\\ a yellow malfunction lamp in the center of the dolly.
O\\ a yellow malfunction lamp on the right side of the dolly.
O\\ a yellow malfunction lamp on the left side of the dolly.

A\\ a yellow malfunction lamp on the left side of the dolly.

E\\ Converter dollies built on or after March 1, 1998, are required to have antilock brakes. These dollies will have a yellow lamp on the left side of the dolly.

Q\\ Why is it important to use a helper when backing?

O\\ Because people feel more comfortable when you do
O\\ Because you have blind spotsBecause you are providing a job for someone else
O\\ For all of the above reasons

A\\ Because you have blind spots

E\\ There are blind spots you can't see. That's why a helper is important. The helper should stand near the back of your vehicle where you can see the helper.

Q\\ How long does it take a typical tractor-trailer to clear a double railroad track?

O\\ 14 seconds
O\\ More than 30 seconds
O\\ 10 secondsMore than 15 seconds

A\\ More than 15 secondS

E\\ It takes a typical tractor-trailer unit at least 14 seconds to clear a single track and more than 15 seconds to clear a double track.

Q\\ What is the definition of a hazard?

O\\ A road user or road condition that presents a possible danger
O\\ Something you can safely ignoreSomething you can easily avoid
O\\ Something you must stop for

A\\ A road user or road condition that presents a possible danger

E\\ A hazard is any road condition or other road user (driver, bicyclist, pedestrian) that is a possible danger.

Q\\ To maintain alertness on your trips, you should

O\\ avoid medications that cause drowsiness.
O\\ schedule your trips for the daytime hours.
O\\ get 8-9 hours of sleep beforehand.
O\\ do all of the above.

A\\ do all of the above.

E\\ Preventing drowsiness before a trip: Get adequate sleep (8 to 9 hours), prepare route, , schedule trips for the hours you are normally awake, drive with a passenger, avoid medications that cause drowsiness.

Q\\ Where should you place your warning devices if you must stop on a one-way road or divided highway?

O\\ 10 feet, 100 feet, and 200 feet toward approaching traffic
O\\ 50 feet, 100 feet, and 150 feet toward approaching traffic
O\\ 100 feet, 200 feet, and 300 feet toward approaching traffic
O\\ 20 feet, 50 feet, and 100 feet toward approaching traffic

A\\ 10 feet, 100 feet, and 200 feet toward approaching traffic

E\\ If you must stop on or by a one-way or divided highway, place warning devices 10 feet, 100 feet, and 200 feet toward the approaching traffic.

Q\\ Letting the air out of hot tires

O\\ is a good idea because the extra pressure will be relieved.
O\\ will have no effect at all.
O\\ will cool them down. You will be able to continue your trip sooner.
O\\ is a bad idea because when the tires cool off, the pressure will be too low.

A\\ is a bad idea because when the tires cool off, the pressure will be too low.

E\\ Air pressure increases with temperature. Do not let air out or the pressure will be too low when the tires cool off.

Q\\ If you are traveling at 55 mph in a 30-foot vehicle, you should leave how many seconds of following distance?

O\\ 3 seconds
O\\ 4 seconds
O\\ 7 seconds
O\\ 6 seconds

A\\ 4 seconds

E\\ One good rule says you need at least one second for each 10 feet of vehicle length at speeds below 40 mph. At greater speeds, you must add 1 second for safety.

Q\\ To give adequate warning when passing someone, you should?

O\\ Use your high beams until you completely pass
O\\ Signal early
O\\ Tap the electrical horn first

A\\ Tap the electrical horn first

E\\ Whenever you are about to pass a vehicle, pedestrian, or bicyclist, assume they don't see you. They could suddenly move in front of you. When it is legal, tap the horn lightly or, at night, flash your lights from low to high beam and back.

Q\\ The purpose of a baffle is to:

O\\ Separate the load
O\\ Control the load surge
O\\ To keep expansion of load down
O\\ No answers are correct

A\\ Control the load surge

E\\ Baffled liquid tanks have bulkheads in them with holes that let the liquid flow through. The baffles help to control the forward and backward liquid surge. Side-to-side surge can still occur.

Q\\ Which of these statements about staying alert is true?

O\\ A half-hour break for coffee will do more to keep you alert that a half-hour nap
O\\ There are drugs that can overcome being tired
O\\ If you must stop to take a nap, it should be at a truck stop or other public area never on the side of the road
O\\ The only thing that can cure fatigue is sleep

A\\ The only thing that can cure fatigue is sleep

E\\ If you are drowsy, the only safe cure is to get off the road and get some sleep. If you don't, you risk your life and the lives of others.

Q\\ Which of these items is checked in a pre-trip inspection?

O\\ Whether all vehicle lights are working and are clean
O\\ Wiper blades
O\\ Cargo securement
O\\ All answers are correct

A\\ All answers are correct

E\\ During the pre-trip inspection the lights and covers need to be working and clean, wiper blades in good condition, and the cargo needs to be secured.

Q\\ Brake fade:

O\\ Can be caused by the brakes becoming too hot
O\\ Can be corrected by letting up on the brakes for 1-2 seconds and then reapply them
O\\ Only occurs with drum brakes

A\\ Can be caused by the brakes becoming too hot

E\\ Brake fade results from excessive heat causing chemical changes in the brake lining, which reduce friction, and also causing expansion of the brake drums

Q\\ Retarders:

O\\ Can cause the vehicle to skid when the road is slippery
O\\ Work better at very low rpm's
O\\ Allow you to disconnect the steering axle brakes
O\\ Cannot be used on interstate highways

A\\ Can cause the vehicle to skid when the road is slippery

E\\ When your drive wheels have poor traction, the retarder may cause them to skid. Therefore, you should turn the retarder off whenever the road is wet, icy, or snow covered.

Q\\ The first step to take if your vehicle catches fire while driving is:

O\\ Get the vehicle off the road and stop in an open area
O\\ Immediately open the door and jump out
O\\ Head for the nearest service station

A\\ Get the vehicle off the road and stop in an open area

E\\ The first step is to get the vehicle off the road and stop. In doing so: park in an open area, away from buildings, trees, brush, other vehicles, or anything that might catch fire. Don't pull into a service station!

Q\\ You are driving in the right lane of a four-lane undivided road, you come over a hill and find a car stopped ahead in your lane. You do not have room to stop, and the hill blocks your view to the rear. Which of these is most likely the best action to take?

O\\ Steer into the left lane
O\\ Steer into the oncoming lanes
O\\ Steer to the right

A\\ Steer to the right

E\\ If the shoulder is clear, going right may be best. No one is likely to be driving on the shoulder, but someone may be passing you on the left. You will know if you have been using your mirrors. If you are blocked on both sides, a move to the right may be best. At least you won't force anyone into an opposing traffic lane and a possible head-on collision.

Q\\ Which of these tell you that cargo contains hazardous materials?

O\\ The name of the hazard class on the shipping paper
O\\ A four-inch, diamond shaped, hazardous materials label on the container
O\\ Hazardous material placards on the vehicle
O\\ All answers are correct

A\\ All answers are correct

E\\ Shipping papers listing a hazard class, hazardous material labels on the cargo, or placards on the vehicle all show the driver that the load contains hazardous material.

Q\\ Medical certificates must be renewed every:

O\\ One year
O\\ Two years
O\\ Four years

A\\ Two years

E\\ A DOT physical exam is valid for up to 24 months. The medical examiner may also issue a medical examiner's certificate for less than 24 months when it is desirable to monitor a condition, such as high blood pressure.

Q\\ Which of these statements about overhead clearance is true?

O\\ You should assume the posted clearance signs are correct
O\\ A vehicle's clearance can change with the load carried
O\\ If the road surface causes your vehicle to tilt toward objects at the edge of the road, you should drive close to the shoulder
O\\ Extra speed will cause air to push your vehicle down for extra clearance

A\\ A vehicle's clearance can change with the load carried

E\\ The weight of a cargo van changes its height. An empty van is higher than a loaded one. That you got under a bridge when you were loaded does not mean that you can do it when you are empty.

Q\\ If you are stopped at a roadside rest and found to have a BAC or blood alcohol concentration of .02 you will:

O\\ Be placed out of service for 72 hours
O\\ Be placed out of service for 24 hours
O\\ Be placed out of service for 48 hours

A\\ Be placed out of service for 24 hours

E\\ You will be put out-of-service for 24 hours if you have any detectable amount of alcohol under .04%.

Q\\ You should avoid driving through deep puddles or flowing water. But if you must, which of these steps can help keep your brakes working?

O\\ Driving through quickly
O\\ Gently pressing the brake pedal while driving through the water
O\\ Applying hard pressure on both the brake pedal and accelerator after coming out of the water
O\\ Turning on your brake heaters

A\\ Gently pressing the brake pedal while driving through the water

E\\ Gently put on the brakes. This presses linings against brake drums or discs and keeps mud, silt, sand, and water from getting in.

Q\\ Which of these describes how you should use the brake pedal on a steep downhill grade?

O\\ Light, pumping action
O\\ Release the brake when you are 5mph below your safe speed, then let your speed come back up to your safe speed and repeat.
O\\ Light steady pressure

A\\ Release the brake when you are 5mph below your safe speed, then let your speed come back up to your safe speed and repeat.

E\\ Once the vehicle is in the proper low gear, the following are the proper braking techniques: Apply the brakes just hard enough to feel a definite slowdown, when your speed has been reduced to approximately five mph below your "safe" speed, release the brakes. When your speed has increased to your "safe" speed, repeat.

Q\\ Which of these statements about backing a heavy vehicle is true?

O\\ Backing is always dangerous
O\\ You should back and turn toward the driver's side whenever possible
O\\ You should use a helper and communicate with hand signals
O\\ All answers are correct are true

A\\ All answers are correct are true

E\\ Because you cannot see everything behind your vehicle, backing is always dangerous. Avoid backing whenever you can. When you have to back, here are a few simple safety rules: Start in the proper position, look at your path, use mirrors on both sides, back slowly, back and turn toward the driver's side whenever possible, and use a helper with clear hand signals whenever possible.

Q\\ An en-route inspection should include checking:

O\\ Cargo doors and cargo securement
O\\ Tire temperature
O\\ Brake temperature
O\\ All answers are correct

A\\ All answers are correct

E\\ For an en-route Inspection. Check the, tires, wheels, and truck body for signs of heat whenever you stop during a trip. Also check for cargo securement at each stop.

Q\\ To avoid a crash, you had to drive onto the right shoulder. You are now driving at 40 mph on the shoulder. How should you move back onto the pavement?

O\\ Come to a complete stop if possible, before steering back onto the pavement
O\\ Brake hard to slow the vehicle then, steer sharply onto the pavement
O\\ Keep moving at the present speed and steer very gently back onto the pavement

A\\ Come to a complete stop if possible, before steering back onto the pavement

E\\ If the shoulder is clear, stay on it until your vehicle has come to a stop. Signal and check your mirrors before pulling back onto the road.

Q\\ What is average effective braking distance time?

O\\ 214 feet
O\\ 215 feet
O\\ 216 feet

A\\ 216 feet

E\\ Braking distance is the distance your vehicle will travel, in ideal conditions; while you are braking. At 55 mph on dry pavement with good brakes, it can take about 216 feet.

Q\\ Overloading can have a bad effect on?

O\\ Steering
O\\ Braking
O\\ Speed control
O\\ All answers are correct

A\\ All answers are correct

E\\ Overloading can have bad effects on steering, braking, and speed control. Overloaded trucks have to go very slowly on upgrades, and they may gain too much speed on downgrades. Stopping distance increases. Brakes can fail when forced to work too hard.

Q\\ "Reaction distance" is the distance traveled from the time:

O\\ The eyes see a hazard to the time the brain knows that it is a hazard
O\\ The brain tells the foot to push the brake pedal to the time the foot pushes the pedal
O\\ The eyes see a hazard to the time the foot pushes the brake pedal
O\\ The brake pedal is pressed to the time the brakes begin to slow the vehicle

A\\ The brain tells the foot to push the brake pedal to the time the foot pushes the pedal

E\\ 3/4 second to 1 second. At 55 mph this accounts for 61 feet traveled.

Q\\ Controlled braking:

O\\ Can be used while you are turning sharply
O\\ Involves locking the wheels for short periods of time
O\\ Is used to keep a vehicle from skidding
O\\ All answers are correct

A\\ Is used to keep a vehicle from skidding

E\\ Controlled Braking: applying the brakes as hard as you can without locking the wheels. Keep steering wheel movements very small while doing this. If you need to make a larger steering adjustment or if the wheels lock, release the brakes, brakes should only be locked for a short period of time. Re-apply the brakes as soon as you can.

Q\\ You are starting your vehicle in motion from a stop, as you apply power to the drive wheels they start to spin. You should:

O\\ Take your foot off the accelerator
O\\ Take your foot off the accelerator and apply the brakes
O\\ Try a lower gear

A\\ Take your foot off the accelerator

E\\ Skids caused by acceleration usually happen on ice or snow. Taking your foot off the accelerator can easily stop them. If it is very slippery, push the clutch in. Otherwise, the engine can keep the wheels from rolling freely and regaining traction.

Q\\ Where should your ignition key be during your pre-trip inspection?

O\\ In your pocketOn the dashboard
O\\ In the ignition
O\\ Pocket on the door

A\\ In your pocketOn the dashboard

E\\ Make sure the parking brake is set, turn off the engine, and take the key with you when you are not in the cab during your vehicle inspection.

Q\\ When driving in fog, you should be going?

O\\ Fast enough to keep up with other drivers
O\\ Faster than other traffic
O\\ Only fast enough so that you can stop within the distance that you can see ahead

A\\ Only fast enough so that you can stop within the distance that you can see ahead

E\\ You should always be able to stop within the distance you can see ahead. Fog, rain, or other conditions may require that you slowdown to be able to stop in the distance you can see.

Q\\ Which of these is a good rule to follow when steering to avoid a crash?

O\\ Apply the brakes while turning
O\\ Steer with one hand so that you can turn the wheel more quickly
O\\ Don't turn any more than is needed to clear what is in your way

A\\ Don't turn any more than is needed to clear what is in your way

E\\ Do not turn any more than needed to clear whatever is in your way. The more sharply you turn, the greater the chances of a skid or rollover.

Q\\ Every time you park your vehicle and shut the engine off you should:

O\\ Turn the steering wheel as far to the left as you can
O\\ Apply the parking brake
O\\ Leave it in gear

A\\ Apply the parking brake

E\\ Never leave your vehicle unattended without applying the parking brakes or chocking the wheels. Your vehicle might roll away and cause injury and damage

Q\\ Which item below lists almost all or all the emergency equipment that is required on a school bus?

O\\ A hammer, nails, screwdriver, pliers, and screws
O\\ A wrecking bar and fire extinguisher only
O\\ A can of brake fluid, flashlight and a new bottle of window washer fluid
O\\ A fire extinguisher, spare electrical fuses, road flare (fusees) or triangles, emergency kit, and body fluid cleanup kit.

A\\ A fire extinguisher, spare electrical fuses, road flare (fusees) or triangles, emergency kit, and body fluid cleanup kit.

E\\ In addition to checking for spare electrical fuses (if equipped), three red reflective triangles, and a properly charged and rated fire extinguisher, a school bus must also have: emergency kit, and body fluid cleanup kit

Q\\ Which of these can help you stay alert while driving?

O\\ Scheduling trips during hours that you are normally asleep
O\\ Taking a cold pill
O\\ Taking short breaks before you are drowsy

A\\ Taking short breaks before you are drowsy

E\\ To maintain alertness while driving: protect yourself from glare and eyestrain with sunglasses, keep cool, avoid heavy foods, be aware of down time during the day, have another person ride with you, take periodic breaks, or stop driving and get some rest or take a nap.

Q\\ When checking the bus seats, what are you looking for?

O\\ To see if they have been removed
O\\ To insure they are securely fastened to the bus
O\\ To insure the seat and back portions are not loose
O\\ All answers are correct

A\\ All answers are correct

E\\ The seats must be safe for riders. All seats must be securely fastened to the bus, and not lose or missing.

Q\\ You are checking your steering and exhaust systems for a pre-trip inspection. Which of these statements is true?

O\\ Steering wheel play of more than 10 degrees can make it hard to steer
O\\ Leaks in the exhaust system are not a problem if they are outside the cab
O\\ Some leakage of power steering fluid is normal

A\\ Steering wheel play of more than 10 degrees can make it hard to steer

E\\ Steering wheel play of more than 10 degrees (approximately 2 inches movement at the rim of a 20-inch steering wheel) can make it hard to steer.

Q\\ If you have a hazardous fire, you should?

O\\ Use dirt to put it out
O\\ Call the proper authorities
O\\ Use the fire extinguisher

A\\ Call the proper authorities

E\\ When you discover a fire, call for help. You may use the fire extinguisher to keep minor truck fires from spreading to cargo before firefighters arrive.

Q\\ Blocking your cargo to keep it from sliding must be done:

O\\ Front of cargo
O\\ Back of cargo
O\\ Side of cargo
O\\ All answers are correct

A\\ All answers are correct

E\\ Blocking is used in the front, back, and/or sides of a piece of cargo to keep it from sliding. Blocking is shaped to fit snugly against cargo. It is secured to the cargo deck to prevent cargo movement.

Q\\ You should use your mirrors to check:

O\\ The condition of the tires and cargo
O\\ Where the rear wheels of your vehicle are while you make turns
O\\ Traffic gaps before you merge
O\\ All answers are correct

A\\ All answers are correct

E\\ If you're carrying open cargo, you can use the mirrors to check it. Special situations require more than regular mirror checks including; lane changes, turns, merges, and tight maneuvers. Use your mirrors to make sure the gap in traffic is large enough for you to enter safely.

Q\\ For your safety, when setting out reflective triangles you should:

O\\ Carry the triangles at your side
O\\ Hold the triangles between your body and oncoming traffic
O\\ Keep them out of sight while you walk to the spot where you set them out

A\\ Hold the triangles between your body and oncoming traffic

E\\ When putting out the triangles, hold them between yourself and the oncoming traffic for your own safety, so other drivers can see you.

Q\\ What is the average perception distance?

O\\ 117 feet
O\\ 142 feet
O\\ 158 feet

A\\ 142 feet

E\\ 3/4 seconds. At 55 mph this accounts for 142 feet traveled.

Q\\ Which of these pieces of emergency equipment should always be carried in your vehicle?

O\\ Fire extinguisher
O\\ Spare electrical fuses if the vehicle uses them
O\\ Warning devices for parked vehicles
O\\ All answers are correct

A\\ All answers are correct

E\\ Vehicles must be equipped with emergency equipment: Fire extinguisher, spare electrical fuses unless the vehicle is equipped with circuit breakers, and warning devices for parked vehicles.

Q\\ Which of these statements about accelerating is true?

O\\ When traction is poor, more power should be applied to the accelerator
O\\ Improper acceleration can cause mechanical damage
O\\ You should feel a jerking motion if you are accelerating your vehicle properly

A\\ Improper acceleration can cause mechanical damage

E\\ Speed up smoothly and gradually so the vehicle does not jerk. Rough acceleration can cause mechanical damage. When pulling a trailer, rough acceleration can damage the coupling.

Q\\ The most important reason for being alert to hazards is so:

O\\ Accident reports will be accurate
O\\ Law enforcement personnel can be called
O\\ You will have time to plan your escape if the hazard becomes an emergency

A\\ You will have time to plan your escape if the hazard becomes an emergency

E\\ You look for the hazards in order to have time to plan a way out of any emergency. When you see a hazard, think about the emergencies that could develop and figure out what you would do.

Q\\ Which of these statements about downshifting for a long downhill grade is true?

O\\ It should not be done with automatic transmissions
O\\ It allows engine compression and friction to help the brakes slow the vehicle
O\\ The proper time to downshift is just after the vehicle starts down the hill
O\\ It is necessary if the vehicle has retarders

A\\ It allows engine compression and friction to help the brakes slow the vehicle

E\\ The use of brakes on a long and/or steep downgrade is only a supplement to the braking effect of the engine.

Q\\ Whether you load and secure your load yourself, you are responsible for:

O\\ Inspecting your cargo
O\\ Recognizing overloads and poorly balanced weight
O\\ Knowing your cargo is securely tied down and covered
O\\ All answers are correct

A\\ All answers are correct

E\\ As part of your Vehicle inspection, make sure the truck is not overloaded and the cargo is balanced and secured properly.Advertisement

Q\\ You are checking your tires for a pre-trip inspection. Which of these statements is true?

O\\ Dual tires should be touching each other
O\\ Tires of mismatched sizes should not be used on the same vehicle
O\\ Radial and bias-ply tires can be used together on the same vehicle

A\\ Tires of mismatched sizes should not be used on the same vehicle

E\\ Tire Problems: too much or too little air pressure, bad wear. Less than 4/32-inch tread depth on front tires, less than 2/32 inch on other tires, cuts or other damage, tread separation, dual tires that come in contact with each other or parts of the vehicle, mismatched sizes, and radial and bias-ply tires used together.

Q\\ Cargo inspections:

O\\ Not the responsibility of the driver
O\\ Should be performed after every break you take while driving
O\\ Are only needed if hazardous materials are being hauled
O\\ Should be performed every six hours or 300 miles

A\\ Should be performed after every break you take while driving

E\\ Re-check the cargo and securing devices as often as necessary during a trip to keep the load secure. You need to inspect again: after you have driven for 3 hours or 150 miles, and after every break you take during driving.

Q\\ Which of these will help keep an engine cool in hot weather?

O\\ Avoiding high speed driving
O\\ Making sure the engine has the right amount of oil
O\\ Properly adjusted v-belts
O\\ All answers are correct

A\\ All answers are correct

E\\ Do a normal Vehicle inspection but pay special attention to the following items: tires, engine oil, engine coolant, engine belts, and hoses. High speeds create more heat for tires and the engine. In desert conditions the heat may build up to the point where it is dangerous.

Q\\ You must park on the side of a level, straight, two lane road. Where should you place the three reflective triangles?

O\\ One within 10 feet of the rear of the vehicle, one about 100 feet to the rear, and one about 200 feet to the rear
O\\ One within 10 feet of the rear of the vehicle, one about 100 feet to the rear, and one about 100 feet from the front of the vehicle
O\\ One about 50 feet from the rear of the vehicle, one about 100 feet to the rear, and one about 100 feet from the front of the vehicle
O\\ One within 10 feet of the front of the vehicle, one about 200 feet from the front, and one about 100 feet to the rear

A\\ One within 10 feet of the rear of the vehicle, one about 100 feet to the rear, and one about 100 feet from the front of the vehicle

E\\ If you stop on a two-lane road carrying traffic in both directions or on an undivided highway, place warning devices within 10 feet of the front or rear corners to mark the location of the vehicle and 100 feet behind and ahead of the vehicle, on the shoulder or in the lane you stopped in.

Q\\ Hazardous materials placards aresigns that help tax collectors determine how much to tax a hazardous cargo.

O\\ signs that warn the public to stay at least 1,000 feet from the vehicle.
O\\ signs on the inside of the vehicle that remind the driver of what he or she is carrying.
O\\ signs on the outside of the vehicle that identify the hazard class of the cargo.
O\\ signs on the outside of the vehicle that identify the hazard class of the cargo.

A\\ signs on the outside of the vehicle that identify the hazard class of the cargo.

E\\ Placards are signs put on the outside of a vehicle that identify the hazard class of the cargo. A placarded vehicle must have at least four identical placards. They are put on the front, rear, and both sides.

Q\\ The minimum tire tread depth for front tires is

O\\ 4/32 inch.
O\\ 1/32 inch.
O\\ 3/8 inch.
O\\ 1/2 inch.

A\\ 4/32 inch.

E\\ The steering tires must have traction to steer the vehicle. Enough tread is especially important in winter conditions. You must have at least 4/32-inch tread depth in every major groove on front tires and at least 2/32 inch on other tires.

Q\\ An antilock braking system (ABS) will

O\\ keep your wheels from locking when you brake hard.
O\\ let you drive faster.
O\\ increase your vehicle's stopping power.
O\\ shorten your stopping distance.

A\\ keep your wheels from locking when you brake hard.

E\\ ABS is a computerized system that keeps your wheels from locking up during hard brake applications.

Q\\ Which of the following statements about retarders are correct?

O\\ Retarders help slow a vehicle, reducing the need for braking.
O\\ You should turn the retarder off whenever the road is wet, icy, or snow-covered.
O\\ When your drive wheels have poor traction, the retarder may cause them to skid.
O\\ All of the above statements are correct.

A\\ All of the above statements are correct.

E\\ Retarders help slow a vehicle, reducing the need for using your brakes. When your drive wheels have poor traction, the retarder may cause them to skid. Therefore, you should turn the retarder off whenever the road is wet, icy, or snow covered.

Q\\ You are driving a heavy vehicle and must exit a highway using an off ramp that curves downhill. You should

O\\ wait until you are in the curve before downshifting.
O\\ slow down to the posted speed limit for the off ramp.
O\\ slow down to a safe speed before taking the curve.

A\\ slow down to a safe speed before taking the curve.

E\\ Slow down to a safe speed, and downshift to the right gear before entering the curve. This lets you use some power through the curve to help the vehicle be more stable while turning.

Q\\ According to the driver's manual, why should you limit the use of your horn?

O\\ It wears down the battery.
O\\ It can startle other drivers.
O\\ The horn is not a good way to let others know you're there.

A\\ It can startle other drivers.

E\\ Use your horn when needed. However, it can startle others and could be dangerous when used unnecessarily.

Q\\ If you do not have a CB radio, what is the first thing you should do at an accident scene?

O\\ Protect the accident scene.
O\\ Flag down help.
O\\ Clear the area.

A\\ Protect the accident scene.

E\\ The basic steps to be taken at any accident are to: protect the area, notify authorities, care for the injured.

Q\\ The oil pressure gauge should come up to normal within how long after starting the engine?

O\\ Seconds.
O\\ It does not matter.
O\\ Minutes.

A\\ Seconds.

E\\ Oil pressure. Should come up to normal within seconds after engine is started.

Q\\ The distance your vehicle travels from the time your eyes see a hazard to the time your brain recognizes it is called _______ distance.

O\\ perception
O\\ reaction
O\\ braking

A\\ perception

E\\ The distance your vehicle travels, in ideal conditions; from the time your eyes see a hazard until your brain recognizes it is perception distance.

Q\\ Stab braking should not be used on vehicles with

O\\ air brakes.
O\\ spring brakes.
O\\ anti-lock brakes.

A\\ anti-lock brakes.

E\\ In stab braking you deliberately keep locking and unlocking the wheels, and ABS is a computerized system that keeps your wheels from locking up during hard brake applications. Do not use Stab braking with ABS, use controlled braking instead.

Q\\ When should you downshift an automatic transmission?

O\\ When going down grades
O\\ When going around curves
O\\ When going up grades

A\\ When going down grades

E\\ You can select a low range to get greater engine braking when going down grades. The lower ranges prevent the transmission from shifting up beyond the selected gear.

Q\\ What is a "pull-up?"

O\\ When pulling off the shoulder, pulling up until the trailer is straight
O\\ Pulling forward while backing a trailer to reposition it
O\\ A maneuver performed by a tow truck to pick up an overturned truck

A\\ Pulling forward while backing a trailer to reposition it

E\\ When a driver stops and reverses direction to get a better position while backing, it is scored as a "pull-up". Stopping without changing direction does not count as a pull-up.

Q\\ When must you wear a seat belt?

O\\ Whenever you are hauling hazardous materials
O\\ Whenever you're driving a CMV
O\\ Only in states where the law requires it

A\\ Whenever you're driving a CMV

E\\ Federal regulations require the driver and all passengers in a moving CMV to wear seat belts unless, the vehicle isn't equipped with them.

Q\\ When you drive in the mountains, you will have to use lower gears to drive safely down grades. Which of these does NOT affect your choice of gears?

O\\ Type of tire tread
O\\ Weight of the load
O\\ Length of the grade

A\\ Type of tire tread

E\\ Your most important consideration is to select a speed that is not too fast for the: total weight of the vehicle and cargo, length of the grade, steepness of the grade, road conditions, and weather.

Q\\ Serious traffic violations that can cause your CDL license to be suspended include

O\\ excessive speeding (15 mph or more above the posted limit) and improper lane changes.
O\\ reckless driving and following a vehicle too closely.
O\\ both of the above.

A\\ both of the above.

E\\ Serious traffic violations are excessive speeding, reckless driving, improper or erratic lane changes, following a vehicle too closely, traffic offenses committed in a CMV in connection with fatal traffic accidents, etc.

Q\\ There are certain types of vehicle inspection, including

O\\ maintenance, physical, general.
O\\ post-trip, pre-trip, en-route.
O\\ both of the above.

A\\ post-trip, pre-trip, en-route.

E\\ Pre-trip occurs before you leave for your trip, En-route occurs during any break you take while driving, and post-trip occurs when your route is finished.

Q\\ Why should you signal continuously while turning?

O\\ It is usually illegal to turn off your signal before starting a turn.
O\\ You need both hands on the wheel to turn safely.
O\\ Both of the above are correct.

A\\ Both of the above are correct.

E\\ Signal continuously. You need both hands on the wheel to turn safely. Don't cancel the signal until you have completed the turn.

Q\\ You are driving on a two-lane road. An oncoming vehicle drifts into your lane and is headed straight for you. Which of the following should you do?

O\\ Steer to the right.
O\\ Brake hard.
O\\ Prepare for impact.

A\\ Steer to the right.

E\\ If an oncoming driver has drifted into your lane, a move to your right is best. If that driver realizes what has happened, the natural response will be to return to his or her own lane.

Q\\ Which of these statements is true about causes of vehicle fires?

O\\ Poor trailer ventilation can cause flammable cargo to catch fire.
O\\ Carrying a properly charged fire extinguisher will help prevent fires.
O\\ Underinflated tires will NOT cause a vehicle fire.

A\\ Poor trailer ventilation can cause flammable cargo to catch fire.

E\\ The following are some causes of vehicle fires: spilled fuel, improper use of flares, under-inflated tires , duals that touch, short circuits, loose connections, improper fueling, loose fuel connections, flammable cargo, improperly sealed or loaded cargo or with poor ventilation.

Q\\ What three things related to cargo are the driver's responsibility?

O\\ Inspecting the cargo, recognizing overloads, and properly securing the cargo
O\\ Preparing the shipping papers, inspecting the cargo, and properly securing the cargo
O\\ Weighing the cargo, properly securing the cargo, and delivering the cargo

A\\ Inspecting the cargo, recognizing overloads, and properly securing the cargo

E\\ You must make sure the truck is not overloaded and the cargo is balanced and secured before each trip.

Q\\ What is your most valuable way to see the sides and rear while driving?

O\\ Get out and inspect the areas.
O\\ Look out the window.
O\\ Check your mirrors regularly.

A\\ Check your mirrors regularly.

E\\ It's important to know what's going on behind and to the sides. Check your mirrors regularly. Check more often in special situations.

Q\\ When checking lights, you should

O\\ turn off the engine and take the key with you.
O\\ turn on the headlights and four-way flashers.
O\\ Both of these answers are correct.

A\\ Both of these answers are correct.

E\\ Make sure the parking brake is set, turn off the engine, and take the key with you. Turn on headlights (low beams) and four-way emergency flashers and get out of the vehicle.

Q\\ On a two-way, two-lane road, if you must stop on a hill, how far back should you place your reflective triangles?

O\\ Within 100 feet behind the vehicle
O\\ Within 250 feet behind the vehicle
O\\ Within 500 feet behind the vehicle

A\\ Within 500 feet behind the vehicle

E\\ If line of sight view is obstructed due to hill or curve, move the rear-most triangle to a point back down the road (up to 500 feet) so warning is provided.

Q\\ Name some things you should check on the FRONT of your vehicle during your pre-trip inspection.

O\\ Low beams, high beams, four-way flashers, and turn signals
O\\ Windshield wipers, mirrors, and hood latches
O\\ Oil, transmission, air compressor, and radiator

A\\ Low beams, high beams, four-way flashers, and turn signals

E\\ Go to front of vehicle and check that low beams are on and both of the four-way flashers are working, check that high beams, parking, clearance, side-marker, and identification lights work. Turn on right turn signal and start walk-around inspection, then check the left turn.

Q\\ Which of the following best describes how sleep debt can be paid off?

O\\ It will go away by itself over a period of time.
O\\ It can only be paid off by sleeping.
O\\ It can be overcome with willpower and non-sleep aids.

A\\ It can only be paid off by sleeping.

E\\ If you don't sleep enough, you "owe" more sleep to yourself. This debt can only be paid off by sleeping.

Q\\ How can you avoid wet brake problems?

O\\ Speed up or shift to a higher gear.
O\\ Apply the brakes harder and faster.
O\\ Slow down, shift to a low gear, and gently apply the brakes.

A\\ Slow down, shift to a low gear, and gently apply the brakes.

E\\ Avoid driving through deep puddles or flowing water if possible. If not, you should: slow down and place transmission in a low gear, and gently put on the brakes.

Q\\ When you start to drive down a steep downgrade, which of the following should influence your choice of speed?

O\\ The road conditions
O\\ The total weight of your vehicle and its cargo
O\\ The steepness of the grade
O\\ All of the above

A\\ All of the above

E\\ Your most important consideration is to select a speed that is not too fast for the: total weight of the vehicle and cargo, length of the grade, steepness of the grade, road conditions, and weather.

Q\\ Always try to back toward the driver's side because

O\\ you can see better, watching the vehicle's rear from the side window.
O\\ it's more comfortable for turning your neck.
O\\ your truck will probably pull toward the driver's side.
O\\ all of the above are true.

A\\ you can see better, watching the vehicle's rear from the side window.

E\\ Back to the driver's side so that you can see better. Backing toward the right side is very dangerous because you can't see as well. If you back and turn toward the driver's side, you can watch the rear of your vehicle by looking out the side window.

Q\\ On which of the following types of fires should you NOT use a B:C fire extinguisher?

O\\ Wood
O\\ Electrical
O\\ Grease
O\\ Gasoline

A\\ Wood

E\\ The B:C type fire extinguisher is designed to work on electrical fires and burning liquids, not on wood.

Q\\ You do not have a hazardous materials endorsement on your commercial driver's license. You are asked to haul hazardous materials in a placarded vehicle. You should:

O\\ Refuse to haul the load
O\\ Take the placards off the vehicle
O\\ Haul the load, but only to the nearest place where a driver with a hazardous materials endorsement can take over
O\\ Haul the load, but file a report with the department of transportation after the trip

A\\ Refuse to haul the load

E\\ You can drive a vehicle that carries hazardous materials if it does not require placards. If it requires placards, you cannot drive it unless your driver license has the hazardous materials endorsement.

Q\\ You are testing the stopping action of service brakes on a hydraulic system. Which of these can mean there is a problem?

O\\ The vehicle pulls to one side when the brake pedal is pressed
O\\ Stopping action is delayed
O\\ The brake pedal feels unusual
O\\ All answers are correct

A\\ All answers are correct

E\\ With hydraulic systems a delay in braking, spongy or unusual feeling pedal, or pulling to one side or the other can mean there are issues.

Q\\ The center of gravity of a load:

O\\ Should be kept as high as possible
O\\ Can make a vehicle more likely to tip over on curves
O\\ Is only a problem if the vehicle is overloaded

A\\ Can make a vehicle more likely to tip over on curves

E\\ When more cargo is piled up in a truck, the "center of gravity" moves higher up from the road. The truck becomes easier to turn over.

Q\\ As part of your pre-trip inspection; you must

O\\ Check for overloads
O\\ Check for poorly balanced weight
O\\ Check if cargo is secured
O\\ All answers are correct

A\\ All answers are correct

E\\ As part of your Vehicle inspection, make sure the truck is not overloaded and the cargo is balanced and secured properly.

Q\\ Which of these statements about double clutching and shifting is true?

O\\ Double clutching should not be used when the road is slippery
O\\ Double clutching should only be used with a heavy load
O\\ You can use the tachometer to tell you when to shift

A\\ You can use the tachometer to tell you when to shift

E\\ Use either the tachometer or the speedometer and upshift/downshift at the right rpm or road speed.

Q\\ Gross combination weight rating or GCWR means the following?

O\\ The total weight of single vehicle
O\\ The total weight of single plus load
O\\ The total weight of a powered unit plus trailer(s)
O\\ The total weight of a powered unit plus trailer(s) plus the cargo

A\\ The total weight of a powered unit plus trailer(s) plus the cargo

E\\ The Gross Combination Weight Rating (GCWR) is the value specified by the manufacturer of the power unit and the towed unit(s), including load, or any combination thereof.

Q\\ Which of these statements about managing space is true?

O\\ Many accidents are caused by drivers keeping too much space in front of their vehicles
O\\ Smaller vehicles require more space to stop than larger ones
O\\ When the road is slippery you should keep more space in front of your vehicle

A\\ When the road is slippery you should keep more space in front of your vehicle

E\\ Remember that when the road is slippery, you need much more space to stop, and should keep more space in front of your vehicle.

Q\\ The road you are driving on becomes very slippery due to glare ice, which of these is a good thing to do in such a situation?

O\\ Stop driving and park where it is safe to do so
O\\ Downshift to stop
O\\ Apply the brakes often to keep the linings dry

A\\ Stop driving and park where it is safe to do so

E\\ If the surface is icy, reduce speed to a crawl and stop driving as soon as you can safely do so.

Q\\ Which of these statements about downshifting is true?

O\\ When you downshift for a curve, you should do so before you enter the curve
O\\ When you downshift for a hill, you should do so after you start down the hill
O\\ When double clutching, you should let the RPM's decrease while the clutch is released, and the shift lever is in neutral

A\\ When you downshift for a curve, you should do so before you enter the curve

E\\ Slow down to a safe speed, and downshift to the right gear before entering the curve. This lets you use some power through the curve to help the vehicle be more stable while turning. It also allows you to speed up as soon as you are out of the curve.

Q\\ If a straight vehicle goes into a front wheel skid it will:

O\\ Slide sideways and spin out
O\\ Go straight ahead but will turn if you turn the steering wheel
O\\ Go straight ahead even if the steering wheel is turned

A\\ Go straight ahead even if the steering wheel is turned

E\\ In a front-wheel skid, the front end tends to go in a straight line regardless of how much you turn the steering wheel. On a very slippery surface, you may not be able to steer around a curve or turn.

Q\\ Which of these statements about cold weather driving is true?

O\\ There is no need to worry about engine overheating when the weather is very cold
O\\ Windshield washer antifreeze should be added to the washer reservoir
O\\ Exhaust system leaks are less dangerous in cold weather
O\\ In snowstorms, wiper blades should be adjusted so that they do not make direct contact with the windshield

A\\ Windshield washer antifreeze should be added to the washer reservoir

E\\ Use windshield washer antifreeze to prevent freezing of the washer liquid.

Q\\ Retarders are used by?

O\\ Robotics
O\\ Exhaust, electrical, hydraulics, and engine
O\\ Brake system

A\\ Exhaust, electrical, hydraulics, and engine

E\\ There are four basic types of retarders: exhaust, engine, hydraulic, and electric.

Q\\ You must drive on a slippery road. Which of these is a good thing to do in such a situation?

O\\ Use a smaller following distance
O\\ Apply the brakes during turns
O\\ Slow down gradually
O\\ All the above

A\\ Slow down gradually

E\\ I It will take longer to stop, and it will be harder to turn without skidding, when the road is slippery. Wet roads can double stopping distance at any speed, reduce speed, and slow down gradually on a wet road.

Q\\ Which of these is a sign of tire failure?

O\\ Steering that feels heavy
O\\ A loud bang
O\\ Vibration
O\\ All answers are correct

A\\ All answers are correct

E\\ When driving a loud bang, vibrations, or heavy steering can indicate that a tire has failed.

Q\\ Which of these statements about marking a stopped vehicle is true?

O\\ If a hill or curve keeps drivers behind you from seeing the vehicle within 500 feet, the rear reflective triangle should be moved back down the road to give adequate warning
O\\ You do not need to put out reflective triangles unless the vehicle will be stopped for 30 minutes or more
O\\ The vehicles taillights should be kept on warning other drivers

A\\ If a hill or curve keeps drivers behind you from seeing the vehicle within 500 feet, the rear reflective triangle should be moved back down the road to give adequate warning

E\\ If line of sight view is obstructed due to hill or curve, move the rear-most triangle to a point back down the road so warning is provided up to 500 feet.

Q\\ Which of these is a good driving rule for work zones?

O\\ Drive slowly
O\\ Turn on you flashers / hazard lights
O\\ Use your brake lights to warn drivers behind you
O\\ All answers are correct

A\\ All answers are correct

E\\ Driving in work zones require extra care, and because of the workers risking their lives to keep the road in good condition you should drive slowly, use your hazards, and use your brake lights as communication devices.

Q\\ To transport cargo safely, which of the following are you NOT responsible for?

O\\ Recognizing possible overloads
O\\ Ensuring the freshness of sealed cargo
O\\ Making sure that cargo is properly secured
O\\ Inspecting the cargo

A\\ Ensuring the freshness of sealed cargo

E\\ You cannot inspect sealed loads, but you should check that you don't exceed gross weight and axle weight limits, and that the cargo is properly secured.

Q\\ Which of the following CMVs are most likely to get stuck at a raised railroad crossing?

O\\ Moving van
O\\ Lowboy
O\\ Car carrier
O\\ All of the above

A\\ All of the above

E\\ These trailers can get stuck on raised crossings: Low slung units (lowboy, car carrier, moving van, possum-belly livestock trailer). Single-axle tractor pulling a long trailer with its landing gear set to accommodate a tandem-axle tractor.

Q\\ All of the following behaviors are signs of aggressive driving EXCEPT

O\\ frequent changes of speed.
O\\ purposely blocking another vehicle from changing lanes.
O\\ purposely straddling two lanes of traffic.

A\\ frequent changes of speed.

E\\ Aggressive driving is the act of operating a motor vehicle in a selfish, bold, or pushy manner, without regard for the rights or safety of others. The frequent changes of speed is a distracted driver trait.

Q\\ Which of these statements about escape ramps is true?

O\\ They are used to stop vehicles that lose their brakes on downhill grades
O\\ They are designed to prevent injury to drivers and passengers
O\\ They protect equipment and cargo from severe damage
O\\ All answers are correct and true

A\\ All answers are correct and true

E\\ Escape ramps are made to stop runaway vehicles safely without injuring drivers and passengers. Escape ramps save lives, equipment and cargo.

Q\\ How often must you stop to check your cargo while on the road?

O\\ Every three hours or 150 miles
O\\ Within the first 50 miles
O\\ After each break you take
O\\ All of the above

A\\ All of the above

E\\ Inspect the cargo and its securing devices again within the first 50 miles after beginning a trip, and you will need to inspect again after you have driven for 3 hours or 150 miles and after every break you take during driving.

Q\\ Bridge formulas permit

O\\ the same maximum axle weight for any axle spacing.
O\\ less maximum axle weight for axles that are close together.
O\\ less maximum axle weight for axles that are far apart.

A\\ less maximum axle weight for axles that are close together.

E\\ A bridge formula permits less maximum axle weight for axles that are closer together. This is to prevent overloading bridges and roadways

Q\\ As your blood alcohol concentration (BAC) rises, what happens?

O\\ You can sober up in less time.
O\\ Judgment and self-control are affected.
O\\ You see more clearly how alcohol is affecting you.

A\\ Judgment and self-control are affected.

E\\ Alcohol affects more and more of the brain as BAC builds up. The first part of the brain affected controls judgment and self-control.

Q\\ Which of these statements about cargo loading is true?

O\\ The legal maximum weight allowed by a state can be considered safe for all driving conditions
O\\ Slight overloading of a vehicle can make its brakes work better
O\\ State laws dictate legal weight limits
O\\ If the shipper loads cargo, the driver is not responsible for overloading

A\\ State laws dictate legal weight limits

E\\ You must keep weights within legal limits. States have maximums for GVWRs, GCWRs, and axle weights.

Q\\ What is the most important thing to remember about emergency braking?

O\\ It wears brake linings
O\\ Disconnecting steering axle brakes will help keep your vehicle in a straight-line during emergency braking
O\\ If the wheels are skidding, you cannot control the vehicle

A\\ If the wheels are skidding, you cannot control the vehicle

E\\ Emergency braking does not mean pushing down on the brake pedal as hard as you can. That will only keep the wheels locked up and cause a skid. If the wheels are skidding, you cannot control the vehicle.

Q\\ What are the regulations on the height of splash guards?

O\\ They must be no more than 15 inches above the ground when the vehicle is completely unloaded.
O\\ It depends on the state.
O\\ They must be no more than 8 inches above the ground when the vehicle is fully loaded.

A\\ It depends on the state.

E\\ Currently, there are no federal regulations governing the height of splash guards. Each state is free to issue its own regulations, and those regulations vary from one state to another.

Q\\ The tendency for long commercial vehicles to swing wide on turns is called

O\\ off-tracking.
O\\ hydroplaning.
O\\ fishtailing.

A\\ off-tracking.

E\\ When a vehicle goes around a corner, the rear wheels follow a different path than the front wheels. This is called off-tracking. Longer vehicles will off-track more, the rear wheels of the powered unit will off-track some, and the rear wheels of the trailer will off-track even more.

Q\\ What is hydroplaning?

O\\ Driving in the snow
O\\ When you hit a pothole
O\\ When the tires skim over the road surface

A\\ When the tires skim over the road surface

E\\ In some weather, water or slush collects on the road. When this happens, your vehicle can hydroplane. It's like water skiing--the tires lose their contact with the road and have little or no traction. You may not be able to steer or brake.

Q\\ When driving a commercial vehicle with a height over 13 feet, you should

O\\ stop and make sure if you aren't certain that a clearance is high enough.
O\\ assume all clearances are high enough.
O\\ not worry about the height clearance as long as you stay on state or federal highways.

A\\ stop and make sure if you aren't certain that a clearance is high enough.

E\\ Hitting overhead objects is dangerous. Make sure you always have overhead clearance.

Q\\ Your blood alcohol concentration (BAC) depends on your

O\\ height.
O\\ body weight.
O\\ age.

A\\ body weight.

E\\ BAC is determined by the amount of alcohol you drink, how fast you drink, and your weight.

Q\\ The purpose of retarders is to

O\\ help prevent skids and reduce brake wear.
O\\ apply extra braking power to the non-drive axles.
O\\ help slow the vehicle while driving and reduce brake wear.

A\\ help slow the vehicle while driving and reduce brake wear.

E\\ Retarders help slow a vehicle, reducing the need for using your brakes. They reduce brake wear and give you another way to slow down.

Q\\ Which of the following provide extra gears on some trucks?

O\\ Multi-speed rear axles
O\\ Auxiliary transmissions
O\\ Both of the above

A\\ Both of the above

E\\ Multi-speed rear axles and auxiliary transmissions are used on many vehicles to provide extra gears. You usually control them by a selector knob or switch on the gearshift lever of the main transmission.

Q\\ Which one of these is not part of the engine compartment pre-trip inspection?

O\\ Engine oil level
O\\ Valve clearance
O\\ Condition of belts and hoses

A\\ Valve clearance

E\\ Oil Level: Indicate where dipstick is located and see that oil level is within safe operating range. Engine Compartment Belts Check belts for snugness up to 3/4-inch play at center of belt with no cracks or frays. Hoses: Inspect hoses for condition and leaks. Valve clearance is the incorrect answer.

Q\\ How do you test hydraulic brakes for leaks?

O\\ Move the vehicle slowly and see if it stops when the brake is applied
O\\ Measure the free play in the pedal with a ruler
O\\ With the vehicle stopped, pump the pedal three times; apply firm pressure for 5 seconds, then hold and see if the pedal moves

A\\ With the vehicle stopped, pump the pedal three times; apply firm pressure for 5 seconds, then hold and see if the pedal moves

E\\ If the vehicle has hydraulic brakes, pump the brake pedal three times. Then apply firm pressure to the pedal and hold for five seconds. The pedal should not move. If it does, there may be a leak or other problem.

Q\\ You are checking your brakes and suspension system for a pre-trip inspection. Which of these statements is true?

O\\ Brake shoes should not be worn dangerously thin
O\\ Brake pads should not have brake fluid on them
O\\ One missing leaf in a leaf spring can be dangerous
O\\ All answers are correct and true

A\\ All answers are correct and true

E\\ Linings, or the friction material on brake pads, must not be loose or soaked with oil or grease and must not be dangerously thin. Mechanical parts must be in place, not broken or missing. Leaf springs should not have missing, shifted, cracked, or broken leaf.

Q\\ Which of the following is most likely to cause a vehicle fire?

O\\ Short circuits and loose connections
O\\ Spilled fuel cleaned up quickly and properly
O\\ Driver smoking in a rest area
O\\ Flammable cargo with proper ventilation

A\\ Short circuits and loose connections

E\\ The following are some causes of vehicle fires: Spilled fuel not properly cleaned up; improper use of flares; under-inflated tires and duals that touch; short circuits due to damaged insulation or loose connections; driver smoking in or around the vehicle; improper fueling and loose fuel connections; flammable cargo, improperly sealed or loaded cargo, with poor ventilation.

Q\\ If the vehicle in front of you is smaller than yours, it can probably

O\\ outrun you.
O\\ stop faster than you.
O\\ make turns faster than you.

A\\ stop faster than you.

E\\ Remember, if the vehicle ahead of you is smaller than yours, it can probably stop faster than you can. You may crash if you are following too closely.

Q\\ How far ahead should you be looking while driving in town?

O\\ As far ahead as you can see
O\\ 1 block
O\\ 2 blocks

A\\ 1 block

E\\ Most good drivers look at least 12 to 15 seconds ahead. That means looking ahead the distance you will travel in 12 to 15 seconds. At lower speeds, that's about one block.

Q\\ Name two causes of fires.

O\\ Underinflated tires and duals that touch
O\\ Tight turns and gravel roads
O\\ Driver smoking and following too close

A\\ Underinflated tires and duals that touch

E\\ The following are some causes of vehicle fires: spilled fuel, improper use of flares, under-inflated tires, duals that touch, short circuits, loose connections, improper fueling, loose fuel connections, flammable cargo that is improperly sealed or loaded cargo or has poor ventilation.

Q\\ When should you review the post-trip inspection report from the previous driver?

O\\ You should review it during your pre-trip inspection.
O\\ It doesn't have to be reviewed.
O\\ You should review it once a week.

A\\ You should review it during your pre-trip inspection.

E\\ Before performing the pre-trip inspection on your vehicle, you must review the inspection report made by the previous driver. Only if defects reported earlier have been certified as repaired or not needed to be repaired, should you sign the previous driver's report.

Q\\ While driving, you see a small square cardboard box ahead in your lane. You should:

O\\ Stop and direct traffic around it.
O\\ Steer around it when it is safe to do so.
O\\ Brake hard to avoid hitting it.

A\\ Steer around it when it is safe to do so.

E\\ Steering around the object when it is safe to do is the safest action.

Q\\ In which of the following two situations should you downshift?

O\\ Starting up a hill and finishing a curve
O\\ Starting down a hill and finishing a curve
O\\ Starting down a hill and entering a curve
O\\ Starting up a hill and entering a curve

A\\ Starting down a hill and entering a curve

E\\ Special conditions where you should downshift are: before starting down a hill slow down and shift down to a speed that you can control without using the brakes hard, and before entering a curve slow down to a safe speed and downshift to the right gear before entering the curve.

Q\\ Axle weight means the following?

O\\ The weight transmitted to the tires from the axle
O\\ The weight transmitted to the ground by one axle or one set of axles
O\\ Both above
O\\ No answers are correct

A\\ The weight transmitted to the ground by one axle or one set of axles

E\\ Axle Weight is the weight transmitted to the ground by one axle or one set of axles

Q\\ Which of these can cause the vehicle to skid?

O\\ Turning too sharply
O\\ Not enough weight on the front axle
O\\ Over acceleration
O\\ All answers are correct

A\\ All answers are correct

E\\ Turning too sharply, not enough weight on the front axle, and over acceleration are all example of how to cause vehicle skids.

Q\\ When looking ahead of your vehicle while driving you should

O\\ Straight ahead
O\\ To the right side of the road
O\\ To the left side of the road
O\\ Back and forth, near and far

A\\ Back and forth, near and far

E\\ Good drivers shift their attention back and forth, near and far.

Q\\ Which of these statements about engine overheating is true?

O\\ If your engine overheats within 20 miles of the end of your trip, you should complete the trip and then check the problem
O\\ You should never shut off an overheated engine until it cools
O\\ You should never remove the radiator cap on a pressurized system
O\\ Antifreeze is not needed when the weather is warm

A\\ You should never remove the radiator cap on a pressurized system

E\\ Never remove the radiator cap or any part of the pressurized system until the system has cooled. Steam and boiling water can spray under pressure and cause severe burns.

Q\\ Which of these statements about drinking alcohol is true?

O\\ Alcohol first affects judgment and self-control, which are essential for safe driving
O\\ Statistics show that drivers who have been drinking have a much greater chance of being in a crash
O\\ A driver can lose his/her license for driving while under the influence of alcohol
O\\ All answers are correct

A\\ All answers are correct

E\\ Alcohol impairs muscle coordination, reaction time, depth perception, and night vision. It also affects the parts of the brain that control judgment and inhibition. These effects mean increased chances of a crash and chances of losing your driver's license. Accident statistics show that the chance of a crash is much greater for drivers who have been drinking than for drivers who have not.

Q\\ What are the regulations on the height of splash guards?

O\\ They must be no more than 15 inches above the ground when the vehicle is completely unloaded.
O\\ It depends on the state.
O\\ They must be no more than 8 inches above the ground when the vehicle is fully loaded.

A\\ It depends on the state.

E\\ Currently, there are no federal regulations governing the height of splash guards. Each state is free to issue its own regulations, and those regulations vary from one state to another.

Q\\ As your blood alcohol concentration (BAC) rises, what happens?

O\\ You can sober up in less time.
O\\ Judgment and self-control are affected.
O\\ You see more clearly how alcohol is affecting you.

A\\ Judgment and self-control are affected.

E\\ Alcohol affects more and more of the brain as BAC builds up. The first part of the brain affected controls judgment and self-control.

Q\\ In rain, you should reduce your speed by?

O\\ 1/3
O\\ 1/2
O\\ 2/3

A\\ 1/3

E\\ Wet roads can double stopping distance. You must drive slower to be able to stop in the same distance as on a dry road. Reduce speed by about one-third on a wet road.

Q\\ How does the height of the vehicle's center of gravity affect safe handling?
O\\ Trucks with a high center of gravity can stop faster.
O\\ Trucks with a high center of gravity can roll over at the posted speed limit for a curve.
O\\ Trucks with a high center of gravity can get stuck on railroad tracks.
A\\ Trucks with a high center of gravity can roll over at the posted speed limit for a curve.
E\\ High center of gravity means that much of the load's weight is carried high up off the road. This makes the vehicle top-heavy and easy to roll over.

Q\\ You are checking your brakes and suspension system for a pre-trip inspection. What are you looking for?
O\\ Brake shoes must not be worn dangerously thin, missing, or broken.
O\\ Brake pads should not have oil, grease, or brake fluid on them.
O\\ Both of the above are correct.
A\\ Both of the above are correct.
E\\ Brake linings must not be loose or soaked with oil or grease, and must not be dangerously thin, broken, or missing.

Q\\ Which of the following materials can be used in a Class ABC fire extinguisher to put out fires?
O\\ Carbon dioxide
O\\ Water
O\\ Dry chemical
A\\ Dry chemical
E\\ An ABC fire extinguisher is a multi-purpose extinguisher and usually uses dry chemicals.

Q\\ The braking effect of the engine is greatest when the engine is _____ the governed rpm and the transmission is in the ______ gears.
O\\ near; lower
O\\ below; higher
O\\ above; lower

A\\ near; lower

E\\ The braking effect of the engine is greatest when it is near the governed rpms and the transmission is in the lower gears.

Q\\ Escape ramps are

O\\ used to get out of a burning truck.
O\\ used to stop runaway vehicles.
O\\ for combination vehicles only.

A\\ used to stop runaway vehicles.

E\\ Escape ramps are made to stop runaway vehicles safely without injuring drivers and passengers.

Q\\ Which of these statements about speed management is true?

O\\ Empty trucks always stop in a shorter distance than fully loaded ones
O\\ As the speed of a vehicle doubles, its stopping distance also doubles
O\\ You should choose a speed that lets you stop within the distance that you can see ahead
O\\ You should always brake during curves

A\\ You should choose a speed that lets you stop within the distance that you can see ahead

E\\ You should always be able to stop within the distance you can see ahead.

Q\\ Which of these statements about drinking alcohol is true?

O\\ Alcohol first affects judgment and self-control, which are essential for safe driving
O\\ Statistics show that drivers who have been drinking have a much greater chance of being in a crash
O\\ A driver can lose his/her license for driving while under the influence of alcohol
O\\ All answers are correct

A\\ All are correct

E\\ Alcohol impairs muscle coordination, reaction time, depth perception, and night vision. It also affects the parts of the brain that control judgment and inhibition. These effects mean increased chances of a crash and chances of losing your driver's license. Accident statistics show that the chance of a crash is much greater for drivers who have been drinking than for drivers who have not.

Q\\ Which of these statements about engine overheating is true?

O\\ If your engine overheats within 20 miles of the end of your trip, you should complete the trip and then check the problem
O\\ You should never shut off an overheated engine until it cools
O\\ You should never remove the radiator cap on a pressurized system
O\\ Antifreeze is not needed when the weather is warm

A\\ You should never remove the radiator cap on a pressurized system

E\\ Never remove the radiator cap or any part of the pressurized system until the system has cooled. Steam and boiling water can spray under pressure and cause severe burns.

Q\\ Which of these statements about drinking alcohol is true?

O\\ Alcohol first affects judgment and self-control, which are essential for safe driving
O\\ Statistics show that drivers who have been drinking have a much greater chance of being in a crash
O\\ A driver can lose his/her license for driving while under the influence of alcohol
O\\ All answers are correct

A\\ All answers are correct

E\\ Alcohol impairs muscle coordination, reaction time, depth perception, and night vision. It also affects the parts of the brain that control judgment and inhibition. These effects mean increased chances of a crash and chances of losing your driver's license. Accident statistics show that the chance of a crash is much greater for drivers who have been drinking than for drivers who have not.

Q\\ What are the regulations on the height of splash guards?

O\\ They must be no more than 15 inches above the ground when the vehicle is completely unloaded.
O\\ It depends on the state.
O\\ They must be no more than 8 inches above the ground when the vehicle is fully loaded.

A\\ It depends on the state.

E\\ Currently, there are no federal regulations governing the height of splash guards. Each state is free to issue its own regulations, and those regulations vary from one state to another.

Q\\ As your blood alcohol concentration (BAC) rises, what happens?

O\\ You can sober up in less time.
O\\ Judgment and self-control are affected.
O\\ You see more clearly how alcohol is affecting you.

A\\ Judgment and self-control are affected.

E\\ Alcohol affects more and more of the brain as BAC builds up. The first part of the brain affected controls judgment and self-control.

Q\\ Which of these statements about speed management is true?

O\\ Empty trucks always stop in a shorter distance than fully loaded ones
O\\ As the speed of a vehicle doubles, its stopping distance also doubles
O\\ You should choose a speed that lets you stop within the distance that you can see ahead
O\\ You should always brake during curves

A\\ You should choose a speed that lets you stop within the distance that you can see ahead

E\\ You should always be able to stop within the distance you can see ahead.

Q\\ How do you test hydraulic brakes for leaks?

O\\ Move the vehicle slowly and see if it stops when the brake is applied
O\\ Measure the free play in the pedal with a ruler
O\\ With the vehicle stopped, pump the pedal three times; apply firm pressure for 5 seconds, then hold and see if the pedal moves

A\\ With the vehicle stopped, pump the pedal three times; apply firm pressure for 5 seconds, then hold and see if the pedal moves

E\\ If the vehicle has hydraulic brakes, pump the brake pedal three times. Then apply firm pressure to the pedal and hold for five seconds. The pedal should not move. If it does, there may be a leak or other problem.

Q\\ Which one of these is not part of the engine compartment pre-trip inspection?

O\\ Engine oil level
O\\ Valve clearance
O\\ Condition of belts and hoses

A\\ Valve clearance

E\\ Oil Level: Indicate where dipstick is located and see that oil level is within safe operating range. Engine Compartment Belts Check belts for snugness up to 3/4-inch play at center of belt with no cracks or frays. Hoses: Inspect hoses for condition and leaks. Valve clearance is the incorrect answer.

Q\\ Which of the following provide extra gears on some trucks?

O\\ Multi-speed rear axles
O\\ Auxiliary transmissions
O\\ Both of the above

A\\ Both of the above

E\\ Multi-speed rear axles and auxiliary transmissions are used on many vehicles to provide extra gears. You usually control them by a selector knob or switch on the gearshift lever of the main transmission.

Q\\ Which of these statements about cargo loading is true?

O\\ The legal maximum weight allowed by a state can be considered safe for all driving conditions
O\\ Slight overloading of a vehicle can make its brakes work better
O\\ State laws dictate legal weight limits
O\\ If the shipper loads cargo, the driver is not responsible for overloading

A\\ State laws dictate legal weight limits

E\\ You must keep weights within legal limits. States have maximums for GVWRs, GCWRs, and axle weights.

Q\\ Bridge formulas permit

O\\ the same maximum axle weight for any axle spacing.
O\\ less maximum axle weight for axles that are close together.
O\\ less maximum axle weight for axles that are far apart.

A\\ less maximum axle weight for axles that are close together.

E\\ A bridge formula permits less maximum axle weight for axles that are closer together. This is to prevent overloading bridges and roadways

Q\\ How often must you stop to check your cargo while on the road?

O\\ Every three hours or 150 miles
O\\ Within the first 50 miles
O\\ After each break you take
O\\ All of the above

A\\ All of the above

E\\ Inspect the cargo and its securing devices again within the first 50 miles after beginning a trip, and you will need to inspect again after you have driven for 3 hours or 150 miles and after every break you take during driving.

Q\\ Which of these is a good driving rule for work zones?

O\\ Drive slowly
O\\ Turn on you flashers / hazard lights
O\\ Use your brake lights to warn drivers behind you
O\\ All answers are correct

A\\ All answers are correct

E\\ Driving in work zones require extra care, and because of the workers risking their lives to keep the road in good condition you should drive slowly, use your hazards, and use your brake lights as communication devices.

Q\\ Which of these statements about cold weather driving is true?

O\\ There is no need to worry about engine overheating when the weather is very cold
O\\ Windshield washer antifreeze should be added to the washer reservoir
O\\ Exhaust system leaks are less dangerous in cold weather
O\\ In snowstorms, wiper blades should be adjusted so that they do not make direct contact with the windshield

A\\ Windshield washer antifreeze should be added to the washer reservoir

E\\ Use windshield washer antifreeze to prevent freezing of the washer liquid.

Q\\ When checking the bus seats, what are you looking for?

O\\ To see if they have been removed
O\\ To insure they are securely fastened to the bus
O\\ To insure the seat and back portions are not loose
O\\ All answers are correct

A\\ All answers are correct

E\\ The seats must be safe for riders. All seats must be securely fastened to the bus, and not lose or missing.

Q\\ The most important reason for being alert to hazards is so:

O\\ Accident reports will be accurate
O\\ Law enforcement personnel can be called
O\\ You will have time to plan your escape if the hazard becomes an emergency

A\\ You will have time to plan your escape if the hazard becomes an emergency

E\\ You look for the hazards in order to have time to plan a way out of any emergency. When you see a hazard, think about the emergencies that could develop and figure out what you would do.

Q\\ Which of these statements about accelerating is true?

O\\ When traction is poor, more power should be applied to the accelerator
O\\ Improper acceleration can cause mechanical damage
O\\ You should feel a jerking motion if you are accelerating your vehicle properly

A\\ Improper acceleration can cause mechanical damage

E\\ Speed up smoothly and gradually so the vehicle does not jerk. Rough acceleration can cause mechanical damage. When pulling a trailer, rough acceleration can damage the coupling.
`,gy=`
Q\\ Oil and water usually collect in compressed air tanks. If you do not have an automatic tank drain, when should you drain the air tanks?
O\\ After every work day.
O\\ After every four hours of service.
O\\ Once a week.
A\\ After every work day.
E\\ If your vehicle does not have automatic air tank drains, drain your air tanks at the end of each working day to remove moisture and oil. Otherwise, the brakes could fail.

Q\\ What is the S-cam used for?
O\\ To apply the brakes.
O\\ To release the brakes.
O\\ To test the slack adjusters.
A\\ To apply the brakes.
E\\ When you push the brake pedal, air is let into each brake chamber. Air pressure pushes the rod out, moving the slack adjuster, thus twisting the brake camshaft. This turns the s-cam forcing the brake shoes away from one another and presses them against the inside of the brake drum.

Q\\ Which of the following makes the total stopping distance for air brakes longer than that for hydraulic brakes?
O\\ Brake lag distance.
O\\ Perception distance.
O\\ Reaction distance.
A\\ Brake lag distance.
E\\ With air brakes there is an added delay or Brake Lag. This is the time required for the brakes to work after the brake pedal is pushed. With hydraulic brake, the brakes work instantly. With air brakes it takes a little time, one half second or more, for the air to flow through the lines to the brakes.

Q\\ The brake system that applies and releases the brakes when the driver uses the brake pedal is the:
O\\ Service brake system.
O\\ Emergency brake system.
O\\ Parking brake system.
A\\ Service brake system.
E\\ The service brake system applies and releases the brakes when you use the brake pedal during normal driving.

Q\\ To make an emergency stop with air brakes, using the stab braking method, you should:
O\\ Brake as hard as you can, get off the brakes when the wheels lock, get back on the brakes when the wheels start rolling again.
O\\ Pump the brake pedal rapidly and lightly.
O\\ Brake hard until the wheels lock, and then get off the brakes for as much time as the wheels were locked.
A\\ Brake as hard as you can, get off the brakes when the wheels lock, get back on the brakes when the wheels start rolling again.
E\\ Stab braking means that you: apply your brakes all the way, and release brakes when wheels lock up. As soon as the wheels start rolling, apply the brakes fully again.

Q\\ Brake lag distance at 55 mph is _____ feet?
O\\ 32
O\\ 50
O\\ 23
A\\ 32
E\\ The air brake lag distance at 55 mph on dry pavement adds about 32 feet.

Q\\ If your vehicle has an alcohol evaporator, it is there to:
O\\ Reduce the risk of ice in air brake valves in cold weather.
O\\ Rid the wet tank of alcohol that condenses and sits at the bottom.
O\\ Eliminate the need for daily tank draining.
A\\ Reduce the risk of ice in air brake valves in cold weather. 
E\\ Some air brake systems have an alcohol evaporator to put alcohol into the air system. This helps to reduce the risk of ice in air brake valves and other parts during cold weather. Daily air tank drainage is still needed to get rid of water and oil.

Q\\ What can legally hold a parking or emergency brake in position for a truck, truck tractor or bus?
O\\ Spring pressure
O\\ Fluid pressure
O\\ Air pressure
A\\ Spring pressure
E\\ All trucks, truck tractors, and buses must be equipped with emergency brakes and parking brakes. They must be held on by mechanical force because air pressure can eventually leak away. Spring brakes are usually used to meet these needs.

Q\\ The braking power of the spring brakes:
O\\ Depends on the adjustment of the service brakes.
O\\ Increases when the service brakes are hot.
O\\ Is not affected by the condition of the service brakes.
A\\ Depends on the adjustment of the service brakes.
E\\ The braking power of spring brakes depends on the brakes being in adjustment. If the brakes are not adjusted properly, neither the regular brakes nor the emergency/parking brakes will work right.

Q\\ Which of the following should you do before leaving your vehicle unattended?
O\\ Set the parking brakes.
O\\ Remove the keys.
O\\ Chock the wheels.
O\\ Do all of the above.
A\\ Do all of the above.
E\\ Never leave your vehicle unattended without applying the parking brakes or chocking the wheels. Your vehicle might roll away and cause injury and damage

Q\\ Under which conditions are front wheel brakes good?
O\\ All weather conditions
O\\ Wet or icy conditions only
O\\ Good weather only
O\\ None
A\\ All weather conditions
E\\ Front wheel brakes have been shown to be ideal under all weather and driving conditions. Front wheel braking is unlikely to cause a skid even on icy roads.

Q\\ If the air tanks are not drained,
O\\ your brakes may fail because of water freezing.
O\\ your transmission fluid may drain out.
O\\ you will drive too quickly.
O\\ your left side brake will cease to operate.
A\\ your brakes may fail because of water freezing.
E\\ Compressed air usually has some water and some compressor oil in it, which is bad for the air brake system. For example, the water can freeze in cold weather and cause brake failure.

Q\\ An antilock braking system (ABS)
O\\ activates when your wheels are about to lock up.
O\\ increases your normal braking capability.
O\\ decreases your normal braking capability.
O\\ shortens your stopping distance.
A\\ activates when your wheels are about to lock up.
E\\ ABS is a computerized system that keeps your wheels from locking up during hard brake applications.

Q\\ Which of the following can cause brakes to fade or fail?
O\\ Excessive use of the service brakes
O\\ Not relying enough on engine braking
O\\ Brakes being out of adjustment
O\\ All of the above
A\\ All of the above
E\\ Brakes can fade or fail from excessive heat caused by using them too much and not relying on the engine braking effect. Brake fade is also affected by adjustment.

Q\\ What is the best way to test if your vehicle's spring brakes come on automatically?
O\\ Continue to step on and off the brake pedal until the manufacturer's low psi specification is met for spring brakes to deploy.
O\\ On single vehicles, continue to step on and off the brake pedal until the parking brake valve pops out.
O\\ On tractor-trailer vehicles, continue to step on and off the brake pedal until the parking brake valve pops out.
O\\ All of the above are correct.
A\\ All of the above are correct.
E\\ On both tractor-trailers and single vehicles, to test whether the spring brakes will come on automatically, use the same method you use for testing the low air pressure warning signal: Step on and off the brake pedal, this time until you reach an even lower psi reading and the parking brake valve closes or pops out.

Q\\ If your vehicle has a properly functioning dual air brake system and minimum-sized air tanks, the air pressure should build from 85 to 100 psi within ____ seconds.
O\\ 45
O\\ 60
O\\ 20
A\\ 45
E\\ When the engine is at operating rpms, the pressure should build from 85 to 100 psi within 45 seconds in dual air systems. If the vehicle has larger than minimum air tanks, the buildup time can be longer and still be safe.

Q\\ The air compressor will stop pumping air into the air tanks at ____ psi.
O\\ 125
O\\ 150
O\\ 100
A\\ 125
E\\ The governor controls when the air compressor will pump air into the air storage tanks. When air tank pressure rises to the "cut-out" level around 125 psi, the governor stops the compressor from pumping air. When the tank pressure falls to the "cut-in" pressure around 100 psi, the governor allows the compressor to start pumping again.

Q\\ Excessive heat caused by overuse of the service brakes can cause
O\\ the brakes to fade.
O\\ the modulating control valve to wear out.
O\\ the brake linings to split.
A\\ the brakes to fade.
E\\ Brakes can fade or fail from excessive heat caused by using them too much and not relying on the engine braking effect.

Q\\ Excessive use of the service brakes may result in overheating, which can lead to
O\\ expansion of the brake drums.
O\\ improper adjustment of the S-cams.
O\\ increased contact between the brake drums and the brake linings.
A\\ expansion of the brake drums.
E\\ Brake fade results from excessive heat causing chemical changes in the brake lining, which reduce friction, and also causing expansion of the brake drums.

Q\\ A typical air brake system is fully charged at
O\\ 125 psi.
O\\ 150 psi.
O\\ 75 psi.
A\\ 125 psi.
E\\ Pumping by the air compressor should start at about 100 psi and stop at about 125 psi.

Q\\ During normal driving, spring brakes are usually held back by
O\\ air pressure.
O\\ bolts and braces.
O\\ springs.
A\\ air pressure.
E\\ Parking or emergency brakes must be held on by mechanical force because air pressure can eventually leak away. Spring brakes are usually used to meet these needs. When driving, powerful springs are held back by air pressure.

Q\\ During your final air brake check, if the air pressure does not build up fast enough,
O\\ the air pressure may drop too low during driving.
O\\ have the problem fixed after your trip is over.
O\\ the alcohol evaporator may be low.
A\\ the air pressure may drop too low during driving.
E\\ If air pressure does not build up fast enough, your pressure may drop too low during driving, requiring an emergency stop. Don't drive until you get the problem fixed.

Q\\ To test the static air leakage rate, you should
O\\ turn off the engine, release the parking brake, and let the system settle.
O\\ charge the air system and leave the engine running.
O\\ leave the engine running and release the parking brake.
A\\ turn off the engine, release the parking brake, and let the system settle.
E\\ With a fully-charged air system (typically 125 psi), turn off the engine, release the parking brake (push in); and time the air pressure drop.

Q\\ Air brakes use _________ to make the brakes work.
O\\ compressed air
O\\ hydraulic fluid
O\\ natural gas
A\\ compressed air
E\\ Air brakes use compressed air to make the brakes work. Air brakes are a good and safe way of stopping large and heavy vehicles, but the brakes must be well maintained and used properly.

Q\\ When you press the brake pedal,
O\\ compressed air enters the brake chambers.
O\\ compressed air is released from the air tanks.
O\\ compressed air is released from the brake chambers.
A\\ compressed air enters the brake chambers.
E\\ When you push the brake pedal, air is let into each brake chamber.

Q\\ The air compressor governor controls:
O\\ The speed of the air compressor.
O\\ Air pressure applied to the brakes.
O\\ When air is pumped into the air tanks.
A\\ When air is pumped into the air tanks.
E\\ The governor controls when the air compressor will pump air into the air storage tanks. When air tank pressure rises to the "cut-out" level around 125 psi, the governor stops the compressor from pumping air. When the tank pressure falls to the "cut-in" pressure around 100 psi, the governor allows the compressor to start pumping again.

Q\\ Of the choices below, the first thing to do when a low air pressure warning comes on is:
O\\ Stop and safely park as soon as possible.
O\\ Up shift.
O\\ Adjust the brake pedal for more travel.
A\\ Stop and safely park as soon as possible.
E\\ When the low air pressure warning light and buzzer first come on, bring the vehicle to a safe stop right away, while you can still control the brakes.

Q\\ Air brake equipped vehicles must have:
O\\ An air use gauge.
O\\ A supply pressure gauge.
O\\ At least two brake heaters.
A\\ A supply pressure gauge.
E\\ All vehicles with air brakes have a pressure gauge connected to the air tank. If the vehicle has a dual air brake system, there will be a gauge for each half of the system.

Q\\ Modern air brake systems combines three different systems. They are the service brakes, the parking brakes and the:
O\\ Emergency brakes.
O\\ Foot brakes.
O\\ S-cam brakes.
A\\ Emergency brakes.
E\\ Air brakes are really three different braking systems: service brake, parking brake, and emergency brake.

Q\\ If you must make an emergency stop, you should brake so that you:
O\\ Can steer hard while braking hard.
O\\ Use the full power of the brakes and lock them.
O\\ Stay in a straight line and can steer.
A\\ Stay in a straight line and can steer.
E\\ You should brake in a way that will keep your vehicle in a straight line and allow you to turn if it becomes necessary. You can use the "controlled braking" method or the "stab braking" method.

Q\\ The driver must be able to see a warning that is given before air pressure in the service air tanks falls below:
O\\ 20 psi
O\\ 40 psi
O\\ 60 psi
A\\ 60 psi
E\\ Low air warning devices (buzzer, light, flag) should activate before air pressure drops below 60 psi or level specified by the manufacturer.

Q\\ The most common type of foundation brakes found on heavy vehicles is the:
O\\ Disc brakes
O\\ Wedge drum
O\\ S-cam brake
A\\ S-cam brake
E\\ Wedge brakes and disc brakes are less common than s-cam brakes.

Q\\ When driving down a long steep hill you should:
O\\ Release the brake when you are 5 mph below your "safe" speed.
O\\ Use stab braking.
O\\ Begin braking when you are 10 mph above your safe speed.
A\\ Release the brake when you are 5 mph below your "safe" speed.
E\\ Snub braking method is used for steep downhill grades, in this method apply the brakes just hard enough to feel a definite slowdown. When your speed has been reduced to approximately five mph below your "safe" speed, release the brakes. When your speed has increased to your "safe" speed, repeat.

Q\\ The modulating control valve is?
O\\ A spring-loaded valve that will let you put on the brakes on slowly if the service brakes fail.
O\\ There is no such thing.
O\\ Should not be used because it is very unsafe.
A\\ A spring-loaded valve that will let you put on the brakes on slowly if the service brakes fail.
E\\ In some vehicles, a control handle on the dash board may be used to apply the spring brakes gradually. This is called a modulating valve. It is spring loaded, so you have a feel for the braking action. The more you move the control lever, the harder the spring brakes come on. They work this way, so you can control the spring brakes if the service brakes fail.

Q\\ Which of the following will be true about your brake function if your antilock braking system (ABS) fails?
O\\ You will still have normal brake function and will just need to get the ABS repaired soon.
O\\ It may cause problems with other mechanical systems and possibly pose a huge fire risk.
O\\ It will slow your truck to a halt and force you to pull over.
O\\ You will have no brake function and your truck will be out of control.
A\\ You will still have normal brake function and will just need to get the ABS repaired soon.
E\\ Without ABS you still have normal brake functions. Drive and brake as you always have.

Q\\ Which of the following is not part of the braking process when you're driving a tractor-trailer combination vehicle with an antilock braking system (ABS)?
O\\ Brake the same way no matter what you're driving: a vehicle with ABS, a vehicle with a trailer, or something else.
O\\ When you slow down, you should monitor your tractor and trailer and ease off the brakes to keep control.
O\\ You should use only the braking necessary to stay safely in control.
O\\ You should drive faster so that you will be able to keep the trailer and tractor straight.
A\\ You should drive faster so that you will be able to keep the trailer and tractor straight.
E\\ When you drive a vehicle with ABS, you should brake as you always have. In other words: use only the braking force necessary to stop safely and stay in control; brake the same way regardless of whether you have ABS on the bus, tractor, the trailer, or both; as you slow down monitor your tractor and trailer and back off the brakes if it is safe to do so to stay in control.

Q\\ Which of the following are true about a dual air brake system?
O\\ Usually, one system operates the front axle and the other one operates the rear axle.
O\\ It uses a single set of brake controls.
O\\ One system is called the "primary" system and the other one is called the "secondary" system.
O\\ All of the above are true.
A\\ All of the above are true.
E\\ Most heavy-duty vehicles use dual air brake systems for safety. A dual air brake system has two separate air brake systems, which use a single set of brake controls. One system or primary system typically operates the regular brakes on the rear axle or axles. The other or secondary system operates the regular brakes on the front axle and possibly one rear axle.

Q\\ How can you tell if your vehicle is equipped with an antilock braking system (ABS)?
O\\ Check if the vehicle was manufactured after 2000.
O\\ Check if the vehicle was manufactured after 2010.
O\\ ABS is still optional.
O\\ Check if the vehicle was manufactured after 1998.
A\\ Check if the vehicle was manufactured after 1998.
E\\ The Department of Transportation requires that ABS be on: air brake vehicles built on or after March 1, 1998.

Q\\ Spring brakes are
O\\ brakes that come on automatically on a truck or tractor when the psi drops too low.
O\\ made up of powerful springs that are held back by air pressure while you are driving.
O\\ not going to take full effect until your psi drops to a certain range, typically 20 to 30 psi.
O\\ all of the above.
A\\ all of the above.
E\\ Spring brakes are an important backup system: powerful springs that automatically apply the brakes if they sense that air pressure has been lost for some reason, such as a leak. They will also apply the brakes if the psi gets too low, although ideally, you should take control of your brakes before that happens.

Q\\ In the event of a brake system failure, the emergency brake system uses __________ to stop the vehicle.
O\\ only the parking brakes
O\\ parts of the service brakes and parking brakes
O\\ only the service brakes
A\\ parts of the service brakes and parking brakes
E\\ The emergency brake system uses parts of the service and parking brake systems to stop the vehicle in a brake system failure.

Q\\ Repeatedly pressing and releasing (fanning) the brake pedal may result in
O\\ a loss of brake air pressure.
O\\ a buildup of brake air pressure.
O\\ no change in brake air pressure.
A\\ a loss of brake air pressure.
E\\ Each time you release the brakes, some compressed air leaves the system and must be replenished by the air compressor. If you keep pressing and releasing the brake pedal, air may leave the system faster than the air compressor can replenish it, and the air pressure may drop to the point that the brakes won't work.

Q\\ If the spring brakes are on, when should you push the brake pedal?
O\\ Only when driving downhill
O\\ Never
O\\ Only on a slippery road
A\\ Never
E\\ Never push the brake pedal down when the spring brakes are on. If you do, the brakes could be damaged by the combined forces of the springs and the air pressure.

Q\\ You'll know that your brakes are fading if
O\\ the brake feels spongy when you apply pressure.
O\\ you release the brake pedal and your speed increases.
O\\ you have to press the brake pedal harder than usual to control your speed.
A\\ you have to press the brake pedal harder than usual to control your speed.
E\\ As the overheated drums expand, the brake shoes and linings have to move farther to contact the drums, and the force of this contact is reduced. So, you will be pressing harder on the pedal.

Q\\ A converter dolly with antilock brakes (ABS) is required to have
O\\ a yellow lamp on the left side.
O\\ a white lamp on the left side.
O\\ a white lamp on the right side.
A\\ a yellow lamp on the left side.
E\\ Converter dollies built on or after March 1, 1998, are required to have antilock brakes. These dollies will have a yellow lamp on the left side of the dolly.

Q\\ Which of the following is the most important thing about hard braking?
O\\ Disconnecting the steering axle brakes will help keep your vehicle in a straight-line during emergency braking.
O\\ Don't lock the wheels for longer than an instant.
O\\ Never do it without downshifting first.
A\\ Don't lock the wheels for longer than an instant.
E\\ Emergency braking does not mean pushing down on the brake pedal as hard as you can. That will only keep the wheels locked up and cause a skid. If the wheels are skidding, you cannot control the vehicle.

Q\\ In controlled braking, you
O\\ lock the wheels for short periods of time.
O\\ can turn sharply.
O\\ brake in a straight line.
A\\ brake in a straight line.
E\\ You apply the brakes as hard as you can without locking the wheels. Keep steering wheel movements very small while doing this. If you need to make a larger steering adjustment or if the wheels lock, release the brakes. Re-apply the brakes as soon as you can.

Q\\ If oil and water collects in the air tanks, what could happen to the brakes?
O\\ The brakes could heat up.
O\\ The brakes could lock up.
O\\ The brakes could fail.
A\\ The brakes could fail.
E\\ Compressed air usually has some water and some compressor oil in it, which is bad for the air brake system. For example, the water can freeze in cold weather and cause brake failure.

Q\\ S-cam drum brakes have an S-cam in each brake chamber. Why is it called an "S-cam?"
O\\ It is shaped like the letter "S."
O\\ It makes the brake shoes move in an S-shaped path.
O\\ It is constantly spinning whenever the wheel is spinning.
A\\ It is shaped like the letter "S."
E\\ The S-cam is S-shaped. The s-cam forces the brake shoes away from one another and presses them against the inside of the brake drum.

Q\\ To test the air service brakes,
O\\ stop the vehicle, put it in low gear, depress the brake pedal, and then gently pull against the brakes.
O\\ brake firmly while slowly moving forward.
O\\ brake firmly while slowly moving backward.
A\\ brake firmly while slowly moving forward.
E\\ Pull forward at 5 mph, apply the service brake and stop. Check to see that the vehicle does not pull to either side and that it stops when brake is applied.

Q\\ When can you leave your truck unattended without first applying the parking brakes or chocking the wheels?
O\\ Never
O\\ If you will only be away from the truck for a few minutes
O\\ If you will be conducting your pre-trip inspection
A\\ Never
E\\ Never leave your vehicle unattended without applying the parking brakes or chocking the wheels. Your vehicle might roll away and cause injury and damage.

Q\\ If your truck or bus has dual parking control valves it means that you can use pressure from a separate tank to:
O\\ Release the spring brakes to move a short distance.
O\\ Apply more brake pressure if the main tank is getting low.
O\\ Stay parked without using up service air pressure.
A\\ Release the spring brakes to move a short distance.
E\\ When main air pressure is lost, the spring brakes come on. Some vehicles have a separate air tank which can be used to release the spring brakes. This is so you can move the vehicle in an emergency.

Q\\ The brake pads should be _____ for the brakes to be on?
O\\ Worn 1/32 of an inch.
O\\ Against the drum.
O\\ Disconnected from the slack adjusters.
O\\ Worn dangerously thin.
A\\ Against the drum.
E\\ To stop, the brake shoes and linings are pushed against the inside of the drum. This causes friction, which slows the vehicle.

Q\\ You should know that your brakes are fading when:
O\\ You must push harder on the brake pedal to control your speed on a downgrade.
O\\ The brake feels spongy when pressure is applied.
O\\ Pressure on the brake pedal is released and speed increases.
A\\ You must push harder on the brake pedal to control your speed on a downgrade.
E\\ Increasing application pressure to hold the same speed means the brakes are fading.

Q\\ The application pressure gauge shows the driver how much pressure:
O\\ Has been used on the trip.
O\\ Is in the air tanks.
O\\ Is being applied to the brakes.
A\\ Is being applied to the brakes.
E\\ Application Pressure Gauge shows how much air pressure you are applying to the brakes.

Q\\ If the air compressor should develop a leak, what keeps the air in the tanks?
O\\ The tractor protection valve
O\\ The emergency relay valve
O\\ The one-way check valve
A\\ The one-way check valve
E\\ Installed on the compressor side of the air tank is a one-way check valve, it allows air into the tanks, but does not allow it to flow back to the compressor.

Q\\ Why drain water from the compressed air tanks?
O\\ The low boiling point of water reduces braking power.
O\\ Water can freeze in cold weather and cause brake failure.
O\\ Water over cools the compressor.
A\\ Water can freeze in cold weather and cause brake failure.
E\\ Compressed air usually has some water and some compressor oil in it, which is bad for the air brake system, the water can freeze in cold weather and cause brake failure. The water and oil tend to collect in the bottom of the air tank. Be sure that you drain the air tanks completely.

Q\\ Brake drums must not have cracks longer than _____ the width of the friction area?
O\\ 1/8
O\\ 1/4
O\\ 1/2
A\\ 1/2
E\\ Brake drums or discs must not have cracks longer than one half the width of the friction area.

Q\\ After the initial drop, the maximum acceptable leakage rates per minute are
O\\ 5 psi for single vehicles and 6 psi for combination vehicles.
O\\ 5 psi for single vehicles and 10 psi for combination vehicles.
O\\ 3 psi for single vehicles and 4 psi for combination vehicles.
O\\ 1 psi for single vehicles and 3 psi for combination vehicles.
A\\ 3 psi for single vehicles and 4 psi for combination vehicles.
E\\ With a fully-charged air system typically 125 psi, turn off the engine, release the parking brake; and time the air pressure drop. The loss rate should be less than two psi in one minute for single vehicles brakes released and three with the brakes applied, and less than three psi in one minute for combination vehicles with the brakes released and four with the brakes applied.

Q\\ How do brakes work on a long, steep downgrade?
O\\ They work as a supplement to the braking effect of your engine.
O\\ Not applicable; no braking effect is involved in a downgrade.
O\\ They work as the main braking mechanism.
O\\ They work as the main braking mechanism with the engine braking effect as an emergency backup.
A\\ They work as a supplement to the braking effect of your engine.
E\\ The use of brakes on a long and/or steep downgrade is only a supplement to the braking effect of the engine.

Q\\ How would you check your truck's slack adjusters?
O\\ Accelerate, then brake hard.
O\\ Use gloves and pull hard on each slack adjuster you can reach.
O\\ Press the brake pedal while listening for any strange noises.
O\\ All of the above will work.
A\\ Use gloves and pull hard on each slack adjuster you can reach.
E\\ Use gloves and pull hard on each slack adjuster that you can reach. If a slack adjuster moves more than about one inch where the push rod attaches to it, it probably needs adjustment.

Q\\ The parking brake control
O\\ applies the brakes during normal driving.
O\\ lets the air out of the brake chambers.
O\\ applies the brakes in the event of an emergency.
A\\ lets the air out of the brake chambers.
E\\ A parking brake control in the cab allows the driver to let the air out of the spring brakes. This lets the springs put the brakes on.

Q\\ If the low air pressure warning signal is not working,
O\\ it may lead to sudden emergency braking in a single-circuit air system.
O\\ you may lose air pressure, but at least you'll know about it anyway.
O\\ neither of the above will happen.
A\\ it may lead to sudden emergency braking in a single-circuit air system.
E\\ If the warning signal doesn't work, you could lose air pressure and you would not know it. This could cause sudden emergency braking in a single-circuit air system. In dual systems the stopping distance will be increased. Only limited braking can be done before the spring brakes come on.

Q\\ Your vehicle has a dual air brake system. One of the systems loses air pressure. What will happen?
O\\ The manual slack adjusters will not be set properly.
O\\ The emergency brakes will come on immediately.
O\\ Either the front or rear brakes will not be fully operational.
A\\ Either the front or rear brakes will not be fully operational.
E\\ A dual air brake system has two separate air brake systems, which use a single set of brake controls. Each system has its own air tanks, hoses, lines, etc. One system typically operates the regular brakes on the rear axle or axles. The other system operates the regular brakes on the front axle and possibly one rear axle.

Q\\ Under ideal conditions, the average driver of a truck or bus equipped with air brakes and traveling at 55 mph would require what stopping distance?
O\\ 300 to 350 feet
O\\ More than 400 feet
O\\ 100 to 250 feet
A\\ More than 400 feet
E\\ The total minimum distance your vehicle has traveled, in ideal conditions; with everything considered, including perception distance, reaction distance and braking distance, until you can bring your vehicle to a complete stop. At 55 mph, your vehicle will travel about 450 feet.

Q\\ Modern air brake systems are three different systems combined: the service brakes, parking brakes, and _______ brakes.
O\\ S-cam
O\\ emergency
O\\ foot
A\\ emergency
E\\ Air brakes are really three different braking systems: service brake, parking brake, and emergency brake.

Q\\ To check the free play of manual slack adjusters on S-cam brakes you should:
O\\ Stop on level ground and apply the parking brakes.
O\\ Park on level ground, chock the wheels, and release the parking brakes.
O\\ Park on level ground and drain off air pressure before adjusting.
A\\ Park on level ground, chock the wheels, and release the parking brakes.
E\\ For manual slack adjustors, the brake pushrod should not move more than one inch, with the brakes released, when pulled by hand.

Q\\ Your truck or bus has a dual air brake system. If a low air pressure warning comes on for only one system, what should you do?
O\\ Reduce your speed and drive to the nearest garage for repairs.
O\\ Continue at normal speed and find a garage before the brakes lock.
O\\ Stop. Safely park and continue only after the system is fixed.
A\\ Stop. Safely park and continue only after the system is fixed.
E\\ The warning light and buzzer should come on before the air pressure drops below 60 psi in either system. If this happens while driving, you should stop right away and safely park the vehicle. If one air system is very low on pressure, either the front or the rear brakes will not be operating fully. This means it will take you longer to stop. Bring the vehicle to a safe stop and have the air brakes system fixed.

Q\\ If your vehicle has an alcohol evaporator, every day during cold weather you should:
O\\ Check and fill the alcohol level.
O\\ Change the alcohol from a new bottle.
O\\ Clean the air filter with alcohol
A\\ Check and fill the alcohol level.
E\\ Check the alcohol container and fill up as necessary, every day during cold weather.

Q\\ With S-cam drum brakes, when the brake chamber fills with air, air pressure pushes the push rod out, moving the ________ and thus rotating the ________.
O\\ slack adjuster; brake camshaft
O\\ slack adjuster; tie rod
O\\ brake camshaft; tie rod
A\\ slack adjuster; brake camshaft
E\\ In S-cam brakes when you push the brake pedal, air is let into each brake chamber. Air pressure pushes the rod out, moving the slack adjuster, thus twisting the brake camshaft. This turns the s-cam. The s-cam forces the brake shoes away from one another and presses them against the inside of the brake drum.

Q\\ In which of the following situations should you NOT apply the parking brakes?
O\\ When you are testing whether they will hold the vehicle
O\\ If the brakes are very hot
O\\ If you're parking for less than one hour
A\\ If the brakes are very hot
E\\ Don't use the parking brakes if the brakes are very hot (from just having come down a steep grade), or if the brakes are very wet in freezing temperatures. If they are used while they are very hot, they can be damaged by the heat. If they are used in freezing temperatures when the brakes are very wet, they can freeze so the vehicle cannot move. Use wheel chocks instead.

Q\\ Which of the following can cause brakes to fail or fade?
O\\ Overheating, low air pressure, and not relying on the engine braking effect
O\\ Not taking your foot off the accelerator
O\\ Not pressing the brake pedal hard enough
A\\ Overheating, low air pressure, and not relying on the engine braking effect
E\\ Brakes can fade or fail from excessive heat caused by using them too much and not relying on the engine braking effect, they are also affected by adjustment, and low air pressure.

Q\\ If you need to stop quickly and your vehicle lacks antilock brakes, you can use
O\\ the "controlled braking" method.
O\\ the "stab braking" method.
O\\ either of the above.
A\\ either of the above.
E\\ You should brake in a way that will keep your vehicle in a straight line and allow you to turn if it becomes necessary. You can use the "controlled braking" method or the "stab braking" method.

Q\\ Tractor and straight truck spring brakes will come fully on when the air pressure drops to a range of
O\\ 60 to 80 psi.
O\\ 20 to 45 psi.
O\\ 10 to 15 psi.
A\\ 20 to 45 psi.
E\\ Tractor and straight truck spring brakes will come fully on when air pressure drops to a range of 20 to 45 psi (typically 20 to 30 psi).

Q\\ The modulating control valve allows you to control the
O\\ amount of pressure in the brake system.
O\\ front brakes.
O\\ spring brakes.
A\\ spring brakes.
E\\ In some vehicles a control handle on the dash board may be used to apply the spring brakes gradually. This is called a modulating valve. It is spring-loaded, so you have a feel for the braking action. The more you move the control lever, the harder the spring brakes come on.

Q\\ Air loss in a straight truck or bus should not be more than _____ with the engine off and the brakes applied.
O\\ 1 psi in 30 seconds
O\\ 1 psi in one minute
O\\ 3 psi in one minute
A\\ 3 psi in one minute
E\\ With a fully-charged air system, turn off the engine, release the parking brake, and time the air pressure drop. The loss rate should be less than two psi in one minute for single vehicle brakes released, and three with the brakes applied.

Q\\ What activates the stop switch?
O\\ Air pressure.
O\\ Electrical.
O\\ Mechanical force.
A\\ Air pressure.
E\\ Drivers behind you must be warned when you put your brakes on. The air brake system does this with an electric switch that works by air pressure. The switch turns on the brake lights when you put on the air brakes.

Q\\ A straight truck or bus air brake system should not leak at a rate of more than ____ psi per minute with the engine off and the brakes released.
O\\ 1
O\\ 2
O\\ 3
A\\ 2
E\\ With a fully-charged air system, turn off the engine, release the parking brake, and time the air pressure drop. The loss rate should be less than two psi in one minute for single vehicle brakes released, and three with the brakes applied.

Q\\ Vehicles with air brakes must have:
O\\ At least two air tanks.
O\\ An air pressure gauge to show the pressure available for braking.
O\\ An air pressure gauge to show air used by the brake chambers for braking.
A\\ An air pressure gauge to show the pressure available for braking.
E\\ All vehicles with air brakes have a pressure gauge connected to the air tank. If the vehicle has a dual air brake system, there will be a gauge for each half of the system.

Q\\ Slack adjusters should not have any more than _____ of play?
O\\ 1/2 inch
O\\ 1 inch
O\\ 1-1/2 inches
A\\ 1 inch
E\\ Park on level ground and chock the wheels to prevent the vehicle from moving, release the parking brakes so you can move the slack adjusters, using gloves and pull hard on each slack adjuster that you can reach, and if a slack adjuster moves more than about one inch where the push rod attaches to it then adjustments are needed.

Q\\ What is the best way to test your vehicle's low air pressure warning signal?
O\\ With the engine off, step on and off the brake pedal to lower the air pressure below 60 psi.
O\\ Pump the brakes while your vehicle is fully on.
O\\ Pump the brakes until the air pressure drops below 30 psi.
O\\ Manually let the air out of your brakes and see if the signal comes on.
A\\ With the engine off, step on and off the brake pedal to lower the air pressure below 60 psi.
E\\ Shut the engine off when you have enough air pressure so that the low-pressure warning signal is not on. Turn the electrical power on and step on and off the brake pedal to reduce air tank pressure. The low air pressure warning signal must come on before the pressure drops to less than 60 psi in the air tank.

Q\\ Which vehicles must have low air pressure warning signals?
O\\ Vehicles built after 2005 must have low air pressure warning signals.
O\\ All vehicles with air brakes currently in operation must have low air pressure warning signals.
O\\ Vehicles built after 2010 must have low air pressure warning signals.
O\\ None; low air pressure warning signals are optional.
A\\ All vehicles with air brakes currently in operation must have low air pressure warning signals. EXPLANATION:A low air pressure warning signal is required on vehicles with air brakes.
E\\ "need to find the text that goes here"

Q\\ On a long or steep downgrade, once you have reached your "safe" speed, brake until you are traveling
O\\ 5 mph slower.
O\\ 15 mph slower.
O\\ 10 mph slower.
A\\ 5 mph slower.
E\\ Snub braking method is used for steep downhill grades, in this method apply the brakes just hard enough to feel a definite slowdown. When your speed has been reduced to approximately five mph below your "safe" speed, release the brakes. When your speed has increased to your "safe" speed, repeat.

Q\\ To check the slack adjusters on S-cam drum brakes, you should first
O\\ stop on level ground and apply the parking brakes.
O\\ park on level ground and drain off the air pressure.
O\\ park on level ground, chock the wheels, and release the parking brakes.
A\\ park on level ground, chock the wheels, and release the parking brakes.
E\\ To check slack adjusters on S-cam Brakes. Park on level ground and chock the wheels to prevent the vehicle from moving and apply the parking brake.

Q\\ Before starting down a hill, you should be in the proper gear
O\\ so you can coast downhill.
O\\ so you only have to apply the brake just hard enough to feel a definite slowdown.
O\\ so you can go through the gears on the way down.
A\\ so you only have to apply the brake just hard enough to feel a definite slowdown.
E\\ The use of brakes on a long and/or steep downgrade is only a supplement to the braking effect of the engine. Once the vehicle is in the proper low gear you should only have to apply the brakes just hard enough to feel a definite slowdown.

Q\\ To apply the parking brakes under normal conditions,
O\\ be sure the air brake system is fully pressurized.
O\\ let the air out of the brake chambers.
O\\ turn off the engine.
A\\ let the air out of the brake chambers.
E\\ A parking brake control in the cab allows the driver to let the air out of the spring brakes. This lets the springs put the brakes on.

Q\\ Slack adjusters are
O\\ between the power screw and push rod on disc brakes.
O\\ a part of the air brake system that is used to adjust the brakes.
O\\ between the push rod and S-cam on drum brakes.
O\\ all of the above.
A\\ all of the above.
E\\ Slack adjusters are an important part of your air brake system that allows you to adjust the brakes to ensure that they are safe. They are located in different places, depending on the type of brakes that you have.

Q\\ Which of the following is NOT part of the air brake system?
O\\ Service brake system
O\\ Parking brake system
O\\ Emergency brake system
O\\ Radio signal system
A\\ Radio signal system
E\\ Air brakes are really three different braking systems: service brake, parking brake, and emergency brake.

Q\\ Air braking takes more time than hydraulic braking because air brakes:
O\\ Use different brake drums.
O\\ Need to have airflow through the lines to work.
O\\ Require heavier return springs.
A\\ Need to have airflow through the lines to work.
E\\ With air brakes there is an added delay called Brake Lag. This is the time required for the brakes to work after the brake pedal is pushed.

Q\\ In air brake vehicles, the parking brakes should be used:
O\\ Whenever the vehicle is parked.
O\\ To hold your speed when going downhill.
O\\ Only during pre and post trip inspections.
A\\ Whenever the vehicle is parked.
E\\ Any time you park use the parking brakes. Pull the parking brake control knob out to apply the parking brakes, push it in to release.

Q\\ The brake pedal in an air brake system:
O\\ Controls the speed of the air compressor.
O\\ Is to be used as a footrest during normal driving.
O\\ Controls the air pressure applied to the brakes.
A\\ Controls the air pressure applied to the brakes.
E\\ You put on the brakes by pushing down the brake pedal. Pushing the pedal down harder applies more air pressure. Letting up on the brake pedal reduces the air pressure and releases the brakes.

Q\\ Your vehicle has a dual air brake system, if a low air pressure warning comes on for the secondary system, you should?
O\\ Stop, safely park, and continue only when the system is fixed.
O\\ Reduce your speed and test the remaining system while underway.
O\\ Reduce your speed and drive to the nearest garage for repairs.
A\\ Stop, safely park, and continue only when the system is fixed.
E\\ Even if the low-pressure alarm is for the secondary system you need to stop at a safe location, park, and get the issue fixed. It is unsafe for the vehicle to remain in motion with a low air alarm.

Q\\ The tractor protection valve
O\\ will close automatically if the air supply drops to a certain level.
O\\ will close if you apply the parking brakes.
O\\ provides the air supply for the brake system.
O\\ does all of the above.
A\\ does all of the above.
E\\ The tractor protection valve keeps air in the tractor or truck brake system should the trailer break away or develop a bad leak, and it will close automatically if air pressure is low (typically 20-45 psi).

Q\\ What is the first thing you should do if the low air pressure warning comes on?
O\\ Stop.
O\\ Upshift.
O\\ Downshift.
A\\ Stop.
E\\ If the low air pressure warning comes on, stop and safely park your vehicle as soon as possible.

Q\\ When should you use the parking brake?
O\\ Only if you are away from your vehicle for an extended period of time
O\\ Every time you leave your vehicle, with a few exceptions
O\\ Only in urban areas where there are many other vehicles
O\\ Every time you leave your vehicle for any length of time
A\\ Every time you leave your vehicle, with a few exceptions
E\\ Never leave your vehicle unattended without applying the parking brakes or chocking the wheels. Your vehicle might roll away and cause injury and damage. Exceptions are when the brakes are very hot, or wet and it is very cold outside. In this case use wheel chocks.

Q\\ The supply pressure gauge shows the driver how much pressure:
O\\ Has been used in this trip.
O\\ Is in the air tanks.
O\\ Is being sent to the brake chambers.
A\\ Is in the air tanks.
E\\ All vehicles with air brakes have a pressure gauge connected to the air tank, and it tells you how much pressure is in the air tanks.

Q\\ Which of the following is NOT part of the drum brake?
O\\ Slack adjuster
O\\ Brake drum
O\\ Return spring
O\\ Safety valve
A\\ Safety valve
E\\ Drum brakes are on each of your vehicle's axles and contain about 10 different parts, including the axle, slack adjuster, and brake drum itself. While a safety valve is part of the air brake system, it is not part of the drum brake.

Q\\ The safety release valve will blow at _____ psi?
O\\ 120
O\\ 150
O\\ 160
A\\ 150
E\\ A safety relief valve is installed in the first tank the air compressor pumps air to. The safety valve protects the tank and the rest of the system from too much pressure. The valve is usually set to open at 150 psi. If the safety valve releases air, something is wrong. Have the fault fixed by a mechanic.

Q\\ In an emergency stop you should?
O\\ Use the hand valve and service brakes.
O\\ Use the stab braking method
O\\ Use the brakes hard without locking the wheels.
A\\ Use the stab braking method
E\\ Stab braking means that you: apply your brakes all the way, and release brakes when wheels lock up. As soon as the wheels start rolling, apply the brakes fully again.

Q\\ What are spring brakes?
O\\ If the air brakes leak down, springs apply the brakes to stop the vehicle.
O\\ They are the CamLaster brakes.
O\\ They are the springs on the brake pedal.
A\\ If the air brakes leak down, springs apply the brakes to stop the vehicle.
E\\ When driving, powerful springs are held back by air pressure. If the air pressure is removed, the springs put on the brakes. A leak in the air brake system, which causes all the air to be lost, will also cause the springs to put on the brakes.
`,yy=`
Q\\ When should you use the hand valve to park a combination vehicle?
O\\ To park at loading docks
O\\ To park on a grade
O\\ Never
A\\ Never
E\\ The trailer hand valve, also called the trolley valve or Johnson bar, works the trailer brakes. The trailer hand valve should be used only to test the trailer brakes. Never use the hand valve for parking because all the air might leak out unlocking the brakes.

Q\\ Which answer is correct for the air valves when testing the trailer service brakes only?
O\\ Service Brake: off; Parking Brake: off; Trailer air supply: in / open; Trolley: applied
O\\ Service Brake: off; Parking Brake: off; Trailer air supply: in / open; Trolley: released
O\\ Service Brake: off; Parking Brake: off; Trailer air supply: out; Trolley: applied
O\\ No answers are correct
A\\ Service Brake: off; Parking Brake: off; Trailer air supply: in / open; Trolley: applied
E\\ Check for normal air pressure, release the parking brakes, release the service brake, make sure the trailer air supply is in / open, move the vehicle forward slowly, and apply trailer brakes with the hand control or trolley valve. You should feel the brakes come on. This tells you the trailer brakes are connected and working.

Q\\ You are coupling a semi-trailer to your tractor but have not yet backed under. The trailer is at the right height when:
O\\ The kingpin is about 1 1/4 inches above the fifth wheel
O\\ The end of the kingpin is even with the top of the fifth wheel
O\\ The trailer will be raised slightly when the tractor is backed under it
A\\ The trailer will be raised slightly when the tractor is backed under it
E\\ The trailer should be low enough that it is raised slightly by the tractor when the tractor is backed under it. Raise or lower the trailer as needed. If the trailer is too low, the tractor may strike and damage the trailer nose; if the trailer is too high, it may not couple correctly.

Q\\ How should you test the tractor trailer connection for security?
O\\ Put the tractor in gear and pull ahead with a sharp jerk
O\\ Pull gently forward in low gear against the locked trailer brakes, then inspect the coupling
O\\ Rock the trailer back and forth with the trailer brakes locked
A\\ Pull gently forward in low gear against the locked trailer brakes, then inspect the coupling
E\\ Raise trailer landing gear slightly off ground. Pull tractor gently forward while the trailer brakes are still locked to check that the trailer is locked onto the tractor.

Q\\ Which answer is correct for the air valves when testing the trailer spring / parking brakes only?
O\\ Service Brake: off; Parking Brake: off; Trailer air supply: in / open; Trolley: released
O\\ Service Brake: off; Parking Brake: off; Trailer air supply: out; Trolley: released
O\\ Service Brake: off; Parking Brake: off; Trailer air supply: out; Trolley: applied
O\\ No answers are correct
A\\ Service Brake: off; Parking Brake: off; Trailer air supply: out; Trolley: released
E\\ To test the trailer spring brakes, you need to have the service brake off or released, parking brake off, trailer air supply out shutting the door to the trailer, and trolley released.

Q\\ Your emergency air line breaks or gets pulled apart while you are driving. The loss of pressure will cause the:
O\\ Emergency trailer brakes to come on
O\\ Air compressor to unload instead of pumping air
O\\ Trailer supply valve will open
O\\ Nothing will happen until air pressure reaches 10 PSI
A\\ Emergency trailer brakes to come on
E\\ A major leak in the emergency line will cause the tractor protection valve to close and the trailer emergency brakes to come on. But the brakes will hold only if there is air pressure in the trailer air tank.

Q\\ You supply air to the trailer tanks by:
O\\ Pushing in the trailer air supply valve
O\\ Pulling out the trailer air supply valve
O\\ Connecting the service line glad hand
O\\ Pulling out the system parking brake
A\\ Pushing in the trailer air supply valve
E\\ From cab, push in air supply knob or move tractor protection valve control from the emergency to the normal position to supply air to the trailer brake system.

Q\\ There are two things that a driver can do to prevent a roll over. They are: (1) keep the cargo as close to the ground as possible; and (2):
O\\ Make sure that the brakes are properly adjusted
O\\ Go slowly around turns
O\\ Keep the fifth wheel's free play as tight as possible
A\\ Go slowly around turns
E\\ The following two things will help you prevent rollover--keep the cargo as close to the ground as possible and drive slowly around turns.

Q\\ The fifth wheel locking lever is not locked after the jaws close around the kingpin; this means:
O\\ You can set the fifth wheel for weight balance
O\\ The parking lock is off, and you may drive away
O\\ The coupling is not right and should be fixed before driving the coupled unit
A\\ The coupling is not right and should be fixed before driving the coupled unit
E\\ Check that the locking lever is in the lock position. If the locking lever does not go into the locked position the coupling is not complete.

Q\\ When backing your tractor under a trailer, you should expect:
O\\ Trailer landing gear to be fully extended
O\\ End of the kingpin is even with the top of the fifth wheel
O\\ Trailer will be lifted slightly when the tractor backs under it
A\\ Trailer will be lifted slightly when the tractor backs under it
E\\ The trailer should be low enough that it is raised slightly by the tractor when the tractor is backed under it. If the trailer is too low, the tractor may strike and damage the trailer nose; if the trailer is too high, it may not couple correctly.

Q\\ Before you start to uncouple, you must
O\\ make sure the trailer has enough of an air supply for its brakes to hold.
O\\ call in for any special requests.
O\\ make sure the ground is solid and can support the weight of the trailer.
A\\ make sure the ground is solid and can support the weight of the trailer.
E\\ Make sure surface of parking area can support weight of trailer.

Q\\ During uncoupling, you should disconnect the electrical cable and
O\\ hang it with the plug up.
O\\ hang it with the plug down.
O\\ coil it to keep it out of the way.
A\\ hang it with the plug down.
E\\ Hang electrical cable with plug down to prevent moisture from entering it.

Q\\ As part of your vehicle inspection test, if your vehicle is equipped with air brakes and has a trailer, you will inspect the air connections between the truck or tractor and the trailer. Make sure that the ________ are locked in place and free of damage or air leaks.
O\\ glad hands
O\\ lug nuts
O\\ pins
A\\ glad hands
E\\ Glad hands are coupling devices used to connect the service and emergency air-lines from the truck or tractor to the trailer.

Q\\ If your vehicle gets stuck on a railroad track, you should
O\\ radio in for assistance.
O\\ get away from your vehicle and call 911 or the posted emergency number.
O\\ honk your horn loudly and call 911 or the posted emergency number.
A\\ get away from your vehicle and call 911 or the posted emergency number.
E\\ If for any reason you get stuck on the tracks, get out of the vehicle and away from the tracks. Check signposts or signal housing at the crossing for emergency notification information. Call 911 or another emergency number. Give the location of the crossing using all identifiable landmarks, especially the DOT number, if posted.

Q\\ If your test of the tractor protection valve is successful,
O\\ the tractor protection valve control (trailer air supply control) will pop out or go from "normal" to "emergency."
O\\ the parking brake valve will pop out.
O\\ the low air pressure warning signal will come on.
A\\ the tractor protection valve control (trailer air supply control) will pop out or go from "normal" to "emergency."
E\\ The tractor protection valve keeps air in the tractor or truck brake system should the trailer break away or develop a bad leak. The tractor protection valve is controlled by the "trailer air supply" control valve in the cab. The control valve allows you to open and shut the tractor protection valve. The tractor protection valve will close automatically if air pressure is low (in the range of 20 to 45 psi). When the tractor protection valve closes, it stops any air from going out of the tractor.

Q\\ You should not use the trailer hand brake to straighten out a jackknifing trailer, because
O\\ the brakes on the trailer wheels caused the skid in the first place.
O\\ the brakes on the trailer wheels will not respond to the hand brake.
O\\ the brake handle is too hard to reach.
A\\ the brakes on the trailer wheels caused the skid in the first place.
E\\ When the wheels of a trailer lock up, the trailer will tend to swing around. This is more likely to happen when the trailer is empty or lightly loaded. This type of jackknife is often called a "trailer jackknife." Applying the trailer brakes would extend the skid and trailer jackknife.

Q\\ You should not use the trailer hand valve while driving because
O\\ you should use the parking brake.
O\\ of the danger of making the trailer skid.
O\\ it won't work as well as the foot brake.
A\\ of the danger of making the trailer skid.
E\\ Do not use it in driving because of the danger of making the trailer skid.

Q\\ A trailer is most likely to jackknife when it is
O\\ empty.
O\\ overloaded.
O\\ loaded to full capacity.
A\\ empty.
E\\ Large combination vehicles take longer to stop when they are empty than when they are fully loaded. When empty, the very stiff suspension springs and strong brakes give poor traction and make it very easy to lock up the wheels causing the tractor to jackknife.

Q\\ When backing a tractor under a trailer, you should
O\\ always approach the trailer at a slight angle.
O\\ always use the lowest reverse gear.
O\\ do it quickly to ensure that the kingpin is locked into the fifth wheel.
A\\ always use the lowest reverse gear.
E\\ Use lowest reverse gear. Back tractor slowly under trailer to avoid hitting the kingpin too hard, and stop when the kingpin is locked into the fifth wheel.

Q\\ The best way to tell if your trailer has started to skid is to
O\\ hear the wheels skidding.
O\\ feel for "pulling" in the cab.
O\\ see it in your mirrors.
A\\ see it in your mirrors.
E\\ The earliest way to notice that your trailer is jackknifing is to see it swinging out in your mirrors.

Q\\ Describe what the trailer air supply control does.
O\\ It is a device used to keep the trailer behind the tractor.
O\\ It is a six-sided yellow knob used to control the tractor protection valve.
O\\ It is used to supply the trailer with air, shut the air off, and apply the trailer emergency brakes.
A\\ It is used to supply the trailer with air, shut the air off, and apply the trailer emergency brakes.
E\\ The trailer air supply control on newer vehicles is a red eight-sided knob, which you use to control the tractor protection valve. You push it in to supply the trailer with air, and pull it out to shut the air off and put on the trailer emergency brakes.

Q\\ If your vehicle is equipped with dummy couplers, why should you connect the glad hands to them?
O\\ It will keep dirt and water out of the lines.
O\\ If you don't, you will never build system pressure.
O\\ The connected brake circuit becomes a backup air tank.
A\\ It will keep dirt and water out of the lines.
E\\ Some vehicles have "dead end" or dummy couplers to which the hoses may be attached when they are not in use. This will prevent water and dirt from getting into the coupler and the air-lines.

Q\\ When coupling a tractor-semitrailer, to test the trailer air brakes, you should place the tractor protection valve control in what position?
O\\ Up
O\\ Down
O\\ Normal
A\\ Normal
E\\ To test the trailer air brake system, first charge it with air. Push in the red trailer air supply knob or place the tractor protection valve control in the "normal" position. Wait until the air pressure reaches normal before you start your tests.

Q\\ Trucks roll over more easily when fully loaded and are
O\\ two times more likely to roll over in a crash than empty rigs.
O\\ five times more likely to roll over in a crash than empty rigs.
O\\ ten times more likely to roll over in a crash than empty rigs.
A\\ ten times more likely to roll over in a crash than empty rigs.
E\\ When more cargo is piled up in a truck, the "center of gravity" moves higher up from the road. The truck becomes easier to turn over. Fully loaded rigs are ten times more likely to roll over in a crash than empty rigs.

Q\\ To stop a trailer skid, you should
O\\ release the brakes.
O\\ use the trailer hand brakes.
O\\ Counter steer.
A\\ release the brakes.
E\\ Once you realize your vehicle is in a skid, you should release the brakes so that the wheels can grip the road again.

Q\\ After you supply air to the trailer, make sure the airlines are not crossed and the trailer brakes are working. This is done by:
O\\ Turning on the parking brakes from the cab.
O\\ Applying and releasing the trailer brakes and listening for brake sounds.
O\\ Lifting the brake pedal.
A\\ Applying and releasing the trailer brakes and listening for brake sounds.
E\\ Shut the engine off so you can hear the brakes. Apply and release trailer brakes and listen for sounds of trailer brakes being applied and released. You should hear the brakes move when applied and air escape when the brakes are released.

Q\\ The air leakage rate for a combination vehicle (engine off, brakes off) should be no more than ____ PSI per minute.
O\\ 1
O\\ 2
O\\ 3
A\\ 3
E\\ With a fully-charged air system, turn off the engine, release the parking brake; and time the air pressure drop. The loss rate should be less than three psi in one minute for combination vehicles, we do not add the additional second here because the brakes are released.

Q\\ If the service airline comes apart while you are driving a combination vehicle, but the emergency line stays together, what will happen right away?
O\\ The emergency tractor brakes will come on
O\\ The trailer's air tank will exhaust through the open line
O\\ Nothing is likely to happen until you try to apply the brakes
A\\ Nothing is likely to happen until you try to apply the brakes
E\\ You may not notice a major leak in the service line until you try to put the brakes on. Then, the air loss from the leak will lower the air tank pressure quickly. If it goes low enough, the trailer emergency brakes will come on.

Q\\ You are coupling a tractor and semi-trailer and have connected the air lines. Before backing under the trailer, you should:
O\\ Supply air to the trailer system, then pull out the trailer air supply knob to lock the trailer brakes
O\\ Make sure that the trailer brakes are off
O\\ Apply the service brakes twice to alert others
A\\ Supply air to the trailer system, then pull out the trailer air supply knob to lock the trailer brakes
E\\ From cab, push in air supply knob or move tractor protection valve control from the emergency to the normal position to supply air to the trailer brake system. Check brake system for crossed air-lines. Shut engine off so you can hear the brakes. Check air brake system pressure gauge for signs of major air loss.

Q\\ You have coupled with a semi-trailer. In what position should you put the front trailer supports before driving away?
O\\ Raised half way with the crank handle removed
O\\ Fully raised with the crank handle secured in its bracket
O\\ Three turns off the top with the crank handle secured in its bracket
A\\ Fully raised with the crank handle secured in its bracket
E\\ Use low gear range to begin raising the landing gear, once free of weight, switch to the high gear range. Raise the landing gear all the way up. Never drive with landing gear only part way up as it may catch on railroad tracks or other things. After raising landing gear, secure the crank handle safely.

Q\\ The driver crosses the airlines when hooking up to an old trailer. What will happen?
O\\ If the trailer has no spring brakes, you can drive away, but you will not have trailer brakes
O\\ The hand valve will apply the tractor brakes instead of the trailer brakes
O\\ The brake pedal will work the trailer spring brakes instead of the air brakes
A\\ If the trailer has no spring brakes, you can drive away, but you will not have trailer brakes
E\\ If the trailer has no spring brakes you would be able to drive away, but service breaks for the trailer only will not work.

Q\\ Why should you be sure that the fifth wheel plate is greased as required?
O\\ To ensure good electrical connections
O\\ To prevent steering problems
O\\ To reduce heat and noise
A\\ To prevent steering problems
E\\ Be sure that the fifth wheel plate is greased as required. Failure to keep the fifth wheel plate lubricated could cause steering problems because of friction between the tractor and trailer.

Q\\ To prevent rollover, cargo should be
O\\ spread evenly across the trailer(s) and as low as possible.
O\\ stacked closest to the doors.
O\\ stacked as close to the front of the rig as possible.
A\\ spread evenly across the trailer(s) and as low as possible.
E\\ As part of your Vehicle inspection, make sure the truck is not overloaded and the cargo is balanced and secured properly.

Q\\ Where should the tractor be when you inspect the landing gear after uncoupling the trailer?
O\\ With the tractor frame under the trailer
O\\ With the fifth wheel directly beneath the kingpin
O\\ Completely cleared from the trailer
A\\ With the tractor frame under the trailer
E\\ Pull tractor forward until fifth wheel comes out from under the trailer but stop with tractor frame under trailer preventing the trailer from falling to ground if landing gear should collapse or sink.

Q\\ An antilock braking system (ABS) is useful
O\\ whether it is on the tractor or the trailers.
O\\ only if it is on the tractor and all trailers.
O\\ only if it is on the tractor.
A\\ whether it is on the tractor or the trailers.
E\\ Brake the same way, regardless of whether you have ABS on the tractor, the trailer, or both.

Q\\ You should use chocks when parking a trailer without spring brakes because
O\\ if the air supply leaks away, there will be no brakes.
O\\ you don't want the trailer rolling down a hill.
O\\ some states require chocking of trailer wheels.
A\\ if the air supply leaks away, there will be no brakes.
E\\ Trailers that do not have spring brakes have emergency brakes, which work from the air stored in the trailer air tank. A major leak in the emergency line will cause the tractor protection valve to close and the trailer emergency brakes to come on, but the brakes will hold only if there is air pressure in the trailer air tank. Eventually, the air will leak away and then there will be no brakes. Therefore, it is very important for safety that you use wheel chocks when you park trailers without spring brakes.

Q\\ To unlock the fifth wheel, pull the release handle to the _______ position.
O\\ closed
O\\ open
O\\ neutral
A\\ open
E\\ To unlock the fifth-wheel pull the release handle to "open" position.

Q\\ What is a tractor jackknife?
O\\ When you lock up the drive tires on the tractor and the tractor spins out sideways as the trailer continues to push forward
O\\ When you lock up the drive tires on the trailer and the trailer spins out sideways as the tractor continues to push forward
O\\ Neither of the above
A\\ When you lock up the drive tires on the tractor and the tractor spins out sideways as the trailer continues to push forward
E\\ Rear wheel braking skids occur when the rear drive wheels lock. Because locked wheels have less traction than rolling wheels, the rear wheels usually slide sideways to "catch up" with the front wheels. With vehicles towing trailers, a drive-wheel skid can let the trailer push the towing vehicle sideways, causing a sudden jackknife.

Q\\ What gear should the tractor engine be in after you uncouple the trailer and are inspecting the trailer supports?
O\\ Neutral
O\\ High reverse
O\\ Low reverse
A\\ Neutral
E\\ Before inspection the trailer while coupling you need to secure the vehicle. Put transmission in neutral. Put parking brakes on. Shut off engine and take key with you so someone else won't move truck while you are under it.

Q\\ The air leakage rate for a combination vehicle (engine off, brakes on) should not be more than ____ PSI per minute.
O\\ 2
O\\ 3
O\\ 4
A\\ 4
E\\ With a fully-charged air system, turn off the engine, release the parking brake; and time the air pressure drop. The loss rate should be less than three psi in one minute for combination vehicles, adding one second if the brakes are applied.

Q\\ Why should you lock the tractor glad hands to each other or to the storage bracket when you are not towing a trailer?
O\\ The connected brake circuit becomes a backup air tank
O\\ It will keep dirt and water out of the lines
O\\ If you did not, you could never build system pressure
A\\ It will keep dirt and water out of the lines
E\\ If there are no dummy couplers, the glad hands can sometimes be locked together. It is very important to keep the air supply clean and free of moisture.

Q\\ You are driving a combination vehicle when the trailer breaks away, pulling apart both air lines. You would expect the trailer brakes to come on and:
O\\ The tractor to lose all air pressure
O\\ The tractor protection valve to close
O\\ The trailer supply valve to stay open
O\\ System parking brake will close
A\\ The tractor protection valve to close
E\\ The tractor protection valve keeps air in the tractor or truck brake system should the trailer break away or develop a bad leak. The tractor protection valve is controlled by the trailer air supply control valve in the cab. The control valve allows you to open and shut the tractor protection valve. The tractor protection valve will close automatically if air pressure is low (in the range of 20 to 45 psi). When the tractor protection valve closes, it stops any air from going out of the tractor. It also lets the air out of the trailer emergency line. This causes the trailer emergency brakes to come on, with possible loss of control.

Q\\ The hand valve should be used:
O\\ Only with the foot brake
O\\ To test the trailer brakes
O\\ Only when the trailer is fully loaded
A\\ To test the trailer brakes
E\\ The trailer hand valve, also called the trolley valve or Johnson bar, works the trailer brakes. The trailer hand valve should be used only to test the trailer brakes.

Q\\ Combination vehicles take longer to stop when they are empty than when they are fully loaded, because
O\\ there is less traction.
O\\ you're unlikely to brake as hard.
O\\ the center of gravity is lower.
A\\ there is less traction.
E\\ Large combination vehicles take longer to stop when they are empty than when they are fully loaded. When lightly loaded, the very stiff suspension springs and strong brakes give poor traction and make it very easy to lock up the wheels.

Q\\ To uncouple a loaded trailer, after the landing gear has made firm contact with the ground, you should
O\\ turn the crank a few more times until the trailer is lifted off the fifth wheel.
O\\ turn the crank a few more times to lift some weight off the tractor.
O\\ secure the crank handle safely.
A\\ turn the crank a few more times to lift some weight off the tractor.
E\\ If trailer is loaded, after the landing gear makes firm contact with the ground, turn crank in low gear a few extra turns. This will lift some weight off the tractor making it easier to unlatch fifth wheel, and to recouple to the trailer.

Q\\ The tractor protection valve is designed to close automatically when the air pressure falls into the pressure range specified by the manufacturer, typically
O\\ 75 to 100 psi.
O\\ 50 to 75 psi.
O\\ 20 to 45 psi.
A\\ 20 to 45 psi.
E\\ – 45 psi.

Q\\ If the brakes did not release when you pushed the trailer air supply valve, you should
O\\ check the electrical cables.
O\\ cross the air lines.
O\\ check the air line connections.
A\\ check the air line connections.
E\\ If you do cross the air-lines, supply air will be sent to the service line instead of going to charge the trailer air tanks. Air will not be available to release the trailer spring brakes. If the spring brakes don't release when you push the trailer air supply control, check the air-line connections.

Q\\ In general, the higher your truck's center of gravity, the
O\\ easier it is to turn over.
O\\ easier it is to turn around corners.
O\\ more stable it is when turning.
A\\ easier it is to turn over.
E\\ The height of the vehicle's center of gravity is very important for safe handling. A high center of gravity means you are more likely to tip over.

Q\\ When you test the tractor protection valve, the red air supply control knob should go into the ________ position.
O\\ emergency
O\\ normal
O\\ neutral
A\\ emergency
E\\ –45 psi, the trailer air supply control knob should pop out, or the valve control should go from the "normal" to the "emergency" position.

Q\\ When coupling, the proper position of the fifth wheel is
O\\ level with the ground.
O\\ tilted down toward the rear of the tractor.
O\\ tilted up toward the rear of the tractor.
A\\ tilted down toward the rear of the tractor.
E\\ Check if fifth wheel is in proper position for coupling: The fifth wheel should be tilted down toward rear of tractor.

Q\\ The front trailer supports are up, and the trailer is resting on the tractor, make sure:
O\\ There is enough clearance between the tops of the tractor tires and the nose of the trailer
O\\ There is enough clearance between the tractor frame and the landing gear
O\\ Both answers are correct
A\\ Both answers are correct
E\\ Check for enough clearance between rear of tractor frame and landing gear and between the top of the tractor tires and the nose of the trailer.

Q\\ You are coupling a tractor to a semi-trailer and have backed up but are not under it. What should you hook up before backing under?
O\\ The electrical service cable
O\\ The emergency and service air lines
O\\ Nothing; back up and lock the fifth wheel
A\\ The emergency and service air lines
E\\ Check glad hand seals and connect tractor emergency and service air-line to trailer emergency and service glad hand. Make sure air-lines are safely supported where they won't be crushed or caught while tractor is backing under the trailer.

Q\\ Before you back under a trailer, make sure the:
O\\ Trailer brakes are locked
O\\ Tractor protection valve is normal
O\\ Air brakes are off
A\\ Trailer brakes are locked
E\\ Pull out the air supply knob or move the tractor protection valve control from normal to emergency.

Q\\ On a double or triple vehicle, which wheels off-track the most?
O\\ The rear wheels of the last trailer
O\\ The rear wheels of the first trailer
O\\ The rear wheels of the tractor
A\\ The rear wheels of the last trailer
E\\ If there is more than one trailer, the rear wheels of the last trailer will off-track the most

Q\\ Which statement best illustrates the "crack-the-whip" effect?
O\\ The trailer is half full, and the cargo is loaded in the front of the trailer. When making a sudden movement of the steering wheel, the cargo will tend to forcefully slide to the back of the trailer, forcing the trailer to roll over.
O\\ When making a quick lane change or sudden movement of the steering wheel, the tractor tends to rock and sway. The velocity of the rearmost trailer forces the tractor to roll over before the trailer.
O\\ When making a quick lane change or sudden movement of the steering wheel, the rear trailer tends to swing out. The force of the rear trailer becomes amplified, causing it to roll over.
A\\ When making a quick lane change or sudden movement of the steering wheel, the rear trailer tends to swing out. The force of the rear trailer becomes amplified, causing it to roll over.
E\\ Trucks with trailers have a dangerous crack-the-whip effect caused by rearward amplification. When you make a quick lane change, the crack-the-whip effect can turn the trailer over. There are many accidents where only the trailer has overturned.

Q\\ To test the tractor protection valve, charge the trailer air brake system, turn off the engine, and
O\\ keep pressing the brake pedal firmly.
O\\ flash your high-beam headlights on and off several times.
O\\ step on and off the brake pedal several times.
A\\ step on and off the brake pedal several times.
E\\ – 45 psi. This will cause the spring brakes to come on.

Q\\ Which of these vehicles off-tracks the most?
O\\ A 5-axle tractor towing a 45-foot trailer
O\\ A 5-axle tractor towing a 42-foot trailer
O\\ A 5-axle tractor towing a 52-foot trailer
A\\ A 5-axle tractor towing a 52-foot trailer
E\\ When a vehicle goes around a corner the rear wheels follow a different path than the front wheels, and this is called off-tracking or "cheating." Longer vehicles will off-track more. If there is more than one trailer, the rear wheels of the last trailer will off-track the most.

Q\\ Almost half of all truck driver deaths are the result of
O\\ following too closely.
O\\ rollovers.
O\\ speed.
A\\ rollovers.
E\\ More than half of truck driver deaths in crashes are the result of truck rollovers.

Q\\ At night, when a vehicle is carrying a load that extends four feet or more beyond the rear of the body, there must be _______ at the extreme end of the load.
O\\ red flags
O\\ red lights
O\\ a red flag
A\\ red lights
E\\ According to federal regulations, if the load projects more than 4 feet behind the rear of the vehicle, the end of the load must be marked as follows: (1) with red flags, each 18 inches square, in the daytime; or (2) with two red lights at night.

Q\\ In normal driving, some drivers use the hand valve before applying the brake pedal to prevent a jackknife. Which of these statements is true?
O\\ It should not be done
O\\ It results in less skidding than using the brake pedal alone
O\\ It is the best way to brake and keep the truck in a straight line
A\\ It should not be done
E\\ The trailer hand valve, also called the trolley valve or Johnson bar, works the trailer brakes. The trailer hand valve should be used only to test the trailer brakes. Do not use it in driving because of the danger of making the trailer skid.

Q\\ After you supply air to the trailer, make sure the airlines are not crossed and the trailer brakes are working. This can be done by:
O\\ Turning on the parking brakes from the cab
O\\ Applying and releasing the trailer brakes and listening for brake sounds
O\\ Lifting the brake pedal
A\\ Applying and releasing the trailer brakes and listening for brake sounds
E\\ Wait until the air pressure is normal, then shut engine off so you can hear the brakes. Check brake system for crossed air-lines by: applying and releasing trailer brakes and listen for sound of trailer brakes being applied and released. You should hear the brakes move when applied and air escape when the brakes are released.

Q\\ What is the safest way for you to make a turn without entering another traffic lane?
O\\ If you must cross into the oncoming lane to make a turn and you see vehicles coming toward you, stop and back up for them.
O\\ You should turn wide as you complete the turn.
O\\ You should turn wide before you start the turn.
A\\ You should turn wide as you complete the turn.
E\\ If you are driving a truck or bus that cannot make the right turn without swinging into another lane, turn wide as you complete the turn. Keep the rear of your vehicle close to the curb. This will stop other drivers from passing you on the right.

Q\\ Even before antilock braking systems (ABS) were required, some vehicles already had them. How can you check if your vehicle has ABS?
O\\ Look under the vehicle for the ECU and wheel speed sensor wires coming from the back of the brakes.
O\\ Look under the vehicle for the ABS test light.
O\\ Brake the vehicle on a slippery road and see if the wheels lock.
A\\ Look under the vehicle for the ECU and wheel speed sensor wires coming from the back of the brakes.
E\\ It may be difficult to tell if some units are equipped with ABS. Look under the vehicle for the electronic control unit (ECU) and wheel speed sensor wires coming from the back of the brakes.

Q\\ What is the emergency air line?
O\\ Air lines that control the emergency brakes of the tractor
O\\ Air lines connecting the parking brake to the trailer brakes
O\\ Air lines that control the emergency brakes on combination vehicles
A\\ Air lines that control the emergency brakes on combination vehicles
E\\ The emergency line also called the supply line has two purposes. First, it supplies air to the trailer air tanks. Second, the emergency line controls the emergency brakes on combination vehicles

Q\\ You are uncoupling a trailer. After you shut off the trailer air supply and lock the trailer brakes, you should
O\\ begin to lower the trailer landing gear.
O\\ immediately apply your tractor parking brakes.
O\\ back up gently to ease pressure on the fifth wheel locking jaws.
A\\ back up gently to ease pressure on the fifth wheel locking jaws.
E\\ Shut off trailer air supply to lock trailer brakes. Ease pressure on fifth wheel locking jaws by backing up gently, applying the parking brake while tractor is pushing against the kingpin.

Q\\ A tractor with a(n) _______ trailer requires the shortest amount of stopping distance.
O\\ fully loaded
O\\ empty
O\\ lightly loaded
A\\ fully loaded
E\\ The heavier the vehicle, the more work the brakes must do to stop it, and the more heat they absorb. But the brakes, tires, springs, and shock absorbers on heavy vehicles are designed to work best when the vehicle is fully loaded. Empty trucks require greater stopping distances because an empty vehicle has less traction.

Q\\ The tractor protection valve will close and the trailer _______ brakes will come on when there is a major leak in the brake line.
O\\ emergency
O\\ service
O\\ parking
A\\ emergency
E\\ When the tractor protection valve closes, it stops any air from going out of the tractor. It also lets the air out of the trailer emergency line. This causes the trailer emergency brakes to come on

Q\\ You have a major leak in the service line, and you put on the brakes. Service air pressure will escape and cause the:
O\\ Trailer emergency / spring brakes to come on
O\\ Trailer tank pressure to be lost
O\\ Tractor spring brakes to lock on
A\\ Trailer emergency / spring brakes to come on
E\\ You may not notice a major leak in the service line until you try to put the brakes on. Then, the air loss from the leak will lower the air tank pressure quickly. If it goes low enough, the trailer emergency brakes will come on.

Q\\ Semi-trailers made before 1975 that are equipped with air brakes:
O\\ Are easier to brake because they are heavier
O\\ Usually need a glad hand converter
O\\ Often do not have spring brakes
O\\ None of the answers are correct
A\\ Often do not have spring brakes
E\\ Converter dollies and trailers built before 1975 are not required to have spring brakes.

Q\\ How much space should be between the apron and fifth wheel after coupling?
O\\ At lease 1/2 inch
O\\ None
O\\ Just enough to see light through it
A\\ None
E\\ Make sure there is no space between upper and lower fifth wheel. If there is space, something is wrong, the kingpin may be on top of the closed fifth wheel jaws, and trailer would come loose very easily.

Q\\ On a trailer, where is the yellow antilock brake (ABS) malfunction lamp located?
O\\ On the front left or rear left corner
O\\ On the left side and on the front center
O\\ On the right rear corner
A\\ On the front left or rear left corner
E\\ Trailers will have yellow ABS malfunction lamps on the left side, either on the front or rear corner.

Q\\ What are the other names for the service air line?
O\\ Curved line and signal line
O\\ Straight line and control line
O\\ Control line and signal line
A\\ Control line and signal line
E\\ The service line, also called the control line or signal line, carries air controlled by the foot brake or the trailer hand brake.

Q\\ You should not back a tractor under a trailer until the whole air system is
O\\ at normal pressure.
O\\ bled down to half the maximum pressure.
O\\ between 60 and 80 psi.
A\\ at normal pressure.
E\\ Make sure air pressure is up to normal before backing under the trailer.

Q\\ Air and electrical lines from the tractor to the trailer should be
O\\ pulled tight with very little slack.
O\\ secured but with enough slack for turns.
O\\ resting on the frame of the tractor.
A\\ secured but with enough slack for turns.
E\\ Make sure air and electrical lines are not tangled, pinched, dragging against tractor parts, and have enough slack for turns.

Q\\ Which of these statements is true?
O\\ Always delay braking a heavy vehicle until you have no other choice
O\\ Light vehicles need more braking power to stop than heavy ones
O\\ Bobtail tractors can take longer to stop than a combination vehicle loaded to the maximum gross weight
A\\ Bobtail tractors can take longer to stop than a combination vehicle loaded to the maximum gross weight
E\\ Be very careful about driving bobtail tractors or tractors without semitrailers. Tests have shown that bobtails can be very hard to stop smoothly and can take longer to stop than a tractor-semitrailer loaded to maximum gross weight.

Q\\ Which part of the kingpin should the locking jaws close around?
O\\ The shank
O\\ The head
O\\ The base
A\\ The shank
E\\ Go under trailer and investigate the back of the fifth wheel. Make sure the fifth wheel jaws have closed around the shank of the kingpin.

Q\\ Under good driving conditions, you should leave at least one second of space between your vehicle and the vehicle ahead for every ___ feet of your vehicle's length.
O\\ 10
O\\ 30
O\\ 20
A\\ 10
E\\ One good rule says you need at least one second for each 10 feet of vehicle length at speeds below 40 mph. At greater speeds, you must add 1 second for safety.

Q\\ When you get ready to back under the semi-trailer you should line up:
O\\ About 12 degrees off the line of the trailer.
O\\ So that the kingpin engages the driver's side locking jaw first.
O\\ Directly in front of the trailer.
A\\ Directly in front of the trailer.
E\\ Put the tractor directly in front of the trailer. Never back under the trailer at an angle because you might push the trailer sideways and break the landing gear.

Q\\ Air lines on a combination vehicle are often color coded to keep them from getting mixed up. The emergency line is _____; the service line is _____.
O\\ Red, blue
O\\ Black, yellow
O\\ Blue, red
A\\ Red, blue
E\\ Emergency lines are often coded with red (red hose, red couplers, or other parts) to keep from getting them mixed up with the blue service line.

Q\\ Low underneath clearance vehicles can be risky at railroad crossings because
O\\ they are more likely to get stuck on raised railroad crossings.
O\\ they are more likely to jackknife on the uneven ground.
O\\ they may take longer to stop.
A\\ they are more likely to get stuck on raised railroad crossings.
E\\ Railroad tracks can also cause problems, particularly when pulling trailers with a low underneath clearance. Don't take a chance on getting hung up halfway across.

Q\\ After you have coupled the trailer, you should start to raise the landing gear by using
O\\ low gear.
O\\ intermediate gear.
O\\ high gear.
A\\ low gear.
E\\ After the landing gear makes firm contact with the ground, turn crank in low gear a few extra turns. This will lift some weight off the tractor making it easier to unlatch fifth wheel, and to recouple to the trailer.

Q\\ At what angle do you hold your airline glad hands when connecting them?
O\\ 45 degrees
O\\ 90 degrees
O\\ 180 degrees
A\\ 90 degrees
E\\ When connecting the glad hands, press the two seals together with the couplers at a 90-degree angle to each other.

Q\\ If you do not do the final air brake check for air leaks and fix them before driving,
O\\ you could lose your brakes while driving.
O\\ tire pressure will drop.
O\\ your fuel usage will increase.
A\\ you could lose your brakes while driving.
E\\ If the air pressure falls more than the specified psi in one minute for combination vehicles, the air loss rate is too much. Check for air leaks and fix before driving the vehicle. Otherwise, you could lose your brakes while driving.

Q\\ Which type of truck-trailer combination has the greatest chance of a "crack-the-whip" rollover?
O\\ A tractor pulling two trailers
O\\ A single tractor trailer
O\\ A tractor pulling three trailers
A\\ A tractor pulling three trailers
E\\ Triples have a rearward amplification of 3.5. This means you can roll the last trailer of triples 3.5 times as easily as a five-axle tractor. While the rearward amplification of a double is around 2.

Q\\ Compared with a straight truck or bus, there are _______ things to inspect in combination vehicles.
O\\ the same number of
O\\ fewer
O\\ more
A\\ more
E\\ There are more things to inspect on a combination vehicle than on a bus or straight truck. First, of course, there is the entire coupling system: the kingpin, the fifth wheel, etc. Next, there is the landing gear of each trailer. Not to mention a few more axels to check.

Q\\ If the trailer has antilock brakes (ABS) but the tractor doesn't,
O\\ the trailer is more likely to swing out.
O\\ the trailer is still less likely to swing out.
O\\ it doesn't make it any more, or less likely that the trailer will swing out.
A\\ the trailer is still less likely to swing out.
E\\ When only the trailer has ABS, the trailer is less likely to swing out, but if you lose steering control or start a tractor jackknife, let up on the brakes if you can safely do so until you regain control.

Q\\ The safety catch for the fifth wheel locking lever must be _____ for a coupling to be complete.
O\\ Over the locking lever
O\\ Under the locking lever
O\\ Through the locking lever
A\\ Over the locking lever
E\\ Check that the safety latch is in position over locking lever. On some fifth wheels the catch must be put in place by hand.

Q\\ To drive a triple combination vehicle, you must have
O\\ a Class A CDL.
O\\ a Class A CDL with a doubles/triples endorsement.
O\\ a doubles/triples endorsement on your CDL.
A\\ a Class A CDL with a doubles/triples endorsement.
E\\ To legally pull a trailer with a GVWR exceeding 10,000 pounds, you'll need a Class A CDL. To pull triples, the doubles/triples endorsement on your CDL is also required.
`,py=`
Q\\ Question 1
O\\ Option 1.
O\\ Option 2.
O\\ Simulated answer.
A\\ Simulated answer.
E\\ Simulated explanation.
`,my=`
Q\\ Question 1
O\\ Option 1.
O\\ Option 2.
O\\ Simulated answer.
A\\ Simulated answer.
E\\ Simulated explanation.
`,vy=`
Q\\ Question 1
O\\ Option 1.
O\\ Option 2.
O\\ Simulated answer.
A\\ Simulated answer.
E\\ Simulated explanation.
`,by=`
Q\\ Question 1
O\\ Option 1.
O\\ Option 2.
O\\ Simulated answer.
A\\ Simulated answer.
E\\ Simulated explanation.
`,wy=`
Q\\ Question 1
O\\ Option 1.
O\\ Option 2.
O\\ Simulated answer.
A\\ Simulated answer.
E\\ Simulated explanation.
`,ky={general_knowledge:fy,air_brakes:gy,combination:yy,hazardous_materials:py,tanker:my,double_triple_trailers:vy,passenger:by,school_bus:wy},Oy=A=>{var d,M,C;const Y=[],N=A.trim().split(/(?=^Q\\)/m);for(const Z of N){if(Z.trim()==="")continue;const L=Z.trim().split(`
`),E=((d=L.find(V=>V.startsWith("Q\\")))==null?void 0:d.substring(3).trim())??"",w=L.filter(V=>V.startsWith("O\\")).map(V=>V.substring(3).trim()),U=((M=L.find(V=>V.startsWith("A\\")))==null?void 0:M.substring(3).trim())??"",x=((C=L.find(V=>V.startsWith("E\\")))==null?void 0:C.substring(3).trim())??"",ee=w.indexOf(U);E&&w.length>0&&ee!==-1&&Y.push({questionText:E,options:w,correctAnswerIndex:ee,explanation:x||void 0})}return Y},Ay=A=>{for(let Y=A.length-1;Y>0;Y--){const N=Math.floor(Math.random()*(Y+1));[A[Y],A[N]]=[A[N],A[Y]]}return A},Ty=async(A,Y)=>new Promise((N,d)=>{const M=ky[A];if(M===void 0)return d(new Error(`Topic not found: ${A}`));const C=Oy(M),L=Ay([...C]).slice(0,Y);N(L)});var Qt=(A=>(A.NOT_STARTED="not_started",A.LOADING="loading",A.IN_PROGRESS="in_progress",A.FINISHED="finished",A))(Qt||{});const Ey=()=>{const[A,Y]=Be.useState(Qt.NOT_STARTED),[N,d]=Be.useState([]),[M,C]=Be.useState(0),[Z,L]=Be.useState(0),[E,w]=Be.useState([]),[U,x]=Be.useState(!1),[ee,V]=Be.useState(null),[ve,K]=Be.useState(null),[pe,ze]=Be.useState("practice"),_t=Be.useCallback(async(H,Te)=>{x(!0),V(null),Y(Qt.LOADING);const et=Wl.find(Xe=>Xe.id===H);et&&K(et.name);try{await new Promise(dt=>setTimeout(dt,500));const Xe=await Ty(H,Te);if(Xe.length===0)throw new Error("No questions available for this topic. Please add questions to the data file.");d(Xe),Y(Qt.IN_PROGRESS)}catch(Xe){V(Xe.message||"Failed to load quiz questions. Please try again."),Y(Qt.NOT_STARTED),K(null),console.error(Xe)}finally{x(!1)}},[]),De=H=>{H?L(Te=>Te+1):w(Te=>[...Te,N[M]])},Le=()=>{M<N.length-1?C(H=>H+1):Y(Qt.FINISHED)},ct=()=>{Y(Qt.NOT_STARTED),d([]),C(0),L(0),w([]),V(null),K(null)},Re=()=>{switch(A){case Qt.LOADING:return T.jsxs("div",{className:"text-center",children:[T.jsx(dy,{})," ",T.jsx("p",{className:"mt-4 text-lg",children:"Loading your quiz..."})]});case Qt.IN_PROGRESS:return N.length>0&&T.jsx(hy,{question:N[M],onAnswer:De,onNext:Le,questionNumber:M+1,totalQuestions:N.length,quizMode:pe});case Qt.FINISHED:return T.jsx(cy,{score:Z,totalQuestions:N.length,onRestart:ct,wrongAnswers:E,currentTopicName:ve||"CLP Quiz"});case Qt.NOT_STARTED:default:return T.jsx(uy,{onStartQuiz:_t,error:ee,selectedMode:pe,onModeChange:ze})}};return T.jsx("div",{className:"min-h-screen bg-slate-900 flex flex-col items-center justify-center p-4 font-sans",children:T.jsxs("div",{className:"w-full max-w-2xl mx-auto",children:[T.jsxs("header",{className:"text-center mb-8 no-print",children:[T.jsx("h1",{className:"text-4xl md:text-5xl font-bold text-cyan-400 tracking-wider",children:"CLP Quiz"}),ve&&T.jsxs("h2",{className:"text-2xl text-slate-300 mt-2 font-semibold",children:["Current test - ",ve]})]}),T.jsx("main",{className:"bg-slate-800 p-6 sm:p-8 rounded-2xl shadow-2xl shadow-cyan-500/10 border border-slate-700 min-h-[300px] flex items-center justify-center",children:Re()})]})})},Sd=document.getElementById("root");if(!Sd)throw new Error("Could not find root element to mount to");const Sy=sy.createRoot(Sd);Sy.render(T.jsx(ey.StrictMode,{children:T.jsx(Ey,{})}));
