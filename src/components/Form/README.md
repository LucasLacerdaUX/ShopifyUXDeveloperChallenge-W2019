# Form

A wrapper component that handles the drawing of inputs, errors and the submission of forms.

It contains an array of `Input` components, a `Button` component with `type=submit` and a `LiveError` region to display validation errors.

## Props

| Prop             | PropType | DefaultValue | Required? | Description                                                                                                                                                                                                                                                                                                                                                     |
| ---------------- | -------- | ------------ | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| _fields_         | `object` |              | ✓         | Object with input configurations. See the example below.                                                                                                                                                                                                                                                                                                        |
| _formSubmit_     | `func`   |              | ✓         | `onsubmit` function of the form                                                                                                                                                                                                                                                                                                                                 |
| _inputChange_    | `func`   | `null`       |           | onchange function executed on each keystroke. You should use this to implement two-way binding / real-time validation.                                                                                                                                                                                                                                          |
| _inputBlur_      | `func`   | `null`       |           | `onblur` function executed when the input loses focus.                                                                                                                                                                                                                                                                                                          |
| _loading_        | `bool`   | `false`      |           | Optional boolean to toggle a spinning loading icon inside the content of the form submit button.                                                                                                                                                                                                                                                                |
| _errorRenderKey_ | `number` | `0`          |           | "Hacky" variable to change the `key` of the error `span`s and force React to re-render this region. This is used to make Screen Readers read the message on `aria-live` regions again. You can increment this variable on the `formSubmit` function to force re-rendering of errors on each submit. If you don't change this value, the errors won't re-render. |

## `fields` Object Sample

```javascript
fields: {
  username: {
    config: {
      autofocus: true,
      autoCompleteProp: "off",
      type: "text",
      placeholder: "username",
      label: "Enter your username",
      description:
        "Your username is expected to be between 6 and 24 characters"
    },
    value: "",
    valid: false,
    validation: {
      required: true,
      minCh: 6,
      maxCh: 24,
      errorMsg: "username must be between 6 and 24 characters."
    },
    touched: false
  },
  password: {
    config: {
      autoCompleteProp: "off",
      type: "password",
      placeholder: "password",
      label: "Enter your password",
      description:
        "Your password is expected to be between 8 and 24 characters"
    },
    value: "",
    valid: false,
    validation: {
      minCh: 8,
      maxCh: 24,
      errorMsg: "password must be between 8 and 24 characters."
    },
    touched: false
  }
}
```

If you passe this as props to the Form component by using the `fields` prop, it will automatically render two inputs and automatically display the `errorMsg` of invalid fields.

## Usage Sample

1. Import the component:

```javascript
import Button from "../components/Button/Button";
```

2. Add the JSX code and make sure to create the validation and submit functions in your code.

```html
<LoginForm
  fields={fields}
  inputChange={this.handleInputChanged}
  inputBlur={this.handleInputBlur}
  formSubmit={this.handleLogin}
  loading={loading}
  errorRenderKey={formErrorCount}
/>
```

![alt text](http://lacerda.design/Shopify/Form.png "Form")

_*A Form element contains a set of Inputs, a submit Button and a live error region*_
