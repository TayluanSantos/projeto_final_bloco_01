import { Produto } from "./Produto";

export class Quadrinho extends Produto {
    
    private _editora : string;
    private _anoPublicacao : number;


	constructor(id: number, nome: string, tipo: number, preco: number,editora: string, anoPublicacao: number) {
        super(id,nome,tipo,preco)
		this._editora = editora;
		this._anoPublicacao = anoPublicacao;
	}

	public get editora(): string {
		return this._editora;
	}

	public get anoPublicacao(): number {
		return this._anoPublicacao;
	}

	public set editora(value: string) {
		this._editora = value;
	}

	public set anoPublicacao(value: number) {
		this._anoPublicacao = value;
	}
}