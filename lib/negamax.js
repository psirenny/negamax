var _ = require('lodash');
var util = require('util');

exports.best = function (node, color) {
  var best = {node: null, score: -Infinity};
  if (!color) color = 1;

  _.each(node.children(), function (child) {
    var score = exports.fn(child, 10000, -Infinity, Infinity, color);
    if (score > best.score) {
      best.node = child;
      best.score = score;
    }
  });

  return best;
};

var check = false;

exports.fn = function (node, depth, alpha, beta, color) {
  var bestValue = -Infinity;

  if (depth === 0 || node.isTerminal()) {
    if (check) {
      //console.log('score:', color * node.value());
    }
    return color * node.value();
  }

  check =
    node.board[0] === 1 &&
    node.board[2] === 1 &&
    node.board[4] === 1 &&
    node.board[7] === -1 &&
    node.board[8] === -1;

  _.each(node.children(), function (child) {
    var value = -exports.fn(child, depth - 1, -beta, -alpha, -color);
    bestValue = Math.max(value, bestValue);
    var skip = Math.max(alpha, value) >= beta;
    if (check && child.board[6] === -1) {
      //console.log('color:', color);
      //console.log('value:', value);
      //console.log('best value:', bestValue);
    }
    if (skip) return false;
  });

  return bestValue;
};