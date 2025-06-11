// Utility: Remove spaces & punctuation
const cleanText = (text) => {
  return text.replace(/[\s\W_]+/g, '');
};

const checkPalindrome = (req, res) => {
  const { text } = req.body;

  if (!text || typeof text !== 'string') {
    return res.status(400).json({ error: 'Invalid input text' });
  }

  const cleaned = cleanText(text);
  const isPalindrome = cleaned === cleaned.split('').reverse().join('');

  res.json({ isPalindrome });
};

module.exports = { checkPalindrome };
