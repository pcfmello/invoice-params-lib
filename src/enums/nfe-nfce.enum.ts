export enum NaturezaOperacaoEnum {
  VENDA,
  COMPRA,
  TRANSFERENCIA,
  DEVOLUCAO,
  IMPORTACAO,
  CONSIGNACAO,
  REMESSA,
}

export enum IndicadorFormaPagamentoEnum {
  A_VISTA = 0,
  A_PRAZO = 1,
  OUTROS = 2,
}

export enum CodigoModeloDocumentoFiscalEnum {
  NFE = 55,
  NFCE = 65,
}

export enum TipoOperacaoEnum {
  ENTRADA = 0,
  SAIDA = 1,
}

export enum IdentificadorLocalDestinoOperacaoEnum {
  OP_INTERNA = 1,
  OP_INTERESTADUAL = 2,
  OP_COM_EXTERIOR = 3,
}
