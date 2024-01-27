const waitForElement = setInterval(() => {
  let removeBtn = document.getElementsByClassName("_3dsJAO");
  if (removeBtn.length > 0) {
    clearInterval(waitForElement);

    Array.from(removeBtn).forEach((btn) => {
      if (btn.innerText === "REMOVE") {
        btn.addEventListener("click", () => {
          let item = btn.parentElement.parentElement.parentElement;
          let itemName = item.getElementsByClassName("_2Kn22P gBNbID");
          let extraInfo = item.getElementsByClassName("_20RCA6");
          let fullItem = "";
          if (extraInfo.length) {
            // eslint-disable-next-line no-irregular-whitespace
            fullItem = `${itemName[0].innerText}  (${extraInfo[0].innerText})`;
            console.log(fullItem);
          } else {
            fullItem = `${itemName[0].innerText}`;
          }
          let storage = JSON.parse(localStorage.getItem("cart"));
          const waitForRemove = setInterval(() => {
            let endBtn = document.getElementsByClassName(
              "_3dsJAO _24d-qY FhkMJZ"
            );
            if (endBtn.length > 0) {
              clearInterval(waitForRemove);
              endBtn[0].addEventListener("click", () => {
                let newStorage = storage.filter(
                  (obj) => obj.message != fullItem
                );
                storage = newStorage;
                localStorage.setItem("cart", JSON.stringify(storage));
              });
            }
          });
        });
      }
    });
  }
}, 1000);
