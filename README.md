<!-- Intro Section-->
# An expanded ToDo List
A ToDo List using [React](https://react.dev/), [TailwindCSS](https://tailwindcss.com/), and [Vite](https://vitejs.dev/).

<!-- Section-->
## Quick Start
```bash
npm install

npm run dev

```

<!-- Section-->
## Table of Contents

- [Features](#features)
- [Commands](#commands)
- [Project Structure](#project-structure)
- [API Documentation](#current-routes)
- [Error Handling](#error-handling)
- [Linting](#linting)
- [Contributing](#contributing)

<!-- Section-->
## Features

|     Completed      |          Feature          |                                                              Technology                                                              |
|:------------------:|:-------------------------:|:------------------------------------------------------------------------------------------------------------------------------------:|
| :heavy_check_mark: |     **SQL database**      |                          [PostgreSQL](https://www.postgresql.org) with [Prisma](https://www.prisma.io) ORM                           |
| :heavy_check_mark: |    **Authenticatione**    |                                                [passport](http://www.passportjs.org)                                                 |
| :heavy_check_mark: |    **Data Validation**    |                                                        [Joi](https://joi.dev)                                                        |
| :heavy_check_mark: |        **Logging**        |                  [winston](https://github.com/winstonjs/winston) and [morgan](https://github.com/expressjs/morgan)                   |
| :heavy_check_mark: |        **Testing**        |                                                      [Jest](https://jestjs.io)                                                       |
| :heavy_check_mark: |    **Error handling**     |                                                      Centralized Error Handling                                                      |
|        :x:         |   **API documentation**   | [swagger-jsdoc](https://github.com/Surnet/swagger-jsdoc) and [swagger-ui-express](https://github.com/scottie1984/swagger-ui-express) |
| :heavy_check_mark: | **Environment variables** |             [dotenv](https://github.com/motdotla/dotenv) and [cross-env](https://github.com/kentcdodds/cross-env#readme)             |
|        :x:         |       **Security**        |                                                 [helmet](https://helmetjs.github.io)                                                 |
| :heavy_check_mark: |         **CORS**          |                                              [cors](https://github.com/expressjs/cors)                                               |
|        :x:         |      **Compression**      |                                  gzip using [compression](https://github.com/expressjs/compression)                                  |
|        :x:         |    **Docker support**     |                                                                 WIP                                                                  |
| :heavy_check_mark: |        **Linting**        |                                   [ESLint](https://eslint.org) and [Prettier](https://prettier.io)                                   |
| :heavy_check_mark: |    **Editor config**:     |                                                 [EditorConfig](https://editorconfig)                                                 |


<!-- Section-->
## Commands

Running locally:

```bash
npm run dev
```

Running in production:

```bash
npm start
```

Testing:

```bash
# Run Tests
```

Linting:

```bash
# run ESLint
npm lint

# fix ESLint errors
npm lint:fix

# run prettier
npm prettier

# fix prettier errors
npm prettier:fix
```

<!-- Section-->
## Project Structure

```
src\
 |--assets\         # Contains pictures, svgs, etc
 |--components\    # Multi-use components
 |--configs\            # Configuration related things such as routes
 |--features\    # Components made up of multi-use components, ie Navbar.
 |--hooks\         # Custom hooks
 |--layouts\       # Page Layout structure
 |--store\          # Houses Zustand stores
 |--utils\          # Utility classes and functions
 |--views\    # Technically pages
 |--App.jsx          # App Setup
 |--index.css        # TailwindCSS applies
 |--index.jsx       # Entry point
```

<!-- Section-->
### Current Routes

List of available routes:

**Auth routes**:\
`/auth/register` - Register\
`/auth/login` - Login\

**Admin routes**:\
`/admin` - Creates user\
`/admin` - Grab all users\

<!-- Section-->
## Error Handling



<!-- Section-->
## Linting

Linting is done using [ESLint](https://eslint.org/) and [Prettier](https://prettier.io). r.

To modify the ESLint configuration, update the `.eslintrc.json` file. To modify the Prettier
configuration, update the `.prettierrc.json` file.

To prevent a certain file or directory from being linted, add it to `.eslintignore` and `.
prettierignore`.

To maintain a consistent coding style across different IDEs, the project contains `.editorconfig

<!-- Section-->
## Contributing

Contributions are more than welcome!


<!-- Section-->
## License

[MIT](LICENSE)