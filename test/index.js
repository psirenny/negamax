var _ = require('lodash')
  , chai = require('chai')
  , fixtures = require('./fixtures')
  , mocha = require('mocha')
  , negamax = require('..').negamax;

describe('negamax', function () {
  it('asdf', function () {
    console.log(negamax.best(fixtures.tictactoe.p1win2));
  });
});