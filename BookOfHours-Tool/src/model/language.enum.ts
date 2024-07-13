import { Symbol } from "./assets";


/**
 * The languages
 */
export enum ELanguage {
	ARAMAIC,
	CRACKTRACK,
	ERICAPAEAN,
	FUCINE,
	GREEK,
	HENAVEK,
	HYKSOS,
	KILLASIMI,
	LATIN,
	MANDAIC,
	PHRYGIAN,
	RAMSUND,
	SABAZINE,
	SANSKRIT,
	VAK
}


/**
 * A specific language
 */
export class Language {
	private static readonly SYMBOL_PATH_PREFIX = "/images/language/"

	/**
	 * Map of ELanguage to Language
	 */
	public static readonly Languages = new Map<ELanguage, Language>([
		[ELanguage.ARAMAIC, new Language(ELanguage.ARAMAIC, "", new Symbol(this.SYMBOL_PATH_PREFIX + "w.aramaic.png")],
		[ELanguage.CRACKTRACK, new Language(ELanguage.CRACKTRACK, "", new Symbol(this.SYMBOL_PATH_PREFIX + "w.cracktrack.png")],
		[ELanguage.ERICAPAEAN, new Language(ELanguage.ERICAPAEAN, "", new Symbol(this.SYMBOL_PATH_PREFIX + "w.ericapaean.png")],
		[ELanguage.FUCINE, new Language(ELanguage.FUCINE, "", new Symbol(this.SYMBOL_PATH_PREFIX + "w.fucine.png")],
		[ELanguage.GREEK, new Language(ELanguage.GREEK, "", new Symbol(this.SYMBOL_PATH_PREFIX + "w.greek.png")],
		[ELanguage.HENAVEK, new Language(ELanguage.HENAVEK, "", new Symbol(this.SYMBOL_PATH_PREFIX + "w.henavek.png")],
		[ELanguage.HYKSOS, new Language(ELanguage.HYKSOS, "", new Symbol(this.SYMBOL_PATH_PREFIX + "w.hyksos.png")],
		[ELanguage.KILLASIMI, new Language(ELanguage.KILLASIMI, "", new Symbol(this.SYMBOL_PATH_PREFIX + "w.killasimi.png")],
		[ELanguage.LATIN, new Language(ELanguage.LATIN, "", new Symbol(this.SYMBOL_PATH_PREFIX + "w.latin.png")],
		[ELanguage.MANDAIC, new Language(ELanguage.MANDAIC, "", new Symbol(this.SYMBOL_PATH_PREFIX + "w.mandaic.png")],
		[ELanguage.PHRYGIAN, new Language(ELanguage.PHRYGIAN, "", new Symbol(this.SYMBOL_PATH_PREFIX + "w.phrygian.png")],
		[ELanguage.RAMSUND, new Language(ELanguage.RAMSUND, "", new Symbol(this.SYMBOL_PATH_PREFIX + "w.ramsund.png")],
		[ELanguage.SABAZINE, new Language(ELanguage.SABAZINE, "", new Symbol(this.SYMBOL_PATH_PREFIX + "w.sabazine.png")],
		[ELanguage.SANSKRIT, new Language(ELanguage.SANSKRIT, "", new Symbol(this.SYMBOL_PATH_PREFIX + "w.sanskrit.png")],
		[ELanguage.VAK, new Language(ELanguage.VAK, "", new Symbol(this.SYMBOL_PATH_PREFIX + "w.vak.png")]
	]);



	/**
	 * The enum object for this language.
	 */
	public readonly language: ELanguage;

	/**
	 * The name of the Language.
	 */
	public readonly name: String;

	/**
	 * The path to the symbol for the language.
	 */
	public readonly symbolPath: Symbol;

	private constructor(language: ELanguage, name: String, symbolPath: Symbol){
		this.language = language;
		this.name = name;
		this.symbolPath = symbolPath;
	}

}
