# Octagon BookKeeping Solutions
Octagon BookKeeping Solutions is a bookkeeping service provider who approached us to create an interactive website to manage User profiles, document uploads and bookings engineered with the JavaScript MERN stack for our final Coder Academy group project.

## Octagon BookKeeping Solutions Links
### Deployed
* [Client](https://octagon-solutions.netlify.com)
* [Server](https://octagon-solutions.now.sh)

### GitHub Repositories
* [Client](https://github.com/en3on/octagon-solutions)
* [Server](https://github.com/en3on/octagon-solutions-server)

## Summary
Octagon BookKeeping Solutions is a multi-user application built to our client, Octagon Solutions, specifications in order to manage the bookings and document handling between clients and staff. Built using JavaScript and the MERN stack (**M**ongoDB, **E**xpress, **R**eact and **N**ode.js) for our final Coder Academy project.

## Contributors
* [Adam Ladell (en3on)](https://github.com/en3on)
* [Praveen Muthu](https://github.com/PraveenMut)

## About Octagon BookKeeping Solutions
### Project Background
Coder Academy presented us with the challenge of finding a real life client to build a web application for. We decided on creating a MERN stack Web Application for Octagon Solutions.

The project idea was to create a site where users could sign up and upload documents for an admin to access. Additionally, bookings could be made through the site by paying for a multitude of packages.

After sourcing our client, we met and worked with Octagon Solutions' representative to outline the requirements and challenges facing the task ahead.

Throughout the course of the project, we faced issues whilst trying to complete the user interface, as our project had begun with 3 people, but quickly shrunk to 2, as we lost a member. Leaving us to delegate an additional third of the project between us.

## Functionality and Features

[Octagon BookKeeping Solutions](https://github.com/en3on/octagon-solutions) is a multi-user, document storage and bookings tracker web application.

It contains the following features:
* Multi-user system with password reset
* Document CRUD
* Booking system for future meetings

### Libraries used
* Axios for handling REST interactions between the UI and the webAPI
* Bootstrap for implementing a production ready interface through pre-assembled components
* Mailer - Used for sending emails such as registration confirmation, password reset and appointment confirmation
* Bcrypt - used for encrypting user passwords
* jsonwebtoken - handled user sessions by storing a token in the browser that was sent on protected requests
* mongoose - managing interactions with MongoDB
* multer - easily handle form data
* randomstring - used to generate a random ASCII string. This was useful for our password reset functionality.
* mocha/ chai - used for testing our application during development

## Source control process
Our process for source control was creating seperate branches for each individual feature/bugfix. Work would be completed on these individual branches and then have the latest master branch changes merged into it. Upon fixing of any pull requests (if present), a pull-request would be made for the finished feature/bugfix. The other two team members who did not work on the branch would be assigned as reviewers. The changes would only be merged into master once both reviewers had reviewed and accepted changes.

Tickets were created, assigned and maintained through GitHub Projects using an Automated Kabana board.

## Design
[Figma](https://www.figma.com/file/Pr9M6yyNefn12n9wxN2oTxcF/Untitled?node-id=0%3A1)
The design process was a long and difficult one, as the productivity/availability from the team member initially leading this task, became severely limited over time.
5
[Database Entity Relationship Diagrams](https://dbdesigner.page.link/j4FxCvbwVPHABNkw://dbdesigner.page.link/j4FxCvbwVPHABNkw5)

## Project Organisation
Our project was organised using GitHub Projects, along with issue tracking, pull-requests and automated Kanban boards

* [Client Projects](https://github.com/en3on/octagon-solutions/projects)
* [Server Projects](https://github.com/en3on/octagon-solutions-server/projects)


## Readme Questions
### What are the most important aspects of quality software?
* Meeting the client's expectations/ requirements
Ensuring that the software meets the client's original expectations

* Creating software with few/ no bugs
Patching as many bugs as possible before and after deployment

* Good enough performance
Creating a codebase that is efficient

* Ease of learning and ease of use
Creating a UI/UX that is easy to use and learn

* Code Testability
Code should be able to easily be tested and have tests created to ensure that everything is working at any time

* Code Maintainability
Code should be easy to add onto or remove from

* Code Understandability
Code should be easy to logically understand by others


### A team is about to engage in a project, developing a website for a small business. What knowledge and skills would they need in order to develop the project? 

* Design skills to create a user-friendly UI
* Ability to create a REST API for the back-end
* Ability to create a client application using front-end technology
* Ability to connect the front-end and back-end
* Knowledge of deploying web applications online
* Team management skills
* Ability to use a CDN

### Within your own project what knowledge or skills were required to complete your project, and overcome challenges?

* NodeJS with Express
* ReactJS
* Error Handling
* Test Driven Development
* Team Management
* Debugging

### Evaluate how effective your knowledge and skills were this project, using examples, and suggest changes or improvements for future projects of a similar nature?

* Our combined experience using NodeJS, Express and ReactJS allowed us to create and follow an agreed upon style guide, as well as create complex, efficient and readable code.

* We undertook a lot of research on how to handle errors correctly, and designed a custom error handling feature throughout the application.

* Our previous knowledge of testing, allowed us to utilize a Test Driven Development environment, which helped in ensuring our confidence in the codes integrity.

* Our GitHub Projects page was well set up for both the client and server. We tracked issues efficiently and assigned pull-requests based on the features needed. We were more than capable of working independantly due to the complexity of the project management.

* Our team would often utilize pair-programming to identify and solve bugs encountered in our application's codebase.
