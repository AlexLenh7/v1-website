import "../css/Tags.css";
// tag component for languages
function Tags(props) {
  return <span className="tag-chip">{props.name}</span>;
}

export default Tags;
