# UX Developer Intern Challenge

Build a **single-page responsive website** for a fictional tech startup – AcmeStack.

## Rules

1. The final result **must** live on [CodeSandbox](https://codesandbox.io/) _(no other submissions will be accepted)_.
2. You can use any frontend tech stack you choose _(CSS pre-processor, JS framework / library, vanilla html/css/js, etc)_.

## Challenge

You must recreate, as faithfully as possible, this single-page website.

### Screenshots

- [iPhone X](screenshots/iphone-x) _(product render)_
- [iPhone 5](screenshots/iphone-5) _(320 x 568)_
- [Desktop](screenshots/desktop) _(1440 x 900)_

The [iPhone X](screenshots/iphone-x) screenshots provide a rendered example of how we expect the site to look on that device.

### Minimum required deliverables

- **Reproduce the designs** provided in the [screenshots](screenshots)
- At least one **media breakpoint** _(mobile vs desktop)_
- **Simulate a server request** by using a “timeout” on form submit
- During the simulated server request, **toggle a “loading” state**
- Both “username” and “password” inputs **must validate against a min/max** character count
- **Togglable “remember me”** `checkbox`
- Success state “sign out” `button` **must link back to the initial state** of the website
- Correct usage of:
  - Colours
  - Typography
  - Layout

### Details to omit

- This website is just a prototype, so interactions with a server are not necessary
- “remember me” `checkbox` does not need to perform an action _(simply write the styles and make the element interactable)_
- Social links _(Google, Facebook, Twitter)_ do not need to go anywhere
- You have evergreen browser support _(build for the newest browser versions)_, so don’t worry about backwards compatibility for older browsers

## Design system

### AcmeStack brand colours

- **White:** #fff ![#ffffff](https://placehold.it/14/ffffff/000000?text=+)
- **Black:** #000 ![#000000](https://placehold.it/14/000000/000000?text=+)
- **Red**: #ff0051 ![#ff0051](https://placehold.it/14/ff0051/000000?text=+)
-
- **Light purple _(lighter)_:** #f4ecff ![#f4ecff](https://placehold.it/14/f4ecff/000000?text=+)
- **Light purple:** #e4d2ff ![#e4d2ff](https://placehold.it/14/e4d2ff/000000?text=+)
- **Light purple _(darker)_:** #caaef2 ![#caaef2](https://placehold.it/14/caaef2/000000?text=+)
-
- **Dark purple _(lighter)_:** #8456ff ![#8456ff](https://placehold.it/14/8456ff/000000?text=+)
- **Dark purple:** #7e24fa ![#7e24fa](https://placehold.it/14/7e24fa/000000?text=+)
- **Dark purple _(darker)_:** #6624d2 ![#6624d2](https://placehold.it/14/6624d2/000000?text=+)

The design also contains a linear gradient, which shifts from **Dark purple** to **Light purple _(darker)_** at a **45 degree** angle.

### Typography

The rendered typography is to use the **default primary sans-serif** of the operating system / device the webpage is accessed from. On the latest MacOS / iOS, that typeface is `San Francisco`. We have provided you the font stack for `San Francisco`:

```scss
font-family: -apple-system, BlinkMacSystemFont, "San Francisco";
```

It is up to you to include smart defaults for Windows and Linux.

### Icons

- AcmeStack logo
- Google logo
- Facebook logo
- Twitter logo
- Loading spinner

You will need to copy the `.svg` markup into your project _(do not link directly to a hosted asset)_.

**If struggling to use the SVGs, feel free to substitute them** with an empty `<div />` in the markup, stylized to be:

- Same size as the icon presented in the design
- A perfect circle
- Solid **Dark purple** background
