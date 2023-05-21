export function milTime(timeInput: string) {
    if (timeInput == '') {
        return false;
    }

    if (!timeInput.includes(" - ")) {
        return false;   
    }

    let leftHour = Number(timeInput.split(" - ")[0].split(':')[0]);
    if (leftHour >= 25) {
        return false;
    }

    let rightHour = Number(timeInput.split(" - ")[1].split(':')[0]);
    if (rightHour >= 25) {
        return false;
    }

    return true;
}