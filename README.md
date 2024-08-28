# Cypress_Mocha_Framework

A boilerplate framework that  utilizes Cypress with the Mocha testing framework for end-to-end (E2E) testing.<br>
The combination of Cypress's powerful browser automation and Mocha's flexible testing structure provides a robust solution for automated testing.


## Project Structure
The project follows a conventional structure for Cypress with Mocha, making it easy to maintain and scale.

![Alt text](https://github.com/nirmala-c-m/Cypress_Mocha_Framework/blob/main/Screenshot%20from%202024-08-28%2014-58-47.png)


## Key Directories & Files
* **cypress/integration/:** Contains all test files written in Mocha.
* **cypress/fixtures/:** Holds static test data that can be referenced in your tests.
* **cypress/support/:** Includes custom commands and global configurations.
* **cypress/plugins/:** For extending Cypress functionality via plugins.
* **cypress.json:** Central configuration file for Cypress settings.



## Installation
* **To set up the project locally, follow these steps:**

* Clone the repository:
```
git clone https://github.com/your-repo/cypress-mocha-project.git
```
  * Navigate to the project directory:
```
cd cypress-mocha-project
```

  * Install dependencies:
```
npm install
```

## Configuration
`cypress.json`
The cypress.json file is where you configure your Cypress environment settings.

## Environment Variables
You can pass environment variables via the `cypress.json` file or through the command line using `CYPRESS`_ prefix.

## Writing Tests
Tests are written in Mocha, using Cypress commands for browser interactions. A typical test file structure:
**Test Structure**
* **describe:** Groups related test cases.
* **it:** Defines an individual test case.
* **before, beforeEach, after, afterEach:** Mocha hooks for setup and teardown.

## Custom Commands
* Custom commands can be added in `cypress/support/commands.js`. These commands help reduce code duplication and improve test readability.

## Test Execution
We can execute the tests in different ways, either via the terminal or using the Cypress Test Runner interface.

* 1.  **Normal case**
	* Execute `npm run test`
	* To execute specific tags from command line we can use npm argument parser npm_config_ -> `npm run test --tags="@Smoke"`
	* If you need to specify a browser, you can do so with the --browsertype option[Default value for browser is chrome] -> `npm run test --tags="@Smoke" --browsertype="firefox"`

  * Rerun failed cases: run `npm run test test:failed`
    
* 2. **Executing Tests via Cypress Test Runner**
   * Opening the Cypress Test Runner `npx cypress open`
   * To execute specific tags  -> `npx cypress open --env tags="@Login_Scenario3"`
   * **Running Tests:**
     Once the Test Runner is open, you can select any .feature file from the list and execute it.
     The Test Runner allows you to see your tests run in real-time, along with the ability to interact with the application under test directly in the browser.
  * **Debugging with Test Runner:**
    You can pause test execution, inspect elements, and step through your code interactively.
    Test results, including errors and screenshots, are displayed within the runner interface, making it easier to diagnose issues.

  * **Rerunning Failed Cases in Test Runner:**
    The Cypress Test Runner also logs failed tests, which can be rerun directly from the interface by simply selecting the failed tests and clicking the "Run" button.

## Execution flow
* Execution in this framework starts from `package.json`.<br>
* Depending on the command executed in the CLI `test:failed` or `test` (test:failed or test), the corresponding script will be executed.
* Tests to be executed are defined in the feature files located in the cypress/e2e folder.<br>
* The set of test cases is identified by appropriate tag names using the tags section in cypress-cucumber-preprocessor or CLI.

**Argument passing through CLI (tags, browser type etc) -**
* The simplest way to pass arguments to an npm script is to prepend the arguments to the argument parser called npm_config_ and attach the result to the process.env object.<br> 

* In `npm_config_tags` or `npm_config_browsertype`, arguments can be passed from CLI, eg: `npm run test --tags="@Login_Scenario3"`<br>
**Note:** `TAGS` and `tags` are two different argument. TAGS is not working in linux env.<br>

### Rerun failed cases
While executing `npm run test test:failed` package.json -> script -> test:failed will be executed


## Test configurations
**Execution configurations can be set in `cypress.config.json`.**
* Retry, parallel execution, and other settings are configured in `cypress.config.json`.
* Browser settings, baseUrl, and headless mode are set in `cypress.config.json`.

## Test case creation
* Test cases are defined in the `cypress/e2e folder` as `.feature files`. The first step in the feature file is to provide the test data. After obtaining the appropriate test data, you can proceed with the rest of the steps.

## cypress/support/step_definitions
* This folder contains all the steps defined in the feature files, such as reading test data, performing actions like login, creating orders, etc.

## src/pages
* This folder contains all the Page Objects that encapsulate the UI elements and actions, such as login, create order, etc.
  
## Read test data
**cypress/Fixtures/Testdata.json**<br>
* Test data reading start from test data path provided in step defined in the feature file.
* Test data is provided in JSON file in `TestData/{feature name}/{test case01}` path. data reading is implimented in `cypress/utils/dataReader.js`.
* Since we're using cypress-cucumber-preprocessor for testing, the native Cypress report might not be sufficient. Instead, we use multiple-cucumber-html-reporter.

## Test reporting
#### Cypress comes with built-in Mocha reporters for test results. To generate HTML reports or integrate with CI tools, you can use plugins like `mochawesome`.

* Generate the report:
```
npm run test
```

   * Merge and generate the final HTML report:
```
npx mochawesome-merge cypress/reports/*.json | npx mochawesome-report-generator
```

   * Automated Reporting Setup
The following scripts in the package.json file automate the test execution and reporting process:

```
"scripts": {
  "pretest": "rimraf ./cypress/reports/*.json",
  "test": "npm run cypress-test-all || npm run posttest",
  "cypress-test": "cypress run",
  "cypress-test-all": "npm run pretest && npm run test:chrome && npm run test:firefox && npm run test:edge",
  "posttest": "npm run merge-reports && npm run generate-htmlreport",
  "merge-reports": "npx mochawesome-merge ./cypress/reports/*.json > ./cypress/reports/report.json",
  "generate-htmlreport": "npx mochawesome-report-generator ./cypress/reports/report.json -o ./cypress/reports/html",
  "test:chrome": "cypress run --browser chrome",
  "test:firefox": "cypress run --browser firefox",
  "test:edge": "cypress run --browser edge"
}
```

**CI/CD Integration**
The project is configured for easy integration with CI/CD pipelines. Use the above scripts within your pipeline to ensure automated testing and reporting.

## Troubleshooting
**Common Issues:**
* **Test Failures:** Ensure that all dependencies are installed correctly. Check if the correct browser is used for testing.
* **Report Generation:**  If reports are not generated, verify the paths and existence of JSON files in the cypress/reports directory.

  
## Debugging:
* Use the Cypress Test Runner (npx cypress open) to visually debug tests.
*Inspect the HTML reports generated in cypress/reports/html for detailed test results.

## Best Practices
* **DRY Principle:** Use custom commands to avoid repeating code.
* **Assertions:** Include meaningful assertions in your tests to ensure correctness.
* **Page Object Model (POM):** Structure your tests using POM to improve maintainability.


## Feature need to add
* dockerized the framework.  https://codefresh.io/blog/not-ignore-dockerignore-2/
* Need to impliment DB validations.
* Need to create artifactory for the framework.

## Reference

* **Cypress Documentation** :<br>
https://docs.cypress.io/guides/overview/why-cypress)](https://docs.cypress.io/guides/overview/why-cypress
* **Mocha Documentation**   :<br>
https://mochajs.org/
* **Mochawesome Reporter**  :<br>
 https://www.npmjs.com/package/cypress-mochawesome-reporter
