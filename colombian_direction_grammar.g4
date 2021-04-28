grammar colombian_direction_grammar;
addess : STARTS S2 CONST BIS? S2 NUMBERSYMBOL S2 CONST BIS? S2 DASHSYMBOL S2 CONST (S2 extra)?;
extra: 
    ENDERS |
    ENDERS complement+ ;

complement : S2 UNITY S2 WORD;

CONST:[0-9]+[a-z]?;
BIS: 'BIS';
WORD : '"' .+? '"';
UNITY:'Administraci\u00F3n' |
    'Aeropuerto' |
    'Agrupaci\u00F3n' |
    'Altillo' |
    'Apartamento' |
    'Barrio' |
    'Bloque' |
    'Bodega' |
    'Bulevar' |
    'Casa' |
    'C\u00E9lula' |
    'Centro Comercial' |
    'Circular' |
    'Circunvalar' |
    'Ciudadela' |
    'Conjunto Residencial' |
    'Consultorio' |
    'Cuentas Corridas' |
    'Deposito' |
    'Deposito S\u00F3tano' |    
    'Edificio' |
    'Entrada' |
    'Esquina' |
    'Etapa' |
    'Estaci\u00F3n' |
    'Exterior' |
    'Finca' |
    'Garaje' |
    'Garaje S\u00F3tano' |
    'Interior' |
    'Kil\u00F3metro' |
    'Local' |
    'Local Mezzanine' |
    'Lote' |
    'Manzana' |
    'Mezzanine' |
    'M\u00F3dulo' |
    'Oficina' |
    'Parque' |
    'Parqueadero' |
    'Pasaje' |
    'Paseo' |
    'Peatonal' |
    'Pent-House' |
    'Piso' |
    'Planta' |
    'Predio' |
    'Porter00EDa' |
    'Puesto' |
    'Round Point' |
    'Semis\u00F3tano' |
    'S\u00F3tano' |
    'Sector' |
    'Suite' |
    'Supermanzana' | 
    'Terraza' |
    'Torre' |    
    'Troncal' |
    'Unidad' |
    'Unidad Residencial' |
    'Urbanizaci\u00F3n' |
    'Variante' |
    'V\u00EDa' |
    'Zona';

ENDERS: 
    'Este' |
    'Norte' |
    'Oeste' |
    'Sur';

STARTS : 
    'Avenida Calle' |
    'Avenida Carrera' |
    'Calle' |
    'Carrera' |
    'Carretera' |
    'Diagonal' |
    'Transversal';

INCOMPLETESTARTS:
    'Autopista' |
    'Avenida';

S2: S+;
S : ' ';
NUMBERSYMBOL : '#';
DASHSYMBOL : '-';
WS : [\t\r\n]+ -> skip ; // skip spaces, tabs, newlines