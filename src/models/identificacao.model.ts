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
  CodigoUnidadeFederativaEnum,
} from "../enums/nfe-nfce.enum";

export interface IdentificacaoModel {
  cUf: CodigoUnidadeFederativaEnum;
  cNf?: string; // Código de segurança que é gerado aleatoriamente pelo ACBr Monitor Plus. Não deve ser o número da NFe.
  natOp: NaturezaOperacaoEnum;
  indPag: IndicadorFormaPagamentoEnum;
  mod: CodigoModeloDocumentoFiscalEnum;
  serie: number;
  nNf: string; // Deve ser incrementado à cada NFe e não pode se repetir
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
