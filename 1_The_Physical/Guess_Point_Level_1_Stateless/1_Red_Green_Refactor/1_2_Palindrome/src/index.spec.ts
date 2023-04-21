import { palindromeChecker } from './palindromechecker'


describe('palindrome checker', () => {

    it('knows that "mom" is a palindrome', () => {
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

    it('knows that "bOb" is a palindrome', () => {
        expect(palindromeChecker('bOb')).toBeTruthy();
    })

    it('knows that "daD" is a palindrome', () => {
        expect(palindromeChecker('daD')).toBeTruthy();
    })

    it('knows that "Was It A Rat I Saw" is a palindrome', () => {
        expect(palindromeChecker('Was It A Rat I Saw')).toBeTruthy();
    })

    it('knows that "Never Odd or Even" is a palindrome', () => {
        expect(palindromeChecker('Never Odd or Even')).toBeTruthy();
    })

    it('knows that "This is not a palindrome" is not a palindrome', () => {
        expect(palindromeChecker('This is not a palindrome')).toBe(false);
    })

})