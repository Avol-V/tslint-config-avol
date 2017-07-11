const commonRules = {
	'arrow-parens': true,
	'arrow-return-shorthand': true,
	'binary-expression-operand-order': true,
	'class-name': true,
	'comment-format': {
		options: ['check-space'],
	},
	'eofline': true,
	'forin': true,
	'import-spacing': true,
	'indent': {
		options: ['tabs'],
	},
	'jsdoc-format': true,
	'label-position': true,
	'linebreak-style': {
		options: ['LF'],
	},
	'max-classes-per-file': {
		options: [1],
	},
	'max-line-length': {
		options: [120],
	},
	'max-file-line-count': {
		options: [1000],
	},
	'new-parens': true,
	'newline-before-return': true,
	'no-arg': true,
	'no-consecutive-blank-lines': true,
	'no-console': {
		options: [
			'debug',
			'info',
			'log',
			'time',
			'timeEnd',
			'trace',
		],
	},
	'no-construct': true,
	'no-debugger': true,
	'no-duplicate-super': true,
	'no-empty': true,
	'no-eval': true,
	'no-invalid-template-strings': true,
	'no-reference': true,
	'no-shadowed-variable': true,
	'no-sparse-arrays': true,
	'no-string-literal': true,
	'no-string-throw': true,
	'no-unnecessary-callback-wrapper': true,
	'no-unnecessary-initializer': true,
	'no-unsafe-finally': true,
	'no-var-keyword': true,
	'number-literal-format': true,
	'object-literal-key-quotes': {
		options: ['consistent-as-needed'],
	},
	'object-literal-shorthand': true,
	'one-variable-per-declaration': {
		options: ['ignore-for-loop'],
	},
	'only-arrow-functions': {
		options: [
			'allow-declarations',
			'allow-named-functions',
		],
	},
	'ordered-imports': {
		options: {
			'import-sources-order': 'case-insensitive',
			'named-imports-order': 'case-insensitive',
		},
	},
	'prefer-const': true,
	'prefer-for-of': true,
	'prefer-function-over-method': {
		options: [
			'allow-public',
			'allow-protected',
		],
	},
	'prefer-switch': {
		options: {
			'min-cases': 3,
		},
	},
	'prefer-template': {
		options: ['allow-single-concat'],
	},
	'quotemark': {
		options: [
			'single',
			'jsx-double',
			'avoid-escape',
		],
	},
	'radix': true,
	'semicolon': {
		options: ['always'],
	},
	'space-before-function-paren': {
		options: {
			anonymous: 'always',
			asyncArrow: 'always',
			constructor: 'never',
			method: 'never',
			named: 'never',
		},
	},
	'switch-final-break': {
		options: ['always'],
	},
	'triple-equals': {
		options: ['allow-null-check'],
	},
	'typeof-compare': true,
	'use-isnan': true,
	'whitespace': {
		options: [
			'check-branch',
			'check-decl',
			'check-operator',
			'check-separator',
			'check-type',
			'check-typecast',
		],
	},
};
const jsRules = {
	'no-duplicate-variable': true,
	'trailing-comma': {
		options: {
			multiline: {
				objects: 'always',
				arrays: 'always',
				functions: 'never',
			},
			singleline: 'never',
		},
	},
	'variable-name': {
		options: [
			'allow-leading-underscore',
			'ban-keywords',
			'check-format',
			'allow-pascal-case',
		],
	},
};
const tsRules = {
	'adjacent-overload-signatures': true,
	'array-type': {
		options: ['array-simple'],
	},
	'ban-types': {
		options: [
			['Object', 'Avoid using the `Object` type. Did you mean `object`?'],
			['Function', 'Avoid using the `Function` type. Prefer a specific function type, like `() => void`.'],
			['Boolean', 'Avoid using the `Boolean` type. Did you mean `boolean`?'],
			['Number', 'Avoid using the `Number` type. Did you mean `number`?'],
			['String', 'Avoid using the `String` type. Did you mean `string`?'],
			['Symbol', 'Avoid using the `Symbol` type. Did you mean `symbol`?'],
		],
	},
	'callable-types': true,
	'completed-docs': {
		options: [
			'classes',
			'enums',
			'functions',
			'interfaces',
			'methods',
			'properties',
		],
	},
	'curly': true,
	'interface-over-type-literal': true,
	'member-access': {
		options: [
			'check-accessor',
			'check-constructor',
		],
	},
	'member-ordering': {
		options: {
			order: [
				'public-static-field',
				'protected-static-field',
				'private-static-field',
				'public-instance-field',
				'protected-instance-field',
				'private-instance-field',
				'public-static-method',
				'protected-static-method',
				'private-static-method',
				'constructor',
				'public-instance-method',
				'protected-instance-method',
				'private-instance-method',
			],
		},
	},
	'no-angle-bracket-type-assertion': true,
	'no-empty-interface': true,
	'no-internal-module': true,
	'no-misused-new': true,
	'no-namespace': true,
	'no-non-null-assertion': true,
	'no-parameter-properties': true,
	'no-reference-import': true,
	'no-var-requires': true,
	'prefer-method-signature': true,
	'trailing-comma': {
		options: {
			multiline: 'always',
			singleline: 'never',
		},
	},
	'typedef': {
		options: [
			'call-signature',
			'parameter',
			'property-declaration',
		],
	},
	'typedef-whitespace': {
		options: [
			{
				'call-signature': 'nospace',
				'index-signature': 'nospace',
				'parameter': 'nospace',
				'property-declaration': 'nospace',
				'variable-declaration': 'nospace',
			},
			{
				'call-signature': 'onespace',
				'index-signature': 'onespace',
				'parameter': 'onespace',
				'property-declaration': 'onespace',
				'variable-declaration': 'onespace',
			},
		],
	},
	'unified-signatures': true,
	'variable-name': {
		options: [
			'allow-leading-underscore',
			'ban-keywords',
			'check-format',
		],
	},
};

module.exports = {
	rules: Object.assign( {}, commonRules, tsRules ),
	jsRules: Object.assign( {}, commonRules, jsRules ),
	defaultSeverity: 'warning',
};
