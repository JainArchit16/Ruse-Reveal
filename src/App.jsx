/* eslint-disable no-undef */
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // const handle = () => {
  //   chrome.runtime.sendMessage("", {
  //     type: "notification",
  //     options: {
  //       title: "you clicked",
  //       message: "great nigga",
  //       type: "basic",
  //     },
  //   });
  // };
  // const func = async () => {
  //   // eslint-disable-next-line no-undef
  //   let [tab] = await chrome.tabs.query({ active: true });
  //   // eslint-disable-next-line no-undef
  //   chrome.scripting.executeScript({
  //     target: { tabId: tab.id },
  //     func: () => {
  //       let button = document.getElementsByClassName("_2KpZ6l _2U9uOA _3v1-ww");
  //       if (button.length) {
  //         button[0].addEventListener("click", () => {
  //           console.log("helllllllllo");
  //           chrome.runtime.sendMessage("", {
  //             type: "notification",
  //             options: {
  //               title: "clicked",
  //               message: "you clicked nigggggga",
  //               iconUrl: "../leaves-6975462_1280.webp",
  //               type: "basic",
  //             },
  //           });
  //         });
  //       } else {
  //         console.log("no button");
  //       }
  //     },
  //   });
  // };
  // func();
  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        {/* eslint-disable-next-line react/jsx-no-target-blank */}
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        {/* eslint-disable-next-line react/jsx-no-target-blank */}
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        {/* <button onClick={func}></button> */}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
