var _ = require('lodash')
  , mocha = require('mocha')
  , negamax = require('..')
  , should = require('chai').should()
  , tictactoe = require('./fixtures/tic-tac-toe');

describe('negamax', function () {
  it('is a function', function () {
    negamax.should.be.a('function');
  });

  it('should return a node', function () {
    negamax(tictactoe.blank).node.should.be.an('object');
  });

  it('should return a score', function () {
    negamax(tictactoe.blank).score.should.be.a('number');
  });

  it('should not win on a blank tic-tac-toe board', function () {
    negamax(tictactoe.blank).score.should.equal(0);
  });

  it('should win horizontally on this tic-tac-toe board', function () {
    negamax(tictactoe.p1winhor).score.should.equal(1);
  });

  it('should win vertically on this tic-tac-toe board', function () {
    negamax(tictactoe.p1winver).score.should.equal(1);
  });

  it('should win diagonally on this tic-tac-toe board', function () {
    negamax(tictactoe.p1windag).score.should.equal(1);
  });

  it('should win after two moves on this tic-tac-toe board', function () {
    negamax(tictactoe.p1win2).score.should.equal(1);
  });
});