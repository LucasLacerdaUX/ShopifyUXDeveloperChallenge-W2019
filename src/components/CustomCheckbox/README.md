# CustomCheckbox

Custom checkbox input element.

## Props

| Prop               | PropType | DefaultValue | Required? | Description                                                                                                                                               |
| ------------------ | -------- | ------------ | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| _inputName_        | `string` |              | ✓         | Value of both `id` and `name` HTML attributes                                                                                                             |
| _fieldDescription_ | `string` | `null`       |           | Description of the checkbox for assistive technologies. It's linked to the checkbox by the `aria-describedby` attribute. It's visually hidden by default. |
| _children_         | `node`   | `""`         |           | Checkbox label content                                                                                                                                    |

## Usage Samples

1. Import the component:

```javascript
import CustomCheckbox from "../components/CustomCheckbox/CustomCheckbox";
```

2. Add the JSX code:

**Form button**

```html
<CustomCheckbox inputName="checkbox-1" fieldDescription="Detailed description of the checkbox if needed">
  checkbox label
</CustomCheckbox>
```

turns into

```html
<div class="CustomCheckbox">
  <input type="checkbox" id="checkbox-1" name="checkbox-1" aria-describedby="checkbox-1-hint" />
  <label htmlFor="checkbox-1">checkbox label</label>
    <span class="visually-hidden" id="checkbox-1-hint">
      Detailed description of the checkbox if needed
    </span>
</div>
```

![alt text](http://lacerda.design/Shopify/Checkbox.png "Checkbox preview")

_*Checkbox preview*_
