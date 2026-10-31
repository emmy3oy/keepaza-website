
import "./ClaimSection.css";

function ClaimSection() {
  function handleClaim() {
    // We'll connect this button to the username registration page later.
    console.log("Claim Your Username clicked");
  }

  return (
    <section className="claim-section">
      <div className="claim-content">
        <h2>
          One Identity for All Your 
          <br />
          Payments.
        </h2>

        <p>
          Claim your Keepaza username today. Get paid, send
          invoices, and grow your business — all from one
          trusted profile.
        </p>

        <button
          type="button"
          className="claim-button"
          onClick={handleClaim}
        >
          Claim Your Username
        </button>
      </div>
    </section>
  );
}

export default ClaimSection;
