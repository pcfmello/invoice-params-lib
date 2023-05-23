import { TipoIntegracaoEnum } from "../enums/tipo-integracao.enum";

export interface TipoIntegracaoModel {
  type: TipoIntegracaoEnum;
  desc: string;
}
