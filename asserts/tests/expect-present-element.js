module.exports = {
    "Assert present" : function(browser){
        browser.url("http://tutorials.actionqa.com/yt/nw/asserts/assert-vs-verify.html");
        browser.pause(2 * 1000);

        //browser.assert.elementPresent("#some-list");
        browser.expect.element("#some-list").to.be.present;
        browser.click("#remove-list");
        browser.expect.element("#some-list").to.not.be.present;
        browser.pause(2 * 1000);
        browser.end();
    }
}