import { reverse, generateCPF } from '../services/text.service.js';

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

export {
    reverseStringController,
    generateCPFController,
};