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

it('should append new items to the bottom of the list', function () {
  cy.createDefaultTodos().as('todos')
  // more test commands
})
To let TypeScript compiler know that we have added a custom command and have IntelliSense working, I have described the type signature of the custom command in file cypress/support/index.d.ts. Here is how this file looks; the type signatures should match the arguments custom commands expect.

/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * Create several Todo items via UI
     * @example
     * cy.createDefaultTodos()
     */
    createDefaultTodos(): Chainable<any>
    /**
     * Creates one Todo using UI
     * @example
     * cy.createTodo('new item')
     */
    createTodo(title: string): Chainable<any>
  }
}
To include the new ".d.ts" file into IntelliSense, I could update tsconfig.json or I could add another special comment to the JavaScript spec files - /// <reference types="...>.

// type definitions for Cypress object "cy"
/// <reference types="cypress" />

// type definitions for custom commands like "createDefaultTodos"
// will resolve to "cypress/support/index.d.ts"
/// <reference types="../support" />
Related: IntelliSense for custom Chai assertions added to Cypress

Support
If you find errors in the type documentation, please open an issue

