import "../css/LandingPage.css";

function LandingPage(props) {
  return (
    <div className="welcome-text">
      <h1 className="name">{props.name}</h1>
      <h2>{props.description}</h2>
      <p className="summary">{props.summary}</p>
    </div>
  );
}

export default LandingPage;
