// Define a grammar called Hello
grammar GraphGrammar;
spec : (copy_stm| purge_single_stm | purge_all_stm | create_stm | single_add_to_link | multiple_add_to_link| perpesctive_call_stm)+;

copy_stm : 'copy' old_spec=identifier ('(' old_id = INT ')')? 'as' new_spec=identifier '.';
purge_single_stm: 'purge' 'link' link_name = identifier 'of' spec_name = identifier ('(' spec_id=INT ')')? '.';
purge_all_stm: 'purge' 'links' 'of' spec_name = identifier ('(' spec_id=INT ')')? '.';
create_stm: 'create' 'new' type_name = identifier 'as' new_spec = identifier '.';
single_add_to_link: 'add' child_spec = identifier 'to' 'link' link_name = identifier 'of' parent_name = identifier ('(' parent_id = INT ')')? '.';
multiple_add_to_link: 'add' child_specs = id_list 'to' link_name = identifier 'of' parent_name = identifier ('(' parent_id = INT ')')? '.';
id_list : elemets += identifier (',' elemets += identifier)*;
perpesctive_call_stm: 'render' spec_name = identifier 'as' perspective_name=identifier '.'; 

CONST:[0-9]+;
identifier :  Fidentifier (' ' Fidentifier)*;  
Fidentifier : [A-Z][a-z]*;  // match lower-case identifiers
WS : [ \t\r\n]+ -> skip ; // skip spaces, tabs, newlines