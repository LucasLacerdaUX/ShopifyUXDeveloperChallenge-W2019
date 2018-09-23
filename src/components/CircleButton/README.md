# CircleButton

Link component that receives a SVG icon, an id and a description to create a circular button.

## Props

| Prop       | PropType | DefaultValue | Required? | Description                                                                                   |
| ---------- | -------- | ------------ | --------- | --------------------------------------------------------------------------------------------- |
| _name_     | `string` |              | ✓         | Name of the button. Used on HTML `id` attribute.                                              |
| _desc_     | `string` |              | ✓         | Description of the button. Used on HTML `title` attribute, useful for Assistive Technologies. |
| _children_ | `node`   |              | ✓         | Content of the circle button, usually and SVG or IMG.                                         |

## Usage Examples

1. Import the CircleButton

```javascript
import CircleButton from "../components/CircleButton";
```

2. Add the CircleButton component:

```html
<CircleButton key="Twitter" name="Twitter" desc={siteInfo.desc}>
  <svg id="SvgLogoTwitter" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16">
    <path d="M16 3.037a6.54 6.54 0 0 1-1.885.516 3.295 3.295 0 0 0 1.443-1.816 6.56 6.56 0 0 1-2.084.797 3.286 3.286 0 0 0-5.595 2.993 9.318 9.318 0 0 1-6.766-3.428 3.286 3.286 0 0 0 1.016 4.382A3.267 3.267 0 0 1 .64 6.07v.041a3.284 3.284 0 0 0 2.633 3.218c-.483.132-.99.151-1.482.057a3.288 3.288 0 0 0 3.067 2.28A6.594 6.594 0 0 1 0 13.027a9.291 9.291 0 0 0 5.032 1.472v.001c6.038 0 9.34-5.002 9.34-9.34 0-.142 0-.284-.009-.424A6.694 6.694 0 0 0 16 3.037z" />
  </svg>
</CircleButton>
```

![alt text](http://lacerda.design/Shopify/CircleButton.png "CircleButton preview")

_*CircleButton preview*_
