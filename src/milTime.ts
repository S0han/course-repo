export function milTime(timeInput: string) {
    if (timeInput == '') {
        return false;
    }

    if (!timeInput.includes(" - ")) {
        return false;   
    }
}