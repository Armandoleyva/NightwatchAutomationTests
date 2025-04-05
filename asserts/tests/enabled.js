 module.exports = {
    "Enabled test" : function(browser){

      browser.url("http://tutorials.actionqa.com/yt/nw/asserts/enabled.html")
      //browser.assert.attributeEquals("#am-i-disabled","disabled","true");
      browser.expect.element("#am-i-disabled").not.to.be.enabled;
      browser.setValue("#type-to-enable", "Enabled!");
      browser.pause(3*1000);
      //Pensarias que es como una negacion pero no, en assert marca error ya que no existe un "attributeEquals" "false" por eso se usa expect
      //browser.assert.attributeEquals("#am-i-disabled","disabled","false"); 
      browser.expect.element("#am-i-disabled").to.be.enabled;
      browser.end();
    }

 }