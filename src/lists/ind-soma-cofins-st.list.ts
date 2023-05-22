import { IndSomaCofinsStEnum } from "../enums/ind-soma-cofins-st.enum";
import { IndSomaCofinsStModel } from "../models/ind-soma-cofins-st.model";

export const indSomaCofinsStList: IndSomaCofinsStModel[] = [
  {
    type: IndSomaCofinsStEnum.VALOR_COFINS_NAO_COMPOE_TOTAL,
    desc: "Valor do Cofins St não compõe o valor total da NF-e",
  },
  {
    type: IndSomaCofinsStEnum.VALOR_COFINS_COMPOE_TOTAL,
    desc: "Valor do Cofins St compõe o valor total da NF-e",
  },
];
