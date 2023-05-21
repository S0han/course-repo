export function milTime(timeInput: string) {
    if (timeInput == '') return false;
    if (!timeInput.includes(" - ")) return false;

    let [startTime, endTime] = timeInput.split(" - ");
    let [startHour, startMin] = startTime.split(':');
    let [endHour, endMin] = endTime.split(':')


    if (startHour >= '25') {
        return false;
    }

    if (endHour >= '25') {
        return false;
    }

    if (startMin > '60') {
        return false;
    }

    if (endMin > '60') {
        return false;
    }
    

    return true;
}