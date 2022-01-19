import { printTextOrValueByNumber } from '../task1';

describe('printTextOrValueByNumber test', () => {
    test.each([
        ['candy', 4],
        ['bar', 11],
        ['candybar', 22],
        [25, 25],
    ])('returns %s value for number %s', (result, value) => {
        expect(printTextOrValueByNumber(value)).toBe(result);
    });
});
