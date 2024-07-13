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
	public static readonly ARAMAIC = new Language(ELanguage.ARAMAIC, "", new Symbol(this.SYMBOL_PATH_PREFIX + "w.aramaic.png"));
	public static readonly CRACKTRACK = new Language(ELanguage.CRACKTRACK, "", new Symbol(this.SYMBOL_PATH_PREFIX + "w.cracktrack.png"));
	public static readonly ERICAPAEAN = new Language(ELanguage.ERICAPAEAN, "", new Symbol(this.SYMBOL_PATH_PREFIX + "w.ericapaean.png"));
	public static readonly FUCINE = new Language(ELanguage.FUCINE, "", new Symbol(this.SYMBOL_PATH_PREFIX + "w.fucine.png"));
	public static readonly GREEK = new Language(ELanguage.GREEK, "", new Symbol(this.SYMBOL_PATH_PREFIX + "w.greek.png"));
	public static readonly HENAVEK = new Language(ELanguage.HENAVEK, "", new Symbol(this.SYMBOL_PATH_PREFIX + "w.henavek.png"));
	public static readonly HYKSOS = new Language(ELanguage.HYKSOS, "", new Symbol(this.SYMBOL_PATH_PREFIX + "w.hyksos.png"));
	public static readonly KILLASIMI = new Language(ELanguage.KILLASIMI, "", new Symbol(this.SYMBOL_PATH_PREFIX + "w.killasimi.png"));
	public static readonly LATIN = new Language(ELanguage.LATIN, "", new Symbol(this.SYMBOL_PATH_PREFIX + "w.latin.png"));
	public static readonly MANDAIC = new Language(ELanguage.MANDAIC, "", new Symbol(this.SYMBOL_PATH_PREFIX + "w.mandaic.png"));
	public static readonly PHRYGIAN = new Language(ELanguage.PHRYGIAN, "", new Symbol(this.SYMBOL_PATH_PREFIX + "w.phrygian.png"));
	public static readonly RAMSUND = new Language(ELanguage.RAMSUND, "", new Symbol(this.SYMBOL_PATH_PREFIX + "w.ramsund.png"));
	public static readonly SABAZINE = new Language(ELanguage.SABAZINE, "", new Symbol(this.SYMBOL_PATH_PREFIX + "w.sabazine.png"));
	public static readonly SANSKRIT = new Language(ELanguage.SANSKRIT, "", new Symbol(this.SYMBOL_PATH_PREFIX + "w.sanskrit.png"));
	public static readonly VAK = new Language(ELanguage.VAK, "", new Symbol(this.SYMBOL_PATH_PREFIX + "w.vak.png"));

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
