let login = {
  /**
   * @desc Checks That The Title In The Body Is Equal To The Value Inputted
   * @param {string} title - Title you want to validate
   */
  validateTitle: function (data) {
    this
      .assert.visible('body', 'Validate The Body Of The Page Has Loaded')
      .assert.containsText('@title', data)
  },
  /**
   * @desc Clicks The Login Link On The Homepage
   */
  clickLogin: function () {
    this
      .assert.visible('@loginAutomation', 'Validate Login Button Is Present')
      .click('@loginAutomation')
  },
  /**
   * @desc Clicks The Submit Button On Login Page
   */
  submitLogin: function () {
    this
      .assert.visible('@Submit', 'Validate Submit Button Is Present')
      .click('@Submit')
    return this
  }
}

module.exports = {
  commands: [login],
  elements: {
    title: '.header-content h1',
    loginAutomation: 'a[href*="/users/sign_in"]',
    Username: '[name="user[email]"]',
    Password: '[name="user[password]"]',
    Submit: 'input[value="Sign in"]'
  }
};
