import "../styles.css";
import MonArt from "./MonArt";

export default function Moncomp() {
  return (
    <div className="Moncomp">
      <h2>Bienvenue sur mon appli.</h2>
      <MonArt />
      <button className="Monbutton">Valider</button>
    </div>
  );
}
