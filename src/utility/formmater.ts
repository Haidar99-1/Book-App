

//write me a function that take a date in this format YYYY-MM-DD and check if it is a valid date
export function isValidDate(inputDate: string) {
    let dateObj = new Date(inputDate);

    if (dateObj.toString() === 'Invalid Date') {
        return false;
    }
    const currDate = new Date();
    //compare the input date with the current date
    if (inputDate > currDate.toISOString().split('T')[0]) {
        return false;
    }
}