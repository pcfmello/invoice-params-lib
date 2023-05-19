import { ModalidadeDeterminacaoBcEnum } from "../enums/modalidade-de-determinacao-da-bc.enum";
import { ModalidadeDeterminacaoBcModel } from "../models/modadlidade-de-determinacao-da-bc.model";

export const modalidadeDeterminacaoBcList: ModalidadeDeterminacaoBcModel[] = [
  {
    type: ModalidadeDeterminacaoBcEnum.MARGEM_VALOR_AGREGADO,
    desc: "Margem Valor Agregado (%)",
  },
  {
    type: ModalidadeDeterminacaoBcEnum.PAUTA,
    desc: "Pauta (Valor)",
  },
  {
    type: ModalidadeDeterminacaoBcEnum.PRECO_TABELADO_MAX,
    desc: "Preço Tabelado Máx. (valor)",
  },
  {
    type: ModalidadeDeterminacaoBcEnum.VALOR_DA_OPERACAO,
    desc: "Valor da operação",
  },
];
