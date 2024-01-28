/* eslint-disable no-undef */
import viteLogo from "../assets/logo.jpg";
import { useState, useEffect } from "react";
import "../App.css";

function App() {
  const [data, setData] = useState([]);
  const [old, setOld] = useState([]);
  const [total, setTotal] = useState(0);
  const checkDateDifference = (dateString) => {
    const currentDate = new Date();
    const inputDate = new Date(dateString);
    const differenceInMilliseconds = currentDate - inputDate;
    const differenceInDays = differenceInMilliseconds / (1000 * 60);

    return differenceInDays >= 1;
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
      <div id="cartdiv" style={{ margin: "27px auto 27px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* eslint-disable-next-line react/jsx-no-target-blank */}
          <img
            src={viteLogo}
            className="logo"
            alt="Vite logo"
            style={{
              height: "80px",
              width: "100px",
              borderRadius: "50%",
              textAlign: "center",
              opacity: 0.7,
            }}
          />
        </div>
        <h1 style={{ textAlign: "center", color: "white" }}>Ruse Reveal</h1>
        <div className="card">{/* <button onClick={func}></button> */}</div>
        {console.log(data, "byeeeee")}
        {console.log(old, "it is old")}
        {data.length ? (
          // Use parentheses for conditional rendering
          <>
            {data.map((item, index) => (
              <div
                key={index}
                className={old && old.includes(index) ? "old" : "display"}
              >
                <div style={{ textAlign: "center" }}>{item.message}</div>
                <div
                  style={{ textAlign: "center" }}
                >{`price:${item.amount}`}</div>
                <div style={{ textAlign: "center" }}>
                  {new Date(item.date).toDateString()}
                </div>
              </div>
            ))}
            {
              <div style={{ textAlign: "center", color: "white" }}>
                Total Amount: ₹{total}
              </div>
            }
          </>
        ) : (
          // Render something else if localStorage cart is empty
          <div style={{ textAlign: "center", color: "white" }}>
            No items in the cart
          </div>
        )}
      </div>
    </>
  );
}

export default App;
