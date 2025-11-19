# Nightwatch web Automation Tests with Javascript
This repository contains a series of automated tests using Nightwatch.js. The tests are designed to ensure the correct functionality of the application's features.

## Prerequisites
Before running the tests, ensure that you have the following installed on your machine:

- **Node.js** (v16 or higher)
    ```bash
  To check if you have node js installed $node --version
- **npm** (v7 or higher)
    ```bash
    npm npx --version
- **ChromeDriver** or the appropriate driver for your browser

## Installation
Follow the steps below to set up the environment and run the tests.
1. **Clone this repository:**
      ```bash
   git clone https://github.com/your-username/NightwatchAutomationTests.git
2. **Navigate to the project directory and install the dependencies:**
   
   - This command will install necessary dependencies like Nightwatch.js, Selenium WebDriver, and other packages used for the tests.
     
   ```bash
    npm install nightwatch chromedriver geckodriver --save-dev
3. **In nightwatch.configuration.js, in the module.exports section, we search for "src_folder"
     Confirm a test folder where the tests will be stored and specify**
   - src_folders: ["./tests"]
  
4. **Command to run test**
    ```bash
   npx nightwatch -e chrome tests\testname.js

**Reports**
- Test results will be generated in the reports folder. You can check the reports to see the status of the tests, failure details, etc.
