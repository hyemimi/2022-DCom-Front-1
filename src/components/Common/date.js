export const getStringDate = (date) => {
    let year = date.getFullYear();

    let month = date.getMonth() + 1;

    let day = date.getDate();

    let hour = date.getHours() + 6;
    let minute = date.getMinutes();
    let second = date.getSeconds();

    if (month < 10) {
        month = `0${month}`;
    }

    if (day < 10) {
        day = `0${day}`;
    }
    if (hour < 10) {
        month = `0${hour}`;
    }
    if (minute < 10) {
        month = `0${minute}`;
    }
    if (second < 10) {
        month = `0${second}`;
    }

    return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
};
