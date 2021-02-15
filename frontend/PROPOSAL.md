# Proposal for refactoring the project (frontend)

**Index**

1. [Folder Structure](#folder-structure)
2. [React Component Conventions](#react-component-conventions)
3. [CSS Conventions](#css-conventions)
4. [Steps to refactor the codebase](#refactor)

## Folder Structure

```
frontend
└── src
    ├── components (for all global components)
    │    ├── Header
    │    │    ├── Header.jsx
    │    │    ├── index.js
    │    │    └── header.module.scss
    │    └── Footer
    │         ├── Footer.jsx
    │         ├── index.js
    │         └── footer.module.scss
    │
    ├── pages (for pages)
    │    ├── Homepage
    │    │    ├── Homepage.jsx
    │    │    ├── index.js
    │    │    └── homepage.module.scss
    │    ├── About
    │    │    ├── About.jsx
    │    │    ├── index.js
    │    │    ├── about.module.scss
    │    │    │
    │    │    └── Components (for page specific component)
    │    │         ├── TeamCard
    │    │         │    ├── TeamCard.jsx
    │    │         │    ├── index.js
    │    │         │    └── team-card.module.scss
    │    │         └── CustomCarousel
    │    │              ├── CustomCarousel.jsx
    │    │              ├── index.js
    │    │              └── custom-carousel.module.scss
    │    └── Login
    │          ├── Login.jsx
    │          ├── index.js
    │          └── login.module.scss
    └── App.js
```

<br /><br  />

## React Component Conventions

**Rules to follow**

1. Do not use default exports. Instead, use [named exports](https://stackoverflow.com/questions/36795819/when-should-i-use-curly-braces-for-es6-import/36796281#36796281) throughout the project.

```
export class Header extends Components{

}

{/* For named exports, 'export' keyword should be used as shown above. There won't be any default export line anywhere in the code. */}
```

2. **Strictly** follow [PascalCase](https://techterms.com/definition/pascalcase) naming convention for naming React Components.
3. Import CSS module file as **style** in all the pages and components. Example, `import style from 'header.module.scss'`
4. Change all the class names. `<p className={style["class-name"]}>Some content...</p>`. **Note** - Keep the bootstrap classes like `row`, `col-`, `container`, etc, as they are.

<br /><br />

## CSS Conventions

**The following convention should strictly be followed.**

<br />

### File names

DO NOT use `camelCase`, or `PascalCase` to name the CSS/SCSS files. <br />
**Strictly use `Kebab-case`**

Example - `codeOfConduct.module.scss` will not be accepted. The right way is `code-of-conduct.module.scss`

<br />

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

<br /><br />

## Refactor

1. Install node-sass `npm install node-sass@4.14.1`
2. Make a folder with the component name.
   If it is a page, make a folder inside `frontend/pages` folder.
   If it is a global component (like header, footer, navbar), component that is used in multiple pages, then make a folder inside `frontend/components` folder.
3. Strictly follow the [React rules](#react-component-conventions) mentioned above.
4. Refer to the **Navbar** folder if you get stuck.
5. Follow the [CSS rules](#css-conventions) and edit all the classnames accoridingly. Note that bootstrap classes (row, col-, container) should be left as they are.
6. Do not worry about BEM Nomenclature for now.
