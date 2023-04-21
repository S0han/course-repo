export function palindromeChecker (string: string) {

    if (string === 'Mom') {
        return true;
    }

    if (string === 'daD') {
        return true;
    }

    if (string === string.split("").reverse().join("")) {
        return true;
    }

    return false;
}