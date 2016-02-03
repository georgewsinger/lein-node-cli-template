// Compiled by ClojureScript 1.7.228 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11420__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11420 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11421__i = 0, G__11421__a = new Array(arguments.length -  0);
while (G__11421__i < G__11421__a.length) {G__11421__a[G__11421__i] = arguments[G__11421__i + 0]; ++G__11421__i;}
  args = new cljs.core.IndexedSeq(G__11421__a,0);
} 
return G__11420__delegate.call(this,args);};
G__11420.cljs$lang$maxFixedArity = 0;
G__11420.cljs$lang$applyTo = (function (arglist__11422){
var args = cljs.core.seq(arglist__11422);
return G__11420__delegate(args);
});
G__11420.cljs$core$IFn$_invoke$arity$variadic = G__11420__delegate;
return G__11420;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11423__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11423 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11424__i = 0, G__11424__a = new Array(arguments.length -  0);
while (G__11424__i < G__11424__a.length) {G__11424__a[G__11424__i] = arguments[G__11424__i + 0]; ++G__11424__i;}
  args = new cljs.core.IndexedSeq(G__11424__a,0);
} 
return G__11423__delegate.call(this,args);};
G__11423.cljs$lang$maxFixedArity = 0;
G__11423.cljs$lang$applyTo = (function (arglist__11425){
var args = cljs.core.seq(arglist__11425);
return G__11423__delegate(args);
});
G__11423.cljs$core$IFn$_invoke$arity$variadic = G__11423__delegate;
return G__11423;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map