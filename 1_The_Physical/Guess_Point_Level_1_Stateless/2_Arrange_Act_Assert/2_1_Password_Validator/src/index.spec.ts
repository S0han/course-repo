import { PasswordValidator } from '../src/passwordValidator';


describe('password validator', () => {
    it('returns "missing digit" for passwords without at least 1 digit', () => {
        
        let password = 'Momtaro';

        let response = new PasswordValidator();

        expect(response.valPass(password).result).toBe(false);
        expect(response.valPass(password).errorKey.length).toEqual(1);
        expect(response.valPass(password).errorKey[0]).toEqual('Missing Digit');

    });

    it('returns "Invalid Length - Password must be at least 5 characters"..', () => {

        let password = 'Dad3';

        let response = new PasswordValidator();

        expect(response.valPass(password).result).toBe(false);
        expect(response.valPass(password).errorKey.length).toEqual(1);
        expect(response.valPass(password).errorKey[0]).toEqual('Invalid Length - Password must be at least than 5 characters');
    });

    it('returns "Invalid Length - Password can not exceed 15 characters"..', () => {

        let password = 'Daddddddddddssdd3';

        let response = new PasswordValidator();

        expect(response.valPass(password).result).toBe(false);
        expect(response.valPass(password).errorKey.length).toEqual(1);
        expect(response.valPass(password).errorKey[0]).toEqual('Invalid Length - Password can not exceed 15 characters');
    });


})

//tried exporting namespace app and adding class to that export to get around error
//tried breaking into functions but does not make sense as we need to return object
//tried changing file name to get around omdule error
//tried changing path
