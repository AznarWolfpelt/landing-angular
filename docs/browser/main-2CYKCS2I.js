var bw=Object.defineProperty,Ew=Object.defineProperties;var Sw=Object.getOwnPropertyDescriptors;var gl=Object.getOwnPropertySymbols;var n0=Object.prototype.hasOwnProperty,i0=Object.prototype.propertyIsEnumerable;var t0=(n,e,t)=>e in n?bw(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,me=(n,e)=>{for(var t in e||={})n0.call(e,t)&&t0(n,t,e[t]);if(gl)for(var t of gl(e))i0.call(e,t)&&t0(n,t,e[t]);return n},Tt=(n,e)=>Ew(n,Sw(e));var r0=(n,e)=>{var t={};for(var i in n)n0.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&gl)for(var i of gl(n))e.indexOf(i)<0&&i0.call(n,i)&&(t[i]=n[i]);return t};var Lh;function vl(){return Lh}function Mi(n){let e=Lh;return Lh=n,e}var o0=Symbol("NotFound");function Yo(n){return n===o0||n?.name==="\u0275NotFound"}var cn=null,yl=!1,Fh=1,Mw=null,En=Symbol("SIGNAL");function Xe(n){let e=cn;return cn=n,e}function _l(){return cn}var va={version:0,lastCleanEpoch:0,dirty:!1,producers:void 0,producersTail:void 0,consumers:void 0,consumersTail:void 0,recomputing:!1,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function ya(n){if(yl)throw new Error("");if(cn===null)return;cn.consumerOnSignalRead(n);let e=cn.producersTail;if(e!==void 0&&e.producer===n)return;let t,i=cn.recomputing;if(i&&(t=e!==void 0?e.nextProducer:cn.producers,t!==void 0&&t.producer===n)){cn.producersTail=t,t.lastReadVersion=n.version;return}let r=n.consumersTail;if(r!==void 0&&r.consumer===cn&&(!i||ww(r,cn)))return;let o=Zo(cn),s={producer:n,consumer:cn,nextProducer:t,prevConsumer:r,lastReadVersion:n.version,nextConsumer:void 0};cn.producersTail=s,e!==void 0?e.nextProducer=s:cn.producers=s,o&&l0(n,s)}function s0(){Fh++}function kh(n){if(!(Zo(n)&&!n.dirty)&&!(!n.dirty&&n.lastCleanEpoch===Fh)){if(!n.producerMustRecompute(n)&&!_a(n)){xl(n);return}n.producerRecomputeValue(n),xl(n)}}function Uh(n){if(n.consumers===void 0)return;let e=yl;yl=!0;try{for(let t=n.consumers;t!==void 0;t=t.nextConsumer){let i=t.consumer;i.dirty||Tw(i)}}finally{yl=e}}function Bh(){return cn?.consumerAllowSignalWrites!==!1}function Tw(n){n.dirty=!0,Uh(n),n.consumerMarkedDirty?.(n)}function xl(n){n.dirty=!1,n.lastCleanEpoch=Fh}function xa(n){return n&&a0(n),Xe(n)}function a0(n){n.producersTail=void 0,n.recomputing=!0}function bl(n,e){Xe(e),n&&c0(n)}function c0(n){n.recomputing=!1;let e=n.producersTail,t=e!==void 0?e.nextProducer:n.producers;if(t!==void 0){if(Zo(n))do t=Vh(t);while(t!==void 0);e!==void 0?e.nextProducer=void 0:n.producers=void 0}}function _a(n){for(let e=n.producers;e!==void 0;e=e.nextProducer){let t=e.producer,i=e.lastReadVersion;if(i!==t.version||(kh(t),i!==t.version))return!0}return!1}function ba(n){if(Zo(n)){let e=n.producers;for(;e!==void 0;)e=Vh(e)}n.producers=void 0,n.producersTail=void 0,n.consumers=void 0,n.consumersTail=void 0}function l0(n,e){let t=n.consumersTail,i=Zo(n);if(t!==void 0?(e.nextConsumer=t.nextConsumer,t.nextConsumer=e):(e.nextConsumer=void 0,n.consumers=e),e.prevConsumer=t,n.consumersTail=e,!i)for(let r=n.producers;r!==void 0;r=r.nextProducer)l0(r.producer,r)}function Vh(n){let e=n.producer,t=n.nextProducer,i=n.nextConsumer,r=n.prevConsumer;if(n.nextConsumer=void 0,n.prevConsumer=void 0,i!==void 0?i.prevConsumer=r:e.consumersTail=r,r!==void 0)r.nextConsumer=i;else if(e.consumers=i,!Zo(e)){let o=e.producers;for(;o!==void 0;)o=Vh(o)}return t}function Zo(n){return n.consumerIsAlwaysLive||n.consumers!==void 0}function Hh(n){Mw?.(n)}function ww(n,e){let t=e.producersTail;if(t!==void 0){let i=e.producers;do{if(i===n)return!0;if(i===t)break;i=i.nextProducer}while(i!==void 0)}return!1}function zh(n,e){return Object.is(n,e)}function Cw(){throw new Error}var u0=Cw;function d0(n){u0(n)}function Gh(n){u0=n}var Iw=null;function jh(n,e){let t=Object.create(El);t.value=n,e!==void 0&&(t.equal=e);let i=()=>f0(t);return i[En]=t,Hh(t),[i,s=>Ko(t,s),s=>Wh(t,s)]}function f0(n){return ya(n),n.value}function Ko(n,e){Bh()||d0(n),n.equal(n.value,e)||(n.value=e,Aw(n))}function Wh(n,e){Bh()||d0(n),Ko(n,e(n.value))}var El=Tt(me({},va),{equal:zh,value:void 0,kind:"signal"});function Aw(n){n.version++,s0(),Uh(n),Iw?.(n)}function Ge(n){return typeof n=="function"}function Jo(n){let t=n(i=>{Error.call(i),i.stack=new Error().stack});return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var Sl=Jo(n=>function(t){n(this),this.message=t?`${t.length} errors occurred during unsubscription:
${t.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=t});function Ea(n,e){if(n){let t=n.indexOf(e);0<=t&&n.splice(t,1)}}var Vt=class n{constructor(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let e;if(!this.closed){this.closed=!0;let{_parentage:t}=this;if(t)if(this._parentage=null,Array.isArray(t))for(let o of t)o.remove(this);else t.remove(this);let{initialTeardown:i}=this;if(Ge(i))try{i()}catch(o){e=o instanceof Sl?o.errors:[o]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let o of r)try{h0(o)}catch(s){e=e??[],s instanceof Sl?e=[...e,...s.errors]:e.push(s)}}if(e)throw new Sl(e)}}add(e){var t;if(e&&e!==this)if(this.closed)h0(e);else{if(e instanceof n){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(e)}}_hasParent(e){let{_parentage:t}=this;return t===e||Array.isArray(t)&&t.includes(e)}_addParent(e){let{_parentage:t}=this;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e}_removeParent(e){let{_parentage:t}=this;t===e?this._parentage=null:Array.isArray(t)&&Ea(t,e)}remove(e){let{_finalizers:t}=this;t&&Ea(t,e),e instanceof n&&e._removeParent(this)}};Vt.EMPTY=(()=>{let n=new Vt;return n.closed=!0,n})();var $h=Vt.EMPTY;function Ml(n){return n instanceof Vt||n&&"closed"in n&&Ge(n.remove)&&Ge(n.add)&&Ge(n.unsubscribe)}function h0(n){Ge(n)?n():n.unsubscribe()}var fi={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var Qo={setTimeout(n,e,...t){let{delegate:i}=Qo;return i?.setTimeout?i.setTimeout(n,e,...t):setTimeout(n,e,...t)},clearTimeout(n){let{delegate:e}=Qo;return(e?.clearTimeout||clearTimeout)(n)},delegate:void 0};function Tl(n){Qo.setTimeout(()=>{let{onUnhandledError:e}=fi;if(e)e(n);else throw n})}function Sa(){}var p0=qh("C",void 0,void 0);function m0(n){return qh("E",void 0,n)}function g0(n){return qh("N",n,void 0)}function qh(n,e,t){return{kind:n,value:e,error:t}}var io=null;function es(n){if(fi.useDeprecatedSynchronousErrorHandling){let e=!io;if(e&&(io={errorThrown:!1,error:null}),n(),e){let{errorThrown:t,error:i}=io;if(io=null,t)throw i}}else n()}function v0(n){fi.useDeprecatedSynchronousErrorHandling&&io&&(io.errorThrown=!0,io.error=n)}var ro=class extends Vt{constructor(e){super(),this.isStopped=!1,e?(this.destination=e,Ml(e)&&e.add(this)):this.destination=Nw}static create(e,t,i){return new ts(e,t,i)}next(e){this.isStopped?Yh(g0(e),this):this._next(e)}error(e){this.isStopped?Yh(m0(e),this):(this.isStopped=!0,this._error(e))}complete(){this.isStopped?Yh(p0,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(e){this.destination.next(e)}_error(e){try{this.destination.error(e)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},Rw=Function.prototype.bind;function Xh(n,e){return Rw.call(n,e)}var Zh=class{constructor(e){this.partialObserver=e}next(e){let{partialObserver:t}=this;if(t.next)try{t.next(e)}catch(i){wl(i)}}error(e){let{partialObserver:t}=this;if(t.error)try{t.error(e)}catch(i){wl(i)}else wl(e)}complete(){let{partialObserver:e}=this;if(e.complete)try{e.complete()}catch(t){wl(t)}}},ts=class extends ro{constructor(e,t,i){super();let r;if(Ge(e)||!e)r={next:e??void 0,error:t??void 0,complete:i??void 0};else{let o;this&&fi.useDeprecatedNextContext?(o=Object.create(e),o.unsubscribe=()=>this.unsubscribe(),r={next:e.next&&Xh(e.next,o),error:e.error&&Xh(e.error,o),complete:e.complete&&Xh(e.complete,o)}):r=e}this.destination=new Zh(r)}};function wl(n){fi.useDeprecatedSynchronousErrorHandling?v0(n):Tl(n)}function Dw(n){throw n}function Yh(n,e){let{onStoppedNotification:t}=fi;t&&Qo.setTimeout(()=>t(n,e))}var Nw={closed:!0,next:Sa,error:Dw,complete:Sa};var ns=typeof Symbol=="function"&&Symbol.observable||"@@observable";function Fn(n){return n}function Kh(...n){return Jh(n)}function Jh(n){return n.length===0?Fn:n.length===1?n[0]:function(t){return n.reduce((i,r)=>r(i),t)}}var lt=(()=>{class n{constructor(t){t&&(this._subscribe=t)}lift(t){let i=new n;return i.source=this,i.operator=t,i}subscribe(t,i,r){let o=Ow(t)?t:new ts(t,i,r);return es(()=>{let{operator:s,source:a}=this;o.add(s?s.call(o,a):a?this._subscribe(o):this._trySubscribe(o))}),o}_trySubscribe(t){try{return this._subscribe(t)}catch(i){t.error(i)}}forEach(t,i){return i=y0(i),new i((r,o)=>{let s=new ts({next:a=>{try{t(a)}catch(c){o(c),s.unsubscribe()}},error:o,complete:r});this.subscribe(s)})}_subscribe(t){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(t)}[ns](){return this}pipe(...t){return Jh(t)(this)}toPromise(t){return t=y0(t),new t((i,r)=>{let o;this.subscribe(s=>o=s,s=>r(s),()=>i(o))})}}return n.create=e=>new n(e),n})();function y0(n){var e;return(e=n??fi.Promise)!==null&&e!==void 0?e:Promise}function Pw(n){return n&&Ge(n.next)&&Ge(n.error)&&Ge(n.complete)}function Ow(n){return n&&n instanceof ro||Pw(n)&&Ml(n)}function Qh(n){return Ge(n?.lift)}function st(n){return e=>{if(Qh(e))return e.lift(function(t){try{return n(t,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function at(n,e,t,i,r){return new ep(n,e,t,i,r)}var ep=class extends ro{constructor(e,t,i,r,o,s){super(e),this.onFinalize=o,this.shouldUnsubscribe=s,this._next=t?function(a){try{t(a)}catch(c){e.error(c)}}:super._next,this._error=r?function(a){try{r(a)}catch(c){e.error(c)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(a){e.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:t}=this;super.unsubscribe(),!t&&((e=this.onFinalize)===null||e===void 0||e.call(this))}}};function is(){return st((n,e)=>{let t=null;n._refCount++;let i=at(e,void 0,void 0,void 0,()=>{if(!n||n._refCount<=0||0<--n._refCount){t=null;return}let r=n._connection,o=t;t=null,r&&(!o||r===o)&&r.unsubscribe(),e.unsubscribe()});n.subscribe(i),i.closed||(t=n.connect())})}var rs=class extends lt{constructor(e,t){super(),this.source=e,this.subjectFactory=t,this._subject=null,this._refCount=0,this._connection=null,Qh(e)&&(this.lift=e.lift)}_subscribe(e){return this.getSubject().subscribe(e)}getSubject(){let e=this._subject;return(!e||e.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;let{_connection:e}=this;this._subject=this._connection=null,e?.unsubscribe()}connect(){let e=this._connection;if(!e){e=this._connection=new Vt;let t=this.getSubject();e.add(this.source.subscribe(at(t,void 0,()=>{this._teardown(),t.complete()},i=>{this._teardown(),t.error(i)},()=>this._teardown()))),e.closed&&(this._connection=null,e=Vt.EMPTY)}return e}refCount(){return is()(this)}};var x0=Jo(n=>function(){n(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var Zt=(()=>{class n extends lt{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(t){let i=new Cl(this,this);return i.operator=t,i}_throwIfClosed(){if(this.closed)throw new x0}next(t){es(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(t)}})}error(t){es(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=t;let{observers:i}=this;for(;i.length;)i.shift().error(t)}})}complete(){es(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:t}=this;for(;t.length;)t.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0}_trySubscribe(t){return this._throwIfClosed(),super._trySubscribe(t)}_subscribe(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)}_innerSubscribe(t){let{hasError:i,isStopped:r,observers:o}=this;return i||r?$h:(this.currentObservers=null,o.push(t),new Vt(()=>{this.currentObservers=null,Ea(o,t)}))}_checkFinalizedStatuses(t){let{hasError:i,thrownError:r,isStopped:o}=this;i?t.error(r):o&&t.complete()}asObservable(){let t=new lt;return t.source=this,t}}return n.create=(e,t)=>new Cl(e,t),n})(),Cl=class extends Zt{constructor(e,t){super(),this.destination=e,this.source=t}next(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.next)===null||i===void 0||i.call(t,e)}error(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.error)===null||i===void 0||i.call(t,e)}complete(){var e,t;(t=(e=this.destination)===null||e===void 0?void 0:e.complete)===null||t===void 0||t.call(e)}_subscribe(e){var t,i;return(i=(t=this.source)===null||t===void 0?void 0:t.subscribe(e))!==null&&i!==void 0?i:$h}};var nn=class extends Zt{constructor(e){super(),this._value=e}get value(){return this.getValue()}_subscribe(e){let t=super._subscribe(e);return!t.closed&&e.next(this._value),t}getValue(){let{hasError:e,thrownError:t,_value:i}=this;if(e)throw t;return this._throwIfClosed(),i}next(e){super.next(this._value=e)}};var Sn=new lt(n=>n.complete());function _0(n){return n&&Ge(n.schedule)}function b0(n){return n[n.length-1]}function E0(n){return Ge(b0(n))?n.pop():void 0}function gr(n){return _0(b0(n))?n.pop():void 0}function M0(n,e,t,i){function r(o){return o instanceof t?o:new t(function(s){s(o)})}return new(t||(t=Promise))(function(o,s){function a(u){try{l(i.next(u))}catch(d){s(d)}}function c(u){try{l(i.throw(u))}catch(d){s(d)}}function l(u){u.done?o(u.value):r(u.value).then(a,c)}l((i=i.apply(n,e||[])).next())})}function S0(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],i=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function oo(n){return this instanceof oo?(this.v=n,this):new oo(n)}function T0(n,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=t.apply(n,e||[]),r,o=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",s),r[Symbol.asyncIterator]=function(){return this},r;function s(h){return function(g){return Promise.resolve(g).then(h,d)}}function a(h,g){i[h]&&(r[h]=function(y){return new Promise(function(m,p){o.push([h,y,m,p])>1||c(h,y)})},g&&(r[h]=g(r[h])))}function c(h,g){try{l(i[h](g))}catch(y){f(o[0][3],y)}}function l(h){h.value instanceof oo?Promise.resolve(h.value.v).then(u,d):f(o[0][2],h)}function u(h){c("next",h)}function d(h){c("throw",h)}function f(h,g){h(g),o.shift(),o.length&&c(o[0][0],o[0][1])}}function w0(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=n[Symbol.asyncIterator],t;return e?e.call(n):(n=typeof S0=="function"?S0(n):n[Symbol.iterator](),t={},i("next"),i("throw"),i("return"),t[Symbol.asyncIterator]=function(){return this},t);function i(o){t[o]=n[o]&&function(s){return new Promise(function(a,c){s=n[o](s),r(a,c,s.done,s.value)})}}function r(o,s,a,c){Promise.resolve(c).then(function(l){o({value:l,done:a})},s)}}var Il=n=>n&&typeof n.length=="number"&&typeof n!="function";function Al(n){return Ge(n?.then)}function Rl(n){return Ge(n[ns])}function Dl(n){return Symbol.asyncIterator&&Ge(n?.[Symbol.asyncIterator])}function Nl(n){return new TypeError(`You provided ${n!==null&&typeof n=="object"?"an invalid object":`'${n}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function Lw(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Pl=Lw();function Ol(n){return Ge(n?.[Pl])}function Ll(n){return T0(this,arguments,function*(){let t=n.getReader();try{for(;;){let{value:i,done:r}=yield oo(t.read());if(r)return yield oo(void 0);yield yield oo(i)}}finally{t.releaseLock()}})}function Fl(n){return Ge(n?.getReader)}function Kt(n){if(n instanceof lt)return n;if(n!=null){if(Rl(n))return Fw(n);if(Il(n))return kw(n);if(Al(n))return Uw(n);if(Dl(n))return C0(n);if(Ol(n))return Bw(n);if(Fl(n))return Vw(n)}throw Nl(n)}function Fw(n){return new lt(e=>{let t=n[ns]();if(Ge(t.subscribe))return t.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function kw(n){return new lt(e=>{for(let t=0;t<n.length&&!e.closed;t++)e.next(n[t]);e.complete()})}function Uw(n){return new lt(e=>{n.then(t=>{e.closed||(e.next(t),e.complete())},t=>e.error(t)).then(null,Tl)})}function Bw(n){return new lt(e=>{for(let t of n)if(e.next(t),e.closed)return;e.complete()})}function C0(n){return new lt(e=>{Hw(n,e).catch(t=>e.error(t))})}function Vw(n){return C0(Ll(n))}function Hw(n,e){var t,i,r,o;return M0(this,void 0,void 0,function*(){try{for(t=w0(n);i=yield t.next(),!i.done;){let s=i.value;if(e.next(s),e.closed)return}}catch(s){r={error:s}}finally{try{i&&!i.done&&(o=t.return)&&(yield o.call(t))}finally{if(r)throw r.error}}e.complete()})}function Mn(n,e,t,i=0,r=!1){let o=e.schedule(function(){t(),r?n.add(this.schedule(null,i)):this.unsubscribe()},i);if(n.add(o),!r)return o}function kl(n,e=0){return st((t,i)=>{t.subscribe(at(i,r=>Mn(i,n,()=>i.next(r),e),()=>Mn(i,n,()=>i.complete(),e),r=>Mn(i,n,()=>i.error(r),e)))})}function Ul(n,e=0){return st((t,i)=>{i.add(n.schedule(()=>t.subscribe(i),e))})}function I0(n,e){return Kt(n).pipe(Ul(e),kl(e))}function A0(n,e){return Kt(n).pipe(Ul(e),kl(e))}function R0(n,e){return new lt(t=>{let i=0;return e.schedule(function(){i===n.length?t.complete():(t.next(n[i++]),t.closed||this.schedule())})})}function D0(n,e){return new lt(t=>{let i;return Mn(t,e,()=>{i=n[Pl](),Mn(t,e,()=>{let r,o;try{({value:r,done:o}=i.next())}catch(s){t.error(s);return}o?t.complete():t.next(r)},0,!0)}),()=>Ge(i?.return)&&i.return()})}function Bl(n,e){if(!n)throw new Error("Iterable cannot be null");return new lt(t=>{Mn(t,e,()=>{let i=n[Symbol.asyncIterator]();Mn(t,e,()=>{i.next().then(r=>{r.done?t.complete():t.next(r.value)})},0,!0)})})}function N0(n,e){return Bl(Ll(n),e)}function P0(n,e){if(n!=null){if(Rl(n))return I0(n,e);if(Il(n))return R0(n,e);if(Al(n))return A0(n,e);if(Dl(n))return Bl(n,e);if(Ol(n))return D0(n,e);if(Fl(n))return N0(n,e)}throw Nl(n)}function Ht(n,e){return e?P0(n,e):Kt(n)}function Ue(...n){let e=gr(n);return Ht(n,e)}function os(n,e){let t=Ge(n)?n:()=>n,i=r=>r.error(t());return new lt(e?r=>e.schedule(i,0,r):i)}function tp(n){return!!n&&(n instanceof lt||Ge(n.lift)&&Ge(n.subscribe))}var zi=Jo(n=>function(){n(this),this.name="EmptyError",this.message="no elements in sequence"});function ct(n,e){return st((t,i)=>{let r=0;t.subscribe(at(i,o=>{i.next(n.call(e,o,r++))}))})}var{isArray:zw}=Array;function Gw(n,e){return zw(e)?n(...e):n(e)}function O0(n){return ct(e=>Gw(n,e))}var{isArray:jw}=Array,{getPrototypeOf:Ww,prototype:$w,keys:qw}=Object;function L0(n){if(n.length===1){let e=n[0];if(jw(e))return{args:e,keys:null};if(Xw(e)){let t=qw(e);return{args:t.map(i=>e[i]),keys:t}}}return{args:n,keys:null}}function Xw(n){return n&&typeof n=="object"&&Ww(n)===$w}function F0(n,e){return n.reduce((t,i,r)=>(t[i]=e[r],t),{})}function Vl(...n){let e=gr(n),t=E0(n),{args:i,keys:r}=L0(n);if(i.length===0)return Ht([],e);let o=new lt(Yw(i,e,r?s=>F0(r,s):Fn));return t?o.pipe(O0(t)):o}function Yw(n,e,t=Fn){return i=>{k0(e,()=>{let{length:r}=n,o=new Array(r),s=r,a=r;for(let c=0;c<r;c++)k0(e,()=>{let l=Ht(n[c],e),u=!1;l.subscribe(at(i,d=>{o[c]=d,u||(u=!0,a--),a||i.next(t(o.slice()))},()=>{--s||i.complete()}))},i)},i)}}function k0(n,e,t){n?Mn(t,n,e):e()}function U0(n,e,t,i,r,o,s,a){let c=[],l=0,u=0,d=!1,f=()=>{d&&!c.length&&!l&&e.complete()},h=y=>l<i?g(y):c.push(y),g=y=>{o&&e.next(y),l++;let m=!1;Kt(t(y,u++)).subscribe(at(e,p=>{r?.(p),o?h(p):e.next(p)},()=>{m=!0},void 0,()=>{if(m)try{for(l--;c.length&&l<i;){let p=c.shift();s?Mn(e,s,()=>g(p)):g(p)}f()}catch(p){e.error(p)}}))};return n.subscribe(at(e,h,()=>{d=!0,f()})),()=>{a?.()}}function Wt(n,e,t=1/0){return Ge(e)?Wt((i,r)=>ct((o,s)=>e(i,o,r,s))(Kt(n(i,r))),t):(typeof e=="number"&&(t=e),st((i,r)=>U0(i,r,n,t)))}function B0(n=1/0){return Wt(Fn,n)}function V0(){return B0(1)}function ss(...n){return V0()(Ht(n,gr(n)))}function Ma(n){return new lt(e=>{Kt(n()).subscribe(e)})}function Qn(n,e){return st((t,i)=>{let r=0;t.subscribe(at(i,o=>n.call(e,o,r++)&&i.next(o)))})}function vr(n){return st((e,t)=>{let i=null,r=!1,o;i=e.subscribe(at(t,void 0,void 0,s=>{o=Kt(n(s,vr(n)(e))),i?(i.unsubscribe(),i=null,o.subscribe(t)):r=!0})),r&&(i.unsubscribe(),i=null,o.subscribe(t))})}function H0(n,e,t,i,r){return(o,s)=>{let a=t,c=e,l=0;o.subscribe(at(s,u=>{let d=l++;c=a?n(c,u,d):(a=!0,u),i&&s.next(c)},r&&(()=>{a&&s.next(c),s.complete()})))}}function as(n,e){return Ge(e)?Wt(n,e,1):Wt(n,1)}function yr(n){return st((e,t)=>{let i=!1;e.subscribe(at(t,r=>{i=!0,t.next(r)},()=>{i||t.next(n),t.complete()}))})}function Gi(n){return n<=0?()=>Sn:st((e,t)=>{let i=0;e.subscribe(at(t,r=>{++i<=n&&(t.next(r),n<=i&&t.complete())}))})}function Hl(n=Zw){return st((e,t)=>{let i=!1;e.subscribe(at(t,r=>{i=!0,t.next(r)},()=>i?t.complete():t.error(n())))})}function Zw(){return new zi}function Ta(n){return st((e,t)=>{try{e.subscribe(t)}finally{t.add(n)}})}function ji(n,e){let t=arguments.length>=2;return i=>i.pipe(n?Qn((r,o)=>n(r,o,i)):Fn,Gi(1),t?yr(e):Hl(()=>new zi))}function cs(n){return n<=0?()=>Sn:st((e,t)=>{let i=[];e.subscribe(at(t,r=>{i.push(r),n<i.length&&i.shift()},()=>{for(let r of i)t.next(r);t.complete()},void 0,()=>{i=null}))})}function np(n,e){let t=arguments.length>=2;return i=>i.pipe(n?Qn((r,o)=>n(r,o,i)):Fn,cs(1),t?yr(e):Hl(()=>new zi))}function ip(n,e){return st(H0(n,e,arguments.length>=2,!0))}function rp(...n){let e=gr(n);return st((t,i)=>{(e?ss(n,t,e):ss(n,t)).subscribe(i)})}function Tn(n,e){return st((t,i)=>{let r=null,o=0,s=!1,a=()=>s&&!r&&i.complete();t.subscribe(at(i,c=>{r?.unsubscribe();let l=0,u=o++;Kt(n(c,u)).subscribe(r=at(i,d=>i.next(e?e(c,d,u,l++):d),()=>{r=null,a()}))},()=>{s=!0,a()}))})}function zl(n){return st((e,t)=>{Kt(n).subscribe(at(t,()=>t.complete(),Sa)),!t.closed&&e.subscribe(t)})}function Jt(n,e,t){let i=Ge(n)||e||t?{next:n,error:e,complete:t}:n;return i?st((r,o)=>{var s;(s=i.subscribe)===null||s===void 0||s.call(i);let a=!0;r.subscribe(at(o,c=>{var l;(l=i.next)===null||l===void 0||l.call(i,c),o.next(c)},()=>{var c;a=!1,(c=i.complete)===null||c===void 0||c.call(i),o.complete()},c=>{var l;a=!1,(l=i.error)===null||l===void 0||l.call(i,c),o.error(c)},()=>{var c,l;a&&((c=i.unsubscribe)===null||c===void 0||c.call(i)),(l=i.finalize)===null||l===void 0||l.call(i)}))}):Fn}function z0(n){let e=Xe(null);try{return n()}finally{Xe(e)}}var Ee=class extends Error{code;constructor(e,t){super(br(e,t)),this.code=e}};function Kw(n){return`NG0${Math.abs(n)}`}function br(n,e){return`${Kw(n)}${e?": "+e:""}`}function gt(n){for(let e in n)if(n[e]===gt)return e;throw Error("")}function xr(n){if(typeof n=="string")return n;if(Array.isArray(n))return`[${n.map(xr).join(", ")}]`;if(n==null)return""+n;let e=n.overriddenName||n.name;if(e)return`${e}`;let t=n.toString();if(t==null)return""+t;let i=t.indexOf(`
`);return i>=0?t.slice(0,i):t}function gp(n,e){return n?e?`${n} ${e}`:n:e||""}var Jw=gt({__forward_ref__:gt});function ql(n){return n.__forward_ref__=ql,n.toString=function(){return xr(this())},n}function wn(n){return vp(n)?n():n}function vp(n){return typeof n=="function"&&n.hasOwnProperty(Jw)&&n.__forward_ref__===ql}function Le(n){return{token:n.token,providedIn:n.providedIn||null,factory:n.factory,value:void 0}}function Aa(n){return Qw(n,Xl)}function yp(n){return Aa(n)!==null}function Qw(n,e){return n.hasOwnProperty(e)&&n[e]||null}function eC(n){let e=n?.[Xl]??null;return e||null}function sp(n){return n&&n.hasOwnProperty(jl)?n[jl]:null}var Xl=gt({\u0275prov:gt}),jl=gt({\u0275inj:gt}),_e=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(e,t){this._desc=e,this.\u0275prov=void 0,typeof t=="number"?this.__NG_ELEMENT_ID__=t:t!==void 0&&(this.\u0275prov=Le({token:this,providedIn:t.providedIn||"root",factory:t.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function xp(n){return n&&!!n.\u0275providers}var _p=gt({\u0275cmp:gt}),bp=gt({\u0275dir:gt}),Ep=gt({\u0275pipe:gt}),Sp=gt({\u0275mod:gt}),Ca=gt({\u0275fac:gt}),fo=gt({__NG_ELEMENT_ID__:gt}),j0=gt({__NG_ENV_ID__:gt});function Mp(n){return typeof n=="string"?n:n==null?"":String(n)}function $0(n){return typeof n=="function"?n.name||n.toString():typeof n=="object"&&n!=null&&typeof n.type=="function"?n.type.name||n.type.toString():Mp(n)}var q0=gt({ngErrorCode:gt}),tC=gt({ngErrorMessage:gt}),nC=gt({ngTokenPath:gt});function Tp(n,e){return X0("",-200,e)}function Yl(n,e){throw new Ee(-201,!1)}function X0(n,e,t){let i=new Ee(e,n);return i[q0]=e,i[tC]=n,t&&(i[nC]=t),i}function iC(n){return n[q0]}var ap;function Y0(){return ap}function kn(n){let e=ap;return ap=n,e}function wp(n,e,t){let i=Aa(n);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(t&8)return null;if(e!==void 0)return e;Yl(n,"Injector")}var rC={},so=rC,oC="__NG_DI_FLAG__",cp=class{injector;constructor(e){this.injector=e}retrieve(e,t){let i=ao(t)||0;try{return this.injector.get(e,i&8?null:so,i)}catch(r){if(Yo(r))return r;throw r}}};function sC(n,e=0){let t=vl();if(t===void 0)throw new Ee(-203,!1);if(t===null)return wp(n,void 0,e);{let i=aC(e),r=t.retrieve(n,i);if(Yo(r)){if(i.optional)return null;throw r}return r}}function Ke(n,e=0){return(Y0()||sC)(wn(n),e)}function Y(n,e){return Ke(n,ao(e))}function ao(n){return typeof n>"u"||typeof n=="number"?n:0|(n.optional&&8)|(n.host&&1)|(n.self&&2)|(n.skipSelf&&4)}function aC(n){return{optional:!!(n&8),host:!!(n&1),self:!!(n&2),skipSelf:!!(n&4)}}function lp(n){let e=[];for(let t=0;t<n.length;t++){let i=wn(n[t]);if(Array.isArray(i)){if(i.length===0)throw new Ee(900,!1);let r,o=0;for(let s=0;s<i.length;s++){let a=i[s],c=cC(a);typeof c=="number"?c===-1?r=a.token:o|=c:r=a}e.push(Ke(r,o))}else e.push(Ke(i))}return e}function cC(n){return n[oC]}function co(n,e){let t=n.hasOwnProperty(Ca);return t?n[Ca]:null}function Z0(n,e,t){if(n.length!==e.length)return!1;for(let i=0;i<n.length;i++){let r=n[i],o=e[i];if(t&&(r=t(r),o=t(o)),o!==r)return!1}return!0}function K0(n){return n.flat(Number.POSITIVE_INFINITY)}function Zl(n,e){n.forEach(t=>Array.isArray(t)?Zl(t,e):e(t))}function Cp(n,e,t){e>=n.length?n.push(t):n.splice(e,0,t)}function Ra(n,e){return e>=n.length-1?n.pop():n.splice(e,1)[0]}var ho={},lo=[],ei=new _e(""),Ip=new _e("",-1),Ap=new _e(""),Ia=class{get(e,t=so){if(t===so){let r=X0("",-201);throw r.name="\u0275NotFound",r}return t}};function Rp(n){return n[Sp]||null}function $i(n){return n[_p]||null}function Kl(n){return n[bp]||null}function Dp(n){return n[Ep]||null}function pi(n){return{\u0275providers:n}}function J0(n){return pi([{provide:ei,multi:!0,useValue:n}])}function Q0(...n){return{\u0275providers:Jl(!0,n),\u0275fromNgModule:!0}}function Jl(n,...e){let t=[],i=new Set,r,o=s=>{t.push(s)};return Zl(e,s=>{let a=s;Wl(a,o,[],i)&&(r||=[],r.push(a))}),r!==void 0&&ex(r,o),t}function ex(n,e){for(let t=0;t<n.length;t++){let{ngModule:i,providers:r}=n[t];Np(r,o=>{e(o,i)})}}function Wl(n,e,t,i){if(n=wn(n),!n)return!1;let r=null,o=sp(n),s=!o&&$i(n);if(!o&&!s){let c=n.ngModule;if(o=sp(c),o)r=c;else return!1}else{if(s&&!s.standalone)return!1;r=n}let a=i.has(r);if(s){if(a)return!1;if(i.add(r),s.dependencies){let c=typeof s.dependencies=="function"?s.dependencies():s.dependencies;for(let l of c)Wl(l,e,t,i)}}else if(o){if(o.imports!=null&&!a){i.add(r);let l;try{Zl(o.imports,u=>{Wl(u,e,t,i)&&(l||=[],l.push(u))})}finally{}l!==void 0&&ex(l,e)}if(!a){let l=co(r)||(()=>new r);e({provide:r,useFactory:l,deps:lo},r),e({provide:Ap,useValue:r,multi:!0},r),e({provide:ei,useValue:()=>Ke(r),multi:!0},r)}let c=o.providers;if(c!=null&&!a){let l=n;Np(c,u=>{e(u,l)})}}else return!1;return r!==n&&n.providers!==void 0}function Np(n,e){for(let t of n)xp(t)&&(t=t.\u0275providers),Array.isArray(t)?Np(t,e):e(t)}var lC=gt({provide:String,useValue:gt});function tx(n){return n!==null&&typeof n=="object"&&lC in n}function uC(n){return!!(n&&n.useExisting)}function dC(n){return!!(n&&n.useFactory)}function $l(n){return typeof n=="function"}var Da=new _e(""),Gl={},W0={},op;function Na(){return op===void 0&&(op=new Ia),op}var Qt=class{},uo=class extends Qt{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(e,t,i,r){super(),this.parent=t,this.source=i,this.scopes=r,dp(e,s=>this.processProvider(s)),this.records.set(Ip,ls(void 0,this)),r.has("environment")&&this.records.set(Qt,ls(void 0,this));let o=this.records.get(Da);o!=null&&typeof o.value=="string"&&this.scopes.add(o.value),this.injectorDefTypes=new Set(this.get(Ap,lo,{self:!0}))}retrieve(e,t){let i=ao(t)||0;try{return this.get(e,so,i)}catch(r){if(Yo(r))return r;throw r}}destroy(){wa(this),this._destroyed=!0;let e=Xe(null);try{for(let i of this._ngOnDestroyHooks)i.ngOnDestroy();let t=this._onDestroyHooks;this._onDestroyHooks=[];for(let i of t)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),Xe(e)}}onDestroy(e){return wa(this),this._onDestroyHooks.push(e),()=>this.removeOnDestroy(e)}runInContext(e){wa(this);let t=Mi(this),i=kn(void 0),r;try{return e()}finally{Mi(t),kn(i)}}get(e,t=so,i){if(wa(this),e.hasOwnProperty(j0))return e[j0](this);let r=ao(i),o,s=Mi(this),a=kn(void 0);try{if(!(r&4)){let l=this.records.get(e);if(l===void 0){let u=gC(e)&&Aa(e);u&&this.injectableDefInScope(u)?l=ls(up(e),Gl):l=null,this.records.set(e,l)}if(l!=null)return this.hydrate(e,l,r)}let c=r&2?Na():this.parent;return t=r&8&&t===so?null:t,c.get(e,t)}catch(c){let l=iC(c);throw l===-200||l===-201?new Ee(l,null):c}finally{kn(a),Mi(s)}}resolveInjectorInitializers(){let e=Xe(null),t=Mi(this),i=kn(void 0),r;try{let o=this.get(ei,lo,{self:!0});for(let s of o)s()}finally{Mi(t),kn(i),Xe(e)}}toString(){let e=[],t=this.records;for(let i of t.keys())e.push(xr(i));return`R3Injector[${e.join(", ")}]`}processProvider(e){e=wn(e);let t=$l(e)?e:wn(e&&e.provide),i=hC(e);if(!$l(e)&&e.multi===!0){let r=this.records.get(t);r||(r=ls(void 0,Gl,!0),r.factory=()=>lp(r.multi),this.records.set(t,r)),t=e,r.multi.push(e)}this.records.set(t,i)}hydrate(e,t,i){let r=Xe(null);try{if(t.value===W0)throw Tp(xr(e));return t.value===Gl&&(t.value=W0,t.value=t.factory(void 0,i)),typeof t.value=="object"&&t.value&&mC(t.value)&&this._ngOnDestroyHooks.add(t.value),t.value}finally{Xe(r)}}injectableDefInScope(e){if(!e.providedIn)return!1;let t=wn(e.providedIn);return typeof t=="string"?t==="any"||this.scopes.has(t):this.injectorDefTypes.has(t)}removeOnDestroy(e){let t=this._onDestroyHooks.indexOf(e);t!==-1&&this._onDestroyHooks.splice(t,1)}};function up(n){let e=Aa(n),t=e!==null?e.factory:co(n);if(t!==null)return t;if(n instanceof _e)throw new Ee(204,!1);if(n instanceof Function)return fC(n);throw new Ee(204,!1)}function fC(n){if(n.length>0)throw new Ee(204,!1);let t=eC(n);return t!==null?()=>t.factory(n):()=>new n}function hC(n){if(tx(n))return ls(void 0,n.useValue);{let e=nx(n);return ls(e,Gl)}}function nx(n,e,t){let i;if($l(n)){let r=wn(n);return co(r)||up(r)}else if(tx(n))i=()=>wn(n.useValue);else if(dC(n))i=()=>n.useFactory(...lp(n.deps||[]));else if(uC(n))i=(r,o)=>Ke(wn(n.useExisting),o!==void 0&&o&8?8:void 0);else{let r=wn(n&&(n.useClass||n.provide));if(pC(n))i=()=>new r(...lp(n.deps));else return co(r)||up(r)}return i}function wa(n){if(n.destroyed)throw new Ee(205,!1)}function ls(n,e,t=!1){return{factory:n,value:e,multi:t?[]:void 0}}function pC(n){return!!n.deps}function mC(n){return n!==null&&typeof n=="object"&&typeof n.ngOnDestroy=="function"}function gC(n){return typeof n=="function"||typeof n=="object"&&n.ngMetadataName==="InjectionToken"}function dp(n,e){for(let t of n)Array.isArray(t)?dp(t,e):t&&xp(t)?dp(t.\u0275providers,e):e(t)}function ln(n,e){let t;n instanceof uo?(wa(n),t=n):t=new cp(n);let i,r=Mi(t),o=kn(void 0);try{return e()}finally{Mi(r),kn(o)}}function ix(){return Y0()!==void 0||vl()!=null}var gn=0,Ae=1,je=2,Ft=3,ti=4,ni=5,Bn=6,us=7,vn=8,ii=9,qi=10,Ct=11,ds=12,Pp=13,fs=14,Cn=15,Er=16,po=17,wi=18,Pa=19,Op=20,Wi=21,Ql=22,Oa=23,Vn=24,mo=25,La=26,kt=27,rx=1,mi=6,Ci=7,Fa=8,go=9,un=10;function ri(n){return Array.isArray(n)&&typeof n[rx]=="object"}function Hn(n){return Array.isArray(n)&&n[rx]===!0}function Lp(n){return(n.flags&4)!==0}function Sr(n){return n.componentOffset>-1}function eu(n){return(n.flags&1)===1}function vo(n){return!!n.template}function yo(n){return(n[je]&512)!==0}function Mr(n){return(n[je]&256)===256}var ox="svg",sx="math";function zn(n){for(;Array.isArray(n);)n=n[gn];return n}function ax(n,e){return zn(e[n])}function Ii(n,e){return zn(e[n.index])}function ka(n,e){return n.data[e]}function Ai(n,e){let t=e[n];return ri(t)?t:t[gn]}function cx(n){return(n[je]&4)===4}function tu(n){return(n[je]&128)===128}function lx(n){return Hn(n[Ft])}function Ua(n,e){return e==null?null:n[e]}function Fp(n){n[po]=0}function kp(n){n[je]&1024||(n[je]|=1024,tu(n)&&hs(n))}function Ba(n){return!!(n[je]&9216||n[Vn]?.dirty)}function nu(n){n[qi].changeDetectionScheduler?.notify(8),n[je]&64&&(n[je]|=1024),Ba(n)&&hs(n)}function hs(n){n[qi].changeDetectionScheduler?.notify(0);let e=_r(n);for(;e!==null&&!(e[je]&8192||(e[je]|=8192,!tu(e)));)e=_r(e)}function Up(n,e){if(Mr(n))throw new Ee(911,!1);n[Wi]===null&&(n[Wi]=[]),n[Wi].push(e)}function ux(n,e){if(n[Wi]===null)return;let t=n[Wi].indexOf(e);t!==-1&&n[Wi].splice(t,1)}function _r(n){let e=n[Ft];return Hn(e)?e[Ft]:e}function Bp(n){return n[us]??=[]}function Vp(n){return n.cleanup??=[]}function dx(n,e,t,i){let r=Bp(e);r.push(t),n.firstCreatePass&&Vp(n).push(i,r.length-1)}var ut={lFrame:Mx(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var fp=!1;function fx(){return ut.lFrame.elementDepthCount}function hx(){ut.lFrame.elementDepthCount++}function Hp(){ut.lFrame.elementDepthCount--}function px(){return ut.bindingsEnabled}function zp(){return ut.skipHydrationRootTNode!==null}function Gp(n){return ut.skipHydrationRootTNode===n}function mx(n){ut.skipHydrationRootTNode=n}function jp(){ut.skipHydrationRootTNode=null}function Rt(){return ut.lFrame.lView}function Tr(){return ut.lFrame.tView}function Va(n){return ut.lFrame.contextLView=n,n[vn]}function Ha(n){return ut.lFrame.contextLView=null,n}function In(){let n=Wp();for(;n!==null&&n.type===64;)n=n.parent;return n}function Wp(){return ut.lFrame.currentTNode}function gx(){let n=ut.lFrame,e=n.currentTNode;return n.isParent?e:e.parent}function za(n,e){let t=ut.lFrame;t.currentTNode=n,t.isParent=e}function $p(){return ut.lFrame.isParent}function vx(){ut.lFrame.isParent=!1}function qp(){return fp}function Xp(n){let e=fp;return fp=n,e}function yx(n){return ut.lFrame.bindingIndex=n}function xx(){return ut.lFrame.bindingIndex++}function _x(){return ut.lFrame.inI18n}function bx(n,e){let t=ut.lFrame;t.bindingIndex=t.bindingRootIndex=n,iu(e)}function Ex(){return ut.lFrame.currentDirectiveIndex}function iu(n){ut.lFrame.currentDirectiveIndex=n}function Yp(){return ut.lFrame.currentQueryIndex}function ru(n){ut.lFrame.currentQueryIndex=n}function vC(n){let e=n[Ae];return e.type===2?e.declTNode:e.type===1?n[ni]:null}function Zp(n,e,t){if(t&4){let r=e,o=n;for(;r=r.parent,r===null&&!(t&1);)if(r=vC(o),r===null||(o=o[fs],r.type&10))break;if(r===null)return!1;e=r,n=o}let i=ut.lFrame=Sx();return i.currentTNode=e,i.lView=n,!0}function ou(n){let e=Sx(),t=n[Ae];ut.lFrame=e,e.currentTNode=t.firstChild,e.lView=n,e.tView=t,e.contextLView=n,e.bindingIndex=t.bindingStartIndex,e.inI18n=!1}function Sx(){let n=ut.lFrame,e=n===null?null:n.child;return e===null?Mx(n):e}function Mx(n){let e={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:n,child:null,inI18n:!1};return n!==null&&(n.child=e),e}function Tx(){let n=ut.lFrame;return ut.lFrame=n.parent,n.currentTNode=null,n.lView=null,n}var Kp=Tx;function su(){let n=Tx();n.isParent=!0,n.tView=null,n.selectedIndex=-1,n.contextLView=null,n.elementDepthCount=0,n.currentDirectiveIndex=-1,n.currentNamespace=null,n.bindingRootIndex=-1,n.bindingIndex=-1,n.currentQueryIndex=0}function au(){return ut.lFrame.selectedIndex}function wr(n){ut.lFrame.selectedIndex=n}function Jp(){return ut.lFrame.currentNamespace}var wx=!0;function Qp(){return wx}function Xi(n){wx=n}function hp(n,e=null,t=null,i){let r=em(n,e,t,i);return r.resolveInjectorInitializers(),r}function em(n,e=null,t=null,i,r=new Set){let o=[t||lo,Q0(n)];return i=i||(typeof n=="object"?void 0:xr(n)),new uo(o,e||Na(),i||null,r)}var Un=class n{static THROW_IF_NOT_FOUND=so;static NULL=new Ia;static create(e,t){if(Array.isArray(e))return hp({name:""},t,e,"");{let i=e.name??"";return hp({name:i},e.parent,e.providers,i)}}static \u0275prov=Le({token:n,providedIn:"any",factory:()=>Ke(Ip)});static __NG_ELEMENT_ID__=-1},$t=new _e(""),Yi=(()=>{class n{static __NG_ELEMENT_ID__=yC;static __NG_ENV_ID__=t=>t}return n})(),pp=class extends Yi{_lView;constructor(e){super(),this._lView=e}get destroyed(){return Mr(this._lView)}onDestroy(e){let t=this._lView;return Up(t,e),()=>ux(t,e)}};function yC(){return new pp(Rt())}var hi=class{_console=console;handleError(e){this._console.error("ERROR",e)}},Gn=new _e("",{providedIn:"root",factory:()=>{let n=Y(Qt),e;return t=>{n.destroyed&&!e?setTimeout(()=>{throw t}):(e??=n.get(hi),e.handleError(t))}}}),Cx={provide:ei,useValue:()=>void Y(hi),multi:!0},xC=new _e("",{providedIn:"root",factory:()=>{let n=Y($t).defaultView;if(!n)return;let e=Y(Gn),t=o=>{e(o.reason),o.preventDefault()},i=o=>{o.error?e(o.error):e(new Error(o.message,{cause:o})),o.preventDefault()},r=()=>{n.addEventListener("unhandledrejection",t),n.addEventListener("error",i)};typeof Zone<"u"?Zone.root.run(r):r(),Y(Yi).onDestroy(()=>{n.removeEventListener("error",i),n.removeEventListener("unhandledrejection",t)})}});function tm(){return pi([J0(()=>void Y(xC))])}function Cr(n,e){let[t,i,r]=jh(n,e?.equal),o=t,s=o[En];return o.set=i,o.update=r,o.asReadonly=Ix.bind(o),o}function Ix(){let n=this[En];if(n.readonlyFn===void 0){let e=()=>this();e[En]=n,n.readonlyFn=e}return n.readonlyFn}var cu=(()=>{class n{view;node;constructor(t,i){this.view=t,this.node=i}static __NG_ELEMENT_ID__=_C}return n})();function _C(){return new cu(Rt(),In())}var Ti=class{},ps=new _e("",{providedIn:"root",factory:()=>!1});var nm=new _e(""),lu=new _e(""),gi=(()=>{class n{taskId=0;pendingTasks=new Set;destroyed=!1;pendingTask=new nn(!1);get hasPendingTasks(){return this.destroyed?!1:this.pendingTask.value}get hasPendingTasksObservable(){return this.destroyed?new lt(t=>{t.next(!1),t.complete()}):this.pendingTask}add(){!this.hasPendingTasks&&!this.destroyed&&this.pendingTask.next(!0);let t=this.taskId++;return this.pendingTasks.add(t),t}has(t){return this.pendingTasks.has(t)}remove(t){this.pendingTasks.delete(t),this.pendingTasks.size===0&&this.hasPendingTasks&&this.pendingTask.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks&&this.pendingTask.next(!1),this.destroyed=!0,this.pendingTask.unsubscribe()}static \u0275prov=Le({token:n,providedIn:"root",factory:()=>new n})}return n})(),uu=(()=>{class n{internalPendingTasks=Y(gi);scheduler=Y(Ti);errorHandler=Y(Gn);add(){let t=this.internalPendingTasks.add();return()=>{this.internalPendingTasks.has(t)&&(this.scheduler.notify(11),this.internalPendingTasks.remove(t))}}run(t){let i=this.add();t().catch(this.errorHandler).finally(i)}static \u0275prov=Le({token:n,providedIn:"root",factory:()=>new n})}return n})();function Ga(...n){}var im=(()=>{class n{static \u0275prov=Le({token:n,providedIn:"root",factory:()=>new mp})}return n})(),mp=class{dirtyEffectCount=0;queues=new Map;add(e){this.enqueue(e),this.schedule(e)}schedule(e){e.dirty&&this.dirtyEffectCount++}remove(e){let t=e.zone,i=this.queues.get(t);i.has(e)&&(i.delete(e),e.dirty&&this.dirtyEffectCount--)}enqueue(e){let t=e.zone;this.queues.has(t)||this.queues.set(t,new Set);let i=this.queues.get(t);i.has(e)||i.add(e)}flush(){for(;this.dirtyEffectCount>0;){let e=!1;for(let[t,i]of this.queues)t===null?e||=this.flushQueue(i):e||=t.run(()=>this.flushQueue(i));e||(this.dirtyEffectCount=0)}}flushQueue(e){let t=!1;for(let i of e)i.dirty&&(this.dirtyEffectCount--,t=!0,i.run());return t}};var du={JSACTION:"jsaction"};function Fu(n){return{toString:n}.toString()}function DC(n){return typeof n=="function"}var xu=class{previousValue;currentValue;firstChange;constructor(e,t,i){this.previousValue=e,this.currentValue=t,this.firstChange=i}isFirstChange(){return this.firstChange}};function d_(n,e,t,i){e!==null?e.applyValueToInputSignal(e,i):n[t]=i}var Lm=(()=>{let n=()=>f_;return n.ngInherit=!0,n})();function f_(n){return n.type.prototype.ngOnChanges&&(n.setInput=PC),NC}function NC(){let n=p_(this),e=n?.current;if(e){let t=n.previous;if(t===ho)n.previous=e;else for(let i in e)t[i]=e[i];n.current=null,this.ngOnChanges(e)}}function PC(n,e,t,i,r){let o=this.declaredInputs[i],s=p_(n)||OC(n,{previous:ho,current:null}),a=s.current||(s.current={}),c=s.previous,l=c[o];a[o]=new xu(l&&l.currentValue,t,c===ho),d_(n,e,r,t)}var h_="__ngSimpleChanges__";function p_(n){return n[h_]||null}function OC(n,e){return n[h_]=e}var Ax=[];var mt=function(n,e=null,t){for(let i=0;i<Ax.length;i++){let r=Ax[i];r(n,e,t)}};function LC(n,e,t){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:o}=e.type.prototype;if(i){let s=f_(e);(t.preOrderHooks??=[]).push(n,s),(t.preOrderCheckHooks??=[]).push(n,s)}r&&(t.preOrderHooks??=[]).push(0-n,r),o&&((t.preOrderHooks??=[]).push(n,o),(t.preOrderCheckHooks??=[]).push(n,o))}function FC(n,e){for(let t=e.directiveStart,i=e.directiveEnd;t<i;t++){let o=n.data[t].type.prototype,{ngAfterContentInit:s,ngAfterContentChecked:a,ngAfterViewInit:c,ngAfterViewChecked:l,ngOnDestroy:u}=o;s&&(n.contentHooks??=[]).push(-t,s),a&&((n.contentHooks??=[]).push(t,a),(n.contentCheckHooks??=[]).push(t,a)),c&&(n.viewHooks??=[]).push(-t,c),l&&((n.viewHooks??=[]).push(t,l),(n.viewCheckHooks??=[]).push(t,l)),u!=null&&(n.destroyHooks??=[]).push(t,u)}}function fu(n,e,t){m_(n,e,3,t)}function hu(n,e,t,i){(n[je]&3)===t&&m_(n,e,t,i)}function rm(n,e){let t=n[je];(t&3)===e&&(t&=16383,t+=1,n[je]=t)}function m_(n,e,t,i){let r=i!==void 0?n[po]&65535:0,o=i??-1,s=e.length-1,a=0;for(let c=r;c<s;c++)if(typeof e[c+1]=="number"){if(a=e[c],i!=null&&a>=i)break}else e[c]<0&&(n[po]+=65536),(a<o||o==-1)&&(kC(n,t,e,c),n[po]=(n[po]&4294901760)+c+2),c++}function Rx(n,e){mt(4,n,e);let t=Xe(null);try{e.call(n)}finally{Xe(t),mt(5,n,e)}}function kC(n,e,t,i){let r=t[i]<0,o=t[i+1],s=r?-t[i]:t[i],a=n[s];r?n[je]>>14<n[po]>>16&&(n[je]&3)===e&&(n[je]+=16384,Rx(a,o)):Rx(a,o)}var gs=-1,$a=class{factory;name;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(e,t,i,r){this.factory=e,this.name=r,this.canSeeViewProviders=t,this.injectImpl=i}};function UC(n){return(n.flags&8)!==0}function BC(n){return(n.flags&16)!==0}function VC(n,e,t){let i=0;for(;i<t.length;){let r=t[i];if(typeof r=="number"){if(r!==0)break;i++;let o=t[i++],s=t[i++],a=t[i++];n.setAttribute(e,s,a,o)}else{let o=r,s=t[++i];zC(o)?n.setProperty(e,o,s):n.setAttribute(e,o,s),i++}}return i}function HC(n){return n===3||n===4||n===6}function zC(n){return n.charCodeAt(0)===64}function Fm(n,e){if(!(e===null||e.length===0))if(n===null||n.length===0)n=e.slice();else{let t=-1;for(let i=0;i<e.length;i++){let r=e[i];typeof r=="number"?t=r:t===0||(t===-1||t===2?Dx(n,t,r,null,e[++i]):Dx(n,t,r,null,null))}}return n}function Dx(n,e,t,i,r){let o=0,s=n.length;if(e===-1)s=-1;else for(;o<n.length;){let a=n[o++];if(typeof a=="number"){if(a===e){s=-1;break}else if(a>e){s=o-1;break}}}for(;o<n.length;){let a=n[o];if(typeof a=="number")break;if(a===t){r!==null&&(n[o+1]=r);return}o++,r!==null&&o++}s!==-1&&(n.splice(s,0,e),o=s+1),n.splice(o++,0,t),r!==null&&n.splice(o++,0,r)}function g_(n){return n!==gs}function _u(n){return n&32767}function GC(n){return n>>16}function bu(n,e){let t=GC(n),i=e;for(;t>0;)i=i[fs],t--;return i}var dm=!0;function Nx(n){let e=dm;return dm=n,e}var jC=256,v_=jC-1,y_=5,WC=0,Ri={};function $C(n,e,t){let i;typeof t=="string"?i=t.charCodeAt(0)||0:t.hasOwnProperty(fo)&&(i=t[fo]),i==null&&(i=t[fo]=WC++);let r=i&v_,o=1<<r;e.data[n+(r>>y_)]|=o}function x_(n,e){let t=__(n,e);if(t!==-1)return t;let i=e[Ae];i.firstCreatePass&&(n.injectorIndex=e.length,om(i.data,n),om(e,null),om(i.blueprint,null));let r=km(n,e),o=n.injectorIndex;if(g_(r)){let s=_u(r),a=bu(r,e),c=a[Ae].data;for(let l=0;l<8;l++)e[o+l]=a[s+l]|c[s+l]}return e[o+8]=r,o}function om(n,e){n.push(0,0,0,0,0,0,0,0,e)}function __(n,e){return n.injectorIndex===-1||n.parent&&n.parent.injectorIndex===n.injectorIndex||e[n.injectorIndex+8]===null?-1:n.injectorIndex}function km(n,e){if(n.parent&&n.parent.injectorIndex!==-1)return n.parent.injectorIndex;let t=0,i=null,r=e;for(;r!==null;){if(i=T_(r),i===null)return gs;if(t++,r=r[fs],i.injectorIndex!==-1)return i.injectorIndex|t<<16}return gs}function qC(n,e,t){$C(n,e,t)}function b_(n,e,t){if(t&8||n!==void 0)return n;Yl(e,"NodeInjector")}function E_(n,e,t,i){if(t&8&&i===void 0&&(i=null),(t&3)===0){let r=n[ii],o=kn(void 0);try{return r?r.get(e,i,t&8):wp(e,i,t&8)}finally{kn(o)}}return b_(i,e,t)}function S_(n,e,t,i=0,r){if(n!==null){if(e[je]&2048&&!(i&2)){let s=KC(n,e,t,i,Ri);if(s!==Ri)return s}let o=M_(n,e,t,i,Ri);if(o!==Ri)return o}return E_(e,t,i,r)}function M_(n,e,t,i,r){let o=YC(t);if(typeof o=="function"){if(!Zp(e,n,i))return i&1?b_(r,t,i):E_(e,t,i,r);try{let s;if(s=o(i),s==null&&!(i&8))Yl(t);else return s}finally{Kp()}}else if(typeof o=="number"){let s=null,a=__(n,e),c=gs,l=i&1?e[Cn][ni]:null;for((a===-1||i&4)&&(c=a===-1?km(n,e):e[a+8],c===gs||!Ox(i,!1)?a=-1:(s=e[Ae],a=_u(c),e=bu(c,e)));a!==-1;){let u=e[Ae];if(Px(o,a,u.data)){let d=XC(a,e,t,s,i,l);if(d!==Ri)return d}c=e[a+8],c!==gs&&Ox(i,e[Ae].data[a+8]===l)&&Px(o,a,e)?(s=u,a=_u(c),e=bu(c,e)):a=-1}}return r}function XC(n,e,t,i,r,o){let s=e[Ae],a=s.data[n+8],c=i==null?Sr(a)&&dm:i!=s&&(a.type&3)!==0,l=r&1&&o===a,u=pu(a,s,t,c,l);return u!==null?Eu(e,s,u,a,r):Ri}function pu(n,e,t,i,r){let o=n.providerIndexes,s=e.data,a=o&1048575,c=n.directiveStart,l=n.directiveEnd,u=o>>20,d=i?a:a+u,f=r?a+u:l;for(let h=d;h<f;h++){let g=s[h];if(h<c&&t===g||h>=c&&g.type===t)return h}if(r){let h=s[c];if(h&&vo(h)&&h.type===t)return c}return null}function Eu(n,e,t,i,r){let o=n[t],s=e.data;if(o instanceof $a){let a=o;if(a.resolving){let h=$0(s[t]);throw Tp(h)}let c=Nx(a.canSeeViewProviders);a.resolving=!0;let l=s[t].type||s[t],u,d=a.injectImpl?kn(a.injectImpl):null,f=Zp(n,i,0);try{o=n[t]=a.factory(void 0,r,s,n,i),e.firstCreatePass&&t>=i.directiveStart&&LC(t,s[t],e)}finally{d!==null&&kn(d),Nx(c),a.resolving=!1,Kp()}}return o}function YC(n){if(typeof n=="string")return n.charCodeAt(0)||0;let e=n.hasOwnProperty(fo)?n[fo]:void 0;return typeof e=="number"?e>=0?e&v_:ZC:e}function Px(n,e,t){let i=1<<n;return!!(t[e+(n>>y_)]&i)}function Ox(n,e){return!(n&2)&&!(n&1&&e)}var _o=class{_tNode;_lView;constructor(e,t){this._tNode=e,this._lView=t}get(e,t,i){return S_(this._tNode,this._lView,e,ao(i),t)}};function ZC(){return new _o(In(),Rt())}function ku(n){return Fu(()=>{let e=n.prototype.constructor,t=e[Ca]||fm(e),i=Object.prototype,r=Object.getPrototypeOf(n.prototype).constructor;for(;r&&r!==i;){let o=r[Ca]||fm(r);if(o&&o!==t)return o;r=Object.getPrototypeOf(r)}return o=>new o})}function fm(n){return vp(n)?()=>{let e=fm(wn(n));return e&&e()}:co(n)}function KC(n,e,t,i,r){let o=n,s=e;for(;o!==null&&s!==null&&s[je]&2048&&!yo(s);){let a=M_(o,s,t,i|2,Ri);if(a!==Ri)return a;let c=o.parent;if(!c){let l=s[Op];if(l){let u=l.get(t,Ri,i);if(u!==Ri)return u}c=T_(s),s=s[fs]}o=c}return r}function T_(n){let e=n[Ae],t=e.type;return t===2?e.declTNode:t===1?n[ni]:null}function JC(){return Es(In(),Rt())}function Es(n,e){return new Qa(Ii(n,e))}var Qa=(()=>{class n{nativeElement;constructor(t){this.nativeElement=t}static __NG_ELEMENT_ID__=JC}return n})();function QC(n){return n instanceof Qa?n.nativeElement:n}function eI(){return this._results[Symbol.iterator]()}var Su=class{_emitDistinctChangesOnly;dirty=!0;_onDirty=void 0;_results=[];_changesDetected=!1;_changes=void 0;length=0;first=void 0;last=void 0;get changes(){return this._changes??=new Zt}constructor(e=!1){this._emitDistinctChangesOnly=e}get(e){return this._results[e]}map(e){return this._results.map(e)}filter(e){return this._results.filter(e)}find(e){return this._results.find(e)}reduce(e,t){return this._results.reduce(e,t)}forEach(e){this._results.forEach(e)}some(e){return this._results.some(e)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(e,t){this.dirty=!1;let i=K0(e);(this._changesDetected=!Z0(this._results,i,t))&&(this._results=i,this.length=i.length,this.last=i[this.length-1],this.first=i[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.next(this)}onDirty(e){this._onDirty=e}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}[Symbol.iterator]=eI},w_="ngSkipHydration",tI="ngskiphydration";function C_(n){let e=n.mergedAttrs;if(e===null)return!1;for(let t=0;t<e.length;t+=2){let i=e[t];if(typeof i=="number")return!1;if(typeof i=="string"&&i.toLowerCase()===tI)return!0}return!1}function I_(n){return n.hasAttribute(w_)}function Mu(n){return(n.flags&128)===128}function A_(n){if(Mu(n))return!0;let e=n.parent;for(;e;){if(Mu(n)||C_(e))return!0;e=e.parent}return!1}var Um=(function(n){return n[n.OnPush=0]="OnPush",n[n.Default=1]="Default",n})(Um||{}),R_=new Map,nI=0;function iI(){return nI++}function rI(n){R_.set(n[Pa],n)}function hm(n){R_.delete(n[Pa])}var Lx="__ngContext__";function qa(n,e){ri(e)?(n[Lx]=e[Pa],rI(e)):n[Lx]=e}function D_(n){return P_(n[ds])}function N_(n){return P_(n[ti])}function P_(n){for(;n!==null&&!Hn(n);)n=n[ti];return n}var pm;function Bm(n){pm=n}function ec(){if(pm!==void 0)return pm;if(typeof document<"u")return document;throw new Ee(210,!1)}var Di=new _e("",{providedIn:"root",factory:()=>oI}),oI="ng",Uu=new _e(""),tc=new _e("",{providedIn:"platform",factory:()=>"unknown"});var Bu=new _e("",{providedIn:"root",factory:()=>ec().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});function sI(){let n=new Eo;return n.store=aI(ec(),Y(Di)),n}var Eo=(()=>{class n{static \u0275prov=Le({token:n,providedIn:"root",factory:sI});store={};onSerializeCallbacks={};get(t,i){return this.store[t]!==void 0?this.store[t]:i}set(t,i){this.store[t]=i}remove(t){delete this.store[t]}hasKey(t){return this.store.hasOwnProperty(t)}get isEmpty(){return Object.keys(this.store).length===0}onSerialize(t,i){this.onSerializeCallbacks[t]=i}toJson(){for(let t in this.onSerializeCallbacks)if(this.onSerializeCallbacks.hasOwnProperty(t))try{this.store[t]=this.onSerializeCallbacks[t]()}catch(i){console.warn("Exception in onSerialize callback: ",i)}return JSON.stringify(this.store).replace(/</g,"\\u003C")}}return n})();function aI(n,e){let t=n.getElementById(e+"-state");if(t?.textContent)try{return JSON.parse(t.textContent)}catch(i){console.warn("Exception while restoring TransferState for app "+e,i)}return{}}var O_="h",L_="b",cI="f",lI="n",F_="e",k_="t",Vu="c",Vm="x",Xa="r",U_="i",B_="n",Hm="d";var V_="di",H_="s",z_="p";var nc=new _e(""),G_=!1,zm=new _e("",{providedIn:"root",factory:()=>G_});var Gm=new _e(""),j_=!1,W_=new _e(""),jm=new _e("",{providedIn:"root",factory:()=>new Map});var ic="ngb";var $_=(n,e,t)=>{let i=n,r=i.__jsaction_fns??new Map,o=r.get(e)??[];o.push(t),r.set(e,o),i.__jsaction_fns=r},q_=(n,e)=>{let t=n,i=t.getAttribute(ic)??"",r=e.get(i)??new Set;r.has(t)||r.add(t),e.set(i,r)};var X_=n=>{n.removeAttribute(du.JSACTION),n.removeAttribute(ic),n.__jsaction_fns=void 0},Y_=new _e("",{providedIn:"root",factory:()=>({})});function Wm(n,e){let t=e?.__jsaction_fns?.get(n.type);if(!(!t||!e?.isConnected))for(let i of t)i(n)}var mm=new Map;function Z_(n,e){return mm.set(n,e),()=>mm.delete(n)}var Fx=!1,K_=(n,e,t,i)=>{};function uI(n,e,t,i){K_(n,e,t,i)}function J_(){Fx||(K_=(n,e,t,i)=>{let r=n[ii].get(Di);mm.get(r)?.(e,t,i)},Fx=!0)}var Hu=new _e("");function zu(n){return(n.flags&32)===32}var dI="__nghData__",$m=dI,fI="__nghDeferData__",Q_=fI;var mu="ngh",eb="nghm",tb=()=>null;function hI(n,e,t=!1){let i=n.getAttribute(mu);if(i==null)return null;let[r,o]=i.split("|");if(i=t?o:r,!i)return null;let s=o?`|${o}`:"",a=t?r:s,c={};if(i!==""){let u=e.get(Eo,null,{optional:!0});u!==null&&(c=u.get($m,[])[Number(i)])}let l={data:c,firstChild:n.firstChild??null};return t&&(l.firstChild=n,Gu(l,0,n.nextSibling)),a?n.setAttribute(mu,a):n.removeAttribute(mu),l}function nb(){tb=hI}function ib(n,e,t=!1){return tb(n,e,t)}function rb(n){let e=n._lView;return e[Ae].type===2?null:(yo(e)&&(e=e[kt]),e)}function pI(n){return n.textContent?.replace(/\s/gm,"")}function mI(n){let e=ec(),t=e.createNodeIterator(n,NodeFilter.SHOW_COMMENT,{acceptNode(o){let s=pI(o);return s==="ngetn"||s==="ngtns"?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),i,r=[];for(;i=t.nextNode();)r.push(i);for(let o of r)o.textContent==="ngetn"?o.replaceWith(e.createTextNode("")):o.remove()}function Gu(n,e,t){n.segmentHeads??={},n.segmentHeads[e]=t}function gm(n,e){return n.segmentHeads?.[e]??null}function ob(n){return n.get(W_,!1,{optional:!0})}function gI(n,e){let t=n.data,i=t[F_]?.[e]??null;return i===null&&t[Vu]?.[e]&&(i=qm(n,e)),i}function sb(n,e){return n.data[Vu]?.[e]??null}function qm(n,e){let t=sb(n,e)??[],i=0;for(let r of t)i+=r[Xa]*(r[Vm]??1);return i}function vI(n){if(typeof n.disconnectedNodes>"u"){let e=n.data[Hm];n.disconnectedNodes=e?new Set(e):null}return n.disconnectedNodes}function ab(n,e){if(typeof n.disconnectedNodes>"u"){let t=n.data[Hm];n.disconnectedNodes=t?new Set(t):null}return!!vI(n)?.has(e)}function ju(n,e){let t=n[Bn];return t!==null&&!zp()&&!zu(e)&&!ab(t,e.index-kt)}function yI(n,e){let t=e.get(Hu),r=e.get(Eo).get(Q_,{}),o=!1,s=n,a=null,c=[];for(;!o&&s;){o=t.has(s);let l=t.hydrating.get(s);if(a===null&&l!=null){a=l.promise;break}c.unshift(s),s=r[s][z_]}return{parentBlockPromise:a,hydrationQueue:c}}function sm(n){return!!n&&n.nodeType===Node.COMMENT_NODE&&n.textContent?.trim()===eb}function kx(n){for(;n&&n.nodeType===Node.TEXT_NODE;)n=n.previousSibling;return n}function cb(n){for(let i of n.body.childNodes)if(sm(i))return;let e=kx(n.body.previousSibling);if(sm(e))return;let t=kx(n.head.lastChild);if(!sm(t))throw new Ee(-507,!1)}function lb(n,e){let t=n.contentQueries;if(t!==null){let i=Xe(null);try{for(let r=0;r<t.length;r+=2){let o=t[r],s=t[r+1];if(s!==-1){let a=n.data[s];ru(o),a.contentQueries(2,e[s],s)}}}finally{Xe(i)}}}function vm(n,e,t){ru(0);let i=Xe(null);try{e(n,t)}finally{Xe(i)}}function ub(n,e,t){if(Lp(e)){let i=Xe(null);try{let r=e.directiveStart,o=e.directiveEnd;for(let s=r;s<o;s++){let a=n.data[s];if(a.contentQueries){let c=t[s];a.contentQueries(1,c,s)}}}finally{Xe(i)}}}var Zi=(function(n){return n[n.Emulated=0]="Emulated",n[n.None=2]="None",n[n.ShadowDom=3]="ShadowDom",n})(Zi||{});var xI=/^>|^->|<!--|-->|--!>|<!-$/g,_I=/(<|>)/g,bI="\u200B$1\u200B";function EI(n){return n.replace(xI,e=>e.replace(_I,bI))}function Xm(n){return n.ownerDocument.defaultView}function db(n){return n.ownerDocument.body}function fb(n){return n instanceof Function?n():n}function SI(n,e,t){let i=n.length;for(;;){let r=n.indexOf(e,t);if(r===-1)return r;if(r===0||n.charCodeAt(r-1)<=32){let o=e.length;if(r+o===i||n.charCodeAt(r+o)<=32)return r}t=r+1}}var hb="ng-template";function MI(n,e,t,i){let r=0;if(i){for(;r<e.length&&typeof e[r]=="string";r+=2)if(e[r]==="class"&&SI(e[r+1].toLowerCase(),t,0)!==-1)return!0}else if(Ym(n))return!1;if(r=e.indexOf(1,r),r>-1){let o;for(;++r<e.length&&typeof(o=e[r])=="string";)if(o.toLowerCase()===t)return!0}return!1}function Ym(n){return n.type===4&&n.value!==hb}function TI(n,e,t){let i=n.type===4&&!t?hb:n.value;return e===i}function wI(n,e,t){let i=4,r=n.attrs,o=r!==null?AI(r):0,s=!1;for(let a=0;a<e.length;a++){let c=e[a];if(typeof c=="number"){if(!s&&!vi(i)&&!vi(c))return!1;if(s&&vi(c))continue;s=!1,i=c|i&1;continue}if(!s)if(i&4){if(i=2|i&1,c!==""&&!TI(n,c,t)||c===""&&e.length===1){if(vi(i))return!1;s=!0}}else if(i&8){if(r===null||!MI(n,r,c,t)){if(vi(i))return!1;s=!0}}else{let l=e[++a],u=CI(c,r,Ym(n),t);if(u===-1){if(vi(i))return!1;s=!0;continue}if(l!==""){let d;if(u>o?d="":d=r[u+1].toLowerCase(),i&2&&l!==d){if(vi(i))return!1;s=!0}}}}return vi(i)||s}function vi(n){return(n&1)===0}function CI(n,e,t,i){if(e===null)return-1;let r=0;if(i||!t){let o=!1;for(;r<e.length;){let s=e[r];if(s===n)return r;if(s===3||s===6)o=!0;else if(s===1||s===2){let a=e[++r];for(;typeof a=="string";)a=e[++r];continue}else{if(s===4)break;if(s===0){r+=4;continue}}r+=o?1:2}return-1}else return RI(e,n)}function II(n,e,t=!1){for(let i=0;i<e.length;i++)if(wI(n,e[i],t))return!0;return!1}function AI(n){for(let e=0;e<n.length;e++){let t=n[e];if(HC(t))return e}return n.length}function RI(n,e){let t=n.indexOf(4);if(t>-1)for(t++;t<n.length;){let i=n[t];if(typeof i=="number")return-1;if(i===e)return t;t++}return-1}function Ux(n,e){return n?":not("+e.trim()+")":e}function DI(n){let e=n[0],t=1,i=2,r="",o=!1;for(;t<n.length;){let s=n[t];if(typeof s=="string")if(i&2){let a=n[++t];r+="["+s+(a.length>0?'="'+a+'"':"")+"]"}else i&8?r+="."+s:i&4&&(r+=" "+s);else r!==""&&!vi(s)&&(e+=Ux(o,r),r=""),i=s,o=o||!vi(i);t++}return r!==""&&(e+=Ux(o,r)),e}function NI(n){return n.map(DI).join(",")}function PI(n){let e=[],t=[],i=1,r=2;for(;i<n.length;){let o=n[i];if(typeof o=="string")r===2?o!==""&&e.push(o,n[++i]):r===8&&t.push(o);else{if(!vi(r))break;r=o}i++}return t.length&&e.push(1,...t),e}var Ss={};function pb(n,e){return n.createText(e)}function OI(n,e,t){n.setValue(e,t)}function mb(n,e){return n.createComment(EI(e))}function Zm(n,e,t){return n.createElement(e,t)}function Tu(n,e,t,i,r){n.insertBefore(e,t,i,r)}function gb(n,e,t){n.appendChild(e,t)}function Bx(n,e,t,i,r){i!==null?Tu(n,e,t,i,r):gb(n,e,t)}function Km(n,e,t,i){n.removeChild(null,e,t,i)}function vb(n){n.textContent=""}function LI(n,e,t){n.setAttribute(e,"style",t)}function FI(n,e,t){t===""?n.removeAttribute(e,"class"):n.setAttribute(e,"class",t)}function yb(n,e,t){let{mergedAttrs:i,classes:r,styles:o}=t;i!==null&&VC(n,e,i),r!==null&&FI(n,e,r),o!==null&&LI(n,e,o)}function xb(n,e,t,i,r,o,s,a,c,l,u){let d=kt+i,f=d+r,h=kI(d,f),g=typeof l=="function"?l():l;return h[Ae]={type:n,blueprint:h,template:t,queries:null,viewQuery:a,declTNode:e,data:h.slice().fill(null,d),bindingStartIndex:d,expandoStartIndex:f,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof o=="function"?o():o,pipeRegistry:typeof s=="function"?s():s,firstChild:null,schemas:c,consts:g,incompleteFirstPass:!1,ssrId:u}}function kI(n,e){let t=[];for(let i=0;i<e;i++)t.push(i<n?null:Ss);return t}function UI(n){let e=n.tView;return e===null||e.incompleteFirstPass?n.tView=xb(1,null,n.template,n.decls,n.vars,n.directiveDefs,n.pipeDefs,n.viewQuery,n.schemas,n.consts,n.id):e}function Jm(n,e,t,i,r,o,s,a,c,l,u){let d=e.blueprint.slice();return d[gn]=r,d[je]=i|4|128|8|64|1024,(l!==null||n&&n[je]&2048)&&(d[je]|=2048),Fp(d),d[Ft]=d[fs]=n,d[vn]=t,d[qi]=s||n&&n[qi],d[Ct]=a||n&&n[Ct],d[ii]=c||n&&n[ii]||null,d[ni]=o,d[Pa]=iI(),d[Bn]=u,d[Op]=l,d[Cn]=e.type==2?n[Cn]:d,d}function BI(n,e,t){let i=Ii(e,n),r=UI(t),o=n[qi].rendererFactory,s=Eb(n,Jm(n,r,null,_b(t),i,e,null,o.createRenderer(i,t),null,null,null));return n[e.index]=s}function _b(n){let e=16;return n.signals?e=4096:n.onPush&&(e=64),e}function bb(n,e,t,i){if(t===0)return-1;let r=e.length;for(let o=0;o<t;o++)e.push(i),n.blueprint.push(i),n.data.push(null);return r}function Eb(n,e){return n[ds]?n[Pp][ti]=e:n[ds]=e,n[Pp]=e,e}function Qm(n=1){Sb(Tr(),Rt(),au()+n,!1)}function Sb(n,e,t,i){if(!i)if((e[je]&3)===3){let o=n.preOrderCheckHooks;o!==null&&fu(e,o,t)}else{let o=n.preOrderHooks;o!==null&&hu(e,o,0,t)}wr(t)}var Wu=(function(n){return n[n.None=0]="None",n[n.SignalBased=1]="SignalBased",n[n.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",n})(Wu||{});function ym(n,e,t,i){let r=Xe(null);try{let[o,s,a]=n.inputs[t],c=null;(s&Wu.SignalBased)!==0&&(c=e[o][En]),c!==null&&c.transformFn!==void 0?i=c.transformFn(i):a!==null&&(i=a.call(e,i)),n.setInput!==null?n.setInput(e,c,i,t,o):d_(e,c,o,i)}finally{Xe(r)}}var So=(function(n){return n[n.Important=1]="Important",n[n.DashCase=2]="DashCase",n})(So||{}),VI;function eg(n,e){return VI(n,e)}var xs=new Set,$u=(function(n){return n[n.CHANGE_DETECTION=0]="CHANGE_DETECTION",n[n.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",n})($u||{}),Mo=new _e(""),Vx=new Set;function Ki(n){Vx.has(n)||(Vx.add(n),performance?.mark?.("mark_feature_usage",{detail:{feature:n}}))}var Mb=!1,xm=class extends Zt{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(e=!1){super(),this.__isAsync=e,ix()&&(this.destroyRef=Y(Yi,{optional:!0})??void 0,this.pendingTasks=Y(gi,{optional:!0})??void 0)}emit(e){let t=Xe(null);try{super.next(e)}finally{Xe(t)}}subscribe(e,t,i){let r=e,o=t||(()=>null),s=i;if(e&&typeof e=="object"){let c=e;r=c.next?.bind(c),o=c.error?.bind(c),s=c.complete?.bind(c)}this.__isAsync&&(o=this.wrapInTimeout(o),r&&(r=this.wrapInTimeout(r)),s&&(s=this.wrapInTimeout(s)));let a=super.subscribe({next:r,error:o,complete:s});return e instanceof Vt&&e.add(a),a}wrapInTimeout(e){return t=>{let i=this.pendingTasks?.add();setTimeout(()=>{try{e(t)}finally{i!==void 0&&this.pendingTasks?.remove(i)}})}}},yn=xm;function Tb(n){let e,t;function i(){n=Ga;try{t!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(t),e!==void 0&&clearTimeout(e)}catch{}}return e=setTimeout(()=>{n(),i()}),typeof requestAnimationFrame=="function"&&(t=requestAnimationFrame(()=>{n(),i()})),()=>i()}function Hx(n){return queueMicrotask(()=>n()),()=>{n=Ga}}var tg="isAngularZone",wu=tg+"_ID",HI=0,Ot=class n{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new yn(!1);onMicrotaskEmpty=new yn(!1);onStable=new yn(!1);onError=new yn(!1);constructor(e){let{enableLongStackTrace:t=!1,shouldCoalesceEventChangeDetection:i=!1,shouldCoalesceRunChangeDetection:r=!1,scheduleInRootZone:o=Mb}=e;if(typeof Zone>"u")throw new Ee(908,!1);Zone.assertZonePatched();let s=this;s._nesting=0,s._outer=s._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(s._inner=s._inner.fork(new Zone.TaskTrackingZoneSpec)),t&&Zone.longStackTraceZoneSpec&&(s._inner=s._inner.fork(Zone.longStackTraceZoneSpec)),s.shouldCoalesceEventChangeDetection=!r&&i,s.shouldCoalesceRunChangeDetection=r,s.callbackScheduled=!1,s.scheduleInRootZone=o,jI(s)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(tg)===!0}static assertInAngularZone(){if(!n.isInAngularZone())throw new Ee(909,!1)}static assertNotInAngularZone(){if(n.isInAngularZone())throw new Ee(909,!1)}run(e,t,i){return this._inner.run(e,t,i)}runTask(e,t,i,r){let o=this._inner,s=o.scheduleEventTask("NgZoneEvent: "+r,e,zI,Ga,Ga);try{return o.runTask(s,t,i)}finally{o.cancelTask(s)}}runGuarded(e,t,i){return this._inner.runGuarded(e,t,i)}runOutsideAngular(e){return this._outer.run(e)}},zI={};function ng(n){if(n._nesting==0&&!n.hasPendingMicrotasks&&!n.isStable)try{n._nesting++,n.onMicrotaskEmpty.emit(null)}finally{if(n._nesting--,!n.hasPendingMicrotasks)try{n.runOutsideAngular(()=>n.onStable.emit(null))}finally{n.isStable=!0}}}function GI(n){if(n.isCheckStableRunning||n.callbackScheduled)return;n.callbackScheduled=!0;function e(){Tb(()=>{n.callbackScheduled=!1,_m(n),n.isCheckStableRunning=!0,ng(n),n.isCheckStableRunning=!1})}n.scheduleInRootZone?Zone.root.run(()=>{e()}):n._outer.run(()=>{e()}),_m(n)}function jI(n){let e=()=>{GI(n)},t=HI++;n._inner=n._inner.fork({name:"angular",properties:{[tg]:!0,[wu]:t,[wu+t]:!0},onInvokeTask:(i,r,o,s,a,c)=>{if(WI(c))return i.invokeTask(o,s,a,c);try{return zx(n),i.invokeTask(o,s,a,c)}finally{(n.shouldCoalesceEventChangeDetection&&s.type==="eventTask"||n.shouldCoalesceRunChangeDetection)&&e(),Gx(n)}},onInvoke:(i,r,o,s,a,c,l)=>{try{return zx(n),i.invoke(o,s,a,c,l)}finally{n.shouldCoalesceRunChangeDetection&&!n.callbackScheduled&&!$I(c)&&e(),Gx(n)}},onHasTask:(i,r,o,s)=>{i.hasTask(o,s),r===o&&(s.change=="microTask"?(n._hasPendingMicrotasks=s.microTask,_m(n),ng(n)):s.change=="macroTask"&&(n.hasPendingMacrotasks=s.macroTask))},onHandleError:(i,r,o,s)=>(i.handleError(o,s),n.runOutsideAngular(()=>n.onError.emit(s)),!1)})}function _m(n){n._hasPendingMicrotasks||(n.shouldCoalesceEventChangeDetection||n.shouldCoalesceRunChangeDetection)&&n.callbackScheduled===!0?n.hasPendingMicrotasks=!0:n.hasPendingMicrotasks=!1}function zx(n){n._nesting++,n.isStable&&(n.isStable=!1,n.onUnstable.emit(null))}function Gx(n){n._nesting--,ng(n)}var Ya=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new yn;onMicrotaskEmpty=new yn;onStable=new yn;onError=new yn;run(e,t,i){return e.apply(t,i)}runGuarded(e,t,i){return e.apply(t,i)}runOutsideAngular(e){return e()}runTask(e,t,i,r){return e.apply(t,i)}};function WI(n){return wb(n,"__ignore_ng_zone__")}function $I(n){return wb(n,"__scheduler_tick__")}function wb(n,e){return!Array.isArray(n)||n.length!==1?!1:n[0]?.data?.[e]===!0}var ig=(()=>{class n{impl=null;execute(){this.impl?.execute()}static \u0275prov=Le({token:n,providedIn:"root",factory:()=>new n})}return n})(),Cb=[0,1,2,3],Ib=(()=>{class n{ngZone=Y(Ot);scheduler=Y(Ti);errorHandler=Y(hi,{optional:!0});sequences=new Set;deferredRegistrations=new Set;executing=!1;constructor(){Y(Mo,{optional:!0})}execute(){let t=this.sequences.size>0;t&&mt(16),this.executing=!0;for(let i of Cb)for(let r of this.sequences)if(!(r.erroredOrDestroyed||!r.hooks[i]))try{r.pipelinedValue=this.ngZone.runOutsideAngular(()=>this.maybeTrace(()=>{let o=r.hooks[i];return o(r.pipelinedValue)},r.snapshot))}catch(o){r.erroredOrDestroyed=!0,this.errorHandler?.handleError(o)}this.executing=!1;for(let i of this.sequences)i.afterRun(),i.once&&(this.sequences.delete(i),i.destroy());for(let i of this.deferredRegistrations)this.sequences.add(i);this.deferredRegistrations.size>0&&this.scheduler.notify(7),this.deferredRegistrations.clear(),t&&mt(17)}register(t){let{view:i}=t;i!==void 0?((i[mo]??=[]).push(t),hs(i),i[je]|=8192):this.executing?this.deferredRegistrations.add(t):this.addSequence(t)}addSequence(t){this.sequences.add(t),this.scheduler.notify(7)}unregister(t){this.executing&&this.sequences.has(t)?(t.erroredOrDestroyed=!0,t.pipelinedValue=void 0,t.once=!0):(this.sequences.delete(t),this.deferredRegistrations.delete(t))}maybeTrace(t,i){return i?i.run($u.AFTER_NEXT_RENDER,t):t()}static \u0275prov=Le({token:n,providedIn:"root",factory:()=>new n})}return n})(),Cu=class{impl;hooks;view;once;snapshot;erroredOrDestroyed=!1;pipelinedValue=void 0;unregisterOnDestroy;constructor(e,t,i,r,o,s=null){this.impl=e,this.hooks=t,this.view=i,this.once=r,this.snapshot=s,this.unregisterOnDestroy=o?.onDestroy(()=>this.destroy())}afterRun(){this.erroredOrDestroyed=!1,this.pipelinedValue=void 0,this.snapshot?.dispose(),this.snapshot=null}destroy(){this.impl.unregister(this),this.unregisterOnDestroy?.();let e=this.view?.[mo];e&&(this.view[mo]=e.filter(t=>t!==this))}};function rg(n,e){let t=e?.injector??Y(Un);return Ki("NgAfterNextRender"),XI(n,t,e,!0)}function qI(n){return n instanceof Function?[void 0,void 0,n,void 0]:[n.earlyRead,n.write,n.mixedReadWrite,n.read]}function XI(n,e,t,i){let r=e.get(ig);r.impl??=e.get(Ib);let o=e.get(Mo,null,{optional:!0}),s=t?.manualCleanup!==!0?e.get(Yi):null,a=e.get(cu,null,{optional:!0}),c=new Cu(r.impl,qI(n),a?.view,i,s,o?.snapshot(null));return r.impl.register(c),c}var YI=new _e("",{providedIn:"root",factory:()=>({queue:new Set,isScheduled:!1,scheduler:null})});function Ab(n,e,t){let i=n.get(YI);if(Array.isArray(e))for(let r of e)i.queue.add(r),t?.detachedLeaveAnimationFns?.push(r);else i.queue.add(e),t?.detachedLeaveAnimationFns?.push(e);i.scheduler&&i.scheduler(n)}function ZI(n,e){for(let[t,i]of e)Ab(n,i.animateFns)}function jx(n,e,t,i){let r=n?.[La]?.enter;e!==null&&r&&r.has(t.index)&&ZI(i,r)}function ms(n,e,t,i,r,o,s,a){if(r!=null){let c,l=!1;Hn(r)?c=r:ri(r)&&(l=!0,r=r[gn]);let u=zn(r);n===0&&i!==null?(jx(a,i,o,t),s==null?gb(e,i,u):Tu(e,i,u,s||null,!0)):n===1&&i!==null?(jx(a,i,o,t),Tu(e,i,u,s||null,!0)):n===2?Wx(a,o,t,d=>{Km(e,u,l,d)}):n===3&&Wx(a,o,t,()=>{e.destroyNode(u)}),c!=null&&lA(e,n,t,c,o,i,s)}}function KI(n,e){Rb(n,e),e[gn]=null,e[ni]=null}function JI(n,e,t,i,r,o){i[gn]=r,i[ni]=e,qu(n,i,t,1,r,o)}function Rb(n,e){e[qi].changeDetectionScheduler?.notify(9),qu(n,e,e[Ct],2,null,null)}function QI(n){let e=n[ds];if(!e)return am(n[Ae],n);for(;e;){let t=null;if(ri(e))t=e[ds];else{let i=e[un];i&&(t=i)}if(!t){for(;e&&!e[ti]&&e!==n;)ri(e)&&am(e[Ae],e),e=e[Ft];e===null&&(e=n),ri(e)&&am(e[Ae],e),t=e&&e[ti]}e=t}}function og(n,e){let t=n[go],i=t.indexOf(e);t.splice(i,1)}function sg(n,e){if(Mr(e))return;let t=e[Ct];t.destroyNode&&qu(n,e,t,3,null,null),QI(e)}function am(n,e){if(Mr(e))return;let t=Xe(null);try{e[je]&=-129,e[je]|=256,e[Vn]&&ba(e[Vn]),nA(n,e),tA(n,e),e[Ae].type===1&&e[Ct].destroy();let i=e[Er];if(i!==null&&Hn(e[Ft])){i!==e[Ft]&&og(i,e);let r=e[wi];r!==null&&r.detachView(n)}hm(e)}finally{Xe(t)}}function Wx(n,e,t,i){let r=n?.[La];if(r==null||r.leave==null||!r.leave.has(e.index))return i(!1);n&&xs.add(n),Ab(t,()=>{if(r.leave&&r.leave.has(e.index)){let s=r.leave.get(e.index),a=[];if(s){for(let c=0;c<s.animateFns.length;c++){let l=s.animateFns[c],{promise:u}=l();a.push(u)}r.detachedLeaveAnimationFns=void 0}r.running=Promise.allSettled(a),eA(n,i)}else n&&xs.delete(n),i(!1)},r)}function eA(n,e){let t=n[La]?.running;if(t){t.then(()=>{n[La].running=void 0,xs.delete(n),e(!0)});return}e(!1)}function tA(n,e){let t=n.cleanup,i=e[us];if(t!==null)for(let s=0;s<t.length-1;s+=2)if(typeof t[s]=="string"){let a=t[s+3];a>=0?i[a]():i[-a].unsubscribe(),s+=2}else{let a=i[t[s+1]];t[s].call(a)}i!==null&&(e[us]=null);let r=e[Wi];if(r!==null){e[Wi]=null;for(let s=0;s<r.length;s++){let a=r[s];a()}}let o=e[Oa];if(o!==null){e[Oa]=null;for(let s of o)s.destroy()}}function nA(n,e){let t;if(n!=null&&(t=n.destroyHooks)!=null)for(let i=0;i<t.length;i+=2){let r=e[t[i]];if(!(r instanceof $a)){let o=t[i+1];if(Array.isArray(o))for(let s=0;s<o.length;s+=2){let a=r[o[s]],c=o[s+1];mt(4,a,c);try{c.call(a)}finally{mt(5,a,c)}}else{mt(4,r,o);try{o.call(r)}finally{mt(5,r,o)}}}}}function iA(n,e,t){return rA(n,e.parent,t)}function rA(n,e,t){let i=e;for(;i!==null&&i.type&168;)e=i,i=e.parent;if(i===null)return t[gn];if(Sr(i)){let{encapsulation:r}=n.data[i.directiveStart+i.componentOffset];if(r===Zi.None||r===Zi.Emulated)return null}return Ii(i,t)}function oA(n,e,t){return aA(n,e,t)}function sA(n,e,t){return n.type&40?Ii(n,t):null}var aA=sA,$x;function Db(n,e,t,i){let r=iA(n,i,e),o=e[Ct],s=i.parent||e[ni],a=oA(s,i,e);if(r!=null)if(Array.isArray(t))for(let c=0;c<t.length;c++)Bx(o,r,t[c],a,!1);else Bx(o,r,t,a,!1);$x!==void 0&&$x(o,i,e,t,r)}function ja(n,e){if(e!==null){let t=e.type;if(t&3)return Ii(e,n);if(t&4)return bm(-1,n[e.index]);if(t&8){let i=e.child;if(i!==null)return ja(n,i);{let r=n[e.index];return Hn(r)?bm(-1,r):zn(r)}}else{if(t&128)return ja(n,e.next);if(t&32)return eg(e,n)()||zn(n[e.index]);{let i=Nb(n,e);if(i!==null){if(Array.isArray(i))return i[0];let r=_r(n[Cn]);return ja(r,i)}else return ja(n,e.next)}}}return null}function Nb(n,e){if(e!==null){let i=n[Cn][ni],r=e.projection;return i.projection[r]}return null}function bm(n,e){let t=un+n+1;if(t<e.length){let i=e[t],r=i[Ae].firstChild;if(r!==null)return ja(i,r)}return e[Ci]}function ag(n,e,t,i,r,o,s){for(;t!=null;){let a=i[ii];if(t.type===128){t=t.next;continue}let c=i[t.index],l=t.type;if(s&&e===0&&(c&&qa(zn(c),i),t.flags|=2),!zu(t))if(l&8)ag(n,e,t.child,i,r,o,!1),ms(e,n,a,r,c,t,o,i);else if(l&32){let u=eg(t,i),d;for(;d=u();)ms(e,n,a,r,d,t,o,i);ms(e,n,a,r,c,t,o,i)}else l&16?cA(n,e,i,t,r,o):ms(e,n,a,r,c,t,o,i);t=s?t.projectionNext:t.next}}function qu(n,e,t,i,r,o){ag(t,i,n.firstChild,e,r,o,!1)}function cA(n,e,t,i,r,o){let s=t[Cn],c=s[ni].projection[i.projection];if(Array.isArray(c))for(let l=0;l<c.length;l++){let u=c[l];ms(e,n,t[ii],r,u,i,o,t)}else{let l=c,u=s[Ft];Mu(i)&&(l.flags|=128),ag(n,e,l,u,r,o,!0)}}function lA(n,e,t,i,r,o,s){let a=i[Ci],c=zn(i);a!==c&&ms(e,n,t,o,a,r,s);for(let l=un;l<i.length;l++){let u=i[l];qu(u[Ae],u,n,e,o,a)}}function Pb(n,e,t,i,r){let o=au(),s=i&2;try{wr(-1),s&&e.length>kt&&Sb(n,e,kt,!1),mt(s?2:0,r,t),t(i,r)}finally{wr(o),mt(s?3:1,r,t)}}function Ob(n,e,t){hA(n,e,t),(t.flags&64)===64&&pA(n,e,t)}function Lb(n,e,t=Ii){let i=e.localNames;if(i!==null){let r=e.index+1;for(let o=0;o<i.length;o+=2){let s=i[o+1],a=s===-1?t(e,n):n[s];n[r++]=a}}}function uA(n,e,t,i){let o=i.get(zm,G_)||t===Zi.ShadowDom,s=n.selectRootElement(e,o);return dA(s),s}function dA(n){Fb(n)}var Fb=()=>null;function fA(n){I_(n)?vb(n):mI(n)}function kb(){Fb=fA}function hA(n,e,t){let i=t.directiveStart,r=t.directiveEnd;Sr(t)&&BI(e,t,n.data[i+t.componentOffset]),n.firstCreatePass||x_(t,e);let o=t.initialInputs;for(let s=i;s<r;s++){let a=n.data[s],c=Eu(e,n,s,t);if(qa(c,e),o!==null&&vA(e,s-i,c,a,t,o),vo(a)){let l=Ai(t.index,e);l[vn]=Eu(e,n,s,t)}}}function pA(n,e,t){let i=t.directiveStart,r=t.directiveEnd,o=t.index,s=Ex();try{wr(o);for(let a=i;a<r;a++){let c=n.data[a],l=e[a];iu(a),(c.hostBindings!==null||c.hostVars!==0||c.hostAttrs!==null)&&mA(c,l)}}finally{wr(-1),iu(s)}}function mA(n,e){n.hostBindings!==null&&n.hostBindings(1,e)}function gA(n,e){let t=n.directiveRegistry,i=null;if(t)for(let r=0;r<t.length;r++){let o=t[r];II(e,o.selectors,!1)&&(i??=[],vo(o)?i.unshift(o):i.push(o))}return i}function vA(n,e,t,i,r,o){let s=o[e];if(s!==null)for(let a=0;a<s.length;a+=2){let c=s[a],l=s[a+1];ym(i,t,c,l)}}function Ub(n,e,t,i,r){let o=kt+t,s=e[Ae],a=r(s,e,n,i,t);e[o]=a,za(n,!0);let c=n.type===2;return c?(yb(e[Ct],a,n),(fx()===0||eu(n))&&qa(a,e),hx()):qa(a,e),Qp()&&(!c||!zu(n))&&Db(s,e,a,n),n}function Bb(n){let e=n;return $p()?vx():(e=e.parent,za(e,!1)),e}function cg(n,e){let t=n[ii];if(!t)return;let i;try{i=t.get(Gn,null)}catch{i=null}i?.(e)}function Vb(n,e,t,i,r){let o=n.inputs?.[i],s=n.hostDirectiveInputs?.[i],a=!1;if(s)for(let c=0;c<s.length;c+=2){let l=s[c],u=s[c+1],d=e.data[l];ym(d,t[l],u,r),a=!0}if(o)for(let c of o){let l=t[c],u=e.data[c];ym(u,l,i,r),a=!0}return a}function yA(n,e){let t=Ai(e,n),i=t[Ae];xA(i,t);let r=t[gn];r!==null&&t[Bn]===null&&(t[Bn]=ib(r,t[ii])),mt(18),lg(i,t,t[vn]),mt(19,t[vn])}function xA(n,e){for(let t=e.length;t<n.blueprint.length;t++)e.push(n.blueprint[t])}function lg(n,e,t){ou(e);try{let i=n.viewQuery;i!==null&&vm(1,i,t);let r=n.template;r!==null&&Pb(n,e,r,1,t),n.firstCreatePass&&(n.firstCreatePass=!1),e[wi]?.finishViewCreation(n),n.staticContentQueries&&lb(n,e),n.staticViewQueries&&vm(2,n.viewQuery,t);let o=n.components;o!==null&&_A(e,o)}catch(i){throw n.firstCreatePass&&(n.incompleteFirstPass=!0,n.firstCreatePass=!1),i}finally{e[je]&=-5,su()}}function _A(n,e){for(let t=0;t<e.length;t++)yA(n,e[t])}function Hb(n,e,t,i){let r=Xe(null);try{let o=e.tView,a=n[je]&4096?4096:16,c=Jm(n,o,t,a,null,e,null,null,i?.injector??null,i?.embeddedViewInjector??null,i?.dehydratedView??null),l=n[e.index];c[Er]=l;let u=n[wi];return u!==null&&(c[wi]=u.createEmbeddedView(o)),lg(o,c,t),c}finally{Xe(r)}}function Em(n,e){return!e||e.firstChild===null||Mu(n)}function Za(n,e,t,i,r=!1){for(;t!==null;){if(t.type===128){t=r?t.projectionNext:t.next;continue}let o=e[t.index];o!==null&&i.push(zn(o)),Hn(o)&&zb(o,i);let s=t.type;if(s&8)Za(n,e,t.child,i);else if(s&32){let a=eg(t,e),c;for(;c=a();)i.push(c)}else if(s&16){let a=Nb(e,t);if(Array.isArray(a))i.push(...a);else{let c=_r(e[Cn]);Za(c[Ae],c,a,i,!0)}}t=r?t.projectionNext:t.next}return i}function zb(n,e){for(let t=un;t<n.length;t++){let i=n[t],r=i[Ae].firstChild;r!==null&&Za(i[Ae],i,r,e)}n[Ci]!==n[gn]&&e.push(n[Ci])}function Gb(n){if(n[mo]!==null){for(let e of n[mo])e.impl.addSequence(e);n[mo].length=0}}var jb=[];function bA(n){return n[Vn]??EA(n)}function EA(n){let e=jb.pop()??Object.create(MA);return e.lView=n,e}function SA(n){n.lView[Vn]!==n&&(n.lView=null,jb.push(n))}var MA=Tt(me({},va),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:n=>{hs(n.lView)},consumerOnSignalRead(){this.lView[Vn]=this}});function TA(n){let e=n[Vn]??Object.create(wA);return e.lView=n,e}var wA=Tt(me({},va),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:n=>{let e=_r(n.lView);for(;e&&!Wb(e[Ae]);)e=_r(e);e&&kp(e)},consumerOnSignalRead(){this.lView[Vn]=this}});function Wb(n){return n.type!==2}function $b(n){if(n[Oa]===null)return;let e=!0;for(;e;){let t=!1;for(let i of n[Oa])i.dirty&&(t=!0,i.zone===null||Zone.current===i.zone?i.run():i.zone.run(()=>i.run()));e=t&&!!(n[je]&8192)}}var CA=100;function qb(n,e=0){let i=n[qi].rendererFactory,r=!1;r||i.begin?.();try{IA(n,e)}finally{r||i.end?.()}}function IA(n,e){let t=qp();try{Xp(!0),Sm(n,e);let i=0;for(;Ba(n);){if(i===CA)throw new Ee(103,!1);i++,Sm(n,1)}}finally{Xp(t)}}function AA(n,e,t,i){if(Mr(e))return;let r=e[je],o=!1,s=!1;ou(e);let a=!0,c=null,l=null;o||(Wb(n)?(l=bA(e),c=xa(l)):_l()===null?(a=!1,l=TA(e),c=xa(l)):e[Vn]&&(ba(e[Vn]),e[Vn]=null));try{Fp(e),yx(n.bindingStartIndex),t!==null&&Pb(n,e,t,2,i);let u=(r&3)===3;if(!o)if(u){let h=n.preOrderCheckHooks;h!==null&&fu(e,h,null)}else{let h=n.preOrderHooks;h!==null&&hu(e,h,0,null),rm(e,0)}if(s||RA(e),$b(e),Xb(e,0),n.contentQueries!==null&&lb(n,e),!o)if(u){let h=n.contentCheckHooks;h!==null&&fu(e,h)}else{let h=n.contentHooks;h!==null&&hu(e,h,1),rm(e,1)}NA(n,e);let d=n.components;d!==null&&Zb(e,d,0);let f=n.viewQuery;if(f!==null&&vm(2,f,i),!o)if(u){let h=n.viewCheckHooks;h!==null&&fu(e,h)}else{let h=n.viewHooks;h!==null&&hu(e,h,2),rm(e,2)}if(n.firstUpdatePass===!0&&(n.firstUpdatePass=!1),e[Ql]){for(let h of e[Ql])h();e[Ql]=null}o||(Gb(e),e[je]&=-73)}catch(u){throw o||hs(e),u}finally{l!==null&&(bl(l,c),a&&SA(l)),su()}}function Xb(n,e){for(let t=D_(n);t!==null;t=N_(t))for(let i=un;i<t.length;i++){let r=t[i];Yb(r,e)}}function RA(n){for(let e=D_(n);e!==null;e=N_(e)){if(!(e[je]&2))continue;let t=e[go];for(let i=0;i<t.length;i++){let r=t[i];kp(r)}}}function DA(n,e,t){mt(18);let i=Ai(e,n);Yb(i,t),mt(19,i[vn])}function Yb(n,e){tu(n)&&Sm(n,e)}function Sm(n,e){let i=n[Ae],r=n[je],o=n[Vn],s=!!(e===0&&r&16);if(s||=!!(r&64&&e===0),s||=!!(r&1024),s||=!!(o?.dirty&&_a(o)),s||=!1,o&&(o.dirty=!1),n[je]&=-9217,s)AA(i,n,i.template,n[vn]);else if(r&8192){let a=Xe(null);try{$b(n),Xb(n,1);let c=i.components;c!==null&&Zb(n,c,1),Gb(n)}finally{Xe(a)}}}function Zb(n,e,t){for(let i=0;i<e.length;i++)DA(n,e[i],t)}function NA(n,e){let t=n.hostBindingOpCodes;if(t!==null)try{for(let i=0;i<t.length;i++){let r=t[i];if(r<0)wr(~r);else{let o=r,s=t[++i],a=t[++i];bx(s,o);let c=e[o];mt(24,c),a(2,c),mt(25,c)}}}finally{wr(-1)}}function Xu(n,e){let t=qp()?64:1088;for(n[qi].changeDetectionScheduler?.notify(e);n;){n[je]|=t;let i=_r(n);if(yo(n)&&!i)return n;n=i}return null}function PA(n,e,t,i){return[n,!0,0,e,null,i,null,t,null,null]}function Kb(n,e,t,i=!0){let r=e[Ae];if(LA(r,e,n,t),i){let s=bm(t,n),a=e[Ct],c=a.parentNode(n[Ci]);c!==null&&JI(r,n[ni],a,e,c,s)}let o=e[Bn];o!==null&&o.firstChild!==null&&(o.firstChild=null)}function OA(n,e){let t=Iu(n,e);return t!==void 0&&sg(t[Ae],t),t}function Iu(n,e){if(n.length<=un)return;let t=un+e,i=n[t];if(i){let r=i[Er];r!==null&&r!==n&&og(r,i),e>0&&(n[t-1][ti]=i[ti]);let o=Ra(n,un+e);KI(i[Ae],i);let s=o[wi];s!==null&&s.detachView(o[Ae]),i[Ft]=null,i[ti]=null,i[je]&=-129}return i}function LA(n,e,t,i){let r=un+i,o=t.length;i>0&&(t[r-1][ti]=e),i<o-un?(e[ti]=t[r],Cp(t,un+i,e)):(t.push(e),e[ti]=null),e[Ft]=t;let s=e[Er];s!==null&&t!==s&&Jb(s,e);let a=e[wi];a!==null&&a.insertView(n),nu(e),e[je]|=128}function Jb(n,e){let t=n[go],i=e[Ft];if(ri(i))n[je]|=2;else{let r=i[Ft][Cn];e[Cn]!==r&&(n[je]|=2)}t===null?n[go]=[e]:t.push(e)}var Ir=class{_lView;_cdRefInjectingView;_appRef=null;_attachedToViewContainer=!1;exhaustive;get rootNodes(){let e=this._lView,t=e[Ae];return Za(t,e,t.firstChild,[])}constructor(e,t){this._lView=e,this._cdRefInjectingView=t}get context(){return this._lView[vn]}set context(e){this._lView[vn]=e}get destroyed(){return Mr(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let e=this._lView[Ft];if(Hn(e)){let t=e[Fa],i=t?t.indexOf(this):-1;i>-1&&(Iu(e,i),Ra(t,i))}this._attachedToViewContainer=!1}sg(this._lView[Ae],this._lView)}onDestroy(e){Up(this._lView,e)}markForCheck(){Xu(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[je]&=-129}reattach(){nu(this._lView),this._lView[je]|=128}detectChanges(){this._lView[je]|=1024,qb(this._lView)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new Ee(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let e=yo(this._lView),t=this._lView[Er];t!==null&&!e&&og(t,this._lView),Rb(this._lView[Ae],this._lView)}attachToAppRef(e){if(this._attachedToViewContainer)throw new Ee(902,!1);this._appRef=e;let t=yo(this._lView),i=this._lView[Er];i!==null&&!t&&Jb(i,this._lView),nu(this._lView)}};var Ka=(()=>{class n{_declarationLView;_declarationTContainer;elementRef;static __NG_ELEMENT_ID__=FA;constructor(t,i,r){this._declarationLView=t,this._declarationTContainer=i,this.elementRef=r}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(t,i){return this.createEmbeddedViewImpl(t,i)}createEmbeddedViewImpl(t,i,r){let o=Hb(this._declarationLView,this._declarationTContainer,t,{embeddedViewInjector:i,dehydratedView:r});return new Ir(o)}}return n})();function FA(){return ug(In(),Rt())}function ug(n,e){return n.type&4?new Ka(e,n,Es(n,e)):null}function dg(n,e,t,i,r){let o=n.data[e];if(o===null)o=kA(n,e,t,i,r),_x()&&(o.flags|=32);else if(o.type&64){o.type=t,o.value=i,o.attrs=r;let s=gx();o.injectorIndex=s===null?-1:s.injectorIndex}return za(o,!0),o}function kA(n,e,t,i,r){let o=Wp(),s=$p(),a=s?o:o&&o.parent,c=n.data[e]=BA(n,a,t,e,i,r);return UA(n,c,o,s),c}function UA(n,e,t,i){n.firstChild===null&&(n.firstChild=e),t!==null&&(i?t.child==null&&e.parent!==null&&(t.child=e):t.next===null&&(t.next=e,e.prev=t))}function BA(n,e,t,i,r,o){let s=e?e.injectorIndex:-1,a=0;return zp()&&(a|=128),{type:t,index:i,insertBeforeIndex:null,injectorIndex:s,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,propertyBindings:null,flags:a,providerIndexes:0,value:r,attrs:o,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:e,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}var VA=new RegExp(`^(\\d+)*(${L_}|${O_})*(.*)`);function HA(n){let e=n.match(VA),[t,i,r,o]=e,s=i?parseInt(i,10):r,a=[];for(let[c,l,u]of o.matchAll(/(f|n)(\d*)/g)){let d=parseInt(u,10)||1;a.push(l,d)}return[s,...a]}function zA(n){return!n.prev&&n.parent?.type===8}function cm(n){return n.index-kt}function GA(n,e){let t=n.i18nNodes;if(t)return t.get(e)}function Yu(n,e,t,i){let r=cm(i),o=GA(n,r);if(o===void 0){let s=n.data[B_];if(s?.[r])o=WA(s[r],t);else if(e.firstChild===i)o=n.firstChild;else{let a=i.prev===null,c=i.prev??i.parent;if(zA(i)){let l=cm(i.parent);o=gm(n,l)}else{let l=Ii(c,t);if(a)o=l.firstChild;else{let u=cm(c),d=gm(n,u);if(c.type===2&&d){let h=qm(n,u)+1;o=Zu(h,d)}else o=l.nextSibling}}}}return o}function Zu(n,e){let t=e;for(let i=0;i<n;i++)t=t.nextSibling;return t}function jA(n,e){let t=n;for(let i=0;i<e.length;i+=2){let r=e[i],o=e[i+1];for(let s=0;s<o;s++)switch(r){case cI:t=t.firstChild;break;case lI:t=t.nextSibling;break}}return t}function WA(n,e){let[t,...i]=HA(n),r;if(t===O_)r=e[Cn][gn];else if(t===L_)r=db(e[Cn][gn]);else{let o=Number(t);r=zn(e[o+kt])}return jA(r,i)}var $A=!1;function Qb(n){$A=n}function qA(n){let e=n[Bn];if(e){let{i18nNodes:t,dehydratedIcuData:i}=e;if(t&&i){let r=n[Ct];for(let o of i.values())XA(r,t,o)}e.i18nNodes=void 0,e.dehydratedIcuData=void 0}}function XA(n,e,t){for(let i of t.node.cases[t.case]){let r=e.get(i.index-kt);r&&Km(n,r,!1)}}function fg(n){let e=n[mi]??[],i=n[Ft][Ct],r=[];for(let o of e)o.data[V_]!==void 0?r.push(o):eE(o,i);n[mi]=r}function YA(n){let{lContainer:e}=n,t=e[mi];if(t===null)return;let r=e[Ft][Ct];for(let o of t)eE(o,r)}function eE(n,e){let t=0,i=n.firstChild;if(i){let r=n.data[Xa];for(;t<r;){let o=i.nextSibling;Km(e,i,!1),i=o,t++}}}function Ku(n){fg(n);let e=n[gn];ri(e)&&Au(e);for(let t=un;t<n.length;t++)Au(n[t])}function Au(n){qA(n);let e=n[Ae];for(let t=kt;t<e.bindingStartIndex;t++)if(Hn(n[t])){let i=n[t];Ku(i)}else ri(n[t])&&Au(n[t])}function hg(n){let e=n._views;for(let t of e){let i=rb(t);i!==null&&i[gn]!==null&&(ri(i)?Au(i):Ku(i))}}function ZA(n,e,t,i){n!==null&&(t.cleanup(e),Ku(n.lContainer),hg(i))}function KA(n,e){let t=[];for(let i of e)for(let r=0;r<(i[Vm]??1);r++){let o={data:i,firstChild:null};i[Xa]>0&&(o.firstChild=n,n=Zu(i[Xa],n)),t.push(o)}return[n,t]}var tE=()=>null,JA=()=>null;function nE(){tE=QA,JA=eR}function QA(n,e){return iE(n,e)?n[mi].shift():(fg(n),null)}function Mm(n,e){return tE(n,e)}function eR(n,e,t){if(e.tView.ssrId===null)return null;let i=Mm(n,e.tView.ssrId);return t[Ae].firstUpdatePass&&i===null&&tR(t,e),i}function tR(n,e){let t=e;for(;t;){if(qx(n,t))return;if((t.flags&256)===256)break;t=t.prev}for(t=e.next;t&&(t.flags&512)===512;){if(qx(n,t))return;t=t.next}}function iE(n,e){let t=n[mi];return!e||t===null||t.length===0?!1:t[0].data[U_]===e}function qx(n,e){let t=e.tView?.ssrId;if(t==null)return!1;let i=n[e.index];return Hn(i)&&iE(i,t)?(fg(i),!0):!1}var rE=class{},Ju=class{},Tm=class{resolveComponentFactory(e){throw new Ee(917,!1)}},rc=class{static NULL=new Tm},bo=class{};var oE=(()=>{class n{static \u0275prov=Le({token:n,providedIn:"root",factory:()=>null})}return n})();var gu={},vs=class{injector;parentInjector;constructor(e,t){this.injector=e,this.parentInjector=t}get(e,t,i){let r=this.injector.get(e,gu,i);return r!==gu||t===gu?r:this.parentInjector.get(e,t,i)}};function Ru(n,e,t){let i=t?n.styles:null,r=t?n.classes:null,o=0;if(e!==null)for(let s=0;s<e.length;s++){let a=e[s];if(typeof a=="number")o=a;else if(o==1)r=gp(r,a);else if(o==2){let c=a,l=e[++s];i=gp(i,c+": "+l+";")}}t?n.styles=i:n.stylesWithoutHost=i,t?n.classes=r:n.classesWithoutHost=r}function sE(n,e=0){let t=Rt();if(t===null)return Ke(n,e);let i=In();return S_(i,t,wn(n),e)}function nR(n,e,t,i,r){let o=i===null?null:{"":-1},s=r(n,t);if(s!==null){let a=s,c=null,l=null;for(let u of s)if(u.resolveHostDirectives!==null){[a,c,l]=u.resolveHostDirectives(s);break}oR(n,e,t,a,o,c,l)}o!==null&&i!==null&&iR(t,i,o)}function iR(n,e,t){let i=n.localNames=[];for(let r=0;r<e.length;r+=2){let o=t[e[r+1]];if(o==null)throw new Ee(-301,!1);i.push(e[r],o)}}function rR(n,e,t){e.componentOffset=t,(n.components??=[]).push(e.index)}function oR(n,e,t,i,r,o,s){let a=i.length,c=!1;for(let f=0;f<a;f++){let h=i[f];!c&&vo(h)&&(c=!0,rR(n,t,f)),qC(x_(t,e),n,h.type)}dR(t,n.data.length,a);for(let f=0;f<a;f++){let h=i[f];h.providersResolver&&h.providersResolver(h)}let l=!1,u=!1,d=bb(n,e,a,null);a>0&&(t.directiveToIndex=new Map);for(let f=0;f<a;f++){let h=i[f];if(t.mergedAttrs=Fm(t.mergedAttrs,h.hostAttrs),aR(n,t,e,d,h),uR(d,h,r),s!==null&&s.has(h)){let[y,m]=s.get(h);t.directiveToIndex.set(h.type,[d,y+t.directiveStart,m+t.directiveStart])}else(o===null||!o.has(h))&&t.directiveToIndex.set(h.type,d);h.contentQueries!==null&&(t.flags|=4),(h.hostBindings!==null||h.hostAttrs!==null||h.hostVars!==0)&&(t.flags|=64);let g=h.type.prototype;!l&&(g.ngOnChanges||g.ngOnInit||g.ngDoCheck)&&((n.preOrderHooks??=[]).push(t.index),l=!0),!u&&(g.ngOnChanges||g.ngDoCheck)&&((n.preOrderCheckHooks??=[]).push(t.index),u=!0),d++}sR(n,t,o)}function sR(n,e,t){for(let i=e.directiveStart;i<e.directiveEnd;i++){let r=n.data[i];if(t===null||!t.has(r))Xx(0,e,r,i),Xx(1,e,r,i),Zx(e,i,!1);else{let o=t.get(r);Yx(0,e,o,i),Yx(1,e,o,i),Zx(e,i,!0)}}}function Xx(n,e,t,i){let r=n===0?t.inputs:t.outputs;for(let o in r)if(r.hasOwnProperty(o)){let s;n===0?s=e.inputs??={}:s=e.outputs??={},s[o]??=[],s[o].push(i),aE(e,o)}}function Yx(n,e,t,i){let r=n===0?t.inputs:t.outputs;for(let o in r)if(r.hasOwnProperty(o)){let s=r[o],a;n===0?a=e.hostDirectiveInputs??={}:a=e.hostDirectiveOutputs??={},a[s]??=[],a[s].push(i,o),aE(e,s)}}function aE(n,e){e==="class"?n.flags|=8:e==="style"&&(n.flags|=16)}function Zx(n,e,t){let{attrs:i,inputs:r,hostDirectiveInputs:o}=n;if(i===null||!t&&r===null||t&&o===null||Ym(n)){n.initialInputs??=[],n.initialInputs.push(null);return}let s=null,a=0;for(;a<i.length;){let c=i[a];if(c===0){a+=4;continue}else if(c===5){a+=2;continue}else if(typeof c=="number")break;if(!t&&r.hasOwnProperty(c)){let l=r[c];for(let u of l)if(u===e){s??=[],s.push(c,i[a+1]);break}}else if(t&&o.hasOwnProperty(c)){let l=o[c];for(let u=0;u<l.length;u+=2)if(l[u]===e){s??=[],s.push(l[u+1],i[a+1]);break}}a+=2}n.initialInputs??=[],n.initialInputs.push(s)}function aR(n,e,t,i,r){n.data[i]=r;let o=r.factory||(r.factory=co(r.type,!0)),s=new $a(o,vo(r),sE,null);n.blueprint[i]=s,t[i]=s,cR(n,e,i,bb(n,t,r.hostVars,Ss),r)}function cR(n,e,t,i,r){let o=r.hostBindings;if(o){let s=n.hostBindingOpCodes;s===null&&(s=n.hostBindingOpCodes=[]);let a=~e.index;lR(s)!=a&&s.push(a),s.push(t,i,o)}}function lR(n){let e=n.length;for(;e>0;){let t=n[--e];if(typeof t=="number"&&t<0)return t}return 0}function uR(n,e,t){if(t){if(e.exportAs)for(let i=0;i<e.exportAs.length;i++)t[e.exportAs[i]]=n;vo(e)&&(t[""]=n)}}function dR(n,e,t){n.flags|=1,n.directiveStart=e,n.directiveEnd=e+t,n.providerIndexes=e}function cE(n,e,t,i,r,o,s,a){let c=e[Ae],l=c.consts,u=Ua(l,s),d=dg(c,n,t,i,u);return o&&nR(c,e,d,Ua(l,a),r),d.mergedAttrs=Fm(d.mergedAttrs,d.attrs),d.attrs!==null&&Ru(d,d.attrs,!1),d.mergedAttrs!==null&&Ru(d,d.mergedAttrs,!0),c.queries!==null&&c.queries.elementStart(c,d),d}function lE(n,e){FC(n,e),Lp(e)&&n.queries.elementEnd(e)}function fR(n,e,t,i,r,o){let s=e.consts,a=Ua(s,r),c=dg(e,n,t,i,a);if(c.mergedAttrs=Fm(c.mergedAttrs,c.attrs),o!=null){let l=Ua(s,o);c.localNames=[];for(let u=0;u<l.length;u+=2)c.localNames.push(l[u],-1)}return c.attrs!==null&&Ru(c,c.attrs,!1),c.mergedAttrs!==null&&Ru(c,c.mergedAttrs,!0),e.queries!==null&&e.queries.elementStart(e,c),c}function hR(n,e,t){if(t===Ss)return!1;let i=n[e];return Object.is(i,t)?!1:(n[e]=t,!0)}function vu(n,e,t){return function i(r){let o=Sr(n)?Ai(n.index,e):e;Xu(o,5);let s=e[vn],a=Kx(e,s,t,r),c=i.__ngNextListenerFn__;for(;c;)a=Kx(e,s,c,r)&&a,c=c.__ngNextListenerFn__;return a}}function Kx(n,e,t,i){let r=Xe(null);try{return mt(6,e,t),t(i)!==!1}catch(o){return cg(n,o),!1}finally{mt(7,e,t),Xe(r)}}function uE(n,e,t,i,r,o,s,a){let c=eu(n),l=!1,u=null;if(!i&&c&&(u=mR(e,t,o,n.index)),u!==null){let d=u.__ngLastListenerFn__||u;d.__ngNextListenerFn__=s,u.__ngLastListenerFn__=s,l=!0}else{let d=Ii(n,t),f=i?i(d):d;uI(t,f,o,a);let h=r.listen(f,o,a);if(!pR(o)){let g=i?y=>i(zn(y[n.index])):n.index;dE(g,e,t,o,a,h,!1)}}return l}function pR(n){return n.startsWith("animation")||n.startsWith("transition")}function mR(n,e,t,i){let r=n.cleanup;if(r!=null)for(let o=0;o<r.length-1;o+=2){let s=r[o];if(s===t&&r[o+1]===i){let a=e[us],c=r[o+2];return a&&a.length>c?a[c]:null}typeof s=="string"&&(o+=2)}return null}function dE(n,e,t,i,r,o,s){let a=e.firstCreatePass?Vp(e):null,c=Bp(t),l=c.length;c.push(r,o),a&&a.push(i,n,l,(l+1)*(s?-1:1))}function Jx(n,e,t,i,r,o){let s=e[t],a=e[Ae],l=a.data[t].outputs[i],d=s[l].subscribe(o);dE(n.index,a,e,r,o,d,!0)}var wm=Symbol("BINDING");var Du=class extends rc{ngModule;constructor(e){super(),this.ngModule=e}resolveComponentFactory(e){let t=$i(e);return new _s(t,this.ngModule)}};function gR(n){return Object.keys(n).map(e=>{let[t,i,r]=n[e],o={propName:t,templateName:e,isSignal:(i&Wu.SignalBased)!==0};return r&&(o.transform=r),o})}function vR(n){return Object.keys(n).map(e=>({propName:n[e],templateName:e}))}function yR(n,e,t){let i=e instanceof Qt?e:e?.injector;return i&&n.getStandaloneInjector!==null&&(i=n.getStandaloneInjector(i)||i),i?new vs(t,i):t}function xR(n){let e=n.get(bo,null);if(e===null)throw new Ee(407,!1);let t=n.get(oE,null),i=n.get(Ti,null);return{rendererFactory:e,sanitizer:t,changeDetectionScheduler:i,ngReflect:!1}}function _R(n,e){let t=fE(n);return Zm(e,t,t==="svg"?ox:t==="math"?sx:null)}function fE(n){return(n.selectors[0][0]||"div").toLowerCase()}var _s=class extends Ju{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=gR(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=vR(this.componentDef.outputs),this.cachedOutputs}constructor(e,t){super(),this.componentDef=e,this.ngModule=t,this.componentType=e.type,this.selector=NI(e.selectors),this.ngContentSelectors=e.ngContentSelectors??[],this.isBoundToModule=!!t}create(e,t,i,r,o,s){mt(22);let a=Xe(null);try{let c=this.componentDef,l=bR(i,c,s,o),u=yR(c,r||this.ngModule,e),d=xR(u),f=d.rendererFactory.createRenderer(null,c),h=i?uA(f,i,c.encapsulation,u):_R(c,f),g=s?.some(Qx)||o?.some(p=>typeof p!="function"&&p.bindings.some(Qx)),y=Jm(null,l,null,512|_b(c),null,null,d,f,u,null,ib(h,u,!0));y[kt]=h,ou(y);let m=null;try{let p=cE(kt,y,2,"#host",()=>l.directiveRegistry,!0,0);yb(f,h,p),qa(h,y),Ob(l,y,p),ub(l,p,y),lE(l,p),t!==void 0&&SR(p,this.ngContentSelectors,t),m=Ai(p.index,y),y[vn]=m[vn],lg(l,y,null)}catch(p){throw m!==null&&hm(m),hm(y),p}finally{mt(23),su()}return new Nu(this.componentType,y,!!g)}finally{Xe(a)}}};function bR(n,e,t,i){let r=n?["ng-version","20.3.11"]:PI(e.selectors[0]),o=null,s=null,a=0;if(t)for(let u of t)a+=u[wm].requiredVars,u.create&&(u.targetIdx=0,(o??=[]).push(u)),u.update&&(u.targetIdx=0,(s??=[]).push(u));if(i)for(let u=0;u<i.length;u++){let d=i[u];if(typeof d!="function")for(let f of d.bindings){a+=f[wm].requiredVars;let h=u+1;f.create&&(f.targetIdx=h,(o??=[]).push(f)),f.update&&(f.targetIdx=h,(s??=[]).push(f))}}let c=[e];if(i)for(let u of i){let d=typeof u=="function"?u:u.type,f=Kl(d);c.push(f)}return xb(0,null,ER(o,s),1,a,c,null,null,null,[r],null)}function ER(n,e){return!n&&!e?null:t=>{if(t&1&&n)for(let i of n)i.create();if(t&2&&e)for(let i of e)i.update()}}function Qx(n){let e=n[wm].kind;return e==="input"||e==="twoWay"}var Nu=class extends rE{_rootLView;_hasInputBindings;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(e,t,i){super(),this._rootLView=t,this._hasInputBindings=i,this._tNode=ka(t[Ae],kt),this.location=Es(this._tNode,t),this.instance=Ai(this._tNode.index,t)[vn],this.hostView=this.changeDetectorRef=new Ir(t,void 0),this.componentType=e}setInput(e,t){this._hasInputBindings;let i=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(e)&&Object.is(this.previousInputValues.get(e),t))return;let r=this._rootLView,o=Vb(i,r[Ae],r,e,t);this.previousInputValues.set(e,t);let s=Ai(i.index,r);Xu(s,1)}get injector(){return new _o(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(e){this.hostView.onDestroy(e)}};function SR(n,e,t){let i=n.projection=[];for(let r=0;r<e.length;r++){let o=t[r];i.push(o!=null&&o.length?Array.from(o):null)}}var Ms=(()=>{class n{static __NG_ELEMENT_ID__=MR}return n})();function MR(){let n=In();return pE(n,Rt())}var TR=Ms,hE=class extends TR{_lContainer;_hostTNode;_hostLView;constructor(e,t,i){super(),this._lContainer=e,this._hostTNode=t,this._hostLView=i}get element(){return Es(this._hostTNode,this._hostLView)}get injector(){return new _o(this._hostTNode,this._hostLView)}get parentInjector(){let e=km(this._hostTNode,this._hostLView);if(g_(e)){let t=bu(e,this._hostLView),i=_u(e),r=t[Ae].data[i+8];return new _o(r,t)}else return new _o(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(e){let t=e_(this._lContainer);return t!==null&&t[e]||null}get length(){return this._lContainer.length-un}createEmbeddedView(e,t,i){let r,o;typeof i=="number"?r=i:i!=null&&(r=i.index,o=i.injector);let s=Mm(this._lContainer,e.ssrId),a=e.createEmbeddedViewImpl(t||{},o,s);return this.insertImpl(a,r,Em(this._hostTNode,s)),a}createComponent(e,t,i,r,o,s,a){let c=e&&!DC(e),l;if(c)l=t;else{let m=t||{};l=m.index,i=m.injector,r=m.projectableNodes,o=m.environmentInjector||m.ngModuleRef,s=m.directives,a=m.bindings}let u=c?e:new _s($i(e)),d=i||this.parentInjector;if(!o&&u.ngModule==null){let p=(c?d:this.parentInjector).get(Qt,null);p&&(o=p)}let f=$i(u.componentType??{}),h=Mm(this._lContainer,f?.id??null),g=h?.firstChild??null,y=u.create(d,r,g,o,s,a);return this.insertImpl(y.hostView,l,Em(this._hostTNode,h)),y}insert(e,t){return this.insertImpl(e,t,!0)}insertImpl(e,t,i){let r=e._lView;if(lx(r)){let a=this.indexOf(e);if(a!==-1)this.detach(a);else{let c=r[Ft],l=new hE(c,c[ni],c[Ft]);l.detach(l.indexOf(e))}}let o=this._adjustIndex(t),s=this._lContainer;return Kb(s,r,o,i),e.attachToViewContainerRef(),Cp(lm(s),o,e),e}move(e,t){return this.insert(e,t)}indexOf(e){let t=e_(this._lContainer);return t!==null?t.indexOf(e):-1}remove(e){let t=this._adjustIndex(e,-1),i=Iu(this._lContainer,t);i&&(Ra(lm(this._lContainer),t),sg(i[Ae],i))}detach(e){let t=this._adjustIndex(e,-1),i=Iu(this._lContainer,t);return i&&Ra(lm(this._lContainer),t)!=null?new Ir(i):null}_adjustIndex(e,t=0){return e??this.length+t}};function e_(n){return n[Fa]}function lm(n){return n[Fa]||(n[Fa]=[])}function pE(n,e){let t,i=e[n.index];return Hn(i)?t=i:(t=PA(i,e,null,n),e[n.index]=t,Eb(e,t)),mE(t,e,n,i),new hE(t,n,e)}function wR(n,e){let t=n[Ct],i=t.createComment(""),r=Ii(e,n),o=t.parentNode(r);return Tu(t,o,i,t.nextSibling(r),!1),i}var mE=vE,gE=()=>!1;function vE(n,e,t,i){if(n[Ci])return;let r;t.type&8?r=zn(i):r=wR(e,t),n[Ci]=r}function CR(n,e,t){if(n[Ci]&&n[mi])return!0;let i=t[Bn],r=e.index-kt;if(!i||A_(e)||ab(i,r))return!1;let s=gm(i,r),a=i.data[Vu]?.[r],[c,l]=KA(s,a);return n[Ci]=c,n[mi]=l,!0}function IR(n,e,t,i){gE(n,t,e)||vE(n,e,t,i)}function yE(){mE=IR,gE=CR}var Cm=class n{queryList;matches=null;constructor(e){this.queryList=e}clone(){return new n(this.queryList)}setDirty(){this.queryList.setDirty()}},Im=class n{queries;constructor(e=[]){this.queries=e}createEmbeddedView(e){let t=e.queries;if(t!==null){let i=e.contentQueries!==null?e.contentQueries[0]:t.length,r=[];for(let o=0;o<i;o++){let s=t.getByIndex(o),a=this.queries[s.indexInDeclarationView];r.push(a.clone())}return new n(r)}return null}insertView(e){this.dirtyQueriesWithMatches(e)}detachView(e){this.dirtyQueriesWithMatches(e)}finishViewCreation(e){this.dirtyQueriesWithMatches(e)}dirtyQueriesWithMatches(e){for(let t=0;t<this.queries.length;t++)pg(e,t).matches!==null&&this.queries[t].setDirty()}},Am=class{flags;read;predicate;constructor(e,t,i=null){this.flags=t,this.read=i,typeof e=="string"?this.predicate=FR(e):this.predicate=e}},Rm=class n{queries;constructor(e=[]){this.queries=e}elementStart(e,t){for(let i=0;i<this.queries.length;i++)this.queries[i].elementStart(e,t)}elementEnd(e){for(let t=0;t<this.queries.length;t++)this.queries[t].elementEnd(e)}embeddedTView(e){let t=null;for(let i=0;i<this.length;i++){let r=t!==null?t.length:0,o=this.getByIndex(i).embeddedTView(e,r);o&&(o.indexInDeclarationView=i,t!==null?t.push(o):t=[o])}return t!==null?new n(t):null}template(e,t){for(let i=0;i<this.queries.length;i++)this.queries[i].template(e,t)}getByIndex(e){return this.queries[e]}get length(){return this.queries.length}track(e){this.queries.push(e)}},Dm=class n{metadata;matches=null;indexInDeclarationView=-1;crossesNgTemplate=!1;_declarationNodeIndex;_appliesToNextNode=!0;constructor(e,t=-1){this.metadata=e,this._declarationNodeIndex=t}elementStart(e,t){this.isApplyingToNode(t)&&this.matchTNode(e,t)}elementEnd(e){this._declarationNodeIndex===e.index&&(this._appliesToNextNode=!1)}template(e,t){this.elementStart(e,t)}embeddedTView(e,t){return this.isApplyingToNode(e)?(this.crossesNgTemplate=!0,this.addMatch(-e.index,t),new n(this.metadata)):null}isApplyingToNode(e){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let t=this._declarationNodeIndex,i=e.parent;for(;i!==null&&i.type&8&&i.index!==t;)i=i.parent;return t===(i!==null?i.index:-1)}return this._appliesToNextNode}matchTNode(e,t){let i=this.metadata.predicate;if(Array.isArray(i))for(let r=0;r<i.length;r++){let o=i[r];this.matchTNodeWithReadOption(e,t,AR(t,o)),this.matchTNodeWithReadOption(e,t,pu(t,e,o,!1,!1))}else i===Ka?t.type&4&&this.matchTNodeWithReadOption(e,t,-1):this.matchTNodeWithReadOption(e,t,pu(t,e,i,!1,!1))}matchTNodeWithReadOption(e,t,i){if(i!==null){let r=this.metadata.read;if(r!==null)if(r===Qa||r===Ms||r===Ka&&t.type&4)this.addMatch(t.index,-2);else{let o=pu(t,e,r,!1,!1);o!==null&&this.addMatch(t.index,o)}else this.addMatch(t.index,i)}}addMatch(e,t){this.matches===null?this.matches=[e,t]:this.matches.push(e,t)}};function AR(n,e){let t=n.localNames;if(t!==null){for(let i=0;i<t.length;i+=2)if(t[i]===e)return t[i+1]}return null}function RR(n,e){return n.type&11?Es(n,e):n.type&4?ug(n,e):null}function DR(n,e,t,i){return t===-1?RR(e,n):t===-2?NR(n,e,i):Eu(n,n[Ae],t,e)}function NR(n,e,t){if(t===Qa)return Es(e,n);if(t===Ka)return ug(e,n);if(t===Ms)return pE(e,n)}function xE(n,e,t,i){let r=e[wi].queries[i];if(r.matches===null){let o=n.data,s=t.matches,a=[];for(let c=0;s!==null&&c<s.length;c+=2){let l=s[c];if(l<0)a.push(null);else{let u=o[l];a.push(DR(e,u,s[c+1],t.metadata.read))}}r.matches=a}return r.matches}function Nm(n,e,t,i){let r=n.queries.getByIndex(t),o=r.matches;if(o!==null){let s=xE(n,e,r,t);for(let a=0;a<o.length;a+=2){let c=o[a];if(c>0)i.push(s[a/2]);else{let l=o[a+1],u=e[-c];for(let d=un;d<u.length;d++){let f=u[d];f[Er]===f[Ft]&&Nm(f[Ae],f,l,i)}if(u[go]!==null){let d=u[go];for(let f=0;f<d.length;f++){let h=d[f];Nm(h[Ae],h,l,i)}}}}}return i}function PR(n,e){return n[wi].queries[e].queryList}function OR(n,e,t){let i=new Su((t&4)===4);return dx(n,e,i,i.destroy),(e[wi]??=new Im).queries.push(new Cm(i))-1}function LR(n,e,t){let i=Tr();return i.firstCreatePass&&(kR(i,new Am(n,e,t),-1),(e&2)===2&&(i.staticViewQueries=!0)),OR(i,Rt(),e)}function FR(n){return n.split(",").map(e=>e.trim())}function kR(n,e,t){n.queries===null&&(n.queries=new Rm),n.queries.track(new Dm(e,t))}function pg(n,e){return n.queries.getByIndex(e)}function UR(n,e){let t=n[Ae],i=pg(t,e);return i.crossesNgTemplate?Nm(t,n,e,[]):xE(t,n,i,e)}var bs=class{},Qu=class{};var Pu=class extends bs{ngModuleType;_parent;_bootstrapComponents=[];_r3Injector;instance;destroyCbs=[];componentFactoryResolver=new Du(this);constructor(e,t,i,r=!0){super(),this.ngModuleType=e,this._parent=t;let o=Rp(e);this._bootstrapComponents=fb(o.bootstrap),this._r3Injector=em(e,t,[{provide:bs,useValue:this},{provide:rc,useValue:this.componentFactoryResolver},...i],xr(e),new Set(["environment"])),r&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){let e=this._r3Injector;!e.destroyed&&e.destroy(),this.destroyCbs.forEach(t=>t()),this.destroyCbs=null}onDestroy(e){this.destroyCbs.push(e)}},Ou=class extends Qu{moduleType;constructor(e){super(),this.moduleType=e}create(e){return new Pu(this.moduleType,e,[])}};var Ja=class extends bs{injector;componentFactoryResolver=new Du(this);instance=null;constructor(e){super();let t=new uo([...e.providers,{provide:bs,useValue:this},{provide:rc,useValue:this.componentFactoryResolver}],e.parent||Na(),e.debugName,new Set(["environment"]));this.injector=t,e.runEnvironmentInitializers&&t.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(e){this.injector.onDestroy(e)}};function Ts(n,e,t=null){return new Ja({providers:n,parent:e,debugName:t,runEnvironmentInitializers:!0}).injector}var BR=(()=>{class n{_injector;cachedInjectors=new Map;constructor(t){this._injector=t}getOrCreateStandaloneInjector(t){if(!t.standalone)return null;if(!this.cachedInjectors.has(t)){let i=Jl(!1,t.type),r=i.length>0?Ts([i],this._injector,`Standalone[${t.type.name}]`):null;this.cachedInjectors.set(t,r)}return this.cachedInjectors.get(t)}ngOnDestroy(){try{for(let t of this.cachedInjectors.values())t!==null&&t.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=Le({token:n,providedIn:"environment",factory:()=>new n(Ke(Qt))})}return n})();function rn(n){return Fu(()=>{let e=_E(n),t=Tt(me({},e),{decls:n.decls,vars:n.vars,template:n.template,consts:n.consts||null,ngContentSelectors:n.ngContentSelectors,onPush:n.changeDetection===Um.OnPush,directiveDefs:null,pipeDefs:null,dependencies:e.standalone&&n.dependencies||null,getStandaloneInjector:e.standalone?r=>r.get(BR).getOrCreateStandaloneInjector(t):null,getExternalStyles:null,signals:n.signals??!1,data:n.data||{},encapsulation:n.encapsulation||Zi.Emulated,styles:n.styles||lo,_:null,schemas:n.schemas||null,tView:null,id:""});e.standalone&&Ki("NgStandalone"),bE(t);let i=n.dependencies;return t.directiveDefs=t_(i,VR),t.pipeDefs=t_(i,Dp),t.id=GR(t),t})}function VR(n){return $i(n)||Kl(n)}function HR(n,e){if(n==null)return ho;let t={};for(let i in n)if(n.hasOwnProperty(i)){let r=n[i],o,s,a,c;Array.isArray(r)?(a=r[0],o=r[1],s=r[2]??o,c=r[3]||null):(o=r,s=r,a=Wu.None,c=null),t[o]=[i,a,c],e[o]=s}return t}function zR(n){if(n==null)return ho;let e={};for(let t in n)n.hasOwnProperty(t)&&(e[n[t]]=t);return e}function mg(n){return Fu(()=>{let e=_E(n);return bE(e),e})}function _E(n){let e={};return{type:n.type,providersResolver:null,factory:null,hostBindings:n.hostBindings||null,hostVars:n.hostVars||0,hostAttrs:n.hostAttrs||null,contentQueries:n.contentQueries||null,declaredInputs:e,inputConfig:n.inputs||ho,exportAs:n.exportAs||null,standalone:n.standalone??!0,signals:n.signals===!0,selectors:n.selectors||lo,viewQuery:n.viewQuery||null,features:n.features||null,setInput:null,resolveHostDirectives:null,hostDirectives:null,inputs:HR(n.inputs,e),outputs:zR(n.outputs),debugInfo:null}}function bE(n){n.features?.forEach(e=>e(n))}function t_(n,e){return n?()=>{let t=typeof n=="function"?n():n,i=[];for(let r of t){let o=e(r);o!==null&&i.push(o)}return i}:null}function GR(n){let e=0,t=typeof n.consts=="function"?"":n.consts,i=[n.selectors,n.ngContentSelectors,n.hostVars,n.hostAttrs,t,n.vars,n.decls,n.encapsulation,n.standalone,n.signals,n.exportAs,JSON.stringify(n.inputs),JSON.stringify(n.outputs),Object.getOwnPropertyNames(n.type.prototype),!!n.contentQueries,!!n.viewQuery];for(let o of i.join("|"))e=Math.imul(31,e)+o.charCodeAt(0)<<0;return e+=2147483648,"c"+e}var jR=EE;function EE(n,e,t,i){return Xi(!0),e[Ct].createComment("")}function WR(n,e,t,i){let r=!ju(e,t);Xi(r);let o=e[Bn]?.data[k_]?.[i]??null;if(o!==null&&t.tView!==null&&t.tView.ssrId===null&&(t.tView.ssrId=o),r)return EE(n,e);let s=e[Bn],a=Yu(s,n,e,t);Gu(s,i,a);let c=qm(s,i);return Zu(c,a)}function SE(){jR=WR}var jn=(function(n){return n[n.NOT_STARTED=0]="NOT_STARTED",n[n.IN_PROGRESS=1]="IN_PROGRESS",n[n.COMPLETE=2]="COMPLETE",n[n.FAILED=3]="FAILED",n})(jn||{}),n_=0,$R=1,zt=(function(n){return n[n.Placeholder=0]="Placeholder",n[n.Loading=1]="Loading",n[n.Complete=2]="Complete",n[n.Error=3]="Error",n})(zt||{});var qR=0,oc=1;var XR=4,YR=5;var ZR=7,ys=8,KR=9,gg=(function(n){return n[n.Manual=0]="Manual",n[n.Playthrough=1]="Playthrough",n})(gg||{});function yu(n,e){let t=QR(n),i=e[t];if(i!==null){for(let r of i)r();e[t]=null}}function JR(n){yu(1,n),yu(0,n),yu(2,n)}function QR(n){let e=XR;return n===1?e=YR:n===2&&(e=KR),e}function ME(n){return n+1}function ws(n,e){let t=n[Ae],i=ME(e.index);return n[i]}function sc(n,e){let t=ME(e.index);return n.data[t]}function eD(n,e,t){let i=e[Ae],r=sc(i,t);switch(n){case zt.Complete:return r.primaryTmplIndex;case zt.Loading:return r.loadingTmplIndex;case zt.Error:return r.errorTmplIndex;case zt.Placeholder:return r.placeholderTmplIndex;default:return null}}function i_(n,e){return e===zt.Placeholder?n.placeholderBlockConfig?.[n_]??null:e===zt.Loading?n.loadingBlockConfig?.[n_]??null:null}function tD(n){return n.loadingBlockConfig?.[$R]??null}function r_(n,e){if(!n||n.length===0)return e;let t=new Set(n);for(let i of e)t.add(i);return n.length===t.size?n:Array.from(t)}function nD(n,e){let t=e.primaryTmplIndex+kt;return ka(n,t)}var iD=(()=>{class n{cachedInjectors=new Map;getOrCreateInjector(t,i,r,o){if(!this.cachedInjectors.has(t)){let s=r.length>0?Ts(r,i,o):null;this.cachedInjectors.set(t,s)}return this.cachedInjectors.get(t)}ngOnDestroy(){try{for(let t of this.cachedInjectors.values())t!==null&&t.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=Le({token:n,providedIn:"environment",factory:()=>new n})}return n})();var TE=new _e("");function um(n,e,t){return n.get(iD).getOrCreateInjector(e,n,t,"")}function rD(n,e,t){if(n instanceof vs){let r=n.injector,o=n.parentInjector,s=um(o,e,t);return new vs(r,s)}let i=n.get(Qt);if(i!==n){let r=um(i,e,t);return new vs(n,r)}return um(n,e,t)}function xo(n,e,t,i=!1){let r=t[Ft],o=r[Ae];if(Mr(r))return;let s=ws(r,e),a=s[oc],c=s[ZR];if(!(c!==null&&n<c)&&o_(a,n)&&o_(s[qR]??-1,n)){let l=sc(o,e),d=!i&&!0&&(tD(l)!==null||i_(l,zt.Loading)!==null||i_(l,zt.Placeholder))?aD:sD;try{d(n,s,t,e,r)}catch(f){cg(r,f)}}}function oD(n,e){let t=n[mi]?.findIndex(r=>r.data[H_]===e[oc])??-1;return{dehydratedView:t>-1?n[mi][t]:null,dehydratedViewIx:t}}function sD(n,e,t,i,r){mt(20);let o=eD(n,r,i);if(o!==null){e[oc]=n;let s=r[Ae],a=o+kt,c=ka(s,a),l=0;OA(t,l);let u;if(n===zt.Complete){let g=sc(s,i),y=g.providers;y&&y.length>0&&(u=rD(r[ii],g,y))}let{dehydratedView:d,dehydratedViewIx:f}=oD(t,e),h=Hb(r,c,null,{injector:u,dehydratedView:d});if(Kb(t,h,l,Em(c,d)),Xu(h,2),f>-1&&t[mi]?.splice(f,1),(n===zt.Complete||n===zt.Error)&&Array.isArray(e[ys])){for(let g of e[ys])g();e[ys]=null}}mt(21)}function o_(n,e){return n<e}function s_(n,e,t){n.loadingPromise.then(()=>{n.loadingState===jn.COMPLETE?xo(zt.Complete,e,t):n.loadingState===jn.FAILED&&xo(zt.Error,e,t)})}var aD=null;var ed=(()=>{class n{log(t){console.log(t)}warn(t){console.warn(t)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Le({token:n,factory:n.\u0275fac,providedIn:"platform"})}return n})();var vg=new _e("");function ac(n){return!!n&&typeof n.then=="function"}function wE(n){return!!n&&typeof n.subscribe=="function"}var CE=new _e("");var yg=(()=>{class n{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((t,i)=>{this.resolve=t,this.reject=i});appInits=Y(CE,{optional:!0})??[];injector=Y(Un);constructor(){}runInitializers(){if(this.initialized)return;let t=[];for(let r of this.appInits){let o=ln(this.injector,r);if(ac(o))t.push(o);else if(wE(o)){let s=new Promise((a,c)=>{o.subscribe({complete:a,error:c})});t.push(s)}}let i=()=>{this.done=!0,this.resolve()};Promise.all(t).then(()=>{i()}).catch(r=>{this.reject(r)}),t.length===0&&i(),this.initialized=!0}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Le({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Ar=new _e("");function IE(){Gh(()=>{let n="";throw new Ee(600,n)})}function AE(n){return n.isBoundToModule}var cD=10;var An=(()=>{class n{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=Y(Gn);afterRenderManager=Y(ig);zonelessEnabled=Y(ps);rootEffectScheduler=Y(im);dirtyFlags=0;tracingSnapshot=null;allTestViews=new Set;autoDetectTestViews=new Set;includeAllTestViews=!1;afterTick=new Zt;get allViews(){return[...(this.includeAllTestViews?this.allTestViews:this.autoDetectTestViews).keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];internalPendingTask=Y(gi);get isStable(){return this.internalPendingTask.hasPendingTasksObservable.pipe(ct(t=>!t))}constructor(){Y(Mo,{optional:!0})}whenStable(){let t;return new Promise(i=>{t=this.isStable.subscribe({next:r=>{r&&i()}})}).finally(()=>{t.unsubscribe()})}_injector=Y(Qt);_rendererFactory=null;get injector(){return this._injector}bootstrap(t,i){return this.bootstrapImpl(t,i)}bootstrapImpl(t,i,r=Un.NULL){return this._injector.get(Ot).run(()=>{mt(10);let s=t instanceof Ju;if(!this._injector.get(yg).done){let g="";throw new Ee(405,g)}let c;s?c=t:c=this._injector.get(rc).resolveComponentFactory(t),this.componentTypes.push(c.componentType);let l=AE(c)?void 0:this._injector.get(bs),u=i||c.selector,d=c.create(r,[],u,l),f=d.location.nativeElement,h=d.injector.get(vg,null);return h?.registerApplication(f),d.onDestroy(()=>{this.detachView(d.hostView),Wa(this.components,d),h?.unregisterApplication(f)}),this._loadComponent(d),mt(11,d),d})}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){mt(12),this.tracingSnapshot!==null?this.tracingSnapshot.run($u.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw new Ee(101,!1);let t=Xe(null);try{this._runningTick=!0,this.synchronize()}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,Xe(t),this.afterTick.next(),mt(13)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(bo,null,{optional:!0}));let t=0;for(;this.dirtyFlags!==0&&t++<cD;)mt(14),this.synchronizeOnce(),mt(15)}synchronizeOnce(){this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush());let t=!1;if(this.dirtyFlags&7){let i=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:r}of this.allViews){if(!i&&!Ba(r))continue;let o=i&&!this.zonelessEnabled?0:1;qb(r,o),t=!0}if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}t||(this._rendererFactory?.begin?.(),this._rendererFactory?.end?.()),this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:t})=>Ba(t))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(t){let i=t;this._views.push(i),i.attachToAppRef(this)}detachView(t){let i=t;Wa(this._views,i),i.detachFromAppRef()}_loadComponent(t){this.attachView(t.hostView);try{this.tick()}catch(r){this.internalErrorHandler(r)}this.components.push(t),this._injector.get(Ar,[]).forEach(r=>r(t))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(t=>t()),this._views.slice().forEach(t=>t.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(t){return this._destroyListeners.push(t),()=>Wa(this._destroyListeners,t)}destroy(){if(this._destroyed)throw new Ee(406,!1);let t=this._injector;t.destroy&&!t.destroyed&&t.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Le({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Wa(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function lD(){let n,e;return{promise:new Promise((i,r)=>{n=i,e=r}),resolve:n,reject:e}}function RE(n,e,t){let i=e[ii],r=e[Ae];if(n.loadingState!==jn.NOT_STARTED)return n.loadingPromise??Promise.resolve();let o=ws(e,t),s=nD(r,n);n.loadingState=jn.IN_PROGRESS,yu(1,o);let a=n.dependencyResolverFn,c=i.get(uu).add();return a?(n.loadingPromise=Promise.allSettled(a()).then(l=>{let u=!1,d=[],f=[];for(let h of l)if(h.status==="fulfilled"){let g=h.value,y=$i(g)||Kl(g);if(y)d.push(y);else{let m=Dp(g);m&&f.push(m)}}else{u=!0;break}if(u){if(n.loadingState=jn.FAILED,n.errorTmplIndex===null){let g=new Ee(-750,!1);cg(e,g)}}else{n.loadingState=jn.COMPLETE;let h=s.tView;if(d.length>0){h.directiveRegistry=r_(h.directiveRegistry,d);let g=d.map(m=>m.type),y=Jl(!1,...g);n.providers=y}f.length>0&&(h.pipeRegistry=r_(h.pipeRegistry,f))}}),n.loadingPromise.finally(()=>{n.loadingPromise=null,c()})):(n.loadingPromise=Promise.resolve().then(()=>{n.loadingPromise=null,n.loadingState=jn.COMPLETE,c()}),n.loadingPromise)}function uD(n,e){return e[ii].get(TE,null,{optional:!0})?.behavior!==gg.Manual}function dD(n,e,t){let i=e[Ae],r=e[t.index];if(!uD(n,e))return;let o=ws(e,t),s=sc(i,t);switch(JR(o),s.loadingState){case jn.NOT_STARTED:xo(zt.Loading,t,r),RE(s,e,t),s.loadingState===jn.IN_PROGRESS&&s_(s,t,r);break;case jn.IN_PROGRESS:xo(zt.Loading,t,r),s_(s,t,r);break;case jn.COMPLETE:xo(zt.Complete,t,r);break;case jn.FAILED:xo(zt.Error,t,r);break;default:}}async function DE(n,e,t){let i=n.get(Hu);if(i.hydrating.has(e))return;let{parentBlockPromise:o,hydrationQueue:s}=yI(e,n);if(s.length===0)return;o!==null&&s.shift(),pD(i,s),o!==null&&await o;let a=s[0];i.has(a)?await a_(n,s,t):i.awaitParentBlock(a,async()=>await a_(n,s,t))}async function a_(n,e,t){let i=n.get(Hu),r=i.hydrating,o=n.get(gi),s=o.add();for(let c=0;c<e.length;c++){let l=e[c],u=i.get(l);if(u!=null){if(await gD(u),await mD(n),fD(u)){YA(u),c_(e.slice(c),i);break}r.get(l).resolve()}else{hD(c,e,i),c_(e.slice(c),i);break}}let a=e[e.length-1];await r.get(a)?.promise,o.remove(s),t&&t(e),ZA(i.get(a),e,i,n.get(An))}function fD(n){return ws(n.lView,n.tNode)[oc]===zt.Error}function hD(n,e,t){let i=n-1,r=i>-1?t.get(e[i]):null;r&&Ku(r.lContainer)}function c_(n,e){let t=e.hydrating;for(let i in n)t.get(i)?.reject();e.cleanup(n)}function pD(n,e){for(let t of e)n.hydrating.set(t,lD())}function mD(n){return new Promise(e=>rg(e,{injector:n}))}async function gD(n){let{tNode:e,lView:t}=n,i=ws(t,e);return new Promise(r=>{vD(i,r),dD(2,t,e)})}function vD(n,e){Array.isArray(n[ys])||(n[ys]=[]),n[ys].push(e)}var y5=typeof document<"u"&&typeof document?.documentElement?.getAnimations=="function";function l_(n,e,t,i,r){Vb(e,n,t,r?"class":"style",i)}function cc(n,e,t,i){let r=Rt(),o=r[Ae],s=n+kt,a=o.firstCreatePass?cE(s,r,2,e,gA,px(),t,i):o.data[s];if(Ub(a,r,n,e,xg),eu(a)){let c=r[Ae];Ob(c,r,a),ub(c,a,r)}return i!=null&&Lb(r,a),cc}function lc(){let n=Tr(),e=In(),t=Bb(e);return n.firstCreatePass&&lE(n,t),Gp(t)&&jp(),Hp(),t.classesWithoutHost!=null&&UC(t)&&l_(n,t,Rt(),t.classesWithoutHost,!0),t.stylesWithoutHost!=null&&BC(t)&&l_(n,t,Rt(),t.stylesWithoutHost,!1),lc}function Rr(n,e,t,i){return cc(n,e,t,i),lc(),Rr}function qt(n,e,t,i){let r=Rt(),o=r[Ae],s=n+kt,a=o.firstCreatePass?fR(s,o,2,e,t,i):o.data[s];return Ub(a,r,n,e,xg),i!=null&&Lb(r,a),qt}function en(){let n=In(),e=Bb(n);return Gp(e)&&jp(),Hp(),en}function td(n,e,t,i){return qt(n,e,t,i),en(),td}var xg=(n,e,t,i,r)=>(Xi(!0),Zm(e[Ct],i,Jp()));function yD(n,e,t,i,r){let o=!ju(e,t);if(Xi(o),o)return Zm(e[Ct],i,Jp());let s=e[Bn],a=Yu(s,n,e,t);return sb(s,r)&&Gu(s,r,a.nextSibling),s&&(C_(t)||I_(a))&&Sr(t)&&(mx(t),vb(a)),a}function NE(){xg=yD}var xD=(n,e,t,i,r)=>(Xi(!0),mb(e[Ct],""));function _D(n,e,t,i,r){let o,s=!ju(e,t);if(Xi(s),s)return mb(e[Ct],"");let a=e[Bn],c=Yu(a,n,e,t),l=gI(a,r);return Gu(a,r,c),o=Zu(l,c),o}function PE(){xD=_D}function _g(){return Rt()}var uc="en-US";var bD=uc;function OE(n){typeof n=="string"&&(bD=n.toLowerCase().replace(/_/g,"-"))}function nd(n,e,t){let i=Rt(),r=Tr(),o=In();return ED(r,i,i[Ct],o,n,e,t),nd}function dc(n,e,t){let i=Rt(),r=Tr(),o=In();return(o.type&3||t)&&uE(o,r,i,t,i[Ct],n,e,vu(o,i,e)),dc}function ED(n,e,t,i,r,o,s){let a=!0,c=null;if((i.type&3||s)&&(c??=vu(i,e,o),uE(i,n,e,s,t,r,o,c)&&(a=!1)),a){let l=i.outputs?.[r],u=i.hostDirectiveOutputs?.[r];if(u&&u.length)for(let d=0;d<u.length;d+=2){let f=u[d],h=u[d+1];c??=vu(i,e,o),Jx(i,e,f,h,r,c)}if(l&&l.length)for(let d of l)c??=vu(i,e,o),Jx(i,e,d,r,r,c)}}function bg(n,e,t){LR(n,e,t)}function Eg(n){let e=Rt(),t=Tr(),i=Yp();ru(i+1);let r=pg(t,i);if(n.dirty&&cx(e)===((r.metadata.flags&2)===2)){if(r.matches===null)n.reset([]);else{let o=UR(e,i);n.reset(o,QC),n.notifyOnChanges()}return!0}return!1}function Sg(){return PR(Rt(),Yp())}function dn(n,e=""){let t=Rt(),i=Tr(),r=n+kt,o=i.firstCreatePass?dg(i,r,1,e,null):i.data[r],s=LE(i,t,o,e,n);t[r]=s,Qp()&&Db(i,t,s,o),za(o,!1)}var LE=(n,e,t,i,r)=>(Xi(!0),pb(e[Ct],i));function SD(n,e,t,i,r){let o=!ju(e,t);if(Xi(o),o)return pb(e[Ct],i);let s=e[Bn];return Yu(s,n,e,t)}function FE(){LE=SD}function MD(n,e,t,i=""){return hR(n,xx(),t)?e+Mp(t)+i:Ss}function id(n,e,t){let i=Rt(),r=MD(i,n,e,t);return r!==Ss&&TD(i,au(),r),id}function TD(n,e,t){let i=ax(e,n);OI(n[Ct],i,t)}var Lu=class{ngModuleFactory;componentFactories;constructor(e,t){this.ngModuleFactory=e,this.componentFactories=t}},Mg=(()=>{class n{compileModuleSync(t){return new Ou(t)}compileModuleAsync(t){return Promise.resolve(this.compileModuleSync(t))}compileModuleAndAllComponentsSync(t){let i=this.compileModuleSync(t),r=Rp(t),o=fb(r.declarations).reduce((s,a)=>{let c=$i(a);return c&&s.push(new _s(c)),s},[]);return new Lu(i,o)}compileModuleAndAllComponentsAsync(t){return Promise.resolve(this.compileModuleAndAllComponentsSync(t))}clearCache(){}clearCacheFor(t){}getModuleId(t){}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Le({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var wD=(()=>{class n{zone=Y(Ot);changeDetectionScheduler=Y(Ti);applicationRef=Y(An);applicationErrorHandler=Y(Gn);_onMicrotaskEmptySubscription;initialize(){this._onMicrotaskEmptySubscription||(this._onMicrotaskEmptySubscription=this.zone.onMicrotaskEmpty.subscribe({next:()=>{this.changeDetectionScheduler.runningTick||this.zone.run(()=>{try{this.applicationRef.dirtyFlags|=1,this.applicationRef._tick()}catch(t){this.applicationErrorHandler(t)}})}}))}ngOnDestroy(){this._onMicrotaskEmptySubscription?.unsubscribe()}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Le({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function kE({ngZoneFactory:n,ignoreChangesOutsideZone:e,scheduleInRootZone:t}){return n??=()=>new Ot(Tt(me({},UE()),{scheduleInRootZone:t})),[{provide:Ot,useFactory:n},{provide:ei,multi:!0,useFactory:()=>{let i=Y(wD,{optional:!0});return()=>i.initialize()}},{provide:ei,multi:!0,useFactory:()=>{let i=Y(CD);return()=>{i.initialize()}}},e===!0?{provide:nm,useValue:!0}:[],{provide:lu,useValue:t??Mb},{provide:Gn,useFactory:()=>{let i=Y(Ot),r=Y(Qt),o;return s=>{i.runOutsideAngular(()=>{r.destroyed&&!o?setTimeout(()=>{throw s}):(o??=r.get(hi),o.handleError(s))})}}}]}function UE(n){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:n?.eventCoalescing??!1,shouldCoalesceRunChangeDetection:n?.runCoalescing??!1}}var CD=(()=>{class n{subscription=new Vt;initialized=!1;zone=Y(Ot);pendingTasks=Y(gi);initialize(){if(this.initialized)return;this.initialized=!0;let t=null;!this.zone.isStable&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(t=this.pendingTasks.add()),this.zone.runOutsideAngular(()=>{this.subscription.add(this.zone.onStable.subscribe(()=>{Ot.assertNotInAngularZone(),queueMicrotask(()=>{t!==null&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(this.pendingTasks.remove(t),t=null)})}))}),this.subscription.add(this.zone.onUnstable.subscribe(()=>{Ot.assertInAngularZone(),t??=this.pendingTasks.add()}))}ngOnDestroy(){this.subscription.unsubscribe()}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Le({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Tg=(()=>{class n{applicationErrorHandler=Y(Gn);appRef=Y(An);taskService=Y(gi);ngZone=Y(Ot);zonelessEnabled=Y(ps);tracing=Y(Mo,{optional:!0});disableScheduling=Y(nm,{optional:!0})??!1;zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new Vt;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(wu):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(Y(lu,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{this.runningTick||this.cleanup()})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()})),this.disableScheduling||=!this.zonelessEnabled&&(this.ngZone instanceof Ya||!this.zoneIsDefined)}notify(t){if(!this.zonelessEnabled&&t===5)return;let i=!1;switch(t){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2,i=!0;break}case 12:{this.appRef.dirtyFlags|=16,i=!0;break}case 13:{this.appRef.dirtyFlags|=2,i=!0;break}case 11:{i=!0;break}case 9:case 8:case 7:case 10:default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick(i))return;let r=this.useMicrotaskScheduler?Hx:Tb;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>r(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>r(()=>this.tick()))}shouldScheduleTick(t){return!(this.disableScheduling&&!t||this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(wu+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let t=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(i){this.taskService.remove(t),this.applicationErrorHandler(i)}finally{this.cleanup()}this.useMicrotaskScheduler=!0,Hx(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(t)})}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let t=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(t)}}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Le({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function wg(){return Ki("NgZoneless"),pi([{provide:Ti,useExisting:Tg},{provide:Ot,useClass:Ya},{provide:ps,useValue:!0},{provide:lu,useValue:!1},[]])}function ID(){return typeof $localize<"u"&&$localize.locale||uc}var Cg=new _e("",{providedIn:"root",factory:()=>Y(Cg,{optional:!0,skipSelf:!0})||ID()});function Dr(n){return z0(n)}var BE=class{[En];constructor(e){this[En]=e}destroy(){this[En].destroy()}};var Ng={JSACTION:"__jsaction",OWNER:"__owner"},GE={};function AD(n){return n[Ng.JSACTION]}function VE(n,e){n[Ng.JSACTION]=e}function RD(n){return GE[n]}function DD(n,e){GE[n]=e}var Ne={AUXCLICK:"auxclick",CHANGE:"change",CLICK:"click",CLICKMOD:"clickmod",CLICKONLY:"clickonly",DBLCLICK:"dblclick",FOCUS:"focus",FOCUSIN:"focusin",BLUR:"blur",FOCUSOUT:"focusout",SUBMIT:"submit",KEYDOWN:"keydown",KEYPRESS:"keypress",KEYUP:"keyup",MOUSEUP:"mouseup",MOUSEDOWN:"mousedown",MOUSEOVER:"mouseover",MOUSEOUT:"mouseout",MOUSEENTER:"mouseenter",MOUSELEAVE:"mouseleave",MOUSEMOVE:"mousemove",POINTERUP:"pointerup",POINTERDOWN:"pointerdown",POINTEROVER:"pointerover",POINTEROUT:"pointerout",POINTERENTER:"pointerenter",POINTERLEAVE:"pointerleave",POINTERMOVE:"pointermove",POINTERCANCEL:"pointercancel",GOTPOINTERCAPTURE:"gotpointercapture",LOSTPOINTERCAPTURE:"lostpointercapture",ERROR:"error",LOAD:"load",UNLOAD:"unload",TOUCHSTART:"touchstart",TOUCHEND:"touchend",TOUCHMOVE:"touchmove",INPUT:"input",SCROLL:"scroll",TOGGLE:"toggle",CUSTOM:"_custom"},ND=[Ne.MOUSEENTER,Ne.MOUSELEAVE,"pointerenter","pointerleave"],N5=[Ne.CLICK,Ne.DBLCLICK,Ne.FOCUSIN,Ne.FOCUSOUT,Ne.KEYDOWN,Ne.KEYUP,Ne.KEYPRESS,Ne.MOUSEOVER,Ne.MOUSEOUT,Ne.SUBMIT,Ne.TOUCHSTART,Ne.TOUCHEND,Ne.TOUCHMOVE,"touchcancel","auxclick","change","compositionstart","compositionupdate","compositionend","beforeinput","input","select","copy","cut","paste","mousedown","mouseup","wheel","contextmenu","dragover","dragenter","dragleave","drop","dragstart","dragend","pointerdown","pointermove","pointerup","pointercancel","pointerover","pointerout","gotpointercapture","lostpointercapture","ended","loadedmetadata","pagehide","pageshow","visibilitychange","beforematch"],PD=[Ne.FOCUS,Ne.BLUR,Ne.ERROR,Ne.LOAD,Ne.TOGGLE],Pg=n=>PD.indexOf(n)>=0;function OD(n){return n===Ne.MOUSEENTER?Ne.MOUSEOVER:n===Ne.MOUSELEAVE?Ne.MOUSEOUT:n===Ne.POINTERENTER?Ne.POINTEROVER:n===Ne.POINTERLEAVE?Ne.POINTEROUT:n}function LD(n,e,t,i){let r=!1;Pg(e)&&(r=!0);let o=typeof i=="boolean"?{capture:r,passive:i}:r;return n.addEventListener(e,t,o),{eventType:e,handler:t,capture:r,passive:i}}function FD(n,e){if(n.removeEventListener){let t=typeof e.passive=="boolean"?{capture:e.capture}:e.capture;n.removeEventListener(e.eventType,e.handler,t)}else n.detachEvent&&n.detachEvent(`on${e.eventType}`,e.handler)}function kD(n){n.preventDefault?n.preventDefault():n.returnValue=!1}var HE=typeof navigator<"u"&&/Macintosh/.test(navigator.userAgent);function UD(n){return n.which===2||n.which==null&&n.button===4}function BD(n){return HE&&n.metaKey||!HE&&n.ctrlKey||UD(n)||n.shiftKey}function VD(n,e,t){let i=n.relatedTarget;return(n.type===Ne.MOUSEOVER&&e===Ne.MOUSEENTER||n.type===Ne.MOUSEOUT&&e===Ne.MOUSELEAVE||n.type===Ne.POINTEROVER&&e===Ne.POINTERENTER||n.type===Ne.POINTEROUT&&e===Ne.POINTERLEAVE)&&(!i||i!==t&&!t.contains(i))}function HD(n,e){let t={};for(let i in n){if(i==="srcElement"||i==="target")continue;let r=i,o=n[r];typeof o!="function"&&(t[r]=o)}return n.type===Ne.MOUSEOVER?t.type=Ne.MOUSEENTER:n.type===Ne.MOUSEOUT?t.type=Ne.MOUSELEAVE:n.type===Ne.POINTEROVER?t.type=Ne.POINTERENTER:t.type=Ne.POINTERLEAVE,t.target=t.srcElement=e,t.bubbles=!1,t._originalEvent=n,t}var zD=typeof navigator<"u"&&/iPhone|iPad|iPod/.test(navigator.userAgent),ad=class{element;handlerInfos=[];constructor(e){this.element=e}addEventListener(e,t,i){zD&&(this.element.style.cursor="pointer"),this.handlerInfos.push(LD(this.element,e,t(this.element),i))}cleanUp(){for(let e=0;e<this.handlerInfos.length;e++)FD(this.element,this.handlerInfos[e]);this.handlerInfos=[]}},GD={NAMESPACE_ACTION_SEPARATOR:".",EVENT_ACTION_SEPARATOR:":"};function Nr(n){return n.eventType}function Og(n,e){n.eventType=e}function od(n){return n.event}function jE(n,e){n.event=e}function WE(n){return n.targetElement}function $E(n,e){n.targetElement=e}function qE(n){return n.eic}function jD(n,e){n.eic=e}function WD(n){return n.timeStamp}function $D(n,e){n.timeStamp=e}function sd(n){return n.eia}function XE(n,e,t){n.eia=[e,t]}function Ig(n){n.eia=void 0}function rd(n){return n[1]}function qD(n){return n.eirp}function YE(n,e){n.eirp=e}function ZE(n){return n.eir}function KE(n,e){n.eir=e}function JE(n){return{eventType:n.eventType,event:n.event,targetElement:n.targetElement,eic:n.eic,eia:n.eia,timeStamp:n.timeStamp,eirp:n.eirp,eiack:n.eiack,eir:n.eir}}function XD(n,e,t,i,r,o,s,a){return{eventType:n,event:e,targetElement:t,eic:i,timeStamp:r,eia:o,eirp:s,eiack:a}}var Ag=class n{eventInfo;constructor(e){this.eventInfo=e}getEventType(){return Nr(this.eventInfo)}setEventType(e){Og(this.eventInfo,e)}getEvent(){return od(this.eventInfo)}setEvent(e){jE(this.eventInfo,e)}getTargetElement(){return WE(this.eventInfo)}setTargetElement(e){$E(this.eventInfo,e)}getContainer(){return qE(this.eventInfo)}setContainer(e){jD(this.eventInfo,e)}getTimestamp(){return WD(this.eventInfo)}setTimestamp(e){$D(this.eventInfo,e)}getAction(){let e=sd(this.eventInfo);if(e)return{name:e[0],element:e[1]}}setAction(e){if(!e){Ig(this.eventInfo);return}XE(this.eventInfo,e.name,e.element)}getIsReplay(){return qD(this.eventInfo)}setIsReplay(e){YE(this.eventInfo,e)}getResolved(){return ZE(this.eventInfo)}setResolved(e){KE(this.eventInfo,e)}clone(){return new n(JE(this.eventInfo))}},YD={},ZD=/\s*;\s*/,KD=Ne.CLICK,Rg=class{a11yClickSupport=!1;clickModSupport=!0;syntheticMouseEventSupport;updateEventInfoForA11yClick=void 0;preventDefaultForA11yClick=void 0;populateClickOnlyAction=void 0;constructor({syntheticMouseEventSupport:e=!1,clickModSupport:t=!0}={}){this.syntheticMouseEventSupport=e,this.clickModSupport=t}resolveEventType(e){this.clickModSupport&&Nr(e)===Ne.CLICK&&BD(od(e))?Og(e,Ne.CLICKMOD):this.a11yClickSupport&&this.updateEventInfoForA11yClick(e)}resolveAction(e){ZE(e)||(this.populateAction(e,WE(e)),KE(e,!0))}resolveParentAction(e){let t=sd(e),i=t&&rd(t);Ig(e);let r=i&&this.getParentNode(i);r&&this.populateAction(e,r)}populateAction(e,t){let i=t;for(;i&&i!==qE(e)&&(i.nodeType===Node.ELEMENT_NODE&&this.populateActionOnElement(i,e),!sd(e));)i=this.getParentNode(i);let r=sd(e);if(r&&(this.a11yClickSupport&&this.preventDefaultForA11yClick(e),this.syntheticMouseEventSupport&&(Nr(e)===Ne.MOUSEENTER||Nr(e)===Ne.MOUSELEAVE||Nr(e)===Ne.POINTERENTER||Nr(e)===Ne.POINTERLEAVE)))if(VD(od(e),Nr(e),rd(r))){let o=HD(od(e),rd(r));jE(e,o),$E(e,rd(r))}else Ig(e)}getParentNode(e){let t=e[Ng.OWNER];if(t)return t;let i=e.parentNode;return i?.nodeName==="#document-fragment"?i?.host??null:i}populateActionOnElement(e,t){let i=this.parseActions(e),r=i[Nr(t)];r!==void 0&&XE(t,r,e),this.a11yClickSupport&&this.populateClickOnlyAction(e,t,i)}parseActions(e){let t=AD(e);if(!t){let i=e.getAttribute(du.JSACTION);if(!i)t=YD,VE(e,t);else{if(t=RD(i),!t){t={};let r=i.split(ZD);for(let o=0;o<r.length;o++){let s=r[o];if(!s)continue;let a=s.indexOf(GD.EVENT_ACTION_SEPARATOR),c=a!==-1,l=c?s.substr(0,a).trim():KD,u=c?s.substr(a+1).trim():s;t[l]=u}DD(i,t)}VE(e,t)}}return t}addA11yClickSupport(e,t,i){this.a11yClickSupport=!0,this.updateEventInfoForA11yClick=e,this.preventDefaultForA11yClick=t,this.populateClickOnlyAction=i}},QE=(function(n){return n[n.I_AM_THE_JSACTION_FRAMEWORK=0]="I_AM_THE_JSACTION_FRAMEWORK",n})(QE||{}),Dg=class{dispatchDelegate;actionResolver;eventReplayer;eventReplayScheduled=!1;replayEventInfoWrappers=[];constructor(e,{actionResolver:t,eventReplayer:i}={}){this.dispatchDelegate=e,this.actionResolver=t,this.eventReplayer=i}dispatch(e){let t=new Ag(e);this.actionResolver?.resolveEventType(e),this.actionResolver?.resolveAction(e);let i=t.getAction();if(i&&JD(i.element,t)&&kD(t.getEvent()),this.eventReplayer&&t.getIsReplay()){this.scheduleEventInfoWrapperReplay(t);return}this.dispatchDelegate(t)}scheduleEventInfoWrapperReplay(e){this.replayEventInfoWrappers.push(e),!this.eventReplayScheduled&&(this.eventReplayScheduled=!0,Promise.resolve().then(()=>{this.eventReplayScheduled=!1,this.eventReplayer(this.replayEventInfoWrappers)}))}};function JD(n,e){return n.tagName==="A"&&(e.getEventType()===Ne.CLICK||e.getEventType()===Ne.CLICKMOD)}var eS=Symbol.for("propagationStopped"),Lg={REPLAY:101};var QD="`preventDefault` called during event replay.";var e1="`composedPath` called during event replay.",cd=class{dispatchDelegate;clickModSupport;actionResolver;dispatcher;constructor(e,t=!0){this.dispatchDelegate=e,this.clickModSupport=t,this.actionResolver=new Rg({clickModSupport:t}),this.dispatcher=new Dg(i=>{this.dispatchToDelegate(i)},{actionResolver:this.actionResolver})}dispatch(e){this.dispatcher.dispatch(e)}dispatchToDelegate(e){for(e.getIsReplay()&&i1(e),t1(e);e.getAction();){if(r1(e),Pg(e.getEventType())&&e.getAction().element!==e.getTargetElement()||(this.dispatchDelegate(e.getEvent(),e.getAction().name),n1(e)))return;this.actionResolver.resolveParentAction(e.eventInfo)}}};function t1(n){let e=n.getEvent(),t=n.getEvent().stopPropagation.bind(e),i=()=>{e[eS]=!0,t()};To(e,"stopPropagation",i),To(e,"stopImmediatePropagation",i)}function n1(n){return!!n.getEvent()[eS]}function i1(n){let e=n.getEvent(),t=n.getTargetElement(),i=e.preventDefault.bind(e);To(e,"target",t),To(e,"eventPhase",Lg.REPLAY),To(e,"preventDefault",()=>{throw i(),new Error(QD+"")}),To(e,"composedPath",()=>{throw new Error(e1+"")})}function r1(n){let e=n.getEvent(),t=n.getAction()?.element;t&&To(e,"currentTarget",t,{configurable:!0})}function To(n,e,t,{configurable:i=!1}={}){Object.defineProperty(n,e,{value:t,configurable:i})}function tS(n,e){n.ecrd(t=>{e.dispatch(t)},QE.I_AM_THE_JSACTION_FRAMEWORK)}function o1(n){return n?.q??[]}function s1(n){n&&(zE(n.c,n.et,n.h),zE(n.c,n.etc,n.h,!0))}function zE(n,e,t,i){for(let r=0;r<e.length;r++)n.removeEventListener(e[r],t,i)}var a1=!1,nS=(()=>{class n{static MOUSE_SPECIAL_SUPPORT=a1;containerManager;eventHandlers={};browserEventTypeToExtraEventTypes={};dispatcher=null;queuedEventInfos=[];constructor(t){this.containerManager=t}handleEvent(t,i,r){let o=XD(t,i,i.target,r,Date.now());this.handleEventInfo(o)}handleEventInfo(t){if(!this.dispatcher){YE(t,!0),this.queuedEventInfos?.push(t);return}this.dispatcher(t)}addEvent(t,i,r){if(t in this.eventHandlers||!this.containerManager||!n.MOUSE_SPECIAL_SUPPORT&&ND.indexOf(t)>=0)return;let o=(a,c,l)=>{this.handleEvent(a,c,l)};this.eventHandlers[t]=o;let s=OD(i||t);if(s!==t){let a=this.browserEventTypeToExtraEventTypes[s]||[];a.push(t),this.browserEventTypeToExtraEventTypes[s]=a}this.containerManager.addEventListener(s,a=>c=>{o(t,c,a)},r)}replayEarlyEvents(t=window._ejsa){t&&(this.replayEarlyEventInfos(t.q),s1(t),delete window._ejsa)}replayEarlyEventInfos(t){for(let i=0;i<t.length;i++){let r=t[i],o=this.getEventTypesForBrowserEventType(r.eventType);for(let s=0;s<o.length;s++){let a=JE(r);Og(a,o[s]),this.handleEventInfo(a)}}}getEventTypesForBrowserEventType(t){let i=[];return this.eventHandlers[t]&&i.push(t),this.browserEventTypeToExtraEventTypes[t]&&i.push(...this.browserEventTypeToExtraEventTypes[t]),i}handler(t){return this.eventHandlers[t]}cleanUp(){this.containerManager?.cleanUp(),this.containerManager=null,this.eventHandlers={},this.browserEventTypeToExtraEventTypes={},this.dispatcher=null,this.queuedEventInfos=[]}registerDispatcher(t,i){this.ecrd(t,i)}ecrd(t,i){if(this.dispatcher=t,this.queuedEventInfos?.length){for(let r=0;r<this.queuedEventInfos.length;r++)this.handleEventInfo(this.queuedEventInfos[r]);this.queuedEventInfos=null}}}return n})();function iS(n,e=window){return o1(e._ejsas?.[n])}function Fg(n,e=window){e._ejsas&&(e._ejsas[n]=void 0)}var uS=Symbol("InputSignalNode#UNSET"),P1=Tt(me({},El),{transformFn:void 0,applyValueToInputSignal(n,e){Ko(n,e)}});function dS(n,e){let t=Object.create(P1);t.value=n,t.transformFn=e?.transform;function i(){if(ya(t),t.value===uS){let r=null;throw new Ee(-950,r)}return t.value}return i[En]=t,i}var O1=new _e("");O1.__NG_ELEMENT_ID__=n=>{let e=In();if(e===null)throw new Ee(204,!1);if(e.type&2)return e.value;if(n&8)return null;throw new Ee(204,!1)};function rS(n,e){return dS(n,e)}function L1(n){return dS(uS,n)}var fS=(rS.required=L1,rS);var kg=new _e(""),F1=new _e("");function fc(n){return!n.moduleRef}function k1(n){let e=fc(n)?n.r3Injector:n.moduleRef.injector,t=e.get(Ot);return t.run(()=>{fc(n)?n.r3Injector.resolveInjectorInitializers():n.moduleRef.resolveInjectorInitializers();let i=e.get(Gn),r;if(t.runOutsideAngular(()=>{r=t.onError.subscribe({next:i})}),fc(n)){let o=()=>e.destroy(),s=n.platformInjector.get(kg);s.add(o),e.onDestroy(()=>{r.unsubscribe(),s.delete(o)})}else{let o=()=>n.moduleRef.destroy(),s=n.platformInjector.get(kg);s.add(o),n.moduleRef.onDestroy(()=>{Wa(n.allPlatformModules,n.moduleRef),r.unsubscribe(),s.delete(o)})}return B1(i,t,()=>{let o=e.get(gi),s=o.add(),a=e.get(yg);return a.runInitializers(),a.donePromise.then(()=>{let c=e.get(Cg,uc);if(OE(c||uc),!e.get(F1,!0))return fc(n)?e.get(An):(n.allPlatformModules.push(n.moduleRef),n.moduleRef);if(fc(n)){let u=e.get(An);return n.rootComponent!==void 0&&u.bootstrap(n.rootComponent),u}else return U1?.(n.moduleRef,n.allPlatformModules),n.moduleRef}).finally(()=>void o.remove(s))})})}var U1;function B1(n,e,t){try{let i=t();return ac(i)?i.catch(r=>{throw e.runOutsideAngular(()=>n(r)),r}):i}catch(i){throw e.runOutsideAngular(()=>n(i)),i}}var ud=null;function V1(n=[],e){return Un.create({name:e,providers:[{provide:Da,useValue:"platform"},{provide:kg,useValue:new Set([()=>ud=null])},...n]})}function H1(n=[]){if(ud)return ud;let e=V1(n);return ud=e,IE(),z1(e),e}function z1(n){let e=n.get(Uu,null);ln(n,()=>{e?.forEach(t=>t())})}var hS=(()=>{class n{static __NG_ELEMENT_ID__=G1}return n})();function G1(n){return j1(In(),Rt(),(n&16)===16)}function j1(n,e,t){if(Sr(n)&&!t){let i=Ai(n.index,e);return new Ir(i,i)}else if(n.type&175){let i=e[Cn];return new Ir(i,e)}return null}function pS(n){let{rootComponent:e,appProviders:t,platformProviders:i,platformRef:r}=n;mt(8);try{let o=r?.injector??H1(i),s=[kE({}),{provide:Ti,useExisting:Tg},Cx,...t||[]],a=new Ja({providers:s,parent:o,debugName:"",runEnvironmentInitializers:!1});return k1({r3Injector:a.injector,platformInjector:o,rootComponent:e})}catch(o){return Promise.reject(o)}finally{mt(9)}}var ld=new WeakSet,oS="",dd=[];function sS(n){return n.get(Gm,j_)}function mS(){let n=[{provide:Gm,useFactory:()=>{let e=!0;{let t=Y(Di);e=!!window._ejsas?.[t]}return e&&Ki("NgEventReplay"),e}}];return n.push({provide:ei,useValue:()=>{let e=Y(An),{injector:t}=e;if(!ld.has(e)){let i=Y(jm);if(sS(t)){J_();let r=t.get(Di),o=Z_(r,(s,a,c)=>{s.nodeType===Node.ELEMENT_NODE&&($_(s,a,c),q_(s,i))});e.onDestroy(o)}}},multi:!0},{provide:Ar,useFactory:()=>{let e=Y(An),{injector:t}=e;return()=>{if(!sS(t)||ld.has(e))return;ld.add(e);let i=t.get(Di);e.onDestroy(()=>{ld.delete(e),Fg(i)}),e.whenStable().then(()=>{if(e.destroyed)return;let r=t.get(Y_);W1(r,t);let o=t.get(jm);o.get(oS)?.forEach(X_),o.delete(oS);let s=r.instance;ob(t)?e.onDestroy(()=>s.cleanUp()):s.cleanUp()})}},multi:!0}),n}var W1=(n,e)=>{let t=e.get(Di),i=window._ejsas[t],r=n.instance=new nS(new ad(i.c));for(let a of i.et)r.addEvent(a);for(let a of i.etc)r.addEvent(a);let o=iS(t);r.replayEarlyEventInfos(o),Fg(t);let s=new cd(a=>{$1(e,a,a.currentTarget)});tS(r,s)};function $1(n,e,t){let i=(t&&t.getAttribute(ic))??"";/d\d+/.test(i)?q1(i,n,e,t):e.eventPhase===Lg.REPLAY&&Wm(e,t)}function q1(n,e,t,i){dd.push({event:t,currentTarget:i}),DE(e,n,X1)}function X1(n){let e=[...dd],t=new Set(n);dd=[];for(let{event:i,currentTarget:r}of e){let o=r.getAttribute(ic);t.has(o)?Wm(i,r):dd.push({event:i,currentTarget:r})}}var aS=!1;function Y1(){aS||(aS=!0,nb(),NE(),FE(),PE(),SE(),yE(),nE(),kb())}function Z1(n){return n.whenStable()}function gS(){let n=[{provide:nc,useFactory:()=>{let e=!0;return e=!!Y(Eo,{optional:!0})?.get($m,null),e&&Ki("NgHydration"),e}},{provide:ei,useValue:()=>{Qb(!1),Y(nc)&&(cb(ec()),Y1())},multi:!0}];return n.push({provide:zm,useFactory:()=>Y(nc)},{provide:Ar,useFactory:()=>{if(Y(nc)){let e=Y(An);return()=>{Z1(e).then(()=>{e.destroyed||hg(e)})}}return()=>{}},multi:!0}),pi(n)}var xS=null;function Ji(){return xS}function Ug(n){xS??=n}var hc=class{},Bg=(()=>{class n{historyGo(t){throw new Error("")}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Le({token:n,factory:()=>Y(_S),providedIn:"platform"})}return n})();var _S=(()=>{class n extends Bg{_location;_history;_doc=Y($t);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Ji().getBaseHref(this._doc)}onPopState(t){let i=Ji().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",t,!1),()=>i.removeEventListener("popstate",t)}onHashChange(t){let i=Ji().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",t,!1),()=>i.removeEventListener("hashchange",t)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(t){this._location.pathname=t}pushState(t,i,r){this._history.pushState(t,i,r)}replaceState(t,i,r){this._history.replaceState(t,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(t=0){this._history.go(t)}getState(){return this._history.state}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Le({token:n,factory:()=>new n,providedIn:"platform"})}return n})();function bS(n,e){return n?e?n.endsWith("/")?e.startsWith("/")?n+e.slice(1):n+e:e.startsWith("/")?n+e:`${n}/${e}`:n:e}function vS(n){let e=n.search(/#|\?|$/);return n[e-1]==="/"?n.slice(0,e-1)+n.slice(e):n}function Pr(n){return n&&n[0]!=="?"?`?${n}`:n}var fd=(()=>{class n{historyGo(t){throw new Error("")}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Le({token:n,factory:()=>Y(SS),providedIn:"root"})}return n})(),ES=new _e(""),SS=(()=>{class n extends fd{_platformLocation;_baseHref;_removeListenerFns=[];constructor(t,i){super(),this._platformLocation=t,this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??Y($t).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}prepareExternalUrl(t){return bS(this._baseHref,t)}path(t=!1){let i=this._platformLocation.pathname+Pr(this._platformLocation.search),r=this._platformLocation.hash;return r&&t?`${i}${r}`:i}pushState(t,i,r,o){let s=this.prepareExternalUrl(r+Pr(o));this._platformLocation.pushState(t,i,s)}replaceState(t,i,r,o){let s=this.prepareExternalUrl(r+Pr(o));this._platformLocation.replaceState(t,i,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}static \u0275fac=function(i){return new(i||n)(Ke(Bg),Ke(ES,8))};static \u0275prov=Le({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Cs=(()=>{class n{_subject=new Zt;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(t){this._locationStrategy=t;let i=this._locationStrategy.getBaseHref();this._basePath=Q1(vS(yS(i))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(t=!1){return this.normalize(this._locationStrategy.path(t))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(t,i=""){return this.path()==this.normalize(t+Pr(i))}normalize(t){return n.stripTrailingSlash(J1(this._basePath,yS(t)))}prepareExternalUrl(t){return t&&t[0]!=="/"&&(t="/"+t),this._locationStrategy.prepareExternalUrl(t)}go(t,i="",r=null){this._locationStrategy.pushState(r,"",t,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+Pr(i)),r)}replaceState(t,i="",r=null){this._locationStrategy.replaceState(r,"",t,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+Pr(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(t=0){this._locationStrategy.historyGo?.(t)}onUrlChange(t){return this._urlChangeListeners.push(t),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(t);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(t="",i){this._urlChangeListeners.forEach(r=>r(t,i))}subscribe(t,i,r){return this._subject.subscribe({next:t,error:i??void 0,complete:r??void 0})}static normalizeQueryParams=Pr;static joinWithSlash=bS;static stripTrailingSlash=vS;static \u0275fac=function(i){return new(i||n)(Ke(fd))};static \u0275prov=Le({token:n,factory:()=>K1(),providedIn:"root"})}return n})();function K1(){return new Cs(Ke(fd))}function J1(n,e){if(!n||!e.startsWith(n))return e;let t=e.substring(n.length);return t===""||["/",";","?","#"].includes(t[0])?t:e}function yS(n){return n.replace(/\/index.html$/,"")}function Q1(n){if(new RegExp("^(https?:)?//").test(n)){let[,t]=n.split(/\/\/[^\/]+/);return t}return n}function Vg(n,e){e=encodeURIComponent(e);for(let t of n.split(";")){let i=t.indexOf("="),[r,o]=i==-1?[t,""]:[t.slice(0,i),t.slice(i+1)];if(r.trim()===e)return decodeURIComponent(o)}return null}var pc=class{};var MS="browser";var mc=class{_doc;constructor(e){this._doc=e}manager},hd=(()=>{class n extends mc{constructor(t){super(t)}supports(t){return!0}addEventListener(t,i,r,o){return t.addEventListener(i,r,o),()=>this.removeEventListener(t,i,r,o)}removeEventListener(t,i,r,o){return t.removeEventListener(i,r,o)}static \u0275fac=function(i){return new(i||n)(Ke($t))};static \u0275prov=Le({token:n,factory:n.\u0275fac})}return n})(),md=new _e(""),Wg=(()=>{class n{_zone;_plugins;_eventNameToPlugin=new Map;constructor(t,i){this._zone=i,t.forEach(s=>{s.manager=this});let r=t.filter(s=>!(s instanceof hd));this._plugins=r.slice().reverse();let o=t.find(s=>s instanceof hd);o&&this._plugins.push(o)}addEventListener(t,i,r,o){return this._findPluginFor(i).addEventListener(t,i,r,o)}getZone(){return this._zone}_findPluginFor(t){let i=this._eventNameToPlugin.get(t);if(i)return i;if(i=this._plugins.find(o=>o.supports(t)),!i)throw new Ee(5101,!1);return this._eventNameToPlugin.set(t,i),i}static \u0275fac=function(i){return new(i||n)(Ke(md),Ke(Ot))};static \u0275prov=Le({token:n,factory:n.\u0275fac})}return n})(),Hg="ng-app-id";function TS(n){for(let e of n)e.remove()}function wS(n,e){let t=e.createElement("style");return t.textContent=n,t}function eN(n,e,t,i){let r=n.head?.querySelectorAll(`style[${Hg}="${e}"],link[${Hg}="${e}"]`);if(r)for(let o of r)o.removeAttribute(Hg),o instanceof HTMLLinkElement?i.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&t.set(o.textContent,{usage:0,elements:[o]})}function Gg(n,e){let t=e.createElement("link");return t.setAttribute("rel","stylesheet"),t.setAttribute("href",n),t}var $g=(()=>{class n{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(t,i,r,o={}){this.doc=t,this.appId=i,this.nonce=r,eN(t,i,this.inline,this.external),this.hosts.add(t.head)}addStyles(t,i){for(let r of t)this.addUsage(r,this.inline,wS);i?.forEach(r=>this.addUsage(r,this.external,Gg))}removeStyles(t,i){for(let r of t)this.removeUsage(r,this.inline);i?.forEach(r=>this.removeUsage(r,this.external))}addUsage(t,i,r){let o=i.get(t);o?o.usage++:i.set(t,{usage:1,elements:[...this.hosts].map(s=>this.addElement(s,r(t,this.doc)))})}removeUsage(t,i){let r=i.get(t);r&&(r.usage--,r.usage<=0&&(TS(r.elements),i.delete(t)))}ngOnDestroy(){for(let[,{elements:t}]of[...this.inline,...this.external])TS(t);this.hosts.clear()}addHost(t){this.hosts.add(t);for(let[i,{elements:r}]of this.inline)r.push(this.addElement(t,wS(i,this.doc)));for(let[i,{elements:r}]of this.external)r.push(this.addElement(t,Gg(i,this.doc)))}removeHost(t){this.hosts.delete(t)}addElement(t,i){return this.nonce&&i.setAttribute("nonce",this.nonce),t.appendChild(i)}static \u0275fac=function(i){return new(i||n)(Ke($t),Ke(Di),Ke(Bu,8),Ke(tc))};static \u0275prov=Le({token:n,factory:n.\u0275fac})}return n})(),zg={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},qg=/%COMP%/g;var IS="%COMP%",tN=`_nghost-${IS}`,nN=`_ngcontent-${IS}`,iN=!0,rN=new _e("",{providedIn:"root",factory:()=>iN});function oN(n){return nN.replace(qg,n)}function sN(n){return tN.replace(qg,n)}function AS(n,e){return e.map(t=>t.replace(qg,n))}var Xg=(()=>{class n{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;platformIsServer;constructor(t,i,r,o,s,a,c=null,l=null){this.eventManager=t,this.sharedStylesHost=i,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=s,this.ngZone=a,this.nonce=c,this.tracingService=l,this.platformIsServer=!1,this.defaultRenderer=new gc(t,s,a,this.platformIsServer,this.tracingService)}createRenderer(t,i){if(!t||!i)return this.defaultRenderer;let r=this.getOrCreateRenderer(t,i);return r instanceof pd?r.applyToHost(t):r instanceof vc&&r.applyStyles(),r}getOrCreateRenderer(t,i){let r=this.rendererByCompId,o=r.get(i.id);if(!o){let s=this.doc,a=this.ngZone,c=this.eventManager,l=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,d=this.platformIsServer,f=this.tracingService;switch(i.encapsulation){case Zi.Emulated:o=new pd(c,l,i,this.appId,u,s,a,d,f);break;case Zi.ShadowDom:return new jg(c,l,t,i,s,a,this.nonce,d,f);default:o=new vc(c,l,i,u,s,a,d,f);break}r.set(i.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(t){this.rendererByCompId.delete(t)}static \u0275fac=function(i){return new(i||n)(Ke(Wg),Ke($g),Ke(Di),Ke(rN),Ke($t),Ke(Ot),Ke(Bu),Ke(Mo,8))};static \u0275prov=Le({token:n,factory:n.\u0275fac})}return n})(),gc=class{eventManager;doc;ngZone;platformIsServer;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(e,t,i,r,o){this.eventManager=e,this.doc=t,this.ngZone=i,this.platformIsServer=r,this.tracingService=o}destroy(){}destroyNode=null;createElement(e,t){return t?this.doc.createElementNS(zg[t]||t,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,t){(CS(e)?e.content:e).appendChild(t)}insertBefore(e,t,i){e&&(CS(e)?e.content:e).insertBefore(t,i)}removeChild(e,t){t.remove()}selectRootElement(e,t){let i=typeof e=="string"?this.doc.querySelector(e):e;if(!i)throw new Ee(-5104,!1);return t||(i.textContent=""),i}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,t,i,r){if(r){t=r+":"+t;let o=zg[r];o?e.setAttributeNS(o,t,i):e.setAttribute(t,i)}else e.setAttribute(t,i)}removeAttribute(e,t,i){if(i){let r=zg[i];r?e.removeAttributeNS(r,t):e.removeAttribute(`${i}:${t}`)}else e.removeAttribute(t)}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}setStyle(e,t,i,r){r&(So.DashCase|So.Important)?e.style.setProperty(t,i,r&So.Important?"important":""):e.style[t]=i}removeStyle(e,t,i){i&So.DashCase?e.style.removeProperty(t):e.style[t]=""}setProperty(e,t,i){e!=null&&(e[t]=i)}setValue(e,t){e.nodeValue=t}listen(e,t,i,r){if(typeof e=="string"&&(e=Ji().getGlobalEventTarget(this.doc,e),!e))throw new Ee(5102,!1);let o=this.decoratePreventDefault(i);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(e,t,o)),this.eventManager.addEventListener(e,t,o,r)}decoratePreventDefault(e){return t=>{if(t==="__ngUnwrap__")return e;e(t)===!1&&t.preventDefault()}}};function CS(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var jg=class extends gc{sharedStylesHost;hostEl;shadowRoot;constructor(e,t,i,r,o,s,a,c,l){super(e,o,s,c,l),this.sharedStylesHost=t,this.hostEl=i,this.shadowRoot=i.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let u=r.styles;u=AS(r.id,u);for(let f of u){let h=document.createElement("style");a&&h.setAttribute("nonce",a),h.textContent=f,this.shadowRoot.appendChild(h)}let d=r.getExternalStyles?.();if(d)for(let f of d){let h=Gg(f,o);a&&h.setAttribute("nonce",a),this.shadowRoot.appendChild(h)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,t){return super.appendChild(this.nodeOrShadowRoot(e),t)}insertBefore(e,t,i){return super.insertBefore(this.nodeOrShadowRoot(e),t,i)}removeChild(e,t){return super.removeChild(null,t)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},vc=class extends gc{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(e,t,i,r,o,s,a,c,l){super(e,o,s,a,c),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=r;let u=i.styles;this.styles=l?AS(l,u):u,this.styleUrls=i.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&xs.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},pd=class extends vc{contentAttr;hostAttr;constructor(e,t,i,r,o,s,a,c,l){let u=r+"-"+i.id;super(e,t,i,o,s,a,c,l,u),this.contentAttr=oN(u),this.hostAttr=sN(u)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,t){let i=super.createElement(e,t);return super.setAttribute(i,this.contentAttr,""),i}};var gd=class n extends hc{supportsDOMEvents=!0;static makeCurrent(){Ug(new n)}onAndCancel(e,t,i,r){return e.addEventListener(t,i,r),()=>{e.removeEventListener(t,i,r)}}dispatchEvent(e,t){e.dispatchEvent(t)}remove(e){e.remove()}createElement(e,t){return t=t||this.getDefaultDocument(),t.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,t){return t==="window"?window:t==="document"?e:t==="body"?e.body:null}getBaseHref(e){let t=aN();return t==null?null:cN(t)}resetBaseElement(){yc=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return Vg(document.cookie,e)}},yc=null;function aN(){return yc=yc||document.head.querySelector("base"),yc?yc.getAttribute("href"):null}function cN(n){return new URL(n,document.baseURI).pathname}var lN=(()=>{class n{build(){return new XMLHttpRequest}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Le({token:n,factory:n.\u0275fac})}return n})(),RS=["alt","control","meta","shift"],uN={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},dN={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},DS=(()=>{class n extends mc{constructor(t){super(t)}supports(t){return n.parseEventName(t)!=null}addEventListener(t,i,r,o){let s=n.parseEventName(i),a=n.eventCallback(s.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Ji().onAndCancel(t,s.domEventName,a,o))}static parseEventName(t){let i=t.toLowerCase().split("."),r=i.shift();if(i.length===0||!(r==="keydown"||r==="keyup"))return null;let o=n._normalizeKey(i.pop()),s="",a=i.indexOf("code");if(a>-1&&(i.splice(a,1),s="code."),RS.forEach(l=>{let u=i.indexOf(l);u>-1&&(i.splice(u,1),s+=l+".")}),s+=o,i.length!=0||o.length===0)return null;let c={};return c.domEventName=r,c.fullKey=s,c}static matchEventFullKeyCode(t,i){let r=uN[t.key]||t.key,o="";return i.indexOf("code.")>-1&&(r=t.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),RS.forEach(s=>{if(s!==r){let a=dN[s];a(t)&&(o+=s+".")}}),o+=r,o===i)}static eventCallback(t,i,r){return o=>{n.matchEventFullKeyCode(o,t)&&r.runGuarded(()=>i(o))}}static _normalizeKey(t){return t==="esc"?"escape":t}static \u0275fac=function(i){return new(i||n)(Ke($t))};static \u0275prov=Le({token:n,factory:n.\u0275fac})}return n})();function Yg(n,e,t){let i=me({rootComponent:n,platformRef:t?.platformRef},fN(e));return pS(i)}function fN(n){return{appProviders:[...vN,...n?.providers??[]],platformProviders:gN}}function hN(){gd.makeCurrent()}function pN(){return new hi}function mN(){return Bm(document),document}var gN=[{provide:tc,useValue:MS},{provide:Uu,useValue:hN,multi:!0},{provide:$t,useFactory:mN}];var vN=[{provide:Da,useValue:"root"},{provide:hi,useFactory:pN},{provide:md,useClass:hd,multi:!0,deps:[$t]},{provide:md,useClass:DS,multi:!0,deps:[$t]},Xg,$g,Wg,{provide:bo,useExisting:Xg},{provide:pc,useClass:lN},[]];var xc=class n{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(e){e?typeof e=="string"?this.lazyInit=()=>{this.headers=new Map,e.split(`
`).forEach(t=>{let i=t.indexOf(":");if(i>0){let r=t.slice(0,i),o=t.slice(i+1).trim();this.addHeaderEntry(r,o)}})}:typeof Headers<"u"&&e instanceof Headers?(this.headers=new Map,e.forEach((t,i)=>{this.addHeaderEntry(i,t)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(e).forEach(([t,i])=>{this.setHeaderEntries(t,i)})}:this.headers=new Map}has(e){return this.init(),this.headers.has(e.toLowerCase())}get(e){this.init();let t=this.headers.get(e.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(e){return this.init(),this.headers.get(e.toLowerCase())||null}append(e,t){return this.clone({name:e,value:t,op:"a"})}set(e,t){return this.clone({name:e,value:t,op:"s"})}delete(e,t){return this.clone({name:e,value:t,op:"d"})}maybeSetNormalizedName(e,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,e)}init(){this.lazyInit&&(this.lazyInit instanceof n?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(e=>this.applyUpdate(e)),this.lazyUpdate=null))}copyFrom(e){e.init(),Array.from(e.headers.keys()).forEach(t=>{this.headers.set(t,e.headers.get(t)),this.normalizedNames.set(t,e.normalizedNames.get(t))})}clone(e){let t=new n;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof n?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([e]),t}applyUpdate(e){let t=e.name.toLowerCase();switch(e.op){case"a":case"s":let i=e.value;if(typeof i=="string"&&(i=[i]),i.length===0)return;this.maybeSetNormalizedName(e.name,t);let r=(e.op==="a"?this.headers.get(t):void 0)||[];r.push(...i),this.headers.set(t,r);break;case"d":let o=e.value;if(!o)this.headers.delete(t),this.normalizedNames.delete(t);else{let s=this.headers.get(t);if(!s)return;s=s.filter(a=>o.indexOf(a)===-1),s.length===0?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,s)}break}}addHeaderEntry(e,t){let i=e.toLowerCase();this.maybeSetNormalizedName(e,i),this.headers.has(i)?this.headers.get(i).push(t):this.headers.set(i,[t])}setHeaderEntries(e,t){let i=(Array.isArray(t)?t:[t]).map(o=>o.toString()),r=e.toLowerCase();this.headers.set(r,i),this.maybeSetNormalizedName(e,r)}forEach(e){this.init(),Array.from(this.normalizedNames.keys()).forEach(t=>e(this.normalizedNames.get(t),this.headers.get(t)))}};var yN="X-Request-URL",xN="text/plain",_N="application/json",eq=`${_N}, ${xN}, */*`;var Kg=(function(n){return n[n.Sent=0]="Sent",n[n.UploadProgress=1]="UploadProgress",n[n.ResponseHeader=2]="ResponseHeader",n[n.DownloadProgress=3]="DownloadProgress",n[n.Response=4]="Response",n[n.User=5]="User",n})(Kg||{}),Zg=class{headers;status;statusText;url;ok;type;redirected;constructor(e,t=200,i="OK"){this.headers=e.headers||new xc,this.status=e.status!==void 0?e.status:t,this.statusText=e.statusText||i,this.url=e.url||null,this.redirected=e.redirected,this.ok=this.status>=200&&this.status<300}};var vd=class n extends Zg{body;constructor(e={}){super(e),this.body=e.body!==void 0?e.body:null}type=Kg.Response;clone(e={}){return new n({body:e.body!==void 0?e.body:this.body,headers:e.headers||this.headers,status:e.status!==void 0?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0,redirected:e.redirected??this.redirected})}};var NS=new _e("");var tq=RegExp(`^${yN}:`,"m");var bN=new _e(""),EN="b",SN="h",MN="s",TN="st",wN="u",CN="rt",Jg=new _e(""),IN=["GET","HEAD"];function AN(n,e){let h=Y(Jg),{isCacheActive:t}=h,i=r0(h,["isCacheActive"]),{transferCache:r,method:o}=n;if(!t||r===!1||o==="POST"&&!i.includePostRequests&&!r||o!=="POST"&&!IN.includes(o)||!i.includeRequestsWithAuthHeaders&&RN(n)||i.filter?.(n)===!1)return e(n);let s=Y(Eo);if(Y(bN,{optional:!0}))throw new Ee(2803,!1);let c=n.url,l=DN(n,c),u=s.get(l,null),d=i.includeHeaders;if(typeof r=="object"&&r.includeHeaders&&(d=r.includeHeaders),u){let{[EN]:g,[CN]:y,[SN]:m,[MN]:p,[TN]:w,[wN]:S}=u,I=g;switch(y){case"arraybuffer":I=new TextEncoder().encode(g).buffer;break;case"blob":I=new Blob([g]);break}let R=new xc(m);return Ue(new vd({body:I,headers:R,status:p,statusText:w,url:S}))}return e(n)}function RN(n){return n.headers.has("authorization")||n.headers.has("proxy-authorization")}function PS(n){return[...n.keys()].sort().map(e=>`${e}=${n.getAll(e)}`).join("&")}function DN(n,e){let{params:t,method:i,responseType:r}=n,o=PS(t),s=n.serializeBody();s instanceof URLSearchParams?s=PS(s):typeof s!="string"&&(s="");let a=[i,r,e,s,o].join("|"),c=NN(a);return c}function NN(n){let e=0;for(let t of n)e=Math.imul(31,e)+t.charCodeAt(0)<<0;return e+=2147483648,e.toString()}function OS(n){return[{provide:Jg,useFactory:()=>(Ki("NgHttpTransferCache"),me({isCacheActive:!0},n))},{provide:NS,useValue:AN,multi:!0},{provide:Ar,multi:!0,useFactory:()=>{let e=Y(An),t=Y(Jg);return()=>{e.whenStable().then(()=>{t.isCacheActive=!1})}}}]}var LS=(()=>{class n{_doc;constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||""}static \u0275fac=function(i){return new(i||n)(Ke($t))};static \u0275prov=Le({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var yd=(function(n){return n[n.NoHttpTransferCache=0]="NoHttpTransferCache",n[n.HttpTransferCacheOptions=1]="HttpTransferCacheOptions",n[n.I18nSupport=2]="I18nSupport",n[n.EventReplay=3]="EventReplay",n[n.IncrementalHydration=4]="IncrementalHydration",n})(yd||{});function PN(n,e=[],t={}){return{\u0275kind:n,\u0275providers:e}}function FS(){return PN(yd.EventReplay,mS())}function kS(...n){let e=[],t=new Set;for(let{\u0275providers:r,\u0275kind:o}of n)t.add(o),r.length&&e.push(r);let i=t.has(yd.HttpTransferCacheOptions);return pi([[],[],gS(),t.has(yd.NoHttpTransferCache)||i?[]:OS({}),e])}var We="primary",Nc=Symbol("RouteTitle"),iv=class{params;constructor(e){this.params=e||{}}has(e){return Object.prototype.hasOwnProperty.call(this.params,e)}get(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t[0]:t}return null}getAll(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t:[t]}return[]}get keys(){return Object.keys(this.params)}};function Ps(n){return new iv(n)}function LN(n,e,t){let i=t.path.split("/");if(i.length>n.length||t.pathMatch==="full"&&(e.hasChildren()||i.length<n.length))return null;let r={};for(let o=0;o<i.length;o++){let s=i[o],a=n[o];if(s[0]===":")r[s.substring(1)]=a;else if(s!==a.path)return null}return{consumed:n.slice(0,i.length),posParams:r}}function FN(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;++t)if(!Ni(n[t],e[t]))return!1;return!0}function Ni(n,e){let t=n?rv(n):void 0,i=e?rv(e):void 0;if(!t||!i||t.length!=i.length)return!1;let r;for(let o=0;o<t.length;o++)if(r=t[o],!WS(n[r],e[r]))return!1;return!0}function rv(n){return[...Object.keys(n),...Object.getOwnPropertySymbols(n)]}function WS(n,e){if(Array.isArray(n)&&Array.isArray(e)){if(n.length!==e.length)return!1;let t=[...n].sort(),i=[...e].sort();return t.every((r,o)=>i[o]===r)}else return n===e}function $S(n){return n.length>0?n[n.length-1]:null}function tr(n){return tp(n)?n:ac(n)?Ht(Promise.resolve(n)):Ue(n)}var kN={exact:XS,subset:YS},qS={exact:UN,subset:BN,ignored:()=>!0};function US(n,e,t){return kN[t.paths](n.root,e.root,t.matrixParams)&&qS[t.queryParams](n.queryParams,e.queryParams)&&!(t.fragment==="exact"&&n.fragment!==e.fragment)}function UN(n,e){return Ni(n,e)}function XS(n,e,t){if(!Io(n.segments,e.segments)||!bd(n.segments,e.segments,t)||n.numberOfChildren!==e.numberOfChildren)return!1;for(let i in e.children)if(!n.children[i]||!XS(n.children[i],e.children[i],t))return!1;return!0}function BN(n,e){return Object.keys(e).length<=Object.keys(n).length&&Object.keys(e).every(t=>WS(n[t],e[t]))}function YS(n,e,t){return ZS(n,e,e.segments,t)}function ZS(n,e,t,i){if(n.segments.length>t.length){let r=n.segments.slice(0,t.length);return!(!Io(r,t)||e.hasChildren()||!bd(r,t,i))}else if(n.segments.length===t.length){if(!Io(n.segments,t)||!bd(n.segments,t,i))return!1;for(let r in e.children)if(!n.children[r]||!YS(n.children[r],e.children[r],i))return!1;return!0}else{let r=t.slice(0,n.segments.length),o=t.slice(n.segments.length);return!Io(n.segments,r)||!bd(n.segments,r,i)||!n.children[We]?!1:ZS(n.children[We],e,o,i)}}function bd(n,e,t){return e.every((i,r)=>qS[t](n[r].parameters,i.parameters))}var er=class{root;queryParams;fragment;_queryParamMap;constructor(e=new vt([],{}),t={},i=null){this.root=e,this.queryParams=t,this.fragment=i}get queryParamMap(){return this._queryParamMap??=Ps(this.queryParams),this._queryParamMap}toString(){return zN.serialize(this)}},vt=class{segments;children;parent=null;constructor(e,t){this.segments=e,this.children=t,Object.values(t).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Ed(this)}},Co=class{path;parameters;_parameterMap;constructor(e,t){this.path=e,this.parameters=t}get parameterMap(){return this._parameterMap??=Ps(this.parameters),this._parameterMap}toString(){return JS(this)}};function VN(n,e){return Io(n,e)&&n.every((t,i)=>Ni(t.parameters,e[i].parameters))}function Io(n,e){return n.length!==e.length?!1:n.every((t,i)=>t.path===e[i].path)}function HN(n,e){let t=[];return Object.entries(n.children).forEach(([i,r])=>{i===We&&(t=t.concat(e(r,i)))}),Object.entries(n.children).forEach(([i,r])=>{i!==We&&(t=t.concat(e(r,i)))}),t}var Od=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=Le({token:n,factory:()=>new Os,providedIn:"root"})}return n})(),Os=class{parse(e){let t=new sv(e);return new er(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}serialize(e){let t=`/${_c(e.root,!0)}`,i=WN(e.queryParams),r=typeof e.fragment=="string"?`#${GN(e.fragment)}`:"";return`${t}${i}${r}`}},zN=new Os;function Ed(n){return n.segments.map(e=>JS(e)).join("/")}function _c(n,e){if(!n.hasChildren())return Ed(n);if(e){let t=n.children[We]?_c(n.children[We],!1):"",i=[];return Object.entries(n.children).forEach(([r,o])=>{r!==We&&i.push(`${r}:${_c(o,!1)}`)}),i.length>0?`${t}(${i.join("//")})`:t}else{let t=HN(n,(i,r)=>r===We?[_c(n.children[We],!1)]:[`${r}:${_c(i,!1)}`]);return Object.keys(n.children).length===1&&n.children[We]!=null?`${Ed(n)}/${t[0]}`:`${Ed(n)}/(${t.join("//")})`}}function KS(n){return encodeURIComponent(n).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function xd(n){return KS(n).replace(/%3B/gi,";")}function GN(n){return encodeURI(n)}function ov(n){return KS(n).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Sd(n){return decodeURIComponent(n)}function BS(n){return Sd(n.replace(/\+/g,"%20"))}function JS(n){return`${ov(n.path)}${jN(n.parameters)}`}function jN(n){return Object.entries(n).map(([e,t])=>`;${ov(e)}=${ov(t)}`).join("")}function WN(n){let e=Object.entries(n).map(([t,i])=>Array.isArray(i)?i.map(r=>`${xd(t)}=${xd(r)}`).join("&"):`${xd(t)}=${xd(i)}`).filter(t=>t);return e.length?`?${e.join("&")}`:""}var $N=/^[^\/()?;#]+/;function Qg(n){let e=n.match($N);return e?e[0]:""}var qN=/^[^\/()?;=#]+/;function XN(n){let e=n.match(qN);return e?e[0]:""}var YN=/^[^=?&#]+/;function ZN(n){let e=n.match(YN);return e?e[0]:""}var KN=/^[^&#]+/;function JN(n){let e=n.match(KN);return e?e[0]:""}var sv=class{url;remaining;constructor(e){this.url=e,this.remaining=e}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new vt([],{}):new vt([],this.parseChildren())}parseQueryParams(){let e={};if(this.consumeOptional("?"))do this.parseQueryParam(e);while(this.consumeOptional("&"));return e}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0));let i={};return this.peekStartsWith("(")&&(i=this.parseParens(!1)),(e.length>0||Object.keys(t).length>0)&&(i[We]=new vt(e,t)),i}parseSegment(){let e=Qg(this.remaining);if(e===""&&this.peekStartsWith(";"))throw new Ee(4009,!1);return this.capture(e),new Co(Sd(e),this.parseMatrixParams())}parseMatrixParams(){let e={};for(;this.consumeOptional(";");)this.parseParam(e);return e}parseParam(e){let t=XN(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let r=Qg(this.remaining);r&&(i=r,this.capture(i))}e[Sd(t)]=Sd(i)}parseQueryParam(e){let t=ZN(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let s=JN(this.remaining);s&&(i=s,this.capture(i))}let r=BS(t),o=BS(i);if(e.hasOwnProperty(r)){let s=e[r];Array.isArray(s)||(s=[s],e[r]=s),s.push(o)}else e[r]=o}parseParens(e){let t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let i=Qg(this.remaining),r=this.remaining[i.length];if(r!=="/"&&r!==")"&&r!==";")throw new Ee(4010,!1);let o;i.indexOf(":")>-1?(o=i.slice(0,i.indexOf(":")),this.capture(o),this.capture(":")):e&&(o=We);let s=this.parseChildren();t[o??We]=Object.keys(s).length===1&&s[We]?s[We]:new vt([],s),this.consumeOptional("//")}return t}peekStartsWith(e){return this.remaining.startsWith(e)}consumeOptional(e){return this.peekStartsWith(e)?(this.remaining=this.remaining.substring(e.length),!0):!1}capture(e){if(!this.consumeOptional(e))throw new Ee(4011,!1)}};function QS(n){return n.segments.length>0?new vt([],{[We]:n}):n}function eM(n){let e={};for(let[i,r]of Object.entries(n.children)){let o=eM(r);if(i===We&&o.segments.length===0&&o.hasChildren())for(let[s,a]of Object.entries(o.children))e[s]=a;else(o.segments.length>0||o.hasChildren())&&(e[i]=o)}let t=new vt(n.segments,e);return QN(t)}function QN(n){if(n.numberOfChildren===1&&n.children[We]){let e=n.children[We];return new vt(n.segments.concat(e.segments),e.children)}return n}function Ls(n){return n instanceof er}function eP(n,e,t=null,i=null){let r=tM(n);return nM(r,e,t,i)}function tM(n){let e;function t(o){let s={};for(let c of o.children){let l=t(c);s[c.outlet]=l}let a=new vt(o.url,s);return o===n&&(e=a),a}let i=t(n.root),r=QS(i);return e??r}function nM(n,e,t,i){let r=n;for(;r.parent;)r=r.parent;if(e.length===0)return ev(r,r,r,t,i);let o=tP(e);if(o.toRoot())return ev(r,r,new vt([],{}),t,i);let s=nP(o,r,n),a=s.processChildren?Ec(s.segmentGroup,s.index,o.commands):rM(s.segmentGroup,s.index,o.commands);return ev(r,s.segmentGroup,a,t,i)}function Md(n){return typeof n=="object"&&n!=null&&!n.outlets&&!n.segmentPath}function Tc(n){return typeof n=="object"&&n!=null&&n.outlets}function ev(n,e,t,i,r){let o={};i&&Object.entries(i).forEach(([c,l])=>{o[c]=Array.isArray(l)?l.map(u=>`${u}`):`${l}`});let s;n===e?s=t:s=iM(n,e,t);let a=QS(eM(s));return new er(a,o,r)}function iM(n,e,t){let i={};return Object.entries(n.children).forEach(([r,o])=>{o===e?i[r]=t:i[r]=iM(o,e,t)}),new vt(n.segments,i)}var Td=class{isAbsolute;numberOfDoubleDots;commands;constructor(e,t,i){if(this.isAbsolute=e,this.numberOfDoubleDots=t,this.commands=i,e&&i.length>0&&Md(i[0]))throw new Ee(4003,!1);let r=i.find(Tc);if(r&&r!==$S(i))throw new Ee(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function tP(n){if(typeof n[0]=="string"&&n.length===1&&n[0]==="/")return new Td(!0,0,n);let e=0,t=!1,i=n.reduce((r,o,s)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let a={};return Object.entries(o.outlets).forEach(([c,l])=>{a[c]=typeof l=="string"?l.split("/"):l}),[...r,{outlets:a}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!="string"?[...r,o]:s===0?(o.split("/").forEach((a,c)=>{c==0&&a==="."||(c==0&&a===""?t=!0:a===".."?e++:a!=""&&r.push(a))}),r):[...r,o]},[]);return new Td(t,e,i)}var Rs=class{segmentGroup;processChildren;index;constructor(e,t,i){this.segmentGroup=e,this.processChildren=t,this.index=i}};function nP(n,e,t){if(n.isAbsolute)return new Rs(e,!0,0);if(!t)return new Rs(e,!1,NaN);if(t.parent===null)return new Rs(t,!0,0);let i=Md(n.commands[0])?0:1,r=t.segments.length-1+i;return iP(t,r,n.numberOfDoubleDots)}function iP(n,e,t){let i=n,r=e,o=t;for(;o>r;){if(o-=r,i=i.parent,!i)throw new Ee(4005,!1);r=i.segments.length}return new Rs(i,!1,r-o)}function rP(n){return Tc(n[0])?n[0].outlets:{[We]:n}}function rM(n,e,t){if(n??=new vt([],{}),n.segments.length===0&&n.hasChildren())return Ec(n,e,t);let i=oP(n,e,t),r=t.slice(i.commandIndex);if(i.match&&i.pathIndex<n.segments.length){let o=new vt(n.segments.slice(0,i.pathIndex),{});return o.children[We]=new vt(n.segments.slice(i.pathIndex),n.children),Ec(o,0,r)}else return i.match&&r.length===0?new vt(n.segments,{}):i.match&&!n.hasChildren()?av(n,e,t):i.match?Ec(n,0,r):av(n,e,t)}function Ec(n,e,t){if(t.length===0)return new vt(n.segments,{});{let i=rP(t),r={};if(Object.keys(i).some(o=>o!==We)&&n.children[We]&&n.numberOfChildren===1&&n.children[We].segments.length===0){let o=Ec(n.children[We],e,t);return new vt(n.segments,o.children)}return Object.entries(i).forEach(([o,s])=>{typeof s=="string"&&(s=[s]),s!==null&&(r[o]=rM(n.children[o],e,s))}),Object.entries(n.children).forEach(([o,s])=>{i[o]===void 0&&(r[o]=s)}),new vt(n.segments,r)}}function oP(n,e,t){let i=0,r=e,o={match:!1,pathIndex:0,commandIndex:0};for(;r<n.segments.length;){if(i>=t.length)return o;let s=n.segments[r],a=t[i];if(Tc(a))break;let c=`${a}`,l=i<t.length-1?t[i+1]:null;if(r>0&&c===void 0)break;if(c&&l&&typeof l=="object"&&l.outlets===void 0){if(!HS(c,l,s))return o;i+=2}else{if(!HS(c,{},s))return o;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function av(n,e,t){let i=n.segments.slice(0,e),r=0;for(;r<t.length;){let o=t[r];if(Tc(o)){let c=sP(o.outlets);return new vt(i,c)}if(r===0&&Md(t[0])){let c=n.segments[e];i.push(new Co(c.path,VS(t[0]))),r++;continue}let s=Tc(o)?o.outlets[We]:`${o}`,a=r<t.length-1?t[r+1]:null;s&&a&&Md(a)?(i.push(new Co(s,VS(a))),r+=2):(i.push(new Co(s,{})),r++)}return new vt(i,{})}function sP(n){let e={};return Object.entries(n).forEach(([t,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(e[t]=av(new vt([],{}),0,i))}),e}function VS(n){let e={};return Object.entries(n).forEach(([t,i])=>e[t]=`${i}`),e}function HS(n,e,t){return n==t.path&&Ni(e,t.parameters)}var Sc="imperative",on=(function(n){return n[n.NavigationStart=0]="NavigationStart",n[n.NavigationEnd=1]="NavigationEnd",n[n.NavigationCancel=2]="NavigationCancel",n[n.NavigationError=3]="NavigationError",n[n.RoutesRecognized=4]="RoutesRecognized",n[n.ResolveStart=5]="ResolveStart",n[n.ResolveEnd=6]="ResolveEnd",n[n.GuardsCheckStart=7]="GuardsCheckStart",n[n.GuardsCheckEnd=8]="GuardsCheckEnd",n[n.RouteConfigLoadStart=9]="RouteConfigLoadStart",n[n.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",n[n.ChildActivationStart=11]="ChildActivationStart",n[n.ChildActivationEnd=12]="ChildActivationEnd",n[n.ActivationStart=13]="ActivationStart",n[n.ActivationEnd=14]="ActivationEnd",n[n.Scroll=15]="Scroll",n[n.NavigationSkipped=16]="NavigationSkipped",n})(on||{}),si=class{id;url;constructor(e,t){this.id=e,this.url=t}},Fs=class extends si{type=on.NavigationStart;navigationTrigger;restoredState;constructor(e,t,i="imperative",r=null){super(e,t),this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},Or=class extends si{urlAfterRedirects;type=on.NavigationEnd;constructor(e,t,i){super(e,t),this.urlAfterRedirects=i}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},Rn=(function(n){return n[n.Redirect=0]="Redirect",n[n.SupersededByNewNavigation=1]="SupersededByNewNavigation",n[n.NoDataFromResolver=2]="NoDataFromResolver",n[n.GuardRejected=3]="GuardRejected",n[n.Aborted=4]="Aborted",n})(Rn||{}),wd=(function(n){return n[n.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",n[n.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",n})(wd||{}),Qi=class extends si{reason;code;type=on.NavigationCancel;constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},Lr=class extends si{reason;code;type=on.NavigationSkipped;constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r}},wc=class extends si{error;target;type=on.NavigationError;constructor(e,t,i,r){super(e,t),this.error=i,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Cd=class extends si{urlAfterRedirects;state;type=on.RoutesRecognized;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},cv=class extends si{urlAfterRedirects;state;type=on.GuardsCheckStart;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},lv=class extends si{urlAfterRedirects;state;shouldActivate;type=on.GuardsCheckEnd;constructor(e,t,i,r,o){super(e,t),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},uv=class extends si{urlAfterRedirects;state;type=on.ResolveStart;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},dv=class extends si{urlAfterRedirects;state;type=on.ResolveEnd;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},fv=class{route;type=on.RouteConfigLoadStart;constructor(e){this.route=e}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},hv=class{route;type=on.RouteConfigLoadEnd;constructor(e){this.route=e}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},pv=class{snapshot;type=on.ChildActivationStart;constructor(e){this.snapshot=e}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},mv=class{snapshot;type=on.ChildActivationEnd;constructor(e){this.snapshot=e}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},gv=class{snapshot;type=on.ActivationStart;constructor(e){this.snapshot=e}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},vv=class{snapshot;type=on.ActivationEnd;constructor(e){this.snapshot=e}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var Cc=class{},ks=class{url;navigationBehaviorOptions;constructor(e,t){this.url=e,this.navigationBehaviorOptions=t}};function aP(n){return!(n instanceof Cc)&&!(n instanceof ks)}function cP(n,e){return n.providers&&!n._injector&&(n._injector=Ts(n.providers,e,`Route: ${n.path}`)),n._injector??e}function yi(n){return n.outlet||We}function lP(n,e){let t=n.filter(i=>yi(i)===e);return t.push(...n.filter(i=>yi(i)!==e)),t}function Bs(n){if(!n)return null;if(n.routeConfig?._injector)return n.routeConfig._injector;for(let e=n.parent;e;e=e.parent){let t=e.routeConfig;if(t?._loadedInjector)return t._loadedInjector;if(t?._injector)return t._injector}return null}var yv=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return Bs(this.route?.snapshot)??this.rootInjector}constructor(e){this.rootInjector=e,this.children=new Pc(this.rootInjector)}},Pc=(()=>{class n{rootInjector;contexts=new Map;constructor(t){this.rootInjector=t}onChildOutletCreated(t,i){let r=this.getOrCreateContext(t);r.outlet=i,this.contexts.set(t,r)}onChildOutletDestroyed(t){let i=this.getContext(t);i&&(i.outlet=null,i.attachRef=null)}onOutletDeactivated(){let t=this.contexts;return this.contexts=new Map,t}onOutletReAttached(t){this.contexts=t}getOrCreateContext(t){let i=this.getContext(t);return i||(i=new yv(this.rootInjector),this.contexts.set(t,i)),i}getContext(t){return this.contexts.get(t)||null}static \u0275fac=function(i){return new(i||n)(Ke(Qt))};static \u0275prov=Le({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Id=class{_root;constructor(e){this._root=e}get root(){return this._root.value}parent(e){let t=this.pathFromRoot(e);return t.length>1?t[t.length-2]:null}children(e){let t=xv(e,this._root);return t?t.children.map(i=>i.value):[]}firstChild(e){let t=xv(e,this._root);return t&&t.children.length>0?t.children[0].value:null}siblings(e){let t=_v(e,this._root);return t.length<2?[]:t[t.length-2].children.map(r=>r.value).filter(r=>r!==e)}pathFromRoot(e){return _v(e,this._root).map(t=>t.value)}};function xv(n,e){if(n===e.value)return e;for(let t of e.children){let i=xv(n,t);if(i)return i}return null}function _v(n,e){if(n===e.value)return[e];for(let t of e.children){let i=_v(n,t);if(i.length)return i.unshift(e),i}return[]}var Wn=class{value;children;constructor(e,t){this.value=e,this.children=t}toString(){return`TreeNode(${this.value})`}};function As(n){let e={};return n&&n.children.forEach(t=>e[t.value.outlet]=t),e}var Ad=class extends Id{snapshot;constructor(e,t){super(e),this.snapshot=t,Av(this,e)}toString(){return this.snapshot.toString()}};function oM(n){let e=uP(n),t=new nn([new Co("",{})]),i=new nn({}),r=new nn({}),o=new nn({}),s=new nn(""),a=new Ao(t,i,o,s,r,We,n,e.root);return a.snapshot=e.root,new Ad(new Wn(a,[]),e)}function uP(n){let e={},t={},i={},o=new Ds([],e,i,"",t,We,n,null,{});return new Dd("",new Wn(o,[]))}var Ao=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(e,t,i,r,o,s,a,c){this.urlSubject=e,this.paramsSubject=t,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=o,this.outlet=s,this.component=a,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(ct(l=>l[Nc]))??Ue(void 0),this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(ct(e=>Ps(e))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(ct(e=>Ps(e))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function Rd(n,e,t="emptyOnly"){let i,{routeConfig:r}=n;return e!==null&&(t==="always"||r?.path===""||!e.component&&!e.routeConfig?.loadComponent)?i={params:me(me({},e.params),n.params),data:me(me({},e.data),n.data),resolve:me(me(me(me({},n.data),e.data),r?.data),n._resolvedData)}:i={params:me({},n.params),data:me({},n.data),resolve:me(me({},n.data),n._resolvedData??{})},r&&aM(r)&&(i.resolve[Nc]=r.title),i}var Ds=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;get title(){return this.data?.[Nc]}constructor(e,t,i,r,o,s,a,c,l){this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=o,this.outlet=s,this.component=a,this.routeConfig=c,this._resolve=l}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Ps(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Ps(this.queryParams),this._queryParamMap}toString(){let e=this.url.map(i=>i.toString()).join("/"),t=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${e}', path:'${t}')`}},Dd=class extends Id{url;constructor(e,t){super(t),this.url=e,Av(this,t)}toString(){return sM(this._root)}};function Av(n,e){e.value._routerState=n,e.children.forEach(t=>Av(n,t))}function sM(n){let e=n.children.length>0?` { ${n.children.map(sM).join(", ")} } `:"";return`${n.value}${e}`}function tv(n){if(n.snapshot){let e=n.snapshot,t=n._futureSnapshot;n.snapshot=t,Ni(e.queryParams,t.queryParams)||n.queryParamsSubject.next(t.queryParams),e.fragment!==t.fragment&&n.fragmentSubject.next(t.fragment),Ni(e.params,t.params)||n.paramsSubject.next(t.params),FN(e.url,t.url)||n.urlSubject.next(t.url),Ni(e.data,t.data)||n.dataSubject.next(t.data)}else n.snapshot=n._futureSnapshot,n.dataSubject.next(n._futureSnapshot.data)}function bv(n,e){let t=Ni(n.params,e.params)&&VN(n.url,e.url),i=!n.parent!=!e.parent;return t&&!i&&(!n.parent||bv(n.parent,e.parent))}function aM(n){return typeof n.title=="string"||n.title===null}var dP=new _e(""),cM=(()=>{class n{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=We;activateEvents=new yn;deactivateEvents=new yn;attachEvents=new yn;detachEvents=new yn;routerOutletData=fS();parentContexts=Y(Pc);location=Y(Ms);changeDetector=Y(hS);inputBinder=Y(Ld,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(t){if(t.name){let{firstChange:i,previousValue:r}=t.name;if(i)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(t){return this.parentContexts.getContext(t)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let t=this.parentContexts.getContext(this.name);t?.route&&(t.attachRef?this.attach(t.attachRef,t.route):this.activateWith(t.route,t.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new Ee(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new Ee(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new Ee(4012,!1);this.location.detach();let t=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(t.instance),t}attach(t,i){this.activated=t,this._activatedRoute=i,this.location.insert(t.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(t.instance)}deactivate(){if(this.activated){let t=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(t)}}activateWith(t,i){if(this.isActivated)throw new Ee(4013,!1);this._activatedRoute=t;let r=this.location,s=t.snapshot.component,a=this.parentContexts.getOrCreateContext(this.name).children,c=new Ev(t,a,r.injector,this.routerOutletData);this.activated=r.createComponent(s,{index:r.length,injector:c,environmentInjector:i}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(i){return new(i||n)};static \u0275dir=mg({type:n,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Lm]})}return n})(),Ev=class{route;childContexts;parent;outletData;constructor(e,t,i,r){this.route=e,this.childContexts=t,this.parent=i,this.outletData=r}get(e,t){return e===Ao?this.route:e===Pc?this.childContexts:e===dP?this.outletData:this.parent.get(e,t)}},Ld=new _e("");var lM=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=rn({type:n,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(i,r){i&1&&Rr(0,"router-outlet")},dependencies:[cM],encapsulation:2})}return n})();function Rv(n){let e=n.children&&n.children.map(Rv),t=e?Tt(me({},n),{children:e}):me({},n);return!t.component&&!t.loadComponent&&(e||t.loadChildren)&&t.outlet&&t.outlet!==We&&(t.component=lM),t}function fP(n,e,t){let i=Ic(n,e._root,t?t._root:void 0);return new Ad(i,e)}function Ic(n,e,t){if(t&&n.shouldReuseRoute(e.value,t.value.snapshot)){let i=t.value;i._futureSnapshot=e.value;let r=hP(n,e,t);return new Wn(i,r)}else{if(n.shouldAttach(e.value)){let o=n.retrieve(e.value);if(o!==null){let s=o.route;return s.value._futureSnapshot=e.value,s.children=e.children.map(a=>Ic(n,a)),s}}let i=pP(e.value),r=e.children.map(o=>Ic(n,o));return new Wn(i,r)}}function hP(n,e,t){return e.children.map(i=>{for(let r of t.children)if(n.shouldReuseRoute(i.value,r.value.snapshot))return Ic(n,i,r);return Ic(n,i)})}function pP(n){return new Ao(new nn(n.url),new nn(n.params),new nn(n.queryParams),new nn(n.fragment),new nn(n.data),n.outlet,n.component,n)}var Ac=class{redirectTo;navigationBehaviorOptions;constructor(e,t){this.redirectTo=e,this.navigationBehaviorOptions=t}},uM="ngNavigationCancelingError";function Nd(n,e){let{redirectTo:t,navigationBehaviorOptions:i}=Ls(e)?{redirectTo:e,navigationBehaviorOptions:void 0}:e,r=dM(!1,Rn.Redirect);return r.url=t,r.navigationBehaviorOptions=i,r}function dM(n,e){let t=new Error(`NavigationCancelingError: ${n||""}`);return t[uM]=!0,t.cancellationCode=e,t}function mP(n){return fM(n)&&Ls(n.url)}function fM(n){return!!n&&n[uM]}var gP=(n,e,t,i)=>ct(r=>(new Sv(e,r.targetRouterState,r.currentRouterState,t,i).activate(n),r)),Sv=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(e,t,i,r,o){this.routeReuseStrategy=e,this.futureState=t,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=o}activate(e){let t=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,i,e),tv(this.futureState.root),this.activateChildRoutes(t,i,e)}deactivateChildRoutes(e,t,i){let r=As(t);e.children.forEach(o=>{let s=o.value.outlet;this.deactivateRoutes(o,r[s],i),delete r[s]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,i)})}deactivateRoutes(e,t,i){let r=e.value,o=t?t.value:null;if(r===o)if(r.component){let s=i.getContext(r.outlet);s&&this.deactivateChildRoutes(e,t,s.children)}else this.deactivateChildRoutes(e,t,i);else o&&this.deactivateRouteAndItsChildren(t,i)}deactivateRouteAndItsChildren(e,t){e.value.component&&this.routeReuseStrategy.shouldDetach(e.value.snapshot)?this.detachAndStoreRouteSubtree(e,t):this.deactivateRouteAndOutlet(e,t)}detachAndStoreRouteSubtree(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,o=As(e);for(let s of Object.values(o))this.deactivateRouteAndItsChildren(s,r);if(i&&i.outlet){let s=i.outlet.detach(),a=i.children.onOutletDeactivated();this.routeReuseStrategy.store(e.value.snapshot,{componentRef:s,route:e,contexts:a})}}deactivateRouteAndOutlet(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,o=As(e);for(let s of Object.values(o))this.deactivateRouteAndItsChildren(s,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(e,t,i){let r=As(t);e.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],i),this.forwardEvent(new vv(o.value.snapshot))}),e.children.length&&this.forwardEvent(new mv(e.value.snapshot))}activateRoutes(e,t,i){let r=e.value,o=t?t.value:null;if(tv(r),r===o)if(r.component){let s=i.getOrCreateContext(r.outlet);this.activateChildRoutes(e,t,s.children)}else this.activateChildRoutes(e,t,i);else if(r.component){let s=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let a=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),s.children.onOutletReAttached(a.contexts),s.attachRef=a.componentRef,s.route=a.route.value,s.outlet&&s.outlet.attach(a.componentRef,a.route.value),tv(a.route.value),this.activateChildRoutes(e,null,s.children)}else s.attachRef=null,s.route=r,s.outlet&&s.outlet.activateWith(r,s.injector),this.activateChildRoutes(e,null,s.children)}else this.activateChildRoutes(e,null,i)}},Pd=class{path;route;constructor(e){this.path=e,this.route=this.path[this.path.length-1]}},Ns=class{component;route;constructor(e,t){this.component=e,this.route=t}};function vP(n,e,t){let i=n._root,r=e?e._root:null;return bc(i,r,t,[i.value])}function yP(n){let e=n.routeConfig?n.routeConfig.canActivateChild:null;return!e||e.length===0?null:{node:n,guards:e}}function Vs(n,e){let t=Symbol(),i=e.get(n,t);return i===t?typeof n=="function"&&!yp(n)?n:e.get(n):i}function bc(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=As(e);return n.children.forEach(s=>{xP(s,o[s.value.outlet],t,i.concat([s.value]),r),delete o[s.value.outlet]}),Object.entries(o).forEach(([s,a])=>Mc(a,t.getContext(s),r)),r}function xP(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=n.value,s=e?e.value:null,a=t?t.getContext(n.value.outlet):null;if(s&&o.routeConfig===s.routeConfig){let c=_P(s,o,o.routeConfig.runGuardsAndResolvers);c?r.canActivateChecks.push(new Pd(i)):(o.data=s.data,o._resolvedData=s._resolvedData),o.component?bc(n,e,a?a.children:null,i,r):bc(n,e,t,i,r),c&&a&&a.outlet&&a.outlet.isActivated&&r.canDeactivateChecks.push(new Ns(a.outlet.component,s))}else s&&Mc(e,a,r),r.canActivateChecks.push(new Pd(i)),o.component?bc(n,null,a?a.children:null,i,r):bc(n,null,t,i,r);return r}function _P(n,e,t){if(typeof t=="function")return t(n,e);switch(t){case"pathParamsChange":return!Io(n.url,e.url);case"pathParamsOrQueryParamsChange":return!Io(n.url,e.url)||!Ni(n.queryParams,e.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!bv(n,e)||!Ni(n.queryParams,e.queryParams);case"paramsChange":default:return!bv(n,e)}}function Mc(n,e,t){let i=As(n),r=n.value;Object.entries(i).forEach(([o,s])=>{r.component?e?Mc(s,e.children.getContext(o),t):Mc(s,null,t):Mc(s,e,t)}),r.component?e&&e.outlet&&e.outlet.isActivated?t.canDeactivateChecks.push(new Ns(e.outlet.component,r)):t.canDeactivateChecks.push(new Ns(null,r)):t.canDeactivateChecks.push(new Ns(null,r))}function Oc(n){return typeof n=="function"}function bP(n){return typeof n=="boolean"}function EP(n){return n&&Oc(n.canLoad)}function SP(n){return n&&Oc(n.canActivate)}function MP(n){return n&&Oc(n.canActivateChild)}function TP(n){return n&&Oc(n.canDeactivate)}function wP(n){return n&&Oc(n.canMatch)}function hM(n){return n instanceof zi||n?.name==="EmptyError"}var _d=Symbol("INITIAL_VALUE");function Us(){return Tn(n=>Vl(n.map(e=>e.pipe(Gi(1),rp(_d)))).pipe(ct(e=>{for(let t of e)if(t!==!0){if(t===_d)return _d;if(t===!1||CP(t))return t}return!0}),Qn(e=>e!==_d),Gi(1)))}function CP(n){return Ls(n)||n instanceof Ac}function IP(n,e){return Wt(t=>{let{targetSnapshot:i,currentSnapshot:r,guards:{canActivateChecks:o,canDeactivateChecks:s}}=t;return s.length===0&&o.length===0?Ue(Tt(me({},t),{guardsResult:!0})):AP(s,i,r,n).pipe(Wt(a=>a&&bP(a)?RP(i,o,n,e):Ue(a)),ct(a=>Tt(me({},t),{guardsResult:a})))})}function AP(n,e,t,i){return Ht(n).pipe(Wt(r=>LP(r.component,r.route,t,e,i)),ji(r=>r!==!0,!0))}function RP(n,e,t,i){return Ht(e).pipe(as(r=>ss(NP(r.route.parent,i),DP(r.route,i),OP(n,r.path,t),PP(n,r.route,t))),ji(r=>r!==!0,!0))}function DP(n,e){return n!==null&&e&&e(new gv(n)),Ue(!0)}function NP(n,e){return n!==null&&e&&e(new pv(n)),Ue(!0)}function PP(n,e,t){let i=e.routeConfig?e.routeConfig.canActivate:null;if(!i||i.length===0)return Ue(!0);let r=i.map(o=>Ma(()=>{let s=Bs(e)??t,a=Vs(o,s),c=SP(a)?a.canActivate(e,n):ln(s,()=>a(e,n));return tr(c).pipe(ji())}));return Ue(r).pipe(Us())}function OP(n,e,t){let i=e[e.length-1],o=e.slice(0,e.length-1).reverse().map(s=>yP(s)).filter(s=>s!==null).map(s=>Ma(()=>{let a=s.guards.map(c=>{let l=Bs(s.node)??t,u=Vs(c,l),d=MP(u)?u.canActivateChild(i,n):ln(l,()=>u(i,n));return tr(d).pipe(ji())});return Ue(a).pipe(Us())}));return Ue(o).pipe(Us())}function LP(n,e,t,i,r){let o=e&&e.routeConfig?e.routeConfig.canDeactivate:null;if(!o||o.length===0)return Ue(!0);let s=o.map(a=>{let c=Bs(e)??r,l=Vs(a,c),u=TP(l)?l.canDeactivate(n,e,t,i):ln(c,()=>l(n,e,t,i));return tr(u).pipe(ji())});return Ue(s).pipe(Us())}function FP(n,e,t,i){let r=e.canLoad;if(r===void 0||r.length===0)return Ue(!0);let o=r.map(s=>{let a=Vs(s,n),c=EP(a)?a.canLoad(e,t):ln(n,()=>a(e,t));return tr(c)});return Ue(o).pipe(Us(),pM(i))}function pM(n){return Kh(Jt(e=>{if(typeof e!="boolean")throw Nd(n,e)}),ct(e=>e===!0))}function kP(n,e,t,i){let r=e.canMatch;if(!r||r.length===0)return Ue(!0);let o=r.map(s=>{let a=Vs(s,n),c=wP(a)?a.canMatch(e,t):ln(n,()=>a(e,t));return tr(c)});return Ue(o).pipe(Us(),pM(i))}var Rc=class{segmentGroup;constructor(e){this.segmentGroup=e||null}},Dc=class extends Error{urlTree;constructor(e){super(),this.urlTree=e}};function Is(n){return os(new Rc(n))}function UP(n){return os(new Ee(4e3,!1))}function BP(n){return os(dM(!1,Rn.GuardRejected))}var Mv=class{urlSerializer;urlTree;constructor(e,t){this.urlSerializer=e,this.urlTree=t}lineralizeSegments(e,t){let i=[],r=t.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return Ue(i);if(r.numberOfChildren>1||!r.children[We])return UP(`${e.redirectTo}`);r=r.children[We]}}applyRedirectCommands(e,t,i,r,o){return VP(t,r,o).pipe(ct(s=>{if(s instanceof er)throw new Dc(s);let a=this.applyRedirectCreateUrlTree(s,this.urlSerializer.parse(s),e,i);if(s[0]==="/")throw new Dc(a);return a}))}applyRedirectCreateUrlTree(e,t,i,r){let o=this.createSegmentGroup(e,t.root,i,r);return new er(o,this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}createQueryParams(e,t){let i={};return Object.entries(e).forEach(([r,o])=>{if(typeof o=="string"&&o[0]===":"){let a=o.substring(1);i[r]=t[a]}else i[r]=o}),i}createSegmentGroup(e,t,i,r){let o=this.createSegments(e,t.segments,i,r),s={};return Object.entries(t.children).forEach(([a,c])=>{s[a]=this.createSegmentGroup(e,c,i,r)}),new vt(o,s)}createSegments(e,t,i,r){return t.map(o=>o.path[0]===":"?this.findPosParam(e,o,r):this.findOrReturn(o,i))}findPosParam(e,t,i){let r=i[t.path.substring(1)];if(!r)throw new Ee(4001,!1);return r}findOrReturn(e,t){let i=0;for(let r of t){if(r.path===e.path)return t.splice(i),r;i++}return e}};function VP(n,e,t){if(typeof n=="string")return Ue(n);let i=n,{queryParams:r,fragment:o,routeConfig:s,url:a,outlet:c,params:l,data:u,title:d}=e;return tr(ln(t,()=>i({params:l,data:u,queryParams:r,fragment:o,routeConfig:s,url:a,outlet:c,title:d})))}var Tv={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function HP(n,e,t,i,r){let o=mM(n,e,t);return o.matched?(i=cP(e,i),kP(i,e,t,r).pipe(ct(s=>s===!0?o:me({},Tv)))):Ue(o)}function mM(n,e,t){if(e.path==="**")return zP(t);if(e.path==="")return e.pathMatch==="full"&&(n.hasChildren()||t.length>0)?me({},Tv):{matched:!0,consumedSegments:[],remainingSegments:t,parameters:{},positionalParamSegments:{}};let r=(e.matcher||LN)(t,n,e);if(!r)return me({},Tv);let o={};Object.entries(r.posParams??{}).forEach(([a,c])=>{o[a]=c.path});let s=r.consumed.length>0?me(me({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:t.slice(r.consumed.length),parameters:s,positionalParamSegments:r.posParams??{}}}function zP(n){return{matched:!0,parameters:n.length>0?$S(n).parameters:{},consumedSegments:n,remainingSegments:[],positionalParamSegments:{}}}function zS(n,e,t,i){return t.length>0&&WP(n,t,i)?{segmentGroup:new vt(e,jP(i,new vt(t,n.children))),slicedSegments:[]}:t.length===0&&$P(n,t,i)?{segmentGroup:new vt(n.segments,GP(n,t,i,n.children)),slicedSegments:t}:{segmentGroup:new vt(n.segments,n.children),slicedSegments:t}}function GP(n,e,t,i){let r={};for(let o of t)if(Fd(n,e,o)&&!i[yi(o)]){let s=new vt([],{});r[yi(o)]=s}return me(me({},i),r)}function jP(n,e){let t={};t[We]=e;for(let i of n)if(i.path===""&&yi(i)!==We){let r=new vt([],{});t[yi(i)]=r}return t}function WP(n,e,t){return t.some(i=>Fd(n,e,i)&&yi(i)!==We)}function $P(n,e,t){return t.some(i=>Fd(n,e,i))}function Fd(n,e,t){return(n.hasChildren()||e.length>0)&&t.pathMatch==="full"?!1:t.path===""}function qP(n,e,t){return e.length===0&&!n.children[t]}var wv=class{};function XP(n,e,t,i,r,o,s="emptyOnly"){return new Cv(n,e,t,i,r,s,o).recognize()}var YP=31,Cv=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(e,t,i,r,o,s,a){this.injector=e,this.configLoader=t,this.rootComponentType=i,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=s,this.urlSerializer=a,this.applyRedirects=new Mv(this.urlSerializer,this.urlTree)}noMatchError(e){return new Ee(4002,`'${e.segmentGroup}'`)}recognize(){let e=zS(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(e).pipe(ct(({children:t,rootSnapshot:i})=>{let r=new Wn(i,t),o=new Dd("",r),s=eP(i,[],this.urlTree.queryParams,this.urlTree.fragment);return s.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(s),{state:o,tree:s}}))}match(e){let t=new Ds([],Object.freeze({}),Object.freeze(me({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),We,this.rootComponentType,null,{});return this.processSegmentGroup(this.injector,this.config,e,We,t).pipe(ct(i=>({children:i,rootSnapshot:t})),vr(i=>{if(i instanceof Dc)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof Rc?this.noMatchError(i):i}))}processSegmentGroup(e,t,i,r,o){return i.segments.length===0&&i.hasChildren()?this.processChildren(e,t,i,o):this.processSegment(e,t,i,i.segments,r,!0,o).pipe(ct(s=>s instanceof Wn?[s]:[]))}processChildren(e,t,i,r){let o=[];for(let s of Object.keys(i.children))s==="primary"?o.unshift(s):o.push(s);return Ht(o).pipe(as(s=>{let a=i.children[s],c=lP(t,s);return this.processSegmentGroup(e,c,a,s,r)}),ip((s,a)=>(s.push(...a),s)),yr(null),np(),Wt(s=>{if(s===null)return Is(i);let a=gM(s);return ZP(a),Ue(a)}))}processSegment(e,t,i,r,o,s,a){return Ht(t).pipe(as(c=>this.processSegmentAgainstRoute(c._injector??e,t,c,i,r,o,s,a).pipe(vr(l=>{if(l instanceof Rc)return Ue(null);throw l}))),ji(c=>!!c),vr(c=>{if(hM(c))return qP(i,r,o)?Ue(new wv):Is(i);throw c}))}processSegmentAgainstRoute(e,t,i,r,o,s,a,c){return yi(i)!==s&&(s===We||!Fd(r,o,i))?Is(r):i.redirectTo===void 0?this.matchSegmentAgainstRoute(e,r,i,o,s,c):this.allowRedirects&&a?this.expandSegmentAgainstRouteUsingRedirect(e,r,t,i,o,s,c):Is(r)}expandSegmentAgainstRouteUsingRedirect(e,t,i,r,o,s,a){let{matched:c,parameters:l,consumedSegments:u,positionalParamSegments:d,remainingSegments:f}=mM(t,r,o);if(!c)return Is(t);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>YP&&(this.allowRedirects=!1));let h=new Ds(o,l,Object.freeze(me({},this.urlTree.queryParams)),this.urlTree.fragment,GS(r),yi(r),r.component??r._loadedComponent??null,r,jS(r)),g=Rd(h,a,this.paramsInheritanceStrategy);return h.params=Object.freeze(g.params),h.data=Object.freeze(g.data),this.applyRedirects.applyRedirectCommands(u,r.redirectTo,d,h,e).pipe(Tn(m=>this.applyRedirects.lineralizeSegments(r,m)),Wt(m=>this.processSegment(e,i,t,m.concat(f),s,!1,a)))}matchSegmentAgainstRoute(e,t,i,r,o,s){let a=HP(t,i,r,e,this.urlSerializer);return i.path==="**"&&(t.children={}),a.pipe(Tn(c=>c.matched?(e=i._injector??e,this.getChildConfig(e,i,r).pipe(Tn(({routes:l})=>{let u=i._loadedInjector??e,{parameters:d,consumedSegments:f,remainingSegments:h}=c,g=new Ds(f,d,Object.freeze(me({},this.urlTree.queryParams)),this.urlTree.fragment,GS(i),yi(i),i.component??i._loadedComponent??null,i,jS(i)),y=Rd(g,s,this.paramsInheritanceStrategy);g.params=Object.freeze(y.params),g.data=Object.freeze(y.data);let{segmentGroup:m,slicedSegments:p}=zS(t,f,h,l);if(p.length===0&&m.hasChildren())return this.processChildren(u,l,m,g).pipe(ct(S=>new Wn(g,S)));if(l.length===0&&p.length===0)return Ue(new Wn(g,[]));let w=yi(i)===o;return this.processSegment(u,l,m,p,w?We:o,!0,g).pipe(ct(S=>new Wn(g,S instanceof Wn?[S]:[])))}))):Is(t)))}getChildConfig(e,t,i){return t.children?Ue({routes:t.children,injector:e}):t.loadChildren?t._loadedRoutes!==void 0?Ue({routes:t._loadedRoutes,injector:t._loadedInjector}):FP(e,t,i,this.urlSerializer).pipe(Wt(r=>r?this.configLoader.loadChildren(e,t).pipe(Jt(o=>{t._loadedRoutes=o.routes,t._loadedInjector=o.injector})):BP(t))):Ue({routes:[],injector:e})}};function ZP(n){n.sort((e,t)=>e.value.outlet===We?-1:t.value.outlet===We?1:e.value.outlet.localeCompare(t.value.outlet))}function KP(n){let e=n.value.routeConfig;return e&&e.path===""}function gM(n){let e=[],t=new Set;for(let i of n){if(!KP(i)){e.push(i);continue}let r=e.find(o=>i.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...i.children),t.add(r)):e.push(i)}for(let i of t){let r=gM(i.children);e.push(new Wn(i.value,r))}return e.filter(i=>!t.has(i))}function GS(n){return n.data||{}}function jS(n){return n.resolve||{}}function JP(n,e,t,i,r,o){return Wt(s=>XP(n,e,t,i,s.extractedUrl,r,o).pipe(ct(({state:a,tree:c})=>Tt(me({},s),{targetSnapshot:a,urlAfterRedirects:c}))))}function QP(n,e){return Wt(t=>{let{targetSnapshot:i,guards:{canActivateChecks:r}}=t;if(!r.length)return Ue(t);let o=new Set(r.map(c=>c.route)),s=new Set;for(let c of o)if(!s.has(c))for(let l of vM(c))s.add(l);let a=0;return Ht(s).pipe(as(c=>o.has(c)?eO(c,i,n,e):(c.data=Rd(c,c.parent,n).resolve,Ue(void 0))),Jt(()=>a++),cs(1),Wt(c=>a===s.size?Ue(t):Sn))})}function vM(n){let e=n.children.map(t=>vM(t)).flat();return[n,...e]}function eO(n,e,t,i){let r=n.routeConfig,o=n._resolve;return r?.title!==void 0&&!aM(r)&&(o[Nc]=r.title),Ma(()=>(n.data=Rd(n,n.parent,t).resolve,tO(o,n,e,i).pipe(ct(s=>(n._resolvedData=s,n.data=me(me({},n.data),s),null)))))}function tO(n,e,t,i){let r=rv(n);if(r.length===0)return Ue({});let o={};return Ht(r).pipe(Wt(s=>nO(n[s],e,t,i).pipe(ji(),Jt(a=>{if(a instanceof Ac)throw Nd(new Os,a);o[s]=a}))),cs(1),ct(()=>o),vr(s=>hM(s)?Sn:os(s)))}function nO(n,e,t,i){let r=Bs(e)??i,o=Vs(n,r),s=o.resolve?o.resolve(e,t):ln(r,()=>o(e,t));return tr(s)}function nv(n){return Tn(e=>{let t=n(e);return t?Ht(t).pipe(ct(()=>e)):Ue(e)})}var yM=(()=>{class n{buildTitle(t){let i,r=t.root;for(;r!==void 0;)i=this.getResolvedTitleForRoute(r)??i,r=r.children.find(o=>o.outlet===We);return i}getResolvedTitleForRoute(t){return t.data[Nc]}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Le({token:n,factory:()=>Y(iO),providedIn:"root"})}return n})(),iO=(()=>{class n extends yM{title;constructor(t){super(),this.title=t}updateTitle(t){let i=this.buildTitle(t);i!==void 0&&this.title.setTitle(i)}static \u0275fac=function(i){return new(i||n)(Ke(LS))};static \u0275prov=Le({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),kd=new _e("",{providedIn:"root",factory:()=>({})}),Ud=new _e(""),xM=(()=>{class n{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=Y(Mg);loadComponent(t,i){if(this.componentLoaders.get(i))return this.componentLoaders.get(i);if(i._loadedComponent)return Ue(i._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(i);let r=tr(ln(t,()=>i.loadComponent())).pipe(ct(_M),Tn(bM),Jt(s=>{this.onLoadEndListener&&this.onLoadEndListener(i),i._loadedComponent=s}),Ta(()=>{this.componentLoaders.delete(i)})),o=new rs(r,()=>new Zt).pipe(is());return this.componentLoaders.set(i,o),o}loadChildren(t,i){if(this.childrenLoaders.get(i))return this.childrenLoaders.get(i);if(i._loadedRoutes)return Ue({routes:i._loadedRoutes,injector:i._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(i);let o=rO(i,this.compiler,t,this.onLoadEndListener).pipe(Ta(()=>{this.childrenLoaders.delete(i)})),s=new rs(o,()=>new Zt).pipe(is());return this.childrenLoaders.set(i,s),s}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Le({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function rO(n,e,t,i){return tr(ln(t,()=>n.loadChildren())).pipe(ct(_M),Tn(bM),Wt(r=>r instanceof Qu||Array.isArray(r)?Ue(r):Ht(e.compileModuleAsync(r))),ct(r=>{i&&i(n);let o,s,a=!1;return Array.isArray(r)?(s=r,a=!0):(o=r.create(t).injector,s=o.get(Ud,[],{optional:!0,self:!0}).flat()),{routes:s.map(Rv),injector:o}}))}function oO(n){return n&&typeof n=="object"&&"default"in n}function _M(n){return oO(n)?n.default:n}function bM(n){return Ue(n)}var Dv=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=Le({token:n,factory:()=>Y(sO),providedIn:"root"})}return n})(),sO=(()=>{class n{shouldProcessUrl(t){return!0}extract(t){return t}merge(t,i){return t}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Le({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),EM=new _e("");var SM=new _e(""),MM=(()=>{class n{currentNavigation=Cr(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=null;events=new Zt;transitionAbortWithErrorSubject=new Zt;configLoader=Y(xM);environmentInjector=Y(Qt);destroyRef=Y(Yi);urlSerializer=Y(Od);rootContexts=Y(Pc);location=Y(Cs);inputBindingEnabled=Y(Ld,{optional:!0})!==null;titleStrategy=Y(yM);options=Y(kd,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=Y(Dv);createViewTransition=Y(EM,{optional:!0});navigationErrorHandler=Y(SM,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>Ue(void 0);rootComponentType=null;destroyed=!1;constructor(){let t=r=>this.events.next(new fv(r)),i=r=>this.events.next(new hv(r));this.configLoader.onLoadEndListener=i,this.configLoader.onLoadStartListener=t,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(t){let i=++this.navigationId;Dr(()=>{this.transitions?.next(Tt(me({},t),{extractedUrl:this.urlHandlingStrategy.extract(t.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,abortController:new AbortController,id:i}))})}setupNavigations(t){return this.transitions=new nn(null),this.transitions.pipe(Qn(i=>i!==null),Tn(i=>{let r=!1;return Ue(i).pipe(Tn(o=>{if(this.navigationId>i.id)return this.cancelNavigationTransition(i,"",Rn.SupersededByNewNavigation),Sn;this.currentTransition=i,this.currentNavigation.set({id:o.id,initialUrl:o.rawUrl,extractedUrl:o.extractedUrl,targetBrowserUrl:typeof o.extras.browserUrl=="string"?this.urlSerializer.parse(o.extras.browserUrl):o.extras.browserUrl,trigger:o.source,extras:o.extras,previousNavigation:this.lastSuccessfulNavigation?Tt(me({},this.lastSuccessfulNavigation),{previousNavigation:null}):null,abort:()=>o.abortController.abort()});let s=!t.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),a=o.extras.onSameUrlNavigation??t.onSameUrlNavigation;if(!s&&a!=="reload")return this.events.next(new Lr(o.id,this.urlSerializer.serialize(o.rawUrl),"",wd.IgnoredSameUrlNavigation)),o.resolve(!1),Sn;if(this.urlHandlingStrategy.shouldProcessUrl(o.rawUrl))return Ue(o).pipe(Tn(c=>(this.events.next(new Fs(c.id,this.urlSerializer.serialize(c.extractedUrl),c.source,c.restoredState)),c.id!==this.navigationId?Sn:Promise.resolve(c))),JP(this.environmentInjector,this.configLoader,this.rootComponentType,t.config,this.urlSerializer,this.paramsInheritanceStrategy),Jt(c=>{i.targetSnapshot=c.targetSnapshot,i.urlAfterRedirects=c.urlAfterRedirects,this.currentNavigation.update(u=>(u.finalUrl=c.urlAfterRedirects,u));let l=new Cd(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(l)}));if(s&&this.urlHandlingStrategy.shouldProcessUrl(o.currentRawUrl)){let{id:c,extractedUrl:l,source:u,restoredState:d,extras:f}=o,h=new Fs(c,this.urlSerializer.serialize(l),u,d);this.events.next(h);let g=oM(this.rootComponentType).snapshot;return this.currentTransition=i=Tt(me({},o),{targetSnapshot:g,urlAfterRedirects:l,extras:Tt(me({},f),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(y=>(y.finalUrl=l,y)),Ue(i)}else return this.events.next(new Lr(o.id,this.urlSerializer.serialize(o.extractedUrl),"",wd.IgnoredByUrlHandlingStrategy)),o.resolve(!1),Sn}),Jt(o=>{let s=new cv(o.id,this.urlSerializer.serialize(o.extractedUrl),this.urlSerializer.serialize(o.urlAfterRedirects),o.targetSnapshot);this.events.next(s)}),ct(o=>(this.currentTransition=i=Tt(me({},o),{guards:vP(o.targetSnapshot,o.currentSnapshot,this.rootContexts)}),i)),IP(this.environmentInjector,o=>this.events.next(o)),Jt(o=>{if(i.guardsResult=o.guardsResult,o.guardsResult&&typeof o.guardsResult!="boolean")throw Nd(this.urlSerializer,o.guardsResult);let s=new lv(o.id,this.urlSerializer.serialize(o.extractedUrl),this.urlSerializer.serialize(o.urlAfterRedirects),o.targetSnapshot,!!o.guardsResult);this.events.next(s)}),Qn(o=>o.guardsResult?!0:(this.cancelNavigationTransition(o,"",Rn.GuardRejected),!1)),nv(o=>{if(o.guards.canActivateChecks.length!==0)return Ue(o).pipe(Jt(s=>{let a=new uv(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(a)}),Tn(s=>{let a=!1;return Ue(s).pipe(QP(this.paramsInheritanceStrategy,this.environmentInjector),Jt({next:()=>a=!0,complete:()=>{a||this.cancelNavigationTransition(s,"",Rn.NoDataFromResolver)}}))}),Jt(s=>{let a=new dv(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(a)}))}),nv(o=>{let s=a=>{let c=[];if(a.routeConfig?.loadComponent){let l=Bs(a)??this.environmentInjector;c.push(this.configLoader.loadComponent(l,a.routeConfig).pipe(Jt(u=>{a.component=u}),ct(()=>{})))}for(let l of a.children)c.push(...s(l));return c};return Vl(s(o.targetSnapshot.root)).pipe(yr(null),Gi(1))}),nv(()=>this.afterPreactivation()),Tn(()=>{let{currentSnapshot:o,targetSnapshot:s}=i,a=this.createViewTransition?.(this.environmentInjector,o.root,s.root);return a?Ht(a).pipe(ct(()=>i)):Ue(i)}),ct(o=>{let s=fP(t.routeReuseStrategy,o.targetSnapshot,o.currentRouterState);return this.currentTransition=i=Tt(me({},o),{targetRouterState:s}),this.currentNavigation.update(a=>(a.targetRouterState=s,a)),i}),Jt(()=>{this.events.next(new Cc)}),gP(this.rootContexts,t.routeReuseStrategy,o=>this.events.next(o),this.inputBindingEnabled),Gi(1),zl(new lt(o=>{let s=i.abortController.signal,a=()=>o.next();return s.addEventListener("abort",a),()=>s.removeEventListener("abort",a)}).pipe(Qn(()=>!r&&!i.targetRouterState),Jt(()=>{this.cancelNavigationTransition(i,i.abortController.signal.reason+"",Rn.Aborted)}))),Jt({next:o=>{r=!0,this.lastSuccessfulNavigation=Dr(this.currentNavigation),this.events.next(new Or(o.id,this.urlSerializer.serialize(o.extractedUrl),this.urlSerializer.serialize(o.urlAfterRedirects))),this.titleStrategy?.updateTitle(o.targetRouterState.snapshot),o.resolve(!0)},complete:()=>{r=!0}}),zl(this.transitionAbortWithErrorSubject.pipe(Jt(o=>{throw o}))),Ta(()=>{r||this.cancelNavigationTransition(i,"",Rn.SupersededByNewNavigation),this.currentTransition?.id===i.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),vr(o=>{if(this.destroyed)return i.resolve(!1),Sn;if(r=!0,fM(o))this.events.next(new Qi(i.id,this.urlSerializer.serialize(i.extractedUrl),o.message,o.cancellationCode)),mP(o)?this.events.next(new ks(o.url,o.navigationBehaviorOptions)):i.resolve(!1);else{let s=new wc(i.id,this.urlSerializer.serialize(i.extractedUrl),o,i.targetSnapshot??void 0);try{let a=ln(this.environmentInjector,()=>this.navigationErrorHandler?.(s));if(a instanceof Ac){let{message:c,cancellationCode:l}=Nd(this.urlSerializer,a);this.events.next(new Qi(i.id,this.urlSerializer.serialize(i.extractedUrl),c,l)),this.events.next(new ks(a.redirectTo,a.navigationBehaviorOptions))}else throw this.events.next(s),o}catch(a){this.options.resolveNavigationPromiseOnError?i.resolve(!1):i.reject(a)}}return Sn}))}))}cancelNavigationTransition(t,i,r){let o=new Qi(t.id,this.urlSerializer.serialize(t.extractedUrl),i,r);this.events.next(o),t.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let t=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),i=Dr(this.currentNavigation),r=i?.targetBrowserUrl??i?.extractedUrl;return t.toString()!==r?.toString()&&!i?.extras.skipLocationChange}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Le({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function aO(n){return n!==Sc}var cO=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=Le({token:n,factory:()=>Y(lO),providedIn:"root"})}return n})(),Iv=class{shouldDetach(e){return!1}store(e,t){}shouldAttach(e){return!1}retrieve(e){return null}shouldReuseRoute(e,t){return e.routeConfig===t.routeConfig}},lO=(()=>{class n extends Iv{static \u0275fac=(()=>{let t;return function(r){return(t||(t=ku(n)))(r||n)}})();static \u0275prov=Le({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),TM=(()=>{class n{urlSerializer=Y(Od);options=Y(kd,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=Y(Cs);urlHandlingStrategy=Y(Dv);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new er;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:t,initialUrl:i,targetBrowserUrl:r}){let o=t!==void 0?this.urlHandlingStrategy.merge(t,i):i,s=r??o;return s instanceof er?this.urlSerializer.serialize(s):s}commitTransition({targetRouterState:t,finalUrl:i,initialUrl:r}){i&&t?(this.currentUrlTree=i,this.rawUrlTree=this.urlHandlingStrategy.merge(i,r),this.routerState=t):this.rawUrlTree=r}routerState=oM(null);getRouterState(){return this.routerState}stateMemento=this.createStateMemento();updateStateMemento(){this.stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}resetInternalState({finalUrl:t}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,t??this.rawUrlTree)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Le({token:n,factory:()=>Y(uO),providedIn:"root"})}return n})(),uO=(()=>{class n extends TM{currentPageId=0;lastSuccessfulId=-1;restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(t){return this.location.subscribe(i=>{i.type==="popstate"&&setTimeout(()=>{t(i.url,i.state,"popstate")})})}handleRouterEvent(t,i){t instanceof Fs?this.updateStateMemento():t instanceof Lr?this.commitTransition(i):t instanceof Cd?this.urlUpdateStrategy==="eager"&&(i.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(i),i)):t instanceof Cc?(this.commitTransition(i),this.urlUpdateStrategy==="deferred"&&!i.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(i),i)):t instanceof Qi&&t.code!==Rn.SupersededByNewNavigation&&t.code!==Rn.Redirect?this.restoreHistory(i):t instanceof wc?this.restoreHistory(i,!0):t instanceof Or&&(this.lastSuccessfulId=t.id,this.currentPageId=this.browserPageId)}setBrowserUrl(t,{extras:i,id:r}){let{replaceUrl:o,state:s}=i;if(this.location.isCurrentPathEqualTo(t)||o){let a=this.browserPageId,c=me(me({},s),this.generateNgRouterState(r,a));this.location.replaceState(t,"",c)}else{let a=me(me({},s),this.generateNgRouterState(r,this.browserPageId+1));this.location.go(t,"",a)}}restoreHistory(t,i=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===t.finalUrl&&o===0&&(this.resetInternalState(t),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(i&&this.resetInternalState(t),this.resetUrlToCurrentUrlTree())}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(t,i){return this.canceledNavigationResolution==="computed"?{navigationId:t,\u0275routerPageId:i}:{navigationId:t}}static \u0275fac=(()=>{let t;return function(r){return(t||(t=ku(n)))(r||n)}})();static \u0275prov=Le({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function wM(n,e){n.events.pipe(Qn(t=>t instanceof Or||t instanceof Qi||t instanceof wc||t instanceof Lr),ct(t=>t instanceof Or||t instanceof Lr?0:(t instanceof Qi?t.code===Rn.Redirect||t.code===Rn.SupersededByNewNavigation:!1)?2:1),Qn(t=>t!==2),Gi(1)).subscribe(()=>{e()})}var dO={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},fO={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},Nv=(()=>{class n{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=Y(ed);stateManager=Y(TM);options=Y(kd,{optional:!0})||{};pendingTasks=Y(gi);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=Y(MM);urlSerializer=Y(Od);location=Y(Cs);urlHandlingStrategy=Y(Dv);injector=Y(Qt);_events=new Zt;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=Y(cO);onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=Y(Ud,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!Y(Ld,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:t=>{this.console.warn(t)}}),this.subscribeToNavigationEvents()}eventsSubscription=new Vt;subscribeToNavigationEvents(){let t=this.navigationTransitions.events.subscribe(i=>{try{let r=this.navigationTransitions.currentTransition,o=Dr(this.navigationTransitions.currentNavigation);if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(i,o),i instanceof Qi&&i.code!==Rn.Redirect&&i.code!==Rn.SupersededByNewNavigation)this.navigated=!0;else if(i instanceof Or)this.navigated=!0;else if(i instanceof ks){let s=i.navigationBehaviorOptions,a=this.urlHandlingStrategy.merge(i.url,r.currentRawUrl),c=me({browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||aO(r.source)},s);this.scheduleNavigation(a,Sc,null,c,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}aP(i)&&this._events.next(i)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(t)}resetRootComponentType(t){this.routerState.root.component=t,this.navigationTransitions.rootComponentType=t}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Sc,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((t,i,r)=>{this.navigateToSyncWithBrowser(t,r,i)})}navigateToSyncWithBrowser(t,i,r){let o={replaceUrl:!0},s=r?.navigationId?r:null;if(r){let c=me({},r);delete c.navigationId,delete c.\u0275routerPageId,Object.keys(c).length!==0&&(o.state=c)}let a=this.parseUrl(t);this.scheduleNavigation(a,i,s,o).catch(c=>{this.disposed||this.injector.get(Gn)(c)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return Dr(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(t){this.config=t.map(Rv),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(t,i={}){let{relativeTo:r,queryParams:o,fragment:s,queryParamsHandling:a,preserveFragment:c}=i,l=c?this.currentUrlTree.fragment:s,u=null;switch(a??this.options.defaultQueryParamsHandling){case"merge":u=me(me({},this.currentUrlTree.queryParams),o);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=o||null}u!==null&&(u=this.removeEmptyProps(u));let d;try{let f=r?r.snapshot:this.routerState.snapshot.root;d=tM(f)}catch{(typeof t[0]!="string"||t[0][0]!=="/")&&(t=[]),d=this.currentUrlTree.root}return nM(d,t,u,l??null)}navigateByUrl(t,i={skipLocationChange:!1}){let r=Ls(t)?t:this.parseUrl(t),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,Sc,null,i)}navigate(t,i={skipLocationChange:!1}){return hO(t),this.navigateByUrl(this.createUrlTree(t,i),i)}serializeUrl(t){return this.urlSerializer.serialize(t)}parseUrl(t){try{return this.urlSerializer.parse(t)}catch{return this.console.warn(br(4018,!1)),this.urlSerializer.parse("/")}}isActive(t,i){let r;if(i===!0?r=me({},dO):i===!1?r=me({},fO):r=i,Ls(t))return US(this.currentUrlTree,t,r);let o=this.parseUrl(t);return US(this.currentUrlTree,o,r)}removeEmptyProps(t){return Object.entries(t).reduce((i,[r,o])=>(o!=null&&(i[r]=o),i),{})}scheduleNavigation(t,i,r,o,s){if(this.disposed)return Promise.resolve(!1);let a,c,l;s?(a=s.resolve,c=s.reject,l=s.promise):l=new Promise((d,f)=>{a=d,c=f});let u=this.pendingTasks.add();return wM(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:i,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:t,extras:o,resolve:a,reject:c,promise:l,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),l.catch(d=>Promise.reject(d))}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Le({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function hO(n){for(let e=0;e<n.length;e++)if(n[e]==null)throw new Ee(4008,!1)}var pO=new _e("");function Pv(n,...e){return pi([{provide:Ud,multi:!0,useValue:n},[],{provide:Ao,useFactory:mO,deps:[Nv]},{provide:Ar,multi:!0,useFactory:gO},e.map(t=>t.\u0275providers)])}function mO(n){return n.routerState.root}function gO(){let n=Y(Un);return e=>{let t=n.get(An);if(e!==t.components[0])return;let i=n.get(Nv),r=n.get(vO);n.get(yO)===1&&i.initialNavigation(),n.get(xO,null,{optional:!0})?.setUpPreloading(),n.get(pO,null,{optional:!0})?.init(),i.resetRootComponentType(t.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var vO=new _e("",{factory:()=>new Zt}),yO=new _e("",{providedIn:"root",factory:()=>1});var xO=new _e("");var CM=[];var IM={providers:[tm(),wg(),Pv(CM),kS(FS())]};var Bd=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=rn({type:n,selectors:[["app-navbar"]],decls:2,vars:0,template:function(t,i){t&1&&(qt(0,"p"),dn(1,"navbar works!"),en())},encapsulation:2})};var Vd=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=rn({type:n,selectors:[["app-hero"]],decls:2,vars:0,template:function(t,i){t&1&&(qt(0,"p"),dn(1,"hero works!"),en())},encapsulation:2})};var Hd=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=rn({type:n,selectors:[["app-servicios"]],decls:2,vars:0,template:function(t,i){t&1&&(qt(0,"p"),dn(1,"servicios works!"),en())},encapsulation:2})};var zd=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=rn({type:n,selectors:[["app-contacto"]],decls:2,vars:0,template:function(t,i){t&1&&(qt(0,"p"),dn(1,"contacto works!"),en())},encapsulation:2})};var Gd=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=rn({type:n,selectors:[["app-footer"]],decls:2,vars:0,template:function(t,i){t&1&&(qt(0,"p"),dn(1,"footer works!"),en())},encapsulation:2})};var Zr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Kr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},XM=0,hy=1,YM=2;var py=1,ZM=2,ki=3,cr=0,xn=1,Ui=2,Bi=0,Fo=1,my=2,gy=3,vy=4,KM=5,Gr=100,JM=101,QM=102,eT=103,tT=104,nT=200,iT=201,rT=202,oT=203,uf=204,df=205,sT=206,aT=207,cT=208,lT=209,uT=210,dT=211,fT=212,hT=213,pT=214,Nf=0,Pf=1,Of=2,ko=3,Lf=4,Ff=5,kf=6,Uf=7,yy=0,mT=1,gT=2,fr=0,vT=1,yT=2,xT=3,_T=4,bT=5,ET=6,ST=7;var ry=300,Ho=301,zo=302,Bf=303,Vf=304,rl=306,ff=1e3,Pi=1001,hf=1002,Nn=1003,MT=1004;var ol=1005;var Zn=1006,Hf=1007;var Jr=1008;var Si=1009,xy=1010,_y=1011,ua=1012,zf=1013,Qr=1014,Vi=1015,Go=1016,Gf=1017,jf=1018,da=1020,by=35902,Ey=35899,Sy=1021,My=1022,di=1023,ea=1026,fa=1027,Ty=1028,Wf=1029,$f=1030,qf=1031;var Xf=1033,sl=33776,al=33777,cl=33778,ll=33779,Yf=35840,Zf=35841,Kf=35842,Jf=35843,Qf=36196,eh=37492,th=37496,nh=37808,ih=37809,rh=37810,oh=37811,sh=37812,ah=37813,ch=37814,lh=37815,uh=37816,dh=37817,fh=37818,hh=37819,ph=37820,mh=37821,gh=36492,vh=36494,yh=36495,xh=36283,_h=36284,bh=36285,Eh=36286;var Vc=2300,pf=2301,lf=2302,oy=2400,sy=2401,ay=2402;var TT=3200,wT=3201;var wy=0,CT=1,hr="",Xn="srgb",Uo="srgb-linear",Hc="linear",_t="srgb";var Oo=7680;var cy=519,IT=512,AT=513,RT=514,Cy=515,DT=516,NT=517,PT=518,OT=519,ly=35044;var Iy="300 es",Ei=2e3,zc=2001;function Ay(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Gc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function LT(){let n=Gc("canvas");return n.style.display="block",n}var AM={},ta=null;function Ry(...n){let e="THREE."+n.shift();ta?ta("log",e,...n):console.log(e,...n)}function Ve(...n){let e="THREE."+n.shift();ta?ta("warn",e,...n):console.warn(e,...n)}function tt(...n){let e="THREE."+n.shift();ta?ta("error",e,...n):console.error(e,...n)}function na(...n){let e=n.join(" ");e in AM||(AM[e]=!0,Ve(...n))}function FT(n,e,t){return new Promise(function(i,r){function o(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:i()}}setTimeout(o,t)})}var lr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let o=r.indexOf(t);o!==-1&&r.splice(o,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}},fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ov=Math.PI/180,mf=180/Math.PI;function ul(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]+"-"+fn[e&255]+fn[e>>8&255]+"-"+fn[e>>16&15|64]+fn[e>>24&255]+"-"+fn[t&63|128]+fn[t>>8&255]+"-"+fn[t>>16&255]+fn[t>>24&255]+fn[i&255]+fn[i>>8&255]+fn[i>>16&255]+fn[i>>24&255]).toLowerCase()}function nt(n,e,t){return Math.max(e,Math.min(t,n))}function bO(n,e){return(n%e+e)%e}function Lv(n,e,t){return(1-t)*n+t*e}function Lc(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Dn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var ze=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},li=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,o,s,a){let c=i[r+0],l=i[r+1],u=i[r+2],d=i[r+3],f=o[s+0],h=o[s+1],g=o[s+2],y=o[s+3];if(a<=0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(a>=1){e[t+0]=f,e[t+1]=h,e[t+2]=g,e[t+3]=y;return}if(d!==y||c!==f||l!==h||u!==g){let m=c*f+l*h+u*g+d*y;m<0&&(f=-f,h=-h,g=-g,y=-y,m=-m);let p=1-a;if(m<.9995){let w=Math.acos(m),S=Math.sin(w);p=Math.sin(p*w)/S,a=Math.sin(a*w)/S,c=c*p+f*a,l=l*p+h*a,u=u*p+g*a,d=d*p+y*a}else{c=c*p+f*a,l=l*p+h*a,u=u*p+g*a,d=d*p+y*a;let w=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=w,l*=w,u*=w,d*=w}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,o,s){let a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],d=o[s],f=o[s+1],h=o[s+2],g=o[s+3];return e[t]=a*g+u*d+c*h-l*f,e[t+1]=c*g+u*f+l*d-a*h,e[t+2]=l*g+u*h+a*f-c*d,e[t+3]=u*g-a*d-c*f-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),d=a(o/2),f=c(i/2),h=c(r/2),g=c(o/2);switch(s){case"XYZ":this._x=f*u*d+l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d-f*h*g;break;case"YXZ":this._x=f*u*d+l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d+f*h*g;break;case"ZXY":this._x=f*u*d-l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d-f*h*g;break;case"ZYX":this._x=f*u*d-l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d+f*h*g;break;case"YZX":this._x=f*u*d+l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d-f*h*g;break;case"XZY":this._x=f*u*d-l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d+f*h*g;break;default:Ve("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],o=t[8],s=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],f=i+a+d;if(f>0){let h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-c)*h,this._y=(o-l)*h,this._z=(s-r)*h}else if(i>a&&i>d){let h=2*Math.sqrt(1+i-a-d);this._w=(u-c)/h,this._x=.25*h,this._y=(r+s)/h,this._z=(o+l)/h}else if(a>d){let h=2*Math.sqrt(1+a-i-d);this._w=(o-l)/h,this._x=(r+s)/h,this._y=.25*h,this._z=(c+u)/h}else{let h=2*Math.sqrt(1+d-i-a);this._w=(s-r)/h,this._x=(o+l)/h,this._y=(c+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,o=e._z,s=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+s*a+r*l-o*c,this._y=r*u+s*c+o*a-i*l,this._z=o*u+s*l+i*c-r*a,this._w=s*u-i*a-r*c-o*l,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,r=e._y,o=e._z,s=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,o=-o,s=-s,a=-a);let c=1-t;if(a<.9995){let l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+o*t,this._w=this._w*c+s*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+o*t,this._w=this._w*c+s*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},k=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(RM.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(RM.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6]*r,this.y=o[1]*t+o[4]*i+o[7]*r,this.z=o[2]*t+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*t+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*t+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*t+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*t+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,o=e.x,s=e.y,a=e.z,c=e.w,l=2*(s*r-a*i),u=2*(a*t-o*r),d=2*(o*i-s*t);return this.x=t+c*l+s*d-a*u,this.y=i+c*u+a*l-o*d,this.z=r+c*d+o*u-s*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r,this.y=o[1]*t+o[5]*i+o[9]*r,this.z=o[2]*t+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,o=e.z,s=t.x,a=t.y,c=t.z;return this.x=r*c-o*a,this.y=o*s-i*c,this.z=i*a-r*s,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Fv.copy(this).projectOnVector(e),this.sub(Fv)}reflect(e){return this.sub(Fv.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Fv=new k,RM=new li,$e=class n{constructor(e,t,i,r,o,s,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,o,s,a,c,l)}set(e,t,i,r,o,s,a,c,l){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=o,u[5]=c,u[6]=i,u[7]=s,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,o=this.elements,s=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],f=i[2],h=i[5],g=i[8],y=r[0],m=r[3],p=r[6],w=r[1],S=r[4],I=r[7],R=r[2],T=r[5],D=r[8];return o[0]=s*y+a*w+c*R,o[3]=s*m+a*S+c*T,o[6]=s*p+a*I+c*D,o[1]=l*y+u*w+d*R,o[4]=l*m+u*S+d*T,o[7]=l*p+u*I+d*D,o[2]=f*y+h*w+g*R,o[5]=f*m+h*S+g*T,o[8]=f*p+h*I+g*D,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*s*u-t*a*l-i*o*u+i*a*c+r*o*l-r*s*c}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*s-a*l,f=a*c-u*o,h=l*o-s*c,g=t*d+i*f+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=d*y,e[1]=(r*l-u*i)*y,e[2]=(a*i-r*s)*y,e[3]=f*y,e[4]=(u*t-r*c)*y,e[5]=(r*o-a*t)*y,e[6]=h*y,e[7]=(i*c-l*t)*y,e[8]=(s*t-i*o)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,o,s,a){let c=Math.cos(o),l=Math.sin(o);return this.set(i*c,i*l,-i*(c*s+l*a)+s+e,-r*l,r*c,-r*(-l*s+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(kv.makeScale(e,t)),this}rotate(e){return this.premultiply(kv.makeRotation(-e)),this}translate(e,t){return this.premultiply(kv.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},kv=new $e,DM=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),NM=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function EO(){let n={enabled:!0,workingColorSpace:Uo,spaces:{},convert:function(r,o,s){return this.enabled===!1||o===s||!o||!s||(this.spaces[o].transfer===_t&&(r.r=ar(r.r),r.g=ar(r.g),r.b=ar(r.b)),this.spaces[o].primaries!==this.spaces[s].primaries&&(r.applyMatrix3(this.spaces[o].toXYZ),r.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===_t&&(r.r=Qs(r.r),r.g=Qs(r.g),r.b=Qs(r.b))),r},workingToColorSpace:function(r,o){return this.convert(r,this.workingColorSpace,o)},colorSpaceToWorking:function(r,o){return this.convert(r,o,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===hr?Hc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,o=this.workingColorSpace){return r.fromArray(this.spaces[o].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,o,s){return r.copy(this.spaces[o].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,o){return na("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,o)},toWorkingColorSpace:function(r,o){return na("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,o)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Uo]:{primaries:e,whitePoint:i,transfer:Hc,toXYZ:DM,fromXYZ:NM,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Xn},outputColorSpaceConfig:{drawingBufferColorSpace:Xn}},[Xn]:{primaries:e,whitePoint:i,transfer:_t,toXYZ:DM,fromXYZ:NM,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Xn}}}),n}var dt=EO();function ar(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Qs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Hs,gf=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Hs===void 0&&(Hs=Gc("canvas")),Hs.width=e.width,Hs.height=e.height;let r=Hs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Hs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Gc("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=ar(o[s]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ar(t[i]/255)*255):t[i]=ar(t[i]);return{data:t,width:e.width,height:e.height}}else return Ve("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},SO=0,ia=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:SO++}),this.uuid=ul(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(Uv(r[s].image)):o.push(Uv(r[s]))}else o=Uv(r);i.url=o}return t||(e.images[this.uuid]=i),i}};function Uv(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?gf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ve("Texture: Unable to serialize Texture."),{})}var MO=0,Bv=new k,pr=(()=>{class n extends lr{constructor(t=n.DEFAULT_IMAGE,i=n.DEFAULT_MAPPING,r=Pi,o=Pi,s=Zn,a=Jr,c=di,l=Si,u=n.DEFAULT_ANISOTROPY,d=hr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:MO++}),this.uuid=ul(),this.name="",this.source=new ia(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=c,this.internalFormat=null,this.type=l,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Bv).x}get height(){return this.source.getSize(Bv).y}get depth(){return this.source.getSize(Bv).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let i in t){let r=t[i];if(r===void 0){Ve(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}let o=this[i];if(o===void 0){Ve(`Texture.setValues(): property '${i}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[i]=r}}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ry)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ff:t.x=t.x-Math.floor(t.x);break;case Pi:t.x=t.x<0?0:1;break;case hf:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ff:t.y=t.y-Math.floor(t.y);break;case Pi:t.y=t.y<0?0:1;break;case hf:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}return n.DEFAULT_IMAGE=null,n.DEFAULT_MAPPING=ry,n.DEFAULT_ANISOTROPY=1,n})(),Dt=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*t+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*t+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*t+s[7]*i+s[11]*r+s[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,o,c=e.elements,l=c[0],u=c[4],d=c[8],f=c[1],h=c[5],g=c[9],y=c[2],m=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+y)<.1&&Math.abs(g+m)<.1&&Math.abs(l+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(l+1)/2,I=(h+1)/2,R=(p+1)/2,T=(u+f)/4,D=(d+y)/4,U=(g+m)/4;return S>I&&S>R?S<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(S),r=T/i,o=D/i):I>R?I<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(I),i=T/r,o=U/r):R<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(R),i=D/o,r=U/o),this.set(i,r,o,t),this}let w=Math.sqrt((m-g)*(m-g)+(d-y)*(d-y)+(f-u)*(f-u));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(d-y)/w,this.z=(f-u)/w,this.w=Math.acos((l+h+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this.w=nt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this.w=nt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},vf=class extends lr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Dt(0,0,e,t),this.scissorTest=!1,this.viewport=new Dt(0,0,e,t);let r={width:e,height:t,depth:i.depth},o=new pr(r);this.textures=[];let s=i.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:Zn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new ia(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Li=class extends vf{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},jc=class extends pr{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var yf=class extends pr{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var jr=class{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(xi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(xi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=xi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let o=i.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,xi):xi.fromBufferAttribute(o,s),xi.applyMatrix4(e.matrixWorld),this.expandByPoint(xi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),jd.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),jd.copy(i.boundingBox)),jd.applyMatrix4(e.matrixWorld),this.union(jd)}let r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,xi),xi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fc),Wd.subVectors(this.max,Fc),zs.subVectors(e.a,Fc),Gs.subVectors(e.b,Fc),js.subVectors(e.c,Fc),Fr.subVectors(Gs,zs),kr.subVectors(js,Gs),Ro.subVectors(zs,js);let t=[0,-Fr.z,Fr.y,0,-kr.z,kr.y,0,-Ro.z,Ro.y,Fr.z,0,-Fr.x,kr.z,0,-kr.x,Ro.z,0,-Ro.x,-Fr.y,Fr.x,0,-kr.y,kr.x,0,-Ro.y,Ro.x,0];return!Vv(t,zs,Gs,js,Wd)||(t=[1,0,0,0,1,0,0,0,1],!Vv(t,zs,Gs,js,Wd))?!1:($d.crossVectors(Fr,kr),t=[$d.x,$d.y,$d.z],Vv(t,zs,Gs,js,Wd))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(nr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),nr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),nr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),nr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),nr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),nr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),nr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),nr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(nr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},nr=[new k,new k,new k,new k,new k,new k,new k,new k],xi=new k,jd=new jr,zs=new k,Gs=new k,js=new k,Fr=new k,kr=new k,Ro=new k,Fc=new k,Wd=new k,$d=new k,Do=new k;function Vv(n,e,t,i,r){for(let o=0,s=n.length-3;o<=s;o+=3){Do.fromArray(n,o);let a=r.x*Math.abs(Do.x)+r.y*Math.abs(Do.y)+r.z*Math.abs(Do.z),c=e.dot(Do),l=t.dot(Do),u=i.dot(Do);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var TO=new jr,kc=new k,Hv=new k,ra=class{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):TO.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;kc.subVectors(e,this.center);let t=kc.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(kc,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hv.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(kc.copy(e.center).add(Hv)),this.expandByPoint(kc.copy(e.center).sub(Hv))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ir=new k,zv=new k,qd=new k,Ur=new k,Gv=new k,Xd=new k,jv=new k,oa=class{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ir)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ir.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ir.copy(this.origin).addScaledVector(this.direction,t),ir.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){zv.copy(e).add(t).multiplyScalar(.5),qd.copy(t).sub(e).normalize(),Ur.copy(this.origin).sub(zv);let o=e.distanceTo(t)*.5,s=-this.direction.dot(qd),a=Ur.dot(this.direction),c=-Ur.dot(qd),l=Ur.lengthSq(),u=Math.abs(1-s*s),d,f,h,g;if(u>0)if(d=s*c-a,f=s*a-c,g=o*u,d>=0)if(f>=-g)if(f<=g){let y=1/u;d*=y,f*=y,h=d*(d+s*f+2*a)+f*(s*d+f+2*c)+l}else f=o,d=Math.max(0,-(s*f+a)),h=-d*d+f*(f+2*c)+l;else f=-o,d=Math.max(0,-(s*f+a)),h=-d*d+f*(f+2*c)+l;else f<=-g?(d=Math.max(0,-(-s*o+a)),f=d>0?-o:Math.min(Math.max(-o,-c),o),h=-d*d+f*(f+2*c)+l):f<=g?(d=0,f=Math.min(Math.max(-o,-c),o),h=f*(f+2*c)+l):(d=Math.max(0,-(s*o+a)),f=d>0?o:Math.min(Math.max(-o,-c),o),h=-d*d+f*(f+2*c)+l);else f=s>0?-o:o,d=Math.max(0,-(s*f+a)),h=-d*d+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(zv).addScaledVector(qd,f),h}intersectSphere(e,t){ir.subVectors(e.center,this.origin);let i=ir.dot(this.direction),r=ir.dot(ir)-i*i,o=e.radius*e.radius;if(r>o)return null;let s=Math.sqrt(o-r),a=i-s,c=i+s;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,o,s,a,c,l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),u>=0?(o=(e.min.y-f.y)*u,s=(e.max.y-f.y)*u):(o=(e.max.y-f.y)*u,s=(e.min.y-f.y)*u),i>s||o>r||((o>i||isNaN(i))&&(i=o),(s<r||isNaN(r))&&(r=s),d>=0?(a=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,ir)!==null}intersectTriangle(e,t,i,r,o){Gv.subVectors(t,e),Xd.subVectors(i,e),jv.crossVectors(Gv,Xd);let s=this.direction.dot(jv),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Ur.subVectors(this.origin,e);let c=a*this.direction.dot(Xd.crossVectors(Ur,Xd));if(c<0)return null;let l=a*this.direction.dot(Gv.cross(Ur));if(l<0||c+l>s)return null;let u=-a*Ur.dot(jv);return u<0?null:this.at(u/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ut=class n{constructor(e,t,i,r,o,s,a,c,l,u,d,f,h,g,y,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,o,s,a,c,l,u,d,f,h,g,y,m)}set(e,t,i,r,o,s,a,c,l,u,d,f,h,g,y,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=o,p[5]=s,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=d,p[14]=f,p[3]=h,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/Ws.setFromMatrixColumn(e,0).length(),o=1/Ws.setFromMatrixColumn(e,1).length(),s=1/Ws.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*o,t[5]=i[5]*o,t[6]=i[6]*o,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(o),d=Math.sin(o);if(e.order==="XYZ"){let f=s*u,h=s*d,g=a*u,y=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=h+g*l,t[5]=f-y*l,t[9]=-a*c,t[2]=y-f*l,t[6]=g+h*l,t[10]=s*c}else if(e.order==="YXZ"){let f=c*u,h=c*d,g=l*u,y=l*d;t[0]=f+y*a,t[4]=g*a-h,t[8]=s*l,t[1]=s*d,t[5]=s*u,t[9]=-a,t[2]=h*a-g,t[6]=y+f*a,t[10]=s*c}else if(e.order==="ZXY"){let f=c*u,h=c*d,g=l*u,y=l*d;t[0]=f-y*a,t[4]=-s*d,t[8]=g+h*a,t[1]=h+g*a,t[5]=s*u,t[9]=y-f*a,t[2]=-s*l,t[6]=a,t[10]=s*c}else if(e.order==="ZYX"){let f=s*u,h=s*d,g=a*u,y=a*d;t[0]=c*u,t[4]=g*l-h,t[8]=f*l+y,t[1]=c*d,t[5]=y*l+f,t[9]=h*l-g,t[2]=-l,t[6]=a*c,t[10]=s*c}else if(e.order==="YZX"){let f=s*c,h=s*l,g=a*c,y=a*l;t[0]=c*u,t[4]=y-f*d,t[8]=g*d+h,t[1]=d,t[5]=s*u,t[9]=-a*u,t[2]=-l*u,t[6]=h*d+g,t[10]=f-y*d}else if(e.order==="XZY"){let f=s*c,h=s*l,g=a*c,y=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=f*d+y,t[5]=s*u,t[9]=h*d-g,t[2]=g*d-h,t[6]=a*u,t[10]=y*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wO,e,CO)}lookAt(e,t,i){let r=this.elements;return $n.subVectors(e,t),$n.lengthSq()===0&&($n.z=1),$n.normalize(),Br.crossVectors(i,$n),Br.lengthSq()===0&&(Math.abs(i.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),Br.crossVectors(i,$n)),Br.normalize(),Yd.crossVectors($n,Br),r[0]=Br.x,r[4]=Yd.x,r[8]=$n.x,r[1]=Br.y,r[5]=Yd.y,r[9]=$n.y,r[2]=Br.z,r[6]=Yd.z,r[10]=$n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,o=this.elements,s=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],f=i[9],h=i[13],g=i[2],y=i[6],m=i[10],p=i[14],w=i[3],S=i[7],I=i[11],R=i[15],T=r[0],D=r[4],U=r[8],b=r[12],x=r[1],N=r[5],H=r[9],G=r[13],Z=r[2],W=r[6],K=r[10],te=r[14],j=r[3],ae=r[7],ue=r[11],Me=r[15];return o[0]=s*T+a*x+c*Z+l*j,o[4]=s*D+a*N+c*W+l*ae,o[8]=s*U+a*H+c*K+l*ue,o[12]=s*b+a*G+c*te+l*Me,o[1]=u*T+d*x+f*Z+h*j,o[5]=u*D+d*N+f*W+h*ae,o[9]=u*U+d*H+f*K+h*ue,o[13]=u*b+d*G+f*te+h*Me,o[2]=g*T+y*x+m*Z+p*j,o[6]=g*D+y*N+m*W+p*ae,o[10]=g*U+y*H+m*K+p*ue,o[14]=g*b+y*G+m*te+p*Me,o[3]=w*T+S*x+I*Z+R*j,o[7]=w*D+S*N+I*W+R*ae,o[11]=w*U+S*H+I*K+R*ue,o[15]=w*b+S*G+I*te+R*Me,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],o=e[12],s=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],f=e[10],h=e[14],g=e[3],y=e[7],m=e[11],p=e[15];return g*(+o*c*d-r*l*d-o*a*f+i*l*f+r*a*h-i*c*h)+y*(+t*c*h-t*l*f+o*s*f-r*s*h+r*l*u-o*c*u)+m*(+t*l*d-t*a*h-o*s*d+i*s*h+o*a*u-i*l*u)+p*(-r*a*u-t*c*d+t*a*f+r*s*d-i*s*f+i*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],f=e[10],h=e[11],g=e[12],y=e[13],m=e[14],p=e[15],w=d*m*l-y*f*l+y*c*h-a*m*h-d*c*p+a*f*p,S=g*f*l-u*m*l-g*c*h+s*m*h+u*c*p-s*f*p,I=u*y*l-g*d*l+g*a*h-s*y*h-u*a*p+s*d*p,R=g*d*c-u*y*c-g*a*f+s*y*f+u*a*m-s*d*m,T=t*w+i*S+r*I+o*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/T;return e[0]=w*D,e[1]=(y*f*o-d*m*o-y*r*h+i*m*h+d*r*p-i*f*p)*D,e[2]=(a*m*o-y*c*o+y*r*l-i*m*l-a*r*p+i*c*p)*D,e[3]=(d*c*o-a*f*o-d*r*l+i*f*l+a*r*h-i*c*h)*D,e[4]=S*D,e[5]=(u*m*o-g*f*o+g*r*h-t*m*h-u*r*p+t*f*p)*D,e[6]=(g*c*o-s*m*o-g*r*l+t*m*l+s*r*p-t*c*p)*D,e[7]=(s*f*o-u*c*o+u*r*l-t*f*l-s*r*h+t*c*h)*D,e[8]=I*D,e[9]=(g*d*o-u*y*o-g*i*h+t*y*h+u*i*p-t*d*p)*D,e[10]=(s*y*o-g*a*o+g*i*l-t*y*l-s*i*p+t*a*p)*D,e[11]=(u*a*o-s*d*o-u*i*l+t*d*l+s*i*h-t*a*h)*D,e[12]=R*D,e[13]=(u*y*r-g*d*r+g*i*f-t*y*f-u*i*m+t*d*m)*D,e[14]=(g*a*r-s*y*r-g*i*c+t*y*c+s*i*m-t*a*m)*D,e[15]=(s*d*r-u*a*r+u*i*c-t*d*c-s*i*f+t*a*f)*D,this}scale(e){let t=this.elements,i=e.x,r=e.y,o=e.z;return t[0]*=i,t[4]*=r,t[8]*=o,t[1]*=i,t[5]*=r,t[9]*=o,t[2]*=i,t[6]*=r,t[10]*=o,t[3]*=i,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),o=1-i,s=e.x,a=e.y,c=e.z,l=o*s,u=o*a;return this.set(l*s+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*s,0,l*c-r*a,u*c+r*s,o*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,o=t._x,s=t._y,a=t._z,c=t._w,l=o+o,u=s+s,d=a+a,f=o*l,h=o*u,g=o*d,y=s*u,m=s*d,p=a*d,w=c*l,S=c*u,I=c*d,R=i.x,T=i.y,D=i.z;return r[0]=(1-(y+p))*R,r[1]=(h+I)*R,r[2]=(g-S)*R,r[3]=0,r[4]=(h-I)*T,r[5]=(1-(f+p))*T,r[6]=(m+w)*T,r[7]=0,r[8]=(g+S)*D,r[9]=(m-w)*D,r[10]=(1-(f+y))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,o=Ws.set(r[0],r[1],r[2]).length(),s=Ws.set(r[4],r[5],r[6]).length(),a=Ws.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],_i.copy(this);let l=1/o,u=1/s,d=1/a;return _i.elements[0]*=l,_i.elements[1]*=l,_i.elements[2]*=l,_i.elements[4]*=u,_i.elements[5]*=u,_i.elements[6]*=u,_i.elements[8]*=d,_i.elements[9]*=d,_i.elements[10]*=d,t.setFromRotationMatrix(_i),i.x=o,i.y=s,i.z=a,this}makePerspective(e,t,i,r,o,s,a=Ei,c=!1){let l=this.elements,u=2*o/(t-e),d=2*o/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r),g,y;if(c)g=o/(s-o),y=s*o/(s-o);else if(a===Ei)g=-(s+o)/(s-o),y=-2*s*o/(s-o);else if(a===zc)g=-s/(s-o),y=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,o,s,a=Ei,c=!1){let l=this.elements,u=2/(t-e),d=2/(i-r),f=-(t+e)/(t-e),h=-(i+r)/(i-r),g,y;if(c)g=1/(s-o),y=s/(s-o);else if(a===Ei)g=-2/(s-o),y=-(s+o)/(s-o);else if(a===zc)g=-1/(s-o),y=-o/(s-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=d,l[9]=0,l[13]=h,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Ws=new k,_i=new Ut,wO=new k(0,0,0),CO=new k(1,1,1),Br=new k,Yd=new k,$n=new k,PM=new Ut,OM=new li,Wr=(()=>{class n{constructor(t=0,i=0,r=0,o=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,o=this._order){return this._x=t,this._y=i,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let o=t.elements,s=o[0],a=o[4],c=o[8],l=o[1],u=o[5],d=o[9],f=o[2],h=o[6],g=o[10];switch(i){case"XYZ":this._y=Math.asin(nt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(c,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(nt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-nt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(c,g));break;case"XZY":this._z=Math.asin(-nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(c,s)):(this._x=Math.atan2(-d,g),this._y=0);break;default:Ve("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return PM.makeRotationFromQuaternion(t),this.setFromRotationMatrix(PM,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return OM.setFromEuler(this),this.setFromQuaternion(OM,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return n.DEFAULT_ORDER="XYZ",n})(),Wc=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},IO=0,LM=new k,$s=new li,rr=new Ut,Zd=new k,Uc=new k,AO=new k,RO=new li,FM=new k(1,0,0),kM=new k(0,1,0),UM=new k(0,0,1),BM={type:"added"},DO={type:"removed"},qs={type:"childadded",child:null},Wv={type:"childremoved",child:null},Fi=(()=>{class n extends lr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:IO++}),this.uuid=ul(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new k,i=new Wr,r=new li,o=new k(1,1,1);function s(){r.setFromEuler(i,!1)}function a(){i.setFromQuaternion(r,void 0,!1)}i._onChange(s),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Ut},normalMatrix:{value:new $e}}),this.matrix=new Ut,this.matrixWorld=new Ut,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return $s.setFromAxisAngle(t,i),this.quaternion.multiply($s),this}rotateOnWorldAxis(t,i){return $s.setFromAxisAngle(t,i),this.quaternion.premultiply($s),this}rotateX(t){return this.rotateOnAxis(FM,t)}rotateY(t){return this.rotateOnAxis(kM,t)}rotateZ(t){return this.rotateOnAxis(UM,t)}translateOnAxis(t,i){return LM.copy(t).applyQuaternion(this.quaternion),this.position.add(LM.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(FM,t)}translateY(t){return this.translateOnAxis(kM,t)}translateZ(t){return this.translateOnAxis(UM,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(rr.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Zd.copy(t):Zd.set(t,i,r);let o=this.parent;this.updateWorldMatrix(!0,!1),Uc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rr.lookAt(Uc,Zd,this.up):rr.lookAt(Zd,Uc,this.up),this.quaternion.setFromRotationMatrix(rr),o&&(rr.extractRotation(o.matrixWorld),$s.setFromRotationMatrix(rr),this.quaternion.premultiply($s.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(tt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(BM),qs.child=t,this.dispatchEvent(qs),qs.child=null):tt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(DO),Wv.child=t,this.dispatchEvent(Wv),Wv.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),rr.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),rr.multiply(t.parent.matrixWorld)),t.applyMatrix4(rr),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(BM),qs.child=t,this.dispatchEvent(qs),qs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,o=this.children.length;r<o;r++){let a=this.children[r].getObjectByProperty(t,i);if(a!==void 0)return a}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let o=this.children;for(let s=0,a=o.length;s<a;s++)o[s].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uc,t,AO),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uc,RO,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){let o=this.children;for(let s=0,a=o.length;s<a;s++)o[s].updateWorldMatrix(!1,!0)}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(c=>Tt(me({},c),{boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(c=>me({},c)),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(t),o.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function s(c,l){return c[l.uuid]===void 0&&(c[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=s(t.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let l=c.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){let f=l[u];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let l=0,u=this.material.length;l<u;l++)c.push(s(t.materials,this.material[l]));o.material=c}else o.material=s(t.materials,this.material);if(this.children.length>0){o.children=[];for(let c=0;c<this.children.length;c++)o.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let c=0;c<this.animations.length;c++){let l=this.animations[c];o.animations.push(s(t.animations,l))}}if(i){let c=a(t.geometries),l=a(t.materials),u=a(t.textures),d=a(t.images),f=a(t.shapes),h=a(t.skeletons),g=a(t.animations),y=a(t.nodes);c.length>0&&(r.geometries=c),l.length>0&&(r.materials=l),u.length>0&&(r.textures=u),d.length>0&&(r.images=d),f.length>0&&(r.shapes=f),h.length>0&&(r.skeletons=h),g.length>0&&(r.animations=g),y.length>0&&(r.nodes=y)}return r.object=o,r;function a(c){let l=[];for(let u in c){let d=c[u];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let o=t.children[r];this.add(o.clone())}return this}}return n.DEFAULT_UP=new k(0,1,0),n.DEFAULT_MATRIX_AUTO_UPDATE=!0,n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,n})(),bi=new k,or=new k,$v=new k,sr=new k,Xs=new k,Ys=new k,VM=new k,qv=new k,Xv=new k,Yv=new k,Zv=new Dt,Kv=new Dt,Jv=new Dt,zr=class n{constructor(e=new k,t=new k,i=new k){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),bi.subVectors(e,t),r.cross(bi);let o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,i,r,o){bi.subVectors(r,t),or.subVectors(i,t),$v.subVectors(e,t);let s=bi.dot(bi),a=bi.dot(or),c=bi.dot($v),l=or.dot(or),u=or.dot($v),d=s*l-a*a;if(d===0)return o.set(0,0,0),null;let f=1/d,h=(l*c-a*u)*f,g=(s*u-a*c)*f;return o.set(1-h-g,g,h)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,sr)===null?!1:sr.x>=0&&sr.y>=0&&sr.x+sr.y<=1}static getInterpolation(e,t,i,r,o,s,a,c){return this.getBarycoord(e,t,i,r,sr)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,sr.x),c.addScaledVector(s,sr.y),c.addScaledVector(a,sr.z),c)}static getInterpolatedAttribute(e,t,i,r,o,s){return Zv.setScalar(0),Kv.setScalar(0),Jv.setScalar(0),Zv.fromBufferAttribute(e,t),Kv.fromBufferAttribute(e,i),Jv.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(Zv,o.x),s.addScaledVector(Kv,o.y),s.addScaledVector(Jv,o.z),s}static isFrontFacing(e,t,i,r){return bi.subVectors(i,t),or.subVectors(e,t),bi.cross(or).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bi.subVectors(this.c,this.b),or.subVectors(this.a,this.b),bi.cross(or).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,o){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,o)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,o=this.c,s,a;Xs.subVectors(r,i),Ys.subVectors(o,i),qv.subVectors(e,i);let c=Xs.dot(qv),l=Ys.dot(qv);if(c<=0&&l<=0)return t.copy(i);Xv.subVectors(e,r);let u=Xs.dot(Xv),d=Ys.dot(Xv);if(u>=0&&d<=u)return t.copy(r);let f=c*d-u*l;if(f<=0&&c>=0&&u<=0)return s=c/(c-u),t.copy(i).addScaledVector(Xs,s);Yv.subVectors(e,o);let h=Xs.dot(Yv),g=Ys.dot(Yv);if(g>=0&&h<=g)return t.copy(o);let y=h*l-c*g;if(y<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(Ys,a);let m=u*g-h*d;if(m<=0&&d-u>=0&&h-g>=0)return VM.subVectors(o,r),a=(d-u)/(d-u+(h-g)),t.copy(r).addScaledVector(VM,a);let p=1/(m+y+f);return s=y*p,a=f*p,t.copy(i).addScaledVector(Xs,s).addScaledVector(Ys,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},kT={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vr={h:0,s:0,l:0},Kd={h:0,s:0,l:0};function Qv(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var it=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=dt.workingColorSpace){return this.r=e,this.g=t,this.b=i,dt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=dt.workingColorSpace){if(e=bO(e,1),t=nt(t,0,1),i=nt(i,0,1),t===0)this.r=this.g=this.b=i;else{let o=i<=.5?i*(1+t):i+t-i*t,s=2*i-o;this.r=Qv(s,o,e+1/3),this.g=Qv(s,o,e),this.b=Qv(s,o,e-1/3)}return dt.colorSpaceToWorking(this,r),this}setStyle(e,t=Xn){function i(o){o!==void 0&&parseFloat(o)<1&&Ve("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o,s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:Ve("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(o,16),t);Ve("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xn){let i=kT[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ve("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ar(e.r),this.g=ar(e.g),this.b=ar(e.b),this}copyLinearToSRGB(e){return this.r=Qs(e.r),this.g=Qs(e.g),this.b=Qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xn){return dt.workingToColorSpace(hn.copy(this),e),Math.round(nt(hn.r*255,0,255))*65536+Math.round(nt(hn.g*255,0,255))*256+Math.round(nt(hn.b*255,0,255))}getHexString(e=Xn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.workingToColorSpace(hn.copy(this),t);let i=hn.r,r=hn.g,o=hn.b,s=Math.max(i,r,o),a=Math.min(i,r,o),c,l,u=(a+s)/2;if(a===s)c=0,l=0;else{let d=s-a;switch(l=u<=.5?d/(s+a):d/(2-s-a),s){case i:c=(r-o)/d+(r<o?6:0);break;case r:c=(o-i)/d+2;break;case o:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=dt.workingColorSpace){return dt.workingToColorSpace(hn.copy(this),t),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=Xn){dt.workingToColorSpace(hn.copy(this),e);let t=hn.r,i=hn.g,r=hn.b;return e!==Xn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Vr),this.setHSL(Vr.h+e,Vr.s+t,Vr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Vr),e.getHSL(Kd);let i=Lv(Vr.h,Kd.h,t),r=Lv(Vr.s,Kd.s,t),o=Lv(Vr.l,Kd.l,t);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*t+o[3]*i+o[6]*r,this.g=o[1]*t+o[4]*i+o[7]*r,this.b=o[2]*t+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},hn=new it;it.NAMES=kT;var NO=0,$r=class extends lr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:NO++}),this.uuid=ul(),this.name="",this.type="Material",this.blending=Fo,this.side=cr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uf,this.blendDst=df,this.blendEquation=Gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=ko,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cy,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oo,this.stencilZFail=Oo,this.stencilZPass=Oo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Ve(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Ve(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Fo&&(i.blending=this.blending),this.side!==cr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==uf&&(i.blendSrc=this.blendSrc),this.blendDst!==df&&(i.blendDst=this.blendDst),this.blendEquation!==Gr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ko&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cy&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Oo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Oo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Oo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){let s=[];for(let a in o){let c=o[a];delete c.metadata,s.push(c)}return s}if(t){let o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=t[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},$c=class extends $r{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wr,this.combine=yy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Gt=new k,Jd=new ze,PO=0,Yn=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:PO++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ly,this.updateRanges=[],this.gpuType=Vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Jd.fromBufferAttribute(this,t),Jd.applyMatrix3(e),this.setXY(t,Jd.x,Jd.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix3(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Lc(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Dn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Lc(t,this.array)),t}setX(e,t){return this.normalized&&(t=Dn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Lc(t,this.array)),t}setY(e,t){return this.normalized&&(t=Dn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Lc(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Dn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Lc(t,this.array)),t}setW(e,t){return this.normalized&&(t=Dn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Dn(t,this.array),i=Dn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Dn(t,this.array),i=Dn(i,this.array),r=Dn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,o){return e*=this.itemSize,this.normalized&&(t=Dn(t,this.array),i=Dn(i,this.array),r=Dn(r,this.array),o=Dn(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ly&&(e.usage=this.usage),e}};var qc=class extends Yn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Xc=class extends Yn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Oi=class extends Yn{constructor(e,t,i){super(new Float32Array(e),t,i)}},OO=0,ai=new Ut,ey=new Fi,Zs=new k,qn=new jr,Bc=new jr,tn=new k,ur=class n extends lr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:OO++}),this.uuid=ul(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ay(e)?Xc:qc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let o=new $e().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ai.makeRotationFromQuaternion(e),this.applyMatrix4(ai),this}rotateX(e){return ai.makeRotationX(e),this.applyMatrix4(ai),this}rotateY(e){return ai.makeRotationY(e),this.applyMatrix4(ai),this}rotateZ(e){return ai.makeRotationZ(e),this.applyMatrix4(ai),this}translate(e,t,i){return ai.makeTranslation(e,t,i),this.applyMatrix4(ai),this}scale(e,t,i){return ai.makeScale(e,t,i),this.applyMatrix4(ai),this}lookAt(e){return ey.lookAt(e),ey.updateMatrix(),this.applyMatrix4(ey.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zs).negate(),this.translate(Zs.x,Zs.y,Zs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,o=e.length;r<o;r++){let s=e[r];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Oi(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let o=e[r];t.setXYZ(r,o.x,o.y,o.z||0)}e.length>t.count&&Ve("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let o=t[i];qn.setFromBufferAttribute(o),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,qn.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,qn.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(qn.min),this.boundingBox.expandByPoint(qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&tt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ra);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){let i=this.boundingSphere.center;if(qn.setFromBufferAttribute(e),t)for(let o=0,s=t.length;o<s;o++){let a=t[o];Bc.setFromBufferAttribute(a),this.morphTargetsRelative?(tn.addVectors(qn.min,Bc.min),qn.expandByPoint(tn),tn.addVectors(qn.max,Bc.max),qn.expandByPoint(tn)):(qn.expandByPoint(Bc.min),qn.expandByPoint(Bc.max))}qn.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)tn.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(tn));if(t)for(let o=0,s=t.length;o<s;o++){let a=t[o],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)tn.fromBufferAttribute(a,l),c&&(Zs.fromBufferAttribute(e,l),tn.add(Zs)),r=Math.max(r,i.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&tt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){tt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yn(new Float32Array(4*i.count),4));let s=this.getAttribute("tangent"),a=[],c=[];for(let U=0;U<i.count;U++)a[U]=new k,c[U]=new k;let l=new k,u=new k,d=new k,f=new ze,h=new ze,g=new ze,y=new k,m=new k;function p(U,b,x){l.fromBufferAttribute(i,U),u.fromBufferAttribute(i,b),d.fromBufferAttribute(i,x),f.fromBufferAttribute(o,U),h.fromBufferAttribute(o,b),g.fromBufferAttribute(o,x),u.sub(l),d.sub(l),h.sub(f),g.sub(f);let N=1/(h.x*g.y-g.x*h.y);isFinite(N)&&(y.copy(u).multiplyScalar(g.y).addScaledVector(d,-h.y).multiplyScalar(N),m.copy(d).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(N),a[U].add(y),a[b].add(y),a[x].add(y),c[U].add(m),c[b].add(m),c[x].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let U=0,b=w.length;U<b;++U){let x=w[U],N=x.start,H=x.count;for(let G=N,Z=N+H;G<Z;G+=3)p(e.getX(G+0),e.getX(G+1),e.getX(G+2))}let S=new k,I=new k,R=new k,T=new k;function D(U){R.fromBufferAttribute(r,U),T.copy(R);let b=a[U];S.copy(b),S.sub(R.multiplyScalar(R.dot(b))).normalize(),I.crossVectors(T,b);let N=I.dot(c[U])<0?-1:1;s.setXYZW(U,S.x,S.y,S.z,N)}for(let U=0,b=w.length;U<b;++U){let x=w[U],N=x.start,H=x.count;for(let G=N,Z=N+H;G<Z;G+=3)D(e.getX(G+0)),D(e.getX(G+1)),D(e.getX(G+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Yn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);let r=new k,o=new k,s=new k,a=new k,c=new k,l=new k,u=new k,d=new k;if(e)for(let f=0,h=e.count;f<h;f+=3){let g=e.getX(f+0),y=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,y),s.fromBufferAttribute(t,m),u.subVectors(s,o),d.subVectors(r,o),u.cross(d),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,y),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,h=t.count;f<h;f+=3)r.fromBufferAttribute(t,f+0),o.fromBufferAttribute(t,f+1),s.fromBufferAttribute(t,f+2),u.subVectors(s,o),d.subVectors(r,o),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)tn.fromBufferAttribute(e,t),tn.normalize(),e.setXYZ(t,tn.x,tn.y,tn.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,d=a.normalized,f=new l.constructor(c.length*u),h=0,g=0;for(let y=0,m=c.length;y<m;y++){a.isInterleavedBufferAttribute?h=c[y]*a.data.stride+a.offset:h=c[y]*u;for(let p=0;p<u;p++)f[g++]=l[h++]}return new Yn(f,u,d)}if(this.index===null)return Ve("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=e(c,i);t.setAttribute(a,l)}let o=this.morphAttributes;for(let a in o){let c=[],l=o[a];for(let u=0,d=l.length;u<d;u++){let f=l[u],h=e(f,i);c.push(h)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let a=0,c=s.length;a<c;a++){let l=s[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},o=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let d=0,f=l.length;d<f;d++){let h=l[d];u.push(h.toJSON(e.data))}u.length>0&&(r[c]=u,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let l in r){let u=r[l];this.setAttribute(l,u.clone(t))}let o=e.morphAttributes;for(let l in o){let u=[],d=o[l];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let s=e.groups;for(let l=0,u=s.length;l<u;l++){let d=s[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},HM=new Ut,No=new oa,Qd=new ra,zM=new k,ef=new k,tf=new k,nf=new k,ty=new k,rf=new k,GM=new k,of=new k,Pn=class extends Fi{constructor(e=new ur,t=new $c){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){let a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(o&&a){rf.set(0,0,0);for(let c=0,l=o.length;c<l;c++){let u=a[c],d=o[c];u!==0&&(ty.fromBufferAttribute(d,e),s?rf.addScaledVector(ty,u):rf.addScaledVector(ty.sub(t),u))}t.add(rf)}return t}raycast(e,t){let i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Qd.copy(i.boundingSphere),Qd.applyMatrix4(o),No.copy(e.ray).recast(e.near),!(Qd.containsPoint(No.origin)===!1&&(No.intersectSphere(Qd,zM)===null||No.origin.distanceToSquared(zM)>(e.far-e.near)**2))&&(HM.copy(o).invert(),No.copy(e.ray).applyMatrix4(HM),!(i.boundingBox!==null&&No.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,No)))}_computeIntersections(e,t,i){let r,o=this.geometry,s=this.material,a=o.index,c=o.attributes.position,l=o.attributes.uv,u=o.attributes.uv1,d=o.attributes.normal,f=o.groups,h=o.drawRange;if(a!==null)if(Array.isArray(s))for(let g=0,y=f.length;g<y;g++){let m=f[g],p=s[m.materialIndex],w=Math.max(m.start,h.start),S=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let I=w,R=S;I<R;I+=3){let T=a.getX(I),D=a.getX(I+1),U=a.getX(I+2);r=sf(this,p,e,i,l,u,d,T,D,U),r&&(r.faceIndex=Math.floor(I/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,h.start),y=Math.min(a.count,h.start+h.count);for(let m=g,p=y;m<p;m+=3){let w=a.getX(m),S=a.getX(m+1),I=a.getX(m+2);r=sf(this,s,e,i,l,u,d,w,S,I),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(s))for(let g=0,y=f.length;g<y;g++){let m=f[g],p=s[m.materialIndex],w=Math.max(m.start,h.start),S=Math.min(c.count,Math.min(m.start+m.count,h.start+h.count));for(let I=w,R=S;I<R;I+=3){let T=I,D=I+1,U=I+2;r=sf(this,p,e,i,l,u,d,T,D,U),r&&(r.faceIndex=Math.floor(I/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,h.start),y=Math.min(c.count,h.start+h.count);for(let m=g,p=y;m<p;m+=3){let w=m,S=m+1,I=m+2;r=sf(this,s,e,i,l,u,d,w,S,I),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function LO(n,e,t,i,r,o,s,a){let c;if(e.side===xn?c=i.intersectTriangle(s,o,r,!0,a):c=i.intersectTriangle(r,o,s,e.side===cr,a),c===null)return null;of.copy(a),of.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(of);return l<t.near||l>t.far?null:{distance:l,point:of.clone(),object:n}}function sf(n,e,t,i,r,o,s,a,c,l){n.getVertexPosition(a,ef),n.getVertexPosition(c,tf),n.getVertexPosition(l,nf);let u=LO(n,e,t,i,ef,tf,nf,GM);if(u){let d=new k;zr.getBarycoord(GM,ef,tf,nf,d),r&&(u.uv=zr.getInterpolatedAttribute(r,a,c,l,d,new ze)),o&&(u.uv1=zr.getInterpolatedAttribute(o,a,c,l,d,new ze)),s&&(u.normal=zr.getInterpolatedAttribute(s,a,c,l,d,new k),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new k,materialIndex:0};zr.getNormal(ef,tf,nf,f.normal),u.face=f,u.barycoord=d}return u}var qr=class n extends ur{constructor(e=1,t=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};let a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);let c=[],l=[],u=[],d=[],f=0,h=0;g("z","y","x",-1,-1,i,t,e,s,o,0),g("z","y","x",1,-1,i,t,-e,s,o,1),g("x","z","y",1,1,e,i,t,r,s,2),g("x","z","y",1,-1,e,i,-t,r,s,3),g("x","y","z",1,-1,e,t,i,r,o,4),g("x","y","z",-1,-1,e,t,-i,r,o,5),this.setIndex(c),this.setAttribute("position",new Oi(l,3)),this.setAttribute("normal",new Oi(u,3)),this.setAttribute("uv",new Oi(d,2));function g(y,m,p,w,S,I,R,T,D,U,b){let x=I/D,N=R/U,H=I/2,G=R/2,Z=T/2,W=D+1,K=U+1,te=0,j=0,ae=new k;for(let ue=0;ue<K;ue++){let Me=ue*N-G;for(let et=0;et<W;et++){let ft=et*x-H;ae[y]=ft*w,ae[m]=Me*S,ae[p]=Z,l.push(ae.x,ae.y,ae.z),ae[y]=0,ae[m]=0,ae[p]=T>0?1:-1,u.push(ae.x,ae.y,ae.z),d.push(et/D),d.push(1-ue/U),te+=1}}for(let ue=0;ue<U;ue++)for(let Me=0;Me<D;Me++){let et=f+Me+W*ue,ft=f+Me+W*(ue+1),yt=f+(Me+1)+W*(ue+1),bt=f+(Me+1)+W*ue;c.push(et,ft,bt),c.push(ft,yt,bt),j+=6}a.addGroup(h,j,b),h+=j,f+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function jo(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Ve("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function pn(n){let e={};for(let t=0;t<n.length;t++){let i=jo(n[t]);for(let r in i)e[r]=i[r]}return e}function FO(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Dy(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}var UT={clone:jo,merge:pn},kO=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,UO=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ui=class extends $r{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kO,this.fragmentShader=UO,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=jo(e.uniforms),this.uniformsGroups=FO(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Yc=class extends Fi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ut,this.projectionMatrix=new Ut,this.projectionMatrixInverse=new Ut,this.coordinateSystem=Ei,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Hr=new k,jM=new ze,WM=new ze,jt=class extends Yc{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=mf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ov*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return mf*2*Math.atan(Math.tan(Ov*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Hr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Hr.x,Hr.y).multiplyScalar(-e/Hr.z),Hr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Hr.x,Hr.y).multiplyScalar(-e/Hr.z)}getViewSize(e,t){return this.getViewBounds(e,jM,WM),t.subVectors(WM,jM)}setViewOffset(e,t,i,r,o,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ov*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,o=-.5*r,s=this.view;if(this.view!==null&&this.view.enabled){let c=s.fullWidth,l=s.fullHeight;o+=s.offsetX*r/c,t-=s.offsetY*i/l,r*=s.width/c,i*=s.height/l}let a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ks=-90,Js=1,xf=class extends Fi{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new jt(Ks,Js,e,t);r.layers=this.layers,this.add(r);let o=new jt(Ks,Js,e,t);o.layers=this.layers,this.add(o);let s=new jt(Ks,Js,e,t);s.layers=this.layers,this.add(s);let a=new jt(Ks,Js,e,t);a.layers=this.layers,this.add(a);let c=new jt(Ks,Js,e,t);c.layers=this.layers,this.add(c);let l=new jt(Ks,Js,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,o,s,a,c]=t;for(let l of t)this.remove(l);if(e===Ei)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===zc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[o,s,a,c,l,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,o),e.setRenderTarget(i,1,r),e.render(t,s),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,f,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Zc=class extends pr{constructor(e=[],t=Ho,i,r,o,s,a,c,l,u){super(e,t,i,r,o,s,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},_f=class extends Li{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Zc(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new qr(5,5,5),o=new ui({name:"CubemapFromEquirect",uniforms:jo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:xn,blending:Bi});o.uniforms.tEquirect.value=t;let s=new Pn(r,o),a=t.minFilter;return t.minFilter===Jr&&(t.minFilter=Zn),new xf(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,r);e.setRenderTarget(o)}},Lo=class extends Fi{constructor(){super(),this.isGroup=!0,this.type="Group"}},BO={type:"move"},sa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Lo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Lo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Lo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,o=null,s=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){s=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,i),p=this._getHandJoint(l,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,g=.005;l.inputState.pinching&&f>h+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=h-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,i),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(BO)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=o!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Lo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}};var Kc=class extends Fi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wr,this.environmentIntensity=1,this.environmentRotation=new Wr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var bf=class extends pr{constructor(e=null,t=1,i=1,r,o,s,a,c,l=Nn,u=Nn,d,f){super(null,s,a,c,l,u,r,o,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ny=new k,VO=new k,HO=new $e,ci=class{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=ny.subVectors(i,t).cross(VO.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(ny),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||HO.getNormalMatrix(e),r=this.coplanarPoint(ny).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Po=new ra,zO=new ze(.5,.5),af=new k,aa=class{constructor(e=new ci,t=new ci,i=new ci,r=new ci,o=new ci,s=new ci){this.planes=[e,t,i,r,o,s]}set(e,t,i,r,o,s){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ei,i=!1){let r=this.planes,o=e.elements,s=o[0],a=o[1],c=o[2],l=o[3],u=o[4],d=o[5],f=o[6],h=o[7],g=o[8],y=o[9],m=o[10],p=o[11],w=o[12],S=o[13],I=o[14],R=o[15];if(r[0].setComponents(l-s,h-u,p-g,R-w).normalize(),r[1].setComponents(l+s,h+u,p+g,R+w).normalize(),r[2].setComponents(l+a,h+d,p+y,R+S).normalize(),r[3].setComponents(l-a,h-d,p-y,R-S).normalize(),i)r[4].setComponents(c,f,m,I).normalize(),r[5].setComponents(l-c,h-f,p-m,R-I).normalize();else if(r[4].setComponents(l-c,h-f,p-m,R-I).normalize(),t===Ei)r[5].setComponents(l+c,h+f,p+m,R+I).normalize();else if(t===zc)r[5].setComponents(c,f,m,I).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Po.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Po.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Po)}intersectsSprite(e){Po.center.set(0,0,0);let t=zO.distanceTo(e.center);return Po.radius=.7071067811865476+t,Po.applyMatrix4(e.matrixWorld),this.intersectsSphere(Po)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(af.x=r.normal.x>0?e.max.x:e.min.x,af.y=r.normal.y>0?e.max.y:e.min.y,af.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(af)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Jc=class extends pr{constructor(e,t,i=Qr,r,o,s,a=Nn,c=Nn,l,u=ea,d=1){if(u!==ea&&u!==fa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:d};super(f,r,o,s,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ia(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Qc=class extends pr{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var Bo=class n extends ur{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let o=e/2,s=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,d=e/a,f=t/c,h=[],g=[],y=[],m=[];for(let p=0;p<u;p++){let w=p*f-s;for(let S=0;S<l;S++){let I=S*d-o;g.push(I,-w,0),y.push(0,0,1),m.push(S/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let w=0;w<a;w++){let S=w+l*p,I=w+l*(p+1),R=w+1+l*(p+1),T=w+1+l*p;h.push(S,I,T),h.push(I,R,T)}this.setIndex(h),this.setAttribute("position",new Oi(g,3)),this.setAttribute("normal",new Oi(y,3)),this.setAttribute("uv",new Oi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var ca=class extends $r{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new it(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wy,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Ef=class extends $r{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=TT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Sf=class extends $r{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function cf(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function GO(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Vo=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],o=t[i-1];n:{e:{let s;t:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<o)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(o=r,r=t[++i],e<r)break e}s=t.length;break t}if(!(e>=o)){let a=t[1];e<a&&(i=2,o=a);for(let c=i-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=o,o=t[--i-1],e>=o)break e}s=i,i=0;break t}break n}for(;i<s;){let a=i+s>>>1;e<t[a]?s=a:i=a+1}if(r=t[i],o=t[i-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,o,r)}return this.interpolate_(i,o,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,o=e*r;for(let s=0;s!==r;++s)t[s]=i[o+s];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Mf=class extends Vo{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:oy,endingEnd:oy}}intervalChanged_(e,t,i){let r=this.parameterPositions,o=e-2,s=e+1,a=r[o],c=r[s];if(a===void 0)switch(this.getSettings_().endingStart){case sy:o=e,a=2*t-i;break;case ay:o=r.length-2,a=t+r[o]-r[o+1];break;default:o=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case sy:s=e,c=2*i-t;break;case ay:s=1,c=i+r[1]-r[0];break;default:s=e-1,c=t}let l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=o*u,this._offsetNext=s*u}interpolate_(e,t,i,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,h=this._weightNext,g=(i-t)/(r-t),y=g*g,m=y*g,p=-f*m+2*f*y-f*g,w=(1+f)*m+(-1.5-2*f)*y+(-.5+f)*g+1,S=(-1-h)*m+(1.5+h)*y+.5*g,I=h*m-h*y;for(let R=0;R!==a;++R)o[R]=p*s[u+R]+w*s[l+R]+S*s[c+R]+I*s[d+R];return o}},Tf=class extends Vo{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(i-t)/(r-t),d=1-u;for(let f=0;f!==a;++f)o[f]=s[l+f]*d+s[c+f]*u;return o}},wf=class extends Vo{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Kn=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=cf(t,this.TimeBufferType),this.values=cf(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:cf(e.times,Array),values:cf(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new wf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Tf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Mf(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Vc:t=this.InterpolantFactoryMethodDiscrete;break;case pf:t=this.InterpolantFactoryMethodLinear;break;case lf:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ve("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Vc;case this.InterpolantFactoryMethodLinear:return pf;case this.InterpolantFactoryMethodSmooth:return lf}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,o=0,s=r-1;for(;o!==r&&i[o]<e;)++o;for(;s!==-1&&i[s]>t;)--s;if(++s,o!==0||s!==r){o>=s&&(s=Math.max(s,1),o=s-1);let a=this.getValueSize();this.times=i.slice(o,s),this.values=this.values.slice(o*a,s*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(tt("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,o=i.length;o===0&&(tt("KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let a=0;a!==o;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){tt("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(s!==null&&s>c){tt("KeyframeTrack: Out of order keys.",this,a,c,s),e=!1;break}s=c}if(r!==void 0&&GO(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){tt("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===lf,o=e.length-1,s=1;for(let a=1;a<o;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(r)c=!0;else{let d=a*i,f=d-i,h=d+i;for(let g=0;g!==i;++g){let y=t[d+g];if(y!==t[f+g]||y!==t[h+g]){c=!0;break}}}if(c){if(a!==s){e[s]=e[a];let d=a*i,f=s*i;for(let h=0;h!==i;++h)t[f+h]=t[d+h]}++s}}if(o>0){e[s]=e[o];for(let a=o*i,c=s*i,l=0;l!==i;++l)t[c+l]=t[a+l];++s}return s!==e.length?(this.times=e.slice(0,s),this.values=t.slice(0,s*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Kn.prototype.ValueTypeName="";Kn.prototype.TimeBufferType=Float32Array;Kn.prototype.ValueBufferType=Float32Array;Kn.prototype.DefaultInterpolation=pf;var Xr=class extends Kn{constructor(e,t,i){super(e,t,i)}};Xr.prototype.ValueTypeName="bool";Xr.prototype.ValueBufferType=Array;Xr.prototype.DefaultInterpolation=Vc;Xr.prototype.InterpolantFactoryMethodLinear=void 0;Xr.prototype.InterpolantFactoryMethodSmooth=void 0;var Cf=class extends Kn{constructor(e,t,i,r){super(e,t,i,r)}};Cf.prototype.ValueTypeName="color";var If=class extends Kn{constructor(e,t,i,r){super(e,t,i,r)}};If.prototype.ValueTypeName="number";var Af=class extends Vo{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,c=(i-t)/(r-t),l=e*a;for(let u=l+a;l!==u;l+=4)li.slerpFlat(o,0,s,l-a,s,l,c);return o}},el=class extends Kn{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new Af(this.times,this.values,this.getValueSize(),e)}};el.prototype.ValueTypeName="quaternion";el.prototype.InterpolantFactoryMethodSmooth=void 0;var Yr=class extends Kn{constructor(e,t,i){super(e,t,i)}};Yr.prototype.ValueTypeName="string";Yr.prototype.ValueBufferType=Array;Yr.prototype.DefaultInterpolation=Vc;Yr.prototype.InterpolantFactoryMethodLinear=void 0;Yr.prototype.InterpolantFactoryMethodSmooth=void 0;var Rf=class extends Kn{constructor(e,t,i,r){super(e,t,i,r)}};Rf.prototype.ValueTypeName="vector";var tl=class extends Fi{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new it(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}};var iy=new Ut,$M=new k,qM=new k,uy=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ze(512,512),this.mapType=Si,this.map=null,this.mapPass=null,this.matrix=new Ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new aa,this._frameExtents=new ze(1,1),this._viewportCount=1,this._viewports=[new Dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;$M.setFromMatrixPosition(e.matrixWorld),t.position.copy($M),qM.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(qM),t.updateMatrixWorld(),iy.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(iy,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(iy)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var dr=class extends Yc{constructor(e=-1,t=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,o=i-e,s=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=l*this.view.offsetX,s=o+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},dy=class extends uy{constructor(){super(new dr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},nl=class extends tl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fi.DEFAULT_UP),this.updateMatrix(),this.target=new Fi,this.shadow=new dy}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},il=class extends tl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Df=class extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Ny="\\[\\]\\.:\\/",jO=new RegExp("["+Ny+"]","g"),Py="[^"+Ny+"]",WO="[^"+Ny.replace("\\.","")+"]",$O=/((?:WC+[\/:])*)/.source.replace("WC",Py),qO=/(WCOD+)?/.source.replace("WCOD",WO),XO=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Py),YO=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Py),ZO=new RegExp("^"+$O+qO+XO+YO+"$"),KO=["material","materials","bones","map"],fy=class{constructor(e,t,i){let r=i||Lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,o=i.length;r!==o;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Lt=(()=>{class n{constructor(t,i,r){this.path=i,this.parsedPath=r||n.parseTrackName(i),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new n.Composite(t,i,r):new n(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(jO,"")}static parseTrackName(t){let i=ZO.exec(t);if(i===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},o=r.nodeName&&r.nodeName.lastIndexOf(".");if(o!==void 0&&o!==-1){let s=r.nodeName.substring(o+1);KO.indexOf(s)!==-1&&(r.nodeName=r.nodeName.substring(0,o),r.objectName=s)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(s){for(let a=0;a<s.length;a++){let c=s[a];if(c.name===i||c.uuid===i)return c;let l=r(c.children);if(l)return l}return null},o=r(t.children);if(o)return o}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let o=0,s=r.length;o!==s;++o)t[i++]=r[o]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let o=0,s=r.length;o!==s;++o)r[o]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let o=0,s=r.length;o!==s;++o)r[o]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let o=0,s=r.length;o!==s;++o)r[o]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,o=i.propertyName,s=i.propertyIndex;if(t||(t=n.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ve("PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let u=i.objectIndex;switch(r){case"materials":if(!t.material){tt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){tt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){tt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===u){u=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){tt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){tt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){tt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(u!==void 0){if(t[u]===void 0){tt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let a=t[o];if(a===void 0){let u=i.nodeName;tt("PropertyBinding: Trying to update property for track: "+u+"."+o+" but it wasn't found.",t);return}let c=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?c=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(o==="morphTargetInfluences"){if(!t.geometry){tt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){tt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=o;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return n.Composite=fy,n})();Lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Lt.prototype.GetterByBindingType=[Lt.prototype._getValue_direct,Lt.prototype._getValue_array,Lt.prototype._getValue_arrayElement,Lt.prototype._getValue_toArray];Lt.prototype.SetterByBindingTypeAndVersioning=[[Lt.prototype._setValue_direct,Lt.prototype._setValue_direct_setNeedsUpdate,Lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_array,Lt.prototype._setValue_array_setNeedsUpdate,Lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_arrayElement,Lt.prototype._setValue_arrayElement_setNeedsUpdate,Lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_fromArray,Lt.prototype._setValue_fromArray_setNeedsUpdate,Lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var $7=new Float32Array(1);var la=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=nt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(nt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};function Oy(n,e,t,i){let r=JO(i);switch(t){case Sy:return n*e;case Ty:return n*e/r.components*r.byteLength;case Wf:return n*e/r.components*r.byteLength;case $f:return n*e*2/r.components*r.byteLength;case qf:return n*e*2/r.components*r.byteLength;case My:return n*e*3/r.components*r.byteLength;case di:return n*e*4/r.components*r.byteLength;case Xf:return n*e*4/r.components*r.byteLength;case sl:case al:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case cl:case ll:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Zf:case Jf:return Math.max(n,16)*Math.max(e,8)/4;case Yf:case Kf:return Math.max(n,8)*Math.max(e,8)/2;case Qf:case eh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case th:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case nh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ih:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case rh:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case oh:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case sh:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ah:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ch:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case lh:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case uh:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case dh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case fh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case hh:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ph:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case mh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case gh:case vh:case yh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case xh:case _h:return Math.ceil(n/4)*Math.ceil(e/4)*8;case bh:case Eh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function JO(n){switch(n){case Si:case xy:return{byteLength:1,components:1};case ua:case _y:case Go:return{byteLength:2,components:1};case Gf:case jf:return{byteLength:2,components:4};case Qr:case zf:case Vi:return{byteLength:4,components:1};case by:case Ey:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"181"}}));typeof window<"u"&&(window.__THREE__?Ve("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="181");function aw(){let n=null,e=!1,t=null,i=null;function r(o,s){t(o,s),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){n=o}}}function eL(n){let e=new WeakMap;function t(a,c){let l=a.array,u=a.usage,d=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,u),a.onUploadCallback();let h;if(l instanceof Float32Array)h=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)h=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=n.SHORT;else if(l instanceof Uint32Array)h=n.UNSIGNED_INT;else if(l instanceof Int32Array)h=n.INT;else if(l instanceof Int8Array)h=n.BYTE;else if(l instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){let u=c.array,d=c.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,u);else{d.sort((h,g)=>h.start-g.start);let f=0;for(let h=1;h<d.length;h++){let g=d[f],y=d[h];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++f,d[f]=y)}d.length=f+1;for(let h=0,g=d.length;h<g;h++){let y=d[h];n.bufferSubData(l,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function s(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:o,update:s}}var tL=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nL=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,iL=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rL=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oL=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sL=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aL=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,cL=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lL=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,uL=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dL=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fL=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hL=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,pL=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,mL=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,gL=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,vL=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yL=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xL=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_L=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bL=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,EL=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,SL=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ML=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,TL=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,wL=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,CL=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,IL=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,AL=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,RL=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,DL="gl_FragColor = linearToOutputTexel( gl_FragColor );",NL=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,PL=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,OL=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,LL=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,FL=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kL=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,UL=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,BL=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,VL=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,HL=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zL=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,GL=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jL=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,WL=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$L=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,qL=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,XL=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,YL=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ZL=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,KL=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,JL=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,QL=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,e3=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,t3=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,n3=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,i3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,r3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,o3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,s3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,a3=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,c3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,l3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,u3=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,d3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,f3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,h3=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,p3=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,m3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,g3=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,v3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,y3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,x3=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,_3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,b3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,E3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,S3=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,M3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,T3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,w3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,C3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,I3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,A3=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,R3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,D3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,N3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,P3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,O3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,L3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,F3=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,k3=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,U3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,B3=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,V3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,H3=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,z3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,G3=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,j3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,W3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,q3=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,X3=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Y3=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Z3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,K3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,J3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Q3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,e2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,t2=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,i2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,o2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,a2=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,c2=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,l2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,u2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,d2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f2=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,h2=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,p2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,m2=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g2=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,v2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,y2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,x2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,b2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,E2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,S2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,T2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,C2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,I2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,A2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,R2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,D2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,N2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,P2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ye={alphahash_fragment:tL,alphahash_pars_fragment:nL,alphamap_fragment:iL,alphamap_pars_fragment:rL,alphatest_fragment:oL,alphatest_pars_fragment:sL,aomap_fragment:aL,aomap_pars_fragment:cL,batching_pars_vertex:lL,batching_vertex:uL,begin_vertex:dL,beginnormal_vertex:fL,bsdfs:hL,iridescence_fragment:pL,bumpmap_pars_fragment:mL,clipping_planes_fragment:gL,clipping_planes_pars_fragment:vL,clipping_planes_pars_vertex:yL,clipping_planes_vertex:xL,color_fragment:_L,color_pars_fragment:bL,color_pars_vertex:EL,color_vertex:SL,common:ML,cube_uv_reflection_fragment:TL,defaultnormal_vertex:wL,displacementmap_pars_vertex:CL,displacementmap_vertex:IL,emissivemap_fragment:AL,emissivemap_pars_fragment:RL,colorspace_fragment:DL,colorspace_pars_fragment:NL,envmap_fragment:PL,envmap_common_pars_fragment:OL,envmap_pars_fragment:LL,envmap_pars_vertex:FL,envmap_physical_pars_fragment:qL,envmap_vertex:kL,fog_vertex:UL,fog_pars_vertex:BL,fog_fragment:VL,fog_pars_fragment:HL,gradientmap_pars_fragment:zL,lightmap_pars_fragment:GL,lights_lambert_fragment:jL,lights_lambert_pars_fragment:WL,lights_pars_begin:$L,lights_toon_fragment:XL,lights_toon_pars_fragment:YL,lights_phong_fragment:ZL,lights_phong_pars_fragment:KL,lights_physical_fragment:JL,lights_physical_pars_fragment:QL,lights_fragment_begin:e3,lights_fragment_maps:t3,lights_fragment_end:n3,logdepthbuf_fragment:i3,logdepthbuf_pars_fragment:r3,logdepthbuf_pars_vertex:o3,logdepthbuf_vertex:s3,map_fragment:a3,map_pars_fragment:c3,map_particle_fragment:l3,map_particle_pars_fragment:u3,metalnessmap_fragment:d3,metalnessmap_pars_fragment:f3,morphinstance_vertex:h3,morphcolor_vertex:p3,morphnormal_vertex:m3,morphtarget_pars_vertex:g3,morphtarget_vertex:v3,normal_fragment_begin:y3,normal_fragment_maps:x3,normal_pars_fragment:_3,normal_pars_vertex:b3,normal_vertex:E3,normalmap_pars_fragment:S3,clearcoat_normal_fragment_begin:M3,clearcoat_normal_fragment_maps:T3,clearcoat_pars_fragment:w3,iridescence_pars_fragment:C3,opaque_fragment:I3,packing:A3,premultiplied_alpha_fragment:R3,project_vertex:D3,dithering_fragment:N3,dithering_pars_fragment:P3,roughnessmap_fragment:O3,roughnessmap_pars_fragment:L3,shadowmap_pars_fragment:F3,shadowmap_pars_vertex:k3,shadowmap_vertex:U3,shadowmask_pars_fragment:B3,skinbase_vertex:V3,skinning_pars_vertex:H3,skinning_vertex:z3,skinnormal_vertex:G3,specularmap_fragment:j3,specularmap_pars_fragment:W3,tonemapping_fragment:$3,tonemapping_pars_fragment:q3,transmission_fragment:X3,transmission_pars_fragment:Y3,uv_pars_fragment:Z3,uv_pars_vertex:K3,uv_vertex:J3,worldpos_vertex:Q3,background_vert:e2,background_frag:t2,backgroundCube_vert:n2,backgroundCube_frag:i2,cube_vert:r2,cube_frag:o2,depth_vert:s2,depth_frag:a2,distanceRGBA_vert:c2,distanceRGBA_frag:l2,equirect_vert:u2,equirect_frag:d2,linedashed_vert:f2,linedashed_frag:h2,meshbasic_vert:p2,meshbasic_frag:m2,meshlambert_vert:g2,meshlambert_frag:v2,meshmatcap_vert:y2,meshmatcap_frag:x2,meshnormal_vert:_2,meshnormal_frag:b2,meshphong_vert:E2,meshphong_frag:S2,meshphysical_vert:M2,meshphysical_frag:T2,meshtoon_vert:w2,meshtoon_frag:C2,points_vert:I2,points_frag:A2,shadow_vert:R2,shadow_frag:D2,sprite_vert:N2,sprite_frag:P2},fe={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},Hi={basic:{uniforms:pn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:pn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new it(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:pn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:pn([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:pn([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new it(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:pn([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:pn([fe.points,fe.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:pn([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:pn([fe.common,fe.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:pn([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:pn([fe.sprite,fe.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:pn([fe.common,fe.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:pn([fe.lights,fe.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};Hi.physical={uniforms:pn([Hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};var Sh={r:0,b:0,g:0},Wo=new Wr,O2=new Ut;function L2(n,e,t,i,r,o,s){let a=new it(0),c=o===!0?0:1,l,u,d=null,f=0,h=null;function g(S){let I=S.isScene===!0?S.background:null;return I&&I.isTexture&&(I=(S.backgroundBlurriness>0?t:e).get(I)),I}function y(S){let I=!1,R=g(S);R===null?p(a,c):R&&R.isColor&&(p(R,1),I=!0);let T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(n.autoClear||I)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(S,I){let R=g(I);R&&(R.isCubeTexture||R.mapping===rl)?(u===void 0&&(u=new Pn(new qr(1,1,1),new ui({name:"BackgroundCubeMaterial",uniforms:jo(Hi.backgroundCube.uniforms),vertexShader:Hi.backgroundCube.vertexShader,fragmentShader:Hi.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,D,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Wo.copy(I.backgroundRotation),Wo.x*=-1,Wo.y*=-1,Wo.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Wo.y*=-1,Wo.z*=-1),u.material.uniforms.envMap.value=R,u.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(O2.makeRotationFromEuler(Wo)),u.material.toneMapped=dt.getTransfer(R.colorSpace)!==_t,(d!==R||f!==R.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,d=R,f=R.version,h=n.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):R&&R.isTexture&&(l===void 0&&(l=new Pn(new Bo(2,2),new ui({name:"BackgroundMaterial",uniforms:jo(Hi.background.uniforms),vertexShader:Hi.background.vertexShader,fragmentShader:Hi.background.fragmentShader,side:cr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=R,l.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,l.material.toneMapped=dt.getTransfer(R.colorSpace)!==_t,R.matrixAutoUpdate===!0&&R.updateMatrix(),l.material.uniforms.uvTransform.value.copy(R.matrix),(d!==R||f!==R.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,d=R,f=R.version,h=n.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function p(S,I){S.getRGB(Sh,Dy(n)),i.buffers.color.setClear(Sh.r,Sh.g,Sh.b,I,s)}function w(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,I=1){a.set(S),c=I,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,p(a,c)},render:y,addToRenderList:m,dispose:w}}function F2(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null),o=r,s=!1;function a(x,N,H,G,Z){let W=!1,K=d(G,H,N);o!==K&&(o=K,l(o.object)),W=h(x,G,H,Z),W&&g(x,G,H,Z),Z!==null&&e.update(Z,n.ELEMENT_ARRAY_BUFFER),(W||s)&&(s=!1,I(x,N,H,G),Z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function c(){return n.createVertexArray()}function l(x){return n.bindVertexArray(x)}function u(x){return n.deleteVertexArray(x)}function d(x,N,H){let G=H.wireframe===!0,Z=i[x.id];Z===void 0&&(Z={},i[x.id]=Z);let W=Z[N.id];W===void 0&&(W={},Z[N.id]=W);let K=W[G];return K===void 0&&(K=f(c()),W[G]=K),K}function f(x){let N=[],H=[],G=[];for(let Z=0;Z<t;Z++)N[Z]=0,H[Z]=0,G[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:H,attributeDivisors:G,object:x,attributes:{},index:null}}function h(x,N,H,G){let Z=o.attributes,W=N.attributes,K=0,te=H.getAttributes();for(let j in te)if(te[j].location>=0){let ue=Z[j],Me=W[j];if(Me===void 0&&(j==="instanceMatrix"&&x.instanceMatrix&&(Me=x.instanceMatrix),j==="instanceColor"&&x.instanceColor&&(Me=x.instanceColor)),ue===void 0||ue.attribute!==Me||Me&&ue.data!==Me.data)return!0;K++}return o.attributesNum!==K||o.index!==G}function g(x,N,H,G){let Z={},W=N.attributes,K=0,te=H.getAttributes();for(let j in te)if(te[j].location>=0){let ue=W[j];ue===void 0&&(j==="instanceMatrix"&&x.instanceMatrix&&(ue=x.instanceMatrix),j==="instanceColor"&&x.instanceColor&&(ue=x.instanceColor));let Me={};Me.attribute=ue,ue&&ue.data&&(Me.data=ue.data),Z[j]=Me,K++}o.attributes=Z,o.attributesNum=K,o.index=G}function y(){let x=o.newAttributes;for(let N=0,H=x.length;N<H;N++)x[N]=0}function m(x){p(x,0)}function p(x,N){let H=o.newAttributes,G=o.enabledAttributes,Z=o.attributeDivisors;H[x]=1,G[x]===0&&(n.enableVertexAttribArray(x),G[x]=1),Z[x]!==N&&(n.vertexAttribDivisor(x,N),Z[x]=N)}function w(){let x=o.newAttributes,N=o.enabledAttributes;for(let H=0,G=N.length;H<G;H++)N[H]!==x[H]&&(n.disableVertexAttribArray(H),N[H]=0)}function S(x,N,H,G,Z,W,K){K===!0?n.vertexAttribIPointer(x,N,H,Z,W):n.vertexAttribPointer(x,N,H,G,Z,W)}function I(x,N,H,G){y();let Z=G.attributes,W=H.getAttributes(),K=N.defaultAttributeValues;for(let te in W){let j=W[te];if(j.location>=0){let ae=Z[te];if(ae===void 0&&(te==="instanceMatrix"&&x.instanceMatrix&&(ae=x.instanceMatrix),te==="instanceColor"&&x.instanceColor&&(ae=x.instanceColor)),ae!==void 0){let ue=ae.normalized,Me=ae.itemSize,et=e.get(ae);if(et===void 0)continue;let ft=et.buffer,yt=et.type,bt=et.bytesPerElement,$=yt===n.INT||yt===n.UNSIGNED_INT||ae.gpuType===zf;if(ae.isInterleavedBufferAttribute){let Q=ae.data,ge=Q.stride,He=ae.offset;if(Q.isInstancedInterleavedBuffer){for(let Te=0;Te<j.locationSize;Te++)p(j.location+Te,Q.meshPerAttribute);x.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Te=0;Te<j.locationSize;Te++)m(j.location+Te);n.bindBuffer(n.ARRAY_BUFFER,ft);for(let Te=0;Te<j.locationSize;Te++)S(j.location+Te,Me/j.locationSize,yt,ue,ge*bt,(He+Me/j.locationSize*Te)*bt,$)}else{if(ae.isInstancedBufferAttribute){for(let Q=0;Q<j.locationSize;Q++)p(j.location+Q,ae.meshPerAttribute);x.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Q=0;Q<j.locationSize;Q++)m(j.location+Q);n.bindBuffer(n.ARRAY_BUFFER,ft);for(let Q=0;Q<j.locationSize;Q++)S(j.location+Q,Me/j.locationSize,yt,ue,Me*bt,Me/j.locationSize*Q*bt,$)}}else if(K!==void 0){let ue=K[te];if(ue!==void 0)switch(ue.length){case 2:n.vertexAttrib2fv(j.location,ue);break;case 3:n.vertexAttrib3fv(j.location,ue);break;case 4:n.vertexAttrib4fv(j.location,ue);break;default:n.vertexAttrib1fv(j.location,ue)}}}}w()}function R(){U();for(let x in i){let N=i[x];for(let H in N){let G=N[H];for(let Z in G)u(G[Z].object),delete G[Z];delete N[H]}delete i[x]}}function T(x){if(i[x.id]===void 0)return;let N=i[x.id];for(let H in N){let G=N[H];for(let Z in G)u(G[Z].object),delete G[Z];delete N[H]}delete i[x.id]}function D(x){for(let N in i){let H=i[N];if(H[x.id]===void 0)continue;let G=H[x.id];for(let Z in G)u(G[Z].object),delete G[Z];delete H[x.id]}}function U(){b(),s=!0,o!==r&&(o=r,l(o.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:U,resetDefaultState:b,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfProgram:D,initAttributes:y,enableAttribute:m,disableUnusedAttributes:w}}function k2(n,e,t){let i;function r(l){i=l}function o(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function s(l,u,d){d!==0&&(n.drawArraysInstanced(i,l,u,d),t.update(u,i,d))}function a(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,d);let h=0;for(let g=0;g<d;g++)h+=u[g];t.update(h,i,1)}function c(l,u,d,f){if(d===0)return;let h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<l.length;g++)s(l[g],u[g],f[g]);else{h.multiDrawArraysInstancedWEBGL(i,l,0,u,0,f,0,d);let g=0;for(let y=0;y<d;y++)g+=u[y]*f[y];t.update(g,i,1)}}this.setMode=r,this.render=o,this.renderInstances=s,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function U2(n,e,t,i){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let D=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(D){return!(D!==di&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){let U=D===Go&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==Si&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==Vi&&!U)}function c(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(Ve("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),I=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:s,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:S,maxFragmentUniforms:I,vertexTextures:R,maxSamples:T}}function B2(n){let e=this,t=null,i=0,r=!1,o=!1,s=new ci,a=new $e,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let h=d.length!==0||f||i!==0||r;return r=f,i=d.length,h},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,h){let g=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!r||g===null||g.length===0||o&&!m)o?u(null):l();else{let w=o?0:i,S=w*4,I=p.clippingState||null;c.value=I,I=u(g,f,S,h);for(let R=0;R!==S;++R)I[R]=t[R];p.clippingState=I,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,h,g){let y=d!==null?d.length:0,m=null;if(y!==0){if(m=c.value,g!==!0||m===null){let p=h+y*4,w=f.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,I=h;S!==y;++S,I+=4)s.copy(d[S]).applyMatrix4(w,a),s.normal.toArray(m,I),m[I+3]=s.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function V2(n){let e=new WeakMap;function t(s,a){return a===Bf?s.mapping=Ho:a===Vf&&(s.mapping=zo),s}function i(s){if(s&&s.isTexture){let a=s.mapping;if(a===Bf||a===Vf)if(e.has(s)){let c=e.get(s).texture;return t(c,s.mapping)}else{let c=s.image;if(c&&c.height>0){let l=new _f(c.height);return l.fromEquirectangularTexture(n,s),e.set(s,l),s.addEventListener("dispose",r),t(l.texture,s.mapping)}else return null}}return s}function r(s){let a=s.target;a.removeEventListener("dispose",r);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}var eo=4,BT=[.125,.215,.35,.446,.526,.582],qo=20,H2=256,dl=new dr,VT=new it,Ly=null,Fy=0,ky=0,Uy=!1,z2=new k,Th=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,o={}){let{size:s=256,position:a=z2}=o;Ly=this._renderer.getRenderTarget(),Fy=this._renderer.getActiveCubeFace(),ky=this._renderer.getActiveMipmapLevel(),Uy=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=GT(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zT(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ly,Fy,ky),this._renderer.xr.enabled=Uy,e.scissorTest=!1,ha(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ho||e.mapping===zo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ly=this._renderer.getRenderTarget(),Fy=this._renderer.getActiveCubeFace(),ky=this._renderer.getActiveMipmapLevel(),Uy=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Zn,minFilter:Zn,generateMipmaps:!1,type:Go,format:di,colorSpace:Uo,depthBuffer:!1},r=HT(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=HT(e,t,i);let{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=G2(o)),this._blurMaterial=W2(o,e,t)}return r}_compileMaterial(e){let t=new Pn(new ur,e);this._renderer.compile(t,dl)}_sceneToCubeUV(e,t,i,r,o){let c=new jt(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(VT),d.toneMapping=fr,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Pn(new qr,new $c({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,m=y.material,p=!1,w=e.background;w?w.isColor&&(m.color.copy(w),e.background=null,p=!0):(m.color.copy(VT),p=!0);for(let S=0;S<6;S++){let I=S%3;I===0?(c.up.set(0,l[S],0),c.position.set(o.x,o.y,o.z),c.lookAt(o.x+u[S],o.y,o.z)):I===1?(c.up.set(0,0,l[S]),c.position.set(o.x,o.y,o.z),c.lookAt(o.x,o.y+u[S],o.z)):(c.up.set(0,l[S],0),c.position.set(o.x,o.y,o.z),c.lookAt(o.x,o.y,o.z+u[S]));let R=this._cubeSize;ha(r,I*R,S>2?R:0,R,R),d.setRenderTarget(r),p&&d.render(y,c),d.render(e,c)}d.toneMapping=h,d.autoClear=f,e.background=w}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===Ho||e.mapping===zo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=GT()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zT());let o=r?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=o;let a=o.uniforms;a.envMap.value=e;let c=this._cubeSize;ha(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(s,dl)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let o=1;o<r;o++)this._applyGGXFilter(e,o-1,o);t.autoClear=i}_applyGGXFilter(e,t,i){let r=this._renderer,o=this._pingPongRenderTarget;if(this._ggxMaterial===null){let w=3*Math.max(this._cubeSize,16),S=4*this._cubeSize;this._ggxMaterial=j2(this._lodMax,w,S)}let s=this._ggxMaterial,a=this._lodMeshes[i];a.material=s;let c=s.uniforms,l=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(l*l-u*u),f=.05+l*.95,h=d*f,{_lodMax:g}=this,y=this._sizeLods[i],m=3*y*(i>g-eo?i-g+eo:0),p=4*(this._cubeSize-y);c.envMap.value=e.texture,c.roughness.value=h,c.mipInt.value=g-t,ha(o,m,p,3*y,2*y),r.setRenderTarget(o),r.render(a,dl),c.envMap.value=o.texture,c.roughness.value=0,c.mipInt.value=g-i,ha(e,m,p,3*y,2*y),r.setRenderTarget(e),r.render(a,dl)}_blur(e,t,i,r,o){let s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,r,"latitudinal",o),this._halfBlur(s,e,i,i,r,"longitudinal",o)}_halfBlur(e,t,i,r,o,s,a){let c=this._renderer,l=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&tt("blur direction must be either latitudinal or longitudinal!");let u=3,d=this._lodMeshes[r];d.material=l;let f=l.uniforms,h=this._sizeLods[i]-1,g=isFinite(o)?Math.PI/(2*h):2*Math.PI/(2*qo-1),y=o/g,m=isFinite(o)?1+Math.floor(u*y):qo;m>qo&&Ve(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${qo}`);let p=[],w=0;for(let D=0;D<qo;++D){let U=D/y,b=Math.exp(-U*U/2);p.push(b),D===0?w+=b:D<m&&(w+=2*b)}for(let D=0;D<p.length;D++)p[D]=p[D]/w;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=s==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:S}=this;f.dTheta.value=g,f.mipInt.value=S-i;let I=this._sizeLods[r],R=3*I*(r>S-eo?r-S+eo:0),T=4*(this._cubeSize-I);ha(t,R,T,3*I,2*I),c.setRenderTarget(t),c.render(d,dl)}};function G2(n){let e=[],t=[],i=[],r=n,o=n-eo+1+BT.length;for(let s=0;s<o;s++){let a=Math.pow(2,r);e.push(a);let c=1/a;s>n-eo?c=BT[s-n+eo-1]:s===0&&(c=0),t.push(c);let l=1/(a-2),u=-l,d=1+l,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,g=6,y=3,m=2,p=1,w=new Float32Array(y*g*h),S=new Float32Array(m*g*h),I=new Float32Array(p*g*h);for(let T=0;T<h;T++){let D=T%3*2/3-1,U=T>2?0:-1,b=[D,U,0,D+2/3,U,0,D+2/3,U+1,0,D,U,0,D+2/3,U+1,0,D,U+1,0];w.set(b,y*g*T),S.set(f,m*g*T);let x=[T,T,T,T,T,T];I.set(x,p*g*T)}let R=new ur;R.setAttribute("position",new Yn(w,y)),R.setAttribute("uv",new Yn(S,m)),R.setAttribute("faceIndex",new Yn(I,p)),i.push(new Pn(R,null)),r>eo&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function HT(n,e,t){let i=new Li(n,e,t);return i.texture.mapping=rl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ha(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function j2(n,e,t){return new ui({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:H2,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ch(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function W2(n,e,t){let i=new Float32Array(qo),r=new k(0,1,0);return new ui({name:"SphericalGaussianBlur",defines:{n:qo,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ch(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function zT(){return new ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ch(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function GT(){return new ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ch(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Ch(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function $2(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===Bf||c===Vf,u=c===Ho||c===zo;if(l||u){let d=e.get(a),f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Th(n)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{let h=a.image;return l&&h&&h.height>0||u&&h&&r(h)?(t===null&&(t=new Th(n)),d=l?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",o),d.texture):null}}}return a}function r(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function o(a){let c=a.target;c.removeEventListener("dispose",o);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:s}}function q2(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&na("WebGLRenderer: "+i+" extension not supported."),r}}}function X2(n,e,t,i){let r={},o=new WeakMap;function s(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",s),delete r[f.id];let h=o.get(f);h&&(e.remove(h),o.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",s),r[f.id]=!0,t.memory.geometries++),f}function c(d){let f=d.attributes;for(let h in f)e.update(f[h],n.ARRAY_BUFFER)}function l(d){let f=[],h=d.index,g=d.attributes.position,y=0;if(h!==null){let w=h.array;y=h.version;for(let S=0,I=w.length;S<I;S+=3){let R=w[S+0],T=w[S+1],D=w[S+2];f.push(R,T,T,D,D,R)}}else if(g!==void 0){let w=g.array;y=g.version;for(let S=0,I=w.length/3-1;S<I;S+=3){let R=S+0,T=S+1,D=S+2;f.push(R,T,T,D,D,R)}}else return;let m=new(Ay(f)?Xc:qc)(f,1);m.version=y;let p=o.get(d);p&&e.remove(p),o.set(d,m)}function u(d){let f=o.get(d);if(f){let h=d.index;h!==null&&f.version<h.version&&l(d)}else l(d);return o.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function Y2(n,e,t){let i;function r(f){i=f}let o,s;function a(f){o=f.type,s=f.bytesPerElement}function c(f,h){n.drawElements(i,h,o,f*s),t.update(h,i,1)}function l(f,h,g){g!==0&&(n.drawElementsInstanced(i,h,o,f*s,g),t.update(h,i,g))}function u(f,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,o,f,0,g);let m=0;for(let p=0;p<g;p++)m+=h[p];t.update(m,i,1)}function d(f,h,g,y){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/s,h[p],y[p]);else{m.multiDrawElementsInstancedWEBGL(i,h,0,o,f,0,y,0,g);let p=0;for(let w=0;w<g;w++)p+=h[w]*y[w];t.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Z2(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(t.calls++,s){case n.TRIANGLES:t.triangles+=a*(o/3);break;case n.LINES:t.lines+=a*(o/2);break;case n.LINE_STRIP:t.lines+=a*(o-1);break;case n.LINE_LOOP:t.lines+=a*o;break;case n.POINTS:t.points+=a*o;break;default:tt("WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function K2(n,e,t){let i=new WeakMap,r=new Dt;function o(s,a,c){let l=s.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,f=i.get(a);if(f===void 0||f.count!==d){let x=function(){U.dispose(),i.delete(a),a.removeEventListener("dispose",x)};var h=x;f!==void 0&&f.texture.dispose();let g=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],I=0;g===!0&&(I=1),y===!0&&(I=2),m===!0&&(I=3);let R=a.attributes.position.count*I,T=1;R>e.maxTextureSize&&(T=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);let D=new Float32Array(R*T*4*d),U=new jc(D,R,T,d);U.type=Vi,U.needsUpdate=!0;let b=I*4;for(let N=0;N<d;N++){let H=p[N],G=w[N],Z=S[N],W=R*T*4*N;for(let K=0;K<H.count;K++){let te=K*b;g===!0&&(r.fromBufferAttribute(H,K),D[W+te+0]=r.x,D[W+te+1]=r.y,D[W+te+2]=r.z,D[W+te+3]=0),y===!0&&(r.fromBufferAttribute(G,K),D[W+te+4]=r.x,D[W+te+5]=r.y,D[W+te+6]=r.z,D[W+te+7]=0),m===!0&&(r.fromBufferAttribute(Z,K),D[W+te+8]=r.x,D[W+te+9]=r.y,D[W+te+10]=r.z,D[W+te+11]=Z.itemSize===4?r.w:1)}}f={count:d,texture:U,size:new ze(R,T)},i.set(a,f),a.addEventListener("dispose",x)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",s.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];let y=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",y),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:o}}function J2(n,e,t,i){let r=new WeakMap;function o(c){let l=i.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return d}function s(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:o,dispose:s}}var cw=new pr,jT=new Jc(1,1),lw=new jc,uw=new yf,dw=new Zc,WT=[],$T=[],qT=new Float32Array(16),XT=new Float32Array(9),YT=new Float32Array(4);function ma(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,o=WT[r];if(o===void 0&&(o=new Float32Array(r),WT[r]=o),e!==0){i.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=t,n[s].toArray(o,a)}return o}function Xt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Yt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ih(n,e){let t=$T[e];t===void 0&&(t=new Int32Array(e),$T[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Q2(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function eF(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;n.uniform2fv(this.addr,e),Yt(t,e)}}function tF(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Xt(t,e))return;n.uniform3fv(this.addr,e),Yt(t,e)}}function nF(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;n.uniform4fv(this.addr,e),Yt(t,e)}}function iF(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Xt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Yt(t,e)}else{if(Xt(t,i))return;YT.set(i),n.uniformMatrix2fv(this.addr,!1,YT),Yt(t,i)}}function rF(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Xt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Yt(t,e)}else{if(Xt(t,i))return;XT.set(i),n.uniformMatrix3fv(this.addr,!1,XT),Yt(t,i)}}function oF(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Xt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Yt(t,e)}else{if(Xt(t,i))return;qT.set(i),n.uniformMatrix4fv(this.addr,!1,qT),Yt(t,i)}}function sF(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function aF(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;n.uniform2iv(this.addr,e),Yt(t,e)}}function cF(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;n.uniform3iv(this.addr,e),Yt(t,e)}}function lF(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;n.uniform4iv(this.addr,e),Yt(t,e)}}function uF(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function dF(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;n.uniform2uiv(this.addr,e),Yt(t,e)}}function fF(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;n.uniform3uiv(this.addr,e),Yt(t,e)}}function hF(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;n.uniform4uiv(this.addr,e),Yt(t,e)}}function pF(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let o;this.type===n.SAMPLER_2D_SHADOW?(jT.compareFunction=Cy,o=jT):o=cw,t.setTexture2D(e||o,r)}function mF(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||uw,r)}function gF(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||dw,r)}function vF(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||lw,r)}function yF(n){switch(n){case 5126:return Q2;case 35664:return eF;case 35665:return tF;case 35666:return nF;case 35674:return iF;case 35675:return rF;case 35676:return oF;case 5124:case 35670:return sF;case 35667:case 35671:return aF;case 35668:case 35672:return cF;case 35669:case 35673:return lF;case 5125:return uF;case 36294:return dF;case 36295:return fF;case 36296:return hF;case 35678:case 36198:case 36298:case 36306:case 35682:return pF;case 35679:case 36299:case 36307:return mF;case 35680:case 36300:case 36308:case 36293:return gF;case 36289:case 36303:case 36311:case 36292:return vF}}function xF(n,e){n.uniform1fv(this.addr,e)}function _F(n,e){let t=ma(e,this.size,2);n.uniform2fv(this.addr,t)}function bF(n,e){let t=ma(e,this.size,3);n.uniform3fv(this.addr,t)}function EF(n,e){let t=ma(e,this.size,4);n.uniform4fv(this.addr,t)}function SF(n,e){let t=ma(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function MF(n,e){let t=ma(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function TF(n,e){let t=ma(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function wF(n,e){n.uniform1iv(this.addr,e)}function CF(n,e){n.uniform2iv(this.addr,e)}function IF(n,e){n.uniform3iv(this.addr,e)}function AF(n,e){n.uniform4iv(this.addr,e)}function RF(n,e){n.uniform1uiv(this.addr,e)}function DF(n,e){n.uniform2uiv(this.addr,e)}function NF(n,e){n.uniform3uiv(this.addr,e)}function PF(n,e){n.uniform4uiv(this.addr,e)}function OF(n,e,t){let i=this.cache,r=e.length,o=Ih(t,r);Xt(i,o)||(n.uniform1iv(this.addr,o),Yt(i,o));for(let s=0;s!==r;++s)t.setTexture2D(e[s]||cw,o[s])}function LF(n,e,t){let i=this.cache,r=e.length,o=Ih(t,r);Xt(i,o)||(n.uniform1iv(this.addr,o),Yt(i,o));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||uw,o[s])}function FF(n,e,t){let i=this.cache,r=e.length,o=Ih(t,r);Xt(i,o)||(n.uniform1iv(this.addr,o),Yt(i,o));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||dw,o[s])}function kF(n,e,t){let i=this.cache,r=e.length,o=Ih(t,r);Xt(i,o)||(n.uniform1iv(this.addr,o),Yt(i,o));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||lw,o[s])}function UF(n){switch(n){case 5126:return xF;case 35664:return _F;case 35665:return bF;case 35666:return EF;case 35674:return SF;case 35675:return MF;case 35676:return TF;case 5124:case 35670:return wF;case 35667:case 35671:return CF;case 35668:case 35672:return IF;case 35669:case 35673:return AF;case 5125:return RF;case 36294:return DF;case 36295:return NF;case 36296:return PF;case 35678:case 36198:case 36298:case 36306:case 35682:return OF;case 35679:case 36299:case 36307:return LF;case 35680:case 36300:case 36308:case 36293:return FF;case 36289:case 36303:case 36311:case 36292:return kF}}var Vy=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=yF(t.type)}},Hy=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=UF(t.type)}},zy=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let o=0,s=r.length;o!==s;++o){let a=r[o];a.setValue(e,t[a.id],i)}}},By=/(\w+)(\])?(\[|\.)?/g;function ZT(n,e){n.seq.push(e),n.map[e.id]=e}function BF(n,e,t){let i=n.name,r=i.length;for(By.lastIndex=0;;){let o=By.exec(i),s=By.lastIndex,a=o[1],c=o[2]==="]",l=o[3];if(c&&(a=a|0),l===void 0||l==="["&&s+2===r){ZT(t,l===void 0?new Vy(a,n,e):new Hy(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new zy(a),ZT(t,d)),t=d}}}var pa=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let o=e.getActiveUniform(t,r),s=e.getUniformLocation(t,o.name);BF(o,s,this)}}setValue(e,t,i,r){let o=this.map[t];o!==void 0&&o.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let o=0,s=t.length;o!==s;++o){let a=t[o],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,o=e.length;r!==o;++r){let s=e[r];s.id in t&&i.push(s)}return i}};function KT(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var VF=37297,HF=0;function zF(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let s=r;s<o;s++){let a=s+1;i.push(`${a===e?">":" "} ${a}: ${t[s]}`)}return i.join(`
`)}var JT=new $e;function GF(n){dt._getMatrix(JT,dt.workingColorSpace,n);let e=`mat3( ${JT.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(n)){case Hc:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return Ve("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function QT(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),o=(n.getShaderInfoLog(e)||"").trim();if(i&&o==="")return"";let s=/ERROR: 0:(\d+)/.exec(o);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+o+`

`+zF(n.getShaderSource(e),a)}else return o}function jF(n,e){let t=GF(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function WF(n,e){let t;switch(e){case vT:t="Linear";break;case yT:t="Reinhard";break;case xT:t="Cineon";break;case _T:t="ACESFilmic";break;case ET:t="AgX";break;case ST:t="Neutral";break;case bT:t="Custom";break;default:Ve("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Mh=new k;function $F(){dt.getLuminanceCoefficients(Mh);let n=Mh.x.toFixed(4),e=Mh.y.toFixed(4),t=Mh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qF(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fl).join(`
`)}function XF(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function YF(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let o=n.getActiveAttrib(e,r),s=o.name,a=1;o.type===n.FLOAT_MAT2&&(a=2),o.type===n.FLOAT_MAT3&&(a=3),o.type===n.FLOAT_MAT4&&(a=4),t[s]={type:o.type,location:n.getAttribLocation(e,s),locationSize:a}}return t}function fl(n){return n!==""}function ew(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function tw(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var ZF=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gy(n){return n.replace(ZF,JF)}var KF=new Map;function JF(n,e){let t=Ye[e];if(t===void 0){let i=KF.get(e);if(i!==void 0)t=Ye[i],Ve('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Gy(t)}var QF=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nw(n){return n.replace(QF,ek)}function ek(n,e,t,i){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function iw(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function tk(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===py?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===ZM?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ki&&(e="SHADOWMAP_TYPE_VSM"),e}function nk(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ho:case zo:e="ENVMAP_TYPE_CUBE";break;case rl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ik(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case zo:e="ENVMAP_MODE_REFRACTION";break}return e}function rk(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case yy:e="ENVMAP_BLENDING_MULTIPLY";break;case mT:e="ENVMAP_BLENDING_MIX";break;case gT:e="ENVMAP_BLENDING_ADD";break}return e}function ok(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function sk(n,e,t,i){let r=n.getContext(),o=t.defines,s=t.vertexShader,a=t.fragmentShader,c=tk(t),l=nk(t),u=ik(t),d=rk(t),f=ok(t),h=qF(t),g=XF(o),y=r.createProgram(),m,p,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(fl).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(fl).join(`
`),p.length>0&&(p+=`
`)):(m=[iw(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fl).join(`
`),p=[iw(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==fr?"#define TONE_MAPPING":"",t.toneMapping!==fr?Ye.tonemapping_pars_fragment:"",t.toneMapping!==fr?WF("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,jF("linearToOutputTexel",t.outputColorSpace),$F(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fl).join(`
`)),s=Gy(s),s=ew(s,t),s=tw(s,t),a=Gy(a),a=ew(a,t),a=tw(a,t),s=nw(s),a=nw(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Iy?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Iy?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let S=w+m+s,I=w+p+a,R=KT(r,r.VERTEX_SHADER,S),T=KT(r,r.FRAGMENT_SHADER,I);r.attachShader(y,R),r.attachShader(y,T),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function D(N){if(n.debug.checkShaderErrors){let H=r.getProgramInfoLog(y)||"",G=r.getShaderInfoLog(R)||"",Z=r.getShaderInfoLog(T)||"",W=H.trim(),K=G.trim(),te=Z.trim(),j=!0,ae=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,y,R,T);else{let ue=QT(r,R,"vertex"),Me=QT(r,T,"fragment");tt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+W+`
`+ue+`
`+Me)}else W!==""?Ve("WebGLProgram: Program Info Log:",W):(K===""||te==="")&&(ae=!1);ae&&(N.diagnostics={runnable:j,programLog:W,vertexShader:{log:K,prefix:m},fragmentShader:{log:te,prefix:p}})}r.deleteShader(R),r.deleteShader(T),U=new pa(r,y),b=YF(r,y)}let U;this.getUniforms=function(){return U===void 0&&D(this),U};let b;this.getAttributes=function(){return b===void 0&&D(this),b};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(y,VF)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=HF++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=R,this.fragmentShader=T,this}var ak=0,jy=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Wy(e),t.set(e,i)),i}},Wy=class{constructor(e){this.id=ak++,this.code=e,this.usedTimes=0}};function ck(n,e,t,i,r,o,s){let a=new Wc,c=new jy,l=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures,h=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(b){return l.add(b),b===0?"uv":`uv${b}`}function m(b,x,N,H,G){let Z=H.fog,W=G.geometry,K=b.isMeshStandardMaterial?H.environment:null,te=(b.isMeshStandardMaterial?t:e).get(b.envMap||K),j=te&&te.mapping===rl?te.image.height:null,ae=g[b.type];b.precision!==null&&(h=r.getMaxPrecision(b.precision),h!==b.precision&&Ve("WebGLProgram.getParameters:",b.precision,"not supported, using",h,"instead."));let ue=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Me=ue!==void 0?ue.length:0,et=0;W.morphAttributes.position!==void 0&&(et=1),W.morphAttributes.normal!==void 0&&(et=2),W.morphAttributes.color!==void 0&&(et=3);let ft,yt,bt,$;if(ae){let ot=Hi[ae];ft=ot.vertexShader,yt=ot.fragmentShader}else ft=b.vertexShader,yt=b.fragmentShader,c.update(b),bt=c.getVertexShaderID(b),$=c.getFragmentShaderID(b);let Q=n.getRenderTarget(),ge=n.state.buffers.depth.getReversed(),He=G.isInstancedMesh===!0,Te=G.isBatchedMesh===!0,Je=!!b.map,Bt=!!b.matcap,qe=!!te,St=!!b.aoMap,A=!!b.lightMap,Qe=!!b.bumpMap,Ze=!!b.normalMap,xt=!!b.displacementMap,ye=!!b.emissiveMap,wt=!!b.metalnessMap,we=!!b.roughnessMap,Be=b.anisotropy>0,E=b.clearcoat>0,v=b.dispersion>0,L=b.iridescence>0,q=b.sheen>0,J=b.transmission>0,z=Be&&!!b.anisotropyMap,Se=E&&!!b.clearcoatMap,de=E&&!!b.clearcoatNormalMap,Ce=E&&!!b.clearcoatRoughnessMap,be=L&&!!b.iridescenceMap,ee=L&&!!b.iridescenceThicknessMap,ce=q&&!!b.sheenColorMap,De=q&&!!b.sheenRoughnessMap,C=!!b.specularMap,F=!!b.specularColorMap,ne=!!b.specularIntensityMap,M=J&&!!b.transmissionMap,ie=J&&!!b.thicknessMap,oe=!!b.gradientMap,se=!!b.alphaMap,re=b.alphaTest>0,X=!!b.alphaHash,he=!!b.extensions,Ie=fr;b.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Ie=n.toneMapping);let pt={shaderID:ae,shaderType:b.type,shaderName:b.name,vertexShader:ft,fragmentShader:yt,defines:b.defines,customVertexShaderID:bt,customFragmentShaderID:$,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:h,batching:Te,batchingColor:Te&&G._colorsTexture!==null,instancing:He,instancingColor:He&&G.instanceColor!==null,instancingMorph:He&&G.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Q===null?n.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Uo,alphaToCoverage:!!b.alphaToCoverage,map:Je,matcap:Bt,envMap:qe,envMapMode:qe&&te.mapping,envMapCubeUVHeight:j,aoMap:St,lightMap:A,bumpMap:Qe,normalMap:Ze,displacementMap:f&&xt,emissiveMap:ye,normalMapObjectSpace:Ze&&b.normalMapType===CT,normalMapTangentSpace:Ze&&b.normalMapType===wy,metalnessMap:wt,roughnessMap:we,anisotropy:Be,anisotropyMap:z,clearcoat:E,clearcoatMap:Se,clearcoatNormalMap:de,clearcoatRoughnessMap:Ce,dispersion:v,iridescence:L,iridescenceMap:be,iridescenceThicknessMap:ee,sheen:q,sheenColorMap:ce,sheenRoughnessMap:De,specularMap:C,specularColorMap:F,specularIntensityMap:ne,transmission:J,transmissionMap:M,thicknessMap:ie,gradientMap:oe,opaque:b.transparent===!1&&b.blending===Fo&&b.alphaToCoverage===!1,alphaMap:se,alphaTest:re,alphaHash:X,combine:b.combine,mapUv:Je&&y(b.map.channel),aoMapUv:St&&y(b.aoMap.channel),lightMapUv:A&&y(b.lightMap.channel),bumpMapUv:Qe&&y(b.bumpMap.channel),normalMapUv:Ze&&y(b.normalMap.channel),displacementMapUv:xt&&y(b.displacementMap.channel),emissiveMapUv:ye&&y(b.emissiveMap.channel),metalnessMapUv:wt&&y(b.metalnessMap.channel),roughnessMapUv:we&&y(b.roughnessMap.channel),anisotropyMapUv:z&&y(b.anisotropyMap.channel),clearcoatMapUv:Se&&y(b.clearcoatMap.channel),clearcoatNormalMapUv:de&&y(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&y(b.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&y(b.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&y(b.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&y(b.sheenColorMap.channel),sheenRoughnessMapUv:De&&y(b.sheenRoughnessMap.channel),specularMapUv:C&&y(b.specularMap.channel),specularColorMapUv:F&&y(b.specularColorMap.channel),specularIntensityMapUv:ne&&y(b.specularIntensityMap.channel),transmissionMapUv:M&&y(b.transmissionMap.channel),thicknessMapUv:ie&&y(b.thicknessMap.channel),alphaMapUv:se&&y(b.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Ze||Be),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!W.attributes.uv&&(Je||se),fog:!!Z,useFog:b.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ge,skinning:G.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:et,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ie,decodeVideoTexture:Je&&b.map.isVideoTexture===!0&&dt.getTransfer(b.map.colorSpace)===_t,decodeVideoTextureEmissive:ye&&b.emissiveMap.isVideoTexture===!0&&dt.getTransfer(b.emissiveMap.colorSpace)===_t,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ui,flipSided:b.side===xn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:he&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(he&&b.extensions.multiDraw===!0||Te)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return pt.vertexUv1s=l.has(1),pt.vertexUv2s=l.has(2),pt.vertexUv3s=l.has(3),l.clear(),pt}function p(b){let x=[];if(b.shaderID?x.push(b.shaderID):(x.push(b.customVertexShaderID),x.push(b.customFragmentShaderID)),b.defines!==void 0)for(let N in b.defines)x.push(N),x.push(b.defines[N]);return b.isRawShaderMaterial===!1&&(w(x,b),S(x,b),x.push(n.outputColorSpace)),x.push(b.customProgramCacheKey),x.join()}function w(b,x){b.push(x.precision),b.push(x.outputColorSpace),b.push(x.envMapMode),b.push(x.envMapCubeUVHeight),b.push(x.mapUv),b.push(x.alphaMapUv),b.push(x.lightMapUv),b.push(x.aoMapUv),b.push(x.bumpMapUv),b.push(x.normalMapUv),b.push(x.displacementMapUv),b.push(x.emissiveMapUv),b.push(x.metalnessMapUv),b.push(x.roughnessMapUv),b.push(x.anisotropyMapUv),b.push(x.clearcoatMapUv),b.push(x.clearcoatNormalMapUv),b.push(x.clearcoatRoughnessMapUv),b.push(x.iridescenceMapUv),b.push(x.iridescenceThicknessMapUv),b.push(x.sheenColorMapUv),b.push(x.sheenRoughnessMapUv),b.push(x.specularMapUv),b.push(x.specularColorMapUv),b.push(x.specularIntensityMapUv),b.push(x.transmissionMapUv),b.push(x.thicknessMapUv),b.push(x.combine),b.push(x.fogExp2),b.push(x.sizeAttenuation),b.push(x.morphTargetsCount),b.push(x.morphAttributeCount),b.push(x.numDirLights),b.push(x.numPointLights),b.push(x.numSpotLights),b.push(x.numSpotLightMaps),b.push(x.numHemiLights),b.push(x.numRectAreaLights),b.push(x.numDirLightShadows),b.push(x.numPointLightShadows),b.push(x.numSpotLightShadows),b.push(x.numSpotLightShadowsWithMaps),b.push(x.numLightProbes),b.push(x.shadowMapType),b.push(x.toneMapping),b.push(x.numClippingPlanes),b.push(x.numClipIntersection),b.push(x.depthPacking)}function S(b,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),x.gradientMap&&a.enable(22),b.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reversedDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),b.push(a.mask)}function I(b){let x=g[b.type],N;if(x){let H=Hi[x];N=UT.clone(H.uniforms)}else N=b.uniforms;return N}function R(b,x){let N;for(let H=0,G=u.length;H<G;H++){let Z=u[H];if(Z.cacheKey===x){N=Z,++N.usedTimes;break}}return N===void 0&&(N=new sk(n,x,b,o),u.push(N)),N}function T(b){if(--b.usedTimes===0){let x=u.indexOf(b);u[x]=u[u.length-1],u.pop(),b.destroy()}}function D(b){c.remove(b)}function U(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:I,acquireProgram:R,releaseProgram:T,releaseShaderCache:D,programs:u,dispose:U}}function lk(){let n=new WeakMap;function e(s){return n.has(s)}function t(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function i(s){n.delete(s)}function r(s,a,c){n.get(s)[a]=c}function o(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:o}}function uk(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function rw(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ow(){let n=[],e=0,t=[],i=[],r=[];function o(){e=0,t.length=0,i.length=0,r.length=0}function s(d,f,h,g,y,m){let p=n[e];return p===void 0?(p={id:d.id,object:d,geometry:f,material:h,groupOrder:g,renderOrder:d.renderOrder,z:y,group:m},n[e]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=h,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=y,p.group=m),e++,p}function a(d,f,h,g,y,m){let p=s(d,f,h,g,y,m);h.transmission>0?i.push(p):h.transparent===!0?r.push(p):t.push(p)}function c(d,f,h,g,y,m){let p=s(d,f,h,g,y,m);h.transmission>0?i.unshift(p):h.transparent===!0?r.unshift(p):t.unshift(p)}function l(d,f){t.length>1&&t.sort(d||uk),i.length>1&&i.sort(f||rw),r.length>1&&r.sort(f||rw)}function u(){for(let d=e,f=n.length;d<f;d++){let h=n[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:i,transparent:r,init:o,push:a,unshift:c,finish:u,sort:l}}function dk(){let n=new WeakMap;function e(i,r){let o=n.get(i),s;return o===void 0?(s=new ow,n.set(i,[s])):r>=o.length?(s=new ow,o.push(s)):s=o[r],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function fk(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new it};break;case"SpotLight":t={position:new k,direction:new k,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new it,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new it,groundColor:new it};break;case"RectAreaLight":t={color:new it,position:new k,halfWidth:new k,halfHeight:new k};break}return n[e.id]=t,t}}}function hk(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var pk=0;function mk(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function gk(n){let e=new fk,t=hk(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new k);let r=new k,o=new Ut,s=new Ut;function a(l){let u=0,d=0,f=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let h=0,g=0,y=0,m=0,p=0,w=0,S=0,I=0,R=0,T=0,D=0;l.sort(mk);for(let b=0,x=l.length;b<x;b++){let N=l[b],H=N.color,G=N.intensity,Z=N.distance,W=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)u+=H.r*G,d+=H.g*G,f+=H.b*G;else if(N.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(N.sh.coefficients[K],G);D++}else if(N.isDirectionalLight){let K=e.get(N);if(K.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let te=N.shadow,j=t.get(N);j.shadowIntensity=te.intensity,j.shadowBias=te.bias,j.shadowNormalBias=te.normalBias,j.shadowRadius=te.radius,j.shadowMapSize=te.mapSize,i.directionalShadow[h]=j,i.directionalShadowMap[h]=W,i.directionalShadowMatrix[h]=N.shadow.matrix,w++}i.directional[h]=K,h++}else if(N.isSpotLight){let K=e.get(N);K.position.setFromMatrixPosition(N.matrixWorld),K.color.copy(H).multiplyScalar(G),K.distance=Z,K.coneCos=Math.cos(N.angle),K.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),K.decay=N.decay,i.spot[y]=K;let te=N.shadow;if(N.map&&(i.spotLightMap[R]=N.map,R++,te.updateMatrices(N),N.castShadow&&T++),i.spotLightMatrix[y]=te.matrix,N.castShadow){let j=t.get(N);j.shadowIntensity=te.intensity,j.shadowBias=te.bias,j.shadowNormalBias=te.normalBias,j.shadowRadius=te.radius,j.shadowMapSize=te.mapSize,i.spotShadow[y]=j,i.spotShadowMap[y]=W,I++}y++}else if(N.isRectAreaLight){let K=e.get(N);K.color.copy(H).multiplyScalar(G),K.halfWidth.set(N.width*.5,0,0),K.halfHeight.set(0,N.height*.5,0),i.rectArea[m]=K,m++}else if(N.isPointLight){let K=e.get(N);if(K.color.copy(N.color).multiplyScalar(N.intensity),K.distance=N.distance,K.decay=N.decay,N.castShadow){let te=N.shadow,j=t.get(N);j.shadowIntensity=te.intensity,j.shadowBias=te.bias,j.shadowNormalBias=te.normalBias,j.shadowRadius=te.radius,j.shadowMapSize=te.mapSize,j.shadowCameraNear=te.camera.near,j.shadowCameraFar=te.camera.far,i.pointShadow[g]=j,i.pointShadowMap[g]=W,i.pointShadowMatrix[g]=N.shadow.matrix,S++}i.point[g]=K,g++}else if(N.isHemisphereLight){let K=e.get(N);K.skyColor.copy(N.color).multiplyScalar(G),K.groundColor.copy(N.groundColor).multiplyScalar(G),i.hemi[p]=K,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;let U=i.hash;(U.directionalLength!==h||U.pointLength!==g||U.spotLength!==y||U.rectAreaLength!==m||U.hemiLength!==p||U.numDirectionalShadows!==w||U.numPointShadows!==S||U.numSpotShadows!==I||U.numSpotMaps!==R||U.numLightProbes!==D)&&(i.directional.length=h,i.spot.length=y,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=I,i.spotShadowMap.length=I,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=I+R-T,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=D,U.directionalLength=h,U.pointLength=g,U.spotLength=y,U.rectAreaLength=m,U.hemiLength=p,U.numDirectionalShadows=w,U.numPointShadows=S,U.numSpotShadows=I,U.numSpotMaps=R,U.numLightProbes=D,i.version=pk++)}function c(l,u){let d=0,f=0,h=0,g=0,y=0,m=u.matrixWorldInverse;for(let p=0,w=l.length;p<w;p++){let S=l[p];if(S.isDirectionalLight){let I=i.directional[d];I.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(m),d++}else if(S.isSpotLight){let I=i.spot[h];I.position.setFromMatrixPosition(S.matrixWorld),I.position.applyMatrix4(m),I.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(m),h++}else if(S.isRectAreaLight){let I=i.rectArea[g];I.position.setFromMatrixPosition(S.matrixWorld),I.position.applyMatrix4(m),s.identity(),o.copy(S.matrixWorld),o.premultiply(m),s.extractRotation(o),I.halfWidth.set(S.width*.5,0,0),I.halfHeight.set(0,S.height*.5,0),I.halfWidth.applyMatrix4(s),I.halfHeight.applyMatrix4(s),g++}else if(S.isPointLight){let I=i.point[f];I.position.setFromMatrixPosition(S.matrixWorld),I.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){let I=i.hemi[y];I.direction.setFromMatrixPosition(S.matrixWorld),I.direction.transformDirection(m),y++}}}return{setup:a,setupView:c,state:i}}function sw(n){let e=new gk(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function o(u){t.push(u)}function s(u){i.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}let l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:o,pushShadow:s}}function vk(n){let e=new WeakMap;function t(r,o=0){let s=e.get(r),a;return s===void 0?(a=new sw(n),e.set(r,[a])):o>=s.length?(a=new sw(n),s.push(a)):a=s[o],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var yk=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xk=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function _k(n,e,t){let i=new aa,r=new ze,o=new ze,s=new Dt,a=new Ef({depthPacking:wT}),c=new Sf,l={},u=t.maxTextureSize,d={[cr]:xn,[xn]:cr,[Ui]:Ui},f=new ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:yk,fragmentShader:xk}),h=f.clone();h.defines.HORIZONTAL_PASS=1;let g=new ur;g.setAttribute("position",new Yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Pn(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=py;let p=this.type;this.render=function(T,D,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let b=n.getRenderTarget(),x=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),H=n.state;H.setBlending(Bi),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let G=p!==ki&&this.type===ki,Z=p===ki&&this.type!==ki;for(let W=0,K=T.length;W<K;W++){let te=T[W],j=te.shadow;if(j===void 0){Ve("WebGLShadowMap:",te,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;r.copy(j.mapSize);let ae=j.getFrameExtents();if(r.multiply(ae),o.copy(j.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(o.x=Math.floor(u/ae.x),r.x=o.x*ae.x,j.mapSize.x=o.x),r.y>u&&(o.y=Math.floor(u/ae.y),r.y=o.y*ae.y,j.mapSize.y=o.y)),j.map===null||G===!0||Z===!0){let Me=this.type!==ki?{minFilter:Nn,magFilter:Nn}:{};j.map!==null&&j.map.dispose(),j.map=new Li(r.x,r.y,Me),j.map.texture.name=te.name+".shadowMap",j.camera.updateProjectionMatrix()}n.setRenderTarget(j.map),n.clear();let ue=j.getViewportCount();for(let Me=0;Me<ue;Me++){let et=j.getViewport(Me);s.set(o.x*et.x,o.y*et.y,o.x*et.z,o.y*et.w),H.viewport(s),j.updateMatrices(te,Me),i=j.getFrustum(),I(D,U,j.camera,te,this.type)}j.isPointLightShadow!==!0&&this.type===ki&&w(j,U),j.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(b,x,N)};function w(T,D){let U=e.update(y);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,h.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Li(r.x,r.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(D,null,U,f,y,null),h.uniforms.shadow_pass.value=T.mapPass.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(D,null,U,h,y,null)}function S(T,D,U,b){let x=null,N=U.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(N!==void 0)x=N;else if(x=U.isPointLight===!0?c:a,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){let H=x.uuid,G=D.uuid,Z=l[H];Z===void 0&&(Z={},l[H]=Z);let W=Z[G];W===void 0&&(W=x.clone(),Z[G]=W,D.addEventListener("dispose",R)),x=W}if(x.visible=D.visible,x.wireframe=D.wireframe,b===ki?x.side=D.shadowSide!==null?D.shadowSide:D.side:x.side=D.shadowSide!==null?D.shadowSide:d[D.side],x.alphaMap=D.alphaMap,x.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,x.map=D.map,x.clipShadows=D.clipShadows,x.clippingPlanes=D.clippingPlanes,x.clipIntersection=D.clipIntersection,x.displacementMap=D.displacementMap,x.displacementScale=D.displacementScale,x.displacementBias=D.displacementBias,x.wireframeLinewidth=D.wireframeLinewidth,x.linewidth=D.linewidth,U.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let H=n.properties.get(x);H.light=U}return x}function I(T,D,U,b,x){if(T.visible===!1)return;if(T.layers.test(D.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&x===ki)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,T.matrixWorld);let G=e.update(T),Z=T.material;if(Array.isArray(Z)){let W=G.groups;for(let K=0,te=W.length;K<te;K++){let j=W[K],ae=Z[j.materialIndex];if(ae&&ae.visible){let ue=S(T,ae,b,x);T.onBeforeShadow(n,T,D,U,G,ue,j),n.renderBufferDirect(U,null,G,ue,T,j),T.onAfterShadow(n,T,D,U,G,ue,j)}}}else if(Z.visible){let W=S(T,Z,b,x);T.onBeforeShadow(n,T,D,U,G,W,null),n.renderBufferDirect(U,null,G,W,T,null),T.onAfterShadow(n,T,D,U,G,W,null)}}let H=T.children;for(let G=0,Z=H.length;G<Z;G++)I(H[G],D,U,b,x)}function R(T){T.target.removeEventListener("dispose",R);for(let U in l){let b=l[U],x=T.target.uuid;x in b&&(b[x].dispose(),delete b[x])}}}var bk={[Nf]:Pf,[Of]:kf,[Lf]:Uf,[ko]:Ff,[Pf]:Nf,[kf]:Of,[Uf]:Lf,[Ff]:ko};function Ek(n,e){function t(){let M=!1,ie=new Dt,oe=null,se=new Dt(0,0,0,0);return{setMask:function(re){oe!==re&&!M&&(n.colorMask(re,re,re,re),oe=re)},setLocked:function(re){M=re},setClear:function(re,X,he,Ie,pt){pt===!0&&(re*=Ie,X*=Ie,he*=Ie),ie.set(re,X,he,Ie),se.equals(ie)===!1&&(n.clearColor(re,X,he,Ie),se.copy(ie))},reset:function(){M=!1,oe=null,se.set(-1,0,0,0)}}}function i(){let M=!1,ie=!1,oe=null,se=null,re=null;return{setReversed:function(X){if(ie!==X){let he=e.get("EXT_clip_control");X?he.clipControlEXT(he.LOWER_LEFT_EXT,he.ZERO_TO_ONE_EXT):he.clipControlEXT(he.LOWER_LEFT_EXT,he.NEGATIVE_ONE_TO_ONE_EXT),ie=X;let Ie=re;re=null,this.setClear(Ie)}},getReversed:function(){return ie},setTest:function(X){X?Q(n.DEPTH_TEST):ge(n.DEPTH_TEST)},setMask:function(X){oe!==X&&!M&&(n.depthMask(X),oe=X)},setFunc:function(X){if(ie&&(X=bk[X]),se!==X){switch(X){case Nf:n.depthFunc(n.NEVER);break;case Pf:n.depthFunc(n.ALWAYS);break;case Of:n.depthFunc(n.LESS);break;case ko:n.depthFunc(n.LEQUAL);break;case Lf:n.depthFunc(n.EQUAL);break;case Ff:n.depthFunc(n.GEQUAL);break;case kf:n.depthFunc(n.GREATER);break;case Uf:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}se=X}},setLocked:function(X){M=X},setClear:function(X){re!==X&&(ie&&(X=1-X),n.clearDepth(X),re=X)},reset:function(){M=!1,oe=null,se=null,re=null,ie=!1}}}function r(){let M=!1,ie=null,oe=null,se=null,re=null,X=null,he=null,Ie=null,pt=null;return{setTest:function(ot){M||(ot?Q(n.STENCIL_TEST):ge(n.STENCIL_TEST))},setMask:function(ot){ie!==ot&&!M&&(n.stencilMask(ot),ie=ot)},setFunc:function(ot,sn,an){(oe!==ot||se!==sn||re!==an)&&(n.stencilFunc(ot,sn,an),oe=ot,se=sn,re=an)},setOp:function(ot,sn,an){(X!==ot||he!==sn||Ie!==an)&&(n.stencilOp(ot,sn,an),X=ot,he=sn,Ie=an)},setLocked:function(ot){M=ot},setClear:function(ot){pt!==ot&&(n.clearStencil(ot),pt=ot)},reset:function(){M=!1,ie=null,oe=null,se=null,re=null,X=null,he=null,Ie=null,pt=null}}}let o=new t,s=new i,a=new r,c=new WeakMap,l=new WeakMap,u={},d={},f=new WeakMap,h=[],g=null,y=!1,m=null,p=null,w=null,S=null,I=null,R=null,T=null,D=new it(0,0,0),U=0,b=!1,x=null,N=null,H=null,G=null,Z=null,W=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),K=!1,te=0,j=n.getParameter(n.VERSION);j.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(j)[1]),K=te>=1):j.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),K=te>=2);let ae=null,ue={},Me=n.getParameter(n.SCISSOR_BOX),et=n.getParameter(n.VIEWPORT),ft=new Dt().fromArray(Me),yt=new Dt().fromArray(et);function bt(M,ie,oe,se){let re=new Uint8Array(4),X=n.createTexture();n.bindTexture(M,X),n.texParameteri(M,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(M,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let he=0;he<oe;he++)M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY?n.texImage3D(ie,0,n.RGBA,1,1,se,0,n.RGBA,n.UNSIGNED_BYTE,re):n.texImage2D(ie+he,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,re);return X}let $={};$[n.TEXTURE_2D]=bt(n.TEXTURE_2D,n.TEXTURE_2D,1),$[n.TEXTURE_CUBE_MAP]=bt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[n.TEXTURE_2D_ARRAY]=bt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),$[n.TEXTURE_3D]=bt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),o.setClear(0,0,0,1),s.setClear(1),a.setClear(0),Q(n.DEPTH_TEST),s.setFunc(ko),Qe(!1),Ze(hy),Q(n.CULL_FACE),St(Bi);function Q(M){u[M]!==!0&&(n.enable(M),u[M]=!0)}function ge(M){u[M]!==!1&&(n.disable(M),u[M]=!1)}function He(M,ie){return d[M]!==ie?(n.bindFramebuffer(M,ie),d[M]=ie,M===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ie),M===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ie),!0):!1}function Te(M,ie){let oe=h,se=!1;if(M){oe=f.get(ie),oe===void 0&&(oe=[],f.set(ie,oe));let re=M.textures;if(oe.length!==re.length||oe[0]!==n.COLOR_ATTACHMENT0){for(let X=0,he=re.length;X<he;X++)oe[X]=n.COLOR_ATTACHMENT0+X;oe.length=re.length,se=!0}}else oe[0]!==n.BACK&&(oe[0]=n.BACK,se=!0);se&&n.drawBuffers(oe)}function Je(M){return g!==M?(n.useProgram(M),g=M,!0):!1}let Bt={[Gr]:n.FUNC_ADD,[JM]:n.FUNC_SUBTRACT,[QM]:n.FUNC_REVERSE_SUBTRACT};Bt[eT]=n.MIN,Bt[tT]=n.MAX;let qe={[nT]:n.ZERO,[iT]:n.ONE,[rT]:n.SRC_COLOR,[uf]:n.SRC_ALPHA,[uT]:n.SRC_ALPHA_SATURATE,[cT]:n.DST_COLOR,[sT]:n.DST_ALPHA,[oT]:n.ONE_MINUS_SRC_COLOR,[df]:n.ONE_MINUS_SRC_ALPHA,[lT]:n.ONE_MINUS_DST_COLOR,[aT]:n.ONE_MINUS_DST_ALPHA,[dT]:n.CONSTANT_COLOR,[fT]:n.ONE_MINUS_CONSTANT_COLOR,[hT]:n.CONSTANT_ALPHA,[pT]:n.ONE_MINUS_CONSTANT_ALPHA};function St(M,ie,oe,se,re,X,he,Ie,pt,ot){if(M===Bi){y===!0&&(ge(n.BLEND),y=!1);return}if(y===!1&&(Q(n.BLEND),y=!0),M!==KM){if(M!==m||ot!==b){if((p!==Gr||I!==Gr)&&(n.blendEquation(n.FUNC_ADD),p=Gr,I=Gr),ot)switch(M){case Fo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case my:n.blendFunc(n.ONE,n.ONE);break;case gy:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case vy:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:tt("WebGLState: Invalid blending: ",M);break}else switch(M){case Fo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case my:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case gy:tt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case vy:tt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:tt("WebGLState: Invalid blending: ",M);break}w=null,S=null,R=null,T=null,D.set(0,0,0),U=0,m=M,b=ot}return}re=re||ie,X=X||oe,he=he||se,(ie!==p||re!==I)&&(n.blendEquationSeparate(Bt[ie],Bt[re]),p=ie,I=re),(oe!==w||se!==S||X!==R||he!==T)&&(n.blendFuncSeparate(qe[oe],qe[se],qe[X],qe[he]),w=oe,S=se,R=X,T=he),(Ie.equals(D)===!1||pt!==U)&&(n.blendColor(Ie.r,Ie.g,Ie.b,pt),D.copy(Ie),U=pt),m=M,b=!1}function A(M,ie){M.side===Ui?ge(n.CULL_FACE):Q(n.CULL_FACE);let oe=M.side===xn;ie&&(oe=!oe),Qe(oe),M.blending===Fo&&M.transparent===!1?St(Bi):St(M.blending,M.blendEquation,M.blendSrc,M.blendDst,M.blendEquationAlpha,M.blendSrcAlpha,M.blendDstAlpha,M.blendColor,M.blendAlpha,M.premultipliedAlpha),s.setFunc(M.depthFunc),s.setTest(M.depthTest),s.setMask(M.depthWrite),o.setMask(M.colorWrite);let se=M.stencilWrite;a.setTest(se),se&&(a.setMask(M.stencilWriteMask),a.setFunc(M.stencilFunc,M.stencilRef,M.stencilFuncMask),a.setOp(M.stencilFail,M.stencilZFail,M.stencilZPass)),ye(M.polygonOffset,M.polygonOffsetFactor,M.polygonOffsetUnits),M.alphaToCoverage===!0?Q(n.SAMPLE_ALPHA_TO_COVERAGE):ge(n.SAMPLE_ALPHA_TO_COVERAGE)}function Qe(M){x!==M&&(M?n.frontFace(n.CW):n.frontFace(n.CCW),x=M)}function Ze(M){M!==XM?(Q(n.CULL_FACE),M!==N&&(M===hy?n.cullFace(n.BACK):M===YM?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ge(n.CULL_FACE),N=M}function xt(M){M!==H&&(K&&n.lineWidth(M),H=M)}function ye(M,ie,oe){M?(Q(n.POLYGON_OFFSET_FILL),(G!==ie||Z!==oe)&&(n.polygonOffset(ie,oe),G=ie,Z=oe)):ge(n.POLYGON_OFFSET_FILL)}function wt(M){M?Q(n.SCISSOR_TEST):ge(n.SCISSOR_TEST)}function we(M){M===void 0&&(M=n.TEXTURE0+W-1),ae!==M&&(n.activeTexture(M),ae=M)}function Be(M,ie,oe){oe===void 0&&(ae===null?oe=n.TEXTURE0+W-1:oe=ae);let se=ue[oe];se===void 0&&(se={type:void 0,texture:void 0},ue[oe]=se),(se.type!==M||se.texture!==ie)&&(ae!==oe&&(n.activeTexture(oe),ae=oe),n.bindTexture(M,ie||$[M]),se.type=M,se.texture=ie)}function E(){let M=ue[ae];M!==void 0&&M.type!==void 0&&(n.bindTexture(M.type,null),M.type=void 0,M.texture=void 0)}function v(){try{n.compressedTexImage2D(...arguments)}catch(M){M("WebGLState:",M)}}function L(){try{n.compressedTexImage3D(...arguments)}catch(M){M("WebGLState:",M)}}function q(){try{n.texSubImage2D(...arguments)}catch(M){M("WebGLState:",M)}}function J(){try{n.texSubImage3D(...arguments)}catch(M){M("WebGLState:",M)}}function z(){try{n.compressedTexSubImage2D(...arguments)}catch(M){M("WebGLState:",M)}}function Se(){try{n.compressedTexSubImage3D(...arguments)}catch(M){M("WebGLState:",M)}}function de(){try{n.texStorage2D(...arguments)}catch(M){M("WebGLState:",M)}}function Ce(){try{n.texStorage3D(...arguments)}catch(M){M("WebGLState:",M)}}function be(){try{n.texImage2D(...arguments)}catch(M){M("WebGLState:",M)}}function ee(){try{n.texImage3D(...arguments)}catch(M){M("WebGLState:",M)}}function ce(M){ft.equals(M)===!1&&(n.scissor(M.x,M.y,M.z,M.w),ft.copy(M))}function De(M){yt.equals(M)===!1&&(n.viewport(M.x,M.y,M.z,M.w),yt.copy(M))}function C(M,ie){let oe=l.get(ie);oe===void 0&&(oe=new WeakMap,l.set(ie,oe));let se=oe.get(M);se===void 0&&(se=n.getUniformBlockIndex(ie,M.name),oe.set(M,se))}function F(M,ie){let se=l.get(ie).get(M);c.get(ie)!==se&&(n.uniformBlockBinding(ie,se,M.__bindingPointIndex),c.set(ie,se))}function ne(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),s.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ae=null,ue={},d={},f=new WeakMap,h=[],g=null,y=!1,m=null,p=null,w=null,S=null,I=null,R=null,T=null,D=new it(0,0,0),U=0,b=!1,x=null,N=null,H=null,G=null,Z=null,ft.set(0,0,n.canvas.width,n.canvas.height),yt.set(0,0,n.canvas.width,n.canvas.height),o.reset(),s.reset(),a.reset()}return{buffers:{color:o,depth:s,stencil:a},enable:Q,disable:ge,bindFramebuffer:He,drawBuffers:Te,useProgram:Je,setBlending:St,setMaterial:A,setFlipSided:Qe,setCullFace:Ze,setLineWidth:xt,setPolygonOffset:ye,setScissorTest:wt,activeTexture:we,bindTexture:Be,unbindTexture:E,compressedTexImage2D:v,compressedTexImage3D:L,texImage2D:be,texImage3D:ee,updateUBOMapping:C,uniformBlockBinding:F,texStorage2D:de,texStorage3D:Ce,texSubImage2D:q,texSubImage3D:J,compressedTexSubImage2D:z,compressedTexSubImage3D:Se,scissor:ce,viewport:De,reset:ne}}function Sk(n,e,t,i,r,o,s){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ze,u=new WeakMap,d,f=new WeakMap,h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,v){return h?new OffscreenCanvas(E,v):Gc("canvas")}function y(E,v,L){let q=1,J=Be(E);if((J.width>L||J.height>L)&&(q=L/Math.max(J.width,J.height)),q<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let z=Math.floor(q*J.width),Se=Math.floor(q*J.height);d===void 0&&(d=g(z,Se));let de=v?g(z,Se):d;return de.width=z,de.height=Se,de.getContext("2d").drawImage(E,0,0,z,Se),Ve("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+z+"x"+Se+")."),de}else return"data"in E&&Ve("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),E;return E}function m(E){return E.generateMipmaps}function p(E){n.generateMipmap(E)}function w(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(E,v,L,q,J=!1){if(E!==null){if(n[E]!==void 0)return n[E];Ve("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let z=v;if(v===n.RED&&(L===n.FLOAT&&(z=n.R32F),L===n.HALF_FLOAT&&(z=n.R16F),L===n.UNSIGNED_BYTE&&(z=n.R8)),v===n.RED_INTEGER&&(L===n.UNSIGNED_BYTE&&(z=n.R8UI),L===n.UNSIGNED_SHORT&&(z=n.R16UI),L===n.UNSIGNED_INT&&(z=n.R32UI),L===n.BYTE&&(z=n.R8I),L===n.SHORT&&(z=n.R16I),L===n.INT&&(z=n.R32I)),v===n.RG&&(L===n.FLOAT&&(z=n.RG32F),L===n.HALF_FLOAT&&(z=n.RG16F),L===n.UNSIGNED_BYTE&&(z=n.RG8)),v===n.RG_INTEGER&&(L===n.UNSIGNED_BYTE&&(z=n.RG8UI),L===n.UNSIGNED_SHORT&&(z=n.RG16UI),L===n.UNSIGNED_INT&&(z=n.RG32UI),L===n.BYTE&&(z=n.RG8I),L===n.SHORT&&(z=n.RG16I),L===n.INT&&(z=n.RG32I)),v===n.RGB_INTEGER&&(L===n.UNSIGNED_BYTE&&(z=n.RGB8UI),L===n.UNSIGNED_SHORT&&(z=n.RGB16UI),L===n.UNSIGNED_INT&&(z=n.RGB32UI),L===n.BYTE&&(z=n.RGB8I),L===n.SHORT&&(z=n.RGB16I),L===n.INT&&(z=n.RGB32I)),v===n.RGBA_INTEGER&&(L===n.UNSIGNED_BYTE&&(z=n.RGBA8UI),L===n.UNSIGNED_SHORT&&(z=n.RGBA16UI),L===n.UNSIGNED_INT&&(z=n.RGBA32UI),L===n.BYTE&&(z=n.RGBA8I),L===n.SHORT&&(z=n.RGBA16I),L===n.INT&&(z=n.RGBA32I)),v===n.RGB&&(L===n.UNSIGNED_INT_5_9_9_9_REV&&(z=n.RGB9_E5),L===n.UNSIGNED_INT_10F_11F_11F_REV&&(z=n.R11F_G11F_B10F)),v===n.RGBA){let Se=J?Hc:dt.getTransfer(q);L===n.FLOAT&&(z=n.RGBA32F),L===n.HALF_FLOAT&&(z=n.RGBA16F),L===n.UNSIGNED_BYTE&&(z=Se===_t?n.SRGB8_ALPHA8:n.RGBA8),L===n.UNSIGNED_SHORT_4_4_4_4&&(z=n.RGBA4),L===n.UNSIGNED_SHORT_5_5_5_1&&(z=n.RGB5_A1)}return(z===n.R16F||z===n.R32F||z===n.RG16F||z===n.RG32F||z===n.RGBA16F||z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),z}function I(E,v){let L;return E?v===null||v===Qr||v===da?L=n.DEPTH24_STENCIL8:v===Vi?L=n.DEPTH32F_STENCIL8:v===ua&&(L=n.DEPTH24_STENCIL8,Ve("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Qr||v===da?L=n.DEPTH_COMPONENT24:v===Vi?L=n.DEPTH_COMPONENT32F:v===ua&&(L=n.DEPTH_COMPONENT16),L}function R(E,v){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==Nn&&E.minFilter!==Zn?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function T(E){let v=E.target;v.removeEventListener("dispose",T),U(v),v.isVideoTexture&&u.delete(v)}function D(E){let v=E.target;v.removeEventListener("dispose",D),x(v)}function U(E){let v=i.get(E);if(v.__webglInit===void 0)return;let L=E.source,q=f.get(L);if(q){let J=q[v.__cacheKey];J.usedTimes--,J.usedTimes===0&&b(E),Object.keys(q).length===0&&f.delete(L)}i.remove(E)}function b(E){let v=i.get(E);n.deleteTexture(v.__webglTexture);let L=E.source,q=f.get(L);delete q[v.__cacheKey],s.memory.textures--}function x(E){let v=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(v.__webglFramebuffer[q]))for(let J=0;J<v.__webglFramebuffer[q].length;J++)n.deleteFramebuffer(v.__webglFramebuffer[q][J]);else n.deleteFramebuffer(v.__webglFramebuffer[q]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[q])}else{if(Array.isArray(v.__webglFramebuffer))for(let q=0;q<v.__webglFramebuffer.length;q++)n.deleteFramebuffer(v.__webglFramebuffer[q]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let q=0;q<v.__webglColorRenderbuffer.length;q++)v.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[q]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let L=E.textures;for(let q=0,J=L.length;q<J;q++){let z=i.get(L[q]);z.__webglTexture&&(n.deleteTexture(z.__webglTexture),s.memory.textures--),i.remove(L[q])}i.remove(E)}let N=0;function H(){N=0}function G(){let E=N;return E>=r.maxTextures&&Ve("WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),N+=1,E}function Z(E){let v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function W(E,v){let L=i.get(E);if(E.isVideoTexture&&wt(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&L.__version!==E.version){let q=E.image;if(q===null)Ve("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Ve("WebGLRenderer: Texture marked for update but image is incomplete");else{$(L,E,v);return}}else E.isExternalTexture&&(L.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,L.__webglTexture,n.TEXTURE0+v)}function K(E,v){let L=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&L.__version!==E.version){$(L,E,v);return}else E.isExternalTexture&&(L.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,L.__webglTexture,n.TEXTURE0+v)}function te(E,v){let L=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&L.__version!==E.version){$(L,E,v);return}t.bindTexture(n.TEXTURE_3D,L.__webglTexture,n.TEXTURE0+v)}function j(E,v){let L=i.get(E);if(E.version>0&&L.__version!==E.version){Q(L,E,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+v)}let ae={[ff]:n.REPEAT,[Pi]:n.CLAMP_TO_EDGE,[hf]:n.MIRRORED_REPEAT},ue={[Nn]:n.NEAREST,[MT]:n.NEAREST_MIPMAP_NEAREST,[ol]:n.NEAREST_MIPMAP_LINEAR,[Zn]:n.LINEAR,[Hf]:n.LINEAR_MIPMAP_NEAREST,[Jr]:n.LINEAR_MIPMAP_LINEAR},Me={[IT]:n.NEVER,[OT]:n.ALWAYS,[AT]:n.LESS,[Cy]:n.LEQUAL,[RT]:n.EQUAL,[PT]:n.GEQUAL,[DT]:n.GREATER,[NT]:n.NOTEQUAL};function et(E,v){if(v.type===Vi&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Zn||v.magFilter===Hf||v.magFilter===ol||v.magFilter===Jr||v.minFilter===Zn||v.minFilter===Hf||v.minFilter===ol||v.minFilter===Jr)&&Ve("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,ae[v.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,ae[v.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,ae[v.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,ue[v.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,ue[v.minFilter]),v.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,Me[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Nn||v.minFilter!==ol&&v.minFilter!==Jr||v.type===Vi&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let L=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function ft(E,v){let L=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",T));let q=v.source,J=f.get(q);J===void 0&&(J={},f.set(q,J));let z=Z(v);if(z!==E.__cacheKey){J[z]===void 0&&(J[z]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,L=!0),J[z].usedTimes++;let Se=J[E.__cacheKey];Se!==void 0&&(J[E.__cacheKey].usedTimes--,Se.usedTimes===0&&b(v)),E.__cacheKey=z,E.__webglTexture=J[z].texture}return L}function yt(E,v,L){return Math.floor(Math.floor(E/L)/v)}function bt(E,v,L,q){let z=E.updateRanges;if(z.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,L,q,v.data);else{z.sort((ee,ce)=>ee.start-ce.start);let Se=0;for(let ee=1;ee<z.length;ee++){let ce=z[Se],De=z[ee],C=ce.start+ce.count,F=yt(De.start,v.width,4),ne=yt(ce.start,v.width,4);De.start<=C+1&&F===ne&&yt(De.start+De.count-1,v.width,4)===F?ce.count=Math.max(ce.count,De.start+De.count-ce.start):(++Se,z[Se]=De)}z.length=Se+1;let de=n.getParameter(n.UNPACK_ROW_LENGTH),Ce=n.getParameter(n.UNPACK_SKIP_PIXELS),be=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let ee=0,ce=z.length;ee<ce;ee++){let De=z[ee],C=Math.floor(De.start/4),F=Math.ceil(De.count/4),ne=C%v.width,M=Math.floor(C/v.width),ie=F,oe=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,ne),n.pixelStorei(n.UNPACK_SKIP_ROWS,M),t.texSubImage2D(n.TEXTURE_2D,0,ne,M,ie,oe,L,q,v.data)}E.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,de),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ce),n.pixelStorei(n.UNPACK_SKIP_ROWS,be)}}function $(E,v,L){let q=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(q=n.TEXTURE_3D);let J=ft(E,v),z=v.source;t.bindTexture(q,E.__webglTexture,n.TEXTURE0+L);let Se=i.get(z);if(z.version!==Se.__version||J===!0){t.activeTexture(n.TEXTURE0+L);let de=dt.getPrimaries(dt.workingColorSpace),Ce=v.colorSpace===hr?null:dt.getPrimaries(v.colorSpace),be=v.colorSpace===hr||de===Ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let ee=y(v.image,!1,r.maxTextureSize);ee=we(v,ee);let ce=o.convert(v.format,v.colorSpace),De=o.convert(v.type),C=S(v.internalFormat,ce,De,v.colorSpace,v.isVideoTexture);et(q,v);let F,ne=v.mipmaps,M=v.isVideoTexture!==!0,ie=Se.__version===void 0||J===!0,oe=z.dataReady,se=R(v,ee);if(v.isDepthTexture)C=I(v.format===fa,v.type),ie&&(M?t.texStorage2D(n.TEXTURE_2D,1,C,ee.width,ee.height):t.texImage2D(n.TEXTURE_2D,0,C,ee.width,ee.height,0,ce,De,null));else if(v.isDataTexture)if(ne.length>0){M&&ie&&t.texStorage2D(n.TEXTURE_2D,se,C,ne[0].width,ne[0].height);for(let re=0,X=ne.length;re<X;re++)F=ne[re],M?oe&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,F.width,F.height,ce,De,F.data):t.texImage2D(n.TEXTURE_2D,re,C,F.width,F.height,0,ce,De,F.data);v.generateMipmaps=!1}else M?(ie&&t.texStorage2D(n.TEXTURE_2D,se,C,ee.width,ee.height),oe&&bt(v,ee,ce,De)):t.texImage2D(n.TEXTURE_2D,0,C,ee.width,ee.height,0,ce,De,ee.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){M&&ie&&t.texStorage3D(n.TEXTURE_2D_ARRAY,se,C,ne[0].width,ne[0].height,ee.depth);for(let re=0,X=ne.length;re<X;re++)if(F=ne[re],v.format!==di)if(ce!==null)if(M){if(oe)if(v.layerUpdates.size>0){let he=Oy(F.width,F.height,v.format,v.type);for(let Ie of v.layerUpdates){let pt=F.data.subarray(Ie*he/F.data.BYTES_PER_ELEMENT,(Ie+1)*he/F.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,Ie,F.width,F.height,1,ce,pt)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,F.width,F.height,ee.depth,ce,F.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,re,C,F.width,F.height,ee.depth,0,F.data,0,0);else Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else M?oe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,F.width,F.height,ee.depth,ce,De,F.data):t.texImage3D(n.TEXTURE_2D_ARRAY,re,C,F.width,F.height,ee.depth,0,ce,De,F.data)}else{M&&ie&&t.texStorage2D(n.TEXTURE_2D,se,C,ne[0].width,ne[0].height);for(let re=0,X=ne.length;re<X;re++)F=ne[re],v.format!==di?ce!==null?M?oe&&t.compressedTexSubImage2D(n.TEXTURE_2D,re,0,0,F.width,F.height,ce,F.data):t.compressedTexImage2D(n.TEXTURE_2D,re,C,F.width,F.height,0,F.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):M?oe&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,F.width,F.height,ce,De,F.data):t.texImage2D(n.TEXTURE_2D,re,C,F.width,F.height,0,ce,De,F.data)}else if(v.isDataArrayTexture)if(M){if(ie&&t.texStorage3D(n.TEXTURE_2D_ARRAY,se,C,ee.width,ee.height,ee.depth),oe)if(v.layerUpdates.size>0){let re=Oy(ee.width,ee.height,v.format,v.type);for(let X of v.layerUpdates){let he=ee.data.subarray(X*re/ee.data.BYTES_PER_ELEMENT,(X+1)*re/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,X,ee.width,ee.height,1,ce,De,he)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ce,De,ee.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,C,ee.width,ee.height,ee.depth,0,ce,De,ee.data);else if(v.isData3DTexture)M?(ie&&t.texStorage3D(n.TEXTURE_3D,se,C,ee.width,ee.height,ee.depth),oe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ce,De,ee.data)):t.texImage3D(n.TEXTURE_3D,0,C,ee.width,ee.height,ee.depth,0,ce,De,ee.data);else if(v.isFramebufferTexture){if(ie)if(M)t.texStorage2D(n.TEXTURE_2D,se,C,ee.width,ee.height);else{let re=ee.width,X=ee.height;for(let he=0;he<se;he++)t.texImage2D(n.TEXTURE_2D,he,C,re,X,0,ce,De,null),re>>=1,X>>=1}}else if(ne.length>0){if(M&&ie){let re=Be(ne[0]);t.texStorage2D(n.TEXTURE_2D,se,C,re.width,re.height)}for(let re=0,X=ne.length;re<X;re++)F=ne[re],M?oe&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,ce,De,F):t.texImage2D(n.TEXTURE_2D,re,C,ce,De,F);v.generateMipmaps=!1}else if(M){if(ie){let re=Be(ee);t.texStorage2D(n.TEXTURE_2D,se,C,re.width,re.height)}oe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ce,De,ee)}else t.texImage2D(n.TEXTURE_2D,0,C,ce,De,ee);m(v)&&p(q),Se.__version=z.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function Q(E,v,L){if(v.image.length!==6)return;let q=ft(E,v),J=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+L);let z=i.get(J);if(J.version!==z.__version||q===!0){t.activeTexture(n.TEXTURE0+L);let Se=dt.getPrimaries(dt.workingColorSpace),de=v.colorSpace===hr?null:dt.getPrimaries(v.colorSpace),Ce=v.colorSpace===hr||Se===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let be=v.isCompressedTexture||v.image[0].isCompressedTexture,ee=v.image[0]&&v.image[0].isDataTexture,ce=[];for(let X=0;X<6;X++)!be&&!ee?ce[X]=y(v.image[X],!0,r.maxCubemapSize):ce[X]=ee?v.image[X].image:v.image[X],ce[X]=we(v,ce[X]);let De=ce[0],C=o.convert(v.format,v.colorSpace),F=o.convert(v.type),ne=S(v.internalFormat,C,F,v.colorSpace),M=v.isVideoTexture!==!0,ie=z.__version===void 0||q===!0,oe=J.dataReady,se=R(v,De);et(n.TEXTURE_CUBE_MAP,v);let re;if(be){M&&ie&&t.texStorage2D(n.TEXTURE_CUBE_MAP,se,ne,De.width,De.height);for(let X=0;X<6;X++){re=ce[X].mipmaps;for(let he=0;he<re.length;he++){let Ie=re[he];v.format!==di?C!==null?M?oe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,he,0,0,Ie.width,Ie.height,C,Ie.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,he,ne,Ie.width,Ie.height,0,Ie.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):M?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,he,0,0,Ie.width,Ie.height,C,F,Ie.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,he,ne,Ie.width,Ie.height,0,C,F,Ie.data)}}}else{if(re=v.mipmaps,M&&ie){re.length>0&&se++;let X=Be(ce[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,se,ne,X.width,X.height)}for(let X=0;X<6;X++)if(ee){M?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,ce[X].width,ce[X].height,C,F,ce[X].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,ne,ce[X].width,ce[X].height,0,C,F,ce[X].data);for(let he=0;he<re.length;he++){let pt=re[he].image[X].image;M?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,he+1,0,0,pt.width,pt.height,C,F,pt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,he+1,ne,pt.width,pt.height,0,C,F,pt.data)}}else{M?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,C,F,ce[X]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,ne,C,F,ce[X]);for(let he=0;he<re.length;he++){let Ie=re[he];M?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,he+1,0,0,C,F,Ie.image[X]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,he+1,ne,C,F,Ie.image[X])}}}m(v)&&p(n.TEXTURE_CUBE_MAP),z.__version=J.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function ge(E,v,L,q,J,z){let Se=o.convert(L.format,L.colorSpace),de=o.convert(L.type),Ce=S(L.internalFormat,Se,de,L.colorSpace),be=i.get(v),ee=i.get(L);if(ee.__renderTarget=v,!be.__hasExternalTextures){let ce=Math.max(1,v.width>>z),De=Math.max(1,v.height>>z);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?t.texImage3D(J,z,Ce,ce,De,v.depth,0,Se,de,null):t.texImage2D(J,z,Ce,ce,De,0,Se,de,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),ye(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,J,ee.__webglTexture,0,xt(v)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,J,ee.__webglTexture,z),t.bindFramebuffer(n.FRAMEBUFFER,null)}function He(E,v,L){if(n.bindRenderbuffer(n.RENDERBUFFER,E),v.depthBuffer){let q=v.depthTexture,J=q&&q.isDepthTexture?q.type:null,z=I(v.stencilBuffer,J),Se=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=xt(v);ye(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,de,z,v.width,v.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,de,z,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,z,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Se,n.RENDERBUFFER,E)}else{let q=v.textures;for(let J=0;J<q.length;J++){let z=q[J],Se=o.convert(z.format,z.colorSpace),de=o.convert(z.type),Ce=S(z.internalFormat,Se,de,z.colorSpace),be=xt(v);L&&ye(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,be,Ce,v.width,v.height):ye(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,be,Ce,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,Ce,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Te(E,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let q=i.get(v.depthTexture);q.__renderTarget=v,(!q.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),W(v.depthTexture,0);let J=q.__webglTexture,z=xt(v);if(v.depthTexture.format===ea)ye(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0,z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0);else if(v.depthTexture.format===fa)ye(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0,z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Je(E){let v=i.get(E),L=E.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==E.depthTexture){let q=E.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),q){let J=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,q.removeEventListener("dispose",J)};q.addEventListener("dispose",J),v.__depthDisposeCallback=J}v.__boundDepthTexture=q}if(E.depthTexture&&!v.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");let q=E.texture.mipmaps;q&&q.length>0?Te(v.__webglFramebuffer[0],E):Te(v.__webglFramebuffer,E)}else if(L){v.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[q]),v.__webglDepthbuffer[q]===void 0)v.__webglDepthbuffer[q]=n.createRenderbuffer(),He(v.__webglDepthbuffer[q],E,!1);else{let J=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,z=v.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,z),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,z)}}else{let q=E.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),He(v.__webglDepthbuffer,E,!1);else{let J=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,z=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,z),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,z)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Bt(E,v,L){let q=i.get(E);v!==void 0&&ge(q.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),L!==void 0&&Je(E)}function qe(E){let v=E.texture,L=i.get(E),q=i.get(v);E.addEventListener("dispose",D);let J=E.textures,z=E.isWebGLCubeRenderTarget===!0,Se=J.length>1;if(Se||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=v.version,s.memory.textures++),z){L.__webglFramebuffer=[];for(let de=0;de<6;de++)if(v.mipmaps&&v.mipmaps.length>0){L.__webglFramebuffer[de]=[];for(let Ce=0;Ce<v.mipmaps.length;Ce++)L.__webglFramebuffer[de][Ce]=n.createFramebuffer()}else L.__webglFramebuffer[de]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){L.__webglFramebuffer=[];for(let de=0;de<v.mipmaps.length;de++)L.__webglFramebuffer[de]=n.createFramebuffer()}else L.__webglFramebuffer=n.createFramebuffer();if(Se)for(let de=0,Ce=J.length;de<Ce;de++){let be=i.get(J[de]);be.__webglTexture===void 0&&(be.__webglTexture=n.createTexture(),s.memory.textures++)}if(E.samples>0&&ye(E)===!1){L.__webglMultisampledFramebuffer=n.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let de=0;de<J.length;de++){let Ce=J[de];L.__webglColorRenderbuffer[de]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,L.__webglColorRenderbuffer[de]);let be=o.convert(Ce.format,Ce.colorSpace),ee=o.convert(Ce.type),ce=S(Ce.internalFormat,be,ee,Ce.colorSpace,E.isXRRenderTarget===!0),De=xt(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,De,ce,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,L.__webglColorRenderbuffer[de])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(L.__webglDepthRenderbuffer=n.createRenderbuffer(),He(L.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(z){t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),et(n.TEXTURE_CUBE_MAP,v);for(let de=0;de<6;de++)if(v.mipmaps&&v.mipmaps.length>0)for(let Ce=0;Ce<v.mipmaps.length;Ce++)ge(L.__webglFramebuffer[de][Ce],E,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ce);else ge(L.__webglFramebuffer[de],E,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);m(v)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let de=0,Ce=J.length;de<Ce;de++){let be=J[de],ee=i.get(be),ce=n.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ce=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ce,ee.__webglTexture),et(ce,be),ge(L.__webglFramebuffer,E,be,n.COLOR_ATTACHMENT0+de,ce,0),m(be)&&p(ce)}t.unbindTexture()}else{let de=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(de=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(de,q.__webglTexture),et(de,v),v.mipmaps&&v.mipmaps.length>0)for(let Ce=0;Ce<v.mipmaps.length;Ce++)ge(L.__webglFramebuffer[Ce],E,v,n.COLOR_ATTACHMENT0,de,Ce);else ge(L.__webglFramebuffer,E,v,n.COLOR_ATTACHMENT0,de,0);m(v)&&p(de),t.unbindTexture()}E.depthBuffer&&Je(E)}function St(E){let v=E.textures;for(let L=0,q=v.length;L<q;L++){let J=v[L];if(m(J)){let z=w(E),Se=i.get(J).__webglTexture;t.bindTexture(z,Se),p(z),t.unbindTexture()}}}let A=[],Qe=[];function Ze(E){if(E.samples>0){if(ye(E)===!1){let v=E.textures,L=E.width,q=E.height,J=n.COLOR_BUFFER_BIT,z=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Se=i.get(E),de=v.length>1;if(de)for(let be=0;be<v.length;be++)t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer);let Ce=E.texture.mipmaps;Ce&&Ce.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let be=0;be<v.length;be++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),de){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Se.__webglColorRenderbuffer[be]);let ee=i.get(v[be]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ee,0)}n.blitFramebuffer(0,0,L,q,0,0,L,q,J,n.NEAREST),c===!0&&(A.length=0,Qe.length=0,A.push(n.COLOR_ATTACHMENT0+be),E.depthBuffer&&E.resolveDepthBuffer===!1&&(A.push(z),Qe.push(z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Qe)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,A))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),de)for(let be=0;be<v.length;be++){t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,Se.__webglColorRenderbuffer[be]);let ee=i.get(v[be]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.TEXTURE_2D,ee,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){let v=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function xt(E){return Math.min(r.maxSamples,E.samples)}function ye(E){let v=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function wt(E){let v=s.render.frame;u.get(E)!==v&&(u.set(E,v),E.update())}function we(E,v){let L=E.colorSpace,q=E.format,J=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||L!==Uo&&L!==hr&&(dt.getTransfer(L)===_t?(q!==di||J!==Si)&&Ve("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):tt("WebGLTextures: Unsupported texture color space:",L)),v}function Be(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=G,this.resetTextureUnits=H,this.setTexture2D=W,this.setTexture2DArray=K,this.setTexture3D=te,this.setTextureCube=j,this.rebindTextures=Bt,this.setupRenderTarget=qe,this.updateRenderTargetMipmap=St,this.updateMultisampleRenderTarget=Ze,this.setupDepthRenderbuffer=Je,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=ye}function Mk(n,e){function t(i,r=hr){let o,s=dt.getTransfer(r);if(i===Si)return n.UNSIGNED_BYTE;if(i===Gf)return n.UNSIGNED_SHORT_4_4_4_4;if(i===jf)return n.UNSIGNED_SHORT_5_5_5_1;if(i===by)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ey)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===xy)return n.BYTE;if(i===_y)return n.SHORT;if(i===ua)return n.UNSIGNED_SHORT;if(i===zf)return n.INT;if(i===Qr)return n.UNSIGNED_INT;if(i===Vi)return n.FLOAT;if(i===Go)return n.HALF_FLOAT;if(i===Sy)return n.ALPHA;if(i===My)return n.RGB;if(i===di)return n.RGBA;if(i===ea)return n.DEPTH_COMPONENT;if(i===fa)return n.DEPTH_STENCIL;if(i===Ty)return n.RED;if(i===Wf)return n.RED_INTEGER;if(i===$f)return n.RG;if(i===qf)return n.RG_INTEGER;if(i===Xf)return n.RGBA_INTEGER;if(i===sl||i===al||i===cl||i===ll)if(s===_t)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===sl)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===al)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===cl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ll)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===sl)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===al)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===cl)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ll)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Yf||i===Zf||i===Kf||i===Jf)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===Yf)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Zf)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Kf)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Jf)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Qf||i===eh||i===th)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===Qf||i===eh)return s===_t?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===th)return s===_t?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===nh||i===ih||i===rh||i===oh||i===sh||i===ah||i===ch||i===lh||i===uh||i===dh||i===fh||i===hh||i===ph||i===mh)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===nh)return s===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ih)return s===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===rh)return s===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===oh)return s===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===sh)return s===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ah)return s===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ch)return s===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===lh)return s===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===uh)return s===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===dh)return s===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===fh)return s===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===hh)return s===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ph)return s===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===mh)return s===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===gh||i===vh||i===yh)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===gh)return s===_t?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===vh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===yh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===xh||i===_h||i===bh||i===Eh)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===xh)return o.COMPRESSED_RED_RGTC1_EXT;if(i===_h)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===bh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Eh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===da?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var Tk=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wk=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,$y=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Qc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new ui({vertexShader:Tk,fragmentShader:wk,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Pn(new Bo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},qy=class extends lr{constructor(e,t){super();let i=this,r=null,o=1,s=null,a="local-floor",c=1,l=null,u=null,d=null,f=null,h=null,g=null,y=typeof XRWebGLBinding<"u",m=new $y,p={},w=t.getContextAttributes(),S=null,I=null,R=[],T=[],D=new ze,U=null,b=new jt;b.viewport=new Dt;let x=new jt;x.viewport=new Dt;let N=[b,x],H=new Df,G=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let Q=R[$];return Q===void 0&&(Q=new sa,R[$]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function($){let Q=R[$];return Q===void 0&&(Q=new sa,R[$]=Q),Q.getGripSpace()},this.getHand=function($){let Q=R[$];return Q===void 0&&(Q=new sa,R[$]=Q),Q.getHandSpace()};function W($){let Q=T.indexOf($.inputSource);if(Q===-1)return;let ge=R[Q];ge!==void 0&&(ge.update($.inputSource,$.frame,l||s),ge.dispatchEvent({type:$.type,data:$.inputSource}))}function K(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",te);for(let $=0;$<R.length;$++){let Q=T[$];Q!==null&&(T[$]=null,R[$].disconnect(Q))}G=null,Z=null,m.reset();for(let $ in p)delete p[$];e.setRenderTarget(S),h=null,f=null,d=null,r=null,I=null,bt.stop(),i.isPresenting=!1,e.setPixelRatio(U),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){o=$,i.isPresenting===!0&&Ve("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&Ve("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(S=e.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",K),r.addEventListener("inputsourceschange",te),w.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(D),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,He=null,Te=null;w.depth&&(Te=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=w.stencil?fa:ea,He=w.stencil?da:Qr);let Je={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:o};d=this.getBinding(),f=d.createProjectionLayer(Je),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),I=new Li(f.textureWidth,f.textureHeight,{format:di,type:Si,depthTexture:new Jc(f.textureWidth,f.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let ge={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:o};h=new XRWebGLLayer(r,t,ge),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),I=new Li(h.framebufferWidth,h.framebufferHeight,{format:di,type:Si,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(c),l=null,s=await r.requestReferenceSpace(a),bt.setContext(r),bt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function te($){for(let Q=0;Q<$.removed.length;Q++){let ge=$.removed[Q],He=T.indexOf(ge);He>=0&&(T[He]=null,R[He].disconnect(ge))}for(let Q=0;Q<$.added.length;Q++){let ge=$.added[Q],He=T.indexOf(ge);if(He===-1){for(let Je=0;Je<R.length;Je++)if(Je>=T.length){T.push(ge),He=Je;break}else if(T[Je]===null){T[Je]=ge,He=Je;break}if(He===-1)break}let Te=R[He];Te&&Te.connect(ge)}}let j=new k,ae=new k;function ue($,Q,ge){j.setFromMatrixPosition(Q.matrixWorld),ae.setFromMatrixPosition(ge.matrixWorld);let He=j.distanceTo(ae),Te=Q.projectionMatrix.elements,Je=ge.projectionMatrix.elements,Bt=Te[14]/(Te[10]-1),qe=Te[14]/(Te[10]+1),St=(Te[9]+1)/Te[5],A=(Te[9]-1)/Te[5],Qe=(Te[8]-1)/Te[0],Ze=(Je[8]+1)/Je[0],xt=Bt*Qe,ye=Bt*Ze,wt=He/(-Qe+Ze),we=wt*-Qe;if(Q.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(we),$.translateZ(wt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Te[10]===-1)$.projectionMatrix.copy(Q.projectionMatrix),$.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let Be=Bt+wt,E=qe+wt,v=xt-we,L=ye+(He-we),q=St*qe/E*Be,J=A*qe/E*Be;$.projectionMatrix.makePerspective(v,L,q,J,Be,E),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function Me($,Q){Q===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(Q.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let Q=$.near,ge=$.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(ge=m.depthFar)),H.near=x.near=b.near=Q,H.far=x.far=b.far=ge,(G!==H.near||Z!==H.far)&&(r.updateRenderState({depthNear:H.near,depthFar:H.far}),G=H.near,Z=H.far),H.layers.mask=$.layers.mask|6,b.layers.mask=H.layers.mask&3,x.layers.mask=H.layers.mask&5;let He=$.parent,Te=H.cameras;Me(H,He);for(let Je=0;Je<Te.length;Je++)Me(Te[Je],He);Te.length===2?ue(H,b,x):H.projectionMatrix.copy(b.projectionMatrix),et($,H,He)};function et($,Q,ge){ge===null?$.matrix.copy(Q.matrixWorld):($.matrix.copy(ge.matrixWorld),$.matrix.invert(),$.matrix.multiply(Q.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(Q.projectionMatrix),$.projectionMatrixInverse.copy(Q.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=mf*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(f===null&&h===null))return c},this.setFoveation=function($){c=$,f!==null&&(f.fixedFoveation=$),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(H)},this.getCameraTexture=function($){return p[$]};let ft=null;function yt($,Q){if(u=Q.getViewerPose(l||s),g=Q,u!==null){let ge=u.views;h!==null&&(e.setRenderTargetFramebuffer(I,h.framebuffer),e.setRenderTarget(I));let He=!1;ge.length!==H.cameras.length&&(H.cameras.length=0,He=!0);for(let qe=0;qe<ge.length;qe++){let St=ge[qe],A=null;if(h!==null)A=h.getViewport(St);else{let Ze=d.getViewSubImage(f,St);A=Ze.viewport,qe===0&&(e.setRenderTargetTextures(I,Ze.colorTexture,Ze.depthStencilTexture),e.setRenderTarget(I))}let Qe=N[qe];Qe===void 0&&(Qe=new jt,Qe.layers.enable(qe),Qe.viewport=new Dt,N[qe]=Qe),Qe.matrix.fromArray(St.transform.matrix),Qe.matrix.decompose(Qe.position,Qe.quaternion,Qe.scale),Qe.projectionMatrix.fromArray(St.projectionMatrix),Qe.projectionMatrixInverse.copy(Qe.projectionMatrix).invert(),Qe.viewport.set(A.x,A.y,A.width,A.height),qe===0&&(H.matrix.copy(Qe.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),He===!0&&H.cameras.push(Qe)}let Te=r.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){d=i.getBinding();let qe=d.getDepthInformation(ge[0]);qe&&qe.isValid&&qe.texture&&m.init(qe,r.renderState)}if(Te&&Te.includes("camera-access")&&y){e.state.unbindTexture(),d=i.getBinding();for(let qe=0;qe<ge.length;qe++){let St=ge[qe].camera;if(St){let A=p[St];A||(A=new Qc,p[St]=A);let Qe=d.getCameraImage(St);A.sourceTexture=Qe}}}}for(let ge=0;ge<R.length;ge++){let He=T[ge],Te=R[ge];He!==null&&Te!==void 0&&Te.update(He,Q,l||s)}ft&&ft($,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),g=null}let bt=new aw;bt.setAnimationLoop(yt),this.setAnimationLoop=function($){ft=$},this.dispose=function(){}}},$o=new Wr,Ck=new Ut;function Ik(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Dy(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,w,S,I){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(m,p):p.isMeshToonMaterial?(o(m,p),d(m,p)):p.isMeshPhongMaterial?(o(m,p),u(m,p)):p.isMeshStandardMaterial?(o(m,p),f(m,p),p.isMeshPhysicalMaterial&&h(m,p,I)):p.isMeshMatcapMaterial?(o(m,p),g(m,p)):p.isMeshDepthMaterial?o(m,p):p.isMeshDistanceMaterial?(o(m,p),y(m,p)):p.isMeshNormalMaterial?o(m,p):p.isLineBasicMaterial?(s(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,w,S):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===xn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===xn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let w=e.get(p),S=w.envMap,I=w.envMapRotation;S&&(m.envMap.value=S,$o.copy(I),$o.x*=-1,$o.y*=-1,$o.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&($o.y*=-1,$o.z*=-1),m.envMapRotation.value.setFromMatrix4(Ck.makeRotationFromEuler($o)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function s(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,w,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=S*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===xn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let w=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Ak(n,e,t,i){let r={},o={},s=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,S){let I=S.program;i.uniformBlockBinding(w,I)}function l(w,S){let I=r[w.id];I===void 0&&(g(w),I=u(w),r[w.id]=I,w.addEventListener("dispose",m));let R=S.program;i.updateUBOMapping(w,R);let T=e.render.frame;o[w.id]!==T&&(f(w),o[w.id]=T)}function u(w){let S=d();w.__bindingPointIndex=S;let I=n.createBuffer(),R=w.__size,T=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,I),n.bufferData(n.UNIFORM_BUFFER,R,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,I),I}function d(){for(let w=0;w<a;w++)if(s.indexOf(w)===-1)return s.push(w),w;return tt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){let S=r[w.id],I=w.uniforms,R=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let T=0,D=I.length;T<D;T++){let U=Array.isArray(I[T])?I[T]:[I[T]];for(let b=0,x=U.length;b<x;b++){let N=U[b];if(h(N,T,b,R)===!0){let H=N.__offset,G=Array.isArray(N.value)?N.value:[N.value],Z=0;for(let W=0;W<G.length;W++){let K=G[W],te=y(K);typeof K=="number"||typeof K=="boolean"?(N.__data[0]=K,n.bufferSubData(n.UNIFORM_BUFFER,H+Z,N.__data)):K.isMatrix3?(N.__data[0]=K.elements[0],N.__data[1]=K.elements[1],N.__data[2]=K.elements[2],N.__data[3]=0,N.__data[4]=K.elements[3],N.__data[5]=K.elements[4],N.__data[6]=K.elements[5],N.__data[7]=0,N.__data[8]=K.elements[6],N.__data[9]=K.elements[7],N.__data[10]=K.elements[8],N.__data[11]=0):(K.toArray(N.__data,Z),Z+=te.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,H,N.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(w,S,I,R){let T=w.value,D=S+"_"+I;if(R[D]===void 0)return typeof T=="number"||typeof T=="boolean"?R[D]=T:R[D]=T.clone(),!0;{let U=R[D];if(typeof T=="number"||typeof T=="boolean"){if(U!==T)return R[D]=T,!0}else if(U.equals(T)===!1)return U.copy(T),!0}return!1}function g(w){let S=w.uniforms,I=0,R=16;for(let D=0,U=S.length;D<U;D++){let b=Array.isArray(S[D])?S[D]:[S[D]];for(let x=0,N=b.length;x<N;x++){let H=b[x],G=Array.isArray(H.value)?H.value:[H.value];for(let Z=0,W=G.length;Z<W;Z++){let K=G[Z],te=y(K),j=I%R,ae=j%te.boundary,ue=j+ae;I+=ae,ue!==0&&R-ue<te.storage&&(I+=R-ue),H.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=I,I+=te.storage}}}let T=I%R;return T>0&&(I+=R-T),w.__size=I,w.__cache={},this}function y(w){let S={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(S.boundary=4,S.storage=4):w.isVector2?(S.boundary=8,S.storage=8):w.isVector3||w.isColor?(S.boundary=16,S.storage=12):w.isVector4?(S.boundary=16,S.storage=16):w.isMatrix3?(S.boundary=48,S.storage=48):w.isMatrix4?(S.boundary=64,S.storage=64):w.isTexture?Ve("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ve("WebGLRenderer: Unsupported uniform value type.",w),S}function m(w){let S=w.target;S.removeEventListener("dispose",m);let I=s.indexOf(S.__bindingPointIndex);s.splice(I,1),n.deleteBuffer(r[S.id]),delete r[S.id],delete o[S.id]}function p(){for(let w in r)n.deleteBuffer(r[w]);s=[],r={},o={}}return{bind:c,update:l,dispose:p}}var Rk=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]),mr=null;function Dk(){return mr===null&&(mr=new bf(Rk,32,32,$f,Go),mr.minFilter=Zn,mr.magFilter=Zn,mr.wrapS=Pi,mr.wrapT=Pi,mr.generateMipmaps=!1,mr.needsUpdate=!0),mr}var wh=class{constructor(e={}){let{canvas:t=LT(),context:i=null,depth:r=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=s;let g=new Set([Xf,qf,Wf]),y=new Set([Si,Qr,ua,da,Gf,jf]),m=new Uint32Array(4),p=new Int32Array(4),w=null,S=null,I=[],R=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,D=!1;this._outputColorSpace=Xn;let U=0,b=0,x=null,N=-1,H=null,G=new Dt,Z=new Dt,W=null,K=new it(0),te=0,j=t.width,ae=t.height,ue=1,Me=null,et=null,ft=new Dt(0,0,j,ae),yt=new Dt(0,0,j,ae),bt=!1,$=new aa,Q=!1,ge=!1,He=new Ut,Te=new k,Je=new Dt,Bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},qe=!1;function St(){return x===null?ue:1}let A=i;function Qe(_,P){return t.getContext(_,P)}try{let _={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"181"}`),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",X,!1),t.addEventListener("webglcontextcreationerror",he,!1),A===null){let P="webgl2";if(A=Qe(P,_),A===null)throw Qe(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(_){throw _("WebGLRenderer: "+_.message),_}let Ze,xt,ye,wt,we,Be,E,v,L,q,J,z,Se,de,Ce,be,ee,ce,De,C,F,ne,M,ie;function oe(){Ze=new q2(A),Ze.init(),ne=new Mk(A,Ze),xt=new U2(A,Ze,e,ne),ye=new Ek(A,Ze),xt.reversedDepthBuffer&&f&&ye.buffers.depth.setReversed(!0),wt=new Z2(A),we=new lk,Be=new Sk(A,Ze,ye,we,xt,ne,wt),E=new V2(T),v=new $2(T),L=new eL(A),M=new F2(A,L),q=new X2(A,L,wt,M),J=new J2(A,q,L,wt),De=new K2(A,xt,Be),be=new B2(we),z=new ck(T,E,v,Ze,xt,M,be),Se=new Ik(T,we),de=new dk,Ce=new vk(Ze),ce=new L2(T,E,v,ye,J,h,c),ee=new _k(T,J,xt),ie=new Ak(A,wt,xt,ye),C=new k2(A,Ze,wt),F=new Y2(A,Ze,wt),wt.programs=z.programs,T.capabilities=xt,T.extensions=Ze,T.properties=we,T.renderLists=de,T.shadowMap=ee,T.state=ye,T.info=wt}oe();let se=new qy(T,A);this.xr=se,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){let _=Ze.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){let _=Ze.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return ue},this.setPixelRatio=function(_){_!==void 0&&(ue=_,this.setSize(j,ae,!1))},this.getSize=function(_){return _.set(j,ae)},this.setSize=function(_,P,B=!0){if(se.isPresenting){Ve("WebGLRenderer: Can't change size while VR device is presenting.");return}j=_,ae=P,t.width=Math.floor(_*ue),t.height=Math.floor(P*ue),B===!0&&(t.style.width=_+"px",t.style.height=P+"px"),this.setViewport(0,0,_,P)},this.getDrawingBufferSize=function(_){return _.set(j*ue,ae*ue).floor()},this.setDrawingBufferSize=function(_,P,B){j=_,ae=P,ue=B,t.width=Math.floor(_*B),t.height=Math.floor(P*B),this.setViewport(0,0,_,P)},this.getCurrentViewport=function(_){return _.copy(G)},this.getViewport=function(_){return _.copy(ft)},this.setViewport=function(_,P,B,V){_.isVector4?ft.set(_.x,_.y,_.z,_.w):ft.set(_,P,B,V),ye.viewport(G.copy(ft).multiplyScalar(ue).round())},this.getScissor=function(_){return _.copy(yt)},this.setScissor=function(_,P,B,V){_.isVector4?yt.set(_.x,_.y,_.z,_.w):yt.set(_,P,B,V),ye.scissor(Z.copy(yt).multiplyScalar(ue).round())},this.getScissorTest=function(){return bt},this.setScissorTest=function(_){ye.setScissorTest(bt=_)},this.setOpaqueSort=function(_){Me=_},this.setTransparentSort=function(_){et=_},this.getClearColor=function(_){return _.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor(...arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha(...arguments)},this.clear=function(_=!0,P=!0,B=!0){let V=0;if(_){let O=!1;if(x!==null){let le=x.texture.format;O=g.has(le)}if(O){let le=x.texture.type,pe=y.has(le),xe=ce.getClearColor(),ve=ce.getClearAlpha(),Fe=xe.r,ke=xe.g,Re=xe.b;pe?(m[0]=Fe,m[1]=ke,m[2]=Re,m[3]=ve,A.clearBufferuiv(A.COLOR,0,m)):(p[0]=Fe,p[1]=ke,p[2]=Re,p[3]=ve,A.clearBufferiv(A.COLOR,0,p))}else V|=A.COLOR_BUFFER_BIT}P&&(V|=A.DEPTH_BUFFER_BIT),B&&(V|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",X,!1),t.removeEventListener("webglcontextcreationerror",he,!1),ce.dispose(),de.dispose(),Ce.dispose(),we.dispose(),E.dispose(),v.dispose(),J.dispose(),M.dispose(),ie.dispose(),z.dispose(),se.dispose(),se.removeEventListener("sessionstart",Xy),se.removeEventListener("sessionend",Yy),to.stop()};function re(_){_.preventDefault(),Ry("WebGLRenderer: Context Lost."),D=!0}function X(){Ry("WebGLRenderer: Context Restored."),D=!1;let _=wt.autoReset,P=ee.enabled,B=ee.autoUpdate,V=ee.needsUpdate,O=ee.type;oe(),wt.autoReset=_,ee.enabled=P,ee.autoUpdate=B,ee.needsUpdate=V,ee.type=O}function he(_){tt("WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function Ie(_){let P=_.target;P.removeEventListener("dispose",Ie),pt(P)}function pt(_){ot(_),we.remove(_)}function ot(_){let P=we.get(_).programs;P!==void 0&&(P.forEach(function(B){z.releaseProgram(B)}),_.isShaderMaterial&&z.releaseShaderCache(_))}this.renderBufferDirect=function(_,P,B,V,O,le){P===null&&(P=Bt);let pe=O.isMesh&&O.matrixWorld.determinant()<0,xe=mw(_,P,B,V,O);ye.setMaterial(V,pe);let ve=B.index,Fe=1;if(V.wireframe===!0){if(ve=q.getWireframeAttribute(B),ve===void 0)return;Fe=2}let ke=B.drawRange,Re=B.attributes.position,rt=ke.start*Fe,Et=(ke.start+ke.count)*Fe;le!==null&&(rt=Math.max(rt,le.start*Fe),Et=Math.min(Et,(le.start+le.count)*Fe)),ve!==null?(rt=Math.max(rt,0),Et=Math.min(Et,ve.count)):Re!=null&&(rt=Math.max(rt,0),Et=Math.min(Et,Re.count));let Nt=Et-rt;if(Nt<0||Nt===1/0)return;M.setup(O,V,xe,B,ve);let Pt,Mt=C;if(ve!==null&&(Pt=L.get(ve),Mt=F,Mt.setIndex(Pt)),O.isMesh)V.wireframe===!0?(ye.setLineWidth(V.wireframeLinewidth*St()),Mt.setMode(A.LINES)):Mt.setMode(A.TRIANGLES);else if(O.isLine){let Oe=V.linewidth;Oe===void 0&&(Oe=1),ye.setLineWidth(Oe*St()),O.isLineSegments?Mt.setMode(A.LINES):O.isLineLoop?Mt.setMode(A.LINE_LOOP):Mt.setMode(A.LINE_STRIP)}else O.isPoints?Mt.setMode(A.POINTS):O.isSprite&&Mt.setMode(A.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)na("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Mt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Ze.get("WEBGL_multi_draw"))Mt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let Oe=O._multiDrawStarts,It=O._multiDrawCounts,ht=O._multiDrawCount,On=ve?L.get(ve).bytesPerElement:1,Xo=we.get(V).currentProgram.getUniforms();for(let Ln=0;Ln<ht;Ln++)Xo.setValue(A,"_gl_DrawID",Ln),Mt.render(Oe[Ln]/On,It[Ln])}else if(O.isInstancedMesh)Mt.renderInstances(rt,Nt,O.count);else if(B.isInstancedBufferGeometry){let Oe=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,It=Math.min(B.instanceCount,Oe);Mt.renderInstances(rt,Nt,It)}else Mt.render(rt,Nt)};function sn(_,P,B){_.transparent===!0&&_.side===Ui&&_.forceSinglePass===!1?(_.side=xn,_.needsUpdate=!0,ml(_,P,B),_.side=cr,_.needsUpdate=!0,ml(_,P,B),_.side=Ui):ml(_,P,B)}this.compile=function(_,P,B=null){B===null&&(B=_),S=Ce.get(B),S.init(P),R.push(S),B.traverseVisible(function(O){O.isLight&&O.layers.test(P.layers)&&(S.pushLight(O),O.castShadow&&S.pushShadow(O))}),_!==B&&_.traverseVisible(function(O){O.isLight&&O.layers.test(P.layers)&&(S.pushLight(O),O.castShadow&&S.pushShadow(O))}),S.setupLights();let V=new Set;return _.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let le=O.material;if(le)if(Array.isArray(le))for(let pe=0;pe<le.length;pe++){let xe=le[pe];sn(xe,B,O),V.add(xe)}else sn(le,B,O),V.add(le)}),S=R.pop(),V},this.compileAsync=function(_,P,B=null){let V=this.compile(_,P,B);return new Promise(O=>{function le(){if(V.forEach(function(pe){we.get(pe).currentProgram.isReady()&&V.delete(pe)}),V.size===0){O(_);return}setTimeout(le,10)}Ze.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let an=null;function pw(_){an&&an(_)}function Xy(){to.stop()}function Yy(){to.start()}let to=new aw;to.setAnimationLoop(pw),typeof self<"u"&&to.setContext(self),this.setAnimationLoop=function(_){an=_,se.setAnimationLoop(_),_===null?to.stop():to.start()},se.addEventListener("sessionstart",Xy),se.addEventListener("sessionend",Yy),this.render=function(_,P){if(P!==void 0&&P.isCamera!==!0){tt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(P),P=se.getCamera()),_.isScene===!0&&_.onBeforeRender(T,_,P,x),S=Ce.get(_,R.length),S.init(P),R.push(S),He.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),$.setFromProjectionMatrix(He,Ei,P.reversedDepth),ge=this.localClippingEnabled,Q=be.init(this.clippingPlanes,ge),w=de.get(_,I.length),w.init(),I.push(w),se.enabled===!0&&se.isPresenting===!0){let le=T.xr.getDepthSensingMesh();le!==null&&Ph(le,P,-1/0,T.sortObjects)}Ph(_,P,0,T.sortObjects),w.finish(),T.sortObjects===!0&&w.sort(Me,et),qe=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,qe&&ce.addToRenderList(w,_),this.info.render.frame++,Q===!0&&be.beginShadows();let B=S.state.shadowsArray;ee.render(B,_,P),Q===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset();let V=w.opaque,O=w.transmissive;if(S.setupLights(),P.isArrayCamera){let le=P.cameras;if(O.length>0)for(let pe=0,xe=le.length;pe<xe;pe++){let ve=le[pe];Ky(V,O,_,ve)}qe&&ce.render(_);for(let pe=0,xe=le.length;pe<xe;pe++){let ve=le[pe];Zy(w,_,ve,ve.viewport)}}else O.length>0&&Ky(V,O,_,P),qe&&ce.render(_),Zy(w,_,P);x!==null&&b===0&&(Be.updateMultisampleRenderTarget(x),Be.updateRenderTargetMipmap(x)),_.isScene===!0&&_.onAfterRender(T,_,P),M.resetDefaultState(),N=-1,H=null,R.pop(),R.length>0?(S=R[R.length-1],Q===!0&&be.setGlobalState(T.clippingPlanes,S.state.camera)):S=null,I.pop(),I.length>0?w=I[I.length-1]:w=null};function Ph(_,P,B,V){if(_.visible===!1)return;if(_.layers.test(P.layers)){if(_.isGroup)B=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(P);else if(_.isLight)S.pushLight(_),_.castShadow&&S.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||$.intersectsSprite(_)){V&&Je.setFromMatrixPosition(_.matrixWorld).applyMatrix4(He);let pe=J.update(_),xe=_.material;xe.visible&&w.push(_,pe,xe,B,Je.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||$.intersectsObject(_))){let pe=J.update(_),xe=_.material;if(V&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),Je.copy(_.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),Je.copy(pe.boundingSphere.center)),Je.applyMatrix4(_.matrixWorld).applyMatrix4(He)),Array.isArray(xe)){let ve=pe.groups;for(let Fe=0,ke=ve.length;Fe<ke;Fe++){let Re=ve[Fe],rt=xe[Re.materialIndex];rt&&rt.visible&&w.push(_,pe,rt,B,Je.z,Re)}}else xe.visible&&w.push(_,pe,xe,B,Je.z,null)}}let le=_.children;for(let pe=0,xe=le.length;pe<xe;pe++)Ph(le[pe],P,B,V)}function Zy(_,P,B,V){let{opaque:O,transmissive:le,transparent:pe}=_;S.setupLightsView(B),Q===!0&&be.setGlobalState(T.clippingPlanes,B),V&&ye.viewport(G.copy(V)),O.length>0&&pl(O,P,B),le.length>0&&pl(le,P,B),pe.length>0&&pl(pe,P,B),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function Ky(_,P,B,V){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;S.state.transmissionRenderTarget[V.id]===void 0&&(S.state.transmissionRenderTarget[V.id]=new Li(1,1,{generateMipmaps:!0,type:Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float")?Go:Si,minFilter:Jr,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:dt.workingColorSpace}));let le=S.state.transmissionRenderTarget[V.id],pe=V.viewport||G;le.setSize(pe.z*T.transmissionResolutionScale,pe.w*T.transmissionResolutionScale);let xe=T.getRenderTarget(),ve=T.getActiveCubeFace(),Fe=T.getActiveMipmapLevel();T.setRenderTarget(le),T.getClearColor(K),te=T.getClearAlpha(),te<1&&T.setClearColor(16777215,.5),T.clear(),qe&&ce.render(B);let ke=T.toneMapping;T.toneMapping=fr;let Re=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),S.setupLightsView(V),Q===!0&&be.setGlobalState(T.clippingPlanes,V),pl(_,B,V),Be.updateMultisampleRenderTarget(le),Be.updateRenderTargetMipmap(le),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let rt=!1;for(let Et=0,Nt=P.length;Et<Nt;Et++){let Pt=P[Et],{object:Mt,geometry:Oe,material:It,group:ht}=Pt;if(It.side===Ui&&Mt.layers.test(V.layers)){let On=It.side;It.side=xn,It.needsUpdate=!0,Jy(Mt,B,V,Oe,It,ht),It.side=On,It.needsUpdate=!0,rt=!0}}rt===!0&&(Be.updateMultisampleRenderTarget(le),Be.updateRenderTargetMipmap(le))}T.setRenderTarget(xe,ve,Fe),T.setClearColor(K,te),Re!==void 0&&(V.viewport=Re),T.toneMapping=ke}function pl(_,P,B){let V=P.isScene===!0?P.overrideMaterial:null;for(let O=0,le=_.length;O<le;O++){let pe=_[O],{object:xe,geometry:ve,group:Fe}=pe,ke=pe.material;ke.allowOverride===!0&&V!==null&&(ke=V),xe.layers.test(B.layers)&&Jy(xe,P,B,ve,ke,Fe)}}function Jy(_,P,B,V,O,le){_.onBeforeRender(T,P,B,V,O,le),_.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),O.onBeforeRender(T,P,B,V,_,le),O.transparent===!0&&O.side===Ui&&O.forceSinglePass===!1?(O.side=xn,O.needsUpdate=!0,T.renderBufferDirect(B,P,V,O,_,le),O.side=cr,O.needsUpdate=!0,T.renderBufferDirect(B,P,V,O,_,le),O.side=Ui):T.renderBufferDirect(B,P,V,O,_,le),_.onAfterRender(T,P,B,V,O,le)}function ml(_,P,B){P.isScene!==!0&&(P=Bt);let V=we.get(_),O=S.state.lights,le=S.state.shadowsArray,pe=O.state.version,xe=z.getParameters(_,O.state,le,P,B),ve=z.getProgramCacheKey(xe),Fe=V.programs;V.environment=_.isMeshStandardMaterial?P.environment:null,V.fog=P.fog,V.envMap=(_.isMeshStandardMaterial?v:E).get(_.envMap||V.environment),V.envMapRotation=V.environment!==null&&_.envMap===null?P.environmentRotation:_.envMapRotation,Fe===void 0&&(_.addEventListener("dispose",Ie),Fe=new Map,V.programs=Fe);let ke=Fe.get(ve);if(ke!==void 0){if(V.currentProgram===ke&&V.lightsStateVersion===pe)return e0(_,xe),ke}else xe.uniforms=z.getUniforms(_),_.onBeforeCompile(xe,T),ke=z.acquireProgram(xe,ve),Fe.set(ve,ke),V.uniforms=xe.uniforms;let Re=V.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(Re.clippingPlanes=be.uniform),e0(_,xe),V.needsLights=vw(_),V.lightsStateVersion=pe,V.needsLights&&(Re.ambientLightColor.value=O.state.ambient,Re.lightProbe.value=O.state.probe,Re.directionalLights.value=O.state.directional,Re.directionalLightShadows.value=O.state.directionalShadow,Re.spotLights.value=O.state.spot,Re.spotLightShadows.value=O.state.spotShadow,Re.rectAreaLights.value=O.state.rectArea,Re.ltc_1.value=O.state.rectAreaLTC1,Re.ltc_2.value=O.state.rectAreaLTC2,Re.pointLights.value=O.state.point,Re.pointLightShadows.value=O.state.pointShadow,Re.hemisphereLights.value=O.state.hemi,Re.directionalShadowMap.value=O.state.directionalShadowMap,Re.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Re.spotShadowMap.value=O.state.spotShadowMap,Re.spotLightMatrix.value=O.state.spotLightMatrix,Re.spotLightMap.value=O.state.spotLightMap,Re.pointShadowMap.value=O.state.pointShadowMap,Re.pointShadowMatrix.value=O.state.pointShadowMatrix),V.currentProgram=ke,V.uniformsList=null,ke}function Qy(_){if(_.uniformsList===null){let P=_.currentProgram.getUniforms();_.uniformsList=pa.seqWithValue(P.seq,_.uniforms)}return _.uniformsList}function e0(_,P){let B=we.get(_);B.outputColorSpace=P.outputColorSpace,B.batching=P.batching,B.batchingColor=P.batchingColor,B.instancing=P.instancing,B.instancingColor=P.instancingColor,B.instancingMorph=P.instancingMorph,B.skinning=P.skinning,B.morphTargets=P.morphTargets,B.morphNormals=P.morphNormals,B.morphColors=P.morphColors,B.morphTargetsCount=P.morphTargetsCount,B.numClippingPlanes=P.numClippingPlanes,B.numIntersection=P.numClipIntersection,B.vertexAlphas=P.vertexAlphas,B.vertexTangents=P.vertexTangents,B.toneMapping=P.toneMapping}function mw(_,P,B,V,O){P.isScene!==!0&&(P=Bt),Be.resetTextureUnits();let le=P.fog,pe=V.isMeshStandardMaterial?P.environment:null,xe=x===null?T.outputColorSpace:x.isXRRenderTarget===!0?x.texture.colorSpace:Uo,ve=(V.isMeshStandardMaterial?v:E).get(V.envMap||pe),Fe=V.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,ke=!!B.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Re=!!B.morphAttributes.position,rt=!!B.morphAttributes.normal,Et=!!B.morphAttributes.color,Nt=fr;V.toneMapped&&(x===null||x.isXRRenderTarget===!0)&&(Nt=T.toneMapping);let Pt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Mt=Pt!==void 0?Pt.length:0,Oe=we.get(V),It=S.state.lights;if(Q===!0&&(ge===!0||_!==H)){let mn=_===H&&V.id===N;be.setState(V,_,mn)}let ht=!1;V.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==It.state.version||Oe.outputColorSpace!==xe||O.isBatchedMesh&&Oe.batching===!1||!O.isBatchedMesh&&Oe.batching===!0||O.isBatchedMesh&&Oe.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Oe.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Oe.instancing===!1||!O.isInstancedMesh&&Oe.instancing===!0||O.isSkinnedMesh&&Oe.skinning===!1||!O.isSkinnedMesh&&Oe.skinning===!0||O.isInstancedMesh&&Oe.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Oe.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Oe.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Oe.instancingMorph===!1&&O.morphTexture!==null||Oe.envMap!==ve||V.fog===!0&&Oe.fog!==le||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==be.numPlanes||Oe.numIntersection!==be.numIntersection)||Oe.vertexAlphas!==Fe||Oe.vertexTangents!==ke||Oe.morphTargets!==Re||Oe.morphNormals!==rt||Oe.morphColors!==Et||Oe.toneMapping!==Nt||Oe.morphTargetsCount!==Mt)&&(ht=!0):(ht=!0,Oe.__version=V.version);let On=Oe.currentProgram;ht===!0&&(On=ml(V,P,O));let Xo=!1,Ln=!1,ga=!1,At=On.getUniforms(),_n=Oe.uniforms;if(ye.useProgram(On.program)&&(Xo=!0,Ln=!0,ga=!0),V.id!==N&&(N=V.id,Ln=!0),Xo||H!==_){ye.buffers.depth.getReversed()&&_.reversedDepth!==!0&&(_._reversedDepth=!0,_.updateProjectionMatrix()),At.setValue(A,"projectionMatrix",_.projectionMatrix),At.setValue(A,"viewMatrix",_.matrixWorldInverse);let bn=At.map.cameraPosition;bn!==void 0&&bn.setValue(A,Te.setFromMatrixPosition(_.matrixWorld)),xt.logarithmicDepthBuffer&&At.setValue(A,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&At.setValue(A,"isOrthographic",_.isOrthographicCamera===!0),H!==_&&(H=_,Ln=!0,ga=!0)}if(O.isSkinnedMesh){At.setOptional(A,O,"bindMatrix"),At.setOptional(A,O,"bindMatrixInverse");let mn=O.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),At.setValue(A,"boneTexture",mn.boneTexture,Be))}O.isBatchedMesh&&(At.setOptional(A,O,"batchingTexture"),At.setValue(A,"batchingTexture",O._matricesTexture,Be),At.setOptional(A,O,"batchingIdTexture"),At.setValue(A,"batchingIdTexture",O._indirectTexture,Be),At.setOptional(A,O,"batchingColorTexture"),O._colorsTexture!==null&&At.setValue(A,"batchingColorTexture",O._colorsTexture,Be));let Jn=B.morphAttributes;if((Jn.position!==void 0||Jn.normal!==void 0||Jn.color!==void 0)&&De.update(O,B,On),(Ln||Oe.receiveShadow!==O.receiveShadow)&&(Oe.receiveShadow=O.receiveShadow,At.setValue(A,"receiveShadow",O.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(_n.envMap.value=ve,_n.flipEnvMap.value=ve.isCubeTexture&&ve.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&P.environment!==null&&(_n.envMapIntensity.value=P.environmentIntensity),_n.dfgLUT!==void 0&&(_n.dfgLUT.value=Dk()),Ln&&(At.setValue(A,"toneMappingExposure",T.toneMappingExposure),Oe.needsLights&&gw(_n,ga),le&&V.fog===!0&&Se.refreshFogUniforms(_n,le),Se.refreshMaterialUniforms(_n,V,ue,ae,S.state.transmissionRenderTarget[_.id]),pa.upload(A,Qy(Oe),_n,Be)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(pa.upload(A,Qy(Oe),_n,Be),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&At.setValue(A,"center",O.center),At.setValue(A,"modelViewMatrix",O.modelViewMatrix),At.setValue(A,"normalMatrix",O.normalMatrix),At.setValue(A,"modelMatrix",O.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let mn=V.uniformsGroups;for(let bn=0,Oh=mn.length;bn<Oh;bn++){let no=mn[bn];ie.update(no,On),ie.bind(no,On)}}return On}function gw(_,P){_.ambientLightColor.needsUpdate=P,_.lightProbe.needsUpdate=P,_.directionalLights.needsUpdate=P,_.directionalLightShadows.needsUpdate=P,_.pointLights.needsUpdate=P,_.pointLightShadows.needsUpdate=P,_.spotLights.needsUpdate=P,_.spotLightShadows.needsUpdate=P,_.rectAreaLights.needsUpdate=P,_.hemisphereLights.needsUpdate=P}function vw(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(_,P,B){let V=we.get(_);V.__autoAllocateDepthBuffer=_.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),we.get(_.texture).__webglTexture=P,we.get(_.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:B,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(_,P){let B=we.get(_);B.__webglFramebuffer=P,B.__useDefaultFramebuffer=P===void 0};let yw=A.createFramebuffer();this.setRenderTarget=function(_,P=0,B=0){x=_,U=P,b=B;let V=!0,O=null,le=!1,pe=!1;if(_){let ve=we.get(_);if(ve.__useDefaultFramebuffer!==void 0)ye.bindFramebuffer(A.FRAMEBUFFER,null),V=!1;else if(ve.__webglFramebuffer===void 0)Be.setupRenderTarget(_);else if(ve.__hasExternalTextures)Be.rebindTextures(_,we.get(_.texture).__webglTexture,we.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){let Re=_.depthTexture;if(ve.__boundDepthTexture!==Re){if(Re!==null&&we.has(Re)&&(_.width!==Re.image.width||_.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Be.setupDepthRenderbuffer(_)}}let Fe=_.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(pe=!0);let ke=we.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(ke[P])?O=ke[P][B]:O=ke[P],le=!0):_.samples>0&&Be.useMultisampledRTT(_)===!1?O=we.get(_).__webglMultisampledFramebuffer:Array.isArray(ke)?O=ke[B]:O=ke,G.copy(_.viewport),Z.copy(_.scissor),W=_.scissorTest}else G.copy(ft).multiplyScalar(ue).floor(),Z.copy(yt).multiplyScalar(ue).floor(),W=bt;if(B!==0&&(O=yw),ye.bindFramebuffer(A.FRAMEBUFFER,O)&&V&&ye.drawBuffers(_,O),ye.viewport(G),ye.scissor(Z),ye.setScissorTest(W),le){let ve=we.get(_.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+P,ve.__webglTexture,B)}else if(pe){let ve=P;for(let Fe=0;Fe<_.textures.length;Fe++){let ke=we.get(_.textures[Fe]);A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+Fe,ke.__webglTexture,B,ve)}}else if(_!==null&&B!==0){let ve=we.get(_.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,ve.__webglTexture,B)}N=-1},this.readRenderTargetPixels=function(_,P,B,V,O,le,pe,xe=0){if(!(_&&_.isWebGLRenderTarget)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=we.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&pe!==void 0&&(ve=ve[pe]),ve){ye.bindFramebuffer(A.FRAMEBUFFER,ve);try{let Fe=_.textures[xe],ke=Fe.format,Re=Fe.type;if(!xt.textureFormatReadable(ke)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!xt.textureTypeReadable(Re)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=_.width-V&&B>=0&&B<=_.height-O&&(_.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+xe),A.readPixels(P,B,V,O,ne.convert(ke),ne.convert(Re),le))}finally{let Fe=x!==null?we.get(x).__webglFramebuffer:null;ye.bindFramebuffer(A.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(_,P,B,V,O,le,pe,xe=0){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=we.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&pe!==void 0&&(ve=ve[pe]),ve)if(P>=0&&P<=_.width-V&&B>=0&&B<=_.height-O){ye.bindFramebuffer(A.FRAMEBUFFER,ve);let Fe=_.textures[xe],ke=Fe.format,Re=Fe.type;if(!xt.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!xt.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let rt=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,rt),A.bufferData(A.PIXEL_PACK_BUFFER,le.byteLength,A.STREAM_READ),_.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+xe),A.readPixels(P,B,V,O,ne.convert(ke),ne.convert(Re),0);let Et=x!==null?we.get(x).__webglFramebuffer:null;ye.bindFramebuffer(A.FRAMEBUFFER,Et);let Nt=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await FT(A,Nt,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,rt),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,le),A.deleteBuffer(rt),A.deleteSync(Nt),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(_,P=null,B=0){let V=Math.pow(2,-B),O=Math.floor(_.image.width*V),le=Math.floor(_.image.height*V),pe=P!==null?P.x:0,xe=P!==null?P.y:0;Be.setTexture2D(_,0),A.copyTexSubImage2D(A.TEXTURE_2D,B,0,0,pe,xe,O,le),ye.unbindTexture()};let xw=A.createFramebuffer(),_w=A.createFramebuffer();this.copyTextureToTexture=function(_,P,B=null,V=null,O=0,le=null){le===null&&(O!==0?(na("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),le=O,O=0):le=0);let pe,xe,ve,Fe,ke,Re,rt,Et,Nt,Pt=_.isCompressedTexture?_.mipmaps[le]:_.image;if(B!==null)pe=B.max.x-B.min.x,xe=B.max.y-B.min.y,ve=B.isBox3?B.max.z-B.min.z:1,Fe=B.min.x,ke=B.min.y,Re=B.isBox3?B.min.z:0;else{let Jn=Math.pow(2,-O);pe=Math.floor(Pt.width*Jn),xe=Math.floor(Pt.height*Jn),_.isDataArrayTexture?ve=Pt.depth:_.isData3DTexture?ve=Math.floor(Pt.depth*Jn):ve=1,Fe=0,ke=0,Re=0}V!==null?(rt=V.x,Et=V.y,Nt=V.z):(rt=0,Et=0,Nt=0);let Mt=ne.convert(P.format),Oe=ne.convert(P.type),It;P.isData3DTexture?(Be.setTexture3D(P,0),It=A.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(Be.setTexture2DArray(P,0),It=A.TEXTURE_2D_ARRAY):(Be.setTexture2D(P,0),It=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,P.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,P.unpackAlignment);let ht=A.getParameter(A.UNPACK_ROW_LENGTH),On=A.getParameter(A.UNPACK_IMAGE_HEIGHT),Xo=A.getParameter(A.UNPACK_SKIP_PIXELS),Ln=A.getParameter(A.UNPACK_SKIP_ROWS),ga=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,Pt.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Pt.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Fe),A.pixelStorei(A.UNPACK_SKIP_ROWS,ke),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Re);let At=_.isDataArrayTexture||_.isData3DTexture,_n=P.isDataArrayTexture||P.isData3DTexture;if(_.isDepthTexture){let Jn=we.get(_),mn=we.get(P),bn=we.get(Jn.__renderTarget),Oh=we.get(mn.__renderTarget);ye.bindFramebuffer(A.READ_FRAMEBUFFER,bn.__webglFramebuffer),ye.bindFramebuffer(A.DRAW_FRAMEBUFFER,Oh.__webglFramebuffer);for(let no=0;no<ve;no++)At&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,we.get(_).__webglTexture,O,Re+no),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,we.get(P).__webglTexture,le,Nt+no)),A.blitFramebuffer(Fe,ke,pe,xe,rt,Et,pe,xe,A.DEPTH_BUFFER_BIT,A.NEAREST);ye.bindFramebuffer(A.READ_FRAMEBUFFER,null),ye.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(O!==0||_.isRenderTargetTexture||we.has(_)){let Jn=we.get(_),mn=we.get(P);ye.bindFramebuffer(A.READ_FRAMEBUFFER,xw),ye.bindFramebuffer(A.DRAW_FRAMEBUFFER,_w);for(let bn=0;bn<ve;bn++)At?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Jn.__webglTexture,O,Re+bn):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Jn.__webglTexture,O),_n?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,mn.__webglTexture,le,Nt+bn):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,mn.__webglTexture,le),O!==0?A.blitFramebuffer(Fe,ke,pe,xe,rt,Et,pe,xe,A.COLOR_BUFFER_BIT,A.NEAREST):_n?A.copyTexSubImage3D(It,le,rt,Et,Nt+bn,Fe,ke,pe,xe):A.copyTexSubImage2D(It,le,rt,Et,Fe,ke,pe,xe);ye.bindFramebuffer(A.READ_FRAMEBUFFER,null),ye.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else _n?_.isDataTexture||_.isData3DTexture?A.texSubImage3D(It,le,rt,Et,Nt,pe,xe,ve,Mt,Oe,Pt.data):P.isCompressedArrayTexture?A.compressedTexSubImage3D(It,le,rt,Et,Nt,pe,xe,ve,Mt,Pt.data):A.texSubImage3D(It,le,rt,Et,Nt,pe,xe,ve,Mt,Oe,Pt):_.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,le,rt,Et,pe,xe,Mt,Oe,Pt.data):_.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,le,rt,Et,Pt.width,Pt.height,Mt,Pt.data):A.texSubImage2D(A.TEXTURE_2D,le,rt,Et,pe,xe,Mt,Oe,Pt);A.pixelStorei(A.UNPACK_ROW_LENGTH,ht),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,On),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Xo),A.pixelStorei(A.UNPACK_SKIP_ROWS,Ln),A.pixelStorei(A.UNPACK_SKIP_IMAGES,ga),le===0&&P.generateMipmaps&&A.generateMipmap(It),ye.unbindTexture()},this.initRenderTarget=function(_){we.get(_).__webglFramebuffer===void 0&&Be.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?Be.setTextureCube(_,0):_.isData3DTexture?Be.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?Be.setTexture2DArray(_,0):Be.setTexture2D(_,0),ye.unbindTexture()},this.resetState=function(){U=0,b=0,x=null,ye.reset(),M.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}};var Pk=Object.defineProperty,Ok=(n,e,t)=>e in n?Pk(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Lk=(n,e,t)=>(Ok(n,typeof e!="symbol"?e+"":e,t),t),Ah=class{constructor(){Lk(this,"_listeners")}addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let o=r.indexOf(t);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}};var Fk=Object.defineProperty,kk=(n,e,t)=>e in n?Fk(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Pe=(n,e,t)=>(kk(n,typeof e!="symbol"?e+"":e,t),t),Rh=new oa,fw=new ci,Uk=Math.cos(70*(Math.PI/180)),hw=(n,e)=>(n%e+e)%e,hl=class extends Ah{constructor(e,t){super(),Pe(this,"object"),Pe(this,"domElement"),Pe(this,"enabled",!0),Pe(this,"target",new k),Pe(this,"minDistance",0),Pe(this,"maxDistance",1/0),Pe(this,"minZoom",0),Pe(this,"maxZoom",1/0),Pe(this,"minPolarAngle",0),Pe(this,"maxPolarAngle",Math.PI),Pe(this,"minAzimuthAngle",-1/0),Pe(this,"maxAzimuthAngle",1/0),Pe(this,"enableDamping",!1),Pe(this,"dampingFactor",.05),Pe(this,"enableZoom",!0),Pe(this,"zoomSpeed",1),Pe(this,"enableRotate",!0),Pe(this,"rotateSpeed",1),Pe(this,"enablePan",!0),Pe(this,"panSpeed",1),Pe(this,"screenSpacePanning",!0),Pe(this,"keyPanSpeed",7),Pe(this,"zoomToCursor",!1),Pe(this,"autoRotate",!1),Pe(this,"autoRotateSpeed",2),Pe(this,"reverseOrbit",!1),Pe(this,"reverseHorizontalOrbit",!1),Pe(this,"reverseVerticalOrbit",!1),Pe(this,"keys",{LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"}),Pe(this,"mouseButtons",{LEFT:Zr.ROTATE,MIDDLE:Zr.DOLLY,RIGHT:Zr.PAN}),Pe(this,"touches",{ONE:Kr.ROTATE,TWO:Kr.DOLLY_PAN}),Pe(this,"target0"),Pe(this,"position0"),Pe(this,"zoom0"),Pe(this,"_domElementKeyEvents",null),Pe(this,"getPolarAngle"),Pe(this,"getAzimuthalAngle"),Pe(this,"setPolarAngle"),Pe(this,"setAzimuthalAngle"),Pe(this,"getDistance"),Pe(this,"getZoomScale"),Pe(this,"listenToKeyEvents"),Pe(this,"stopListenToKeyEvents"),Pe(this,"saveState"),Pe(this,"reset"),Pe(this,"update"),Pe(this,"connect"),Pe(this,"dispose"),Pe(this,"dollyIn"),Pe(this,"dollyOut"),Pe(this,"getScale"),Pe(this,"setScale"),this.object=e,this.domElement=t,this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=()=>u.phi,this.getAzimuthalAngle=()=>u.theta,this.setPolarAngle=C=>{let F=hw(C,2*Math.PI),ne=u.phi;ne<0&&(ne+=2*Math.PI),F<0&&(F+=2*Math.PI);let M=Math.abs(F-ne);2*Math.PI-M<M&&(F<ne?F+=2*Math.PI:ne+=2*Math.PI),d.phi=F-ne,i.update()},this.setAzimuthalAngle=C=>{let F=hw(C,2*Math.PI),ne=u.theta;ne<0&&(ne+=2*Math.PI),F<0&&(F+=2*Math.PI);let M=Math.abs(F-ne);2*Math.PI-M<M&&(F<ne?F+=2*Math.PI:ne+=2*Math.PI),d.theta=F-ne,i.update()},this.getDistance=()=>i.object.position.distanceTo(i.target),this.listenToKeyEvents=C=>{C.addEventListener("keydown",z),this._domElementKeyEvents=C},this.stopListenToKeyEvents=()=>{this._domElementKeyEvents.removeEventListener("keydown",z),this._domElementKeyEvents=null},this.saveState=()=>{i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=()=>{i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(r),i.update(),c=a.NONE},this.update=(()=>{let C=new k,F=new k(0,1,0),ne=new li().setFromUnitVectors(e.up,F),M=ne.clone().invert(),ie=new k,oe=new li,se=2*Math.PI;return function(){let X=i.object.position;ne.setFromUnitVectors(e.up,F),M.copy(ne).invert(),C.copy(X).sub(i.target),C.applyQuaternion(ne),u.setFromVector3(C),i.autoRotate&&c===a.NONE&&Z(H()),i.enableDamping?(u.theta+=d.theta*i.dampingFactor,u.phi+=d.phi*i.dampingFactor):(u.theta+=d.theta,u.phi+=d.phi);let he=i.minAzimuthAngle,Ie=i.maxAzimuthAngle;isFinite(he)&&isFinite(Ie)&&(he<-Math.PI?he+=se:he>Math.PI&&(he-=se),Ie<-Math.PI?Ie+=se:Ie>Math.PI&&(Ie-=se),he<=Ie?u.theta=Math.max(he,Math.min(Ie,u.theta)):u.theta=u.theta>(he+Ie)/2?Math.max(he,u.theta):Math.min(Ie,u.theta)),u.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,u.phi)),u.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(h,i.dampingFactor):i.target.add(h),i.zoomToCursor&&b||i.object.isOrthographicCamera?u.radius=ft(u.radius):u.radius=ft(u.radius*f),C.setFromSpherical(u),C.applyQuaternion(M),X.copy(i.target).add(C),i.object.matrixAutoUpdate||i.object.updateMatrix(),i.object.lookAt(i.target),i.enableDamping===!0?(d.theta*=1-i.dampingFactor,d.phi*=1-i.dampingFactor,h.multiplyScalar(1-i.dampingFactor)):(d.set(0,0,0),h.set(0,0,0));let pt=!1;if(i.zoomToCursor&&b){let ot=null;if(i.object instanceof jt&&i.object.isPerspectiveCamera){let sn=C.length();ot=ft(sn*f);let an=sn-ot;i.object.position.addScaledVector(D,an),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){let sn=new k(U.x,U.y,0);sn.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/f)),i.object.updateProjectionMatrix(),pt=!0;let an=new k(U.x,U.y,0);an.unproject(i.object),i.object.position.sub(an).add(sn),i.object.updateMatrixWorld(),ot=C.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;ot!==null&&(i.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(ot).add(i.object.position):(Rh.origin.copy(i.object.position),Rh.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Rh.direction))<Uk?e.lookAt(i.target):(fw.setFromNormalAndCoplanarPoint(i.object.up,i.target),Rh.intersectPlane(fw,i.target))))}else i.object instanceof dr&&i.object.isOrthographicCamera&&(pt=f!==1,pt&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/f)),i.object.updateProjectionMatrix()));return f=1,b=!1,pt||ie.distanceToSquared(i.object.position)>l||8*(1-oe.dot(i.object.quaternion))>l?(i.dispatchEvent(r),ie.copy(i.object.position),oe.copy(i.object.quaternion),pt=!1,!0):!1}})(),this.connect=C=>{i.domElement=C,i.domElement.style.touchAction="none",i.domElement.addEventListener("contextmenu",Ce),i.domElement.addEventListener("pointerdown",Be),i.domElement.addEventListener("pointercancel",v),i.domElement.addEventListener("wheel",J)},this.dispose=()=>{var C,F,ne,M,ie,oe;i.domElement&&(i.domElement.style.touchAction="auto"),(C=i.domElement)==null||C.removeEventListener("contextmenu",Ce),(F=i.domElement)==null||F.removeEventListener("pointerdown",Be),(ne=i.domElement)==null||ne.removeEventListener("pointercancel",v),(M=i.domElement)==null||M.removeEventListener("wheel",J),(ie=i.domElement)==null||ie.ownerDocument.removeEventListener("pointermove",E),(oe=i.domElement)==null||oe.ownerDocument.removeEventListener("pointerup",v),i._domElementKeyEvents!==null&&i._domElementKeyEvents.removeEventListener("keydown",z)};let i=this,r={type:"change"},o={type:"start"},s={type:"end"},a={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},c=a.NONE,l=1e-6,u=new la,d=new la,f=1,h=new k,g=new ze,y=new ze,m=new ze,p=new ze,w=new ze,S=new ze,I=new ze,R=new ze,T=new ze,D=new k,U=new ze,b=!1,x=[],N={};function H(){return 2*Math.PI/60/60*i.autoRotateSpeed}function G(){return Math.pow(.95,i.zoomSpeed)}function Z(C){i.reverseOrbit||i.reverseHorizontalOrbit?d.theta+=C:d.theta-=C}function W(C){i.reverseOrbit||i.reverseVerticalOrbit?d.phi+=C:d.phi-=C}let K=(()=>{let C=new k;return function(ne,M){C.setFromMatrixColumn(M,0),C.multiplyScalar(-ne),h.add(C)}})(),te=(()=>{let C=new k;return function(ne,M){i.screenSpacePanning===!0?C.setFromMatrixColumn(M,1):(C.setFromMatrixColumn(M,0),C.crossVectors(i.object.up,C)),C.multiplyScalar(ne),h.add(C)}})(),j=(()=>{let C=new k;return function(ne,M){let ie=i.domElement;if(ie&&i.object instanceof jt&&i.object.isPerspectiveCamera){let oe=i.object.position;C.copy(oe).sub(i.target);let se=C.length();se*=Math.tan(i.object.fov/2*Math.PI/180),K(2*ne*se/ie.clientHeight,i.object.matrix),te(2*M*se/ie.clientHeight,i.object.matrix)}else ie&&i.object instanceof dr&&i.object.isOrthographicCamera?(K(ne*(i.object.right-i.object.left)/i.object.zoom/ie.clientWidth,i.object.matrix),te(M*(i.object.top-i.object.bottom)/i.object.zoom/ie.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}})();function ae(C){i.object instanceof jt&&i.object.isPerspectiveCamera||i.object instanceof dr&&i.object.isOrthographicCamera?f=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function ue(C){ae(f/C)}function Me(C){ae(f*C)}function et(C){if(!i.zoomToCursor||!i.domElement)return;b=!0;let F=i.domElement.getBoundingClientRect(),ne=C.clientX-F.left,M=C.clientY-F.top,ie=F.width,oe=F.height;U.x=ne/ie*2-1,U.y=-(M/oe)*2+1,D.set(U.x,U.y,1).unproject(i.object).sub(i.object.position).normalize()}function ft(C){return Math.max(i.minDistance,Math.min(i.maxDistance,C))}function yt(C){g.set(C.clientX,C.clientY)}function bt(C){et(C),I.set(C.clientX,C.clientY)}function $(C){p.set(C.clientX,C.clientY)}function Q(C){y.set(C.clientX,C.clientY),m.subVectors(y,g).multiplyScalar(i.rotateSpeed);let F=i.domElement;F&&(Z(2*Math.PI*m.x/F.clientHeight),W(2*Math.PI*m.y/F.clientHeight)),g.copy(y),i.update()}function ge(C){R.set(C.clientX,C.clientY),T.subVectors(R,I),T.y>0?ue(G()):T.y<0&&Me(G()),I.copy(R),i.update()}function He(C){w.set(C.clientX,C.clientY),S.subVectors(w,p).multiplyScalar(i.panSpeed),j(S.x,S.y),p.copy(w),i.update()}function Te(C){et(C),C.deltaY<0?Me(G()):C.deltaY>0&&ue(G()),i.update()}function Je(C){let F=!1;switch(C.code){case i.keys.UP:j(0,i.keyPanSpeed),F=!0;break;case i.keys.BOTTOM:j(0,-i.keyPanSpeed),F=!0;break;case i.keys.LEFT:j(i.keyPanSpeed,0),F=!0;break;case i.keys.RIGHT:j(-i.keyPanSpeed,0),F=!0;break}F&&(C.preventDefault(),i.update())}function Bt(){if(x.length==1)g.set(x[0].pageX,x[0].pageY);else{let C=.5*(x[0].pageX+x[1].pageX),F=.5*(x[0].pageY+x[1].pageY);g.set(C,F)}}function qe(){if(x.length==1)p.set(x[0].pageX,x[0].pageY);else{let C=.5*(x[0].pageX+x[1].pageX),F=.5*(x[0].pageY+x[1].pageY);p.set(C,F)}}function St(){let C=x[0].pageX-x[1].pageX,F=x[0].pageY-x[1].pageY,ne=Math.sqrt(C*C+F*F);I.set(0,ne)}function A(){i.enableZoom&&St(),i.enablePan&&qe()}function Qe(){i.enableZoom&&St(),i.enableRotate&&Bt()}function Ze(C){if(x.length==1)y.set(C.pageX,C.pageY);else{let ne=De(C),M=.5*(C.pageX+ne.x),ie=.5*(C.pageY+ne.y);y.set(M,ie)}m.subVectors(y,g).multiplyScalar(i.rotateSpeed);let F=i.domElement;F&&(Z(2*Math.PI*m.x/F.clientHeight),W(2*Math.PI*m.y/F.clientHeight)),g.copy(y)}function xt(C){if(x.length==1)w.set(C.pageX,C.pageY);else{let F=De(C),ne=.5*(C.pageX+F.x),M=.5*(C.pageY+F.y);w.set(ne,M)}S.subVectors(w,p).multiplyScalar(i.panSpeed),j(S.x,S.y),p.copy(w)}function ye(C){let F=De(C),ne=C.pageX-F.x,M=C.pageY-F.y,ie=Math.sqrt(ne*ne+M*M);R.set(0,ie),T.set(0,Math.pow(R.y/I.y,i.zoomSpeed)),ue(T.y),I.copy(R)}function wt(C){i.enableZoom&&ye(C),i.enablePan&&xt(C)}function we(C){i.enableZoom&&ye(C),i.enableRotate&&Ze(C)}function Be(C){var F,ne;i.enabled!==!1&&(x.length===0&&((F=i.domElement)==null||F.ownerDocument.addEventListener("pointermove",E),(ne=i.domElement)==null||ne.ownerDocument.addEventListener("pointerup",v)),be(C),C.pointerType==="touch"?Se(C):L(C))}function E(C){i.enabled!==!1&&(C.pointerType==="touch"?de(C):q(C))}function v(C){var F,ne,M;ee(C),x.length===0&&((F=i.domElement)==null||F.releasePointerCapture(C.pointerId),(ne=i.domElement)==null||ne.ownerDocument.removeEventListener("pointermove",E),(M=i.domElement)==null||M.ownerDocument.removeEventListener("pointerup",v)),i.dispatchEvent(s),c=a.NONE}function L(C){let F;switch(C.button){case 0:F=i.mouseButtons.LEFT;break;case 1:F=i.mouseButtons.MIDDLE;break;case 2:F=i.mouseButtons.RIGHT;break;default:F=-1}switch(F){case Zr.DOLLY:if(i.enableZoom===!1)return;bt(C),c=a.DOLLY;break;case Zr.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(i.enablePan===!1)return;$(C),c=a.PAN}else{if(i.enableRotate===!1)return;yt(C),c=a.ROTATE}break;case Zr.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(i.enableRotate===!1)return;yt(C),c=a.ROTATE}else{if(i.enablePan===!1)return;$(C),c=a.PAN}break;default:c=a.NONE}c!==a.NONE&&i.dispatchEvent(o)}function q(C){if(i.enabled!==!1)switch(c){case a.ROTATE:if(i.enableRotate===!1)return;Q(C);break;case a.DOLLY:if(i.enableZoom===!1)return;ge(C);break;case a.PAN:if(i.enablePan===!1)return;He(C);break}}function J(C){i.enabled===!1||i.enableZoom===!1||c!==a.NONE&&c!==a.ROTATE||(C.preventDefault(),i.dispatchEvent(o),Te(C),i.dispatchEvent(s))}function z(C){i.enabled===!1||i.enablePan===!1||Je(C)}function Se(C){switch(ce(C),x.length){case 1:switch(i.touches.ONE){case Kr.ROTATE:if(i.enableRotate===!1)return;Bt(),c=a.TOUCH_ROTATE;break;case Kr.PAN:if(i.enablePan===!1)return;qe(),c=a.TOUCH_PAN;break;default:c=a.NONE}break;case 2:switch(i.touches.TWO){case Kr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;A(),c=a.TOUCH_DOLLY_PAN;break;case Kr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Qe(),c=a.TOUCH_DOLLY_ROTATE;break;default:c=a.NONE}break;default:c=a.NONE}c!==a.NONE&&i.dispatchEvent(o)}function de(C){switch(ce(C),c){case a.TOUCH_ROTATE:if(i.enableRotate===!1)return;Ze(C),i.update();break;case a.TOUCH_PAN:if(i.enablePan===!1)return;xt(C),i.update();break;case a.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;wt(C),i.update();break;case a.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;we(C),i.update();break;default:c=a.NONE}}function Ce(C){i.enabled!==!1&&C.preventDefault()}function be(C){x.push(C)}function ee(C){delete N[C.pointerId];for(let F=0;F<x.length;F++)if(x[F].pointerId==C.pointerId){x.splice(F,1);return}}function ce(C){let F=N[C.pointerId];F===void 0&&(F=new ze,N[C.pointerId]=F),F.set(C.pageX,C.pageY)}function De(C){let F=C.pointerId===x[0].pointerId?x[1]:x[0];return N[F.pointerId]}this.dollyIn=(C=G())=>{Me(C),i.update()},this.dollyOut=(C=G())=>{ue(C),i.update()},this.getScale=()=>f,this.setScale=C=>{ae(C),i.update()},this.getZoomScale=()=>G(),t!==void 0&&this.connect(t),this.update()}};var Bk=["rendererContainer"],Dh=class n{rendererContainer;scene;camera;renderer;cube;controls;animationId=null;rotando=!0;ngAfterViewInit(){this.initScene(),this.startAnimation()}ngOnDestroy(){this.stopAnimation(),this.renderer&&this.renderer.dispose()}onWindowResize(){if(!this.camera||!this.renderer||!this.rendererContainer)return;let e=this.rendererContainer.nativeElement.clientWidth,t=this.rendererContainer.nativeElement.clientHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t)}initScene(){this.scene=new Kc,this.scene.background=new it(132631);let e=this.rendererContainer.nativeElement.clientWidth,t=this.rendererContainer.nativeElement.clientHeight,i=e/t;this.camera=new jt(60,i,.1,1e3),this.camera.position.set(2,2,4),this.renderer=new wh({antialias:!0}),this.renderer.setSize(e,t),this.renderer.setPixelRatio(window.devicePixelRatio||1),this.renderer.shadowMap.enabled=!0,this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);let r=new il(16777215,.4);this.scene.add(r);let o=new nl(16777215,.8);o.position.set(5,5,5),o.castShadow=!0,this.scene.add(o);let s=new qr(1,1,1),a=new ca({color:2278750,roughness:.4,metalness:.2});this.cube=new Pn(s,a),this.cube.castShadow=!0,this.cube.receiveShadow=!0,this.scene.add(this.cube);let c=new Bo(6,6),l=new ca({color:1120295,roughness:.8,metalness:0}),u=new Pn(c,l);u.rotation.x=-Math.PI/2,u.position.y=-.6,u.receiveShadow=!0,this.scene.add(u),this.controls=new hl(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.rotateSpeed=.8,this.controls.zoomSpeed=.8,this.renderer.render(this.scene,this.camera)}startAnimation(){let e=()=>{this.animationId=requestAnimationFrame(e),this.rotando&&this.cube&&(this.cube.rotation.x+=.01,this.cube.rotation.y+=.015),this.controls.update(),this.renderer.render(this.scene,this.camera)};e()}stopAnimation(){this.animationId!==null&&(cancelAnimationFrame(this.animationId),this.animationId=null)}toggleRotation(){this.rotando=!this.rotando}cambiarColor(){if(!this.cube)return;let e=this.cube.material,t=new it(Math.random(),Math.random(),Math.random());e.color=t}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=rn({type:n,selectors:[["app-escena3d"]],viewQuery:function(t,i){if(t&1&&bg(Bk,5),t&2){let r;Eg(r=Sg())&&(i.rendererContainer=r.first)}},hostBindings:function(t,i){t&1&&nd("resize",function(){return i.onWindowResize()},Xm)},decls:13,vars:1,consts:[["rendererContainer",""],[2,"padding","1.5rem 1rem"],[2,"text-align","center","margin-bottom","1rem"],[2,"display","flex","flex-direction","column","gap","1rem","align-items","center"],[2,"width","100%","max-width","700px","height","400px","border-radius","12px","border","1px solid #1f2937","overflow","hidden","background","radial-gradient(circle at top, #1f2937, #020617 70%)"],[2,"display","flex","gap","0.75rem","flex-wrap","wrap","justify-content","center"],[2,"padding","0.4rem 0.9rem","border-radius","999px","border","none","cursor","pointer","background","#22c55e","color","#022c22","font-weight","600",3,"click"],[2,"padding","0.4rem 0.9rem","border-radius","999px","border","none","cursor","pointer","background","#3b82f6","color","#e5e7eb","font-weight","600",3,"click"],[2,"font-size","0.85rem","opacity","0.8","text-align","center","max-width","620px"]],template:function(t,i){if(t&1){let r=_g();qt(0,"section",1)(1,"h2",2),dn(2," Escena 3D con Three.js (Cubo interactivo) "),en(),qt(3,"div",3),td(4,"div",4,0),qt(6,"div",5)(7,"button",6),dc("click",function(){return Va(r),Ha(i.toggleRotation())}),dn(8),en(),qt(9,"button",7),dc("click",function(){return Va(r),Ha(i.cambiarColor())}),dn(10," Cambiar color del cubo "),en()(),qt(11,"p",8),dn(12," Tip: arrastra con el mouse sobre el \xE1rea 3D para rotar la c\xE1mara (OrbitControls). Usa los botones para controlar la animaci\xF3n y el color del cubo. "),en()()()}t&2&&(Qm(8),id(" ",i.rotando?"Detener rotaci\xF3n":"Iniciar rotaci\xF3n"," "))},styles:["[_nghost-%COMP%]{display:block}"]})};var Nh=class n{title=Cr("landing-angular");static \u0275fac=function(t){return new(t||n)};static \u0275cmp=rn({type:n,selectors:[["app-root"]],decls:7,vars:0,consts:[[1,"main-container"]],template:function(t,i){t&1&&(Rr(0,"app-navbar"),cc(1,"main",0),Rr(2,"app-hero")(3,"app-servicios")(4,"app-contacto")(5,"app-escena3d"),lc(),Rr(6,"app-footer"))},dependencies:[Bd,Vd,Hd,zd,Gd,Dh],encapsulation:2})};Yg(Nh,IM).catch(n=>console.error(n));
