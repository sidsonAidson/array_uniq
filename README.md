# array-uniq 

> Remove duplicates  from array

## Install

```
$ npm install unique_array
```


## Usage

```js
const uniq = require('unique_array');
uniq([1,'1',1,'3',3,4,6,7]); // non-strict equality [ 1, '3', 4, 6, 7 ]

uniq([1,'1',1,'3',3,4,6,7], true); // strict equality [ 1, '1', '3', 3, 4, 6, 7 ]

uniq([{x:12, y:23}, {x:-1, y:3}, {x:12, y:23}, {x:33, y:23}], (e1, e2) => {
	return e1.x == e2.y && e1.y == e2.y
}) //  { x: 12, y: 23 }, { x: -1, y: 3 }, { x: 33, y: 23 } ]

```

```js
const uniq_immu = require('./index.js').nonmutate;
var og = [1,'1',1,'3',3,4,6,7];
var nw = uniq_immu(og); // return new array(shallow copy)
nw.push(344);

console.log(og);
console.log(nw);
```

## Api
###-require('unique_array')(array, [fnCmp|bool])
###-require('unique_array').nonmutate(array, [fnCmp|bool])
