module.exports = {
  '@disabled': false,
  'No First Name Form' : function (client) {
    let homepage = client.page.ultimateqa();

    client
      .url(client.launch_url)
      .assert.title('Automation Practice - Ultimate QA')
      .windowMaximize();
    homepage
      .clickFillOutForms()
      .FillOutFormsNoFirstName('teasda', 'Name')
    client
      .end();
  },
  'No Message Form' : function (client) {
    let homepage = client.page.ultimateqa();

    client
      .url(client.launch_url)
      .assert.title('Automation Practice - Ultimate QA')
      .windowMaximize();
    homepage
      .clickFillOutForms()
      .FillOutFormsNoMessage('sadasdas', 'Message')
    client
      .end();
  },
  'No First Name Captcha Form' : function (client) {
    let homepage = client.page.ultimateqa();

    client
      .url(client.launch_url)
      .assert.title('Automation Practice - Ultimate QA')
      .windowMaximize();
    homepage
      .clickFillOutForms()
      .FillOutFormsNoFirstName2('teasda', 'Name')
    client
      .end();
  },
  'No Message Captcha Form' : function (client) {
    let homepage = client.page.ultimateqa();

    client
      .url(client.launch_url)
      .assert.title('Automation Practice - Ultimate QA')
      .windowMaximize();
    homepage
      .clickFillOutForms()
      .FillOutFormsNoMessage2('sadasdas', 'Message')
    client
      .end();
  },
};
