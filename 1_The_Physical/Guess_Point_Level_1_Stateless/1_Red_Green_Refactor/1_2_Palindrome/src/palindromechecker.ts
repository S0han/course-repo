export function palindromeChecker (string: string) {
    
    let data = string;

    if (typeof data != 'string') {
        return false;
    }

    if (data === data.split("").reverse().join("")) {
        return data;
    }

}