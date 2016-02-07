// Compiled by ClojureScript 1.7.228 {:target :nodejs}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args8726 = [];
var len__7214__auto___8732 = arguments.length;
var i__7215__auto___8733 = (0);
while(true){
if((i__7215__auto___8733 < len__7214__auto___8732)){
args8726.push((arguments[i__7215__auto___8733]));

var G__8734 = (i__7215__auto___8733 + (1));
i__7215__auto___8733 = G__8734;
continue;
} else {
}
break;
}

var G__8728 = args8726.length;
switch (G__8728) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8726.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async8729 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8729 = (function (f,blockable,meta8730){
this.f = f;
this.blockable = blockable;
this.meta8730 = meta8730;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async8729.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8731,meta8730__$1){
var self__ = this;
var _8731__$1 = this;
return (new cljs.core.async.t_cljs$core$async8729(self__.f,self__.blockable,meta8730__$1));
});

cljs.core.async.t_cljs$core$async8729.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8731){
var self__ = this;
var _8731__$1 = this;
return self__.meta8730;
});

cljs.core.async.t_cljs$core$async8729.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async8729.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async8729.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async8729.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async8729.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta8730","meta8730",1024152524,null)], null);
});

cljs.core.async.t_cljs$core$async8729.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8729.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8729";

cljs.core.async.t_cljs$core$async8729.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async8729");
});

cljs.core.async.__GT_t_cljs$core$async8729 = (function cljs$core$async$__GT_t_cljs$core$async8729(f__$1,blockable__$1,meta8730){
return (new cljs.core.async.t_cljs$core$async8729(f__$1,blockable__$1,meta8730));
});

}

return (new cljs.core.async.t_cljs$core$async8729(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args8738 = [];
var len__7214__auto___8741 = arguments.length;
var i__7215__auto___8742 = (0);
while(true){
if((i__7215__auto___8742 < len__7214__auto___8741)){
args8738.push((arguments[i__7215__auto___8742]));

var G__8743 = (i__7215__auto___8742 + (1));
i__7215__auto___8742 = G__8743;
continue;
} else {
}
break;
}

var G__8740 = args8738.length;
switch (G__8740) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8738.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args8745 = [];
var len__7214__auto___8748 = arguments.length;
var i__7215__auto___8749 = (0);
while(true){
if((i__7215__auto___8749 < len__7214__auto___8748)){
args8745.push((arguments[i__7215__auto___8749]));

var G__8750 = (i__7215__auto___8749 + (1));
i__7215__auto___8749 = G__8750;
continue;
} else {
}
break;
}

var G__8747 = args8745.length;
switch (G__8747) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8745.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args8752 = [];
var len__7214__auto___8755 = arguments.length;
var i__7215__auto___8756 = (0);
while(true){
if((i__7215__auto___8756 < len__7214__auto___8755)){
args8752.push((arguments[i__7215__auto___8756]));

var G__8757 = (i__7215__auto___8756 + (1));
i__7215__auto___8756 = G__8757;
continue;
} else {
}
break;
}

var G__8754 = args8752.length;
switch (G__8754) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8752.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_8759 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_8759);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_8759,ret){
return (function (){
return fn1.call(null,val_8759);
});})(val_8759,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args8760 = [];
var len__7214__auto___8763 = arguments.length;
var i__7215__auto___8764 = (0);
while(true){
if((i__7215__auto___8764 < len__7214__auto___8763)){
args8760.push((arguments[i__7215__auto___8764]));

var G__8765 = (i__7215__auto___8764 + (1));
i__7215__auto___8764 = G__8765;
continue;
} else {
}
break;
}

var G__8762 = args8760.length;
switch (G__8762) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8760.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__7059__auto___8767 = n;
var x_8768 = (0);
while(true){
if((x_8768 < n__7059__auto___8767)){
(a[x_8768] = (0));

var G__8769 = (x_8768 + (1));
x_8768 = G__8769;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__8770 = (i + (1));
i = G__8770;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async8774 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8774 = (function (alt_flag,flag,meta8775){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta8775 = meta8775;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async8774.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_8776,meta8775__$1){
var self__ = this;
var _8776__$1 = this;
return (new cljs.core.async.t_cljs$core$async8774(self__.alt_flag,self__.flag,meta8775__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async8774.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_8776){
var self__ = this;
var _8776__$1 = this;
return self__.meta8775;
});})(flag))
;

cljs.core.async.t_cljs$core$async8774.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async8774.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async8774.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async8774.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async8774.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta8775","meta8775",114621154,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async8774.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8774.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8774";

cljs.core.async.t_cljs$core$async8774.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async8774");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async8774 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async8774(alt_flag__$1,flag__$1,meta8775){
return (new cljs.core.async.t_cljs$core$async8774(alt_flag__$1,flag__$1,meta8775));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async8774(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async8780 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8780 = (function (alt_handler,flag,cb,meta8781){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta8781 = meta8781;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async8780.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8782,meta8781__$1){
var self__ = this;
var _8782__$1 = this;
return (new cljs.core.async.t_cljs$core$async8780(self__.alt_handler,self__.flag,self__.cb,meta8781__$1));
});

cljs.core.async.t_cljs$core$async8780.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8782){
var self__ = this;
var _8782__$1 = this;
return self__.meta8781;
});

cljs.core.async.t_cljs$core$async8780.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async8780.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async8780.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async8780.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async8780.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta8781","meta8781",1939703662,null)], null);
});

cljs.core.async.t_cljs$core$async8780.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8780.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8780";

cljs.core.async.t_cljs$core$async8780.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async8780");
});

cljs.core.async.__GT_t_cljs$core$async8780 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async8780(alt_handler__$1,flag__$1,cb__$1,meta8781){
return (new cljs.core.async.t_cljs$core$async8780(alt_handler__$1,flag__$1,cb__$1,meta8781));
});

}

return (new cljs.core.async.t_cljs$core$async8780(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__8783_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__8783_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__8784_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__8784_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__6156__auto__ = wport;
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return port;
}
})()], null));
} else {
var G__8785 = (i + (1));
i = G__8785;
continue;
}
} else {
return null;
}
break;
}
})();
var or__6156__auto__ = ret;
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__6144__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__6144__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__6144__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__7221__auto__ = [];
var len__7214__auto___8791 = arguments.length;
var i__7215__auto___8792 = (0);
while(true){
if((i__7215__auto___8792 < len__7214__auto___8791)){
args__7221__auto__.push((arguments[i__7215__auto___8792]));

var G__8793 = (i__7215__auto___8792 + (1));
i__7215__auto___8792 = G__8793;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((1) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7222__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__8788){
var map__8789 = p__8788;
var map__8789__$1 = ((((!((map__8789 == null)))?((((map__8789.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8789.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8789):map__8789);
var opts = map__8789__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq8786){
var G__8787 = cljs.core.first.call(null,seq8786);
var seq8786__$1 = cljs.core.next.call(null,seq8786);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__8787,seq8786__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args8794 = [];
var len__7214__auto___8844 = arguments.length;
var i__7215__auto___8845 = (0);
while(true){
if((i__7215__auto___8845 < len__7214__auto___8844)){
args8794.push((arguments[i__7215__auto___8845]));

var G__8846 = (i__7215__auto___8845 + (1));
i__7215__auto___8845 = G__8846;
continue;
} else {
}
break;
}

var G__8796 = args8794.length;
switch (G__8796) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8794.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__8681__auto___8848 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8681__auto___8848){
return (function (){
var f__8682__auto__ = (function (){var switch__8569__auto__ = ((function (c__8681__auto___8848){
return (function (state_8820){
var state_val_8821 = (state_8820[(1)]);
if((state_val_8821 === (7))){
var inst_8816 = (state_8820[(2)]);
var state_8820__$1 = state_8820;
var statearr_8822_8849 = state_8820__$1;
(statearr_8822_8849[(2)] = inst_8816);

(statearr_8822_8849[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8821 === (1))){
var state_8820__$1 = state_8820;
var statearr_8823_8850 = state_8820__$1;
(statearr_8823_8850[(2)] = null);

(statearr_8823_8850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8821 === (4))){
var inst_8799 = (state_8820[(7)]);
var inst_8799__$1 = (state_8820[(2)]);
var inst_8800 = (inst_8799__$1 == null);
var state_8820__$1 = (function (){var statearr_8824 = state_8820;
(statearr_8824[(7)] = inst_8799__$1);

return statearr_8824;
})();
if(cljs.core.truth_(inst_8800)){
var statearr_8825_8851 = state_8820__$1;
(statearr_8825_8851[(1)] = (5));

} else {
var statearr_8826_8852 = state_8820__$1;
(statearr_8826_8852[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8821 === (13))){
var state_8820__$1 = state_8820;
var statearr_8827_8853 = state_8820__$1;
(statearr_8827_8853[(2)] = null);

(statearr_8827_8853[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8821 === (6))){
var inst_8799 = (state_8820[(7)]);
var state_8820__$1 = state_8820;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8820__$1,(11),to,inst_8799);
} else {
if((state_val_8821 === (3))){
var inst_8818 = (state_8820[(2)]);
var state_8820__$1 = state_8820;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8820__$1,inst_8818);
} else {
if((state_val_8821 === (12))){
var state_8820__$1 = state_8820;
var statearr_8828_8854 = state_8820__$1;
(statearr_8828_8854[(2)] = null);

(statearr_8828_8854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8821 === (2))){
var state_8820__$1 = state_8820;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8820__$1,(4),from);
} else {
if((state_val_8821 === (11))){
var inst_8809 = (state_8820[(2)]);
var state_8820__$1 = state_8820;
if(cljs.core.truth_(inst_8809)){
var statearr_8829_8855 = state_8820__$1;
(statearr_8829_8855[(1)] = (12));

} else {
var statearr_8830_8856 = state_8820__$1;
(statearr_8830_8856[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8821 === (9))){
var state_8820__$1 = state_8820;
var statearr_8831_8857 = state_8820__$1;
(statearr_8831_8857[(2)] = null);

(statearr_8831_8857[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8821 === (5))){
var state_8820__$1 = state_8820;
if(cljs.core.truth_(close_QMARK_)){
var statearr_8832_8858 = state_8820__$1;
(statearr_8832_8858[(1)] = (8));

} else {
var statearr_8833_8859 = state_8820__$1;
(statearr_8833_8859[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8821 === (14))){
var inst_8814 = (state_8820[(2)]);
var state_8820__$1 = state_8820;
var statearr_8834_8860 = state_8820__$1;
(statearr_8834_8860[(2)] = inst_8814);

(statearr_8834_8860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8821 === (10))){
var inst_8806 = (state_8820[(2)]);
var state_8820__$1 = state_8820;
var statearr_8835_8861 = state_8820__$1;
(statearr_8835_8861[(2)] = inst_8806);

(statearr_8835_8861[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8821 === (8))){
var inst_8803 = cljs.core.async.close_BANG_.call(null,to);
var state_8820__$1 = state_8820;
var statearr_8836_8862 = state_8820__$1;
(statearr_8836_8862[(2)] = inst_8803);

(statearr_8836_8862[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8681__auto___8848))
;
return ((function (switch__8569__auto__,c__8681__auto___8848){
return (function() {
var cljs$core$async$state_machine__8570__auto__ = null;
var cljs$core$async$state_machine__8570__auto____0 = (function (){
var statearr_8840 = [null,null,null,null,null,null,null,null];
(statearr_8840[(0)] = cljs$core$async$state_machine__8570__auto__);

(statearr_8840[(1)] = (1));

return statearr_8840;
});
var cljs$core$async$state_machine__8570__auto____1 = (function (state_8820){
while(true){
var ret_value__8571__auto__ = (function (){try{while(true){
var result__8572__auto__ = switch__8569__auto__.call(null,state_8820);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8572__auto__;
}
break;
}
}catch (e8841){if((e8841 instanceof Object)){
var ex__8573__auto__ = e8841;
var statearr_8842_8863 = state_8820;
(statearr_8842_8863[(5)] = ex__8573__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8820);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8841;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8864 = state_8820;
state_8820 = G__8864;
continue;
} else {
return ret_value__8571__auto__;
}
break;
}
});
cljs$core$async$state_machine__8570__auto__ = function(state_8820){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8570__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8570__auto____1.call(this,state_8820);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8570__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8570__auto____0;
cljs$core$async$state_machine__8570__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8570__auto____1;
return cljs$core$async$state_machine__8570__auto__;
})()
;})(switch__8569__auto__,c__8681__auto___8848))
})();
var state__8683__auto__ = (function (){var statearr_8843 = f__8682__auto__.call(null);
(statearr_8843[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8681__auto___8848);

return statearr_8843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8683__auto__);
});})(c__8681__auto___8848))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__9048){
var vec__9049 = p__9048;
var v = cljs.core.nth.call(null,vec__9049,(0),null);
var p = cljs.core.nth.call(null,vec__9049,(1),null);
var job = vec__9049;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__8681__auto___9231 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8681__auto___9231,res,vec__9049,v,p,job,jobs,results){
return (function (){
var f__8682__auto__ = (function (){var switch__8569__auto__ = ((function (c__8681__auto___9231,res,vec__9049,v,p,job,jobs,results){
return (function (state_9054){
var state_val_9055 = (state_9054[(1)]);
if((state_val_9055 === (1))){
var state_9054__$1 = state_9054;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9054__$1,(2),res,v);
} else {
if((state_val_9055 === (2))){
var inst_9051 = (state_9054[(2)]);
var inst_9052 = cljs.core.async.close_BANG_.call(null,res);
var state_9054__$1 = (function (){var statearr_9056 = state_9054;
(statearr_9056[(7)] = inst_9051);

return statearr_9056;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9054__$1,inst_9052);
} else {
return null;
}
}
});})(c__8681__auto___9231,res,vec__9049,v,p,job,jobs,results))
;
return ((function (switch__8569__auto__,c__8681__auto___9231,res,vec__9049,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8570__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8570__auto____0 = (function (){
var statearr_9060 = [null,null,null,null,null,null,null,null];
(statearr_9060[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8570__auto__);

(statearr_9060[(1)] = (1));

return statearr_9060;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8570__auto____1 = (function (state_9054){
while(true){
var ret_value__8571__auto__ = (function (){try{while(true){
var result__8572__auto__ = switch__8569__auto__.call(null,state_9054);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8572__auto__;
}
break;
}
}catch (e9061){if((e9061 instanceof Object)){
var ex__8573__auto__ = e9061;
var statearr_9062_9232 = state_9054;
(statearr_9062_9232[(5)] = ex__8573__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9054);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9061;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9233 = state_9054;
state_9054 = G__9233;
continue;
} else {
return ret_value__8571__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8570__auto__ = function(state_9054){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8570__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8570__auto____1.call(this,state_9054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8570__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8570__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8570__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8570__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8570__auto__;
})()
;})(switch__8569__auto__,c__8681__auto___9231,res,vec__9049,v,p,job,jobs,results))
})();
var state__8683__auto__ = (function (){var statearr_9063 = f__8682__auto__.call(null);
(statearr_9063[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8681__auto___9231);

return statearr_9063;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8683__auto__);
});})(c__8681__auto___9231,res,vec__9049,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__9064){
var vec__9065 = p__9064;
var v = cljs.core.nth.call(null,vec__9065,(0),null);
var p = cljs.core.nth.call(null,vec__9065,(1),null);
var job = vec__9065;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__7059__auto___9234 = n;
var __9235 = (0);
while(true){
if((__9235 < n__7059__auto___9234)){
var G__9066_9236 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__9066_9236) {
case "compute":
var c__8681__auto___9238 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__9235,c__8681__auto___9238,G__9066_9236,n__7059__auto___9234,jobs,results,process,async){
return (function (){
var f__8682__auto__ = (function (){var switch__8569__auto__ = ((function (__9235,c__8681__auto___9238,G__9066_9236,n__7059__auto___9234,jobs,results,process,async){
return (function (state_9079){
var state_val_9080 = (state_9079[(1)]);
if((state_val_9080 === (1))){
var state_9079__$1 = state_9079;
var statearr_9081_9239 = state_9079__$1;
(statearr_9081_9239[(2)] = null);

(statearr_9081_9239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9080 === (2))){
var state_9079__$1 = state_9079;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9079__$1,(4),jobs);
} else {
if((state_val_9080 === (3))){
var inst_9077 = (state_9079[(2)]);
var state_9079__$1 = state_9079;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9079__$1,inst_9077);
} else {
if((state_val_9080 === (4))){
var inst_9069 = (state_9079[(2)]);
var inst_9070 = process.call(null,inst_9069);
var state_9079__$1 = state_9079;
if(cljs.core.truth_(inst_9070)){
var statearr_9082_9240 = state_9079__$1;
(statearr_9082_9240[(1)] = (5));

} else {
var statearr_9083_9241 = state_9079__$1;
(statearr_9083_9241[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9080 === (5))){
var state_9079__$1 = state_9079;
var statearr_9084_9242 = state_9079__$1;
(statearr_9084_9242[(2)] = null);

(statearr_9084_9242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9080 === (6))){
var state_9079__$1 = state_9079;
var statearr_9085_9243 = state_9079__$1;
(statearr_9085_9243[(2)] = null);

(statearr_9085_9243[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9080 === (7))){
var inst_9075 = (state_9079[(2)]);
var state_9079__$1 = state_9079;
var statearr_9086_9244 = state_9079__$1;
(statearr_9086_9244[(2)] = inst_9075);

(statearr_9086_9244[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__9235,c__8681__auto___9238,G__9066_9236,n__7059__auto___9234,jobs,results,process,async))
;
return ((function (__9235,switch__8569__auto__,c__8681__auto___9238,G__9066_9236,n__7059__auto___9234,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8570__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8570__auto____0 = (function (){
var statearr_9090 = [null,null,null,null,null,null,null];
(statearr_9090[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8570__auto__);

(statearr_9090[(1)] = (1));

return statearr_9090;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8570__auto____1 = (function (state_9079){
while(true){
var ret_value__8571__auto__ = (function (){try{while(true){
var result__8572__auto__ = switch__8569__auto__.call(null,state_9079);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8572__auto__;
}
break;
}
}catch (e9091){if((e9091 instanceof Object)){
var ex__8573__auto__ = e9091;
var statearr_9092_9245 = state_9079;
(statearr_9092_9245[(5)] = ex__8573__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9079);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9091;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9246 = state_9079;
state_9079 = G__9246;
continue;
} else {
return ret_value__8571__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8570__auto__ = function(state_9079){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8570__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8570__auto____1.call(this,state_9079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8570__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8570__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8570__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8570__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8570__auto__;
})()
;})(__9235,switch__8569__auto__,c__8681__auto___9238,G__9066_9236,n__7059__auto___9234,jobs,results,process,async))
})();
var state__8683__auto__ = (function (){var statearr_9093 = f__8682__auto__.call(null);
(statearr_9093[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8681__auto___9238);

return statearr_9093;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8683__auto__);
});})(__9235,c__8681__auto___9238,G__9066_9236,n__7059__auto___9234,jobs,results,process,async))
);


break;
case "async":
var c__8681__auto___9247 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__9235,c__8681__auto___9247,G__9066_9236,n__7059__auto___9234,jobs,results,process,async){
return (function (){
var f__8682__auto__ = (function (){var switch__8569__auto__ = ((function (__9235,c__8681__auto___9247,G__9066_9236,n__7059__auto___9234,jobs,results,process,async){
return (function (state_9106){
var state_val_9107 = (state_9106[(1)]);
if((state_val_9107 === (1))){
var state_9106__$1 = state_9106;
var statearr_9108_9248 = state_9106__$1;
(statearr_9108_9248[(2)] = null);

(statearr_9108_9248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9107 === (2))){
var state_9106__$1 = state_9106;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9106__$1,(4),jobs);
} else {
if((state_val_9107 === (3))){
var inst_9104 = (state_9106[(2)]);
var state_9106__$1 = state_9106;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9106__$1,inst_9104);
} else {
if((state_val_9107 === (4))){
var inst_9096 = (state_9106[(2)]);
var inst_9097 = async.call(null,inst_9096);
var state_9106__$1 = state_9106;
if(cljs.core.truth_(inst_9097)){
var statearr_9109_9249 = state_9106__$1;
(statearr_9109_9249[(1)] = (5));

} else {
var statearr_9110_9250 = state_9106__$1;
(statearr_9110_9250[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9107 === (5))){
var state_9106__$1 = state_9106;
var statearr_9111_9251 = state_9106__$1;
(statearr_9111_9251[(2)] = null);

(statearr_9111_9251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9107 === (6))){
var state_9106__$1 = state_9106;
var statearr_9112_9252 = state_9106__$1;
(statearr_9112_9252[(2)] = null);

(statearr_9112_9252[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9107 === (7))){
var inst_9102 = (state_9106[(2)]);
var state_9106__$1 = state_9106;
var statearr_9113_9253 = state_9106__$1;
(statearr_9113_9253[(2)] = inst_9102);

(statearr_9113_9253[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__9235,c__8681__auto___9247,G__9066_9236,n__7059__auto___9234,jobs,results,process,async))
;
return ((function (__9235,switch__8569__auto__,c__8681__auto___9247,G__9066_9236,n__7059__auto___9234,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8570__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8570__auto____0 = (function (){
var statearr_9117 = [null,null,null,null,null,null,null];
(statearr_9117[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8570__auto__);

(statearr_9117[(1)] = (1));

return statearr_9117;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8570__auto____1 = (function (state_9106){
while(true){
var ret_value__8571__auto__ = (function (){try{while(true){
var result__8572__auto__ = switch__8569__auto__.call(null,state_9106);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8572__auto__;
}
break;
}
}catch (e9118){if((e9118 instanceof Object)){
var ex__8573__auto__ = e9118;
var statearr_9119_9254 = state_9106;
(statearr_9119_9254[(5)] = ex__8573__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9106);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9118;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9255 = state_9106;
state_9106 = G__9255;
continue;
} else {
return ret_value__8571__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8570__auto__ = function(state_9106){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8570__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8570__auto____1.call(this,state_9106);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8570__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8570__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8570__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8570__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8570__auto__;
})()
;})(__9235,switch__8569__auto__,c__8681__auto___9247,G__9066_9236,n__7059__auto___9234,jobs,results,process,async))
})();
var state__8683__auto__ = (function (){var statearr_9120 = f__8682__auto__.call(null);
(statearr_9120[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8681__auto___9247);

return statearr_9120;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8683__auto__);
});})(__9235,c__8681__auto___9247,G__9066_9236,n__7059__auto___9234,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__9256 = (__9235 + (1));
__9235 = G__9256;
continue;
} else {
}
break;
}

var c__8681__auto___9257 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8681__auto___9257,jobs,results,process,async){
return (function (){
var f__8682__auto__ = (function (){var switch__8569__auto__ = ((function (c__8681__auto___9257,jobs,results,process,async){
return (function (state_9142){
var state_val_9143 = (state_9142[(1)]);
if((state_val_9143 === (1))){
var state_9142__$1 = state_9142;
var statearr_9144_9258 = state_9142__$1;
(statearr_9144_9258[(2)] = null);

(statearr_9144_9258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9143 === (2))){
var state_9142__$1 = state_9142;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9142__$1,(4),from);
} else {
if((state_val_9143 === (3))){
var inst_9140 = (state_9142[(2)]);
var state_9142__$1 = state_9142;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9142__$1,inst_9140);
} else {
if((state_val_9143 === (4))){
var inst_9123 = (state_9142[(7)]);
var inst_9123__$1 = (state_9142[(2)]);
var inst_9124 = (inst_9123__$1 == null);
var state_9142__$1 = (function (){var statearr_9145 = state_9142;
(statearr_9145[(7)] = inst_9123__$1);

return statearr_9145;
})();
if(cljs.core.truth_(inst_9124)){
var statearr_9146_9259 = state_9142__$1;
(statearr_9146_9259[(1)] = (5));

} else {
var statearr_9147_9260 = state_9142__$1;
(statearr_9147_9260[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9143 === (5))){
var inst_9126 = cljs.core.async.close_BANG_.call(null,jobs);
var state_9142__$1 = state_9142;
var statearr_9148_9261 = state_9142__$1;
(statearr_9148_9261[(2)] = inst_9126);

(statearr_9148_9261[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9143 === (6))){
var inst_9123 = (state_9142[(7)]);
var inst_9128 = (state_9142[(8)]);
var inst_9128__$1 = cljs.core.async.chan.call(null,(1));
var inst_9129 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9130 = [inst_9123,inst_9128__$1];
var inst_9131 = (new cljs.core.PersistentVector(null,2,(5),inst_9129,inst_9130,null));
var state_9142__$1 = (function (){var statearr_9149 = state_9142;
(statearr_9149[(8)] = inst_9128__$1);

return statearr_9149;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9142__$1,(8),jobs,inst_9131);
} else {
if((state_val_9143 === (7))){
var inst_9138 = (state_9142[(2)]);
var state_9142__$1 = state_9142;
var statearr_9150_9262 = state_9142__$1;
(statearr_9150_9262[(2)] = inst_9138);

(statearr_9150_9262[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9143 === (8))){
var inst_9128 = (state_9142[(8)]);
var inst_9133 = (state_9142[(2)]);
var state_9142__$1 = (function (){var statearr_9151 = state_9142;
(statearr_9151[(9)] = inst_9133);

return statearr_9151;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9142__$1,(9),results,inst_9128);
} else {
if((state_val_9143 === (9))){
var inst_9135 = (state_9142[(2)]);
var state_9142__$1 = (function (){var statearr_9152 = state_9142;
(statearr_9152[(10)] = inst_9135);

return statearr_9152;
})();
var statearr_9153_9263 = state_9142__$1;
(statearr_9153_9263[(2)] = null);

(statearr_9153_9263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__8681__auto___9257,jobs,results,process,async))
;
return ((function (switch__8569__auto__,c__8681__auto___9257,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8570__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8570__auto____0 = (function (){
var statearr_9157 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_9157[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8570__auto__);

(statearr_9157[(1)] = (1));

return statearr_9157;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8570__auto____1 = (function (state_9142){
while(true){
var ret_value__8571__auto__ = (function (){try{while(true){
var result__8572__auto__ = switch__8569__auto__.call(null,state_9142);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8572__auto__;
}
break;
}
}catch (e9158){if((e9158 instanceof Object)){
var ex__8573__auto__ = e9158;
var statearr_9159_9264 = state_9142;
(statearr_9159_9264[(5)] = ex__8573__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9142);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9158;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9265 = state_9142;
state_9142 = G__9265;
continue;
} else {
return ret_value__8571__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8570__auto__ = function(state_9142){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8570__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8570__auto____1.call(this,state_9142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8570__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8570__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8570__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8570__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8570__auto__;
})()
;})(switch__8569__auto__,c__8681__auto___9257,jobs,results,process,async))
})();
var state__8683__auto__ = (function (){var statearr_9160 = f__8682__auto__.call(null);
(statearr_9160[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8681__auto___9257);

return statearr_9160;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8683__auto__);
});})(c__8681__auto___9257,jobs,results,process,async))
);


var c__8681__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8681__auto__,jobs,results,process,async){
return (function (){
var f__8682__auto__ = (function (){var switch__8569__auto__ = ((function (c__8681__auto__,jobs,results,process,async){
return (function (state_9198){
var state_val_9199 = (state_9198[(1)]);
if((state_val_9199 === (7))){
var inst_9194 = (state_9198[(2)]);
var state_9198__$1 = state_9198;
var statearr_9200_9266 = state_9198__$1;
(statearr_9200_9266[(2)] = inst_9194);

(statearr_9200_9266[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9199 === (20))){
var state_9198__$1 = state_9198;
var statearr_9201_9267 = state_9198__$1;
(statearr_9201_9267[(2)] = null);

(statearr_9201_9267[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9199 === (1))){
var state_9198__$1 = state_9198;
var statearr_9202_9268 = state_9198__$1;
(statearr_9202_9268[(2)] = null);

(statearr_9202_9268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9199 === (4))){
var inst_9163 = (state_9198[(7)]);
var inst_9163__$1 = (state_9198[(2)]);
var inst_9164 = (inst_9163__$1 == null);
var state_9198__$1 = (function (){var statearr_9203 = state_9198;
(statearr_9203[(7)] = inst_9163__$1);

return statearr_9203;
})();
if(cljs.core.truth_(inst_9164)){
var statearr_9204_9269 = state_9198__$1;
(statearr_9204_9269[(1)] = (5));

} else {
var statearr_9205_9270 = state_9198__$1;
(statearr_9205_9270[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9199 === (15))){
var inst_9176 = (state_9198[(8)]);
var state_9198__$1 = state_9198;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9198__$1,(18),to,inst_9176);
} else {
if((state_val_9199 === (21))){
var inst_9189 = (state_9198[(2)]);
var state_9198__$1 = state_9198;
var statearr_9206_9271 = state_9198__$1;
(statearr_9206_9271[(2)] = inst_9189);

(statearr_9206_9271[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9199 === (13))){
var inst_9191 = (state_9198[(2)]);
var state_9198__$1 = (function (){var statearr_9207 = state_9198;
(statearr_9207[(9)] = inst_9191);

return statearr_9207;
})();
var statearr_9208_9272 = state_9198__$1;
(statearr_9208_9272[(2)] = null);

(statearr_9208_9272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9199 === (6))){
var inst_9163 = (state_9198[(7)]);
var state_9198__$1 = state_9198;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9198__$1,(11),inst_9163);
} else {
if((state_val_9199 === (17))){
var inst_9184 = (state_9198[(2)]);
var state_9198__$1 = state_9198;
if(cljs.core.truth_(inst_9184)){
var statearr_9209_9273 = state_9198__$1;
(statearr_9209_9273[(1)] = (19));

} else {
var statearr_9210_9274 = state_9198__$1;
(statearr_9210_9274[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9199 === (3))){
var inst_9196 = (state_9198[(2)]);
var state_9198__$1 = state_9198;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9198__$1,inst_9196);
} else {
if((state_val_9199 === (12))){
var inst_9173 = (state_9198[(10)]);
var state_9198__$1 = state_9198;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9198__$1,(14),inst_9173);
} else {
if((state_val_9199 === (2))){
var state_9198__$1 = state_9198;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9198__$1,(4),results);
} else {
if((state_val_9199 === (19))){
var state_9198__$1 = state_9198;
var statearr_9211_9275 = state_9198__$1;
(statearr_9211_9275[(2)] = null);

(statearr_9211_9275[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9199 === (11))){
var inst_9173 = (state_9198[(2)]);
var state_9198__$1 = (function (){var statearr_9212 = state_9198;
(statearr_9212[(10)] = inst_9173);

return statearr_9212;
})();
var statearr_9213_9276 = state_9198__$1;
(statearr_9213_9276[(2)] = null);

(statearr_9213_9276[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9199 === (9))){
var state_9198__$1 = state_9198;
var statearr_9214_9277 = state_9198__$1;
(statearr_9214_9277[(2)] = null);

(statearr_9214_9277[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9199 === (5))){
var state_9198__$1 = state_9198;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9215_9278 = state_9198__$1;
(statearr_9215_9278[(1)] = (8));

} else {
var statearr_9216_9279 = state_9198__$1;
(statearr_9216_9279[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9199 === (14))){
var inst_9176 = (state_9198[(8)]);
var inst_9178 = (state_9198[(11)]);
var inst_9176__$1 = (state_9198[(2)]);
var inst_9177 = (inst_9176__$1 == null);
var inst_9178__$1 = cljs.core.not.call(null,inst_9177);
var state_9198__$1 = (function (){var statearr_9217 = state_9198;
(statearr_9217[(8)] = inst_9176__$1);

(statearr_9217[(11)] = inst_9178__$1);

return statearr_9217;
})();
if(inst_9178__$1){
var statearr_9218_9280 = state_9198__$1;
(statearr_9218_9280[(1)] = (15));

} else {
var statearr_9219_9281 = state_9198__$1;
(statearr_9219_9281[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9199 === (16))){
var inst_9178 = (state_9198[(11)]);
var state_9198__$1 = state_9198;
var statearr_9220_9282 = state_9198__$1;
(statearr_9220_9282[(2)] = inst_9178);

(statearr_9220_9282[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9199 === (10))){
var inst_9170 = (state_9198[(2)]);
var state_9198__$1 = state_9198;
var statearr_9221_9283 = state_9198__$1;
(statearr_9221_9283[(2)] = inst_9170);

(statearr_9221_9283[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9199 === (18))){
var inst_9181 = (state_9198[(2)]);
var state_9198__$1 = state_9198;
var statearr_9222_9284 = state_9198__$1;
(statearr_9222_9284[(2)] = inst_9181);

(statearr_9222_9284[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9199 === (8))){
var inst_9167 = cljs.core.async.close_BANG_.call(null,to);
var state_9198__$1 = state_9198;
var statearr_9223_9285 = state_9198__$1;
(statearr_9223_9285[(2)] = inst_9167);

(statearr_9223_9285[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8681__auto__,jobs,results,process,async))
;
return ((function (switch__8569__auto__,c__8681__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8570__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8570__auto____0 = (function (){
var statearr_9227 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9227[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8570__auto__);

(statearr_9227[(1)] = (1));

return statearr_9227;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8570__auto____1 = (function (state_9198){
while(true){
var ret_value__8571__auto__ = (function (){try{while(true){
var result__8572__auto__ = switch__8569__auto__.call(null,state_9198);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8572__auto__;
}
break;
}
}catch (e9228){if((e9228 instanceof Object)){
var ex__8573__auto__ = e9228;
var statearr_9229_9286 = state_9198;
(statearr_9229_9286[(5)] = ex__8573__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9198);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9228;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9287 = state_9198;
state_9198 = G__9287;
continue;
} else {
return ret_value__8571__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8570__auto__ = function(state_9198){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8570__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8570__auto____1.call(this,state_9198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8570__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8570__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8570__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8570__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8570__auto__;
})()
;})(switch__8569__auto__,c__8681__auto__,jobs,results,process,async))
})();
var state__8683__auto__ = (function (){var statearr_9230 = f__8682__auto__.call(null);
(statearr_9230[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8681__auto__);

return statearr_9230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8683__auto__);
});})(c__8681__auto__,jobs,results,process,async))
);

return c__8681__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args9288 = [];
var len__7214__auto___9291 = arguments.length;
var i__7215__auto___9292 = (0);
while(true){
if((i__7215__auto___9292 < len__7214__auto___9291)){
args9288.push((arguments[i__7215__auto___9292]));

var G__9293 = (i__7215__auto___9292 + (1));
i__7215__auto___9292 = G__9293;
continue;
} else {
}
break;
}

var G__9290 = args9288.length;
switch (G__9290) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9288.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args9295 = [];
var len__7214__auto___9298 = arguments.length;
var i__7215__auto___9299 = (0);
while(true){
if((i__7215__auto___9299 < len__7214__auto___9298)){
args9295.push((arguments[i__7215__auto___9299]));

var G__9300 = (i__7215__auto___9299 + (1));
i__7215__auto___9299 = G__9300;
continue;
} else {
}
break;
}

var G__9297 = args9295.length;
switch (G__9297) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9295.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args9302 = [];
var len__7214__auto___9355 = arguments.length;
var i__7215__auto___9356 = (0);
while(true){
if((i__7215__auto___9356 < len__7214__auto___9355)){
args9302.push((arguments[i__7215__auto___9356]));

var G__9357 = (i__7215__auto___9356 + (1));
i__7215__auto___9356 = G__9357;
continue;
} else {
}
break;
}

var G__9304 = args9302.length;
switch (G__9304) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9302.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__8681__auto___9359 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8681__auto___9359,tc,fc){
return (function (){
var f__8682__auto__ = (function (){var switch__8569__auto__ = ((function (c__8681__auto___9359,tc,fc){
return (function (state_9330){
var state_val_9331 = (state_9330[(1)]);
if((state_val_9331 === (7))){
var inst_9326 = (state_9330[(2)]);
var state_9330__$1 = state_9330;
var statearr_9332_9360 = state_9330__$1;
(statearr_9332_9360[(2)] = inst_9326);

(statearr_9332_9360[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9331 === (1))){
var state_9330__$1 = state_9330;
var statearr_9333_9361 = state_9330__$1;
(statearr_9333_9361[(2)] = null);

(statearr_9333_9361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9331 === (4))){
var inst_9307 = (state_9330[(7)]);
var inst_9307__$1 = (state_9330[(2)]);
var inst_9308 = (inst_9307__$1 == null);
var state_9330__$1 = (function (){var statearr_9334 = state_9330;
(statearr_9334[(7)] = inst_9307__$1);

return statearr_9334;
})();
if(cljs.core.truth_(inst_9308)){
var statearr_9335_9362 = state_9330__$1;
(statearr_9335_9362[(1)] = (5));

} else {
var statearr_9336_9363 = state_9330__$1;
(statearr_9336_9363[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9331 === (13))){
var state_9330__$1 = state_9330;
var statearr_9337_9364 = state_9330__$1;
(statearr_9337_9364[(2)] = null);

(statearr_9337_9364[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9331 === (6))){
var inst_9307 = (state_9330[(7)]);
var inst_9313 = p.call(null,inst_9307);
var state_9330__$1 = state_9330;
if(cljs.core.truth_(inst_9313)){
var statearr_9338_9365 = state_9330__$1;
(statearr_9338_9365[(1)] = (9));

} else {
var statearr_9339_9366 = state_9330__$1;
(statearr_9339_9366[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9331 === (3))){
var inst_9328 = (state_9330[(2)]);
var state_9330__$1 = state_9330;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9330__$1,inst_9328);
} else {
if((state_val_9331 === (12))){
var state_9330__$1 = state_9330;
var statearr_9340_9367 = state_9330__$1;
(statearr_9340_9367[(2)] = null);

(statearr_9340_9367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9331 === (2))){
var state_9330__$1 = state_9330;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9330__$1,(4),ch);
} else {
if((state_val_9331 === (11))){
var inst_9307 = (state_9330[(7)]);
var inst_9317 = (state_9330[(2)]);
var state_9330__$1 = state_9330;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9330__$1,(8),inst_9317,inst_9307);
} else {
if((state_val_9331 === (9))){
var state_9330__$1 = state_9330;
var statearr_9341_9368 = state_9330__$1;
(statearr_9341_9368[(2)] = tc);

(statearr_9341_9368[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9331 === (5))){
var inst_9310 = cljs.core.async.close_BANG_.call(null,tc);
var inst_9311 = cljs.core.async.close_BANG_.call(null,fc);
var state_9330__$1 = (function (){var statearr_9342 = state_9330;
(statearr_9342[(8)] = inst_9310);

return statearr_9342;
})();
var statearr_9343_9369 = state_9330__$1;
(statearr_9343_9369[(2)] = inst_9311);

(statearr_9343_9369[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9331 === (14))){
var inst_9324 = (state_9330[(2)]);
var state_9330__$1 = state_9330;
var statearr_9344_9370 = state_9330__$1;
(statearr_9344_9370[(2)] = inst_9324);

(statearr_9344_9370[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9331 === (10))){
var state_9330__$1 = state_9330;
var statearr_9345_9371 = state_9330__$1;
(statearr_9345_9371[(2)] = fc);

(statearr_9345_9371[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9331 === (8))){
var inst_9319 = (state_9330[(2)]);
var state_9330__$1 = state_9330;
if(cljs.core.truth_(inst_9319)){
var statearr_9346_9372 = state_9330__$1;
(statearr_9346_9372[(1)] = (12));

} else {
var statearr_9347_9373 = state_9330__$1;
(statearr_9347_9373[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8681__auto___9359,tc,fc))
;
return ((function (switch__8569__auto__,c__8681__auto___9359,tc,fc){
return (function() {
var cljs$core$async$state_machine__8570__auto__ = null;
var cljs$core$async$state_machine__8570__auto____0 = (function (){
var statearr_9351 = [null,null,null,null,null,null,null,null,null];
(statearr_9351[(0)] = cljs$core$async$state_machine__8570__auto__);

(statearr_9351[(1)] = (1));

return statearr_9351;
});
var cljs$core$async$state_machine__8570__auto____1 = (function (state_9330){
while(true){
var ret_value__8571__auto__ = (function (){try{while(true){
var result__8572__auto__ = switch__8569__auto__.call(null,state_9330);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8572__auto__;
}
break;
}
}catch (e9352){if((e9352 instanceof Object)){
var ex__8573__auto__ = e9352;
var statearr_9353_9374 = state_9330;
(statearr_9353_9374[(5)] = ex__8573__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9330);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9352;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9375 = state_9330;
state_9330 = G__9375;
continue;
} else {
return ret_value__8571__auto__;
}
break;
}
});
cljs$core$async$state_machine__8570__auto__ = function(state_9330){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8570__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8570__auto____1.call(this,state_9330);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8570__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8570__auto____0;
cljs$core$async$state_machine__8570__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8570__auto____1;
return cljs$core$async$state_machine__8570__auto__;
})()
;})(switch__8569__auto__,c__8681__auto___9359,tc,fc))
})();
var state__8683__auto__ = (function (){var statearr_9354 = f__8682__auto__.call(null);
(statearr_9354[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8681__auto___9359);

return statearr_9354;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8683__auto__);
});})(c__8681__auto___9359,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__8681__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8681__auto__){
return (function (){
var f__8682__auto__ = (function (){var switch__8569__auto__ = ((function (c__8681__auto__){
return (function (state_9439){
var state_val_9440 = (state_9439[(1)]);
if((state_val_9440 === (7))){
var inst_9435 = (state_9439[(2)]);
var state_9439__$1 = state_9439;
var statearr_9441_9462 = state_9439__$1;
(statearr_9441_9462[(2)] = inst_9435);

(statearr_9441_9462[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9440 === (1))){
var inst_9419 = init;
var state_9439__$1 = (function (){var statearr_9442 = state_9439;
(statearr_9442[(7)] = inst_9419);

return statearr_9442;
})();
var statearr_9443_9463 = state_9439__$1;
(statearr_9443_9463[(2)] = null);

(statearr_9443_9463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9440 === (4))){
var inst_9422 = (state_9439[(8)]);
var inst_9422__$1 = (state_9439[(2)]);
var inst_9423 = (inst_9422__$1 == null);
var state_9439__$1 = (function (){var statearr_9444 = state_9439;
(statearr_9444[(8)] = inst_9422__$1);

return statearr_9444;
})();
if(cljs.core.truth_(inst_9423)){
var statearr_9445_9464 = state_9439__$1;
(statearr_9445_9464[(1)] = (5));

} else {
var statearr_9446_9465 = state_9439__$1;
(statearr_9446_9465[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9440 === (6))){
var inst_9419 = (state_9439[(7)]);
var inst_9422 = (state_9439[(8)]);
var inst_9426 = (state_9439[(9)]);
var inst_9426__$1 = f.call(null,inst_9419,inst_9422);
var inst_9427 = cljs.core.reduced_QMARK_.call(null,inst_9426__$1);
var state_9439__$1 = (function (){var statearr_9447 = state_9439;
(statearr_9447[(9)] = inst_9426__$1);

return statearr_9447;
})();
if(inst_9427){
var statearr_9448_9466 = state_9439__$1;
(statearr_9448_9466[(1)] = (8));

} else {
var statearr_9449_9467 = state_9439__$1;
(statearr_9449_9467[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9440 === (3))){
var inst_9437 = (state_9439[(2)]);
var state_9439__$1 = state_9439;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9439__$1,inst_9437);
} else {
if((state_val_9440 === (2))){
var state_9439__$1 = state_9439;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9439__$1,(4),ch);
} else {
if((state_val_9440 === (9))){
var inst_9426 = (state_9439[(9)]);
var inst_9419 = inst_9426;
var state_9439__$1 = (function (){var statearr_9450 = state_9439;
(statearr_9450[(7)] = inst_9419);

return statearr_9450;
})();
var statearr_9451_9468 = state_9439__$1;
(statearr_9451_9468[(2)] = null);

(statearr_9451_9468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9440 === (5))){
var inst_9419 = (state_9439[(7)]);
var state_9439__$1 = state_9439;
var statearr_9452_9469 = state_9439__$1;
(statearr_9452_9469[(2)] = inst_9419);

(statearr_9452_9469[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9440 === (10))){
var inst_9433 = (state_9439[(2)]);
var state_9439__$1 = state_9439;
var statearr_9453_9470 = state_9439__$1;
(statearr_9453_9470[(2)] = inst_9433);

(statearr_9453_9470[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9440 === (8))){
var inst_9426 = (state_9439[(9)]);
var inst_9429 = cljs.core.deref.call(null,inst_9426);
var state_9439__$1 = state_9439;
var statearr_9454_9471 = state_9439__$1;
(statearr_9454_9471[(2)] = inst_9429);

(statearr_9454_9471[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__8681__auto__))
;
return ((function (switch__8569__auto__,c__8681__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__8570__auto__ = null;
var cljs$core$async$reduce_$_state_machine__8570__auto____0 = (function (){
var statearr_9458 = [null,null,null,null,null,null,null,null,null,null];
(statearr_9458[(0)] = cljs$core$async$reduce_$_state_machine__8570__auto__);

(statearr_9458[(1)] = (1));

return statearr_9458;
});
var cljs$core$async$reduce_$_state_machine__8570__auto____1 = (function (state_9439){
while(true){
var ret_value__8571__auto__ = (function (){try{while(true){
var result__8572__auto__ = switch__8569__auto__.call(null,state_9439);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8572__auto__;
}
break;
}
}catch (e9459){if((e9459 instanceof Object)){
var ex__8573__auto__ = e9459;
var statearr_9460_9472 = state_9439;
(statearr_9460_9472[(5)] = ex__8573__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9439);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9459;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9473 = state_9439;
state_9439 = G__9473;
continue;
} else {
return ret_value__8571__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__8570__auto__ = function(state_9439){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__8570__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__8570__auto____1.call(this,state_9439);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__8570__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__8570__auto____0;
cljs$core$async$reduce_$_state_machine__8570__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__8570__auto____1;
return cljs$core$async$reduce_$_state_machine__8570__auto__;
})()
;})(switch__8569__auto__,c__8681__auto__))
})();
var state__8683__auto__ = (function (){var statearr_9461 = f__8682__auto__.call(null);
(statearr_9461[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8681__auto__);

return statearr_9461;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8683__auto__);
});})(c__8681__auto__))
);

return c__8681__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args9474 = [];
var len__7214__auto___9526 = arguments.length;
var i__7215__auto___9527 = (0);
while(true){
if((i__7215__auto___9527 < len__7214__auto___9526)){
args9474.push((arguments[i__7215__auto___9527]));

var G__9528 = (i__7215__auto___9527 + (1));
i__7215__auto___9527 = G__9528;
continue;
} else {
}
break;
}

var G__9476 = args9474.length;
switch (G__9476) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9474.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__8681__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8681__auto__){
return (function (){
var f__8682__auto__ = (function (){var switch__8569__auto__ = ((function (c__8681__auto__){
return (function (state_9501){
var state_val_9502 = (state_9501[(1)]);
if((state_val_9502 === (7))){
var inst_9483 = (state_9501[(2)]);
var state_9501__$1 = state_9501;
var statearr_9503_9530 = state_9501__$1;
(statearr_9503_9530[(2)] = inst_9483);

(statearr_9503_9530[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9502 === (1))){
var inst_9477 = cljs.core.seq.call(null,coll);
var inst_9478 = inst_9477;
var state_9501__$1 = (function (){var statearr_9504 = state_9501;
(statearr_9504[(7)] = inst_9478);

return statearr_9504;
})();
var statearr_9505_9531 = state_9501__$1;
(statearr_9505_9531[(2)] = null);

(statearr_9505_9531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9502 === (4))){
var inst_9478 = (state_9501[(7)]);
var inst_9481 = cljs.core.first.call(null,inst_9478);
var state_9501__$1 = state_9501;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9501__$1,(7),ch,inst_9481);
} else {
if((state_val_9502 === (13))){
var inst_9495 = (state_9501[(2)]);
var state_9501__$1 = state_9501;
var statearr_9506_9532 = state_9501__$1;
(statearr_9506_9532[(2)] = inst_9495);

(statearr_9506_9532[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9502 === (6))){
var inst_9486 = (state_9501[(2)]);
var state_9501__$1 = state_9501;
if(cljs.core.truth_(inst_9486)){
var statearr_9507_9533 = state_9501__$1;
(statearr_9507_9533[(1)] = (8));

} else {
var statearr_9508_9534 = state_9501__$1;
(statearr_9508_9534[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9502 === (3))){
var inst_9499 = (state_9501[(2)]);
var state_9501__$1 = state_9501;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9501__$1,inst_9499);
} else {
if((state_val_9502 === (12))){
var state_9501__$1 = state_9501;
var statearr_9509_9535 = state_9501__$1;
(statearr_9509_9535[(2)] = null);

(statearr_9509_9535[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9502 === (2))){
var inst_9478 = (state_9501[(7)]);
var state_9501__$1 = state_9501;
if(cljs.core.truth_(inst_9478)){
var statearr_9510_9536 = state_9501__$1;
(statearr_9510_9536[(1)] = (4));

} else {
var statearr_9511_9537 = state_9501__$1;
(statearr_9511_9537[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9502 === (11))){
var inst_9492 = cljs.core.async.close_BANG_.call(null,ch);
var state_9501__$1 = state_9501;
var statearr_9512_9538 = state_9501__$1;
(statearr_9512_9538[(2)] = inst_9492);

(statearr_9512_9538[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9502 === (9))){
var state_9501__$1 = state_9501;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9513_9539 = state_9501__$1;
(statearr_9513_9539[(1)] = (11));

} else {
var statearr_9514_9540 = state_9501__$1;
(statearr_9514_9540[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9502 === (5))){
var inst_9478 = (state_9501[(7)]);
var state_9501__$1 = state_9501;
var statearr_9515_9541 = state_9501__$1;
(statearr_9515_9541[(2)] = inst_9478);

(statearr_9515_9541[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9502 === (10))){
var inst_9497 = (state_9501[(2)]);
var state_9501__$1 = state_9501;
var statearr_9516_9542 = state_9501__$1;
(statearr_9516_9542[(2)] = inst_9497);

(statearr_9516_9542[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9502 === (8))){
var inst_9478 = (state_9501[(7)]);
var inst_9488 = cljs.core.next.call(null,inst_9478);
var inst_9478__$1 = inst_9488;
var state_9501__$1 = (function (){var statearr_9517 = state_9501;
(statearr_9517[(7)] = inst_9478__$1);

return statearr_9517;
})();
var statearr_9518_9543 = state_9501__$1;
(statearr_9518_9543[(2)] = null);

(statearr_9518_9543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8681__auto__))
;
return ((function (switch__8569__auto__,c__8681__auto__){
return (function() {
var cljs$core$async$state_machine__8570__auto__ = null;
var cljs$core$async$state_machine__8570__auto____0 = (function (){
var statearr_9522 = [null,null,null,null,null,null,null,null];
(statearr_9522[(0)] = cljs$core$async$state_machine__8570__auto__);

(statearr_9522[(1)] = (1));

return statearr_9522;
});
var cljs$core$async$state_machine__8570__auto____1 = (function (state_9501){
while(true){
var ret_value__8571__auto__ = (function (){try{while(true){
var result__8572__auto__ = switch__8569__auto__.call(null,state_9501);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8572__auto__;
}
break;
}
}catch (e9523){if((e9523 instanceof Object)){
var ex__8573__auto__ = e9523;
var statearr_9524_9544 = state_9501;
(statearr_9524_9544[(5)] = ex__8573__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9501);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9523;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9545 = state_9501;
state_9501 = G__9545;
continue;
} else {
return ret_value__8571__auto__;
}
break;
}
});
cljs$core$async$state_machine__8570__auto__ = function(state_9501){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8570__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8570__auto____1.call(this,state_9501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8570__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8570__auto____0;
cljs$core$async$state_machine__8570__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8570__auto____1;
return cljs$core$async$state_machine__8570__auto__;
})()
;})(switch__8569__auto__,c__8681__auto__))
})();
var state__8683__auto__ = (function (){var statearr_9525 = f__8682__auto__.call(null);
(statearr_9525[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8681__auto__);

return statearr_9525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8683__auto__);
});})(c__8681__auto__))
);

return c__8681__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__6811__auto__ = (((_ == null))?null:_);
var m__6812__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return m__6812__auto__.call(null,_);
} else {
var m__6812__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return m__6812__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__6811__auto__ = (((m == null))?null:m);
var m__6812__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return m__6812__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__6812__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return m__6812__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__6811__auto__ = (((m == null))?null:m);
var m__6812__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return m__6812__auto__.call(null,m,ch);
} else {
var m__6812__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return m__6812__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__6811__auto__ = (((m == null))?null:m);
var m__6812__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return m__6812__auto__.call(null,m);
} else {
var m__6812__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return m__6812__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async9767 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9767 = (function (mult,ch,cs,meta9768){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta9768 = meta9768;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9767.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_9769,meta9768__$1){
var self__ = this;
var _9769__$1 = this;
return (new cljs.core.async.t_cljs$core$async9767(self__.mult,self__.ch,self__.cs,meta9768__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async9767.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_9769){
var self__ = this;
var _9769__$1 = this;
return self__.meta9768;
});})(cs))
;

cljs.core.async.t_cljs$core$async9767.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async9767.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async9767.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async9767.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async9767.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async9767.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async9767.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta9768","meta9768",1054477207,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async9767.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9767.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9767";

cljs.core.async.t_cljs$core$async9767.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async9767");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async9767 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async9767(mult__$1,ch__$1,cs__$1,meta9768){
return (new cljs.core.async.t_cljs$core$async9767(mult__$1,ch__$1,cs__$1,meta9768));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async9767(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__8681__auto___9988 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8681__auto___9988,cs,m,dchan,dctr,done){
return (function (){
var f__8682__auto__ = (function (){var switch__8569__auto__ = ((function (c__8681__auto___9988,cs,m,dchan,dctr,done){
return (function (state_9900){
var state_val_9901 = (state_9900[(1)]);
if((state_val_9901 === (7))){
var inst_9896 = (state_9900[(2)]);
var state_9900__$1 = state_9900;
var statearr_9902_9989 = state_9900__$1;
(statearr_9902_9989[(2)] = inst_9896);

(statearr_9902_9989[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9901 === (20))){
var inst_9801 = (state_9900[(7)]);
var inst_9811 = cljs.core.first.call(null,inst_9801);
var inst_9812 = cljs.core.nth.call(null,inst_9811,(0),null);
var inst_9813 = cljs.core.nth.call(null,inst_9811,(1),null);
var state_9900__$1 = (function (){var statearr_9903 = state_9900;
(statearr_9903[(8)] = inst_9812);

return statearr_9903;
})();
if(cljs.core.truth_(inst_9813)){
var statearr_9904_9990 = state_9900__$1;
(statearr_9904_9990[(1)] = (22));

} else {
var statearr_9905_9991 = state_9900__$1;
(statearr_9905_9991[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9901 === (27))){
var inst_9841 = (state_9900[(9)]);
var inst_9843 = (state_9900[(10)]);
var inst_9772 = (state_9900[(11)]);
var inst_9848 = (state_9900[(12)]);
var inst_9848__$1 = cljs.core._nth.call(null,inst_9841,inst_9843);
var inst_9849 = cljs.core.async.put_BANG_.call(null,inst_9848__$1,inst_9772,done);
var state_9900__$1 = (function (){var statearr_9906 = state_9900;
(statearr_9906[(12)] = inst_9848__$1);

return statearr_9906;
})();
if(cljs.core.truth_(inst_9849)){
var statearr_9907_9992 = state_9900__$1;
(statearr_9907_9992[(1)] = (30));

} else {
var statearr_9908_9993 = state_9900__$1;
(statearr_9908_9993[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9901 === (1))){
var state_9900__$1 = state_9900;
var statearr_9909_9994 = state_9900__$1;
(statearr_9909_9994[(2)] = null);

(statearr_9909_9994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9901 === (24))){
var inst_9801 = (state_9900[(7)]);
var inst_9818 = (state_9900[(2)]);
var inst_9819 = cljs.core.next.call(null,inst_9801);
var inst_9781 = inst_9819;
var inst_9782 = null;
var inst_9783 = (0);
var inst_9784 = (0);
var state_9900__$1 = (function (){var statearr_9910 = state_9900;
(statearr_9910[(13)] = inst_9783);

(statearr_9910[(14)] = inst_9784);

(statearr_9910[(15)] = inst_9781);

(statearr_9910[(16)] = inst_9818);

(statearr_9910[(17)] = inst_9782);

return statearr_9910;
})();
var statearr_9911_9995 = state_9900__$1;
(statearr_9911_9995[(2)] = null);

(statearr_9911_9995[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9901 === (39))){
var state_9900__$1 = state_9900;
var statearr_9915_9996 = state_9900__$1;
(statearr_9915_9996[(2)] = null);

(statearr_9915_9996[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9901 === (4))){
var inst_9772 = (state_9900[(11)]);
var inst_9772__$1 = (state_9900[(2)]);
var inst_9773 = (inst_9772__$1 == null);
var state_9900__$1 = (function (){var statearr_9916 = state_9900;
(statearr_9916[(11)] = inst_9772__$1);

return statearr_9916;
})();
if(cljs.core.truth_(inst_9773)){
var statearr_9917_9997 = state_9900__$1;
(statearr_9917_9997[(1)] = (5));

} else {
var statearr_9918_9998 = state_9900__$1;
(statearr_9918_9998[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9901 === (15))){
var inst_9783 = (state_9900[(13)]);
var inst_9784 = (state_9900[(14)]);
var inst_9781 = (state_9900[(15)]);
var inst_9782 = (state_9900[(17)]);
var inst_9797 = (state_9900[(2)]);
var inst_9798 = (inst_9784 + (1));
var tmp9912 = inst_9783;
var tmp9913 = inst_9781;
var tmp9914 = inst_9782;
var inst_9781__$1 = tmp9913;
var inst_9782__$1 = tmp9914;
var inst_9783__$1 = tmp9912;
var inst_9784__$1 = inst_9798;
var state_9900__$1 = (function (){var statearr_9919 = state_9900;
(statearr_9919[(13)] = inst_9783__$1);

(statearr_9919[(14)] = inst_9784__$1);

(statearr_9919[(15)] = inst_9781__$1);

(statearr_9919[(18)] = inst_9797);

(statearr_9919[(17)] = inst_9782__$1);

return statearr_9919;
})();
var statearr_9920_9999 = state_9900__$1;
(statearr_9920_9999[(2)] = null);

(statearr_9920_9999[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9901 === (21))){
var inst_9822 = (state_9900[(2)]);
var state_9900__$1 = state_9900;
var statearr_9924_10000 = state_9900__$1;
(statearr_9924_10000[(2)] = inst_9822);

(statearr_9924_10000[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9901 === (31))){
var inst_9848 = (state_9900[(12)]);
var inst_9852 = done.call(null,null);
var inst_9853 = cljs.core.async.untap_STAR_.call(null,m,inst_9848);
var state_9900__$1 = (function (){var statearr_9925 = state_9900;
(statearr_9925[(19)] = inst_9852);

return statearr_9925;
})();
var statearr_9926_10001 = state_9900__$1;
(statearr_9926_10001[(2)] = inst_9853);

(statearr_9926_10001[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9901 === (32))){
var inst_9840 = (state_9900[(20)]);
var inst_9841 = (state_9900[(9)]);
var inst_9842 = (state_9900[(21)]);
var inst_9843 = (state_9900[(10)]);
var inst_9855 = (state_9900[(2)]);
var inst_9856 = (inst_9843 + (1));
var tmp9921 = inst_9840;
var tmp9922 = inst_9841;
var tmp9923 = inst_9842;
var inst_9840__$1 = tmp9921;
var inst_9841__$1 = tmp9922;
var inst_9842__$1 = tmp9923;
var inst_9843__$1 = inst_9856;
var state_9900__$1 = (function (){var statearr_9927 = state_9900;
(statearr_9927[(20)] = inst_9840__$1);

(statearr_9927[(9)] = inst_9841__$1);

(statearr_9927[(21)] = inst_9842__$1);

(statearr_9927[(10)] = inst_9843__$1);

(statearr_9927[(22)] = inst_9855);

return statearr_9927;
})();
var statearr_9928_10002 = state_9900__$1;
(statearr_9928_10002[(2)] = null);

(statearr_9928_10002[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9901 === (40))){
var inst_9868 = (state_9900[(23)]);
var inst_9872 = done.call(null,null);
var inst_9873 = cljs.core.async.untap_STAR_.call(null,m,inst_9868);
var state_9900__$1 = (function (){var statearr_9929 = state_9900;
(statearr_9929[(24)] = inst_9872);

return statearr_9929;
})();
var statearr_9930_10003 = state_9900__$1;
(statearr_9930_10003[(2)] = inst_9873);

(statearr_9930_10003[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9901 === (33))){
var inst_9859 = (state_9900[(25)]);
var inst_9861 = cljs.core.chunked_seq_QMARK_.call(null,inst_9859);
var state_9900__$1 = state_9900;
if(inst_9861){
var statearr_9931_10004 = state_9900__$1;
(statearr_9931_10004[(1)] = (36));

} else {
var statearr_9932_10005 = state_9900__$1;
(statearr_9932_10005[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9901 === (13))){
var inst_9791 = (state_9900[(26)]);
var inst_9794 = cljs.core.async.close_BANG_.call(null,inst_9791);
var state_9900__$1 = state_9900;
var statearr_9933_10006 = state_9900__$1;
(statearr_9933_10006[(2)] = inst_9794);

(statearr_9933_10006[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9901 === (22))){
var inst_9812 = (state_9900[(8)]);
var inst_9815 = cljs.core.async.close_BANG_.call(null,inst_9812);
var state_9900__$1 = state_9900;
var statearr_9934_10007 = state_9900__$1;
(statearr_9934_10007[(2)] = inst_9815);

(statearr_9934_10007[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9901 === (36))){
var inst_9859 = (state_9900[(25)]);
var inst_9863 = cljs.core.chunk_first.call(null,inst_9859);
var inst_9864 = cljs.core.chunk_rest.call(null,inst_9859);
var inst_9865 = cljs.core.count.call(null,inst_9863);
var inst_9840 = inst_9864;
var inst_9841 = inst_9863;
var inst_9842 = inst_9865;
var inst_9843 = (0);
var state_9900__$1 = (function (){var statearr_9935 = state_9900;
(statearr_9935[(20)] = inst_9840);

(statearr_9935[(9)] = inst_9841);

(statearr_9935[(21)] = inst_9842);

(statearr_9935[(10)] = inst_9843);

return statearr_9935;
})();
var statearr_9936_10008 = state_9900__$1;
(statearr_9936_10008[(2)] = null);

(statearr_9936_10008[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9901 === (41))){
var inst_9859 = (state_9900[(25)]);
var inst_9875 = (state_9900[(2)]);
var inst_9876 = cljs.core.next.call(null,inst_9859);
var inst_9840 = inst_9876;
var inst_9841 = null;
var inst_9842 = (0);
var inst_9843 = (0);
var state_9900__$1 = (function (){var statearr_9937 = state_9900;
(statearr_9937[(27)] = inst_9875);

(statearr_9937[(20)] = inst_9840);

(statearr_9937[(9)] = inst_9841);

(statearr_9937[(21)] = inst_9842);

(statearr_9937[(10)] = inst_9843);

return statearr_9937;
})();
var statearr_9938_10009 = state_9900__$1;
(statearr_9938_10009[(2)] = null);

(statearr_9938_10009[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9901 === (43))){
var state_9900__$1 = state_9900;
var statearr_9939_10010 = state_9900__$1;
(statearr_9939_10010[(2)] = null);

(statearr_9939_10010[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9901 === (29))){
var inst_9884 = (state_9900[(2)]);
var state_9900__$1 = state_9900;
var statearr_9940_10011 = state_9900__$1;
(statearr_9940_10011[(2)] = inst_9884);

(statearr_9940_10011[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9901 === (44))){
var inst_9893 = (state_9900[(2)]);
var state_9900__$1 = (function (){var statearr_9941 = state_9900;
(statearr_9941[(28)] = inst_9893);

return statearr_9941;
})();
var statearr_9942_10012 = state_9900__$1;
(statearr_9942_10012[(2)] = null);

(statearr_9942_10012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9901 === (6))){
var inst_9832 = (state_9900[(29)]);
var inst_9831 = cljs.core.deref.call(null,cs);
var inst_9832__$1 = cljs.core.keys.call(null,inst_9831);
var inst_9833 = cljs.core.count.call(null,inst_9832__$1);
var inst_9834 = cljs.core.reset_BANG_.call(null,dctr,inst_9833);
var inst_9839 = cljs.core.seq.call(null,inst_9832__$1);
var inst_9840 = inst_9839;
var inst_9841 = null;
var inst_9842 = (0);
var inst_9843 = (0);
var state_9900__$1 = (function (){var statearr_9943 = state_9900;
(statearr_9943[(30)] = inst_9834);

(statearr_9943[(20)] = inst_9840);

(statearr_9943[(9)] = inst_9841);

(statearr_9943[(21)] = inst_9842);

(statearr_9943[(10)] = inst_9843);

(statearr_9943[(29)] = inst_9832__$1);

return statearr_9943;
})();
var statearr_9944_10013 = state_9900__$1;
(statearr_9944_10013[(2)] = null);

(statearr_9944_10013[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9901 === (28))){
var inst_9859 = (state_9900[(25)]);
var inst_9840 = (state_9900[(20)]);
var inst_9859__$1 = cljs.core.seq.call(null,inst_9840);
var state_9900__$1 = (function (){var statearr_9945 = state_9900;
(statearr_9945[(25)] = inst_9859__$1);

return statearr_9945;
})();
if(inst_9859__$1){
var statearr_9946_10014 = state_9900__$1;
(statearr_9946_10014[(1)] = (33));

} else {
var statearr_9947_10015 = state_9900__$1;
(statearr_9947_10015[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9901 === (25))){
var inst_9842 = (state_9900[(21)]);
var inst_9843 = (state_9900[(10)]);
var inst_9845 = (inst_9843 < inst_9842);
var inst_9846 = inst_9845;
var state_9900__$1 = state_9900;
if(cljs.core.truth_(inst_9846)){
var statearr_9948_10016 = state_9900__$1;
(statearr_9948_10016[(1)] = (27));

} else {
var statearr_9949_10017 = state_9900__$1;
(statearr_9949_10017[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9901 === (34))){
var state_9900__$1 = state_9900;
var statearr_9950_10018 = state_9900__$1;
(statearr_9950_10018[(2)] = null);

(statearr_9950_10018[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9901 === (17))){
var state_9900__$1 = state_9900;
var statearr_9951_10019 = state_9900__$1;
(statearr_9951_10019[(2)] = null);

(statearr_9951_10019[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9901 === (3))){
var inst_9898 = (state_9900[(2)]);
var state_9900__$1 = state_9900;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9900__$1,inst_9898);
} else {
if((state_val_9901 === (12))){
var inst_9827 = (state_9900[(2)]);
var state_9900__$1 = state_9900;
var statearr_9952_10020 = state_9900__$1;
(statearr_9952_10020[(2)] = inst_9827);

(statearr_9952_10020[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9901 === (2))){
var state_9900__$1 = state_9900;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9900__$1,(4),ch);
} else {
if((state_val_9901 === (23))){
var state_9900__$1 = state_9900;
var statearr_9953_10021 = state_9900__$1;
(statearr_9953_10021[(2)] = null);

(statearr_9953_10021[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9901 === (35))){
var inst_9882 = (state_9900[(2)]);
var state_9900__$1 = state_9900;
var statearr_9954_10022 = state_9900__$1;
(statearr_9954_10022[(2)] = inst_9882);

(statearr_9954_10022[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9901 === (19))){
var inst_9801 = (state_9900[(7)]);
var inst_9805 = cljs.core.chunk_first.call(null,inst_9801);
var inst_9806 = cljs.core.chunk_rest.call(null,inst_9801);
var inst_9807 = cljs.core.count.call(null,inst_9805);
var inst_9781 = inst_9806;
var inst_9782 = inst_9805;
var inst_9783 = inst_9807;
var inst_9784 = (0);
var state_9900__$1 = (function (){var statearr_9955 = state_9900;
(statearr_9955[(13)] = inst_9783);

(statearr_9955[(14)] = inst_9784);

(statearr_9955[(15)] = inst_9781);

(statearr_9955[(17)] = inst_9782);

return statearr_9955;
})();
var statearr_9956_10023 = state_9900__$1;
(statearr_9956_10023[(2)] = null);

(statearr_9956_10023[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9901 === (11))){
var inst_9781 = (state_9900[(15)]);
var inst_9801 = (state_9900[(7)]);
var inst_9801__$1 = cljs.core.seq.call(null,inst_9781);
var state_9900__$1 = (function (){var statearr_9957 = state_9900;
(statearr_9957[(7)] = inst_9801__$1);

return statearr_9957;
})();
if(inst_9801__$1){
var statearr_9958_10024 = state_9900__$1;
(statearr_9958_10024[(1)] = (16));

} else {
var statearr_9959_10025 = state_9900__$1;
(statearr_9959_10025[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9901 === (9))){
var inst_9829 = (state_9900[(2)]);
var state_9900__$1 = state_9900;
var statearr_9960_10026 = state_9900__$1;
(statearr_9960_10026[(2)] = inst_9829);

(statearr_9960_10026[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9901 === (5))){
var inst_9779 = cljs.core.deref.call(null,cs);
var inst_9780 = cljs.core.seq.call(null,inst_9779);
var inst_9781 = inst_9780;
var inst_9782 = null;
var inst_9783 = (0);
var inst_9784 = (0);
var state_9900__$1 = (function (){var statearr_9961 = state_9900;
(statearr_9961[(13)] = inst_9783);

(statearr_9961[(14)] = inst_9784);

(statearr_9961[(15)] = inst_9781);

(statearr_9961[(17)] = inst_9782);

return statearr_9961;
})();
var statearr_9962_10027 = state_9900__$1;
(statearr_9962_10027[(2)] = null);

(statearr_9962_10027[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9901 === (14))){
var state_9900__$1 = state_9900;
var statearr_9963_10028 = state_9900__$1;
(statearr_9963_10028[(2)] = null);

(statearr_9963_10028[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9901 === (45))){
var inst_9890 = (state_9900[(2)]);
var state_9900__$1 = state_9900;
var statearr_9964_10029 = state_9900__$1;
(statearr_9964_10029[(2)] = inst_9890);

(statearr_9964_10029[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9901 === (26))){
var inst_9832 = (state_9900[(29)]);
var inst_9886 = (state_9900[(2)]);
var inst_9887 = cljs.core.seq.call(null,inst_9832);
var state_9900__$1 = (function (){var statearr_9965 = state_9900;
(statearr_9965[(31)] = inst_9886);

return statearr_9965;
})();
if(inst_9887){
var statearr_9966_10030 = state_9900__$1;
(statearr_9966_10030[(1)] = (42));

} else {
var statearr_9967_10031 = state_9900__$1;
(statearr_9967_10031[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9901 === (16))){
var inst_9801 = (state_9900[(7)]);
var inst_9803 = cljs.core.chunked_seq_QMARK_.call(null,inst_9801);
var state_9900__$1 = state_9900;
if(inst_9803){
var statearr_9968_10032 = state_9900__$1;
(statearr_9968_10032[(1)] = (19));

} else {
var statearr_9969_10033 = state_9900__$1;
(statearr_9969_10033[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9901 === (38))){
var inst_9879 = (state_9900[(2)]);
var state_9900__$1 = state_9900;
var statearr_9970_10034 = state_9900__$1;
(statearr_9970_10034[(2)] = inst_9879);

(statearr_9970_10034[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9901 === (30))){
var state_9900__$1 = state_9900;
var statearr_9971_10035 = state_9900__$1;
(statearr_9971_10035[(2)] = null);

(statearr_9971_10035[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9901 === (10))){
var inst_9784 = (state_9900[(14)]);
var inst_9782 = (state_9900[(17)]);
var inst_9790 = cljs.core._nth.call(null,inst_9782,inst_9784);
var inst_9791 = cljs.core.nth.call(null,inst_9790,(0),null);
var inst_9792 = cljs.core.nth.call(null,inst_9790,(1),null);
var state_9900__$1 = (function (){var statearr_9972 = state_9900;
(statearr_9972[(26)] = inst_9791);

return statearr_9972;
})();
if(cljs.core.truth_(inst_9792)){
var statearr_9973_10036 = state_9900__$1;
(statearr_9973_10036[(1)] = (13));

} else {
var statearr_9974_10037 = state_9900__$1;
(statearr_9974_10037[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9901 === (18))){
var inst_9825 = (state_9900[(2)]);
var state_9900__$1 = state_9900;
var statearr_9975_10038 = state_9900__$1;
(statearr_9975_10038[(2)] = inst_9825);

(statearr_9975_10038[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9901 === (42))){
var state_9900__$1 = state_9900;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9900__$1,(45),dchan);
} else {
if((state_val_9901 === (37))){
var inst_9859 = (state_9900[(25)]);
var inst_9868 = (state_9900[(23)]);
var inst_9772 = (state_9900[(11)]);
var inst_9868__$1 = cljs.core.first.call(null,inst_9859);
var inst_9869 = cljs.core.async.put_BANG_.call(null,inst_9868__$1,inst_9772,done);
var state_9900__$1 = (function (){var statearr_9976 = state_9900;
(statearr_9976[(23)] = inst_9868__$1);

return statearr_9976;
})();
if(cljs.core.truth_(inst_9869)){
var statearr_9977_10039 = state_9900__$1;
(statearr_9977_10039[(1)] = (39));

} else {
var statearr_9978_10040 = state_9900__$1;
(statearr_9978_10040[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9901 === (8))){
var inst_9783 = (state_9900[(13)]);
var inst_9784 = (state_9900[(14)]);
var inst_9786 = (inst_9784 < inst_9783);
var inst_9787 = inst_9786;
var state_9900__$1 = state_9900;
if(cljs.core.truth_(inst_9787)){
var statearr_9979_10041 = state_9900__$1;
(statearr_9979_10041[(1)] = (10));

} else {
var statearr_9980_10042 = state_9900__$1;
(statearr_9980_10042[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8681__auto___9988,cs,m,dchan,dctr,done))
;
return ((function (switch__8569__auto__,c__8681__auto___9988,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__8570__auto__ = null;
var cljs$core$async$mult_$_state_machine__8570__auto____0 = (function (){
var statearr_9984 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9984[(0)] = cljs$core$async$mult_$_state_machine__8570__auto__);

(statearr_9984[(1)] = (1));

return statearr_9984;
});
var cljs$core$async$mult_$_state_machine__8570__auto____1 = (function (state_9900){
while(true){
var ret_value__8571__auto__ = (function (){try{while(true){
var result__8572__auto__ = switch__8569__auto__.call(null,state_9900);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8572__auto__;
}
break;
}
}catch (e9985){if((e9985 instanceof Object)){
var ex__8573__auto__ = e9985;
var statearr_9986_10043 = state_9900;
(statearr_9986_10043[(5)] = ex__8573__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9900);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9985;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10044 = state_9900;
state_9900 = G__10044;
continue;
} else {
return ret_value__8571__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__8570__auto__ = function(state_9900){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__8570__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__8570__auto____1.call(this,state_9900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__8570__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__8570__auto____0;
cljs$core$async$mult_$_state_machine__8570__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__8570__auto____1;
return cljs$core$async$mult_$_state_machine__8570__auto__;
})()
;})(switch__8569__auto__,c__8681__auto___9988,cs,m,dchan,dctr,done))
})();
var state__8683__auto__ = (function (){var statearr_9987 = f__8682__auto__.call(null);
(statearr_9987[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8681__auto___9988);

return statearr_9987;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8683__auto__);
});})(c__8681__auto___9988,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args10045 = [];
var len__7214__auto___10048 = arguments.length;
var i__7215__auto___10049 = (0);
while(true){
if((i__7215__auto___10049 < len__7214__auto___10048)){
args10045.push((arguments[i__7215__auto___10049]));

var G__10050 = (i__7215__auto___10049 + (1));
i__7215__auto___10049 = G__10050;
continue;
} else {
}
break;
}

var G__10047 = args10045.length;
switch (G__10047) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10045.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__6811__auto__ = (((m == null))?null:m);
var m__6812__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return m__6812__auto__.call(null,m,ch);
} else {
var m__6812__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return m__6812__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__6811__auto__ = (((m == null))?null:m);
var m__6812__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return m__6812__auto__.call(null,m,ch);
} else {
var m__6812__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return m__6812__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__6811__auto__ = (((m == null))?null:m);
var m__6812__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return m__6812__auto__.call(null,m);
} else {
var m__6812__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return m__6812__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__6811__auto__ = (((m == null))?null:m);
var m__6812__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return m__6812__auto__.call(null,m,state_map);
} else {
var m__6812__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return m__6812__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__6811__auto__ = (((m == null))?null:m);
var m__6812__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return m__6812__auto__.call(null,m,mode);
} else {
var m__6812__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return m__6812__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__7221__auto__ = [];
var len__7214__auto___10062 = arguments.length;
var i__7215__auto___10063 = (0);
while(true){
if((i__7215__auto___10063 < len__7214__auto___10062)){
args__7221__auto__.push((arguments[i__7215__auto___10063]));

var G__10064 = (i__7215__auto___10063 + (1));
i__7215__auto___10063 = G__10064;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((3) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7222__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__10056){
var map__10057 = p__10056;
var map__10057__$1 = ((((!((map__10057 == null)))?((((map__10057.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10057.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10057):map__10057);
var opts = map__10057__$1;
var statearr_10059_10065 = state;
(statearr_10059_10065[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__10057,map__10057__$1,opts){
return (function (val){
var statearr_10060_10066 = state;
(statearr_10060_10066[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__10057,map__10057__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_10061_10067 = state;
(statearr_10061_10067[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq10052){
var G__10053 = cljs.core.first.call(null,seq10052);
var seq10052__$1 = cljs.core.next.call(null,seq10052);
var G__10054 = cljs.core.first.call(null,seq10052__$1);
var seq10052__$2 = cljs.core.next.call(null,seq10052__$1);
var G__10055 = cljs.core.first.call(null,seq10052__$2);
var seq10052__$3 = cljs.core.next.call(null,seq10052__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__10053,G__10054,G__10055,seq10052__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async10231 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10231 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta10232){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta10232 = meta10232;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10231.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10233,meta10232__$1){
var self__ = this;
var _10233__$1 = this;
return (new cljs.core.async.t_cljs$core$async10231(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta10232__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10231.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10233){
var self__ = this;
var _10233__$1 = this;
return self__.meta10232;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10231.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async10231.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10231.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async10231.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10231.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10231.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10231.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10231.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10231.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta10232","meta10232",1734047419,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10231.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10231.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10231";

cljs.core.async.t_cljs$core$async10231.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async10231");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async10231 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async10231(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta10232){
return (new cljs.core.async.t_cljs$core$async10231(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta10232));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async10231(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__8681__auto___10394 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8681__auto___10394,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__8682__auto__ = (function (){var switch__8569__auto__ = ((function (c__8681__auto___10394,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_10331){
var state_val_10332 = (state_10331[(1)]);
if((state_val_10332 === (7))){
var inst_10249 = (state_10331[(2)]);
var state_10331__$1 = state_10331;
var statearr_10333_10395 = state_10331__$1;
(statearr_10333_10395[(2)] = inst_10249);

(statearr_10333_10395[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10332 === (20))){
var inst_10261 = (state_10331[(7)]);
var state_10331__$1 = state_10331;
var statearr_10334_10396 = state_10331__$1;
(statearr_10334_10396[(2)] = inst_10261);

(statearr_10334_10396[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10332 === (27))){
var state_10331__$1 = state_10331;
var statearr_10335_10397 = state_10331__$1;
(statearr_10335_10397[(2)] = null);

(statearr_10335_10397[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10332 === (1))){
var inst_10237 = (state_10331[(8)]);
var inst_10237__$1 = calc_state.call(null);
var inst_10239 = (inst_10237__$1 == null);
var inst_10240 = cljs.core.not.call(null,inst_10239);
var state_10331__$1 = (function (){var statearr_10336 = state_10331;
(statearr_10336[(8)] = inst_10237__$1);

return statearr_10336;
})();
if(inst_10240){
var statearr_10337_10398 = state_10331__$1;
(statearr_10337_10398[(1)] = (2));

} else {
var statearr_10338_10399 = state_10331__$1;
(statearr_10338_10399[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10332 === (24))){
var inst_10284 = (state_10331[(9)]);
var inst_10305 = (state_10331[(10)]);
var inst_10291 = (state_10331[(11)]);
var inst_10305__$1 = inst_10284.call(null,inst_10291);
var state_10331__$1 = (function (){var statearr_10339 = state_10331;
(statearr_10339[(10)] = inst_10305__$1);

return statearr_10339;
})();
if(cljs.core.truth_(inst_10305__$1)){
var statearr_10340_10400 = state_10331__$1;
(statearr_10340_10400[(1)] = (29));

} else {
var statearr_10341_10401 = state_10331__$1;
(statearr_10341_10401[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10332 === (4))){
var inst_10252 = (state_10331[(2)]);
var state_10331__$1 = state_10331;
if(cljs.core.truth_(inst_10252)){
var statearr_10342_10402 = state_10331__$1;
(statearr_10342_10402[(1)] = (8));

} else {
var statearr_10343_10403 = state_10331__$1;
(statearr_10343_10403[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10332 === (15))){
var inst_10278 = (state_10331[(2)]);
var state_10331__$1 = state_10331;
if(cljs.core.truth_(inst_10278)){
var statearr_10344_10404 = state_10331__$1;
(statearr_10344_10404[(1)] = (19));

} else {
var statearr_10345_10405 = state_10331__$1;
(statearr_10345_10405[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10332 === (21))){
var inst_10283 = (state_10331[(12)]);
var inst_10283__$1 = (state_10331[(2)]);
var inst_10284 = cljs.core.get.call(null,inst_10283__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_10285 = cljs.core.get.call(null,inst_10283__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_10286 = cljs.core.get.call(null,inst_10283__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_10331__$1 = (function (){var statearr_10346 = state_10331;
(statearr_10346[(9)] = inst_10284);

(statearr_10346[(12)] = inst_10283__$1);

(statearr_10346[(13)] = inst_10285);

return statearr_10346;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_10331__$1,(22),inst_10286);
} else {
if((state_val_10332 === (31))){
var inst_10313 = (state_10331[(2)]);
var state_10331__$1 = state_10331;
if(cljs.core.truth_(inst_10313)){
var statearr_10347_10406 = state_10331__$1;
(statearr_10347_10406[(1)] = (32));

} else {
var statearr_10348_10407 = state_10331__$1;
(statearr_10348_10407[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10332 === (32))){
var inst_10290 = (state_10331[(14)]);
var state_10331__$1 = state_10331;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10331__$1,(35),out,inst_10290);
} else {
if((state_val_10332 === (33))){
var inst_10283 = (state_10331[(12)]);
var inst_10261 = inst_10283;
var state_10331__$1 = (function (){var statearr_10349 = state_10331;
(statearr_10349[(7)] = inst_10261);

return statearr_10349;
})();
var statearr_10350_10408 = state_10331__$1;
(statearr_10350_10408[(2)] = null);

(statearr_10350_10408[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10332 === (13))){
var inst_10261 = (state_10331[(7)]);
var inst_10268 = inst_10261.cljs$lang$protocol_mask$partition0$;
var inst_10269 = (inst_10268 & (64));
var inst_10270 = inst_10261.cljs$core$ISeq$;
var inst_10271 = (inst_10269) || (inst_10270);
var state_10331__$1 = state_10331;
if(cljs.core.truth_(inst_10271)){
var statearr_10351_10409 = state_10331__$1;
(statearr_10351_10409[(1)] = (16));

} else {
var statearr_10352_10410 = state_10331__$1;
(statearr_10352_10410[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10332 === (22))){
var inst_10290 = (state_10331[(14)]);
var inst_10291 = (state_10331[(11)]);
var inst_10289 = (state_10331[(2)]);
var inst_10290__$1 = cljs.core.nth.call(null,inst_10289,(0),null);
var inst_10291__$1 = cljs.core.nth.call(null,inst_10289,(1),null);
var inst_10292 = (inst_10290__$1 == null);
var inst_10293 = cljs.core._EQ_.call(null,inst_10291__$1,change);
var inst_10294 = (inst_10292) || (inst_10293);
var state_10331__$1 = (function (){var statearr_10353 = state_10331;
(statearr_10353[(14)] = inst_10290__$1);

(statearr_10353[(11)] = inst_10291__$1);

return statearr_10353;
})();
if(cljs.core.truth_(inst_10294)){
var statearr_10354_10411 = state_10331__$1;
(statearr_10354_10411[(1)] = (23));

} else {
var statearr_10355_10412 = state_10331__$1;
(statearr_10355_10412[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10332 === (36))){
var inst_10283 = (state_10331[(12)]);
var inst_10261 = inst_10283;
var state_10331__$1 = (function (){var statearr_10356 = state_10331;
(statearr_10356[(7)] = inst_10261);

return statearr_10356;
})();
var statearr_10357_10413 = state_10331__$1;
(statearr_10357_10413[(2)] = null);

(statearr_10357_10413[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10332 === (29))){
var inst_10305 = (state_10331[(10)]);
var state_10331__$1 = state_10331;
var statearr_10358_10414 = state_10331__$1;
(statearr_10358_10414[(2)] = inst_10305);

(statearr_10358_10414[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10332 === (6))){
var state_10331__$1 = state_10331;
var statearr_10359_10415 = state_10331__$1;
(statearr_10359_10415[(2)] = false);

(statearr_10359_10415[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10332 === (28))){
var inst_10301 = (state_10331[(2)]);
var inst_10302 = calc_state.call(null);
var inst_10261 = inst_10302;
var state_10331__$1 = (function (){var statearr_10360 = state_10331;
(statearr_10360[(7)] = inst_10261);

(statearr_10360[(15)] = inst_10301);

return statearr_10360;
})();
var statearr_10361_10416 = state_10331__$1;
(statearr_10361_10416[(2)] = null);

(statearr_10361_10416[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10332 === (25))){
var inst_10327 = (state_10331[(2)]);
var state_10331__$1 = state_10331;
var statearr_10362_10417 = state_10331__$1;
(statearr_10362_10417[(2)] = inst_10327);

(statearr_10362_10417[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10332 === (34))){
var inst_10325 = (state_10331[(2)]);
var state_10331__$1 = state_10331;
var statearr_10363_10418 = state_10331__$1;
(statearr_10363_10418[(2)] = inst_10325);

(statearr_10363_10418[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10332 === (17))){
var state_10331__$1 = state_10331;
var statearr_10364_10419 = state_10331__$1;
(statearr_10364_10419[(2)] = false);

(statearr_10364_10419[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10332 === (3))){
var state_10331__$1 = state_10331;
var statearr_10365_10420 = state_10331__$1;
(statearr_10365_10420[(2)] = false);

(statearr_10365_10420[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10332 === (12))){
var inst_10329 = (state_10331[(2)]);
var state_10331__$1 = state_10331;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10331__$1,inst_10329);
} else {
if((state_val_10332 === (2))){
var inst_10237 = (state_10331[(8)]);
var inst_10242 = inst_10237.cljs$lang$protocol_mask$partition0$;
var inst_10243 = (inst_10242 & (64));
var inst_10244 = inst_10237.cljs$core$ISeq$;
var inst_10245 = (inst_10243) || (inst_10244);
var state_10331__$1 = state_10331;
if(cljs.core.truth_(inst_10245)){
var statearr_10366_10421 = state_10331__$1;
(statearr_10366_10421[(1)] = (5));

} else {
var statearr_10367_10422 = state_10331__$1;
(statearr_10367_10422[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10332 === (23))){
var inst_10290 = (state_10331[(14)]);
var inst_10296 = (inst_10290 == null);
var state_10331__$1 = state_10331;
if(cljs.core.truth_(inst_10296)){
var statearr_10368_10423 = state_10331__$1;
(statearr_10368_10423[(1)] = (26));

} else {
var statearr_10369_10424 = state_10331__$1;
(statearr_10369_10424[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10332 === (35))){
var inst_10316 = (state_10331[(2)]);
var state_10331__$1 = state_10331;
if(cljs.core.truth_(inst_10316)){
var statearr_10370_10425 = state_10331__$1;
(statearr_10370_10425[(1)] = (36));

} else {
var statearr_10371_10426 = state_10331__$1;
(statearr_10371_10426[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10332 === (19))){
var inst_10261 = (state_10331[(7)]);
var inst_10280 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10261);
var state_10331__$1 = state_10331;
var statearr_10372_10427 = state_10331__$1;
(statearr_10372_10427[(2)] = inst_10280);

(statearr_10372_10427[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10332 === (11))){
var inst_10261 = (state_10331[(7)]);
var inst_10265 = (inst_10261 == null);
var inst_10266 = cljs.core.not.call(null,inst_10265);
var state_10331__$1 = state_10331;
if(inst_10266){
var statearr_10373_10428 = state_10331__$1;
(statearr_10373_10428[(1)] = (13));

} else {
var statearr_10374_10429 = state_10331__$1;
(statearr_10374_10429[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10332 === (9))){
var inst_10237 = (state_10331[(8)]);
var state_10331__$1 = state_10331;
var statearr_10375_10430 = state_10331__$1;
(statearr_10375_10430[(2)] = inst_10237);

(statearr_10375_10430[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10332 === (5))){
var state_10331__$1 = state_10331;
var statearr_10376_10431 = state_10331__$1;
(statearr_10376_10431[(2)] = true);

(statearr_10376_10431[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10332 === (14))){
var state_10331__$1 = state_10331;
var statearr_10377_10432 = state_10331__$1;
(statearr_10377_10432[(2)] = false);

(statearr_10377_10432[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10332 === (26))){
var inst_10291 = (state_10331[(11)]);
var inst_10298 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_10291);
var state_10331__$1 = state_10331;
var statearr_10378_10433 = state_10331__$1;
(statearr_10378_10433[(2)] = inst_10298);

(statearr_10378_10433[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10332 === (16))){
var state_10331__$1 = state_10331;
var statearr_10379_10434 = state_10331__$1;
(statearr_10379_10434[(2)] = true);

(statearr_10379_10434[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10332 === (38))){
var inst_10321 = (state_10331[(2)]);
var state_10331__$1 = state_10331;
var statearr_10380_10435 = state_10331__$1;
(statearr_10380_10435[(2)] = inst_10321);

(statearr_10380_10435[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10332 === (30))){
var inst_10284 = (state_10331[(9)]);
var inst_10291 = (state_10331[(11)]);
var inst_10285 = (state_10331[(13)]);
var inst_10308 = cljs.core.empty_QMARK_.call(null,inst_10284);
var inst_10309 = inst_10285.call(null,inst_10291);
var inst_10310 = cljs.core.not.call(null,inst_10309);
var inst_10311 = (inst_10308) && (inst_10310);
var state_10331__$1 = state_10331;
var statearr_10381_10436 = state_10331__$1;
(statearr_10381_10436[(2)] = inst_10311);

(statearr_10381_10436[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10332 === (10))){
var inst_10237 = (state_10331[(8)]);
var inst_10257 = (state_10331[(2)]);
var inst_10258 = cljs.core.get.call(null,inst_10257,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_10259 = cljs.core.get.call(null,inst_10257,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_10260 = cljs.core.get.call(null,inst_10257,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_10261 = inst_10237;
var state_10331__$1 = (function (){var statearr_10382 = state_10331;
(statearr_10382[(16)] = inst_10260);

(statearr_10382[(7)] = inst_10261);

(statearr_10382[(17)] = inst_10258);

(statearr_10382[(18)] = inst_10259);

return statearr_10382;
})();
var statearr_10383_10437 = state_10331__$1;
(statearr_10383_10437[(2)] = null);

(statearr_10383_10437[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10332 === (18))){
var inst_10275 = (state_10331[(2)]);
var state_10331__$1 = state_10331;
var statearr_10384_10438 = state_10331__$1;
(statearr_10384_10438[(2)] = inst_10275);

(statearr_10384_10438[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10332 === (37))){
var state_10331__$1 = state_10331;
var statearr_10385_10439 = state_10331__$1;
(statearr_10385_10439[(2)] = null);

(statearr_10385_10439[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10332 === (8))){
var inst_10237 = (state_10331[(8)]);
var inst_10254 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10237);
var state_10331__$1 = state_10331;
var statearr_10386_10440 = state_10331__$1;
(statearr_10386_10440[(2)] = inst_10254);

(statearr_10386_10440[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8681__auto___10394,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__8569__auto__,c__8681__auto___10394,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__8570__auto__ = null;
var cljs$core$async$mix_$_state_machine__8570__auto____0 = (function (){
var statearr_10390 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10390[(0)] = cljs$core$async$mix_$_state_machine__8570__auto__);

(statearr_10390[(1)] = (1));

return statearr_10390;
});
var cljs$core$async$mix_$_state_machine__8570__auto____1 = (function (state_10331){
while(true){
var ret_value__8571__auto__ = (function (){try{while(true){
var result__8572__auto__ = switch__8569__auto__.call(null,state_10331);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8572__auto__;
}
break;
}
}catch (e10391){if((e10391 instanceof Object)){
var ex__8573__auto__ = e10391;
var statearr_10392_10441 = state_10331;
(statearr_10392_10441[(5)] = ex__8573__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10331);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10391;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10442 = state_10331;
state_10331 = G__10442;
continue;
} else {
return ret_value__8571__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__8570__auto__ = function(state_10331){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__8570__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__8570__auto____1.call(this,state_10331);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__8570__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__8570__auto____0;
cljs$core$async$mix_$_state_machine__8570__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__8570__auto____1;
return cljs$core$async$mix_$_state_machine__8570__auto__;
})()
;})(switch__8569__auto__,c__8681__auto___10394,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__8683__auto__ = (function (){var statearr_10393 = f__8682__auto__.call(null);
(statearr_10393[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8681__auto___10394);

return statearr_10393;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8683__auto__);
});})(c__8681__auto___10394,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__6811__auto__ = (((p == null))?null:p);
var m__6812__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return m__6812__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__6812__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return m__6812__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__6811__auto__ = (((p == null))?null:p);
var m__6812__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return m__6812__auto__.call(null,p,v,ch);
} else {
var m__6812__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return m__6812__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args10443 = [];
var len__7214__auto___10446 = arguments.length;
var i__7215__auto___10447 = (0);
while(true){
if((i__7215__auto___10447 < len__7214__auto___10446)){
args10443.push((arguments[i__7215__auto___10447]));

var G__10448 = (i__7215__auto___10447 + (1));
i__7215__auto___10447 = G__10448;
continue;
} else {
}
break;
}

var G__10445 = args10443.length;
switch (G__10445) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10443.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__6811__auto__ = (((p == null))?null:p);
var m__6812__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return m__6812__auto__.call(null,p);
} else {
var m__6812__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return m__6812__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__6811__auto__ = (((p == null))?null:p);
var m__6812__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return m__6812__auto__.call(null,p,v);
} else {
var m__6812__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return m__6812__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args10451 = [];
var len__7214__auto___10576 = arguments.length;
var i__7215__auto___10577 = (0);
while(true){
if((i__7215__auto___10577 < len__7214__auto___10576)){
args10451.push((arguments[i__7215__auto___10577]));

var G__10578 = (i__7215__auto___10577 + (1));
i__7215__auto___10577 = G__10578;
continue;
} else {
}
break;
}

var G__10453 = args10451.length;
switch (G__10453) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10451.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__6156__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__6156__auto__,mults){
return (function (p1__10450_SHARP_){
if(cljs.core.truth_(p1__10450_SHARP_.call(null,topic))){
return p1__10450_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__10450_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__6156__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async10454 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10454 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta10455){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta10455 = meta10455;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10454.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_10456,meta10455__$1){
var self__ = this;
var _10456__$1 = this;
return (new cljs.core.async.t_cljs$core$async10454(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta10455__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10454.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_10456){
var self__ = this;
var _10456__$1 = this;
return self__.meta10455;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10454.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async10454.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10454.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async10454.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10454.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10454.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10454.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10454.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta10455","meta10455",-1244325211,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10454.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10454.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10454";

cljs.core.async.t_cljs$core$async10454.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async10454");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async10454 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async10454(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta10455){
return (new cljs.core.async.t_cljs$core$async10454(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta10455));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async10454(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__8681__auto___10580 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8681__auto___10580,mults,ensure_mult,p){
return (function (){
var f__8682__auto__ = (function (){var switch__8569__auto__ = ((function (c__8681__auto___10580,mults,ensure_mult,p){
return (function (state_10528){
var state_val_10529 = (state_10528[(1)]);
if((state_val_10529 === (7))){
var inst_10524 = (state_10528[(2)]);
var state_10528__$1 = state_10528;
var statearr_10530_10581 = state_10528__$1;
(statearr_10530_10581[(2)] = inst_10524);

(statearr_10530_10581[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10529 === (20))){
var state_10528__$1 = state_10528;
var statearr_10531_10582 = state_10528__$1;
(statearr_10531_10582[(2)] = null);

(statearr_10531_10582[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10529 === (1))){
var state_10528__$1 = state_10528;
var statearr_10532_10583 = state_10528__$1;
(statearr_10532_10583[(2)] = null);

(statearr_10532_10583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10529 === (24))){
var inst_10507 = (state_10528[(7)]);
var inst_10516 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_10507);
var state_10528__$1 = state_10528;
var statearr_10533_10584 = state_10528__$1;
(statearr_10533_10584[(2)] = inst_10516);

(statearr_10533_10584[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10529 === (4))){
var inst_10459 = (state_10528[(8)]);
var inst_10459__$1 = (state_10528[(2)]);
var inst_10460 = (inst_10459__$1 == null);
var state_10528__$1 = (function (){var statearr_10534 = state_10528;
(statearr_10534[(8)] = inst_10459__$1);

return statearr_10534;
})();
if(cljs.core.truth_(inst_10460)){
var statearr_10535_10585 = state_10528__$1;
(statearr_10535_10585[(1)] = (5));

} else {
var statearr_10536_10586 = state_10528__$1;
(statearr_10536_10586[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10529 === (15))){
var inst_10501 = (state_10528[(2)]);
var state_10528__$1 = state_10528;
var statearr_10537_10587 = state_10528__$1;
(statearr_10537_10587[(2)] = inst_10501);

(statearr_10537_10587[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10529 === (21))){
var inst_10521 = (state_10528[(2)]);
var state_10528__$1 = (function (){var statearr_10538 = state_10528;
(statearr_10538[(9)] = inst_10521);

return statearr_10538;
})();
var statearr_10539_10588 = state_10528__$1;
(statearr_10539_10588[(2)] = null);

(statearr_10539_10588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10529 === (13))){
var inst_10483 = (state_10528[(10)]);
var inst_10485 = cljs.core.chunked_seq_QMARK_.call(null,inst_10483);
var state_10528__$1 = state_10528;
if(inst_10485){
var statearr_10540_10589 = state_10528__$1;
(statearr_10540_10589[(1)] = (16));

} else {
var statearr_10541_10590 = state_10528__$1;
(statearr_10541_10590[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10529 === (22))){
var inst_10513 = (state_10528[(2)]);
var state_10528__$1 = state_10528;
if(cljs.core.truth_(inst_10513)){
var statearr_10542_10591 = state_10528__$1;
(statearr_10542_10591[(1)] = (23));

} else {
var statearr_10543_10592 = state_10528__$1;
(statearr_10543_10592[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10529 === (6))){
var inst_10509 = (state_10528[(11)]);
var inst_10507 = (state_10528[(7)]);
var inst_10459 = (state_10528[(8)]);
var inst_10507__$1 = topic_fn.call(null,inst_10459);
var inst_10508 = cljs.core.deref.call(null,mults);
var inst_10509__$1 = cljs.core.get.call(null,inst_10508,inst_10507__$1);
var state_10528__$1 = (function (){var statearr_10544 = state_10528;
(statearr_10544[(11)] = inst_10509__$1);

(statearr_10544[(7)] = inst_10507__$1);

return statearr_10544;
})();
if(cljs.core.truth_(inst_10509__$1)){
var statearr_10545_10593 = state_10528__$1;
(statearr_10545_10593[(1)] = (19));

} else {
var statearr_10546_10594 = state_10528__$1;
(statearr_10546_10594[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10529 === (25))){
var inst_10518 = (state_10528[(2)]);
var state_10528__$1 = state_10528;
var statearr_10547_10595 = state_10528__$1;
(statearr_10547_10595[(2)] = inst_10518);

(statearr_10547_10595[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10529 === (17))){
var inst_10483 = (state_10528[(10)]);
var inst_10492 = cljs.core.first.call(null,inst_10483);
var inst_10493 = cljs.core.async.muxch_STAR_.call(null,inst_10492);
var inst_10494 = cljs.core.async.close_BANG_.call(null,inst_10493);
var inst_10495 = cljs.core.next.call(null,inst_10483);
var inst_10469 = inst_10495;
var inst_10470 = null;
var inst_10471 = (0);
var inst_10472 = (0);
var state_10528__$1 = (function (){var statearr_10548 = state_10528;
(statearr_10548[(12)] = inst_10470);

(statearr_10548[(13)] = inst_10471);

(statearr_10548[(14)] = inst_10469);

(statearr_10548[(15)] = inst_10494);

(statearr_10548[(16)] = inst_10472);

return statearr_10548;
})();
var statearr_10549_10596 = state_10528__$1;
(statearr_10549_10596[(2)] = null);

(statearr_10549_10596[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10529 === (3))){
var inst_10526 = (state_10528[(2)]);
var state_10528__$1 = state_10528;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10528__$1,inst_10526);
} else {
if((state_val_10529 === (12))){
var inst_10503 = (state_10528[(2)]);
var state_10528__$1 = state_10528;
var statearr_10550_10597 = state_10528__$1;
(statearr_10550_10597[(2)] = inst_10503);

(statearr_10550_10597[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10529 === (2))){
var state_10528__$1 = state_10528;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10528__$1,(4),ch);
} else {
if((state_val_10529 === (23))){
var state_10528__$1 = state_10528;
var statearr_10551_10598 = state_10528__$1;
(statearr_10551_10598[(2)] = null);

(statearr_10551_10598[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10529 === (19))){
var inst_10509 = (state_10528[(11)]);
var inst_10459 = (state_10528[(8)]);
var inst_10511 = cljs.core.async.muxch_STAR_.call(null,inst_10509);
var state_10528__$1 = state_10528;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10528__$1,(22),inst_10511,inst_10459);
} else {
if((state_val_10529 === (11))){
var inst_10469 = (state_10528[(14)]);
var inst_10483 = (state_10528[(10)]);
var inst_10483__$1 = cljs.core.seq.call(null,inst_10469);
var state_10528__$1 = (function (){var statearr_10552 = state_10528;
(statearr_10552[(10)] = inst_10483__$1);

return statearr_10552;
})();
if(inst_10483__$1){
var statearr_10553_10599 = state_10528__$1;
(statearr_10553_10599[(1)] = (13));

} else {
var statearr_10554_10600 = state_10528__$1;
(statearr_10554_10600[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10529 === (9))){
var inst_10505 = (state_10528[(2)]);
var state_10528__$1 = state_10528;
var statearr_10555_10601 = state_10528__$1;
(statearr_10555_10601[(2)] = inst_10505);

(statearr_10555_10601[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10529 === (5))){
var inst_10466 = cljs.core.deref.call(null,mults);
var inst_10467 = cljs.core.vals.call(null,inst_10466);
var inst_10468 = cljs.core.seq.call(null,inst_10467);
var inst_10469 = inst_10468;
var inst_10470 = null;
var inst_10471 = (0);
var inst_10472 = (0);
var state_10528__$1 = (function (){var statearr_10556 = state_10528;
(statearr_10556[(12)] = inst_10470);

(statearr_10556[(13)] = inst_10471);

(statearr_10556[(14)] = inst_10469);

(statearr_10556[(16)] = inst_10472);

return statearr_10556;
})();
var statearr_10557_10602 = state_10528__$1;
(statearr_10557_10602[(2)] = null);

(statearr_10557_10602[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10529 === (14))){
var state_10528__$1 = state_10528;
var statearr_10561_10603 = state_10528__$1;
(statearr_10561_10603[(2)] = null);

(statearr_10561_10603[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10529 === (16))){
var inst_10483 = (state_10528[(10)]);
var inst_10487 = cljs.core.chunk_first.call(null,inst_10483);
var inst_10488 = cljs.core.chunk_rest.call(null,inst_10483);
var inst_10489 = cljs.core.count.call(null,inst_10487);
var inst_10469 = inst_10488;
var inst_10470 = inst_10487;
var inst_10471 = inst_10489;
var inst_10472 = (0);
var state_10528__$1 = (function (){var statearr_10562 = state_10528;
(statearr_10562[(12)] = inst_10470);

(statearr_10562[(13)] = inst_10471);

(statearr_10562[(14)] = inst_10469);

(statearr_10562[(16)] = inst_10472);

return statearr_10562;
})();
var statearr_10563_10604 = state_10528__$1;
(statearr_10563_10604[(2)] = null);

(statearr_10563_10604[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10529 === (10))){
var inst_10470 = (state_10528[(12)]);
var inst_10471 = (state_10528[(13)]);
var inst_10469 = (state_10528[(14)]);
var inst_10472 = (state_10528[(16)]);
var inst_10477 = cljs.core._nth.call(null,inst_10470,inst_10472);
var inst_10478 = cljs.core.async.muxch_STAR_.call(null,inst_10477);
var inst_10479 = cljs.core.async.close_BANG_.call(null,inst_10478);
var inst_10480 = (inst_10472 + (1));
var tmp10558 = inst_10470;
var tmp10559 = inst_10471;
var tmp10560 = inst_10469;
var inst_10469__$1 = tmp10560;
var inst_10470__$1 = tmp10558;
var inst_10471__$1 = tmp10559;
var inst_10472__$1 = inst_10480;
var state_10528__$1 = (function (){var statearr_10564 = state_10528;
(statearr_10564[(12)] = inst_10470__$1);

(statearr_10564[(13)] = inst_10471__$1);

(statearr_10564[(14)] = inst_10469__$1);

(statearr_10564[(17)] = inst_10479);

(statearr_10564[(16)] = inst_10472__$1);

return statearr_10564;
})();
var statearr_10565_10605 = state_10528__$1;
(statearr_10565_10605[(2)] = null);

(statearr_10565_10605[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10529 === (18))){
var inst_10498 = (state_10528[(2)]);
var state_10528__$1 = state_10528;
var statearr_10566_10606 = state_10528__$1;
(statearr_10566_10606[(2)] = inst_10498);

(statearr_10566_10606[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10529 === (8))){
var inst_10471 = (state_10528[(13)]);
var inst_10472 = (state_10528[(16)]);
var inst_10474 = (inst_10472 < inst_10471);
var inst_10475 = inst_10474;
var state_10528__$1 = state_10528;
if(cljs.core.truth_(inst_10475)){
var statearr_10567_10607 = state_10528__$1;
(statearr_10567_10607[(1)] = (10));

} else {
var statearr_10568_10608 = state_10528__$1;
(statearr_10568_10608[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8681__auto___10580,mults,ensure_mult,p))
;
return ((function (switch__8569__auto__,c__8681__auto___10580,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__8570__auto__ = null;
var cljs$core$async$state_machine__8570__auto____0 = (function (){
var statearr_10572 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10572[(0)] = cljs$core$async$state_machine__8570__auto__);

(statearr_10572[(1)] = (1));

return statearr_10572;
});
var cljs$core$async$state_machine__8570__auto____1 = (function (state_10528){
while(true){
var ret_value__8571__auto__ = (function (){try{while(true){
var result__8572__auto__ = switch__8569__auto__.call(null,state_10528);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8572__auto__;
}
break;
}
}catch (e10573){if((e10573 instanceof Object)){
var ex__8573__auto__ = e10573;
var statearr_10574_10609 = state_10528;
(statearr_10574_10609[(5)] = ex__8573__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10528);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10573;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10610 = state_10528;
state_10528 = G__10610;
continue;
} else {
return ret_value__8571__auto__;
}
break;
}
});
cljs$core$async$state_machine__8570__auto__ = function(state_10528){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8570__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8570__auto____1.call(this,state_10528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8570__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8570__auto____0;
cljs$core$async$state_machine__8570__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8570__auto____1;
return cljs$core$async$state_machine__8570__auto__;
})()
;})(switch__8569__auto__,c__8681__auto___10580,mults,ensure_mult,p))
})();
var state__8683__auto__ = (function (){var statearr_10575 = f__8682__auto__.call(null);
(statearr_10575[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8681__auto___10580);

return statearr_10575;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8683__auto__);
});})(c__8681__auto___10580,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args10611 = [];
var len__7214__auto___10614 = arguments.length;
var i__7215__auto___10615 = (0);
while(true){
if((i__7215__auto___10615 < len__7214__auto___10614)){
args10611.push((arguments[i__7215__auto___10615]));

var G__10616 = (i__7215__auto___10615 + (1));
i__7215__auto___10615 = G__10616;
continue;
} else {
}
break;
}

var G__10613 = args10611.length;
switch (G__10613) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10611.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args10618 = [];
var len__7214__auto___10621 = arguments.length;
var i__7215__auto___10622 = (0);
while(true){
if((i__7215__auto___10622 < len__7214__auto___10621)){
args10618.push((arguments[i__7215__auto___10622]));

var G__10623 = (i__7215__auto___10622 + (1));
i__7215__auto___10622 = G__10623;
continue;
} else {
}
break;
}

var G__10620 = args10618.length;
switch (G__10620) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10618.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args10625 = [];
var len__7214__auto___10696 = arguments.length;
var i__7215__auto___10697 = (0);
while(true){
if((i__7215__auto___10697 < len__7214__auto___10696)){
args10625.push((arguments[i__7215__auto___10697]));

var G__10698 = (i__7215__auto___10697 + (1));
i__7215__auto___10697 = G__10698;
continue;
} else {
}
break;
}

var G__10627 = args10625.length;
switch (G__10627) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10625.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__8681__auto___10700 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8681__auto___10700,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__8682__auto__ = (function (){var switch__8569__auto__ = ((function (c__8681__auto___10700,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_10666){
var state_val_10667 = (state_10666[(1)]);
if((state_val_10667 === (7))){
var state_10666__$1 = state_10666;
var statearr_10668_10701 = state_10666__$1;
(statearr_10668_10701[(2)] = null);

(statearr_10668_10701[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10667 === (1))){
var state_10666__$1 = state_10666;
var statearr_10669_10702 = state_10666__$1;
(statearr_10669_10702[(2)] = null);

(statearr_10669_10702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10667 === (4))){
var inst_10630 = (state_10666[(7)]);
var inst_10632 = (inst_10630 < cnt);
var state_10666__$1 = state_10666;
if(cljs.core.truth_(inst_10632)){
var statearr_10670_10703 = state_10666__$1;
(statearr_10670_10703[(1)] = (6));

} else {
var statearr_10671_10704 = state_10666__$1;
(statearr_10671_10704[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10667 === (15))){
var inst_10662 = (state_10666[(2)]);
var state_10666__$1 = state_10666;
var statearr_10672_10705 = state_10666__$1;
(statearr_10672_10705[(2)] = inst_10662);

(statearr_10672_10705[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10667 === (13))){
var inst_10655 = cljs.core.async.close_BANG_.call(null,out);
var state_10666__$1 = state_10666;
var statearr_10673_10706 = state_10666__$1;
(statearr_10673_10706[(2)] = inst_10655);

(statearr_10673_10706[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10667 === (6))){
var state_10666__$1 = state_10666;
var statearr_10674_10707 = state_10666__$1;
(statearr_10674_10707[(2)] = null);

(statearr_10674_10707[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10667 === (3))){
var inst_10664 = (state_10666[(2)]);
var state_10666__$1 = state_10666;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10666__$1,inst_10664);
} else {
if((state_val_10667 === (12))){
var inst_10652 = (state_10666[(8)]);
var inst_10652__$1 = (state_10666[(2)]);
var inst_10653 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_10652__$1);
var state_10666__$1 = (function (){var statearr_10675 = state_10666;
(statearr_10675[(8)] = inst_10652__$1);

return statearr_10675;
})();
if(cljs.core.truth_(inst_10653)){
var statearr_10676_10708 = state_10666__$1;
(statearr_10676_10708[(1)] = (13));

} else {
var statearr_10677_10709 = state_10666__$1;
(statearr_10677_10709[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10667 === (2))){
var inst_10629 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_10630 = (0);
var state_10666__$1 = (function (){var statearr_10678 = state_10666;
(statearr_10678[(9)] = inst_10629);

(statearr_10678[(7)] = inst_10630);

return statearr_10678;
})();
var statearr_10679_10710 = state_10666__$1;
(statearr_10679_10710[(2)] = null);

(statearr_10679_10710[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10667 === (11))){
var inst_10630 = (state_10666[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10666,(10),Object,null,(9));
var inst_10639 = chs__$1.call(null,inst_10630);
var inst_10640 = done.call(null,inst_10630);
var inst_10641 = cljs.core.async.take_BANG_.call(null,inst_10639,inst_10640);
var state_10666__$1 = state_10666;
var statearr_10680_10711 = state_10666__$1;
(statearr_10680_10711[(2)] = inst_10641);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10666__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10667 === (9))){
var inst_10630 = (state_10666[(7)]);
var inst_10643 = (state_10666[(2)]);
var inst_10644 = (inst_10630 + (1));
var inst_10630__$1 = inst_10644;
var state_10666__$1 = (function (){var statearr_10681 = state_10666;
(statearr_10681[(10)] = inst_10643);

(statearr_10681[(7)] = inst_10630__$1);

return statearr_10681;
})();
var statearr_10682_10712 = state_10666__$1;
(statearr_10682_10712[(2)] = null);

(statearr_10682_10712[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10667 === (5))){
var inst_10650 = (state_10666[(2)]);
var state_10666__$1 = (function (){var statearr_10683 = state_10666;
(statearr_10683[(11)] = inst_10650);

return statearr_10683;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10666__$1,(12),dchan);
} else {
if((state_val_10667 === (14))){
var inst_10652 = (state_10666[(8)]);
var inst_10657 = cljs.core.apply.call(null,f,inst_10652);
var state_10666__$1 = state_10666;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10666__$1,(16),out,inst_10657);
} else {
if((state_val_10667 === (16))){
var inst_10659 = (state_10666[(2)]);
var state_10666__$1 = (function (){var statearr_10684 = state_10666;
(statearr_10684[(12)] = inst_10659);

return statearr_10684;
})();
var statearr_10685_10713 = state_10666__$1;
(statearr_10685_10713[(2)] = null);

(statearr_10685_10713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10667 === (10))){
var inst_10634 = (state_10666[(2)]);
var inst_10635 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_10666__$1 = (function (){var statearr_10686 = state_10666;
(statearr_10686[(13)] = inst_10634);

return statearr_10686;
})();
var statearr_10687_10714 = state_10666__$1;
(statearr_10687_10714[(2)] = inst_10635);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10666__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10667 === (8))){
var inst_10648 = (state_10666[(2)]);
var state_10666__$1 = state_10666;
var statearr_10688_10715 = state_10666__$1;
(statearr_10688_10715[(2)] = inst_10648);

(statearr_10688_10715[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8681__auto___10700,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__8569__auto__,c__8681__auto___10700,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__8570__auto__ = null;
var cljs$core$async$state_machine__8570__auto____0 = (function (){
var statearr_10692 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10692[(0)] = cljs$core$async$state_machine__8570__auto__);

(statearr_10692[(1)] = (1));

return statearr_10692;
});
var cljs$core$async$state_machine__8570__auto____1 = (function (state_10666){
while(true){
var ret_value__8571__auto__ = (function (){try{while(true){
var result__8572__auto__ = switch__8569__auto__.call(null,state_10666);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8572__auto__;
}
break;
}
}catch (e10693){if((e10693 instanceof Object)){
var ex__8573__auto__ = e10693;
var statearr_10694_10716 = state_10666;
(statearr_10694_10716[(5)] = ex__8573__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10666);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10693;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10717 = state_10666;
state_10666 = G__10717;
continue;
} else {
return ret_value__8571__auto__;
}
break;
}
});
cljs$core$async$state_machine__8570__auto__ = function(state_10666){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8570__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8570__auto____1.call(this,state_10666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8570__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8570__auto____0;
cljs$core$async$state_machine__8570__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8570__auto____1;
return cljs$core$async$state_machine__8570__auto__;
})()
;})(switch__8569__auto__,c__8681__auto___10700,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__8683__auto__ = (function (){var statearr_10695 = f__8682__auto__.call(null);
(statearr_10695[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8681__auto___10700);

return statearr_10695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8683__auto__);
});})(c__8681__auto___10700,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args10719 = [];
var len__7214__auto___10775 = arguments.length;
var i__7215__auto___10776 = (0);
while(true){
if((i__7215__auto___10776 < len__7214__auto___10775)){
args10719.push((arguments[i__7215__auto___10776]));

var G__10777 = (i__7215__auto___10776 + (1));
i__7215__auto___10776 = G__10777;
continue;
} else {
}
break;
}

var G__10721 = args10719.length;
switch (G__10721) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10719.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8681__auto___10779 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8681__auto___10779,out){
return (function (){
var f__8682__auto__ = (function (){var switch__8569__auto__ = ((function (c__8681__auto___10779,out){
return (function (state_10751){
var state_val_10752 = (state_10751[(1)]);
if((state_val_10752 === (7))){
var inst_10731 = (state_10751[(7)]);
var inst_10730 = (state_10751[(8)]);
var inst_10730__$1 = (state_10751[(2)]);
var inst_10731__$1 = cljs.core.nth.call(null,inst_10730__$1,(0),null);
var inst_10732 = cljs.core.nth.call(null,inst_10730__$1,(1),null);
var inst_10733 = (inst_10731__$1 == null);
var state_10751__$1 = (function (){var statearr_10753 = state_10751;
(statearr_10753[(7)] = inst_10731__$1);

(statearr_10753[(8)] = inst_10730__$1);

(statearr_10753[(9)] = inst_10732);

return statearr_10753;
})();
if(cljs.core.truth_(inst_10733)){
var statearr_10754_10780 = state_10751__$1;
(statearr_10754_10780[(1)] = (8));

} else {
var statearr_10755_10781 = state_10751__$1;
(statearr_10755_10781[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10752 === (1))){
var inst_10722 = cljs.core.vec.call(null,chs);
var inst_10723 = inst_10722;
var state_10751__$1 = (function (){var statearr_10756 = state_10751;
(statearr_10756[(10)] = inst_10723);

return statearr_10756;
})();
var statearr_10757_10782 = state_10751__$1;
(statearr_10757_10782[(2)] = null);

(statearr_10757_10782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10752 === (4))){
var inst_10723 = (state_10751[(10)]);
var state_10751__$1 = state_10751;
return cljs.core.async.ioc_alts_BANG_.call(null,state_10751__$1,(7),inst_10723);
} else {
if((state_val_10752 === (6))){
var inst_10747 = (state_10751[(2)]);
var state_10751__$1 = state_10751;
var statearr_10758_10783 = state_10751__$1;
(statearr_10758_10783[(2)] = inst_10747);

(statearr_10758_10783[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10752 === (3))){
var inst_10749 = (state_10751[(2)]);
var state_10751__$1 = state_10751;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10751__$1,inst_10749);
} else {
if((state_val_10752 === (2))){
var inst_10723 = (state_10751[(10)]);
var inst_10725 = cljs.core.count.call(null,inst_10723);
var inst_10726 = (inst_10725 > (0));
var state_10751__$1 = state_10751;
if(cljs.core.truth_(inst_10726)){
var statearr_10760_10784 = state_10751__$1;
(statearr_10760_10784[(1)] = (4));

} else {
var statearr_10761_10785 = state_10751__$1;
(statearr_10761_10785[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10752 === (11))){
var inst_10723 = (state_10751[(10)]);
var inst_10740 = (state_10751[(2)]);
var tmp10759 = inst_10723;
var inst_10723__$1 = tmp10759;
var state_10751__$1 = (function (){var statearr_10762 = state_10751;
(statearr_10762[(10)] = inst_10723__$1);

(statearr_10762[(11)] = inst_10740);

return statearr_10762;
})();
var statearr_10763_10786 = state_10751__$1;
(statearr_10763_10786[(2)] = null);

(statearr_10763_10786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10752 === (9))){
var inst_10731 = (state_10751[(7)]);
var state_10751__$1 = state_10751;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10751__$1,(11),out,inst_10731);
} else {
if((state_val_10752 === (5))){
var inst_10745 = cljs.core.async.close_BANG_.call(null,out);
var state_10751__$1 = state_10751;
var statearr_10764_10787 = state_10751__$1;
(statearr_10764_10787[(2)] = inst_10745);

(statearr_10764_10787[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10752 === (10))){
var inst_10743 = (state_10751[(2)]);
var state_10751__$1 = state_10751;
var statearr_10765_10788 = state_10751__$1;
(statearr_10765_10788[(2)] = inst_10743);

(statearr_10765_10788[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10752 === (8))){
var inst_10723 = (state_10751[(10)]);
var inst_10731 = (state_10751[(7)]);
var inst_10730 = (state_10751[(8)]);
var inst_10732 = (state_10751[(9)]);
var inst_10735 = (function (){var cs = inst_10723;
var vec__10728 = inst_10730;
var v = inst_10731;
var c = inst_10732;
return ((function (cs,vec__10728,v,c,inst_10723,inst_10731,inst_10730,inst_10732,state_val_10752,c__8681__auto___10779,out){
return (function (p1__10718_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__10718_SHARP_);
});
;})(cs,vec__10728,v,c,inst_10723,inst_10731,inst_10730,inst_10732,state_val_10752,c__8681__auto___10779,out))
})();
var inst_10736 = cljs.core.filterv.call(null,inst_10735,inst_10723);
var inst_10723__$1 = inst_10736;
var state_10751__$1 = (function (){var statearr_10766 = state_10751;
(statearr_10766[(10)] = inst_10723__$1);

return statearr_10766;
})();
var statearr_10767_10789 = state_10751__$1;
(statearr_10767_10789[(2)] = null);

(statearr_10767_10789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__8681__auto___10779,out))
;
return ((function (switch__8569__auto__,c__8681__auto___10779,out){
return (function() {
var cljs$core$async$state_machine__8570__auto__ = null;
var cljs$core$async$state_machine__8570__auto____0 = (function (){
var statearr_10771 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10771[(0)] = cljs$core$async$state_machine__8570__auto__);

(statearr_10771[(1)] = (1));

return statearr_10771;
});
var cljs$core$async$state_machine__8570__auto____1 = (function (state_10751){
while(true){
var ret_value__8571__auto__ = (function (){try{while(true){
var result__8572__auto__ = switch__8569__auto__.call(null,state_10751);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8572__auto__;
}
break;
}
}catch (e10772){if((e10772 instanceof Object)){
var ex__8573__auto__ = e10772;
var statearr_10773_10790 = state_10751;
(statearr_10773_10790[(5)] = ex__8573__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10751);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10772;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10791 = state_10751;
state_10751 = G__10791;
continue;
} else {
return ret_value__8571__auto__;
}
break;
}
});
cljs$core$async$state_machine__8570__auto__ = function(state_10751){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8570__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8570__auto____1.call(this,state_10751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8570__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8570__auto____0;
cljs$core$async$state_machine__8570__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8570__auto____1;
return cljs$core$async$state_machine__8570__auto__;
})()
;})(switch__8569__auto__,c__8681__auto___10779,out))
})();
var state__8683__auto__ = (function (){var statearr_10774 = f__8682__auto__.call(null);
(statearr_10774[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8681__auto___10779);

return statearr_10774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8683__auto__);
});})(c__8681__auto___10779,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args10792 = [];
var len__7214__auto___10841 = arguments.length;
var i__7215__auto___10842 = (0);
while(true){
if((i__7215__auto___10842 < len__7214__auto___10841)){
args10792.push((arguments[i__7215__auto___10842]));

var G__10843 = (i__7215__auto___10842 + (1));
i__7215__auto___10842 = G__10843;
continue;
} else {
}
break;
}

var G__10794 = args10792.length;
switch (G__10794) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10792.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8681__auto___10845 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8681__auto___10845,out){
return (function (){
var f__8682__auto__ = (function (){var switch__8569__auto__ = ((function (c__8681__auto___10845,out){
return (function (state_10818){
var state_val_10819 = (state_10818[(1)]);
if((state_val_10819 === (7))){
var inst_10800 = (state_10818[(7)]);
var inst_10800__$1 = (state_10818[(2)]);
var inst_10801 = (inst_10800__$1 == null);
var inst_10802 = cljs.core.not.call(null,inst_10801);
var state_10818__$1 = (function (){var statearr_10820 = state_10818;
(statearr_10820[(7)] = inst_10800__$1);

return statearr_10820;
})();
if(inst_10802){
var statearr_10821_10846 = state_10818__$1;
(statearr_10821_10846[(1)] = (8));

} else {
var statearr_10822_10847 = state_10818__$1;
(statearr_10822_10847[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10819 === (1))){
var inst_10795 = (0);
var state_10818__$1 = (function (){var statearr_10823 = state_10818;
(statearr_10823[(8)] = inst_10795);

return statearr_10823;
})();
var statearr_10824_10848 = state_10818__$1;
(statearr_10824_10848[(2)] = null);

(statearr_10824_10848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10819 === (4))){
var state_10818__$1 = state_10818;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10818__$1,(7),ch);
} else {
if((state_val_10819 === (6))){
var inst_10813 = (state_10818[(2)]);
var state_10818__$1 = state_10818;
var statearr_10825_10849 = state_10818__$1;
(statearr_10825_10849[(2)] = inst_10813);

(statearr_10825_10849[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10819 === (3))){
var inst_10815 = (state_10818[(2)]);
var inst_10816 = cljs.core.async.close_BANG_.call(null,out);
var state_10818__$1 = (function (){var statearr_10826 = state_10818;
(statearr_10826[(9)] = inst_10815);

return statearr_10826;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10818__$1,inst_10816);
} else {
if((state_val_10819 === (2))){
var inst_10795 = (state_10818[(8)]);
var inst_10797 = (inst_10795 < n);
var state_10818__$1 = state_10818;
if(cljs.core.truth_(inst_10797)){
var statearr_10827_10850 = state_10818__$1;
(statearr_10827_10850[(1)] = (4));

} else {
var statearr_10828_10851 = state_10818__$1;
(statearr_10828_10851[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10819 === (11))){
var inst_10795 = (state_10818[(8)]);
var inst_10805 = (state_10818[(2)]);
var inst_10806 = (inst_10795 + (1));
var inst_10795__$1 = inst_10806;
var state_10818__$1 = (function (){var statearr_10829 = state_10818;
(statearr_10829[(8)] = inst_10795__$1);

(statearr_10829[(10)] = inst_10805);

return statearr_10829;
})();
var statearr_10830_10852 = state_10818__$1;
(statearr_10830_10852[(2)] = null);

(statearr_10830_10852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10819 === (9))){
var state_10818__$1 = state_10818;
var statearr_10831_10853 = state_10818__$1;
(statearr_10831_10853[(2)] = null);

(statearr_10831_10853[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10819 === (5))){
var state_10818__$1 = state_10818;
var statearr_10832_10854 = state_10818__$1;
(statearr_10832_10854[(2)] = null);

(statearr_10832_10854[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10819 === (10))){
var inst_10810 = (state_10818[(2)]);
var state_10818__$1 = state_10818;
var statearr_10833_10855 = state_10818__$1;
(statearr_10833_10855[(2)] = inst_10810);

(statearr_10833_10855[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10819 === (8))){
var inst_10800 = (state_10818[(7)]);
var state_10818__$1 = state_10818;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10818__$1,(11),out,inst_10800);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__8681__auto___10845,out))
;
return ((function (switch__8569__auto__,c__8681__auto___10845,out){
return (function() {
var cljs$core$async$state_machine__8570__auto__ = null;
var cljs$core$async$state_machine__8570__auto____0 = (function (){
var statearr_10837 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_10837[(0)] = cljs$core$async$state_machine__8570__auto__);

(statearr_10837[(1)] = (1));

return statearr_10837;
});
var cljs$core$async$state_machine__8570__auto____1 = (function (state_10818){
while(true){
var ret_value__8571__auto__ = (function (){try{while(true){
var result__8572__auto__ = switch__8569__auto__.call(null,state_10818);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8572__auto__;
}
break;
}
}catch (e10838){if((e10838 instanceof Object)){
var ex__8573__auto__ = e10838;
var statearr_10839_10856 = state_10818;
(statearr_10839_10856[(5)] = ex__8573__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10818);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10838;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10857 = state_10818;
state_10818 = G__10857;
continue;
} else {
return ret_value__8571__auto__;
}
break;
}
});
cljs$core$async$state_machine__8570__auto__ = function(state_10818){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8570__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8570__auto____1.call(this,state_10818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8570__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8570__auto____0;
cljs$core$async$state_machine__8570__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8570__auto____1;
return cljs$core$async$state_machine__8570__auto__;
})()
;})(switch__8569__auto__,c__8681__auto___10845,out))
})();
var state__8683__auto__ = (function (){var statearr_10840 = f__8682__auto__.call(null);
(statearr_10840[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8681__auto___10845);

return statearr_10840;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8683__auto__);
});})(c__8681__auto___10845,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async10865 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10865 = (function (map_LT_,f,ch,meta10866){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta10866 = meta10866;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10865.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10867,meta10866__$1){
var self__ = this;
var _10867__$1 = this;
return (new cljs.core.async.t_cljs$core$async10865(self__.map_LT_,self__.f,self__.ch,meta10866__$1));
});

cljs.core.async.t_cljs$core$async10865.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10867){
var self__ = this;
var _10867__$1 = this;
return self__.meta10866;
});

cljs.core.async.t_cljs$core$async10865.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async10865.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async10865.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async10865.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async10865.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async10868 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10868 = (function (map_LT_,f,ch,meta10866,_,fn1,meta10869){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta10866 = meta10866;
this._ = _;
this.fn1 = fn1;
this.meta10869 = meta10869;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10868.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_10870,meta10869__$1){
var self__ = this;
var _10870__$1 = this;
return (new cljs.core.async.t_cljs$core$async10868(self__.map_LT_,self__.f,self__.ch,self__.meta10866,self__._,self__.fn1,meta10869__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async10868.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_10870){
var self__ = this;
var _10870__$1 = this;
return self__.meta10869;
});})(___$1))
;

cljs.core.async.t_cljs$core$async10868.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async10868.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async10868.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async10868.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__10858_SHARP_){
return f1.call(null,(((p1__10858_SHARP_ == null))?null:self__.f.call(null,p1__10858_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async10868.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta10866","meta10866",-955793230,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async10865","cljs.core.async/t_cljs$core$async10865",-675940291,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta10869","meta10869",-922484217,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async10868.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10868.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10868";

cljs.core.async.t_cljs$core$async10868.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async10868");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async10868 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async10868(map_LT___$1,f__$1,ch__$1,meta10866__$1,___$2,fn1__$1,meta10869){
return (new cljs.core.async.t_cljs$core$async10868(map_LT___$1,f__$1,ch__$1,meta10866__$1,___$2,fn1__$1,meta10869));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async10868(self__.map_LT_,self__.f,self__.ch,self__.meta10866,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__6144__auto__ = ret;
if(cljs.core.truth_(and__6144__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__6144__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async10865.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async10865.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async10865.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta10866","meta10866",-955793230,null)], null);
});

cljs.core.async.t_cljs$core$async10865.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10865.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10865";

cljs.core.async.t_cljs$core$async10865.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async10865");
});

cljs.core.async.__GT_t_cljs$core$async10865 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async10865(map_LT___$1,f__$1,ch__$1,meta10866){
return (new cljs.core.async.t_cljs$core$async10865(map_LT___$1,f__$1,ch__$1,meta10866));
});

}

return (new cljs.core.async.t_cljs$core$async10865(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async10874 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10874 = (function (map_GT_,f,ch,meta10875){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta10875 = meta10875;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10874.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10876,meta10875__$1){
var self__ = this;
var _10876__$1 = this;
return (new cljs.core.async.t_cljs$core$async10874(self__.map_GT_,self__.f,self__.ch,meta10875__$1));
});

cljs.core.async.t_cljs$core$async10874.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10876){
var self__ = this;
var _10876__$1 = this;
return self__.meta10875;
});

cljs.core.async.t_cljs$core$async10874.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async10874.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async10874.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async10874.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async10874.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async10874.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async10874.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta10875","meta10875",981932607,null)], null);
});

cljs.core.async.t_cljs$core$async10874.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10874.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10874";

cljs.core.async.t_cljs$core$async10874.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async10874");
});

cljs.core.async.__GT_t_cljs$core$async10874 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async10874(map_GT___$1,f__$1,ch__$1,meta10875){
return (new cljs.core.async.t_cljs$core$async10874(map_GT___$1,f__$1,ch__$1,meta10875));
});

}

return (new cljs.core.async.t_cljs$core$async10874(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async10880 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10880 = (function (filter_GT_,p,ch,meta10881){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta10881 = meta10881;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10880.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10882,meta10881__$1){
var self__ = this;
var _10882__$1 = this;
return (new cljs.core.async.t_cljs$core$async10880(self__.filter_GT_,self__.p,self__.ch,meta10881__$1));
});

cljs.core.async.t_cljs$core$async10880.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10882){
var self__ = this;
var _10882__$1 = this;
return self__.meta10881;
});

cljs.core.async.t_cljs$core$async10880.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async10880.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async10880.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async10880.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async10880.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async10880.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async10880.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async10880.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta10881","meta10881",1051230229,null)], null);
});

cljs.core.async.t_cljs$core$async10880.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10880.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10880";

cljs.core.async.t_cljs$core$async10880.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async10880");
});

cljs.core.async.__GT_t_cljs$core$async10880 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async10880(filter_GT___$1,p__$1,ch__$1,meta10881){
return (new cljs.core.async.t_cljs$core$async10880(filter_GT___$1,p__$1,ch__$1,meta10881));
});

}

return (new cljs.core.async.t_cljs$core$async10880(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args10883 = [];
var len__7214__auto___10927 = arguments.length;
var i__7215__auto___10928 = (0);
while(true){
if((i__7215__auto___10928 < len__7214__auto___10927)){
args10883.push((arguments[i__7215__auto___10928]));

var G__10929 = (i__7215__auto___10928 + (1));
i__7215__auto___10928 = G__10929;
continue;
} else {
}
break;
}

var G__10885 = args10883.length;
switch (G__10885) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10883.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8681__auto___10931 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8681__auto___10931,out){
return (function (){
var f__8682__auto__ = (function (){var switch__8569__auto__ = ((function (c__8681__auto___10931,out){
return (function (state_10906){
var state_val_10907 = (state_10906[(1)]);
if((state_val_10907 === (7))){
var inst_10902 = (state_10906[(2)]);
var state_10906__$1 = state_10906;
var statearr_10908_10932 = state_10906__$1;
(statearr_10908_10932[(2)] = inst_10902);

(statearr_10908_10932[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10907 === (1))){
var state_10906__$1 = state_10906;
var statearr_10909_10933 = state_10906__$1;
(statearr_10909_10933[(2)] = null);

(statearr_10909_10933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10907 === (4))){
var inst_10888 = (state_10906[(7)]);
var inst_10888__$1 = (state_10906[(2)]);
var inst_10889 = (inst_10888__$1 == null);
var state_10906__$1 = (function (){var statearr_10910 = state_10906;
(statearr_10910[(7)] = inst_10888__$1);

return statearr_10910;
})();
if(cljs.core.truth_(inst_10889)){
var statearr_10911_10934 = state_10906__$1;
(statearr_10911_10934[(1)] = (5));

} else {
var statearr_10912_10935 = state_10906__$1;
(statearr_10912_10935[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10907 === (6))){
var inst_10888 = (state_10906[(7)]);
var inst_10893 = p.call(null,inst_10888);
var state_10906__$1 = state_10906;
if(cljs.core.truth_(inst_10893)){
var statearr_10913_10936 = state_10906__$1;
(statearr_10913_10936[(1)] = (8));

} else {
var statearr_10914_10937 = state_10906__$1;
(statearr_10914_10937[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10907 === (3))){
var inst_10904 = (state_10906[(2)]);
var state_10906__$1 = state_10906;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10906__$1,inst_10904);
} else {
if((state_val_10907 === (2))){
var state_10906__$1 = state_10906;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10906__$1,(4),ch);
} else {
if((state_val_10907 === (11))){
var inst_10896 = (state_10906[(2)]);
var state_10906__$1 = state_10906;
var statearr_10915_10938 = state_10906__$1;
(statearr_10915_10938[(2)] = inst_10896);

(statearr_10915_10938[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10907 === (9))){
var state_10906__$1 = state_10906;
var statearr_10916_10939 = state_10906__$1;
(statearr_10916_10939[(2)] = null);

(statearr_10916_10939[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10907 === (5))){
var inst_10891 = cljs.core.async.close_BANG_.call(null,out);
var state_10906__$1 = state_10906;
var statearr_10917_10940 = state_10906__$1;
(statearr_10917_10940[(2)] = inst_10891);

(statearr_10917_10940[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10907 === (10))){
var inst_10899 = (state_10906[(2)]);
var state_10906__$1 = (function (){var statearr_10918 = state_10906;
(statearr_10918[(8)] = inst_10899);

return statearr_10918;
})();
var statearr_10919_10941 = state_10906__$1;
(statearr_10919_10941[(2)] = null);

(statearr_10919_10941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10907 === (8))){
var inst_10888 = (state_10906[(7)]);
var state_10906__$1 = state_10906;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10906__$1,(11),out,inst_10888);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__8681__auto___10931,out))
;
return ((function (switch__8569__auto__,c__8681__auto___10931,out){
return (function() {
var cljs$core$async$state_machine__8570__auto__ = null;
var cljs$core$async$state_machine__8570__auto____0 = (function (){
var statearr_10923 = [null,null,null,null,null,null,null,null,null];
(statearr_10923[(0)] = cljs$core$async$state_machine__8570__auto__);

(statearr_10923[(1)] = (1));

return statearr_10923;
});
var cljs$core$async$state_machine__8570__auto____1 = (function (state_10906){
while(true){
var ret_value__8571__auto__ = (function (){try{while(true){
var result__8572__auto__ = switch__8569__auto__.call(null,state_10906);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8572__auto__;
}
break;
}
}catch (e10924){if((e10924 instanceof Object)){
var ex__8573__auto__ = e10924;
var statearr_10925_10942 = state_10906;
(statearr_10925_10942[(5)] = ex__8573__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10906);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10924;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10943 = state_10906;
state_10906 = G__10943;
continue;
} else {
return ret_value__8571__auto__;
}
break;
}
});
cljs$core$async$state_machine__8570__auto__ = function(state_10906){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8570__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8570__auto____1.call(this,state_10906);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8570__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8570__auto____0;
cljs$core$async$state_machine__8570__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8570__auto____1;
return cljs$core$async$state_machine__8570__auto__;
})()
;})(switch__8569__auto__,c__8681__auto___10931,out))
})();
var state__8683__auto__ = (function (){var statearr_10926 = f__8682__auto__.call(null);
(statearr_10926[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8681__auto___10931);

return statearr_10926;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8683__auto__);
});})(c__8681__auto___10931,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args10944 = [];
var len__7214__auto___10947 = arguments.length;
var i__7215__auto___10948 = (0);
while(true){
if((i__7215__auto___10948 < len__7214__auto___10947)){
args10944.push((arguments[i__7215__auto___10948]));

var G__10949 = (i__7215__auto___10948 + (1));
i__7215__auto___10948 = G__10949;
continue;
} else {
}
break;
}

var G__10946 = args10944.length;
switch (G__10946) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10944.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__8681__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8681__auto__){
return (function (){
var f__8682__auto__ = (function (){var switch__8569__auto__ = ((function (c__8681__auto__){
return (function (state_11116){
var state_val_11117 = (state_11116[(1)]);
if((state_val_11117 === (7))){
var inst_11112 = (state_11116[(2)]);
var state_11116__$1 = state_11116;
var statearr_11118_11159 = state_11116__$1;
(statearr_11118_11159[(2)] = inst_11112);

(statearr_11118_11159[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11117 === (20))){
var inst_11082 = (state_11116[(7)]);
var inst_11093 = (state_11116[(2)]);
var inst_11094 = cljs.core.next.call(null,inst_11082);
var inst_11068 = inst_11094;
var inst_11069 = null;
var inst_11070 = (0);
var inst_11071 = (0);
var state_11116__$1 = (function (){var statearr_11119 = state_11116;
(statearr_11119[(8)] = inst_11071);

(statearr_11119[(9)] = inst_11070);

(statearr_11119[(10)] = inst_11069);

(statearr_11119[(11)] = inst_11068);

(statearr_11119[(12)] = inst_11093);

return statearr_11119;
})();
var statearr_11120_11160 = state_11116__$1;
(statearr_11120_11160[(2)] = null);

(statearr_11120_11160[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11117 === (1))){
var state_11116__$1 = state_11116;
var statearr_11121_11161 = state_11116__$1;
(statearr_11121_11161[(2)] = null);

(statearr_11121_11161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11117 === (4))){
var inst_11057 = (state_11116[(13)]);
var inst_11057__$1 = (state_11116[(2)]);
var inst_11058 = (inst_11057__$1 == null);
var state_11116__$1 = (function (){var statearr_11122 = state_11116;
(statearr_11122[(13)] = inst_11057__$1);

return statearr_11122;
})();
if(cljs.core.truth_(inst_11058)){
var statearr_11123_11162 = state_11116__$1;
(statearr_11123_11162[(1)] = (5));

} else {
var statearr_11124_11163 = state_11116__$1;
(statearr_11124_11163[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11117 === (15))){
var state_11116__$1 = state_11116;
var statearr_11128_11164 = state_11116__$1;
(statearr_11128_11164[(2)] = null);

(statearr_11128_11164[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11117 === (21))){
var state_11116__$1 = state_11116;
var statearr_11129_11165 = state_11116__$1;
(statearr_11129_11165[(2)] = null);

(statearr_11129_11165[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11117 === (13))){
var inst_11071 = (state_11116[(8)]);
var inst_11070 = (state_11116[(9)]);
var inst_11069 = (state_11116[(10)]);
var inst_11068 = (state_11116[(11)]);
var inst_11078 = (state_11116[(2)]);
var inst_11079 = (inst_11071 + (1));
var tmp11125 = inst_11070;
var tmp11126 = inst_11069;
var tmp11127 = inst_11068;
var inst_11068__$1 = tmp11127;
var inst_11069__$1 = tmp11126;
var inst_11070__$1 = tmp11125;
var inst_11071__$1 = inst_11079;
var state_11116__$1 = (function (){var statearr_11130 = state_11116;
(statearr_11130[(8)] = inst_11071__$1);

(statearr_11130[(9)] = inst_11070__$1);

(statearr_11130[(10)] = inst_11069__$1);

(statearr_11130[(11)] = inst_11068__$1);

(statearr_11130[(14)] = inst_11078);

return statearr_11130;
})();
var statearr_11131_11166 = state_11116__$1;
(statearr_11131_11166[(2)] = null);

(statearr_11131_11166[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11117 === (22))){
var state_11116__$1 = state_11116;
var statearr_11132_11167 = state_11116__$1;
(statearr_11132_11167[(2)] = null);

(statearr_11132_11167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11117 === (6))){
var inst_11057 = (state_11116[(13)]);
var inst_11066 = f.call(null,inst_11057);
var inst_11067 = cljs.core.seq.call(null,inst_11066);
var inst_11068 = inst_11067;
var inst_11069 = null;
var inst_11070 = (0);
var inst_11071 = (0);
var state_11116__$1 = (function (){var statearr_11133 = state_11116;
(statearr_11133[(8)] = inst_11071);

(statearr_11133[(9)] = inst_11070);

(statearr_11133[(10)] = inst_11069);

(statearr_11133[(11)] = inst_11068);

return statearr_11133;
})();
var statearr_11134_11168 = state_11116__$1;
(statearr_11134_11168[(2)] = null);

(statearr_11134_11168[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11117 === (17))){
var inst_11082 = (state_11116[(7)]);
var inst_11086 = cljs.core.chunk_first.call(null,inst_11082);
var inst_11087 = cljs.core.chunk_rest.call(null,inst_11082);
var inst_11088 = cljs.core.count.call(null,inst_11086);
var inst_11068 = inst_11087;
var inst_11069 = inst_11086;
var inst_11070 = inst_11088;
var inst_11071 = (0);
var state_11116__$1 = (function (){var statearr_11135 = state_11116;
(statearr_11135[(8)] = inst_11071);

(statearr_11135[(9)] = inst_11070);

(statearr_11135[(10)] = inst_11069);

(statearr_11135[(11)] = inst_11068);

return statearr_11135;
})();
var statearr_11136_11169 = state_11116__$1;
(statearr_11136_11169[(2)] = null);

(statearr_11136_11169[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11117 === (3))){
var inst_11114 = (state_11116[(2)]);
var state_11116__$1 = state_11116;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11116__$1,inst_11114);
} else {
if((state_val_11117 === (12))){
var inst_11102 = (state_11116[(2)]);
var state_11116__$1 = state_11116;
var statearr_11137_11170 = state_11116__$1;
(statearr_11137_11170[(2)] = inst_11102);

(statearr_11137_11170[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11117 === (2))){
var state_11116__$1 = state_11116;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11116__$1,(4),in$);
} else {
if((state_val_11117 === (23))){
var inst_11110 = (state_11116[(2)]);
var state_11116__$1 = state_11116;
var statearr_11138_11171 = state_11116__$1;
(statearr_11138_11171[(2)] = inst_11110);

(statearr_11138_11171[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11117 === (19))){
var inst_11097 = (state_11116[(2)]);
var state_11116__$1 = state_11116;
var statearr_11139_11172 = state_11116__$1;
(statearr_11139_11172[(2)] = inst_11097);

(statearr_11139_11172[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11117 === (11))){
var inst_11082 = (state_11116[(7)]);
var inst_11068 = (state_11116[(11)]);
var inst_11082__$1 = cljs.core.seq.call(null,inst_11068);
var state_11116__$1 = (function (){var statearr_11140 = state_11116;
(statearr_11140[(7)] = inst_11082__$1);

return statearr_11140;
})();
if(inst_11082__$1){
var statearr_11141_11173 = state_11116__$1;
(statearr_11141_11173[(1)] = (14));

} else {
var statearr_11142_11174 = state_11116__$1;
(statearr_11142_11174[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11117 === (9))){
var inst_11104 = (state_11116[(2)]);
var inst_11105 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_11116__$1 = (function (){var statearr_11143 = state_11116;
(statearr_11143[(15)] = inst_11104);

return statearr_11143;
})();
if(cljs.core.truth_(inst_11105)){
var statearr_11144_11175 = state_11116__$1;
(statearr_11144_11175[(1)] = (21));

} else {
var statearr_11145_11176 = state_11116__$1;
(statearr_11145_11176[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11117 === (5))){
var inst_11060 = cljs.core.async.close_BANG_.call(null,out);
var state_11116__$1 = state_11116;
var statearr_11146_11177 = state_11116__$1;
(statearr_11146_11177[(2)] = inst_11060);

(statearr_11146_11177[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11117 === (14))){
var inst_11082 = (state_11116[(7)]);
var inst_11084 = cljs.core.chunked_seq_QMARK_.call(null,inst_11082);
var state_11116__$1 = state_11116;
if(inst_11084){
var statearr_11147_11178 = state_11116__$1;
(statearr_11147_11178[(1)] = (17));

} else {
var statearr_11148_11179 = state_11116__$1;
(statearr_11148_11179[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11117 === (16))){
var inst_11100 = (state_11116[(2)]);
var state_11116__$1 = state_11116;
var statearr_11149_11180 = state_11116__$1;
(statearr_11149_11180[(2)] = inst_11100);

(statearr_11149_11180[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11117 === (10))){
var inst_11071 = (state_11116[(8)]);
var inst_11069 = (state_11116[(10)]);
var inst_11076 = cljs.core._nth.call(null,inst_11069,inst_11071);
var state_11116__$1 = state_11116;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11116__$1,(13),out,inst_11076);
} else {
if((state_val_11117 === (18))){
var inst_11082 = (state_11116[(7)]);
var inst_11091 = cljs.core.first.call(null,inst_11082);
var state_11116__$1 = state_11116;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11116__$1,(20),out,inst_11091);
} else {
if((state_val_11117 === (8))){
var inst_11071 = (state_11116[(8)]);
var inst_11070 = (state_11116[(9)]);
var inst_11073 = (inst_11071 < inst_11070);
var inst_11074 = inst_11073;
var state_11116__$1 = state_11116;
if(cljs.core.truth_(inst_11074)){
var statearr_11150_11181 = state_11116__$1;
(statearr_11150_11181[(1)] = (10));

} else {
var statearr_11151_11182 = state_11116__$1;
(statearr_11151_11182[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8681__auto__))
;
return ((function (switch__8569__auto__,c__8681__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__8570__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__8570__auto____0 = (function (){
var statearr_11155 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11155[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__8570__auto__);

(statearr_11155[(1)] = (1));

return statearr_11155;
});
var cljs$core$async$mapcat_STAR__$_state_machine__8570__auto____1 = (function (state_11116){
while(true){
var ret_value__8571__auto__ = (function (){try{while(true){
var result__8572__auto__ = switch__8569__auto__.call(null,state_11116);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8572__auto__;
}
break;
}
}catch (e11156){if((e11156 instanceof Object)){
var ex__8573__auto__ = e11156;
var statearr_11157_11183 = state_11116;
(statearr_11157_11183[(5)] = ex__8573__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11116);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11156;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11184 = state_11116;
state_11116 = G__11184;
continue;
} else {
return ret_value__8571__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__8570__auto__ = function(state_11116){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__8570__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__8570__auto____1.call(this,state_11116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__8570__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__8570__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__8570__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__8570__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__8570__auto__;
})()
;})(switch__8569__auto__,c__8681__auto__))
})();
var state__8683__auto__ = (function (){var statearr_11158 = f__8682__auto__.call(null);
(statearr_11158[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8681__auto__);

return statearr_11158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8683__auto__);
});})(c__8681__auto__))
);

return c__8681__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args11185 = [];
var len__7214__auto___11188 = arguments.length;
var i__7215__auto___11189 = (0);
while(true){
if((i__7215__auto___11189 < len__7214__auto___11188)){
args11185.push((arguments[i__7215__auto___11189]));

var G__11190 = (i__7215__auto___11189 + (1));
i__7215__auto___11189 = G__11190;
continue;
} else {
}
break;
}

var G__11187 = args11185.length;
switch (G__11187) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11185.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args11192 = [];
var len__7214__auto___11195 = arguments.length;
var i__7215__auto___11196 = (0);
while(true){
if((i__7215__auto___11196 < len__7214__auto___11195)){
args11192.push((arguments[i__7215__auto___11196]));

var G__11197 = (i__7215__auto___11196 + (1));
i__7215__auto___11196 = G__11197;
continue;
} else {
}
break;
}

var G__11194 = args11192.length;
switch (G__11194) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11192.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args11199 = [];
var len__7214__auto___11250 = arguments.length;
var i__7215__auto___11251 = (0);
while(true){
if((i__7215__auto___11251 < len__7214__auto___11250)){
args11199.push((arguments[i__7215__auto___11251]));

var G__11252 = (i__7215__auto___11251 + (1));
i__7215__auto___11251 = G__11252;
continue;
} else {
}
break;
}

var G__11201 = args11199.length;
switch (G__11201) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11199.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8681__auto___11254 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8681__auto___11254,out){
return (function (){
var f__8682__auto__ = (function (){var switch__8569__auto__ = ((function (c__8681__auto___11254,out){
return (function (state_11225){
var state_val_11226 = (state_11225[(1)]);
if((state_val_11226 === (7))){
var inst_11220 = (state_11225[(2)]);
var state_11225__$1 = state_11225;
var statearr_11227_11255 = state_11225__$1;
(statearr_11227_11255[(2)] = inst_11220);

(statearr_11227_11255[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11226 === (1))){
var inst_11202 = null;
var state_11225__$1 = (function (){var statearr_11228 = state_11225;
(statearr_11228[(7)] = inst_11202);

return statearr_11228;
})();
var statearr_11229_11256 = state_11225__$1;
(statearr_11229_11256[(2)] = null);

(statearr_11229_11256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11226 === (4))){
var inst_11205 = (state_11225[(8)]);
var inst_11205__$1 = (state_11225[(2)]);
var inst_11206 = (inst_11205__$1 == null);
var inst_11207 = cljs.core.not.call(null,inst_11206);
var state_11225__$1 = (function (){var statearr_11230 = state_11225;
(statearr_11230[(8)] = inst_11205__$1);

return statearr_11230;
})();
if(inst_11207){
var statearr_11231_11257 = state_11225__$1;
(statearr_11231_11257[(1)] = (5));

} else {
var statearr_11232_11258 = state_11225__$1;
(statearr_11232_11258[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11226 === (6))){
var state_11225__$1 = state_11225;
var statearr_11233_11259 = state_11225__$1;
(statearr_11233_11259[(2)] = null);

(statearr_11233_11259[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11226 === (3))){
var inst_11222 = (state_11225[(2)]);
var inst_11223 = cljs.core.async.close_BANG_.call(null,out);
var state_11225__$1 = (function (){var statearr_11234 = state_11225;
(statearr_11234[(9)] = inst_11222);

return statearr_11234;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11225__$1,inst_11223);
} else {
if((state_val_11226 === (2))){
var state_11225__$1 = state_11225;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11225__$1,(4),ch);
} else {
if((state_val_11226 === (11))){
var inst_11205 = (state_11225[(8)]);
var inst_11214 = (state_11225[(2)]);
var inst_11202 = inst_11205;
var state_11225__$1 = (function (){var statearr_11235 = state_11225;
(statearr_11235[(10)] = inst_11214);

(statearr_11235[(7)] = inst_11202);

return statearr_11235;
})();
var statearr_11236_11260 = state_11225__$1;
(statearr_11236_11260[(2)] = null);

(statearr_11236_11260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11226 === (9))){
var inst_11205 = (state_11225[(8)]);
var state_11225__$1 = state_11225;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11225__$1,(11),out,inst_11205);
} else {
if((state_val_11226 === (5))){
var inst_11205 = (state_11225[(8)]);
var inst_11202 = (state_11225[(7)]);
var inst_11209 = cljs.core._EQ_.call(null,inst_11205,inst_11202);
var state_11225__$1 = state_11225;
if(inst_11209){
var statearr_11238_11261 = state_11225__$1;
(statearr_11238_11261[(1)] = (8));

} else {
var statearr_11239_11262 = state_11225__$1;
(statearr_11239_11262[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11226 === (10))){
var inst_11217 = (state_11225[(2)]);
var state_11225__$1 = state_11225;
var statearr_11240_11263 = state_11225__$1;
(statearr_11240_11263[(2)] = inst_11217);

(statearr_11240_11263[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11226 === (8))){
var inst_11202 = (state_11225[(7)]);
var tmp11237 = inst_11202;
var inst_11202__$1 = tmp11237;
var state_11225__$1 = (function (){var statearr_11241 = state_11225;
(statearr_11241[(7)] = inst_11202__$1);

return statearr_11241;
})();
var statearr_11242_11264 = state_11225__$1;
(statearr_11242_11264[(2)] = null);

(statearr_11242_11264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__8681__auto___11254,out))
;
return ((function (switch__8569__auto__,c__8681__auto___11254,out){
return (function() {
var cljs$core$async$state_machine__8570__auto__ = null;
var cljs$core$async$state_machine__8570__auto____0 = (function (){
var statearr_11246 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11246[(0)] = cljs$core$async$state_machine__8570__auto__);

(statearr_11246[(1)] = (1));

return statearr_11246;
});
var cljs$core$async$state_machine__8570__auto____1 = (function (state_11225){
while(true){
var ret_value__8571__auto__ = (function (){try{while(true){
var result__8572__auto__ = switch__8569__auto__.call(null,state_11225);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8572__auto__;
}
break;
}
}catch (e11247){if((e11247 instanceof Object)){
var ex__8573__auto__ = e11247;
var statearr_11248_11265 = state_11225;
(statearr_11248_11265[(5)] = ex__8573__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11225);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11247;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11266 = state_11225;
state_11225 = G__11266;
continue;
} else {
return ret_value__8571__auto__;
}
break;
}
});
cljs$core$async$state_machine__8570__auto__ = function(state_11225){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8570__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8570__auto____1.call(this,state_11225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8570__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8570__auto____0;
cljs$core$async$state_machine__8570__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8570__auto____1;
return cljs$core$async$state_machine__8570__auto__;
})()
;})(switch__8569__auto__,c__8681__auto___11254,out))
})();
var state__8683__auto__ = (function (){var statearr_11249 = f__8682__auto__.call(null);
(statearr_11249[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8681__auto___11254);

return statearr_11249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8683__auto__);
});})(c__8681__auto___11254,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args11267 = [];
var len__7214__auto___11337 = arguments.length;
var i__7215__auto___11338 = (0);
while(true){
if((i__7215__auto___11338 < len__7214__auto___11337)){
args11267.push((arguments[i__7215__auto___11338]));

var G__11339 = (i__7215__auto___11338 + (1));
i__7215__auto___11338 = G__11339;
continue;
} else {
}
break;
}

var G__11269 = args11267.length;
switch (G__11269) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11267.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8681__auto___11341 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8681__auto___11341,out){
return (function (){
var f__8682__auto__ = (function (){var switch__8569__auto__ = ((function (c__8681__auto___11341,out){
return (function (state_11307){
var state_val_11308 = (state_11307[(1)]);
if((state_val_11308 === (7))){
var inst_11303 = (state_11307[(2)]);
var state_11307__$1 = state_11307;
var statearr_11309_11342 = state_11307__$1;
(statearr_11309_11342[(2)] = inst_11303);

(statearr_11309_11342[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11308 === (1))){
var inst_11270 = (new Array(n));
var inst_11271 = inst_11270;
var inst_11272 = (0);
var state_11307__$1 = (function (){var statearr_11310 = state_11307;
(statearr_11310[(7)] = inst_11271);

(statearr_11310[(8)] = inst_11272);

return statearr_11310;
})();
var statearr_11311_11343 = state_11307__$1;
(statearr_11311_11343[(2)] = null);

(statearr_11311_11343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11308 === (4))){
var inst_11275 = (state_11307[(9)]);
var inst_11275__$1 = (state_11307[(2)]);
var inst_11276 = (inst_11275__$1 == null);
var inst_11277 = cljs.core.not.call(null,inst_11276);
var state_11307__$1 = (function (){var statearr_11312 = state_11307;
(statearr_11312[(9)] = inst_11275__$1);

return statearr_11312;
})();
if(inst_11277){
var statearr_11313_11344 = state_11307__$1;
(statearr_11313_11344[(1)] = (5));

} else {
var statearr_11314_11345 = state_11307__$1;
(statearr_11314_11345[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11308 === (15))){
var inst_11297 = (state_11307[(2)]);
var state_11307__$1 = state_11307;
var statearr_11315_11346 = state_11307__$1;
(statearr_11315_11346[(2)] = inst_11297);

(statearr_11315_11346[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11308 === (13))){
var state_11307__$1 = state_11307;
var statearr_11316_11347 = state_11307__$1;
(statearr_11316_11347[(2)] = null);

(statearr_11316_11347[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11308 === (6))){
var inst_11272 = (state_11307[(8)]);
var inst_11293 = (inst_11272 > (0));
var state_11307__$1 = state_11307;
if(cljs.core.truth_(inst_11293)){
var statearr_11317_11348 = state_11307__$1;
(statearr_11317_11348[(1)] = (12));

} else {
var statearr_11318_11349 = state_11307__$1;
(statearr_11318_11349[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11308 === (3))){
var inst_11305 = (state_11307[(2)]);
var state_11307__$1 = state_11307;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11307__$1,inst_11305);
} else {
if((state_val_11308 === (12))){
var inst_11271 = (state_11307[(7)]);
var inst_11295 = cljs.core.vec.call(null,inst_11271);
var state_11307__$1 = state_11307;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11307__$1,(15),out,inst_11295);
} else {
if((state_val_11308 === (2))){
var state_11307__$1 = state_11307;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11307__$1,(4),ch);
} else {
if((state_val_11308 === (11))){
var inst_11287 = (state_11307[(2)]);
var inst_11288 = (new Array(n));
var inst_11271 = inst_11288;
var inst_11272 = (0);
var state_11307__$1 = (function (){var statearr_11319 = state_11307;
(statearr_11319[(10)] = inst_11287);

(statearr_11319[(7)] = inst_11271);

(statearr_11319[(8)] = inst_11272);

return statearr_11319;
})();
var statearr_11320_11350 = state_11307__$1;
(statearr_11320_11350[(2)] = null);

(statearr_11320_11350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11308 === (9))){
var inst_11271 = (state_11307[(7)]);
var inst_11285 = cljs.core.vec.call(null,inst_11271);
var state_11307__$1 = state_11307;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11307__$1,(11),out,inst_11285);
} else {
if((state_val_11308 === (5))){
var inst_11275 = (state_11307[(9)]);
var inst_11280 = (state_11307[(11)]);
var inst_11271 = (state_11307[(7)]);
var inst_11272 = (state_11307[(8)]);
var inst_11279 = (inst_11271[inst_11272] = inst_11275);
var inst_11280__$1 = (inst_11272 + (1));
var inst_11281 = (inst_11280__$1 < n);
var state_11307__$1 = (function (){var statearr_11321 = state_11307;
(statearr_11321[(11)] = inst_11280__$1);

(statearr_11321[(12)] = inst_11279);

return statearr_11321;
})();
if(cljs.core.truth_(inst_11281)){
var statearr_11322_11351 = state_11307__$1;
(statearr_11322_11351[(1)] = (8));

} else {
var statearr_11323_11352 = state_11307__$1;
(statearr_11323_11352[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11308 === (14))){
var inst_11300 = (state_11307[(2)]);
var inst_11301 = cljs.core.async.close_BANG_.call(null,out);
var state_11307__$1 = (function (){var statearr_11325 = state_11307;
(statearr_11325[(13)] = inst_11300);

return statearr_11325;
})();
var statearr_11326_11353 = state_11307__$1;
(statearr_11326_11353[(2)] = inst_11301);

(statearr_11326_11353[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11308 === (10))){
var inst_11291 = (state_11307[(2)]);
var state_11307__$1 = state_11307;
var statearr_11327_11354 = state_11307__$1;
(statearr_11327_11354[(2)] = inst_11291);

(statearr_11327_11354[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11308 === (8))){
var inst_11280 = (state_11307[(11)]);
var inst_11271 = (state_11307[(7)]);
var tmp11324 = inst_11271;
var inst_11271__$1 = tmp11324;
var inst_11272 = inst_11280;
var state_11307__$1 = (function (){var statearr_11328 = state_11307;
(statearr_11328[(7)] = inst_11271__$1);

(statearr_11328[(8)] = inst_11272);

return statearr_11328;
})();
var statearr_11329_11355 = state_11307__$1;
(statearr_11329_11355[(2)] = null);

(statearr_11329_11355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8681__auto___11341,out))
;
return ((function (switch__8569__auto__,c__8681__auto___11341,out){
return (function() {
var cljs$core$async$state_machine__8570__auto__ = null;
var cljs$core$async$state_machine__8570__auto____0 = (function (){
var statearr_11333 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11333[(0)] = cljs$core$async$state_machine__8570__auto__);

(statearr_11333[(1)] = (1));

return statearr_11333;
});
var cljs$core$async$state_machine__8570__auto____1 = (function (state_11307){
while(true){
var ret_value__8571__auto__ = (function (){try{while(true){
var result__8572__auto__ = switch__8569__auto__.call(null,state_11307);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8572__auto__;
}
break;
}
}catch (e11334){if((e11334 instanceof Object)){
var ex__8573__auto__ = e11334;
var statearr_11335_11356 = state_11307;
(statearr_11335_11356[(5)] = ex__8573__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11307);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11334;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11357 = state_11307;
state_11307 = G__11357;
continue;
} else {
return ret_value__8571__auto__;
}
break;
}
});
cljs$core$async$state_machine__8570__auto__ = function(state_11307){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8570__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8570__auto____1.call(this,state_11307);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8570__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8570__auto____0;
cljs$core$async$state_machine__8570__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8570__auto____1;
return cljs$core$async$state_machine__8570__auto__;
})()
;})(switch__8569__auto__,c__8681__auto___11341,out))
})();
var state__8683__auto__ = (function (){var statearr_11336 = f__8682__auto__.call(null);
(statearr_11336[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8681__auto___11341);

return statearr_11336;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8683__auto__);
});})(c__8681__auto___11341,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args11358 = [];
var len__7214__auto___11432 = arguments.length;
var i__7215__auto___11433 = (0);
while(true){
if((i__7215__auto___11433 < len__7214__auto___11432)){
args11358.push((arguments[i__7215__auto___11433]));

var G__11434 = (i__7215__auto___11433 + (1));
i__7215__auto___11433 = G__11434;
continue;
} else {
}
break;
}

var G__11360 = args11358.length;
switch (G__11360) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11358.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8681__auto___11436 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8681__auto___11436,out){
return (function (){
var f__8682__auto__ = (function (){var switch__8569__auto__ = ((function (c__8681__auto___11436,out){
return (function (state_11402){
var state_val_11403 = (state_11402[(1)]);
if((state_val_11403 === (7))){
var inst_11398 = (state_11402[(2)]);
var state_11402__$1 = state_11402;
var statearr_11404_11437 = state_11402__$1;
(statearr_11404_11437[(2)] = inst_11398);

(statearr_11404_11437[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11403 === (1))){
var inst_11361 = [];
var inst_11362 = inst_11361;
var inst_11363 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_11402__$1 = (function (){var statearr_11405 = state_11402;
(statearr_11405[(7)] = inst_11363);

(statearr_11405[(8)] = inst_11362);

return statearr_11405;
})();
var statearr_11406_11438 = state_11402__$1;
(statearr_11406_11438[(2)] = null);

(statearr_11406_11438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11403 === (4))){
var inst_11366 = (state_11402[(9)]);
var inst_11366__$1 = (state_11402[(2)]);
var inst_11367 = (inst_11366__$1 == null);
var inst_11368 = cljs.core.not.call(null,inst_11367);
var state_11402__$1 = (function (){var statearr_11407 = state_11402;
(statearr_11407[(9)] = inst_11366__$1);

return statearr_11407;
})();
if(inst_11368){
var statearr_11408_11439 = state_11402__$1;
(statearr_11408_11439[(1)] = (5));

} else {
var statearr_11409_11440 = state_11402__$1;
(statearr_11409_11440[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11403 === (15))){
var inst_11392 = (state_11402[(2)]);
var state_11402__$1 = state_11402;
var statearr_11410_11441 = state_11402__$1;
(statearr_11410_11441[(2)] = inst_11392);

(statearr_11410_11441[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11403 === (13))){
var state_11402__$1 = state_11402;
var statearr_11411_11442 = state_11402__$1;
(statearr_11411_11442[(2)] = null);

(statearr_11411_11442[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11403 === (6))){
var inst_11362 = (state_11402[(8)]);
var inst_11387 = inst_11362.length;
var inst_11388 = (inst_11387 > (0));
var state_11402__$1 = state_11402;
if(cljs.core.truth_(inst_11388)){
var statearr_11412_11443 = state_11402__$1;
(statearr_11412_11443[(1)] = (12));

} else {
var statearr_11413_11444 = state_11402__$1;
(statearr_11413_11444[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11403 === (3))){
var inst_11400 = (state_11402[(2)]);
var state_11402__$1 = state_11402;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11402__$1,inst_11400);
} else {
if((state_val_11403 === (12))){
var inst_11362 = (state_11402[(8)]);
var inst_11390 = cljs.core.vec.call(null,inst_11362);
var state_11402__$1 = state_11402;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11402__$1,(15),out,inst_11390);
} else {
if((state_val_11403 === (2))){
var state_11402__$1 = state_11402;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11402__$1,(4),ch);
} else {
if((state_val_11403 === (11))){
var inst_11370 = (state_11402[(10)]);
var inst_11366 = (state_11402[(9)]);
var inst_11380 = (state_11402[(2)]);
var inst_11381 = [];
var inst_11382 = inst_11381.push(inst_11366);
var inst_11362 = inst_11381;
var inst_11363 = inst_11370;
var state_11402__$1 = (function (){var statearr_11414 = state_11402;
(statearr_11414[(7)] = inst_11363);

(statearr_11414[(11)] = inst_11382);

(statearr_11414[(12)] = inst_11380);

(statearr_11414[(8)] = inst_11362);

return statearr_11414;
})();
var statearr_11415_11445 = state_11402__$1;
(statearr_11415_11445[(2)] = null);

(statearr_11415_11445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11403 === (9))){
var inst_11362 = (state_11402[(8)]);
var inst_11378 = cljs.core.vec.call(null,inst_11362);
var state_11402__$1 = state_11402;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11402__$1,(11),out,inst_11378);
} else {
if((state_val_11403 === (5))){
var inst_11370 = (state_11402[(10)]);
var inst_11366 = (state_11402[(9)]);
var inst_11363 = (state_11402[(7)]);
var inst_11370__$1 = f.call(null,inst_11366);
var inst_11371 = cljs.core._EQ_.call(null,inst_11370__$1,inst_11363);
var inst_11372 = cljs.core.keyword_identical_QMARK_.call(null,inst_11363,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_11373 = (inst_11371) || (inst_11372);
var state_11402__$1 = (function (){var statearr_11416 = state_11402;
(statearr_11416[(10)] = inst_11370__$1);

return statearr_11416;
})();
if(cljs.core.truth_(inst_11373)){
var statearr_11417_11446 = state_11402__$1;
(statearr_11417_11446[(1)] = (8));

} else {
var statearr_11418_11447 = state_11402__$1;
(statearr_11418_11447[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11403 === (14))){
var inst_11395 = (state_11402[(2)]);
var inst_11396 = cljs.core.async.close_BANG_.call(null,out);
var state_11402__$1 = (function (){var statearr_11420 = state_11402;
(statearr_11420[(13)] = inst_11395);

return statearr_11420;
})();
var statearr_11421_11448 = state_11402__$1;
(statearr_11421_11448[(2)] = inst_11396);

(statearr_11421_11448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11403 === (10))){
var inst_11385 = (state_11402[(2)]);
var state_11402__$1 = state_11402;
var statearr_11422_11449 = state_11402__$1;
(statearr_11422_11449[(2)] = inst_11385);

(statearr_11422_11449[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11403 === (8))){
var inst_11370 = (state_11402[(10)]);
var inst_11366 = (state_11402[(9)]);
var inst_11362 = (state_11402[(8)]);
var inst_11375 = inst_11362.push(inst_11366);
var tmp11419 = inst_11362;
var inst_11362__$1 = tmp11419;
var inst_11363 = inst_11370;
var state_11402__$1 = (function (){var statearr_11423 = state_11402;
(statearr_11423[(7)] = inst_11363);

(statearr_11423[(8)] = inst_11362__$1);

(statearr_11423[(14)] = inst_11375);

return statearr_11423;
})();
var statearr_11424_11450 = state_11402__$1;
(statearr_11424_11450[(2)] = null);

(statearr_11424_11450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8681__auto___11436,out))
;
return ((function (switch__8569__auto__,c__8681__auto___11436,out){
return (function() {
var cljs$core$async$state_machine__8570__auto__ = null;
var cljs$core$async$state_machine__8570__auto____0 = (function (){
var statearr_11428 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11428[(0)] = cljs$core$async$state_machine__8570__auto__);

(statearr_11428[(1)] = (1));

return statearr_11428;
});
var cljs$core$async$state_machine__8570__auto____1 = (function (state_11402){
while(true){
var ret_value__8571__auto__ = (function (){try{while(true){
var result__8572__auto__ = switch__8569__auto__.call(null,state_11402);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8572__auto__;
}
break;
}
}catch (e11429){if((e11429 instanceof Object)){
var ex__8573__auto__ = e11429;
var statearr_11430_11451 = state_11402;
(statearr_11430_11451[(5)] = ex__8573__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11402);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11429;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11452 = state_11402;
state_11402 = G__11452;
continue;
} else {
return ret_value__8571__auto__;
}
break;
}
});
cljs$core$async$state_machine__8570__auto__ = function(state_11402){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8570__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8570__auto____1.call(this,state_11402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8570__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8570__auto____0;
cljs$core$async$state_machine__8570__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8570__auto____1;
return cljs$core$async$state_machine__8570__auto__;
})()
;})(switch__8569__auto__,c__8681__auto___11436,out))
})();
var state__8683__auto__ = (function (){var statearr_11431 = f__8682__auto__.call(null);
(statearr_11431[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8681__auto___11436);

return statearr_11431;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8683__auto__);
});})(c__8681__auto___11436,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map