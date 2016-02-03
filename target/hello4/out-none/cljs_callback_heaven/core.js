// Compiled by ClojureScript 1.7.228 {:target :nodejs}
goog.provide('cljs_callback_heaven.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('cljs.core.async');
cljs.nodejs.enable_util_print_BANG_.call(null);
cljs_callback_heaven.core._LT_print = (function cljs_callback_heaven$core$_LT_print(c){
var c__8534__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8534__auto__){
return (function (){
var f__8535__auto__ = (function (){var switch__8513__auto__ = ((function (c__8534__auto__){
return (function (state_8596){
var state_val_8597 = (state_8596[(1)]);
if((state_val_8597 === (1))){
var state_8596__$1 = state_8596;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8596__$1,(2),c);
} else {
if((state_val_8597 === (2))){
var inst_8593 = (state_8596[(2)]);
var inst_8594 = cljs.core.println.call(null,inst_8593);
var state_8596__$1 = state_8596;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8596__$1,inst_8594);
} else {
return null;
}
}
});})(c__8534__auto__))
;
return ((function (switch__8513__auto__,c__8534__auto__){
return (function() {
var cljs_callback_heaven$core$_LT_print_$_state_machine__8514__auto__ = null;
var cljs_callback_heaven$core$_LT_print_$_state_machine__8514__auto____0 = (function (){
var statearr_8601 = [null,null,null,null,null,null,null];
(statearr_8601[(0)] = cljs_callback_heaven$core$_LT_print_$_state_machine__8514__auto__);

(statearr_8601[(1)] = (1));

return statearr_8601;
});
var cljs_callback_heaven$core$_LT_print_$_state_machine__8514__auto____1 = (function (state_8596){
while(true){
var ret_value__8515__auto__ = (function (){try{while(true){
var result__8516__auto__ = switch__8513__auto__.call(null,state_8596);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8516__auto__;
}
break;
}
}catch (e8602){if((e8602 instanceof Object)){
var ex__8517__auto__ = e8602;
var statearr_8603_8605 = state_8596;
(statearr_8603_8605[(5)] = ex__8517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8596);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8602;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8606 = state_8596;
state_8596 = G__8606;
continue;
} else {
return ret_value__8515__auto__;
}
break;
}
});
cljs_callback_heaven$core$_LT_print_$_state_machine__8514__auto__ = function(state_8596){
switch(arguments.length){
case 0:
return cljs_callback_heaven$core$_LT_print_$_state_machine__8514__auto____0.call(this);
case 1:
return cljs_callback_heaven$core$_LT_print_$_state_machine__8514__auto____1.call(this,state_8596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_callback_heaven$core$_LT_print_$_state_machine__8514__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_callback_heaven$core$_LT_print_$_state_machine__8514__auto____0;
cljs_callback_heaven$core$_LT_print_$_state_machine__8514__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_callback_heaven$core$_LT_print_$_state_machine__8514__auto____1;
return cljs_callback_heaven$core$_LT_print_$_state_machine__8514__auto__;
})()
;})(switch__8513__auto__,c__8534__auto__))
})();
var state__8536__auto__ = (function (){var statearr_8604 = f__8535__auto__.call(null);
(statearr_8604[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8534__auto__);

return statearr_8604;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8536__auto__);
});})(c__8534__auto__))
);

return c__8534__auto__;
});
/**
 * Since channels cannot contain nil, this function converts nil values to false.
 */
cljs_callback_heaven.core.chan_sanitized = (function cljs_callback_heaven$core$chan_sanitized(val){
if(cljs.core._EQ_.call(null,val,null)){
return false;
} else {
return val;
}
});
/**
 * If at all possible, jams the 1st callback argument into the input channel.
 */
cljs_callback_heaven.core._GT_1 = (function cljs_callback_heaven$core$_GT_1(var_args){
var args8607 = [];
var len__7214__auto___8646 = arguments.length;
var i__7215__auto___8647 = (0);
while(true){
if((i__7215__auto___8647 < len__7214__auto___8646)){
args8607.push((arguments[i__7215__auto___8647]));

var G__8648 = (i__7215__auto___8647 + (1));
i__7215__auto___8647 = G__8648;
continue;
} else {
}
break;
}

var G__8609 = args8607.length;
switch (G__8609) {
case 1:
return cljs_callback_heaven.core._GT_1.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_callback_heaven.core._GT_1.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8607.length)].join('')));

}
});

cljs_callback_heaven.core._GT_1.cljs$core$IFn$_invoke$arity$1 = (function (c){
return (function (arg1){
var c__8534__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8534__auto__){
return (function (){
var f__8535__auto__ = (function (){var switch__8513__auto__ = ((function (c__8534__auto__){
return (function (state_8614){
var state_val_8615 = (state_8614[(1)]);
if((state_val_8615 === (1))){
var inst_8610 = cljs_callback_heaven.core.chan_sanitized.call(null,arg1);
var state_8614__$1 = state_8614;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8614__$1,(2),c,inst_8610);
} else {
if((state_val_8615 === (2))){
var inst_8612 = (state_8614[(2)]);
var state_8614__$1 = state_8614;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8614__$1,inst_8612);
} else {
return null;
}
}
});})(c__8534__auto__))
;
return ((function (switch__8513__auto__,c__8534__auto__){
return (function() {
var cljs_callback_heaven$core$state_machine__8514__auto__ = null;
var cljs_callback_heaven$core$state_machine__8514__auto____0 = (function (){
var statearr_8619 = [null,null,null,null,null,null,null];
(statearr_8619[(0)] = cljs_callback_heaven$core$state_machine__8514__auto__);

(statearr_8619[(1)] = (1));

return statearr_8619;
});
var cljs_callback_heaven$core$state_machine__8514__auto____1 = (function (state_8614){
while(true){
var ret_value__8515__auto__ = (function (){try{while(true){
var result__8516__auto__ = switch__8513__auto__.call(null,state_8614);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8516__auto__;
}
break;
}
}catch (e8620){if((e8620 instanceof Object)){
var ex__8517__auto__ = e8620;
var statearr_8621_8650 = state_8614;
(statearr_8621_8650[(5)] = ex__8517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8614);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8620;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8651 = state_8614;
state_8614 = G__8651;
continue;
} else {
return ret_value__8515__auto__;
}
break;
}
});
cljs_callback_heaven$core$state_machine__8514__auto__ = function(state_8614){
switch(arguments.length){
case 0:
return cljs_callback_heaven$core$state_machine__8514__auto____0.call(this);
case 1:
return cljs_callback_heaven$core$state_machine__8514__auto____1.call(this,state_8614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_callback_heaven$core$state_machine__8514__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_callback_heaven$core$state_machine__8514__auto____0;
cljs_callback_heaven$core$state_machine__8514__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_callback_heaven$core$state_machine__8514__auto____1;
return cljs_callback_heaven$core$state_machine__8514__auto__;
})()
;})(switch__8513__auto__,c__8534__auto__))
})();
var state__8536__auto__ = (function (){var statearr_8622 = f__8535__auto__.call(null);
(statearr_8622[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8534__auto__);

return statearr_8622;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8536__auto__);
});})(c__8534__auto__))
);

return c__8534__auto__;
});
});

cljs_callback_heaven.core._GT_1.cljs$core$IFn$_invoke$arity$2 = (function (c,E_msg){
return (function (arg1){
var c__8534__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8534__auto__){
return (function (){
var f__8535__auto__ = (function (){var switch__8513__auto__ = ((function (c__8534__auto__){
return (function (state_8633){
var state_val_8634 = (state_8633[(1)]);
if((state_val_8634 === (1))){
var state_8633__$1 = state_8633;
if(cljs.core.truth_(arg1)){
var statearr_8635_8652 = state_8633__$1;
(statearr_8635_8652[(1)] = (2));

} else {
var statearr_8636_8653 = state_8633__$1;
(statearr_8636_8653[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8634 === (2))){
var inst_8624 = cljs_callback_heaven.core.chan_sanitized.call(null,arg1);
var state_8633__$1 = state_8633;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8633__$1,(5),c,inst_8624);
} else {
if((state_val_8634 === (3))){
var state_8633__$1 = state_8633;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8633__$1,(6),c,E_msg);
} else {
if((state_val_8634 === (4))){
var inst_8631 = (state_8633[(2)]);
var state_8633__$1 = state_8633;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8633__$1,inst_8631);
} else {
if((state_val_8634 === (5))){
var inst_8626 = (state_8633[(2)]);
var state_8633__$1 = state_8633;
var statearr_8637_8654 = state_8633__$1;
(statearr_8637_8654[(2)] = inst_8626);

(statearr_8637_8654[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8634 === (6))){
var inst_8629 = (state_8633[(2)]);
var state_8633__$1 = state_8633;
var statearr_8638_8655 = state_8633__$1;
(statearr_8638_8655[(2)] = inst_8629);

(statearr_8638_8655[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});})(c__8534__auto__))
;
return ((function (switch__8513__auto__,c__8534__auto__){
return (function() {
var cljs_callback_heaven$core$state_machine__8514__auto__ = null;
var cljs_callback_heaven$core$state_machine__8514__auto____0 = (function (){
var statearr_8642 = [null,null,null,null,null,null,null];
(statearr_8642[(0)] = cljs_callback_heaven$core$state_machine__8514__auto__);

(statearr_8642[(1)] = (1));

return statearr_8642;
});
var cljs_callback_heaven$core$state_machine__8514__auto____1 = (function (state_8633){
while(true){
var ret_value__8515__auto__ = (function (){try{while(true){
var result__8516__auto__ = switch__8513__auto__.call(null,state_8633);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8516__auto__;
}
break;
}
}catch (e8643){if((e8643 instanceof Object)){
var ex__8517__auto__ = e8643;
var statearr_8644_8656 = state_8633;
(statearr_8644_8656[(5)] = ex__8517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8633);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8643;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8657 = state_8633;
state_8633 = G__8657;
continue;
} else {
return ret_value__8515__auto__;
}
break;
}
});
cljs_callback_heaven$core$state_machine__8514__auto__ = function(state_8633){
switch(arguments.length){
case 0:
return cljs_callback_heaven$core$state_machine__8514__auto____0.call(this);
case 1:
return cljs_callback_heaven$core$state_machine__8514__auto____1.call(this,state_8633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_callback_heaven$core$state_machine__8514__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_callback_heaven$core$state_machine__8514__auto____0;
cljs_callback_heaven$core$state_machine__8514__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_callback_heaven$core$state_machine__8514__auto____1;
return cljs_callback_heaven$core$state_machine__8514__auto__;
})()
;})(switch__8513__auto__,c__8534__auto__))
})();
var state__8536__auto__ = (function (){var statearr_8645 = f__8535__auto__.call(null);
(statearr_8645[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8534__auto__);

return statearr_8645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8536__auto__);
});})(c__8534__auto__))
);

return c__8534__auto__;
});
});

cljs_callback_heaven.core._GT_1.cljs$lang$maxFixedArity = 2;
/**
 * If at all possible, jams the 2nd callback argument into the input channel.
 */
cljs_callback_heaven.core._GT_2 = (function cljs_callback_heaven$core$_GT_2(var_args){
var args8658 = [];
var len__7214__auto___8725 = arguments.length;
var i__7215__auto___8726 = (0);
while(true){
if((i__7215__auto___8726 < len__7214__auto___8725)){
args8658.push((arguments[i__7215__auto___8726]));

var G__8727 = (i__7215__auto___8726 + (1));
i__7215__auto___8726 = G__8727;
continue;
} else {
}
break;
}

var G__8660 = args8658.length;
switch (G__8660) {
case 1:
return cljs_callback_heaven.core._GT_2.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_callback_heaven.core._GT_2.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8658.length)].join('')));

}
});

cljs_callback_heaven.core._GT_2.cljs$core$IFn$_invoke$arity$1 = (function (c){
return (function (err,res){
var c__8534__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8534__auto__){
return (function (){
var f__8535__auto__ = (function (){var switch__8513__auto__ = ((function (c__8534__auto__){
return (function (state_8676){
var state_val_8677 = (state_8676[(1)]);
if((state_val_8677 === (1))){
var state_8676__$1 = state_8676;
if(cljs.core.truth_(res)){
var statearr_8678_8729 = state_8676__$1;
(statearr_8678_8729[(1)] = (2));

} else {
var statearr_8679_8730 = state_8676__$1;
(statearr_8679_8730[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8677 === (2))){
var inst_8662 = cljs_callback_heaven.core.chan_sanitized.call(null,res);
var state_8676__$1 = state_8676;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8676__$1,(5),c,inst_8662);
} else {
if((state_val_8677 === (3))){
var state_8676__$1 = state_8676;
var statearr_8680_8731 = state_8676__$1;
(statearr_8680_8731[(1)] = (6));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8677 === (4))){
var inst_8674 = (state_8676[(2)]);
var state_8676__$1 = state_8676;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8676__$1,inst_8674);
} else {
if((state_val_8677 === (5))){
var inst_8664 = (state_8676[(2)]);
var state_8676__$1 = state_8676;
var statearr_8682_8732 = state_8676__$1;
(statearr_8682_8732[(2)] = inst_8664);

(statearr_8682_8732[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8677 === (6))){
var inst_8667 = cljs_callback_heaven.core.chan_sanitized.call(null,err);
var state_8676__$1 = state_8676;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8676__$1,(9),c,inst_8667);
} else {
if((state_val_8677 === (7))){
var state_8676__$1 = state_8676;
var statearr_8683_8733 = state_8676__$1;
(statearr_8683_8733[(2)] = null);

(statearr_8683_8733[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8677 === (8))){
var inst_8672 = (state_8676[(2)]);
var state_8676__$1 = state_8676;
var statearr_8684_8734 = state_8676__$1;
(statearr_8684_8734[(2)] = inst_8672);

(statearr_8684_8734[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8677 === (9))){
var inst_8669 = (state_8676[(2)]);
var state_8676__$1 = state_8676;
var statearr_8685_8735 = state_8676__$1;
(statearr_8685_8735[(2)] = inst_8669);

(statearr_8685_8735[(1)] = (8));


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
});})(c__8534__auto__))
;
return ((function (switch__8513__auto__,c__8534__auto__){
return (function() {
var cljs_callback_heaven$core$state_machine__8514__auto__ = null;
var cljs_callback_heaven$core$state_machine__8514__auto____0 = (function (){
var statearr_8689 = [null,null,null,null,null,null,null];
(statearr_8689[(0)] = cljs_callback_heaven$core$state_machine__8514__auto__);

(statearr_8689[(1)] = (1));

return statearr_8689;
});
var cljs_callback_heaven$core$state_machine__8514__auto____1 = (function (state_8676){
while(true){
var ret_value__8515__auto__ = (function (){try{while(true){
var result__8516__auto__ = switch__8513__auto__.call(null,state_8676);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8516__auto__;
}
break;
}
}catch (e8690){if((e8690 instanceof Object)){
var ex__8517__auto__ = e8690;
var statearr_8691_8736 = state_8676;
(statearr_8691_8736[(5)] = ex__8517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8676);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8690;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8737 = state_8676;
state_8676 = G__8737;
continue;
} else {
return ret_value__8515__auto__;
}
break;
}
});
cljs_callback_heaven$core$state_machine__8514__auto__ = function(state_8676){
switch(arguments.length){
case 0:
return cljs_callback_heaven$core$state_machine__8514__auto____0.call(this);
case 1:
return cljs_callback_heaven$core$state_machine__8514__auto____1.call(this,state_8676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_callback_heaven$core$state_machine__8514__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_callback_heaven$core$state_machine__8514__auto____0;
cljs_callback_heaven$core$state_machine__8514__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_callback_heaven$core$state_machine__8514__auto____1;
return cljs_callback_heaven$core$state_machine__8514__auto__;
})()
;})(switch__8513__auto__,c__8534__auto__))
})();
var state__8536__auto__ = (function (){var statearr_8692 = f__8535__auto__.call(null);
(statearr_8692[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8534__auto__);

return statearr_8692;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8536__auto__);
});})(c__8534__auto__))
);

return c__8534__auto__;
});
});

cljs_callback_heaven.core._GT_2.cljs$core$IFn$_invoke$arity$2 = (function (c,E_msg){
return (function (err,res){
var c__8534__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8534__auto__){
return (function (){
var f__8535__auto__ = (function (){var switch__8513__auto__ = ((function (c__8534__auto__){
return (function (state_8708){
var state_val_8709 = (state_8708[(1)]);
if((state_val_8709 === (1))){
var state_8708__$1 = state_8708;
if(cljs.core.truth_(res)){
var statearr_8710_8738 = state_8708__$1;
(statearr_8710_8738[(1)] = (2));

} else {
var statearr_8711_8739 = state_8708__$1;
(statearr_8711_8739[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8709 === (2))){
var inst_8694 = cljs_callback_heaven.core.chan_sanitized.call(null,res);
var state_8708__$1 = state_8708;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8708__$1,(5),c,inst_8694);
} else {
if((state_val_8709 === (3))){
var state_8708__$1 = state_8708;
var statearr_8712_8740 = state_8708__$1;
(statearr_8712_8740[(1)] = (6));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8709 === (4))){
var inst_8706 = (state_8708[(2)]);
var state_8708__$1 = state_8708;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8708__$1,inst_8706);
} else {
if((state_val_8709 === (5))){
var inst_8696 = (state_8708[(2)]);
var state_8708__$1 = state_8708;
var statearr_8714_8741 = state_8708__$1;
(statearr_8714_8741[(2)] = inst_8696);

(statearr_8714_8741[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8709 === (6))){
var inst_8699 = cljs_callback_heaven.core.chan_sanitized.call(null,E_msg);
var state_8708__$1 = state_8708;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8708__$1,(9),c,inst_8699);
} else {
if((state_val_8709 === (7))){
var state_8708__$1 = state_8708;
var statearr_8715_8742 = state_8708__$1;
(statearr_8715_8742[(2)] = null);

(statearr_8715_8742[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8709 === (8))){
var inst_8704 = (state_8708[(2)]);
var state_8708__$1 = state_8708;
var statearr_8716_8743 = state_8708__$1;
(statearr_8716_8743[(2)] = inst_8704);

(statearr_8716_8743[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8709 === (9))){
var inst_8701 = (state_8708[(2)]);
var state_8708__$1 = state_8708;
var statearr_8717_8744 = state_8708__$1;
(statearr_8717_8744[(2)] = inst_8701);

(statearr_8717_8744[(1)] = (8));


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
});})(c__8534__auto__))
;
return ((function (switch__8513__auto__,c__8534__auto__){
return (function() {
var cljs_callback_heaven$core$state_machine__8514__auto__ = null;
var cljs_callback_heaven$core$state_machine__8514__auto____0 = (function (){
var statearr_8721 = [null,null,null,null,null,null,null];
(statearr_8721[(0)] = cljs_callback_heaven$core$state_machine__8514__auto__);

(statearr_8721[(1)] = (1));

return statearr_8721;
});
var cljs_callback_heaven$core$state_machine__8514__auto____1 = (function (state_8708){
while(true){
var ret_value__8515__auto__ = (function (){try{while(true){
var result__8516__auto__ = switch__8513__auto__.call(null,state_8708);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8516__auto__;
}
break;
}
}catch (e8722){if((e8722 instanceof Object)){
var ex__8517__auto__ = e8722;
var statearr_8723_8745 = state_8708;
(statearr_8723_8745[(5)] = ex__8517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8708);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8722;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8746 = state_8708;
state_8708 = G__8746;
continue;
} else {
return ret_value__8515__auto__;
}
break;
}
});
cljs_callback_heaven$core$state_machine__8514__auto__ = function(state_8708){
switch(arguments.length){
case 0:
return cljs_callback_heaven$core$state_machine__8514__auto____0.call(this);
case 1:
return cljs_callback_heaven$core$state_machine__8514__auto____1.call(this,state_8708);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_callback_heaven$core$state_machine__8514__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_callback_heaven$core$state_machine__8514__auto____0;
cljs_callback_heaven$core$state_machine__8514__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_callback_heaven$core$state_machine__8514__auto____1;
return cljs_callback_heaven$core$state_machine__8514__auto__;
})()
;})(switch__8513__auto__,c__8534__auto__))
})();
var state__8536__auto__ = (function (){var statearr_8724 = f__8535__auto__.call(null);
(statearr_8724[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8534__auto__);

return statearr_8724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8536__auto__);
});})(c__8534__auto__))
);

return c__8534__auto__;
});
});

cljs_callback_heaven.core._GT_2.cljs$lang$maxFixedArity = 2;
/**
 * If at all possible, jams the 3rd callback argument into the input channel.
 */
cljs_callback_heaven.core._GT_3 = (function cljs_callback_heaven$core$_GT_3(var_args){
var args8747 = [];
var len__7214__auto___8836 = arguments.length;
var i__7215__auto___8837 = (0);
while(true){
if((i__7215__auto___8837 < len__7214__auto___8836)){
args8747.push((arguments[i__7215__auto___8837]));

var G__8838 = (i__7215__auto___8837 + (1));
i__7215__auto___8837 = G__8838;
continue;
} else {
}
break;
}

var G__8749 = args8747.length;
switch (G__8749) {
case 1:
return cljs_callback_heaven.core._GT_3.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_callback_heaven.core._GT_3.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8747.length)].join('')));

}
});

cljs_callback_heaven.core._GT_3.cljs$core$IFn$_invoke$arity$1 = (function (c){
return (function (err1,err2,res){
var c__8534__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8534__auto__){
return (function (){
var f__8535__auto__ = (function (){var switch__8513__auto__ = ((function (c__8534__auto__){
return (function (state_8772){
var state_val_8773 = (state_8772[(1)]);
if((state_val_8773 === (7))){
var state_8772__$1 = state_8772;
var statearr_8774_8840 = state_8772__$1;
(statearr_8774_8840[(1)] = (10));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8773 === (1))){
var state_8772__$1 = state_8772;
if(cljs.core.truth_(res)){
var statearr_8776_8841 = state_8772__$1;
(statearr_8776_8841[(1)] = (2));

} else {
var statearr_8777_8842 = state_8772__$1;
(statearr_8777_8842[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8773 === (4))){
var inst_8770 = (state_8772[(2)]);
var state_8772__$1 = state_8772;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8772__$1,inst_8770);
} else {
if((state_val_8773 === (13))){
var inst_8763 = (state_8772[(2)]);
var state_8772__$1 = state_8772;
var statearr_8778_8843 = state_8772__$1;
(statearr_8778_8843[(2)] = inst_8763);

(statearr_8778_8843[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8773 === (6))){
var inst_8756 = cljs_callback_heaven.core.chan_sanitized.call(null,err1);
var state_8772__$1 = state_8772;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8772__$1,(9),c,inst_8756);
} else {
if((state_val_8773 === (3))){
var state_8772__$1 = state_8772;
if(cljs.core.truth_(err1)){
var statearr_8779_8844 = state_8772__$1;
(statearr_8779_8844[(1)] = (6));

} else {
var statearr_8780_8845 = state_8772__$1;
(statearr_8780_8845[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8773 === (12))){
var inst_8766 = (state_8772[(2)]);
var state_8772__$1 = state_8772;
var statearr_8781_8846 = state_8772__$1;
(statearr_8781_8846[(2)] = inst_8766);

(statearr_8781_8846[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8773 === (2))){
var inst_8751 = cljs_callback_heaven.core.chan_sanitized.call(null,res);
var state_8772__$1 = state_8772;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8772__$1,(5),c,inst_8751);
} else {
if((state_val_8773 === (11))){
var state_8772__$1 = state_8772;
var statearr_8782_8847 = state_8772__$1;
(statearr_8782_8847[(2)] = null);

(statearr_8782_8847[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8773 === (9))){
var inst_8758 = (state_8772[(2)]);
var state_8772__$1 = state_8772;
var statearr_8783_8848 = state_8772__$1;
(statearr_8783_8848[(2)] = inst_8758);

(statearr_8783_8848[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8773 === (5))){
var inst_8753 = (state_8772[(2)]);
var state_8772__$1 = state_8772;
var statearr_8784_8849 = state_8772__$1;
(statearr_8784_8849[(2)] = inst_8753);

(statearr_8784_8849[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8773 === (10))){
var inst_8761 = cljs_callback_heaven.core.chan_sanitized.call(null,err2);
var state_8772__$1 = state_8772;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8772__$1,(13),c,inst_8761);
} else {
if((state_val_8773 === (8))){
var inst_8768 = (state_8772[(2)]);
var state_8772__$1 = state_8772;
var statearr_8785_8850 = state_8772__$1;
(statearr_8785_8850[(2)] = inst_8768);

(statearr_8785_8850[(1)] = (4));


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
});})(c__8534__auto__))
;
return ((function (switch__8513__auto__,c__8534__auto__){
return (function() {
var cljs_callback_heaven$core$state_machine__8514__auto__ = null;
var cljs_callback_heaven$core$state_machine__8514__auto____0 = (function (){
var statearr_8789 = [null,null,null,null,null,null,null];
(statearr_8789[(0)] = cljs_callback_heaven$core$state_machine__8514__auto__);

(statearr_8789[(1)] = (1));

return statearr_8789;
});
var cljs_callback_heaven$core$state_machine__8514__auto____1 = (function (state_8772){
while(true){
var ret_value__8515__auto__ = (function (){try{while(true){
var result__8516__auto__ = switch__8513__auto__.call(null,state_8772);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8516__auto__;
}
break;
}
}catch (e8790){if((e8790 instanceof Object)){
var ex__8517__auto__ = e8790;
var statearr_8791_8851 = state_8772;
(statearr_8791_8851[(5)] = ex__8517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8772);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8790;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8852 = state_8772;
state_8772 = G__8852;
continue;
} else {
return ret_value__8515__auto__;
}
break;
}
});
cljs_callback_heaven$core$state_machine__8514__auto__ = function(state_8772){
switch(arguments.length){
case 0:
return cljs_callback_heaven$core$state_machine__8514__auto____0.call(this);
case 1:
return cljs_callback_heaven$core$state_machine__8514__auto____1.call(this,state_8772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_callback_heaven$core$state_machine__8514__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_callback_heaven$core$state_machine__8514__auto____0;
cljs_callback_heaven$core$state_machine__8514__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_callback_heaven$core$state_machine__8514__auto____1;
return cljs_callback_heaven$core$state_machine__8514__auto__;
})()
;})(switch__8513__auto__,c__8534__auto__))
})();
var state__8536__auto__ = (function (){var statearr_8792 = f__8535__auto__.call(null);
(statearr_8792[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8534__auto__);

return statearr_8792;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8536__auto__);
});})(c__8534__auto__))
);

return c__8534__auto__;
});
});

cljs_callback_heaven.core._GT_3.cljs$core$IFn$_invoke$arity$2 = (function (c,E_msg){
return (function (err1,err2,res){
var c__8534__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8534__auto__){
return (function (){
var f__8535__auto__ = (function (){var switch__8513__auto__ = ((function (c__8534__auto__){
return (function (state_8815){
var state_val_8816 = (state_8815[(1)]);
if((state_val_8816 === (7))){
var state_8815__$1 = state_8815;
var statearr_8817_8853 = state_8815__$1;
(statearr_8817_8853[(1)] = (10));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8816 === (1))){
var state_8815__$1 = state_8815;
if(cljs.core.truth_(res)){
var statearr_8819_8854 = state_8815__$1;
(statearr_8819_8854[(1)] = (2));

} else {
var statearr_8820_8855 = state_8815__$1;
(statearr_8820_8855[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8816 === (4))){
var inst_8813 = (state_8815[(2)]);
var state_8815__$1 = state_8815;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8815__$1,inst_8813);
} else {
if((state_val_8816 === (13))){
var inst_8806 = (state_8815[(2)]);
var state_8815__$1 = state_8815;
var statearr_8821_8856 = state_8815__$1;
(statearr_8821_8856[(2)] = inst_8806);

(statearr_8821_8856[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8816 === (6))){
var inst_8799 = cljs_callback_heaven.core.chan_sanitized.call(null,E_msg);
var state_8815__$1 = state_8815;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8815__$1,(9),c,inst_8799);
} else {
if((state_val_8816 === (3))){
var state_8815__$1 = state_8815;
if(cljs.core.truth_(err1)){
var statearr_8822_8857 = state_8815__$1;
(statearr_8822_8857[(1)] = (6));

} else {
var statearr_8823_8858 = state_8815__$1;
(statearr_8823_8858[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8816 === (12))){
var inst_8809 = (state_8815[(2)]);
var state_8815__$1 = state_8815;
var statearr_8824_8859 = state_8815__$1;
(statearr_8824_8859[(2)] = inst_8809);

(statearr_8824_8859[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8816 === (2))){
var inst_8794 = cljs_callback_heaven.core.chan_sanitized.call(null,res);
var state_8815__$1 = state_8815;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8815__$1,(5),c,inst_8794);
} else {
if((state_val_8816 === (11))){
var state_8815__$1 = state_8815;
var statearr_8825_8860 = state_8815__$1;
(statearr_8825_8860[(2)] = null);

(statearr_8825_8860[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8816 === (9))){
var inst_8801 = (state_8815[(2)]);
var state_8815__$1 = state_8815;
var statearr_8826_8861 = state_8815__$1;
(statearr_8826_8861[(2)] = inst_8801);

(statearr_8826_8861[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8816 === (5))){
var inst_8796 = (state_8815[(2)]);
var state_8815__$1 = state_8815;
var statearr_8827_8862 = state_8815__$1;
(statearr_8827_8862[(2)] = inst_8796);

(statearr_8827_8862[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8816 === (10))){
var inst_8804 = cljs_callback_heaven.core.chan_sanitized.call(null,E_msg);
var state_8815__$1 = state_8815;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8815__$1,(13),c,inst_8804);
} else {
if((state_val_8816 === (8))){
var inst_8811 = (state_8815[(2)]);
var state_8815__$1 = state_8815;
var statearr_8828_8863 = state_8815__$1;
(statearr_8828_8863[(2)] = inst_8811);

(statearr_8828_8863[(1)] = (4));


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
});})(c__8534__auto__))
;
return ((function (switch__8513__auto__,c__8534__auto__){
return (function() {
var cljs_callback_heaven$core$state_machine__8514__auto__ = null;
var cljs_callback_heaven$core$state_machine__8514__auto____0 = (function (){
var statearr_8832 = [null,null,null,null,null,null,null];
(statearr_8832[(0)] = cljs_callback_heaven$core$state_machine__8514__auto__);

(statearr_8832[(1)] = (1));

return statearr_8832;
});
var cljs_callback_heaven$core$state_machine__8514__auto____1 = (function (state_8815){
while(true){
var ret_value__8515__auto__ = (function (){try{while(true){
var result__8516__auto__ = switch__8513__auto__.call(null,state_8815);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8516__auto__;
}
break;
}
}catch (e8833){if((e8833 instanceof Object)){
var ex__8517__auto__ = e8833;
var statearr_8834_8864 = state_8815;
(statearr_8834_8864[(5)] = ex__8517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8815);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8833;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8865 = state_8815;
state_8815 = G__8865;
continue;
} else {
return ret_value__8515__auto__;
}
break;
}
});
cljs_callback_heaven$core$state_machine__8514__auto__ = function(state_8815){
switch(arguments.length){
case 0:
return cljs_callback_heaven$core$state_machine__8514__auto____0.call(this);
case 1:
return cljs_callback_heaven$core$state_machine__8514__auto____1.call(this,state_8815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_callback_heaven$core$state_machine__8514__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_callback_heaven$core$state_machine__8514__auto____0;
cljs_callback_heaven$core$state_machine__8514__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_callback_heaven$core$state_machine__8514__auto____1;
return cljs_callback_heaven$core$state_machine__8514__auto__;
})()
;})(switch__8513__auto__,c__8534__auto__))
})();
var state__8536__auto__ = (function (){var statearr_8835 = f__8535__auto__.call(null);
(statearr_8835[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8534__auto__);

return statearr_8835;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8536__auto__);
});})(c__8534__auto__))
);

return c__8534__auto__;
});
});

cljs_callback_heaven.core._GT_3.cljs$lang$maxFixedArity = 2;
/**
 * Jams the first truthy argument of a callback function into a channel.
 */
cljs_callback_heaven.core._GT__QMARK_ = (function cljs_callback_heaven$core$_GT__QMARK_(var_args){
var args8866 = [];
var len__7214__auto___8971 = arguments.length;
var i__7215__auto___8972 = (0);
while(true){
if((i__7215__auto___8972 < len__7214__auto___8971)){
args8866.push((arguments[i__7215__auto___8972]));

var G__8973 = (i__7215__auto___8972 + (1));
i__7215__auto___8972 = G__8973;
continue;
} else {
}
break;
}

var G__8868 = args8866.length;
switch (G__8868) {
case 1:
return cljs_callback_heaven.core._GT__QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_callback_heaven.core._GT__QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8866.length)].join('')));

}
});

cljs_callback_heaven.core._GT__QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (c){
return (function() { 
var G__8975__delegate = function (args){
var c__8534__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8534__auto__){
return (function (){
var f__8535__auto__ = (function (){var switch__8513__auto__ = ((function (c__8534__auto__){
return (function (state_8893){
var state_val_8894 = (state_8893[(1)]);
if((state_val_8894 === (7))){
var inst_8875 = (state_8893[(2)]);
var state_8893__$1 = state_8893;
var statearr_8895_8976 = state_8893__$1;
(statearr_8895_8976[(2)] = inst_8875);

(statearr_8895_8976[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8894 === (1))){
var inst_8869 = args;
var state_8893__$1 = (function (){var statearr_8896 = state_8893;
(statearr_8896[(7)] = inst_8869);

return statearr_8896;
})();
var statearr_8897_8977 = state_8893__$1;
(statearr_8897_8977[(2)] = null);

(statearr_8897_8977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8894 === (4))){
var state_8893__$1 = state_8893;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8893__$1,(7),c,false);
} else {
if((state_val_8894 === (6))){
var inst_8889 = (state_8893[(2)]);
var state_8893__$1 = state_8893;
var statearr_8898_8978 = state_8893__$1;
(statearr_8898_8978[(2)] = inst_8889);

(statearr_8898_8978[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8894 === (3))){
var inst_8891 = (state_8893[(2)]);
var state_8893__$1 = state_8893;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8893__$1,inst_8891);
} else {
if((state_val_8894 === (2))){
var inst_8869 = (state_8893[(7)]);
var inst_8871 = cljs.core.count.call(null,inst_8869);
var inst_8872 = cljs.core._EQ_.call(null,(0),inst_8871);
var state_8893__$1 = state_8893;
if(inst_8872){
var statearr_8899_8979 = state_8893__$1;
(statearr_8899_8979[(1)] = (4));

} else {
var statearr_8900_8980 = state_8893__$1;
(statearr_8900_8980[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8894 === (11))){
var inst_8882 = (state_8893[(2)]);
var state_8893__$1 = state_8893;
var statearr_8901_8981 = state_8893__$1;
(statearr_8901_8981[(2)] = inst_8882);

(statearr_8901_8981[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8894 === (9))){
var inst_8869 = (state_8893[(7)]);
var inst_8884 = cljs.core.rest.call(null,inst_8869);
var inst_8869__$1 = inst_8884;
var state_8893__$1 = (function (){var statearr_8902 = state_8893;
(statearr_8902[(7)] = inst_8869__$1);

return statearr_8902;
})();
var statearr_8903_8982 = state_8893__$1;
(statearr_8903_8982[(2)] = null);

(statearr_8903_8982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8894 === (5))){
var inst_8869 = (state_8893[(7)]);
var inst_8877 = cljs.core.first.call(null,inst_8869);
var state_8893__$1 = state_8893;
if(cljs.core.truth_(inst_8877)){
var statearr_8904_8983 = state_8893__$1;
(statearr_8904_8983[(1)] = (8));

} else {
var statearr_8905_8984 = state_8893__$1;
(statearr_8905_8984[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8894 === (10))){
var inst_8887 = (state_8893[(2)]);
var state_8893__$1 = state_8893;
var statearr_8906_8985 = state_8893__$1;
(statearr_8906_8985[(2)] = inst_8887);

(statearr_8906_8985[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8894 === (8))){
var inst_8869 = (state_8893[(7)]);
var inst_8879 = cljs_callback_heaven.core.chan_sanitized.call(null,inst_8869);
var inst_8880 = cljs.core.first.call(null,inst_8879);
var state_8893__$1 = state_8893;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8893__$1,(11),c,inst_8880);
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
});})(c__8534__auto__))
;
return ((function (switch__8513__auto__,c__8534__auto__){
return (function() {
var cljs_callback_heaven$core$state_machine__8514__auto__ = null;
var cljs_callback_heaven$core$state_machine__8514__auto____0 = (function (){
var statearr_8910 = [null,null,null,null,null,null,null,null];
(statearr_8910[(0)] = cljs_callback_heaven$core$state_machine__8514__auto__);

(statearr_8910[(1)] = (1));

return statearr_8910;
});
var cljs_callback_heaven$core$state_machine__8514__auto____1 = (function (state_8893){
while(true){
var ret_value__8515__auto__ = (function (){try{while(true){
var result__8516__auto__ = switch__8513__auto__.call(null,state_8893);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8516__auto__;
}
break;
}
}catch (e8911){if((e8911 instanceof Object)){
var ex__8517__auto__ = e8911;
var statearr_8912_8986 = state_8893;
(statearr_8912_8986[(5)] = ex__8517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8893);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8911;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8987 = state_8893;
state_8893 = G__8987;
continue;
} else {
return ret_value__8515__auto__;
}
break;
}
});
cljs_callback_heaven$core$state_machine__8514__auto__ = function(state_8893){
switch(arguments.length){
case 0:
return cljs_callback_heaven$core$state_machine__8514__auto____0.call(this);
case 1:
return cljs_callback_heaven$core$state_machine__8514__auto____1.call(this,state_8893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_callback_heaven$core$state_machine__8514__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_callback_heaven$core$state_machine__8514__auto____0;
cljs_callback_heaven$core$state_machine__8514__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_callback_heaven$core$state_machine__8514__auto____1;
return cljs_callback_heaven$core$state_machine__8514__auto__;
})()
;})(switch__8513__auto__,c__8534__auto__))
})();
var state__8536__auto__ = (function (){var statearr_8913 = f__8535__auto__.call(null);
(statearr_8913[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8534__auto__);

return statearr_8913;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8536__auto__);
});})(c__8534__auto__))
);

return c__8534__auto__;
};
var G__8975 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8988__i = 0, G__8988__a = new Array(arguments.length -  0);
while (G__8988__i < G__8988__a.length) {G__8988__a[G__8988__i] = arguments[G__8988__i + 0]; ++G__8988__i;}
  args = new cljs.core.IndexedSeq(G__8988__a,0);
} 
return G__8975__delegate.call(this,args);};
G__8975.cljs$lang$maxFixedArity = 0;
G__8975.cljs$lang$applyTo = (function (arglist__8989){
var args = cljs.core.seq(arglist__8989);
return G__8975__delegate(args);
});
G__8975.cljs$core$IFn$_invoke$arity$variadic = G__8975__delegate;
return G__8975;
})()
;
});

cljs_callback_heaven.core._GT__QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (c,E_msg){
return (function() { 
var G__8990__delegate = function (args){
var c__8534__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8534__auto__){
return (function (){
var f__8535__auto__ = (function (){var switch__8513__auto__ = ((function (c__8534__auto__){
return (function (state_8946){
var state_val_8947 = (state_8946[(1)]);
if((state_val_8947 === (7))){
var inst_8920 = (state_8946[(2)]);
var state_8946__$1 = state_8946;
var statearr_8948_8991 = state_8946__$1;
(statearr_8948_8991[(2)] = inst_8920);

(statearr_8948_8991[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8947 === (1))){
var inst_8914 = args;
var state_8946__$1 = (function (){var statearr_8949 = state_8946;
(statearr_8949[(7)] = inst_8914);

return statearr_8949;
})();
var statearr_8950_8992 = state_8946__$1;
(statearr_8950_8992[(2)] = null);

(statearr_8950_8992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8947 === (4))){
var state_8946__$1 = state_8946;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8946__$1,(7),c,E_msg);
} else {
if((state_val_8947 === (15))){
var inst_8933 = (state_8946[(2)]);
var state_8946__$1 = state_8946;
var statearr_8951_8993 = state_8946__$1;
(statearr_8951_8993[(2)] = inst_8933);

(statearr_8951_8993[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8947 === (13))){
var inst_8935 = (state_8946[(2)]);
var state_8946__$1 = state_8946;
var statearr_8952_8994 = state_8946__$1;
(statearr_8952_8994[(2)] = inst_8935);

(statearr_8952_8994[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8947 === (6))){
var inst_8942 = (state_8946[(2)]);
var state_8946__$1 = state_8946;
var statearr_8953_8995 = state_8946__$1;
(statearr_8953_8995[(2)] = inst_8942);

(statearr_8953_8995[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8947 === (3))){
var inst_8944 = (state_8946[(2)]);
var state_8946__$1 = state_8946;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8946__$1,inst_8944);
} else {
if((state_val_8947 === (12))){
var inst_8914 = (state_8946[(7)]);
var inst_8930 = cljs_callback_heaven.core.chan_sanitized.call(null,inst_8914);
var inst_8931 = cljs.core.first.call(null,inst_8930);
var state_8946__$1 = state_8946;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8946__$1,(15),c,inst_8931);
} else {
if((state_val_8947 === (2))){
var inst_8914 = (state_8946[(7)]);
var inst_8916 = cljs.core.count.call(null,inst_8914);
var inst_8917 = cljs.core._EQ_.call(null,(0),inst_8916);
var state_8946__$1 = state_8946;
if(inst_8917){
var statearr_8954_8996 = state_8946__$1;
(statearr_8954_8996[(1)] = (4));

} else {
var statearr_8955_8997 = state_8946__$1;
(statearr_8955_8997[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8947 === (11))){
var state_8946__$1 = state_8946;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8946__$1,(14),c,E_msg);
} else {
if((state_val_8947 === (9))){
var inst_8914 = (state_8946[(7)]);
var inst_8937 = cljs.core.rest.call(null,inst_8914);
var inst_8914__$1 = inst_8937;
var state_8946__$1 = (function (){var statearr_8956 = state_8946;
(statearr_8956[(7)] = inst_8914__$1);

return statearr_8956;
})();
var statearr_8957_8998 = state_8946__$1;
(statearr_8957_8998[(2)] = null);

(statearr_8957_8998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8947 === (5))){
var inst_8914 = (state_8946[(7)]);
var inst_8922 = cljs.core.first.call(null,inst_8914);
var state_8946__$1 = state_8946;
if(cljs.core.truth_(inst_8922)){
var statearr_8958_8999 = state_8946__$1;
(statearr_8958_8999[(1)] = (8));

} else {
var statearr_8959_9000 = state_8946__$1;
(statearr_8959_9000[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8947 === (14))){
var inst_8928 = (state_8946[(2)]);
var state_8946__$1 = state_8946;
var statearr_8960_9001 = state_8946__$1;
(statearr_8960_9001[(2)] = inst_8928);

(statearr_8960_9001[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8947 === (10))){
var inst_8940 = (state_8946[(2)]);
var state_8946__$1 = state_8946;
var statearr_8961_9002 = state_8946__$1;
(statearr_8961_9002[(2)] = inst_8940);

(statearr_8961_9002[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8947 === (8))){
var inst_8914 = (state_8946[(7)]);
var inst_8924 = cljs.core.count.call(null,inst_8914);
var inst_8925 = (inst_8924 > (1));
var state_8946__$1 = state_8946;
if(cljs.core.truth_(inst_8925)){
var statearr_8962_9003 = state_8946__$1;
(statearr_8962_9003[(1)] = (11));

} else {
var statearr_8963_9004 = state_8946__$1;
(statearr_8963_9004[(1)] = (12));

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
});})(c__8534__auto__))
;
return ((function (switch__8513__auto__,c__8534__auto__){
return (function() {
var cljs_callback_heaven$core$state_machine__8514__auto__ = null;
var cljs_callback_heaven$core$state_machine__8514__auto____0 = (function (){
var statearr_8967 = [null,null,null,null,null,null,null,null];
(statearr_8967[(0)] = cljs_callback_heaven$core$state_machine__8514__auto__);

(statearr_8967[(1)] = (1));

return statearr_8967;
});
var cljs_callback_heaven$core$state_machine__8514__auto____1 = (function (state_8946){
while(true){
var ret_value__8515__auto__ = (function (){try{while(true){
var result__8516__auto__ = switch__8513__auto__.call(null,state_8946);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8516__auto__;
}
break;
}
}catch (e8968){if((e8968 instanceof Object)){
var ex__8517__auto__ = e8968;
var statearr_8969_9005 = state_8946;
(statearr_8969_9005[(5)] = ex__8517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8946);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8968;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9006 = state_8946;
state_8946 = G__9006;
continue;
} else {
return ret_value__8515__auto__;
}
break;
}
});
cljs_callback_heaven$core$state_machine__8514__auto__ = function(state_8946){
switch(arguments.length){
case 0:
return cljs_callback_heaven$core$state_machine__8514__auto____0.call(this);
case 1:
return cljs_callback_heaven$core$state_machine__8514__auto____1.call(this,state_8946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_callback_heaven$core$state_machine__8514__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_callback_heaven$core$state_machine__8514__auto____0;
cljs_callback_heaven$core$state_machine__8514__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_callback_heaven$core$state_machine__8514__auto____1;
return cljs_callback_heaven$core$state_machine__8514__auto__;
})()
;})(switch__8513__auto__,c__8534__auto__))
})();
var state__8536__auto__ = (function (){var statearr_8970 = f__8535__auto__.call(null);
(statearr_8970[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8534__auto__);

return statearr_8970;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8536__auto__);
});})(c__8534__auto__))
);

return c__8534__auto__;
};
var G__8990 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9007__i = 0, G__9007__a = new Array(arguments.length -  0);
while (G__9007__i < G__9007__a.length) {G__9007__a[G__9007__i] = arguments[G__9007__i + 0]; ++G__9007__i;}
  args = new cljs.core.IndexedSeq(G__9007__a,0);
} 
return G__8990__delegate.call(this,args);};
G__8990.cljs$lang$maxFixedArity = 0;
G__8990.cljs$lang$applyTo = (function (arglist__9008){
var args = cljs.core.seq(arglist__9008);
return G__8990__delegate(args);
});
G__8990.cljs$core$IFn$_invoke$arity$variadic = G__8990__delegate;
return G__8990;
})()
;
});

cljs_callback_heaven.core._GT__QMARK_.cljs$lang$maxFixedArity = 2;
cljs.core._STAR_main_cli_fn_STAR_ = cljs_callback_heaven.core._main;

//# sourceMappingURL=core.js.map