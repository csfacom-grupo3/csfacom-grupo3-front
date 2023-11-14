export class Permissoes {
    constructor(permissoes : string[]) {
        permissoes.forEach(e => {
            if(e == 'projects')
                this.gp = true;
            
            if(e == 'new')
                this.editor = true;
            
            if(e == 'admin')
                this.admin = true;
            
         });
    }

    admin! : boolean;
    gp! : boolean;
    editor! : boolean;
}