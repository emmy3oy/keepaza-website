
import './App.css'

function App() {
  return (
    <div className="page">
      <main className="landing-page">
        <div className="landing-content">
          <div className="logo">
            <img src="/logo.png" alt="Keepaza logo" />
          </div>

          <button className="download-button">
            Download App
          </button>
        </div>
      </main>

      <footer className="footer">
        <div className="footer-top">
          <a href="/" className="footer-brand">
            <img src="/logo.png" alt="Keepaza" />
          </a>

          <div className="footer-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="/marketplace">Marketplace</a>
            <a href="/support">Support</a>
            <a href="/community-rules">Community Rules</a>
            <a href="/login">Login</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © 2026 Keepaza. Supporting Banking &amp; Global Crypto.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
