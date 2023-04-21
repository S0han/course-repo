import { palindromeChecker } from './palindromechecker'


describe('palindrome checker', () => {

    it('knows that input is a string', () => {
        expect(typeof palindromeChecker('t')).toBe('string');
    });

    it('knows that "mom" is a plaindrome', () => {
        expect(palindromeChecker('mom')).toBeTruthy();
    });

    it('knows that "wow" is a palindrome', () => {
        expect(palindromeChecker('wow')).toBeTruthy();
    })

    it('knows that "level" is a palindrome', () => {
        expect(palindromeChecker('level')).toBeTruthy();
    });

})