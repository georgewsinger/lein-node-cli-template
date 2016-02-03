goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9029__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9029 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9030__i = 0, G__9030__a = new Array(arguments.length -  0);
while (G__9030__i < G__9030__a.length) {G__9030__a[G__9030__i] = arguments[G__9030__i + 0]; ++G__9030__i;}
  args = new cljs.core.IndexedSeq(G__9030__a,0);
} 
return G__9029__delegate.call(this,args);};
G__9029.cljs$lang$maxFixedArity = 0;
G__9029.cljs$lang$applyTo = (function (arglist__9031){
var args = cljs.core.seq(arglist__9031);
return G__9029__delegate(args);
});
G__9029.cljs$core$IFn$_invoke$arity$variadic = G__9029__delegate;
return G__9029;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9032__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9032 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9033__i = 0, G__9033__a = new Array(arguments.length -  0);
while (G__9033__i < G__9033__a.length) {G__9033__a[G__9033__i] = arguments[G__9033__i + 0]; ++G__9033__i;}
  args = new cljs.core.IndexedSeq(G__9033__a,0);
} 
return G__9032__delegate.call(this,args);};
G__9032.cljs$lang$maxFixedArity = 0;
G__9032.cljs$lang$applyTo = (function (arglist__9034){
var args = cljs.core.seq(arglist__9034);
return G__9032__delegate(args);
});
G__9032.cljs$core$IFn$_invoke$arity$variadic = G__9032__delegate;
return G__9032;
})()
;

return null;
});
