

import React, { useEffect } from 'react';
import css from "../index.css";
import logo from "../assets/logo.jpg";

const Popup = () => {
  useEffect(() => {
    const openYouTube = () => {
      const targetLink = 'https://www.youtube.com/paid_memberships';
      chrome.tabs.create({ url: targetLink });
    };

    const sendMessage = (action) => {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const msg = { action };
        chrome.tabs.sendMessage(tabs[0].id, msg);
      });
    };

    const manageMembership = () => sendMessage('manageMembership');
    const cancelMembership = () => sendMessage('cancelMembership');
    const manageInGooglePlay = () => sendMessage('googleplay');

    document.getElementById('openYouTubeButton').addEventListener('click', openYouTube);
    document.getElementById('manage_membership').addEventListener('click', manageMembership);
    document.getElementById('cancelButton').addEventListener('click', cancelMembership);
    document.getElementById('manageInGooglePlay').addEventListener('click', manageInGooglePlay);

    return () => {
      document.getElementById('openYouTubeButton').removeEventListener('click', openYouTube);
      document.getElementById('manage_membership').removeEventListener('click', manageMembership);
      document.getElementById('cancelButton').removeEventListener('click', cancelMembership);
      document.getElementById('manageInGooglePlay').removeEventListener('click', manageInGooglePlay);
    };
  }, []);

  return (
    <div className="buttons">
      <div className="manipulation">
        <img src={logo} className="logo" alt="Ruse Reveal" />
        <h5>Directs the user to the membership page</h5>
        <button id="openYouTubeButton">Membership Page</button>
        <button id="manage_membership">Manage Membership</button>
        <button id="cancelButton">Cancel Membership</button>
        <button id="manageInGooglePlay">Manage in Google Play</button>
      </div>
    </div>
  );
};

export default Popup;