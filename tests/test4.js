
module.exports = {
/*
Test 4
Navigate to home page
In the test 4 div, assert that the first button is enabled and that the second button is disabled

Note: We are using button background-color to verify the stat of the button
*/
'@tags':[
  'sample4',
  'test4'
],
'Test Case 4' : function (browser) {
  browser
    .url('file:///C:/Users/ghans/Downloads/AutomationTestEngineerChallenge/index.html#');
  browser.assert.cssProperty('#test-4-div .btn-primary', 'background-color', 'rgba(0, 123, 255, 1)')  
  browser.assert.cssProperty('#test-4-div .btn-secondary', 'background-color', 'rgba(134, 142, 150, 1)');
}
}