function onPage() {
    browser.tabs.create({
        url: "https://vernaruto.net"
    });
}

browser.browserAction.onClicked.addListener(onPage);