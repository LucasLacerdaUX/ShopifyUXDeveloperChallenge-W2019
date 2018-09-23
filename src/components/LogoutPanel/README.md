# LogoutPanel

A component that contains a message, a description and a button. It's designed for the Logout page, but you can customize it with any behavior that you want.

## Props

| Prop        | PropType | DefaultValue | Required? | Description                                                           |
| ----------- | -------- | ------------ | --------- | --------------------------------------------------------------------- |
| _loading_   | `bool`   | `false`      |           | Optional boolean to toggle a spinning loading icon inside the button. |
| _mainTitle_ | `string` |              | ✓         | The title of the panel.                                               |
| _mainDesc_  | `string` |              |           | The sub-title of the panel.                                           |
| _btnText_   | `func`   |              | ✓         | Text of the `Button`.                                                 |
| _btnAction_ | `bool`   | `null`       | ✓         | `onsubmit` function of the button                                     |

## Usage Examples

```javascript
import LogoutPanel from "../components/LogoutPanel";
```

2. Add the LogoutPanel component:

```html
<LogoutPanel
  btnAction={this.handleLogout}
  mainTitle="Congratulations"
  mainDesc="You have successfully logged in."
  btnText="sign out"
  loading={loading}
/>
```

![alt text](http://lacerda.design/Shopify/LogoutPanel.png "LogoutPanel")

_*Panel preview*_
