var Node = require('./lib/node');

/*
 * [*] [ ] [ ]
 * [ ] [ ] [ ]
 * [ ] [ ] [ ]
 */
exports.blank = new Node();

/*
 * [X] [X] [*]
 * [O] [O] [ ]
 * [ ] [ ] [ ]
 */
exports.p1winhor = new Node([1, 1, 0, -1, -1, 0, 0, 0, 0]);

/*
 * [X] [O] [ ]
 * [X] [O] [ ]
 * [*] [ ] [ ]
 */
exports.p1winver = new Node([1, -1, 0, 1, -1, 0, 0, 0, 0]);

/*
 * [X] [O] [*]
 * [O] [X] [ ]
 * [ ] [ ] [ ]
 */
exports.p1windag = new Node([1, -1, 0, -1, 1, 0, 0, 0, 0]);

/*
 * [X] [ ] [ ]
 * [ ] [X] [ ]
 * [*] [O] [O]
 */
exports.p1win2 = new Node([1, 0, 0, 0, 1, 0, 0, -1, -1]);