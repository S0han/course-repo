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

    return validated;
}

function hasDigit(password: string): boolean {
    return /\d/.test(password);
}