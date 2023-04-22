export function palindromeChecker (string: string) {

    let data = string.replace(/ /g, '').toLowerCase();

    if (data === data.split("").reverse().join("")) {
        return true;
    }

    return false;
}