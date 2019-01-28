module.exports = {
  tags: ['sample1'],
  'Test Case 1' : function (browser) {
    browser
      .url('file:///C:/Users/ghans/Downloads/AutomationTestEngineerChallenge/index.html#')
      .waitForElementVisible('body')
      .assert.elementPresent('#inputEmail')
      .setValue('#inputEmail', 'abc@xyz.com')
      .assert.elementPresent('#inputPassword')
      .setValue('#inputPassword', 'Password123')
      .useXpath()
      .assert.elementPresent(`//button[@class='btn btn-lg btn-primary btn-block' and contains(text(), 'Sign in')]`)
       .end();
  }
};