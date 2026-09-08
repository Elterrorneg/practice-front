const reporter = require('cucumber-html-reporter');
const fs = require('fs');

const jsonFile = 'reports/cucumber-report.json';

if (!fs.existsSync(jsonFile)) {
  console.error(`No se encontró el archivo de resultados: ${jsonFile}`);
  process.exit(1);
}

const options = {
  theme: 'bootstrap',
  jsonFile,
  output: 'reports/cucumber-report.html',
  reportSuiteAsScenario: true,
  scenarioTimestamp: true,
  launchReport: false,
  metadata: {
    'App Version': '1.0.0',
    'Test Environment': 'STAGING',
    Browser: 'Chromium',
    Platform: 'Windows 11'
  }
};

reporter.generate(options);