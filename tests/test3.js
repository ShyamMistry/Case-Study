/*Test 3
Navigate to the home page
In the test 3 div, assert that "Option 1" is the default selected value
Select "Option 3" from the select list
*/

module.exports = {
'@tags':[
  'sample3',
  'test3'
],
  'Test Case 3' : function (browser) {
    browser
      .url('file:///C:/Users/ghans/Downloads/AutomationTestEngineerChallenge/index.html#');
      browser.assert.containsText('#dropdownMenuButton', 'Option 1')
      .click('.dropdown-toggle')
      .useXpath()
      .click(`//a[@class='dropdown-item' and contains(text(), 'Option 3')]`)
      .assert.containsText(`//button[@id='dropdownMenuButton']`, 'Option 3');
  }
}
