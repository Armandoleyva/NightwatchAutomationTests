module.exports = {
    // "Dropdown": function(browser){
    //     browser.url("https://tutorials.actionqa.com/yt/nw/basic/drop-down.html");
    //     browser.pause(2 * 1000);

    //     browser.setValue("#dropdown", "Th");
    //     browser.pause(2 * 1000);

    //     browser.setValue("#dropdown", "bla");
    //     browser.pause(2 * 1000);
        
    //     browser.end()
    // }

    "Dropdown con clicks": function(browser){
        browser.url("https://tutorials.actionqa.com/yt/nw/basic/drop-down.html");
        browser.pause(2 * 1000);

        //vamos a recorrer uno por uno las opciones
        for (let i = 1; i <= 4; i++){
            browser.click(`#dropdown option:nth-child(${i}`)
            browser.pause(1 * 1000);


        }

        
        browser.end()
    }

};