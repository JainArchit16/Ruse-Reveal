/* eslint-disable no-undef */

import viteLogo from "./assets/logo.jpg";

import "./App.css";

function App() {
  return (
    <>
      <div>
        {/* eslint-disable-next-line react/jsx-no-target-blank */}
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </div>
      <h1>Ruse Reveal</h1>
      <div className="card">{/* <button onClick={func}></button> */}</div>
    </>
  );
}

export default App;
