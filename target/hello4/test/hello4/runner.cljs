(ns hello4.runner
    (:require [doo.runner :refer-macros [doo-tests]]
              [hello4.core-test]))

(doo-tests 'hello4.core-test)
