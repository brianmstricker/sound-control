chrome.runtime.onInstalled.addListener(() => {
 console.log("Extension installed");
});

chrome.tabs.onActivated.addListener((activeInfo) => {
 chrome.tabs.get(activeInfo.tabId, (tab) => {
  console.log("Active tab:", tab);
 });
});

// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//  if (request.action === "setVolume") {
//   chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//    const activeTab = tabs[0];
//    chrome.scripting.executeScript({
//     target: { tabId: activeTab.id },
//     func: setVolume,
//     args: [request.volume],
//    });
//   });
//  }
// });
