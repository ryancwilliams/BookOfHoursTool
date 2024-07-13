import { RenderableSymbol } from "./assets";

/**
 * The Principles
 */
export enum EPrinciple {
	EDGE,
	FORGE,
	GRAIL,
	HEART,
	KNOCK,
	LANTERN,
	MOON,
	MOTH,
	NECTAR,
	ROSE,
	SCALE,
	SKY,
	WINTER
}


/**
 * A specific Principle
 */
export class Principle {
	private static readonly SYMBOL_PATH_PREFIX = "/images/principles/"

	/**
	 * Map of EPrinciple to Principle
	 */
	public static readonly PRINCIPLES = new Map<EPrinciple, Principle>([
		[EPrinciple.EDGE, new Principle(EPrinciple.EDGE, "Edge", new RenderableSymbol(this.SYMBOL_PATH_PREFIX + "edge.png")],
		[EPrinciple.FORGE, new Principle(EPrinciple.FORGE, "Forge", new RenderableSymbol(this.SYMBOL_PATH_PREFIX + "forge.png")],
		[EPrinciple.GRAIL, new Principle(EPrinciple.GRAIL, "Grail", new RenderableSymbol(this.SYMBOL_PATH_PREFIX + "grail.png")],
		[EPrinciple.HEART, new Principle(EPrinciple.HEART, "Heart", new RenderableSymbol(this.SYMBOL_PATH_PREFIX + "heart.png")],
		[EPrinciple.KNOCK, new Principle(EPrinciple.KNOCK, "Knock", new RenderableSymbol(this.SYMBOL_PATH_PREFIX + "knock.png")],
		[EPrinciple.LANTERN, new Principle(EPrinciple.LANTERN, "Lantern", new RenderableSymbol(this.SYMBOL_PATH_PREFIX + "lantern.png")],
		[EPrinciple.MOON, new Principle(EPrinciple.MOON, "Moon", new RenderableSymbol(this.SYMBOL_PATH_PREFIX + "moom.png")],
		[EPrinciple.MOTH, new Principle(EPrinciple.MOTH, "Moth", new RenderableSymbol(this.SYMBOL_PATH_PREFIX + "moth.png")],
		[EPrinciple.NECTAR, new Principle(EPrinciple.NECTAR, "Nectar", new RenderableSymbol(this.SYMBOL_PATH_PREFIX + "nectar.png")],
		[EPrinciple.ROSE, new Principle(EPrinciple.ROSE, "Rose", new RenderableSymbol(this.SYMBOL_PATH_PREFIX + "rose.png")],
		[EPrinciple.SCALE, new Principle(EPrinciple.SCALE, "Scale", new RenderableSymbol(this.SYMBOL_PATH_PREFIX + "scale.png")],
		[EPrinciple.SKY, new Principle(EPrinciple.SKY, "Sky", new RenderableSymbol(this.SYMBOL_PATH_PREFIX + "sky.png")],
		[EPrinciple.WINTER, new Principle(EPrinciple.WINTER, "Winter", new RenderableSymbol(this.SYMBOL_PATH_PREFIX + "winter.png")]
	]);

	/**
	 * The enum object for this Principle.
	 */
	public readonly principle: EPrinciple;

	/**
	 * The name of the Principle.
	 */
	public readonly name: string;

	/**
	 * The path to the symbol for the Principle.
	 */
	public readonly symbolPath: RenderableSymbol;

	private constructor(principle: EPrinciple, name: string, symbolPath: RenderableSymbol){
		this.principle = principle;
		this.name = name;
		this.symbolPath = symbolPath;
	}

}

/**
 * A specific Mystery
 */
export class Mystery {
	private static readonly SYMBOL_PATH_PREFIX = "/images/mystery/mystery."

	/**
	 * Map of EPrinciple to Mystery
	 */
	public static readonly MYSTERIES = new Map<EPrinciple, Mystery>([
		[EPrinciple.EDGE, new Mystery(EPrinciple.EDGE, "Edge", new RenderableSymbol(this.SYMBOL_PATH_PREFIX + "edge.png")],
		[EPrinciple.FORGE, new Mystery(EPrinciple.FORGE, "Forge", new RenderableSymbol(this.SYMBOL_PATH_PREFIX + "forge.png")],
		[EPrinciple.GRAIL, new Mystery(EPrinciple.GRAIL, "Grail", new RenderableSymbol(this.SYMBOL_PATH_PREFIX + "grail.png")],
		[EPrinciple.HEART, new Mystery(EPrinciple.HEART, "Heart", new RenderableSymbol(this.SYMBOL_PATH_PREFIX + "heart.png")],
		[EPrinciple.KNOCK, new Mystery(EPrinciple.KNOCK, "Knock", new RenderableSymbol(this.SYMBOL_PATH_PREFIX + "knock.png")],
		[EPrinciple.LANTERN, new Mystery(EPrinciple.LANTERN, "Lantern", new RenderableSymbol(this.SYMBOL_PATH_PREFIX + "lantern.png")],
		[EPrinciple.MOON, new Mystery(EPrinciple.MOON, "Moon", new RenderableSymbol(this.SYMBOL_PATH_PREFIX + "moom.png")],
		[EPrinciple.MOTH, new Mystery(EPrinciple.MOTH, "Moth", new RenderableSymbol(this.SYMBOL_PATH_PREFIX + "moth.png")],
		[EPrinciple.NECTAR, new Mystery(EPrinciple.NECTAR, "Nectar", new RenderableSymbol(this.SYMBOL_PATH_PREFIX + "nectar.png")],
		[EPrinciple.ROSE, new Mystery(EPrinciple.ROSE, "Rose", new RenderableSymbol(this.SYMBOL_PATH_PREFIX + "rose.png")],
		[EPrinciple.SCALE, new Mystery(EPrinciple.SCALE, "Scale", new RenderableSymbol(this.SYMBOL_PATH_PREFIX + "scale.png")],
		[EPrinciple.SKY, new Mystery(EPrinciple.SKY, "Sky", new RenderableSymbol(this.SYMBOL_PATH_PREFIX + "sky.png")],
		[EPrinciple.WINTER, new Mystery(EPrinciple.WINTER, "Winter", new RenderableSymbol(this.SYMBOL_PATH_PREFIX + "winter.png")]
	]);

	/**
	 * The enum object for this Mystery.
	 */
	public readonly principle: EPrinciple;

	/**
	 * The name of the Mystery.
	 */
	public readonly name: string;

	/**
	 * The path to the symbol for the Mystery.
	 */
	public readonly symbolPath: RenderableSymbol;

	private constructor(principle: EPrinciple, name: string, symbolPath: RenderableSymbol){
		this.principle = principle;
		this.name = name;
		this.symbolPath = symbolPath;
	}

}
