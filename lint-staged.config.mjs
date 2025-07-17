import { relative } from 'node:path';

const buildEslintCommand = (filenames) =>
	`next lint --fix --file ${filenames
		.map((f) => relative(process.cwd(), f))
		.join(' --file ')}`;

const config = {
	'*.{js,jsx,ts,tsx,json,md}': ['prettier --write'],
	'*.{js,jsx,ts,tsx}': [buildEslintCommand],
};

export default config;
