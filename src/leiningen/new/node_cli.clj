(ns leiningen.new.node-cli
  (:require  [leiningen.new.templates :refer
             [renderer name-to-path ->files]]))

(def render (renderer "node-cli"))

(defn node-cli [name]
  (let [data {:name name
              :sanitized (name-to-path name)}]
    (->files data
      ["project.clj" (render "project.clj" data)]

      ["index.js" (render "index.js" data)]
      ["externs.js" (render "externs.js" data)]

      ["src/{{sanitized}}/core.cljs" (render "core.cljs" data)]

      ["test/{{sanitized}}/core_test.cljs" (render "core_test.cljs" data)]
      ["test/{{sanitized}}/runner.cljs" (render "runner.cljs" data)]

      ["src/cljs_callback_heaven/core.cljs" (render "cb-heaven-core.cljs" data)]
      ["src/cljs_callback_heaven/macros.clj" (render "cb-heaven-macros.clj" data)]

      ["README.md" (render "README.md" data)]
      [".gitignore" (render "gitignore" data)]

      ["TODO" (render "TODO" data) :executable true]

      ["scripts/repl" (render "repl" data) :executable true]
      ["scripts/repl.clj" (render "repl.clj" data)]

      ["scripts/watch-advanced" (render "watch-advanced" data) :executable true]
      ["scripts/watch-none" (render "watch-none" data) :executable true]

      ["scripts/build-advanced" (render "build-advanced" data) :executable true]
      ["scripts/build-none" (render "build-none" data) :executable true]

      ["scripts/test-advanced" (render "test-advanced" data) :executable true]
      ["scripts/test-none" (render "test-none" data) :executable true]

      ["scripts/tmuxomatic-session" (render "tmuxomatic-session" data)]
)))
