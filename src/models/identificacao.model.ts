import {
  NaturezaOperacaoEnum,
  IndicadorFormaPagamentoEnum,
  CodigoModeloDocumentoFiscalEnum,
  TipoOperacaoEnum,
  IdentificadorLocalDestinoOperacaoEnum,
  IdentificacaoAmbienteEnum,
  IdentificacaoNfeEnum,
  TipoEmissaoNfeEnum,
  FinalidadeEmissaoNfeEnum,
  IndicadorOperacaoConsumidorFinalEnum,
  IndicadorPresencaEnum,
  ProcessoEmissaoNfeEnum,
} from "../enums/nfe-nfce.enum";

export interface IdentificacaoModel {
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
