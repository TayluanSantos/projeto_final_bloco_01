import readlinesync = require("readline-sync");
import { colors } from "./util/Colors";
import { ProdutoController } from "./src/controller/ProdutoController";
import { ActionFigure } from "./src/model/ActionFigure";
import { Jogo } from "./src/model/Jogo";
import { Quadrinho } from "./src/model/Quadrinho";
import { Produto } from "./src/model/Produto";

export function main() {

let nome,plataforma,editora,material : string
let opcao,preco,tipo,anoPublicacao,id : number;
let tipoProduto : string[] = ['Action Figure','Jogo','Quadrinho'];

const produtoController : ProdutoController = new ProdutoController();

// Objetos para teste

let actionFigure : Produto = new ActionFigure(produtoController.gerarNumero(),"Boneco de ação - Valkyrie Malenia - Elden Ring",1,399.90,"Resina de alta qualidade");
let jogo : Produto = new Jogo(produtoController.gerarNumero(),"Elden Ring",2,269.00,"Multiplataforma");
let quadrinho : Produto = new Quadrinho(produtoController.gerarNumero(),"Power Rangers e Tartarugas Ninja - Vol.02",3,64.90,"Pipoca e Nanquim",2022);

produtoController.cadastrar(actionFigure);
produtoController.cadastrar(jogo);
produtoController.cadastrar(quadrinho);

while (true) {
        console.log(colors.fg.blue)
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("              NOSTALGIAS COLECIONÁVEIS               ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Cadastrar Produto                    ");
        console.log("            2 - Listar todos os Produtos             ");
        console.log("            3 - Buscar produto pelo Id               ");
        console.log("            4 - Buscar pelo maior preço              ");
        console.log("            5 - Buscar pelo menor preço              ");
        console.log("            6 - Atualizar Produto                    ");
        console.log("            7 - Deletar Produto                      ");
        console.log("            8 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ",colors.reset);

        console.log(colors.fg.blue)
        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 6) {
            console.log(colors.fg.blue)
            console.log("\nNostalgias Colecionáveis - Colecione momentos, não apenas objetos.");
            sobre();
            process.exit(0);
        }

        switch (opcao) {

            // CADASTRAR 
            case 1:
                console.log(colors.fg.blue)
                console.log("\n\nCadastrar produto\n");
                
                console.log('\nDigite o nome do produto: ');
                nome = readlinesync.question("");

                console.log('\nDigite o preço do produto: ');
                preco = readlinesync.questionFloat("");

                console.log('\nDigite o tipo do produto: ');
                tipo = readlinesync.keyInSelect(tipoProduto,"",{cancel:false}) +1;

                
                switch(tipo) {
                    case 1: 
                        console.log("\nDigite o tipo de material do produto: ");
                        material = readlinesync.question("")
                        produtoController.cadastrar(new ActionFigure(produtoController.gerarNumero(),nome,tipo,preco,material));
                    break

                    case 2:
                        console.log("\nDigite a plataforma do jogo (Nintendo,Xbox,etc): ");
                        plataforma = readlinesync.question("")
                        produtoController.cadastrar(new Jogo(produtoController.gerarNumero(),nome,tipo,preco,plataforma));   
                    break
                    case 3:
                        console.log("\nDigite o nome da editora");
                        editora = readlinesync.question("")

                        console.log("\nDigite o ano de publicação");
                        anoPublicacao = readlinesync.questionInt("")

                        produtoController.cadastrar(new Quadrinho(produtoController.gerarNumero(),nome,tipo,preco,editora,anoPublicacao));   
                    break
                }
                keyPress();
                break;

            // LISTAR TODOS 
            case 2:
                console.log(colors.fg.blue);
                console.log("\nListar todos os Produtos\n");
                produtoController.listarTodos()

                keyPress()
                break;

            // BUSCAR POR ID
            case 3:
                console.log(colors.fg.blue);
                console.log("\nBuscar produto pelo Id\n");

                console.log("\nDigite o id do produto que deseja buscar: ")
                id = readlinesync.questionInt("")

                produtoController.buscarPorId(id);

                keyPress()
                break;

             // BUSCAR PELO MAIOR PREÇO
             case 4:
                console.log(colors.fg.blue);
                console.log("\nBuscar produto pelo maior preço\n");

                produtoController.maiorPreco();

                keyPress()
                break;

             // BUSCAR POR MENOR PREÇO
             case 5:
                console.log(colors.fg.blue);
                console.log("\nBuscar produto pelo menor preço\n");

                produtoController.menorPreco();

                keyPress()
                break;


            // ATUALIZAR
            case 6:
                console.log(colors.fg.blue);
                console.log("\nAtualizar Produto\n");

                console.log("Digite o id do produto:")
                id = readlinesync.questionInt("");

                let produto = produtoController.buscarNoArray(id);

                if(produto) {

                console.log('\nDigite o nome do produto: ');
                nome = readlinesync.question("");

                console.log('\nDigite o preco: ');
                preco = readlinesync.questionFloat("");

                let tipo = produto.tipo;

                switch(tipo) {
                    case 1: 
                        console.log("\nDigite o tipo de material do produto: ");
                        material = readlinesync.question("")
                        produtoController.atualizar(new ActionFigure(id,nome,tipo,preco,material));
                    break

                    case 2:
                        console.log("\nDigite a plataforma do jogo (Nintendo,Xbox,etc): ");
                        plataforma = readlinesync.question("")
                        produtoController.atualizar(new Jogo(id,nome,tipo,preco,plataforma));   
                    break
                    case 3:
                        console.log("\nDigite o nome da editora");
                        editora = readlinesync.question("")

                        console.log("\nDigite o ano de publicação");
                        anoPublicacao = readlinesync.questionInt("")

                        produtoController.cadastrar(new Quadrinho(id,nome,tipo,preco,editora,anoPublicacao));   
                    break
                }
             } else {
                console.log(`A produto de id ${id} não existe!`);
             }
                keyPress()
                break;

            // DELETAR
            case 7:
                console.log(colors.fg.blue);
                console.log("\nDeletar  Produto\n");

                console.log("Digite o id do produto:")
                id = readlinesync.questionInt("");

                produtoController.deletar(id)
            
                keyPress()
                break;

            default:
                console.log(colors.fg.blue);
                console.log("\nOpção Inválida!\n");
                keyPress()
                break;
        }
    }
}

function keyPress(): void {
    console.log(colors.fg.blue);
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

export function sobre(): void {
    console.log(colors.fg.blue);
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Tayluan de Jesus dos Santos");
    console.log("Generation Brasil - generation@generation.org");
    console.log("Github: github.com/TayluanSantos");
    console.log("*****************************************************");
}

main();