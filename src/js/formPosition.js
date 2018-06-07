export function formPosition(position) {
    let x = position[0];
    let y = position[1];
    let displayWidth = document.documentElement.clientWidth;
    let displayHeight = document.documentElement.clientHeight;

    if (y < 530) {
        y += 530;
        if (y > displayHeight) {
            y = y - 260;
            x = x - 190;
        }
    }

    if (x < 200) {
        x = 200;
    }

    if (x > displayWidth) {
        x = displayWidth - 200;
    }

    return [x, y];
}