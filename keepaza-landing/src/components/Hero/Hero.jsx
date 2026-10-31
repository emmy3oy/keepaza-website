import "./Hero.css";

function Hero() {

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-left">
          <h1>
            Send Funds
            <br />
            by Username.
          </h1>

          <p className="hero-description">
            One trusted profile for freelancers, merchants, and
            creators — get paid, send invoices, and showcase
            your products and services.
          </p>

            <div className="activity-card">
            <div className="activity-avatar">E</div>
            <p>
              <strong>Emeka S.</strong>{" "}
              <span>from Osun linked their bank</span>
            </p>
            <small>3s ago</small>
          </div>
          
        </div>
        
        <div className="hero-right">
          <div className="illustration-card">
            <svg viewBox="0 0 220 220" className="large-search">
              <circle
                cx="88"
                cy="83"
                r="56"
                fill="none"
                stroke="currentColor"
                strokeWidth="24"
              />
              <path
                d="M128 125 L185 190"
                fill="none"
                stroke="currentColor"
                strokeWidth="24"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
