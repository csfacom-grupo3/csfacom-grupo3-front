import { Permissoes } from "../permissoes";
import { GridAdmin } from "./GridAdmin";

export class GridAdminUsuario extends GridAdmin {
    constructor(nome : string, permissoes : string[]) {
        super(nome);
        this.permissoes = new Permissoes(permissoes);

    }    
    permissoes! : Permissoes;
}