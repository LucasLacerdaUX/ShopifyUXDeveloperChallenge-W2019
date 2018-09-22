# Shopify UX Developer Challenge - Winter 2019

This is a project developed for the **UX Developer Intern (Winter 2019)** challenge.

Shopify describes a UX Developer as someone who is able to "_write well-structured semantic HTML, build maintainable and scalable CSS and work with modern JavaScript (ES6+, ReactJS)_". It's also important to create high quality experiences for **EVERYONE**.

These goals were set as the foundation of this project. You can read more about the decisions I've made to fulfill them on the [Methodology](#Methodology) section.

## Table of Contents

<!-- vscode-markdown-toc -->

- 1. [Demo](#Demo)
- 2. [Requirements](#Requirements)
- 3. [Installation](#Installation)
- 4. [The Challenge](#TheChallenge)
  - 4.1. [Goal](#Goal)
  - 4.2. [Screenshots](#Screenshots)
- 5. [Why React?](#WhyReact)
- 6. [Methodology](#Methodology)
  - 6.1. [Accessibility](#Accessibility)
  - 6.2. [Form Validation](#FormValidation)
  - 6.3. [Components](#Components)
- 7. [References](#References)

## 1. <a name='Demo'></a>Demo

View demo on [CodeSandbox](https://codesandbox.io/s/github/LucasLacerdaUX/ShopifyUXDeveloperChallenge-W2019/tree/master/).

## 2. <a name='Requirements'></a>Requirements

- [Node.js](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/)

## 3. <a name='Installation'></a>Installation

1. First, clone this repo using [Git](https://git-scm.com/) or download the [zip](https://github.com/LucasLacerdaUX/ShopifyUXDeveloperChallenge-W2019/archive/master.zip)

```bash
git clone https://github.com/LucasLacerdaUX/ShopifyUXDeveloperChallenge-W2019.git
```

2. Use **npm** to install the dependencies

```bash
npm install
```

3. Start the Parcel bundler to run the project on localhost:1234.

```bash
npm start
```

## 4. <a name='TheChallenge'></a>The Challenge

### 4.1. <a name='Goal'></a>Goal

Build a **single-page responsive website** for a fictional tech startup – AcmeStack.
You must recreate, as faithfully as possible, this single-page website.

You can view the detailed project specification [here](challenge).

### 4.2. <a name='Screenshots'></a>Screenshots

- [Desktop](challenge/screenshots/desktop) _(1440 x 900)_
- (Mobile) [iPhone 5](challenge/screenshots/iphone-5) _(320 x 568)_
- (Mobile) [iPhone X](challenge/screenshots/iphone-x) _(product render)_

## 5. <a name='WhyReact'></a>Why React?

After a long time studying Vanilla JavaScript (ES2015, ES6+), I've recently started using ReactJS. As a Designer, I usually start my projects from the smallest isolated components up to the full solution, building a rich and consistent Design System.

I found React components to be a perfect way of translating my libraries of UI elements to code. It also helps me ensure that each component meets its best accessibility standards individually. React is powerful, flexible and maintainable.

## 6. <a name='Methodology'></a>Methodology

### 6.1. <a name='Accessibility'></a>Accessibility

This project was built with a goal in mind: make it usable for **everyone**. The components make use of alternative text and labels to provide an inclusive experience with images, inputs, and buttons. The final result has been tested with both mouse, touch and keyboard navigation and with the help of a Screen Reader (SR) to make sure it's completely usable.

However, there are still some improvements that could be made to the user interface, like always displaying the text label on inputs and improving the contrast ratio in some areas. These were not changed on this project since the goal was to recreate, as faithfully as possible, the provided layout.

Most of the decisions made on this project were heavily influenced by the [Techniques for WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/) accessibility guidelines and by recommendations set on Shopify's own [Polaris guidelines](https://polaris.shopify.com/guides/principles).

### 6.2. <a name='FormValidation'></a>Form Validation

The implementation of form validation has many different approaches. The pattern chosen for this project was based on recommendations by the WCAG 2.0 and the [form validation section of Polaris Guidelines](https://polaris.shopify.com/patterns/error-messages#section-form-validation). This is how it works:

- The field is considered **invalid** when it's been touched **AND** its content is either empty or outside the valid length range.

- **Validate on Submit:** When the user presses the form submit button or the _ENTER_ key, all form fields are validated, regardless of whether they have already been touched or not.

- **Validate on finish typing:** The validation occurs when the keyboard focus moves away from the field. This avoids marking the field as invalid while the user is still typing a possibly valid input. As soon as the user presses the _TAB_ key or clicks somewhere else on the screen, the field is marked **TOUCHED** and its contents are compared with the validation rules.

- **Real-time validation on invalid fields:** Once a field is marked as invalid, the validation checks occur after each keystroke. This helps the user to immediately notice when the issue has been fixed.

The invalid fields are instantly marked with `aria-invalid="true"` and visually highlighted with a red border. A live region using `aria-role="alert"` and `aria-live="assertive"` not only displays the error but also makes sure it's always readen by SRs, allowing any user to understand what needs to be fixed. As recommended by the W3C's [ARIA19: Using ARIA role=alert or Live Regions to Identify Errors](https://www.w3.org/TR/WCAG20-TECHS/ARIA19.html) technique, "each time a new submit is attempted the previous error messages are removed from the container and new error messages injected". That simply means we need to force React to re-render the error region's DOM on each submit, even if its content does not change.

### 6.3. <a name='Components'></a>Components

The components built on this project are intended to be reusable. Not only can their labels and visuals be customized by the containers that use them, but they've also been made _as dumb as possible_ to allow you to customize their behaviors.

Each component folder contains its own documentation.

## 7. <a name='References'></a>References

TODO: Add references.
