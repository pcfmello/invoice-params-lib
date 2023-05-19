import {
  IndicadorIeDestinatarioEnum,
  UnidadeFederativaEnum,
} from "../enums/nfe-nfce.enum";

export interface DestinatarioModel {
  idEstrangeiro: string;
  cpfCnpj: string;
  xNome: string;
  indIeDest: IndicadorIeDestinatarioEnum;
  ie: string;
  isuf: string;
  email: string;
  xLgr: string;
  nro: string;
  xCpl: string;
  xBairro: string;
  cMun: number;
  xMun: string;
  uf: UnidadeFederativaEnum;
  cep: string;
  cPais: number;
  xPais: string;
  fone: string;
}
