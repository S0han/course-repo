import  { fizzBuzz } from './fizzbuzz';

describe("fizzbuzz", () => {

    it('returns a string', () => {
        expect(typeof fizzBuzz(5)).toBe('string');
    })

    it('returns fizz for 3', () => {
        expect(fizzBuzz(3)).toEqual('Fizz');
    })

    it('returns Buzz for 5', () => {
        expect(fizzBuzz(5)).toEqual('Buzz');
    })

    it('returns FizzBuzz for 15', () => {
        expect(fizzBuzz(15)).toEqual('FizzBuzz');
    })

    it('returns "4" for 4', () => {
        expect(fizzBuzz(4)).toBe('4');
    })
    
    it('returns fizz for 6', () => {
        expect(fizzBuzz(6)).toEqual('Fizz');
    })

    it('returns Buzz for 10', () => {
        expect(fizzBuzz(10)).toEqual('Buzz');
    })

});
