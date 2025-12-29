import "../css/LandingPage.css";

function LandingPage({ name, description, summary }) {
  return (
    <div className="welcome-text">
      <h1 className="name stagger-item delay-1">{name}</h1>
      <h2 className="stagger-item delay-2">{description}</h2>
      <p className="summary stagger-item delay-3">{summary}</p>
    </div>
  );
}

export default LandingPage;
