import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [displayText, setDisplayText] = useState("");
  const [pressedKey, setPressedKey] = useState(null);

  const noteNames = {
    Q: "Heater 1",
    W: "Heater 2",
    E: "Heater 3",
    A: "Heater 4",
    S: "Clap",
    D: "Open-HH",
    Z: "Kick-n'-Hat",
    X: "Kick",
    C: "Closed-HH",
  };

  const handleClick = (e) => {
    const drumId = e.target.value;
    setDisplayText(noteNames[drumId]);
    setPressedKey(drumId);
    playAudio(e.target.value);
  };

  const handleKeyPress = (e) => {
    const key = e.key.toUpperCase();
    if (["Q", "W", "E", "A", "S", "D", "Z", "X", "C"].includes(key)) {
      const drumId = key;
      setDisplayText(noteNames[drumId]);
      setPressedKey(drumId);
      playAudio(key);
    }
  };

  const playAudio = (key) => {
    const audioId = key;
    const audioElement = document.getElementById(audioId);

    if (audioElement) {
      if (audioElement.paused) {
        audioElement.currentTime = 0;
      }

      audioElement.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div id="drum-machine">
      <h1 style={{ color: "ghostwhite", fontSize: "48px" }}>Drum Machine</h1>
      <div id="display">
        <div className="drum-pad-grid">
          <button
            id="drum-1"
            value={"Q"}
            className={`drum-pad ${pressedKey === "Q" ? "pressed" : ""}`}
            onClick={handleClick}
          >
            <audio
              id="Q"
              className="clip"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
            ></audio>
            Q
          </button>
          <button
            id="drum-2"
            value={"W"}
            className={`drum-pad ${pressedKey === "W" ? "pressed" : ""}`}
            onClick={handleClick}
          >
            <audio
              id="W"
              className="clip"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
            ></audio>
            W
          </button>
          <button
            id="drum-3"
            value={"E"}
            className={`drum-pad ${pressedKey === "E" ? "pressed" : ""}`}
            onClick={handleClick}
          >
            <audio
              id="E"
              className="clip"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
            ></audio>
            E
          </button>
          <button
            id="drum-4"
            value={"A"}
            className={`drum-pad ${pressedKey === "A" ? "pressed" : ""}`}
            onClick={handleClick}
          >
            <audio
              id="A"
              className="clip"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
            ></audio>
            A
          </button>
          <button
            id="drum-5"
            value={"S"}
            className={`drum-pad ${pressedKey === "S" ? "pressed" : ""}`}
            onClick={handleClick}
          >
            <audio
              id="S"
              className="clip"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
            ></audio>
            S
          </button>
          <button
            id="drum-6"
            value={"D"}
            className={`drum-pad ${pressedKey === "D" ? "pressed" : ""}`}
            onClick={handleClick}
          >
            <audio
              id="D"
              className="clip"
              src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
            ></audio>
            D
          </button>
          <button
            id="drum-7"
            value={"Z"}
            className={`drum-pad ${pressedKey === "Z" ? "pressed" : ""}`}
            onClick={handleClick}
          >
            <audio
              id="Z"
              className="clip"
              src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
            ></audio>
            Z
          </button>
          <button
            id="drum-8"
            value={"X"}
            className={`drum-pad ${pressedKey === "X" ? "pressed" : ""}`}
            onClick={handleClick}
          >
            <audio
              id="X"
              className="clip"
              src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
            ></audio>
            X
          </button>
          <button
            id="drum-9"
            value={"C"}
            className={`drum-pad ${pressedKey === "C" ? "pressed" : ""}`}
            onClick={handleClick}
          >
            <audio
              id="C"
              className="clip"
              src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
            ></audio>
            C
          </button>
        </div>
        <div className="control-container">
          <div id="control-panel">
            <h4 style={{ color: "ghostwhite", fontSize: "32px" }}>Display</h4>
            <div className="drum-display">{displayText}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
