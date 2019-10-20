function onPage() {
    browser.tabs.create({
        url: "https://vernaruto.tv"
    });
}

browser.browserAction.onClicked.addListener(onPage);