# Multiform template

This repo is an example of a [Multiform](https://github.com/callumlocke/multiform) module.

Branches:

- [`master`](https://github.com/callumlocke/multiform-template) – just the basics
- `tdd` – a more complete example with linting and testing


## TDD setup

- Both module code and tests are in `src`, in order that both get built together.

- To keep it simple, no testing library (mocha, tape etc) is used for this demo. The test script is just `node test.js`.

- Run `npm run watch` to automatically rebuild and run tests while you work on files in `src`.


[![Build Status][travis-image]][travis-url] [![Dependency Status][depstat-image]][depstat-url]


<!-- badge URLs -->
[travis-url]: http://travis-ci.org/callumlocke/multiform-template
[travis-image]: https://img.shields.io/travis/callumlocke/multiform-template.svg?style=flat-square

[depstat-url]: https://david-dm.org/callumlocke/multiform-template
[depstat-image]: https://img.shields.io/david/callumlocke/multiform-template.svg?style=flat-square
