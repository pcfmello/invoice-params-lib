import { TipoIntegracaoEnum } from "../enums/tipo-integracao.enum";
import { TipoIntegracaoModel } from "../models/tipo-integracao.model";

export const tipoIntegracaoList: TipoIntegracaoModel[] = [
  {
    type: TipoIntegracaoEnum.PAGAMENTO_INTEGRADO_TEF_COMERCIO_ELETRONICO,
    desc: "Pagamento integrado com o sistema de automação da empresa",
  },
  {
    type: TipoIntegracaoEnum.PAGAMENTO_NAO_INTEGRADO,
    desc: "Pagamento não integrado com o sistema de automação da empresa",
  },
];
