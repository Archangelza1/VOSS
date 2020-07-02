let HtmlReporter = require('nightwatch-html-reporter');
let reporter = new HtmlReporter({
  openBrowser: true,
  themeName: 'compact',
  reportsDirectory: __dirname,
  reportFilename: 'generatedReport.html',
});
let testData = {
  username: 'test@mail.com',
  password: 'password'
}
module.exports = {
  reporter: reporter.fn,
  TestData: testData
};
