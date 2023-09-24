const jwt = require('jsonwebtoken');
var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
var parseToken = jwt.verify(token, 'shhhhh');
console.log(parseToken);
console.log(token);
