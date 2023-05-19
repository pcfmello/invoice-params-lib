import {
  CodigoRegimeTributarioEnum,
  CodigoUnidadeFederativaEnum,
  UnidadeFederativaEnum,
} from "../enums/nfe-nfce.enum";

export interface EmitenteModel {
  crt: CodigoRegimeTributarioEnum;
  cnpjcpf: string;
  xNome: string;
  xFant: string;
  ie: string;
  iest: string;
  im: string;
  cnae: string;
  xLgr: string;
  nro: string;
  xCpl: string;
  xBairro: string;
  cMun: number;
  xNum: string;
  cUf: CodigoUnidadeFederativaEnum;
  uf: UnidadeFederativaEnum;
  cep: string;
  cPais: string;
  xPais: string;
  fone: string;
}
