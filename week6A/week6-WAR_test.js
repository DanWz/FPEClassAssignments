//const assert = require('chai').aeert; //this didn't work
var expect = chai.expect;
//import { createPlayers } from "./week6-WAR.js";
//const { createPlayers } = require('..week6-WAR');

describe ('createPlayers', function() {
    describe('#createPlayers generates new player objects', function() {
        it('should create players and accepts a name for the player', function() {
            let x = newGame.createPlayers('Player1');
            expect(x.name).to.equal('Player1');
            expect(typeof (x.name)).to.equal('string');
            expect(x.hand[0]).to.equal(undefined);
            expect(typeof (x.hand)).to.equal('object');
            expect(x.score).to.equal(0);
            expect(typeof (x.score)).to.equal('number');
        })
    });
});
describe ('buildDeck', function() {
    describe('#buildDeck generates new deck objects', function() {
        it('should create new deck in predicted format', function() {
            let x = newGame.buildDeck();
            expect(x[0].suit).to.equal('Clubs');
            expect(x[12].suit).to.equal('Clubs');
            expect(x[13].suit).to.equal('Hearts');
            expect(x[25].suit).to.equal('Hearts');
            expect(x[26].suit).to.equal('Diamonds');
            expect(x[38].suit).to.equal('Diamonds');
            expect(x[39].suit).to.equal('Spades');
            expect(x[51].suit).to.equal('Spades');
            expect(x.length).to.equal(52);
        })
    });
});