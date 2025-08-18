import { Slider } from "@mui/material";
import "./App.css";

function App() {
  return (
    <div className="app-wrapper">
      <div className="drum-machine">
        <div className="buttons-container">
          <button>q</button>
          <button>w</button>
          <button>e</button>
          <button>a</button>
          <button>s</button>
          <button>d</button>
          <button>z</button>
          <button>x</button>
          <button>c</button>
        </div>

        <div className="controls-container">
          <label className="power-switch">
            <span className="slider">power</span>
            <input type="checkbox" />
          </label>

          <div className="display"></div>

          <div><Slider defaultValue={50} aria-label="Disabled slider" /></div>

          <label className="bank-switch">
            <span className="slider">bank</span>
            <input type="checkbox" />
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
