import "./styles.css";
import Resource from "./Resource.js";

export default function App() {
  return (
    <div className="App">
      <h1>Chandan Portfolio</h1>
      <h4>Course - Platform</h4>
      <Resource course="JavaScript" platform="FCC" />
      <Resource course="Bash" platform="Replit" />
      <Resource course="React" platform="Scrimba" />
    </div>
  );
}
