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


   it('returns "Invalid Length - Password can not exceed 15 characters"..', () => {

        let password = 'Dadddddddddddddddddssdd3';

        let response = passwordValidator(password);

        expect(response.result).toBe(false);
        expect(response.errorKey.length).toEqual(1);
        expect(response.errorKey[0]).toEqual('Invalid Length - Password can not exceed 15 characters');

    });

    it('returns "Missing Upper-case Letter" for passwords without at least 1 upper-case letter', () => {

        let password = 'momtar999';

        let response = passwordValidator(password);

        expect(response.result).toBe(false);
        expect(response.errorKey.length).toEqual(1);
        expect(response.errorKey[0]).toEqual('Missing Upper-case Letter');

    });

    it('returns both "Missing Digit" AND "Missing Upper-case Letter".. ', () => {
        
        let password = 'momwww';

        let response = passwordValidator(password);

        expect(response.result).toBe(false);
        expect(response.errorKey.length).toEqual(2);
        expect(response.errorKey).toEqual(['Missing Digit', 'Missing Upper-case Letter']);

    });


    it('returns both "Missing Digit" AND "Missing Upper-case Letter" AND "Invalid Length - Password must be at least 5 characters".. ', () => {
        
        let password = 'mom';

        let response = passwordValidator(password);

        expect(response.result).toBe(false);
        expect(response.errorKey.length).toEqual(3);
        expect(response.errorKey).toEqual(['Missing Digit', 'Invalid Length - Password must be at least 5 characters', 'Missing Upper-case Letter']);

    });
})
