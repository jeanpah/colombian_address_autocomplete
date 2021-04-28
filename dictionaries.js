
var starters_full = [
    ['AV','Avenida Calle'],
    ['AK','Avenida Carrera'],
    ['CL','Calle'],
    ['CR','Carrera'],
    ['CARR','Carretera'],
    ['DG','Diagonal'],
    ['TV','Transversal']
];

var enders_full = [
    ['ESTE','Este'],
    ['NORTE','Norte'],
    ['OESTE','Oeste'],
    ['SUR','Sur']
];

var names_full = [
    ['AD','Administración'],
    ['AER','Aeropuerto'],
    ['AGP','Agrupación'],
    ['AL','Altillo'],
    ['AP','Apartamento'],
    ['AUT','Autopista'],
    ['BRR','Barrio'],
    ['BL','Bloque'],
    ['BG','Bodega'],
    ['BLV','Bulevar'],
    ['CA','Casa'],
    ['CEL','Célula'],
    ['CC','Centro Comercial'],
    ['CIR','Circular'],
    ['CRV','Circunvalar'],
    ['CD','Ciudadela'],
    ['CON','Conjunto Residencial'],
    ['CS','Consultorio'],
    ['CUENTASCORRIDAS','Cuentas Corridas'],
    ['DP','Deposito'],
    ['DS','Deposito Sótano'],
    ['ED','Edificio'],
    ['EN','Entrada'],
    ['ESQ','Esquina'],
    ['ET','Etapa'],
    ['ESTACION','Estación'],
    ['EX','Exterior'],
    ['FCA','Finca'],
    ['GJ','Garaje'],
    ['GS','Garaje Sótano'],
    ['IN','Interior'],
    ['KM','Kilómetro'],
    ['LC','Local'],
    ['LM','Local Mezzanine'],
    ['LT','Lote'],
    ['MZ','Manzana'],
    ['MN','Mezzanine'],
    ['MD','Módulo'],
    ['OF','Oficina'],
    ['PAR','Parque'],
    ['PQ','Parqueadero'],
    ['PJ','Pasaje'],
    ['PS','Paseo'],
    ['PEATONAL','Peatonal'],
    ['PH','Pent-House'],
    ['P','Piso'],
    ['PL','Planta'],
    ['PD','Predio'],
    ['POR','Portería'],
    ['PT','Puesto'],
    ['RP','Round Point'],
    ['SS','Semisótano'],
    ['ST','Sótano'],
    ['SEC','Sector'],
    ['SUITE','Suite'],
    ['SM','Supermanzana'],
    ['TZ','Terraza'],
    ['TO','Torre'],
    ['TRONCAL','Troncal'],
    ['UN','Unidad'],
    ['UR','Unidad Residencial'],
    ['URB','Urbanización'],
    ['VTE','Variante'],
    ['VIA','Vía'],
    ['ZN','Zona'],
];

function find_token_replacement(token_type, s){
    let find;
    if (token_type == "STARTS"){
        find = starters_full;
    }else if(token_type == "ENDERS"){
        find = enders_full;
    }else if(token_type == "UNITY"){
        find = names_full;
    }

    for(let index in find){
        if(find[index][1] == s){
            return find[index][0];
        }
    }
    throw "Token "+s+" no encontrado";
}

let starters = starters_full.map(element =>{return element[1]})
let enders = enders_full.map(element =>{return element[1]})
let names = names_full.map(element =>{return element[1]})

export {starters, enders, names, starters_full, enders_full, names_full, find_token_replacement};