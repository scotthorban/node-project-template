## Node Project Template

### 1. Description

A repository template for node projects.

It contains:

- a `package.json` setup for npm
- `README.md` and `CHANGELOG.md` documents
- [eslint](https://eslint.org/) for typescript/javascript linting
- [prettier](https://prettier.io/) for code formatting
- a pre-populated `.gitignore` file for common files in the node ecosystem
- a pre-populated `.gitattributes` file enforcing Unix line endings
- pre-commit hooks using prek for:
  - conventional commit messages
  - eslint linting
  - prettier formatting
- npm tasks to run unit tests, test coverage, ruff linting + formatting
- a GitHub pull request template

### 2. Installation

#### 2.1 Pre-Requisites

This project template uses [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) for package and
project management.

```shell
# Installs all workspace dependencies by default
npm install
```

### 3. Local Run

```shell
npm run dev:frontend
```
