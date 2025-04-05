//He re we can see an example of assert declaration, it is a way to assert if an element exist 
// All words here ---> https://nightwatchjs.org/api/  ".assert" section 

module.exports = {
    "Assert visible" : function(browser) {
        browser.url("http://tutorials.actionqa.com/yt/nw/asserts/assert-vs-verify.html");
        browser.pause(2 * 1000);

        browser.assert.visible("#assert-verify-header");
        browser.click("#make-header-invisible");
        browser.assert.not.visible("#assert-verify-header");
    },
};