# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/) 
and this project adheres to [Semantic Versioning](http://semver.org/).

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

- `tslint` shoult be in peer and dev dependencies.
- `adjacent-overload-signatures` rule is ts-only.
