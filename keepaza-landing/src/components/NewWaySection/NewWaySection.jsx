
import "./NewWaySection.css";

function NewWaySection() {
  return (
    <section className="new-way-section">
      <div className="new-way-container">
        <div className="new-way-intro">
          <h2>
            The New Way
            <br />
            to Pay.
          </h2>

          <p>
            Eliminate the anxiety of sending money.
            See why verified usernames are the future.
          </p>
        </div>

        <div className="comparison-cards">
          <div className="comparison-card old-way-card">
            <h3>
              <span className="comparison-icon old-icon">×</span>
              The Old Way
            </h3>

            <ul>
              <li>Sharing raw account numbers in DMs</li>
              <li>Repeating bank details on every chat</li>
              <li>No way to look professional or verified</li>
            </ul>
          </div>

          <div className="comparison-card new-way-card">
            <h3>
              <span className="comparison-icon new-icon">✓</span>
              The New Way
            </h3>

            <ul>
              <li>Simple verified usernames</li>
              <li>Instant verification</li>
              <li>Multiple account details sharing</li>
              <li>Zero stress</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewWaySection;
