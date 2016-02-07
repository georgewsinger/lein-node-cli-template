(ns cljs-callback-heaven.macros)

(defmacro <cb? 
  ([func]
    (let [c (gensym "c")]
      `(cljs.core.async.macros/go 
         (let [~c (cljs.core.async/chan 1)]
           ~(replace {'_ `(cljs-callback-heaven.core/cb>? ~c)} func)
           (cljs.core.async/<! ~c)))))
  ([func E-msg]
    (let [c (gensym "c")]
      `(cljs.core.async.macros/go 
         (let [~c (cljs.core.async/chan 1)]
           ~(replace {'_ `(cljs-callback-heaven.core/cb>? ~c ~E-msg)} func)
           (cljs.core.async/<! ~c))))))

(defmacro <cb1 
  ([func]
    (let [c (gensym "c")]
      `(cljs.core.async.macros/go 
         (let [~c (cljs.core.async/chan 1)]
           ~(replace {'_ `(cljs-callback-heaven.core/cb>1 ~c)} func)
           (cljs.core.async/<! ~c)))))
  ([func E-msg]
    (let [c (gensym "c")]
      `(cljs.core.async.macros/go 
         (let [~c (cljs.core.async/chan 1)]
           ~(replace {'_ `(cljs-callback-heaven.core/cb>1 ~c ~E-msg)} func)
           (cljs.core.async/<! ~c))))))

(defmacro <cb2 
  ([func]
    (let [c (gensym "c")]
      `(cljs.core.async.macros/go 
         (let [~c (cljs.core.async/chan 1)]
           ~(replace {'_ `(cljs-callback-heaven.core/cb>2 ~c)} func)
           (cljs.core.async/<! ~c)))))
  ([func E-msg]
    (let [c (gensym "c")]
      `(cljs.core.async.macros/go 
         (let [~c (cljs.core.async/chan 1)]
           ~(replace {'_ `(cljs-callback-heaven.core/cb>2 ~c ~E-msg)} func)
           (cljs.core.async/<! ~c))))))

(defmacro <cb3 
  ([func]
    (let [c (gensym "c")]
      `(cljs.core.async.macros/go 
         (let [~c (cljs.core.async/chan 1)]
           ~(replace {'_ `(cljs-callback-heaven.core/cb>3 ~c)} func)
           (cljs.core.async/<! ~c)))))
  ([func E-msg]
    (let [c (gensym "c")]
      `(cljs.core.async.macros/go 
         (let [~c (cljs.core.async/chan 1)]
           ~(replace {'_ `(cljs-callback-heaven.core/cb>3 ~c ~E-msg)} func)
           (cljs.core.async/<! ~c))))))

;; David Nolen's `<?` macro

(defmacro <?
  "Actively throw an exception if something goes wrong when waiting on a channel message."
  [expr]
  `(cljs-callback-heaven.core/throw-if-err (cljs.core.async/<! ~expr)))
