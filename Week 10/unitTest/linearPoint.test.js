const assert = require('assert');
const linearPoint = require('../linearPoint');



describe('Linear Point Function Test', () => {
    it('Test Case 1: result should be 6', () => {
        assert(linearPoint(2, 1, 4), 6);
    });
    it('Test Case 2: result should be 4', () => {
        assert(linearPoint(2, 0, 4), 4);
    });
    it('Test Case 3: result should be 2', () => {
        assert(linearPoint(2, -1, 4), 2);
    });
});