import { IndSomaPisStEnum } from "../enums/ind-soma-pis-st.enum";
import { IndSomaPisStModel } from "../models/ind-soma-pis-st.model";

export const indSomaPisStList: IndSomaPisStModel[] = [
  {
    type: IndSomaPisStEnum.VALOR_PIS_NAO_COMPOE_TOTAL,
    desc: "Valor do PISST não compõe o valor total da NF-e",
  },
  {
    type: IndSomaPisStEnum.VALOR_PIS_COMPOE_TOTAL,
    desc: "Valor do PISST compõe o valor total da NF-e",
  },
];
