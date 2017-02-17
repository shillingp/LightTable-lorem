(ns lt.plugins.lorem
  (:require [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool]
            [lt.objs.command :as cmd]
            [clojure.string :as string])
  (:require-macros [lt.macros :refer [defui behavior]]))

(def size_any 0)
(def size_short 1)
(def size_medium 2)
(def size_long 3)
(def size_very_long 4)
(def all_sizes [size_short size_medium size_long size_very_long])

(def short_words ["a" "ab" "ad" "an" "aut" "de" "do" "e" "ea" "est" "et" "eu" "ex" "hic" "id" "iis" "in" "ita" "nam" "ne" "non" "o" "qui" "quo" "se" "sed" "si" "te" "ubi" "ut"])
(def medium_words ["amet" "aliqua" "anim" "aute" "cillum" "culpa" "dolor" "dolore" "duis" "elit" "enim" "eram" "esse" "fore" "fugiat" "illum" "ipsum" "irure" "labore" "legam" "lorem" "magna" "malis" "minim" "multos" "nisi" "noster" "nulla" "quae" "quem" "quid" "quis" "quorum" "sint" "summis" "sunt" "tamen" "varias" "velit" "veniam"])
(def long_words ["admodum" "aliquip" "appellat" "arbitror" "cernantur" "commodo" "consequat" "cupidatat" "deserunt" "doctrina" "eiusmod" "excepteur" "expetendis" "fabulas" "incididunt" "incurreret" "ingeniis" "iudicem" "laboris" "laborum" "litteris" "mandaremus" "mentitum" "nescius" "nostrud" "occaecat" "officia" "offendit" "pariatur" "possumus" "probant" "proident" "quamquam" "quibusdam" "senserit" "singulis" "tempor" "ullamco" "vidisse" "voluptate"])
(def very_long_words ["adipisicing" "arbitrantur" "cohaerescant" "comprehenderit" "concursionibus" "coniunctione" "consectetur" "despicationes" "distinguantur" "domesticarum" "efflorescere" "eruditionem" "exquisitaque" "exercitation" "familiaritatem" "fidelissimae" "firmissimum" "graviterque" "illustriora" "instituendarum" "imitarentur" "philosophari" "praesentibus" "praetermissum" "relinqueret" "reprehenderit" "sempiternum" "tractavissent" "transferrem" "voluptatibus"])
(def word_lists [short_words medium_words long_words very_long_words])
(def all_words (into [] (flatten word_lists)))

(def counter (atom 0))
(def config (atom {}))

(def base (atom {:type "paragraph"
                 :count 1
                 :size size_medium}))

(def bindings {"p" {:type "paragraph"}
               "s" {:type "sentence"}
               "w" {:type "word"}
               "short" {:size size_short}
               "medium" {:size size_medium}
               "long" {:size size_long}
               "vlong" {:size size_very_long}})

(def search-reg #"lorem_.\S*")

(def fragment_patterns [;; Three words
                        [size_short size_medium size_long]
                        [size_short size_medium size_very_long]
                        [size_short size_short size_very_long]
                        [size_short size_long size_very_long]
                        [size_medium size_long size_long]
                        [size_medium size_long size_very_long]
                        [size_medium size_short size_long]
                        [size_long size_short size_medium]
                        [size_long size_short size_long]
                        [size_long size_medium size_long]
                        ;; Four words
                        [size_short size_short size_medium size_long]
                        [size_short size_medium size_short size_medium]
                        [size_short size_medium size_long size_long]
                        [size_short size_medium size_long size_very_long]
                        [size_short size_long size_short size_long]
                        [size_medium size_long size_short size_long]
                        [size_medium size_long size_short size_very_long]
                        [size_long size_short size_medium size_long]
                        [size_long size_medium size_long size_long]
                        [size_long size_very_long size_short size_long]
                        ;; Five words
                        [size_short size_short size_medium size_medium size_medium]
                        [size_short size_medium size_medium size_short size_long]
                        [size_short size_medium size_medium size_medium size_long]
                        [size_medium size_short size_short size_medium size_long]
                        [size_medium size_short size_long size_short size_medium]
                        [size_medium size_long size_short size_medium size_medium]
                        [size_medium size_very_long size_long size_medium size_long]
                        [size_long size_medium size_short size_long size_very_long]
                        [size_long size_medium size_medium size_short size_medium]
                        [size_long size_medium size_medium size_long size_medium]])

(defn apply-trim
  [arr]
  (->> (apply str arr)
       (string/trim)))

(defn random-word [size]
  (let [mapped (zipmap all_sizes word_lists)]
    (if (zero? size)
      (rand-nth all_words)
      (rand-nth (mapped size)))))

(defn random-words
  [count]
  (apply-trim
    (for [i (range count)]
      (->> (random-word size_any)
           (str " ")))))

(defn random-fragment []
  (let [pattern (rand-nth fragment_patterns)]
    (apply-trim
      (for [i (range (count pattern))]
        (->> (get pattern i)
             (random-word)
             (str " "))))))

(defn sentence-inter []
  (if (< (rand) 0.5)
    ", " (str " " (random-word size_short) " ")))

(defn sentence-connector [size]
  (letfn [(rand-side [] (random-sentence (dec size)))]
    (str (rand-side)
         (sentence-inter)
         (rand-side))))

(defn random-sentence [size]
  (case size
    0 (random-sentence (rand-nth all_sizes))
    1 (random-fragment)
    2 (sentence-connector size)
    3 (sentence-connector size)
    4 (sentence-connector size)
    (random-sentence (base :size))))

(defn random-sentences
  [count size]
  (apply-trim
    (for [i (range count)]
      (-> (random-sentence size)
          (string/capitalize)
          (str ". \n\n")))))

(defn random-paragraph [size]
  (letfn [(two-of [x] (apply str (repeat 2 (random-paragraph x))))]
    (case size
      1 (apply-trim
          (for [i (range (+ 3 (rand-int 2)))]
            (-> (random-sentence size_any)
                (string/capitalize)
                (str ". "))))
      2 (two-of size_short)
      3 (two-of size_medium)
      4 (two-of size_long)
      (random-paragraph (base :size)))))

(defn random-paragraphs [count size]
  (apply-trim
    (for [i (range count)]
      (-> (random-paragraph size)
          (str "\n\n")))))

(defn call-args [optStr optInt arg]
  (swap! counter dec)
  (if (not-empty optInt)
    (swap! config assoc :count optInt))
  (swap! config merge (if-let [form (first (bindings optStr))]
                        {(form 0) (form 1)} {:type arg}))
  (if (zero? @counter)
    (run-command @config)))

(defn run-command [c]
  (case (c :type)
    "paragraph" (random-paragraphs (c :count) (c :size))
    "sentence" (random-sentences (c :count) (c :size))
    "word" (random-words (c :count))
    (str "Error: Invalid option \"_" (c :type) "\"")))

(defn parse-args [arg]
  (if-let [opt-res (re-find #"^([a-z\?]+)(\d*)$" arg)]
    (call-args (get opt-res 1) (get opt-res 2) arg)
    (if-let [opt-res (re-find #"^(\d*)([a-z\?]+)$" arg)]
      (call-args (get opt-res 2) (get opt-res 1) arg)
      (str "Error: Invalid option \"_" arg "\""))))

(defn parse-command [command]
  (let [command-array (string/split command #"_")]
    (reset! counter (dec (count command-array)))
    (for [i (range 1 (count command-array))]
      (parse-args (get command-array i)))))

(defn check-command [cm]
  (let [coords (editor/->cursor cm)
        pre-pos (.findPosH cm (clj->js coords) -1 "word" true)
        word-range (editor/range cm pre-pos coords)]
    (if-let [in-str (re-find search-reg word-range)]
      (if-not (zero? (coords :ch))
        (->> (apply str (parse-command in-str))
             (editor/replace cm pre-pos coords)))
      (editor/insert-at-cursor cm (run-command @base)))))



(defn lorem-ipsum-catch []
  (let [cm (editor/->cm-ed (pool/last-active))]
    (reset! config @base)
    (check-command cm)))

(cmd/command {:command :lorem-ipsum
              :desc "Lorem: Run text generator"
              :exec lorem-ipsum-catch})
