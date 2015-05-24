# Multiform template

This repo is an example of a [Multiform](https://github.com/callumlocke/multiform) module.

Branches:

- [`master`](https://github.com/callumlocke/multiform-template) – just the basics
- `tdd` – a more complete example with linting and testing


## TDD setup

- Both module code and tests are in `src`, in order that both get built together.

- To keep it simple, no testing library (mocha, tape etc) is used for this demo. The test script is just `node test.js`.

- Run `npm run watch` to automatically rebuild and run tests while you work on files in `src`.
