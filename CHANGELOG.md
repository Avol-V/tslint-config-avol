# Change Log

## [Unreleased]

### Added

- `no-conditional-assignment` rule.
- `switch-default` rule.
- `no-switch-case-fall-through` rule.
- `no-unused-expression` rule.
- `no-constant-condition` rule from `tslint-eslint-rules`.
- `no-empty-character-class` rule from `tslint-eslint-rules`.
- `no-ex-assign` rule from `tslint-eslint-rules`.
- `no-extra-boolean-cast` rule from `tslint-eslint-rules`.
- `no-inner-declarations` rule from `tslint-eslint-rules`.
- `ter-no-irregular-whitespace` rule from `tslint-eslint-rules`.
- `no-multi-spaces` rule from `tslint-eslint-rules`.
- `array-bracket-spacing` rule from `tslint-eslint-rules`.
- `block-spacing` rule from `tslint-eslint-rules`.
- `brace-style` rule from `tslint-eslint-rules`.
- `ter-computed-property-spacing` rule from `tslint-eslint-rules`.
- `ter-func-call-spacing` rule from `tslint-eslint-rules`.
- `ter-indent` rule from `tslint-eslint-rules`.
- `ter-max-len` rule from `tslint-eslint-rules`.
- `ter-newline-after-var` rule from `tslint-eslint-rules`.
- `object-curly-spacing` rule from `tslint-eslint-rules`.
- `ter-padded-blocks` rule from `tslint-eslint-rules`.
- `space-in-parens` rule from `tslint-eslint-rules`.
- `early-exit` rule from `tslint-consistent-codestyle`.
- `naming-convention` rule from `tslint-consistent-codestyle`.
- `no-accessor-recursion` rule from `tslint-consistent-codestyle`.
- `no-collapsible-if` rule from `tslint-consistent-codestyle`.
- `no-return-undefined` rule from `tslint-consistent-codestyle`.
- `no-static-this` rule from `tslint-consistent-codestyle`.
- `no-unnecessary-else` rule from `tslint-consistent-codestyle`.
- `no-var-before-return` rule from `tslint-consistent-codestyle`.
- `object-shorthand-properties-first` rule from `tslint-consistent-codestyle`.
- `max-func-body-length` rule from `tslint-microsoft-contrib`.
- `no-single-line-block-comment` rule from `tslint-microsoft-contrib`.
- `no-typeof-undefined` rule from `tslint-microsoft-contrib`.
- `no-unnecessary-override` rule from `tslint-microsoft-contrib`.
- `use-simple-attributes` rule from `tslint-microsoft-contrib`.
- `react-anchor-blank-noopener` rule from `tslint-microsoft-contrib`.
- `react-this-binding-issue` rule from `tslint-microsoft-contrib`.
- `jsx-alignment` rule from `tslint-react`.
- `jsx-boolean-value` rule from `tslint-react`.
- `jsx-curly-spacing` rule from `tslint-react`.
- `jsx-equals-spacing` rule from `tslint-react`.
- `jsx-key` rule from `tslint-react`.
- `jsx-no-string-ref` rule from `tslint-react`.
- `jsx-self-close` rule from `tslint-react`.
- `jsx-space-before-trailing-slash` rule from `tslint-react`.
- `jsx-wrap-multiline` rule from `tslint-react`.
- `class-method-newlines` rule from `tslint-misc-rules`.
- `jsx-no-braces-for-string-attributes` rule from `tslint-misc-rules`.
- `react-lifecycle-order` rule from `tslint-misc-rules`.
- `prefer-or-operator-over-ternary` rule from `tslint-misc-rules`.

### Changed

- `tslint` updated to version 5.11.0.
- `allow-pascal-case` in `variable-name` for ts and js.
- `member-ordering` is now `fields-first`.
- `variable-name` rule is now used only for ban keywords.

## Removed

- `max-line-length` rule (used `ter-max-len` instead).
- `class-name` rule (used `naming-convention` instead).

## [2.3.0] - 2018-05-09

### Added

- `prefer-while` rule.

### Changed

- `tslint` updated to version 5.10.0.

## [2.2.0] - 2018-03-13

### Added

- `no-dynamic-delete` rule.
- `prefer-readonly` rule.
- disabled `temporalDeadZone` option for `no-shadowed-variable` rule.

### Changed

- `tslint` updated to version 5.9.1.

## [2.1.0] - 2018-01-03

### Added

- `ban-comma-operator` rule.
- `no-duplicate-switch-case` rule.
- `no-return-await` rule.
- `no-trailing-whitespace` rule with allowing blank lines, comments and template strings.
- `check-multiline-start` option to `jsdoc-format` rule.
- `esSpecCompliant` option to `trailing-comma` rule.
- `exclude-class-expressions` option to `max-classes-per-file` rule.

### Changed

- `tslint` updated to version 5.8.0.
- `curly` rule now in common options (for js and ts) with addition `ignore-same-line` option.

### Removed

- `typeof-compare` rule is deprecated because typescript already does that check.
- `--type-check` CLI option is deprecated and no longer necessary (it’s only need `--project` now to enable typed rules).

## [2.0.0] - 2017-12-07

### Changed

- Config with type checks renamet from `typeCheck` to `project`.

## [1.4.0] - 2017-06-07

### Changed

- Anonymous function should have space before paren.

## [1.3.0] - 2017-06-07

### Changed

- `tslint` updated to version 5.4.3.

### Added

- Rule to prefer `x + 1` over `1 + x`.
- Rule to check whether the final clause of a switch statement ends in `break;`.

## [1.2.0] - 2017-05-12

### Changed

- Allow skipping types of parameters for arrow functions.

## [1.1.0] - 2017-05-11

### Added

- Separate set of rules that require type information.

## [1.0.3] - 2017-05-10

### Changed

- Allow usage of `console.error`.

## [1.0.2] - 2017-05-10

### Changed

- Allow PascalCase for variable name format in JS (not TS).

## [1.0.1] - 2017-05-10

### Changed

- Remove requiring of trailing comma in JS.

### Fixed

- `tslint` should be in peer and dev dependencies.
- `adjacent-overload-signatures` rule is ts-only.
