chrome.runtime.onMessage.addListener(
    function (_, __, sendResponse) {
        chrome.tabs.create({
            url: chrome.runtime.getURL("popup.html"),
        }).then(() => {
            sendResponse({farewell: "goodbye"})
        })
        return true
    }
);