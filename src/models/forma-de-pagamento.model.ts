import { FormaPagamentoEnum } from "../enums/forma-de-pagamento.enum";

export interface FormaPagamentoModel {
  type: FormaPagamentoEnum;
  desc: string;
}
