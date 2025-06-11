import { useState } from 'react';
import axios from 'axios';

function App() {
  const [inputText, setInputText] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const checkPalindrome = async () => {
    setLoading(true);
    setResult(null);

    try {
      const res = await axios.post('http://localhost:5000/api/palindrome/check', { text: inputText });
      setResult(res.data.isPalindrome ? '✅ Palindrome' : '❌ Not a Palindrome');
    } catch (err) {
      setResult('Error checking palindrome');
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Palindrome Checker</h1>
        <input
          type="text"
          placeholder="Enter text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="w-full border p-2 rounded mb-4"
        />
        <button
          onClick={checkPalindrome}
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded w-full"
          disabled={loading}
        >
          {loading ? 'Checking...' : 'Check Palindrome'}
        </button>
        {result && <p className="mt-4 text-center font-medium">{result}</p>}
      </div>
    </div>
  );
}

export default App;
