// Generated from colombian_direction_grammar.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';
import colombian_direction_grammarListener from './colombian_direction_grammarListener.js';

const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\t\u0013\u0004\u0002\t\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0002\u0002\u0003\u0002\u0002\u0002\u0002\u0011\u0002\u0004\u0003",
    "\u0002\u0002\u0002\u0004\u0005\u0007\u0004\u0002\u0002\u0005\u0006\u0007",
    "\u0005\u0002\u0002\u0006\u0007\u0007\u0003\u0002\u0002\u0007\b\u0007",
    "\u0005\u0002\u0002\b\t\u0007\u0007\u0002\u0002\t\n\u0007\u0005\u0002",
    "\u0002\n\u000b\u0007\u0003\u0002\u0002\u000b\f\u0007\u0005\u0002\u0002",
    "\f\r\u0007\b\u0002\u0002\r\u000e\u0007\u0005\u0002\u0002\u000e\u000f",
    "\u0007\u0003\u0002\u0002\u000f\u0010\u0007\u0005\u0002\u0002\u0010\u0011",
    "\u0007\u0004\u0002\u0002\u0011\u0003\u0003\u0002\u0002\u0002\u0002"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class colombian_direction_grammarParser extends antlr4.Parser {

    static grammarFileName = "colombian_direction_grammar.g4";
    static literalNames = [ null, null, null, null, "' '", "'#'", "'-'" ];
    static symbolicNames = [ null, "CONST", "UNITY", "S2", "S", "NUMBERSYMBOL", 
                             "DASHSYMBOL", "WS" ];
    static ruleNames = [ "addess" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = colombian_direction_grammarParser.ruleNames;
        this.literalNames = colombian_direction_grammarParser.literalNames;
        this.symbolicNames = colombian_direction_grammarParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	addess() {
	    let localctx = new AddessContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, colombian_direction_grammarParser.RULE_addess);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 2;
	        this.match(colombian_direction_grammarParser.UNITY);
	        this.state = 3;
	        this.match(colombian_direction_grammarParser.S2);
	        this.state = 4;
	        this.match(colombian_direction_grammarParser.CONST);
	        this.state = 5;
	        this.match(colombian_direction_grammarParser.S2);
	        this.state = 6;
	        this.match(colombian_direction_grammarParser.NUMBERSYMBOL);
	        this.state = 7;
	        this.match(colombian_direction_grammarParser.S2);
	        this.state = 8;
	        this.match(colombian_direction_grammarParser.CONST);
	        this.state = 9;
	        this.match(colombian_direction_grammarParser.S2);
	        this.state = 10;
	        this.match(colombian_direction_grammarParser.DASHSYMBOL);
	        this.state = 11;
	        this.match(colombian_direction_grammarParser.S2);
	        this.state = 12;
	        this.match(colombian_direction_grammarParser.CONST);
	        this.state = 13;
	        this.match(colombian_direction_grammarParser.S2);
	        this.state = 14;
	        this.match(colombian_direction_grammarParser.UNITY);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

colombian_direction_grammarParser.EOF = antlr4.Token.EOF;
colombian_direction_grammarParser.CONST = 1;
colombian_direction_grammarParser.UNITY = 2;
colombian_direction_grammarParser.S2 = 3;
colombian_direction_grammarParser.S = 4;
colombian_direction_grammarParser.NUMBERSYMBOL = 5;
colombian_direction_grammarParser.DASHSYMBOL = 6;
colombian_direction_grammarParser.WS = 7;

colombian_direction_grammarParser.RULE_addess = 0;

class AddessContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = colombian_direction_grammarParser.RULE_addess;
    }

	UNITY = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(colombian_direction_grammarParser.UNITY);
	    } else {
	        return this.getToken(colombian_direction_grammarParser.UNITY, i);
	    }
	};


	S2 = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(colombian_direction_grammarParser.S2);
	    } else {
	        return this.getToken(colombian_direction_grammarParser.S2, i);
	    }
	};


	CONST = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(colombian_direction_grammarParser.CONST);
	    } else {
	        return this.getToken(colombian_direction_grammarParser.CONST, i);
	    }
	};


	NUMBERSYMBOL() {
	    return this.getToken(colombian_direction_grammarParser.NUMBERSYMBOL, 0);
	};

	DASHSYMBOL() {
	    return this.getToken(colombian_direction_grammarParser.DASHSYMBOL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof colombian_direction_grammarListener ) {
	        listener.enterAddess(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof colombian_direction_grammarListener ) {
	        listener.exitAddess(this);
		}
	}


}




colombian_direction_grammarParser.AddessContext = AddessContext; 
