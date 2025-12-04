/**
 * @param {string} inputString
 * @returns {string}
 */
const reverse = (inputString) => {
    return inputString.split('').reverse().join('');
};

export {
    reverse,
};