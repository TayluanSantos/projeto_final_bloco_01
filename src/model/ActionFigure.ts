import { Produto } from "./Produto";

export class ActionFigure extends Produto {

    private _material: string;


	constructor(id: number, nome: string, tipo: number, preco: number,material: string) {
        super(id,nome,tipo,preco)
		this._material = material;
	}

	public get material(): string {
		return this._material;
	}

	public set material(value: string) {
		this._material = value;
	}

    public visualizar(): void {
        super.visualizar();
        console.log(`Material: ${this._material}`)
    }
}