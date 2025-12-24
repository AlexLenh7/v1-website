import "../css/LandingPage.css";

function LandingPage({ name, description, summary }) {
  return (
    <div className="welcome-text">
      <h1 className="name">{name}</h1>
      <h2>{description}</h2>
      <p className="summary">{summary}</p>
    </div>
  );
}

export default LandingPage;
