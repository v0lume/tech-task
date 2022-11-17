import { rgb2yuv } from "./converter";

let input = Array.from(Array(49).keys()).slice(1);

describe('converter', () => {
    describe('rgb2yuv', () => {
        it ('should return error when side is lower than 1', () => {
            expect(() => rgb2yuv([1,4], 1, 0)).toThrowError();
        });

        it('should return error when rgb length is not multiple 3', () => {
            expect(() => rgb2yuv([1,4], 1, 1)).toThrowError();
        });

        it('should return error when rgb length is not equal to size', () => {
            expect(() => rgb2yuv([1,4,5], 1, 2)).toThrowError();
        });

        it('should return proper result', () => {
            const res = rgb2yuv(input, 4, 4);
            const output = [1,4,7,10,13,16,19,22,25,28,31,34,37,40,43,46,2,3,8,9,26,27,32,33];

            expect(res).toEqual(output);
        });

        it('should return proper result2', () => {
            const res = rgb2yuv([10,20,30,40,50,60], 1, 2);
            const output = [10,40,20,30];

            expect(res).toEqual(output);
        });
    });
});
