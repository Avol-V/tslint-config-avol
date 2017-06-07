[![NPM][npm]][npm-url]
[![Dependencies][deps]][deps-url]
[![DevDependencies][deps-dev]][deps-dev-url]

# tslint-config-m18

[M18](https://github.com/m18ru) config for [TSLint](https://github.com/palantir/tslint).

## Installation

```
npm install --save-dev tslint tslint-config-m18
```

## Usage

In `tslint.json`:

```json
{
	"extends": "tslint-config-m18"
}
```

To use with type-check rules, in `tslint-type-check.json`:

```json
{
	"extends": ["tslint-config-m18", "tslint-config-m18/typeCheck"]
}
```

And run with:

```
tslint -c tslint-type-check.json -p \"scripts/tsconfig.json\" --type-check
```

Example scripts for `package.json`:

```json
{
  "scripts": {
    "lint:scripts-project": "tslint -c tslint-type-check.json -p tsconfig.json --type-check",
    "lint:scripts-other": "tslint \"{*.js,src/*.d.ts,test/*.{ts,tsx}}\"",
    "lint": "npm run lint:scripts-project && npm run lint:scripts-other"
  }
}
```

## Rules

[TSLint](https://palantir.github.io/tslint/rules/)

## Change Log

[View changelog](CHANGELOG.md).

## License

[MIT](LICENSE).

[npm]: https://img.shields.io/npm/v/tslint-config-m18.svg
[npm-url]: https://npmjs.com/package/tslint-config-m18

[deps]: https://img.shields.io/david/m18ru/tslint-config-m18.svg
[deps-url]: https://david-dm.org/m18ru/tslint-config-m18

[deps-dev]: https://img.shields.io/david/dev/m18ru/tslint-config-m18.svg
[deps-dev-url]: https://david-dm.org/m18ru/tslint-config-m18?type=dev
