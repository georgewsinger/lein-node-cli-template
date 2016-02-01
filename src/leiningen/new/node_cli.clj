(ns leiningen.new.node-cli
  (:require  [leiningen.new.templates :refer
             [renderer name-to-path ->files]]))

(def render (renderer "node-cli"))

(defn node-cli [name]
  (let [data {:name name
              :sanitized (name-to-path name)}]
    (->files data
      ["project.clj" (render "project.clj" data)]
      ["src/{{sanitized}}/core.cljs" (render "core.cljs" data)]

      ["test/{{sanitized}}/core_test.cljs" (render "core_test.cljs" data)]
      ["test/{{sanitized}}/runner.clj" (render "runner.clj" data)]

      ["README.md" (render "README.md" data)]
      [".gitignore" (render "gitignore" data)]

      ["TODO" (render "TODO" data) :executable true]

      ["scripts/repl" (render "repl" data) :executable true]
      ["scripts/repl.clj" (render "repl.clj" data)]

      ["scripts/watch-advanced" (render "watch" data) :executable true]
      ["scripts/watch-advanced.clj" (render "watch.clj" data)]
      ["scripts/watch-none" (render "watch-none" data) :executable true]
      ["scripts/watch-none.clj" (render "watch-none.clj" data)]

      ["scripts/build-advanced" (render "build-advanced" data) :executable true]
      ["scripts/build-advanced.clj" (render "build-advanced.clj" data)]
      ["scripts/build-none" (render "build-none" data) :executable true]
      ["scripts/build-none.clj" (render "build-none.clj" data)]
)))
