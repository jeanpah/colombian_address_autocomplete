// Generated from colombian_direction_grammar.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0015{\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\r\u0003\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0012\u0006",
    "\u0012j\n\u0012\r\u0012\u000e\u0012k\u0003\u0013\u0003\u0013\u0007\u0013",
    "p\n\u0013\f\u0013\u000e\u0013s\u000b\u0013\u0003\u0014\u0006\u0014v",
    "\n\u0014\r\u0014\u000e\u0014w\u0003\u0014\u0003\u0014\u0002\u0002\u0015",
    "\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\t",
    "\u0011\n\u0013\u000b\u0015\f\u0017\r\u0019\u000e\u001b\u000f\u001d\u0010",
    "\u001f\u0011!\u0012#\u0013%\u0014\'\u0015\u0003\u0002\u0006\u0003\u0002",
    "2;\u0003\u0002C\\\u0003\u0002c|\u0005\u0002\u000b\f\u000f\u000f\"\"",
    "\u0002}\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002",
    "\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002",
    "\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002",
    "\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011\u0003\u0002",
    "\u0002\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0002\u0015\u0003\u0002",
    "\u0002\u0002\u0002\u0017\u0003\u0002\u0002\u0002\u0002\u0019\u0003\u0002",
    "\u0002\u0002\u0002\u001b\u0003\u0002\u0002\u0002\u0002\u001d\u0003\u0002",
    "\u0002\u0002\u0002\u001f\u0003\u0002\u0002\u0002\u0002!\u0003\u0002",
    "\u0002\u0002\u0002#\u0003\u0002\u0002\u0002\u0002%\u0003\u0002\u0002",
    "\u0002\u0002\'\u0003\u0002\u0002\u0002\u0003)\u0003\u0002\u0002\u0002",
    "\u0005.\u0003\u0002\u0002\u0002\u00070\u0003\u0002\u0002\u0002\t2\u0003",
    "\u0002\u0002\u0002\u000b5\u0003\u0002\u0002\u0002\r7\u0003\u0002\u0002",
    "\u0002\u000f=\u0003\u0002\u0002\u0002\u0011B\u0003\u0002\u0002\u0002",
    "\u0013E\u0003\u0002\u0002\u0002\u0015K\u0003\u0002\u0002\u0002\u0017",
    "R\u0003\u0002\u0002\u0002\u0019V\u0003\u0002\u0002\u0002\u001bZ\u0003",
    "\u0002\u0002\u0002\u001d]\u0003\u0002\u0002\u0002\u001f_\u0003\u0002",
    "\u0002\u0002!f\u0003\u0002\u0002\u0002#i\u0003\u0002\u0002\u0002%m\u0003",
    "\u0002\u0002\u0002\'u\u0003\u0002\u0002\u0002)*\u0007e\u0002\u0002*",
    "+\u0007q\u0002\u0002+,\u0007r\u0002\u0002,-\u0007{\u0002\u0002-\u0004",
    "\u0003\u0002\u0002\u0002./\u0007*\u0002\u0002/\u0006\u0003\u0002\u0002",
    "\u000201\u0007+\u0002\u00021\b\u0003\u0002\u0002\u000223\u0007c\u0002",
    "\u000234\u0007u\u0002\u00024\n\u0003\u0002\u0002\u000256\u00070\u0002",
    "\u00026\f\u0003\u0002\u0002\u000278\u0007r\u0002\u000289\u0007w\u0002",
    "\u00029:\u0007t\u0002\u0002:;\u0007i\u0002\u0002;<\u0007g\u0002\u0002",
    "<\u000e\u0003\u0002\u0002\u0002=>\u0007n\u0002\u0002>?\u0007k\u0002",
    "\u0002?@\u0007p\u0002\u0002@A\u0007m\u0002\u0002A\u0010\u0003\u0002",
    "\u0002\u0002BC\u0007q\u0002\u0002CD\u0007h\u0002\u0002D\u0012\u0003",
    "\u0002\u0002\u0002EF\u0007n\u0002\u0002FG\u0007k\u0002\u0002GH\u0007",
    "p\u0002\u0002HI\u0007m\u0002\u0002IJ\u0007u\u0002\u0002J\u0014\u0003",
    "\u0002\u0002\u0002KL\u0007e\u0002\u0002LM\u0007t\u0002\u0002MN\u0007",
    "g\u0002\u0002NO\u0007c\u0002\u0002OP\u0007v\u0002\u0002PQ\u0007g\u0002",
    "\u0002Q\u0016\u0003\u0002\u0002\u0002RS\u0007p\u0002\u0002ST\u0007g",
    "\u0002\u0002TU\u0007y\u0002\u0002U\u0018\u0003\u0002\u0002\u0002VW\u0007",
    "c\u0002\u0002WX\u0007f\u0002\u0002XY\u0007f\u0002\u0002Y\u001a\u0003",
    "\u0002\u0002\u0002Z[\u0007v\u0002\u0002[\\\u0007q\u0002\u0002\\\u001c",
    "\u0003\u0002\u0002\u0002]^\u0007.\u0002\u0002^\u001e\u0003\u0002\u0002",
    "\u0002_`\u0007t\u0002\u0002`a\u0007g\u0002\u0002ab\u0007p\u0002\u0002",
    "bc\u0007f\u0002\u0002cd\u0007g\u0002\u0002de\u0007t\u0002\u0002e \u0003",
    "\u0002\u0002\u0002fg\u0007\"\u0002\u0002g\"\u0003\u0002\u0002\u0002",
    "hj\t\u0002\u0002\u0002ih\u0003\u0002\u0002\u0002jk\u0003\u0002\u0002",
    "\u0002ki\u0003\u0002\u0002\u0002kl\u0003\u0002\u0002\u0002l$\u0003\u0002",
    "\u0002\u0002mq\t\u0003\u0002\u0002np\t\u0004\u0002\u0002on\u0003\u0002",
    "\u0002\u0002ps\u0003\u0002\u0002\u0002qo\u0003\u0002\u0002\u0002qr\u0003",
    "\u0002\u0002\u0002r&\u0003\u0002\u0002\u0002sq\u0003\u0002\u0002\u0002",
    "tv\t\u0005\u0002\u0002ut\u0003\u0002\u0002\u0002vw\u0003\u0002\u0002",
    "\u0002wu\u0003\u0002\u0002\u0002wx\u0003\u0002\u0002\u0002xy\u0003\u0002",
    "\u0002\u0002yz\b\u0014\u0002\u0002z(\u0003\u0002\u0002\u0002\u0006\u0002",
    "kqw\u0003\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function GraphGrammarLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

GraphGrammarLexer.prototype = Object.create(antlr4.Lexer.prototype);
GraphGrammarLexer.prototype.constructor = GraphGrammarLexer;

GraphGrammarLexer.EOF = antlr4.Token.EOF;
GraphGrammarLexer.T__0 = 1;
GraphGrammarLexer.T__1 = 2;
GraphGrammarLexer.T__2 = 3;
GraphGrammarLexer.T__3 = 4;
GraphGrammarLexer.T__4 = 5;
GraphGrammarLexer.T__5 = 6;
GraphGrammarLexer.T__6 = 7;
GraphGrammarLexer.T__7 = 8;
GraphGrammarLexer.T__8 = 9;
GraphGrammarLexer.T__9 = 10;
GraphGrammarLexer.T__10 = 11;
GraphGrammarLexer.T__11 = 12;
GraphGrammarLexer.T__12 = 13;
GraphGrammarLexer.T__13 = 14;
GraphGrammarLexer.T__14 = 15;
GraphGrammarLexer.T__15 = 16;
GraphGrammarLexer.CONST = 17;
GraphGrammarLexer.Fidentifier = 18;
GraphGrammarLexer.WS = 19;

GraphGrammarLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

GraphGrammarLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

GraphGrammarLexer.prototype.literalNames = [ null, "'copy'", "'('", "')'", 
                                             "'as'", "'.'", "'purge'", "'link'", 
                                             "'of'", "'links'", "'create'", 
                                             "'new'", "'add'", "'to'", "','", 
                                             "'render'", "' '" ];

GraphGrammarLexer.prototype.symbolicNames = [ null, null, null, null, null, 
                                              null, null, null, null, null, 
                                              null, null, null, null, null, 
                                              null, null, "CONST", "Fidentifier", 
                                              "WS" ];

GraphGrammarLexer.prototype.ruleNames = [ "T__0", "T__1", "T__2", "T__3", 
                                          "T__4", "T__5", "T__6", "T__7", 
                                          "T__8", "T__9", "T__10", "T__11", 
                                          "T__12", "T__13", "T__14", "T__15", 
                                          "CONST", "Fidentifier", "WS" ];

GraphGrammarLexer.prototype.grammarFileName = "colombian_direction_grammar.g4";



exports.GraphGrammarLexer = GraphGrammarLexer;

