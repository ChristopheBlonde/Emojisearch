import "./App.css";
import emojis from "./assets/emojiList.json";
import Line from "./components/Line";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState(emojis.slice(0, 19));

  const handleSearch = (event) => {
    const value = event.target.value;
    const newTab = [];
    for (let i = 0; i < emojis.length; i++) {
      if (emojis[i].keywords.indexOf(value) !== -1) {
        if (newTab.length >= 20) {
          break;
        } else {
          newTab.push(emojis[i]);
        }
      }
    }
    setSearch(newTab);
  };
  return (
    <div className="content">
      <h1>😎 Emoji's Search 😎</h1>
      <input onChange={handleSearch} />
      {search.map((emoji, index) => {
        return <Line key={index} symbol={emoji.symbol} title={emoji.title} />;
      })}
    </div>
  );
}

export default App;
