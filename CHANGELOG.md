# Change Log

All changes to this project will be documented in this file.

This format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).
This project adheres to [semantic versioning](https://semver.org/).

## 0.1.0

- [#1](https://github.com/scotthorban/node-project-template/issues/1) - Added:
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
