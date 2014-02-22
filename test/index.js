var _ = require('lodash')
  , fixtures = require('./fixtures')
  , mocha = require('mocha')
  , negamax = require('..').negamax
  , should = require('chai').should();

describe('negamax', function () {
  it('is a function', function () {
    negamax.should.be.a('function');
  });

  it('should return a node', function () {
    negamax(fixtures.tictactoe.blank).node.should.be.an('object');
  });

  it('should return a score', function () {
    negamax(fixtures.tictactoe.blank).score.should.be.a('number');
  });

  it('should not win on a blank tic-tac-toe board', function () {
    negamax(fixtures.tictactoe.blank).score.should.equal(0);
  });

  it('should win horizontally on this tic-tac-toe board', function () {
    negamax(fixtures.tictactoe.p1winhor).score.should.equal(1);
  });

  it('should win vertically on this tic-tac-toe board', function () {
    negamax(fixtures.tictactoe.p1winver).score.should.equal(1);
  });

  it('should win diagonally on this tic-tac-toe board', function () {
    negamax(fixtures.tictactoe.p1windag).score.should.equal(1);
  });

  it('should win after two moves on this tic-tac-toe board', function () {
    negamax(fixtures.tictactoe.p1win2).score.should.equal(1);
  });
});