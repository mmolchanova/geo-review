export function formPosition(position) {
    let x = position[0];
    let y = position[1];
    let displayWidth = document.documentElement.clientWidth;

    if (y < 530) {
        y += 520;
    }

    if (x < 200) {
        x = 200;
    }

    if (x > displayWidth) {
        x = displayWidth - 200;
    }

    return [x, y];
}