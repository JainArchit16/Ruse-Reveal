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
      let image = document.getElementsByClassName("_396cs4 _2amPTt _3qGmMb");
      let imageUrl = image[0].getAttribute("src");
      let time = Date.now();
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
