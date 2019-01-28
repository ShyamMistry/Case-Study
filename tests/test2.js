module.exports = {
  /*
  Test 2
    Navigate to home page
    In the test 2 div, assert that there are three values in the listgroup
    Assert that the second list item's value is set to "List Item 2"
    Assert that the second list item's badge value is 6
  */
 '@tags':[
  'sample2',
  'test2'
],
  'Test Case 2' : function (browser) {
    browser
      .url('file:///C:/Users/ghans/Downloads/AutomationTestEngineerChallenge/index.html#');
      browser.assert.elementCount('.jumbotron #test-2-div .list-group .list-group-item', 3);
    browser.assert.containsText('ul.list-group li:nth-of-type(2)', 'List Item 2');
    browser.assert.containsText('ul.list-group li:nth-of-type(2) > span.badge-pill', 6);  
  }
};