module.exports = {
    "Expect Contains Text": function (browser){
        browser.url("http://tutorials.actionqa.com/yt/nw/asserts/assert-vs-verify.html");
        browser.pause(2 * 1000);

        // browser.assert.containsText("#more-text", "ome more tex");
        browser.expect.element("#more-text").text.to.contain("some more text");
        browser.click("#change-text");
        browser.expect.element("#more-text").text.to.not.contain("some more text");
        browser.pause(3 * 1000);

        browser.end();
    }
};