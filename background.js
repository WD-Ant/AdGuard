const urlsToBlock = [
    "*://*.doubleclick.net/*",
    "*://*.popads.net/*",
    "*://*.adf.ly/*",
    "*://*.adsterra.com/*",
    "*://*.propellerads.com/*",
    "*://*.onclickads.net/*",
    "*://*.mgid.com/*",
    "*://*.taboola.com/*",
    "*://*.revcontent.com/*",
    "*://*.outbrain.com/*",
    "*://*.zedo.com/*",
    "*://*.yavli.com/*",
    "*://*.juicyads.com/*",
    "*://*.adnetworkperformance.com/*",
    "*://*.adsrvmedia.net/*",
    "*://*.content.ad/*",
    "*://*.exoclick.com/*",
    "*://*.infolinks.com/*",
    "*://*.trafficfactory.biz/*",
    "*://*.adk2x.com/*"
];

chrome.declarativeNetRequest.updateDynamicRules({
    addRules: urlsToBlock.map((url, index) => ({
        id: index + 1,
        priority: 1,
        action: { type: 'block' },
        condition: {
            urlFilter: url
        }
    })),
    removeRuleIds: Array.from({ length: urlsToBlock.length }, (index) => index + 1)
});
