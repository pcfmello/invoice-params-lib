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

export enum TipoEmissaoNfeEnum {
  NORMAL = 1,
  CONTINGENCIA_FS_IA = 2,
  CONTINGENCIA_SCAN = 3,
  CONTINGENCIA_DPEC = 4,
  CONTINGENCIA_FS_DA = 5,
  CONTINGENCIA_SVC_AN = 6,
  CONTINGENCIA_SVC_RS = 7,
}

export enum FinalidadeEmissaoNfeEnum {
  NORMAL = 1,
  COMPLEMENTAR = 2,
  AJUSTE = 3,
  DEVOLUCAO_MERCADORIA = 4,
}

export enum OperacaoConsumidorFinalEnum {
  NORMAL = 0,
  CONSUMIDOR_FINAL = 1,
}

export enum IndicadorPresencaEnum {
  NAO_SE_APLICA = 0,
  PRESENCIAL = 1,
  INTERNET = 2,
  TELEATENDIMENTO = 3,
  NFCE_A_DOMICILIO = 4,
  PRESENCIAL_FORA_DO_DOMICILIO = 5,
  NAO_PRESENCIAL_OUTROS = 9,
}

export enum ProcessoEmissaoNfeEnum {
  COM_APLICATIVO_CONTRIBUINTE = 0,
  AVULSA_PELO_FISCO = 1,
  AVULSA_PELO_CONTRIBUINTE_CERTIFICADO_DIGITAL_SITE_FISCO = 2,
  AVULSA_PELO_CONTRIBUINTE_APLICATIVO_FISCO = 3,
}
