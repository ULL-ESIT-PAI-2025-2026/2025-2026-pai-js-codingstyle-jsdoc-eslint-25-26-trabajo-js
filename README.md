## JavaScript + Coding Style + JSDoc + ESLint 

### Index

- [JavaScript Introduction](#introduction)
- [Google Style Guide](#google-style-guide)
- [JSDoc](#jsdoc)
- [ESLint](#eslint)

---

### Introduction

This repository main purpose is to upgrade your JavaScript knowledge, it also contains materials related to best practices in JavaScript, including code style, documentation with JSDoc, and static analysis with ESLint.
---

### Repository Structure


      .
      ├── bib                     # Bibliography and references
      ├── slides                  # Slides of the presentation associated to the repo
      ├── src                     # Source code 
           ├
           ├ examples             # All code examples excluding code style
           ├     ├ ESLint         # ESLint code examples
           ├     ├ FS             # Node.js File system code examples
           ├     ├ JS-examples    # Main code examples of the repo
           ├     ├ JSDoc-style    # JSDoc example
           ├
           ├ style_guide          # Main examples of code style guide

---

### [Google Style Guide](https://github.com/ULL-ESIT-PAI-2025-2026/2025-2026-pai-js-codingstyle-jsdoc-eslint-25-26-trabajo-js/tree/master/src/style_guide)

JavaScript code should follow a consistent style to improve readability and maintainability.

The [Google Style Guide](https://google.github.io/styleguide/jsguide.html) provides a set of rules and recommendations for writing clear and well-structured JavaScript code.

---

### [JSDoc](https://github.com/ULL-ESIT-PAI-2025-2026/2025-2026-pai-js-codingstyle-jsdoc-eslint-25-26-trabajo-js/blob/master/src/examples/JSDoc-style.js)

[JSDoc](https://jsdoc.app/) is a documentation format for JavaScript that allows describing functions, parameters, and return types in code comments. Example:

```js
/**
 * Adds two numbers.
 * @param {number} numer1 - First number.
 * @param {number} number2 - Second number.
 * @returns {number} Sum of the numbers.
 */
function add(number1, number2) {
  return number1 + number2;
}
```
### [ESlint](https://github.com/ULL-ESIT-PAI-2025-2026/2025-2026-pai-js-codingstyle-jsdoc-eslint-25-26-trabajo-js/tree/master/src/examples/ESLint)

[ESLint](https://lenguajejs.com/javascript/calidad-de-codigo/eslint/) is a static analysis tool that helps detect and fix issues in JavaScript code.

