This repo contains tests written in Cypress.

The tests are heavily commented to ease you into the Cypress API.

## Help + Testing
The steps below will take you all the way through Cypress. It is assumed you have nothing installed except for node + git.

If you get stuck, here is more help:

[Gitter Channel](https://app.gitter.im/#/room/#cypress-io_cypress:gitter.im)
[Cypress Docs](https://docs.cypress.io/guides/overview/why-cypress)
[Cypress CLI Tool Docs](https://github.com/cypress-io/cypress-cli)
## 1. Install Cypress
Follow [these](https://docs.cypress.io/guides/getting-started/installing-cypress) instructions to install Cypress. 
(This specific tests run on cypress version @9.5.0)

Run this command to install the specific version needed for this project.

`npm cypress install@9.5.0`



## 2. Fork this repo
You'll need to fork the project first.

After forking this project in Github, run these commands:

```
## clone this repo to a local directory
git clone https://github.com/IntelliSOFT-Consulting/BotswanaEMRAutomatedTests.git

## cd into the cloned repo
cd BotswanaEMRAutomatedTests

## install the node_modules
npm install

## start the local webserver
npx cypress open 
The npm cypress start script will spawn a new cypress tab which hosts the test scripts that can then be run on your browser.

```


Cypress IntelliSense
If you use modern IDE that supports TypeScript (like VSCode), you can benefit from Cypress type declarations included with the cypress NPM module. Just add @ts-check to the spec file and configure "dummy" tsconfig.json file and see IntelliSense over cy.<something> commands.

cy.type IntelliSense

Custom commands
This project also adds several custom commands in cypress/support/commands.js. They are useful to create one or more default todos from the tests.

```

it('should append new items to the bottom of the list', function () {
  cy.createDefaultTodos().as('todos')
  // more test commands
})

```

## Support
If you find errors in the documentation, please open an issue.

