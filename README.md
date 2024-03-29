# Team Profile Generator 
![Github licence](http://img.shields.io/badge/license-MIT-blue.svg)

## Description 
This application was created to build a command-line application that collects employees information and generates a team profile based on user input using the Inquirer module from Node.js and displaying the information on a newly created html web page with a style sheet. This project demonstrates use of OOP and TDD using Jest to conduct unit tests of every part of the code to ensure it would pass each test. 

## Table of Contents
* [User Story](#user-story)
* [Acceptance Criteria](#acceptance-criteria)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## User Story

```md
As A manager
I WANT to generate a webpage that displays my team's basic info
THEN have quick access to their emails and GitHub profiles
```

## Acceptance Criteria

```md
WHEN entered the command-line node index.js 
THEN I am prompted to enter the type employee I would like to add to my team. I am presented with a menu with the option to add an engineer or an intern or to finish building my team.
WHEN i select the managers option, and I am taken back to the menu.
Then I am prompted to enter the managers name, employee ID, email address, and office number,and I am taken back to the menu. 
WHEN I select the engineer option, 
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

## Installation 
1. To install application, clone the main project via the HTTP or SSH link on github.
git clone

2. Once cloned, open up the project folder in your text editor and run the following command in terminal to install all dependencies.
npm install


## Usage 
![alt text](images/application-image.jpg)
1. While in the main project folder (use 'cd' command if needed) enter the following command to execute the chain of prompts:
node index

2. Answer all the prompts and once completed, your HTML file will be created.


## License 
This project is license under MIT

## Contributing 
Contributors should read the installation section. 

## Tests
Run `npm test` to run Jest for tests on constructors. 

## Questions
Please contact vpolier@gmail.com if you have any questions about this project. More of this project can be seen at https://github.com/vpolier.