/**
 * Created by sidson_aidson on 22/04/2017.
 */

const uniq = require('./index.js');
var a = uniq([1,'1',1,'3',3,4,6,7]); // ['1', '3', 4,77]

var b = uniq([1,'1',1,'3',3,4,6,7], true); // ['1', '3', 4,77]


var c = uniq([{x:12, y:23}, {x:-1, y:3}, {x:12, y:23}, {x:33, y:23}], (e1, e2) => {
    return e1.x == e2.x && e1.y == e2.y
});

console.log(a);
console.log(b);
console.log(c);