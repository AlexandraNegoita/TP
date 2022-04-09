import {
  CharStreams,
  CodePointCharStream,
  CommonTokenStream,
  Token,
} from "antlr4ts";
import { AlfLexer } from "./AlfLexer.js";
import {
  AlfParser,
  TypeFloatContext,
  TypeIntContext,
  TypeStringContext,
  ValueFloatContext,
  ValueIntContext,
  ValueStringContext,
  VariableDeclarationContext,
  MultilineProgContext,
  MulExpressionContext,
  DivExpressionContext,
  PlusExpressionContext,
  MinusExpressionContext,
  ParExpressionContext,
  VarExpressionContext,
  IntExpressionContext,
  FloatExpressionContext,
  ExpressionDeclarationContext,
} from "./AlfParser.js";
import { AlfListener } from "./AlfListener.js";
import { AlfVisitor } from "./AlfVisitor.js";
import * as fs from "fs";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";

let input: string = fs.readFileSync("./sample.txt").toString();
let inputStream: CodePointCharStream = CharStreams.fromString(input);
let lexer: AlfLexer = new AlfLexer(inputStream);
let tokenStream: CommonTokenStream = new CommonTokenStream(lexer);
let parser: AlfParser = new AlfParser(tokenStream);

let tree = parser.start();

abstract class ASTNode {
  constructor() {}
}

class StatementNode extends ASTNode {
  constructor(public readonly statements: ASTNode[]) {
    super();
  }
  toJSON() {
    return {
      id: "statement",
      statement: this.statements
    }
  }
}
class DeclarationNode extends ASTNode {
  constructor(
    public readonly variable_type: string,
    public readonly variable: string,
    public readonly op: string,
    public readonly value: string | number,
    public readonly expression: ExpressionNode
  ) {
    super();
  }
  toJSON() {
    return {
      id: "declaration",
      variable_type: this.variable_type,
      variable: this.variable,
      value: this.value
    }
  }
}
class ExpressionNode extends ASTNode {
    public readonly expression_left: ExpressionNode=new ExpressionNode(new ValueNode(""));
    public readonly op: string="";
    public readonly expression_right:ExpressionNode=new ExpressionNode(new ValueNode(""));

    public readonly lp: string="";
    public readonly expression_center:ExpressionNode=new ExpressionNode(new ValueNode(""));
    public readonly rp: string="";

    public readonly value: ValueNode=new ValueNode("");

  constructor(
    expression_left: ExpressionNode,
    op: string,
    expression_right:ExpressionNode,
  );
  constructor(
    lp: string,
    expression_center: ExpressionNode,
    rp: string,
  );
  constructor(
    value: ValueNode
  );
  constructor(array: string | ASTNode) {
      super();
  }
  toJSON() {
    return {
      id: "expression",
      expression_left: this.expression_left,
      expression_right: this.expression_right,
      op: this.op,
      lp: this.lp,
      rp: this.rp,
      value: this.value
    }
  }
}



class ValueNode extends ASTNode {
  constructor(public readonly value: number | string) {
    super();
  }
  toJSON() {
    return {
      id: "value",
      value: this.value
    }
  }
}

class TypeNode extends ASTNode {
  constructor(public readonly type_name: string) {
    super();
  }
  toJSON() {
    return {
      id: "type",
      type: this.type_name
    }
  }
}

class MyAlfVisitor
  extends AbstractParseTreeVisitor<ASTNode>
  implements AlfVisitor<ASTNode>
{
  defaultResult() {
    return new StatementNode({} as ASTNode[]);
  }
  visitMultilineProg(ctx:MultilineProgContext): StatementNode{
    let statements=[];
    for(let i=0;i<ctx.statement().length;i++){
      statements[i]=this.visit(ctx.statement(i));
    }
    if(statements){
      return new StatementNode(statements);
    }
    else{
      throw new Error();
    }
  }
  visitVariableDeclaration(ctx: VariableDeclarationContext): DeclarationNode {
    return new DeclarationNode(
      (this.visit(ctx.type()) as TypeNode).type_name,
      ctx.VARIABLE().text,
      ctx.EQ().text,
      (this.visit(ctx.value()) as ValueNode).value, 
    );
  }
  visitExpressionDeclaration(ctx: ExpressionDeclarationContext): DeclarationNode {
    return new DeclarationNode(
      (this.visit(ctx.type()) as TypeNode).type_name,
      ctx.VARIABLE().text,
      ctx.EQ().text,
      (this.visit(ctx.expression()) as ExpressionNode).expression, 
    );
  }

  visitIntExpression (ctx: IntExpressionContext) : ExpressionNode {
    return new ExpressionNode(new ValueNode(parseInt(ctx.INT_NUMBER().text)));
  }

  visitFloatExpression (ctx: FloatExpressionContext) : ExpressionNode {
    return new ExpressionNode(new ValueNode(parseFloat(ctx.FLOAT_NUMBER().text)));
  }

  visitVarExpression (ctx: VarExpressionContext) : ExpressionNode {
    return new ExpressionNode(new ValueNode(ctx.VARIABLE().text));
  }

  visitPlusExpression(ctx: PlusExpressionContext) : ExpressionNode{
    return new ExpressionNode(
        (this.visit(ctx._left) as ExpressionNode).expression_left,
        ctx.PLUS().text,
        (this.visit(ctx._right) as ExpressionNode).expression_right,
    );
  }

  visitDivExpression(ctx: DivExpressionContext) : ExpressionNode{
    return new ExpressionNode(
        (this.visit(ctx._left) as ExpressionNode).expression_left,
        ctx.DIV().text,
        (this.visit(ctx._right) as ExpressionNode).expression_right,
    );
  }

  visitMinusExpression(ctx: MinusExpressionContext) : ExpressionNode{
    return new ExpressionNode(
        (this.visit(ctx._left) as ExpressionNode).expression_left,
        ctx.MINUS().text,
        (this.visit(ctx._right) as ExpressionNode).expression_right,
    );
  }

  visitMulExpression(ctx: MulExpressionContext) : ExpressionNode{
    return new ExpressionNode(
        (this.visit(ctx._left) as ExpressionNode).expression_left,
        ctx.MUL().text,
        (this.visit(ctx._right) as ExpressionNode).expression_right,
    );
  }

  visitParExpression(ctx: ParExpressionContext) : ExpressionNode{
    return new ExpressionNode(
      ctx.LP().text,
      (this.visit(ctx._center) as ExpressionNode).expression_center,
      ctx.RP().text,
    );
  }

  visitValueInt(ctx: ValueIntContext): ValueNode {
    return new ValueNode(parseInt(ctx.INT_NUMBER().text));
  }
  visitValueFloat(ctx: ValueFloatContext): ValueNode {
    return new ValueNode(parseFloat(ctx.FLOAT_NUMBER().text));
  }
  visitValueString(ctx: ValueStringContext): ValueNode {
    return new ValueNode(ctx.STRING_TEXT().text);
  }
  visitTypeInt(ctx: TypeIntContext): TypeNode {
    return new TypeNode(ctx.INT().text);
  }
  visitTypeString(ctx: TypeStringContext): TypeNode {
    return new TypeNode(ctx.STRING().text);
  }
  visitTypeFloat(ctx: TypeFloatContext): TypeNode {
    return new TypeNode(ctx.FLOAT().text);
  }
}
const visitor = new MyAlfVisitor();

try {
  fs.writeFileSync('./output.json', JSON.stringify(visitor.visit(tree), null, 4));
} catch(error) {
  console.log(error);
}