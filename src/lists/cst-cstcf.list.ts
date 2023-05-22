import { CstCfEnum } from "../enums/cst-cf.enum";
import { CstCfModel } from "../models/cst-cstcf.model";

export const cstCfList: CstCfModel[] = [
  {
    type: CstCfEnum.CST_CSTCF_00,
    desc: "00 - Tributado Integralmente",
  },
  {
    type: CstCfEnum.CST_CSTCF_10,
    desc: "10 - Com Subst. Tributária Subseqüente",
  },
  {
    type: CstCfEnum.CST_CSTCF_20,
    desc: "20 - Base Reduzida",
  },
  {
    type: CstCfEnum.CST_CSTCF_30,
    desc: "30 - Isento c/ Substituição Tributária",
  },
  {
    type: CstCfEnum.CST_CSTCF_40,
    desc: "40 - Isento",
  },
  {
    type: CstCfEnum.CST_CSTCF_41,
    desc: "41 - Não Tributada",
  },
  {
    type: CstCfEnum.CST_CSTCF_50,
    desc: "50 - Suspensão",
  },
  {
    type: CstCfEnum.CST_CSTCF_51,
    desc: "51 - Diferido",
  },
  {
    type: CstCfEnum.CST_CSTCF_60,
    desc: "60 - Substituição Tributária",
  },
  {
    type: CstCfEnum.CST_CSTCF_70,
    desc: "70 - Subs. Tributária com Base Reduzida",
  },
  {
    type: CstCfEnum.CST_CSTCF_90,
    desc: "90 - Outros",
  },
];
