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


var names = [
    'Administración',
    'Aeropuerto',
    'Agrupación',
    'Altillo',
    'Apartamento',
    'Autopista',
    'Avenida',
    'Avenida Calle',
    'Avenida Carrera',
    'Barrio',
    'Bis',
    'Bloque',
    'Bodega',
    'Bulevar',
    'Calle',
    'Carrera',
    'Carretera',
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
    'Diagonal',
    'Edificio',
    'Entrada',
    'Esquina',
    'Etapa',
    'Estación',
    'Exterior',
    'Este',
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
    'Norte',
    'Oeste',
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
    'Round Point (Glorieta)',
    'Semisótano',
    'Sótano',
    'Sector',
    'Suite',
    'Supermanzana',
    'Sur',
    'Terraza',
    'Torre',
    'Transversal',
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
    console.log(output);
}

function sugest_for_token(token, str){
    console.log("TOKEN:", token)
    if (token == "S2"){
        return [str + "␣"]
    }else if(token == "CONST"){
        return [str + "[Numero]"]
    }else if(token == "NUMBERSYMBOL"){
        return [str + "#"]
    }
    else if(token == "DASHSYMBOL"){
        return [str + "-"]
    }
    else if(token == "UNITY"){
        let sugestions = []
        for(let sugestion in names){
            let sug = names[sugestion];
            sugestions.push(str + sug);
        }
        return sugestions
    }else if(token == "<EOF>" && str == ""){
        let sugestions = []
        for(let sugestion in names){
            let sug = names[sugestion];
            sugestions.push(str + sug);
        }
        return sugestions
    }
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
        var typeAssistTokens = ["UNITY","S2","CONST", "NUMBERSYMBOL", "DASHSYMBOL"];
        var parser = recognizer._ctx.parser,
            tokens = parser.getTokenStream().tokens;
        console.log(msg)
        // last token is always "fake" EOF token
        if (tokens.length > 1) {
            var lastToken = tokens[tokens.length - 2],
                tokenType = parser.symbolicNames[lastToken.type];
            this.tokenType = tokenType;
            //console.log(tokenType)
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
            for(let sugestion in names){
                let sug = names[sugestion];
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
        console.log(msg);
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
    console.log(parser)
    return {
        "sugestions":lex.sugestions.concat(el.sugestions),
        "errors":parser._syntaxErrors == 0
    }
}

//get_sugestions("Diagonal 96a # 5 - 17 Este")