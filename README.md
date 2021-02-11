# Node-2FA-Tutorial

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://travis-ci.com/FreeClimbAPI/Node-2FA-Tutorial.svg?branch=master)](https://travis-ci.com/FreeClimbAPI/Node-2FA-Tutorial)
[![Coverage Status](https://coveralls.io/repos/github/FreeClimbAPI/Node-2FA-Tutorial/badge.svg?branch=master)](https://coveralls.io/github/FreeClimbAPI/Node-2FA-Tutorial?branch=master)

This project serves as a guide to help you build a 2FA (Two-Factor Authentication) application with FreeClimb. View this tutorial [here](https://docs.freeclimb.com/docs/two-factor-authentication-tutorial).  
Specifically, the project will:

-   Get a phone number from the user
-   Send a verification code to the user's phone
-   Get the verification code from the user
-   Expire the verification code after a set amount of time
-   Verify the code

## Setting up your new app within your FreeClimb account

To get started using a FreeClimb account, follow the instructions [here](https://docs.freeclimb.com/docs/getting-started-with-freeclimb).

## Setting up the Tutorial

1. Install the required packages

    ```bash
    yarn install
    ```

1. Configure environment variables within the .env file

    | ENV VARIABLE    | DESCRIPTION                                                                                                                                                                                                                               |
    | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | ACCOUNT_ID      | Account ID which can be found under [API Keys](https://www.freeclimb.com/dashboard/portal/account/authentication) in Dashboard.                                                                                                            |
    | AUTH_TOKEN      | Authentication token which can be found under [API Keys](https://www.freeclimb.com/dashboard/portal/account/authentication) in Dashboard                                                                                                  |
    | FC_PHONE_NUMBER | A [configured FreeClimb Number](https://www.freeclimb.com/dashboard/portal/numbers) that will send verification codes. To learn more, go [here](https://docs.freeclimb.com/docs/getting-and-configuring-a-freeclimb-number). |
    | PORT | Specifies the port on which the app will run (e.g. PORT=3000 means you would direct your browser to http://localhost:3000). | 

## Running the Tutorial

```bash
yarn start
```
