grammar Alf;


start       : (statement ';' NEWLINE*)*                 #multilineProg
            ;

statement   : declaration   #declarationRule
            |expression     #expressionRule
            ;

declaration : type VARIABLE EQ value       #variableDeclaration
            | type VARIABLE EQ expression   #expressionDeclaration
            ;

expression: left=expression op=MUL right=expression             #mulExpression
          | left=expression op=DIV right=expression             #divExpression                 
          | left=expression op=PLUS right=expression            #plusExpression
          | left=expression op=MINUS right=expression           #minusExpression
          | LP center=expression RP                             #parExpression
          | INT_NUMBER                                          #intExpression
          | FLOAT_NUMBER                                        #floatExpression
          | VARIABLE                                            #varExpression                         
          ;

type        : INT                           #typeInt
            | FLOAT                         #typeFloat
            | STRING                        #typeString
            ;

value       : INT_NUMBER                    #valueInt
            | FLOAT_NUMBER                  #valueFloat
            | STRING_TEXT                   #valueString
            ;

WS          :   (' ')       -> skip;
NEWLINE     :   ([\r\n]+)   -> skip;
VARIABLE    :   ('_'[a-zA-Z0-9]+);
PLUS         :   '+';
MINUS         :   '-';
MUL         :   '*';
DIV         :   '/';
REM         :   '%';
INT         :   'int';
FLOAT       :   'float';
STRING      :   'string';
LP          :   '(';
RP          :   ')';
EQ          :   '=';
SEMICOLON   :   ';';
INT_NUMBER  :   ([0-9]+);
FLOAT_NUMBER:   ([0-9]+'.'[0-9]+);
STRING_TEXT :   ('"'~["]+'"'|'\''~[']+'\'');
