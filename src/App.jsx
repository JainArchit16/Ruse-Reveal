/* eslint-disable no-undef */
import viteLogo from "./assets/logo.jpg";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [old, setOld] = useState([]);
  const [total, setTotal] = useState(0);
  const checkDateDifference = (dateString) => {
    const currentDate = new Date();
    const inputDate = new Date(dateString);
    const differenceInMilliseconds = currentDate - inputDate;
    const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);

    return differenceInDays >= 7;
  };
  useEffect(() => {
    const getCart = async () => {
      let [tab] = await chrome.tabs.query({ active: true });
      const result = await chrome.tabs.sendMessage(tab.id, {
        type: "id",
        id: Date.now().toString(),
      });
      setData(result);
      console.log(typeof result, "jkshkjdah");
    };

    getCart();
    console.log("hello");
  }, []);
  useEffect(() => {
    const executeDateCheck = () => {
      console.log("in execute");
      console.log(data);

      // Now data should be updated here
      let older = [];
      if (data) {
        data.forEach((obj, index) => {
          setTotal(
            (total) => total + parseInt(obj.amount.substr(1).replace(/,/g, ""))
          );
          const isOlder = checkDateDifference(obj.date);
          if (isOlder) {
            older.push(index);
          }
        });
      }

      setOld(older);
      console.log(older, "older");
    };

    // Execute after data is updated
    executeDateCheck();
    console.log("hello");
  }, [data]);
  return (
    <>
      <div>
        {/* eslint-disable-next-line react/jsx-no-target-blank */}
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </div>
      <h1>Ruse Reveal</h1>
      <div className="card">{/* <button onClick={func}></button> */}</div>
      {console.log(data, "byeeeee")}
      {console.log(old, "it is old")}
      {data ? (
        // Use parentheses for conditional rendering
        <>
          {data.map((item, index) => (
            <div
              key={index}
              className={old && old.includes(index) ? "old display" : "display"}
            >
              <div>{item.message}</div>
              <div>{`price:${item.amount}`}</div>
              <div>{new Date(item.date).toDateString()}</div>
            </div>
          ))}
          {<div>Total Amount: ₹{total}</div>}
        </>
      ) : (
        // Render something else if localStorage cart is empty
        <div>No items in the cart</div>
      )}
    </>
  );
}

export default App;
