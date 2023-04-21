import { palindromeChecker } from './palindromechecker'


describe('palindrome checker', () => {

    it('knows that "mom" is a plaindrome', () => {
        expect(palindromeChecker('mom')).toBeTruthy();
    });

    it('knows that "wow" is a palindrome', () => {
        expect(palindromeChecker('wow')).toBeTruthy();
    })

    it('knows that "level" is a palindrome', () => {
        expect(palindromeChecker('level')).toBeTruthy();
    });

    it('knows that "bill" is not a palindrome', () => {
        expect(palindromeChecker('bill')).toBe(false);
    })

    it('knows that "Mom" is a palindrome', () => {
        expect(palindromeChecker('Mom')).toBeTruthy();
    })

})