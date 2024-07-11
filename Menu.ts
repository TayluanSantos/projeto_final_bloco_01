import readlinesync = require("readline-sync");
import { colors } from "./util/Colors";

export function main() {

let opcao : number;

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
        console.log("            4 - Atualizar Produto                    ");
        console.log("            5 - Deletar Produto                      ");
        console.log("            6 - Sair                                 ");
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
            case 1:
                console.log("\n\nCadastrar produto\n");
                keyPress();
                break;
            case 2:
                console.log("\nListar todos os Produtos\n");
                keyPress()
                break;
            case 3:
                console.log("\nBuscar produto pelo Id\n");
                keyPress()
                break;
            case 4:
                console.log("\nAtualizar Produto\n");
                keyPress()
                break;
            case 5:
                console.log("\nDeletar  Produto\n");
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