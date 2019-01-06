const Path = require( 'path' );

const commonRules = {
	'array-bracket-spacing': {
		options: [
			'never',
			{
				objectsInArrays: true,
				arraysInArrays: true,
			},
		],
	},
	'arrow-parens': true,
	'arrow-return-shorthand': true,
	'ban-comma-operator': true,
	'binary-expression-operand-order': true,
	'block-spacing': {
		options: ['always'],
	},
	'brace-style': {
		options: ['allman'],
	},
	'class-method-newlines': true,
	'comment-format': {
		options: ['check-space'],
	},
	'curly': {
		options: ['ignore-same-line'],
	},
	'eofline': true,
	'forin': true,
	'function-constructor': true,
	'import-spacing': true,
	'indent': {
		options: ['tabs'],
	},
	'jsdoc-format': {
		options: ['check-multiline-start'],
	},
	'jsx-alignment': true,
	'jsx-boolean-value': {
		options: ['always'],
	},
	'jsx-curly-spacing': {
		options: ['never'],
	},
	'jsx-equals-spacing': {
		options: ['never'],
	},
	'jsx-key': true,
	'jsx-no-braces-for-string-attributes': true,
	'jsx-no-string-ref': true,
	'jsx-self-close': true,
	'jsx-space-before-trailing-slash': true,
	'jsx-wrap-multiline': true,
	'label-position': true,
	'linebreak-style': {
		options: ['LF'],
	},
	'max-classes-per-file': {
		options: [1, 'exclude-class-expressions'],
	},
	// 'max-line-length': {
	// 	options: [120],
	// },
	'max-file-line-count': {
		options: [1000],
	},
	'new-parens': true,
	'newline-before-return': true,
	'no-arg': true,
	'no-accessor-recursion': true,
	'no-collapsible-if': true,
	'no-conditional-assignment': true,
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
	'no-constant-condition': true,
	'no-construct': true,
	'no-debugger': true,
	'no-duplicate-imports': true,
	'no-duplicate-super': true,
	'no-duplicate-switch-case': true,
	'no-dynamic-delete': true,
	'no-empty': true,
	'no-empty-character-class': true,
	'no-eval': true,
	'no-ex-assign': true,
	'no-extra-boolean-cast': true,
	'no-inner-declarations': true,
	'no-invalid-template-strings': true,
	'no-multi-spaces': {
		options: {
			exceptions: {
				BinaryExpression: false,
				PropertyAssignment: false,
				VariableDeclaration: false,
			},
		},
	},
	'no-parameter-reassignment': true,
	'no-reference': true,
	'no-return-await': true,
	'no-return-undefined': true,
	'no-shadowed-variable': {
		options: {
			class: false,
			function: false,
			temporalDeadZone: false,
		},
	},
	'no-sparse-arrays': true,
	'no-static-this': true,
	'no-string-literal': true,
	'no-string-throw': true,
	'no-switch-case-fall-through': true,
	'no-this-assignment': true,
	'no-trailing-whitespace': {
		options: [
			'ignore-blank-lines',
			'ignore-template-strings',
			'ignore-comments',
		],
	},
	'no-unnecessary-callback-wrapper': true,
	'no-unnecessary-else': true,
	'no-unnecessary-initializer': true,
	'no-unsafe-finally': true,
	'no-unused-expression': {
		options: [
			'allow-fast-null-checks',
			'allow-new',
			'allow-tagged-template',
		],
	},
	'no-var-before-return': {
		options: ['allow-destructuring'],
	},
	'no-var-keyword': true,
	'number-literal-format': true,
	'object-curly-spacing': {
		options: ['always'],
	},
	'object-literal-key-quotes': {
		options: ['consistent-as-needed'],
	},
	'object-literal-shorthand': true,
	'object-shorthand-properties-first': true,
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
	'prefer-or-operator-over-ternary': true,
	'prefer-switch': {
		options: {
			'min-cases': 3,
		},
	},
	'prefer-template': {
		options: ['allow-single-concat'],
	},
	'prefer-while': true,
	'quotemark': {
		options: [
			'single',
			'jsx-double',
			'avoid-escape',
		],
	},
	'radix': true,
	'react-lifecycle-order': {
		options: [
			'componentWillMount', // deprecated
			'UNSAFE_componentWillMount', // deprecated
			'componentDidMount',
			'componentWillReceiveProps', // deprecated
			'UNSAFE_componentWillReceiveProps', // deprecated
			'shouldComponentUpdate',
			'componentWillUpdate', // deprecated
			'UNSAFE_componentWillUpdate', // deprecated
			'getSnapshotBeforeUpdate',
			'componentDidUpdate',
			'componentWillUnmount',
			'componentDidCatch',
			'render',
		],
	},
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
	'space-in-parens': {
		options: [
			'always',
			{
				exceptions: ['empty'],
			},
		],
	},
	'switch-default': true,
	'switch-final-break': {
		options: ['always'],
	},
	'ter-computed-property-spacing': {
		options: ['never'],
	},
	'ter-func-call-spacing': {
		options: ['never'],
	},
	'ter-indent': {
		options: [
			'tab',
			{
				SwitchCase: 1,
				VariableDeclarator: 1,
				outerIIFEBody: 1,
				MemberExpression: 1,
				FunctionDeclaration: {
					body: 1,
					parameters: 1,
				},
				FunctionExpression: {
					body: 1,
					parameters: 1,
				},
				CallExpression: {
					arguments: 1,
				},
			},
		],
	},
	'ter-max-len': {
		options: {
			code: 120,
			tabWidth: 4,
		},
	},
	'ter-newline-after-var': {
		options: ['always'],
	},
	'ter-no-irregular-whitespace': {
		options: {
			skipStrings: true,
			skipComments: true,
			skipRegExps: true,
			skipTemplates: true,
		},
	},
	'ter-no-self-compare': true,
	'ter-padded-blocks': {
		options: ['never'],
	},
	'triple-equals': {
		options: ['allow-null-check'],
	},
	'use-isnan': true,
	'unnecessary-constructor': true,
	'variable-name': {
		options: [
			'ban-keywords',
		],
	},
	'whitespace': {
		options: [
			'check-branch',
			'check-decl',
			'check-operator',
			'check-module',
			'check-separator',
			'check-rest-spread',
			'check-type',
			'check-typecast',
			'check-type-operator',
			'check-preblock',
		],
	},
};
const jsRules = {
	'naming-convention': {
		options: [
			{
				type: 'default',
				leadingUnderscore: 'forbid',
				trailingUnderscore: 'forbid',
				format: [
					'strictCamelCase',
				],
			},
			{
				type: 'variable',
				format: [
					'strictCamelCase',
					'StrictPascalCase',
				],
			},
			{
				type: 'variable',
				modifiers: ['global', 'const'],
				format: [
					'strictCamelCase',
					'StrictPascalCase',
					'UPPER_CASE',
				],
			},
			{
				type: 'variable',
				modifiers: ['export', 'const'],
				format: [
					'UPPER_CASE',
				],
			},
			{
				type: 'functionVariable',
				modifiers: ['export', 'const'],
				format: [
					'strictCamelCase',
					'StrictPascalCase',
				],
			},
			{
				type: 'parameter',
				modifiers: ['unused'],
				leadingUnderscore: 'allow',
			},
			{
				type: 'member',
				leadingUnderscore: 'allow',
				format: [
					'camelCase',
				],
			},
			{
				type: 'property',
				modifiers: ['static'],
				format: [
					'camelCase',
					'UPPER_CASE',
				],
			},
			{
				type: 'type',
				format: [
					'StrictPascalCase',
				],
			},
		],
	},
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
	'interface-over-type-literal': true,
	'max-func-body-length': {
		options: {
			'arrow-body-length': 100,
			'ctor-body-length': 50,
			'func-body-length': 200,
			'func-express-body-length': 100,
			'method-body-length': 150,
			'ignore-comments': true,
			'ignore-parameters-to-function-regex': '^describe$',
		},
	},
	'member-access': {
		options: [
			'check-accessor',
			'check-constructor',
		],
	},
	'member-ordering': {
		options: {
			order: 'fields-first',
		},
	},
	'naming-convention': {
		options: [
			{
				type: 'default',
				leadingUnderscore: 'forbid',
				trailingUnderscore: 'forbid',
				format: [
					'strictCamelCase',
				],
			},
			{
				type: 'variable',
				format: [
					'strictCamelCase',
					'StrictPascalCase',
				],
			},
			{
				type: 'variable',
				modifiers: ['global', 'const'],
				format: [
					'strictCamelCase',
					'StrictPascalCase',
					'UPPER_CASE',
				],
			},
			{
				type: 'variable',
				modifiers: ['export', 'const'],
				format: [
					'UPPER_CASE',
				],
			},
			{
				type: 'functionVariable',
				modifiers: ['export', 'const'],
				format: [
					'strictCamelCase',
					'StrictPascalCase',
				],
			},
			{
				type: 'parameter',
				modifiers: ['unused'],
				leadingUnderscore: 'allow',
			},
			{
				type: 'member',
				format: [
					'camelCase',
				],
			},
			{
				type: 'member',
				modifiers: ['protected'],
				leadingUnderscore: 'require',
			},
			{
				type: 'member',
				modifiers: ['private'],
				leadingUnderscore: 'require',
			},
			{
				type: 'property',
				modifiers: ['public', 'static', 'const'],
				format: [
					'UPPER_CASE',
				],
			},
			{
				type: 'type',
				format: [
					'StrictPascalCase',
				],
			},
			{
				type: 'class',
				modifiers: ['abstract'],
				prefix: 'Abstract',
			},
			{
				type: 'interface',
				prefix: ['I', ''],
			},
			{
				type: 'genericTypeParameter',
				prefix: 'T',
			},
		],
	},
	'no-angle-bracket-type-assertion': true,
	'no-empty-interface': true,
	'no-internal-module': true,
	'no-misused-new': true,
	'no-namespace': true,
	'no-non-null-assertion': true,
	'no-parameter-properties': true,
	'no-reference-import': true,
	'no-single-line-block-comment': true,
	'no-typeof-undefined': true,
	'no-unnecessary-override': true,
	'no-var-requires': true,
	'prefer-method-signature': true,
	'react-anchor-blank-noopener': {
		options: ['force-rel-redundancy'],
	},
	'react-this-binding-issue': {
		options: {
			'allow-anonymous-listeners': true,
			'bind-decorators': ['autobind'],
		},
	},
	'trailing-comma': {
		options: {
			multiline: 'always',
			singleline: 'never',
			esSpecCompliant: true,
		},
	},
	'type-literal-delimiter': {
		options: {
			singleLine: 'never',
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
	'use-simple-attributes': true,
};

function getModuleDirectory( module, additionalPath = '' )
{
	return Path.join(
		Path.dirname( require.resolve( module ) ),
		additionalPath
	);
}

module.exports = {
	rulesDirectory: [
		getModuleDirectory( 'tslint-eslint-rules', 'dist/rules' ),
		getModuleDirectory( 'tslint-consistent-codestyle' ),
		getModuleDirectory( 'tslint-microsoft-contrib' ),
		getModuleDirectory( 'tslint-react', 'rules' ),
		getModuleDirectory( 'tslint-misc-rules' ),
	],
	rules: Object.assign( {}, commonRules, tsRules ),
	jsRules: Object.assign( {}, commonRules, jsRules ),
	defaultSeverity: 'warning',
};
