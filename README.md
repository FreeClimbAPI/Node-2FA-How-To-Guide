# Node 2FA Sample App

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://travis-ci.com/FreeClimbAPI/Node-2FA-Tutorial.svg?branch=master)](https://travis-ci.com/FreeClimbAPI/Node-2FA-Tutorial)
[![Coverage Status](https://coveralls.io/repos/github/FreeClimbAPI/Node-2FA-Tutorial/badge.svg?branch=master)](https://coveralls.io/github/FreeClimbAPI/Node-2FA-Tutorial?branch=master)

This project serves as a guide to help you build a 2FA (Two-Factor Authentication) application with [FreeClimb](https://docs.freeclimb.com/docs/how-freeclimb-works). 

Specifically, the project will:

-   Get a phone number from the user
-   Send a verification code to the user's phone
-   Get the verification code from the user
-   Expire the verification code after a set amount of time
-   Verify the code

## Tutorial
We offer a [Two-Factor Authentication (2FA) tutorial](https://docs.freeclimb.com/docs/two-factor-authentication-tutorial) for more detailed set-up instructions and explanation of how the code in this 2FA sample app works.

## Requirements

A [FreeClimb account](https://www.freeclimb.com/dashboard/signup/)

A [registered application](https://docs.freeclimb.com/docs/registering-and-configuring-an-application#register-an-app) with a named alias

A [configured FreeClimb number](https://docs.freeclimb.com/docs/getting-and-configuring-a-freeclimb-number) assigned to your application

Trial accounts: a [verified number](https://docs.freeclimb.com/docs/using-your-trial-account#verifying-outbound-numbers)

Tools:
- [Node.js](https://nodejs.org/en/download/) 12.14.0 or higher
- [Yarn](https://yarnpkg.com/en/)


## Setting up the Sample App

1. Install the required packages

    ```bash
    yarn install
    ```

1. Create a .env file and configure the following environment variables within it:

    | ENV VARIABLE    | DESCRIPTION                                                                                                                                                                                                                               |
    | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | ACCOUNT_ID      | Account ID which can be found under [API credentials](https://www.freeclimb.com/dashboard/portal/account/authentication) in dashboard.                                                                                                            |
    | API_KEY      | Authentication token which can be found under [API credentials](https://www.freeclimb.com/dashboard/portal/account/authentication) in dashboard                                                                                                  |
    | FC_PHONE_NUMBER | A [configured FreeClimb Number](https://www.freeclimb.com/dashboard/portal/numbers) that will send verification codes. To learn more, go [here](https://docs.freeclimb.com/docs/getting-and-configuring-a-freeclimb-number). |
    | PORT | Specifies the port on which the app will run (e.g. PORT=3000 means you would direct your browser to http://localhost:3000). | 

## Running the Sample App

```bash
yarn start
```

## Feedback & Issues
If you would like to give the team feedback or you encounter a problem, please [contact support](https://www.freeclimb.com/support/) or [submit a ticket](https://freeclimb.com/dashboard/portal/support) in the dashboard.
