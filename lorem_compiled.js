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
lt.plugins.lorem.base_type = "paragraph";
lt.plugins.lorem.base_count = 1;
lt.plugins.lorem.base_size = lt.plugins.lorem.size_medium;
lt.plugins.lorem.fragment_patterns = new cljs.core.PersistentVector(null, 30, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_short,lt.plugins.lorem.size_medium,lt.plugins.lorem.size_long], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_short,lt.plugins.lorem.size_medium,lt.plugins.lorem.size_very_long], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_short,lt.plugins.lorem.size_short,lt.plugins.lorem.size_very_long], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_short,lt.plugins.lorem.size_long,lt.plugins.lorem.size_very_long], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_medium,lt.plugins.lorem.size_long,lt.plugins.lorem.size_long], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_medium,lt.plugins.lorem.size_long,lt.plugins.lorem.size_very_long], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_medium,lt.plugins.lorem.size_short,lt.plugins.lorem.size_long], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_long,lt.plugins.lorem.size_short,lt.plugins.lorem.size_medium], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_long,lt.plugins.lorem.size_short,lt.plugins.lorem.size_long], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_long,lt.plugins.lorem.size_medium,lt.plugins.lorem.size_long], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_short,lt.plugins.lorem.size_short,lt.plugins.lorem.size_medium,lt.plugins.lorem.size_long], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_short,lt.plugins.lorem.size_medium,lt.plugins.lorem.size_short,lt.plugins.lorem.size_medium], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_short,lt.plugins.lorem.size_medium,lt.plugins.lorem.size_long,lt.plugins.lorem.size_long], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_short,lt.plugins.lorem.size_medium,lt.plugins.lorem.size_long,lt.plugins.lorem.size_very_long], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_short,lt.plugins.lorem.size_long,lt.plugins.lorem.size_short,lt.plugins.lorem.size_long], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_medium,lt.plugins.lorem.size_long,lt.plugins.lorem.size_short,lt.plugins.lorem.size_long], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_medium,lt.plugins.lorem.size_long,lt.plugins.lorem.size_short,lt.plugins.lorem.size_very_long], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_long,lt.plugins.lorem.size_short,lt.plugins.lorem.size_medium,lt.plugins.lorem.size_long], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_long,lt.plugins.lorem.size_medium,lt.plugins.lorem.size_long,lt.plugins.lorem.size_long], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_long,lt.plugins.lorem.size_very_long,lt.plugins.lorem.size_short,lt.plugins.lorem.size_long], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_short,lt.plugins.lorem.size_short,lt.plugins.lorem.size_medium,lt.plugins.lorem.size_medium,lt.plugins.lorem.size_medium], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_short,lt.plugins.lorem.size_medium,lt.plugins.lorem.size_medium,lt.plugins.lorem.size_short,lt.plugins.lorem.size_long], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_short,lt.plugins.lorem.size_medium,lt.plugins.lorem.size_medium,lt.plugins.lorem.size_medium,lt.plugins.lorem.size_long], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_medium,lt.plugins.lorem.size_short,lt.plugins.lorem.size_short,lt.plugins.lorem.size_medium,lt.plugins.lorem.size_long], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_medium,lt.plugins.lorem.size_short,lt.plugins.lorem.size_long,lt.plugins.lorem.size_short,lt.plugins.lorem.size_medium], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_medium,lt.plugins.lorem.size_long,lt.plugins.lorem.size_short,lt.plugins.lorem.size_medium,lt.plugins.lorem.size_medium], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_medium,lt.plugins.lorem.size_very_long,lt.plugins.lorem.size_long,lt.plugins.lorem.size_medium,lt.plugins.lorem.size_long], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_long,lt.plugins.lorem.size_medium,lt.plugins.lorem.size_short,lt.plugins.lorem.size_long,lt.plugins.lorem.size_very_long], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_long,lt.plugins.lorem.size_medium,lt.plugins.lorem.size_medium,lt.plugins.lorem.size_short,lt.plugins.lorem.size_medium], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_long,lt.plugins.lorem.size_medium,lt.plugins.lorem.size_medium,lt.plugins.lorem.size_long,lt.plugins.lorem.size_medium], null)], null);
lt.plugins.lorem.random_element = (function random_element(arr){return cljs.core.get.call(null,arr,cljs.core.rand_int.call(null,cljs.core.count.call(null,arr)));
});
lt.plugins.lorem.random_word = (function random_word(size){var mapped = cljs.core.zipmap.call(null,lt.plugins.lorem.all_sizes,lt.plugins.lorem.word_lists);if((size === 0))
{return lt.plugins.lorem.random_element.call(null,lt.plugins.lorem.all_words);
} else
{return lt.plugins.lorem.random_element.call(null,mapped.call(null,size));
}
});
lt.plugins.lorem.random_words = (function random_words(count){var out_text = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);var n__7222__auto___10009 = count;var i_10010 = 0;while(true){
if((i_10010 < n__7222__auto___10009))
{cljs.core.swap_BANG_.call(null,out_text,cljs.core.conj," ",lt.plugins.lorem.random_word.call(null,lt.plugins.lorem.size_any));
{
var G__10011 = (i_10010 + 1);
i_10010 = G__10011;
continue;
}
} else
{}
break;
}
return cljs.core.reset_BANG_.call(null,out_text,clojure.string.trim.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.deref.call(null,out_text))));
});
lt.plugins.lorem.random_fragment = (function random_fragment(){var out_text = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);var pattern = lt.plugins.lorem.random_element.call(null,lt.plugins.lorem.fragment_patterns);var n__7222__auto___10012 = cljs.core.count.call(null,pattern);var i_10013 = 0;while(true){
if((i_10013 < n__7222__auto___10012))
{cljs.core.swap_BANG_.call(null,out_text,cljs.core.conj," ",lt.plugins.lorem.random_word.call(null,cljs.core.get.call(null,pattern,i_10013)));
{
var G__10014 = (i_10013 + 1);
i_10013 = G__10014;
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
lt.plugins.lorem.sentence_connector = (function sentence_connector(size){return [cljs.core.str(lt.plugins.lorem.random_sentence.call(null,(size - 1))),cljs.core.str(lt.plugins.lorem.sentence_inter.call(null)),cljs.core.str(lt.plugins.lorem.random_sentence.call(null,(size - 1)))].join('');
});
lt.plugins.lorem.random_sentence = (function random_sentence(size){var G__9996 = size;if(cljs.core._EQ_.call(null,4,G__9996))
{return lt.plugins.lorem.sentence_connector.call(null,size);
} else
{if(cljs.core._EQ_.call(null,3,G__9996))
{return lt.plugins.lorem.sentence_connector.call(null,size);
} else
{if(cljs.core._EQ_.call(null,2,G__9996))
{return lt.plugins.lorem.sentence_connector.call(null,size);
} else
{if(cljs.core._EQ_.call(null,1,G__9996))
{return lt.plugins.lorem.random_fragment.call(null);
} else
{if(cljs.core._EQ_.call(null,0,G__9996))
{return random_sentence.call(null,lt.plugins.lorem.random_element.call(null,lt.plugins.lorem.all_sizes));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return random_sentence.call(null,lt.plugins.lorem.base_size);
} else
{return null;
}
}
}
}
}
}
});
lt.plugins.lorem.random_sentences = (function random_sentences(count,size){var out_text = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);var n__7222__auto___10015 = count;var i_10016 = 0;while(true){
if((i_10016 < n__7222__auto___10015))
{cljs.core.swap_BANG_.call(null,out_text,cljs.core.conj,clojure.string.capitalize.call(null,lt.plugins.lorem.random_sentence.call(null,size)),". ");
{
var G__10017 = (i_10016 + 1);
i_10016 = G__10017;
continue;
}
} else
{}
break;
}
return cljs.core.reset_BANG_.call(null,out_text,clojure.string.trim.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.deref.call(null,out_text))));
});
lt.plugins.lorem.random_paragraph = (function random_paragraph(size){var G__9998 = size;if(cljs.core._EQ_.call(null,4,G__9998))
{return [cljs.core.str(random_paragraph.call(null,lt.plugins.lorem.size_long)),cljs.core.str(random_paragraph.call(null,lt.plugins.lorem.size_long))].join('');
} else
{if(cljs.core._EQ_.call(null,3,G__9998))
{return [cljs.core.str(random_paragraph.call(null,lt.plugins.lorem.size_medium)),cljs.core.str(random_paragraph.call(null,lt.plugins.lorem.size_medium))].join('');
} else
{if(cljs.core._EQ_.call(null,2,G__9998))
{return [cljs.core.str(random_paragraph.call(null,lt.plugins.lorem.size_short)),cljs.core.str(random_paragraph.call(null,lt.plugins.lorem.size_short))].join('');
} else
{if(cljs.core._EQ_.call(null,1,G__9998))
{var out_text = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);var n__7222__auto___10018 = (3 + cljs.core.rand_int.call(null,2));var i_10019 = 0;while(true){
if((i_10019 < n__7222__auto___10018))
{cljs.core.swap_BANG_.call(null,out_text,cljs.core.conj,clojure.string.capitalize.call(null,lt.plugins.lorem.random_sentence.call(null,lt.plugins.lorem.size_any)),". ");
{
var G__10020 = (i_10019 + 1);
i_10019 = G__10020;
continue;
}
} else
{}
break;
}
return cljs.core.reset_BANG_.call(null,out_text,cljs.core.apply.call(null,cljs.core.str,cljs.core.deref.call(null,out_text)));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return random_paragraph.call(null,lt.plugins.lorem.base_size);
} else
{return null;
}
}
}
}
}
});
lt.plugins.lorem.random_paragraphs = (function random_paragraphs(count,size){var out_text = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);var para = clojure.string.trim.call(null,lt.plugins.lorem.random_paragraph.call(null,size));var n__7222__auto___10021 = count;var i_10022 = 0;while(true){
if((i_10022 < n__7222__auto___10021))
{cljs.core.swap_BANG_.call(null,out_text,cljs.core.conj,((((i_10022 + 1) < count))?[cljs.core.str(para),cljs.core.str("\n\n")].join(''):para));
{
var G__10023 = (i_10022 + 1);
i_10022 = G__10023;
continue;
}
} else
{}
break;
}
return cljs.core.reset_BANG_.call(null,out_text,cljs.core.apply.call(null,cljs.core.str,cljs.core.deref.call(null,out_text)));
});
lt.plugins.lorem.call_args = (function call_args(optStr,optInt,arg){var optInt__$1 = ((cljs.core.empty_QMARK_.call(null,optInt))?lt.plugins.lorem.base_count:parseInt(optInt));var config = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),lt.plugins.lorem.base_type,new cljs.core.Keyword(null,"count","count",1108755585),optInt__$1,new cljs.core.Keyword(null,"size","size",1017434995),lt.plugins.lorem.base_size], null));var settings = new cljs.core.PersistentArrayMap(null, 7, ["p",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),"paragraph"], null),"w",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),"word"], null),"s",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),"sentence"], null),"short",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1017434995),lt.plugins.lorem.size_short], null),"medium",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1017434995),lt.plugins.lorem.size_medium], null),"long",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1017434995),lt.plugins.lorem.size_long], null),"vlong",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1017434995),lt.plugins.lorem.size_very_long], null)], null);cljs.core.reset_BANG_.call(null,config,(function (){var temp__4090__auto__ = cljs.core.first.call(null,settings.call(null,optStr));if(cljs.core.truth_(temp__4090__auto__))
{var form = temp__4090__auto__;return cljs.core.assoc.call(null,cljs.core.deref.call(null,config),form.call(null,0),form.call(null,1));
} else
{return cljs.core.assoc.call(null,cljs.core.deref.call(null,config),new cljs.core.Keyword(null,"type","type",1017479852),arg);
}
})());
return lt.plugins.lorem.run_command.call(null,cljs.core.deref.call(null,config));
});
lt.plugins.lorem.run_command = (function run_command(c){var G__10000 = c.call(null,new cljs.core.Keyword(null,"type","type",1017479852));if(cljs.core._EQ_.call(null,"word",G__10000))
{return lt.plugins.lorem.random_words.call(null,c.call(null,new cljs.core.Keyword(null,"count","count",1108755585)));
} else
{if(cljs.core._EQ_.call(null,"sentence",G__10000))
{return lt.plugins.lorem.random_sentences.call(null,c.call(null,new cljs.core.Keyword(null,"count","count",1108755585)),c.call(null,new cljs.core.Keyword(null,"size","size",1017434995)));
} else
{if(cljs.core._EQ_.call(null,"paragraph",G__10000))
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
lt.plugins.lorem.lorem_plain = (function lorem_plain(){var basic = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),lt.plugins.lorem.base_type,new cljs.core.Keyword(null,"count","count",1108755585),lt.plugins.lorem.base_count,new cljs.core.Keyword(null,"size","size",1017434995),lt.plugins.lorem.base_size], null);return lt.plugins.lorem.run_command.call(null,basic);
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
lt.plugins.lorem.parse_command = (function parse_command(command){var command_array = clojure.string.split.call(null,command,/_/);var iter__7091__auto__ = ((function (command_array){
return (function iter__10005(s__10006){return (new cljs.core.LazySeq(null,((function (command_array){
return (function (){var s__10006__$1 = s__10006;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10006__$1);if(temp__4092__auto__)
{var s__10006__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10006__$2))
{var c__7089__auto__ = cljs.core.chunk_first.call(null,s__10006__$2);var size__7090__auto__ = cljs.core.count.call(null,c__7089__auto__);var b__10008 = cljs.core.chunk_buffer.call(null,size__7090__auto__);if((function (){var i__10007 = 0;while(true){
if((i__10007 < size__7090__auto__))
{var i = cljs.core._nth.call(null,c__7089__auto__,i__10007);cljs.core.chunk_append.call(null,b__10008,lt.plugins.lorem.parse_args.call(null,cljs.core.get.call(null,command_array,i)));
{
var G__10024 = (i__10007 + 1);
i__10007 = G__10024;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10008),iter__10005.call(null,cljs.core.chunk_rest.call(null,s__10006__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10008),null);
}
} else
{var i = cljs.core.first.call(null,s__10006__$2);return cljs.core.cons.call(null,lt.plugins.lorem.parse_args.call(null,cljs.core.get.call(null,command_array,i)),iter__10005.call(null,cljs.core.rest.call(null,s__10006__$2)));
}
} else
{return null;
}
break;
}
});})(command_array))
,null,null));
});})(command_array))
;return iter__7091__auto__.call(null,cljs.core.range.call(null,1,cljs.core.count.call(null,command_array)));
});
lt.plugins.lorem.lorem_ipsum_catch = (function lorem_ipsum_catch(){var cm = lt.objs.editor.__GT_cm_ed.call(null,lt.objs.editor.pool.last_active.call(null));var coords = lt.objs.editor.__GT_cursor.call(null,cm);var pre_pos = cm.findPosH(cljs.core.clj__GT_js.call(null,coords),-1,"word",true);var pre_word = lt.objs.editor.range.call(null,cm,pre_pos,coords);var temp__4090__auto__ = cljs.core.re_find.call(null,/lorem_.\S*/,pre_word);if(cljs.core.truth_(temp__4090__auto__))
{var in_str = temp__4090__auto__;if(!((coords.call(null,new cljs.core.Keyword(null,"ch","ch",1013907415)) === 0)))
{return lt.objs.editor.replace.call(null,cm,pre_pos,coords,cljs.core.apply.call(null,cljs.core.str,lt.plugins.lorem.parse_command.call(null,in_str)));
} else
{return null;
}
} else
{return lt.objs.editor.insert_at_cursor.call(null,cm,lt.plugins.lorem.lorem_plain.call(null));
}
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"lorem-ipsum","lorem-ipsum",3554682400),new cljs.core.Keyword(null,"desc","desc",1016984067),"Lorem Ipsum random text generator",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.lorem.lorem_ipsum_catch], null));
}

//# sourceMappingURL=lorem_compiled.js.map