# Button

This is the general button component for the AcmeStack page. It's used both inside and outside Forms.

## Props

| Prop        | PropType                               | DefaultValue      | Required? | Description                                                                                                                    |
| ----------- | -------------------------------------- | ----------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------ |
| _loading_   | `bool`                                 | `false`           |           | Toggles a spinning loading icon inside the content of the button.                                                              |
| _btnType_   | `oneOf("button", "submit", "reset")`   | `"button"`        |           | Set the HTML5 button type attribute. The `submit` and `reset` should be used on forms. Default value is `html type="button"`.  |
| _btnStyle_  | `oneOf("DefaultButton", "FormButton")` | `"DefaultButton"` |           | There are two preset styles: FormButton and DefaultButton. These are added as CSS class to the component. Default `FormButton` |
| _btnAction_ | `func`                                 | `null`            |           | The `onclick` function of the button.                                                                                          |
| _children_  | `node`                                 | `""`              |           | Content inside the button when `loading` is set to `false`                                                                     |

## Usage Samples

1. Import the component:

```javascript
import Button from "../components/Button/Button";
```

2. Add the JSX code:

**Form button**

```html
<Button loading={false} btnStyle="FormButton" btnType="submit">
  form button
</Button>
```

![alt text](http://lacerda.design/Shopify/FormButton.png "Form Button")

**Form button (loading)**

```html
<Button loading={true} btnStyle="FormButton" btnType="submit">
  form button
</Button>
```

![alt text](http://lacerda.design/Shopify/FormButtonLoading.png "Form Button (Loading)")

**Default button**

```html
<Button loading={false} btnStyle="DefaultButton" btnType="button" btnAction={btnAction}>
  default button
</Button>
```

![alt text](http://lacerda.design/Shopify/DefaultButton.png "Default Button")

**Default button (loading)**

```html
<Button loading={true} btnStyle="DefaultButton" btnType="button" btnAction={btnAction}>
  default button
</Button>
```

![alt text](http://lacerda.design/Shopify/DefaultButtonLoading.png "Default Button")
