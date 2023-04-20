import { palindromeChecker } from './palindromechecker'


describe('palindrome checker', () => {
    it ('returns a string', () => {
        expect(typeof palindromeChecker('t')).toBe('string');
    })
})