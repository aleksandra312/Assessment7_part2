const timeWord = require('./timeWord');

describe('#timeword', () => {
    test('it is a function', () => {
        expect(typeof timeWord).toBe('function');
    });

    test('returns expected output', () => {
        const output = timeWord('12:15');
        expect(output).toBe('quarter past twelve');
    });

    test('returns expected output for hr starting with 0', () => {
        const output = timeWord('06:00');
        expect(output).toBe("six o' clock ");
    });
});