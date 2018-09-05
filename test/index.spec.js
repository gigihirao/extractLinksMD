const getLInksFromMd = require('../index');
const chai = require('chai');
const mocha = require('mocha');
const expect = chai.expect;

describe('getLinksFromMd()', () => {
    describe('#getLinksFromMd', () => {
        it('Deve retornar um erro quando não houber parametro', () => {
            expect(() => getLInksFromMd(0)).to.throw(Error);
        })
        it('Deve retornar um erro quando for um número', () => {
            expect(() => getLInksFromMd(1234)).to.throw(Error);
        })
        it('Quando for uma string e não houver url retorna array vazio', () => {
            expect(getLInksFromMd('str')).to.deep.equal([]);
        })
        it('Quando for uma string e houver url retorna array com objeto', () => {
            expect(getLInksFromMd('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  incididunt ut [labore](https://en.wiktionary.org/wiki/labore)'))
            .to.deep.equal([{text: 'labore', href: 'https://en.wiktionary.org/wiki/labore'}]);
        })
        it('Quando for uma string e houver três urls diferentes retorna array com objetos', () => {
            expect(getLInksFromMd('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  incididunt ut [labore](https://en.wiktionary.org/wiki/labore) et [dolore](https://en.wiktionary.org/wiki/dolore) magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.[foo](http://foo.com)Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`'))
            .to.deep.equal([
                {text: 'labore', href: 'https://en.wiktionary.org/wiki/labore'},
                {text: 'dolore', href: 'https://en.wiktionary.org/wiki/dolore'},
                {text: 'foo' , href: 'http://foo.com'}
            ]);
        })
    });
});