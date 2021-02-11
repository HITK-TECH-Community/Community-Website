# Proposal for refactoring the project (frontend)

**Index**

1. [Folder Structure](##-folder-structure)
2. [React Component Conventions](##-react-component-conventions)
3. [CSS Conventions](##-css-conventions)

## Folder Structure

```
frontend
└── src
    ├── components (for all global components)
    │    ├── Header
    │    │    ├── Header.jsx
    │    │    ├── index.js
    │    │    └── header.modules.scss
    │    └── Footer
    │         ├── Footer.jsx
    │         ├── index.js
    │         └── footer.modules.scss
    │
    ├── pages (for pages)
    │    ├── Homepage
    │    │    ├── Homepage.jsx
    │    │    ├── index.js
    │    │    └── homepage.modules.scss
    │    ├── About
    │    │    ├── About.jsx
    │    │    ├── index.js
    │    │    ├── about.modules.scss
    │    │    │
    │    │    └── Components (for page specific component)
    │    │         ├── TeamCard
    │    │         │    ├── TeamCard.jsx
    │    │         │    ├── index.js
    │    │         │    └── team-card.modules.scss
    │    │         └── CustomCarousel
    │    │              ├── CustomCarousel.jsx
    │    │              ├── index.js
    │    │              └── custom-carousel.modules.scss
    │    └── Login
    │          ├── Login.jsx
    │          ├── index.js
    │          └── login.modules.scss
    └── App.js
```

<br /><br  />

## React Component Conventions

**Rules to follow**

1. Do not use defualt exports. Instead, use [named exports](https://stackoverflow.com/questions/36795819/when-should-i-use-curly-braces-for-es6-import/36796281#36796281) throughout the project.

```
export class Header extends Components{

}

{/* For named exports, 'export' keyword should be used as shown above. There won't be any default export line anywhere in the code. */}
```

2. Import CSS module file as **style** in all the pages and components. Example, `import style from 'header.module.scss'`
3. **Strictly** follow [PascalCase](https://techterms.com/definition/pascalcase) naming convention for naming React Components.

<br /><br />

## CSS Conventions

**The following convention should strictly be followed.**

### File names

DO NOT use `camelCase`, or `PascalCase` to name the CSS/SCSS files. <br />
**Strictly use `Kebab-case`**

Example - `codeOfConduct.module.scss` will not be accepted. The right way is `code-of-conduct.module.scss`

### Variable names

Use `kebab-case` for variable names while maintaing the [BEM nomenclature](http://getbem.com/naming/).
For example

```css
/* wrong practice */
.blogCard__card--small {
  ...;
}

/* right practice */
.blog-card__card--small {
  ...;
}
```

```css
/* wrong practice */
.submitButton__big--lightBlue {
  ...;
}

/* right practice */
.submit-button__big--light-blue {
  ...;
}
```
