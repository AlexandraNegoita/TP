// Generated from ./Alf.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { MulExpressionContext } from "./AlfParser";
import { DivExpressionContext } from "./AlfParser";
import { PlusExpressionContext } from "./AlfParser";
import { MinusExpressionContext } from "./AlfParser";
import { ParExpressionContext } from "./AlfParser";
import { IntExpressionContext } from "./AlfParser";
import { FloatExpressionContext } from "./AlfParser";
import { VarExpressionContext } from "./AlfParser";
import { MultilineProgContext } from "./AlfParser";
import { DeclarationRuleContext } from "./AlfParser";
import { ExpressionRuleContext } from "./AlfParser";
import { TypeIntContext } from "./AlfParser";
import { TypeFloatContext } from "./AlfParser";
import { TypeStringContext } from "./AlfParser";
import { VariableDeclarationContext } from "./AlfParser";
import { ExpressionDeclarationContext } from "./AlfParser";
import { ValueIntContext } from "./AlfParser";
import { ValueFloatContext } from "./AlfParser";
import { ValueStringContext } from "./AlfParser";
import { StartContext } from "./AlfParser";
import { StatementContext } from "./AlfParser";
import { DeclarationContext } from "./AlfParser";
import { ExpressionContext } from "./AlfParser";
import { TypeContext } from "./AlfParser";
import { ValueContext } from "./AlfParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `AlfParser`.
 */
export interface AlfListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `mulExpression`
	 * labeled alternative in `AlfParser.expression`.
	 * @param ctx the parse tree
	 */
	enterMulExpression?: (ctx: MulExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `mulExpression`
	 * labeled alternative in `AlfParser.expression`.
	 * @param ctx the parse tree
	 */
	exitMulExpression?: (ctx: MulExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `divExpression`
	 * labeled alternative in `AlfParser.expression`.
	 * @param ctx the parse tree
	 */
	enterDivExpression?: (ctx: DivExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `divExpression`
	 * labeled alternative in `AlfParser.expression`.
	 * @param ctx the parse tree
	 */
	exitDivExpression?: (ctx: DivExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `plusExpression`
	 * labeled alternative in `AlfParser.expression`.
	 * @param ctx the parse tree
	 */
	enterPlusExpression?: (ctx: PlusExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `plusExpression`
	 * labeled alternative in `AlfParser.expression`.
	 * @param ctx the parse tree
	 */
	exitPlusExpression?: (ctx: PlusExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `minusExpression`
	 * labeled alternative in `AlfParser.expression`.
	 * @param ctx the parse tree
	 */
	enterMinusExpression?: (ctx: MinusExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `minusExpression`
	 * labeled alternative in `AlfParser.expression`.
	 * @param ctx the parse tree
	 */
	exitMinusExpression?: (ctx: MinusExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `parExpression`
	 * labeled alternative in `AlfParser.expression`.
	 * @param ctx the parse tree
	 */
	enterParExpression?: (ctx: ParExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `parExpression`
	 * labeled alternative in `AlfParser.expression`.
	 * @param ctx the parse tree
	 */
	exitParExpression?: (ctx: ParExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `intExpression`
	 * labeled alternative in `AlfParser.expression`.
	 * @param ctx the parse tree
	 */
	enterIntExpression?: (ctx: IntExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `intExpression`
	 * labeled alternative in `AlfParser.expression`.
	 * @param ctx the parse tree
	 */
	exitIntExpression?: (ctx: IntExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `floatExpression`
	 * labeled alternative in `AlfParser.expression`.
	 * @param ctx the parse tree
	 */
	enterFloatExpression?: (ctx: FloatExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `floatExpression`
	 * labeled alternative in `AlfParser.expression`.
	 * @param ctx the parse tree
	 */
	exitFloatExpression?: (ctx: FloatExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `varExpression`
	 * labeled alternative in `AlfParser.expression`.
	 * @param ctx the parse tree
	 */
	enterVarExpression?: (ctx: VarExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `varExpression`
	 * labeled alternative in `AlfParser.expression`.
	 * @param ctx the parse tree
	 */
	exitVarExpression?: (ctx: VarExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `multilineProg`
	 * labeled alternative in `AlfParser.start`.
	 * @param ctx the parse tree
	 */
	enterMultilineProg?: (ctx: MultilineProgContext) => void;
	/**
	 * Exit a parse tree produced by the `multilineProg`
	 * labeled alternative in `AlfParser.start`.
	 * @param ctx the parse tree
	 */
	exitMultilineProg?: (ctx: MultilineProgContext) => void;

	/**
	 * Enter a parse tree produced by the `declarationRule`
	 * labeled alternative in `AlfParser.statement`.
	 * @param ctx the parse tree
	 */
	enterDeclarationRule?: (ctx: DeclarationRuleContext) => void;
	/**
	 * Exit a parse tree produced by the `declarationRule`
	 * labeled alternative in `AlfParser.statement`.
	 * @param ctx the parse tree
	 */
	exitDeclarationRule?: (ctx: DeclarationRuleContext) => void;

	/**
	 * Enter a parse tree produced by the `expressionRule`
	 * labeled alternative in `AlfParser.statement`.
	 * @param ctx the parse tree
	 */
	enterExpressionRule?: (ctx: ExpressionRuleContext) => void;
	/**
	 * Exit a parse tree produced by the `expressionRule`
	 * labeled alternative in `AlfParser.statement`.
	 * @param ctx the parse tree
	 */
	exitExpressionRule?: (ctx: ExpressionRuleContext) => void;

	/**
	 * Enter a parse tree produced by the `typeInt`
	 * labeled alternative in `AlfParser.type`.
	 * @param ctx the parse tree
	 */
	enterTypeInt?: (ctx: TypeIntContext) => void;
	/**
	 * Exit a parse tree produced by the `typeInt`
	 * labeled alternative in `AlfParser.type`.
	 * @param ctx the parse tree
	 */
	exitTypeInt?: (ctx: TypeIntContext) => void;

	/**
	 * Enter a parse tree produced by the `typeFloat`
	 * labeled alternative in `AlfParser.type`.
	 * @param ctx the parse tree
	 */
	enterTypeFloat?: (ctx: TypeFloatContext) => void;
	/**
	 * Exit a parse tree produced by the `typeFloat`
	 * labeled alternative in `AlfParser.type`.
	 * @param ctx the parse tree
	 */
	exitTypeFloat?: (ctx: TypeFloatContext) => void;

	/**
	 * Enter a parse tree produced by the `typeString`
	 * labeled alternative in `AlfParser.type`.
	 * @param ctx the parse tree
	 */
	enterTypeString?: (ctx: TypeStringContext) => void;
	/**
	 * Exit a parse tree produced by the `typeString`
	 * labeled alternative in `AlfParser.type`.
	 * @param ctx the parse tree
	 */
	exitTypeString?: (ctx: TypeStringContext) => void;

	/**
	 * Enter a parse tree produced by the `variableDeclaration`
	 * labeled alternative in `AlfParser.declaration`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclaration?: (ctx: VariableDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by the `variableDeclaration`
	 * labeled alternative in `AlfParser.declaration`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclaration?: (ctx: VariableDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by the `expressionDeclaration`
	 * labeled alternative in `AlfParser.declaration`.
	 * @param ctx the parse tree
	 */
	enterExpressionDeclaration?: (ctx: ExpressionDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by the `expressionDeclaration`
	 * labeled alternative in `AlfParser.declaration`.
	 * @param ctx the parse tree
	 */
	exitExpressionDeclaration?: (ctx: ExpressionDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by the `valueInt`
	 * labeled alternative in `AlfParser.value`.
	 * @param ctx the parse tree
	 */
	enterValueInt?: (ctx: ValueIntContext) => void;
	/**
	 * Exit a parse tree produced by the `valueInt`
	 * labeled alternative in `AlfParser.value`.
	 * @param ctx the parse tree
	 */
	exitValueInt?: (ctx: ValueIntContext) => void;

	/**
	 * Enter a parse tree produced by the `valueFloat`
	 * labeled alternative in `AlfParser.value`.
	 * @param ctx the parse tree
	 */
	enterValueFloat?: (ctx: ValueFloatContext) => void;
	/**
	 * Exit a parse tree produced by the `valueFloat`
	 * labeled alternative in `AlfParser.value`.
	 * @param ctx the parse tree
	 */
	exitValueFloat?: (ctx: ValueFloatContext) => void;

	/**
	 * Enter a parse tree produced by the `valueString`
	 * labeled alternative in `AlfParser.value`.
	 * @param ctx the parse tree
	 */
	enterValueString?: (ctx: ValueStringContext) => void;
	/**
	 * Exit a parse tree produced by the `valueString`
	 * labeled alternative in `AlfParser.value`.
	 * @param ctx the parse tree
	 */
	exitValueString?: (ctx: ValueStringContext) => void;

	/**
	 * Enter a parse tree produced by `AlfParser.start`.
	 * @param ctx the parse tree
	 */
	enterStart?: (ctx: StartContext) => void;
	/**
	 * Exit a parse tree produced by `AlfParser.start`.
	 * @param ctx the parse tree
	 */
	exitStart?: (ctx: StartContext) => void;

	/**
	 * Enter a parse tree produced by `AlfParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `AlfParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `AlfParser.declaration`.
	 * @param ctx the parse tree
	 */
	enterDeclaration?: (ctx: DeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `AlfParser.declaration`.
	 * @param ctx the parse tree
	 */
	exitDeclaration?: (ctx: DeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `AlfParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `AlfParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `AlfParser.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `AlfParser.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;

	/**
	 * Enter a parse tree produced by `AlfParser.value`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by `AlfParser.value`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;
}

