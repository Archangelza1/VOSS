let Commands = {
  /**
   * @desc Checks That The Title In The Body Is Equal To The Value Inputted
   * @param {string} title - Title you want to validate
   */
  validateTitle: function (title) {
    this
      .assert.visible('body', 'Validate The Page Body Ha Rendered')
      .assert.containsText('@title', title, 'Ensure The Title On The Front Page Is Present')
  },
  /**
   * @desc Clicks The Fill Out Form Link On The Homepage
   */
  clickFillOutForms: function () {
    this
      .assert.visible('@fillOutForms')
      .click('@fillOutForms');
    return this
  },
  /**
   * @desc Fills Out The Left Form On The Fill Out Form Page
   * @param {string} firstName - The First Name You Want To Use In The Form
   * @param {string} message - The Message You Want To Use In The Form
   */
  FillOutForms: function (firstName, message) {
    this
      .assert.visible(`@firstName`)
      .setValue(`@firstName`, firstName)
      .assert.visible(`@message`)
      .setValue(`@message`, message)
      .assert.visible(`@submit`)
      .click(`@submit`);
    return this
  },
  /**
   * @desc Fills Out The Left Form On The Fill Out Form Page But Does Not Enter The First Name
   * @param {string} message - The Message You Want To Use In The Form
   * @param {string} error - The Error Message You Expect
   */
  FillOutFormsNoFirstName: function (message, error) {
    this
      .assert.visible(`@message`)
      .setValue(`@message`, message)
      .assert.visible(`@submit`)
      .click(`@submit`)
      .assert.visible(`@errormessage`)
      .assert.containsText(`@errormessage`, error);
    return this
  },
  /**
   * @desc Fills Out The Left Form On The Fill Out Form Page But Does Not Enter The Message
   * @param {string} firstName - The Message You Want To Use In The Form
   * @param {string} error - The Error Message You Expect
   */
  FillOutFormsNoMessage: function (firstName, error) {
    this
      .assert.visible('@firstName')
      .setValue(`@firstName`, firstName)
      .assert.visible(`@submit`)
      .click(`@submit`)
      .assert.visible(`@errormessage`)
      .assert.containsText(`@errormessage`, error);
    return this
  },
  /**
   * @desc Fills Out The Right Form On The Fill Out Form Page
   * @param {string} firstName - The First Name You Want To Use In The Form
   * @param {string} message - The Message You Want To Use In The Form
   */
  FillOutForms2: function (firstName, message) {
    this
      .assert.visible(`@firstName2`)
      .setValue(`@firstName2`, firstName)
      .assert.visible(`@message2`)
      .setValue(`@message2`, message)
      .assert.visible(`@captcha2Quest`)
      .getText(`@captcha2Quest`, function (text) {
        let sum = eval(text.value)
        let answer = sum.toString()
        this
          .keys('\uE004')
          .sendKeys('\uE004')
          .pause(500)
          .keys(answer)
          .pause(500)
      })
      .assert.visible(`@submit2`)
      .click(`@submit2`);
    return this
  },
  /**
   * @desc Fills Out The Right Form On The Fill Out Form Page But Does Not Enter Anything In Firstname
   * @param {string} message - The Message You Want To Use In The Form
   * @param {string} error - The Error You Expect From The Form
   */
  FillOutFormsNoFirstName2: function (message, error) {
    this
      .assert.visible(`@message2`)
      .setValue(`@message2`, message)
      .assert.visible(`@submit2`)
      .click(`@submit2`)
      .assert.visible(`@errormessage2`)
      .assert.containsText(`@errormessage2`, error);
    return this
  },
  /**
   * @desc Fills Out The Right Form On The Fill Out Form Page But Does Not Enter Anything In Message
   * @param {string} firstName - The Firstname You Want To Use In The Form
   * @param {string} error - The Error You Expect From The Form
   */
  FillOutFormsNoMessage2: function (firstName, error) {
    this
      .assert.visible('@firstName2')
      .setValue(`@firstName2`, firstName)
      .assert.visible(`@submit2`)
      .click(`@submit2`)
      .assert.visible(`@errormessage2`)
      .assert.containsText(`@errormessage2`, error);
    return this
  },
}

module.exports = {
  commands: [Commands],
  elements: {
    title: '.header-content h1',
    loginAutomation: 'a[href*="/users/sign_in"]',
    fillOutForms: 'a[href*="/filling-out-forms/"]',
    userName: '[name="user[email]"]',
    Password: '[name="user[password]"]',
    Submit: 'input[value="Sign in"]',
    formCount: '.et_pb_column:nth-child(1)',
    firstName: '.et_pb_column:nth-child(1) input.input[placeholder="Name"]',
    message: '.et_pb_column:nth-child(1) textarea.input[placeholder="Message"]',
    captcha: 'et_pb_contact_captcha_question',
    submit: '.et_pb_column:nth-child(1) button[type="submit"]',
    errormessage: '.et_pb_column:nth-child(1) p + ul li',
    confirmation: '.et_pb_column:nth-child(1) p',
    formCount2: '.et_pb_column:nth-child(2)',
    firstName2: '.et_pb_column:nth-child(2) input.input[placeholder="Name"]',
    message2: '.et_pb_column:nth-child(2) textarea.input[placeholder="Message"]',
    captcha2Quest: '.et_pb_column:nth-child(2) .et_pb_contact_captcha_question',
    captcha2: '.et_pb_column:nth-child(2) input[name*="captcha"]',
    submit2: '.et_pb_column:nth-child(2) button[type="submit"]',
    errormessage2: '.et_pb_column:nth-child(2) p + ul li',
    confirmation2: '.et_pb_column:nth-child(2) p'
  }
};
