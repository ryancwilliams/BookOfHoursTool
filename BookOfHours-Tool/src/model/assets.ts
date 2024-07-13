import { Injectable } from "@angular/core";

/**
 * Contains infomation required for Renderable Symbol assets
 */
@Injectable({
	providedIn: 'root',
})
export class RenderableSymbol {
	readonly symbolPath: string;

	constructor(symbolPath: string){
		this.symbolPath = symbolPath;
	}
}
