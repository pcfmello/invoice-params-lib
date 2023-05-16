import {
  CodigoModeloDocumentoFiscalEnum,
  CodigoRegimeTributarioEnum,
  FinalidadeEmissaoNfeEnum,
  IdentificacaoAmbienteEnum,
  IdentificacaoNfeEnum,
  IdentificadorLocalDestinoOperacaoEnum,
  IndicadorFormaPagamentoEnum,
  IndicadorPresencaEnum,
  NaturezaOperacaoEnum,
  OperacaoConsumidorFinalEnum,
  ProcessoEmissaoNfeEnum,
  TipoEmissaoNfeEnum,
  TipoOperacaoEnum,
  UnidadeFederativaEnum,
} from "../enums/nfe-nfce.enum";
import {
  CodigoModeloDocumentoFiscalModel,
  CodigoRegimeTributarioModel,
  FinalidadeEmissaoNfeModel,
  IdentificacaoAmbienteModel,
  IdentificacaoNfeModel,
  IdentificadorLocalDestinoOperacaoModel,
  IndicadorFormaPagamentoModel,
  IndicadorPresencaModel,
  NaturezaOperacaoModel,
  OperacaoConsumidorFinalModel,
  ProcessoEmissaoNfeModel,
  TipoEmissaoNfeModel,
  TipoOperacaoModel,
  UnidadeFederativaModel,
} from "../models/nfe-nfce.model";

export const naturezaOperacaoList: NaturezaOperacaoModel[] = [
  {
    type: NaturezaOperacaoEnum.VENDA,
    desc: "Venda de mercadoria",
  },
  {
    type: NaturezaOperacaoEnum.COMPRA,
    desc: "Compra de mercadoria",
  },
  {
    type: NaturezaOperacaoEnum.TRANSFERENCIA,
    desc: "Transferência de mercadoria",
  },
  {
    type: NaturezaOperacaoEnum.DEVOLUCAO,
    desc: "Devolução de mercadoria",
  },
  {
    type: NaturezaOperacaoEnum.IMPORTACAO,
    desc: "Importação de mercadoria",
  },
  {
    type: NaturezaOperacaoEnum.CONSIGNACAO,
    desc: "Mercadoria consignada",
  },
  {
    type: NaturezaOperacaoEnum.REMESSA,
    desc: "Remessa de mercadoria",
  },
];

export const indicadorFormaPagamentoList: IndicadorFormaPagamentoModel[] = [
  {
    type: IndicadorFormaPagamentoEnum.A_VISTA,
    desc: "À vista",
  },
  {
    type: IndicadorFormaPagamentoEnum.A_PRAZO,
    desc: "À prazo",
  },
  {
    type: IndicadorFormaPagamentoEnum.OUTROS,
    desc: "Outros",
  },
];

export const codigoModeloDocumentoFiscalList: CodigoModeloDocumentoFiscalModel[] =
  [
    {
      type: CodigoModeloDocumentoFiscalEnum.NFE,
      desc: "NF-e",
    },
    {
      type: CodigoModeloDocumentoFiscalEnum.NFCE,
      desc: "NFC-e",
    },
  ];

export const tipoOperacaoList: TipoOperacaoModel[] = [
  {
    type: TipoOperacaoEnum.ENTRADA,
    desc: "Entrada",
  },
  {
    type: TipoOperacaoEnum.SAIDA,
    desc: "Saída",
  },
];

export const identificadorLocalDestinoOperacaoList: IdentificadorLocalDestinoOperacaoModel[] =
  [
    {
      type: IdentificadorLocalDestinoOperacaoEnum.OP_INTERNA,
      desc: "Interna",
    },
    {
      type: IdentificadorLocalDestinoOperacaoEnum.OP_INTERESTADUAL,
      desc: "Externa",
    },
    {
      type: IdentificadorLocalDestinoOperacaoEnum.OP_COM_EXTERIOR,
      desc: "Com o exterior",
    },
  ];

export const identificacaoAmbienteList: IdentificacaoAmbienteModel[] = [
  {
    type: IdentificacaoAmbienteEnum.PRODUCAO,
    desc: "Producão",
  },
  {
    type: IdentificacaoAmbienteEnum.HOMOLOGACAO,
    desc: "Homologação",
  },
];

export const identificacaoNfeList: IdentificacaoNfeModel[] = [
  {
    type: IdentificacaoNfeEnum.SEM_GERACAO_DA_DANFE,
    desc: "Sem geração da DANFE",
  },
  {
    type: IdentificacaoNfeEnum.DANFE_RETRATO,
    desc: "DANFE normal, retrato",
  },
  {
    type: IdentificacaoNfeEnum.DANFE_PAISAGEM,
    desc: "DANFE normal, paisagem",
  },
  {
    type: IdentificacaoNfeEnum.DANFE_SIMPLIFICADO,
    desc: "DANFE simplificado",
  },
  {
    type: IdentificacaoNfeEnum.DANFE_NFCE,
    desc: "DANFE NFC-e",
  },
  {
    type: IdentificacaoNfeEnum.DANFE_NFCE_MENSAGEM_ELETRONICA,
    desc: "DANFE NFC-e em mensagem eletrônica",
  },
];

export const tipoEmissaoNfeList: TipoEmissaoNfeModel[] = [
  {
    type: TipoEmissaoNfeEnum.NORMAL,
    desc: "Emissão normal",
  },
  {
    type: TipoEmissaoNfeEnum.CONTINGENCIA_FS_IA,
    desc: "Contingência FS-IA, com impressão do DANFE em formulário de segurança",
  },
  {
    type: TipoEmissaoNfeEnum.CONTINGENCIA_SCAN,
    desc: "Contingência SCAN (Sistema de Contingência do Ambiente Nacional)",
  },
  {
    type: TipoEmissaoNfeEnum.CONTINGENCIA_DPEC,
    desc: "Contingência DPEC (Declaração Prévia da Emissão em Contingência)",
  },
  {
    type: TipoEmissaoNfeEnum.CONTINGENCIA_FS_DA,
    desc: "Contingência FS-DA, com impressão do DANFE em formulário de segurança",
  },
  {
    type: TipoEmissaoNfeEnum.CONTINGENCIA_SVC_AN,
    desc: "Contingência SVC-AN (SEFAZ Virtual de Contingência do AN)",
  },
  {
    type: TipoEmissaoNfeEnum.CONTINGENCIA_SVC_RS,
    desc: "Contingência SVC-RS (SEFAZ Virtual de Contingência do RS)",
  },
];

export const finalidadeEmissaoNfeList: FinalidadeEmissaoNfeModel[] = [
  {
    type: FinalidadeEmissaoNfeEnum.NORMAL,
    desc: "Normal",
  },
  {
    type: FinalidadeEmissaoNfeEnum.COMPLEMENTAR,
    desc: "Complementar",
  },
  {
    type: FinalidadeEmissaoNfeEnum.AJUSTE,
    desc: "Ajuste",
  },
  {
    type: FinalidadeEmissaoNfeEnum.DEVOLUCAO_MERCADORIA,
    desc: "Devolução de mercadoria",
  },
];

export const operacaoConsumidorFinalList: OperacaoConsumidorFinalModel[] = [
  {
    type: OperacaoConsumidorFinalEnum.NORMAL,
    desc: "Normal",
  },
  {
    type: OperacaoConsumidorFinalEnum.CONSUMIDOR_FINAL,
    desc: "Consumidor final",
  },
];

export const indicadorPresencaList: IndicadorPresencaModel[] = [
  {
    type: IndicadorPresencaEnum.NAO_SE_APLICA,
    desc: "Não se aplica",
  },
  {
    type: IndicadorPresencaEnum.PRESENCIAL,
    desc: "Operação presencial",
  },
  {
    type: IndicadorPresencaEnum.INTERNET,
    desc: "Operação não presencial, pela Internet",
  },
  {
    type: IndicadorPresencaEnum.TELEATENDIMENTO,
    desc: "Operação não presencial, Teleatendimento",
  },
  {
    type: IndicadorPresencaEnum.NFCE_A_DOMICILIO,
    desc: "NFC-e em operação com entrega a domicílio",
  },
  {
    type: IndicadorPresencaEnum.PRESENCIAL_FORA_DO_DOMICILIO,
    desc: "Operação presencial, fora do estabelecimento",
  },
  {
    type: IndicadorPresencaEnum.NAO_PRESENCIAL_OUTROS,
    desc: "Operação não presencial, outros",
  },
];

export const processoEmissaoNfeList: ProcessoEmissaoNfeModel[] = [
  {
    type: ProcessoEmissaoNfeEnum.COM_APLICATIVO_CONTRIBUINTE,
    desc: "Emissão de NF-e com aplicativo do contribuinte",
  },
  {
    type: ProcessoEmissaoNfeEnum.AVULSA_PELO_FISCO,
    desc: "Emissão de NF-e avulsa pelo Fisco",
  },
  {
    type: ProcessoEmissaoNfeEnum.AVULSA_PELO_CONTRIBUINTE_CERTIFICADO_DIGITAL_SITE_FISCO,
    desc: "Emissão de NF-e avulsa, pelo contribuinte com seu certificado digital, através do site do Fisco",
  },
  {
    type: ProcessoEmissaoNfeEnum.AVULSA_PELO_CONTRIBUINTE_APLICATIVO_FISCO,
    desc: "Emissão NF-e pelo contribuinte com aplicativo fornecido pelo Fisco",
  },
];

export const unidadeFederativaList: UnidadeFederativaModel[] = [
  {
    type: UnidadeFederativaEnum.RO,
    desc: "Rondônia",
  },
  {
    type: UnidadeFederativaEnum.AC,
    desc: "Acre",
  },
  {
    type: UnidadeFederativaEnum.AM,
    desc: "Amazonas",
  },
  {
    type: UnidadeFederativaEnum.RR,
    desc: "Roraima",
  },
  {
    type: UnidadeFederativaEnum.PA,
    desc: "Pará",
  },
  {
    type: UnidadeFederativaEnum.AP,
    desc: "Amapá",
  },
  {
    type: UnidadeFederativaEnum.TO,
    desc: "Tocantins",
  },
  {
    type: UnidadeFederativaEnum.MA,
    desc: "Maranhão",
  },
  {
    type: UnidadeFederativaEnum.PI,
    desc: "Piauí",
  },
  {
    type: UnidadeFederativaEnum.CE,
    desc: "Ceará",
  },
  {
    type: UnidadeFederativaEnum.RN,
    desc: "Rio Grande do Norte",
  },
  {
    type: UnidadeFederativaEnum.PB,
    desc: "Paraíba",
  },
  {
    type: UnidadeFederativaEnum.PE,
    desc: "Pernambuco",
  },
  {
    type: UnidadeFederativaEnum.AL,
    desc: "Alagoas",
  },
  {
    type: UnidadeFederativaEnum.SE,
    desc: "Sergipe",
  },
  {
    type: UnidadeFederativaEnum.BA,
    desc: "Bahia",
  },
  {
    type: UnidadeFederativaEnum.MG,
    desc: "Minas Gerais",
  },
  {
    type: UnidadeFederativaEnum.ES,
    desc: "Espírito Santo",
  },
  {
    type: UnidadeFederativaEnum.RJ,
    desc: "Rio de Janeiro",
  },
  {
    type: UnidadeFederativaEnum.SP,
    desc: "São Paulo",
  },
  {
    type: UnidadeFederativaEnum.PR,
    desc: "Paraná",
  },
  {
    type: UnidadeFederativaEnum.SC,
    desc: "Santa Catarina",
  },
  {
    type: UnidadeFederativaEnum.RS,
    desc: "Rio Grande do Sul",
  },
  {
    type: UnidadeFederativaEnum.MS,
    desc: "Mato Grosso do Sul",
  },
  {
    type: UnidadeFederativaEnum.MT,
    desc: "Mato Grosso",
  },
  {
    type: UnidadeFederativaEnum.GO,
    desc: "Goiás",
  },
  {
    type: UnidadeFederativaEnum.DF,
    desc: "Distrito Federal",
  },
];

export const codigoRegimeTributarioList: CodigoRegimeTributarioModel[] = [
  {
    type: CodigoRegimeTributarioEnum.SIMPLES_NACIONAL,
    desc: "Simples Nacional",
  },
  {
    type: CodigoRegimeTributarioEnum.SIMPLES_NACIONAL_EXCEDENTE,
    desc: "Simples Nacional (excede o limite da receita bruta)",
  },
  {
    type: CodigoRegimeTributarioEnum.REGIME_NORMAL,
    desc: "Regime Normal",
  },
];
