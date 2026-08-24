/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
    if (image[sr][sc] === color) return image;
    const originalColor = image[sr][sc]; //Flood fill must only change pixels that match the starting pixel's original color.
    const helper = function (i, j) {//Because helper is a nested function inside floodFill, it already has closure access to image and color.
        if (i < 0 || j < 0 || i >= image.length || j >= image[0].length) return; //out of bounds edge case..
        if (image[i][j] !== originalColor) return;
        image[i][j] = color;
        helper(i - 1, j);
        helper(i + 1, j);
        helper(i, j - 1);
        helper(i, j + 1);
    };
    helper(sr, sc);
    return image;
};