export class Produto {
    Id!:string;
    NomeProduto!:string;
    Descricao!:string;
    EnumSituacao!:string;
    Preco!:number;

    constructor(Id:string, NomeProduto:string, Descricao:string, EnumSituacao:string, Preco:number){
        Id = Id;
        NomeProduto = NomeProduto;
        Descricao = Descricao;
        Preco = Preco;
    }
}
