import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";

export class ProdutoController implements ProdutoRepository {

    private _listaProdutos : Produto[] = new Array<Produto>();
    public numero : number = 0;


    cadastrar(produto: Produto): void {
       this._listaProdutos.push(produto);
       console.log("\nProduto Cadastrado com sucesso!")
    }

    listarTodos(): void {
        this._listaProdutos.forEach(produto => produto.visualizar());
    }
    
    buscarPorId(id: number): void {
        let produto = this.buscarNoArray(id);

        if(produto !== null) {
            produto.visualizar();
        } else {
            console.log(`\nO produto de id ${id} não foi encontrado!`)
        }
    }

    atualizar(novoProduto: Produto): void {
        let produto = this.buscarNoArray(novoProduto.id);


        if (produto !== null) {
            this._listaProdutos[this._listaProdutos.indexOf(produto)] = novoProduto;
            console.log("\nO produto foi atualizado com sucesso!");
        } else {
            console.log("\nO produto não foi encontrado!");
        }
    }

    deletar(id: number): void {

        let produto = this.buscarNoArray(id);

        if (produto !== null) {
            this._listaProdutos.splice(this._listaProdutos.indexOf(produto),1)
            console.log(`\nO produto de id ${id} foi deletado!`);
        } else {
            console.log("\nO produto não foi encontrado!");
        }
    }
    
     // Métodos Auxiliares 
     public gerarNumero(): number {
        return ++this.numero;
    }

    public buscarNoArray(id: number): Produto | null {
        for (let produto of this._listaProdutos) {
            if (produto.id === id) {
                return produto;
            }
        }
        return null;
    }
}