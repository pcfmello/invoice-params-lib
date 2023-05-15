import {
  CodigoModeloDocumentoFiscalEnum,
  IndicadorFormaPagamentoEnum,
  NaturezaOperacaoEnum,
} from "../enums/nfe-nfce.enum";

export interface NaturezaOperacaoModel {
  type: NaturezaOperacaoEnum;
  desc: string;
}

export interface IndicadorFormaPagamentoModel {
  type: IndicadorFormaPagamentoEnum;
  desc: string;
}

export interface CodigoModeloDocumentoFiscalModel {
  type: CodigoModeloDocumentoFiscalEnum;
  desc: string;
}
