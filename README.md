# INVOICE PARAMS LIB

Biblioteca que disponibiliza a maioria das parametrizações para geração de NF-e e/ou NFC-e.

## Parametrizações disponíveis

- **(natOp)**  
  Descrição da natureza da operação

- **(indPag)**  
  Indicador de forma de pagamento

- **(mod)**  
  Código modelo do documento fiscal

- **(tpNF)**  
  Tipo de operação

- **(idDest)**  
  Identificador de local de destino da operação

- **(tpAmb)**  
  Identificação do Ambiente

- **(tpImp)**  
  Identificação da NF-e

- **(tpEmis)**  
  Tipo de Emissão

- **(finNfe)**  
  Finalidade de emissão da NF-e

- **(indFinal)**  
  Indicador de operação com Consumidor final

- **(indPres)**  
  Indicador de presença do comprador no estabelecimento comercial no momento da operação

- **(procEmi)**  
  Processo de emissão da NF-e;

- **(cUF)**  
  Código da UF

- **(CRT)**  
  Código de Regime Tributário

- **(UF)**  
  Unidade Federativa

- **(indIEDest)**  
  Indicador da IE do Destinatário

- **(indTot)**  
  Indica se valor do Item (vProd) entra no valor total da NF-e (v Prod)

- **(orig)**  
  Indica a origem da mercadoria

- **(motDesICMS)**  
  Indica o motivo da desoneração do ICMS

- **(modBc)**  
  Indica a modalidade de determinacao da BC

- **(modBcSt)**  
  Indica a modalidade de determinacao da BC Icms-St

## Modelos/tipos disponíveis

- **IdentificacaoModel**  
  Define os tipos de dados necessários para a seção [Identificação](./src/models/identificacao.model.ts) da NFE.ini

- **ProdutoModel**  
  Define os tipos de dados necessários para a seção [ProdutoXXX](./src/models/produto.model.ts) da NFE.ini

- **PisModel**  
  Define os tipos de dados necessários para a seção [PisXXX](./src/models/pis.model.ts) da NFE.ini

- **IcmsModel**  
  Define os tipos de dados necessários para a seção [IcmsXXX](./src/models/icms.model.ts) da NFE.ini

- **EmitenteModel**  
  Define os tipos de dados necessários para a seção [Emitente](./src/models/emitente.model.ts) da NFE.ini

- **DestinatarioModel**  
  Define os tipos de dados necessários para a seção [Destinatário](./src/models/destinatario.model.ts) da NFE.ini

## Listas, models e enums de tributos

- **Csosn e Csosn-Cf**  
  [Código de Situação da Operação do Simples Nacional](./src/lists/csosn-csosncf.list.ts)

- **Cst e Cst-Cf**  
  [Código de Situação Tributária](./src/lists/cst-cstcf.list.ts)

- **Cst Pis Cofins Entrada**  
  [Código de Situação Tributária referente ao Pis e Cofins de entrada](./src/lists/cst-pis-cofins-entrada.list.ts)

- **Cst Pis Cofins Saída**  
  [Código de Situação Tributária referente ao Pis e Cofins de saída](./src/lists/cst-pis-cofins-saida.list.ts)

## Instalar as dependências

- `$ npm install --global commitizen`

## Passos para cadastrar e disponibilizar a parametrização

1.  No arquivo de enums do módulo, criar e exportar um enum com as opções _(vide exemplo em ./src/enums/nfe-nfce.enum.ts)_.

2.  No arquivo de models do módulo, criar e exportar um model para a listagem da nova parametrização _(vide exemplo em ./src/models/nfe-nfce.model.ts)_.

3.  No arquivo de listagem do módulo, criar e exportar uma lista de acordo com o model criado anteriormente _(vide exemplo em ./src/lists/nfe-nfce.list.ts)_.

4.  No arquivo _./src/index.ts_ importar e exportar os três arquivos criados anteriormente para estarem disponíveis para utilização.

5.  Commit e push das alterações

6.  Buildar o projeto: `$ yarn build`

7.  Execute o comando `$ yarn release`  
    A tag é gerada com a nova versão e segue o padrão [SEMVER](https://semver.org/).

    - Veja mais sobre [Git Tag](https://git-scm.com/book/pt-br/v2/Fundamentos-de-Git-Criando-Tags/)

8.  Publicar a nova versão no repositório NPM:
    - `$ git push --follow-tags origin develop && npm publish`

### GEW Tecnologia, 2023
