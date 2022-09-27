export interface IConfig {
    id?: string,
    produtos: IProduto[],
    categorias: string[],
}

export interface IProduto {
    name: string,
    type: number
}

export interface ICategoria {
    name: string
}
