# eslint-plugin-skip-adobe-directives

This is a package to skip linting of adobe directives.

## Why
Adobe directives start with # character.
```jsx
#target illustrator
#targetEngine session
```
Eslint will put error on these syntax.
```
  1:1  error  Parsing error: Unexpected character '#'
```

This package helps to skip linting on these lines.

## Install
```sh
npm install --save-dev eslint-plugin-skip-adobe-directives
```

## Usage
Add this plugin on the eslint config file like ".eslintrc".
```json
{
  "plugins": ["skip-adobe-directives"]
}
```
