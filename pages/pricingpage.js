let pricing = {
  /**
   * @desc Clicks The Login Pricing Page
   */
  clickPricing: function () {
    this
      .assert.visible('@priceList', 'Validate Pricing Link Is Visible')
      .click('@priceList')
  },
  /**
   * @desc Click Pricing
   */
  clickBasic: function () {
    this
      .assert.visible('@basicOption', 'Click Basic Pricing Table')
      .click('@basicOption')
  }
}

module.exports = {
  commands: [pricing],
  elements: {
    priceList: 'a[href*="/fake-pricing-page"]',
    basicOption: '.et_pb_section:nth-child(1) > .et_pb_row:nth-child(2) > .et_pb_column:nth-child(2) .et_pb_pricing_table_button',
  }
};
