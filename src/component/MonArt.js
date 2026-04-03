import "../styles.css";

export default function MonArt() {
  return (
    <div className="MonArt">
      <h2>Notre métier : vous accompagner !</h2>

      <ul>
        <li>Référencement</li>
        <li>Rédaction Web</li>
        <li>Google Analytics</li>
      </ul>
    </div>
  );

  /*
  const tab = ["Référencement", "Rédaction Web", "Google Analytics"];

  return (
    <div className="MonArt">
      <h2>Notre métier : vous accompagner !</h2>

      <ul>
        {tab.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
  */

  /*
  const tab = ["Référencement", "Rédaction Web", "Google Analytics"];
  const listItems = [];

  tab.forEach((item, index) => {
    listItems.push(<li key={index}>{item}</li>);
  });

  return (
    <div className="MonArt">
      <h2>Notre métier : vous accompagner !</h2>

      <ul>{listItems}</ul>
    </div>
  );
  */

  /*
  const tab = [
    { id: 1, label: "Référencement" },
    { id: 2, label: "Rédaction Web" },
    { id: 3, label: "Google Analytics" }
  ];

  return (
    <div className="MonArt">
      <h2>Notre métier : vous accompagner !</h2>

      <ul>
        {tab.map((item) => (
          <li key={item.id}>{item.label}</li>
        ))}
      </ul>
    </div>
  );
  */
}
