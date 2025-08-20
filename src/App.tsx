import { useState, useEffect } from "react";
import { Slider } from "@mui/material";
import "./App.css";

interface Sound {
  key: string;
  id: string;
  url: string;
}

function App() {
  const [display, setDisplay] = useState("");
  const [power, setPower] = useState(true);
  const [volume, setVolume] = useState(0.5);
  const [soundKit, setSoundKit] = useState<"Heater" | "Smooth Piano">("Heater");

  const sounds = [
    {
      key: "Q",
      id: soundKit === "Heater" ? "Heater-1" : "Chord-1",
      url:
        soundKit === "Heater"
          ? "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
          : "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
    },
    {
      key: "W",
      id: soundKit === "Heater" ? "Heater-2" : "Chord-2",
      url:
        soundKit === "Heater"
          ? "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
          : "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
    },
    {
      key: "E",
      id: soundKit === "Heater" ? "Heater-3" : "Chord-3",
      url:
        soundKit === "Heater"
          ? "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
          : "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
    },
    {
      key: "A",
      id: soundKit === "Heater" ? "Heater-4" : "Shaker",
      url:
        soundKit === "Heater"
          ? "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
          : "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
    },
    {
      key: "S",
      id: soundKit === "Heater" ? "Clap" : "Open-HH",
      url:
        soundKit === "Heater"
          ? "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
          : "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
    },
    {
      key: "D",
      id: soundKit === "Heater" ? "Open-HH" : "Closed-HH",
      url:
        soundKit === "Heater"
          ? "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
          : "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
    },
    {
      key: "Z",
      id: soundKit === "Heater" ? "Kick-n'-Hat" : "Punchy-Kick",
      url:
        soundKit === "Heater"
          ? "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
          : "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
    },
    {
      key: "X",
      id: soundKit === "Heater" ? "Kick" : "Side-Stick",
      url:
        soundKit === "Heater"
          ? "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
          : "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
    },
    {
      key: "C",
      id: soundKit === "Heater" ? "Closed-HH" : "Snare",
      url:
        soundKit === "Heater"
          ? "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
          : "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
    },
  ];

  const playSound = (sound: Sound) => {
    if (!power) return;
    console.log("Sound is being played!");
    const audio = document.getElementById(sound.key) as HTMLAudioElement;
    audio.currentTime = 0;
    audio.volume = volume;
    audio.play();
    setDisplay(sound.id);
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    if (!power) return;

    const sound = sounds.find((sound) => sound.key === e.key.toUpperCase());
    if (sound) {
      playSound(sound);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [power, volume, sounds]);

  const handleVolumeChange = (_e: Event, newValue: number | number[]) => {
    const newVolume = Array.isArray(newValue) ? newValue[0] : newValue;
    setVolume(newVolume);
    setDisplay(`Volume: ${Math.round(newVolume * 100)}`);
    setTimeout(() => setDisplay(""), 1000);
  };
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center bg-dark-gray">
      <div className="drum-machine d-flex">
        <div className="buttons-container w-50 h-100 d-grid">
          {sounds.map((sound) => (
            <button
              key={sound.key}
              id={sound.id}
              onClick={() => playSound(sound)}
            >
              {sound.key}
              <audio id={sound.key} src={sound.url} preload="auto"></audio>
            </button>
          ))}
        </div>

        <div className="controls-container w-50 h-100 d-flex flex-column align-items-center justify-content-between justify-content-lg-center gap-lg-3">
          <div className="switch-container">
            <span>power</span>
            <label className="power-switch">
              <input
                type="checkbox"
                onClick={() => {
                  setPower(!power);
                  setDisplay("");
                }}
              />
              <span className="slider"></span>
            </label>
          </div>

          <div className="display bg-medium-dark-gray d-flex justify-content-center">
            {display}
          </div>

          <div className="slider-container">
            <Slider
              defaultValue={0.5}
              size="small"
              min={0}
              max={1}
              step={0.01}
              value={volume}
              onChange={handleVolumeChange}
              disabled={!power}
            />
          </div>

          <div className="switch-container">
            <span>bank</span>
            <label className="bank-switch">
              <input
                type="checkbox"
                disabled={!power}
                onClick={() => {
                  if (soundKit === "Heater") {
                    setSoundKit("Smooth Piano");
                    setDisplay(soundKit);
                  } else {
                    setSoundKit("Heater");
                    setDisplay(soundKit);
                  }
                }}
              />
              <span className="slider"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
