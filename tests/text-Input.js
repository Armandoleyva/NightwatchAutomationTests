module.exports = {
    "Text Input": function(browser){
        browser.url("http://tutorials.actionqa.com/yt/nw/basic/text-input.html");
        browser.pause(2 * 1000);

        browser.setValue("#text-input", "Sentkeys");
        browser.pause(2 * 1000);

        browser.clearValue("#text-input");
        browser.pause(2 * 1000);
        
        browser.end()
    }


};