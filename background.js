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

const ruleIdsToRemove = Array.from({ length: urlsToBlock.length }, (_, index) => index + 1).map(id => Math.floor(id));

const newRules = urlsToBlock.map((url, index) => ({
    id: index + 1,
    priority: 1,
    action: { type: 'block' },
    condition: {
        urlFilter: url
    }
}));

chrome.declarativeNetRequest.updateDynamicRules({
    addRules: newRules,
    removeRuleIds: ruleIdsToRemove
}, () => {
    if (chrome.runtime.lastError) {
        console.error('Error updating rules:', chrome.runtime.lastError);
    } else {
        console.log('Rules updated successfully.');
    }
});