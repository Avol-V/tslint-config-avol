[![NPM][npm]][npm-url]
[![Dependencies][deps]][deps-url]
[![DevDependencies][deps-dev]][deps-dev-url]

# tslint-config-avol

[Avol’s](https://github.com/Avol-V) config for [TSLint](https://github.com/palantir/tslint).

## Installation

```
npm install --save-dev tslint tslint-config-avol
```

## Usage

In `tslint.json`:

```json
{
	"extends": "tslint-config-avol"
}
```

To use with type-check rules, in `tslint-project.json`:

```json
{
	"extends": ["tslint-config-avol", "tslint-config-avol/project"]
}
```

And run with:

```
tslint -c tslint-project.json -p \"scripts/tsconfig.json\"
```

Example scripts for `package.json`:

```json
{
  "scripts": {
    "lint:scripts-project": "tslint -c tslint-project.json -p tsconfig.json",
    "lint:scripts-other": "tslint \"{*.js,src/*.d.ts,test/*.{ts,tsx}}\"",
    "lint": "npm run lint:scripts-project && npm run lint:scripts-other"
  }
}
```

## Rules

* [TSLint](https://palantir.github.io/tslint/rules/)
* [ESLint rules for TSLint](https://github.com/buzinas/tslint-eslint-rules)
* [TSLint consistent codestyle](https://github.com/ajafff/tslint-consistent-codestyle)
* [TSLint Microsoft contrib](https://github.com/Microsoft/tslint-microsoft-contrib)
* [TSLint React](https://github.com/palantir/tslint-react)
* [TSLint Misc Rules](https://github.com/jwbay/tslint-misc-rules)

## Change Log

[View changelog](CHANGELOG.md).

## License

[MIT](LICENSE).

[npm]: https://img.shields.io/npm/v/tslint-config-avol.svg
[npm-url]: https://npmjs.com/package/tslint-config-avol

[deps]: https://img.shields.io/david/Avol-V/tslint-config-avol.svg
[deps-url]: https://david-dm.org/Avol-V/tslint-config-avol

[deps-dev]: https://img.shields.io/david/dev/Avol-V/tslint-config-avol.svg
[deps-dev-url]: https://david-dm.org/Avol-V/tslint-config-avol?type=dev
