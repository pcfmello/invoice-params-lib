import { IndicadorSeValorItemEntraTotalNfeEnum } from "../enums/nfe-nfce.enum";

export interface ProdutoModel {
  cProd: string;
  cEan: string;
  cEanTrib: string;
  cBarra: string;
  xProd: string;
  ncm: string;
  cest: string;
  extipi: string;
  cfop: string;
  uCom: string;
  qCom: number;
  vUnCom: number;
  vProd: number;
  cBarraTrib: string;
  uTrib: string;
  qTrib: string;
  vUnTrib: number;
  vFrete: number;
  vSeg: number;
  vDesc: number;
  vOutro: number;
  indTot: IndicadorSeValorItemEntraTotalNfeEnum;
  xPed: string;
  nItemPed: string;
  nFci: string;
  nRecopi: string;
  pDevol: string;
  vIPIDevol: number;
  vTotTrib: number;
  infAdProd: string;
  indEscala: string;
  cnpjFab: string;
  cBenef: string;
}
