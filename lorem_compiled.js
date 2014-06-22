if(!lt.util.load.provided_QMARK_('lt.plugins.lorem')) {
goog.provide('lt.plugins.lorem');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('lt.objs.command');
goog.require('lt.objs.command');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor');
lt.plugins.lorem.size_any = 0;
lt.plugins.lorem.size_short = 1;
lt.plugins.lorem.size_medium = 2;
lt.plugins.lorem.size_long = 3;
lt.plugins.lorem.size_very_long = 4;
lt.plugins.lorem.all_sizes = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_short,lt.plugins.lorem.size_medium,lt.plugins.lorem.size_long,lt.plugins.lorem.size_very_long], null);
lt.plugins.lorem.short_words = new cljs.core.PersistentVector(null, 30, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","ab","ad","an","aut","de","do","e","ea","est","et","eu","ex","hic","id","iis","in","ita","nam","ne","non","o","qui","quo","se","sed","si","te","ubi","ut"], null);
lt.plugins.lorem.medium_words = cljs.core.PersistentVector.fromArray(["amet","aliqua","anim","aute","cillum","culpa","dolor","dolore","duis","elit","enim","eram","esse","fore","fugiat","illum","ipsum","irure","labore","legam","lorem","magna","malis","minim","multos","nisi","noster","nulla","quae","quem","quid","quis","quorum","sint","summis","sunt","tamen","varias","velit","veniam"], true);
lt.plugins.lorem.long_words = cljs.core.PersistentVector.fromArray(["admodum","aliquip","appellat","arbitror","cernantur","commodo","consequat","cupidatat","deserunt","doctrina","eiusmod","excepteur","expetendis","fabulas","incididunt","incurreret","ingeniis","iudicem","laboris","laborum","litteris","mandaremus","mentitum","nescius","nostrud","occaecat","officia","offendit","pariatur","possumus","probant","proident","quamquam","quibusdam","senserit","singulis","tempor","ullamco","vidisse","voluptate"], true);
lt.plugins.lorem.very_long_words = new cljs.core.PersistentVector(null, 30, 5, cljs.core.PersistentVector.EMPTY_NODE, ["adipisicing","arbitrantur","cohaerescant","comprehenderit","concursionibus","coniunctione","consectetur","despicationes","distinguantur","domesticarum","efflorescere","eruditionem","exquisitaque","exercitation","familiaritatem","fidelissimae","firmissimum","graviterque","illustriora","instituendarum","imitarentur","philosophari","praesentibus","praetermissum","relinqueret","reprehenderit","sempiternum","tractavissent","transferrem","voluptatibus"], null);
lt.plugins.lorem.word_lists = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.short_words,lt.plugins.lorem.medium_words,lt.plugins.lorem.long_words,lt.plugins.lorem.very_long_words], null);
lt.plugins.lorem.all_words = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.flatten.call(null,lt.plugins.lorem.word_lists));
lt.plugins.lorem.counter = cljs.core.atom.call(null,0);
lt.plugins.lorem.config = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
lt.plugins.lorem.base = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"paragraph",new cljs.core.Keyword(null,"count","count",1108755585),1,new cljs.core.Keyword(null,"size","size",1017434995),lt.plugins.lorem.size_medium], null));
lt.plugins.lorem.bindings = new cljs.core.PersistentArrayMap(null, 7, ["p",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),"paragraph"], null),"s",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),"sentence"], null),"w",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),"word"], null),"short",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1017434995),lt.plugins.lorem.size_short], null),"medium",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1017434995),lt.plugins.lorem.size_medium], null),"long",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1017434995),lt.plugins.lorem.size_long], null),"vlong",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1017434995),lt.plugins.lorem.size_very_long], null)], null);
lt.plugins.lorem.search_reg = /lorem_.\S*/;
lt.plugins.lorem.fragment_patterns = new cljs.core.PersistentVector(null, 30, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_short,lt.plugins.lorem.size_medium,lt.plugins.lorem.size_long], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_short,lt.plugins.lorem.size_medium,lt.plugins.lorem.size_very_long], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_short,lt.plugins.lorem.size_short,lt.plugins.lorem.size_very_long], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_short,lt.plugins.lorem.size_long,lt.plugins.lorem.size_very_long], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_medium,lt.plugins.lorem.size_long,lt.plugins.lorem.size_long], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_medium,lt.plugins.lorem.size_long,lt.plugins.lorem.size_very_long], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_medium,lt.plugins.lorem.size_short,lt.plugins.lorem.size_long], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_long,lt.plugins.lorem.size_short,lt.plugins.lorem.size_medium], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_long,lt.plugins.lorem.size_short,lt.plugins.lorem.size_long], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_long,lt.plugins.lorem.size_medium,lt.plugins.lorem.size_long], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_short,lt.plugins.lorem.size_short,lt.plugins.lorem.size_medium,lt.plugins.lorem.size_long], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_short,lt.plugins.lorem.size_medium,lt.plugins.lorem.size_short,lt.plugins.lorem.size_medium], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_short,lt.plugins.lorem.size_medium,lt.plugins.lorem.size_long,lt.plugins.lorem.size_long], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_short,lt.plugins.lorem.size_medium,lt.plugins.lorem.size_long,lt.plugins.lorem.size_very_long], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_short,lt.plugins.lorem.size_long,lt.plugins.lorem.size_short,lt.plugins.lorem.size_long], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_medium,lt.plugins.lorem.size_long,lt.plugins.lorem.size_short,lt.plugins.lorem.size_long], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_medium,lt.plugins.lorem.size_long,lt.plugins.lorem.size_short,lt.plugins.lorem.size_very_long], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_long,lt.plugins.lorem.size_short,lt.plugins.lorem.size_medium,lt.plugins.lorem.size_long], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_long,lt.plugins.lorem.size_medium,lt.plugins.lorem.size_long,lt.plugins.lorem.size_long], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_long,lt.plugins.lorem.size_very_long,lt.plugins.lorem.size_short,lt.plugins.lorem.size_long], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_short,lt.plugins.lorem.size_short,lt.plugins.lorem.size_medium,lt.plugins.lorem.size_medium,lt.plugins.lorem.size_medium], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_short,lt.plugins.lorem.size_medium,lt.plugins.lorem.size_medium,lt.plugins.lorem.size_short,lt.plugins.lorem.size_long], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_short,lt.plugins.lorem.size_medium,lt.plugins.lorem.size_medium,lt.plugins.lorem.size_medium,lt.plugins.lorem.size_long], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_medium,lt.plugins.lorem.size_short,lt.plugins.lorem.size_short,lt.plugins.lorem.size_medium,lt.plugins.lorem.size_long], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_medium,lt.plugins.lorem.size_short,lt.plugins.lorem.size_long,lt.plugins.lorem.size_short,lt.plugins.lorem.size_medium], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_medium,lt.plugins.lorem.size_long,lt.plugins.lorem.size_short,lt.plugins.lorem.size_medium,lt.plugins.lorem.size_medium], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_medium,lt.plugins.lorem.size_very_long,lt.plugins.lorem.size_long,lt.plugins.lorem.size_medium,lt.plugins.lorem.size_long], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_long,lt.plugins.lorem.size_medium,lt.plugins.lorem.size_short,lt.plugins.lorem.size_long,lt.plugins.lorem.size_very_long], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_long,lt.plugins.lorem.size_medium,lt.plugins.lorem.size_medium,lt.plugins.lorem.size_short,lt.plugins.lorem.size_medium], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_long,lt.plugins.lorem.size_medium,lt.plugins.lorem.size_medium,lt.plugins.lorem.size_long,lt.plugins.lorem.size_medium], null)], null);
lt.plugins.lorem.random_element = (function random_element(arr){return cljs.core.get.call(null,arr,cljs.core.rand_int.call(null,cljs.core.count.call(null,arr)));
});
lt.plugins.lorem.random_word = (function random_word(size){var mapped = cljs.core.zipmap.call(null,lt.plugins.lorem.all_sizes,lt.plugins.lorem.word_lists);if((size === 0))
{return lt.plugins.lorem.random_element.call(null,lt.plugins.lorem.all_words);
} else
{return lt.plugins.lorem.random_element.call(null,mapped.call(null,size));
}
});
lt.plugins.lorem.random_words = (function random_words(count){var out_text = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);var n__10107__auto___10758 = count;var i_10759 = 0;while(true){
if((i_10759 < n__10107__auto___10758))
{cljs.core.swap_BANG_.call(null,out_text,cljs.core.conj," ",lt.plugins.lorem.random_word.call(null,lt.plugins.lorem.size_any));
{
var G__10760 = (i_10759 + 1);
i_10759 = G__10760;
continue;
}
} else
{}
break;
}
return cljs.core.reset_BANG_.call(null,out_text,clojure.string.trim.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.deref.call(null,out_text))));
});
lt.plugins.lorem.random_fragment = (function random_fragment(){var out_text = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);var pattern = lt.plugins.lorem.random_element.call(null,lt.plugins.lorem.fragment_patterns);var n__10107__auto___10761 = cljs.core.count.call(null,pattern);var i_10762 = 0;while(true){
if((i_10762 < n__10107__auto___10761))
{cljs.core.swap_BANG_.call(null,out_text,cljs.core.conj," ",lt.plugins.lorem.random_word.call(null,cljs.core.get.call(null,pattern,i_10762)));
{
var G__10763 = (i_10762 + 1);
i_10762 = G__10763;
continue;
}
} else
{}
break;
}
return cljs.core.reset_BANG_.call(null,out_text,clojure.string.trim.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.deref.call(null,out_text))));
});
lt.plugins.lorem.sentence_inter = (function sentence_inter(){if((cljs.core.rand.call(null) < 0.5))
{return ", ";
} else
{return [cljs.core.str(" "),cljs.core.str(lt.plugins.lorem.random_word.call(null,lt.plugins.lorem.size_short)),cljs.core.str(" ")].join('');
}
});
lt.plugins.lorem.sentence_connector = (function sentence_connector(size){var rand_side = (function rand_side(){return lt.plugins.lorem.random_sentence.call(null,(size - 1));
});
return [cljs.core.str(rand_side.call(null)),cljs.core.str(lt.plugins.lorem.sentence_inter.call(null)),cljs.core.str(rand_side.call(null))].join('');
});
lt.plugins.lorem.random_sentence = (function random_sentence(size){var G__10745 = size;if(cljs.core._EQ_.call(null,4,G__10745))
{return lt.plugins.lorem.sentence_connector.call(null,size);
} else
{if(cljs.core._EQ_.call(null,3,G__10745))
{return lt.plugins.lorem.sentence_connector.call(null,size);
} else
{if(cljs.core._EQ_.call(null,2,G__10745))
{return lt.plugins.lorem.sentence_connector.call(null,size);
} else
{if(cljs.core._EQ_.call(null,1,G__10745))
{return lt.plugins.lorem.random_fragment.call(null);
} else
{if(cljs.core._EQ_.call(null,0,G__10745))
{return random_sentence.call(null,lt.plugins.lorem.random_element.call(null,lt.plugins.lorem.all_sizes));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return random_sentence.call(null,lt.plugins.lorem.base.call(null,new cljs.core.Keyword(null,"size","size",1017434995)));
} else
{return null;
}
}
}
}
}
}
});
lt.plugins.lorem.random_sentences = (function random_sentences(count,size){var out_text = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);var n__10107__auto___10764 = count;var i_10765 = 0;while(true){
if((i_10765 < n__10107__auto___10764))
{cljs.core.swap_BANG_.call(null,out_text,cljs.core.conj,clojure.string.capitalize.call(null,lt.plugins.lorem.random_sentence.call(null,size)),". \n\n");
{
var G__10766 = (i_10765 + 1);
i_10765 = G__10766;
continue;
}
} else
{}
break;
}
return cljs.core.reset_BANG_.call(null,out_text,clojure.string.trim.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.deref.call(null,out_text))));
});
lt.plugins.lorem.random_paragraph = (function random_paragraph(size){var two_of = (function two_of(x){return cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,2,random_paragraph.call(null,x)));
});
var G__10747 = size;if(cljs.core._EQ_.call(null,4,G__10747))
{return two_of.call(null,lt.plugins.lorem.size_long);
} else
{if(cljs.core._EQ_.call(null,3,G__10747))
{return two_of.call(null,lt.plugins.lorem.size_medium);
} else
{if(cljs.core._EQ_.call(null,2,G__10747))
{return two_of.call(null,lt.plugins.lorem.size_short);
} else
{if(cljs.core._EQ_.call(null,1,G__10747))
{var out_text = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);var n__10107__auto___10767 = (3 + cljs.core.rand_int.call(null,2));var i_10768 = 0;while(true){
if((i_10768 < n__10107__auto___10767))
{cljs.core.swap_BANG_.call(null,out_text,cljs.core.conj,clojure.string.capitalize.call(null,lt.plugins.lorem.random_sentence.call(null,lt.plugins.lorem.size_any)),". ");
{
var G__10769 = (i_10768 + 1);
i_10768 = G__10769;
continue;
}
} else
{}
break;
}
return cljs.core.reset_BANG_.call(null,out_text,cljs.core.apply.call(null,cljs.core.str,cljs.core.deref.call(null,out_text)));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return random_paragraph.call(null,lt.plugins.lorem.base.call(null,new cljs.core.Keyword(null,"size","size",1017434995)));
} else
{return null;
}
}
}
}
}
});
lt.plugins.lorem.random_paragraphs = (function random_paragraphs(count,size){var out_text = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);var n__10107__auto___10770 = count;var i_10771 = 0;while(true){
if((i_10771 < n__10107__auto___10770))
{cljs.core.swap_BANG_.call(null,out_text,cljs.core.conj,[cljs.core.str(lt.plugins.lorem.random_paragraph.call(null,size)),cljs.core.str("\n\n")].join(''));
{
var G__10772 = (i_10771 + 1);
i_10771 = G__10772;
continue;
}
} else
{}
break;
}
return cljs.core.reset_BANG_.call(null,out_text,clojure.string.trim.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.deref.call(null,out_text))));
});
lt.plugins.lorem.call_args = (function call_args(optStr,optInt,arg){cljs.core.swap_BANG_.call(null,lt.plugins.lorem.counter,cljs.core.dec);
cljs.core.prn.call(null,cljs.core.deref.call(null,lt.plugins.lorem.counter));
if(cljs.core.truth_(cljs.core.not_empty.call(null,optInt)))
{cljs.core.swap_BANG_.call(null,lt.plugins.lorem.config,cljs.core.assoc,new cljs.core.Keyword(null,"count","count",1108755585),optInt);
} else
{}
cljs.core.swap_BANG_.call(null,lt.plugins.lorem.config,cljs.core.merge,(function (){var temp__4090__auto__ = cljs.core.first.call(null,lt.plugins.lorem.bindings.call(null,optStr));if(cljs.core.truth_(temp__4090__auto__))
{var form = temp__4090__auto__;return new cljs.core.PersistentArrayMap.fromArray([form.call(null,0),form.call(null,1)], true, false);
} else
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),arg], null);
}
})());
if((cljs.core.deref.call(null,lt.plugins.lorem.counter) === 0))
{return lt.plugins.lorem.run_command.call(null,cljs.core.deref.call(null,lt.plugins.lorem.config));
} else
{return null;
}
});
lt.plugins.lorem.run_command = (function run_command(c){var G__10749 = c.call(null,new cljs.core.Keyword(null,"type","type",1017479852));if(cljs.core._EQ_.call(null,"word",G__10749))
{return lt.plugins.lorem.random_words.call(null,c.call(null,new cljs.core.Keyword(null,"count","count",1108755585)));
} else
{if(cljs.core._EQ_.call(null,"sentence",G__10749))
{return lt.plugins.lorem.random_sentences.call(null,c.call(null,new cljs.core.Keyword(null,"count","count",1108755585)),c.call(null,new cljs.core.Keyword(null,"size","size",1017434995)));
} else
{if(cljs.core._EQ_.call(null,"paragraph",G__10749))
{return lt.plugins.lorem.random_paragraphs.call(null,c.call(null,new cljs.core.Keyword(null,"count","count",1108755585)),c.call(null,new cljs.core.Keyword(null,"size","size",1017434995)));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return [cljs.core.str("Error: Invalid option \"_"),cljs.core.str(c.call(null,new cljs.core.Keyword(null,"type","type",1017479852))),cljs.core.str("\"")].join('');
} else
{return null;
}
}
}
}
});
lt.plugins.lorem.parse_args = (function parse_args(arg){var temp__4090__auto__ = cljs.core.re_find.call(null,/^([a-z\?]+)(\d*)$/,arg);if(cljs.core.truth_(temp__4090__auto__))
{var opt_res = temp__4090__auto__;return lt.plugins.lorem.call_args.call(null,cljs.core.get.call(null,opt_res,1),cljs.core.get.call(null,opt_res,2),arg);
} else
{var temp__4090__auto____$1 = cljs.core.re_find.call(null,/^(\d*)([a-z\?]+)$/,arg);if(cljs.core.truth_(temp__4090__auto____$1))
{var opt_res = temp__4090__auto____$1;return lt.plugins.lorem.call_args.call(null,cljs.core.get.call(null,opt_res,2),cljs.core.get.call(null,opt_res,1),arg);
} else
{return [cljs.core.str("Error: Invalid option \"_"),cljs.core.str(arg),cljs.core.str("\"")].join('');
}
}
});
lt.plugins.lorem.parse_command = (function parse_command(command){var command_array = clojure.string.split.call(null,command,/_/);cljs.core.reset_BANG_.call(null,lt.plugins.lorem.counter,(cljs.core.count.call(null,command_array) - 1));
var iter__9976__auto__ = ((function (command_array){
return (function iter__10754(s__10755){return (new cljs.core.LazySeq(null,((function (command_array){
return (function (){var s__10755__$1 = s__10755;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10755__$1);if(temp__4092__auto__)
{var s__10755__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10755__$2))
{var c__9974__auto__ = cljs.core.chunk_first.call(null,s__10755__$2);var size__9975__auto__ = cljs.core.count.call(null,c__9974__auto__);var b__10757 = cljs.core.chunk_buffer.call(null,size__9975__auto__);if((function (){var i__10756 = 0;while(true){
if((i__10756 < size__9975__auto__))
{var i = cljs.core._nth.call(null,c__9974__auto__,i__10756);cljs.core.chunk_append.call(null,b__10757,lt.plugins.lorem.parse_args.call(null,cljs.core.get.call(null,command_array,i)));
{
var G__10773 = (i__10756 + 1);
i__10756 = G__10773;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10757),iter__10754.call(null,cljs.core.chunk_rest.call(null,s__10755__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10757),null);
}
} else
{var i = cljs.core.first.call(null,s__10755__$2);return cljs.core.cons.call(null,lt.plugins.lorem.parse_args.call(null,cljs.core.get.call(null,command_array,i)),iter__10754.call(null,cljs.core.rest.call(null,s__10755__$2)));
}
} else
{return null;
}
break;
}
});})(command_array))
,null,null));
});})(command_array))
;return iter__9976__auto__.call(null,cljs.core.range.call(null,1,cljs.core.count.call(null,command_array)));
});
lt.plugins.lorem.check_command = (function check_command(cm){var coords = lt.objs.editor.__GT_cursor.call(null,cm);var pre_pos = cm.findPosH(cljs.core.clj__GT_js.call(null,coords),-1,"word",true);var word_range = lt.objs.editor.range.call(null,cm,pre_pos,coords);var temp__4090__auto__ = cljs.core.re_find.call(null,lt.plugins.lorem.search_reg,word_range);if(cljs.core.truth_(temp__4090__auto__))
{var in_str = temp__4090__auto__;if(!((coords.call(null,new cljs.core.Keyword(null,"ch","ch",1013907415)) === 0)))
{return lt.objs.editor.replace.call(null,cm,pre_pos,coords,cljs.core.apply.call(null,cljs.core.str,lt.plugins.lorem.parse_command.call(null,in_str)));
} else
{return lt.objs.editor.insert_at_cursor.call(null,cm,lt.plugins.lorem.run_command.call(null,cljs.core.deref.call(null,lt.plugins.lorem.base)));
}
} else
{return null;
}
});
lt.plugins.lorem.lorem_ipsum_catch = (function lorem_ipsum_catch(){var cm = lt.objs.editor.__GT_cm_ed.call(null,lt.objs.editor.pool.last_active.call(null));cljs.core.reset_BANG_.call(null,lt.plugins.lorem.config,cljs.core.deref.call(null,lt.plugins.lorem.base));
return lt.plugins.lorem.check_command.call(null,cm);
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"lorem-ipsum","lorem-ipsum",3554682400),new cljs.core.Keyword(null,"desc","desc",1016984067),"Lorem: Run text generator",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.lorem.lorem_ipsum_catch], null));
}

//# sourceMappingURL=lorem_compiled.js.map