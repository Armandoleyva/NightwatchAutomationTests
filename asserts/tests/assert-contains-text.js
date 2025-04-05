//In this file we can see an assert method to confirm text
//It does not matter if the word is complete, can be "ord" intead "word"
module.exports = {
    "Assrt Contains Text": function (browser){
        browser.url("http://tutorials.actionqa.com/yt/nw/asserts/assert-vs-verify.html");
        browser.pause(2 * 1000);

        browser.assert.containsText("#more-text", "ome more tex");
        browser.click("#change-text")
        browser.assert.containsText("#more-text", "changed me");
        browser.pause(3 * 1000);

        browser.end()
    }
};