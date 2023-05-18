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
  IndicadorOperacaoConsumidorFinalEnum,
  ProcessoEmissaoNfeEnum,
  TipoEmissaoNfeEnum,
  TipoOperacaoEnum,
  CodigoUnidadeFederativaEnum,
  UnidadeFederativaEnum,
  IndicadorIeDestinatarioEnum,
  IndicadorSeValorItemEntraTotalNfeEnum,
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

export interface IndicadorOperacaoConsumidorFinalModel {
  type: IndicadorOperacaoConsumidorFinalEnum;
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

export interface CodigoUnidadeFederativaModel {
  type: CodigoUnidadeFederativaEnum;
  desc: string;
}

export interface CodigoRegimeTributarioModel {
  type: CodigoRegimeTributarioEnum;
  desc: string;
}

export interface UnidadeFederativaModel {
  type: UnidadeFederativaEnum;
  desc: string;
}

export interface IndicadorIeDestinatarioModel {
  type: IndicadorIeDestinatarioEnum;
  desc: string;
}

export interface IndicadorSeValorItemEntraTotalNfeModel {
  type: IndicadorSeValorItemEntraTotalNfeEnum;
  desc: string;
}

export interface ModeloNfeIdentificacaoModel {
  cnf: string;
  natOp: NaturezaOperacaoEnum;
  indPag: IndicadorFormaPagamentoEnum;
  mod: CodigoModeloDocumentoFiscalEnum;
  serie: number;
  nNf: string;
  dhEmi: Date;
  dhSaiEnt: Date;
  tpNf: TipoOperacaoEnum;
  idDest: IdentificadorLocalDestinoOperacaoEnum;
  tpAmb: IdentificacaoAmbienteEnum;
  tpImp: IdentificacaoNfeEnum;
  tpEmis: TipoEmissaoNfeEnum;
  finNFe: FinalidadeEmissaoNfeEnum;
  indFinal: IndicadorOperacaoConsumidorFinalEnum;
  indPres: IndicadorPresencaEnum;
  procEmi: ProcessoEmissaoNfeEnum;
  cMunFG: number;
  indIntermed: string;
  verProc: string;
  dhCont: Date;
  xJust: string;
}
