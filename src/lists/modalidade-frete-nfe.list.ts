import { ModalidadeFreteNfeEnum } from "../enums/modalidade-frete-nfe.enum";
import { OrigemMercadoriaEnum } from "../enums/origem-da-mercadoria.enum";
import { ModalidadeFreteNfeModel } from "../models/modalidade-frete-nfe.model";
import { OrigemMercadoriaModel } from "../models/origem-da-mercadoria.model";

export const modalidadeFreteNfeList: ModalidadeFreteNfeModel[] = [
  {
    type: ModalidadeFreteNfeEnum.FRETE_POR_CONTA_DO_REMETENTE_CIF,
    desc: "Contratação do Frete por conta do Remetente (CIF)",
  },
  {
    type: ModalidadeFreteNfeEnum.FRETE_POR_CONTA_DO_DESTINATARIO_FOB,
    desc: "Contratação do Frete por conta do Destinatário (FOB)",
  },
  {
    type: ModalidadeFreteNfeEnum.FRETE_POR_CONTA_DE_TERCEIROS,
    desc: "Contratação do Frete por conta de Terceiros",
  },
  {
    type: ModalidadeFreteNfeEnum.TRANSPORTE_PROPRIO_POR_CONTA_DO_REMETENTE,
    desc: "Transporte Próprio por conta do Remetente",
  },
  {
    type: ModalidadeFreteNfeEnum.TRANSPORTE_PROPRIO_POR_CONTA_DO_DESTINATARIO,
    desc: "Transporte Próprio por conta do Destinatário",
  },
  {
    type: ModalidadeFreteNfeEnum.SEM_OCORRENCIA_DE_TRANSPORTE,
    desc: "Sem Ocorrência de Transporte",
  },
];
