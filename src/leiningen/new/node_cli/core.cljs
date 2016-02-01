(ns {{name}}.core (:require        [cljs.nodejs              :as            node]
                                   [cljs.core.async          :refer        [buffer offer! poll! close! take! put! chan <! >! alts!]])
                  (:require-macros [cljs.core.async.macros   :refer        [go go-loop]]))

(node/enable-util-print!) ; allows (println ..) to print to console.log

(defn -main [& args]
  (let [minimist (cljs.nodejs/require "minimist")
          argv     (minimist (clj->js (vec args)))              ; minimist's main command object
          e        (or (.-e argv) "e option")                   ; a useful pattern for grabbing -options
          arg      (or (aget (aget argv "_") 0) "default_arg")] ; the primary, optionless argument
  
  (println argv))) 

(set! *main-cli-fn* -main) ; sends node's process.argv to -main
