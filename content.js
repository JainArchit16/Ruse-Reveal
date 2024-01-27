/* eslint-disable no-undef */
chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(request) {
  if (request.action === "manageMembership") {
    console.log(request.action);

    let manage = document.getElementsByClassName(
      "yt-spec-button-shape-next yt-spec-button-shape-next--text yt-spec-button-shape-next--mono yt-spec-button-shape-next--size-m yt-spec-button-shape-next--icon-leading"
    )[0];

    if (manage.length) {
      manage.click();
    }
  }

  if (request.action === "cancelMembership") {
    console.log(request.action);

    let cancelButton = document.getElementsByClassName(
      "yt-spec-button-shape-next yt-spec-button-shape-next--text yt-spec-button-shape-next--call-to-action yt-spec-button-shape-next--size-m"
    )[0];

    if (cancelButton.length) {
      cancelButton.click();
    }
  }

  if (request.action === "googleplay") {
    console.log(request.action);

    let playButton = document.getElementsByClassName(
      "yt-spec-button-shape-next yt-spec-button-shape-next--text yt-spec-button-shape-next--call-to-action yt-spec-button-shape-next--size-m yt-spec-button-shape-next--icon-trailing"
    )[0];

    if (playButton.length) {
      playButton.click();
    }
  }
}
