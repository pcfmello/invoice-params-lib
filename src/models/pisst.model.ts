import { IndSomaPisStEnum } from "../enums/ind-soma-pis-st.enum";

export interface PisStModel {
  vBc: number;
  pPis: number;
  qBcProd: number;
  vAliqProd: number;
  vPis: number;
  indSomaPisSt: IndSomaPisStEnum;
}
