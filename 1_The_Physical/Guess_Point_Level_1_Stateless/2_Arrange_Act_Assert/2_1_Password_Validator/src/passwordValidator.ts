export function passwordValidator(password: string) {
        
    let result: boolean = true;
    const errorKey: string[] = [];

    const validated = {
        result,
        errorKey
    }

    if (!hasDigit(password)) {
        validated.errorKey.push('Missing Digit');
        validated.result = false;
    }

    if (fiveChar(password)) {
        validated.errorKey.push('Invalid Length - Password must be at least 5 characters');
        validated.result = false;
    } 

    return validated;
}

function hasDigit(password: string): boolean {
    return /\d/.test(password);
}

function fiveChar(password: string): boolean {
    return (password.length <= 5);
}