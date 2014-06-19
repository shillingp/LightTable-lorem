(ns lt.plugins.lorem
  (:require [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool]
            [lt.objs.command :as cmd]
            [clojure.string :as string])
  (:require-macros [lt.macros :refer [behavior]]))


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

(def base_type "paragraph")
(def base_count 1)
(def base_size size_medium)


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

(defn random-element [arr]
  (get arr (rand-int (count arr))))

(defn random-word [size]
  (let [mapped (zipmap all_sizes word_lists)]
    (if (zero? size)
      (random-element all_words)
      (random-element (mapped size)))))

(defn random-words [count]
  (let [out-text (atom [])]
    (dotimes [i count]
      (swap! out-text conj
             " " (random-word size_any)))
    (reset! out-text
            (string/trim (apply str @out-text)))))

(defn random-fragment []
  (let [out-text (atom [])
        pattern (random-element fragment_patterns)]
    (dotimes [i (count pattern)]
      (swap! out-text conj
             " " (random-word (get pattern i))))
    (reset! out-text
            (string/trim (apply str @out-text)))))

(defn sentence-inter []
  (if (< (rand) 0.5)
    ", " (str " " (random-word size_short) " ")))

(defn sentence-connector [size]
  (str (random-sentence (- size 1))
       (sentence-inter)
       (random-sentence (- size 1))))

(defn random-sentence [size]
  (case size
    0 (random-sentence (random-element all_sizes))
    1 (random-fragment)
    2 (sentence-connector size)
    3 (sentence-connector size)
    4 (sentence-connector size)
    (random-sentence base_size)))

(defn random-sentences [count size]
  (let [out-text (atom [])]
    (dotimes [i count]
      (swap! out-text conj
             (string/capitalize (random-sentence size))
             ". "))
    (reset! out-text
            (string/trim (apply str @out-text)))))

(defn random-paragraph [size]
  (case size
    1 (let [out-text (atom [])]
        (dotimes [i (+ 3 (rand-int 2))]
          (swap! out-text conj
                 (string/capitalize (random-sentence size_any)) ". "))
        (reset! out-text (apply str @out-text)))
    2 (str (random-paragraph size_short)
           (random-paragraph size_short))
    3 (str (random-paragraph size_medium)
           (random-paragraph size_medium))
    4 (str (random-paragraph size_long)
           (random-paragraph size_long))
    (random-paragraph base_size)))

(defn random-paragraphs [count size]
  (let [out-text (atom [])]
    (dotimes [i count]
      (swap! out-text conj
             (if (< (inc i) count)
               (str
                (string/trim (random-paragraph size))
                "\n\n")
               para)))
    (reset! out-text (apply str @out-text))))

(defn call-args [optStr optInt arg]
  (let [optInt (if (empty? optInt) base_count (js/parseInt optInt))
        config (atom {:type base_type :count optInt :size base_size})
        settings {"p" {:type "paragraph"}
                  "w" {:type "word"}
                  "s" {:type "sentence"}
                  "short" {:size size_short}
                  "medium" {:size size_medium}
                  "long" {:size size_long}
                  "vlong" {:size size_very_long}}]
    (reset! config
            (if-let [form (first (settings optStr))]
              (assoc @config (form 0) (form 1))
              (assoc @config :type arg)))
    (run-command @config)))

(defn run-command [c]
  (case (c :type)
    "paragraph" (random-paragraphs (c :count) (c :size))
    "sentence" (random-sentences (c :count) (c :size))
    "word" (random-words (c :count))
    (str "Error: Invalid option \"_" (c :type) "\"")))

(defn lorem-plain []
  (let [basic {:type base_type
               :count base_count
               :size base_size}]
        (run-command basic)))

(defn parse-args [arg]
  (if-let [opt-res (re-find #"^([a-z\?]+)(\d*)$" arg)]
    (call-args (get opt-res 1) (get opt-res 2) arg)
    (if-let [opt-res (re-find #"^(\d*)([a-z\?]+)$" arg)]
      (call-args (get opt-res 2) (get opt-res 1) arg)
      (str "Error: Invalid option \"_" arg "\""))))

(defn parse-command [command]
  (let [command-array (string/split command #"_")]
    (for [i (range 1 (count command-array))]
      (parse-args (get command-array i)))))

(defn lorem-ipsum-catch []
  (let [cm (editor/->cm-ed (pool/last-active))
        coords (editor/->cursor cm)
        pre-pos (.findPosH cm (clj->js coords) -1 "word" true)
        pre-word (editor/range cm pre-pos coords)]
    (if-let [in-str (re-find #"lorem_.\S*" pre-word)]
      (if-not (zero? (coords :ch))
        (->>
         (apply str (parse-command in-str))
         (editor/replace cm pre-pos coords)))
      (editor/insert-at-cursor
       cm (lorem-plain)))))

(cmd/command {:command :lorem-ipsum
              :desc "Lorem Ipsum random text generator"
              :exec lorem-ipsum-catch})
