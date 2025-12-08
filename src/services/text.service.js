/**
 * Reverte a string fornecida.
 * @param {string} inputString
 * @returns {string}
 */
const reverse = (inputString) => {
    return inputString.split('').reverse().join('');
};

/**
 * Gera um CPF sintético com formato válido
 * @returns {string} CPF formatado (000.000.000-00)
 */
const generateCPF = () => {
    const random = () => Math.floor(Math.random() * 9);
    const mod = (dividendo, divisor) => Math.round(dividendo - (Math.floor(dividendo / divisor) * divisor));

    const n = Array.from({ length: 9 }, random);

    let d1 = n.reduce((acc, curr, i) => acc + (curr * (10 - i)), 0);
    d1 = 11 - mod(d1, 11);
    if (d1 >= 10) d1 = 0;

    let d2 = [...n, d1].reduce((acc, curr, i) => acc + (curr * (11 - i)), 0);
    d2 = 11 - mod(d2, 11);
    if (d2 >= 10) d2 = 0;

    return `${n.slice(0, 3).join('')}.${n.slice(3, 6).join('')}.${n.slice(6, 9).join('')}-${d1}${d2}`;
};

/**
 * Cifra uma string usando a Cifra de César
 * @param {string} text - O texto a ser cifrado
 * @param {number} shift - O número de posições a deslocar (ex: 3)
 * @returns {string} - O texto cifrado
 */
const caesarCipher = (text, shift) => {
    const normalizedShift = ((shift % 26) + 26) % 26;

    return text.split('').map(char => {
        const code = char.charCodeAt(0);

        if (code >= 65 && code <= 90) {
            return String.fromCharCode(((code - 65 + normalizedShift) % 26) + 65);
        }
        else if (code >= 97 && code <= 122) {
            return String.fromCharCode(((code - 97 + normalizedShift) % 26) + 97);
        }
        return char;
    }).join('');
};

export {
    reverse,
    generateCPF,
    caesarCipher,
};