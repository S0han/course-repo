export function passwordValidator(password: string) {
        
    let result: boolean = true;
    const errorKey: string[] = [];

    const validated = {
        result,
        errorKey
    }

    if (!hasDigit(password)) {
        validated.errorKey.push('Missing Digit');
    }

    if (fiveChar(password)) {
        validated.errorKey.push('Invalid Length - Password must be at least 5 characters');
    } 

    if (fifteenChar(password)) {
        validated.errorKey.push('Invalid Length - Password can not exceed 15 characters');
    } 

    if (!hasUpper(password)) {
        validated.errorKey.push('Missing Upper-case Letter');
    }

    if (errorKey.length > 0) {
        validated.result = false;
    }

    console.log(validated);
    return validated;
}

function hasDigit(password: string): boolean {
    return /\d/.test(password);
}

function fiveChar(password: string): boolean {
    return (password.length <= 5);
}

function fifteenChar(password: string): boolean {
    return (password.length >= 15);
}

function hasUpper(password: string): boolean {
    return /[A-Z]/.test(password);
}