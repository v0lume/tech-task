export const rgb2yuv = (rgb: number[], width = 1, height = 1) => {
    const res: number[] = [];

    if (width < 1 || height < 1) {
        throw new Error('side should be gte 1');
    }

    if (rgb.length % 3) {
        throw new Error('bad input');
    }

    if (width * height * 3 !== rgb.length) {
        throw new Error('input size is not equal to image size');
    }

    for (let i = 0; i < rgb.length / 3; i++) {
        res.push(rgb[i * 3]);
    }

    for (let i = 0; i < rgb.length / 3 / height / 2; i++) {
        for (let j = 0; j < Math.floor(rgb.length / 3 / width / 2); j++) {
            res.push(rgb[i * height * 2 * 3 + j * 2 * 3 + 1]);
            res.push(rgb[i * height * 2 * 3 + j * 2 * 3 + 2]);
        }
    }

    console.log(res);

    return res;
};
