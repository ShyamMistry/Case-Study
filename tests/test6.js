/*
Test 6
Navigate to home page
Write a method that allows you to find the value of any cell on the grid
Use the method to find the value of the cell at coordinates 2, 2 (staring at 0 in the top left corner)
Assert that the value of the cell is "Ventosanzap"
*/
module.exports = {
  '@tags':[
    'sample6',
    'test6',
  ],
'Test Case 6': function (browser) {
  browser
    .url('file:///C:/Users/ghans/Downloads/AutomationTestEngineerChallenge/index.html#');
  browser.waitForElementVisible('body', 10000, function(){
    var tData = browser.getTableData('table-bordered', 2, 2);
    browser.assert.equal(tData, "Ventosanzap");
  });
}
}