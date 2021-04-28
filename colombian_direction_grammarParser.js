// Generated from colombian_direction_grammar.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';
import colombian_direction_grammarListener from './colombian_direction_grammarListener.js';

const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u000e,\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0005\u0002",
    "\r\n\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0005\u0002\u0014\n\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0005\u0002\u001c\n\u0002\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0006\u0003!\n\u0003\r\u0003\u000e\u0003\"",
    "\u0005\u0003%\n\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0002\u0002\u0005\u0002\u0004\u0006\u0002\u0002",
    "\u0002-\u0002\b\u0003\u0002\u0002\u0002\u0004$\u0003\u0002\u0002\u0002",
    "\u0006&\u0003\u0002\u0002\u0002\b\t\u0007\b\u0002\u0002\t\n\u0007\n",
    "\u0002\u0002\n\f\u0007\u0003\u0002\u0002\u000b\r\u0007\u0004\u0002\u0002",
    "\f\u000b\u0003\u0002\u0002\u0002\f\r\u0003\u0002\u0002\u0002\r\u000e",
    "\u0003\u0002\u0002\u0002\u000e\u000f\u0007\n\u0002\u0002\u000f\u0010",
    "\u0007\f\u0002\u0002\u0010\u0011\u0007\n\u0002\u0002\u0011\u0013\u0007",
    "\u0003\u0002\u0002\u0012\u0014\u0007\u0004\u0002\u0002\u0013\u0012\u0003",
    "\u0002\u0002\u0002\u0013\u0014\u0003\u0002\u0002\u0002\u0014\u0015\u0003",
    "\u0002\u0002\u0002\u0015\u0016\u0007\n\u0002\u0002\u0016\u0017\u0007",
    "\r\u0002\u0002\u0017\u0018\u0007\n\u0002\u0002\u0018\u001b\u0007\u0003",
    "\u0002\u0002\u0019\u001a\u0007\n\u0002\u0002\u001a\u001c\u0005\u0004",
    "\u0003\u0002\u001b\u0019\u0003\u0002\u0002\u0002\u001b\u001c\u0003\u0002",
    "\u0002\u0002\u001c\u0003\u0003\u0002\u0002\u0002\u001d%\u0007\u0007",
    "\u0002\u0002\u001e \u0007\u0007\u0002\u0002\u001f!\u0005\u0006\u0004",
    "\u0002 \u001f\u0003\u0002\u0002\u0002!\"\u0003\u0002\u0002\u0002\" ",
    "\u0003\u0002\u0002\u0002\"#\u0003\u0002\u0002\u0002#%\u0003\u0002\u0002",
    "\u0002$\u001d\u0003\u0002\u0002\u0002$\u001e\u0003\u0002\u0002\u0002",
    "%\u0005\u0003\u0002\u0002\u0002&\'\u0007\n\u0002\u0002\'(\u0007\u0006",
    "\u0002\u0002()\u0007\n\u0002\u0002)*\u0007\u0005\u0002\u0002*\u0007",
    "\u0003\u0002\u0002\u0002\u0007\f\u0013\u001b\"$"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class colombian_direction_grammarParser extends antlr4.Parser {

    static grammarFileName = "colombian_direction_grammar.g4";
    static literalNames = [ null, null, "'BIS'", null, null, null, null, 
                            null, null, "' '", "'#'", "'-'" ];
    static symbolicNames = [ null, "CONST", "BIS", "WORD", "UNITY", "ENDERS", 
                             "STARTS", "INCOMPLETESTARTS", "S2", "S", "NUMBERSYMBOL", 
                             "DASHSYMBOL", "WS" ];
    static ruleNames = [ "addess", "extra", "complement" ];

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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 6;
	        this.match(colombian_direction_grammarParser.STARTS);
	        this.state = 7;
	        this.match(colombian_direction_grammarParser.S2);
	        this.state = 8;
	        this.match(colombian_direction_grammarParser.CONST);
	        this.state = 10;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===colombian_direction_grammarParser.BIS) {
	            this.state = 9;
	            this.match(colombian_direction_grammarParser.BIS);
	        }

	        this.state = 12;
	        this.match(colombian_direction_grammarParser.S2);
	        this.state = 13;
	        this.match(colombian_direction_grammarParser.NUMBERSYMBOL);
	        this.state = 14;
	        this.match(colombian_direction_grammarParser.S2);
	        this.state = 15;
	        this.match(colombian_direction_grammarParser.CONST);
	        this.state = 17;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===colombian_direction_grammarParser.BIS) {
	            this.state = 16;
	            this.match(colombian_direction_grammarParser.BIS);
	        }

	        this.state = 19;
	        this.match(colombian_direction_grammarParser.S2);
	        this.state = 20;
	        this.match(colombian_direction_grammarParser.DASHSYMBOL);
	        this.state = 21;
	        this.match(colombian_direction_grammarParser.S2);
	        this.state = 22;
	        this.match(colombian_direction_grammarParser.CONST);
	        this.state = 25;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===colombian_direction_grammarParser.S2) {
	            this.state = 23;
	            this.match(colombian_direction_grammarParser.S2);
	            this.state = 24;
	            this.extra();
	        }

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



	extra() {
	    let localctx = new ExtraContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, colombian_direction_grammarParser.RULE_extra);
	    var _la = 0; // Token type
	    try {
	        this.state = 34;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 27;
	            this.match(colombian_direction_grammarParser.ENDERS);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 28;
	            this.match(colombian_direction_grammarParser.ENDERS);
	            this.state = 30; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 29;
	                this.complement();
	                this.state = 32; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===colombian_direction_grammarParser.S2);
	            break;

	        }
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



	complement() {
	    let localctx = new ComplementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, colombian_direction_grammarParser.RULE_complement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 36;
	        this.match(colombian_direction_grammarParser.S2);
	        this.state = 37;
	        this.match(colombian_direction_grammarParser.UNITY);
	        this.state = 38;
	        this.match(colombian_direction_grammarParser.S2);
	        this.state = 39;
	        this.match(colombian_direction_grammarParser.WORD);
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
colombian_direction_grammarParser.BIS = 2;
colombian_direction_grammarParser.WORD = 3;
colombian_direction_grammarParser.UNITY = 4;
colombian_direction_grammarParser.ENDERS = 5;
colombian_direction_grammarParser.STARTS = 6;
colombian_direction_grammarParser.INCOMPLETESTARTS = 7;
colombian_direction_grammarParser.S2 = 8;
colombian_direction_grammarParser.S = 9;
colombian_direction_grammarParser.NUMBERSYMBOL = 10;
colombian_direction_grammarParser.DASHSYMBOL = 11;
colombian_direction_grammarParser.WS = 12;

colombian_direction_grammarParser.RULE_addess = 0;
colombian_direction_grammarParser.RULE_extra = 1;
colombian_direction_grammarParser.RULE_complement = 2;

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

	STARTS() {
	    return this.getToken(colombian_direction_grammarParser.STARTS, 0);
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

	BIS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(colombian_direction_grammarParser.BIS);
	    } else {
	        return this.getToken(colombian_direction_grammarParser.BIS, i);
	    }
	};


	extra() {
	    return this.getTypedRuleContext(ExtraContext,0);
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



class ExtraContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = colombian_direction_grammarParser.RULE_extra;
    }

	ENDERS() {
	    return this.getToken(colombian_direction_grammarParser.ENDERS, 0);
	};

	complement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ComplementContext);
	    } else {
	        return this.getTypedRuleContext(ComplementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof colombian_direction_grammarListener ) {
	        listener.enterExtra(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof colombian_direction_grammarListener ) {
	        listener.exitExtra(this);
		}
	}


}



class ComplementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = colombian_direction_grammarParser.RULE_complement;
    }

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


	UNITY() {
	    return this.getToken(colombian_direction_grammarParser.UNITY, 0);
	};

	WORD() {
	    return this.getToken(colombian_direction_grammarParser.WORD, 0);
	};

	enterRule(listener) {
	    if(listener instanceof colombian_direction_grammarListener ) {
	        listener.enterComplement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof colombian_direction_grammarListener ) {
	        listener.exitComplement(this);
		}
	}


}




colombian_direction_grammarParser.AddessContext = AddessContext; 
colombian_direction_grammarParser.ExtraContext = ExtraContext; 
colombian_direction_grammarParser.ComplementContext = ComplementContext; 
