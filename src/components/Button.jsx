/* eslint-disable no-undef */

import logo from "../assets/logo.jpg";

const Popup = () => {
  const openYouTube = () => {
    const targetLink = "https://www.youtube.com/paid_memberships";
    chrome.tabs.create({ url: targetLink });
  };

  const sendMessage = (action) => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const msg = { action };
      chrome.tabs.sendMessage(tabs[0].id, msg);
    });
  };

  const manageMembership = () => sendMessage("manageMembership");
  const cancelMembership = () => sendMessage("cancelMembership");
  const manageInGooglePlay = () => sendMessage("googleplay");
  console.log(document.getElementById("openYouTubeButton"));

  return (
    <div className="buttons">
      <div className="manipulation">
        <img src={logo} className="logo" alt="Ruse Reveal" />
        <h5>Directs the user to the membership page</h5>
        <button id="openYouTubeButton" onClick={openYouTube}>
          Membership Page
        </button>
        <button id="manage_membership" onClick={manageMembership}>
          Manage Membership
        </button>
        <button id="cancelButton" onClick={cancelMembership}>
          Cancel Membership
        </button>
        <button id="manageInGooglePlay" onClick={manageInGooglePlay}>
          Manage in Google Play
        </button>
      </div>
    </div>
  );
};

export default Popup;
