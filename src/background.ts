chrome.runtime.onMessage.addListener(
    function (_, sender, sendResponse) {
        console.log(sender.tab ?
            "from a content script:" + sender.tab.url :
            "from the extension");

        chrome.tabs.create({
            url: chrome.runtime.getURL("popup.html"),
        }).then(() => {
            sendResponse({farewell: "goodbye"})
        })

        return true
    }
);