goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8617__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8617 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8618__i = 0, G__8618__a = new Array(arguments.length -  0);
while (G__8618__i < G__8618__a.length) {G__8618__a[G__8618__i] = arguments[G__8618__i + 0]; ++G__8618__i;}
  args = new cljs.core.IndexedSeq(G__8618__a,0);
} 
return G__8617__delegate.call(this,args);};
G__8617.cljs$lang$maxFixedArity = 0;
G__8617.cljs$lang$applyTo = (function (arglist__8619){
var args = cljs.core.seq(arglist__8619);
return G__8617__delegate(args);
});
G__8617.cljs$core$IFn$_invoke$arity$variadic = G__8617__delegate;
return G__8617;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8620__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8620 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8621__i = 0, G__8621__a = new Array(arguments.length -  0);
while (G__8621__i < G__8621__a.length) {G__8621__a[G__8621__i] = arguments[G__8621__i + 0]; ++G__8621__i;}
  args = new cljs.core.IndexedSeq(G__8621__a,0);
} 
return G__8620__delegate.call(this,args);};
G__8620.cljs$lang$maxFixedArity = 0;
G__8620.cljs$lang$applyTo = (function (arglist__8622){
var args = cljs.core.seq(arglist__8622);
return G__8620__delegate(args);
});
G__8620.cljs$core$IFn$_invoke$arity$variadic = G__8620__delegate;
return G__8620;
})()
;

return null;
});
