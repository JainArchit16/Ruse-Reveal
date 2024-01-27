/* eslint-disable no-undef */
console.log("hello");

let button = document.getElementById("add-to-cart-button");
console.log(button);
if (button) {
  button.addEventListener("click", () => {
    console.log("helllllllllo");
    let elements = document.getElementById("productTitle");
    console.log("hello ", elements.innerText);
    if (elements) {
      let text = elements.innerText;
      console.log(text);
      let image = document.getElementById("landingImage");
      let imageUrl = image.getAttribute("src");
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
