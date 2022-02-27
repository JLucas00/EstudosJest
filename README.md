# Meus estudos sobre Jest

yarn add --dev jest
jest --init  
yarn add -D @types/jest
yarn add --dev eslint eslint-plugin-jest
yarn eslint --init   

write in package.json

"scripts": {
  "test": "jest --watchAll"
},

write in .eslintrc.json

{
  "env": {
    "browser": true,
    "commonjs": true,
    "es2021": true,
    "jest/globals": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": "latest"
  },
  "extends": ["plugin:jest/recommended"],
  "plugins": ["jest"],
  "rules": {
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "error"
  }
}
