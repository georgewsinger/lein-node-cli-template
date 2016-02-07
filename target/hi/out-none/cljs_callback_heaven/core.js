// Compiled by ClojureScript 1.7.228 {:target :nodejs}
goog.provide('cljs_callback_heaven.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('cljs.core.async');
cljs.nodejs.enable_util_print_BANG_.call(null);
cljs_callback_heaven.core._LT_print = (function cljs_callback_heaven$core$_LT_print(c){
var c__8539__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8539__auto__){
return (function (){
var f__8540__auto__ = (function (){var switch__8518__auto__ = ((function (c__8539__auto__){
return (function (state_8601){
var state_val_8602 = (state_8601[(1)]);
if((state_val_8602 === (1))){
var state_8601__$1 = state_8601;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8601__$1,(2),c);
} else {
if((state_val_8602 === (2))){
var inst_8598 = (state_8601[(2)]);
var inst_8599 = cljs.core.println.call(null,inst_8598);
var state_8601__$1 = state_8601;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8601__$1,inst_8599);
} else {
return null;
}
}
});})(c__8539__auto__))
;
return ((function (switch__8518__auto__,c__8539__auto__){
return (function() {
var cljs_callback_heaven$core$_LT_print_$_state_machine__8519__auto__ = null;
var cljs_callback_heaven$core$_LT_print_$_state_machine__8519__auto____0 = (function (){
var statearr_8606 = [null,null,null,null,null,null,null];
(statearr_8606[(0)] = cljs_callback_heaven$core$_LT_print_$_state_machine__8519__auto__);

(statearr_8606[(1)] = (1));

return statearr_8606;
});
var cljs_callback_heaven$core$_LT_print_$_state_machine__8519__auto____1 = (function (state_8601){
while(true){
var ret_value__8520__auto__ = (function (){try{while(true){
var result__8521__auto__ = switch__8518__auto__.call(null,state_8601);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8521__auto__;
}
break;
}
}catch (e8607){if((e8607 instanceof Object)){
var ex__8522__auto__ = e8607;
var statearr_8608_8610 = state_8601;
(statearr_8608_8610[(5)] = ex__8522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8601);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8607;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8611 = state_8601;
state_8601 = G__8611;
continue;
} else {
return ret_value__8520__auto__;
}
break;
}
});
cljs_callback_heaven$core$_LT_print_$_state_machine__8519__auto__ = function(state_8601){
switch(arguments.length){
case 0:
return cljs_callback_heaven$core$_LT_print_$_state_machine__8519__auto____0.call(this);
case 1:
return cljs_callback_heaven$core$_LT_print_$_state_machine__8519__auto____1.call(this,state_8601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_callback_heaven$core$_LT_print_$_state_machine__8519__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_callback_heaven$core$_LT_print_$_state_machine__8519__auto____0;
cljs_callback_heaven$core$_LT_print_$_state_machine__8519__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_callback_heaven$core$_LT_print_$_state_machine__8519__auto____1;
return cljs_callback_heaven$core$_LT_print_$_state_machine__8519__auto__;
})()
;})(switch__8518__auto__,c__8539__auto__))
})();
var state__8541__auto__ = (function (){var statearr_8609 = f__8540__auto__.call(null);
(statearr_8609[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8539__auto__);

return statearr_8609;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8541__auto__);
});})(c__8539__auto__))
);

return c__8539__auto__;
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
cljs_callback_heaven.core.cb_GT_1 = (function cljs_callback_heaven$core$cb_GT_1(var_args){
var args8612 = [];
var len__7214__auto___8652 = arguments.length;
var i__7215__auto___8653 = (0);
while(true){
if((i__7215__auto___8653 < len__7214__auto___8652)){
args8612.push((arguments[i__7215__auto___8653]));

var G__8654 = (i__7215__auto___8653 + (1));
i__7215__auto___8653 = G__8654;
continue;
} else {
}
break;
}

var G__8614 = args8612.length;
switch (G__8614) {
case 1:
return cljs_callback_heaven.core.cb_GT_1.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_callback_heaven.core.cb_GT_1.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8612.length)].join('')));

}
});

cljs_callback_heaven.core.cb_GT_1.cljs$core$IFn$_invoke$arity$1 = (function (c){
return (function (arg1){
var c__8539__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8539__auto__){
return (function (){
var f__8540__auto__ = (function (){var switch__8518__auto__ = ((function (c__8539__auto__){
return (function (state_8619){
var state_val_8620 = (state_8619[(1)]);
if((state_val_8620 === (1))){
var inst_8615 = cljs_callback_heaven.core.chan_sanitized.call(null,arg1);
var state_8619__$1 = state_8619;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8619__$1,(2),c,inst_8615);
} else {
if((state_val_8620 === (2))){
var inst_8617 = (state_8619[(2)]);
var state_8619__$1 = state_8619;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8619__$1,inst_8617);
} else {
return null;
}
}
});})(c__8539__auto__))
;
return ((function (switch__8518__auto__,c__8539__auto__){
return (function() {
var cljs_callback_heaven$core$state_machine__8519__auto__ = null;
var cljs_callback_heaven$core$state_machine__8519__auto____0 = (function (){
var statearr_8624 = [null,null,null,null,null,null,null];
(statearr_8624[(0)] = cljs_callback_heaven$core$state_machine__8519__auto__);

(statearr_8624[(1)] = (1));

return statearr_8624;
});
var cljs_callback_heaven$core$state_machine__8519__auto____1 = (function (state_8619){
while(true){
var ret_value__8520__auto__ = (function (){try{while(true){
var result__8521__auto__ = switch__8518__auto__.call(null,state_8619);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8521__auto__;
}
break;
}
}catch (e8625){if((e8625 instanceof Object)){
var ex__8522__auto__ = e8625;
var statearr_8626_8656 = state_8619;
(statearr_8626_8656[(5)] = ex__8522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8619);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8625;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8657 = state_8619;
state_8619 = G__8657;
continue;
} else {
return ret_value__8520__auto__;
}
break;
}
});
cljs_callback_heaven$core$state_machine__8519__auto__ = function(state_8619){
switch(arguments.length){
case 0:
return cljs_callback_heaven$core$state_machine__8519__auto____0.call(this);
case 1:
return cljs_callback_heaven$core$state_machine__8519__auto____1.call(this,state_8619);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_callback_heaven$core$state_machine__8519__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_callback_heaven$core$state_machine__8519__auto____0;
cljs_callback_heaven$core$state_machine__8519__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_callback_heaven$core$state_machine__8519__auto____1;
return cljs_callback_heaven$core$state_machine__8519__auto__;
})()
;})(switch__8518__auto__,c__8539__auto__))
})();
var state__8541__auto__ = (function (){var statearr_8627 = f__8540__auto__.call(null);
(statearr_8627[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8539__auto__);

return statearr_8627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8541__auto__);
});})(c__8539__auto__))
);

return c__8539__auto__;
});
});

cljs_callback_heaven.core.cb_GT_1.cljs$core$IFn$_invoke$arity$2 = (function (c,E_msg){
return (function (arg1){
var c__8539__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8539__auto__){
return (function (){
var f__8540__auto__ = (function (){var switch__8518__auto__ = ((function (c__8539__auto__){
return (function (state_8639){
var state_val_8640 = (state_8639[(1)]);
if((state_val_8640 === (1))){
var state_8639__$1 = state_8639;
if(cljs.core.truth_(arg1)){
var statearr_8641_8658 = state_8639__$1;
(statearr_8641_8658[(1)] = (2));

} else {
var statearr_8642_8659 = state_8639__$1;
(statearr_8642_8659[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8640 === (2))){
var inst_8629 = cljs_callback_heaven.core.chan_sanitized.call(null,arg1);
var state_8639__$1 = state_8639;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8639__$1,(5),c,inst_8629);
} else {
if((state_val_8640 === (3))){
var inst_8633 = (new Error(E_msg));
var state_8639__$1 = state_8639;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8639__$1,(6),c,inst_8633);
} else {
if((state_val_8640 === (4))){
var inst_8637 = (state_8639[(2)]);
var state_8639__$1 = state_8639;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8639__$1,inst_8637);
} else {
if((state_val_8640 === (5))){
var inst_8631 = (state_8639[(2)]);
var state_8639__$1 = state_8639;
var statearr_8643_8660 = state_8639__$1;
(statearr_8643_8660[(2)] = inst_8631);

(statearr_8643_8660[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8640 === (6))){
var inst_8635 = (state_8639[(2)]);
var state_8639__$1 = state_8639;
var statearr_8644_8661 = state_8639__$1;
(statearr_8644_8661[(2)] = inst_8635);

(statearr_8644_8661[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});})(c__8539__auto__))
;
return ((function (switch__8518__auto__,c__8539__auto__){
return (function() {
var cljs_callback_heaven$core$state_machine__8519__auto__ = null;
var cljs_callback_heaven$core$state_machine__8519__auto____0 = (function (){
var statearr_8648 = [null,null,null,null,null,null,null];
(statearr_8648[(0)] = cljs_callback_heaven$core$state_machine__8519__auto__);

(statearr_8648[(1)] = (1));

return statearr_8648;
});
var cljs_callback_heaven$core$state_machine__8519__auto____1 = (function (state_8639){
while(true){
var ret_value__8520__auto__ = (function (){try{while(true){
var result__8521__auto__ = switch__8518__auto__.call(null,state_8639);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8521__auto__;
}
break;
}
}catch (e8649){if((e8649 instanceof Object)){
var ex__8522__auto__ = e8649;
var statearr_8650_8662 = state_8639;
(statearr_8650_8662[(5)] = ex__8522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8639);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8649;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8663 = state_8639;
state_8639 = G__8663;
continue;
} else {
return ret_value__8520__auto__;
}
break;
}
});
cljs_callback_heaven$core$state_machine__8519__auto__ = function(state_8639){
switch(arguments.length){
case 0:
return cljs_callback_heaven$core$state_machine__8519__auto____0.call(this);
case 1:
return cljs_callback_heaven$core$state_machine__8519__auto____1.call(this,state_8639);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_callback_heaven$core$state_machine__8519__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_callback_heaven$core$state_machine__8519__auto____0;
cljs_callback_heaven$core$state_machine__8519__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_callback_heaven$core$state_machine__8519__auto____1;
return cljs_callback_heaven$core$state_machine__8519__auto__;
})()
;})(switch__8518__auto__,c__8539__auto__))
})();
var state__8541__auto__ = (function (){var statearr_8651 = f__8540__auto__.call(null);
(statearr_8651[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8539__auto__);

return statearr_8651;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8541__auto__);
});})(c__8539__auto__))
);

return c__8539__auto__;
});
});

cljs_callback_heaven.core.cb_GT_1.cljs$lang$maxFixedArity = 2;
/**
 * If at all possible, jams the 2nd callback argument into the input channel.
 */
cljs_callback_heaven.core.cb_GT_2 = (function cljs_callback_heaven$core$cb_GT_2(var_args){
var args8664 = [];
var len__7214__auto___8732 = arguments.length;
var i__7215__auto___8733 = (0);
while(true){
if((i__7215__auto___8733 < len__7214__auto___8732)){
args8664.push((arguments[i__7215__auto___8733]));

var G__8734 = (i__7215__auto___8733 + (1));
i__7215__auto___8733 = G__8734;
continue;
} else {
}
break;
}

var G__8666 = args8664.length;
switch (G__8666) {
case 1:
return cljs_callback_heaven.core.cb_GT_2.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_callback_heaven.core.cb_GT_2.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8664.length)].join('')));

}
});

cljs_callback_heaven.core.cb_GT_2.cljs$core$IFn$_invoke$arity$1 = (function (c){
return (function (err,res){
var c__8539__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8539__auto__){
return (function (){
var f__8540__auto__ = (function (){var switch__8518__auto__ = ((function (c__8539__auto__){
return (function (state_8682){
var state_val_8683 = (state_8682[(1)]);
if((state_val_8683 === (1))){
var state_8682__$1 = state_8682;
if(cljs.core.truth_(res)){
var statearr_8684_8736 = state_8682__$1;
(statearr_8684_8736[(1)] = (2));

} else {
var statearr_8685_8737 = state_8682__$1;
(statearr_8685_8737[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8683 === (2))){
var inst_8668 = cljs_callback_heaven.core.chan_sanitized.call(null,res);
var state_8682__$1 = state_8682;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8682__$1,(5),c,inst_8668);
} else {
if((state_val_8683 === (3))){
var state_8682__$1 = state_8682;
var statearr_8686_8738 = state_8682__$1;
(statearr_8686_8738[(1)] = (6));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8683 === (4))){
var inst_8680 = (state_8682[(2)]);
var state_8682__$1 = state_8682;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8682__$1,inst_8680);
} else {
if((state_val_8683 === (5))){
var inst_8670 = (state_8682[(2)]);
var state_8682__$1 = state_8682;
var statearr_8688_8739 = state_8682__$1;
(statearr_8688_8739[(2)] = inst_8670);

(statearr_8688_8739[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8683 === (6))){
var inst_8673 = cljs_callback_heaven.core.chan_sanitized.call(null,err);
var state_8682__$1 = state_8682;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8682__$1,(9),c,inst_8673);
} else {
if((state_val_8683 === (7))){
var state_8682__$1 = state_8682;
var statearr_8689_8740 = state_8682__$1;
(statearr_8689_8740[(2)] = null);

(statearr_8689_8740[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8683 === (8))){
var inst_8678 = (state_8682[(2)]);
var state_8682__$1 = state_8682;
var statearr_8690_8741 = state_8682__$1;
(statearr_8690_8741[(2)] = inst_8678);

(statearr_8690_8741[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8683 === (9))){
var inst_8675 = (state_8682[(2)]);
var state_8682__$1 = state_8682;
var statearr_8691_8742 = state_8682__$1;
(statearr_8691_8742[(2)] = inst_8675);

(statearr_8691_8742[(1)] = (8));


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
});})(c__8539__auto__))
;
return ((function (switch__8518__auto__,c__8539__auto__){
return (function() {
var cljs_callback_heaven$core$state_machine__8519__auto__ = null;
var cljs_callback_heaven$core$state_machine__8519__auto____0 = (function (){
var statearr_8695 = [null,null,null,null,null,null,null];
(statearr_8695[(0)] = cljs_callback_heaven$core$state_machine__8519__auto__);

(statearr_8695[(1)] = (1));

return statearr_8695;
});
var cljs_callback_heaven$core$state_machine__8519__auto____1 = (function (state_8682){
while(true){
var ret_value__8520__auto__ = (function (){try{while(true){
var result__8521__auto__ = switch__8518__auto__.call(null,state_8682);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8521__auto__;
}
break;
}
}catch (e8696){if((e8696 instanceof Object)){
var ex__8522__auto__ = e8696;
var statearr_8697_8743 = state_8682;
(statearr_8697_8743[(5)] = ex__8522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8682);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8696;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8744 = state_8682;
state_8682 = G__8744;
continue;
} else {
return ret_value__8520__auto__;
}
break;
}
});
cljs_callback_heaven$core$state_machine__8519__auto__ = function(state_8682){
switch(arguments.length){
case 0:
return cljs_callback_heaven$core$state_machine__8519__auto____0.call(this);
case 1:
return cljs_callback_heaven$core$state_machine__8519__auto____1.call(this,state_8682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_callback_heaven$core$state_machine__8519__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_callback_heaven$core$state_machine__8519__auto____0;
cljs_callback_heaven$core$state_machine__8519__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_callback_heaven$core$state_machine__8519__auto____1;
return cljs_callback_heaven$core$state_machine__8519__auto__;
})()
;})(switch__8518__auto__,c__8539__auto__))
})();
var state__8541__auto__ = (function (){var statearr_8698 = f__8540__auto__.call(null);
(statearr_8698[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8539__auto__);

return statearr_8698;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8541__auto__);
});})(c__8539__auto__))
);

return c__8539__auto__;
});
});

cljs_callback_heaven.core.cb_GT_2.cljs$core$IFn$_invoke$arity$2 = (function (c,E_msg){
return (function (err,res){
var c__8539__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8539__auto__){
return (function (){
var f__8540__auto__ = (function (){var switch__8518__auto__ = ((function (c__8539__auto__){
return (function (state_8715){
var state_val_8716 = (state_8715[(1)]);
if((state_val_8716 === (1))){
var state_8715__$1 = state_8715;
if(cljs.core.truth_(res)){
var statearr_8717_8745 = state_8715__$1;
(statearr_8717_8745[(1)] = (2));

} else {
var statearr_8718_8746 = state_8715__$1;
(statearr_8718_8746[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8716 === (2))){
var inst_8700 = cljs_callback_heaven.core.chan_sanitized.call(null,res);
var state_8715__$1 = state_8715;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8715__$1,(5),c,inst_8700);
} else {
if((state_val_8716 === (3))){
var state_8715__$1 = state_8715;
var statearr_8719_8747 = state_8715__$1;
(statearr_8719_8747[(1)] = (6));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8716 === (4))){
var inst_8713 = (state_8715[(2)]);
var state_8715__$1 = state_8715;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8715__$1,inst_8713);
} else {
if((state_val_8716 === (5))){
var inst_8702 = (state_8715[(2)]);
var state_8715__$1 = state_8715;
var statearr_8721_8748 = state_8715__$1;
(statearr_8721_8748[(2)] = inst_8702);

(statearr_8721_8748[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8716 === (6))){
var inst_8705 = (new Error(E_msg));
var inst_8706 = cljs_callback_heaven.core.chan_sanitized.call(null,inst_8705);
var state_8715__$1 = state_8715;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8715__$1,(9),c,inst_8706);
} else {
if((state_val_8716 === (7))){
var state_8715__$1 = state_8715;
var statearr_8722_8749 = state_8715__$1;
(statearr_8722_8749[(2)] = null);

(statearr_8722_8749[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8716 === (8))){
var inst_8711 = (state_8715[(2)]);
var state_8715__$1 = state_8715;
var statearr_8723_8750 = state_8715__$1;
(statearr_8723_8750[(2)] = inst_8711);

(statearr_8723_8750[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8716 === (9))){
var inst_8708 = (state_8715[(2)]);
var state_8715__$1 = state_8715;
var statearr_8724_8751 = state_8715__$1;
(statearr_8724_8751[(2)] = inst_8708);

(statearr_8724_8751[(1)] = (8));


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
});})(c__8539__auto__))
;
return ((function (switch__8518__auto__,c__8539__auto__){
return (function() {
var cljs_callback_heaven$core$state_machine__8519__auto__ = null;
var cljs_callback_heaven$core$state_machine__8519__auto____0 = (function (){
var statearr_8728 = [null,null,null,null,null,null,null];
(statearr_8728[(0)] = cljs_callback_heaven$core$state_machine__8519__auto__);

(statearr_8728[(1)] = (1));

return statearr_8728;
});
var cljs_callback_heaven$core$state_machine__8519__auto____1 = (function (state_8715){
while(true){
var ret_value__8520__auto__ = (function (){try{while(true){
var result__8521__auto__ = switch__8518__auto__.call(null,state_8715);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8521__auto__;
}
break;
}
}catch (e8729){if((e8729 instanceof Object)){
var ex__8522__auto__ = e8729;
var statearr_8730_8752 = state_8715;
(statearr_8730_8752[(5)] = ex__8522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8715);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8729;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8753 = state_8715;
state_8715 = G__8753;
continue;
} else {
return ret_value__8520__auto__;
}
break;
}
});
cljs_callback_heaven$core$state_machine__8519__auto__ = function(state_8715){
switch(arguments.length){
case 0:
return cljs_callback_heaven$core$state_machine__8519__auto____0.call(this);
case 1:
return cljs_callback_heaven$core$state_machine__8519__auto____1.call(this,state_8715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_callback_heaven$core$state_machine__8519__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_callback_heaven$core$state_machine__8519__auto____0;
cljs_callback_heaven$core$state_machine__8519__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_callback_heaven$core$state_machine__8519__auto____1;
return cljs_callback_heaven$core$state_machine__8519__auto__;
})()
;})(switch__8518__auto__,c__8539__auto__))
})();
var state__8541__auto__ = (function (){var statearr_8731 = f__8540__auto__.call(null);
(statearr_8731[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8539__auto__);

return statearr_8731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8541__auto__);
});})(c__8539__auto__))
);

return c__8539__auto__;
});
});

cljs_callback_heaven.core.cb_GT_2.cljs$lang$maxFixedArity = 2;
/**
 * If at all possible, jams the 3rd callback argument into the input channel.
 */
cljs_callback_heaven.core.cb_GT_3 = (function cljs_callback_heaven$core$cb_GT_3(var_args){
var args8754 = [];
var len__7214__auto___8844 = arguments.length;
var i__7215__auto___8845 = (0);
while(true){
if((i__7215__auto___8845 < len__7214__auto___8844)){
args8754.push((arguments[i__7215__auto___8845]));

var G__8846 = (i__7215__auto___8845 + (1));
i__7215__auto___8845 = G__8846;
continue;
} else {
}
break;
}

var G__8756 = args8754.length;
switch (G__8756) {
case 1:
return cljs_callback_heaven.core.cb_GT_3.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_callback_heaven.core.cb_GT_3.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8754.length)].join('')));

}
});

cljs_callback_heaven.core.cb_GT_3.cljs$core$IFn$_invoke$arity$1 = (function (c){
return (function (err1,err2,res){
var c__8539__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8539__auto__){
return (function (){
var f__8540__auto__ = (function (){var switch__8518__auto__ = ((function (c__8539__auto__){
return (function (state_8779){
var state_val_8780 = (state_8779[(1)]);
if((state_val_8780 === (7))){
var state_8779__$1 = state_8779;
var statearr_8781_8848 = state_8779__$1;
(statearr_8781_8848[(1)] = (10));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8780 === (1))){
var state_8779__$1 = state_8779;
if(cljs.core.truth_(res)){
var statearr_8783_8849 = state_8779__$1;
(statearr_8783_8849[(1)] = (2));

} else {
var statearr_8784_8850 = state_8779__$1;
(statearr_8784_8850[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8780 === (4))){
var inst_8777 = (state_8779[(2)]);
var state_8779__$1 = state_8779;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8779__$1,inst_8777);
} else {
if((state_val_8780 === (13))){
var inst_8770 = (state_8779[(2)]);
var state_8779__$1 = state_8779;
var statearr_8785_8851 = state_8779__$1;
(statearr_8785_8851[(2)] = inst_8770);

(statearr_8785_8851[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8780 === (6))){
var inst_8763 = cljs_callback_heaven.core.chan_sanitized.call(null,err1);
var state_8779__$1 = state_8779;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8779__$1,(9),c,inst_8763);
} else {
if((state_val_8780 === (3))){
var state_8779__$1 = state_8779;
if(cljs.core.truth_(err1)){
var statearr_8786_8852 = state_8779__$1;
(statearr_8786_8852[(1)] = (6));

} else {
var statearr_8787_8853 = state_8779__$1;
(statearr_8787_8853[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8780 === (12))){
var inst_8773 = (state_8779[(2)]);
var state_8779__$1 = state_8779;
var statearr_8788_8854 = state_8779__$1;
(statearr_8788_8854[(2)] = inst_8773);

(statearr_8788_8854[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8780 === (2))){
var inst_8758 = cljs_callback_heaven.core.chan_sanitized.call(null,res);
var state_8779__$1 = state_8779;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8779__$1,(5),c,inst_8758);
} else {
if((state_val_8780 === (11))){
var state_8779__$1 = state_8779;
var statearr_8789_8855 = state_8779__$1;
(statearr_8789_8855[(2)] = null);

(statearr_8789_8855[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8780 === (9))){
var inst_8765 = (state_8779[(2)]);
var state_8779__$1 = state_8779;
var statearr_8790_8856 = state_8779__$1;
(statearr_8790_8856[(2)] = inst_8765);

(statearr_8790_8856[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8780 === (5))){
var inst_8760 = (state_8779[(2)]);
var state_8779__$1 = state_8779;
var statearr_8791_8857 = state_8779__$1;
(statearr_8791_8857[(2)] = inst_8760);

(statearr_8791_8857[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8780 === (10))){
var inst_8768 = cljs_callback_heaven.core.chan_sanitized.call(null,err2);
var state_8779__$1 = state_8779;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8779__$1,(13),c,inst_8768);
} else {
if((state_val_8780 === (8))){
var inst_8775 = (state_8779[(2)]);
var state_8779__$1 = state_8779;
var statearr_8792_8858 = state_8779__$1;
(statearr_8792_8858[(2)] = inst_8775);

(statearr_8792_8858[(1)] = (4));


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
});})(c__8539__auto__))
;
return ((function (switch__8518__auto__,c__8539__auto__){
return (function() {
var cljs_callback_heaven$core$state_machine__8519__auto__ = null;
var cljs_callback_heaven$core$state_machine__8519__auto____0 = (function (){
var statearr_8796 = [null,null,null,null,null,null,null];
(statearr_8796[(0)] = cljs_callback_heaven$core$state_machine__8519__auto__);

(statearr_8796[(1)] = (1));

return statearr_8796;
});
var cljs_callback_heaven$core$state_machine__8519__auto____1 = (function (state_8779){
while(true){
var ret_value__8520__auto__ = (function (){try{while(true){
var result__8521__auto__ = switch__8518__auto__.call(null,state_8779);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8521__auto__;
}
break;
}
}catch (e8797){if((e8797 instanceof Object)){
var ex__8522__auto__ = e8797;
var statearr_8798_8859 = state_8779;
(statearr_8798_8859[(5)] = ex__8522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8779);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8797;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8860 = state_8779;
state_8779 = G__8860;
continue;
} else {
return ret_value__8520__auto__;
}
break;
}
});
cljs_callback_heaven$core$state_machine__8519__auto__ = function(state_8779){
switch(arguments.length){
case 0:
return cljs_callback_heaven$core$state_machine__8519__auto____0.call(this);
case 1:
return cljs_callback_heaven$core$state_machine__8519__auto____1.call(this,state_8779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_callback_heaven$core$state_machine__8519__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_callback_heaven$core$state_machine__8519__auto____0;
cljs_callback_heaven$core$state_machine__8519__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_callback_heaven$core$state_machine__8519__auto____1;
return cljs_callback_heaven$core$state_machine__8519__auto__;
})()
;})(switch__8518__auto__,c__8539__auto__))
})();
var state__8541__auto__ = (function (){var statearr_8799 = f__8540__auto__.call(null);
(statearr_8799[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8539__auto__);

return statearr_8799;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8541__auto__);
});})(c__8539__auto__))
);

return c__8539__auto__;
});
});

cljs_callback_heaven.core.cb_GT_3.cljs$core$IFn$_invoke$arity$2 = (function (c,E_msg){
return (function (err1,err2,res){
var c__8539__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8539__auto__){
return (function (){
var f__8540__auto__ = (function (){var switch__8518__auto__ = ((function (c__8539__auto__){
return (function (state_8823){
var state_val_8824 = (state_8823[(1)]);
if((state_val_8824 === (7))){
var state_8823__$1 = state_8823;
var statearr_8825_8861 = state_8823__$1;
(statearr_8825_8861[(1)] = (10));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8824 === (1))){
var state_8823__$1 = state_8823;
if(cljs.core.truth_(res)){
var statearr_8827_8862 = state_8823__$1;
(statearr_8827_8862[(1)] = (2));

} else {
var statearr_8828_8863 = state_8823__$1;
(statearr_8828_8863[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8824 === (4))){
var inst_8821 = (state_8823[(2)]);
var state_8823__$1 = state_8823;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8823__$1,inst_8821);
} else {
if((state_val_8824 === (13))){
var inst_8814 = (state_8823[(2)]);
var state_8823__$1 = state_8823;
var statearr_8829_8864 = state_8823__$1;
(statearr_8829_8864[(2)] = inst_8814);

(statearr_8829_8864[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8824 === (6))){
var inst_8806 = (new Error(E_msg));
var inst_8807 = cljs_callback_heaven.core.chan_sanitized.call(null,inst_8806);
var state_8823__$1 = state_8823;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8823__$1,(9),c,inst_8807);
} else {
if((state_val_8824 === (3))){
var state_8823__$1 = state_8823;
if(cljs.core.truth_(err1)){
var statearr_8830_8865 = state_8823__$1;
(statearr_8830_8865[(1)] = (6));

} else {
var statearr_8831_8866 = state_8823__$1;
(statearr_8831_8866[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8824 === (12))){
var inst_8817 = (state_8823[(2)]);
var state_8823__$1 = state_8823;
var statearr_8832_8867 = state_8823__$1;
(statearr_8832_8867[(2)] = inst_8817);

(statearr_8832_8867[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8824 === (2))){
var inst_8801 = cljs_callback_heaven.core.chan_sanitized.call(null,res);
var state_8823__$1 = state_8823;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8823__$1,(5),c,inst_8801);
} else {
if((state_val_8824 === (11))){
var state_8823__$1 = state_8823;
var statearr_8833_8868 = state_8823__$1;
(statearr_8833_8868[(2)] = null);

(statearr_8833_8868[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8824 === (9))){
var inst_8809 = (state_8823[(2)]);
var state_8823__$1 = state_8823;
var statearr_8834_8869 = state_8823__$1;
(statearr_8834_8869[(2)] = inst_8809);

(statearr_8834_8869[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8824 === (5))){
var inst_8803 = (state_8823[(2)]);
var state_8823__$1 = state_8823;
var statearr_8835_8870 = state_8823__$1;
(statearr_8835_8870[(2)] = inst_8803);

(statearr_8835_8870[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8824 === (10))){
var inst_8812 = cljs_callback_heaven.core.chan_sanitized.call(null,E_msg);
var state_8823__$1 = state_8823;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8823__$1,(13),c,inst_8812);
} else {
if((state_val_8824 === (8))){
var inst_8819 = (state_8823[(2)]);
var state_8823__$1 = state_8823;
var statearr_8836_8871 = state_8823__$1;
(statearr_8836_8871[(2)] = inst_8819);

(statearr_8836_8871[(1)] = (4));


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
});})(c__8539__auto__))
;
return ((function (switch__8518__auto__,c__8539__auto__){
return (function() {
var cljs_callback_heaven$core$state_machine__8519__auto__ = null;
var cljs_callback_heaven$core$state_machine__8519__auto____0 = (function (){
var statearr_8840 = [null,null,null,null,null,null,null];
(statearr_8840[(0)] = cljs_callback_heaven$core$state_machine__8519__auto__);

(statearr_8840[(1)] = (1));

return statearr_8840;
});
var cljs_callback_heaven$core$state_machine__8519__auto____1 = (function (state_8823){
while(true){
var ret_value__8520__auto__ = (function (){try{while(true){
var result__8521__auto__ = switch__8518__auto__.call(null,state_8823);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8521__auto__;
}
break;
}
}catch (e8841){if((e8841 instanceof Object)){
var ex__8522__auto__ = e8841;
var statearr_8842_8872 = state_8823;
(statearr_8842_8872[(5)] = ex__8522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8823);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8841;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8873 = state_8823;
state_8823 = G__8873;
continue;
} else {
return ret_value__8520__auto__;
}
break;
}
});
cljs_callback_heaven$core$state_machine__8519__auto__ = function(state_8823){
switch(arguments.length){
case 0:
return cljs_callback_heaven$core$state_machine__8519__auto____0.call(this);
case 1:
return cljs_callback_heaven$core$state_machine__8519__auto____1.call(this,state_8823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_callback_heaven$core$state_machine__8519__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_callback_heaven$core$state_machine__8519__auto____0;
cljs_callback_heaven$core$state_machine__8519__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_callback_heaven$core$state_machine__8519__auto____1;
return cljs_callback_heaven$core$state_machine__8519__auto__;
})()
;})(switch__8518__auto__,c__8539__auto__))
})();
var state__8541__auto__ = (function (){var statearr_8843 = f__8540__auto__.call(null);
(statearr_8843[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8539__auto__);

return statearr_8843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8541__auto__);
});})(c__8539__auto__))
);

return c__8539__auto__;
});
});

cljs_callback_heaven.core.cb_GT_3.cljs$lang$maxFixedArity = 2;
/**
 * Jams the first truthy argument of a callback function into a channel.
 */
cljs_callback_heaven.core.cb_GT__QMARK_ = (function cljs_callback_heaven$core$cb_GT__QMARK_(var_args){
var args8874 = [];
var len__7214__auto___8980 = arguments.length;
var i__7215__auto___8981 = (0);
while(true){
if((i__7215__auto___8981 < len__7214__auto___8980)){
args8874.push((arguments[i__7215__auto___8981]));

var G__8982 = (i__7215__auto___8981 + (1));
i__7215__auto___8981 = G__8982;
continue;
} else {
}
break;
}

var G__8876 = args8874.length;
switch (G__8876) {
case 1:
return cljs_callback_heaven.core.cb_GT__QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_callback_heaven.core.cb_GT__QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8874.length)].join('')));

}
});

cljs_callback_heaven.core.cb_GT__QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (c){
return (function() { 
var G__8984__delegate = function (args){
var c__8539__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8539__auto__){
return (function (){
var f__8540__auto__ = (function (){var switch__8518__auto__ = ((function (c__8539__auto__){
return (function (state_8901){
var state_val_8902 = (state_8901[(1)]);
if((state_val_8902 === (7))){
var inst_8883 = (state_8901[(2)]);
var state_8901__$1 = state_8901;
var statearr_8903_8985 = state_8901__$1;
(statearr_8903_8985[(2)] = inst_8883);

(statearr_8903_8985[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8902 === (1))){
var inst_8877 = args;
var state_8901__$1 = (function (){var statearr_8904 = state_8901;
(statearr_8904[(7)] = inst_8877);

return statearr_8904;
})();
var statearr_8905_8986 = state_8901__$1;
(statearr_8905_8986[(2)] = null);

(statearr_8905_8986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8902 === (4))){
var state_8901__$1 = state_8901;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8901__$1,(7),c,false);
} else {
if((state_val_8902 === (6))){
var inst_8897 = (state_8901[(2)]);
var state_8901__$1 = state_8901;
var statearr_8906_8987 = state_8901__$1;
(statearr_8906_8987[(2)] = inst_8897);

(statearr_8906_8987[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8902 === (3))){
var inst_8899 = (state_8901[(2)]);
var state_8901__$1 = state_8901;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8901__$1,inst_8899);
} else {
if((state_val_8902 === (2))){
var inst_8877 = (state_8901[(7)]);
var inst_8879 = cljs.core.count.call(null,inst_8877);
var inst_8880 = cljs.core._EQ_.call(null,(0),inst_8879);
var state_8901__$1 = state_8901;
if(inst_8880){
var statearr_8907_8988 = state_8901__$1;
(statearr_8907_8988[(1)] = (4));

} else {
var statearr_8908_8989 = state_8901__$1;
(statearr_8908_8989[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8902 === (11))){
var inst_8890 = (state_8901[(2)]);
var state_8901__$1 = state_8901;
var statearr_8909_8990 = state_8901__$1;
(statearr_8909_8990[(2)] = inst_8890);

(statearr_8909_8990[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8902 === (9))){
var inst_8877 = (state_8901[(7)]);
var inst_8892 = cljs.core.rest.call(null,inst_8877);
var inst_8877__$1 = inst_8892;
var state_8901__$1 = (function (){var statearr_8910 = state_8901;
(statearr_8910[(7)] = inst_8877__$1);

return statearr_8910;
})();
var statearr_8911_8991 = state_8901__$1;
(statearr_8911_8991[(2)] = null);

(statearr_8911_8991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8902 === (5))){
var inst_8877 = (state_8901[(7)]);
var inst_8885 = cljs.core.first.call(null,inst_8877);
var state_8901__$1 = state_8901;
if(cljs.core.truth_(inst_8885)){
var statearr_8912_8992 = state_8901__$1;
(statearr_8912_8992[(1)] = (8));

} else {
var statearr_8913_8993 = state_8901__$1;
(statearr_8913_8993[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8902 === (10))){
var inst_8895 = (state_8901[(2)]);
var state_8901__$1 = state_8901;
var statearr_8914_8994 = state_8901__$1;
(statearr_8914_8994[(2)] = inst_8895);

(statearr_8914_8994[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8902 === (8))){
var inst_8877 = (state_8901[(7)]);
var inst_8887 = cljs_callback_heaven.core.chan_sanitized.call(null,inst_8877);
var inst_8888 = cljs.core.first.call(null,inst_8887);
var state_8901__$1 = state_8901;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8901__$1,(11),c,inst_8888);
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
});})(c__8539__auto__))
;
return ((function (switch__8518__auto__,c__8539__auto__){
return (function() {
var cljs_callback_heaven$core$state_machine__8519__auto__ = null;
var cljs_callback_heaven$core$state_machine__8519__auto____0 = (function (){
var statearr_8918 = [null,null,null,null,null,null,null,null];
(statearr_8918[(0)] = cljs_callback_heaven$core$state_machine__8519__auto__);

(statearr_8918[(1)] = (1));

return statearr_8918;
});
var cljs_callback_heaven$core$state_machine__8519__auto____1 = (function (state_8901){
while(true){
var ret_value__8520__auto__ = (function (){try{while(true){
var result__8521__auto__ = switch__8518__auto__.call(null,state_8901);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8521__auto__;
}
break;
}
}catch (e8919){if((e8919 instanceof Object)){
var ex__8522__auto__ = e8919;
var statearr_8920_8995 = state_8901;
(statearr_8920_8995[(5)] = ex__8522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8901);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8919;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8996 = state_8901;
state_8901 = G__8996;
continue;
} else {
return ret_value__8520__auto__;
}
break;
}
});
cljs_callback_heaven$core$state_machine__8519__auto__ = function(state_8901){
switch(arguments.length){
case 0:
return cljs_callback_heaven$core$state_machine__8519__auto____0.call(this);
case 1:
return cljs_callback_heaven$core$state_machine__8519__auto____1.call(this,state_8901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_callback_heaven$core$state_machine__8519__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_callback_heaven$core$state_machine__8519__auto____0;
cljs_callback_heaven$core$state_machine__8519__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_callback_heaven$core$state_machine__8519__auto____1;
return cljs_callback_heaven$core$state_machine__8519__auto__;
})()
;})(switch__8518__auto__,c__8539__auto__))
})();
var state__8541__auto__ = (function (){var statearr_8921 = f__8540__auto__.call(null);
(statearr_8921[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8539__auto__);

return statearr_8921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8541__auto__);
});})(c__8539__auto__))
);

return c__8539__auto__;
};
var G__8984 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8997__i = 0, G__8997__a = new Array(arguments.length -  0);
while (G__8997__i < G__8997__a.length) {G__8997__a[G__8997__i] = arguments[G__8997__i + 0]; ++G__8997__i;}
  args = new cljs.core.IndexedSeq(G__8997__a,0);
} 
return G__8984__delegate.call(this,args);};
G__8984.cljs$lang$maxFixedArity = 0;
G__8984.cljs$lang$applyTo = (function (arglist__8998){
var args = cljs.core.seq(arglist__8998);
return G__8984__delegate(args);
});
G__8984.cljs$core$IFn$_invoke$arity$variadic = G__8984__delegate;
return G__8984;
})()
;
});

cljs_callback_heaven.core.cb_GT__QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (c,E_msg){
return (function() { 
var G__8999__delegate = function (args){
var c__8539__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8539__auto__){
return (function (){
var f__8540__auto__ = (function (){var switch__8518__auto__ = ((function (c__8539__auto__){
return (function (state_8955){
var state_val_8956 = (state_8955[(1)]);
if((state_val_8956 === (7))){
var inst_8928 = (state_8955[(2)]);
var state_8955__$1 = state_8955;
var statearr_8957_9000 = state_8955__$1;
(statearr_8957_9000[(2)] = inst_8928);

(statearr_8957_9000[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8956 === (1))){
var inst_8922 = args;
var state_8955__$1 = (function (){var statearr_8958 = state_8955;
(statearr_8958[(7)] = inst_8922);

return statearr_8958;
})();
var statearr_8959_9001 = state_8955__$1;
(statearr_8959_9001[(2)] = null);

(statearr_8959_9001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8956 === (4))){
var state_8955__$1 = state_8955;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8955__$1,(7),c,E_msg);
} else {
if((state_val_8956 === (15))){
var inst_8942 = (state_8955[(2)]);
var state_8955__$1 = state_8955;
var statearr_8960_9002 = state_8955__$1;
(statearr_8960_9002[(2)] = inst_8942);

(statearr_8960_9002[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8956 === (13))){
var inst_8944 = (state_8955[(2)]);
var state_8955__$1 = state_8955;
var statearr_8961_9003 = state_8955__$1;
(statearr_8961_9003[(2)] = inst_8944);

(statearr_8961_9003[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8956 === (6))){
var inst_8951 = (state_8955[(2)]);
var state_8955__$1 = state_8955;
var statearr_8962_9004 = state_8955__$1;
(statearr_8962_9004[(2)] = inst_8951);

(statearr_8962_9004[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8956 === (3))){
var inst_8953 = (state_8955[(2)]);
var state_8955__$1 = state_8955;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8955__$1,inst_8953);
} else {
if((state_val_8956 === (12))){
var inst_8922 = (state_8955[(7)]);
var inst_8939 = cljs_callback_heaven.core.chan_sanitized.call(null,inst_8922);
var inst_8940 = cljs.core.first.call(null,inst_8939);
var state_8955__$1 = state_8955;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8955__$1,(15),c,inst_8940);
} else {
if((state_val_8956 === (2))){
var inst_8922 = (state_8955[(7)]);
var inst_8924 = cljs.core.count.call(null,inst_8922);
var inst_8925 = cljs.core._EQ_.call(null,(0),inst_8924);
var state_8955__$1 = state_8955;
if(inst_8925){
var statearr_8963_9005 = state_8955__$1;
(statearr_8963_9005[(1)] = (4));

} else {
var statearr_8964_9006 = state_8955__$1;
(statearr_8964_9006[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8956 === (11))){
var inst_8935 = (new Error(E_msg));
var state_8955__$1 = state_8955;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8955__$1,(14),c,inst_8935);
} else {
if((state_val_8956 === (9))){
var inst_8922 = (state_8955[(7)]);
var inst_8946 = cljs.core.rest.call(null,inst_8922);
var inst_8922__$1 = inst_8946;
var state_8955__$1 = (function (){var statearr_8965 = state_8955;
(statearr_8965[(7)] = inst_8922__$1);

return statearr_8965;
})();
var statearr_8966_9007 = state_8955__$1;
(statearr_8966_9007[(2)] = null);

(statearr_8966_9007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8956 === (5))){
var inst_8922 = (state_8955[(7)]);
var inst_8930 = cljs.core.first.call(null,inst_8922);
var state_8955__$1 = state_8955;
if(cljs.core.truth_(inst_8930)){
var statearr_8967_9008 = state_8955__$1;
(statearr_8967_9008[(1)] = (8));

} else {
var statearr_8968_9009 = state_8955__$1;
(statearr_8968_9009[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8956 === (14))){
var inst_8937 = (state_8955[(2)]);
var state_8955__$1 = state_8955;
var statearr_8969_9010 = state_8955__$1;
(statearr_8969_9010[(2)] = inst_8937);

(statearr_8969_9010[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8956 === (10))){
var inst_8949 = (state_8955[(2)]);
var state_8955__$1 = state_8955;
var statearr_8970_9011 = state_8955__$1;
(statearr_8970_9011[(2)] = inst_8949);

(statearr_8970_9011[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8956 === (8))){
var inst_8922 = (state_8955[(7)]);
var inst_8932 = cljs.core.count.call(null,inst_8922);
var inst_8933 = (inst_8932 > (1));
var state_8955__$1 = state_8955;
if(cljs.core.truth_(inst_8933)){
var statearr_8971_9012 = state_8955__$1;
(statearr_8971_9012[(1)] = (11));

} else {
var statearr_8972_9013 = state_8955__$1;
(statearr_8972_9013[(1)] = (12));

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
});})(c__8539__auto__))
;
return ((function (switch__8518__auto__,c__8539__auto__){
return (function() {
var cljs_callback_heaven$core$state_machine__8519__auto__ = null;
var cljs_callback_heaven$core$state_machine__8519__auto____0 = (function (){
var statearr_8976 = [null,null,null,null,null,null,null,null];
(statearr_8976[(0)] = cljs_callback_heaven$core$state_machine__8519__auto__);

(statearr_8976[(1)] = (1));

return statearr_8976;
});
var cljs_callback_heaven$core$state_machine__8519__auto____1 = (function (state_8955){
while(true){
var ret_value__8520__auto__ = (function (){try{while(true){
var result__8521__auto__ = switch__8518__auto__.call(null,state_8955);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8521__auto__;
}
break;
}
}catch (e8977){if((e8977 instanceof Object)){
var ex__8522__auto__ = e8977;
var statearr_8978_9014 = state_8955;
(statearr_8978_9014[(5)] = ex__8522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8955);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8977;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9015 = state_8955;
state_8955 = G__9015;
continue;
} else {
return ret_value__8520__auto__;
}
break;
}
});
cljs_callback_heaven$core$state_machine__8519__auto__ = function(state_8955){
switch(arguments.length){
case 0:
return cljs_callback_heaven$core$state_machine__8519__auto____0.call(this);
case 1:
return cljs_callback_heaven$core$state_machine__8519__auto____1.call(this,state_8955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_callback_heaven$core$state_machine__8519__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_callback_heaven$core$state_machine__8519__auto____0;
cljs_callback_heaven$core$state_machine__8519__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_callback_heaven$core$state_machine__8519__auto____1;
return cljs_callback_heaven$core$state_machine__8519__auto__;
})()
;})(switch__8518__auto__,c__8539__auto__))
})();
var state__8541__auto__ = (function (){var statearr_8979 = f__8540__auto__.call(null);
(statearr_8979[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8539__auto__);

return statearr_8979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8541__auto__);
});})(c__8539__auto__))
);

return c__8539__auto__;
};
var G__8999 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9016__i = 0, G__9016__a = new Array(arguments.length -  0);
while (G__9016__i < G__9016__a.length) {G__9016__a[G__9016__i] = arguments[G__9016__i + 0]; ++G__9016__i;}
  args = new cljs.core.IndexedSeq(G__9016__a,0);
} 
return G__8999__delegate.call(this,args);};
G__8999.cljs$lang$maxFixedArity = 0;
G__8999.cljs$lang$applyTo = (function (arglist__9017){
var args = cljs.core.seq(arglist__9017);
return G__8999__delegate(args);
});
G__8999.cljs$core$IFn$_invoke$arity$variadic = G__8999__delegate;
return G__8999;
})()
;
});

cljs_callback_heaven.core.cb_GT__QMARK_.cljs$lang$maxFixedArity = 2;
cljs_callback_heaven.core.throw_if_err = (function cljs_callback_heaven$core$throw_if_err(x){
if((x instanceof Error)){
throw x;
} else {
return x;
}
});
cljs.core._STAR_main_cli_fn_STAR_ = cljs_callback_heaven.core._main;

//# sourceMappingURL=core.js.map