
module.exports = {
/*

Test 5

    Navigate to home page
    In the test 5 div, wait for a button to be displayed (note: the delay is random) and then click it
    Once you've clicked the button, assert that a success message is displayed
    Assert that the button is now disabled
*/
'@tags':[
  'sample5',
  'test5'
],
'Test Case 5' : function (browser) {
  browser
    .url('file:///C:/Users/ghans/Downloads/AutomationTestEngineerChallenge/index.html#');
    browser.waitForElementVisible('#test5-button', 10000, function() {
      browser.click('#test5-button')
      .assert.cssProperty('#test5-button', 'background-color', 'rgba(0, 123, 255, 1)')
      .assert.containsText("#test5-alert", "You clicked a button!");
    });
}
}