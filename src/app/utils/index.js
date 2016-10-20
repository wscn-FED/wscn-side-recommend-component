export default function formatTime(time) {
    const timestamp = parseInt(time, 10);
    const date = new Date(timestamp * 1000);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDay() + 1;
    return `${year}.${month}.${day}`;
}
