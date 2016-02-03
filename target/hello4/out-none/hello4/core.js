// Compiled by ClojureScript 1.7.228 {:target :nodejs}
goog.provide('hello4.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('cljs.core.async');
goog.require('cljs_callback_heaven.core');
cljs.nodejs.enable_util_print_BANG_.call(null);
hello4.core._main = (function hello4$core$_main(var_args){
var args__7221__auto__ = [];
var len__7214__auto___8608 = arguments.length;
var i__7215__auto___8609 = (0);
while(true){
if((i__7215__auto___8609 < len__7214__auto___8608)){
args__7221__auto__.push((arguments[i__7215__auto___8609]));

var G__8610 = (i__7215__auto___8609 + (1));
i__7215__auto___8609 = G__8610;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((0) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((0)),(0))):null);
return hello4.core._main.cljs$core$IFn$_invoke$arity$variadic(argseq__7222__auto__);
});

hello4.core._main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var minimist = cljs.nodejs.require.call(null,"minimist");
var argv = minimist.call(null,cljs.core.clj__GT_js.call(null,cljs.core.vec.call(null,args)));
var e = (function (){var or__6156__auto__ = argv.e;
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return "e option";
}
})();
var arg = (function (){var or__6156__auto__ = ((argv["_"])[(0)]);
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return "default_arg";
}
})();
cljs_callback_heaven.core._LT_print.call(null,(function (){var c__8504__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8504__auto__,minimist,argv,e,arg){
return (function (){
var f__8505__auto__ = (function (){var switch__8483__auto__ = ((function (c__8504__auto__,minimist,argv,e,arg){
return (function (state_8581){
var state_val_8582 = (state_8581[(1)]);
if((state_val_8582 === (1))){
var state_8581__$1 = state_8581;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8581__$1,(5));
} else {
return null;
}
});})(c__8504__auto__,minimist,argv,e,arg))
;
return ((function (switch__8483__auto__,c__8504__auto__,minimist,argv,e,arg){
return (function() {
var hello4$core$state_machine__8484__auto__ = null;
var hello4$core$state_machine__8484__auto____0 = (function (){
var statearr_8586 = [null,null,null,null,null,null,null];
(statearr_8586[(0)] = hello4$core$state_machine__8484__auto__);

(statearr_8586[(1)] = (1));

return statearr_8586;
});
var hello4$core$state_machine__8484__auto____1 = (function (state_8581){
while(true){
var ret_value__8485__auto__ = (function (){try{while(true){
var result__8486__auto__ = switch__8483__auto__.call(null,state_8581);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8486__auto__;
}
break;
}
}catch (e8587){if((e8587 instanceof Object)){
var ex__8487__auto__ = e8587;
var statearr_8588_8611 = state_8581;
(statearr_8588_8611[(5)] = ex__8487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8581);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8587;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8612 = state_8581;
state_8581 = G__8612;
continue;
} else {
return ret_value__8485__auto__;
}
break;
}
});
hello4$core$state_machine__8484__auto__ = function(state_8581){
switch(arguments.length){
case 0:
return hello4$core$state_machine__8484__auto____0.call(this);
case 1:
return hello4$core$state_machine__8484__auto____1.call(this,state_8581);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hello4$core$state_machine__8484__auto__.cljs$core$IFn$_invoke$arity$0 = hello4$core$state_machine__8484__auto____0;
hello4$core$state_machine__8484__auto__.cljs$core$IFn$_invoke$arity$1 = hello4$core$state_machine__8484__auto____1;
return hello4$core$state_machine__8484__auto__;
})()
;})(switch__8483__auto__,c__8504__auto__,minimist,argv,e,arg))
})();
var state__8506__auto__ = (function (){var statearr_8589 = f__8505__auto__.call(null);
(statearr_8589[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8504__auto__);

return statearr_8589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8506__auto__);
});})(c__8504__auto__,minimist,argv,e,arg))
);

return c__8504__auto__;
})());

return cljs_callback_heaven.core._LT_print.call(null,(function (){var c__8504__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8504__auto__,minimist,argv,e,arg){
return (function (){
var f__8505__auto__ = (function (){var switch__8483__auto__ = ((function (c__8504__auto__,minimist,argv,e,arg){
return (function (state_8598){
var state_val_8599 = (state_8598[(1)]);
if((state_val_8599 === (1))){
var inst_8591 = cljs.core.async.chan.call(null,(1));
var inst_8592 = cljs.nodejs.require.call(null,"fs");
var inst_8593 = cljs_callback_heaven.core._GT_2.call(null,inst_8591);
var inst_8594 = inst_8592.readFile("/home/george/1","utf8",inst_8593);
var state_8598__$1 = (function (){var statearr_8600 = state_8598;
(statearr_8600[(7)] = inst_8594);

return statearr_8600;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8598__$1,(2),inst_8591);
} else {
if((state_val_8599 === (2))){
var inst_8596 = (state_8598[(2)]);
var state_8598__$1 = state_8598;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8598__$1,inst_8596);
} else {
return null;
}
}
});})(c__8504__auto__,minimist,argv,e,arg))
;
return ((function (switch__8483__auto__,c__8504__auto__,minimist,argv,e,arg){
return (function() {
var hello4$core$state_machine__8484__auto__ = null;
var hello4$core$state_machine__8484__auto____0 = (function (){
var statearr_8604 = [null,null,null,null,null,null,null,null];
(statearr_8604[(0)] = hello4$core$state_machine__8484__auto__);

(statearr_8604[(1)] = (1));

return statearr_8604;
});
var hello4$core$state_machine__8484__auto____1 = (function (state_8598){
while(true){
var ret_value__8485__auto__ = (function (){try{while(true){
var result__8486__auto__ = switch__8483__auto__.call(null,state_8598);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8486__auto__;
}
break;
}
}catch (e8605){if((e8605 instanceof Object)){
var ex__8487__auto__ = e8605;
var statearr_8606_8613 = state_8598;
(statearr_8606_8613[(5)] = ex__8487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8598);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8605;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8614 = state_8598;
state_8598 = G__8614;
continue;
} else {
return ret_value__8485__auto__;
}
break;
}
});
hello4$core$state_machine__8484__auto__ = function(state_8598){
switch(arguments.length){
case 0:
return hello4$core$state_machine__8484__auto____0.call(this);
case 1:
return hello4$core$state_machine__8484__auto____1.call(this,state_8598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hello4$core$state_machine__8484__auto__.cljs$core$IFn$_invoke$arity$0 = hello4$core$state_machine__8484__auto____0;
hello4$core$state_machine__8484__auto__.cljs$core$IFn$_invoke$arity$1 = hello4$core$state_machine__8484__auto____1;
return hello4$core$state_machine__8484__auto__;
})()
;})(switch__8483__auto__,c__8504__auto__,minimist,argv,e,arg))
})();
var state__8506__auto__ = (function (){var statearr_8607 = f__8505__auto__.call(null);
(statearr_8607[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8504__auto__);

return statearr_8607;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8506__auto__);
});})(c__8504__auto__,minimist,argv,e,arg))
);

return c__8504__auto__;
})());
});

hello4.core._main.cljs$lang$maxFixedArity = (0);

hello4.core._main.cljs$lang$applyTo = (function (seq8579){
return hello4.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8579));
});
cljs.core._STAR_main_cli_fn_STAR_ = hello4.core._main;

//# sourceMappingURL=core.js.map