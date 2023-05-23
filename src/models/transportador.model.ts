import { ModalidadeFreteNfeEnum } from "../enums/modalidade-frete-nfe.enum";
import { UnidadeFederativaEnum } from "../enums/nfe-nfce.enum";

export interface TransportadorModel {
  modFrete: ModalidadeFreteNfeEnum;
  cpfCnpj: string;
  xNome: string;
  ie: string;
  xEnder: string;
  xMun: string;
  uf: UnidadeFederativaEnum;
  vServ: number;
  vBcRet: number;
  pIcmsRet: number;
  vIcmsRet: number;
  cfop: string;
  cMunFg: string;
  placa: string;
  ufPlaca: UnidadeFederativaEnum;
  rntc: string;
  vagao: string;
  balsa: string;
}
