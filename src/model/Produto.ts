export abstract class Produto {
    private _id:number;
    private _nome:string;
    private _tipo:number;
    private _preco:number;


	constructor(id: number, nome: string, tipo: number, preco: number) {
		this._id = id;
		this._nome = nome;
		this._tipo = tipo;
		this._preco = preco;
	}


	public get id(): number {
		return this._id;
	}

 
	public get nome(): string {
		return this._nome;
	}

	public get tipo(): number {
		return this._tipo;
	}

 
	public get preco(): number {
		return this._preco;
	}

	public set id(id: number) {
		this._id = id;
	}

	public set nome(nome: string) {
		this._nome = nome;
	}

   
	public set tipo(tipo: number) {
		this._tipo = tipo;
	}

 
	public set preco(preco: number) {
		this._preco = preco;
	}

    public visualizar(){

		let tipo: string = "";

		switch(this._tipo){

			case 1 : 
				tipo = "Action Figure";
				break

			case 2:
				tipo = "Jogo";
				break;	

            case 3:
                tipo = "Quadrinho"
                break
		}
		
        console.log("\n************************************");
        console.log("Detalhe Do Produto");
        console.log("\n************************************");
        console.log(`Id: ${this.id}`);
        console.log(`Nome: ${this.nome}`);
        console.log(`Tipo: ${tipo}`);
        console.log(`Preço: ${this.preco.toFixed(2)}`);
    }

}