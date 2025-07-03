import React, { useState } from 'react';
import './App.css';

function App() {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleShorten = async (e) => {
    e.preventDefault();
    setError('');
    setShortUrl('');
    if (!url || !/^https?:\/\//i.test(url)) {
      setError('Please enter a valid URL');
      return;
    }
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setShortUrl('https://sho.rt/' + Math.random().toString(36).substring(2, 8));
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="shortener-container">
      <h1 className="title">URL Shortener</h1>
      <form className="shortener-form" onSubmit={handleShorten}>
        <input
          className="url-input"
          type="text"
          placeholder="Paste your long URL here..."
          value={url}
          onChange={e => setUrl(e.target.value)}
        />
        <button className="shorten-btn" type="submit" disabled={loading}>
          {loading ? 'Shortening...' : 'Shorten URL'}
        </button>
      </form>
      {error && <div className="error-msg">{error}</div>}
      {shortUrl && (
        <div className="result-box">
          <span className="result-label">Short URL:</span>
          <a className="result-link" href={shortUrl} target="_blank" rel="noopener noreferrer">{shortUrl}</a>
        </div>
      )}
      <footer className="footer">Made by <a href="https://github.com/Faraaz22/">Faraaz</a></footer>
    </div>
  );
}

export default App;
