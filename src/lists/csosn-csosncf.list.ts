import { CsosnCfEnum } from "../enums/csosn-cf.enum";
import { CsosnCfModel } from "../models/csosn-csosncf.model";

export const csosnCfList: CsosnCfModel[] = [
  {
    type: CsosnCfEnum.CSOSN_CSOSNCF_101,
    desc: "101 - Tributada pelo Simples Nacional com permissão de crédito",
  },

  {
    type: CsosnCfEnum.CSOSN_CSOSNCF_102,
    desc: "102 - Tributada pelo Simples Nacional sem permissão de crédito",
  },

  {
    type: CsosnCfEnum.CSOSN_CSOSNCF_103,
    desc: "103 - Isenção do ICMS no Simples Nacional para faixa de receita bruta",
  },

  {
    type: CsosnCfEnum.CSOSN_CSOSNCF_201,
    desc: "201 - Tributada pelo Simples Nacional com permissão de crédito e com cobrança do ICMS por substituição tributária",
  },

  {
    type: CsosnCfEnum.CSOSN_CSOSNCF_202,
    desc: "202 - Tributada pelo Simples Nacional sem permissão de crédito e com cobrança do ICMS por substituição tributária",
  },

  {
    type: CsosnCfEnum.CSOSN_CSOSNCF_203,
    desc: "203 - Isenção do ICMS no Simples Nacional para faixa de receita bruta e com cobrança do ICMS por substituição tributária",
  },

  {
    type: CsosnCfEnum.CSOSN_CSOSNCF_300,
    desc: "300 - Imune",
  },

  {
    type: CsosnCfEnum.CSOSN_CSOSNCF_400,
    desc: "400 - Não tributada pelo Simples Nacional",
  },

  {
    type: CsosnCfEnum.CSOSN_CSOSNCF_500,
    desc: "500 - ICMS cobrado anteriormente por substituição tributária (substituído) ou por antecipação",
  },

  {
    type: CsosnCfEnum.CSOSN_CSOSNCF_900,
    desc: "900 - Outros",
  },
];
