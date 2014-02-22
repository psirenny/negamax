var _ = require('lodash')
  , chai = require('chai')
  , fixtures = require('./fixtures')
  , mocha = require('mocha')
  , negamax = require('..').negamax;

describe('negamax', function () {
  it('asdf', function () {
    console.log(negamax(fixtures.tictactoe.blank));
    console.log(negamax(fixtures.tictactoe.p1winhor));
    console.log(negamax(fixtures.tictactoe.p1winver));
    console.log(negamax(fixtures.tictactoe.p1windag));
    console.log(negamax(fixtures.tictactoe.p1win2));
  });
});