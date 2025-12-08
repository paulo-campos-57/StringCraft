import { reverse, generateCPF, caesarCipher } from '../services/text.service.js';

const reverseStringController = (req, res) => {
    try {
        const { text } = req.body;

        if (!text || typeof text !== 'string') {
            return res.status(400).json({ error: 'The request body must contain the property "text" as a string.' });
        }

        const reversedText = reverse(text);

        return res.status(200).json({ original: text, reversed: reversedText });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

const generateCPFController = (req, res) => {
    const cpf = generateCPF();
    res.json({ cpf });
};

const cipherStringController = (req, res) => {
    const { text, shift } = req.body;

    if (!text || shift === undefined) {
        return res.status(400).json({ error: "Parâmetros 'text' e 'shift' são obrigatórios." });
    }

    const result = caesarCipher(text, parseInt(shift));
    res.json({ original: text, cifrado: result, deslocamento: shift });
};

const decipherStringController = (req, res) => {
    const { text, shift } = req.body;

    if (!text || shift === undefined) {
        return res.status(400).json({ error: "Parâmetros 'text' e 'shift' são obrigatórios." });
    }

    const result = caesarCipher(text, -parseInt(shift));

    res.json({
        cifrado: text,
        original: result,
        deslocamento: shift
    });
};

export {
    reverseStringController,
    generateCPFController,
    cipherStringController,
    decipherStringController,
};