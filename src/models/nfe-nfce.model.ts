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

export interface IndicadorPresencaModel {
  type: IndicadorPresencaEnum;
  desc: string;
}

export interface ProcessoEmissaoNfeModel {
  type: ProcessoEmissaoNfeEnum;
  desc: string;
}

export interface UnidadeFederativaModel {
  type: UnidadeFederativaEnum;
  desc: string;
}

export interface CodigoRegimeTributarioModel {
  type: CodigoRegimeTributarioEnum;
  desc: string;
}
