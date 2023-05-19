import { OrigemMercadoriaEnum } from "../enums/origem-da-mercadoria.enum";

export interface OrigemMercadoriaModel {
  type: OrigemMercadoriaEnum;
  desc: string;
}
