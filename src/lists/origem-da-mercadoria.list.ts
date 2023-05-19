import { OrigemMercadoriaEnum } from "../enums/origem-da-mercadoria.enum";
import { OrigemMercadoriaModel } from "../models/origem-da-mercadoria.model";

export const origemMercadoriaList: OrigemMercadoriaModel[] = [
  {
    type: OrigemMercadoriaEnum.NACIONAL,
    desc: "Nacional",
  },
  {
    type: OrigemMercadoriaEnum.ESTRANGEIRA_IMPORTACAO_DIRETA,
    desc: "Estrangeira – Importação direta",
  },
  {
    type: OrigemMercadoriaEnum.ESTRANGEIRA_ADQUIRIDA_MERCADO_INTERNO,
    desc: "Estrangeira – Adquirida no mercado interno",
  },
  {
    type: OrigemMercadoriaEnum.NACIONAL_MERCADORIA_IMPORTACAO_ENTRE_40_E_70_PORCENTO,
    desc: "Nacional, mercadoria ou bem com Conteúdo de Importação superior a 40% (quarenta por cento) e inferior ou igual a 70% (setenta por cento)",
  },
  {
    type: OrigemMercadoriaEnum.NACIONAL_PRODUCAO_PROCESSOS_PRODUTIVOS_BASICOS,
    desc: "Nacional, cuja produção tenha sido feita em conformidade com os processos produtivos básicos (PPB) de que tratam o Decreto-Lei nº 288/1967, e as Leis nºs 8.248/1991, 8.387/1991, 10.176/2001 e 11.484/2007.",
  },
  {
    type: OrigemMercadoriaEnum.NACIONAL_MERCADORIA_IMPORTACAO_ATE_40_PORCENTO,
    desc: "Nacional, mercadoria ou bem com Conteúdo de Importação inferior ou igual a 40%",
  },
  {
    type: OrigemMercadoriaEnum.ESTRANGEIRA_IMPORTACAO_DIRETA_SEM_SIMILAR_NACIONAL,
    desc: "Estrangeira – Importação direta, sem similar nacional, constante em lista de Resolução CAMEX e gás natural.",
  },
  {
    type: OrigemMercadoriaEnum.ESTRANGEIRA_ADQUIRIDA_MERCADO_INTERNO_SEM_SIMILAR_NACIONAL,
    desc: "Estrangeira – Adquirida no mercado interno, sem similar nacional, constante em lista de Resolução CAMEX e gás natural.",
  },
  {
    type: OrigemMercadoriaEnum.NACIONAL_MERCADORIA_IMPORTACAO_ACIMA_70_PORCENTO,
    desc: "Nacional, mercadoria ou bem com Conteúdo de Importação superior a 70%",
  },
];
