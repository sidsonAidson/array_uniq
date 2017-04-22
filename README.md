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

## Api
###-unique(array, [fnCmp|bool])
