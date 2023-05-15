import { passwordValidator } from './passwordValidator';

describe('password validator', () => {

   it('returns "Missing Digit" for passwords without at least one digit', () => {
        
        let password = 'Momotaro';

        let response = passwordValidator(password);

        expect(response.result).toBe(false);
        expect(response.errorKey.length).toEqual(1);
        expect(response.errorKey[0]).toEqual('Missing Digit');

   });

   it('returns "Invalid Length - Password must be at least 5 characters"..', () => {

        let password = 'Dad3';

        let response = passwordValidator(password);

        expect(response.result).toBe(false);
        expect(response.errorKey.length).toEqual(1);
        expect(response.errorKey[0]).toEqual('Invalid Length - Password must be at least 5 characters');

   });


})
