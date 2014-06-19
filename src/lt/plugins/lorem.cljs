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

(def default_unit_type "paragraph")
(def default_unit_count 1)
(def default_unit_size size_medium)

(def allsizes [size_short size_medium size_long size_very_long])
(def shortwords ["a" "ab" "ad" "an" "aut" "de" "do" "e" "ea" "est" "et" "eu" "ex" "hic" "id" "iis" "in" "ita" "nam" "ne" "non" "o" "qui" "quo" "se" "sed" "si" "te" "ubi" "ut"])
(def mediumwords ["amet" "aliqua" "anim" "aute" "cillum" "culpa" "dolor" "dolore" "duis" "elit" "enim" "eram" "esse" "fore" "fugiat" "illum" "ipsum" "irure" "labore" "legam" "lorem" "magna" "malis" "minim" "multos" "nisi" "noster" "nulla" "quae" "quem" "quid" "quis" "quorum" "sint" "summis" "sunt" "tamen" "varias" "velit" "veniam"])
(def longwords ["admodum" "aliquip" "appellat" "arbitror" "cernantur" "commodo" "consequat" "cupidatat" "deserunt" "doctrina" "eiusmod" "excepteur" "expetendis" "fabulas" "incididunt" "incurreret" "ingeniis" "iudicem" "laboris" "laborum" "litteris" "mandaremus" "mentitum" "nescius" "nostrud" "occaecat" "officia" "offendit" "pariatur" "possumus" "probant" "proident" "quamquam" "quibusdam" "senserit" "singulis" "tempor" "ullamco" "vidisse" "voluptate"])
(def verylongwords ["adipisicing" "arbitrantur" "cohaerescant" "comprehenderit" "concursionibus" "coniunctione" "consectetur" "despicationes" "distinguantur" "domesticarum" "efflorescere" "eruditionem" "exquisitaque" "exercitation" "familiaritatem" "fidelissimae" "firmissimum" "graviterque" "illustriora" "instituendarum" "imitarentur" "philosophari" "praesentibus" "praetermissum" "relinqueret" "reprehenderit" "sempiternum" "tractavissent" "transferrem" "voluptatibus"])
(def allwords (into [] (concat shortwords mediumwords longwords verylongwords)))

(def fragment_patterns [
                        ;; Three words
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
                        [size_long size_medium size_medium size_long size_medium]
                        ])



(defn getRandomElement [arr]
  (get arr (rand-int (count arr))))

(defn getRandomWord [size]
  (->
   (case size
     0 allwords
     1 shortwords
     2 mediumwords
     3 longwords
     4 verylongwords
     allwords)
   (getRandomElement)))

(defn getRandomWords [count]
  (let [outText (atom [])]
    (dotimes [i count]
      (swap! outText conj
             " " (getRandomWord size_any)))
    (reset! outText
            (string/trim (apply str @outText)))))



(defn getRandomFragment []
  (let [outText (atom [])
        pattern (getRandomElement fragment_patterns)]
    (dotimes [i (count pattern)]
      (swap! outText conj
             " " (getRandomWord (get pattern i))))
    (reset! outText
            (string/trim (apply str @outText)))))



(defn sentenceConnector []
  (if (< (rand) 0.5)
    ", "
    (str " " (getRandomWord size_short) " ")))



(defn getRandomSentence [size]
  (case size
    0 (getRandomSentence (getRandomElement allsizes))
    1 (getRandomFragment)
    2 (str (getRandomSentence size_short)
           (sentenceConnector)
           (getRandomSentence size_short))
    3 (str (getRandomSentence size_medium)
           (sentenceConnector)
           (getRandomSentence size_medium))
    4 (str (getRandomSentence size_long)
           (sentenceConnector)
           (getRandomSentence size_long))
    (getRandomSentence default_unit_size)))



(defn getRandomSentences [count size]
  (let [outText (atom [])]
    (dotimes [i count]
      (swap! outText conj
             (string/capitalize (getRandomSentence size))
             ". "))
    (reset! outText
            (string/trim
             (apply str @outText)))))

(defn getRandomParagraph [size]
  (case size
    1 (let [outText (atom [])]
        (dotimes [i (+ 3 (rand-int 2))]
          (swap! outText conj
                 (string/capitalize (getRandomSentence size_any))
                 ". "))
        (reset! outText (apply str @outText)))
    2 (str (getRandomParagraph size_short)
           (getRandomParagraph size_short))
    3 (str (getRandomParagraph size_medium)
           (getRandomParagraph size_medium))
    4 (str (getRandomParagraph size_long)
           (getRandomParagraph size_long))
    (getRandomParagraph default_unit_size)))

(defn getRandomParagraphs [count size]
  (let [outText (atom [])]
    (dotimes [i count]
      (swap! outText conj
             (string/trim (getRandomParagraph size))))
    (reset! outText (apply str @outText))))

(defn runCommand [c]
  (case (c :unitType)
    "paragraph" (getRandomParagraphs (c :unitCount) (c :unitSize))
    "sentence" (getRandomSentences (c :unitCount) (c :unitSize))
    "word" (getRandomWords (c :unitCount))
    "default"))

(defn callArgs [optStr optInt]
  (let [optInt (if (empty? optInt)
                 default_unit_count (js/parseInt optInt))
        config (atom {:unitType default_unit_type
                      :unitCount optInt
                      :unitSize default_unit_size})]
    (reset! config
            (case optStr
              "p" (assoc @config :unitType "paragraph")
              "w" (assoc @config :unitType "word")
              "s" (assoc @config :unitType "sentence")
              "short" (assoc @config :unitSize size_short)
              "medium" (assoc @config :unitSize size_medium)
              "long" (assoc @config :unitSize size_long)
              "vlong" (assoc @config :unitSize size_very_long)
              "default"))
    (runCommand @config)))

(defn parseArgs [arg]
  (if-let [optRes (re-find #"^([a-z\?]+)(\d*)$" arg)]
    (callArgs (get optRes 1) (get optRes 2))
    (if-let [optRes (re-find #"^(\d*)([a-z\?]+)$" arg)]
      (callArgs (get optRes 2) (get optRes 1))
      (str "Error: Unrecognized option '_" arg "'."))))

(defn parseCommand [command]
  (let [commandArray (string/split command #"_")]
    (for [i (range 1 (count commandArray))]
      (parseArgs (get commandArray i)))))

(defn find-command [string]
  (if-let [command (re-find #"lorem_.\S*" string)]
    (apply str (parseCommand command))))

;; (defn lorem-ipsum-catch []
;;   (let [cm (editor/->cm-ed (pool/last-active))
;;         from #js {:line (.-line (.getCursor cm)) :ch 0}
;;         line-range (.getRange cm from (.getCursor cm))
;;         searcher (re-find #"lorem_.\S*" line-range)]
;;     (if searcher
;;       (do (js/CodeMirror.commands.find
;;            cm searcher false)
;;         (js/CodeMirror.commands.replace
;;          cm (apply str (parseCommand searcher)) false true)))))

(defn lorem-ipsum-catch []
  (let [cm (editor/->cm-ed (pool/last-active))
        coords (editor/->cursor cm)
        pre-word (.findPosH cm (clj->js coords) -1 "word" true)]



    (editor/range cm pre-word coords)
    (editor/replace cm pre-word coords "foo")))


(cmd/command {:command :lorem-ipsum
              :desc "Lorem Ipsum random text generator"
              :exec lorem-ipsum-catch})
