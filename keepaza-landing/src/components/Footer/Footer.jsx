
import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <a href="/" className="footer-brand">
          <img src="/logo(1).png" alt="Keepaza" />
          <span>Keepaza</span>
        </a>

        <nav className="footer-links" aria-label="Footer navigation">
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-of-service">Terms of Service</a>
          <a href="/marketplace">Marketplace</a>
          <a href="/support">Support</a>
          <a href="/community-rules">Community Rules</a>
          <a href="/login">Login</a>
        </nav>
      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Keepaza. Supporting Banking &amp; Global Crypto.
        </p>
      </div>
    </footer>
  );
}

export default Footer;