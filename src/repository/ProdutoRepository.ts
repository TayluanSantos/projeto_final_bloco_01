import { Produto } from "../model/Produto";

export interface ProdutoRepository {

    cadastrar(produto:Produto) : void;
    listarTodos() : void;
    buscarPorId(id:number) : void;
    atualizar(produto:Produto) : void;
    deletar(id:number) : void;
    
}