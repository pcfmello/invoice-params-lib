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
import { IndSomaPisStEnum } from "./enums/ind-soma-pis-st.enum";
import { IndSomaCofinsStEnum } from "./enums/ind-soma-cofins-st.enum";
import { ModalidadeFreteNfeEnum } from "./enums/modalidade-frete-nfe.enum";
import { FormaPagamentoEnum } from "./enums/forma-de-pagamento.enum";
import { TipoIntegracaoEnum } from "./enums/tipo-integracao.enum";

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
import { IpiModel } from "./models/ipi.model";
import { PisModel } from "./models/pis.model";
import { PisStModel } from "./models/pisst.model";
import { CofinsModel } from "./models/cofins.model";
import { CofinsStModel } from "./models/cofinsst.model";
import { IndSomaPisStModel } from "./models/ind-soma-pis-st.model";
import { IndSomaCofinsStModel } from "./models/ind-soma-cofins-st.model";
import { TotalModel } from "./models/total.model";
import { ModalidadeFreteNfeModel } from "./models/modalidade-frete-nfe.model";
import { TransportadorModel } from "./models/transportador.model";
import { VolumeModel } from "./models/volume.model";
import { FormaPagamentoModel } from "./models/forma-de-pagamento.model";
import { TipoIntegracaoModel } from "./models/tipo-integracao.model";
import { FaturaModel } from "./models/fatura.model";
import { DuplicataModel } from "./models/duplicata.model";
import { PagModel } from "./models/pag.model";
import { InformacaoResponsavelTecnicoModel } from "./models/informacao-responsavel-tecnico.model";

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
import { indSomaPisStList } from "./lists/ind-soma-pis-st.list";
import { indSomaCofinsStList } from "./lists/ind-soma-cofins-st.list";
import { modalidadeFreteNfeList } from "./lists/modalidade-frete-nfe.list";
import { formaPagamentoList } from "./lists/forma-de-pagamento.list";
import { tipoIntegracaoList } from "./lists/tipo-integracao.list";

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
  IndSomaPisStEnum,
  IndSomaCofinsStEnum,
  ModalidadeFreteNfeEnum,
  FormaPagamentoEnum,
  TipoIntegracaoEnum,

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
  IpiModel,
  PisModel,
  PisStModel,
  CofinsModel,
  CofinsStModel,
  IndSomaPisStModel,
  IndSomaCofinsStModel,
  TotalModel,
  ModalidadeFreteNfeModel,
  TransportadorModel,
  VolumeModel,
  FormaPagamentoModel,
  TipoIntegracaoModel,
  FaturaModel,
  DuplicataModel,
  PagModel,
  InformacaoResponsavelTecnicoModel,

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
  indSomaPisStList,
  indSomaCofinsStList,
  modalidadeFreteNfeList,
  formaPagamentoList,
  tipoIntegracaoList,
};
