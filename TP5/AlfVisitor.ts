// Generated from ./Alf.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `AlfParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface AlfVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `mulExpression`
	 * labeled alternative in `AlfParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMulExpression?: (ctx: MulExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `divExpression`
	 * labeled alternative in `AlfParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDivExpression?: (ctx: DivExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `plusExpression`
	 * labeled alternative in `AlfParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPlusExpression?: (ctx: PlusExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `minusExpression`
	 * labeled alternative in `AlfParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMinusExpression?: (ctx: MinusExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `parExpression`
	 * labeled alternative in `AlfParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParExpression?: (ctx: ParExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `intExpression`
	 * labeled alternative in `AlfParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntExpression?: (ctx: IntExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `floatExpression`
	 * labeled alternative in `AlfParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFloatExpression?: (ctx: FloatExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `varExpression`
	 * labeled alternative in `AlfParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarExpression?: (ctx: VarExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `multilineProg`
	 * labeled alternative in `AlfParser.start`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultilineProg?: (ctx: MultilineProgContext) => Result;

	/**
	 * Visit a parse tree produced by the `declarationRule`
	 * labeled alternative in `AlfParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclarationRule?: (ctx: DeclarationRuleContext) => Result;

	/**
	 * Visit a parse tree produced by the `expressionRule`
	 * labeled alternative in `AlfParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionRule?: (ctx: ExpressionRuleContext) => Result;

	/**
	 * Visit a parse tree produced by the `typeInt`
	 * labeled alternative in `AlfParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeInt?: (ctx: TypeIntContext) => Result;

	/**
	 * Visit a parse tree produced by the `typeFloat`
	 * labeled alternative in `AlfParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeFloat?: (ctx: TypeFloatContext) => Result;

	/**
	 * Visit a parse tree produced by the `typeString`
	 * labeled alternative in `AlfParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeString?: (ctx: TypeStringContext) => Result;

	/**
	 * Visit a parse tree produced by the `variableDeclaration`
	 * labeled alternative in `AlfParser.declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclaration?: (ctx: VariableDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by the `expressionDeclaration`
	 * labeled alternative in `AlfParser.declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionDeclaration?: (ctx: ExpressionDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by the `valueInt`
	 * labeled alternative in `AlfParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueInt?: (ctx: ValueIntContext) => Result;

	/**
	 * Visit a parse tree produced by the `valueFloat`
	 * labeled alternative in `AlfParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueFloat?: (ctx: ValueFloatContext) => Result;

	/**
	 * Visit a parse tree produced by the `valueString`
	 * labeled alternative in `AlfParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueString?: (ctx: ValueStringContext) => Result;

	/**
	 * Visit a parse tree produced by `AlfParser.start`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStart?: (ctx: StartContext) => Result;

	/**
	 * Visit a parse tree produced by `AlfParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `AlfParser.declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclaration?: (ctx: DeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `AlfParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `AlfParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;

	/**
	 * Visit a parse tree produced by `AlfParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue?: (ctx: ValueContext) => Result;
}

