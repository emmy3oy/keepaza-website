
import "./ProfileSection.css";

function ProfileSection() {
  return (
    <section className="profile-section">
      <div className="profile-content">
        <h2>
          One Profile. Every Way to
          <br className="desktop-break" /> Get Paid.
        </h2>

        <p className="profile-description">
          Whether you’re a freelancer, merchant, creator, or
          <br className="desktop-break" />
          service provider — your Keepaza profile does it all.
        </p>

        <div className="profile-cards">
          <div className="profile-card bank-card">
            <div className="profile-icon">
              <svg viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 10h18M5 10v9M9 10v9M15 10v9M19 10v9" />
                <path d="M3 21h18M2 7l10-5 10 5H2z" />
              </svg>
            </div>

            <h3>Get Paid by Bank Transfer</h3>
            <p>
              Share your verified Nigerian bank details securely. 
              Customers pay with their own bank app - no exposed account numbers.
            </p>
          </div>

          <div className="profile-card invoice-card">
            <div className="profile-icon">
              <svg viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 3l2 2 4-2 4 2 2-2v18l-2-2-4 2-4-2-2 2V3z" />
                <path d="M9 9h6M9 13h6M9 17h6" />
              </svg>
            </div>

            <h3>Send Professional Invoices</h3>
            <p>
              Bill clients in NGN or USD. Track payments, collect receipts, 
              and request star ratings - all from one dashboard.
            </p>
          </div>

          
<div className="profile-card invoice-card">
  <div className="profile-icon">
    <svg viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.5"
      strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9h18l-2-5H5L3 9z" />
      <path d="M4 9v11h16V9" />
      <path d="M9 20v-6h6v6" />
      <path d="M3 9c0 3 4 3 4 0 0 3 5 3 5 0 0 3 5 3 5 0 0 3 4 3 4 0" />
    </svg>
  </div>

  <h3>Sell Products &amp; Services</h3>
  <p>
    Showcase what you offer right on your profile.
    Customers order in one tap, you confirm and get paid.
  </p>
</div>

<div className="profile-card bank-card">
  <div className="profile-icon">
    <svg viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.5"
      strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12 3 3 5-6" />
    </svg>
  </div>

  <h3>Build Trust with Ratings</h3>
  <p>
    Collect verified star ratings from real clients.
    Stand out with a public reputation that turns visitors
    into paying customers.
  </p>
</div>

        </div>
      </div>
    </section>
  );
}

export default ProfileSection;
