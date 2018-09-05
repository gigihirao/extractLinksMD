# Extração de links dentro do Markdown

**Esta biblioteca se destina à extração de links dentro de um markdown.**
Na versão atual é capaz de localizar os links dentro do markdown, extrai-los e separa-los em um array contendo suas informações em um objeto.


## Os métodos utilizados na biblioteca são:

#### **getLinksFromMd();**

Exemplo de uso:

```
$node
> let extract = require('extractlinksmd');
> extract('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  incididunt ut [labore](https://en.wiktionary.org/wiki/labore) et [dolore](https://en.wiktionary.org/wiki/dolore) magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.');
  //  [ { text: 'labore', href: 'https://en.wiktionary.org/wiki/labore' },
  //    { text: 'dolore', href: 'https://en.wiktionary.org/wiki/dolore' } ];

```


## instalação

- você deverá ter o node + npm instalados. Para guia de instalação, visite [o site oficial](https://www.npmjs.com/get-npm).
- proceda com a instalação com `$npm install extractlinksmd`


## roadmap oficial do projeto

#### versão 2.0.0 (no ETA)
- filtro de urls.

#### versão 1.0.1 (released)
- correção de bugs da instalação.
- atualização do README.

#### versão 1.0.0 (released)
- localizar os links dentro do markdown.
- separa-los em objetos e inseri-los dentro de uma array.