import antlr4 from 'antlr4';
import colombian_direction_grammarLexer from './colombian_direction_grammarLexer.js';
import colombian_direction_grammarParser from './colombian_direction_grammarParser.js';
import colombian_direction_grammarListener from './colombian_direction_grammarListener.js';
import {starters, enders, names, find_token_replacement} from "./dictionaries.js";


function printobj(object){
    var output = '';
    for (var property in object) {
    output += property + ': ' + object[property]+'; ';
    }
}

function sugest_for_token(t, str){
    let f_tok = t.replace(/[ {}]/g, "")
    f_tok = f_tok.split(",")
    let sugest = [];
    for(var i = 0;i<f_tok.length ; i++){
        let token = f_tok[i];
        if (token == "S2"){
            sugest = sugest.concat([str + "␣"])
        }else if (token == "BIS"){
            sugest = sugest.concat([str + "BIS"])
        }else if(token == "CONST"){
            sugest = sugest.concat( [str + "[Numero]"] )
        }else if(token == "NUMBERSYMBOL"){
            sugest = sugest.concat( [str + "#"] )
        }
        else if(token == "DASHSYMBOL"){
            sugest = sugest.concat( [str + "-"] )
        }
        else if (token == "ENDERS"){
            let sugestions = []
            for(let sugestion in enders){
                let sug = enders[sugestion];
                sugestions.push(str + sug);
            }
            sugest = sugest.concat( sugestions )
        }
        else if(token == "UNITY"){
            let sugestions = []
            for(let sugestion in names){
                let sug = names[sugestion];
                sugestions.push(str + sug);
            }
            sugest = sugest.concat( sugestions )
        }else if(token == "<EOF>" && str == ""){
            let sugestions = []
            for(let sugestion in names){
                let sug = names[sugestion];
                sugestions.push(str + sug);
            }
            sugest = sugest.concat( sugestions )
        }else if(token == "WORD"){
            sugest = sugest.concat( [str + "[Palabra entre comillas]"] )
        }
    }
    return sugest
    
}

class TestGrammarErrorListener extends antlr4.error.ErrorListener {
    constructor() {
        super();
        this.partialFruit = null;
        this.errors = [];
        this.sugestions = [];
    }

    
    syntaxError(recognizer, offendingSymbol, line, column, msg, err) {
        this.errors.push(arguments);
        this.partialFruit = null;
        var typeAssistTokens = ["STARTS", "UNITY","S2","CONST", "NUMBERSYMBOL", "DASHSYMBOL","ENDERS","WORD"];
        var parser = recognizer._ctx.parser,
            tokens = parser.getTokenStream().tokens;
        // last token is always "fake" EOF token
        if (tokens.length > 1) {
            var lastToken = tokens[tokens.length - 2],
                tokenType = parser.symbolicNames[lastToken.type];
            this.tokenType = tokenType;
            if (typeAssistTokens.indexOf(tokenType) >= 0) {
                this.partialFruit = lastToken.text;
                const atn = parser._interp.atn;
                let ctx = parser._ctx;
                const s = atn.states[parser.state];
                let following = atn.nextTokens(s);
                let text = tokens.slice(0,-1).reduce((accumulator, currentValue) => accumulator + currentValue.text, "")
                let sg = sugest_for_token(
                    following.toTokenString([], parser.symbolicNames),
                    text
                )
                this.sugestions = this.sugestions.concat(sg);
                
            }
        }else if (tokens.length == 1){
            for(let sugestion in starters){
                let sug = starters[sugestion];
                this.sugestions.push(sug);
            }
        }
    }
}

class DianTranslator extends colombian_direction_grammarListener {
    constructor() {
        super();
        this.output = "";
    }
    exitAddess(ctx) {
        let parser = ctx.parser;
        for (let child_index in ctx.children){
            
            let symbol = ctx.children[child_index].symbol
            if(symbol === undefined){
                this.output+=ctx.children[child_index].output
            }else{
                let type = parser.symbolicNames[ctx.children[child_index].symbol.type];
                let text = ctx.children[child_index].getText();
                if (type == "CONST"){
                    this.output +=  text.replace(/[0-9]+/g, function (x) {
                        return x+" ";
                    }).toUpperCase();
                }
                else if (type == "BIS"){
                    this.output +="BIS";
                }
                else if (type == "WORD"){
                    this.output += text.replace(/\"\"/g,"").toUpperCase();
                }
                else if (type == "UNITY"){
                    this.output += find_token_replacement(type, text);
                }
                else if (type == "ENDERS"){
                    this.output += find_token_replacement(type, text);
                }
                else if (type == "STARTS"){
                    this.output += find_token_replacement(type, text);
                }
                else if (type == "S2"){
                    this.output += " ";
                }
                else if (type == "NUMBERSYMBOL"){
                    this.output += "";
                }
                else if (type == "DASHSYMBOL"){
                    this.output += "";
                }
            }
                
        }
        
        this.output = this.output.replace(/ +/g," ");
    }
    exitExtra(ctx) {

        let parser = ctx.parser;
        ctx.output = "";
        for (let child_index in ctx.children){
            
            let symbol = ctx.children[child_index].symbol
            if(symbol === undefined){
                ctx.output+=ctx.children[child_index].output
            }else{
                let type = parser.symbolicNames[ctx.children[child_index].symbol.type];
                let text = ctx.children[child_index].getText();
                if (type == "ENDERS"){
                    ctx.output += find_token_replacement(type, text);
                }else if (type == "S2"){
                    ctx.output += " ";
                }
            }
        }
        
    }
    exitComplement(ctx) {
        let parser = ctx.parser;
        ctx.output = "";
        for (let child_index in ctx.children){
            
            let symbol = ctx.children[child_index].symbol
            if(symbol === undefined){
                ctx.output+=ctx.children[child_index].output
            }else{
                let type = parser.symbolicNames[ctx.children[child_index].symbol.type];
                let text = ctx.children[child_index].getText();

                if (type == "WORD"){
                    ctx.output += text.replace(/[\"\"]/g,"").toUpperCase();
                }
                else if (type == "UNITY"){
                    ctx.output += find_token_replacement(type, text);
                }
                else if (type == "S2"){
                    ctx.output += " ";
                }
                
            }
        }
    }
}

class TestLexerErrorListener extends antlr4.error.ErrorListener {
    constructor() {
        super();
        this.partialFruit = null;
        this.errors = [];      
        this.sugestions = []  
    }

    
    syntaxError(recognizer, offendingSymbol, line, column, msg, err) {
        this.errors.push(arguments);
    }
}


export function get_sugestions(s) {
    let lex = new TestLexerErrorListener()
    let el = new TestGrammarErrorListener()
    const chars = new antlr4.InputStream(s, "utf-8");
    const lexer = new colombian_direction_grammarLexer(chars);
    lexer.removeErrorListeners();
    lexer.addErrorListener( lex );
    const tokens  = new antlr4.CommonTokenStream(lexer);
    const parser = new colombian_direction_grammarParser(tokens);
    parser.removeErrorListeners();
    parser.addErrorListener(el);
    parser.buildParseTrees = true;
    const tree = parser.addess();
    let success = parser._syntaxErrors == 0;
    if (!success){
        return {
            "sugestions":lex.sugestions.concat(el.sugestions),
            "dian_format":null,
            "success":success
        }
    }else{
        const printer = new DianTranslator();
        antlr4.tree.ParseTreeWalker.DEFAULT.walk(printer, tree);
        return {
            "sugestions":lex.sugestions.concat(el.sugestions),
            "dian_format":printer.output,
            "success":success
        }
    }
    

    
}

//let test = "Diagonal 96a # 5a - 15 Este Terraza \"Hola Carebola\" Administración \"segunda\"";
//console.log("sug", get_sugestions(test))