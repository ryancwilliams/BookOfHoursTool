import { RenderableSymbol, Symbol } from "./assets";


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
	public static readonly LANGUAGES = new Map<ELanguage, Language>([
		[ELanguage.ARAMAIC, new Language(ELanguage.ARAMAIC, "Aramaic", new RenderableSymbol(this.SYMBOL_PATH_PREFIX + "w.aramaic.png")],
		[ELanguage.CRACKTRACK, new Language(ELanguage.CRACKTRACK, "Cracktrack", new RenderableSymbol(this.SYMBOL_PATH_PREFIX + "w.cracktrack.png")],
		[ELanguage.ERICAPAEAN, new Language(ELanguage.ERICAPAEAN, "Ericapaean", new RenderableSymbol(this.SYMBOL_PATH_PREFIX + "w.ericapaean.png")],
		[ELanguage.FUCINE, new Language(ELanguage.FUCINE, "Fucine", new RenderableSymbol(this.SYMBOL_PATH_PREFIX + "w.fucine.png")],
		[ELanguage.GREEK, new Language(ELanguage.GREEK, "Greek", new RenderableSymbol(this.SYMBOL_PATH_PREFIX + "w.greek.png")],
		[ELanguage.HENAVEK, new Language(ELanguage.HENAVEK, "Kernewek Henavek", new RenderableSymbol(this.SYMBOL_PATH_PREFIX + "w.henavek.png")],
		[ELanguage.HYKSOS, new Language(ELanguage.HYKSOS, "Hyksos", new RenderableSymbol(this.SYMBOL_PATH_PREFIX + "w.hyksos.png")],
		[ELanguage.KILLASIMI, new Language(ELanguage.KILLASIMI, "Killasimi", new RenderableSymbol(this.SYMBOL_PATH_PREFIX + "w.killasimi.png")],
		[ELanguage.LATIN, new Language(ELanguage.LATIN, "Latin", new RenderableSymbol(this.SYMBOL_PATH_PREFIX + "w.latin.png")],
		[ELanguage.MANDAIC, new Language(ELanguage.MANDAIC, "Deep Mandaic", new RenderableSymbol(this.SYMBOL_PATH_PREFIX + "w.mandaic.png")],
		[ELanguage.PHRYGIAN, new Language(ELanguage.PHRYGIAN, "Phrygian", new RenderableSymbol(this.SYMBOL_PATH_PREFIX + "w.phrygian.png")],
		[ELanguage.RAMSUND, new Language(ELanguage.RAMSUND, "Ramsund", new RenderableSymbol(this.SYMBOL_PATH_PREFIX + "w.ramsund.png")],
		[ELanguage.SABAZINE, new Language(ELanguage.SABAZINE, "Sabazine", new RenderableSymbol(this.SYMBOL_PATH_PREFIX + "w.sabazine.png")],
		[ELanguage.SANSKRIT, new Language(ELanguage.SANSKRIT, "Sanskrit", new RenderableSymbol(this.SYMBOL_PATH_PREFIX + "w.sanskrit.png")],
		[ELanguage.VAK, new Language(ELanguage.VAK, "Vak", new RenderableSymbol(this.SYMBOL_PATH_PREFIX + "w.vak.png")]
	]);

	/**
	 * The enum object for this language.
	 */
	public readonly language: ELanguage;

	/**
	 * The name of the Language.
	 */
	public readonly name: string;

	/**
	 * The path to the symbol for the language.
	 */
	public readonly symbolPath: RenderableSymbol;

	private constructor(language: ELanguage, name: string, symbolPath: RenderableSymbol){
		this.language = language;
		this.name = name;
		this.symbolPath = symbolPath;
	}

}
