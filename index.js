import antlr4 from 'antlr4';
import colombian_direction_grammarLexer from './colombian_direction_grammarLexer.js';
import colombian_direction_grammarParser from './colombian_direction_grammarParser.js';
import colombian_direction_grammarListener from './colombian_direction_grammarListener.js';
/*
import autosuggest from 'antlr4-autosuggest';

const sug = new autosuggest.autosuggester(colombian_direction_grammarLexer, colombian_direction_grammarParser, "LOWER");
let suggestions = sug.autosuggest(s);

console.log(suggestions)

*/

var starters = [
    'Avenida Calle',
    'Avenida Carrera',
    'Calle',
    'Carrera',
    'Carretera',
    'Diagonal',
    'Transversal'
];

var enders = [
    'Este',
    'Norte',
    'Oeste',
    'Sur'
];

var names = [
    'Administración',
    'Aeropuerto',
    'Agrupación',
    'Altillo',
    'Apartamento',
    'Autopista',
    'Barrio',
    'Bloque',
    'Bodega',
    'Bulevar',
    'Casa',
    'Célula',
    'Centro Comercial',
    'Circular',
    'Circunvalar',
    'Ciudadela',
    'Conjunto Residencial',
    'Consultorio',
    'Cuentas Corridas',
    'Deposito',
    'Deposito Sótano',
    'Edificio',
    'Entrada',
    'Esquina',
    'Etapa',
    'Estación',
    'Exterior',
    'Finca',
    'Garaje',
    'Garaje Sótano',
    'Interior',
    'Kilómetro',
    'Local',
    'Local Mezzanine',
    'Lote',
    'Manzana',
    'Mezzanine',
    'Módulo',
    'Oficina',
    'Parque',
    'Parqueadero',
    'Pasaje',
    'Paseo',
    'Peatonal',
    'Pent-House',
    'Piso',
    'Planta',
    'Predio',
    'Portería',
    'Puesto',
    'Round Point',
    'Semisótano',
    'Sótano',
    'Sector',
    'Suite',
    'Supermanzana',
    'Terraza',
    'Torre',
    'Troncal',
    'Unidad',
    'Unidad Residencial',
    'Urbanización',
    'Variante',
    'Vía',
    'Zona',
]

function printobj(object){
    var output = '';
    for (var property in object) {
    output += property + ': ' + object[property]+'; ';
    }
    console.log("err2",output);
}

function sugest_for_token(t, str){
    let f_tok = t.replace(/[ {}]/g, "")
    f_tok = f_tok.split(",")
    let sugest = [];
    for(var i = 0;i<f_tok.length ; i++){
        let token = f_tok[i];
        console.log("TOKEN:", typeof token, token)
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
        //console.log("err3",msg)
        // last token is always "fake" EOF token
        if (tokens.length > 1) {
            //console.log("tokens", tokens.map(element => {return parser.symbolicNames[element.type]}));
            var lastToken = tokens[tokens.length - 2],
                tokenType = parser.symbolicNames[lastToken.type];
            this.tokenType = tokenType;
            //console.log("tokentype",tokenType)
            if (typeAssistTokens.indexOf(tokenType) >= 0) {
                this.partialFruit = lastToken.text;
                const atn = parser._interp.atn;
                let ctx = parser._ctx;
                const s = atn.states[parser.state];
                //console.log(ctx)
                //console.log("rule", parser.ruleNames[s.ruleIndex])
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



class TestLexerErrorListener extends antlr4.error.ErrorListener {
    constructor() {
        super();
        this.partialFruit = null;
        this.errors = [];      
        this.sugestions = []  
    }

    
    syntaxError(recognizer, offendingSymbol, line, column, msg, err) {
        console.log("err1",msg);
        this.errors.push(arguments);
        /*let sugest = recognizer._input.strdata
        let error = sugest.substr(err.startIndex, recognizer._input.index).trim()
        console.log(error)
        let data = [];
        names.forEach((elment)=>{
            if(elment.indexOf(error)>-1){
                data.push(elment)
            }
        })
        for(let sugestion in data){
            let sug = sugest.substr(0, err.startIndex) +data[sugestion]+ sugest.substr(recognizer._input.index, sugest.length);
            this.sugestions.push(sug);
        }
        
        this.errors.push(arguments);*/
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
    //console.log(parser)
    return {
        "sugestions":lex.sugestions.concat(el.sugestions),
        "success":parser._syntaxErrors == 0
    }
}

console.log("sug", get_sugestions("Diagonal 96a # 5a - 15 Este Terraza \"as"))