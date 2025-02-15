// Generated from /Users/diana_ghindaoanu/Documents/ALF_2022/TP_2022/TP5/demo/Alf.g4 by ANTLR 4.8
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class AlfLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.8", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		WS=1, NEWLINE=2, VARIABLE=3, ADD=4, SUB=5, MUL=6, DIV=7, REM=8, INT=9, 
		FLOAT=10, STRING=11, LP=12, RP=13, EQ=14, SEMICOLON=15, INT_NUMBER=16, 
		FLOAT_NUMBER=17, STRING_TEXT=18;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"WS", "NEWLINE", "VARIABLE", "ADD", "SUB", "MUL", "DIV", "REM", "INT", 
			"FLOAT", "STRING", "LP", "RP", "EQ", "SEMICOLON", "INT_NUMBER", "FLOAT_NUMBER", 
			"STRING_TEXT"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, null, null, "'+'", "'-'", "'*'", "'/'", "'%'", "'int'", "'float'", 
			"'string'", "'('", "')'", "'='", "';'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "WS", "NEWLINE", "VARIABLE", "ADD", "SUB", "MUL", "DIV", "REM", 
			"INT", "FLOAT", "STRING", "LP", "RP", "EQ", "SEMICOLON", "INT_NUMBER", 
			"FLOAT_NUMBER", "STRING_TEXT"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public AlfLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "Alf.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\24{\b\1\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\3\2\3\2\3\2\3\2\3\3\6\3-\n\3\r\3\16\3.\3\3\3\3\3\4\3\4\6\4"+
		"\65\n\4\r\4\16\4\66\3\5\3\5\3\6\3\6\3\7\3\7\3\b\3\b\3\t\3\t\3\n\3\n\3"+
		"\n\3\n\3\13\3\13\3\13\3\13\3\13\3\13\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\r\3"+
		"\r\3\16\3\16\3\17\3\17\3\20\3\20\3\21\6\21]\n\21\r\21\16\21^\3\22\6\22"+
		"b\n\22\r\22\16\22c\3\22\3\22\6\22h\n\22\r\22\16\22i\3\23\3\23\6\23n\n"+
		"\23\r\23\16\23o\3\23\3\23\3\23\6\23u\n\23\r\23\16\23v\3\23\5\23z\n\23"+
		"\2\2\24\3\3\5\4\7\5\t\6\13\7\r\b\17\t\21\n\23\13\25\f\27\r\31\16\33\17"+
		"\35\20\37\21!\22#\23%\24\3\2\7\4\2\f\f\17\17\5\2\62;C\\c|\3\2\62;\3\2"+
		"$$\3\2))\2\u0082\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2\2\2\2\13"+
		"\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2\2\2\2\25\3\2\2"+
		"\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2\2\2\35\3\2\2\2\2\37\3\2\2\2\2"+
		"!\3\2\2\2\2#\3\2\2\2\2%\3\2\2\2\3\'\3\2\2\2\5,\3\2\2\2\7\62\3\2\2\2\t"+
		"8\3\2\2\2\13:\3\2\2\2\r<\3\2\2\2\17>\3\2\2\2\21@\3\2\2\2\23B\3\2\2\2\25"+
		"F\3\2\2\2\27L\3\2\2\2\31S\3\2\2\2\33U\3\2\2\2\35W\3\2\2\2\37Y\3\2\2\2"+
		"!\\\3\2\2\2#a\3\2\2\2%y\3\2\2\2\'(\7\"\2\2()\3\2\2\2)*\b\2\2\2*\4\3\2"+
		"\2\2+-\t\2\2\2,+\3\2\2\2-.\3\2\2\2.,\3\2\2\2./\3\2\2\2/\60\3\2\2\2\60"+
		"\61\b\3\2\2\61\6\3\2\2\2\62\64\7a\2\2\63\65\t\3\2\2\64\63\3\2\2\2\65\66"+
		"\3\2\2\2\66\64\3\2\2\2\66\67\3\2\2\2\67\b\3\2\2\289\7-\2\29\n\3\2\2\2"+
		":;\7/\2\2;\f\3\2\2\2<=\7,\2\2=\16\3\2\2\2>?\7\61\2\2?\20\3\2\2\2@A\7\'"+
		"\2\2A\22\3\2\2\2BC\7k\2\2CD\7p\2\2DE\7v\2\2E\24\3\2\2\2FG\7h\2\2GH\7n"+
		"\2\2HI\7q\2\2IJ\7c\2\2JK\7v\2\2K\26\3\2\2\2LM\7u\2\2MN\7v\2\2NO\7t\2\2"+
		"OP\7k\2\2PQ\7p\2\2QR\7i\2\2R\30\3\2\2\2ST\7*\2\2T\32\3\2\2\2UV\7+\2\2"+
		"V\34\3\2\2\2WX\7?\2\2X\36\3\2\2\2YZ\7=\2\2Z \3\2\2\2[]\t\4\2\2\\[\3\2"+
		"\2\2]^\3\2\2\2^\\\3\2\2\2^_\3\2\2\2_\"\3\2\2\2`b\t\4\2\2a`\3\2\2\2bc\3"+
		"\2\2\2ca\3\2\2\2cd\3\2\2\2de\3\2\2\2eg\7\60\2\2fh\t\4\2\2gf\3\2\2\2hi"+
		"\3\2\2\2ig\3\2\2\2ij\3\2\2\2j$\3\2\2\2km\7$\2\2ln\n\5\2\2ml\3\2\2\2no"+
		"\3\2\2\2om\3\2\2\2op\3\2\2\2pq\3\2\2\2qz\7$\2\2rt\7)\2\2su\n\6\2\2ts\3"+
		"\2\2\2uv\3\2\2\2vt\3\2\2\2vw\3\2\2\2wx\3\2\2\2xz\7)\2\2yk\3\2\2\2yr\3"+
		"\2\2\2z&\3\2\2\2\13\2.\66^ciovy\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}