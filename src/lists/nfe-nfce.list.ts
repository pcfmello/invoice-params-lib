import {
  CodigoModeloDocumentoFiscalEnum,
  IdentificacaoAmbienteEnum,
  IdentificacaoNfeEnum,
  IdentificadorLocalDestinoOperacaoEnum,
  IndicadorFormaPagamentoEnum,
  NaturezaOperacaoEnum,
  TipoOperacaoEnum,
} from "../enums/nfe-nfce.enum";
import {
  CodigoModeloDocumentoFiscalModel,
  IdentificacaoAmbienteModel,
  IdentificacaoNfeModel,
  IdentificadorLocalDestinoOperacaoModel,
  IndicadorFormaPagamentoModel,
  NaturezaOperacaoModel,
  TipoOperacaoModel,
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
