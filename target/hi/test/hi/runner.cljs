(ns hi.runner
    (:require [doo.runner :refer-macros [doo-tests]]
              [hi.core-test]))

(doo-tests 'hi.core-test)
