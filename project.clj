(defproject dot-drop "0.0.1-SNAPSHOT" ; "SNAPSHOT" is a maven term; it means "development version", and is contrasted with "release"

  :description "N/A" ; searchable from Clojars
  :url         "N/A" ; searchable from Clojars

  ;; this project would show up as MIT licensed in Clojars
  :license {:name "MIT"
            :url  "http://opensource.org/licenses/MIT"}

  ;; Maven, Clojars dependencies
  :dependencies [[org.clojure/clojure       "1.8.0"]
                 [org.clojure/clojurescript "1.7.228"]
                 [com.cemerick/piggieback "0.2.1"]
                 [org.clojure/tools.nrepl "0.2.10"]
                 [org.clojure/core.async "0.2.374"]]

  :npm {:dependencies [[minimist "1.2.0"]
                       [expand-home-dir "0.0.2"]]
        
        :package {:name "drop-dot"
                        :version "0.0.2"
                        :bin "lib/drop-dot.js"
                        :description "CLI utility to sync config files, dot files, and directories across UNIX machines using Dropbox."
                        :main "lib/drop-dot.js"
                        :repository {:type "git" :url "git+https://github.com/georgewsinger/drop-dot.git"}
                        :keywords ["dropbox" "sync" "config" "dot" "dotfile"]
                        :author "George Singer"
                        :license "MIT"
                        :private false
                        :homepage "https://github.com/georgewsinger/drop-dot#readme"}}

  :plugins [[org.bodil/lein-noderepl "0.1.11"]
            [lein-cljsbuild           "1.1.2"]
            [lein-npm                 "0.6.1"]
            [lein-repls               "1.9.5"]
            [lein-doo                 "0.1.6"]]

  ;:hooks [leiningen.cljsbuild]

  :profiles {
    :dev {
      :dependencies [[com.cemerick/piggieback "0.2.1"]
                     [org.clojure/tools.nrepl "0.2.10"]]

      :repl-options {
        :nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}}}

  :cljsbuild {
    :builds {
      :main {
        :source-paths ["src"]
        :compiler {
        :optimizations :advanced
        :target        :nodejs
        :output-dir    "out"
        :output-to     "lib/drop-dot.js"
        :externs       ["externs.js"]
        :verbose       true
        :pretty-print  true }}

      :node-test {
        :source-paths ["src" "test"]
        :compiler {
        :optimizations :none
        :target        :nodejs
        :output-dir    "out-test"
        :output-to     "lib/testable.js"
        :externs       ["externs1.js"]
        :verbose       true
        :main          drop-dot.runner
        :pretty-print  true }}
}})
