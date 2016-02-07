// Compiled by ClojureScript 1.7.228 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11455__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11455 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11456__i = 0, G__11456__a = new Array(arguments.length -  0);
while (G__11456__i < G__11456__a.length) {G__11456__a[G__11456__i] = arguments[G__11456__i + 0]; ++G__11456__i;}
  args = new cljs.core.IndexedSeq(G__11456__a,0);
} 
return G__11455__delegate.call(this,args);};
G__11455.cljs$lang$maxFixedArity = 0;
G__11455.cljs$lang$applyTo = (function (arglist__11457){
var args = cljs.core.seq(arglist__11457);
return G__11455__delegate(args);
});
G__11455.cljs$core$IFn$_invoke$arity$variadic = G__11455__delegate;
return G__11455;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11458__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11458 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11459__i = 0, G__11459__a = new Array(arguments.length -  0);
while (G__11459__i < G__11459__a.length) {G__11459__a[G__11459__i] = arguments[G__11459__i + 0]; ++G__11459__i;}
  args = new cljs.core.IndexedSeq(G__11459__a,0);
} 
return G__11458__delegate.call(this,args);};
G__11458.cljs$lang$maxFixedArity = 0;
G__11458.cljs$lang$applyTo = (function (arglist__11460){
var args = cljs.core.seq(arglist__11460);
return G__11458__delegate(args);
});
G__11458.cljs$core$IFn$_invoke$arity$variadic = G__11458__delegate;
return G__11458;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map