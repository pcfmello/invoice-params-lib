import { IndSomaCofinsStEnum } from "../enums/ind-soma-cofins-st.enum";

export interface CofinsStModel {
  vBc: number;
  pCofins: number;
  qBcProd: number;
  vAliqProd: number;
  vCofins: number;
  indSomaCofinsSt: IndSomaCofinsStEnum;
}
