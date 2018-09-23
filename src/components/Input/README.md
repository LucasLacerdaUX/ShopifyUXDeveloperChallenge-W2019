# Input

A text field is a HTML attribute that the user can type into. It currently supports a few formats: `text`, `password`, `email`, `search`, `tel`, `url`, `date`, `month`, `week`, `time`, `datetime` and `datetime-local` .

## Props

| Prop               | PropType                                                                                                                      | DefaultValue | Required? | Description                                                                                                            |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------- | ------------ | --------- | ---------------------------------------------------------------------------------------------------------------------- |
| _inputName_        | `string`                                                                                                                      |              | ✓         | Value of both `id` and `name` HTML attributes                                                                          |
| _inputType_        | `oneOf(["text", "password", "email", "search", "tel", "url", "date", "month", "week", "time", "datetime", "datetime-local"])` | `"text"`     |           | HTML input `type`                                                                                                      |
| _inputPlaceholder_ | `string`                                                                                                                      | `""`         |           | HTML input `placeholder`                                                                                               |
| _inputDesc_        | `string`                                                                                                                      | `""`         |           | Detailed content for assistive technologies. It's visually hidden by default.                                          |
| _inputValue_       | `string`                                                                                                                      | `""`         |           | Input value. You should use this to implement two-way binding.                                                         |
| _changeText_       | `func`                                                                                                                        | `null`       |           | onchange function executed on each keystroke. You should use this to implement two-way binding / real-time validation. |
| _changeFocus_      | `func`                                                                                                                        | `null`       |           | onblur function executed when the input loses focus.                                                                   |
| _isInvalid_        | `bool`                                                                                                                        | `false`      |           | Sets the invalid status on the input.                                                                                  |
| _labelText_        | `string`                                                                                                                      |              | ✓         | Input label content for assistive technologies. It's visually hidden by default.                                       |
| _..._              |                                                                                                                               |              |           | You can add any other HTML props to the input like `required`, `autoFocus`, `aria-elements`, etc.                      |

## Usage Exampless

1. Import the component:

```javascript
import Input from "../components/Form/Input/";
```

2. Add the JSX code:

**Form button**

```html
<Input
  inputName="username"
  inputType="password"
  value={this.state.username.value}
  isInvalid={this.state.username.invalid}
  aria-invalid={this.state.username.invalid}
  labelText="Enter your username"
  inputPlaceholder="username"
  inputDesc="Please use this to describe what is expected to be typed inside of this input so it can be read by Screen Readers."
  changeText={this.handleInputChange}
  changeFocus={this.handleInputBlur}
  aria-required={this.state.username.required}
/>
```

turns into

```html
<div class="Input">
  <label htmlFor="username" class="visually-hidden">
    username
  </label>
  <input
    type="change"
    name="username"
    id="username"
    placeholder="username"
    value=""
    onChange="changeText()"
    onBlur="changeFocus()"
    aria-describedby="username-hint"
    aria-required="true"
  />
  <span class="visually-hidden" id="username-hint">
    Please use this to describe what is expected to be typed inside of this input so it can be read by Screen Readers.
  </span>
</div>
```

![alt text](http://lacerda.design/Shopify/Input.png "Input")

_*Input preview*_
