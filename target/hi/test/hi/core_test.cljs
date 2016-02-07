;  _____         _        
; |_   _|__  ___| |_ ___  
;   | |/ _ \/ __| __/ __| 
;   | |  __/\__ \ |_\__ \ 
;   |_|\___||___/\__|___/ 
;                         

(ns hi.core-test
  (:require        [hi.core :as core]
						       [cljs.test :refer-macros [deftest is testing run-tests async]] ; notice in particular the `async` macro
                   [cljs.nodejs :as node]
                   [cljs.core.async :refer [buffer offer! poll! close! take! put! chan <! >! alts!]]
                   [clojure.string :as s]) ; often useful when testing
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]))

(deftest core-tests
  (async done
   (testing "Sample test using the async macro."
     (go (is (= (<! (go "chan_val")) "chan_val"))
         (done)))))
