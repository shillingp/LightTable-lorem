Light Table Lorem Ipsum Plugin
==============================

Lorem Ipsum text generator plugin written in Clojure for LightTable IDE

###How to use
For basic lorem ipsum text using the default settings just use the keybind  `ctrl+l`.

The other way to generate text is be using the prefix lorem_ and defining options after this. Once the keybind is triggered any command to the left of cursor will be registered.

**lorem_w[times]** Return a number of random words. e.g.`lorem_w20` will give a collection of 20 random words. Use `lorem_w` for single word.

**lorem_s[times]** Return a number of randomly generated sentences. e.g.`lorem_s2` will produce 3 sentences. Use `lorem_s` for single sentence.

**lorem_p[times]** Return a number of randomely generated paragraphs. e.g. `lorem_p4` will produce 4 seperate paragraphs of random sentences. Use `lorem_p` for single paragraph.


**lorem_short** | **lorem_medium** | **lorem_long** | **lorem_vlong**<br>
Each of these will apply as a modifier to the sentence and paragraph commands.
`lorem_s4_vlong` will produce 4 long sentences. It does not affect `_word`. These options can be applied on there own `lorem_short` and will act on the base unit type which by default is `paragraph`.

###TODO
* Add more features including a "live" info of options of typed command.
* Create commands to change default settings during a session.
* Move all default options to single map.


#####Based on Lorem Ipsum for Brackets editor

###License
MIT Licensed: See LICENSE for details.
