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
lt.plugins.lorem.default_unit_type = "paragraph";
lt.plugins.lorem.default_unit_count = 1;
lt.plugins.lorem.default_unit_size = lt.plugins.lorem.size_medium;
lt.plugins.lorem.allsizes = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_short,lt.plugins.lorem.size_medium,lt.plugins.lorem.size_long,lt.plugins.lorem.size_very_long], null);
lt.plugins.lorem.shortwords = new cljs.core.PersistentVector(null, 30, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","ab","ad","an","aut","de","do","e","ea","est","et","eu","ex","hic","id","iis","in","ita","nam","ne","non","o","qui","quo","se","sed","si","te","ubi","ut"], null);
lt.plugins.lorem.mediumwords = cljs.core.PersistentVector.fromArray(["amet","aliqua","anim","aute","cillum","culpa","dolor","dolore","duis","elit","enim","eram","esse","fore","fugiat","illum","ipsum","irure","labore","legam","lorem","magna","malis","minim","multos","nisi","noster","nulla","quae","quem","quid","quis","quorum","sint","summis","sunt","tamen","varias","velit","veniam"], true);
lt.plugins.lorem.longwords = cljs.core.PersistentVector.fromArray(["admodum","aliquip","appellat","arbitror","cernantur","commodo","consequat","cupidatat","deserunt","doctrina","eiusmod","excepteur","expetendis","fabulas","incididunt","incurreret","ingeniis","iudicem","laboris","laborum","litteris","mandaremus","mentitum","nescius","nostrud","occaecat","officia","offendit","pariatur","possumus","probant","proident","quamquam","quibusdam","senserit","singulis","tempor","ullamco","vidisse","voluptate"], true);
lt.plugins.lorem.verylongwords = new cljs.core.PersistentVector(null, 30, 5, cljs.core.PersistentVector.EMPTY_NODE, ["adipisicing","arbitrantur","cohaerescant","comprehenderit","concursionibus","coniunctione","consectetur","despicationes","distinguantur","domesticarum","efflorescere","eruditionem","exquisitaque","exercitation","familiaritatem","fidelissimae","firmissimum","graviterque","illustriora","instituendarum","imitarentur","philosophari","praesentibus","praetermissum","relinqueret","reprehenderit","sempiternum","tractavissent","transferrem","voluptatibus"], null);
lt.plugins.lorem.allwords = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,lt.plugins.lorem.shortwords,lt.plugins.lorem.mediumwords,lt.plugins.lorem.longwords,lt.plugins.lorem.verylongwords));
lt.plugins.lorem.fragment_patterns = new cljs.core.PersistentVector(null, 30, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_short,lt.plugins.lorem.size_medium,lt.plugins.lorem.size_long], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_short,lt.plugins.lorem.size_medium,lt.plugins.lorem.size_very_long], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_short,lt.plugins.lorem.size_short,lt.plugins.lorem.size_very_long], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_short,lt.plugins.lorem.size_long,lt.plugins.lorem.size_very_long], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_medium,lt.plugins.lorem.size_long,lt.plugins.lorem.size_long], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_medium,lt.plugins.lorem.size_long,lt.plugins.lorem.size_very_long], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_medium,lt.plugins.lorem.size_short,lt.plugins.lorem.size_long], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_long,lt.plugins.lorem.size_short,lt.plugins.lorem.size_medium], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_long,lt.plugins.lorem.size_short,lt.plugins.lorem.size_long], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_long,lt.plugins.lorem.size_medium,lt.plugins.lorem.size_long], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_short,lt.plugins.lorem.size_short,lt.plugins.lorem.size_medium,lt.plugins.lorem.size_long], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_short,lt.plugins.lorem.size_medium,lt.plugins.lorem.size_short,lt.plugins.lorem.size_medium], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_short,lt.plugins.lorem.size_medium,lt.plugins.lorem.size_long,lt.plugins.lorem.size_long], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_short,lt.plugins.lorem.size_medium,lt.plugins.lorem.size_long,lt.plugins.lorem.size_very_long], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_short,lt.plugins.lorem.size_long,lt.plugins.lorem.size_short,lt.plugins.lorem.size_long], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_medium,lt.plugins.lorem.size_long,lt.plugins.lorem.size_short,lt.plugins.lorem.size_long], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_medium,lt.plugins.lorem.size_long,lt.plugins.lorem.size_short,lt.plugins.lorem.size_very_long], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_long,lt.plugins.lorem.size_short,lt.plugins.lorem.size_medium,lt.plugins.lorem.size_long], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_long,lt.plugins.lorem.size_medium,lt.plugins.lorem.size_long,lt.plugins.lorem.size_long], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_long,lt.plugins.lorem.size_very_long,lt.plugins.lorem.size_short,lt.plugins.lorem.size_long], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_short,lt.plugins.lorem.size_short,lt.plugins.lorem.size_medium,lt.plugins.lorem.size_medium,lt.plugins.lorem.size_medium], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_short,lt.plugins.lorem.size_medium,lt.plugins.lorem.size_medium,lt.plugins.lorem.size_short,lt.plugins.lorem.size_long], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_short,lt.plugins.lorem.size_medium,lt.plugins.lorem.size_medium,lt.plugins.lorem.size_medium,lt.plugins.lorem.size_long], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_medium,lt.plugins.lorem.size_short,lt.plugins.lorem.size_short,lt.plugins.lorem.size_medium,lt.plugins.lorem.size_long], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_medium,lt.plugins.lorem.size_short,lt.plugins.lorem.size_long,lt.plugins.lorem.size_short,lt.plugins.lorem.size_medium], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_medium,lt.plugins.lorem.size_long,lt.plugins.lorem.size_short,lt.plugins.lorem.size_medium,lt.plugins.lorem.size_medium], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_medium,lt.plugins.lorem.size_very_long,lt.plugins.lorem.size_long,lt.plugins.lorem.size_medium,lt.plugins.lorem.size_long], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_long,lt.plugins.lorem.size_medium,lt.plugins.lorem.size_short,lt.plugins.lorem.size_long,lt.plugins.lorem.size_very_long], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_long,lt.plugins.lorem.size_medium,lt.plugins.lorem.size_medium,lt.plugins.lorem.size_short,lt.plugins.lorem.size_medium], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.lorem.size_long,lt.plugins.lorem.size_medium,lt.plugins.lorem.size_medium,lt.plugins.lorem.size_long,lt.plugins.lorem.size_medium], null)], null);
lt.plugins.lorem.getRandomElement = (function getRandomElement(arr){return cljs.core.get.call(null,arr,cljs.core.rand_int.call(null,cljs.core.count.call(null,arr)));
});
lt.plugins.lorem.getRandomWord = (function getRandomWord(size){return lt.plugins.lorem.getRandomElement.call(null,(function (){var G__8156 = size;if(cljs.core._EQ_.call(null,4,G__8156))
{return lt.plugins.lorem.verylongwords;
} else
{if(cljs.core._EQ_.call(null,3,G__8156))
{return lt.plugins.lorem.longwords;
} else
{if(cljs.core._EQ_.call(null,2,G__8156))
{return lt.plugins.lorem.mediumwords;
} else
{if(cljs.core._EQ_.call(null,1,G__8156))
{return lt.plugins.lorem.shortwords;
} else
{if(cljs.core._EQ_.call(null,0,G__8156))
{return lt.plugins.lorem.allwords;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return lt.plugins.lorem.allwords;
} else
{return null;
}
}
}
}
}
}
})());
});
lt.plugins.lorem.getRandomWords = (function getRandomWords(count){var outText = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);var n__7222__auto___8173 = count;var i_8174 = 0;while(true){
if((i_8174 < n__7222__auto___8173))
{cljs.core.swap_BANG_.call(null,outText,cljs.core.conj," ",lt.plugins.lorem.getRandomWord.call(null,lt.plugins.lorem.size_any));
{
var G__8175 = (i_8174 + 1);
i_8174 = G__8175;
continue;
}
} else
{}
break;
}
return cljs.core.reset_BANG_.call(null,outText,clojure.string.trim.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.deref.call(null,outText))));
});
lt.plugins.lorem.getRandomFragment = (function getRandomFragment(){var outText = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);var pattern = lt.plugins.lorem.getRandomElement.call(null,lt.plugins.lorem.fragment_patterns);var n__7222__auto___8176 = cljs.core.count.call(null,pattern);var i_8177 = 0;while(true){
if((i_8177 < n__7222__auto___8176))
{cljs.core.swap_BANG_.call(null,outText,cljs.core.conj," ",lt.plugins.lorem.getRandomWord.call(null,cljs.core.get.call(null,pattern,i_8177)));
{
var G__8178 = (i_8177 + 1);
i_8177 = G__8178;
continue;
}
} else
{}
break;
}
return cljs.core.reset_BANG_.call(null,outText,clojure.string.trim.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.deref.call(null,outText))));
});
lt.plugins.lorem.sentenceConnector = (function sentenceConnector(){if((cljs.core.rand.call(null) < 0.5))
{return ", ";
} else
{return [cljs.core.str(" "),cljs.core.str(lt.plugins.lorem.getRandomWord.call(null,lt.plugins.lorem.size_short)),cljs.core.str(" ")].join('');
}
});
lt.plugins.lorem.getRandomSentence = (function getRandomSentence(size){var G__8158 = size;if(cljs.core._EQ_.call(null,4,G__8158))
{return [cljs.core.str(getRandomSentence.call(null,lt.plugins.lorem.size_long)),cljs.core.str(lt.plugins.lorem.sentenceConnector.call(null)),cljs.core.str(getRandomSentence.call(null,lt.plugins.lorem.size_long))].join('');
} else
{if(cljs.core._EQ_.call(null,3,G__8158))
{return [cljs.core.str(getRandomSentence.call(null,lt.plugins.lorem.size_medium)),cljs.core.str(lt.plugins.lorem.sentenceConnector.call(null)),cljs.core.str(getRandomSentence.call(null,lt.plugins.lorem.size_medium))].join('');
} else
{if(cljs.core._EQ_.call(null,2,G__8158))
{return [cljs.core.str(getRandomSentence.call(null,lt.plugins.lorem.size_short)),cljs.core.str(lt.plugins.lorem.sentenceConnector.call(null)),cljs.core.str(getRandomSentence.call(null,lt.plugins.lorem.size_short))].join('');
} else
{if(cljs.core._EQ_.call(null,1,G__8158))
{return lt.plugins.lorem.getRandomFragment.call(null);
} else
{if(cljs.core._EQ_.call(null,0,G__8158))
{return getRandomSentence.call(null,lt.plugins.lorem.getRandomElement.call(null,lt.plugins.lorem.allsizes));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return getRandomSentence.call(null,lt.plugins.lorem.default_unit_size);
} else
{return null;
}
}
}
}
}
}
});
lt.plugins.lorem.getRandomSentences = (function getRandomSentences(count,size){var outText = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);var n__7222__auto___8179 = count;var i_8180 = 0;while(true){
if((i_8180 < n__7222__auto___8179))
{cljs.core.swap_BANG_.call(null,outText,cljs.core.conj,clojure.string.capitalize.call(null,lt.plugins.lorem.getRandomSentence.call(null,size)),". ");
{
var G__8181 = (i_8180 + 1);
i_8180 = G__8181;
continue;
}
} else
{}
break;
}
return cljs.core.reset_BANG_.call(null,outText,clojure.string.trim.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.deref.call(null,outText))));
});
lt.plugins.lorem.getRandomParagraph = (function getRandomParagraph(size){var G__8160 = size;if(cljs.core._EQ_.call(null,4,G__8160))
{return [cljs.core.str(getRandomParagraph.call(null,lt.plugins.lorem.size_long)),cljs.core.str(getRandomParagraph.call(null,lt.plugins.lorem.size_long))].join('');
} else
{if(cljs.core._EQ_.call(null,3,G__8160))
{return [cljs.core.str(getRandomParagraph.call(null,lt.plugins.lorem.size_medium)),cljs.core.str(getRandomParagraph.call(null,lt.plugins.lorem.size_medium))].join('');
} else
{if(cljs.core._EQ_.call(null,2,G__8160))
{return [cljs.core.str(getRandomParagraph.call(null,lt.plugins.lorem.size_short)),cljs.core.str(getRandomParagraph.call(null,lt.plugins.lorem.size_short))].join('');
} else
{if(cljs.core._EQ_.call(null,1,G__8160))
{var outText = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);var n__7222__auto___8182 = (3 + cljs.core.rand_int.call(null,2));var i_8183 = 0;while(true){
if((i_8183 < n__7222__auto___8182))
{cljs.core.swap_BANG_.call(null,outText,cljs.core.conj,clojure.string.capitalize.call(null,lt.plugins.lorem.getRandomSentence.call(null,lt.plugins.lorem.size_any)),". ");
{
var G__8184 = (i_8183 + 1);
i_8183 = G__8184;
continue;
}
} else
{}
break;
}
return cljs.core.reset_BANG_.call(null,outText,cljs.core.apply.call(null,cljs.core.str,cljs.core.deref.call(null,outText)));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return getRandomParagraph.call(null,lt.plugins.lorem.default_unit_size);
} else
{return null;
}
}
}
}
}
});
lt.plugins.lorem.getRandomParagraphs = (function getRandomParagraphs(count,size){var outText = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);var n__7222__auto___8185 = count;var i_8186 = 0;while(true){
if((i_8186 < n__7222__auto___8185))
{cljs.core.swap_BANG_.call(null,outText,cljs.core.conj,clojure.string.trim.call(null,lt.plugins.lorem.getRandomParagraph.call(null,size)));
{
var G__8187 = (i_8186 + 1);
i_8186 = G__8187;
continue;
}
} else
{}
break;
}
return cljs.core.reset_BANG_.call(null,outText,cljs.core.apply.call(null,cljs.core.str,cljs.core.deref.call(null,outText)));
});
lt.plugins.lorem.runCommand = (function runCommand(c){var G__8162 = c.call(null,new cljs.core.Keyword(null,"unitType","unitType",721251920));if(cljs.core._EQ_.call(null,"word",G__8162))
{return lt.plugins.lorem.getRandomWords.call(null,c.call(null,new cljs.core.Keyword(null,"unitCount","unitCount",515624285)));
} else
{if(cljs.core._EQ_.call(null,"sentence",G__8162))
{return lt.plugins.lorem.getRandomSentences.call(null,c.call(null,new cljs.core.Keyword(null,"unitCount","unitCount",515624285)),c.call(null,new cljs.core.Keyword(null,"unitSize","unitSize",721207063)));
} else
{if(cljs.core._EQ_.call(null,"paragraph",G__8162))
{return lt.plugins.lorem.getRandomParagraphs.call(null,c.call(null,new cljs.core.Keyword(null,"unitCount","unitCount",515624285)),c.call(null,new cljs.core.Keyword(null,"unitSize","unitSize",721207063)));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return "default";
} else
{return null;
}
}
}
}
});
lt.plugins.lorem.callArgs = (function callArgs(optStr,optInt){var optInt__$1 = ((cljs.core.empty_QMARK_.call(null,optInt))?lt.plugins.lorem.default_unit_count:parseInt(optInt));var config = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"unitType","unitType",721251920),lt.plugins.lorem.default_unit_type,new cljs.core.Keyword(null,"unitCount","unitCount",515624285),optInt__$1,new cljs.core.Keyword(null,"unitSize","unitSize",721207063),lt.plugins.lorem.default_unit_size], null));cljs.core.reset_BANG_.call(null,config,(function (){var G__8164 = optStr;if(cljs.core._EQ_.call(null,"vlong",G__8164))
{return cljs.core.assoc.call(null,cljs.core.deref.call(null,config),new cljs.core.Keyword(null,"unitSize","unitSize",721207063),lt.plugins.lorem.size_very_long);
} else
{if(cljs.core._EQ_.call(null,"long",G__8164))
{return cljs.core.assoc.call(null,cljs.core.deref.call(null,config),new cljs.core.Keyword(null,"unitSize","unitSize",721207063),lt.plugins.lorem.size_long);
} else
{if(cljs.core._EQ_.call(null,"medium",G__8164))
{return cljs.core.assoc.call(null,cljs.core.deref.call(null,config),new cljs.core.Keyword(null,"unitSize","unitSize",721207063),lt.plugins.lorem.size_medium);
} else
{if(cljs.core._EQ_.call(null,"short",G__8164))
{return cljs.core.assoc.call(null,cljs.core.deref.call(null,config),new cljs.core.Keyword(null,"unitSize","unitSize",721207063),lt.plugins.lorem.size_short);
} else
{if(cljs.core._EQ_.call(null,"s",G__8164))
{return cljs.core.assoc.call(null,cljs.core.deref.call(null,config),new cljs.core.Keyword(null,"unitType","unitType",721251920),"sentence");
} else
{if(cljs.core._EQ_.call(null,"w",G__8164))
{return cljs.core.assoc.call(null,cljs.core.deref.call(null,config),new cljs.core.Keyword(null,"unitType","unitType",721251920),"word");
} else
{if(cljs.core._EQ_.call(null,"p",G__8164))
{return cljs.core.assoc.call(null,cljs.core.deref.call(null,config),new cljs.core.Keyword(null,"unitType","unitType",721251920),"paragraph");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return "default";
} else
{return null;
}
}
}
}
}
}
}
}
})());
return lt.plugins.lorem.runCommand.call(null,cljs.core.deref.call(null,config));
});
lt.plugins.lorem.parseArgs = (function parseArgs(arg){var temp__4090__auto__ = cljs.core.re_find.call(null,/^([a-z\?]+)(\d*)$/,arg);if(cljs.core.truth_(temp__4090__auto__))
{var optRes = temp__4090__auto__;return lt.plugins.lorem.callArgs.call(null,cljs.core.get.call(null,optRes,1),cljs.core.get.call(null,optRes,2));
} else
{var temp__4090__auto____$1 = cljs.core.re_find.call(null,/^(\d*)([a-z\?]+)$/,arg);if(cljs.core.truth_(temp__4090__auto____$1))
{var optRes = temp__4090__auto____$1;return lt.plugins.lorem.callArgs.call(null,cljs.core.get.call(null,optRes,2),cljs.core.get.call(null,optRes,1));
} else
{return [cljs.core.str("Error: Unrecognized option '_"),cljs.core.str(arg),cljs.core.str("'.")].join('');
}
}
});
lt.plugins.lorem.parseCommand = (function parseCommand(command){var commandArray = clojure.string.split.call(null,command,/_/);var iter__7091__auto__ = ((function (commandArray){
return (function iter__8169(s__8170){return (new cljs.core.LazySeq(null,((function (commandArray){
return (function (){var s__8170__$1 = s__8170;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8170__$1);if(temp__4092__auto__)
{var s__8170__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8170__$2))
{var c__7089__auto__ = cljs.core.chunk_first.call(null,s__8170__$2);var size__7090__auto__ = cljs.core.count.call(null,c__7089__auto__);var b__8172 = cljs.core.chunk_buffer.call(null,size__7090__auto__);if((function (){var i__8171 = 0;while(true){
if((i__8171 < size__7090__auto__))
{var i = cljs.core._nth.call(null,c__7089__auto__,i__8171);cljs.core.chunk_append.call(null,b__8172,lt.plugins.lorem.parseArgs.call(null,cljs.core.get.call(null,commandArray,i)));
{
var G__8188 = (i__8171 + 1);
i__8171 = G__8188;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8172),iter__8169.call(null,cljs.core.chunk_rest.call(null,s__8170__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8172),null);
}
} else
{var i = cljs.core.first.call(null,s__8170__$2);return cljs.core.cons.call(null,lt.plugins.lorem.parseArgs.call(null,cljs.core.get.call(null,commandArray,i)),iter__8169.call(null,cljs.core.rest.call(null,s__8170__$2)));
}
} else
{return null;
}
break;
}
});})(commandArray))
,null,null));
});})(commandArray))
;return iter__7091__auto__.call(null,cljs.core.range.call(null,1,cljs.core.count.call(null,commandArray)));
});
lt.plugins.lorem.find_command = (function find_command(string){var temp__4090__auto__ = cljs.core.re_find.call(null,/lorem_.\S*/,string);if(cljs.core.truth_(temp__4090__auto__))
{var command = temp__4090__auto__;return cljs.core.apply.call(null,cljs.core.str,lt.plugins.lorem.parseCommand.call(null,command));
} else
{return null;
}
});
lt.plugins.lorem.lorem_ipsum_catch = (function lorem_ipsum_catch(){var cm = lt.objs.editor.__GT_cm_ed.call(null,lt.objs.editor.pool.last_active.call(null));var coords = lt.objs.editor.__GT_cursor.call(null,cm);var pre_word = cm.findPosH(cljs.core.clj__GT_js.call(null,coords),-1,"word",true);lt.objs.editor.range.call(null,cm,pre_word,coords);
return lt.objs.editor.replace.call(null,cm,pre_word,coords,"foo");
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"lorem-ipsum","lorem-ipsum",3554682400),new cljs.core.Keyword(null,"desc","desc",1016984067),"Lorem Ipsum random text generator",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.lorem.lorem_ipsum_catch], null));
}

//# sourceMappingURL=lorem_compiled.js.map