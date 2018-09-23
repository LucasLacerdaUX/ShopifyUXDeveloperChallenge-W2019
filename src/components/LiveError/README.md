# LiveError

A wrapper component that creates a live region with `role=alert`, `aria-live=assertive` and `aria-atomic=true` for accessibility.

According to the [W3C Aria19](https://www.w3.org/TR/WCAG20-TECHS/ARIA19.html), "the purpose of this technique is to notify Assistive Technologies (AT) when an input error occurs. The aria-live attribute makes it possible for an AT,such as a screen reader (SR), to be notified when error messages are injected into a Live Region container.

`role="alert"` is equivalent to `aria-live=assertive`, but since a few screen readers does not support the first property, it's recommended that both are include. Using `aria-live=assertive` makes a SR read the region when it changes, prioritizing the error message over a few other kinds of interaction.

`aria-atomic=true` means that the entire region should be read by SRs anytime anything in it changes. It's also necessary to make Voiceover (iOS) read the error messages after more than one invalid submission.

If you want something inside a Live Region to be read by SRs even if the content does not change, make sure to change its DOM. This usually happens when you need to re-read the same error message everytime the user tries to submit an invalid form with the same errors.

This component does not handle this "redraw" behavior, you should do it outside. Please check the `Form` component and see how it uses the `key` attribute to force React to re-render the DOM.

## Props

| Prop       | PropType | DefaultValue | Required? | Description  |
| ---------- | -------- | ------------ | --------- | ------------ |
| _children_ | `node`   |              |           | Live content |

## Usage Examples

```javascript
import LiveError from "../components/LiveError";
```

2. Add the LiveError component wrapping the error messages

```html
<LiveError>
Error mesage
</Live>
```
