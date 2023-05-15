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

export enum IdentificacaoAmbienteEnum {
  PRODUCAO = 1,
  HOMOLOGACAO = 2,
}

export enum IdentificacaoNfeEnum {
  SEM_GERACAO_DA_DANFE = 0,
  DANFE_RETRATO = 1,
  DANFE_PAISAGEM = 2,
  DANFE_SIMPLIFICADO = 3,
  DANFE_NFCE = 4,
  DANFE_NFCE_MENSAGEM_ELETRONICA = 5,
}
