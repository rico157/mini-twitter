<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h1 align="center">Mini Twitter</h3>

  <p align="center">
    A Twitter inspired web application built with React and AWS.
    <br />
    <b>Published <a href="https://dev.di7nulbm7s0x8.amplifyapp.com/">here</a></b>
  </p>
</p>

---

![Mini Twitter example][product-screenshot]


<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#features">Features</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#useful-scripts">Useful Scripts</a></li>
      </ul>
    </li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

A Twitter inspired simple application that allows users to share text based posts. The app was built using the services provided by AWS and had a very basic backend that allowed database interaction using React.
The app has a very simple architecture with each feature implemented as a small functional component. The interface was built using React and Styled Components.

### Features

- A sign up form to allow clients to create a new account and login.
- A single list showing the latest posts for all the "tweets" on the app.
- A text entry bar for the user to type in their post and submit it.


### Built With

* [React](https://reactjs.org/)
  * [Create React App](https://reactjs.org/docs/create-a-new-react-app.html)
  * [React Testing Library](https://reactjs.org/docs/testing.html)
  * [Styled Components](https://www.styled-components.com/)
* [AWS](https://aws.amazon.com/)
  * [Amplify](https://aws.amazon.com/amplify/)
  * [Cognito](https://aws.amazon.com/cognito/)
  * [AppSync](https://aws.amazon.com/appsync/)

<!-- USAGE -->
# Usage

- Go to: [dev.di7nulbm7s0x8.amplifyapp.com](https://dev.di7nulbm7s0x8.amplifyapp.com)

- Sign up to the application (email validation with a code is required)

- Time to tweet! 

![Mini Twitter usage example][product-gif]

<!-- GETTING STARTED -->
# Getting Started
## Prerequisites

- AWS Amplify `npm install -g @aws-amplify/cli`

---

## Installation

* `amplify init --app git@github.com:rico157/mini-twitter.git`

*Installs, initializes, and provisions resources for a sample amplify application from the provided GitHub repository URL. This option must be executed in an empty directory.*

* `? Select the authentication method you want to use: (Use arrow keys) -❯` **AWS profile**

* `? Please choose the profile you want to use (Use arrow keys) -❯` **\<Your-profile\>**

---

## Useful Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `amplify push `

Provisions cloud resources with the latest local developments.                    

### `amplify publish `

Executes amplify push, and then builds and publishes client-side application for hosting.   

[product-screenshot]: https://raw.githubusercontent.com/rico157/mini-twitter/dev/examples/example-banner.png
[product-gif]: https://raw.githubusercontent.com/rico157/mini-twitter/dev/examples/example-usage.gif
