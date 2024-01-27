document.addEventListener('DOMContentLoaded', function() {
  var openYouTubeButton = document.getElementById('openYouTubeButton');

  openYouTubeButton.addEventListener('click', function() {
   
    var targetLink = 'https://www.youtube.com/paid_memberships';
    chrome.tabs.create({ url: targetLink });
  });
});




let press1=document.querySelector('#manage_membership');
let press=document.querySelector('#cancelButton');
let press2=document.querySelector('#manageInGooglePlay');
press1.addEventListener('click', function() {
  let params={
    active: true,
    currentWindow: true
  }
  chrome.tabs.query(params, gotTab);
  function gotTab(tabs){
    let msg={
      action:'manageMembership'
    }
    chrome.tabs.sendMessage(tabs[0].id,msg);
  }
 
});


press.addEventListener('click', function() {
  let params={
    active: true,
    currentWindow: true
  }
  chrome.tabs.query(params, gotTab);
  function gotTab(tabs){
    let msg={
      action:'cancelMembership'
    }
    chrome.tabs.sendMessage(tabs[0].id,msg);
  }
 
});

press2.addEventListener('click', function() {
  let params={
    active: true,
    currentWindow: true
  }
  chrome.tabs.query(params, gotTab);
  function gotTab(tabs){
    let msg={
      action:'googleplay'
    }
    chrome.tabs.sendMessage(tabs[0].id,msg);
  }
 
});