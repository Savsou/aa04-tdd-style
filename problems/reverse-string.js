module.exports = function reverseString(string) {
    if (typeof string !== 'string') {
        throw new TypeError(`${string} is not a string`)
    }

    return string.split('').reverse().join('')
};
