module.exports = {
  '@disabled': false,
  'Fill Form' : function (client) {
    let homepage = client.page.ultimateqa();

    client
      .url(client.launch_url)
      .assert.title('Automation Practice - Ultimate QA')
      .windowMaximize();
    homepage
      .clickFillOutForms()
      .FillOutForms('Tester', 'Test')
      .assert.containsText('@confirmation', 'Form filled out successfully')
    client
      .end();
  },
  'Fill Form 2' : function (client) {
    let homepage = client.page.ultimateqa();

    client
      .url(client.launch_url)
      .assert.title('Automation Practice - Ultimate QA')
      .windowMaximize();
    homepage
      .clickFillOutForms()
      .FillOutForms2('Tester', 'Test')
      .assert.containsText('@confirmation2', 'Success')
    client
      .end();
  },
};
