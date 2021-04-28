grammar colombian_direction_grammar;
addess : UNITY S2 CONST S2 NUMBERSYMBOL S2 CONST S2 DASHSYMBOL S2 CONST S2 UNITY;


CONST:[0-9]+[a-z]?;
UNITY:'Administraci\u00F3n' |
    'Aeropuerto' |
    'Agrupaci\u00F3n' |
    'Altillo' |
    'Apartamento' |
    'Autopista' |
    'Avenida' |
    'Avenida Calle' |
    'Avenida Carrera' |
    'Barrio' |
    'Bis' |
    'Bloque' |
    'Bodega' |
    'Bulevar' |
    'Calle' |
    'Carrera' |
    'Carretera' |
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
    'Diagonal' |
    'Edificio' |
    'Entrada' |
    'Esquina' |
    'Etapa' |
    'Estaci\u00F3n' |
    'Exterior' |
    'Este' |
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
    'Norte' |
    'Oeste' |
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
    'Round Point (Glorieta)' |
    'Semis\u00F3tano' |
    'S\u00F3tano' |
    'Sector' |
    'Suite' |
    'Supermanzana' |
    'Sur' |
    'Terraza' |
    'Torre' |
    'Transversal' |
    'Troncal' |
    'Unidad' |
    'Unidad Residencial' |
    'Urbanizaci\u00F3n' |
    'Variante' |
    'V\u00EDa' |
    'Zona';

S2: S+;
S : ' ';
NUMBERSYMBOL : '#';
DASHSYMBOL : '-';
WS : [\t\r\n]+ -> skip ; // skip spaces, tabs, newlines