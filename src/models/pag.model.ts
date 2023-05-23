import { FormaPagamentoEnum } from "../enums/forma-de-pagamento.enum";
import { IndicadorFormaPagamentoEnum } from "../enums/nfe-nfce.enum";
import { TipoIntegracaoEnum } from "../enums/tipo-integracao.enum";

export interface PagModel {
  tPag: FormaPagamentoEnum;
  vPag: number;
  indPag: IndicadorFormaPagamentoEnum;
  xPag: string;
  tpIntegra: TipoIntegracaoEnum;
  cnpj: string;
  tBand: string; // Verificar quais cartões serão utilizados para cadastrar
  cAut: string;
}
