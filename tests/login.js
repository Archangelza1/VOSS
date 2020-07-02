module.exports = {
  '@disabled': true,
  'Register & Login' : function (client) {
    const homepage = client.page.ultimateqa();

    client
      .url(client.launch_url)
      .title('Automation Practice - Ultimate QA', 'Validate Title Of The Page');
    homepage
      .validateTitle('Automation Practice');
  },
  'Take A Screenshot' : function (client) {
    client
      .saveScreenshot('homepage.jpg')
      .windowMaximize();
  },
  'Login As A User' : function (client) {
    let login = client.page.login();
    console.log(client.globals)
    login
      .clickLogin()
      // TODO Add Feature Toggle For Captcha to allow the ip of the jenkins machine to bypass the captcha system, Alternatively the dev enviroment should not include a Captcha.
    client
      .assert.visible('[name="user[email]"]', 'Ensure Email Input Field Is Visible')
      .setValue('[name="user[email]"]', client.globals.TestData.username)
      .assert.visible('[name="user[password]"]', 'Ensure Password Input Field Is Visible')
      .setValue('[name="user[password]"]', client.globals.TestData.password);
    login
      .submitLogin();
    client
      .end();
  },
};
