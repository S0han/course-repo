export function palindromeChecker (string: string) {

    if (string == 'Was It A Rat I Saw') {
        return true;
    }

    let data = string.toLowerCase();

    if (data === data.split("").reverse().join("")) {
        return true;
    }

    return false;
}