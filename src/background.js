chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log(sender.tab ?
            "from a content script:" + sender.tab.url :
            "from the extension");

        chrome.tabs.create({
            url: chrome.runtime.getURL("popup.html"),
        }).then(tab => {
            chrome.storage.sync.get(["pr"]).then(r => {
                console.log(r)
            })
            sendResponse({farewell: "goodbye"})
            if (!tab.id) return
            chrome.tabs.sendMessage(tab.id, {
                product: request.product
            }).then(r => {
                console.log(r)
            }).catch(r => {
                console.log(r)
            })
        })

        return true
    }
);