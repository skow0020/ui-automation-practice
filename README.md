# Zip Candidate Front-End QE Test - NodeJS

Your task is to write test automation to cover the scenario outlined below. You can use any test framework/s and supporting libraries you choose.

Include some documentation in `DEVELOPERS.md` to outline how to run, evaluate, and report on the tests.

## Known Hacker Rank Issues

**Node Version**

At the time of writing, the NodeJS environment on Hacker Rank is running version v8.15.1. Please be aware that upgrading test libraries to the latest (if you're a stickler for removing `npm audit` warnings) will cause your test runs to fail owing to the lack of support for CommonJS/ES.


## Setting up the Test Harness for Development

This is a NodeJS project. Install all the required packages using:

```
npm install
```

## Test Requirements

1. Navigate to [http://cafetownsend-angular-rails.herokuapp.com/login](http://cafetownsend-angular-rails.herokuapp.com/login)
1. Login with:
    * username: `Luke`
    * password: `Skywalker`
1. Create a new employee and verify account is created
1. Edit an employee and verify details are updated
1. Delete the employee and verify account is deleted.

## Supporting Code Tools

We have added a couple of common utilities to the Node package to help with your build:

- `npm run test`: runs your tests
- `npm run lint`: runs ESLint over the code to make sure it adheres to code linting rules
- `npm run prettier:check` and `npm run prettier:fix`: checks/fixes code format
