var _ = require('lodash');

module.exports = function (node, options) {
  var best = {node: null, score: -Infinity}
    , opts = options || {}
    , color = opts.color || -1
    , depth = opts.depth || 10;

  // negamax algorithm taken from http://wikipedia.org/wiki/Negamax
  function getScore(node, depth, alpha, beta, color) {
    var bestValue = -Infinity;

    if (depth === 0 || node.isTerminal()) {
      return color * node.value();
    }

    _.each(node.children(), function (child) {
      var value = -getScore(child, depth - 1, -beta, -alpha, -color);
      bestValue = Math.max(value, bestValue);
      var skip = Math.max(alpha, value) >= beta;
      if (skip) return false;
    });

    return bestValue;
  };

  // return node with highest score
  _.each(node.children(), function (child) {
    var score = color * getScore(child, depth, -Infinity, Infinity, color);
    if (score <= best.score) return;
    best.node = child;
    best.score = score;
  });

  return best;
};