const test = require('tape');
const isValidJSON = require('./isValidJSON.js');

test('Testing isValidJSON', (test) => {
    test.true(isValidJSON('{"name":"Adam","age":20}'), "{\"name\":\"Adam\",\"age\":20} is not json");
    test.true(isValidJSON(null), "null is not json");

    test.false(isValidJSON('{"name":"Adam",age:"20"}'), "{\"name\":\"Adam\",age:20} is not json");

    test.end();
});