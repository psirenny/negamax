var _ = require('lodash');

module.exports = function Node(board, player) {
  this.board = board || [0, 0, 0, 0, 0, 0, 0, 0, 0];
  this.player = player || -1;

  this.children = function () {
    var result = [];

    for (var i = 0; i < this.board.length; i++) {
      if (this.board[i]) continue;
      var newBoard = _.clone(this.board);
      newBoard[i] = -this.player;
      result.push(new Node(newBoard, -this.player));
    }

    return result;
  }

  this.isTerminal = function () {
    return this.value() || !_.contains(this.board, 0);
  }

  this.value = function () {
    if (this.board[0] === 1 && this.board[1] === 1 && this.board[2] === 1) return 1;
    if (this.board[3] === 1 && this.board[4] === 1 && this.board[5] === 1) return 1;
    if (this.board[6] === 1 && this.board[7] === 1 && this.board[8] === 1) return 1;
    if (this.board[0] === 1 && this.board[3] === 1 && this.board[6] === 1) return 1;
    if (this.board[1] === 1 && this.board[4] === 1 && this.board[7] === 1) return 1;
    if (this.board[2] === 1 && this.board[5] === 1 && this.board[8] === 1) return 1;
    if (this.board[0] === 1 && this.board[4] === 1 && this.board[8] === 1) return 1;
    if (this.board[2] === 1 && this.board[4] === 1 && this.board[6] === 1) return 1;
    if (this.board[0] === -1 && this.board[1] === -1 && this.board[2] === -1) return -1;
    if (this.board[3] === -1 && this.board[4] === -1 && this.board[5] === -1) return -1;
    if (this.board[6] === -1 && this.board[7] === -1 && this.board[8] === -1) return -1;
    if (this.board[0] === -1 && this.board[3] === -1 && this.board[6] === -1) return -1;
    if (this.board[1] === -1 && this.board[4] === -1 && this.board[7] === -1) return -1;
    if (this.board[2] === -1 && this.board[5] === -1 && this.board[8] === -1) return -1;
    if (this.board[0] === -1 && this.board[4] === -1 && this.board[8] === -1) return -1;
    if (this.board[2] === -1 && this.board[4] === -1 && this.board[6] === -1) return -1;
    return 0;
  };
};