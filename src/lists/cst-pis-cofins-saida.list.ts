import { CstPisCofinsSaidaEnum } from "../enums/cst-pis-cofins-saida.enum";
import { CstPisCofinsSaidaModel } from "../models/cst-pis-cofins-saida.model";

export const cstPisCofinsSaidaList: CstPisCofinsSaidaModel[] = [
  {
    type: CstPisCofinsSaidaEnum.CST_PIS_COFINS_SAIDA_01,
    desc: "01 - Operação Tributável (base de cálculo = valor da operação alíquota normal (cumulativo/não cumulativo))",
  },
  {
    type: CstPisCofinsSaidaEnum.CST_PIS_COFINS_SAIDA_02,
    desc: "02 - Operação Tributável (base de cálculo = valor da operação (alíquota diferenciada))",
  },
  {
    type: CstPisCofinsSaidaEnum.CST_PIS_COFINS_SAIDA_03,
    desc: "03 - Operação Tributável (base de cálculo = quantidade vendida x alíquota por unidade de produto)",
  },
  {
    type: CstPisCofinsSaidaEnum.CST_PIS_COFINS_SAIDA_04,
    desc: "04 - Operação Tributável (tributação monofásica (alíquota zero))",
  },
  {
    type: CstPisCofinsSaidaEnum.CST_PIS_COFINS_SAIDA_05,
    desc: "05 - Operação Tributável por Substituição Tributária",
  },
  {
    type: CstPisCofinsSaidaEnum.CST_PIS_COFINS_SAIDA_06,
    desc: "06 - Operação Tributável (alíquota zero)",
  },
  {
    type: CstPisCofinsSaidaEnum.CST_PIS_COFINS_SAIDA_07,
    desc: "07 - Operação Isenta da Contribuição",
  },
  {
    type: CstPisCofinsSaidaEnum.CST_PIS_COFINS_SAIDA_08,
    desc: "08 - Operação Sem Incidência da Contribuição",
  },
  {
    type: CstPisCofinsSaidaEnum.CST_PIS_COFINS_SAIDA_09,
    desc: "09 - Operação com Suspensão da Contribuição",
  },
  {
    type: CstPisCofinsSaidaEnum.CST_PIS_COFINS_SAIDA_49,
    desc: "49 - Outras Operações de Saída",
  },
];
