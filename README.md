# 12-team-profile-generator

## Description

This repo contains all files related to the week 12 team profile generator project.

I was motived to build a team profile generator to enable people to create a webpage displaying summaries for a team of employees. The application allows users to enter basic details such as: name, id, and email (and additional information for specific roles) by answering a series of questions in Node JS. This information is then rendered in HTML to create a webpage to display summaries for each employee. This project enabled me to practice writing and creating instances of Classes in a test driven way. It also taught me how to use Jest to run tests. It gave me the opportunity to further practice importing and exporting script files as modules, alongside using Node JS modules such as Inquirer and Path. I used CSS to add styling to the page and ensured it was mobile responsive by adding a media query.

## Installation

These steps should be followed to install this project: <br>

1. Clone the repo. <br>
2. Enter 'npm install' into Node JS to download dependencies. <br>
3. Enter 'node index.js' into Node JS. <br>
4. Answer the questions in Node JS.

## Usage

The team profile generator allows managers to build a team and display summaries for each team member on a webpage.
This would be useful for managers that needed to build a team webpage quickly.

Please see below for a screenshot of the HTML page produced by the team generator in desktop view.
![Team summary page - desktop](/images/Team-generator-desktop-view.jpeg)

Please see below for a screenshot of the HTML page produced by the team generator in mobile view.

![Team summary page - mobile](/images/Team-generator-mobile-view.jpeg)

## Credits

N/A

## License

Please refer to the LICENSE in the repo.

## Tests

This application has a suite of unit tests using the Jest test runner. The tests cover the class based object model and test inheritance and overridden functions. To run the tests, type `npm test` in the terminal. Note that tests do not currently cover the main index.js or page-template.js files.
