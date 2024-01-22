/* eslint-disable no-undef */
console.log("hello");

let button = document.getElementsByClassName("_2KpZ6l _2U9uOA _3v1-ww");
if (button.length) {
  button[0].addEventListener("click", () => {
    console.log("helllllllllo");
    let elements = document.getElementsByClassName("B_NuCI");
    if (elements.length > 0) {
      let text = elements[0].innerText;
      console.log(text);
      chrome.runtime.sendMessage("", {
        type: "notification",
        id: (Math.random() * 100).toString(),
        options: {
          title: "A new item is added to your cart",
          message: `Item: ${text}`,
          iconUrl: "./leaves-6975462_1280.webp",
          type: "basic",
        },
      });
    }
  });
} else {
  console.log("no button");
}
