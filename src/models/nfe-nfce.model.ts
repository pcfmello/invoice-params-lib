import {
  CodigoModeloDocumentoFiscalEnum,
  FinalidadeEmissaoNfeEnum,
  IdentificacaoAmbienteEnum,
  IdentificacaoNfeEnum,
  IdentificadorLocalDestinoOperacaoEnum,
  IndicadorFormaPagamentoEnum,
  NaturezaOperacaoEnum,
  OperacaoConsumidorFinalEnum,
  TipoEmissaoNfeEnum,
  TipoOperacaoEnum,
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

export interface TipoOperacaoModel {
  type: TipoOperacaoEnum;
  desc: string;
}

export interface IdentificadorLocalDestinoOperacaoModel {
  type: IdentificadorLocalDestinoOperacaoEnum;
  desc: string;
}

export interface IdentificacaoAmbienteModel {
  type: IdentificacaoAmbienteEnum;
  desc: string;
}

export interface IdentificacaoNfeModel {
  type: IdentificacaoNfeEnum;
  desc: string;
}

export interface TipoEmissaoNfeModel {
  type: TipoEmissaoNfeEnum;
  desc: string;
}

export interface FinalidadeEmissaoNfeModel {
  type: FinalidadeEmissaoNfeEnum;
  desc: string;
}

export interface OperacaoConsumidorFinalModel {
  type: OperacaoConsumidorFinalEnum;
  desc: string;
}
