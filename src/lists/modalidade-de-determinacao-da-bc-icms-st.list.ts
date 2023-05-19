import { ModalidadeDeterminacaoBcIcmsStEnum } from "../enums/modalidade-de-determinacao-da-bc-icms-st.enum";
import { ModalidadeDeterminacaoBcIcmsStModel } from "../models/modalidade-de-determinacao-da-bc-icms-st.model";

export const modalidadeDeterminacaoBcIcmsStList: ModalidadeDeterminacaoBcIcmsStModel[] =
  [
    {
      type: ModalidadeDeterminacaoBcIcmsStEnum.PRECO_TABELADO,
      desc: "Preço tabelado ou máximo sugerido",
    },
    {
      type: ModalidadeDeterminacaoBcIcmsStEnum.LISTA_NEGATIVA,
      desc: "Lista Negativa (valor)",
    },
    {
      type: ModalidadeDeterminacaoBcIcmsStEnum.LISTA_POSITIVA,
      desc: "Lista Positiva (valor)",
    },
    {
      type: ModalidadeDeterminacaoBcIcmsStEnum.LISTA_NEUTRA,
      desc: "Lista Neutra (valor)",
    },
    {
      type: ModalidadeDeterminacaoBcIcmsStEnum.MARGEM_VALOR_AGREGADO,
      desc: "Margem Valor Agregado (%)",
    },
    {
      type: ModalidadeDeterminacaoBcIcmsStEnum.PAUTA,
      desc: "Pauta (valor)",
    },
  ];
