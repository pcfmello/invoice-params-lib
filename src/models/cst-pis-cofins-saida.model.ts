import { CstPisCofinsEntradaEnum } from "../enums/cst-pis-cofins-entrada.enum";
import { CstPisCofinsSaidaEnum } from "../enums/cst-pis-cofins-saida.enum";

export interface CstPisCofinsSaidaModel {
  type: CstPisCofinsSaidaEnum;
  desc: string;
}
