_ = require('lodash');

module.exports = function (node, depth, alpha, beta, color) {
  var bestValue = -Infinity;

  if (depth === 0 || node.isTerminal()) {
    return color * node.value();
  }

  _.each(node.children(), function (child) {
    var value = -exports.negamax(child, depth - 1, -beta, -alpha, -color);
    bestValue = Math.max(value, bestValue);
    var skip = Math.max(alpha, value) >= beta;
    if (skip) return false;
  });

  return bestValue;
};