module.exports = {
    "Expect visible" : function(browser) {
        browser.url("http://tutorials.actionqa.com/yt/nw/asserts/assert-vs-verify.html");
        browser.pause(2 * 1000);

        //browser.assert.visible("#assert-verify-header");
        browser.expect.element("#assert-verify-header").to.be.visible;

        browser.click("#make-header-invisible");

        //browser.assert.not.visible("#assert-verify-header");
        browser.expect.element("#assert-verify-header").not.visible;
    },
};