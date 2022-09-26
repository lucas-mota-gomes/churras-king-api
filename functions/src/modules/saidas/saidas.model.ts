export interface ISaida {
    id?: string,
    tipo: string,
    categoria: string,
    produto: string,
    quantidade_de_caixas: number,
    quantidade_por_caixa: number,
    valor_unidade_pacote: number,
    quantidade_total_por_caixa: number,
    valor_total: number,
    valor_unidade: number
}