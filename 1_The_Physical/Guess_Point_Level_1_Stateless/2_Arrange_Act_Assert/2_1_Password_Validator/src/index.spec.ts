import { passwordValidator } from './passwordValidator';

describe('password validator', () => {
   it('returns "Missing Digit" for passwords without at least one digit', () => {
        
        let password = 'Momotaro';

        expect(passwordValidator(password).result).toBe(false);
        expect(passwordValidator(password).errorKey.length).toEqual(1);
        expect(passwordValidator(password).errorKey[0]).toEqual('Missing Digit');

   });
})
