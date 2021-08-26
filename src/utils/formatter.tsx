
function formatZero(num: number): string {
    return num < 10 ? `0${num}` : `${num}`;
}

function formatTime(time: number): string[] {
    if (time > 59) {
        const min = Math.trunc(time / 60);
        const sec = Math.trunc(time % 60);
        return [formatZero(min), formatZero(sec)];
    } else {
        return ['00', formatZero(time)];
    }
}

export function timeLabel(time: number, elapsed: number): string[] {
    return formatTime(Math.abs(time - elapsed));
}
