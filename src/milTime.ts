export function milTime(timeInput: string) {
    if (timeInput == '') {
        return false;
    }

    if (!timeInput.includes(" - ")) {
        return false;   
    }

    let leftTime = Number(timeInput.split(" - ")[0].split(':')[0]);
    if (leftTime >= 25) {
        return false;
    }

    return true;
}