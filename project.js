const tsRules = {
	'await-promise': true,
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
	// 'deprecation': true,
	'no-boolean-literal-compare': true,
	'no-for-in-array': true,
	'no-unnecessary-type-assertion': true,
};

module.exports = {
	rules: tsRules,
	defaultSeverity: 'warning',
};
