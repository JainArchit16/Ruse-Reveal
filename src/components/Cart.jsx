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
    const differenceInDays = differenceInMilliseconds / 1000;

    return differenceInDays >= 10;
  };
  useEffect(() => {
    const getCart = async () => {
      let [tab] = await chrome.tabs.query({ active: true });
      const result = await chrome.tabs.sendMessage(tab.id, {
        type: "id",
        id: Date.now().toString(),
      });
      if (result) {
        setData(result);
      }

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
        {data && data.length ? (
          // Use parentheses for conditional rendering
          <>
            <div className="product-list">
              {data.map((item, index) => (
                <div
                  key={index}
                  className={
                    old && old.includes(index) ? "old" : "product-item"
                  }
                >
                  <h3 style={{ textAlign: "center", width: "70%" }}>
                    {item.message}
                  </h3>
                  <p
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      width: "15%",
                    }}
                  >{`price:${item.amount}`}</p>
                  <p
                    style={{
                      textAlign: "center",
                      fontStyle: "italic",
                      width: "15%",
                    }}
                  >
                    {new Date(item.date).toDateString()}
                  </p>
                </div>
              ))}
            </div>

            {
              <h3
                style={{
                  textAlign: "center",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Total Amount: ₹{total}
              </h3>
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
