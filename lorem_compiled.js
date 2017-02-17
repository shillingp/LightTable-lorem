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
lt.plugins.lorem.apply_trim = (function apply_trim(arr){return clojure.string.trim.call(null,cljs.core.apply.call(null,cljs.core.str,arr));
});
lt.plugins.lorem.random_word = (function random_word(size){var mapped = cljs.core.zipmap.call(null,lt.plugins.lorem.all_sizes,lt.plugins.lorem.word_lists);if((size === 0))
{return cljs.core.rand_nth.call(null,lt.plugins.lorem.all_words);
} else
{return cljs.core.rand_nth.call(null,mapped.call(null,size));
}
});
lt.plugins.lorem.random_words = (function random_words(count){return lt.plugins.lorem.apply_trim.call(null,(function (){var iter__5611__auto__ = (function iter__8434(s__8435){return (new cljs.core.LazySeq(null,(function (){var s__8435__$1 = s__8435;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8435__$1);if(temp__4092__auto__)
{var s__8435__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8435__$2))
{var c__5609__auto__ = cljs.core.chunk_first.call(null,s__8435__$2);var size__5610__auto__ = cljs.core.count.call(null,c__5609__auto__);var b__8437 = cljs.core.chunk_buffer.call(null,size__5610__auto__);if((function (){var i__8436 = 0;while(true){
if((i__8436 < size__5610__auto__))
{var i = cljs.core._nth.call(null,c__5609__auto__,i__8436);cljs.core.chunk_append.call(null,b__8437,[cljs.core.str(" "),cljs.core.str(lt.plugins.lorem.random_word.call(null,lt.plugins.lorem.size_any))].join(''));
{
var G__8484 = (i__8436 + 1);
i__8436 = G__8484;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8437),iter__8434.call(null,cljs.core.chunk_rest.call(null,s__8435__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8437),null);
}
} else
{var i = cljs.core.first.call(null,s__8435__$2);return cljs.core.cons.call(null,[cljs.core.str(" "),cljs.core.str(lt.plugins.lorem.random_word.call(null,lt.plugins.lorem.size_any))].join(''),iter__8434.call(null,cljs.core.rest.call(null,s__8435__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__5611__auto__.call(null,cljs.core.range.call(null,count));
})());
});
lt.plugins.lorem.random_fragment = (function random_fragment(){var pattern = cljs.core.rand_nth.call(null,lt.plugins.lorem.fragment_patterns);return lt.plugins.lorem.apply_trim.call(null,(function (){var iter__5611__auto__ = ((function (pattern){
return (function iter__8442(s__8443){return (new cljs.core.LazySeq(null,((function (pattern){
return (function (){var s__8443__$1 = s__8443;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8443__$1);if(temp__4092__auto__)
{var s__8443__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8443__$2))
{var c__5609__auto__ = cljs.core.chunk_first.call(null,s__8443__$2);var size__5610__auto__ = cljs.core.count.call(null,c__5609__auto__);var b__8445 = cljs.core.chunk_buffer.call(null,size__5610__auto__);if((function (){var i__8444 = 0;while(true){
if((i__8444 < size__5610__auto__))
{var i = cljs.core._nth.call(null,c__5609__auto__,i__8444);cljs.core.chunk_append.call(null,b__8445,[cljs.core.str(" "),cljs.core.str(lt.plugins.lorem.random_word.call(null,cljs.core.get.call(null,pattern,i)))].join(''));
{
var G__8485 = (i__8444 + 1);
i__8444 = G__8485;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8445),iter__8442.call(null,cljs.core.chunk_rest.call(null,s__8443__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8445),null);
}
} else
{var i = cljs.core.first.call(null,s__8443__$2);return cljs.core.cons.call(null,[cljs.core.str(" "),cljs.core.str(lt.plugins.lorem.random_word.call(null,cljs.core.get.call(null,pattern,i)))].join(''),iter__8442.call(null,cljs.core.rest.call(null,s__8443__$2)));
}
} else
{return null;
}
break;
}
});})(pattern))
,null,null));
});})(pattern))
;return iter__5611__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,pattern)));
})());
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
lt.plugins.lorem.random_sentence = (function random_sentence(size){var G__8447 = size;if(cljs.core._EQ_.call(null,4,G__8447))
{return lt.plugins.lorem.sentence_connector.call(null,size);
} else
{if(cljs.core._EQ_.call(null,3,G__8447))
{return lt.plugins.lorem.sentence_connector.call(null,size);
} else
{if(cljs.core._EQ_.call(null,2,G__8447))
{return lt.plugins.lorem.sentence_connector.call(null,size);
} else
{if(cljs.core._EQ_.call(null,1,G__8447))
{return lt.plugins.lorem.random_fragment.call(null);
} else
{if(cljs.core._EQ_.call(null,0,G__8447))
{return random_sentence.call(null,cljs.core.rand_nth.call(null,lt.plugins.lorem.all_sizes));
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
lt.plugins.lorem.random_sentences = (function random_sentences(count,size){return lt.plugins.lorem.apply_trim.call(null,(function (){var iter__5611__auto__ = (function iter__8452(s__8453){return (new cljs.core.LazySeq(null,(function (){var s__8453__$1 = s__8453;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8453__$1);if(temp__4092__auto__)
{var s__8453__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8453__$2))
{var c__5609__auto__ = cljs.core.chunk_first.call(null,s__8453__$2);var size__5610__auto__ = cljs.core.count.call(null,c__5609__auto__);var b__8455 = cljs.core.chunk_buffer.call(null,size__5610__auto__);if((function (){var i__8454 = 0;while(true){
if((i__8454 < size__5610__auto__))
{var i = cljs.core._nth.call(null,c__5609__auto__,i__8454);cljs.core.chunk_append.call(null,b__8455,[cljs.core.str(clojure.string.capitalize.call(null,lt.plugins.lorem.random_sentence.call(null,size))),cljs.core.str(". \n\n")].join(''));
{
var G__8486 = (i__8454 + 1);
i__8454 = G__8486;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8455),iter__8452.call(null,cljs.core.chunk_rest.call(null,s__8453__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8455),null);
}
} else
{var i = cljs.core.first.call(null,s__8453__$2);return cljs.core.cons.call(null,[cljs.core.str(clojure.string.capitalize.call(null,lt.plugins.lorem.random_sentence.call(null,size))),cljs.core.str(". \n\n")].join(''),iter__8452.call(null,cljs.core.rest.call(null,s__8453__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__5611__auto__.call(null,cljs.core.range.call(null,count));
})());
});
lt.plugins.lorem.random_paragraph = (function random_paragraph(size){var two_of = (function two_of(x){return cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,2,random_paragraph.call(null,x)));
});
var G__8461 = size;if(cljs.core._EQ_.call(null,4,G__8461))
{return two_of.call(null,lt.plugins.lorem.size_long);
} else
{if(cljs.core._EQ_.call(null,3,G__8461))
{return two_of.call(null,lt.plugins.lorem.size_medium);
} else
{if(cljs.core._EQ_.call(null,2,G__8461))
{return two_of.call(null,lt.plugins.lorem.size_short);
} else
{if(cljs.core._EQ_.call(null,1,G__8461))
{return lt.plugins.lorem.apply_trim.call(null,(function (){var iter__5611__auto__ = ((function (G__8461){
return (function iter__8462(s__8463){return (new cljs.core.LazySeq(null,((function (G__8461){
return (function (){var s__8463__$1 = s__8463;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8463__$1);if(temp__4092__auto__)
{var s__8463__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8463__$2))
{var c__5609__auto__ = cljs.core.chunk_first.call(null,s__8463__$2);var size__5610__auto__ = cljs.core.count.call(null,c__5609__auto__);var b__8465 = cljs.core.chunk_buffer.call(null,size__5610__auto__);if((function (){var i__8464 = 0;while(true){
if((i__8464 < size__5610__auto__))
{var i = cljs.core._nth.call(null,c__5609__auto__,i__8464);cljs.core.chunk_append.call(null,b__8465,[cljs.core.str(clojure.string.capitalize.call(null,lt.plugins.lorem.random_sentence.call(null,lt.plugins.lorem.size_any))),cljs.core.str(". ")].join(''));
{
var G__8487 = (i__8464 + 1);
i__8464 = G__8487;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8465),iter__8462.call(null,cljs.core.chunk_rest.call(null,s__8463__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8465),null);
}
} else
{var i = cljs.core.first.call(null,s__8463__$2);return cljs.core.cons.call(null,[cljs.core.str(clojure.string.capitalize.call(null,lt.plugins.lorem.random_sentence.call(null,lt.plugins.lorem.size_any))),cljs.core.str(". ")].join(''),iter__8462.call(null,cljs.core.rest.call(null,s__8463__$2)));
}
} else
{return null;
}
break;
}
});})(G__8461))
,null,null));
});})(G__8461))
;return iter__5611__auto__.call(null,cljs.core.range.call(null,(3 + cljs.core.rand_int.call(null,2))));
})());
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
lt.plugins.lorem.random_paragraphs = (function random_paragraphs(count,size){return lt.plugins.lorem.apply_trim.call(null,(function (){var iter__5611__auto__ = (function iter__8470(s__8471){return (new cljs.core.LazySeq(null,(function (){var s__8471__$1 = s__8471;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8471__$1);if(temp__4092__auto__)
{var s__8471__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8471__$2))
{var c__5609__auto__ = cljs.core.chunk_first.call(null,s__8471__$2);var size__5610__auto__ = cljs.core.count.call(null,c__5609__auto__);var b__8473 = cljs.core.chunk_buffer.call(null,size__5610__auto__);if((function (){var i__8472 = 0;while(true){
if((i__8472 < size__5610__auto__))
{var i = cljs.core._nth.call(null,c__5609__auto__,i__8472);cljs.core.chunk_append.call(null,b__8473,[cljs.core.str(lt.plugins.lorem.random_paragraph.call(null,size)),cljs.core.str("\n\n")].join(''));
{
var G__8488 = (i__8472 + 1);
i__8472 = G__8488;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8473),iter__8470.call(null,cljs.core.chunk_rest.call(null,s__8471__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8473),null);
}
} else
{var i = cljs.core.first.call(null,s__8471__$2);return cljs.core.cons.call(null,[cljs.core.str(lt.plugins.lorem.random_paragraph.call(null,size)),cljs.core.str("\n\n")].join(''),iter__8470.call(null,cljs.core.rest.call(null,s__8471__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__5611__auto__.call(null,cljs.core.range.call(null,count));
})());
});
lt.plugins.lorem.call_args = (function call_args(optStr,optInt,arg){cljs.core.swap_BANG_.call(null,lt.plugins.lorem.counter,cljs.core.dec);
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
lt.plugins.lorem.run_command = (function run_command(c){var G__8475 = c.call(null,new cljs.core.Keyword(null,"type","type",1017479852));if(cljs.core._EQ_.call(null,"word",G__8475))
{return lt.plugins.lorem.random_words.call(null,c.call(null,new cljs.core.Keyword(null,"count","count",1108755585)));
} else
{if(cljs.core._EQ_.call(null,"sentence",G__8475))
{return lt.plugins.lorem.random_sentences.call(null,c.call(null,new cljs.core.Keyword(null,"count","count",1108755585)),c.call(null,new cljs.core.Keyword(null,"size","size",1017434995)));
} else
{if(cljs.core._EQ_.call(null,"paragraph",G__8475))
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
var iter__5611__auto__ = ((function (command_array){
return (function iter__8480(s__8481){return (new cljs.core.LazySeq(null,((function (command_array){
return (function (){var s__8481__$1 = s__8481;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8481__$1);if(temp__4092__auto__)
{var s__8481__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8481__$2))
{var c__5609__auto__ = cljs.core.chunk_first.call(null,s__8481__$2);var size__5610__auto__ = cljs.core.count.call(null,c__5609__auto__);var b__8483 = cljs.core.chunk_buffer.call(null,size__5610__auto__);if((function (){var i__8482 = 0;while(true){
if((i__8482 < size__5610__auto__))
{var i = cljs.core._nth.call(null,c__5609__auto__,i__8482);cljs.core.chunk_append.call(null,b__8483,lt.plugins.lorem.parse_args.call(null,cljs.core.get.call(null,command_array,i)));
{
var G__8489 = (i__8482 + 1);
i__8482 = G__8489;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8483),iter__8480.call(null,cljs.core.chunk_rest.call(null,s__8481__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8483),null);
}
} else
{var i = cljs.core.first.call(null,s__8481__$2);return cljs.core.cons.call(null,lt.plugins.lorem.parse_args.call(null,cljs.core.get.call(null,command_array,i)),iter__8480.call(null,cljs.core.rest.call(null,s__8481__$2)));
}
} else
{return null;
}
break;
}
});})(command_array))
,null,null));
});})(command_array))
;return iter__5611__auto__.call(null,cljs.core.range.call(null,1,cljs.core.count.call(null,command_array)));
});
lt.plugins.lorem.check_command = (function check_command(cm){var coords = lt.objs.editor.__GT_cursor.call(null,cm);var pre_pos = cm.findPosH(cljs.core.clj__GT_js.call(null,coords),-1,"word",true);var word_range = lt.objs.editor.range.call(null,cm,pre_pos,coords);var temp__4090__auto__ = cljs.core.re_find.call(null,lt.plugins.lorem.search_reg,word_range);if(cljs.core.truth_(temp__4090__auto__))
{var in_str = temp__4090__auto__;if(!((coords.call(null,new cljs.core.Keyword(null,"ch","ch",1013907415)) === 0)))
{return lt.objs.editor.replace.call(null,cm,pre_pos,coords,cljs.core.apply.call(null,cljs.core.str,lt.plugins.lorem.parse_command.call(null,in_str)));
} else
{return null;
}
} else
{return lt.objs.editor.insert_at_cursor.call(null,cm,lt.plugins.lorem.run_command.call(null,cljs.core.deref.call(null,lt.plugins.lorem.base)));
}
});
lt.plugins.lorem.lorem_ipsum_catch = (function lorem_ipsum_catch(){var cm = lt.objs.editor.__GT_cm_ed.call(null,lt.objs.editor.pool.last_active.call(null));cljs.core.reset_BANG_.call(null,lt.plugins.lorem.config,cljs.core.deref.call(null,lt.plugins.lorem.base));
return lt.plugins.lorem.check_command.call(null,cm);
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"lorem-ipsum","lorem-ipsum",3554682400),new cljs.core.Keyword(null,"desc","desc",1016984067),"Lorem: Run text generator",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.lorem.lorem_ipsum_catch], null));
}

//# sourceMappingURL=lorem_compiled.js.map