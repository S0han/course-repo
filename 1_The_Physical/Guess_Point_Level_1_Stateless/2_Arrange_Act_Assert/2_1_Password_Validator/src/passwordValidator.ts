export class PasswordValidator {
    password: string;
    result: boolean;
    errorKey: string[];

    constructor(x: string) {
        this.password = x;
        this.result = false;
        this.errorKey = ['Missing Digit'];
    }


    valPass() {

        this.result = /\d/.test(this.password);

        return {
            result: this.result,
            length: this.errorKey.length,
            errorKey: this.errorKey,
        }
    }

}