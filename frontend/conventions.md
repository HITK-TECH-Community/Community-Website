# Conventions to be followed while working on the project (frontend)

**Index**

1. [Folder Structure](#folder-structure)
2. [React Component Conventions](#react-component-conventions)
3. [CSS Conventions](#css-conventions)
4. [Steps to refactor the codebase](#refactor)

## Folder Structure

```
frontend
└── src
    ├── components
    |    ├── ErrorHandlerPages
    |    |    ├── 404
    |    |    |   ├── NotFound.jsx
    |    |    |   ├── index.js
    |    |    |   ├── not-found.module.scss
    |    |    ├── LoggedIn
    |    |    |   ├── LoggedIn.jsx
    |    |    |   ├── index.js
    |    |    |   ├── logged-in.module.scss
    |    ├── Footer
    |    |    ├── Footer.jsx
    |    |    |── footer.module.scss
    |    |    |── index.js
    |    ├── Navbar
    |    |    ├── Navbar.jsx
    |    |    |── navbar.module.scss
    |    |    |── index.js
    |    ├── util
    |    |    ├── Button
    |    |    |   ├── Button.jsx
    |    |    |   ├── index.js
    |    |    |   ├── button.module.scss
    |    |    ├── DropMenu
    |    |    |   ├── DropMenu.jsx
    |    |    |   ├── index.js
    |    |    |   ├── drop-menu.module.scss
    |    |    ├── Dropdown
    |    |    |   ├── Dropdown.jsx
    |    |    |   ├── MenuItems.js
    |    |    |   ├── index.js
    |    |    |   ├── dropdown.module.scss
    |    |    ├── ScrollToTop
    |    |    |   ├── LoggedIn.jsx
    |    |    |   ├── index.js
    |    |    |   ├── logged-in.module.scss
    |    |    ├── Toast
    |    |    |   ├── Toast.jsx
    |    |    |   ├── index.js
    |    |    |   ├── toast.module.scss
    |    |    ├── Toggle
    |    |    |   ├── Toggle.jsx
    |    |    |   ├── index.js
    |    |    |   ├── toggle.module.scss
    ├── config
    |    ├── api.js
    ├── fonts
    |    ├── FuturaLT-Book.ttf
    ├── test_data
    |    ├── broadcast_text.json
    |    ├── superadmin_credential.json
    |    ├── team-roles.json
    |    ├── teams.js
    ├── store
    |    ├── actions
    |    |    ├── actions.js
    |    |    ├── auth.js
    |    ├── reducers
    |    |    ├── reducer.js
    ├── pages
    │    ├── Home
    |    │    ├── components
    |    |    |    ├── JoinUs
    |    |    |    |   ├── JoinUs.jsx
    |    |    |    |   ├── index.js
    |    |    |    |   ├── join-us.module.scss
    |    |    |    ├── Carousel
    |    |    |    |   ├── Carousel.jsx
    |    |    |    |   ├── index.js
    |    |    |    |   ├── carousel.module.scss
    |    |    |    |   ├── owl-carousel-styles.css
    |    |    |    ├── JoinUsForm
    |    |    |    |   ├── Form.jsx
    |    |    |    |   ├── index.js
    |    |    |    |   ├── form.module.scss
    |    |    |    ├── Motive
    |    |    |    |   ├── Motive.jsx
    |    |    |    |   ├── index.js
    |    |    |    |   ├── motive.module.scss
    |    |    |    ├── Overview
    |    |    |    |   ├── Overview.jsx
    |    |    |    |   ├── index.js
    |    |    |    |   ├── overview.module.scss
    |    │    ├── index.js
    |    │    ├── Home.jsx
    |    │    └── home.module.scss
    |    │    └── nav-icon.png
    │    ├── About
    │    │    ├── About.jsx
    │    │    ├── index.js
    │    │    ├── about.module.scss
    │    │    ├── about.scss
    │    └── Login
    │    |     ├── Login.jsx
    │    |     ├── index.js
    │    |     └── login.module.scss
    │    ├── Admin
    |    │    ├── components
    |    |    |    ├── JoinUs
    |    |    |    |   ├── JoinUs.jsx
    |    |    |    |   ├── index.js
    |    |    |    ├── About
    |    |    |    |   ├── About.jsx
    |    |    |    |   ├── index.js
    |    |    |    |   ├── about-us.module.scss
    |    |    |    ├── AddTeamMember
    |    |    |    |   ├── AddTeamMember.jsx
    |    |    |    |   ├── index.js
    |    |    |    |   ├── add-team-member.module.scss
    |    |    |    ├── Broadcast
    |    |    |    |   ├── AddBroadcasts
    |    |    |    |   |   ├── AddBroadcasts.jsx
    |    |    |    |   |   ├── index.js
    |    |    |    |   |   ├── add-broadcasts.module.scss
    |    |    |    |   ├── Broadcast.jsx
    |    |    |    |   ├── index.js
    |    |    |    |   ├── broadcast.module.scss
    |    |    |    ├── Contact
    |    |    |    |   ├── Contact.jsx
    |    |    |    |   ├── index.js
    |    |    |    ├── Dashboard
    |    |    |    |   ├── Dashboard.jsx
    |    |    |    |   ├── index.js
    |    |    |    |   ├── dashboard.module.scss
    |    |    |    ├── Faq
    |    |    |    |   ├── AddFaq
    |    |    |    |   |   ├── AddFaq.jsx
    |    |    |    |   |   ├── index.js
    |    |    |    |   |   ├── add-faq.module.scss
    |    |    |    |   ├── Faq.jsx
    |    |    |    |   ├── index.js
    |    |    |    |   ├── faq.module.scss
    |    |    |    ├── MangeTeams
    |    |    |    |   ├── ManageTeams.jsx
    |    |    |    |   ├── index.js
    |    |    |    |   ├── manage-teams.module.scss
    |    |    |    ├── Profile
    |    |    |    |   ├── Profile.jsx
    |    |    |    |   ├── index.js
    |    |    |    |   ├── profile.module.scss
    |    |    |    ├── Resource
    |    |    |    |   ├── Resource.jsx
    |    |    |    |   ├── index.js\
    |    |    |    ├── Setting
    |    |    |    |   ├── Invite
    |    |    |    |   |   ├── Invite.jsx
    |    |    |    |   |   ├── index.js
    |    |    |    |   |   ├── Invite.module.scss
    |    |    |    |   ├── Manage
    |    |    |    |   |   ├── Manage.jsx
    |    |    |    |   |   ├── index.js
    |    |    |    |   |   ├── Manage.module.scss
    |    |    |    |   ├── ResetPassword
    |    |    |    |   |   ├── ResetPassword.jsx
    |    |    |    |   |   ├── index.js
    |    |    |    |   |   ├── Invite.module.scss
    |    |    |    |   ├── Setting.jsx
    |    |    |    |   ├── index.js
    |    |    |    |   ├── setting.module.scss
    |    │    ├── index.js
    |    │    ├── Admin.jsx
    |    │    └── admin.module.scss
    │    ├── Broadcast
    |    │    ├── Component
    |    |    |    ├── AllBroadcasts
    |    |    |    |   ├── Card
    |    |    |    |   |   ├── Card.jsx
    |    |    |    |   |   ├── index.js
    |    |    |    |   |   ├── card.module.scss
    |    |    |    |   ├── Edit
    |    |    |    |   |   ├── Edit.jsx
    |    |    |    |   |   ├── index.js
    |    |    |    |   |   ├── edit.module.scss
    |    |    |    |   ├── AllBroadcasts.jsx
    |    |    |    |   ├── index.js
    |    |    |    |   ├── all-broadcasts.module.scss
    |    |    |    ├── Carousel
    |    |    |    |   ├── Edit
    |    |    |    |   |   ├── Card.jsx
    |    |    |    |   |   ├── index.js
    |    |    |    |   |   ├── card.module.scss
    |    |    |    |   ├── Modal
    |    |    |    |   |   ├── Edit.jsx
    |    |    |    |   |   ├── index.js
    |    |    |    |   |   ├── edit.module.scss
    |    |    |    |   ├── Carousel.jsx
    |    |    |    |   ├── index.js
    |    |    |    |   ├── carousel.module.scss
    |    |    |    |   ├── coustom-owl-carousel-style.scss
    |    │    ├── index.js
    |    │    ├── Broadcast.jsx
    |    │    └── broadcast.module.scss
    │    └── ContactUs
    │    |     ├── Faq.jsx
    │    |     ├── index.js
    │    |     └── ContactUs.module.scss
    │    └── Faq
    │    |     ├── Faq.jsx
    │    |     ├── index.js
    │    |     └── faq.module.scss
    │    └── ForgotPassword
    │    |     ├── ForgotPassword.jsx
    │    |     ├── index.js
    │    |     └── ForgotPassword.module.scss
    │    └── ForgotPasswordRecovery
    │    |     ├── ForgotPasswordRecovery.jsx
    │    |     ├── index.js
    │    |     └── ForgotPasswordRecovery.module.scss
    │    └── GetInvolved
    │    |     ├── GetInvolved.jsx
    │    |     ├── index.js
    │    |     └── get-involved.module.scss
    │    └── PrivacyPolicy
    │    |     ├── PrivacyPolicy.jsx
    │    |     ├── index.js
    │    |     └── privacy-policy.module.scss
    │    └── Terms
    │    |     ├── Terms.jsx
    │    |     ├── index.js
    │    |     └── terms.module.css
    │    ├── Resources
    |    │    ├── Component
    |    |    |    ├── ResourceSharingForm
    |    |    |    |   ├── ResourceSharingForm.jsx
    |    |    |    |   ├── index.js
    |    |    |    |   ├── resource-sharing-form.module.scss
    |    │    ├── index.js
    |    │    ├── Resources.jsx
    |    │    └── resources.module.scss
    ├── app.js
    ├── index.js
    ├── index.css
    ├── index.css
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

## Summary

1. Make a folder with the component name.
   If it is a page, make a folder inside `frontend/pages` folder.
   If it is a global component (like header, footer, navbar), component that is used in multiple pages, then make a folder inside `frontend/components` folder.
2. Strictly follow the [React rules](#react-component-conventions) mentioned above.
3. Follow the [CSS rules](#css-conventions) and edit all the classnames accoridingly. Note that bootstrap classes (row, col-, container) should be left as they are.
4. Do not worry about BEM Nomenclature for now.
