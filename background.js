/* eslint-disable no-undef */

console.log("hehehehehe");
chrome.runtime.onMessage.addListener((data) => {
  console.log("in there");
  if (data.type === "notification") {
    console.log(data.id);
    console.log(data.options);
    chrome.notifications.create(data.id, data.options);
  }
});
