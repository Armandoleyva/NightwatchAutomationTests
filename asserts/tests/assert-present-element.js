module.exports = {
    "Assert present" : function(browser){
        browser.url("http://tutorials.actionqa.com/yt/nw/asserts/assert-vs-verify.html");
        browser.pause(2 * 1000);

        browser.assert.elementPresent("#some-list");
        browser.click("#remove-list");
        browser.assert.not.elementPresent("#some-list");
        browser.pause(2 * 1000);
        browser.end();
    }
}