module.exports = {
  '@disabled': false,
  'Validate Website Is Up' : function (client) {
    const homepage = client.page.ultimateqa();

    client
      .url(client.launch_url)
      .title('Automation Practice - Ultimate QA', 'Validate Title Of The Page');
    homepage
      .validateTitle('Automation Practice');
  },
  'Click Pricing Page' : function (client) {
    let Pricing = client.page.pricingpage();
    console.log(client.globals)
    Pricing
      .clickPricing()
      .clickBasic()
    client
      .end();
  },
};
