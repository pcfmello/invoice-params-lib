import { FormaPagamentoEnum } from "../enums/forma-de-pagamento.enum";
import { FormaPagamentoModel } from "../models/forma-de-pagamento.model";

export const formaPagamentoList: FormaPagamentoModel[] = [
  {
    type: FormaPagamentoEnum.DINHEIRO,
    desc: "Dinheiro",
  },
  {
    type: FormaPagamentoEnum.CHEQUE,
    desc: "Cheque",
  },
  {
    type: FormaPagamentoEnum.CARTAO_DE_CREDITO,
    desc: "Cartão de Crédito",
  },
  {
    type: FormaPagamentoEnum.CARTAO_DE_DEBITO,
    desc: "Cartão de Débito",
  },
  {
    type: FormaPagamentoEnum.CREDITO_LOJA,
    desc: "Crédito Loja",
  },
  {
    type: FormaPagamentoEnum.VALE_ALIMENTACAO,
    desc: "Vale Alimentação",
  },
  {
    type: FormaPagamentoEnum.VALE_REFEICAO,
    desc: "Vale Refeição",
  },
  {
    type: FormaPagamentoEnum.VALE_PRESENTE,
    desc: "Vale Presente",
  },
  {
    type: FormaPagamentoEnum.VALE_COMBUSTIVEL,
    desc: "Vale Combustível",
  },
  {
    type: FormaPagamentoEnum.BOLETO_BANCARIO,
    desc: "Boleto Bancário",
  },
  {
    type: FormaPagamentoEnum.DEPOSITO_BANCARIO,
    desc: "Depósito Bancário",
  },
  {
    type: FormaPagamentoEnum.PIX,
    desc: "Pagamento Instantâneo (PIX)",
  },
  {
    type: FormaPagamentoEnum.TRANSFERENCIA_BANCARIA_CARTEIRA_DIGITAL,
    desc: "Transferência bancária, Carteira Digital",
  },
  {
    type: FormaPagamentoEnum.PROGRAMA_FIDELIDADE_CASHBACK_CREDITO_VIRTUAL,
    desc: "Programa de fidelidade, Cashback, Crédito Virtual",
  },
  {
    type: FormaPagamentoEnum.SEM_PAGAMENTO,
    desc: "Sem pagamento",
  },
  {
    type: FormaPagamentoEnum.OUTROS,
    desc: "Outros",
  },
];
