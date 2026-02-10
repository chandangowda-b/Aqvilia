(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))r(d);new MutationObserver(d=>{for(const m of d)if(m.type==="childList")for(const p of m.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&r(p)}).observe(document,{childList:!0,subtree:!0});function l(d){const m={};return d.integrity&&(m.integrity=d.integrity),d.referrerPolicy&&(m.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?m.credentials="include":d.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function r(d){if(d.ep)return;d.ep=!0;const m=l(d);fetch(d.href,m)}})();function iu(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var nd={exports:{}},Nn={};var Gh;function Jv(){if(Gh)return Nn;Gh=1;var i=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function l(r,d,m){var p=null;if(m!==void 0&&(p=""+m),d.key!==void 0&&(p=""+d.key),"key"in d){m={};for(var x in d)x!=="key"&&(m[x]=d[x])}else m=d;return d=m.ref,{$$typeof:i,type:r,key:p,ref:d!==void 0?d:null,props:m}}return Nn.Fragment=s,Nn.jsx=l,Nn.jsxs=l,Nn}var Yh;function $v(){return Yh||(Yh=1,nd.exports=Jv()),nd.exports}var u=$v(),ld={exports:{}},ue={};var Qh;function e1(){if(Qh)return ue;Qh=1;var i=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),p=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),b=Symbol.for("react.activity"),w=Symbol.iterator;function A(T){return T===null||typeof T!="object"?null:(T=w&&T[w]||T["@@iterator"],typeof T=="function"?T:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B=Object.assign,q={};function z(T,U,F){this.props=T,this.context=U,this.refs=q,this.updater=F||E}z.prototype.isReactComponent={},z.prototype.setState=function(T,U){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,U,"setState")},z.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function M(){}M.prototype=z.prototype;function O(T,U,F){this.props=T,this.context=U,this.refs=q,this.updater=F||E}var X=O.prototype=new M;X.constructor=O,B(X,z.prototype),X.isPureReactComponent=!0;var P=Array.isArray;function Y(){}var W={H:null,A:null,T:null,S:null},Q=Object.prototype.hasOwnProperty;function ce(T,U,F){var Z=F.ref;return{$$typeof:i,type:T,key:U,ref:Z!==void 0?Z:null,props:F}}function Te(T,U){return ce(T.type,U,T.props)}function ee(T){return typeof T=="object"&&T!==null&&T.$$typeof===i}function K(T){var U={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(F){return U[F]})}var fe=/\/+/g;function ie(T,U){return typeof T=="object"&&T!==null&&T.key!=null?K(""+T.key):U.toString(36)}function Ee(T){switch(T.status){case"fulfilled":return T.value;case"rejected":throw T.reason;default:switch(typeof T.status=="string"?T.then(Y,Y):(T.status="pending",T.then(function(U){T.status==="pending"&&(T.status="fulfilled",T.value=U)},function(U){T.status==="pending"&&(T.status="rejected",T.reason=U)})),T.status){case"fulfilled":return T.value;case"rejected":throw T.reason}}throw T}function V(T,U,F,Z,ne){var re=typeof T;(re==="undefined"||re==="boolean")&&(T=null);var oe=!1;if(T===null)oe=!0;else switch(re){case"bigint":case"string":case"number":oe=!0;break;case"object":switch(T.$$typeof){case i:case s:oe=!0;break;case y:return oe=T._init,V(oe(T._payload),U,F,Z,ne)}}if(oe)return ne=ne(T),oe=Z===""?"."+ie(T,0):Z,P(ne)?(F="",oe!=null&&(F=oe.replace(fe,"$&/")+"/"),V(ne,U,F,"",function(gt){return gt})):ne!=null&&(ee(ne)&&(ne=Te(ne,F+(ne.key==null||T&&T.key===ne.key?"":(""+ne.key).replace(fe,"$&/")+"/")+oe)),U.push(ne)),1;oe=0;var Se=Z===""?".":Z+":";if(P(T))for(var Ae=0;Ae<T.length;Ae++)Z=T[Ae],re=Se+ie(Z,Ae),oe+=V(Z,U,F,re,ne);else if(Ae=A(T),typeof Ae=="function")for(T=Ae.call(T),Ae=0;!(Z=T.next()).done;)Z=Z.value,re=Se+ie(Z,Ae++),oe+=V(Z,U,F,re,ne);else if(re==="object"){if(typeof T.then=="function")return V(Ee(T),U,F,Z,ne);throw U=String(T),Error("Objects are not valid as a React child (found: "+(U==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":U)+"). If you meant to render a collection of children, use an array instead.")}return oe}function G(T,U,F){if(T==null)return T;var Z=[],ne=0;return V(T,Z,"","",function(re){return U.call(F,re,ne++)}),Z}function J(T){if(T._status===-1){var U=T._result;U=U(),U.then(function(F){(T._status===0||T._status===-1)&&(T._status=1,T._result=F)},function(F){(T._status===0||T._status===-1)&&(T._status=2,T._result=F)}),T._status===-1&&(T._status=0,T._result=U)}if(T._status===1)return T._result.default;throw T._result}var de=typeof reportError=="function"?reportError:function(T){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var U=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof T=="object"&&T!==null&&typeof T.message=="string"?String(T.message):String(T),error:T});if(!window.dispatchEvent(U))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",T);return}console.error(T)},he={map:G,forEach:function(T,U,F){G(T,function(){U.apply(this,arguments)},F)},count:function(T){var U=0;return G(T,function(){U++}),U},toArray:function(T){return G(T,function(U){return U})||[]},only:function(T){if(!ee(T))throw Error("React.Children.only expected to receive a single React element child.");return T}};return ue.Activity=b,ue.Children=he,ue.Component=z,ue.Fragment=l,ue.Profiler=d,ue.PureComponent=O,ue.StrictMode=r,ue.Suspense=h,ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=W,ue.__COMPILER_RUNTIME={__proto__:null,c:function(T){return W.H.useMemoCache(T)}},ue.cache=function(T){return function(){return T.apply(null,arguments)}},ue.cacheSignal=function(){return null},ue.cloneElement=function(T,U,F){if(T==null)throw Error("The argument must be a React element, but you passed "+T+".");var Z=B({},T.props),ne=T.key;if(U!=null)for(re in U.key!==void 0&&(ne=""+U.key),U)!Q.call(U,re)||re==="key"||re==="__self"||re==="__source"||re==="ref"&&U.ref===void 0||(Z[re]=U[re]);var re=arguments.length-2;if(re===1)Z.children=F;else if(1<re){for(var oe=Array(re),Se=0;Se<re;Se++)oe[Se]=arguments[Se+2];Z.children=oe}return ce(T.type,ne,Z)},ue.createContext=function(T){return T={$$typeof:p,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null},T.Provider=T,T.Consumer={$$typeof:m,_context:T},T},ue.createElement=function(T,U,F){var Z,ne={},re=null;if(U!=null)for(Z in U.key!==void 0&&(re=""+U.key),U)Q.call(U,Z)&&Z!=="key"&&Z!=="__self"&&Z!=="__source"&&(ne[Z]=U[Z]);var oe=arguments.length-2;if(oe===1)ne.children=F;else if(1<oe){for(var Se=Array(oe),Ae=0;Ae<oe;Ae++)Se[Ae]=arguments[Ae+2];ne.children=Se}if(T&&T.defaultProps)for(Z in oe=T.defaultProps,oe)ne[Z]===void 0&&(ne[Z]=oe[Z]);return ce(T,re,ne)},ue.createRef=function(){return{current:null}},ue.forwardRef=function(T){return{$$typeof:x,render:T}},ue.isValidElement=ee,ue.lazy=function(T){return{$$typeof:y,_payload:{_status:-1,_result:T},_init:J}},ue.memo=function(T,U){return{$$typeof:g,type:T,compare:U===void 0?null:U}},ue.startTransition=function(T){var U=W.T,F={};W.T=F;try{var Z=T(),ne=W.S;ne!==null&&ne(F,Z),typeof Z=="object"&&Z!==null&&typeof Z.then=="function"&&Z.then(Y,de)}catch(re){de(re)}finally{U!==null&&F.types!==null&&(U.types=F.types),W.T=U}},ue.unstable_useCacheRefresh=function(){return W.H.useCacheRefresh()},ue.use=function(T){return W.H.use(T)},ue.useActionState=function(T,U,F){return W.H.useActionState(T,U,F)},ue.useCallback=function(T,U){return W.H.useCallback(T,U)},ue.useContext=function(T){return W.H.useContext(T)},ue.useDebugValue=function(){},ue.useDeferredValue=function(T,U){return W.H.useDeferredValue(T,U)},ue.useEffect=function(T,U){return W.H.useEffect(T,U)},ue.useEffectEvent=function(T){return W.H.useEffectEvent(T)},ue.useId=function(){return W.H.useId()},ue.useImperativeHandle=function(T,U,F){return W.H.useImperativeHandle(T,U,F)},ue.useInsertionEffect=function(T,U){return W.H.useInsertionEffect(T,U)},ue.useLayoutEffect=function(T,U){return W.H.useLayoutEffect(T,U)},ue.useMemo=function(T,U){return W.H.useMemo(T,U)},ue.useOptimistic=function(T,U){return W.H.useOptimistic(T,U)},ue.useReducer=function(T,U,F){return W.H.useReducer(T,U,F)},ue.useRef=function(T){return W.H.useRef(T)},ue.useState=function(T){return W.H.useState(T)},ue.useSyncExternalStore=function(T,U,F){return W.H.useSyncExternalStore(T,U,F)},ue.useTransition=function(){return W.H.useTransition()},ue.version="19.2.3",ue}var Fh;function su(){return Fh||(Fh=1,ld.exports=e1()),ld.exports}var j=su();const ri=iu(j);var rd={exports:{}},Dn={},od={exports:{}},cd={};var Kh;function t1(){return Kh||(Kh=1,(function(i){function s(V,G){var J=V.length;V.push(G);e:for(;0<J;){var de=J-1>>>1,he=V[de];if(0<d(he,G))V[de]=G,V[J]=he,J=de;else break e}}function l(V){return V.length===0?null:V[0]}function r(V){if(V.length===0)return null;var G=V[0],J=V.pop();if(J!==G){V[0]=J;e:for(var de=0,he=V.length,T=he>>>1;de<T;){var U=2*(de+1)-1,F=V[U],Z=U+1,ne=V[Z];if(0>d(F,J))Z<he&&0>d(ne,F)?(V[de]=ne,V[Z]=J,de=Z):(V[de]=F,V[U]=J,de=U);else if(Z<he&&0>d(ne,J))V[de]=ne,V[Z]=J,de=Z;else break e}}return G}function d(V,G){var J=V.sortIndex-G.sortIndex;return J!==0?J:V.id-G.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;i.unstable_now=function(){return m.now()}}else{var p=Date,x=p.now();i.unstable_now=function(){return p.now()-x}}var h=[],g=[],y=1,b=null,w=3,A=!1,E=!1,B=!1,q=!1,z=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function X(V){for(var G=l(g);G!==null;){if(G.callback===null)r(g);else if(G.startTime<=V)r(g),G.sortIndex=G.expirationTime,s(h,G);else break;G=l(g)}}function P(V){if(B=!1,X(V),!E)if(l(h)!==null)E=!0,Y||(Y=!0,K());else{var G=l(g);G!==null&&Ee(P,G.startTime-V)}}var Y=!1,W=-1,Q=5,ce=-1;function Te(){return q?!0:!(i.unstable_now()-ce<Q)}function ee(){if(q=!1,Y){var V=i.unstable_now();ce=V;var G=!0;try{e:{E=!1,B&&(B=!1,M(W),W=-1),A=!0;var J=w;try{t:{for(X(V),b=l(h);b!==null&&!(b.expirationTime>V&&Te());){var de=b.callback;if(typeof de=="function"){b.callback=null,w=b.priorityLevel;var he=de(b.expirationTime<=V);if(V=i.unstable_now(),typeof he=="function"){b.callback=he,X(V),G=!0;break t}b===l(h)&&r(h),X(V)}else r(h);b=l(h)}if(b!==null)G=!0;else{var T=l(g);T!==null&&Ee(P,T.startTime-V),G=!1}}break e}finally{b=null,w=J,A=!1}G=void 0}}finally{G?K():Y=!1}}}var K;if(typeof O=="function")K=function(){O(ee)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,ie=fe.port2;fe.port1.onmessage=ee,K=function(){ie.postMessage(null)}}else K=function(){z(ee,0)};function Ee(V,G){W=z(function(){V(i.unstable_now())},G)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(V){V.callback=null},i.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<V?Math.floor(1e3/V):5},i.unstable_getCurrentPriorityLevel=function(){return w},i.unstable_next=function(V){switch(w){case 1:case 2:case 3:var G=3;break;default:G=w}var J=w;w=G;try{return V()}finally{w=J}},i.unstable_requestPaint=function(){q=!0},i.unstable_runWithPriority=function(V,G){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var J=w;w=V;try{return G()}finally{w=J}},i.unstable_scheduleCallback=function(V,G,J){var de=i.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?de+J:de):J=de,V){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=J+he,V={id:y++,callback:G,priorityLevel:V,startTime:J,expirationTime:he,sortIndex:-1},J>de?(V.sortIndex=J,s(g,V),l(h)===null&&V===l(g)&&(B?(M(W),W=-1):B=!0,Ee(P,J-de))):(V.sortIndex=he,s(h,V),E||A||(E=!0,Y||(Y=!0,K()))),V},i.unstable_shouldYield=Te,i.unstable_wrapCallback=function(V){var G=w;return function(){var J=w;w=G;try{return V.apply(this,arguments)}finally{w=J}}}})(cd)),cd}var Xh;function a1(){return Xh||(Xh=1,od.exports=t1()),od.exports}var dd={exports:{}},mt={};var Wh;function i1(){if(Wh)return mt;Wh=1;var i=su();function s(h){var g="https://react.dev/errors/"+h;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)g+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+h+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(){}var r={d:{f:l,r:function(){throw Error(s(522))},D:l,C:l,L:l,m:l,X:l,S:l,M:l},p:0,findDOMNode:null},d=Symbol.for("react.portal");function m(h,g,y){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:b==null?null:""+b,children:h,containerInfo:g,implementation:y}}var p=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function x(h,g){if(h==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return mt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,mt.createPortal=function(h,g){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(s(299));return m(h,g,null,y)},mt.flushSync=function(h){var g=p.T,y=r.p;try{if(p.T=null,r.p=2,h)return h()}finally{p.T=g,r.p=y,r.d.f()}},mt.preconnect=function(h,g){typeof h=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,r.d.C(h,g))},mt.prefetchDNS=function(h){typeof h=="string"&&r.d.D(h)},mt.preinit=function(h,g){if(typeof h=="string"&&g&&typeof g.as=="string"){var y=g.as,b=x(y,g.crossOrigin),w=typeof g.integrity=="string"?g.integrity:void 0,A=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;y==="style"?r.d.S(h,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:b,integrity:w,fetchPriority:A}):y==="script"&&r.d.X(h,{crossOrigin:b,integrity:w,fetchPriority:A,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},mt.preinitModule=function(h,g){if(typeof h=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var y=x(g.as,g.crossOrigin);r.d.M(h,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&r.d.M(h)},mt.preload=function(h,g){if(typeof h=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var y=g.as,b=x(y,g.crossOrigin);r.d.L(h,y,{crossOrigin:b,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},mt.preloadModule=function(h,g){if(typeof h=="string")if(g){var y=x(g.as,g.crossOrigin);r.d.m(h,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else r.d.m(h)},mt.requestFormReset=function(h){r.d.r(h)},mt.unstable_batchedUpdates=function(h,g){return h(g)},mt.useFormState=function(h,g,y){return p.H.useFormState(h,g,y)},mt.useFormStatus=function(){return p.H.useHostTransitionStatus()},mt.version="19.2.3",mt}var Zh;function s1(){if(Zh)return dd.exports;Zh=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(s){console.error(s)}}return i(),dd.exports=i1(),dd.exports}var Jh;function n1(){if(Jh)return Dn;Jh=1;var i=a1(),s=su(),l=s1();function r(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function m(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function p(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function x(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function h(e){if(m(e)!==e)throw Error(r(188))}function g(e){var t=e.alternate;if(!t){if(t=m(e),t===null)throw Error(r(188));return t!==e?null:e}for(var a=e,n=t;;){var o=a.return;if(o===null)break;var c=o.alternate;if(c===null){if(n=o.return,n!==null){a=n;continue}break}if(o.child===c.child){for(c=o.child;c;){if(c===a)return h(o),e;if(c===n)return h(o),t;c=c.sibling}throw Error(r(188))}if(a.return!==n.return)a=o,n=c;else{for(var f=!1,v=o.child;v;){if(v===a){f=!0,a=o,n=c;break}if(v===n){f=!0,n=o,a=c;break}v=v.sibling}if(!f){for(v=c.child;v;){if(v===a){f=!0,a=c,n=o;break}if(v===n){f=!0,n=c,a=o;break}v=v.sibling}if(!f)throw Error(r(189))}}if(a.alternate!==n)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:t}function y(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=y(e),t!==null)return t;e=e.sibling}return null}var b=Object.assign,w=Symbol.for("react.element"),A=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),B=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),z=Symbol.for("react.profiler"),M=Symbol.for("react.consumer"),O=Symbol.for("react.context"),X=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),Y=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),ce=Symbol.for("react.activity"),Te=Symbol.for("react.memo_cache_sentinel"),ee=Symbol.iterator;function K(e){return e===null||typeof e!="object"?null:(e=ee&&e[ee]||e["@@iterator"],typeof e=="function"?e:null)}var fe=Symbol.for("react.client.reference");function ie(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===fe?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case B:return"Fragment";case z:return"Profiler";case q:return"StrictMode";case P:return"Suspense";case Y:return"SuspenseList";case ce:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case O:return e.displayName||"Context";case M:return(e._context.displayName||"Context")+".Consumer";case X:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case W:return t=e.displayName||null,t!==null?t:ie(e.type)||"Memo";case Q:t=e._payload,e=e._init;try{return ie(e(t))}catch{}}return null}var Ee=Array.isArray,V=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J={pending:!1,data:null,method:null,action:null},de=[],he=-1;function T(e){return{current:e}}function U(e){0>he||(e.current=de[he],de[he]=null,he--)}function F(e,t){he++,de[he]=e.current,e.current=t}var Z=T(null),ne=T(null),re=T(null),oe=T(null);function Se(e,t){switch(F(re,t),F(ne,e),F(Z,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?ph(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=ph(t),e=fh(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}U(Z),F(Z,e)}function Ae(){U(Z),U(ne),U(re)}function gt(e){e.memoizedState!==null&&F(oe,e);var t=Z.current,a=fh(t,e.type);t!==a&&(F(ne,e),F(Z,a))}function Tt(e){ne.current===e&&(U(Z),U(ne)),oe.current===e&&(U(oe),Tn._currentValue=J)}var jt,qe;function be(e){if(jt===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);jt=t&&t[1]||"",qe=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+jt+e+qe}var it=!1;function Ht(e,t){if(!e||it)return"";it=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var _=function(){throw Error()};if(Object.defineProperty(_.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_,[])}catch(L){var R=L}Reflect.construct(e,[],_)}else{try{_.call()}catch(L){R=L}e.call(_.prototype)}}else{try{throw Error()}catch(L){R=L}(_=e())&&typeof _.catch=="function"&&_.catch(function(){})}}catch(L){if(L&&R&&typeof L.stack=="string")return[L.stack,R.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=n.DetermineComponentFrameRoot(),f=c[0],v=c[1];if(f&&v){var S=f.split(`
`),k=v.split(`
`);for(o=n=0;n<S.length&&!S[n].includes("DetermineComponentFrameRoot");)n++;for(;o<k.length&&!k[o].includes("DetermineComponentFrameRoot");)o++;if(n===S.length||o===k.length)for(n=S.length-1,o=k.length-1;1<=n&&0<=o&&S[n]!==k[o];)o--;for(;1<=n&&0<=o;n--,o--)if(S[n]!==k[o]){if(n!==1||o!==1)do if(n--,o--,0>o||S[n]!==k[o]){var H=`
`+S[n].replace(" at new "," at ");return e.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",e.displayName)),H}while(1<=n&&0<=o);break}}}finally{it=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?be(a):""}function $n(e,t){switch(e.tag){case 26:case 27:case 5:return be(e.type);case 16:return be("Lazy");case 13:return e.child!==t&&t!==null?be("Suspense Fallback"):be("Suspense");case 19:return be("SuspenseList");case 0:case 15:return Ht(e.type,!1);case 11:return Ht(e.type.render,!1);case 1:return Ht(e.type,!0);case 31:return be("Activity");default:return""}}function _u(e){try{var t="",a=null;do t+=$n(e,a),a=e,e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var _r=Object.prototype.hasOwnProperty,Gr=i.unstable_scheduleCallback,Yr=i.unstable_cancelCallback,Dy=i.unstable_shouldYield,ky=i.unstable_requestPaint,Mt=i.unstable_now,Ry=i.unstable_getCurrentPriorityLevel,Gu=i.unstable_ImmediatePriority,Yu=i.unstable_UserBlockingPriority,el=i.unstable_NormalPriority,By=i.unstable_LowPriority,Qu=i.unstable_IdlePriority,zy=i.log,Ly=i.unstable_setDisableYieldValue,Os=null,Et=null;function za(e){if(typeof zy=="function"&&Ly(e),Et&&typeof Et.setStrictMode=="function")try{Et.setStrictMode(Os,e)}catch{}}var Nt=Math.clz32?Math.clz32:Vy,Oy=Math.log,qy=Math.LN2;function Vy(e){return e>>>=0,e===0?32:31-(Oy(e)/qy|0)|0}var tl=256,al=262144,il=4194304;function ui(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function sl(e,t,a){var n=e.pendingLanes;if(n===0)return 0;var o=0,c=e.suspendedLanes,f=e.pingedLanes;e=e.warmLanes;var v=n&134217727;return v!==0?(n=v&~c,n!==0?o=ui(n):(f&=v,f!==0?o=ui(f):a||(a=v&~e,a!==0&&(o=ui(a))))):(v=n&~c,v!==0?o=ui(v):f!==0?o=ui(f):a||(a=n&~e,a!==0&&(o=ui(a)))),o===0?0:t!==0&&t!==o&&(t&c)===0&&(c=o&-o,a=t&-t,c>=a||c===32&&(a&4194048)!==0)?t:o}function qs(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Hy(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fu(){var e=il;return il<<=1,(il&62914560)===0&&(il=4194304),e}function Qr(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Vs(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Py(e,t,a,n,o,c){var f=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var v=e.entanglements,S=e.expirationTimes,k=e.hiddenUpdates;for(a=f&~a;0<a;){var H=31-Nt(a),_=1<<H;v[H]=0,S[H]=-1;var R=k[H];if(R!==null)for(k[H]=null,H=0;H<R.length;H++){var L=R[H];L!==null&&(L.lane&=-536870913)}a&=~_}n!==0&&Ku(e,n,0),c!==0&&o===0&&e.tag!==0&&(e.suspendedLanes|=c&~(f&~t))}function Ku(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-Nt(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|a&261930}function Xu(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var n=31-Nt(a),o=1<<n;o&t|e[n]&t&&(e[n]|=t),a&=~o}}function Wu(e,t){var a=t&-t;return a=(a&42)!==0?1:Fr(a),(a&(e.suspendedLanes|t))!==0?0:a}function Fr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Kr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Zu(){var e=G.p;return e!==0?e:(e=window.event,e===void 0?32:qh(e.type))}function Ju(e,t){var a=G.p;try{return G.p=e,t()}finally{G.p=a}}var La=Math.random().toString(36).slice(2),lt="__reactFiber$"+La,xt="__reactProps$"+La,Oi="__reactContainer$"+La,Xr="__reactEvents$"+La,Iy="__reactListeners$"+La,Uy="__reactHandles$"+La,$u="__reactResources$"+La,Hs="__reactMarker$"+La;function Wr(e){delete e[lt],delete e[xt],delete e[Xr],delete e[Iy],delete e[Uy]}function qi(e){var t=e[lt];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Oi]||a[lt]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=wh(e);e!==null;){if(a=e[lt])return a;e=wh(e)}return t}e=a,a=e.parentNode}return null}function Vi(e){if(e=e[lt]||e[Oi]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ps(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(r(33))}function Hi(e){var t=e[$u];return t||(t=e[$u]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function st(e){e[Hs]=!0}var em=new Set,tm={};function mi(e,t){Pi(e,t),Pi(e+"Capture",t)}function Pi(e,t){for(tm[e]=t,e=0;e<t.length;e++)em.add(t[e])}var _y=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),am={},im={};function Gy(e){return _r.call(im,e)?!0:_r.call(am,e)?!1:_y.test(e)?im[e]=!0:(am[e]=!0,!1)}function nl(e,t,a){if(Gy(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function ll(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function ma(e,t,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+n)}}function Pt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function sm(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Yy(e,t,a){var n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,c=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(f){a=""+f,c.call(this,f)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(f){a=""+f},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Zr(e){if(!e._valueTracker){var t=sm(e)?"checked":"value";e._valueTracker=Yy(e,t,""+e[t])}}function nm(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),n="";return e&&(n=sm(e)?e.checked?"true":"false":e.value),e=n,e!==a?(t.setValue(e),!0):!1}function rl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Qy=/[\n"\\]/g;function It(e){return e.replace(Qy,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Jr(e,t,a,n,o,c,f,v){e.name="",f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.type=f:e.removeAttribute("type"),t!=null?f==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Pt(t)):e.value!==""+Pt(t)&&(e.value=""+Pt(t)):f!=="submit"&&f!=="reset"||e.removeAttribute("value"),t!=null?$r(e,f,Pt(t)):a!=null?$r(e,f,Pt(a)):n!=null&&e.removeAttribute("value"),o==null&&c!=null&&(e.defaultChecked=!!c),o!=null&&(e.checked=o&&typeof o!="function"&&typeof o!="symbol"),v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.name=""+Pt(v):e.removeAttribute("name")}function lm(e,t,a,n,o,c,f,v){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.type=c),t!=null||a!=null){if(!(c!=="submit"&&c!=="reset"||t!=null)){Zr(e);return}a=a!=null?""+Pt(a):"",t=t!=null?""+Pt(t):a,v||t===e.value||(e.value=t),e.defaultValue=t}n=n??o,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=v?e.checked:!!n,e.defaultChecked=!!n,f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.name=f),Zr(e)}function $r(e,t,a){t==="number"&&rl(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Ii(e,t,a,n){if(e=e.options,t){t={};for(var o=0;o<a.length;o++)t["$"+a[o]]=!0;for(a=0;a<e.length;a++)o=t.hasOwnProperty("$"+e[a].value),e[a].selected!==o&&(e[a].selected=o),o&&n&&(e[a].defaultSelected=!0)}else{for(a=""+Pt(a),t=null,o=0;o<e.length;o++){if(e[o].value===a){e[o].selected=!0,n&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function rm(e,t,a){if(t!=null&&(t=""+Pt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Pt(a):""}function om(e,t,a,n){if(t==null){if(n!=null){if(a!=null)throw Error(r(92));if(Ee(n)){if(1<n.length)throw Error(r(93));n=n[0]}a=n}a==null&&(a=""),t=a}a=Pt(t),e.defaultValue=a,n=e.textContent,n===a&&n!==""&&n!==null&&(e.value=n),Zr(e)}function Ui(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Fy=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function cm(e,t,a){var n=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,a):typeof a!="number"||a===0||Fy.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function dm(e,t,a){if(t!=null&&typeof t!="object")throw Error(r(62));if(e=e.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var o in t)n=t[o],t.hasOwnProperty(o)&&a[o]!==n&&cm(e,o,n)}else for(var c in t)t.hasOwnProperty(c)&&cm(e,c,t[c])}function eo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ky=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Xy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ol(e){return Xy.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function pa(){}var to=null;function ao(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var _i=null,Gi=null;function um(e){var t=Vi(e);if(t&&(e=t.stateNode)){var a=e[xt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Jr(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+It(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var n=a[t];if(n!==e&&n.form===e.form){var o=n[xt]||null;if(!o)throw Error(r(90));Jr(n,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(t=0;t<a.length;t++)n=a[t],n.form===e.form&&nm(n)}break e;case"textarea":rm(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Ii(e,!!a.multiple,t,!1)}}}var io=!1;function mm(e,t,a){if(io)return e(t,a);io=!0;try{var n=e(t);return n}finally{if(io=!1,(_i!==null||Gi!==null)&&(Xl(),_i&&(t=_i,e=Gi,Gi=_i=null,um(t),e)))for(t=0;t<e.length;t++)um(e[t])}}function Is(e,t){var a=e.stateNode;if(a===null)return null;var n=a[xt]||null;if(n===null)return null;a=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,t,typeof a));return a}var fa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),so=!1;if(fa)try{var Us={};Object.defineProperty(Us,"passive",{get:function(){so=!0}}),window.addEventListener("test",Us,Us),window.removeEventListener("test",Us,Us)}catch{so=!1}var Oa=null,no=null,cl=null;function pm(){if(cl)return cl;var e,t=no,a=t.length,n,o="value"in Oa?Oa.value:Oa.textContent,c=o.length;for(e=0;e<a&&t[e]===o[e];e++);var f=a-e;for(n=1;n<=f&&t[a-n]===o[c-n];n++);return cl=o.slice(e,1<n?1-n:void 0)}function dl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ul(){return!0}function fm(){return!1}function yt(e){function t(a,n,o,c,f){this._reactName=a,this._targetInst=o,this.type=n,this.nativeEvent=c,this.target=f,this.currentTarget=null;for(var v in e)e.hasOwnProperty(v)&&(a=e[v],this[v]=a?a(c):c[v]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?ul:fm,this.isPropagationStopped=fm,this}return b(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ul)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ul)},persist:function(){},isPersistent:ul}),t}var pi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ml=yt(pi),_s=b({},pi,{view:0,detail:0}),Wy=yt(_s),lo,ro,Gs,pl=b({},_s,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:co,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Gs&&(Gs&&e.type==="mousemove"?(lo=e.screenX-Gs.screenX,ro=e.screenY-Gs.screenY):ro=lo=0,Gs=e),lo)},movementY:function(e){return"movementY"in e?e.movementY:ro}}),hm=yt(pl),Zy=b({},pl,{dataTransfer:0}),Jy=yt(Zy),$y=b({},_s,{relatedTarget:0}),oo=yt($y),eb=b({},pi,{animationName:0,elapsedTime:0,pseudoElement:0}),tb=yt(eb),ab=b({},pi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ib=yt(ab),sb=b({},pi,{data:0}),gm=yt(sb),nb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ob(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=rb[e])?!!t[e]:!1}function co(){return ob}var cb=b({},_s,{key:function(e){if(e.key){var t=nb[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=dl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?lb[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:co,charCode:function(e){return e.type==="keypress"?dl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?dl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),db=yt(cb),ub=b({},pl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xm=yt(ub),mb=b({},_s,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:co}),pb=yt(mb),fb=b({},pi,{propertyName:0,elapsedTime:0,pseudoElement:0}),hb=yt(fb),gb=b({},pl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),xb=yt(gb),yb=b({},pi,{newState:0,oldState:0}),bb=yt(yb),vb=[9,13,27,32],uo=fa&&"CompositionEvent"in window,Ys=null;fa&&"documentMode"in document&&(Ys=document.documentMode);var wb=fa&&"TextEvent"in window&&!Ys,ym=fa&&(!uo||Ys&&8<Ys&&11>=Ys),bm=" ",vm=!1;function wm(e,t){switch(e){case"keyup":return vb.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Yi=!1;function Sb(e,t){switch(e){case"compositionend":return Sm(t);case"keypress":return t.which!==32?null:(vm=!0,bm);case"textInput":return e=t.data,e===bm&&vm?null:e;default:return null}}function Ab(e,t){if(Yi)return e==="compositionend"||!uo&&wm(e,t)?(e=pm(),cl=no=Oa=null,Yi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ym&&t.locale!=="ko"?null:t.data;default:return null}}var Cb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Am(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Cb[e.type]:t==="textarea"}function Cm(e,t,a,n){_i?Gi?Gi.push(n):Gi=[n]:_i=n,t=ar(t,"onChange"),0<t.length&&(a=new ml("onChange","change",null,a,n),e.push({event:a,listeners:t}))}var Qs=null,Fs=null;function Tb(e){rh(e,0)}function fl(e){var t=Ps(e);if(nm(t))return e}function Tm(e,t){if(e==="change")return t}var jm=!1;if(fa){var mo;if(fa){var po="oninput"in document;if(!po){var Mm=document.createElement("div");Mm.setAttribute("oninput","return;"),po=typeof Mm.oninput=="function"}mo=po}else mo=!1;jm=mo&&(!document.documentMode||9<document.documentMode)}function Em(){Qs&&(Qs.detachEvent("onpropertychange",Nm),Fs=Qs=null)}function Nm(e){if(e.propertyName==="value"&&fl(Fs)){var t=[];Cm(t,Fs,e,ao(e)),mm(Tb,t)}}function jb(e,t,a){e==="focusin"?(Em(),Qs=t,Fs=a,Qs.attachEvent("onpropertychange",Nm)):e==="focusout"&&Em()}function Mb(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return fl(Fs)}function Eb(e,t){if(e==="click")return fl(t)}function Nb(e,t){if(e==="input"||e==="change")return fl(t)}function Db(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Dt=typeof Object.is=="function"?Object.is:Db;function Ks(e,t){if(Dt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var o=a[n];if(!_r.call(t,o)||!Dt(e[o],t[o]))return!1}return!0}function Dm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function km(e,t){var a=Dm(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Dm(a)}}function Rm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Rm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Bm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=rl(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=rl(e.document)}return t}function fo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var kb=fa&&"documentMode"in document&&11>=document.documentMode,Qi=null,ho=null,Xs=null,go=!1;function zm(e,t,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;go||Qi==null||Qi!==rl(n)||(n=Qi,"selectionStart"in n&&fo(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Xs&&Ks(Xs,n)||(Xs=n,n=ar(ho,"onSelect"),0<n.length&&(t=new ml("onSelect","select",null,t,a),e.push({event:t,listeners:n}),t.target=Qi)))}function fi(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Fi={animationend:fi("Animation","AnimationEnd"),animationiteration:fi("Animation","AnimationIteration"),animationstart:fi("Animation","AnimationStart"),transitionrun:fi("Transition","TransitionRun"),transitionstart:fi("Transition","TransitionStart"),transitioncancel:fi("Transition","TransitionCancel"),transitionend:fi("Transition","TransitionEnd")},xo={},Lm={};fa&&(Lm=document.createElement("div").style,"AnimationEvent"in window||(delete Fi.animationend.animation,delete Fi.animationiteration.animation,delete Fi.animationstart.animation),"TransitionEvent"in window||delete Fi.transitionend.transition);function hi(e){if(xo[e])return xo[e];if(!Fi[e])return e;var t=Fi[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Lm)return xo[e]=t[a];return e}var Om=hi("animationend"),qm=hi("animationiteration"),Vm=hi("animationstart"),Rb=hi("transitionrun"),Bb=hi("transitionstart"),zb=hi("transitioncancel"),Hm=hi("transitionend"),Pm=new Map,yo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");yo.push("scrollEnd");function $t(e,t){Pm.set(e,t),mi(t,[e])}var hl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ut=[],Ki=0,bo=0;function gl(){for(var e=Ki,t=bo=Ki=0;t<e;){var a=Ut[t];Ut[t++]=null;var n=Ut[t];Ut[t++]=null;var o=Ut[t];Ut[t++]=null;var c=Ut[t];if(Ut[t++]=null,n!==null&&o!==null){var f=n.pending;f===null?o.next=o:(o.next=f.next,f.next=o),n.pending=o}c!==0&&Im(a,o,c)}}function xl(e,t,a,n){Ut[Ki++]=e,Ut[Ki++]=t,Ut[Ki++]=a,Ut[Ki++]=n,bo|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function vo(e,t,a,n){return xl(e,t,a,n),yl(e)}function gi(e,t){return xl(e,null,null,t),yl(e)}function Im(e,t,a){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a);for(var o=!1,c=e.return;c!==null;)c.childLanes|=a,n=c.alternate,n!==null&&(n.childLanes|=a),c.tag===22&&(e=c.stateNode,e===null||e._visibility&1||(o=!0)),e=c,c=c.return;return e.tag===3?(c=e.stateNode,o&&t!==null&&(o=31-Nt(a),e=c.hiddenUpdates,n=e[o],n===null?e[o]=[t]:n.push(t),t.lane=a|536870912),c):null}function yl(e){if(50<yn)throw yn=0,Nc=null,Error(r(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Xi={};function Lb(e,t,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kt(e,t,a,n){return new Lb(e,t,a,n)}function wo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ha(e,t){var a=e.alternate;return a===null?(a=kt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Um(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function bl(e,t,a,n,o,c){var f=0;if(n=e,typeof e=="function")wo(e)&&(f=1);else if(typeof e=="string")f=Pv(e,a,Z.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ce:return e=kt(31,a,t,o),e.elementType=ce,e.lanes=c,e;case B:return xi(a.children,o,c,t);case q:f=8,o|=24;break;case z:return e=kt(12,a,t,o|2),e.elementType=z,e.lanes=c,e;case P:return e=kt(13,a,t,o),e.elementType=P,e.lanes=c,e;case Y:return e=kt(19,a,t,o),e.elementType=Y,e.lanes=c,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case O:f=10;break e;case M:f=9;break e;case X:f=11;break e;case W:f=14;break e;case Q:f=16,n=null;break e}f=29,a=Error(r(130,e===null?"null":typeof e,"")),n=null}return t=kt(f,a,t,o),t.elementType=e,t.type=n,t.lanes=c,t}function xi(e,t,a,n){return e=kt(7,e,n,t),e.lanes=a,e}function So(e,t,a){return e=kt(6,e,null,t),e.lanes=a,e}function _m(e){var t=kt(18,null,null,0);return t.stateNode=e,t}function Ao(e,t,a){return t=kt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Gm=new WeakMap;function _t(e,t){if(typeof e=="object"&&e!==null){var a=Gm.get(e);return a!==void 0?a:(t={value:e,source:t,stack:_u(t)},Gm.set(e,t),t)}return{value:e,source:t,stack:_u(t)}}var Wi=[],Zi=0,vl=null,Ws=0,Gt=[],Yt=0,qa=null,na=1,la="";function ga(e,t){Wi[Zi++]=Ws,Wi[Zi++]=vl,vl=e,Ws=t}function Ym(e,t,a){Gt[Yt++]=na,Gt[Yt++]=la,Gt[Yt++]=qa,qa=e;var n=na;e=la;var o=32-Nt(n)-1;n&=~(1<<o),a+=1;var c=32-Nt(t)+o;if(30<c){var f=o-o%5;c=(n&(1<<f)-1).toString(32),n>>=f,o-=f,na=1<<32-Nt(t)+o|a<<o|n,la=c+e}else na=1<<c|a<<o|n,la=e}function Co(e){e.return!==null&&(ga(e,1),Ym(e,1,0))}function To(e){for(;e===vl;)vl=Wi[--Zi],Wi[Zi]=null,Ws=Wi[--Zi],Wi[Zi]=null;for(;e===qa;)qa=Gt[--Yt],Gt[Yt]=null,la=Gt[--Yt],Gt[Yt]=null,na=Gt[--Yt],Gt[Yt]=null}function Qm(e,t){Gt[Yt++]=na,Gt[Yt++]=la,Gt[Yt++]=qa,na=t.id,la=t.overflow,qa=e}var rt=null,Ve=null,Ce=!1,Va=null,Qt=!1,jo=Error(r(519));function Ha(e){var t=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Zs(_t(t,e)),jo}function Fm(e){var t=e.stateNode,a=e.type,n=e.memoizedProps;switch(t[lt]=e,t[xt]=n,a){case"dialog":ye("cancel",t),ye("close",t);break;case"iframe":case"object":case"embed":ye("load",t);break;case"video":case"audio":for(a=0;a<vn.length;a++)ye(vn[a],t);break;case"source":ye("error",t);break;case"img":case"image":case"link":ye("error",t),ye("load",t);break;case"details":ye("toggle",t);break;case"input":ye("invalid",t),lm(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":ye("invalid",t);break;case"textarea":ye("invalid",t),om(t,n.value,n.defaultValue,n.children)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||n.suppressHydrationWarning===!0||uh(t.textContent,a)?(n.popover!=null&&(ye("beforetoggle",t),ye("toggle",t)),n.onScroll!=null&&ye("scroll",t),n.onScrollEnd!=null&&ye("scrollend",t),n.onClick!=null&&(t.onclick=pa),t=!0):t=!1,t||Ha(e,!0)}function Km(e){for(rt=e.return;rt;)switch(rt.tag){case 5:case 31:case 13:Qt=!1;return;case 27:case 3:Qt=!0;return;default:rt=rt.return}}function Ji(e){if(e!==rt)return!1;if(!Ce)return Km(e),Ce=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Gc(e.type,e.memoizedProps)),a=!a),a&&Ve&&Ha(e),Km(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Ve=vh(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Ve=vh(e)}else t===27?(t=Ve,$a(e.type)?(e=Xc,Xc=null,Ve=e):Ve=t):Ve=rt?Kt(e.stateNode.nextSibling):null;return!0}function yi(){Ve=rt=null,Ce=!1}function Mo(){var e=Va;return e!==null&&(St===null?St=e:St.push.apply(St,e),Va=null),e}function Zs(e){Va===null?Va=[e]:Va.push(e)}var Eo=T(null),bi=null,xa=null;function Pa(e,t,a){F(Eo,t._currentValue),t._currentValue=a}function ya(e){e._currentValue=Eo.current,U(Eo)}function No(e,t,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===a)break;e=e.return}}function Do(e,t,a,n){var o=e.child;for(o!==null&&(o.return=e);o!==null;){var c=o.dependencies;if(c!==null){var f=o.child;c=c.firstContext;e:for(;c!==null;){var v=c;c=o;for(var S=0;S<t.length;S++)if(v.context===t[S]){c.lanes|=a,v=c.alternate,v!==null&&(v.lanes|=a),No(c.return,a,e),n||(f=null);break e}c=v.next}}else if(o.tag===18){if(f=o.return,f===null)throw Error(r(341));f.lanes|=a,c=f.alternate,c!==null&&(c.lanes|=a),No(f,a,e),f=null}else f=o.child;if(f!==null)f.return=o;else for(f=o;f!==null;){if(f===e){f=null;break}if(o=f.sibling,o!==null){o.return=f.return,f=o;break}f=f.return}o=f}}function $i(e,t,a,n){e=null;for(var o=t,c=!1;o!==null;){if(!c){if((o.flags&524288)!==0)c=!0;else if((o.flags&262144)!==0)break}if(o.tag===10){var f=o.alternate;if(f===null)throw Error(r(387));if(f=f.memoizedProps,f!==null){var v=o.type;Dt(o.pendingProps.value,f.value)||(e!==null?e.push(v):e=[v])}}else if(o===oe.current){if(f=o.alternate,f===null)throw Error(r(387));f.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(e!==null?e.push(Tn):e=[Tn])}o=o.return}e!==null&&Do(t,e,a,n),t.flags|=262144}function wl(e){for(e=e.firstContext;e!==null;){if(!Dt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function vi(e){bi=e,xa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ot(e){return Xm(bi,e)}function Sl(e,t){return bi===null&&vi(e),Xm(e,t)}function Xm(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},xa===null){if(e===null)throw Error(r(308));xa=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else xa=xa.next=t;return a}var Ob=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},qb=i.unstable_scheduleCallback,Vb=i.unstable_NormalPriority,We={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ko(){return{controller:new Ob,data:new Map,refCount:0}}function Js(e){e.refCount--,e.refCount===0&&qb(Vb,function(){e.controller.abort()})}var $s=null,Ro=0,es=0,ts=null;function Hb(e,t){if($s===null){var a=$s=[];Ro=0,es=Lc(),ts={status:"pending",value:void 0,then:function(n){a.push(n)}}}return Ro++,t.then(Wm,Wm),t}function Wm(){if(--Ro===0&&$s!==null){ts!==null&&(ts.status="fulfilled");var e=$s;$s=null,es=0,ts=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Pb(e,t){var a=[],n={status:"pending",value:null,reason:null,then:function(o){a.push(o)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var o=0;o<a.length;o++)(0,a[o])(t)},function(o){for(n.status="rejected",n.reason=o,o=0;o<a.length;o++)(0,a[o])(void 0)}),n}var Zm=V.S;V.S=function(e,t){Lf=Mt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Hb(e,t),Zm!==null&&Zm(e,t)};var wi=T(null);function Bo(){var e=wi.current;return e!==null?e:Oe.pooledCache}function Al(e,t){t===null?F(wi,wi.current):F(wi,t.pool)}function Jm(){var e=Bo();return e===null?null:{parent:We._currentValue,pool:e}}var as=Error(r(460)),zo=Error(r(474)),Cl=Error(r(542)),Tl={then:function(){}};function $m(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ep(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(pa,pa),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,ap(e),e;default:if(typeof t.status=="string")t.then(pa,pa);else{if(e=Oe,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var o=t;o.status="fulfilled",o.value=n}},function(n){if(t.status==="pending"){var o=t;o.status="rejected",o.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,ap(e),e}throw Ai=t,as}}function Si(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ai=a,as):a}}var Ai=null;function tp(){if(Ai===null)throw Error(r(459));var e=Ai;return Ai=null,e}function ap(e){if(e===as||e===Cl)throw Error(r(483))}var is=null,en=0;function jl(e){var t=en;return en+=1,is===null&&(is=[]),ep(is,e,t)}function tn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Ml(e,t){throw t.$$typeof===w?Error(r(525)):(e=Object.prototype.toString.call(t),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function ip(e){function t(N,C){if(e){var D=N.deletions;D===null?(N.deletions=[C],N.flags|=16):D.push(C)}}function a(N,C){if(!e)return null;for(;C!==null;)t(N,C),C=C.sibling;return null}function n(N){for(var C=new Map;N!==null;)N.key!==null?C.set(N.key,N):C.set(N.index,N),N=N.sibling;return C}function o(N,C){return N=ha(N,C),N.index=0,N.sibling=null,N}function c(N,C,D){return N.index=D,e?(D=N.alternate,D!==null?(D=D.index,D<C?(N.flags|=67108866,C):D):(N.flags|=67108866,C)):(N.flags|=1048576,C)}function f(N){return e&&N.alternate===null&&(N.flags|=67108866),N}function v(N,C,D,I){return C===null||C.tag!==6?(C=So(D,N.mode,I),C.return=N,C):(C=o(C,D),C.return=N,C)}function S(N,C,D,I){var se=D.type;return se===B?H(N,C,D.props.children,I,D.key):C!==null&&(C.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===Q&&Si(se)===C.type)?(C=o(C,D.props),tn(C,D),C.return=N,C):(C=bl(D.type,D.key,D.props,null,N.mode,I),tn(C,D),C.return=N,C)}function k(N,C,D,I){return C===null||C.tag!==4||C.stateNode.containerInfo!==D.containerInfo||C.stateNode.implementation!==D.implementation?(C=Ao(D,N.mode,I),C.return=N,C):(C=o(C,D.children||[]),C.return=N,C)}function H(N,C,D,I,se){return C===null||C.tag!==7?(C=xi(D,N.mode,I,se),C.return=N,C):(C=o(C,D),C.return=N,C)}function _(N,C,D){if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return C=So(""+C,N.mode,D),C.return=N,C;if(typeof C=="object"&&C!==null){switch(C.$$typeof){case A:return D=bl(C.type,C.key,C.props,null,N.mode,D),tn(D,C),D.return=N,D;case E:return C=Ao(C,N.mode,D),C.return=N,C;case Q:return C=Si(C),_(N,C,D)}if(Ee(C)||K(C))return C=xi(C,N.mode,D,null),C.return=N,C;if(typeof C.then=="function")return _(N,jl(C),D);if(C.$$typeof===O)return _(N,Sl(N,C),D);Ml(N,C)}return null}function R(N,C,D,I){var se=C!==null?C.key:null;if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return se!==null?null:v(N,C,""+D,I);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case A:return D.key===se?S(N,C,D,I):null;case E:return D.key===se?k(N,C,D,I):null;case Q:return D=Si(D),R(N,C,D,I)}if(Ee(D)||K(D))return se!==null?null:H(N,C,D,I,null);if(typeof D.then=="function")return R(N,C,jl(D),I);if(D.$$typeof===O)return R(N,C,Sl(N,D),I);Ml(N,D)}return null}function L(N,C,D,I,se){if(typeof I=="string"&&I!==""||typeof I=="number"||typeof I=="bigint")return N=N.get(D)||null,v(C,N,""+I,se);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case A:return N=N.get(I.key===null?D:I.key)||null,S(C,N,I,se);case E:return N=N.get(I.key===null?D:I.key)||null,k(C,N,I,se);case Q:return I=Si(I),L(N,C,D,I,se)}if(Ee(I)||K(I))return N=N.get(D)||null,H(C,N,I,se,null);if(typeof I.then=="function")return L(N,C,D,jl(I),se);if(I.$$typeof===O)return L(N,C,D,Sl(C,I),se);Ml(C,I)}return null}function te(N,C,D,I){for(var se=null,je=null,ae=C,pe=C=0,we=null;ae!==null&&pe<D.length;pe++){ae.index>pe?(we=ae,ae=null):we=ae.sibling;var Me=R(N,ae,D[pe],I);if(Me===null){ae===null&&(ae=we);break}e&&ae&&Me.alternate===null&&t(N,ae),C=c(Me,C,pe),je===null?se=Me:je.sibling=Me,je=Me,ae=we}if(pe===D.length)return a(N,ae),Ce&&ga(N,pe),se;if(ae===null){for(;pe<D.length;pe++)ae=_(N,D[pe],I),ae!==null&&(C=c(ae,C,pe),je===null?se=ae:je.sibling=ae,je=ae);return Ce&&ga(N,pe),se}for(ae=n(ae);pe<D.length;pe++)we=L(ae,N,pe,D[pe],I),we!==null&&(e&&we.alternate!==null&&ae.delete(we.key===null?pe:we.key),C=c(we,C,pe),je===null?se=we:je.sibling=we,je=we);return e&&ae.forEach(function(si){return t(N,si)}),Ce&&ga(N,pe),se}function le(N,C,D,I){if(D==null)throw Error(r(151));for(var se=null,je=null,ae=C,pe=C=0,we=null,Me=D.next();ae!==null&&!Me.done;pe++,Me=D.next()){ae.index>pe?(we=ae,ae=null):we=ae.sibling;var si=R(N,ae,Me.value,I);if(si===null){ae===null&&(ae=we);break}e&&ae&&si.alternate===null&&t(N,ae),C=c(si,C,pe),je===null?se=si:je.sibling=si,je=si,ae=we}if(Me.done)return a(N,ae),Ce&&ga(N,pe),se;if(ae===null){for(;!Me.done;pe++,Me=D.next())Me=_(N,Me.value,I),Me!==null&&(C=c(Me,C,pe),je===null?se=Me:je.sibling=Me,je=Me);return Ce&&ga(N,pe),se}for(ae=n(ae);!Me.done;pe++,Me=D.next())Me=L(ae,N,pe,Me.value,I),Me!==null&&(e&&Me.alternate!==null&&ae.delete(Me.key===null?pe:Me.key),C=c(Me,C,pe),je===null?se=Me:je.sibling=Me,je=Me);return e&&ae.forEach(function(Zv){return t(N,Zv)}),Ce&&ga(N,pe),se}function Le(N,C,D,I){if(typeof D=="object"&&D!==null&&D.type===B&&D.key===null&&(D=D.props.children),typeof D=="object"&&D!==null){switch(D.$$typeof){case A:e:{for(var se=D.key;C!==null;){if(C.key===se){if(se=D.type,se===B){if(C.tag===7){a(N,C.sibling),I=o(C,D.props.children),I.return=N,N=I;break e}}else if(C.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===Q&&Si(se)===C.type){a(N,C.sibling),I=o(C,D.props),tn(I,D),I.return=N,N=I;break e}a(N,C);break}else t(N,C);C=C.sibling}D.type===B?(I=xi(D.props.children,N.mode,I,D.key),I.return=N,N=I):(I=bl(D.type,D.key,D.props,null,N.mode,I),tn(I,D),I.return=N,N=I)}return f(N);case E:e:{for(se=D.key;C!==null;){if(C.key===se)if(C.tag===4&&C.stateNode.containerInfo===D.containerInfo&&C.stateNode.implementation===D.implementation){a(N,C.sibling),I=o(C,D.children||[]),I.return=N,N=I;break e}else{a(N,C);break}else t(N,C);C=C.sibling}I=Ao(D,N.mode,I),I.return=N,N=I}return f(N);case Q:return D=Si(D),Le(N,C,D,I)}if(Ee(D))return te(N,C,D,I);if(K(D)){if(se=K(D),typeof se!="function")throw Error(r(150));return D=se.call(D),le(N,C,D,I)}if(typeof D.then=="function")return Le(N,C,jl(D),I);if(D.$$typeof===O)return Le(N,C,Sl(N,D),I);Ml(N,D)}return typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint"?(D=""+D,C!==null&&C.tag===6?(a(N,C.sibling),I=o(C,D),I.return=N,N=I):(a(N,C),I=So(D,N.mode,I),I.return=N,N=I),f(N)):a(N,C)}return function(N,C,D,I){try{en=0;var se=Le(N,C,D,I);return is=null,se}catch(ae){if(ae===as||ae===Cl)throw ae;var je=kt(29,ae,null,N.mode);return je.lanes=I,je.return=N,je}}}var Ci=ip(!0),sp=ip(!1),Ia=!1;function Lo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Oo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ua(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function _a(e,t,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(Ne&2)!==0){var o=n.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),n.pending=t,t=yl(e),Im(e,null,a),t}return xl(e,n,t,a),yl(e)}function an(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Xu(e,a)}}function qo(e,t){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var o=null,c=null;if(a=a.firstBaseUpdate,a!==null){do{var f={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};c===null?o=c=f:c=c.next=f,a=a.next}while(a!==null);c===null?o=c=t:c=c.next=t}else o=c=t;a={baseState:n.baseState,firstBaseUpdate:o,lastBaseUpdate:c,shared:n.shared,callbacks:n.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Vo=!1;function sn(){if(Vo){var e=ts;if(e!==null)throw e}}function nn(e,t,a,n){Vo=!1;var o=e.updateQueue;Ia=!1;var c=o.firstBaseUpdate,f=o.lastBaseUpdate,v=o.shared.pending;if(v!==null){o.shared.pending=null;var S=v,k=S.next;S.next=null,f===null?c=k:f.next=k,f=S;var H=e.alternate;H!==null&&(H=H.updateQueue,v=H.lastBaseUpdate,v!==f&&(v===null?H.firstBaseUpdate=k:v.next=k,H.lastBaseUpdate=S))}if(c!==null){var _=o.baseState;f=0,H=k=S=null,v=c;do{var R=v.lane&-536870913,L=R!==v.lane;if(L?(ve&R)===R:(n&R)===R){R!==0&&R===es&&(Vo=!0),H!==null&&(H=H.next={lane:0,tag:v.tag,payload:v.payload,callback:null,next:null});e:{var te=e,le=v;R=t;var Le=a;switch(le.tag){case 1:if(te=le.payload,typeof te=="function"){_=te.call(Le,_,R);break e}_=te;break e;case 3:te.flags=te.flags&-65537|128;case 0:if(te=le.payload,R=typeof te=="function"?te.call(Le,_,R):te,R==null)break e;_=b({},_,R);break e;case 2:Ia=!0}}R=v.callback,R!==null&&(e.flags|=64,L&&(e.flags|=8192),L=o.callbacks,L===null?o.callbacks=[R]:L.push(R))}else L={lane:R,tag:v.tag,payload:v.payload,callback:v.callback,next:null},H===null?(k=H=L,S=_):H=H.next=L,f|=R;if(v=v.next,v===null){if(v=o.shared.pending,v===null)break;L=v,v=L.next,L.next=null,o.lastBaseUpdate=L,o.shared.pending=null}}while(!0);H===null&&(S=_),o.baseState=S,o.firstBaseUpdate=k,o.lastBaseUpdate=H,c===null&&(o.shared.lanes=0),Ka|=f,e.lanes=f,e.memoizedState=_}}function np(e,t){if(typeof e!="function")throw Error(r(191,e));e.call(t)}function lp(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)np(a[e],t)}var ss=T(null),El=T(0);function rp(e,t){e=Ma,F(El,e),F(ss,t),Ma=e|t.baseLanes}function Ho(){F(El,Ma),F(ss,ss.current)}function Po(){Ma=El.current,U(ss),U(El)}var Rt=T(null),Ft=null;function Ga(e){var t=e.alternate;F(Fe,Fe.current&1),F(Rt,e),Ft===null&&(t===null||ss.current!==null||t.memoizedState!==null)&&(Ft=e)}function Io(e){F(Fe,Fe.current),F(Rt,e),Ft===null&&(Ft=e)}function op(e){e.tag===22?(F(Fe,Fe.current),F(Rt,e),Ft===null&&(Ft=e)):Ya()}function Ya(){F(Fe,Fe.current),F(Rt,Rt.current)}function Bt(e){U(Rt),Ft===e&&(Ft=null),U(Fe)}var Fe=T(0);function Nl(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Fc(a)||Kc(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ba=0,me=null,Be=null,Ze=null,Dl=!1,ns=!1,Ti=!1,kl=0,ln=0,ls=null,Ib=0;function Ge(){throw Error(r(321))}function Uo(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Dt(e[a],t[a]))return!1;return!0}function _o(e,t,a,n,o,c){return ba=c,me=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,V.H=e===null||e.memoizedState===null?Yp:sc,Ti=!1,c=a(n,o),Ti=!1,ns&&(c=dp(t,a,n,o)),cp(e),c}function cp(e){V.H=cn;var t=Be!==null&&Be.next!==null;if(ba=0,Ze=Be=me=null,Dl=!1,ln=0,ls=null,t)throw Error(r(300));e===null||Je||(e=e.dependencies,e!==null&&wl(e)&&(Je=!0))}function dp(e,t,a,n){me=e;var o=0;do{if(ns&&(ls=null),ln=0,ns=!1,25<=o)throw Error(r(301));if(o+=1,Ze=Be=null,e.updateQueue!=null){var c=e.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}V.H=Qp,c=t(a,n)}while(ns);return c}function Ub(){var e=V.H,t=e.useState()[0];return t=typeof t.then=="function"?rn(t):t,e=e.useState()[0],(Be!==null?Be.memoizedState:null)!==e&&(me.flags|=1024),t}function Go(){var e=kl!==0;return kl=0,e}function Yo(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Qo(e){if(Dl){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Dl=!1}ba=0,Ze=Be=me=null,ns=!1,ln=kl=0,ls=null}function ft(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ze===null?me.memoizedState=Ze=e:Ze=Ze.next=e,Ze}function Ke(){if(Be===null){var e=me.alternate;e=e!==null?e.memoizedState:null}else e=Be.next;var t=Ze===null?me.memoizedState:Ze.next;if(t!==null)Ze=t,Be=e;else{if(e===null)throw me.alternate===null?Error(r(467)):Error(r(310));Be=e,e={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},Ze===null?me.memoizedState=Ze=e:Ze=Ze.next=e}return Ze}function Rl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function rn(e){var t=ln;return ln+=1,ls===null&&(ls=[]),e=ep(ls,e,t),t=me,(Ze===null?t.memoizedState:Ze.next)===null&&(t=t.alternate,V.H=t===null||t.memoizedState===null?Yp:sc),e}function Bl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return rn(e);if(e.$$typeof===O)return ot(e)}throw Error(r(438,String(e)))}function Fo(e){var t=null,a=me.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var n=me.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(o){return o.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Rl(),me.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),n=0;n<e;n++)a[n]=Te;return t.index++,a}function va(e,t){return typeof t=="function"?t(e):t}function zl(e){var t=Ke();return Ko(t,Be,e)}function Ko(e,t,a){var n=e.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=a;var o=e.baseQueue,c=n.pending;if(c!==null){if(o!==null){var f=o.next;o.next=c.next,c.next=f}t.baseQueue=o=c,n.pending=null}if(c=e.baseState,o===null)e.memoizedState=c;else{t=o.next;var v=f=null,S=null,k=t,H=!1;do{var _=k.lane&-536870913;if(_!==k.lane?(ve&_)===_:(ba&_)===_){var R=k.revertLane;if(R===0)S!==null&&(S=S.next={lane:0,revertLane:0,gesture:null,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null}),_===es&&(H=!0);else if((ba&R)===R){k=k.next,R===es&&(H=!0);continue}else _={lane:0,revertLane:k.revertLane,gesture:null,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null},S===null?(v=S=_,f=c):S=S.next=_,me.lanes|=R,Ka|=R;_=k.action,Ti&&a(c,_),c=k.hasEagerState?k.eagerState:a(c,_)}else R={lane:_,revertLane:k.revertLane,gesture:k.gesture,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null},S===null?(v=S=R,f=c):S=S.next=R,me.lanes|=_,Ka|=_;k=k.next}while(k!==null&&k!==t);if(S===null?f=c:S.next=v,!Dt(c,e.memoizedState)&&(Je=!0,H&&(a=ts,a!==null)))throw a;e.memoizedState=c,e.baseState=f,e.baseQueue=S,n.lastRenderedState=c}return o===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function Xo(e){var t=Ke(),a=t.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var n=a.dispatch,o=a.pending,c=t.memoizedState;if(o!==null){a.pending=null;var f=o=o.next;do c=e(c,f.action),f=f.next;while(f!==o);Dt(c,t.memoizedState)||(Je=!0),t.memoizedState=c,t.baseQueue===null&&(t.baseState=c),a.lastRenderedState=c}return[c,n]}function up(e,t,a){var n=me,o=Ke(),c=Ce;if(c){if(a===void 0)throw Error(r(407));a=a()}else a=t();var f=!Dt((Be||o).memoizedState,a);if(f&&(o.memoizedState=a,Je=!0),o=o.queue,Jo(fp.bind(null,n,o,e),[e]),o.getSnapshot!==t||f||Ze!==null&&Ze.memoizedState.tag&1){if(n.flags|=2048,rs(9,{destroy:void 0},pp.bind(null,n,o,a,t),null),Oe===null)throw Error(r(349));c||(ba&127)!==0||mp(n,t,a)}return a}function mp(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=me.updateQueue,t===null?(t=Rl(),me.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function pp(e,t,a,n){t.value=a,t.getSnapshot=n,hp(t)&&gp(e)}function fp(e,t,a){return a(function(){hp(t)&&gp(e)})}function hp(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Dt(e,a)}catch{return!0}}function gp(e){var t=gi(e,2);t!==null&&At(t,e,2)}function Wo(e){var t=ft();if(typeof e=="function"){var a=e;if(e=a(),Ti){za(!0);try{a()}finally{za(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:va,lastRenderedState:e},t}function xp(e,t,a,n){return e.baseState=a,Ko(e,Be,typeof n=="function"?n:va)}function _b(e,t,a,n,o){if(ql(e))throw Error(r(485));if(e=t.action,e!==null){var c={payload:o,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(f){c.listeners.push(f)}};V.T!==null?a(!0):c.isTransition=!1,n(c),a=t.pending,a===null?(c.next=t.pending=c,yp(t,c)):(c.next=a.next,t.pending=a.next=c)}}function yp(e,t){var a=t.action,n=t.payload,o=e.state;if(t.isTransition){var c=V.T,f={};V.T=f;try{var v=a(o,n),S=V.S;S!==null&&S(f,v),bp(e,t,v)}catch(k){Zo(e,t,k)}finally{c!==null&&f.types!==null&&(c.types=f.types),V.T=c}}else try{c=a(o,n),bp(e,t,c)}catch(k){Zo(e,t,k)}}function bp(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){vp(e,t,n)},function(n){return Zo(e,t,n)}):vp(e,t,a)}function vp(e,t,a){t.status="fulfilled",t.value=a,wp(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,yp(e,a)))}function Zo(e,t,a){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=a,wp(t),t=t.next;while(t!==n)}e.action=null}function wp(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Sp(e,t){return t}function Ap(e,t){if(Ce){var a=Oe.formState;if(a!==null){e:{var n=me;if(Ce){if(Ve){t:{for(var o=Ve,c=Qt;o.nodeType!==8;){if(!c){o=null;break t}if(o=Kt(o.nextSibling),o===null){o=null;break t}}c=o.data,o=c==="F!"||c==="F"?o:null}if(o){Ve=Kt(o.nextSibling),n=o.data==="F!";break e}}Ha(n)}n=!1}n&&(t=a[0])}}return a=ft(),a.memoizedState=a.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sp,lastRenderedState:t},a.queue=n,a=Up.bind(null,me,n),n.dispatch=a,n=Wo(!1),c=ic.bind(null,me,!1,n.queue),n=ft(),o={state:t,dispatch:null,action:e,pending:null},n.queue=o,a=_b.bind(null,me,o,c,a),o.dispatch=a,n.memoizedState=e,[t,a,!1]}function Cp(e){var t=Ke();return Tp(t,Be,e)}function Tp(e,t,a){if(t=Ko(e,t,Sp)[0],e=zl(va)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=rn(t)}catch(f){throw f===as?Cl:f}else n=t;t=Ke();var o=t.queue,c=o.dispatch;return a!==t.memoizedState&&(me.flags|=2048,rs(9,{destroy:void 0},Gb.bind(null,o,a),null)),[n,c,e]}function Gb(e,t){e.action=t}function jp(e){var t=Ke(),a=Be;if(a!==null)return Tp(t,a,e);Ke(),t=t.memoizedState,a=Ke();var n=a.queue.dispatch;return a.memoizedState=e,[t,n,!1]}function rs(e,t,a,n){return e={tag:e,create:a,deps:n,inst:t,next:null},t=me.updateQueue,t===null&&(t=Rl(),me.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,t.lastEffect=e),e}function Mp(){return Ke().memoizedState}function Ll(e,t,a,n){var o=ft();me.flags|=e,o.memoizedState=rs(1|t,{destroy:void 0},a,n===void 0?null:n)}function Ol(e,t,a,n){var o=Ke();n=n===void 0?null:n;var c=o.memoizedState.inst;Be!==null&&n!==null&&Uo(n,Be.memoizedState.deps)?o.memoizedState=rs(t,c,a,n):(me.flags|=e,o.memoizedState=rs(1|t,c,a,n))}function Ep(e,t){Ll(8390656,8,e,t)}function Jo(e,t){Ol(2048,8,e,t)}function Yb(e){me.flags|=4;var t=me.updateQueue;if(t===null)t=Rl(),me.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function Np(e){var t=Ke().memoizedState;return Yb({ref:t,nextImpl:e}),function(){if((Ne&2)!==0)throw Error(r(440));return t.impl.apply(void 0,arguments)}}function Dp(e,t){return Ol(4,2,e,t)}function kp(e,t){return Ol(4,4,e,t)}function Rp(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Bp(e,t,a){a=a!=null?a.concat([e]):null,Ol(4,4,Rp.bind(null,t,e),a)}function $o(){}function zp(e,t){var a=Ke();t=t===void 0?null:t;var n=a.memoizedState;return t!==null&&Uo(t,n[1])?n[0]:(a.memoizedState=[e,t],e)}function Lp(e,t){var a=Ke();t=t===void 0?null:t;var n=a.memoizedState;if(t!==null&&Uo(t,n[1]))return n[0];if(n=e(),Ti){za(!0);try{e()}finally{za(!1)}}return a.memoizedState=[n,t],n}function ec(e,t,a){return a===void 0||(ba&1073741824)!==0&&(ve&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=qf(),me.lanes|=e,Ka|=e,a)}function Op(e,t,a,n){return Dt(a,t)?a:ss.current!==null?(e=ec(e,a,n),Dt(e,t)||(Je=!0),e):(ba&42)===0||(ba&1073741824)!==0&&(ve&261930)===0?(Je=!0,e.memoizedState=a):(e=qf(),me.lanes|=e,Ka|=e,t)}function qp(e,t,a,n,o){var c=G.p;G.p=c!==0&&8>c?c:8;var f=V.T,v={};V.T=v,ic(e,!1,t,a);try{var S=o(),k=V.S;if(k!==null&&k(v,S),S!==null&&typeof S=="object"&&typeof S.then=="function"){var H=Pb(S,n);on(e,t,H,Ot(e))}else on(e,t,n,Ot(e))}catch(_){on(e,t,{then:function(){},status:"rejected",reason:_},Ot())}finally{G.p=c,f!==null&&v.types!==null&&(f.types=v.types),V.T=f}}function Qb(){}function tc(e,t,a,n){if(e.tag!==5)throw Error(r(476));var o=Vp(e).queue;qp(e,o,t,J,a===null?Qb:function(){return Hp(e),a(n)})}function Vp(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:J,baseState:J,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:va,lastRenderedState:J},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:va,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Hp(e){var t=Vp(e);t.next===null&&(t=e.alternate.memoizedState),on(e,t.next.queue,{},Ot())}function ac(){return ot(Tn)}function Pp(){return Ke().memoizedState}function Ip(){return Ke().memoizedState}function Fb(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=Ot();e=Ua(a);var n=_a(t,e,a);n!==null&&(At(n,t,a),an(n,t,a)),t={cache:ko()},e.payload=t;return}t=t.return}}function Kb(e,t,a){var n=Ot();a={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ql(e)?_p(t,a):(a=vo(e,t,a,n),a!==null&&(At(a,e,n),Gp(a,t,n)))}function Up(e,t,a){var n=Ot();on(e,t,a,n)}function on(e,t,a,n){var o={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(ql(e))_p(t,o);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=t.lastRenderedReducer,c!==null))try{var f=t.lastRenderedState,v=c(f,a);if(o.hasEagerState=!0,o.eagerState=v,Dt(v,f))return xl(e,t,o,0),Oe===null&&gl(),!1}catch{}if(a=vo(e,t,o,n),a!==null)return At(a,e,n),Gp(a,t,n),!0}return!1}function ic(e,t,a,n){if(n={lane:2,revertLane:Lc(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},ql(e)){if(t)throw Error(r(479))}else t=vo(e,a,n,2),t!==null&&At(t,e,2)}function ql(e){var t=e.alternate;return e===me||t!==null&&t===me}function _p(e,t){ns=Dl=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Gp(e,t,a){if((a&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Xu(e,a)}}var cn={readContext:ot,use:Bl,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useLayoutEffect:Ge,useInsertionEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useSyncExternalStore:Ge,useId:Ge,useHostTransitionStatus:Ge,useFormState:Ge,useActionState:Ge,useOptimistic:Ge,useMemoCache:Ge,useCacheRefresh:Ge};cn.useEffectEvent=Ge;var Yp={readContext:ot,use:Bl,useCallback:function(e,t){return ft().memoizedState=[e,t===void 0?null:t],e},useContext:ot,useEffect:Ep,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Ll(4194308,4,Rp.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Ll(4194308,4,e,t)},useInsertionEffect:function(e,t){Ll(4,2,e,t)},useMemo:function(e,t){var a=ft();t=t===void 0?null:t;var n=e();if(Ti){za(!0);try{e()}finally{za(!1)}}return a.memoizedState=[n,t],n},useReducer:function(e,t,a){var n=ft();if(a!==void 0){var o=a(t);if(Ti){za(!0);try{a(t)}finally{za(!1)}}}else o=t;return n.memoizedState=n.baseState=o,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:o},n.queue=e,e=e.dispatch=Kb.bind(null,me,e),[n.memoizedState,e]},useRef:function(e){var t=ft();return e={current:e},t.memoizedState=e},useState:function(e){e=Wo(e);var t=e.queue,a=Up.bind(null,me,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:$o,useDeferredValue:function(e,t){var a=ft();return ec(a,e,t)},useTransition:function(){var e=Wo(!1);return e=qp.bind(null,me,e.queue,!0,!1),ft().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var n=me,o=ft();if(Ce){if(a===void 0)throw Error(r(407));a=a()}else{if(a=t(),Oe===null)throw Error(r(349));(ve&127)!==0||mp(n,t,a)}o.memoizedState=a;var c={value:a,getSnapshot:t};return o.queue=c,Ep(fp.bind(null,n,c,e),[e]),n.flags|=2048,rs(9,{destroy:void 0},pp.bind(null,n,c,a,t),null),a},useId:function(){var e=ft(),t=Oe.identifierPrefix;if(Ce){var a=la,n=na;a=(n&~(1<<32-Nt(n)-1)).toString(32)+a,t="_"+t+"R_"+a,a=kl++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Ib++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:ac,useFormState:Ap,useActionState:Ap,useOptimistic:function(e){var t=ft();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=ic.bind(null,me,!0,a),a.dispatch=t,[e,t]},useMemoCache:Fo,useCacheRefresh:function(){return ft().memoizedState=Fb.bind(null,me)},useEffectEvent:function(e){var t=ft(),a={impl:e};return t.memoizedState=a,function(){if((Ne&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},sc={readContext:ot,use:Bl,useCallback:zp,useContext:ot,useEffect:Jo,useImperativeHandle:Bp,useInsertionEffect:Dp,useLayoutEffect:kp,useMemo:Lp,useReducer:zl,useRef:Mp,useState:function(){return zl(va)},useDebugValue:$o,useDeferredValue:function(e,t){var a=Ke();return Op(a,Be.memoizedState,e,t)},useTransition:function(){var e=zl(va)[0],t=Ke().memoizedState;return[typeof e=="boolean"?e:rn(e),t]},useSyncExternalStore:up,useId:Pp,useHostTransitionStatus:ac,useFormState:Cp,useActionState:Cp,useOptimistic:function(e,t){var a=Ke();return xp(a,Be,e,t)},useMemoCache:Fo,useCacheRefresh:Ip};sc.useEffectEvent=Np;var Qp={readContext:ot,use:Bl,useCallback:zp,useContext:ot,useEffect:Jo,useImperativeHandle:Bp,useInsertionEffect:Dp,useLayoutEffect:kp,useMemo:Lp,useReducer:Xo,useRef:Mp,useState:function(){return Xo(va)},useDebugValue:$o,useDeferredValue:function(e,t){var a=Ke();return Be===null?ec(a,e,t):Op(a,Be.memoizedState,e,t)},useTransition:function(){var e=Xo(va)[0],t=Ke().memoizedState;return[typeof e=="boolean"?e:rn(e),t]},useSyncExternalStore:up,useId:Pp,useHostTransitionStatus:ac,useFormState:jp,useActionState:jp,useOptimistic:function(e,t){var a=Ke();return Be!==null?xp(a,Be,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Fo,useCacheRefresh:Ip};Qp.useEffectEvent=Np;function nc(e,t,a,n){t=e.memoizedState,a=a(n,t),a=a==null?t:b({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var lc={enqueueSetState:function(e,t,a){e=e._reactInternals;var n=Ot(),o=Ua(n);o.payload=t,a!=null&&(o.callback=a),t=_a(e,o,n),t!==null&&(At(t,e,n),an(t,e,n))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var n=Ot(),o=Ua(n);o.tag=1,o.payload=t,a!=null&&(o.callback=a),t=_a(e,o,n),t!==null&&(At(t,e,n),an(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=Ot(),n=Ua(a);n.tag=2,t!=null&&(n.callback=t),t=_a(e,n,a),t!==null&&(At(t,e,a),an(t,e,a))}};function Fp(e,t,a,n,o,c,f){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,c,f):t.prototype&&t.prototype.isPureReactComponent?!Ks(a,n)||!Ks(o,c):!0}function Kp(e,t,a,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,n),t.state!==e&&lc.enqueueReplaceState(t,t.state,null)}function ji(e,t){var a=t;if("ref"in t){a={};for(var n in t)n!=="ref"&&(a[n]=t[n])}if(e=e.defaultProps){a===t&&(a=b({},a));for(var o in e)a[o]===void 0&&(a[o]=e[o])}return a}function Xp(e){hl(e)}function Wp(e){console.error(e)}function Zp(e){hl(e)}function Vl(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function Jp(e,t,a){try{var n=e.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(o){setTimeout(function(){throw o})}}function rc(e,t,a){return a=Ua(a),a.tag=3,a.payload={element:null},a.callback=function(){Vl(e,t)},a}function $p(e){return e=Ua(e),e.tag=3,e}function ef(e,t,a,n){var o=a.type.getDerivedStateFromError;if(typeof o=="function"){var c=n.value;e.payload=function(){return o(c)},e.callback=function(){Jp(t,a,n)}}var f=a.stateNode;f!==null&&typeof f.componentDidCatch=="function"&&(e.callback=function(){Jp(t,a,n),typeof o!="function"&&(Xa===null?Xa=new Set([this]):Xa.add(this));var v=n.stack;this.componentDidCatch(n.value,{componentStack:v!==null?v:""})})}function Xb(e,t,a,n,o){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=a.alternate,t!==null&&$i(t,a,o,!0),a=Rt.current,a!==null){switch(a.tag){case 31:case 13:return Ft===null?Wl():a.alternate===null&&Ye===0&&(Ye=3),a.flags&=-257,a.flags|=65536,a.lanes=o,n===Tl?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([n]):t.add(n),Rc(e,n,o)),!1;case 22:return a.flags|=65536,n===Tl?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([n]):a.add(n)),Rc(e,n,o)),!1}throw Error(r(435,a.tag))}return Rc(e,n,o),Wl(),!1}if(Ce)return t=Rt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=o,n!==jo&&(e=Error(r(422),{cause:n}),Zs(_t(e,a)))):(n!==jo&&(t=Error(r(423),{cause:n}),Zs(_t(t,a))),e=e.current.alternate,e.flags|=65536,o&=-o,e.lanes|=o,n=_t(n,a),o=rc(e.stateNode,n,o),qo(e,o),Ye!==4&&(Ye=2)),!1;var c=Error(r(520),{cause:n});if(c=_t(c,a),xn===null?xn=[c]:xn.push(c),Ye!==4&&(Ye=2),t===null)return!0;n=_t(n,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=o&-o,a.lanes|=e,e=rc(a.stateNode,n,e),qo(a,e),!1;case 1:if(t=a.type,c=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Xa===null||!Xa.has(c))))return a.flags|=65536,o&=-o,a.lanes|=o,o=$p(o),ef(o,e,a,n),qo(a,o),!1}a=a.return}while(a!==null);return!1}var oc=Error(r(461)),Je=!1;function ct(e,t,a,n){t.child=e===null?sp(t,null,a,n):Ci(t,e.child,a,n)}function tf(e,t,a,n,o){a=a.render;var c=t.ref;if("ref"in n){var f={};for(var v in n)v!=="ref"&&(f[v]=n[v])}else f=n;return vi(t),n=_o(e,t,a,f,c,o),v=Go(),e!==null&&!Je?(Yo(e,t,o),wa(e,t,o)):(Ce&&v&&Co(t),t.flags|=1,ct(e,t,n,o),t.child)}function af(e,t,a,n,o){if(e===null){var c=a.type;return typeof c=="function"&&!wo(c)&&c.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=c,sf(e,t,c,n,o)):(e=bl(a.type,null,n,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(c=e.child,!gc(e,o)){var f=c.memoizedProps;if(a=a.compare,a=a!==null?a:Ks,a(f,n)&&e.ref===t.ref)return wa(e,t,o)}return t.flags|=1,e=ha(c,n),e.ref=t.ref,e.return=t,t.child=e}function sf(e,t,a,n,o){if(e!==null){var c=e.memoizedProps;if(Ks(c,n)&&e.ref===t.ref)if(Je=!1,t.pendingProps=n=c,gc(e,o))(e.flags&131072)!==0&&(Je=!0);else return t.lanes=e.lanes,wa(e,t,o)}return cc(e,t,a,n,o)}function nf(e,t,a,n){var o=n.children,c=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((t.flags&128)!==0){if(c=c!==null?c.baseLanes|a:a,e!==null){for(n=t.child=e.child,o=0;n!==null;)o=o|n.lanes|n.childLanes,n=n.sibling;n=o&~c}else n=0,t.child=null;return lf(e,t,c,a,n)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Al(t,c!==null?c.cachePool:null),c!==null?rp(t,c):Ho(),op(t);else return n=t.lanes=536870912,lf(e,t,c!==null?c.baseLanes|a:a,a,n)}else c!==null?(Al(t,c.cachePool),rp(t,c),Ya(),t.memoizedState=null):(e!==null&&Al(t,null),Ho(),Ya());return ct(e,t,o,a),t.child}function dn(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function lf(e,t,a,n,o){var c=Bo();return c=c===null?null:{parent:We._currentValue,pool:c},t.memoizedState={baseLanes:a,cachePool:c},e!==null&&Al(t,null),Ho(),op(t),e!==null&&$i(e,t,n,!0),t.childLanes=o,null}function Hl(e,t){return t=Il({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function rf(e,t,a){return Ci(t,e.child,null,a),e=Hl(t,t.pendingProps),e.flags|=2,Bt(t),t.memoizedState=null,e}function Wb(e,t,a){var n=t.pendingProps,o=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Ce){if(n.mode==="hidden")return e=Hl(t,n),t.lanes=536870912,dn(null,e);if(Io(t),(e=Ve)?(e=bh(e,Qt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:qa!==null?{id:na,overflow:la}:null,retryLane:536870912,hydrationErrors:null},a=_m(e),a.return=t,t.child=a,rt=t,Ve=null)):e=null,e===null)throw Ha(t);return t.lanes=536870912,null}return Hl(t,n)}var c=e.memoizedState;if(c!==null){var f=c.dehydrated;if(Io(t),o)if(t.flags&256)t.flags&=-257,t=rf(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(r(558));else if(Je||$i(e,t,a,!1),o=(a&e.childLanes)!==0,Je||o){if(n=Oe,n!==null&&(f=Wu(n,a),f!==0&&f!==c.retryLane))throw c.retryLane=f,gi(e,f),At(n,e,f),oc;Wl(),t=rf(e,t,a)}else e=c.treeContext,Ve=Kt(f.nextSibling),rt=t,Ce=!0,Va=null,Qt=!1,e!==null&&Qm(t,e),t=Hl(t,n),t.flags|=4096;return t}return e=ha(e.child,{mode:n.mode,children:n.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Pl(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function cc(e,t,a,n,o){return vi(t),a=_o(e,t,a,n,void 0,o),n=Go(),e!==null&&!Je?(Yo(e,t,o),wa(e,t,o)):(Ce&&n&&Co(t),t.flags|=1,ct(e,t,a,o),t.child)}function of(e,t,a,n,o,c){return vi(t),t.updateQueue=null,a=dp(t,n,a,o),cp(e),n=Go(),e!==null&&!Je?(Yo(e,t,c),wa(e,t,c)):(Ce&&n&&Co(t),t.flags|=1,ct(e,t,a,c),t.child)}function cf(e,t,a,n,o){if(vi(t),t.stateNode===null){var c=Xi,f=a.contextType;typeof f=="object"&&f!==null&&(c=ot(f)),c=new a(n,c),t.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=lc,t.stateNode=c,c._reactInternals=t,c=t.stateNode,c.props=n,c.state=t.memoizedState,c.refs={},Lo(t),f=a.contextType,c.context=typeof f=="object"&&f!==null?ot(f):Xi,c.state=t.memoizedState,f=a.getDerivedStateFromProps,typeof f=="function"&&(nc(t,a,f,n),c.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(f=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),f!==c.state&&lc.enqueueReplaceState(c,c.state,null),nn(t,n,c,o),sn(),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){c=t.stateNode;var v=t.memoizedProps,S=ji(a,v);c.props=S;var k=c.context,H=a.contextType;f=Xi,typeof H=="object"&&H!==null&&(f=ot(H));var _=a.getDerivedStateFromProps;H=typeof _=="function"||typeof c.getSnapshotBeforeUpdate=="function",v=t.pendingProps!==v,H||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(v||k!==f)&&Kp(t,c,n,f),Ia=!1;var R=t.memoizedState;c.state=R,nn(t,n,c,o),sn(),k=t.memoizedState,v||R!==k||Ia?(typeof _=="function"&&(nc(t,a,_,n),k=t.memoizedState),(S=Ia||Fp(t,a,S,n,R,k,f))?(H||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(t.flags|=4194308)):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=k),c.props=n,c.state=k,c.context=f,n=S):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{c=t.stateNode,Oo(e,t),f=t.memoizedProps,H=ji(a,f),c.props=H,_=t.pendingProps,R=c.context,k=a.contextType,S=Xi,typeof k=="object"&&k!==null&&(S=ot(k)),v=a.getDerivedStateFromProps,(k=typeof v=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(f!==_||R!==S)&&Kp(t,c,n,S),Ia=!1,R=t.memoizedState,c.state=R,nn(t,n,c,o),sn();var L=t.memoizedState;f!==_||R!==L||Ia||e!==null&&e.dependencies!==null&&wl(e.dependencies)?(typeof v=="function"&&(nc(t,a,v,n),L=t.memoizedState),(H=Ia||Fp(t,a,H,n,R,L,S)||e!==null&&e.dependencies!==null&&wl(e.dependencies))?(k||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(n,L,S),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(n,L,S)),typeof c.componentDidUpdate=="function"&&(t.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof c.componentDidUpdate!="function"||f===e.memoizedProps&&R===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&R===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=L),c.props=n,c.state=L,c.context=S,n=H):(typeof c.componentDidUpdate!="function"||f===e.memoizedProps&&R===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&R===e.memoizedState||(t.flags|=1024),n=!1)}return c=n,Pl(e,t),n=(t.flags&128)!==0,c||n?(c=t.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:c.render(),t.flags|=1,e!==null&&n?(t.child=Ci(t,e.child,null,o),t.child=Ci(t,null,a,o)):ct(e,t,a,o),t.memoizedState=c.state,e=t.child):e=wa(e,t,o),e}function df(e,t,a,n){return yi(),t.flags|=256,ct(e,t,a,n),t.child}var dc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function uc(e){return{baseLanes:e,cachePool:Jm()}}function mc(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Lt),e}function uf(e,t,a){var n=t.pendingProps,o=!1,c=(t.flags&128)!==0,f;if((f=c)||(f=e!==null&&e.memoizedState===null?!1:(Fe.current&2)!==0),f&&(o=!0,t.flags&=-129),f=(t.flags&32)!==0,t.flags&=-33,e===null){if(Ce){if(o?Ga(t):Ya(),(e=Ve)?(e=bh(e,Qt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:qa!==null?{id:na,overflow:la}:null,retryLane:536870912,hydrationErrors:null},a=_m(e),a.return=t,t.child=a,rt=t,Ve=null)):e=null,e===null)throw Ha(t);return Kc(e)?t.lanes=32:t.lanes=536870912,null}var v=n.children;return n=n.fallback,o?(Ya(),o=t.mode,v=Il({mode:"hidden",children:v},o),n=xi(n,o,a,null),v.return=t,n.return=t,v.sibling=n,t.child=v,n=t.child,n.memoizedState=uc(a),n.childLanes=mc(e,f,a),t.memoizedState=dc,dn(null,n)):(Ga(t),pc(t,v))}var S=e.memoizedState;if(S!==null&&(v=S.dehydrated,v!==null)){if(c)t.flags&256?(Ga(t),t.flags&=-257,t=fc(e,t,a)):t.memoizedState!==null?(Ya(),t.child=e.child,t.flags|=128,t=null):(Ya(),v=n.fallback,o=t.mode,n=Il({mode:"visible",children:n.children},o),v=xi(v,o,a,null),v.flags|=2,n.return=t,v.return=t,n.sibling=v,t.child=n,Ci(t,e.child,null,a),n=t.child,n.memoizedState=uc(a),n.childLanes=mc(e,f,a),t.memoizedState=dc,t=dn(null,n));else if(Ga(t),Kc(v)){if(f=v.nextSibling&&v.nextSibling.dataset,f)var k=f.dgst;f=k,n=Error(r(419)),n.stack="",n.digest=f,Zs({value:n,source:null,stack:null}),t=fc(e,t,a)}else if(Je||$i(e,t,a,!1),f=(a&e.childLanes)!==0,Je||f){if(f=Oe,f!==null&&(n=Wu(f,a),n!==0&&n!==S.retryLane))throw S.retryLane=n,gi(e,n),At(f,e,n),oc;Fc(v)||Wl(),t=fc(e,t,a)}else Fc(v)?(t.flags|=192,t.child=e.child,t=null):(e=S.treeContext,Ve=Kt(v.nextSibling),rt=t,Ce=!0,Va=null,Qt=!1,e!==null&&Qm(t,e),t=pc(t,n.children),t.flags|=4096);return t}return o?(Ya(),v=n.fallback,o=t.mode,S=e.child,k=S.sibling,n=ha(S,{mode:"hidden",children:n.children}),n.subtreeFlags=S.subtreeFlags&65011712,k!==null?v=ha(k,v):(v=xi(v,o,a,null),v.flags|=2),v.return=t,n.return=t,n.sibling=v,t.child=n,dn(null,n),n=t.child,v=e.child.memoizedState,v===null?v=uc(a):(o=v.cachePool,o!==null?(S=We._currentValue,o=o.parent!==S?{parent:S,pool:S}:o):o=Jm(),v={baseLanes:v.baseLanes|a,cachePool:o}),n.memoizedState=v,n.childLanes=mc(e,f,a),t.memoizedState=dc,dn(e.child,n)):(Ga(t),a=e.child,e=a.sibling,a=ha(a,{mode:"visible",children:n.children}),a.return=t,a.sibling=null,e!==null&&(f=t.deletions,f===null?(t.deletions=[e],t.flags|=16):f.push(e)),t.child=a,t.memoizedState=null,a)}function pc(e,t){return t=Il({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Il(e,t){return e=kt(22,e,null,t),e.lanes=0,e}function fc(e,t,a){return Ci(t,e.child,null,a),e=pc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function mf(e,t,a){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),No(e.return,t,a)}function hc(e,t,a,n,o,c){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:o,treeForkCount:c}:(f.isBackwards=t,f.rendering=null,f.renderingStartTime=0,f.last=n,f.tail=a,f.tailMode=o,f.treeForkCount=c)}function pf(e,t,a){var n=t.pendingProps,o=n.revealOrder,c=n.tail;n=n.children;var f=Fe.current,v=(f&2)!==0;if(v?(f=f&1|2,t.flags|=128):f&=1,F(Fe,f),ct(e,t,n,a),n=Ce?Ws:0,!v&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&mf(e,a,t);else if(e.tag===19)mf(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(o){case"forwards":for(a=t.child,o=null;a!==null;)e=a.alternate,e!==null&&Nl(e)===null&&(o=a),a=a.sibling;a=o,a===null?(o=t.child,t.child=null):(o=a.sibling,a.sibling=null),hc(t,!1,o,a,c,n);break;case"backwards":case"unstable_legacy-backwards":for(a=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Nl(e)===null){t.child=o;break}e=o.sibling,o.sibling=a,a=o,o=e}hc(t,!0,a,null,c,n);break;case"together":hc(t,!1,null,null,void 0,n);break;default:t.memoizedState=null}return t.child}function wa(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Ka|=t.lanes,(a&t.childLanes)===0)if(e!==null){if($i(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(r(153));if(t.child!==null){for(e=t.child,a=ha(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=ha(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function gc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&wl(e)))}function Zb(e,t,a){switch(t.tag){case 3:Se(t,t.stateNode.containerInfo),Pa(t,We,e.memoizedState.cache),yi();break;case 27:case 5:gt(t);break;case 4:Se(t,t.stateNode.containerInfo);break;case 10:Pa(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Io(t),null;break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(Ga(t),t.flags|=128,null):(a&t.child.childLanes)!==0?uf(e,t,a):(Ga(t),e=wa(e,t,a),e!==null?e.sibling:null);Ga(t);break;case 19:var o=(e.flags&128)!==0;if(n=(a&t.childLanes)!==0,n||($i(e,t,a,!1),n=(a&t.childLanes)!==0),o){if(n)return pf(e,t,a);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),F(Fe,Fe.current),n)break;return null;case 22:return t.lanes=0,nf(e,t,a,t.pendingProps);case 24:Pa(t,We,e.memoizedState.cache)}return wa(e,t,a)}function ff(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Je=!0;else{if(!gc(e,a)&&(t.flags&128)===0)return Je=!1,Zb(e,t,a);Je=(e.flags&131072)!==0}else Je=!1,Ce&&(t.flags&1048576)!==0&&Ym(t,Ws,t.index);switch(t.lanes=0,t.tag){case 16:e:{var n=t.pendingProps;if(e=Si(t.elementType),t.type=e,typeof e=="function")wo(e)?(n=ji(e,n),t.tag=1,t=cf(null,t,e,n,a)):(t.tag=0,t=cc(null,t,e,n,a));else{if(e!=null){var o=e.$$typeof;if(o===X){t.tag=11,t=tf(null,t,e,n,a);break e}else if(o===W){t.tag=14,t=af(null,t,e,n,a);break e}}throw t=ie(e)||e,Error(r(306,t,""))}}return t;case 0:return cc(e,t,t.type,t.pendingProps,a);case 1:return n=t.type,o=ji(n,t.pendingProps),cf(e,t,n,o,a);case 3:e:{if(Se(t,t.stateNode.containerInfo),e===null)throw Error(r(387));n=t.pendingProps;var c=t.memoizedState;o=c.element,Oo(e,t),nn(t,n,null,a);var f=t.memoizedState;if(n=f.cache,Pa(t,We,n),n!==c.cache&&Do(t,[We],a,!0),sn(),n=f.element,c.isDehydrated)if(c={element:n,isDehydrated:!1,cache:f.cache},t.updateQueue.baseState=c,t.memoizedState=c,t.flags&256){t=df(e,t,n,a);break e}else if(n!==o){o=_t(Error(r(424)),t),Zs(o),t=df(e,t,n,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ve=Kt(e.firstChild),rt=t,Ce=!0,Va=null,Qt=!0,a=sp(t,null,n,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(yi(),n===o){t=wa(e,t,a);break e}ct(e,t,n,a)}t=t.child}return t;case 26:return Pl(e,t),e===null?(a=Th(t.type,null,t.pendingProps,null))?t.memoizedState=a:Ce||(a=t.type,e=t.pendingProps,n=ir(re.current).createElement(a),n[lt]=t,n[xt]=e,dt(n,a,e),st(n),t.stateNode=n):t.memoizedState=Th(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return gt(t),e===null&&Ce&&(n=t.stateNode=Sh(t.type,t.pendingProps,re.current),rt=t,Qt=!0,o=Ve,$a(t.type)?(Xc=o,Ve=Kt(n.firstChild)):Ve=o),ct(e,t,t.pendingProps.children,a),Pl(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Ce&&((o=n=Ve)&&(n=Mv(n,t.type,t.pendingProps,Qt),n!==null?(t.stateNode=n,rt=t,Ve=Kt(n.firstChild),Qt=!1,o=!0):o=!1),o||Ha(t)),gt(t),o=t.type,c=t.pendingProps,f=e!==null?e.memoizedProps:null,n=c.children,Gc(o,c)?n=null:f!==null&&Gc(o,f)&&(t.flags|=32),t.memoizedState!==null&&(o=_o(e,t,Ub,null,null,a),Tn._currentValue=o),Pl(e,t),ct(e,t,n,a),t.child;case 6:return e===null&&Ce&&((e=a=Ve)&&(a=Ev(a,t.pendingProps,Qt),a!==null?(t.stateNode=a,rt=t,Ve=null,e=!0):e=!1),e||Ha(t)),null;case 13:return uf(e,t,a);case 4:return Se(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Ci(t,null,n,a):ct(e,t,n,a),t.child;case 11:return tf(e,t,t.type,t.pendingProps,a);case 7:return ct(e,t,t.pendingProps,a),t.child;case 8:return ct(e,t,t.pendingProps.children,a),t.child;case 12:return ct(e,t,t.pendingProps.children,a),t.child;case 10:return n=t.pendingProps,Pa(t,t.type,n.value),ct(e,t,n.children,a),t.child;case 9:return o=t.type._context,n=t.pendingProps.children,vi(t),o=ot(o),n=n(o),t.flags|=1,ct(e,t,n,a),t.child;case 14:return af(e,t,t.type,t.pendingProps,a);case 15:return sf(e,t,t.type,t.pendingProps,a);case 19:return pf(e,t,a);case 31:return Wb(e,t,a);case 22:return nf(e,t,a,t.pendingProps);case 24:return vi(t),n=ot(We),e===null?(o=Bo(),o===null&&(o=Oe,c=ko(),o.pooledCache=c,c.refCount++,c!==null&&(o.pooledCacheLanes|=a),o=c),t.memoizedState={parent:n,cache:o},Lo(t),Pa(t,We,o)):((e.lanes&a)!==0&&(Oo(e,t),nn(t,null,null,a),sn()),o=e.memoizedState,c=t.memoizedState,o.parent!==n?(o={parent:n,cache:n},t.memoizedState=o,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=o),Pa(t,We,n)):(n=c.cache,Pa(t,We,n),n!==o.cache&&Do(t,[We],a,!0))),ct(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(r(156,t.tag))}function Sa(e){e.flags|=4}function xc(e,t,a,n,o){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(o&335544128)===o)if(e.stateNode.complete)e.flags|=8192;else if(If())e.flags|=8192;else throw Ai=Tl,zo}else e.flags&=-16777217}function hf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Dh(t))if(If())e.flags|=8192;else throw Ai=Tl,zo}function Ul(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Fu():536870912,e.lanes|=t,us|=t)}function un(e,t){if(!Ce)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function He(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(t)for(var o=e.child;o!==null;)a|=o.lanes|o.childLanes,n|=o.subtreeFlags&65011712,n|=o.flags&65011712,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)a|=o.lanes|o.childLanes,n|=o.subtreeFlags,n|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=n,e.childLanes=a,t}function Jb(e,t,a){var n=t.pendingProps;switch(To(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return He(t),null;case 1:return He(t),null;case 3:return a=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ya(We),Ae(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ji(t)?Sa(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Mo())),He(t),null;case 26:var o=t.type,c=t.memoizedState;return e===null?(Sa(t),c!==null?(He(t),hf(t,c)):(He(t),xc(t,o,null,n,a))):c?c!==e.memoizedState?(Sa(t),He(t),hf(t,c)):(He(t),t.flags&=-16777217):(e=e.memoizedProps,e!==n&&Sa(t),He(t),xc(t,o,e,n,a)),null;case 27:if(Tt(t),a=re.current,o=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&Sa(t);else{if(!n){if(t.stateNode===null)throw Error(r(166));return He(t),null}e=Z.current,Ji(t)?Fm(t):(e=Sh(o,n,a),t.stateNode=e,Sa(t))}return He(t),null;case 5:if(Tt(t),o=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&Sa(t);else{if(!n){if(t.stateNode===null)throw Error(r(166));return He(t),null}if(c=Z.current,Ji(t))Fm(t);else{var f=ir(re.current);switch(c){case 1:c=f.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:c=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":c=f.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":c=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":c=f.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof n.is=="string"?f.createElement("select",{is:n.is}):f.createElement("select"),n.multiple?c.multiple=!0:n.size&&(c.size=n.size);break;default:c=typeof n.is=="string"?f.createElement(o,{is:n.is}):f.createElement(o)}}c[lt]=t,c[xt]=n;e:for(f=t.child;f!==null;){if(f.tag===5||f.tag===6)c.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}t.stateNode=c;e:switch(dt(c,o,n),o){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&Sa(t)}}return He(t),xc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&Sa(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(r(166));if(e=re.current,Ji(t)){if(e=t.stateNode,a=t.memoizedProps,n=null,o=rt,o!==null)switch(o.tag){case 27:case 5:n=o.memoizedProps}e[lt]=t,e=!!(e.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||uh(e.nodeValue,a)),e||Ha(t,!0)}else e=ir(e).createTextNode(n),e[lt]=t,t.stateNode=e}return He(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(n=Ji(t),a!==null){if(e===null){if(!n)throw Error(r(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[lt]=t}else yi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;He(t),e=!1}else a=Mo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(Bt(t),t):(Bt(t),null);if((t.flags&128)!==0)throw Error(r(558))}return He(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(o=Ji(t),n!==null&&n.dehydrated!==null){if(e===null){if(!o)throw Error(r(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(r(317));o[lt]=t}else yi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;He(t),o=!1}else o=Mo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),o=!0;if(!o)return t.flags&256?(Bt(t),t):(Bt(t),null)}return Bt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=n!==null,e=e!==null&&e.memoizedState!==null,a&&(n=t.child,o=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(o=n.alternate.memoizedState.cachePool.pool),c=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(c=n.memoizedState.cachePool.pool),c!==o&&(n.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Ul(t,t.updateQueue),He(t),null);case 4:return Ae(),e===null&&Hc(t.stateNode.containerInfo),He(t),null;case 10:return ya(t.type),He(t),null;case 19:if(U(Fe),n=t.memoizedState,n===null)return He(t),null;if(o=(t.flags&128)!==0,c=n.rendering,c===null)if(o)un(n,!1);else{if(Ye!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(c=Nl(e),c!==null){for(t.flags|=128,un(n,!1),e=c.updateQueue,t.updateQueue=e,Ul(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Um(a,e),a=a.sibling;return F(Fe,Fe.current&1|2),Ce&&ga(t,n.treeForkCount),t.child}e=e.sibling}n.tail!==null&&Mt()>Fl&&(t.flags|=128,o=!0,un(n,!1),t.lanes=4194304)}else{if(!o)if(e=Nl(c),e!==null){if(t.flags|=128,o=!0,e=e.updateQueue,t.updateQueue=e,Ul(t,e),un(n,!0),n.tail===null&&n.tailMode==="hidden"&&!c.alternate&&!Ce)return He(t),null}else 2*Mt()-n.renderingStartTime>Fl&&a!==536870912&&(t.flags|=128,o=!0,un(n,!1),t.lanes=4194304);n.isBackwards?(c.sibling=t.child,t.child=c):(e=n.last,e!==null?e.sibling=c:t.child=c,n.last=c)}return n.tail!==null?(e=n.tail,n.rendering=e,n.tail=e.sibling,n.renderingStartTime=Mt(),e.sibling=null,a=Fe.current,F(Fe,o?a&1|2:a&1),Ce&&ga(t,n.treeForkCount),e):(He(t),null);case 22:case 23:return Bt(t),Po(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(a&536870912)!==0&&(t.flags&128)===0&&(He(t),t.subtreeFlags&6&&(t.flags|=8192)):He(t),a=t.updateQueue,a!==null&&Ul(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==a&&(t.flags|=2048),e!==null&&U(wi),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),ya(We),He(t),null;case 25:return null;case 30:return null}throw Error(r(156,t.tag))}function $b(e,t){switch(To(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ya(We),Ae(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Tt(t),null;case 31:if(t.memoizedState!==null){if(Bt(t),t.alternate===null)throw Error(r(340));yi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Bt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(r(340));yi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return U(Fe),null;case 4:return Ae(),null;case 10:return ya(t.type),null;case 22:case 23:return Bt(t),Po(),e!==null&&U(wi),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ya(We),null;case 25:return null;default:return null}}function gf(e,t){switch(To(t),t.tag){case 3:ya(We),Ae();break;case 26:case 27:case 5:Tt(t);break;case 4:Ae();break;case 31:t.memoizedState!==null&&Bt(t);break;case 13:Bt(t);break;case 19:U(Fe);break;case 10:ya(t.type);break;case 22:case 23:Bt(t),Po(),e!==null&&U(wi);break;case 24:ya(We)}}function mn(e,t){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var o=n.next;a=o;do{if((a.tag&e)===e){n=void 0;var c=a.create,f=a.inst;n=c(),f.destroy=n}a=a.next}while(a!==o)}}catch(v){Re(t,t.return,v)}}function Qa(e,t,a){try{var n=t.updateQueue,o=n!==null?n.lastEffect:null;if(o!==null){var c=o.next;n=c;do{if((n.tag&e)===e){var f=n.inst,v=f.destroy;if(v!==void 0){f.destroy=void 0,o=t;var S=a,k=v;try{k()}catch(H){Re(o,S,H)}}}n=n.next}while(n!==c)}}catch(H){Re(t,t.return,H)}}function xf(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{lp(t,a)}catch(n){Re(e,e.return,n)}}}function yf(e,t,a){a.props=ji(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(n){Re(e,t,n)}}function pn(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof a=="function"?e.refCleanup=a(n):a.current=n}}catch(o){Re(e,t,o)}}function ra(e,t){var a=e.ref,n=e.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(o){Re(e,t,o)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(o){Re(e,t,o)}else a.current=null}function bf(e){var t=e.type,a=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(o){Re(e,e.return,o)}}function yc(e,t,a){try{var n=e.stateNode;wv(n,e.type,a,t),n[xt]=t}catch(o){Re(e,e.return,o)}}function vf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&$a(e.type)||e.tag===4}function bc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||vf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&$a(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function vc(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=pa));else if(n!==4&&(n===27&&$a(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(vc(e,t,a),e=e.sibling;e!==null;)vc(e,t,a),e=e.sibling}function _l(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(n!==4&&(n===27&&$a(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(_l(e,t,a),e=e.sibling;e!==null;)_l(e,t,a),e=e.sibling}function wf(e){var t=e.stateNode,a=e.memoizedProps;try{for(var n=e.type,o=t.attributes;o.length;)t.removeAttributeNode(o[0]);dt(t,n,a),t[lt]=e,t[xt]=a}catch(c){Re(e,e.return,c)}}var Aa=!1,$e=!1,wc=!1,Sf=typeof WeakSet=="function"?WeakSet:Set,nt=null;function ev(e,t){if(e=e.containerInfo,Uc=dr,e=Bm(e),fo(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var o=n.anchorOffset,c=n.focusNode;n=n.focusOffset;try{a.nodeType,c.nodeType}catch{a=null;break e}var f=0,v=-1,S=-1,k=0,H=0,_=e,R=null;t:for(;;){for(var L;_!==a||o!==0&&_.nodeType!==3||(v=f+o),_!==c||n!==0&&_.nodeType!==3||(S=f+n),_.nodeType===3&&(f+=_.nodeValue.length),(L=_.firstChild)!==null;)R=_,_=L;for(;;){if(_===e)break t;if(R===a&&++k===o&&(v=f),R===c&&++H===n&&(S=f),(L=_.nextSibling)!==null)break;_=R,R=_.parentNode}_=L}a=v===-1||S===-1?null:{start:v,end:S}}else a=null}a=a||{start:0,end:0}}else a=null;for(_c={focusedElem:e,selectionRange:a},dr=!1,nt=t;nt!==null;)if(t=nt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,nt=e;else for(;nt!==null;){switch(t=nt,c=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)o=e[a],o.ref.impl=o.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&c!==null){e=void 0,a=t,o=c.memoizedProps,c=c.memoizedState,n=a.stateNode;try{var te=ji(a.type,o);e=n.getSnapshotBeforeUpdate(te,c),n.__reactInternalSnapshotBeforeUpdate=e}catch(le){Re(a,a.return,le)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Qc(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Qc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=t.sibling,e!==null){e.return=t.return,nt=e;break}nt=t.return}}function Af(e,t,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:Ta(e,a),n&4&&mn(5,a);break;case 1:if(Ta(e,a),n&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(f){Re(a,a.return,f)}else{var o=ji(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(o,t,e.__reactInternalSnapshotBeforeUpdate)}catch(f){Re(a,a.return,f)}}n&64&&xf(a),n&512&&pn(a,a.return);break;case 3:if(Ta(e,a),n&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{lp(e,t)}catch(f){Re(a,a.return,f)}}break;case 27:t===null&&n&4&&wf(a);case 26:case 5:Ta(e,a),t===null&&n&4&&bf(a),n&512&&pn(a,a.return);break;case 12:Ta(e,a);break;case 31:Ta(e,a),n&4&&jf(e,a);break;case 13:Ta(e,a),n&4&&Mf(e,a),n&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=cv.bind(null,a),Nv(e,a))));break;case 22:if(n=a.memoizedState!==null||Aa,!n){t=t!==null&&t.memoizedState!==null||$e,o=Aa;var c=$e;Aa=n,($e=t)&&!c?ja(e,a,(a.subtreeFlags&8772)!==0):Ta(e,a),Aa=o,$e=c}break;case 30:break;default:Ta(e,a)}}function Cf(e){var t=e.alternate;t!==null&&(e.alternate=null,Cf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Wr(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Pe=null,bt=!1;function Ca(e,t,a){for(a=a.child;a!==null;)Tf(e,t,a),a=a.sibling}function Tf(e,t,a){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(Os,a)}catch{}switch(a.tag){case 26:$e||ra(a,t),Ca(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:$e||ra(a,t);var n=Pe,o=bt;$a(a.type)&&(Pe=a.stateNode,bt=!1),Ca(e,t,a),Sn(a.stateNode),Pe=n,bt=o;break;case 5:$e||ra(a,t);case 6:if(n=Pe,o=bt,Pe=null,Ca(e,t,a),Pe=n,bt=o,Pe!==null)if(bt)try{(Pe.nodeType===9?Pe.body:Pe.nodeName==="HTML"?Pe.ownerDocument.body:Pe).removeChild(a.stateNode)}catch(c){Re(a,t,c)}else try{Pe.removeChild(a.stateNode)}catch(c){Re(a,t,c)}break;case 18:Pe!==null&&(bt?(e=Pe,xh(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),bs(e)):xh(Pe,a.stateNode));break;case 4:n=Pe,o=bt,Pe=a.stateNode.containerInfo,bt=!0,Ca(e,t,a),Pe=n,bt=o;break;case 0:case 11:case 14:case 15:Qa(2,a,t),$e||Qa(4,a,t),Ca(e,t,a);break;case 1:$e||(ra(a,t),n=a.stateNode,typeof n.componentWillUnmount=="function"&&yf(a,t,n)),Ca(e,t,a);break;case 21:Ca(e,t,a);break;case 22:$e=(n=$e)||a.memoizedState!==null,Ca(e,t,a),$e=n;break;default:Ca(e,t,a)}}function jf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{bs(e)}catch(a){Re(t,t.return,a)}}}function Mf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{bs(e)}catch(a){Re(t,t.return,a)}}function tv(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Sf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Sf),t;default:throw Error(r(435,e.tag))}}function Gl(e,t){var a=tv(e);t.forEach(function(n){if(!a.has(n)){a.add(n);var o=dv.bind(null,e,n);n.then(o,o)}})}function vt(e,t){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var o=a[n],c=e,f=t,v=f;e:for(;v!==null;){switch(v.tag){case 27:if($a(v.type)){Pe=v.stateNode,bt=!1;break e}break;case 5:Pe=v.stateNode,bt=!1;break e;case 3:case 4:Pe=v.stateNode.containerInfo,bt=!0;break e}v=v.return}if(Pe===null)throw Error(r(160));Tf(c,f,o),Pe=null,bt=!1,c=o.alternate,c!==null&&(c.return=null),o.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Ef(t,e),t=t.sibling}var ea=null;function Ef(e,t){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:vt(t,e),wt(e),n&4&&(Qa(3,e,e.return),mn(3,e),Qa(5,e,e.return));break;case 1:vt(t,e),wt(e),n&512&&($e||a===null||ra(a,a.return)),n&64&&Aa&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var o=ea;if(vt(t,e),wt(e),n&512&&($e||a===null||ra(a,a.return)),n&4){var c=a!==null?a.memoizedState:null;if(n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null){e:{n=e.type,a=e.memoizedProps,o=o.ownerDocument||o;t:switch(n){case"title":c=o.getElementsByTagName("title")[0],(!c||c[Hs]||c[lt]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=o.createElement(n),o.head.insertBefore(c,o.querySelector("head > title"))),dt(c,n,a),c[lt]=e,st(c),n=c;break e;case"link":var f=Eh("link","href",o).get(n+(a.href||""));if(f){for(var v=0;v<f.length;v++)if(c=f[v],c.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&c.getAttribute("rel")===(a.rel==null?null:a.rel)&&c.getAttribute("title")===(a.title==null?null:a.title)&&c.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){f.splice(v,1);break t}}c=o.createElement(n),dt(c,n,a),o.head.appendChild(c);break;case"meta":if(f=Eh("meta","content",o).get(n+(a.content||""))){for(v=0;v<f.length;v++)if(c=f[v],c.getAttribute("content")===(a.content==null?null:""+a.content)&&c.getAttribute("name")===(a.name==null?null:a.name)&&c.getAttribute("property")===(a.property==null?null:a.property)&&c.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&c.getAttribute("charset")===(a.charSet==null?null:a.charSet)){f.splice(v,1);break t}}c=o.createElement(n),dt(c,n,a),o.head.appendChild(c);break;default:throw Error(r(468,n))}c[lt]=e,st(c),n=c}e.stateNode=n}else Nh(o,e.type,e.stateNode);else e.stateNode=Mh(o,n,e.memoizedProps);else c!==n?(c===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):c.count--,n===null?Nh(o,e.type,e.stateNode):Mh(o,n,e.memoizedProps)):n===null&&e.stateNode!==null&&yc(e,e.memoizedProps,a.memoizedProps)}break;case 27:vt(t,e),wt(e),n&512&&($e||a===null||ra(a,a.return)),a!==null&&n&4&&yc(e,e.memoizedProps,a.memoizedProps);break;case 5:if(vt(t,e),wt(e),n&512&&($e||a===null||ra(a,a.return)),e.flags&32){o=e.stateNode;try{Ui(o,"")}catch(te){Re(e,e.return,te)}}n&4&&e.stateNode!=null&&(o=e.memoizedProps,yc(e,o,a!==null?a.memoizedProps:o)),n&1024&&(wc=!0);break;case 6:if(vt(t,e),wt(e),n&4){if(e.stateNode===null)throw Error(r(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n}catch(te){Re(e,e.return,te)}}break;case 3:if(lr=null,o=ea,ea=sr(t.containerInfo),vt(t,e),ea=o,wt(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{bs(t.containerInfo)}catch(te){Re(e,e.return,te)}wc&&(wc=!1,Nf(e));break;case 4:n=ea,ea=sr(e.stateNode.containerInfo),vt(t,e),wt(e),ea=n;break;case 12:vt(t,e),wt(e);break;case 31:vt(t,e),wt(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Gl(e,n)));break;case 13:vt(t,e),wt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ql=Mt()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Gl(e,n)));break;case 22:o=e.memoizedState!==null;var S=a!==null&&a.memoizedState!==null,k=Aa,H=$e;if(Aa=k||o,$e=H||S,vt(t,e),$e=H,Aa=k,wt(e),n&8192)e:for(t=e.stateNode,t._visibility=o?t._visibility&-2:t._visibility|1,o&&(a===null||S||Aa||$e||Mi(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){S=a=t;try{if(c=S.stateNode,o)f=c.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{v=S.stateNode;var _=S.memoizedProps.style,R=_!=null&&_.hasOwnProperty("display")?_.display:null;v.style.display=R==null||typeof R=="boolean"?"":(""+R).trim()}}catch(te){Re(S,S.return,te)}}}else if(t.tag===6){if(a===null){S=t;try{S.stateNode.nodeValue=o?"":S.memoizedProps}catch(te){Re(S,S.return,te)}}}else if(t.tag===18){if(a===null){S=t;try{var L=S.stateNode;o?yh(L,!0):yh(S.stateNode,!1)}catch(te){Re(S,S.return,te)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Gl(e,a))));break;case 19:vt(t,e),wt(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Gl(e,n)));break;case 30:break;case 21:break;default:vt(t,e),wt(e)}}function wt(e){var t=e.flags;if(t&2){try{for(var a,n=e.return;n!==null;){if(vf(n)){a=n;break}n=n.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var o=a.stateNode,c=bc(e);_l(e,c,o);break;case 5:var f=a.stateNode;a.flags&32&&(Ui(f,""),a.flags&=-33);var v=bc(e);_l(e,v,f);break;case 3:case 4:var S=a.stateNode.containerInfo,k=bc(e);vc(e,k,S);break;default:throw Error(r(161))}}catch(H){Re(e,e.return,H)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Nf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Nf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Ta(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Af(e,t.alternate,t),t=t.sibling}function Mi(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Qa(4,t,t.return),Mi(t);break;case 1:ra(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&yf(t,t.return,a),Mi(t);break;case 27:Sn(t.stateNode);case 26:case 5:ra(t,t.return),Mi(t);break;case 22:t.memoizedState===null&&Mi(t);break;case 30:Mi(t);break;default:Mi(t)}e=e.sibling}}function ja(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,o=e,c=t,f=c.flags;switch(c.tag){case 0:case 11:case 15:ja(o,c,a),mn(4,c);break;case 1:if(ja(o,c,a),n=c,o=n.stateNode,typeof o.componentDidMount=="function")try{o.componentDidMount()}catch(k){Re(n,n.return,k)}if(n=c,o=n.updateQueue,o!==null){var v=n.stateNode;try{var S=o.shared.hiddenCallbacks;if(S!==null)for(o.shared.hiddenCallbacks=null,o=0;o<S.length;o++)np(S[o],v)}catch(k){Re(n,n.return,k)}}a&&f&64&&xf(c),pn(c,c.return);break;case 27:wf(c);case 26:case 5:ja(o,c,a),a&&n===null&&f&4&&bf(c),pn(c,c.return);break;case 12:ja(o,c,a);break;case 31:ja(o,c,a),a&&f&4&&jf(o,c);break;case 13:ja(o,c,a),a&&f&4&&Mf(o,c);break;case 22:c.memoizedState===null&&ja(o,c,a),pn(c,c.return);break;case 30:break;default:ja(o,c,a)}t=t.sibling}}function Sc(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Js(a))}function Ac(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Js(e))}function ta(e,t,a,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Df(e,t,a,n),t=t.sibling}function Df(e,t,a,n){var o=t.flags;switch(t.tag){case 0:case 11:case 15:ta(e,t,a,n),o&2048&&mn(9,t);break;case 1:ta(e,t,a,n);break;case 3:ta(e,t,a,n),o&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Js(e)));break;case 12:if(o&2048){ta(e,t,a,n),e=t.stateNode;try{var c=t.memoizedProps,f=c.id,v=c.onPostCommit;typeof v=="function"&&v(f,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(S){Re(t,t.return,S)}}else ta(e,t,a,n);break;case 31:ta(e,t,a,n);break;case 13:ta(e,t,a,n);break;case 23:break;case 22:c=t.stateNode,f=t.alternate,t.memoizedState!==null?c._visibility&2?ta(e,t,a,n):fn(e,t):c._visibility&2?ta(e,t,a,n):(c._visibility|=2,os(e,t,a,n,(t.subtreeFlags&10256)!==0||!1)),o&2048&&Sc(f,t);break;case 24:ta(e,t,a,n),o&2048&&Ac(t.alternate,t);break;default:ta(e,t,a,n)}}function os(e,t,a,n,o){for(o=o&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var c=e,f=t,v=a,S=n,k=f.flags;switch(f.tag){case 0:case 11:case 15:os(c,f,v,S,o),mn(8,f);break;case 23:break;case 22:var H=f.stateNode;f.memoizedState!==null?H._visibility&2?os(c,f,v,S,o):fn(c,f):(H._visibility|=2,os(c,f,v,S,o)),o&&k&2048&&Sc(f.alternate,f);break;case 24:os(c,f,v,S,o),o&&k&2048&&Ac(f.alternate,f);break;default:os(c,f,v,S,o)}t=t.sibling}}function fn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,n=t,o=n.flags;switch(n.tag){case 22:fn(a,n),o&2048&&Sc(n.alternate,n);break;case 24:fn(a,n),o&2048&&Ac(n.alternate,n);break;default:fn(a,n)}t=t.sibling}}var hn=8192;function cs(e,t,a){if(e.subtreeFlags&hn)for(e=e.child;e!==null;)kf(e,t,a),e=e.sibling}function kf(e,t,a){switch(e.tag){case 26:cs(e,t,a),e.flags&hn&&e.memoizedState!==null&&Iv(a,ea,e.memoizedState,e.memoizedProps);break;case 5:cs(e,t,a);break;case 3:case 4:var n=ea;ea=sr(e.stateNode.containerInfo),cs(e,t,a),ea=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=hn,hn=16777216,cs(e,t,a),hn=n):cs(e,t,a));break;default:cs(e,t,a)}}function Rf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function gn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];nt=n,zf(n,e)}Rf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Bf(e),e=e.sibling}function Bf(e){switch(e.tag){case 0:case 11:case 15:gn(e),e.flags&2048&&Qa(9,e,e.return);break;case 3:gn(e);break;case 12:gn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Yl(e)):gn(e);break;default:gn(e)}}function Yl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];nt=n,zf(n,e)}Rf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Qa(8,t,t.return),Yl(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Yl(t));break;default:Yl(t)}e=e.sibling}}function zf(e,t){for(;nt!==null;){var a=nt;switch(a.tag){case 0:case 11:case 15:Qa(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:Js(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,nt=n;else e:for(a=e;nt!==null;){n=nt;var o=n.sibling,c=n.return;if(Cf(n),n===a){nt=null;break e}if(o!==null){o.return=c,nt=o;break e}nt=c}}}var av={getCacheForType:function(e){var t=ot(We),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return ot(We).controller.signal}},iv=typeof WeakMap=="function"?WeakMap:Map,Ne=0,Oe=null,xe=null,ve=0,ke=0,zt=null,Fa=!1,ds=!1,Cc=!1,Ma=0,Ye=0,Ka=0,Ei=0,Tc=0,Lt=0,us=0,xn=null,St=null,jc=!1,Ql=0,Lf=0,Fl=1/0,Kl=null,Xa=null,tt=0,Wa=null,ms=null,Ea=0,Mc=0,Ec=null,Of=null,yn=0,Nc=null;function Ot(){return(Ne&2)!==0&&ve!==0?ve&-ve:V.T!==null?Lc():Zu()}function qf(){if(Lt===0)if((ve&536870912)===0||Ce){var e=al;al<<=1,(al&3932160)===0&&(al=262144),Lt=e}else Lt=536870912;return e=Rt.current,e!==null&&(e.flags|=32),Lt}function At(e,t,a){(e===Oe&&(ke===2||ke===9)||e.cancelPendingCommit!==null)&&(ps(e,0),Za(e,ve,Lt,!1)),Vs(e,a),((Ne&2)===0||e!==Oe)&&(e===Oe&&((Ne&2)===0&&(Ei|=a),Ye===4&&Za(e,ve,Lt,!1)),oa(e))}function Vf(e,t,a){if((Ne&6)!==0)throw Error(r(327));var n=!a&&(t&127)===0&&(t&e.expiredLanes)===0||qs(e,t),o=n?lv(e,t):kc(e,t,!0),c=n;do{if(o===0){ds&&!n&&Za(e,t,0,!1);break}else{if(a=e.current.alternate,c&&!sv(a)){o=kc(e,t,!1),c=!1;continue}if(o===2){if(c=t,e.errorRecoveryDisabledLanes&c)var f=0;else f=e.pendingLanes&-536870913,f=f!==0?f:f&536870912?536870912:0;if(f!==0){t=f;e:{var v=e;o=xn;var S=v.current.memoizedState.isDehydrated;if(S&&(ps(v,f).flags|=256),f=kc(v,f,!1),f!==2){if(Cc&&!S){v.errorRecoveryDisabledLanes|=c,Ei|=c,o=4;break e}c=St,St=o,c!==null&&(St===null?St=c:St.push.apply(St,c))}o=f}if(c=!1,o!==2)continue}}if(o===1){ps(e,0),Za(e,t,0,!0);break}e:{switch(n=e,c=o,c){case 0:case 1:throw Error(r(345));case 4:if((t&4194048)!==t)break;case 6:Za(n,t,Lt,!Fa);break e;case 2:St=null;break;case 3:case 5:break;default:throw Error(r(329))}if((t&62914560)===t&&(o=Ql+300-Mt(),10<o)){if(Za(n,t,Lt,!Fa),sl(n,0,!0)!==0)break e;Ea=t,n.timeoutHandle=hh(Hf.bind(null,n,a,St,Kl,jc,t,Lt,Ei,us,Fa,c,"Throttled",-0,0),o);break e}Hf(n,a,St,Kl,jc,t,Lt,Ei,us,Fa,c,null,-0,0)}}break}while(!0);oa(e)}function Hf(e,t,a,n,o,c,f,v,S,k,H,_,R,L){if(e.timeoutHandle=-1,_=t.subtreeFlags,_&8192||(_&16785408)===16785408){_={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:pa},kf(t,c,_);var te=(c&62914560)===c?Ql-Mt():(c&4194048)===c?Lf-Mt():0;if(te=Uv(_,te),te!==null){Ea=c,e.cancelPendingCommit=te(Ff.bind(null,e,t,c,a,n,o,f,v,S,H,_,null,R,L)),Za(e,c,f,!k);return}}Ff(e,t,c,a,n,o,f,v,S)}function sv(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var o=a[n],c=o.getSnapshot;o=o.value;try{if(!Dt(c(),o))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Za(e,t,a,n){t&=~Tc,t&=~Ei,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var o=t;0<o;){var c=31-Nt(o),f=1<<c;n[c]=-1,o&=~f}a!==0&&Ku(e,a,t)}function Xl(){return(Ne&6)===0?(bn(0),!1):!0}function Dc(){if(xe!==null){if(ke===0)var e=xe.return;else e=xe,xa=bi=null,Qo(e),is=null,en=0,e=xe;for(;e!==null;)gf(e.alternate,e),e=e.return;xe=null}}function ps(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Cv(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Ea=0,Dc(),Oe=e,xe=a=ha(e.current,null),ve=t,ke=0,zt=null,Fa=!1,ds=qs(e,t),Cc=!1,us=Lt=Tc=Ei=Ka=Ye=0,St=xn=null,jc=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var o=31-Nt(n),c=1<<o;t|=e[o],n&=~c}return Ma=t,gl(),a}function Pf(e,t){me=null,V.H=cn,t===as||t===Cl?(t=tp(),ke=3):t===zo?(t=tp(),ke=4):ke=t===oc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,zt=t,xe===null&&(Ye=1,Vl(e,_t(t,e.current)))}function If(){var e=Rt.current;return e===null?!0:(ve&4194048)===ve?Ft===null:(ve&62914560)===ve||(ve&536870912)!==0?e===Ft:!1}function Uf(){var e=V.H;return V.H=cn,e===null?cn:e}function _f(){var e=V.A;return V.A=av,e}function Wl(){Ye=4,Fa||(ve&4194048)!==ve&&Rt.current!==null||(ds=!0),(Ka&134217727)===0&&(Ei&134217727)===0||Oe===null||Za(Oe,ve,Lt,!1)}function kc(e,t,a){var n=Ne;Ne|=2;var o=Uf(),c=_f();(Oe!==e||ve!==t)&&(Kl=null,ps(e,t)),t=!1;var f=Ye;e:do try{if(ke!==0&&xe!==null){var v=xe,S=zt;switch(ke){case 8:Dc(),f=6;break e;case 3:case 2:case 9:case 6:Rt.current===null&&(t=!0);var k=ke;if(ke=0,zt=null,fs(e,v,S,k),a&&ds){f=0;break e}break;default:k=ke,ke=0,zt=null,fs(e,v,S,k)}}nv(),f=Ye;break}catch(H){Pf(e,H)}while(!0);return t&&e.shellSuspendCounter++,xa=bi=null,Ne=n,V.H=o,V.A=c,xe===null&&(Oe=null,ve=0,gl()),f}function nv(){for(;xe!==null;)Gf(xe)}function lv(e,t){var a=Ne;Ne|=2;var n=Uf(),o=_f();Oe!==e||ve!==t?(Kl=null,Fl=Mt()+500,ps(e,t)):ds=qs(e,t);e:do try{if(ke!==0&&xe!==null){t=xe;var c=zt;t:switch(ke){case 1:ke=0,zt=null,fs(e,t,c,1);break;case 2:case 9:if($m(c)){ke=0,zt=null,Yf(t);break}t=function(){ke!==2&&ke!==9||Oe!==e||(ke=7),oa(e)},c.then(t,t);break e;case 3:ke=7;break e;case 4:ke=5;break e;case 7:$m(c)?(ke=0,zt=null,Yf(t)):(ke=0,zt=null,fs(e,t,c,7));break;case 5:var f=null;switch(xe.tag){case 26:f=xe.memoizedState;case 5:case 27:var v=xe;if(f?Dh(f):v.stateNode.complete){ke=0,zt=null;var S=v.sibling;if(S!==null)xe=S;else{var k=v.return;k!==null?(xe=k,Zl(k)):xe=null}break t}}ke=0,zt=null,fs(e,t,c,5);break;case 6:ke=0,zt=null,fs(e,t,c,6);break;case 8:Dc(),Ye=6;break e;default:throw Error(r(462))}}rv();break}catch(H){Pf(e,H)}while(!0);return xa=bi=null,V.H=n,V.A=o,Ne=a,xe!==null?0:(Oe=null,ve=0,gl(),Ye)}function rv(){for(;xe!==null&&!Dy();)Gf(xe)}function Gf(e){var t=ff(e.alternate,e,Ma);e.memoizedProps=e.pendingProps,t===null?Zl(e):xe=t}function Yf(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=of(a,t,t.pendingProps,t.type,void 0,ve);break;case 11:t=of(a,t,t.pendingProps,t.type.render,t.ref,ve);break;case 5:Qo(t);default:gf(a,t),t=xe=Um(t,Ma),t=ff(a,t,Ma)}e.memoizedProps=e.pendingProps,t===null?Zl(e):xe=t}function fs(e,t,a,n){xa=bi=null,Qo(t),is=null,en=0;var o=t.return;try{if(Xb(e,o,t,a,ve)){Ye=1,Vl(e,_t(a,e.current)),xe=null;return}}catch(c){if(o!==null)throw xe=o,c;Ye=1,Vl(e,_t(a,e.current)),xe=null;return}t.flags&32768?(Ce||n===1?e=!0:ds||(ve&536870912)!==0?e=!1:(Fa=e=!0,(n===2||n===9||n===3||n===6)&&(n=Rt.current,n!==null&&n.tag===13&&(n.flags|=16384))),Qf(t,e)):Zl(t)}function Zl(e){var t=e;do{if((t.flags&32768)!==0){Qf(t,Fa);return}e=t.return;var a=Jb(t.alternate,t,Ma);if(a!==null){xe=a;return}if(t=t.sibling,t!==null){xe=t;return}xe=t=e}while(t!==null);Ye===0&&(Ye=5)}function Qf(e,t){do{var a=$b(e.alternate,e);if(a!==null){a.flags&=32767,xe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){xe=e;return}xe=e=a}while(e!==null);Ye=6,xe=null}function Ff(e,t,a,n,o,c,f,v,S){e.cancelPendingCommit=null;do Jl();while(tt!==0);if((Ne&6)!==0)throw Error(r(327));if(t!==null){if(t===e.current)throw Error(r(177));if(c=t.lanes|t.childLanes,c|=bo,Py(e,a,c,f,v,S),e===Oe&&(xe=Oe=null,ve=0),ms=t,Wa=e,Ea=a,Mc=c,Ec=o,Of=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,uv(el,function(){return Jf(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=V.T,V.T=null,o=G.p,G.p=2,f=Ne,Ne|=4;try{ev(e,t,a)}finally{Ne=f,G.p=o,V.T=n}}tt=1,Kf(),Xf(),Wf()}}function Kf(){if(tt===1){tt=0;var e=Wa,t=ms,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=V.T,V.T=null;var n=G.p;G.p=2;var o=Ne;Ne|=4;try{Ef(t,e);var c=_c,f=Bm(e.containerInfo),v=c.focusedElem,S=c.selectionRange;if(f!==v&&v&&v.ownerDocument&&Rm(v.ownerDocument.documentElement,v)){if(S!==null&&fo(v)){var k=S.start,H=S.end;if(H===void 0&&(H=k),"selectionStart"in v)v.selectionStart=k,v.selectionEnd=Math.min(H,v.value.length);else{var _=v.ownerDocument||document,R=_&&_.defaultView||window;if(R.getSelection){var L=R.getSelection(),te=v.textContent.length,le=Math.min(S.start,te),Le=S.end===void 0?le:Math.min(S.end,te);!L.extend&&le>Le&&(f=Le,Le=le,le=f);var N=km(v,le),C=km(v,Le);if(N&&C&&(L.rangeCount!==1||L.anchorNode!==N.node||L.anchorOffset!==N.offset||L.focusNode!==C.node||L.focusOffset!==C.offset)){var D=_.createRange();D.setStart(N.node,N.offset),L.removeAllRanges(),le>Le?(L.addRange(D),L.extend(C.node,C.offset)):(D.setEnd(C.node,C.offset),L.addRange(D))}}}}for(_=[],L=v;L=L.parentNode;)L.nodeType===1&&_.push({element:L,left:L.scrollLeft,top:L.scrollTop});for(typeof v.focus=="function"&&v.focus(),v=0;v<_.length;v++){var I=_[v];I.element.scrollLeft=I.left,I.element.scrollTop=I.top}}dr=!!Uc,_c=Uc=null}finally{Ne=o,G.p=n,V.T=a}}e.current=t,tt=2}}function Xf(){if(tt===2){tt=0;var e=Wa,t=ms,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=V.T,V.T=null;var n=G.p;G.p=2;var o=Ne;Ne|=4;try{Af(e,t.alternate,t)}finally{Ne=o,G.p=n,V.T=a}}tt=3}}function Wf(){if(tt===4||tt===3){tt=0,ky();var e=Wa,t=ms,a=Ea,n=Of;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?tt=5:(tt=0,ms=Wa=null,Zf(e,e.pendingLanes));var o=e.pendingLanes;if(o===0&&(Xa=null),Kr(a),t=t.stateNode,Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(Os,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=V.T,o=G.p,G.p=2,V.T=null;try{for(var c=e.onRecoverableError,f=0;f<n.length;f++){var v=n[f];c(v.value,{componentStack:v.stack})}}finally{V.T=t,G.p=o}}(Ea&3)!==0&&Jl(),oa(e),o=e.pendingLanes,(a&261930)!==0&&(o&42)!==0?e===Nc?yn++:(yn=0,Nc=e):yn=0,bn(0)}}function Zf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Js(t)))}function Jl(){return Kf(),Xf(),Wf(),Jf()}function Jf(){if(tt!==5)return!1;var e=Wa,t=Mc;Mc=0;var a=Kr(Ea),n=V.T,o=G.p;try{G.p=32>a?32:a,V.T=null,a=Ec,Ec=null;var c=Wa,f=Ea;if(tt=0,ms=Wa=null,Ea=0,(Ne&6)!==0)throw Error(r(331));var v=Ne;if(Ne|=4,Bf(c.current),Df(c,c.current,f,a),Ne=v,bn(0,!1),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(Os,c)}catch{}return!0}finally{G.p=o,V.T=n,Zf(e,t)}}function $f(e,t,a){t=_t(a,t),t=rc(e.stateNode,t,2),e=_a(e,t,2),e!==null&&(Vs(e,2),oa(e))}function Re(e,t,a){if(e.tag===3)$f(e,e,a);else for(;t!==null;){if(t.tag===3){$f(t,e,a);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Xa===null||!Xa.has(n))){e=_t(a,e),a=$p(2),n=_a(t,a,2),n!==null&&(ef(a,n,t,e),Vs(n,2),oa(n));break}}t=t.return}}function Rc(e,t,a){var n=e.pingCache;if(n===null){n=e.pingCache=new iv;var o=new Set;n.set(t,o)}else o=n.get(t),o===void 0&&(o=new Set,n.set(t,o));o.has(a)||(Cc=!0,o.add(a),e=ov.bind(null,e,t,a),t.then(e,e))}function ov(e,t,a){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Oe===e&&(ve&a)===a&&(Ye===4||Ye===3&&(ve&62914560)===ve&&300>Mt()-Ql?(Ne&2)===0&&ps(e,0):Tc|=a,us===ve&&(us=0)),oa(e)}function eh(e,t){t===0&&(t=Fu()),e=gi(e,t),e!==null&&(Vs(e,t),oa(e))}function cv(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),eh(e,a)}function dv(e,t){var a=0;switch(e.tag){case 31:case 13:var n=e.stateNode,o=e.memoizedState;o!==null&&(a=o.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(r(314))}n!==null&&n.delete(t),eh(e,a)}function uv(e,t){return Gr(e,t)}var $l=null,hs=null,Bc=!1,er=!1,zc=!1,Ja=0;function oa(e){e!==hs&&e.next===null&&(hs===null?$l=hs=e:hs=hs.next=e),er=!0,Bc||(Bc=!0,pv())}function bn(e,t){if(!zc&&er){zc=!0;do for(var a=!1,n=$l;n!==null;){if(e!==0){var o=n.pendingLanes;if(o===0)var c=0;else{var f=n.suspendedLanes,v=n.pingedLanes;c=(1<<31-Nt(42|e)+1)-1,c&=o&~(f&~v),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(a=!0,sh(n,c))}else c=ve,c=sl(n,n===Oe?c:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(c&3)===0||qs(n,c)||(a=!0,sh(n,c));n=n.next}while(a);zc=!1}}function mv(){th()}function th(){er=Bc=!1;var e=0;Ja!==0&&Av()&&(e=Ja);for(var t=Mt(),a=null,n=$l;n!==null;){var o=n.next,c=ah(n,t);c===0?(n.next=null,a===null?$l=o:a.next=o,o===null&&(hs=a)):(a=n,(e!==0||(c&3)!==0)&&(er=!0)),n=o}tt!==0&&tt!==5||bn(e),Ja!==0&&(Ja=0)}function ah(e,t){for(var a=e.suspendedLanes,n=e.pingedLanes,o=e.expirationTimes,c=e.pendingLanes&-62914561;0<c;){var f=31-Nt(c),v=1<<f,S=o[f];S===-1?((v&a)===0||(v&n)!==0)&&(o[f]=Hy(v,t)):S<=t&&(e.expiredLanes|=v),c&=~v}if(t=Oe,a=ve,a=sl(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,a===0||e===t&&(ke===2||ke===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&Yr(n),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||qs(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(n!==null&&Yr(n),Kr(a)){case 2:case 8:a=Yu;break;case 32:a=el;break;case 268435456:a=Qu;break;default:a=el}return n=ih.bind(null,e),a=Gr(a,n),e.callbackPriority=t,e.callbackNode=a,t}return n!==null&&n!==null&&Yr(n),e.callbackPriority=2,e.callbackNode=null,2}function ih(e,t){if(tt!==0&&tt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Jl()&&e.callbackNode!==a)return null;var n=ve;return n=sl(e,e===Oe?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(Vf(e,n,t),ah(e,Mt()),e.callbackNode!=null&&e.callbackNode===a?ih.bind(null,e):null)}function sh(e,t){if(Jl())return null;Vf(e,t,!0)}function pv(){Tv(function(){(Ne&6)!==0?Gr(Gu,mv):th()})}function Lc(){if(Ja===0){var e=es;e===0&&(e=tl,tl<<=1,(tl&261888)===0&&(tl=256)),Ja=e}return Ja}function nh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ol(""+e)}function lh(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function fv(e,t,a,n,o){if(t==="submit"&&a&&a.stateNode===o){var c=nh((o[xt]||null).action),f=n.submitter;f&&(t=(t=f[xt]||null)?nh(t.formAction):f.getAttribute("formAction"),t!==null&&(c=t,f=null));var v=new ml("action","action",null,n,o);e.push({event:v,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(Ja!==0){var S=f?lh(o,f):new FormData(o);tc(a,{pending:!0,data:S,method:o.method,action:c},null,S)}}else typeof c=="function"&&(v.preventDefault(),S=f?lh(o,f):new FormData(o),tc(a,{pending:!0,data:S,method:o.method,action:c},c,S))},currentTarget:o}]})}}for(var Oc=0;Oc<yo.length;Oc++){var qc=yo[Oc],hv=qc.toLowerCase(),gv=qc[0].toUpperCase()+qc.slice(1);$t(hv,"on"+gv)}$t(Om,"onAnimationEnd"),$t(qm,"onAnimationIteration"),$t(Vm,"onAnimationStart"),$t("dblclick","onDoubleClick"),$t("focusin","onFocus"),$t("focusout","onBlur"),$t(Rb,"onTransitionRun"),$t(Bb,"onTransitionStart"),$t(zb,"onTransitionCancel"),$t(Hm,"onTransitionEnd"),Pi("onMouseEnter",["mouseout","mouseover"]),Pi("onMouseLeave",["mouseout","mouseover"]),Pi("onPointerEnter",["pointerout","pointerover"]),Pi("onPointerLeave",["pointerout","pointerover"]),mi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),mi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),mi("onBeforeInput",["compositionend","keypress","textInput","paste"]),mi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),mi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),mi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(vn));function rh(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],o=n.event;n=n.listeners;e:{var c=void 0;if(t)for(var f=n.length-1;0<=f;f--){var v=n[f],S=v.instance,k=v.currentTarget;if(v=v.listener,S!==c&&o.isPropagationStopped())break e;c=v,o.currentTarget=k;try{c(o)}catch(H){hl(H)}o.currentTarget=null,c=S}else for(f=0;f<n.length;f++){if(v=n[f],S=v.instance,k=v.currentTarget,v=v.listener,S!==c&&o.isPropagationStopped())break e;c=v,o.currentTarget=k;try{c(o)}catch(H){hl(H)}o.currentTarget=null,c=S}}}}function ye(e,t){var a=t[Xr];a===void 0&&(a=t[Xr]=new Set);var n=e+"__bubble";a.has(n)||(oh(t,e,2,!1),a.add(n))}function Vc(e,t,a){var n=0;t&&(n|=4),oh(a,e,n,t)}var tr="_reactListening"+Math.random().toString(36).slice(2);function Hc(e){if(!e[tr]){e[tr]=!0,em.forEach(function(a){a!=="selectionchange"&&(xv.has(a)||Vc(a,!1,e),Vc(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[tr]||(t[tr]=!0,Vc("selectionchange",!1,t))}}function oh(e,t,a,n){switch(qh(t)){case 2:var o=Yv;break;case 8:o=Qv;break;default:o=ed}a=o.bind(null,t,a,e),o=void 0,!so||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),n?o!==void 0?e.addEventListener(t,a,{capture:!0,passive:o}):e.addEventListener(t,a,!0):o!==void 0?e.addEventListener(t,a,{passive:o}):e.addEventListener(t,a,!1)}function Pc(e,t,a,n,o){var c=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var f=n.tag;if(f===3||f===4){var v=n.stateNode.containerInfo;if(v===o)break;if(f===4)for(f=n.return;f!==null;){var S=f.tag;if((S===3||S===4)&&f.stateNode.containerInfo===o)return;f=f.return}for(;v!==null;){if(f=qi(v),f===null)return;if(S=f.tag,S===5||S===6||S===26||S===27){n=c=f;continue e}v=v.parentNode}}n=n.return}mm(function(){var k=c,H=ao(a),_=[];e:{var R=Pm.get(e);if(R!==void 0){var L=ml,te=e;switch(e){case"keypress":if(dl(a)===0)break e;case"keydown":case"keyup":L=db;break;case"focusin":te="focus",L=oo;break;case"focusout":te="blur",L=oo;break;case"beforeblur":case"afterblur":L=oo;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":L=hm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":L=Jy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":L=pb;break;case Om:case qm:case Vm:L=tb;break;case Hm:L=hb;break;case"scroll":case"scrollend":L=Wy;break;case"wheel":L=xb;break;case"copy":case"cut":case"paste":L=ib;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":L=xm;break;case"toggle":case"beforetoggle":L=bb}var le=(t&4)!==0,Le=!le&&(e==="scroll"||e==="scrollend"),N=le?R!==null?R+"Capture":null:R;le=[];for(var C=k,D;C!==null;){var I=C;if(D=I.stateNode,I=I.tag,I!==5&&I!==26&&I!==27||D===null||N===null||(I=Is(C,N),I!=null&&le.push(wn(C,I,D))),Le)break;C=C.return}0<le.length&&(R=new L(R,te,null,a,H),_.push({event:R,listeners:le}))}}if((t&7)===0){e:{if(R=e==="mouseover"||e==="pointerover",L=e==="mouseout"||e==="pointerout",R&&a!==to&&(te=a.relatedTarget||a.fromElement)&&(qi(te)||te[Oi]))break e;if((L||R)&&(R=H.window===H?H:(R=H.ownerDocument)?R.defaultView||R.parentWindow:window,L?(te=a.relatedTarget||a.toElement,L=k,te=te?qi(te):null,te!==null&&(Le=m(te),le=te.tag,te!==Le||le!==5&&le!==27&&le!==6)&&(te=null)):(L=null,te=k),L!==te)){if(le=hm,I="onMouseLeave",N="onMouseEnter",C="mouse",(e==="pointerout"||e==="pointerover")&&(le=xm,I="onPointerLeave",N="onPointerEnter",C="pointer"),Le=L==null?R:Ps(L),D=te==null?R:Ps(te),R=new le(I,C+"leave",L,a,H),R.target=Le,R.relatedTarget=D,I=null,qi(H)===k&&(le=new le(N,C+"enter",te,a,H),le.target=D,le.relatedTarget=Le,I=le),Le=I,L&&te)t:{for(le=yv,N=L,C=te,D=0,I=N;I;I=le(I))D++;I=0;for(var se=C;se;se=le(se))I++;for(;0<D-I;)N=le(N),D--;for(;0<I-D;)C=le(C),I--;for(;D--;){if(N===C||C!==null&&N===C.alternate){le=N;break t}N=le(N),C=le(C)}le=null}else le=null;L!==null&&ch(_,R,L,le,!1),te!==null&&Le!==null&&ch(_,Le,te,le,!0)}}e:{if(R=k?Ps(k):window,L=R.nodeName&&R.nodeName.toLowerCase(),L==="select"||L==="input"&&R.type==="file")var je=Tm;else if(Am(R))if(jm)je=Nb;else{je=Mb;var ae=jb}else L=R.nodeName,!L||L.toLowerCase()!=="input"||R.type!=="checkbox"&&R.type!=="radio"?k&&eo(k.elementType)&&(je=Tm):je=Eb;if(je&&(je=je(e,k))){Cm(_,je,a,H);break e}ae&&ae(e,R,k),e==="focusout"&&k&&R.type==="number"&&k.memoizedProps.value!=null&&$r(R,"number",R.value)}switch(ae=k?Ps(k):window,e){case"focusin":(Am(ae)||ae.contentEditable==="true")&&(Qi=ae,ho=k,Xs=null);break;case"focusout":Xs=ho=Qi=null;break;case"mousedown":go=!0;break;case"contextmenu":case"mouseup":case"dragend":go=!1,zm(_,a,H);break;case"selectionchange":if(kb)break;case"keydown":case"keyup":zm(_,a,H)}var pe;if(uo)e:{switch(e){case"compositionstart":var we="onCompositionStart";break e;case"compositionend":we="onCompositionEnd";break e;case"compositionupdate":we="onCompositionUpdate";break e}we=void 0}else Yi?wm(e,a)&&(we="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(we="onCompositionStart");we&&(ym&&a.locale!=="ko"&&(Yi||we!=="onCompositionStart"?we==="onCompositionEnd"&&Yi&&(pe=pm()):(Oa=H,no="value"in Oa?Oa.value:Oa.textContent,Yi=!0)),ae=ar(k,we),0<ae.length&&(we=new gm(we,e,null,a,H),_.push({event:we,listeners:ae}),pe?we.data=pe:(pe=Sm(a),pe!==null&&(we.data=pe)))),(pe=wb?Sb(e,a):Ab(e,a))&&(we=ar(k,"onBeforeInput"),0<we.length&&(ae=new gm("onBeforeInput","beforeinput",null,a,H),_.push({event:ae,listeners:we}),ae.data=pe)),fv(_,e,k,a,H)}rh(_,t)})}function wn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function ar(e,t){for(var a=t+"Capture",n=[];e!==null;){var o=e,c=o.stateNode;if(o=o.tag,o!==5&&o!==26&&o!==27||c===null||(o=Is(e,a),o!=null&&n.unshift(wn(e,o,c)),o=Is(e,t),o!=null&&n.push(wn(e,o,c))),e.tag===3)return n;e=e.return}return[]}function yv(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function ch(e,t,a,n,o){for(var c=t._reactName,f=[];a!==null&&a!==n;){var v=a,S=v.alternate,k=v.stateNode;if(v=v.tag,S!==null&&S===n)break;v!==5&&v!==26&&v!==27||k===null||(S=k,o?(k=Is(a,c),k!=null&&f.unshift(wn(a,k,S))):o||(k=Is(a,c),k!=null&&f.push(wn(a,k,S)))),a=a.return}f.length!==0&&e.push({event:t,listeners:f})}var bv=/\r\n?/g,vv=/\u0000|\uFFFD/g;function dh(e){return(typeof e=="string"?e:""+e).replace(bv,`
`).replace(vv,"")}function uh(e,t){return t=dh(t),dh(e)===t}function ze(e,t,a,n,o,c){switch(a){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||Ui(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&Ui(e,""+n);break;case"className":ll(e,"class",n);break;case"tabIndex":ll(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":ll(e,a,n);break;case"style":dm(e,n,c);break;case"data":if(t!=="object"){ll(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=ol(""+n),e.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(a==="formAction"?(t!=="input"&&ze(e,t,"name",o.name,o,null),ze(e,t,"formEncType",o.formEncType,o,null),ze(e,t,"formMethod",o.formMethod,o,null),ze(e,t,"formTarget",o.formTarget,o,null)):(ze(e,t,"encType",o.encType,o,null),ze(e,t,"method",o.method,o,null),ze(e,t,"target",o.target,o,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=ol(""+n),e.setAttribute(a,n);break;case"onClick":n!=null&&(e.onclick=pa);break;case"onScroll":n!=null&&ye("scroll",e);break;case"onScrollEnd":n!=null&&ye("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(r(61));if(a=n.__html,a!=null){if(o.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}a=ol(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""+n):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":n===!0?e.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,n):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(a,n):e.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(a):e.setAttribute(a,n);break;case"popover":ye("beforetoggle",e),ye("toggle",e),nl(e,"popover",n);break;case"xlinkActuate":ma(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":ma(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":ma(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":ma(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":ma(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":ma(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":ma(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":ma(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":ma(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":nl(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Ky.get(a)||a,nl(e,a,n))}}function Ic(e,t,a,n,o,c){switch(a){case"style":dm(e,n,c);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(r(61));if(a=n.__html,a!=null){if(o.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof n=="string"?Ui(e,n):(typeof n=="number"||typeof n=="bigint")&&Ui(e,""+n);break;case"onScroll":n!=null&&ye("scroll",e);break;case"onScrollEnd":n!=null&&ye("scrollend",e);break;case"onClick":n!=null&&(e.onclick=pa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!tm.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(o=a.endsWith("Capture"),t=a.slice(2,o?a.length-7:void 0),c=e[xt]||null,c=c!=null?c[a]:null,typeof c=="function"&&e.removeEventListener(t,c,o),typeof n=="function")){typeof c!="function"&&c!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,n,o);break e}a in e?e[a]=n:n===!0?e.setAttribute(a,""):nl(e,a,n)}}}function dt(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ye("error",e),ye("load",e);var n=!1,o=!1,c;for(c in a)if(a.hasOwnProperty(c)){var f=a[c];if(f!=null)switch(c){case"src":n=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,t));default:ze(e,t,c,f,a,null)}}o&&ze(e,t,"srcSet",a.srcSet,a,null),n&&ze(e,t,"src",a.src,a,null);return;case"input":ye("invalid",e);var v=c=f=o=null,S=null,k=null;for(n in a)if(a.hasOwnProperty(n)){var H=a[n];if(H!=null)switch(n){case"name":o=H;break;case"type":f=H;break;case"checked":S=H;break;case"defaultChecked":k=H;break;case"value":c=H;break;case"defaultValue":v=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(r(137,t));break;default:ze(e,t,n,H,a,null)}}lm(e,c,v,S,k,f,o,!1);return;case"select":ye("invalid",e),n=f=c=null;for(o in a)if(a.hasOwnProperty(o)&&(v=a[o],v!=null))switch(o){case"value":c=v;break;case"defaultValue":f=v;break;case"multiple":n=v;default:ze(e,t,o,v,a,null)}t=c,a=f,e.multiple=!!n,t!=null?Ii(e,!!n,t,!1):a!=null&&Ii(e,!!n,a,!0);return;case"textarea":ye("invalid",e),c=o=n=null;for(f in a)if(a.hasOwnProperty(f)&&(v=a[f],v!=null))switch(f){case"value":n=v;break;case"defaultValue":o=v;break;case"children":c=v;break;case"dangerouslySetInnerHTML":if(v!=null)throw Error(r(91));break;default:ze(e,t,f,v,a,null)}om(e,n,o,c);return;case"option":for(S in a)a.hasOwnProperty(S)&&(n=a[S],n!=null)&&(S==="selected"?e.selected=n&&typeof n!="function"&&typeof n!="symbol":ze(e,t,S,n,a,null));return;case"dialog":ye("beforetoggle",e),ye("toggle",e),ye("cancel",e),ye("close",e);break;case"iframe":case"object":ye("load",e);break;case"video":case"audio":for(n=0;n<vn.length;n++)ye(vn[n],e);break;case"image":ye("error",e),ye("load",e);break;case"details":ye("toggle",e);break;case"embed":case"source":case"link":ye("error",e),ye("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(k in a)if(a.hasOwnProperty(k)&&(n=a[k],n!=null))switch(k){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,t));default:ze(e,t,k,n,a,null)}return;default:if(eo(t)){for(H in a)a.hasOwnProperty(H)&&(n=a[H],n!==void 0&&Ic(e,t,H,n,a,void 0));return}}for(v in a)a.hasOwnProperty(v)&&(n=a[v],n!=null&&ze(e,t,v,n,a,null))}function wv(e,t,a,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,c=null,f=null,v=null,S=null,k=null,H=null;for(L in a){var _=a[L];if(a.hasOwnProperty(L)&&_!=null)switch(L){case"checked":break;case"value":break;case"defaultValue":S=_;default:n.hasOwnProperty(L)||ze(e,t,L,null,n,_)}}for(var R in n){var L=n[R];if(_=a[R],n.hasOwnProperty(R)&&(L!=null||_!=null))switch(R){case"type":c=L;break;case"name":o=L;break;case"checked":k=L;break;case"defaultChecked":H=L;break;case"value":f=L;break;case"defaultValue":v=L;break;case"children":case"dangerouslySetInnerHTML":if(L!=null)throw Error(r(137,t));break;default:L!==_&&ze(e,t,R,L,n,_)}}Jr(e,f,v,S,k,H,c,o);return;case"select":L=f=v=R=null;for(c in a)if(S=a[c],a.hasOwnProperty(c)&&S!=null)switch(c){case"value":break;case"multiple":L=S;default:n.hasOwnProperty(c)||ze(e,t,c,null,n,S)}for(o in n)if(c=n[o],S=a[o],n.hasOwnProperty(o)&&(c!=null||S!=null))switch(o){case"value":R=c;break;case"defaultValue":v=c;break;case"multiple":f=c;default:c!==S&&ze(e,t,o,c,n,S)}t=v,a=f,n=L,R!=null?Ii(e,!!a,R,!1):!!n!=!!a&&(t!=null?Ii(e,!!a,t,!0):Ii(e,!!a,a?[]:"",!1));return;case"textarea":L=R=null;for(v in a)if(o=a[v],a.hasOwnProperty(v)&&o!=null&&!n.hasOwnProperty(v))switch(v){case"value":break;case"children":break;default:ze(e,t,v,null,n,o)}for(f in n)if(o=n[f],c=a[f],n.hasOwnProperty(f)&&(o!=null||c!=null))switch(f){case"value":R=o;break;case"defaultValue":L=o;break;case"children":break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(r(91));break;default:o!==c&&ze(e,t,f,o,n,c)}rm(e,R,L);return;case"option":for(var te in a)R=a[te],a.hasOwnProperty(te)&&R!=null&&!n.hasOwnProperty(te)&&(te==="selected"?e.selected=!1:ze(e,t,te,null,n,R));for(S in n)R=n[S],L=a[S],n.hasOwnProperty(S)&&R!==L&&(R!=null||L!=null)&&(S==="selected"?e.selected=R&&typeof R!="function"&&typeof R!="symbol":ze(e,t,S,R,n,L));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var le in a)R=a[le],a.hasOwnProperty(le)&&R!=null&&!n.hasOwnProperty(le)&&ze(e,t,le,null,n,R);for(k in n)if(R=n[k],L=a[k],n.hasOwnProperty(k)&&R!==L&&(R!=null||L!=null))switch(k){case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(137,t));break;default:ze(e,t,k,R,n,L)}return;default:if(eo(t)){for(var Le in a)R=a[Le],a.hasOwnProperty(Le)&&R!==void 0&&!n.hasOwnProperty(Le)&&Ic(e,t,Le,void 0,n,R);for(H in n)R=n[H],L=a[H],!n.hasOwnProperty(H)||R===L||R===void 0&&L===void 0||Ic(e,t,H,R,n,L);return}}for(var N in a)R=a[N],a.hasOwnProperty(N)&&R!=null&&!n.hasOwnProperty(N)&&ze(e,t,N,null,n,R);for(_ in n)R=n[_],L=a[_],!n.hasOwnProperty(_)||R===L||R==null&&L==null||ze(e,t,_,R,n,L)}function mh(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Sv(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),n=0;n<a.length;n++){var o=a[n],c=o.transferSize,f=o.initiatorType,v=o.duration;if(c&&v&&mh(f)){for(f=0,v=o.responseEnd,n+=1;n<a.length;n++){var S=a[n],k=S.startTime;if(k>v)break;var H=S.transferSize,_=S.initiatorType;H&&mh(_)&&(S=S.responseEnd,f+=H*(S<v?1:(v-k)/(S-k)))}if(--n,t+=8*(c+f)/(o.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Uc=null,_c=null;function ir(e){return e.nodeType===9?e:e.ownerDocument}function ph(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function fh(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Gc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Yc=null;function Av(){var e=window.event;return e&&e.type==="popstate"?e===Yc?!1:(Yc=e,!0):(Yc=null,!1)}var hh=typeof setTimeout=="function"?setTimeout:void 0,Cv=typeof clearTimeout=="function"?clearTimeout:void 0,gh=typeof Promise=="function"?Promise:void 0,Tv=typeof queueMicrotask=="function"?queueMicrotask:typeof gh<"u"?function(e){return gh.resolve(null).then(e).catch(jv)}:hh;function jv(e){setTimeout(function(){throw e})}function $a(e){return e==="head"}function xh(e,t){var a=t,n=0;do{var o=a.nextSibling;if(e.removeChild(a),o&&o.nodeType===8)if(a=o.data,a==="/$"||a==="/&"){if(n===0){e.removeChild(o),bs(t);return}n--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")n++;else if(a==="html")Sn(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Sn(a);for(var c=a.firstChild;c;){var f=c.nextSibling,v=c.nodeName;c[Hs]||v==="SCRIPT"||v==="STYLE"||v==="LINK"&&c.rel.toLowerCase()==="stylesheet"||a.removeChild(c),c=f}}else a==="body"&&Sn(e.ownerDocument.body);a=o}while(a);bs(t)}function yh(e,t){var a=e;e=0;do{var n=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),n&&n.nodeType===8)if(a=n.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=n}while(a)}function Qc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Qc(a),Wr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Mv(e,t,a,n){for(;e.nodeType===1;){var o=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[Hs])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(c=e.getAttribute("rel"),c==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(c!==o.rel||e.getAttribute("href")!==(o.href==null||o.href===""?null:o.href)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin)||e.getAttribute("title")!==(o.title==null?null:o.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(c=e.getAttribute("src"),(c!==(o.src==null?null:o.src)||e.getAttribute("type")!==(o.type==null?null:o.type)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin))&&c&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var c=o.name==null?null:""+o.name;if(o.type==="hidden"&&e.getAttribute("name")===c)return e}else return e;if(e=Kt(e.nextSibling),e===null)break}return null}function Ev(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Kt(e.nextSibling),e===null))return null;return e}function bh(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Kt(e.nextSibling),e===null))return null;return e}function Fc(e){return e.data==="$?"||e.data==="$~"}function Kc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Nv(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var n=function(){t(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function Kt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Xc=null;function vh(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Kt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function wh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Sh(e,t,a){switch(t=ir(a),e){case"html":if(e=t.documentElement,!e)throw Error(r(452));return e;case"head":if(e=t.head,!e)throw Error(r(453));return e;case"body":if(e=t.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Sn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Wr(e)}var Xt=new Map,Ah=new Set;function sr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Na=G.d;G.d={f:Dv,r:kv,D:Rv,C:Bv,L:zv,m:Lv,X:qv,S:Ov,M:Vv};function Dv(){var e=Na.f(),t=Xl();return e||t}function kv(e){var t=Vi(e);t!==null&&t.tag===5&&t.type==="form"?Hp(t):Na.r(e)}var gs=typeof document>"u"?null:document;function Ch(e,t,a){var n=gs;if(n&&typeof t=="string"&&t){var o=It(t);o='link[rel="'+e+'"][href="'+o+'"]',typeof a=="string"&&(o+='[crossorigin="'+a+'"]'),Ah.has(o)||(Ah.add(o),e={rel:e,crossOrigin:a,href:t},n.querySelector(o)===null&&(t=n.createElement("link"),dt(t,"link",e),st(t),n.head.appendChild(t)))}}function Rv(e){Na.D(e),Ch("dns-prefetch",e,null)}function Bv(e,t){Na.C(e,t),Ch("preconnect",e,t)}function zv(e,t,a){Na.L(e,t,a);var n=gs;if(n&&e&&t){var o='link[rel="preload"][as="'+It(t)+'"]';t==="image"&&a&&a.imageSrcSet?(o+='[imagesrcset="'+It(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(o+='[imagesizes="'+It(a.imageSizes)+'"]')):o+='[href="'+It(e)+'"]';var c=o;switch(t){case"style":c=xs(e);break;case"script":c=ys(e)}Xt.has(c)||(e=b({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Xt.set(c,e),n.querySelector(o)!==null||t==="style"&&n.querySelector(An(c))||t==="script"&&n.querySelector(Cn(c))||(t=n.createElement("link"),dt(t,"link",e),st(t),n.head.appendChild(t)))}}function Lv(e,t){Na.m(e,t);var a=gs;if(a&&e){var n=t&&typeof t.as=="string"?t.as:"script",o='link[rel="modulepreload"][as="'+It(n)+'"][href="'+It(e)+'"]',c=o;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=ys(e)}if(!Xt.has(c)&&(e=b({rel:"modulepreload",href:e},t),Xt.set(c,e),a.querySelector(o)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Cn(c)))return}n=a.createElement("link"),dt(n,"link",e),st(n),a.head.appendChild(n)}}}function Ov(e,t,a){Na.S(e,t,a);var n=gs;if(n&&e){var o=Hi(n).hoistableStyles,c=xs(e);t=t||"default";var f=o.get(c);if(!f){var v={loading:0,preload:null};if(f=n.querySelector(An(c)))v.loading=5;else{e=b({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Xt.get(c))&&Wc(e,a);var S=f=n.createElement("link");st(S),dt(S,"link",e),S._p=new Promise(function(k,H){S.onload=k,S.onerror=H}),S.addEventListener("load",function(){v.loading|=1}),S.addEventListener("error",function(){v.loading|=2}),v.loading|=4,nr(f,t,n)}f={type:"stylesheet",instance:f,count:1,state:v},o.set(c,f)}}}function qv(e,t){Na.X(e,t);var a=gs;if(a&&e){var n=Hi(a).hoistableScripts,o=ys(e),c=n.get(o);c||(c=a.querySelector(Cn(o)),c||(e=b({src:e,async:!0},t),(t=Xt.get(o))&&Zc(e,t),c=a.createElement("script"),st(c),dt(c,"link",e),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},n.set(o,c))}}function Vv(e,t){Na.M(e,t);var a=gs;if(a&&e){var n=Hi(a).hoistableScripts,o=ys(e),c=n.get(o);c||(c=a.querySelector(Cn(o)),c||(e=b({src:e,async:!0,type:"module"},t),(t=Xt.get(o))&&Zc(e,t),c=a.createElement("script"),st(c),dt(c,"link",e),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},n.set(o,c))}}function Th(e,t,a,n){var o=(o=re.current)?sr(o):null;if(!o)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=xs(a.href),a=Hi(o).hoistableStyles,n=a.get(t),n||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=xs(a.href);var c=Hi(o).hoistableStyles,f=c.get(e);if(f||(o=o.ownerDocument||o,f={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,f),(c=o.querySelector(An(e)))&&!c._p&&(f.instance=c,f.state.loading=5),Xt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Xt.set(e,a),c||Hv(o,e,a,f.state))),t&&n===null)throw Error(r(528,""));return f}if(t&&n!==null)throw Error(r(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=ys(a),a=Hi(o).hoistableScripts,n=a.get(t),n||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function xs(e){return'href="'+It(e)+'"'}function An(e){return'link[rel="stylesheet"]['+e+"]"}function jh(e){return b({},e,{"data-precedence":e.precedence,precedence:null})}function Hv(e,t,a,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),dt(t,"link",a),st(t),e.head.appendChild(t))}function ys(e){return'[src="'+It(e)+'"]'}function Cn(e){return"script[async]"+e}function Mh(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+It(a.href)+'"]');if(n)return t.instance=n,st(n),n;var o=b({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),st(n),dt(n,"style",o),nr(n,a.precedence,e),t.instance=n;case"stylesheet":o=xs(a.href);var c=e.querySelector(An(o));if(c)return t.state.loading|=4,t.instance=c,st(c),c;n=jh(a),(o=Xt.get(o))&&Wc(n,o),c=(e.ownerDocument||e).createElement("link"),st(c);var f=c;return f._p=new Promise(function(v,S){f.onload=v,f.onerror=S}),dt(c,"link",n),t.state.loading|=4,nr(c,a.precedence,e),t.instance=c;case"script":return c=ys(a.src),(o=e.querySelector(Cn(c)))?(t.instance=o,st(o),o):(n=a,(o=Xt.get(c))&&(n=b({},a),Zc(n,o)),e=e.ownerDocument||e,o=e.createElement("script"),st(o),dt(o,"link",n),e.head.appendChild(o),t.instance=o);case"void":return null;default:throw Error(r(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,nr(n,a.precedence,e));return t.instance}function nr(e,t,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=n.length?n[n.length-1]:null,c=o,f=0;f<n.length;f++){var v=n[f];if(v.dataset.precedence===t)c=v;else if(c!==o)break}c?c.parentNode.insertBefore(e,c.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Wc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Zc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var lr=null;function Eh(e,t,a){if(lr===null){var n=new Map,o=lr=new Map;o.set(a,n)}else o=lr,n=o.get(a),n||(n=new Map,o.set(a,n));if(n.has(e))return n;for(n.set(e,null),a=a.getElementsByTagName(e),o=0;o<a.length;o++){var c=a[o];if(!(c[Hs]||c[lt]||e==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var f=c.getAttribute(t)||"";f=e+f;var v=n.get(f);v?v.push(c):n.set(f,[c])}}return n}function Nh(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Pv(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Dh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Iv(e,t,a,n){if(a.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var o=xs(n.href),c=t.querySelector(An(o));if(c){t=c._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=rr.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=c,st(c);return}c=t.ownerDocument||t,n=jh(n),(o=Xt.get(o))&&Wc(n,o),c=c.createElement("link"),st(c);var f=c;f._p=new Promise(function(v,S){f.onload=v,f.onerror=S}),dt(c,"link",n),a.instance=c}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=rr.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Jc=0;function Uv(e,t){return e.stylesheets&&e.count===0&&cr(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var n=setTimeout(function(){if(e.stylesheets&&cr(e,e.stylesheets),e.unsuspend){var c=e.unsuspend;e.unsuspend=null,c()}},6e4+t);0<e.imgBytes&&Jc===0&&(Jc=62500*Sv());var o=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&cr(e,e.stylesheets),e.unsuspend)){var c=e.unsuspend;e.unsuspend=null,c()}},(e.imgBytes>Jc?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(n),clearTimeout(o)}}:null}function rr(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)cr(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var or=null;function cr(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,or=new Map,t.forEach(_v,e),or=null,rr.call(e))}function _v(e,t){if(!(t.state.loading&4)){var a=or.get(e);if(a)var n=a.get(null);else{a=new Map,or.set(e,a);for(var o=e.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<o.length;c++){var f=o[c];(f.nodeName==="LINK"||f.getAttribute("media")!=="not all")&&(a.set(f.dataset.precedence,f),n=f)}n&&a.set(null,n)}o=t.instance,f=o.getAttribute("data-precedence"),c=a.get(f)||n,c===n&&a.set(null,o),a.set(f,o),this.count++,n=rr.bind(this),o.addEventListener("load",n),o.addEventListener("error",n),c?c.parentNode.insertBefore(o,c.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(o,e.firstChild)),t.state.loading|=4}}var Tn={$$typeof:O,Provider:null,Consumer:null,_currentValue:J,_currentValue2:J,_threadCount:0};function Gv(e,t,a,n,o,c,f,v,S){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Qr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qr(0),this.hiddenUpdates=Qr(null),this.identifierPrefix=n,this.onUncaughtError=o,this.onCaughtError=c,this.onRecoverableError=f,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=S,this.incompleteTransitions=new Map}function kh(e,t,a,n,o,c,f,v,S,k,H,_){return e=new Gv(e,t,a,f,S,k,H,_,v),t=1,c===!0&&(t|=24),c=kt(3,null,null,t),e.current=c,c.stateNode=e,t=ko(),t.refCount++,e.pooledCache=t,t.refCount++,c.memoizedState={element:n,isDehydrated:a,cache:t},Lo(c),e}function Rh(e){return e?(e=Xi,e):Xi}function Bh(e,t,a,n,o,c){o=Rh(o),n.context===null?n.context=o:n.pendingContext=o,n=Ua(t),n.payload={element:a},c=c===void 0?null:c,c!==null&&(n.callback=c),a=_a(e,n,t),a!==null&&(At(a,e,t),an(a,e,t))}function zh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function $c(e,t){zh(e,t),(e=e.alternate)&&zh(e,t)}function Lh(e){if(e.tag===13||e.tag===31){var t=gi(e,67108864);t!==null&&At(t,e,67108864),$c(e,67108864)}}function Oh(e){if(e.tag===13||e.tag===31){var t=Ot();t=Fr(t);var a=gi(e,t);a!==null&&At(a,e,t),$c(e,t)}}var dr=!0;function Yv(e,t,a,n){var o=V.T;V.T=null;var c=G.p;try{G.p=2,ed(e,t,a,n)}finally{G.p=c,V.T=o}}function Qv(e,t,a,n){var o=V.T;V.T=null;var c=G.p;try{G.p=8,ed(e,t,a,n)}finally{G.p=c,V.T=o}}function ed(e,t,a,n){if(dr){var o=td(n);if(o===null)Pc(e,t,n,ur,a),Vh(e,n);else if(Kv(o,e,t,a,n))n.stopPropagation();else if(Vh(e,n),t&4&&-1<Fv.indexOf(e)){for(;o!==null;){var c=Vi(o);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var f=ui(c.pendingLanes);if(f!==0){var v=c;for(v.pendingLanes|=2,v.entangledLanes|=2;f;){var S=1<<31-Nt(f);v.entanglements[1]|=S,f&=~S}oa(c),(Ne&6)===0&&(Fl=Mt()+500,bn(0))}}break;case 31:case 13:v=gi(c,2),v!==null&&At(v,c,2),Xl(),$c(c,2)}if(c=td(n),c===null&&Pc(e,t,n,ur,a),c===o)break;o=c}o!==null&&n.stopPropagation()}else Pc(e,t,n,null,a)}}function td(e){return e=ao(e),ad(e)}var ur=null;function ad(e){if(ur=null,e=qi(e),e!==null){var t=m(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=p(t),e!==null)return e;e=null}else if(a===31){if(e=x(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return ur=e,null}function qh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ry()){case Gu:return 2;case Yu:return 8;case el:case By:return 32;case Qu:return 268435456;default:return 32}default:return 32}}var id=!1,ei=null,ti=null,ai=null,jn=new Map,Mn=new Map,ii=[],Fv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Vh(e,t){switch(e){case"focusin":case"focusout":ei=null;break;case"dragenter":case"dragleave":ti=null;break;case"mouseover":case"mouseout":ai=null;break;case"pointerover":case"pointerout":jn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mn.delete(t.pointerId)}}function En(e,t,a,n,o,c){return e===null||e.nativeEvent!==c?(e={blockedOn:t,domEventName:a,eventSystemFlags:n,nativeEvent:c,targetContainers:[o]},t!==null&&(t=Vi(t),t!==null&&Lh(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Kv(e,t,a,n,o){switch(t){case"focusin":return ei=En(ei,e,t,a,n,o),!0;case"dragenter":return ti=En(ti,e,t,a,n,o),!0;case"mouseover":return ai=En(ai,e,t,a,n,o),!0;case"pointerover":var c=o.pointerId;return jn.set(c,En(jn.get(c)||null,e,t,a,n,o)),!0;case"gotpointercapture":return c=o.pointerId,Mn.set(c,En(Mn.get(c)||null,e,t,a,n,o)),!0}return!1}function Hh(e){var t=qi(e.target);if(t!==null){var a=m(t);if(a!==null){if(t=a.tag,t===13){if(t=p(a),t!==null){e.blockedOn=t,Ju(e.priority,function(){Oh(a)});return}}else if(t===31){if(t=x(a),t!==null){e.blockedOn=t,Ju(e.priority,function(){Oh(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function mr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=td(e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);to=n,a.target.dispatchEvent(n),to=null}else return t=Vi(a),t!==null&&Lh(t),e.blockedOn=a,!1;t.shift()}return!0}function Ph(e,t,a){mr(e)&&a.delete(t)}function Xv(){id=!1,ei!==null&&mr(ei)&&(ei=null),ti!==null&&mr(ti)&&(ti=null),ai!==null&&mr(ai)&&(ai=null),jn.forEach(Ph),Mn.forEach(Ph)}function pr(e,t){e.blockedOn===t&&(e.blockedOn=null,id||(id=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,Xv)))}var fr=null;function Ih(e){fr!==e&&(fr=e,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){fr===e&&(fr=null);for(var t=0;t<e.length;t+=3){var a=e[t],n=e[t+1],o=e[t+2];if(typeof n!="function"){if(ad(n||a)===null)continue;break}var c=Vi(a);c!==null&&(e.splice(t,3),t-=3,tc(c,{pending:!0,data:o,method:a.method,action:n},n,o))}}))}function bs(e){function t(S){return pr(S,e)}ei!==null&&pr(ei,e),ti!==null&&pr(ti,e),ai!==null&&pr(ai,e),jn.forEach(t),Mn.forEach(t);for(var a=0;a<ii.length;a++){var n=ii[a];n.blockedOn===e&&(n.blockedOn=null)}for(;0<ii.length&&(a=ii[0],a.blockedOn===null);)Hh(a),a.blockedOn===null&&ii.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var o=a[n],c=a[n+1],f=o[xt]||null;if(typeof c=="function")f||Ih(a);else if(f){var v=null;if(c&&c.hasAttribute("formAction")){if(o=c,f=c[xt]||null)v=f.formAction;else if(ad(o)!==null)continue}else v=f.action;typeof v=="function"?a[n+1]=v:(a.splice(n,3),n-=3),Ih(a)}}}function Uh(){function e(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(f){return o=f})},focusReset:"manual",scroll:"manual"})}function t(){o!==null&&(o(),o=null),n||setTimeout(a,20)}function a(){if(!n&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,o=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){n=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),o!==null&&(o(),o=null)}}}function sd(e){this._internalRoot=e}hr.prototype.render=sd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(r(409));var a=t.current,n=Ot();Bh(a,n,e,t,null,null)},hr.prototype.unmount=sd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Bh(e.current,2,null,e,null,null),Xl(),t[Oi]=null}};function hr(e){this._internalRoot=e}hr.prototype.unstable_scheduleHydration=function(e){if(e){var t=Zu();e={blockedOn:null,target:e,priority:t};for(var a=0;a<ii.length&&t!==0&&t<ii[a].priority;a++);ii.splice(a,0,e),a===0&&Hh(e)}};var _h=s.version;if(_h!=="19.2.3")throw Error(r(527,_h,"19.2.3"));G.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=g(t),e=e!==null?y(e):null,e=e===null?null:e.stateNode,e};var Wv={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:V,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gr.isDisabled&&gr.supportsFiber)try{Os=gr.inject(Wv),Et=gr}catch{}}return Dn.createRoot=function(e,t){if(!d(e))throw Error(r(299));var a=!1,n="",o=Xp,c=Wp,f=Zp;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(c=t.onCaughtError),t.onRecoverableError!==void 0&&(f=t.onRecoverableError)),t=kh(e,1,!1,null,null,a,n,null,o,c,f,Uh),e[Oi]=t.current,Hc(e),new sd(t)},Dn.hydrateRoot=function(e,t,a){if(!d(e))throw Error(r(299));var n=!1,o="",c=Xp,f=Wp,v=Zp,S=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(o=a.identifierPrefix),a.onUncaughtError!==void 0&&(c=a.onUncaughtError),a.onCaughtError!==void 0&&(f=a.onCaughtError),a.onRecoverableError!==void 0&&(v=a.onRecoverableError),a.formState!==void 0&&(S=a.formState)),t=kh(e,1,!0,t,a??null,n,o,S,c,f,v,Uh),t.context=Rh(null),a=t.current,n=Ot(),n=Fr(n),o=Ua(n),o.callback=null,_a(a,o,n),a=n,t.current.lanes=a,Vs(t,a),oa(t),e[Oi]=t.current,Hc(e),new hr(t)},Dn.version="19.2.3",Dn}var $h;function l1(){if($h)return rd.exports;$h=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(s){console.error(s)}}return i(),rd.exports=n1(),rd.exports}var r1=l1();const o1=iu(r1);var eg="popstate";function c1(i={}){function s(d,m){let{pathname:p="/",search:x="",hash:h=""}=Li(d.location.hash.substring(1));return!p.startsWith("/")&&!p.startsWith(".")&&(p="/"+p),Rd("",{pathname:p,search:x,hash:h},m.state&&m.state.usr||null,m.state&&m.state.key||"default")}function l(d,m){let p=d.document.querySelector("base"),x="";if(p&&p.getAttribute("href")){let h=d.location.href,g=h.indexOf("#");x=g===-1?h:h.slice(0,g)}return x+"#"+(typeof m=="string"?m:Hn(m))}function r(d,m){qt(d.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(m)})`)}return u1(s,l,r,i)}function Ue(i,s){if(i===!1||i===null||typeof i>"u")throw new Error(s)}function qt(i,s){if(!i){typeof console<"u"&&console.warn(s);try{throw new Error(s)}catch{}}}function d1(){return Math.random().toString(36).substring(2,10)}function tg(i,s){return{usr:i.state,key:i.key,idx:s}}function Rd(i,s,l=null,r){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof s=="string"?Li(s):s,state:l,key:s&&s.key||r||d1()}}function Hn({pathname:i="/",search:s="",hash:l=""}){return s&&s!=="?"&&(i+=s.charAt(0)==="?"?s:"?"+s),l&&l!=="#"&&(i+=l.charAt(0)==="#"?l:"#"+l),i}function Li(i){let s={};if(i){let l=i.indexOf("#");l>=0&&(s.hash=i.substring(l),i=i.substring(0,l));let r=i.indexOf("?");r>=0&&(s.search=i.substring(r),i=i.substring(0,r)),i&&(s.pathname=i)}return s}function u1(i,s,l,r={}){let{window:d=document.defaultView,v5Compat:m=!1}=r,p=d.history,x="POP",h=null,g=y();g==null&&(g=0,p.replaceState({...p.state,idx:g},""));function y(){return(p.state||{idx:null}).idx}function b(){x="POP";let q=y(),z=q==null?null:q-g;g=q,h&&h({action:x,location:B.location,delta:z})}function w(q,z){x="PUSH";let M=Rd(B.location,q,z);l&&l(M,q),g=y()+1;let O=tg(M,g),X=B.createHref(M);try{p.pushState(O,"",X)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;d.location.assign(X)}m&&h&&h({action:x,location:B.location,delta:1})}function A(q,z){x="REPLACE";let M=Rd(B.location,q,z);l&&l(M,q),g=y();let O=tg(M,g),X=B.createHref(M);p.replaceState(O,"",X),m&&h&&h({action:x,location:B.location,delta:0})}function E(q){return m1(q)}let B={get action(){return x},get location(){return i(d,p)},listen(q){if(h)throw new Error("A history only accepts one active listener");return d.addEventListener(eg,b),h=q,()=>{d.removeEventListener(eg,b),h=null}},createHref(q){return s(d,q)},createURL:E,encodeLocation(q){let z=E(q);return{pathname:z.pathname,search:z.search,hash:z.hash}},push:w,replace:A,go(q){return p.go(q)}};return B}function m1(i,s=!1){let l="http://localhost";typeof window<"u"&&(l=window.location.origin!=="null"?window.location.origin:window.location.href),Ue(l,"No window.location.(origin|href) available to create URL");let r=typeof i=="string"?i:Hn(i);return r=r.replace(/ $/,"%20"),!s&&r.startsWith("//")&&(r=l+r),new URL(r,l)}function j0(i,s,l="/"){return p1(i,s,l,!1)}function p1(i,s,l,r){let d=typeof s=="string"?Li(s):s,m=ka(d.pathname||"/",l);if(m==null)return null;let p=M0(i);f1(p);let x=null;for(let h=0;x==null&&h<p.length;++h){let g=T1(m);x=A1(p[h],g,r)}return x}function M0(i,s=[],l=[],r="",d=!1){let m=(p,x,h=d,g)=>{let y={relativePath:g===void 0?p.path||"":g,caseSensitive:p.caseSensitive===!0,childrenIndex:x,route:p};if(y.relativePath.startsWith("/")){if(!y.relativePath.startsWith(r)&&h)return;Ue(y.relativePath.startsWith(r),`Absolute route path "${y.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),y.relativePath=y.relativePath.slice(r.length)}let b=Da([r,y.relativePath]),w=l.concat(y);p.children&&p.children.length>0&&(Ue(p.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${b}".`),M0(p.children,s,w,b,h)),!(p.path==null&&!p.index)&&s.push({path:b,score:w1(b,p.index),routesMeta:w})};return i.forEach((p,x)=>{if(p.path===""||!p.path?.includes("?"))m(p,x);else for(let h of E0(p.path))m(p,x,!0,h)}),s}function E0(i){let s=i.split("/");if(s.length===0)return[];let[l,...r]=s,d=l.endsWith("?"),m=l.replace(/\?$/,"");if(r.length===0)return d?[m,""]:[m];let p=E0(r.join("/")),x=[];return x.push(...p.map(h=>h===""?m:[m,h].join("/"))),d&&x.push(...p),x.map(h=>i.startsWith("/")&&h===""?"/":h)}function f1(i){i.sort((s,l)=>s.score!==l.score?l.score-s.score:S1(s.routesMeta.map(r=>r.childrenIndex),l.routesMeta.map(r=>r.childrenIndex)))}var h1=/^:[\w-]+$/,g1=3,x1=2,y1=1,b1=10,v1=-2,ag=i=>i==="*";function w1(i,s){let l=i.split("/"),r=l.length;return l.some(ag)&&(r+=v1),s&&(r+=x1),l.filter(d=>!ag(d)).reduce((d,m)=>d+(h1.test(m)?g1:m===""?y1:b1),r)}function S1(i,s){return i.length===s.length&&i.slice(0,-1).every((r,d)=>r===s[d])?i[i.length-1]-s[s.length-1]:0}function A1(i,s,l=!1){let{routesMeta:r}=i,d={},m="/",p=[];for(let x=0;x<r.length;++x){let h=r[x],g=x===r.length-1,y=m==="/"?s:s.slice(m.length)||"/",b=Nr({path:h.relativePath,caseSensitive:h.caseSensitive,end:g},y),w=h.route;if(!b&&g&&l&&!r[r.length-1].route.index&&(b=Nr({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},y)),!b)return null;Object.assign(d,b.params),p.push({params:d,pathname:Da([m,b.pathname]),pathnameBase:N1(Da([m,b.pathnameBase])),route:w}),b.pathnameBase!=="/"&&(m=Da([m,b.pathnameBase]))}return p}function Nr(i,s){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[l,r]=C1(i.path,i.caseSensitive,i.end),d=s.match(l);if(!d)return null;let m=d[0],p=m.replace(/(.)\/+$/,"$1"),x=d.slice(1);return{params:r.reduce((g,{paramName:y,isOptional:b},w)=>{if(y==="*"){let E=x[w]||"";p=m.slice(0,m.length-E.length).replace(/(.)\/+$/,"$1")}const A=x[w];return b&&!A?g[y]=void 0:g[y]=(A||"").replace(/%2F/g,"/"),g},{}),pathname:m,pathnameBase:p,pattern:i}}function C1(i,s=!1,l=!0){qt(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let r=[],d="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(p,x,h)=>(r.push({paramName:x,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return i.endsWith("*")?(r.push({paramName:"*"}),d+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):l?d+="\\/*$":i!==""&&i!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,s?void 0:"i"),r]}function T1(i){try{return i.split("/").map(s=>decodeURIComponent(s).replace(/\//g,"%2F")).join("/")}catch(s){return qt(!1,`The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${s}).`),i}}function ka(i,s){if(s==="/")return i;if(!i.toLowerCase().startsWith(s.toLowerCase()))return null;let l=s.endsWith("/")?s.length-1:s.length,r=i.charAt(l);return r&&r!=="/"?null:i.slice(l)||"/"}var N0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,j1=i=>N0.test(i);function M1(i,s="/"){let{pathname:l,search:r="",hash:d=""}=typeof i=="string"?Li(i):i,m;if(l)if(j1(l))m=l;else{if(l.includes("//")){let p=l;l=l.replace(/\/\/+/g,"/"),qt(!1,`Pathnames cannot have embedded double slashes - normalizing ${p} -> ${l}`)}l.startsWith("/")?m=ig(l.substring(1),"/"):m=ig(l,s)}else m=s;return{pathname:m,search:D1(r),hash:k1(d)}}function ig(i,s){let l=s.replace(/\/+$/,"").split("/");return i.split("/").forEach(d=>{d===".."?l.length>1&&l.pop():d!=="."&&l.push(d)}),l.length>1?l.join("/"):"/"}function ud(i,s,l,r){return`Cannot include a '${i}' character in a manually specified \`to.${s}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${l}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function E1(i){return i.filter((s,l)=>l===0||s.route.path&&s.route.path.length>0)}function nu(i){let s=E1(i);return s.map((l,r)=>r===s.length-1?l.pathname:l.pathnameBase)}function lu(i,s,l,r=!1){let d;typeof i=="string"?d=Li(i):(d={...i},Ue(!d.pathname||!d.pathname.includes("?"),ud("?","pathname","search",d)),Ue(!d.pathname||!d.pathname.includes("#"),ud("#","pathname","hash",d)),Ue(!d.search||!d.search.includes("#"),ud("#","search","hash",d)));let m=i===""||d.pathname==="",p=m?"/":d.pathname,x;if(p==null)x=l;else{let b=s.length-1;if(!r&&p.startsWith("..")){let w=p.split("/");for(;w[0]==="..";)w.shift(),b-=1;d.pathname=w.join("/")}x=b>=0?s[b]:"/"}let h=M1(d,x),g=p&&p!=="/"&&p.endsWith("/"),y=(m||p===".")&&l.endsWith("/");return!h.pathname.endsWith("/")&&(g||y)&&(h.pathname+="/"),h}var Da=i=>i.join("/").replace(/\/\/+/g,"/"),N1=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),D1=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,k1=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i,R1=class{constructor(i,s,l,r=!1){this.status=i,this.statusText=s||"",this.internal=r,l instanceof Error?(this.data=l.toString(),this.error=l):this.data=l}};function B1(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}function z1(i){return i.map(s=>s.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var D0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function k0(i,s){let l=i;if(typeof l!="string"||!N0.test(l))return{absoluteURL:void 0,isExternal:!1,to:l};let r=l,d=!1;if(D0)try{let m=new URL(window.location.href),p=l.startsWith("//")?new URL(m.protocol+l):new URL(l),x=ka(p.pathname,s);p.origin===m.origin&&x!=null?l=x+p.search+p.hash:d=!0}catch{qt(!1,`<Link to="${l}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:d,to:l}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var R0=["POST","PUT","PATCH","DELETE"];new Set(R0);var L1=["GET",...R0];new Set(L1);var Ds=j.createContext(null);Ds.displayName="DataRouter";var Vr=j.createContext(null);Vr.displayName="DataRouterState";var O1=j.createContext(!1),B0=j.createContext({isTransitioning:!1});B0.displayName="ViewTransition";var q1=j.createContext(new Map);q1.displayName="Fetchers";var V1=j.createContext(null);V1.displayName="Await";var Vt=j.createContext(null);Vt.displayName="Navigation";var Yn=j.createContext(null);Yn.displayName="Location";var sa=j.createContext({outlet:null,matches:[],isDataRoute:!1});sa.displayName="Route";var ru=j.createContext(null);ru.displayName="RouteError";var z0="REACT_ROUTER_ERROR",H1="REDIRECT",P1="ROUTE_ERROR_RESPONSE";function I1(i){if(i.startsWith(`${z0}:${H1}:{`))try{let s=JSON.parse(i.slice(28));if(typeof s=="object"&&s&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.location=="string"&&typeof s.reloadDocument=="boolean"&&typeof s.replace=="boolean")return s}catch{}}function U1(i){if(i.startsWith(`${z0}:${P1}:{`))try{let s=JSON.parse(i.slice(40));if(typeof s=="object"&&s&&typeof s.status=="number"&&typeof s.statusText=="string")return new R1(s.status,s.statusText,s.data)}catch{}}function _1(i,{relative:s}={}){Ue(ks(),"useHref() may be used only in the context of a <Router> component.");let{basename:l,navigator:r}=j.useContext(Vt),{hash:d,pathname:m,search:p}=Fn(i,{relative:s}),x=m;return l!=="/"&&(x=m==="/"?l:Da([l,m])),r.createHref({pathname:x,search:p,hash:d})}function ks(){return j.useContext(Yn)!=null}function ua(){return Ue(ks(),"useLocation() may be used only in the context of a <Router> component."),j.useContext(Yn).location}var L0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function O0(i){j.useContext(Vt).static||j.useLayoutEffect(i)}function Qn(){let{isDataRoute:i}=j.useContext(sa);return i?a2():G1()}function G1(){Ue(ks(),"useNavigate() may be used only in the context of a <Router> component.");let i=j.useContext(Ds),{basename:s,navigator:l}=j.useContext(Vt),{matches:r}=j.useContext(sa),{pathname:d}=ua(),m=JSON.stringify(nu(r)),p=j.useRef(!1);return O0(()=>{p.current=!0}),j.useCallback((h,g={})=>{if(qt(p.current,L0),!p.current)return;if(typeof h=="number"){l.go(h);return}let y=lu(h,JSON.parse(m),d,g.relative==="path");i==null&&s!=="/"&&(y.pathname=y.pathname==="/"?s:Da([s,y.pathname])),(g.replace?l.replace:l.push)(y,g.state,g)},[s,l,m,d,i])}j.createContext(null);function q0(){let{matches:i}=j.useContext(sa),s=i[i.length-1];return s?s.params:{}}function Fn(i,{relative:s}={}){let{matches:l}=j.useContext(sa),{pathname:r}=ua(),d=JSON.stringify(nu(l));return j.useMemo(()=>lu(i,JSON.parse(d),r,s==="path"),[i,d,r,s])}function Y1(i,s){return V0(i,s)}function V0(i,s,l,r,d){Ue(ks(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:m}=j.useContext(Vt),{matches:p}=j.useContext(sa),x=p[p.length-1],h=x?x.params:{},g=x?x.pathname:"/",y=x?x.pathnameBase:"/",b=x&&x.route;{let M=b&&b.path||"";P0(g,!b||M.endsWith("*")||M.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${M}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${M}"> to <Route path="${M==="/"?"*":`${M}/*`}">.`)}let w=ua(),A;if(s){let M=typeof s=="string"?Li(s):s;Ue(y==="/"||M.pathname?.startsWith(y),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${M.pathname}" was given in the \`location\` prop.`),A=M}else A=w;let E=A.pathname||"/",B=E;if(y!=="/"){let M=y.replace(/^\//,"").split("/");B="/"+E.replace(/^\//,"").split("/").slice(M.length).join("/")}let q=j0(i,{pathname:B});qt(b||q!=null,`No routes matched location "${A.pathname}${A.search}${A.hash}" `),qt(q==null||q[q.length-1].route.element!==void 0||q[q.length-1].route.Component!==void 0||q[q.length-1].route.lazy!==void 0,`Matched leaf route at location "${A.pathname}${A.search}${A.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let z=W1(q&&q.map(M=>Object.assign({},M,{params:Object.assign({},h,M.params),pathname:Da([y,m.encodeLocation?m.encodeLocation(M.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:M.pathname]),pathnameBase:M.pathnameBase==="/"?y:Da([y,m.encodeLocation?m.encodeLocation(M.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:M.pathnameBase])})),p,l,r,d);return s&&z?j.createElement(Yn.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...A},navigationType:"POP"}},z):z}function Q1(){let i=t2(),s=B1(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),l=i instanceof Error?i.stack:null,r="rgba(200,200,200, 0.5)",d={padding:"0.5rem",backgroundColor:r},m={padding:"2px 4px",backgroundColor:r},p=null;return console.error("Error handled by React Router default ErrorBoundary:",i),p=j.createElement(j.Fragment,null,j.createElement("p",null,"💿 Hey developer 👋"),j.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",j.createElement("code",{style:m},"ErrorBoundary")," or"," ",j.createElement("code",{style:m},"errorElement")," prop on your route.")),j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},s),l?j.createElement("pre",{style:d},l):null,p)}var F1=j.createElement(Q1,null),H0=class extends j.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,s){return s.location!==i.location||s.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:s.error,location:s.location,revalidation:i.revalidation||s.revalidation}}componentDidCatch(i,s){this.props.onError?this.props.onError(i,s):console.error("React Router caught the following error during render",i)}render(){let i=this.state.error;if(this.context&&typeof i=="object"&&i&&"digest"in i&&typeof i.digest=="string"){const l=U1(i.digest);l&&(i=l)}let s=i!==void 0?j.createElement(sa.Provider,{value:this.props.routeContext},j.createElement(ru.Provider,{value:i,children:this.props.component})):this.props.children;return this.context?j.createElement(K1,{error:i},s):s}};H0.contextType=O1;var md=new WeakMap;function K1({children:i,error:s}){let{basename:l}=j.useContext(Vt);if(typeof s=="object"&&s&&"digest"in s&&typeof s.digest=="string"){let r=I1(s.digest);if(r){let d=md.get(s);if(d)throw d;let m=k0(r.location,l);if(D0&&!md.get(s))if(m.isExternal||r.reloadDocument)window.location.href=m.absoluteURL||m.to;else{const p=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(m.to,{replace:r.replace}));throw md.set(s,p),p}return j.createElement("meta",{httpEquiv:"refresh",content:`0;url=${m.absoluteURL||m.to}`})}}return i}function X1({routeContext:i,match:s,children:l}){let r=j.useContext(Ds);return r&&r.static&&r.staticContext&&(s.route.errorElement||s.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=s.route.id),j.createElement(sa.Provider,{value:i},l)}function W1(i,s=[],l=null,r=null,d=null){if(i==null){if(!l)return null;if(l.errors)i=l.matches;else if(s.length===0&&!l.initialized&&l.matches.length>0)i=l.matches;else return null}let m=i,p=l?.errors;if(p!=null){let y=m.findIndex(b=>b.route.id&&p?.[b.route.id]!==void 0);Ue(y>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(p).join(",")}`),m=m.slice(0,Math.min(m.length,y+1))}let x=!1,h=-1;if(l)for(let y=0;y<m.length;y++){let b=m[y];if((b.route.HydrateFallback||b.route.hydrateFallbackElement)&&(h=y),b.route.id){let{loaderData:w,errors:A}=l,E=b.route.loader&&!w.hasOwnProperty(b.route.id)&&(!A||A[b.route.id]===void 0);if(b.route.lazy||E){x=!0,h>=0?m=m.slice(0,h+1):m=[m[0]];break}}}let g=l&&r?(y,b)=>{r(y,{location:l.location,params:l.matches?.[0]?.params??{},unstable_pattern:z1(l.matches),errorInfo:b})}:void 0;return m.reduceRight((y,b,w)=>{let A,E=!1,B=null,q=null;l&&(A=p&&b.route.id?p[b.route.id]:void 0,B=b.route.errorElement||F1,x&&(h<0&&w===0?(P0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,q=null):h===w&&(E=!0,q=b.route.hydrateFallbackElement||null)));let z=s.concat(m.slice(0,w+1)),M=()=>{let O;return A?O=B:E?O=q:b.route.Component?O=j.createElement(b.route.Component,null):b.route.element?O=b.route.element:O=y,j.createElement(X1,{match:b,routeContext:{outlet:y,matches:z,isDataRoute:l!=null},children:O})};return l&&(b.route.ErrorBoundary||b.route.errorElement||w===0)?j.createElement(H0,{location:l.location,revalidation:l.revalidation,component:B,error:A,children:M(),routeContext:{outlet:null,matches:z,isDataRoute:!0},onError:g}):M()},null)}function ou(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Z1(i){let s=j.useContext(Ds);return Ue(s,ou(i)),s}function J1(i){let s=j.useContext(Vr);return Ue(s,ou(i)),s}function $1(i){let s=j.useContext(sa);return Ue(s,ou(i)),s}function cu(i){let s=$1(i),l=s.matches[s.matches.length-1];return Ue(l.route.id,`${i} can only be used on routes that contain a unique "id"`),l.route.id}function e2(){return cu("useRouteId")}function t2(){let i=j.useContext(ru),s=J1("useRouteError"),l=cu("useRouteError");return i!==void 0?i:s.errors?.[l]}function a2(){let{router:i}=Z1("useNavigate"),s=cu("useNavigate"),l=j.useRef(!1);return O0(()=>{l.current=!0}),j.useCallback(async(d,m={})=>{qt(l.current,L0),l.current&&(typeof d=="number"?await i.navigate(d):await i.navigate(d,{fromRouteId:s,...m}))},[i,s])}var sg={};function P0(i,s,l){!s&&!sg[i]&&(sg[i]=!0,qt(!1,l))}j.memo(i2);function i2({routes:i,future:s,state:l,onError:r}){return V0(i,void 0,l,r,s)}function Bd({to:i,replace:s,state:l,relative:r}){Ue(ks(),"<Navigate> may be used only in the context of a <Router> component.");let{static:d}=j.useContext(Vt);qt(!d,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:m}=j.useContext(sa),{pathname:p}=ua(),x=Qn(),h=lu(i,nu(m),p,r==="path"),g=JSON.stringify(h);return j.useEffect(()=>{x(JSON.parse(g),{replace:s,state:l,relative:r})},[x,g,r,s,l]),null}function ws(i){Ue(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function s2({basename:i="/",children:s=null,location:l,navigationType:r="POP",navigator:d,static:m=!1,unstable_useTransitions:p}){Ue(!ks(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let x=i.replace(/^\/*/,"/"),h=j.useMemo(()=>({basename:x,navigator:d,static:m,unstable_useTransitions:p,future:{}}),[x,d,m,p]);typeof l=="string"&&(l=Li(l));let{pathname:g="/",search:y="",hash:b="",state:w=null,key:A="default"}=l,E=j.useMemo(()=>{let B=ka(g,x);return B==null?null:{location:{pathname:B,search:y,hash:b,state:w,key:A},navigationType:r}},[x,g,y,b,w,A,r]);return qt(E!=null,`<Router basename="${x}"> is not able to match the URL "${g}${y}${b}" because it does not start with the basename, so the <Router> won't render anything.`),E==null?null:j.createElement(Vt.Provider,{value:h},j.createElement(Yn.Provider,{children:s,value:E}))}function n2({children:i,location:s}){return Y1(zd(i),s)}function zd(i,s=[]){let l=[];return j.Children.forEach(i,(r,d)=>{if(!j.isValidElement(r))return;let m=[...s,d];if(r.type===j.Fragment){l.push.apply(l,zd(r.props.children,m));return}Ue(r.type===ws,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ue(!r.props.index||!r.props.children,"An index route cannot have child routes.");let p={id:r.props.id||m.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(p.children=zd(r.props.children,m)),l.push(p)}),l}var wr="get",Sr="application/x-www-form-urlencoded";function Hr(i){return typeof HTMLElement<"u"&&i instanceof HTMLElement}function l2(i){return Hr(i)&&i.tagName.toLowerCase()==="button"}function r2(i){return Hr(i)&&i.tagName.toLowerCase()==="form"}function o2(i){return Hr(i)&&i.tagName.toLowerCase()==="input"}function c2(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function d2(i,s){return i.button===0&&(!s||s==="_self")&&!c2(i)}var xr=null;function u2(){if(xr===null)try{new FormData(document.createElement("form"),0),xr=!1}catch{xr=!0}return xr}var m2=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function pd(i){return i!=null&&!m2.has(i)?(qt(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Sr}"`),null):i}function p2(i,s){let l,r,d,m,p;if(r2(i)){let x=i.getAttribute("action");r=x?ka(x,s):null,l=i.getAttribute("method")||wr,d=pd(i.getAttribute("enctype"))||Sr,m=new FormData(i)}else if(l2(i)||o2(i)&&(i.type==="submit"||i.type==="image")){let x=i.form;if(x==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=i.getAttribute("formaction")||x.getAttribute("action");if(r=h?ka(h,s):null,l=i.getAttribute("formmethod")||x.getAttribute("method")||wr,d=pd(i.getAttribute("formenctype"))||pd(x.getAttribute("enctype"))||Sr,m=new FormData(x,i),!u2()){let{name:g,type:y,value:b}=i;if(y==="image"){let w=g?`${g}.`:"";m.append(`${w}x`,"0"),m.append(`${w}y`,"0")}else g&&m.append(g,b)}}else{if(Hr(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');l=wr,r=null,d=Sr,p=i}return m&&d==="text/plain"&&(p=m,m=void 0),{action:r,method:l.toLowerCase(),encType:d,formData:m,body:p}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function du(i,s){if(i===!1||i===null||typeof i>"u")throw new Error(s)}function f2(i,s,l){let r=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return r.pathname==="/"?r.pathname=`_root.${l}`:s&&ka(r.pathname,s)==="/"?r.pathname=`${s.replace(/\/$/,"")}/_root.${l}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${l}`,r}async function h2(i,s){if(i.id in s)return s[i.id];try{let l=await import(i.module);return s[i.id]=l,l}catch(l){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(l),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function g2(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function x2(i,s,l){let r=await Promise.all(i.map(async d=>{let m=s.routes[d.route.id];if(m){let p=await h2(m,l);return p.links?p.links():[]}return[]}));return w2(r.flat(1).filter(g2).filter(d=>d.rel==="stylesheet"||d.rel==="preload").map(d=>d.rel==="stylesheet"?{...d,rel:"prefetch",as:"style"}:{...d,rel:"prefetch"}))}function ng(i,s,l,r,d,m){let p=(h,g)=>l[g]?h.route.id!==l[g].route.id:!0,x=(h,g)=>l[g].pathname!==h.pathname||l[g].route.path?.endsWith("*")&&l[g].params["*"]!==h.params["*"];return m==="assets"?s.filter((h,g)=>p(h,g)||x(h,g)):m==="data"?s.filter((h,g)=>{let y=r.routes[h.route.id];if(!y||!y.hasLoader)return!1;if(p(h,g)||x(h,g))return!0;if(h.route.shouldRevalidate){let b=h.route.shouldRevalidate({currentUrl:new URL(d.pathname+d.search+d.hash,window.origin),currentParams:l[0]?.params||{},nextUrl:new URL(i,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof b=="boolean")return b}return!0}):[]}function y2(i,s,{includeHydrateFallback:l}={}){return b2(i.map(r=>{let d=s.routes[r.route.id];if(!d)return[];let m=[d.module];return d.clientActionModule&&(m=m.concat(d.clientActionModule)),d.clientLoaderModule&&(m=m.concat(d.clientLoaderModule)),l&&d.hydrateFallbackModule&&(m=m.concat(d.hydrateFallbackModule)),d.imports&&(m=m.concat(d.imports)),m}).flat(1))}function b2(i){return[...new Set(i)]}function v2(i){let s={},l=Object.keys(i).sort();for(let r of l)s[r]=i[r];return s}function w2(i,s){let l=new Set;return new Set(s),i.reduce((r,d)=>{let m=JSON.stringify(v2(d));return l.has(m)||(l.add(m),r.push({key:m,link:d})),r},[])}function I0(){let i=j.useContext(Ds);return du(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function S2(){let i=j.useContext(Vr);return du(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var uu=j.createContext(void 0);uu.displayName="FrameworkContext";function U0(){let i=j.useContext(uu);return du(i,"You must render this element inside a <HydratedRouter> element"),i}function A2(i,s){let l=j.useContext(uu),[r,d]=j.useState(!1),[m,p]=j.useState(!1),{onFocus:x,onBlur:h,onMouseEnter:g,onMouseLeave:y,onTouchStart:b}=s,w=j.useRef(null);j.useEffect(()=>{if(i==="render"&&p(!0),i==="viewport"){let B=z=>{z.forEach(M=>{p(M.isIntersecting)})},q=new IntersectionObserver(B,{threshold:.5});return w.current&&q.observe(w.current),()=>{q.disconnect()}}},[i]),j.useEffect(()=>{if(r){let B=setTimeout(()=>{p(!0)},100);return()=>{clearTimeout(B)}}},[r]);let A=()=>{d(!0)},E=()=>{d(!1),p(!1)};return l?i!=="intent"?[m,w,{}]:[m,w,{onFocus:kn(x,A),onBlur:kn(h,E),onMouseEnter:kn(g,A),onMouseLeave:kn(y,E),onTouchStart:kn(b,A)}]:[!1,w,{}]}function kn(i,s){return l=>{i&&i(l),l.defaultPrevented||s(l)}}function C2({page:i,...s}){let{router:l}=I0(),r=j.useMemo(()=>j0(l.routes,i,l.basename),[l.routes,i,l.basename]);return r?j.createElement(j2,{page:i,matches:r,...s}):null}function T2(i){let{manifest:s,routeModules:l}=U0(),[r,d]=j.useState([]);return j.useEffect(()=>{let m=!1;return x2(i,s,l).then(p=>{m||d(p)}),()=>{m=!0}},[i,s,l]),r}function j2({page:i,matches:s,...l}){let r=ua(),{manifest:d,routeModules:m}=U0(),{basename:p}=I0(),{loaderData:x,matches:h}=S2(),g=j.useMemo(()=>ng(i,s,h,d,r,"data"),[i,s,h,d,r]),y=j.useMemo(()=>ng(i,s,h,d,r,"assets"),[i,s,h,d,r]),b=j.useMemo(()=>{if(i===r.pathname+r.search+r.hash)return[];let E=new Set,B=!1;if(s.forEach(z=>{let M=d.routes[z.route.id];!M||!M.hasLoader||(!g.some(O=>O.route.id===z.route.id)&&z.route.id in x&&m[z.route.id]?.shouldRevalidate||M.hasClientLoader?B=!0:E.add(z.route.id))}),E.size===0)return[];let q=f2(i,p,"data");return B&&E.size>0&&q.searchParams.set("_routes",s.filter(z=>E.has(z.route.id)).map(z=>z.route.id).join(",")),[q.pathname+q.search]},[p,x,r,d,g,s,i,m]),w=j.useMemo(()=>y2(y,d),[y,d]),A=T2(y);return j.createElement(j.Fragment,null,b.map(E=>j.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...l})),w.map(E=>j.createElement("link",{key:E,rel:"modulepreload",href:E,...l})),A.map(({key:E,link:B})=>j.createElement("link",{key:E,nonce:l.nonce,...B})))}function M2(...i){return s=>{i.forEach(l=>{typeof l=="function"?l(s):l!=null&&(l.current=s)})}}var E2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{E2&&(window.__reactRouterVersion="7.11.0")}catch{}function N2({basename:i,children:s,unstable_useTransitions:l,window:r}){let d=j.useRef();d.current==null&&(d.current=c1({window:r,v5Compat:!0}));let m=d.current,[p,x]=j.useState({action:m.action,location:m.location}),h=j.useCallback(g=>{l===!1?x(g):j.startTransition(()=>x(g))},[l]);return j.useLayoutEffect(()=>m.listen(h),[m,h]),j.createElement(s2,{basename:i,children:s,location:p.location,navigationType:p.action,navigator:m,unstable_useTransitions:l})}var _0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ge=j.forwardRef(function({onClick:s,discover:l="render",prefetch:r="none",relative:d,reloadDocument:m,replace:p,state:x,target:h,to:g,preventScrollReset:y,viewTransition:b,unstable_defaultShouldRevalidate:w,...A},E){let{basename:B,unstable_useTransitions:q}=j.useContext(Vt),z=typeof g=="string"&&_0.test(g),M=k0(g,B);g=M.to;let O=_1(g,{relative:d}),[X,P,Y]=A2(r,A),W=B2(g,{replace:p,state:x,target:h,preventScrollReset:y,relative:d,viewTransition:b,unstable_defaultShouldRevalidate:w,unstable_useTransitions:q});function Q(Te){s&&s(Te),Te.defaultPrevented||W(Te)}let ce=j.createElement("a",{...A,...Y,href:M.absoluteURL||O,onClick:M.isExternal||m?s:Q,ref:M2(E,P),target:h,"data-discover":!z&&l==="render"?"true":void 0});return X&&!z?j.createElement(j.Fragment,null,ce,j.createElement(C2,{page:O})):ce});ge.displayName="Link";var D2=j.forwardRef(function({"aria-current":s="page",caseSensitive:l=!1,className:r="",end:d=!1,style:m,to:p,viewTransition:x,children:h,...g},y){let b=Fn(p,{relative:g.relative}),w=ua(),A=j.useContext(Vr),{navigator:E,basename:B}=j.useContext(Vt),q=A!=null&&V2(b)&&x===!0,z=E.encodeLocation?E.encodeLocation(b).pathname:b.pathname,M=w.pathname,O=A&&A.navigation&&A.navigation.location?A.navigation.location.pathname:null;l||(M=M.toLowerCase(),O=O?O.toLowerCase():null,z=z.toLowerCase()),O&&B&&(O=ka(O,B)||O);const X=z!=="/"&&z.endsWith("/")?z.length-1:z.length;let P=M===z||!d&&M.startsWith(z)&&M.charAt(X)==="/",Y=O!=null&&(O===z||!d&&O.startsWith(z)&&O.charAt(z.length)==="/"),W={isActive:P,isPending:Y,isTransitioning:q},Q=P?s:void 0,ce;typeof r=="function"?ce=r(W):ce=[r,P?"active":null,Y?"pending":null,q?"transitioning":null].filter(Boolean).join(" ");let Te=typeof m=="function"?m(W):m;return j.createElement(ge,{...g,"aria-current":Q,className:ce,ref:y,style:Te,to:p,viewTransition:x},typeof h=="function"?h(W):h)});D2.displayName="NavLink";var k2=j.forwardRef(({discover:i="render",fetcherKey:s,navigate:l,reloadDocument:r,replace:d,state:m,method:p=wr,action:x,onSubmit:h,relative:g,preventScrollReset:y,viewTransition:b,unstable_defaultShouldRevalidate:w,...A},E)=>{let{unstable_useTransitions:B}=j.useContext(Vt),q=O2(),z=q2(x,{relative:g}),M=p.toLowerCase()==="get"?"get":"post",O=typeof x=="string"&&_0.test(x),X=P=>{if(h&&h(P),P.defaultPrevented)return;P.preventDefault();let Y=P.nativeEvent.submitter,W=Y?.getAttribute("formmethod")||p,Q=()=>q(Y||P.currentTarget,{fetcherKey:s,method:W,navigate:l,replace:d,state:m,relative:g,preventScrollReset:y,viewTransition:b,unstable_defaultShouldRevalidate:w});B&&l!==!1?j.startTransition(()=>Q()):Q()};return j.createElement("form",{ref:E,method:M,action:z,onSubmit:r?h:X,...A,"data-discover":!O&&i==="render"?"true":void 0})});k2.displayName="Form";function R2(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function G0(i){let s=j.useContext(Ds);return Ue(s,R2(i)),s}function B2(i,{target:s,replace:l,state:r,preventScrollReset:d,relative:m,viewTransition:p,unstable_defaultShouldRevalidate:x,unstable_useTransitions:h}={}){let g=Qn(),y=ua(),b=Fn(i,{relative:m});return j.useCallback(w=>{if(d2(w,s)){w.preventDefault();let A=l!==void 0?l:Hn(y)===Hn(b),E=()=>g(i,{replace:A,state:r,preventScrollReset:d,relative:m,viewTransition:p,unstable_defaultShouldRevalidate:x});h?j.startTransition(()=>E()):E()}},[y,g,b,l,r,s,i,d,m,p,x,h])}var z2=0,L2=()=>`__${String(++z2)}__`;function O2(){let{router:i}=G0("useSubmit"),{basename:s}=j.useContext(Vt),l=e2(),r=i.fetch,d=i.navigate;return j.useCallback(async(m,p={})=>{let{action:x,method:h,encType:g,formData:y,body:b}=p2(m,s);if(p.navigate===!1){let w=p.fetcherKey||L2();await r(w,l,p.action||x,{unstable_defaultShouldRevalidate:p.unstable_defaultShouldRevalidate,preventScrollReset:p.preventScrollReset,formData:y,body:b,formMethod:p.method||h,formEncType:p.encType||g,flushSync:p.flushSync})}else await d(p.action||x,{unstable_defaultShouldRevalidate:p.unstable_defaultShouldRevalidate,preventScrollReset:p.preventScrollReset,formData:y,body:b,formMethod:p.method||h,formEncType:p.encType||g,replace:p.replace,state:p.state,fromRouteId:l,flushSync:p.flushSync,viewTransition:p.viewTransition})},[r,d,s,l])}function q2(i,{relative:s}={}){let{basename:l}=j.useContext(Vt),r=j.useContext(sa);Ue(r,"useFormAction must be used inside a RouteContext");let[d]=r.matches.slice(-1),m={...Fn(i||".",{relative:s})},p=ua();if(i==null){m.search=p.search;let x=new URLSearchParams(m.search),h=x.getAll("index");if(h.some(y=>y==="")){x.delete("index"),h.filter(b=>b).forEach(b=>x.append("index",b));let y=x.toString();m.search=y?`?${y}`:""}}return(!i||i===".")&&d.route.index&&(m.search=m.search?m.search.replace(/^\?/,"?index&"):"?index"),l!=="/"&&(m.pathname=m.pathname==="/"?l:Da([l,m.pathname])),Hn(m)}function V2(i,{relative:s}={}){let l=j.useContext(B0);Ue(l!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=G0("useViewTransitionState"),d=Fn(i,{relative:s});if(!l.isTransitioning)return!1;let m=ka(l.currentLocation.pathname,r)||l.currentLocation.pathname,p=ka(l.nextLocation.pathname,r)||l.nextLocation.pathname;return Nr(d.pathname,p)!=null||Nr(d.pathname,m)!=null}var Y0={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},lg=ri.createContext&&ri.createContext(Y0),H2=["attr","size","title"];function P2(i,s){if(i==null)return{};var l=I2(i,s),r,d;if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(i);for(d=0;d<m.length;d++)r=m[d],!(s.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(i,r)&&(l[r]=i[r])}return l}function I2(i,s){if(i==null)return{};var l={};for(var r in i)if(Object.prototype.hasOwnProperty.call(i,r)){if(s.indexOf(r)>=0)continue;l[r]=i[r]}return l}function Dr(){return Dr=Object.assign?Object.assign.bind():function(i){for(var s=1;s<arguments.length;s++){var l=arguments[s];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(i[r]=l[r])}return i},Dr.apply(this,arguments)}function rg(i,s){var l=Object.keys(i);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(i);s&&(r=r.filter(function(d){return Object.getOwnPropertyDescriptor(i,d).enumerable})),l.push.apply(l,r)}return l}function kr(i){for(var s=1;s<arguments.length;s++){var l=arguments[s]!=null?arguments[s]:{};s%2?rg(Object(l),!0).forEach(function(r){U2(i,r,l[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(l)):rg(Object(l)).forEach(function(r){Object.defineProperty(i,r,Object.getOwnPropertyDescriptor(l,r))})}return i}function U2(i,s,l){return s=_2(s),s in i?Object.defineProperty(i,s,{value:l,enumerable:!0,configurable:!0,writable:!0}):i[s]=l,i}function _2(i){var s=G2(i,"string");return typeof s=="symbol"?s:s+""}function G2(i,s){if(typeof i!="object"||!i)return i;var l=i[Symbol.toPrimitive];if(l!==void 0){var r=l.call(i,s);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(s==="string"?String:Number)(i)}function Q0(i){return i&&i.map((s,l)=>ri.createElement(s.tag,kr({key:l},s.attr),Q0(s.child)))}function Xe(i){return s=>ri.createElement(Y2,Dr({attr:kr({},i.attr)},s),Q0(i.child))}function Y2(i){var s=l=>{var{attr:r,size:d,title:m}=i,p=P2(i,H2),x=d||l.size||"1em",h;return l.className&&(h=l.className),i.className&&(h=(h?h+" ":"")+i.className),ri.createElement("svg",Dr({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},l.attr,r,p,{className:h,style:kr(kr({color:i.color||l.color},l.style),i.style),height:x,width:x,xmlns:"http://www.w3.org/2000/svg"}),m&&ri.createElement("title",null,m),i.children)};return lg!==void 0?ri.createElement(lg.Consumer,null,l=>s(l)):s(Y0)}function Q2(i){return Xe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"},child:[]}]})(i)}function F2(i){return Xe({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(i)}function K2(i){return Xe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"},child:[]}]})(i)}function X2(i){return Xe({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"},child:[]}]})(i)}function W2(i){return Xe({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"},child:[]}]})(i)}function Z2(i){return Xe({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},child:[]}]})(i)}function Rs(i){return Xe({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"},child:[]}]})(i)}function J2(i){return Xe({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"},child:[]}]})(i)}function Kn(i){return Xe({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"},child:[]}]})(i)}function De(i){return Xe({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"},child:[]}]})(i)}function og(i){return Xe({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"},child:[]}]})(i)}function F0(i){return Xe({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"},child:[]}]})(i)}function $2(i){return Xe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M48 48a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm448 16H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"},child:[]}]})(i)}function ew(i){return Xe({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"},child:[]}]})(i)}function tw(i){return Xe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"},child:[]}]})(i)}function aw(i){return Xe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"},child:[]}]})(i)}function iw(i){return Xe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"},child:[]}]})(i)}function fd(i){return Xe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"},child:[]}]})(i)}function sw(i){return Xe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z"},child:[]}]})(i)}function Ar(i){return Xe({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(i)}const K0="/Aqvilia/assets/AQLIVIA-CNnSo5Jz.png",hd="/Aqvilia/assets/CentralLaboratory-4hENU1aW.webp",nw="/Aqvilia/assets/biotech%20lab-BfCOEmZz.webp",cg="/Aqvilia/assets/dataproject-DLsGiXja.webp",X0="/Aqvilia/assets/clinical%20monitoring-B7RHjLTu.avif",lw="/Aqvilia/assets/humantissue-DYmPkawE.webp",rw="/Aqvilia/assets/medicaltreatment-Bq169R2O.jpg",ni="/Aqvilia/assets/lab-B_5tf7ok.jpg",W0="/Aqvilia/assets/lab-OIHjdDPt.webp",ow="/Aqvilia/assets/hero%20bg-3249_Young%20chemist%20wearing%20hijab%20working%20in%20laboratory-BAujBafw.webp";function mu(i,s){i.indexOf(s)===-1&&i.push(s)}function pu(i,s){const l=i.indexOf(s);l>-1&&i.splice(l,1)}const Ra=(i,s,l)=>l>s?s:l<i?i:l;let fu=()=>{};const Ba={},Z0=i=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(i);function J0(i){return typeof i=="object"&&i!==null}const $0=i=>/^0[^.\s]+$/u.test(i);function hu(i){let s;return()=>(s===void 0&&(s=i()),s)}const Jt=i=>i,cw=(i,s)=>l=>s(i(l)),Xn=(...i)=>i.reduce(cw),Pn=(i,s,l)=>{const r=s-i;return r===0?1:(l-i)/r};class gu{constructor(){this.subscriptions=[]}add(s){return mu(this.subscriptions,s),()=>pu(this.subscriptions,s)}notify(s,l,r){const d=this.subscriptions.length;if(d)if(d===1)this.subscriptions[0](s,l,r);else for(let m=0;m<d;m++){const p=this.subscriptions[m];p&&p(s,l,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const ca=i=>i*1e3,Zt=i=>i/1e3;function ex(i,s){return s?i*(1e3/s):0}const tx=(i,s,l)=>(((1-3*l+3*s)*i+(3*l-6*s))*i+3*s)*i,dw=1e-7,uw=12;function mw(i,s,l,r,d){let m,p,x=0;do p=s+(l-s)/2,m=tx(p,r,d)-i,m>0?l=p:s=p;while(Math.abs(m)>dw&&++x<uw);return p}function Wn(i,s,l,r){if(i===s&&l===r)return Jt;const d=m=>mw(m,0,1,i,l);return m=>m===0||m===1?m:tx(d(m),s,r)}const ax=i=>s=>s<=.5?i(2*s)/2:(2-i(2*(1-s)))/2,ix=i=>s=>1-i(1-s),sx=Wn(.33,1.53,.69,.99),xu=ix(sx),nx=ax(xu),lx=i=>(i*=2)<1?.5*xu(i):.5*(2-Math.pow(2,-10*(i-1))),yu=i=>1-Math.sin(Math.acos(i)),rx=ix(yu),ox=ax(yu),pw=Wn(.42,0,1,1),fw=Wn(0,0,.58,1),cx=Wn(.42,0,.58,1),hw=i=>Array.isArray(i)&&typeof i[0]!="number",dx=i=>Array.isArray(i)&&typeof i[0]=="number",gw={linear:Jt,easeIn:pw,easeInOut:cx,easeOut:fw,circIn:yu,circInOut:ox,circOut:rx,backIn:xu,backInOut:nx,backOut:sx,anticipate:lx},xw=i=>typeof i=="string",dg=i=>{if(dx(i)){fu(i.length===4);const[s,l,r,d]=i;return Wn(s,l,r,d)}else if(xw(i))return gw[i];return i},ux=j.createContext({}),mx=j.createContext({strict:!1}),px=j.createContext({transformPagePoint:i=>i,isStatic:!1,reducedMotion:"never"}),Pr=j.createContext({});function Ir(i){return i!==null&&typeof i=="object"&&typeof i.start=="function"}function In(i){return typeof i=="string"||Array.isArray(i)}const bu=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],vu=["initial",...bu];function Ur(i){return Ir(i.animate)||vu.some(s=>In(i[s]))}function fx(i){return!!(Ur(i)||i.variants)}function yw(i,s){if(Ur(i)){const{initial:l,animate:r}=i;return{initial:l===!1||In(l)?l:void 0,animate:In(r)?r:void 0}}return i.inherit!==!1?s:{}}function bw(i){const{initial:s,animate:l}=yw(i,j.useContext(Pr));return j.useMemo(()=>({initial:s,animate:l}),[ug(s),ug(l)])}function ug(i){return Array.isArray(i)?i.join(" "):i}const yr=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function vw(i,s){let l=new Set,r=new Set,d=!1,m=!1;const p=new WeakSet;let x={delta:0,timestamp:0,isProcessing:!1};function h(y){p.has(y)&&(g.schedule(y),i()),y(x)}const g={schedule:(y,b=!1,w=!1)=>{const E=w&&d?l:r;return b&&p.add(y),E.has(y)||E.add(y),y},cancel:y=>{r.delete(y),p.delete(y)},process:y=>{if(x=y,d){m=!0;return}d=!0,[l,r]=[r,l],l.forEach(h),l.clear(),d=!1,m&&(m=!1,g.process(y))}};return g}const ww=40;function hx(i,s){let l=!1,r=!0;const d={delta:0,timestamp:0,isProcessing:!1},m=()=>l=!0,p=yr.reduce((O,X)=>(O[X]=vw(m),O),{}),{setup:x,read:h,resolveKeyframes:g,preUpdate:y,update:b,preRender:w,render:A,postRender:E}=p,B=()=>{const O=Ba.useManualTiming?d.timestamp:performance.now();l=!1,Ba.useManualTiming||(d.delta=r?1e3/60:Math.max(Math.min(O-d.timestamp,ww),1)),d.timestamp=O,d.isProcessing=!0,x.process(d),h.process(d),g.process(d),y.process(d),b.process(d),w.process(d),A.process(d),E.process(d),d.isProcessing=!1,l&&s&&(r=!1,i(B))},q=()=>{l=!0,r=!0,d.isProcessing||i(B)};return{schedule:yr.reduce((O,X)=>{const P=p[X];return O[X]=(Y,W=!1,Q=!1)=>(l||q(),P.schedule(Y,W,Q)),O},{}),cancel:O=>{for(let X=0;X<yr.length;X++)p[yr[X]].cancel(O)},state:d,steps:p}}const{schedule:Ie,cancel:oi,state:ut,steps:gd}=hx(typeof requestAnimationFrame<"u"?requestAnimationFrame:Jt,!0);let Cr;function Sw(){Cr=void 0}const Ct={now:()=>(Cr===void 0&&Ct.set(ut.isProcessing||Ba.useManualTiming?ut.timestamp:performance.now()),Cr),set:i=>{Cr=i,queueMicrotask(Sw)}},gx=i=>s=>typeof s=="string"&&s.startsWith(i),xx=gx("--"),Aw=gx("var(--"),wu=i=>Aw(i)?Cw.test(i.split("/*")[0].trim()):!1,Cw=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Bs={test:i=>typeof i=="number",parse:parseFloat,transform:i=>i},Un={...Bs,transform:i=>Ra(0,1,i)},br={...Bs,default:1},zn=i=>Math.round(i*1e5)/1e5,Su=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Tw(i){return i==null}const jw=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Au=(i,s)=>l=>!!(typeof l=="string"&&jw.test(l)&&l.startsWith(i)||s&&!Tw(l)&&Object.prototype.hasOwnProperty.call(l,s)),yx=(i,s,l)=>r=>{if(typeof r!="string")return r;const[d,m,p,x]=r.match(Su);return{[i]:parseFloat(d),[s]:parseFloat(m),[l]:parseFloat(p),alpha:x!==void 0?parseFloat(x):1}},Mw=i=>Ra(0,255,i),xd={...Bs,transform:i=>Math.round(Mw(i))},ki={test:Au("rgb","red"),parse:yx("red","green","blue"),transform:({red:i,green:s,blue:l,alpha:r=1})=>"rgba("+xd.transform(i)+", "+xd.transform(s)+", "+xd.transform(l)+", "+zn(Un.transform(r))+")"};function Ew(i){let s="",l="",r="",d="";return i.length>5?(s=i.substring(1,3),l=i.substring(3,5),r=i.substring(5,7),d=i.substring(7,9)):(s=i.substring(1,2),l=i.substring(2,3),r=i.substring(3,4),d=i.substring(4,5),s+=s,l+=l,r+=r,d+=d),{red:parseInt(s,16),green:parseInt(l,16),blue:parseInt(r,16),alpha:d?parseInt(d,16)/255:1}}const Ld={test:Au("#"),parse:Ew,transform:ki.transform},Zn=i=>({test:s=>typeof s=="string"&&s.endsWith(i)&&s.split(" ").length===1,parse:parseFloat,transform:s=>`${s}${i}`}),li=Zn("deg"),da=Zn("%"),$=Zn("px"),Nw=Zn("vh"),Dw=Zn("vw"),mg={...da,parse:i=>da.parse(i)/100,transform:i=>da.transform(i*100)},Ss={test:Au("hsl","hue"),parse:yx("hue","saturation","lightness"),transform:({hue:i,saturation:s,lightness:l,alpha:r=1})=>"hsla("+Math.round(i)+", "+da.transform(zn(s))+", "+da.transform(zn(l))+", "+zn(Un.transform(r))+")"},et={test:i=>ki.test(i)||Ld.test(i)||Ss.test(i),parse:i=>ki.test(i)?ki.parse(i):Ss.test(i)?Ss.parse(i):Ld.parse(i),transform:i=>typeof i=="string"?i:i.hasOwnProperty("red")?ki.transform(i):Ss.transform(i),getAnimatableNone:i=>{const s=et.parse(i);return s.alpha=0,et.transform(s)}},kw=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function Rw(i){return isNaN(i)&&typeof i=="string"&&(i.match(Su)?.length||0)+(i.match(kw)?.length||0)>0}const bx="number",vx="color",Bw="var",zw="var(",pg="${}",Lw=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function _n(i){const s=i.toString(),l=[],r={color:[],number:[],var:[]},d=[];let m=0;const x=s.replace(Lw,h=>(et.test(h)?(r.color.push(m),d.push(vx),l.push(et.parse(h))):h.startsWith(zw)?(r.var.push(m),d.push(Bw),l.push(h)):(r.number.push(m),d.push(bx),l.push(parseFloat(h))),++m,pg)).split(pg);return{values:l,split:x,indexes:r,types:d}}function wx(i){return _n(i).values}function Sx(i){const{split:s,types:l}=_n(i),r=s.length;return d=>{let m="";for(let p=0;p<r;p++)if(m+=s[p],d[p]!==void 0){const x=l[p];x===bx?m+=zn(d[p]):x===vx?m+=et.transform(d[p]):m+=d[p]}return m}}const Ow=i=>typeof i=="number"?0:et.test(i)?et.getAnimatableNone(i):i;function qw(i){const s=wx(i);return Sx(i)(s.map(Ow))}const ci={test:Rw,parse:wx,createTransformer:Sx,getAnimatableNone:qw};function yd(i,s,l){return l<0&&(l+=1),l>1&&(l-=1),l<1/6?i+(s-i)*6*l:l<1/2?s:l<2/3?i+(s-i)*(2/3-l)*6:i}function Vw({hue:i,saturation:s,lightness:l,alpha:r}){i/=360,s/=100,l/=100;let d=0,m=0,p=0;if(!s)d=m=p=l;else{const x=l<.5?l*(1+s):l+s-l*s,h=2*l-x;d=yd(h,x,i+1/3),m=yd(h,x,i),p=yd(h,x,i-1/3)}return{red:Math.round(d*255),green:Math.round(m*255),blue:Math.round(p*255),alpha:r}}function Rr(i,s){return l=>l>0?s:i}const _e=(i,s,l)=>i+(s-i)*l,bd=(i,s,l)=>{const r=i*i,d=l*(s*s-r)+r;return d<0?0:Math.sqrt(d)},Hw=[Ld,ki,Ss],Pw=i=>Hw.find(s=>s.test(i));function fg(i){const s=Pw(i);if(!s)return!1;let l=s.parse(i);return s===Ss&&(l=Vw(l)),l}const hg=(i,s)=>{const l=fg(i),r=fg(s);if(!l||!r)return Rr(i,s);const d={...l};return m=>(d.red=bd(l.red,r.red,m),d.green=bd(l.green,r.green,m),d.blue=bd(l.blue,r.blue,m),d.alpha=_e(l.alpha,r.alpha,m),ki.transform(d))},Od=new Set(["none","hidden"]);function Iw(i,s){return Od.has(i)?l=>l<=0?i:s:l=>l>=1?s:i}function Uw(i,s){return l=>_e(i,s,l)}function Cu(i){return typeof i=="number"?Uw:typeof i=="string"?wu(i)?Rr:et.test(i)?hg:Yw:Array.isArray(i)?Ax:typeof i=="object"?et.test(i)?hg:_w:Rr}function Ax(i,s){const l=[...i],r=l.length,d=i.map((m,p)=>Cu(m)(m,s[p]));return m=>{for(let p=0;p<r;p++)l[p]=d[p](m);return l}}function _w(i,s){const l={...i,...s},r={};for(const d in l)i[d]!==void 0&&s[d]!==void 0&&(r[d]=Cu(i[d])(i[d],s[d]));return d=>{for(const m in r)l[m]=r[m](d);return l}}function Gw(i,s){const l=[],r={color:0,var:0,number:0};for(let d=0;d<s.values.length;d++){const m=s.types[d],p=i.indexes[m][r[m]],x=i.values[p]??0;l[d]=x,r[m]++}return l}const Yw=(i,s)=>{const l=ci.createTransformer(s),r=_n(i),d=_n(s);return r.indexes.var.length===d.indexes.var.length&&r.indexes.color.length===d.indexes.color.length&&r.indexes.number.length>=d.indexes.number.length?Od.has(i)&&!d.values.length||Od.has(s)&&!r.values.length?Iw(i,s):Xn(Ax(Gw(r,d),d.values),l):Rr(i,s)};function Cx(i,s,l){return typeof i=="number"&&typeof s=="number"&&typeof l=="number"?_e(i,s,l):Cu(i)(i,s)}const Qw=i=>{const s=({timestamp:l})=>i(l);return{start:(l=!0)=>Ie.update(s,l),stop:()=>oi(s),now:()=>ut.isProcessing?ut.timestamp:Ct.now()}},Tx=(i,s,l=10)=>{let r="";const d=Math.max(Math.round(s/l),2);for(let m=0;m<d;m++)r+=Math.round(i(m/(d-1))*1e4)/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},Br=2e4;function Tu(i){let s=0;const l=50;let r=i.next(s);for(;!r.done&&s<Br;)s+=l,r=i.next(s);return s>=Br?1/0:s}function Fw(i,s=100,l){const r=l({...i,keyframes:[0,s]}),d=Math.min(Tu(r),Br);return{type:"keyframes",ease:m=>r.next(d*m).value/s,duration:Zt(d)}}const Kw=5;function jx(i,s,l){const r=Math.max(s-Kw,0);return ex(l-i(r),s-r)}const Qe={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},vd=.001;function Xw({duration:i=Qe.duration,bounce:s=Qe.bounce,velocity:l=Qe.velocity,mass:r=Qe.mass}){let d,m,p=1-s;p=Ra(Qe.minDamping,Qe.maxDamping,p),i=Ra(Qe.minDuration,Qe.maxDuration,Zt(i)),p<1?(d=g=>{const y=g*p,b=y*i,w=y-l,A=qd(g,p),E=Math.exp(-b);return vd-w/A*E},m=g=>{const b=g*p*i,w=b*l+l,A=Math.pow(p,2)*Math.pow(g,2)*i,E=Math.exp(-b),B=qd(Math.pow(g,2),p);return(-d(g)+vd>0?-1:1)*((w-A)*E)/B}):(d=g=>{const y=Math.exp(-g*i),b=(g-l)*i+1;return-vd+y*b},m=g=>{const y=Math.exp(-g*i),b=(l-g)*(i*i);return y*b});const x=5/i,h=Zw(d,m,x);if(i=ca(i),isNaN(h))return{stiffness:Qe.stiffness,damping:Qe.damping,duration:i};{const g=Math.pow(h,2)*r;return{stiffness:g,damping:p*2*Math.sqrt(r*g),duration:i}}}const Ww=12;function Zw(i,s,l){let r=l;for(let d=1;d<Ww;d++)r=r-i(r)/s(r);return r}function qd(i,s){return i*Math.sqrt(1-s*s)}const Jw=["duration","bounce"],$w=["stiffness","damping","mass"];function gg(i,s){return s.some(l=>i[l]!==void 0)}function e4(i){let s={velocity:Qe.velocity,stiffness:Qe.stiffness,damping:Qe.damping,mass:Qe.mass,isResolvedFromDuration:!1,...i};if(!gg(i,$w)&&gg(i,Jw))if(i.visualDuration){const l=i.visualDuration,r=2*Math.PI/(l*1.2),d=r*r,m=2*Ra(.05,1,1-(i.bounce||0))*Math.sqrt(d);s={...s,mass:Qe.mass,stiffness:d,damping:m}}else{const l=Xw(i);s={...s,...l,mass:Qe.mass},s.isResolvedFromDuration=!0}return s}function zr(i=Qe.visualDuration,s=Qe.bounce){const l=typeof i!="object"?{visualDuration:i,keyframes:[0,1],bounce:s}:i;let{restSpeed:r,restDelta:d}=l;const m=l.keyframes[0],p=l.keyframes[l.keyframes.length-1],x={done:!1,value:m},{stiffness:h,damping:g,mass:y,duration:b,velocity:w,isResolvedFromDuration:A}=e4({...l,velocity:-Zt(l.velocity||0)}),E=w||0,B=g/(2*Math.sqrt(h*y)),q=p-m,z=Zt(Math.sqrt(h/y)),M=Math.abs(q)<5;r||(r=M?Qe.restSpeed.granular:Qe.restSpeed.default),d||(d=M?Qe.restDelta.granular:Qe.restDelta.default);let O;if(B<1){const P=qd(z,B);O=Y=>{const W=Math.exp(-B*z*Y);return p-W*((E+B*z*q)/P*Math.sin(P*Y)+q*Math.cos(P*Y))}}else if(B===1)O=P=>p-Math.exp(-z*P)*(q+(E+z*q)*P);else{const P=z*Math.sqrt(B*B-1);O=Y=>{const W=Math.exp(-B*z*Y),Q=Math.min(P*Y,300);return p-W*((E+B*z*q)*Math.sinh(Q)+P*q*Math.cosh(Q))/P}}const X={calculatedDuration:A&&b||null,next:P=>{const Y=O(P);if(A)x.done=P>=b;else{let W=P===0?E:0;B<1&&(W=P===0?ca(E):jx(O,P,Y));const Q=Math.abs(W)<=r,ce=Math.abs(p-Y)<=d;x.done=Q&&ce}return x.value=x.done?p:Y,x},toString:()=>{const P=Math.min(Tu(X),Br),Y=Tx(W=>X.next(P*W).value,P,30);return P+"ms "+Y},toTransition:()=>{}};return X}zr.applyToOptions=i=>{const s=Fw(i,100,zr);return i.ease=s.ease,i.duration=ca(s.duration),i.type="keyframes",i};function Vd({keyframes:i,velocity:s=0,power:l=.8,timeConstant:r=325,bounceDamping:d=10,bounceStiffness:m=500,modifyTarget:p,min:x,max:h,restDelta:g=.5,restSpeed:y}){const b=i[0],w={done:!1,value:b},A=Q=>x!==void 0&&Q<x||h!==void 0&&Q>h,E=Q=>x===void 0?h:h===void 0||Math.abs(x-Q)<Math.abs(h-Q)?x:h;let B=l*s;const q=b+B,z=p===void 0?q:p(q);z!==q&&(B=z-b);const M=Q=>-B*Math.exp(-Q/r),O=Q=>z+M(Q),X=Q=>{const ce=M(Q),Te=O(Q);w.done=Math.abs(ce)<=g,w.value=w.done?z:Te};let P,Y;const W=Q=>{A(w.value)&&(P=Q,Y=zr({keyframes:[w.value,E(w.value)],velocity:jx(O,Q,w.value),damping:d,stiffness:m,restDelta:g,restSpeed:y}))};return W(0),{calculatedDuration:null,next:Q=>{let ce=!1;return!Y&&P===void 0&&(ce=!0,X(Q),W(Q)),P!==void 0&&Q>=P?Y.next(Q-P):(!ce&&X(Q),w)}}}function t4(i,s,l){const r=[],d=l||Ba.mix||Cx,m=i.length-1;for(let p=0;p<m;p++){let x=d(i[p],i[p+1]);if(s){const h=Array.isArray(s)?s[p]||Jt:s;x=Xn(h,x)}r.push(x)}return r}function a4(i,s,{clamp:l=!0,ease:r,mixer:d}={}){const m=i.length;if(fu(m===s.length),m===1)return()=>s[0];if(m===2&&s[0]===s[1])return()=>s[1];const p=i[0]===i[1];i[0]>i[m-1]&&(i=[...i].reverse(),s=[...s].reverse());const x=t4(s,r,d),h=x.length,g=y=>{if(p&&y<i[0])return s[0];let b=0;if(h>1)for(;b<i.length-2&&!(y<i[b+1]);b++);const w=Pn(i[b],i[b+1],y);return x[b](w)};return l?y=>g(Ra(i[0],i[m-1],y)):g}function i4(i,s){const l=i[i.length-1];for(let r=1;r<=s;r++){const d=Pn(0,s,r);i.push(_e(l,1,d))}}function s4(i){const s=[0];return i4(s,i.length-1),s}function n4(i,s){return i.map(l=>l*s)}function l4(i,s){return i.map(()=>s||cx).splice(0,i.length-1)}function Ln({duration:i=300,keyframes:s,times:l,ease:r="easeInOut"}){const d=hw(r)?r.map(dg):dg(r),m={done:!1,value:s[0]},p=n4(l&&l.length===s.length?l:s4(s),i),x=a4(p,s,{ease:Array.isArray(d)?d:l4(s,d)});return{calculatedDuration:i,next:h=>(m.value=x(h),m.done=h>=i,m)}}const r4=i=>i!==null;function ju(i,{repeat:s,repeatType:l="loop"},r,d=1){const m=i.filter(r4),x=d<0||s&&l!=="loop"&&s%2===1?0:m.length-1;return!x||r===void 0?m[x]:r}const o4={decay:Vd,inertia:Vd,tween:Ln,keyframes:Ln,spring:zr};function Mx(i){typeof i.type=="string"&&(i.type=o4[i.type])}class Mu{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(s=>{this.resolve=s})}notifyFinished(){this.resolve()}then(s,l){return this.finished.then(s,l)}}const c4=i=>i/100;class Eu extends Mu{constructor(s){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{const{motionValue:l}=this.options;l&&l.updatedAt!==Ct.now()&&this.tick(Ct.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=s,this.initAnimation(),this.play(),s.autoplay===!1&&this.pause()}initAnimation(){const{options:s}=this;Mx(s);const{type:l=Ln,repeat:r=0,repeatDelay:d=0,repeatType:m,velocity:p=0}=s;let{keyframes:x}=s;const h=l||Ln;h!==Ln&&typeof x[0]!="number"&&(this.mixKeyframes=Xn(c4,Cx(x[0],x[1])),x=[0,100]);const g=h({...s,keyframes:x});m==="mirror"&&(this.mirroredGenerator=h({...s,keyframes:[...x].reverse(),velocity:-p})),g.calculatedDuration===null&&(g.calculatedDuration=Tu(g));const{calculatedDuration:y}=g;this.calculatedDuration=y,this.resolvedDuration=y+d,this.totalDuration=this.resolvedDuration*(r+1)-d,this.generator=g}updateTime(s){const l=Math.round(s-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=l}tick(s,l=!1){const{generator:r,totalDuration:d,mixKeyframes:m,mirroredGenerator:p,resolvedDuration:x,calculatedDuration:h}=this;if(this.startTime===null)return r.next(0);const{delay:g=0,keyframes:y,repeat:b,repeatType:w,repeatDelay:A,type:E,onUpdate:B,finalKeyframe:q}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,s):this.speed<0&&(this.startTime=Math.min(s-d/this.speed,this.startTime)),l?this.currentTime=s:this.updateTime(s);const z=this.currentTime-g*(this.playbackSpeed>=0?1:-1),M=this.playbackSpeed>=0?z<0:z>d;this.currentTime=Math.max(z,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=d);let O=this.currentTime,X=r;if(b){const Q=Math.min(this.currentTime,d)/x;let ce=Math.floor(Q),Te=Q%1;!Te&&Q>=1&&(Te=1),Te===1&&ce--,ce=Math.min(ce,b+1),ce%2&&(w==="reverse"?(Te=1-Te,A&&(Te-=A/x)):w==="mirror"&&(X=p)),O=Ra(0,1,Te)*x}const P=M?{done:!1,value:y[0]}:X.next(O);m&&(P.value=m(P.value));let{done:Y}=P;!M&&h!==null&&(Y=this.playbackSpeed>=0?this.currentTime>=d:this.currentTime<=0);const W=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&Y);return W&&E!==Vd&&(P.value=ju(y,this.options,q,this.speed)),B&&B(P.value),W&&this.finish(),P}then(s,l){return this.finished.then(s,l)}get duration(){return Zt(this.calculatedDuration)}get iterationDuration(){const{delay:s=0}=this.options||{};return this.duration+Zt(s)}get time(){return Zt(this.currentTime)}set time(s){s=ca(s),this.currentTime=s,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=s:this.driver&&(this.startTime=this.driver.now()-s/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(s){this.updateTime(Ct.now());const l=this.playbackSpeed!==s;this.playbackSpeed=s,l&&(this.time=Zt(this.currentTime))}play(){if(this.isStopped)return;const{driver:s=Qw,startTime:l}=this.options;this.driver||(this.driver=s(d=>this.tick(d))),this.options.onPlay?.();const r=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=r):this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime||(this.startTime=l??r),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Ct.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(s){return this.startTime=0,this.tick(s,!0)}attachTimeline(s){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),s.observe(this)}}function d4(i){for(let s=1;s<i.length;s++)i[s]??(i[s]=i[s-1])}const Ri=i=>i*180/Math.PI,Hd=i=>{const s=Ri(Math.atan2(i[1],i[0]));return Pd(s)},u4={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:i=>(Math.abs(i[0])+Math.abs(i[3]))/2,rotate:Hd,rotateZ:Hd,skewX:i=>Ri(Math.atan(i[1])),skewY:i=>Ri(Math.atan(i[2])),skew:i=>(Math.abs(i[1])+Math.abs(i[2]))/2},Pd=i=>(i=i%360,i<0&&(i+=360),i),xg=Hd,yg=i=>Math.sqrt(i[0]*i[0]+i[1]*i[1]),bg=i=>Math.sqrt(i[4]*i[4]+i[5]*i[5]),m4={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:yg,scaleY:bg,scale:i=>(yg(i)+bg(i))/2,rotateX:i=>Pd(Ri(Math.atan2(i[6],i[5]))),rotateY:i=>Pd(Ri(Math.atan2(-i[2],i[0]))),rotateZ:xg,rotate:xg,skewX:i=>Ri(Math.atan(i[4])),skewY:i=>Ri(Math.atan(i[1])),skew:i=>(Math.abs(i[1])+Math.abs(i[4]))/2};function Id(i){return i.includes("scale")?1:0}function Ud(i,s){if(!i||i==="none")return Id(s);const l=i.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,d;if(l)r=m4,d=l;else{const x=i.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=u4,d=x}if(!d)return Id(s);const m=r[s],p=d[1].split(",").map(f4);return typeof m=="function"?m(p):p[m]}const p4=(i,s)=>{const{transform:l="none"}=getComputedStyle(i);return Ud(l,s)};function f4(i){return parseFloat(i.trim())}const zs=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Ls=new Set(zs),vg=i=>i===Bs||i===$,h4=new Set(["x","y","z"]),g4=zs.filter(i=>!h4.has(i));function x4(i){const s=[];return g4.forEach(l=>{const r=i.getValue(l);r!==void 0&&(s.push([l,r.get()]),r.set(l.startsWith("scale")?1:0))}),s}const Bi={width:({x:i},{paddingLeft:s="0",paddingRight:l="0"})=>i.max-i.min-parseFloat(s)-parseFloat(l),height:({y:i},{paddingTop:s="0",paddingBottom:l="0"})=>i.max-i.min-parseFloat(s)-parseFloat(l),top:(i,{top:s})=>parseFloat(s),left:(i,{left:s})=>parseFloat(s),bottom:({y:i},{top:s})=>parseFloat(s)+(i.max-i.min),right:({x:i},{left:s})=>parseFloat(s)+(i.max-i.min),x:(i,{transform:s})=>Ud(s,"x"),y:(i,{transform:s})=>Ud(s,"y")};Bi.translateX=Bi.x;Bi.translateY=Bi.y;const zi=new Set;let _d=!1,Gd=!1,Yd=!1;function Ex(){if(Gd){const i=Array.from(zi).filter(r=>r.needsMeasurement),s=new Set(i.map(r=>r.element)),l=new Map;s.forEach(r=>{const d=x4(r);d.length&&(l.set(r,d),r.render())}),i.forEach(r=>r.measureInitialState()),s.forEach(r=>{r.render();const d=l.get(r);d&&d.forEach(([m,p])=>{r.getValue(m)?.set(p)})}),i.forEach(r=>r.measureEndState()),i.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}Gd=!1,_d=!1,zi.forEach(i=>i.complete(Yd)),zi.clear()}function Nx(){zi.forEach(i=>{i.readKeyframes(),i.needsMeasurement&&(Gd=!0)})}function y4(){Yd=!0,Nx(),Ex(),Yd=!1}class Nu{constructor(s,l,r,d,m,p=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...s],this.onComplete=l,this.name=r,this.motionValue=d,this.element=m,this.isAsync=p}scheduleResolve(){this.state="scheduled",this.isAsync?(zi.add(this),_d||(_d=!0,Ie.read(Nx),Ie.resolveKeyframes(Ex))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:s,name:l,element:r,motionValue:d}=this;if(s[0]===null){const m=d?.get(),p=s[s.length-1];if(m!==void 0)s[0]=m;else if(r&&l){const x=r.readValue(l,p);x!=null&&(s[0]=x)}s[0]===void 0&&(s[0]=p),d&&m===void 0&&d.set(s[0])}d4(s)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(s=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,s),zi.delete(this)}cancel(){this.state==="scheduled"&&(zi.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const b4=i=>i.startsWith("--");function v4(i,s,l){b4(s)?i.style.setProperty(s,l):i.style[s]=l}const w4=hu(()=>window.ScrollTimeline!==void 0),S4={};function A4(i,s){const l=hu(i);return()=>S4[s]??l()}const Dx=A4(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Bn=([i,s,l,r])=>`cubic-bezier(${i}, ${s}, ${l}, ${r})`,wg={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Bn([0,.65,.55,1]),circOut:Bn([.55,0,1,.45]),backIn:Bn([.31,.01,.66,-.59]),backOut:Bn([.33,1.53,.69,.99])};function kx(i,s){if(i)return typeof i=="function"?Dx()?Tx(i,s):"ease-out":dx(i)?Bn(i):Array.isArray(i)?i.map(l=>kx(l,s)||wg.easeOut):wg[i]}function C4(i,s,l,{delay:r=0,duration:d=300,repeat:m=0,repeatType:p="loop",ease:x="easeOut",times:h}={},g=void 0){const y={[s]:l};h&&(y.offset=h);const b=kx(x,d);Array.isArray(b)&&(y.easing=b);const w={delay:r,duration:d,easing:Array.isArray(b)?"linear":b,fill:"both",iterations:m+1,direction:p==="reverse"?"alternate":"normal"};return g&&(w.pseudoElement=g),i.animate(y,w)}function Rx(i){return typeof i=="function"&&"applyToOptions"in i}function T4({type:i,...s}){return Rx(i)&&Dx()?i.applyToOptions(s):(s.duration??(s.duration=300),s.ease??(s.ease="easeOut"),s)}class j4 extends Mu{constructor(s){if(super(),this.finishedTime=null,this.isStopped=!1,!s)return;const{element:l,name:r,keyframes:d,pseudoElement:m,allowFlatten:p=!1,finalKeyframe:x,onComplete:h}=s;this.isPseudoElement=!!m,this.allowFlatten=p,this.options=s,fu(typeof s.type!="string");const g=T4(s);this.animation=C4(l,r,d,g,m),g.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!m){const y=ju(d,this.options,x,this.speed);this.updateMotionValue?this.updateMotionValue(y):v4(l,r,y),this.animation.cancel()}h?.(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:s}=this;s==="idle"||s==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){this.isPseudoElement||this.animation.commitStyles?.()}get duration(){const s=this.animation.effect?.getComputedTiming?.().duration||0;return Zt(Number(s))}get iterationDuration(){const{delay:s=0}=this.options||{};return this.duration+Zt(s)}get time(){return Zt(Number(this.animation.currentTime)||0)}set time(s){this.finishedTime=null,this.animation.currentTime=ca(s)}get speed(){return this.animation.playbackRate}set speed(s){s<0&&(this.finishedTime=null),this.animation.playbackRate=s}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(s){this.animation.startTime=s}attachTimeline({timeline:s,observe:l}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,s&&w4()?(this.animation.timeline=s,Jt):l(this)}}const Bx={anticipate:lx,backInOut:nx,circInOut:ox};function M4(i){return i in Bx}function E4(i){typeof i.ease=="string"&&M4(i.ease)&&(i.ease=Bx[i.ease])}const Sg=10;class N4 extends j4{constructor(s){E4(s),Mx(s),super(s),s.startTime&&(this.startTime=s.startTime),this.options=s}updateMotionValue(s){const{motionValue:l,onUpdate:r,onComplete:d,element:m,...p}=this.options;if(!l)return;if(s!==void 0){l.set(s);return}const x=new Eu({...p,autoplay:!1}),h=ca(this.finishedTime??this.time);l.setWithVelocity(x.sample(h-Sg).value,x.sample(h).value,Sg),x.stop()}}const Ag=(i,s)=>s==="zIndex"?!1:!!(typeof i=="number"||Array.isArray(i)||typeof i=="string"&&(ci.test(i)||i==="0")&&!i.startsWith("url("));function D4(i){const s=i[0];if(i.length===1)return!0;for(let l=0;l<i.length;l++)if(i[l]!==s)return!0}function k4(i,s,l,r){const d=i[0];if(d===null)return!1;if(s==="display"||s==="visibility")return!0;const m=i[i.length-1],p=Ag(d,s),x=Ag(m,s);return!p||!x?!1:D4(i)||(l==="spring"||Rx(l))&&r}function Qd(i){i.duration=0,i.type="keyframes"}const R4=new Set(["opacity","clipPath","filter","transform"]),B4=hu(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function z4(i){const{motionValue:s,name:l,repeatDelay:r,repeatType:d,damping:m,type:p}=i;if(!(s?.owner?.current instanceof HTMLElement))return!1;const{onUpdate:h,transformTemplate:g}=s.owner.getProps();return B4()&&l&&R4.has(l)&&(l!=="transform"||!g)&&!h&&!r&&d!=="mirror"&&m!==0&&p!=="inertia"}const L4=40;class O4 extends Mu{constructor({autoplay:s=!0,delay:l=0,type:r="keyframes",repeat:d=0,repeatDelay:m=0,repeatType:p="loop",keyframes:x,name:h,motionValue:g,element:y,...b}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=Ct.now();const w={autoplay:s,delay:l,type:r,repeat:d,repeatDelay:m,repeatType:p,name:h,motionValue:g,element:y,...b},A=y?.KeyframeResolver||Nu;this.keyframeResolver=new A(x,(E,B,q)=>this.onKeyframesResolved(E,B,w,!q),h,g,y),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(s,l,r,d){this.keyframeResolver=void 0;const{name:m,type:p,velocity:x,delay:h,isHandoff:g,onUpdate:y}=r;this.resolvedAt=Ct.now(),k4(s,m,p,x)||((Ba.instantAnimations||!h)&&y?.(ju(s,r,l)),s[0]=s[s.length-1],Qd(r),r.repeat=0);const w={startTime:d?this.resolvedAt?this.resolvedAt-this.createdAt>L4?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:l,...r,keyframes:s},A=!g&&z4(w)?new N4({...w,element:w.motionValue.owner.current}):new Eu(w);A.finished.then(()=>this.notifyFinished()).catch(Jt),this.pendingTimeline&&(this.stopTimeline=A.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=A}get finished(){return this._animation?this.animation.finished:this._finished}then(s,l){return this.finished.finally(s).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),y4()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(s){this.animation.time=s}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(s){this.animation.speed=s}get startTime(){return this.animation.startTime}attachTimeline(s){return this._animation?this.stopTimeline=this.animation.attachTimeline(s):this.pendingTimeline=s,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}const q4=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function V4(i){const s=q4.exec(i);if(!s)return[,];const[,l,r,d]=s;return[`--${l??r}`,d]}function zx(i,s,l=1){const[r,d]=V4(i);if(!r)return;const m=window.getComputedStyle(s).getPropertyValue(r);if(m){const p=m.trim();return Z0(p)?parseFloat(p):p}return wu(d)?zx(d,s,l+1):d}function Du(i,s){return i?.[s]??i?.default??i}const Lx=new Set(["width","height","top","left","right","bottom",...zs]),H4={test:i=>i==="auto",parse:i=>i},Ox=i=>s=>s.test(i),qx=[Bs,$,da,li,Dw,Nw,H4],Cg=i=>qx.find(Ox(i));function P4(i){return typeof i=="number"?i===0:i!==null?i==="none"||i==="0"||$0(i):!0}const I4=new Set(["brightness","contrast","saturate","opacity"]);function U4(i){const[s,l]=i.slice(0,-1).split("(");if(s==="drop-shadow")return i;const[r]=l.match(Su)||[];if(!r)return i;const d=l.replace(r,"");let m=I4.has(s)?1:0;return r!==l&&(m*=100),s+"("+m+d+")"}const _4=/\b([a-z-]*)\(.*?\)/gu,Fd={...ci,getAnimatableNone:i=>{const s=i.match(_4);return s?s.map(U4).join(" "):i}},Tg={...Bs,transform:Math.round},G4={rotate:li,rotateX:li,rotateY:li,rotateZ:li,scale:br,scaleX:br,scaleY:br,scaleZ:br,skew:li,skewX:li,skewY:li,distance:$,translateX:$,translateY:$,translateZ:$,x:$,y:$,z:$,perspective:$,transformPerspective:$,opacity:Un,originX:mg,originY:mg,originZ:$},ku={borderWidth:$,borderTopWidth:$,borderRightWidth:$,borderBottomWidth:$,borderLeftWidth:$,borderRadius:$,radius:$,borderTopLeftRadius:$,borderTopRightRadius:$,borderBottomRightRadius:$,borderBottomLeftRadius:$,width:$,maxWidth:$,height:$,maxHeight:$,top:$,right:$,bottom:$,left:$,inset:$,insetBlock:$,insetBlockStart:$,insetBlockEnd:$,insetInline:$,insetInlineStart:$,insetInlineEnd:$,padding:$,paddingTop:$,paddingRight:$,paddingBottom:$,paddingLeft:$,paddingBlock:$,paddingBlockStart:$,paddingBlockEnd:$,paddingInline:$,paddingInlineStart:$,paddingInlineEnd:$,margin:$,marginTop:$,marginRight:$,marginBottom:$,marginLeft:$,marginBlock:$,marginBlockStart:$,marginBlockEnd:$,marginInline:$,marginInlineStart:$,marginInlineEnd:$,backgroundPositionX:$,backgroundPositionY:$,...G4,zIndex:Tg,fillOpacity:Un,strokeOpacity:Un,numOctaves:Tg},Y4={...ku,color:et,backgroundColor:et,outlineColor:et,fill:et,stroke:et,borderColor:et,borderTopColor:et,borderRightColor:et,borderBottomColor:et,borderLeftColor:et,filter:Fd,WebkitFilter:Fd},Vx=i=>Y4[i];function Hx(i,s){let l=Vx(i);return l!==Fd&&(l=ci),l.getAnimatableNone?l.getAnimatableNone(s):void 0}const Q4=new Set(["auto","none","0"]);function F4(i,s,l){let r=0,d;for(;r<i.length&&!d;){const m=i[r];typeof m=="string"&&!Q4.has(m)&&_n(m).values.length&&(d=i[r]),r++}if(d&&l)for(const m of s)i[m]=Hx(l,d)}class K4 extends Nu{constructor(s,l,r,d,m){super(s,l,r,d,m,!0)}readKeyframes(){const{unresolvedKeyframes:s,element:l,name:r}=this;if(!l||!l.current)return;super.readKeyframes();for(let h=0;h<s.length;h++){let g=s[h];if(typeof g=="string"&&(g=g.trim(),wu(g))){const y=zx(g,l.current);y!==void 0&&(s[h]=y),h===s.length-1&&(this.finalKeyframe=g)}}if(this.resolveNoneKeyframes(),!Lx.has(r)||s.length!==2)return;const[d,m]=s,p=Cg(d),x=Cg(m);if(p!==x)if(vg(p)&&vg(x))for(let h=0;h<s.length;h++){const g=s[h];typeof g=="string"&&(s[h]=parseFloat(g))}else Bi[r]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:s,name:l}=this,r=[];for(let d=0;d<s.length;d++)(s[d]===null||P4(s[d]))&&r.push(d);r.length&&F4(s,r,l)}measureInitialState(){const{element:s,unresolvedKeyframes:l,name:r}=this;if(!s||!s.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Bi[r](s.measureViewportBox(),window.getComputedStyle(s.current)),l[0]=this.measuredOrigin;const d=l[l.length-1];d!==void 0&&s.getValue(r,d).jump(d,!1)}measureEndState(){const{element:s,name:l,unresolvedKeyframes:r}=this;if(!s||!s.current)return;const d=s.getValue(l);d&&d.jump(this.measuredOrigin,!1);const m=r.length-1,p=r[m];r[m]=Bi[l](s.measureViewportBox(),window.getComputedStyle(s.current)),p!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=p),this.removedTransforms?.length&&this.removedTransforms.forEach(([x,h])=>{s.getValue(x).set(h)}),this.resolveNoneKeyframes()}}function X4(i,s,l){if(i instanceof EventTarget)return[i];if(typeof i=="string"){let r=document;const d=l?.[i]??r.querySelectorAll(i);return d?Array.from(d):[]}return Array.from(i)}const Px=(i,s)=>s&&typeof i=="number"?s.transform(i):i;function W4(i){return J0(i)&&"offsetHeight"in i}const jg=30,Z4=i=>!isNaN(parseFloat(i));class J4{constructor(s,l={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=r=>{const d=Ct.now();if(this.updatedAt!==d&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const m of this.dependents)m.dirty()},this.hasAnimated=!1,this.setCurrent(s),this.owner=l.owner}setCurrent(s){this.current=s,this.updatedAt=Ct.now(),this.canTrackVelocity===null&&s!==void 0&&(this.canTrackVelocity=Z4(this.current))}setPrevFrameValue(s=this.current){this.prevFrameValue=s,this.prevUpdatedAt=this.updatedAt}onChange(s){return this.on("change",s)}on(s,l){this.events[s]||(this.events[s]=new gu);const r=this.events[s].add(l);return s==="change"?()=>{r(),Ie.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const s in this.events)this.events[s].clear()}attach(s,l){this.passiveEffect=s,this.stopPassiveEffect=l}set(s){this.passiveEffect?this.passiveEffect(s,this.updateAndNotify):this.updateAndNotify(s)}setWithVelocity(s,l,r){this.set(l),this.prev=void 0,this.prevFrameValue=s,this.prevUpdatedAt=this.updatedAt-r}jump(s,l=!0){this.updateAndNotify(s),this.prev=s,this.prevUpdatedAt=this.prevFrameValue=void 0,l&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(s){this.dependents||(this.dependents=new Set),this.dependents.add(s)}removeDependent(s){this.dependents&&this.dependents.delete(s)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const s=Ct.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||s-this.updatedAt>jg)return 0;const l=Math.min(this.updatedAt-this.prevUpdatedAt,jg);return ex(parseFloat(this.current)-parseFloat(this.prevFrameValue),l)}start(s){return this.stop(),new Promise(l=>{this.hasAnimated=!0,this.animation=s(l),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Es(i,s){return new J4(i,s)}const{schedule:Ru}=hx(queueMicrotask,!1),ia={x:!1,y:!1};function Ix(){return ia.x||ia.y}function $4(i){return i==="x"||i==="y"?ia[i]?null:(ia[i]=!0,()=>{ia[i]=!1}):ia.x||ia.y?null:(ia.x=ia.y=!0,()=>{ia.x=ia.y=!1})}function Ux(i,s){const l=X4(i),r=new AbortController,d={passive:!0,...s,signal:r.signal};return[l,d,()=>r.abort()]}function Mg(i){return!(i.pointerType==="touch"||Ix())}function e3(i,s,l={}){const[r,d,m]=Ux(i,l),p=x=>{if(!Mg(x))return;const{target:h}=x,g=s(h,x);if(typeof g!="function"||!h)return;const y=b=>{Mg(b)&&(g(b),h.removeEventListener("pointerleave",y))};h.addEventListener("pointerleave",y,d)};return r.forEach(x=>{x.addEventListener("pointerenter",p,d)}),m}const _x=(i,s)=>s?i===s?!0:_x(i,s.parentElement):!1,Bu=i=>i.pointerType==="mouse"?typeof i.button!="number"||i.button<=0:i.isPrimary!==!1,t3=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function a3(i){return t3.has(i.tagName)||i.tabIndex!==-1}const Tr=new WeakSet;function Eg(i){return s=>{s.key==="Enter"&&i(s)}}function wd(i,s){i.dispatchEvent(new PointerEvent("pointer"+s,{isPrimary:!0,bubbles:!0}))}const i3=(i,s)=>{const l=i.currentTarget;if(!l)return;const r=Eg(()=>{if(Tr.has(l))return;wd(l,"down");const d=Eg(()=>{wd(l,"up")}),m=()=>wd(l,"cancel");l.addEventListener("keyup",d,s),l.addEventListener("blur",m,s)});l.addEventListener("keydown",r,s),l.addEventListener("blur",()=>l.removeEventListener("keydown",r),s)};function Ng(i){return Bu(i)&&!Ix()}function s3(i,s,l={}){const[r,d,m]=Ux(i,l),p=x=>{const h=x.currentTarget;if(!Ng(x))return;Tr.add(h);const g=s(h,x),y=(A,E)=>{window.removeEventListener("pointerup",b),window.removeEventListener("pointercancel",w),Tr.has(h)&&Tr.delete(h),Ng(A)&&typeof g=="function"&&g(A,{success:E})},b=A=>{y(A,h===window||h===document||l.useGlobalTarget||_x(h,A.target))},w=A=>{y(A,!1)};window.addEventListener("pointerup",b,d),window.addEventListener("pointercancel",w,d)};return r.forEach(x=>{(l.useGlobalTarget?window:x).addEventListener("pointerdown",p,d),W4(x)&&(x.addEventListener("focus",g=>i3(g,d)),!a3(x)&&!x.hasAttribute("tabindex")&&(x.tabIndex=0))}),m}function Gx(i){return J0(i)&&"ownerSVGElement"in i}function n3(i){return Gx(i)&&i.tagName==="svg"}const pt=i=>!!(i&&i.getVelocity),l3=[...qx,et,ci],r3=i=>l3.find(Ox(i));function Dg(i,s){return s.max===s.min?0:i/(s.max-s.min)*100}const Rn={correct:(i,s)=>{if(!s.target)return i;if(typeof i=="string")if($.test(i))i=parseFloat(i);else return i;const l=Dg(i,s.target.x),r=Dg(i,s.target.y);return`${l}% ${r}%`}},o3={correct:(i,{treeScale:s,projectionDelta:l})=>{const r=i,d=ci.parse(i);if(d.length>5)return r;const m=ci.createTransformer(i),p=typeof d[0]!="number"?1:0,x=l.x.scale*s.x,h=l.y.scale*s.y;d[0+p]/=x,d[1+p]/=h;const g=_e(x,h,.5);return typeof d[2+p]=="number"&&(d[2+p]/=g),typeof d[3+p]=="number"&&(d[3+p]/=g),m(d)}},Kd={borderRadius:{...Rn,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Rn,borderTopRightRadius:Rn,borderBottomLeftRadius:Rn,borderBottomRightRadius:Rn,boxShadow:o3};function Yx(i,{layout:s,layoutId:l}){return Ls.has(i)||i.startsWith("origin")||(s||l!==void 0)&&(!!Kd[i]||i==="opacity")}const c3={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},d3=zs.length;function u3(i,s,l){let r="",d=!0;for(let m=0;m<d3;m++){const p=zs[m],x=i[p];if(x===void 0)continue;let h=!0;if(typeof x=="number"?h=x===(p.startsWith("scale")?1:0):h=parseFloat(x)===0,!h||l){const g=Px(x,ku[p]);if(!h){d=!1;const y=c3[p]||p;r+=`${y}(${g}) `}l&&(s[p]=g)}}return r=r.trim(),l?r=l(s,d?"":r):d&&(r="none"),r}function zu(i,s,l){const{style:r,vars:d,transformOrigin:m}=i;let p=!1,x=!1;for(const h in s){const g=s[h];if(Ls.has(h)){p=!0;continue}else if(xx(h)){d[h]=g;continue}else{const y=Px(g,ku[h]);h.startsWith("origin")?(x=!0,m[h]=y):r[h]=y}}if(s.transform||(p||l?r.transform=u3(s,i.transform,l):r.transform&&(r.transform="none")),x){const{originX:h="50%",originY:g="50%",originZ:y=0}=m;r.transformOrigin=`${h} ${g} ${y}`}}const Lu=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Qx(i,s,l){for(const r in s)!pt(s[r])&&!Yx(r,l)&&(i[r]=s[r])}function m3({transformTemplate:i},s){return j.useMemo(()=>{const l=Lu();return zu(l,s,i),Object.assign({},l.vars,l.style)},[s])}function p3(i,s){const l=i.style||{},r={};return Qx(r,l,i),Object.assign(r,m3(i,s)),r}function f3(i,s){const l={},r=p3(i,s);return i.drag&&i.dragListener!==!1&&(l.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=i.drag===!0?"none":`pan-${i.drag==="x"?"y":"x"}`),i.tabIndex===void 0&&(i.onTap||i.onTapStart||i.whileTap)&&(l.tabIndex=0),l.style=r,l}const h3={offset:"stroke-dashoffset",array:"stroke-dasharray"},g3={offset:"strokeDashoffset",array:"strokeDasharray"};function x3(i,s,l=1,r=0,d=!0){i.pathLength=1;const m=d?h3:g3;i[m.offset]=$.transform(-r);const p=$.transform(s),x=$.transform(l);i[m.array]=`${p} ${x}`}const y3=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function Fx(i,{attrX:s,attrY:l,attrScale:r,pathLength:d,pathSpacing:m=1,pathOffset:p=0,...x},h,g,y){if(zu(i,x,g),h){i.style.viewBox&&(i.attrs.viewBox=i.style.viewBox);return}i.attrs=i.style,i.style={};const{attrs:b,style:w}=i;b.transform&&(w.transform=b.transform,delete b.transform),(w.transform||b.transformOrigin)&&(w.transformOrigin=b.transformOrigin??"50% 50%",delete b.transformOrigin),w.transform&&(w.transformBox=y?.transformBox??"fill-box",delete b.transformBox);for(const A of y3)b[A]!==void 0&&(w[A]=b[A],delete b[A]);s!==void 0&&(b.x=s),l!==void 0&&(b.y=l),r!==void 0&&(b.scale=r),d!==void 0&&x3(b,d,m,p,!1)}const Kx=()=>({...Lu(),attrs:{}}),Xx=i=>typeof i=="string"&&i.toLowerCase()==="svg";function b3(i,s,l,r){const d=j.useMemo(()=>{const m=Kx();return Fx(m,s,Xx(r),i.transformTemplate,i.style),{...m.attrs,style:{...m.style}}},[s]);if(i.style){const m={};Qx(m,i.style,i),d.style={...m,...d.style}}return d}const v3=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Lr(i){return i.startsWith("while")||i.startsWith("drag")&&i!=="draggable"||i.startsWith("layout")||i.startsWith("onTap")||i.startsWith("onPan")||i.startsWith("onLayout")||v3.has(i)}let Wx=i=>!Lr(i);function w3(i){typeof i=="function"&&(Wx=s=>s.startsWith("on")?!Lr(s):i(s))}try{w3(require("@emotion/is-prop-valid").default)}catch{}function S3(i,s,l){const r={};for(const d in i)d==="values"&&typeof i.values=="object"||(Wx(d)||l===!0&&Lr(d)||!s&&!Lr(d)||i.draggable&&d.startsWith("onDrag"))&&(r[d]=i[d]);return r}const A3=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Ou(i){return typeof i!="string"||i.includes("-")?!1:!!(A3.indexOf(i)>-1||/[A-Z]/u.test(i))}function C3(i,s,l,{latestValues:r},d,m=!1,p){const h=(p??Ou(i)?b3:f3)(s,r,d,i),g=S3(s,typeof i=="string",m),y=i!==j.Fragment?{...g,...h,ref:l}:{},{children:b}=s,w=j.useMemo(()=>pt(b)?b.get():b,[b]);return j.createElement(i,{...y,children:w})}const qu=j.createContext(null);function kg(i){const s=[{},{}];return i?.values.forEach((l,r)=>{s[0][r]=l.get(),s[1][r]=l.getVelocity()}),s}function Vu(i,s,l,r){if(typeof s=="function"){const[d,m]=kg(r);s=s(l!==void 0?l:i.custom,d,m)}if(typeof s=="string"&&(s=i.variants&&i.variants[s]),typeof s=="function"){const[d,m]=kg(r);s=s(l!==void 0?l:i.custom,d,m)}return s}function T3(i){const s=j.useRef(null);return s.current===null&&(s.current=i()),s.current}function jr(i){return pt(i)?i.get():i}function j3({scrapeMotionValuesFromProps:i,createRenderState:s},l,r,d){return{latestValues:M3(l,r,d,i),renderState:s()}}function M3(i,s,l,r){const d={},m=r(i,{});for(const w in m)d[w]=jr(m[w]);let{initial:p,animate:x}=i;const h=Ur(i),g=fx(i);s&&g&&!h&&i.inherit!==!1&&(p===void 0&&(p=s.initial),x===void 0&&(x=s.animate));let y=l?l.initial===!1:!1;y=y||p===!1;const b=y?x:p;if(b&&typeof b!="boolean"&&!Ir(b)){const w=Array.isArray(b)?b:[b];for(let A=0;A<w.length;A++){const E=Vu(i,w[A]);if(E){const{transitionEnd:B,transition:q,...z}=E;for(const M in z){let O=z[M];if(Array.isArray(O)){const X=y?O.length-1:0;O=O[X]}O!==null&&(d[M]=O)}for(const M in B)d[M]=B[M]}}}return d}const Zx=i=>(s,l)=>{const r=j.useContext(Pr),d=j.useContext(qu),m=()=>j3(i,s,r,d);return l?m():T3(m)};function Hu(i,s,l){const{style:r}=i,d={};for(const m in r)(pt(r[m])||s.style&&pt(s.style[m])||Yx(m,i)||l?.getValue(m)?.liveStyle!==void 0)&&(d[m]=r[m]);return d}const E3=Zx({scrapeMotionValuesFromProps:Hu,createRenderState:Lu});function Jx(i,s,l){const r=Hu(i,s,l);for(const d in i)if(pt(i[d])||pt(s[d])){const m=zs.indexOf(d)!==-1?"attr"+d.charAt(0).toUpperCase()+d.substring(1):d;r[m]=i[d]}return r}const N3=Zx({scrapeMotionValuesFromProps:Jx,createRenderState:Kx}),Pu=typeof window<"u",Rg={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Ns={};for(const i in Rg)Ns[i]={isEnabled:s=>Rg[i].some(l=>!!s[l])};function D3(i){for(const s in i)Ns[s]={...Ns[s],...i[s]}}const k3=Symbol.for("motionComponentSymbol");function As(i){return i&&typeof i=="object"&&Object.prototype.hasOwnProperty.call(i,"current")}function Bg(i,s){if(typeof i=="function")return i(s);As(i)&&(i.current=s)}function R3(i,s,l){const r=j.useRef(null);return j.useCallback(d=>{if(d&&i.onMount&&i.onMount(d),s&&(d?s.mount(d):s.unmount()),l)if(d){const m=Bg(l,d);typeof m=="function"&&(r.current=m)}else r.current?(r.current(),r.current=null):Bg(l,d)},[s,i,l])}const Iu=i=>i.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),B3="framerAppearId",$x="data-"+Iu(B3),ey=j.createContext({}),z3=Pu?j.useLayoutEffect:j.useEffect;function L3(i,s,l,r,d,m){const{visualElement:p}=j.useContext(Pr),x=j.useContext(mx),h=j.useContext(qu),g=j.useContext(px).reducedMotion,y=j.useRef(null);r=r||x.renderer,!y.current&&r&&(y.current=r(i,{visualState:s,parent:p,props:l,presenceContext:h,blockInitialAnimation:h?h.initial===!1:!1,reducedMotionConfig:g,isSVG:m}));const b=y.current,w=j.useContext(ey);b&&!b.projection&&d&&(b.type==="html"||b.type==="svg")&&O3(y.current,l,d,w);const A=j.useRef(!1);j.useInsertionEffect(()=>{b&&A.current&&b.update(l,h)});const E=l[$x],B=j.useRef(!!E&&!window.MotionHandoffIsComplete?.(E)&&window.MotionHasOptimisedAnimation?.(E));return z3(()=>{b&&(A.current=!0,window.MotionIsMounted=!0,b.updateFeatures(),b.scheduleRenderMicrotask(),B.current&&b.animationState&&b.animationState.animateChanges())}),j.useEffect(()=>{b&&(!B.current&&b.animationState&&b.animationState.animateChanges(),B.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(E)}),B.current=!1),b.enteringChildren=void 0)}),b}function O3(i,s,l,r){const{layoutId:d,layout:m,drag:p,dragConstraints:x,layoutScroll:h,layoutRoot:g,layoutCrossfade:y}=s;i.projection=new l(i.latestValues,s["data-framer-portal-id"]?void 0:ty(i.parent)),i.projection.setOptions({layoutId:d,layout:m,alwaysMeasureLayout:!!p||x&&As(x),visualElement:i,animationType:typeof m=="string"?m:"both",initialPromotionConfig:r,crossfade:y,layoutScroll:h,layoutRoot:g})}function ty(i){if(i)return i.options.allowProjection!==!1?i.projection:ty(i.parent)}function Sd(i,{forwardMotionProps:s=!1,type:l}={},r,d){r&&D3(r);const m=l?l==="svg":Ou(i),p=m?N3:E3;function x(g,y){let b;const w={...j.useContext(px),...g,layoutId:q3(g)},{isStatic:A}=w,E=bw(g),B=p(g,A);if(!A&&Pu){V3();const q=H3(w);b=q.MeasureLayout,E.visualElement=L3(i,B,w,d,q.ProjectionNode,m)}return u.jsxs(Pr.Provider,{value:E,children:[b&&E.visualElement?u.jsx(b,{visualElement:E.visualElement,...w}):null,C3(i,g,R3(B,E.visualElement,y),B,A,s,m)]})}x.displayName=`motion.${typeof i=="string"?i:`create(${i.displayName??i.name??""})`}`;const h=j.forwardRef(x);return h[k3]=i,h}function q3({layoutId:i}){const s=j.useContext(ux).id;return s&&i!==void 0?s+"-"+i:i}function V3(i,s){j.useContext(mx).strict}function H3(i){const{drag:s,layout:l}=Ns;if(!s&&!l)return{};const r={...s,...l};return{MeasureLayout:s?.isEnabled(i)||l?.isEnabled(i)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function ay({top:i,left:s,right:l,bottom:r}){return{x:{min:s,max:l},y:{min:i,max:r}}}function P3({x:i,y:s}){return{top:s.min,right:i.max,bottom:s.max,left:i.min}}function I3(i,s){if(!s)return i;const l=s({x:i.left,y:i.top}),r=s({x:i.right,y:i.bottom});return{top:l.y,left:l.x,bottom:r.y,right:r.x}}function Ad(i){return i===void 0||i===1}function Xd({scale:i,scaleX:s,scaleY:l}){return!Ad(i)||!Ad(s)||!Ad(l)}function Di(i){return Xd(i)||iy(i)||i.z||i.rotate||i.rotateX||i.rotateY||i.skewX||i.skewY}function iy(i){return zg(i.x)||zg(i.y)}function zg(i){return i&&i!=="0%"}function Or(i,s,l){const r=i-l,d=s*r;return l+d}function Lg(i,s,l,r,d){return d!==void 0&&(i=Or(i,d,r)),Or(i,l,r)+s}function Wd(i,s=0,l=1,r,d){i.min=Lg(i.min,s,l,r,d),i.max=Lg(i.max,s,l,r,d)}function sy(i,{x:s,y:l}){Wd(i.x,s.translate,s.scale,s.originPoint),Wd(i.y,l.translate,l.scale,l.originPoint)}const Og=.999999999999,qg=1.0000000000001;function U3(i,s,l,r=!1){const d=l.length;if(!d)return;s.x=s.y=1;let m,p;for(let x=0;x<d;x++){m=l[x],p=m.projectionDelta;const{visualElement:h}=m.options;h&&h.props.style&&h.props.style.display==="contents"||(r&&m.options.layoutScroll&&m.scroll&&m!==m.root&&Ts(i,{x:-m.scroll.offset.x,y:-m.scroll.offset.y}),p&&(s.x*=p.x.scale,s.y*=p.y.scale,sy(i,p)),r&&Di(m.latestValues)&&Ts(i,m.latestValues))}s.x<qg&&s.x>Og&&(s.x=1),s.y<qg&&s.y>Og&&(s.y=1)}function Cs(i,s){i.min=i.min+s,i.max=i.max+s}function Vg(i,s,l,r,d=.5){const m=_e(i.min,i.max,d);Wd(i,s,l,m,r)}function Ts(i,s){Vg(i.x,s.x,s.scaleX,s.scale,s.originX),Vg(i.y,s.y,s.scaleY,s.scale,s.originY)}function ny(i,s){return ay(I3(i.getBoundingClientRect(),s))}function _3(i,s,l){const r=ny(i,l),{scroll:d}=s;return d&&(Cs(r.x,d.offset.x),Cs(r.y,d.offset.y)),r}const Hg=()=>({translate:0,scale:1,origin:0,originPoint:0}),js=()=>({x:Hg(),y:Hg()}),Pg=()=>({min:0,max:0}),at=()=>({x:Pg(),y:Pg()}),Zd={current:null},ly={current:!1};function G3(){if(ly.current=!0,!!Pu)if(window.matchMedia){const i=window.matchMedia("(prefers-reduced-motion)"),s=()=>Zd.current=i.matches;i.addEventListener("change",s),s()}else Zd.current=!1}const Y3=new WeakMap;function Q3(i,s,l){for(const r in s){const d=s[r],m=l[r];if(pt(d))i.addValue(r,d);else if(pt(m))i.addValue(r,Es(d,{owner:i}));else if(m!==d)if(i.hasValue(r)){const p=i.getValue(r);p.liveStyle===!0?p.jump(d):p.hasAnimated||p.set(d)}else{const p=i.getStaticValue(r);i.addValue(r,Es(p!==void 0?p:d,{owner:i}))}}for(const r in l)s[r]===void 0&&i.removeValue(r);return s}const Ig=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class F3{scrapeMotionValuesFromProps(s,l,r){return{}}constructor({parent:s,props:l,presenceContext:r,reducedMotionConfig:d,blockInitialAnimation:m,visualState:p},x={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Nu,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const w=Ct.now();this.renderScheduledAt<w&&(this.renderScheduledAt=w,Ie.render(this.render,!1,!0))};const{latestValues:h,renderState:g}=p;this.latestValues=h,this.baseTarget={...h},this.initialValues=l.initial?{...h}:{},this.renderState=g,this.parent=s,this.props=l,this.presenceContext=r,this.depth=s?s.depth+1:0,this.reducedMotionConfig=d,this.options=x,this.blockInitialAnimation=!!m,this.isControllingVariants=Ur(l),this.isVariantNode=fx(l),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(s&&s.current);const{willChange:y,...b}=this.scrapeMotionValuesFromProps(l,{},this);for(const w in b){const A=b[w];h[w]!==void 0&&pt(A)&&A.set(h[w])}}mount(s){this.current=s,Y3.set(s,this),this.projection&&!this.projection.instance&&this.projection.mount(s),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((l,r)=>this.bindToMotionValue(r,l)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(ly.current||G3(),this.shouldReduceMotion=Zd.current),this.parent?.addChild(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),oi(this.notifyUpdate),oi(this.render),this.valueSubscriptions.forEach(s=>s()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(const s in this.events)this.events[s].clear();for(const s in this.features){const l=this.features[s];l&&(l.unmount(),l.isMounted=!1)}this.current=null}addChild(s){this.children.add(s),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(s)}removeChild(s){this.children.delete(s),this.enteringChildren&&this.enteringChildren.delete(s)}bindToMotionValue(s,l){this.valueSubscriptions.has(s)&&this.valueSubscriptions.get(s)();const r=Ls.has(s);r&&this.onBindTransform&&this.onBindTransform();const d=l.on("change",p=>{this.latestValues[s]=p,this.props.onUpdate&&Ie.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let m;window.MotionCheckAppearSync&&(m=window.MotionCheckAppearSync(this,s,l)),this.valueSubscriptions.set(s,()=>{d(),m&&m(),l.owner&&l.stop()})}sortNodePosition(s){return!this.current||!this.sortInstanceNodePosition||this.type!==s.type?0:this.sortInstanceNodePosition(this.current,s.current)}updateFeatures(){let s="animation";for(s in Ns){const l=Ns[s];if(!l)continue;const{isEnabled:r,Feature:d}=l;if(!this.features[s]&&d&&r(this.props)&&(this.features[s]=new d(this)),this.features[s]){const m=this.features[s];m.isMounted?m.update():(m.mount(),m.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):at()}getStaticValue(s){return this.latestValues[s]}setStaticValue(s,l){this.latestValues[s]=l}update(s,l){(s.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=s,this.prevPresenceContext=this.presenceContext,this.presenceContext=l;for(let r=0;r<Ig.length;r++){const d=Ig[r];this.propEventSubscriptions[d]&&(this.propEventSubscriptions[d](),delete this.propEventSubscriptions[d]);const m="on"+d,p=s[m];p&&(this.propEventSubscriptions[d]=this.on(d,p))}this.prevMotionValues=Q3(this,this.scrapeMotionValuesFromProps(s,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(s){return this.props.variants?this.props.variants[s]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(s){const l=this.getClosestVariantNode();if(l)return l.variantChildren&&l.variantChildren.add(s),()=>l.variantChildren.delete(s)}addValue(s,l){const r=this.values.get(s);l!==r&&(r&&this.removeValue(s),this.bindToMotionValue(s,l),this.values.set(s,l),this.latestValues[s]=l.get())}removeValue(s){this.values.delete(s);const l=this.valueSubscriptions.get(s);l&&(l(),this.valueSubscriptions.delete(s)),delete this.latestValues[s],this.removeValueFromRenderState(s,this.renderState)}hasValue(s){return this.values.has(s)}getValue(s,l){if(this.props.values&&this.props.values[s])return this.props.values[s];let r=this.values.get(s);return r===void 0&&l!==void 0&&(r=Es(l===null?void 0:l,{owner:this}),this.addValue(s,r)),r}readValue(s,l){let r=this.latestValues[s]!==void 0||!this.current?this.latestValues[s]:this.getBaseTargetFromProps(this.props,s)??this.readValueFromInstance(this.current,s,this.options);return r!=null&&(typeof r=="string"&&(Z0(r)||$0(r))?r=parseFloat(r):!r3(r)&&ci.test(l)&&(r=Hx(s,l)),this.setBaseTarget(s,pt(r)?r.get():r)),pt(r)?r.get():r}setBaseTarget(s,l){this.baseTarget[s]=l}getBaseTarget(s){const{initial:l}=this.props;let r;if(typeof l=="string"||typeof l=="object"){const m=Vu(this.props,l,this.presenceContext?.custom);m&&(r=m[s])}if(l&&r!==void 0)return r;const d=this.getBaseTargetFromProps(this.props,s);return d!==void 0&&!pt(d)?d:this.initialValues[s]!==void 0&&r===void 0?void 0:this.baseTarget[s]}on(s,l){return this.events[s]||(this.events[s]=new gu),this.events[s].add(l)}notify(s,...l){this.events[s]&&this.events[s].notify(...l)}scheduleRenderMicrotask(){Ru.render(this.render)}}class ry extends F3{constructor(){super(...arguments),this.KeyframeResolver=K4}sortInstanceNodePosition(s,l){return s.compareDocumentPosition(l)&2?1:-1}getBaseTargetFromProps(s,l){return s.style?s.style[l]:void 0}removeValueFromRenderState(s,{vars:l,style:r}){delete l[s],delete r[s]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:s}=this.props;pt(s)&&(this.childSubscription=s.on("change",l=>{this.current&&(this.current.textContent=`${l}`)}))}}function oy(i,{style:s,vars:l},r,d){const m=i.style;let p;for(p in s)m[p]=s[p];d?.applyProjectionStyles(m,r);for(p in l)m.setProperty(p,l[p])}function K3(i){return window.getComputedStyle(i)}class X3 extends ry{constructor(){super(...arguments),this.type="html",this.renderInstance=oy}readValueFromInstance(s,l){if(Ls.has(l))return this.projection?.isProjecting?Id(l):p4(s,l);{const r=K3(s),d=(xx(l)?r.getPropertyValue(l):r[l])||0;return typeof d=="string"?d.trim():d}}measureInstanceViewportBox(s,{transformPagePoint:l}){return ny(s,l)}build(s,l,r){zu(s,l,r.transformTemplate)}scrapeMotionValuesFromProps(s,l,r){return Hu(s,l,r)}}const cy=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function W3(i,s,l,r){oy(i,s,void 0,r);for(const d in s.attrs)i.setAttribute(cy.has(d)?d:Iu(d),s.attrs[d])}class Z3 extends ry{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=at}getBaseTargetFromProps(s,l){return s[l]}readValueFromInstance(s,l){if(Ls.has(l)){const r=Vx(l);return r&&r.default||0}return l=cy.has(l)?l:Iu(l),s.getAttribute(l)}scrapeMotionValuesFromProps(s,l,r){return Jx(s,l,r)}build(s,l,r){Fx(s,l,this.isSVGTag,r.transformTemplate,r.style)}renderInstance(s,l,r,d){W3(s,l,r,d)}mount(s){this.isSVGTag=Xx(s.tagName),super.mount(s)}}const J3=(i,s)=>s.isSVG??Ou(i)?new Z3(s):new X3(s,{allowProjection:i!==j.Fragment});function Ms(i,s,l){const r=i.getProps();return Vu(r,s,l!==void 0?l:r.custom,i)}const Jd=i=>Array.isArray(i);function $3(i,s,l){i.hasValue(s)?i.getValue(s).set(l):i.addValue(s,Es(l))}function e6(i){return Jd(i)?i[i.length-1]||0:i}function t6(i,s){const l=Ms(i,s);let{transitionEnd:r={},transition:d={},...m}=l||{};m={...m,...r};for(const p in m){const x=e6(m[p]);$3(i,p,x)}}function a6(i){return!!(pt(i)&&i.add)}function $d(i,s){const l=i.getValue("willChange");if(a6(l))return l.add(s);if(!l&&Ba.WillChange){const r=new Ba.WillChange("auto");i.addValue("willChange",r),r.add(s)}}function dy(i){return i.props[$x]}const i6=i=>i!==null;function s6(i,{repeat:s,repeatType:l="loop"},r){const d=i.filter(i6),m=s&&l!=="loop"&&s%2===1?0:d.length-1;return d[m]}const n6={type:"spring",stiffness:500,damping:25,restSpeed:10},l6=i=>({type:"spring",stiffness:550,damping:i===0?2*Math.sqrt(550):30,restSpeed:10}),r6={type:"keyframes",duration:.8},o6={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},c6=(i,{keyframes:s})=>s.length>2?r6:Ls.has(i)?i.startsWith("scale")?l6(s[1]):n6:o6;function d6({when:i,delay:s,delayChildren:l,staggerChildren:r,staggerDirection:d,repeat:m,repeatType:p,repeatDelay:x,from:h,elapsed:g,...y}){return!!Object.keys(y).length}const Uu=(i,s,l,r={},d,m)=>p=>{const x=Du(r,i)||{},h=x.delay||r.delay||0;let{elapsed:g=0}=r;g=g-ca(h);const y={keyframes:Array.isArray(l)?l:[null,l],ease:"easeOut",velocity:s.getVelocity(),...x,delay:-g,onUpdate:w=>{s.set(w),x.onUpdate&&x.onUpdate(w)},onComplete:()=>{p(),x.onComplete&&x.onComplete()},name:i,motionValue:s,element:m?void 0:d};d6(x)||Object.assign(y,c6(i,y)),y.duration&&(y.duration=ca(y.duration)),y.repeatDelay&&(y.repeatDelay=ca(y.repeatDelay)),y.from!==void 0&&(y.keyframes[0]=y.from);let b=!1;if((y.type===!1||y.duration===0&&!y.repeatDelay)&&(Qd(y),y.delay===0&&(b=!0)),(Ba.instantAnimations||Ba.skipAnimations)&&(b=!0,Qd(y),y.delay=0),y.allowFlatten=!x.type&&!x.ease,b&&!m&&s.get()!==void 0){const w=s6(y.keyframes,x);if(w!==void 0){Ie.update(()=>{y.onUpdate(w),y.onComplete()});return}}return x.isSync?new Eu(y):new O4(y)};function u6({protectedKeys:i,needsAnimating:s},l){const r=i.hasOwnProperty(l)&&s[l]!==!0;return s[l]=!1,r}function uy(i,s,{delay:l=0,transitionOverride:r,type:d}={}){let{transition:m=i.getDefaultTransition(),transitionEnd:p,...x}=s;r&&(m=r);const h=[],g=d&&i.animationState&&i.animationState.getState()[d];for(const y in x){const b=i.getValue(y,i.latestValues[y]??null),w=x[y];if(w===void 0||g&&u6(g,y))continue;const A={delay:l,...Du(m||{},y)},E=b.get();if(E!==void 0&&!b.isAnimating&&!Array.isArray(w)&&w===E&&!A.velocity)continue;let B=!1;if(window.MotionHandoffAnimation){const z=dy(i);if(z){const M=window.MotionHandoffAnimation(z,y,Ie);M!==null&&(A.startTime=M,B=!0)}}$d(i,y),b.start(Uu(y,b,w,i.shouldReduceMotion&&Lx.has(y)?{type:!1}:A,i,B));const q=b.animation;q&&h.push(q)}return p&&Promise.all(h).then(()=>{Ie.update(()=>{p&&t6(i,p)})}),h}function my(i,s,l,r=0,d=1){const m=Array.from(i).sort((g,y)=>g.sortNodePosition(y)).indexOf(s),p=i.size,x=(p-1)*r;return typeof l=="function"?l(m,p):d===1?m*r:x-m*r}function eu(i,s,l={}){const r=Ms(i,s,l.type==="exit"?i.presenceContext?.custom:void 0);let{transition:d=i.getDefaultTransition()||{}}=r||{};l.transitionOverride&&(d=l.transitionOverride);const m=r?()=>Promise.all(uy(i,r,l)):()=>Promise.resolve(),p=i.variantChildren&&i.variantChildren.size?(h=0)=>{const{delayChildren:g=0,staggerChildren:y,staggerDirection:b}=d;return m6(i,s,h,g,y,b,l)}:()=>Promise.resolve(),{when:x}=d;if(x){const[h,g]=x==="beforeChildren"?[m,p]:[p,m];return h().then(()=>g())}else return Promise.all([m(),p(l.delay)])}function m6(i,s,l=0,r=0,d=0,m=1,p){const x=[];for(const h of i.variantChildren)h.notify("AnimationStart",s),x.push(eu(h,s,{...p,delay:l+(typeof r=="function"?0:r)+my(i.variantChildren,h,r,d,m)}).then(()=>h.notify("AnimationComplete",s)));return Promise.all(x)}function p6(i,s,l={}){i.notify("AnimationStart",s);let r;if(Array.isArray(s)){const d=s.map(m=>eu(i,m,l));r=Promise.all(d)}else if(typeof s=="string")r=eu(i,s,l);else{const d=typeof s=="function"?Ms(i,s,l.custom):s;r=Promise.all(uy(i,d,l))}return r.then(()=>{i.notify("AnimationComplete",s)})}function py(i,s){if(!Array.isArray(s))return!1;const l=s.length;if(l!==i.length)return!1;for(let r=0;r<l;r++)if(s[r]!==i[r])return!1;return!0}const f6=vu.length;function fy(i){if(!i)return;if(!i.isControllingVariants){const l=i.parent?fy(i.parent)||{}:{};return i.props.initial!==void 0&&(l.initial=i.props.initial),l}const s={};for(let l=0;l<f6;l++){const r=vu[l],d=i.props[r];(In(d)||d===!1)&&(s[r]=d)}return s}const h6=[...bu].reverse(),g6=bu.length;function x6(i){return s=>Promise.all(s.map(({animation:l,options:r})=>p6(i,l,r)))}function y6(i){let s=x6(i),l=Ug(),r=!0;const d=h=>(g,y)=>{const b=Ms(i,y,h==="exit"?i.presenceContext?.custom:void 0);if(b){const{transition:w,transitionEnd:A,...E}=b;g={...g,...E,...A}}return g};function m(h){s=h(i)}function p(h){const{props:g}=i,y=fy(i.parent)||{},b=[],w=new Set;let A={},E=1/0;for(let q=0;q<g6;q++){const z=h6[q],M=l[z],O=g[z]!==void 0?g[z]:y[z],X=In(O),P=z===h?M.isActive:null;P===!1&&(E=q);let Y=O===y[z]&&O!==g[z]&&X;if(Y&&r&&i.manuallyAnimateOnMount&&(Y=!1),M.protectedKeys={...A},!M.isActive&&P===null||!O&&!M.prevProp||Ir(O)||typeof O=="boolean")continue;const W=b6(M.prevProp,O);let Q=W||z===h&&M.isActive&&!Y&&X||q>E&&X,ce=!1;const Te=Array.isArray(O)?O:[O];let ee=Te.reduce(d(z),{});P===!1&&(ee={});const{prevResolvedValues:K={}}=M,fe={...K,...ee},ie=G=>{Q=!0,w.has(G)&&(ce=!0,w.delete(G)),M.needsAnimating[G]=!0;const J=i.getValue(G);J&&(J.liveStyle=!1)};for(const G in fe){const J=ee[G],de=K[G];if(A.hasOwnProperty(G))continue;let he=!1;Jd(J)&&Jd(de)?he=!py(J,de):he=J!==de,he?J!=null?ie(G):w.add(G):J!==void 0&&w.has(G)?ie(G):M.protectedKeys[G]=!0}M.prevProp=O,M.prevResolvedValues=ee,M.isActive&&(A={...A,...ee}),r&&i.blockInitialAnimation&&(Q=!1);const Ee=Y&&W;Q&&(!Ee||ce)&&b.push(...Te.map(G=>{const J={type:z};if(typeof G=="string"&&r&&!Ee&&i.manuallyAnimateOnMount&&i.parent){const{parent:de}=i,he=Ms(de,G);if(de.enteringChildren&&he){const{delayChildren:T}=he.transition||{};J.delay=my(de.enteringChildren,i,T)}}return{animation:G,options:J}}))}if(w.size){const q={};if(typeof g.initial!="boolean"){const z=Ms(i,Array.isArray(g.initial)?g.initial[0]:g.initial);z&&z.transition&&(q.transition=z.transition)}w.forEach(z=>{const M=i.getBaseTarget(z),O=i.getValue(z);O&&(O.liveStyle=!0),q[z]=M??null}),b.push({animation:q})}let B=!!b.length;return r&&(g.initial===!1||g.initial===g.animate)&&!i.manuallyAnimateOnMount&&(B=!1),r=!1,B?s(b):Promise.resolve()}function x(h,g){if(l[h].isActive===g)return Promise.resolve();i.variantChildren?.forEach(b=>b.animationState?.setActive(h,g)),l[h].isActive=g;const y=p(h);for(const b in l)l[b].protectedKeys={};return y}return{animateChanges:p,setActive:x,setAnimateFunction:m,getState:()=>l,reset:()=>{l=Ug()}}}function b6(i,s){return typeof s=="string"?s!==i:Array.isArray(s)?!py(s,i):!1}function Ni(i=!1){return{isActive:i,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Ug(){return{animate:Ni(!0),whileInView:Ni(),whileHover:Ni(),whileTap:Ni(),whileDrag:Ni(),whileFocus:Ni(),exit:Ni()}}class di{constructor(s){this.isMounted=!1,this.node=s}update(){}}class v6 extends di{constructor(s){super(s),s.animationState||(s.animationState=y6(s))}updateAnimationControlsSubscription(){const{animate:s}=this.node.getProps();Ir(s)&&(this.unmountControls=s.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:s}=this.node.getProps(),{animate:l}=this.node.prevProps||{};s!==l&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}let w6=0;class S6 extends di{constructor(){super(...arguments),this.id=w6++}update(){if(!this.node.presenceContext)return;const{isPresent:s,onExitComplete:l}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||s===r)return;const d=this.node.animationState.setActive("exit",!s);l&&!s&&d.then(()=>{l(this.id)})}mount(){const{register:s,onExitComplete:l}=this.node.presenceContext||{};l&&l(this.id),s&&(this.unmount=s(this.id))}unmount(){}}const A6={animation:{Feature:v6},exit:{Feature:S6}};function Gn(i,s,l,r={passive:!0}){return i.addEventListener(s,l,r),()=>i.removeEventListener(s,l)}function Jn(i){return{point:{x:i.pageX,y:i.pageY}}}const C6=i=>s=>Bu(s)&&i(s,Jn(s));function On(i,s,l,r){return Gn(i,s,C6(l),r)}const hy=1e-4,T6=1-hy,j6=1+hy,gy=.01,M6=0-gy,E6=0+gy;function ht(i){return i.max-i.min}function N6(i,s,l){return Math.abs(i-s)<=l}function _g(i,s,l,r=.5){i.origin=r,i.originPoint=_e(s.min,s.max,i.origin),i.scale=ht(l)/ht(s),i.translate=_e(l.min,l.max,i.origin)-i.originPoint,(i.scale>=T6&&i.scale<=j6||isNaN(i.scale))&&(i.scale=1),(i.translate>=M6&&i.translate<=E6||isNaN(i.translate))&&(i.translate=0)}function qn(i,s,l,r){_g(i.x,s.x,l.x,r?r.originX:void 0),_g(i.y,s.y,l.y,r?r.originY:void 0)}function Gg(i,s,l){i.min=l.min+s.min,i.max=i.min+ht(s)}function D6(i,s,l){Gg(i.x,s.x,l.x),Gg(i.y,s.y,l.y)}function Yg(i,s,l){i.min=s.min-l.min,i.max=i.min+ht(s)}function qr(i,s,l){Yg(i.x,s.x,l.x),Yg(i.y,s.y,l.y)}function Wt(i){return[i("x"),i("y")]}const xy=({current:i})=>i?i.ownerDocument.defaultView:null,Qg=(i,s)=>Math.abs(i-s);function k6(i,s){const l=Qg(i.x,s.x),r=Qg(i.y,s.y);return Math.sqrt(l**2+r**2)}class yy{constructor(s,l,{transformPagePoint:r,contextWindow:d=window,dragSnapToOrigin:m=!1,distanceThreshold:p=3}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const w=Td(this.lastMoveEventInfo,this.history),A=this.startEvent!==null,E=k6(w.offset,{x:0,y:0})>=this.distanceThreshold;if(!A&&!E)return;const{point:B}=w,{timestamp:q}=ut;this.history.push({...B,timestamp:q});const{onStart:z,onMove:M}=this.handlers;A||(z&&z(this.lastMoveEvent,w),this.startEvent=this.lastMoveEvent),M&&M(this.lastMoveEvent,w)},this.handlePointerMove=(w,A)=>{this.lastMoveEvent=w,this.lastMoveEventInfo=Cd(A,this.transformPagePoint),Ie.update(this.updatePoint,!0)},this.handlePointerUp=(w,A)=>{this.end();const{onEnd:E,onSessionEnd:B,resumeAnimation:q}=this.handlers;if(this.dragSnapToOrigin&&q&&q(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const z=Td(w.type==="pointercancel"?this.lastMoveEventInfo:Cd(A,this.transformPagePoint),this.history);this.startEvent&&E&&E(w,z),B&&B(w,z)},!Bu(s))return;this.dragSnapToOrigin=m,this.handlers=l,this.transformPagePoint=r,this.distanceThreshold=p,this.contextWindow=d||window;const x=Jn(s),h=Cd(x,this.transformPagePoint),{point:g}=h,{timestamp:y}=ut;this.history=[{...g,timestamp:y}];const{onSessionStart:b}=l;b&&b(s,Td(h,this.history)),this.removeListeners=Xn(On(this.contextWindow,"pointermove",this.handlePointerMove),On(this.contextWindow,"pointerup",this.handlePointerUp),On(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(s){this.handlers=s}end(){this.removeListeners&&this.removeListeners(),oi(this.updatePoint)}}function Cd(i,s){return s?{point:s(i.point)}:i}function Fg(i,s){return{x:i.x-s.x,y:i.y-s.y}}function Td({point:i},s){return{point:i,delta:Fg(i,by(s)),offset:Fg(i,R6(s)),velocity:B6(s,.1)}}function R6(i){return i[0]}function by(i){return i[i.length-1]}function B6(i,s){if(i.length<2)return{x:0,y:0};let l=i.length-1,r=null;const d=by(i);for(;l>=0&&(r=i[l],!(d.timestamp-r.timestamp>ca(s)));)l--;if(!r)return{x:0,y:0};const m=Zt(d.timestamp-r.timestamp);if(m===0)return{x:0,y:0};const p={x:(d.x-r.x)/m,y:(d.y-r.y)/m};return p.x===1/0&&(p.x=0),p.y===1/0&&(p.y=0),p}function z6(i,{min:s,max:l},r){return s!==void 0&&i<s?i=r?_e(s,i,r.min):Math.max(i,s):l!==void 0&&i>l&&(i=r?_e(l,i,r.max):Math.min(i,l)),i}function Kg(i,s,l){return{min:s!==void 0?i.min+s:void 0,max:l!==void 0?i.max+l-(i.max-i.min):void 0}}function L6(i,{top:s,left:l,bottom:r,right:d}){return{x:Kg(i.x,l,d),y:Kg(i.y,s,r)}}function Xg(i,s){let l=s.min-i.min,r=s.max-i.max;return s.max-s.min<i.max-i.min&&([l,r]=[r,l]),{min:l,max:r}}function O6(i,s){return{x:Xg(i.x,s.x),y:Xg(i.y,s.y)}}function q6(i,s){let l=.5;const r=ht(i),d=ht(s);return d>r?l=Pn(s.min,s.max-r,i.min):r>d&&(l=Pn(i.min,i.max-d,s.min)),Ra(0,1,l)}function V6(i,s){const l={};return s.min!==void 0&&(l.min=s.min-i.min),s.max!==void 0&&(l.max=s.max-i.min),l}const tu=.35;function H6(i=tu){return i===!1?i=0:i===!0&&(i=tu),{x:Wg(i,"left","right"),y:Wg(i,"top","bottom")}}function Wg(i,s,l){return{min:Zg(i,s),max:Zg(i,l)}}function Zg(i,s){return typeof i=="number"?i:i[s]||0}const P6=new WeakMap;class I6{constructor(s){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=at(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=s}start(s,{snapToCursor:l=!1,distanceThreshold:r}={}){const{presenceContext:d}=this.visualElement;if(d&&d.isPresent===!1)return;const m=b=>{const{dragSnapToOrigin:w}=this.getProps();w?this.pauseAnimation():this.stopAnimation(),l&&this.snapToCursor(Jn(b).point)},p=(b,w)=>{const{drag:A,dragPropagation:E,onDragStart:B}=this.getProps();if(A&&!E&&(this.openDragLock&&this.openDragLock(),this.openDragLock=$4(A),!this.openDragLock))return;this.latestPointerEvent=b,this.latestPanInfo=w,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Wt(z=>{let M=this.getAxisMotionValue(z).get()||0;if(da.test(M)){const{projection:O}=this.visualElement;if(O&&O.layout){const X=O.layout.layoutBox[z];X&&(M=ht(X)*(parseFloat(M)/100))}}this.originPoint[z]=M}),B&&Ie.postRender(()=>B(b,w)),$d(this.visualElement,"transform");const{animationState:q}=this.visualElement;q&&q.setActive("whileDrag",!0)},x=(b,w)=>{this.latestPointerEvent=b,this.latestPanInfo=w;const{dragPropagation:A,dragDirectionLock:E,onDirectionLock:B,onDrag:q}=this.getProps();if(!A&&!this.openDragLock)return;const{offset:z}=w;if(E&&this.currentDirection===null){this.currentDirection=U6(z),this.currentDirection!==null&&B&&B(this.currentDirection);return}this.updateAxis("x",w.point,z),this.updateAxis("y",w.point,z),this.visualElement.render(),q&&q(b,w)},h=(b,w)=>{this.latestPointerEvent=b,this.latestPanInfo=w,this.stop(b,w),this.latestPointerEvent=null,this.latestPanInfo=null},g=()=>Wt(b=>this.getAnimationState(b)==="paused"&&this.getAxisMotionValue(b).animation?.play()),{dragSnapToOrigin:y}=this.getProps();this.panSession=new yy(s,{onSessionStart:m,onStart:p,onMove:x,onSessionEnd:h,resumeAnimation:g},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:y,distanceThreshold:r,contextWindow:xy(this.visualElement)})}stop(s,l){const r=s||this.latestPointerEvent,d=l||this.latestPanInfo,m=this.isDragging;if(this.cancel(),!m||!d||!r)return;const{velocity:p}=d;this.startAnimation(p);const{onDragEnd:x}=this.getProps();x&&Ie.postRender(()=>x(r,d))}cancel(){this.isDragging=!1;const{projection:s,animationState:l}=this.visualElement;s&&(s.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),l&&l.setActive("whileDrag",!1)}updateAxis(s,l,r){const{drag:d}=this.getProps();if(!r||!vr(s,d,this.currentDirection))return;const m=this.getAxisMotionValue(s);let p=this.originPoint[s]+r[s];this.constraints&&this.constraints[s]&&(p=z6(p,this.constraints[s],this.elastic[s])),m.set(p)}resolveConstraints(){const{dragConstraints:s,dragElastic:l}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,d=this.constraints;s&&As(s)?this.constraints||(this.constraints=this.resolveRefConstraints()):s&&r?this.constraints=L6(r.layoutBox,s):this.constraints=!1,this.elastic=H6(l),d!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&Wt(m=>{this.constraints!==!1&&this.getAxisMotionValue(m)&&(this.constraints[m]=V6(r.layoutBox[m],this.constraints[m]))})}resolveRefConstraints(){const{dragConstraints:s,onMeasureDragConstraints:l}=this.getProps();if(!s||!As(s))return!1;const r=s.current,{projection:d}=this.visualElement;if(!d||!d.layout)return!1;const m=_3(r,d.root,this.visualElement.getTransformPagePoint());let p=O6(d.layout.layoutBox,m);if(l){const x=l(P3(p));this.hasMutatedConstraints=!!x,x&&(p=ay(x))}return p}startAnimation(s){const{drag:l,dragMomentum:r,dragElastic:d,dragTransition:m,dragSnapToOrigin:p,onDragTransitionEnd:x}=this.getProps(),h=this.constraints||{},g=Wt(y=>{if(!vr(y,l,this.currentDirection))return;let b=h&&h[y]||{};p&&(b={min:0,max:0});const w=d?200:1e6,A=d?40:1e7,E={type:"inertia",velocity:r?s[y]:0,bounceStiffness:w,bounceDamping:A,timeConstant:750,restDelta:1,restSpeed:10,...m,...b};return this.startAxisValueAnimation(y,E)});return Promise.all(g).then(x)}startAxisValueAnimation(s,l){const r=this.getAxisMotionValue(s);return $d(this.visualElement,s),r.start(Uu(s,r,0,l,this.visualElement,!1))}stopAnimation(){Wt(s=>this.getAxisMotionValue(s).stop())}pauseAnimation(){Wt(s=>this.getAxisMotionValue(s).animation?.pause())}getAnimationState(s){return this.getAxisMotionValue(s).animation?.state}getAxisMotionValue(s){const l=`_drag${s.toUpperCase()}`,r=this.visualElement.getProps(),d=r[l];return d||this.visualElement.getValue(s,(r.initial?r.initial[s]:void 0)||0)}snapToCursor(s){Wt(l=>{const{drag:r}=this.getProps();if(!vr(l,r,this.currentDirection))return;const{projection:d}=this.visualElement,m=this.getAxisMotionValue(l);if(d&&d.layout){const{min:p,max:x}=d.layout.layoutBox[l],h=m.get()||0;m.set(s[l]-_e(p,x,.5)+h)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:s,dragConstraints:l}=this.getProps(),{projection:r}=this.visualElement;if(!As(l)||!r||!this.constraints)return;this.stopAnimation();const d={x:0,y:0};Wt(p=>{const x=this.getAxisMotionValue(p);if(x&&this.constraints!==!1){const h=x.get();d[p]=q6({min:h,max:h},this.constraints[p])}});const{transformTemplate:m}=this.visualElement.getProps();this.visualElement.current.style.transform=m?m({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),Wt(p=>{if(!vr(p,s,null))return;const x=this.getAxisMotionValue(p),{min:h,max:g}=this.constraints[p];x.set(_e(h,g,d[p]))})}addListeners(){if(!this.visualElement.current)return;P6.set(this.visualElement,this);const s=this.visualElement.current,l=On(s,"pointerdown",h=>{const{drag:g,dragListener:y=!0}=this.getProps();g&&y&&this.start(h)}),r=()=>{const{dragConstraints:h}=this.getProps();As(h)&&h.current&&(this.constraints=this.resolveRefConstraints())},{projection:d}=this.visualElement,m=d.addEventListener("measure",r);d&&!d.layout&&(d.root&&d.root.updateScroll(),d.updateLayout()),Ie.read(r);const p=Gn(window,"resize",()=>this.scalePositionWithinConstraints()),x=d.addEventListener("didUpdate",(({delta:h,hasLayoutChanged:g})=>{this.isDragging&&g&&(Wt(y=>{const b=this.getAxisMotionValue(y);b&&(this.originPoint[y]+=h[y].translate,b.set(b.get()+h[y].translate))}),this.visualElement.render())}));return()=>{p(),l(),m(),x&&x()}}getProps(){const s=this.visualElement.getProps(),{drag:l=!1,dragDirectionLock:r=!1,dragPropagation:d=!1,dragConstraints:m=!1,dragElastic:p=tu,dragMomentum:x=!0}=s;return{...s,drag:l,dragDirectionLock:r,dragPropagation:d,dragConstraints:m,dragElastic:p,dragMomentum:x}}}function vr(i,s,l){return(s===!0||s===i)&&(l===null||l===i)}function U6(i,s=10){let l=null;return Math.abs(i.y)>s?l="y":Math.abs(i.x)>s&&(l="x"),l}class _6 extends di{constructor(s){super(s),this.removeGroupControls=Jt,this.removeListeners=Jt,this.controls=new I6(s)}mount(){const{dragControls:s}=this.node.getProps();s&&(this.removeGroupControls=s.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Jt}update(){const{dragControls:s}=this.node.getProps(),{dragControls:l}=this.node.prevProps||{};s!==l&&(this.removeGroupControls(),s&&(this.removeGroupControls=s.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners()}}const Jg=i=>(s,l)=>{i&&Ie.postRender(()=>i(s,l))};class G6 extends di{constructor(){super(...arguments),this.removePointerDownListener=Jt}onPointerDown(s){this.session=new yy(s,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:xy(this.node)})}createPanHandlers(){const{onPanSessionStart:s,onPanStart:l,onPan:r,onPanEnd:d}=this.node.getProps();return{onSessionStart:Jg(s),onStart:Jg(l),onMove:r,onEnd:(m,p)=>{delete this.session,d&&Ie.postRender(()=>d(m,p))}}}mount(){this.removePointerDownListener=On(this.node.current,"pointerdown",s=>this.onPointerDown(s))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function Y6(i=!0){const s=j.useContext(qu);if(s===null)return[!0,null];const{isPresent:l,onExitComplete:r,register:d}=s,m=j.useId();j.useEffect(()=>{if(i)return d(m)},[i]);const p=j.useCallback(()=>i&&r&&r(m),[m,r,i]);return!l&&r?[!1,p]:[!0]}const Mr={hasAnimatedSinceResize:!0,hasEverUpdated:!1};let jd=!1;class Q6 extends j.Component{componentDidMount(){const{visualElement:s,layoutGroup:l,switchLayoutGroup:r,layoutId:d}=this.props,{projection:m}=s;m&&(l.group&&l.group.add(m),r&&r.register&&d&&r.register(m),jd&&m.root.didUpdate(),m.addEventListener("animationComplete",()=>{this.safeToRemove()}),m.setOptions({...m.options,onExitComplete:()=>this.safeToRemove()})),Mr.hasEverUpdated=!0}getSnapshotBeforeUpdate(s){const{layoutDependency:l,visualElement:r,drag:d,isPresent:m}=this.props,{projection:p}=r;return p&&(p.isPresent=m,jd=!0,d||s.layoutDependency!==l||l===void 0||s.isPresent!==m?p.willUpdate():this.safeToRemove(),s.isPresent!==m&&(m?p.promote():p.relegate()||Ie.postRender(()=>{const x=p.getStack();(!x||!x.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:s}=this.props.visualElement;s&&(s.root.didUpdate(),Ru.postRender(()=>{!s.currentAnimation&&s.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:s,layoutGroup:l,switchLayoutGroup:r}=this.props,{projection:d}=s;jd=!0,d&&(d.scheduleCheckAfterUnmount(),l&&l.group&&l.group.remove(d),r&&r.deregister&&r.deregister(d))}safeToRemove(){const{safeToRemove:s}=this.props;s&&s()}render(){return null}}function vy(i){const[s,l]=Y6(),r=j.useContext(ux);return u.jsx(Q6,{...i,layoutGroup:r,switchLayoutGroup:j.useContext(ey),isPresent:s,safeToRemove:l})}function F6(i,s,l){const r=pt(i)?i:Es(i);return r.start(Uu("",r,s,l)),r.animation}const K6=(i,s)=>i.depth-s.depth;class X6{constructor(){this.children=[],this.isDirty=!1}add(s){mu(this.children,s),this.isDirty=!0}remove(s){pu(this.children,s),this.isDirty=!0}forEach(s){this.isDirty&&this.children.sort(K6),this.isDirty=!1,this.children.forEach(s)}}function W6(i,s){const l=Ct.now(),r=({timestamp:d})=>{const m=d-l;m>=s&&(oi(r),i(m-s))};return Ie.setup(r,!0),()=>oi(r)}const wy=["TopLeft","TopRight","BottomLeft","BottomRight"],Z6=wy.length,$g=i=>typeof i=="string"?parseFloat(i):i,e0=i=>typeof i=="number"||$.test(i);function J6(i,s,l,r,d,m){d?(i.opacity=_e(0,l.opacity??1,$6(r)),i.opacityExit=_e(s.opacity??1,0,e5(r))):m&&(i.opacity=_e(s.opacity??1,l.opacity??1,r));for(let p=0;p<Z6;p++){const x=`border${wy[p]}Radius`;let h=t0(s,x),g=t0(l,x);if(h===void 0&&g===void 0)continue;h||(h=0),g||(g=0),h===0||g===0||e0(h)===e0(g)?(i[x]=Math.max(_e($g(h),$g(g),r),0),(da.test(g)||da.test(h))&&(i[x]+="%")):i[x]=g}(s.rotate||l.rotate)&&(i.rotate=_e(s.rotate||0,l.rotate||0,r))}function t0(i,s){return i[s]!==void 0?i[s]:i.borderRadius}const $6=Sy(0,.5,rx),e5=Sy(.5,.95,Jt);function Sy(i,s,l){return r=>r<i?0:r>s?1:l(Pn(i,s,r))}function a0(i,s){i.min=s.min,i.max=s.max}function aa(i,s){a0(i.x,s.x),a0(i.y,s.y)}function i0(i,s){i.translate=s.translate,i.scale=s.scale,i.originPoint=s.originPoint,i.origin=s.origin}function s0(i,s,l,r,d){return i-=s,i=Or(i,1/l,r),d!==void 0&&(i=Or(i,1/d,r)),i}function t5(i,s=0,l=1,r=.5,d,m=i,p=i){if(da.test(s)&&(s=parseFloat(s),s=_e(p.min,p.max,s/100)-p.min),typeof s!="number")return;let x=_e(m.min,m.max,r);i===m&&(x-=s),i.min=s0(i.min,s,l,x,d),i.max=s0(i.max,s,l,x,d)}function n0(i,s,[l,r,d],m,p){t5(i,s[l],s[r],s[d],s.scale,m,p)}const a5=["x","scaleX","originX"],i5=["y","scaleY","originY"];function l0(i,s,l,r){n0(i.x,s,a5,l?l.x:void 0,r?r.x:void 0),n0(i.y,s,i5,l?l.y:void 0,r?r.y:void 0)}function r0(i){return i.translate===0&&i.scale===1}function Ay(i){return r0(i.x)&&r0(i.y)}function o0(i,s){return i.min===s.min&&i.max===s.max}function s5(i,s){return o0(i.x,s.x)&&o0(i.y,s.y)}function c0(i,s){return Math.round(i.min)===Math.round(s.min)&&Math.round(i.max)===Math.round(s.max)}function Cy(i,s){return c0(i.x,s.x)&&c0(i.y,s.y)}function d0(i){return ht(i.x)/ht(i.y)}function u0(i,s){return i.translate===s.translate&&i.scale===s.scale&&i.originPoint===s.originPoint}class n5{constructor(){this.members=[]}add(s){mu(this.members,s),s.scheduleRender()}remove(s){if(pu(this.members,s),s===this.prevLead&&(this.prevLead=void 0),s===this.lead){const l=this.members[this.members.length-1];l&&this.promote(l)}}relegate(s){const l=this.members.findIndex(d=>s===d);if(l===0)return!1;let r;for(let d=l;d>=0;d--){const m=this.members[d];if(m.isPresent!==!1){r=m;break}}return r?(this.promote(r),!0):!1}promote(s,l){const r=this.lead;if(s!==r&&(this.prevLead=r,this.lead=s,s.show(),r)){r.instance&&r.scheduleRender(),s.scheduleRender(),s.resumeFrom=r,l&&(s.resumeFrom.preserveOpacity=!0),r.snapshot&&(s.snapshot=r.snapshot,s.snapshot.latestValues=r.animationValues||r.latestValues),s.root&&s.root.isUpdating&&(s.isLayoutDirty=!0);const{crossfade:d}=s.options;d===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(s=>{const{options:l,resumingFrom:r}=s;l.onExitComplete&&l.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(s=>{s.instance&&s.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function l5(i,s,l){let r="";const d=i.x.translate/s.x,m=i.y.translate/s.y,p=l?.z||0;if((d||m||p)&&(r=`translate3d(${d}px, ${m}px, ${p}px) `),(s.x!==1||s.y!==1)&&(r+=`scale(${1/s.x}, ${1/s.y}) `),l){const{transformPerspective:g,rotate:y,rotateX:b,rotateY:w,skewX:A,skewY:E}=l;g&&(r=`perspective(${g}px) ${r}`),y&&(r+=`rotate(${y}deg) `),b&&(r+=`rotateX(${b}deg) `),w&&(r+=`rotateY(${w}deg) `),A&&(r+=`skewX(${A}deg) `),E&&(r+=`skewY(${E}deg) `)}const x=i.x.scale*s.x,h=i.y.scale*s.y;return(x!==1||h!==1)&&(r+=`scale(${x}, ${h})`),r||"none"}const Md=["","X","Y","Z"],r5=1e3;let o5=0;function Ed(i,s,l,r){const{latestValues:d}=s;d[i]&&(l[i]=d[i],s.setStaticValue(i,0),r&&(r[i]=0))}function Ty(i){if(i.hasCheckedOptimisedAppear=!0,i.root===i)return;const{visualElement:s}=i.options;if(!s)return;const l=dy(s);if(window.MotionHasOptimisedAnimation(l,"transform")){const{layout:d,layoutId:m}=i.options;window.MotionCancelOptimisedAnimation(l,"transform",Ie,!(d||m))}const{parent:r}=i;r&&!r.hasCheckedOptimisedAppear&&Ty(r)}function jy({attachResizeListener:i,defaultParent:s,measureScroll:l,checkIsScrollRoot:r,resetTransform:d}){return class{constructor(p={},x=s?.()){this.id=o5++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(u5),this.nodes.forEach(h5),this.nodes.forEach(g5),this.nodes.forEach(m5)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=p,this.root=x?x.root||x:this,this.path=x?[...x.path,x]:[],this.parent=x,this.depth=x?x.depth+1:0;for(let h=0;h<this.path.length;h++)this.path[h].shouldResetTransform=!0;this.root===this&&(this.nodes=new X6)}addEventListener(p,x){return this.eventHandlers.has(p)||this.eventHandlers.set(p,new gu),this.eventHandlers.get(p).add(x)}notifyListeners(p,...x){const h=this.eventHandlers.get(p);h&&h.notify(...x)}hasListeners(p){return this.eventHandlers.has(p)}mount(p){if(this.instance)return;this.isSVG=Gx(p)&&!n3(p),this.instance=p;const{layoutId:x,layout:h,visualElement:g}=this.options;if(g&&!g.current&&g.mount(p),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(h||x)&&(this.isLayoutDirty=!0),i){let y,b=0;const w=()=>this.root.updateBlockedByResize=!1;Ie.read(()=>{b=window.innerWidth}),i(p,()=>{const A=window.innerWidth;A!==b&&(b=A,this.root.updateBlockedByResize=!0,y&&y(),y=W6(w,250),Mr.hasAnimatedSinceResize&&(Mr.hasAnimatedSinceResize=!1,this.nodes.forEach(f0)))})}x&&this.root.registerSharedNode(x,this),this.options.animate!==!1&&g&&(x||h)&&this.addEventListener("didUpdate",({delta:y,hasLayoutChanged:b,hasRelativeLayoutChanged:w,layout:A})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const E=this.options.transition||g.getDefaultTransition()||w5,{onLayoutAnimationStart:B,onLayoutAnimationComplete:q}=g.getProps(),z=!this.targetLayout||!Cy(this.targetLayout,A),M=!b&&w;if(this.options.layoutRoot||this.resumeFrom||M||b&&(z||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const O={...Du(E,"layout"),onPlay:B,onComplete:q};(g.shouldReduceMotion||this.options.layoutRoot)&&(O.delay=0,O.type=!1),this.startAnimation(O),this.setAnimationOrigin(y,M)}else b||f0(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=A})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const p=this.getStack();p&&p.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),oi(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(x5),this.animationId++)}getTransformTemplate(){const{visualElement:p}=this.options;return p&&p.getProps().transformTemplate}willUpdate(p=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Ty(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let y=0;y<this.path.length;y++){const b=this.path[y];b.shouldResetTransform=!0,b.updateScroll("snapshot"),b.options.layoutRoot&&b.willUpdate(!1)}const{layoutId:x,layout:h}=this.options;if(x===void 0&&!h)return;const g=this.getTransformTemplate();this.prevTransformTemplateValue=g?g(this.latestValues,""):void 0,this.updateSnapshot(),p&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(m0);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(p0);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(f5),this.nodes.forEach(c5),this.nodes.forEach(d5)):this.nodes.forEach(p0),this.clearAllSnapshots();const x=Ct.now();ut.delta=Ra(0,1e3/60,x-ut.timestamp),ut.timestamp=x,ut.isProcessing=!0,gd.update.process(ut),gd.preRender.process(ut),gd.render.process(ut),ut.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Ru.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(p5),this.sharedNodes.forEach(y5)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Ie.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Ie.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!ht(this.snapshot.measuredBox.x)&&!ht(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let h=0;h<this.path.length;h++)this.path[h].updateScroll();const p=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected=at(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:x}=this.options;x&&x.notify("LayoutMeasure",this.layout.layoutBox,p?p.layoutBox:void 0)}updateScroll(p="measure"){let x=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===p&&(x=!1),x&&this.instance){const h=r(this.instance);this.scroll={animationId:this.root.animationId,phase:p,isRoot:h,offset:l(this.instance),wasRoot:this.scroll?this.scroll.isRoot:h}}}resetTransform(){if(!d)return;const p=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,x=this.projectionDelta&&!Ay(this.projectionDelta),h=this.getTransformTemplate(),g=h?h(this.latestValues,""):void 0,y=g!==this.prevTransformTemplateValue;p&&this.instance&&(x||Di(this.latestValues)||y)&&(d(this.instance,g),this.shouldResetTransform=!1,this.scheduleRender())}measure(p=!0){const x=this.measurePageBox();let h=this.removeElementScroll(x);return p&&(h=this.removeTransform(h)),S5(h),{animationId:this.root.animationId,measuredBox:x,layoutBox:h,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:p}=this.options;if(!p)return at();const x=p.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(A5))){const{scroll:g}=this.root;g&&(Cs(x.x,g.offset.x),Cs(x.y,g.offset.y))}return x}removeElementScroll(p){const x=at();if(aa(x,p),this.scroll?.wasRoot)return x;for(let h=0;h<this.path.length;h++){const g=this.path[h],{scroll:y,options:b}=g;g!==this.root&&y&&b.layoutScroll&&(y.wasRoot&&aa(x,p),Cs(x.x,y.offset.x),Cs(x.y,y.offset.y))}return x}applyTransform(p,x=!1){const h=at();aa(h,p);for(let g=0;g<this.path.length;g++){const y=this.path[g];!x&&y.options.layoutScroll&&y.scroll&&y!==y.root&&Ts(h,{x:-y.scroll.offset.x,y:-y.scroll.offset.y}),Di(y.latestValues)&&Ts(h,y.latestValues)}return Di(this.latestValues)&&Ts(h,this.latestValues),h}removeTransform(p){const x=at();aa(x,p);for(let h=0;h<this.path.length;h++){const g=this.path[h];if(!g.instance||!Di(g.latestValues))continue;Xd(g.latestValues)&&g.updateSnapshot();const y=at(),b=g.measurePageBox();aa(y,b),l0(x,g.latestValues,g.snapshot?g.snapshot.layoutBox:void 0,y)}return Di(this.latestValues)&&l0(x,this.latestValues),x}setTargetDelta(p){this.targetDelta=p,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(p){this.options={...this.options,...p,crossfade:p.crossfade!==void 0?p.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==ut.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(p=!1){const x=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=x.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=x.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=x.isSharedProjectionDirty);const h=!!this.resumingFrom||this!==x;if(!(p||h&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:y,layoutId:b}=this.options;if(!this.layout||!(y||b))return;this.resolvedRelativeTargetAt=ut.timestamp;const w=this.getClosestProjectingParent();w&&this.linkedParentVersion!==w.layoutVersion&&!w.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(w&&w.layout?this.createRelativeTarget(w,this.layout.layoutBox,w.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=at(),this.targetWithTransforms=at()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),D6(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):aa(this.target,this.layout.layoutBox),sy(this.target,this.targetDelta)):aa(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,w&&!!w.resumingFrom==!!this.resumingFrom&&!w.options.layoutScroll&&w.target&&this.animationProgress!==1?this.createRelativeTarget(w,this.target,w.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Xd(this.parent.latestValues)||iy(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(p,x,h){this.relativeParent=p,this.linkedParentVersion=p.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=at(),this.relativeTargetOrigin=at(),qr(this.relativeTargetOrigin,x,h),aa(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){const p=this.getLead(),x=!!this.resumingFrom||this!==p;let h=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(h=!1),x&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(h=!1),this.resolvedRelativeTargetAt===ut.timestamp&&(h=!1),h)return;const{layout:g,layoutId:y}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(g||y))return;aa(this.layoutCorrected,this.layout.layoutBox);const b=this.treeScale.x,w=this.treeScale.y;U3(this.layoutCorrected,this.treeScale,this.path,x),p.layout&&!p.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(p.target=p.layout.layoutBox,p.targetWithTransforms=at());const{target:A}=p;if(!A){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(i0(this.prevProjectionDelta.x,this.projectionDelta.x),i0(this.prevProjectionDelta.y,this.projectionDelta.y)),qn(this.projectionDelta,this.layoutCorrected,A,this.latestValues),(this.treeScale.x!==b||this.treeScale.y!==w||!u0(this.projectionDelta.x,this.prevProjectionDelta.x)||!u0(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",A))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(p=!0){if(this.options.visualElement?.scheduleRender(),p){const x=this.getStack();x&&x.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=js(),this.projectionDelta=js(),this.projectionDeltaWithTransform=js()}setAnimationOrigin(p,x=!1){const h=this.snapshot,g=h?h.latestValues:{},y={...this.latestValues},b=js();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!x;const w=at(),A=h?h.source:void 0,E=this.layout?this.layout.source:void 0,B=A!==E,q=this.getStack(),z=!q||q.members.length<=1,M=!!(B&&!z&&this.options.crossfade===!0&&!this.path.some(v5));this.animationProgress=0;let O;this.mixTargetDelta=X=>{const P=X/1e3;h0(b.x,p.x,P),h0(b.y,p.y,P),this.setTargetDelta(b),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(qr(w,this.layout.layoutBox,this.relativeParent.layout.layoutBox),b5(this.relativeTarget,this.relativeTargetOrigin,w,P),O&&s5(this.relativeTarget,O)&&(this.isProjectionDirty=!1),O||(O=at()),aa(O,this.relativeTarget)),B&&(this.animationValues=y,J6(y,g,this.latestValues,P,M,z)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=P},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(p){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(oi(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Ie.update(()=>{Mr.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Es(0)),this.currentAnimation=F6(this.motionValue,[0,1e3],{...p,velocity:0,isSync:!0,onUpdate:x=>{this.mixTargetDelta(x),p.onUpdate&&p.onUpdate(x)},onStop:()=>{},onComplete:()=>{p.onComplete&&p.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const p=this.getStack();p&&p.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(r5),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const p=this.getLead();let{targetWithTransforms:x,target:h,layout:g,latestValues:y}=p;if(!(!x||!h||!g)){if(this!==p&&this.layout&&g&&My(this.options.animationType,this.layout.layoutBox,g.layoutBox)){h=this.target||at();const b=ht(this.layout.layoutBox.x);h.x.min=p.target.x.min,h.x.max=h.x.min+b;const w=ht(this.layout.layoutBox.y);h.y.min=p.target.y.min,h.y.max=h.y.min+w}aa(x,h),Ts(x,y),qn(this.projectionDeltaWithTransform,this.layoutCorrected,x,y)}}registerSharedNode(p,x){this.sharedNodes.has(p)||this.sharedNodes.set(p,new n5),this.sharedNodes.get(p).add(x);const g=x.options.initialPromotionConfig;x.promote({transition:g?g.transition:void 0,preserveFollowOpacity:g&&g.shouldPreserveFollowOpacity?g.shouldPreserveFollowOpacity(x):void 0})}isLead(){const p=this.getStack();return p?p.lead===this:!0}getLead(){const{layoutId:p}=this.options;return p?this.getStack()?.lead||this:this}getPrevLead(){const{layoutId:p}=this.options;return p?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:p}=this.options;if(p)return this.root.sharedNodes.get(p)}promote({needsReset:p,transition:x,preserveFollowOpacity:h}={}){const g=this.getStack();g&&g.promote(this,h),p&&(this.projectionDelta=void 0,this.needsReset=!0),x&&this.setOptions({transition:x})}relegate(){const p=this.getStack();return p?p.relegate(this):!1}resetSkewAndRotation(){const{visualElement:p}=this.options;if(!p)return;let x=!1;const{latestValues:h}=p;if((h.z||h.rotate||h.rotateX||h.rotateY||h.rotateZ||h.skewX||h.skewY)&&(x=!0),!x)return;const g={};h.z&&Ed("z",p,g,this.animationValues);for(let y=0;y<Md.length;y++)Ed(`rotate${Md[y]}`,p,g,this.animationValues),Ed(`skew${Md[y]}`,p,g,this.animationValues);p.render();for(const y in g)p.setStaticValue(y,g[y]),this.animationValues&&(this.animationValues[y]=g[y]);p.scheduleRender()}applyProjectionStyles(p,x){if(!this.instance||this.isSVG)return;if(!this.isVisible){p.visibility="hidden";return}const h=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,p.visibility="",p.opacity="",p.pointerEvents=jr(x?.pointerEvents)||"",p.transform=h?h(this.latestValues,""):"none";return}const g=this.getLead();if(!this.projectionDelta||!this.layout||!g.target){this.options.layoutId&&(p.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,p.pointerEvents=jr(x?.pointerEvents)||""),this.hasProjected&&!Di(this.latestValues)&&(p.transform=h?h({},""):"none",this.hasProjected=!1);return}p.visibility="";const y=g.animationValues||g.latestValues;this.applyTransformsToTarget();let b=l5(this.projectionDeltaWithTransform,this.treeScale,y);h&&(b=h(y,b)),p.transform=b;const{x:w,y:A}=this.projectionDelta;p.transformOrigin=`${w.origin*100}% ${A.origin*100}% 0`,g.animationValues?p.opacity=g===this?y.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:y.opacityExit:p.opacity=g===this?y.opacity!==void 0?y.opacity:"":y.opacityExit!==void 0?y.opacityExit:0;for(const E in Kd){if(y[E]===void 0)continue;const{correct:B,applyTo:q,isCSSVariable:z}=Kd[E],M=b==="none"?y[E]:B(y[E],g);if(q){const O=q.length;for(let X=0;X<O;X++)p[q[X]]=M}else z?this.options.visualElement.renderState.vars[E]=M:p[E]=M}this.options.layoutId&&(p.pointerEvents=g===this?jr(x?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(p=>p.currentAnimation?.stop()),this.root.nodes.forEach(m0),this.root.sharedNodes.clear()}}}function c5(i){i.updateLayout()}function d5(i){const s=i.resumeFrom?.snapshot||i.snapshot;if(i.isLead()&&i.layout&&s&&i.hasListeners("didUpdate")){const{layoutBox:l,measuredBox:r}=i.layout,{animationType:d}=i.options,m=s.source!==i.layout.source;d==="size"?Wt(y=>{const b=m?s.measuredBox[y]:s.layoutBox[y],w=ht(b);b.min=l[y].min,b.max=b.min+w}):My(d,s.layoutBox,l)&&Wt(y=>{const b=m?s.measuredBox[y]:s.layoutBox[y],w=ht(l[y]);b.max=b.min+w,i.relativeTarget&&!i.currentAnimation&&(i.isProjectionDirty=!0,i.relativeTarget[y].max=i.relativeTarget[y].min+w)});const p=js();qn(p,l,s.layoutBox);const x=js();m?qn(x,i.applyTransform(r,!0),s.measuredBox):qn(x,l,s.layoutBox);const h=!Ay(p);let g=!1;if(!i.resumeFrom){const y=i.getClosestProjectingParent();if(y&&!y.resumeFrom){const{snapshot:b,layout:w}=y;if(b&&w){const A=at();qr(A,s.layoutBox,b.layoutBox);const E=at();qr(E,l,w.layoutBox),Cy(A,E)||(g=!0),y.options.layoutRoot&&(i.relativeTarget=E,i.relativeTargetOrigin=A,i.relativeParent=y)}}}i.notifyListeners("didUpdate",{layout:l,snapshot:s,delta:x,layoutDelta:p,hasLayoutChanged:h,hasRelativeLayoutChanged:g})}else if(i.isLead()){const{onExitComplete:l}=i.options;l&&l()}i.options.transition=void 0}function u5(i){i.parent&&(i.isProjecting()||(i.isProjectionDirty=i.parent.isProjectionDirty),i.isSharedProjectionDirty||(i.isSharedProjectionDirty=!!(i.isProjectionDirty||i.parent.isProjectionDirty||i.parent.isSharedProjectionDirty)),i.isTransformDirty||(i.isTransformDirty=i.parent.isTransformDirty))}function m5(i){i.isProjectionDirty=i.isSharedProjectionDirty=i.isTransformDirty=!1}function p5(i){i.clearSnapshot()}function m0(i){i.clearMeasurements()}function p0(i){i.isLayoutDirty=!1}function f5(i){const{visualElement:s}=i.options;s&&s.getProps().onBeforeLayoutMeasure&&s.notify("BeforeLayoutMeasure"),i.resetTransform()}function f0(i){i.finishAnimation(),i.targetDelta=i.relativeTarget=i.target=void 0,i.isProjectionDirty=!0}function h5(i){i.resolveTargetDelta()}function g5(i){i.calcProjection()}function x5(i){i.resetSkewAndRotation()}function y5(i){i.removeLeadSnapshot()}function h0(i,s,l){i.translate=_e(s.translate,0,l),i.scale=_e(s.scale,1,l),i.origin=s.origin,i.originPoint=s.originPoint}function g0(i,s,l,r){i.min=_e(s.min,l.min,r),i.max=_e(s.max,l.max,r)}function b5(i,s,l,r){g0(i.x,s.x,l.x,r),g0(i.y,s.y,l.y,r)}function v5(i){return i.animationValues&&i.animationValues.opacityExit!==void 0}const w5={duration:.45,ease:[.4,0,.1,1]},x0=i=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(i),y0=x0("applewebkit/")&&!x0("chrome/")?Math.round:Jt;function b0(i){i.min=y0(i.min),i.max=y0(i.max)}function S5(i){b0(i.x),b0(i.y)}function My(i,s,l){return i==="position"||i==="preserve-aspect"&&!N6(d0(s),d0(l),.2)}function A5(i){return i!==i.root&&i.scroll?.wasRoot}const C5=jy({attachResizeListener:(i,s)=>Gn(i,"resize",s),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Nd={current:void 0},Ey=jy({measureScroll:i=>({x:i.scrollLeft,y:i.scrollTop}),defaultParent:()=>{if(!Nd.current){const i=new C5({});i.mount(window),i.setOptions({layoutScroll:!0}),Nd.current=i}return Nd.current},resetTransform:(i,s)=>{i.style.transform=s!==void 0?s:"none"},checkIsScrollRoot:i=>window.getComputedStyle(i).position==="fixed"}),T5={pan:{Feature:G6},drag:{Feature:_6,ProjectionNode:Ey,MeasureLayout:vy}};function v0(i,s,l){const{props:r}=i;i.animationState&&r.whileHover&&i.animationState.setActive("whileHover",l==="Start");const d="onHover"+l,m=r[d];m&&Ie.postRender(()=>m(s,Jn(s)))}class j5 extends di{mount(){const{current:s}=this.node;s&&(this.unmount=e3(s,(l,r)=>(v0(this.node,r,"Start"),d=>v0(this.node,d,"End"))))}unmount(){}}class M5 extends di{constructor(){super(...arguments),this.isActive=!1}onFocus(){let s=!1;try{s=this.node.current.matches(":focus-visible")}catch{s=!0}!s||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Xn(Gn(this.node.current,"focus",()=>this.onFocus()),Gn(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function w0(i,s,l){const{props:r}=i;if(i.current instanceof HTMLButtonElement&&i.current.disabled)return;i.animationState&&r.whileTap&&i.animationState.setActive("whileTap",l==="Start");const d="onTap"+(l==="End"?"":l),m=r[d];m&&Ie.postRender(()=>m(s,Jn(s)))}class E5 extends di{mount(){const{current:s}=this.node;s&&(this.unmount=s3(s,(l,r)=>(w0(this.node,r,"Start"),(d,{success:m})=>w0(this.node,d,m?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const au=new WeakMap,Dd=new WeakMap,N5=i=>{const s=au.get(i.target);s&&s(i)},D5=i=>{i.forEach(N5)};function k5({root:i,...s}){const l=i||document;Dd.has(l)||Dd.set(l,{});const r=Dd.get(l),d=JSON.stringify(s);return r[d]||(r[d]=new IntersectionObserver(D5,{root:i,...s})),r[d]}function R5(i,s,l){const r=k5(s);return au.set(i,l),r.observe(i),()=>{au.delete(i),r.unobserve(i)}}const B5={some:0,all:1};class z5 extends di{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:s={}}=this.node.getProps(),{root:l,margin:r,amount:d="some",once:m}=s,p={root:l?l.current:void 0,rootMargin:r,threshold:typeof d=="number"?d:B5[d]},x=h=>{const{isIntersecting:g}=h;if(this.isInView===g||(this.isInView=g,m&&!g&&this.hasEnteredView))return;g&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",g);const{onViewportEnter:y,onViewportLeave:b}=this.node.getProps(),w=g?y:b;w&&w(h)};return R5(this.node.current,p,x)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:s,prevProps:l}=this.node;["amount","margin","root"].some(L5(s,l))&&this.startObserver()}unmount(){}}function L5({viewport:i={}},{viewport:s={}}={}){return l=>i[l]!==s[l]}const O5={inView:{Feature:z5},tap:{Feature:E5},focus:{Feature:M5},hover:{Feature:j5}},q5={layout:{ProjectionNode:Ey,MeasureLayout:vy}},V5={...A6,...O5,...T5,...q5},Vn=[{id:"Central Laboratories",title:"Central Laboratory Services",type:"dropdown",path:"/services/Central Laboratories",heroImage:hd,shortDesc:"Meeting the demands of today's drug, device and diagnostics development environment.",subItems:[{name:"Central Laboratory Services",desc:"Comprehensive central lab services for global trials.",pageContent:{image:hd,layout:"central-lab",subtitle:"Comprehensive global central laboratory services supporting clinical trials in countries around the world.",description:"Biotech companies are powering the pharmaceutical pipeline by driving innovation to address unmet medical needs. Navigating a rapidly changing and increasingly complex landscape takes expertise and experience, and AQLIVIA Laboratories can help you find your path to success. AQLIVIA Laboratories offers a comprehensive set of flexible solutions that can be customized to your specific needs, enabling you to utilize expansive institutional knowledge while keeping your organization lean and focused.",carousel:[{title:"Companion Diagnostics",desc:"Assays that are required to be used before a specific therapy can be initiated."},{title:"Project and Data Management",desc:"End-to-end data integrity and project oversight."},{title:"Labmatrix® Clinical Trial Sample",desc:"Tracking clinical trial samples and consents to support total sample lifecycle management."},{title:"Anatomic Pathology",desc:"Comprehensive tissue analysis and pathology services to support oncology and other therapeutic areas."},{title:"Flow Cytometry",desc:"Advanced cellular analysis for immunophenotyping and biomarker detection."},{title:"Genomics Solutions",desc:"Next-generation sequencing to support precision medicine and discovery."}],challenges:{title:"Solutions for your most complex challenges",desc:"Because the challenges faced by our clients are unique, one-size-fits-all solutions simply don't work. This is why we offer solutions specifically designed and tailored to the needs of each client. Our customized solutions are powered by:",image:"https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800",points:["Global testing services including anatomic pathology, flow cytometry, immunoassay, safety testing, and customized test development.","Harmonized processes with clinical data management for full-service integration across the trial lifecycle.","Expertise to develop fit-for-purpose biomarker discovery and development strategies to mitigate clinical risks.","Early engagement with scientific specialists for regulatory assessment (IVD vs CLIA) and global scale-up deployment.","Scientific acumen and resources from AQLIVIA to supplement and enhance your internal capabilities.","Strategic operation models customized to integrate biosample tracking and storage with easy-to-use technology platforms."]},delivery:{title:"Expert scientific advisors and solutions in key therapeutic areas and technologies",desc:"As a collaborative lab services partner, we develop testing strategies, including early engagement, which maximizes your return on investment. Our team applies its scientific expertise to consult with customers to evaluate your key requirements. We have a vast array of testing capabilities in multiple therapeutic areas.",locationsTitle:"Optimized global network",locations:["Argentina – Buenos Aires","Brazil – San Paulo","China – Beijing","India – Mumbai","Japan – Tokyo","UK – Edinburgh","Singapore – Singapore","South Africa – Pretoria","United States – Atlanta, GA; Valencia and San Juan Capistrano, CA"]}}},{name:"Biotech Laboratory Services",image:ni,heroSubtitle:"Flexible solutions customized for small & mid-size biotech.",desc:"Flexible solutions customized for small & mid-size biotech.",layout:"html-content",htmlContent:`
          <div class="space-y-20 animate-fadeIn text-[#140B42]">
            
            <section class="max-w-5xl">
              <p class="text-gray-600 leading-relaxed mb-6 lg:ml-20">
                Biotech companies are powering the pharmaceutical pipeline by driving innovation to address unmet medical needs. Navigating a rapidly changing and increasingly complex landscape takes expertise and experience, and AQLIVIA Laboratories can help you find your path to success.
              </p>
              <p class="text-gray-600 leading-relaxed lg:ml-20">
                AQLIVIA Laboratories offers a comprehensive set of flexible solutions that can be customized to your specific needs, enabling you to utilize expansive institutional knowledge while keeping your organization lean and focused.
              </p>
            </section>
      
            <section class="flex flex-col lg:flex-row items-center gap-16 py-12 border-t border-gray-100">
              <div class="w-full lg:w-1/2">
                <h2 class="text-[#140B42] text-3xl font-bold mb-6">Your individual needs require individual solutions</h2>
                <p class="text-gray-600 mb-8 leading-relaxed">
                  AQLIVIA Laboratories experts can strengthen your team with additional operational knowledge, scientific expertise, best practices, and strategic insights. Our services and solutions provide you with:
                </p>
                <ul class="space-y-4">
                  <li class="flex items-start gap-3">
                    <span class="mt-2 w-1.5 h-1.5 bg-[#0090d0] rounded-full flex-shrink-0"></span>
                    <span class="text-gray-700 text-sm"><strong>Simplicity:</strong> A straightforward approach that streamlines complex processes and systems.</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <span class="mt-2 w-1.5 h-1.5 bg-[#0090d0] rounded-full flex-shrink-0"></span>
                    <span class="text-gray-700 text-sm"><strong>Value:</strong> A lab partner working with you to develop testing strategies, including early engagement, which maximizes the return on your investment.</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <span class="mt-2 w-1.5 h-1.5 bg-[#0090d0] rounded-full flex-shrink-0"></span>
                    <span class="text-gray-700 text-sm"><strong>Attention & Flexibility:</strong> A single operational point of contact who is as committed to your success as you are coupled with a fit-for-purpose oversight structure.</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <span class="mt-2 w-1.5 h-1.5 bg-[#0090d0] rounded-full flex-shrink-0"></span>
                    <span class="text-gray-700 text-sm"><strong>Confidence:</strong> A development partner with exceptional scientific expertise to support your clinical development, at any stage.</span>
                  </li>
                </ul>
                <p class="mt-8 text-sm font-bold text-[#140B42]">Our operation model is a proven approach to clinical trial laboratory solutions.</p>
              </div>
      
              <div class="w-full lg:w-1/2 relative">
                <div class="overflow-hidden rounded-t-[10rem] rounded-b-[2rem] shadow-2xl border-[10px] border-white z-10 relative">
                  <img src="/Aqvilia/3255_Female Research Scientist Putting Test Tubes with Blood Samples into Analyzer.webp" class="w-full h-[500px] object-cover" alt="Biotech Research" />
                </div>
                <div class="absolute -bottom-6 -right-6 w-32 h-32 bg-sky-50 rounded-full -z-0"></div>
              </div>
            </section>
      
            <section class="flex flex-col lg:flex-row-reverse items-center gap-16 py-12">
              <div class="w-full lg:w-1/2">
                <h2 class="text-[#140B42] text-3xl font-bold mb-6">Expert scientific advisors and solutions in key therapeutic areas and technologies</h2>
                <p class="text-gray-600 mb-6 leading-relaxed">
                  As a collaborative lab services partner, we develop testing strategies, including early engagement, which maximizes your return on investment. Our team applies its scientific expertise to consult with customers to evaluate your key requirements.
                </p>
                <p class="text-gray-600 leading-relaxed">
                  We have a vast array of testing capabilities in multiple therapeutic areas, some of which are highlighted below.
                </p>
              </div>
      
              <div class="w-full lg:w-1/2 relative">
                 <div class="overflow-hidden rounded-b-[10rem] rounded-t-[2rem] shadow-2xl border-[10px] border-white z-10 relative">
                  <img src="/Aqvilia/3234_Liquid drop from pipette to test tube.webp" class="w-full h-[400px] object-cover" alt="Laboratory Testing" />
                </div>
                <div class="absolute -top-6 -left-6 w-32 h-32 bg-sky-50 rounded-full -z-0"></div>
              </div>
            </section>
      
            <section class="py-12 border-t border-gray-100">
              <p class="text-[10px] font-bold text-[#0090d0] uppercase tracking-widest mb-4">From Initiation to Execution</p>
              <h2 class="text-[#140B42] text-3xl font-bold mb-6">Supporting your needs, and achieving your milestones, from initiation through execution</h2>
              <p class="text-gray-600 leading-relaxed max-w-5xl">
                We’re a development partner that complements your own internal knowledge and skillset for clinical development. We provide trained project team members who understand how to support your needs and achieve your milestones, from initiation through execution. That includes access to our global reach and partnerships for any trial you’re planning, exceptional scientific expertise, and data and information that give you and your stakeholders the information you need when you need it.
              </p>
            </section>
      
            <section class="bg-sky-50 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-sky-100">
              <div class="max-w-md">
                <p class="text-[#0090d0] font-bold text-xs uppercase tracking-widest mb-2">AQLIVIA Biotech</p>
                <h3 class="text-[#140B42] text-2xl font-bold mb-4">Clinical development solutions built for biotech success</h3>
                <p class="text-gray-600 text-sm">Hit your clinical development milestones and maximize patient impact.</p>
              </div>
              <a href="/Aqvilia/contact#/contact" class="bg-[#0090d0] hover:bg-[#007bb5] text-white font-bold px-10 py-4 rounded-full transition-all uppercase text-sm tracking-widest shadow-lg">
                Visit AQLIVIA Biotech
              </a>
            </section>
      
          </div>
        `},{name:"Project and Data Management",image:cg,heroSubtitle:"With the incredible complexity involved in clinical trials, your study's success depends on excellent central lab project management support",desc:"With the incredible complexity involved in clinical trials, your study's success depends on excellent central lab project management support",layout:"html-content",htmlContent:`
          <div class="space-y-16 animate-fadeIn text-[#140B42]">
            
            <section>
              <h2 class="text-[#140B42] text-4xl font-bold mb-6">Industry-leading Science</h2>
              <p class="text-gray-700 leading-relaxed mb-8 max-w-6xl text-sm">
                AQLIVIA Laboratories puts unsurpassed resources, knowledge and experience in laboratory management to work for you on each clinical trial study. Not only do we give our customers access to one of the broadest test menus in the industry (including novel and proprietary assays), but we provide experienced project management staff to support the highest level of delivery quality. We have seasoned project managers that have experience at managing very large clinical trials, including trials with more than 10,000 subjects.
              </p>
              
              <p class="font-bold text-gray-600 mb-6 text-sm">Serving as the single source of contact, our veteran project managers will keep your study on-time and on-budget. They provide:</p>
              <ul class="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-12">
                <li class="flex items-center gap-3 text-gray-700 text-sm">
                  <span class="w-1.5 h-1.5 bg-[#0090d0] rounded-full flex-shrink-0"></span> Management of internal and global communications
                </li>
                <li class="flex items-center gap-3 text-gray-700 text-sm">
                  <span class="w-1.5 h-1.5 bg-[#0090d0] rounded-full flex-shrink-0"></span> Local knowledge and expertise around the world
                </li>
                <li class="flex items-center gap-3 text-gray-700 text-sm">
                  <span class="w-1.5 h-1.5 bg-[#0090d0] rounded-full flex-shrink-0"></span> Regional support for kits and logistics
                </li>
                <li class="flex items-center gap-3 text-gray-700 text-sm">
                  <span class="w-1.5 h-1.5 bg-[#0090d0] rounded-full flex-shrink-0"></span> Detailed budget management
                </li>
                <li class="flex items-center gap-3 text-gray-700 text-sm">
                  <span class="w-1.5 h-1.5 bg-[#0090d0] rounded-full flex-shrink-0"></span> Risk-and-solution focus with a customer service mindset
                </li>
                <li class="flex items-center gap-3 text-gray-700 text-sm">
                  <span class="w-1.5 h-1.5 bg-[#0090d0] rounded-full flex-shrink-0"></span> Study specific monitoring for proactive oversight
                </li>
                <li class="flex items-center gap-3 text-gray-700 text-sm">
                  <span class="w-1.5 h-1.5 bg-[#0090d0] rounded-full flex-shrink-0"></span> Proactive study planning and management
                </li>
              </ul>
            </section>
      
            <section class="border-t border-gray-100 pt-12">
              <h2 class="text-[#140B42] text-4xl font-bold mb-6">Innovative Solutions</h2>
              <p class="text-gray-700 leading-relaxed mb-6 max-w-6xl text-sm">
                AQLIVIA Laboratories has developed the Laboratory Trial Management System (LTMS™), to create an industry leading Clinical Trials Management System. LTMS enables AQLIVIA Laboratories to manage all the components for a clinical trial from one system.
              </p>
              <p class="text-gray-700 leading-relaxed mb-6 max-w-6xl text-sm">
                Our mission of treating each sample as if a life depends on it is reflected in the sample centric approach we have taken whilst designing LTMS. LTMS utilizes technology such as artificial intelligence and optical character recognition to increase automation and create efficiencies whenever possible.
              </p>
              <p class="text-[#140B42] font-bold text-lg italic mt-10">More Efficient Study Startup + Improved Quality = Better Study Startup Experience</p>
            </section>
      
            <section class="border-t border-gray-100 pt-12 pb-10">
              <h2 class="text-[#140B42] text-4xl font-bold mb-6">Partnership Approach</h2>
              <p class="text-gray-700 leading-relaxed mb-6 max-w-6xl text-sm">
                Our integrated study management approach includes a proactive and cross-functional management team complemented with your own "self-service" reporting tools to ensure you have the most comprehensive study support and delivery in the industry.
              </p>
              <p class="text-gray-700 leading-relaxed mb-6 max-w-6xl text-sm">
                You will work with a highly trained project manager who functions as your single source for information on your central labs tests, simplifying the entire study process and maximizing quality and efficiency. From study set-up, kit creation, database design and site communication, to sample handling, reporting and database lock, your AQLIVIA Laboratories project manager proactively identifies and manages every risk to help ensure you receive consistent, meticulous results when you need them.
              </p>
      
              <h3 class="font-bold text-gray-600 mb-6 text-sm">Responsive investigator site support enables better performance:</h3>
              <ul class="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-12">
                <li class="flex items-center gap-3 text-gray-700 text-sm">
                  <span class="w-1.5 h-1.5 bg-[#0090d0] rounded-full flex-shrink-0"></span> Multilingual investigator support (rapid response)
                </li>
                <li class="flex items-center gap-3 text-gray-700 text-sm">
                  <span class="w-1.5 h-1.5 bg-[#0090d0] rounded-full flex-shrink-0"></span> Language line interpreter services in 144 languages
                </li>
                <li class="flex items-center gap-3 text-gray-700 text-sm">
                  <span class="w-1.5 h-1.5 bg-[#0090d0] rounded-full flex-shrink-0"></span> Streamlined resolution of data clarifications
                </li>
                <li class="flex items-center gap-3 text-gray-700 text-sm">
                  <span class="w-1.5 h-1.5 bg-[#0090d0] rounded-full flex-shrink-0"></span> Rapid communication of alerts to investigator sites
                </li>
                <li class="flex items-center gap-3 text-gray-700 text-sm">
                  <span class="w-1.5 h-1.5 bg-[#0090d0] rounded-full flex-shrink-0"></span> Visit-specific, user-friendly testing kits
                </li>
                <li class="flex items-center gap-3 text-gray-700 text-sm">
                  <span class="w-1.5 h-1.5 bg-[#0090d0] rounded-full flex-shrink-0"></span> Secure online portal for lab reports and queries
                </li>
              </ul>
            </section>
      
            <section class="bg-[#140B42] -mx-6 md:-mx-12 px-6 md:px-12 py-10 mt-10">
              <p class="text-white italic text-center mb-10 max-w-5xl mx-auto leading-relaxed">
                Not only are we committed to ensuring the quality and accuracy of your studies, we’re also dedicated to making the entire process – from startup to timely database lock – seamless and simple for you. Our staff of project management professionals have the experience and expertise to effectively and successfully lead your study.
              </p>
              <div class="border-t border-white/20 pt-8 flex justify-center items-center">
                <h2 class="text-white text-4xl md:text-5xl font-black italic tracking-tighter uppercase">
                  98-99% ON-TIME <span class="text-sky-400">delivery performance</span>
                </h2>
              </div>
            </section>
      
          </div>
        `},{name:"Biorepository and Specimen Management",image:ni,heroSubtitle:"Your biological specimens are irreplaceable assets — trust them with a proven partner",desc:"Secure storage and tracking of biological samples.",layout:"html-content",htmlContent:`
    <div class="space-y-16 animate-fadeIn text-[#140B42]">
      
      <section>
        <p class="text-gray-700 leading-relaxed mb-8 max-w-6xl text-sm">
          You can trust us to preserve the integrity of your biospecimens for as long as you need to store them. Robust SOPs guide our operation and business continuity planning providing the highest standards of biological specimen preservation. Over the past year we accessioned more than five million testing specimens, added more than four million specimens to our biostorage facilities and shipped more than three million specimens to third parties on behalf of our customers.
        </p>
      </section>

      <section class="border-t border-gray-100 pt-12">
        <h2 class="text-[#140B42] text-3xl font-bold mb-6">Global Network — Co-located with our Central Labs</h2>
        <p class="text-gray-700 leading-relaxed mb-8 text-sm">
          Our biorepositories are co-located with our global central laboratories in the United States, United Kingdom, China, India, Argentina, and Singapore. The specimen management process starts from the time we or another laboratory sends a visit specific specimen collection kit to an investigator site. It then continues as the specimen is shipped from the investigator site to the laboratory. These test samples are then sent to a biorepository facility, like ours, for storage.
        </p>
        
        <div class="relative w-full py-10 bg-white rounded-xl shadow-sm border border-gray-50 overflow-hidden">
          <img src="/Aqvilia/worldmap.webp" class="w-2/2 h-110 object-contain opacity-90" alt="Global Biorepository Network Map" />
          </div>
        
        <p class="text-gray-700 leading-relaxed mt-8 text-sm italic">
          For worry-free specimen collection and processing, we take a proven approach to specimen handling and storage. We assure that sponsor requirements, best practices and study-specific protocols are harmonized across our global laboratory network.
        </p>
      </section>

      <section class="border-t border-gray-100 pt-12">
        <h2 class="text-[#140B42] text-3xl font-bold mb-6">Biorepository Solutions to manage the entire lifecycle of your specimens</h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div class="space-y-4">
            <p class="text-gray-700 text-sm leading-relaxed">
              We provide two main biostorage solutions. Our Central Laboratory customers rely on us for their short-term storage needs. During the life of a study we hold specimens in short-term storage and send them where sponsors need them to go. In addition, we provide long-term storage solutions for both our Central Laboratory customers and others.
            </p>
            <p class="text-gray-700 text-sm leading-relaxed">
              We offer a broad range of biorepository services and technologies that are tailored to align with your protocol and storage needs. Currently, our network stores over 13M specimens globally. We routinely execute ~5,000 outbound shipments per month.
            </p>
          </div>
          
          <div class="bg-sky-50 p-6 rounded-2xl border border-sky-100">
            <h4 class="font-bold text-[#140B42] mb-4 uppercase text-xs tracking-widest">Other facets of our offering include:</h4>
            <ul class="space-y-2">
              <li class="flex items-start gap-2 text-gray-700 text-xs">
                <span class="w-1 h-1 bg-[#0090d0] rounded-full mt-1.5 flex-shrink-0"></span> More than 25 years of experience in centralized sample management
              </li>
              <li class="flex items-start gap-2 text-gray-700 text-xs">
                <span class="w-1 h-1 bg-[#0090d0] rounded-full mt-1.5 flex-shrink-0"></span> Global standard storage system
              </li>
              <li class="flex items-start gap-2 text-gray-700 text-xs">
                <span class="w-1 h-1 bg-[#0090d0] rounded-full mt-1.5 flex-shrink-0"></span> Multiple temperature levels: -20°C, -70°C, LN2, 2-8°C, 18-24°C
              </li>
              <li class="flex items-start gap-2 text-gray-700 text-xs">
                <span class="w-1 h-1 bg-[#0090d0] rounded-full mt-1.5 flex-shrink-0"></span> Continuous electronic temperature monitoring
              </li>
              <li class="flex items-start gap-2 text-gray-700 text-xs">
                <span class="w-1 h-1 bg-[#0090d0] rounded-full mt-1.5 flex-shrink-0"></span> 24-hour video surveillance and controlled access
              </li>
              <li class="flex items-start gap-2 text-gray-700 text-xs">
                <span class="w-1 h-1 bg-[#0090d0] rounded-full mt-1.5 flex-shrink-0"></span> 5% freezer redundancy and back-up generators
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="bg-gray-50 -mx-6 md:-mx-12 px-6 md:px-12 py-16 flex flex-col lg:flex-row items-center gap-12 border-t border-gray-100">
        <div class="w-full lg:w-2/3">
          <h2 class="text-[#140B42] text-2xl font-bold mb-4">Biorepository, Biobank, or Biological sample storage facility</h2>
          <p class="text-gray-600 text-sm leading-relaxed max-w-3xl">
            A biorepository refers to the storage and management of biospecimens from animals, humans, and other living organisms and is sometimes called a biological sample storage facility. A biobank is a type of biorepository that usually stores human biospecimens.
          </p>
        </div>
        <div class="w-full lg:w-1/3 relative">
          <div class="overflow-hidden rounded-bl-[6rem] rounded-tr-[2rem] shadow-xl border-8 border-white relative z-10">
            <img src="/Aqvilia/3239_A row of human blood samples in a medical laboratory ready to be tested.webp" class="w-full h-auto object-cover" alt="Biological Sample Storage" />
          </div>
        </div>
      </section>

    </div>
  `},{name:"Clinical Trial Sample and Collection",desc:"Secure consent and sample tracking.",image:ni,layout:"html-content",htmlContent:`
    <div class="space-y-16 animate-fadeIn text-[#140B42]">
      
      <section>
        <p class="text-gray-700 leading-relaxed mb-6 max-w-6xl text-sm">
          For biomarker-driven clinical trials, patient samples are as important as patients themselves; critical decisions are dependent on sample analyses. However, current support for sample operations does not scale well with the increased volume and complexity of these trials. This reduces study team productivity, delays trial execution, and poses significant regulatory compliance risks.
        </p>
        <p class="text-gray-700 leading-relaxed mb-8 max-w-6xl text-sm italic font-medium">
          Finally, you can apply the same level of rigor in managing clinical trial samples as you do in managing the patients themselves.
        </p>
      </section>

      <section class="border-t border-gray-100 pt-12">
        <h2 class="text-[#140B42] text-3xl font-bold mb-6">Labmatrix® Overview</h2>
        <p class="text-gray-700 leading-relaxed mb-8 text-sm">
          Labmatrix is a technology-enabled solution for clinical trial sample and consent tracking. Utilized in 1000+ trials, it empowers study teams to monitor the health of clinical trials from a sample-centric perspective across the distributed ecosystem of sites, labs, vendors, and biobanks.
        </p>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-10">
          <div>
            <h3 class="text-[#140B42] text-xl font-bold mb-6">Solution Features</h3>
            <ul class="space-y-3">
              <li class="flex items-start gap-3 text-gray-700 text-sm">
                <span class="w-1.5 h-1.5 bg-[#0090d0] rounded-full mt-1.5 flex-shrink-0"></span> 
                Automated reconciliation of planned vs. actual biospecimen collection and shipment
              </li>
              <li class="flex items-start gap-3 text-gray-700 text-sm">
                <span class="w-1.5 h-1.5 bg-[#0090d0] rounded-full mt-1.5 flex-shrink-0"></span> 
                Up-to-date, virtual biospecimen tracking across network of clinical trial sites
              </li>
              <li class="flex items-start gap-3 text-gray-700 text-sm">
                <span class="w-1.5 h-1.5 bg-[#0090d0] rounded-full mt-1.5 flex-shrink-0"></span> 
                Notification on logistics details and resolution of operational issues
              </li>
              <li class="flex items-start gap-3 text-gray-700 text-sm">
                <span class="w-1.5 h-1.5 bg-[#0090d0] rounded-full mt-1.5 flex-shrink-0"></span> 
                100% user-configurable search and report on ALL data points
              </li>
              <li class="flex items-start gap-3 text-gray-700 text-sm">
                <span class="w-1.5 h-1.5 bg-[#0090d0] rounded-full mt-1.5 flex-shrink-0"></span> 
                Scalable data standardization and integration across multiple sources
              </li>
              <li class="flex items-start gap-3 text-gray-700 text-sm">
                <span class="w-1.5 h-1.5 bg-[#0090d0] rounded-full mt-1.5 flex-shrink-0"></span> 
                Computable patient consent for improved in-trial and future-use utilization
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-[#140B42] text-xl font-bold mb-6">Solution Benefits</h3>
            <ul class="space-y-3">
              <li class="flex items-start gap-3 text-gray-700 text-sm">
                <span class="w-1.5 h-1.5 bg-[#0090d0] rounded-full mt-1.5 flex-shrink-0"></span> 
                Reduce the risk of sample logistics becoming a bottleneck
              </li>
              <li class="flex items-start gap-3 text-gray-700 text-sm">
                <span class="w-1.5 h-1.5 bg-[#0090d0] rounded-full mt-1.5 flex-shrink-0"></span> 
                Acquire actionable insights into trial operations health
              </li>
              <li class="flex items-start gap-3 text-gray-700 text-sm">
                <span class="w-1.5 h-1.5 bg-[#0090d0] rounded-full mt-1.5 flex-shrink-0"></span> 
                Discover and resolve biospecimen problems earlier
              </li>
              <li class="flex items-start gap-3 text-gray-700 text-sm">
                <span class="w-1.5 h-1.5 bg-[#0090d0] rounded-full mt-1.5 flex-shrink-0"></span> 
                Ensure regulatory compliance with patient informed consent
              </li>
              <li class="flex items-start gap-3 text-gray-700 text-sm">
                <span class="w-1.5 h-1.5 bg-[#0090d0] rounded-full mt-1.5 flex-shrink-0"></span> 
                Extend utilization of banked samples beyond the current study
              </li>
              <li class="flex items-start gap-3 text-gray-700 text-sm">
                <span class="w-1.5 h-1.5 bg-[#0090d0] rounded-full mt-1.5 flex-shrink-0"></span> 
                Reduce sample storage costs and optimize capacity
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="bg-gray-50 -mx-6 md:-mx-12 px-6 md:px-12 py-16 border-y border-gray-100 flex flex-col lg:flex-row items-center gap-12">
        <div class="w-full lg:w-2/3">
          <h2 class="text-[#140B42] text-3xl font-bold mb-6">Minimize Lag Time</h2>
          <p class="text-gray-700 text-sm leading-relaxed mb-6">
            Prior to your study's regulatory submission, instead of having to wait for the usual 1 - 3 months period after database lock due to sample reconciliation efforts, Labmatrix enables your team to reconcile samples on an ongoing basis.
          </p>
          <div class="p-6 bg-white border-l-4 border-[#0090d0] shadow-sm rounded-r-xl">
             <p class="text-[#140B42] font-bold italic">
               Labmatrix eliminates the lag time attributed to sample verification, accelerating your path to submission.
             </p>
          </div>
        </div>
        <div class="w-full lg:w-1/3">
          <div class="overflow-hidden rounded-bl-[6rem] rounded-tr-[2rem] shadow-xl border-8 border-white relative">
            <img src="/Aqvilia/geneomics.png" class="w-full h-auto object-cover" alt="Clinical trial sample reconciliation" />
          </div>
        </div>
      </section>

    </div>
  `},{name:"Decentralized Clinical Laboratory Solutions",image:hd,heroSubtitle:"Prioritizing patient care through hybrid and fully remote laboratory solutions that enhance patient-centered clinical trials.",desc:"Direct-to-patient and home healthcare support.",layout:"html-content",htmlContent:`
    <div class="space-y-16 animate-fadeIn text-[#140B42]">
      
      <section>
        <p class="text-gray-700 leading-relaxed mb-6 max-w-6xl text-sm">
          In the context of today's environment, hybrid and decentralized clinical trial models are becoming increasingly prevalent. Methods such as remote recruitment and data collection, options for collecting samples close to or at home, and connected devices make it easier for patients, caregivers, and study staff to take part in clinical trials.
        </p>
        <p class="text-gray-700 leading-relaxed mb-6 max-w-6xl text-sm">
          At AQLIVIA Laboratories, our decentralized clinical laboratory solutions deliver the same quality of service as our central laboratory services but with a decentralized approach, including the necessary logistical and operational support required to conduct research remotely.
        </p>
      </section>

      <div class="space-y-12">
        
        <section class="border-t border-gray-100 pt-10">
          <h2 class="text-[#140B42] text-3xl font-bold mb-4">Self-Collection of Specimens</h2>
          <p class="text-gray-700 text-sm leading-relaxed mb-4">
            Self-collection of specimens involves sending specimen collection devices directly to patients. Patients collect their own specimens and send the devices with the specimens to a laboratory for testing. At AQLIVIA Laboratories, we are partnering with several self-collection device manufacturers to build a validated menu to support these collection modalities.
          </p>
        </section>

        <section class="border-t border-gray-100 pt-10">
          <h2 class="text-[#140B42] text-3xl font-bold mb-4">Point-of-Care Testing</h2>
          <p class="text-gray-700 text-sm leading-relaxed mb-4">
            Incorporation of laboratory point of care testing (POCT) testing in clinical trials is increasing. POCT devices have been deployed at investigator sites to screen and enroll a patient in a single visit, help reduce screen failure rates via a pre-screening step, and provide for results more rapidly than local labs. We have connected POCT devices to our central laboratory systems to enable viewing of laboratory reports by medical monitors and data transfers to study teams.
          </p>
        </section>

        <section class="border-t border-gray-100 pt-10">
          <h2 class="text-[#140B42] text-3xl font-bold mb-4">Mobile Specimen Collection</h2>
          <p class="text-gray-700 text-sm leading-relaxed mb-4">
            To support decentralized trials, and to enable convenience for patients, we have partnered with mobile nurse and phlebotomy companies to support in-home specimen collection, as well as specimen collection at partner patient service centers (PSCs). We have managed laboratory testing for dozens of studies utilizing Near Patient Collection services across many therapeutic areas.
          </p>
        </section>

        <section class="border-t border-gray-100 pt-10">
          <h2 class="text-[#140B42] text-3xl font-bold mb-4">Direct to Patient (DTP) Kit Shipments</h2>
          <p class="text-gray-700 text-sm leading-relaxed mb-6">
            As self-collection and home healthcare become more prevalent in clinical trials, so does the interest in shipping specimen collection kits directly to patients' homes. The AQLIVIA Laboratories DTP Kit Distribution service enables specimen collection kits to be shipped directly to patients on behalf of clinical trial investigators, while taking great care to properly manage sensitive patient protected health information (PHI).
          </p>
        </section>

      </div>

      <section class="bg-[#140B42] -mx-6 md:-mx-12 px-6 md:px-12 py-12 text-center rounded-sm">
        <h2 class="text-white text-2xl font-bold mb-6">Explore our Near Patient Collection services</h2>
        <div class="flex flex-wrap justify-center gap-4">
          <a href="/Aqvilia/contact" class="inline-block bg-[#0090d0] text-white px-8 py-3 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-[#007bb5] transition-colors shadow-lg">
            Learn More
          </a>
        </div>
      </section>

    </div>
  `},{name:"Flow Cytometry",image:nw,heroSubtitle:"Unique high parameter flow cytometry services implemented with customizable solutions designed to meet clinical trial needs across the globe.",desc:"Advanced cellular analysis and immune monitoring.",layout:"html-content",htmlContent:`
    <div class="space-y-16 animate-fadeIn text-[#140B42]">
      
      <section>
        <p class="text-gray-700 leading-relaxed mb-6 max-w-6xl text-sm">
          With an exponential growth in the area of personalized medicine and in particular immuno-oncology, AQLIVIA Laboratories is a leader of flow cytometry companies with the largest global footprint for flow cytometry services. We utilize innovative technology that provides high quality high parameter data with minimal variability and continuous improvement efficiency initiatives to meet customers' individual study needs.
        </p>
      </section>

      <section class="border-t border-gray-100 pt-12">
        <h2 class="text-[#140B42] text-3xl font-bold mb-6">Next Generation Flow Cytometry</h2>
        <p class="text-gray-700 leading-relaxed mb-6 text-sm">
          AQLIVIA has adopted next generation flow cytometry systems in our seven laboratories around the globe covering North America, Europe, Asia Pacific, and China. Through a multi-year collaboration with Cytek™ Biosciences, the Cytek 5 Laser Aurora instrument was selected to greatly enhance our services. 
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 bg-sky-50 p-8 rounded-2xl border border-sky-100">
           <div>
              <h4 class="font-bold text-[#140B42] mb-3 text-sm uppercase tracking-wider">Aurora Platform Advantages:</h4>
              <ul class="space-y-2">
                <li class="flex items-start gap-2 text-gray-700 text-xs">
                  <span class="w-1 h-1 bg-[#0090d0] rounded-full mt-1.5 flex-shrink-0"></span> Full spectrum sensitivity (375 nM-1000 nM)
                </li>
                <li class="flex items-start gap-2 text-gray-700 text-xs">
                  <span class="w-1 h-1 bg-[#0090d0] rounded-full mt-1.5 flex-shrink-0"></span> Unsurpassed multiplexing capability
                </li>
                <li class="flex items-start gap-2 text-gray-700 text-xs">
                  <span class="w-1 h-1 bg-[#0090d0] rounded-full mt-1.5 flex-shrink-0"></span> High data acquisition rates with no loss in resolution
                </li>
              </ul>
           </div>
           <div>
              <h4 class="font-bold text-[#140B42] mb-3 text-sm uppercase tracking-wider">Analysis & Reporting:</h4>
              <p class="text-gray-700 text-xs leading-relaxed">
                OMIQ cloud-based software was selected for high parameter data analysis and reporting. OMIQ offers a highly flexible modular workflow, traditional analysis capabilities, and an extensive number of well-integrated high parameter analysis algorithms.
              </p>
           </div>
        </div>
      </section>

      <section class="grid grid-cols-1 lg:grid-cols-2 gap-12 py-10">
        <div>
          <h2 class="text-[#140B42] text-2xl font-bold mb-4">Custom Panel Design Services</h2>
          <p class="text-gray-700 text-sm leading-relaxed">
            We provide custom panel design for the BD FACSCanto and Cytek Aurora Instruments. Unique and extensive knowledge and experience-based design capability is utilized for the construction of instrument-specific fit-for-purpose panels.
          </p>
        </div>
        <div>
          <h2 class="text-[#140B42] text-2xl font-bold mb-4">Reporting Automation</h2>
          <p class="text-gray-700 text-sm leading-relaxed">
            We automated our result reporting process via a proprietary information management software system. This project coincided with our global implementation of the next generation Cytek™ Aurora platform, which generates considerably more data than traditional flow cytometers.
          </p>
        </div>
      </section>

      <section class="bg-gray-50 -mx-6 md:-mx-12 px-6 md:px-12 py-16 border-y border-gray-100 text-center">
        <h2 class="text-[#140B42] text-3xl font-bold mb-10 max-w-4xl mx-auto">Our Integrated Flow Cytometry Team includes Translational Science, Clinical Laboratory, and Global Cytometry Teams</h2>
        
        <div class="max-w-4xl mx-auto flex flex-col items-center gap-8">
           <div class="w-full max-w-sm bg-[#89a8c4] text-white p-6 rounded-lg shadow-md border-b-4 border-[#6e8ca8]">
              <h3 class="font-bold text-lg uppercase">Translational Science</h3>
              <p class="text-sm opacity-90">Assay design, validation and release</p>
           </div>
           
           <div class="w-full h-12 bg-[url('/Aqvilia/grid-pattern.webp')] opacity-20"></div>

           <div class="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              <div class="bg-[#b4c7d9] text-[#140B42] p-6 rounded-lg border-b-4 border-[#93abbf]">
                <h3 class="font-bold uppercase">Clinical Laboratory</h3>
                <p class="text-sm opacity-80">Clinical sample analysis</p>
              </div>
              <div class="bg-[#b4c7d9] text-[#140B42] p-6 rounded-lg border-b-4 border-[#93abbf]">
                <h3 class="font-bold uppercase">Global Cytometry</h3>
                <p class="text-sm opacity-80">Study oversight and technical support</p>
              </div>
           </div>
        </div>
      </section>

      <section class="py-12">
        <h2 class="text-[#140B42] text-2xl font-bold mb-6">Flow Cytometry and Immunoassays for Immuno-Oncology Biomarkers:</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div class="flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-xl shadow-sm">
             <span class="w-2 h-2 bg-[#0090d0] rounded-full"></span>
             <span class="text-sm text-gray-700">Immuno-Phenotyping</span>
          </div>
          <div class="flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-xl shadow-sm">
             <span class="w-2 h-2 bg-[#0090d0] rounded-full"></span>
             <span class="text-sm text-gray-700">Receptor Occupancy</span>
          </div>
          <div class="flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-xl shadow-sm">
             <span class="w-2 h-2 bg-[#0090d0] rounded-full"></span>
             <span class="text-sm text-gray-700">TILs</span>
          </div>
          <div class="flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-xl shadow-sm">
             <span class="w-2 h-2 bg-[#0090d0] rounded-full"></span>
             <span class="text-sm text-gray-700">Intracellular Cytokine Survey</span>
          </div>
          <div class="flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-xl shadow-sm">
             <span class="w-2 h-2 bg-[#0090d0] rounded-full"></span>
             <span class="text-sm text-gray-700">Minimal Residual Disease (MRD)</span>
          </div>
          <div class="flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-xl shadow-sm">
             <span class="w-2 h-2 bg-[#0090d0] rounded-full"></span>
             <span class="text-sm text-gray-700">Circulating Soluble Proteins</span>
          </div>
        </div>
      </section>

    </div>
  `},{name:"Anatomic Pathology",image:lw,heroSubtitle:"Proven Anatomic Pathology for Complex Clinical Trials — where digital tools enhance, but do not replace, human expertise.",desc:"Comprehensive tissue analysis and diagnostics.",layout:"html-content",htmlContent:`
    <div class="space-y-16 animate-fadeIn text-[#140B42]">
      
      <section>
        <p class="text-gray-700 leading-relaxed mb-6 max-w-6xl text-sm">
          While digital tools enable greater speed, scalability, and remote access, our roots in anatomic pathology remain essential to the accuracy and integrity of every trial we support. AQLIVIA Laboratories offers globally harmonized anatomic pathology services that span the full spectrum—from routine histology and immunohistochemistry to complex multiplex IHC and companion diagnostics. 
        </p>
        <p class="text-gray-700 leading-relaxed mb-8 max-w-6xl text-sm">
          With decades of experience and CAP-accredited labs across the Americas, Europe, and Asia-Pacific, our teams are built for scale without compromising on scientific rigor. Each study benefits from customized workflows based on tissue and tumor type, staining protocols, and assay requirements, with direct oversight from our 40 board-certified pathologists representing key subspecialties.
        </p>
      </section>

      <section class="py-12 border-t border-gray-100 text-center">
        <h2 class="text-[#140B42] text-3xl font-bold mb-10 max-w-2xl mx-auto">Advance your research with proven anatomic pathology expertise</h2>
        <div class="flex flex-col md:flex-row justify-center items-center gap-12 relative">
         <div class="flex flex-col items-center group cursor-pointer">
   <div class="w-20 h-20 rounded-full border-2 border-gray-100 flex items-center justify-center mb-4 group-hover:border-[#0090d0] group-hover:bg-sky-50 transition-all duration-300 shadow-sm">
      <img 
        src="/Aqvilia/histology-on-icon-p.webp" 
        alt="Histology Services" 
        class="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
      />
   </div>
   <p class="font-bold text-[11px] md:text-sm uppercase tracking-widest text-center leading-tight">
     Histology<br/>Services
   </p>
</div>
<div class="flex flex-col items-center group cursor-pointer">
   <div class="w-20 h-20 rounded-full border-2 border-gray-100 flex items-center justify-center mb-4 group-hover:border-[#0090d0] group-hover:bg-sky-50 transition-all duration-300 shadow-sm">
      <img 
        src="/Aqvilia/pathology-on-icon-p.webp" 
        alt="pathology Services" 
        class="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
      />
   </div>
   <p class="font-bold text-[11px] md:text-sm uppercase tracking-widest text-center leading-tight">
     pathology<br/>Services
   </p>
</div>

<div class="flex flex-col items-center group cursor-pointer">
   <div class="w-20 h-20 rounded-full border-2 border-gray-100 flex items-center justify-center mb-4 group-hover:border-[#0090d0] group-hover:bg-sky-50 transition-all duration-300 shadow-sm">
      <img 
        src="/Aqvilia/cdx-on-icon-p.webp" 
        alt="Companion Diagnostics" 
        class="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
      />
   </div>
   <p class="font-bold text-[11px] md:text-sm uppercase tracking-widest text-center leading-tight">
     Companion<br/>Diagnostics (CDx)
   </p>
</div>
        </div>
      </section>

      <section class="flex flex-col lg:flex-row items-center gap-16 py-16 border-y border-gray-100">
        <div class="w-full lg:w-1/2">
          <h2 class="text-[#140B42] text-3xl font-bold mb-6">Oncology & Biomarker Specialization</h2>
          <p class="text-gray-600 mb-8 leading-relaxed text-sm">
            From PD-L1 scoring to complex multiplex tissue biomarker analysis, our anatomic pathology experts play a critical role in advancing oncology research and beyond. We support multiplex IHC, allowing multiple markers to be evaluated from minimal tissue, whether your needs are exploratory or part of a companion diagnostic submission.
          </p>
          <h4 class="font-bold text-[#140B42] mb-4 text-xs uppercase tracking-widest">Supporting biomarker development:</h4>
          <ul class="space-y-3">
            <li class="flex items-start gap-2 text-gray-700 text-xs">
              <span class="w-1.5 h-1.5 bg-[#0090d0] rounded-full mt-1 flex-shrink-0"></span> PD-L1 IHC and other predictive tissue biomarkers
            </li>
            <li class="flex items-start gap-2 text-gray-700 text-xs">
              <span class="w-1.5 h-1.5 bg-[#0090d0] rounded-full mt-1 flex-shrink-0"></span> Tumor-infiltrating lymphocyte (TIL) evaluation
            </li>
            <li class="flex items-start gap-2 text-gray-700 text-xs">
              <span class="w-1.5 h-1.5 bg-[#0090d0] rounded-full mt-1 flex-shrink-0"></span> Multiplex IHC development in collaboration with Ultivue for exploratory endpoints
            </li>
            <li class="flex items-start gap-2 text-gray-700 text-xs">
              <span class="w-1.5 h-1.5 bg-[#0090d0] rounded-full mt-1 flex-shrink-0"></span> Pathologist-guided sample selection for molecular testing, ctDNA, and NGS
            </li>
          </ul>
        </div>
        
        <div class="w-full lg:w-1/2 relative">
          <div class="overflow-hidden rounded-bl-[6rem] rounded-tr-[2rem] shadow-2xl border-8 border-white relative z-10">
            <img src="/Aqvilia/3239_A row of human blood samples in a medical laboratory ready to be tested.webp" class="w-full h-auto object-cover" alt="Oncology and Biomarker research" />
          </div>
          <div class="absolute -bottom-6 -left-6 w-32 h-32 bg-sky-50 rounded-full -z-0"></div>
        </div>
      </section>

      <section class="grid grid-cols-1 lg:grid-cols-2 gap-16 py-12">
        <div class="space-y-6">
          <h2 class="text-[#140B42] text-3xl font-bold">Digital Pathology Innovation</h2>
          <p class="text-gray-700 text-sm leading-relaxed mb-4 font-bold italic">A Digitized Approach for Faster, More Accurate Decision-Making</p>
          <p class="text-gray-700 text-sm leading-relaxed">
            Each site is equipped with identical infrastructure and has undergone end-to-end validation to ensure reproducible, regulatory-ready results—whether for exploratory research or registrational non-CDx submission.
          </p>
          <div class="bg-gray-50 p-6 rounded-xl border border-gray-100">
             <h4 class="font-bold text-[#140B42] mb-3 text-xs uppercase tracking-widest">Key Capabilities:</h4>
             <ul class="space-y-2">
                <li class="text-gray-600 text-xs"><strong>Image Acquisition:</strong> Epredia 3DHISTECH Pannoramic 250 (brightfield and fluorescent) and Leica AT2 (brightfield) scanners</li>
                <li class="text-gray-600 text-xs"><strong>SlideMaster Conversion:</strong> Supports over 90% of file formats and unifies into one file format enhancing flexibility</li>
                <li class="text-gray-600 text-xs"><strong>Remote Pathologist Workstations:</strong> Barco medical-grade monitors for high-resolution review, configured for in-lab and remote access</li>
                <li class="text-gray-600 text-xs"><strong>Image Management System:</strong> Proscia Concentriq L5 platform for study-specific image repositories</li>
                <li class="text-gray-600 text-xs"><strong>Validation and Compliance:</strong> Full validation per CAP guidelines for IHC and H&E digital interpretation</li>
             </ul>
          </div>
        </div>
        
        <div class="space-y-6">
          <h2 class="text-[#140B42] text-3xl font-bold">AI Driven Image Analysis Ecosystem</h2>
          <p class="text-gray-700 text-sm leading-relaxed mb-4">
            AQLIVIA has built a flexible, best-in-class ecosystem of partners to ensure the right tools are applied to each study. Our "quiver of arrows" approach gives sponsors access to a broad range of validated solutions tailored to unique clinical needs.
          </p>
          <div class="bg-sky-50 p-6 rounded-xl border border-sky-100">
             <h4 class="font-bold text-[#140B42] mb-3 text-xs uppercase tracking-widest">Strategic Partnerships:</h4>
             <div class="grid grid-cols-2 gap-x-4 gap-y-1">
                <p class="text-gray-600 text-[10px]">• Aiforia</p>
                <p class="text-gray-600 text-[10px]">• Nucleai</p>
                <p class="text-gray-600 text-[10px]">• Flagship Biosciences</p>
                <p class="text-gray-600 text-[10px]">• OracleBio</p>
                <p class="text-gray-600 text-[10px]">• HistoIndex</p>
                <p class="text-gray-600 text-[10px]">• PaigeAI</p>
                <p class="text-gray-600 text-[10px]">• Lunit</p>
                <p class="text-gray-600 text-[10px]">• PathAI</p>
                <p class="text-gray-600 text-[10px]">• MindPeak</p>
                <p class="text-gray-600 text-[10px]">• Ultivue</p>
                <p class="text-gray-600 text-[10px]">• Visiopharm</p>
             </div>
          </div>
          <div class="p-4 border-l-4 border-[#0090d0] bg-gray-50">
             <h4 class="font-bold text-[#140B42] text-xs uppercase mb-1">Integration Capabilities</h4>
             <p class="text-gray-500 text-[10px]">Our digital pathology platforms are designed for seamless compatibility with the Proscia Concentriq image management system, allowing for efficient organization and collaboration.</p>
          </div>
        </div>
      </section>

      <section class="border-t border-gray-100 pt-16">
        <h2 class="text-[#140B42] text-3xl font-bold mb-6 text-center">Unified Digital + Anatomic Approach</h2>
        <div class="flex flex-col lg:flex-row gap-12 items-center">
          <div class="lg:w-1/2">
             <p class="text-gray-700 text-sm leading-relaxed mb-6">
                Digital innovation doesn't replace pathology—it enhances it. At AQLIVIA Laboratories, our pathologist-centric model ensures that human expertise remains at the heart of image interpretation.
             </p>
             <h4 class="font-bold text-[#140B42] text-sm mb-4">Advancing Pathology Through Innovation:</h4>
             <ul class="space-y-3">
                <li class="flex items-center gap-3 text-gray-700 text-xs"><span class="w-1.5 h-1.5 bg-[#0090d0] rounded-full"></span> 2+1 adjudicatory model enabling collaborative review of complex cases</li>
                <li class="flex items-center gap-3 text-gray-700 text-xs"><span class="w-1.5 h-1.5 bg-[#0090d0] rounded-full"></span> Image augmentation for algorithm training across varied stain quality</li>
                <li class="flex items-center gap-3 text-gray-700 text-xs"><span class="w-1.5 h-1.5 bg-[#0090d0] rounded-full"></span> Foundation models built from large, diverse image datasets</li>
                <li class="flex items-center gap-3 text-gray-700 text-xs"><span class="w-1.5 h-1.5 bg-[#0090d0] rounded-full"></span> Ongoing fine-tuning of AI tools to align with clinical endpoints</li>
             </ul>
          </div>
          <div class="lg:w-1/2">
             <img src="/Aqvilia/public/2108_Colorful-particle-wave-and-data-sorting-flow-process.webp" class="rounded-2xl shadow-lg" alt="AI Neural Network Visual" />
          </div>
        </div>
      </section>

    </div>
  `},{name:"Companion Diagnostics",image:ni,heroSubtitle:"A laboratory partner with global experience for your CDx development",desc:"Fulfilling the promise of personalized medicine.",layout:"html-content",htmlContent:`
    <div class="space-y-16 animate-fadeIn text-[#140B42]">
      
      <section>
        <p class="text-gray-700 leading-relaxed mb-6 max-w-6xl text-sm">
          Companion Diagnostics (CDx) are assays required to be used before a specific therapy can be initiated, often co-developed alongside a therapeutic during its clinical development journey. AQLIVIA Laboratories has supported CDx assays for more than 12 years, continually enhancing technology, bioinformatics, regulatory, and clinical aspects to deliver successful programs.
        </p>
        <p class="text-gray-700 leading-relaxed mb-8 max-w-6xl text-sm">
          Global solutions are essential due to the increase in clinical development in China and challenging regulatory conditions on sample logistics. Our organization provides the appropriate structure and attributes to support extensive testing across multiple global sites.
        </p>
      </section>

      <section class="grid grid-cols-1 lg:grid-cols-2 gap-12 py-12 border-t border-gray-100">
        <div>
          <h2 class="text-[#140B42] text-3xl font-bold mb-6">Extensive CDx Track Record</h2>
          <p class="text-gray-700 text-sm leading-relaxed mb-6">
            We have generated lab data supporting multiple successful CDx submissions and more than 150 CDx clinical trials engagements across APAC, China, EMEA, and the US.
          </p>
          <div class="bg-sky-50 p-6 rounded-2xl border border-sky-100">
            <h4 class="font-bold text-[#140B42] mb-4 uppercase text-xs tracking-widest">Global Reach:</h4>
            <ul class="space-y-2">
              <li class="flex items-start gap-2 text-gray-700 text-xs">
                <span class="w-1 h-1 bg-[#0090d0] rounded-full mt-1.5 flex-shrink-0"></span> Experience in APAC, China, EMEA, and US markets
              </li>
              <li class="flex items-start gap-2 text-gray-700 text-xs">
                <span class="w-1 h-1 bg-[#0090d0] rounded-full mt-1.5 flex-shrink-0"></span> Harmonized CDx SOPs used globally across our labs
              </li>
              <li class="flex items-start gap-2 text-gray-700 text-xs">
                <span class="w-1 h-1 bg-[#0090d0] rounded-full mt-1.5 flex-shrink-0"></span> Principal Investigators at each wholly-owned facility
              </li>
            </ul>
          </div>
        </div>

        <div class="relative flex flex-col justify-center">
          <h3 class="text-xl font-bold mb-4">Expert Early Engagement</h3>
          <p class="text-gray-600 text-sm mb-6">
            Early interaction with our experts helps circumvent issues during development and provides a line of sight for commercial assay testing. We lead discussions on key topics, including:
          </p>
          <ul class="space-y-3">
             <li class="flex items-center gap-3 text-gray-700 text-xs">
               <span class="w-1.5 h-1.5 bg-[#0090d0] rounded-full"></span> Assay validation versus intended use
             </li>
             <li class="flex items-center gap-3 text-gray-700 text-xs">
               <span class="w-1.5 h-1.5 bg-[#0090d0] rounded-full"></span> Regulatory paths to enable approval
             </li>
             <li class="flex items-center gap-3 text-gray-700 text-xs">
               <span class="w-1.5 h-1.5 bg-[#0090d0] rounded-full"></span> Co-development strategy optimization
             </li>
          </ul>
        </div>
      </section>

      <section class="py-12 border-t border-gray-100">
        <h2 class="text-[#140B42] text-2xl font-bold mb-8 text-center">Regional Technology Breadth</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="p-6 bg-white border border-gray-100 rounded-xl shadow-sm text-center">
            <p class="text-[#0090d0] font-bold text-xs uppercase mb-2">APAC</p>
            <p class="text-gray-500 text-[10px]">IHC, FISH, NGS, Molecular, Protein</p>
          </div>
          <div class="p-6 bg-white border border-gray-100 rounded-xl shadow-sm text-center">
            <p class="text-[#0090d0] font-bold text-xs uppercase mb-2">China</p>
            <p class="text-gray-500 text-[10px]">IHC, FISH, NGS, Molecular, Protein</p>
          </div>
          <div class="p-6 bg-white border border-gray-100 rounded-xl shadow-sm text-center">
            <p class="text-[#0090d0] font-bold text-xs uppercase mb-2">EMEA</p>
            <p class="text-gray-500 text-[10px]">IHC, FISH, Molecular, Protein</p>
          </div>
          <div class="p-6 bg-white border border-gray-100 rounded-xl shadow-sm text-center">
            <p class="text-[#0090d0] font-bold text-xs uppercase mb-2">US</p>
            <p class="text-gray-500 text-[10px]">All Technologies Certified</p>
          </div>
        </div>
      </section>

      <section class="bg-gray-50 -mx-6 md:-mx-12 px-6 md:px-12 py-16 border-y border-gray-100 flex flex-col lg:flex-row items-center gap-12">
        <div class="w-full lg:w-1/2">
          <h2 class="text-[#140B42] text-3xl font-bold mb-6">Alternative CDx Models</h2>
          <p class="text-gray-700 text-sm leading-relaxed mb-6">
            While we support the traditional path of CDx development, a single-site premarket approval (ssPMA) model is increasingly considered within the industry to circumvent development risks. 
          </p>
          <div class="p-6 bg-white border-l-4 border-[#0090d0] shadow-sm rounded-r-xl">
             <p class="text-[#140B42] font-bold italic text-sm">
               Our experts provide recommendations for the best path—traditional or ssPMA—supported under our QSR infrastructure.
             </p>
          </div>
        </div>
        <div class="w-full lg:w-1/2 relative">
          <div class="overflow-hidden rounded-bl-[6rem] rounded-tr-[2rem] shadow-xl border-8 border-white relative z-10">
            <img src="/Aqvilia/geneomics.png" class="w-full h-auto object-cover" alt="Companion Diagnostics Lab" />
          </div>
          <div class="absolute -bottom-6 -right-6 w-32 h-32 bg-sky-50 rounded-full -z-0"></div>
        </div>
      </section>

    </div>
  `},{name:"Translational Sciences and Innovations",image:ni,heroSubtitle:"Bridging the gap between research and clinical application through emerging technologies.",desc:"Bridging the gap between research and clinical application.",layout:"html-content",htmlContent:`
    <div class="space-y-16 animate-fadeIn text-[#140B42]">
      
      <section>
        <p class="text-gray-700 leading-relaxed mb-6 max-w-6xl text-sm">
          In the rapidly evolving landscape of clinical development, AQLIVIA Laboratories is at the forefront of innovation, bridging the gap between pre-clinical research and early clinical trials. Our state-of-the-art Translational Science and Innovation Laboratory (TSAIL) is designed to accelerate drug development through early assay development and the adoption of emerging technologies.
        </p>
        
        <h3 class="text-xl font-bold mb-6">Benefits of working with TSAIL:</h3>
        <ul class="space-y-4">
          <li class="flex items-start gap-3 text-gray-700 text-sm">
            <span class="mt-2 w-1.5 h-1.5 bg-[#0090d0] rounded-full flex-shrink-0"></span>
            <span><strong>Accelerated Biomarker Discovery:</strong> Rapid deployment of predictive biomarkers from histopathologic diagnostics to multiplexed assessments.</span>
          </li>
          <li class="flex items-start gap-3 text-gray-700 text-sm">
            <span class="mt-2 w-1.5 h-1.5 bg-[#0090d0] rounded-full flex-shrink-0"></span>
            <span><strong>Cutting-Edge Platforms:</strong> Leverage a diverse portfolio including Cytek Aurora Spectral Flow Cytometers and Thermo Fisher Genexus Systems.</span>
          </li>
          <li class="flex items-start gap-3 text-gray-700 text-sm">
            <span class="mt-2 w-1.5 h-1.5 bg-[#0090d0] rounded-full flex-shrink-0"></span>
            <span><strong>Expert Collaboration:</strong> Work alongside experienced scientists, board-certified pathologists, and immunologists.</span>
          </li>
          <li class="flex items-start gap-3 text-gray-700 text-sm">
            <span class="mt-2 w-1.5 h-1.5 bg-[#0090d0] rounded-full flex-shrink-0"></span>
            <span><strong>Holistic AI/ML Integration:</strong> Advanced whole slide imaging analytics and digital image processing.</span>
          </li>
        </ul>
      </section>

      <section class="border-t border-gray-100 pt-12">
        <div class="bg-[#00629B] text-white p-4 text-center rounded-t-lg font-bold text-lg mb-8 uppercase tracking-widest">
          TSAIL Accelerating Biomarker Discovery
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <h4 class="font-bold text-[#00629B] mb-4 text-sm text-center">Anatomic and Digital Pathology</h4>
            <ul class="text-[11px] space-y-2 text-gray-600">
              <li>• Histopathologic diagnostics & morphometry</li>
              <li>• Single/multiplexed biomarker assessments</li>
              <li>• AI/ML assisted imaging analytics</li>
              <li>• Spatial RNA expression profiling</li>
            </ul>
          </div>

          <div class="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <h4 class="font-bold text-[#00629B] mb-4 text-sm text-center">Immune Monitoring</h4>
            <ul class="text-[11px] space-y-2 text-gray-600">
              <li>• Intracellular Cytokine Staining (ICS)</li>
              <li>• Multi-parametric ELISpot/FluoroSpot</li>
              <li>• Spectral Flow Cytometry & Cell Sorting</li>
              <li>• Novel assay development</li>
            </ul>
          </div>

          <div class="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <h4 class="font-bold text-[#00629B] mb-4 text-sm text-center">Knowledge Base</h4>
            <ul class="text-[11px] space-y-2 text-gray-600">
              <li>• Experienced biomarker scientists</li>
              <li>• Board-certified anatomic pathologists</li>
              <li>• ASCP certified flow scientists</li>
              <li>• Off-the-Shelf & custom informatics pipelines</li>
            </ul>
          </div>

          <div class="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <h4 class="font-bold text-[#00629B] mb-4 text-sm text-center">Molecular-Genetic Pathology</h4>
            <ul class="text-[11px] space-y-2 text-gray-600">
              <li>• Tissue & liquid DNA/RNA profiling</li>
              <li>• Clinical variant curation</li>
              <li>• Solid tumor molecular MRD</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="border-t border-gray-100 pt-12">
        <h2 class="text-[#140B42] text-2xl font-bold mb-8 text-center uppercase tracking-wider">Access a diverse Portfolio of capabilities and technology platforms</h2>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div class="bg-[#009688] text-white p-6 rounded-xl shadow-md">
            <h4 class="font-bold border-b border-white/30 pb-3 mb-4">Anatomic and Digital Pathology</h4>
            <ul class="text-[10px] space-y-3 opacity-90">
              <li>• FFPE tissue processing histology lab</li>
              <li>• End-to-end test oversight by board-certified pathologists</li>
              <li>• Open staining platforms (Leica Bond Rx, Ventana Discovery)</li>
              <li>• RNAScope and Nanostring GeoMX RNA profiling</li>
            </ul>
          </div>

          <div class="bg-[#009688] text-white p-6 rounded-xl shadow-md">
            <h4 class="font-bold border-b border-white/30 pb-3 mb-4">Immune Monitoring</h4>
            <ul class="text-[10px] space-y-3 opacity-90">
              <li>• Cytek Aurora® Spectral Flow Cytometers (64 parameter)</li>
              <li>• MabTech IRIS (ELISpot/FluoroSpot reader)</li>
              <li>• Meso Scale Discover (MSD) reader</li>
              <li>• Curiox Pluto cellular assay automation system</li>
            </ul>
          </div>

          <div class="bg-[#009688] text-white p-6 rounded-xl shadow-md">
            <h4 class="font-bold border-b border-white/30 pb-3 mb-4">Molecular-Genetic Pathology</h4>
            <ul class="text-[10px] space-y-3 opacity-90">
              <li>• Thermo Fisher Genexus System automated NGS</li>
              <li>• Oncomine Precision and Comprehensive FFPE panels</li>
              <li>• Liquid DNA/RNA NGS for tumor MRD (~0.1%)</li>
              <li>• Pathologist variant curation & clinical interpretation</li>
            </ul>
          </div>
        </div>
      </section>

    </div>
  `},{name:"Pediatric Laboratory Services",image:cg,heroSubtitle:"Treating each low-volume sample as if a life depends on it.",desc:"Specialized testing solutions for young patient populations.",layout:"html-content",htmlContent:`
    <div class="space-y-16 animate-fadeIn text-[#140B42]">
      
      <section>
        <p class="text-gray-700 leading-relaxed mb-6 max-w-6xl text-sm">
          New drugs intended for use in a pediatric population must be properly evaluated for use in pediatric patients. Pediatric subjects can respond to drugs differently than adults, and we are addressing both unique challenges in pediatric clinical trials and the needs of the patients. 
        </p>
        <p class="text-gray-700 leading-relaxed mb-8 max-w-6xl text-sm">
          Obtaining quality samples with enough volume for testing from very young subjects can be difficult. At AQLIVIA Laboratories, we have established policies and procedures specifically tailored for pediatric sample collection, handling, and testing to assure the best chance for reliable results on very low volume samples.
        </p>
      </section>

      <section class="border-t border-gray-100 pt-12">
        <h2 class="text-[#140B42] text-3xl font-bold mb-6">Pediatric Solutions: Precise Low Volume Blood Sample Requirements</h2>
        <p class="text-gray-700 leading-relaxed mb-6 text-sm">
          Our scientists use micro-sampling capabilities in our state-of-the-art chemistry, immunochemistry, and hematology analyzers to minimize overall serum or whole blood volume requirements.
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 bg-sky-50 p-8 rounded-2xl border border-sky-100">
           <div>
              <h4 class="font-bold text-[#140B42] mb-3 text-sm uppercase tracking-wider">Custom Chemistry Panels:</h4>
              <p class="text-gray-700 text-xs leading-relaxed">
                We have developed a unique 12-analyte short sample chemistry panel for sub-optimal volume samples. This includes critical value analytes as well as liver and kidney function safety markers, available for subjects younger than 7 years old.
              </p>
           </div>
           <div>
              <h4 class="font-bold text-[#140B42] mb-3 text-sm uppercase tracking-wider">Hematology Handling:</h4>
              <p class="text-gray-700 text-xs leading-relaxed">
                Trained laboratorians manually manipulate very low volume samples to obtain accurate CBC results when automated methods are restricted by volume.
              </p>
           </div>
        </div>
      </section>

      <section class="py-12 border-t border-gray-100">
        <h3 class="text-xl font-bold mb-6 text-center">Recommended minimum blood volumes by age group</h3>
        <div class="overflow-x-auto">
          <table class="w-full border-collapse border border-gray-200 text-sm">
            <thead class="bg-[#00629B] text-white">
              <tr>
                <th class="p-4 border border-gray-200">Patient Age Group</th>
                <th class="p-4 border border-gray-200">Chemistry Panel (Whole Blood)</th>
                <th class="p-4 border border-gray-200">Chemistry Panel (Serum)</th>
                <th class="p-4 border border-gray-200">Hematology (CBC)</th>
                <th class="p-4 border border-gray-200 text-sky-200">TOTAL Whole Blood Volume</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white">
                <td class="p-4 border border-gray-200 font-bold"> < 2 years old </td>
                <td class="p-4 border border-gray-200">1.1 mL</td>
                <td class="p-4 border border-gray-200">0.5 mL**</td>
                <td class="p-4 border border-gray-200">0.6 mL</td>
                <td class="p-4 border border-gray-200 font-bold text-[#00629B]">1.7 mL</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="p-4 border border-gray-200 font-bold"> 2 to 6 years old </td>
                <td class="p-4 border border-gray-200">2.6 mL</td>
                <td class="p-4 border border-gray-200">1.1 mL</td>
                <td class="p-4 border border-gray-200">1.2 mL</td>
                <td class="p-4 border border-gray-200 font-bold text-[#00629B]">3.8 mL</td>
              </tr>
              <tr class="bg-white">
                <td class="p-4 border border-gray-200 font-bold"> > 6 years old </td>
                <td class="p-4 border border-gray-200">3.5 mL</td>
                <td class="p-4 border border-gray-200">1.4 mL</td>
                <td class="p-4 border border-gray-200">2.0 mL</td>
                <td class="p-4 border border-gray-200 font-bold text-[#00629B]">5.5 mL</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-[10px] text-gray-500 mt-4 italic">**Minimum volume requirements — may not be enough to repeat/confirm abnormal results.</p>
      </section>

      <section class="flex flex-col lg:flex-row items-center gap-16 py-12 border-t border-gray-100">
        <div class="w-full lg:w-1/2">
          <h2 class="text-[#140B42] text-3xl font-bold mb-6">Specialized blood collection supplies</h2>
          <p class="text-gray-600 leading-relaxed mb-6 text-sm">
            We recommend using a system that combines a syringe and 23g butterfly needle together with evacuated blood tubes, allowing for gentle blood collection using controlled aspiration for difficult pediatric draws.
          </p>
          <div class="bg-gray-50 p-6 rounded-xl border-l-4 border-[#0090d0]">
             <h4 class="font-bold text-[#140B42] text-xs uppercase mb-2">Age-Specific Kits:</h4>
             <p class="text-gray-600 text-xs">Kits are configured based on age range (<2 years, 2-6 years, or 7-12 years) to optimize and minimize the amount of blood drawn based on test complexity.</p>
          </div>
        </div>
        
        <div class="w-full lg:w-1/2 relative">
          <div class="overflow-hidden rounded-full shadow-2xl border-[10px] border-white z-10 relative aspect-square">
            <img src="/Aqvilia/3239_A row of human blood samples in a medical laboratory ready to be tested.webp" class="w-full h-full object-cover" alt="Pediatric blood sample collection" />
          </div>
          <div class="absolute -bottom-6 -right-6 w-32 h-32 bg-sky-50 rounded-full -z-0"></div>
        </div>
      </section>

    </div>
  `}],pageContent:{subtitle:"Global Testing Standards",description:"Our Central Laboratories provide harmonized testing services across the globe, ensuring consistent data quality for multi-center clinical trials.",points:[{title:"Safety Testing",desc:"Comprehensive hematology, chemistry, and urinalysis panels."},{title:"Global Logistics",desc:"Seamless sample kit building and worldwide shipping logistics."},{title:"Real-Time Reporting",desc:"Online portal access for instant viewing of lab results."}]}},{id:"Genomics",title:"Genomics",name:"Genomics",type:"dropdown",path:"/services/Genomics",heroImage:"https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=60",shortDesc:"Genomic laboratory services to support drug discovery and precision medicine.",heroSubtitle:"Genomic laboratory services to support drug discovery and precision medicine.",htmlContent:`
      <div class="animate-fadeIn font-sans text-[#333] leading-relaxed">
        
        <section class="max-w-7xl mx-auto py-12 px-6 -mt-11">
          <p class="text-[15px] mb-12">
            Welcome to <span class="font-bold text-[#140B42]">AQLIVIA Laboratories Genomics</span>, where we specialize in providing state-of-the-art genomics laboratory services. Our team of experts utilizes the latest technology and techniques to offer comprehensive genomic testing and analysis. From genetic sequencing to personalized medicine, we are dedicated to advancing the field of genomics.
          </p>
  
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div class="border-2 border-[#0090d0] p-8 rounded-xl text-center">
              <h3 class="text-[#140B42] text-2xl font-black">Delivering 1.2 Petabytes</h3>
              <p class="text-gray-500 text-sm">of Genomic Data in 2024</p>
            </div>
            <div class="border-2 border-[#0090d0] p-8 rounded-xl text-center flex items-center justify-center">
              <h3 class="text-[#140B42] text-2xl font-black">50+ CDx projects</h3>
            </div>
            <div class="border-2 border-[#140B42] p-8 rounded-xl text-center">
              <h3 class="text-[#140B42] text-2xl font-black">Top 10 Pharmaceutical companies</h3>
              <p class="text-gray-500 text-sm">Extensive experience working with the top 10 pharmaceutical companies.</p>
            </div>
            <div class="border-2 border-[#0090d0] p-8 rounded-xl text-center">
              <h3 class="text-[#140B42] text-2xl font-black">125+ Top Biotech companies</h3>
              <p class="text-gray-500 text-sm">AQLIVIA Genomics has partnered with >125 leading/top biotech companies.</p>
            </div>
          </div>
          
          <div class="border-2 border-green-500 p-8 rounded-xl text-center">
            <h3 class="text-[#140B42] text-2xl font-black">20+ years of experience in Genomics testing</h3>
            <p class="text-gray-500 text-sm">Since 2001, we have been a recognized industry leader in genomic testing, setting the standard for quality and innovation.</p>
          </div>
        </section>
  
        <section class="max-w-7xl mx-auto py-12 px-6 bg-white">
          <h4 class="text-gray-500 text-[10px] uppercase font-bold tracking-widest mb-2">Genomics Laboratory Services</h4>
          <h2 class="text-[#140B42] text-3xl font-black mb-8 tracking-tight">
            Explore our state-of-the-art genomics laboratory, offering comprehensive services in oncology genomics, clinical genomics analysis, and more.
          </h2>
  
          <div class="space-y-4">
            <details class="group border border-gray-100 rounded-sm overflow-hidden">
              <summary class="list-none bg-[#005a8c] text-white p-4 flex justify-between items-center cursor-pointer font-bold uppercase text-xs tracking-widest hover:bg-[#004a75] transition-colors">
                <span>Anatomic pathology</span>
                <span class="text-lg transition-transform group-open:rotate-180">⌄</span>
              </summary>
              <div class="p-6 bg-gray-50 text-sm">
                <ul class="list-disc ml-5 space-y-1">
                  <li>Fresh tissue and FFPE capabilities</li>
                  <li>H&E creation/assessment and digital slide imaging available</li>
                  <li>Pathologists onsite</li>
                  <li>Located in USA, China, UK, and Singapore</li>
                </ul>
              </div>
            </details>
  
            <details class="group border border-gray-100 rounded-sm overflow-hidden">
              <summary class="list-none bg-[#005a8c] text-white p-4 flex justify-between items-center cursor-pointer font-bold uppercase text-xs tracking-widest hover:bg-[#004a75] transition-colors">
                <span>Isolations</span>
                <span class="text-lg transition-transform group-open:rotate-180">⌄</span>
              </summary>
              <div class="p-6 bg-gray-50 text-sm">
                <ul class="list-disc ml-5 space-y-1">
                  <li>DNA and RNA extraction capabilities from a large spectrum of original material, including FFPE, blood, tissue, cells, plasma, and saliva</li>
                  <li>Location availability in USA, China, UK, and Singapore</li>
                </ul>
              </div>
            </details>
  
            <details class="group border border-gray-100 rounded-sm overflow-hidden">
              <summary class="list-none bg-[#005a8c] text-white p-4 flex justify-between items-center cursor-pointer font-bold uppercase text-xs tracking-widest hover:bg-[#004a75] transition-colors">
                <span>Whole human genome sequencing</span>
                <span class="text-lg transition-transform group-open:rotate-180">⌄</span>
              </summary>
              <div class="p-6 bg-gray-50 text-sm">
                <ul class="list-disc ml-5 space-y-1">
                  <li>Optimized method for FFPE and intact material, using low input and minimal amplification</li>
                  <li>Illumina NovaSeq system available</li>
                  <li>Location availability in USA, China, and UK</li>
                </ul>
              </div>
            </details>
  
            <details class="group border border-gray-100 rounded-sm overflow-hidden">
              <summary class="list-none bg-[#005a8c] text-white p-4 flex justify-between items-center cursor-pointer font-bold uppercase text-xs tracking-widest hover:bg-[#004a75] transition-colors">
                <span>RNA sequencing</span>
                <span class="text-lg transition-transform group-open:rotate-180">⌄</span>
              </summary>
              <div class="p-6 bg-gray-50 text-sm">
                <ul class="list-disc ml-5 space-y-1">
                  <li>Globin removal method to remove globin mRNA from blood</li>
                  <li>Library preparation from both intact and degraded RNA from FFPE, blood, tissue, and cells</li>
                  <li>Hybridization-based method targeting the human transcriptome</li>
                  <li>Ribosomal RNA depletion method for degraded and non-coding RNA</li>
                  <li>Illumina NovaSeq system available</li>
                  <li>Location availability in USA, China, and UK</li>
                </ul>
              </div>
            </details>
  
            <details class="group border border-gray-100 rounded-sm overflow-hidden">
              <summary class="list-none bg-[#005a8c] text-white p-4 flex justify-between items-center cursor-pointer font-bold uppercase text-xs tracking-widest hover:bg-[#004a75] transition-colors">
                <span>Targeted sequencing</span>
                <span class="text-lg transition-transform group-open:rotate-180">⌄</span>
              </summary>
              <div class="p-6 bg-gray-50 text-sm">
                <ul class="list-disc ml-5 space-y-1">
                  <li>Library preparations from RNA/DNA from FFPE, blood, tissues, cells, and plasma</li>
                  <li>Hybridization-based methods targeting different panels of interest</li>
                  <li>NovaSeq system</li>
                  <li>Location availability in USA, China, and UK</li>
                </ul>
              </div>
            </details>
  
            <details class="group border border-gray-100 rounded-sm overflow-hidden">
              <summary class="list-none bg-[#005a8c] text-white p-4 flex justify-between items-center cursor-pointer font-bold uppercase text-xs tracking-widest hover:bg-[#004a75] transition-colors">
                <span>Single cell RNA sequencing</span>
                <span class="text-lg transition-transform group-open:rotate-180">⌄</span>
              </summary>
              <div class="p-6 bg-gray-50 text-sm">
                <ul class="list-disc ml-5 space-y-1">
                  <li>Simultaneous analysis of the transcriptome and cell surface proteome</li>
                  <li>Various assays including immune repertoire, surface protein profiling, and single-nucleus</li>
                  <li>10X Chromium and Illumina NovaSeq systems available</li>
                  <li>Location availability in USA</li>
                </ul>
              </div>
            </details>
  
            <details class="group border border-gray-100 rounded-sm overflow-hidden">
              <summary class="list-none bg-[#005a8c] text-white p-4 flex justify-between items-center cursor-pointer font-bold uppercase text-xs tracking-widest hover:bg-[#004a75] transition-colors">
                <span>PCR assays</span>
                <span class="text-lg transition-transform group-open:rotate-180">⌄</span>
              </summary>
              <div class="p-6 bg-gray-50 text-sm">
                <ul class="list-disc ml-5 space-y-1">
                  <li>Customizable probe amplification assays for different targets of interest</li>
                  <li>Multiple platforms for expression profiling, genotyping, and copy number analysis</li>
                  <li>ddPCR and qPCR systems available</li>
                  <li>Fluidigm system available at USA site</li>
                  <li>Location availability in USA, China</li>
                </ul>
              </div>
            </details>
  
            <details class="group border border-gray-100 rounded-sm overflow-hidden">
              <summary class="list-none bg-[#005a8c] text-white p-4 flex justify-between items-center cursor-pointer font-bold uppercase text-xs tracking-widest hover:bg-[#004a75] transition-colors">
                <span>Bioinformatics</span>
                <span class="text-lg transition-transform group-open:rotate-180">⌄</span>
              </summary>
              <div class="p-6 bg-gray-50 text-sm">
                <ul class="list-disc ml-5 space-y-1">
                  <li>A range of analyses to support all service lines</li>
                  <li>Custom analysis and algorithm development including biostatistics support</li>
                  <li>Standard pipeline analysis available globally (including China)</li>
                  <li>Location availability in USA (Centralized in RTP location)</li>
                </ul>
              </div>
            </details>
          </div>
        </section>
  
       
      </div>
    `,subItems:[{name:"Single Cell Sequencing",image:ni,heroSubtitle:"Accelerating research by exploring cellular heterogeneity, tracking population changes, and uncovering molecular interactions",desc:"Analyze gene expression at the individual cell level.",layout:"html-content",htmlContent:`
          <div class="space-y-16 animate-fadeIn text-[#140B42]">
            
            <section class="flex flex-col lg:flex-row gap-12 items-start">
              <div class="w-full lg:w-1/2">
                <h2 class="text-3xl font-bold mb-6 leading-tight">Uncovering Cellular Diversity to Advance Clinical and Translational Research</h2>
                <p class="text-gray-600 leading-relaxed mb-6">
                  Single cell sequencing is a next-generation sequencing method enabling in-depth characterization of biomolecules by uncovering genetic expression at single cell resolution. It has advantages over conventional bulk sequencing in its ability to detect rare cell types, uncover tumor heterogeneity, trace lineages, discover drug-resistant cell populations, and characterize complex cell populations such as immune cells in peripheral blood. 
                </p>
                <p class="text-gray-600 leading-relaxed mb-8">
                  AQLIVIA Laboratories utilizes leading technologies such as the 10x Genomics® Chromium™ and Illumina® NovaSeq™ platforms. We can meet your sequencing needs with our extensive services spanning the clinical research continuum combined with our global laboratory network and expert support team.
                </p>
                
                <div class="inline-flex items-center gap-6 border-2 border-[#140B42] rounded-xl p-6">
                  <div class="pr-6 border-r border-gray-300">
                     <span class="text-4xl font-black italic">10<span class="text-orange-500">x</span></span>
                     <p class="text-[10px] font-bold tracking-widest uppercase">Genomics</p>
                  </div>
                  <div>
                    <p class="text-2xl font-light tracking-tight">Certified</p>
                    <p class="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Global Clinical Research Organization</p>
                  </div>
                </div>
              </div>
      
              <div class="w-full lg:w-1/2 flex flex-col items-center">
                <p class="text-xs font-bold text-gray-400 mb-2 italic">t-SNE Projection of Cells Colored by Clustering</p>
                <img src="/Aqvilia/scr1.webp" class="w-full h-auto rounded-lg shadow-sm" alt="t-SNE Plot" />
              </div>
            </section>
      
            <section class="grid grid-cols-1 lg:grid-cols-2 gap-16 py-12 border-t border-gray-100">
              <div>
                <h3 class="text-xl font-bold mb-6 uppercase tracking-wide">AQLIVIA offers processing for the following sample types:</h3>
                <ul class="space-y-3">
                  <li class="flex items-center gap-3 text-gray-600"><span class="w-1.5 h-1.5 bg-blue-400 rounded-full"></span> Cryopreserved PBMCs</li>
                  <li class="flex items-center gap-3 text-gray-600"><span class="w-1.5 h-1.5 bg-blue-400 rounded-full"></span> Cryopreserved BMMCs</li>
                  <li class="flex items-center gap-3 text-gray-600"><span class="w-1.5 h-1.5 bg-blue-400 rounded-full"></span> Fixed single-cell suspensions</li>
                  <li class="flex items-center gap-3 text-gray-600"><span class="w-1.5 h-1.5 bg-blue-400 rounded-full"></span> Fresh frozen tissues (snap-frozen and OCT embedded)</li>
                  <li class="flex items-center gap-3 text-gray-600"><span class="w-1.5 h-1.5 bg-blue-400 rounded-full"></span> Formalin-Fixed, Paraffin-Embedded (FFPE)</li>
                  <li class="flex items-center gap-3 text-gray-600"><span class="w-1.5 h-1.5 bg-blue-400 rounded-full"></span> Single-nucleus suspensions</li>
                </ul>
              </div>
              
              <div class="text-center">
                <h3 class="text-xl font-bold -mb-14">High Quality, High Throughput, High Satisfaction</h3>

  <div class="text-center p-6">
    <img 
      src="/Aqvilia/singlecell.webp" 
      alt="Single Cell Sequencing Platform" 
      class="w-40 h-40 md:w-124 md:h-114 object-contain drop-shadow-sm transition-transform -pt-6"
    />
  </div>
  
  <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white to-transparent opacity-50 rounded-full blur-xl"></div>
</div>
            </section>
      
            <section>
              <h2 class="text-2xl font-bold mb-14">Customizable Single-Cell Sequencing Solutions to Meet Your Research Needs</h2>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                <div class="group">
                  <img src="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=500" class="w-full h-48 object-cover rounded-xl mb-6 shadow-md transition-transform group-hover:scale-105" alt="RNA-Seq" />
                  <h4 class="text-xl font-bold mb-3">Single-Cell RNA-Seq</h4>
                  <p class="text-sm text-gray-500 leading-relaxed mb-6">Profile over 10,000 cells per sample with our single cell RNA sequencing assay. Our assay provides 3' or 5' digital gene expression using the Chromium microfluidic platform.</p>
                  <a href="/Aqvilia/contact" class="inline-block bg-[#0090d0] text-white px-6 py-2 rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-[#007bb5]">Learn More</a>
                </div>
      
                <div class="group">
                  <img src="https://images.unsplash.com/photo-1579154204601-01588f351e67?w=500" class="w-full h-48 object-cover rounded-xl mb-6 shadow-md transition-transform group-hover:scale-105" alt="Immune" />
                  <h4 class="text-xl font-bold mb-3">Single-Cell Immune Repertoire</h4>
                  <p class="text-sm text-gray-500 leading-relaxed mb-6">Expand on the information gathered from single cell processing with our immune repertoire assay. Target full-length paired T-cell receptor or B-cell immunoglobulin transcripts.</p>
                  <a href="/Aqvilia/contact" class="inline-block bg-[#0090d0] text-white px-6 py-2 rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-[#007bb5]">Learn More</a>
                </div>
      
                <div class="group">
                  <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500" class="w-full h-48 object-cover rounded-xl mb-6 shadow-md transition-transform group-hover:scale-105" alt="Cite-Seq" />
                  <h4 class="text-xl font-bold mb-3">Cite-Seq</h4>
                  <p class="text-sm text-gray-500 leading-relaxed mb-6">Incorporate cell surface protein detection and antigen specificity analysis in conjunction with gene expression and immune repertoire profiling.</p>
                  <a href="/Aqvilia/contact" class="inline-block bg-[#0090d0] text-white px-6 py-2 rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-[#007bb5]">Learn More</a>
                </div>
      
              </div>
            </section>
      
          </div>
        `,pagecontent:{subtitle:"Treating each low-volume sample as if a life depends on it"}},{name:"Visium Spatial Profiling",image:ni,heroSubtitle:"Combine whole transcriptome analysis with morphological context to uncover spatial insights.",desc:"Map gene expression directly onto tissue morphology.",layout:"html-content",htmlContent:`
          <div class="space-y-16 animate-fadeIn text-[#140B42]">
            
            <section class="max-w-5xl" >
              <p class="text-gray-600 leading-relaxed mb-4 xl:ml-30">
                Discover our spatial genomics services, providing detailed genomic mapping technologies and spatial transcriptomics analysis to uncover cellular interactions at unprecedented resolution. See how our services can enhance your biomedical research.
              </p>
              <p class="text-gray-600 leading-relaxed xl:ml-30 ">
                At AQLIVIA Labs Genomics, we are at the forefront of spatial genomics technology, offering innovative solutions for researchers and scientists. Our platform allows for in-depth analysis of spatial transcriptomics data, enabling single-cell analysis and spatial gene expression mapping. With our advanced techniques and data visualization tools, you can uncover new insights and drive groundbreaking research in the field of spatial genomics. Explore the possibilities with AQLIVIA Labs Genomics today.
              </p>
            </section>
      
            <section class="bg-gray-100 -mx-6 md:-mx-12 px-6 md:px-12 py-12 text-center rounded-sm">
              <h2 class="text-2xl font-bold mb-2">AQLIVIA Laboratories Spatial Genomics</h2>
              <p class="text-gray-600 mb-6">Resolving complexity with spatial applications in Oncology, Immunology, Developmental Biology, and Pathology.</p>
              <a href="/Aqvilia/contact#/contact" class="inline-block bg-[#0090d0] text-white px-8 py-3 rounded-full font-bold uppercase text-sm tracking-widest hover:bg-[#007bb5] transition-colors shadow-md">
                Request a Quote
              </a>
            </section>
      
            <section class="flex flex-col lg:flex-row gap-12 items-center py-10">
              <div class="w-full lg:w-1/2">
                <h2 class="text-3xl font-bold mb-6">Advance research with full biomarker continuum support and custom assay development</h2>
                <p class="text-gray-600 leading-relaxed mb-6">
                  Spatial sequencing is viewing a specific region within a tissue, then sequencing all transcripts found in that region. Spatial sequencing allows for the ability to map variation in gene expression across a tissue or region of interest.
                </p>
                <p class="text-gray-600 leading-relaxed">
                  AQLIVIA Laboratories utilizes leading technologies such as the Nanostring GeoMx® Digital Spatial Profiler (DSP). We can meet your spatial needs with our extensive services spanning the clinical research continuum combined with our global laboratory network and expert support team.
                </p>
              </div>
              <div class="w-full lg:w-1/2 text-center">
                <h3 class="text-xl font-bold mb-4">Scalable Spatial Sequencing Solutions</h3>
                <p class="text-xs text-gray-400 mb-6 font-medium uppercase tracking-widest">Nanostring Digital Spatial Profiler (DSP) GeoMx</p>
                <img src="/Aqvilia/spatial-genomics-machine.webp" class="w-full max-w-md mx-auto h-auto drop-shadow-2xl" alt="GeoMx Instrument" />
              </div>
            </section>
      
            <section class="border-t border-gray-100 pt-16">
              <h2 class="text-2xl font-bold mb-12 text-center">GeoMx RNA Assays: Profile the whole transcriptome from a single FFPE slide</h2>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                
                <div class="flex flex-col items-center">
                  <img src="/Aqvilia/human_transcriptome_icon.webp" class="w-32 h-32 mb-6" alt="Human Whole Transcriptome" />
                  <h4 class="text-lg font-bold mb-2">GeoMx® Human Whole Transcriptome Atlas</h4>
                  <p class="text-xs text-gray-500 leading-relaxed">
                    The GeoMx Human Whole Transcriptome Atlas (GeoMx Hu WTA) is designed for comprehensive profiling of spatial biology.
                  </p>
                </div>
      
                <div class="flex flex-col items-center">
                  <img src="/Aqvilia/immune_pathways_icon.webp" class="w-32 h-32 mb-6" alt="Immune Pathways" />
                  <h4 class="text-lg font-bold mb-2">GeoMx® Immune Pathways Panel</h4>
                  <p class="text-xs text-gray-500 leading-relaxed">
                    The GeoMx Immune Pathways Panel is designed for targeted profiling of the tumor microenvironment and tumor immune status.
                  </p>
                </div>
      
                <div class="flex flex-col items-center">
                  <img src="/Aqvilia/cancer_atlas_icon.webp" class="w-32 h-32 mb-6" alt="Cancer Transcriptome" />
                  <h4 class="text-lg font-bold mb-2">GeoMx® Cancer Transcriptome Atlas</h4>
                  <p class="text-xs text-gray-500 leading-relaxed">
                    Designed to profile over 1,800 RNA targets simultaneously with spatial resolution.
                  </p>
                </div>
      
              </div>
            </section>
      
          </div>
        `,pagecontent:{subtitle:"Resolving tissue complexity through high-resolution spatial transcriptomics."}},{name:"Tumor Mutational Burden (TMB)",image:ni,heroSubtitle:"A putative biomarker of response to checkpoint inhibitor therapy, supporting RUO and GCP applications.",desc:"Comprehensive immuno-oncology assay portfolio for precision medicine.",layout:"html-content",htmlContent:`
          <div class="space-y-16 animate-fadeIn text-[#140B42]">
            
            <section>
              <p class="text-gray-600 leading-relaxed mb-8">
                Tumor Mutational Burden (TMB) is a putative biomarker of response to checkpoint inhibitor therapy. Our TMB assay is a component of our comprehensive immuno-oncology assay portfolio and is available for RUO or GCP applications.
              </p>
              
              <h3 class="text-xl font-bold mb-6">Highlights:</h3>
              <ul class="space-y-4">
                <li class="flex items-start gap-3 text-gray-700">
                  <span class="mt-2 w-1.5 h-1.5 bg-[#0090d0] rounded-full flex-shrink-0"></span>
                  <span>TMB assay available in two formats: tumor-only specimens or matched tumor and germline control blood specimens.</span>
                </li>
                <li class="flex items-start gap-3 text-gray-700">
                  <span class="mt-2 w-1.5 h-1.5 bg-[#0090d0] rounded-full flex-shrink-0"></span>
                  <span>Based on validated WES assay targeting ~60Mb of coding region of the human genome.</span>
                </li>
                <li class="flex items-start gap-3 text-gray-700">
                  <span class="mt-2 w-1.5 h-1.5 bg-[#0090d0] rounded-full flex-shrink-0"></span>
                  <span>TMB tumor-only WES method modeled across multiple tumor indications.</span>
                </li>
                <li class="flex items-start gap-3 text-gray-700">
                  <span class="mt-2 w-1.5 h-1.5 bg-[#0090d0] rounded-full flex-shrink-0"></span>
                  <span>High quantitative precision (CV% ≤20%) for TMB >2, suitable for TMB analysis across a wide range of cancer indications.</span>
                </li>
              </ul>
            </section>
      
            <section class="overflow-x-auto py-8">
              <p class="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">AQLIVIA Laboratories Data Comparison</p>
              <table class="w-full border-collapse border border-gray-200 text-sm">
                <thead class="bg-gray-50 text-left">
                  <tr>
                    <th class="p-4 border border-gray-200 font-bold">AQLIVIA Laboratories</th>
                    <th class="p-4 border border-gray-200">1.5 <br/><span class="text-[10px] text-gray-400">(N=123)</span></th>
                    <th class="p-4 border border-gray-200">2.4 <br/><span class="text-[10px] text-gray-400">(N=38)</span></th>
                    <th class="p-4 border border-gray-200">2.4 <br/><span class="text-[10px] text-gray-400">(N=100)</span></th>
                    <th class="p-4 border border-gray-200">4.6 <br/><span class="text-[10px] text-gray-400">(N=64)</span></th>
                    <th class="p-4 border border-gray-200">8.7 <br/><span class="text-[10px] text-gray-400">(N=39)</span></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="p-4 border border-gray-200 font-bold">Published TMB²</td>
                    <td class="p-4 border border-gray-200">1.8 <br/><span class="text-[10px] text-gray-400">(N=220)</span></td>
                    <td class="p-4 border border-gray-200">2.5 <br/><span class="text-[10px] text-gray-400">(N=1456)</span></td>
                    <td class="p-4 border border-gray-200">2.7 <br/><span class="text-[10px] text-gray-400">(N=543)</span></td>
                    <td class="p-4 border border-gray-200">4.5 <br/><span class="text-[10px] text-gray-400">(N=7758)</span></td>
                    <td class="p-4 border border-gray-200">7.2 <br/><span class="text-[10px] text-gray-400">(N=80)</span></td>
                  </tr>
                </tbody>
              </table>
            </section>
      
            <section>
              <div class="bg-[#140B42] text-white p-4 text-center rounded-t-lg font-bold text-xl">
                TMB assay specifications
              </div>
              <table class="w-full border-collapse border border-gray-200 text-sm">
                <tbody>
                  <tr class="border-b border-gray-200">
                    <td class="p-4 bg-gray-50 font-bold w-1/3">Sample Types</td>
                    <td class="p-4">Tumor tissue (FFPE, fresh frozen or DNA specimens); Normal tissue optional</td>
                  </tr>
                  <tr class="border-b border-gray-200">
                    <td class="p-4 bg-gray-50 font-bold">DNA Requirements</td>
                    <td class="p-4">250 ng DNA</td>
                  </tr>
                  <tr class="border-b border-gray-200">
                    <td class="p-4 bg-gray-50 font-bold">Assay Method</td>
                    <td class="p-4">Whole Exome Sequencing</td>
                  </tr>
                  <tr class="border-b border-gray-200">
                    <td class="p-4 bg-gray-50 font-bold">System Compatibility</td>
                    <td class="p-4">NovaSeq™</td>
                  </tr>
                  <tr>
                    <td class="p-4 bg-gray-50 font-bold">Deliverables</td>
                    <td class="p-4">TMB score, FASTQ, BAM, annotated VCF files</td>
                  </tr>
                </tbody>
              </table>
            </section>
      
            <section class="flex flex-col lg:flex-row items-center gap-16 py-12 border-t border-gray-100">
              <div class="w-full lg:w-1/2">
                <h2 class="text-[#140B42] text-3xl font-bold mb-6">Immuno Assay Portfolio</h2>
                <p class="text-gray-600 leading-relaxed">
                  Our TMB assay is a component of our comprehensive immuno-oncology assay portfolio which includes other assays such as Immune Landscape Signature and Microsatellite Instability.
                </p>
              </div>
              
              <div class="w-full lg:w-1/2 relative">
                <div class="overflow-hidden rounded-b-[8rem] rounded-t-[2rem] shadow-2xl border-[10px] border-white z-10 relative">
                  <img src="/Aqvilia/3234_Liquid drop from pipette to test tube.webp" class="w-full h-auto object-cover" alt="Assay Portfolio" />
                </div>
                <div class="absolute -bottom-6 -right-6 w-32 h-32 bg-sky-50 rounded-full -z-0"></div>
              </div>
            </section>
      
          </div>
        `},{name:"Microsatellite Instability Assay",desc:"Detect MSI status for oncology research.",heroSubtitle:"Microsatellite instability (MSI) results from an accumulation of insertion or deletion of repeating units during DNA replication in tumor cells with a deficient mismatch repair (MMR) system. MSI status is associated with response/resistance to certain immune checkpoint inhibitors.",layout:"html-content",htmlContent:`
          <div class="animate-fadeIn font-sans">
      
            <section class="max-w-7xl mx-auto -py-6 px-6 md:px-12 space-y-8">
              <p class="text-gray-600 text-sm leading-relaxed">
                Microsatellite instability (MSI) results from an accumulation of insertion or deletion of repeating units during DNA replication in tumor cells with a deficient mismatch repair (MMR) system. MSI status is associated with response/resistance to certain immune checkpoint inhibitors.
              </p>
              <p class="text-gray-600 text-sm leading-relaxed border-l-4 border-[#140B42] pl-6 italic">
                AQVILIA MSI assay utilizes multiplex, fluorescent PCR and capillary electrophoresis to enable sensitive detection of five mononucleotide repeat markers (BAT-25, BAT-26, NR-21, NR-24 and MONO-27) in tumor FFPE specimens.
              </p>
      
              <div class="bg-white border border-gray-100 rounded-2xl p-8 flex justify-center shadow-sm">
                <img src="/Aqvilia/graph.webp" alt="MSI Chromatogram Visualization" class="max-w-full h-auto" />
              </div>
      
              <div class="overflow-hidden rounded-xl border border-gray-200 mt-12">
                <table class="w-full text-left border-collapse">
                  <thead>
                    <tr class="bg-[#140B42] text-white">
                      <th colspan="2" class="p-6 text-2xl font-black tracking-tight">MSI Assay Specifications</th>
                    </tr>
                  </thead>
                  <tbody class="text-sm">
                    <tr class="border-b border-gray-200">
                      <td class="p-5 font-bold bg-gray-50 w-64">Markers</td>
                      <td class="p-5 text-gray-700">BAT-25, BAT-26, MONO-27, NR-21, and NR-24 microsatellite loci</td>
                    </tr>
                    <tr class="border-b border-gray-200">
                      <td class="p-5 font-bold bg-gray-50 align-top">Specimen Requirements</td>
                      <td class="p-5 text-gray-700 leading-relaxed">
                        Tumor: 3 x 5um FFPE tumor slides or 3 curls or FFPE block or DNA. Minimum 20% neoplastic cellularity required. Normal: either whole blood (1-3 mL, K2EDTA) or tumor FFPE slides with clearly indicated normal tissue area.
                      </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                      <td class="p-5 font-bold bg-gray-50">Assay Method</td>
                      <td class="p-5 text-gray-700 font-medium">OncoMate® MSI Dx Analysis System</td>
                    </tr>
                    <tr class="border-b border-gray-200">
                      <td class="p-5 font-bold bg-gray-50">System Compatibility</td>
                      <td class="p-5 text-gray-700">Thermo Fisher Scientific SeqStudio Flex</td>
                    </tr>
                    <tr class="border-b border-gray-200">
                      <td class="p-5 font-bold bg-gray-50">Regulatory Tier</td>
                      <td class="p-5 text-gray-700 uppercase tracking-widest text-[10px] font-black">RUO, GCP, CAP CLIA</td>
                    </tr>
                    <tr>
                      <td class="p-5 font-bold bg-gray-50">Deliverables</td>
                      <td class="p-5 text-gray-700">MSI Status report. Exact number of MSI markers available as custom report.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        `},{name:"Oncomine Precision Assay",desc:"Rapid genomic profiling solution for precision oncology.",layout:"html-content",htmlContent:`
          <div class="animate-fadeIn font-sans text-[#140B42]">
            
            <section class="bg-gray-50 py-16 px-6 md:px-12 border-b border-gray-100">
              <div class="max-w-7xl mx-auto">
                <h1 class="text-4xl font-black mb-6 tracking-tight">Leading-Edge Pan-Cancer NGS Testing</h1>
                <p class="text-gray-600 text-sm leading-relaxed max-w-5xl">
                  Genomic profiling of a tumor to characterize clinically relevant variants has become critically important for cancer diagnosis and prognosis, as well as in driving therapeutic decision making. The Oncomine™ Precision Assay on the Ion Torrent™ Genexus™ Sequencer (OPAGX) is an amplicon-based automated next-generation sequencing (NGS) assay that enables quick turnaround genomic profiling of RNA and DNA biomarkers across 50 genes from solid tumor and liquid biopsy samples.
                </p>
              </div>
            </section>
      
            <section class="max-w-7xl mx-auto py-12 px-6">
              <h2 class="text-2xl font-black mb-8">Global Seamless NGS Solution for Minimal Sample Input</h2>
              
              <div class="flex border-b border-gray-200 mb-8 overflow-x-auto">
                <button class="px-8 py-3 border-b-4 border-[#0090d0] text-[#0090d0] font-black text-[10px] uppercase tracking-widest whitespace-nowrap">Focused Multi-Gene Panel</button>
                <button class="px-8 py-3 text-gray-400 font-bold text-[10px] uppercase tracking-widest whitespace-nowrap">Ion Ampliseq™ HD</button>
                <button class="px-8 py-3 text-gray-400 font-bold text-[10px] uppercase tracking-widest whitespace-nowrap">Genexus NGS System</button>
                <button class="px-8 py-3 text-gray-400 font-bold text-[10px] uppercase tracking-widest whitespace-nowrap">FFPE and Plasma</button>
              </div>
      
              <div class="max-w-4xl">
                <h3 class="text-xl font-black mb-4">Focused Multi-Gene Panel</h3>
                <p class="text-gray-600 text-sm leading-relaxed mb-12">
                  The Oncomine™ Precision Assay panel contains 50 genes and 2,769 unique variants, applicable to a wide range of tumor types for detection of SNV, Insertion-Deletion, Copy Number Alterations, and Fusions. FusionSync™ technology enables detection of novel fusions.
                </p>
              </div>
      
              <div class="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm mb-16">
                <div class="bg-[#78909c] text-white p-4 font-black italic text-sm italic">
                  DNA and RNA Biomarkers across 50 Genes
                </div>
                <div class="grid grid-cols-2 md:grid-cols-5 gap-0 border-t border-gray-200">
                  ${["AKT1","AKT2","AKT3","ALK","AR","ARAF","BRAF","CD274","CDK4","CDKN2A","CHEK2","CTNNB1","EGFR","ERBB2","ERBB3","ERBB4","ESR1","FGFR1","FGFR2","FGFR3","FGFR4","FLT3","GNA11","GNAQ","GNAS","HRAS","IDH1","IDH2","KIT","KRAS","MAP2K1","MAP2K2","MET","MTOR","NRAS","NRG1","NTRK1","NTRK2","NTRK3","NUTM1","PDGFRA","PIK3CA","PTEN","RAF1","RET","ROS1","RSPO2","RSPO3","SMO","TP53"].map(i=>`
                    <div class="border-b border-r border-gray-100 p-3 flex justify-between items-center text-[11px] font-bold">
                      <span>${i}</span>
                      <div class="flex gap-1">
                        <span class="text-sky-500">▲</span>
                        ${["EGFR","MET","FGFR1","KRAS"].includes(i)?'<span class="text-orange-500">■</span>':""}
                        ${["ALK","AR","BRAF","FGFR2","RET","ROS1","NTRK1"].includes(i)?'<span class="text-purple-500">●</span>':""}
                      </div>
                    </div>
                  `).join("")}
                </div>
                <div class="p-4 bg-gray-50 flex justify-center gap-6 text-[10px] font-black uppercase tracking-tighter">
                  <span class="flex items-center gap-1"><span class="text-sky-500">▲</span> DNA Hotspots</span>
                  <span class="flex items-center gap-1"><span class="text-orange-500">■</span> CNV</span>
                  <span class="flex items-center gap-1"><span class="text-purple-500">●</span> Fusions</span>
                </div>
              </div>
            </section>
      
            <section class="bg-gray-50 py-16 px-6">
              <div class="max-w-7xl mx-auto">
                <h2 class="text-2xl font-black mb-12">Pan-Cancer Clinical Research Application of Oncomine Precision Assay</h2>
                
                <div class="flex flex-col md:flex-row items-center gap-12 bg-white p-12 rounded-2xl border border-gray-200 shadow-sm">
                   <div class="w-64 h-64 md:w-80 md:h-80 relative">
                     <img src="/Aqvilia/chart.webp" class="w-full h-full object-contain" alt="Clinical Application Data" />
                   </div>
                   <div class="grid grid-cols-2 gap-x-8 gap-y-2 text-[10px] font-bold text-gray-500">
                     <span class="flex items-center gap-2"><div class="w-2 h-2 bg-sky-500"></div> Non-Small Cell Lung Cancer (35%)</span>
                     <span class="flex items-center gap-2"><div class="w-2 h-2 bg-blue-800"></div> Breast Cancer (14%)</span>
                     <span class="flex items-center gap-2"><div class="w-2 h-2 bg-blue-600"></div> Melanoma (11%)</span>
                     <span class="flex items-center gap-2"><div class="w-2 h-2 bg-indigo-500"></div> Gastric Cancer (8%)</span>
                     <span class="flex items-center gap-2"><div class="w-2 h-2 bg-green-500"></div> Bladder Cancer (5%)</span>
                     <span class="text-gray-400 italic mt-4">...and 15+ other indications</span>
                   </div>
                </div>
              </div>
            </section>
      
            <section class="max-w-7xl mx-auto py-20 px-6 space-y-24">
              <div>
                <h2 class="text-2xl font-black mb-4">Supporting Studies Around the World</h2>
                <p class="text-gray-600 text-sm leading-relaxed">
                  Our centralized scientific and operational oversight combined with our global laboratory footprint enables comprehensive, large-scale trial support. You will be supported every step of the way by our scientific project management team who will work with you to understand the most cost-effective recommendations to meet your specific needs.
                </p>
              </div>
      
              <div class="text-center">
                <h2 class="text-3xl font-black mb-16">Simplify your Work</h2>
                
                <div class="flex flex-col md:flex-row justify-between items-start gap-12 relative">
                  <div class="hidden md:block absolute top-10 left-0 w-full h-1 bg-gray-200 -z-10"></div>
                  
                  <div class="flex-1 flex flex-col items-center">
                    <div class="w-20 h-20 rounded-full bg-[#0090d0] text-white flex items-center justify-center text-2xl font-black mb-6 border-8 border-white shadow-xl italic">1</div>
                    <h4 class="text-lg font-black mb-2">Request a Quote</h4>
                    <p class="text-gray-400 text-xs">Request a quote today to discover how working with IQVIA can advance your research.</p>
                  </div>
      
                  <div class="flex-1 flex flex-col items-center">
                    <div class="w-20 h-20 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center text-2xl font-black mb-6 border-8 border-white shadow-xl italic">2</div>
                    <h4 class="text-lg font-black mb-2 text-gray-400">Ship Your Samples</h4>
                    <p class="text-gray-400 text-xs">Our global central laboratory network enables testing at a single site.</p>
                  </div>
      
                  <div class="flex-1 flex flex-col items-center">
                    <div class="w-20 h-20 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center text-2xl font-black mb-6 border-8 border-white shadow-xl italic">3</div>
                    <h4 class="text-lg font-black mb-2 text-gray-400">Get Your Results</h4>
                    <p class="text-gray-400 text-xs">Obtain in-depth data to understand gene expression, cell surface markers, immune cell repertoire, and much more.</p>
                  </div>
                </div>
      
                <div class="mt-20">
                  <button class="bg-[#0090d0] text-white px-10 py-4 rounded-full font-black uppercase text-xs tracking-widest hover:bg-sky-400 transition-all shadow-xl">
                    Request a Quote
                  </button>
                </div>
              </div>
            </section>
          </div>
        `},{name:"Genomics Lab Testing Quality",desc:"Rigorous quality control standards ensuring reliable data.",heroSubtitle:"Ensuring the highest level of quality through rigorous QMS and regulatory adherence.",type:"html-content",heroImage:"https://images.unsplash.com/photo-1579154273151-54637d451a44?w=1200",shortDesc:"Rigorous quality control standards ensuring reliable data.",htmlContent:`
          <div class="animate-fadeIn font-sans text-[#333] leading-relaxed">
            
            <section class="max-w-7xl mx:auto py-9 px-6  -mt-14 space-y-6 text-[15px]">
              <p>
                Our <span class="font-bold text-[#140B42]">Genomics Laboratory Testing Quality Management System (QMS)</span> is the cornerstone of our commitment to delivering accurate and reliable data to our clients. We adhere to regulatory requirements, industry standards, and best practices to ensure the highest level of quality in every test we perform.
              </p>
            </section>
      
            <section class="max-w-7xl mx-auto py-1 px-6 bg-white">
              <h2 class="text-[#140B42] text-2xl font-black mb-6 tracking-tight">Overview of quality activities</h2>
              <p class="text-sm text-gray-600 mb-8">Our QMS enables continuous organizational and process improvement by incorporating a set of coordinated activities designed to direct and control quality operations. These activities include:</p>
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
                <ul class="space-y-2 list-none text-sm">
                  <li class="flex items-center gap-2"><span class="w-1 h-1 bg-[#140B42] rounded-full"></span> Laboratory Quality</li>
                  <li class="flex items-center gap-2"><span class="w-1 h-1 bg-[#140B42] rounded-full"></span> Process and Document Management</li>
                  <li class="flex items-center gap-2"><span class="w-1 h-1 bg-[#140B42] rounded-full"></span> Data and Document Retention/Archival</li>
                  <li class="flex items-center gap-2"><span class="w-1 h-1 bg-[#140B42] rounded-full"></span> Change Management</li>
                  <li class="flex items-center gap-2"><span class="w-1 h-1 bg-[#140B42] rounded-full"></span> Quality Issue Management</li>
                  <li class="flex items-center gap-2"><span class="w-1 h-1 bg-[#140B42] rounded-full"></span> Equipment and Facilities Management</li>
                </ul>
                <ul class="space-y-2 list-none text-sm">
                  <li class="flex items-center gap-2"><span class="w-1 h-1 bg-[#140B42] rounded-full"></span> Training and Competency Management</li>
                  <li class="flex items-center gap-2"><span class="w-1 h-1 bg-[#140B42] rounded-full"></span> Computerized Systems</li>
                  <li class="flex items-center gap-2"><span class="w-1 h-1 bg-[#140B42] rounded-full"></span> Vendor Management</li>
                  <li class="flex items-center gap-2"><span class="w-1 h-1 bg-[#140B42] rounded-full"></span> Audit Management</li>
                  <li class="flex items-center gap-2"><span class="w-1 h-1 bg-[#140B42] rounded-full"></span> Purchasing and Inventory</li>
                  <li class="flex items-center gap-2"><span class="w-1 h-1 bg-[#140B42] rounded-full"></span> Customer Service and Customer Feedback Management</li>
                </ul>
              </div>
            </section>
      
            <section class="max-w-7xl mx-auto py-20 px-6">
              <div class="flex flex-col md:flex-row items-center gap-12">
                <div class="flex-1">
                   <h2 class="text-[#140B42] text-2xl font-black mb-6">Quality Control (QC) metrics & standards</h2>
                   <p class="text-sm text-gray-600 leading-relaxed">
                     To ensure data quality, we monitor several QC metrics and incorporate controls during sample processing. These practices are required as part of our CLIA compliant programs. They are also recommended in voluntary genomic data submissions to the FDA and are recognized best practices. Our efforts promote standardization initiatives including the External RNA Control Consortium (ERCC), MicroArray Quality Control (MAQC) and Sequencing Quality Control (SEQC) Consortiums.
                   </p>
                </div>
                <div class="flex-1 flex justify-center">
                  <div class="w-80 h-80 rounded-full border-8 border-gray-100 overflow-hidden shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=600" alt="Lab Scientist" class="w-full h-full object-cover">
                  </div>
                </div>
              </div>
            </section>
      
            
          </div>
        `},{name:"Client-Prepared Library Sequencing",desc:"Flexible sequencing for client-generated libraries.",heroSubtitle:"Accelerate your research with AQLIVIA Laboratories streamlined sequencing solution for client-prepared libraries.",htmlContent:`
    <div class="animate-fadeIn font-sans text-[#333] leading-relaxed">
      
      <section class="max-w-7xl mx-auto py-12 px-6  -mt-11 space-y-6 text-[15px]">
        <p>
          Accelerate your research with <span class="font-bold text-[#140B42]">AQLIVIA Laboratories</span> streamlined sequencing solution for client-prepared libraries. Whether you're working with genomic DNA, RNA, or single-cell libraries, our service is designed to deliver high-quality data with speed and precision.
        </p>
      </section>

      <section class="max-w-7xl mx-auto py-1 px-6 ">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div class="bg-[#e3f2fd] p-8 rounded-sm shadow-sm">
            <h3 class="text-[#140B42] text-sm font-black uppercase tracking-widest mb-6">What We Offer</h3>
            <ul class="space-y-4 text-[13px] leading-snug">
              <li><span class="font-bold">Compatibility:</span> Accepts Illumina-compatible libraries for whole-genome, exome, transcriptome, small RNA, and single-cell sequencing.</li>
              <li><span class="font-bold">Customization:</span> Choose your preferred platform, read length, and sequencing depth.</li>
              <li><span class="font-bold">Quality Control:</span> Includes library QC and size assessment to ensure optimal data quality.</li>
              <li><span class="font-bold">Fast Turnaround:</span> Rapid processing timelines to keep your project moving.</li>
              <li><span class="font-bold">Secure Delivery:</span> Data transferred securely via encrypted channels.</li>
            </ul>
          </div>

          <div class="bg-[#f1f8e9] p-8 rounded-sm shadow-sm">
            <h3 class="text-[#140B42] text-sm font-black uppercase tracking-widest mb-6">Ideal For</h3>
            <ul class="space-y-4 text-[13px] list-disc ml-4">
              <li>Academic and clinical researchers with in-house prep capabilities.</li>
              <li>Biotech and pharma teams needing scalable sequencing support.</li>
              <li>Projects requiring flexible sequencing parameters and fast delivery.</li>
            </ul>
          </div>

          <div class="bg-[#fff3e0] p-8 rounded-sm shadow-sm">
            <h3 class="text-[#140B42] text-sm font-black uppercase tracking-widest mb-6">Why AQLIVIA Laboratories?</h3>
            <ul class="space-y-4 text-[13px] list-disc ml-4">
              <li>Access to cutting-edge Illumina sequencing platforms including NovaSeq X Plus.</li>
              <li>Integrated bioinformatics support available upon request.</li>
              <li>Global harmonization and compliance with regulatory standards.</li>
            </ul>
          </div>

        </div>
      </section>

      
          
          
    </div>
  `}],pageContent:{subtitle:"Precision Medicine Solutions",description:"Advanced genomic testing and biomarker development services to support precision medicine and targeted therapy trials.",points:[{title:"Next-Gen Sequencing",desc:"Whole exome and targeted panel sequencing for mutation detection."},{title:"PCR Services",desc:"High-sensitivity qPCR and RT-PCR applications."},{title:"Bioinformatics",desc:"Comprehensive data analysis and variant calling."}]}},{id:"Discovery sciences",title:"Discovery science",type:"dropdown",path:"/services/Discovery Sciences",image:"https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2000",subtitle:"From Target to Lead",description:"Integrated research solutions spanning the early drug discovery continuum, helping you identify and validate the right targets faster.",subItems:[{name:"Discovery science",desc:"Robust assays to validate therapeutic targets.",htmlContent:`
    <div class="animate-fadeIn font-sans text-[#333] leading-relaxed">
      
      <section class="max-w-7xl mx-auto py-12 px-6 space-y-6  -mt-11 text-[15px]">
        <p>
          <span class="font-bold text-[#140B42]">AQLIVIA Laboratories</span> discovery focused labs deliver expertise to expedite the path from discovery to IND. Our labs bring expertise in protein production, antibody discovery, and immunogenicity to help you select the most promising candidates and reduce risk as you move toward IND enabling studies.
        </p>
        <p>
          Our scientists "think with you" to determine the best approach based on your goals. We apply the knowledge of our past experiences and deep expertise to your projects. Our collaborative approach helps you maximize resources and reduce development time.
        </p>
      </section>

      <section class="max-w-7xl mx-auto py-12 px-6 bg-white">
        <h2 class="text-[#140B42] text-3xl font-black mb-10 tracking-tight">
          Our Discovery Sciences include:
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div class="space-y-3">
            <h3 class="text-[#0090d0] text-xl font-bold">Protein Sciences</h3>
            <p class="text-sm text-gray-600">
              Optimized recombinant protein expression, purification, and characterization.
            </p>
          </div>

          <div class="space-y-3">
            <h3 class="text-[#0090d0] text-xl font-bold">Specifica</h3>
            <p class="text-sm text-gray-600">
              Antibody discovery campaigns, exclusive transfers of our antibody library platform, and affinity maturation/developability optimization services.
            </p>
          </div>

          <div class="space-y-3">
            <h3 class="text-[#0090d0] text-xl font-bold">In Vitro Immunology</h3>
            <p class="text-sm text-gray-600">
              Immunogenicity, immune functionality, and immuno oncology.
            </p>
          </div>
        </div>
      </section>

        <h2 class="text-[#140B42] text-2xl font-black mb-8 tracking-tight">
          Choose AQLIVIA Laboratories Discovery Sciences team to:
        </h2>

        <ul class="space-y-4 list-none">
          <li class="flex items-start gap-3">
            <div class="w-1.5 h-1.5 rounded-full bg-[#140B42] mt-2 flex-shrink-0"></div>
            <p class="text-sm">Collaborate with leading scientists</p>
          </li>
          <li class="flex items-start gap-3">
            <div class="w-1.5 h-1.5 rounded-full bg-[#140B42] mt-2 flex-shrink-0"></div>
            <p class="text-sm">Generate tailored, well characterized proteins</p>
          </li>
          <li class="flex items-start gap-3">
            <div class="w-1.5 h-1.5 rounded-full bg-[#140B42] mt-2 flex-shrink-0"></div>
            <p class="text-sm">Build your custom platform for antibody discovery or have us select/optimize your antibody therapeutic</p>
          </li>
          <li class="flex items-start gap-3">
            <div class="w-1.5 h-1.5 rounded-full bg-[#140B42] mt-2 flex-shrink-0"></div>
            <p class="text-sm">Evaluate your candidates' immunogenicity using high quality, representative specimens</p>
          </li>
          <li class="flex items-start gap-3">
            <div class="w-1.5 h-1.5 rounded-full bg-[#140B42] mt-2 flex-shrink-0"></div>
            <p class="text-sm">Reduce your reliance on animal studies</p>
          </li>
          <li class="flex items-start gap-3">
            <div class="w-1.5 h-1.5 rounded-full bg-[#140B42] mt-2 flex-shrink-0"></div>
            <p class="text-sm">Avoid royalties and milestone-based fees</p>
          </li>
          <li class="flex items-start gap-3">
            <div class="w-1.5 h-1.5 rounded-full bg-[#140B42] mt-2 flex-shrink-0"></div>
            <p class="text-sm">Expedite the path from target to optimized lead candidate</p>
          </li>
        </ul>
      </section>


    </div>
  `},{name:"Protein Sciences",desc:"Improving potency and selectivity of lead compounds.",htmlContent:`
    <div class="animate-fadeIn font-sans text-[#333] leading-relaxed">
      
      <section class="max-w-7xl mx-auto py-12 px-6 space-y-6 text-[15px]">
        <p>
          Our protein sciences laboratory offers flexible solutions, whether you need standalone offerings or services integrated with our <span class="text-[#0090d0] hover:underline cursor-pointer">Vaccines</span> and <span class="text-[#0090d0] hover:underline cursor-pointer">Discovery Sciences</span> services. We tailor our approach to meet your needs, delivering biological products customized to your specifications in terms of scale, purity, activity, and other analytical characteristics, all within the required timeline.
        </p>
        <p>
          Our scientists are available to collaborate on your complex projects, including de novo design, construction, purification, and analytical characterization of novel proteins and antibodies. Whether working with pseudotyped viruses, mRNA or other biological products, our team excels in producing and purifying materials derived from various media, including cell cultures, bacteria and serum.
        </p>
        <p class="text-xs text-gray-500">
           Our protein sciences laboratory in Laval, Quebec, Canada recently achieved <span class="font-bold">ISO® 9001:2015 certification</span> for its Quality Management System.
        </p>
      </section>

      <section class="max-w-7xl mx-auto py-16 px-6">
        <div class="flex flex-col md:flex-row items-center justify-between gap-8 border-2 border-[#0090d0] rounded-xl p-8 bg-white shadow-sm">
          <div class="flex-1 text-center md:text-left">
            <div class="bg-[#0090d0] text-white py-2 px-4 inline-block font-bold mb-4">Sponsor needs</div>
            <p class="text-sm font-bold">Understanding your needs and the specifications of your biological product</p>
          </div>

          <div class="flex-[1.5] text-center">
            <h4 class="text-[#0090d0] font-black uppercase text-xs tracking-widest mb-6">Customized Approach</h4>
            <div class="flex items-center justify-center gap-4 relative">
              <div class="absolute h-1 bg-[#0090d0] w-full -z-10"></div>
              <div class="w-12 h-12 rounded-full bg-white border-2 border-[#0090d0] flex flex-col items-center justify-center text-[8px] font-bold">
                <span>Molecular</span>
                <span>Biology</span>
              </div>
              <div class="w-12 h-12 rounded-full bg-white border-2 border-[#0090d0] flex flex-col items-center justify-center text-[8px] font-bold">
                <span>Protein</span>
                <span>Expression</span>
              </div>
              <div class="w-12 h-12 rounded-full bg-white border-2 border-[#0090d0] flex flex-col items-center justify-center text-[8px] font-bold">
                <span>Purification</span>
              </div>
              <div class="w-12 h-12 rounded-full bg-white border-2 border-[#0090d0] flex flex-col items-center justify-center text-[8px] font-bold">
                <span>Characterization</span>
              </div>
            </div>
          </div>

          <div class="flex-1 text-center md:text-right">
            <div class="bg-[#0090d0] text-white py-2 px-4 inline-block font-bold mb-4">Product delivery</div>
            <p class="text-sm font-bold">Well-characterized recombinant proteins, antibodies and immuno-tools to support your assays</p>
          </div>
        </div>
      </section>

      <section class="max-w-7xl mx-auto py-12 px-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div>
            <h3 class="text-[#140B42] text-2xl font-black mb-6">Scientific expertise</h3>
            <ul class="space-y-4 list-none text-[13px]">
              <li class="flex items-start gap-2"><div class="w-1.5 h-1.5 rounded-full bg-[#140B42] mt-1.5 flex-shrink-0"></div> 15+ years of experience in high throughput protein production tailored to your specifications</li>
              <li class="flex items-start gap-2"><div class="w-1.5 h-1.5 rounded-full bg-[#140B42] mt-1.5 flex-shrink-0"></div> Turnaround as quickly as 4 weeks based on your study needs</li>
              <li class="flex items-start gap-2"><div class="w-1.5 h-1.5 rounded-full bg-[#140B42] mt-1.5 flex-shrink-0"></div> Seamless integration with our vaccine and other discovery teams</li>
              <li class="flex items-start gap-2"><div class="w-1.5 h-1.5 rounded-full bg-[#140B42] mt-1.5 flex-shrink-0"></div> Recombinant proteins with high purity, validated bioactivity, and high binding affinity</li>
            </ul>
          </div>

          <div>
            <h3 class="text-[#140B42] text-2xl font-black mb-6">Our services</h3>
            <ul class="space-y-4 list-none text-[13px]">
              <li class="flex items-start gap-2"><div class="w-1.5 h-1.5 rounded-full bg-[#0090d0] mt-1.5 flex-shrink-0"></div> Custom recombinant protein expression and purification</li>
              <li class="flex items-start gap-2"><div class="w-1.5 h-1.5 rounded-full bg-[#0090d0] mt-1.5 flex-shrink-0"></div> Multiple protein expression systems (Mammalian, E. coli, Cell-free)</li>
              <li class="flex items-start gap-2"><div class="w-1.5 h-1.5 rounded-full bg-[#0090d0] mt-1.5 flex-shrink-0"></div> Virus like particles (VLPs, HPV, norovirus, etc.)</li>
              <li class="flex items-start gap-2"><div class="w-1.5 h-1.5 rounded-full bg-[#0090d0] mt-1.5 flex-shrink-0"></div> HTP experiment and mRNA generation</li>
            </ul>
          </div>

          <div>
            <h3 class="text-[#140B42] text-2xl font-black mb-6">Our products</h3>
            <ul class="space-y-3 list-none text-[13px]">
              <li class="text-[#0090d0] italic mb-2">View and search our commonly stocked items</li>
              <li class="flex items-start gap-2"><div class="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 flex-shrink-0"></div> Viral, bacterial, human proteins</li>
              <li class="flex items-start gap-2"><div class="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 flex-shrink-0"></div> Antibodies</li>
              <li class="flex items-start gap-2"><div class="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 flex-shrink-0"></div> Complex/multimeric proteins</li>
              <li class="flex items-start gap-2"><div class="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 flex-shrink-0"></div> Enzymes</li>
            </ul>
          </div>

        </div>
      </section>

      
    </div>
  `},{name:"Antibody Discovery",desc:"Generate target-specific antibodies using phage display, yeast display, and NGS.",image:"https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2000",heroSubtitle:"Antibody discovery campaigns designed to meet your unique requirements.",layout:"html-content",htmlContent:`
            <div class="space-y-16 animate-fadeIn text-[#140B42]">
              
              <section>
                <p class="text-gray-700 leading-relaxed mb-6 max-w-6xl text-sm">
                  At Specifica, our goal is to generate as many different target-specific antibodies as possible that meet your unique requirements. We have generated more than 100 naïve individual libraries using different scaffolds, formats, variable gene sources, and diversity sets.
                </p>
              </section>
        
              <section class="border-t border-gray-100 pt-12">
                <h2 class="text-[#140B42] text-3xl font-bold mb-12 text-center">Using three powerful coordinating technologies</h2>
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                
                  <div class="hidden md:block absolute top-8 left-[16%] right-[16%] h-0.5 bg-gray-200 -z-10"></div>
                  
                 
                  <div class="flex flex-col items-center text-center">
                    <div class="w-16 h-16 rounded-full bg-white border-4 border-[#e65100] flex items-center justify-center text-[#e65100] text-xl font-bold mb-6 shadow-sm z-10">
                      1
                    </div>
                    <p class="text-gray-600 text-xs leading-relaxed max-w-xs">
                      We first carry out selections from our Generation 3 phage display libraries to obtain an initial pool of antibody leads with maximum diversity.
                    </p>
                  </div>
        
                 
                  <div class="flex flex-col items-center text-center">
                    <div class="w-16 h-16 rounded-full bg-white border-4 border-[#e65100] flex items-center justify-center text-[#e65100] text-xl font-bold mb-6 shadow-sm z-10">
                      2
                    </div>
                    <p class="text-gray-600 text-xs leading-relaxed max-w-xs">
                      Then, we use yeast display to narrow this down to a diverse, high affinity fully binding population, reflecting requirements for cross-reactivity, ligand antagonism or additional specificity needs.
                    </p>
                  </div>
        
                  
                  <div class="flex flex-col items-center text-center">
                    <div class="w-16 h-16 rounded-full bg-white border-4 border-[#e65100] flex items-center justify-center text-[#e65100] text-xl font-bold mb-6 shadow-sm z-10">
                      3
                    </div>
                    <p class="text-gray-600 text-xs leading-relaxed max-w-xs">
                      Finally, we evaluate selection outputs with next generation sequencing and AbXtract, Specifica’s next-generation sequencing (NGS) analysis software.
                    </p>
                  </div>
                </div>
              </section>
        
              <section class="border-t border-gray-100 pt-12 pb-8">
                <h2 class="text-[#140B42] text-2xl font-bold mb-4">Antibody clustering</h2>
                <p class="text-gray-700 leading-relaxed mb-6 text-sm">
                  The sequences obtained by NGS are analyzed by machine learning to group antibodies into different clusters expected to bind the same epitope. Our selected antibodies have high affinities, inherently developable biophysical properties and broad diversity, making your transition from lead to drug that much faster.
                </p>
                <div class="bg-gray-50 p-6 rounded-lg border-l-4 border-[#0090d0]">
                  <p class="text-gray-700 text-sm italic">
                    The final product can be a panel of antibodies in any format, or an extensive list of different antibody clonotype sequences you can make and test in house.
                  </p>
                </div>
                <p class="text-[#0090d0] font-bold text-xs mt-6 uppercase tracking-widest cursor-pointer hover:underline">
                  Learn what we're focusing on in the coming months
                </p>
              </section>
        
            </div>
          `},{name:"Antibody Libraries",desc:"Exclusive, one-of-a-kind antibody libraries for local discovery execution.",image:"https://images.unsplash.com/photo-1581093458791-9f302e686c87?q=80&w=2000",heroSubtitle:"Full transfers of exclusive library platforms to empower your local discovery.",layout:"html-content",htmlContent:`
            <div class="space-y-16 animate-fadeIn text-[#140B42]">
              
              <section>
                <p class="text-gray-700 leading-relaxed mb-6 max-w-6xl text-sm">
                  In addition to discovery campaigns, Specifica offers full transfers of each client’s exclusive library platform. This delivers a one-of-a-kind library to support clients who want to effectively execute antibody discovery locally.
                </p>
                <p class="text-gray-700 leading-relaxed mb-6 max-w-6xl text-sm">
                  All libraries are provided as exclusive assets, with HCDR3 donors used once and other CDRs reassembled for each library, making the antibody diversity yours alone to mine, and not shared with others. Your exclusive HCDR3 diversity can be used to build more than one library format, providing access to different antibody functionalities.
                </p>
                <p class="text-gray-700 leading-relaxed mb-8 max-w-6xl text-sm italic border-l-4 border-[#0090d0] pl-4">
                  To empower discovery at your site, we equip you with our integrated, state-of-the-art antibody discovery platform, including exclusive libraries, vectors, protocols, and extensive training.
                </p>
              </section>
        
              <section class="border-t border-gray-100 pt-12">
                <div class="flex flex-col lg:flex-row gap-16">
                  <div class="flex-1">
                    <h2 class="text-[#140B42] text-2xl font-bold mb-6 italic">Exclusive Libraries</h2>
                    <p class="text-gray-600 text-sm leading-relaxed mb-4">
                      Each Generation 3 library from Specifica uses a unique reassembly of naturally replicated CDRs, combined with at least 100 million unique HCDR3s derived from a unique donor pool that is used only once. These donors are never used to build libraries for other clients.
                    </p>
                    <p class="text-gray-600 text-sm leading-relaxed mb-4">
                      This approach ensures that each Generation 3 library is one of a kind, delivering industry-leading antibody diversity on each project.
                    </p>
                    <p class="text-gray-600 text-sm leading-relaxed mb-6">
                      We retain your diversity and can use it to build new libraries to expand your antibody discovery efforts, now or in the future. In addition to your original antibody format, Specifica can build you new format libraries with the same diversity. Current formats are scFv, scFv-fixed VL, Fab, Fab-fixed VL and VHH.
                    </p>
                    <p class="text-[#0090d0] font-bold text-xs">
                      Bring our library platform in-house for your exclusive use. We can include all 4 sub-libraries (ScFv, Fab, fixed VL and VHH) or fewer based on your needs and budget.
                    </p>
                  </div>
                  
                  <div class="lg:w-1/3 flex flex-col justify-center gap-8">
                     <div class="flex items-center gap-4">
                        <div class="w-16 h-16 bg-[#0090d0] rounded-full flex items-center justify-center text-white shadow-lg">
                           <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                        </div>
                        <span class="text-[#140B42] font-bold text-sm">Use your<br/>exclusive library</span>
                     </div>
                     
                     <div class="flex items-center gap-4">
                        <div class="w-16 h-16 bg-[#0090d0] rounded-full flex items-center justify-center text-white shadow-lg">
                           <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                        </div>
                        <span class="text-[#140B42] font-bold text-sm">Not one shared<br/>with competitors</span>
                     </div>
                  </div>
                </div>
              </section>
        
              <section class="border-t border-gray-100 pt-12">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                    <h2 class="text-[#140B42] text-2xl font-bold mb-4 italic">Library Design</h2>
                    <p class="text-gray-600 text-sm leading-relaxed mb-4">
                      The exclusive use of combinatorically reassembled natural CDR sequences, rather than intra-CDR synthetic diversity, ensures correct folding, avoids co-variance violations, and allows the complete elimination of sequence-based liabilities for five of the six CDRs.
                    </p>
                    <p class="text-gray-600 text-sm leading-relaxed mb-4">
                      As a result of the high functionality of our Generation 3 Library Platform, you can expect a broad diversity of different antibodies from your selections, most of which will have affinities below 10 nM, combined with developability properties usually at least as good as the clinical candidate antibodies from which they were derived.
                    </p>
                    <p class="text-gray-600 text-sm leading-relaxed">
                      We construct each Generation 3 library de novo, ensuring your library comprises a unique combination of naturally replicated CDRs, combined with at least one hundred million unique HCDR3s derived from a donor pool used only once, guaranteeing each supplied Generation 3 Library Platform is one of a kind.
                    </p>
                  </div>
        
                  <div class="bg-gray-50 p-8 rounded-xl border border-gray-100">
                    <h2 class="text-[#140B42] text-2xl font-bold mb-4 italic">Customization</h2>
                    <p class="text-gray-600 text-sm leading-relaxed mb-6">
                      All library aspects can be customized, including scaffolds, mutations to revert frameworks to germline or eliminate sequences of concern, antibody format, CDR sequence liabilities retained or eliminated, HCDR3 sources, display platform (phage or yeast), and the peptide tags used for detection or purification.
                    </p>
                    <div class="bg-white p-4 rounded-lg shadow-sm border-l-4 border-[#0090d0]">
                       <p class="text-[#140B42] font-bold text-sm">
                         We will work with you to design the optimal library for your purposes.
                       </p>
                    </div>
                  </div>
                </div>
              </section>
        
            </div>
          `},{name:"In Vitro Immunology",desc:"Immunogenicity risk assessment and functional screening assays.",image:"https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2000",heroSubtitle:"Trusted immunogenicity risk assessment services and functional screening assays.",layout:"html-content",htmlContent:`
            <div class="space-y-16 animate-fadeIn text-[#140B42]">
              
              <section class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center border-b border-gray-100 pb-12">
                <div class="p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
                  <h3 class="text-xl font-bold mb-4">Immunogenicity</h3>
                  <a href="#immunogenicity" class="inline-block bg-[#0090d0] text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#007bb5] transition-colors">
                    Learn More
                  </a>
                </div>
                <div class="p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
                  <h3 class="text-xl font-bold mb-4">Immuno-functionality</h3>
                  <a href="#immuno-functionality" class="inline-block bg-[#0090d0] text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#007bb5] transition-colors">
                    Learn More
                  </a>
                </div>
                <div class="p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
                  <h3 class="text-xl font-bold mb-4">Our Approach</h3>
                  <a href="#our-approach" class="inline-block bg-[#0090d0] text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#007bb5] transition-colors">
                    Learn More
                  </a>
                </div>
              </section>
        
              <section id="immunogenicity" class="scroll-mt-32">
                <h2 class="text-[#140B42] text-2xl font-bold mb-4">Immunogenicity Risk Assessment</h2>
                <p class="text-gray-700 leading-relaxed mb-6 max-w-6xl text-sm">
                  Our <em>In Vitro</em> Immunology lab team, formerly ImmunXperts, provides trusted immunogenicity risk assessment services, including <em>in silico</em> and <em>in vitro</em> methods. We utilize T-cell activation and proliferation as a surrogate marker for the induction of anti-drug antibodies, cytokine release assays, and MHC-associated peptide proteomics (MAPPS). Our methods provide functional insights into immune-mediated adverse events.
                </p>
              </section>
  
              <section id="immuno-functionality" class="border-t border-gray-100 pt-10 scroll-mt-32">
                <h2 class="text-[#140B42] text-2xl font-bold mb-4">Immuno-Functionality & Training</h2>
                <p class="text-gray-700 leading-relaxed mb-6 max-w-6xl text-sm">
                  Our <em>In Vitro</em> Immunology lab also performs functional screening assays for drug candidates in immuno-oncology, cell and gene therapy, and other disease areas. Our consultative services provide theoretical immunogenicity and immunology courses, protocol review and optimization, and hands-on training, including training on optimal procedures for the isolation and cryopreservation of PBMCs from whole blood.
                </p>
              </section>
  
              <section id="our-approach" class="border-t border-gray-100 pt-10 scroll-mt-32">
                <h2 class="text-[#140B42] text-2xl font-bold mb-4">Our Approach & Expertise</h2>
                <div class="flex flex-col lg:flex-row gap-12">
                  <div class="flex-1">
                    <p class="text-gray-700 leading-relaxed mb-6 text-sm">
                      Located in Gosselies, Belgium, our <em>In Vitro</em> Immunology team assists clients in advancing programs from discovery to pre-IND and exploratory clinical stages. We bring broad experience helping clients address unique challenges across all molecule types.
                    </p>
                    <p class="text-gray-700 leading-relaxed mb-6 text-sm">
                      Our team is experienced with an array of new modalities such as novel anti-oncolytic molecules, cell and gene therapy products, monoclonal antibodies (mAb), bispecific antibodies, new antibody formats, small molecules, and generic peptides.
                    </p>
                  </div>
                  <div class="lg:w-1/3">
                     <div class="bg-[#140B42] text-white p-8 rounded-xl shadow-lg">
                        <h4 class="font-bold text-lg mb-4 border-b border-white/20 pb-4">Biobank Capabilities</h4>
                        <p class="text-sm opacity-90 leading-relaxed">
                          Our <em>In Vitro</em> Immunology lab holds a Belgian Biobank License and stores high-quality PBMC samples from more than <span class="font-bold text-[#0090d0]">1,300 healthy donors</span> with 4-digit HLA typing to ensure appropriate representation of diverse global populations.
                        </p>
                     </div>
                  </div>
                </div>
              </section>
        
            </div>
          `},{name:"Functional cell killing assays",desc:"Cell-based assays to assess drug mechanism of action.",image:"https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2000",heroSubtitle:"In Vitro assays to measure the ability of immune cells to kill target cells.",layout:"html-content",htmlContent:`
            <div class="space-y-16 animate-fadeIn text-[#140B42]">
              
              <section>
                <p class="text-gray-700 leading-relaxed mb-6 max-w-6xl text-sm">
                  <em>In Vitro</em> assays to measure the ability of immune cells—such as T cells or NK cells—to kill target cells, typically cancer cells. These assays evaluate the effectiveness of immunotherapies or antibodies by quantifying cell death through markers like cytotoxicity, apoptosis, or metabolic activity.
                </p>
              </section>
        
              <section class="border-t border-gray-100 pt-12">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
                  
                  <div>
                    <h3 class="text-[#140B42] font-bold text-sm mb-4 border-b border-gray-200 pb-2">Assays for lead candidate selection</h3>
                    <p class="text-[10px] text-gray-400 mb-3 uppercase tracking-widest">Focus on cytotoxicity assays</p>
                    <ul class="space-y-2 text-xs text-gray-600 list-disc pl-4">
                      <li>Antibody-dependent cellular cytotoxicity (ADCC) assay</li>
                      <li>Complement-dependent cytotoxicity (CDC) assay</li>
                      <li>Antibody-dependent cellular phagocytosis (ADCP) assay</li>
                      <li>Antigen-specific/recall killing assay</li>
                      <li>3D spheroid killing assay</li>
                    </ul>
                  </div>
        
                  <div>
                    <h3 class="text-[#140B42] font-bold text-sm mb-4 border-b border-gray-200 pb-2">Assays established with a variety of cell types</h3>
                    <ul class="space-y-2 text-xs text-gray-600 list-disc pl-4 mt-8">
                      <li>Peripheral blood mononuclear cells (PBMCs)</li>
                      <li>T cells</li>
                      <li>Natural killer (NK) cells</li>
                      <li>Neutrophils</li>
                      <li>Macrophages</li>
                    </ul>
                  </div>
        
                  <div>
                    <h3 class="text-[#140B42] font-bold text-sm mb-4 border-b border-gray-200 pb-2">Experience with a variety of molecule types</h3>
                    <ul class="space-y-2 text-xs text-gray-600 list-disc pl-4 mt-8">
                      <li>Monoclonal/bispecific antibodies</li>
                      <li>Antibody-drug conjugates</li>
                      <li>New antibody formats</li>
                      <li>Small molecules</li>
                      <li>Cancer vaccines (peptides, mRNA, lipid nanoparticles [LNPs])</li>
                    </ul>
                  </div>
        
                </div>
              </section>
        
              <section class="border-t border-gray-100 pt-12 pb-12">
                <h2 class="text-[#140B42] text-2xl font-bold mb-8">Available platforms / readouts</h2>
                
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  
                  <div class="p-6 bg-gray-50 rounded-xl hover:shadow-md transition-all border border-gray-100">
                    <p class="text-[9px] text-[#0090d0] font-bold uppercase tracking-wider mb-3">Comprehensive cell profiling</p>
                    <h3 class="text-lg font-bold text-[#140B42] mb-3">Flow cytometry</h3>
                    <p class="text-xs text-gray-600 leading-relaxed">Target cell tracking, immunophenotyping, intra-cellular cytokine staining, proliferation. <br/><span class="italic text-gray-400">96-well plates</span></p>
                  </div>
        
                  <div class="p-6 bg-gray-50 rounded-xl hover:shadow-md transition-all border border-gray-100">
                    <p class="text-[9px] text-[#0090d0] font-bold uppercase tracking-wider mb-3">Real-time visualization</p>
                    <h3 class="text-lg font-bold text-[#140B42] mb-3">Live cell imaging</h3>
                    <p class="text-xs text-gray-600 leading-relaxed">Real-time cytotoxicity, apoptosis induction, phagocytosis, reactive oxygen species (ROS) production. <br/><span class="italic text-gray-400">Multiple formats possible</span></p>
                  </div>
        
                  <div class="p-6 bg-gray-50 rounded-xl hover:shadow-md transition-all border border-gray-100">
                    <p class="text-[9px] text-[#0090d0] font-bold uppercase tracking-wider mb-3">Sensitive quantification</p>
                    <h3 class="text-lg font-bold text-[#140B42] mb-3">Luminescence assays</h3>
                    <p class="text-xs text-gray-600 leading-relaxed">MTT, LDH, ATP assays with plate reader. <br/><span class="italic text-gray-400">96-well plates</span></p>
                  </div>
        
                  <div class="p-6 bg-gray-50 rounded-xl hover:shadow-md transition-all border border-gray-100">
                    <p class="text-[9px] text-[#0090d0] font-bold uppercase tracking-wider mb-3">Precise measurement of activation</p>
                    <h3 class="text-lg font-bold text-[#140B42] mb-3">Antigen-specific response</h3>
                    <p class="text-xs text-gray-600 leading-relaxed">ELISpot, FluoroSpot, pMHC multimer staining, intracellular cytokine staining (ICS) / multiplex flow cytometry readout.</p>
                  </div>
        
                  <div class="p-6 bg-gray-50 rounded-xl hover:shadow-md transition-all border border-gray-100">
                    <p class="text-[9px] text-[#0090d0] font-bold uppercase tracking-wider mb-3">Downstream analysis</p>
                    <h3 class="text-lg font-bold text-[#140B42] mb-3">Additional services</h3>
                    <p class="text-xs text-gray-600 leading-relaxed">Cytokine production via ELISA or multiplexed Luminex® and LEGENDPlex™ assays. Generation of cell pellets or cryopreservation (cell sorter available).</p>
                  </div>
        
                  <div class="p-6 bg-gray-50 rounded-xl hover:shadow-md transition-all border border-gray-100">
                    <p class="text-[9px] text-[#0090d0] font-bold uppercase tracking-wider mb-3">Flexible data delivery</p>
                    <h3 class="text-lg font-bold text-[#140B42] mb-3">Reporting formats</h3>
                    <ul class="text-xs text-gray-600 leading-relaxed list-disc pl-4 space-y-1">
                      <li>Raw data</li>
                      <li>Overview report (PowerPoint + Biostatistics)</li>
                      <li>Quality controls</li>
                      <li>Full report (Word + PowerPoint)</li>
                    </ul>
                  </div>
        
                </div>
              </section>
        
            </div>
          `}]},{id:"Biosciences",title:"Biosciences",name:"Biosciences",type:"dropdown",path:"/services/Biosciences",heroImage:"https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2000",shortDesc:"Expert bioanalytical and ADME services ensuring safety, purity, and potency throughout the development lifecycle.",herosubtitle:"Biological Characterization",subItems:[{name:"Small and Large Molecule LC-MS",desc:"Essential LC-MS techniques for small molecule development, peptides, oligonucleotides, and large biotherapeutics with GLP/GCP compliance.",image:"https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2000",heroSubtitle:"Liquid chromatography–mass spectrometry (LC-MS) is an essential technique for the modern bioanalyst.",layout:"html-content",htmlContent:`
            <div class="space-y-12 animate-fadeIn text-[#140B42]">
              
              <section>
                <p class="text-gray-700 leading-relaxed mb-6 max-w-6xl text-sm">
                  Liquid chromatography–mass spectrometry (LC-MS) is an essential technique for the modern bioanalyst. It has decades of precedence in small molecule drug development and regulated bioanalysis. As such, pharmacokinetic studies of small molecule drug candidates typically use LC-MS. Of late, the application of LC-MS has expanded to mid-sized drug modalities (e.g., peptides, small proteins, lipids and oligonucleotides) and large biotherapeutic drugs (e.g., antibodies and antibody drug conjugates). We also now encounter LC-MS quantitative bioanalysis being applied to matrix endogenous compounds including biomarker studies. With over 30 years' experience serving the bioanalytical needs of our clients, AQLIVIA Laboratories has built operations that meet the needs of this rapidly changing drug development arena.
                </p>
                <p class="text-gray-700 leading-relaxed mb-6 max-w-6xl text-sm">
                  Our Project Managers and Principle Investigators have years of experience understanding the specific nuances of regulated bioanalysis that apply to your bioanalytical programs. With a stellar regulatory record, our LC-MS laboratories conduct bioanalysis to GLP/GCP regulations while in accordance with internationally recognized ICH M10 guidance for bioanalytical method validation.
                </p>
                <p class="text-gray-700 leading-relaxed mb-8 max-w-6xl text-sm italic font-medium border-l-4 border-[#0090d0] pl-4">
                  Whether you need support for an early preclinical study with 200 samples or a clinical Phase III or bioequivalence program with 30,000 samples and fast data turnaround, we have built our services to help you deliver to plan.
                </p>
              </section>
        
              <section class="border-t border-gray-100 pt-10">
                <h2 class="text-[#140B42] text-3xl font-bold mb-6">Small Molecule Regulated Bioanalysis by LC-MS</h2>
                <p class="text-gray-700 leading-relaxed mb-6 max-w-6xl text-sm">
                  Triple quadrupole mass spectrometry coupled to liquid chromatography is the mainstay of small molecule quantitative bioanalysis. AQLIVIA Laboratories' bioanalytical laboratories have been leaders in the application of these LC-MS technology developments since 1993 and continue to serve our clients across the drug development spectrum as experts in the field.
                </p>
                <p class="text-gray-700 leading-relaxed mb-6 max-w-6xl text-sm">
                  We have over 60 modern triple quadrupole LC-MS systems dedicated to small molecule bioanalysis applications. These mass spectrometer instruments are matched with laboratory functions and operations that support PK/PD study bioanalytical work compliant with GLP/GCP regulations and global bioanalytical guidance from around the world.
                </p>
                <p class="text-gray-700 leading-relaxed mb-6 max-w-6xl text-sm">
                  AQLIVIA Laboratories has extensive experience in de novo assay development, method transfers, method validation and in study samples analysis supporting pre-clinical, non-clinical and clinical bioanalytical programs. From relatively simple small molecule drugs to peptide drugs, oligonucleotides, lipids and antibody conjugated payload moieties we apply our expertise to generating regulatory submittable bioanalytical data. Our laboratories are outfitted with a full suite of sample preparation equipment including robotic handling automation and 96 well plate standardization for biological fluid and tissue pre-treatment.
                </p>
                <div class="bg-sky-50 p-6 rounded-xl border border-sky-100">
                  <p class="text-gray-700 leading-relaxed text-sm">
                    Small molecule LC-MS bioanalysis has continuously evolved since its inception and with techniques such as dried matrix microsampling, heavily multiplexed assays, biomarkers, new drug modalities and advances in drug formulation, AQLIVIA Laboratories continues to practice at the frontiers of bioanalysis with industry leading service and science.
                  </p>
                </div>
              </section>
        
              <section class="border-t border-gray-100 pt-10 pb-12">
                <h2 class="text-[#140B42] text-3xl font-bold mb-6">Large Molecule Regulated Bioanalysis by LC-MS</h2>
                <p class="text-gray-700 leading-relaxed mb-6 max-w-6xl text-sm">
                  Formed in 2008, the LC-MS Biologics team at AQLIVIA Laboratories utilizes both triple quadrupole and High Resolution Mass Spectrometry (HRMS) for biological analyte LC-MS quantitation. With a fleet of 11 validated HRMS comprised of both Q Exactive™ Orbitrap and Orbitrap Exploris™ instruments, we lead the industry with HRMS capacity for regulated bioanalysis.
                </p>
                <div class="flex flex-col md:flex-row gap-8 items-center">
                   <div class="flex-1">
                      <p class="text-gray-700 leading-relaxed text-sm">
                        With the increasing need for sensitive bioanalytical methods, we have a fleet of nano-flow liquid chromatography systems which when coupled to high resolution mass spectrometers provide ultimate sensitivity. Extensive HRMS and low flow chromatography capabilities along with automated bead based immunoprecipitation techniques delivers unparalleled sensitivity and proven reproducibility in robust workflows. These advanced techniques and our depth of experience combine with a collaborative approach to solve your large molecule bioanalytical challenges.
                      </p>
                   </div>
                   <div class="w-full md:w-1/3">
                      <div class="bg-[#140B42] text-white p-6 rounded-lg shadow-lg">
                         <h4 class="font-bold text-lg mb-2">Key Technologies</h4>
                         <ul class="space-y-2 text-sm opacity-90">
                            <li>• Q Exactive™ Orbitrap</li>
                            <li>• Orbitrap Exploris™</li>
                            <li>• Nano-flow LC Systems</li>
                            <li>• Automated Immunoprecipitation</li>
                         </ul>
                      </div>
                   </div>
                </div>
              </section>
        
            </div>
          `},{name:"Quantitative Assays for Peptides using LC-MS",desc:"Quantitative determination of peptide therapeutics and biomarkers to regulated bioanalytical standards using hybrid LC-MS.",image:"https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2000",heroSubtitle:"Quantitative high-throughput analysis of peptide therapeutics and biomarkers to regulated bioanalytical standards",layout:"html-content",htmlContent:`
          <div class="space-y-12 animate-fadeIn text-[#140B42]">
            
            <section>
              <p class="text-gray-700 leading-relaxed mb-6 max-w-6xl text-sm">
                Peptides are an important class of therapeutics for a wide range of indications. They are highly selective and targeted when compared to chemically synthesized drug substances, yielding low toxicity and lessening the probability of side effects. Traditionally, ligand binding assays (LBAs) have been the default method of analysis for Pharmacokinetic and Pharmacodynamic applications.
              </p>
              <p class="text-gray-700 leading-relaxed mb-6 max-w-6xl text-sm">
                However, immunoassay approaches for peptide therapeutics and biomarkers are challenged by limited specificity of antibodies against these targets. LC-MS approaches can overcome these specificity challenges but have lacked the required sensitivity for quantification of low-abundance peptide markers or potent peptide therapeutics. Further, some peptides are resistant to gas-phase collision induced dissociation, limiting the application of the gold-standard analyzer, the triple quadrupole mass spectrometer and associated MS/MS approaches.
              </p>
            </section>
      
            <section class="border-t border-gray-100 pt-10">
              <h2 class="text-[#140B42] text-3xl font-bold mb-6">High resolution mass spectrometry and nano-scale liquid chromatography</h2>
              
              <div class="bg-gray-50 p-6 rounded-xl border-l-4 border-[#0090d0] mb-8">
                <p class="text-gray-700 leading-relaxed text-sm">
                  <strong>High resolution mass spectrometry (HRMS)</strong> – with or without fragmentation – achieves a level of selectivity above that afforded by conventional low-resolution MS approaches, independent of the chromatographic flow rate required. This approach overcomes the challenges with triple quadrupole detection for peptides resistant to fragmentation.
                </p>
              </div>
      
              <p class="text-gray-700 leading-relaxed mb-6 max-w-6xl text-sm">
                Nano-scale LC separation and ionization delivers the ultimate sensitivity where needed, and multidimensional chromatography with separation by molecule size further enables the robustness comparable to conventional flow chromatography. Multidimensional chromatography, with size-exclusion chromatography (SEC) upstream of reversed-phase separation, can alleviate the robustness issues associated with intact circulating peptide quantification when nano-ESI is required for sensitivity. It can be easily coupled to affinity enrichment protocols, or independent of such clean-up as the bioanalytical challenge dictates.
              </p>
              <p class="text-gray-700 leading-relaxed mb-6 max-w-6xl text-sm">
                In particular, the inclusion of SEC alleviates LC pressure issues such that antibody-based purification is not needed to enable use of nano-LC. For example, methodology was developed with solid-phase extraction (SPE) prior to SEC, nano-LC, and HRMS detection for quantification of intact atrial natriuretic peptide (ANP) in human plasma down to 2 pg/mL. This allows highly sensitive, robust, high-throughput measurement without risk of capture bias, lengthy incubation times, and affords ability to multiplex detection of isoforms, truncations, or other natriuretic peptides.
              </p>
            </section>
      
            <section class="border-t border-gray-100 pt-10">
              <div class="flex flex-col lg:flex-row gap-12">
                <div class="flex-1">
                  <h2 class="text-[#140B42] text-3xl font-bold mb-6">Quantitative measurement experience with peptides</h2>
                  <p class="text-gray-700 leading-relaxed mb-6 text-sm">
                    Our team provides solutions to the challenges encountered when quantitating peptides. We utilize expertise from multiple scientific disciplines to develop sensitive and robust methods. We have extensive experience with a variety of peptides, including but not limited to:
                  </p>
                  <ul class="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4">
                    <li class="flex items-center gap-3 text-sm text-gray-700"><span class="w-1.5 h-1.5 bg-[#0090d0] rounded-full"></span> Cytokines</li>
                    <li class="flex items-center gap-3 text-sm text-gray-700"><span class="w-1.5 h-1.5 bg-[#0090d0] rounded-full"></span> Hepcidin</li>
                    <li class="flex items-center gap-3 text-sm text-gray-700"><span class="w-1.5 h-1.5 bg-[#0090d0] rounded-full"></span> Incretins</li>
                    <li class="flex items-center gap-3 text-sm text-gray-700"><span class="w-1.5 h-1.5 bg-[#0090d0] rounded-full"></span> Insulins</li>
                    <li class="flex items-center gap-3 text-sm text-gray-700"><span class="w-1.5 h-1.5 bg-[#0090d0] rounded-full"></span> Natriuretic peptides</li>
                    <li class="flex items-center gap-3 text-sm text-gray-700"><span class="w-1.5 h-1.5 bg-[#0090d0] rounded-full"></span> Therapeutic peptides fused to proteins</li>
                    <li class="flex items-start gap-3 text-sm text-gray-700 col-span-1 md:col-span-2">
                      <span class="w-1.5 h-1.5 bg-[#0090d0] rounded-full mt-1.5 flex-shrink-0"></span> 
                      Therapeutic peptides to treat multiple sclerosis, diabetes, obesity, oncology, NASH, and gastrointestinal disfunction
                    </li>
                  </ul>
                </div>
                
                <div class="lg:w-1/3">
                   <div class="bg-[#140B42] text-white p-8 rounded-xl shadow-lg">
                      <h3 class="text-xl font-bold mb-4 border-b border-white/20 pb-4">Regulatory Compliance</h3>
                      <p class="text-sm leading-relaxed opacity-90 mb-4">
                        LC-MS/MS Bioanalytical services are GLP and GCP compliant in support of:
                      </p>
                      <ul class="space-y-2 text-sm font-bold text-[#0090d0]">
                        <li>• FDA Standards</li>
                        <li>• OECD Guidelines</li>
                        <li>• MHLW Requirements</li>
                        <li>• ICH Standards</li>
                      </ul>
                   </div>
                </div>
              </div>
            </section>
      
            <section class="border-t border-gray-100 pt-10 pb-12">
              <h2 class="text-[#140B42] text-3xl font-bold mb-6">Our Approach</h2>
              <p class="text-gray-700 leading-relaxed mb-6 max-w-6xl text-sm">
                We offer a number of bioanalytical services to support your trial, including tailored liquid chromatography-mass spectrometry (LC-MS) services, a key methodology in today’s pharmacokinetic (PK) testing. Our highly experienced staff utilizes leading-edge technology including AB SCIEX™ triple quadrupole mass spectrometers, Thermo Scientific HRMS, and state-of-the-art extraction techniques.
              </p>
              <p class="text-gray-700 leading-relaxed mb-6 max-w-6xl text-sm">
                We are one of the few bioanalytical laboratories successfully employing immunoprecipitation techniques, HRMS, and multi-dimensional liquid chromatography for the quantitation of peptide and protein biotherapeutics and biomarkers. Our team has the experience and knowledge in development and validation of small and mid-size peptides to proteins, fusion proteins, monoclonal antibodies, and complex biologic modalities.
              </p>
              <div class="bg-blue-50 p-4 rounded-lg inline-block">
                 <p class="text-[#140B42] font-bold text-sm">
                   The development of these assays is followed by method validation and sample analysis consistent with global regulatory requirements and governed by SOPs.
                 </p>
              </div>
            </section>
      
          </div>
        `},{name:"Biotherapeutic Immunoassay Services",desc:"Comprehensive support for developing and validating robust bioanalytical ligand binding immunoassay methods.",image:"https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=2000",heroSubtitle:"Comprehensive support for developing and validating robust bioanalytical ligand binding immunoassay methods",layout:"html-content",htmlContent:`
          <div class="space-y-12 animate-fadeIn text-[#140B42]">
            
            <section>
              <p class="text-gray-700 leading-relaxed mb-6 max-w-6xl text-sm">
                Immunoassays are essential for accurately measuring analytes in complex biological samples, making them pivotal in the field of drug discovery and development. At AQLIVIA Laboratories, we possess extensive expertise in developing and validating immunoassays within regulated bioanalytical environments. Our proficiency spans scientific understanding, statistical analysis, and navigating today's intricate regulatory landscape.
              </p>
              <p class="text-gray-700 leading-relaxed mb-6 max-w-6xl text-sm">
                We excel in project management, offering ample capacity to support high-throughput platforms and complex methods while ensuring compliance. Since 2007, AQLIVIA Laboratories has been a trusted partner in developing and validating robust bioanalytical ligand-binding immunoassays to support biotherapeutic studies across the drug development continuum.
              </p>
              <div class="bg-blue-50 p-6 rounded-xl border-l-4 border-[#0090d0]">
                <p class="text-gray-700 leading-relaxed text-sm italic">
                  From pharmacokinetic studies and immunogenicity testing to biomarker assays, including cell-based and ligand-binding neutralizing antibody assays and antidrug antibody assays, our track record in regulated bioanalysis services is proven. Whether you're embarking on preclinical studies or preparing for a Phase III clinical trial, we tailor solutions to meet your project's specific requirements.
                </p>
              </div>
            </section>
      
            <section class="border-t border-gray-100 pt-10">
              <h2 class="text-[#140B42] text-3xl font-bold mb-8">Comprehensive Validation & Support Services</h2>
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                  <h3 class="text-[#0090d0] font-bold text-lg mb-3">Project Management</h3>
                  <p class="text-gray-600 text-sm leading-relaxed">
                    Our dedicated Project Managers serve as your primary contacts, ensuring all project expectations—including timelines and costs—are met. Each Project Manager is a seasoned scientist with an average of nine years of industry experience. They actively engage in data analysis, communicate results, and provide recommendations during weekly updates.
                  </p>
                </div>

                <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                  <h3 class="text-[#0090d0] font-bold text-lg mb-3">Method Development</h3>
                  <p class="text-gray-600 text-sm leading-relaxed">
                    Leveraging over a decade of experience in regulated large-molecule bioanalysis, AQLIVIA Laboratories excels in developing and validating robust bioanalytical methods. We specialize in supporting PK concentration, immunogenicity (ADA and Nab), and biomarker assays for novel agents and biosimilars.
                  </p>
                </div>

                <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                  <h3 class="text-[#0090d0] font-bold text-lg mb-3">Method Validation</h3>
                  <p class="text-gray-600 text-sm leading-relaxed">
                    Our production and method development teams collaborate closely to ensure a seamless transition from method development to validation. Before validation begins, a thorough pre-validation checklist verifies method ruggedness, reproducibility, and compliance with regulatory standards.
                  </p>
                </div>

                <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                  <h3 class="text-[#0090d0] font-bold text-lg mb-3">Sample Analysis</h3>
                  <p class="text-gray-600 text-sm leading-relaxed">
                    Equipped with state-of-the-art immunoassay laboratory facilities and platforms such as MSD, ELISA, FL/CL, and Luminex, our large molecule bioanalysis facility conducts high-throughput studies while meeting aggressive timelines.
                  </p>
                </div>

                <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                  <h3 class="text-[#0090d0] font-bold text-lg mb-3">Sample Management</h3>
                  <p class="text-gray-600 text-sm leading-relaxed">
                    With extensive experience in managing large sample volumes on accelerated timelines, AQLIVIA Laboratories ensures meticulous handling from receipt through final disposition. We maintain strict chain of custody procedures for all client compounds and study samples.
                  </p>
                </div>

                <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                  <h3 class="text-[#0090d0] font-bold text-lg mb-3">Medical Writing Support</h3>
                  <p class="text-gray-600 text-sm leading-relaxed">
                    Our in-house medical writing team prepares sample analysis and validation reports that adhere to bioanalytical regulatory guidelines. Each report undergoes three layers of review, typically ready for sponsor review within 2-5 weeks following data QC completion.
                  </p>
                </div>

              </div>
            </section>
      
            <section class="border-t border-gray-100 pt-10 pb-12">
              <div class="bg-[#140B42] text-white rounded-2xl p-8 md:p-12 text-center shadow-xl">
                <h2 class="text-2xl font-bold mb-4">Ready to validate your immunoassay?</h2>
                <p class="text-white/80 max-w-2xl mx-auto mb-8 text-sm leading-relaxed">
                  AQLIVIA Laboratories has a proven track record for developing and transferring routine and complex bioanalytical methods. Contact us today to discuss how our experienced bioanalytical team can help you develop and validate your immunoassay in a timely and regulatory-compliant manner.
                </p>
                <a href="/Aqvilia#/contact" class="inline-block bg-[#0090d0] text-white px-8 py-3 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-[#007bb5] transition-colors shadow-lg">
                  Contact Us
                </a>
              </div>
            </section>
      
          </div>
        `},{name:"Immunoassay and Immunogenicity",desc:"Design and validate immunoassays for measuring analytes in complex biological samples, supporting biosimilars and anti-drug antibody assays.",image:"https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=2000",heroSubtitle:"Crucial for accurately measuring analytes in complex biological samples, making them indispensable in drug discovery and development.",layout:"html-content",htmlContent:`
          <div class="space-y-16 animate-fadeIn text-[#140B42]">
            
            <section>
              <h2 class="text-[#140B42] text-3xl font-bold mb-6">Expertise in Bioanalytical Method Development</h2>
              <p class="text-gray-700 leading-relaxed mb-6 max-w-6xl text-sm">
                Immunoassays are crucial for accurately measuring analytes in complex biological samples, making them indispensable in drug discovery and development. At AQLIVIA Laboratories, we harness extensive expertise in bioanalytical method development and testing to design and validate immunoassays. Our approach adheres to industry best practices and regulatory standards, ensuring robust results.
              </p>
              <p class="text-gray-700 leading-relaxed mb-6 max-w-6xl text-sm">
                Annually, we analyze over one million bioanalytical samples, supporting biosimilar, pharmacokinetic (PK), immunogenicity (e.g., anti-drug antibody assays), and neutralizing antibody assays.
              </p>
            </section>
      
            <section class="border-t border-gray-100 pt-10">
              <div class="flex flex-col lg:flex-row gap-12">
                 <div class="flex-1">
                    <p class="text-gray-700 leading-relaxed mb-6 text-sm">
                      From method development, validation, and sample analysis to comprehensive management and medical writing support, AQLIVIA Laboratories offers a complete spectrum of bioanalytical services. We specialize in developing and validating ligand-binding assays for various therapeutic products, including:
                    </p>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                       <div class="bg-gray-50 p-4 rounded-lg border-l-4 border-[#0090d0] text-sm text-gray-700 font-medium">ADCs (Antibody Drug Conjugates)</div>
                       <div class="bg-gray-50 p-4 rounded-lg border-l-4 border-[#0090d0] text-sm text-gray-700 font-medium">AVV</div>
                       <div class="bg-gray-50 p-4 rounded-lg border-l-4 border-[#0090d0] text-sm text-gray-700 font-medium">CAR-T</div>
                       <div class="bg-gray-50 p-4 rounded-lg border-l-4 border-[#0090d0] text-sm text-gray-700 font-medium">Bi-specific / tri-specific antibodies</div>
                       <div class="bg-gray-50 p-4 rounded-lg border-l-4 border-[#0090d0] text-sm text-gray-700 font-medium">Bi-functional proteins</div>
                       <div class="bg-gray-50 p-4 rounded-lg border-l-4 border-[#0090d0] text-sm text-gray-700 font-medium">Fusion antibodies / proteins</div>
                       <div class="bg-gray-50 p-4 rounded-lg border-l-4 border-[#0090d0] text-sm text-gray-700 font-medium">Monoclonal antibodies</div>
                       <div class="bg-gray-50 p-4 rounded-lg border-l-4 border-[#0090d0] text-sm text-gray-700 font-medium">Oligonucleotides</div>
                       <div class="bg-gray-50 p-4 rounded-lg border-l-4 border-[#0090d0] text-sm text-gray-700 font-medium">Pegylated molecules</div>
                    </div>
                 </div>
              </div>
            </section>
      
            <section class="bg-[#415464] text-white rounded-none overflow-hidden mt-12 flex flex-col md:flex-row min-h-[300px]">
              <div class="w-full md:w-1/3 relative bg-white">
                 <div class="absolute inset-0 rounded-r-[50%] overflow-hidden border-r-8 border-[#415464]">
                    <img src="https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=800" class="w-full h-full object-cover" alt="Pipette" />
                 </div>
              </div>
              <div class="w-full md:w-2/3 p-12 flex flex-col justify-center">
                 <h2 class="text-2xl font-bold mb-4">Bioanalytical immunoassay services for biosimilar development</h2>
                 <p class="text-white/80 mb-8 text-sm">Unique bioanalytic capabilities to accelerate biosimilar studies</p>
                 <div>
                   <a href="/Aqvilia/contact" class="inline-block bg-[#0090d0] text-white px-8 py-3 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-[#007bb5] transition-colors shadow-lg">
                     Learn More
                   </a>
                 </div>
              </div>
            </section>
      
          </div>
        `},{name:"Bioanalytical Immunoassay Services",desc:"Developing, transferring, and validating nonclinical and clinical assays to support biosimilar studies, including quantitative and biomarker assays.",image:"https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2000",heroSubtitle:"Unique bioanalytic capabilities to accelerate biosimilar studies.",layout:"html-content",htmlContent:`
          <div class="space-y-16 animate-fadeIn text-[#140B42]">
            
            <section>
              <h2 class="text-[#140B42] text-3xl font-bold mb-6">Bioanalytical immunoassay services for biosimilar development</h2>
              <p class="text-gray-700 leading-relaxed mb-6 max-w-6xl text-sm">
                Biosimilars are increasingly vital in the expanding global biotech market. Achieving regulatory approval requires demonstrating comparable safety and efficacy to approved biological products. The complexity of biosimilar molecules adds unique challenges during development and manufacturing.
              </p>
              <p class="text-gray-700 leading-relaxed mb-6 max-w-6xl text-sm">
                Successfully navigating these challenges demands an experienced partner. AQLIVIA Laboratories offers tailored solutions to help you make informed decisions and achieve validated outcomes throughout your study, from research to commercialization.
              </p>
              <div class="bg-blue-50 p-6 rounded-xl border-l-4 border-[#0090d0]">
                <p class="text-gray-700 leading-relaxed text-sm italic">
                  Our immunoassay services specialize in developing, transferring, and validating non-clinical and clinical assays crucial for biosimilar studies, including quantitative, immunogenicity, and biomarker assays.
                </p>
              </div>
            </section>
      
            <section class="border-t border-gray-100 pt-10">
              <h2 class="text-[#140B42] text-3xl font-bold mb-8">Our Core Expertise</h2>
              
              <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                  <div class="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mb-4 text-[#0090d0]">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                  </div>
                  <h3 class="text-[#140B42] font-bold text-lg mb-3">Pharmacokinetic (PK) Concentration Assays</h3>
                  <p class="text-gray-600 text-sm leading-relaxed">
                    Developing or transferring quantitative immunoassays efficiently to demonstrate bioanalytical similarity between originator and biosimilar drugs.
                  </p>
                </div>

                <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                  <div class="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mb-4 text-[#0090d0]">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                  </div>
                  <h3 class="text-[#140B42] font-bold text-lg mb-3">Anti-drug Antibody (ADA) Assays</h3>
                  <p class="text-gray-600 text-sm leading-relaxed">
                    Optimizing assays to demonstrate ADA binding comparability, addressing sensitivity and free drug tolerance with advanced techniques.
                  </p>
                </div>

                <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                  <div class="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mb-4 text-[#0090d0]">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  </div>
                  <h3 class="text-[#140B42] font-bold text-lg mb-3">Neutralizing Antibody (NAb) Assays</h3>
                  <p class="text-gray-600 text-sm leading-relaxed">
                    Tailoring plate-based competitive ligand binding or cell-based approaches specific to your drug’s mode of action.
                  </p>
                </div>

              </div>
            </section>
      
            <section class="flex flex-col lg:flex-row items-center gap-16 py-10 border-t border-gray-100">
              <div class="w-full lg:w-1/2">
                <h2 class="text-[#140B42] text-3xl font-bold mb-6">Partnership & Workflow</h2>
                <p class="text-gray-600 mb-6 leading-relaxed text-sm">
                  Our Project Managers, all scientists with hands-on bioanalytical expertise, act as trusted partners throughout your project. They provide regular updates, practical advice, and proactive issue resolution to ensure smooth assay operations.
                </p>
                <div class="bg-gray-50 p-6 rounded-xl border border-gray-200">
                   <h4 class="font-bold text-[#140B42] mb-3 text-sm uppercase tracking-widest">Integrated Efficiency</h4>
                   <p class="text-gray-600 text-sm">
                     Integrated within our bioanalytical laboratories and central facilities, our workflow ensures efficiency and flexibility across the product development cycle.
                   </p>
                </div>
              </div>
              
              <div class="w-full lg:w-1/2">
                <div class="bg-[#140B42] text-white p-8 rounded-2xl shadow-xl">
                  <h3 class="text-xl font-bold mb-2">Proven Track Record</h3>
                  <p class="text-white/80 text-sm mb-6">AQLIVIA Laboratories has developed and tested thousands of biosimilar and comparator samples across various therapeutic areas, including:</p>
                  
                  <ul class="grid grid-cols-2 gap-4">
                    <li class="flex items-center gap-3 text-sm font-bold"><span class="w-2 h-2 bg-[#0090d0] rounded-full"></span> Adalimumab</li>
                    <li class="flex items-center gap-3 text-sm font-bold"><span class="w-2 h-2 bg-[#0090d0] rounded-full"></span> Nivolumab</li>
                    <li class="flex items-center gap-3 text-sm font-bold"><span class="w-2 h-2 bg-[#0090d0] rounded-full"></span> Pembrolizumab</li>
                    <li class="flex items-center gap-3 text-sm font-bold"><span class="w-2 h-2 bg-[#0090d0] rounded-full"></span> Ipilimumab</li>
                    <li class="flex items-center gap-3 text-sm font-bold"><span class="w-2 h-2 bg-[#0090d0] rounded-full"></span> Omalizumab</li>
                    <li class="flex items-center gap-3 text-sm font-bold"><span class="w-2 h-2 bg-[#0090d0] rounded-full"></span> Rituximab</li>
                  </ul>
                </div>
              </div>
            </section>
      
            <section class="border-t border-gray-100 pt-10 pb-12 text-center">
              <h2 class="text-[#140B42] text-3xl font-bold mb-6">Streamline Your Biosimilar Development</h2>
              <p class="text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto text-sm">
                Whether you need high-throughput assay development or guidance through regulatory complexities, our team is ready to collaborate at every step. Quality is paramount in our bioanalytical lifecycle, from method development to final sample testing reports.
              </p>
              <a href="/contact" class="inline-block bg-[#0090d0] text-white px-10 py-4 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-[#007bb5] transition-colors shadow-lg">
                Contact Us Today
              </a>
            </section>
      
          </div>
        `},{name:"Validated Assays for Small Molecules and Biomarkers",desc:"Conduct bioanalysis to GLP/GCP regulations in accordance with ICH M10 guidance, supporting PK/PD studies for small molecules.",image:"https://images.unsplash.com/photo-1633649566675-81204d607e4d?q=80&w=2000",heroSubtitle:"Extensive portfolio of validated assays to support your clinical trials.",layout:"html-content",htmlContent:`
          <div class="space-y-16 animate-fadeIn text-[#140B42]">
            
           <section>
              <h2 class="text-[#140B42] text-3xl font-bold mb-6">Your Trusted Bioanalytical Partner</h2>
              <p class="text-gray-700 leading-relaxed mb-8 max-w-6xl text-sm">
                With over 30 years of expertise in bioanalytical services, AQLIVIA Laboratories is your go-to resource for robust methods that support every stage of drug discovery and development. Our team has meticulously developed and validated assays for a wide range of applications.
              </p>
              
              <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div class="bg-gray-50 p-6 rounded-xl border-t-4 border-[#0090d0] shadow-sm hover:shadow-md transition-shadow">
                   <h3 class="font-bold text-[#140B42] text-sm mb-2">Pharmacokinetics and Drug Metabolism</h3>
                   <p class="text-gray-600 text-xs leading-relaxed">Understanding how drugs behave in the body.</p>
                </div>
                <div class="bg-gray-50 p-6 rounded-xl border-t-4 border-[#0090d0] shadow-sm hover:shadow-md transition-shadow">
                   <h3 class="font-bold text-[#140B42] text-sm mb-2">Biomarker Analysis and Characterization</h3>
                   <p class="text-gray-600 text-xs leading-relaxed">Identifying key markers for precision medicine.</p>
                </div>
                <div class="bg-gray-50 p-6 rounded-xl border-t-4 border-[#0090d0] shadow-sm hover:shadow-md transition-shadow">
                   <h3 class="font-bold text-[#140B42] text-sm mb-2">Biosimilars Testing</h3>
                   <p class="text-gray-600 text-xs leading-relaxed">Ensuring safety and efficacy of biosimilar products.</p>
                </div>
              </div>

              <p class="text-gray-700 leading-relaxed mb-6 max-w-6xl text-sm">
                Our methodologies cover the spectrum, including LC-MS bioanalysis, LC-MS/MS analysis, hybrid LC-MS assays, and immunoassay and MS-based biomarker assays. Before validation, each assay undergoes a rigorous pre-qualification process, where our scientists review preliminary data and make necessary modifications to ensure accuracy and reliability.
              </p>
              
              <div class="bg-blue-50 p-6 rounded-lg border border-blue-100 mb-8">
                <p class="text-[#140B42] text-sm leading-relaxed font-medium">
                  We are leading with science, and as one of the world’s largest and most respected bioanalytical laboratory networks, we’re equipped to tailor customized methods specifically for your unique challenges. Trust AQLIVIA to deliver the vital data you need to advance your research and improve patient outcomes.
                </p>
              </div>

              <p class="text-gray-500 italic text-sm mb-6 border-b border-gray-100 pb-6">
                Explore our available bioanalytical assays below and let’s embark on a successful scientific journey together.
              </p>
            </section>
      
            <section class="border-t border-gray-100 pt-10">
              <h2 class="text-[#140B42] text-3xl font-bold mb-2">LC-MS/MS Methods</h2>
              <p class="text-gray-500 text-sm mb-6">Scroll to view our extensive list of validated methods.</p>
              
              <div class="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <div class="bg-[#140B42] text-white p-4 grid grid-cols-3 font-bold text-sm">
                  <div class="col-span-2">Compound / Metabolite</div>
                  <div>Matrix</div>
                </div>
                <div class="max-h-[500px] overflow-y-auto bg-white text-sm">
                   <table class="w-full">
                     <tbody class="divide-y divide-gray-100">
                        <tr class="hover:bg-gray-50"><td class="p-4 col-span-2 w-2/3">1MX and AFMU (caffeine metabolites)</td><td class="p-4 w-1/3 text-gray-600">Human urine</td></tr>
                        <tr class="hover:bg-gray-50"><td class="p-4 col-span-2">5-Fluorouracil (5-FU)</td><td class="p-4 text-gray-600">Human plasma</td></tr>
                        <tr class="hover:bg-gray-50"><td class="p-4 col-span-2">Acetaminophen, Hydrocodone, Hydromorphone, Norhydrocodone</td><td class="p-4 text-gray-600">Human plasma</td></tr>
                        <tr class="hover:bg-gray-50"><td class="p-4 col-span-2">Aciclovir</td><td class="p-4 text-gray-600">Human plasma</td></tr>
                        <tr class="hover:bg-gray-50"><td class="p-4 col-span-2">Amlodipine</td><td class="p-4 text-gray-600">Human plasma</td></tr>
                        <tr class="hover:bg-gray-50"><td class="p-4 col-span-2">Amphetamine (achiral)</td><td class="p-4 text-gray-600">Human plasma</td></tr>
                        <tr class="hover:bg-gray-50"><td class="p-4 col-span-2">Aprepitant</td><td class="p-4 text-gray-600">Human plasma</td></tr>
                        <tr class="hover:bg-gray-50"><td class="p-4 col-span-2">Ara-Uridine</td><td class="p-4 text-gray-600">Human plasma</td></tr>
                        <tr class="hover:bg-gray-50"><td class="p-4 col-span-2">Asenapine and Desmethylasenapine</td><td class="p-4 text-gray-600">Human plasma</td></tr>
                        <tr class="hover:bg-gray-50"><td class="p-4 col-span-2">Atomoxetine; S,S-Reboxetine</td><td class="p-4 text-gray-600">Human plasma</td></tr>
                        <tr class="hover:bg-gray-50"><td class="p-4 col-span-2">Atorvastatin, 2-OH Atorvastatin, 4-OH Atorvastatin</td><td class="p-4 text-gray-600">Human plasma</td></tr>
                        <tr class="hover:bg-gray-50"><td class="p-4 col-span-2">Bortezomib</td><td class="p-4 text-gray-600">Human plasma</td></tr>
                        <tr class="hover:bg-gray-50"><td class="p-4 col-span-2">Bupivacaine</td><td class="p-4 text-gray-600">Human plasma</td></tr>
                        <tr class="hover:bg-gray-50"><td class="p-4 col-span-2">Bupropion, Hydroxybupropion</td><td class="p-4 text-gray-600">Human plasma</td></tr>
                        <tr class="hover:bg-gray-50"><td class="p-4 col-span-2">Caffeine; Paraxanthine</td><td class="p-4 text-gray-600">Human plasma</td></tr>
                        <tr class="hover:bg-gray-50"><td class="p-4 col-span-2">Capecitabine; 5'-DFCR / 5'-DFUR / 5-FU / FBAL</td><td class="p-4 text-gray-600">Human plasma</td></tr>
                        <tr class="hover:bg-gray-50"><td class="p-4 col-span-2">Carbamazepine 10,11-epoxide</td><td class="p-4 text-gray-600">Human plasma</td></tr>
                        <tr class="hover:bg-gray-50"><td class="p-4 col-span-2">Clopidogrel / Clopidogrel Acid</td><td class="p-4 text-gray-600">Human plasma</td></tr>
                        <tr class="hover:bg-gray-50"><td class="p-4 col-span-2">Clorazepate</td><td class="p-4 text-gray-600">Human plasma</td></tr>
                        <tr class="hover:bg-gray-50"><td class="p-4 col-span-2">Cocaine, BE, EME</td><td class="p-4 text-gray-600">Human plasma</td></tr>
                        <tr class="hover:bg-gray-50"><td class="p-4 col-span-2">Cortisol and Cortisone</td><td class="p-4 text-gray-600">Human urine</td></tr>
                        <tr class="hover:bg-gray-50"><td class="p-4 col-span-2">Cyclosporine A</td><td class="p-4 text-gray-600">Human blood</td></tr>
                        <tr class="hover:bg-gray-50"><td class="p-4 col-span-2">Cytarabine</td><td class="p-4 text-gray-600">Human plasma</td></tr>
                        <tr class="hover:bg-gray-50"><td class="p-4 col-span-2">D-Amphetamine; L-Amphetamine (chiral)</td><td class="p-4 text-gray-600">Human plasma</td></tr>
                        <tr class="hover:bg-gray-50"><td class="p-4 col-span-2">Danazol</td><td class="p-4 text-gray-600">Human plasma</td></tr>
                        <tr class="hover:bg-gray-50"><td class="p-4 col-span-2">Daunorubicin; Daunorubicinol</td><td class="p-4 text-gray-600">Human plasma</td></tr>
                        <tr class="hover:bg-gray-50"><td class="p-4 col-span-2">Decitabine</td><td class="p-4 text-gray-600">Human plasma</td></tr>
                        <tr class="hover:bg-gray-50"><td class="p-4 col-span-2">Dextromethorphan / Dextrorphan</td><td class="p-4 text-gray-600">Human plasma</td></tr>
                        <tr class="hover:bg-gray-50"><td class="p-4 col-span-2">Diclofenac</td><td class="p-4 text-gray-600">Human plasma</td></tr>
                        <tr class="hover:bg-gray-50"><td class="p-4 col-span-2">Digoxin</td><td class="p-4 text-gray-600">Human serum / Plasma / Urine</td></tr>
                        <tr class="hover:bg-gray-50"><td class="p-4 col-span-2">Docetaxel</td><td class="p-4 text-gray-600">Human plasma</td></tr>
                        <tr class="hover:bg-gray-50"><td class="p-4 col-span-2">Duloxetine</td><td class="p-4 text-gray-600">Human plasma</td></tr>
                        <tr class="hover:bg-gray-50"><td class="p-4 col-span-2">Epinephrine</td><td class="p-4 text-gray-600">Human plasma</td></tr>
                        <tr class="hover:bg-gray-50"><td class="p-4 col-span-2">Erlotinib</td><td class="p-4 text-gray-600">Human plasma</td></tr>
                        <tr class="hover:bg-gray-50"><td class="p-4 col-span-2">Erythromycin</td><td class="p-4 text-gray-600">Human plasma</td></tr>
                        <tr class="hover:bg-gray-50"><td class="p-4 col-span-2">Fenofibric Acid</td><td class="p-4 text-gray-600">Human plasma</td></tr>
                        <tr class="hover:bg-gray-50"><td class="p-4 col-span-2">Fentanyl</td><td class="p-4 text-gray-600">Human plasma</td></tr>
                        <tr class="hover:bg-gray-50"><td class="p-4 col-span-2">Fluconazole</td><td class="p-4 text-gray-600">Human plasma</td></tr>
                        <tr class="hover:bg-gray-50"><td class="p-4 col-span-2">Flurbiprofen</td><td class="p-4 text-gray-600">Human plasma</td></tr>
                        <tr class="hover:bg-gray-50"><td class="p-4 col-span-2">Gemcitabine; 2',2'-Difluorodeoxyuridine</td><td class="p-4 text-gray-600">Human plasma</td></tr>
                        <tr class="hover:bg-gray-50"><td class="p-4 col-span-2">Glyburide (total)</td><td class="p-4 text-gray-600">Human plasma</td></tr>
                        <tr class="hover:bg-gray-50"><td class="p-4 col-span-2">Imatinib</td><td class="p-4 text-gray-600">Human plasma</td></tr>
                        <tr class="hover:bg-gray-50"><td class="p-4 col-span-2">Isradipine</td><td class="p-4 text-gray-600">Human plasma</td></tr>
                        <tr class="hover:bg-gray-50"><td class="p-4 col-span-2">Itraconazole; Hydroxy Itraconazole</td><td class="p-4 text-gray-600">Human plasma</td></tr>
                        <tr class="hover:bg-gray-50"><td class="p-4 col-span-2">Ketoconazole</td><td class="p-4 text-gray-600">Human plasma</td></tr>
                        <tr class="hover:bg-gray-50"><td class="p-4 col-span-2">Lamivudine (Combivir)</td><td class="p-4 text-gray-600">Human plasma / Urine</td></tr>
                        <tr class="hover:bg-gray-50"><td class="p-4 col-span-2">Lovastatin; Lovastatin Acid</td><td class="p-4 text-gray-600">Human plasma</td></tr>
                        <tr class="hover:bg-gray-50"><td class="p-4 col-span-2">Lumefantrine</td><td class="p-4 text-gray-600">Human plasma</td></tr>
                        <tr class="hover:bg-gray-50"><td class="p-4 col-span-2">Metformin</td><td class="p-4 text-gray-600">Human plasma</td></tr>
                        <tr class="hover:bg-gray-50"><td class="p-4 col-span-2">Methotrexate / 7-Hydroxymethotrexate</td><td class="p-4 text-gray-600">Human plasma / Urine</td></tr>
                        <tr class="hover:bg-gray-50"><td class="p-4 col-span-2">Midazolam; 1-Hydroxymidazolam</td><td class="p-4 text-gray-600">Human plasma</td></tr>
                        <tr class="hover:bg-gray-50"><td class="p-4 col-span-2">Montelukast / 36-Hydroxy Montelukast</td><td class="p-4 text-gray-600">Human plasma</td></tr>
                        <tr class="hover:bg-gray-50"><td class="p-4 col-span-2">Moxifloxacin</td><td class="p-4 text-gray-600">Human plasma</td></tr>
                        <tr class="hover:bg-gray-50"><td class="p-4 col-span-2">Nisoldipine</td><td class="p-4 text-gray-600">Human plasma</td></tr>
                        <tr class="hover:bg-gray-50"><td class="p-4 col-span-2">Nordiazepam</td><td class="p-4 text-gray-600">Human plasma</td></tr>
                        <tr class="hover:bg-gray-50"><td class="p-4 col-span-2">Paclitaxel; 6-Hydroxypaclitaxel</td><td class="p-4 text-gray-600">Human plasma</td></tr>
                        <tr class="hover:bg-gray-50"><td class="p-4 col-span-2">Paliperidone</td><td class="p-4 text-gray-600">Human plasma</td></tr>
                        <tr class="hover:bg-gray-50"><td class="p-4 col-span-2">Paroxetine</td><td class="p-4 text-gray-600">Human plasma</td></tr>
                        <tr class="hover:bg-gray-50"><td class="p-4 col-span-2">Pemetrexed</td><td class="p-4 text-gray-600">Human plasma</td></tr>
                        <tr class="hover:bg-gray-50"><td class="p-4 col-span-2">Pravastatin</td><td class="p-4 text-gray-600">Human plasma</td></tr>
                        <tr class="hover:bg-gray-50"><td class="p-4 col-span-2">R and S-Amphetamine</td><td class="p-4 text-gray-600">Human plasma</td></tr>
                        <tr class="hover:bg-gray-50"><td class="p-4 col-span-2">Repaglinide</td><td class="p-4 text-gray-600">Human plasma</td></tr>
                        <tr class="hover:bg-gray-50"><td class="p-4 col-span-2">Rifampicin (Rifampin)</td><td class="p-4 text-gray-600">Human plasma</td></tr>
                        <tr class="hover:bg-gray-50"><td class="p-4 col-span-2">Risperidone</td><td class="p-4 text-gray-600">Human plasma</td></tr>
                        <tr class="hover:bg-gray-50"><td class="p-4 col-span-2">Ritonavir</td><td class="p-4 text-gray-600">Human plasma</td></tr>
                        <tr class="hover:bg-gray-50"><td class="p-4 col-span-2">Rivastigmine</td><td class="p-4 text-gray-600">Human plasma</td></tr>
                        <tr class="hover:bg-gray-50"><td class="p-4 col-span-2">Ropivacaine</td><td class="p-4 text-gray-600">Human plasma / Ultrafiltrate</td></tr>
                        <tr class="hover:bg-gray-50"><td class="p-4 col-span-2">Rosiglitazone</td><td class="p-4 text-gray-600">Human plasma</td></tr>
                        <tr class="hover:bg-gray-50"><td class="p-4 col-span-2">Rosuvastatin</td><td class="p-4 text-gray-600">Human plasma / Urine</td></tr>
                        <tr class="hover:bg-gray-50"><td class="p-4 col-span-2">R-Warfarin; S-Warfarin (chiral)</td><td class="p-4 text-gray-600">Human plasma</td></tr>
                        <tr class="hover:bg-gray-50"><td class="p-4 col-span-2">Sildenafil; N-Desmethyl Sildenafil</td><td class="p-4 text-gray-600">Human plasma</td></tr>
                        <tr class="hover:bg-gray-50"><td class="p-4 col-span-2">Simvastatin & Simvastatin Hydroxy Acid</td><td class="p-4 text-gray-600">Human plasma</td></tr>
                        <tr class="hover:bg-gray-50"><td class="p-4 col-span-2">Sunitinib/Desethyl Sunitinib</td><td class="p-4 text-gray-600">Human plasma</td></tr>
                        <tr class="hover:bg-gray-50"><td class="p-4 col-span-2">Telaprevir</td><td class="p-4 text-gray-600">Human plasma</td></tr>
                        <tr class="hover:bg-gray-50"><td class="p-4 col-span-2">Valproic Acid</td><td class="p-4 text-gray-600">Human serum</td></tr>
                        <tr class="hover:bg-gray-50"><td class="p-4 col-span-2">Verapamil; Norverapamil</td><td class="p-4 text-gray-600">Human plasma</td></tr>
                        <tr class="hover:bg-gray-50"><td class="p-4 col-span-2">Zidovudine (Combivir)</td><td class="p-4 text-gray-600">Human plasma / Urine</td></tr>
                        <tr class="hover:bg-gray-50"><td class="p-4 col-span-2">Ziprasidone</td><td class="p-4 text-gray-600">Human plasma</td></tr>
                     </tbody>
                   </table>
                </div>
              </div>
            </section>
      
            <section class="border-t border-gray-100 pt-10 pb-12">
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                
              
                <div>
                  <h2 class="text-[#140B42] text-2xl font-bold mb-4">Immunoassay Biomarker Methods</h2>
                  <div class="overflow-hidden border border-gray-200 rounded-lg">
                    <table class="w-full text-sm">
                      <thead class="bg-gray-50 text-left font-bold text-[#140B42]">
                        <tr><th class="p-3">Biomarker / Analyte (ELISA)</th><th class="p-3">Matrix</th></tr>
                      </thead>
                      <tbody class="divide-y divide-gray-100">
                        <tr><td class="p-3">HER-2/neu</td><td class="p-3 text-gray-600">Human serum</td></tr>
                        <tr><td class="p-3">β-NGF (free)</td><td class="p-3 text-gray-600">Human serum</td></tr>
                        <tr><td class="p-3">IGF-1 (total)</td><td class="p-3 text-gray-600">Human serum</td></tr>
                        <tr><td class="p-3">IGF-1 (free)</td><td class="p-3 text-gray-600">Human serum</td></tr>
                        <tr><td class="p-3">sECAD</td><td class="p-3 text-gray-600">Human serum</td></tr>
                        <tr><td class="p-3">EGFr</td><td class="p-3 text-gray-600">Human serum</td></tr>
                        <tr><td class="p-3">VEGF</td><td class="p-3 text-gray-600">Human plasma</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>

              
                <div>
                  <h2 class="text-[#140B42] text-2xl font-bold mb-4">LC-MS Biomarker Methods</h2>
                  <p class="text-xs text-gray-500 mb-4 leading-relaxed">
                    <strong>Expertise:</strong> Amino Acids, Lipids, Neurotransmitters, Nucleotides, Hormones, Peptides, Proteins – immunoprecipitation, digestion, immunoaffinity LC/LC/nano LC-MS/MS
                  </p>
                  <div class="overflow-hidden border border-gray-200 rounded-lg">
                    <table class="w-full text-sm">
                      <thead class="bg-gray-50 text-left font-bold text-[#140B42]">
                        <tr><th class="p-3">Biomarker</th><th class="p-3">Matrix</th></tr>
                      </thead>
                      <tbody class="divide-y divide-gray-100">
                        <tr><td class="p-3">9 Essential Amino Acid Panel</td><td class="p-3 text-gray-600">Human plasma/K2EDTA</td></tr>
                        <tr><td class="p-3">4β-Hydroxycholesterol</td><td class="p-3 text-gray-600">Human plasma/K2EDTA</td></tr>
                        <tr><td class="p-3">β-Nerve Growth Factor (NGF)</td><td class="p-3 text-gray-600">Human serum</td></tr>
                        <tr><td class="p-3">Cholesterol</td><td class="p-3 text-gray-600">Human plasma/K2EDTA</td></tr>
                        <tr><td class="p-3">Citrulline</td><td class="p-3 text-gray-600">Human plasma/K2EDTA</td></tr>
                        <tr><td class="p-3">7α-Hydroxy-4-cholesten-3-one</td><td class="p-3 text-gray-600">Human serum</td></tr>
                        <tr><td class="p-3">Insulin</td><td class="p-3 text-gray-600">Human serum</td></tr>
                        <tr><td class="p-3">Hepcidin</td><td class="p-3 text-gray-600">Rat serum</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>
            </section>
      
          </div>
        `},{name:"ADME or DMPK",desc:"Assess Absorption, Distribution, Metabolism, and Excretion to guide decision-making from early discovery to IND filing.",image:"https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2000",heroSubtitle:"Expertise for better development decisions",layout:"html-content",htmlContent:`
          <div class="space-y-12 animate-fadeIn text-[#140B42]">
            
            <section>
              <div class="flex flex-col md:flex-row gap-8 items-start mb-8">
                 <div class="flex-1">
                    <p class="text-gray-700 leading-relaxed mb-6 text-sm">
                      <strong>ADME</strong> represents the lifecycle of what happens to a drug once it has been administered. In context of drug development, ADME refers to the suite of tests to assess <strong>Absorption, Distribution, Metabolism, and Excretion</strong>.
                    </p>
                    <p class="text-gray-700 leading-relaxed mb-6 text-sm">
                      Developing a potential drug candidate is an iterative process that requires careful planning to reach clinical trials. Most new drug candidates fail during preclinical and clinical development, and identifying those with promising ADME and pharmacokinetics properties during the discovery stage can streamline the development process. Preclinical ADME screening, drug metabolism, and pharmacokinetics assessments focus effort on potentially viable drug candidates, guiding decision-making from early discovery to Investigational New Drug (IND) filing and beyond.
                    </p>
                 </div>
              </div>
              
              <p class="text-gray-700 leading-relaxed mb-6 max-w-6xl text-sm">
                As an industry leader of clinical trial laboratory services, AQLIVIA Laboratories can help you make informed development decisions about your small and large molecule drug candidates by offering an array of high-throughput ADME screening and Drug Metabolism and Pharmacokinetics (DMPK) services that use validated bioanalytical methods to support candidate identification and characterization. Our ADME scientists have extensive expertise with high-throughput discovery bioanalysis and LC-MS bioanalysis platforms that enable various aspects of ADME testing and pharmacokinetic (PK) testing. From <em>in vitro</em> ADME screening assays and drug-drug interaction risk assessment to metabolite identification of <em>in vitro</em> and <em>in vivo</em> samples, AQLIVIA Laboratories services facilitate rapid drug discovery ADME property optimization and regulatory filings.
              </p>
            </section>
      
            <section class="bg-[#004a75] py-8 px-6 -mx-6 md:-mx-12 md:px-12 text-white mb-10">
              <h2 class="text-2xl font-bold max-w-4xl leading-tight">
                Our <em>in vitro</em> ADME laboratory can help you save time, reduce costs, and conserve resources in your drug discovery efforts
              </h2>
            </section>
      
            <section class="space-y-12">
              
             
              <div>
                <h3 class="text-[#140B42] text-2xl font-bold mb-4 italic">In vitro screening</h3>
                <p class="text-gray-700 text-sm leading-relaxed mb-4">
                  <em>In vitro</em> screening plays a critical role in drug candidate optimization of ADME properties. Identifying the most promising drug candidates upfront accelerates the development cycle, reduces costs, streamlines the drug discovery pipeline, and guides subsequent pre-clinical and clinical studies. AQLIVIA Laboratories highly automated <em>in vitro</em> ADME laboratory offers a range of high-throughput ADME screening services to support the lead optimization stage of drug discovery, including assays for metabolic stability, cell permeability, and risk assessment for inhibiting cytochrome P450 enzymes.
                </p>
                <p class="text-gray-700 text-sm mb-4">
                  To learn more about how AQLIVIA Laboratories ADME screening bundles and LC-MS bioanalytical capabilities can support your <em>in vitro</em> and pharmacokinetic (PK) testing please visit the links below:
                </p>
                <ul class="space-y-2 ml-4 list-disc text-sm text-[#0090d0] font-medium">
                  <li><a href="#" class="hover:underline">Early Hit-to-Lead ADME Screening Bundle</a></li>
                  <li><a href="#" class="hover:underline">High Throughput ADME Services</a></li>
                </ul>
              </div>

              
              <div class="border-t border-gray-100 pt-8">
                <h3 class="text-[#140B42] text-2xl font-bold mb-4 italic">In vitro metabolism</h3>
                <p class="text-gray-700 text-sm leading-relaxed mb-4">
                  The ADME assay development pipeline includes <em>in vitro</em> ADME assays that are necessary once a lead candidate has been selected. The safety profile of a drug candidate will depend partly on its interactions with other drugs, especially those that may be administered concomitantly in standard-of-care treatment. Assessing the risks of possible drug-interactions using validated bioanalytical methods is thus an essential early step in the candidate development process. AQLIVIA Laboratories offers a suite of <em>in vitro</em> assays to support drug-drug interaction testing, including cytochrome P450 (CYP) enzyme inhibition (IC50), time-dependent CYP inhibition, induction of CYP enzymes, and CYP reaction phenotyping. All <em>in vitro</em> metabolism assay results are presented in fully QC-reviewed, regulatory-style reports to support filing of IND applications.
                </p>
                <p class="text-gray-700 text-sm mb-4">
                  To learn more about how AQLIVIA Laboratories in vitro assay bundle can inform your drug-drug interaction testing efforts, please follow the link below:
                </p>
                <ul class="space-y-2 ml-4 list-disc text-sm text-[#0090d0] font-medium">
                  <li><a href="#" class="hover:underline">Assessing drug-drug interaction risks</a></li>
                </ul>
              </div>

             
              <div class="border-t border-gray-100 pt-8">
                <h3 class="text-[#140B42] text-2xl font-bold mb-4">Metabolite</h3>
                <p class="text-gray-700 text-sm leading-relaxed mb-4">
                  Assessing a drug candidate’s metabolic profile early in the discovery process offers insight into its metabolic clearance pathways in both pre-clinical species and humans. AQLIVIA Laboratories global bioanalytical and ADME laboratory network offers a range of liquid chromatography/ mass spectrometry services to support discovery and development metabolite identification and profiling.
                </p>
                <p class="text-gray-700 text-sm mb-4 font-bold">
                  Specific capabilities using high-resolution mass spectrometry (HRMS) include:
                </p>
                <ul class="space-y-2 ml-4 list-disc text-sm text-gray-700 mb-6">
                  <li>Metabolite profiling and identification using liver microsomes or hepatocytes, as well as novel hepatocyte co-culture models for profiling slowly metabolized drug candidates</li>
                  <li>Exploratory profiling using unlabeled drug in preclinical and human clinical samples</li>
                  <li>Radio-profiling of both preclinical and human clinical samples</li>
                  <li>Reactive intermediate screens evaluating glutathione/cyanide trapping drug candidates (microsomes)</li>
                </ul>
                <p class="text-gray-700 text-sm mb-4">
                  To explore how AQLIVIA Laboratories can partner to characterize metabolites in your study, please follow the link below:
                </p>
                <ul class="space-y-2 ml-4 list-disc text-sm text-[#0090d0] font-medium">
                  <li><a href="#" class="hover:underline">ADME Assays & Metabolite Profiling</a></li>
                </ul>
              </div>

            </section>
      
            <section class="bg-gray-50 -mx-6 md:-mx-12 px-6 md:px-12 py-8 border-t border-gray-200 mt-8">
               <p class="text-sm font-bold text-[#140B42]">
                 Click here to learn more about our expansive expertise in <a href="#" class="text-[#0090d0] hover:underline">Discovery Bioanalysis</a>.
               </p>
            </section>
      
          </div>
        `},{name:"Early Hit-to-Lead ADME Screening Bundle",desc:"Bundled screening assays (metabolic stability, CYP inhibition, cell permeability) to accelerate candidate selection during lead optimization.",image:"https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2000",heroSubtitle:"Optimized ADME and pharmacokinetics properties in the discovery stage.",layout:"html-content",htmlContent:`
          <div class="space-y-12 animate-fadeIn text-[#140B42]">
            
            <section>
              <p class="text-gray-700 leading-relaxed mb-6 text-sm">
                ADME screening during the lead optimization stage of drug discovery positively impacts drug candidate selection with an enhanced probability of success in clinical trials. Since most new drug candidates fail during preclinical and clinical development, and the late stage of the drug development cycle can be a lengthy and costly process, any means of identifying drug candidates with optimized ADME and pharmacokinetics properties in the discovery stage will have a significant impact on the drug discovery process overall.
              </p>
            </section>
      
            <section>
              <h2 class="text-[#140B42] text-2xl font-bold mb-4">Focused on Solutions to Address Drug Metabolism and Pharmacokinetics (DMPK) Issues and to Enable the Success of Our Clients</h2>
              <p class="text-gray-700 leading-relaxed mb-6 text-sm">
                Our scientists provide a range of DMPK services, routinely conducting industry standard <em>in vitro</em> metabolism and DDI-based assays, including highly automated ADME <em>in vitro</em> screens. We can help drive your discovery phase structure activity relationship (SAR) by optimizing for ADME properties, in parallel to your receptor binding potency and selectivity, for more rapid identification of high quality drug candidates.
              </p>
              <p class="text-gray-700 leading-relaxed mb-8 text-sm">
                Metabolic stability, risk assessment for inhibiting key Cytochrome P450 enzymes, and cell permeability are three main early hit to lead ADME screening assays that all new chemical entities (NCEs) are tested for in the industry in effort to optimize key ADME properties.
              </p>
            </section>
      
            <section>
              <h2 class="text-[#140B42] text-2xl font-bold mb-8 italic border-b border-gray-200 pb-4">
                In Vitro ADME Screening Services: Early Hit-to-Lead ADME Screening Bundle
              </h2>
      
              
              <div class="border border-[#140B42] rounded-lg overflow-hidden mb-8 shadow-sm">
                <div class="bg-[#140B42] text-white py-3 px-6 font-bold text-center text-lg">
                  Intrinsic Clearance Assay in Liver Microsomes
                </div>
                <div class="bg-white p-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-xs md:text-sm text-gray-700">
                  <ul class="space-y-2 list-disc pl-5 marker:text-[#0090d0]">
                    <li>Liver microsomes; species selectable</li>
                    <li>Typical turnaround time is ≤10 business days</li>
                    <li>Test article prepared at 10mM in DMSO</li>
                    <li>Substrate and positive control incubated at 0.3µM</li>
                    <li>Incubations performed in HLMs at a protein concentration of 0.25mg/mL</li>
                  </ul>
                  <ul class="space-y-2 list-disc pl-5 marker:text-[#0090d0]">
                    <li>Incubation performed using 1mM co-factor (NADPH)</li>
                    <li>Incubation time points (+NADPH): 0, 5, 15, 30, 45 minutes</li>
                    <li>45 min negative control (-NADPH) for recovery assessment</li>
                    <li>Samples analysis and quantitation by LC-MS/MS</li>
                    <li>Deliverables: Unscaled intrinsic clearance, recovery</li>
                    <li>Results provided via electronic spreadsheet format</li>
                  </ul>
                </div>
              </div>

            
              <div class="border border-[#140B42] rounded-lg overflow-hidden mb-8 shadow-sm">
                <div class="bg-[#140B42] text-white py-3 px-6 font-bold text-center text-lg">
                  CYP Single Concentration Cocktail Assay (CYP 2C9, 2D6, 3A4)
                </div>
                <div class="bg-white p-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-xs md:text-sm text-gray-700">
                  <ul class="space-y-2 list-disc pl-5 marker:text-[#0090d0]">
                    <li>Human Liver Microsomes (HLM)</li>
                    <li>Typical turnaround time is ≤10 business days</li>
                    <li>Inhibitors prepared at 10mM in DMSO</li>
                    <li>CYP3A4 – Midazolam (5µM), CYP2D6 – Bufuralol (10µM), CYP2C9 – Diclofenac (10µM); substrates incubated as a cocktail</li>
                    <li>Test article and positive control inhibitor incubated at 10µM</li>
                    <li>Incubations performed in HLMs at a protein concentration of 0.05mg/mL</li>
                    <li>Incubation performed using 1mM co-factor (NADPH)</li>
                  </ul>
                  <ul class="space-y-2 list-disc pl-5 marker:text-[#0090d0]">
                    <li>Incubation time: 3 minutes</li>
                    <li>LC/MS-MS analysis using cocktail of heavy labeled internal standard for each metabolite</li>
                    <li>A decrease in the formation of the metabolites compared to vehicle control is used to calculate a percent inhibition value</li>
                    <li>Samples analysis and quantitation by LC/MS-MS</li>
                    <li>Deliverables: Percent inhibition at 10µM</li>
                    <li>Results provided via electronic spreadsheet format</li>
                  </ul>
                </div>
              </div>

             
              <div class="border border-[#140B42] rounded-lg overflow-hidden mb-8 shadow-sm">
                <div class="bg-[#140B42] text-white py-3 px-6 font-bold text-center text-lg">
                  MDCK II Bi-directional Permeability Assay
                </div>
                <div class="bg-white p-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-xs md:text-sm text-gray-700">
                  <ul class="space-y-2 list-disc pl-5 marker:text-[#0090d0]">
                    <li>MDCK II cell line (Madin-Darby Canine Kidney cells) – Sigma Aldrich (ECACC)</li>
                    <li>Typical turnaround time is ≤15 business days</li>
                    <li>Test article prepared at 10mM in DMSO</li>
                    <li>Substrate and positive control incubated at 1µM in duplicate</li>
                    <li>Incubations performed in both A:B and B:A in the presence of Cyclosporin A (P-gp inhibitor)</li>
                    <li>Incubations carried out in cell culture incubator at 37°C/5%CO2/95% RH</li>
                  </ul>
                  <ul class="space-y-2 list-disc pl-5 marker:text-[#0090d0]">
                    <li>Samples taken from the A:B plate and B:A plate following a 3 hour incubation</li>
                    <li>A 9-pt concentration curve is prepared for quantitation of samples (2000, 1000, 500, 250, 125, 62.5, 31.3, 15.6, 7.81nM)</li>
                    <li>Dextran Texas Red (DTR) used as monolayer integrity check</li>
                    <li>Sample analysis and quantitation by LC/MS-MS</li>
                    <li>Deliverables: Papp in both A:B and B:A direction, BA:AB ratio, mass balance (using both pre and post dose solutions), percent cell leakage (% DTR)</li>
                    <li>Results provided via electronic spreadsheet format</li>
                  </ul>
                </div>
              </div>

            </section>
      
          </div>
        `},{name:"In Vitro Screening",desc:"High-throughput ADME screening services to support lead optimization, including assays for metabolic stability and CYP inhibition risk.",image:"https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=2000",heroSubtitle:"High-throughput screening to prioritize drug candidates and optimize efficacy.",layout:"html-content",htmlContent:`
          <div class="space-y-10 animate-fadeIn text-[#140B42]">
            
            <section>
              <p class="text-gray-700 leading-relaxed mb-6 text-sm">
                <em>In vitro</em> ADME screening during the lead optimization stage of drug discovery positively impacts drug candidate selection with an enhanced probability of success in clinical trials. Since most new drug candidates fail during preclinical and clinical development, and the late stage of the drug development cycle can be a lengthy and costly process, any means of identifying drug candidates with optimized ADME and pharmacokinetics properties in the discovery stage will have a significant impact on the drug discovery process overall.
              </p>
              <p class="text-gray-700 leading-relaxed text-sm">
                AQLIVIA Laboratories highly automated <em>in vitro</em> ADME laboratory partners with small, mid and large pharmaceutical customers around the world to perform large-scale ADME screening assays using in-house or client-customized protocols. Our rapid ADME assay development turnaround time enables parallel optimization of the ADME properties of your chemical platform, alongside your potency and selectivity targets, thereby enabling you to make important decisions about your potential candidates.
              </p>
            </section>
      
            <section>
              <h3 class="text-[#140B42] font-bold text-lg mb-4">Partner with us for your preclinical ADME screening needs to realize:</h3>
              <ul class="space-y-4 text-sm text-gray-700">
                <li class="leading-relaxed">
                  <strong class="text-[#0090d0]">Increased Speed:</strong> Establishment of high-throughput ADME assays allows for the prioritization of your drug candidates by their ADME properties in parallel with optimization of their efficacy at early discovery phases. This approach improves the overall quality of your drug candidates and the probability of their success, thereby shortening the drug discovery and development process.
                </li>
                <li class="leading-relaxed">
                  <strong class="text-[#0090d0]">Reduced Cost and Development Cycle Times:</strong> We generate <em>in vitro</em> screening data that customers can use in their <em>in silico</em> models. This combination of in vitro screening and in-silico alternatives helps customers generate ADME data that can lead to a reduction in animal studies, and a more efficient and potentially less expensive study.
                </li>
                <li class="leading-relaxed">
                  <strong class="text-[#0090d0]">Optimized Discovery Cycle Time:</strong> By ensuring that only the most promising candidates are progressed through to clinical trials, the drug discovery pipeline can become more streamlined and efficient once clinical trials begin. Optimizing drug leads early on reduces the cost and time of progressing unsuccessful compounds through to the later stages of development.
                </li>
                <li class="leading-relaxed">
                  <strong class="text-[#0090d0]">Detailed Dose Levels:</strong> Pharmacokinetic (PK) parameters are extrapolated from measurement of drug concentration in the plasma, blood, or other biological matrices over a selected period. This provides information that can guide your future animal and clinical studies for the selection of the dose levels and frequency of administration.
                </li>
              </ul>
            </section>

            <section class="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <h3 class="text-[#140B42] font-bold text-base mb-4">Compound Management for HT-ADME Screening (using comPOUND® -20°C, +4°C, or ambient storage)</h3>
              <ul class="space-y-2 text-sm text-gray-700 list-disc pl-5">
                <li>Can store up to 200,000 compounds in bar-coded tubes</li>
                <li>Compounds can be retrieved within a few minutes</li>
                <li>Can store solubilized compounds for clients for ease and speed of use</li>
              </ul>
            </section>
      
            <section class="border-t border-gray-200 pt-6">
              <p class="text-gray-700 text-sm italic leading-relaxed">
                Our experienced scientists perform a range of high-throughput screening services, routinely conducting industry-standard <em>in vitro</em> ADME assays and continuously developing novel <em>in vitro</em> assays to address current metabolism issues and the evolving needs of our customers.
              </p>
            </section>
      
          </div>
        `},{name:"Discovery Bioanalysis",desc:"Rapid turnaround discovery analyses to assess drug exposure and pharmacokinetics for in vivo pharmacology and toxicology studies.",image:"https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2000",heroSubtitle:"Identifying candidates with promising ADME and pharmacokinetics properties is pivotal.",layout:"html-content",htmlContent:`
          <div class="space-y-12 animate-fadeIn text-[#140B42]">
            
            <section>
              <p class="text-gray-700 leading-relaxed mb-6 max-w-6xl text-sm">
                In the dynamic landscape of drug discovery, identifying candidates with promising <strong>ADME</strong> (Absorption, Distribution, Metabolism, and Excretion) and <strong>pharmacokinetics</strong> properties is pivotal. These early-stage assessments lay the groundwork for future clinical trials and regulatory approvals.
              </p>
              <p class="text-gray-700 leading-relaxed mb-6 max-w-6xl text-sm">
                However, the journey from discovery to successful outcomes demands more than just scientific insights. It requires <strong>reliable, qualified measurements</strong> at a clinical scale. That’s where AQLIVIA Laboratories global bioanalytical services network excels.
              </p>
            </section>
      
            <section class="flex flex-col items-center py-10 bg-gray-50 rounded-xl border border-gray-100">
               <h3 class="text-[#140B42] font-bold text-xl mb-8">Integrated Discovery Capabilities</h3>
               
               <div class="max-w-2xl w-full">
                 <img src="/Aqvilia/Discovery Bioanalysis Page Diagram.webp" alt="Discovery Bioanalysis Hexagon Diagram" class="w-full h-auto object-contain drop-shadow-md" />
               </div>
            </section>
      
            <section class="border-t border-gray-100 pt-10">
              <h2 class="text-[#140B42] text-2xl font-bold mb-6">Our expertise spans a wide range of areas, including:</h2>
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                <ul class="space-y-3 text-sm text-gray-700">
                  <li class="flex items-start gap-3">
                    <span class="w-1.5 h-1.5 bg-[#0090d0] rounded-full mt-2 flex-shrink-0"></span>
                    Bioanalysis for all non-regulated studies
                  </li>
                  <li class="flex items-start gap-3">
                    <span class="w-1.5 h-1.5 bg-[#0090d0] rounded-full mt-2 flex-shrink-0"></span>
                    Biological fluids, tissue homogenates, dried blood spot (DBS) and other micro-sampling techniques
                  </li>
                  <li class="flex items-start gap-3">
                    <span class="w-1.5 h-1.5 bg-[#0090d0] rounded-full mt-2 flex-shrink-0"></span>
                    Tiered offerings with varying level of rigor based on the program stage and needs
                  </li>
                  <li class="flex items-start gap-3">
                    <span class="w-1.5 h-1.5 bg-[#0090d0] rounded-full mt-2 flex-shrink-0"></span>
                    Tecan liquid handlers for sample processing and Watson LIMS for data efficiency
                  </li>
                  <li class="flex items-start gap-3">
                    <span class="w-1.5 h-1.5 bg-[#0090d0] rounded-full mt-2 flex-shrink-0"></span>
                    High throughput capacity and quick turnaround time
                  </li>
                  <li class="flex items-start gap-3">
                    <span class="w-1.5 h-1.5 bg-[#0090d0] rounded-full mt-2 flex-shrink-0"></span>
                    Flexible offerings from fit for purpose to method qualification
                  </li>
                </ul>

                <ul class="space-y-3 text-sm text-gray-700">
                  <li class="flex items-start gap-3">
                    <span class="w-1.5 h-1.5 bg-[#0090d0] rounded-full mt-2 flex-shrink-0"></span>
                    Plasma, serum, whole blood, urine, CSF and various tissue sample analysis for PK/PD, pharmacology, and non-regulated toxicology studies
                  </li>
                  <li class="flex items-start gap-3">
                    <span class="w-1.5 h-1.5 bg-[#0090d0] rounded-full mt-2 flex-shrink-0"></span>
                    Analysis for drug and metabolite(s) as needed and cassette study sample analysis
                  </li>
                  <li class="flex items-start gap-3">
                    <span class="w-1.5 h-1.5 bg-[#0090d0] rounded-full mt-2 flex-shrink-0"></span>
                    Flexible standard curve ranges with appropriate LLOQ as needed
                  </li>
                  <li class="flex items-start gap-3">
                    <span class="w-1.5 h-1.5 bg-[#0090d0] rounded-full mt-2 flex-shrink-0"></span>
                    Non-compartmental PK analysis and SEND data files
                  </li>
                  <li class="flex items-start gap-3">
                    <span class="w-1.5 h-1.5 bg-[#0090d0] rounded-full mt-2 flex-shrink-0"></span>
                    Non-regulated preclinical and clinical (exploratory purposes) sample analysis
                  </li>
                  <li class="flex items-start gap-3">
                    <span class="w-1.5 h-1.5 bg-[#0090d0] rounded-full mt-2 flex-shrink-0"></span>
                    Method development and transfer for regulated bioanalysis
                  </li>
                </ul>
              </div>
            </section>
      
          </div>
        `},{name:"High-Throughput ADME Services",desc:"Highly automated laboratory enabling large-scale screening efforts using in-house or client-customized protocols.",image:"https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2000",heroSubtitle:"Capabilities that accelerate preclinical studies.",layout:"html-content",htmlContent:`
          <div class="space-y-16 animate-fadeIn text-[#140B42]">
            
            <section>
              <p class="text-gray-700 leading-relaxed mb-6 max-w-6xl text-sm">
                <em>In vitro</em> ADME screening during the lead optimization stage of drug discovery positively impacts drug candidate selection with an enhanced probability of success in clinical trials. Since most new drug candidates fail during preclinical and clinical development, and the late stage of the drug development cycle can be a lengthy and costly process, any means of identifying drug candidates with optimized ADME and pharmacokinetics properties in the discovery stage will have a significant impact on the drug discovery process overall.
              </p>
              <p class="text-gray-700 leading-relaxed mb-6 max-w-6xl text-sm">
                AQLIVIA Laboratories highly automated <em>in vitro</em> ADME laboratory partners with small, mid and large pharmaceutical customers around the world to perform large scale ADME screening assays using in-house or client-customized protocols. Our rapid ADME assay development turnaround time enables parallel optimization of the ADME properties of your chemical platform, alongside your potency and selectivity targets, thereby enabling you to make important decisions about your potential candidates.
              </p>
            </section>
      
            <section class="border-t border-gray-100 pt-12">
              <h2 class="text-[#140B42] text-2xl font-bold mb-8">Partner with us for your preclinical ADME screening needs to realize:</h2>
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                <div class="bg-white p-6 rounded-xl border-l-4 border-[#0090d0] shadow-sm hover:shadow-md transition-all">
                  <h3 class="text-[#0090d0] font-bold text-lg mb-3">Increased Speed</h3>
                  <p class="text-gray-700 text-sm leading-relaxed">
                    Establishment of high-throughput ADME assays allows for the prioritization of your drug candidates by their ADME properties in parallel with optimization of their efficacy at early discovery phases. This approach improves the overall quality of your drug candidates and the probability of their success, thereby shortening the drug discovery and development process.
                  </p>
                </div>

                <div class="bg-white p-6 rounded-xl border-l-4 border-[#0090d0] shadow-sm hover:shadow-md transition-all">
                  <h3 class="text-[#0090d0] font-bold text-lg mb-3">Reduced Cost & Cycle Times</h3>
                  <p class="text-gray-700 text-sm leading-relaxed">
                    We generate <em>in vitro</em> screening data that customers can use in their <em>in silico</em> models. This combination of <em>in vitro</em> screening and <em>in silico</em> alternatives helps customers generate ADME data that can lead to a reduction in animal studies, and a more efficient and potentially less expensive study.
                  </p>
                </div>

                <div class="bg-white p-6 rounded-xl border-l-4 border-[#0090d0] shadow-sm hover:shadow-md transition-all">
                  <h3 class="text-[#0090d0] font-bold text-lg mb-3">Optimized Discovery Cycle Time</h3>
                  <p class="text-gray-700 text-sm leading-relaxed">
                    By ensuring that only the most promising candidates are progressed through to clinical trials, the drug discovery pipeline can become more streamlined and efficient once clinical trials begin. Optimizing drug leads early on reduces the cost and time of progressing unsuccessful compounds through to the later stages of development.
                  </p>
                </div>

                <div class="bg-white p-6 rounded-xl border-l-4 border-[#0090d0] shadow-sm hover:shadow-md transition-all">
                  <h3 class="text-[#0090d0] font-bold text-lg mb-3">Detailed Dose Levels</h3>
                  <p class="text-gray-700 text-sm leading-relaxed">
                    Pharmacokinetic (PK) parameters are extrapolated from measurement of drug concentration in the plasma, blood, or other biological matrices over a selected time period. This provides information that can guide your future animal and clinical studies for the selection of the dose levels and frequency of administration.
                  </p>
                </div>

              </div>
            </section>

            <section class="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <p class="text-gray-700 leading-relaxed mb-6 text-sm">
                Our experienced scientists perform a range of high-throughput screening services, routinely conducting industry-standard <em>in vitro</em> ADME assays and continuously developing novel <em>in vitro</em> assays to address current metabolism issues and the evolving needs of our customers.
              </p>
              <p class="text-gray-700 leading-relaxed mb-6 text-sm">
                The initiation of early ADME screening dramatically decreases the proportion of compounds failing in clinical trials. Our preclinical ADME screening services help customers eliminate weak drug candidates prior to clinical development, thereby helping them to focus their resources on potential drug candidates so that the right drugs get to the right patients faster and more efficiently.
              </p>
              <div class="inline-block bg-[#140B42] text-white px-6 py-3 rounded-lg text-sm font-bold shadow-lg">
                Capacity and on-time delivery is critical to this process.
              </div>
            </section>
      
          </div>
        `},{name:"In Vitro Metabolism",desc:"In vitro ADME assays necessary once a lead candidate has been selected, including metabolic stability and metabolite identification.",image:"https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2000",heroSubtitle:"Assessing the risks of possible drug-interactions using validated bioanalytical methods.",layout:"html-content",htmlContent:`
          <div class="space-y-16 animate-fadeIn text-[#140B42]">
            
            <section>
              <p class="text-gray-700 leading-relaxed mb-6 max-w-6xl text-sm">
                The ADME assay development pipeline includes <em>in vitro</em> ADME assays that are necessary once a lead candidate has been selected. The safety profile of a drug candidate will depend partly on its interactions with other drugs, especially those that may be administered concomitantly in standard-of-care treatment.
              </p>
              <p class="text-gray-700 leading-relaxed mb-6 max-w-6xl text-sm">
                Assessing the risks of possible drug-interactions using validated bioanalytical methods is thus an essential early step in the candidate development process. AQLIVIA Laboratories offers a suite of <em>in vitro</em> assays to support drug-drug interaction testing, including cytochrome P450 (CYP) enzyme inhibition (IC50), time-dependent CYP inhibition, induction of CYP enzymes, and CYP reaction phenotyping. All <em>in vitro</em> metabolism assay results are presented in fully QC-reviewed, regulatory-style reports to support filing of IND applications.
              </p>
            </section>
      
            <section class="border-t border-gray-100 pt-12">
              <div class="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-10">
                
                <div class="flex-1">
                  <h3 class="text-[#140B42] text-2xl font-bold mb-4">Assessing Drug-Drug Interaction Risks</h3>
                  <p class="text-gray-600 text-sm leading-relaxed mb-8">
                    Drug-drug interaction testing provides a definitive assessment of these risks and should be performed early after selection of a lead candidate.
                  </p>
                  <a href="/contact" class="inline-block bg-[#0090d0] text-white px-8 py-3 rounded text-sm font-bold uppercase tracking-wider hover:bg-[#007bb5] transition-colors shadow-sm">
                    Learn More
                  </a>
                </div>

                <div class="w-full md:w-1/3">
                   <img src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=600" alt="Molecular Interaction" class="w-full h-auto rounded-lg shadow-md object-cover" />
                </div>

              </div>
            </section>
      
          </div>
        `},{name:"Assessing drug-drug interaction risks",desc:"Determine any drug-drug interaction liability for your new drug/molecule.",image:"https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2000",heroSubtitle:"Determine any drug-drug interaction liability for your new drug/molecule",layout:"html-content",htmlContent:`
          <div class="space-y-16 animate-fadeIn text-[#140B42]">
            
            <section>
              <p class="text-gray-700 leading-relaxed mb-6 max-w-6xl text-sm">
                During development of new chemical entities (NCEs), an investigation into the likelihood of drug-drug interactions (DDI) is vital to the progression of these drug candidates. Possible drug-drug interactions can alter the pharmacokinetics of concomitantly administered medications, altering efficacy or toxicity. Drug-drug interaction testing provides a definitive assessment of these risks and should be performed early after selection of a lead candidate.
              </p>
              <p class="text-gray-700 leading-relaxed mb-6 max-w-6xl text-sm">
                As part of AQLIVIA Laboratories suite of ADME services, our scientists routinely evaluate these risks through validated in vitro assays to determine the cytochrome P450 enzymes responsible for metabolism of NCEs and to assess the potential for NCEs to inhibit and/or induce these enzymes. These data will be included in the filing of the Investigational New Drug (IND) application to provide guideposts for clinical DDI assessments during the further development of drug candidates.
              </p>
            </section>
      
            <section class="border-t border-gray-100 pt-12">
              <h2 class="text-[#140B42] text-3xl font-bold mb-8">In Vitro IND-Enabling DDI Assays</h2>
              
              <div class="grid grid-cols-1 gap-10">
                
              
                <div class="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                  <h3 class="text-[#0090d0] text-xl font-bold mb-4">Inhibition of Cytochrome P450 (CYP) Enzymes</h3>
                  <ul class="space-y-3 text-sm text-gray-700">
                    <li class="flex items-start gap-3"><span class="w-1.5 h-1.5 bg-[#140B42] rounded-full mt-2 flex-shrink-0"></span> Assess the potential of test article to inhibit the main cytochrome P450 isoforms: CYP1A2, CYP2B6, CYP2C8, CYP2C9, CYP2C19, CYP2D6, and CYP3A4 (up to 3 probe substrates)</li>
                    <li class="flex items-start gap-3"><span class="w-1.5 h-1.5 bg-[#140B42] rounded-full mt-2 flex-shrink-0"></span> Test article is incubated with pooled human liver microsomes (HLM) and NADPH in the presence of a cytochrome P450 isoform-specific probe substrate (~Km)</li>
                    <li class="flex items-start gap-3"><span class="w-1.5 h-1.5 bg-[#140B42] rounded-full mt-2 flex-shrink-0"></span> Optional assessment of time-dependent inhibition (TDI) following pre-incubation of 30 minutes</li>
                    <li class="flex items-start gap-3"><span class="w-1.5 h-1.5 bg-[#140B42] rounded-full mt-2 flex-shrink-0"></span> Sample analysis and quantitation by validated and optimized LC-MS/MS methods</li>
                    <li class="flex items-start gap-3"><span class="w-1.5 h-1.5 bg-[#140B42] rounded-full mt-2 flex-shrink-0"></span> IC50 values are generated to assess reversible inhibition and signals for TDI (IC50 shift ≥ 1.5)</li>
                    <li class="flex items-start gap-3"><span class="w-1.5 h-1.5 bg-[#140B42] rounded-full mt-2 flex-shrink-0"></span> If inhibition observed for any CYP enzyme, further kinetic analysis can be performed to determine the Ki value and type of reversible inhibition observed (competitive, etc.)</li>
                    <li class="flex items-start gap-3 text-[#0090d0] font-bold"><span class="w-1.5 h-1.5 bg-[#0090d0] rounded-full mt-2 flex-shrink-0"></span> Full QC reviewed, regulatory style report</li>
                  </ul>
                </div>

               
                <div class="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                  <h3 class="text-[#0090d0] text-xl font-bold mb-4">Time-dependent Inhibition of CYP Enzymes</h3>
                  <div class="flex flex-col md:flex-row gap-8">
                    <ul class="space-y-3 text-sm text-gray-700 flex-1">
                      <li class="flex items-start gap-3"><span class="w-1.5 h-1.5 bg-[#140B42] rounded-full mt-2 flex-shrink-0"></span> Determine the kinetics of time-dependent inhibition of the main CYP isoforms: CYP1A2, CYP2B6, CYP2C8, CYP2C9, CYP2C19, CYP2D6, and CYP3A4</li>
                      <li class="flex items-start gap-3"><span class="w-1.5 h-1.5 bg-[#140B42] rounded-full mt-2 flex-shrink-0"></span> Test article is incubated with pooled human liver microsomes (HLM) and NADPH for various time points for inactivation phase before dilution into the activity assay mixture containing a cytochrome P450 isoform-specific probe substrate</li>
                      <li class="flex items-start gap-3"><span class="w-1.5 h-1.5 bg-[#140B42] rounded-full mt-2 flex-shrink-0"></span> Sample analysis and quantitation by validated and optimized LC-MS/MS methods</li>
                      <li class="flex items-start gap-3"><span class="w-1.5 h-1.5 bg-[#140B42] rounded-full mt-2 flex-shrink-0"></span> The percent remaining enzyme activity at each inactivation timepoint will be determined for each inhibitor concentration (kobs rate determination) and used to calculate the kinetic parameters (KI and kinact) using nonlinear regression</li>
                      <li class="flex items-start gap-3 text-[#0090d0] font-bold"><span class="w-1.5 h-1.5 bg-[#0090d0] rounded-full mt-2 flex-shrink-0"></span> Full QC reviewed, regulatory style report</li>
                    </ul>
                    <div class="md:w-1/3">
                       <img src="/Aqvilia/graph-png-1.webp" alt="Inhibition Graph" class="w-full h-auto rounded shadow-sm border border-gray-100" />
                    </div>
                  </div>
                </div>

               
                <div class="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                  <h3 class="text-[#0090d0] text-xl font-bold mb-4">Induction of CYP Enzymes</h3>
                  <div class="flex flex-col md:flex-row gap-8">
                    <ul class="space-y-3 text-sm text-gray-700 flex-1">
                      <li class="flex items-start gap-3"><span class="w-1.5 h-1.5 bg-[#140B42] rounded-full mt-2 flex-shrink-0"></span> Assess the potential of test article to induce CYP1A2, CYP2B6, and CYP3A4 through mRNA analysis and/or enzymatic activity</li>
                      <li class="flex items-start gap-3"><span class="w-1.5 h-1.5 bg-[#140B42] rounded-full mt-2 flex-shrink-0"></span> Pretests to inform top concentration of test article include assessment of solubility in incubation media and cytotoxicity in a single lot of hepatocytes</li>
                      <li class="flex items-start gap-3"><span class="w-1.5 h-1.5 bg-[#140B42] rounded-full mt-2 flex-shrink-0"></span> Test article is incubated with plated cryopreserved human hepatocytes pre-characterized to be responsive to CYP1A2, CYP2B6, and CYP3A4 induction before analysis of mRNA levels and/or addition of probe substrate(s) to assess enzymatic activity</li>
                      <li class="flex items-start gap-3"><span class="w-1.5 h-1.5 bg-[#140B42] rounded-full mt-2 flex-shrink-0"></span> Optional determination of the induction of CYP2C8, CYP2C9, and CYP2C19 is available</li>
                      <li class="flex items-start gap-3"><span class="w-1.5 h-1.5 bg-[#140B42] rounded-full mt-2 flex-shrink-0"></span> Fold-induction over vehicle control is calculated. EC50 and Emax values to be calculated if induction is concentration-dependent and >2-fold at max</li>
                      <li class="flex items-start gap-3 text-[#0090d0] font-bold"><span class="w-1.5 h-1.5 bg-[#0090d0] rounded-full mt-2 flex-shrink-0"></span> Full QC reviewed, regulatory style report</li>
                    </ul>
                    <div class="md:w-1/3">
                       <img src="/Aqvilia/graph-2.webp" alt="Induction Graph" class="w-full h-auto rounded shadow-sm border border-gray-100" />
                    </div>
                  </div>
                </div>

               
                <div class="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                  <h3 class="text-[#0090d0] text-xl font-bold mb-4">CYP Reaction Phenotyping</h3>
                    <div class="flex flex-col md:flex-row gap-8">
                  <ul class="space-y-3 text-sm text-gray-700">
                    <li class="flex items-start gap-3"><span class="w-1.5 h-1.5 bg-[#140B42] rounded-full mt-2 flex-shrink-0"></span> Determine the CYP enzymes involved in the metabolism of a test article using two complementary assay designs</li>
                    <li class="flex items-start gap-3"><span class="w-1.5 h-1.5 bg-[#140B42] rounded-full mt-2 flex-shrink-0"></span> Evaluating the percent contribution of each of 7 CYP enzymes in the metabolism of the test article by sequentially inhibiting CYP activity</li>
                    <li class="flex items-start gap-3"><span class="w-1.5 h-1.5 bg-[#140B42] rounded-full mt-2 flex-shrink-0"></span> Test article is incubated with HLM and NADPH in the absence and presence of selective CYP-specific inhibitors</li>
                    <li class="flex items-start gap-3"><span class="w-1.5 h-1.5 bg-[#140B42] rounded-full mt-2 flex-shrink-0"></span> Fraction metabolized by each CYP enzyme will be calculated (fm,CYP)</li>
                    <li class="flex items-start gap-3"><span class="w-1.5 h-1.5 bg-[#140B42] rounded-full mt-2 flex-shrink-0"></span> Evaluating the percent contribution of CYP enzymes in the metabolism of the test article using recombinantly expressed CYP enzymes</li>
                    <li class="flex items-start gap-3"><span class="w-1.5 h-1.5 bg-[#140B42] rounded-full mt-2 flex-shrink-0"></span> Individual CYP relative activity factors (RAF) will be used to estimate fraction metabolized by each CYP enzyme</li>
                    <li class="flex items-start gap-3 text-[#0090d0] font-bold"><span class="w-1.5 h-1.5 bg-[#0090d0] rounded-full mt-2 flex-shrink-0"></span> Full QC reviewed, regulatory style report</li>
                  </ul>
                  <div class="md:w-1/3">
                       <img src="/Aqvilia/graph-3.webp" alt="Inhibition Graph" class="w-full h-auto rounded shadow-sm border border-gray-100" />
                    </div>
                </div>
                 </div>

              </div>
            </section>

            <section class="bg-gray-50 p-8 rounded-2xl border border-gray-100 mt-8">
              <h2 class="text-[#140B42] text-2xl font-bold mb-6">In Vivo DDI Study Support</h2>
              <p class="text-gray-700 leading-relaxed mb-6 text-sm">
                At AQLIVIA Laboratories, we specialize in delivering high-quality bioanalytical support for in vivo drug-drug interaction (DDI) studies, with a proven track record of managing the complex logistics these studies demand. We offer a full list of non-proprietary assays to support your in vivo DDI studies.
              </p>
              
              <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                <div>
                   <h4 class="font-bold text-[#0090d0] text-sm uppercase mb-3">Expertise in Logistics</h4>
                   <p class="text-xs text-gray-600 leading-relaxed">
                     Decades of experience navigating the intricacies of DDI study design. From coordinating multi-arm crossover studies to managing time-sensitive sample collection, we ensure seamless integration.
                   </p>
                </div>
                <div>
                   <h4 class="font-bold text-[#0090d0] text-sm uppercase mb-3">Extensive Capacity</h4>
                   <p class="text-xs text-gray-600 leading-relaxed">
                     Robust infrastructure equipped to handle high-throughput sample analysis without compromising turnaround time. State-of-the-art LC-MS/MS platforms and automated sample preparation.
                   </p>
                </div>
                <div>
                   <h4 class="font-bold text-[#0090d0] text-sm uppercase mb-3">Uncompromising Quality</h4>
                   <p class="text-xs text-gray-600 leading-relaxed">
                     Validated methods, rigorous quality control processes, and adherence to global regulatory standards ensure that your data is accurate, reproducible, and audit-ready.
                   </p>
                </div>
              </div>
            </section>
      
          </div>
        `},{name:"ADME Assays and Metabolite Profiling",desc:"Integrated drug metabolism and pharmacokinetic solutions, including clinical clearance predictions and metabolite identification.",image:"https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2000",heroSubtitle:"A full range of bioanalytical services including metabolic stability, enzyme identification, and metabolite identification.",layout:"html-content",htmlContent:`
          <div class="space-y-16 animate-fadeIn text-[#140B42]">
            
            <section>
              <p class="text-gray-700 leading-relaxed mb-6 max-w-6xl text-sm">
                A full range of bioanalytical services, including metabolic stability, enzyme identification, metabolite identification, metabolite absorption, metabolite stability assays, and drug-drug interaction assessments - ranging from highly automated screens to definitive studies that enable regulatory submission.
              </p>
            </section>
      
            <section class="border-t border-gray-100 pt-12">
              <h2 class="text-[#140B42] text-3xl font-bold mb-6">Tailored solutions for your DMPK services needs</h2>
              <p class="text-gray-700 text-sm leading-relaxed mb-8">
                We focus on execution of stage-appropriate studies and providing solutions to accelerate the development of your product.
              </p>
              
              <div class="grid grid-cols-1 gap-10">
                
                <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 class="text-[#140B42] font-bold text-lg mb-2">High-Throughput ADME screening services</h3>
                  <p class="text-gray-600 text-sm leading-relaxed">
                    Our highly automated laboratory enables large scale screening efforts using in-house or client-customized protocols. Rapid turnaround to co-optimize the properties of your chemical platform, alongside your potency and selectivity targets.
                  </p>
                </div>

                <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 class="text-[#140B42] font-bold text-lg mb-2"><em>In vitro</em> ADME lab services</h3>
                  <p class="text-gray-600 text-sm leading-relaxed">
                    We provide integrated drug metabolism and pharmacokinetic solutions, including insights into clinical clearance predictions, pharmacokinetic variability, and drug-drug interaction potential. In-house or client-customized protocols, discovery and regulatory-phase packages available.
                  </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div class="bg-sky-50 p-6 rounded-xl border border-sky-100">
                      <h3 class="text-[#140B42] font-bold text-lg mb-4">Discovery and development, metabolite identification and profiling services</h3>
                      <p class="text-gray-600 text-xs mb-4">AQLIVIA can deliver holistic metabolite profiling and identification packages.</p>
                      <ul class="space-y-2 text-xs text-gray-700">
                        <li class="flex items-start gap-2"><span class="w-1 h-1 bg-[#0090d0] rounded-full mt-1.5 flex-shrink-0"></span> Discovery-phase metID (hot spot analysis, cross species comparisons)</li>
                        <li class="flex items-start gap-2"><span class="w-1 h-1 bg-[#0090d0] rounded-full mt-1.5 flex-shrink-0"></span> Clinical Phase I exploratory metID</li>
                        <li class="flex items-start gap-2"><span class="w-1 h-1 bg-[#0090d0] rounded-full mt-1.5 flex-shrink-0"></span> 3H/14C-Radioprofiling and metID (preclinical and clinical)</li>
                        <li class="flex items-start gap-2"><span class="w-1 h-1 bg-[#0090d0] rounded-full mt-1.5 flex-shrink-0"></span> Reactive intermediate trapping (GSH, CN) and covalent binding (microsomes, hepatocytes)</li>
                      </ul>
                   </div>

                   <div class="bg-sky-50 p-6 rounded-xl border border-sky-100">
                      <h3 class="text-[#140B42] font-bold text-lg mb-4">Discovery bioanalytical services</h3>
                      <p class="text-gray-600 text-xs mb-4">Rapid turnaround discovery analyses to assess drug exposure and/or pharmacokinetics.</p>
                      <ul class="space-y-2 text-xs text-gray-700">
                        <li class="flex items-start gap-2"><span class="w-1 h-1 bg-[#0090d0] rounded-full mt-1.5 flex-shrink-0"></span> High-throughput bioanalytical (plasma, various tissues)</li>
                        <li class="flex items-start gap-2"><span class="w-1 h-1 bg-[#0090d0] rounded-full mt-1.5 flex-shrink-0"></span> Cassette analysis</li>
                        <li class="flex items-start gap-2"><span class="w-1 h-1 bg-[#0090d0] rounded-full mt-1.5 flex-shrink-0"></span> Dried blood spot analysis</li>
                      </ul>
                   </div>
                </div>

              </div>
            </section>

            <section class="bg-[#140B42] -mx-6 md:-mx-12 px-6 md:px-12 py-8 mt-8 mb-8">
               <h2 class="text-white text-2xl font-bold uppercase tracking-wider text-center md:text-left">
                 >175 PhD, >35 Medical Doctors
               </h2>
            </section>

            <section class="flex flex-col lg:flex-row gap-12 items-start">
              <div class="flex-1">
                <h2 class="text-[#140B42] text-2xl font-bold mb-6">Focused on solutions to address DMPK issues of today</h2>
                <p class="text-gray-600 text-sm leading-relaxed mb-6">
                  While our scientists routinely conduct industry-standard <em>in vitro</em> ADME assays, we are also developing novel assays to stay current with the DMPK issues of today to help better predict clinical outcomes.
                </p>
                
                <ul class="space-y-6 text-sm text-gray-700">
                  <li class="leading-relaxed">
                    <strong class="text-[#140B42]">Non-P450 metabolism,</strong> including glucuronosyltransferase (UGT) and aldehyde oxidase (AO)-mediated metabolism ― We can help you design and execute in vitro studies to diagnose non-P450 pathways and guide you on next stages to better understand the drug-drug interaction potential of your drug.
                  </li>
                  <li class="leading-relaxed">
                    <strong class="text-[#140B42]">Slowly metabolized drugs,</strong> with intrinsic clearance estimations in conventional systems restricted by incubation time ― We have evaluated hepatocyte co-culture models and compared these novel systems to plated monoculture and suspended hepatocytes to enable human clearance predictions for low-turnover drugs.
                  </li>
                  <li class="leading-relaxed">
                    <strong class="text-[#140B42]">CYP3A5,</strong> a polymorphic drug-metabolizing enzyme that can contribute to pharmacokinetic variability in the clinic ― With the discovery of CYP3cide, a selective mechanism-based inactivator of CYP3A4, a relative activity factor (RAF) methodology can be used to estimate CYP3A5 contribution to total CYP3A metabolism using individual CYP3A5*1*1 donor HLMs.
                  </li>
                  <li class="leading-relaxed">
                    <strong class="text-[#140B42]">Metabolite-in-Safety-Testing (MIST),</strong> increasingly requested by regulatory agencies for early assessments of human metabolism ― We have the expertise to confidently profile first-in-human plasma to begin the iterative process of addressing your MIST coverage needs.
                  </li>
                </ul>

                <p class="text-gray-600 text-sm leading-relaxed mt-8 italic border-t border-gray-100 pt-6">
                  Whether your target compounds are for neuroscience, infectious disease, inflammation, or oncology, our scientists are ready to collaborate with you to accelerate your drug discovery, preclinical, and clinical programs.
                </p>
              </div>
              
              <div class="w-full lg:w-1/3">
                 <div class="sticky top-24">
                    <div class="bg-gray-50 rounded-full overflow-hidden w-64 h-64 mx-auto border-8 border-white shadow-xl relative">
                       <img src="https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=600" alt="Lab Research" class="w-full h-full object-cover" />
                    </div>
                    <div class="text-center mt-6">
                       <p class="text-xs text-gray-500 max-w-xs mx-auto">
                         What differentiates us from other lab CROs is the diversity in real-world Pharma experience of our scientists and scientific leadership.
                       </p>
                    </div>
                 </div>
              </div>
            </section>
      
          </div>
        `},{name:"Metabolite Identification and Profiling",desc:"Assess metabolic clearance pathways and identify metabolites in pre-clinical and human clinical samples using LC-MS.",image:"https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=2000",heroSubtitle:"Assessing a drug candidate’s metabolic profile early in the discovery process.",layout:"html-content",htmlContent:`
          <div class="space-y-16 animate-fadeIn text-[#140B42]">
            
            <section>
              <p class="text-gray-700 leading-relaxed mb-6 max-w-6xl text-sm">
                Assessing a drug candidate’s metabolic profile early in the discovery process offers insight into its metabolic clearance pathways in both pre-clinical species and humans. AQLIVIA Laboratories global bioanalytical and ADME laboratory network offers a range of liquid chromatography/ mass spectrometry services to support discovery and development metabolite identification and profiling.
              </p>
            </section>
      
            <section class="border-t border-gray-100 pt-12">
              <h2 class="text-[#140B42] text-2xl font-bold mb-6">Specific capabilities using high-resolution mass spectrometry (HRMS) include:</h2>
              
              <div class="bg-gray-50 p-8 rounded-xl border-l-4 border-[#0090d0]">
                <ul class="space-y-4 text-sm text-gray-700">
                  <li class="flex items-start gap-3">
                    <span class="w-1.5 h-1.5 bg-[#140B42] rounded-full mt-2 flex-shrink-0"></span>
                    <span>Metabolite profiling and identification using liver microsomes or hepatocytes, as well as novel hepatocyte co-culture models for profiling slowly metabolized drug candidates</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <span class="w-1.5 h-1.5 bg-[#140B42] rounded-full mt-2 flex-shrink-0"></span>
                    <span>Exploratory profiling using unlabeled drug in preclinical and human clinical samples</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <span class="w-1.5 h-1.5 bg-[#140B42] rounded-full mt-2 flex-shrink-0"></span>
                    <span>Radio-profiling of both preclinical and human clinical samples</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <span class="w-1.5 h-1.5 bg-[#140B42] rounded-full mt-2 flex-shrink-0"></span>
                    <span>Reactive intermediate screens evaluating glutathione/cyanide trapping drug candidates (microsomes)</span>
                  </li>
                </ul>
              </div>
            </section>

            <section class="bg-[#37424a] text-white rounded-none md:rounded-r-full -mx-6 md:mx-0 p-10 md:p-16 mt-8 relative overflow-hidden">
              <div class="relative z-10 max-w-3xl">
                <h2 class="text-3xl font-bold mb-4">ADME Assays & Metabolite Profiling</h2>
                <p class="text-white/80 text-xs uppercase tracking-widest mb-6">To explore how AQLIVIA Laboratories can partner to characterize metabolites in your study:</p>
                
                <p class="text-sm leading-relaxed mb-8 text-gray-300">
                  A full range of bioanalytical services, including metabolic stability, enzyme identification, metabolite identification, metabolite absorption, metabolite stability assays, and drug-drug interaction assessments - ranging from highly automated screens to definitive studies that enable regulatory submission.
                </p>
                
                <a href="/contact" class="inline-block bg-[#0090d0] text-white px-8 py-3 rounded text-xs font-bold uppercase tracking-wider hover:bg-[#007bb5] transition-colors shadow-lg">
                  Find out more
                </a>
              </div>
              
             
              <div class="absolute -right-20 -bottom-40 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
            </section>
      
          </div>
        `}]},{id:"Specialty Immunoassays",title:"Specialty Immunoassays",name:"Specialty Immunoassays",heroSubtitle:"by Rules-Based Medicine, an AQLIVIA business The industry leader in multiplex immunoassay development and testing",type:"html-content",path:"/services/specialty-immunoassays",heroImage:"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200",shortDesc:"Developing and validating complex immunoassays for biomarker analysis.",htmlContent:`
      <div class="animate-fadeIn font-sans text-[#333] leading-relaxed">
        
        <section class="max-w-7xl mx-auto py-12 px-6 space-y-6 text-[15px]">
          <p>
            Rules-Based Medicine (RBM), an AQLIVIA business, is a CLIA-certified biomarker testing laboratory developing immunoassays used to quantify protein biomarkers in support of drug mechanism of action, pharmacodynamic, prognostic, and predictive clinical studies across all stages of drug discovery and development.
          </p>
          
          <p>
            RBM is the world's leading multiplexed immunoassay testing laboratory that solves complex drug development challenges with innovative biomarker services and a novel whole blood immunophenotyping device (TruCulture®). RBM’s internally developed and manufactured immunoassays based on Luminex® multi-analyte profiling (MAP) and single-molecule array (Simoa®) ultrasensitive immunoassay technology provides translational and clinical researchers with reproducible and quantitative data for a few or hundreds of human proteins.
          </p>
  
          <p class="font-bold">
            The comprehensive menu provides extensive coverage of numerous pathways and delivers accurate pharmacodynamic and safety assessments.
          </p>
  
          <p>
            Since 2014, RBM has also developed ultrasensitive immunoassays on the Simoa platform to quantify protein biomarkers previously difficult or impossible to measure. The RBM platform appropriately combines microsphere-based immunoassays with the precision and dependability of automated liquid handling systems, advanced quality monitoring, and a highly trained and dedicated staff.
          </p>
        </section>
  
        <section class="max-w-7xl mx-auto py-12 px-6 bg-white">
          <h2 class="text-[#140B42] text-2xl font-black mb-8 tracking-tight">
            Why Choose Rules-Based Medicine for your Clinical Trial?
          </h2>
  
          <ul class="space-y-4 list-none">
            <li class="flex items-start gap-3">
              <div class="w-1.5 h-1.5 rounded-full bg-[#140B42] mt-2 flex-shrink-0"></div>
              <p>Extensive experience of developing, validating, and manufacturing immunoassays allows us to provide customers with unmatched expertise in the field of protein biomarker testing.</p>
            </li>
            <li class="flex items-start gap-3">
              <div class="w-1.5 h-1.5 rounded-full bg-[#140B42] mt-2 flex-shrink-0"></div>
              <p>Quality control measures in place for each and every step of the process, all in accordance with their strict standard operating procedures.</p>
            </li>
            <li class="flex items-start gap-3">
              <div class="w-1.5 h-1.5 rounded-full bg-[#140B42] mt-2 flex-shrink-0"></div>
              <p>Four-step quality control procedures including instruments diagnostics, calibrator curves at front and back end of each reaction plate, three levels of controls run in duplicate, and sample review.</p>
            </li>
            <li class="flex items-start gap-3">
              <div class="w-1.5 h-1.5 rounded-full bg-[#140B42] mt-2 flex-shrink-0"></div>
              <p>TruCulture® – an integrated whole-blood collection and leukocyte culture system tube for immunophenotyping.</p>
            </li>
          </ul>
        </section>
  
        <section class="max-w-7xl mx-auto py-20 px-6 border-t border-gray-100">
          <div class="text-center">
            <h2 class="text-3xl font-black mb-16">Simplify your Work</h2>
            
            <div class="flex flex-col md:flex-row justify-between items-start gap-12 relative">
              <div class="hidden md:block absolute top-10 left-0 w-full h-1 bg-gray-100 -z-10"></div>
              
              <div class="flex-1 flex flex-col items-center">
                <div class="w-20 h-20 rounded-full bg-[#0090d0] text-white flex items-center justify-center text-2xl font-black mb-6 border-8 border-white shadow-xl italic">1</div>
                <h4 class="text-lg font-black mb-2">Request a Quote</h4>
                <p class="text-gray-400 text-xs">Request a quote today to discover how working with AQLIVIA can advance your research.</p>
              </div>
  
              <div class="flex-1 flex flex-col items-center">
                <div class="w-20 h-20 rounded-full bg-gray-200 text-gray-400 flex items-center justify-center text-2xl font-black mb-6 border-8 border-white shadow-xl italic">2</div>
                <h4 class="text-lg font-black mb-2 text-gray-400">Ship Your Samples</h4>
                <p class="text-gray-400 text-xs text-center">Our global central laboratory network enables testing at a single site.</p>
              </div>
  
              <div class="flex-1 flex flex-col items-center">
                <div class="w-20 h-20 rounded-full bg-gray-200 text-gray-400 flex items-center justify-center text-2xl font-black mb-6 border-8 border-white shadow-xl italic">3</div>
                <h4 class="text-lg font-black mb-2 text-gray-400">Get Your Results</h4>
                <p class="text-gray-400 text-xs text-center">Obtain in-depth data to understand gene expression and immune repertoire.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    `,subItems:[{name:"Biomarker Testing",desc:"Comprehensive biomarker testing services for drug development.",heroSubtitle:"by AQLIVIA Laboratories – Industry-leading scientists with extensive drug development experience",type:"html-content",image:ow,shortDesc:"Comprehensive laboratory services spanning the development lifecycle.",htmlContent:`
    <div class="animate-fadeIn font-sans text-[#333] leading-relaxed">
      
      <section class="max-w-7xl mx-auto py-1 px-6 space-y-6 text-[15px]">
        <p>
          With laboratory services that span the development lifecycle and industry-leading scientists with extensive drug development experience, <span class="font-bold text-[#140B42]">AQLIVIA Laboratories</span> can help you simplify and align co-development strategies to speed development and increase probability of regulatory and commercial success.
        </p>
      </section>

      <section class="max-w-7xl mx-auto py-12 px-6 bg-white">
        <h2 class="text-[#140B42] text-4xl font-black mb-12 tracking-tight">
          Our services include
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div class="space-y-4 flex flex-col items-start">
            <h3 class="text-[#140B42] text-2xl font-black">Anatomic Pathology</h3>
            <p class="text-[15px] text-[#333] leading-relaxed flex-grow">
              Comprehensive in-house end-to-end anatomic pathology laboratory, adjunct molecular and histology services are designed to meet your clinical trial needs.
            </p>
            <a href="/Aqvilia/anatomic-pathology#/services/Anatomic%20Pathology" class="inline-block bg-[#0090d0] text-white px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest hover:bg-[#007bb0] transition-all mt-4">
              Learn More
            </a>
          </div>

          <div class="space-y-4 flex flex-col items-start">
            <h3 class="text-[#140B42] text-2xl font-black">Flow Cytometry</h3>
            <p class="text-[15px] text-[#333] leading-relaxed flex-grow">
              Dedicated assay development laboratories with state-of-the-art instruments and experienced flow cytometry scientists.
            </p>
            <a href="/Aqvilia/anatomic-pathology#/services/Flow%20Cytometry" class="inline-block bg-[#0090d0] text-white px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest hover:bg-[#007bb0] transition-all mt-4">
              Learn More
            </a>
          </div>

          <div class="space-y-4 flex flex-col items-start">
            <h3 class="text-[#140B42] text-2xl font-black">Immunoassay</h3>
            <p class="text-[15px] text-[#333] leading-relaxed flex-grow">
              With a continuous investment in extensive testing capabilities, we provide comprehensive immunoassay solutions.
            </p>
            <a href="/services/immunoassay" class="inline-block bg-[#0090d0] text-white px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest hover:bg-[#007bb0] transition-all mt-4">
              Learn More
            </a>
          </div>

         
        </div>
      </section>

      </div>`},{name:"Assay Development",desc:"Custom assay design, validation, and implementation services.",image:"https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=2000",heroSubtitle:"With the rise of personalized medicine, drug developers are relying more on novel biomarkers to improve their success.",layout:"html-content",htmlContent:`
          <div class="space-y-16 animate-fadeIn text-[#140B42]">
            
            <section>
              <h2 class="text-[#140B42] text-3xl font-bold mb-6">Assay development expertise</h2>
              <p class="text-gray-700 leading-relaxed mb-6 max-w-6xl text-sm">
                We have one of the most extensive routine and specialty testing menus in the industry and our technology partnerships and internal assay development programs have produced a large offering of novel biomarkers. Since 2015, we have validated >450 new assays including over 250 biomarker assays each year.
              </p>
              <p class="text-gray-700 leading-relaxed mb-6 max-w-6xl text-sm">
                Our global laboratories, including 3 satellite translational science laboratories, are equipped with industry-leading development expertise and value-added offerings.
              </p>
              
              <div class="bg-gray-50 p-6 rounded-xl border-l-4 border-[#0090d0] mb-8">
                <h4 class="text-[#140B42] font-bold text-sm mb-2">Translational Science Laboratories (TSL)</h4>
                <p class="text-gray-600 text-sm leading-relaxed">
                  Our TSL focus on facilitating technology transfers from Sponsors, and developing and validating new assays (fit-for-purpose or full extensive validation). They are committed to building strong and confident relationships between our scientists and customers.
                </p>
              </div>

              <p class="text-gray-700 leading-relaxed text-sm">
                We have recently collaborated with the University of Texas Medical Branch (UTMB) to develop a novel assay for COVID-19 (SARS-CoV-2) tests, to drive rapid development of a Coronavirus vaccine. Once a viable assay is developed, we will produce it for use in clinical trials to determine the effectiveness of a COVID-19 vaccine.
              </p>
            </section>
      
            <section class="border-t border-gray-100 pt-12">
              <h2 class="text-[#140B42] text-3xl font-bold mb-6">Meeting complex demands</h2>
              <p class="text-gray-700 leading-relaxed mb-6 max-w-6xl text-sm">
                Pharma and biotech companies are requesting increased complexity and shortened turnaround times for central laboratory services and testing requirements, including disease and drug-specific biomarker assessments and biomarker assay development to determine safety and efficacy for compounds in development.
              </p>
              <p class="text-gray-700 leading-relaxed mb-6 max-w-6xl text-sm">
                As a global full-service laboratory provider with over 40 years of central laboratory experience, we are continually expanding capabilities to address growing demands by establishing specialized teams for developing assays and testing. This includes dedicated experts in bioanalytical and ADME, flow cytometry, genomics/bioinformatics, and companion diagnostics.
              </p>
              <p class="text-[#0090d0] font-bold text-sm hover:underline cursor-pointer">
                Learn more about our biomarker capabilities.
              </p>
            </section>

            <section class="flex flex-col md:flex-row items-center gap-12 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
               <div class="w-full md:w-1/3">
                  <div class="rounded-full overflow-hidden w-64 h-64 border-8 border-gray-50 shadow-inner mx-auto">
                     <img src="https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=600" alt="Pipette Lab Work" class="w-full h-full object-cover" />
                  </div>
               </div>
               <div class="flex-1">
                  <h2 class="text-[#140B42] text-3xl font-bold mb-2">Advancing our services</h2>
                  <p class="text-gray-500 font-medium text-lg mb-6">Constantly expanding menu of >3,500 tests and assays</p>
                  <p class="text-gray-600 text-sm leading-relaxed mb-4">
                    For oncology drug development, our anatomic and molecular pathology, immunoassay and genomics-based assay development and testing, in conjunction with flow cytometry services provide a customized, end-to-end solution specifically suited for the unique combination of therapeutic indication and targeted mechanism-of-action.
                  </p>
               </div>
            </section>

            <section class="border-t border-gray-100 pt-10 pb-12">
              <h3 class="text-[#140B42] text-2xl font-bold mb-4">Biomarker discovery and insights</h3>
              <p class="text-gray-700 leading-relaxed max-w-6xl text-sm">
                Our biomarker discovery experts provide a better understanding of therapeutic targets, molecular signaling, drug biology and patient response. These insights can enable us to develop new assays for your trials.
              </p>
            </section>
      
          </div>
        `}],pageContent:{subtitle:"High-Sensitivity Detection",description:"Development and validation of robust immunoassays to detect biomarkers, drugs, and antibodies in complex biological matrices.",points:[{title:"ELISA Development",desc:"Custom assay design for novel biomarkers."},{title:"Biomarker Panels",desc:"Multiplex assays to detect multiple analytes simultaneously."},{title:"PK/PD Assays",desc:"Pharmacokinetic and Pharmacodynamic assessments."}]}},{id:"Medical Tourism",title:"Medical Tourism",name:"Medical Tourism",heroSubtitle:"Comprehensive medical tourism services for international patients seeking high-quality healthcare abroad.",type:"dropdown",path:"/services/Medical Tourism",htmlContent:`<div class="animate-fadeIn font-sans text-[#333] leading-relaxed bg-white overflow-hidden">
      
      <section class="max-w-7xl mx-auto py-20 px-6 -mt-20">
        <div class="text-center mb-16">
          <h4 class="text-blue-500 font-bold uppercase tracking-widest text-sm mb-2">Excellent Health Care</h4>
          <h2 class="text-[#140B42] text-4xl font-black">Our Treatment</h2>
        </div>

        <div class="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div class="flex-1 space-y-16 text-center lg:text-right">
            <div class="group">
              <h3 class="text-xl font-black text-[#140B42] mb-2">Best Price in the Medical Industry</h3>
              <p class="text-sm text-gray-500 max-w-xs ml-auto">Our charges are the best in medical facilities with simple and affordable to clients.</p>
            </div>
            <div class="group">
              <h3 class="text-xl font-black text-[#140B42] mb-2">Pick & Drop Transportation Facilities</h3>
              <p class="text-sm text-gray-500 max-w-xs ml-auto">We provide start to end pick and drop facilities via Air & Road Transportation.</p>
            </div>
            <div class="group">
              <h3 class="text-xl font-black text-[#140B42] mb-2">24x7 Consultation Personal Care</h3>
              <p class="text-sm text-gray-500 max-w-xs ml-auto">We always available in the whole process from start to end with personal care.</p>
            </div>
          </div>

          <div class="flex-1 flex justify-center relative py-10">
             <img 
               src="/Aqvilia/stestoscope-doctor.webp" 
               alt="Stethoscope with heartbeat line" 
               class="w-auto h-auto max-h-[500px] "
             >
          </div>

          <div class="flex-1 space-y-16 text-center lg:text-left">
            <div class="group">
              <h3 class="text-xl font-black text-[#140B42] mb-2">Hi-Qualified Doctor Consultation</h3>
              <p class="text-sm text-gray-500 max-w-xs mr-auto">All our doctors are well trained and high quality with great experience in the industry.</p>
            </div>
            <div class="group">
              <h3 class="text-xl font-black text-[#140B42] mb-2">Luxury Hotels & Accommodations</h3>
              <p class="text-sm text-gray-500 max-w-xs mr-auto">We always provide great accommodations with great satisfaction.</p>
            </div>
            <div class="group">
              <h3 class="text-xl font-black text-[#140B42] mb-2">Translation Facilities</h3>
              <p class="text-sm text-gray-500 max-w-xs mr-auto">Our Arabic Translators are the best in India with great experience and language fluency.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-gray-50 py-20 px-6  -mt-9 relative">
        <div class="max-w-4xl mx-auto text-center mb-10">
          <h2 class="text-[#140B42] text-3xl font-black">Medical Tourism Packages</h2>
          <p class="text-gray-500 text-sm mt-2">Browse our specialized departments</p>
        </div>

        <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white to-transparent opacity-50 rounded-full blur-xl"></div>
</div>
          
          <section>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                <div class="group">
                  <img src="/Aqvilia/clinical monitoring.avif" class="w-full h-48 object-cover rounded-xl mb-6 shadow-md transition-transform group-hover:scale-105" alt="RNA-Seq" />
                  <h4 class="text-xl font-bold mb-3">Medical Treatment</h4>
                  <p class="text-sm text-gray-500 leading-relaxed mb-6">Affordable world-class treatments in India. Packages include surgery, visa assistance, and recovery.</p>
                  <a href="/Aqvilia#/services/Medical%20Treatments" class="inline-block bg-[#0090d0] text-white px-6 py-2 rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-[#007bb5]">Learn More</a>
                </div>
      
                <div class="group">
                  <img src="/Aqvilia/clinicalmontioring.png" class="w-full h-48 object-cover rounded-xl mb-6 shadow-md transition-transform group-hover:scale-105" alt="Immune" />
                  <h4 class="text-xl font-bold mb-3">Asethetic Treatment</h4>
                  <p class="text-sm text-gray-500 leading-relaxed mb-6">World-class aesthetic perfection meets luxury travel. Whether you seek Hair Transplantation, Body Contouring, or Facial Rejuvenation, our expert medical team and dedicated 24/7 personal care staff ensure your transformation is safe, affordable, and absolutely seamless.</p>
                  <a href="/Aqvilia#/services/Aesthetic%20Treatments" class="inline-block bg-[#0090d0] text-white px-6 py-2 rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-[#007bb5]">Learn More</a>
                </div>
      
                <div class="group">
                  <img src="/Aqvilia/medicaltreatment.jpg" class="w-full h-48 object-cover rounded-xl mb-6 shadow-md transition-transform group-hover:scale-105" alt="Cite-Seq" />
                  <h4 class="text-xl font-bold mb-3">Wellness Treatment</h4>
                  <p class="text-sm text-gray-500 leading-relaxed mb-6">Restore your body’s natural balance with our holistic Wellness Treatment packages, combining traditional healing therapies with modern medical oversight. From stress management and detoxification to preventive health screenings, our highly qualified specialists curate a personalized path to rejuvenation, all while you relax in the comfort of our partner luxury accommodations.</p>
                  <a href="/Aqvilia#/services/Wellness%20Treatments" class="inline-block bg-[#0090d0] text-white px-6 py-2 rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-[#007bb5]">Learn More</a>
                </div>
      
              </div>
            </section>
      

    </div>
      `,heroImage:"https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600",shortDesc:"Affordable world-class treatments in India. Packages include surgery, visa assistance, and recovery.",subItems:[{name:"Medical Treatments",desc:"Access world-class surgical interventions and specialized clinical care.",image:rw,heroSubtitle:"Affordable world-class treatments in India. Packages include surgery, visa assistance, and recovery.",layout:"html-content",htmlContent:`
            <div class="max-w-[1440px] mx-auto space-y-6 md:space-y-8 animate-fadeIn text-[#140B42] pb-20 px-4 md:px-0">
              
              <section class="border-b border-gray-100 pb-6 md:pb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-4 md:gap-6">
                <div>
                  <h2 class="text-4xl md:text-6xl font-black tracking-tighter mb-2 md:mb-4">Medical Directory</h2>
                  <p class="text-gray-500 italic text-sm md:text-base max-w-2xl">Select a specialty to view precise surgical overviews, success rates, and package inclusions.</p>
                </div>
                <button class="w-full md:w-auto bg-white border-2 border-[#140B42] text-[#140B42] px-6 py-3 rounded-xl font-bold uppercase text-[10px] tracking-widest hover:bg-gray-50 transition-all">
                  Download Brochure
                </button>
              </section>
        
              <div class="space-y-4">
                ${[{name:"Bariatric Surgery",rate:"90%",price:"$1500",detail:"Specialized weight-loss interventions.",precise:"Focuses on resolving obesity-related comorbidities through high-definition 4K laparoscopic imaging.",inclusions:["Laparoscopic Suite","Nutritional Plan","3-Day Inpatient"]},{name:"Cardiac Sciences",rate:"90%",price:"$500",detail:"Advanced heart care and Bypass Surgery.",precise:"Utilizes Digital Cath Labs and minimally invasive heart valve surgery (MICS) to reduce recovery time.",inclusions:["Digital Cath Lab","Cardiac ICU","Pre-travel Teleconsult"]},{name:"ENT",rate:"93%",price:"$16000",detail:"Comprehensive Ear, Nose, and Throat care.",precise:"Includes cochlear implants and thyroid surgeries using advanced head and neck microsurgical platforms.",inclusions:["Microsurgery Kit","Audiology Lab","Specialized Nursing"]},{name:"General & Laparoscopic Surgery",rate:"93%",price:"$1800",detail:"Minimally invasive abdominal procedures.",precise:"Ensures faster recovery and minimal scarring through precision tech and day-care surgical protocols.",inclusions:["Precision Tech Suite","Day Care Ward","Follow-up Care"]},{name:"General Medicine",rate:"93%",price:"Quote on Request",detail:"Management of chronic illnesses.",precise:"Holistic management of chronic illnesses through internal medicine specialists and preventative screening.",inclusions:["Diagnostic Lab","Specialist Review","Medical Reports"]},{name:"Haematology & BMT",rate:"90%",price:"$30000",detail:"World-class Bone Marrow Transplant.",precise:"Performed in HEPA-filtered, positive-pressure isolation units with advanced HLA typing for safety.",inclusions:["HEPA Isolation","HLA Typing","Genetic Counseling"]},{name:"Hepatology",rate:"91%",price:"$11000",detail:"Treatment for liver diseases and transplant evaluation.",precise:"Comprehensive care for cirrhosis and fatty liver, including detailed pre-transplant evaluations.",inclusions:["GI Diagnostics","Nutrition Support","Liver Care Unit"]},{name:"Infectious Disease",rate:"95%",price:"Quote on Request",detail:"Management of complex viral and bacterial infections.",precise:"Advanced isolation and immuno-support protocols for the management of complex parasitic infections.",inclusions:["Advanced Lab Access","Isolation Suite","Immuno-Support"]},{name:"Infertility",rate:"95%",price:"$2000",detail:"Reproductive health including IVF and IUI.",precise:"High success rates in IVF and IUI utilizing advanced embryology support and fertility preservation.",inclusions:["IVF Center","Embryology Support","Pharmacy Access"]},{name:"Nephrology & Urology",rate:"90%",price:"$2000",detail:"Kidney care and urinary tract treatments.",precise:"Utilizes advanced lithotripsy and renal care for non-invasive management of kidney stones.",inclusions:["Dialysis Ward","Lithotripsy Suite","Renal Dietetics"]},{name:"Neuro Sciences",rate:"91%",price:"$5500",detail:"Brain and nerve care, including neurosurgery.",precise:"Includes specialized neuro-imaging and neuro-ICU support for tumors and stroke management.",inclusions:["Neuro-ICU","Neuro-Imaging","Rehab Facility"]},{name:"Neurology",rate:"95%",price:"$2500",detail:"Management of epilepsy and Parkinson's.",precise:"Advanced diagnostic EEG/EMG testing for clinical management of multiple sclerosis.",inclusions:["EEG/EMG Lab","Medication Review","Specialist Consult"]},{name:"Obstetrics & Gynecology",rate:"90%",price:"$2500",detail:"Women's health and maternity services.",precise:"Focuses on high-risk pregnancy management and advanced laparoscopic gynecological surgery.",inclusions:["Maternity Suite","Private Wellness Room","Laparoscopic O.T."]},{name:"Oncology",rate:"93%",price:"$600",detail:"Precision cancer care and chemotherapy.",precise:"Multidisciplinary tumor boards review cases for targeted immunotherapy and radiation precision.",inclusions:["Tumor Board","Onco-Pharmacy","Psychological Support"]},{name:"Ophthalmology",rate:"94%",price:"$800",detail:"Advanced eye care and LASIK procedures.",precise:"Utilizes high-precision refractive technology for cataract surgery and glaucoma management.",inclusions:["Refractive Tech","Pre-Op Screening","Follow-up Care"]},{name:"Orthopedics",rate:"93%",price:"$2200",detail:"Joint replacements and sports medicine.",precise:"Uses Computer-Assisted Navigation (CAS) for replacements to ensure sub-millimeter accuracy.",inclusions:["CAS Navigation","Post-Op Rehab","Mobility Aids"]},{name:"Paediatrics & Neonatology",rate:"95%",price:"Quote on Request",detail:"Specialized care for newborns and children.",precise:"Features Level III NICU support and specialized pediatric surgical facilities.",inclusions:["Level III NICU","Pediatric Ward","Nursing Support"]},{name:"Spine Surgery",rate:"91%",price:"$4000",detail:"Management of spinal disorders.",precise:"Minimally invasive spine surgery (MISS) protocols to reduce para-spinal muscle damage.",inclusions:["Minimally Invasive Kit","Pain Management","Back Support"]},{name:"Transplant",rate:"94%",price:"$6000",detail:"Organ transplant programs (Kidney, Liver, Heart).",precise:"Includes donor evaluation and post-op life support for complex organ recovery.",inclusions:["Donor Evaluation","Cross-Matching","Life Support"]},{name:"Urology",rate:"94%",price:"$3000",detail:"Surgical treatment for prostate and bladder.",precise:"Features robotic-assisted urological platforms and andrology services.",inclusions:["Robotic Platform","Uro-Dynamics","Andrology Suite"]},{name:"Vascular Surgery",rate:"95%",price:"$3000",detail:"Management of vascular diseases.",precise:"Specialized vascular labs for endovascular and open techniques to treat aortic diseases.",inclusions:["Vascular Lab","Doppler Ultrasound","Vein Clinic"]}].map(i=>`
                  <details class="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                    <summary class="flex flex-col sm:flex-row items-start sm:items-center justify-between p-5 md:p-8 cursor-pointer list-none gap-4">
                      <div class="flex items-center gap-4 md:gap-6 w-full sm:w-auto">
                        <div class="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-sky-50 rounded-xl flex items-center justify-center text-[#0090d0] group-open:bg-[#0090d0] group-open:text-white transition-colors">
                          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 4v16m8-8H4"></path></svg>
                        </div>
                        <div class="min-w-0">
                          <h4 class="text-xl md:text-2xl font-black tracking-tight truncate">${i.name}</h4>
                          <p class="text-gray-400 text-[10px] md:text-xs font-bold uppercase tracking-widest truncate">${i.detail}</p>
                        </div>
                      </div>
                      
                      <div class="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-t-0 border-gray-50">
                        <p class="text-[9px] md:text-[10px] font-black text-gray-400 uppercase">Starting Price</p>
                        <p class="text-lg md:text-2xl font-black text-[#140B42] whitespace-nowrap">${i.price}</p>
                      </div>
                    </summary>
        
                    <div class="px-5 md:px-8 pb-6 md:pb-8 pt-2 md:pt-4 border-t border-gray-50 bg-gray-50/20">
                      <div class="flex flex-col lg:flex-row gap-6 md:gap-12">
                        <div class="flex-1">
                          <h5 class="text-[#0090d0] font-black uppercase text-[10px] md:text-xs mb-3 md:mb-4 tracking-widest">Surgical Overview & Precision</h5>
                          <p class="text-gray-600 leading-relaxed text-sm mb-6 md:mb-8 italic">${i.precise}</p>
                          
                          <div class="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                            <div class="p-4 bg-white rounded-xl border border-gray-100 flex justify-between items-center md:block">
                              <p class="text-[9px] font-black text-gray-400 uppercase md:mb-1">Success Rate</p>
                              <p class="text-base md:text-lg font-black text-green-600">${i.rate}</p>
                            </div>
                            <div class="md:col-span-2 p-4 bg-white rounded-xl border border-gray-100">
                              <p class="text-[9px] font-black text-gray-400 uppercase mb-2">Package Inclusions</p>
                              <div class="flex flex-wrap gap-2">
                                ${i.inclusions.map(s=>`<span class="text-[9px] md:text-[10px] font-bold text-[#140B42] flex items-center gap-1"><div class="w-1 h-1 bg-[#0090d0] rounded-full"></div> ${s}</span>`).join("")}
                              </div>
                            </div>
                          </div>
                        </div>
        
                        <div class="lg:w-80">
                          <div class="bg-[#140B42] text-white p-6 rounded-2xl shadow-xl">
                            <p class="text-[10px] font-bold mb-4 opacity-60 uppercase tracking-widest">International Patient Portal</p>
                            <a href="/Aqvilia/contact#/contact" class="flex items-center justify-center bg-[#0090d0] w-full py-3 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-sky-400 transition-colors shadow-lg">
                              Contact Specialist
                            </a>
                            <p class="text-[8px] text-center mt-4 opacity-50 font-bold uppercase tracking-tighter">Medical Visa & Concierge Services Available 24/7</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </details>
                `).join("")}
              </div>
            </div>
          `},{name:"Aesthetic Treatments",desc:"Advanced cosmetic and reconstructive solutions with world-class clinical precision.",layout:"html-content",htmlContent:`
            <div class="max-w-[1440px] mx-auto space-y-6 md:space-y-8 animate-fadeIn text-[#140B42] pb-20 px-4 md:px-0">
              
              <section class="border-b border-gray-100 pb-6 md:pb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-4 md:gap-6">
                <div>
                  <h2 class="text-4xl md:text-6xl font-black tracking-tighter mb-2 md:mb-4">Aesthetic Directory</h2>
                  <p class="text-gray-500 italic text-sm md:text-base max-w-2xl">Select a treatment to explore advanced surgical techniques, recovery timelines, and specialized aesthetic care.</p>
                </div>
                <button class="w-full md:w-auto bg-[#140B42] text-white px-8 py-4 rounded-2xl font-bold uppercase text-xs tracking-widest hover:bg-[#0090d0] transition-all flex items-center justify-center gap-2">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                  Download Aesthetic Brochure
                </button>
              </section>
        
              <div class="space-y-4">
                ${[{name:"Dental",rate:"95%",price:"$100",detail:"Advanced restorative and cosmetic dentistry.",precise:"Our dental program utilizes 3D intraoral scanning and CAD/CAM technology for precise crown and veneer fabrication. Procedures include Hollywood smile design, dental implants using computer-guided surgery, and laser-assisted periodontics.",inclusions:["3D Oral Scan","Digital Smile Design","Initial Consultation"]},{name:"Hair Transplant",rate:"94%",price:"$2000",detail:"Natural hair restoration using FUE and DHI.",precise:"We specialize in Follicular Unit Extraction (FUE) and Direct Hair Implantation (DHI). Using sapphire blades for canal opening, we ensure higher graft survival rates and minimal trauma resulting in natural-looking hairlines.",inclusions:["Graft Analysis","PRP Therapy Session","Post-Op Care Kit"]},{name:"Plastic & Reconstructive Surgery",rate:"90%",price:"$200",detail:"Facial and body contouring and reconstruction.",precise:"Providing surgical excellence in Rhinoplasty, Liposuction, and Breast Augmentation. Our surgeons utilize VASER technology for precise body contouring and fat emulsification, reducing recovery time.",inclusions:["VASER Technology","Compression Garments","Concierge Recovery"]}].map(i=>`
                  <details class="group bg-white border border-gray-100 rounded-2xl md:rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                    <summary class="flex flex-col sm:flex-row items-start sm:items-center justify-between p-5 md:p-8 cursor-pointer list-none gap-4">
                      <div class="flex items-center gap-4 md:gap-6 w-full sm:w-auto">
                        <div class="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-sky-50 rounded-xl md:rounded-2xl flex items-center justify-center text-[#0090d0] group-open:bg-[#0090d0] group-open:text-white transition-colors">
                          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 4v16m8-8H4"></path></svg>
                        </div>
                        <div class="min-w-0">
                          <h4 class="text-xl md:text-2xl font-black tracking-tight truncate">${i.name}</h4>
                          <p class="text-gray-400 text-[10px] md:text-xs font-bold uppercase tracking-widest truncate">${i.detail}</p>
                        </div>
                      </div>
                      
                      <div class="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-t-0 border-gray-50">
                        <p class="text-[9px] md:text-[10px] font-black text-gray-400 uppercase">Starting Price</p>
                        <p class="text-lg md:text-2xl font-black text-[#140B42] whitespace-nowrap">${i.price}</p>
                      </div>
                    </summary>
        
                    <div class="px-5 md:px-8 pb-6 md:pb-8 pt-2 md:pt-4 border-t border-gray-50 bg-gray-50/20">
                      <div class="flex flex-col lg:flex-row gap-6 md:gap-12">
                        <div class="flex-1">
                          <h5 class="text-[#0090d0] font-black uppercase text-[10px] md:text-xs mb-3 md:mb-4 tracking-widest">Clinical Precision & Overview</h5>
                          <p class="text-gray-600 leading-relaxed text-sm mb-6 md:mb-8 italic">${i.precise}</p>
                          
                          <div class="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                            <div class="p-4 bg-white rounded-xl border border-gray-100 flex justify-between items-center md:block">
                              <p class="text-[9px] font-black text-gray-400 uppercase md:mb-1">Success Rate</p>
                              <p class="text-base md:text-lg font-black text-green-600">${i.rate}</p>
                            </div>
                            <div class="md:col-span-2 p-4 bg-white rounded-xl md:rounded-2xl border border-gray-100">
                              <p class="text-[9px] font-black text-gray-400 uppercase mb-2">Package Inclusions</p>
                              <div class="flex flex-wrap gap-2">
                                ${i.inclusions.map(s=>`<span class="text-[9px] md:text-[10px] font-bold text-[#140B42] flex items-center gap-1"><div class="w-1 h-1 bg-[#0090d0] rounded-full"></div> ${s}</span>`).join("")}
                              </div>
                            </div>
                          </div>
                        </div>
        
                        <div class="lg:w-80">
                          <div class="bg-[#140B42] text-white p-6 rounded-2xl shadow-xl">
                            <p class="text-[10px] font-bold mb-4 opacity-60 uppercase tracking-widest">Aesthetic Portal</p>
                            <a href="/Aqvilia/contact" class="flex items-center justify-center bg-[#0090d0] w-full py-3 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-sky-400 transition-colors shadow-lg">
                              Contact Specialist
                            </a>
                            <p class="text-[8px] text-center mt-4 opacity-50 font-bold uppercase tracking-tighter">Medical Visa & Recovery Assistance 24/7</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </details>
                `).join("")}
              </div>
            </div>
          `},{name:"Wellness Treatments",desc:"Holistic recovery and neurological rejuvenation programs for global health.",layout:"html-content",htmlContent:`
            <div class="max-w-[1440px] mx-auto space-y-8 animate-fadeIn text-[#140B42] pb-20">
              
              <section class="border-b border-gray-100 pb-8 flex flex-col md:flex-row justify-between items-end gap-6">
                <div>
                  <h2 class="text-6xl font-black tracking-tighter mb-4">Wellness Directory</h2>
                  <p class="text-gray-500 italic max-w-2xl">Select a program to explore holistic recovery protocols, therapeutic environments, and personalized wellness support.</p>
                </div>
                <button class="bg-[#140B42] text-white px-8 py-4 rounded-2xl font-bold uppercase text-xs tracking-widest hover:bg-[#0090d0] transition-all flex items-center gap-2">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                  Download Wellness Brochure
                </button>
              </section>
        
              <div class="space-y-4">
                
                ${[{name:"Health and Wellness",rate:"91%",price:"$200",detail:"Integrative health programs focusing on systemic rejuvenation and preventative care.",precise:"Our Health and Wellness programs utilize a hybrid approach combining traditional Indian healing sciences with modern clinical diagnostics. Programs include personalized nutrition mapping, systemic detoxification (Panchakarma), and stress management modules designed to restore the body's natural homeostasis.",inclusions:["Nutritional Mapping","Detox Therapy","Wellness Consultation"]},{name:"Neuro-Wellness",rate:"93%",price:"Quote on Request",detail:"Specialized cognitive health and neurological recovery protocols.",precise:"Focusing on neuro-plasticity and cognitive restoration, this program supports patients recovering from neurological fatigue or chronic stress. We utilize bio-feedback technology, mindfulness-based cognitive therapy (MBCT), and specialized neuro-nutrition to enhance brain health and mental clarity.",inclusions:["Bio-feedback Session","Cognitive Health Assessment","Mindfulness Training"]}].map(i=>`
                  <details class="group bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                    <summary class="flex items-center justify-between p-8 cursor-pointer list-none">
                      <div class="flex items-center gap-6">
                        <div class="w-12 h-12 bg-sky-50 rounded-2xl flex items-center justify-center text-[#0090d0] group-open:bg-[#0090d0] group-open:text-white transition-colors">
                          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 4v16m8-8H4"></path></svg>
                        </div>
                        <div>
                          <h4 class="text-2xl font-black tracking-tight">${i.name}</h4>
                          <p class="text-gray-400 text-xs font-bold uppercase tracking-widest">${i.detail}</p>
                        </div>
                      </div>
                      <div class="text-right">
                        <p class="text-[10px] font-black text-gray-400 uppercase">Starting Price</p>
                        <p class="text-2xl font-black text-[#140B42]">${i.price}</p>
                      </div>
                    </summary>
        
                    <div class="px-8 pb-8 pt-4 border-t border-gray-50 bg-gray-50/20">
                      <div class="flex flex-col lg:flex-row gap-12">
                        <div class="flex-1">
                          <h5 class="text-[#0090d0] font-black uppercase text-xs mb-4 tracking-widest">Clinical Precision & Overview</h5>
                          <p class="text-gray-600 leading-relaxed text-sm mb-8 italic">${i.precise}</p>
                          
                          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div class="p-4 bg-white rounded-2xl border border-gray-100">
                              <p class="text-[9px] font-black text-gray-400 uppercase mb-1">High Success Rate</p>
                              <p class="text-lg font-black text-green-600">${i.rate}</p>
                            </div>
                            <div class="col-span-2 p-4 bg-white rounded-2xl border border-gray-100">
                              <p class="text-[9px] font-black text-gray-400 uppercase mb-2">Program Inclusions</p>
                              <div class="flex flex-wrap gap-3">
                                ${i.inclusions.map(s=>`<span class="text-[10px] font-bold text-[#140B42] flex items-center gap-1"><div class="w-1 h-1 bg-[#0090d0] rounded-full"></div> ${s}</span>`).join("")}
                              </div>
                            </div>
                          </div>
                        </div>
        
                        <div class="lg:w-80">
                          <div class="bg-[#140B42] text-white p-8 rounded-[2rem] shadow-xl">
                            <p class="text-xs font-bold mb-6 opacity-60 uppercase tracking-widest">Wellness Portal</p>
                            <a href="/Aqvilia/contact" class="flex items-center justify-center bg-[#0090d0] w-full py-4 rounded-xl font-black uppercase text-xs tracking-widest hover:bg-sky-400 transition-colors shadow-lg">
                              Contact Specialist
                            </a>
                            <p class="text-[9px] text-center mt-6 opacity-50 font-bold uppercase tracking-tighter">Holistic Health & Recovery Assistance 24/7</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </details>
                `).join("")}
        
              </div>
            </div>
          `}]},{id:"Consulting",title:"Consulting Services",name:"Consulting Services",type:"link",path:"/services/Consulting",layout:"fallback",image:"https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000",heroSubtitle:"Experience. Expertise. Commitment.",overview:"Knowing what we don’t know is in our opinion the better way than claiming we know everything, and the basis of how we offer our support. We provide consulting services based on our experience and expertise, because we are committed to work with our clients to find the best solutions. This is our commitment to you, and the many clients that have come back to us repeatedly for such services over the years.",points:[{title:"Aqlivia Development Plan",desc:"Long-standing experience in the design of CDPs and protocols to match regulatory requirements while ensuring medical and operations. Our medical, biostatistical, regulatory and operational experts have a long standing record on consulting our clients on program and protocol design, Aqlivia development plans, PIPs and other aspects. We focus especially on our core areas of expertise: Oncology, Immunology, Respiratory & Allergy, Endocrinology, and GI."},{title:"Medical and Scientific Consulting",desc:"Independent data monitoring boards during your trial managed by our experts. Aqlivia research physicians have substantial experience in the conduct of data safety monitoring boards, blinded reviews and dose-escalation designs, in particular in oncology. Together with our biostatisticians and supported by a strong Aqlivia data management function, we are able to provide full and independent solutions for blind data reviews and any kind of data monitoring committees."},{title:"Quality Assurance",desc:`Support in setting up and maintaining a quality management system for the conduct of Aqlivia trials (GCP). Our QA team is highly experienced to provide flexible and client-specific QA consultancy.
          <br><br>
          <strong>For example:</strong>
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li>Writing client-specific SOPs and working instructions.</li>
            <li>Developing forms exactly for your needs.</li>
            <li>Review and revision of existing SOPs.</li>
            <li>Gap analysis of a QMS.</li>
          </ul>
          <br>
          Based on our practical experience with inspections by authorities, we can support our clients during the preparation or follow up of authority inspections.`},{title:"Training",desc:"A European GCP Training & Compliance Department providing a program of extensive training to Aqlivia Investigators, Study Teams and Sponsors, tailored to their individual needs. Our training programs are based on nearly 20 years of comprehensive experience, including one or two day full time ICH GCP basic/refresher trainings."},{title:"Feasibility",desc:"A team of operational and medical experts to conduct global feasibility to ensure trial success. Having conducted hundreds of studies, we can perform feasibility studies from a medical, regulatory and operational perspective. Combined with medical and operational considerations, data show that studies run by Aqlivia complete early and on time."}]},{id:"Formulations",title:"Formulations",name:"Formulations",heroSubtitle:"something",type:"link",path:"/services/Formulations",layout:"fallback",overview:"We are focused on research support on specialty therapy segments to build premium, commanding brands that stand out as innovative and highly differentiated. The modest performance of the Branded Formulation business this year was on account of portfolio optimization to restore focus on key specialty brands having a potential to be a big brand.",points:[{title:"Portfolio Expansion & Patient Centricity",desc:"We expanded our portfolio with several new, first-of-its-kind offerings in the Indian market this year. Being a patient-centric organization, our divisions conducted patient and physician awareness programs all over India. These programs not only helped educate patients and doctors in disease prevention, detection and management, but also helped in building the value of Brand Aqlivia. We are confident that our strategic initiatives in this business will enable us to deliver consistent profitable growth in the foreseeable future."}],image:"https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=2000",subtitle:"Innovative & Differentiated Therapy"},{id:"Pharmacovigilance",title:"Pharmacovigilance",name:"Pharmacovigilance",heroSubtitle:"Comprehensive Safety & Regulatory Solutions",type:"link",path:"/services/Pharmacovigilance",layout:"fallback",image:"https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2000",subtitle:"Comprehensive Safety & Regulatory Solutions",overview:"The Aqlivia Pharmacovigilance team offers the regulatory knowledge and dedicated medical expertise to provide you with a flexible Pharmacovigilance solution tailored to your needs. Aqlivia proposes an organizational structure that ensures the most efficient work-flow and processes.",points:[{title:"Extended Safety Team",desc:"Aqlivia Pharmacovigilance can work as an extended arm to your safety department, or as your external pharmacovigilance team, on a study, program or company level, offering services for Investigational Medicinal Products and Medicinal Devices."},{title:"Technology & Compliance",desc:"A fully ICH and FDA 21 CFR part 11 compliant and validated Oracle AERS 4.7 safety database is used. The Set-up and maintenance of the safety database is provided. MedDRA coding and SAE Reconciliation services are included."},{title:"Quality Standards",desc:"Our Pharmacovigilance system is based on the latest updates of the EMA 2012 Good Clinical Pharmacovigilance Practices. Consistent procedures ensure highest quality standards."},{title:"Customized Management Plans",desc:"Safety and Medical Management Plan is customized to your study to make sure that all safety issues are covered."},{title:"AE & ADR Processing",desc:"Processing of adverse events (AE) and adverse drug reactions (ADR) during clinical trials and post-authorization. Collection, assessment of seriousness, expectedness and causality, Medical evaluation of Pharmacovigilance data, Cases data entry and quality control, Patient narratives."},{title:"Reporting & Submissions",desc:"Development and submission of ICSRs and periodic reports (Periodic Safety Update Reports (PSUR)/Development Safety Updates Reports (DSUR), and other ad-hoc reports), US periodic reports (Annual Safety Reports)."},{title:"Expert Certification",desc:"All our Pharmacovigilance officers are EudraVigilance certified. We have experience in EudraVigilance registration of Sponsors and users, expedited reporting of ICSRs and SUSARs to EudraVigilance and national portals, submission of products to eXtended Medicinal Product Dictionary (XEVMPD)."},{title:"Risk Management",desc:"Aqlivia Pharmacovigilance provides you with a continuous monitoring and evaluation of potential safety issues for signal detection and Risk-Benefit assessments. Aqlivia offers extended medical support to sites to the study team."},{title:"Qualified Person (QPPV)",desc:"Qualified Person for Pharmacovigilance for Europe and local Qualified Person are included in our organizational structure."}]},{id:"Biosimilars",title:"Biosimilars",name:"Biosimilars",heroSubtitle:"Addressing Global Unmet Medical Needs",type:"link",path:"/services/Biosimilars",layout:"fallback",image:"https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=2000",subtitle:"Addressing Global Unmet Medical Needs",overview:"Today, we have created a rich pipeline of novel and biosimilar assets aimed at addressing local as well as global unmet medical needs associated with both chronic and acute conditions. We have built multiple methods and research platforms with capacities to support global Pharma Alliances.",points:[{title:"Global Research & Partnerships",desc:"We have partnered with major global research groups (including Southern Eastern Bio and Sandoz) for the co-development of a high-value portfolio of biosimilars for oncology and autoimmune indications. This partnership leverages complementary strengths to build diverse products targeting cancer and address the next wave of global biosimilars opportunities."},{title:"Novel Research Projects",desc:"Our pipeline addresses unmet needs in diabetes, cancer, and autoimmune conditions. Assets include an oral insulin molecule, monoclonal antibodies against targets like CD6, CD20, and EGFR, and bispecific fusion antibodies exploiting checkpoint inhibitors."},{title:"Monoclonal Antibodies (Oncology)",desc:"Our vision is to enhance affordable access to cutting-edge biologic therapies. We are launching world-class biosimilar research projects for metastatic colorectal cancer (mCRC), lung, kidney, cervical, ovarian, and brain cancers. We are also working on regulatory approvals in Brazil and Turkey."},{title:"Insulin Therapy Overview",desc:`Insulin exerts its effect by binding to receptors, promoting glucose uptake into fat and skeletal muscle. Based on the time-action profile, we have developed:
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li><strong>Short acting (Insulin Regular):</strong> Controls post-meal glucose surge.</li>
            <li><strong>Intermediate/Longer acting (Insulin NPH):</strong> Controls fasting glucose.</li>
            <li><strong>Premixed (e.g., 30/70, 50/50):</strong> Enhances convenience by combining regular and NPH insulin.</li>
          </ul>`},{title:"Insulin Glargine (Long-Acting)",desc:`A long-acting biosynthetic human insulin analog. Modifications to the insulin B chain shift the isoelectric point, rendering it less soluble at physiological pH. This allows it to retain glucose-lowering properties for 24 hours without a pronounced peak, making it ideal for maintaining basal insulin levels.
          <br><br>
          <strong>Indications:</strong>
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li>Type 1 Diabetes Mellitus</li>
            <li>Type 2 Diabetes Mellitus</li>
          </ul>`},{title:"Insulin Lispro (Short-Acting)",desc:`A short-acting analogue with amino acid changes that prevent self-aggregation, allowing rapid absorption. Onset is 10-20 minutes, peak at 1-3 hours, lasting 3-5 hours. Taken 5-10 minutes before meals to stabilize post-meal glucose.
          <br><br>
          <strong>Indications:</strong>
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li>Type 1 Diabetes Mellitus</li>
            <li>Type 2 Diabetes Mellitus</li>
          </ul>`},{title:"Insulin Aspart (Short-Acting)",desc:`A rapid-acting analogue created by substituting amino acids to prevent self-aggregation. Onset of action is 10-20 minutes, with a peak of 1-3 hours and duration of 3-5 hours. It offers a flexible treatment regime with a lower risk of hypoglycemia.
          <br><br>
          <strong>Indications:</strong>
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li>Type 1 Diabetes Mellitus</li>
            <li>Type 2 Diabetes Mellitus</li>
          </ul>`}]},{id:"Molecular Diagnostics",title:"Molecular Diagnostics",name:"Molecular Diagnostics",heroSubtitle:"Detection, Prognosis, and Personalized Therapy",type:"link",path:"/services/Molecular Diagnostics",layout:"fallback",image:"https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2000",subtitle:"Detection, Prognosis, and Personalized Therapy",overview:"Aqlivia is in the developing phase of molecular diagnostics, focusing on the detection of genomic variants to facilitate detection, sub-classification, prognosis, and monitoring response to therapy.",points:[{title:"Interdisciplinary Synergy",desc:"Molecular diagnostics is the outcome of the fruitful interplay among laboratory medicine, genomics knowledge, and technology in the field of molecular genetics. This is driven by significant discoveries in molecular genomic technologies."},{title:"Genetic Basis of Disease",desc:"Our approach contributes to the identification and fine characterization of the genetic basis of inherited diseases. This precise understanding is vital for the accurate provision of diagnosis and patient care."},{title:"High-Throughput Methods",desc:"We utilize high-throughput methods, such as Next-Generation Sequencing (NGS) and Genome-Wide Association Studies (GWAS). These provide invaluable insights into the underlying mechanisms of disease."},{title:"Genomic Biomarkers & Personalized Medicine",desc:"Genomic biomarkers allow physicians to not only assess disease predisposition but also to design and implement accurate diagnostic methods. This enables the individualization of therapeutic treatment modalities for better patient outcomes."}]},{id:"Biostatistics",title:"Biostatistics",name:"Biostatistics",heroSubtitle:"Reliable and Efficient Performance",type:"link",path:"/services/Biostatistics",layout:"fallback",image:W0,subtitle:"Reliable and Efficient Performance",overview:"Aqlivia offers biostatistical services in Clinical Trials phases I to IV and Real World Evidence and Outcome Research. Our biostatisticians and SAS® programmers have broad knowledge across all therapeutic areas, from study design planning to the interpretation of results, ensuring high-accuracy analysis that prevents unexpected bias.",points:[{title:"Statistical Consulting",desc:`Expert guidance from the start-up phase to ensure efficiency and compliance.
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li>Study Design & Input into Study Protocol</li>
            <li>Sample Size Calculation</li>
            <li>Regulatory Support</li>
          </ul>`},{title:"Analysis & Planning",desc:`Comprehensive planning to define appropriate statistical methods.
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li>Randomization Planning</li>
            <li>Statistical Analysis Plan (SAP) including table Shells</li>
            <li>Analysis Dataset Specifications</li>
            <li>Dealing with Protocol Deviations</li>
          </ul>`},{title:"Statistical Evaluation",desc:`Deep dive analysis into key trial metrics.
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li>Biomarkers / Immunogenicity</li>
            <li>Efficacy / Effectiveness</li>
            <li>Safety and Tolerability</li>
            <li>Patient-Reported Outcomes</li>
            <li>Continuous Data biases identification</li>
          </ul>`},{title:"Reporting",desc:`Clear and accurate data presentation for stakeholders.
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li>Interpretation and reporting of data for Clinical Study Reports (CSR)</li>
            <li>Abstract and publication support</li>
            <li>Data Monitoring Boards (DMB) management and support</li>
          </ul>`},{title:"Statistical Programming",desc:`Robust programming using industry standards.
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li>SAS® Programming</li>
            <li>Implementation of CDISC SDTM and ADaM standards</li>
            <li>Analysis datasets preparation, tables, listings, and graphics</li>
            <li>Data integration</li>
            <li>Quality Control Plan (Adequate QC level)</li>
          </ul>`}]},{id:"Medical Writing",title:"Medical Writing",name:"Medical Writing",heroSubtitle:"Scientifically Accurate & Culturally Sensitive",type:"link",path:"/services/Medical Writing",layout:"fallback",image:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000",subtitle:"Scientifically Accurate & Culturally Sensitive",overview:"At Aqlivia, we understand how important medical writing is to pharmaceutical and biotechnology companies. In an industry where even the slightest mistake can have serious consequences, we offer a service that encompasses preparing scientifically accurate and culturally sensitive documents that are fully compliant with current regulations.",points:[{title:"Expert Qualifications",desc:"Our medical writers have years of experience in therapeutic areas including Oncology, CNS, and Immunology. All experts are qualified to MSc or PhD level and undergo regular training by recognized organizations like EMWA (European Medical Writers Association) and AMWA (American Medical Writers Association) to keep their skills sharp."},{title:"Regulatory Compliance",desc:"Our services are fully compliant with ICH Guidelines and other current regulatory requirements. We strictly follow our internal SOPs or apply our client’s specific SOPs, templates, and writing style to ensure seamless integration with your processes."},{title:"Clinical & Regulatory Documents",desc:`We prepare a wide variety of materials, ensuring precision and compliance:
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li>Clinical Study Protocols</li>
            <li>Clinical Study Reports (CSRs, including SAE narratives)</li>
            <li>Investigator Brochures (IBs) & IMPDs</li>
            <li>Clinical Overviews and Summaries</li>
            <li>Integrated Clinical Study Reports (as per ICH E3)</li>
            <li>CTD Module 4 Clinical Summaries & Overall Summary</li>
          </ul>`},{title:"Medical Communication & Reports",desc:`Expert preparation of communication and review materials:
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li>Medical Source Review Reports</li>
            <li>Informed Consents (ICF)</li>
            <li>Final Reports</li>
            <li>Conference Abstracts</li>
            <li>Scientific Articles and Manuscripts</li>
          </ul>`}]},{id:"Project Management",title:"Project Management",name:"Project Management",heroSubtitle:"PMBOK® Principles & Clinical Expertise",type:"link",path:"/services/Project Management",layout:"fallback",image:"https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000",subtitle:"PMBOK® Principles & Clinical Expertise",overview:"Clinical Project Management is a core competence of Aqlivia. Our Project Management approach is based on decades of experience and consistently utilizes the PMBOK® principles. Several of our Project Managers are certified Project Management Professionals by the Project Management Institute (PMI®).",points:[{title:"People-Centric Approach",desc:"We believe people matter. We strive to find the best fit in terms of PM experience, location, language, and multi-cultural capabilities. Our PMs and Associates have significant clinical backgrounds and specialized experience in the therapeutic areas of their projects."},{title:"Single Point of Contact",desc:"Aqlivia Project Managers act as the primary liaison for our clients, managing the entire project team including external vendors. They are committed to delivering projects on time and on budget, with an uncompromising focus on quality, ethics, and compliance."},{title:"Governance & Metrics",desc:"Particular emphasis is placed on planning and project governance, including communication and risk management. Performance data and metrics are reviewed on a regular basis to ensure project success and the delivery of high-quality clinical data."},{title:"Global Reach",desc:"Aqlivia offers comprehensive project management services from all its major European and USA locations."}]},{id:"Clinical Monitoring",title:"Clinical Monitoring",name:"Clinical Monitoring",heroSubtitle:"High Quality Review & Site Interaction",type:"link",path:"/services/Clinical Monitoring",layout:"fallback",image:X0,subtitle:"High Quality Review & Site Interaction",overview:"Monitoring activities conducted by Clinical Research Associates (CRA) are regarded as one of the most important parts in the conduct of new drug development. Aqlivia CRAs are skilled and well-trained to ensure a highest quality review of your study data and to interact effectively with study sites.",points:[{title:"Primary CRA Tasks",desc:`Being the main communication link between the site and study sponsor, the main tasks of Aqlivia CRAs during a clinical study site visit are:
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li>Establishing a clear, individual, and well-structured communication to the site</li>
            <li>Ensuring the regulatory compliance of study sites</li>
            <li>Overseeing the process of data collection</li>
            <li>Verification of source documents and case report forms</li>
            <li>Resolving of queries</li>
          </ul>`},{title:"Quality Assurance & Co-Monitoring",desc:"Aqlivia is committed to the highest quality and subsequently has implemented ongoing co-monitoring and accompanied visits by a dedicated trainer and senior staff for their CRAs. This ensures compliance with local laws and international regulations (ICH-GCP)."},{title:"Proactive Issue Management",desc:"Using a defined process, we are able to identify potential issues in a timely manner and support our CRAs with their skills and professional development."},{title:"Reliable Data Guarantee",desc:"Our highly motivated and educated CRA team guarantees reliable data for your new drug submission."}]},{id:"Pharma Resource Solution",title:"Pharma Resource Solution",name:"Pharma Resource Solution",heroSubtitle:"Flexible Resourcing & Strategic Staffing",type:"link",path:"/services/Pharma Resource Solution",layout:"fallback",image:"https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2000",subtitle:"Flexible Resourcing & Strategic Staffing",overview:"Aqlivia Pharma Resourcing Solutions (Aqlivia PRS) has the experience and a clear understanding of the importance of our clients’ resourcing strategies. Supported by strong recruitment activity and leadership oversight, we serve a full range of resourcing requirements to guarantee success and commitment to project objectives.",points:[{title:"Our Philosophy",desc:"We truly believe people are the real value of a company and we invest in their performance and their professional satisfaction. Aqlivia PRS provides flexible resourcing options tailored to your needs."},{title:"Staff Augmentation",desc:`As part of a full quality service, Aqlivia PRS provides staff augmentation support (short-term and long-term contracts) working closely with hiring managers. Our team handles:
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li>Performance management & Staff onboarding</li>
            <li>Priority setting & Training</li>
            <li>Workflow management & Productivity (KPIs)</li>
            <li>Mitigating co-employment concerns</li>
          </ul>`},{title:"Staff Lift Out",desc:"Based on our internal analysis and experience, when clients transfer their resources to Aqlivia PRS, we can significantly lower their fixed costs. Under this option, our clients have reported cost savings up to 25% - 30% compared to an 'in-house' approach."},{title:"Efficiency & Improvement",desc:"We identify improvement areas and inefficiencies while actively collaborating with our clients to achieve better and more efficient results."}]},{id:"Computed Tomography",title:"Computed Tomography (CT)",name:"Computed Tomography (CT)",heroSubtitle:"Advanced Diagnostic Imaging & Research",type:"link",path:"/services/Computed Tomography",layout:"fallback",image:"https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=2000",subtitle:"Advanced Diagnostic Imaging & Research",overview:"CT scans identify disease or injury within various regions of the body. From screening for tumors to imaging complex bone fractures, CT produces more detail than conventional x-rays. Aqlivia is heavily involved in NIBIB-funded research to develop safer, more accurate scanning technologies.",points:[{title:"Diagnostic Applications",desc:`CT is a versatile screening tool used for identifying disease or injury:
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li><strong>Abdomen:</strong> Detecting possible tumors or lesions.</li>
            <li><strong>Heart:</strong> Imaging heart disease and abnormalities.</li>
            <li><strong>Head:</strong> Locating injuries, tumors, clots leading to stroke, and hemorrhage.</li>
            <li><strong>Lungs:</strong> Revealing tumors, pulmonary embolisms, excess fluid, emphysema, or pneumonia.</li>
            <li><strong>Bones:</strong> Imaging complex fractures, severely eroded joints, or bone tumors.</li>
          </ul>`},{title:"Contrast Agents",desc:`To distinguish soft tissues, we use specific contrast agents:
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li><strong>Intravenous (IV):</strong> Iodine-based agents injected to illuminate blood vessels and the circulatory system. <em>(Caution: Not for patients with abnormal kidney function).</em></li>
            <li><strong>Oral:</strong> Barium-based compounds used for imaging the digestive system (esophagus, stomach, GI tract).</li>
          </ul>`},{title:"Risks & Safety",desc:`We rigorously manage the risks associated with ionizing radiation:
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li><strong>Radiation Exposure:</strong> Risk increases with lifetime exposure; we strive to minimize this.</li>
            <li><strong>Pregnancy:</strong> CT is generally avoided for the abdomen/pelvis in pregnant women (MRI/Ultrasound preferred).</li>
            <li><strong>Pediatrics:</strong> Children are more sensitive to radiation. Machine settings are adjusted specifically for pediatric patients.</li>
            <li><strong>Allergies:</strong> Contrast agents may cause allergic reactions or rare kidney issues; screening is mandatory.</li>
          </ul>`},{title:"Research: Dedicated Breast CT",desc:`<strong>Project Lead: John Boone, UC Davis</strong><br>
          NIBIB is funding research for a dedicated breast CT scanner that allows 3D imaging without breast compression. The woman lies prone with her breast suspended, and the scanner rotates around it. This prevents radiation exposure to the chest and produces a dose comparable to a standard mammogram.`},{title:"Research: Reducing Radiation",desc:`Five groundbreaking projects to radically decrease radiation in CT scans:
          <ul class="list-disc pl-5 mt-2 space-y-2">
            <li><strong>Customized Imaging (Web Stayman, Johns Hopkins):</strong> Modifying hardware/software to adapt x-ray beam shape, position, and intensity to specific patient anatomy to limit unnecessary exposure.</li>
            <li><strong>Constructing Tools (Cynthia McCollough, Mayo Clinic):</strong> Creating a library of raw patient data to allow researchers to test dose-reduction approaches without expensive clinical trials.</li>
            <li><strong>Faster Processing (Jeffrey Fessler, Univ. of Michigan):</strong> Developing rapid image reconstruction algorithms that allow low-dose CT imaging to be practical for every patient.</li>
            <li><strong>Integrated Approach (Norbert Pelc, Stanford):</strong> Combining photon-counting detectors and dynamic x-ray illumination to potentially reduce radiation dose by 80%.</li>
            <li><strong>SparseCT (Ricardo Otazo & Daniel Sodickson, NYU):</strong> An ultra-low-dose technique that blocks most x-rays before they reach the patient, using compressed sensing math to reconstruct high-quality images from reduced data.</li>
          </ul>`}]},{id:"AI Artificial Intelligence",title:"AI in Clinical Trials",name:"AI in Clinical Trials",heroSubtitle:"The Future of Successful Drug Development",type:"link",path:"/services/AI Artificial Intelligence",layout:"fallback",image:"https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2000",subtitle:"The Future of Successful Drug Development",overview:"Envision dedicating fifteen years to a critical interest and emptying a staggering amount of funds into it, at the same time confronting a disappointment rate of 95 percent. That is the crippling reality for pharmaceutical organizations. Artificial Intelligence can significantly reduce the time included, and also cut the expenses by more than half. This is made possible through a completely distinctive way to deal with medication revelation.",points:[{title:"The Challenge: Time & Cost",desc:"Today’s medications go to the business sector after an extensive, very costly process of drug development. It takes anywhere in the range of 10 to 15 years to convey a medication from introductory revelation to the hands of patients – and that voyage can cost up to 12 billion dollars. Patients can hardly wait 15 years for a lifesaving drug. With the present technique, for each 100 medications that achieve first stage clinical trials, only one goes ahead to become a genuine treatment. That is an unsustainable model, particularly when there are ailments, for example, pancreatic malignancy which has a normal five-year survival rate of 6%."},{title:"AI: The Solution",desc:"Venture forward Artificial Intelligence (AI); an idea turning out to be more essential in tending to these issues. The clearest utilization of AI in Pharma is utilizing its capacity to rapidly 'read' unlimited measures of logical information: research distributed in diaries, records, and tissue/blood tests. It uses designs in the information to make experimental speculations which can coordinate pharma organizations’ medication advancement. Thus, organizations can focus on specific signs which the medication is likely to treat effectively. Something that would take human researchers weeks and months to break down, Watson (IBM’s AI supercomputer) can do in a matter of minutes."},{title:"Historical Context (AIM)",desc:"From the earliest crossroads in the history of the PC, researchers have longed for making an ‘electronic mind’. Researchers were charmed by the potential such an innovation may have in prescription. A group of computer researchers and social insurance experts started forming an exploration program called Artificial Intelligence in Medicine (AIM). These analysts had a striking vision of the way AIM would alter medication. Today, expert systems are found in clinical research centers, educational settings, and data-rich ranges like the intensive care setting."},{title:"Aqlivia: Early Adopter Solutions",desc:`Aqlivia is adding to a progression of projects highlighting the organization’s patented <strong>Custom Conversation®</strong> to meet this test and streamline the clinical trial process.
          <br><br>
          <strong>Patient Recruitment Program:</strong>
          We worked with the University of Pittsburgh cancer centers to make a patient training program for disease clinical trials. It highlights oncologists, scientists, and patients answering questions about taking part in a clinical trial. Growth patients and their families can utilize the project at the center or at home. An detailed log is made to give precious insight into the questions patients raise.
          <br><br>
          <strong>Patient Retention Program:</strong>
          About 30% of clinical trial members drop out before the study is finished. One reason is an absence of continuous correspondence. Aqlivia’s innovation empowers suppliers to provide efficient, effective support. Every week, the patient will visit the clinical trial checking site. A video host will confirm protocol adherence and conduct an online assessment. Certain responses trigger alerts to the doctor or recommend dosage adjustments.`},{title:"Precision Medicine: An AI Approach",desc:"Precision medicine is getting the right treatment to the right patient at the ideal time. This involves the full biological make-up: the genome, proteome, lipidome, and metabolome. Examination of illness cells routinely takes years – yet the brilliance of Artificial Intelligence is that it works speedier than any human could. In the market, organizations like Berg take tests of blood, urine, and tissue to create over 14 trillion data points. AI separates the information to help us understand the complexity between healthy and sick cells. All that data is crunched in days or weeks, gaining profitable time in the pharmaceutical creation process."},{title:"Fourth Industrial Revolution",desc:"We are in the midst of the Fourth Industrial Revolution, a tipping point of interconnected technology breakthroughs: robots, drones, smart cities, AI, and brain research. We are overwhelmed with advancements in AI, the Internet of Things (IoT), 3D printing, self-driving vehicles, and vast computing power. These advancements are changing the world in a significant way and at a much faster rate than any time in recent memory."},{title:"Smarter Drug Development",desc:"IBM Watson is a standout example of a supercomputer demonstrating capabilities beyond the lab. Pharmaceutical giants like Johnson & Johnson and Sanofi participate in collaborations with IBM Watson’s Discovery Advisor group. J&J educates the supercomputer to read experimental papers containing clinical trial results to create and evaluate treatments. This helps specialists match a medication with the right arrangement of patients to expand adequacy and minimize symptoms, accelerating the procedure of disclosure."},{title:"Future of AI in Healthcare",desc:`AI is still in an infant stage but is becoming a greater enabler for healthcare:
          <ul class="list-disc pl-5 mt-2 space-y-2">
             <li><strong>Research Facility:</strong> Providing representation and classifying of restorative data.</li>
             <li><strong>Decision Support:</strong> Concocting novel devices to bolster decision-making and research.</li>
             <li><strong>Image Interpretation:</strong> Identifying issues in complex images (Angiograms, CT, MRI). AI systems for image recognition have increasingly been adopted for clinical use.</li>
             <li><strong>Robotics:</strong> Changing the field of surgical robotics, enabling robots to perform semi-automated tasks with increasing efficiency.</li>
             <li><strong>Alerts & Updates:</strong> Machines analyze lab results and drug orders to generate alerts for changes in a patient's condition.</li>
             <li><strong>Therapy Planning:</strong> AI tools aid in pre-planning specific conditions that require elaborate treatment arrangements.</li>
             <li><strong>Information Retrieval:</strong> Software search agents that are much more efficient than current web-crawling agents.</li>
          </ul>`}]}],S0=({closeMenu:i,isMobile:s=!1})=>{const[l,r]=j.useState("default"),[d,m]=j.useState(null),p=Qn(),x=y=>{m(d===y?null:y)},h=y=>{r(l===y?"default":y)},g=[{title:"Download our Corporate brochure",desc:"We are Aqlivia Laboratories, a leading clinical trial laboratory services organization.",img:"https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80",link:"LEARN MORE"},{title:"Corporate Video",desc:"Our commitment to customer success is embedded in every facet of our operations.",img:"https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&q=80",link:"LEARN MORE"},{title:"Science Innovation",desc:"Uniquely positioned to shape, validate, and deliver biomarker assessments.",img:"https://images.unsplash.com/photo-1581093458791-9f302e686c87?w=400&q=80",link:"LEARN MORE"},{title:"Digital Innovation",desc:"Driving operational improvements through data and technology.",img:"https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80",link:"LEARN MORE"}];return s?u.jsx("div",{className:"bg-white w-full animate-fadeIn pb-20",children:Vn.map(y=>u.jsx("div",{className:"border-b border-gray-100",children:y.type==="link"?u.jsxs(ge,{to:y.path,onClick:i,className:"flex justify-between items-center py-4 px-6 cursor-pointer hover:bg-gray-50 transition-colors",children:[u.jsx("span",{className:"font-medium text-[16px] text-[#333]",children:y.title}),u.jsx(De,{className:"text-gray-400 text-xs"})]}):u.jsxs(u.Fragment,{children:[u.jsxs("div",{onClick:()=>x(y.id),className:"flex justify-between items-center py-4 px-6 cursor-pointer hover:bg-gray-50 transition-colors",children:[u.jsx("span",{className:`font-medium text-[16px] ${d===y.id?"text-[#0072CE] font-bold":"text-[#333]"}`,children:y.title}),u.jsx(De,{className:`text-[#009CDE] text-xs transition-transform duration-300 ${d===y.id?"rotate-90":""}`})]}),u.jsx("div",{className:`bg-gray-50 overflow-hidden transition-all duration-700 ease-in-out ${d===y.id?"max-h-[5000px] opacity-100":"max-h-0 opacity-0"}`,children:u.jsx("div",{className:"p-4 space-y-4",children:y.subItems&&y.subItems.map((b,w)=>u.jsxs(ge,{to:`/services/${b.name}`,onClick:i,className:"rounded-lg overflow-hidden shadow-sm border border-gray-200 flex flex-col active:scale-95 transition-transform",children:[u.jsxs("div",{className:"bg-[#F3F4F6] py-3 px-4 flex justify-between items-center",children:[u.jsx("span",{className:"text-[#4B5563] font-bold text-[14px] leading-tight pr-2",children:b.name}),u.jsx(De,{className:"text-gray-400 flex-shrink-0",size:12})]}),u.jsx("div",{className:"bg-[#140B42] py-4 px-4 h-full",children:u.jsx("p",{className:"text-white text-[13px] leading-relaxed font-normal",dangerouslySetInnerHTML:{__html:b.desc}})})]},w))})})]})},y.id))}):u.jsxs("div",{className:"absolute top-full left-0 w-full bg-white shadow-2xl border-t-0 z-40 animate-fadeIn font-sans",children:[u.jsx("div",{className:"bg-gradient-to-r from-[#150e44] to-[#005385] py-6 px-6 md:px-12 flex justify-center items-center border-t border-white/10",children:u.jsxs("div",{className:"flex items-center bg-white rounded-full w-full max-w-2xl shadow-lg h-12 overflow-hidden",children:[u.jsxs("div",{className:"flex items-center flex-1 pl-6 h-full group",children:[u.jsx(Rs,{className:"text-gray-400 mr-3 text-sm transition-colors duration-300 group-hover:text-yellow-400 cursor-pointer"}),u.jsx("input",{type:"text",placeholder:"Search...",className:"flex-1 outline-none text-gray-700 text-sm placeholder-gray-500 bg-transparent h-full"})]}),u.jsx("button",{className:"bg-[#009CDE] hover:bg-[#007AB8] text-white px-8 h-full rounded-full text-xs font-bold uppercase transition-colors tracking-wider shadow-sm flex items-center justify-center",children:"DISCOVER"})]})}),u.jsxs("div",{className:"max-w-[1440px] mx-auto flex min-h-[800px]",children:[u.jsxs("div",{className:"w-[380px] border-r border-gray-200 bg-white flex-shrink-0 flex flex-col",children:[u.jsx("div",{className:"py-6 px-5 pl-10 border-b border-white",children:u.jsx("h3",{className:"text-[#0072CE] font-bold uppercase text-normal tracking-wide leading-none",children:"SERVICES"})}),u.jsx("div",{className:"flex flex-col -py-4 pl-6 -pt-4",children:Vn.map(y=>y.type==="link"?u.jsxs(ge,{to:y.path,onClick:i,className:`
                                  flex justify-between items-center px-3 py-2 cursor-pointer text-[15px] font-medium transition-all duration-200
                                  border-b border-dotted border-gray-300 last:border-none
                                  text-gray-700 hover:text-[#0072CE] hover:border-solid hover:border-[#0072CE] bg-white
                                `,children:[y.id,u.jsx(De,{size:12,className:"text-blue-500 group-hover:text-[#0072CE]"})]},y.id):u.jsxs("div",{onClick:()=>h(y.id),className:`
                              flex justify-between items-center px-3 py-2 cursor-pointer text-[15px] font-medium transition-all duration-200
                              border-b border-dotted border-gray-300 last:border-none
                              hover:border-solid hover:border-[#0072CE] 
                              ${l===y.id?"bg-[#0072CE] text-white border-transparent hover:border-transparent":"text-gray-700 hover:text-[#0072CE] bg-white"}
                            `,children:[y.id,l===y.id?u.jsx(Kn,{size:12,className:"text-white"}):u.jsx(De,{size:12,className:"text-[#0072CE]"})]},y.id))})]}),u.jsxs("div",{className:"flex-1 p-8 bg-[#F8FAFC] md:bg-white transition-colors duration-300 overflow-y-auto max-h-[600px]",children:[l==="default"&&u.jsx("div",{className:"grid grid-cols-4 gap-6 animate-fadeIn h-full bg-[#009CDE] -m-8 p-12",children:g.map((y,b)=>u.jsxs("div",{className:"flex flex-col group cursor-pointer",children:[u.jsx("div",{className:"rounded-xl overflow-hidden mb-3 h-28 shadow-md",children:u.jsx("img",{src:y.img,alt:y.title,className:"w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"})}),u.jsx("h3",{className:"text-white text-lg font-bold mb-2 leading-tight",children:y.title}),u.jsx("p",{className:"text-white/80 text-sm mb-4 flex-1",children:y.desc}),u.jsxs("div",{className:"text-white font-bold text-xs uppercase flex items-center gap-1 hover:underline",children:[y.link," ",u.jsx(De,{size:10})]})]},b))}),Vn.map(y=>l===y.id&&y.type!=="link"&&u.jsxs("div",{className:"animate-fadeIn pb-8",children:[u.jsxs("div",{className:"flex justify-between items-start mb-8 pb-8 pt-3 px-4 border-b border-gray-300 bg-[#F3F4F6] rounded-t-lg",children:[u.jsxs("div",{className:"max-w-2xl",children:[u.jsx("h2",{className:"text-[#140B42] text-2xl font-bold mb-2",children:y.title}),u.jsx("p",{className:"text-gray-600 text-[15px] mb-4",children:y.shortDesc||y.pageContent?.subtitle}),u.jsx("button",{className:"text-blue-500 cursor-pointer hover:scale-105",onClick:()=>{i(),p(`/services/${y.title}`)},children:"Learn more"})]}),u.jsx("div",{className:"w-40 h-28 bg-gray-100 rounded-lg overflow-hidden shadow-sm flex-shrink-0",children:u.jsx("img",{src:y.heroImage||y.pageContent?.image,alt:y.title,className:"w-full h-full object-cover"})})]}),y.subItems&&u.jsx("div",{className:"grid grid-cols-2 lg:grid-cols-3 gap-6",children:y.subItems.map((b,w)=>u.jsxs(ge,{to:`/services/${b.name}`,onClick:i,className:"group relative h-[100px] hover:h-[100px] transition-all duration-300 ease-in-out cursor-pointer z-0 hover:z-10",children:[u.jsxs("div",{className:"absolute inset-0 bg-[#F3F4F6] border border-gray-100 rounded-lg p-4 flex justify-between items-start group-hover:opacity-0 transition-opacity duration-200",children:[u.jsx("span",{className:"text-[#545454] font-bold text-[13px] pr-2 leading-tight line-clamp-2",children:b.name}),u.jsx(De,{className:"text-gray-400 mt-1 flex-shrink-0",size:12})]}),u.jsxs("div",{className:"absolute inset-0 bg-[#140B42] rounded-lg p-4 flex flex-col justify-start opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-xl overflow-hidden",children:[u.jsxs("div",{className:"flex justify-between items-start mb-2",children:[u.jsx("span",{className:"text-white font-bold text-[13px] leading-tight pr-2 line-clamp-2",children:b.name}),u.jsx(De,{className:"text-white mt-1 flex-shrink-0",size:12})]}),u.jsx("p",{className:"text-gray-300 text-[11px] leading-snug mt-1 border-t border-white/20 pt-2 line-clamp-2",dangerouslySetInnerHTML:{__html:b.desc.replace(/<[^>]*>?/gm,"")}})]})]},w))})]},y.id))]})]})]})},H5=({closeMenu:i})=>{const s=ua(),l=["Cell and Gene Therapy (CAGT)","Central Nervous System","Obesity & Endocrinology","GI and Hepatology","Immunology","Infectious Diseases","Oncology"];return u.jsxs("div",{className:"absolute top-full left-0 w-full shadow-2xl animate-slideDown z-20 font-sans",children:[u.jsx("div",{className:"bg-gradient-to-r from-[#150e44] to-[#005385] py-6 px-6 md:px-12 flex justify-center items-center border-t border-white/10",children:u.jsxs("div",{className:"flex items-center bg-white rounded-full w-full max-w-2xl shadow-lg h-12 overflow-hidden",children:[u.jsxs("div",{className:"flex items-center flex-1 pl-6 h-full group",children:[u.jsx(Rs,{className:"text-gray-400 mr-3 text-sm transition-colors duration-300 group-hover:text-yellow-400 cursor-pointer"}),u.jsx("input",{type:"text",placeholder:"Search...",className:"flex-1 outline-none text-gray-700 text-sm placeholder-gray-500 bg-transparent h-full"})]}),u.jsx("button",{className:"bg-[#009CDE] hover:bg-[#007AB8] text-white px-8 h-full rounded-full text-xs font-bold uppercase transition-colors duration-300 tracking-wider shadow-sm flex items-center justify-center",children:"DISCOVER"})]})}),u.jsxs("div",{className:"flex min-h-[450px]",children:[u.jsxs("div",{className:"w-2/6 bg-white py-5 px-8 border-r border-gray-100 flex flex-col",children:[u.jsx("div",{className:"px-3 mb-3",children:u.jsx("h4",{className:"text-[#1189e4] font-bold uppercase text-base tracking-wide",children:"THERAPEUTIC EXPERTISE"})}),u.jsxs("ul",{className:"flex-1",children:[u.jsx("li",{className:`
              border-b last:border-0 group transition-colors duration-300
              ${s.pathname==="/therapeutic/overview"?"border-solid border-[#0F1048]":"border-dotted border-[#0992db] hover:border-solid"}
            `,children:u.jsxs(ge,{to:"/therapeutic/overview",onClick:i,className:"flex justify-between items-center py-2 px-2 text-[15px] text-[#333] font-normal hover:text-[#009CDE] hover:bg-gray-50 transition-all",children:["Overview",u.jsx(De,{className:"text-[#1396d7] text-xs opacity-0 group-hover:opacity-00 transition-opacity transform group-hover:translate-x-1"})]})}),l.map(r=>{const m=`/therapeutic/${r.toLowerCase().replace(/ /g,"-").replace(/[()]/g,"")}`,p=s.pathname===m;return u.jsx("li",{className:`
                  border-b last:border-0 group transition-colors duration-300
                  ${p?"border-solid border-[#0F1048]":"border-dotted border-[#19c6ed] hover:border-solid"}
                `,children:u.jsxs(ge,{to:m,onClick:i,className:"flex justify-between items-center py-2 px-2 text-[15px] text-[#333] font-normal hover:text-[#009CDE] hover:bg-gray-50 transition-all",children:[r,u.jsx(De,{className:"text-[#1396d7] text-xs opacity-0 group-hover:opacity-00 transition-opacity transform group-hover:translate-x-1"})]})},r)})]})]}),u.jsx("div",{className:"w-3/4 bg-[#009CDE] p-10 text-white",children:u.jsxs("div",{className:"grid grid-cols-4 gap-6 h-full",children:[u.jsxs("div",{className:"flex flex-col cursor-pointer group",children:[u.jsx("div",{className:"overflow-hidden rounded-xl mb-4 h-32 w-full shadow-md",children:u.jsx("img",{src:"https://images.unsplash.com/photo-1579154204601-01588f351e67?w=400&q=80",alt:"Scientists",className:"w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"})}),u.jsx("h5",{className:"font-bold text-[15px] leading-tight mb-3",children:"Download our Corporate brochure"}),u.jsx("p",{className:"text-xs text-white/90 leading-relaxed mb-4 line-clamp-4 font-light",children:"We are Aqlivia Laboratories, a leading clinical trial laboratory services organization with end-to-end laboratory services."}),u.jsx("div",{className:"mt-auto pt-2",children:u.jsxs("span",{className:"text-[10px] font-bold uppercase flex items-center gap-1 hover:underline",children:["LEARN MORE ",u.jsx(De,{size:8})]})})]}),u.jsxs("div",{className:"flex flex-col cursor-pointer group",children:[u.jsx("div",{className:"overflow-hidden rounded-xl mb-4 h-32 w-full shadow-md",children:u.jsx("img",{src:"https://images.unsplash.com/photo-1581093458791-9f302e686c87?w=400&q=80",alt:"Lab Work",className:"w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"})}),u.jsx("h5",{className:"font-bold text-[15px] leading-tight mb-3",children:"Corporate Video"}),u.jsx("p",{className:"text-xs text-white/90 leading-relaxed mb-4 line-clamp-4 font-light",children:"Our commitment to customer success is embedded in every facet of our operations."}),u.jsx("div",{className:"mt-auto pt-2",children:u.jsxs("span",{className:"text-[10px] font-bold uppercase flex items-center gap-1 hover:underline",children:["LEARN MORE ",u.jsx(De,{size:8})]})})]}),u.jsxs("div",{className:"flex flex-col cursor-pointer group",children:[u.jsx("div",{className:"overflow-hidden rounded-xl mb-4 h-32 w-full shadow-md",children:u.jsx("img",{src:"https://images.unsplash.com/photo-1551076805-e1869033e561?w=400&q=80",alt:"Patient",className:"w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"})}),u.jsx("h5",{className:"font-bold text-[15px] leading-tight mb-3",children:"Science Innovation"}),u.jsx("p",{className:"text-xs text-white/90 leading-relaxed mb-4 line-clamp-4 font-light",children:"Uniquely positioned to shape, validate, and deliver biomarker assessments to improve patient outcomes."}),u.jsx("div",{className:"mt-auto pt-2",children:u.jsxs("span",{className:"text-[10px] font-bold uppercase flex items-center gap-1 hover:underline",children:["LEARN MORE ",u.jsx(De,{size:8})]})})]}),u.jsxs("div",{className:"flex flex-col cursor-pointer group",children:[u.jsx("div",{className:"overflow-hidden rounded-xl mb-4 h-32 w-full shadow-md",children:u.jsx("img",{src:"https://images.unsplash.com/photo-1576091160550-217358c7e618?w=400&q=80",alt:"Doctor with Tablet",className:"w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"})}),u.jsx("h5",{className:"font-bold text-[15px] leading-tight mb-3",children:"Digital Innovation"}),u.jsx("p",{className:"text-xs text-white/90 leading-relaxed mb-4 line-clamp-4 font-light",children:"Driving operational improvements and quality of our services."}),u.jsx("div",{className:"mt-auto pt-2",children:u.jsxs("span",{className:"text-[10px] font-bold uppercase flex items-center gap-1 hover:underline",children:["LEARN MORE ",u.jsx(De,{size:8})]})})]})]})})]})]})},P5=()=>{const i=[{title:"Overview",desc:"Aqlivia Labs drives innovation via science, digital tech, and operations to advance drug development.",img:"https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300"},{title:"Science Innovation",desc:"Delivers tailored lab solutions and biomarker expertise across therapeutic areas.",img:"https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=300"},{title:"Operational Innovation",desc:"Drives operational innovation with advanced processes and tech to streamline trials.",img:"https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=300"},{title:"Digital Innovation",desc:"Leverages digital innovation—AI, automation, and analytics—to transform clinical trials.",img:"https://images.unsplash.com/photo-1518152006812-edab29b069ac?w=300"}];return u.jsxs("div",{className:"absolute top-full left-0 w-full shadow-2xl animate-slideDown z-20 font-sans",children:[u.jsx("div",{className:"bg-gradient-to-r from-[#150e44] to-[#005385] py-6 px-6 md:px-12 flex justify-center items-center border-t border-white/10",children:u.jsxs("div",{className:"flex items-center bg-white rounded-full w-full max-w-2xl shadow-lg h-12 overflow-hidden",children:[u.jsxs("div",{className:"flex items-center flex-1 pl-6 h-full group",children:[u.jsx(Rs,{className:"text-gray-400 mr-3 text-sm transition-colors duration-300 group-hover:text-yellow-400 cursor-pointer"}),u.jsx("input",{type:"text",placeholder:"Search...",className:"flex-1 outline-none text-gray-700 text-sm placeholder-gray-500 bg-transparent h-full"})]}),u.jsx("button",{className:"bg-[#009CDE] hover:bg-[#007AB8] text-white px-8 h-full rounded-full text-xs font-bold uppercase transition-colors tracking-wider shadow-sm flex items-center justify-center",children:"DISCOVER"})]})}),u.jsxs("div",{className:"bg-gradient-to-r from-[#005689] to-[#00a3df] flex min-h-[400px]",children:[u.jsxs("div",{className:"w-1/4 py-12 px-10 text-white flex flex-col",children:[u.jsx("h4",{className:"font-bold text-2xl mb-3",children:"Innovation at Aqlivia"}),u.jsx("p",{className:"text-sm leading-relaxed opacity-90 font-normal",children:"At Aqlivia, our foundation is built on innovation. We are committed to finding new and smarter approaches to solving customer challenges. Explore some of the latest ways we can help drive your results."})]}),u.jsx("div",{className:"w-4/5 p-12",children:u.jsx("div",{className:"grid grid-cols-2 gap-6 h-full",children:i.map((s,l)=>u.jsxs("div",{className:"bg-white rounded-xl overflow-hidden flex h-40 shadow-lg group cursor-pointer hover:-translate-y-1 transition-transform duration-300",children:[u.jsx("div",{className:"w-1/3 h-full overflow-hidden",children:u.jsx("img",{src:s.img,alt:s.title,className:"w-37 h-38 object-cover transition-transform duration-700 group-hover:scale-100 rounded-[55px]"})}),u.jsxs("div",{className:"w-2/3 p-5 flex flex-col justify-center",children:[u.jsx("h5",{className:"text-[#0F1048] font-bold text-[15px] mb-2 leading-tight",children:s.title}),u.jsx("p",{className:"text-gray-600 text-xs mb-3 line-clamp-3 leading-relaxed",children:s.desc}),u.jsx("div",{className:"mt-auto",children:u.jsxs("span",{className:"text-[#009CDE] text-[10px] font-bold uppercase flex items-center gap-1 group-hover:underline",children:["LEARN MORE ",u.jsx(De,{size:8})]})})]})]},l))})})]})]})},I5=({closeMenu:i})=>u.jsxs("div",{className:"absolute top-full left-0 w-full shadow-2xl animate-slideDown z-20 font-sans text-left",children:[u.jsx("div",{className:"bg-gradient-to-r from-[#150e44] to-[#005385] py-6 px-6 md:px-12 flex justify-center items-center border-t border-white/10",children:u.jsxs("div",{className:"flex items-center bg-white rounded-full w-full max-w-2xl shadow-lg h-12 overflow-hidden",children:[u.jsxs("div",{className:"flex items-center flex-1 pl-6 h-full group",children:[u.jsx(Rs,{className:"text-gray-400 mr-3 text-sm transition-colors duration-300 group-hover:text-yellow-400 cursor-pointer"}),u.jsx("input",{type:"text",placeholder:"Search...",className:"flex-1 outline-none text-gray-700 text-sm placeholder-gray-500 bg-transparent h-full"})]}),u.jsx("button",{className:"bg-[#009CDE] hover:bg-[#007AB8] text-white px-8 h-full rounded-full text-xs font-bold uppercase transition-colors tracking-wider shadow-sm flex items-center justify-center",children:"DISCOVER"})]})}),u.jsx("div",{className:"bg-white py-12 px-8 md:px-16 min-h-[400px]",children:u.jsxs("div",{className:"grid grid-cols-5 h-full",children:[u.jsxs("div",{className:"flex flex-col h-full px-4 border-r border-[#009CDE]",children:[u.jsx("h4",{className:"text-[#1189e4] font-bold uppercase text-base tracking-wide mb-2 h-4 flex items-end pb-2",children:"SOLUTIONS"}),u.jsx("ul",{className:"flex-1",children:["Brochures","Case studies","e-Books","Fact sheets","Infographics"].map((s,l)=>u.jsx("li",{className:"border-b border-dotted border-[#1aa8cf] hover:border-solid last:border-0 group transition-colors duration-300",children:u.jsxs(ge,{to:"#",onClick:i,className:"flex justify-between items-center py-2 px-2 text-[15px] text-[#333] font-medium hover:text-[#009CDE] hover:bg-gray-50 transition-all",children:[s,u.jsx(De,{className:"text-[#1396d7] text-xs opacity-0 group-hover:opacity-0 transition-opacity transform group-hover:translate-x-1"})]})},l))})]}),u.jsxs("div",{className:"flex flex-col h-full px-4 border-r border-[#009CDE]",children:[u.jsxs("h4",{className:"text-[#1189e4] font-bold uppercase text-base tracking-wide mb-1 h-9 flex items-end pb-2",children:["THOUGHT ",u.jsx("br",{})," LEADERSHIP"]}),u.jsx("ul",{className:"flex-1",children:["Blog","Articles","Insights briefs","Presentations","Scientific posters","White papers"].map((s,l)=>u.jsx("li",{className:"border-b border-dotted border-[#1aa8cf] hover:border-solid last:border-0 group transition-colors duration-300",children:u.jsxs(ge,{to:"#",onClick:i,className:"flex justify-between items-center py-2 px-2 text-[15px] text-[#333] font-medium hover:text-[#009CDE] hover:bg-gray-50 transition-all",children:[s,u.jsx(De,{className:"text-[#1396d7] text-xs opacity-0 group-hover:opacity-0 transition-opacity transform group-hover:translate-x-1"})]})},l))})]}),u.jsxs("div",{className:"flex flex-col h-full px-4 border-r border-[#009CDE]",children:[u.jsx("h4",{className:"text-[#1189e4] font-bold uppercase text-base tracking-wide mb-2 h-4 flex items-end pb-2",children:"MULTIMEDIA"}),u.jsx("ul",{className:"flex-1",children:["Podcasts","Videos","Webinars on-demand"].map((s,l)=>u.jsx("li",{className:"border-b border-dotted border-[#1aa8cf] hover:border-solid last:border-0 group transition-colors duration-300",children:u.jsxs(ge,{to:"#",onClick:i,className:"flex justify-between items-center py-2 px-2 text-[15px] text-[#333] font-medium hover:text-[#009CDE] hover:bg-gray-50 transition-all",children:[s,u.jsx(De,{className:"text-[#1396d7] text-xs opacity-0 group-hover:opacity-0 transition-opacity transform group-hover:translate-x-1"})]})},l))})]}),u.jsxs("div",{className:"flex flex-col h-full px-4 border-r border-[#009CDE]",children:[u.jsxs("h4",{className:"text-[#1189e4] font-bold uppercase text-base tracking-wide mb-1 h-10 flex items-end pb-2",children:["ACCREDITATIONS ",u.jsx("br",{})," AND CERTIFICATIONS"]}),u.jsx("ul",{className:"flex-1",children:["Beijing, China","Durham, NC USA","Ithaca, NY USA","Livingston, Scotland","Marietta, GA USA","Mumbai, India","Singapore","Tokyo, Japan","Valencia, CA USA"].map((s,l)=>u.jsx("li",{className:"border-b border-dotted border-[#1aa8cf] hover:border-solid last:border-0 group transition-colors duration-300",children:u.jsxs(ge,{to:"#",onClick:i,className:"flex justify-between items-center py-2 px-2 text-[15px] text-[#333] font-medium hover:text-[#009CDE] hover:bg-gray-50 transition-all",children:[s,u.jsx(De,{className:"text-[#1396d7] text-xs opacity-0 group-hover:opacity-0 transition-opacity transform group-hover:translate-x-1"})]})},l))})]}),u.jsxs("div",{className:"flex flex-col h-full px-4",children:[u.jsx("h4",{className:"text-[#1189e4] font-bold uppercase text-base tracking-wide mb-1 h-4 flex items-end pb-2",children:"VISITOR GUIDES"}),u.jsx("ul",{className:"flex-1",children:["Beijing, China","Durham, NC USA - Global Headquarters","Edinburgh, Scotland","Ithaca, NY USA","Marietta, GA USA","Mumbai, India","Singapore","Tokyo, Japan","Valencia, CA USA"].map((s,l)=>u.jsx("li",{className:"border-b border-dotted border-[#1aa8cf] hover:border-solid last:border-0 group transition-colors duration-300",children:u.jsxs(ge,{to:"#",onClick:i,className:"flex justify-between items-center py-2 px-2 text-[15px] text-[#333] font-medium hover:text-[#009CDE] hover:bg-gray-50 transition-all",children:[s,u.jsx(De,{className:"text-[#1396d7] text-xs opacity-0 group-hover:opacity-0 transition-opacity transform group-hover:translate-x-1"})]})},l))})]})]})})]}),U5=()=>u.jsx("div",{className:"absolute top-full left-0 w-full bg-white shadow-xl border-t-[3px] border-primary animate-slideDown z-0",children:u.jsxs("div",{className:"max-w-[1440px] mx-auto flex min-h-[400px]",children:[u.jsxs("div",{className:"w-3/5 bg-white p-12 flex gap-12",children:[u.jsxs("div",{className:"flex-1 pr-6 border-r border-gray-200",children:[u.jsx("h4",{className:"text-darkBlue font-bold text-xl mb-4",children:"Working at Aqlivia"}),u.jsx("p",{className:"text-textLight text-sm leading-relaxed mb-6",children:"Our mission is to accelerate innovation for a healthier world. Together, we can solve customer challenges and improve patient lives."}),u.jsx("span",{className:"text-primary text-xs font-bold uppercase cursor-pointer hover:underline",children:"LEARN MORE ›"})]}),u.jsxs("div",{className:"flex-1",children:[u.jsx("h4",{className:"text-darkBlue font-bold text-xl mb-4",children:"Life at Aqlivia"}),u.jsx("p",{className:"text-textLight text-sm leading-relaxed mb-6",children:"Careers, culture and everything in between. Find out what’s going on right here, right now."}),u.jsx("span",{className:"text-primary text-xs font-bold uppercase cursor-pointer hover:underline",children:"LEARN MORE ›"})]})]}),u.jsxs("div",{className:"w-2/5 bg-primary p-12 text-white",children:[u.jsx("img",{src:"https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500",className:"rounded-lg shadow-lg mb-6 w-full h-48 object-cover"}),u.jsx("h4",{className:"font-bold text-2xl mb-4",children:"We're Hiring"}),u.jsx("p",{className:"text-sm leading-relaxed mb-6 opacity-90",children:"Improving human health requires brave thinkers who are willing to explore new ideas and build on successes. Unleash your potential with us."}),u.jsx("button",{className:"bg-transparent border-none text-white text-xs font-bold uppercase hover:underline",children:"SEARCH JOBS ›"})]})]})}),_5=({closeMenu:i})=>{const s=[{title:"WHO WE ARE",links:["About","Our approach","Privacy","Environmental Social Governance"]},{title:"NEWS & RESOURCES",links:["News","Events & Webinars","Our Locations"]},{title:"INVESTOR RELATIONS",links:["Quarterly Results","Press Releases","Events","Governance Documents","Investor FAQs"]}];return u.jsxs("div",{className:"absolute top-full left-0 w-full shadow-2xl animate-slideDown z-20 font-sans",children:[u.jsx("div",{className:"bg-gradient-to-r from-[#150e44] to-[#005385] py-6 px-6 md:px-12 flex justify-center items-center border-t border-white/10",children:u.jsxs("div",{className:"flex items-center bg-white rounded-full w-full max-w-2xl shadow-lg h-12 overflow-hidden",children:[u.jsxs("div",{className:"flex items-center flex-1 pl-6 h-full group",children:[u.jsx(Rs,{className:"text-gray-400 mr-3 text-sm transition-colors duration-300 group-hover:text-yellow-400 cursor-pointer"}),u.jsx("input",{type:"text",placeholder:"Search...",className:"flex-1 outline-none text-gray-700 text-sm placeholder-gray-500 bg-transparent h-full"})]}),u.jsx("button",{className:"bg-[#009CDE] hover:bg-[#007AB8] text-white px-8 h-full rounded-full text-xs font-bold uppercase transition-colors tracking-wider shadow-sm flex items-center justify-center",children:"DISCOVER"})]})}),u.jsxs("div",{className:"flex min-h-[450px]",children:[u.jsx("div",{className:"w-[70%] bg-white py-12 px-12",children:u.jsx("div",{className:"grid grid-cols-3 h-full",children:s.map((l,r)=>u.jsxs("div",{className:`flex flex-col h-full px-6 ${r!==s.length-1?"border-r border-[#009CDE]/30":""}`,children:[u.jsx("h4",{className:"text-[#005385] font-bold uppercase text-[15px] tracking-wide mb-6",children:l.title}),u.jsx("ul",{className:"flex-1 space-y-0",children:l.links.map((d,m)=>u.jsx("li",{className:"border-b border-dotted border-gray-300 hover:border-solid hover:border-[#009CDE] last:border-0 group transition-all duration-300",children:u.jsxs(ge,{to:`/about/${d.toLowerCase().replace(/ /g,"-")}`,onClick:i,className:"flex justify-between items-center py-3 px-1 text-[15px] text-[#333] font-normal hover:text-[#009CDE] hover:bg-gray-50 transition-all",children:[d,u.jsx(De,{className:"text-[#009CDE] text-xs opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"})]})},m))})]},r))})}),u.jsxs("div",{className:"w-[30%] bg-[#009CDE] p-10 text-white flex flex-col",children:[u.jsx("div",{className:"overflow-hidden rounded-xl shadow-lg mb-6 h-56 w-full relative group cursor-pointer",children:u.jsx("img",{src:"https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=500&q=80",alt:"Investor Relations",className:"w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"})}),u.jsxs("div",{className:"mt-2",children:[u.jsx("h4",{className:"font-bold text-xl mb-3 uppercase",children:"INVESTOR RELATIONS"}),u.jsx("p",{className:"text-sm leading-relaxed mb-6 opacity-95 font-light",children:"Visit our investor relations site for more information."}),u.jsxs(ge,{to:"/investors",onClick:i,className:"text-xs font-bold uppercase flex items-center gap-2 hover:underline tracking-wider",children:["LEARN MORE ",u.jsx(De,{size:10})]})]})]})]})]})},kd={services:["Central Laboratories","Genomics","Discovery Sciences","Biosciences","Specialty immunoassays","Vaccines","Medical tourism"],therapeutic:["Overview","Cell and Gene Therapy","Central Nervous System","Obesity & Endocrinology","GI and Hepatology","Immunology","Infectious Diseases","Oncology"],innovation:["Overview","Science Innovation","Operational Innovation","Digital Innovation"],resources:["Solutions","Thought Leadership","Multimedia","Accreditations","Visitor Guides"],careers:["Working at Aqlivia","Life at Aqlivia","Search Jobs"]},vs={services:{title:"Download our Corporate brochure",desc:"We are Aqlivia Laboratories, a leading clinical trial laboratory services organization.",img:"https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80"},therapeutic:{title:"Advancing Human Health",desc:"Our therapeutic expertise spans across all major disease areas to help you find cures faster.",img:"https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&q=80"},innovation:{title:"Digital Transformation",desc:"Harnessing the power of data and technology to drive the next generation of clinical research.",img:"https://images.unsplash.com/photo-1581093458791-9f302e686c87?w=400&q=80"},resources:{title:"Insights & Library",desc:"Access our latest whitepapers, case studies, and scientific publications.",img:"https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&q=80"},careers:{title:"Join Our Team",desc:"Discover a career that makes a difference. Explore opportunities at Aqlivia globally.",img:"https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80"}},G5=()=>{const[i,s]=j.useState(null),[l,r]=j.useState(!1),[d,m]=j.useState(!1),[p,x]=j.useState(""),[h,g]=j.useState(null),y=j.useRef(null),b=j.useRef(null),w=M=>s(i===M?null:M),A=()=>s(null),E=(M,O)=>`/services/${O.toLowerCase().replace(/ /g,"-")}`;j.useEffect(()=>{l?document.body.style.overflow="hidden":document.body.style.overflow="unset"},[l]),j.useEffect(()=>{const M=O=>{y.current&&!y.current.contains(O.target)&&s(null),d&&!O.target.closest("#search-drawer")&&!O.target.closest("#search-trigger")&&m(!1)};return document.addEventListener("mousedown",M),()=>document.removeEventListener("mousedown",M)},[d]);const B=M=>{M.preventDefault();const O=document.querySelector(".goog-te-gadget-simple");O&&O.click()},q="font-normal text-[14px] xl:text-[15px] flex items-center gap-1 transition-colors relative whitespace-nowrap text-white",z=({name:M,label:O})=>{const X=i===M;return u.jsx("div",{className:"relative h-full flex items-center group",children:u.jsxs("button",{onClick:()=>w(M),className:q,children:[O,u.jsx(J2,{size:10,className:`mt-[2px] transition-transform duration-300 ${X?"rotate-180":""}`}),u.jsx("span",{className:`absolute -bottom-2 left-0 w-full h-[2px] bg-white transition-all duration-300 origin-left ${X?"scale-x-100 opacity-100":"scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"}`})]})})};return u.jsxs("header",{ref:y,className:"absolute top-0 left-0 w-full z-50 font-sans transition-colors duration-300 bg-transparent",children:[u.jsx("div",{id:"google_translate_element",style:{display:"none"}}),u.jsxs("div",{className:"w-full px-6 lg:px-10 py-5 flex justify-between items-center relative z-50",children:[u.jsx("div",{className:"flex-shrink-0",children:u.jsx(ge,{to:"/",onClick:A,children:u.jsx("img",{src:K0,alt:"Logo",className:"h-8 md:h-9 lg:h-10 w-auto grayscale brightness-0 invert"})})}),u.jsx("div",{className:"hidden lg:flex flex-1 justify-center px-5 pt-3 pl-2",children:u.jsxs("nav",{className:"flex items-center gap-6 xl:gap-8",children:[u.jsx(z,{name:"services",label:"Services"}),u.jsx(z,{name:"therapeutic",label:"Therapeutic expertise"}),u.jsx(z,{name:"innovation",label:"Innovation"}),u.jsx(z,{name:"resources",label:"Resources"}),u.jsx(z,{name:"about",label:"About us"}),u.jsx(z,{name:"careers",label:"Careers"})]})}),u.jsxs("div",{className:"hidden lg:flex flex-col items-end gap-1 flex-shrink-0",children:[u.jsxs("div",{className:"flex items-center gap-4 mb-1",children:[u.jsxs("div",{className:"relative cursor-pointer flex items-center gap-1 text-white hover:text-primary transition-colors group",onClick:B,children:[u.jsx("span",{className:"text-[12px] font-bold uppercase tracking-wider group-hover:underline",children:"ENGLISH"}),u.jsx(og,{size:11})]}),u.jsxs("button",{onClick:()=>m(!d),className:"flex items-center gap-1 text-white hover:text-primary transition-colors cursor-pointer",children:[u.jsx("span",{className:"text-[12px] font-bold uppercase tracking-wider hover:underline",children:"SEARCH"}),u.jsx(fd,{size:11})]})]}),u.jsx(ge,{to:"/contact",className:"bg-[#0072CE] hover:bg-[#00629b] text-white text-[13px] font-bold uppercase px-6 py-2 rounded-full transition-all shadow-md tracking-wide",children:"CONTACT US"})]}),u.jsxs("div",{className:"flex items-center gap-5 lg:hidden",children:[u.jsx("button",{onClick:()=>{m(!d),r(!1)},className:"text-white hover:text-primary transition-colors",children:u.jsx(fd,{size:20})}),u.jsx("div",{className:"h-6 w-[1px] bg-white/40"}),u.jsx("button",{onClick:()=>{r(!l),m(!1)},className:"text-white text-3xl focus:outline-none flex items-center",children:l?u.jsx(Ar,{}):u.jsx(Z2,{})})]})]}),u.jsx("div",{id:"search-drawer",className:`absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 ease-out overflow-hidden z-40 origin-top ${d?"max-h-[80px] opacity-100 border-t-4 border-primary":"max-h-0 opacity-0"}`,children:u.jsxs("div",{className:"max-w-[1440px] mx-auto px-6 py-5 flex items-center",children:[u.jsx(fd,{className:"text-primary mr-4 text-xl"}),u.jsx("input",{ref:b,type:"text",placeholder:"Search Aqlivia...",className:"flex-1 text-lg text-darkBlue placeholder-gray-400 outline-none bg-transparent font-medium",value:p,onChange:M=>x(M.target.value)}),u.jsx("button",{onClick:()=>m(!1),className:"ml-4 text-xs font-bold text-gray-400 hover:text-red-600 uppercase tracking-wider",children:"Close"})]})}),u.jsx("div",{className:`fixed top-[85px] left-0 right-0 bottom-0 bg-white z-40 transition-transform duration-300 ease-in-out flex flex-col px-0 overflow-y-auto lg:hidden ${l?"translate-x-0":"translate-x-full"}`,children:u.jsxs("div",{className:"flex flex-col pb-20 h-full",children:[!h&&u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"px-6 pt-6",children:[u.jsx(ge,{to:"/contact",className:"block w-full bg-[#0072CE] text-white text-center py-3 rounded-full font-bold uppercase mb-6 shadow-sm hover:bg-[#00629b] transition-colors tracking-wide text-sm",onClick:()=>r(!1),children:"Contact Us"}),u.jsxs("button",{className:"flex w-full items-center justify-center gap-2 text-[#0072CE] font-bold text-xs uppercase mb-6",onClick:B,children:["ENGLISH ",u.jsx(og,{size:14})]}),u.jsx("div",{className:"w-full h-[1px] bg-gray-200 mb-2"})]}),u.jsxs("div",{className:"flex flex-col gap-0",children:[Object.keys(kd).map(M=>u.jsxs("button",{onClick:()=>g(M),className:"flex justify-between items-center w-full text-[16px] text-[#333] hover:text-[#0072CE] py-4 capitalize font-normal group border-b border-gray-100 px-6",children:[u.jsx("span",{children:M==="therapeutic"?"Therapeutic Expertise":M}),u.jsx(De,{className:"text-[#0072CE] text-sm"})]},M)),u.jsxs(ge,{to:"/about",className:"flex justify-between items-center w-full text-[16px] text-[#333] hover:text-[#0072CE] py-4 font-normal border-b border-gray-100 px-6",onClick:()=>r(!1),children:["About Us",u.jsx(De,{className:"text-[#0072CE] text-sm"})]})]})]}),h&&u.jsxs("div",{className:"bg-gray-50 flex-1 animate-fadeIn flex flex-col",children:[u.jsxs("div",{className:"bg-gradient-to-r from-[#003087] to-[#009CDE] p-6 text-center shadow-md relative",children:[u.jsxs("div",{className:"flex items-center justify-start gap-3 mb-6",children:[u.jsx("button",{onClick:()=>g(null),className:"text-white/80 hover:text-white",children:u.jsx(W2,{size:14})}),u.jsxs("span",{className:"text-white/90 text-[10px] font-bold uppercase tracking-widest",children:["MAIN / ",h]})]}),u.jsxs("div",{className:"relative mb-4",children:[u.jsx(Rs,{className:"absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"}),u.jsx("input",{type:"text",placeholder:`Search ${h}...`,className:"w-full pl-10 pr-4 py-3 rounded-full text-sm outline-none text-gray-700 bg-white shadow-sm"})]}),u.jsx("button",{className:"w-full bg-[#009CDE] hover:bg-[#007AB8] text-white py-3 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg border border-white/20",children:"DISCOVER"})]}),u.jsx("div",{className:"flex-1 w-full bg-white",children:h==="services"?u.jsx(S0,{isMobile:!0,closeMenu:()=>r(!1)}):u.jsxs("div",{className:"p-6",children:[u.jsxs("div",{className:"bg-white rounded-lg shadow-sm overflow-hidden mb-6",children:[u.jsx("img",{src:vs[h]?.img||vs.services.img,alt:"Section",className:"w-full h-40 object-cover"}),u.jsxs("div",{className:"p-5",children:[u.jsx("h3",{className:"text-[#333] font-bold text-lg leading-tight mb-2",children:vs[h]?.title||vs.services.title}),u.jsx("p",{className:"text-gray-600 text-sm mb-4 leading-relaxed",children:vs[h]?.desc||vs.services.desc}),u.jsx("button",{className:"w-full bg-[#0072CE] text-white py-2 rounded-full text-xs font-bold uppercase",children:"LEARN MORE"})]})]}),u.jsx("div",{className:"bg-white rounded-lg border border-gray-100 shadow-sm",children:kd[h].map((M,O)=>u.jsxs(ge,{to:E(h,M),onClick:()=>r(!1),className:`flex justify-between items-center py-4 px-4 text-[#333] font-medium text-[15px] hover:bg-gray-50 ${O!==kd[h].length-1?"border-b border-dotted border-gray-300":""}`,children:[M,u.jsx(De,{className:"text-[#009CDE] text-xs"})]},M))})]})})]})]})}),u.jsxs("div",{className:"hidden lg:block",children:[i==="services"&&u.jsx(S0,{closeMenu:A}),i==="therapeutic"&&u.jsx(H5,{closeMenu:A}),i==="innovation"&&u.jsx(P5,{closeMenu:A}),i==="resources"&&u.jsx(I5,{closeMenu:A}),i==="about"&&u.jsx(_5,{closeMenu:A}),i==="careers"&&u.jsx(U5,{closeMenu:A})]})]})},Y5=()=>{const i=new Date().getFullYear(),s=[{title:"India APAC Head Quarter",address:"#005, The Mark Structure, Unique Infra Building, Next to Tennis court, North Bangalore – 560097",mapLink:"https://www.google.com/maps/search/?api=1&query=The+Mark+Structure+Unique+Infra+Building+Bangalore"},{title:"R&D – Manufacturing Unit-I",address:"House No. 520, 2nd Floor, 9th Cross, Tank road, North East of N R Mohalla, Mysuru – 570007",mapLink:"https://www.google.com/maps/search/?api=1&query=520+9th+Cross+Tank+road+NR+Mohalla+Mysuru"},{title:"Regional Office Japan",address:"Kyoto Research Park, Unique Kyoto City, Kyoto – 6008813",mapLink:"https://www.google.com/maps/search/?api=1&query=Kyoto+Research+Park+Kyoto"},{title:"Regional Office Canada",address:"# 263, Macewan Road, SW Edmonton, Alberta – T6W0C4",phone:"+1 587-760-3432",mapLink:"https://www.google.com/maps/search/?api=1&query=263+Macewan+Road+SW+Edmonton+Alberta"},{title:"Regional Office Australia",address:"#106, Portland Drive, Cameron Park, NSW 2285",phone:"+61 433 690 905",mapLink:"https://www.google.com/maps/search/?api=1&query=106+Portland+Drive+Cameron+Park+NSW"}];return u.jsx("footer",{className:"bg-[#140B42] text-white pt-16 pb-8 border-t border-white/10 font-sans",children:u.jsxs("div",{className:"max-w-[1440px] mx-auto px-6 md:px-12",children:[u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12",children:[u.jsxs("div",{children:[u.jsx(ge,{to:"/",className:"inline-block mb-6",children:u.jsx("img",{src:K0,alt:"Aqlivia Logo",className:"h-10 w-auto brightness-0 invert"})}),u.jsx("p",{className:"text-gray-400 text-sm leading-relaxed mb-6",children:"Empowering life sciences with next-generation research, development, and consulting services designed for global impact."}),u.jsxs("div",{className:"flex gap-4",children:[u.jsx("a",{href:"#",className:"w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors",children:u.jsx(F2,{size:14})}),u.jsx("a",{href:"#",className:"w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors",children:u.jsx(K2,{size:14})}),u.jsx("a",{href:"#",className:"w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors",children:u.jsx(Q2,{size:14})})]})]}),u.jsxs("div",{children:[u.jsx("h4",{className:"text-lg font-bold mb-6 border-b border-white/10 pb-2 inline-block",children:"Quick Links"}),u.jsxs("ul",{className:"space-y-3 text-sm text-gray-400",children:[u.jsx("li",{children:u.jsx(ge,{to:"/about",className:"hover:text-primary transition-colors",children:"About Us"})}),u.jsx("li",{children:u.jsx(ge,{to:"/services",className:"hover:text-primary transition-colors",children:"Our Services"})}),u.jsx("li",{children:u.jsx(ge,{to:"/careers",className:"hover:text-primary transition-colors",children:"Careers"})}),u.jsx("li",{children:u.jsx(ge,{to:"/contact",className:"hover:text-primary transition-colors",children:"Contact Us"})}),u.jsx("li",{children:u.jsx(ge,{to:"/privacy",className:"hover:text-primary transition-colors",children:"Privacy Policy"})})]})]}),u.jsxs("div",{className:"lg:col-span-2",children:[u.jsx("h4",{className:"text-lg font-bold mb-6 border-b border-white/10 pb-2 inline-block",children:"Global Locations"}),u.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6",children:s.map((l,r)=>u.jsxs("div",{className:"group",children:[u.jsx("h5",{className:"text-primary font-bold text-sm mb-1",children:l.title}),u.jsxs("a",{href:l.mapLink,target:"_blank",rel:"noopener noreferrer",className:"flex items-start gap-2 text-gray-400 text-xs hover:text-white transition-colors leading-relaxed",children:[u.jsx(ew,{className:"mt-0.5 flex-shrink-0 text-white/30 group-hover:text-primary"}),l.address]}),l.phone&&u.jsxs("div",{className:"flex items-center gap-2 text-gray-400 text-xs mt-1 ml-5",children:[u.jsx(iw,{size:10,className:"text-white/30"}),u.jsx("span",{children:l.phone})]})]},r))})]})]}),u.jsxs("div",{className:"border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500",children:[u.jsxs("p",{children:["© ",i," Aqlivia Laboratories. All rights reserved."]}),u.jsxs("div",{className:"flex gap-6 mt-4 md:mt-0",children:[u.jsx(ge,{to:"#",className:"hover:text-white",children:"Terms of Use"}),u.jsx(ge,{to:"#",className:"hover:text-white",children:"Privacy Policy"}),u.jsx(ge,{to:"#",className:"hover:text-white",children:"Cookie Policy"})]})]})]})})},Q5="/Aqvilia/assets/ai-DRm6N5F0.jpg",F5=()=>{const[i,s]=j.useState(!1),[l,r]=j.useState(!1),[d,m]=j.useState(""),[p,x]=j.useState(!1),h=j.useRef(null),y=[{id:1,text:"We are here if you need us.",sender:"bot",type:"text"},{id:2,text:"What can we help you with today?",sender:"bot",type:"options",options:[{label:"Questions about our Science/Services/Pricing",value:"science"},{label:"Investigator Site Support",value:"support"},{label:"Portal Access / Password Reset",value:"portal"},{label:"Global Accreditations",value:"certs"},{label:"Careers / Employment",value:"careers"},{label:"Locations / Phone Numbers",value:"locations"}]}],[b,w]=j.useState(y),A=()=>{h.current?.scrollIntoView({behavior:"smooth"})};j.useEffect(()=>{A()},[b,i,p]);const E=()=>{w(y)},B=(M,O=null)=>{x(!0);let X="I'm not sure about that. Please contact our support team directly.",P=null;const Y=O||M.toLowerCase();Y==="science"||M.includes("science")||M.includes("pricing")?(X="Our scientific experts provide comprehensive support for clinical trials. For specific pricing or service details, please request a proposal.",P={text:"Request Proposal",url:"/contact"}):Y==="support"||M.includes("investigator")||M.includes("holiday")?(X="For Investigator Site Support (including lab reports and supplies), please log in to the Investigator Portal or contact your Project Manager.",P={text:"Investigator Portal",url:"/resources"}):Y==="portal"||M.includes("portal")||M.includes("password")?(X="Having trouble logging in? You can reset your password or request access on our portal login page.",P={text:"Reset Password",url:"/resources"}):Y==="certs"||M.includes("accreditation")||M.includes("certification")?(X="We maintain global standards including CAP, CLIA, and NGSP certifications across our laboratories.",P={text:"View Certifications",url:"/about"}):Y==="careers"||M.includes("job")||M.includes("employment")?(X="We are always looking for talent! View our latest job openings on the Careers page.",P={text:"View Openings",url:"/careers"}):Y==="locations"||M.includes("phone")||M.includes("location")?(X="We have global laboratories in the US, UK, China, India, and Japan. Find specific phone numbers here:",P={text:"View Locations",url:"/contact"}):M.match(/(hello|hi|hey)/i)&&(X="Hello! Please choose an option above so I can direct you to the right team."),setTimeout(()=>{x(!1),w(W=>[...W,{id:Date.now(),text:X,sender:"bot",type:"text",link:P}])},1200)},q=()=>{if(!d.trim())return;w(O=>[...O,{id:Date.now(),text:d,sender:"user",type:"text"}]);const M=d;m(""),B(M)},z=M=>{w(O=>[...O,{id:Date.now(),text:M.label,sender:"user",type:"text"}]),B(M.label,M.value)};return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"fixed bottom-73 right-4 md:bottom-8 md:right-8 flex flex-col items-center gap-3 md:gap-4 z-50",children:[u.jsx("a",{href:"https://wa.me/8660013411",target:"_blank",rel:"noopener noreferrer",className:"bg-[#1de365] w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white text-lg md:text-xl shadow-lg hover:scale-110 transition-all duration-300",title:"Chat on WhatsApp",children:u.jsx(X2,{})}),u.jsx("a",{href:"tel:+918660013411",className:"bg-[#3b64ec] w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white text-lg md:text-xl shadow-lg hover:scale-110 transition-all duration-300",title:"Call Us",children:u.jsx(aw,{size:16})}),!i&&!l&&u.jsxs("div",{className:"absolute bottom-0 right-16 md:right-20 bg-white p-3 md:p-4 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.15)] w-40 md:w-48 animate-fade-in pointer-events-auto",children:[u.jsx("button",{onClick:M=>{M.stopPropagation(),r(!0)},className:"absolute -top-3 -left-3 bg-black text-white rounded-full w-6 h-6 flex items-center justify-center text-xs shadow-md hover:bg-gray-800 transition-colors",children:u.jsx(Ar,{})}),u.jsxs("div",{className:"flex flex-col text-left",children:[u.jsx("span",{className:"font-semibold text-gray-800 text-sm md:text-[14px] mb-0",children:"Hey there!"}),u.jsx("span",{className:"text-gray-600 text-xs md:text-[12px] leading-tight",children:"How can we help you?"})]}),u.jsx("div",{className:"absolute top-8 -right-2 w-0 h-0 border-t-[8px] border-t-transparent border-l-[10px] border-l-white border-b-[8px] border-b-transparent"})]}),u.jsx("div",{onClick:()=>s(!i),className:"bg-[#00A3A1] w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-[0_4px_14px_rgba(0,163,161,0.4)] cursor-pointer hover:scale-105 transition-all duration-300 overflow-hidden border-2 border-blue-700 relative",children:i?u.jsx(Ar,{className:"text-white text-xl md:text-2xl"}):u.jsx("img",{src:Q5,alt:"Support",className:"w-full h-full object-cover"})})]}),i&&u.jsxs("div",{className:"fixed bottom-20 right-4 left-4 md:left-auto md:right-8 w-auto md:w-[380px] h-[70vh] md:h-[600px] max-h-[80vh] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border border-gray-100 animate-[slideUp_0.4s_cubic-bezier(0.16,1,0.3,1)] origin-bottom-right",children:[u.jsxs("div",{className:"bg-[#00A3A1] text-white p-4 flex justify-between items-center shadow-md",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("button",{onClick:E,className:"hover:bg-white/20 p-1 rounded-full transition-colors",title:"Restart Chat",children:u.jsx(Kn,{className:"text-white text-lg"})}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("div",{className:"bg-white/20 p-1.5 rounded-full border border-white/30",children:u.jsx($2,{className:"text-white text-xs md:text-sm"})}),u.jsx("span",{className:"font-bold text-sm md:text-base leading-tight",children:"Customer Solutions"})]})]}),u.jsx(Ar,{onClick:()=>s(!1),className:"cursor-pointer text-xl hover:text-white/80 transition-colors"})]}),u.jsxs("div",{className:"flex-1 p-3 md:p-4 bg-white overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent",children:[b.map(M=>u.jsxs("div",{className:`flex flex-col ${M.sender==="user"?"items-end":"items-start"}`,children:[M.type!=="options"&&u.jsxs("div",{className:`max-w-[85%] rounded-2xl p-3 text-sm md:text-[15px] shadow-sm leading-snug relative ${M.sender==="user"?"bg-[#00A3A1] text-white rounded-tr-none":"bg-[#f0f0f0] text-gray-800 rounded-tl-none"}`,children:[M.text,M.link&&u.jsx(ge,{to:M.link.url,className:"block mt-3 text-center bg-white text-[#00A3A1] py-2 rounded-lg text-xs font-bold uppercase hover:bg-gray-50 transition-colors border border-[#00A3A1]/20",children:M.link.text})]}),M.type==="options"&&u.jsxs("div",{className:"w-full mt-2 space-y-2",children:[M.text&&u.jsx("div",{className:"bg-[#f0f0f0] text-gray-800 rounded-2xl rounded-tl-none p-3 text-sm md:text-[15px] shadow-sm max-w-[85%] mb-3",children:M.text}),u.jsx("div",{className:"flex flex-col items-start gap-2 w-full pl-1",children:M.options.map((O,X)=>u.jsx("button",{onClick:()=>z(O),className:"text-left text-xs md:text-[13px] bg-white border border-gray-300 text-[#005a8e] px-3 py-2.5 md:px-4 md:py-3 rounded-xl hover:bg-[#f0f4f8] hover:border-[#005a8e] transition-all font-semibold shadow-sm w-full md:w-[95%]",children:O.label},X))})]})]},M.id)),p&&u.jsx("div",{className:"flex justify-start animate-pulse",children:u.jsxs("div",{className:"bg-[#f0f0f0] text-gray-500 rounded-2xl rounded-tl-none p-3 text-xs flex items-center gap-1",children:[u.jsx("span",{className:"w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce",style:{animationDelay:"0s"}}),u.jsx("span",{className:"w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce",style:{animationDelay:"0.2s"}}),u.jsx("span",{className:"w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce",style:{animationDelay:"0.4s"}})]})}),u.jsx("div",{ref:h})]}),u.jsx("div",{className:"p-3 bg-white border-t border-gray-100",children:u.jsxs("div",{className:"relative",children:[u.jsx("input",{value:d,onChange:M=>m(M.target.value),className:"w-full border border-gray-300 rounded-full pl-5 pr-12 py-3 text-sm outline-none text-gray-700 placeholder-gray-500 focus:border-[#00A3A1] transition-colors",placeholder:"Choose an option",onKeyPress:M=>M.key==="Enter"&&q()}),u.jsx("button",{onClick:()=>q(),disabled:!d.trim(),className:`absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-all ${d.trim()?"text-[#00A3A1] hover:bg-gray-100":"text-gray-300 cursor-not-allowed"}`,children:u.jsx(tw,{size:16})})]})})]})]})};function K5(i,s){if(typeof Proxy>"u")return Sd;const l=new Map,r=(m,p)=>Sd(m,p,i,s),d=(m,p)=>r(m,p);return new Proxy(d,{get:(m,p)=>p==="create"?r:(l.has(p)||l.set(p,Sd(p,void 0,i,s)),l.get(p))})}const X5=K5(V5,J3),W5="/Aqvilia/assets/hero1-BQ8sbskG.jpeg",Z5="/Aqvilia/assets/geneomics-BmaAi9JL.png",J5="/Aqvilia/assets/central%20labatory-CC-wzl-l.png",$5="/Aqvilia/assets/medicaltourism-Bs8hBNft.avif",eS="/Aqvilia/assets/consulting-DYpzISVF.jpg",tS="/Aqvilia/assets/formulation-7snlta8W.png",aS="/Aqvilia/assets/pharmacovigilance-9jHi2HV7.jpg",iS="/Aqvilia/assets/Biosimilars-CmKFgImh.jpg",sS="/Aqvilia/assets/Moleculardiagnostics-Cz0cd9Eq.jpg",nS="/Aqvilia/assets/biostatistics-BhYTKdWd.webp",lS="/Aqvilia/assets/Medical%20Writing-C5pbMvLj.webp",rS="/Aqvilia/assets/ProjectManagement-D-4y862C.webp",oS="/Aqvilia/assets/CT-CIkdatP7.webp",cS="/Aqvilia/assets/Ai1-Dyqbx437.jpg",A0=()=>{const[i,s]=j.useState(0),[l,r]=j.useState(0),d=j.useRef(null),m=[{id:1,image:W5,title:`Welcome to
AQLIVIA
Laboratories`,button:"Learn More",link:"/about/about"},{id:2,image:"https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=2000",title:"Accelerating Clinical Innovation",button:"Our Technologies"},{id:3,image:"https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2000",title:"Connecting Data Globally",button:"Explore Network"}],p=j.useRef(null),x=j.useRef(null),h=50,g=()=>{if(!p.current||!x.current)return;const P=p.current-x.current,Y=P>h,W=P<-h;Y&&s(Q=>(Q+1)%m.length),W&&s(Q=>(Q-1+m.length)%m.length),p.current=null,x.current=null},y=P=>{x.current=null,p.current=P.targetTouches[0].clientX},b=P=>{x.current=P.targetTouches[0].clientX},w=()=>g(),A=P=>{x.current=null,p.current=P.clientX},E=P=>{P.buttons===1&&(x.current=P.clientX)},B=()=>g(),q=()=>{p.current&&x.current&&g()},z=P=>{if(d.current){const{current:Y}=d;P==="left"?Y.scrollBy({left:-300,behavior:"smooth"}):Y.scrollBy({left:300,behavior:"smooth"})}},M=()=>{const P=d.current;if(P){const{scrollLeft:Y,scrollWidth:W,clientWidth:Q}=P;r(Y/(W-Q)*100)}},O=[{id:"Central Laboratory Services",title:"Central Laboratories",img:J5},{id:"Genomics",title:"Genomics",img:Z5},{id:"Discovery Science",title:"Discovery Science",img:"https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600"},{id:"Biosciences",title:"Biosciences",img:"https://images.unsplash.com/photo-1576086213369-97a306d36557?w=600"},{id:"Specialty Immunoassays",title:"Specialty Immunoassays",img:"https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600"},{id:"Medical Tourism",title:"Medical Tourism",img:$5},{id:"Consulting",title:"Consulting",img:eS},{id:"Formulations",title:"Formulations",img:tS},{id:"Pharmacovigilance",title:"Pharmacovigilance",img:aS},{id:"Biosimilars",title:"Biosimilars",img:iS},{id:"Molecular Diagnostics",title:"Molecular Diagnostics",img:sS},{id:"Biostatistics",title:"Biostatistics",img:nS},{id:"Medical Writing",title:"Medical Writing",img:lS},{id:"Project Management",title:"Project Management",img:rS},{id:"Clinical Monitoring",title:"Clinical Monitoring",img:X0},{id:"Pharma Resource Solution",title:"Pharma Resource Solution",img:W0},{id:"Computed Tomography",title:"Computed Tomography",img:oS},{id:"AI Artificial Intelligence",title:"AI Artificial Intelligence",img:cS}],X=[{tag:"Press Release",title:"Aqlivia Launches Site Lab Navigator",desc:"Aqlivia Laboratories launches Site Lab Navigator, an advanced e-Requisition solution to streamline clinical trial workflows and enhance data accuracy.",img:"https://images.unsplash.com/photo-1497366216548-37526070297c?w=800"},{tag:"Bioanalysis Blog",title:"19th WRIB Part 1",desc:"Insights from the upcoming event focusing on bioanalysis, biomarkers and immunogenicity to support biologic and gene therapy development.",img:"https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800"},{tag:"Innovation",title:"Advancing Oncology Research",desc:"New methodologies in cancer treatment trials that are reshaping the landscape of modern medicine and patient care protocols.",img:"https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800"},{tag:"Case Study",title:"Global Clinical Trial Success",desc:"How we managed a multi-center study across 3 continents, ensuring compliance and speed in a complex regulatory environment.",img:"https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=800"}];return u.jsxs("div",{className:"w-full font-sans",children:[u.jsxs("section",{className:"relative h-[65vh] md:h-[120vh] w-full overflow-hidden bg-black touch-pan-y cursor-grab active:cursor-grabbing select-none group",onTouchStart:y,onTouchMove:b,onTouchEnd:w,onMouseDown:A,onMouseMove:E,onMouseUp:B,onMouseLeave:q,children:[m.map((P,Y)=>u.jsxs("div",{className:`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-all duration-1000 ease-in-out flex items-center brightness-110 ${Y===i?"opacity-100 z-10 visible":"opacity-0 z-0 invisible"}`,style:{backgroundImage:`url(${P.image})`},children:[u.jsx("div",{className:"absolute inset-0 bg-white z-0 opacity-0 transition-opacity duration-300 group-active:opacity-30 pointer-events-none"}),u.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-[#140B42] via-[#140B42]/50 to-transparent z-10"}),u.jsx("div",{className:"absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#140B42] to-transparent z-10"}),u.jsx("div",{className:"relative z-20 max-w-[1440px] mx-auto px-6 md:px-11 w-full pointer-events-none",children:Y===i&&u.jsx("div",{className:"pointer-events-auto",children:u.jsxs("div",{className:"max-w-3xl text-left mt-0 md:mt-5",children:[u.jsx("h1",{className:"text-4xl sm:text-5xl md:text-6xl lg:text-[75px] text-white font-bold mb-6 md:mb-10 leading-tight whitespace-pre-line",children:P.title}),u.jsx(ge,{to:P.link,children:u.jsx("button",{className:"bg-primary hover:bg-[#1063b7] text-white px-6 py-3 md:px-8 -mb-4 md:py-3.5 rounded-full font-bold uppercase text-xs md:text-xs transition-transform hover:-translate-y-1 shadow-lg tracking-wider",children:P.button})})]})})})]},P.id)),u.jsx("div",{className:"absolute bottom-6 md:bottom-4 left-1/2 transform -translate-x-1/2 z-30",children:u.jsx("div",{className:"flex items-center gap-2",children:m.map((P,Y)=>u.jsx("button",{onClick:()=>s(Y),className:`w-7 h-2.5 md:w-9 md:h-3 rounded-full border-2 border-white transition-all duration-300 ${Y===i?"bg-white":"bg-transparent hover:bg-white/20"}`,"aria-label":`Slide ${Y+1}`},Y))})})]}),u.jsx("section",{className:"py-16 md:py-7 px-6 md:px-60 bg-white",children:u.jsx("div",{className:"max-w-[1440px] mx-auto",children:u.jsxs("div",{className:"text-left max-w-5xl mx-auto space-y-6 md:space-y-2",children:[u.jsx("h2",{className:"text-[#140B42] text-2xl md:text-3xl lg:text-3xl font-bold leading-snug md:leading-tight",children:"Aqvilia Laboratories is a global leader in drug discovery and development laboratory services, offering a comprehensive suite of central laboratory and specialty biomarker services."}),u.jsx("p",{className:"text-[#545454] text-sm md:text-sm leading-relaxed",children:"In a complex environment, we work closely with customers to understand their unique needs and provide the right mix of in-depth scientific and operational expertise, specialty lab services and next-generation lab technologies to achieve their goals with efficiency. At each stage of drug discovery and development, the Aqvilia Laboratories team is ready to deliver timely and reliable outcomes, turning innovative ideas into groundbreaking milestones for patients in need."})]})})}),u.jsx("section",{className:"py-10 px-6 bg-gray-50",children:u.jsxs("div",{className:"max-w-[1440px] mx-auto",children:[u.jsxs("div",{className:"flex justify-between items-center mb-10 px-2",children:[u.jsx("h2",{className:"text-[#140B42] text-2xl md:text-3xl font-bold tracking-tight",children:"Our Services"}),u.jsxs("div",{className:"flex gap-4 translate-y-11",children:[u.jsx("button",{onClick:()=>z("left"),className:"w-9 h-9 rounded-full bg-[#0090d0] hover:bg-[#005a8e] text-white flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md",children:u.jsx(Kn,{size:18})}),u.jsx("button",{onClick:()=>z("right"),className:"w-9 h-9 rounded-full bg-[#0090d0] hover:bg-[#005a8e] text-white flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg",children:u.jsx(De,{size:18})})]})]}),u.jsx("div",{ref:d,onScroll:M,className:"flex gap-8 overflow-x-auto pb-12 mt-18 px-2 scrollbar-hide scroll-smooth snap-x snap-mandatory",style:{scrollbarWidth:"none",msOverflowStyle:"none"},children:O.map((P,Y)=>u.jsxs(ge,{to:`/services/${P.id}`,className:"min-w-[300px] md:min-w-[380px] snap-start block group cursor-pointer",children:[u.jsxs("div",{className:"w-full h-[220px] md:h-[260px] overflow-hidden rounded-2xl mb-5 relative",children:[u.jsx("div",{className:"absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10"}),u.jsx("img",{src:P.img,alt:P.title,className:"w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-100"})]}),u.jsxs("div",{className:"flex flex-col items-start space-y-3",children:[u.jsx("h3",{className:"text-[#140B42] text-xl md:text-1xl font-bold leading-tight group-hover:text-[#140B42] transition-colors text-left",children:P.title}),u.jsxs("div",{className:"flex items-center gap-2 text-[#0090d0] font-bold text-xs uppercase tracking-wider group/link",children:["Learn More"," ",u.jsx(De,{className:"text-[10px] transform transition-transform group-hover/link:translate-x-1"})]})]})]},Y))}),u.jsx("div",{className:"w-full max-w-5xl mx-auto h-1.5 bg-gray-200 rounded-full mt-6 overflow-hidden relative",children:u.jsx("div",{className:"absolute left-0 top-0 h-full bg-[#1c1c1c] rounded-full transition-all duration-100 ease-out",style:{width:"20%",left:`${l*.8}%`}})})]})}),u.jsx("section",{className:"py-20 px-5 bg-white overflow-hidden",children:u.jsx("div",{className:"max-w-[1440px] mx-auto",children:u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16",children:X.map((P,Y)=>{const W=Y%2===0;return u.jsxs(X5.div,{className:"flex flex-col items-start group",initial:{opacity:0,x:W?-50:50},whileInView:{opacity:1,x:0},transition:{duration:.8,ease:"easeOut",delay:.1},viewport:{once:!0,amount:.1},children:[u.jsx("div",{className:"w-full h-[375px] overflow-hidden rounded-xl mb-6",children:u.jsx("img",{src:P.img,alt:P.title,className:"w-full h-full object-cover transition-transform duration-700 group-hover:scale-100"})}),u.jsxs("div",{className:"w-full",children:[u.jsx("h3",{className:"text-[#140B42] text-2xl md:text-3xl font-bold mb-4 leading-tight group-hover:text-[#140B42] transition-colors",children:P.title}),u.jsx("p",{className:"text-gray-600 text-base leading-relaxed mb-6",children:P.desc}),u.jsx("button",{className:"bg-[#0090d0] hover:bg-[#007bb5] text-white text-sm font-bold px-8 py-3 rounded-full transition-colors uppercase tracking-wide",children:"Read More"})]})]},Y)})})})})]})},dS=()=>u.jsxs("div",{className:"w-full bg-white",children:[u.jsxs("section",{className:"relative h-[95vh] min-h-[300px] w-full flex items-center justify-center overflow-hidden",children:[u.jsxs("video",{className:"absolute inset-0 w-full h-full object-cover object-[center_25%]",autoPlay:!0,loop:!0,muted:!0,playsInline:!0,children:[u.jsx("source",{src:"src/assets/aqvilia_contact_us.mp4",type:"video/mp4"}),"Your browser does not support the video tag."]}),u.jsx("div",{className:"absolute inset-0 bg-[#009CDE]/60 mix-blend-multiply"}),u.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-sky-900/30 to-transparent"}),u.jsx("h1",{className:"relative z-10 text-4xl md:text-8xl font-bold text-white tracking-wide text-center drop-shadow-md",children:"Let's Connect"})]}),u.jsxs("div",{className:"max-w-[1000px] mx-auto px-6 py-16",children:[u.jsxs("div",{className:"mb-12",children:[u.jsxs("ul",{className:"space-y-3 text-sm text-[#545454] list-disc pl-5 leading-relaxed",children:[u.jsxs("li",{children:["For ",u.jsx("strong",{children:"Career Opportunities"})," or specific job/role questions, please visit our ",u.jsx(ge,{to:"/careers",className:"text-primary hover:underline font-semibold",children:"Careers Page"}),"."]}),u.jsxs("li",{children:["To ",u.jsx("strong",{children:"Submit Specimens"}),", please visit our ",u.jsx("a",{href:"#",className:"text-primary hover:underline font-semibold",children:"Specimen Submission Site"}),"."]}),u.jsxs("li",{children:["Need ",u.jsx("strong",{children:"Investigator Site Support"})," (lab reports, supply requests, etc.)? Visit ",u.jsx("a",{href:"#",className:"text-primary hover:underline font-semibold",children:"Portals here"}),"."]}),u.jsxs("li",{children:["Need support with ",u.jsx("strong",{children:"Portal Access"}),"? ",u.jsx("a",{href:"#",className:"text-primary hover:underline font-semibold",children:"Click Here"}),"."]}),u.jsxs("li",{children:["For specific location ",u.jsx("strong",{children:"Phone Numbers"}),", please visit our ",u.jsx("a",{href:"#",className:"text-primary hover:underline font-semibold",children:"Locations page"}),"."]})]}),u.jsx("p",{className:"mt-6 text-xs text-gray-500 italic",children:"Complete the form below to be contacted by our Customer Solutions Team."})]}),u.jsxs("form",{className:"space-y-8",children:[u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[u.jsx("div",{className:"flex flex-col gap-1",children:u.jsx("input",{type:"text",placeholder:"First Name *",className:"w-full border border-gray-300 rounded px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder-gray-400",required:!0})}),u.jsx("div",{className:"flex flex-col gap-1",children:u.jsx("input",{type:"text",placeholder:"Last Name *",className:"w-full border border-gray-300 rounded px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder-gray-400",required:!0})})]}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[u.jsx("div",{className:"flex flex-col gap-1",children:u.jsx("input",{type:"email",placeholder:"Email Address *",className:"w-full border border-gray-300 rounded px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder-gray-400",required:!0})}),u.jsx("div",{className:"flex flex-col gap-1",children:u.jsx("input",{type:"text",placeholder:"Business Phone",className:"w-full border border-gray-300 rounded px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder-gray-400"})})]}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[u.jsx("div",{className:"flex flex-col gap-1",children:u.jsx("input",{type:"text",placeholder:"Job Title *",className:"w-full border border-gray-300 rounded px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder-gray-400",required:!0})}),u.jsx("div",{className:"flex flex-col gap-1",children:u.jsx("input",{type:"text",placeholder:"Company *",className:"w-full border border-gray-300 rounded px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder-gray-400",required:!0})})]}),u.jsxs("div",{className:"bg-gray-50 p-6 rounded-lg border border-gray-100",children:[u.jsx("label",{className:"block text-sm font-bold text-darkBlue mb-4 uppercase tracking-wider",children:"I am interested in:"}),u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6",children:["Research Technology","Drug Development","Bioanalytics & ADME Services","Bioinformatics","Biomarker / Assay Services","Bioprospecting & Specimen Mgmt","Central Laboratory Services","Cell & Gene Therapy","Clinical Lab Services","COVID-19 / Safety Testing","Companion Diagnostics","Decentralized Laboratory Solutions","Flow Cytometry","Genomics Services","Immunogenicity","Lab Data Management","Translational Science","Vaccine Clinical Trial Testing"].map(i=>u.jsxs("label",{className:"flex items-center gap-3 cursor-pointer group",children:[u.jsx("input",{type:"checkbox",className:"w-4 h-4 border-gray-300 rounded text-primary focus:ring-primary cursor-pointer"}),u.jsx("span",{className:"text-xs text-gray-600 group-hover:text-primary transition-colors",children:i})]},i))})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-xs font-bold text-gray-500 mb-1 uppercase",children:"Country *"}),u.jsxs("div",{className:"relative",children:[u.jsxs("select",{className:"w-full border border-gray-300 rounded px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none appearance-none bg-white text-gray-700",children:[u.jsx("option",{value:"",children:"Please Select"}),u.jsx("option",{value:"US",children:"United States"}),u.jsx("option",{value:"IN",children:"India"}),u.jsx("option",{value:"UK",children:"United Kingdom"}),u.jsx("option",{value:"CN",children:"China"}),u.jsx("option",{value:"JP",children:"Japan"})]}),u.jsx("div",{className:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500",children:u.jsx("svg",{className:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:u.jsx("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})})})]})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-xs font-bold text-gray-500 mb-1 uppercase",children:"Additional Comments or Details *"}),u.jsx("textarea",{rows:"4",className:"w-full border border-red-300/50 rounded px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder-gray-400 resize-none"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-xs font-bold text-gray-500 mb-1 uppercase",children:"How did you hear about us?"}),u.jsx("textarea",{rows:"2",className:"w-full border border-gray-300 rounded px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder-gray-400 resize-none"})]}),u.jsxs("div",{className:"text-[10px] text-gray-500 leading-normal space-y-2",children:[u.jsx("p",{children:"Aqlivia is committed to protecting and respecting your privacy, and we’ll only use your personal information to administer your account and to provide the products and services you requested from us. From time to time, we would like to contact you about our products and services, as well as other content that may be of interest to you."}),u.jsxs("p",{className:"flex items-start gap-2",children:[u.jsx("input",{type:"checkbox",className:"mt-0.5"}),u.jsx("span",{children:"I agree to receive other communications from Aqlivia."})]}),u.jsxs("p",{children:["You can unsubscribe from these communications at any time. For more information on how to unsubscribe, our privacy practices, and how we are committed to protecting and respecting your privacy, please review our ",u.jsx("a",{href:"#",className:"underline text-primary",children:"Privacy Policy"}),"."]}),u.jsx("p",{children:"By clicking submit below, you consent to allow Aqlivia to store and process the personal information submitted above to provide you the content requested."})]}),u.jsx("div",{className:"flex justify-center pt-4",children:u.jsx("button",{className:"bg-[#007CC3] hover:bg-[#005a8e] text-white font-bold uppercase text-sm px-12 py-3 rounded-full shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300",children:"Submit"})})]})]})]});function Ny(i){return Xe({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M20.995 6.9a.998.998 0 0 0-.548-.795l-8-4a1 1 0 0 0-.895 0l-8 4a1.002 1.002 0 0 0-.547.795c-.011.107-.961 10.767 8.589 15.014a.987.987 0 0 0 .812 0c9.55-4.247 8.6-14.906 8.589-15.014zM12 19.897V12H5.51a15.473 15.473 0 0 1-.544-4.365L12 4.118V12h6.46c-.759 2.74-2.498 5.979-6.46 7.897z"},child:[]}]})(i)}const uS=()=>{const{serviceName:i}=q0(),s=Qn(),l=j.useRef(null),[r,d]=j.useState(0),[m,p]=j.useState(null),[x,h]=j.useState(!0);if(j.useEffect(()=>{window.scrollTo(0,0);const b=i?.toLowerCase().trim();if(!b)return;let w=Vn.find(A=>A.id.toLowerCase()===b);if(!w){for(const A of Vn)if(A.subItems){const E=A.subItems.find(B=>B.name.toLowerCase()===b);if(E){w=E;break}}}console.log(w),w&&!w.htmlContent&&w.layout!=="fallback"&&p({name:w.title||w.name,image:w.heroImage||w.image||"https://images.unsplash.com/photo-1579154204601-01588f351e67?w=1200",htmlContent:w.htmlContent,overview:w.pageContent.description,heroSubtitle:w.pageContent.subtitle,carousel:w.pageContent.carousel,challenges:w.pageContent.challenges,delivery:w.pageContent.delivery,layout:w.pageContent.layout||"fallback"}),w.htmlContent&&p(w),w.layout==="fallback"&&p(w),h(!1)},[i]),x)return u.jsx("div",{className:"min-h-screen flex items-center justify-center",children:"Loading..."});if(!m)return u.jsx(Bd,{to:"/",replace:!0});const g=b=>{if(l.current){const{current:w}=l,A=350;b==="left"?w.scrollBy({left:-A,behavior:"smooth"}):w.scrollBy({left:A,behavior:"smooth"})}},y=()=>{const b=l.current;if(b){const{scrollLeft:w,scrollWidth:A,clientWidth:E}=b,B=w/(A-E)*100;d(isNaN(B)?0:B)}};return console.log(m),m?u.jsxs("div",{className:"w-full font-sans text-darkBlue bg-white",children:[u.jsxs("section",{className:"relative h-[60vh] md:h-[85vh] min-h-[600px] flex items-center bg-cover bg-center",style:{backgroundImage:`url('${m.image}')`},children:[u.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-[#140B42] via-[#140B42]/50 to-transparent z-10"}),u.jsx("div",{className:"absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#140B42] to-transparent z-10"}),u.jsx("div",{className:"relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 pt-0 md:pt-10 text-left",children:u.jsxs("div",{className:"max-w-3xl animate-fadeIn",children:[u.jsx("h1",{className:"text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight text-white drop-shadow-md",children:m.name}),m.heroSubtitle&&u.jsx("p",{className:"text-lg md:text-2xl font-light opacity-95 text-white tracking-wide border-l-4 border-primary pl-4",children:m.heroSubtitle})]})})]}),u.jsx("div",{className:"bg-[#00629B] text-white py-4 shadow-md relative z-20",children:u.jsxs("div",{className:"max-w-[1440px] mx-auto px-6 md:px-12 flex items-center text-xs md:text-sm font-bold uppercase tracking-wider",children:[u.jsxs(ge,{to:"/",className:"hover:text-gray-200 flex items-center gap-2 transition-colors",children:[u.jsx(F0,{size:14})," Home"]}),u.jsx("span",{className:"mx-2 opacity-50",children:"/"}),u.jsx(ge,{to:"/",state:{openMenu:"services"},className:"hover:text-gray-200 cursor-pointer border-b border-transparent hover:border-white/50 transition-all",children:"Services"}),u.jsx("span",{className:"mx-3 opacity-50",children:"/"}),u.jsx("span",{className:"text-white ",children:m.name})]})}),m.layout==="central-lab"&&u.jsxs("div",{className:"animate-fadeIn ",children:[u.jsx("section",{className:"py-16 px-6 md:px-12 max-w-[1440px] lg:mx-30 xl:mx-50",children:u.jsx("p",{className:"text-gray-600 text-[15px] leading-relaxed max-w-5xl",children:m.overview})}),m.carousel&&m.carousel.length>0&&u.jsxs("section",{className:"py-10 px-6 md:px-12 max-w-[1440px] mx-auto",children:[u.jsxs("div",{className:"flex justify-between items-end mb-8 border-b border-gray-200 pb-4",children:[u.jsx("h2",{className:"text-[#140B42] text-3xl font-bold",children:"Our services include"}),u.jsxs("div",{className:"flex gap-3",children:[u.jsx("button",{onClick:()=>g("left"),className:"w-10 h-10 rounded-full border border-[#0090d0] text-[#0090d0] hover:bg-[#0090d0] hover:text-white transition-colors flex items-center justify-center",children:u.jsx(Kn,{})}),u.jsx("button",{onClick:()=>g("right"),className:"w-10 h-10 rounded-full bg-[#0090d0] text-white hover:bg-[#007bb5] transition-colors flex items-center justify-center shadow-md",children:u.jsx(De,{})})]})]}),u.jsx("div",{ref:l,onScroll:y,className:"flex gap-8 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory",style:{scrollbarWidth:"none",msOverflowStyle:"none"},children:m.carousel.map((b,w)=>u.jsxs("div",{className:"min-w-[280px] md:min-w-[320px] lg:min-w-[380px] bg-white p-0 flex flex-col snap-start",children:[u.jsx("h3",{className:"text-[#140B42] font-bold text-xl mb-3",children:b.title}),u.jsx("p",{className:"text-gray-500 text-sm leading-relaxed mb-6 flex-1",children:u.jsx("span",{dangerouslySetInnerHTML:{__html:b.desc}})}),u.jsxs("button",{onClick:()=>s(`/services/${b.title}`),className:"text-[#0090d0] font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all group",children:["LEARN MORE"," ",u.jsx(De,{size:10,className:"group-hover:translate-x-1 transition-transform"})]})]},w))}),u.jsx("div",{className:"flex justify-center mt-4",children:u.jsx("div",{className:"w-32 md:w-148 h-1 bg-gray-100 rounded-full overflow-hidden",children:u.jsx("div",{className:"h-full bg-[#000000] transition-all duration-300 ease-out",style:{width:`${Math.max(15,r)}%`}})})})]}),m.challenges&&u.jsx("section",{className:"py-20 px-6 md:px-12 max-w-[1440px] lg:mx-30  xl:mx-50",children:u.jsxs("div",{className:"flex flex-col lg:flex-row gap-16 items-center",children:[u.jsxs("div",{className:"w-full self-start lg:w-1/2 relative",children:[u.jsx("div",{className:"overflow-hidden rounded-[3rem] shadow-xl relative z-10",children:u.jsx("img",{src:m.challenges.image,alt:"Lab Challenges",className:"w-full h-auto object-cover"})}),u.jsx("div",{className:"absolute top-10 -left-10 w-full h-full bg-blue-50 rounded-[4rem] -z-0 transform -rotate-3"})]}),u.jsxs("div",{className:"w-full lg:w-1/2",children:[u.jsx("h2",{className:"text-[#140B42] text-3xl font-bold mb-6",children:m.challenges.title}),u.jsx("p",{className:"text-gray-600 mb-8 leading-relaxed",children:m.challenges.desc}),u.jsx("ul",{className:"space-y-4",children:m.challenges.points&&m.challenges.points.map((b,w)=>u.jsxs("li",{className:"flex items-start gap-3",children:[u.jsx("span",{className:"mt-2 w-1.5 h-1.5 bg-[#140B42] rounded-full flex-shrink-0"}),u.jsx("span",{className:"text-gray-700 text-sm leading-relaxed",children:b})]},w))})]})]})}),m.delivery&&u.jsx("section",{className:"py-10 px-6 md:px-12 lg:mx-30 xl:mx-40",children:u.jsxs("div",{className:"max-w-[1440px] mx-auto",children:[u.jsx("h2",{className:"text-[#140B42] text-3xl font-bold mb-6",children:m.delivery.title}),u.jsx("p",{className:"text-gray-600 mb-10 max-w-4xl leading-relaxed",children:m.delivery.desc}),u.jsx("h3",{className:"text-[#140B42] font-bold text-lg mb-4",children:m.delivery.locationsTitle}),u.jsx("div",{className:"flex flex-col flex-wrap gap-x-12 gap-y-3",children:m.delivery.locations&&m.delivery.locations.map((b,w)=>u.jsxs("div",{className:"flex items-center gap-2 text-gray-700 text-sm",children:[u.jsx("span",{className:"w-1.5 h-1.5 bg-gray-400 rounded-full"}),b]},w))})]})})]}),m.layout==="fallback"&&u.jsxs(u.Fragment,{children:[u.jsx("section",{className:"py-20 px-6 md:px-12 max-w-[1440px] mx-auto",children:u.jsxs("div",{className:"flex flex-col md:flex-row gap-16",children:[u.jsxs("div",{className:"flex-1",children:[u.jsxs("h2",{className:"text-3xl font-bold text-[#140B42] mb-8 relative inline-block",children:["Overview",u.jsx("span",{className:"absolute bottom-0 left-0 w-38 h-1 bg-primary rounded-full"})]}),u.jsx("p",{className:"text-lg text-gray-600 leading-8 font-normal text-justify",children:m.overview})]}),u.jsx("div",{className:"w-full md:w-1/3",children:u.jsxs("div",{className:"bg-[#F8FAFC] p-8 rounded-2xl border border-gray-100 shadow-sm sticky top-24",children:[u.jsx("h4",{className:"text-xl font-bold text-[#140B42] mb-4",children:"Need Assistance?"}),u.jsx("p",{className:"text-gray-500 text-sm mb-6",children:"Our experts are ready to help you navigate your clinical development needs."}),u.jsx(ge,{to:"/contact",className:"block w-full text-center bg-[#0090d0] hover:bg-[#007bb5] text-white font-bold py-3 rounded-full transition-all uppercase text-sm",children:"Talk to an Expert"})]})})]})}),m.points&&m.points.length>0&&u.jsx("section",{className:"bg-gray-50 py-20 border-t border-gray-200",children:u.jsxs("div",{className:"max-w-[1440px] mx-auto px-6 md:px-12",children:[u.jsxs("h3",{className:"text-2xl font-bold text-darkBlue mb-12 flex items-center gap-3",children:[u.jsx("span",{className:"w-2 h-8 bg-primary block rounded-sm"}),"Key Capabilities & Solutions"]}),m.layout==="list-view"?u.jsx("div",{className:"flex flex-col space-y-4",children:m.points.map((b,w)=>u.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-sm border-l-4 border-primary hover:shadow-md transition-all flex flex-col md:flex-row gap-6 items-start",children:[u.jsx("div",{className:"hidden md:flex flex-shrink-0 w-12 h-12 bg-blue-50 text-[#0090d0] rounded-full items-center justify-center",children:u.jsx(sw,{size:20})}),u.jsxs("div",{className:"w-full",children:[u.jsx("h4",{className:"text-lg font-bold text-[#140B42] mb-2",children:b.title}),u.jsx("div",{className:"text-gray-600 text-sm leading-relaxed [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:mt-2"}),u.jsx("p",{children:b.desc})]})]},w))}):u.jsx("div",{className:"grid grid-cols-1 gap-8",children:m.points.map((b,w)=>u.jsxs("div",{"data-aos":"fade-right",className:"bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-l-6 hover:border-[#0090d0] transition-all duration-300 group",children:[u.jsx("div",{className:"w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#0090d0] transition-colors duration-300",children:u.jsx(Ny,{className:"text-[#0090d0] text-lg group-hover:text-white transition-colors"})}),u.jsx("h4",{className:"text-lg font-bold text-[#140B42] mb-3",children:b.title}),u.jsx("div",{className:"text-gray-500 text-sm leading-relaxed",dangerouslySetInnerHTML:{__html:b.desc}})]},w))})]})})]}),m.htmlContent&&u.jsx("section",{className:"py-16 px-6 md:px-12 max-w-[1440px] mx-auto",children:u.jsx("div",{className:"service-content-wrapper prose prose-slate max-w-none",dangerouslySetInnerHTML:{__html:m.htmlContent}})})]}):u.jsx(Bd,{to:"/",replace:!0})},C0=[{id:"About",name:"About",heroSubtitle:"Turning hope into help.",image:"https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80",htmlContent:`
      <div class="space-y-12 text-gray-600 leading-relaxed text-justify">
        
       
        <div>
          <p class="text-lg">
            At <span class="font-bold text-[#140B42]">Aqlivia Laboratories</span>, our work is rooted in research, grounded in collaboration, and guided by our passion to turn the hope of patients and caregivers around the world into the help they need. Our commitment to customer success is embedded in every facet of our operations. We understand that our clients' success is paramount, and we strive to exceed their expectations by consistently delivering results with exceptional quality. Whether it's innovative laboratory testing for clinical trials, biomarker development and testing, or drug discovery support, we bring rigor and precision to every project, ensuring accuracy and reliability that our clients can trust.
          </p>
        </div>

        
        <div class="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 class="text-2xl font-bold text-[#140B42] mb-4 relative inline-block">
              Excellence & Innovation
              <span class="absolute bottom-0 left-0 w-1/3 h-1 bg-[#009CDE] rounded-full"></span>
            </h3>
            <p>
              What sets us apart is our deep-rooted excellence across the full spectrum of therapeutic and specialty areas, coupled with cutting-edge science and technology. This triad of strengths empowers us to provide unparalleled insights and solutions tailored to the unique challenges of each project.
            </p>
            <p class="mt-4">
              We believe that by staying at the forefront of scientific innovation and leveraging advanced technologies, we contribute meaningfully to the progression of healthcare on a global scale.
            </p>
          </div>
          <div class="relative group">
            <div class="absolute -inset-2 bg-blue-100 rounded-xl transform rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
            <img 
              src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80" 
              alt="Scientific Innovation" 
              class="relative rounded-xl shadow-lg w-full h-64 object-cover transform transition-transform duration-500 group-hover:-translate-y-1"
            />
          </div>
        </div>

       
        <div class="grid md:grid-cols-2 gap-10 items-center">
           <div class="relative group order-2 md:order-1">
            <div class="absolute -inset-2 bg-blue-50 rounded-xl transform -rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" 
              alt="Our Team" 
              class="relative rounded-xl shadow-lg w-full h-64 object-cover transform transition-transform duration-500 group-hover:-translate-y-1"
            />
          </div>
          <div class="order-1 md:order-2">
            <h3 class="text-2xl font-bold text-[#140B42] mb-4 relative inline-block">
              Empowering Our People
              <span class="absolute bottom-0 left-0 w-1/3 h-1 bg-[#009CDE] rounded-full"></span>
            </h3>
            <p>
              As an industry employer of choice, we take pride in fostering a dynamic and inclusive work environment where talent thrives. We recognize that our success hinges on the expertise, dedication, and passion of our people. 
            </p>
            <p class="mt-4">
              By attracting and retaining top talent, we ensure that our team is equipped to tackle the complexities of the evolving healthcare landscape. At Aqlivia Laboratories, we build more than careers; we build the future of health.
            </p>
          </div>
        </div>

      </div>
    `},{id:"Our approach",name:"Our Approach",heroSubtitle:"Innovation meets execution.",image:"https://images.unsplash.com/photo-1581093458791-9f302e686c87?w=1200&q=80",htmlContent:`
      <div class="space-y-16 text-gray-600 leading-relaxed text-justify">
        
       
        <div>
          <p class="text-lg">
            In today’s rapidly evolving scientific landscape, central laboratories stand as a key contributor of research and diagnostics. To navigate the ever-changing terrain of scientific innovation, central laboratories require a well-defined strategic vision. By aligning with market needs, investing in technology and talent, ensuring quality and compliance, and fostering innovation, <span class="font-bold text-[#140B42]">Aqlivia Laboratories</span> can not only survive but thrive in an ever-changing scientific landscape.
          </p>
          <p class="mt-4">
            Informed by our vision to enable smarter treatments through smarter data and our mission to improve patient lives by treating each sample as if a life depends on it, the four strategic pillars of the Aqlivia Laboratories strategy aim to address macroeconomic and industry trends.
          </p>
        </div>

      
        <div class="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 class="text-2xl font-bold text-[#140B42] mb-4 relative inline-block">
              Commit to Customer Success
              <span class="absolute bottom-0 left-0 w-1/3 h-1 bg-[#009CDE] rounded-full"></span>
            </h3>
            <p>
              Our success as a company hinges upon our service excellence program, designed to assure continuous improvement of service delivery. It starts internally with employee engagement and optimization, aiming to deliver projects on time and on budget with high satisfaction.
            </p>
            <p class="mt-3">
              We invest deeply in customer relationships, including fit-for-purpose governance and partnerships. Our models include operating principles and senior-level oversight to assure quality, generate cost savings, improve processes, and enable innovation.
            </p>
          </div>
          <div class="relative group">
            <div class="absolute -inset-2 bg-blue-100 rounded-xl transform rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80" 
              alt="Customer Success" 
              class="relative rounded-xl shadow-lg w-full h-72 object-cover transform transition-transform duration-500 group-hover:-translate-y-1"
            />
          </div>
        </div>


        <div class="grid md:grid-cols-2 gap-10 items-center">
          <div class="relative group order-2 md:order-1">
            <div class="absolute -inset-2 bg-blue-50 rounded-xl transform -rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
            <img 
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80" 
              alt="Quality Management" 
              class="relative rounded-xl shadow-lg w-full h-72 object-cover transform transition-transform duration-500 group-hover:-translate-y-1"
            />
          </div>
          <div class="order-1 md:order-2">
            <h3 class="text-2xl font-bold text-[#140B42] mb-4 relative inline-block">
              Deliver with Exceptional Quality
              <span class="absolute bottom-0 left-0 w-1/3 h-1 bg-[#009CDE] rounded-full"></span>
            </h3>
            <p>
              According to ISO Quality Management Principles, “The primary focus of quality management is to meet customer requirements and to strive to exceed customer expectations.” This focus has shaped our overarching quality management system (QMS).
            </p>
            <p class="mt-3">
              Our QMS establishes metrics and continuous improvement programs with a laser focus on simplifying workflows. We also prioritize sustainability, maintaining <strong>My Green Lab</strong> standards to build a global culture of sustainability in science.
            </p>
          </div>
        </div>

    
        <div class="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 class="text-2xl font-bold text-[#140B42] mb-4 relative inline-block">
              Differentiate with Science & Tech
              <span class="absolute bottom-0 left-0 w-1/3 h-1 bg-[#009CDE] rounded-full"></span>
            </h3>
            <p>
              We aim to be at the forefront of genomics, flow cytometry, immunoassay, and anatomic pathology. We deploy scientific advisors to consult on protocol design and assay development, ensuring our laboratories meet customer needs over time.
            </p>
            <p class="mt-3">
              By championing patient-centric approaches—like self-collection of biological samples—and driving efficiency through digital innovation, we continuously expand our capabilities through both organic growth and strategic acquisitions in vaccine testing, immunogenicity, and drug discovery.
            </p>
          </div>
          <div class="relative group">
            <div class="absolute -inset-2 bg-purple-50 rounded-xl transform rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
            <img 
              src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80" 
              alt="Scientific Expertise" 
              class="relative rounded-xl shadow-lg w-full h-72 object-cover transform transition-transform duration-500 group-hover:-translate-y-1"
            />
          </div>
        </div>


        <div class="grid md:grid-cols-2 gap-10 items-center">
          <div class="relative group order-2 md:order-1">
            <div class="absolute -inset-2 bg-teal-50 rounded-xl transform -rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
            <img 
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80" 
              alt="Employer of Choice" 
              class="relative rounded-xl shadow-lg w-full h-72 object-cover transform transition-transform duration-500 group-hover:-translate-y-1"
            />
          </div>
          <div class="order-1 md:order-2">
            <h3 class="text-2xl font-bold text-[#140B42] mb-4 relative inline-block">
              Be the Employer of Choice
              <span class="absolute bottom-0 left-0 w-1/3 h-1 bg-[#009CDE] rounded-full"></span>
            </h3>
            <p>
              Employee satisfaction drives retention and productivity, which in turn drives customer loyalty. Our Employee Value Proposition is built on four principles:
            </p>
            <ul class="mt-4 space-y-2 list-none">
              <li class="flex gap-2"><span class="text-[#009CDE] font-bold">1. Passion:</span> We make an impact advancing patient health.</li>
              <li class="flex gap-2"><span class="text-[#009CDE] font-bold">2. Innovation:</span> We are curious, creative, and bring new ideas to life.</li>
              <li class="flex gap-2"><span class="text-[#009CDE] font-bold">3. Collaboration:</span> Our inclusive environment enables greater impact.</li>
              <li class="flex gap-2"><span class="text-[#009CDE] font-bold">4. Growth:</span> Flexible careers and supportive leaders help us grow.</li>
            </ul>
          </div>
        </div>

      
        <div class="bg-[#F8FAFC] border-l-4 border-[#009CDE] p-8 rounded-r-xl mt-12 shadow-sm">
          <h4 class="text-2xl font-bold text-[#140B42] mb-2">The right people. The right solutions.</h4>
          <p class="text-gray-600 italic">
            "Though the size, cost, and complexity of trials may vary, our commitment to our partners does not. Our experienced team blends seamlessly into your organization, providing the solutions and support needed to realize the full value of your project."
          </p>
        </div>

      </div>
    `}],mS=()=>{const{id:i}=q0(),s=Qn(),l=j.useRef(null),[r,d]=j.useState(0),[m,p]=j.useState(null),[x,h]=j.useState(!0);j.useEffect(()=>{window.scrollTo(0,0);const b=i?.toLowerCase().trim().replace(/-/g," ");if(!b)return;let w=C0.find(A=>A.id.toLowerCase()===b);if(!w){for(const A of C0)if(A.subItems){const E=A.subItems.find(B=>B.name.toLowerCase()===b);if(E){w=E;break}}}w&&p({name:w.name||w.title,image:w.image||w.heroImage||"https://images.unsplash.com/photo-1579154204601-01588f351e67?w=1200",htmlContent:w.htmlContent,overview:w.pageContent?.intro||w.pageContent?.description||w.overview,heroSubtitle:w.heroSubtitle||w.pageContent?.subtitle,carousel:w.pageContent?.carousel||[],challenges:w.pageContent?.challenges||{},delivery:w.pageContent?.delivery||{},layout:w.layout||"fallback",points:w.pageContent?.features?w.pageContent.features.map(A=>{if(typeof A=="string"){const E=A.includes(":")?A.split(":"):[A,""];return{title:E[0].trim(),desc:E[1]?E[1].trim():""}}return A}):w.points||[]}),h(!1)},[i]);const g=b=>{if(l.current){const{current:w}=l,A=350;b==="left"?w.scrollBy({left:-A,behavior:"smooth"}):w.scrollBy({left:A,behavior:"smooth"})}},y=()=>{const b=l.current;if(b){const{scrollLeft:w,scrollWidth:A,clientWidth:E}=b,B=w/(A-E)*100;d(isNaN(B)?0:B)}};return x?u.jsx("div",{className:"min-h-screen flex items-center justify-center",children:"Loading..."}):m?u.jsxs("div",{className:"w-full font-sans text-darkBlue bg-white",children:[u.jsxs("section",{className:"relative h-[60vh] md:h-[85vh] min-h-[600px] flex items-center bg-cover bg-center",style:{backgroundImage:`url('${m.image}')`},children:[u.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-[#140B42] via-[#140B42]/50 to-transparent z-10"}),u.jsx("div",{className:"absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#140B42] to-transparent z-10"}),u.jsx("div",{className:"relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 pt-0 md:pt-10 text-left",children:u.jsxs("div",{className:"max-w-3xl animate-fadeIn",children:[u.jsx("h1",{className:"text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight text-white drop-shadow-md",children:m.name}),m.heroSubtitle&&u.jsx("p",{className:"text-lg md:text-2xl font-light opacity-95 text-white tracking-wide border-l-4 border-primary pl-4",children:m.heroSubtitle})]})})]}),u.jsx("div",{className:"bg-[#00629B] text-white py-4 shadow-md relative z-20",children:u.jsxs("div",{className:"max-w-[1440px] mx-auto px-6 md:px-12 flex items-center text-xs md:text-sm font-bold uppercase tracking-wider",children:[u.jsxs(ge,{to:"/",className:"hover:text-gray-200 flex items-center gap-2 transition-colors",children:[u.jsx(F0,{size:14})," Home"]}),u.jsx("span",{className:"mx-2 opacity-50",children:"/"}),u.jsx("span",{className:"text-white cursor-default",children:"About Us"}),u.jsx("span",{className:"mx-3 opacity-50",children:"/"}),u.jsx("span",{className:"text-white ",children:m.name})]})}),m.layout==="central-lab"&&u.jsxs("div",{className:"animate-fadeIn",children:[u.jsx("section",{className:"py-16 px-6 md:px-12 max-w-[1440px] lg:mx-30 xl:mx-50",children:u.jsx("p",{className:"text-gray-600 text-[15px] leading-relaxed max-w-5xl",children:m.overview})}),m.carousel&&m.carousel.length>0&&u.jsxs("section",{className:"py-10 px-6 md:px-12 max-w-[1440px] mx-auto",children:[u.jsxs("div",{className:"flex justify-between items-end mb-8 border-b border-gray-200 pb-4",children:[u.jsx("h2",{className:"text-[#140B42] text-3xl font-bold",children:"Our services include"}),u.jsxs("div",{className:"flex gap-3",children:[u.jsx("button",{onClick:()=>g("left"),className:"w-10 h-10 rounded-full border border-[#0090d0] text-[#0090d0] hover:bg-[#0090d0] hover:text-white transition-colors flex items-center justify-center",children:u.jsx(Kn,{})}),u.jsx("button",{onClick:()=>g("right"),className:"w-10 h-10 rounded-full bg-[#0090d0] text-white hover:bg-[#007bb5] transition-colors flex items-center justify-center shadow-md",children:u.jsx(De,{})})]})]}),u.jsx("div",{ref:l,onScroll:y,className:"flex gap-8 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory",style:{scrollbarWidth:"none",msOverflowStyle:"none"},children:m.carousel.map((b,w)=>u.jsxs("div",{className:"min-w-[280px] md:min-w-[320px] lg:min-w-[380px] bg-white p-0 flex flex-col snap-start",children:[u.jsx("h3",{className:"text-[#140B42] font-bold text-xl mb-3",children:b.title}),u.jsx("p",{className:"text-gray-500 text-sm leading-relaxed mb-6 flex-1",children:u.jsx("span",{dangerouslySetInnerHTML:{__html:b.desc}})}),u.jsxs("button",{onClick:()=>s(`/about/${b.title.toLowerCase().replace(/ /g,"-")}`),className:"text-[#0090d0] font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all group",children:["LEARN MORE"," ",u.jsx(De,{size:10,className:"group-hover:translate-x-1 transition-transform"})]})]},w))}),u.jsx("div",{className:"flex justify-center mt-4",children:u.jsx("div",{className:"w-32 md:w-148 h-1 bg-gray-100 rounded-full overflow-hidden",children:u.jsx("div",{className:"h-full bg-[#000000] transition-all duration-300 ease-out",style:{width:`${Math.max(15,r)}%`}})})})]}),m.challenges&&m.challenges.title&&u.jsx("section",{className:"py-20 px-6 md:px-12 max-w-[1440px] lg:mx-30 xl:mx-50",children:u.jsxs("div",{className:"flex flex-col lg:flex-row gap-16 items-center",children:[u.jsxs("div",{className:"w-full self-start lg:w-1/2 relative",children:[u.jsx("div",{className:"overflow-hidden rounded-[3rem] shadow-xl relative z-10",children:u.jsx("img",{src:m.challenges.image,alt:"Challenges",className:"w-full h-auto object-cover"})}),u.jsx("div",{className:"absolute top-10 -left-10 w-full h-full bg-blue-50 rounded-[4rem] -z-0 transform -rotate-3"})]}),u.jsxs("div",{className:"w-full lg:w-1/2",children:[u.jsx("h2",{className:"text-[#140B42] text-3xl font-bold mb-6",children:m.challenges.title}),u.jsx("p",{className:"text-gray-600 mb-8 leading-relaxed",children:m.challenges.desc}),u.jsx("ul",{className:"space-y-4",children:m.challenges.points&&m.challenges.points.map((b,w)=>u.jsxs("li",{className:"flex items-start gap-3",children:[u.jsx("span",{className:"mt-2 w-1.5 h-1.5 bg-[#140B42] rounded-full flex-shrink-0"}),u.jsx("span",{className:"text-gray-700 text-sm leading-relaxed",children:b})]},w))})]})]})}),m.delivery&&m.delivery.title&&u.jsx("section",{className:"py-10 px-6 md:px-12 lg:mx-30 xl:mx-40",children:u.jsxs("div",{className:"max-w-[1440px] mx-auto",children:[u.jsx("h2",{className:"text-[#140B42] text-3xl font-bold mb-6",children:m.delivery.title}),u.jsx("p",{className:"text-gray-600 mb-10 max-w-4xl leading-relaxed",children:m.delivery.desc}),u.jsx("h3",{className:"text-[#140B42] font-bold text-lg mb-4",children:m.delivery.locationsTitle}),u.jsx("div",{className:"flex flex-col flex-wrap gap-x-12 gap-y-3",children:m.delivery.locations&&m.delivery.locations.map((b,w)=>u.jsxs("div",{className:"flex items-center gap-2 text-gray-700 text-sm",children:[u.jsx("span",{className:"w-1.5 h-1.5 bg-gray-400 rounded-full"}),b]},w))})]})})]}),m.layout==="fallback"&&!m.htmlContent&&u.jsxs(u.Fragment,{children:[u.jsx("section",{className:"py-20 px-6 md:px-12 max-w-[1440px] mx-auto",children:u.jsxs("div",{className:"flex flex-col md:flex-row gap-16",children:[u.jsxs("div",{className:"flex-1",children:[u.jsxs("h2",{className:"text-3xl font-bold text-[#140B42] mb-8 relative inline-block",children:["Overview",u.jsx("span",{className:"absolute bottom-0 left-0 w-38 h-1 bg-primary rounded-full"})]}),u.jsx("p",{className:"text-lg text-gray-600 leading-8 font-normal text-justify",children:m.overview})]}),u.jsx("div",{className:"w-full md:w-1/3",children:u.jsxs("div",{className:"bg-[#F8FAFC] p-8 rounded-2xl border border-gray-100 shadow-sm sticky top-24",children:[u.jsx("h4",{className:"text-xl font-bold text-[#140B42] mb-4",children:"Partner with Us"}),u.jsx("p",{className:"text-gray-500 text-sm mb-6",children:"Our experts are ready to help you navigate your clinical development needs."}),u.jsx(ge,{to:"/contact",className:"block w-full text-center bg-[#0090d0] hover:bg-[#007bb5] text-white font-bold py-3 rounded-full transition-all uppercase text-sm",children:"Contact Us"})]})})]})}),m.points&&m.points.length>0&&u.jsx("section",{className:"bg-gray-50 py-20 border-t border-gray-200",children:u.jsxs("div",{className:"max-w-[1440px] mx-auto px-6 md:px-12",children:[u.jsxs("h3",{className:"text-2xl font-bold text-darkBlue mb-12 flex items-center gap-3",children:[u.jsx("span",{className:"w-2 h-8 bg-primary block rounded-sm"}),"Key Features & Values"]}),u.jsx("div",{className:"grid grid-cols-1 gap-8",children:m.points.map((b,w)=>u.jsxs("div",{"data-aos":"fade-right",className:"bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-l-6 hover:border-[#0090d0] transition-all duration-300 group",children:[u.jsx("div",{className:"w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#0090d0] transition-colors duration-300",children:u.jsx(Ny,{className:"text-[#0090d0] text-lg group-hover:text-white transition-colors"})}),u.jsx("h4",{className:"text-lg font-bold text-[#140B42] mb-3",children:b.title}),u.jsx("div",{className:"text-gray-500 text-sm leading-relaxed",dangerouslySetInnerHTML:{__html:b.desc}})]},w))})]})})]}),m.htmlContent&&u.jsx("section",{className:"py-16 px-6 md:px-12 max-w-[1440px] mx-auto",children:u.jsx("div",{className:"service-content-wrapper prose prose-slate max-w-none",dangerouslySetInnerHTML:{__html:m.htmlContent}})})]}):u.jsx(Bd,{to:"/",replace:!0})};var Er={exports:{}},pS=Er.exports,T0;function fS(){return T0||(T0=1,(function(i,s){(function(l,r){i.exports=r()})(pS,function(){return(function(l){function r(m){if(d[m])return d[m].exports;var p=d[m]={exports:{},id:m,loaded:!1};return l[m].call(p.exports,p,p.exports,r),p.loaded=!0,p.exports}var d={};return r.m=l,r.c=d,r.p="dist/",r(0)})([function(l,r,d){function m(ie){return ie&&ie.__esModule?ie:{default:ie}}var p=Object.assign||function(ie){for(var Ee=1;Ee<arguments.length;Ee++){var V=arguments[Ee];for(var G in V)Object.prototype.hasOwnProperty.call(V,G)&&(ie[G]=V[G])}return ie},x=d(1),h=(m(x),d(6)),g=m(h),y=d(7),b=m(y),w=d(8),A=m(w),E=d(9),B=m(E),q=d(10),z=m(q),M=d(11),O=m(M),X=d(14),P=m(X),Y=[],W=!1,Q={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},ce=function(){var ie=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(ie&&(W=!0),W)return Y=(0,O.default)(Y,Q),(0,z.default)(Y,Q.once),Y},Te=function(){Y=(0,P.default)(),ce()},ee=function(){Y.forEach(function(ie,Ee){ie.node.removeAttribute("data-aos"),ie.node.removeAttribute("data-aos-easing"),ie.node.removeAttribute("data-aos-duration"),ie.node.removeAttribute("data-aos-delay")})},K=function(ie){return ie===!0||ie==="mobile"&&B.default.mobile()||ie==="phone"&&B.default.phone()||ie==="tablet"&&B.default.tablet()||typeof ie=="function"&&ie()===!0},fe=function(ie){Q=p(Q,ie),Y=(0,P.default)();var Ee=document.all&&!window.atob;return K(Q.disable)||Ee?ee():(Q.disableMutationObserver||A.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),Q.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",Q.easing),document.querySelector("body").setAttribute("data-aos-duration",Q.duration),document.querySelector("body").setAttribute("data-aos-delay",Q.delay),Q.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?ce(!0):Q.startEvent==="load"?window.addEventListener(Q.startEvent,function(){ce(!0)}):document.addEventListener(Q.startEvent,function(){ce(!0)}),window.addEventListener("resize",(0,b.default)(ce,Q.debounceDelay,!0)),window.addEventListener("orientationchange",(0,b.default)(ce,Q.debounceDelay,!0)),window.addEventListener("scroll",(0,g.default)(function(){(0,z.default)(Y,Q.once)},Q.throttleDelay)),Q.disableMutationObserver||A.default.ready("[data-aos]",Te),Y)};l.exports={init:fe,refresh:ce,refreshHard:Te}},function(l,r){},,,,,function(l,r){(function(d){function m(K,fe,ie){function Ee(be){var it=Z,Ht=ne;return Z=ne=void 0,gt=be,oe=K.apply(Ht,it)}function V(be){return gt=be,Se=setTimeout(de,fe),Tt?Ee(be):oe}function G(be){var it=be-Ae,Ht=be-gt,$n=fe-it;return jt?Te($n,re-Ht):$n}function J(be){var it=be-Ae,Ht=be-gt;return Ae===void 0||it>=fe||it<0||jt&&Ht>=re}function de(){var be=ee();return J(be)?he(be):void(Se=setTimeout(de,G(be)))}function he(be){return Se=void 0,qe&&Z?Ee(be):(Z=ne=void 0,oe)}function T(){Se!==void 0&&clearTimeout(Se),gt=0,Z=Ae=ne=Se=void 0}function U(){return Se===void 0?oe:he(ee())}function F(){var be=ee(),it=J(be);if(Z=arguments,ne=this,Ae=be,it){if(Se===void 0)return V(Ae);if(jt)return Se=setTimeout(de,fe),Ee(Ae)}return Se===void 0&&(Se=setTimeout(de,fe)),oe}var Z,ne,re,oe,Se,Ae,gt=0,Tt=!1,jt=!1,qe=!0;if(typeof K!="function")throw new TypeError(w);return fe=y(fe)||0,x(ie)&&(Tt=!!ie.leading,jt="maxWait"in ie,re=jt?ce(y(ie.maxWait)||0,fe):re,qe="trailing"in ie?!!ie.trailing:qe),F.cancel=T,F.flush=U,F}function p(K,fe,ie){var Ee=!0,V=!0;if(typeof K!="function")throw new TypeError(w);return x(ie)&&(Ee="leading"in ie?!!ie.leading:Ee,V="trailing"in ie?!!ie.trailing:V),m(K,fe,{leading:Ee,maxWait:fe,trailing:V})}function x(K){var fe=typeof K>"u"?"undefined":b(K);return!!K&&(fe=="object"||fe=="function")}function h(K){return!!K&&(typeof K>"u"?"undefined":b(K))=="object"}function g(K){return(typeof K>"u"?"undefined":b(K))=="symbol"||h(K)&&Q.call(K)==E}function y(K){if(typeof K=="number")return K;if(g(K))return A;if(x(K)){var fe=typeof K.valueOf=="function"?K.valueOf():K;K=x(fe)?fe+"":fe}if(typeof K!="string")return K===0?K:+K;K=K.replace(B,"");var ie=z.test(K);return ie||M.test(K)?O(K.slice(2),ie?2:8):q.test(K)?A:+K}var b=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(K){return typeof K}:function(K){return K&&typeof Symbol=="function"&&K.constructor===Symbol&&K!==Symbol.prototype?"symbol":typeof K},w="Expected a function",A=NaN,E="[object Symbol]",B=/^\s+|\s+$/g,q=/^[-+]0x[0-9a-f]+$/i,z=/^0b[01]+$/i,M=/^0o[0-7]+$/i,O=parseInt,X=(typeof d>"u"?"undefined":b(d))=="object"&&d&&d.Object===Object&&d,P=(typeof self>"u"?"undefined":b(self))=="object"&&self&&self.Object===Object&&self,Y=X||P||Function("return this")(),W=Object.prototype,Q=W.toString,ce=Math.max,Te=Math.min,ee=function(){return Y.Date.now()};l.exports=p}).call(r,(function(){return this})())},function(l,r){(function(d){function m(ee,K,fe){function ie(qe){var be=F,it=Z;return F=Z=void 0,Ae=qe,re=ee.apply(it,be)}function Ee(qe){return Ae=qe,oe=setTimeout(J,K),gt?ie(qe):re}function V(qe){var be=qe-Se,it=qe-Ae,Ht=K-be;return Tt?ce(Ht,ne-it):Ht}function G(qe){var be=qe-Se,it=qe-Ae;return Se===void 0||be>=K||be<0||Tt&&it>=ne}function J(){var qe=Te();return G(qe)?de(qe):void(oe=setTimeout(J,V(qe)))}function de(qe){return oe=void 0,jt&&F?ie(qe):(F=Z=void 0,re)}function he(){oe!==void 0&&clearTimeout(oe),Ae=0,F=Se=Z=oe=void 0}function T(){return oe===void 0?re:de(Te())}function U(){var qe=Te(),be=G(qe);if(F=arguments,Z=this,Se=qe,be){if(oe===void 0)return Ee(Se);if(Tt)return oe=setTimeout(J,K),ie(Se)}return oe===void 0&&(oe=setTimeout(J,K)),re}var F,Z,ne,re,oe,Se,Ae=0,gt=!1,Tt=!1,jt=!0;if(typeof ee!="function")throw new TypeError(b);return K=g(K)||0,p(fe)&&(gt=!!fe.leading,Tt="maxWait"in fe,ne=Tt?Q(g(fe.maxWait)||0,K):ne,jt="trailing"in fe?!!fe.trailing:jt),U.cancel=he,U.flush=T,U}function p(ee){var K=typeof ee>"u"?"undefined":y(ee);return!!ee&&(K=="object"||K=="function")}function x(ee){return!!ee&&(typeof ee>"u"?"undefined":y(ee))=="object"}function h(ee){return(typeof ee>"u"?"undefined":y(ee))=="symbol"||x(ee)&&W.call(ee)==A}function g(ee){if(typeof ee=="number")return ee;if(h(ee))return w;if(p(ee)){var K=typeof ee.valueOf=="function"?ee.valueOf():ee;ee=p(K)?K+"":K}if(typeof ee!="string")return ee===0?ee:+ee;ee=ee.replace(E,"");var fe=q.test(ee);return fe||z.test(ee)?M(ee.slice(2),fe?2:8):B.test(ee)?w:+ee}var y=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(ee){return typeof ee}:function(ee){return ee&&typeof Symbol=="function"&&ee.constructor===Symbol&&ee!==Symbol.prototype?"symbol":typeof ee},b="Expected a function",w=NaN,A="[object Symbol]",E=/^\s+|\s+$/g,B=/^[-+]0x[0-9a-f]+$/i,q=/^0b[01]+$/i,z=/^0o[0-7]+$/i,M=parseInt,O=(typeof d>"u"?"undefined":y(d))=="object"&&d&&d.Object===Object&&d,X=(typeof self>"u"?"undefined":y(self))=="object"&&self&&self.Object===Object&&self,P=O||X||Function("return this")(),Y=Object.prototype,W=Y.toString,Q=Math.max,ce=Math.min,Te=function(){return P.Date.now()};l.exports=m}).call(r,(function(){return this})())},function(l,r){function d(y){var b=void 0,w=void 0;for(b=0;b<y.length;b+=1)if(w=y[b],w.dataset&&w.dataset.aos||w.children&&d(w.children))return!0;return!1}function m(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function p(){return!!m()}function x(y,b){var w=window.document,A=m(),E=new A(h);g=b,E.observe(w.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function h(y){y&&y.forEach(function(b){var w=Array.prototype.slice.call(b.addedNodes),A=Array.prototype.slice.call(b.removedNodes),E=w.concat(A);if(d(E))return g()})}Object.defineProperty(r,"__esModule",{value:!0});var g=function(){};r.default={isSupported:p,ready:x}},function(l,r){function d(w,A){if(!(w instanceof A))throw new TypeError("Cannot call a class as a function")}function m(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(r,"__esModule",{value:!0});var p=(function(){function w(A,E){for(var B=0;B<E.length;B++){var q=E[B];q.enumerable=q.enumerable||!1,q.configurable=!0,"value"in q&&(q.writable=!0),Object.defineProperty(A,q.key,q)}}return function(A,E,B){return E&&w(A.prototype,E),B&&w(A,B),A}})(),x=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,h=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,g=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,y=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,b=(function(){function w(){d(this,w)}return p(w,[{key:"phone",value:function(){var A=m();return!(!x.test(A)&&!h.test(A.substr(0,4)))}},{key:"mobile",value:function(){var A=m();return!(!g.test(A)&&!y.test(A.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),w})();r.default=new b},function(l,r){Object.defineProperty(r,"__esModule",{value:!0});var d=function(p,x,h){var g=p.node.getAttribute("data-aos-once");x>p.position?p.node.classList.add("aos-animate"):typeof g<"u"&&(g==="false"||!h&&g!=="true")&&p.node.classList.remove("aos-animate")},m=function(p,x){var h=window.pageYOffset,g=window.innerHeight;p.forEach(function(y,b){d(y,g+h,x)})};r.default=m},function(l,r,d){function m(g){return g&&g.__esModule?g:{default:g}}Object.defineProperty(r,"__esModule",{value:!0});var p=d(12),x=m(p),h=function(g,y){return g.forEach(function(b,w){b.node.classList.add("aos-init"),b.position=(0,x.default)(b.node,y.offset)}),g};r.default=h},function(l,r,d){function m(g){return g&&g.__esModule?g:{default:g}}Object.defineProperty(r,"__esModule",{value:!0});var p=d(13),x=m(p),h=function(g,y){var b=0,w=0,A=window.innerHeight,E={offset:g.getAttribute("data-aos-offset"),anchor:g.getAttribute("data-aos-anchor"),anchorPlacement:g.getAttribute("data-aos-anchor-placement")};switch(E.offset&&!isNaN(E.offset)&&(w=parseInt(E.offset)),E.anchor&&document.querySelectorAll(E.anchor)&&(g=document.querySelectorAll(E.anchor)[0]),b=(0,x.default)(g).top,E.anchorPlacement){case"top-bottom":break;case"center-bottom":b+=g.offsetHeight/2;break;case"bottom-bottom":b+=g.offsetHeight;break;case"top-center":b+=A/2;break;case"bottom-center":b+=A/2+g.offsetHeight;break;case"center-center":b+=A/2+g.offsetHeight/2;break;case"top-top":b+=A;break;case"bottom-top":b+=g.offsetHeight+A;break;case"center-top":b+=g.offsetHeight/2+A}return E.anchorPlacement||E.offset||isNaN(y)||(w=y),b+w};r.default=h},function(l,r){Object.defineProperty(r,"__esModule",{value:!0});var d=function(m){for(var p=0,x=0;m&&!isNaN(m.offsetLeft)&&!isNaN(m.offsetTop);)p+=m.offsetLeft-(m.tagName!="BODY"?m.scrollLeft:0),x+=m.offsetTop-(m.tagName!="BODY"?m.scrollTop:0),m=m.offsetParent;return{top:x,left:p}};r.default=d},function(l,r){Object.defineProperty(r,"__esModule",{value:!0});var d=function(m){return m=m||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(m,function(p){return{node:p}})};r.default=d}])})})(Er)),Er.exports}var hS=fS();const gS=iu(hS),xS=()=>{const{pathname:i}=ua();return j.useEffect(()=>{window.scrollTo(0,0)},[i]),null};function yS(){return j.useEffect(()=>{gS.init({duration:500,once:!0,offset:100,easing:"ease-in-out"})},[]),u.jsxs("div",{className:"font-sans antialiased text-textDark",children:[u.jsx(G5,{}),u.jsx(xS,{}),u.jsxs(n2,{children:[u.jsx(ws,{path:"/",element:u.jsx(A0,{})}),u.jsx(ws,{path:"/contact",element:u.jsx(dS,{})}),u.jsx(ws,{path:"/services/:serviceName",element:u.jsx(uS,{})}),u.jsx(ws,{path:"/about/:id",element:u.jsx(mS,{})}),u.jsx(ws,{path:"*",element:u.jsx(A0,{})})]}),u.jsx(Y5,{}),u.jsx(F5,{})]})}o1.createRoot(document.getElementById("root")).render(u.jsx(ri.StrictMode,{children:u.jsx(N2,{children:u.jsx(yS,{})})}));
