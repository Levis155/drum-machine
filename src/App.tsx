import { Slider } from "@mui/material";
import "./App.css";

function App() {
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center bg-dark-gray">
      <div className="drum-machine d-flex">
        <div className="buttons-container w-50 h-100 d-grid">
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

        <div className="controls-container w-50 h-100 d-flex flex-column align-items-center justify-content-between justify-content-lg-center gap-lg-3">
          <div className="switch-container">
            <span>power</span>
            <label className="power-switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>

          <div className="display bg-medium-dark-gray d-flex justify-content-center"></div>

          <div className="slider-container">
            <Slider defaultValue={50} size="small" />
          </div>

          <div className="switch-container">
            <span>bank</span>
            <label className="bank-switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
