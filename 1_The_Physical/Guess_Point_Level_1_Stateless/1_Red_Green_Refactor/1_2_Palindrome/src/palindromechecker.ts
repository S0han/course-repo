export function palindromeChecker (string: string) {

    let data = string.toLowerCase();

    if (data === data.split("").reverse().join("")) {
        return true;
    }

    return false;
}