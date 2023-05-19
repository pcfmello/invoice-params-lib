import {
  CodigoModeloDocumentoFiscalEnum,
  CodigoRegimeTributarioEnum,
  CodigoUnidadeFederativaEnum,
  FinalidadeEmissaoNfeEnum,
  IdentificacaoAmbienteEnum,
  IdentificacaoNfeEnum,
  IdentificadorLocalDestinoOperacaoEnum,
  IndicadorFormaPagamentoEnum,
  IndicadorIeDestinatarioEnum,
  IndicadorPresencaEnum,
  IndicadorSeValorItemEntraTotalNfeEnum,
  NaturezaOperacaoEnum,
  IndicadorOperacaoConsumidorFinalEnum,
  ProcessoEmissaoNfeEnum,
  TipoEmissaoNfeEnum,
  TipoOperacaoEnum,
  UnidadeFederativaEnum,
} from "./enums/nfe-nfce.enum";
import { CstPisCofinsEntradaEnum } from "./enums/cst-pis-cofins-entrada.enum";
import { CstPisCofinsSaidaEnum } from "./enums/cst-pis-cofins-saida.enum";
import { CstCfEnum } from "./enums/cst-cf.enum";
import { CsosnCfEnum } from "./enums/csosn-cf.enum";
import { OrigemMercadoriaEnum } from "./enums/origem-da-mercadoria.enum";
import { ModalidadeDeterminacaoBcEnum } from "./enums/modalidade-de-determinacao-da-bc.enum";
import { MotivoDesoneracaoIcmsStEnum } from "./enums/motivo-da-desoneracao-do-icms-st.enum";

import {
  CodigoModeloDocumentoFiscalModel,
  CodigoRegimeTributarioModel,
  CodigoUnidadeFederativaModel,
  FinalidadeEmissaoNfeModel,
  IdentificacaoAmbienteModel,
  IdentificacaoNfeModel,
  IdentificadorLocalDestinoOperacaoModel,
  IndicadorFormaPagamentoModel,
  IndicadorIeDestinatarioModel,
  IndicadorPresencaModel,
  IndicadorSeValorItemEntraTotalNfeModel,
  NaturezaOperacaoModel,
  IndicadorOperacaoConsumidorFinalModel,
  ProcessoEmissaoNfeModel,
  TipoEmissaoNfeModel,
  TipoOperacaoModel,
  UnidadeFederativaModel,
} from "./models/nfe-nfce.model";
import { IdentificacaoModel } from "./models/identificacao.model";
import { EmitenteModel } from "./models/emitente.model";
import { DestinatarioModel } from "./models/destinatario.model";
import { ProdutoModel } from "./models/produto.model";
import { OrigemMercadoriaModel } from "./models/origem-da-mercadoria.model";
import { MotivoDesoneracaoIcmsStModel } from "./models/motivo-da-desoneracao-do-icms-st.model";
import { ModalidadeDeterminacaoBcModel } from "./models/modalidade-de-determinacao-da-bc.model";
import { IcmsModel } from "./models/icms.model";
import { PisModel } from "./models/pis.model";

import {
  codigoModeloDocumentoFiscalList,
  codigoRegimeTributarioList,
  codigoUnidadeFederativaList,
  finalidadeEmissaoNfeList,
  identificacaoAmbienteList,
  identificacaoNfeList,
  identificadorLocalDestinoOperacaoList,
  indicadorFormaPagamentoList,
  indicadorIeDestinatarioList,
  indicadorPresencaList,
  indicadorSeValorItemEntraTotalNfeList,
  naturezaOperacaoList,
  indicadorOperacaoConsumidorFinalList,
  processoEmissaoNfeList,
  tipoEmissaoNfeList,
  tipoOperacaoList,
  unidadeFederativaList,
} from "./lists/nfe-nfce.list";
import { origemMercadoriaList } from "./lists/origem-da-mercadoria.list";
import { modalidadeDeterminacaoBcList } from "./lists/modalidade-de-determinacao-da-bc.list";
import { motivoDesoneracaoIcmsStList } from "./lists/motivo-da-desoneracao-do-icms-st.list";

export {
  CodigoModeloDocumentoFiscalEnum,
  CodigoRegimeTributarioEnum,
  CodigoUnidadeFederativaEnum,
  FinalidadeEmissaoNfeEnum,
  IdentificacaoAmbienteEnum,
  IdentificacaoNfeEnum,
  IdentificadorLocalDestinoOperacaoEnum,
  IndicadorFormaPagamentoEnum,
  IndicadorIeDestinatarioEnum,
  IndicadorPresencaEnum,
  IndicadorSeValorItemEntraTotalNfeEnum,
  OrigemMercadoriaEnum,
  CstPisCofinsEntradaEnum,
  CstPisCofinsSaidaEnum,
  CstCfEnum,
  CsosnCfEnum,
  NaturezaOperacaoEnum,
  IndicadorOperacaoConsumidorFinalEnum,
  ProcessoEmissaoNfeEnum,
  TipoEmissaoNfeEnum,
  TipoOperacaoEnum,
  UnidadeFederativaEnum,
  ModalidadeDeterminacaoBcEnum,
  MotivoDesoneracaoIcmsStEnum,

  // MODELS
  CodigoModeloDocumentoFiscalModel,
  CodigoRegimeTributarioModel,
  CodigoUnidadeFederativaModel,
  FinalidadeEmissaoNfeModel,
  IdentificacaoAmbienteModel,
  IdentificacaoNfeModel,
  IdentificadorLocalDestinoOperacaoModel,
  IndicadorFormaPagamentoModel,
  IndicadorIeDestinatarioModel,
  IndicadorPresencaModel,
  IndicadorSeValorItemEntraTotalNfeModel,
  OrigemMercadoriaModel,
  NaturezaOperacaoModel,
  IndicadorOperacaoConsumidorFinalModel,
  ProcessoEmissaoNfeModel,
  TipoEmissaoNfeModel,
  TipoOperacaoModel,
  UnidadeFederativaModel,
  IdentificacaoModel,
  EmitenteModel,
  DestinatarioModel,
  ProdutoModel,
  ModalidadeDeterminacaoBcModel,
  MotivoDesoneracaoIcmsStModel,
  IcmsModel,
  PisModel,

  // LISTS
  codigoModeloDocumentoFiscalList,
  codigoRegimeTributarioList,
  codigoUnidadeFederativaList,
  finalidadeEmissaoNfeList,
  identificacaoAmbienteList,
  identificacaoNfeList,
  identificadorLocalDestinoOperacaoList,
  indicadorFormaPagamentoList,
  indicadorIeDestinatarioList,
  indicadorPresencaList,
  indicadorSeValorItemEntraTotalNfeList,
  naturezaOperacaoList,
  indicadorOperacaoConsumidorFinalList,
  processoEmissaoNfeList,
  tipoEmissaoNfeList,
  tipoOperacaoList,
  unidadeFederativaList,
  origemMercadoriaList,
  modalidadeDeterminacaoBcList,
  motivoDesoneracaoIcmsStList,
};
