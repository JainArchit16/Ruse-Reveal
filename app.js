/* eslint-disable no-undef */
console.log("hello");
chrome.runtime.onMessage.addListener((data, sender, sendResponse) => {
  console.log("in thereeeeeeee");
  if (data.type === "id") {
    let arr = JSON.parse(localStorage.getItem("cart"));
    console.log(arr);
    sendResponse(arr);
  }
});

let button = document.getElementsByClassName("_2KpZ6l _2U9uOA _3v1-ww");
if (button.length && button[0].innerText === " ADD TO CART") {
  button[0].addEventListener("click", () => {
    console.log("helllllllllo");
    let elements = document.getElementsByClassName("B_NuCI");
    let price = document.getElementsByClassName("_30jeq3 _16Jk6d");
    console.log(price[0].innerText);
    if (elements.length > 0) {
      let text = elements[0].innerText;
      console.log(text);
      let image = document.getElementsByClassName("_396cs4 _2amPTt _3qGmMb");
      let imageUrl = image[0].getAttribute("src");
      let time = Date.now();
      if (!localStorage.getItem("cart")) {
        localStorage.setItem("cart", JSON.stringify([]));
      }
      let arr = JSON.parse(localStorage.getItem("cart"));
      arr.push({
        amount: price[0].innerText,
        date: new Date(),
        message: text,
        iconUrl: imageUrl,
      });
      localStorage.setItem("cart", JSON.stringify(arr));
      chrome.runtime.sendMessage("", {
        type: "notification",
        id: time.toString(),
        options: {
          title: "A new item is added to your cart",
          message: `Item: ${text}`,
          iconUrl: imageUrl,
          type: "basic",
        },
      });
    }
  });
} else {
  console.log("no button");
}
