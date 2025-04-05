//In this test we can see the diference between cssSelector and Xpath
//look that we can change the selector using the methods useXpath() and useCss()

module.exports = {
    "Css and xpath": function(browser){
        browser.url("https://tutorials.actionqa.com/yt/nw/locator-01.html")
        browser.pause(1 * 1000)
        
        const cssSelector = "#text-input"
        const xpathSelector = '//*[@id="text-input"]'

        browser.useXpath()
        browser.setValue(xpathSelector, "This is XPath")
        browser.pause(2 * 1000)

        browser.useCss()
        browser.clearValue(cssSelector)
        browser.pause(2 * 1000)
        browser.setValue(cssSelector, "This is cssSelector again!")
        browser.pause(2 * 1000)

        browser.end()
    }

}
