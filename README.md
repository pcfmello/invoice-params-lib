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

## Passos para cadastrar e disponibilizar a parametrização

1. No arquivo de enums do módulo, criar e exportar um enum com as opções _(vide exemplo em ./src/enums/nfe-nfce.enum.ts)_.

2. No arquivo de models do módulo, criar e exportar um model para a listagem da nova parametrização _(vide exemplo em ./src/models/nfe-nfce.model.ts)_.

3. No arquivo de listagem do módulo, criar e exportar uma lista de acordo com o model criado anteriormente _(vide exemplo em ./src/lists/nfe-nfce.list.ts)_.

4. No arquivo _./src/index.ts_ importar e exportar os três arquivos criados anteriormente para estarem disponíveis para utilização.

5. Commit e push das alterações;

6. Buildar o projeto: `$ yarn build`

7. Execute o comando `$ git tag` juntamente do número da nova versão (verificar versão atual dentro do package.json). A versão segue o padrão [SEMVER](https://semver.org/).  
   Ex: `$ git tag 1.0.0`

- Confirme a criação da tag:  
  `$ git tag`
- Faça o push ta nova tag:  
  `$ git push origin --tags`

* \*\*\* Veja mais sobre [Git Tag](https://git-scm.com/book/pt-br/v2/Fundamentos-de-Git-Criando-Tags)

8. Publicar a nova versão no repositório NPM:  
   `$ npm login` (Inserir os dados de login)  
   `$ npm publish`
