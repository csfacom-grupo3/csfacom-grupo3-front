# PortalLedes

## Arquitetura de pastas
```
|app 
|  ├── core 
|      ├── components 
|      ├── model 
|  ├── features 
|  ├── shared 
```
**Core:** Aqui fica o núcleo do sistema, componentes como o header e o footer, definições padrão de CSS como o tema e os models deverão ser colocados nessa pasta.

**Features:** Nessa pasta ficam as funcionalidades do sistema separadas por módulos, abaixo um exemplo ilustrativo da separação em modulos

```
|-- features
    |-- projetos
        |-- components
            |-- [+] listar-projetos
            |-- [+] novo-projeto
            |-- projetos-components.module.ts
        |-- projetos.component.ts
        |-- projetos.component.html
        |-- projetos.component.scss
        |-- projetos.component.spec
        |-- projetos.module.ts
    |-- usuarios
        |-- components
            |-- [+] listar-usuarios
            |-- [+] novo-usuario
            |-- usuarios-components.module.ts
        |-- usuarios.component.ts
        |-- usuarios.component.html
        |-- usuarios.component.scss
        |-- usuarios.component.spec
        |-- usuarios.module.ts
```

**Shared:** Essa é a pasta destinada a tudo que compartilhado no sistema, componentes reutilizaveis, pipes, etc.
#
***OBS:** Como ainda não há componentes as pastas não foram mapeadas pelo git*
