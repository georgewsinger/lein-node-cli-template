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
var args8691 = [];
var len__7214__auto___8697 = arguments.length;
var i__7215__auto___8698 = (0);
while(true){
if((i__7215__auto___8698 < len__7214__auto___8697)){
args8691.push((arguments[i__7215__auto___8698]));

var G__8699 = (i__7215__auto___8698 + (1));
i__7215__auto___8698 = G__8699;
continue;
} else {
}
break;
}

var G__8693 = args8691.length;
switch (G__8693) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8691.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async8694 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8694 = (function (f,blockable,meta8695){
this.f = f;
this.blockable = blockable;
this.meta8695 = meta8695;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async8694.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8696,meta8695__$1){
var self__ = this;
var _8696__$1 = this;
return (new cljs.core.async.t_cljs$core$async8694(self__.f,self__.blockable,meta8695__$1));
});

cljs.core.async.t_cljs$core$async8694.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8696){
var self__ = this;
var _8696__$1 = this;
return self__.meta8695;
});

cljs.core.async.t_cljs$core$async8694.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async8694.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async8694.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async8694.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async8694.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta8695","meta8695",-1755979749,null)], null);
});

cljs.core.async.t_cljs$core$async8694.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8694.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8694";

cljs.core.async.t_cljs$core$async8694.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async8694");
});

cljs.core.async.__GT_t_cljs$core$async8694 = (function cljs$core$async$__GT_t_cljs$core$async8694(f__$1,blockable__$1,meta8695){
return (new cljs.core.async.t_cljs$core$async8694(f__$1,blockable__$1,meta8695));
});

}

return (new cljs.core.async.t_cljs$core$async8694(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args8703 = [];
var len__7214__auto___8706 = arguments.length;
var i__7215__auto___8707 = (0);
while(true){
if((i__7215__auto___8707 < len__7214__auto___8706)){
args8703.push((arguments[i__7215__auto___8707]));

var G__8708 = (i__7215__auto___8707 + (1));
i__7215__auto___8707 = G__8708;
continue;
} else {
}
break;
}

var G__8705 = args8703.length;
switch (G__8705) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8703.length)].join('')));

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
var args8710 = [];
var len__7214__auto___8713 = arguments.length;
var i__7215__auto___8714 = (0);
while(true){
if((i__7215__auto___8714 < len__7214__auto___8713)){
args8710.push((arguments[i__7215__auto___8714]));

var G__8715 = (i__7215__auto___8714 + (1));
i__7215__auto___8714 = G__8715;
continue;
} else {
}
break;
}

var G__8712 = args8710.length;
switch (G__8712) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8710.length)].join('')));

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
var args8717 = [];
var len__7214__auto___8720 = arguments.length;
var i__7215__auto___8721 = (0);
while(true){
if((i__7215__auto___8721 < len__7214__auto___8720)){
args8717.push((arguments[i__7215__auto___8721]));

var G__8722 = (i__7215__auto___8721 + (1));
i__7215__auto___8721 = G__8722;
continue;
} else {
}
break;
}

var G__8719 = args8717.length;
switch (G__8719) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8717.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_8724 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_8724);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_8724,ret){
return (function (){
return fn1.call(null,val_8724);
});})(val_8724,ret))
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
var args8725 = [];
var len__7214__auto___8728 = arguments.length;
var i__7215__auto___8729 = (0);
while(true){
if((i__7215__auto___8729 < len__7214__auto___8728)){
args8725.push((arguments[i__7215__auto___8729]));

var G__8730 = (i__7215__auto___8729 + (1));
i__7215__auto___8729 = G__8730;
continue;
} else {
}
break;
}

var G__8727 = args8725.length;
switch (G__8727) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8725.length)].join('')));

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
var n__7059__auto___8732 = n;
var x_8733 = (0);
while(true){
if((x_8733 < n__7059__auto___8732)){
(a[x_8733] = (0));

var G__8734 = (x_8733 + (1));
x_8733 = G__8734;
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

var G__8735 = (i + (1));
i = G__8735;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async8739 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8739 = (function (alt_flag,flag,meta8740){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta8740 = meta8740;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async8739.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_8741,meta8740__$1){
var self__ = this;
var _8741__$1 = this;
return (new cljs.core.async.t_cljs$core$async8739(self__.alt_flag,self__.flag,meta8740__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async8739.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_8741){
var self__ = this;
var _8741__$1 = this;
return self__.meta8740;
});})(flag))
;

cljs.core.async.t_cljs$core$async8739.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async8739.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async8739.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async8739.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async8739.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta8740","meta8740",-1543359150,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async8739.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8739.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8739";

cljs.core.async.t_cljs$core$async8739.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async8739");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async8739 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async8739(alt_flag__$1,flag__$1,meta8740){
return (new cljs.core.async.t_cljs$core$async8739(alt_flag__$1,flag__$1,meta8740));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async8739(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async8745 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8745 = (function (alt_handler,flag,cb,meta8746){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta8746 = meta8746;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async8745.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8747,meta8746__$1){
var self__ = this;
var _8747__$1 = this;
return (new cljs.core.async.t_cljs$core$async8745(self__.alt_handler,self__.flag,self__.cb,meta8746__$1));
});

cljs.core.async.t_cljs$core$async8745.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8747){
var self__ = this;
var _8747__$1 = this;
return self__.meta8746;
});

cljs.core.async.t_cljs$core$async8745.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async8745.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async8745.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async8745.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async8745.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta8746","meta8746",1505240073,null)], null);
});

cljs.core.async.t_cljs$core$async8745.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8745.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8745";

cljs.core.async.t_cljs$core$async8745.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async8745");
});

cljs.core.async.__GT_t_cljs$core$async8745 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async8745(alt_handler__$1,flag__$1,cb__$1,meta8746){
return (new cljs.core.async.t_cljs$core$async8745(alt_handler__$1,flag__$1,cb__$1,meta8746));
});

}

return (new cljs.core.async.t_cljs$core$async8745(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__8748_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__8748_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__8749_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__8749_SHARP_,port], null));
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
var G__8750 = (i + (1));
i = G__8750;
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
var len__7214__auto___8756 = arguments.length;
var i__7215__auto___8757 = (0);
while(true){
if((i__7215__auto___8757 < len__7214__auto___8756)){
args__7221__auto__.push((arguments[i__7215__auto___8757]));

var G__8758 = (i__7215__auto___8757 + (1));
i__7215__auto___8757 = G__8758;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((1) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7222__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__8753){
var map__8754 = p__8753;
var map__8754__$1 = ((((!((map__8754 == null)))?((((map__8754.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8754.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8754):map__8754);
var opts = map__8754__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq8751){
var G__8752 = cljs.core.first.call(null,seq8751);
var seq8751__$1 = cljs.core.next.call(null,seq8751);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__8752,seq8751__$1);
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
var args8759 = [];
var len__7214__auto___8809 = arguments.length;
var i__7215__auto___8810 = (0);
while(true){
if((i__7215__auto___8810 < len__7214__auto___8809)){
args8759.push((arguments[i__7215__auto___8810]));

var G__8811 = (i__7215__auto___8810 + (1));
i__7215__auto___8810 = G__8811;
continue;
} else {
}
break;
}

var G__8761 = args8759.length;
switch (G__8761) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8759.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__8646__auto___8813 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8646__auto___8813){
return (function (){
var f__8647__auto__ = (function (){var switch__8534__auto__ = ((function (c__8646__auto___8813){
return (function (state_8785){
var state_val_8786 = (state_8785[(1)]);
if((state_val_8786 === (7))){
var inst_8781 = (state_8785[(2)]);
var state_8785__$1 = state_8785;
var statearr_8787_8814 = state_8785__$1;
(statearr_8787_8814[(2)] = inst_8781);

(statearr_8787_8814[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8786 === (1))){
var state_8785__$1 = state_8785;
var statearr_8788_8815 = state_8785__$1;
(statearr_8788_8815[(2)] = null);

(statearr_8788_8815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8786 === (4))){
var inst_8764 = (state_8785[(7)]);
var inst_8764__$1 = (state_8785[(2)]);
var inst_8765 = (inst_8764__$1 == null);
var state_8785__$1 = (function (){var statearr_8789 = state_8785;
(statearr_8789[(7)] = inst_8764__$1);

return statearr_8789;
})();
if(cljs.core.truth_(inst_8765)){
var statearr_8790_8816 = state_8785__$1;
(statearr_8790_8816[(1)] = (5));

} else {
var statearr_8791_8817 = state_8785__$1;
(statearr_8791_8817[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8786 === (13))){
var state_8785__$1 = state_8785;
var statearr_8792_8818 = state_8785__$1;
(statearr_8792_8818[(2)] = null);

(statearr_8792_8818[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8786 === (6))){
var inst_8764 = (state_8785[(7)]);
var state_8785__$1 = state_8785;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8785__$1,(11),to,inst_8764);
} else {
if((state_val_8786 === (3))){
var inst_8783 = (state_8785[(2)]);
var state_8785__$1 = state_8785;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8785__$1,inst_8783);
} else {
if((state_val_8786 === (12))){
var state_8785__$1 = state_8785;
var statearr_8793_8819 = state_8785__$1;
(statearr_8793_8819[(2)] = null);

(statearr_8793_8819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8786 === (2))){
var state_8785__$1 = state_8785;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8785__$1,(4),from);
} else {
if((state_val_8786 === (11))){
var inst_8774 = (state_8785[(2)]);
var state_8785__$1 = state_8785;
if(cljs.core.truth_(inst_8774)){
var statearr_8794_8820 = state_8785__$1;
(statearr_8794_8820[(1)] = (12));

} else {
var statearr_8795_8821 = state_8785__$1;
(statearr_8795_8821[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8786 === (9))){
var state_8785__$1 = state_8785;
var statearr_8796_8822 = state_8785__$1;
(statearr_8796_8822[(2)] = null);

(statearr_8796_8822[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8786 === (5))){
var state_8785__$1 = state_8785;
if(cljs.core.truth_(close_QMARK_)){
var statearr_8797_8823 = state_8785__$1;
(statearr_8797_8823[(1)] = (8));

} else {
var statearr_8798_8824 = state_8785__$1;
(statearr_8798_8824[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8786 === (14))){
var inst_8779 = (state_8785[(2)]);
var state_8785__$1 = state_8785;
var statearr_8799_8825 = state_8785__$1;
(statearr_8799_8825[(2)] = inst_8779);

(statearr_8799_8825[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8786 === (10))){
var inst_8771 = (state_8785[(2)]);
var state_8785__$1 = state_8785;
var statearr_8800_8826 = state_8785__$1;
(statearr_8800_8826[(2)] = inst_8771);

(statearr_8800_8826[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8786 === (8))){
var inst_8768 = cljs.core.async.close_BANG_.call(null,to);
var state_8785__$1 = state_8785;
var statearr_8801_8827 = state_8785__$1;
(statearr_8801_8827[(2)] = inst_8768);

(statearr_8801_8827[(1)] = (10));


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
});})(c__8646__auto___8813))
;
return ((function (switch__8534__auto__,c__8646__auto___8813){
return (function() {
var cljs$core$async$state_machine__8535__auto__ = null;
var cljs$core$async$state_machine__8535__auto____0 = (function (){
var statearr_8805 = [null,null,null,null,null,null,null,null];
(statearr_8805[(0)] = cljs$core$async$state_machine__8535__auto__);

(statearr_8805[(1)] = (1));

return statearr_8805;
});
var cljs$core$async$state_machine__8535__auto____1 = (function (state_8785){
while(true){
var ret_value__8536__auto__ = (function (){try{while(true){
var result__8537__auto__ = switch__8534__auto__.call(null,state_8785);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8537__auto__;
}
break;
}
}catch (e8806){if((e8806 instanceof Object)){
var ex__8538__auto__ = e8806;
var statearr_8807_8828 = state_8785;
(statearr_8807_8828[(5)] = ex__8538__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8785);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8806;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8829 = state_8785;
state_8785 = G__8829;
continue;
} else {
return ret_value__8536__auto__;
}
break;
}
});
cljs$core$async$state_machine__8535__auto__ = function(state_8785){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8535__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8535__auto____1.call(this,state_8785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8535__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8535__auto____0;
cljs$core$async$state_machine__8535__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8535__auto____1;
return cljs$core$async$state_machine__8535__auto__;
})()
;})(switch__8534__auto__,c__8646__auto___8813))
})();
var state__8648__auto__ = (function (){var statearr_8808 = f__8647__auto__.call(null);
(statearr_8808[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8646__auto___8813);

return statearr_8808;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8648__auto__);
});})(c__8646__auto___8813))
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
return (function (p__9013){
var vec__9014 = p__9013;
var v = cljs.core.nth.call(null,vec__9014,(0),null);
var p = cljs.core.nth.call(null,vec__9014,(1),null);
var job = vec__9014;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__8646__auto___9196 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8646__auto___9196,res,vec__9014,v,p,job,jobs,results){
return (function (){
var f__8647__auto__ = (function (){var switch__8534__auto__ = ((function (c__8646__auto___9196,res,vec__9014,v,p,job,jobs,results){
return (function (state_9019){
var state_val_9020 = (state_9019[(1)]);
if((state_val_9020 === (1))){
var state_9019__$1 = state_9019;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9019__$1,(2),res,v);
} else {
if((state_val_9020 === (2))){
var inst_9016 = (state_9019[(2)]);
var inst_9017 = cljs.core.async.close_BANG_.call(null,res);
var state_9019__$1 = (function (){var statearr_9021 = state_9019;
(statearr_9021[(7)] = inst_9016);

return statearr_9021;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9019__$1,inst_9017);
} else {
return null;
}
}
});})(c__8646__auto___9196,res,vec__9014,v,p,job,jobs,results))
;
return ((function (switch__8534__auto__,c__8646__auto___9196,res,vec__9014,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8535__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8535__auto____0 = (function (){
var statearr_9025 = [null,null,null,null,null,null,null,null];
(statearr_9025[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8535__auto__);

(statearr_9025[(1)] = (1));

return statearr_9025;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8535__auto____1 = (function (state_9019){
while(true){
var ret_value__8536__auto__ = (function (){try{while(true){
var result__8537__auto__ = switch__8534__auto__.call(null,state_9019);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8537__auto__;
}
break;
}
}catch (e9026){if((e9026 instanceof Object)){
var ex__8538__auto__ = e9026;
var statearr_9027_9197 = state_9019;
(statearr_9027_9197[(5)] = ex__8538__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9019);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9026;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9198 = state_9019;
state_9019 = G__9198;
continue;
} else {
return ret_value__8536__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8535__auto__ = function(state_9019){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8535__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8535__auto____1.call(this,state_9019);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8535__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8535__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8535__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8535__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8535__auto__;
})()
;})(switch__8534__auto__,c__8646__auto___9196,res,vec__9014,v,p,job,jobs,results))
})();
var state__8648__auto__ = (function (){var statearr_9028 = f__8647__auto__.call(null);
(statearr_9028[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8646__auto___9196);

return statearr_9028;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8648__auto__);
});})(c__8646__auto___9196,res,vec__9014,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__9029){
var vec__9030 = p__9029;
var v = cljs.core.nth.call(null,vec__9030,(0),null);
var p = cljs.core.nth.call(null,vec__9030,(1),null);
var job = vec__9030;
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
var n__7059__auto___9199 = n;
var __9200 = (0);
while(true){
if((__9200 < n__7059__auto___9199)){
var G__9031_9201 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__9031_9201) {
case "compute":
var c__8646__auto___9203 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__9200,c__8646__auto___9203,G__9031_9201,n__7059__auto___9199,jobs,results,process,async){
return (function (){
var f__8647__auto__ = (function (){var switch__8534__auto__ = ((function (__9200,c__8646__auto___9203,G__9031_9201,n__7059__auto___9199,jobs,results,process,async){
return (function (state_9044){
var state_val_9045 = (state_9044[(1)]);
if((state_val_9045 === (1))){
var state_9044__$1 = state_9044;
var statearr_9046_9204 = state_9044__$1;
(statearr_9046_9204[(2)] = null);

(statearr_9046_9204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9045 === (2))){
var state_9044__$1 = state_9044;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9044__$1,(4),jobs);
} else {
if((state_val_9045 === (3))){
var inst_9042 = (state_9044[(2)]);
var state_9044__$1 = state_9044;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9044__$1,inst_9042);
} else {
if((state_val_9045 === (4))){
var inst_9034 = (state_9044[(2)]);
var inst_9035 = process.call(null,inst_9034);
var state_9044__$1 = state_9044;
if(cljs.core.truth_(inst_9035)){
var statearr_9047_9205 = state_9044__$1;
(statearr_9047_9205[(1)] = (5));

} else {
var statearr_9048_9206 = state_9044__$1;
(statearr_9048_9206[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9045 === (5))){
var state_9044__$1 = state_9044;
var statearr_9049_9207 = state_9044__$1;
(statearr_9049_9207[(2)] = null);

(statearr_9049_9207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9045 === (6))){
var state_9044__$1 = state_9044;
var statearr_9050_9208 = state_9044__$1;
(statearr_9050_9208[(2)] = null);

(statearr_9050_9208[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9045 === (7))){
var inst_9040 = (state_9044[(2)]);
var state_9044__$1 = state_9044;
var statearr_9051_9209 = state_9044__$1;
(statearr_9051_9209[(2)] = inst_9040);

(statearr_9051_9209[(1)] = (3));


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
});})(__9200,c__8646__auto___9203,G__9031_9201,n__7059__auto___9199,jobs,results,process,async))
;
return ((function (__9200,switch__8534__auto__,c__8646__auto___9203,G__9031_9201,n__7059__auto___9199,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8535__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8535__auto____0 = (function (){
var statearr_9055 = [null,null,null,null,null,null,null];
(statearr_9055[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8535__auto__);

(statearr_9055[(1)] = (1));

return statearr_9055;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8535__auto____1 = (function (state_9044){
while(true){
var ret_value__8536__auto__ = (function (){try{while(true){
var result__8537__auto__ = switch__8534__auto__.call(null,state_9044);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8537__auto__;
}
break;
}
}catch (e9056){if((e9056 instanceof Object)){
var ex__8538__auto__ = e9056;
var statearr_9057_9210 = state_9044;
(statearr_9057_9210[(5)] = ex__8538__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9044);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9056;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9211 = state_9044;
state_9044 = G__9211;
continue;
} else {
return ret_value__8536__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8535__auto__ = function(state_9044){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8535__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8535__auto____1.call(this,state_9044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8535__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8535__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8535__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8535__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8535__auto__;
})()
;})(__9200,switch__8534__auto__,c__8646__auto___9203,G__9031_9201,n__7059__auto___9199,jobs,results,process,async))
})();
var state__8648__auto__ = (function (){var statearr_9058 = f__8647__auto__.call(null);
(statearr_9058[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8646__auto___9203);

return statearr_9058;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8648__auto__);
});})(__9200,c__8646__auto___9203,G__9031_9201,n__7059__auto___9199,jobs,results,process,async))
);


break;
case "async":
var c__8646__auto___9212 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__9200,c__8646__auto___9212,G__9031_9201,n__7059__auto___9199,jobs,results,process,async){
return (function (){
var f__8647__auto__ = (function (){var switch__8534__auto__ = ((function (__9200,c__8646__auto___9212,G__9031_9201,n__7059__auto___9199,jobs,results,process,async){
return (function (state_9071){
var state_val_9072 = (state_9071[(1)]);
if((state_val_9072 === (1))){
var state_9071__$1 = state_9071;
var statearr_9073_9213 = state_9071__$1;
(statearr_9073_9213[(2)] = null);

(statearr_9073_9213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9072 === (2))){
var state_9071__$1 = state_9071;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9071__$1,(4),jobs);
} else {
if((state_val_9072 === (3))){
var inst_9069 = (state_9071[(2)]);
var state_9071__$1 = state_9071;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9071__$1,inst_9069);
} else {
if((state_val_9072 === (4))){
var inst_9061 = (state_9071[(2)]);
var inst_9062 = async.call(null,inst_9061);
var state_9071__$1 = state_9071;
if(cljs.core.truth_(inst_9062)){
var statearr_9074_9214 = state_9071__$1;
(statearr_9074_9214[(1)] = (5));

} else {
var statearr_9075_9215 = state_9071__$1;
(statearr_9075_9215[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9072 === (5))){
var state_9071__$1 = state_9071;
var statearr_9076_9216 = state_9071__$1;
(statearr_9076_9216[(2)] = null);

(statearr_9076_9216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9072 === (6))){
var state_9071__$1 = state_9071;
var statearr_9077_9217 = state_9071__$1;
(statearr_9077_9217[(2)] = null);

(statearr_9077_9217[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9072 === (7))){
var inst_9067 = (state_9071[(2)]);
var state_9071__$1 = state_9071;
var statearr_9078_9218 = state_9071__$1;
(statearr_9078_9218[(2)] = inst_9067);

(statearr_9078_9218[(1)] = (3));


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
});})(__9200,c__8646__auto___9212,G__9031_9201,n__7059__auto___9199,jobs,results,process,async))
;
return ((function (__9200,switch__8534__auto__,c__8646__auto___9212,G__9031_9201,n__7059__auto___9199,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8535__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8535__auto____0 = (function (){
var statearr_9082 = [null,null,null,null,null,null,null];
(statearr_9082[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8535__auto__);

(statearr_9082[(1)] = (1));

return statearr_9082;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8535__auto____1 = (function (state_9071){
while(true){
var ret_value__8536__auto__ = (function (){try{while(true){
var result__8537__auto__ = switch__8534__auto__.call(null,state_9071);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8537__auto__;
}
break;
}
}catch (e9083){if((e9083 instanceof Object)){
var ex__8538__auto__ = e9083;
var statearr_9084_9219 = state_9071;
(statearr_9084_9219[(5)] = ex__8538__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9071);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9083;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9220 = state_9071;
state_9071 = G__9220;
continue;
} else {
return ret_value__8536__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8535__auto__ = function(state_9071){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8535__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8535__auto____1.call(this,state_9071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8535__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8535__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8535__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8535__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8535__auto__;
})()
;})(__9200,switch__8534__auto__,c__8646__auto___9212,G__9031_9201,n__7059__auto___9199,jobs,results,process,async))
})();
var state__8648__auto__ = (function (){var statearr_9085 = f__8647__auto__.call(null);
(statearr_9085[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8646__auto___9212);

return statearr_9085;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8648__auto__);
});})(__9200,c__8646__auto___9212,G__9031_9201,n__7059__auto___9199,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__9221 = (__9200 + (1));
__9200 = G__9221;
continue;
} else {
}
break;
}

var c__8646__auto___9222 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8646__auto___9222,jobs,results,process,async){
return (function (){
var f__8647__auto__ = (function (){var switch__8534__auto__ = ((function (c__8646__auto___9222,jobs,results,process,async){
return (function (state_9107){
var state_val_9108 = (state_9107[(1)]);
if((state_val_9108 === (1))){
var state_9107__$1 = state_9107;
var statearr_9109_9223 = state_9107__$1;
(statearr_9109_9223[(2)] = null);

(statearr_9109_9223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9108 === (2))){
var state_9107__$1 = state_9107;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9107__$1,(4),from);
} else {
if((state_val_9108 === (3))){
var inst_9105 = (state_9107[(2)]);
var state_9107__$1 = state_9107;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9107__$1,inst_9105);
} else {
if((state_val_9108 === (4))){
var inst_9088 = (state_9107[(7)]);
var inst_9088__$1 = (state_9107[(2)]);
var inst_9089 = (inst_9088__$1 == null);
var state_9107__$1 = (function (){var statearr_9110 = state_9107;
(statearr_9110[(7)] = inst_9088__$1);

return statearr_9110;
})();
if(cljs.core.truth_(inst_9089)){
var statearr_9111_9224 = state_9107__$1;
(statearr_9111_9224[(1)] = (5));

} else {
var statearr_9112_9225 = state_9107__$1;
(statearr_9112_9225[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9108 === (5))){
var inst_9091 = cljs.core.async.close_BANG_.call(null,jobs);
var state_9107__$1 = state_9107;
var statearr_9113_9226 = state_9107__$1;
(statearr_9113_9226[(2)] = inst_9091);

(statearr_9113_9226[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9108 === (6))){
var inst_9088 = (state_9107[(7)]);
var inst_9093 = (state_9107[(8)]);
var inst_9093__$1 = cljs.core.async.chan.call(null,(1));
var inst_9094 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9095 = [inst_9088,inst_9093__$1];
var inst_9096 = (new cljs.core.PersistentVector(null,2,(5),inst_9094,inst_9095,null));
var state_9107__$1 = (function (){var statearr_9114 = state_9107;
(statearr_9114[(8)] = inst_9093__$1);

return statearr_9114;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9107__$1,(8),jobs,inst_9096);
} else {
if((state_val_9108 === (7))){
var inst_9103 = (state_9107[(2)]);
var state_9107__$1 = state_9107;
var statearr_9115_9227 = state_9107__$1;
(statearr_9115_9227[(2)] = inst_9103);

(statearr_9115_9227[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9108 === (8))){
var inst_9093 = (state_9107[(8)]);
var inst_9098 = (state_9107[(2)]);
var state_9107__$1 = (function (){var statearr_9116 = state_9107;
(statearr_9116[(9)] = inst_9098);

return statearr_9116;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9107__$1,(9),results,inst_9093);
} else {
if((state_val_9108 === (9))){
var inst_9100 = (state_9107[(2)]);
var state_9107__$1 = (function (){var statearr_9117 = state_9107;
(statearr_9117[(10)] = inst_9100);

return statearr_9117;
})();
var statearr_9118_9228 = state_9107__$1;
(statearr_9118_9228[(2)] = null);

(statearr_9118_9228[(1)] = (2));


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
});})(c__8646__auto___9222,jobs,results,process,async))
;
return ((function (switch__8534__auto__,c__8646__auto___9222,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8535__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8535__auto____0 = (function (){
var statearr_9122 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_9122[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8535__auto__);

(statearr_9122[(1)] = (1));

return statearr_9122;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8535__auto____1 = (function (state_9107){
while(true){
var ret_value__8536__auto__ = (function (){try{while(true){
var result__8537__auto__ = switch__8534__auto__.call(null,state_9107);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8537__auto__;
}
break;
}
}catch (e9123){if((e9123 instanceof Object)){
var ex__8538__auto__ = e9123;
var statearr_9124_9229 = state_9107;
(statearr_9124_9229[(5)] = ex__8538__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9107);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9123;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9230 = state_9107;
state_9107 = G__9230;
continue;
} else {
return ret_value__8536__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8535__auto__ = function(state_9107){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8535__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8535__auto____1.call(this,state_9107);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8535__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8535__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8535__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8535__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8535__auto__;
})()
;})(switch__8534__auto__,c__8646__auto___9222,jobs,results,process,async))
})();
var state__8648__auto__ = (function (){var statearr_9125 = f__8647__auto__.call(null);
(statearr_9125[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8646__auto___9222);

return statearr_9125;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8648__auto__);
});})(c__8646__auto___9222,jobs,results,process,async))
);


var c__8646__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8646__auto__,jobs,results,process,async){
return (function (){
var f__8647__auto__ = (function (){var switch__8534__auto__ = ((function (c__8646__auto__,jobs,results,process,async){
return (function (state_9163){
var state_val_9164 = (state_9163[(1)]);
if((state_val_9164 === (7))){
var inst_9159 = (state_9163[(2)]);
var state_9163__$1 = state_9163;
var statearr_9165_9231 = state_9163__$1;
(statearr_9165_9231[(2)] = inst_9159);

(statearr_9165_9231[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9164 === (20))){
var state_9163__$1 = state_9163;
var statearr_9166_9232 = state_9163__$1;
(statearr_9166_9232[(2)] = null);

(statearr_9166_9232[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9164 === (1))){
var state_9163__$1 = state_9163;
var statearr_9167_9233 = state_9163__$1;
(statearr_9167_9233[(2)] = null);

(statearr_9167_9233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9164 === (4))){
var inst_9128 = (state_9163[(7)]);
var inst_9128__$1 = (state_9163[(2)]);
var inst_9129 = (inst_9128__$1 == null);
var state_9163__$1 = (function (){var statearr_9168 = state_9163;
(statearr_9168[(7)] = inst_9128__$1);

return statearr_9168;
})();
if(cljs.core.truth_(inst_9129)){
var statearr_9169_9234 = state_9163__$1;
(statearr_9169_9234[(1)] = (5));

} else {
var statearr_9170_9235 = state_9163__$1;
(statearr_9170_9235[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9164 === (15))){
var inst_9141 = (state_9163[(8)]);
var state_9163__$1 = state_9163;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9163__$1,(18),to,inst_9141);
} else {
if((state_val_9164 === (21))){
var inst_9154 = (state_9163[(2)]);
var state_9163__$1 = state_9163;
var statearr_9171_9236 = state_9163__$1;
(statearr_9171_9236[(2)] = inst_9154);

(statearr_9171_9236[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9164 === (13))){
var inst_9156 = (state_9163[(2)]);
var state_9163__$1 = (function (){var statearr_9172 = state_9163;
(statearr_9172[(9)] = inst_9156);

return statearr_9172;
})();
var statearr_9173_9237 = state_9163__$1;
(statearr_9173_9237[(2)] = null);

(statearr_9173_9237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9164 === (6))){
var inst_9128 = (state_9163[(7)]);
var state_9163__$1 = state_9163;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9163__$1,(11),inst_9128);
} else {
if((state_val_9164 === (17))){
var inst_9149 = (state_9163[(2)]);
var state_9163__$1 = state_9163;
if(cljs.core.truth_(inst_9149)){
var statearr_9174_9238 = state_9163__$1;
(statearr_9174_9238[(1)] = (19));

} else {
var statearr_9175_9239 = state_9163__$1;
(statearr_9175_9239[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9164 === (3))){
var inst_9161 = (state_9163[(2)]);
var state_9163__$1 = state_9163;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9163__$1,inst_9161);
} else {
if((state_val_9164 === (12))){
var inst_9138 = (state_9163[(10)]);
var state_9163__$1 = state_9163;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9163__$1,(14),inst_9138);
} else {
if((state_val_9164 === (2))){
var state_9163__$1 = state_9163;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9163__$1,(4),results);
} else {
if((state_val_9164 === (19))){
var state_9163__$1 = state_9163;
var statearr_9176_9240 = state_9163__$1;
(statearr_9176_9240[(2)] = null);

(statearr_9176_9240[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9164 === (11))){
var inst_9138 = (state_9163[(2)]);
var state_9163__$1 = (function (){var statearr_9177 = state_9163;
(statearr_9177[(10)] = inst_9138);

return statearr_9177;
})();
var statearr_9178_9241 = state_9163__$1;
(statearr_9178_9241[(2)] = null);

(statearr_9178_9241[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9164 === (9))){
var state_9163__$1 = state_9163;
var statearr_9179_9242 = state_9163__$1;
(statearr_9179_9242[(2)] = null);

(statearr_9179_9242[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9164 === (5))){
var state_9163__$1 = state_9163;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9180_9243 = state_9163__$1;
(statearr_9180_9243[(1)] = (8));

} else {
var statearr_9181_9244 = state_9163__$1;
(statearr_9181_9244[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9164 === (14))){
var inst_9143 = (state_9163[(11)]);
var inst_9141 = (state_9163[(8)]);
var inst_9141__$1 = (state_9163[(2)]);
var inst_9142 = (inst_9141__$1 == null);
var inst_9143__$1 = cljs.core.not.call(null,inst_9142);
var state_9163__$1 = (function (){var statearr_9182 = state_9163;
(statearr_9182[(11)] = inst_9143__$1);

(statearr_9182[(8)] = inst_9141__$1);

return statearr_9182;
})();
if(inst_9143__$1){
var statearr_9183_9245 = state_9163__$1;
(statearr_9183_9245[(1)] = (15));

} else {
var statearr_9184_9246 = state_9163__$1;
(statearr_9184_9246[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9164 === (16))){
var inst_9143 = (state_9163[(11)]);
var state_9163__$1 = state_9163;
var statearr_9185_9247 = state_9163__$1;
(statearr_9185_9247[(2)] = inst_9143);

(statearr_9185_9247[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9164 === (10))){
var inst_9135 = (state_9163[(2)]);
var state_9163__$1 = state_9163;
var statearr_9186_9248 = state_9163__$1;
(statearr_9186_9248[(2)] = inst_9135);

(statearr_9186_9248[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9164 === (18))){
var inst_9146 = (state_9163[(2)]);
var state_9163__$1 = state_9163;
var statearr_9187_9249 = state_9163__$1;
(statearr_9187_9249[(2)] = inst_9146);

(statearr_9187_9249[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9164 === (8))){
var inst_9132 = cljs.core.async.close_BANG_.call(null,to);
var state_9163__$1 = state_9163;
var statearr_9188_9250 = state_9163__$1;
(statearr_9188_9250[(2)] = inst_9132);

(statearr_9188_9250[(1)] = (10));


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
});})(c__8646__auto__,jobs,results,process,async))
;
return ((function (switch__8534__auto__,c__8646__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8535__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8535__auto____0 = (function (){
var statearr_9192 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9192[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8535__auto__);

(statearr_9192[(1)] = (1));

return statearr_9192;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8535__auto____1 = (function (state_9163){
while(true){
var ret_value__8536__auto__ = (function (){try{while(true){
var result__8537__auto__ = switch__8534__auto__.call(null,state_9163);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8537__auto__;
}
break;
}
}catch (e9193){if((e9193 instanceof Object)){
var ex__8538__auto__ = e9193;
var statearr_9194_9251 = state_9163;
(statearr_9194_9251[(5)] = ex__8538__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9163);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9193;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9252 = state_9163;
state_9163 = G__9252;
continue;
} else {
return ret_value__8536__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8535__auto__ = function(state_9163){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8535__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8535__auto____1.call(this,state_9163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8535__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8535__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8535__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8535__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8535__auto__;
})()
;})(switch__8534__auto__,c__8646__auto__,jobs,results,process,async))
})();
var state__8648__auto__ = (function (){var statearr_9195 = f__8647__auto__.call(null);
(statearr_9195[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8646__auto__);

return statearr_9195;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8648__auto__);
});})(c__8646__auto__,jobs,results,process,async))
);

return c__8646__auto__;
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
var args9253 = [];
var len__7214__auto___9256 = arguments.length;
var i__7215__auto___9257 = (0);
while(true){
if((i__7215__auto___9257 < len__7214__auto___9256)){
args9253.push((arguments[i__7215__auto___9257]));

var G__9258 = (i__7215__auto___9257 + (1));
i__7215__auto___9257 = G__9258;
continue;
} else {
}
break;
}

var G__9255 = args9253.length;
switch (G__9255) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9253.length)].join('')));

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
var args9260 = [];
var len__7214__auto___9263 = arguments.length;
var i__7215__auto___9264 = (0);
while(true){
if((i__7215__auto___9264 < len__7214__auto___9263)){
args9260.push((arguments[i__7215__auto___9264]));

var G__9265 = (i__7215__auto___9264 + (1));
i__7215__auto___9264 = G__9265;
continue;
} else {
}
break;
}

var G__9262 = args9260.length;
switch (G__9262) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9260.length)].join('')));

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
var args9267 = [];
var len__7214__auto___9320 = arguments.length;
var i__7215__auto___9321 = (0);
while(true){
if((i__7215__auto___9321 < len__7214__auto___9320)){
args9267.push((arguments[i__7215__auto___9321]));

var G__9322 = (i__7215__auto___9321 + (1));
i__7215__auto___9321 = G__9322;
continue;
} else {
}
break;
}

var G__9269 = args9267.length;
switch (G__9269) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9267.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__8646__auto___9324 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8646__auto___9324,tc,fc){
return (function (){
var f__8647__auto__ = (function (){var switch__8534__auto__ = ((function (c__8646__auto___9324,tc,fc){
return (function (state_9295){
var state_val_9296 = (state_9295[(1)]);
if((state_val_9296 === (7))){
var inst_9291 = (state_9295[(2)]);
var state_9295__$1 = state_9295;
var statearr_9297_9325 = state_9295__$1;
(statearr_9297_9325[(2)] = inst_9291);

(statearr_9297_9325[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9296 === (1))){
var state_9295__$1 = state_9295;
var statearr_9298_9326 = state_9295__$1;
(statearr_9298_9326[(2)] = null);

(statearr_9298_9326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9296 === (4))){
var inst_9272 = (state_9295[(7)]);
var inst_9272__$1 = (state_9295[(2)]);
var inst_9273 = (inst_9272__$1 == null);
var state_9295__$1 = (function (){var statearr_9299 = state_9295;
(statearr_9299[(7)] = inst_9272__$1);

return statearr_9299;
})();
if(cljs.core.truth_(inst_9273)){
var statearr_9300_9327 = state_9295__$1;
(statearr_9300_9327[(1)] = (5));

} else {
var statearr_9301_9328 = state_9295__$1;
(statearr_9301_9328[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9296 === (13))){
var state_9295__$1 = state_9295;
var statearr_9302_9329 = state_9295__$1;
(statearr_9302_9329[(2)] = null);

(statearr_9302_9329[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9296 === (6))){
var inst_9272 = (state_9295[(7)]);
var inst_9278 = p.call(null,inst_9272);
var state_9295__$1 = state_9295;
if(cljs.core.truth_(inst_9278)){
var statearr_9303_9330 = state_9295__$1;
(statearr_9303_9330[(1)] = (9));

} else {
var statearr_9304_9331 = state_9295__$1;
(statearr_9304_9331[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9296 === (3))){
var inst_9293 = (state_9295[(2)]);
var state_9295__$1 = state_9295;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9295__$1,inst_9293);
} else {
if((state_val_9296 === (12))){
var state_9295__$1 = state_9295;
var statearr_9305_9332 = state_9295__$1;
(statearr_9305_9332[(2)] = null);

(statearr_9305_9332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9296 === (2))){
var state_9295__$1 = state_9295;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9295__$1,(4),ch);
} else {
if((state_val_9296 === (11))){
var inst_9272 = (state_9295[(7)]);
var inst_9282 = (state_9295[(2)]);
var state_9295__$1 = state_9295;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9295__$1,(8),inst_9282,inst_9272);
} else {
if((state_val_9296 === (9))){
var state_9295__$1 = state_9295;
var statearr_9306_9333 = state_9295__$1;
(statearr_9306_9333[(2)] = tc);

(statearr_9306_9333[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9296 === (5))){
var inst_9275 = cljs.core.async.close_BANG_.call(null,tc);
var inst_9276 = cljs.core.async.close_BANG_.call(null,fc);
var state_9295__$1 = (function (){var statearr_9307 = state_9295;
(statearr_9307[(8)] = inst_9275);

return statearr_9307;
})();
var statearr_9308_9334 = state_9295__$1;
(statearr_9308_9334[(2)] = inst_9276);

(statearr_9308_9334[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9296 === (14))){
var inst_9289 = (state_9295[(2)]);
var state_9295__$1 = state_9295;
var statearr_9309_9335 = state_9295__$1;
(statearr_9309_9335[(2)] = inst_9289);

(statearr_9309_9335[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9296 === (10))){
var state_9295__$1 = state_9295;
var statearr_9310_9336 = state_9295__$1;
(statearr_9310_9336[(2)] = fc);

(statearr_9310_9336[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9296 === (8))){
var inst_9284 = (state_9295[(2)]);
var state_9295__$1 = state_9295;
if(cljs.core.truth_(inst_9284)){
var statearr_9311_9337 = state_9295__$1;
(statearr_9311_9337[(1)] = (12));

} else {
var statearr_9312_9338 = state_9295__$1;
(statearr_9312_9338[(1)] = (13));

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
});})(c__8646__auto___9324,tc,fc))
;
return ((function (switch__8534__auto__,c__8646__auto___9324,tc,fc){
return (function() {
var cljs$core$async$state_machine__8535__auto__ = null;
var cljs$core$async$state_machine__8535__auto____0 = (function (){
var statearr_9316 = [null,null,null,null,null,null,null,null,null];
(statearr_9316[(0)] = cljs$core$async$state_machine__8535__auto__);

(statearr_9316[(1)] = (1));

return statearr_9316;
});
var cljs$core$async$state_machine__8535__auto____1 = (function (state_9295){
while(true){
var ret_value__8536__auto__ = (function (){try{while(true){
var result__8537__auto__ = switch__8534__auto__.call(null,state_9295);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8537__auto__;
}
break;
}
}catch (e9317){if((e9317 instanceof Object)){
var ex__8538__auto__ = e9317;
var statearr_9318_9339 = state_9295;
(statearr_9318_9339[(5)] = ex__8538__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9295);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9317;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9340 = state_9295;
state_9295 = G__9340;
continue;
} else {
return ret_value__8536__auto__;
}
break;
}
});
cljs$core$async$state_machine__8535__auto__ = function(state_9295){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8535__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8535__auto____1.call(this,state_9295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8535__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8535__auto____0;
cljs$core$async$state_machine__8535__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8535__auto____1;
return cljs$core$async$state_machine__8535__auto__;
})()
;})(switch__8534__auto__,c__8646__auto___9324,tc,fc))
})();
var state__8648__auto__ = (function (){var statearr_9319 = f__8647__auto__.call(null);
(statearr_9319[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8646__auto___9324);

return statearr_9319;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8648__auto__);
});})(c__8646__auto___9324,tc,fc))
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
var c__8646__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8646__auto__){
return (function (){
var f__8647__auto__ = (function (){var switch__8534__auto__ = ((function (c__8646__auto__){
return (function (state_9404){
var state_val_9405 = (state_9404[(1)]);
if((state_val_9405 === (7))){
var inst_9400 = (state_9404[(2)]);
var state_9404__$1 = state_9404;
var statearr_9406_9427 = state_9404__$1;
(statearr_9406_9427[(2)] = inst_9400);

(statearr_9406_9427[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9405 === (1))){
var inst_9384 = init;
var state_9404__$1 = (function (){var statearr_9407 = state_9404;
(statearr_9407[(7)] = inst_9384);

return statearr_9407;
})();
var statearr_9408_9428 = state_9404__$1;
(statearr_9408_9428[(2)] = null);

(statearr_9408_9428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9405 === (4))){
var inst_9387 = (state_9404[(8)]);
var inst_9387__$1 = (state_9404[(2)]);
var inst_9388 = (inst_9387__$1 == null);
var state_9404__$1 = (function (){var statearr_9409 = state_9404;
(statearr_9409[(8)] = inst_9387__$1);

return statearr_9409;
})();
if(cljs.core.truth_(inst_9388)){
var statearr_9410_9429 = state_9404__$1;
(statearr_9410_9429[(1)] = (5));

} else {
var statearr_9411_9430 = state_9404__$1;
(statearr_9411_9430[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9405 === (6))){
var inst_9391 = (state_9404[(9)]);
var inst_9384 = (state_9404[(7)]);
var inst_9387 = (state_9404[(8)]);
var inst_9391__$1 = f.call(null,inst_9384,inst_9387);
var inst_9392 = cljs.core.reduced_QMARK_.call(null,inst_9391__$1);
var state_9404__$1 = (function (){var statearr_9412 = state_9404;
(statearr_9412[(9)] = inst_9391__$1);

return statearr_9412;
})();
if(inst_9392){
var statearr_9413_9431 = state_9404__$1;
(statearr_9413_9431[(1)] = (8));

} else {
var statearr_9414_9432 = state_9404__$1;
(statearr_9414_9432[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9405 === (3))){
var inst_9402 = (state_9404[(2)]);
var state_9404__$1 = state_9404;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9404__$1,inst_9402);
} else {
if((state_val_9405 === (2))){
var state_9404__$1 = state_9404;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9404__$1,(4),ch);
} else {
if((state_val_9405 === (9))){
var inst_9391 = (state_9404[(9)]);
var inst_9384 = inst_9391;
var state_9404__$1 = (function (){var statearr_9415 = state_9404;
(statearr_9415[(7)] = inst_9384);

return statearr_9415;
})();
var statearr_9416_9433 = state_9404__$1;
(statearr_9416_9433[(2)] = null);

(statearr_9416_9433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9405 === (5))){
var inst_9384 = (state_9404[(7)]);
var state_9404__$1 = state_9404;
var statearr_9417_9434 = state_9404__$1;
(statearr_9417_9434[(2)] = inst_9384);

(statearr_9417_9434[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9405 === (10))){
var inst_9398 = (state_9404[(2)]);
var state_9404__$1 = state_9404;
var statearr_9418_9435 = state_9404__$1;
(statearr_9418_9435[(2)] = inst_9398);

(statearr_9418_9435[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9405 === (8))){
var inst_9391 = (state_9404[(9)]);
var inst_9394 = cljs.core.deref.call(null,inst_9391);
var state_9404__$1 = state_9404;
var statearr_9419_9436 = state_9404__$1;
(statearr_9419_9436[(2)] = inst_9394);

(statearr_9419_9436[(1)] = (10));


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
});})(c__8646__auto__))
;
return ((function (switch__8534__auto__,c__8646__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__8535__auto__ = null;
var cljs$core$async$reduce_$_state_machine__8535__auto____0 = (function (){
var statearr_9423 = [null,null,null,null,null,null,null,null,null,null];
(statearr_9423[(0)] = cljs$core$async$reduce_$_state_machine__8535__auto__);

(statearr_9423[(1)] = (1));

return statearr_9423;
});
var cljs$core$async$reduce_$_state_machine__8535__auto____1 = (function (state_9404){
while(true){
var ret_value__8536__auto__ = (function (){try{while(true){
var result__8537__auto__ = switch__8534__auto__.call(null,state_9404);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8537__auto__;
}
break;
}
}catch (e9424){if((e9424 instanceof Object)){
var ex__8538__auto__ = e9424;
var statearr_9425_9437 = state_9404;
(statearr_9425_9437[(5)] = ex__8538__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9404);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9424;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9438 = state_9404;
state_9404 = G__9438;
continue;
} else {
return ret_value__8536__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__8535__auto__ = function(state_9404){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__8535__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__8535__auto____1.call(this,state_9404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__8535__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__8535__auto____0;
cljs$core$async$reduce_$_state_machine__8535__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__8535__auto____1;
return cljs$core$async$reduce_$_state_machine__8535__auto__;
})()
;})(switch__8534__auto__,c__8646__auto__))
})();
var state__8648__auto__ = (function (){var statearr_9426 = f__8647__auto__.call(null);
(statearr_9426[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8646__auto__);

return statearr_9426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8648__auto__);
});})(c__8646__auto__))
);

return c__8646__auto__;
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
var args9439 = [];
var len__7214__auto___9491 = arguments.length;
var i__7215__auto___9492 = (0);
while(true){
if((i__7215__auto___9492 < len__7214__auto___9491)){
args9439.push((arguments[i__7215__auto___9492]));

var G__9493 = (i__7215__auto___9492 + (1));
i__7215__auto___9492 = G__9493;
continue;
} else {
}
break;
}

var G__9441 = args9439.length;
switch (G__9441) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9439.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__8646__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8646__auto__){
return (function (){
var f__8647__auto__ = (function (){var switch__8534__auto__ = ((function (c__8646__auto__){
return (function (state_9466){
var state_val_9467 = (state_9466[(1)]);
if((state_val_9467 === (7))){
var inst_9448 = (state_9466[(2)]);
var state_9466__$1 = state_9466;
var statearr_9468_9495 = state_9466__$1;
(statearr_9468_9495[(2)] = inst_9448);

(statearr_9468_9495[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9467 === (1))){
var inst_9442 = cljs.core.seq.call(null,coll);
var inst_9443 = inst_9442;
var state_9466__$1 = (function (){var statearr_9469 = state_9466;
(statearr_9469[(7)] = inst_9443);

return statearr_9469;
})();
var statearr_9470_9496 = state_9466__$1;
(statearr_9470_9496[(2)] = null);

(statearr_9470_9496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9467 === (4))){
var inst_9443 = (state_9466[(7)]);
var inst_9446 = cljs.core.first.call(null,inst_9443);
var state_9466__$1 = state_9466;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9466__$1,(7),ch,inst_9446);
} else {
if((state_val_9467 === (13))){
var inst_9460 = (state_9466[(2)]);
var state_9466__$1 = state_9466;
var statearr_9471_9497 = state_9466__$1;
(statearr_9471_9497[(2)] = inst_9460);

(statearr_9471_9497[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9467 === (6))){
var inst_9451 = (state_9466[(2)]);
var state_9466__$1 = state_9466;
if(cljs.core.truth_(inst_9451)){
var statearr_9472_9498 = state_9466__$1;
(statearr_9472_9498[(1)] = (8));

} else {
var statearr_9473_9499 = state_9466__$1;
(statearr_9473_9499[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9467 === (3))){
var inst_9464 = (state_9466[(2)]);
var state_9466__$1 = state_9466;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9466__$1,inst_9464);
} else {
if((state_val_9467 === (12))){
var state_9466__$1 = state_9466;
var statearr_9474_9500 = state_9466__$1;
(statearr_9474_9500[(2)] = null);

(statearr_9474_9500[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9467 === (2))){
var inst_9443 = (state_9466[(7)]);
var state_9466__$1 = state_9466;
if(cljs.core.truth_(inst_9443)){
var statearr_9475_9501 = state_9466__$1;
(statearr_9475_9501[(1)] = (4));

} else {
var statearr_9476_9502 = state_9466__$1;
(statearr_9476_9502[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9467 === (11))){
var inst_9457 = cljs.core.async.close_BANG_.call(null,ch);
var state_9466__$1 = state_9466;
var statearr_9477_9503 = state_9466__$1;
(statearr_9477_9503[(2)] = inst_9457);

(statearr_9477_9503[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9467 === (9))){
var state_9466__$1 = state_9466;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9478_9504 = state_9466__$1;
(statearr_9478_9504[(1)] = (11));

} else {
var statearr_9479_9505 = state_9466__$1;
(statearr_9479_9505[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9467 === (5))){
var inst_9443 = (state_9466[(7)]);
var state_9466__$1 = state_9466;
var statearr_9480_9506 = state_9466__$1;
(statearr_9480_9506[(2)] = inst_9443);

(statearr_9480_9506[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9467 === (10))){
var inst_9462 = (state_9466[(2)]);
var state_9466__$1 = state_9466;
var statearr_9481_9507 = state_9466__$1;
(statearr_9481_9507[(2)] = inst_9462);

(statearr_9481_9507[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9467 === (8))){
var inst_9443 = (state_9466[(7)]);
var inst_9453 = cljs.core.next.call(null,inst_9443);
var inst_9443__$1 = inst_9453;
var state_9466__$1 = (function (){var statearr_9482 = state_9466;
(statearr_9482[(7)] = inst_9443__$1);

return statearr_9482;
})();
var statearr_9483_9508 = state_9466__$1;
(statearr_9483_9508[(2)] = null);

(statearr_9483_9508[(1)] = (2));


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
});})(c__8646__auto__))
;
return ((function (switch__8534__auto__,c__8646__auto__){
return (function() {
var cljs$core$async$state_machine__8535__auto__ = null;
var cljs$core$async$state_machine__8535__auto____0 = (function (){
var statearr_9487 = [null,null,null,null,null,null,null,null];
(statearr_9487[(0)] = cljs$core$async$state_machine__8535__auto__);

(statearr_9487[(1)] = (1));

return statearr_9487;
});
var cljs$core$async$state_machine__8535__auto____1 = (function (state_9466){
while(true){
var ret_value__8536__auto__ = (function (){try{while(true){
var result__8537__auto__ = switch__8534__auto__.call(null,state_9466);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8537__auto__;
}
break;
}
}catch (e9488){if((e9488 instanceof Object)){
var ex__8538__auto__ = e9488;
var statearr_9489_9509 = state_9466;
(statearr_9489_9509[(5)] = ex__8538__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9466);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9488;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9510 = state_9466;
state_9466 = G__9510;
continue;
} else {
return ret_value__8536__auto__;
}
break;
}
});
cljs$core$async$state_machine__8535__auto__ = function(state_9466){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8535__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8535__auto____1.call(this,state_9466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8535__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8535__auto____0;
cljs$core$async$state_machine__8535__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8535__auto____1;
return cljs$core$async$state_machine__8535__auto__;
})()
;})(switch__8534__auto__,c__8646__auto__))
})();
var state__8648__auto__ = (function (){var statearr_9490 = f__8647__auto__.call(null);
(statearr_9490[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8646__auto__);

return statearr_9490;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8648__auto__);
});})(c__8646__auto__))
);

return c__8646__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async9732 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9732 = (function (mult,ch,cs,meta9733){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta9733 = meta9733;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9732.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_9734,meta9733__$1){
var self__ = this;
var _9734__$1 = this;
return (new cljs.core.async.t_cljs$core$async9732(self__.mult,self__.ch,self__.cs,meta9733__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async9732.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_9734){
var self__ = this;
var _9734__$1 = this;
return self__.meta9733;
});})(cs))
;

cljs.core.async.t_cljs$core$async9732.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async9732.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async9732.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async9732.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async9732.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async9732.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async9732.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta9733","meta9733",673987940,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async9732.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9732.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9732";

cljs.core.async.t_cljs$core$async9732.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async9732");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async9732 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async9732(mult__$1,ch__$1,cs__$1,meta9733){
return (new cljs.core.async.t_cljs$core$async9732(mult__$1,ch__$1,cs__$1,meta9733));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async9732(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__8646__auto___9953 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8646__auto___9953,cs,m,dchan,dctr,done){
return (function (){
var f__8647__auto__ = (function (){var switch__8534__auto__ = ((function (c__8646__auto___9953,cs,m,dchan,dctr,done){
return (function (state_9865){
var state_val_9866 = (state_9865[(1)]);
if((state_val_9866 === (7))){
var inst_9861 = (state_9865[(2)]);
var state_9865__$1 = state_9865;
var statearr_9867_9954 = state_9865__$1;
(statearr_9867_9954[(2)] = inst_9861);

(statearr_9867_9954[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9866 === (20))){
var inst_9766 = (state_9865[(7)]);
var inst_9776 = cljs.core.first.call(null,inst_9766);
var inst_9777 = cljs.core.nth.call(null,inst_9776,(0),null);
var inst_9778 = cljs.core.nth.call(null,inst_9776,(1),null);
var state_9865__$1 = (function (){var statearr_9868 = state_9865;
(statearr_9868[(8)] = inst_9777);

return statearr_9868;
})();
if(cljs.core.truth_(inst_9778)){
var statearr_9869_9955 = state_9865__$1;
(statearr_9869_9955[(1)] = (22));

} else {
var statearr_9870_9956 = state_9865__$1;
(statearr_9870_9956[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9866 === (27))){
var inst_9813 = (state_9865[(9)]);
var inst_9806 = (state_9865[(10)]);
var inst_9808 = (state_9865[(11)]);
var inst_9737 = (state_9865[(12)]);
var inst_9813__$1 = cljs.core._nth.call(null,inst_9806,inst_9808);
var inst_9814 = cljs.core.async.put_BANG_.call(null,inst_9813__$1,inst_9737,done);
var state_9865__$1 = (function (){var statearr_9871 = state_9865;
(statearr_9871[(9)] = inst_9813__$1);

return statearr_9871;
})();
if(cljs.core.truth_(inst_9814)){
var statearr_9872_9957 = state_9865__$1;
(statearr_9872_9957[(1)] = (30));

} else {
var statearr_9873_9958 = state_9865__$1;
(statearr_9873_9958[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9866 === (1))){
var state_9865__$1 = state_9865;
var statearr_9874_9959 = state_9865__$1;
(statearr_9874_9959[(2)] = null);

(statearr_9874_9959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9866 === (24))){
var inst_9766 = (state_9865[(7)]);
var inst_9783 = (state_9865[(2)]);
var inst_9784 = cljs.core.next.call(null,inst_9766);
var inst_9746 = inst_9784;
var inst_9747 = null;
var inst_9748 = (0);
var inst_9749 = (0);
var state_9865__$1 = (function (){var statearr_9875 = state_9865;
(statearr_9875[(13)] = inst_9783);

(statearr_9875[(14)] = inst_9746);

(statearr_9875[(15)] = inst_9749);

(statearr_9875[(16)] = inst_9748);

(statearr_9875[(17)] = inst_9747);

return statearr_9875;
})();
var statearr_9876_9960 = state_9865__$1;
(statearr_9876_9960[(2)] = null);

(statearr_9876_9960[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9866 === (39))){
var state_9865__$1 = state_9865;
var statearr_9880_9961 = state_9865__$1;
(statearr_9880_9961[(2)] = null);

(statearr_9880_9961[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9866 === (4))){
var inst_9737 = (state_9865[(12)]);
var inst_9737__$1 = (state_9865[(2)]);
var inst_9738 = (inst_9737__$1 == null);
var state_9865__$1 = (function (){var statearr_9881 = state_9865;
(statearr_9881[(12)] = inst_9737__$1);

return statearr_9881;
})();
if(cljs.core.truth_(inst_9738)){
var statearr_9882_9962 = state_9865__$1;
(statearr_9882_9962[(1)] = (5));

} else {
var statearr_9883_9963 = state_9865__$1;
(statearr_9883_9963[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9866 === (15))){
var inst_9746 = (state_9865[(14)]);
var inst_9749 = (state_9865[(15)]);
var inst_9748 = (state_9865[(16)]);
var inst_9747 = (state_9865[(17)]);
var inst_9762 = (state_9865[(2)]);
var inst_9763 = (inst_9749 + (1));
var tmp9877 = inst_9746;
var tmp9878 = inst_9748;
var tmp9879 = inst_9747;
var inst_9746__$1 = tmp9877;
var inst_9747__$1 = tmp9879;
var inst_9748__$1 = tmp9878;
var inst_9749__$1 = inst_9763;
var state_9865__$1 = (function (){var statearr_9884 = state_9865;
(statearr_9884[(14)] = inst_9746__$1);

(statearr_9884[(15)] = inst_9749__$1);

(statearr_9884[(16)] = inst_9748__$1);

(statearr_9884[(17)] = inst_9747__$1);

(statearr_9884[(18)] = inst_9762);

return statearr_9884;
})();
var statearr_9885_9964 = state_9865__$1;
(statearr_9885_9964[(2)] = null);

(statearr_9885_9964[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9866 === (21))){
var inst_9787 = (state_9865[(2)]);
var state_9865__$1 = state_9865;
var statearr_9889_9965 = state_9865__$1;
(statearr_9889_9965[(2)] = inst_9787);

(statearr_9889_9965[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9866 === (31))){
var inst_9813 = (state_9865[(9)]);
var inst_9817 = done.call(null,null);
var inst_9818 = cljs.core.async.untap_STAR_.call(null,m,inst_9813);
var state_9865__$1 = (function (){var statearr_9890 = state_9865;
(statearr_9890[(19)] = inst_9817);

return statearr_9890;
})();
var statearr_9891_9966 = state_9865__$1;
(statearr_9891_9966[(2)] = inst_9818);

(statearr_9891_9966[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9866 === (32))){
var inst_9807 = (state_9865[(20)]);
var inst_9805 = (state_9865[(21)]);
var inst_9806 = (state_9865[(10)]);
var inst_9808 = (state_9865[(11)]);
var inst_9820 = (state_9865[(2)]);
var inst_9821 = (inst_9808 + (1));
var tmp9886 = inst_9807;
var tmp9887 = inst_9805;
var tmp9888 = inst_9806;
var inst_9805__$1 = tmp9887;
var inst_9806__$1 = tmp9888;
var inst_9807__$1 = tmp9886;
var inst_9808__$1 = inst_9821;
var state_9865__$1 = (function (){var statearr_9892 = state_9865;
(statearr_9892[(20)] = inst_9807__$1);

(statearr_9892[(21)] = inst_9805__$1);

(statearr_9892[(22)] = inst_9820);

(statearr_9892[(10)] = inst_9806__$1);

(statearr_9892[(11)] = inst_9808__$1);

return statearr_9892;
})();
var statearr_9893_9967 = state_9865__$1;
(statearr_9893_9967[(2)] = null);

(statearr_9893_9967[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9866 === (40))){
var inst_9833 = (state_9865[(23)]);
var inst_9837 = done.call(null,null);
var inst_9838 = cljs.core.async.untap_STAR_.call(null,m,inst_9833);
var state_9865__$1 = (function (){var statearr_9894 = state_9865;
(statearr_9894[(24)] = inst_9837);

return statearr_9894;
})();
var statearr_9895_9968 = state_9865__$1;
(statearr_9895_9968[(2)] = inst_9838);

(statearr_9895_9968[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9866 === (33))){
var inst_9824 = (state_9865[(25)]);
var inst_9826 = cljs.core.chunked_seq_QMARK_.call(null,inst_9824);
var state_9865__$1 = state_9865;
if(inst_9826){
var statearr_9896_9969 = state_9865__$1;
(statearr_9896_9969[(1)] = (36));

} else {
var statearr_9897_9970 = state_9865__$1;
(statearr_9897_9970[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9866 === (13))){
var inst_9756 = (state_9865[(26)]);
var inst_9759 = cljs.core.async.close_BANG_.call(null,inst_9756);
var state_9865__$1 = state_9865;
var statearr_9898_9971 = state_9865__$1;
(statearr_9898_9971[(2)] = inst_9759);

(statearr_9898_9971[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9866 === (22))){
var inst_9777 = (state_9865[(8)]);
var inst_9780 = cljs.core.async.close_BANG_.call(null,inst_9777);
var state_9865__$1 = state_9865;
var statearr_9899_9972 = state_9865__$1;
(statearr_9899_9972[(2)] = inst_9780);

(statearr_9899_9972[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9866 === (36))){
var inst_9824 = (state_9865[(25)]);
var inst_9828 = cljs.core.chunk_first.call(null,inst_9824);
var inst_9829 = cljs.core.chunk_rest.call(null,inst_9824);
var inst_9830 = cljs.core.count.call(null,inst_9828);
var inst_9805 = inst_9829;
var inst_9806 = inst_9828;
var inst_9807 = inst_9830;
var inst_9808 = (0);
var state_9865__$1 = (function (){var statearr_9900 = state_9865;
(statearr_9900[(20)] = inst_9807);

(statearr_9900[(21)] = inst_9805);

(statearr_9900[(10)] = inst_9806);

(statearr_9900[(11)] = inst_9808);

return statearr_9900;
})();
var statearr_9901_9973 = state_9865__$1;
(statearr_9901_9973[(2)] = null);

(statearr_9901_9973[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9866 === (41))){
var inst_9824 = (state_9865[(25)]);
var inst_9840 = (state_9865[(2)]);
var inst_9841 = cljs.core.next.call(null,inst_9824);
var inst_9805 = inst_9841;
var inst_9806 = null;
var inst_9807 = (0);
var inst_9808 = (0);
var state_9865__$1 = (function (){var statearr_9902 = state_9865;
(statearr_9902[(20)] = inst_9807);

(statearr_9902[(21)] = inst_9805);

(statearr_9902[(27)] = inst_9840);

(statearr_9902[(10)] = inst_9806);

(statearr_9902[(11)] = inst_9808);

return statearr_9902;
})();
var statearr_9903_9974 = state_9865__$1;
(statearr_9903_9974[(2)] = null);

(statearr_9903_9974[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9866 === (43))){
var state_9865__$1 = state_9865;
var statearr_9904_9975 = state_9865__$1;
(statearr_9904_9975[(2)] = null);

(statearr_9904_9975[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9866 === (29))){
var inst_9849 = (state_9865[(2)]);
var state_9865__$1 = state_9865;
var statearr_9905_9976 = state_9865__$1;
(statearr_9905_9976[(2)] = inst_9849);

(statearr_9905_9976[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9866 === (44))){
var inst_9858 = (state_9865[(2)]);
var state_9865__$1 = (function (){var statearr_9906 = state_9865;
(statearr_9906[(28)] = inst_9858);

return statearr_9906;
})();
var statearr_9907_9977 = state_9865__$1;
(statearr_9907_9977[(2)] = null);

(statearr_9907_9977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9866 === (6))){
var inst_9797 = (state_9865[(29)]);
var inst_9796 = cljs.core.deref.call(null,cs);
var inst_9797__$1 = cljs.core.keys.call(null,inst_9796);
var inst_9798 = cljs.core.count.call(null,inst_9797__$1);
var inst_9799 = cljs.core.reset_BANG_.call(null,dctr,inst_9798);
var inst_9804 = cljs.core.seq.call(null,inst_9797__$1);
var inst_9805 = inst_9804;
var inst_9806 = null;
var inst_9807 = (0);
var inst_9808 = (0);
var state_9865__$1 = (function (){var statearr_9908 = state_9865;
(statearr_9908[(20)] = inst_9807);

(statearr_9908[(21)] = inst_9805);

(statearr_9908[(30)] = inst_9799);

(statearr_9908[(10)] = inst_9806);

(statearr_9908[(11)] = inst_9808);

(statearr_9908[(29)] = inst_9797__$1);

return statearr_9908;
})();
var statearr_9909_9978 = state_9865__$1;
(statearr_9909_9978[(2)] = null);

(statearr_9909_9978[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9866 === (28))){
var inst_9805 = (state_9865[(21)]);
var inst_9824 = (state_9865[(25)]);
var inst_9824__$1 = cljs.core.seq.call(null,inst_9805);
var state_9865__$1 = (function (){var statearr_9910 = state_9865;
(statearr_9910[(25)] = inst_9824__$1);

return statearr_9910;
})();
if(inst_9824__$1){
var statearr_9911_9979 = state_9865__$1;
(statearr_9911_9979[(1)] = (33));

} else {
var statearr_9912_9980 = state_9865__$1;
(statearr_9912_9980[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9866 === (25))){
var inst_9807 = (state_9865[(20)]);
var inst_9808 = (state_9865[(11)]);
var inst_9810 = (inst_9808 < inst_9807);
var inst_9811 = inst_9810;
var state_9865__$1 = state_9865;
if(cljs.core.truth_(inst_9811)){
var statearr_9913_9981 = state_9865__$1;
(statearr_9913_9981[(1)] = (27));

} else {
var statearr_9914_9982 = state_9865__$1;
(statearr_9914_9982[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9866 === (34))){
var state_9865__$1 = state_9865;
var statearr_9915_9983 = state_9865__$1;
(statearr_9915_9983[(2)] = null);

(statearr_9915_9983[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9866 === (17))){
var state_9865__$1 = state_9865;
var statearr_9916_9984 = state_9865__$1;
(statearr_9916_9984[(2)] = null);

(statearr_9916_9984[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9866 === (3))){
var inst_9863 = (state_9865[(2)]);
var state_9865__$1 = state_9865;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9865__$1,inst_9863);
} else {
if((state_val_9866 === (12))){
var inst_9792 = (state_9865[(2)]);
var state_9865__$1 = state_9865;
var statearr_9917_9985 = state_9865__$1;
(statearr_9917_9985[(2)] = inst_9792);

(statearr_9917_9985[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9866 === (2))){
var state_9865__$1 = state_9865;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9865__$1,(4),ch);
} else {
if((state_val_9866 === (23))){
var state_9865__$1 = state_9865;
var statearr_9918_9986 = state_9865__$1;
(statearr_9918_9986[(2)] = null);

(statearr_9918_9986[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9866 === (35))){
var inst_9847 = (state_9865[(2)]);
var state_9865__$1 = state_9865;
var statearr_9919_9987 = state_9865__$1;
(statearr_9919_9987[(2)] = inst_9847);

(statearr_9919_9987[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9866 === (19))){
var inst_9766 = (state_9865[(7)]);
var inst_9770 = cljs.core.chunk_first.call(null,inst_9766);
var inst_9771 = cljs.core.chunk_rest.call(null,inst_9766);
var inst_9772 = cljs.core.count.call(null,inst_9770);
var inst_9746 = inst_9771;
var inst_9747 = inst_9770;
var inst_9748 = inst_9772;
var inst_9749 = (0);
var state_9865__$1 = (function (){var statearr_9920 = state_9865;
(statearr_9920[(14)] = inst_9746);

(statearr_9920[(15)] = inst_9749);

(statearr_9920[(16)] = inst_9748);

(statearr_9920[(17)] = inst_9747);

return statearr_9920;
})();
var statearr_9921_9988 = state_9865__$1;
(statearr_9921_9988[(2)] = null);

(statearr_9921_9988[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9866 === (11))){
var inst_9746 = (state_9865[(14)]);
var inst_9766 = (state_9865[(7)]);
var inst_9766__$1 = cljs.core.seq.call(null,inst_9746);
var state_9865__$1 = (function (){var statearr_9922 = state_9865;
(statearr_9922[(7)] = inst_9766__$1);

return statearr_9922;
})();
if(inst_9766__$1){
var statearr_9923_9989 = state_9865__$1;
(statearr_9923_9989[(1)] = (16));

} else {
var statearr_9924_9990 = state_9865__$1;
(statearr_9924_9990[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9866 === (9))){
var inst_9794 = (state_9865[(2)]);
var state_9865__$1 = state_9865;
var statearr_9925_9991 = state_9865__$1;
(statearr_9925_9991[(2)] = inst_9794);

(statearr_9925_9991[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9866 === (5))){
var inst_9744 = cljs.core.deref.call(null,cs);
var inst_9745 = cljs.core.seq.call(null,inst_9744);
var inst_9746 = inst_9745;
var inst_9747 = null;
var inst_9748 = (0);
var inst_9749 = (0);
var state_9865__$1 = (function (){var statearr_9926 = state_9865;
(statearr_9926[(14)] = inst_9746);

(statearr_9926[(15)] = inst_9749);

(statearr_9926[(16)] = inst_9748);

(statearr_9926[(17)] = inst_9747);

return statearr_9926;
})();
var statearr_9927_9992 = state_9865__$1;
(statearr_9927_9992[(2)] = null);

(statearr_9927_9992[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9866 === (14))){
var state_9865__$1 = state_9865;
var statearr_9928_9993 = state_9865__$1;
(statearr_9928_9993[(2)] = null);

(statearr_9928_9993[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9866 === (45))){
var inst_9855 = (state_9865[(2)]);
var state_9865__$1 = state_9865;
var statearr_9929_9994 = state_9865__$1;
(statearr_9929_9994[(2)] = inst_9855);

(statearr_9929_9994[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9866 === (26))){
var inst_9797 = (state_9865[(29)]);
var inst_9851 = (state_9865[(2)]);
var inst_9852 = cljs.core.seq.call(null,inst_9797);
var state_9865__$1 = (function (){var statearr_9930 = state_9865;
(statearr_9930[(31)] = inst_9851);

return statearr_9930;
})();
if(inst_9852){
var statearr_9931_9995 = state_9865__$1;
(statearr_9931_9995[(1)] = (42));

} else {
var statearr_9932_9996 = state_9865__$1;
(statearr_9932_9996[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9866 === (16))){
var inst_9766 = (state_9865[(7)]);
var inst_9768 = cljs.core.chunked_seq_QMARK_.call(null,inst_9766);
var state_9865__$1 = state_9865;
if(inst_9768){
var statearr_9933_9997 = state_9865__$1;
(statearr_9933_9997[(1)] = (19));

} else {
var statearr_9934_9998 = state_9865__$1;
(statearr_9934_9998[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9866 === (38))){
var inst_9844 = (state_9865[(2)]);
var state_9865__$1 = state_9865;
var statearr_9935_9999 = state_9865__$1;
(statearr_9935_9999[(2)] = inst_9844);

(statearr_9935_9999[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9866 === (30))){
var state_9865__$1 = state_9865;
var statearr_9936_10000 = state_9865__$1;
(statearr_9936_10000[(2)] = null);

(statearr_9936_10000[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9866 === (10))){
var inst_9749 = (state_9865[(15)]);
var inst_9747 = (state_9865[(17)]);
var inst_9755 = cljs.core._nth.call(null,inst_9747,inst_9749);
var inst_9756 = cljs.core.nth.call(null,inst_9755,(0),null);
var inst_9757 = cljs.core.nth.call(null,inst_9755,(1),null);
var state_9865__$1 = (function (){var statearr_9937 = state_9865;
(statearr_9937[(26)] = inst_9756);

return statearr_9937;
})();
if(cljs.core.truth_(inst_9757)){
var statearr_9938_10001 = state_9865__$1;
(statearr_9938_10001[(1)] = (13));

} else {
var statearr_9939_10002 = state_9865__$1;
(statearr_9939_10002[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9866 === (18))){
var inst_9790 = (state_9865[(2)]);
var state_9865__$1 = state_9865;
var statearr_9940_10003 = state_9865__$1;
(statearr_9940_10003[(2)] = inst_9790);

(statearr_9940_10003[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9866 === (42))){
var state_9865__$1 = state_9865;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9865__$1,(45),dchan);
} else {
if((state_val_9866 === (37))){
var inst_9824 = (state_9865[(25)]);
var inst_9737 = (state_9865[(12)]);
var inst_9833 = (state_9865[(23)]);
var inst_9833__$1 = cljs.core.first.call(null,inst_9824);
var inst_9834 = cljs.core.async.put_BANG_.call(null,inst_9833__$1,inst_9737,done);
var state_9865__$1 = (function (){var statearr_9941 = state_9865;
(statearr_9941[(23)] = inst_9833__$1);

return statearr_9941;
})();
if(cljs.core.truth_(inst_9834)){
var statearr_9942_10004 = state_9865__$1;
(statearr_9942_10004[(1)] = (39));

} else {
var statearr_9943_10005 = state_9865__$1;
(statearr_9943_10005[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9866 === (8))){
var inst_9749 = (state_9865[(15)]);
var inst_9748 = (state_9865[(16)]);
var inst_9751 = (inst_9749 < inst_9748);
var inst_9752 = inst_9751;
var state_9865__$1 = state_9865;
if(cljs.core.truth_(inst_9752)){
var statearr_9944_10006 = state_9865__$1;
(statearr_9944_10006[(1)] = (10));

} else {
var statearr_9945_10007 = state_9865__$1;
(statearr_9945_10007[(1)] = (11));

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
});})(c__8646__auto___9953,cs,m,dchan,dctr,done))
;
return ((function (switch__8534__auto__,c__8646__auto___9953,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__8535__auto__ = null;
var cljs$core$async$mult_$_state_machine__8535__auto____0 = (function (){
var statearr_9949 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9949[(0)] = cljs$core$async$mult_$_state_machine__8535__auto__);

(statearr_9949[(1)] = (1));

return statearr_9949;
});
var cljs$core$async$mult_$_state_machine__8535__auto____1 = (function (state_9865){
while(true){
var ret_value__8536__auto__ = (function (){try{while(true){
var result__8537__auto__ = switch__8534__auto__.call(null,state_9865);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8537__auto__;
}
break;
}
}catch (e9950){if((e9950 instanceof Object)){
var ex__8538__auto__ = e9950;
var statearr_9951_10008 = state_9865;
(statearr_9951_10008[(5)] = ex__8538__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9865);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9950;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10009 = state_9865;
state_9865 = G__10009;
continue;
} else {
return ret_value__8536__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__8535__auto__ = function(state_9865){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__8535__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__8535__auto____1.call(this,state_9865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__8535__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__8535__auto____0;
cljs$core$async$mult_$_state_machine__8535__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__8535__auto____1;
return cljs$core$async$mult_$_state_machine__8535__auto__;
})()
;})(switch__8534__auto__,c__8646__auto___9953,cs,m,dchan,dctr,done))
})();
var state__8648__auto__ = (function (){var statearr_9952 = f__8647__auto__.call(null);
(statearr_9952[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8646__auto___9953);

return statearr_9952;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8648__auto__);
});})(c__8646__auto___9953,cs,m,dchan,dctr,done))
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
var args10010 = [];
var len__7214__auto___10013 = arguments.length;
var i__7215__auto___10014 = (0);
while(true){
if((i__7215__auto___10014 < len__7214__auto___10013)){
args10010.push((arguments[i__7215__auto___10014]));

var G__10015 = (i__7215__auto___10014 + (1));
i__7215__auto___10014 = G__10015;
continue;
} else {
}
break;
}

var G__10012 = args10010.length;
switch (G__10012) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10010.length)].join('')));

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
var len__7214__auto___10027 = arguments.length;
var i__7215__auto___10028 = (0);
while(true){
if((i__7215__auto___10028 < len__7214__auto___10027)){
args__7221__auto__.push((arguments[i__7215__auto___10028]));

var G__10029 = (i__7215__auto___10028 + (1));
i__7215__auto___10028 = G__10029;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((3) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7222__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__10021){
var map__10022 = p__10021;
var map__10022__$1 = ((((!((map__10022 == null)))?((((map__10022.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10022.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10022):map__10022);
var opts = map__10022__$1;
var statearr_10024_10030 = state;
(statearr_10024_10030[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__10022,map__10022__$1,opts){
return (function (val){
var statearr_10025_10031 = state;
(statearr_10025_10031[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__10022,map__10022__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_10026_10032 = state;
(statearr_10026_10032[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq10017){
var G__10018 = cljs.core.first.call(null,seq10017);
var seq10017__$1 = cljs.core.next.call(null,seq10017);
var G__10019 = cljs.core.first.call(null,seq10017__$1);
var seq10017__$2 = cljs.core.next.call(null,seq10017__$1);
var G__10020 = cljs.core.first.call(null,seq10017__$2);
var seq10017__$3 = cljs.core.next.call(null,seq10017__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__10018,G__10019,G__10020,seq10017__$3);
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
if(typeof cljs.core.async.t_cljs$core$async10196 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10196 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta10197){
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
this.meta10197 = meta10197;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10196.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10198,meta10197__$1){
var self__ = this;
var _10198__$1 = this;
return (new cljs.core.async.t_cljs$core$async10196(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta10197__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10196.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10198){
var self__ = this;
var _10198__$1 = this;
return self__.meta10197;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10196.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async10196.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10196.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async10196.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10196.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10196.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10196.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10196.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async10196.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta10197","meta10197",1013407184,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10196.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10196.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10196";

cljs.core.async.t_cljs$core$async10196.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async10196");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async10196 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async10196(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta10197){
return (new cljs.core.async.t_cljs$core$async10196(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta10197));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async10196(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__8646__auto___10359 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8646__auto___10359,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__8647__auto__ = (function (){var switch__8534__auto__ = ((function (c__8646__auto___10359,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_10296){
var state_val_10297 = (state_10296[(1)]);
if((state_val_10297 === (7))){
var inst_10214 = (state_10296[(2)]);
var state_10296__$1 = state_10296;
var statearr_10298_10360 = state_10296__$1;
(statearr_10298_10360[(2)] = inst_10214);

(statearr_10298_10360[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10297 === (20))){
var inst_10226 = (state_10296[(7)]);
var state_10296__$1 = state_10296;
var statearr_10299_10361 = state_10296__$1;
(statearr_10299_10361[(2)] = inst_10226);

(statearr_10299_10361[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10297 === (27))){
var state_10296__$1 = state_10296;
var statearr_10300_10362 = state_10296__$1;
(statearr_10300_10362[(2)] = null);

(statearr_10300_10362[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10297 === (1))){
var inst_10202 = (state_10296[(8)]);
var inst_10202__$1 = calc_state.call(null);
var inst_10204 = (inst_10202__$1 == null);
var inst_10205 = cljs.core.not.call(null,inst_10204);
var state_10296__$1 = (function (){var statearr_10301 = state_10296;
(statearr_10301[(8)] = inst_10202__$1);

return statearr_10301;
})();
if(inst_10205){
var statearr_10302_10363 = state_10296__$1;
(statearr_10302_10363[(1)] = (2));

} else {
var statearr_10303_10364 = state_10296__$1;
(statearr_10303_10364[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10297 === (24))){
var inst_10270 = (state_10296[(9)]);
var inst_10249 = (state_10296[(10)]);
var inst_10256 = (state_10296[(11)]);
var inst_10270__$1 = inst_10249.call(null,inst_10256);
var state_10296__$1 = (function (){var statearr_10304 = state_10296;
(statearr_10304[(9)] = inst_10270__$1);

return statearr_10304;
})();
if(cljs.core.truth_(inst_10270__$1)){
var statearr_10305_10365 = state_10296__$1;
(statearr_10305_10365[(1)] = (29));

} else {
var statearr_10306_10366 = state_10296__$1;
(statearr_10306_10366[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10297 === (4))){
var inst_10217 = (state_10296[(2)]);
var state_10296__$1 = state_10296;
if(cljs.core.truth_(inst_10217)){
var statearr_10307_10367 = state_10296__$1;
(statearr_10307_10367[(1)] = (8));

} else {
var statearr_10308_10368 = state_10296__$1;
(statearr_10308_10368[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10297 === (15))){
var inst_10243 = (state_10296[(2)]);
var state_10296__$1 = state_10296;
if(cljs.core.truth_(inst_10243)){
var statearr_10309_10369 = state_10296__$1;
(statearr_10309_10369[(1)] = (19));

} else {
var statearr_10310_10370 = state_10296__$1;
(statearr_10310_10370[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10297 === (21))){
var inst_10248 = (state_10296[(12)]);
var inst_10248__$1 = (state_10296[(2)]);
var inst_10249 = cljs.core.get.call(null,inst_10248__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_10250 = cljs.core.get.call(null,inst_10248__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_10251 = cljs.core.get.call(null,inst_10248__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_10296__$1 = (function (){var statearr_10311 = state_10296;
(statearr_10311[(10)] = inst_10249);

(statearr_10311[(12)] = inst_10248__$1);

(statearr_10311[(13)] = inst_10250);

return statearr_10311;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_10296__$1,(22),inst_10251);
} else {
if((state_val_10297 === (31))){
var inst_10278 = (state_10296[(2)]);
var state_10296__$1 = state_10296;
if(cljs.core.truth_(inst_10278)){
var statearr_10312_10371 = state_10296__$1;
(statearr_10312_10371[(1)] = (32));

} else {
var statearr_10313_10372 = state_10296__$1;
(statearr_10313_10372[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10297 === (32))){
var inst_10255 = (state_10296[(14)]);
var state_10296__$1 = state_10296;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10296__$1,(35),out,inst_10255);
} else {
if((state_val_10297 === (33))){
var inst_10248 = (state_10296[(12)]);
var inst_10226 = inst_10248;
var state_10296__$1 = (function (){var statearr_10314 = state_10296;
(statearr_10314[(7)] = inst_10226);

return statearr_10314;
})();
var statearr_10315_10373 = state_10296__$1;
(statearr_10315_10373[(2)] = null);

(statearr_10315_10373[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10297 === (13))){
var inst_10226 = (state_10296[(7)]);
var inst_10233 = inst_10226.cljs$lang$protocol_mask$partition0$;
var inst_10234 = (inst_10233 & (64));
var inst_10235 = inst_10226.cljs$core$ISeq$;
var inst_10236 = (inst_10234) || (inst_10235);
var state_10296__$1 = state_10296;
if(cljs.core.truth_(inst_10236)){
var statearr_10316_10374 = state_10296__$1;
(statearr_10316_10374[(1)] = (16));

} else {
var statearr_10317_10375 = state_10296__$1;
(statearr_10317_10375[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10297 === (22))){
var inst_10256 = (state_10296[(11)]);
var inst_10255 = (state_10296[(14)]);
var inst_10254 = (state_10296[(2)]);
var inst_10255__$1 = cljs.core.nth.call(null,inst_10254,(0),null);
var inst_10256__$1 = cljs.core.nth.call(null,inst_10254,(1),null);
var inst_10257 = (inst_10255__$1 == null);
var inst_10258 = cljs.core._EQ_.call(null,inst_10256__$1,change);
var inst_10259 = (inst_10257) || (inst_10258);
var state_10296__$1 = (function (){var statearr_10318 = state_10296;
(statearr_10318[(11)] = inst_10256__$1);

(statearr_10318[(14)] = inst_10255__$1);

return statearr_10318;
})();
if(cljs.core.truth_(inst_10259)){
var statearr_10319_10376 = state_10296__$1;
(statearr_10319_10376[(1)] = (23));

} else {
var statearr_10320_10377 = state_10296__$1;
(statearr_10320_10377[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10297 === (36))){
var inst_10248 = (state_10296[(12)]);
var inst_10226 = inst_10248;
var state_10296__$1 = (function (){var statearr_10321 = state_10296;
(statearr_10321[(7)] = inst_10226);

return statearr_10321;
})();
var statearr_10322_10378 = state_10296__$1;
(statearr_10322_10378[(2)] = null);

(statearr_10322_10378[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10297 === (29))){
var inst_10270 = (state_10296[(9)]);
var state_10296__$1 = state_10296;
var statearr_10323_10379 = state_10296__$1;
(statearr_10323_10379[(2)] = inst_10270);

(statearr_10323_10379[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10297 === (6))){
var state_10296__$1 = state_10296;
var statearr_10324_10380 = state_10296__$1;
(statearr_10324_10380[(2)] = false);

(statearr_10324_10380[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10297 === (28))){
var inst_10266 = (state_10296[(2)]);
var inst_10267 = calc_state.call(null);
var inst_10226 = inst_10267;
var state_10296__$1 = (function (){var statearr_10325 = state_10296;
(statearr_10325[(15)] = inst_10266);

(statearr_10325[(7)] = inst_10226);

return statearr_10325;
})();
var statearr_10326_10381 = state_10296__$1;
(statearr_10326_10381[(2)] = null);

(statearr_10326_10381[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10297 === (25))){
var inst_10292 = (state_10296[(2)]);
var state_10296__$1 = state_10296;
var statearr_10327_10382 = state_10296__$1;
(statearr_10327_10382[(2)] = inst_10292);

(statearr_10327_10382[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10297 === (34))){
var inst_10290 = (state_10296[(2)]);
var state_10296__$1 = state_10296;
var statearr_10328_10383 = state_10296__$1;
(statearr_10328_10383[(2)] = inst_10290);

(statearr_10328_10383[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10297 === (17))){
var state_10296__$1 = state_10296;
var statearr_10329_10384 = state_10296__$1;
(statearr_10329_10384[(2)] = false);

(statearr_10329_10384[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10297 === (3))){
var state_10296__$1 = state_10296;
var statearr_10330_10385 = state_10296__$1;
(statearr_10330_10385[(2)] = false);

(statearr_10330_10385[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10297 === (12))){
var inst_10294 = (state_10296[(2)]);
var state_10296__$1 = state_10296;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10296__$1,inst_10294);
} else {
if((state_val_10297 === (2))){
var inst_10202 = (state_10296[(8)]);
var inst_10207 = inst_10202.cljs$lang$protocol_mask$partition0$;
var inst_10208 = (inst_10207 & (64));
var inst_10209 = inst_10202.cljs$core$ISeq$;
var inst_10210 = (inst_10208) || (inst_10209);
var state_10296__$1 = state_10296;
if(cljs.core.truth_(inst_10210)){
var statearr_10331_10386 = state_10296__$1;
(statearr_10331_10386[(1)] = (5));

} else {
var statearr_10332_10387 = state_10296__$1;
(statearr_10332_10387[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10297 === (23))){
var inst_10255 = (state_10296[(14)]);
var inst_10261 = (inst_10255 == null);
var state_10296__$1 = state_10296;
if(cljs.core.truth_(inst_10261)){
var statearr_10333_10388 = state_10296__$1;
(statearr_10333_10388[(1)] = (26));

} else {
var statearr_10334_10389 = state_10296__$1;
(statearr_10334_10389[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10297 === (35))){
var inst_10281 = (state_10296[(2)]);
var state_10296__$1 = state_10296;
if(cljs.core.truth_(inst_10281)){
var statearr_10335_10390 = state_10296__$1;
(statearr_10335_10390[(1)] = (36));

} else {
var statearr_10336_10391 = state_10296__$1;
(statearr_10336_10391[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10297 === (19))){
var inst_10226 = (state_10296[(7)]);
var inst_10245 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10226);
var state_10296__$1 = state_10296;
var statearr_10337_10392 = state_10296__$1;
(statearr_10337_10392[(2)] = inst_10245);

(statearr_10337_10392[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10297 === (11))){
var inst_10226 = (state_10296[(7)]);
var inst_10230 = (inst_10226 == null);
var inst_10231 = cljs.core.not.call(null,inst_10230);
var state_10296__$1 = state_10296;
if(inst_10231){
var statearr_10338_10393 = state_10296__$1;
(statearr_10338_10393[(1)] = (13));

} else {
var statearr_10339_10394 = state_10296__$1;
(statearr_10339_10394[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10297 === (9))){
var inst_10202 = (state_10296[(8)]);
var state_10296__$1 = state_10296;
var statearr_10340_10395 = state_10296__$1;
(statearr_10340_10395[(2)] = inst_10202);

(statearr_10340_10395[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10297 === (5))){
var state_10296__$1 = state_10296;
var statearr_10341_10396 = state_10296__$1;
(statearr_10341_10396[(2)] = true);

(statearr_10341_10396[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10297 === (14))){
var state_10296__$1 = state_10296;
var statearr_10342_10397 = state_10296__$1;
(statearr_10342_10397[(2)] = false);

(statearr_10342_10397[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10297 === (26))){
var inst_10256 = (state_10296[(11)]);
var inst_10263 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_10256);
var state_10296__$1 = state_10296;
var statearr_10343_10398 = state_10296__$1;
(statearr_10343_10398[(2)] = inst_10263);

(statearr_10343_10398[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10297 === (16))){
var state_10296__$1 = state_10296;
var statearr_10344_10399 = state_10296__$1;
(statearr_10344_10399[(2)] = true);

(statearr_10344_10399[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10297 === (38))){
var inst_10286 = (state_10296[(2)]);
var state_10296__$1 = state_10296;
var statearr_10345_10400 = state_10296__$1;
(statearr_10345_10400[(2)] = inst_10286);

(statearr_10345_10400[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10297 === (30))){
var inst_10249 = (state_10296[(10)]);
var inst_10256 = (state_10296[(11)]);
var inst_10250 = (state_10296[(13)]);
var inst_10273 = cljs.core.empty_QMARK_.call(null,inst_10249);
var inst_10274 = inst_10250.call(null,inst_10256);
var inst_10275 = cljs.core.not.call(null,inst_10274);
var inst_10276 = (inst_10273) && (inst_10275);
var state_10296__$1 = state_10296;
var statearr_10346_10401 = state_10296__$1;
(statearr_10346_10401[(2)] = inst_10276);

(statearr_10346_10401[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10297 === (10))){
var inst_10202 = (state_10296[(8)]);
var inst_10222 = (state_10296[(2)]);
var inst_10223 = cljs.core.get.call(null,inst_10222,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_10224 = cljs.core.get.call(null,inst_10222,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_10225 = cljs.core.get.call(null,inst_10222,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_10226 = inst_10202;
var state_10296__$1 = (function (){var statearr_10347 = state_10296;
(statearr_10347[(16)] = inst_10225);

(statearr_10347[(17)] = inst_10224);

(statearr_10347[(18)] = inst_10223);

(statearr_10347[(7)] = inst_10226);

return statearr_10347;
})();
var statearr_10348_10402 = state_10296__$1;
(statearr_10348_10402[(2)] = null);

(statearr_10348_10402[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10297 === (18))){
var inst_10240 = (state_10296[(2)]);
var state_10296__$1 = state_10296;
var statearr_10349_10403 = state_10296__$1;
(statearr_10349_10403[(2)] = inst_10240);

(statearr_10349_10403[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10297 === (37))){
var state_10296__$1 = state_10296;
var statearr_10350_10404 = state_10296__$1;
(statearr_10350_10404[(2)] = null);

(statearr_10350_10404[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10297 === (8))){
var inst_10202 = (state_10296[(8)]);
var inst_10219 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10202);
var state_10296__$1 = state_10296;
var statearr_10351_10405 = state_10296__$1;
(statearr_10351_10405[(2)] = inst_10219);

(statearr_10351_10405[(1)] = (10));


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
});})(c__8646__auto___10359,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__8534__auto__,c__8646__auto___10359,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__8535__auto__ = null;
var cljs$core$async$mix_$_state_machine__8535__auto____0 = (function (){
var statearr_10355 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10355[(0)] = cljs$core$async$mix_$_state_machine__8535__auto__);

(statearr_10355[(1)] = (1));

return statearr_10355;
});
var cljs$core$async$mix_$_state_machine__8535__auto____1 = (function (state_10296){
while(true){
var ret_value__8536__auto__ = (function (){try{while(true){
var result__8537__auto__ = switch__8534__auto__.call(null,state_10296);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8537__auto__;
}
break;
}
}catch (e10356){if((e10356 instanceof Object)){
var ex__8538__auto__ = e10356;
var statearr_10357_10406 = state_10296;
(statearr_10357_10406[(5)] = ex__8538__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10296);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10356;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10407 = state_10296;
state_10296 = G__10407;
continue;
} else {
return ret_value__8536__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__8535__auto__ = function(state_10296){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__8535__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__8535__auto____1.call(this,state_10296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__8535__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__8535__auto____0;
cljs$core$async$mix_$_state_machine__8535__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__8535__auto____1;
return cljs$core$async$mix_$_state_machine__8535__auto__;
})()
;})(switch__8534__auto__,c__8646__auto___10359,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__8648__auto__ = (function (){var statearr_10358 = f__8647__auto__.call(null);
(statearr_10358[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8646__auto___10359);

return statearr_10358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8648__auto__);
});})(c__8646__auto___10359,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args10408 = [];
var len__7214__auto___10411 = arguments.length;
var i__7215__auto___10412 = (0);
while(true){
if((i__7215__auto___10412 < len__7214__auto___10411)){
args10408.push((arguments[i__7215__auto___10412]));

var G__10413 = (i__7215__auto___10412 + (1));
i__7215__auto___10412 = G__10413;
continue;
} else {
}
break;
}

var G__10410 = args10408.length;
switch (G__10410) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10408.length)].join('')));

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
var args10416 = [];
var len__7214__auto___10541 = arguments.length;
var i__7215__auto___10542 = (0);
while(true){
if((i__7215__auto___10542 < len__7214__auto___10541)){
args10416.push((arguments[i__7215__auto___10542]));

var G__10543 = (i__7215__auto___10542 + (1));
i__7215__auto___10542 = G__10543;
continue;
} else {
}
break;
}

var G__10418 = args10416.length;
switch (G__10418) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10416.length)].join('')));

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
return (function (p1__10415_SHARP_){
if(cljs.core.truth_(p1__10415_SHARP_.call(null,topic))){
return p1__10415_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__10415_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__6156__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async10419 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10419 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta10420){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta10420 = meta10420;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10419.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_10421,meta10420__$1){
var self__ = this;
var _10421__$1 = this;
return (new cljs.core.async.t_cljs$core$async10419(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta10420__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10419.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_10421){
var self__ = this;
var _10421__$1 = this;
return self__.meta10420;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10419.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async10419.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10419.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async10419.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10419.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async10419.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10419.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10419.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta10420","meta10420",1059206889,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10419.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10419.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10419";

cljs.core.async.t_cljs$core$async10419.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async10419");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async10419 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async10419(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta10420){
return (new cljs.core.async.t_cljs$core$async10419(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta10420));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async10419(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__8646__auto___10545 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8646__auto___10545,mults,ensure_mult,p){
return (function (){
var f__8647__auto__ = (function (){var switch__8534__auto__ = ((function (c__8646__auto___10545,mults,ensure_mult,p){
return (function (state_10493){
var state_val_10494 = (state_10493[(1)]);
if((state_val_10494 === (7))){
var inst_10489 = (state_10493[(2)]);
var state_10493__$1 = state_10493;
var statearr_10495_10546 = state_10493__$1;
(statearr_10495_10546[(2)] = inst_10489);

(statearr_10495_10546[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10494 === (20))){
var state_10493__$1 = state_10493;
var statearr_10496_10547 = state_10493__$1;
(statearr_10496_10547[(2)] = null);

(statearr_10496_10547[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10494 === (1))){
var state_10493__$1 = state_10493;
var statearr_10497_10548 = state_10493__$1;
(statearr_10497_10548[(2)] = null);

(statearr_10497_10548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10494 === (24))){
var inst_10472 = (state_10493[(7)]);
var inst_10481 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_10472);
var state_10493__$1 = state_10493;
var statearr_10498_10549 = state_10493__$1;
(statearr_10498_10549[(2)] = inst_10481);

(statearr_10498_10549[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10494 === (4))){
var inst_10424 = (state_10493[(8)]);
var inst_10424__$1 = (state_10493[(2)]);
var inst_10425 = (inst_10424__$1 == null);
var state_10493__$1 = (function (){var statearr_10499 = state_10493;
(statearr_10499[(8)] = inst_10424__$1);

return statearr_10499;
})();
if(cljs.core.truth_(inst_10425)){
var statearr_10500_10550 = state_10493__$1;
(statearr_10500_10550[(1)] = (5));

} else {
var statearr_10501_10551 = state_10493__$1;
(statearr_10501_10551[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10494 === (15))){
var inst_10466 = (state_10493[(2)]);
var state_10493__$1 = state_10493;
var statearr_10502_10552 = state_10493__$1;
(statearr_10502_10552[(2)] = inst_10466);

(statearr_10502_10552[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10494 === (21))){
var inst_10486 = (state_10493[(2)]);
var state_10493__$1 = (function (){var statearr_10503 = state_10493;
(statearr_10503[(9)] = inst_10486);

return statearr_10503;
})();
var statearr_10504_10553 = state_10493__$1;
(statearr_10504_10553[(2)] = null);

(statearr_10504_10553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10494 === (13))){
var inst_10448 = (state_10493[(10)]);
var inst_10450 = cljs.core.chunked_seq_QMARK_.call(null,inst_10448);
var state_10493__$1 = state_10493;
if(inst_10450){
var statearr_10505_10554 = state_10493__$1;
(statearr_10505_10554[(1)] = (16));

} else {
var statearr_10506_10555 = state_10493__$1;
(statearr_10506_10555[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10494 === (22))){
var inst_10478 = (state_10493[(2)]);
var state_10493__$1 = state_10493;
if(cljs.core.truth_(inst_10478)){
var statearr_10507_10556 = state_10493__$1;
(statearr_10507_10556[(1)] = (23));

} else {
var statearr_10508_10557 = state_10493__$1;
(statearr_10508_10557[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10494 === (6))){
var inst_10424 = (state_10493[(8)]);
var inst_10474 = (state_10493[(11)]);
var inst_10472 = (state_10493[(7)]);
var inst_10472__$1 = topic_fn.call(null,inst_10424);
var inst_10473 = cljs.core.deref.call(null,mults);
var inst_10474__$1 = cljs.core.get.call(null,inst_10473,inst_10472__$1);
var state_10493__$1 = (function (){var statearr_10509 = state_10493;
(statearr_10509[(11)] = inst_10474__$1);

(statearr_10509[(7)] = inst_10472__$1);

return statearr_10509;
})();
if(cljs.core.truth_(inst_10474__$1)){
var statearr_10510_10558 = state_10493__$1;
(statearr_10510_10558[(1)] = (19));

} else {
var statearr_10511_10559 = state_10493__$1;
(statearr_10511_10559[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10494 === (25))){
var inst_10483 = (state_10493[(2)]);
var state_10493__$1 = state_10493;
var statearr_10512_10560 = state_10493__$1;
(statearr_10512_10560[(2)] = inst_10483);

(statearr_10512_10560[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10494 === (17))){
var inst_10448 = (state_10493[(10)]);
var inst_10457 = cljs.core.first.call(null,inst_10448);
var inst_10458 = cljs.core.async.muxch_STAR_.call(null,inst_10457);
var inst_10459 = cljs.core.async.close_BANG_.call(null,inst_10458);
var inst_10460 = cljs.core.next.call(null,inst_10448);
var inst_10434 = inst_10460;
var inst_10435 = null;
var inst_10436 = (0);
var inst_10437 = (0);
var state_10493__$1 = (function (){var statearr_10513 = state_10493;
(statearr_10513[(12)] = inst_10436);

(statearr_10513[(13)] = inst_10459);

(statearr_10513[(14)] = inst_10435);

(statearr_10513[(15)] = inst_10434);

(statearr_10513[(16)] = inst_10437);

return statearr_10513;
})();
var statearr_10514_10561 = state_10493__$1;
(statearr_10514_10561[(2)] = null);

(statearr_10514_10561[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10494 === (3))){
var inst_10491 = (state_10493[(2)]);
var state_10493__$1 = state_10493;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10493__$1,inst_10491);
} else {
if((state_val_10494 === (12))){
var inst_10468 = (state_10493[(2)]);
var state_10493__$1 = state_10493;
var statearr_10515_10562 = state_10493__$1;
(statearr_10515_10562[(2)] = inst_10468);

(statearr_10515_10562[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10494 === (2))){
var state_10493__$1 = state_10493;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10493__$1,(4),ch);
} else {
if((state_val_10494 === (23))){
var state_10493__$1 = state_10493;
var statearr_10516_10563 = state_10493__$1;
(statearr_10516_10563[(2)] = null);

(statearr_10516_10563[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10494 === (19))){
var inst_10424 = (state_10493[(8)]);
var inst_10474 = (state_10493[(11)]);
var inst_10476 = cljs.core.async.muxch_STAR_.call(null,inst_10474);
var state_10493__$1 = state_10493;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10493__$1,(22),inst_10476,inst_10424);
} else {
if((state_val_10494 === (11))){
var inst_10434 = (state_10493[(15)]);
var inst_10448 = (state_10493[(10)]);
var inst_10448__$1 = cljs.core.seq.call(null,inst_10434);
var state_10493__$1 = (function (){var statearr_10517 = state_10493;
(statearr_10517[(10)] = inst_10448__$1);

return statearr_10517;
})();
if(inst_10448__$1){
var statearr_10518_10564 = state_10493__$1;
(statearr_10518_10564[(1)] = (13));

} else {
var statearr_10519_10565 = state_10493__$1;
(statearr_10519_10565[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10494 === (9))){
var inst_10470 = (state_10493[(2)]);
var state_10493__$1 = state_10493;
var statearr_10520_10566 = state_10493__$1;
(statearr_10520_10566[(2)] = inst_10470);

(statearr_10520_10566[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10494 === (5))){
var inst_10431 = cljs.core.deref.call(null,mults);
var inst_10432 = cljs.core.vals.call(null,inst_10431);
var inst_10433 = cljs.core.seq.call(null,inst_10432);
var inst_10434 = inst_10433;
var inst_10435 = null;
var inst_10436 = (0);
var inst_10437 = (0);
var state_10493__$1 = (function (){var statearr_10521 = state_10493;
(statearr_10521[(12)] = inst_10436);

(statearr_10521[(14)] = inst_10435);

(statearr_10521[(15)] = inst_10434);

(statearr_10521[(16)] = inst_10437);

return statearr_10521;
})();
var statearr_10522_10567 = state_10493__$1;
(statearr_10522_10567[(2)] = null);

(statearr_10522_10567[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10494 === (14))){
var state_10493__$1 = state_10493;
var statearr_10526_10568 = state_10493__$1;
(statearr_10526_10568[(2)] = null);

(statearr_10526_10568[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10494 === (16))){
var inst_10448 = (state_10493[(10)]);
var inst_10452 = cljs.core.chunk_first.call(null,inst_10448);
var inst_10453 = cljs.core.chunk_rest.call(null,inst_10448);
var inst_10454 = cljs.core.count.call(null,inst_10452);
var inst_10434 = inst_10453;
var inst_10435 = inst_10452;
var inst_10436 = inst_10454;
var inst_10437 = (0);
var state_10493__$1 = (function (){var statearr_10527 = state_10493;
(statearr_10527[(12)] = inst_10436);

(statearr_10527[(14)] = inst_10435);

(statearr_10527[(15)] = inst_10434);

(statearr_10527[(16)] = inst_10437);

return statearr_10527;
})();
var statearr_10528_10569 = state_10493__$1;
(statearr_10528_10569[(2)] = null);

(statearr_10528_10569[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10494 === (10))){
var inst_10436 = (state_10493[(12)]);
var inst_10435 = (state_10493[(14)]);
var inst_10434 = (state_10493[(15)]);
var inst_10437 = (state_10493[(16)]);
var inst_10442 = cljs.core._nth.call(null,inst_10435,inst_10437);
var inst_10443 = cljs.core.async.muxch_STAR_.call(null,inst_10442);
var inst_10444 = cljs.core.async.close_BANG_.call(null,inst_10443);
var inst_10445 = (inst_10437 + (1));
var tmp10523 = inst_10436;
var tmp10524 = inst_10435;
var tmp10525 = inst_10434;
var inst_10434__$1 = tmp10525;
var inst_10435__$1 = tmp10524;
var inst_10436__$1 = tmp10523;
var inst_10437__$1 = inst_10445;
var state_10493__$1 = (function (){var statearr_10529 = state_10493;
(statearr_10529[(17)] = inst_10444);

(statearr_10529[(12)] = inst_10436__$1);

(statearr_10529[(14)] = inst_10435__$1);

(statearr_10529[(15)] = inst_10434__$1);

(statearr_10529[(16)] = inst_10437__$1);

return statearr_10529;
})();
var statearr_10530_10570 = state_10493__$1;
(statearr_10530_10570[(2)] = null);

(statearr_10530_10570[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10494 === (18))){
var inst_10463 = (state_10493[(2)]);
var state_10493__$1 = state_10493;
var statearr_10531_10571 = state_10493__$1;
(statearr_10531_10571[(2)] = inst_10463);

(statearr_10531_10571[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10494 === (8))){
var inst_10436 = (state_10493[(12)]);
var inst_10437 = (state_10493[(16)]);
var inst_10439 = (inst_10437 < inst_10436);
var inst_10440 = inst_10439;
var state_10493__$1 = state_10493;
if(cljs.core.truth_(inst_10440)){
var statearr_10532_10572 = state_10493__$1;
(statearr_10532_10572[(1)] = (10));

} else {
var statearr_10533_10573 = state_10493__$1;
(statearr_10533_10573[(1)] = (11));

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
});})(c__8646__auto___10545,mults,ensure_mult,p))
;
return ((function (switch__8534__auto__,c__8646__auto___10545,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__8535__auto__ = null;
var cljs$core$async$state_machine__8535__auto____0 = (function (){
var statearr_10537 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10537[(0)] = cljs$core$async$state_machine__8535__auto__);

(statearr_10537[(1)] = (1));

return statearr_10537;
});
var cljs$core$async$state_machine__8535__auto____1 = (function (state_10493){
while(true){
var ret_value__8536__auto__ = (function (){try{while(true){
var result__8537__auto__ = switch__8534__auto__.call(null,state_10493);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8537__auto__;
}
break;
}
}catch (e10538){if((e10538 instanceof Object)){
var ex__8538__auto__ = e10538;
var statearr_10539_10574 = state_10493;
(statearr_10539_10574[(5)] = ex__8538__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10493);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10538;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10575 = state_10493;
state_10493 = G__10575;
continue;
} else {
return ret_value__8536__auto__;
}
break;
}
});
cljs$core$async$state_machine__8535__auto__ = function(state_10493){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8535__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8535__auto____1.call(this,state_10493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8535__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8535__auto____0;
cljs$core$async$state_machine__8535__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8535__auto____1;
return cljs$core$async$state_machine__8535__auto__;
})()
;})(switch__8534__auto__,c__8646__auto___10545,mults,ensure_mult,p))
})();
var state__8648__auto__ = (function (){var statearr_10540 = f__8647__auto__.call(null);
(statearr_10540[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8646__auto___10545);

return statearr_10540;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8648__auto__);
});})(c__8646__auto___10545,mults,ensure_mult,p))
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
var args10576 = [];
var len__7214__auto___10579 = arguments.length;
var i__7215__auto___10580 = (0);
while(true){
if((i__7215__auto___10580 < len__7214__auto___10579)){
args10576.push((arguments[i__7215__auto___10580]));

var G__10581 = (i__7215__auto___10580 + (1));
i__7215__auto___10580 = G__10581;
continue;
} else {
}
break;
}

var G__10578 = args10576.length;
switch (G__10578) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10576.length)].join('')));

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
var args10583 = [];
var len__7214__auto___10586 = arguments.length;
var i__7215__auto___10587 = (0);
while(true){
if((i__7215__auto___10587 < len__7214__auto___10586)){
args10583.push((arguments[i__7215__auto___10587]));

var G__10588 = (i__7215__auto___10587 + (1));
i__7215__auto___10587 = G__10588;
continue;
} else {
}
break;
}

var G__10585 = args10583.length;
switch (G__10585) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10583.length)].join('')));

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
var args10590 = [];
var len__7214__auto___10661 = arguments.length;
var i__7215__auto___10662 = (0);
while(true){
if((i__7215__auto___10662 < len__7214__auto___10661)){
args10590.push((arguments[i__7215__auto___10662]));

var G__10663 = (i__7215__auto___10662 + (1));
i__7215__auto___10662 = G__10663;
continue;
} else {
}
break;
}

var G__10592 = args10590.length;
switch (G__10592) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10590.length)].join('')));

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
var c__8646__auto___10665 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8646__auto___10665,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__8647__auto__ = (function (){var switch__8534__auto__ = ((function (c__8646__auto___10665,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_10631){
var state_val_10632 = (state_10631[(1)]);
if((state_val_10632 === (7))){
var state_10631__$1 = state_10631;
var statearr_10633_10666 = state_10631__$1;
(statearr_10633_10666[(2)] = null);

(statearr_10633_10666[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10632 === (1))){
var state_10631__$1 = state_10631;
var statearr_10634_10667 = state_10631__$1;
(statearr_10634_10667[(2)] = null);

(statearr_10634_10667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10632 === (4))){
var inst_10595 = (state_10631[(7)]);
var inst_10597 = (inst_10595 < cnt);
var state_10631__$1 = state_10631;
if(cljs.core.truth_(inst_10597)){
var statearr_10635_10668 = state_10631__$1;
(statearr_10635_10668[(1)] = (6));

} else {
var statearr_10636_10669 = state_10631__$1;
(statearr_10636_10669[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10632 === (15))){
var inst_10627 = (state_10631[(2)]);
var state_10631__$1 = state_10631;
var statearr_10637_10670 = state_10631__$1;
(statearr_10637_10670[(2)] = inst_10627);

(statearr_10637_10670[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10632 === (13))){
var inst_10620 = cljs.core.async.close_BANG_.call(null,out);
var state_10631__$1 = state_10631;
var statearr_10638_10671 = state_10631__$1;
(statearr_10638_10671[(2)] = inst_10620);

(statearr_10638_10671[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10632 === (6))){
var state_10631__$1 = state_10631;
var statearr_10639_10672 = state_10631__$1;
(statearr_10639_10672[(2)] = null);

(statearr_10639_10672[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10632 === (3))){
var inst_10629 = (state_10631[(2)]);
var state_10631__$1 = state_10631;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10631__$1,inst_10629);
} else {
if((state_val_10632 === (12))){
var inst_10617 = (state_10631[(8)]);
var inst_10617__$1 = (state_10631[(2)]);
var inst_10618 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_10617__$1);
var state_10631__$1 = (function (){var statearr_10640 = state_10631;
(statearr_10640[(8)] = inst_10617__$1);

return statearr_10640;
})();
if(cljs.core.truth_(inst_10618)){
var statearr_10641_10673 = state_10631__$1;
(statearr_10641_10673[(1)] = (13));

} else {
var statearr_10642_10674 = state_10631__$1;
(statearr_10642_10674[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10632 === (2))){
var inst_10594 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_10595 = (0);
var state_10631__$1 = (function (){var statearr_10643 = state_10631;
(statearr_10643[(9)] = inst_10594);

(statearr_10643[(7)] = inst_10595);

return statearr_10643;
})();
var statearr_10644_10675 = state_10631__$1;
(statearr_10644_10675[(2)] = null);

(statearr_10644_10675[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10632 === (11))){
var inst_10595 = (state_10631[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10631,(10),Object,null,(9));
var inst_10604 = chs__$1.call(null,inst_10595);
var inst_10605 = done.call(null,inst_10595);
var inst_10606 = cljs.core.async.take_BANG_.call(null,inst_10604,inst_10605);
var state_10631__$1 = state_10631;
var statearr_10645_10676 = state_10631__$1;
(statearr_10645_10676[(2)] = inst_10606);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10631__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10632 === (9))){
var inst_10595 = (state_10631[(7)]);
var inst_10608 = (state_10631[(2)]);
var inst_10609 = (inst_10595 + (1));
var inst_10595__$1 = inst_10609;
var state_10631__$1 = (function (){var statearr_10646 = state_10631;
(statearr_10646[(7)] = inst_10595__$1);

(statearr_10646[(10)] = inst_10608);

return statearr_10646;
})();
var statearr_10647_10677 = state_10631__$1;
(statearr_10647_10677[(2)] = null);

(statearr_10647_10677[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10632 === (5))){
var inst_10615 = (state_10631[(2)]);
var state_10631__$1 = (function (){var statearr_10648 = state_10631;
(statearr_10648[(11)] = inst_10615);

return statearr_10648;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10631__$1,(12),dchan);
} else {
if((state_val_10632 === (14))){
var inst_10617 = (state_10631[(8)]);
var inst_10622 = cljs.core.apply.call(null,f,inst_10617);
var state_10631__$1 = state_10631;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10631__$1,(16),out,inst_10622);
} else {
if((state_val_10632 === (16))){
var inst_10624 = (state_10631[(2)]);
var state_10631__$1 = (function (){var statearr_10649 = state_10631;
(statearr_10649[(12)] = inst_10624);

return statearr_10649;
})();
var statearr_10650_10678 = state_10631__$1;
(statearr_10650_10678[(2)] = null);

(statearr_10650_10678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10632 === (10))){
var inst_10599 = (state_10631[(2)]);
var inst_10600 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_10631__$1 = (function (){var statearr_10651 = state_10631;
(statearr_10651[(13)] = inst_10599);

return statearr_10651;
})();
var statearr_10652_10679 = state_10631__$1;
(statearr_10652_10679[(2)] = inst_10600);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10631__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10632 === (8))){
var inst_10613 = (state_10631[(2)]);
var state_10631__$1 = state_10631;
var statearr_10653_10680 = state_10631__$1;
(statearr_10653_10680[(2)] = inst_10613);

(statearr_10653_10680[(1)] = (5));


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
});})(c__8646__auto___10665,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__8534__auto__,c__8646__auto___10665,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__8535__auto__ = null;
var cljs$core$async$state_machine__8535__auto____0 = (function (){
var statearr_10657 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10657[(0)] = cljs$core$async$state_machine__8535__auto__);

(statearr_10657[(1)] = (1));

return statearr_10657;
});
var cljs$core$async$state_machine__8535__auto____1 = (function (state_10631){
while(true){
var ret_value__8536__auto__ = (function (){try{while(true){
var result__8537__auto__ = switch__8534__auto__.call(null,state_10631);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8537__auto__;
}
break;
}
}catch (e10658){if((e10658 instanceof Object)){
var ex__8538__auto__ = e10658;
var statearr_10659_10681 = state_10631;
(statearr_10659_10681[(5)] = ex__8538__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10631);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10658;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10682 = state_10631;
state_10631 = G__10682;
continue;
} else {
return ret_value__8536__auto__;
}
break;
}
});
cljs$core$async$state_machine__8535__auto__ = function(state_10631){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8535__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8535__auto____1.call(this,state_10631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8535__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8535__auto____0;
cljs$core$async$state_machine__8535__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8535__auto____1;
return cljs$core$async$state_machine__8535__auto__;
})()
;})(switch__8534__auto__,c__8646__auto___10665,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__8648__auto__ = (function (){var statearr_10660 = f__8647__auto__.call(null);
(statearr_10660[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8646__auto___10665);

return statearr_10660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8648__auto__);
});})(c__8646__auto___10665,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args10684 = [];
var len__7214__auto___10740 = arguments.length;
var i__7215__auto___10741 = (0);
while(true){
if((i__7215__auto___10741 < len__7214__auto___10740)){
args10684.push((arguments[i__7215__auto___10741]));

var G__10742 = (i__7215__auto___10741 + (1));
i__7215__auto___10741 = G__10742;
continue;
} else {
}
break;
}

var G__10686 = args10684.length;
switch (G__10686) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10684.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8646__auto___10744 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8646__auto___10744,out){
return (function (){
var f__8647__auto__ = (function (){var switch__8534__auto__ = ((function (c__8646__auto___10744,out){
return (function (state_10716){
var state_val_10717 = (state_10716[(1)]);
if((state_val_10717 === (7))){
var inst_10696 = (state_10716[(7)]);
var inst_10695 = (state_10716[(8)]);
var inst_10695__$1 = (state_10716[(2)]);
var inst_10696__$1 = cljs.core.nth.call(null,inst_10695__$1,(0),null);
var inst_10697 = cljs.core.nth.call(null,inst_10695__$1,(1),null);
var inst_10698 = (inst_10696__$1 == null);
var state_10716__$1 = (function (){var statearr_10718 = state_10716;
(statearr_10718[(7)] = inst_10696__$1);

(statearr_10718[(9)] = inst_10697);

(statearr_10718[(8)] = inst_10695__$1);

return statearr_10718;
})();
if(cljs.core.truth_(inst_10698)){
var statearr_10719_10745 = state_10716__$1;
(statearr_10719_10745[(1)] = (8));

} else {
var statearr_10720_10746 = state_10716__$1;
(statearr_10720_10746[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10717 === (1))){
var inst_10687 = cljs.core.vec.call(null,chs);
var inst_10688 = inst_10687;
var state_10716__$1 = (function (){var statearr_10721 = state_10716;
(statearr_10721[(10)] = inst_10688);

return statearr_10721;
})();
var statearr_10722_10747 = state_10716__$1;
(statearr_10722_10747[(2)] = null);

(statearr_10722_10747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10717 === (4))){
var inst_10688 = (state_10716[(10)]);
var state_10716__$1 = state_10716;
return cljs.core.async.ioc_alts_BANG_.call(null,state_10716__$1,(7),inst_10688);
} else {
if((state_val_10717 === (6))){
var inst_10712 = (state_10716[(2)]);
var state_10716__$1 = state_10716;
var statearr_10723_10748 = state_10716__$1;
(statearr_10723_10748[(2)] = inst_10712);

(statearr_10723_10748[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10717 === (3))){
var inst_10714 = (state_10716[(2)]);
var state_10716__$1 = state_10716;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10716__$1,inst_10714);
} else {
if((state_val_10717 === (2))){
var inst_10688 = (state_10716[(10)]);
var inst_10690 = cljs.core.count.call(null,inst_10688);
var inst_10691 = (inst_10690 > (0));
var state_10716__$1 = state_10716;
if(cljs.core.truth_(inst_10691)){
var statearr_10725_10749 = state_10716__$1;
(statearr_10725_10749[(1)] = (4));

} else {
var statearr_10726_10750 = state_10716__$1;
(statearr_10726_10750[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10717 === (11))){
var inst_10688 = (state_10716[(10)]);
var inst_10705 = (state_10716[(2)]);
var tmp10724 = inst_10688;
var inst_10688__$1 = tmp10724;
var state_10716__$1 = (function (){var statearr_10727 = state_10716;
(statearr_10727[(10)] = inst_10688__$1);

(statearr_10727[(11)] = inst_10705);

return statearr_10727;
})();
var statearr_10728_10751 = state_10716__$1;
(statearr_10728_10751[(2)] = null);

(statearr_10728_10751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10717 === (9))){
var inst_10696 = (state_10716[(7)]);
var state_10716__$1 = state_10716;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10716__$1,(11),out,inst_10696);
} else {
if((state_val_10717 === (5))){
var inst_10710 = cljs.core.async.close_BANG_.call(null,out);
var state_10716__$1 = state_10716;
var statearr_10729_10752 = state_10716__$1;
(statearr_10729_10752[(2)] = inst_10710);

(statearr_10729_10752[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10717 === (10))){
var inst_10708 = (state_10716[(2)]);
var state_10716__$1 = state_10716;
var statearr_10730_10753 = state_10716__$1;
(statearr_10730_10753[(2)] = inst_10708);

(statearr_10730_10753[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10717 === (8))){
var inst_10696 = (state_10716[(7)]);
var inst_10688 = (state_10716[(10)]);
var inst_10697 = (state_10716[(9)]);
var inst_10695 = (state_10716[(8)]);
var inst_10700 = (function (){var cs = inst_10688;
var vec__10693 = inst_10695;
var v = inst_10696;
var c = inst_10697;
return ((function (cs,vec__10693,v,c,inst_10696,inst_10688,inst_10697,inst_10695,state_val_10717,c__8646__auto___10744,out){
return (function (p1__10683_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__10683_SHARP_);
});
;})(cs,vec__10693,v,c,inst_10696,inst_10688,inst_10697,inst_10695,state_val_10717,c__8646__auto___10744,out))
})();
var inst_10701 = cljs.core.filterv.call(null,inst_10700,inst_10688);
var inst_10688__$1 = inst_10701;
var state_10716__$1 = (function (){var statearr_10731 = state_10716;
(statearr_10731[(10)] = inst_10688__$1);

return statearr_10731;
})();
var statearr_10732_10754 = state_10716__$1;
(statearr_10732_10754[(2)] = null);

(statearr_10732_10754[(1)] = (2));


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
});})(c__8646__auto___10744,out))
;
return ((function (switch__8534__auto__,c__8646__auto___10744,out){
return (function() {
var cljs$core$async$state_machine__8535__auto__ = null;
var cljs$core$async$state_machine__8535__auto____0 = (function (){
var statearr_10736 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10736[(0)] = cljs$core$async$state_machine__8535__auto__);

(statearr_10736[(1)] = (1));

return statearr_10736;
});
var cljs$core$async$state_machine__8535__auto____1 = (function (state_10716){
while(true){
var ret_value__8536__auto__ = (function (){try{while(true){
var result__8537__auto__ = switch__8534__auto__.call(null,state_10716);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8537__auto__;
}
break;
}
}catch (e10737){if((e10737 instanceof Object)){
var ex__8538__auto__ = e10737;
var statearr_10738_10755 = state_10716;
(statearr_10738_10755[(5)] = ex__8538__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10716);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10737;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10756 = state_10716;
state_10716 = G__10756;
continue;
} else {
return ret_value__8536__auto__;
}
break;
}
});
cljs$core$async$state_machine__8535__auto__ = function(state_10716){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8535__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8535__auto____1.call(this,state_10716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8535__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8535__auto____0;
cljs$core$async$state_machine__8535__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8535__auto____1;
return cljs$core$async$state_machine__8535__auto__;
})()
;})(switch__8534__auto__,c__8646__auto___10744,out))
})();
var state__8648__auto__ = (function (){var statearr_10739 = f__8647__auto__.call(null);
(statearr_10739[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8646__auto___10744);

return statearr_10739;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8648__auto__);
});})(c__8646__auto___10744,out))
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
var args10757 = [];
var len__7214__auto___10806 = arguments.length;
var i__7215__auto___10807 = (0);
while(true){
if((i__7215__auto___10807 < len__7214__auto___10806)){
args10757.push((arguments[i__7215__auto___10807]));

var G__10808 = (i__7215__auto___10807 + (1));
i__7215__auto___10807 = G__10808;
continue;
} else {
}
break;
}

var G__10759 = args10757.length;
switch (G__10759) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10757.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8646__auto___10810 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8646__auto___10810,out){
return (function (){
var f__8647__auto__ = (function (){var switch__8534__auto__ = ((function (c__8646__auto___10810,out){
return (function (state_10783){
var state_val_10784 = (state_10783[(1)]);
if((state_val_10784 === (7))){
var inst_10765 = (state_10783[(7)]);
var inst_10765__$1 = (state_10783[(2)]);
var inst_10766 = (inst_10765__$1 == null);
var inst_10767 = cljs.core.not.call(null,inst_10766);
var state_10783__$1 = (function (){var statearr_10785 = state_10783;
(statearr_10785[(7)] = inst_10765__$1);

return statearr_10785;
})();
if(inst_10767){
var statearr_10786_10811 = state_10783__$1;
(statearr_10786_10811[(1)] = (8));

} else {
var statearr_10787_10812 = state_10783__$1;
(statearr_10787_10812[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10784 === (1))){
var inst_10760 = (0);
var state_10783__$1 = (function (){var statearr_10788 = state_10783;
(statearr_10788[(8)] = inst_10760);

return statearr_10788;
})();
var statearr_10789_10813 = state_10783__$1;
(statearr_10789_10813[(2)] = null);

(statearr_10789_10813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10784 === (4))){
var state_10783__$1 = state_10783;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10783__$1,(7),ch);
} else {
if((state_val_10784 === (6))){
var inst_10778 = (state_10783[(2)]);
var state_10783__$1 = state_10783;
var statearr_10790_10814 = state_10783__$1;
(statearr_10790_10814[(2)] = inst_10778);

(statearr_10790_10814[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10784 === (3))){
var inst_10780 = (state_10783[(2)]);
var inst_10781 = cljs.core.async.close_BANG_.call(null,out);
var state_10783__$1 = (function (){var statearr_10791 = state_10783;
(statearr_10791[(9)] = inst_10780);

return statearr_10791;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10783__$1,inst_10781);
} else {
if((state_val_10784 === (2))){
var inst_10760 = (state_10783[(8)]);
var inst_10762 = (inst_10760 < n);
var state_10783__$1 = state_10783;
if(cljs.core.truth_(inst_10762)){
var statearr_10792_10815 = state_10783__$1;
(statearr_10792_10815[(1)] = (4));

} else {
var statearr_10793_10816 = state_10783__$1;
(statearr_10793_10816[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10784 === (11))){
var inst_10760 = (state_10783[(8)]);
var inst_10770 = (state_10783[(2)]);
var inst_10771 = (inst_10760 + (1));
var inst_10760__$1 = inst_10771;
var state_10783__$1 = (function (){var statearr_10794 = state_10783;
(statearr_10794[(8)] = inst_10760__$1);

(statearr_10794[(10)] = inst_10770);

return statearr_10794;
})();
var statearr_10795_10817 = state_10783__$1;
(statearr_10795_10817[(2)] = null);

(statearr_10795_10817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10784 === (9))){
var state_10783__$1 = state_10783;
var statearr_10796_10818 = state_10783__$1;
(statearr_10796_10818[(2)] = null);

(statearr_10796_10818[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10784 === (5))){
var state_10783__$1 = state_10783;
var statearr_10797_10819 = state_10783__$1;
(statearr_10797_10819[(2)] = null);

(statearr_10797_10819[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10784 === (10))){
var inst_10775 = (state_10783[(2)]);
var state_10783__$1 = state_10783;
var statearr_10798_10820 = state_10783__$1;
(statearr_10798_10820[(2)] = inst_10775);

(statearr_10798_10820[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10784 === (8))){
var inst_10765 = (state_10783[(7)]);
var state_10783__$1 = state_10783;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10783__$1,(11),out,inst_10765);
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
});})(c__8646__auto___10810,out))
;
return ((function (switch__8534__auto__,c__8646__auto___10810,out){
return (function() {
var cljs$core$async$state_machine__8535__auto__ = null;
var cljs$core$async$state_machine__8535__auto____0 = (function (){
var statearr_10802 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_10802[(0)] = cljs$core$async$state_machine__8535__auto__);

(statearr_10802[(1)] = (1));

return statearr_10802;
});
var cljs$core$async$state_machine__8535__auto____1 = (function (state_10783){
while(true){
var ret_value__8536__auto__ = (function (){try{while(true){
var result__8537__auto__ = switch__8534__auto__.call(null,state_10783);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8537__auto__;
}
break;
}
}catch (e10803){if((e10803 instanceof Object)){
var ex__8538__auto__ = e10803;
var statearr_10804_10821 = state_10783;
(statearr_10804_10821[(5)] = ex__8538__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10783);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10803;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10822 = state_10783;
state_10783 = G__10822;
continue;
} else {
return ret_value__8536__auto__;
}
break;
}
});
cljs$core$async$state_machine__8535__auto__ = function(state_10783){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8535__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8535__auto____1.call(this,state_10783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8535__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8535__auto____0;
cljs$core$async$state_machine__8535__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8535__auto____1;
return cljs$core$async$state_machine__8535__auto__;
})()
;})(switch__8534__auto__,c__8646__auto___10810,out))
})();
var state__8648__auto__ = (function (){var statearr_10805 = f__8647__auto__.call(null);
(statearr_10805[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8646__auto___10810);

return statearr_10805;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8648__auto__);
});})(c__8646__auto___10810,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async10830 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10830 = (function (map_LT_,f,ch,meta10831){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta10831 = meta10831;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10830.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10832,meta10831__$1){
var self__ = this;
var _10832__$1 = this;
return (new cljs.core.async.t_cljs$core$async10830(self__.map_LT_,self__.f,self__.ch,meta10831__$1));
});

cljs.core.async.t_cljs$core$async10830.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10832){
var self__ = this;
var _10832__$1 = this;
return self__.meta10831;
});

cljs.core.async.t_cljs$core$async10830.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async10830.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async10830.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async10830.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async10830.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async10833 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10833 = (function (map_LT_,f,ch,meta10831,_,fn1,meta10834){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta10831 = meta10831;
this._ = _;
this.fn1 = fn1;
this.meta10834 = meta10834;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10833.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_10835,meta10834__$1){
var self__ = this;
var _10835__$1 = this;
return (new cljs.core.async.t_cljs$core$async10833(self__.map_LT_,self__.f,self__.ch,self__.meta10831,self__._,self__.fn1,meta10834__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async10833.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_10835){
var self__ = this;
var _10835__$1 = this;
return self__.meta10834;
});})(___$1))
;

cljs.core.async.t_cljs$core$async10833.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async10833.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async10833.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async10833.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__10823_SHARP_){
return f1.call(null,(((p1__10823_SHARP_ == null))?null:self__.f.call(null,p1__10823_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async10833.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta10831","meta10831",-874325804,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async10830","cljs.core.async/t_cljs$core$async10830",-913492150,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta10834","meta10834",1776420597,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async10833.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10833.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10833";

cljs.core.async.t_cljs$core$async10833.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async10833");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async10833 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async10833(map_LT___$1,f__$1,ch__$1,meta10831__$1,___$2,fn1__$1,meta10834){
return (new cljs.core.async.t_cljs$core$async10833(map_LT___$1,f__$1,ch__$1,meta10831__$1,___$2,fn1__$1,meta10834));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async10833(self__.map_LT_,self__.f,self__.ch,self__.meta10831,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async10830.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async10830.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async10830.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta10831","meta10831",-874325804,null)], null);
});

cljs.core.async.t_cljs$core$async10830.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10830.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10830";

cljs.core.async.t_cljs$core$async10830.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async10830");
});

cljs.core.async.__GT_t_cljs$core$async10830 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async10830(map_LT___$1,f__$1,ch__$1,meta10831){
return (new cljs.core.async.t_cljs$core$async10830(map_LT___$1,f__$1,ch__$1,meta10831));
});

}

return (new cljs.core.async.t_cljs$core$async10830(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async10839 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10839 = (function (map_GT_,f,ch,meta10840){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta10840 = meta10840;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10839.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10841,meta10840__$1){
var self__ = this;
var _10841__$1 = this;
return (new cljs.core.async.t_cljs$core$async10839(self__.map_GT_,self__.f,self__.ch,meta10840__$1));
});

cljs.core.async.t_cljs$core$async10839.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10841){
var self__ = this;
var _10841__$1 = this;
return self__.meta10840;
});

cljs.core.async.t_cljs$core$async10839.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async10839.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async10839.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async10839.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async10839.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async10839.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async10839.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta10840","meta10840",-433360829,null)], null);
});

cljs.core.async.t_cljs$core$async10839.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10839.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10839";

cljs.core.async.t_cljs$core$async10839.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async10839");
});

cljs.core.async.__GT_t_cljs$core$async10839 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async10839(map_GT___$1,f__$1,ch__$1,meta10840){
return (new cljs.core.async.t_cljs$core$async10839(map_GT___$1,f__$1,ch__$1,meta10840));
});

}

return (new cljs.core.async.t_cljs$core$async10839(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async10845 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10845 = (function (filter_GT_,p,ch,meta10846){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta10846 = meta10846;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10845.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10847,meta10846__$1){
var self__ = this;
var _10847__$1 = this;
return (new cljs.core.async.t_cljs$core$async10845(self__.filter_GT_,self__.p,self__.ch,meta10846__$1));
});

cljs.core.async.t_cljs$core$async10845.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10847){
var self__ = this;
var _10847__$1 = this;
return self__.meta10846;
});

cljs.core.async.t_cljs$core$async10845.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async10845.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async10845.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async10845.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async10845.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async10845.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async10845.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async10845.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta10846","meta10846",-398265682,null)], null);
});

cljs.core.async.t_cljs$core$async10845.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10845.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10845";

cljs.core.async.t_cljs$core$async10845.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async10845");
});

cljs.core.async.__GT_t_cljs$core$async10845 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async10845(filter_GT___$1,p__$1,ch__$1,meta10846){
return (new cljs.core.async.t_cljs$core$async10845(filter_GT___$1,p__$1,ch__$1,meta10846));
});

}

return (new cljs.core.async.t_cljs$core$async10845(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args10848 = [];
var len__7214__auto___10892 = arguments.length;
var i__7215__auto___10893 = (0);
while(true){
if((i__7215__auto___10893 < len__7214__auto___10892)){
args10848.push((arguments[i__7215__auto___10893]));

var G__10894 = (i__7215__auto___10893 + (1));
i__7215__auto___10893 = G__10894;
continue;
} else {
}
break;
}

var G__10850 = args10848.length;
switch (G__10850) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10848.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8646__auto___10896 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8646__auto___10896,out){
return (function (){
var f__8647__auto__ = (function (){var switch__8534__auto__ = ((function (c__8646__auto___10896,out){
return (function (state_10871){
var state_val_10872 = (state_10871[(1)]);
if((state_val_10872 === (7))){
var inst_10867 = (state_10871[(2)]);
var state_10871__$1 = state_10871;
var statearr_10873_10897 = state_10871__$1;
(statearr_10873_10897[(2)] = inst_10867);

(statearr_10873_10897[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10872 === (1))){
var state_10871__$1 = state_10871;
var statearr_10874_10898 = state_10871__$1;
(statearr_10874_10898[(2)] = null);

(statearr_10874_10898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10872 === (4))){
var inst_10853 = (state_10871[(7)]);
var inst_10853__$1 = (state_10871[(2)]);
var inst_10854 = (inst_10853__$1 == null);
var state_10871__$1 = (function (){var statearr_10875 = state_10871;
(statearr_10875[(7)] = inst_10853__$1);

return statearr_10875;
})();
if(cljs.core.truth_(inst_10854)){
var statearr_10876_10899 = state_10871__$1;
(statearr_10876_10899[(1)] = (5));

} else {
var statearr_10877_10900 = state_10871__$1;
(statearr_10877_10900[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10872 === (6))){
var inst_10853 = (state_10871[(7)]);
var inst_10858 = p.call(null,inst_10853);
var state_10871__$1 = state_10871;
if(cljs.core.truth_(inst_10858)){
var statearr_10878_10901 = state_10871__$1;
(statearr_10878_10901[(1)] = (8));

} else {
var statearr_10879_10902 = state_10871__$1;
(statearr_10879_10902[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10872 === (3))){
var inst_10869 = (state_10871[(2)]);
var state_10871__$1 = state_10871;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10871__$1,inst_10869);
} else {
if((state_val_10872 === (2))){
var state_10871__$1 = state_10871;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10871__$1,(4),ch);
} else {
if((state_val_10872 === (11))){
var inst_10861 = (state_10871[(2)]);
var state_10871__$1 = state_10871;
var statearr_10880_10903 = state_10871__$1;
(statearr_10880_10903[(2)] = inst_10861);

(statearr_10880_10903[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10872 === (9))){
var state_10871__$1 = state_10871;
var statearr_10881_10904 = state_10871__$1;
(statearr_10881_10904[(2)] = null);

(statearr_10881_10904[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10872 === (5))){
var inst_10856 = cljs.core.async.close_BANG_.call(null,out);
var state_10871__$1 = state_10871;
var statearr_10882_10905 = state_10871__$1;
(statearr_10882_10905[(2)] = inst_10856);

(statearr_10882_10905[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10872 === (10))){
var inst_10864 = (state_10871[(2)]);
var state_10871__$1 = (function (){var statearr_10883 = state_10871;
(statearr_10883[(8)] = inst_10864);

return statearr_10883;
})();
var statearr_10884_10906 = state_10871__$1;
(statearr_10884_10906[(2)] = null);

(statearr_10884_10906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10872 === (8))){
var inst_10853 = (state_10871[(7)]);
var state_10871__$1 = state_10871;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10871__$1,(11),out,inst_10853);
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
});})(c__8646__auto___10896,out))
;
return ((function (switch__8534__auto__,c__8646__auto___10896,out){
return (function() {
var cljs$core$async$state_machine__8535__auto__ = null;
var cljs$core$async$state_machine__8535__auto____0 = (function (){
var statearr_10888 = [null,null,null,null,null,null,null,null,null];
(statearr_10888[(0)] = cljs$core$async$state_machine__8535__auto__);

(statearr_10888[(1)] = (1));

return statearr_10888;
});
var cljs$core$async$state_machine__8535__auto____1 = (function (state_10871){
while(true){
var ret_value__8536__auto__ = (function (){try{while(true){
var result__8537__auto__ = switch__8534__auto__.call(null,state_10871);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8537__auto__;
}
break;
}
}catch (e10889){if((e10889 instanceof Object)){
var ex__8538__auto__ = e10889;
var statearr_10890_10907 = state_10871;
(statearr_10890_10907[(5)] = ex__8538__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10871);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10889;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10908 = state_10871;
state_10871 = G__10908;
continue;
} else {
return ret_value__8536__auto__;
}
break;
}
});
cljs$core$async$state_machine__8535__auto__ = function(state_10871){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8535__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8535__auto____1.call(this,state_10871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8535__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8535__auto____0;
cljs$core$async$state_machine__8535__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8535__auto____1;
return cljs$core$async$state_machine__8535__auto__;
})()
;})(switch__8534__auto__,c__8646__auto___10896,out))
})();
var state__8648__auto__ = (function (){var statearr_10891 = f__8647__auto__.call(null);
(statearr_10891[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8646__auto___10896);

return statearr_10891;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8648__auto__);
});})(c__8646__auto___10896,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args10909 = [];
var len__7214__auto___10912 = arguments.length;
var i__7215__auto___10913 = (0);
while(true){
if((i__7215__auto___10913 < len__7214__auto___10912)){
args10909.push((arguments[i__7215__auto___10913]));

var G__10914 = (i__7215__auto___10913 + (1));
i__7215__auto___10913 = G__10914;
continue;
} else {
}
break;
}

var G__10911 = args10909.length;
switch (G__10911) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10909.length)].join('')));

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
var c__8646__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8646__auto__){
return (function (){
var f__8647__auto__ = (function (){var switch__8534__auto__ = ((function (c__8646__auto__){
return (function (state_11081){
var state_val_11082 = (state_11081[(1)]);
if((state_val_11082 === (7))){
var inst_11077 = (state_11081[(2)]);
var state_11081__$1 = state_11081;
var statearr_11083_11124 = state_11081__$1;
(statearr_11083_11124[(2)] = inst_11077);

(statearr_11083_11124[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11082 === (20))){
var inst_11047 = (state_11081[(7)]);
var inst_11058 = (state_11081[(2)]);
var inst_11059 = cljs.core.next.call(null,inst_11047);
var inst_11033 = inst_11059;
var inst_11034 = null;
var inst_11035 = (0);
var inst_11036 = (0);
var state_11081__$1 = (function (){var statearr_11084 = state_11081;
(statearr_11084[(8)] = inst_11034);

(statearr_11084[(9)] = inst_11058);

(statearr_11084[(10)] = inst_11033);

(statearr_11084[(11)] = inst_11035);

(statearr_11084[(12)] = inst_11036);

return statearr_11084;
})();
var statearr_11085_11125 = state_11081__$1;
(statearr_11085_11125[(2)] = null);

(statearr_11085_11125[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11082 === (1))){
var state_11081__$1 = state_11081;
var statearr_11086_11126 = state_11081__$1;
(statearr_11086_11126[(2)] = null);

(statearr_11086_11126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11082 === (4))){
var inst_11022 = (state_11081[(13)]);
var inst_11022__$1 = (state_11081[(2)]);
var inst_11023 = (inst_11022__$1 == null);
var state_11081__$1 = (function (){var statearr_11087 = state_11081;
(statearr_11087[(13)] = inst_11022__$1);

return statearr_11087;
})();
if(cljs.core.truth_(inst_11023)){
var statearr_11088_11127 = state_11081__$1;
(statearr_11088_11127[(1)] = (5));

} else {
var statearr_11089_11128 = state_11081__$1;
(statearr_11089_11128[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11082 === (15))){
var state_11081__$1 = state_11081;
var statearr_11093_11129 = state_11081__$1;
(statearr_11093_11129[(2)] = null);

(statearr_11093_11129[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11082 === (21))){
var state_11081__$1 = state_11081;
var statearr_11094_11130 = state_11081__$1;
(statearr_11094_11130[(2)] = null);

(statearr_11094_11130[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11082 === (13))){
var inst_11034 = (state_11081[(8)]);
var inst_11033 = (state_11081[(10)]);
var inst_11035 = (state_11081[(11)]);
var inst_11036 = (state_11081[(12)]);
var inst_11043 = (state_11081[(2)]);
var inst_11044 = (inst_11036 + (1));
var tmp11090 = inst_11034;
var tmp11091 = inst_11033;
var tmp11092 = inst_11035;
var inst_11033__$1 = tmp11091;
var inst_11034__$1 = tmp11090;
var inst_11035__$1 = tmp11092;
var inst_11036__$1 = inst_11044;
var state_11081__$1 = (function (){var statearr_11095 = state_11081;
(statearr_11095[(8)] = inst_11034__$1);

(statearr_11095[(14)] = inst_11043);

(statearr_11095[(10)] = inst_11033__$1);

(statearr_11095[(11)] = inst_11035__$1);

(statearr_11095[(12)] = inst_11036__$1);

return statearr_11095;
})();
var statearr_11096_11131 = state_11081__$1;
(statearr_11096_11131[(2)] = null);

(statearr_11096_11131[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11082 === (22))){
var state_11081__$1 = state_11081;
var statearr_11097_11132 = state_11081__$1;
(statearr_11097_11132[(2)] = null);

(statearr_11097_11132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11082 === (6))){
var inst_11022 = (state_11081[(13)]);
var inst_11031 = f.call(null,inst_11022);
var inst_11032 = cljs.core.seq.call(null,inst_11031);
var inst_11033 = inst_11032;
var inst_11034 = null;
var inst_11035 = (0);
var inst_11036 = (0);
var state_11081__$1 = (function (){var statearr_11098 = state_11081;
(statearr_11098[(8)] = inst_11034);

(statearr_11098[(10)] = inst_11033);

(statearr_11098[(11)] = inst_11035);

(statearr_11098[(12)] = inst_11036);

return statearr_11098;
})();
var statearr_11099_11133 = state_11081__$1;
(statearr_11099_11133[(2)] = null);

(statearr_11099_11133[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11082 === (17))){
var inst_11047 = (state_11081[(7)]);
var inst_11051 = cljs.core.chunk_first.call(null,inst_11047);
var inst_11052 = cljs.core.chunk_rest.call(null,inst_11047);
var inst_11053 = cljs.core.count.call(null,inst_11051);
var inst_11033 = inst_11052;
var inst_11034 = inst_11051;
var inst_11035 = inst_11053;
var inst_11036 = (0);
var state_11081__$1 = (function (){var statearr_11100 = state_11081;
(statearr_11100[(8)] = inst_11034);

(statearr_11100[(10)] = inst_11033);

(statearr_11100[(11)] = inst_11035);

(statearr_11100[(12)] = inst_11036);

return statearr_11100;
})();
var statearr_11101_11134 = state_11081__$1;
(statearr_11101_11134[(2)] = null);

(statearr_11101_11134[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11082 === (3))){
var inst_11079 = (state_11081[(2)]);
var state_11081__$1 = state_11081;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11081__$1,inst_11079);
} else {
if((state_val_11082 === (12))){
var inst_11067 = (state_11081[(2)]);
var state_11081__$1 = state_11081;
var statearr_11102_11135 = state_11081__$1;
(statearr_11102_11135[(2)] = inst_11067);

(statearr_11102_11135[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11082 === (2))){
var state_11081__$1 = state_11081;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11081__$1,(4),in$);
} else {
if((state_val_11082 === (23))){
var inst_11075 = (state_11081[(2)]);
var state_11081__$1 = state_11081;
var statearr_11103_11136 = state_11081__$1;
(statearr_11103_11136[(2)] = inst_11075);

(statearr_11103_11136[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11082 === (19))){
var inst_11062 = (state_11081[(2)]);
var state_11081__$1 = state_11081;
var statearr_11104_11137 = state_11081__$1;
(statearr_11104_11137[(2)] = inst_11062);

(statearr_11104_11137[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11082 === (11))){
var inst_11047 = (state_11081[(7)]);
var inst_11033 = (state_11081[(10)]);
var inst_11047__$1 = cljs.core.seq.call(null,inst_11033);
var state_11081__$1 = (function (){var statearr_11105 = state_11081;
(statearr_11105[(7)] = inst_11047__$1);

return statearr_11105;
})();
if(inst_11047__$1){
var statearr_11106_11138 = state_11081__$1;
(statearr_11106_11138[(1)] = (14));

} else {
var statearr_11107_11139 = state_11081__$1;
(statearr_11107_11139[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11082 === (9))){
var inst_11069 = (state_11081[(2)]);
var inst_11070 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_11081__$1 = (function (){var statearr_11108 = state_11081;
(statearr_11108[(15)] = inst_11069);

return statearr_11108;
})();
if(cljs.core.truth_(inst_11070)){
var statearr_11109_11140 = state_11081__$1;
(statearr_11109_11140[(1)] = (21));

} else {
var statearr_11110_11141 = state_11081__$1;
(statearr_11110_11141[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11082 === (5))){
var inst_11025 = cljs.core.async.close_BANG_.call(null,out);
var state_11081__$1 = state_11081;
var statearr_11111_11142 = state_11081__$1;
(statearr_11111_11142[(2)] = inst_11025);

(statearr_11111_11142[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11082 === (14))){
var inst_11047 = (state_11081[(7)]);
var inst_11049 = cljs.core.chunked_seq_QMARK_.call(null,inst_11047);
var state_11081__$1 = state_11081;
if(inst_11049){
var statearr_11112_11143 = state_11081__$1;
(statearr_11112_11143[(1)] = (17));

} else {
var statearr_11113_11144 = state_11081__$1;
(statearr_11113_11144[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11082 === (16))){
var inst_11065 = (state_11081[(2)]);
var state_11081__$1 = state_11081;
var statearr_11114_11145 = state_11081__$1;
(statearr_11114_11145[(2)] = inst_11065);

(statearr_11114_11145[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11082 === (10))){
var inst_11034 = (state_11081[(8)]);
var inst_11036 = (state_11081[(12)]);
var inst_11041 = cljs.core._nth.call(null,inst_11034,inst_11036);
var state_11081__$1 = state_11081;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11081__$1,(13),out,inst_11041);
} else {
if((state_val_11082 === (18))){
var inst_11047 = (state_11081[(7)]);
var inst_11056 = cljs.core.first.call(null,inst_11047);
var state_11081__$1 = state_11081;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11081__$1,(20),out,inst_11056);
} else {
if((state_val_11082 === (8))){
var inst_11035 = (state_11081[(11)]);
var inst_11036 = (state_11081[(12)]);
var inst_11038 = (inst_11036 < inst_11035);
var inst_11039 = inst_11038;
var state_11081__$1 = state_11081;
if(cljs.core.truth_(inst_11039)){
var statearr_11115_11146 = state_11081__$1;
(statearr_11115_11146[(1)] = (10));

} else {
var statearr_11116_11147 = state_11081__$1;
(statearr_11116_11147[(1)] = (11));

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
});})(c__8646__auto__))
;
return ((function (switch__8534__auto__,c__8646__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__8535__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__8535__auto____0 = (function (){
var statearr_11120 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11120[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__8535__auto__);

(statearr_11120[(1)] = (1));

return statearr_11120;
});
var cljs$core$async$mapcat_STAR__$_state_machine__8535__auto____1 = (function (state_11081){
while(true){
var ret_value__8536__auto__ = (function (){try{while(true){
var result__8537__auto__ = switch__8534__auto__.call(null,state_11081);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8537__auto__;
}
break;
}
}catch (e11121){if((e11121 instanceof Object)){
var ex__8538__auto__ = e11121;
var statearr_11122_11148 = state_11081;
(statearr_11122_11148[(5)] = ex__8538__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11081);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11121;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11149 = state_11081;
state_11081 = G__11149;
continue;
} else {
return ret_value__8536__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__8535__auto__ = function(state_11081){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__8535__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__8535__auto____1.call(this,state_11081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__8535__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__8535__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__8535__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__8535__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__8535__auto__;
})()
;})(switch__8534__auto__,c__8646__auto__))
})();
var state__8648__auto__ = (function (){var statearr_11123 = f__8647__auto__.call(null);
(statearr_11123[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8646__auto__);

return statearr_11123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8648__auto__);
});})(c__8646__auto__))
);

return c__8646__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args11150 = [];
var len__7214__auto___11153 = arguments.length;
var i__7215__auto___11154 = (0);
while(true){
if((i__7215__auto___11154 < len__7214__auto___11153)){
args11150.push((arguments[i__7215__auto___11154]));

var G__11155 = (i__7215__auto___11154 + (1));
i__7215__auto___11154 = G__11155;
continue;
} else {
}
break;
}

var G__11152 = args11150.length;
switch (G__11152) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11150.length)].join('')));

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
var args11157 = [];
var len__7214__auto___11160 = arguments.length;
var i__7215__auto___11161 = (0);
while(true){
if((i__7215__auto___11161 < len__7214__auto___11160)){
args11157.push((arguments[i__7215__auto___11161]));

var G__11162 = (i__7215__auto___11161 + (1));
i__7215__auto___11161 = G__11162;
continue;
} else {
}
break;
}

var G__11159 = args11157.length;
switch (G__11159) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11157.length)].join('')));

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
var args11164 = [];
var len__7214__auto___11215 = arguments.length;
var i__7215__auto___11216 = (0);
while(true){
if((i__7215__auto___11216 < len__7214__auto___11215)){
args11164.push((arguments[i__7215__auto___11216]));

var G__11217 = (i__7215__auto___11216 + (1));
i__7215__auto___11216 = G__11217;
continue;
} else {
}
break;
}

var G__11166 = args11164.length;
switch (G__11166) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11164.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8646__auto___11219 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8646__auto___11219,out){
return (function (){
var f__8647__auto__ = (function (){var switch__8534__auto__ = ((function (c__8646__auto___11219,out){
return (function (state_11190){
var state_val_11191 = (state_11190[(1)]);
if((state_val_11191 === (7))){
var inst_11185 = (state_11190[(2)]);
var state_11190__$1 = state_11190;
var statearr_11192_11220 = state_11190__$1;
(statearr_11192_11220[(2)] = inst_11185);

(statearr_11192_11220[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11191 === (1))){
var inst_11167 = null;
var state_11190__$1 = (function (){var statearr_11193 = state_11190;
(statearr_11193[(7)] = inst_11167);

return statearr_11193;
})();
var statearr_11194_11221 = state_11190__$1;
(statearr_11194_11221[(2)] = null);

(statearr_11194_11221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11191 === (4))){
var inst_11170 = (state_11190[(8)]);
var inst_11170__$1 = (state_11190[(2)]);
var inst_11171 = (inst_11170__$1 == null);
var inst_11172 = cljs.core.not.call(null,inst_11171);
var state_11190__$1 = (function (){var statearr_11195 = state_11190;
(statearr_11195[(8)] = inst_11170__$1);

return statearr_11195;
})();
if(inst_11172){
var statearr_11196_11222 = state_11190__$1;
(statearr_11196_11222[(1)] = (5));

} else {
var statearr_11197_11223 = state_11190__$1;
(statearr_11197_11223[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11191 === (6))){
var state_11190__$1 = state_11190;
var statearr_11198_11224 = state_11190__$1;
(statearr_11198_11224[(2)] = null);

(statearr_11198_11224[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11191 === (3))){
var inst_11187 = (state_11190[(2)]);
var inst_11188 = cljs.core.async.close_BANG_.call(null,out);
var state_11190__$1 = (function (){var statearr_11199 = state_11190;
(statearr_11199[(9)] = inst_11187);

return statearr_11199;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11190__$1,inst_11188);
} else {
if((state_val_11191 === (2))){
var state_11190__$1 = state_11190;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11190__$1,(4),ch);
} else {
if((state_val_11191 === (11))){
var inst_11170 = (state_11190[(8)]);
var inst_11179 = (state_11190[(2)]);
var inst_11167 = inst_11170;
var state_11190__$1 = (function (){var statearr_11200 = state_11190;
(statearr_11200[(10)] = inst_11179);

(statearr_11200[(7)] = inst_11167);

return statearr_11200;
})();
var statearr_11201_11225 = state_11190__$1;
(statearr_11201_11225[(2)] = null);

(statearr_11201_11225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11191 === (9))){
var inst_11170 = (state_11190[(8)]);
var state_11190__$1 = state_11190;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11190__$1,(11),out,inst_11170);
} else {
if((state_val_11191 === (5))){
var inst_11167 = (state_11190[(7)]);
var inst_11170 = (state_11190[(8)]);
var inst_11174 = cljs.core._EQ_.call(null,inst_11170,inst_11167);
var state_11190__$1 = state_11190;
if(inst_11174){
var statearr_11203_11226 = state_11190__$1;
(statearr_11203_11226[(1)] = (8));

} else {
var statearr_11204_11227 = state_11190__$1;
(statearr_11204_11227[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11191 === (10))){
var inst_11182 = (state_11190[(2)]);
var state_11190__$1 = state_11190;
var statearr_11205_11228 = state_11190__$1;
(statearr_11205_11228[(2)] = inst_11182);

(statearr_11205_11228[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11191 === (8))){
var inst_11167 = (state_11190[(7)]);
var tmp11202 = inst_11167;
var inst_11167__$1 = tmp11202;
var state_11190__$1 = (function (){var statearr_11206 = state_11190;
(statearr_11206[(7)] = inst_11167__$1);

return statearr_11206;
})();
var statearr_11207_11229 = state_11190__$1;
(statearr_11207_11229[(2)] = null);

(statearr_11207_11229[(1)] = (2));


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
});})(c__8646__auto___11219,out))
;
return ((function (switch__8534__auto__,c__8646__auto___11219,out){
return (function() {
var cljs$core$async$state_machine__8535__auto__ = null;
var cljs$core$async$state_machine__8535__auto____0 = (function (){
var statearr_11211 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11211[(0)] = cljs$core$async$state_machine__8535__auto__);

(statearr_11211[(1)] = (1));

return statearr_11211;
});
var cljs$core$async$state_machine__8535__auto____1 = (function (state_11190){
while(true){
var ret_value__8536__auto__ = (function (){try{while(true){
var result__8537__auto__ = switch__8534__auto__.call(null,state_11190);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8537__auto__;
}
break;
}
}catch (e11212){if((e11212 instanceof Object)){
var ex__8538__auto__ = e11212;
var statearr_11213_11230 = state_11190;
(statearr_11213_11230[(5)] = ex__8538__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11190);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11212;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11231 = state_11190;
state_11190 = G__11231;
continue;
} else {
return ret_value__8536__auto__;
}
break;
}
});
cljs$core$async$state_machine__8535__auto__ = function(state_11190){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8535__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8535__auto____1.call(this,state_11190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8535__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8535__auto____0;
cljs$core$async$state_machine__8535__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8535__auto____1;
return cljs$core$async$state_machine__8535__auto__;
})()
;})(switch__8534__auto__,c__8646__auto___11219,out))
})();
var state__8648__auto__ = (function (){var statearr_11214 = f__8647__auto__.call(null);
(statearr_11214[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8646__auto___11219);

return statearr_11214;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8648__auto__);
});})(c__8646__auto___11219,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args11232 = [];
var len__7214__auto___11302 = arguments.length;
var i__7215__auto___11303 = (0);
while(true){
if((i__7215__auto___11303 < len__7214__auto___11302)){
args11232.push((arguments[i__7215__auto___11303]));

var G__11304 = (i__7215__auto___11303 + (1));
i__7215__auto___11303 = G__11304;
continue;
} else {
}
break;
}

var G__11234 = args11232.length;
switch (G__11234) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11232.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8646__auto___11306 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8646__auto___11306,out){
return (function (){
var f__8647__auto__ = (function (){var switch__8534__auto__ = ((function (c__8646__auto___11306,out){
return (function (state_11272){
var state_val_11273 = (state_11272[(1)]);
if((state_val_11273 === (7))){
var inst_11268 = (state_11272[(2)]);
var state_11272__$1 = state_11272;
var statearr_11274_11307 = state_11272__$1;
(statearr_11274_11307[(2)] = inst_11268);

(statearr_11274_11307[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11273 === (1))){
var inst_11235 = (new Array(n));
var inst_11236 = inst_11235;
var inst_11237 = (0);
var state_11272__$1 = (function (){var statearr_11275 = state_11272;
(statearr_11275[(7)] = inst_11236);

(statearr_11275[(8)] = inst_11237);

return statearr_11275;
})();
var statearr_11276_11308 = state_11272__$1;
(statearr_11276_11308[(2)] = null);

(statearr_11276_11308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11273 === (4))){
var inst_11240 = (state_11272[(9)]);
var inst_11240__$1 = (state_11272[(2)]);
var inst_11241 = (inst_11240__$1 == null);
var inst_11242 = cljs.core.not.call(null,inst_11241);
var state_11272__$1 = (function (){var statearr_11277 = state_11272;
(statearr_11277[(9)] = inst_11240__$1);

return statearr_11277;
})();
if(inst_11242){
var statearr_11278_11309 = state_11272__$1;
(statearr_11278_11309[(1)] = (5));

} else {
var statearr_11279_11310 = state_11272__$1;
(statearr_11279_11310[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11273 === (15))){
var inst_11262 = (state_11272[(2)]);
var state_11272__$1 = state_11272;
var statearr_11280_11311 = state_11272__$1;
(statearr_11280_11311[(2)] = inst_11262);

(statearr_11280_11311[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11273 === (13))){
var state_11272__$1 = state_11272;
var statearr_11281_11312 = state_11272__$1;
(statearr_11281_11312[(2)] = null);

(statearr_11281_11312[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11273 === (6))){
var inst_11237 = (state_11272[(8)]);
var inst_11258 = (inst_11237 > (0));
var state_11272__$1 = state_11272;
if(cljs.core.truth_(inst_11258)){
var statearr_11282_11313 = state_11272__$1;
(statearr_11282_11313[(1)] = (12));

} else {
var statearr_11283_11314 = state_11272__$1;
(statearr_11283_11314[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11273 === (3))){
var inst_11270 = (state_11272[(2)]);
var state_11272__$1 = state_11272;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11272__$1,inst_11270);
} else {
if((state_val_11273 === (12))){
var inst_11236 = (state_11272[(7)]);
var inst_11260 = cljs.core.vec.call(null,inst_11236);
var state_11272__$1 = state_11272;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11272__$1,(15),out,inst_11260);
} else {
if((state_val_11273 === (2))){
var state_11272__$1 = state_11272;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11272__$1,(4),ch);
} else {
if((state_val_11273 === (11))){
var inst_11252 = (state_11272[(2)]);
var inst_11253 = (new Array(n));
var inst_11236 = inst_11253;
var inst_11237 = (0);
var state_11272__$1 = (function (){var statearr_11284 = state_11272;
(statearr_11284[(10)] = inst_11252);

(statearr_11284[(7)] = inst_11236);

(statearr_11284[(8)] = inst_11237);

return statearr_11284;
})();
var statearr_11285_11315 = state_11272__$1;
(statearr_11285_11315[(2)] = null);

(statearr_11285_11315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11273 === (9))){
var inst_11236 = (state_11272[(7)]);
var inst_11250 = cljs.core.vec.call(null,inst_11236);
var state_11272__$1 = state_11272;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11272__$1,(11),out,inst_11250);
} else {
if((state_val_11273 === (5))){
var inst_11236 = (state_11272[(7)]);
var inst_11245 = (state_11272[(11)]);
var inst_11240 = (state_11272[(9)]);
var inst_11237 = (state_11272[(8)]);
var inst_11244 = (inst_11236[inst_11237] = inst_11240);
var inst_11245__$1 = (inst_11237 + (1));
var inst_11246 = (inst_11245__$1 < n);
var state_11272__$1 = (function (){var statearr_11286 = state_11272;
(statearr_11286[(11)] = inst_11245__$1);

(statearr_11286[(12)] = inst_11244);

return statearr_11286;
})();
if(cljs.core.truth_(inst_11246)){
var statearr_11287_11316 = state_11272__$1;
(statearr_11287_11316[(1)] = (8));

} else {
var statearr_11288_11317 = state_11272__$1;
(statearr_11288_11317[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11273 === (14))){
var inst_11265 = (state_11272[(2)]);
var inst_11266 = cljs.core.async.close_BANG_.call(null,out);
var state_11272__$1 = (function (){var statearr_11290 = state_11272;
(statearr_11290[(13)] = inst_11265);

return statearr_11290;
})();
var statearr_11291_11318 = state_11272__$1;
(statearr_11291_11318[(2)] = inst_11266);

(statearr_11291_11318[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11273 === (10))){
var inst_11256 = (state_11272[(2)]);
var state_11272__$1 = state_11272;
var statearr_11292_11319 = state_11272__$1;
(statearr_11292_11319[(2)] = inst_11256);

(statearr_11292_11319[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11273 === (8))){
var inst_11236 = (state_11272[(7)]);
var inst_11245 = (state_11272[(11)]);
var tmp11289 = inst_11236;
var inst_11236__$1 = tmp11289;
var inst_11237 = inst_11245;
var state_11272__$1 = (function (){var statearr_11293 = state_11272;
(statearr_11293[(7)] = inst_11236__$1);

(statearr_11293[(8)] = inst_11237);

return statearr_11293;
})();
var statearr_11294_11320 = state_11272__$1;
(statearr_11294_11320[(2)] = null);

(statearr_11294_11320[(1)] = (2));


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
});})(c__8646__auto___11306,out))
;
return ((function (switch__8534__auto__,c__8646__auto___11306,out){
return (function() {
var cljs$core$async$state_machine__8535__auto__ = null;
var cljs$core$async$state_machine__8535__auto____0 = (function (){
var statearr_11298 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11298[(0)] = cljs$core$async$state_machine__8535__auto__);

(statearr_11298[(1)] = (1));

return statearr_11298;
});
var cljs$core$async$state_machine__8535__auto____1 = (function (state_11272){
while(true){
var ret_value__8536__auto__ = (function (){try{while(true){
var result__8537__auto__ = switch__8534__auto__.call(null,state_11272);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8537__auto__;
}
break;
}
}catch (e11299){if((e11299 instanceof Object)){
var ex__8538__auto__ = e11299;
var statearr_11300_11321 = state_11272;
(statearr_11300_11321[(5)] = ex__8538__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11272);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11299;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11322 = state_11272;
state_11272 = G__11322;
continue;
} else {
return ret_value__8536__auto__;
}
break;
}
});
cljs$core$async$state_machine__8535__auto__ = function(state_11272){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8535__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8535__auto____1.call(this,state_11272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8535__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8535__auto____0;
cljs$core$async$state_machine__8535__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8535__auto____1;
return cljs$core$async$state_machine__8535__auto__;
})()
;})(switch__8534__auto__,c__8646__auto___11306,out))
})();
var state__8648__auto__ = (function (){var statearr_11301 = f__8647__auto__.call(null);
(statearr_11301[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8646__auto___11306);

return statearr_11301;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8648__auto__);
});})(c__8646__auto___11306,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args11323 = [];
var len__7214__auto___11397 = arguments.length;
var i__7215__auto___11398 = (0);
while(true){
if((i__7215__auto___11398 < len__7214__auto___11397)){
args11323.push((arguments[i__7215__auto___11398]));

var G__11399 = (i__7215__auto___11398 + (1));
i__7215__auto___11398 = G__11399;
continue;
} else {
}
break;
}

var G__11325 = args11323.length;
switch (G__11325) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11323.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8646__auto___11401 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8646__auto___11401,out){
return (function (){
var f__8647__auto__ = (function (){var switch__8534__auto__ = ((function (c__8646__auto___11401,out){
return (function (state_11367){
var state_val_11368 = (state_11367[(1)]);
if((state_val_11368 === (7))){
var inst_11363 = (state_11367[(2)]);
var state_11367__$1 = state_11367;
var statearr_11369_11402 = state_11367__$1;
(statearr_11369_11402[(2)] = inst_11363);

(statearr_11369_11402[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11368 === (1))){
var inst_11326 = [];
var inst_11327 = inst_11326;
var inst_11328 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_11367__$1 = (function (){var statearr_11370 = state_11367;
(statearr_11370[(7)] = inst_11328);

(statearr_11370[(8)] = inst_11327);

return statearr_11370;
})();
var statearr_11371_11403 = state_11367__$1;
(statearr_11371_11403[(2)] = null);

(statearr_11371_11403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11368 === (4))){
var inst_11331 = (state_11367[(9)]);
var inst_11331__$1 = (state_11367[(2)]);
var inst_11332 = (inst_11331__$1 == null);
var inst_11333 = cljs.core.not.call(null,inst_11332);
var state_11367__$1 = (function (){var statearr_11372 = state_11367;
(statearr_11372[(9)] = inst_11331__$1);

return statearr_11372;
})();
if(inst_11333){
var statearr_11373_11404 = state_11367__$1;
(statearr_11373_11404[(1)] = (5));

} else {
var statearr_11374_11405 = state_11367__$1;
(statearr_11374_11405[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11368 === (15))){
var inst_11357 = (state_11367[(2)]);
var state_11367__$1 = state_11367;
var statearr_11375_11406 = state_11367__$1;
(statearr_11375_11406[(2)] = inst_11357);

(statearr_11375_11406[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11368 === (13))){
var state_11367__$1 = state_11367;
var statearr_11376_11407 = state_11367__$1;
(statearr_11376_11407[(2)] = null);

(statearr_11376_11407[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11368 === (6))){
var inst_11327 = (state_11367[(8)]);
var inst_11352 = inst_11327.length;
var inst_11353 = (inst_11352 > (0));
var state_11367__$1 = state_11367;
if(cljs.core.truth_(inst_11353)){
var statearr_11377_11408 = state_11367__$1;
(statearr_11377_11408[(1)] = (12));

} else {
var statearr_11378_11409 = state_11367__$1;
(statearr_11378_11409[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11368 === (3))){
var inst_11365 = (state_11367[(2)]);
var state_11367__$1 = state_11367;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11367__$1,inst_11365);
} else {
if((state_val_11368 === (12))){
var inst_11327 = (state_11367[(8)]);
var inst_11355 = cljs.core.vec.call(null,inst_11327);
var state_11367__$1 = state_11367;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11367__$1,(15),out,inst_11355);
} else {
if((state_val_11368 === (2))){
var state_11367__$1 = state_11367;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11367__$1,(4),ch);
} else {
if((state_val_11368 === (11))){
var inst_11331 = (state_11367[(9)]);
var inst_11335 = (state_11367[(10)]);
var inst_11345 = (state_11367[(2)]);
var inst_11346 = [];
var inst_11347 = inst_11346.push(inst_11331);
var inst_11327 = inst_11346;
var inst_11328 = inst_11335;
var state_11367__$1 = (function (){var statearr_11379 = state_11367;
(statearr_11379[(11)] = inst_11345);

(statearr_11379[(7)] = inst_11328);

(statearr_11379[(8)] = inst_11327);

(statearr_11379[(12)] = inst_11347);

return statearr_11379;
})();
var statearr_11380_11410 = state_11367__$1;
(statearr_11380_11410[(2)] = null);

(statearr_11380_11410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11368 === (9))){
var inst_11327 = (state_11367[(8)]);
var inst_11343 = cljs.core.vec.call(null,inst_11327);
var state_11367__$1 = state_11367;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11367__$1,(11),out,inst_11343);
} else {
if((state_val_11368 === (5))){
var inst_11328 = (state_11367[(7)]);
var inst_11331 = (state_11367[(9)]);
var inst_11335 = (state_11367[(10)]);
var inst_11335__$1 = f.call(null,inst_11331);
var inst_11336 = cljs.core._EQ_.call(null,inst_11335__$1,inst_11328);
var inst_11337 = cljs.core.keyword_identical_QMARK_.call(null,inst_11328,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_11338 = (inst_11336) || (inst_11337);
var state_11367__$1 = (function (){var statearr_11381 = state_11367;
(statearr_11381[(10)] = inst_11335__$1);

return statearr_11381;
})();
if(cljs.core.truth_(inst_11338)){
var statearr_11382_11411 = state_11367__$1;
(statearr_11382_11411[(1)] = (8));

} else {
var statearr_11383_11412 = state_11367__$1;
(statearr_11383_11412[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11368 === (14))){
var inst_11360 = (state_11367[(2)]);
var inst_11361 = cljs.core.async.close_BANG_.call(null,out);
var state_11367__$1 = (function (){var statearr_11385 = state_11367;
(statearr_11385[(13)] = inst_11360);

return statearr_11385;
})();
var statearr_11386_11413 = state_11367__$1;
(statearr_11386_11413[(2)] = inst_11361);

(statearr_11386_11413[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11368 === (10))){
var inst_11350 = (state_11367[(2)]);
var state_11367__$1 = state_11367;
var statearr_11387_11414 = state_11367__$1;
(statearr_11387_11414[(2)] = inst_11350);

(statearr_11387_11414[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11368 === (8))){
var inst_11331 = (state_11367[(9)]);
var inst_11335 = (state_11367[(10)]);
var inst_11327 = (state_11367[(8)]);
var inst_11340 = inst_11327.push(inst_11331);
var tmp11384 = inst_11327;
var inst_11327__$1 = tmp11384;
var inst_11328 = inst_11335;
var state_11367__$1 = (function (){var statearr_11388 = state_11367;
(statearr_11388[(7)] = inst_11328);

(statearr_11388[(14)] = inst_11340);

(statearr_11388[(8)] = inst_11327__$1);

return statearr_11388;
})();
var statearr_11389_11415 = state_11367__$1;
(statearr_11389_11415[(2)] = null);

(statearr_11389_11415[(1)] = (2));


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
});})(c__8646__auto___11401,out))
;
return ((function (switch__8534__auto__,c__8646__auto___11401,out){
return (function() {
var cljs$core$async$state_machine__8535__auto__ = null;
var cljs$core$async$state_machine__8535__auto____0 = (function (){
var statearr_11393 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11393[(0)] = cljs$core$async$state_machine__8535__auto__);

(statearr_11393[(1)] = (1));

return statearr_11393;
});
var cljs$core$async$state_machine__8535__auto____1 = (function (state_11367){
while(true){
var ret_value__8536__auto__ = (function (){try{while(true){
var result__8537__auto__ = switch__8534__auto__.call(null,state_11367);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8537__auto__;
}
break;
}
}catch (e11394){if((e11394 instanceof Object)){
var ex__8538__auto__ = e11394;
var statearr_11395_11416 = state_11367;
(statearr_11395_11416[(5)] = ex__8538__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11367);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11394;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11417 = state_11367;
state_11367 = G__11417;
continue;
} else {
return ret_value__8536__auto__;
}
break;
}
});
cljs$core$async$state_machine__8535__auto__ = function(state_11367){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8535__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8535__auto____1.call(this,state_11367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8535__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8535__auto____0;
cljs$core$async$state_machine__8535__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8535__auto____1;
return cljs$core$async$state_machine__8535__auto__;
})()
;})(switch__8534__auto__,c__8646__auto___11401,out))
})();
var state__8648__auto__ = (function (){var statearr_11396 = f__8647__auto__.call(null);
(statearr_11396[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8646__auto___11401);

return statearr_11396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8648__auto__);
});})(c__8646__auto___11401,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map